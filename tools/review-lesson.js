#!/usr/bin/env node
/* The lesson reviewer (brief docs/briefs/2026-11-11-coverage-and-faults.md, step 4b). Paid.
 *
 *   node tools/review-lesson.js <site-test run folder>                 # dry run: exact input tokens and the cost cap check
 *   node tools/review-lesson.js <site-test run folder> --run [--max-usd 1.5] [--images 36]
 *
 * The strongest model listed by GET /v1/models (claude-fable-5-2 on 2026-11-11; checked at the start of every
 * run) reads the whole site-test transcript AND its screenshots, as an experienced physics teacher teaching a
 * 15-year-old the topic for the first time, with the whole of docs/FAULTS.md as its checklist. It reports every
 * instance of every listed fault, plus anything else a teacher would object to, each with the turn number and
 * the quoted text. It is not a pass/fail on a short list.
 *
 * Output: review.json and review.md in the run folder. Cost: input tokens are counted first (free,
 * /v1/messages/count_tokens); the run is refused if input plus the full output allowance could pass the cap.
 * A refusal by the model falls back server-side (fallbacks: "default").
 */
const fs = require('fs');
const path = require('path');
const { apiKey } = require('./lib-key.js');

const ROOT = path.resolve(__dirname, '..');
const API = 'https://api.anthropic.com/v1';
const MODEL = 'claude-fable-5-2';
const RATE = { in: 8 / 1e6, out: 40 / 1e6 };   // claude-fable-5-2, USD per token (fallback models are cheaper)
const MAX_TOKENS = 16000;

function die(m, c = 1) { console.error(m); process.exit(c); }
function headers(extra = {}) { return { 'x-api-key': apiKey(), 'anthropic-version': '2023-06-01', 'content-type': 'application/json', ...extra }; }

const SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['findings', 'counts', 'overall'],
  properties: {
    findings: { type: 'array', items: { type: 'object', additionalProperties: false,
      required: ['fault', 'turn', 'quote', 'what', 'severity'],
      properties: {
        fault: { type: 'string', description: 'The FAULTS.md id (F1, P8, L2…) or "new" for something not on the list' },
        turn: { type: 'string', description: 'The turn, e.g. "T12", "S7", or a screenshot file name' },
        quote: { type: 'string', description: 'The exact words from the transcript or what the screenshot shows' },
        what: { type: 'string', description: 'What is wrong, in one or two plain sentences, as a teacher would say it' },
        severity: { type: 'string', enum: ['would confuse or mislead her', 'a teacher would correct it', 'minor'] },
      } } },
    counts: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['fault', 'instances'],
      properties: { fault: { type: 'string' }, instances: { type: 'integer' } } } },
    overall: { type: 'string', description: 'Three or four sentences: would you, as her teacher, let her use this lesson as it is?' },
  },
};

function pickShots(result, dir, max) {
  const files = (result.screenshots || []).map(s => path.join(ROOT, s)).filter(f => fs.existsSync(f));
  const laptop = files.filter(f => /-laptop\.png$/.test(f));
  const pool = laptop.length ? laptop : files;
  if (pool.length <= max) return pool;
  // Every widget, worked example and picture screen first; then evenly spaced exchanges.
  const key = pool.filter(f => /(widget|worked|diagram|opening)/.test(path.basename(f)));
  const rest = pool.filter(f => !key.includes(f));
  const want = Math.max(0, max - key.length);
  const step = rest.length / Math.max(1, want);
  const even = Array.from({ length: Math.min(want, rest.length) }, (_, k) => rest[Math.floor(k * step)]);
  return [...key.slice(0, max), ...even].sort();
}

