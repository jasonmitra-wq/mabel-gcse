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
  const HISTORY_TURNS     = 6;
  const RECAP_TURNS       = 24;  // a point now takes several exchanges — the recap must see all of them
  const CHECKIN_AFTER     = 4;   // exchanges on one point before asking whether she wants the rest explained
  const EXTENSION_EXCHANGES = 2; // hard limit if she does — then the rest is told and the point advances

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

  // ── Helpers ─────────────────────────────────────────────────
  function _storageKey() { return `teach_${_subtopicId}`; }

  function _stripHtml(html) {
    return (html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function _esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // "Physical barriers — your first line of defence" -> "Physical barriers"
  function _shortHeading(h) { return String(h || '').split(' — ')[0]; }

  function _rid() { return 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

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
    });
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
  function open(data, subtopicId, subtopicName, subject) {
    _data        = data;
    _subtopicId  = subtopicId;
    _subtopicName = subtopicName;
    _subject     = subject || 'biology';
    _busy        = false;
    _termsOpen   = false;
    _openingFailed = false;
    _ensureStyles();

    _points = (data.keyPoints || []).map(kp => ({
      heading: kp.heading,
      content: kp.content,
      keyTerms: kp.keyTerms || [],
      diagram: kp.diagram || null,
      diagramCaption: kp.diagramCaption || '',
      diagramExamTip: !!kp.diagramExamTip,
      wordSet: _buildPointWordSet(kp),
      facts: _buildFacts(kp),
    }));

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
      };
      _seedTermsShown();
      _renderShell();
      _renderTranscript();
      return;
    }

    _state = _freshState();
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
            <div class="askme-input-row">
              <textarea id="teachInput" rows="2" placeholder="Type here…"
                onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();Teach.send();}"></textarea>
              <button class="btn pri" id="teachSendBtn" onclick="Teach.send()">Send</button>
            </div>
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

  function expandDiagram() {
    const point = !_state?.complete ? _points[_state.currentPointIndex] : null;
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
        el.textContent = t.text;
        thread.appendChild(el);
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
    el.textContent = text;
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
      `You are a warm, encouraging GCSE Biology tutor teaching Mabel, who is 15 years old and studying AQA Separate Biology (8461), through natural back-and-forth conversation rather than slides.`,
      `Lesson: "${_data.title}".`,
      `Lesson overview: ${_stripHtml(_data.intro || '')}`,
      mistakes.length
        ? `Common mistakes on this particular key point — watch for these and gently correct if she makes one: ${mistakes.join(' | ')}`
        : '',
      teachIdx == null ? '' : `Teach ONLY the key point given below, using only its own content and key terms. Do not bring in, name or preview material from any other key point, even if the conversation heads that way. If she asks about something from a later key point, answer in one short line, tell her it is coming up soon, and return to the current point's question.`,
      _laterPointsLine(teachIdx),
      `Rules: explain ideas a little at a time in plain, friendly language. Ask exactly ONE question at a time and never present a list of options for her to pick from. Keep every reply very short — one to three sentences before your question, no more than about 60 words total. If she asks about something off-topic or unrelated, answer it briefly and kindly, then guide her back to the lesson — never refuse to answer and never tell her to stay focused or scold her for going off-topic.`,
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
      t.role === 'note' ? `(${t.text})` : (t.role === 'user' ? 'Mabel' : 'You') + ': ' + t.text
    ).join('\n');
  }

  function _buildUserPrompt(userText, decision) {
    const lines = [];
    const history = _recentHistoryBlock(false);
    if (history) lines.push(history);
    lines.push(`Mabel just said: "${userText}"`);

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
      lines.push(`She has spent several exchanges on this key point and some of it is still to cover. Do NOT teach anything in this message and do not ask about any part of the topic. In ONE short, friendly line, ask her whether she'd like you to explain the rest quickly, or whether she's ready to move on. That question is the whole message.`);
      lines.push(_pointBrief(decision.point), _coveredLine(decision.idx, decision.facts));
    } else if (decision.kind === 'fact') {
      lines.push(`${decision.askedForMore ? `She asked you to explain the rest, so keep going with this key point. ` : ''}${_toldLine(decision.toldNow) || (decision.askedForMore ? '' : `Acknowledge her reply naturally in one short sentence. `)}Then carry on with the same key point: teach the next part of it, named below, in AT MOST TWO SENTENCES, then ask one question about that part. Teach only this part now — the other parts come later. Do not answer your own question.`);
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
      lines.push(`${_toldRestLine(decision.toldRest) || _toldLine(decision.toldNow) || `Acknowledge her reply naturally. `}Then let her know all five key points in this lesson have now been covered. Ask, in one short friendly line, whether she'd like to stop here or carry on with some practice questions.`);
    } else {
      lines.push(`All five key points in this lesson have already been covered. Just respond naturally and helpfully to whatever she said.`);
    }
    return lines.filter(Boolean).join('\n\n');
  }

  function _trimToLastSentence(text) {
    const m = String(text || '').match(/^[\s\S]*[.!?]["')]?/);
    return m ? m[0].trim() : '';
  }

  // Every attempt is checked, including the shortened ones. The earlier version
  // checked only the first reply and returned the shortened retry unseen, so a
  // retry that hit its own token cap was shown cut off mid-sentence.
  async function _callWithLengthGuard(sys, user) {
    const attempts = [
      { words: MAX_REPLY_WORDS, tokens: MAX_TOKENS_REPLY, note: '' },
      { words: RETRY_MAX_WORDS, tokens: MAX_TOKENS_RETRY,
        note: `(Your last reply was too long or got cut off mid-sentence. Say the same thing again in under ${RETRY_MAX_WORDS} words, and make sure every sentence is finished.)` },
      { words: 30, tokens: MAX_TOKENS_RETRY,
        note: `(Still too long. Give the same message in under 30 words. Finish every sentence, and end with your question.)` },
    ];
    let complete = '', last = '';
    for (const a of attempts) {
      const reply = (await AI.call(sys, a.note ? `${user}\n\n${a.note}` : user, a.tokens)).trim();
      const plain = _stripMarkdown(reply);
      last = reply;
      const cut = _looksTruncated(plain);
      if (!cut && _wordCount(plain) <= a.words) return reply;
      if (!cut && !complete) complete = reply; // finished, just long — usable if nothing better
    }
    // Never show a sentence that stops dead: prefer a complete-but-long reply,
    // otherwise drop the unfinished tail of the last one.
    return complete || _trimToLastSentence(last) || last;
  }

  // ── "Worth writing down" recap ───────────────────────────────
  // Written by the model from the conversation that just happened — not from
  // the lesson's pre-written writeBullets, which are never read or shown here.
  function _buildRecapSystemPrompt() {
    return `You are a warm, encouraging GCSE Biology tutor helping Mabel, who is 15 and studying AQA Separate Biology (8461), keep her revision notes. You write brief recaps of what you have just taught her, in your own plain words — never a copied textbook list. Reply with the recap lines only.`;
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
    if (lines.length > 2 && _looksTruncated(lines[lines.length - 1])) lines.pop();
    return lines.length >= 2 ? lines : null;
  }

  async function _generateRecap(idx) {
    const convo = _pointConversation(idx);
    if (!convo.length) return null;
    const user = [
      `Mabel has just finished the key point "${_points[idx].heading}". Here is the conversation about it:`,
      convo.map(t => (t.role === 'user' ? 'Mabel' : 'You') + ': ' + t.text).join('\n'),
      `Write a short "Worth writing down" recap of what you actually taught her in this conversation, in your own words: 2 to 4 short lines, one idea per line, each under 15 words. Base it on what was said above. No heading, no bullet symbols or numbering, and don't ask a question.`,
    ].join('\n\n');
    const raw = await AI.call(_buildRecapSystemPrompt(), user, MAX_TOKENS_RECAP);
    return _parseRecap(raw);
  }

  // Reading her answer to the check-in. A vague reply moves on rather than
  // stalling; "yes" is treated as agreeing to move on, as is anything that
  // isn't clearly a request for more.
  function _wantsMore(text) {
    const t = String(text || '');
    if (/\b(explain|explanation|more|the rest|again|go over|elaborate|unpack|confus|don'?t (get|understand)|not sure|unsure|lost)\b/i.test(t)) return true;
    return false;
  }

  // Tell her every part still outstanding, then move the point on. Used when
  // she says she's ready, and when an extension she asked for runs out.
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

    // She is answering the check-in ("explain the rest, or move on?"). If she
    // actually answered a part instead, that counts and the lesson carries on
    // normally — only a non-answer is read as a choice.
    if (_state.checkinAsked && !engaged) {
      const rem = remaining();
      // Still working on the topic — even if the words didn't match a part —
      // is a sign she wants to keep going, not a request to move on. The
      // extension limit still bounds how long that can last.
      const wantsMore = _wantsMore(userText) || _isSubstantive(userText, point.wordSet);
      if (wantsMore && rem.length) {
        return { kind: 'fact', idx, point, fact: point.facts[rem[0]], facts, askedForMore: true,
                 pacing: { turnsOnPoint: _state.turnsOnPoint + 1, checkinAsked: false, extensionLeft: EXTENSION_EXCHANGES } };
      }
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
    const reply = await _callWithLengthGuard(sys, user);

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

  // ── Opening a key point: the lesson's first opening, or a jump ─
  // Only one such request can be in flight per key point. A second call — a
  // retry tap, a re-render, or the lesson re-mounting — joins the one already
  // running instead of firing again.
  function _openingInFlight() {
    return _openingKey !== null && _openingKey.startsWith(`${_subtopicId}:`);
  }

  function _firstOpeningPrompt() {
    return [
      `Begin the lesson. In AT MOST TWO SENTENCES TOTAL, warmly welcome Mabel (using the lesson overview above in your own words, don't just repeat it) and introduce the first key point below, starting from the first thing its content describes — do not explain the whole point. Then ask one question about the part named below. Do not answer your own question.`,
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
      `Mabel is starting a new key point: "${_points[index].heading}". Teach it from the very beginning, as if you had just reached it. This is a fresh start, not a continuation — do not refer back to anything discussed before, and do not greet her again. She may not have covered the earlier points, so don't assume she knows any terms from them. In AT MOST TWO SENTENCES, introduce this key point, starting from the first thing its content describes — do not explain the whole point — then ask one question about the part named below. Do not answer your own question.`,
      _pointBrief(_points[index]),
      _partLine(_points[index].facts[0] || null),
      // A jump restarts the point, so every part is outstanding again —
      // _commitJump resets them once this reply actually arrives.
      _remainingLine(index, _freshFacts(index, false), _points[index].facts[0] || null),
    ].filter(Boolean).join('\n\n');
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
      reply = await _callWithLengthGuard(sys, first ? _firstOpeningPrompt() : _jumpPrompt(index));
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

  function _beginLesson() { return _openPoint(0, true); }

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
    _pushEntry({ role: 'note', text: _shortHeading(_points[index].heading) });
    _pushEntry({ role: 'assistant', text: reply, pt: index, opening: true });
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
    const thinkingEl = _showThinking();

    try {
      const { reply, recap, decision } = await _getTutorReply(text);
      thinkingEl?.remove();
      if (recap) _pushEntry({ role: 'recap', rid: _rid(), pt: decision.idx, lines: recap, done: false });
      _pushEntry(_replyEntry(reply, decision));
    } catch {
      thinkingEl?.remove();
      _appendBubble('assistant', "I can't answer that right now — try again in a moment.");
    }

    _busy = false;
    _renderShell();
    _renderTranscript();
    document.getElementById('teachInput')?.focus();
  }

  // ── Escape hatch back to the slide view ─────────────────────
  function showSlides() {
    if (!_data) return;
    Lessons.openSlideView(_data, _subtopicId, _subtopicName, _subject);
  }

  return { open, send, showSlides, showResetConfirm, cancelReset, confirmReset, jumpTo, toggleTerms, expandDiagram, closeDiagram };
})();
