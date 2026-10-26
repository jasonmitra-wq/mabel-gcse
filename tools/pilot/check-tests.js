#!/usr/bin/env node
/* Free check of the evidence layer's tests (js/pilot/tests.js): brief
 * docs/briefs/2026-10-19-evidence-layer.md, steps 4 and 5. No API.
 *
 *   node tools/pilot/check-tests.js
 *
 * - the quick check (SHORT_CHECK, brief 2026-10-26) has 6 questions: the 4
 *   maths prerequisites and 2 everyday misconception questions (one on "current
 *   is used up", M2), every wrong option matching a misconception of
 *   tools/pilot/misconceptions.md, no exam-style question; each has feedback
 *   (1 to 3 lines, no stock praise), an "In the lesson" line whose key point
 *   contains its match words, no lesson term unless explained (explains), and
 *   each maths one a "Try a similar one" that marks right and wrong answers;
 *   no quick-check question appears in a later test, and each misconception
 *   question has a new later question asking the same misconceptions;
 *   (SHORT_CHECK false: 12 to 15 questions, all in-scope misconceptions, three
 *   exam-style questions, as before);
 * - each post-test and the delayed test has 8 to 10 exam-style questions of
 *   those types, plus the misconception questions again;
 * - no exam-style question reuses a lesson worked example's numbers;
 * - the marking: right answers score full marks, wrong ones none, and an
 *   answer worked from her own wrong conversion keeps its marks.
 * Exit code 1 on any FAIL.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const T = require(path.join(ROOT, 'js', 'pilot', 'tests.js'));

const fails = [];
const fail = (w, m) => fails.push(`${w}: ${m}`);
const TYPES = new Set(['recall', 'calculation', 'graph', 'practical', 'explain']);

const misText = fs.readFileSync(path.join(ROOT, 'tools', 'pilot', 'misconceptions.md'), 'utf8');
const inScope = new Set([...((misText.split(/^## /m).find(s => /^In scope/.test(s)) || '').matchAll(/^\| (M\d+) \|/gm))].map(m => m[1]));
const map = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'prereq', 'physics-electricity.json'), 'utf8'));
const ideas = new Map(map.ideas.map(x => [x.id, x]));
const lessons = Object.fromEntries(map.lessons.map(id => [id, JSON.parse(fs.readFileSync(path.join(ROOT, 'lessons', 'physics', `${id}.json`), 'utf8'))]));
const nums = s => (String(s).replace(/(\d),(\d{3})\b/g, '$1$2').match(/\d+(\.\d+)?/g) || []).map(Number);

// Every item: a known type and idea, a lesson and key point, a well-formed answer.
for (const t of Object.values(T.TESTS)) {
  const seen = new Set();
  for (const it of t.items) {
    const w = `${t.id}/${it.id}`;
    if (seen.has(it.id)) fail(w, 'listed twice'); seen.add(it.id);
    if (!TYPES.has(it.type)) fail(w, `type ${it.type} is not one of the outcome types`);
    if (!ideas.has(it.idea)) fail(w, `idea ${it.idea} is not in the prerequisite map`);
    if (!lessons[it.lesson] || !Number.isInteger(it.kp) || !lessons[it.lesson].keyPoints[it.kp]) fail(w, `lesson ${it.lesson} key point ${it.kp} does not exist`);
    const forms = ['options', 'parts', 'nums'].filter(k => it[k]);
    if (forms.length !== 1) { fail(w, 'needs exactly one of options, parts, nums'); continue; }
    if (it.options && !(it.options[it.correct])) fail(w, 'correct index out of range');
    if (it.parts) it.parts.forEach((p, j) => { if (!p.options || !p.options[p.correct] || !p.marks) fail(`${w}.parts[${j}]`, 'needs options, a valid correct index and marks'); });
    if (it.nums) it.nums.forEach((n, j) => { if (!n.key || !n.unit || typeof n.answer !== 'number' || !n.marks) fail(`${w}.nums[${j}]`, 'needs key, unit, answer and marks'); });
    // Marking self-test.
    const right = it.options ? it.correct : it.parts ? it.parts.map(p => p.correct) : Object.fromEntries(it.nums.map(n => [n.key, String(n.answer)]));
    const r = T.mark(it, right);
    if (r.marks !== r.max) fail(w, `the right answer scores ${r.marks} of ${r.max}`);
    const wrong = it.options ? (it.correct + 1) % it.options.length : it.parts ? it.parts.map(p => (p.correct + 1) % p.options.length) : Object.fromEntries(it.nums.map((n, j) => [n.key, String(n.answer * (3 + 2 * j) + 7 + 17 * j)]));
    if (T.mark(it, wrong).marks !== 0) fail(w, 'a wrong answer scores marks');
    if (it.nums && it.nums.some(n => n.ecf)) {
      // Her first box wrong, the rest worked from it: only the first box is lost.
      const first = it.nums[0];
      const resp = { [first.key]: String(first.answer * 10) };
      const vals = { [first.key]: first.answer * 10 };
      for (const n of it.nums.slice(1)) {
        // eslint-disable-next-line no-new-func
        const v = n.ecf ? new Function(...Object.keys(vals), `return (${n.ecf});`)(...Object.values(vals)) : n.answer;
        resp[n.key] = String(v); vals[n.key] = v;
      }
      const e = T.mark(it, resp);
      if (e.marks !== e.max - first.marks) fail(w, `error carried forward: ${e.marks} of ${e.max}, expected ${e.max - first.marks}`);
    }
    // Different numbers from anything in the lesson's worked examples.
    if (it.kind === 'exam') {
      const mine = nums(it.question).filter(n => n > 0);
      for (const L of Object.values(lessons)) for (const kp of L.keyPoints) for (const x of kp.workedExamples || []) {
        const theirs = new Set(nums(x.question));
        if (mine.length >= 2 && mine.every(n => theirs.has(n))) fail(w, `uses the numbers of a lesson worked example ("${x.question}")`);
        if (x.question.trim() === it.question.trim()) fail(w, 'is a lesson worked example');
      }
    }
  }
}

// The quick check.
const D = T.TESTS.diagnostic.items;
const prereq = D.filter(i => i.kind === 'prereq');
const misItems = D.filter(i => i.kind === 'mis');
const covered = new Set();
if (T.SHORT_CHECK) {
  // Shorter quick check (brief docs/briefs/2026-10-26-shorter-quick-check.md): 6 questions that teach.
  if (D.length !== 6) fail('diagnostic', `${D.length} questions (needs 6)`);
  if (prereq.length !== 4) fail('diagnostic', `${prereq.length} prerequisite questions (needs 4)`);
  for (const idea of ['maths-rearrange', 'maths-units-time', 'maths-prefix', 'maths-read-graph']) if (!prereq.some(i => i.idea === idea)) fail('diagnostic', `no prerequisite question on ${idea}`);
  if (misItems.length !== 2) fail('diagnostic', `${misItems.length} misconception questions (needs 2)`);
  if (D.some(i => i.kind === 'exam')) fail('diagnostic', 'has exam-style questions (needs none)');
  if (!misItems.some(i => i.options && i.options.some(o => o.mis === 'M2'))) fail('diagnostic', 'no question on "current is used up in the lamp" (M2)');
  // Plain words: no term the lessons teach unless it is explained in the same line (listed in explains).
  const terms = new Set();
  for (const L of Object.values(lessons)) for (const kp of L.keyPoints) {
    (kp.keyTerms || []).forEach(x => terms.add(x.term.replace(/\s*\(.*?\)\s*/g, ' ').trim().toLowerCase()));
    for (const m of String(kp.content || '').matchAll(/<dfn>(.*?)<\/dfn>/g)) terms.add(m[1].toLowerCase());
  }
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const termsIn = text => [...terms].filter(x => new RegExp(`(^|[^a-z])${esc(x)}(e?s)?([^a-z]|$)`, 'i').test(text));
  const plain = (w, text, ok) => { const bad = termsIn(text).filter(x => !(ok || []).some(e => e === x || `${e}s` === x || `${x}s` === e)); if (bad.length) fail(w, `uses ${bad.join(', ')} without explaining it: "${text}"`); };
  for (const i of D) {
    const w = `diagnostic/${i.id}`;
    const f = i.feedback || {};
    if (!f.right) fail(w, 'no feedback for a right answer');
    if (/^(great|good|well done|nice|brilliant|excellent|amazing|awesome)\b/i.test(f.right || '')) fail(w, 'stock praise in the right-answer feedback');
    const lines = i.kind === 'prereq' ? f.steps : f.why;
    if (!Array.isArray(lines) || !lines.length || lines.length > 3) fail(w, `wrong-answer feedback needs 1 to 3 lines (${i.kind === 'prereq' ? 'steps' : 'why'})`);
    if (i.kind === 'prereq') {
      if (!i.similar) fail(w, 'a maths question needs "Try a similar one"');
      for (let seed = 1; seed <= 40; seed++) {
        const q = T.similar(i.id, seed);
        if (!q) { fail(w, 'similar() gives nothing'); break; }
        const rightResp = q.options ? q.correct : String(q.answer);
        if (!T.markSimilar(q, rightResp)) { fail(w, `similar seed ${seed}: the right answer is marked wrong`); break; }
        const wrongResp = q.options ? (q.correct + 1) % q.options.length : String(q.answer * 3 + 7);
        if (T.markSimilar(q, wrongResp)) { fail(w, `similar seed ${seed}: a wrong answer is marked right`); break; }
        if (q.question === i.question) { fail(w, `similar seed ${seed}: the same question again`); break; }
        if (!q.steps || !q.steps.length || q.steps.length > 3) { fail(w, `similar seed ${seed}: needs 1 to 3 steps`); break; }
      }
    }
    // "In the lesson": a real key point, and words that are in it.
    const il = i.inLesson;
    if (!il || !/^In the lesson\b/.test(il.text || '')) { fail(w, 'needs an "In the lesson: ..." line'); }
    else {
      const kp = lessons[i.lesson] && lessons[i.lesson].keyPoints[il.kp];
      if (!kp) fail(w, `"In the lesson" points to key point ${il.kp}, which does not exist`);
      else if (!il.match || !JSON.stringify(kp).includes(il.match)) fail(w, `"In the lesson" key point ${il.kp + 1} does not contain "${il.match}"`);
      plain(w, il.text, il.explains);
    }
    plain(w, f.right || '', f.explains);
    (lines || []).forEach(l => plain(w, l, f.explains));
    // Everyday words in the misconception questions she meets before any teaching.
    if (i.kind === 'mis') { plain(w, i.question, i.explains); i.options.forEach(o => plain(w, o.text, i.explains)); }
  }
  // The later tests never reuse a quick-check question, and each misconception question has its new one.
  const qText = new Map(D.map(i => [i.question.trim(), i.id]));
  for (const id of ['post-cv', 'post-comp', 'delayed']) for (const it of T.TESTS[id].items) {
    if (D.some(i => i.id === it.id)) fail(id, `reuses quick-check question ${it.id}`);
    if (qText.has(it.question.trim())) fail(id, `${it.id} has the same words as quick-check question ${qText.get(it.question.trim())}`);
  }
  for (const i of misItems) {
    const later = T.LATER.find(x => x.id === i.later);
    if (!later) { fail(`diagnostic/${i.id}`, `its later question ${i.later} does not exist`); continue; }
    const want = new Set(i.options.filter(o => o.mis).map(o => o.mis)), got = new Set(later.options.filter(o => o.mis).map(o => o.mis));
    if (![...want].every(m => got.has(m))) fail(`diagnostic/${i.id}`, `${i.later} does not ask the same misconceptions (${[...want].join(', ')})`);
    if (!T.TESTS.delayed.items.some(x => x.id === i.later)) fail('delayed', `does not ask ${i.later}`);
    if (!T.TESTS['post-cv'].items.some(x => x.id === i.later) && !T.TESTS['post-comp'].items.some(x => x.id === i.later)) fail('post-tests', `neither asks ${i.later}`);
  }
}
if (!prereq.length) fail('diagnostic', 'no prerequisite questions');
if (!prereq.some(i => (ideas.get(i.idea) || {}).kind === 'maths')) fail('diagnostic', 'no maths prerequisite');
prereq.forEach(i => { if (!i.recap) fail(`diagnostic/${i.id}`, 'a prerequisite needs a recap for the lesson to show if she misses it'); });
misItems.forEach(i => {
  if (!i.options) { fail(`diagnostic/${i.id}`, 'a misconception question must be multiple choice'); return; }
  i.options.forEach((o, k) => {
    if (k === i.correct) { if (o.mis) fail(`diagnostic/${i.id}`, 'the right answer carries a misconception'); return; }
    if (!o.mis) fail(`diagnostic/${i.id}`, `wrong option "${o.text}" matches no misconception`);
    else if (!inScope.has(o.mis)) fail(`diagnostic/${i.id}`, `${o.mis} is not an in-scope misconception`);
    else covered.add(o.mis);
  });
});
if (!T.SHORT_CHECK) {
  if (D.length < 12 || D.length > 15) fail('diagnostic', `${D.length} questions (12 to 15)`);
  const notCovered = [...inScope].filter(m => !covered.has(m));
  if (notCovered.length) fail('diagnostic', `no wrong option matches ${notCovered.join(', ')}`);
  const examD = D.filter(i => i.kind === 'exam');
  if (examD.length !== 3) fail('diagnostic', `${examD.length} exam-style questions (needs 3)`);
}
// Every in-scope misconception is still measured by the later tests.
const laterCovered = new Set(['post-cv', 'post-comp', 'delayed'].flatMap(id => T.TESTS[id].items.filter(i => i.kind === 'mis').flatMap(i => i.options.filter(o => o.mis).map(o => o.mis))));
const notLater = [...inScope].filter(m => !laterCovered.has(m));
if (notLater.length) fail('later tests', `no wrong option matches ${notLater.join(', ')}`);

