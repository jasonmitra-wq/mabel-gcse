#!/usr/bin/env node
/**
 * Teach simulator (check D): runs a scripted student through a lesson's teach
 * mode, using the same decision and prompt code as the browser
 * (js/teach-core.js) and the same tutor model, and scores every tutor turn.
 *
 *   node tools/teach-sim.js p3-particle-model          # dry run: cost estimate only
 *   node tools/teach-sim.js --run p3-particle-model    # real calls
 *   node tools/teach-sim.js --mock p3-particle-model   # offline: canned tutor replies, tests the pipeline
 *   node tools/teach-sim.js --rescore <run.json>      # re-score a saved run with the current scorer (no calls)
 *   node tools/teach-sim.js --rescore <run.json> --replay
 *                      # also pass each saved reply (and recap) through the current
 *                      # reply post-processing (js/teach-core.js _finishReply), as if
 *                      # the model had said the same thing again; writes <run>-replay.json/.md
 *                      # and leaves the saved run as it was. No calls.
 *   --max-usd <n>   allow a --run whose estimate is over $1 but under n; also a hard stop on actual spend
 *
 * The student is scripted, not a model. Per key point it cycles through: a
 * correct answer (the term and its definition), a wrong answer, "idk", an
 * off-topic question and "just give me the answer"; at the check-in it says
 * "no" the first time and "yes" after that. Once the lesson is complete it says
 * "thanks" and then "no thanks, bye".
 *
 * Each tutor turn is scored for: a yes/no question on a teaching turn, a stock
 * praise opener, an unanswerable question (two questions, an either/or
 * question, or one with no word from the lesson), over the word limit, cut off
 * mid-sentence, exam board or paper, the student's name, a URL. Per lesson:
 * key points never covered, and no clean ending (lesson not completed, or the
 * last reply is not a goodbye without a question).
 *
 * Key: env var SPEC_CHECK_API_KEY only. It is never written, printed or logged.
 * Output: tools/teach-sim-runs/<id>-<date>-<n>.json and .md, and a line in
 * tools/teach-sim-runs/SUMMARY.md.
 */

const fs = require('fs');
const path = require('path');
const TeachCore = require('../js/teach-core.js');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(__dirname, 'teach-sim-runs');
const API = 'https://api.anthropic.com/v1';
const MODEL = 'claude-haiku-4-5-20251001';   // the browser's tutor model (js/app.js AI._call)
const USD_IN = 1 / 1e6, USD_OUT = 5 / 1e6;
const DEFAULT_CAP_USD = 1;
const TRANSCRIPT_CAP = 40;                    // as js/teach.js _pushEntry
const MAX_TURNS_PER_POINT = 12;               // a point not covered by then never completes
const CYCLE = ['correct', 'wrong', 'idk', 'offtopic', 'give'];
const LINES = {
  wrong: 'is it something to do with magnets and electricity',
  idk: 'idk',
  offtopic: "what's your favourite football team",
  give: 'just give me the answer',
};

// ---------- arguments ----------

function die(msg, code = 1) { console.error(msg); process.exit(code); }

function parseArgs(argv) {
  const a = { ids: [], run: false, mock: false, maxUsd: null };
  for (let i = 0; i < argv.length; i++) {
    const v = argv[i];
    if (v === '--run') a.run = true;
    else if (v === '--mock') a.mock = true;
    else if (v === '--max-usd') a.maxUsd = Number(argv[++i]);
    else if (v === '--rescore') a.rescore = argv[++i];
    else if (v === '--replay') a.replay = true;
    else if (v.startsWith('--')) die(`Unknown option ${v}`);
    else a.ids.push(v);
  }
  if (a.run && a.mock) die('--run and --mock are separate modes');
  if (a.maxUsd !== null && !(a.maxUsd > 0)) die('--max-usd needs a positive number');
  if (!a.ids.length && !a.rescore) die('Give one or more lesson ids.');
  return a;
}

function findLesson(id) {
  for (const subject of fs.readdirSync(path.join(ROOT, 'lessons'))) {
    const f = path.join(ROOT, 'lessons', subject, id + '.json');
    if (fs.existsSync(f)) return { subject, file: f, data: JSON.parse(fs.readFileSync(f, 'utf8')) };
  }
  die(`No lesson ${id} under lessons/`);
}

