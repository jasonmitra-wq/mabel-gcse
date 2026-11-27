#!/usr/bin/env node
/**
 * Mechanical check of the maths lesson files (maths full audit, 2026-11-26).
 * Free: no model. Measures; fixes nothing.
 *
 *   node tools/maths-lesson-check.js            # all lessons
 *   node tools/maths-lesson-check.js alg-equations geo-circles
 *
 * 1. Worked example: tools/maths-lesson-fns.js recomputes the answer and the
 *    step results from the question; each is compared with what the lesson
 *    states (WE_MISMATCH). A stated literal not found in its field is
 *    LITERAL_NOT_FOUND (a fault in the fns file, not the lesson).
 * 2. Common mistakes: per item, the correction's answer is recomputed
 *    (CORRECTION_WRONG) and the "mistaken" method is worked through.
 *    FALSE_MISTAKE when the mistaken method reaches the correct answer, or the
 *    item's own text says it is correct. CLAIM_MISMATCH when the text says
 *    the mistake gives a value the mistaken method does not give.
 * 3. Every "=", "≈", "≠" and "→" chain in every visible field is evaluated
 *    (tools/lib-maths-expr.js): numeric sides that differ are CHAIN_MISMATCH
 *    ("≈": within 2%); "≠" between equal values is NE_EQUAL (checked in
 *    mistake text too); "→" chains of one-variable linear equations whose
 *    roots differ are ARROW_ROOT_MISMATCH. Mistake text ("mistakes[i].mistake")
 *    is skipped for "=" because it states wrong working on purpose.
 * 4. Density: lines with more than one "→", formula fields joined by " | ",
 *    slides over 60 words (keyFacts counted separately), sentences over 20 words.
 *
 * Output: tools/maths-audit/mechanical.json, and the per-lesson table in
 * tools/maths-audit/BASELINE.md (tools/maths-audit-baseline.js adds the model
 * results to it).
 */

const fs = require('fs');
const path = require('path');
const E = require('./lib-maths-expr.js');

const ROOT = path.join(__dirname, '..');
const DIR = path.join(ROOT, 'lessons', 'maths');
const OUT = path.join(__dirname, 'maths-audit');

// ---------- helpers given to the fns file ----------

function same(a, b, ordered, tol) {
  if (a == null || b == null) return false;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    const x = ordered ? a : [...a].sort((p, q) => p - q), y = ordered ? b : [...b].sort((p, q) => p - q);
    return x.every((v, i) => same(v, y[i], true, tol));
  }
  if (typeof a === 'number' && typeof b === 'number') {
    if (tol != null) return Math.abs(a - b) <= tol;
    return Math.abs(a - b) <= Math.max(1e-6, 1e-4 * Math.max(Math.abs(a), Math.abs(b)));
  }
  if (typeof a === 'string' && typeof b === 'string') {
    if (a === b) return true;
    const vs = [...new Set([...E.vars(a), ...E.vars(b)])];
    if (vs.length && E.parse(a) && E.parse(b)) return E.identical(a, b) === true;
    return false;
  }
  return false;
}

function lastPieceValue(literal) {
  const pieces = String(literal).split(/=|≈/);
  const f = E.parse(pieces[pieces.length - 1].replace(/[a-zA-Z²³/]*\s*$/, m => (/^\/?[a-z]/i.test(m.trim()) ? '' : m)).trim());
  return f ? f({}) : null;
}

