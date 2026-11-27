#!/usr/bin/env node
/* Free check (brief 2026-11-27, option-order shuffle): the order the AI lessons,
 * the widgets and the pilot show a tap question's options in. Four copies of
 * one fixed shuffle, each behind its own flag TAP_ORDER_FIX:
 *   js/teach-script.js  order(question, n)  scripted lessons' tap questions
 *   js/teach-core.js    _order(q)           unscripted AI lessons (readiness, mixed, recall, quiz)
 *   js/widgets/widgets.js _order(q)         widget predictions (keyPoints[].widget.options.predicts)
 *   js/pilot/pilot.js   _order(text, n)     quick check / post-tests, and "a similar one"
 *
 *   node tools/check-tap-order.js [base-ref]     # base-ref default d7ef746
 *
 * Each real function is cut out of its file's current text (by counting braces,
 * as tools/check-cp-order.js does) and run with TAP_ORDER_FIX true and false;
 * the same function is cut out of base-ref's file and run as it was. Nothing is
 * copied into this tool. Questions:
 *   scripted:   every kind "tap" step in lessons/<subject>/*.script.json (right = branch "right");
 *   teach-core: every keyPoints[].mixedQuestions (not generators), keyPoints[].readiness.questions
 *               and endQuiz question in the lesson files (recall reuses the lesson before's endQuiz);
 *   widgets:    every predicts entry in the lesson files;
 *   pilot:      every PilotTests item with options, plus similar(id, seed) for seeds 1..5000 of
 *               each item that has one with options, each distinct question counted once.
 * Reports where the right answer is shown, flag off and on, by number of options.
 * Fails if, flag on, any position holds the right answer more than twice its
 * fair share (summed over a source's questions, as check-cp-order; also within
 * each number-of-options group of 30 or more), if any option is lost or repeated,
 * or if, flag off, any order differs from base-ref. Exit 1 on any failure.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const base = process.argv[2] || 'd7ef746';
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const readBase = f => execFileSync('git', ['show', `${base}:${f}`], { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 26 });

function extract(src, name) {
  const start = src.indexOf(`function ${name}(`);
  if (start < 0) throw new Error(`no function ${name}`);
  let depth = 0, i = src.indexOf('{', start);
  for (; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}' && --depth === 0) break;
  }
  return src.slice(start, i + 1);
}
const build = (fnSrc, name, flag) => new Function('TAP_ORDER_FIX', `${fnSrc}\nreturn ${name};`)(flag);

const SOURCES = [
  { key: 'scripted (teach-script order)', file: 'js/teach-script.js', fn: 'order', call: (f, q) => f(q.question, q.options.length) },
  { key: 'teach-core _order', file: 'js/teach-core.js', fn: '_order', call: (f, q) => f(q) },
  { key: 'widgets _order', file: 'js/widgets/widgets.js', fn: '_order', call: (f, q) => f(q) },
  { key: 'pilot _order', file: 'js/pilot/pilot.js', fn: '_order', call: (f, q) => f(q.question, q.options.length) },
];

// ── Questions ──
const lessonFiles = (script) => {
  const out = [];
  for (const subject of fs.readdirSync(path.join(ROOT, 'lessons')).sort()) {
    const dir = path.join(ROOT, 'lessons', subject);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const f of fs.readdirSync(dir).sort()) {
      if (!f.endsWith('.json') || f.endsWith('.script.json') !== script) continue;
      try { out.push({ name: `${subject}/${f}`, data: JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')) }); } catch { /* not JSON */ }
    }
  }
  return out;
};
const scripted = [], core = [], widgets = [], pilot = [];
for (const { name, data } of lessonFiles(true)) {
  (data.keyPoints || []).forEach((kp, k) => (kp.steps || []).forEach(s => {
    if (s.type === 'ask' && s.kind === 'tap' && Array.isArray(s.options))
      scripted.push({ q: s, right: s.options.findIndex(o => o.branch === 'right'), where: `${name} ${s.id}`, p4: /^physics\/p4-/.test(name) });
  }));
}
for (const { name, data } of lessonFiles(false)) {
  const mc = (q, where) => { if (q && Array.isArray(q.options) && typeof q.correct === 'number' && !q.generator) core.push({ q, right: q.correct, where: `${name} ${where}` }); };
  (data.keyPoints || []).forEach((kp, k) => {
    (kp.mixedQuestions || []).forEach((q, i) => mc(q, `keyPoints[${k}].mixedQuestions[${i}]`));
    ((kp.readiness || {}).questions || []).forEach((q, i) => mc(q, `keyPoints[${k}].readiness.questions[${i}]`));
  });
  (Array.isArray(data.endQuiz) ? data.endQuiz : []).forEach((q, i) => mc(q, `endQuiz[${i}]`));
  const walk = (o, p) => {
    if (Array.isArray(o)) o.forEach((x, i) => walk(x, `${p}[${i}]`));
    else if (o && typeof o === 'object') {
      if (Array.isArray(o.predicts)) o.predicts.forEach((q, i) => { if (Array.isArray(q.options)) widgets.push({ q, right: q.correct, where: `${name} ${p}.predicts[${i}]` }); });
      for (const k of Object.keys(o)) walk(o[k], `${p}.${k}`);
    }
  };
  walk(data, '');
}
const PT = require(path.join(ROOT, 'js/pilot/tests.js'));
let similarCount = 0;
const seen = new Set();
for (const [tid, t] of Object.entries(PT.TESTS)) {
  for (const it of t.items) {
    if (it.options) pilot.push({ q: it, right: it.correct, where: `${tid} ${it.id}` });
    if (it.similar) for (let seed = 1; seed <= 5000; seed++) {
      const q = PT.similar(it.id, seed);
      const key = q && q.options && JSON.stringify([q.question, q.options]);
      if (key && !seen.has(key)) { seen.add(key); pilot.push({ q, right: q.correct, where: `${it.id} similar seed ${seed}` }); similarCount++; }
    }
  }
}
const QS = { 'scripted (teach-script order)': scripted, 'teach-core _order': core, 'widgets _order': widgets, 'pilot _order': pilot };