function buildBody(result, shots, lesson) {
  const faults = fs.readFileSync(path.join(ROOT, 'docs', 'FAULTS.md'), 'utf8');
  const kps = (lesson.keyPoints || []).map((k, i) => `Key point ${i + 1}: ${k.heading}\n${String(k.content || '').replace(/<[^>]+>/g, '')}`).join('\n\n');
  const system = [
    `You are an experienced physics teacher in England. You are checking an AI tutor lesson before a 15-year-old girl uses it. She is meeting this topic for the first time: she is not revising, and she knows only everyday life and what the lesson has told her so far.`,
    `Read the whole transcript and every screenshot, as she would meet them, in order. Report EVERY instance of EVERY fault in the checklist (docs/FAULTS.md, given in full), each with its turn number and the exact quoted words, and also anything else you as her teacher would object to: wrong or muddled physics, a step that would lose her, a question she could not answer from what she had been told, something on screen that is unreadable, misleading or out of step with the chat. Do not stop at the first instance of a fault, and do not summarise instances together: one finding per instance.`,
    `This is not a pass/fail on a short list. Be specific and fair: report only what is actually in the transcript or the screenshots, and quote it. Lines in square brackets are the tester's notes, not what she saw; use them to know what happened (which buttons she tapped, which widget appeared and what it showed, which picture was in the side column). "S" lines are her messages; "T" lines are the tutor's; "shown first" lines appeared just before the T line of the same number.`,
  ].join('\n\n');
  const content = [
    { type: 'text', text: `THE CHECKLIST (docs/FAULTS.md):\n\n${faults}` },
    { type: 'text', text: `THE LESSON FILE'S KEY POINTS (what the lesson is meant to teach, in order):\n\n${kps}` },
    { type: 'text', text: `THE TRANSCRIPT (site test ${result.id}, ${result.date}, persona ${result.persona || 'unknown'}, screen size ${result.size || 'both'}):\n\n${(result.transcript || []).join('\n')}` },
    { type: 'text', text: `THE SCREENSHOTS (${shots.length}, in order; each is preceded by its file name, which the transcript's [screenshot …] lines name):` },
    ...shots.flatMap(f => [{ type: 'text', text: path.basename(f) }, { type: 'image', source: { type: 'base64', media_type: 'image/png', data: fs.readFileSync(f).toString('base64') } }]),
    { type: 'text', text: `Now give your review: every finding (one per instance, with its FAULTS.md id or "new"), the count per fault id, and your overall view.` },
  ];
  return { system, messages: [{ role: 'user', content }] };
}

async function strongestModel() {
  const res = await fetch(`${API}/models?limit=100`, { headers: headers() });
  if (!res.ok) die(`GET /v1/models: HTTP ${res.status}`);
  const ids = ((await res.json()).data || []).map(m => m.id);
  if (!ids.includes(MODEL)) die(`${MODEL} is not in GET /v1/models (${ids.slice(0, 6).join(', ')}…): check which model is now the strongest and update tools/review-lesson.js.`);
  const fable = ids.filter(id => /^claude-(fable|mythos)-/.test(id)).sort().reverse();
  if (fable[0] && fable[0] !== MODEL && /^claude-fable-/.test(fable[0])) console.log(`Note: ${fable[0]} is listed and newer-looking than ${MODEL}.`);
  console.log(`Model ${MODEL} confirmed in GET /v1/models.`);
}

async function countTokens(body) {
  const res = await fetch(`${API}/messages/count_tokens`, { method: 'POST', headers: headers(), body: JSON.stringify({ model: MODEL, ...body }) });
  if (!res.ok) die(`count_tokens: HTTP ${res.status} ${(await res.text()).slice(0, 300)}`);
  return (await res.json()).input_tokens;
}