function makeH(lesson) {
  const we = lesson.slides.find(s => s.type === 'workedExample') || {};
  const cm = lesson.slides.find(s => s.type === 'commonMistakes') || { mistakes: [] };
  const fieldText = (obj, field) => {
    const m = field.match(/^(\w+)(?:\[(\d+)\]\.(\w+))?$/);
    if (!m) return '';
    if (!m[2]) return String(obj[m[1]] || '');
    const arr = obj[m[1]] || [];
    return String((arr[+m[2]] || {})[m[3]] || '');
  };
  const H = {
    root: eq => { const [l, r] = eq.split('='); const res = E.linearRoot(l, r); return res ? res.value : NaN; },
    ev: (expr, vars) => E.parse(expr)(vars),
    chk(label, computed, field, literal, stated, ordered, tol) {
      const text = fieldText(we, field);
      const found = text.includes(literal);
      const value = stated !== undefined ? stated : lastPieceValue(literal);
      const ok = found && same(computed, value, ordered, tol);
      return { label, field, literal, computed, stated: value, found, ok };
    },
    mis(item, o) {
      const txt = (cm.mistakes[item - 1] || {});
      const look = spec => {
        if (!spec) return null;
        const [field, literal, value] = spec;
        const text = fieldText(cm, field);
        return { field, literal, found: text.includes(literal), value: value !== undefined ? value : lastPieceValue(literal) };
      };
      return { item, kind: 'numeric', correct: o.correct, stated: look(o.stated), mistaken: o.mistaken, claimed: look(o.claimed),
        how: o.how, ordered: !!o.ordered, formOnly: !!o.formOnly, mistakeText: txt.mistake || '', correctionText: txt.correction || '' };
    },
    concept(item, note) {
      const txt = (cm.mistakes[item - 1] || {});
      return { item, kind: 'concept', note, mistakeText: txt.mistake || '', correctionText: txt.correction || '' };
    },
  };
  return H;
}

const TEXT_SAYS_CORRECT = /actually correct|that'?s correct|is correct here|same answer here|gives the right answer|correct here, but/i;

// ---------- visible text ----------

const SKIP_KEYS = new Set(['note', 'id', 'subject', 'topic', 'subtopic', 'type', 'hasLesson', 'videos', 'videoLinks', 'stepNumber', 'diagram', 'image', 'alt']);

