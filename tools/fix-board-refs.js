#!/usr/bin/env node
/* One-off batch fix: remove exam-board name, codes and paper numbers from
 * lesson text. Edits lessons/{biology,chemistry,physics,geography,sociology}.
 * Works on the raw file text so formatting is untouched; every file is
 * re-parsed afterwards and left unwritten if it no longer parses.
 * Run from repo root:  node tools/fix-board-refs.js [--dry]
 * Prints every change as before → after.
 */
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const DRY = process.argv.includes('--dry');
const SUBJECTS = ['biology', 'chemistry', 'physics', 'geography', 'sociology'];

// Verbs that follow "AQA" as the subject of a sentence: "AQA loves" → "Examiners love".
const V = 'awards|loves|tests|wants|expects|asks|uses|gives|provides|picks|includes|focuses|rewards|distinguishes|requires|combines|describes|has asked|marks';
const ADV = 'mostly|often only|often|regularly|sometimes|commonly|most commonly|frequently|specifically|also|usually|almost always';
const base = v => v === 'has asked' ? 'have asked' : v === 'focuses' ? 'focus' : v === 'distinguishes' ? 'distinguish' : v.replace(/s$/, '');
const cap = (s, like) => /^[A-Z]/.test(like) ? s[0].toUpperCase() + s.slice(1) : s;

const RULES = [
  // Whole leading sentence naming paper and topic: "AQA Paper 1, Topic 4 (Chemical Changes). "
  [/AQA (?:(?:Biology|Chemistry|Physics|Geography|Sociology) )?Paper [12], Topic \d+(?: \([^)]*\))?[.:]?\s*/g, ''],
  [/How\/when this appears in AQA Geography Paper [12]: [^.]*\.\s*/g, ''],
  [/[Tt]his (?:topic )?appears in AQA Geography Paper [12][^.]*?: /g, ''],
  [/The four gas tests — AQA required/g, 'The four gas tests you need'],
  [/\bmentioned in AQA\b/g, 'mentioned in the course'],
  [/— AQA classic example/g, '— a classic exam example'],
  [/\bthe two AQA named conditions\b/g, 'the two named conditions'],
  [/\bin AQA responses\b/g, 'in exam answers'],
  [/\bAQA (often |sometimes |usually )?want\b/g, 'examiners $1want'],
  [/in (?:almost )?every AQA Paper [12] exam/g, m => m.includes('almost') ? 'in almost every exam' : 'in every exam'],
  [/on (virtually|almost) every Paper [12]\b/g, 'in $1 every exam'],
  [/up on virtually every Paper [12]\b/g, 'up in virtually every exam'],
  [/\b(?:on |in )?Paper 2 (?:Section C )?(introductory |context )?questions/g, (m, a) => `${m.startsWith('on') || m.startsWith('in') ? 'in ' : ''}${a || ''}exam questions`],
  [/\bin Paper [12]\b/g, 'in the exam'],
  [/\bon Paper [12]\b/g, 'in the exam'],
  [/\bon Paper 2\b/g, 'in the exam'],
  [/every AQA (?:Biology |Chemistry |Physics |Geography |Sociology |genetics )?(paper|papers)/g, 'every exam paper'],
  [/\bon AQA papers\b/g, 'in exam papers'],
  [/\bAQA (?:GCSE )?(mark schemes?)/g, '$1'],
  [/\bAQA-approved\b/g, 'mark-scheme'],
  [/\bAQA's favourite\b/g, "examiners' favourite"],
  [/\bAQA (?:Higher )?(examiners)\b/g, '$1'],
  [/\bwith AQA examiners\b/g, 'with examiners'],
  [/\bat AQA GCSE\b/g, 'at GCSE'],
  [/\bAQA GCSE\b/g, 'GCSE'],
  [/\b(?:the )?AQA spec(?:ification)?\b/g, 'the course'],
  [/\bthe (?:entire )?GCSE Biology specification\b/g, m => m.includes('entire') ? 'the entire GCSE Biology course' : 'the GCSE Biology course'],
  [/\b(?:whole )?specification\b/g, m => m.startsWith('whole') ? 'whole course' : 'course'],
  [/\bAQA (Sociology|Geography)\b/g, 'GCSE $1'],
  [/\bAQA is\b/g, 'examiners are'],
  [/\bthe AQA four\b/g, 'the four you need'],
  [/\bAQA four:/g, 'The four you need:'],
  [/\bin AQA (extended writing|exams)\b/g, 'in $1'],
  [/\b[Ff]or AQA\b/g, m => cap('for the exam', m)],
  [/\bto AQA\b/g, 'to examiners'],
  [/\bAQA (?:guidance values)\b/g, 'standard values'],
  // Sentence subject: "AQA (often) loves" → "Examiners (often) love"
  [new RegExp(`\\bAQA (?:(${ADV}) )?(${V})\\b`, 'g'), (m, a, v) => `examiners ${a ? a + ' ' : ''}${base(v)}`],
  [new RegExp(`\\bAQA (may|will|can)\\b`, 'g'), 'examiners $1'],
  [/\bdoes AQA require you\b/g, 'do you need'],
  [/\b(?:a |the )?(?:key |classic |favourite |standard |major |guaranteed |common |big |precise |exact |required |core )?AQA (?:Higher )?(?=\w)/g, m => m.replace(/AQA (Higher )?/, 'exam ')],
  [/— AQA 'evaluate'/g, "— exam 'evaluate'"],
  [/\bAQA\b/g, 'the exam'],
];

