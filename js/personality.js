/* ============================================================
   PERSONALITY.JS — Silver & skating jokes, profile gathering

   The tutor asks about Silver and skating naturally during
   lessons, stores what Mabel says, and uses it to make
   every subsequent joke more specific and personal.

   Profile fields (stored in localStorage via Store):
     silver:  { colour, markings, personality, habit }
     skating: { monthsIn, hasLessons, lessonDay, currentMove, hasCompeted }

   Rules:
   - ONE profile question per session maximum
   - Only at natural break points (lesson open, after checkpoint)
   - Never re-ask a field already populated or already asked
   - Jokes prefer specific (field-dependent) over generic
   - Never repeat the same joke id within a session
   ============================================================ */

const Personality = (() => {

  // ── INTEREST HELPERS ─────────────────────────────────────
  // Read from child profile set in Settings. Fall back to
  // Silver/skating defaults so existing jokes always render.

  function _petName() {
    return Store.getInterests()[0] || 'Silver';
  }
  function _hobby() {
    const h = Store.getInterests()[1] || 'Ice skating';
    return h.charAt(0).toLowerCase() + h.slice(1); // lower-case for mid-sentence use
  }

  // ── SESSION STATE ─────────────────────────────────────────
  // Resets on each page load. Never persisted.
  let _sessionQuestionShown = false;

  // ── JOKE LIBRARY ─────────────────────────────────────────
  // 'requires' lists profile field paths needed for the variant.
  // 'condition' is an optional extra predicate beyond field presence.

  const SILVER_JOKES = [

    // ── Generic (always available) ──────────────────────────
    {
      id: 'silver_gravity',
      requires: [],
      text: () => `😸 Quick important question before we continue — has ${_petName()} knocked anything off a surface today? Gravity is a real force. A very real force.`
    },
    {
      id: 'silver_notes',
      requires: [],
      text: () => `😸 ${_petName()} update required: currently sitting on your revision notes? Because that counts as studying. For them, at least.`
    },
    {
      id: 'silver_expert',
      requires: [],
      text: () => `😸 Fun fact: ${_petName()} has almost certainly absorbed more biology than they let on. Cats spend 70% of their lives sleeping, which means their metabolic rate is extremely well optimised. Practically a case study.`
    },
    {
      id: 'silver_osmosis',
      requires: [],
      text: () => `😸 ${_petName()} probably understands osmosis better than most GCSE students — clearly knows how to move from a region of high comfort (your lap) to low comfort (a cold windowsill) for absolutely no reason.`
    },

    // ── Colour-specific ─────────────────────────────────────
    {
      id: 'silver_colour_grey',
      requires: ['silver.colour'],
      condition: p => /grey|gray/i.test(p.silver.colour || ''),
      text: p => `😸 Grey — very distinguished. ${_petName()} is basically dressed for an exam already. Unlike some of us.`
    },
    {
      id: 'silver_colour_black',
      requires: ['silver.colour'],
      condition: p => /black/i.test(p.silver.colour || ''),
      text: p => `😸 Black — officially good luck in exams. You've got this in the bag. (${_petName()} is carrying the team.)`
    },
    {
      id: 'silver_colour_white',
      requires: ['silver.colour'],
      condition: p => /white/i.test(p.silver.colour || ''),
      text: p => `😸 White. Very clean. Very judgmental. I imagine ${_petName()} is watching your revision technique and finding it adequate at best.`
    },
    {
      id: 'silver_colour_tabby',
      requires: ['silver.colour'],
      condition: p => /tabby|stripe|ginger|orange|brown/i.test(p.silver.colour || ''),
      text: p => `😸 A ${p.silver.colour} — excellent taste. Warm colours have been scientifically proven to aid concentration. (I made that up, but ${_petName()} doesn't need to know.)`
    },
    {
      id: 'silver_colour_generic',
      requires: ['silver.colour'],
      condition: () => true, // catch-all for any colour
      text: p => `😸 ${p.silver.colour} — noted. I've updated ${_petName()}'s file. Officially ${p.silver.colour} and still entirely unhelpful in a very endearing way.`
    },

    // ── Habit-specific ──────────────────────────────────────
    {
      id: 'silver_habit_active',
      requires: ['silver.habit'],
      text: p => `😸 Has ${_petName()} done "${p.silver.habit}" yet today? That's basically their way of telling you to take a break. Very thoughtful.`
    },
    {
      id: 'silver_habit_passive',
      requires: ['silver.habit'],
      text: p => `😸 "${p.silver.habit}" — ${_petName()}'s contribution to your education. I'd say they're helping but they absolutely aren't.`
    },

    // ── Personality-specific ────────────────────────────────
    {
      id: 'silver_personality_grumpy',
      requires: ['silver.personality'],
      condition: p => /grump|grouchy|moody|aloof|fussy/i.test(p.silver.personality || ''),
      text: p => `😸 Grumpy energy is actually very useful for revision. ${_petName()} disapproves of everything, including incorrect exam answers. Use that.`
    },
    {
      id: 'silver_personality_affectionate',
      requires: ['silver.personality'],
      condition: p => /affection|loving|cuddly|sweet|friendly|social/i.test(p.silver.personality || ''),
      text: p => `😸 ${_petName()} sounds like the perfect revision companion — warm, supportive, and probably asleep on your lap. One of you is working very hard right now.`
    },
    {
      id: 'silver_personality_chaotic',
      requires: ['silver.personality'],
      condition: p => /chaotic|mad|crazy|wild|zoomies|energetic/i.test(p.silver.personality || ''),
      text: p => `😸 A chaotic companion is basically the ideal study buddy — keeps you on your toes and makes everything feel slightly less serious. ${_petName()} is doing their best.`
    },
  ];

  const SKATING_JOKES = [

    // ── Generic (always available) ──────────────────────────
    {
      id: 'skating_six_months',
      requires: [],
      text: () => `🛸 Six months in — you're at the stage where it starts to click with ${_hobby()}. Or so I'm told. How did the last session go?`
    },
    {
      id: 'skating_lessons',
      requires: [],
      text: () => `🛸 How are the ${_hobby()} lessons going? A good coach and a good tutor have a lot in common — both say the same thing in slightly different ways until something clicks.`
    },
    {
      id: 'skating_ice',
      requires: [],
      text: () => `🛸 Completely unrelated — does ${_hobby()} ever feel less daunting, or do you just get better at being slightly out of your comfort zone? Asking for a metaphor about learning biology.`
    },
    {
      id: 'skating_membranes',
      requires: [],
      text: () => `🛸 You know what ${_hobby()} and cell membranes have in common? Both are about controlled movement across a very specific boundary. (That's a stretch but I'm committed to it.)`
    },

    // ── Current move specific ───────────────────────────────
    {
      id: 'skating_axel',
      requires: ['skating.currentMove'],
      condition: p => /axel/i.test(p.skating.currentMove || ''),
      text: p => `🛸 Still working on the axel? Understanding enzyme kinetics and landing an axel both require an embarrassing number of repetitions before they feel natural. You've got this.`
    },
    {
      id: 'skating_spin',
      requires: ['skating.currentMove'],
      condition: p => /spin/i.test(p.skating.currentMove || ''),
      text: p => `🛸 How's the spin coming along? When it finally clicks it'll be like when an exam topic suddenly makes sense — slightly dizzying, but in a good way.`
    },
    {
      id: 'skating_crossover',
      requires: ['skating.currentMove'],
      condition: p => /crossover/i.test(p.skating.currentMove || ''),
      text: p => `🛸 You're learning ${p.skating.currentMove} AND cell biology this term. One of those will definitely come up in an exam.`
    },
    {
      id: 'skating_move_generic',
      requires: ['skating.currentMove'],
      text: p => `🛸 Still on the ${p.skating.currentMove}? The trick with any new skill — skating or biology — is that it feels impossible right until the moment it doesn't. Keep going.`
    },

    // ── Competition status ──────────────────────────────────
    {
      id: 'skating_competes',
      requires: ['skating.hasCompeted'],
      condition: p => p.skating.hasCompeted === true,
      text: p => `🛸 GCSEs and skating competitions have a lot in common — both involve performing under pressure things you've been practising for months. You'll be fine at both.`
    },
    {
      id: 'skating_no_compete',
      requires: ['skating.hasCompeted'],
      condition: p => p.skating.hasCompeted === false,
      text: p => `🛸 Good call keeping ${_hobby()} as a hobby for now. GCSE revision is already enough pressure without adding competitions on top. ${_petName()} agrees. (Never competed at anything and thriving.)`
    },
  ];

  // ── SELECT JOKE ──────────────────────────────────────────
  // Prefer specific jokes (condition passes) over generic.
  // Never repeat an id used in this session (usedIds).

  function getJoke(type, usedIds = []) {
    const p = Store.getMabelProfile();
    const pool = type === 'silver' ? SILVER_JOKES : SKATING_JOKES;

    // Specific jokes first
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

    // All exhausted — just pick any
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

  // ── PROFILE QUESTIONS ────────────────────────────────────
  // Exact question text from design spec.
  // 'field' determines both the check (is it already populated?)
  // and where the answer is stored.

  const PROFILE_QUESTIONS = [
    {
      id:      'q_silver_colour',
      type:    'silver',
      field:   'silver.colour',
      get prompt() { return `😸 Quick question before we start — what colour is ${_petName()}? I keep imagining a grey tabby but I suspect I'm wrong.`; },
      storeAs: (answer, p) => { p.silver.colour = answer; },
    },
    {
      id:      'q_silver_habit',
      type:    'silver',
      field:   'silver.habit',
      get prompt() { return `😸 Does ${_petName()} have a signature annoying habit? Mine would definitely involve sitting on important paperwork.`; },
      storeAs: (answer, p) => { p.silver.habit = answer; },
    },
    {
      id:      'q_skating_move',
      type:    'skating',
      field:   'skating.currentMove',
      get prompt() { return `🛸 How's the ${_hobby()} going? What are you working on at the moment?`; },
      storeAs: (answer, p) => { p.skating.currentMove = answer; },
    },
    {
      id:      'q_skating_competed',
      type:    'skating',
      field:   'skating.hasCompeted',
      get prompt() { return `🛸 Have you done any ${_hobby()} competitions yet, or is it just lessons for now?`; },
      storeAs: (answer, p) => {
        p.skating.hasCompeted = /yes|compet|have|did/i.test(answer);
      },
    },
  ];

  // Return the next question that:
  //   (a) hasn't been asked before (not in askedAbout)
  //   (b) the target field is still null/undefined
  // Alternates between silver and skating types.

  function _getNextQuestion() {
    const p = Store.getMabelProfile();
    const available = PROFILE_QUESTIONS.filter(q => {
      if (Store.hasAsked(q.id)) return false;
      const [obj, key] = q.field.split('.');
      const val = p[obj]?.[key];
      return val === null || val === undefined;
    });
    if (!available.length) return null;

    const lastType  = Store.get('last_q_type');
    const preferred = lastType === 'silver' ? 'skating' : 'silver';
    return available.find(q => q.type === preferred) || available[0];
  }

  // ── TRY-ASK (session-gated) ──────────────────────────────
  // Call this at natural break points. Only one question fires
  // per session; subsequent calls are silent no-ops.

  function tryAskQuestion() {
    if (_sessionQuestionShown) return false;
    const q = _getNextQuestion();
    if (!q) return false;

    _sessionQuestionShown = true;

    setTimeout(() => {
      _showToast(`
        <div style="font-size:0.95rem;line-height:1.65;color:var(--text);margin-bottom:0.75rem">${q.prompt}</div>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
          <input type="text" id="pqInput_${q.id}" placeholder="Type your answer…"
            style="flex:1;min-width:160px;background:var(--s1);border:1.5px solid var(--border2);
            color:var(--text);font-family:'Inter',sans-serif;font-size:0.88rem;
            padding:0.5rem 0.75rem;border-radius:8px;outline:none"
            onkeydown="if(event.key==='Enter')Personality.answerQuestion('${q.id}')">
          <button class="btn grn" onclick="Personality.answerQuestion('${q.id}')">Save</button>
          <button class="btn" style="opacity:0.55" onclick="Personality.skipQuestion('${q.id}')">Skip</button>
        </div>`, 'personalityModal');
    }, 1600);

    return true;
  }

  // Called when Mabel submits an answer
  function answerQuestion(qId) {
    const input = document.getElementById(`pqInput_${qId}`);
    const answer = input?.value?.trim();
    if (!answer) return;

    const q = PROFILE_QUESTIONS.find(x => x.id === qId);
    if (q) {
      const p = Store.getMabelProfile();
      q.storeAs(answer, p);
      Store.saveMabelProfile(p);
      Store.markAsked(qId);
      Store.set('last_q_type', q.type);
    }

    const el = document.getElementById('personalityModal');
    if (el) {
      el.innerHTML = `<div style="font-size:0.95rem;color:var(--green);text-align:center">✅ Got it — noted. Back to work!</div>`;
      setTimeout(() => _dismissToast('personalityModal'), 1800);
    }
  }

  function skipQuestion(qId) {
    Store.markAsked(qId);
    _dismissToast('personalityModal');
  }

  // ── DASHBOARD CONTEXT LINE ───────────────────────────────
  // Returns a one-liner for the "How you learn" section.
  // Uses stored skating data; returns null if nothing useful known.

  function getDashboardLine() {
    const p    = Store.getMabelProfile();
    const sk   = p.skating || {};
    const move = sk.currentMove;
    const competed = sk.hasCompeted;
    const months   = sk.monthsIn;
    const hobby    = _hobby();

    if (move) {
      return `⛸️ You're learning ${move} and revising biology at the same time. One of those will definitely come up in an exam.`;
    }
    if (competed === true) {
      return `⛸️ GCSEs and ${hobby} competitions have more in common than you'd think — both reward consistent practice over cramming.`;
    }
    if (competed === false) {
      return `⛸️ You're keeping ${hobby} as your thing outside school. Good. You need something that isn't revision.`;
    }
    if (months) {
      return `⛸️ ${months} months of ${hobby} and a GCSE on the way. You're handling a lot.`;
    }
    return null;
  }

  // ── FLOATING TOAST ───────────────────────────────────────

  function _showToast(html, id = 'personalityToast') {
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const el = document.createElement('div');
    el.id = id;
    el.style.cssText = [
      'position:fixed',
      'bottom:72px',
      'left:50%',
      'transform:translateX(-50%) translateY(16px)',
      'z-index:500',
      'max-width:min(500px,92vw)',
      'width:100%',
      'background:var(--s2)',
      'border:1.5px solid var(--border2)',
      'border-radius:16px',
      'padding:1rem 1.1rem',
      'box-shadow:0 8px 32px rgba(0,0,0,0.45)',
      'opacity:0',
      'transition:opacity 0.28s ease,transform 0.28s ease',
    ].join(';');
    el.innerHTML = html;
    document.body.appendChild(el);

    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateX(-50%) translateY(0)';
    }));

    return el;
  }

  function _dismissToast(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateX(-50%) translateY(16px)';
    setTimeout(() => el.remove(), 300);
  }

  // ── RENDER MOMENT ────────────────────────────────────────
  // Shows a floating joke toast. Called from lessons.js.

  function renderMoment(type, usedIds = []) {
    const joke = getJoke(type, usedIds);
    setTimeout(() => {
      const el = _showToast(`
        <div style="display:flex;align-items:flex-start;gap:0.75rem">
          <div style="flex:1;font-size:0.95rem;line-height:1.65;color:var(--text)">${joke.text}</div>
          <button onclick="document.getElementById('personalityToast')?.remove()"
            style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:1.1rem;padding:0;flex-shrink:0;line-height:1">✕</button>
        </div>`, 'personalityToast');
      setTimeout(() => _dismissToast('personalityToast'), 18000);
    }, 900);
    return { id: joke.id };
  }

  // ── MILESTONE TOAST ──────────────────────────────────────
  const _MILESTONE_MSGS = [
    n => `That's ${n} done properly. One less thing to worry about come May.`,
    n => `${n} — you've actually got that now. Not just covered. Understood.`,
    n => `Solid work on ${n}. I'd put that in front of an examiner right now.`,
    n => `${n} is secure. That's the word — secure. Keep going.`,
    n => `You know ${n} well enough that I'm not worried about it anymore. That's the goal.`,
  ];

  function showMilestone(subtopicName) {
    const msg = _MILESTONE_MSGS[Math.floor(Math.random() * _MILESTONE_MSGS.length)](subtopicName);
    setTimeout(() => {
      const el = _showToast(`
        <div style="display:flex;align-items:flex-start;gap:0.75rem">
          <div style="font-size:1.3rem">✅</div>
          <div style="flex:1">
            <div style="font-size:0.7rem;font-weight:700;color:var(--green);letter-spacing:0.07em;margin-bottom:0.3rem">SECURE</div>
            <div style="font-size:0.95rem;line-height:1.65;color:var(--text)">${msg}</div>
          </div>
          <button onclick="document.getElementById('milestoneToast')?.remove()"
            style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:1.1rem;padding:0;flex-shrink:0;line-height:1">✕</button>
        </div>`, 'milestoneToast');
      setTimeout(() => _dismissToast('milestoneToast'), 14000);
    }, 600);
  }

  // ── LESSON COUNT ─────────────────────────────────────────
  function getLessonCount() {
    return Store.get('lesson_count') || 0;
  }

  function incrementLessonCount() {
    Store.set('lesson_count', getLessonCount() + 1);
  }

  return {
    getJoke,
    renderMoment,
    tryAskQuestion,
    answerQuestion,
    skipQuestion,
    getLessonCount,
    incrementLessonCount,
    showMilestone,
    getDashboardLine,
    getMabelProfile: () => Store.getMabelProfile(),
  };

})();