function visibleFields(lesson) {
  const out = [];
  lesson.slides.forEach((s, si) => {
    const walk = (v, p) => {
      if (typeof v === 'string') out.push({ slide: si, path: p, text: v });
      else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${p}[${i}]`));
      else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!SKIP_KEYS.has(k)) walk(x, p ? `${p}.${k}` : k);
    };
    for (const [k, v] of Object.entries(s)) if (!SKIP_KEYS.has(k)) walk(v, `slides[${si}].${k}`);
  });
  (lesson.keyFacts || []).forEach((kf, i) => {
    for (const k of ['fact', 'examTip']) if (kf[k]) out.push({ slide: 'keyFacts', path: `keyFacts[${i}].${k}`, text: kf[k] });
  });
  return out;
}

// ---------- 3. chains ----------

function chainFindings(fields) {
  const out = [];
  for (const f of fields) {
    const inMistake = /\.mistakes\[\d+\]\.mistake$/.test(f.path);
    for (const ch of E.chains(f.text)) {
      let items = ch.items;
      while (items.length && items[0].piece === '') items = items.slice(2);
      while (items.length && items[items.length - 1].piece === '') items = items.slice(0, -2);
      if (items.length < 3) continue;
      for (let i = 0; i + 2 < items.length; i += 2) {
        const A = items[i].piece, op = items[i + 1].op, B = items[i + 2].piece;
        const fa = E.parse(A), fb = E.parse(B);
        if (!fa || !fb) continue;
        const va = E.vars(A), vb = E.vars(B);
        let segStart = 0;
        for (let j = 1; j < i; j += 2) if (items[j].op === '→') segStart = j + 1;
        if (va.length && vb.length && op === '=' && i - segStart >= 2 && !inMistake) {
          // in "5x = 2x + 9 + 3 = 2x + 12" the first link is the equation; every later link must be an identity
          if (E.identical(A, B) === false) out.push({ type: 'CHAIN_MISMATCH', field: f.path, text: ch.text, left: A, op, right: B, note: 'later link is not an identity' });
          continue;
        }
        if (va.length || vb.length) continue;
        const a = fa({}), b = fb({});
        if (!isFinite(a) || !isFinite(b)) continue;
        if (op === '≠') {
          if (E.approxEqual(a, b, A, B)) out.push({ type: 'NE_EQUAL', field: f.path, text: ch.text, left: A, right: B, a, b });
          continue;
        }
        if (inMistake) continue;
        const ok = op === '≈' ? E.approxEqual(a, b, A, B, true) : E.approxEqual(a, b, A, B);
        if (!ok) out.push({ type: 'CHAIN_MISMATCH', field: f.path, text: ch.text, left: A, op, right: B, a: +a.toFixed(6), b: +b.toFixed(6) });
      }
      // "→" chains of equations
      if (!inMistake && items.some(x => x.op === '→')) {
        const segs = [[]];
        for (const x of items) { if (x.op === '→') segs.push([]); else segs[segs.length - 1].push(x); }
        let prev = null;
        for (const seg of segs) {
          const pieces = seg.filter(x => 'piece' in x).map(x => x.piece);
          const ops = seg.filter(x => 'op' in x).map(x => x.op);
          if (pieces.length !== 2 || ops[0] !== '=') { prev = null; continue; }
          const r = E.linearRoot(pieces[0], pieces[1]);
          if (!r) { prev = null; continue; }
          if (prev && prev.variable === r.variable && Math.abs(prev.value - r.value) > 1e-6) {
            out.push({ type: 'ARROW_ROOT_MISMATCH', field: f.path, text: ch.text, before: prev, after: r });
          }
          prev = r;
        }
      }
    }
  }
  return out;
}

// ---------- 4. density ----------

const words = s => (String(s).match(/\S+/g) || []).length;
const sentences = s => String(s).split(/(?<=[.!?])\s+(?=[A-Z(£0-9'"‘“])/).map(x => x.trim()).filter(Boolean);

function density(lesson, fields) {
  const arrowLines = [];
  for (const f of fields) for (const line of f.text.split(/\n|(?<=\.)\s+/)) if ((line.match(/→/g) || []).length > 1) arrowLines.push({ field: f.path, text: line.slice(0, 160) });
  const pipes = lesson.slides.map((s, i) => ({ slide: i, parts: s.formula && s.formula.includes(' | ') ? s.formula.split(' | ').length : 0 })).filter(x => x.parts);
  const slideWords = lesson.slides.map((s, i) => ({ slide: i, words: fields.filter(f => f.slide === i).reduce((n, f) => n + words(f.text), 0) }));
  const longSent = [];
  for (const f of fields) for (const s of sentences(f.text)) if (words(s) > 20) longSent.push({ field: f.path, words: words(s), text: s.slice(0, 120) });
  const keyFactWords = fields.filter(f => f.slide === 'keyFacts').reduce((n, f) => n + words(f.text), 0);
  return {
    arrow_lines: arrowLines.length, arrow_line_list: arrowLines,
    formula_pipes: pipes.length, formula_pipe_parts: pipes,
    slides_over_60: slideWords.filter(s => s.words > 60).length, slide_words: slideWords,
    sentences_over_20: longSent.length, long_sentences: longSent,
    keyfacts_words: keyFactWords,
  };
}

// ---------- 1 and 2. fns ----------

function fnFindings(lesson, fns) {
  const out = { we: [], mistakes: [], read: [], faults: [] };
  const fn = fns(makeH(lesson))[lesson.id];
  if (!fn) { out.faults.push({ type: 'NO_FNS', where: '-', detail: 'no recompute function written for this lesson' }); return out; }
  const r = fn();
  out.read = r.read || [];
  for (const c of r.we || []) {
    out.we.push(c);
    if (!c.found) out.faults.push({ type: 'LITERAL_NOT_FOUND', where: 'workedExample.' + c.field, detail: `"${c.literal}" (fns file fault)` });
    else if (!c.ok) out.faults.push({ type: 'WE_MISMATCH', where: 'workedExample.' + c.field, detail: `${c.label}: computed ${fmt(c.computed)}, lesson states ${fmt(c.stated)}` });
  }
  for (const m of r.mistakes || []) {
    const rec = { item: m.item, kind: m.kind, verdicts: [] };
    if (TEXT_SAYS_CORRECT.test(m.mistakeText)) rec.verdicts.push({ type: 'FALSE_MISTAKE', basis: 'text', detail: `the item's own text says it is correct: "${(m.mistakeText.match(TEXT_SAYS_CORRECT) || [''])[0]}"` });
    if (m.kind === 'numeric') {
      Object.assign(rec, { correct: m.correct, mistaken: m.mistaken, how: m.how });
      for (const s of [m.stated, m.claimed]) if (s && !s.found) out.faults.push({ type: 'LITERAL_NOT_FOUND', where: `commonMistakes.${s.field}`, detail: `"${s.literal}" (fns file fault)` });
      if (m.stated && m.stated.found && !same(m.correct, m.stated.value, m.ordered)) rec.verdicts.push({ type: 'CORRECTION_WRONG', detail: `correct answer ${fmt(m.correct)}, item states ${fmt(m.stated.value)} ("${m.stated.literal}")` });
      if (!m.formOnly && m.mistaken != null && same(m.correct, m.mistaken, m.ordered)) rec.verdicts.push({ type: 'FALSE_MISTAKE', basis: 'recompute', detail: `the mistaken method gives ${fmt(m.mistaken)}, which is the correct answer (${m.how})` });
      if (m.claimed && m.claimed.found && typeof m.claimed.value !== 'string' && m.mistaken != null && !same(m.mistaken, m.claimed.value, m.ordered, typeof m.claimed.value === 'number' ? Math.abs(m.claimed.value) * 0.01 + 0.006 : undefined)) {
        rec.verdicts.push({ type: 'CLAIM_MISMATCH', detail: `text says the mistake gives ${fmt(m.claimed.value)}; the mistaken method gives ${fmt(m.mistaken)}` });
      }
    } else rec.note = m.note;
    out.mistakes.push(rec);
    for (const v of rec.verdicts) out.faults.push({ type: v.type, where: `commonMistakes.mistakes[${m.item - 1}]`, detail: v.detail });
  }
  return out;
}

function fmt(v) {
  if (Array.isArray(v)) return '[' + v.map(fmt).join(', ') + ']';
  if (typeof v === 'number') return String(+v.toFixed(6));
  return JSON.stringify(v);
}

// ---------- main ----------

function main() {
  const ids = process.argv.slice(2);
  const fns = require('./maths-lesson-fns.js');   // (H) => { id: () => ({ we, mistakes, read }) }
  const files = fs.readdirSync(DIR).filter(f => f.endsWith('.json')).sort();
  const results = [];
  const skipped = [];
  for (const f of files) {
    const lesson = JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8'));
    if (f === 'TEMPLATE.json') { skipped.push({ file: f, why: 'template with placeholder text, no subtopic' }); continue; }
    if (ids.length && !ids.includes(lesson.id)) continue;
    const fields = visibleFields(lesson);
    const fr = fnFindings(lesson, fns);
    const chain = chainFindings(fields);
    const dens = density(lesson, fields);
    const faults = [...fr.faults, ...chain.map(c => ({ type: c.type, where: c.field, detail: c.text }))];
    const count = t => faults.filter(x => x.type === t).length;
    results.push({
      id: lesson.id, topic: lesson.topic, file: 'lessons/maths/' + f,
      counts: {
        WE_MISMATCH: count('WE_MISMATCH'), CORRECTION_WRONG: count('CORRECTION_WRONG'), FALSE_MISTAKE: count('FALSE_MISTAKE'),
        CLAIM_MISMATCH: count('CLAIM_MISMATCH'), CHAIN_MISMATCH: count('CHAIN_MISMATCH'), NE_EQUAL: count('NE_EQUAL'),
        ARROW_ROOT_MISMATCH: count('ARROW_ROOT_MISMATCH'), LITERAL_NOT_FOUND: count('LITERAL_NOT_FOUND'), NO_FNS: count('NO_FNS'),
      },
      faults, worked_example: fr.we, mistakes: fr.mistakes, found_by_reading: fr.read, density: dens,
      chains_checked: fields.reduce((n, x) => n + E.chains(x.text).length, 0),
    });
  }
  // FALSE_MISTAKE counted once per item even when text and recompute both say so
  for (const r of results) {
    const items = new Set(r.faults.filter(x => x.type === 'FALSE_MISTAKE').map(x => x.where));
    r.counts.FALSE_MISTAKE_ITEMS = items.size;
  }

  fs.mkdirSync(OUT, { recursive: true });
  const sum = k => results.reduce((n, r) => n + r.counts[k], 0);
  const dsum = k => results.reduce((n, r) => n + r.density[k], 0);
  const summary = {
    date: new Date().toISOString().slice(0, 10), lessons: results.length, skipped,
    chains_checked: results.reduce((n, r) => n + r.chains_checked, 0),
    worked_example_checks: results.reduce((n, r) => n + r.worked_example.length, 0),
    mistake_items: results.reduce((n, r) => n + r.mistakes.length, 0),
    mistake_items_numeric: results.reduce((n, r) => n + r.mistakes.filter(m => m.kind === 'numeric').length, 0),
    faults: {
      WE_MISMATCH: sum('WE_MISMATCH'), CORRECTION_WRONG: sum('CORRECTION_WRONG'), FALSE_MISTAKE_items: sum('FALSE_MISTAKE_ITEMS'),
      CLAIM_MISMATCH: sum('CLAIM_MISMATCH'), CHAIN_MISMATCH: sum('CHAIN_MISMATCH'), NE_EQUAL: sum('NE_EQUAL'),
      ARROW_ROOT_MISMATCH: sum('ARROW_ROOT_MISMATCH'), LITERAL_NOT_FOUND: sum('LITERAL_NOT_FOUND'), NO_FNS: sum('NO_FNS'),
    },
    density: {
      arrow_lines: dsum('arrow_lines'), formula_pipe_slides: dsum('formula_pipes'),
      slides_over_60_words: dsum('slides_over_60'), sentences_over_20_words: dsum('sentences_over_20'),
    },
  };
  if (!ids.length) {
    fs.writeFileSync(path.join(OUT, 'mechanical.json'), JSON.stringify({ summary, lessons: results }, null, 2) + '\n');
  }

  console.log(`maths-lesson-check: ${summary.lessons} lessons (${skipped.map(s => s.file + ' skipped: ' + s.why).join('; ') || 'none skipped'})`);
  console.log(`checked: ${summary.worked_example_checks} worked-example values, ${summary.mistake_items} mistake items (${summary.mistake_items_numeric} with numbers), ${summary.chains_checked} chains in free text`);
  console.log('faults: ' + Object.entries(summary.faults).map(([k, v]) => `${k} ${v}`).join(', '));
  console.log('density: ' + Object.entries(summary.density).map(([k, v]) => `${k} ${v}`).join(', '));
  for (const r of results) {
    const bad = r.faults.filter(x => x.type !== 'LITERAL_NOT_FOUND' && x.type !== 'NO_FNS');
    const own = r.faults.filter(x => x.type === 'LITERAL_NOT_FOUND' || x.type === 'NO_FNS');
    if (!bad.length && !own.length) continue;
    console.log(`\n${r.id}`);
    for (const x of [...bad, ...own]) console.log(`  ${x.type.padEnd(19)} ${x.where}: ${x.detail}`);
  }
  if (!ids.length) console.log(`\nWrote ${path.relative(ROOT, path.join(OUT, 'mechanical.json'))}`);
}

if (require.main === module) main();
module.exports = { visibleFields, density, chainFindings };
