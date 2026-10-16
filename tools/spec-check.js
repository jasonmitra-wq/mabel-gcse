#!/usr/bin/env node
/**
 * Spec check (check C): an independent model reads one lesson and the spec
 * sections its subtopic claims to teach, and reports what is missing, above
 * GCSE, wrong, mis-termed, or checked by a checkpoint that does not match.
 *
 *   node tools/spec-check.js p6-sound p7-magnets      # dry run (default)
 *   node tools/spec-check.js --topic P6               # dry run, one topic
 *   node tools/spec-check.js --subject physics        # dry run, one subject
 *   node tools/spec-check.js --run p6-sound           # real call
 *   node tools/spec-check.js --run --file <path> --as p7-magnets
 *                                                     # check a file in place of the lesson
 *   --max-usd <n>   allow a --run whose estimate is over $2 but under n
 *   --blocking-only ask only for missing_spec_content, above_gcse and factual_errors
 *   --decided <file> append the TRIAGE FILE's decision lines to the prompt under
 *                   "Already decided — do not report these again"
 *
 * Reads data/<subject>-syllabus.json (specRef per subtopic), data/spec/<subject>.md
 * (local only — see data/spec/MANIFEST.md) and lessons/<subject>/<id>.json.
 * The model gets only the lesson JSON (videos and videoLinks removed) and the
 * full text of each referenced spec section, sub-sections included.
 *
 * Key: env var SPEC_CHECK_API_KEY only. It is never written, printed or logged.
 * Output: tools/spec-check-results/<id>.json and a line in SUMMARY.md there.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(__dirname, 'spec-check-results');
const SUBJECTS = ['biology', 'chemistry', 'physics'];
const MODEL = 'claude-opus-5-5';
const MAX_TOKENS = 16000;
const USD_IN = 4 / 1e6, USD_OUT = 20 / 1e6;
const DEFAULT_CAP_USD = 2;
const API = 'https://api.anthropic.com/v1';

const SYSTEM = `You are an independent examiner. You compare a lesson written for a 15-year-old with the specification sections it claims to teach.

You receive two things only: the lesson as JSON, and the text of the specification sections. Judge the lesson against that specification text and against your own knowledge of the science.

Report:
- missing_spec_content: content the specification sections require that the lesson does not teach.
- above_gcse: content that goes beyond what the specification requires at this level and could confuse the student.
- factual_errors: statements in the lesson that are wrong. Give the correction and say whether it rests on the specification text ("spec") or on your own knowledge ("own knowledge").
- wrong_terms: places where the lesson uses a different term from the one the specification uses.
- checkpoint_mismatch: checkpoint questions that do not test the key point they sit with, or whose answer is not supported by that key point.
- not_checked: anything you could not check (for example, diagrams or images you cannot see).

Every finding must quote the exact lesson text or specification text it rests on. Name the lesson field each lesson quote comes from (for example "keyPoints[2].content"). Do not report style, tone or layout.

Return JSON only, in exactly this shape, with empty arrays where there is nothing to report and no prose outside the JSON:
{ "lesson": "<lesson id>",
  "missing_spec_content": [{ "specRef": "", "spec_text": "", "why": "" }],
  "above_gcse": [{ "field": "", "text": "", "why": "" }],
  "factual_errors": [{ "field": "", "text": "", "correction": "", "basis": "spec" }],
  "wrong_terms": [{ "field": "", "text": "", "spec_term": "" }],
  "checkpoint_mismatch": [{ "checkpoint": "", "key_point": "", "why": "" }],
  "not_checked": [] }`;

// --blocking-only: same reply shape, but only the three blocking categories are asked for.
const BLOCKING_NOTE = `

This is a re-check. Report ONLY missing_spec_content, above_gcse and factual_errors. Return wrong_terms and checkpoint_mismatch as empty arrays.`;

// --decided: the decision lines of a TRIAGE FILE (headings, and every list item
// that records ACCEPT or REJECT, with its continuation lines).
function decidedLines(file) {
  if (!fs.existsSync(file)) die(`Missing --decided file ${file}`);
  const lines = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n').split('\n');
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^#{1,6} /.test(l)) { out.push(l); continue; }
    if (!/^- /.test(l)) continue;
    const item = [l];
    while (i + 1 < lines.length && lines[i + 1].trim() && !/^(- |#)/.test(lines[i + 1])) item.push(lines[++i]);
    if (/\b(ACCEPT|REJECT)\b/.test(item.join(' '))) out.push(...item);
  }
  return out.join('\n');
}

// ---------- arguments ----------

function parseArgs(argv) {
  const a = { ids: [], run: false, topic: null, subject: null, maxUsd: null, file: null, as: null, blockingOnly: false, decided: null };
  for (let i = 0; i < argv.length; i++) {
    const v = argv[i];
    if (v === '--run') a.run = true;
    else if (v === '--dry-run') a.run = false;
    else if (v === '--topic') a.topic = argv[++i];
    else if (v === '--subject') a.subject = argv[++i];
    else if (v === '--max-usd') a.maxUsd = Number(argv[++i]);
    else if (v === '--file') a.file = argv[++i];
    else if (v === '--as') a.as = argv[++i];
    else if (v === '--blocking-only') a.blockingOnly = true;
    else if (v === '--decided') a.decided = argv[++i];
    else if (v.startsWith('--')) die(`Unknown option ${v}`);
    else a.ids.push(v);
  }
  if ((a.file && !a.as) || (!a.file && a.as)) die('--file and --as go together');
  if (a.maxUsd !== null && !(a.maxUsd > 0)) die('--max-usd needs a positive number');
  return a;
}

function die(msg) { console.error(msg); process.exit(1); }

// ---------- syllabus and spec ----------

function loadSyllabus(subject) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, 'data', subject + '-syllabus.json'), 'utf8'));
}

function allSubtopics() {
  const out = [];
  for (const subject of SUBJECTS) {
    const syl = loadSyllabus(subject);
    for (const [code, t] of Object.entries(syl.topics)) {
      for (const st of t.subtopics) out.push({ subject, topic: code, id: st.id, specRef: st.specRef || [] });
    }
  }
  return out;
}

const specCache = new Map();
function specText(subject) {
  if (!specCache.has(subject)) {
    const file = path.join(ROOT, 'data', 'spec', subject + '.md');
    if (!fs.existsSync(file)) die(`Missing data/spec/${subject}.md — rebuild per data/spec/MANIFEST.md`);
    specCache.set(subject, fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n').split('\n'));
  }
  return specCache.get(subject);
}

// Full text of one numbered section: its heading line up to the next heading
// at the same or a higher level, so all sub-sections come with it.
function section(subject, ref) {
  const lines = specText(subject);
  const esc = ref.replace(/\./g, '\\.');
  const start = lines.findIndex(l => new RegExp(`^#{2,6} ${esc} `).test(l));
  if (start < 0) die(`specRef ${ref} not found in data/spec/${subject}.md`);
  const level = lines[start].match(/^#+/)[0].length;
  let end = start + 1;
  while (end < lines.length) {
    const m = lines[end].match(/^(#+) /);
    if (m && m[1].length <= level) break;
    end++;
  }
  return lines.slice(start, end).join('\n').trim();
}

// Drop refs already inside another ref in the list, keep the original order.
function topRefs(refs) {
  const uniq = [...new Set(refs)];
  return uniq.filter(r => !uniq.some(o => o !== r && r.startsWith(o + '.')));
}

// ---------- building one check ----------

function buildJob(st, filePath, opts = {}) {
  const lessonPath = filePath ? path.resolve(filePath) : path.join(ROOT, 'lessons', st.subject, st.id + '.json');
  if (!fs.existsSync(lessonPath)) die(`Missing ${path.relative(ROOT, lessonPath)}`);
  const raw = fs.readFileSync(lessonPath);
  const lesson = JSON.parse(raw.toString('utf8'));
  delete lesson.videos;
  delete lesson.videoLinks;
  if (!st.specRef.length) die(`${st.id} has no specRef`);
  const refs = topRefs(st.specRef);
  const spec = refs.map(r => section(st.subject, r)).join('\n\n');
  const user =
    `Lesson id: ${st.id}\n\n<lesson_json>\n${JSON.stringify(lesson, null, 2)}\n</lesson_json>\n\n` +
    `<specification_sections>\n${spec}\n</specification_sections>` +
    (opts.decided ? `\n\nAlready decided — do not report these again:\n<already_decided>\n${opts.decided}\n</already_decided>` : '');
  const system = SYSTEM + (opts.blockingOnly ? BLOCKING_NOTE : '');
  const chars = system.length + user.length;
  const estIn = Math.ceil(chars / 4);
  return {
    id: st.id, subject: st.subject, refs, system, user, chars, estIn,
    estUsd: estIn * USD_IN + MAX_TOKENS * USD_OUT,
    lessonFile: path.relative(ROOT, lessonPath).replace(/\\/g, '/'),
    lessonMd5: crypto.createHash('md5').update(raw).digest('hex'),
    outName: filePath ? `${st.id}--${path.basename(filePath, '.json')}` : st.id,
  };
}

// ---------- API ----------

function headers() {
  return { 'x-api-key': process.env.SPEC_CHECK_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' };
}

async function confirmModel() {
  const ids = [];
  let after = null;
  for (;;) {
    const url = `${API}/models?limit=1000${after ? '&after_id=' + encodeURIComponent(after) : ''}`;
    const res = await fetch(url, { headers: headers() });
    if (!res.ok) die(`GET /v1/models failed: HTTP ${res.status} ${await res.text()}`);
    const body = await res.json();
    ids.push(...body.data.map(m => m.id));
    if (!body.has_more) break;
    after = body.last_id;
  }
  if (!ids.includes(MODEL)) {
    console.error(`${MODEL} is not listed by /v1/models. Listed:`);
    for (const id of ids) console.error('  ' + id);
    process.exit(1);
  }
  console.log(`Model ${MODEL} confirmed in /v1/models.`);
}

async function callModel(job) {
  const res = await fetch(`${API}/messages`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ model: MODEL, max_tokens: MAX_TOKENS, system: job.system, messages: [{ role: 'user', content: job.user }] }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${await res.text()}`);
  return res.json();
}

function parseReply(text) {
  try { return JSON.parse(text.trim()); } catch {}
  const fenced = text.trim().match(/^```(?:json)?\s*\n([\s\S]*?)\n```$/);
  if (fenced) { try { return JSON.parse(fenced[1]); } catch {} }
  return null;
}

const KEYS = ['missing_spec_content', 'above_gcse', 'factual_errors', 'wrong_terms', 'checkpoint_mismatch', 'not_checked'];

// ---------- main ----------

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const subs = allSubtopics();
  let chosen;
  if (args.file) {
    const st = subs.find(s => s.id === args.as);
    if (!st) die(`No subtopic ${args.as}`);
    chosen = [{ st, file: args.file }];
  } else if (args.topic) {
    chosen = subs.filter(s => s.topic === args.topic).map(st => ({ st }));
  } else if (args.subject) {
    if (!SUBJECTS.includes(args.subject)) die(`--subject must be one of ${SUBJECTS.join(', ')}`);
    chosen = subs.filter(s => s.subject === args.subject).map(st => ({ st }));
  } else {
    chosen = args.ids.map(id => {
      const st = subs.find(s => s.id === id);
      if (!st) die(`No subtopic ${id}`);
      return { st };
    });
  }
  if (!chosen.length) die('Nothing to check. Give lesson ids, --topic, --subject or --file/--as.');

  const opts = { blockingOnly: args.blockingOnly, decided: args.decided ? decidedLines(path.resolve(args.decided)) : null };
  const jobs = chosen.map(c => buildJob(c.st, c.file, opts));
  const total = jobs.reduce((s, j) => s + j.estUsd, 0);

  console.log(args.run ? 'RUN' : 'DRY RUN (add --run for real calls)');
  if (args.blockingOnly) console.log('Mode: --blocking-only (missing_spec_content, above_gcse, factual_errors)');
  if (opts.decided) console.log(`Decided: ${opts.decided.split('\n').length} line(s) from ${args.decided}`);
  console.log('lesson | specRefs sent | input chars | est. input tokens | est. cost (USD)');
  for (const j of jobs) {
    console.log(`${j.outName} | ${j.refs.join(', ')} | ${j.chars} | ${j.estIn} | ${j.estUsd.toFixed(4)}`);
  }
  const totIn = jobs.reduce((s, j) => s + j.estIn, 0);
  console.log(`TOTAL ${jobs.length} lesson(s) | ${jobs.reduce((s, j) => s + j.chars, 0)} chars | ${totIn} est. input tokens | ` +
    `${jobs.length * MAX_TOKENS} output tokens assumed | $${total.toFixed(4)}`);
  console.log(`Rates: $4 per M input, $20 per M output; output assumed at the ${MAX_TOKENS}-token ceiling per lesson.`);
  if (!args.run) return;

  if (total > DEFAULT_CAP_USD && !(args.maxUsd !== null && total < args.maxUsd)) {
    die(`Estimate $${total.toFixed(4)} is over $${DEFAULT_CAP_USD}. Stopping. Pass --max-usd <n> above the estimate to proceed.`);
  }
  if (!process.env.SPEC_CHECK_API_KEY) die('SPEC_CHECK_API_KEY is not set.');

  await confirmModel();
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const summaryFile = path.join(OUT_DIR, 'SUMMARY.md');
  if (!fs.existsSync(summaryFile)) {
    fs.writeFileSync(summaryFile, '# Spec-check results\n\nOne line per real call: date | lesson | status | findings | tokens in/out | cost.\n\n');
  }

  let spent = 0;
  for (const j of jobs) {
    const date = new Date().toISOString();
    const record = { lesson: j.id, source_file: j.lessonFile, lesson_md5: j.lessonMd5, model: MODEL, date, specRefs_sent: j.refs,
      blocking_only: args.blockingOnly, decided_file: args.decided || null };
    let status, findings = '';
    try {
      const reply = await callModel(j);
      const text = (reply.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
      const usage = { input_tokens: reply.usage.input_tokens, output_tokens: reply.usage.output_tokens };
      const cost = usage.input_tokens * USD_IN + usage.output_tokens * USD_OUT;
      spent += cost;
      Object.assign(record, { model_returned: reply.model, stop_reason: reply.stop_reason, usage, cost_usd: Number(cost.toFixed(6)) });
      const parsed = parseReply(text);
      if (parsed) {
        status = 'OK';
        record.status = status;
        record.result = parsed;
        findings = KEYS.map(k => `${k} ${Array.isArray(parsed[k]) ? parsed[k].length : '?'}`).join(', ');
      } else {
        status = 'FAILED';
        record.status = status;
        record.error = 'reply is not valid JSON';
        record.raw_reply = text;
      }
      console.log(`${j.outName}: ${status} | in ${usage.input_tokens} out ${usage.output_tokens} | $${cost.toFixed(4)}${findings ? ' | ' + findings : ''}`);
      fs.appendFileSync(summaryFile, `- ${date.slice(0, 10)} | ${j.outName} | ${status} | ${findings || record.error} | ` +
        `${usage.input_tokens}/${usage.output_tokens} | $${cost.toFixed(4)}\n`);
    } catch (e) {
      status = 'FAILED';
      record.status = status;
      record.error = String(e.message || e);
      console.log(`${j.outName}: FAILED | ${record.error}`);
      fs.appendFileSync(summaryFile, `- ${date.slice(0, 10)} | ${j.outName} | FAILED | ${record.error.split('\n')[0].slice(0, 200)} | – | –\n`);
    }
    fs.writeFileSync(path.join(OUT_DIR, j.outName + '.json'), JSON.stringify(record, null, 2) + '\n');
  }
  console.log(`Actual total cost: $${spent.toFixed(4)}`);
}

main().catch(e => die(String(e.stack || e)));
