#!/usr/bin/env node
/* Proof for flag SCRIPT_POLISH (brief docs/briefs/2026-11-18-shared-script-fixes.md, step 2). Free, no API.
 *
 *   node tools/check-polish.js [lessonId ...]      (default: every scripted lesson)
 *
 * Plays each scripted lesson through the real engine (js/teach-script.js) with a stub model, three ways:
 *   1. "don't know" to everything, to the end   → F14 idk-opener, F16 no-summary
 *   2. every own-words line makes every point   → F15 own-multi-point
 *   3. a question of her own at the first question, the model's answer opening "That question is asking …"
 *                                               → F17 question-comment
 * once with SCRIPT_POLISH on and once off (a child process with env SCRIPT_POLISH=0), and runs
 * tools/check-transcript.js on each. Proven when every one of the four checks finds something with the flag off
 * (in at least one lesson; F15 needs a lesson with a two-point own-words line) and nothing with it on. Exit 1 if not.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const ROOT = path.resolve(__dirname, '..');
const subjectOf = id => (fs.readdirSync(path.join(ROOT, 'lessons')).find(s => fs.existsSync(path.join(ROOT, 'lessons', s, id + '.json'))) || 'physics');
const CHECKS = ['idk-opener', 'own-multi-point', 'no-summary', 'question-comment'];

if (process.env.POLISH_CHILD) {
  const TS = require(path.join(ROOT, 'js', 'teach-script.js'));
  const Practice = require(path.join(ROOT, 'js', 'practice', 'practice.js'));
  global.Practice = Practice;
  require(path.join(ROOT, 'js', 'practice', 'physics.js'));
  const MIS = require(path.join(ROOT, 'js', 'pilot', 'misconceptions.js'));
  const X = require('./check-transcript.js');
  const id = process.env.POLISH_CHILD;
  const lesson = JSON.parse(fs.readFileSync(path.join(ROOT, 'lessons', subjectOf(id), `${id}.json`), 'utf8'));
  const script = JSON.parse(fs.readFileSync(path.join(ROOT, 'lessons', subjectOf(id), `${id}.script.json`), 'utf8'));
  const stub = (sys, user) => {
    if (/check a student's one-line answer/.test(sys)) return Array.from({ length: (user.match(/^\d+\./gm) || []).length }, (_, k) => k + 1).join(',');
    if (/sort one message/.test(sys)) return /what does that mean/.test(user) ? 'QUESTION' : 'ANSWER';
    if (/asked a question in the middle of a lesson/.test(sys)) return 'That question is asking which answer fits best. Look back at what the lesson just said.';
    if (/match a student's reply/.test(sys)) return '0';
    return 'OTHER';
  };
  const right = (s, st) => {
    const p = st.pend || {};
    if (p.sub) return p.sub.options.find(o => o.branch === 'right').text;
    if (!s) return 'Next';
    if (s.type === 'ask') return s.kind === 'tap' ? s.options.find(o => o.branch === 'right').text : s.kind === 'number' ? String(s.answer.value) : s.expected[0];
    if (s.type === 'practice') return String(p.q.answer.value);
    if (s.type === 'own') return 'my line has every point in it';
    return 'Next';
  };
  async function play(plan) {
    const eng = TS.create({ call: async (s, u) => stub(s, u), classify: async (s, u) => stub(s, u), practice: Practice, lesson, script, misconceptions: MIS });
    const st = {}, T = [...eng.start(st).entries];
    for (let n = 0; n < 900 && !(st.pend && st.pend.t === 'end'); n++) {
      const s = script.keyPoints[st.kp] ? script.keyPoints[st.kp].steps[st.i] : null;
      const input = plan(s, st) || right(s, st);
      T.push({ role: 'user', text: input, pt: st.kp, tapped: input === 'Next' || (s && s.type === 'ask' && s.kind === 'tap' && !/know|mean/.test(input)) });
      const r = await eng.reply(st, input);
      T.push(...(r.entries || []));
    }
    return X.check(X.readEntries(T), lesson);
  }
  (async () => {
    const idk = (s, st) => (s && ['ask', 'practice', 'own'].includes(s.type) ? 'dont know' : null);
    let asked = false;
    const question = (s, st) => (s && s.type === 'ask' && !asked && !(st.pend || {}).sub ? (asked = true, 'what does that mean?') : null);
    const found = [...await play(idk), ...await play(() => null), ...await play(question)];
    const counts = Object.fromEntries(CHECKS.map(c => [c, found.filter(x => x.check === c).length]));
    counts.twoPoint = script.keyPoints.some(k => k.steps.some(x => x.type === 'own' && x.points.length > 1));
    process.stdout.write(JSON.stringify(counts));
  })();
} else {
  const ids = process.argv.slice(2).length ? process.argv.slice(2)
    : require(path.join(ROOT, 'js', 'teach-script.js')).SCRIPTED_LESSONS;
  const run = (id, on) => JSON.parse(execFileSync(process.execPath, [__filename], { env: { ...process.env, POLISH_CHILD: id, SCRIPT_POLISH: on ? '1' : '0' }, encoding: 'utf8', maxBuffer: 1 << 26 }));
  const offTotal = Object.fromEntries(CHECKS.map(c => [c, 0])), onTotal = Object.fromEntries(CHECKS.map(c => [c, 0]));
  let bad = 0;
  for (const id of ids) {
    const off = run(id, false), on = run(id, true);
    CHECKS.forEach(c => { offTotal[c] += off[c]; onTotal[c] += on[c]; });
    const line = CHECKS.map(c => `${c} off ${off[c]} / on ${on[c]}`).join(', ');
    const fail = CHECKS.some(c => on[c] > 0) || ['idk-opener', 'no-summary', 'question-comment'].some(c => off[c] === 0) || (off.twoPoint && off['own-multi-point'] === 0);
    if (fail) bad++;
    console.log(`${fail ? 'FAIL' : 'ok  '}  ${id}: ${line}`);
  }
  const proven = CHECKS.every(c => offTotal[c] > 0 && onTotal[c] === 0);
  console.log(`${proven && !bad ? 'ok  ' : 'FAIL'}  totals: ${CHECKS.map(c => `${c} off ${offTotal[c]} / on ${onTotal[c]}`).join(', ')}`);
  process.exit(proven && !bad ? 0 : 1);
}
