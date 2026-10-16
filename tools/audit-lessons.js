#!/usr/bin/env node
/* Lesson audit scanner — layer 1 of the audit process.
 *
 * Mechanical checks only. It finds where a known kind of fault is and how
 * widespread it is; it does not judge whether flagged text is actually wrong.
 * Watch-list hits in particular need a person (or the layer-2 spec check)
 * to decide.
 *
 * Run from the repo root:   node tools/audit-lessons.js
 * Writes:                   tools/audit-report.md
 * Exit code 1 if any ERROR-level finding exists, else 0.
 *
 * No dependencies. Reads only; never edits a lesson.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SKIP_SUBJECTS = ['maths'];            // maths uses its own question bank, not keyPoints

// ── Rules ───────────────────────────────────────────────────────
// Exam board name, specification codes and paper numbers must never reach her.
const BOARD = /\b(AQA|8461|8462|8463|8300|8702|8035|8192|specification|spec point|paper [12])\b/gi;

// Terms usually taught above GCSE. A hit is a prompt to check, not a verdict.
const WATCH = {
  '*':       /\b(quantum|wave ?function)\b/gi,
  biology:   /\b(cristae|krebs|glycolysis|electron transport chain|link reaction|calvin cycle)\b/gi,
  chemistry: /\b(enthalpy|entropy|gibbs|orbital|hybridi[sz]ation)\b/gi,
  physics:   /\b(kelvin|enthalpy|entropy)\b/gi,
};

// Physics describes changes of state with forces between particles, not bonds.
const PHYSICS_BOND = /\bbond(s|ed|ing)?\b/gi;

// A figure (percentage, millions, billions, $, £) in a string with no year.
// Only for subjects whose figures date (economies, populations). Science
// constants such as "21% oxygen" don't need a year.
const DATED_SUBJECTS = ['geography', 'sociology'];
const FIGURE = /(\d[\d,.]*\s?(%|per ?cent|million|billion|bn|trillion))|([£$]\s?\d)/i;
const YEAR = /\b(1[89]|20)\d\d(s)?\b/;   // 2019, or a decade such as 2010s

// Her name belongs in the tutor's voice, never inside lesson text (it was
// written for a tutor and now reads as talking about her in the third person).
const NAME = /\bMabel\b/g;

// ── Reading level ───────────────────────────────────────────────
// Flesch-Kincaid grade (US school grade; add 1 for the UK year). Rough:
// science terms push it up, so it ranks text rather than judging it.
// Target agreed for her: grade 9 or below, sentences of 15 words or fewer.
const READ_TARGET = 9;
const SENT_MAX = 20;          // a sentence longer than this is flagged
const READ_SKIP = /^(keyTerms|tables|headers|rows|title|heading)$/;  // short labels and definitions, not prose
function syllables(w) {
  w = w.toLowerCase().replace(/[^a-z]/g, '');
  if (!w) return 0;
  let n = (w.match(/[aeiouy]+/g) || []).length;
  if (w.endsWith('e') && !w.endsWith('le') && n > 1) n--;
  return Math.max(1, n);
}
function plain(t) { return String(t).replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' '); }
function sentences(t) {
  return plain(t).split(/(?<=[.!?])\s+|\n+|\s—\s(?=[A-Z])/).filter(x => /[A-Za-z]/.test(x));
}
function words(t) { return plain(t).match(/[A-Za-z][A-Za-z'’-]*/g) || []; }
function grade(texts) {
  const sents = texts.flatMap(sentences), ws = texts.flatMap(words);
  if (!ws.length || !sents.length) return null;
  const syl = ws.reduce((n, w) => n + syllables(w), 0);
  return 0.39 * ws.length / sents.length + 11.8 * syl / ws.length - 15.59;
}

// Fields that never reach her and are skipped by the text checks.
const NON_TEXT_KEYS = new Set(['id', 'topic', 'diagram', 'url', 'searchQuery', 'icon', 'correct', 'examFlag', 'cardFlag', 'referenceOnly', 'diagramExamTip', 'figuresSourced']);