// Apply one rule; a replacement that lands at the start of a sentence is
// capitalised, so "AQA mark schemes look…" becomes "Mark schemes look…".
function apply(str, re, rep) {
  return str.replace(re, (...args) => {
    const m = args[0], off = args[args.length - 2], whole = args[args.length - 1];
    let r = typeof rep === 'function' ? rep(...args) : m.replace(new RegExp(re.source, re.flags.replace('g', '')), rep);
    const before = whole.slice(0, off);
    if (r && (/^\s*$/.test(before) || /[.!?]['")]?\s+$/.test(before))) r = r[0].toUpperCase() + r.slice(1);
    return r;
  });
}
const tidy = s => s.replace(/(\bExaminers\b[^.]*?\band )asks\b/g, '$1ask').replace(/\ba exam\b/g, 'an exam').replace(/\bA exam\b/g, 'An exam').replace(/\bthe the\b/gi, m => m.slice(0, 3)).replace(/  +/g, ' ');

let files = 0, changes = 0, failed = [];
for (const subj of SUBJECTS) {
  const dir = path.join(ROOT, 'lessons', subj);
  for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.json') && x !== 'TEMPLATE.json')) {
    const p = path.join(dir, f);
    const src = fs.readFileSync(p, 'utf8');
    // Edit inside JSON string literals only.
    const out = src.replace(/"((?:[^"\\]|\\.)*)"/g, (lit, body) => {
      if (/^(?:https?:|aqa\+|[a-z0-9 +]*$)/.test(body)) return lit;   // urls, ids, search queries
      let s = body;
      for (const [re, rep] of RULES) s = apply(s, re, rep);
      if (s === body) return lit;
      s = tidy(s);
      changes++;
      console.log(`${subj}/${f}\n  - ${body.slice(0, 400)}\n  + ${s.slice(0, 400)}`);
      return `"${s}"`;
    });
    if (out === src) continue;
    try { JSON.parse(out); } catch (e) { failed.push(`${subj}/${f}: ${e.message}`); continue; }
    files++;
    if (!DRY) fs.writeFileSync(p, out);
  }
}
console.log(`\n${DRY ? '[dry run] ' : ''}${changes} strings changed in ${files} files.`);
if (failed.length) { console.log('NOT WRITTEN (would break JSON):\n' + failed.join('\n')); process.exit(1); }