// Post-tests and the delayed test.
for (const id of ['post-cv', 'post-comp', 'delayed']) {
  const t = T.TESTS[id];
  const ex = t.items.filter(i => i.kind === 'exam');
  if (ex.length < 8 || ex.length > 10) fail(id, `${ex.length} exam-style questions (8 to 10)`);
  if (new Set(ex.map(i => i.type)).size < 4) fail(id, 'exam-style questions should span at least four outcome types');
  if (!t.items.some(i => i.kind === 'mis')) fail(id, 'no misconception questions');
  if (t.lesson) {
    const mine = t.items.filter(i => i.kind === 'exam');
    if (mine.some(i => i.lesson !== t.lesson)) fail(id, 'a post-test asks about the other lesson');
  }
}
const delayedMis = new Set(T.TESTS.delayed.items.filter(i => i.kind === 'mis').map(i => i.id));
if (!T.SHORT_CHECK) for (const i of misItems) if (!delayedMis.has(i.id)) fail('delayed', `misconception question ${i.id} from the quick check is not asked again`);

console.log(`${fails.length ? 'FAIL' : 'ok  '}  pilot tests — ${Object.values(T.TESTS).map(t => `${t.id} ${t.items.length}`).join(', ')}; misconceptions covered: quick check ${covered.size}, later tests ${laterCovered.size}/${inScope.size}`);
fails.forEach(f => console.log(`  FAIL ${f}`));
process.exit(fails.length ? 1 : 0);
