#!/usr/bin/env node
/* Free check (brief 2026-11-26): the order the slide checkpoint shows its
 * options in. For every checkpoint in every lesson file (lessons/<subject>/*.json,
 * not .script.json) it renders _renderCheckpoint from js/lessons.js and reads
 * the buttons back in on-screen order.
 *
 *   node tools/check-cp-order.js [base-ref]     # base-ref default 2a9907c
 *
 * Reports:
 *   - where the right answer is shown (position 1, 2, ...), flag off and flag on;
 *     fails if any position, flag on, holds more than twice its fair share
 *     (lesson-extras.js's low-bit shuffle put it last in 270 of 513);
 *   - that every option appears exactly once, with its stored index in id,
 *     data-idx and data-correct (flag on);
 *   - that with CP_SHUFFLE false the HTML is byte-identical to _renderCheckpoint
 *     at base-ref, for every checkpoint.
 * Exit 1 on any failure.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const base = process.argv[2] || '2a9907c';

// Pull one function's source out of lessons.js by counting braces.
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
const build = (src, shuffle) => new Function('CP_SHUFFLE', extract(src, '_renderCheckpoint') + '\nreturn _renderCheckpoint;')(shuffle);

const nowSrc = fs.readFileSync(path.join(ROOT, 'js/lessons.js'), 'utf8');
const baseSrc = execFileSync('git', ['show', `${base}:js/lessons.js`], { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 26 });
const flagLine = (nowSrc.match(/const CP_SHUFFLE = (\w+);/) || [])[1];
const renderOn = build(nowSrc, true), renderOff = build(nowSrc, false), renderBase = build(baseSrc, undefined);

const BTN_RE = /<button class="cp-btn" id="([^"]+)_opt_(\d+)" data-correct="(true|false)" data-cpid="[^"]*" data-idx="(\d+)"/g;
let total = 0, identical = 0, byOptions = {};
const posOn = [], posOff = [], fair = [];
const bump = (a, k, v = 1) => { a[k] = (a[k] || 0) + v; };
const fails = [];
for (const subject of fs.readdirSync(path.join(ROOT, 'lessons')).sort()) {
  const dir = path.join(ROOT, 'lessons', subject);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const f of fs.readdirSync(dir).sort()) {
    if (!f.endsWith('.json') || f.endsWith('.script.json')) continue;
    let L; try { L = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); } catch { continue; }
    const cps = L.checkpoints || {};
    for (const key of Object.keys(cps)) {
      const cp = cps[key];
      if (!cp || !Array.isArray(cp.options)) continue;
      const where = `${subject}/${f} checkpoint ${key}`;
      const id = `cp_${key}`;
      total++;
      const n = cp.options.length;
      const offHtml = renderOff(cp, id), baseHtml = renderBase(cp, id), onHtml = renderOn(cp, id);
      if (offHtml === baseHtml) identical++; else fails.push(`${where}: flag off differs from ${base}`);
      const read = html => [...html.matchAll(BTN_RE)].map(m => ({ opt: +m[2], correct: m[3] === 'true', idx: +m[4], cpid: m[1] }));
      const on = read(onHtml), off = read(offHtml);
      bump(posOff, off.findIndex(b => b.opt === cp.correct));
      bump(posOn, on.findIndex(b => b.opt === cp.correct));
      for (let k = 0; k < n; k++) bump(fair, k, 1 / n);
      const seen = on.map(b => b.opt).sort((a, b) => a - b);
      if (on.length !== n || seen.some((v, k) => v !== k)) fails.push(`${where}: options shown ${JSON.stringify(on.map(b => b.opt))}, expected each of 0..${n - 1} once`);
      for (const b of on) {
        if (b.idx !== b.opt || b.cpid !== id || b.correct !== (b.opt === cp.correct)) fails.push(`${where}: button ${b.opt} has data-idx ${b.idx}, data-correct ${b.correct}`);
      }
      if (off.map(b => b.opt).some((v, k) => v !== k)) fails.push(`${where}: flag-off order is not the stored order`);
      byOptions[n] = (byOptions[n] || 0) + 1;
    }
  }
}

const expected = Object.entries(byOptions).reduce((s, [n, c]) => s + c / Number(n), 0);
console.log(`CP_SHUFFLE in js/lessons.js: ${flagLine}`);
console.log(`Checkpoints: ${total} (by number of options: ${Object.entries(byOptions).map(([n, c]) => `${n}: ${c}`).join(', ')})`);
const show = a => fair.map((_, k) => a[k] || 0).join(' / ');
console.log(`Right answer first, flag off: ${posOff[0] || 0} of ${total}`);
console.log(`Right answer first, flag on:  ${posOn[0] || 0} of ${total} (chance would be about ${expected.toFixed(0)})`);
console.log(`Right answer at position 1 / 2 / 3 / 4, flag off: ${show(posOff)}`);
console.log(`Right answer at position 1 / 2 / 3 / 4, flag on:  ${show(posOn)} (chance about ${fair.map(x => x.toFixed(0)).join(' / ')})`);
fair.forEach((x, k) => { if ((posOn[k] || 0) > 2 * x) fails.push(`flag on: position ${k + 1} holds the right answer ${posOn[k]} times, over twice chance (${x.toFixed(0)})`); });
console.log(`Every option shown exactly once with its stored id/data-idx/data-correct (flag on): ${fails.filter(x => /options shown|button/.test(x)).length ? 'NO' : 'yes'}`);
console.log(`Flag off byte-identical to _renderCheckpoint at ${base}: ${identical} of ${total}`);
if (fails.length) { console.log(`FAIL (${fails.length}):`); fails.slice(0, 20).forEach(x => console.log('  ' + x)); process.exit(1); }
console.log('PASS');
