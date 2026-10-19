#!/usr/bin/env node
/* Glossary builder — runbook v3 task A4.
 *
 * Builds data/glossary/<subject>.json for every subject with a syllabus file,
 * from every lesson's keyTerms and <dfn> terms:
 *   { subject, terms: [ { term, def, lesson, lessonName, topic } ] }
 * One entry per term. Lessons are read in syllabus order, so the entry points
 * to the first lesson that teaches the term. A keyTerm marked referenceOnly
 * gives way to a lesson that teaches the term. A <dfn> term with no keyTerm
 * takes its definition from the sentence it is defined in.
 *
 *   node tools/build-glossary.js            write every subject
 *   node tools/build-glossary.js --check    exit 1 if a file would change
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'data', 'glossary');

const strip = t => String(t || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').replace(/\s+([.,;:!?)])/g, '$1').trim();
// One key per term: lower case, no brackets or punctuation, simple plural folded.
function key(term) {
  let k = String(term).toLowerCase().replace(/\s*\(.*?\)\s*/g, ' ').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  if (k.length > 3 && /[^s]s$/.test(k)) k = k.slice(0, -1);
  return k;
}
function sentences(t) { return strip(t).split(/(?<=[.!?])\s+(?=[A-Z0-9])/).filter(Boolean); }

function build(subject) {
  const syl = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', `${subject}-syllabus.json`), 'utf8'));
  const terms = new Map();
  for (const [code, topic] of Object.entries(syl.topics || {})) {
    for (const st of topic.subtopics || []) {
      const file = path.join(ROOT, 'lessons', subject, `${st.id}.json`);
      if (!fs.existsSync(file)) continue;
      let L;
      try { L = JSON.parse(fs.readFileSync(file, 'utf8')); } catch { continue; }
      const base = { lesson: st.id, lessonName: st.name || L.title || st.id, topic: code };
      const add = (term, def, weak) => {
        const k = key(term);
        if (!k || !def) return;
        const have = terms.get(k);
        if (have && !(have.weak && !weak)) return;
        terms.set(k, { term: strip(term), def: strip(def), ...base, weak });
      };
      // Key terms first (their definitions are written for the glossary), then <dfn> terms.
      const lessonTerms = (L.keyPoints || []).flatMap(kp => kp.keyTerms || []).filter(t => t && t.term);
      for (const t of lessonTerms) add(t.term, t.def, t.referenceOnly === true);
      for (const kp of L.keyPoints || []) {
        for (const m of String(kp.content || '').matchAll(/<dfn>(.*?)<\/dfn>/gis)) {
          const term = strip(m[1]);
          const own = lessonTerms.find(t => key(t.term) === key(term));
          const sent = sentences(kp.content).find(s => s.toLowerCase().includes(term.toLowerCase()));
          add(term, own ? own.def : sent, false);
        }
      }
    }
  }
  const list = [...terms.values()].map(({ weak, ...t }) => t);
  return { subject, terms: list };
}

function main() {
  const check = process.argv.includes('--check');
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
  let changed = 0;
  for (const f of fs.readdirSync(path.join(ROOT, 'data')).sort()) {
    const m = f.match(/^(.+)-syllabus\.json$/);
    if (!m) continue;
    const out = build(m[1]);
    const text = JSON.stringify(out, null, 2) + '\n';
    const p = path.join(OUT, `${m[1]}.json`);
    const old = fs.existsSync(p) ? fs.readFileSync(p, 'utf8').replace(/\r\n/g, '\n') : '';
    if (old !== text) changed++;
    if (!check) fs.writeFileSync(p, text);
    console.log(`${m[1].padEnd(10)} ${String(out.terms.length).padStart(4)} terms${old !== text ? (check ? '  (would change)' : '  (written)') : ''}`);
  }
  if (check && changed) process.exit(1);
}

main();
