/* ============================================================
   PERSONALITY.JS — Silver & skating jokes, profile gathering
   
   The tutor asks about Silver and skating naturally during
   lessons, stores what Mabel says, and uses it to make
   every subsequent joke more specific and personal.
   ============================================================ */

const Personality = (() => {

  // ── JOKE LIBRARY ─────────────────────────────────────────
  // Each joke has a generic fallback + specific variants
  // that unlock once we know more about Silver / skating.
  // 'requires' lists profile fields needed for the variant.

  const SILVER_JOKES = [

    // Generic — always available
    {
      id: 'silver_gravity',
      requires: [],
      text: () => `😸 Quick important question before we continue — has Silver knocked anything off a surface today? Asking for science. Gravity is a real force, Silver. A very real force.`
    },
    {
      id: 'silver_notes',
      requires: [],
      text: () => `😸 Silver update required: is she currently sitting on your revision notes? Because that counts as studying. For her, at least.`
    },
    {
      id: 'silver_expert',
      requires: [],
      text: () => `😸 Fun fact: Silver has almost certainly absorbed more biology than she lets on. Cats spend 70% of their lives sleeping, which means their metabolic rate is extremely well optimised. She's practically a case study.`
    },
    {
      id: 'silver_osmosis',
      requires: [],
      text: () => `😸 Silver probably understands osmosis better than most GCSE students. She clearly knows how to move from a region of high comfort (your lap) to low comfort (a cold windowsill) for absolutely no reason.`
    },

    // Colour-specific (unlocks once we know Silver's colour)
    {
      id: 'silver_colour_grey',
      requires: ['silver.colour'],
      condition: p => p.silver.colour?.toLowerCase().includes('grey') || p.silver.colour?.toLowerCase().includes('gray'),
      text: p => `😸 Grey cat, you said. Very distinguished. Silver is basically dressed for an exam already. Unlike some of us.`
    },
    {
      id: 'silver_colour_black',
      requires: ['silver.colour'],
      condition: p => p.silver.colour?.toLowerCase().includes('black'),
      text: p => `😸 Black cat — officially good luck in exams. You've got this in the bag. (Silver is carrying the team.)`
    },
    {
      id: 'silver_colour_white',
      requires: ['silver.colour'],
      condition: p => p.silver.colour?.toLowerCase().includes('white'),
      text: p => `😸 White cat. Very clean. Very judgmental. I imagine Silver is watching your revision technique and finding it adequate at best.`
    },

    // Habit-specific (unlocks once we know Silver's habits)
    {
      id: 'silver_habit_pens',
      requires: ['silver.habits'],
      condition: p => p.silver.habits?.some(h => h.toLowerCase().includes('pen') || h.toLowerCase().includes('knock')),
      text: p => `😸 Right. Has Silver knocked your pen off the desk yet today? Every time she does that it's actually a reminder to pick it back up and keep writing. She's helping. Probably.`
    },
    {
      id: 'silver_habit_sits',
      requires: ['silver.habits'],
      condition: p => p.silver.habits?.some(h => h.toLowerCase().includes('sit')),
      text: p => `😸 If Silver is sitting on your notes right now, that is technically a revision technique. She's applying pressure to the information. Scientifically speaking.`
    },
    {
      id: 'silver_mood_grumpy',
      requires: ['silver.mood'],
      condition: p => p.silver.mood?.toLowerCase().includes('grump') || p.silver.mood?.toLowerCase().includes('grouchy'),
      text: p => `😸 Grumpy cat energy is actually very useful for revision. Silver disapproves of everything, including incorrect exam answers. Use that.`
    },
  ];

  const SKATING_JOKES = [

    // Generic — always available (we know she's 6 months in, has lessons)
    {
      id: 'skating_six_months',
      requires: [],
      text: () => `🛸 Six months in — you're at the stage where it starts to click. Or so I'm told. How did the last lesson go?`
    },
    {
      id: 'skating_lessons',
      requires: [],
      text: () => `🛸 How are the lessons going? I imagine a skating coach is quite similar to a biology tutor — both spend a lot of time saying the same thing in slightly different ways until something clicks.`
    },
    {
      id: 'skating_ice',
      requires: [],
      text: () => `🛸 Completely unrelated, but — does ice ever feel less slippery, or do you just get better at being on something slippery? Asking for a metaphor about learning biology.`
    },
    {
      id: 'skating_membranes',
      requires: [],
      text: () => `🛸 You know what ice skating and cell membranes have in common? Both are about controlled movement across a very specific boundary. (That's a stretch but I'm committed to it.)`
    },

    // Current move specific (unlocks when we know what she's working on)
    {
      id: 'skating_axel',
      requires: ['skating.currentMove'],
      condition: p => p.skating.currentMove?.toLowerCase().includes('axel'),
      text: p => `🛸 Still working on the axel? For what it's worth, understanding enzyme kinetics and landing an axel both require an embarrassing number of repetitions before they feel natural. You've got this.`
    },
    {
      id: 'skating_spin',
      requires: ['skating.currentMove'],
      condition: p => p.skating.currentMove?.toLowerCase().includes('spin'),
      text: p => `🛸 How's the spin coming along? I imagine that moment when it finally clicks is a bit like when an exam topic suddenly makes sense — slightly dizzying, but in a good way.`
    },
    {
      id: 'skating_jump',
      requires: ['skating.currentMove'],
      condition: p => p.skating.currentMove?.toLowerCase() && !p.skating.currentMove.toLowerCase().includes('axel'),
      text: p => `🛸 Still on the ${p.skating.currentMove}? The trick with any new skill — skating or biology — is that it feels impossible right until the moment it doesn't. Keep going.`
    },

    // Competes (unlocks when we know)
    {
      id: 'skating_competes',
      requires: ['skating.competes'],
      condition: p => p.skating.competes === true,
      text: p => `🛸 When's your next competition? GCSEs and skating competitions have a lot in common — both involve performing under pressure things you've been practising for months. You'll be fine at both.`
    },
    {
      id: 'skating_no_compete',
      requires: ['skating.competes'],
      condition: p => p.skating.competes === false,
      text: p => `🛸 Good call keeping it as a hobby for now. GCSE revision is already enough pressure without adding competitions on top. Silver agrees. (She's never competed at anything and she's thriving.)`
    },
  ];

  // ── SELECT JOKE ──────────────────────────────────────────
  // Pick the best available joke for this moment —
  // prefer specific ones, fall back to generic.

  function getJoke(type, usedIds = []) {
    const p = Store.getMabelProfile();
    const pool = type === 'silver' ? SILVER_JOKES : SKATING_JOKES;

    // Specific jokes first (those with a condition that passes)
    const specific = pool.filter(j =>
      j.requires.length > 0 &&
      !usedIds.includes(j.id) &&
      _requirementsMet(j, p) &&
      (!j.condition || j.condition(p))
    );

    if (specific.length) {
      const pick = specific[Math.floor(Math.random() * specific.length)];
      return { id: pick.id, text: pick.text(p) };
    }

    // Generic fallback
    const generic = pool.filter(j =>
      j.requires.length === 0 && !usedIds.includes(j.id)
    );

    if (generic.length) {
      const pick = generic[Math.floor(Math.random() * generic.length)];
      return { id: pick.id, text: pick.text(p) };
    }

    // All used — just pick any
    const any = pool[Math.floor(Math.random() * pool.length)];
    return { id: any.id, text: any.text(p) };
  }

  function _requirementsMet(joke, profile) {
    return joke.requires.every(req => {
      const [obj, key] = req.split('.');
      const val = profile[obj]?.[key];
      return val !== null && val !== undefined &&
        !(Array.isArray(val) && val.length === 0);
    });
  }

  // ── QUESTION PROMPTS ─────────────────────────────────────
  // These are the questions the tutor asks naturally during
  // lessons to gather more profile information.
  // Once asked, they're not asked again.

  const PROFILE_QUESTIONS = [
    {
      id:       'q_silver_colour',
      type:     'silver',
      trigger:  'any_lesson',          // ask in any lesson
      notBefore: 1,                    // but not the very first lesson (lesson count)
      prompt:   `😸 Actually — I realise I know Silver's name but not what she looks like. What colour is she?`,
      storeAs:  (answer, p) => { p.silver.colour = answer; },
    },
    {
      id:       'q_silver_habit',
      type:     'silver',
      trigger:  'any_lesson',
      notBefore: 1,
      prompt:   `😸 What's Silver's most annoying habit? Asking because I need ammunition for future jokes.`,
      storeAs:  (answer, p) => { p.silver.habits = [answer]; },
    },
    {
      id:       'q_silver_mood',
      type:     'silver',
      trigger:  'any_lesson',
      notBefore: 2,
      prompt:   `😸 Is Silver a grumpy cat or an affectionate one? I'm trying to build a more accurate picture.`,
      storeAs:  (answer, p) => { p.silver.mood = answer; },
    },
    {
      id:       'q_skating_move',
      type:     'skating',
      trigger:  'any_lesson',
      notBefore: 1,
      prompt:   `🛸 What move or skill are you working on at the moment in skating?`,
      storeAs:  (answer, p) => { p.skating.currentMove = answer; },
    },
    {
      id:       'q_skating_competes',
      type:     'skating',
      trigger:  'any_lesson',
      notBefore: 2,
      prompt:   `🛸 Do you compete in skating, or is it more for fun and lessons right now?`,
      storeAs:  (answer, p) => { p.skating.competes = answer.toLowerCase().includes('yes') || answer.toLowerCase().includes('compet'); },
    },
    {
      id:       'q_skating_rink',
      type:     'skating',
      trigger:  'any_lesson',
      notBefore: 3,
      prompt:   `🛸 Where do you skate? Is there a rink nearby or do you travel?`,
      storeAs:  (answer, p) => { p.skating.rink = answer; },
    },
  ];

  // Get the next question to ask (that hasn't been asked yet)
  function getNextQuestion(lessonCount) {
    const p = Store.getMabelProfile();
    const available = PROFILE_QUESTIONS.filter(q =>
      !Store.hasAsked(q.id) &&
      lessonCount >= (q.notBefore || 0)
    );
    if (!available.length) return null;
    // Alternate between silver and skating
    const lastType = Store.get('last_q_type');
    const preferred = lastType === 'silver' ? 'skating' : 'silver';
    const pick = available.find(q => q.type === preferred) || available[0];
    return pick;
  }

  // Called when Mabel answers a profile question
  function recordAnswer(questionId, answer) {
    const q = PROFILE_QUESTIONS.find(x => x.id === questionId);
    if (!q) return;
    const p = Store.getMabelProfile();
    q.storeAs(answer, p);
    Store.saveMabelProfile(p);
    Store.markAsked(questionId);
    Store.set('last_q_type', q.type);
  }

  // ── RENDER MOMENT ────────────────────────────────────────
  // Called by lessons.js at the right moment in the lesson.
  // Returns an HTML string to inject.

  function renderMoment(type, usedIds = []) {
    const joke = getJoke(type, usedIds);
    return {
      id:   joke.id,
      html: `<div class="joke-box">${joke.text}</div>`,
    };
  }

  // Build a follow-up question block if we have one ready
  function renderQuestion(lessonCount) {
    const q = getNextQuestion(lessonCount);
    if (!q) return null;

    return {
      id:   q.id,
      html: `<div class="profile-q-box" id="pq_${q.id}">
        <div class="joke-box" style="margin-bottom:0.6rem">${q.prompt}</div>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
          <input type="text" id="pqInput_${q.id}" placeholder="Type your answer…"
            style="flex:1;min-width:180px;background:var(--s2);border:1.5px solid var(--border2);
            color:var(--text);font-family:'DM Sans',sans-serif;font-size:0.85rem;
            padding:0.5rem 0.75rem;border-radius:8px;outline:none">
          <button class="btn grn" onclick="Personality.answerQuestion('${q.id}')">Save</button>
          <button class="btn" style="opacity:0.55" onclick="Personality.skipQuestion('${q.id}')">Skip</button>
        </div>
      </div>`,
    };
  }

  // Mabel submits an answer to a profile question
  function answerQuestion(qId) {
    const input = document.getElementById(`pqInput_${qId}`);
    const answer = input?.value?.trim();
    if (!answer) return;

    recordAnswer(qId, answer);

    // Replace the question box with a friendly acknowledgement
    const box = document.getElementById(`pq_${qId}`);
    if (box) {
      box.innerHTML = `<div class="joke-box" style="color:var(--green)">✅ Got it — noted. Now back to work.</div>`;
      setTimeout(() => { box.style.opacity = '0'; setTimeout(() => box.remove(), 400); }, 2000);
    }
  }

  function skipQuestion(qId) {
    Store.markAsked(qId); // Don't ask again this session
    const box = document.getElementById(`pq_${qId}`);
    if (box) { box.style.opacity = '0'; setTimeout(() => box.remove(), 300); }
  }

  // ── LESSON COUNT ─────────────────────────────────────────
  function getLessonCount() {
    const n = Store.get('lesson_count') || 0;
    return n;
  }

  function incrementLessonCount() {
    Store.set('lesson_count', getLessonCount() + 1);
  }

  return {
    getJoke,
    renderMoment,
    renderQuestion,
    answerQuestion,
    skipQuestion,
    getLessonCount,
    incrementLessonCount,
    getMabelProfile: () => Store.getMabelProfile(),
  };

})();
