#!/usr/bin/env node
/* The scripted key-point run (brief docs/briefs/2026-10-28-small-fixes.md, step 2). Free: no API.
 *
 *   node tools/check-kp-run.js [lessonId ...]   (default p2-current-voltage p2-components)
 *
 * Runs a whole pilot AI lesson through js/teach-core.js as js/teach.js does (each reply's "shown first"
 * messages become their own entries), with a stub tutor model and a stub classifier, and a scripted
 * student: she taps Next, answers number questions (right, then wrong, in turn), types answers to the
 * tutor's questions (marked right and wrong in turn), and asks a question of her own, and a question that
 * is also an answer, now and then. The stub model writes the faults seen in the 2026-10-28 site test
 * (a doubled verdict, a verdict opening the answer to her question), so the code must take them off.
 * Checks, for every message:
 *   a. a worked example or number question never uses an equation the tutor has not stated before it;
 *   b. the verdict appears once ("Yes, that's right. That's right." fails);
 *   c. a message answering her question (or the answer shown first) does not open with a verdict;
 *   d. an added "The answer:" line never starts with a bare pronoun;
 *   e. each widget appears once;
 * and at the end: the lesson finished, every key point ticked.
 * Exit 1 on any failure.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const TeachCore = require(path.join(ROOT, 'js', 'teach-core.js'));
const Practice = require(path.join(ROOT, 'js', 'practice', 'practice.js'));
global.Practice = Practice;
require(path.join(ROOT, 'js', 'practice', 'physics.js'));
const MIS = require(path.join(ROOT, 'js', 'pilot', 'misconceptions.js'));

const LESSONS = process.argv.slice(2).length ? process.argv.slice(2) : ['p2-current-voltage', 'p2-components'];
const VERDICT = /^\W*(yes, that'?s right|partly right|not quite|that'?s fine)\b/i;
const ANY_VERDICT = /\b(yes, that'?s right|that'?s right|not quite|partly right|exactly|spot on|correct)\b/i;
const PRONOUN = /^\W*(it|its|they|their|them|this|that|these|those|he|she|which)\b/i;

function lessonOf(id) { return JSON.parse(fs.readFileSync(path.join(ROOT, 'lessons', 'physics', `${id}.json`), 'utf8')); }
const flat = x => String(x || '').toLowerCase().replace(/<[^>]+>/g, '').replace(/\*\*/g, '').replace(/[\s×*·]+/g, '');

