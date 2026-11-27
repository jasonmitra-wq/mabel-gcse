#!/usr/bin/env node
/**
 * Writes tools/maths-audit/BASELINE.md (maths full audit, 2026-11-26) from:
 *   tools/maths-audit/mechanical.json        node tools/maths-lesson-check.js
 *   tools/spec-check-results/<id>.json       node tools/spec-check.js --subject maths --run
 *   tools/maths-audit/tagging.json           node tools/maths-tag-check.js --run
 * Free; no model.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const A = path.join(__dirname, 'maths-audit');
const mech = JSON.parse(fs.readFileSync(path.join(A, 'mechanical.json'), 'utf8'));
const tagging = fs.existsSync(path.join(A, 'tagging.json')) ? JSON.parse(fs.readFileSync(path.join(A, 'tagging.json'), 'utf8')) : null;
const syl = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/maths-syllabus.json'), 'utf8'));

const MF = ['maths_errors', 'false_mistakes', 'missing_spec_content', 'above_gcse', 'cases_not_modelled', 'density'];
const model = {};
for (const l of mech.lessons) {
  const f = path.join(ROOT, 'tools/spec-check-results', l.id + '.json');
  if (!fs.existsSync(f)) continue;
  const r = JSON.parse(fs.readFileSync(f, 'utf8'));
  if (r.model !== 'claude-opus-5-5' || !r.result || !('maths_errors' in r.result)) continue;
  model[l.id] = r;
}

const MECH_MATHS = ['WE_MISMATCH', 'CORRECTION_WRONG', 'CHAIN_MISMATCH', 'NE_EQUAL', 'ARROW_ROOT_MISMATCH', 'CLAIM_MISMATCH'];
const rows = mech.lessons.map(l => {
  const m = model[l.id] ? model[l.id].result : null;
  const mc = k => (m && Array.isArray(m[k]) ? m[k].length : null);
  const mechMaths = MECH_MATHS.reduce((n, k) => n + l.counts[k], 0);
  const fm = Math.max(l.counts.FALSE_MISTAKE_ITEMS, mc('false_mistakes') || 0);
  return {
    id: l.id, topic: l.topic, c: l.counts, d: l.density, m, mc,
    mechMaths, fm, score: mechMaths + (mc('maths_errors') || 0) + fm,
  };
});

const topics = Object.keys(syl.topics);
const out = [];
const p = s => out.push(s);
const spent = Object.values(model).reduce((n, r) => n + (r.cost_usd || 0), 0);

p('# Maths audit — baseline (2026-11-26)');
p('');
p('Step 1 of the maths full audit (brief 2026-11-26). This measures; it fixes nothing. The fixes come topic by topic (M1–M6) in later prompts, planned from this.');
p('');
p('Sources: `node tools/maths-lesson-check.js` (mechanical, free, writes mechanical.json); `node tools/spec-check.js --subject maths --run` (model, claude-opus-5-5, results in tools/spec-check-results/); `node tools/maths-tag-check.js --run` (bank tagging, tagging.json). Regenerate this file with `node tools/maths-audit-baseline.js`.');
p('');
p(`Lessons: ${mech.summary.lessons} (TEMPLATE.json skipped: placeholder text, no subtopic). Model results for ${Object.keys(model).length} of ${mech.summary.lessons}. Lessons opened to her: 0 of 41 (MATHS_LESSON_GATE on, MATHS_LESSONS_CHECKED empty).`);
p('');
p('## Key');
p('');
p('Mechanical (recomputed in code, tools/maths-lesson-fns.js and tools/lib-maths-expr.js):');
p('- **WE** worked-example value that does not match the recomputed one');
p('- **FM** "Watch out for this" item that is not a mistake (the "mistaken" method reaches the correct answer, or the item says it is correct); counted once per item');
p('- **CW** correction states a wrong answer; **CL** the text says the mistake gives a value the mistaken method does not give');
p('- **CH** an "=", "≈" or later-link chain whose two sides differ; **NE** "≠" between equal values; **AR** "→" chain of equations whose roots differ');
p('');
p('Model (claude-opus-5-5 given only the lesson JSON and its spec sections): **ME** maths_errors, **MFM** false_mistakes, **MS** missing_spec_content, **AG** above_gcse, **CN** cases_not_modelled, **DN** density. These are the model\'s claims from one run each, not yet triaged: some will be wrong or duplicate the mechanical findings. Triage belongs to the per-topic fix prompts.');
p('');
p('Density (counted, free): **→** lines with more than one "→"; **|** formula field joined by " | " (rendered one per line since 2026-11-26, maths.js v7); **60w** slides over 60 words (keyFacts counted apart); **20w** sentences over 20 words.');
p('');
p('Score for the worst-10 = mechanical maths faults (WE + CW + CL + CH + NE + AR) + model maths_errors + false mistakes (the larger of FM and MFM, so one item is not counted twice).');
p('');
p('## Per lesson');
p('');
p('| Lesson | WE | FM | CW | CL | CH | NE | AR | ME | MFM | MS | AG | CN | DN | → | \\| | 60w | 20w |');
p('|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|');
const v = x => (x == null ? '–' : x);
for (const t of topics) {
  for (const r of rows.filter(x => x.topic === t)) {
    p(`| ${r.id} | ${r.c.WE_MISMATCH} | ${r.c.FALSE_MISTAKE_ITEMS} | ${r.c.CORRECTION_WRONG} | ${r.c.CLAIM_MISMATCH} | ${r.c.CHAIN_MISMATCH} | ${r.c.NE_EQUAL} | ${r.c.ARROW_ROOT_MISMATCH} | ` +
      `${v(r.mc('maths_errors'))} | ${v(r.mc('false_mistakes'))} | ${v(r.mc('missing_spec_content'))} | ${v(r.mc('above_gcse'))} | ${v(r.mc('cases_not_modelled'))} | ${v(r.mc('density'))} | ` +
      `${r.d.arrow_lines} | ${r.d.formula_pipes} | ${r.d.slides_over_60} | ${r.d.sentences_over_20} |`);
  }
}
p('');
p('## Per topic');
p('');
p('| Topic | Lessons | Mech. maths faults | FM items | ME | MFM | MS | AG | CN | DN | → | \\| | 60w | 20w |');
p('|---|---|---|---|---|---|---|---|---|---|---|---|---|---|');
const sum = (rs, f) => rs.reduce((n, r) => n + (f(r) || 0), 0);
const topicRow = (label, rs) => `| ${label} | ${rs.length} | ${sum(rs, r => r.mechMaths)} | ${sum(rs, r => r.c.FALSE_MISTAKE_ITEMS)} | ` +
  MF.map(k => sum(rs, r => r.mc(k))).join(' | ') + ` | ${sum(rs, r => r.d.arrow_lines)} | ${sum(rs, r => r.d.formula_pipes)} | ${sum(rs, r => r.d.slides_over_60)} | ${sum(rs, r => r.d.sentences_over_20)} |`;
for (const t of topics) p(topicRow(`${t} ${syl.topics[t].name}`, rows.filter(r => r.topic === t)));
p(topicRow('**All**', rows));
p('');
p('## Worst 10 (maths errors plus false mistakes)');
p('');
p('| # | Lesson | Score | Mechanical maths | FM | ME | MFM |');
p('|---|---|---|---|---|---|---|');
[...rows].sort((a, b) => b.score - a.score || a.id.localeCompare(b.id)).slice(0, 10).forEach((r, i) =>
  p(`| ${i + 1} | ${r.id} | ${r.score} | ${r.mechMaths} | ${r.c.FALSE_MISTAKE_ITEMS} | ${v(r.mc('maths_errors'))} | ${v(r.mc('false_mistakes'))} |`));
p('');
p('## Mechanical faults, item by item');
p('');
for (const l of mech.lessons) {
  const f = l.faults.filter(x => x.type !== 'LITERAL_NOT_FOUND' && x.type !== 'NO_FNS');
  if (!f.length && !l.found_by_reading.length) continue;
  p(`**${l.id}**`);
  for (const x of f) p(`- ${x.type} — ${x.where}: ${x.detail}`);
  for (const x of l.found_by_reading) p(`- read (not a recompute): ${x}`);
  p('');
}
p('## Model maths errors and false mistakes, item by item');
p('');
for (const r of rows) {
  if (!r.m) continue;
  const me = r.m.maths_errors || [], fm = r.m.false_mistakes || [];
  if (!me.length && !fm.length) continue;
  p(`**${r.id}**`);
  for (const e of me) p(`- ME ${e.field}: "${String(e.text).slice(0, 160)}" → ${String(e.correction).slice(0, 200)}`);
  for (const e of fm) p(`- MFM ${e.field}: ${String(e.why).slice(0, 220)}${e.mistaken_method_gives ? ` (gives: ${String(e.mistaken_method_gives).slice(0, 80)})` : ''}`);
  p('');
}
p('## Question bank');
p('');
if (tagging) {
  p(`${tagging.questions} questions sent in batches of 25 (${tagging.model}); answered ${tagging.answered}. Tag differs from the model's subtopic for **${tagging.mismatches.length}**. Nothing retagged.`);
  if (tagging.missing.length) p(`No answer for: ${tagging.missing.join(', ')}.`);
  p('');
  const pairs = {};
  for (const m of tagging.mismatches) { const k = `${m.tag} → ${m.suggested}`; pairs[k] = (pairs[k] || 0) + 1; }
  const overlap = ['num-percentages → rpr-percentage-change', 'rpr-percentage-change → num-percentages', 'rpr-growth-decay → rpr-percentage-change',
    'rpr-percentage-change → rpr-growth-decay', 'rpr-ratio → rpr-proportion', 'num-ratio → rpr-proportion', 'num-ratio → rpr-ratio', 'rpr-ratio → num-ratio'];
  const nOverlap = overlap.reduce((n, k) => n + (pairs[k] || 0), 0);
  p('Read these in groups (counts by current tag → suggested):');
  p('');
  p(`- **geo-shapes → geo-transformations ${pairs['geo-shapes → geo-transformations'] || 0}**: the bank\'s geo-shapes questions are congruence and similarity (spec G5, G6, G19); the geo-shapes lesson teaches polygon angle sums, and no subtopic in data/maths-syllabus.json covers similarity, so the model put them under transformations (G7). The fix is a syllabus decision (a similarity subtopic, or the lesson), not a retag.`);
  p(`- **Overlapping subtopics ${nOverlap}**: the syllabus has both num-percentages and rpr-percentage-change, rpr-percentage-change and rpr-growth-decay (both teach compound interest), and num-ratio and rpr-ratio (same title and spec lines). Moves between these are mostly the model choosing the other of two near-duplicates.`);
  p(`- **The rest ${tagging.mismatches.length - nOverlap - (pairs['geo-shapes → geo-transformations'] || 0)}**: single questions that test a neighbouring skill (eq-C01 simultaneous equations under linear equations; quadratics under equations; Venn or tree questions under basic probability). These are the retag candidates.`);
  p('');
  p('| Question | Current tag | Suggested | Also | Why (model) |');
  p('|---|---|---|---|---|');
  for (const m of tagging.mismatches) p(`| ${m.id} | ${m.tag} | ${m.suggested} | ${m.also || ''} | ${String(m.why).replace(/\|/g, '/')} |`);
  p('');
  p(`Free count: ${tagging.arrow_density.count} questions have a step explanation or worked-example step with more than one "→".`);
} else p('Tagging results missing.');
p('');
p('## What this audit cannot see');
p('');
p('- Layout on screen: how a slide looks at laptop or phone size, what wraps or scrolls (only the formula box was checked, by eye, on 2026-11-26).');
p('- Whether an explanation actually lands with her. Density counts and the model\'s "density" findings are proxies; nothing here watches a 15-year-old read it.');
p('- Diagrams and pictures: the lessons have none the check could read, and the model cannot see images.');
p('- Mistake items with no numbers (habits, labels, units, "not writing a reason"): 55 of 123 are checked only for text that admits they are correct.');
p('- The mechanical check reads only what its expression reader understands: chains with words in them ("40% of £750"), coordinates, vectors written "(a over b)", inequalities and trig are skipped or handled only where tools/maths-lesson-fns.js computes them by hand. A fault in a skipped chain is not found.');
p('- The fns file and the lessons were read by the same session that wrote the fns; a misreading of a question would make both agree. The model audit is the independent check, and it is one model, run once.');
p('- The question bank\'s answers were recomputed on 2026-10-16 (maths-recompute --all: still 0 wrong of 1376 checked steps); its explanations, hints and worked examples were not recomputed here, only the "→" density counted.');
p('- Spec coverage is judged against the extracted spec text (data/spec/maths.md), which loses stacked fractions and one √ sign; see data/spec/MANIFEST.md.');
p('');
p(`Model spend in this file's spec-check results: $${spent.toFixed(4)}${tagging ? `; tagging $${tagging.cost_usd}` : ''}.`);

fs.writeFileSync(path.join(A, 'BASELINE.md'), out.join('\n') + '\n');
console.log(`Wrote tools/maths-audit/BASELINE.md (${rows.length} lessons, model results ${Object.keys(model).length}, tagging ${tagging ? 'yes' : 'no'})`);
