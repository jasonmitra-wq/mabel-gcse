#!/usr/bin/env node
/**
 * Question-bank tagging check (maths full audit, 2026-11-26). Measures; retags nothing.
 *
 *   node tools/maths-tag-check.js                 # dry run: batches and cost estimate,
 *                                                 # plus the free "→" density count
 *   node tools/maths-tag-check.js --run --max-usd 2.5
 *
 * Sends the 600 bank questions (js/maths-questions.js) to the model in batches
 * of 25, with the 41 subtopic names from data/maths-syllabus.json and their
 * specification lines from data/spec/maths.md (local only, see
 * data/spec/MANIFEST.md). For each question the model says which subtopic it
 * tests. Every answer that differs from the question's `subtopic` tag is
 * reported. The model sees the question text and step prompts only, not the
 * tag, the answers, the hints or the explanations.
 *
 * Free count (no model): questions whose step explanation or worked-example
 * step has more than one "→".
 *
 * Key: env var SPEC_CHECK_API_KEY (tools/lib-key.js). Never printed or written.
 * Output: tools/maths-audit/tagging.json, tools/maths-audit/tagging-raw/<batch>.json
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { apiKey } = require('./lib-key.js');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(__dirname, 'maths-audit');
const MODEL = 'claude-opus-5-5';
const API = 'https://api.anthropic.com/v1';
const USD_IN = 4 / 1e6, USD_OUT = 20 / 1e6;
const BATCH = 25;
const MAX_TOKENS = 3000;

function die(m) { console.error(m); process.exit(1); }

function loadBank() {
  let src = fs.readFileSync(path.join(ROOT, 'js/maths-questions.js'), 'utf8');
  const anchor = (src.match(/^  return \{ getQuestion, getTestQuestions, hasQuestions(?:, getById)? \};/m) || [])[0];
  if (!anchor) die('maths-questions.js export line not found');
  src = src.replace(anchor, '  globalThis.__bank = _allBank;\n' + anchor);
  const ctx = vm.createContext({});
  vm.runInContext(src, ctx);
  return ctx.__bank;
}

function subtopicList() {
  const syl = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/maths-syllabus.json'), 'utf8'));
  const specFile = path.join(ROOT, 'data/spec/maths.md');
  if (!fs.existsSync(specFile)) die('Missing data/spec/maths.md — rebuild per data/spec/MANIFEST.md');
  const lines = fs.readFileSync(specFile, 'utf8').split('\n');
  const refText = ref => {
    const i = lines.findIndex(l => l.startsWith(`#### ${ref} `));
    if (i < 0) return '';
    const out = [];
    for (let j = i + 1; j < lines.length && lines[j].startsWith('- '); j++) if (!lines[j].startsWith('- Notes')) out.push(lines[j].replace(/^- [^:]+: /, ''));
    return out.join(' ').slice(0, 260);
  };
  const subs = [];
  for (const [code, t] of Object.entries(syl.topics)) {
    for (const st of t.subtopics) subs.push({ id: st.id, topic: code, name: st.name, specRef: st.specRef || [], spec: (st.specRef || []).map(r => `${r}: ${refText(r)}`) });
  }
  return subs;
}

const SYSTEM = (subs) => `You classify GCSE Mathematics questions by the subtopic they test.

The subtopics (id, name, and the AQA 8300 specification lines each covers):
${subs.map(s => `- ${s.id} — ${s.name}\n  ${s.spec.join('\n  ')}`).join('\n')}

For each question, give the ONE subtopic id whose content the question mainly tests: the skill a student needs to answer it, not the context it is set in. If it clearly tests two, give the main one and name the other in "also".

Return JSON only, no prose outside it:
{ "results": [ { "id": "<question id>", "subtopic": "<subtopic id>", "also": "<subtopic id or empty>", "why": "<under 15 words>" } ] }`;

function questionText(q) {
  return `id: ${q.id}\nquestion: ${q.question}\nsteps: ${(q.steps || []).map((s, i) => `${i + 1}) ${s.prompt}`).join(' ')}`;
}

function arrowCount(bank) {
  const hits = [];
  for (const q of bank) {
    const where = [];
    (q.steps || []).forEach((s, i) => { if ((String(s.explanation || '').match(/→/g) || []).length > 1) where.push(`steps[${i}].explanation`); });
    ((q.workedExample || {}).steps || []).forEach((s, i) => { if ((String(s).match(/→/g) || []).length > 1) where.push(`workedExample.steps[${i}]`); });
    if (where.length) hits.push({ id: q.id, where });
  }
  return hits;
}

async function call(system, user) {
  const res = await fetch(`${API}/messages`, {
    method: 'POST',
    headers: { 'x-api-key': apiKey(), 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({ model: MODEL, max_tokens: MAX_TOKENS, system, messages: [{ role: 'user', content: user }] }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${await res.text()}`);
  return res.json();
}

function parse(text) {
  try { return JSON.parse(text.trim()); } catch {}
  const m = text.match(/\{[\s\S]*\}/);
  if (m) { try { return JSON.parse(m[0]); } catch {} }
  return null;
}

async function main() {
  const argv = process.argv.slice(2);
  const run = argv.includes('--run');
  const mi = argv.indexOf('--max-usd');
  const cap = mi >= 0 ? Number(argv[mi + 1]) : 2.5;
  const bank = loadBank();
  const subs = subtopicList();
  const ids = new Set(subs.map(s => s.id));
  const system = SYSTEM(subs);
  const batches = [];
  for (let i = 0; i < bank.length; i += BATCH) batches.push(bank.slice(i, i + BATCH));
  const est = batches.map(b => Math.ceil((system.length + b.map(questionText).join('\n\n').length) / 4) * USD_IN + MAX_TOKENS * USD_OUT);
  const arrows = arrowCount(bank);
  const tagged = {};
  for (const q of bank) tagged[q.subtopic] = (tagged[q.subtopic] || 0) + 1;
  console.log(`${run ? 'RUN' : 'DRY RUN (add --run)'}: ${bank.length} questions, ${batches.length} batches of ${BATCH}, est. worst case $${est.reduce((a, b) => a + b, 0).toFixed(4)} (output at ${MAX_TOKENS}-token ceiling), cap $${cap}`);
  console.log(`Free count: ${arrows.length} questions have a step explanation or worked-example step with more than one "→".`);
  const unknownTags = Object.keys(tagged).filter(t => !ids.has(t));
  if (unknownTags.length) console.log(`Bank tags not in the syllabus: ${unknownTags.join(', ')}`);
  if (!run) return;
  if (!apiKey()) die('SPEC_CHECK_API_KEY is not set.');

  fs.mkdirSync(path.join(OUT, 'tagging-raw'), { recursive: true });
  let spent = 0;
  const answers = {};
  const calls = [];
  for (let b = 0; b < batches.length; b++) {
    if (spent + est[b] > cap) { console.log(`STOP before batch ${b + 1}: spent $${spent.toFixed(4)} + worst case $${est[b].toFixed(4)} would pass $${cap}.`); break; }
    const user = `Classify these ${batches[b].length} questions:\n\n${batches[b].map(questionText).join('\n\n')}`;
    let rec;
    try {
      const reply = await call(system, user);
      const text = (reply.content || []).filter(x => x.type === 'text').map(x => x.text).join('');
      const cost = reply.usage.input_tokens * USD_IN + reply.usage.output_tokens * USD_OUT;
      spent += cost;
      const parsed = parse(text);
      rec = { batch: b + 1, model_returned: reply.model, stop_reason: reply.stop_reason, usage: reply.usage, cost_usd: +cost.toFixed(6), parsed: !!parsed, raw: parsed ? undefined : text, result: parsed };
      if (parsed) for (const r of parsed.results || []) answers[r.id] = r;
      console.log(`batch ${b + 1}/${batches.length}: ${parsed ? 'OK' : 'FAILED (not JSON)'} | in ${reply.usage.input_tokens} out ${reply.usage.output_tokens} | $${cost.toFixed(4)}`);
    } catch (e) {
      rec = { batch: b + 1, error: String(e.message || e) };
      console.log(`batch ${b + 1}: FAILED | ${rec.error.slice(0, 200)}`);
    }
    calls.push({ batch: rec.batch, cost_usd: rec.cost_usd || 0, ok: !!rec.parsed });
    fs.writeFileSync(path.join(OUT, 'tagging-raw', `batch-${String(b + 1).padStart(2, '0')}.json`), JSON.stringify(rec, null, 2) + '\n');
  }
  const mismatches = [], missing = [];
  for (const q of bank) {
    const a = answers[q.id];
    if (!a) { missing.push(q.id); continue; }
    if (a.subtopic !== q.subtopic) mismatches.push({ id: q.id, tag: q.subtopic, suggested: a.subtopic, also: a.also || '', why: a.why || '', question: q.question.slice(0, 140) });
  }
  const out = { date: new Date().toISOString().slice(0, 10), model: MODEL, questions: bank.length, answered: bank.length - missing.length, missing, mismatches,
    arrow_density: { count: arrows.length, questions: arrows }, calls, cost_usd: +spent.toFixed(4) };
  fs.writeFileSync(path.join(OUT, 'tagging.json'), JSON.stringify(out, null, 2) + '\n');
  console.log(`answered ${out.answered}/${bank.length}; tag differs for ${mismatches.length}; eq-C01: ${(mismatches.find(m => m.id === 'eq-C01') || {}).suggested || 'NOT FLAGGED'}`);
  console.log(`Actual total cost: $${spent.toFixed(4)}`);
}

main().catch(e => die(String(e.stack || e)));
