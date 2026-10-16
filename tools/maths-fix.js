#!/usr/bin/env node
/**
 * Applies maths-bank step fixes to js/maths-questions.js in place (task 2.2)
 * and appends old and new values to tools/maths-fix-log.md.
 *
 *   node tools/maths-fix.js <fixes.json> "<log heading>"
 *
 * fixes.json: [{ id, step, prompt?, answer?, tolerance?, unit?, checkType?, reason }]
 *          or  [{ id, question: [old, new], reason }] — replace old with new in the question text
 *          or  [{ id, block: "<new source>", reason }] — replace the whole question object
 *              (from its `id:` line to the line before its closing `},`) with new source
 *          or  [{ id, text: [old, new], reason }] — replace old with new in every
 *              hint, explanation, displayAnswer and sample answer of that question
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
    // a workedExample after the steps ends the last step; one before the steps is skipped
    if (/^\s*workedExample:/.test(lines[i]) && prompts.length) { end = i; break; }
    if (/^\s*\{?\s*prompt: /.test(lines[i])) prompts.push(i);
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
    if (f.question) {
      const i = lines.findIndex((l, k) => k > lines.findIndex(m => m.includes(`id: '${f.id}'`)) && /^\s*question: /.test(l));
      const [old, neu] = f.question;
      if (i < 0 || !lines[i].includes(old)) throw new Error(`${f.id}: question text "${old}" not found`);
      const before = lines[i].trim();
      lines[i] = lines[i].split(old).join(neu);
      log.push(`- ${f.id} question | ${f.reason}`, `  - OLD: ${before}`, `  - NEW: ${lines[i].trim()}`);
      continue;
    }
    if (f.block) {
      const start = lines.findIndex(l => l.includes(`id: '${f.id}'`));
      if (start < 0) throw new Error(`id ${f.id} not found`);
      const indent = lines[start].match(/^\s*/)[0].length - 2;
      let end = start + 1;
      while (end < lines.length && !new RegExp(`^ {${indent}}\\},?\\s*$`).test(lines[end])) end++;
      if (end === lines.length) throw new Error(`${f.id}: end of question object not found`);
      const old = lines.slice(start, end);
      lines.splice(start, end - start, ...f.block.replace(/\n$/, '').split('\n'));
      log.push(`- ${f.id} whole question | ${f.reason}`, '  - OLD:', '```js', ...old, '```', '  - NEW:', '```js', ...f.block.replace(/\n$/, '').split('\n'), '```');
      continue;
    }
    if (f.text) {
      const start = lines.findIndex(l => l.includes(`id: '${f.id}'`));
      if (start < 0) throw new Error(`id ${f.id} not found`);
      let end = lines.findIndex((l, i) => i > start && /^\s*id: '/.test(l));
      if (end < 0) end = lines.length;
      const [old, neu] = f.text;
      const hits = [];
      for (let i = start; i < end; i++) {
        if (/^\s*question:/.test(lines[i]) || !lines[i].includes(old)) continue;
        hits.push(`  - line ${i + 1} OLD: ${lines[i].trim()}`);
        lines[i] = lines[i].split(old).join(neu);
        hits.push(`  - line ${i + 1} NEW: ${lines[i].trim()}`);
      }
      if (!hits.length) throw new Error(`${f.id}: "${old}" not found outside prompts`);
      log.push(`- ${f.id} text | ${f.reason}`, ...hits);
      continue;
    }
    const [a, b] = stepRange(lines, f.id, f.step);
    const entry = [`- ${f.id} step ${f.step} | ${f.reason}`];
    if (f.prompt !== undefined) {
      const re = /(\bprompt: )('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")/;
      const m = lines[a].match(re);
      if (!m) throw new Error(`${f.id} step ${f.step}: prompt not found`);
      lines[a] = lines[a].replace(re, (_, k) => k + q1(f.prompt));
      entry.push(`  - prompt OLD: ${m[2]}`, `  - prompt NEW: ${q1(f.prompt)}`);
    }
    for (const key of ['answer', 'tolerance', 'unit', 'checkType']) {
      if (f[key] === undefined) continue;
      const re = new RegExp(`(\\b${key}: )([^,]+)(,)`);
      // on a one-line step the field follows the prompt on the same line
      let i = a; while (i < b && !re.test(lines[i].slice(i === a ? lines[i].indexOf('prompt: ') : 0))) i++;
      const val = typeof f[key] === 'string' ? q1(f[key]) : String(f[key]);
      if (i < b) {
        const old = lines[i].match(re)[2];
        lines[i] = lines[i].replace(re, `$1${val}$3`);
        entry.push(`  - ${key} OLD: ${old}`, `  - ${key} NEW: ${val}`);
      } else if (key !== 'answer') {
        let j = a; while (j < b && !/\banswer: [^,]+,/.test(lines[j])) j++;
        if (j === b) throw new Error(`${f.id} step ${f.step}: no answer line`);
        lines[j] = lines[j].replace(/(\banswer: [^,]+,)/, `$1 ${key}: ${val},`);
        entry.push(`  - ${key} OLD: (none${key === 'tolerance' ? ', app default 0.005' : ''})`, `  - ${key} NEW: ${val}`);
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
