/* ============================================================
   LESSONS.JS — Step-by-step lesson renderer
   One sub-topic at a time. Predict → learn → question → notes → next.
   ============================================================ */

const Lessons = (() => {
  let _current            = null;
  let _subtopicName       = '';
  let _cpScores           = {};
  let _cpHintLevels       = {};
  let _usedJokeIds        = [];
  let _profileQuestionShown = false;
  let _steps              = [];
  let _stepIdx            = 0;
  let _stepCpDone         = false; // checkpoint answered this step

  // ── Open a lesson ─────────────────────────────────────────
  async function open(subtopicId, subtopicName, topicCode, subject = 'biology') {
    const panel = document.getElementById('lessonPanel');
    const inner = document.getElementById('lessonInner');

    inner.innerHTML = `
      <div style="text-align:center;padding:4rem 1rem">
        <div style="font-size:2.5rem;margin-bottom:1rem">📖</div>
        <p style="color:var(--muted)">Loading <strong style="color:var(--text)">${subtopicName}</strong>…</p>
      </div>`;
    // Force full-screen geometry inline so stale cached CSS can't override
    panel.style.cssText = 'position:fixed;top:56px;left:0;right:0;bottom:0;width:auto;max-width:none;z-index:100;background:var(--bg);overflow-y:auto;overflow-x:hidden;transform:translateX(0)';
    panel.classList.add('open');

    Store.setLastPosition({ subtopicId, subtopicName, topicCode, subject });

    let data;
    try {
      const res = await fetch(`lessons/${subject}/${subtopicId}.json`);
      if (!res.ok) throw new Error(res.status);
      data = await res.json();
    } catch {
      inner.innerHTML = `
        <div style="text-align:center;padding:4rem 1rem">
          <p style="color:var(--muted)">This lesson is being prepared — check back soon.</p>
          <button class="btn" style="margin-top:1rem" onclick="Lessons.close()">← Back</button>
        </div>`;
      return;
    }

    _current              = data;
    _current.subject      = subject;
    _subtopicName         = subtopicName;
    _cpScores             = {};
    _cpHintLevels         = {};
    _usedJokeIds          = [];
    _profileQuestionShown = false;
    Personality.incrementLessonCount();
    Store.markCovered(subtopicId);

    _steps   = _buildSteps(data);
    _stepIdx = 0;
    _renderStep();
  }

  function close() {
    const panel = document.getElementById('lessonPanel');
    panel.style.transition = 'transform 0.32s cubic-bezier(0.4,0,0.2,1)';
    panel.style.transform = 'translateX(100vw)';
    setTimeout(() => { panel.style.cssText = ''; panel.classList.remove('open'); }, 340);
    _current = null;
  }

  // ── Build step list ────────────────────────────────────────
  function _buildSteps(data) {
    const steps = [];
    steps.push({ type: 'intro' });
    (data.keyPoints || []).forEach((kp, i) => {
      steps.push({ type: 'kp-read', kp, i });
      if (data.checkpoints?.[i]) steps.push({ type: 'kp-check', kp, i, checkpoint: data.checkpoints[i] });
      if (kp.writeBullets?.length || kp.keyTerms?.length) steps.push({ type: 'kp-notes', kp, i });
    });
    (data.tables || []).forEach(t => steps.push({ type: 'table', table: t }));
    if (data.diagrams?.length) {
      const standalone = data.diagrams.filter(d =>
        !(data.keyPoints || []).some(kp => kp.diagram === d.id)
      );
      standalone.forEach(d => steps.push({ type: 'diagram', diag: d }));
    }
    if (data.commonMistakes?.length) steps.push({ type: 'mistakes' });
    if (data.examTips?.length)       steps.push({ type: 'examtips' });
    if (data.revisionCardBullets?.length) steps.push({ type: 'cards' });
    if (data.videoLinks?.length)     steps.push({ type: 'videos' });
    steps.push({ type: 'askme' });
    return steps;
  }

  // ── Render current step ────────────────────────────────────
  function _renderStep() {
    const inner = document.getElementById('lessonInner');
    const step  = _steps[_stepIdx];
    _stepCpDone = false;

    const pct      = Math.round((_stepIdx / (_steps.length - 1)) * 100);
    const isLast   = _stepIdx === _steps.length - 1;
    const nextStep = _steps[_stepIdx + 1];
    const nextLabel = nextStep ? _stepLabel(nextStep) : '';

    // Sticky header: text row above, full-width bar below
    const _barCol = pct >= 80 ? '#52C97A' : pct >= 71 ? '#6BBDE3' : pct >= 41 ? '#E8A838' : '#E05252';
    const header = `
      <div style="position:sticky;top:0;z-index:10;background:var(--bg);padding:0.75rem 0 0">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.4rem">
          <button class="back-btn" onclick="Lessons.close()" style="flex-shrink:0">← Topics</button>
          <div style="flex:1;font-size:0.8rem;color:var(--muted);font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
            ${_current.title || _subtopicName}
          </div>
          <span style="font-size:0.8rem;color:var(--muted);white-space:nowrap;flex-shrink:0">
            ${_stepIdx + 1}/${_steps.length}
          </span>
          <button class="back-btn" onclick="showHome()" style="flex-shrink:0;padding:0.25rem 0.45rem;line-height:0" title="Home">${Icons.inline('home', 22)}</button>
        </div>
        <div style="height:6px;background:rgba(255,255,255,0.12);border-radius:4px;overflow:hidden;margin-bottom:0.5rem">
          <div style="height:100%;width:${pct}%;background:${_barCol};border-radius:4px;transition:width 0.4s ease"></div>
        </div>
      </div>`;

    let body = '';

    switch (step.type) {
      case 'intro':     body = _renderIntroStep(); break;
      case 'kp-read':   body = _renderKpReadStep(step); break;
      case 'kp-check':  body = _renderKpCheckStep(step); break;
      case 'kp-notes':  body = _renderKpNotesStep(step); break;
      case 'table':     body = _renderTableStep(step); break;
      case 'diagram':   body = _renderDiagramStep(step); break;
      case 'mistakes':  body = _renderMistakesStep(); break;
      case 'examtips':  body = _renderExamTipsStep(); break;
      case 'cards':     body = _renderCardsStep(); break;
      case 'videos':    body = _renderVideosStep(); break;
      case 'askme':     body = _renderAskMeStep(); break;
    }

    // Nav footer
    const needsGate  = (step.type === 'kp-check' || step.type === 'kp-notes' || step.type === 'table') && !isLast;
    const nextDisabled = needsGate ? 'disabled' : '';
    const nextBtnId  = 'stepNextBtn';

    const nav = isLast ? `
      <div class="step-nav">
        ${_stepIdx > 0 ? `<button class="btn" onclick="Lessons._prevStep()">← Back</button>` : ''}
        <button class="btn pri" onclick="Lessons._startPractice()">✏️ Practice questions</button>
        <button class="btn" onclick="showHome()">🏠 Home</button>
      </div>` : `
      <div class="step-nav">
        ${_stepIdx > 0 ? `<button class="btn" onclick="Lessons._prevStep()">← Back</button>` : '<div></div>'}
        <button class="btn pri" id="${nextBtnId}" ${nextDisabled} onclick="Lessons._nextStep()">
          ${nextLabel ? `Next: ${nextLabel} →` : 'Next →'}
        </button>
      </div>`;

    inner.innerHTML = header + body + nav;

    // Wrap first occurrence of each glossary term in this step
    if (typeof Glossary !== 'undefined') Glossary.markupContainer(inner);

    // Post-render hooks
    if (step.type === 'cards' && _current.revisionCardBullets?.length) {
      _buildCardList(_current.revisionCardBullets);
    }

    // Scroll to top of panel
    document.getElementById('lessonInner').scrollTop = 0;
    document.getElementById('lessonPanel').scrollTop = 0;
  }

  function _stepLabel(step) {
    if (!step) return '';
    if (step.type === 'kp-read')   return step.kp.heading;
    if (step.type === 'kp-check')  return 'Quick check';
    if (step.type === 'kp-notes')  return 'Write it down';
    if (step.type === 'table')     return 'Summary table';
    if (step.type === 'diagram')   return step.diag.title || 'Diagram';
    if (step.type === 'mistakes')  return 'Common mistakes';
    if (step.type === 'examtips')  return 'Exam technique';
    if (step.type === 'cards')     return 'Your cards';
    if (step.type === 'videos')    return 'Further watching';
    if (step.type === 'askme')     return 'Ask a question';
    return '';
  }

  // ── Step renderers ─────────────────────────────────────────

  function _renderIntroStep() {
    const bullets = _current.introTips?.length
      ? _current.introTips
      : (_current.examTip || '').trim().split(/\.\s+/).filter(Boolean)
          .map(s => s.replace(/\.$/, '').trim());
    return `
      <div style="padding:1.25rem 0 0.75rem">
        <div style="margin-bottom:1rem">${Icons.get('intro', 56)}</div>
        <h2 style="font-family:'Fraunces',serif;font-size:1.7rem;font-weight:800;line-height:1.2;margin-bottom:0.75rem">
          ${_current.title || _subtopicName}
        </h2>
        <p style="font-size:1.1rem;color:var(--muted);line-height:1.75;margin-bottom:1.5rem">
          ${_current.intro}
        </p>
        <div class="tips-box">
          <h4 style="display:flex;align-items:center;gap:0.55rem">
            ${Icons.inline('exam', 22)} What matters for your exam:
          </h4>
          <ul>${bullets.map(b => `<li>${b}</li>`).join('')}</ul>
        </div>
      </div>`;
  }

  // ── kp-read: content + diagram + video strip + personality ──
  function _renderKpReadStep(step) {
    const { kp, i } = step;
    let html = `
      <div class="kp">
        <div class="kp-header">
          <h3>${kp.heading}</h3>
          ${kp.examFlag ? `<span class="flag flag-exam">this gets asked</span>` : ''}
          ${kp.cardFlag ? `<span class="flag flag-card">worth writing down</span>` : ''}
        </div>
        <p style="font-size:1.05rem;line-height:1.75">${kp.content}</p>`;
    if (kp.diagram) html += _renderInlineDiagram(kp.diagram, _current, kp.diagramCaption);
    const vids = _current.videoLinks;
    if (vids?.length) {
      html += `<div class="kp-video-strip">
        <span class="kp-video-strip-label">Watch to reinforce — search on YouTube or BBC Bitesize:</span>
        <div class="kp-video-search-hint">🔍 <strong>${vids[0]?.searchQuery || ''}</strong></div>
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-top:0.5rem">
          ${vids.map(v => `<a class="kp-video-chip" href="${v.url}" target="_blank" rel="noopener">▶ ${v.source || v.label}</a>`).join('')}
        </div>
      </div>`;
    }
    html += `</div>`;
    if (i === 1) {
      if (!_profileQuestionShown) {
        const asked = Personality.renderQuestion(Personality.getLessonCount());
        if (asked) {
          _profileQuestionShown = true;
        } else {
          const moment = Personality.renderMoment('silver', _usedJokeIds);
          _usedJokeIds.push(moment.id);
        }
      } else {
        const moment = Personality.renderMoment('silver', _usedJokeIds);
        _usedJokeIds.push(moment.id);
      }
    }
    if (i === 3) {
      const moment = Personality.renderMoment('skating', _usedJokeIds);
      _usedJokeIds.push(moment.id);
    }
    return html;
  }

  // ── kp-check: checkpoint MCQ only ─────────────────────────
  function _renderKpCheckStep(step) {
    const { kp, i, checkpoint } = step;
    return `
      <div>
        <p style="font-size:0.88rem;color:var(--muted);margin-bottom:1.1rem">
          Quick check — <strong style="color:var(--text)">${kp.heading}</strong>
        </p>
        ${_renderCheckpoint(checkpoint, `cp_${i}`)}
      </div>`;
  }

  // ── kp-notes: write bullets + key terms + checkbox gate ───
  function _renderKpNotesStep(step) {
    const { kp } = step;
    const hasBullets = kp.writeBullets?.length;
    const hasTerms   = kp.keyTerms?.length;
    return `
      <div>
        <p style="font-size:0.9rem;font-weight:700;color:var(--yellow);margin-bottom:0.75rem;letter-spacing:0.03em;display:flex;align-items:center;gap:0.45rem">${Icons.inline('notes', 20)} WRITE THESE INTO YOUR NOTES NOW:</p>
        ${hasBullets ? `<ul style="list-style:none;padding:0;margin:0 0 0.85rem;display:flex;flex-direction:column;gap:0.5rem">
          ${kp.writeBullets.map(b => `<li style="font-size:1.05rem;line-height:1.7;padding-left:1.4rem;position:relative">
            <span style="position:absolute;left:0;color:var(--yellow);font-weight:700">•</span>${b}
          </li>`).join('')}
        </ul>` : ''}
        ${hasTerms ? `
          <p style="font-size:0.88rem;font-weight:700;color:var(--teal);margin-bottom:0.5rem;letter-spacing:0.03em;display:flex;align-items:center;gap:0.45rem">${Icons.inline('key', 20)} KEY TERMS:</p>
          <ul style="list-style:none;padding:0;margin:0 0 0.85rem;display:flex;flex-direction:column;gap:0.5rem">
            ${kp.keyTerms.map(t => `<li style="font-size:1.05rem;line-height:1.7;padding-left:1.4rem;position:relative">
              <span style="position:absolute;left:0;color:var(--teal);font-weight:700">→</span><strong>${t.term}</strong> — ${t.def}
            </li>`).join('')}
          </ul>` : ''}
        ${kp.memTip ? `<div class="mem-tip-box">💡 <strong>Memory tip:</strong> ${kp.memTip}</div>` : ''}
        <label class="done-check-label">
          <input type="checkbox" id="stepDoneCheck" onchange="Lessons._tryUnlockNext()">
          <span>Done — I've written these into my notes</span>
        </label>
      </div>`;
  }

  function _renderTableStep(step) {
    const t = step.table;
    return `
      <h3 style="margin-bottom:0.75rem">${t.title}</h3>
      ${t.examFlag ? `<span class="flag flag-exam" style="margin-bottom:0.75rem;display:inline-flex">worth knowing</span><br>` : ''}
      <div class="lesson-table-wrap" style="margin-bottom:0.75rem">
        <table class="lesson-table">
          <thead><tr>${t.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody>${t.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>
      </div>
      <p style="font-size:0.95rem;font-weight:700;color:var(--yellow);margin-bottom:0.75rem;letter-spacing:0.03em">📋 COPY THIS TABLE INTO YOUR NOTES — every column, every row.</p>
      <label class="done-check-label">
        <input type="checkbox" id="stepDoneCheck" onchange="Lessons._tryUnlockNext()">
        <span>Done — I've copied the table</span>
      </label>`;
  }

  function _renderDiagramStep(step) {
    return _renderInlineDiagram(step.diag.id, _current);
  }

  function _renderMistakesStep() {
    return `
      <div class="mistakes-box">
        <h4>Here's where people drop marks — don't let this be you.</h4>
        <ul>${_current.commonMistakes.map(m => `<li>${m}</li>`).join('')}</ul>
      </div>`;
  }

  function _renderExamTipsStep() {
    return `
      <div class="tips-box">
        <h4>How to actually answer this in the exam.</h4>
        <ul>${_current.examTips.map(t => `<li>${t}</li>`).join('')}</ul>
      </div>`;
  }

  function _ytId(url) {
    return url?.match(/(?:youtu\.be\/|[?&]v=)([^&\n?#]+)/)?.[1] || null;
  }

  function _renderVideosStep() {
    const links = _current.videoLinks || [];
    const cards = links.map(v => {
      const vid = _ytId(v.url);
      if (vid) {
        return `
          <div style="margin-bottom:1.25rem">
            <div style="font-size:0.8rem;color:var(--muted);font-weight:600;margin-bottom:0.4rem;display:flex;align-items:center;gap:0.4rem">
              <span>${v.icon || '▶'}</span>${v.source || v.label}
            </div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;background:var(--s2)">
              <iframe src="https://www.youtube-nocookie.com/embed/${vid}"
                style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;border-radius:10px"
                allowfullscreen loading="lazy" title="${v.label}"></iframe>
            </div>
            <p style="font-size:0.8rem;color:var(--muted);margin-top:0.35rem">${v.label}</p>
          </div>`;
      }
      return `
        <a class="video-link" href="${v.url}" target="_blank" rel="noopener" style="margin-bottom:0.5rem">
          <span style="font-size:1.1rem">${v.icon || '🔗'}</span>
          <span style="flex:1">${v.label}</span>
          ${v.source ? `<span class="video-link-source">${v.source}</span>` : ''}
        </a>`;
    }).join('');
    return `
      <div>
        <h3 style="font-family:'Fraunces',serif;font-size:1.25rem;font-weight:700;margin-bottom:0.35rem">Further watching</h3>
        <p style="font-size:0.92rem;color:var(--muted);margin-bottom:1rem">Watch these to see it explained a different way — pause, rewind, come back.</p>
        ${cards}
      </div>`;
  }

  function _renderAskMeStep() {
    return `
      <div class="askme-wrap">
        <h3 style="font-family:'Fraunces',serif;font-size:1.25rem;font-weight:700;margin-bottom:0.3rem">Anything you're not sure about?</h3>
        <p style="font-size:0.92rem;color:var(--muted);margin-bottom:0.75rem">Ask me anything from this lesson and I'll explain it a different way. There are no silly questions.</p>
        <div class="askme-thread" id="askmeThread"></div>
        <div class="askme-input-row">
          <textarea id="askmeInput" placeholder="e.g. Why does the left ventricle have a thicker wall?" rows="2"
            onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();Lessons.sendAskMe();}"></textarea>
          <button class="btn pri" id="askmeSendBtn" onclick="Lessons.sendAskMe()">Ask</button>
        </div>
        <p style="font-size:0.78rem;color:var(--muted);margin-top:0.4rem">Press Enter to send · Shift+Enter for a new line</p>
      </div>`;
  }

  async function _sendAskMe() {
    const input  = document.getElementById('askmeInput');
    const thread = document.getElementById('askmeThread');
    const btn    = document.getElementById('askmeSendBtn');
    if (!input || !thread) return;
    const q = input.value.trim();
    if (!q) return;

    input.value = '';
    btn.disabled = true;

    const qEl = document.createElement('div');
    qEl.className = 'askme-q-bubble';
    qEl.textContent = q;
    thread.appendChild(qEl);

    const aEl = document.createElement('div');
    aEl.className = 'askme-a-bubble loading';
    aEl.textContent = 'Thinking…';
    thread.appendChild(aEl);
    aEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    try {
      if (!AI.hasKey()) throw new Error('NO_KEY');
      const context = (_current.keyPoints || []).map(kp => `${kp.heading}: ${kp.content.replace(/<[^>]+>/g,'')}`).join('\n');
      const answer = await AI.call(
        `You are a warm, encouraging GCSE Biology tutor talking to Mabel, who is 15 years old and studying AQA Separate Biology (8461). She has just finished the lesson "${_current.title}". Answer her question clearly in 3–5 sentences. Use plain, friendly language. Don't start with a definition. If relevant, connect to something she already covered in the lesson.`,
        `Lesson: ${_current.title}\n\nKey content:\n${context}\n\nMabel's question: ${q}`,
        600
      );
      aEl.textContent = answer;
      aEl.classList.remove('loading');
    } catch(e) {
      if (e.message === 'NO_KEY' || e.message === 'BAD_KEY') {
        aEl.innerHTML = 'To use Ask Me, enter your Anthropic API key first. <button class="btn" style="font-size:0.8rem;padding:0.2rem 0.6rem;margin-left:0.4rem" onclick="Questions.setupKey()">Set up key →</button>';
      } else {
        aEl.textContent = 'Sorry, I couldn\'t get an answer right now — try again in a moment.';
      }
      aEl.classList.remove('loading');
    }

    btn.disabled = false;
    aEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function _renderCardsStep() {
    return `
      <div class="section-divider"><span>Things worth putting on a card</span></div>
      <div style="background:var(--s2);border:1px solid var(--border2);border-radius:14px;padding:1.1rem 1.2rem">
        <p style="font-size:0.85rem;margin-bottom:0.75rem">These are the bits that keep coming up. Save them, and write them out too.</p>
        <div id="cardList"></div>
        <p class="write-note" style="margin-top:0.65rem">Write them out — your brain remembers things you write far better than things you read.</p>
        <button class="btn grn full" style="margin-top:0.75rem" onclick="Lessons.saveAllCards()">💾 Save all cards to my deck</button>
      </div>
      <div style="margin-top:1rem">
        <div class="section-divider"><span>How was this lesson?</span></div>
        <div class="feedback-bar" id="feedbackBar">
          <span>Tell me how this worked for you:</span>
          <div id="fbBtns" style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-top:0.4rem"></div>
        </div>
      </div>`;
  }

  // ── Navigation ─────────────────────────────────────────────
  function _nextStep() {
    if (_stepIdx < _steps.length - 1) {
      _stepIdx++;
      _renderStep();
      // Build feedback buttons on cards step
      const step = _steps[_stepIdx];
      if (step.type === 'cards') {
        requestAnimationFrame(() => _buildFeedbackBtns(_subtopicName, _current));
      }
    }
  }

  function _prevStep() {
    if (_stepIdx > 0) {
      _stepIdx--;
      _renderStep();
    }
  }

  function _tryUnlockNext() {
    const btn     = document.getElementById('stepNextBtn');
    if (!btn) return;
    const step    = _steps[_stepIdx];
    const checkEl = document.getElementById('stepDoneCheck');
    if (!checkEl) { btn.disabled = false; return; }

    btn.disabled = !checkEl.checked;
  }

  // ── Checkpoint interaction ─────────────────────────────────
  function checkpointClick(btn, cpId, isCorrect) {
    const cp = btn.closest('.checkpoint');
    cp.querySelectorAll('.cp-btn').forEach(b => {
      b.disabled = true;
      if (b.dataset.correct === 'true') b.classList.add('correct');
    });
    if (!isCorrect) btn.classList.add('wrong');

    const hintBtn = document.getElementById(`${cpId}_hintBtn`);
    if (hintBtn) hintBtn.style.display = 'none';

    const fb    = document.getElementById(`${cpId}_fb`);
    const cpDef = _steps[_stepIdx]?.checkpoint;
    if (fb && cpDef) {
      fb.innerHTML  = isCorrect
        ? `<span style="display:flex;align-items:flex-start;gap:0.5rem">${Icons.inline('check', 22)} <span>${cpDef.correctFeedback || 'Correct!'}</span></span>`
        : `<span style="display:flex;align-items:flex-start;gap:0.5rem">${Icons.inline('cross', 22)} <span>${cpDef.wrongFeedback || `The answer is: ${cpDef.options[cpDef.correct]}`}</span></span>`;
      fb.className  = `cp-feedback show ${isCorrect ? 'correct' : 'wrong'}`;
    }

    const hintsUsed = _cpHintLevels[cpId] || 0;
    if ((!isCorrect || hintsUsed > 0) && _current && cpDef) {
      Store.logError(`cp_${_current.id}_${cpId}`, {
        type: 'checkpoint',
        subtopicId: _current.id,
        subtopicName: _subtopicName,
        question: cpDef.question,
        correct: cpDef.options[cpDef.correct],
        gotRight: isCorrect,
        hintsUsed,
        date: new Date().toISOString(),
      });
    }

    _cpScores[cpId] = isCorrect;
    _stepCpDone = true;
    _tryUnlockNext();
  }

  function _renderCheckpoint(cp, id) {
    const opts = cp.options.map((opt, i) => {
      const isCorrect = i === cp.correct;
      return `<button class="cp-btn" id="${id}_opt_${i}" data-correct="${isCorrect}" data-cpid="${id}" data-idx="${i}"
        onclick="Lessons.checkpointClick(this,'${id}',${isCorrect})">${opt}</button>`;
    }).join('');
    return `<div class="checkpoint" id="${id}">
      <div class="checkpoint-q"><span>CHECK</span>${cp.question}</div>
      <div class="cp-opts">${opts}</div>
      <div class="cp-hint-box" id="${id}_hint" style="display:none;margin-top:0.55rem;padding:0.55rem 0.75rem;background:rgba(255,214,0,0.1);border:1px solid rgba(255,214,0,0.3);border-radius:8px;font-size:0.85rem;line-height:1.55"></div>
      <button class="btn" id="${id}_hintBtn" style="margin-top:0.5rem;font-size:0.8rem;padding:0.3rem 0.75rem" onclick="Lessons._cpHint('${id}')">💡 Hint</button>
      <div class="cp-feedback" id="${id}_fb"></div>
    </div>`;
  }

  function _cpHint(cpId) {
    const level = (_cpHintLevels[cpId] || 0) + 1;
    _cpHintLevels[cpId] = level;

    const step = _steps.find(s => s.type === 'kp-check' && `cp_${s.i}` === cpId);
    const cpDef = step?.checkpoint;
    if (!cpDef) return;

    const hintBox = document.getElementById(`${cpId}_hint`);
    if (!hintBox) return;
    hintBox.style.display = 'block';

    if (level === 1) {
      const nudge = (cpDef.wrongFeedback || `Think about ${cpDef.options[cpDef.correct]}`).split('.')[0];
      hintBox.innerHTML = `💡 <strong>Hint:</strong> ${nudge}.`;
    } else if (level === 2) {
      const wrongIdxs = cpDef.options.map((_, i) => i).filter(i => i !== cpDef.correct);
      const btn = document.getElementById(`${cpId}_opt_${wrongIdxs[0]}`);
      if (btn && !btn.disabled) {
        btn.style.opacity = '0.3';
        btn.style.textDecoration = 'line-through';
        btn.disabled = true;
      }
      hintBox.innerHTML = `💡💡 <strong>Stronger hint:</strong> One wrong answer removed — think it through.`;
    } else {
      const wrongIdxs = cpDef.options.map((_, i) => i).filter(i => i !== cpDef.correct);
      const btn = document.getElementById(`${cpId}_opt_${wrongIdxs[1] ?? wrongIdxs[0]}`);
      if (btn && !btn.disabled) {
        btn.style.opacity = '0.3';
        btn.style.textDecoration = 'line-through';
        btn.disabled = true;
      }
      hintBox.innerHTML = `💡💡💡 <strong>Last hint:</strong> Two wrong answers removed — go with what you know.`;
    }
  }

  // ── Diagram renderer ───────────────────────────────────────
  function _renderInlineDiagram(diagramId, data, caption) {
    const diagDef = data.diagrams?.find(d => d.id === diagramId) ||
                    data.allDiagrams?.find(d => d.id === diagramId);
    const title   = diagDef?.title || diagramId;
    const subject = data.subject || 'biology';
    const cap     = caption || diagDef?.caption || '';
    return `<div id="diag_${diagramId}" style="max-width:480px;margin:24px auto;background:#1A1A2E;border-radius:8px;padding:16px;border:1px solid var(--border2)">
      <img src="diagrams/${subject}/${diagramId}.svg" alt="${title}"
        onerror="this.style.display='none';document.getElementById('diagFallback_${diagramId}').style.display='block'"
        style="width:100%;height:auto;display:block;border-radius:4px">
      <div id="diagFallback_${diagramId}" style="display:none;color:var(--muted);font-size:0.83rem;font-style:italic;padding:0.5rem;text-align:center">
        Diagram: ${title}
      </div>
      ${cap ? `<p style="margin:10px 0 0;font-size:13px;font-style:italic;color:var(--muted);line-height:1.5">${cap}</p>` : ''}
      <p style="margin:10px 0 0;font-size:0.82rem;color:#E8A838;line-height:1.5">⚠️ Exam tip: diagrams like this come up in questions. Make a quick sketch of this in your notes.</p>
    </div>`;
  }

  // ── Card list ──────────────────────────────────────────────
  function _buildCardList(bullets) {
    const list = document.getElementById('cardList');
    if (!list) return;
    list.innerHTML = '';
    bullets.forEach((b, i) => {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:flex-start;gap:0.6rem;padding:0.5rem 0;border-bottom:1px solid var(--border)';
      if (i === bullets.length - 1) row.style.borderBottom = 'none';
      const num = document.createElement('span');
      num.style.cssText = 'color:var(--muted);font-size:0.7rem;font-weight:700;margin-top:0.15rem;min-width:18px';
      num.textContent = (i + 1) + '.';
      const text = document.createElement('div');
      text.style.cssText = 'flex:1;font-size:0.84rem;line-height:1.6';
      text.textContent = b;
      const btn = document.createElement('button');
      btn.id = `csave_${i}`;
      btn.textContent = '+ Save';
      btn.style.cssText = 'flex-shrink:0;background:rgba(107,203,119,0.1);border:1.5px solid rgba(107,203,119,0.3);color:var(--green);font-family:"DM Sans",sans-serif;font-size:0.73rem;font-weight:600;padding:0.25rem 0.6rem;border-radius:6px;cursor:pointer;transition:all 0.18s';
      btn.onclick = () => _saveOneCard(i, btn, row);
      row.appendChild(num); row.appendChild(text); row.appendChild(btn);
      list.appendChild(row);
    });
  }

  function _saveOneCard(i, btn, row) {
    if (!_current?.revisionCardBullets) return;
    const bullet = _current.revisionCardBullets[i];
    const card = {
      id: `card_${_current.id}_${i}`,
      front: _inferFront(bullet),
      back: bullet,
      topic: _current.title,
      status: 'unseen',
      addedDate: new Date().toISOString(),
      nextReview: new Date().toISOString(),
    };
    const added = Store.addCards([card]);
    btn.textContent = added ? '✓ Saved' : '✓ Already';
    btn.disabled = true; btn.style.opacity = '0.55';
    if (added) row.style.borderColor = 'rgba(107,203,119,0.3)';
    App.toast(added ? '1 card saved to deck' : 'Already in deck');
  }

  function saveAllCards() {
    if (!_current?.revisionCardBullets) return;
    const added = Cards.saveFromLesson(_current.revisionCardBullets, _current.title, _current.id);
    document.querySelectorAll('[id^="csave_"]').forEach(btn => {
      btn.textContent = '✓ Saved'; btn.disabled = true; btn.style.opacity = '0.55';
    });
    App.toast(`${added} card${added !== 1 ? 's' : ''} saved to deck`);
  }

  function _inferFront(back) {
    const clean = back.replace(/<[^>]+>/g, '').trim();
    if (clean.includes(' — ')) return clean.split(' — ')[0] + '?';
    if (clean.includes(': '))  return 'What is ' + clean.split(': ')[0] + '?';
    return 'What do you know about: ' + clean.split(' ').slice(0, 7).join(' ') + '…?';
  }

  // ── Feedback buttons ───────────────────────────────────────
  function _buildFeedbackBtns(subtopicName, lessonData) {
    const wrap = document.getElementById('fbBtns');
    if (!wrap) return;
    const opts = [
      { val: 'liked',         label: '👍 Worked well' },
      { val: 'more-examples', label: '🔁 More examples' },
      { val: 'simpler',       label: '✂️ Simpler' },
      { val: 'more-detail',   label: '🔍 More detail' },
    ];
    opts.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'fb-btn';
      btn.textContent = opt.label;
      btn.onclick = () => {
        wrap.querySelectorAll('.fb-btn').forEach(b => { b.disabled = true; });
        btn.style.borderColor = 'var(--green)';
        btn.style.color = 'var(--green)';
        _recordFeedback(opt.val, subtopicName, lessonData);
      };
      wrap.appendChild(btn);
    });
  }

  function _recordFeedback(val, subtopicName, lessonData) {
    const profile = Store.getLearnerProfile();
    const format  = _describeFormat(lessonData);
    const entry   = { subtopic: subtopicName, format, val, date: new Date().toISOString() };
    if (val === 'liked') profile.liked.push(entry);
    else profile.disliked.push({ ...entry, preference: val });
    if (profile.liked.length   > 30) profile.liked   = profile.liked.slice(-30);
    if (profile.disliked.length > 30) profile.disliked = profile.disliked.slice(-30);
    _buildProfileSummary(profile);
    Store.updateLearnerProfile(profile);
  }

  function _buildProfileSummary(profile) {
    const wantsSimpler  = profile.disliked.filter(d => d.preference === 'simpler').length;
    const wantsMore     = profile.disliked.filter(d => d.preference === 'more-detail').length;
    const wantsExamples = profile.disliked.filter(d => d.preference === 'more-examples').length;
    const liked         = profile.liked.length;
    const parts = [];
    if (wantsSimpler > wantsMore) parts.push('prefers concise explanations');
    if (wantsMore > wantsSimpler) parts.push('appreciates detailed explanations');
    if (wantsExamples > 1)        parts.push('responds well to worked examples');
    if (liked > 2)                parts.push('engages well with the current lesson format');
    profile.summary = parts.length ? `Mabel ${parts.join('; ')}.` : '';
  }

  function _describeFormat(data) {
    const parts = [];
    if (data.diagrams?.length) parts.push(`${data.diagrams.length} diagram(s)`);
    if (data.tables?.length)   parts.push(`${data.tables.length} table(s)`);
    if (data.checkpoints)      parts.push('checkpoint quizzes');
    return parts.join(', ') || 'standard format';
  }

  function _startPractice() {
    if (_current) Questions.start(_current, _subtopicName, _current.id);
  }

  return { open, close, checkpointClick, saveAllCards, _nextStep, _prevStep, _tryUnlockNext, _startPractice, sendAskMe: _sendAskMe, _cpHint };
})();

/* ============================================================
   LABEL EXERCISE
   ============================================================ */
const LabelEx = (() => {
  let _selected = null;

  function build(ex) {
    const container = document.getElementById(`labelEx_${ex.id}`);
    if (!container) return;
    container.innerHTML = `
      <div class="label-exercise">
        <h4>🎯 ${ex.title || 'Label the diagram'}</h4>
        <p>${ex.instruction || 'Click a label from the word bank, then click the correct part of the diagram.'}</p>
        <div style="position:relative" id="labelArea_${ex.id}">
          <img src="diagrams/biology/${ex.diagramId}.svg" style="width:100%;height:auto" alt="Diagram to label">
        </div>
        <div class="word-bank" id="wordBank_${ex.id}">
          ${ex.labels.map(l => `<div class="word-chip" id="chip_${ex.id}_${l.id}" onclick="LabelEx.selectChip('${ex.id}','${l.id}')">${l.text}</div>`).join('')}
        </div>
      </div>`;
  }

  function selectChip(exId, chipId) {
    if (_selected?.exId === exId && _selected?.chipId === chipId) {
      _selected = null;
      document.querySelectorAll(`#wordBank_${exId} .word-chip`).forEach(c => c.classList.remove('sel'));
      return;
    }
    document.querySelectorAll(`#wordBank_${exId} .word-chip`).forEach(c => c.classList.remove('sel'));
    document.getElementById(`chip_${exId}_${chipId}`)?.classList.add('sel');
    _selected = { exId, chipId };
  }

  return { build, selectChip };
})();