async function main() {
  const argv = process.argv.slice(2);
  const opt = (k, d) => { const i = argv.indexOf(k); return i === -1 ? d : argv[i + 1]; };
  const dir = path.resolve(argv.find(a => !a.startsWith('--') && argv[argv.indexOf(a) - 1] !== '--max-usd' && argv[argv.indexOf(a) - 1] !== '--images') || '');
  const run = argv.includes('--run');
  const cap = Number(opt('--max-usd', 1.5));
  let maxImages = Number(opt('--images', 36));
  if (!fs.existsSync(path.join(dir, 'result.json'))) die('Usage: node tools/review-lesson.js <site-test run folder> [--run] [--max-usd 1.5] [--images 36]');
  if (!apiKey()) die('SPEC_CHECK_API_KEY is not set.');
  const result = JSON.parse(fs.readFileSync(path.join(dir, 'result.json'), 'utf8'));
  const lessonFile = ['physics', 'biology', 'chemistry', 'geography'].map(s => path.join(ROOT, 'lessons', s, `${result.id.replace(/-\d+$/, '')}.json`)).find(f => fs.existsSync(f));
  const lesson = lessonFile ? JSON.parse(fs.readFileSync(lessonFile, 'utf8')) : { keyPoints: [] };
  await strongestModel();
  let shots, body, input, worst;
  for (;;) {
    shots = pickShots(result, dir, maxImages);
    body = buildBody(result, shots, lesson);
    input = await countTokens(body);
    worst = input * RATE.in + MAX_TOKENS * RATE.out;
    console.log(`${shots.length} screenshots; input ${input} tokens (counted); at most $${worst.toFixed(4)} with ${MAX_TOKENS} output tokens (cap $${cap}).`);
    if (worst <= cap || maxImages <= 8) break;
    maxImages = Math.floor(maxImages * 0.75);
  }
  if (worst > cap) die(`Over the $${cap} cap even with ${shots.length} screenshots. Stopping.`);
  if (!run) { console.log('DRY RUN: add --run to send it.'); return; }
  const req = { model: MODEL, max_tokens: MAX_TOKENS, ...body,
    output_config: { effort: 'high', format: { type: 'json_schema', schema: SCHEMA } },
    fallbacks: 'default' };
  const t0 = Date.now();
  const res = await fetch(`${API}/messages`, { method: 'POST', headers: headers({ 'anthropic-beta': 'server-side-fallback-2026-07-01' }), body: JSON.stringify(req) });
  const text = await res.text();
  if (!res.ok) { if (/credit|billing|balance/i.test(text)) die('API billing or credit error. Add credits, then type Continue.', 3); die(`HTTP ${res.status} ${text.slice(0, 500)}`); }
  const j = JSON.parse(text);
  // Cost: every model that ran this turn (a fallback is billed at its own rates; approximated here at the top rate).
  const iters = (j.usage && j.usage.iterations) || [j.usage];
  const cost = iters.reduce((t, u) => t + ((u.input_tokens || 0) + (u.cache_creation_input_tokens || 0)) * RATE.in + (u.cache_read_input_tokens || 0) * RATE.in * 0.1 + (u.output_tokens || 0) * RATE.out, 0);
  if (j.stop_reason === 'refusal') die(`The review was refused (${JSON.stringify(j.stop_details)}); cost about $${cost.toFixed(4)}.`);
  const out = (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  let review;
  try { review = JSON.parse(out); } catch { review = { findings: [], counts: [], overall: out, unparsed: true }; }
  const saved = { model: j.model, stop_reason: j.stop_reason, usage: j.usage, cost, seconds: Math.round((Date.now() - t0) / 1000), screenshots: shots.map(f => path.basename(f)), ...review };
  fs.writeFileSync(path.join(dir, 'review.json'), JSON.stringify(saved, null, 2));
  const md = [`# Review: ${result.id} (${result.date})`, '', `Reviewer ${j.model}, effort high, ${shots.length} screenshots, ${review.findings.length} findings, cost $${cost.toFixed(4)}.`, '',
    '## Counts', '', ...review.counts.map(c => `- ${c.fault}: ${c.instances}`), '',
    '## Findings', '', ...review.findings.map(f => `- **${f.turn}** [${f.fault}, ${f.severity}] "${f.quote}" — ${f.what}`), '',
    '## Overall', '', review.overall, ''];
  fs.writeFileSync(path.join(dir, 'review.md'), md.join('\n'));
  console.log(`Review: ${review.findings.length} findings; ${review.counts.map(c => `${c.fault} ${c.instances}`).join(', ')}; ${path.relative(ROOT, dir).replace(/\\/g, '/')}/review.md; $${cost.toFixed(4)} (model ${j.model}, stop ${j.stop_reason}).`);
}
main().catch(e => die(String(e.stack || e)));
