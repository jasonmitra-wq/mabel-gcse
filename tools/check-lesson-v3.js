#!/usr/bin/env node
/* Lesson shape v3 checker — step b of the runbook v3 lesson sequence.
 *
 * Free: no API. Tests a lesson against tools/lesson-shape-v3.md.
 *
 *   node tools/check-lesson-v3.js p2-current-voltage [more ids]
 *   node tools/check-lesson-v3.js --statements p2-current-voltage
 *        list the specification statements of the lesson's specRef sections
 *   --no-diagrams   skip the headless-Chrome diagram render check
 *
 * Reads lessons/<subject>/<id>.json, data/<subject>-syllabus.json (specRef),
 * the local data/spec/<subject>.md (statements; never copied into the repo),
 * and data/glossary/<subject>.json when it exists.
 *
 * FAIL lines must be fixed; WARN lines are for a person to look at.
 * Exit code 1 if any lesson has a FAIL.
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const WORDS_TARGET = 1200, WORDS_MAX = 1350;
const SENT_MAX = 25, SENT_MAX_BECAUSE = 30;
const BULLETS_MAX = 3, BULLET_WORDS = 14;
const SAYS_WORDS = 12, COPY_RUN = 6;

// ── Loading ─────────────────────────────────────────────────────
function readJson(p) { return JSON.parse(fs.readFileSync(p, 'utf8')); }

const syllabi = {};
function syllabus(subject) {
  if (!(subject in syllabi)) {
    const p = path.join(ROOT, 'data', `${subject}-syllabus.json`);
    syllabi[subject] = fs.existsSync(p) ? readJson(p) : null;
  }
  return syllabi[subject];
}
// Every subtopic of every syllabus, in syllabus order.
function allSubtopics() {
  const out = [];
  for (const f of fs.readdirSync(path.join(ROOT, 'data'))) {
    const m = f.match(/^(.+)-syllabus\.json$/);
    if (!m) continue;
    const s = syllabus(m[1]);
    for (const [code, t] of Object.entries(s.topics || {})) {
      for (const st of t.subtopics || []) out.push({ subject: m[1], topic: code, id: st.id, specRef: st.specRef || [] });
    }
  }
  return out;
}
function findLesson(id) {
  for (const subject of fs.readdirSync(path.join(ROOT, 'lessons'))) {
    const p = path.join(ROOT, 'lessons', subject, `${id}.json`);
    if (fs.existsSync(p)) return { subject, file: p };
  }
  return null;
}

// ── Specification statements ────────────────────────────────────
const specCache = {};
function specLines(subject) {
  if (!specCache[subject]) {
    const p = path.join(ROOT, 'data', 'spec', `${subject}.md`);
    if (!fs.existsSync(p)) throw new Error(`Missing data/spec/${subject}.md (local only; see data/spec/MANIFEST.md)`);
    specCache[subject] = fs.readFileSync(p, 'utf8').replace(/\r\n/g, '\n').split('\n');
  }
  return specCache[subject];
}
function topRefs(refs) {
  const u = [...new Set(refs)];
  return u.filter(r => !u.some(o => o !== r && r.startsWith(o + '.')));
}
const SKIP_LINE = /^(AT skills covered|This practical activity also provides)/;
const UNIT_LINE = /^[^=]{1,60}, [^,]{1,8}, in [^,]+, \S+/;               // "charge flow, Q, in coulombs, C"
const WORD_EQ = /^[a-z][a-z ()'-]* = .+/i;                               // "charge flow = current × time"
const isEqLine = l => l.includes('=') && l.length < 90 && !/\.$/.test(l);
const isWordEq = l => isEqLine(l) && WORD_EQ.test(l) && /[a-z]{3,}/.test(l.split('=')[0]);

// Statements of one section (and its sub-sections): [{ ref, text }].
function statements(subject, ref) {
  const lines = specLines(subject);
  const esc = ref.replace(/\./g, '\\.');
  const start = lines.findIndex(l => new RegExp(`^#{2,6} ${esc} `).test(l));
  if (start < 0) throw new Error(`specRef ${ref} not found in data/spec/${subject}.md`);
  const level = lines[start].match(/^#+/)[0].length;
  // Paragraphs: runs of non-blank lines; bullets are their own items.
  const items = [];
  let cur = ref;
  for (let i = start; i < lines.length; i++) {
    const l = lines[i];
    const h = l.match(/^(#+) (\S+)/);
    if (h) {
      if (i > start && h[1].length <= level) break;
      cur = h[2];
      continue;
    }
    const t = l.trim();
    if (!t || t.startsWith('>') || SKIP_LINE.test(t)) continue;
    if (/^- /.test(t)) items.push({ ref: cur, kind: 'bullet', text: t.slice(2) });
    else items.push({ ref: cur, kind: 'para', text: t });
  }
  const out = [];
  for (let i = 0; i < items.length; i++) {
    const it = items[i], next = items[i + 1];
    if (it.kind === 'para' && /:$/.test(it.text) && next && next.kind === 'bullet') {
      // Lead-in: each following bullet is a statement, with the lead-in as context.
      while (items[i + 1] && items[i + 1].kind === 'bullet') {
        i++;
        out.push({ ref: it.ref, text: `${it.text} ${items[i].text}`, lead: it.text });
      }
      continue;
    }
    if (it.kind === 'para' && /:$/.test(it.text) && next && next.kind === 'para' && (isEqLine(next.text) || UNIT_LINE.test(next.text))) {
      // Equation block: one statement per word equation, symbol and unit lines attached.
      let lead = it.text, st = null;
      while (items[i + 1] && items[i + 1].kind === 'para' && (isEqLine(items[i + 1].text) || UNIT_LINE.test(items[i + 1].text))) {
        i++;
        const t = items[i].text;
        if (isWordEq(t) || !st) { st = { ref: it.ref, text: (lead ? lead + ' ' : '') + t }; lead = ''; out.push(st); }
        else st.text += ' ' + t;
      }
      continue;
    }
    out.push({ ref: it.ref, text: it.text });
  }
  // Number within the deepest section that holds each statement.
  const n = {};
  for (const s of out) { n[s.ref] = (n[s.ref] || 0) + 1; s.id = `${s.ref}#${n[s.ref]}`; }
  return out;
}
function lessonStatements(subject, specRef) {
  return topRefs(specRef).flatMap(r => statements(subject, r));
}

// ── Text helpers ────────────────────────────────────────────────
const strip = t => String(t || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ');
const words = t => strip(t).match(/[A-Za-z0-9][A-Za-z0-9'’.-]*/g) || [];
const wordCount = t => words(t).length;
function sentences(t) {
  return strip(t).split(/(?<=[.!?])\s+(?=[A-Z0-9"“(])|\n+/).map(s => s.trim()).filter(s => /[A-Za-z]/.test(s));
}
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// A term's matchable forms: the part before any bracket, plus simple plurals.
function termRegex(term) {
  const base = String(term).replace(/\s*\(.*?\)\s*/g, ' ').trim();
  if (!base) return null;
  return new RegExp(`\\b${esc(base).replace(/\s+/g, '\\s+')}(s|es)?\\b`, 'i');
}
const norm = s => String(s).toLowerCase().replace(/\s*\(.*?\)\s*/g, ' ').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();

// ── Banned wording ──────────────────────────────────────────────
const BANNED = [
  [/\b(AQA|8461|8462|8463|8464|8300|8702|8035|8192|specification|spec point|paper [12])\b/i, 'exam board, code, paper or "specification"'],
  [/\b(higher tier|foundation tier|higher[- ]only|HT only|\(HT\)|foundation only)\b/i, 'tier label'],
  [/\b\d\.\d+\.\d+(\.\d+)*\b/, 'specification numbering'],
  [/\brequired practical (activity )?\d+\b|\bpractical \d+\b/i, 'specification numbering (practical number)'],
  [/\bMabel\b/, 'her name'],
];
const PHYSICS_BOND = /\bbond(s|ed|ing)?\b/i;
const FIGURE = /([£$€]\s?\d)|\b(1[89]|20)\d\d\b/;
const COMPARISON = /\b(is like|are like|like a|like an|a bit like|think of|imagine)\b/i;
const SKIP_KEYS = new Set(['id', 'topic', 'diagram', 'url', 'searchQuery', 'icon', 'correct', 'examFlag', 'cardFlag',
  'referenceOnly', 'diagramExamTip', 'figuresSourced', 'specChecklist', 'sources', 'videos', 'videoLinks', 'formula',
  'calc', 'given', 'find', 'equation', 'prerequisites']);
// Labels, definitions and exam wording are not prose: no sentence-length rule.
const SENT_SKIP = /(keyTerms|tables|examBox|writeBullets|revisionCardBullets|heading|title|options|diagramCaption|says)/;
function* strings(node, p = '') {
  if (typeof node === 'string') { yield [p, node]; return; }
  if (Array.isArray(node)) { for (let i = 0; i < node.length; i++) yield* strings(node[i], `${p}[${i}]`); return; }
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) if (!SKIP_KEYS.has(k)) yield* strings(v, p ? `${p}.${k}` : k);
  }
}

// ── Numbers ─────────────────────────────────────────────────────
const MATH_NAMES = new Set(Object.getOwnPropertyNames(Math));
function evalExpr(expr, vars = {}) {
  // Lesson variables win over Math names (E is energy here, not Math.E).
  const names = Object.keys(vars);
  const mathNames = [...MATH_NAMES].filter(n => !(n in vars));
  // eslint-disable-next-line no-new-func
  const f = new Function(...mathNames, ...names, `return (${expr});`);
  return f(...mathNames.map(n => Math[n]), ...names.map(n => vars[n]));
}
function formulaVars(formula) {
  return [...new Set((formula.match(/[A-Za-z_][A-Za-z0-9_]*/g) || []).filter(v => !MATH_NAMES.has(v)))];
}
// Solve "LHS = RHS" for one unknown by Newton's method from several starts.
function solve(formula, known, unknown) {
  const [lhs, rhs] = formula.split('=');
  if (rhs === undefined) throw new Error(`formula "${formula}" has no "="`);
  const f = x => evalExpr(`(${lhs}) - (${rhs})`, { ...known, [unknown]: x });
  for (const x0 of [1, 10, 0.1, 100, 1000, 0.001, 1e5, -1, -10]) {
    let x = x0;
    for (let k = 0; k < 200; k++) {
      const fx = f(x);
      if (!isFinite(fx)) break;
      const h = Math.max(Math.abs(x) * 1e-7, 1e-9);
      const d = (f(x + h) - fx) / h;
      if (!d || !isFinite(d)) break;
      const nx = x - fx / d;
      if (Math.abs(nx - x) <= 1e-12 * Math.max(1, Math.abs(nx))) { x = nx; break; }
      x = nx;
    }
    const scale = Math.max(1, ...Object.values(known).map(Math.abs), Math.abs(x));
    if (isFinite(x) && Math.abs(f(x)) < 1e-9 * scale) return x;
  }
  return NaN;
}
const close = (a, b) => a === b || Math.abs(a - b) <= 0.005 * Math.max(Math.abs(a), Math.abs(b)) || Math.abs(a - b) < 1e-12;
// Does text show this number (allowing 1,200 and 1 200 and trailing zeros)?
function showsNumber(text, v) {
  const nums = (strip(text).replace(/(\d)[ ,](?=\d{3}\b)/g, '$1').match(/-?\d+(\.\d+)?/g) || []).map(Number);
  return nums.some(n => close(n, v));
}

// ── The checks ──────────────────────────────────────────────────
function checkLesson(id, opts) {
  const fails = [], warns = [];
  const fail = (where, msg) => fails.push(`${where}: ${msg}`);
  const warn = (where, msg) => warns.push(`${where}: ${msg}`);

  const found = findLesson(id);
  if (!found) return { fails: [`lesson ${id} not found`], warns };
  const { subject, file } = found;
  let L;
  try { L = readJson(file); } catch (e) { return { fails: [`does not parse: ${e.message}`], warns }; }
  const kps = L.keyPoints || [];
  const subs = allSubtopics();
  const me = subs.find(s => s.id === id);
  if (!me) fail('syllabus', `${id} is not in data/${subject}-syllabus.json`);

  // 1. Spec checklist complete.
  if (me && subject !== 'maths' && me.specRef.length) {
    let sts = [];
    try { sts = lessonStatements(subject, me.specRef); } catch (e) { fail('specRef', e.message); }
    const list = L.specChecklist;
    if (!Array.isArray(list)) fail('specChecklist', 'missing');
    else {
      const byRef = {};
      list.forEach((e, i) => {
        const w = `specChecklist[${i}]`;
        if (!e || !e.ref) { fail(w, 'no ref'); return; }
        if (byRef[e.ref]) fail(w, `${e.ref} listed twice`);
        byRef[e.ref] = e;
        const st = sts.find(s => s.id === e.ref);
        if (!st) { fail(w, `${e.ref} is not a statement of this lesson's specRef (run --statements)`); return; }
        if (!e.says) fail(w, 'no paraphrase ("says")');
        else {
          if (wordCount(e.says) > SAYS_WORDS) fail(w, `paraphrase is ${wordCount(e.says)} words (max ${SAYS_WORDS})`);
          const a = norm(e.says).split(' '), b = ` ${norm(st.text)} `;
          for (let k = 0; k + COPY_RUN <= a.length; k++) {
            if (b.includes(` ${a.slice(k, k + COPY_RUN).join(' ')} `)) { fail(w, `paraphrase copies ${COPY_RUN}+ words of the specification`); break; }
          }
        }
        if (e.keyPoint !== undefined) {
          if (!Number.isInteger(e.keyPoint) || e.keyPoint < 0 || e.keyPoint >= kps.length) fail(w, `keyPoint ${e.keyPoint} out of range`);
        } else if (e.taughtIn) {
          const other = subs.find(s => s.id === e.taughtIn);
          if (!other) fail(w, `taughtIn ${e.taughtIn}: no such lesson`);
          else if (!other.specRef.some(r => e.ref.startsWith(r + '.') || e.ref.startsWith(r + '#'))) fail(w, `taughtIn ${e.taughtIn}: that lesson's specRef does not include ${e.ref}`);
          else {
            const of = findLesson(e.taughtIn);
            const ol = of && readJson(of.file);
            const oe = ol && Array.isArray(ol.specChecklist) && ol.specChecklist.find(x => x.ref === e.ref);
            if (!oe) warn(w, `taughtIn ${e.taughtIn}: not yet confirmed there (that lesson has no checklist entry for ${e.ref})`);
            else if (oe.keyPoint === undefined) fail(w, `taughtIn ${e.taughtIn}, but that lesson says taughtIn ${oe.taughtIn}`);
          }
        } else fail(w, 'needs keyPoint or taughtIn');
      });
      for (const s of sts) if (!byRef[s.id]) fail('specChecklist', `${s.id} not listed`);
      // Specification order: the key points should not go backwards.
      let last = -1;
      for (const s of sts) {
        const e = byRef[s.id];
        if (!e || e.keyPoint === undefined) continue;
        if (e.keyPoint < last) warn('specChecklist', `${s.id} is taught in key point ${e.keyPoint}, after key point ${last} (spec order)`);
        last = Math.max(last, e.keyPoint);
      }
    }
  }

  // 2. Terms explained at first use, or listed as prerequisites.
  const gPath = path.join(ROOT, 'data', 'glossary', `${subject}.json`);
  const glossary = fs.existsSync(gPath) ? (readJson(gPath).terms || []) : [];
  const terms = new Map();
  for (const t of glossary) if (t && t.term) terms.set(norm(t.term), { term: t.term, from: t.lesson });
  kps.forEach(kp => (kp.keyTerms || []).forEach(t => t && t.term && terms.set(norm(t.term), { term: t.term, from: id })));
  const prereq = new Map();
  (L.prerequisites || []).forEach((p, i) => {
    const w = `prerequisites[${i}]`;
    if (!p || !p.term || !p.lesson) { fail(w, 'needs term and lesson'); return; }
    prereq.set(norm(p.term), p);
    const of = findLesson(p.lesson);
    if (!of) { fail(w, `lesson ${p.lesson} not found`); return; }
    const ol = readJson(of.file);
    const taught = (ol.keyPoints || []).some(kp => (kp.keyTerms || []).some(t => t && norm(t.term) === norm(p.term)) ||
      [...String(kp.content || '').matchAll(/<dfn>(.*?)<\/dfn>/gi)].some(m => norm(strip(m[1])) === norm(p.term)));
    if (!taught) warn(w, `${p.lesson} has no key term or <dfn> "${p.term}"`);
    const order = subs.map(s => s.id);
    if (order.indexOf(p.lesson) > order.indexOf(id)) warn(w, `${p.lesson} comes after ${id} in the syllabus`);
  });
  const basicsIdeas = (L.basics || []).map(b => norm(b.idea || ''));
  // Teaching text in reading order, with the <dfn> spans located.
  let full = '';
  const dfnSpans = [], kpStart = [];
  kps.forEach(kp => {
    kpStart.push(full.length);
    let c = String(kp.content || '');
    let out = '';
    let last = 0;
    for (const m of c.matchAll(/<dfn>(.*?)<\/dfn>/gis)) {
      out += strip(c.slice(last, m.index));
      const s = full.length + out.length;
      out += strip(m[1]);
      dfnSpans.push([s, full.length + out.length]);
      last = m.index + m[0].length;
    }
    out += strip(c.slice(last));
    full += out + '\n\n';
  });
  const explainedBy = new Map();   // term → key point index where it is first explained
  for (const [k, t] of terms) {
    const re = termRegex(t.term);
    if (!re) continue;
    const m = re.exec(full);
    if (!m) continue;
    const kpi = kpStart.filter(s => s <= m.index).length - 1;
    const inDfn = dfnSpans.some(([a, b]) => m.index >= a && m.index + m[0].length <= b + 1);
    const okBasics = basicsIdeas.some(b => b && (b === k || b.includes(k)));
    if (inDfn || prereq.has(k) || okBasics) { explainedBy.set(k, kpi); continue; }
    fail(`keyPoints[${kpi}].content`, `"${m[0]}" is used before it is explained: mark its first use <dfn>, or list it in prerequisites${t.from && t.from !== id ? ` (taught in ${t.from})` : ''}`);
    explainedBy.set(k, kpi);
  }
  // Slides show writeBullets and examBox without the content: their terms must be taught by then.
  kps.forEach((kp, i) => {
    const slide = [...(kp.writeBullets || []), ...((kp.examBox && kp.examBox.definitions) || [])].join(' ');
    for (const [k, t] of terms) {
      const re = termRegex(t.term);
      if (!re || !re.test(slide) || prereq.has(k)) continue;
      const at = explainedBy.get(k);
      if (at === undefined || at > i) fail(`keyPoints[${i}] slide`, `"${t.term}" appears on the slide before the lesson explains it`);
    }
  });
  // 3. Length.
  const teachWords = wordCount(kps.map(k => k.content).join(' '));
  if (teachWords > WORDS_MAX) fail('length', `${teachWords} words of teaching text (about ${WORDS_TARGET}; split the lesson above ${WORDS_MAX})`);
  else if (teachWords > WORDS_TARGET) warn('length', `${teachWords} words of teaching text (target about ${WORDS_TARGET})`);

  // 4. Sentence rules, banned words, figures.
  for (const [p, s] of strings(L)) {
    if (!SENT_SKIP.test(p)) {
      for (const sent of sentences(s)) {
        const n = wordCount(sent), because = /\b(because|so)\b/i.test(sent);
        if (n > SENT_MAX_BECAUSE || (n > SENT_MAX && !because)) {
          fail(p, `sentence of ${n} words (max ${because ? SENT_MAX_BECAUSE : SENT_MAX}): "${sent.slice(0, 70)}…"`);
        }
      }
    }
    for (const [re, what] of BANNED) { const m = strip(s).match(re); if (m) fail(p, `${what}: "${m[0]}"`); }
    if (subject === 'physics') { const m = strip(s).match(PHYSICS_BOND); if (m) fail(p, `physics: "${m[0]}"`); }
    if (FIGURE.test(strip(s)) && !(L.sources && L.sources.length)) warn(p, `real-world figure or date with no sources field: "${strip(s).match(FIGURE)[0]}"`);
  }

  // 5. Key point structure: examBox, bullets, analogies, checkpoints, diagrams.
  const eqs = new Map();
  kps.forEach((kp, i) => {
    const w = `keyPoints[${i}]`;
    const box = kp.examBox;
    if (!box || (!(box.definitions || []).length && !(box.equations || []).length)) fail(w, 'no examBox (needs a definition or an equation)');
    for (const [j, e] of ((box && box.equations) || []).entries()) {
      const we = `${w}.examBox.equations[${j}]`;
      for (const f of ['id', 'words', 'symbols', 'formula', 'units']) if (!e[f]) fail(we, `missing ${f}`);
      if (!e.formula || !e.id) continue;
      if (eqs.has(e.id)) { const prev = eqs.get(e.id); if (prev.formula !== e.formula) fail(we, `id ${e.id} used for two different formulas`); continue; }
      eqs.set(e.id, { ...e, kp: i });
      const vars = formulaVars(e.formula);
      for (const v of vars) if (!(e.units || []).some(u => u.symbol === v)) fail(we, `symbol ${v} has no units line`);
      for (const u of e.units || []) for (const f of ['symbol', 'quantity', 'unit', 'unitSymbol']) if (!u[f]) fail(we, `units ${u.symbol || '?'}: missing ${f}`);
    }
    const bl = kp.writeBullets || [];
    if (bl.length > BULLETS_MAX) fail(`${w}.writeBullets`, `${bl.length} bullets (max ${BULLETS_MAX})`);
    bl.forEach((b, j) => { if (wordCount(b) > BULLET_WORDS) fail(`${w}.writeBullets[${j}]`, `${wordCount(b)} words (max ${BULLET_WORDS})`); });
    if (COMPARISON.test(strip(kp.content)) && !(kp.analogies || []).length) {
      fail(`${w}.content`, `has a comparison ("${strip(kp.content).match(COMPARISON)[0]}") but no analogies entry`);
    }
    (kp.analogies || []).forEach((a, j) => { if (!a || !a.text || !a.limit) fail(`${w}.analogies[${j}]`, 'needs text and limit'); });
    if (!/<dfn>/i.test(kp.content || '') && !(kp.keyTerms || []).length) warn(w, 'no <dfn> term and no keyTerms');
    if (kp.diagram) {
      if (!fs.existsSync(path.join(ROOT, 'diagrams', subject, `${kp.diagram}.svg`))) fail(`${w}.diagram`, `diagrams/${subject}/${kp.diagram}.svg not found`);
    }
  });
  const cps = L.checkpoints || {};
  const want = kps.map((_, i) => String(i)).join(','), have = Object.keys(cps).sort((a, b) => a - b).join(',');
  if (want !== have) fail('checkpoints', `keys are [${have}], need one per key point [${want}]`);
  Object.entries(cps).forEach(([k, c]) => {
    if (!c || !c.question || !Array.isArray(c.options) || !Number.isInteger(c.correct) || c.correct < 0 || c.correct >= c.options.length) {
      fail(`checkpoints[${k}]`, 'needs question, options and a valid correct index');
    }
  });

  // 6. Worked examples: every equation has one, and the numbers recompute.
  const examples = kps.flatMap((kp, i) => (kp.workedExamples || []).map((x, j) => ({ x, where: `keyPoints[${i}].workedExamples[${j}]` })));
  for (const [eid] of eqs) if (!examples.some(e => e.x.equation === eid)) fail('workedExamples', `equation ${eid} has no worked example`);
  for (const { x, where } of examples) {
    const eq = eqs.get(x.equation);
    if (!eq) { fail(where, `equation ${x.equation} is not in any examBox`); continue; }
    if (!x.question || !Array.isArray(x.steps) || x.steps.length < 2 || !x.answer || typeof x.answer.value !== 'number') {
      fail(where, 'needs question, at least two steps, and answer.value'); continue;
    }
    const vars = formulaVars(eq.formula), given = x.given || {};
    const missing = vars.filter(v => v !== x.find && !(v in given));
    if (!vars.includes(x.find)) { fail(where, `find "${x.find}" is not in ${eq.formula}`); continue; }
    if (missing.length) { fail(where, `given lacks ${missing.join(', ')}`); continue; }
    let v;
    try { v = solve(eq.formula, given, x.find); } catch (e) { fail(where, e.message); continue; }
    if (!isFinite(v)) fail(where, `could not solve ${eq.formula} for ${x.find}`);
    else if (!close(v, x.answer.value)) fail(where, `answer ${x.answer.value} but ${eq.formula} gives ${x.find} = ${+v.toPrecision(6)}`);
    const allText = [x.question, ...x.steps.map(s => s.text)].join(' ');
    for (const [k, gv] of Object.entries(given)) if (!showsNumber(allText, gv)) fail(where, `given ${k} = ${gv} does not appear in the question or steps`);
    x.steps.forEach((s, j) => {
      if (!s || !s.text) { fail(`${where}.steps[${j}]`, 'no text'); return; }
      if (s.calc !== undefined || s.value !== undefined) {
        let r;
        try { r = evalExpr(s.calc); } catch (e) { fail(`${where}.steps[${j}]`, `calc does not run: ${e.message}`); return; }
        if (typeof s.value !== 'number' || !close(r, s.value)) fail(`${where}.steps[${j}]`, `calc ${s.calc} = ${+Number(r).toPrecision(6)}, value says ${s.value}`);
        else if (!showsNumber(s.text, s.value)) fail(`${where}.steps[${j}]`, `value ${s.value} is not in the step text`);
      }
    });
    if (!showsNumber(x.steps[x.steps.length - 1].text, x.answer.value)) fail(where, `the last step does not show the answer ${x.answer.value}`);
  }

  // 7. Diagrams render clean (all this lesson's diagrams).
  const diags = [...new Set(kps.map(k => k.diagram).filter(Boolean))];
  if (diags.length && !opts.noDiagrams) {
    const r = spawnSync(process.execPath, [path.join(__dirname, 'check-diagrams.js'), subject], { cwd: ROOT, encoding: 'utf8' });
    if (r.status === 2 || r.error) warn('diagrams', `render check did not run: ${(r.stderr || String(r.error)).trim().split('\n')[0]}`);
    else for (const d of diags) {
      const line = (r.stdout || '').split('\n').find(l => l.includes(`diagrams/${subject}/${d}.svg:`));
      if (line) fail(`diagram ${d}`, `render check flagged it (${line.trim()}); see tools/diagram-report.md`);
    }
  }

  return { fails, warns, teachWords };
}

// ── Main ────────────────────────────────────────────────────────
function main() {
  const args = process.argv.slice(2);
  const opts = { noDiagrams: args.includes('--no-diagrams') };
  if (args[0] === '--statements') {
    const id = args[1];
    const me = allSubtopics().find(s => s.id === id);
    if (!me) { console.error(`${id} is not in any syllabus file`); process.exit(1); }
    for (const s of lessonStatements(me.subject, me.specRef)) console.log(`${s.id.padEnd(12)} ${s.text}`);
    return;
  }
  const ids = args.filter(a => !a.startsWith('--'));
  if (!ids.length) { console.error('usage: node tools/check-lesson-v3.js <lesson id> [...] [--no-diagrams] | --statements <id>'); process.exit(1); }
  let bad = 0;
  for (const id of ids) {
    const r = checkLesson(id, opts);
    console.log(`${r.fails.length ? 'FAIL' : 'ok  '}  ${id}${r.teachWords !== undefined ? ` (${r.teachWords} words)` : ''} — ${r.fails.length} fail, ${r.warns.length} warn`);
    r.fails.forEach(f => console.log(`  FAIL ${f}`));
    r.warns.forEach(w => console.log(`  WARN ${w}`));
    if (r.fails.length) bad++;
  }
  process.exit(bad ? 1 : 0);
}

if (require.main === module) main();
module.exports = { statements, lessonStatements, checkLesson, solve };
