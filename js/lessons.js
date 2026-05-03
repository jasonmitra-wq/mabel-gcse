/* ============================================================
   LESSONS.JS — Step-by-step lesson renderer
   One sub-topic at a time. Predict → learn → question → notes → next.
   ============================================================ */

const Lessons = (() => {
  let _current       = null;
  let _subtopicName  = '';
  let _cpScores      = {};
  let _usedJokeIds   = [];
  let _steps         = [];
  let _stepIdx       = 0;
  let _stepCpDone    = false; // checkpoint answered this step

  // ── Open a lesson ─────────────────────────────────────────
  async function open(subtopicId, subtopicName, topicCode) {
    const panel = document.getElementById('lessonPanel');
    const inner = document.getElementById('lessonInner');

    inner.innerHTML = `
      <div style="text-align:center;padding:4rem 1rem">
        <div style="font-size:2.5rem;margin-bottom:1rem">📖</div>
        <p style="color:var(--muted)">Loading <strong style="color:var(--text)">${subtopicName}</strong>…</p>
      </div>`;
    panel.classList.add('open');

    Store.setLastPosition({ subtopicId, subtopicName, topicCode });

    let data;
    try {
      const res = await fetch(`lessons/biology/${subtopicId}.json`);
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

    _current      = data;
    _subtopicName = subtopicName;
    _cpScores     = {};
    _usedJokeIds  = [];
    Personality.incrementLessonCount();
    Store.markCovered(subtopicId);

    _steps   = _buildSteps(data);
    _stepIdx = 0;
    _renderStep();
  }

  function close() {
    document.getElementById('lessonPanel').classList.remove('open');
    _current = null;
  }

  // ── Build step list ────────────────────────────────────────
  function _buildSteps(data) {
    const steps = [];
    steps.push({ type: 'intro' });
    (data.keyPoints || []).forEach((kp, i) => {
      steps.push({ type: 'keypoint', kp, i, checkpoint: data.checkpoints?.[i] || null });
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

    // Sticky header: back + progress + step count + home
    const header = `
      <div style="position:sticky;top:0;z-index:10;background:var(--bg);padding:0.75rem 0 0.5rem">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem">
          <button class="back-btn" onclick="Lessons.close()" style="flex-shrink:0">← Topics</button>
          <div style="flex:1">
            <div style="font-size:0.8rem;color:var(--muted);margin-bottom:4px;font-weight:500">
              ${_current.title || _subtopicName}
            </div>
            <div class="q-progress-track">
              <div class="q-progress-fill" style="width:${pct}%"></div>
            </div>
          </div>
          <span style="font-size:0.8rem;color:var(--muted);white-space:nowrap;flex-shrink:0">
            ${_stepIdx + 1}/${_steps.length}
          </span>
          <button class="back-btn" onclick="showHome()" style="flex-shrink:0;padding:0.25rem 0.45rem;line-height:0" title="Home">${Icons.inline('home', 22)}</button>
        </div>
      </div>`;

    let body = '';

    switch (step.type) {
      case 'intro':     body = _renderIntroStep(); break;
      case 'keypoint':  body = _renderKeyPointStep(step); break;
      case 'table':     body = _renderTableStep(step); break;
      case 'diagram':   body = _renderDiagramStep(step); break;
      case 'mistakes':  body = _renderMistakesStep(); break;
      case 'examtips':  body = _renderExamTipsStep(); break;
      case 'cards':     body = _renderCardsStep(); break;
    }

    // Nav footer
    const needsGate  = step.type === 'keypoint' || step.type === 'table';
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
    if (step.type === 'keypoint')  return step.kp.heading;
    if (step.type === 'table')     return 'Summary table';
    if (step.type === 'diagram')   return step.diag.title || 'Diagram';
    if (step.type === 'mistakes')  return 'Common mistakes';
    if (step.type === 'examtips')  return 'Exam technique';
    if (step.type === 'cards')     return 'Your cards';
    return '';
  }

  // ── Step renderers ─────────────────────────────────────────

  function _renderIntroStep() {
    const raw     = (_current.examTip || '').trim();
    const bullets = raw.split(/\.\s+/).filter(Boolean)
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

  function _renderKeyPointStep(step) {
    const { kp, i, checkpoint } = step;
    let html = `
      <div class="kp" style="margin-bottom:1rem">
        <div class="kp-header">
          <h3>${kp.heading}</h3>
          ${kp.examFlag ? `<span class="flag flag-exam">this gets asked</span>` : ''}
          ${kp.cardFlag ? `<span class="flag flag-card">worth writing down</span>` : ''}
        </div>
        <p>${kp.content}</p>`;

    if (kp.diagram) html += _renderInlineDiagram(kp.diagram, _current);
    html += `</div>`;

    // Personality moment at key points 1 and 3
    if (i === 1) {
      const moment = Personality.renderMoment('silver', _usedJokeIds);
      _usedJokeIds.push(moment.id);
      html += moment.html;
      const pq = Personality.renderQuestion(Personality.getLessonCount());
      if (pq) html += pq.html;
    }
    if (i === 3) {
      const moment = Personality.renderMoment('skating', _usedJokeIds);
      _usedJokeIds.push(moment.id);
      html += moment.html;
    }

    // Checkpoint (if exists)
    if (checkpoint) {
      html += `<div style="border-top:1px solid var(--border);margin-top:1rem;padding-top:1rem">`;
      html += _renderCheckpoint(checkpoint, `cp_${i}`);
      html += `</div>`;
    }

    // Write-it-down section — dictated bullets + key terms + checkbox
    const hasBullets = kp.writeBullets?.length;
    const hasTerms   = kp.keyTerms?.length;
    if (hasBullets || hasTerms) {
      html += `
        <div style="border-top:1px solid var(--border);margin-top:1.25rem;padding-top:1.1rem">
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
          <label class="done-check-label">
            <input type="checkbox" id="stepDoneCheck" onchange="Lessons._tryUnlockNext()">
            <span>Done — I've written these into my notes</span>
          </label>
        </div>`;
    }

    return html;
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
      </div>
      ${_current.videoLinks?.length ? `
        <div style="margin-top:1rem">
          ${_current.videoLinks.map(v => `<a class="video-link" href="${v.url}" target="_blank" rel="noopener">🎥 ${v.label}</a>`).join('')}
        </div>` : ''}`;
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

    const hasDone = checkEl.checked;
    const needsCp = step.type === 'keypoint' && step.checkpoint !== null;
    const cpOk    = !needsCp || _stepCpDone;

    btn.disabled = !(hasDone && cpOk);
  }

  // ── Checkpoint interaction ─────────────────────────────────
  function checkpointClick(btn, cpId, isCorrect) {
    const cp = btn.closest('.checkpoint');
    cp.querySelectorAll('.cp-btn').forEach(b => {
      b.disabled = true;
      if (b.dataset.correct === 'true') b.classList.add('correct');
    });
    if (!isCorrect) btn.classList.add('wrong');

    const fb    = document.getElementById(`${cpId}_fb`);
    const cpDef = _steps[_stepIdx]?.checkpoint;
    if (fb && cpDef) {
      fb.innerHTML  = isCorrect
        ? `<span style="display:flex;align-items:flex-start;gap:0.5rem">${Icons.inline('check', 22)} <span>${cpDef.correctFeedback || 'Correct!'}</span></span>`
        : `<span style="display:flex;align-items:flex-start;gap:0.5rem">${Icons.inline('cross', 22)} <span>${cpDef.wrongFeedback || `The answer is: ${cpDef.options[cpDef.correct]}`}</span></span>`;
      fb.className  = `cp-feedback show ${isCorrect ? 'correct' : 'wrong'}`;
    }
    _cpScores[cpId] = isCorrect;
    _stepCpDone = true;
    _tryUnlockNext();
  }

  function _renderCheckpoint(cp, id) {
    const opts = cp.options.map((opt, i) => {
      const isCorrect = i === cp.correct;
      return `<button class="cp-btn" data-correct="${isCorrect}" data-cpid="${id}" data-idx="${i}"
        onclick="Lessons.checkpointClick(this,'${id}',${isCorrect})">${opt}</button>`;
    }).join('');
    return `<div class="checkpoint" id="${id}">
      <div class="checkpoint-q"><span>CHECK</span>${cp.question}</div>
      <div class="cp-opts">${opts}</div>
      <div class="cp-feedback" id="${id}_fb"></div>
    </div>`;
  }

  // ── Diagram renderer ───────────────────────────────────────
  function _renderInlineDiagram(diagramId, data) {
    const diagDef = data.diagrams?.find(d => d.id === diagramId) ||
                    data.allDiagrams?.find(d => d.id === diagramId);
    const title   = diagDef?.title || diagramId;
    const isExam  = diagDef?.examFlag;
    return `<div class="diagram-wrap" id="diag_${diagramId}">
      <div class="diagram-title">📊 ${title}${isExam ? ' <span class="flag flag-exam" style="margin-left:auto">worth knowing</span>' : ''}</div>
      <div id="diagContent_${diagramId}">
        <img src="diagrams/biology/${diagramId}.svg" alt="${title}"
          onerror="this.style.display='none';document.getElementById('diagFallback_${diagramId}').style.display='block'"
          style="width:100%;height:auto">
        <div id="diagFallback_${diagramId}" style="display:none;color:var(--muted);font-size:0.83rem;font-style:italic;padding:0.5rem">
          Diagram: ${title}
        </div>
      </div>
      ${isExam ? `<p class="write-note" style="margin-top:0.5rem">Sketch this one and label it — they've asked this before.</p>` : ''}
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

  return { open, close, checkpointClick, saveAllCards, _nextStep, _prevStep, _tryUnlockNext, _startPractice };
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
