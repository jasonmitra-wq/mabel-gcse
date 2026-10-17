#!/usr/bin/env node
/**
 * Proves a teach-core flag is off-means-unchanged: runs the same scripted
 * conversations through two copies of js/teach-core.js with a stub model (no
 * API) and compares every prompt sent (system, user, max_tokens), every
 * decision and the state after every turn, byte for byte.
 *
 *   git show HEAD:js/teach-core.js > old-core.js
 *   node tools/check-flag-identical.js old-core.js js/teach-core.js --new-opts '{"flowFix":false}' [lesson ids]
 *
 * --old-opts / --new-opts: JSON merged into create({ call, ... }) for each side.
 * Default lessons: p1-energy-stores p2-current-voltage b3-defences g5-development.
 * Exit 0 and "IDENTICAL" when the records match; otherwise the first difference.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');

function findLesson(id) {
  for (const subject of fs.readdirSync(path.join(ROOT, 'lessons'))) {
    const f = path.join(ROOT, 'lessons', subject, id + '.json');
    if (fs.existsSync(f)) return JSON.parse(fs.readFileSync(f, 'utf8'));
  }
  throw new Error(`No lesson ${id} under lessons/`);
}

// Deterministic stub: the reply depends only on the prompt, so both sides get
// the same reply for the same prompt and different replies once prompts differ.
function stub(log) {
  return async (sys, user, tokens) => {
    log.push({ sys, user, tokens });
    const h = crypto.createHash('md5').update(sys + '\u0000' + user + '\u0000' + tokens).digest();
    if (/revision notes/.test(sys)) return 'Energy is stored in different ways.\nIt can move between stores.';
    if (/mark one answer/i.test(sys)) return ['CORRECT', 'WRONG', 'IDK', 'OTHER', 'PARTLY'][h[0] % 5];
    const words = 'energy store kinetic thermal current charge pathogen skin country development'.split(' ');
    const w = words[h[1] % words.length];
    const variants = [
      `Right — that links to ${w}. What does ${w} describe here?`,
      `Not quite — think about ${w}. Which word fits ${w}?`,
      `Here is a longer reply about ${w} that goes on and on with many words so that it is over the limit for one reply and has to be shortened by the guard because it keeps going past sixty words and keeps adding more and more words about ${w} until it is far too long for a bored student to read on a phone. What is ${w}?`,
      `Do you think ${w} matters?`,
      `So ${w} is the idea.`,
      `Do you want me to just tell you the rest of this one?`,
    ];
    return variants[h[2] % variants.length] + (h[3] % 4 === 0 ? `\nANSWER: ${w}` : '');
  };
}

const SCRIPT = ['correct', 'is it magnets', 'idk', "what's your favourite team", 'just give me the answer', 'ok', 'k',
  'correct', 'can we skip this', 'correct', 'huh?', 'tell me', 'correct', 'no', 'correct', 'yes', 'skip', 'correct'];

async function run(corePath, opts, id) {
  delete require.cache[require.resolve(corePath)];
  const TeachCore = require(corePath);
  const log = [];
  const core = TeachCore.create({ call: stub(log), ...opts });
  const data = findLesson(id);
  const points = core._buildPoints(data);
  core.bind(data, points, null);
  const state = core._freshState();
  core.bind(data, points, state);
  const rec = [{ points }];
  const opening = await core._callWithLengthGuard(core._buildSystemPrompt(0), core._firstOpeningPrompt(), true);
  state.transcript = [{ role: 'assistant', text: opening, pt: 0, opening: true }];
  rec.push({ opening });
  let k = 0, ends = 0;
  for (let n = 0; n < 90; n++) {
    let text;
    if (state.complete) text = ends++ === 0 ? 'thanks' : 'no thanks, bye';
    else if (state.checkinAsked) text = (k++ % 3 === 0) ? 'no' : (k % 3 === 1 ? 'yes' : 'skip');
    else {
      text = SCRIPT[k++ % SCRIPT.length];
      if (text === 'correct') {
        const pt = points[state.currentPointIndex];
        const j = core._targetFactIndex(state.currentPointIndex);
        const f = pt.facts[j === -1 ? 0 : j];
        text = f ? `I think it's ${f.term}, ${f.def.split(/\s+/).slice(0, 10).join(' ')}` : `it's about ${core._shortHeading(pt.heading)}`;
      }
    }
    state.transcript.push(state.complete ? { role: 'user', text } : { role: 'user', text, pt: state.currentPointIndex });
    const { reply, recap, decision } = await core._getTutorReply(text);
    if (recap) state.transcript.push({ role: 'recap', pt: decision.idx, lines: recap, done: false });
    state.transcript.push(core._replyEntry(reply, decision));
    rec.push({ text, reply, recap, decision, state: JSON.parse(JSON.stringify(state)) });
    if (n === 40) rec.push({ jump: core._jumpPrompt(Math.min(1, points.length - 1)) });
    if (state.complete && ends >= 2) break;
  }
  return JSON.stringify({ rec, log });
}

async function main() {
  const argv = process.argv.slice(2);
  const opt = name => { const i = argv.indexOf(name); if (i === -1) return {}; const v = JSON.parse(argv[i + 1]); argv.splice(i, 2); return v; };
  const oldOpts = opt('--old-opts'), newOpts = opt('--new-opts');
  const [oldPath, newPath, ...ids] = argv;
  if (!oldPath || !newPath) { console.error('Usage: node tools/check-flag-identical.js <old-core.js> <new-core.js> [--old-opts json] [--new-opts json] [ids]'); process.exit(2); }
  const lessons = ids.length ? ids : ['p1-energy-stores', 'p2-current-voltage', 'b3-defences', 'g5-development'];
  let total = 0, same = true;
  for (const id of lessons) {
    const a = await run(path.resolve(oldPath), oldOpts, id);
    const b = await run(path.resolve(newPath), newOpts, id);
    total += a.length;
    if (a === b) { console.log(`${id}: identical (${a.length} bytes)`); continue; }
    same = false;
    let i = 0; while (i < a.length && a[i] === b[i]) i++;
    console.log(`${id}: DIFFERENT at byte ${i}\n  old: …${a.slice(Math.max(0, i - 120), i + 200)}\n  new: …${b.slice(Math.max(0, i - 120), i + 200)}`);
  }
  console.log(same ? `IDENTICAL: ${lessons.length} lessons, ${total} bytes of prompts, replies, decisions and state.` : 'NOT IDENTICAL');
  process.exit(same ? 0 : 1);
}

main().catch(e => { console.error(e); process.exit(1); });
