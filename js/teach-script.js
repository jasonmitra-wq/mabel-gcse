/* ============================================================
   TEACH-SCRIPT.JS — the scripted AI lesson (brief docs/briefs/2026-11-11-scripted-teaching.md)
   Shared by the browser (window.TeachScript) and Node (require). No DOM.

   The lesson's teaching is written once, checked, and stored in
   lessons/<subject>/<id>.script.json. This engine plays it. Every word she
   sees comes from the script (or the lesson file's worked examples, the
   practice generators and the widgets). The AI is called for three things only:
     (a) marking a typed answer: it picks a branch the script has written
         (right / a named wrong answer / other wrong / don't know); the reply
         text is the script's, never the model's;
     (b) answering her own question, in at most 60 words, from the lesson file
         only; then the same step is asked again;
     (c) sorting her message when the code's rules are not sure.
   Flag SCRIPTED (below): on for the lessons in SCRIPTED_LESSONS only; every
   other lesson keeps the live-written tutor (js/teach-core.js) unchanged.
   ============================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.TeachScript = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  const SCRIPTED = true;
  const SCRIPTED_LESSONS = ['p2-current-voltage'];
  const MAX_WORDS = 60;
  const FB = { feedback: true };   // a reply to her answer (the checks let a correction say the rule again)

  const IDK = /^\W*(idk|i\s*(don'?t|dont|do not)\s*know|dunno|no idea|no clue|not sure|dk|don'?t know|dont know|i have no idea)\b/i;
  const GO_ON = /^\W*(next|next step|ok|okay|k|kk|done|got it|cool|yes|yeah|yep|sure|fine|alright|right|go on|continue|carry on|mhm|nice|i see|makes sense)\W*$/i;
  const MOVE_ON = /\b(move on|skip|next (one|bit|question)|just tell me|tell me the answer|what'?s the answer)\b/i;
  const words = t => String(t || '').trim().split(/\s+/).filter(Boolean).length;
  const strip = h => String(h || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  function uses(lessonId) { return SCRIPTED && SCRIPTED_LESSONS.includes(lessonId); }

  // A fixed shuffle of a tap question's options (the right one is not always first).
  function order(question, n) {
    let h = 0; for (const ch of String(question)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    const idx = Array.from({ length: n }, (_, k) => k);
    for (let k = n - 1; k > 0; k--) { h = (h * 1103515245 + 12345) >>> 0; const r = h % (k + 1); [idx[k], idx[r]] = [idx[r], idx[k]]; }
    return idx;
  }
  // Her answer as a number: the last number she typed ("2 times 5 so 10" is 10).
  function lastNumber(text) {
    const m = String(text || '').replace(/(\d),(\d{3})\b/g, '$1$2').match(/-?\d+(?:\.\d+)?|-?\.\d+/g);
    return m ? Number(m[m.length - 1]) : null;
  }
  // Her typed working, marked in code: the last number she typed is the answer ('right'), or the two numbers she typed with
  // the operation she named give it ('method': "v equals 0.4 times 2", "12 divided by 1.5"); otherwise 'wrong'.
  // (Site test 2026-11-11: only her last number was read, so right working with no result was marked "Not quite".)
  function judge(text, value, tol) {
    const t = String(text || '').replace(/(\d),(\d{3})\b/g, '$1$2');
    const nums = (t.match(/\d+(?:\.\d+)?|\.\d+/g) || []).map(Number);
    const op = /\b(times|multiply|multiplied|x)\b|×|\*/i.test(t) ? '*' : /\b(divide|divided|over)\b|÷|\//i.test(t) ? '/' : null;
    // Two numbers and an operation, no result: her sum is worked out ("1 divided by 3" is not 3).
    if (op && nums.length === 2) { const [p, q] = nums, r = op === '*' ? p * q : q ? p / q : NaN; return near(r, value, tol) ? 'method' : 'wrong'; }
    return nums.length && near(nums[nums.length - 1], value, tol) ? 'right' : 'wrong';
  }
  const near = (a, b, tol) => Math.abs(a - b) <= Math.max((tol || 0.01) * Math.abs(b), 1e-9);
  const dot = s => { const t = String(s || '').trim(); return /[.!?]$/.test(t) ? t : `${t}.`; };

  // env: { call(sys, user, maxTokens) → text, classify(sys, user, maxTokens) → text, practice (Practice lib),
  //        lesson (lesson JSON), script (script JSON), misconceptions: [{ id, text }] }
  function create(env) {
    const L = env.lesson, S = env.script, P = env.practice;
    const calls = { mark: 0, question: 0, sort: 0, own: 0, match: 0 };
    const kps = S.keyPoints;
    const step = st => (kps[st.kp] ? kps[st.kp].steps[st.i] : null);
    const pictureOf = (kp, id) => {
      const p = ((L.keyPoints[kp] || {}).pictures || []).find(x => x.diagram === id);
      return p ? [{ diagram: p.diagram, caption: p.caption || '', labels: p.labels || [] }] : [];
    };
    const entry = (st, text, extra = {}) => ({ role: 'assistant', text, pt: st.kp < kps.length ? st.kp : undefined, scripted: st.kp < kps.length ? kps[st.kp].steps[st.i] && kps[st.kp].steps[st.i].id : 'end', ...extra });

    // What a tap question shows: its options in a fixed order.
    const shown = q => order(q.question, q.options.length).map(k => q.options[k]);

    // ── Showing a step ──
    function show(st) {
      const s = step(st);
      if (!s) return showEnd(st);
      st.pend = null;
      if (s.type === 'say' || s.type === 'equation') {
        st.pend = { t: 'next' };
        return [entry(st, s.text, { choices: ['Next'], ...(s.picture ? { pictures: pictureOf(st.kp, s.picture) } : {}) })];
      }
      if (s.type === 'ask') {
        st.pend = { t: 'ask', level: 0, sub: null };
        return [entry(st, s.question, s.kind === 'tap' ? { choices: shown(s).map(o => o.text) } : {})];
      }
      if (s.type === 'widget') {
        const w = L.keyPoints[s.kpWidget].widget;
        const predicts = (w.options.predicts || []).filter(p => s.predicts.includes(p.id))
          .map(p => ({ ...p, ...((s.overrides || {})[p.id] || {}), explain: { ...(p.explain || {}), ...(((s.overrides || {})[p.id] || {}).explain || {}) } }));
        const options = { ...w.options, ...(s.options || {}), predicts, cover: true, controls: s.controls || [] };
        st.pend = { t: 'next' };
        return [entry(st, s.text, { choices: ['Next'], card: { type: 'widget', id: w.id, options, labels: s.labels || [] } })];
      }
      if (s.type === 'worked') {
        const x = s.question ? { question: s.question, steps: s.steps.map(t => ({ text: t })), answer: s.answer } : L.keyPoints[st.kp].workedExamples[s.example];
        st.pend = { t: 'worked', value: x.answer.value, unit: x.answer.unit, steps: x.steps.map(z => z.text) };
        return [entry(st, s.text, { choices: ['Next'], card: { type: 'worked', question: x.question, steps: x.steps.map(z => z.text), gate: true } })];
      }
      if (s.type === 'practice') {
        const q = practiceQuestion(s, st);
        st.pend = { t: 'practice', q, hinted: false };
        return [entry(st, `${s.label || 'Your turn:'} ${q.question}`)];
      }
      if (s.type === 'own') {
        st.pend = { t: 'own' };
        return [entry(st, s.prompt)];
      }
      if (s.type === 'score') {   // the end of the quiz: her score, from the quiz questions she answered
        const q = st.quiz || { n: 0, right: 0 };
        st.pend = { t: 'next' };
        return [entry(st, s.text.replace('{right}', q.right).replace('{n}', q.n), { choices: ['Next'] })];
      }
      throw new Error(`script step ${s.id}: unknown type ${s.type}`);
    }
    function showEnd(st) {
      st.pend = { t: 'end' };
      st.done = true;
      return [{ role: 'assistant', text: S.end.text, choices: S.end.buttons.slice(), scripted: 'end' }];
    }
    // A practice question of the kind the script asks for (the same kind as the worked example: plain numbers, no unit to convert).
    function practiceQuestion(s, st) {
      for (let k = 0; k < 400; k++) {
        const seed = (st.seed = (st.seed || 1) + 7919);
        const q = P.make(s.eq, seed);
        if (s.find && q.find !== s.find) continue;
        if (s.plain && q.steps.length !== 3) continue;   // a conversion or a rearrangement adds a step
        if (s.steps && q.steps.length !== s.steps) continue;   // e.g. 4: a current and a time first, then E = Q V
        if (s.whole && Object.values(q.given || {}).some(v => !Number.isInteger(v))) continue;   // whole numbers for her first go
        if ((st.askedQs || []).includes(q.question)) continue;   // never the same question twice in a lesson
        st.askedQs = [...(st.askedQs || []), q.question].slice(-40);
        return q;
      }
      return P.make(s.eq, 1);
    }
    // The practice hint names each number she is given, with its symbol and unit (review 2026-11-11: it did not say which was I and which t).
    function givenLine(q) {
      const e = L.keyPoints.flatMap(k => ((k.examBox || {}).equations || [])).find(x => x.id === q.equation);
      const parts = Object.entries(q.given || {}).map(([sym, v]) => { const u = e && (e.units || []).find(x => x.symbol === sym); return `${sym} = ${P.fmt(v)} ${u ? u.unitSymbol : ''}`.trim(); });
      return parts.length ? `In this question, ${parts.length > 1 ? `${parts.slice(0, -1).join(', ')} and ${parts[parts.length - 1]}` : parts[0]}.` : '';
    }
    // On to the next step; a finished key point is ticked.
    function advance(st, out, ticks) {
      st.i++;
      if (st.i >= kps[st.kp].steps.length) { ticks.push(st.kp); st.kp++; st.i = 0; }
      return out.concat(show(st));
    }

    // ── The AI calls ──
    // (c) sorting her message, when the code's rules are not sure.
    async function sort(st, text, waiting) {
      calls.sort++;
      const sys = `You sort one message from a 15-year-old in a GCSE tutoring chat. Reply with one word only: ANSWER, QUESTION, IDK, OFFTOPIC or MOVEON.`;
      const user = [
        `The tutor's message she is replying to: "${waiting}"`,
        `Her message: "${text}"`,
        `ANSWER: she tries to answer, even unsure ("is it the voltmeter?", "the charge stops").`,
        `QUESTION: she asks something of her own: what a word means, why, how ("whats a coulomb", "why tho", "wdym", "what?").`,
        `IDK: she says she does not know.`,
        `OFFTOPIC: not about the lesson (food, her phone, "lol", "this is boring").`,
        `MOVEON: she asks to skip, move on or be told the answer.`,
      ].join('\n');
      try {
        const raw = String(await (env.classify || env.call)(sys, user, 10) || '').toUpperCase();
        const m = raw.match(/\b(ANSWER|QUESTION|IDK|OFFTOPIC|MOVEON)\b/);
        return m ? m[1].toLowerCase() : 'answer';
      } catch { return 'answer'; }
    }
    // (b) her own question: answered from the lesson file only, at most 60 words, no question back.
    async function answerHer(st, text) {
      calls.question++;
      const upTo = Math.min(st.kp, kps.length - 1);
      const content = L.keyPoints.slice(0, upTo + 1).map((k, i) => `Key point ${i + 1}: ${strip(k.content)}`).join('\n\n');
      const sys = `You are a kind physics tutor. A 15-year-old who is meeting this topic for the first time asked a question in the middle of a lesson. Answer exactly what she asked, in plain everyday words, in one to three short sentences (at most ${MAX_WORDS} words), using ONLY the lesson content you are given. If the content does not answer it, say that it comes later in the course. Do not ask a question. Do not quote her words back. Do not mention revision or exams.`;
      // A question of the script's waiting for her answer: never answered for her here (site test 2026-11-12: "wdym" got
      // "the current is the same everywhere", the answer, and then the same question again).
      const s = step(st), pend = st.pend || {};
      const q = pend.sub || (pend.t === 'ask' ? s : null);
      const waiting = q ? { question: q.question, answer: q.kind === 'tap' ? (q.options.find(o => o.branch === 'right') || {}).text : q.answer ? `${q.answer.value} ${q.answer.unit}` : (q.expected || [])[0] }
        : pend.t === 'practice' ? { question: pend.q.question, answer: `${P.fmt(pend.q.answer.value)} ${pend.q.answer.unit}` }
        : pend.t === 'own' ? { question: s.prompt, answer: s.points.join('; ') } : null;
      const user = [`The lesson content so far:\n${content}`, `What the tutor had just said: "${st.lastText || ''}"`,
        waiting ? `A question is waiting for her own answer: "${waiting.question}" (its answer: "${waiting.answer}"). Never give that answer, or anything that gives it away, in your reply. If she is asking what the question means ("wdym", "what?"), say the question again in other, simpler words, without its answer.` : '',
        `Her question: "${text}"`].filter(Boolean).join('\n\n');
      try {
        // "It's asking you to…" names nothing: the question is named (site test 2026-11-12, F2).
        let a = String(await env.call(sys, user, 160) || '').trim().replace(/^(it'?s|it is|this is|that'?s)\s+asking\b/i, 'The question is asking').replace(/^(it|this|that)\s+means\b/i, 'The question means');
        // At most 60 words, whole sentences; no question back.
        const sents = (a.match(/[^.!?]+[.!?]+/g) || [a]).map(x => x.trim()).filter(x => x && !/\?$/.test(x));
        let out = '';
        for (const x of sents) { if (words(`${out} ${x}`) > MAX_WORDS) break; out = `${out} ${x}`.trim(); }
        return out || 'Good thing to ask. That comes later in the course.';
      } catch { return `I can't answer that right now. Let's carry on.`; }
    }
    // (a) marking: which of the script's branches her typed answer is. The reply text is the script's.
    async function mark(st, q, text) {
      calls.mark++;
      const branches = Object.keys(q.wrong || {});
      const mis = (env.misconceptions || []).filter(m => branches.includes(m.id));
      const sys = `You mark one typed answer from a 15-year-old GCSE student. Reply with one label only.`;
      const user = [
        `The question: "${q.question}"`,
        q.expected ? `A right answer says: ${q.expected.map(x => `"${x}"`).join(' or ')}.` : '',
        `The lesson's rules: ${strip((L.keyPoints[st.kp] || {}).examBox ? (L.keyPoints[st.kp].examBox.definitions || []).join(' ') : '')}`,
        mis.length ? `Known wrong ideas: ${mis.map(m => `${m.id}: ${m.text}`).join(' | ')}` : '',
        `Her answer: "${text}"`,
        `Labels: RIGHT (right in substance, any spelling or wording), ${mis.map(m => `${m.id} (her answer states that wrong idea)`).join(', ')}${mis.length ? ', ' : ''}OTHER (any other wrong answer), IDK (she does not know).`,
      ].filter(Boolean).join('\n');
      try {
        const raw = String(await env.call(sys, user, 10) || '').toUpperCase();
        const m = raw.match(new RegExp(`\\b(RIGHT|IDK|OTHER${mis.length ? '|' + mis.map(x => x.id).join('|') : ''})\\b`));
        if (!m) return 'other';
        return m[1] === 'RIGHT' ? 'right' : m[1] === 'IDK' ? 'idk' : m[1] === 'OTHER' ? 'other' : m[1];
      } catch { return 'other'; }
    }
    // (a) a tap question answered in her own words: which option she means (one short call).
    async function matchOption(q, text) {
      const opts = shown(q);
      const exact = opts.findIndex(o => o.text.toLowerCase() === String(text).trim().toLowerCase().replace(/[.!?"]+$/, ''));
      if (exact !== -1) return opts[exact];
      calls.match++;
      try {
        const sys = `You match a student's reply to the options of a multiple-choice question. Reply with one number only.`;
        const user = `The question: "${q.question}"\nThe options:\n${opts.map((o, j) => `${j + 1}. ${o.text}`).join('\n')}\n\nShe typed: "${text}"\n\nWhich option does she mean, in any words? Reply with its number, or 0 if none.`;
        const k = Number((String(await env.call(sys, user, 5) || '').match(/\d+/) || [0])[0]);
        return k >= 1 && k <= opts.length ? opts[k - 1] : null;
      } catch { return null; }
    }
    // (a) her own-words line: which of the points it makes (numbers); the reply is built from the script's points.
    async function ownPoints(s, text) {
      calls.own++;
      try {
        const sys = `You check a student's one-line answer against points. Reply with the numbers of the points her line makes, separated by commas, or 0.`;
        const user = `The question: "${s.prompt}"\nThe points:\n${s.points.map((p, k) => `${k + 1}. ${p}`).join('\n')}\n\nHer line: "${text}"\n\nWhich points does her line make, in any words? A point she gets wrong is not made.`;
        return [...new Set((String(await env.call(sys, user, 20) || '').match(/\d+/g) || []).map(Number).filter(n => n >= 1 && n <= s.points.length))].map(n => n - 1);
      } catch { return []; }
    }

    // ── Start and reply ──
    function start(st) {
      Object.assign(st, { kp: 0, i: 0, pend: null, seed: 1, done: false });
      const out = show(st);
      st.lastText = out[out.length - 1].text;
      return { entries: out, ticks: [] };
    }
    // Her message (or a button she tapped). Returns { entries, ticks, kind? } — kind 'slides' or 'home' at the end.
    async function reply(st, raw) {
      const text = String(raw || '').trim();
      const ticks = [];
      const out = await handle(st, text, ticks);
      if (out.kind) return out;
      st.lastText = out.length ? out[out.length - 1].text : st.lastText;
      return { entries: out, ticks };
    }
    // The question again after her question or an off-topic reply; the lead changes each time, so the same line is never sent twice in a row.
    const LEADS = ['Back to the question:', 'Now, the question again:', 'Have a go at the question:'];
    const lead = st => LEADS[(st.reask = (st.reask || 0) + 1) % LEADS.length];
    const sameAsk = (st, s, first = null) =>
      entry(st, `${first || lead(st)} ${s.question}`, s.kind === 'tap' ? { choices: shown(s).map(o => o.text) } : {});

    async function handle(st, text, ticks) {
      const pend = st.pend || { t: 'next' };
      const s = step(st);
      if (pend.t === 'end') {
        if (/slides/i.test(text)) return { kind: 'slides', entries: [], ticks };
        if (/home/i.test(text)) return { kind: 'home', entries: [], ticks };
        // "ok thx", "bye": a fixed line and the buttons, no call (site test 2026-11-12: the closing line was sent
        // again word for word). A question of hers is answered; the buttons follow with a different line each time.
        const endLine = { role: 'assistant', text: `Tap ${S.end.buttons.map(b => `"${b}"`).join(' or ')} when you are ready.`, choices: S.end.buttons.slice(), scripted: 'end' };
        if (GO_ON.test(text) || /\b(thanks|thank you|thx|ty|bye|cya|see you|cheers)\b/i.test(text) || words(text) <= 2) {
          st.endN = (st.endN || 0) + 1;
          return [{ ...endLine, text: st.endN % 2 ? `You're welcome. ${endLine.text}` : endLine.text }];
        }
        const a = await answerHer(st, text);
        return [entry(st, a), endLine];
      }
      // What kind of message it is: the clear cases in code, the rest by one short call.
      const tapped = pend.t === 'ask' && s && s.kind === 'tap' && !pend.sub ? shown(s).find(o => o.text.toLowerCase() === text.toLowerCase())
        : pend.sub ? shown(pend.sub).find(o => o.text.toLowerCase() === text.toLowerCase()) : null;
      let kind;
      if (tapped) kind = 'answer';
      else if (IDK.test(text)) kind = 'idk';
      else if (GO_ON.test(text)) kind = 'next';
      else if (/^\W*-?\d+(\.\d+)?\s*[a-zA-ZΩ]{0,3}\W*$/.test(text)) kind = 'answer';
      else if (MOVE_ON.test(text)) kind = 'moveon';
      else kind = await sort(st, text, st.lastText || '');

      if (kind === 'question') {
        const a = await answerHer(st, text);
        if (pend.t === 'ask') return [entry(st, a), sameAsk(st, pend.sub || s)];
        if (pend.t === 'practice') return [entry(st, a), entry(st, `${lead(st)} ${pend.q.question}`)];
        if (pend.t === 'own') return [entry(st, a), entry(st, `${lead(st)} ${s.prompt}`)];
        return [entry(st, a, { choices: ['Next'] })];
      }
      if (kind === 'offtopic') {
        if (pend.t === 'ask') return [sameAsk(st, pend.sub || s, 'No worries. Back to the question:')];
        if (pend.t === 'practice') return [entry(st, `No worries. Back to the question: ${pend.q.question}`)];
        if (pend.t === 'own') return [entry(st, `No worries. ${s.prompt}`)];
        return [entry(st, `No worries. Tap Next when you are ready.`, { choices: ['Next'] })];
      }

      switch (pend.t) {
        case 'next':
          return advance(st, [], ticks);
        case 'worked': {
          const n = lastNumber(text);
          if (n !== null && kind === 'answer') {
            const ok = near(n, pend.value, 0.01);
            st.pend = { t: 'next' };
            return [entry(st, ok ? `Yes, that's right: ${pend.value} ${pend.unit}.` : `Not quite: it's ${pend.value} ${pend.unit}. The steps on the card show how.`, { choices: ['Next'] })];
          }
          return advance(st, [], ticks);
        }
        case 'ask': return handleAsk(st, s, pend, text, kind, ticks);
        case 'practice': {
          const q = pend.q, ans = `${P.fmt(q.answer.value)} ${q.answer.unit}`, steps = q.steps.map(x => dot(x.text)).join(' ');
          if (kind === 'idk' || kind === 'moveon') {
            if (!pend.hinted && kind === 'idk') { pend.hinted = true; return [entry(st, `That's fine. Here is how to start: ${q.steps.slice(0, Math.max(1, q.steps.length - 2)).map(x => dot(x.text)).join(" ")} ${givenLine(q)} Now put the numbers in. What do you get?`)]; }
            if (s.quiz) { st.quiz = st.quiz || { n: 0, right: 0 }; st.quiz.n++; }
            return advance(st, [entry(st, `${pend.hinted ? 'Here' : "That's fine. Here"} is how it goes. ${steps}`, FB)], ticks);
          }
          const n = lastNumber(text);
          if (n === null) return [entry(st, `Type your answer as a number. ${q.question}`)];
          const kind2 = judge(text, q.answer.value, q.tolerance || 0.02);
          if (kind2 === 'wrong' && !pend.tried && !pend.hinted) { pend.tried = true; return [entry(st, `Not quite. Check your working and have one more go: ${q.question}`, FB)]; }
          if (s.quiz) { st.quiz = st.quiz || { n: 0, right: 0 }; st.quiz.n++; if (kind2 !== 'wrong') st.quiz.right++; }
          return advance(st, [entry(st, kind2 === 'right' ? `Yes, that's right: ${ans}.` : kind2 === 'method' ? `Yes, that's the right working: it comes to ${ans}.` : `Not quite: it's ${ans}. ${steps}`, FB)], ticks);
        }
        case 'own': {
          if (kind === 'idk' || kind === 'moveon' || words(text) < 2) return advance(st, [entry(st, s.idk, FB)], ticks);
          const got = await ownPoints(s, text);
          const has = s.points.filter((p, k) => got.includes(k)), miss = s.points.filter((p, k) => !got.includes(k));
          const list = xs => (xs.length <= 1 ? xs.join('') : `${xs.slice(0, -1).join(', ')}, and ${xs[xs.length - 1]}`);
          const say = !has.length ? `A good line would say: ${list(s.points)}.`
            : !miss.length ? `Yes, your line has it: ${list(has)}.`
            : `Your line gets this right: ${list(has)}. A full line also says: ${list(miss)}.`;
          return advance(st, [entry(st, say, FB)], ticks);
        }
      }
      return advance(st, [], ticks);
    }

    async function handleAsk(st, s, pend, text, kind, ticks) {
      // The easier, smaller question of the second "don't know" level.
      if (pend.sub) {
        const sub = pend.sub;
        pend.sub = null;
        const opt = kind === 'idk' ? null : await matchOption(sub, text);
        const r = kind === 'idk' ? "That's fine." : opt && opt.branch === 'right' ? sub.right : (sub.wrong.other || sub.right);
        // Then the answer with why, and on (asking the first question again would ask what she has just been told).
        return advance(st, [entry(st, `${r} ${s.answerWhy}`, FB)], ticks);
      }
      let branch;
      if (kind === 'moveon') branch = 'giveup';
      else if (kind === 'idk') branch = 'idk';
      else if (kind === 'next') return [sameAsk(st, s, 'Tap or type your answer first:')];
      else if (s.kind === 'tap') {
        const opt = await matchOption(s, text);
        branch = opt ? opt.branch : 'other';
      } else if (s.kind === 'number') {
        const n = lastNumber(text);
        if (n === null) return [entry(st, `Type your answer as a number. ${s.question}`)];
        const j = judge(text, s.answer.value, s.answer.tolerance);
        if (j === 'right' || j === 'method') branch = 'right';
        else branch = ((s.wrongValues || []).find(w => near(n, w.value, 0.02)) || { branch: 'other' }).branch;
      } else branch = await mark(st, s, text);

      if (s.quiz && branch !== 'idk') { st.quiz = st.quiz || { n: 0, right: 0 }; st.quiz.n++; if (branch === 'right') st.quiz.right++; }
      if (branch === 'right') return advance(st, [entry(st, s.right, FB)], ticks);
      if (branch === 'idk') {
        const lv = (s.idk || [])[pend.level];
        pend.level++;
        if (lv && lv.hint) return [entry(st, lv.hint, s.kind === 'tap' ? { choices: shown(s).map(o => o.text), easier: true } : { easier: true })];
        if (lv && lv.ask) { pend.sub = lv.ask; return [entry(st, lv.ask.question, { choices: shown(lv.ask).map(o => o.text), easier: true })]; }
        if (s.quiz) { st.quiz = st.quiz || { n: 0, right: 0 }; st.quiz.n++; }
        return advance(st, [entry(st, `That's fine. ${s.answerWhy}`, FB)], ticks);
      }
      if (branch === 'giveup') return advance(st, [entry(st, s.answerWhy, FB)], ticks);
      return advance(st, [entry(st, (s.wrong || {})[branch] || s.wrong.other, FB)], ticks);
    }

    return { start, reply, calls, show, shown, points: kps.length };
  }

  return { create, uses, SCRIPTED, SCRIPTED_LESSONS, order, IDK, VERSION: 3 };
});
