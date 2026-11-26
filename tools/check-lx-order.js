#!/usr/bin/env node
/* Free check (brief 2026-11-26, "G5 script claim, and the lesson-extras
 * shuffle"): the order js/lesson-extras.js questionEl shows its options in, for
 * every multiple-choice question it renders (js/lessons.js passes it
 * keyPoints[].mixedQuestions, keyPoints[].readiness.questions and endQuiz; the
 * recall step reuses the lesson before's endQuiz). Widget `predicts` also have
 * question/options/correct but are drawn by the widgets, not questionEl, so they
 * are left out. Lesson files only, not .script.json. Sibling of
 * tools/check-cp-order.js.
 *
 *   node tools/check-lx-order.js [base-ref]     # base-ref default 32aa117
 *
 * Runs the real questionEl from js/lesson-extras.js against a small stub DOM,
 * with LX_SHUFFLE_FIX true and false, and from base-ref. Reports:
 *   - where the right answer is shown (position 1, 2, ...), flag off and on;
 *     fails if any position, flag on, holds more than twice its fair share;
 *   - that every option is shown exactly once (flag on);
 *   - that with the flag off the card HTML is byte-identical to base-ref's.
 * Exit 1 on any failure.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const base = process.argv[2] || '32aa117';

// A stub DOM: just enough for _el, card.querySelector and opts.appendChild.
class El {
  constructor(html) { this.html = html; this.children = []; this.parts = {}; this.classList = { add() {} }; }
  querySelector(sel) { return this.parts[sel] || (this.parts[sel] = new El('')); }
  querySelectorAll() { return []; }
  appendChild(c) { this.children.push(c); }
  serialize() {
    const opts = this.parts['.lx-opts'];
    return opts ? this.html.replace('<div class="lx-opts"></div>', `<div class="lx-opts">${opts.children.map(c => c.html).join('')}</div>`) : this.html;
  }
}
const document = {
  getElementById: () => ({}),
  head: { appendChild() {} },
  createElement() { const d = { set innerHTML(h) { d.firstElementChild = new El(h); } }; return d; },
};
const load = src => new Function('document', `${src}\nreturn LessonExtras;`)(document);

const nowSrc = fs.readFileSync(path.join(ROOT, 'js/lesson-extras.js'), 'utf8');
const FLAG_RE = /const LX_SHUFFLE_FIX = (true|false);/;
if (!FLAG_RE.test(nowSrc)) { console.error('No LX_SHUFFLE_FIX flag in js/lesson-extras.js'); process.exit(1); }
const flagLine = nowSrc.match(FLAG_RE)[1];
const on = load(nowSrc.replace(FLAG_RE, 'const LX_SHUFFLE_FIX = true;'));
const off = load(nowSrc.replace(FLAG_RE, 'const LX_SHUFFLE_FIX = false;'));
const old = load(execFileSync('git', ['show', `${base}:js/lesson-extras.js`], { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 26 }));

// Every { question, options, correct } that questionEl renders.
const RENDERED = /^\.(endQuiz\[\d+\]|keyPoints\[\d+\]\.(mixedQuestions\[\d+\]|readiness\.questions\[\d+\]))$/;
const qs = [];
function walk(o, p, where) {
  if (Array.isArray(o)) o.forEach((x, i) => walk(x, `${p}[${i}]`, where));
  else if (o && typeof o === 'object') {
    if (Array.isArray(o.options) && 'question' in o && 'correct' in o && RENDERED.test(p)) qs.push({ q: o, where: `${where} ${p.slice(1)}` });
    for (const k of Object.keys(o)) walk(o[k], `${p}.${k}`, where);
  }
}
for (const subject of fs.readdirSync(path.join(ROOT, 'lessons')).sort()) {
  const dir = path.join(ROOT, 'lessons', subject);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const f of fs.readdirSync(dir).sort()) {
    if (!f.endsWith('.json') || f.endsWith('.script.json')) continue;
    try { walk(JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')), '', `${subject}/${f}`); } catch { /* not a lesson */ }
  }
}

const fails = [], posOn = {}, posOff = {}, fair = {}, byOptions = {};
const bump = (a, k, v = 1) => { a[k] = (a[k] || 0) + v; };
let identical = 0;
for (const { q, where } of qs) {
  const n = q.options.length;
  bump(byOptions, n);
  const cOn = on.questionEl(q, 'Q'), cOff = off.questionEl(q, 'Q'), cOld = old.questionEl(q, 'Q');
  if (cOff.serialize() === cOld.serialize()) identical++; else fails.push(`${where}: flag off differs from ${base}`);
  const shown = c => c.parts['.lx-opts'].children.map(b => b.html);
  const btn = k => `<button class="btn">${q.options[k]}</button>`;
  const sOn = shown(cOn), sOff = shown(cOff);
  bump(posOn, sOn.indexOf(btn(q.correct)));
  bump(posOff, sOff.indexOf(btn(q.correct)));
  for (let k = 0; k < n; k++) bump(fair, k, 1 / n);
  const counts = q.options.map((o, k) => sOn.filter(h => h === btn(k)).length);
  if (sOn.length !== n || counts.some(c => c < 1)) fails.push(`${where}: an option is missing or repeated (flag on)`);
}

const P = Object.keys(fair).map(Number).sort((a, b) => a - b);
const show = a => P.map(k => a[k] || 0).join(' / ');
console.log(`LX_SHUFFLE_FIX in js/lesson-extras.js: ${flagLine}`);
console.log(`Questions: ${qs.length} (by number of options: ${Object.entries(byOptions).map(([n, c]) => `${n}: ${c}`).join(', ')})`);
console.log(`Right answer at position ${P.map(k => k + 1).join(' / ')}, flag off: ${show(posOff)}`);
console.log(`Right answer at position ${P.map(k => k + 1).join(' / ')}, flag on:  ${show(posOn)} (chance about ${P.map(k => fair[k].toFixed(1)).join(' / ')})`);
P.forEach(k => { if ((posOn[k] || 0) > 2 * fair[k]) fails.push(`flag on: position ${k + 1} holds the right answer ${posOn[k]} times, over twice chance (${fair[k].toFixed(1)})`); });
const offOver = P.filter(k => (posOff[k] || 0) > 2 * fair[k]).map(k => k + 1);
console.log(`Flag off, positions over twice chance: ${offOver.length ? offOver.join(', ') : 'none'}`);
console.log(`Every option shown exactly once (flag on): ${fails.some(x => /missing or repeated/.test(x)) ? 'NO' : 'yes'}`);
console.log(`Flag off byte-identical to questionEl at ${base}: ${identical} of ${qs.length}`);
if (fails.length) { console.log(`FAIL (${fails.length}):`); fails.slice(0, 20).forEach(x => console.log('  ' + x)); process.exit(1); }
console.log('PASS');