// ── Context: what she can actually reach ────────────────────────
function readTeachEnabled() {
  const src = fs.readFileSync(path.join(ROOT, 'js/lessons.js'), 'utf8');
  const m = src.match(/TEACH_ENABLED\s*=\s*\[([^\]]*)\]/);
  return m ? [...m[1].matchAll(/'([^']+)'/g)].map(x => x[1]) : [];
}
// Subjects shown on the home screen, from the subjects list in js/app.js.
function readLiveSubjects() {
  const src = fs.readFileSync(path.join(ROOT, 'js/app.js'), 'utf8');
  return new Set([...src.matchAll(/\{\s*id:\s*'([^']+)'[^}]*available:\s*true\s*\}/g)].map(m => m[1]));
}
function readAvailable() {
  const out = {};
  for (const f of fs.readdirSync(path.join(ROOT, 'data'))) {
    const m = f.match(/^(.+)-syllabus\.json$/);
    if (!m) continue;
    let d; try { d = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', f), 'utf8')); } catch { continue; }
    for (const t of Object.values(d.topics || {})) {
      for (const s of t.subtopics || []) {
        out[s.id] = t.available !== false && s.available !== false;
      }
    }
  }
  return out;
}

// ── Walk every string in a lesson, with its path ────────────────
function* strings(node, p = '') {
  if (typeof node === 'string') { yield [p, node]; return; }
  if (Array.isArray(node)) { for (let i = 0; i < node.length; i++) yield* strings(node[i], `${p}[${i}]`); return; }
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      if (NON_TEXT_KEYS.has(k)) continue;
      if (k === 'videos' || k === 'videoLinks') continue; // filtered at render; checked separately if ever needed
      yield* strings(v, p ? `${p}.${k}` : k);
    }
  }
}

// ── Checks ──────────────────────────────────────────────────────
function auditLesson(file, subject) {
  const findings = [];
  const add = (level, check, where, detail) => findings.push({ level, check, where, detail });
  let d;
  try { d = JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (e) { add('ERROR', 'broken JSON', '', e.message); return { d: null, findings }; }

  const kps = Array.isArray(d.keyPoints) ? d.keyPoints : [];
  if (!kps.length) add('ERROR', 'no keyPoints', 'keyPoints', '');

  kps.forEach((k, i) => {
    const bad = (k.keyTerms || []).filter(t => !t || typeof t !== 'object' || !t.term || !t.def);
    if (bad.length) add('ERROR', 'keyTerms not {term, def}', `keyPoints[${i}].keyTerms`, `${bad.length} entr${bad.length === 1 ? 'y' : 'ies'}`);
    if (!String(k.content || '').trim()) add('ERROR', 'empty content', `keyPoints[${i}].content`, '');
    if (k.diagram && !fs.existsSync(path.join(ROOT, 'diagrams', subject, `${k.diagram}.svg`))) {
      add('ERROR', 'diagram file missing', `keyPoints[${i}].diagram`, `diagrams/${subject}/${k.diagram}.svg`);
    }
  });
  if (kps.length && !kps.some(k => (k.keyTerms || []).length)) add('WARN', 'no keyTerms', 'keyPoints', '');
  if (kps.length && !kps.some(k => k.diagram)) add('INFO', 'no diagram', 'keyPoints', '');

  // S5 structure: one checkpoint per key point, keyed by its index (checkpoints[i] follows keyPoints[i]).
  const cpKeys = d.checkpoints && typeof d.checkpoints === 'object' ? Object.keys(d.checkpoints) : [];
  const want = kps.map((_, i) => String(i));
  if (kps.length && (cpKeys.length !== want.length || want.some(k => !cpKeys.includes(k)))) {
    add('ERROR', 'checkpoint keys not 0..keyPoints−1', 'checkpoints', `keys [${cpKeys.join(', ')}], want [${want.join(', ')}]`);
  }

  const watch = [WATCH['*'], WATCH[subject]].filter(Boolean);
  const prose = [];
  for (const [where, text] of strings(d)) {
    const snip = (m) => text.slice(Math.max(0, m.index - 40), m.index + m[0].length + 40).replace(/\s+/g, ' ').trim();
    for (const m of text.matchAll(BOARD)) add('ERROR', 'exam board / code / paper', where, snip(m));
    for (const re of watch) for (const m of text.matchAll(re)) add('WARN', 'above-GCSE watch word', where, snip(m));
    if (subject === 'physics') for (const m of text.matchAll(PHYSICS_BOND)) add('WARN', 'physics uses "bond"', where, snip(m));
    for (const m of text.matchAll(NAME)) add('ERROR', 'names Mabel in lesson text', where, snip(m));
    if (!where.split(/[.[\]]/).some(seg => READ_SKIP.test(seg))) {
      prose.push(text);
      for (const sent of sentences(text)) {
        const n = words(sent).length;
        if (n > SENT_MAX) add('WARN', `sentence over ${SENT_MAX} words`, where, `${n} words: ${sent.trim().slice(0, 70)}…`);
      }
    }
    if (DATED_SUBJECTS.includes(subject) && FIGURE.test(text) && !YEAR.test(text)) {
      const m = text.match(FIGURE); m.index = text.indexOf(m[0]);
      add('WARN', 'figure with no year', where, snip(m));
    }
  }
  const g = grade(prose);
  if (g !== null && g > READ_TARGET) add('WARN', `reading level above grade ${READ_TARGET}`, '', `grade ${g.toFixed(1)}`);
  return { d, findings, grade: g };
}

// ── Run ─────────────────────────────────────────────────────────
const teach = new Set(readTeachEnabled());
const available = readAvailable();
const liveSubjects = readLiveSubjects();
const results = [];
for (const subject of fs.readdirSync(path.join(ROOT, 'lessons')).sort()) {
  const dir = path.join(ROOT, 'lessons', subject);
  if (!fs.statSync(dir).isDirectory() || SKIP_SUBJECTS.includes(subject)) continue;
  for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.json') && x !== 'TEMPLATE.json').sort()) {
    const id = f.replace(/\.json$/, '');
    const reach = teach.has(id) ? 'teach' : (liveSubjects.has(subject) && available[id]) ? 'live' : 'off';
    const { findings, grade: g } = auditLesson(path.join(dir, f), subject);
    results.push({ subject, id, reach, findings, grade: g });
  }
}

// Summary: one row per check, counting lessons and individual hits.
const order = { ERROR: 0, WARN: 1, INFO: 2 };
const summary = {};
for (const r of results) for (const x of r.findings) {
  const s = summary[x.check] ||= { level: x.level, lessons: new Set(), hits: 0, reach: { teach: 0, live: 0, off: 0 } };
  if (!s.lessons.has(r.id)) s.reach[r.reach]++;
  s.lessons.add(r.id); s.hits++;
}
const rows = Object.entries(summary).sort((a, b) => order[a[1].level] - order[b[1].level] || b[1].lessons.size - a[1].lessons.size);

const counts = { teach: 0, live: 0, off: 0 };
results.forEach(r => counts[r.reach]++);
const head = `Lessons scanned: ${results.length} (teach ${counts.teach}, live ${counts.live}, switched off ${counts.off}); maths skipped.`;

console.log(head + '\n');
console.log('Level  Lessons  Hits  (teach/live/off)  Check');
for (const [check, s] of rows) {
  console.log(`${s.level.padEnd(6)} ${String(s.lessons.size).padStart(7)} ${String(s.hits).padStart(5)}  (${s.reach.teach}/${s.reach.live}/${s.reach.off})`.padEnd(41) + check);
}

// Full report: summary, then every finding grouped by lesson.
const md = [];
md.push('# Lesson audit report', '', `Generated ${new Date().toISOString().slice(0, 10)} by tools/audit-lessons.js. Mechanical checks only — WARN items need a judgement.`, '', head, '');
md.push('| Level | Check | Lessons | Hits | Teach | Live | Off |', '|---|---|---|---|---|---|---|');
for (const [check, s] of rows) md.push(`| ${s.level} | ${check} | ${s.lessons.size} | ${s.hits} | ${s.reach.teach} | ${s.reach.live} | ${s.reach.off} |`);
md.push('');
md.push(`## Reading level by subject (target grade ${READ_TARGET} or below)`, '', '| Subject | Lessons | Median grade | Above target |', '|---|---|---|---|');
const bySubj = {};
for (const r of results) if (r.grade !== null) (bySubj[r.subject] ||= []).push(r.grade);
const median = a => { const b = [...a].sort((x, y) => x - y); return b[Math.floor(b.length / 2)]; };
for (const [sub, gs] of Object.entries(bySubj)) md.push(`| ${sub} | ${gs.length} | ${median(gs).toFixed(1)} | ${gs.filter(x => x > READ_TARGET).length} |`);
md.push('');
const reachOrder = { teach: 0, live: 1, off: 2 };
for (const r of results.filter(r => r.findings.length).sort((a, b) => reachOrder[a.reach] - reachOrder[b.reach] || a.id.localeCompare(b.id))) {
  md.push(`## ${r.subject}/${r.id} (${r.reach})`, '');
  for (const x of r.findings.sort((a, b) => order[a.level] - order[b.level])) {
    md.push(`- **${x.level}** ${x.check}${x.where ? ` — \`${x.where}\`` : ''}${x.detail ? ` — ${x.detail.replace(/\|/g, '\\|')}` : ''}`);
  }
  md.push('');
}
fs.writeFileSync(path.join(__dirname, 'audit-report.md'), md.join('\n'));
const allG = results.filter(r => r.grade !== null).map(r => r.grade);
console.log(`\nReading level: median grade ${median(allG).toFixed(1)}, ${allG.filter(x => x > READ_TARGET).length} of ${allG.length} lessons above grade ${READ_TARGET}.`);
console.log('\nFull report: tools/audit-report.md');

process.exit(rows.some(([, s]) => s.level === 'ERROR') ? 1 : 0);