// ── Run ──
const fails = [];
const bump = (a, k, v = 1) => { a[k] = (a[k] || 0) + v; };
const fmt = (a, n) => Array.from({ length: n }, (_, k) => a[k] || 0).join('/');
function tally(list, fOn, fOff, fOld, src) {
  const g = {};   // n → { count, on: [], off: [] }
  const all = { on: {}, off: {}, fair: {} };
  let identical = 0;
  for (const { q, right, where } of list) {
    const n = q.options.length;
    const oOn = src.call(fOn, q), oOff = src.call(fOff, q), oOld = src.call(fOld, q);
    if (JSON.stringify(oOff) === JSON.stringify(oOld)) identical++; else fails.push(`${src.key}: ${where}: flag off differs from ${base}`);
    if (oOn.length !== n || new Set(oOn).size !== n || oOn.some(k => !(k >= 0 && k < n))) fails.push(`${src.key}: ${where}: an option is lost or repeated (flag on)`);
    if (!(right >= 0 && right < n)) { fails.push(`${src.key}: ${where}: no right answer`); continue; }
    const G = g[n] || (g[n] = { count: 0, on: {}, off: {} });
    G.count++;
    bump(G.on, oOn.indexOf(right)); bump(G.off, oOff.indexOf(right));
    bump(all.on, oOn.indexOf(right)); bump(all.off, oOff.indexOf(right));
    for (let k = 0; k < n; k++) bump(all.fair, k, 1 / n);
  }
  return { g, all, identical };
}

const flagState = {};
for (const src of SOURCES) {
  const now = read(src.file);
  const m = now.match(/const TAP_ORDER_FIX = (true|false);/);
  if (!m) { console.log(`${src.file}: no TAP_ORDER_FIX flag`); process.exit(1); }
  flagState[src.file] = m[1];
  const fnNow = extract(now, src.fn), fnOld = extract(readBase(src.file), src.fn);
  src.on = build(fnNow, src.fn, true); src.off = build(fnNow, src.fn, false); src.old = build(fnOld, src.fn, undefined);
}
console.log(`TAP_ORDER_FIX: ${Object.entries(flagState).map(([f, v]) => `${f} ${v}`).join(', ')}`);
console.log(`Flag off compared with ${base}. Positions are 1/2/3/... of the shown options; "chance" is count ÷ options.`);

const check = (label, a, fair, count) => Object.keys(fair).forEach(k => { if ((a[k] || 0) > 2 * fair[k]) fails.push(`${label}: position ${+k + 1} holds the right answer ${a[k]} times, over twice chance (${fair[k].toFixed(1)}${count ? ` of ${count}` : ''})`); });
for (const src of SOURCES) {
  const list = QS[src.key];
  const { g, all, identical } = tally(list, src.on, src.off, src.old, src);
  const how = src.key.startsWith('pilot') ? ` (${list.length - similarCount} test items listed from js/pilot/tests.js; ${similarCount} distinct "similar one" questions from seeds 1..5000 of each)`
    : src.key.startsWith('scripted') ? ' (listed from every .script.json)' : ' (listed from the lesson files)';
  console.log(`\n${src.key}, ${src.file}: ${list.length} questions${how}`);
  for (const n of Object.keys(g).map(Number).sort((a, b) => a - b)) {
    const G = g[n];
    console.log(`  ${n} options, ${G.count} questions: flag off ${fmt(G.off, n)}, flag on ${fmt(G.on, n)} (chance ${(G.count / n).toFixed(1)} each)`);
    if (G.count >= 30) { const fair = {}; for (let k = 0; k < n; k++) fair[k] = G.count / n; check(`${src.key}, ${n} options`, G.on, fair, G.count); }
  }
  const P = Object.keys(all.fair).map(Number).sort((a, b) => a - b);
  console.log(`  all: flag off ${P.map(k => all.off[k] || 0).join('/')}, flag on ${P.map(k => all.on[k] || 0).join('/')} (chance ${P.map(k => all.fair[k].toFixed(1)).join('/')})`);
  check(`${src.key}, all`, all.on, all.fair);
  console.log(`  flag off identical to ${base}: ${identical} of ${list.length}`);
  if (src.key.startsWith('scripted')) {
    const p4 = list.filter(x => x.p4);
    const r = tally(p4, src.on, src.off, src.old, src);
    for (const n of Object.keys(r.g).map(Number).sort((a, b) => a - b)) console.log(`  P4 only, ${n} options, ${r.g[n].count} questions: stored ${fmt(p4.filter(x => x.q.options.length === n).reduce((a, x) => (bump(a, x.right), a), {}), n)}, shown flag off ${fmt(r.g[n].off, n)}, shown flag on ${fmt(r.g[n].on, n)}`);
  }
}
const uniq = [...new Set(fails)];
if (uniq.length) { console.log(`\nFAIL (${uniq.length}):`); uniq.slice(0, 30).forEach(x => console.log('  ' + x)); process.exit(1); }
console.log('\nPASS');