// ---------- model ----------

function headers() {
  return { 'x-api-key': process.env.SPEC_CHECK_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' };
}

async function confirmModel() {
  const res = await fetch(`${API}/models/${MODEL}`, { headers: headers() });
  if (!res.ok) die(`${MODEL} not available: HTTP ${res.status} ${await res.text()}`);
  console.log(`Model ${MODEL} confirmed.`);
}

const spend = { inTok: 0, outTok: 0, calls: 0, usd: 0, cap: DEFAULT_CAP_USD };

async function realCall(sys, user, tokens, attempt = 0) {
  if (spend.usd >= spend.cap) throw new Error(`STOP: spend $${spend.usd.toFixed(4)} reached the $${spend.cap} cap`);
  const res = await fetch(`${API}/messages`, {
    method: 'POST', headers: headers(),
    body: JSON.stringify({ model: MODEL, max_tokens: tokens || 2000, system: sys, messages: [{ role: 'user', content: user }] }),
  });
  if ((res.status === 429 || res.status === 529) && attempt < 4) {
    await new Promise(r => setTimeout(r, 4000 * Math.pow(2, attempt)));
    return realCall(sys, user, tokens, attempt + 1);
  }
  if (!res.ok) {
    const body = await res.text();
    if (/credit|billing|balance/i.test(body)) die('API billing or credit error. Add credits, then type Continue.', 3);
    throw new Error(`HTTP ${res.status} ${body}`);
  }
  const data = await res.json();
  spend.calls++;
  spend.inTok += data.usage.input_tokens;
  spend.outTok += data.usage.output_tokens;
  spend.usd = spend.inTok * USD_IN + spend.outTok * USD_OUT;
  return data.content.filter(b => b.type === 'text').map(b => b.text).join('');
}

// Offline tutor: well-formed replies that echo the part asked about, so the
// pipeline and the scorer can be checked without the API. Not a model.
function mockCall() {
  let n = 0;
  return async (sys, user) => {
    spend.calls++;
    if (/revision notes/.test(sys)) return 'Particles vibrate in a fixed place.\nHeating makes them move faster.';
    n++;
    const part = (user.match(/The part to ask about: ([^—\n]+)/) || [])[1];
    if (/goodbye|ONE warm, complete goodbye/.test(user)) return 'Well done today. See you next time.';
    if (/all \d+ key points in this lesson have now been covered/i.test(user)) return 'That is every key point covered. Well done.';
    if (/ask her one question meaning "Do you want me to just tell you the rest/.test(user)) return 'Do you want me to just tell you the rest of this one?';
    return `Right. ${part ? `Next is ${part.trim()}.` : 'Let us carry on.'} What word describes how the particles are arranged?`;
  };
}

// ---------- scoring ----------

const BOARD = /\b(AQA|Edexcel|OCR|WJEC|8463|8464|8465|specification|paper [12])\b/i;
const NAME = /\bMabel\b/;
const URL_RE = /https?:\/\/|www\.|\.(com|org|co\.uk)\b/i;
const TAG = /,\s*(right|yeah|ok|okay|isn'?t it|don'?t they|doesn'?t it|aren'?t they)\s*\?$/i;
const PRAISE =/^\W*(great|good|nice|excellent|brilliant|fantastic|awesome|amazing|perfect|lovely|love that|well done)\b[^.!?]{0,20}[!.,—–-]/i;

function scoreTurn(core, turn, pointWords) {
  const plain = core._stripMarkdown(turn.reply);
  const flags = [];
  const teaching = turn.teachIndex !== null;
  if (teaching && core._asksYesNo(plain)) flags.push('yes/no question');
  if (turn.kind !== 'free' && PRAISE.test(plain)) flags.push('stock praise');   // a goodbye may say "well done"
  if (core._wordCount(plain) > core.MAX_REPLY_WORDS) flags.push(`over length (${core._wordCount(plain)} words)`);
  if (core._looksTruncated(plain)) flags.push('cut off');
  if (BOARD.test(plain)) flags.push('board or paper');
  if (NAME.test(plain)) flags.push("student's name");
  if (URL_RE.test(plain)) flags.push('URL');
  if (teaching) {
    // A tag on a statement ("…move faster, right?") is not a second question.
    const qs = (plain.match(/[^.!?]*\?/g) || []).filter(q => !TAG.test(q));
    if (!qs.length) flags.push('no question on a teaching turn');
    else if (qs.length > 1) flags.push('unanswerable: more than one question');
    else if (/\bor\b/i.test(qs[0])) flags.push('unanswerable: either/or question');
    else if (pointWords) {
      // The question is read with the sentence before it: "…has a special name. What's it called?"
      const at = plain.indexOf(qs[0]);
      const before = (plain.slice(0, at).match(/[^.!?]+[.!?]\s*$/) || [''])[0];
      if (!core._stems(before + ' ' + qs[0]).some(w => pointWords.has(w))) flags.push('unanswerable: no word from the lesson');
    }
  }
  for (const line of turn.recap || []) {
    if (NAME.test(line)) flags.push("recap: student's name");
    if (BOARD.test(line)) flags.push('recap: board or paper');
    if (URL_RE.test(line)) flags.push('recap: URL');
  }
  return flags;
}

// ---------- one lesson ----------

async function simulate(id, call) {
  const { subject, data } = findLesson(id);
  const core = TeachCore.create({ call });
  const points = core._buildPoints(data);
  core.bind(data, points, null);
  const state = core._freshState();
  core.bind(data, points, state);

  const push = entry => {
    state.transcript.push(entry);
    if (state.transcript.length > TRANSCRIPT_CAP) state.transcript = state.transcript.slice(-TRANSCRIPT_CAP);
  };
  // Words the tutor's question may draw on, per point: the point's own stems.
  const pointWords = points.map((p, i) => core._pointStems(i));
  const turns = [];

  const opening = await core._callWithLengthGuard(core._buildSystemPrompt(0), core._firstOpeningPrompt(), true);
  state.transcript = [{ role: 'assistant', text: opening, pt: 0, opening: true }];
  turns.push({ n: 0, student: null, kind: 'opening', teachIndex: 0, reply: opening });

  let cycleAt = 0, checkins = 0, onPoint = 0, lastPoint = 0, closing = 0;
  const maxTurns = points.length * MAX_TURNS_PER_POINT + 4;
  for (let n = 1; n <= maxTurns; n++) {
    if (state.currentPointIndex !== lastPoint) { lastPoint = state.currentPointIndex; onPoint = 0; cycleAt = 0; }
    if (!state.complete && ++onPoint > MAX_TURNS_PER_POINT) break;   // stuck: the point never completes

    let type;
    if (state.complete) type = closing++ === 0 ? 'thanks' : 'bye';
    else if (state.checkinAsked) type = checkins++ === 0 ? 'no' : 'yes';
    else type = CYCLE[cycleAt++ % CYCLE.length];

    let text;
    if (type === 'correct') {
      const pt = points[state.currentPointIndex];
      const j = core._targetFactIndex(state.currentPointIndex);
      const f = pt.facts[j === -1 ? 0 : j];
      text = f ? `I think it's ${f.term}, ${f.def.split(/\s+/).slice(0, 10).join(' ')}` : `it's about ${core._shortHeading(pt.heading)}`;
    } else text = { thanks: 'thanks', bye: 'no thanks, bye', no: 'no', yes: 'yes' }[type] || LINES[type];

    push(state.complete ? { role: 'user', text } : { role: 'user', text, pt: state.currentPointIndex });
    const { reply, recap, decision } = await core._getTutorReply(text);
    if (decision.kind === 'free' && !state.wrapOffered && core._looksLikeWrapUpQuestion(reply)) state.wrapOffered = true;
    if (decision.kind === 'free' && state.complete && state.wrapOffered && !reply.includes('?')) state.farewell = true;
    if (recap) push({ role: 'recap', pt: decision.idx, lines: recap, done: false });
    push(core._replyEntry(reply, decision));
    turns.push({ n, student: text, studentType: type, kind: decision.kind, teachIndex: core._teachIndex(decision),
                 point: decision.idx ?? decision.nextIndex ?? null, reply, recap: recap || null });
    if (state.farewell) break;
  }

  return score({ id, subject, model: MODEL, turns, coverage: state.coverage, complete: state.complete, farewell: state.farewell }, core, points);
}

// Flags every turn and the lesson as a whole. Also used by --rescore on a saved run.
function score(r, core, points) {
  const { turns, coverage: cov, complete, farewell } = r;
  const pointWords = points.map((p, i) => core._pointStems(i));
  for (const t of turns) t.flags = scoreTurn(core, t, t.teachIndex !== null ? pointWords[t.teachIndex] : null);
  const state = { coverage: cov, complete, farewell };
  const lessonFlags = [];
  const never = state.coverage.map((c, i) => c === true ? null : i).filter(i => i !== null);
  if (never.length) lessonFlags.push(`points never completed: ${never.map(i => `${i} "${core._shortHeading(points[i].heading)}"`).join(', ')}`);
  const last = turns[turns.length - 1];
  if (!state.complete) lessonFlags.push('no clean ending: lesson not completed');
  else if (!state.farewell || last.reply.includes('?')) lessonFlags.push('no clean ending: last reply is not a goodbye without a question');

  return { ...r, lessonFlags };
}

// Re-scores a saved run with the current scorer: no model calls, no cost.
function rescore(file, replay = false) {
  const saved = JSON.parse(fs.readFileSync(file, 'utf8'));
  const { data } = findLesson(saved.id);
  const core = TeachCore.create({ call: async () => '' });
  const points = core._buildPoints(data);
  core.bind(data, points, null);
  if (replay) {
    for (const t of saved.turns) {
      t.reply = core._finishReply(t.reply);
      if (t.recap) t.recap = t.recap.map(core._stripName);
    }
    file = file.replace(/\.json$/, '-replay.json');
  }
  const r = score(saved, core, points);
  fs.writeFileSync(file, JSON.stringify(r, null, 2));
  writeMd(file.replace(/\.json$/, ''), r, `${saved.mode}, ${replay ? 'replayed through current post-processing and ' : ''}rescored`, saved.date);
  const flagged = r.turns.filter(t => t.flags.length).length;
  console.log(`${r.id}: rescored ${path.relative(ROOT, file).replace(/\\/g, '/')}: ${r.turns.length} tutor turns, ${flagged} flagged; ${r.lessonFlags.join('; ') || 'no lesson flags'}.`);
  return r;
}

// ---------- estimate ----------

function estimate(id) {
  const { data } = findLesson(id);
  const core = TeachCore.create({ call: async () => '' });
  const points = core._buildPoints(data);
  core.bind(data, points, null);
  core.bind(data, points, core._freshState());
  const promptChars = core._buildSystemPrompt(0).length + core._firstOpeningPrompt().length + 1200; // + history
  // A clean pass is about 6 turns a point; allow 1.5 calls a turn for the length guard, plus a recap a point.
  const calls = Math.ceil(points.length * 6 * 1.5 + points.length + 4);
  const inTok = Math.ceil(promptChars / 4) * calls;
  const outTok = core.MAX_TOKENS_REPLY * calls;
  return { id, points: points.length, calls, inTok, outTok, usd: inTok * USD_IN + outTok * USD_OUT };
}

// ---------- output ----------

function writeRun(r, mode) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const date = new Date().toISOString().slice(0, 10);
  let k = 1;
  while (fs.existsSync(path.join(OUT_DIR, `${r.id}-${date}-${k}.json`))) k++;
  const base = path.join(OUT_DIR, `${r.id}-${date}-${k}${mode === 'mock' ? '-mock' : ''}`);
  fs.writeFileSync(base + '.json', JSON.stringify({ ...r, mode, date }, null, 2));
  writeMd(base, r, mode, date);

  const summary = path.join(OUT_DIR, 'SUMMARY.md');
  if (!fs.existsSync(summary)) fs.writeFileSync(summary, '# Teach sim runs\n\nOne line per run: date | lesson | mode | tutor turns | flagged turns | flags by type | lesson flags | cost.\n\n');
  const byType = {};
  r.turns.forEach(t => t.flags.forEach(f => { const key = f.replace(/ \(.*\)$/, ''); byType[key] = (byType[key] || 0) + 1; }));
  const types = Object.entries(byType).map(([k, v]) => `${k} ${v}`).join(', ') || 'none';
  const flaggedN = r.turns.filter(t => t.flags.length).length;
  fs.appendFileSync(summary, `- ${date} | ${r.id} | ${mode} | ${r.turns.length} | ${flaggedN} | ${types} | ${r.lessonFlags.join('; ') || 'none'} | ${mode === 'run' ? '$' + r.cost.toFixed(4) : '-'}\n`);
  return base;
}

function writeMd(base, r, mode, date) {
  const flagged = r.turns.filter(t => t.flags.length);
  const md = [`# Teach sim: ${r.id} (${mode}, ${date})`, '', `Model ${r.model}. ${r.turns.length} tutor turns, ${flagged.length} flagged. Complete: ${r.complete}. Coverage: ${JSON.stringify(r.coverage)}.`, ''];
  md.push(r.lessonFlags.length ? `Lesson flags: ${r.lessonFlags.join('; ')}` : 'Lesson flags: none', '');
  for (const t of r.turns) {
    if (t.student !== null) md.push(`**Student** (${t.studentType}): ${t.student}`, '');
    md.push(`**Tutor** [${t.kind}${t.point !== null && t.point !== undefined ? `, point ${t.point}` : ''}]: ${t.reply.replace(/\n/g, ' ')}`);
    if (t.recap) md.push('', `> Recap: ${t.recap.join(' / ')}`);
    if (t.flags.length) md.push('', `⚑ ${t.flags.join('; ')}`);
    md.push('');
  }
  fs.writeFileSync(base + '.md', md.join('\n'));
}

// ---------- main ----------

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.rescore) { rescore(path.resolve(args.rescore), args.replay); return; }
  const ests = args.ids.map(estimate);
  const total = ests.reduce((s, e) => s + e.usd, 0);
  console.log(args.run ? 'RUN' : args.mock ? 'MOCK (offline, canned tutor replies)' : 'DRY RUN (add --run for real calls)');
  console.log('lesson | key points | est. calls | est. input tokens | est. output tokens | est. cost (USD)');
  for (const e of ests) console.log(`${e.id} | ${e.points} | ${e.calls} | ${e.inTok} | ${e.outTok} | ${e.usd.toFixed(4)}`);
  console.log(`TOTAL $${total.toFixed(4)} at $1 per M input, $5 per M output (${MODEL}); output assumed at the reply token cap.`);
  if (!args.run && !args.mock) return;

  if (args.run) {
    const cap = args.maxUsd !== null ? args.maxUsd : DEFAULT_CAP_USD;
    if (total > cap) die(`Estimate $${total.toFixed(4)} is over $${cap}. Stopping. Pass --max-usd <n> above the estimate to proceed.`);
    if (!process.env.SPEC_CHECK_API_KEY) die('SPEC_CHECK_API_KEY is not set.');
    spend.cap = cap;
    await confirmModel();
  }

  for (const id of args.ids) {
    const before = spend.usd;
    let r;
    try {
      r = await simulate(id, args.run ? realCall : mockCall());
    } catch (e) {
      die(String(e.message || e));
    }
    r.cost = spend.usd - before;
    const base = writeRun(r, args.run ? 'run' : 'mock');
    const flagged = r.turns.filter(t => t.flags.length).length;
    console.log(`${id}: ${r.turns.length} tutor turns, ${flagged} flagged; ${r.lessonFlags.join('; ') || 'no lesson flags'}. ` +
      `${path.relative(ROOT, base).replace(/\\/g, '/')}.md${args.run ? ` · $${r.cost.toFixed(4)}` : ''}`);
  }
  if (args.run) console.log(`Spent $${spend.usd.toFixed(4)} over ${spend.calls} calls.`);
}

main();
