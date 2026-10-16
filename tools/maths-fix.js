#!/usr/bin/env node
/**
 * Applies maths-bank step fixes to js/maths-questions.js in place (task 2.2)
 * and appends old and new values to tools/maths-fix-log.md.
 *
 *   node tools/maths-fix.js <fixes.json> "<log heading>"
 *
 * fixes.json: [{ id, step, prompt?, answer?, tolerance?, reason }]
 * Only the named fields of the named step change. Source layout is kept: the
 * prompt line is rewritten in place; answer and tolerance are replaced inside
 * the step's own lines.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'js/maths-questions.js');
const LOG = path.join(__dirname, 'maths-fix-log.md');

const q1 = s => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";

function stepRange(lines, id, step) {
  const start = lines.findIndex(l => l.includes(`id: '${id}'`));
  if (start < 0) throw new Error(`id ${id} not found`);
  let end = lines.findIndex((l, i) => i > start && /^\s*id: '/.test(l));
  if (end < 0) end = lines.length;
  const prompts = [];
  for (let i = start; i < end; i++) {
    if (/^\s*workedExample:/.test(lines[i])) { end = i; break; }
    if (/^\s*prompt: /.test(lines[i])) prompts.push(i);
  }
  if (step >= prompts.length) throw new Error(`${id} has ${prompts.length} steps, no step ${step}`);
  return [prompts[step], step + 1 < prompts.length ? prompts[step + 1] : end];
}

function main() {
  const [fixFile, heading] = process.argv.slice(2);
  if (!fixFile || !heading) { console.error('usage: node tools/maths-fix.js <fixes.json> "<log heading>"'); process.exit(1); }
  const fixes = JSON.parse(fs.readFileSync(fixFile, 'utf8'));
  const lines = fs.readFileSync(SRC, 'utf8').split('\n');
  const log = [];
  for (const f of fixes) {
    const [a, b] = stepRange(lines, f.id, f.step);
    const entry = [`- ${f.id} step ${f.step} | ${f.reason}`];
    if (f.prompt !== undefined) {
      const m = lines[a].match(/^(\s*)prompt: (.*),\s*$/);
      if (!m) throw new Error(`${f.id} step ${f.step}: prompt line not on one line`);
      lines[a] = `${m[1]}prompt: ${q1(f.prompt)},`;
      entry.push(`  - prompt OLD: ${m[2]}`, `  - prompt NEW: ${q1(f.prompt)}`);
    }
    for (const key of ['answer', 'tolerance']) {
      if (f[key] === undefined) continue;
      const re = new RegExp(`(\\b${key}: )([^,]+)(,)`);
      let i = a; while (i < b && !re.test(lines[i])) i++;
      const val = typeof f[key] === 'string' ? q1(f[key]) : String(f[key]);
      if (i < b) {
        const old = lines[i].match(re)[2];
        lines[i] = lines[i].replace(re, `$1${val}$3`);
        entry.push(`  - ${key} OLD: ${old}`, `  - ${key} NEW: ${val}`);
      } else if (key === 'tolerance') {
        let j = a; while (j < b && !/\banswer: [^,]+,/.test(lines[j])) j++;
        if (j === b) throw new Error(`${f.id} step ${f.step}: no answer line`);
        lines[j] = lines[j].replace(/(\banswer: [^,]+,)/, `$1 tolerance: ${val},`);
        entry.push(`  - tolerance OLD: (none, app default 0.005)`, `  - tolerance NEW: ${val}`);
      } else throw new Error(`${f.id} step ${f.step}: no ${key} line`);
    }
    log.push(...entry);
  }
  fs.writeFileSync(SRC, lines.join('\n'));
  if (!fs.existsSync(LOG)) fs.writeFileSync(LOG, '# Maths bank fixes (task 2.2)\n\nEvery change to js/maths-questions.js made from tools/maths-recompute.js --all, with old and new values.\n');
  fs.appendFileSync(LOG, `\n## ${heading}\n\n${log.join('\n')}\n`);
  console.log(`${fixes.length} fix(es) applied; logged under "${heading}" in tools/maths-fix-log.md`);
}

main();
