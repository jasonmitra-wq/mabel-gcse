/* The "bored student" tester: a student model and a judge, shared by
 * tools/teach-sim.js (--persona bored) and tools/site-test.js.
 *
 * The student is played by the cheap model teach-sim already uses. Each turn
 * draws a mood from a seeded schedule, so "sometimes wrong, sometimes idk"
 * happens at a steady rate and a re-run of the same lesson gets the same
 * moods. A long or confusing tutor turn makes disengaging more likely.
 * No prompt here ever contains the real student's name.
 *
 * The judge (claude-opus-5-5) reads the finished transcript and returns JSON.
 * PASS = engagement >= 3 AND would_quit false AND no tutor question that fails
 * question_matches_what_was_just_taught.
 */

const STUDENT_MODEL = 'claude-haiku-4-5-20251001';
const JUDGE_MODEL = 'claude-opus-5-5';
const LONG_TURN_WORDS = 50;

// Small seeded generator (mulberry32), seeded from the lesson id.
function seeded(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) { h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
  let a = h >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const MOODS = {
  try:      'Try to answer properly, from what the tutor has just said, in a few words. If it needs a calculation, you are weak at mental arithmetic, so you may get it wrong.',
  wrong:    'Give a wrong answer: a plausible mix-up of something the tutor said, or a sum done wrong. Keep it short and sound fairly sure.',
  idk:      'You do not know. Say "idk" or "no idea" or similar.',
  offtopic: 'Drift off topic: say something about your phone, your friends, food, being tired or the weekend. One short line.',
  minimal:  'Give the smallest possible reply, like "ok", "k", "yeah" or "what?". Do not answer the question.',
  bored:    'The last message was too long or confusing and you have lost interest. Reply flat and short, e.g. "this is long", "huh?", "can we skip this", or just "k".',
};
const WEIGHTS = [['try', 0.48], ['wrong', 0.18], ['idk', 0.12], ['offtopic', 0.1], ['minimal', 0.12]];

function makeStudent({ lessonTitle, subject }) {
  const rnd = seeded(`${subject}/${lessonTitle}`);
  const system =
    `You are role-playing a 15-year-old student in England, learning ${subject} ("${lessonTitle}") for the first time ` +
    `with an online AI tutor. You are easily bored, weak at mental arithmetic, and you do not like reading long messages. ` +
    `You only know what the tutor has told you in this conversation, plus everyday knowledge. ` +
    `You type like a teenager on a phone: short, lower case, little punctuation, usually 1 to 8 words, never more than 15. ` +
    `Never write anything but your reply. Never mention being an AI or role-playing. Never give yourself a name.`;
  return {
    system,
    // Picks this turn's mood. tutorText is the message being answered.
    mood(tutorText, phase) {
      if (phase === 'checkin') return rnd() < 0.5 ? 'checkin-no' : 'checkin-yes';
      if (phase === 'closing') return 'closing';
      const words = String(tutorText || '').split(/\s+/).filter(Boolean).length;
      if (words > LONG_TURN_WORDS && rnd() < 0.6) return 'bored';
      let x = rnd();
      for (const [m, w] of WEIGHTS) { if ((x -= w) < 0) return m; }
      return 'try';
    },
    instruction(mood) {
      if (mood === 'checkin-no') return 'The tutor asked if you want them to just tell you the rest. Say no, briefly.';
      if (mood === 'checkin-yes') return 'The tutor asked if you want them to just tell you the rest. Say yes, briefly.';
      if (mood === 'closing') return 'The lesson is over. You want to go. Reply very briefly (e.g. "ok thanks", "no bye").';
      return MOODS[mood];
    },
    // history: [{who:'tutor'|'student', text}], last item is the tutor's message to answer.
    body(history, mood) {
      const recent = history.slice(-8);
      while (recent.length && recent[0].who !== 'tutor') recent.shift();
      const messages = recent.map(h => ({ role: h.who === 'tutor' ? 'user' : 'assistant', content: h.text || '…' }));
      messages[messages.length - 1] = { role: 'user', content: `${messages[messages.length - 1].content}\n\n[How to answer this time: ${this.instruction(mood)}]` };
      return { model: STUDENT_MODEL, max_tokens: 60, system, messages };
    },
  };
}

function clean(reply) {
  return String(reply || '').replace(/^["'\s]+|["'\s]+$/g, '').split('\n')[0].slice(0, 200) || 'idk';
}

// ---------- judge ----------

const JUDGE_SCHEMA = `{
  "engagement": <integer 1-5: how engaged a bored 15-year-old would stay>,
  "engagement_quote": "<transcript line this rests on>",
  "would_quit": false | { "turn": "<turn label, e.g. T7>", "quote": "<transcript line>" , "why": "<short>" },
  "turns": [
    { "turn": "<T label>", "on_topic": true|false, "question_matches_what_was_just_taught": true|false|null,
      "too_long": true|false, "confusing": true|false, "quote": "<the transcript line the judgement rests on>", "note": "<short, only if something is false or true-bad>" }
  ],
  "fixes": [ { "target": "<lesson field path, e.g. keyPoints[2].content, or shared-code behaviour, e.g. teach-core: re-ask either/or questions>",
               "change": "<concrete change>", "quote": "<transcript line>" } ]
}`;

function judgeBody({ lessonTitle, subject, lessonFields, transcript, extra }) {
  const system =
    `You judge a tutoring session for a 15-year-old who is easily bored and weak at mental arithmetic, learning ${subject}. ` +
    `You are strict and concrete. Reply with JSON only, no prose and no code fence.`;
  const user = [
    `Lesson: "${lessonTitle}". Its fields (for naming fixes; " […]" means this outline cut a long field short — the lesson file itself is complete):`,
    lessonFields,
    '',
    'Transcript. T = tutor turn, S = student turn:',
    transcript,
    extra || '',
    '',
    'Judge every tutor turn (every T label). question_matches_what_was_just_taught: does the question the tutor asks at the end of that turn test what the tutor taught in that turn or just before? null if the turn asks no question (greeting, goodbye, check-in offer).',
    'too_long: over about 60 words or more than the student would read. confusing: unclear wording, wrong term, contradiction, or a factual error.',
    'would_quit: the first turn at which this student would most likely close the app, or false.',
    'Give at most 5 fixes, most important first; each names a lesson field path or a shared-code behaviour.',
    'Every judgement quotes the transcript line it rests on, word for word.',
    '',
    'Return exactly this JSON shape:',
    JUDGE_SCHEMA,
  ].join('\n');
  return { model: JUDGE_MODEL, max_tokens: 12000, system, messages: [{ role: 'user', content: user }] };
}

function parseJudge(text) {
  const t = String(text || '').trim().replace(/^```(?:json)?\s*|\s*```$/g, '');
  const a = t.indexOf('{'), b = t.lastIndexOf('}');
  return JSON.parse(t.slice(a, b + 1));
}

function verdict(j) {
  const mismatched = (j.turns || []).filter(t => t.question_matches_what_was_just_taught === false);
  const reasons = [];
  if (!(j.engagement >= 3)) reasons.push(`engagement ${j.engagement}`);
  if (j.would_quit) reasons.push(`would quit at ${j.would_quit.turn || '?'}`);
  if (mismatched.length) reasons.push(`question does not match what was taught: ${mismatched.map(t => t.turn).join(', ')}`);
  return { pass: !reasons.length, reasons };
}

// Lesson fields as path: text lines, short enough for the judge. A field cut
// short ends in " […]" so the judge does not report the lesson as truncated
// (first-pass judges did, for p1-conservation and p1-heating).
function lessonFieldLines(data) {
  const out = [];
  const short = s => (s.length > 400 ? `${s.slice(0, 400)} […]` : s);
  const walk = (v, p) => {
    if (typeof v === 'string') { if (!/^(id|topic|url|icon|searchQuery|diagram)$/.test(p.split('.').pop())) out.push(`${p}: ${short(v.replace(/<[^>]+>/g, '').replace(/\s+/g, ' '))}`); }
    else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${p}[${i}]`));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) { if (k !== 'videos' && k !== 'videoLinks') walk(x, p ? `${p}.${k}` : k); }
  };
  walk(data, '');
  return out.join('\n');
}

module.exports = { STUDENT_MODEL, JUDGE_MODEL, makeStudent, clean, judgeBody, parseJudge, verdict, lessonFieldLines };