async function runLesson(id) {
  const fails = [];
  const fail = (n, what) => { fails.push(`S${n}: ${what}`); };
  let mark = 'CORRECT', cls = 'ANSWER', seed = 1;
  // The stub tutor model: the faults of the 2026-10-28 run, written on purpose.
  const call = async (sys, user) => {
    if (/You mark one reply/.test(sys)) return mark;
    if (/Answer just that question/.test(user)) return `Not quite "no matter what". The current is the same all the way round the loop.`;
    if (/She asked a question\. Answer exactly/.test(user)) return `That's right, the current is the same everywhere in the loop. What is the current after the lamp?`;
    if (/The words that give this verdict/.test(user)) return /Her answer is right/.test(user) ? `Yes, that's right. That's right. The charge is not used up.` : `Not quite. Not quite. The charge is not used up.`;
    if (/Tell her the next part/.test(user)) return '';   // the lesson's own sentences are used
    if (/revision notes/.test(sys)) return 'Current is a flow of charge.';
    return `Charge flows round the loop when the switch is closed. What do you think happens to the current?`;
  };
  const core = TeachCore.create({ call, classify: async () => cls, practice: Practice, rand: () => ((seed = (seed * 16807) % 2147483647) / 2147483647) });
  const data = lessonOf(id), points = core._buildPoints(data);
  core.bind(data, points, null);
  const state = core._freshState();
  core.bind(data, points, state);
  core.pilotContext({ lessonId: id, glossary: [], opened: () => true, misconceptions: MIS.map(m => m.text), recall: null });
  const T = state.transcript = [];
  const opening = await core._callWithLengthGuard(core._buildSystemPrompt(0), core._firstOpeningPrompt(), true);
  T.push({ role: 'assistant', text: opening, pt: 0, opening: true });
  const widgets = {}, seen = { answers: [], first: 0, asides: 0 };
  const said = () => T.filter(x => x.role === 'assistant').map(x => flat(x.text)).join(' ');
  const eqOf = eq => points.flatMap(p => (p.examBox || {}).equations || []).find(e => e.id === eq);
  let n = 0, k = 0;
  for (; n < 400 && !(state.pilot && state.pilot.finished); n++) {
    const last = T[T.length - 1], P = core._pilot(), pend = P.pending || {};
    let text, asking = false;
    if (state.farewell) break;
    if (last.choices && last.choices.includes('Keep going')) text = 'Keep going';
    else if (last.choices && last.choices.some(c => /cards/i.test(c))) text = last.choices.find(c => /cards/i.test(c));
    else if (pend.t === 'num' && pend.q) { text = k++ % 2 ? `${pend.q.answer.value}` : `${pend.q.answer.value * 3 + 1}`; cls = 'ANSWER'; }
    else if (pend.t === 'mc') { text = String((pend.step && pend.step.q && pend.step.q.options || [])[0] || 'a'); }
    else if (last.choices && last.choices.length && !/\?/.test(last.text)) text = last.choices.includes('Next') ? 'Next' : last.choices[0];
    else {
      // A question of the tutor's waiting: an answer, a question of hers, or both, in turn.
      const r = k++ % 5;
      if (r === 3) { text = 'wait why does that happen'; cls = 'QUESTION'; asking = true; }
      else if (r === 4) { text = 'so like does that mean it never changes no matter what'; cls = 'BOTH'; asking = true; }
      else { text = 'the charge keeps flowing round the loop'; cls = 'ANSWER'; mark = r === 1 ? 'WRONG' : 'CORRECT'; }
    }
    T.push({ role: 'user', text, ...(state.complete ? {} : { pt: state.currentPointIndex }) });
    const { reply, recap, decision } = await core._getTutorReply(text);
    if (recap) T.push({ role: 'recap', pt: decision.idx, lines: recap, done: false });
    const entry = core._replyEntry(reply, decision);
    const firsts = entry.before || [];
    firsts.forEach(b => T.push({ role: 'assistant', text: b, ...(entry.pt != null ? { pt: entry.pt } : {}) }));
    delete entry.before;
    if (entry.saveCards) delete entry.saveCards;
    // a. an equation used before it is stated (the "shown first" lines count: they come before).
    const P2 = core._pilot(), p2 = P2.pending || {};
    const eq = (entry.card && entry.card.type === 'worked' && p2.x && p2.x.equation) || (p2.t === 'num' && p2.q && p2.q.equation) || null;
    if (eq && eqOf(eq) && !said().includes(flat(eqOf(eq).symbols))) fail(n, `uses ${eqOf(eq).symbols} before the tutor states it: "${reply.slice(0, 80)}"`);
    T.push(entry);
    const msgs = [...firsts, reply].map(m => String(m || ''));
    // b. the verdict once per message.
    msgs.forEach(m => { const s = m.split(/(?<=[.!?])\s+/); if (VERDICT.test(s[0] || '') && ANY_VERDICT.test(s[1] || '') && /^\W*(yes, )?(that'?s right|not quite|partly right|exactly|correct)\W*$/i.test(s[1] || '')) fail(n, `verdict twice: "${m.slice(0, 80)}"`); });
    // c. her question answered without a verdict of its own.
    if (asking && cls === 'BOTH' && firsts.length) seen.first++;
    if (asking && cls === 'QUESTION') seen.asides++;
    if (asking && cls === 'BOTH' && firsts.length && VERDICT.test(firsts[0]) || asking && cls === 'BOTH' && /^\W*not quite/i.test(firsts[0] || '')) fail(n, `the answer to her question opens with a verdict: "${firsts[0].slice(0, 80)}"`);
    if (asking && cls === 'QUESTION' && /^\W*(that'?s right|not quite|partly right|exactly|correct)\b/i.test(reply)) fail(n, `the answer to her question opens with a verdict: "${reply.slice(0, 80)}"`);
    // d. "The answer:" names its subject.
    msgs.forEach(m => { const a = m.match(/The answer:\s*(.*)$/); if (a) seen.answers.push(a[1].split(/\s+/).slice(0, 4).join(' ')); if (a && PRONOUN.test(a[1])) fail(n, `"The answer:" starts with a pronoun: "${a[0].slice(0, 80)}"`); });
    // e. each widget once.
    if (entry.card && entry.card.type === 'widget') { const w = `key point ${entry.pt + 1}'s ${entry.card.id}`; widgets[w] = (widgets[w] || 0) + 1; if (widgets[w] > 1) fail(n, `${w} widget shown again`); }
  }
  const P = core._pilot();
  const ticked = state.coverage.filter(Boolean).length;
  if (!(P && P.finished)) fails.push(`the lesson did not finish in ${n} messages`);
  if (ticked !== points.length) fails.push(`${ticked} of ${points.length} key points ticked`);
  const eqStated = T.filter(x => x.role === 'assistant' && /^The equation is /.test(x.text)).map(x => x.text);
  return { fails, n, ticked, of: points.length, widgets: Object.keys(widgets).length, eqStated, seen };
}

// d, replayed: T114 of the 2026-10-28 run ("The answer: It gives energy to the charge, …").
function t114() {
  const core = TeachCore.create({ call: async () => '' });
  const data = lessonOf('p2-current-voltage'), points = core._buildPoints(data);
  core.bind(data, points, null);
  const state = core._freshState();
  core.bind(data, points, state);
  state.currentPointIndex = 6;
  state.transcript = [{ role: 'assistant', pt: 6, text: 'The energy the charge passes on in a component is called the energy transferred. It is measured in joules, a unit that measures energy. If a heater and a lamp both get energy from the same charge, what is happening to the energy in each one?' },
    { role: 'user', pt: 6, text: 'the energy gets split between them so each one gets half' }];
  const out = core._mfWithAnswer('Not quite. The charge carries the energy, and it hands it over in each component, so each one is transferred energy.');
  const a = (out.match(/The answer:\s*(.*)$/) || [])[1] || '';
  return { ok: !a || !PRONOUN.test(a), out };
}

(async () => {
  let bad = 0;
  const d = t114();
  if (!d.ok) bad++;
  console.log(`${d.ok ? 'ok  ' : 'FAIL'}  T114 replayed: "${d.out}"`);
  for (const id of LESSONS) {
    const r = await runLesson(id);
    bad += r.fails.length;
    console.log(`${r.fails.length ? 'FAIL' : 'ok  '}  ${id}: ${r.n} messages, ${r.ticked}/${r.of} key points ticked, ${r.widgets} widget(s) once each, equations stated first: ${r.eqStated.length ? r.eqStated.join(' | ') : 'none needed'}`);
    console.log(`      her questions answered: ${r.seen.asides} on their own, ${r.seen.first} shown first before her answer was marked; "The answer:" lines added: ${r.seen.answers.length}${r.seen.answers.length ? ` (they open: ${[...new Set(r.seen.answers)].map(a => `"${a}…"`).join(', ')})` : ''}`);
    r.fails.slice(0, 12).forEach(f => console.log(`      ${f}`));
  }
  process.exit(bad ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
