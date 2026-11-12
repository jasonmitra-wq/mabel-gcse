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
  if (result.layout) {
    // --script: the whole written script, every branch laid out, before anyone uses it.
    const system = [
      `You are an experienced physics teacher in England. You are checking the script of an AI tutor lesson before a 15-year-old girl uses it. She is meeting this topic for the first time: she is not revising, and she knows only everyday life and what the lesson has told her so far.`,
      `Every message she can see is written in the script; under each question you have what she sees for a right answer, for each wrong answer, and at each "don't know" level. Read it as she would meet it, along the main path and down every branch. Report EVERY instance of EVERY fault in the checklist (docs/FAULTS.md, given in full), each with its step id (for example "1.6" or "1.6 don't know (again)") and the exact quoted words, and also anything else you as her teacher would object to: wrong, muddled or imprecise physics; a step that would lose her; a question she could not answer from what she had been told; a question whose answer was given just before it; a reply that does not fit the answer it follows; wording a 15-year-old would not follow. One finding per instance.`,
      `This is not a pass/fail on a short list. Be specific and fair: report only what is in the script, and quote it.`,
    ].join('\n\n');
    return { system, messages: [{ role: 'user', content: [
      { type: 'text', text: `THE CHECKLIST (docs/FAULTS.md):\n\n${faults}` },
      { type: 'text', text: `THE LESSON FILE'S KEY POINTS (what the lesson teaches; the script covers key points 1 and 2):\n\n${kps}` },
      { type: 'text', text: `THE SCRIPT, LAID OUT AS SHE WOULD READ IT:\n\n${result.layout}` },
      { type: 'text', text: `Now give your review: every finding (one per instance, with its FAULTS.md id or "new", and its step id as the turn), and your overall view.` },
    ] }] };
  }
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
  // --script <lessonId>: review the whole written script (every branch laid out by tools/script-layout.js), before any
  // site test (brief docs/briefs/2026-11-11-scripted-teaching.md, step 5b). Saved in tools/script-reviews/<id>-<date>-<n>/.
  const scriptId = opt('--script', null);
  let dir = path.resolve(argv.find(a => !a.startsWith('--') && !['--max-usd', '--images', '--script', '--already', '--effort'].includes(argv[argv.indexOf(a) - 1])) || '');
  const run = argv.includes('--run');
  const cap = Number(opt('--max-usd', 1.5));
  let maxImages = Number(opt('--images', 36));
  if (scriptId) {
    const date = new Date().toISOString().slice(0, 10);
    let k = 1; do { dir = path.join(ROOT, 'tools', 'script-reviews', `${scriptId}-${date}-${k++}`); } while (fs.existsSync(path.join(dir, 'review.json')));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'result.json'), JSON.stringify({ id: scriptId, date, kind: 'script', screenshots: [], transcript: [] }, null, 2));
  }
  if (!fs.existsSync(path.join(dir, 'result.json'))) die('Usage: node tools/review-lesson.js <site-test run folder> | --script <lessonId>  [--run] [--max-usd 1.5] [--images 36]');
  if (!apiKey()) die('SPEC_CHECK_API_KEY is not set.');
  const result = JSON.parse(fs.readFileSync(path.join(dir, 'result.json'), 'utf8'));
  if (scriptId) result.layout = require('./script-layout.js').layout(scriptId);
  const lessonFile = ['physics', 'biology', 'chemistry', 'geography'].map(s => path.join(ROOT, 'lessons', s, `${result.id.replace(/-\d+$/, '')}.json`)).find(f => fs.existsSync(f));
  const lesson = lessonFile ? JSON.parse(fs.readFileSync(lessonFile, 'utf8')) : { keyPoints: [] };
  await strongestModel();
  // --already <usd>: spent on this review before (a retry stays inside the same cap). --effort: low | medium | high.
  // The output allowance (thinking included) is what the cap leaves after the counted input: the first review of
  // 2026-11-11 used all of a fixed 16 000 on thinking at effort high and returned nothing.
  const already = Number(opt('--already', 0)), effort = opt('--effort', 'medium'), minOut = 6000;
  let shots, body, input, outTokens;
  for (;;) {
    shots = pickShots(result, dir, maxImages);
    body = buildBody(result, shots, lesson);
    input = await countTokens(body);
    outTokens = Math.min(64000, Math.floor((cap - already - input * RATE.in) / RATE.out));
    console.log(`${shots.length} screenshots; input ${input} tokens (counted, $${(input * RATE.in).toFixed(4)}); output allowance ${outTokens} tokens; cap $${cap}${already ? ` less $${already} already spent` : ''}; effort ${effort}.`);
    if (outTokens >= Math.max(minOut, 24000) || maxImages <= 2) break;
    maxImages = Math.max(2, Math.floor(maxImages * 0.6));
  }
  if (outTokens < minOut) die(`The cap leaves only ${outTokens} output tokens. Stopping.`);
  if (!run) { console.log('DRY RUN: add --run to send it.'); return; }
  const req = { model: MODEL, max_tokens: outTokens, stream: true, ...body,
    output_config: { effort, format: { type: 'json_schema', schema: SCHEMA } },
    fallbacks: 'default' };
  const t0 = Date.now();
  const res = await fetch(`${API}/messages`, { method: 'POST', headers: headers({ 'anthropic-beta': 'server-side-fallback-2026-07-01' }), body: JSON.stringify(req) });
  if (!res.ok) { const text = await res.text(); if (/credit|billing|balance/i.test(text)) die('API billing or credit error. Add credits, then type Continue.', 3); die(`HTTP ${res.status} ${text.slice(0, 500)}`); }
  // Streamed (a long review can outlast a plain request's timeout): the text deltas, the usage and the stop reason.
  const j = { content: [{ type: 'text', text: '' }], usage: {}, stop_reason: null, model: MODEL };
  let buf = '';
  const dec = new TextDecoder();
  for await (const chunk of res.body) {
    buf += dec.decode(chunk, { stream: true });
    let k;
    while ((k = buf.indexOf('\n\n')) !== -1) {
      const ev = buf.slice(0, k); buf = buf.slice(k + 2);
      const data = ev.split('\n').filter(l => l.startsWith('data:')).map(l => l.slice(5).trim()).join('');
      if (!data) continue;
      let e; try { e = JSON.parse(data); } catch { continue; }
      if (e.type === 'message_start') { j.model = e.message.model; Object.assign(j.usage, e.message.usage || {}); }
      else if (e.type === 'content_block_delta' && e.delta && e.delta.type === 'text_delta') j.content[0].text += e.delta.text;
      else if (e.type === 'message_delta') { if (e.delta) { j.stop_reason = e.delta.stop_reason; j.stop_details = e.delta.stop_details; } Object.assign(j.usage, e.usage || {}); }
      else if (e.type === 'error') die(`Stream error: ${JSON.stringify(e.error)}`);
    }
  }
  // Cost: every model that ran this turn (a fallback is billed at its own rates; approximated here at the top rate).
  const iters = (j.usage && j.usage.iterations) || [j.usage];
  const cost = iters.reduce((t, u) => t + ((u.input_tokens || 0) + (u.cache_creation_input_tokens || 0)) * RATE.in + (u.cache_read_input_tokens || 0) * RATE.in * 0.1 + (u.output_tokens || 0) * RATE.out, 0);
  if (j.stop_reason === 'refusal') die(`The review was refused (${JSON.stringify(j.stop_details)}); cost about $${cost.toFixed(4)}.`);
  const out = (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  const review = parseReview(out);
  const saved = { model: j.model, stop_reason: j.stop_reason, effort, usage: j.usage, cost, seconds: Math.round((Date.now() - t0) / 1000), screenshots: shots.map(f => path.basename(f)), raw: out, ...review };
  fs.writeFileSync(path.join(dir, review.attempt ? `review-${review.attempt}.json` : 'review.json'), JSON.stringify(saved, null, 2));
  writeMd(dir, result, saved);
}
// The review, or as much of it as was written: a reply cut off at max_tokens keeps every complete finding.
// The counts per fault are made in code from the findings (the model's own counts are not trusted to be complete).
function parseReview(out) {
  let r = null;
  try { r = JSON.parse(out); } catch {}
  if (!r) {
    const k = out.lastIndexOf('"},{');
    let findings = [];
    if (k !== -1) { try { findings = JSON.parse(out.slice(out.indexOf('['), k + 2) + ']'); } catch {} }
    r = { findings, overall: '(cut off at the output limit before the overall view; every complete finding is kept)', cutOff: true };
  }
  const counts = {};
  (r.findings || []).forEach(f => { counts[f.fault] = (counts[f.fault] || 0) + 1; });
  r.counts = Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([fault, instances]) => ({ fault, instances }));
  return r;
}
function writeMd(dir, result, s) {
  const md = [`# Review: ${result.id} (${result.date})`, '', `Reviewer ${s.model}, effort ${s.effort || 'high'}, ${s.screenshots.length} screenshots, ${s.findings.length} findings${s.cutOff ? ' (output cut off at its limit; complete findings kept)' : ''}, cost $${s.cost.toFixed(4)}.`, '',
    '## Counts (made in code from the findings)', '', ...s.counts.map(c => `- ${c.fault}: ${c.instances}`), '',
    '## Findings', '', ...s.findings.map(f => `- **${f.turn}** [${f.fault}, ${f.severity}] "${f.quote}" — ${f.what}`), '',
    '## Overall', '', s.overall, ''];
  fs.writeFileSync(path.join(dir, 'review.md'), md.join('\n'));
  console.log(`Review: ${s.findings.length} findings; ${s.counts.map(c => `${c.fault} ${c.instances}`).join(', ')}; ${path.relative(ROOT, dir).replace(/\\/g, '/')}/review.md; $${s.cost.toFixed(4)} (model ${s.model}, stop ${s.stop_reason}).`);
}
// --reparse <run folder>: rebuild review.md from a saved review.json (no API call).
if (process.argv[2] === '--reparse') {
  const dir = path.resolve(process.argv[3]);
  const s = JSON.parse(fs.readFileSync(path.join(dir, 'review.json'), 'utf8'));
  const r = parseReview(s.raw || s.overall || '');
  Object.assign(s, r, { raw: s.raw || s.overall });
  fs.writeFileSync(path.join(dir, 'review.json'), JSON.stringify(s, null, 2));
  writeMd(dir, JSON.parse(fs.readFileSync(path.join(dir, 'result.json'), 'utf8')), s);
} else main().catch(e => die(String(e.stack || e)));
