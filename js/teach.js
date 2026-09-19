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
  const RECAP_TURNS       = 8;

  // Reply length: max_tokens is the real ceiling — a system-prompt instruction
  // alone won't hold to a hard limit. ~60 words is roughly 90-100 tokens of
  // English; MAX_TOKENS_REPLY leaves just enough room for that and no more.
  const MAX_REPLY_WORDS   = 60;
  const RETRY_MAX_WORDS   = 40;
  const MAX_TOKENS_REPLY  = 100;
  const MAX_TOKENS_RETRY  = 70;
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
      .teach-diagram-zoom { position:absolute; right:0.4rem; bottom:0.35rem; font-size:0.72rem;
        color:var(--text); background:rgba(0,0,0,0.6); border-radius:6px; padding:0.1rem 0.4rem; }
      .teach-diagram-thumb:hover { border-color:var(--amber); }
      .teach-diagram-cap { font-size:0.82rem; color:var(--muted); font-style:italic; line-height:1.5; margin:0.55rem 0 0; }
      .teach-diagram-overlay { position:fixed; inset:0; z-index:600; background:rgba(0,0,0,0.82);
        display:flex; align-items:center; justify-content:center; padding:1rem; }
      .teach-diagram-full { position:relative; max-width:min(720px, 96vw); max-height:94vh; overflow:auto;
        background:var(--s2); border:1px solid var(--border2); border-radius:14px; padding:1rem; }
      .teach-diagram-full img { display:block; width:100%; height:auto; }
      .teach-diagram-close { position:sticky; top:0; float:right; background:var(--s2); border:1px solid var(--border2);
        color:var(--text); border-radius:999px; width:2rem; height:2rem; cursor:pointer; font-size:0.9rem; z-index:1; }

      /* Shorter laptop screens: a thumbnail plus the jump list would push the
         key terms out of view, so the diagram becomes a one-line button. */
      @media (min-width: 761px) and (max-height: 820px) {
        .teach-diagram.teach-panel { padding:0.5rem; }
        .teach-diagram .teach-panel-head { display:none; }
        .teach-diagram-thumb { margin-top:0; cursor:pointer; padding:0.5rem 0.65rem; text-align:left; background:transparent; }
        .teach-diagram-thumb img { display:none; }
        .teach-diagram-zoom { position:static; background:none; padding:0; font-size:0.88rem; color:var(--text); }
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
      .teach-jump-btn.current { background:rgba(232,160,64,0.12); border-color:var(--amber); color:var(--text); }
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
        .teach-side { order:-1; width:100%; position:static; max-height:none !important; }
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
    });
  }

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
    };
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
    }));

    const saved = Store.get(_storageKey());
    if (saved && Array.isArray(saved.transcript) && saved.transcript.length) {
      const resume = saved.resumeIndex;
      _state = {
        transcript: saved.transcript,
        coverage: Array.isArray(saved.coverage) && saved.coverage.length === _points.length
          ? saved.coverage : _points.map(() => null),
        currentPointIndex: typeof saved.currentPointIndex === 'number' ? saved.currentPointIndex : 0,
        retriedCurrent: !!saved.retriedCurrent,
        complete: !!saved.complete,
        resumeIndex: (resume === -1 || (Number.isInteger(resume) && resume >= 0 && resume < _points.length)) ? resume : null,
      };
      _renderShell();
      _renderTranscript();
      return;
    }

    _state = _freshState();
    _renderShell();
    _beginLesson();
  }

  // ── Shell / rendering ────────────────────────────────────────
  function _jumpPanelHtml() {
    const cur = _state.complete ? -1 : _state.currentPointIndex;
    const btns = _points.map((p, i) => {
      const covered = _state.coverage[i] === true;
      const cls = 'teach-jump-btn' + (covered ? ' covered' : '') + (i === cur ? ' current' : '');
      const mark = covered ? '✓' : (i === cur ? '▸' : '');
      return `<button class="${cls}" onclick="Teach.jumpTo(${i})" title="${_esc(p.heading)}">
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
      .map((p, i) => ({ p, covered: _state.coverage[i] === true }))
      .filter(g => g.covered && g.p.keyTerms.length);
    const count = groups.reduce((n, g) => n + g.p.keyTerms.length, 0);
    const body = groups.length
      ? groups.map(g => `<div class="teach-terms-group">
          <div class="teach-terms-point">${_esc(_shortHeading(g.p.heading))}</div>
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

  function _renderShell() {
    const inner = document.getElementById('lessonInner');
    if (!inner) return;
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
      <button class="teach-diagram-thumb" onclick="Teach.expandDiagram()" title="Tap to see it full size">
        <img src="${src}" alt="${_esc(title)}"
          onerror="this.parentElement.style.display='none';document.getElementById('teachDiagFallback_${point.diagram}').style.display='block'">
        <span class="teach-diagram-zoom">⤢ View diagram full size</span>
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
    overlay.innerHTML = `<div class="teach-diagram-full">
        <button class="teach-diagram-close" onclick="Teach.closeDiagram()" aria-label="Close diagram">✕</button>
        <img src="${src}" alt="${_esc(title)}">
        ${cap ? `<p class="teach-diagram-cap">${cap}</p>` : ''}
      </div>`;
    document.body.appendChild(overlay);
    document.addEventListener('keydown', _escCloses);
  }

  function _escCloses(e) { if (e.key === 'Escape') closeDiagram(); }

  function closeDiagram() {
    document.getElementById('teachDiagramOverlay')?.remove();
    document.removeEventListener('keydown', _escCloses);
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
  function _buildSystemPrompt() {
    return [
      `You are a warm, encouraging GCSE Biology tutor teaching Mabel, who is 15 years old and studying AQA Separate Biology (8461), through natural back-and-forth conversation rather than slides.`,
      `Lesson: "${_data.title}".`,
      `Lesson overview: ${_stripHtml(_data.intro || '')}`,
      (_data.commonMistakes || []).length
        ? `Common mistakes students make here — watch for these and gently correct if she makes one: ${_data.commonMistakes.join(' | ')}`
        : '',
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
      lines.push(`Her reply didn't really engage with the key point below — too short, or off the topic. Gently explain this idea again, a different way, in a sentence or two, then ask about it again with a different question. One question only.`);
      lines.push(_pointBrief(decision.point));
    } else if (decision.kind === 'next') {
      lines.push(`Acknowledge her reply naturally in one short sentence. Then move on to the next key point below: introduce it in AT MOST TWO SENTENCES — do not explain the whole point — then immediately ask one question about it. Do not answer your own question.`);
      lines.push(_pointBrief(decision.point));
    } else if (decision.kind === 'resume') {
      lines.push(`Acknowledge her reply naturally in one short sentence. Then take her back to where she was before she went off to look at something else: the key point below. She had already started it, so remind her of it briefly in AT MOST TWO SENTENCES, then immediately ask one question about it. Do not answer your own question.`);
      lines.push(_pointBrief(decision.point));
    } else if (decision.kind === 'complete') {
      lines.push(`Acknowledge her reply naturally. Then let her know all five key points in this lesson have now been covered. Ask, in one short friendly line, whether she'd like to stop here or carry on with some practice questions.`);
    } else {
      lines.push(`All five key points in this lesson have already been covered. Just respond naturally and helpfully to whatever she said.`);
    }
    return lines.join('\n\n');
  }

  async function _callWithLengthGuard(sys, user) {
    const first = (await AI.call(sys, user, MAX_TOKENS_REPLY)).trim();
    const firstPlain = _stripMarkdown(first);
    if (_wordCount(firstPlain) <= MAX_REPLY_WORDS && !_looksTruncated(firstPlain)) {
      return first;
    }

    // Too long (or cut off mid-sentence by max_tokens) — discard it, never
    // show it, and ask once for a shorter version instead of truncating it.
    const retryPrompt = user + `\n\n(Your last reply was too long. Say the same thing again in under ${RETRY_MAX_WORDS} words.)`;
    const retry = (await AI.call(sys, retryPrompt, MAX_TOKENS_RETRY)).trim();
    return retry;
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

  function _decide(userText) {
    if (_state.complete) return { kind: 'free' };
    const idx = _state.currentPointIndex;
    const point = _points[idx];
    const substantive = _isSubstantive(userText, point.wordSet);

    if (!substantive && !_state.retriedCurrent) {
      return { kind: 'retry', idx, point };
    }
    return { idx, verdict: substantive, ..._afterPoint(idx, substantive) };
  }

  function _applyDecision(decision) {
    if (decision.kind === 'free') return;
    if (decision.kind === 'retry') {
      _state.retriedCurrent = true;
      return;
    }
    // Never downgrade a point she has already covered.
    _state.coverage[decision.idx] = decision.verdict || _state.coverage[decision.idx] === true;
    _state.retriedCurrent = false;
    if (decision.kind === 'complete') {
      _state.complete = true;
      _state.resumeIndex = null;
    } else {
      _state.currentPointIndex = decision.nextIndex;
      if (decision.kind === 'resume') _state.resumeIndex = null;
    }
  }

  async function _getTutorReply(userText) {
    const decision = _decide(userText);
    const sys  = _buildSystemPrompt();
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
    if (d.kind === 'retry') {
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
      `Begin the lesson. In AT MOST TWO SENTENCES TOTAL, warmly welcome Mabel (using the lesson overview above in your own words, don't just repeat it) and introduce the first key point below — do not explain the whole point. Then immediately ask one question about it. Do not answer your own question.`,
      _pointBrief(_points[0]),
    ].join('\n\n');
  }

  // Same shape as the lesson's own opening: a short introduction, then one
  // question. Deliberately sends NO conversation history — with the previous
  // exchange in front of it the model carries that conversation on instead of
  // starting this point from the beginning.
  function _jumpPrompt(index) {
    return [
      `Mabel is starting a new key point: "${_points[index].heading}". Teach it from the very beginning, as if you had just reached it. This is a fresh start, not a continuation — do not refer back to anything discussed before, and do not greet her again. She may not have covered the earlier points, so don't assume she knows any terms from them. In AT MOST TWO SENTENCES, introduce this key point — do not explain the whole point — then immediately ask one question about it. Do not answer your own question.`,
      _pointBrief(_points[index]),
    ].join('\n\n');
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
      const sys = _buildSystemPrompt();
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
