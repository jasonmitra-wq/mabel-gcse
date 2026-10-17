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
    };
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
        `After you teach an idea, ask her to use it (for example on a small number or an everyday case), not to repeat the words you just said. If her answer shows a wrong idea, name the wrong idea and correct it with one reason before you move on.`,
      ].join('\n') : '',
    ].filter(Boolean).join('\n');
  }

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
    } else if (decision.kind === 'checkin') {
      lines.push(`She has spent several exchanges on this key point and some of it is still to cover. Do NOT teach anything in this message and do not ask about any part of the topic. In ONE short, friendly line, ask her one question meaning "Do you want me to just tell you the rest of this one?" — yes means you will tell her the rest, no means she keeps working on it herself. It must be a single yes-or-no question — do not add "or shall we move on" or any second option. That question is the whole message.`);
      lines.push(_pointBrief(decision.point), _coveredLine(decision.idx, decision.facts));
    } else if (decision.kind === 'fact') {
      lines.push(`${decision.keepsWorking ? `She chose to keep working through this point herself, so carry on with it. ` : ''}${_toldLine(decision.toldNow) || (decision.keepsWorking ? '' : `Acknowledge her reply naturally in one short sentence. `)}Then carry on with the same key point: teach the next part of it, named below, in AT MOST TWO SENTENCES, then ask one question about that part. Teach only this part now — the other parts come later. Do not answer your own question.`);
      lines.push(_pointBrief(decision.point), _coveredLine(decision.idx, decision.facts),
        _partLine(decision.fact), _remainingLine(decision.idx, decision.facts, decision.fact));
    } else if (decision.kind === 'next') {
      lines.push(`${_toldRestLine(decision.toldRest) || _toldLine(decision.toldNow) || `Acknowledge her reply naturally in one short sentence. `}Then move on to the next key point below: introduce it in AT MOST TWO SENTENCES, starting from the first thing its content describes — do not explain the whole point — then ask one question about the part named below. Do not answer your own question.`);
      lines.push(_pointBrief(decision.point), _partLine(_openingFact(decision.nextIndex)),
        _remainingLine(decision.nextIndex, _state.facts[decision.nextIndex], _openingFact(decision.nextIndex)));
    } else if (decision.kind === 'resume') {
      lines.push(`${_toldRestLine(decision.toldRest) || _toldLine(decision.toldNow) || `Acknowledge her reply naturally in one short sentence. `}Then take her back to where she was before she went off to look at something else: the key point below. She had already started it, so remind her of it briefly in AT MOST TWO SENTENCES, then ask one question about the part named below. Do not answer your own question.`);
      lines.push(_pointBrief(decision.point), _partLine(_openingFact(decision.nextIndex)),
        _remainingLine(decision.nextIndex, _state.facts[decision.nextIndex], _openingFact(decision.nextIndex)));
    } else if (decision.kind === 'complete') {
      lines.push(`${_toldRestLine(decision.toldRest) || _toldLine(decision.toldNow) || `Acknowledge her reply naturally. `}${FIX_T4
        ? `Then say you have reached the end of this lesson, name in a few words one thing she got right, and close warmly in one short line. Do not say she has covered, learned or mastered everything, and do not list topics.`
        : `Then let her know all ${_points.length} key points in this lesson have now been covered, and close warmly in one short line.`} Do not ask a question. Do not offer practice questions. She can ask you anything further, or leave, whenever she likes.`);
    } else if (_state.wrapOffered) {
      lines.push(`All ${_points.length} key points in this lesson have already been covered, and you have ALREADY asked her whether she wants to go over anything else. Do not ask that again in any form — no "anything else?", no "does that feel clear?", no "shall we stop there?". Respond to what she actually said and then stop. If she shows she is finished (no, nothing, bye, thanks, I'm good), give ONE warm, complete goodbye and nothing after it — no question of any kind. A light sign-off such as "same time next week?" is fine as that closing line itself, but only as the goodbye.`);
    } else {
      lines.push(`All ${_points.length} key points in this lesson have already been covered. Respond naturally and helpfully to whatever she said. Do not offer practice questions and do not present lettered or numbered options. Ask at most one closing question, and only if it is genuinely useful.`);
    }
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

  async function _callWithLengthGuard(sys, user, noYesNo = false) {
    const limits = [
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
    for (let i = 0; i < limits.length; i++) {
      const a = limits[level];
      const note = [a.note, yesNo ? yesNoNote : '', eitherOr ? eitherOrNote : '', noQuestion ? noQuestionNote : '', many ? manyNote : '', naming ? namingNote : ''].filter(Boolean).join('\n');
      const reply = (await AI.call(sys, note ? `${user}\n\n${note}` : user, a.tokens)).trim();
      const plain = _stripMarkdown(reply);
      last = reply;
      const cut = _looksTruncated(plain);
      const long = !cut && _wordCount(plain) > a.words;
      yesNo = noYesNo && _asksYesNo(plain);
      eitherOr = FIX25 && noYesNo && _asksEitherOr(plain);
      noQuestion = FIX25 && noYesNo && !cut && _asksNothing(plain);
      many = FIX25 && noYesNo && _asksMoreThanOne(plain);
      naming = FIX_T4 && noYesNo && _asksForName(plain);
      const badQ = yesNo || eitherOr || noQuestion || many || naming;
      if (!cut && !long && !badQ) return _finishReply(reply);
      if (!cut && !badQ && !complete) complete = reply; // finished, just long — usable if nothing better
      if (cut || long) level = Math.min(level + 1, limits.length - 1);
    }
    // Never show a sentence that stops dead: prefer a complete-but-long reply,
    // otherwise drop the unfinished tail of the last one.
    return _finishReply(complete || _trimToLastSentence(last) || last);
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
    return { idx, verdict: covered, facts, toldRest: rem.map(j => point.facts[j]),
             pacing: { turnsOnPoint: 0, checkinAsked: false, extensionLeft: null },
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

    // A point with no key terms has nothing to split into parts: one real answer finishes it.
    if (!point.facts.length) {
      const substantive = _isSubstantive(userText, point.wordSet);
      if (!substantive && !_state.retriedCurrent) return { kind: 'retry', idx, point, fact: null };
      return { idx, verdict: substantive, ..._afterPoint(idx, substantive) };
    }

    const cur = _state.facts[idx];
    const answered = cur.answered.slice(), told = cur.told.slice();
    let target = _targetFactIndex(idx);
    if (target === -1) target = answered.findIndex(a => !a); // defensive: nothing left to teach

    const hit = target !== -1 && _answers(userText, point.facts[target].words);
    if (hit) answered[target] = true;
    // Anything else she has clearly shown, unprompted.
    point.facts.forEach((f, j) => {
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
      if (_wantsTold(userText) || !rem.length) return _finishByTelling(idx, point, facts, rem);
      // No — or still working on the topic, even if the words didn't match a
      // part — means she keeps going herself. The extension limit bounds it.
      const saysNo = /^\W*(no|nope|nah|not yet)\b/i.test(userText)
        || /\b(don'?t|do not|no need to) (just )?tell\b|\b(let me|i'?ll|i want to|i'?d like to) (try|have a go|work it out)\b/i.test(userText);
      if (saysNo || _isSubstantive(userText, point.wordSet)) {
        return { kind: 'fact', idx, point, fact: point.facts[rem[0]], facts, keepsWorking: true,
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
    if (capHit && remaining().length) {
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
        const onTopic = _isSubstantive(userText, point.wordSet);
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
    // Every part is now covered — answered by her or told to her — so the point
    // is covered. Its checkmark, its terms and the move to the next point all
    // come from this one verdict.
    const covered = point.facts.every((f, j) => answered[j] || told[j]);
    return { idx, verdict: covered, facts, toldNow,
             pacing: { turnsOnPoint: 0, checkinAsked: false, extensionLeft: null },
             ..._afterPoint(idx, covered) };
  }

  function _applyDecision(decision) {
    if (decision.kind === 'free') return;
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
    return fact
      ? `She hasn't got this after two goes: ${fact.term} — ${fact.def}. Don't ask her about it again and don't make a thing of it. In ONE short friendly sentence, simply tell her the answer so she has it. `
      : '';
  }

  // She's ready to move on (or the extension she asked for has run out) with
  // parts still uncovered: give her those plainly instead of quizzing on them.
  function _toldRestLine(facts) {
    return facts && facts.length
      ? `These parts of the key point she has just finished were never covered: ${facts.map(f => `${f.term} — ${f.def}`).join('; ')}. In AT MOST TWO SHORT SENTENCES, tell her these plainly so she has them. Do not ask her about them. `
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

  // Which key point a reply will be teaching, so the brief can be limited to it.
  function _teachIndex(d) {
    if (!d) return null;
    if (d.kind === 'fact' || d.kind === 'retry') return d.idx;
    if (d.kind === 'next' || d.kind === 'resume') return d.nextIndex;
    return null;
  }

  async function _getTutorReply(userText) {
    const decision = _decide(userText);
    const sys  = _buildSystemPrompt(_teachIndex(decision));
    const user = _buildUserPrompt(userText, decision);
    // Teaching turns only: the check-in and the closing turns ask yes/no on purpose.
    const reply = await _callWithLengthGuard(sys, user, _teachIndex(decision) != null);

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
    if (d.kind === 'retry' || d.kind === 'fact') {
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
    return [
      `Begin the lesson. In AT MOST TWO SENTENCES TOTAL, warmly welcome ${WHO} (using the lesson overview above in your own words, don't just repeat it) and introduce the first key point below, starting from the first thing its content describes — do not explain the whole point. Then ask one question about the part named below. Do not answer your own question.`,
      _pointBrief(_points[0]),
      _partLine(_openingFact(0)),
      _remainingLine(0, _state.facts[0], _openingFact(0)),
    ].filter(Boolean).join('\n\n');
  }

  // Same shape as the lesson's own opening: a short introduction, then one
  // question. Deliberately sends NO conversation history — with the previous
  // exchange in front of it the model carries that conversation on instead of
  // starting this point from the beginning.
  function _jumpPrompt(index) {
    return [
      `${WHO_CAP} is starting a new key point: "${_points[index].heading}". Teach it from the very beginning, as if you had just reached it. This is a fresh start, not a continuation — do not refer back to anything discussed before, and do not greet her again. She may not have covered the earlier points, so don't assume she knows any terms from them. In AT MOST TWO SENTENCES, introduce this key point, starting from the first thing its content describes — do not explain the whole point — then ask one question about the part named below. Do not answer your own question.`,
      _pointBrief(_points[index]),
      _partLine(_points[index].facts[0] || null),
      // A jump restarts the point, so every part is outstanding again —
      // _commitJump resets them once this reply actually arrives.
      _remainingLine(index, _freshFacts(index, false), _points[index].facts[0] || null),
    ].filter(Boolean).join('\n\n');
  }

  // The lesson's key points with what teaching needs: each point's word set
  // and its parts (facts).
  function _buildPoints(data) {
  return (data.keyPoints || []).map(kp => ({
    heading: kp.heading,
    content: kp.content,
    keyTerms: kp.keyTerms || [],
    diagram: kp.diagram || null,
    diagramCaption: kp.diagramCaption || '',
    diagramExamTip: !!kp.diagramExamTip,
    wordSet: _buildPointWordSet(kp),
    facts: _buildFacts(kp),
  }));
  }

  return { bind, _buildPoints, HISTORY_TURNS, RECAP_TURNS, CHECKIN_AFTER, EXTENSION_EXCHANGES, MAX_REPLY_WORDS, RETRY_MAX_WORDS, MAX_TOKENS_REPLY, MAX_TOKENS_RETRY, MAX_TOKENS_RECAP, STOPWORDS, _stripHtml, _shortHeading, _contentWords, _buildPointWordSet, _stem, _stems, _buildFacts, _answers, _isSubstantive, _stripMarkdown, _wordCount, _looksTruncated, YES_NO_OPENER, LEAD_IN, OFFER, TAG_QUESTION, _asksYesNo, _describeError, _logError, _pointBrief, _freshFacts, _factDone, _freshState, _resetPointPacing, _restoreFacts, _targetFactIndex, _pointStems, _genericStems, _termStems, _mistakesFor, _laterPointsLine, _buildSystemPrompt, _recentHistoryBlock, _buildUserPrompt, _trimToLastSentence, STOCK_PRAISE, _stripStockPraise, FIX23, STOCK_OPENER, _stripStockOpener, _stripName, _cutToWords, _finishReply, _callWithLengthGuard, _buildRecapSystemPrompt, _pointConversation, _parseRecap, _generateRecap, _wantsTold, _finishByTelling, _afterPoint, _decide, _applyDecision, _openingFact, _partLine, _coveredLine, _toldLine, _toldRestLine, _remainingLine, _teachIndex, _getTutorReply, _looksLikeWrapUpQuestion, _replyEntry, _firstOpeningPrompt, _jumpPrompt };
}

return { create, TUTOR_SONNET, TUTOR_MODEL, TUTOR_MODEL_SONNET, TUTOR_MODEL_HAIKU, tutorParams };
});
