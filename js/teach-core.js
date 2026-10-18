/* ============================================================
   TEACH-CORE.JS — Teach mode logic shared by the browser and Node
   The part of teach.js that decides what happens after each reply
   and builds every prompt the tutor model is sent. No DOM, no
   storage, no network: the model call is passed in. teach.js uses
   it in the browser; tools/teach-sim.js uses it in Node.
   Moved out of teach.js unchanged (see the check D note in
   docs/STATE.md for how that was proved).
   ============================================================ */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.TeachCore = factory();
})(typeof self !== 'undefined' ? self : this, function () {

// Tutor model (brief 2026-10-17, decided by Jason): Sonnet, on by default.
// false keeps the old Haiku request exactly. js/app.js (through teach.js),
// tools/teach-sim.js and tools/site-test.js all read the model from here.
const TUTOR_SONNET = true;
const TUTOR_MODEL_SONNET = 'claude-sonnet-5-5';
const TUTOR_MODEL_HAIKU  = 'claude-haiku-4-5-20251001';
// The model fields of a tutor request. Sonnet 5.5 thinks by default, and its
// thinking would come out of the tutor's tight max_tokens; "between_tools"
// is its thinking-off setting. The Haiku request has no extra fields.
function tutorParams(sonnet = TUTOR_SONNET) {
  return sonnet ? { model: TUTOR_MODEL_SONNET, thinking: { type: 'between_tools' } }
                : { model: TUTOR_MODEL_HAIKU };
}
const TUTOR_MODEL = tutorParams().model;

// env.call(system, user, maxTokens) → Promise<string>: one model call.
function create(env) {
  const AI = { call: (sys, user, tokens) => env.call(sys, user, tokens) };

  // Task 2.3 (runbook v2) shared fixes, on by default. create({ call, fix23: false })
  // keeps the earlier behaviour exactly: the student is named in the prompts,
  // a reply still too long after the retries is sent long, and only
  // "Great question"-style openers are stripped.
  const FIX23 = env.fix23 !== false;
  // Task 2.5c (runbook v2) shared fix, on by default. create({ call, fix25: false })
  // keeps the earlier behaviour: on a teaching turn, a question that offers an
  // either/or choice ("from A to B, or from B to A?") or a reply with no
  // question at all is no longer asked for again.
  const FIX25 = env.fix25 !== false;
  // Bored-student tester fixes (2026-10-17), on by default. create({ call, fixT4: false })
  // keeps the earlier prompts. Found by tools/teach-sim.js --persona bored and
  // tools/site-test.js: the tutor asked for a term before saying it, opened a
  // reply to a wrong or confused answer with "Right", treated "huh?" or "this
  // is long" as an answer, and taught on after she asked to stop.
  const FIX_T4 = env.fixT4 !== false;
  // Teach-then-ask (brief 2026-10-17, step 5). Off by default since brief
  // docs/briefs/2026-10-17-tutor-flow.md step 1 (it made the tutor read a
  // sentence and ask it straight back); create({ call, teachThenAsk: true })
  // switches it on. Before each teaching turn
  // the code picks the next untaught sentence(s) of the key point's content and
  // tells the tutor to teach them first, then ask one question whose answer is
  // in them. The tutor adds a hidden "ANSWER:" line; if that answer is not in
  // anything it has said, it is asked once to try again. A key point is covered
  // only when every one of its sentences has been taught.
  const TEACH_THEN_ASK = env.teachThenAsk === true;
  // Tutor flow fixes (brief docs/briefs/2026-10-17-tutor-flow.md step 3), on by
  // default. create({ call, flowFix: false }) keeps every prompt, decision and
  // state exactly as before (tools/check-flag-identical.js). With it on:
  // (a) after a correct answer the reply's first sentence says so and what was
  // right; (b) the "just tell you the rest?" check-in comes only after a wrong
  // answer, an "idk" or two short or off-topic replies in a row; (c) a question
  // she answered correctly is recorded and never asked again; (d) "just tell
  // me" / yes at the check-in tells her the whole of the key point, then moves
  // on; (e) "skip" moves to the next key point at once, saying what was
  // skipped; (f) the closing message says which points she worked through and
  // which she was told or skipped; (g) numbers and units are copied from the
  // lesson. Her answer is marked by one short model call (CORRECT / PARTLY /
  // WRONG / IDK / OTHER); if that call fails, the word match decides as before.
  const FLOW_FIX = env.flowFix !== false;
  // P3 tester fixes (runbook 2.5c2, 2026-10-18), on by default with FLOW_FIX.
  // create({ call, pauseFix: false }) keeps the old path. (a) "can we do this
  // later", "can we stop", "gotta go": a fixed short goodbye with no question
  // and no model call; her place is kept and she carries on when she next
  // writes. (b) once she has said the replies are too long, a "tell me the
  // rest" gives only the main facts of the point in at most four short
  // sentences (90 words), not the whole content, and every other reply is
  // held to 40 words.
  const PAUSE_FIX = FLOW_FIX && env.pauseFix !== false;
  // First-time learner (brief docs/briefs/2026-10-18-first-time-learner.md
  // step 2), on by default. create({ call, firstTime: false }) keeps every
  // prompt, decision and state exactly as before (tools/check-flag-identical.js).
  // With it on: (a) the lesson opens with one everyday question to find out
  // what she already knows, using no term the lesson teaches, and her answer
  // sets where the tutor starts; (b) at most one new term per message, each
  // explained in everyday words the first time; (c) concrete first, then the
  // name, then the rule or graph; (d) no question whose answer is in the same
  // or the previous message; (e) a basic idea she does not have is taught from
  // the lesson's "basics" field first; (f) a key point's diagram is shown in
  // the conversation when its teaching starts, and the tutor refers to it.
  const FIRST_TIME = env.firstTime !== false;
  // The diagram is shown inside the conversation (js/teach.js
  // TEACH_INLINE_DIAGRAMS); the tutor is told about it only when it is.
  const INLINE_DIAGRAMS = FIRST_TIME && env.inlineDiagrams !== false;
  const STUDENT_NAME = env.studentName || 'Mabel';   // used only to filter it out of replies
  const WHO     = FIX23 ? 'the student' : 'Mabel';   // how prompts refer to her
  const WHO_CAP = FIX23 ? 'The student' : 'Mabel';
  const LABEL   = FIX23 ? 'Student' : 'Mabel';       // speaker label in conversation history

  // Lesson state. teach.js owns these and hands them over with bind()
  // whenever it replaces one; the functions below read and mutate them.
  let _data   = null;
  let _points = [];
  let _state  = null;
  function bind(data, points, state) { _data = data; _points = points; _state = state; }

  const HISTORY_TURNS     = 6;
  const RECAP_TURNS       = 24;  // a point now takes several exchanges — the recap must see all of them
  const CHECKIN_AFTER     = 4;   // exchanges on one point before asking whether she wants just to be told the rest
  const EXTENSION_EXCHANGES = 2; // hard limit if she keeps working on it instead — then the rest is told and the point advances

  // Reply length: max_tokens is the real ceiling — a system-prompt instruction
  // alone won't hold to a hard limit. ~60 words is roughly 90-100 tokens of
  // English; MAX_TOKENS_REPLY leaves just enough room for that and no more.
  const MAX_REPLY_WORDS   = 60;
  const RETRY_MAX_WORDS   = 40;
  // Headroom above the word limits: the word count is what keeps replies short,
  // while a tight token cap just chops sentences in half. Too tight a cap was
  // making the shortening retry itself come back cut off.
  const MAX_TOKENS_REPLY  = 220;
  const MAX_TOKENS_RETRY  = 160;
  const MAX_TOKENS_RECAP  = 160;

  const STOPWORDS = new Set([
    'the','a','an','is','are','was','were','to','of','in','on','and','or','it','that',
    'this','with','for','as','by','be','been','being','has','have','had','not','no',
    'do','does','did','you','your','i','we','they','he','she','them','their','its',
    'can','could','would','should','will','shall','from','at','but','if','so','than',
    'then','because','when','which','who','what','where','how','why','also','into',
    'about','these','those','there','all','any','some','just','like','get','got',
    'one','two','three','more','most','over','out','up','down','off','still','only',
    'very','really','think','know','yeah','yes','okay','ok','well','maybe'
  ]);

  function _stripHtml(html) {
    return (html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  // "Physical barriers — your first line of defence" -> "Physical barriers"
  function _shortHeading(h) { return String(h || '').split(' — ')[0]; }

  function _contentWords(text) {
    return ((text || '').toLowerCase().match(/[a-z']{3,}/g) || [])
      .filter(w => !STOPWORDS.has(w));
  }

  function _buildPointWordSet(kp) {
    const parts = [kp.heading, _stripHtml(kp.content)];
    (kp.keyTerms || []).forEach(t => parts.push(t.term, t.def));
    return new Set(_contentWords(parts.join(' ')));
  }

  // Crude plural folding so "pathogens" matches "pathogen", "antibodies"
  // matches "antibody". Applied to both sides, so odd stems still line up.
  function _stem(w) {
    if (w.length > 4 && w.endsWith('ies')) return w.slice(0, -3) + 'y';
    if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
    return w;
  }
  function _stems(text) { return _contentWords(text).map(_stem); }

  // Each key term of a point is one part that has to be taught before the
  // point counts as covered.
  //   words — what her answer can use to show she's engaged with this part:
  //           the term itself plus the words that are distinctive to its
  //           definition (words shared by most of the point's definitions,
  //           like "pathogens", would let any answer pass).
  //   cues  — the term's own words, minus the point's heading words. If her
  //           answer to a different part uses one of these, this part counts
  //           too — she has shown it without being asked.
  function _buildFacts(kp) {
    // A term marked referenceOnly in the lesson file is vocabulary she needs
    // available, not something this point sets out to teach — a glossary word
    // used across the whole lesson, say. It never becomes a required fact, so
    // it can't gate the point, in any lesson. It still appears in the Key Terms
    // sidebar, which reads keyTerms directly rather than facts.
    const terms = (kp.keyTerms || []).filter(t => t.referenceOnly !== true);
    const heading = new Set(_stems(kp.heading));
    const defWords = terms.map(t => new Set(_stems(t.def)));
    const df = new Map();
    defWords.forEach(s => s.forEach(w => df.set(w, (df.get(w) || 0) + 1)));
    return terms.map((t, i) => {
      const own = _stems(t.term);
      const words = new Set(own);
      defWords[i].forEach(w => { if (df.get(w) < 3) words.add(w); });
      return { term: t.term, def: t.def, words, cues: new Set(own.filter(w => !heading.has(w))) };
    });
  }

  function _answers(reply, set) {
    if (_wordCount(reply) <= 3) return false;
    return _stems(reply).some(w => set.has(w));
  }

  // A reply counts as substantive only if it's more than three words
  // AND touches at least one content word from the point being taught.
  function _isSubstantive(reply, wordSet) {
    const words = (reply || '').trim().split(/\s+/).filter(Boolean);
    if (words.length <= 3) return false;
    return _contentWords(reply).some(w => wordSet.has(w));
  }

  // Strip markdown formatting before counting words, so **bold** or `code`
  // markers don't inflate — or hide — the true word count.
  function _stripMarkdown(text) {
    return (text || '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/__(.*?)__/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/_(.*?)_/g, '$1')
      .replace(/`{1,3}([^`]*)`{1,3}/g, '$1')
      .replace(/^#{1,6}\s+/gm, '')
      .replace(/^[-*+]\s+/gm, '')
      .replace(/^\d+\.\s+/gm, '')
      .trim();
  }

  function _wordCount(text) {
    return (text || '').trim().split(/\s+/).filter(Boolean).length;
  }

  // A reply cut off by max_tokens usually stops mid-clause, without
  // sentence-ending punctuation — treat that as "too long" too, not just
  // literal word count over the limit.
  function _looksTruncated(text) {
    const t = (text || '').trim();
    return !!t && !/[.!?]["')]?$/.test(t);
  }

  // Hard rule: a teaching question must never be answerable with a bare
  // "yes" or "no" — "Can you tell me what happens?" / "Do particles move?" /
  // "Is it A or B?" all let her say "yes" without showing anything. Offers
  // ("would you like me to…?") are fine: there yes/no IS the answer.
  const YES_NO_OPENER = /^(?:do|does|did|is|are|was|were|am|can|could|will|would|should|shall|has|have|had|may|might|must)(?:n't)?\b/i;
  const LEAD_IN       = /^(?:(?:so|and|now|ok|okay|right|then|but|well|quick question)\b[\s,:]*)+/i;
  const OFFER         = /^(?:would you like|shall i|should i|do you want me to|want me to)\b/i;
  const TAG_QUESTION  = /^(?:do you think|would you say|do you reckon|can you guess|right|yeah)$/i;
  function _asksYesNo(text) {
    const questions = (String(text || '').match(/[^.!?:;—]*\?/g) || [])
      .map(q => q.replace(/^[\s"'(]+|\?$/g, '').replace(LEAD_IN, '').trim());
    return questions.some(q => {
      if (OFFER.test(q)) return false;
      if (YES_NO_OPENER.test(q)) return true;
      // "If you heat it, do the particles speed up?" — the yes/no part comes
      // after a comma. A trailing tag ("…, do you think?") is not that.
      return q.split(',').slice(1).map(s => s.trim())
        .some(s => !TAG_QUESTION.test(s) && !OFFER.test(s) && YES_NO_OPENER.test(s));
    });
  }

  // Task 2.5c: an either/or question hands her the answer as one of two
  // options to pick from. Same test as tools/teach-sim.js uses to score it:
  // "or" anywhere in the question. A false hit only costs one more ask.
  function _asksEitherOr(text) {
    const questions = String(text || '').match(/[^.!?:;—]*\?/g) || [];
    return questions.some(q => !OFFER.test(q.replace(/^[\s"'(]+/, '').replace(LEAD_IN, '').trim()) && /\bor\b/i.test(q));
  }
  function _asksNothing(text) { return !/\?/.test(String(text || '')); }
  // More than one question ("You know that feeling when…? … What transfers?")
  // leaves her unsure which to answer, even when the first is rhetorical.
  function _asksMoreThanOne(text) { return (String(text || '').match(/\?/g) || []).length > 1; }

  // Turns whatever AI.call threw into a plain-English cause. AI.call throws
  // NO_KEY / BAD_KEY (401) / the bare HTTP status ("429") / a fetch TypeError.
  function _describeError(e) {
    const msg = String((e && e.message) || e);
    if (msg === 'NO_KEY')  return 'no API key saved';
    if (msg === 'BAD_KEY') return 'bad key — Anthropic rejected it (401)';
    if (msg === '429')     return 'rate limit hit (429)';
    if (msg === '529')     return 'Anthropic overloaded (529)';
    if (msg === '400')     return 'bad request (400) — malformed request or billing problem';
    if (msg === '403')     return 'key not permitted (403)';
    if (/^[45]\d\d$/.test(msg)) return `HTTP error ${msg}`;
    if ((e && e.name === 'AbortError') || /timeout|timed out/i.test(msg)) return 'timeout';
    if (e instanceof TypeError || /failed to fetch|network|load failed/i.test(msg)) {
      return 'network failure — the request never reached Anthropic (offline, blocked, or CORS)';
    }
    return `unrecognised error: ${msg}`;
  }

  function _logError(context, e) {
    console.error(`[Teach] ${context} failed — ${_describeError(e)}`, e);
  }

  function _pointBrief(point) {
    const terms = (point.keyTerms || []).map(t => `${t.term}: ${t.def}`).join(' | ');
    return [
      `Key point: ${point.heading}`,
      `Content: ${_stripHtml(point.content)}`,
      terms ? `Key terms: ${terms}` : ''
    ].filter(Boolean).join('\n');
  }

  // Per point, per key term:
  //   answered — she engaged with it herself
  //   told     — she missed it twice, so the tutor stated it plainly instead
  // Either way the conversation has covered it, so both count towards the
  // point being covered. A part is never abandoned: that used to let a point
  // advance while still marked "not covered", leaving no checkmark and no
  // terms in the sidebar even though the conversation had moved on.
  function _freshFacts(i, done) {
    const n = _points[i].facts.length;
    return { answered: Array(n).fill(!!done), told: Array(n).fill(false) };
  }

  function _factDone(f, j) { return f.answered[j] || f.told[j]; }

  function _freshState() {
    return {
      transcript: [],
      coverage: _points.map(() => null),
      currentPointIndex: 0,
      retriedCurrent: false,
      complete: false,
      // Where she was in the normal sequence when she jumped elsewhere:
      // null = not on a detour, a point index = go back there, -1 = she had
      // finished the lesson, so go back to "all done".
      resumeIndex: null,
      facts: _points.map((p, i) => _freshFacts(i, false)),
      // Exchanges spent on the current point, and where she is in the
      // check-in that fires once that reaches CHECKIN_AFTER.
      turnsOnPoint: 0,
      checkinAsked: false,
      extensionLeft: null,
      // Whether she has already been asked the closing "anything else?"
      // question. Without this, free mode asks it again every single turn.
      wrapOffered: false,
      // She has had the goodbye, so the box is swapped for buttons until she
      // asks to type again.
      farewell: false,
      // TEACH_THEN_ASK: per point, which sentences of its content have been taught.
      ...(TEACH_THEN_ASK ? { taught: _points.map(p => Array(p.sentences.length).fill(false)) } : {}),
      // FLOW_FIX: questions she answered correctly, the run of short or
      // off-topic replies, and per point how it ended (worked / told / skipped).
      ...(FLOW_FIX ? { flow: _freshFlow() } : {}),
      // FIRST_TIME: the opening question about what she already knows is
      // still waiting for her answer; known = that answer.
      ...(FIRST_TIME ? { firstTime: { probed: false, known: '' } } : {}),
    };
  }

  function _freshFlow() { return { correctQs: [], correctAs: [], shortRun: 0, how: _points.map(() => null) }; }
  // FLOW_FIX state (a state saved before it existed starts empty).
  function _flow() {
    if (!_state.flow || typeof _state.flow !== 'object') _state.flow = _freshFlow();
    const f = _state.flow;
    if (!Array.isArray(f.correctQs)) f.correctQs = [];
    if (!Array.isArray(f.correctAs)) f.correctAs = [];
    if (!Number.isInteger(f.shortRun)) f.shortRun = 0;
    if (!Array.isArray(f.how) || f.how.length !== _points.length) f.how = _points.map(() => null);
    return f;
  }

  // A new point starts with a clean exchange count and no check-in pending.
  function _resetPointPacing() {
    _state.turnsOnPoint = 0;
    _state.checkinAsked = false;
    _state.extensionLeft = null;
  }

  // Saved progress from before parts were tracked, or from a lesson file whose
  // key terms have since changed, is rebuilt from the point's coverage.
  function _restoreFacts(saved, coverage) {
    return _points.map((p, i) => {
      const f = saved && saved[i];
      const n = p.facts.length;
      const other = f && (f.told || f.skipped); // "skipped" is the old name for the same slot
      if (f && Array.isArray(f.answered) && Array.isArray(other)
          && f.answered.length === n && other.length === n) {
        return { answered: f.answered.map(Boolean), told: other.map(Boolean) };
      }
      return _freshFacts(i, coverage[i] === true);
    });
  }

  // The part of point i to teach next: the first one not yet covered either way.
  function _targetFactIndex(i) {
    const f = _state.facts[i];
    return f.answered.findIndex((a, j) => !_factDone(f, j));
  }

  // ── Prompting ────────────────────────────────────────────────
  // The lesson's commonMistakes are lesson-wide: sent whole, they hand the
  // model later points' material (antibodies, antigens, phagocytosis) while
  // she is still on an early point, and it teaches from them. Only mistakes
  // that are really about the current point are passed on.
  function _pointStems(i) {
    const p = _points[i];
    return new Set(_stems(`${p.heading} ${_stripHtml(p.content)} ${p.facts.map(f => f.term + ' ' + f.def).join(' ')}`));
  }

  // Words common to most of the lesson ("pathogen", "immune", "body") say
  // nothing about which point a mistake belongs to — a mistake has to share
  // words that are distinctive to this point.
  function _genericStems() {
    const df = new Map();
    _points.forEach((p, i) => _pointStems(i).forEach(w => df.set(w, (df.get(w) || 0) + 1)));
    return new Set([...df.keys()].filter(w => df.get(w) >= Math.max(3, _points.length - 1)));
  }

  // The vocabulary that actually identifies a point: its key terms and heading.
  function _termStems(i) {
    const p = _points[i];
    return new Set(_stems(`${p.heading} ${p.facts.map(f => f.term).join(' ')}`));
  }

  // A mistake belongs to this point only if it uses this point's own term
  // vocabulary. Several of the lesson's mistakes contrast two points
  // ("phagocytes ENGULF; lymphocytes produce ANTIBODIES") — those are dropped
  // while she is on the earlier one, or they hand her the later point's answer.
  function _mistakesFor(idx) {
    const all = _data.commonMistakes || [];
    if (idx == null || !all.length) return [];
    const own = _pointStems(idx), ownTerms = _termStems(idx), generic = _genericStems();
    const laterTerms = new Set();
    _points.forEach((p, i) => { if (i > idx) _termStems(i).forEach(w => { if (!ownTerms.has(w)) laterTerms.add(w); }); });
    return all.filter(m => {
      const st = _stems(m);
      if (st.some(w => laterTerms.has(w))) return false;
      if (!st.some(w => ownTerms.has(w) && !generic.has(w))) return false;
      return new Set(st.filter(w => own.has(w) && !generic.has(w))).size >= 2;
    });
  }

  function _laterPointsLine(idx) {
    if (idx == null) return '';
    // Names only — a full heading like "Lymphocytes — antibodies and antitoxins"
    // would hand over the very material this line exists to fence off.
    const later = _points.slice(idx + 1).map(p => `"${_shortHeading(p.heading)}"`);
    return later.length
      ? `Still to come later in this lesson, each with its own turn — do NOT teach, explain or preview any of it yet: ${later.join(', ')}.`
      : '';
  }

  function _buildSystemPrompt(teachIdx) {
    const mistakes = _mistakesFor(teachIdx);
    return [
      FIX23
        ? `You are a warm, encouraging GCSE tutor teaching a 15-year-old student who is studying for her GCSEs, through natural back-and-forth conversation rather than slides. You do not know her name: never use a name or call her by one.`
        : `You are a warm, encouraging GCSE tutor teaching Mabel, a 15-year-old studying for her GCSEs, through natural back-and-forth conversation rather than slides.`,
      `Lesson: "${_data.title}".`,
      `Lesson overview: ${_stripHtml(_data.intro || '')}`,
      mistakes.length
        ? `Common mistakes on this particular key point — watch for these and gently correct if she makes one: ${mistakes.join(' | ')}`
        : '',
      teachIdx == null ? '' : `Teach ONLY the key point given below, using only its own content and key terms. Do not bring in, name or preview material from any other key point, even if the conversation heads that way. If she asks about something from a later key point, answer in one short line, tell her it is coming up soon, and return to the current point's question.`,
      _laterPointsLine(teachIdx),
      `Rules: explain ideas a little at a time in plain, friendly language. Ask exactly ONE question at a time and never present a list of options for her to pick from. Keep every reply very short — one to three sentences before your question, no more than about 60 words total. If she asks about something off-topic or unrelated, answer it briefly and kindly, then guide her back to the lesson — never refuse to answer and never tell her to stay focused or scold her for going off-topic. Never open a reply by praising or rating what she said — no 'Great question', 'Good question', 'Great!', 'Nice!', 'Love that'. Only call something a question if she actually asked one. Praise only a correct answer, and then say briefly what was right, e.g. 'Right — they vibrate in place.'`,
      `Every question you ask must be answerable in one or two words, and its answer must be unambiguous. Ask one thing only. Never join two questions with "or" — "does that make sense, or shall I explain it differently?" cannot be answered by "no". HARD RULE: a question about the content must never be answerable with "yes" or "no". Never start it with do, does, is, are, can, could, will or would — not "can you tell me what happens?", not "do particles in a gas move faster?", not "is it A or B?". Ask what, which, why, how, where or when, so the answer is a specific word or short phrase. If you want to check she has followed you, ask a question about the content itself rather than about her understanding. If you genuinely need to offer her a choice between two things, ask about only one of them: "would you like me to explain that differently?" — and let her say yes or no.`,
      FIX_T4 ? [
        `Teach before you ask: never ask her to name a term, number, unit or fact that you have not already said in this conversation. Say the new idea first, in plain words, then ask her to use it or explain it.`,
        `Mark every answer honestly. If her answer is wrong or only partly right, say so plainly first ("Not quite —"), then give the right idea and the reason in one sentence. Never start a reply to a wrong, partly wrong or confused answer with "Right", "Yes", "Exactly", "Correct" or "Spot on". If it is right, say what was right in a few words.`,
        `If she says she is confused or that it is too long ("huh?", "what?", "this is long", "i don't get it"), that is not an answer: say the same idea again in ONE shorter, simpler sentence, then ask a simpler question about it.`,
        `If she says she wants to stop, is tired, hungry or bored, say in one short line that that's fine and she can come back to this lesson any time. Then give one short sentence and one easy question, in case she carries on.`,
        `Only state facts that are in the key point's content and key terms. If you are not sure a fact is right, leave it out.`,
        `If you offered to explain or show something and she said yes, your next reply does exactly that, before anything new. If she said no, do not explain it; move on.`,
        `Once she has said it is too long, or that she is bored or wants to skip, keep every later reply to two short sentences and one question.`,
        TEACH_THEN_ASK
          ? `After you teach an idea, ask about what you have just said: the answer to your question must be in your own words before it. If her answer shows a wrong idea, name the wrong idea and correct it with one reason before you move on.`
          : `After you teach an idea, ask her to use it (for example on a small number or an everyday case), not to repeat the words you just said. If her answer shows a wrong idea, name the wrong idea and correct it with one reason before you move on.`,
      ].join('\n') : '',
      FLOW_FIX ? [
        `When her answer is right, the first sentence of your reply says so and names what was right ("Yes — chemical energy is right."), before anything else.`,
        `Never ask again a question she has already answered correctly in this lesson, in the same or other words.`,
        `Numbers and units: copy every number and unit exactly as the key point's content and key terms write them. Never recalculate, convert, round or rewrite a number or unit. Never give an example, a classification or a figure that the content does not give.`,
      ].join('\n') : '',
      FIRST_TIME ? _firstTimeRules() : '',
    ].filter(Boolean).join('\n');
  }

  // ── First-time learner (FIRST_TIME) ──────────────────────────
  // The lesson's "basics": [{ idea, text }] — what a beginner does not yet have.
  function _basics() {
    return Array.isArray(_data && _data.basics) ? _data.basics.filter(b => b && b.idea && b.text) : [];
  }

  function _firstTimeRules() {
    const basics = _basics();
    return [
      `She is meeting this topic for the first time. She knows everyday life, not the subject's words. Never assume she knows a term.`,
      `In each message bring in at most ONE new term or idea. The first time you use a term, explain it in everyday words, with an everyday comparison where one helps, before you use it in a question. Never use a term you have not explained in this conversation, unless she has used it herself. Units are terms too (volts, amps, ohms, joules, watts): say what a unit measures the first time you use it.`,
      `Go from the concrete to the abstract: first what you would see, feel or measure; then the name for it; then the rule, equation or graph.`,
      `Never ask a question whose answer is written in your message or in your last message: she would only copy it back. Describing the same situation in other words ("the wrong way round", then "wired in backwards") is still copying. Ask her to use the idea — on an everyday case, a small change ("what would happen if…"), or a reason in her own words.`,
      basics.length
        ? `If she says she does not know a basic idea, or her answer shows she does not have it, teach that idea first, from the basics below, in their plain words, then go on. Basics you may always use: ${basics.map(b => `${b.idea}: ${_stripHtml(b.text)}`).join(' | ')}\nWhen a message teaches one of these basics instead of the key point, add one last line on its own: "BASIC: " and the basic idea's name. That line is taken out before she sees the reply.`
        : `If she says she does not know a basic idea the lesson needs, explain it first in everyday words, then go on.`,
    ].join('\n');
  }

  // "huh?", "what?", "i dont get it", "this is long": a confused reply, not an answer.
  const CONFUSED = /^\W*(huh|what|wot|wdym|eh|confused|i\s*(don\W?t|dont) (get|understand)( it)?|i\W?m lost|this is (long|confusing))\W*$/i;
  function _saysConfused(text) { return CONFUSED.test(String(text || '').trim()); }

  function _ft() { return (_state && _state.firstTime) || { probed: true, known: '' }; }

  // Every term this lesson teaches (its key terms, and the names of its basics),
  // each with a pattern that finds it in a message (an acronym in brackets counts too).
  let _termCache = null;
  function _lessonTerms() {
    if (_termCache && _termCache.data === _data) return _termCache.list;
    const names = [];
    (_data.keyPoints || []).forEach(kp => (kp.keyTerms || []).forEach(t => t && t.term && names.push(t.term)));
    _basics().forEach(b => names.push(b.idea));
    // Fix round (2026-10-18): units count as terms too ("measured in volts (V)").
    _basics().forEach(b => { for (const m of _stripHtml(b.text).matchAll(/measured in ([a-z]+)(?: \(([^)]+)\))?/gi)) names.push(m[2] ? `${m[1]} (${m[2]})` : m[1]); });
    const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const seen = new Set(), list = [];
    for (const name of names) {
      const key = name.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      const forms = [name.replace(/\s*\(([^)]*)\)\s*/g, ' ').trim()];
      const acr = name.match(/\(([^)]+)\)/);
      // A one-letter acronym ("A", "W", "J") would match the word "a" or any lone letter.
      if (acr && !/^[A-Za-z]$/.test(acr[1].trim())) forms.push(acr[1].trim());
      const re = new RegExp(`(^|[^A-Za-z])(${forms.filter(Boolean).map(f => esc(f).replace(/\s+/g, '[\\s-]+')).join('|')})(e?s)?(?![A-Za-z])`, 'i');
      // A one-letter unit symbol after a number ("6 V"), matched with its case.
      const one = acr && /^[A-Za-z]$/.test(acr[1].trim()) ? new RegExp(`\\d\\s?${acr[1].trim()}(?![A-Za-z])`) : null;
      list.push({ term: name, re: one ? { test: s => re.test(s) || one.test(s) } : re });
    }
    _termCache = { data: _data, list };
    return list;
  }

  // Terms already in the conversation, said by the tutor or by her.
  function _termsMet() {
    const said = (_state.transcript || []).filter(t => t.role === 'assistant' || t.role === 'user').map(t => _stripMarkdown(t.text || '')).join('\n');
    return new Set(_lessonTerms().filter(t => t.re.test(said)).map(t => t.term));
  }

  function _newTermsIn(plain) {
    const met = _termsMet();
    return _lessonTerms().filter(t => !met.has(t.term) && t.re.test(plain)).map(t => t.term);
  }

  function _termsLine() {
    const met = _termsMet();
    const not = _lessonTerms().map(t => t.term).filter(t => !met.has(t));
    return [
      met.size ? `Terms she has already met in this conversation: ${[...met].join(', ')}.` : `She has not met any of this lesson's terms yet.`,
      not.length ? `Terms she has NOT met yet: ${not.join(', ')}. Use at most one of these in this message, and explain it in everyday words the first time.` : '',
    ].filter(Boolean).join(' ');
  }

  // A key point's diagram, if it has one and it has not yet been shown in the conversation.
  function _inlineDiagram(idx) {
    if (!INLINE_DIAGRAMS || idx == null || !_points[idx] || !_points[idx].diagram) return null;
    const id = _points[idx].diagram;
    return (_state.transcript || []).some(t => t.diagram === id) ? null : id;
  }

  function _diagramLine(idx) {
    const id = _inlineDiagram(idx);
    if (!id) return '';
    const p = _points[idx];
    const def = (_data.diagrams || []).find(d => d.id === id);
    const cap = p.diagramCaption || (def && def.caption) || '';
    return `A diagram appears under your message now${cap ? `: "${cap}"` : ''}. Refer to it in words in this message ("Look at the diagram: …") and teach from what it shows. Describe only what that caption says it shows: never describe a symbol, label, part or shape the caption does not name.`;
  }

  // The last tutor message taught a basic idea, not the key point (at most two in a row count).
  function _lastWasBasic() {
    const as = (_state.transcript || []).filter(t => t.role === 'assistant');
    const last = as[as.length - 1];
    if (!last || !last.basic) return false;
    const prev = as[as.length - 2];
    const prev2 = as[as.length - 3];
    return !(prev && prev.basic && prev2 && prev2.basic);
  }

  // The hidden "BASIC:" line, taken off the reply she sees.
  function _splitBasic(raw) {
    const k = String(raw || '').search(/(^|\n)\s*BASIC\s*:/i);
    if (k === -1) return { text: raw, basic: null };
    return { text: raw.slice(0, k).trim(), basic: raw.slice(k).replace(/^\s*BASIC\s*:\s*/i, '').split('\n')[0].trim() || 'basic' };
  }

  // One short call: is the answer to the question already in this message or the last one?
  async function _answerGiven(plain) {
    const q = (plain.match(/[^.!?]*\?\s*$/) || [''])[0].trim();
    if (!q) return false;
    const before = plain.slice(0, plain.length - q.length).trim();
    const prev = [...(_state.transcript || [])].reverse().find(t => t.role === 'assistant');
    const sys = `You check one message from a tutor to a student. Reply with one word only: YES or NO.`;
    const user = [
      prev ? `The tutor's previous message: "${_stripMarkdown(prev.text)}"` : '',
      `The tutor's new message, before its question: "${before}"`,
      `Its question: "${q}"`,
      `YES if the answer to the question is already stated, in the same or nearly the same words, in the new message before the question or in the previous message, so she could answer by copying it back. Also YES if the question only describes the same situation in other words ("the wrong way round" and "wired in backwards"; "in the dark" and "when evening comes"), so the stated answer still fits it. NO only if she has to apply the idea to a genuinely different case, work something out, or give a reason or example that was not stated.`,
    ].filter(Boolean).join('\n\n');
    try { return /\bYES\b/i.test(String(await AI.call(sys, user, 5) || '')); }
    catch (e) { _logError('answer check', e); return false; }
  }

  // Fix round (2026-10-18): one short call: which of these new terms does the
  // message use without saying what it means in everyday words? A failed call counts as none.
  async function _unexplainedIn(plain, terms) {
    const sys = `You check one message from a tutor to a student who is learning this topic for the first time. Reply with the words asked about that are not explained, separated by commas, or NONE.`;
    const user = `The message: "${plain}"\n\nWords she has not met before: ${terms.join(', ')}.\n\nWhich of these words does the message use without saying, in everyday words, what it means or what it measures? Using a word only after explaining it in the same message is fine. Reply with those words, or NONE.`;
    try {
      const raw = String(await AI.call(sys, user, 30) || '');
      if (/\bNONE\b/i.test(raw)) return [];
      return terms.filter(t => raw.toLowerCase().includes(t.replace(/\s*\(.*\)\s*/, '').toLowerCase()));
    } catch (e) { _logError('term check', e); return []; }
  }

  // What the next _callWithLengthGuard checks: { forbid: [terms] } for the
  // opening question, { teach: true } on a teaching turn.
  let _pendingFT = null;
  // The "BASIC:" tag of the reply the guard last returned (put on its transcript entry).
  let _lastBasicTag = null;

  // Notes and recaps aren't conversation: a note is passed on as a bracketed
  // aside, a recap is left out. By default the newest entry (her message that
  // is quoted separately in the prompt) is left off.
  function _recentHistoryBlock(includeNewest) {
    const base = includeNewest ? _state.transcript : _state.transcript.slice(0, -1);
    const recent = base.filter(t => t.role !== 'recap').slice(-HISTORY_TURNS);
    if (!recent.length) return '';
    return 'Recent conversation so far:\n' + recent.map(t =>
      t.role === 'note' ? `(${t.text})` : (t.role === 'user' ? LABEL : 'You') + ': ' + t.text
    ).join('\n');
  }

  function _buildUserPrompt(userText, decision) {
    const lines = [];
    const history = _recentHistoryBlock(false);
    if (history) lines.push(history);
    lines.push(`${WHO_CAP} just said: "${userText}"`);
    if (FLOW_FIX) {
      if (decision.mark === 'correct') lines.push(`Her answer is right. The FIRST sentence of your reply says so and names what was right, before anything else.`);
      if (decision.mark === 'partly') lines.push(`Her answer is partly right. The FIRST sentence of your reply says which part is right, then say what is missing.`);
      const qs = _state.flow && _state.flow.correctQs.length ? _state.flow.correctQs.slice(-8) : [];
      const as = _state.flow && _state.flow.correctAs ? _state.flow.correctAs.slice(-8) : [];
      if (qs.length && _teachIndex(decision) != null) lines.push(`Questions she has already answered correctly in this lesson, with her answers — never ask any of them again, in any words, and never ask a question whose answer is one she has already given: ${qs.map((q, k) => `"${q}" (she said: "${as[k - qs.length + as.length] || ''}")`).join(' | ')}`);
      // A question about something not yet said (mucus, an arrow, a diagram) leaves her guessing.
      if (_teachIndex(decision) != null) lines.push(`Your question may use only ideas and things you have already said to her, in this conversation or earlier in this reply. If it names something (a substance, a part, an arrow, a diagram), say what it is first.`);
    }
    if (FIRST_TIME && _teachIndex(decision) != null) {
      if (_ft().known && decision.kind !== 'start') lines.push(`What she said she already knew, at the start of the lesson: "${_ft().known}". Build on that.`);
      lines.push(_termsLine());
      const dl = _diagramLine(_teachIndex(decision));
      if (dl) lines.push(dl);
      // Tone fix: after "huh?" the reference lessons simplify warmly; a new apply-it question made it worse.
      if (_saysConfused(userText)) lines.push(`She is confused. Own it kindly ("Sorry, that was a lot"), then say the same idea again more simply, in one or two short sentences with an everyday picture. Then ask one easy question about what you have just said; this time it is fine if the answer is in your message. Do not move on to anything new.`);
    }

    if (decision.kind === 'retry') {
      lines.push(!decision.fact
        ? `Her reply didn't really engage with the key point below — too short, or off the topic. Gently explain this idea again, a different way, in a sentence or two, then ask about it again with a different question. One question only.`
        : decision.onTopic
          // What she said was about this key point and may be perfectly correct —
          // just not the part you asked. Re-explaining here reads as if she got it wrong.
          ? `What she said is about this key point and may well be right, but it doesn't answer the part you asked about. In ONE short sentence, acknowledge what she said as correct, then ask about that part again, more directly. Do not re-explain the point and do not repeat anything she has already covered.`
          : `Her reply didn't really engage with the part of the key point below that you just asked about — too short, or off the topic. Gently explain that part again, a different way, in a sentence or two, then ask about it again with a different question. One question only.`);
      lines.push(_pointBrief(decision.point), _coveredLine(decision.idx, decision.facts),
        _partLine(decision.fact), _remainingLine(decision.idx, decision.facts, decision.fact));
    } else if (decision.kind === 'start') {
      lines.push(`That is her answer to your opening question, which asked what she already knows about the everyday idea behind this lesson. It is not marked right or wrong. In ONE short sentence, respond to what she said: if something in it is useful, say what; if she does not know, say that is fine, you will start from the beginning. Then start teaching from where she is. If her answer shows she does not have one of the basics the first key point needs, teach that one basic idea, in everyday words with an everyday comparison, and ask one question that makes her use it. Otherwise introduce the first key point below in AT MOST TWO SENTENCES, starting from what she would see or measure, then ask one question about the part named below. Do not answer your own question.`);
      lines.push(_pointBrief(decision.point), _partLine(_openingFact(decision.idx)),
        _remainingLine(decision.idx, _state.facts[decision.idx], _openingFact(decision.idx)));
    } else if (decision.kind === 'checkin') {
      lines.push(`She has spent several exchanges on this key point and some of it is still to cover. Do NOT teach anything in this message and do not ask about any part of the topic. In ONE short, friendly line, ask her one question meaning "Do you want me to just tell you the rest of this one?" — yes means you will tell her the rest, no means she keeps working on it herself. It must be a single yes-or-no question — do not add "or shall we move on" or any second option. That question is the whole message.`);
      lines.push(_pointBrief(decision.point), _coveredLine(decision.idx, decision.facts));
    } else if (decision.kind === 'fact') {
      lines.push(`${decision.afterBasic ? `Her reply answers your question about a basic idea, not the key point. If it shows she has the idea, say so in a few words; if not, explain the idea once more in one short sentence. ` : ''}${decision.keepsWorking ? `She chose to keep working through this point herself, so carry on with it. ` : ''}${_toldLine(decision.toldNow) || (decision.keepsWorking || decision.afterBasic ? '' : `Acknowledge her reply naturally in one short sentence. `)}Then carry on with the same key point: teach the next part of it, named below, in AT MOST TWO SENTENCES, then ask one question about that part. Teach only this part now — the other parts come later. Do not answer your own question.`);
      lines.push(_pointBrief(decision.point), _coveredLine(decision.idx, decision.facts),
        _partLine(decision.fact), _remainingLine(decision.idx, decision.facts, decision.fact));
    } else if (decision.kind === 'next') {
      lines.push(`${_flowLead(decision) || _toldRestLine(decision.toldRest, _toldTexts(decision)) || _toldLine(decision.toldNow) || `Acknowledge her reply naturally in one short sentence. `}Then move on to the next key point below: introduce it in AT MOST TWO SENTENCES, starting from the first thing its content describes — do not explain the whole point — then ask one question about the part named below. Do not answer your own question.`);
      lines.push(_pointBrief(decision.point), _partLine(_openingFact(decision.nextIndex)),
        _remainingLine(decision.nextIndex, _state.facts[decision.nextIndex], _openingFact(decision.nextIndex)));
    } else if (decision.kind === 'resume') {
      lines.push(`${_flowLead(decision) || _toldRestLine(decision.toldRest, _toldTexts(decision)) || _toldLine(decision.toldNow) || `Acknowledge her reply naturally in one short sentence. `}Then take her back to where she was before she went off to look at something else: the key point below. She had already started it, so remind her of it briefly in AT MOST TWO SENTENCES, then ask one question about the part named below. Do not answer your own question.`);
      lines.push(_pointBrief(decision.point), _partLine(_openingFact(decision.nextIndex)),
        _remainingLine(decision.nextIndex, _state.facts[decision.nextIndex], _openingFact(decision.nextIndex)));
    } else if (decision.kind === 'complete') {
      lines.push(`${_flowLead(decision) || _toldRestLine(decision.toldRest, _toldTexts(decision)) || _toldLine(decision.toldNow) || `Acknowledge her reply naturally. `}${FLOW_FIX
        ? _closingLine(decision)
        : FIX_T4
        ? `Then say you have reached the end of this lesson, name in a few words one thing she got right, and close warmly in one short line. Do not say she has covered, learned or mastered everything, and do not list topics.`
        : `Then let her know all ${_points.length} key points in this lesson have now been covered, and close warmly in one short line.`} Do not ask a question. Do not offer practice questions. She can ask you anything further, or leave, whenever she likes.`);
    } else if (_state.wrapOffered) {
      lines.push(`${FLOW_FIX ? `This lesson has reached its end (${_howSummary()}). Never say she covered or got through all of it unless she worked through every point` : `All ${_points.length} key points in this lesson have already been covered`}, and you have ALREADY asked her whether she wants to go over anything else. Do not ask that again in any form — no "anything else?", no "does that feel clear?", no "shall we stop there?". Respond to what she actually said and then stop. If she shows she is finished (no, nothing, bye, thanks, I'm good), give ONE warm, complete goodbye and nothing after it — no question of any kind. A light sign-off such as "same time next week?" is fine as that closing line itself, but only as the goodbye.`);
    } else {
      lines.push(`${FLOW_FIX ? `This lesson has reached its end (${_howSummary()}). Never say she covered or got through all of it unless she worked through every point.` : `All ${_points.length} key points in this lesson have already been covered.`} Respond naturally and helpfully to whatever she said. Do not offer practice questions and do not present lettered or numbered options. Ask at most one closing question, and only if it is genuinely useful.`);
    }
    if (decision.chunk) lines.push(_teachLine(decision.chunk));
    return lines.filter(Boolean).join('\n\n');
  }

  function _trimToLastSentence(text) {
    const m = String(text || '').match(/^[\s\S]*[.!?]["')]?/);
    return m ? m[0].trim() : '';
  }

  // A stock opener ("Good point!") praises nothing in particular — and is
  // wrong when she didn't ask a question. Dropped from every reply; if that
  // would leave nothing, the reply is kept as it was.
  const STOCK_PRAISE = /^\s*(?:what an?\s+)?(?:great|good|excellent|brilliant|fantastic|awesome|nice|lovely)\s+(?:question|point|thinking|thought)\s*[!.]\s*/i;
  function _stripStockPraise(text) {
    return String(text || '').replace(STOCK_PRAISE, '') || text;
  }

  // Task 2.3: a bare opener ("Good —", "Great!", "Nice.", "Well done,") is
  // stock praise too, unless the words right after it say what was right
  // ("Good — lattice is right."). Removing it re-capitalises what follows.
  // Only an opener followed by punctuation counts: "Well done today" is a sign-off.
  const STOCK_OPENER = /^\s*(?:good|great|nice|well done)\s*[!.,:;—–-]+\s*/i;   // "Nice try", "Good luck" have no mark and stay
  const NAMES_WHAT_WAS_RIGHT = /^[^.!?]{0,60}\b(?:right|correct|exactly|spot on)\b/i;
  // Task 2.5c (fix25): the same, for "Good question, but…" (no full stop) and
  // for openers the 2.3 list missed ("Brilliant —", "Excellent!", "Perfect.").
  const STOCK_PRAISE_25 = /^\s*(?:what an?\s+)?(?:great|good|excellent|brilliant|fantastic|awesome|nice|lovely)\s+(?:question|point|thinking|thought)\s*[!.,:;—–-]+\s*(?:but\s+)?/i;
  const STOCK_OPENER_25 = /^\s*(?:good|great|nice|well done|brilliant|excellent|perfect|awesome|fantastic|lovely|amazing|superb|nice one)\s*[!.,:;—–-]+\s*/i;
  function _stripStockOpener(text) {
    const t = String(text || '');
    const m = t.match(FIX25 ? STOCK_OPENER_25 : STOCK_OPENER);
    if (!m) return t;
    const rest = t.slice(m[0].length);
    if (!rest.trim() || NAMES_WHAT_WAS_RIGHT.test(rest)) return t;
    return rest.charAt(0).toUpperCase() + rest.slice(1);
  }

  // Task 2.3: the tutor never names the student. The prompts no longer give the
  // name; this removes it if a reply uses it anyway ("Hi Mabel!", ", Mabel").
  function _stripName(text) {
    const n = STUDENT_NAME.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const t = String(text || '')
      .replace(new RegExp(`\\s*,\\s*${n}\\b(?=\\s*[!.,?—–-])`, 'g'), '')   // "Thanks, Mabel!" → "Thanks!"
      .replace(new RegExp(`\\b(hi|hello|hey|well done|thanks|thank you|bye|goodbye)\\s+${n}\\b`, 'gi'), '$1')
      .replace(new RegExp(`^\\s*${n}\\s*[,!—–-]\\s*`, 'i'), '')
      .replace(new RegExp(`\\b${n}\\b`, 'g'), 'you');
    return t.charAt(0).toUpperCase() + t.slice(1);
  }

  // Task 2.3: a reply still over the word limit after the retries is cut at
  // sentence boundaries so it fits, rather than sent long. If the reply ended
  // with a question, the question is always kept (a teaching turn without one
  // leaves her nothing to answer): with the sentences it leans on (any sentence
  // sharing a content word with it) if they fit, otherwise with the opening
  // sentences only; either way topped up with opening sentences, in their
  // original order. A reply not ending in a question is cut at the last full
  // sentence under the limit.
  function _sentences(text) {
    // FLOW_FIX: a full stop between digits ("0.15") does not end a sentence.
    if (FLOW_FIX) return String(text || '').match(/(?:[^.!?]|\.(?=\d))+[.!?]+["')\]]*\s*|(?:[^.!?]|\.(?=\d))+$/g) || [];
    return String(text || '').match(/[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g) || [];
  }
  function _cutToWords(text, maxWords) {
    const sents = _sentences(text).map(x => x.trim()).filter(Boolean);
    const wc = x => _wordCount(_stripMarkdown(x));
    const plainCut = () => {
      const out = []; let n = 0;
      for (const x of sents) { if (n + wc(x) > maxWords) break; out.push(x); n += wc(x); }
      return out.join(' ').trim();
    };
    const last = sents[sents.length - 1] || '';
    if (!/\?["')\]]*$/.test(last)) return plainCut();
    const body = sents.slice(0, -1);
    const qStems = new Set(_stems(last));
    const needed = body.map(x => _stems(x).some(w => qStems.has(w)));
    let n = wc(last) + body.reduce((t, x, k) => t + (needed[k] ? wc(x) : 0), 0);
    let keep = needed.slice();
    if (n > maxWords) { keep = body.map(() => false); n = wc(last); }
    for (let k = 0; k < body.length; k++) {
      if (keep[k]) continue;
      if (n + wc(body[k]) > maxWords) break;
      keep[k] = true; n += wc(body[k]);
    }
    return [...body.filter((x, k) => keep[k]), last].join(' ').trim();
  }

  // Every reply the student sees goes through this.
  function _finishReply(text, maxWords = MAX_REPLY_WORDS) {
    if (!FIX23) return _stripStockPraise(text);
    let t = _stripStockOpener(_stripName(FIX25 ? (String(text || '').replace(STOCK_PRAISE_25, '') || text) : _stripStockPraise(text)));
    if (_wordCount(_stripMarkdown(t)) > maxWords) t = _cutToWords(t, maxWords) || t;
    return t;
  }

  // Every attempt is checked, including the shortened ones. The earlier version
  // checked only the first reply and returned the shortened retry unseen, so a
  // retry that hit its own token cap was shown cut off mid-sentence.
  // When teaching, a question she could answer with a bare yes/no also fails
  // the check and is asked for again; the length limit only tightens when the
  // reply was actually too long.
  // fixT4: the closing question asks her to name a term ("What do we call…?",
  // "What is that called?", "What word…?"). The bored-student tester found the
  // tutor asks these before it has said the term, so she can only guess.
  function _asksForName(plain) {
    const q = (plain.match(/[^.!?]*\?\s*$/) || [''])[0];
    return /\bwhat (do|would|could|might) (we|you|scientists|people|they) call\b|\bwhat(?:'s| is| are) (it|this|that|these|those|they)(?: \w+){0,2} called\b|\b(what|which) (word|term|name)\b|\bwhat is the (name|word|term)\b|\bcalled\?\s*$/i.test(q);
  }

  // ── Teach-then-ask (TEACH_THEN_ASK) ──────────────────────────
  // The sentences the reply being written is to teach; marked taught once a
  // reply has come back. Set by _getTutorReply, _firstOpeningPrompt and _jumpPrompt.
  let _pendingChunk = null;

  // Which sentences of point i have been taught (a state saved before this
  // existed starts with none taught).
  function _taughtFor(i) {
    if (!_state.taught) _state.taught = _points.map(p => Array(p.sentences.length).fill(false));
    if (!Array.isArray(_state.taught[i]) || _state.taught[i].length !== _points[i].sentences.length) {
      _state.taught[i] = Array(_points[i].sentences.length).fill(false);
    }
    return _state.taught[i];
  }

  // Every sentence of point i not yet taught, or null if there are none.
  function _untaughtSentences(idx) {
    if (idx == null || !_points[idx]) return null;
    const t = _taughtFor(idx);
    const js = t.map((x, j) => j).filter(j => !t[j]);
    return js.length ? { idx, js, text: js.map(j => _points[idx].sentences[j]) } : null;
  }

  function _toldTexts(decision) {
    return decision.toldSentences ? decision.toldSentences.text : null;
  }

  function _markTaught(chunk) {
    if (!chunk || chunk.idx == null) return;
    const t = _taughtFor(chunk.idx);
    chunk.js.forEach(j => { t[j] = true; });
    _state.lastChunk = chunk;
  }

  // The next sentence(s) of point i to teach: the first untaught sentence that
  // uses the part being asked about, if one does, otherwise the first untaught
  // one; a short sentence takes the next untaught one with it.
  function _pickChunk(i, fact) {
    const s = _points[i].sentences, t = _taughtFor(i);
    const open = s.map((x, j) => j).filter(j => !t[j]);
    if (!open.length) return null;
    const own = fact ? new Set(_stems(fact.term)) : null;
    let j = own ? open.find(k => _stems(s[k]).some(w => own.has(w))) : undefined;
    if (j === undefined) j = open[0];
    const js = [j];
    const k = open.find(x => x > j);
    if (k !== undefined && _wordCount(s[j]) < 12 && _wordCount(s[j]) + _wordCount(s[k]) <= 35) js.push(k);
    return { idx: i, js, text: js.map(x => s[x]).join(' ') };
  }

  // A retry asks about the same sentences again; other teaching turns take new ones.
  function _chunkFor(decision) {
    const idx = _teachIndex(decision);
    if (idx == null) return null;
    if (decision.kind === 'retry' && _state.lastChunk && _state.lastChunk.idx === idx) return _state.lastChunk;
    const fact = decision.kind === 'next' || decision.kind === 'resume' ? _openingFact(idx) : decision.fact;
    return _pickChunk(idx, fact || null);
  }

  function _teachLine(chunk) {
    return chunk
      ? `Teach this first, in your own words, then ask one question whose answer is in it: "${chunk.text}"\nAfter your reply, add one last line on its own: "ANSWER: " and the answer to your question in one to three words. That line is taken out before she sees the reply.`
      : '';
  }

  // The hidden "ANSWER:" line, taken off the reply she sees.
  function _splitAnswer(raw) {
    const k = String(raw || '').search(/\bANSWER\s*:/i);
    if (k === -1) return { text: raw, answer: null };
    return { text: raw.slice(0, k).trim(), answer: raw.slice(k).replace(/^ANSWER\s*:\s*/i, '').split('\n')[0].trim() };
  }

  // Are the answer's words in what the tutor has said: this reply before its
  // question, or an earlier reply? Numbers are left out (an answer worked out
  // from what was taught need not have been said). No ANSWER line: not checked.
  function _answerTaught(answer, plain) {
    if (!answer) return true;
    const need = _stems(answer).filter(w => !/^\d/.test(w));
    if (!need.length) return true;
    const said = _sentences(plain).filter(x => !/\?/.test(x)).join(' ');
    const before = (_state.transcript || []).filter(t => t.role === 'assistant').map(t => t.text).join(' ');
    const have = new Set(_stems(`${said} ${before}`));
    return need.every(w => have.has(w));
  }

  async function _callWithLengthGuard(sys, user, noYesNo = false, maxWords = null) {
    // FLOW_FIX: a reply that tells her a whole key point gets a higher word limit.
    const limits = FLOW_FIX && maxWords ? [
      { words: maxWords, tokens: Math.ceil(maxWords * 2.2) + 60, note: '' },
      { words: maxWords, tokens: Math.ceil(maxWords * 2.2) + 60,
        note: `(Your last reply was too long or got cut off mid-sentence. Say the same thing again in under ${maxWords} words, leaving nothing out, and make sure every sentence is finished.)` },
      { words: maxWords, tokens: Math.ceil(maxWords * 2.2) + 60,
        note: `(Still too long or cut off. Give the same message in under ${maxWords} words. Finish every sentence.)` },
    ] : [
      { words: MAX_REPLY_WORDS, tokens: MAX_TOKENS_REPLY, note: '' },
      { words: RETRY_MAX_WORDS, tokens: MAX_TOKENS_RETRY,
        note: `(Your last reply was too long or got cut off mid-sentence. Say the same thing again in under ${RETRY_MAX_WORDS} words, and make sure every sentence is finished.)` },
      { words: 30, tokens: MAX_TOKENS_RETRY,
        note: `(Still too long. Give the same message in under 30 words. Finish every sentence, and end with your question.)` },
    ];
    const yesNoNote = `(Your question could be answered with just "yes" or "no", which shows nothing. Keep the rest, but ask it again as a what / which / why / how / where / when question whose answer is a specific word or short phrase from the content. Do not start it with do, does, is, are, can, could, will or would.)`;
    const eitherOrNote = `(Your question offers her a choice between options joined by "or", so she can pick one without knowing. Keep the rest, but ask one what / which / why / how question with no options in it, whose answer is a specific word or short phrase from the content. Do not use the word "or" in the question.)`;
    const noQuestionNote = `(Your reply did not end with a question. Keep the rest, and end with one what / which / why / how question about the content.)`;
    const manyNote = `(Your reply has more than one question mark. Ask exactly one question, at the end. Turn any other question, including a rhetorical one, into a statement.)`;
    const namingNote = `(Your question asks her to name or guess a term. Say the term yourself in this reply, then ask a what / why / how question that makes her use the idea. Do not ask what something is called.)`;
    let complete = '', last = '', level = 0, yesNo = false, eitherOr = false, noQuestion = false, many = false, naming = false;
    let unanchored = false, anchorTried = false, answerSaid = '';
    let repeated = null, repeatTried = false;
    const chunk = _pendingChunk;
    _pendingChunk = null;
    // FIRST_TIME: the opening question uses no term the lesson teaches; a
    // teaching reply brings in at most one new term and does not ask what it
    // has just said. Each is asked for again once.
    const ft = FIRST_TIME ? _pendingFT : null;
    _pendingFT = null;
    let termFault = null, termTried = false, termUnexplained = false, given = false, givenTried = false;
    const basicOf = new Map();
    const done = FIRST_TIME
      ? text => {
          if (TEACH_THEN_ASK && chunk) _markTaught(chunk);
          _lastBasicTag = basicOf.get(text) || null;
          return FLOW_FIX && maxWords ? _finishReply(text, maxWords) : _finishReply(text);
        }
      : text => { if (TEACH_THEN_ASK && chunk) _markTaught(chunk); return FLOW_FIX && maxWords ? _finishReply(text, maxWords) : _finishReply(text); };
    for (let i = 0; i < limits.length; i++) {
      const a = limits[level];
      const anchorNote = unanchored
        ? `(The answer to your question, "${answerSaid}", is not in anything you have said. ${chunk ? `Teach this first, in your own words: "${chunk.text}" Then ask` : 'Ask'} one question whose answer is in what you have just said, and end with the "ANSWER:" line again.)`
        : '';
      const repeatNote = repeated ? `(Your question repeats one she has already answered correctly: "${repeated}". Keep the rest, but ask about something she has not answered yet.)` : '';
      const termNote = !termFault ? ''
        : ft.forbid
          ? `(Your opening uses words the lesson is about to teach: ${termFault.join(', ')}. She does not know them yet. Ask your one question about the everyday idea again without any of them.)`
          : termUnexplained ? `(Your reply uses ${termFault.join(', ')} without saying what it means. She has never met it. Say what it means in everyday words, with an everyday comparison if one helps, before you use it — or leave it out of this message.)`
          : `(Your reply brings in ${termFault.length} new terms at once: ${termFault.join(', ')}. She is meeting them for the first time. Keep only ONE new term in this message, explained in everyday words, and leave the others for later messages.)`;
      const givenNote = given ? `(The answer to your question is already in your message or your last one, so she would only copy it back. Keep the teaching, but ask a question that makes her use the idea: an everyday case, a small change, or a reason in her own words.)` : '';
      const note = [a.note, yesNo ? yesNoNote : '', eitherOr ? eitherOrNote : '', noQuestion ? noQuestionNote : '', many ? manyNote : '', naming ? namingNote : '', anchorNote, repeatNote, termNote, givenNote].filter(Boolean).join('\n');
      const raw = (await AI.call(sys, note ? `${user}\n\n${note}` : user, a.tokens)).trim();
      const split = TEACH_THEN_ASK ? _splitAnswer(raw) : { text: raw, answer: null };
      const { answer } = split;
      let reply = split.text;
      if (FIRST_TIME) { const b = _splitBasic(reply); reply = b.text; if (b.basic) basicOf.set(reply, b.basic); }
      const plain = _stripMarkdown(reply);
      last = reply;
      const cut = _looksTruncated(plain);
      const long = !cut && _wordCount(plain) > a.words;
      yesNo = noYesNo && _asksYesNo(plain);
      eitherOr = FIX25 && noYesNo && _asksEitherOr(plain);
      noQuestion = FIX25 && noYesNo && !cut && _asksNothing(plain);
      many = FIX25 && noYesNo && _asksMoreThanOne(plain);
      naming = FIX_T4 && noYesNo && _asksForName(plain);
      // TEACH_THEN_ASK: one more try when the question's answer has not been taught.
      unanchored = TEACH_THEN_ASK && noYesNo && !anchorTried && !_answerTaught(answer, plain);
      if (unanchored) { anchorTried = true; answerSaid = answer; }
      // FLOW_FIX: one more try when the question repeats one she answered correctly.
      repeated = FLOW_FIX && noYesNo && !repeatTried ? _repeatsCorrect(plain) : null;
      // Fix round 2: a repeat in other words ("what does non-specific tell us…"
      // after she said "it attacks anything") is caught by one short model check.
      if (FLOW_FIX && noYesNo && !repeatTried && !repeated && !cut) repeated = await _askedAlready(plain);
      if (repeated) repeatTried = true;
      if (ft) {
        termFault = null; given = false;
        if (!termTried && !cut) {
          const found = ft.forbid ? _lessonTerms().filter(t => ft.forbid.includes(t.term) && t.re.test(plain)).map(t => t.term)
            : ft.teach ? _newTermsIn(plain) : [];
          if (ft.forbid ? found.length : found.length > 1) { termFault = found; termTried = true; termUnexplained = false; }
          else if (ft.teach && found.length === 1) {
            const un = await _unexplainedIn(plain, found);
            if (un.length) { termFault = un; termTried = true; termUnexplained = true; }
          }
        }
        if (ft.teach && !ft.confused && noYesNo && !givenTried && !cut && !termFault && !repeated) {
          given = await _answerGiven(plain);
          givenTried = true;
        }
      }
      const badQ = yesNo || eitherOr || noQuestion || many || naming || unanchored || !!repeated || !!termFault || given;
      if (!cut && !long && !badQ) return done(reply);
      if (!cut && !badQ && !complete) complete = reply; // finished, just long — usable if nothing better
      if (cut || long) level = Math.min(level + 1, limits.length - 1);
    }
    // Never show a sentence that stops dead: prefer a complete-but-long reply,
    // otherwise drop the unfinished tail of the last one.
    return done(complete || _trimToLastSentence(last) || last);
  }

  // ── "Worth writing down" recap ───────────────────────────────
  // Written by the model from the conversation that just happened — not from
  // the lesson's pre-written writeBullets, which are never read or shown here.
  function _buildRecapSystemPrompt() {
    return FIX23
      ? `You are a warm, encouraging GCSE tutor helping a 15-year-old student studying for her GCSEs keep her revision notes. You write brief recaps of what you have just taught her, in your own plain words — never a copied textbook list. Never use a name. Reply with the recap lines only.`
      : `You are a warm, encouraging GCSE tutor helping Mabel, a 15-year-old studying for her GCSEs, keep her revision notes. You write brief recaps of what you have just taught her, in your own plain words — never a copied textbook list. Reply with the recap lines only.`;
  }

  // The stretch of conversation about one key point, from where its teaching
  // last started (an earlier visit to it isn't "the conversation that just happened").
  function _pointConversation(idx) {
    const talk = _state.transcript.filter(t => t.role === 'user' || t.role === 'assistant');
    let entries = talk.filter(t => t.pt === idx);
    if (!entries.length) return talk.slice(-6); // saved before entries were tagged
    for (let k = entries.length - 1; k >= 0; k--) {
      if (entries[k].opening) { entries = entries.slice(k); break; }
    }
    return entries.slice(-RECAP_TURNS);
  }

  function _parseRecap(raw) {
    const cleaned = _stripMarkdown(raw);
    let lines = cleaned.split(/\n+/).map(l => l.replace(/^\s*[•·–—-]\s*/, '').trim()).filter(Boolean);
    if (lines.length < 2) {
      lines = (cleaned.match(/[^.!?]+[.!?]+["')]?/g) || [cleaned]).map(l => l.trim()).filter(Boolean);
    }
    lines = lines.slice(0, 4);
    if (FIX23) lines = lines.map(_stripName);
    if (lines.length > 2 && _looksTruncated(lines[lines.length - 1])) lines.pop();
    return lines.length >= 2 ? lines : null;
  }

  async function _generateRecap(idx) {
    const convo = _pointConversation(idx);
    if (!convo.length) return null;
    const user = [
      `${WHO_CAP} has just finished the key point "${_points[idx].heading}". Here is the conversation about it:`,
      convo.map(t => (t.role === 'user' ? LABEL : 'You') + ': ' + t.text).join('\n'),
      `Write a short "Worth writing down" recap of what you actually taught her in this conversation, in your own words: 2 to 4 short lines, one idea per line, each under 15 words. Base it on what was said above. No heading, no bullet symbols or numbering, and don't ask a question.`,
    ].join('\n\n');
    const raw = await AI.call(_buildRecapSystemPrompt(), user, MAX_TOKENS_RECAP);
    return _parseRecap(raw);
  }

  // Reading her answer to the check-in ("do you want me to just tell you the
  // rest of this one?"). A yes, "just tell me", or any sign she's stuck means
  // she wants to be told — unless she says in the same breath not to.
  function _wantsTold(text) {
    const t = String(text || '');
    if (/\b(don'?t|do not|no need to) (just )?tell\b/i.test(t)) return false;
    if (/^\W*(yes|yeah|yep|yup|yea|sure|ok|okay|please|go on|go ahead|go for it)\b/i.test(t)) return true;
    return /\b(tell me|just tell|explain|explanation|confus\w*|lost|don'?t (get|understand|know)|not sure|unsure|no idea|no clue|idk|dunno|stuck)\b/i.test(t);
  }

  // Tell her every part still outstanding, then move the point on. Used when
  // she asks to be told at the check-in, and when her extension runs out.
  function _finishByTelling(idx, point, facts, rem) {
    rem.forEach(j => { facts.told[j] = true; });
    const covered = point.facts.every((f, j) => facts.answered[j] || facts.told[j]);
    return { idx, verdict: covered, facts, toldRest: rem.map(j => point.facts[j]), toldSentences: TEACH_THEN_ASK ? _untaughtSentences(idx) : null,
             pacing: { turnsOnPoint: 0, checkinAsked: false, extensionLeft: null },
             ...(FLOW_FIX ? { tellAll: point, how: facts.answered.some(Boolean) ? 'part-told' : 'told' } : {}),
             ..._afterPoint(idx, covered) };
  }

  // ── Coverage decision (pure — no state mutation) ────────────
  // Where she goes once point idx is finished. If she jumped here from
  // somewhere else, she goes back to where she was; otherwise on to the next
  // point not yet attempted (points done via a jump aren't taught twice).
  function _afterPoint(idx, covered) {
    const r = _state.resumeIndex;
    if (r === -1) return { kind: 'complete', point: null, nextIndex: null };
    if (r !== null) return { kind: 'resume', point: _points[r], nextIndex: r };

    const cov = _state.coverage.slice();
    cov[idx] = covered || cov[idx] === true;
    let n = cov.findIndex((c, i) => i > idx && c === null);
    if (n === -1) n = cov.findIndex(c => c === null);
    return n === -1
      ? { kind: 'complete', point: null, nextIndex: null }
      : { kind: 'next', point: _points[n], nextIndex: n };
  }

  // A point is taught one key term ("part") at a time. It is covered only once
  // every part has had a real answer from her — one good reply no longer
  // finishes the whole point. A weak answer gets one retry on that part; if
  // that fails too the tutor simply tells her the answer, so the part is still
  // covered and the point can finish. A point therefore only ever finishes with
  // every part covered — which is the same moment its checkmark, its terms and
  // the move to the next point all happen.
  function _decide(userText) {
    if (_state.complete) return { kind: 'free' };
    const idx = _state.currentPointIndex;
    const point = _points[idx];
    if (FLOW_FIX) { const d = _flowDecide(userText, idx, point); if (d) return d; }
    // FIRST_TIME: her reply answers a question about a basic idea, not a part
    // of the point, so no part is marked; the tutor goes on to teach the part.
    if (FIRST_TIME && !_state.checkinAsked && _lastWasBasic()) {
      const cur = _state.facts[idx];
      const t = _targetFactIndex(idx);
      return { kind: 'fact', idx, point, fact: t === -1 ? null : point.facts[t], afterBasic: true,
               facts: { answered: cur.answered.slice(), told: cur.told.slice() },
               pacing: { turnsOnPoint: _state.turnsOnPoint + 1, checkinAsked: false, extensionLeft: _state.extensionLeft } };
    }

    // A point with no key terms has nothing to split into parts: one real answer finishes it.
    if (!point.facts.length) {
      if (FLOW_FIX) {
        const ok = _turnMark ? _turnMark.mark === 'correct' : _isSubstantive(userText, point.wordSet);
        if (!ok && !_state.retriedCurrent) return { kind: 'retry', idx, point, fact: null };
        if (!ok) return _finishByTelling(idx, point, { answered: [], told: [] }, []);
        return { idx, verdict: true, how: 'worked', ..._afterPoint(idx, true) };
      }
      const substantive = _isSubstantive(userText, point.wordSet);
      if (!substantive && !_state.retriedCurrent) return { kind: 'retry', idx, point, fact: null };
      if (TEACH_THEN_ASK && _untaughtSentences(idx)) return { kind: 'fact', idx, point, fact: null };
      return { idx, verdict: substantive, ..._afterPoint(idx, substantive) };
    }

    const cur = _state.facts[idx];
    const answered = cur.answered.slice(), told = cur.told.slice();
    let target = _targetFactIndex(idx);
    if (target === -1) target = answered.findIndex(a => !a); // defensive: nothing left to teach

    const hit = target !== -1 && (FLOW_FIX && _turnMark ? _turnMark.mark === 'correct' : _answers(userText, point.facts[target].words));
    if (hit) answered[target] = true;
    // Anything else she has clearly shown, unprompted (FLOW_FIX: only in a correct answer).
    if (!(FLOW_FIX && _turnMark && _turnMark.mark !== 'correct')) point.facts.forEach((f, j) => {
      if (!answered[j] && f.cues.size && _answers(userText, f.cues)) { answered[j] = true; told[j] = false; }
    });
    const facts = { answered, told };

    const remaining = () => point.facts.map((f, j) => j).filter(j => !answered[j] && !told[j]);
    const engaged = point.facts.some((f, j) => answered[j] && !cur.answered[j]);

    // She is answering the check-in ("just tell you the rest?" — yes/no). If
    // she actually answered a part instead, that counts and the lesson carries
    // on normally — only a non-answer is read as a choice.
    if (_state.checkinAsked && !engaged) {
      const rem = remaining();
      // Yes, "tell me", or stuck → she is told the rest and the point moves on.
      if (_wantsTold(userText) || (!rem.length && !(TEACH_THEN_ASK && _untaughtSentences(idx)))) return _finishByTelling(idx, point, facts, rem);
      // No — or still working on the topic, even if the words didn't match a
      // part — means she keeps going herself. The extension limit bounds it.
      const saysNo = /^\W*(no|nope|nah|not yet)\b/i.test(userText)
        || /\b(don'?t|do not|no need to) (just )?tell\b|\b(let me|i'?ll|i want to|i'?d like to) (try|have a go|work it out)\b/i.test(userText);
      if (saysNo || _isSubstantive(userText, point.wordSet)) {
        return { kind: 'fact', idx, point, fact: point.facts[rem[0]] || null, facts, keepsWorking: true,
                 pacing: { turnsOnPoint: _state.turnsOnPoint + 1, checkinAsked: false, extensionLeft: EXTENSION_EXCHANGES } };
      }
      // Anything vague moves on rather than stalling.
      return _finishByTelling(idx, point, facts, rem);
    }

    // Exchange limits. Below the cap nothing changes; at the cap she is asked
    // rather than cut off, and an extension she asked for is hard-capped.
    const turns = _state.turnsOnPoint + 1;
    const inExtension = Number.isInteger(_state.extensionLeft);
    const extensionLeft = inExtension ? _state.extensionLeft - 1 : null;
    const capHit = inExtension ? extensionLeft <= 0 : turns >= CHECKIN_AFTER;
    // FLOW_FIX: the check-in only after a wrong answer, an "idk" or two short or
    // off-topic replies in a row; otherwise she carries on and is asked later.
    const kind = FLOW_FIX ? _replyKind(userText, point, hit) : null;
    const struggling = !FLOW_FIX || inExtension || kind === 'wrong' || kind === 'idk'
      || (kind === 'other' && _flow().shortRun >= 1);
    if (capHit && struggling && (remaining().length || (TEACH_THEN_ASK && _untaughtSentences(idx)))) {
      if (inExtension) return _finishByTelling(idx, point, facts, remaining());
      return { kind: 'checkin', idx, point, facts,
               pacing: { turnsOnPoint: turns, checkinAsked: true, extensionLeft: null } };
    }
    const pacing = { turnsOnPoint: turns, checkinAsked: false, extensionLeft };

    let toldNow = null;
    if (!hit && target !== -1) {
      if (!_state.retriedCurrent) {
        // She may have said something perfectly correct about this point that
        // simply isn't the part being asked (the point's content holds facts
        // that aren't key terms, like skin). That deserves acknowledging and
        // asking again — not re-explaining the point at her.
        const onTopic = FLOW_FIX && _turnMark ? _turnMark.mark === 'partly' : _isSubstantive(userText, point.wordSet);
        return { kind: 'retry', idx, point, fact: point.facts[target], facts, onTopic, pacing };
      }
      // Missed twice: stop quizzing her on it and just tell her, so the part is
      // still covered in the conversation rather than dropped.
      told[target] = true;
      toldNow = point.facts[target];
    }

    const next = answered.findIndex((a, j) => !answered[j] && !told[j]);
    if (next !== -1) {
      return { kind: 'fact', idx, point, fact: point.facts[next], facts, toldNow, pacing };
    }
    // TEACH_THEN_ASK: every part answered or told, but some of the point's
    // content not yet taught: the point carries on until it all has been.
    if (TEACH_THEN_ASK && _untaughtSentences(idx)) {
      return { kind: 'fact', idx, point, fact: null, facts, toldNow, pacing };
    }
    // Every part is now covered — answered by her or told to her — so the point
    // is covered. Its checkmark, its terms and the move to the next point all
    // come from this one verdict.
    const covered = point.facts.every((f, j) => answered[j] || told[j]);
    return { idx, verdict: covered, facts, toldNow,
             pacing: { turnsOnPoint: 0, checkinAsked: false, extensionLeft: null },
             ...(FLOW_FIX ? { how: answered.every(Boolean) ? 'worked' : answered.some(Boolean) ? 'part-told' : 'told' } : {}),
             ..._afterPoint(idx, covered) };
  }

  function _applyDecision(decision) {
    if (FLOW_FIX && decision.flowNote) {
      const f = _flow();
      f.shortRun = decision.flowNote.shortRun;
      if (decision.flowNote.correctQ && !f.correctQs.includes(decision.flowNote.correctQ)) {
        f.correctQs.push(decision.flowNote.correctQ);
        f.correctAs.push(decision.flowNote.correctA || '');
      }
      if (decision.idx != null && decision.how && decision.kind !== 'fact' && decision.kind !== 'retry' && decision.kind !== 'checkin') f.how[decision.idx] = decision.how;
    }
    if (decision.kind === 'free') return;
    if (FIRST_TIME && decision.kind === 'start') {
      _state.firstTime = { probed: true, known: decision.probeAnswer || '' };
      return;
    }
    if (decision.toldSentences) _markTaught(decision.toldSentences);
    if (decision.facts) _state.facts[decision.idx] = decision.facts;
    if (decision.pacing) Object.assign(_state, decision.pacing);
    if (decision.kind === 'checkin') return;  // waiting on her answer; the point stays put
    if (decision.kind === 'retry') {
      _state.retriedCurrent = true;
      return;
    }
    _state.retriedCurrent = false;
    if (decision.kind === 'fact') return; // same point, next part
    // Never downgrade a point she has already covered.
    _state.coverage[decision.idx] = decision.verdict || _state.coverage[decision.idx] === true;
    if (decision.kind === 'complete') {
      _state.complete = true;
      _state.resumeIndex = null;
      _state.wrapOffered = true; // this turn is itself the closing offer
    } else {
      _state.currentPointIndex = decision.nextIndex;
      if (decision.kind === 'resume') _state.resumeIndex = null;
    }
  }

  // The part a new/resumed point will open on, for its first question.
  function _openingFact(i) {
    const j = _targetFactIndex(i);
    return j === -1 ? null : _points[i].facts[j];
  }

  function _partLine(fact) {
    return fact ? `The part to ask about: ${fact.term} — ${fact.def}` : '';
  }

  // What she has already got. Without this the model has the point's whole
  // content in front of it every turn and happily explains cilia or stomach
  // acid again after she has already answered them.
  function _coveredLine(idx, factsState) {
    const point = _points[idx];
    if (!point || !factsState) return '';
    const done = point.facts.filter((f, j) => _factDone(factsState, j)).map(f => f.term);
    return done.length
      ? `She has already covered these parts of this key point: ${done.join(', ')}. Do not explain them again and do not ask about them again — treat them as known and build on them.`
      : '';
  }

  // She has missed this part twice. Don't quiz her a third time: give her the
  // answer kindly so she still leaves the conversation having met it.
  function _toldLine(fact) {
    if (FLOW_FIX && fact) {
      const last = _lastQuestion();
      return `She hasn't got this after two goes: ${fact.term} — ${fact.def}. Don't ask her about it again and don't make a thing of it. In ONE or TWO short friendly sentences, give her the answer to the question you just asked${last ? ` ("${last.q}")` : ''} — exactly what it asked for, with any number and unit copied from the content — so she has it. `;
    }
    return fact
      ? `She hasn't got this after two goes: ${fact.term} — ${fact.def}. Don't ask her about it again and don't make a thing of it. In ONE short friendly sentence, simply tell her the answer so she has it. `
      : '';
  }

  // She's ready to move on (or the extension she asked for has run out) with
  // parts still uncovered: give her those plainly instead of quizzing on them.
  function _toldRestLine(facts, sentences) {
    const parts = [...(facts || []).map(f => `${f.term} — ${f.def}`), ...(sentences || [])];
    return parts.length
      ? `These parts of the key point she has just finished were never covered: ${parts.join('; ')}. In AT MOST TWO SHORT SENTENCES, tell her these plainly so she has them. Do not ask her about them. `
      : '';
  }

  // The other parts of the SAME point still outstanding. A point whose content
  // is short (its terms are a few closely related names) then finishes in one
  // or two exchanges instead of being stretched to one exchange per term.
  function _remainingLine(idx, factsState, focus) {
    const point = _points[idx];
    if (!point || !factsState) return '';
    const names = point.facts
      .filter((f, j) => !_factDone(factsState, j) && f !== focus)
      .map(f => f.term);
    return names.length
      ? `Also still to cover in this same key point: ${names.join(', ')}. If any of them fit naturally into the same short question, cover them together — don't stretch this point out over more turns than it needs.`
      : '';
  }

  // ── Tutor flow (FLOW_FIX) ─────────────────────────────────────
  // "can we skip this", "move on", "next one" — not "don't skip".
  const SKIP_REQUEST = /\b(skip|move on|next (one|bit|point|part|topic)|go on to the next)\b/i;
  const NOT_SKIP     = /\b(don'?t|do not|no) (skip|move on)\b/i;
  // An explicit request to be told, outside the check-in.
  const TELL_REQUEST = /\b(tell me|give me the answer|just say it|what'?s the answer|just explain)\b/i;
  const IDK_REPLY    = /\b(idk|dunno|no idea|no clue|not sure|unsure|i (don'?t|do not) know)\b/i;
  // PAUSE_FIX: "do this later", "can we stop", "gotta go" — not hunger or
  // tiredness alone ("can i get food after this im starving" is off topic).
  const PAUSE_REQUEST = /\b(do (this|it|the rest) later|(carry on|continue|finish) later|later pls|later please|can we stop|stop (now|here|for now)|i'?m done|im done|got ?ta go|got to go|(have|need) to go|go(ing)? (to )?eat|brb|bye)\b/i;
  const TOO_LONG_SAID = /\b(too long|this is long|so long|long innit|tl;?dr|wall of text|too much (text|writing|to read))\b/i;
  function _wantsPause(text) { return PAUSE_FIX && PAUSE_REQUEST.test(text); }
  function _saidTooLong(text) {
    return PAUSE_FIX && (TOO_LONG_SAID.test(text || '') ||
      (_state.transcript || []).some(t => t.role === 'user' && TOO_LONG_SAID.test(t.text || '')));
  }
  function _wantsSkip(text) { return SKIP_REQUEST.test(text) && !NOT_SKIP.test(text); }
  function _wantsTelling(text) { return TELL_REQUEST.test(text) && !/\b(don'?t|do not|no need to) (just )?tell\b/i.test(text); }

  // The question at the end of the tutor's last reply, if it asked one.
  function _lastQuestion() {
    const last = [...(_state.transcript || [])].reverse().find(t => t.role === 'assistant');
    if (!last) return null;
    const qs = _stripMarkdown(last.text).match(/[^.!?]*\?/g) || [];
    return qs.length ? { said: last.text, q: qs[qs.length - 1].trim() } : null;
  }

  // One short call: is her reply a correct answer to that question?
  async function _markAnswer(userText) {
    if (_state.complete || _state.checkinAsked) return null;
    if (_wantsSkip(userText) || _wantsTelling(userText)) return null;
    const last = _lastQuestion();
    if (!last) return null;
    const sys = `You mark one reply from a GCSE student to her tutor's question. Reply with one word only: CORRECT, PARTLY, WRONG, IDK or OTHER.`;
    const user = [
      `The tutor said: "${last.said}"`,
      `The question: "${last.q}"`,
      `The student replied: "${userText}"`,
      _pointBrief(_points[_state.currentPointIndex]),
      `CORRECT: it answers the question correctly in substance — spelling, slang, short or loosely worded answers are fine, and so is a right reason in her own words. PARTLY: only when part of what the question asked is wrong or missing. WRONG: an answer, but a wrong one. IDK: she says she does not know. OTHER: not an answer to the question (off topic, "ok", "huh?", a request, or a question of her own).`,
    ].join('\n\n');
    try {
      const raw = String(await AI.call(sys, user, 10) || '').toUpperCase();
      const m = raw.match(/\b(CORRECT|PARTLY|WRONG|IDK|OTHER)\b/);
      return m ? { mark: m[1].toLowerCase(), question: last.q } : null;
    } catch (e) { _logError('marking', e); return null; }
  }

  // Her reply this turn, set by _getTutorReply before _decide reads it.
  let _turnMark = null;

  // What her reply was, by the mark if there is one, otherwise by the word match.
  function _replyKind(userText, point, hit) {
    if (_turnMark) return _turnMark.mark;
    if (hit) return 'correct';
    if (IDK_REPLY.test(userText)) return 'idk';
    return _isSubstantive(userText, point.wordSet) ? 'wrong' : 'other';
  }

  // Skip and "tell me" come before anything else on the point.
  function _flowDecide(userText, idx, point) {
    const cur = _state.facts[idx];
    const facts = { answered: cur.answered.slice(), told: cur.told.slice() };
    const rem = point.facts.map((f, j) => j).filter(j => !facts.answered[j] && !facts.told[j]);
    const reset = { turnsOnPoint: 0, checkinAsked: false, extensionLeft: null };
    if (_wantsSkip(userText)) {
      return { idx, verdict: false, facts, skipped: point, pacing: reset, how: facts.answered.some(Boolean) ? 'part' : 'skipped', ..._afterPoint(idx, false) };
    }
    if (!_state.checkinAsked && _wantsTelling(userText)) return _finishByTelling(idx, point, facts, rem);
    return null;
  }

  // The start of a next / resume / complete turn that ends a point by telling or skipping.
  function _flowLead(d) {
    if (!FLOW_FIX) return '';
    if (d.skipped) return `She asked to skip the key point "${_shortHeading(d.skipped.heading)}". In ONE short sentence, say that you are skipping it and what it was about, in a few words. Do not teach it. `;
    if (d.tellAll && d.shortTell) {
      const p = d.tellAll;
      return `She wants to be told the rest of the key point "${_shortHeading(p.heading)}", and she has said your replies are too long. Tell her only its most important facts that you have not already said, in at most four short sentences. Do not ask about any of it. Content: "${_stripHtml(p.content)}" `;
    }
    if (d.tellAll) {
      const p = d.tellAll;
      const terms = (p.keyTerms || []).map(t => `${t.term}: ${t.def}`).join(' | ');
      const bullets = (p.writeBullets || []).map(_stripHtml).filter(Boolean);
      return `She wants to be told the rest of the key point "${_shortHeading(p.heading)}". Tell her the rest of it now, in plain words: every sentence of its content below that you have not already said to her, in order, one short sentence each — when unsure, include it. Every one of the points to remember below must be in what you say or what you said before. Do not ask about any of it. Content: "${_stripHtml(p.content)}"${terms ? ` Key terms: ${terms}` : ''}${bullets.length ? ` Points to remember: ${bullets.join(' | ')}` : ''} `;
    }
    return '';
  }

  // How each point ended, with the point now finishing counted in.
  function _howList(d) {
    const how = _flow().how.slice();
    if (d && d.idx != null && d.how) how[d.idx] = d.how;
    return how;
  }
  function _howSummary(d) {
    const how = _howList(d);
    const names = k => _points.map((p, i) => how[i] === k ? `"${_shortHeading(p.heading)}"` : null).filter(Boolean);
    const parts = [];
    if (names('worked').length) parts.push(`she answered your questions on ${names('worked').join(', ')}`);
    if (names('part-told').length) parts.push(`she answered some questions on ${names('part-told').join(', ')} and you told her the rest`);
    if (names('told').length) parts.push(`you told her ${names('told').join(', ')}`);
    if (names('part').length) parts.push(`she answered some questions on ${names('part').join(', ')}, then skipped the rest of it`);
    if (names('skipped').length) parts.push(`she skipped ${names('skipped').join(', ')}`);
    const none = _points.filter((p, i) => !how[i]).map(p => `"${_shortHeading(p.heading)}"`);
    if (none.length) parts.push(`she did not reach ${none.join(', ')}`);
    return parts.join('; ');
  }
  function _closingLine(d) {
    const all = _howList(d).every(h => h === 'worked');
    return `Then say you have reached the end of this lesson and say honestly, in one or two short sentences, how it went: ${_howSummary(d)}. Use these words: say she "answered questions on" a point, never that she "worked through", "covered", "learned" or "mastered" a point or the lesson — answering questions on a point does not mean she met all of it. ${all ? '' : 'Never say she got through all of it. '}Close warmly in one short line.`;
  }

  // A teaching question that repeats one she has already answered correctly.
  function _repeatsCorrect(plain) {
    if (!FLOW_FIX || !_state.flow || !_state.flow.correctQs.length) return null;
    const q = (plain.match(/[^.!?]*\?\s*$/) || [''])[0];
    const a = new Set(_stems(q));
    if (a.size < 2) return null;
    return _state.flow.correctQs.find(old => {
      const b = new Set(_stems(old));
      const both = [...a].filter(w => b.has(w)).length;
      return both / (a.size + b.size - both) >= 0.6;
    }) || null;
  }

  // Has she already answered what this question asks (in any words)? Returns
  // the earlier question, or null. A failed call counts as no.
  async function _askedAlready(plain) {
    const f = _state.flow;
    if (!f || !f.correctQs.length) return null;
    const q = (plain.match(/[^.!?]*\?\s*$/) || [''])[0].trim();
    if (!q) return null;
    const qs = f.correctQs.slice(-8), as = (f.correctAs || []).slice(-8);
    const list = qs.map((x, k) => `${k + 1}. "${x}" — she said "${as[k - qs.length + as.length] || ''}"`).join('\n');
    const sys = `You check a tutor's question against what a student has already answered. Reply with one number only: the number of the earlier question whose answer already answers the new question, or 0 if none does.`;
    const user = `Earlier questions she answered correctly, with her answers:\n${list}\n\nNew question: "${q}"\n\nDoes one of her earlier answers already answer the new question, even in other words or the other way round? Reply with its number, or 0.`;
    try {
      const m = String(await AI.call(sys, user, 10) || '').match(/\d+/);
      const k = m ? +m[0] : 0;
      return k >= 1 && k <= qs.length ? qs[k - 1] : null;
    } catch (e) { _logError('repeat check', e); return null; }
  }

  // Which key point a reply will be teaching, so the brief can be limited to it.
  function _teachIndex(d) {
    if (!d) return null;
    if (d.kind === 'fact' || d.kind === 'retry' || d.kind === 'start') return d.idx;
    if (d.kind === 'next' || d.kind === 'resume') return d.nextIndex;
    return null;
  }

  async function _getTutorReply(userText) {
    if (!_state.complete && _wantsPause(userText)) {
      return { reply: `No problem. Your place is saved, so you can pick this up any time. See you soon!`,
               recap: null, decision: { kind: 'pause', idx: _state.currentPointIndex } };
    }
    // FIRST_TIME: her answer to the opening question about what she already
    // knows is not marked; it sets where the teaching starts.
    if (FIRST_TIME && !_state.complete && !_ft().probed) {
      const idx = _state.currentPointIndex;
      const decision = { kind: 'start', idx, point: _points[idx], probeAnswer: String(userText).slice(0, 200) };
      _pendingFT = { teach: true };
      const reply = await _callWithLengthGuard(_buildSystemPrompt(idx), _buildUserPrompt(userText, decision), true);
      _applyDecision(decision);
      return { reply, recap: null, decision };
    }
    // FIRST_TIME tone fix (2026-10-18): an answer to a basics question is not marked against
    // the key point (it was marked wrong and opened "Not quite"); the tutor judges it itself.
    _turnMark = FLOW_FIX && !(FIRST_TIME && !_state.checkinAsked && _lastWasBasic()) ? await _markAnswer(userText) : null;
    const decision = _decide(userText);
    if (FLOW_FIX && decision.kind !== 'free') {
      const point = _points[_state.currentPointIndex];
      const kind = point ? _replyKind(userText, point, false) : null;
      decision.mark = _turnMark ? _turnMark.mark : null;
      decision.flowNote = { shortRun: kind === 'other' ? _flow().shortRun + 1 : 0,
                            correctQ: _turnMark && _turnMark.mark === 'correct' ? _turnMark.question : null,
                            correctA: _turnMark && _turnMark.mark === 'correct' ? String(userText).slice(0, 120) : null };
      if (decision.tellAll) decision.maxWords = Math.min(260, MAX_REPLY_WORDS + _wordCount(_stripHtml(decision.tellAll.content)));
      if (decision.tellAll && _saidTooLong(userText)) { decision.shortTell = true; decision.maxWords = Math.min(decision.maxWords, 90); }
      else if (_saidTooLong(userText)) decision.maxWords = Math.min(decision.maxWords || MAX_REPLY_WORDS, 40);
    }
    _turnMark = null;
    if (TEACH_THEN_ASK) decision.chunk = _chunkFor(decision);
    _pendingChunk = decision.chunk || null;
    const sys  = _buildSystemPrompt(_teachIndex(decision));
    const user = _buildUserPrompt(userText, decision);
    if (FIRST_TIME) _pendingFT = _teachIndex(decision) != null ? { teach: true, confused: _saysConfused(userText) } : null;
    // Teaching turns only: the check-in and the closing turns ask yes/no on purpose.
    const reply = FLOW_FIX && decision.maxWords
      ? await _callWithLengthGuard(sys, user, _teachIndex(decision) != null, decision.maxWords)
      : await _callWithLengthGuard(sys, user, _teachIndex(decision) != null);

    // A finished point (she answered substantively) gets a recap. If writing it
    // fails she still moves on — she just doesn't get one for that point.
    let recap = null;
    if (decision.verdict === true) {
      try { recap = await _generateRecap(decision.idx); }
      catch (e) { _logError('recap', e); }
    }

    _applyDecision(decision); // only commit once the calls actually succeeded
    return { reply, recap, decision };
  }

  // A closing "anything else?" style question, in whatever words the model
  // chose. Once one has been asked, free mode must not ask another.
  function _looksLikeWrapUpQuestion(text) {
    const t = String(text || '');
    if (!t.includes('?')) return false;
    return /(anything else|something else|anything you'?re|anything specific|go over (anything|something)|shall we (stop|finish|wrap|leave)|(ready|want|like) to (stop|finish|wrap)|that'?s it\?|is there anything|need anything|any other questions?)/i.test(t);
  }

  // The tutor's reply, tagged with the point it belongs to.
  function _replyEntry(text, d) {
    const e = { role: 'assistant', text };
    if (FIRST_TIME) {
      // The diagram the prompt told the tutor about, and a basics tag.
      const dg = _inlineDiagram(_teachIndex(d));
      if (dg) e.diagram = dg;
      if (_lastBasicTag && _teachIndex(d) != null) e.basic = _lastBasicTag;
      _lastBasicTag = null;
    }
    if (d.kind === 'retry' || d.kind === 'fact' || d.kind === 'start') {
      e.pt = d.idx;
    } else if (d.kind === 'next') {
      e.pt = d.nextIndex;
      e.opening = true;
    } else if (d.kind === 'resume') {
      e.pt = d.nextIndex; // carries on from where she left off — not a fresh start
    }
    return e;
  }

  function _firstOpeningPrompt() {
    const chunk = TEACH_THEN_ASK ? _pickChunk(0, _openingFact(0)) : null;
    _pendingChunk = chunk;
    if (FIRST_TIME && !_ft().probed) {
      // Opens by finding out what she already knows; teaching starts after her answer.
      const terms = _lessonTerms().map(t => t.term);
      _pendingFT = { forbid: terms };
      const basics = _basics();
      return [
        `Begin the lesson. In AT MOST TWO SHORT SENTENCES: welcome ${WHO} warmly in a few words, then ask ONE short question to find out what she already knows about the everyday idea behind this lesson — something she could have seen, done or noticed in everyday life. She is meeting this topic for the first time.`,
        `Rules for that question: it cannot be answered with yes or no (start it with what, why, how, where or when); it is about everyday life, not the subject; it uses none of these words the lesson is about to teach: ${terms.join(', ')}. Do not teach anything yet and do not answer your own question.`,
        `What this lesson is about: ${_points.map(p => `"${_shortHeading(p.heading)}"`).join(', ')}.`,
        basics.length ? `Everyday ideas it builds on: ${basics.map(b => `${b.idea}: ${_stripHtml(b.text)}`).join(' | ')}` : '',
      ].filter(Boolean).join('\n\n');
    }
    return [
      `Begin the lesson. In AT MOST TWO SENTENCES TOTAL, warmly welcome ${WHO} (using the lesson overview above in your own words, don't just repeat it) and introduce the first key point below, starting from the first thing its content describes — do not explain the whole point. Then ask one question about the part named below. Do not answer your own question.`,
      _pointBrief(_points[0]),
      _partLine(_openingFact(0)),
      _remainingLine(0, _state.facts[0], _openingFact(0)),
      _teachLine(chunk),
    ].filter(Boolean).join('\n\n');
  }

  // Same shape as the lesson's own opening: a short introduction, then one
  // question. Deliberately sends NO conversation history — with the previous
  // exchange in front of it the model carries that conversation on instead of
  // starting this point from the beginning.
  function _jumpPrompt(index) {
    // A jump restarts the point, so its content is all untaught again.
    if (TEACH_THEN_ASK) _taughtFor(index).fill(false);
    const chunk = TEACH_THEN_ASK ? _pickChunk(index, _points[index].facts[0] || null) : null;
    _pendingChunk = chunk;
    if (FIRST_TIME) {
      // A jump starts teaching at once: no opening question is waiting any more.
      if (_state && _state.firstTime) _state.firstTime.probed = true;
      _pendingFT = { teach: true };
    }
    return [
      `${WHO_CAP} is starting a new key point: "${_points[index].heading}". Teach it from the very beginning, as if you had just reached it. This is a fresh start, not a continuation — do not refer back to anything discussed before, and do not greet her again. She may not have covered the earlier points, so don't assume she knows any terms from them. In AT MOST TWO SENTENCES, introduce this key point, starting from the first thing its content describes — do not explain the whole point — then ask one question about the part named below. Do not answer your own question.`,
      _pointBrief(_points[index]),
      _partLine(_points[index].facts[0] || null),
      // A jump restarts the point, so every part is outstanding again —
      // _commitJump resets them once this reply actually arrives.
      _remainingLine(index, _freshFacts(index, false), _points[index].facts[0] || null),
      _teachLine(chunk),
      ...(FIRST_TIME ? [_termsLine(), _diagramLine(index)] : []),
    ].filter(Boolean).join('\n\n');
  }

  // The lesson's key points with what teaching needs: each point's word set
  // and its parts (facts).
  function _buildPoints(data) {
  return (data.keyPoints || []).map(kp => ({
    heading: kp.heading,
    content: kp.content,
    keyTerms: kp.keyTerms || [],
    ...(FLOW_FIX ? { writeBullets: kp.writeBullets || [] } : {}),
    diagram: kp.diagram || null,
    diagramCaption: kp.diagramCaption || '',
    diagramExamTip: !!kp.diagramExamTip,
    wordSet: _buildPointWordSet(kp),
    facts: _buildFacts(kp),
    // TEACH_THEN_ASK: the content's sentences, each to be taught before the point is covered.
    sentences: _sentences(_stripHtml(kp.content || '')).map(s => s.trim()).filter(s => _wordCount(s) >= 3),
  }));
  }

  return { bind, _buildPoints, HISTORY_TURNS, RECAP_TURNS, CHECKIN_AFTER, EXTENSION_EXCHANGES, MAX_REPLY_WORDS, RETRY_MAX_WORDS, MAX_TOKENS_REPLY, MAX_TOKENS_RETRY, MAX_TOKENS_RECAP, STOPWORDS, _stripHtml, _shortHeading, _contentWords, _buildPointWordSet, _stem, _stems, _buildFacts, _answers, _isSubstantive, _stripMarkdown, _wordCount, _looksTruncated, YES_NO_OPENER, LEAD_IN, OFFER, TAG_QUESTION, _asksYesNo, _describeError, _logError, _pointBrief, _freshFacts, _factDone, _freshState, _resetPointPacing, _restoreFacts, _targetFactIndex, _pointStems, _genericStems, _termStems, _mistakesFor, _laterPointsLine, _buildSystemPrompt, _recentHistoryBlock, _buildUserPrompt, _trimToLastSentence, STOCK_PRAISE, _stripStockPraise, FIX23, STOCK_OPENER, _stripStockOpener, _stripName, _cutToWords, _finishReply, _callWithLengthGuard, _buildRecapSystemPrompt, _pointConversation, _parseRecap, _generateRecap, _wantsTold, _finishByTelling, _afterPoint, _decide, _applyDecision, _openingFact, _partLine, _coveredLine, _toldLine, _toldRestLine, _remainingLine, _teachIndex, _getTutorReply, _looksLikeWrapUpQuestion, _replyEntry, _firstOpeningPrompt, _jumpPrompt, TEACH_THEN_ASK, _splitAnswer, _answerTaught, _pickChunk, _untaughtSentences, _taughtFor, FLOW_FIX, _markAnswer, _wantsSkip, _wantsTelling, _howSummary, _flow, FIRST_TIME, INLINE_DIAGRAMS, _inlineDiagram, _lessonTerms, _newTermsIn, _basics };
}

return { create, TUTOR_SONNET, TUTOR_MODEL, TUTOR_MODEL_SONNET, TUTOR_MODEL_HAIKU, tutorParams };
});
