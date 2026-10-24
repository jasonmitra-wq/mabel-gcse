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
// Brief v3.1 (docs/briefs/2026-10-19-pilot-feedback-v3-1.md, step 1): the
// practice generators (every file in js/practice/) and the widget models.
const Practice = require('../js/practice/practice.js');
for (const f of fs.readdirSync(path.join(ROOT, 'js', 'practice'))) if (f !== 'practice.js' && f.endsWith('.js')) require(path.join(ROOT, 'js', 'practice', f));
const WidgetModels = require('../js/widgets/widget-models.js');
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
  'calc', 'given', 'find', 'equation', 'prerequisites', 'after', 'graph', 'generator', 'labels', 'from']);
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
// Every name in the formula is a lesson variable, except a function call such
// as sqrt( or anything written Math.x (so E is energy, never Math.E).
function formulaVars(formula) {
  const out = [];
  for (const m of formula.matchAll(/(Math\.)?([A-Za-z_][A-Za-z0-9_]*)(\s*\()?/g)) {
    if (m[1] || m[3] || m[2] === 'Math') continue;
    out.push(m[2]);
  }
  return [...new Set(out)];
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
  const dfnSpans = [], kpStart = [], kpText = [];
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
    kpText.push(out);
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
    // v3.1 (1b): comparisons are declared once at lesson level (checked below), not per key point.
    (kp.analogies || []).forEach((a, j) => {
      if (!a || !a.text || !a.limit) fail(`${w}.analogies[${j}]`, 'needs text and limit');
      else fail(`${w}.analogies[${j}]`, `"${a.text}": declare the lesson's one comparison in the lesson-level "comparison" field instead (v3.1)`);
    });
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

  // 8. v3.1 additions (brief docs/briefs/2026-10-19-pilot-feedback-v3-1.md, step 1).
  checkV31({ id, subject, L, kps, terms, prereq, basicsIdeas, full, dfnSpans, kpStart, kpText, eqs, examples, subs, fail, warn });

  // 9. Prerequisite order (brief docs/briefs/2026-10-19-evidence-layer.md, step 2).
  checkPrereqMap({ id, subject, L, kps, kpText, eqs, examples, subs, fail, warn });
  checkEvidence({ id, subject, L, fail });

  // 7. Diagrams render clean (all this lesson's diagrams, the picture sequences too).
  const diags = [...new Set([...kps.map(k => k.diagram), ...kps.flatMap(k => (k.pictures || []).map(p => p && p.diagram))].filter(Boolean))];
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

// ── v3.1 additions ──────────────────────────────────────────────
const REVERSING = /\b(reverse|reversed|turn (it|the component|the diode|them) round|other way round|wrong way round|negative)\b/i;
const CONVERTS = /(must be in|convert|× ?60|÷ ?1000|× ?1000|\bminutes?\b|\bmA\b|\bkJ\b|\bkΩ\b)/;
const fold = k => (k.length > 3 && /[^s]s$/.test(k) ? k.slice(0, -1) : k);

function checkV31(c) {
  const { id, subject, L, kps, terms, prereq, full, dfnSpans, kpStart, kpText, eqs, examples, subs, fail, warn } = c;

  // Where each term is first explained in the teaching text: -1 = before the
  // lesson (a prerequisite, a basics idea), undefined = never.
  const basicsNames = new Set();
  (L.basics || []).forEach(b => String(b.idea || '').split(/\s+or\s+/i).forEach(x => {
    const k = norm(x).replace(/^(a|an|the) /, '');
    if (k) basicsNames.add(fold(k));
  }));
  const known = new Map();          // folded term key → display term
  for (const [k, t] of terms) known.set(fold(k), t.term);
  for (const [k, p] of prereq) known.set(fold(k), p.term);
  for (const k of basicsNames) if (!known.has(k)) known.set(k, k);
  for (const [a, b] of dfnSpans) { const k = fold(norm(full.slice(a, b))); if (k && !known.has(k)) known.set(k, full.slice(a, b)); }
  function explainedAt(key) {
    if (prereq.has(key) || [...prereq.keys()].some(k => fold(k) === key) || basicsNames.has(key)) return -1;
    let best;
    for (const [a, b] of dfnSpans) {
      const k = fold(norm(full.slice(a, b)));
      if (k === key && (best === undefined || a < best)) best = a;
    }
    return best;
  }
  // A label is a term: exactly, or the last word(s) of one ("current" → electric current).
  function resolve(label) {
    const k = fold(norm(label));
    if (known.has(k)) return k;
    const hit = [...known.keys()].find(t => t.endsWith(' ' + k));
    return hit || null;
  }
  // Index in `full` of the end of the sentence of key point i that contains `phrase`.
  function posAfter(i, phrase) {
    const words = norm(phrase).split(' ').filter(Boolean);
    if (!words.length) return null;
    const re = new RegExp(words.map(esc).join('[^A-Za-z0-9]+'), 'i');
    const m = re.exec(kpText[i]);
    if (!m) return null;
    const rest = kpText[i].slice(m.index + m[0].length);
    const end = rest.search(/[.!?](\s|$)/);
    return kpStart[i] + m.index + m[0].length + (end === -1 ? rest.length : end + 1);
  }
  const svgCache = {};
  function svgTexts(diagram) {
    if (!(diagram in svgCache)) {
      const p = path.join(ROOT, 'diagrams', subject, `${diagram}.svg`);
      svgCache[diagram] = fs.existsSync(p)
        ? [...fs.readFileSync(p, 'utf8').matchAll(/<text[^>]*>([\s\S]*?)<\/text>/g)].map(m => m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'))
        : null;
    }
    return svgCache[diagram];
  }
  // Every label, and every term in the picture's own text, explained by `pos`.
  function picturesTaught(where, diagram, labels, pos) {
    (labels || []).forEach(label => {
      const k = resolve(label);
      if (!k) { fail(where, `label "${label}" is not a glossary term, so it cannot be tapped (add it to the glossary through a <dfn> or keyTerm, or use the term's own name)`); return; }
      const at = explainedAt(k);
      if (at === undefined || at > pos) fail(where, `label "${label}" is shown before the lesson explains it`);
    });
    if (!diagram) return;
    const texts = svgTexts(diagram);
    if (!texts) return;
    const flagged = new Set();
    for (const s of texts) {
      for (const [k, t] of terms) {
        const re = termRegex(t.term);
        if (!re || !re.test(s) || flagged.has(k)) continue;
        const at = explainedAt(fold(k));
        if (at !== undefined && at > pos) { flagged.add(k); fail(where, `the picture says "${t.term}" ("${s}") before the lesson explains it`); }
      }
    }
  }
  const revM = REVERSING.exec(full);
  const revPos = revM ? revM.index : Infinity;

  // a. Pictures build up.
  kps.forEach((kp, i) => {
    const w = `keyPoints[${i}]`;
    const kpEnd = kpStart[i] + kpText[i].length;
    (kp.pictures || []).forEach((p, j) => {
      const pw = `${w}.pictures[${j}]`;
      if (!p || !p.diagram || !p.after || !p.caption || !Array.isArray(p.labels)) { fail(pw, 'needs diagram, after, caption and labels'); return; }
      if (!fs.existsSync(path.join(ROOT, 'diagrams', subject, `${p.diagram}.svg`))) fail(pw, `diagrams/${subject}/${p.diagram}.svg not found`);
      const pos = posAfter(i, p.after);
      if (pos === null) { fail(pw, `"after" phrase not found in the key point's content: "${p.after}"`); return; }
      picturesTaught(pw, p.diagram, p.labels, pos);
      if (p.graph === 'full' && pos < revPos) fail(pw, 'a full graph (negative values) before the lesson teaches reversing: show the beginner graph first');
      if (p.graph && !['beginner', 'full'].includes(p.graph)) fail(pw, `graph must be "beginner" or "full", not "${p.graph}"`);
    });
    if (kp.pictures && kp.pictures.length && kp.diagram !== kp.pictures[kp.pictures.length - 1].diagram) fail(`${w}.diagram`, 'must be the key point\'s last picture (for the old views)');
    if (kp.diagram && !(kp.pictures || []).length) picturesTaught(`${w}.diagram`, kp.diagram, [], kpEnd);
  });

  // b. One comparison per lesson.
  const cmp = L.comparison;
  if (Array.isArray(cmp)) fail('comparison', 'at most one comparison per lesson (an object, not a list)');
  else if (cmp) {
    if (!cmp.name || !Array.isArray(cmp.words) || !cmp.words.length || !Array.isArray(cmp.parts) || !cmp.parts.length || !cmp.limit) fail('comparison', 'needs name, words, parts and limit');
    (cmp.parts || []).forEach((p, j) => { if (!p || !p.thing || !p.standsFor) fail(`comparison.parts[${j}]`, 'needs thing and standsFor'); });
  }
  const cmpWords = cmp && !Array.isArray(cmp) && Array.isArray(cmp.words) ? cmp.words.map(x => new RegExp(`\\b${esc(x)}`, 'i')) : [];
  for (const [p, s] of strings(L)) {
    if (/^comparison/.test(p)) continue;
    for (const sent of sentences(s)) {
      const m = sent.match(COMPARISON);
      if (!m) continue;
      if (!cmpWords.length) fail(p, `a comparison ("${m[0]}") with no lesson-level "comparison": declare the lesson's one comparison there`);
      else if (!cmpWords.some(re => re.test(sent))) fail(p, `a second comparison ("${sent.slice(0, 60)}…"): use only the lesson's comparison, ${cmp.name}`);
    }
  }

  // Questions: multiple choice, or a practice generator.
  const lessonIds = new Set(subs.map(s => s.id));
  function question(q, where, maxFrom) {
    if (!q || typeof q !== 'object') { fail(where, 'not a question'); return null; }
    if (q.generator) {
      if (!Practice.has(q.generator)) fail(where, `no practice generator ${q.generator}`);
      return 'number';
    }
    if (!q.question || !Array.isArray(q.options) || q.options.length < 2 || q.options.length > 5 || !Number.isInteger(q.correct) || q.correct < 0 || q.correct >= q.options.length) fail(where, 'needs question, 2 to 5 options and a valid correct index');
    if (!q.explain) fail(where, 'needs explain (one short sentence)');
    if (q.from !== undefined && !(Number.isInteger(q.from) ? q.from >= 0 && q.from <= maxFrom : lessonIds.has(q.from))) fail(where, `from ${JSON.stringify(q.from)} is not a key point up to ${maxFrom} or a lesson id`);
    return 'mc';
  }

  // c. Readiness before a practical.
  kps.forEach((kp, i) => {
    const w = `keyPoints[${i}]`;
    const practical = kp.practical === true || /practical/i.test(kp.heading || '');
    if (!practical) { if (kp.readiness) warn(`${w}.readiness`, 'a readiness check on a key point that is not marked practical'); return; }
    const r = kp.readiness;
    if (!r || !Array.isArray(r.questions) || r.questions.length !== 2 || !r.recap) { fail(`${w}.readiness`, 'a practical starts with two readiness questions and a recap'); return; }
    r.questions.forEach((q, j) => question(q, `${w}.readiness.questions[${j}]`, i));
  });

  // d. Worked examples (2 or 3 per equation, easy to harder) and practice generators.
  for (const [eid, eq] of eqs) {
    const list = examples.filter(e => e.x.equation === eid);
    if (list.length < 2) fail('workedExamples', `equation ${eid} has ${list.length} worked example(s): needs 2 or 3, easy to harder`);
    if (list.length > 3) fail('workedExamples', `equation ${eid} has ${list.length} worked examples (at most 3)`);
    if (list.length >= 2) {
      const lastX = list[list.length - 1].x;
      const lhs = eq.formula.split('=')[0].trim();
      const harder = lastX.find !== lhs || (lastX.steps || []).some(s => CONVERTS.test(strip(s.text)));
      if (!harder) warn(list[list.length - 1].where, `the last worked example of ${eid} neither rearranges nor converts a unit (easy to harder)`);
    }
    if (!Practice.has(eid)) { fail('practice', `equation ${eid} has no practice generator in js/practice/`); continue; }
    const bad = new Set();
    const vars = formulaVars(eq.formula);
    for (let seed = 1; seed <= 200; seed++) {
      let q;
      try { q = Practice.make(eid, seed); } catch (e) { bad.add(`throws: ${e.message}`); break; }
      const given = q.given || {};
      if (!vars.includes(q.find)) bad.add(`find "${q.find}" is not in ${eq.formula}`);
      for (const v of vars) if (v !== q.find && !(v in given)) bad.add(`given lacks ${v}`);
      for (const [k, v] of Object.entries(given)) if (!(isFinite(v) && v > 0)) bad.add(`given ${k} = ${v} is not a sensible value`);
      const a = q.answer || {};
      if (!(isFinite(a.value) && a.value > 0) || !a.unit) { bad.add(`answer ${JSON.stringify(a)} is not a sensible value`); continue; }
      if (a.value < 1e-3 || a.value > 1e5) bad.add(`answer ${a.value} ${a.unit} is out of a sensible range`);
      if (Practice.round3(a.value) !== a.value) bad.add(`answer ${a.value} has more than 3 significant figures`);
      let v;
      try { v = solve(eq.formula, given, q.find); } catch (e) { bad.add(e.message); continue; }
      if (!close(v, a.value * (a.si || 1))) bad.add(`seed ${seed}: answer ${a.value} but ${eq.formula} gives ${q.find} = ${+Number(v).toPrecision(6)}`);
      if (!q.question || wordCount(q.question) > 40) bad.add(`seed ${seed}: question missing or over 40 words`);
      const steps = q.steps || [];
      if (steps.length < 2 || !showsNumber(steps[steps.length - 1].text, a.value)) bad.add(`seed ${seed}: the last step does not show the answer`);
      if (!Practice.check(q, `${a.value} ${a.unit}`).ok) bad.add(`seed ${seed}: the checker rejects the right answer`);
      if (Practice.check(q, `${a.value * 2}`).ok) bad.add(`seed ${seed}: the checker accepts a wrong answer`);
    }
    [...bad].slice(0, 5).forEach(b => fail(`practice ${eid}`, b));
  }

  // e. Hands-on widgets.
  const widgets = kps.map((kp, i) => ({ wd: kp.widget, i })).filter(x => x.wd);
  // One or two widgets per lesson. Evidence layer: the same widget may come back
  // at a later key point (for a "predict first" item there), so distinct widgets count.
  const kinds = [...new Set(widgets.map(x => x.wd.id))];
  if (kinds.length > 2) fail('widgets', `${kinds.length} different widgets (${kinds.join(', ')}): one or two per lesson`);
  if (!widgets.length) warn('widgets', 'no widget: add one or two wherever she can see the idea change');
  for (const { wd, i } of widgets) {
    const w = `keyPoints[${i}].widget`;
    if (!wd.id || !wd.intro) { fail(w, 'needs id and intro'); continue; }
    const test = WidgetModels.tests[wd.id];
    if (!test) { fail(w, `widget ${wd.id} has no model test in js/widgets/widget-models.js`); continue; }
    const fails = test();
    fails.slice(0, 5).forEach(f => fail(w, `model test: ${f}`));
    picturesTaught(w, null, wd.labels || [], kpStart[i] + kpText[i].length);
    // Evidence layer, step 3: "predict first" items in the widget.
    ((wd.options && wd.options.predicts) || []).forEach((p, j) => {
      const pw = `${w}.options.predicts[${j}]`;
      if (!p || !p.id || !p.question || !Array.isArray(p.options) || p.options.length < 2 || p.options.length > 5 || !Number.isInteger(p.correct) || !p.options[p.correct]) { fail(pw, 'needs id, question, 2 to 5 options and a valid correct index'); return; }
      if (p.options.some(o => !o || !o.text)) fail(pw, 'every option needs text');
      if (p.options[p.correct].mis) fail(pw, 'the right answer cannot carry a misconception');
      for (const o of p.options) if (o.mis && !MISCONCEPTIONS().has(o.mis)) fail(pw, `misconception ${o.mis} is not in tools/pilot/misconceptions.md`);
      if (!p.explain || !p.explain.prompt || !Array.isArray(p.explain.points) || !p.explain.points.length) fail(pw, 'needs explain.prompt and explain.points (her one line, then the self-check)');
      if (!p.try) fail(pw, 'needs try: what to do in the widget to see it');
    });
  }

  // f. Making it stick.
  kps.forEach((kp, i) => {
    const w = `keyPoints[${i}]`;
    const ow = kp.ownWords;
    if (!ow || !ow.prompt || !Array.isArray(ow.points) || ow.points.length < 2 || ow.points.length > 4) fail(`${w}.ownWords`, 'needs prompt and 2 to 4 points');
    const mq = kp.mixedQuestions;
    if (!Array.isArray(mq) || mq.length !== 2) { fail(`${w}.mixedQuestions`, 'needs exactly two questions'); return; }
    mq.forEach((q, j) => question(q, `${w}.mixedQuestions[${j}]`, i));
    if (i > 0 && !mq.some(q => (Number.isInteger(q.from) && q.from < i) || (typeof q.from === 'string' && q.from !== id))) fail(`${w}.mixedQuestions`, 'at least one must mix in an earlier key point ("from")');
  });
  const quiz = L.endQuiz;
  if (!Array.isArray(quiz) || quiz.length < 5 || quiz.length > 8) fail('endQuiz', `needs 5 to 8 questions${Array.isArray(quiz) ? ` (has ${quiz.length})` : ''}`);
  else {
    const kinds = quiz.map((q, j) => question(q, `endQuiz[${j}]`, kps.length - 1));
    if (kinds.filter(k => k === 'mc').length < 3) fail('endQuiz', 'needs at least three multiple-choice questions (the next lesson opens with three of them)');
    const covered = new Set(quiz.map(q => q.from).filter(Number.isInteger));
    if (covered.size < Math.ceil(kps.length / 2)) warn('endQuiz', `covers ${covered.size} of ${kps.length} key points ("from")`);
  }
}

// ── Misconceptions (evidence layer, step 1c) ───────────────────
// The in-scope ids (M1, M2, …) from the first table of tools/pilot/misconceptions.md.
let _mis = null;
function MISCONCEPTIONS() {
  if (_mis) return _mis;
  const p = path.join(ROOT, 'tools', 'pilot', 'misconceptions.md');
  _mis = new Set();
  if (!fs.existsSync(p)) return _mis;
  const text = fs.readFileSync(p, 'utf8');
  const inScope = text.split(/^## /m).find(s => /^In scope/.test(s)) || '';
  for (const m of inScope.matchAll(/^\| (M\d+) \|/gm)) _mis.add(m[1]);
  return _mis;
}
// Every in-scope misconception is met head-on (predict, widget, explain) in at
// least one lesson of the prerequisite map's group; each lesson in the group
// ends with a "More practice" link.
function checkEvidence(c) {
  const { id, L, fail } = c;
  for (const { map } of prereqMaps(c.subject)) {
    const group = map.lessons || [];
    if (!group.includes(id)) continue;
    const mp = L.morePractice;
    if (!Array.isArray(mp) || !mp.length || mp.some(x => !x || !x.label || !/^https:\/\//.test(x.url || ''))) fail('morePractice', 'needs at least one { label, url } link (https) for "More practice" at the end');
    const met = new Set();
    for (const lid of group) {
      const f = findLesson(lid);
      if (!f) continue;
      for (const kp of readJson(f.file).keyPoints || []) for (const p of (kp.widget && kp.widget.options && kp.widget.options.predicts) || []) for (const o of p.options || []) if (o && o.mis) met.add(o.mis);
    }
    const missing = [...MISCONCEPTIONS()].filter(m => !met.has(m));
    if (missing.length) fail('misconceptions', `not met head-on by a "predict first" item in ${group.join(' or ')}: ${missing.join(', ')}`);
  }
}

// ── Prerequisite map (evidence layer, step 2) ──────────────────
// data/prereq/<subject>-*.json: every idea a group of lessons uses, what it
// depends on (maths skills too), and where it is taught. A lesson in a map may
// only use an idea after its prerequisites, in order:
//   - every term the lesson explains or borrows is an idea in the map;
//   - an idea the map says is taught in key point k is introduced there;
//   - an idea is not used in a key point before the one that teaches it, nor
//     taken from a later lesson, unless the lesson's basics recap it;
//   - each prerequisite of an idea comes first: an earlier key point (or
//     earlier in the same one), an earlier lesson that this lesson lists in its
//     prerequisites, re-explains or recaps in its basics, or outside these lessons;
//   - a worked example that rearranges or converts a unit has that maths skill
//     among its equation's prerequisites.
function prereqMaps(subject) {
  const dir = path.join(ROOT, 'data', 'prereq');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.startsWith(`${subject}-`) && f.endsWith('.json')).map(f => ({ file: `data/prereq/${f}`, map: readJson(path.join(dir, f)) }));
}
function ideaRegex(term) {
  const base = String(term).trim();
  const caps = /^[A-Z]{2,}$/.test(base);
  return new RegExp(`(^|[^A-Za-z])${esc(base).replace(/\s+/g, '[\\s-]+')}(s|es)?(?![A-Za-z])`, caps ? '' : 'i');
}
function checkPrereqMap(c) {
  const { id, L, kps, kpText, eqs, examples, subs, fail } = c;
  const order = subs.map(s => s.id);
  for (const { file, map } of prereqMaps(c.subject)) {
    if (!(map.lessons || []).includes(id)) continue;
    const ideas = map.ideas || [];
    const byId = new Map(ideas.map(x => [x.id, x]));
    const where = `prereq ${file}`;
    ideas.forEach(x => {
      if (!x.id || !x.name || !Array.isArray(x.terms) || !Array.isArray(x.dependsOn) || !x.taught) fail(where, `idea ${x.id || '?'} needs id, name, terms, dependsOn and taught`);
      (x.dependsOn || []).forEach(d => { if (!byId.has(d)) fail(where, `${x.id} depends on ${d}, which is not in the map`); });
      if (x.taught !== 'outside these lessons' && !(x.taught && x.taught.lesson && Number.isInteger(x.taught.keyPoint))) fail(where, `${x.id}: taught must be { lesson, keyPoint } or "outside these lessons"`);
    });
    const res = ideas.map(x => ({ x, res: (x.terms || []).map(ideaRegex) }));
    const termIdea = t => { const k = norm(t); return ideas.find(x => (x.terms || []).some(u => norm(u) === k || fold(norm(u)) === fold(k))); };
    const basicsText = (L.basics || []).map(b => `${b.idea || ''}`).join(' | ');
    const inBasics = x => (x.terms || []).some(t => ideaRegex(t).test(basicsText));
    const listed = x => (L.prerequisites || []).some(p => (x.terms || []).some(t => norm(t) === norm(p.term) || norm(p.term).startsWith(norm(t) + ' ')));
    const dfnIn = (x, k) => [...String(kps[k].content || '').matchAll(/<dfn>(.*?)<\/dfn>/gis)].some(m => (x.terms || []).some(t => ideaRegex(t).test(strip(m[1])))) ||
      (kps[k].keyTerms || []).some(t => t && (x.terms || []).some(u => ideaRegex(u).test(t.term)));
    const reExplained = x => kps.some((kp, k) => dfnIn(x, k));
    const at = x => (x.taught && x.taught.lesson ? x.taught : null);
    const before = (a, b) => order.indexOf(a) < order.indexOf(b);

    // Every term the lesson explains or borrows is in the map.
    const used = new Set();
    kps.forEach(kp => {
      for (const m of String(kp.content || '').matchAll(/<dfn>(.*?)<\/dfn>/gis)) used.add(strip(m[1]).trim());
      (kp.keyTerms || []).forEach(t => t && t.term && used.add(String(t.term).replace(/\s*\(.*?\)\s*/g, ' ').trim()));
    });
    (L.prerequisites || []).forEach(p => p && p.term && used.add(String(p.term).replace(/\s*\(.*?\)\s*/g, ' ').trim()));
    for (const t of used) if (t && !termIdea(t)) fail(where, `"${t}" (used by ${id}) is not in the prerequisite map`);

    // Ideas taught in this lesson: introduced where the map says; prerequisites first.
    for (const x of ideas) {
      const t = at(x);
      if (!t || t.lesson !== id) continue;
      if (t.keyPoint >= kps.length) { fail(where, `${x.id}: key point ${t.keyPoint} out of range for ${id}`); continue; }
      if ((x.terms || []).length && !dfnIn(x, t.keyPoint)) fail(`${where}: ${x.id}`, `the map says it is taught in ${id} key point ${t.keyPoint}, but no <dfn> or key term there names it`);
      for (const d of x.dependsOn || []) {
        const D = byId.get(d), dt = D && at(D);
        if (!D || !dt) continue;   // outside these lessons
        if (dt.lesson === id) {
          if (dt.keyPoint > t.keyPoint) fail(`${where}: ${x.id}`, `needs ${d}, which ${id} teaches later (key point ${dt.keyPoint} after ${t.keyPoint})`);
        } else if (!before(dt.lesson, id)) fail(`${where}: ${x.id}`, `needs ${d}, taught in ${dt.lesson}, which comes after ${id}`);
        else if (!listed(D) && !reExplained(D) && !inBasics(D) && (D.terms || []).length) fail(`${where}: ${x.id}`, `needs ${d} from ${dt.lesson}: list it in prerequisites, re-explain it or recap it in basics`);
      }
    }
    // No idea used before the key point that teaches it, or from a later lesson.
    for (const { x, res: rs } of res) {
      const t = at(x);
      if (!t || !rs.length) continue;
      for (let k = 0; k < kps.length; k++) {
        if (!rs.some(re => re.test(kpText[k]))) continue;
        if (t.lesson === id && k < t.keyPoint && !inBasics(x)) { fail(`keyPoints[${k}].content`, `uses "${x.name}" (${x.id}) before key point ${t.keyPoint}, which teaches it (prerequisite map)`); break; }
        if (t.lesson !== id && !before(t.lesson, id) && !inBasics(x) && !dfnIn(x, k)) { fail(`keyPoints[${k}].content`, `uses "${x.name}" (${x.id}), taught later in ${t.lesson} (prerequisite map)`); break; }
        if (t.lesson !== id && before(t.lesson, id) && !listed(x) && !reExplained(x) && !inBasics(x)) { fail(`keyPoints[${k}].content`, `uses "${x.name}" from ${t.lesson}: list it in prerequisites, re-explain it or recap it in basics (prerequisite map)`); break; }
        break;
      }
    }
    // Maths in the worked examples is among the equation's prerequisites.
    for (const { x: ex, where: w } of examples) {
      const idea = ideas.find(i => i.equation === ex.equation);
      if (!idea) { fail(w, `equation ${ex.equation} has no idea in the prerequisite map`); continue; }
      const eq = eqs.get(ex.equation);
      const lhs = eq ? eq.formula.split('=')[0].trim() : null;
      const text = (ex.steps || []).map(s => strip(s.text)).join(' ') + ' ' + strip(ex.question);
      const needs = [];
      if (lhs && ex.find !== lhs) needs.push('maths-rearrange');
      if (/× ?60\b|\bminutes?\b|\bhours?\b/.test(text)) needs.push('maths-units-time');
      if (/\b(kJ|kV|kΩ|mA|ms|kilo|milli)\b/.test(text)) needs.push('maths-prefix');
      for (const n of needs) if (!idea.dependsOn.includes(n)) fail(w, `uses ${n}, which is not a prerequisite of ${idea.id} in ${file}`);
    }
  }
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
