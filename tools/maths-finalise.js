#!/usr/bin/env node
/**
 * Task 2.2, last step: set marks = steps.length for every maths question, and
 * auditStatus 'verified' only where every step the app checks recomputes (a
 * number or string from tools/maths-recompute.js --all, not a statement) and
 * passes. Questions whose checked steps are all statements, or that have no
 * checked step, stay as they are. Edits js/maths-questions.js in place and
 * appends every change to tools/maths-fix-log.md.
 *
 *   node tools/maths-finalise.js            # dry run: counts only
 *   node tools/maths-finalise.js --write
 */

const fs = require('fs');
const path = require('path');
const { RECOMPUTE, N, gcd, lcm, sigFig, pennies, loadBank } = require('./maths-recompute.js');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'js/maths-questions.js');
const LOG = path.join(__dirname, 'maths-fix-log.md');
const APP_TOL = 0.005;

Object.assign(RECOMPUTE, require('./maths-recompute-fns.js')({ N, gcd, lcm, sigFig, pennies }));

function same(stored, expected, tol) {
  if (typeof expected === 'string') return String(stored).replace(/\s/g, '') === expected.replace(/\s/g, '');
  const num = Number(stored);
  return !Number.isNaN(num) && Math.abs(num - expected) <= tol + 1e-9;
}

// true when every checked step has a recomputed value that the stored answer matches
function verified(q) {
  const exp = RECOMPUTE[q.id](q);
  const checked = q.steps.map((s, i) => [s, exp[i]]).filter(([s]) => s.checkType !== 'skip');
  if (!checked.length) return false;
  return checked.every(([s, e]) => e !== null && e !== undefined && typeof e !== 'object' && same(s.answer, e, s.tolerance ?? APP_TOL));
}

function main() {
  const write = process.argv.includes('--write');
  const bank = loadBank();
  const lines = fs.readFileSync(SRC, 'utf8').split('\n');
  const log = [];
  let marksChanged = 0, nVerified = 0;
  for (const q of bank) {
    const start = lines.findIndex(l => l.includes(`id: '${q.id}'`));
    let end = lines.findIndex((l, i) => i > start && /^\s*id: '/.test(l));
    if (end < 0) end = lines.length;
    // marks: on the id line or on its own line, before steps
    const mi = lines.findIndex((l, i) => i >= start && i < end && /\bmarks: \d+/.test(l));
    const old = Number(lines[mi].match(/\bmarks: (\d+)/)[1]);
    if (old !== q.steps.length) {
      lines[mi] = lines[mi].replace(/\bmarks: \d+/, `marks: ${q.steps.length}`);
      log.push(`- ${q.id} | marks | ${old} → ${q.steps.length} (steps.length)`);
      marksChanged++;
    }
    if (verified(q)) {
      nVerified++;
      const ai = lines.findIndex((l, i) => i > start && i < end && /^\s*auditStatus: /.test(l));
      if (ai >= 0) {
        const before = lines[ai].trim();
        lines[ai] = lines[ai].replace(/auditStatus: '[^']*'/, "auditStatus: 'verified'");
        log.push(`- ${q.id} | auditStatus | ${before} → auditStatus: 'verified'`);
      } else {
        const indent = lines[start].match(/^\s*/)[0];
        lines.splice(start + 1, 0, `${indent}auditStatus: 'verified',`);
        end++;
        log.push(`- ${q.id} | auditStatus | (none) → auditStatus: 'verified'`);
      }
    }
  }
  console.log(`marks changed: ${marksChanged}; verified: ${nVerified} of ${bank.length}`);
  if (!write) return;
  fs.writeFileSync(SRC, lines.join('\n'));
  fs.appendFileSync(LOG, `\n## Marks and audit status (task 2.2, last step)\n\nmarks set to steps.length where they differed (${marksChanged} questions); auditStatus 'verified' where every checked step recomputes and passes (${nVerified} of ${bank.length}).\n\n${log.join('\n')}\n`);
}

main();
