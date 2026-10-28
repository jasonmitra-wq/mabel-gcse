#!/usr/bin/env node
/* MARK_FIX (a): marking her free-text answers (brief docs/briefs/2026-10-27-last-fixes.md, step 2d).
 *
 *   node tools/check-marking.js          # free: the marking prompt holds the key point, its rules and the misconceptions
 *   node tools/check-marking.js --run    # also marks the 40 answers with the tutor model (js/teach-core.js _markAnswer); about $0.15
 *   node tools/check-marking.js --run --batch   # the same 40 requests through the Message Batches API (half price, about $0.08)
 *
 * 30 answers in her style, written 2026-10-28 with their expected verdicts before any run, and not used to tune
 * anything: 14 reversed rules or misconceptions (WRONG), 6 half-right (PARTLY: one part of what was asked is
 * missing), 10 right (CORRECT). Every one must get its expected verdict. Exit 1 on any miss.
 * Then 10 more right answers in her loose wording (brief docs/briefs/2026-10-28-small-fixes.md, 1f), written
 * 2026-10-28 before any run and not used to tune anything: S2 of site test 2026-10-28/p2-current-voltage-4
 * (marked "Not quite" there) and 9 others. Their fingerprint is printed (sha256 of NEW_CASES as JSON).
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const TeachCore = require(path.join(ROOT, 'js', 'teach-core.js'));
const MIS = require(path.join(ROOT, 'js', 'pilot', 'misconceptions.js'));

const CV = 'p2-current-voltage', COMP = 'p2-components';
const CASES = [
  // Reversed rules and misconceptions: WRONG.
  { lesson: CV, kp: 1, q: 'If you add a resistor to the loop, what happens to the current?', a: 'it goes up cos the resistor pushes it', want: 'wrong' },
  { lesson: CV, kp: 0, q: 'How does the current after the lamp compare with the current before it?', a: 'less after cos the lamp uses some up', want: 'wrong' },
  { lesson: CV, kp: 0, q: 'Why does a lamp need a wire going to the cell and one coming back?', a: 'it doesnt really, one wire is enough if its thick', want: 'wrong' },
  { lesson: CV, kp: 6, q: 'A phone battery goes flat. What has it run out of?', a: 'charge, its used up all its charge', want: 'wrong' },
  { lesson: CV, kp: 1, q: 'A voltmeter is joined across a lamp. What does it measure?', a: 'the current going through the lamp', want: 'wrong' },
  { lesson: CV, kp: 3, q: 'A resistor at constant temperature is 20 ohms. You double the potential difference. What is its resistance now?', a: '40 ohms cos you doubled it', want: 'wrong' },
  { lesson: CV, kp: 4, q: 'As a filament lamp gets hotter, what happens to its resistance?', a: 'it goes down cos hot metal lets charge through easier', want: 'wrong' },
  { lesson: CV, kp: 4, q: 'How do you find the resistance at one point on a lamp\'s I-V graph?', a: 'you work out how steep the curve is at that point', want: 'wrong' },
  { lesson: CV, kp: 2, q: 'What happens to the resistance of the wire as you make it longer?', a: 'it gets smaller cos theres more room for the charge', want: 'wrong' },
  { lesson: CV, kp: 1, q: 'You add a second cell to the loop. What happens to the current?', a: 'stays the same, a cell always gives the same current', want: 'wrong' },
  { lesson: CV, kp: 4, q: 'A diode is connected the wrong way round. What happens to the current?', a: 'it just flows the other way round the loop', want: 'wrong' },
  { lesson: COMP, kp: 1, q: 'As a thermistor gets warmer, what happens to its resistance?', a: 'goes up cos the heat makes it harder for the charge', want: 'wrong' },
  { lesson: COMP, kp: 2, q: 'What happens to the resistance of an LDR when the light gets brighter?', a: 'it increases', want: 'wrong' },
  { lesson: COMP, kp: 0, q: 'The same loop is drawn again with the lamp on the left instead of the right. Does the circuit work any differently?', a: 'yeah cos the charge gets to the lamp at a different time', want: 'wrong' },
  // Half-right: one part of what was asked is missing. PARTLY.
  { lesson: CV, kp: 1, q: 'The size of a current depends on two things. What are they?', a: 'the potential difference', want: 'partly' },
  { lesson: CV, kp: 5, q: 'In the I-V practical, which two meters do you need, and how is each one connected?', a: 'an ammeter in series with the component', want: 'partly' },
  { lesson: CV, kp: 6, q: 'What is the unit of energy, and what is the unit of charge?', a: 'joules for energy', want: 'partly' },
  { lesson: COMP, kp: 3, q: 'To find a thermistor\'s resistance at one temperature, which two things do you measure?', a: 'the current through it', want: 'partly' },
  { lesson: CV, kp: 4, q: 'How is a diode\'s I-V graph different for positive and for negative potential differences?', a: 'for negative ones the current is basically zero', want: 'partly' },
  { lesson: CV, kp: 2, q: 'In the wire practical, what do you plot, and what shape does the graph have?', a: 'resistance against length', want: 'partly' },
  // Right: CORRECT.
  { lesson: CV, kp: 0, q: 'How does the current after the lamp compare with the current before it?', a: 'its the same cos the charge isnt used up', want: 'correct' },
  { lesson: CV, kp: 1, q: 'If you add a resistor to the loop, what happens to the current?', a: 'it goes down cos theres more resistance', want: 'correct' },
  { lesson: CV, kp: 6, q: 'A phone battery goes flat. What has it run out of?', a: 'the energy stored in it', want: 'correct' },
  { lesson: CV, kp: 4, q: 'As a filament lamp gets hotter, what happens to its resistance?', a: 'goes up', want: 'correct' },
  { lesson: CV, kp: 3, q: 'A resistor at constant temperature is 20 ohms. You double the potential difference. What is its resistance now?', a: 'still 20 ohms, it doesnt change', want: 'correct' },
  { lesson: CV, kp: 1, q: 'A voltmeter is joined across a lamp. What does it measure?', a: 'the potential difference across it', want: 'correct' },
  { lesson: CV, kp: 2, q: 'What happens to the resistance of the wire as you make it longer?', a: 'it gets bigger, longer wire more resistance', want: 'correct' },
  { lesson: COMP, kp: 1, q: 'As a thermistor gets warmer, what happens to its resistance?', a: 'it goes down', want: 'correct' },
  { lesson: COMP, kp: 2, q: 'What happens to the resistance of an LDR when the light gets brighter?', a: 'decreases innit', want: 'correct' },
  { lesson: CV, kp: 4, q: 'How do you find the resistance at one point on a lamp\'s I-V graph?', a: 'read off V and I there and do V divided by I', want: 'correct' },
];
// 2026-10-28, brief 1f: right answers in her loose wording (CORRECT). The first is S2, with the tutor's whole message T1.
const NEW_CASES = [
  { lesson: CV, kp: 0, q: "Flicking the switch is the key move: it closes a gap in a loop, and the lamp lights at once. Inside the wires, tiny particles carrying electric charge drift round together, and you can't see them, only what they do. What do you think happens inside the loop when you flick the switch back off?", a: 'the charged particles stop moving around and just stay still', want: 'correct' },
  { lesson: CV, kp: 0, q: 'Why is the current the same before and after the lamp?', a: 'cos the charge doesnt get used up it just goes round', want: 'correct' },
  { lesson: CV, kp: 1, q: 'You swap one cell for two cells in the loop. What happens to the current?', a: 'goes up theres more push', want: 'correct' },
  { lesson: CV, kp: 1, q: 'The potential difference stays the same but the resistance gets bigger. What happens to the current?', a: 'less of it gets through', want: 'correct' },
  { lesson: CV, kp: 2, q: 'In the wire practical, why do you keep the current small?', a: 'so the wire dont heat up and mess up its resistance', want: 'correct' },
  { lesson: CV, kp: 4, q: "Why does a filament lamp's I-V graph curve?", a: 'the filament gets hot so its resistance goes up', want: 'correct' },
  { lesson: CV, kp: 4, q: 'What does a diode do to a current trying to go the reverse way?', a: 'basically stops it, only a tiny bit gets thru', want: 'correct' },
  { lesson: CV, kp: 6, q: 'What does a potential difference of 1 volt mean?', a: 'like 1 joule for every coulomb that goes through', want: 'correct' },
  { lesson: COMP, kp: 1, q: "What happens to a thermistor's resistance when it gets colder?", a: 'it goes up', want: 'correct' },
  { lesson: COMP, kp: 2, q: 'An LDR is put in a dark cupboard. What happens to its resistance?', a: 'gets really big', want: 'correct' },
];
const ALL = [...CASES, ...NEW_CASES.map(c => ({ ...c, isNew: true }))];
const FINGERPRINT = require('crypto').createHash('sha256').update(JSON.stringify(NEW_CASES)).digest('hex').slice(0, 8);

const run = process.argv.includes('--run');
const batch = run && process.argv.includes('--batch');
let calls = 0, inTok = 0, outTok = 0;
async function api(sys, user, tokens) {
  const { apiKey } = require('./lib-key.js');
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': apiKey(), 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({ ...TeachCore.tutorParams(), max_tokens: tokens, system: sys, messages: [{ role: 'user', content: user }] }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${await res.text()}`);
  const body = await res.json();
  calls++; inTok += body.usage.input_tokens; outTok += body.usage.output_tokens;
  return body.content.filter(b => b.type === 'text').map(b => b.text).join('');
}
// --batch: every marking request is collected first, sent as one batch (half price), and the answers fed back
// to _markAnswer, which reads them as it reads a direct call's.
async function sendBatch(reqs) {
  const { apiKey } = require('./lib-key.js');
  const H = { 'x-api-key': apiKey(), 'anthropic-version': '2023-06-01', 'content-type': 'application/json' };
  const body = { requests: reqs.map((r, k) => ({ custom_id: `c${k}`, params: { ...TeachCore.tutorParams(), max_tokens: r.tokens, system: r.sys, messages: [{ role: 'user', content: r.user }] } })) };
  let res = await fetch('https://api.anthropic.com/v1/messages/batches', { method: 'POST', headers: H, body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${await res.text()}`);
  let b = await res.json();
  console.log(`batch ${b.id} sent (${reqs.length} requests)`);
  while (b.processing_status !== 'ended') {
    await new Promise(r => setTimeout(r, 10000));
    res = await fetch(`https://api.anthropic.com/v1/messages/batches/${b.id}`, { headers: H });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${await res.text()}`);
    b = await res.json();
  }
  res = await fetch(b.results_url, { headers: H });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${await res.text()}`);
  const out = {};
  for (const line of (await res.text()).split(/\r?\n/).filter(Boolean)) {
    const r = JSON.parse(line);
    if (r.result.type !== 'succeeded') throw new Error(`${r.custom_id}: ${JSON.stringify(r.result)}`);
    const m = r.result.message;
    calls++; inTok += m.usage.input_tokens; outTok += m.usage.output_tokens;
    out[r.custom_id] = m.content.filter(x => x.type === 'text').map(x => x.text).join('');
  }
  return reqs.map((r, k) => out[`c${k}`]);
}
const lessons = {};
const lessonOf = id => (lessons[id] = lessons[id] || JSON.parse(fs.readFileSync(path.join(ROOT, 'lessons', 'physics', `${id}.json`), 'utf8')));

// One case marked by js/teach-core.js _markAnswer, as the site marks it, with the given model call.
async function markOne(c, call) {
  const core = TeachCore.create({ call });
  const data = lessonOf(c.lesson), points = core._buildPoints(data);
  core.bind(data, points, null);
  const state = core._freshState();
  core.bind(data, points, state);
  state.firstTime = { probed: true, known: '' };
  state.currentPointIndex = c.kp;
  state.transcript = [{ role: 'assistant', text: c.q, pt: c.kp }, { role: 'user', text: c.a, pt: c.kp }];
  core.pilotContext({ lessonId: c.lesson, misconceptions: MIS.map(m => m.text) });
  return core._markAnswer(c.a);
}

(async () => {
  let fails = 0, newMiss = 0;
  console.log(`new answers: ${NEW_CASES.length}, fingerprint ${FINGERPRINT}`);
  // --batch: a first pass collects the requests; the answers come back from the batch in the same order.
  let canned = null;
  if (batch) {
    const reqs = [];
    for (const c of ALL) await markOne(c, async (sys, user, tokens) => { reqs.push({ sys, user, tokens }); return 'CORRECT'; });
    canned = await sendBatch(reqs);
  }
  let k = 0;
  for (const c of ALL) {
    const prompts = [];
    const m = await markOne(c, async (sys, user, tokens) => { prompts.push(user); return canned ? canned[k++] : run ? api(sys, user, tokens) : 'CORRECT'; });
    // Free: the marking prompt holds the key point's content, its rules and the misconceptions.
    const p = prompts[0] || '';
    const holds = /Rules of this key point/.test(p) && /Known misconceptions/.test(p) && MIS.every(x => p.includes(x.text));
    if (!holds) { fails++; console.log(`FAIL prompt  ${c.lesson} kp ${c.kp + 1}: the marking prompt lacks the rules or the misconceptions`); continue; }
    if (!run) continue;
    const got = m ? m.mark : '(no mark)';
    const ok = got === c.want;
    if (!ok) { fails++; if (c.isNew) newMiss++; }
    console.log(`${ok ? 'ok  ' : 'MISS'} ${c.isNew ? 'new ' : '    '}want ${c.want.padEnd(7)} got ${String(got).padEnd(8)} ${c.lesson.slice(3)} kp ${c.kp + 1}: "${c.a}"`);
  }
  const usd = (inTok * 2 / 1e6 + outTok * 10 / 1e6) * (batch ? 0.5 : 1);
  const score = run ? ` ${ALL.length - fails}/${ALL.length} (the first 30: ${CASES.length - (fails - newMiss)}/${CASES.length}; the new 10: ${NEW_CASES.length - newMiss}/${NEW_CASES.length})` : '';
  console.log(`${fails ? 'FAIL' : 'ok  '}  marking — ${ALL.length} answers (14 wrong, 6 half-right, 20 right)${score}${run ? `; ${calls} calls to ${TeachCore.TUTOR_MODEL}${batch ? ' in one batch (half price)' : ''}, ${inTok} in / ${outTok} out tokens (${Math.round(inTok / Math.max(1, calls))} in per call), $${usd.toFixed(4)}` : '; the marking prompt holds the rules and misconceptions (add --run to mark them)'}`);
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
