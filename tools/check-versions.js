#!/usr/bin/env node
/* Free check: every script or stylesheet that index.html loads with a ?v=
 * number, and that has changed since a commit, must have a new number there.
 * Otherwise a browser that already has the site keeps running its cached old
 * copy (found 2026-10-27: 08a2083 and f2c9bbd changed five scripts without a
 * new number).
 *
 *   node tools/check-versions.js            # against HEAD: the working copy, staged or not
 *   node tools/check-versions.js <ref>      # against another commit, e.g. origin/main
 *
 * Exit 1 if any changed file kept its number. Run it in every brief's final
 * checks, before the commit (docs/RUNBOOK.md).
 */
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ref = process.argv[2] || 'HEAD';
const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });

// The pages that load files with ?v= numbers.
const pages = fs.readdirSync(ROOT).filter(f => /\.html$/i.test(f));
const REF_RE = /(?:src|href)="([^"?#]+\.(?:js|css))\?v=([^"&#]+)"/g;
const refs = text => [...String(text).matchAll(REF_RE)].map(m => ({ file: m[1], v: m[2] }));

let checked = 0;
const fails = [];
for (const page of pages) {
  const now = refs(fs.readFileSync(path.join(ROOT, page), 'utf8'));
  if (!now.length) continue;
  let before = [];
  try { before = refs(git('show', `${ref}:${page}`)); } catch { /* new page: nothing to compare */ }
  const was = new Map(before.map(r => [r.file, r.v]));
  for (const r of now) {
    checked++;
    const p = r.file.replace(/^\.?\//, '');
    if (!fs.existsSync(path.join(ROOT, p))) { fails.push(`${page}: ${p} is loaded but does not exist`); continue; }
    let changed;
    try { changed = git('diff', '--name-only', ref, '--', p).trim() !== ''; }
    catch { changed = true; }   // not in that commit at all: new
    const untracked = git('ls-files', '--others', '--exclude-standard', '--', p).trim() !== '';
    if (!(changed || untracked)) continue;
    if (was.has(r.file) && was.get(r.file) === r.v) fails.push(`${page}: ${p} changed since ${ref} but is still ?v=${r.v}`);
  }
}
console.log(`${fails.length ? 'FAIL' : 'ok  '}  versions — ${checked} files with ?v= in ${pages.join(', ')}, compared with ${ref}`);
fails.forEach(f => console.log(`  FAIL ${f}`));
process.exit(fails.length ? 1 : 0);
