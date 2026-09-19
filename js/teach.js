/* ============================================================
   TEACH.JS — Conversational teaching mode
   Used only for lessons listed in Lessons' TEACH_ENABLED array
   (currently just b3-defences). One key point at a time, taught
   through back-and-forth chat instead of slides.
   ============================================================ */

const Teach = (() => {
  const TRANSCRIPT_CAP    = 40;
  const HISTORY_TURNS     = 6;

  // Reply length: max_tokens is the real ceiling — a system-prompt instruction
  // alone won't hold to a hard limit. ~60 words is roughly 90-100 tokens of
  // English; MAX_TOKENS_REPLY leaves just enough room for that and no more.
  const MAX_REPLY_WORDS   = 60;
  const RETRY_MAX_WORDS   = 40;
  const MAX_TOKENS_REPLY  = 100;
  const MAX_TOKENS_RETRY  = 70;

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

  // ── Helpers ─────────────────────────────────────────────────
  function _storageKey() { return `teach_${_subtopicId}`; }

  function _stripHtml(html) {
    return (html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }

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

  // ── Persistence ──────────────────────────────────────────────
  function _save() {
    Store.set(_storageKey(), {
      transcript: _state.transcript,
      coverage: _state.coverage,
      currentPointIndex: _state.currentPointIndex,
      retriedCurrent: _state.retriedCurrent,
      complete: _state.complete,
    });
  }

  function _freshState() {
    return {
      transcript: [],
      coverage: _points.map(() => null),
      currentPointIndex: 0,
      retriedCurrent: false,
      complete: false,
    };
  }

  // ── Open ─────────────────────────────────────────────────────
  function open(data, subtopicId, subtopicName, subject) {
    _data        = data;
    _subtopicId  = subtopicId;
    _subtopicName = subtopicName;
    _subject     = subject || 'biology';
    _busy        = false;

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
      _state = {
        transcript: saved.transcript,
        coverage: Array.isArray(saved.coverage) && saved.coverage.length === _points.length
          ? saved.coverage : _points.map(() => null),
        currentPointIndex: typeof saved.currentPointIndex === 'number' ? saved.currentPointIndex : 0,
        retriedCurrent: !!saved.retriedCurrent,
        complete: !!saved.complete,
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
  function _renderShell() {
    const inner = document.getElementById('lessonInner');
    if (!inner) return;
    const coveredCount = _state.coverage.filter(c => c === true).length;

    inner.innerHTML = `
      <div style="position:sticky;top:0;z-index:10;background:var(--bg);padding:0.75rem 0 0">
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
      <div id="teachDiagramSlot"></div>
      <div class="askme-wrap" style="padding-top:0.75rem;padding-bottom:1rem">
        <div class="askme-thread" id="teachThread"></div>
        <div class="askme-input-row">
          <textarea id="teachInput" rows="2" placeholder="Type here…"
            onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();Teach.send();}"></textarea>
          <button class="btn pri" id="teachSendBtn" onclick="Teach.send()">Send</button>
        </div>
      </div>`;

    document.getElementById('lessonInner').scrollTop = 0;
    document.getElementById('lessonPanel').scrollTop = 0;
    _updateDiagramSlot();
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
  }

  function cancelReset() {
    const wrap = document.getElementById('teachResetWrap');
    if (wrap) wrap.innerHTML = _resetTriggerHtml();
  }

  function confirmReset() {
    if (!_subtopicId) return;
    Store.remove(_storageKey()); // removes exactly mabel_teach_<lessonId>, nothing else
    _state = _freshState();
    _renderShell();
    _beginLesson();
  }

  function _renderDiagram(point) {
    const diagDef = (_data.diagrams || []).find(d => d.id === point.diagram);
    const title   = diagDef?.title || point.diagram;
    const cap     = point.diagramCaption || diagDef?.caption || '';
    return `<div id="diag_${point.diagram}" class="diag-plate">
      <div class="diag-plate-title">${title}</div>
      <img src="diagrams/${_subject}/${point.diagram}.svg" alt="${title}"
        onerror="this.style.display='none';document.getElementById('teachDiagFallback_${point.diagram}').style.display='block'"
        style="width:100%;height:auto;display:block;border-radius:6px">
      <div id="teachDiagFallback_${point.diagram}" style="display:none;color:var(--muted);font-size:0.83rem;font-style:italic;padding:0.5rem;text-align:center">
        Diagram not yet available
      </div>
      ${cap ? `<p class="diag-plate-caption">${cap}</p>` : ''}
      ${point.diagramExamTip ? `<p class="diag-plate-examtip">⚠️ Diagrams like this come up in questions — sketch this in your notes.</p>` : ''}
    </div>`;
  }

  function _updateDiagramSlot() {
    const slot = document.getElementById('teachDiagramSlot');
    if (!slot) return;
    const point = !_state.complete ? _points[_state.currentPointIndex] : null;
    slot.innerHTML = (point && point.diagram) ? _renderDiagram(point) : '';
  }

  function _renderTranscript() {
    const thread = document.getElementById('teachThread');
    if (!thread) return;
    thread.innerHTML = '';
    _state.transcript.forEach(t => {
      const el = document.createElement('div');
      el.className = t.role === 'user' ? 'askme-q-bubble' : 'askme-a-bubble';
      el.textContent = t.text;
      thread.appendChild(el);
    });
    thread.scrollTop = thread.scrollHeight;
    _updateDiagramSlot();
  }

  function _appendBubble(role, text) {
    _state.transcript.push({ role, text });
    if (_state.transcript.length > TRANSCRIPT_CAP) {
      _state.transcript = _state.transcript.slice(-TRANSCRIPT_CAP);
    }
    _save();
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

  function _recentHistoryBlock() {
    const all = _state.transcript.slice(0, -1);
    const recent = all.slice(-HISTORY_TURNS);
    if (!recent.length) return '';
    return 'Recent conversation so far:\n' + recent.map(t => (t.role === 'user' ? 'Mabel' : 'You') + ': ' + t.text).join('\n');
  }

  function _buildUserPrompt(userText, decision) {
    const lines = [];
    const history = _recentHistoryBlock();
    if (history) lines.push(history);
    lines.push(`Mabel just said: "${userText}"`);

    if (decision.kind === 'retry') {
      lines.push(`Her reply didn't really engage with the key point below — too short, or off the topic. Gently explain this idea again, a different way, in a sentence or two, then ask about it again with a different question. One question only.`);
      lines.push(_pointBrief(decision.point));
    } else if (decision.kind === 'next') {
      lines.push(`Acknowledge her reply naturally in one short sentence. Then move on to the next key point below: introduce it in AT MOST TWO SENTENCES — do not explain the whole point — then immediately ask one question about it. Do not answer your own question.`);
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

  // ── Coverage decision (pure — no state mutation) ────────────
  function _decide(userText) {
    if (_state.complete) return { kind: 'free' };
    const idx = _state.currentPointIndex;
    const point = _points[idx];
    const substantive = _isSubstantive(userText, point.wordSet);
    const isLast = idx >= _points.length - 1;

    if (substantive) {
      return { kind: isLast ? 'complete' : 'next', idx, verdict: true, point: isLast ? null : _points[idx + 1] };
    }
    if (!_state.retriedCurrent) {
      return { kind: 'retry', idx, point };
    }
    return { kind: isLast ? 'complete' : 'next', idx, verdict: false, point: isLast ? null : _points[idx + 1] };
  }

  function _applyDecision(decision) {
    if (decision.kind === 'free') return;
    if (decision.kind === 'retry') {
      _state.retriedCurrent = true;
      return;
    }
    _state.coverage[decision.idx] = decision.verdict;
    if (decision.kind === 'complete') {
      _state.complete = true;
    } else {
      _state.currentPointIndex = decision.idx + 1;
      _state.retriedCurrent = false;
    }
  }

  async function _getTutorReply(userText) {
    const decision = _decide(userText);
    const sys  = _buildSystemPrompt();
    const user = _buildUserPrompt(userText, decision);
    const reply = await _callWithLengthGuard(sys, user);
    _applyDecision(decision); // only commit once the call actually succeeded
    return reply;
  }

  // ── Opening turn ─────────────────────────────────────────────
  async function _beginLesson() {
    const thinkingEl = _showThinking();
    const sys = _buildSystemPrompt();
    const user = [
      `Begin the lesson. In AT MOST TWO SENTENCES TOTAL, warmly welcome Mabel (using the lesson overview above in your own words, don't just repeat it) and introduce the first key point below — do not explain the whole point. Then immediately ask one question about it. Do not answer your own question.`,
      _pointBrief(_points[0]),
    ].join('\n\n');

    try {
      const reply = await _callWithLengthGuard(sys, user);
      thinkingEl?.remove();
      _appendBubble('assistant', reply);
    } catch (e) {
      thinkingEl?.remove();
      _logError('opening message', e);
      _showOpeningFailure();
      return;
    }
    _renderShell();
    _renderTranscript();
  }

  // Not saved to the transcript: a failed opening must not resume as if it
  // were a real one, or be fed back to the model as conversation history.
  function _showOpeningFailure() {
    const thread = document.getElementById('teachThread');
    if (!thread) return;

    const block = document.createElement('div');
    block.id = 'teachRetryBlock';
    block.style.cssText = 'align-self:flex-start;display:flex;flex-direction:column;gap:0.5rem;max-width:90%';

    const bubble = document.createElement('div');
    bubble.className = 'askme-a-bubble';
    bubble.textContent = "I can't start us off right now — try again in a moment.";

    const btn = document.createElement('button');
    btn.className = 'btn pri';
    btn.style.alignSelf = 'flex-start';
    btn.textContent = 'Try again';
    btn.onclick = () => {
      block.remove(); // also stops a second tap while the retry is in flight
      _beginLesson(); // rebuilds the identical opening request
    };

    block.append(bubble, btn);
    thread.appendChild(block);
    block.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // ── Sending a message ────────────────────────────────────────
  async function send() {
    if (_busy) return;
    const input = document.getElementById('teachInput');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    input.value = '';
    _busy = true;
    const btn = document.getElementById('teachSendBtn');
    if (btn) btn.disabled = true;

    _appendBubble('user', text);
    const thinkingEl = _showThinking();

    try {
      const reply = await _getTutorReply(text);
      thinkingEl?.remove();
      _appendBubble('assistant', reply);
    } catch {
      thinkingEl?.remove();
      _appendBubble('assistant', "I can't answer that right now — try again in a moment.");
    }

    _busy = false;
    if (btn) btn.disabled = false;
    _renderShell();
    _renderTranscript();
    document.getElementById('teachInput')?.focus();
  }

  // ── Escape hatch back to the slide view ─────────────────────
  function showSlides() {
    if (!_data) return;
    Lessons.openSlideView(_data, _subtopicId, _subtopicName, _subject);
  }

  return { open, send, showSlides, showResetConfirm, cancelReset, confirmReset };
})();
