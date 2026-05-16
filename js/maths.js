/* ============================================================
   MATHS.JS — Main maths module controller
   Entry: Maths.open() — called from subject picker in app.js.
   Handles: home screen, topic/subtopic browse, split-screen
   question interface, hint system, badge unlock, topic test,
   session summary. All localStorage keys prefixed maths_.
   ============================================================ */

const Maths = (() => {

  // ── Module state ─────────────────────────────────────────────
  let _syllabus        = null;
  let _currentQ        = null;
  let _currentStep     = 0;
  let _hintLevel       = {};      // stepIdx → # hint clicks
  let _stepResults     = [];      // null | true | false | 'hinted'
  let _sessionStart    = null;
  let _sessionSubtopic = null;
  let _sessionTopic    = null;
  let _sessionUsedQids = [];
  let _testMode        = false;
  let _testQuestions   = [];
  let _testQIdx        = 0;
  let _testResults     = [];      // { stepsTotal, stepsCorrect } per question

  // ── Storage keys ─────────────────────────────────────────────
  const K = {
    badges:    'maths_badges',        // { M1: { earned, date }, ... }
    attempted: 'maths_attempted',     // { 'num-percentages': true, ... }
    testCool:  'maths_test_cooldown', // { M1: '2026-05-16', ... }
    sessions:  'maths_sessions',
  };

  // ── Utilities ─────────────────────────────────────────────────
  function _localDate() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  // ── Entry point ───────────────────────────────────────────────
  async function open() {
    App.setStage('Maths');
    _sessionStart    = Date.now();
    _sessionUsedQids = [];

    if (!_syllabus) await _loadSyllabus();

    if (MathsWarmup.needsWarmup()) {
      MathsWarmup.start(_showHome);
    } else {
      _showHome();
    }
  }

  async function _loadSyllabus() {
    try {
      const res = await fetch('data/maths-syllabus.json');
      _syllabus = await res.json();
    } catch(e) {
      _syllabus = { topics: {} };
    }
  }

  // ── HOME SCREEN ───────────────────────────────────────────────
  function _showHome() {
    App.setStage('Maths');
    const main      = document.getElementById('main');
    const badges    = Store.get(K.badges)    || {};
    const attempted = Store.get(K.attempted) || {};
    const topics    = _syllabus?.topics || {};

    const earnedBadges = Object.entries(badges)
      .filter(([, b]) => b.earned)
      .map(([code]) => code);

    const badgesHtml = earnedBadges.length
      ? `<div style="margin-bottom:1.5rem">
           <div class="maths-section-label">My badges</div>
           <div class="maths-badges-row">
             ${earnedBadges.map(code => {
               const t = topics[code];
               return `<div class="maths-badge-earned-chip">🏅 ${t?.name || code}</div>`;
             }).join('')}
           </div>
         </div>`
      : '';

    const topicsHtml = Object.entries(topics).map(([code, t]) => {
      const subs     = t.subtopics || [];
      const done     = subs.filter(st => attempted[st.id]).length;
      const pct      = subs.length ? Math.round((done / subs.length) * 100) : 0;
      const hasBadge = badges[code]?.earned;

      return `
        <div class="maths-topic-card ${hasBadge ? 'badge-earned' : ''}"
             onclick="Maths._showTopic('${code}')">
          ${hasBadge ? `<div style="position:absolute;top:12px;right:12px;font-size:1.2rem;line-height:1">🏅</div>` : ''}
          <div class="mtc-icon">${t.icon}</div>
          <div class="mtc-name">${t.name}</div>
          <div class="mtc-desc">${t.description}</div>
          <div class="maths-progress-bar" style="margin-top:0.75rem">
            <div class="maths-progress-fill ${pct === 100 ? 'complete' : ''}" style="width:${pct}%"></div>
          </div>
          <div class="mtc-meta">
            <span>${done} of ${subs.length} attempted</span>
            ${hasBadge ? `<span class="maths-badge-chip">Badge earned</span>` : ''}
          </div>
        </div>`;
    }).join('');

    main.innerHTML = `
      <div class="maths-home">
        <div class="topic-header" style="margin-bottom:1rem">
          <button class="back-btn" onclick="showSubjectPicker()">← Subjects</button>
          <h2>📐 Maths</h2>
        </div>
        ${badgesHtml}
        <div class="maths-section-label">Topics</div>
        <div class="maths-topic-grid">${topicsHtml}</div>
      </div>`;
  }

  // ── TOPIC SCREEN ──────────────────────────────────────────────
  function _showTopic(topicCode) {
    const topics = _syllabus?.topics || {};
    const t = topics[topicCode];
    if (!t) return;
    App.setStage('Maths');

    const attempted = Store.get(K.attempted) || {};
    const badges    = Store.get(K.badges)    || {};
    const hasBadge  = badges[topicCode]?.earned;
    const cooldowns = Store.get(K.testCool)  || {};
    const onCooldown = cooldowns[topicCode] === _localDate();

    const subsHtml = (t.subtopics || []).map(st => {
      const att  = !!attempted[st.id];
      const hasQ = MathsQuestions.hasQuestions(st.id);
      return `
        <div class="maths-subtopic-card ${att ? 'attempted' : ''}"
             onclick="Maths._startQuestion('${st.id}', '${st.name.replace(/'/g, "\\'")}', '${topicCode}')">
          <div class="msc-check">${att ? '◑' : '○'}</div>
          <div class="msc-name">
            ${st.name}
            ${!hasQ ? `<span style="font-size:0.72rem;color:var(--muted);margin-left:0.35rem">(questions coming soon)</span>` : ''}
          </div>
          <span class="msc-tier ${st.tier === 'higher' ? 'higher' : ''}">${st.tier === 'higher' ? 'Higher' : 'Both'}</span>
        </div>`;
    }).join('');

    const testSection = hasBadge
      ? `<div style="background:rgba(245,184,0,0.08);border:1px solid rgba(245,184,0,0.3);
             border-radius:12px;padding:0.85rem 1.1rem;display:flex;align-items:center;gap:0.6rem">
           <span style="font-size:1.1rem">🏅</span>
           <span style="font-size:0.88rem;color:#f5b800;font-weight:600">Badge earned for ${t.name}</span>
         </div>`
      : onCooldown
        ? `<button class="btn" disabled style="opacity:0.5;cursor:not-allowed">
             Topic test available tomorrow
           </button>`
        : `<button class="btn pri" onclick="Maths._startTest('${topicCode}', '${t.name.replace(/'/g, "\\'")}')">
             Take the topic test →
           </button>`;

    document.getElementById('main').innerHTML = `
      <div style="max-width:640px">
        <div class="topic-header" style="margin-bottom:0.85rem">
          <button class="back-btn" onclick="Maths._showHome()">← Topics</button>
          <h2>${t.icon} ${t.name}</h2>
        </div>
        <p style="font-size:0.88rem;color:var(--muted);margin-bottom:1rem;line-height:1.6">${t.description}</p>
        <div class="maths-section-label">Subtopics</div>
        <div class="maths-subtopic-list">${subsHtml}</div>
        <div style="margin-top:1.75rem;padding-top:1.25rem;border-top:1px solid var(--border2)">
          <div class="maths-section-label" style="margin-bottom:0.6rem">Topic test — score 80%+ to earn the badge</div>
          ${testSection}
        </div>
      </div>`;
  }

  // ── QUESTION INTERFACE ────────────────────────────────────────
  function _startQuestion(subtopicId, subtopicName, topicCode) {
    const q = MathsQuestions.getQuestion(subtopicId, null, _sessionUsedQids);
    if (!q) {
      _noQuestionsScreen(subtopicName, topicCode);
      return;
    }
    _sessionUsedQids.push(q.id);
    _sessionSubtopic = subtopicId;
    _sessionTopic    = topicCode;
    _currentQ        = q;
    _currentStep     = 0;
    _hintLevel       = {};
    _stepResults     = new Array(q.steps.length).fill(null);
    _renderQuestion(q, subtopicName, topicCode);
  }

  function _noQuestionsScreen(subtopicName, topicCode) {
    document.getElementById('main').innerHTML = `
      <div style="max-width:500px">
        <div class="topic-header" style="margin-bottom:1rem">
          <button class="back-btn" onclick="Maths._showTopic('${topicCode}')">← Back</button>
          <h2>${subtopicName}</h2>
        </div>
        <div style="background:var(--s1);border:1.5px solid var(--border2);border-radius:14px;
             padding:1.75rem;text-align:center">
          <div style="font-size:2rem;margin-bottom:0.5rem">📝</div>
          <p style="font-size:0.9rem;line-height:1.65;color:var(--muted)">
            Questions for this subtopic are being prepared. Come back soon.
          </p>
          <button class="btn" style="margin-top:1rem" onclick="Maths._showTopic('${topicCode}')">← Back to topic</button>
        </div>
      </div>`;
  }

  function _renderQuestion(q, subtopicName, topicCode) {
    App.setStage('Maths');
    App.setTopicChip(subtopicName);

    const openers = [
      'Take your time — read the question carefully first.',
      'Work through it step by step. Example on the right shows the method.',
      'If you get stuck, the hints are there for a reason.',
      'Same method as the worked example — different numbers, same idea.',
    ];
    const opener  = openers[Math.floor(Math.random() * openers.length)];
    const stepsHtml = q.steps.map((s, i) => _buildStepHtml(s, i, i === 0)).join('');
    const egSteps   = (q.workedExample?.steps || [])
      .map(s => `<div class="maths-eg-step">${s}</div>`).join('');

    document.getElementById('main').innerHTML = `
      <div class="maths-q-page" id="mathsQPage">
        <div class="maths-tabs">
          <div class="maths-tab active" id="tabQ"  onclick="Maths._switchTab('question')">Question</div>
          <div class="maths-tab"        id="tabEg" onclick="Maths._switchTab('example')">Worked example</div>
        </div>
        <div class="maths-tutor-bar" id="mathsTutorBar">
          <span class="mtb-icon">💬</span>
          <span class="mtb-text" id="mathsTutorText">${opener}</span>
        </div>
        <div class="maths-split">
          <div class="maths-q-panel" id="mathsQPanel">
            <div>
              <div class="maths-q-header">
                <span class="maths-q-topic-tag">${subtopicName}</span>
                <span class="maths-q-marks">${q.marks} mark${q.marks !== 1 ? 's' : ''}</span>
              </div>
              <div class="maths-q-text">${q.question}</div>
            </div>
            <div id="mathsSteps">${stepsHtml}</div>
            <div id="mathsQComplete" style="display:none"></div>
            <div class="maths-q-progress" id="mathsQProgress">
              <div class="maths-q-progress-label">Step <span id="mathsStepCount">1</span> of ${q.steps.length}</div>
              <div class="maths-progress-bar">
                <div class="maths-progress-fill" id="mathsStepBar" style="width:0%"></div>
              </div>
            </div>
          </div>
          <div class="maths-eg-panel">
            <div class="maths-eg-label">Worked example</div>
            <div class="maths-eg-subtitle">Follow this method — different numbers, same idea</div>
            <div class="maths-eg-q">${q.workedExample?.question || ''}</div>
            <div class="maths-eg-steps">${egSteps}</div>
          </div>
        </div>
      </div>`;
  }

  function _buildStepHtml(step, i, unlocked) {
    const unit = step.unit ? `<span class="maths-step-unit">${step.unit}</span>` : '';
    const isSkip = step.checkType === 'skip';
    return `
      <div class="maths-step ${unlocked ? '' : 'locked'}" id="mathsStep_${i}" data-step="${i}">
        <div class="maths-step-num">
          <span id="stepLabel_${i}">Step ${i + 1}</span>
        </div>
        <div class="maths-step-prompt">${step.prompt}</div>
        ${isSkip
          ? `<div style="font-size:0.83rem;color:var(--muted);margin-bottom:0.5rem;font-style:italic">
               Read the worked example for this step, then mark as understood.
             </div>`
          : `<div class="maths-step-input-row">
               ${unit}
               <input type="text" id="stepInput_${i}" class="maths-step-input"
                 placeholder="Your answer…" ${unlocked ? '' : 'disabled'}
                 onkeydown="if(event.key==='Enter')Maths._checkStep(${i})">
               <button class="maths-step-check-btn" id="stepBtn_${i}"
                 onclick="Maths._checkStep(${i})" ${unlocked ? '' : 'disabled'}>Check</button>
             </div>`
        }
        <div class="maths-step-feedback" id="stepFeedback_${i}"></div>
        <div id="stepHintBox_${i}" class="maths-hint-box"></div>
        ${isSkip
          ? `<a class="maths-hint-link" style="color:var(--teal)"
               onclick="Maths._skipStep(${i})">Mark as understood →</a>`
          : `<a class="maths-hint-link" id="stepHintLink_${i}"
               onclick="Maths._showHint(${i})">I need a hint</a>`
        }
      </div>`;
  }

  // ── MOBILE TABS ───────────────────────────────────────────────
  function _switchTab(tab) {
    const page  = document.getElementById('mathsQPage');
    const tabQ  = document.getElementById('tabQ');
    const tabEg = document.getElementById('tabEg');
    if (!page) return;
    if (tab === 'example') {
      page.classList.add('show-example');
      tabQ?.classList.remove('active');
      tabEg?.classList.add('active');
    } else {
      page.classList.remove('show-example');
      tabQ?.classList.add('active');
      tabEg?.classList.remove('active');
    }
  }

  // ── STEP CHECK ────────────────────────────────────────────────
  function _checkStep(stepIdx) {
    if (!_currentQ) return;
    const step = _currentQ.steps[stepIdx];
    if (!step || step.checkType === 'skip') return;

    const input = document.getElementById(`stepInput_${stepIdx}`);
    if (!input) return;
    const raw = input.value.trim();
    if (!raw) return;

    const correct = _matchAnswer(raw, step);

    if (correct) {
      if (_stepResults[stepIdx] === null) _stepResults[stepIdx] = true;
      _applyCorrect(stepIdx, step);
      _advanceOrFinish(stepIdx);
    } else {
      if (_stepResults[stepIdx] === null) _stepResults[stepIdx] = false;
      _applyWrong(stepIdx);
    }
  }

  function _applyCorrect(stepIdx, step) {
    const input = document.getElementById(`stepInput_${stepIdx}`);
    const btn   = document.getElementById(`stepBtn_${stepIdx}`);
    const fb    = document.getElementById(`stepFeedback_${stepIdx}`);
    const el    = document.getElementById(`mathsStep_${stepIdx}`);
    const label = document.getElementById(`stepLabel_${stepIdx}`);

    if (input) { input.classList.add('correct-input'); input.disabled = true; }
    if (btn)   btn.remove();
    if (fb)    { fb.className = 'maths-step-feedback ok'; fb.innerHTML = `✓ Correct. <span class="expl">${step.explanation || ''}</span>`; }
    if (label) label.innerHTML = `<span class="step-tick">✓</span> Step ${stepIdx + 1}`;
    el?.classList.add('correct');

    // Progress bar
    const done = _stepResults.filter(r => r !== null).length;
    const pct  = _currentQ ? Math.round((done / _currentQ.steps.length) * 100) : 0;
    const bar  = document.getElementById('mathsStepBar');
    if (bar) bar.style.width = pct + '%';
    const cnt  = document.getElementById('mathsStepCount');
    if (cnt) cnt.textContent = Math.min(done + 1, _currentQ?.steps.length ?? 1);

    _setTutorBar('Good — keep going.', false);
  }

  function _applyWrong(stepIdx) {
    const input = document.getElementById(`stepInput_${stepIdx}`);
    const el    = document.getElementById(`mathsStep_${stepIdx}`);
    const fb    = document.getElementById(`stepFeedback_${stepIdx}`);

    input?.classList.add('wrong-input');
    el?.classList.add('incorrect');
    if (fb) { fb.className = 'maths-step-feedback err'; fb.textContent = 'Not quite — check your working.'; }

    const wrongs = _stepResults.filter(r => r === false).length;
    if (wrongs === 1) _setTutorBar('Have a look at the example on the right — it shows you the method.', true);

    setTimeout(() => {
      input?.classList.remove('wrong-input');
      el?.classList.remove('incorrect');
    }, 700);
  }

  function _advanceOrFinish(stepIdx) {
    const next = stepIdx + 1;
    if (next < (_currentQ?.steps.length ?? 0)) {
      _currentStep = next;
      _unlockStep(next);
    } else {
      _completeQuestion();
    }
  }

  function _unlockStep(stepIdx) {
    const el    = document.getElementById(`mathsStep_${stepIdx}`);
    const input = document.getElementById(`stepInput_${stepIdx}`);
    const btn   = document.getElementById(`stepBtn_${stepIdx}`);
    if (el)    el.classList.remove('locked');
    if (input) { input.disabled = false; setTimeout(() => input.focus(), 60); }
    if (btn)   btn.disabled = false;
  }

  // ── SKIP (explanation-only steps) ────────────────────────────
  function _skipStep(stepIdx) {
    if (_stepResults[stepIdx] === null) _stepResults[stepIdx] = true;
    const label = document.getElementById(`stepLabel_${stepIdx}`);
    if (label) label.innerHTML = `<span class="step-tick">✓</span> Step ${stepIdx + 1}`;
    document.getElementById(`mathsStep_${stepIdx}`)?.classList.add('correct');
    _advanceOrFinish(stepIdx);
  }

  // ── HINTS ─────────────────────────────────────────────────────
  function _showHint(stepIdx) {
    if (!_currentQ) return;
    const step = _currentQ.steps[stepIdx];
    if (!step) return;

    _hintLevel[stepIdx] = (_hintLevel[stepIdx] || 0) + 1;
    const level = _hintLevel[stepIdx];

    const box  = document.getElementById(`stepHintBox_${stepIdx}`);
    const link = document.getElementById(`stepHintLink_${stepIdx}`);
    if (!box) return;
    box.style.display = 'block';

    const hints = [step.hint1, step.hint2, step.hint3];
    box.innerHTML = `💡 <strong>Hint ${level}:</strong> ${hints[Math.min(level, 3) - 1] || step.hint3}`;

    if (level === 1 && link)      link.textContent = 'Still stuck — next hint';
    else if (level === 2 && link) link.textContent = 'Show me the full method';
    else if (link)                link.style.display = 'none';

    if (level === 1) _setTutorBar("Good — using hints is smart, not weak.", false);
    if (_stepResults[stepIdx] === null) _stepResults[stepIdx] = 'hinted';
  }

  // ── COMPLETE QUESTION (lesson & test mode) ────────────────────
  function _completeQuestion() {
    document.getElementById('mathsQProgress')?.remove();

    if (_testMode) {
      // Test scoring: first-attempt-correct steps only
      const skipCount    = (_currentQ?.steps || []).filter(s => s.checkType === 'skip').length;
      const stepsTotal   = (_currentQ?.steps.length || 0) - skipCount;
      const stepsCorrect = _stepResults.filter(r => r === true).length;
      _testResults.push({ stepsTotal, stepsCorrect });

      const topicCode = _sessionTopic;
      const t = _syllabus?.topics?.[topicCode];
      const isLast = _testQIdx >= _testQuestions.length - 1;

      const completeEl = document.getElementById('mathsQComplete');
      if (completeEl) {
        completeEl.style.display = 'block';
        completeEl.innerHTML = `
          <div class="maths-q-complete">
            <div class="mqc-icon">${isLast ? '🏁' : '✅'}</div>
            <div class="mqc-text">${isLast ? 'Last question done!' : `Question ${_testQIdx + 1} complete`}</div>
            <div class="mqc-actions">
              <button class="btn pri"
                onclick="Maths._nextTestQuestion('${topicCode}','${(t?.name || '').replace(/'/g,"\\'")}')">
                ${isLast ? 'See my result →' : 'Next question →'}
              </button>
            </div>
          </div>`;
      }
    } else {
      // Lesson mode
      const topicCode  = _sessionTopic;
      const subtopicId = _sessionSubtopic;

      const attempted = Store.get(K.attempted) || {};
      attempted[subtopicId] = true;
      Store.set(K.attempted, attempted);

      const celebrations = [
        "That's it — all steps done. Nice work.",
        "Done. You worked through every step. That's the whole point.",
        "All through. That's the method — own it.",
      ];
      _setTutorBar(celebrations[Math.floor(Math.random() * celebrations.length)], false);

      const completeEl = document.getElementById('mathsQComplete');
      if (completeEl) {
        completeEl.style.display = 'block';
        completeEl.innerHTML = `
          <div class="maths-q-complete">
            <div class="mqc-icon">✅</div>
            <div class="mqc-text">Question complete</div>
            <div class="mqc-actions">
              <button class="btn pri"
                onclick="Maths._startQuestion('${subtopicId}','','${topicCode}')">
                Another question
              </button>
              <button class="btn" onclick="Maths._showTopic('${topicCode}')">← Back to topic</button>
              <button class="btn" onclick="Maths._endSession()">I'm done for now</button>
            </div>
          </div>`;
      }
    }
  }

  // ── TUTOR BAR ─────────────────────────────────────────────────
  function _setTutorBar(text, highlight) {
    const bar    = document.getElementById('mathsTutorBar');
    const textEl = document.getElementById('mathsTutorText');
    if (!bar || !textEl) return;
    textEl.textContent = text;
    if (highlight) bar.classList.add('highlight');
    else           bar.classList.remove('highlight');
  }

  // ── ANSWER MATCHING ───────────────────────────────────────────
  function _matchAnswer(raw, step) {
    const str = raw.trim();

    // If the step has a displayAnswer containing '/', accept fraction string too
    if (step.displayAnswer && step.displayAnswer.includes('/') && str === step.displayAnswer) {
      return true;
    }

    const num = parseFloat(str.replace(/,/g,'').replace(/[£%\s]/g,''));
    if (isNaN(num)) return false;

    const tol = (step.tolerance ?? 0.005);
    return Math.abs(num - step.answer) <= tol;
  }

  // ── TOPIC TEST ────────────────────────────────────────────────
  function _startTest(topicCode, topicName) {
    const questions = MathsQuestions.getTestQuestions(topicCode);
    if (!questions.length) {
      document.getElementById('main').innerHTML = `
        <div style="max-width:480px">
          <div class="topic-header"><button class="back-btn" onclick="Maths._showTopic('${topicCode}')">← Back</button><h2>Topic test</h2></div>
          <p style="color:var(--muted);padding:1rem 0">No test questions are available for this topic yet. Check back soon.</p>
        </div>`;
      return;
    }
    _testMode      = true;
    _testQuestions = questions;
    _testQIdx      = 0;
    _testResults   = [];
    _sessionTopic  = topicCode;
    _renderTestQuestion(topicCode, topicName);
  }

  function _renderTestQuestion(topicCode, topicName) {
    if (_testQIdx >= _testQuestions.length) {
      _finishTest(topicCode, topicName);
      return;
    }

    const q = _testQuestions[_testQIdx];
    _currentQ    = q;
    _currentStep = 0;
    _hintLevel   = {};
    _stepResults = new Array(q.steps.length).fill(null);

    const dots = _testQuestions.map((_, i) => {
      const cls = i < _testQIdx ? 'done' : i === _testQIdx ? 'current' : '';
      return `<div class="maths-test-dot ${cls}"></div>`;
    }).join('');

    const stepsHtml = q.steps.map((s, i) => _buildStepHtml(s, i, i === 0)).join('');
    const egSteps   = (q.workedExample?.steps || [])
      .map(s => `<div class="maths-eg-step">${s}</div>`).join('');

    document.getElementById('main').innerHTML = `
      <div class="maths-q-page" id="mathsQPage">
        <div class="maths-tabs">
          <div class="maths-tab active" id="tabQ"  onclick="Maths._switchTab('question')">Question</div>
          <div class="maths-tab"        id="tabEg" onclick="Maths._switchTab('example')">Worked example</div>
        </div>
        <div class="maths-tutor-bar" id="mathsTutorBar">
          <span class="mtb-icon">📝</span>
          <span class="mtb-text" id="mathsTutorText">
            Topic test · question ${_testQIdx + 1} of ${_testQuestions.length}
          </span>
          <div class="maths-test-progress" style="margin-left:auto">${dots}</div>
        </div>
        <div class="maths-split">
          <div class="maths-q-panel" id="mathsQPanel">
            <div>
              <div class="maths-q-header">
                <span class="maths-q-topic-tag">${topicName} test</span>
                <span class="maths-q-marks">${q.marks} mark${q.marks !== 1 ? 's' : ''}</span>
              </div>
              <div class="maths-q-text">${q.question}</div>
            </div>
            <div id="mathsSteps">${stepsHtml}</div>
            <div id="mathsQComplete" style="display:none"></div>
            <div class="maths-q-progress" id="mathsQProgress">
              <div class="maths-q-progress-label">Step <span id="mathsStepCount">1</span> of ${q.steps.length}</div>
              <div class="maths-progress-bar">
                <div class="maths-progress-fill" id="mathsStepBar" style="width:0%"></div>
              </div>
            </div>
          </div>
          <div class="maths-eg-panel">
            <div class="maths-eg-label">Worked example</div>
            <div class="maths-eg-subtitle">Different numbers, same method</div>
            <div class="maths-eg-q">${q.workedExample?.question || ''}</div>
            <div class="maths-eg-steps">${egSteps}</div>
          </div>
        </div>
      </div>`;
  }

  function _nextTestQuestion(topicCode, topicName) {
    _testQIdx++;
    if (_testQIdx >= _testQuestions.length) _finishTest(topicCode, topicName);
    else _renderTestQuestion(topicCode, topicName);
  }

  function _finishTest(topicCode, topicName) {
    _testMode = false;

    const totalSteps   = _testResults.reduce((s, r) => s + r.stepsTotal, 0);
    const correctSteps = _testResults.reduce((s, r) => s + r.stepsCorrect, 0);
    const pct          = totalSteps > 0 ? Math.round((correctSteps / totalSteps) * 100) : 0;

    const badges       = Store.get(K.badges) || {};
    const alreadyEarned = badges[topicCode]?.earned;
    const badgeEarned  = pct >= 80 && !alreadyEarned;

    // Cooldown on fail/near-miss
    if (pct < 80) {
      const cool = Store.get(K.testCool) || {};
      cool[topicCode] = _localDate();
      Store.set(K.testCool, cool);
    }

    let tutorMsg;
    if (pct >= 90)      tutorMsg = "That's an excellent result. Badge earned. Silver would be proud.";
    else if (pct >= 80) tutorMsg = "Good work — that's a solid pass. Badge unlocked.";
    else if (pct >= 70) tutorMsg = "Close — just below the badge threshold. Have another look at the topics you found tricky, then retake.";
    else                tutorMsg = "Not there yet, but you've identified exactly what needs work. That's the point of the test. Go back to the sub-topics that caught you out.";

    const colour = pct >= 80 ? 'var(--green)' : pct >= 70 ? 'var(--amber)' : 'var(--red)';

    document.getElementById('main').innerHTML = `
      <div style="max-width:540px">
        <div class="topic-header" style="margin-bottom:1rem">
          <button class="back-btn" onclick="Maths._showTopic('${topicCode}')">← Back to topic</button>
          <h2>${topicName} — Result</h2>
        </div>
        <div class="maths-summary-card">
          <div style="font-size:3rem;text-align:center;margin-bottom:0.5rem">${pct >= 80 ? '🏅' : pct >= 70 ? '📊' : '📖'}</div>
          <div style="font-size:2rem;font-weight:800;text-align:center;color:${colour};margin-bottom:0.35rem">${pct}%</div>
          <div style="font-size:0.85rem;color:var(--muted);text-align:center;margin-bottom:1.25rem">
            ${correctSteps} of ${totalSteps} steps correct on first attempt
          </div>
          <p style="font-size:0.95rem;line-height:1.75;color:var(--muted)">${tutorMsg}</p>
        </div>
        <div style="margin-top:1rem;display:flex;gap:0.6rem;flex-wrap:wrap">
          ${badgeEarned ? `<button class="btn pri" onclick="Maths._showBadgeUnlock('${topicCode}')">🏅 Claim your badge</button>` : ''}
          <button class="btn" onclick="Maths._showTopic('${topicCode}')">Back to topic</button>
          ${pct < 80 ? `<button class="btn" onclick="Maths._startTest('${topicCode}','${topicName.replace(/'/g,"\\'")}')">Retake test</button>` : ''}
        </div>
      </div>`;
  }

  // ── BADGE UNLOCK ──────────────────────────────────────────────
  function _showBadgeUnlock(topicCode) {
    const t = _syllabus?.topics?.[topicCode];
    if (!t) return;

    const badges = Store.get(K.badges) || {};
    badges[topicCode] = { earned: true, date: _localDate() };
    Store.set(K.badges, badges);

    const overlay = document.createElement('div');
    overlay.className = 'maths-badge-overlay';
    overlay.id = 'mathsBadgeOverlay';
    overlay.innerHTML = `
      <div class="maths-badge-box">
        <svg class="maths-badge-svg" width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="rgba(245,184,0,0.12)" stroke="#f5b800" stroke-width="4"/>
          <circle cx="60" cy="60" r="42" fill="rgba(245,184,0,0.08)" stroke="rgba(245,184,0,0.45)" stroke-width="2"/>
          <text x="60" y="56" text-anchor="middle" font-size="30">🏅</text>
          <text x="60" y="80" text-anchor="middle" font-size="10" font-weight="700"
            fill="#f5b800" font-family="Inter,sans-serif" letter-spacing="1.5">MASTER</text>
        </svg>
        <div class="maths-badge-name">${t.name}</div>
        <div class="maths-badge-sub">You scored 80%+ on the ${t.name} topic test.</div>
        <div class="maths-badge-claim">Show this to claim your reward</div>
        <div class="maths-badge-actions">
          <button class="btn pri" onclick="Maths._saveBadge('${topicCode}')">🏅 Save badge</button>
          <button class="btn" onclick="document.getElementById('mathsBadgeOverlay')?.remove();Maths._showTopic('${topicCode}')">Back to topic</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
  }

  function _saveBadge(topicCode) {
    document.getElementById('mathsBadgeOverlay')?.remove();
    _showTopic(topicCode);
  }

  // ── SESSION SUMMARY ───────────────────────────────────────────
  function _endSession() {
    const warmup    = Store.get('maths_warmup_today') || {};
    const topicCode = _sessionTopic;
    const t         = _syllabus?.topics?.[topicCode];

    const stepsTotal   = _stepResults.filter(r => r !== null).length;
    const stepsCorrect = _stepResults.filter(r => r === true).length;
    const hintsUsed    = Object.values(_hintLevel).reduce((s, v) => s + v, 0);
    const mins         = Math.round((Date.now() - (_sessionStart || Date.now())) / 60000);

    // Natural language paragraph
    let msg = '';
    if (warmup.score !== undefined) {
      const w = warmup.score;
      msg += `Warm-up: ${w} out of 5${w >= 4 ? ' — solid start' : w >= 3 ? '' : ' — tricky one'}. `;
    }
    if (t) {
      msg += `You worked on ${t.name}`;
      if (_sessionSubtopic) {
        const st = (t.subtopics || []).find(s => s.id === _sessionSubtopic);
        if (st) msg += ` — specifically ${st.name}`;
      }
      msg += '. ';
    }
    if (stepsTotal > 0) {
      msg += `${stepsCorrect} of ${stepsTotal} steps correct first time. `;
      if (stepsCorrect < stepsTotal) {
        msg += `Worth revisiting the steps that tripped you up. `;
      }
    }
    if (hintsUsed > 0) msg += `You used ${hintsUsed} hint${hintsUsed !== 1 ? 's' : ''} — that's exactly what they're there for. `;
    msg += `Session: ${mins} minute${mins !== 1 ? 's' : ''}. `;

    const closings = [
      "Good session. See you next time.",
      "That's progress. Come back tomorrow.",
      "Every session moves the needle.",
    ];
    msg += closings[Math.floor(Math.random() * closings.length)];

    // Persist
    const sessions = Store.get(K.sessions) || [];
    sessions.unshift({
      date: _localDate(), subject: 'maths', topic: topicCode,
      subtopic: _sessionSubtopic, warmup_score: warmup.score,
      warmup_level: warmup.level, steps_total: stepsTotal,
      steps_correct_first_attempt: stepsCorrect,
      hints_used: hintsUsed, duration_minutes: mins,
    });
    if (sessions.length > 20) sessions.length = 20;
    Store.set(K.sessions, sessions);

    document.getElementById('main').innerHTML = `
      <div class="maths-summary" style="max-width:560px">
        <div class="topic-header" style="margin-bottom:1rem">
          <button class="back-btn" onclick="Maths._showHome()">← Topics</button>
          <h2>Session complete</h2>
        </div>
        <div class="maths-summary-card"><p>${msg}</p></div>
        <div style="margin-top:1rem;display:flex;gap:0.6rem;flex-wrap:wrap">
          <button class="btn pri" onclick="Maths._showHome()">Back to Maths</button>
          <button class="btn" onclick="showSubjectPicker()">Choose another subject</button>
        </div>
      </div>`;
  }

  // ── PUBLIC ────────────────────────────────────────────────────
  return {
    open,
    _showHome,
    _showTopic,
    _startQuestion,
    _checkStep,
    _skipStep,
    _showHint,
    _switchTab,
    _startTest,
    _nextTestQuestion,
    _showBadgeUnlock,
    _saveBadge,
    _endSession,
    _completeQuestion,
    _renderTestQuestion,
    _finishTest,
  };

})();
