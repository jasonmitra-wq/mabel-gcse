#!/usr/bin/env node
/* Free check of a scripted AI lesson (brief docs/briefs/2026-11-11-scripted-teaching.md, steps 2 and 5a). No API.
 *
 *   node tools/check-script.js [lessonId]        (default p2-current-voltage)
 *
 * 1. Schema: every step of lessons/<subject>/<id>.script.json has the fields its type needs, every message is at most
 *    60 words, a tap question has exactly one right option and a reply for every other branch, every misconception id
 *    is one of tools/pilot/misconceptions.md, a "don't know" path has at most two levels and ends with the answer and
 *    why, an equation step names each symbol with its quantity and unit, and every worked example, practice
 *    generator, widget prediction, control and picture it names exists.
 * 2. Walk: every path is played through the real engine (js/teach-script.js) with a stub model: the main path (every
 *    answer right) and, for each question, each wrong branch, each "don't know" level (the smaller question answered
 *    right and wrong) and "move on"; practice right, wrong and "don't know" twice; her own-words line with all, some
 *    and none of the points, and "don't know". tools/check-transcript.js runs on each path. Zero findings required.
 * Exit 1 on any failure.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const TS = require(path.join(ROOT, 'js', 'teach-script.js'));
const Practice = require(path.join(ROOT, 'js', 'practice', 'practice.js'));
global.Practice = Practice;
require(path.join(ROOT, 'js', 'practice', 'physics.js'));
const MIS = require(path.join(ROOT, 'js', 'pilot', 'misconceptions.js'));
const X = require('./check-transcript.js');

const ID = process.argv[2] || 'p2-current-voltage';
const lesson = JSON.parse(fs.readFileSync(path.join(ROOT, 'lessons', 'physics', `${ID}.json`), 'utf8'));
const script = JSON.parse(fs.readFileSync(path.join(ROOT, 'lessons', 'physics', `${ID}.script.json`), 'utf8'));
const words = t => String(t || '').trim().split(/\s+/).filter(Boolean).length;
const misIds = new Set(MIS.map(m => m.id));

// ── 1. Schema ──
const fails = [];
const bad = (id, what) => fails.push(`${id}: ${what}`);
const TYPES = ['say', 'ask', 'equation', 'worked', 'practice', 'widget', 'own'];
const ids = new Set();
function checkAsk(id, q, sub = false) {
  if (!q.question) bad(id, 'no question');
  if (!['tap', 'number', 'text'].includes(q.kind)) bad(id, `kind "${q.kind}"`);
  if (!q.right) bad(id, 'no reply for right');
  const wrong = q.wrong || {};
  if (!wrong.other && !sub) bad(id, 'no reply for "other wrong"');
  if (q.kind === 'tap') {
    const opts = q.options || [];
    if (opts.length < 2) bad(id, 'fewer than two options');
    if (opts.filter(o => o.branch === 'right').length !== 1) bad(id, 'not exactly one right option');
    opts.filter(o => o.branch !== 'right').forEach(o => { if (!wrong[o.branch] && !wrong.other) bad(id, `no reply for option "${o.text}" (${o.branch})`); });
    if (new Set(opts.map(o => o.text)).size !== opts.length) bad(id, 'two options the same');
  }
  if (q.kind === 'number' && !(q.answer && typeof q.answer.value === 'number' && q.answer.unit)) bad(id, 'number question without answer value and unit');
  if (q.kind === 'text' && !(q.expected || []).length) bad(id, 'text question without expected answers');
  Object.keys(wrong).forEach(b => { if (/^M\d+$/.test(b) && !misIds.has(b)) bad(id, `wrong branch "${b}" is not a misconception id`); });
  [q.right, ...Object.values(wrong)].forEach(t => { if (words(t) > 60) bad(id, `reply over 60 words: "${t.slice(0, 50)}…"`); });
  if (words(q.question) > 60) bad(id, 'question over 60 words');
  if (!sub) {
    if ((q.idk || []).length > 2) bad(id, 'more than two "don\'t know" levels');
    (q.idk || []).forEach((lv, k) => {
      if (!lv.hint && !lv.ask) bad(id, `"don't know" level ${k + 1} has neither hint nor smaller question`);
      if (lv.hint && words(lv.hint) > 60) bad(id, `hint ${k + 1} over 60 words`);
      if (lv.ask) { if (lv.ask.kind !== 'tap') bad(id, 'the smaller question must be a tap question'); checkAsk(`${id} (smaller question)`, lv.ask, true); }
    });
    if (!q.answerWhy) bad(id, 'no answer with why at the end of "don\'t know"');
    else if (words(q.answerWhy) > 60) bad(id, 'answer with why over 60 words');
  }
}
script.keyPoints.forEach((kp, k) => {
  const L = lesson.keyPoints[kp.kp];
  if (!L) bad(`key point ${k + 1}`, 'not in the lesson file');
  kp.steps.forEach(s => {
    if (ids.has(s.id)) bad(s.id, 'id used twice'); ids.add(s.id);
    if (!TYPES.includes(s.type)) bad(s.id, `type "${s.type}"`);
    if (s.text && words(s.text) > 60) bad(s.id, `${words(s.text)} words (at most 60)`);
    if (s.type === 'say' && !s.text) bad(s.id, 'no text');
    if (s.picture && !((L.pictures || []).some(p => p.diagram === s.picture))) bad(s.id, `picture ${s.picture} not in the lesson's key point`);
    if (s.type === 'ask') checkAsk(s.id, s);
    if (s.type === 'equation') {
      const e = ((L.examBox || {}).equations || []).find(x => x.id === s.eq);
      if (!e) bad(s.id, `equation ${s.eq} not in the exam box`);
      else (e.units || []).forEach(u => {
        if (!new RegExp(`\\b${u.symbol}\\b[^.]*\\b${u.quantity}\\b[^.]*\\b${u.unit}\\b`, 'i').test(s.text)) bad(s.id, `does not name ${u.symbol} as the ${u.quantity} in ${u.unit}`);
      });
    }
    if (s.type === 'worked' && !s.question && !(L.workedExamples || [])[s.example]) bad(s.id, `no worked example ${s.example}`);
    if (s.type === 'worked' && s.question && !((s.steps || []).length && s.answer && typeof s.answer.value === 'number')) bad(s.id, 'a worked example in the script needs steps and an answer');
    if (s.type === 'practice' && !Practice.has(s.eq)) bad(s.id, `no practice generator ${s.eq}`);
    if (s.type === 'widget') {
      const w = (lesson.keyPoints[s.kpWidget] || {}).widget;
      if (!w) bad(s.id, `no widget in key point ${s.kpWidget + 1}`);
      else (s.predicts || []).forEach(pid => {
        const p = (w.options.predicts || []).find(x => x.id === pid);
        if (!p) return bad(s.id, `no prediction ${pid}`);
        const needs = ((s.overrides || {})[pid] || {}).needs || p.needs || [];
        needs.forEach(n => { if (!(s.controls || []).includes(n)) bad(s.id, `${pid} needs control "${n}", not in its controls`); });
        (p.options || []).forEach(o => { const t = o.short || o.text; if (/:/.test(t) || words(t) > 9) bad(s.id, `${pid}: option "${t}" is not a short prediction`); });
      });
    }
    if (s.type === 'own' && !(s.prompt && (s.points || []).length && s.idk)) bad(s.id, 'own words needs prompt, points and idk');
  });
});

// ── 2. Walk ──
// The stub model: her own-words line says which points it makes ("OWN:all", "OWN:some", "OWN:none").
function stub(sys, user) {
  if (/check a student's one-line answer/.test(sys)) {
    const line = (user.match(/Her line: "([^"]*)"/) || [])[1] || '';
    const n = (user.match(/^\d+\./gm) || []).length;
    return line === 'OWN:all' ? Array.from({ length: n }, (_, k) => k + 1).join(',') : line === 'OWN:some' ? '1' : '0';
  }
  if (/match a student's reply/.test(sys)) return '0';
  if (/mark one typed answer/.test(sys)) return 'OTHER';
  if (/sort one message/.test(sys)) return 'ANSWER';
  return 'A short answer from the lesson.';
}
// The words a cover-mode circuit widget shows (js/widgets/widgets.js), for the widget checks.
function widgetText(card) {
  const o = card.options || {}, ctl = o.controls || [];
  const out = [];
  if (ctl.includes('add')) out.push('Add a cell');
  if (ctl.includes('remove')) out.push('Take a cell away');
  if (o.resistor && ctl.includes('res')) out.push('Put the resistor in');
  if (o.switch && ctl.includes('sw')) out.push('Open the switch');
  if (!o.voltmeter && !o.hidePd && (ctl.includes('add') || ctl.includes('slider'))) out.push('Potential difference of the cell');
  if (o.voltmeter) out.push('Voltmeter across the lamp');
  (o.predicts || []).forEach(p => {
    out.push(p.question, ...(p.options || []).map(x => x.short || String(x.text).split(':')[0]));
    out.push(`Now test your prediction. ${p.tryShort || p.try || ''} ${p.reveal || 'Your prediction was right.'} ${p.afterTest || ''}`);
    out.push('Now explain it', (p.explain && (p.explain.promptShort || p.explain.prompt)) || '');
  });
  out.push(...(card.labels || []));
  return out.filter(Boolean).join(' | ');
}
// Plays one path. plan(step, st) → her input for the step she is on, or null for "the right answer".
async function play(plan) {
  const eng = TS.create({ call: async (s, u) => stub(s, u), classify: async (s, u) => stub(s, u), practice: Practice, lesson, script, misconceptions: MIS });
  const st = {}, T = [];
  const push = es => es.forEach(e => { if (e.card && e.card.type === 'widget') e.widgetText = widgetText(e.card); T.push(e); });
  push(eng.start(st).entries);
  for (let n = 0; n < 400 && !(st.pend && st.pend.t === 'end'); n++) {
    const s = script.keyPoints[st.kp] ? script.keyPoints[st.kp].steps[st.i] : null;
    let input = plan(s, st);
    if (input === null || input === undefined) input = rightInput(s, st);
    T.push({ role: 'user', text: input, pt: st.kp, tapped: /^(Next)$/.test(input) || (s && s.type === 'ask' && s.kind === 'tap') });
    const r = await eng.reply(st, input);
    push(r.entries || []);
  }
  return { T, done: st.pend && st.pend.t === 'end', calls: eng.calls };
}
function rightInput(s, st) {
  const p = st.pend || {};
  if (p.sub) return p.sub.options.find(o => o.branch === 'right').text;
  if (!s) return 'Next';
  if (s.type === 'ask') return s.kind === 'tap' ? s.options.find(o => o.branch === 'right').text : s.kind === 'number' ? String(s.answer.value) : s.expected[0];
  if (s.type === 'practice') return String(p.q.answer.value);
  if (s.type === 'own') return 'OWN:all';
  return 'Next';
}
// The paths: the main one, then one per branch of each question and each other choice point.
function paths() {
  const out = [{ name: 'main path (every answer right)', plan: () => null }];
  script.keyPoints.forEach(kp => kp.steps.forEach(s => {
    const at = (fn) => (step, st) => (step && step.id === s.id ? fn(step, st) : null);
    if (s.type === 'ask') {
      const wrongs = s.kind === 'tap' ? s.options.filter(o => o.branch !== 'right').map(o => ({ b: o.branch, input: o.text }))
        : s.kind === 'number' ? [...(s.wrongValues || []).map(w => ({ b: w.branch, input: String(w.value) })), { b: 'other', input: '99' }]
        : [{ b: 'other', input: 'something wrong' }];
      wrongs.forEach(w => out.push({ name: `${s.id} wrong (${w.b}): "${w.input}"`, plan: at(() => w.input) }));
      // "don't know" every time: each level, then the answer with why; the smaller question answered right, then wrong.
      for (const subRight of [true, false]) {
        out.push({ name: `${s.id} don't know at every level (smaller question ${subRight ? 'right' : 'wrong'})`, plan: at((step, st) => {
          if (st.pend && st.pend.sub) { const o = st.pend.sub.options.find(x => (x.branch === 'right') === subRight); return o.text; }
          return 'dont know';
        }) });
      }
      out.push({ name: `${s.id} "don't know" once, then right`, plan: at((step, st) => (st.pend.level === 0 ? 'dont know' : null)) });
      out.push({ name: `${s.id} move on`, plan: at(() => 'skip') });
    }
    if (s.type === 'practice') {
      out.push({ name: `${s.id} practice wrong`, plan: at((step, st) => String(st.pend.q.answer.value * 3 + 1)) });
      out.push({ name: `${s.id} practice don't know twice`, plan: at(() => 'dont know') });
    }
    if (s.type === 'own') ['OWN:some', 'OWN:none', 'dont know'].forEach(v => out.push({ name: `${s.id} own words "${v}"`, plan: at(() => v) }));
  }));
  return out;
}

(async () => {
  console.log(fails.length ? `FAIL  schema: ${fails.length}` : `ok    schema: ${script.keyPoints.reduce((t, k) => t + k.steps.length, 0)} steps in ${script.keyPoints.length} key points`);
  fails.forEach(f => console.log(`      ${f}`));
  let found = 0, walked = 0, unfinished = 0;
  const seen = new Map();
  for (const p of paths()) {
    walked++;
    const r = await play(p.plan);
    if (!r.done) { unfinished++; console.log(`FAIL  path "${p.name}" did not reach the end`); }
    const f = X.check(X.readEntries(r.T), lesson);
    f.forEach(x => {
      const key = `${x.check}|${x.what}`;
      if (seen.has(key)) return;
      seen.set(key, p.name);
      found++;
      console.log(`FAIL  ${x.check} (${x.id}) on path "${p.name}", ${x.n}: ${x.what}`);
    });
  }
  console.log(`${found || unfinished ? 'FAIL' : 'ok  '}  walk: ${walked} paths, ${found} distinct findings, ${unfinished} paths not finished`);
  process.exit(fails.length || found || unfinished ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
