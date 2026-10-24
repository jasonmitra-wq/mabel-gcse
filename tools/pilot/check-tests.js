#!/usr/bin/env node
/* Free check of the evidence layer's tests (js/pilot/tests.js): brief
 * docs/briefs/2026-10-19-evidence-layer.md, steps 4 and 5. No API.
 *
 *   node tools/pilot/check-tests.js
 *
 * - the quick check has 12 to 15 questions: the prerequisites (maths among
 *   them, all in the prerequisite map), one multiple-choice question per
 *   misconception group with every wrong option matching a misconception of
 *   tools/pilot/misconceptions.md and every in-scope misconception covered,
 *   and three exam-style questions of the outcome types;
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
if (D.length < 12 || D.length > 15) fail('diagnostic', `${D.length} questions (12 to 15)`);
const prereq = D.filter(i => i.kind === 'prereq');
if (!prereq.length) fail('diagnostic', 'no prerequisite questions');
if (!prereq.some(i => (ideas.get(i.idea) || {}).kind === 'maths')) fail('diagnostic', 'no maths prerequisite');
prereq.forEach(i => { if (!i.recap) fail(`diagnostic/${i.id}`, 'a prerequisite needs a recap for the lesson to show if she misses it'); });
const misItems = D.filter(i => i.kind === 'mis');
const covered = new Set();
misItems.forEach(i => {
  if (!i.options) { fail(`diagnostic/${i.id}`, 'a misconception question must be multiple choice'); return; }
  i.options.forEach((o, k) => {
    if (k === i.correct) { if (o.mis) fail(`diagnostic/${i.id}`, 'the right answer carries a misconception'); return; }
    if (!o.mis) fail(`diagnostic/${i.id}`, `wrong option "${o.text}" matches no misconception`);
    else if (!inScope.has(o.mis)) fail(`diagnostic/${i.id}`, `${o.mis} is not an in-scope misconception`);
    else covered.add(o.mis);
  });
});
const notCovered = [...inScope].filter(m => !covered.has(m));
if (notCovered.length) fail('diagnostic', `no wrong option matches ${notCovered.join(', ')}`);
const examD = D.filter(i => i.kind === 'exam');
if (examD.length !== 3) fail('diagnostic', `${examD.length} exam-style questions (needs 3)`);

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
for (const i of misItems) if (!delayedMis.has(i.id)) fail('delayed', `misconception question ${i.id} from the quick check is not asked again`);

console.log(`${fails.length ? 'FAIL' : 'ok  '}  pilot tests — ${Object.values(T.TESTS).map(t => `${t.id} ${t.items.length}`).join(', ')}; misconceptions covered ${covered.size}/${inScope.size}`);
fails.forEach(f => console.log(`  FAIL ${f}`));
process.exit(fails.length ? 1 : 0);
