/* ============================================================
   TEACH.JS — Conversational teaching mode
   Used only for lessons listed in Lessons' TEACH_ENABLED array
   (currently just b3-defences). One key point at a time, taught
   through back-and-forth chat instead of slides.

   Also here: a key-terms sidebar (terms unlock as points are covered),
   jump-to-a-point, and a model-written "Worth writing down" recap.
   The lesson's writeBullets field is deliberately never read.
   ============================================================ */

const Teach = (() => {
  const TRANSCRIPT_CAP    = 40;

  let _data          = null;
  let _subtopicId     = '';
  let _subtopicName   = '';
  let _subject        = 'biology';
  let _points         = [];
  let _state          = null;
  let _busy           = false;
  let _termsOpen      = false;  // key-terms panel expanded (only matters on narrow screens)
  let _termsShown     = new Set(); // points whose terms were already in the sidebar at the last render
  let _termsNew       = [];        // points whose terms have just appeared, to reveal and flash
  let _openingKey     = null;   // "<lessonId>:<pointIndex>" of the opening/jump request in flight, else null
  let _openingReq     = null;   // { index, first } — what's being requested; kept after a failure for "Try again"
  let _openingFailed  = false;  // last opening attempt failed — show "Try again"

  // Decisions and prompts live in js/teach-core.js so Node can run them too
  // (tools/teach-sim.js). _data, _points and _state stay here; the core is
  // handed them again with _core.bind() whenever one is replaced.
  // First-time learner brief (2026-10-18) step 4a, on by default: when the
  // tutor reaches a key point with a diagram, the diagram appears inside the
  // conversation, full width of the chat column, with its caption; tapping it
  // opens it full screen. The side-column thumbnail stays. false: the
  // thumbnail only, and the tutor is not told a diagram is showing.
  const TEACH_INLINE_DIAGRAMS = true;
  const _core = TeachCore.create({ call: (sys, user, tokens) => AI.call(sys, user, tokens, TeachCore.tutorParams()), inlineDiagrams: TEACH_INLINE_DIAGRAMS });
  const { _buildPoints, HISTORY_TURNS, RECAP_TURNS, CHECKIN_AFTER, EXTENSION_EXCHANGES, MAX_REPLY_WORDS, RETRY_MAX_WORDS, MAX_TOKENS_REPLY, MAX_TOKENS_RETRY, MAX_TOKENS_RECAP, STOPWORDS, _stripHtml, _shortHeading, _contentWords, _buildPointWordSet, _stem, _stems, _buildFacts, _answers, _isSubstantive, _stripMarkdown, _wordCount, _looksTruncated, YES_NO_OPENER, LEAD_IN, OFFER, TAG_QUESTION, _asksYesNo, _describeError, _logError, _pointBrief, _freshFacts, _factDone, _freshState, _resetPointPacing, _restoreFacts, _targetFactIndex, _pointStems, _genericStems, _termStems, _mistakesFor, _laterPointsLine, _buildSystemPrompt, _recentHistoryBlock, _buildUserPrompt, _trimToLastSentence, STOCK_PRAISE, _stripStockPraise, _callWithLengthGuard, _buildRecapSystemPrompt, _pointConversation, _parseRecap, _generateRecap, _wantsTold, _finishByTelling, _afterPoint, _decide, _applyDecision, _openingFact, _partLine, _coveredLine, _toldLine, _toldRestLine, _remainingLine, _teachIndex, _getTutorReply, _looksLikeWrapUpQuestion, _replyEntry, _firstOpeningPrompt, _jumpPrompt } = _core;

  // ── Helpers ─────────────────────────────────────────────────
  function _storageKey() { return `teach_${_subtopicId}`; }

  function _esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function _rid() { return 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  // ── Styles ───────────────────────────────────────────────────
  // Injected from here so nothing in the shared stylesheet — or the slide
  // view — changes. Every selector is prefixed .teach-.
  function _ensureStyles() {
    if (document.getElementById('teachStyles')) return;
    const el = document.createElement('style');
    el.id = 'teachStyles';
    el.textContent = `
      /* Right-hand column: jump list above key terms. Sticky, so it follows
         her down a long conversation instead of staying up with content she
         has already read. */
      .teach-layout { display:flex; gap:1.25rem; align-items:flex-start; }
      .teach-main { flex:1; min-width:0; }
      .teach-side { width:265px; flex-shrink:0; position:sticky; align-self:flex-start;
        display:flex; flex-direction:column; gap:0.75rem; min-height:0; overflow-y:auto; }
      .teach-panel { background:var(--s2); border:1px solid var(--border2); border-radius:12px;
        padding:0.85rem 0.95rem; }
      /* Jump list and diagram keep their size; the terms list takes the rest and
         scrolls when it gets long. On a very short screen the whole column
         scrolls instead of squashing the terms to nothing. */
      .teach-side > nav.teach-panel, #teachDiagramSlot { flex-shrink:0; }
      #teachDiagramSlot:empty { display:none; }
      .teach-side > .teach-terms { min-height:9rem; display:flex; flex-direction:column; overflow:hidden; }
      .teach-side > .teach-terms .teach-terms-body { overflow-y:auto; min-height:0; }

      /* Diagram thumbnail in the side column, full size on tap */
      .teach-diagram-thumb { display:block; position:relative; width:100%; margin-top:0.7rem; padding:0;
        background:var(--bg); border:1px solid var(--border2); border-radius:8px; cursor:zoom-in; overflow:hidden; }
      .teach-diagram-thumb img { display:block; width:100%; height:150px; object-fit:contain; }
      .teach-diagram-thumb:hover { border-color:var(--amber); }
      .teach-diagram-cap { font-size:0.82rem; color:var(--muted); font-style:italic; line-height:1.5; margin:0.55rem 0 0; }
      /* Enlarged diagram: the panel wraps the image, which _fitDiagram sizes to
         the diagram's own proportions and the screen. */
      .teach-diagram-overlay { position:fixed; inset:0; z-index:600; background:rgba(0,0,0,0.85);
        display:flex; align-items:center; justify-content:center; }
      .teach-diagram-full { position:relative; background:var(--bg); border:1px solid var(--border2);
        border-radius:14px; box-shadow:0 12px 48px rgba(0,0,0,0.6); }
      .teach-diagram-full img { display:block; }
      .teach-diagram-full .teach-diagram-cap { margin-top:10px; }
      .teach-diagram-close { position:absolute; top:0.5rem; right:0.5rem; z-index:1;
        background:rgba(24,21,16,0.92); border:1px solid var(--border2); color:var(--text);
        border-radius:999px; width:2.25rem; height:2.25rem; cursor:pointer; font-size:1rem; line-height:1; }
      .teach-diagram-close:hover { border-color:var(--amber); }
      /* A diagram inside the conversation (TEACH_INLINE_DIAGRAMS): the full
         width of the chat column, so it reads on a phone without zooming. */
      .teach-inline-diagram { align-self:stretch; width:100%; margin:0; }
      .teach-inline-diagram-btn { display:block; width:100%; padding:0; background:var(--bg);
        border:1px solid var(--border2); border-radius:10px; overflow:hidden; cursor:zoom-in; }
      .teach-inline-diagram-btn:hover { border-color:var(--amber); }
      .teach-inline-diagram-btn img { display:block; width:100%; height:auto; }
      /* Choices under the tutor's newest message (RESPECT_EXIT: "I'm tired"). */
      .teach-choices { align-self:flex-start; display:flex; flex-wrap:wrap; gap:0.5rem; max-width:100%; }
      .teach-choices .btn { font-size:0.9rem; padding:0.45rem 0.85rem; }
      .teach-inline-diagram figcaption { font-size:0.85rem; color:var(--muted); font-style:italic; line-height:1.5; margin:0.4rem 0.2rem 0; }

      /* Shorter laptop screens: a full thumbnail plus the jump list would push
         the key terms out of view, so the thumbnail shrinks. */
      @media (min-width: 761px) and (max-height: 820px) {
        .teach-diagram.teach-panel { padding:0.5rem; }
        .teach-diagram .teach-panel-head { display:none; }
        .teach-diagram-thumb { margin-top:0; }
        .teach-diagram-thumb img { height:64px; }
        .teach-diagram .teach-diagram-cap { display:none; }
        .teach-jump-btn { padding-top:0.3rem; padding-bottom:0.3rem; }
      }
      .teach-panel-head { display:flex; width:100%; justify-content:space-between; align-items:center;
        background:none; border:none; padding:0; color:var(--muted); font-family:inherit;
        font-size:12px; font-weight:700; letter-spacing:0.09em; text-transform:uppercase; cursor:default; }

      /* Jump list — one row per key point, in lesson order */
      .teach-jump-list { display:flex; flex-direction:column; gap:0.3rem; margin-top:0.7rem; }
      .teach-jump-btn { display:flex; align-items:center; gap:0.45rem; width:100%; text-align:left;
        background:transparent; border:1px solid var(--border2); color:var(--muted);
        font-family:inherit; font-size:0.88rem; line-height:1.35; padding:0.45rem 0.6rem;
        border-radius:8px; cursor:pointer; transition:all 0.15s; }
      .teach-jump-btn:hover:not(:disabled) { border-color:var(--amber); color:var(--text); }
      .teach-jump-btn.covered { border-color:rgba(78,207,170,0.35); color:var(--teal); }
      /* Three states that must read differently at a glance: done = teal with a
         tick, current = solid amber block, not started = plain. */
      .teach-jump-btn.current, .teach-jump-btn.current.covered {
        background:var(--amber); border-color:var(--amber); color:#1a1408; font-weight:700;
        box-shadow:0 0 0 3px rgba(232,160,64,0.22); }
      .teach-jump-btn.current:hover:not(:disabled) { color:#1a1408; filter:brightness(1.06); }
      .teach-jump-btn:disabled { opacity:0.5; cursor:default; }
      .teach-jump-mark { flex-shrink:0; width:1.1em; font-size:0.85em; }

      .teach-terms-caret { display:none; }
      .teach-terms-body { margin-top:0.7rem; }
      .teach-terms-point { font-size:0.78rem; color:var(--amber); font-weight:700; letter-spacing:0.04em;
        text-transform:uppercase; margin:0.85rem 0 0.35rem; }
      .teach-terms-group:first-child .teach-terms-point { margin-top:0; }
      .teach-term { margin-bottom:0.7rem; font-size:0.88rem; line-height:1.55; }
      .teach-term strong { display:block; color:var(--teal); font-size:0.92rem; }
      .teach-term span { color:rgba(255,255,255,0.8); }
      .teach-terms-empty { font-size:0.88rem; color:var(--muted); line-height:1.55; margin:0; }

      /* A group that has just unlocked: flashed and badged so it reads as new
         rather than looking like nothing happened. */
      .teach-terms-group.is-new { border-radius:8px; animation:teachTermsNew 2.6s ease-out 1; }
      @keyframes teachTermsNew {
        0%, 55% { background:rgba(78,207,170,0.16); box-shadow:0 0 0 6px rgba(78,207,170,0.16); }
        100%    { background:transparent; box-shadow:0 0 0 6px rgba(78,207,170,0); }
      }
      .teach-terms-badge { margin-left:0.4rem; padding:0.05rem 0.4rem; border-radius:999px;
        background:var(--teal); color:#07201a; font-size:0.66rem; letter-spacing:0.05em; vertical-align:middle; }
      @media (prefers-reduced-motion: reduce) { .teach-terms-group.is-new { animation:none; } }

      .teach-note { align-self:center; font-size:0.8rem; color:var(--amber); font-weight:600;
        letter-spacing:0.04em; text-transform:uppercase;
        padding:0.25rem 0.9rem; border-top:1px solid var(--border); border-bottom:1px solid var(--border); }
      .teach-recap { align-self:flex-start; max-width:95%; background:rgba(232,160,64,0.07);
        border:1.5px solid rgba(232,160,64,0.22); border-radius:12px; padding:0.8rem 1rem; }
      .teach-recap-title { font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase;
        color:var(--amber); margin-bottom:0.5rem; }
      .teach-recap-list { margin:0 0 0.4rem; padding-left:1.1rem; font-size:0.9rem; line-height:1.6; }

      @media (max-width: 760px) {
        .teach-layout { flex-direction:column; gap:0.6rem; }
        .teach-main { width:100%; }
        .teach-side { order:-1; width:100%; position:static; max-height:none !important; overflow:visible; }
        .teach-side > .teach-terms { min-height:0; }
        .teach-terms .teach-panel-head { cursor:pointer; }
        .teach-terms-caret { display:inline; transition:transform 0.15s; }
        .teach-terms.open .teach-terms-caret { transform:rotate(180deg); }
        .teach-terms-body { display:none; }
        .teach-terms.open .teach-terms-body { display:block; }
      }
    `;
    document.head.appendChild(el);
  }

  // ── Persistence ──────────────────────────────────────────────
  function _save() {
    Store.set(_storageKey(), {
      transcript: _state.transcript,
      coverage: _state.coverage,
      currentPointIndex: _state.currentPointIndex,
      retriedCurrent: _state.retriedCurrent,
      complete: _state.complete,
      resumeIndex: _state.resumeIndex,
      facts: _state.facts,
      turnsOnPoint: _state.turnsOnPoint,
      checkinAsked: _state.checkinAsked,
      extensionLeft: _state.extensionLeft,
      wrapOffered: _state.wrapOffered,
      farewell: _state.farewell,
      taught: _state.taught,   // TEACH_THEN_ASK (js/teach-core.js); absent when off
      flow: _state.flow,       // FLOW_FIX (js/teach-core.js); absent when off
      pilot: _state.pilot,     // PILOT_FIX (js/teach-core.js); absent when off
    });
  }

  // Transcript entries: user / assistant messages, 'note' (a small divider when
  // she jumps), and 'recap' ("Worth writing down"). Point-tagged entries carry
  // pt = the key point they belong to; opening:true marks where a point's
  // teaching started, so a recap only summarises that stretch.
  function _pushEntry(entry) {
    _state.transcript.push(entry);
    if (_state.transcript.length > TRANSCRIPT_CAP) {
      _state.transcript = _state.transcript.slice(-TRANSCRIPT_CAP);
    }
    _save();
  }

  // ── Open ─────────────────────────────────────────────────────
  function open(data, subtopicId, subtopicName, subject, opts = {}) {
    _data        = data;
    _subtopicId  = subtopicId;
    _subtopicName = subtopicName;
    _subject     = subject || 'biology';
    _busy        = false;
    _termsOpen   = false;
    _openingFailed = false;
    _ensureStyles();

    _points = _buildPoints(data);
    _core.bind(_data, _points, _state);
    // PILOT_FIX: the glossary (words before use), the lessons she has opened,
    // and the recall questions from the lesson before (brief v3.1).
    if (_core.PILOT_FIX) _core.pilotContext({
      lessonId: subtopicId,
      glossary: typeof Glossary !== 'undefined' && Glossary.terms ? Glossary.terms(_subject) : [],
      opened: id => Store.hasOpened(id),
      recall: opts.recall || null,
    });

    const saved = Store.get(_storageKey());
    if (saved && Array.isArray(saved.transcript) && saved.transcript.length) {
      const resume = saved.resumeIndex;
      const coverage = Array.isArray(saved.coverage) && saved.coverage.length === _points.length
        ? saved.coverage : _points.map(() => null);
      _state = {
        transcript: saved.transcript,
        coverage,
        currentPointIndex: typeof saved.currentPointIndex === 'number' ? saved.currentPointIndex : 0,
        retriedCurrent: !!saved.retriedCurrent,
        complete: !!saved.complete,
        resumeIndex: (resume === -1 || (Number.isInteger(resume) && resume >= 0 && resume < _points.length)) ? resume : null,
        facts: _restoreFacts(saved.facts, coverage),
        turnsOnPoint: Number.isInteger(saved.turnsOnPoint) ? saved.turnsOnPoint : 0,
        checkinAsked: !!saved.checkinAsked,
        extensionLeft: Number.isInteger(saved.extensionLeft) ? saved.extensionLeft : null,
        wrapOffered: !!saved.wrapOffered,
        farewell: !!saved.farewell,
        ...(Array.isArray(saved.taught) ? { taught: saved.taught } : {}),
        ...(saved.flow && typeof saved.flow === 'object' ? { flow: saved.flow } : {}),
        ...(saved.pilot && typeof saved.pilot === 'object' ? { pilot: saved.pilot } : {}),
      };
      _core.bind(_data, _points, _state);
      _seedTermsShown();
      _renderShell();
      _renderTranscript();
      return;
    }

    _state = _freshState();
    _core.bind(_data, _points, _state);
    _seedTermsShown();
    _renderShell();
    _beginLesson();
  }

  // ── Shell / rendering ────────────────────────────────────────
  function _jumpPanelHtml() {
    const cur = _state.complete ? -1 : _state.currentPointIndex;
    const btns = _points.map((p, i) => {
      const covered = _state.coverage[i] === true;
      const isCur = i === cur;
      const cls = 'teach-jump-btn' + (covered ? ' covered' : '') + (isCur ? ' current' : '');
      const mark = covered ? '✓' : (isCur ? '▸' : '');
      return `<button class="${cls}" onclick="Teach.jumpTo(${i})" title="${_esc(p.heading)}"${isCur ? ' aria-current="step"' : ''}>
        <span class="teach-jump-mark">${mark}</span><span>${_esc(_shortHeading(p.heading))}</span>
      </button>`;
    }).join('');
    return `<nav class="teach-panel" aria-label="Jump to a key point">
      <div class="teach-panel-head"><span>Jump to</span></div>
      <div class="teach-jump-list">${btns}</div>
    </nav>`;
  }

  // Terms appear only once their key point is covered, so the panel can't be
  // used to read ahead. Text is taken straight from each point's keyTerms.
  function _termsHtml() {
    const groups = _points
      .map((p, i) => ({ p, i, covered: _state.coverage[i] === true }))
      .filter(g => g.covered && g.p.keyTerms.length);
    const count = groups.reduce((n, g) => n + g.p.keyTerms.length, 0);
    const body = groups.length
      ? groups.map(g => `<div class="teach-terms-group${_termsNew.includes(g.i) ? ' is-new' : ''}" data-pt="${g.i}">
          <div class="teach-terms-point">${_esc(_shortHeading(g.p.heading))}${_termsNew.includes(g.i) ? '<span class="teach-terms-badge">new</span>' : ''}</div>
          ${g.p.keyTerms.map(t => `<div class="teach-term"><strong>${_esc(t.term)}</strong><span>${_esc(t.def)}</span></div>`).join('')}
        </div>`).join('')
      : `<p class="teach-terms-empty">Key terms show up here as you finish each point.</p>`;
    return `<section class="teach-panel teach-terms${_termsOpen ? ' open' : ''}" id="teachTerms">
      <button class="teach-panel-head" onclick="Teach.toggleTerms()" aria-expanded="${_termsOpen}">
        <span>Key terms${count ? ` (${count})` : ''}</span><span class="teach-terms-caret">▾</span>
      </button>
      <div class="teach-terms-body">${body}</div>
    </section>`;
  }

  // Which points' terms have appeared since the last render. The sidebar is
  // rebuilt every turn, so a newly unlocked group lands at the bottom with the
  // panel scrolled back to the top — present, but easy to miss entirely.
  // Opening a lesson shouldn't flash everything she covered in an earlier
  // session as though it had just arrived.
  function _seedTermsShown() {
    _termsShown = new Set(_points.map((p, i) => i)
      .filter(i => _state.coverage[i] === true && _points[i].keyTerms.length));
    _termsNew = [];
  }

  function _markNewTerms() {
    const covered = _points
      .map((p, i) => i)
      .filter(i => _state.coverage[i] === true && _points[i].keyTerms.length);
    _termsNew = covered.filter(i => !_termsShown.has(i));
    _termsShown = new Set(covered);
  }

  // Scroll a container so a descendant is visible, by adjusting that
  // container's own scrollTop. Deliberately not scrollIntoView, which walks up
  // and scrolls the lesson panel too, moving her place in the conversation.
  function _scrollWithin(container, el) {
    if (!container || !el) return;
    const c = container.getBoundingClientRect(), e = el.getBoundingClientRect();
    if (e.top < c.top) container.scrollTop += e.top - c.top - 8;
    else if (e.bottom > c.bottom) container.scrollTop += Math.min(e.top - c.top - 8, e.bottom - c.bottom + 8);
  }

  function _revealNewTerms() {
    if (!_termsNew.length) return;
    const group = document.querySelector(`.teach-terms-group.is-new[data-pt="${_termsNew[0]}"]`);
    if (!group || !group.offsetParent) return; // collapsed on a narrow screen: the flash is waiting when she opens it
    _scrollWithin(document.querySelector('.teach-terms-body'), group);
    _scrollWithin(document.getElementById('teachSide'), group);
  }

  function _renderShell() {
    const inner = document.getElementById('lessonInner');
    if (!inner) return;
    _markNewTerms();
    const coveredCount = _state.coverage.filter(c => c === true).length;

    inner.innerHTML = `
      <div id="teachHeader" style="position:sticky;top:0;z-index:10;background:var(--bg);padding:0.75rem 0 0">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.4rem">
          <button class="back-btn" onclick="Lessons.close()" style="flex-shrink:0">← Topics</button>
          <div style="flex:1;font-size:0.8rem;color:var(--muted);font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
            ${_data.title || _subtopicName}
          </div>
          <button class="back-btn" onclick="showHome()" style="flex-shrink:0;padding:0.25rem 0.45rem;line-height:0" title="Home">${Icons.inline('home', 22)}</button>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem">
          <span style="font-size:0.75rem;color:var(--muted)">${coveredCount}/${_points.length} covered</span>
          <a href="#" onclick="event.preventDefault();Teach.showSlides()" style="font-size:0.75rem;color:var(--muted);text-decoration:underline;cursor:pointer">Show me the slides instead</a>
        </div>
        <div id="teachResetWrap" style="margin-bottom:0.6rem">${_resetTriggerHtml()}</div>
      </div>
      <div class="teach-layout">
        <div class="teach-main">
          <div class="askme-wrap" style="padding-top:0.75rem;padding-bottom:1rem">
            <div class="askme-thread" id="teachThread"></div>
            ${_state.farewell ? `
            <div class="teach-finished">
              <p style="font-size:0.85rem;color:var(--muted);margin:0 0 0.6rem">Lesson finished.</p>
              <div style="display:flex;flex-wrap:wrap;gap:0.5rem">
                <button class="btn" onclick="Lessons.close()">← Topics</button>
                <button class="btn" onclick="Teach.showSlides()">Show me the slides</button>
                <button class="btn pri" onclick="Teach.reopenInput()">Ask something else</button>
              </div>
            </div>` : `
            <div class="askme-input-row">
              <textarea id="teachInput" rows="2" placeholder="Type here…"
                onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();Teach.send();}"></textarea>
              <button class="btn pri" id="teachSendBtn" onclick="Teach.send()">Send</button>
            </div>`}
          </div>
        </div>
        <aside class="teach-side" id="teachSide">
          ${_jumpPanelHtml()}
          <div id="teachDiagramSlot"></div>
          ${_termsHtml()}
        </aside>
      </div>`;

    document.getElementById('lessonInner').scrollTop = 0;
    document.getElementById('lessonPanel').scrollTop = 0;
    _updateDiagramSlot();
    _positionTerms();
    _revealNewTerms();
    _syncControls();
  }

  // On wide screens the side column sticks just under the header, whatever
  // height the header currently is, so it follows her down the conversation.
  function _positionTerms() {
    const header = document.getElementById('teachHeader');
    const side   = document.getElementById('teachSide');
    if (!header || !side) return;
    const top = header.offsetHeight + 8;
    side.style.top = top + 'px';
    side.style.maxHeight = `calc(100vh - ${top + 72}px)`;
    // UI_FIXES (js/app.js): the header grows after this runs (e.g. the "Start
    // this topic over" line), which left the top of the jump list under it.
    if (typeof UI_FIXES !== 'undefined' && UI_FIXES && window.ResizeObserver && !header._sideObserver) {
      header._sideObserver = new ResizeObserver(() => _positionTerms());
      header._sideObserver.observe(header);
    }
  }

  function toggleTerms() {
    _termsOpen = !_termsOpen;
    const terms = document.getElementById('teachTerms');
    if (!terms) return;
    terms.classList.toggle('open', _termsOpen);
    terms.querySelector('.teach-terms-toggle')?.setAttribute('aria-expanded', String(_termsOpen));
  }

  // One request at a time: Send and the jump buttons are off while any
  // request (a reply, an opening, or a jump) is running.
  function _syncControls() {
    const busy = _busy || _openingInFlight();
    const send = document.getElementById('teachSendBtn');
    if (send) send.disabled = busy;
    document.querySelectorAll('.teach-jump-btn').forEach(b => { b.disabled = busy; });
  }

  // ── Start this topic over ───────────────────────────────────
  // Single tap opens an inline "Are you sure?" — never fires on one tap.
  // Removes ONLY this lesson's own transcript key (mabel_teach_<lessonId>),
  // nothing else: not the API key, profile, progress on other topics, or streak.
  function _resetTriggerHtml() {
    return `<button onclick="Teach.showResetConfirm()" style="background:none;border:none;color:var(--muted);font-size:0.75rem;text-decoration:underline;cursor:pointer;padding:0;font-family:inherit">↺ Start this topic over</button>`;
  }

  function _resetConfirmHtml() {
    return `<span style="font-size:0.75rem;color:var(--muted)">Are you sure? This clears your progress on this lesson only and starts it fresh.</span>
      <span style="display:inline-flex;gap:0.5rem;align-items:center;margin-left:0.5rem">
        <button onclick="Teach.cancelReset()" style="background:none;border:none;color:var(--muted);font-size:0.75rem;cursor:pointer;padding:0.15rem 0.35rem;font-family:inherit">Cancel</button>
        <button onclick="Teach.confirmReset()" style="background:#E05252;border:none;color:#fff;font-size:0.75rem;font-weight:600;border-radius:6px;padding:0.2rem 0.6rem;cursor:pointer;font-family:inherit">Yes, start over</button>
      </span>`;
  }

  function showResetConfirm() {
    const wrap = document.getElementById('teachResetWrap');
    if (wrap) wrap.innerHTML = _resetConfirmHtml();
    _positionTerms();
  }

  function cancelReset() {
    const wrap = document.getElementById('teachResetWrap');
    if (wrap) wrap.innerHTML = _resetTriggerHtml();
    _positionTerms();
  }

  function confirmReset() {
    if (!_subtopicId) return;
    Store.remove(_storageKey()); // removes exactly mabel_teach_<lessonId>, nothing else
    _state = _freshState();
    _core.bind(_data, _points, _state);
    _openingFailed = false;
    _renderShell();
    _beginLesson();
  }

  // The current point's diagram lives in the side column as a thumbnail, so it
  // never sits between the tutor's question and the box she answers in.
  // Tapping it opens the full-size diagram over the page.
  function _diagramInfo(point) {
    const diagDef = (_data.diagrams || []).find(d => d.id === point.diagram);
    return {
      title: diagDef?.title || point.diagram,
      cap:   point.diagramCaption || diagDef?.caption || '',
      src:   `diagrams/${_subject}/${point.diagram}.svg`,
    };
  }

  function _renderDiagram(point) {
    const { title, cap, src } = _diagramInfo(point);
    return `<section class="teach-panel teach-diagram" id="diag_${point.diagram}">
      <div class="teach-panel-head"><span>Diagram</span></div>
      <button class="teach-diagram-thumb" onclick="Teach.expandDiagram()" title="Tap to enlarge" aria-label="Enlarge diagram">
        <img src="${src}" alt="${_esc(title)}"
          onerror="this.parentElement.style.display='none';document.getElementById('teachDiagFallback_${point.diagram}').style.display='block'">
      </button>
      <div id="teachDiagFallback_${point.diagram}" style="display:none;color:var(--muted);font-size:0.83rem;font-style:italic;padding:0.5rem 0 0">
        Diagram not yet available
      </div>
      ${cap ? `<p class="teach-diagram-cap">${cap}</p>` : ''}
      ${point.diagramExamTip ? `<p class="teach-diagram-cap" style="color:var(--amber)">⚠️ Diagrams like this come up in questions — sketch this in your notes.</p>` : ''}
    </section>`;
  }

  // id: a diagram shown in the conversation; without it, the current point's.
  function expandDiagram(id) {
    // PILOT_FIX: a picture of the sequence (or the side column's latest one) by its own id.
    const slotId = !id && _core.PILOT_FIX ? document.querySelector('#teachDiagramSlot .teach-diagram')?.id?.replace(/^diag_/, '') : null;
    const pic = _core.PILOT_FIX && (id || slotId) ? _points.flatMap(p => (p.pictures || []).map(x => ({ p, x }))).find(o => o.x.diagram === (id || slotId)) : null;
    const point = pic ? { ...pic.p, diagram: pic.x.diagram, diagramCaption: pic.x.caption }
      : id ? _points.find(p => p.diagram === id)
      : !_state?.complete ? _points[_state.currentPointIndex] : null;
    if (!point || !point.diagram) return;
    const { title, cap, src } = _diagramInfo(point);
    closeDiagram();
    const overlay = document.createElement('div');
    overlay.id = 'teachDiagramOverlay';
    overlay.className = 'teach-diagram-overlay';
    overlay.onclick = e => { if (e.target === overlay) closeDiagram(); };
    overlay.innerHTML = `<div class="teach-diagram-full" role="dialog" aria-label="${_esc(title)}">
        <button class="teach-diagram-close" onclick="Teach.closeDiagram()" aria-label="Close diagram">✕</button>
        <img src="${src}" alt="${_esc(title)}">
        ${cap ? `<p class="teach-diagram-cap">${cap}</p>` : ''}
      </div>`;
    document.body.appendChild(overlay);
    const img = overlay.querySelector('img');
    if (img.complete) _fitDiagram(); else img.onload = _fitDiagram;
    _fitDiagram();
    document.addEventListener('keydown', _escCloses);
    window.addEventListener('resize', _fitDiagram);
  }

  // Size the enlarged diagram to its own proportions, as large as the screen
  // allows: nearly the full width on a phone, a big centred panel on desktop.
  // The SVGs declare width="100%" with no pixel size, so left to itself the
  // browser renders them at a tiny default (~233×150) — they must be sized
  // explicitly. Their natural size still carries the right aspect ratio.
  function _fitDiagram() {
    const overlay = document.getElementById('teachDiagramOverlay');
    if (!overlay) return;
    const panel = overlay.querySelector('.teach-diagram-full');
    const img = panel.querySelector('img');
    const cap = panel.querySelector('.teach-diagram-cap');
    const narrow = window.innerWidth <= 760;
    const pad = narrow ? 8 : 16;
    const maxW = Math.min(narrow ? window.innerWidth - 16 : window.innerWidth * 0.9, 1200) - pad * 2;
    const maxH = window.innerHeight * (narrow ? 0.92 : 0.9) - pad * 2 - (cap ? cap.offsetHeight + 10 : 0);
    const ratio = (img.naturalWidth && img.naturalHeight) ? img.naturalWidth / img.naturalHeight : 0;
    panel.style.padding = pad + 'px';
    if (ratio) {
      const w = Math.min(maxW, maxH * ratio);
      img.style.width  = Math.floor(w) + 'px';
      img.style.height = Math.floor(w / ratio) + 'px';
    } else {
      // Unknown proportions: fill the available box and let the SVG scale inside it.
      img.style.width  = Math.floor(maxW) + 'px';
      img.style.height = Math.floor(maxH) + 'px';
    }
  }

  function _escCloses(e) { if (e.key === 'Escape') closeDiagram(); }

  function closeDiagram() {
    document.getElementById('teachDiagramOverlay')?.remove();
    document.removeEventListener('keydown', _escCloses);
    window.removeEventListener('resize', _fitDiagram);
  }

  function _updateDiagramSlot() {
    const slot = document.getElementById('teachDiagramSlot');
    if (!slot) return;
    const point = !_state.complete ? _points[_state.currentPointIndex] : null;
    if (_core.PILOT_FIX) {
      // Only a picture already shown for this point: never one ahead of the teaching.
      const idx = _state.currentPointIndex;
      const last = [..._state.transcript].reverse().find(t => t.pt === idx && Array.isArray(t.pictures) && t.pictures.length);
      const pic = last && last.pictures[last.pictures.length - 1];
      slot.innerHTML = point && pic ? _renderDiagram({ ...point, diagram: pic.diagram, diagramCaption: pic.caption }) : '';
      return;
    }
    slot.innerHTML = (point && point.diagram) ? _renderDiagram(point) : '';
  }

  // "Worth writing down" — model-written from the conversation, with the same
  // "Done" checkbox the slide view uses. The tick is saved on the entry.
  function _recapCard(entry) {
    const card = document.createElement('div');
    card.className = 'teach-recap';
    card.innerHTML = `<div class="teach-recap-title">Worth writing down</div>
      <ul class="teach-recap-list"></ul>
      <label class="done-check-label"><input type="checkbox"><span>Done — written into my notes</span></label>`;
    const ul = card.querySelector('ul');
    (entry.lines || []).forEach(line => {
      const li = document.createElement('li');
      li.textContent = line;
      ul.appendChild(li);
    });
    const cb = card.querySelector('input');
    cb.checked = !!entry.done;
    cb.onchange = () => { entry.done = cb.checked; _save(); };
    return card;
  }

  // Bored-student tester fix (2026-10-17), on by default; false keeps the old
  // path. The tutor model writes **bold** and *italic*, which textContent showed
  // as raw asterisks. Escape everything first, then turn only those two marks
  // into tags. The student's own text is never formatted.
  const RENDER_TUTOR_MARKDOWN = true;
  function _setBubbleText(el, role, text) {
    if (!RENDER_TUTOR_MARKDOWN || role === 'user') { el.textContent = text; return; }
    el.innerHTML = String(text || '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\*\*([^*\n]+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*\w])\*([^*\n]+?)\*(?![*\w])/g, '$1<em>$2</em>');
    // Runbook v3 A4: glossary terms in the tutor's message are underlined; a tap shows the definition.
    if (typeof Glossary !== 'undefined' && Glossary.GLOSSARY_V3) Glossary.markupContainer(el);
  }

  function _inlineDiagramEl(id) {
    const point = _points.find(p => p.diagram === id);
    if (!point) return null;
    const { title, cap, src } = _diagramInfo(point);
    const fig = document.createElement('figure');
    fig.className = 'teach-inline-diagram';
    fig.innerHTML = `<button class="teach-inline-diagram-btn" onclick="Teach.expandDiagram('${_esc(id)}')" title="Tap to enlarge" aria-label="Enlarge diagram">
        <img src="${src}" alt="${_esc(title)}" onerror="this.closest('figure').style.display='none'">
      </button>${cap ? `<figcaption>${cap}</figcaption>` : ''}`;
    return fig;
  }

  // PILOT_FIX: one picture of the sequence, its caption, and its labels as glossary words.
  function _pictureEl(pic) {
    const fig = document.createElement('figure');
    fig.className = 'teach-inline-diagram';
    fig.innerHTML = `<button class="teach-inline-diagram-btn" onclick="Teach.expandDiagram('${_esc(pic.diagram)}')" title="Tap to enlarge" aria-label="Enlarge diagram">
        <img src="diagrams/${_subject}/${_esc(pic.diagram)}.svg" alt="${_esc(pic.caption || pic.diagram)}" onerror="this.closest('figure').style.display='none'">
      </button>${pic.caption ? `<figcaption>${_esc(pic.caption)}</figcaption>` : ''}`;
    if (typeof LessonExtras !== 'undefined' && (pic.labels || []).length) fig.appendChild(LessonExtras.labelChips(pic.labels));
    return fig;
  }

  function _renderTranscript() {
    const thread = document.getElementById('teachThread');
    if (!thread) return;
    thread.innerHTML = '';
    _state.transcript.forEach(t => {
      if (t.role === 'recap') {
        thread.appendChild(_recapCard(t));
      } else if (t.role === 'note') {
        const el = document.createElement('div');
        el.className = 'teach-note';
        el.textContent = t.text;
        thread.appendChild(el);
      } else {
        const el = document.createElement('div');
        el.className = t.role === 'user' ? 'askme-q-bubble' : 'askme-a-bubble';
        _setBubbleText(el, t.role, t.text);
        thread.appendChild(el);
        if (TEACH_INLINE_DIAGRAMS && t.role === 'assistant' && t.diagram) {
          const fig = _inlineDiagramEl(t.diagram);
          if (fig) thread.appendChild(fig);
        }
        // PILOT_FIX: the picture sequence, a worked example or a widget under the message.
        if (t.role === 'assistant' && Array.isArray(t.pictures)) t.pictures.forEach(pic => thread.appendChild(_pictureEl(pic)));
        if (t.role === 'assistant' && t.card && typeof LessonExtras !== 'undefined') {
          const card = LessonExtras.chatCard(t.card, _subject);
          if (card) thread.appendChild(card);
        }
        // Choices only under the newest message: once she answers, they go.
        if (t.role === 'assistant' && Array.isArray(t.choices) && t === _state.transcript[_state.transcript.length - 1]) {
          const row = document.createElement('div');
          row.className = 'teach-choices';
          t.choices.forEach(c => {
            const b = document.createElement('button');
            b.className = 'btn';
            b.textContent = c;
            b.onclick = () => choose(c);
            row.appendChild(b);
          });
          thread.appendChild(row);
        }
      }
    });
    _updateDiagramSlot();
    _renderOpeningStatus();
    thread.lastElementChild?.scrollIntoView({ block: 'nearest' });
  }

  function _appendBubble(role, text, meta) {
    _pushEntry({ role, text, ...meta });
    const thread = document.getElementById('teachThread');
    if (!thread) return;
    const el = document.createElement('div');
    el.className = role === 'user' ? 'askme-q-bubble' : 'askme-a-bubble';
    _setBubbleText(el, role, text);
    thread.appendChild(el);
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function _showThinking() {
    const thread = document.getElementById('teachThread');
    if (!thread) return null;
    const el = document.createElement('div');
    el.className = 'askme-a-bubble loading';
    el.textContent = 'Thinking…';
    thread.appendChild(el);
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return el;
  }

  // ── Opening a key point: the lesson's first opening, or a jump ─
  // Only one such request can be in flight per key point. A second call — a
  // retry tap, a re-render, or the lesson re-mounting — joins the one already
  // running instead of firing again.
  function _openingInFlight() {
    return _openingKey !== null && _openingKey.startsWith(`${_subtopicId}:`);
  }

  // Jumping away mid-exchange leaves a dangling question she never answered.
  // Drop that unfinished stretch so the new point starts clean. A covered
  // point's exchange is finished, so it stays; recaps are never removed.
  function _clearUnfinished(oldIdx) {
    if (_state.coverage[oldIdx] === true) return;
    let end = _state.transcript.length;
    while (end > 0) {
      const e = _state.transcript[end - 1];
      const isTalk = (e.role === 'user' || e.role === 'assistant') && e.pt === oldIdx;
      if (isTalk || e.role === 'note') { end--; continue; }
      break;
    }
    if (end < _state.transcript.length) _state.transcript = _state.transcript.slice(0, end);
  }

  async function _openPoint(index, first) {
    const key = `${_subtopicId}:${index}`;
    if (_openingKey === key) {
      _renderOpeningStatus();
      return;
    }
    _openingKey = key;
    _openingReq = { index, first };
    _renderOpeningStatus();

    let reply, error;
    try {
      const sys = _buildSystemPrompt(index);
      reply = await _callWithLengthGuard(sys, first ? _firstOpeningPrompt() : _jumpPrompt(index), true);
    } catch (e) {
      error = e;
    }

    if (_openingKey !== key) return; // superseded — reset, or she moved on to a different lesson
    _openingKey = null;

    if (error) {
      _logError(first ? 'opening message' : `jump to "${_shortHeading(_points[index].heading)}"`, error);
      _openingFailed = true;
      _renderOpeningStatus();
      return;
    }
    _openingFailed = false;
    if (first) _setOpening(reply); else _commitJump(index, reply);
    _renderShell();
    _renderTranscript();
  }

  async function _beginLesson() {
    // PILOT_FIX: a lesson after one she finished opens with three recall questions.
    if (_core.PILOT_FIX) {
      const first = await _core._pilotFirst().catch(e => { _logError('recall questions', e); return null; });
      if (first) {
        if (first.recap) _pushEntry({ role: 'recap', rid: _rid(), lines: first.recap, done: false });
        _pushEntry(_replyEntry(first.reply, first.decision));
        _renderShell();
        _renderTranscript();
        return;
      }
    }
    return _openPoint(0, true);
  }

  function _retryOpening() {
    if (_openingReq) _openPoint(_openingReq.index, _openingReq.first);
  }

  // The lesson's first message. It replaces anything already sitting there
  // (e.g. a partial from an earlier attempt) rather than stacking a second one;
  // if she has already replied, a late opening is dropped.
  function _setOpening(text) {
    if (_state.transcript.some(t => t.role === 'user')) return;
    _state.transcript = [{ role: 'assistant', text, pt: 0, opening: true }];
    _save();
  }

  // A jump changes nothing until its teaching message has actually arrived.
  // It does not mark the point covered — that only happens when she answers.
  function _commitJump(index, reply) {
    const leaving = _state.currentPointIndex;
    if (_state.resumeIndex === null) {
      // Remember where she was in the normal sequence (or that she was done).
      _state.resumeIndex = _state.complete ? -1 : leaving;
    }
    if (_state.resumeIndex === index) _state.resumeIndex = null; // back to her own place: detour over
    if (!_state.complete && leaving !== index) _clearUnfinished(leaving);
    // Starting the point from the beginning means all of its parts again.
    // (Its coverage is untouched: a point she has covered stays covered.)
    _state.facts[index] = _freshFacts(index, false);
    _resetPointPacing();
    _state.currentPointIndex = index;
    _state.retriedCurrent = false;
    _state.complete = false;
    _state.farewell = false; // she's being taught again, so she needs the box back
    _pushEntry({ role: 'note', text: _shortHeading(_points[index].heading) });
    if (_core.PILOT_FIX) {
      const r = _core._pilotJump(index, reply);
      _pushEntry({ role: 'assistant', text: r.text, pt: index, opening: true, ...r.extra });
      return;
    }
    const diagram = TEACH_INLINE_DIAGRAMS ? _core._inlineDiagram(index) : null;
    _pushEntry({ role: 'assistant', text: reply, pt: index, opening: true, ...(diagram ? { diagram } : {}) });
  }

  function jumpTo(i) {
    if (!_state || !_points[i] || _busy || _openingInFlight()) return;
    // Already at the very start of that point — nothing to restart.
    const last = _state.transcript[_state.transcript.length - 1];
    if (i === _state.currentPointIndex && !_state.complete && last && last.opening && last.pt === i) return;
    _openPoint(i, false);
  }

  // Loading / failed state for an opening or jump. Drawn from module state after
  // every transcript render, so a re-render can neither lose it nor stack a
  // second one. Not saved to the transcript: a failed opening must not resume
  // as if it were a real one, or be fed back to the model as history.
  function _renderOpeningStatus() {
    document.getElementById('teachOpeningStatus')?.remove();
    const thread = document.getElementById('teachThread');
    if (!thread) { return; }

    const loading = _openingInFlight();
    if (loading || _openingFailed) {
      const block = document.createElement('div');
      block.id = 'teachOpeningStatus';
      block.style.cssText = 'align-self:flex-start;display:flex;flex-direction:column;gap:0.5rem;max-width:90%';

      const bubble = document.createElement('div');
      bubble.className = loading ? 'askme-a-bubble loading' : 'askme-a-bubble';
      bubble.textContent = loading
        ? 'Thinking…'
        : (_openingReq && !_openingReq.first
            ? "I couldn't start that topic — try again in a moment."
            : "I can't start us off right now — try again in a moment.");
      block.appendChild(bubble);

      if (_openingFailed) {
        const btn = document.createElement('button');
        btn.className = 'btn pri';
        btn.style.alignSelf = 'flex-start';
        btn.disabled = loading;
        btn.textContent = loading ? 'Trying…' : 'Try again';
        btn.onclick = () => _retryOpening();
        block.appendChild(btn);
      }

      thread.appendChild(block);
      block.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    _syncControls();
  }

  // ── Sending a message ────────────────────────────────────────
  async function send() {
    if (_busy || _openingInFlight()) return;
    const input = document.getElementById('teachInput');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    input.value = '';
    _busy = true;
    _syncControls();

    _appendBubble('user', text, _state.complete ? undefined : { pt: _state.currentPointIndex });
    document.querySelector('#teachThread .teach-choices')?.remove();
    const thinkingEl = _showThinking();
    let toSlides = false;

    try {
      const { reply, recap, decision } = await _getTutorReply(text);
      thinkingEl?.remove();
      // Belt and braces: if a free reply asks a closing question anyway, that
      // still counts as the one offer.
      if (decision.kind === 'free' && !_state.wrapOffered && _looksLikeWrapUpQuestion(reply)) {
        _state.wrapOffered = true;
      }
      // The goodbye: lesson done, closing offer already made, and nothing asked.
      // Only on a free turn — the completion message itself leaves the box open
      // so she can reply to it.
      if (decision.kind === 'free' && _state.complete && _state.wrapOffered && !reply.includes('?')) _state.farewell = true;
      if (recap) _pushEntry({ role: 'recap', rid: _rid(), pt: decision.idx, lines: recap, done: false });
      _pushEntry(_replyEntry(reply, decision));
      toSlides = decision.kind === 'slides';   // RESPECT_EXIT: she chose the slides
      if (_core.PILOT_FIX && _state.pilot && _state.pilot.finished && Store.markFinished) Store.markFinished(_subtopicId);
    } catch {
      thinkingEl?.remove();
      _appendBubble('assistant', "I can't answer that right now — try again in a moment.");
    }

    _busy = false;
    _renderShell();
    _renderTranscript();
    if (toSlides) { showSlides(); return; }
    document.getElementById('teachInput')?.focus();
  }

  // A choice button under the tutor's message: sent as if she had typed it.
  function choose(label) {
    if (_busy || _openingInFlight()) return;
    const input = document.getElementById('teachInput');
    if (!input) return;
    input.value = label;
    send();
  }

  // ── Escape hatch back to the slide view ─────────────────────
  function showSlides() {
    if (!_data) return;
    Lessons.openSlideView(_data, _subtopicId, _subtopicName, _subject);
  }

  // The way back in after the goodbye — she is never locked out of asking more.
  function reopenInput() {
    if (!_state) return;
    _state.farewell = false;
    _save();
    _renderShell();
    _renderTranscript();
    document.getElementById('teachInput')?.focus();
  }

  return { open, send, choose, showSlides, reopenInput, showResetConfirm, cancelReset, confirmReset, jumpTo, toggleTerms, expandDiagram, closeDiagram };
})();
