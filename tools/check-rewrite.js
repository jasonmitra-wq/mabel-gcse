#!/usr/bin/env node
/* Rewrite checker — run after a plain-English rewrite batch, before commit.
 *
 * Compares every lesson file that differs from a git ref (default HEAD) with
 * its old version, and fails a lesson if the rewrite lost anything that can be
 * checked mechanically. It cannot tell whether a reworded sentence is still
 * true; a person reads a random sample for that.
 *
 *   node tools/check-rewrite.js            compare working tree with HEAD
 *   node tools/check-rewrite.js <ref>      compare with another commit
 *
 * A lesson fails if:
 *   - it no longer parses, or its shape changed (keys, array lengths)
 *   - a field that must not change did change (keyTerms, tables, headings,
 *     titles, ids, diagram fields, videos, flags, which checkpoint option is
 *     correct)
 *   - a number (digits, or a word such as "three", "thousand", "half") in a
 *     field's old text is missing from its new text
 *   - a bold term (<strong>…</strong>) in a key point's old content is missing
 *     from its new content
 *   - a key term that appeared in a key point's old content is missing from
 *     its new content
 * Exit code 1 if any lesson fails.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const REF = process.argv[2] || 'HEAD';
const FROZEN = new Set(['keyTerms', 'tables', 'heading', 'title', 'id', 'topic', 'diagram', 'diagramCaption',
  'diagramExamTip', 'videos', 'videoLinks', 'examFlag', 'cardFlag', 'correct', 'referenceOnly', 'figuresSourced', 'diagrams']);

const changed = execSync(`git diff --name-only ${REF} -- lessons`, { cwd: ROOT, encoding: 'utf8' })
  .split('\n').filter(f => f.endsWith('.json') && !f.includes('/maths/'));

const strip = t => String(t).replace(/<[^>]+>/g, ' ');
const NUM_WORDS = /\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|twenty|thirty|fifty|hundred|thousand|million|billion|half|quarter|third|double|twice|triple)\b/gi;
const numbers = t => [...(strip(t).match(/\d+(?:[.,]\d+)*/g) || []), ...(strip(t).match(NUM_WORDS) || []).map(w => w.toLowerCase())];
const bold = t => [...String(t).matchAll(/<strong>(.*?)<\/strong>/gi)].map(m => strip(m[1]).trim()).filter(Boolean);
const has = (hay, needle) => strip(hay).toLowerCase().includes(needle.toLowerCase());

function compare(a, b, where, faults) {
  if (typeof a !== typeof b || Array.isArray(a) !== Array.isArray(b)) { faults.push(`${where}: type changed`); return; }
  if (Array.isArray(a)) {
    if (a.length !== b.length) faults.push(`${where}: ${a.length} items became ${b.length}`);
    a.forEach((x, i) => i < b.length && compare(x, b[i], `${where}[${i}]`, faults));
    return;
  }
  if (a && typeof a === 'object') {
    const ka = Object.keys(a).sort().join(), kb = Object.keys(b).sort().join();
    if (ka !== kb) faults.push(`${where}: keys changed`);
    for (const k of Object.keys(a)) {
      if (!(k in b)) continue;
      const w = where ? `${where}.${k}` : k;
      if (FROZEN.has(k)) { if (JSON.stringify(a[k]) !== JSON.stringify(b[k])) faults.push(`${w}: must not change`); continue; }
      compare(a[k], b[k], w, faults);
    }
    return;
  }
  if (typeof a === 'string' && a !== b) {
    const left = [...numbers(b)];
    for (const n of numbers(a)) {
      const i = left.indexOf(n);
      if (i === -1) faults.push(`${where}: number "${n}" lost`); else left.splice(i, 1);
    }
  }
}

let failed = 0;
for (const f of changed) {
  const faults = [];
  let oldD, newD;
  try { oldD = JSON.parse(execSync(`git show ${REF}:${f}`, { cwd: ROOT, encoding: 'utf8' })); }
  catch { console.log(`NEW   ${f} (no old version to compare)`); continue; }
  try { newD = JSON.parse(fs.readFileSync(path.join(ROOT, f), 'utf8')); }
  catch (e) { console.log(`FAIL  ${f}\n      does not parse: ${e.message}`); failed++; continue; }

  compare(oldD, newD, '', faults);

  (oldD.keyPoints || []).forEach((kp, i) => {
    const nk = (newD.keyPoints || [])[i];
    if (!nk) return;
    for (const t of bold(kp.content)) if (!has(nk.content, t)) faults.push(`keyPoints[${i}].content: bold term "${t}" lost`);
    for (const t of (kp.keyTerms || []).map(x => x && x.term).filter(Boolean)) {
      if (has(kp.content, t) && !has(nk.content, t)) faults.push(`keyPoints[${i}].content: key term "${t}" lost`);
    }
  });

  if (faults.length) { failed++; console.log(`FAIL  ${f}`); faults.forEach(x => console.log(`      ${x}`)); }
  else console.log(`ok    ${f}`);
}
console.log(`\n${changed.length} changed lessons checked against ${REF}; ${failed} failed.`);
process.exit(failed ? 1 : 0);
