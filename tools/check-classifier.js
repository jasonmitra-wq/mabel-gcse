#!/usr/bin/env node
/* KP_SHORT (b): how the AI lesson reads her messages (brief
 * docs/briefs/2026-10-26-shorter-key-points.md, step 3).
 *
 *   node tools/check-classifier.js          # free: the clear cases are decided in code, with no call
 *   node tools/check-classifier.js --run    # also asks the classifier (js/teach-core.js CLASSIFIER_MODEL)
 *                                           # about the others; about $0.002
 *
 * 20 of her real phrasings from the site-test transcripts, each with what the
 * tutor had just said and the class it should get. Exit 1 on any mismatch.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const TeachCore = require(path.join(ROOT, 'js', 'teach-core.js'));

// tutor: the tutor's last message; pending: what the code is waiting for (null = nothing);
// choices: buttons under the tutor's message; want: the class.
const NUM = { t: 'num', q: { question: 'A current of 0.5 A flows through a lamp for 2 minutes. How much charge flows?' }, mode: 'order' };
const CASES = [
  { text: 'wait is that the same as voltage', tutor: 'A voltmeter measures the potential difference across a lamp. What does a voltmeter measure?', want: 'question' },
  { text: 'why 0.05 tho? i said 50', tutor: 'Not quite: it\'s 30 C. Put the numbers in: Q = 0.05 × 600 = 30', pending: { t: 'next' }, choices: ['Next'], want: 'question' },
  { text: 'is that like a resistor', tutor: 'A variable resistor lets you change the current. What does turning it change?', want: 'question' },
  { text: 'omg im so hungry', tutor: 'If the same current flows for twice as long, what happens to the charge flow?', want: 'offtopic' },
  { text: '0.5 times 2 so like 1', tutor: 'Your turn: ' + NUM.q.question, pending: NUM, want: 'answer' },
  { text: 'idk', tutor: 'What unit is charge counted in?', want: 'idk', clear: true },
  { text: 'next', tutor: 'In a single loop, the current is the same at every point.', pending: { t: 'next' }, choices: ['Next'], want: 'button', clear: true },
  { text: '12', tutor: 'Your turn: A current of 4 A flows for 3 s. How much charge flows?', pending: { t: 'num', q: { question: 'A current of 4 A flows for 3 s. How much charge flows?' } }, want: 'answer', clear: true },
  { text: 'so resistors stop all the charge then', tutor: 'Resistance is measured in ohms (Ω).', pending: { t: 'next' }, choices: ['Next'], want: 'statement' },
  { text: 'whats a coulomb lol', tutor: 'Charge is measured in coulombs. If more charge flows, what happens to the number of coulombs?', want: 'question' },
  { text: 'it goes up innit', tutor: 'If more charge flows through a torch\'s wires, what happens to the number of coulombs that have passed?', want: 'answer' },
  { text: 'my phone battery is dying lol', tutor: 'Worked example: A potential difference of 6 V is put across a 12 Ω resistor. What is the current through it?', pending: { t: 'worked', x: { question: 'A potential difference of 6 V is put across a 12 Ω resistor. What is the current through it?' } }, want: 'offtopic' },
  { text: 'how many runners pass each second', tutor: 'Before the practical, question 1 of 2: What does an ammeter measure?', pending: { t: 'mc', step: { q: { question: 'What does an ammeter measure?', options: ['Current', 'Potential difference', 'Resistance'] } }, order: [0, 1, 2] }, want: 'answer' },
  { text: 'can we move on', tutor: 'Picture the loop with a gap. What happens to the lamp?', want: 'moveon' },
  { text: 'idk how to do that one', tutor: 'Worked example: A charge of 30 C flows past a point in 60 s. What is the current?', pending: { t: 'worked', x: { question: 'A charge of 30 C flows past a point in 60 s. What is the current?' } }, want: 'idk' },
  { text: 'wait 2 mins? thats like 120 seconds right', tutor: 'Worked example: ' + NUM.q.question, pending: { t: 'worked', x: { question: NUM.q.question } }, want: 'answer' },
  { text: 'oh i didnt convert the minutes. got it', tutor: 'Not quite: it\'s 60 C. Time must be in seconds: 2 minutes = 2 × 60 = 120 s.', pending: { t: 'next' }, choices: ['Next'], want: 'statement' },
  { text: 'just tell me', tutor: 'Which part of the loop does the ammeter go in?', want: 'moveon' },
  { text: 'it would double?', tutor: 'If half as many runners pass each second, what happens to the current?', want: 'answer' },
  { text: 'ugh maths is hard', tutor: 'Your turn: ' + NUM.q.question, pending: NUM, want: 'offtopic' },
];

// Held out (written 2026-10-27, before any run, with the expected class; never used to tune the
// prompt): other key points of the lesson, slang, typos, half-answers, questions with no "?".
//   node tools/check-classifier.js --held-out --run
const HELD_OUT = [
  { text: 'so the voltmeter goes on the outside bit', tutor: 'Where does a voltmeter go to measure the potential difference across a lamp?', want: 'answer' },
  { text: 'wats the diffrence between voltage and potential difference', tutor: 'Potential difference is the push that makes charge flow. What is it measured in?', want: 'question' },
  { text: 'volts i think', tutor: 'Potential difference is the push that makes charge flow. What is it measured in?', want: 'answer' },
  { text: 'brb my mum is calling', tutor: 'If you double the potential difference across a resistor, what happens to the current?', want: 'offtopic' },
  { text: 'it gets bigger?? or smaller idk', tutor: 'If you double the potential difference across a resistor, what happens to the current?', want: 'answer' },
  { text: 'hang on why does the lamp get hot', tutor: 'A filament lamp\'s resistance goes up as it heats up. What happens to its I-V graph as the current rises?', want: 'question' },
  { text: 'the line goes curvy', tutor: 'A filament lamp\'s resistance goes up as it heats up. What happens to its I-V graph as the current rises?', want: 'answer' },
  { text: 'so a diode is basically a one way door', tutor: 'A diode only lets current flow one way.', pending: { t: 'next' }, choices: ['Next'], want: 'statement' },
  { text: 'no clue tbh', tutor: 'What happens to the current if you connect a diode the wrong way round?', want: 'idk' },
  { text: 'skip this bit pls', tutor: 'In the I-V practical, what do you change to get a range of readings?', want: 'moveon' },
  { text: 'the variable resistr thing', tutor: 'In the I-V practical, what do you change to get a range of readings?', want: 'answer' },
  { text: 'do we need to know this for the exam', tutor: 'You plot resistance against length. What shape does the graph have?', want: 'question' },
  { text: 'straight line thru the middle bit', tutor: 'You plot resistance against length. What shape does the graph have?', want: 'answer' },
  { text: 'i hate physics lol', tutor: 'Energy transferred is charge times potential difference. If 2 C flows through 6 V, how much energy is transferred?', pending: { t: 'num', q: { question: '2 C flows through a potential difference of 6 V. How much energy is transferred?' } }, want: 'offtopic' },
  { text: 'so 2 x 6', tutor: 'Your turn: 2 C flows through a potential difference of 6 V. How much energy is transferred?', pending: { t: 'num', q: { question: '2 C flows through a potential difference of 6 V. How much energy is transferred?' } }, want: 'answer' },
  { text: 'oh so thats why my charger gets warm', tutor: 'When charge flows through a resistor, energy is transferred and it heats up.', pending: { t: 'next' }, choices: ['Next'], want: 'statement' },
  { text: 'what does ohm mean', tutor: 'Resistance is measured in ohms. If the resistance goes up, what happens to the current?', want: 'question' },
  { text: 'can u just tell me the answer', tutor: 'Resistance is measured in ohms. If the resistance goes up, what happens to the current?', want: 'moveon' },
  { text: 'goes down cos its harder to get thru', tutor: 'Resistance is measured in ohms. If the resistance goes up, what happens to the current?', want: 'answer' },
  { text: 'is that the same as the ammeter one', tutor: 'A voltmeter is connected in parallel, across the component.', pending: { t: 'next' }, choices: ['Next'], want: 'question' },
];

const run = process.argv.includes('--run');
const heldOut = process.argv.includes('--held-out');
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'lessons', 'physics', 'p2-current-voltage.json'), 'utf8'));
let calls = 0, costIn = 0, costOut = 0;
async function classify(sys, user, tokens) {
  const { apiKey } = require('./lib-key.js');
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': apiKey(), 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({ ...TeachCore.classifierParams(), max_tokens: tokens, system: sys, messages: [{ role: 'user', content: user }] }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${await res.text()}`);
  const body = await res.json();
  calls++; costIn += body.usage.input_tokens; costOut += body.usage.output_tokens;
  return body.content.filter(b => b.type === 'text').map(b => b.text).join('');
}

(async () => {
  const core = TeachCore.create({ call: async () => '' });
  const points = core._buildPoints(data);
  let fails = 0, asked = 0;
  for (const c of (heldOut ? HELD_OUT : CASES)) {
    const state = core._freshState();
    state.firstTime = { probed: true, known: '' };
    state.transcript = [{ role: 'assistant', text: c.tutor, pt: 0, ...(c.choices ? { choices: c.choices } : {}) }, { role: 'user', text: c.text, pt: 0 }];
    core.bind(data, points, state);
    core._pilot().pending = c.pending || null;
    const clear = core._kpClear(c.text);
    let got, by;
    if (clear) { got = clear; by = 'code'; }
    else if (c.clear) { got = '(needs a call)'; by = 'code'; }
    else if (!run) { got = '(needs a call)'; by = 'skipped'; }
    else {
      asked++;
      const { sys, user } = core._kpClassifyPrompt(c.text, core._kpWaitingQ(), c.tutor);
      const raw = String(await classify(sys, user, 10)).toUpperCase();
      const m = raw.match(/\b(ANSWER|QUESTION|STATEMENT|OFFTOPIC|IDK|MOVEON)\b/);
      got = m ? m[1].toLowerCase().replace('moveon', 'moveon') : `(no class: "${raw}")`;
      by = 'model';
    }
    const ok = by === 'skipped' ? !clear : got === c.want;
    if (!ok) fails++;
    console.log(`${ok ? 'ok  ' : 'FAIL'} ${by.padEnd(7)} want ${c.want.padEnd(9)} got ${String(got).padEnd(14)} "${c.text}"`);
  }
  const usd = costIn * TeachCore.CLASSIFIER_COST_IN + costOut * TeachCore.CLASSIFIER_COST_OUT;
  console.log(`${fails ? 'FAIL' : 'ok  '}  classifier${heldOut ? " (held out)" : ""} — ${(heldOut ? HELD_OUT : CASES).length} messages, ${(heldOut ? HELD_OUT : CASES).filter(c => c.clear).length} clear in code${run ? `, ${asked} asked of ${TeachCore.CLASSIFIER_MODEL} (${calls} calls, ${costIn} in / ${costOut} out tokens, $${usd.toFixed(5)})` : ' (add --run to ask the classifier about the rest)'}`);
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
