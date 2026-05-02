/* ============================================================
   QUESTIONS.JS — Question engine, grading, error log, mastery
   ============================================================ */

const Questions = (() => {
  // State
  let _questions  = [];
  let _idx        = 0;
  let _results    = [];
  let _score      = 0;
  let _total      = 0;
  let _topicName  = '';
  let _topicId    = '';
  let _hintShown  = false;

  // ── Load questions via AI ─────────────────────────────────
  async function start(lessonData, topicName, topicId) {
    _topicName = topicName;
    _topicId   = topicId;

    document.getElementById('qPanel').classList.add('open');
    document.getElementById('qInner').innerHTML = `
      <div style="text-align:center;padding:3rem 1rem">
        <div style="font-size:2rem;margin-bottom:0.75rem">⏳</div>
        <p style="color:var(--muted)">Generating questions on <strong style="color:var(--text)">${topicName}</strong>…</p>
        <p style="font-size:0.78rem;color:var(--muted);margin-top:0.5rem">This takes a few seconds — only happens once.</p>
      </div>`;

    // Ask user how many questions
    // Actually show count picker first
    _showCountPicker(lessonData, topicName, topicId);
  }

  function _showCountPicker(lessonData, topicName, topicId) {
    document.getElementById('qInner').innerHTML = `
      <div style="max-width:500px;margin:2rem auto;text-align:center">
        <div style="font-size:2rem;margin-bottom:0.75rem">✏️</div>
        <h2 style="font-family:'Fraunces',serif;font-size:1.2rem;margin-bottom:0.4rem">Practice questions</h2>
        <p style="color:var(--muted);font-size:0.88rem;margin-bottom:1.5rem">${topicName}</p>
        <div style="display:flex;flex-direction:column;gap:0.55rem;max-width:280px;margin:0 auto">
          <button class="btn pri full" onclick="Questions._load(${JSON.stringify(lessonData).replace(/"/g,'&quot;')},'${topicName}','${topicId}',3)">3 questions — quick</button>
          <button class="btn pri full" onclick="Questions._load(${JSON.stringify(lessonData).replace(/"/g,'&quot;')},'${topicName}','${topicId}',5)">5 questions — standard</button>
          <button class="btn pri full" onclick="Questions._load(${JSON.stringify(lessonData).replace(/"/g,'&quot;')},'${topicName}','${topicId}',8)">8 questions — full practice</button>
        </div>
        <button class="btn full" style="max-width:280px;margin:0.5rem auto;display:block" onclick="Questions.close()">← Back to lesson</button>
      </div>`;
  }

  async function _load(lessonData, topicName, topicId, count) {
    document.getElementById('qInner').innerHTML = `
      <div style="text-align:center;padding:3rem 1rem">
        <div style="font-size:2rem;margin-bottom:0.75rem">🧠</div>
        <p style="color:var(--muted)">Generating <strong style="color:var(--text)">${count} questions</strong>…</p>
      </div>`;

    const profile = Store.getLearnerProfile();
    const profileNote = profile.summary ? `\nStudent profile: ${profile.summary}` : '';

    const prompt = `Subject: AQA GCSE Biology (8461)
Topic: ${topicName}
Key content: ${lessonData.revisionCardBullets ? lessonData.revisionCardBullets.join('; ') : topicName}
Number of questions: ${count}
${profileNote}

Generate ${count} exam-style questions. Mix mark values (1, 2, 3, 4, 6). Follow AQA mark scheme conventions exactly.
Vary command words: State, Describe, Explain, Evaluate, Compare.
Return ONLY valid JSON array, no markdown:
[{
  "question": "question text (HTML ok for <strong>two</strong>)",
  "marks": 2,
  "hint1": "gentle nudge",
  "hint2": "stronger hint with key term",
  "keywords": ["keyword1","keyword2"],
  "modelAnswer": "model answer with [1] after each marking point",
  "examTip": "specific tip for this question type",
  "difficulty": "foundation|higher"
}]`;

    try {
      const raw = await AI.call(
        `You are an AQA GCSE Biology examiner creating practice questions for a 15-year-old student. Return ONLY valid JSON arrays, no markdown fences, no preamble.`,
        prompt, 3000
      );
      let clean = raw.trim().replace(/^```(?:json)?\s*/i,'').replace(/\s*```\s*$/i,'').trim();
      if (!clean.startsWith('[')) {
        const m = clean.match(/\[[\s\S]*\]/);
        if (m) clean = m[0];
      }
      _questions = JSON.parse(clean);
    } catch(e) {
      document.getElementById('qInner').innerHTML = `
        <div style="text-align:center;padding:3rem 1rem">
          <p style="color:var(--red);margin-bottom:1rem">⚠️ Couldn't generate questions right now.</p>
          <button class="btn pri" onclick="Questions._load(${JSON.stringify(lessonData).replace(/"/g,'&quot;')},'${topicName}','${topicId}',${count})">Try again</button>
          <button class="btn" style="margin-left:0.5rem" onclick="Questions.close()">Back to lesson</button>
        </div>`;
      return;
    }

    _idx    = 0;
    _results = [];
    _score  = 0;
    _total  = _questions.reduce((s, q) => s + (q.marks || 2), 0);
    App.setScoreChip(`0/${_total}`);
    document.getElementById('hdrScore').style.display = '';
    _renderQuestion();
  }

  // ── Render question ───────────────────────────────────────
  function _renderQuestion() {
    if (_idx >= _questions.length) { _showResults(); return; }

    const q = _questions[_idx];
    _hintShown = 0; // 0 = no hint, 1 = hint1 shown, 2 = hint2 shown
    const pct = (_idx / _questions.length) * 100;

    document.getElementById('qInner').innerHTML = `
      <div class="q-card">
        <div class="q-meta">
          <span class="q-num">Question ${_idx + 1} of ${_questions.length}</span>
          <span class="q-marks">${q.marks} mark${q.marks>1?'s':''}</span>
        </div>
        <div class="q-progress-track">
          <div class="q-progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="q-text">${q.question}</div>
        <div class="q-input-area">
          <textarea class="q-textarea" id="qAnswer" placeholder="Write your answer here…"></textarea>
          <div class="hint-box" id="hintBox"></div>
          <div class="q-btns">
            <button class="btn pri" onclick="Questions._submit()">Submit answer</button>
            <button class="btn yel" onclick="Questions._hint()">💡 Hint</button>
            <button class="btn red" onclick="Questions._skip()">⏭ Show model answer</button>
          </div>
        </div>
      </div>`;

    document.getElementById('qAnswer').focus();

    // Enter key doesn't submit (allow newlines in answer)
  }

  // ── Hint system (tiered) ──────────────────────────────────
  function _hint() {
    const q = _questions[_idx];
    const box = document.getElementById('hintBox');
    if (!box) return;

    _hintShown++;
    if (_hintShown === 1 && q.hint1) {
      box.innerHTML = `💡 <strong>Hint:</strong> ${q.hint1}`;
      box.classList.add('show');
    } else if (_hintShown === 2 && q.hint2) {
      box.innerHTML = `💡💡 <strong>Stronger hint:</strong> ${q.hint2}`;
    } else {
      box.innerHTML = `💡 No more hints — try your best or skip to the model answer.`;
    }
  }

  // ── Grade answer ──────────────────────────────────────────
  function _submit() {
    const ans = (document.getElementById('qAnswer')?.value || '').trim();
    if (!ans) { App.toast('Write something first!'); return; }
    _grade(ans);
  }

  function _skip() {
    _grade(null);
  }

  function _grade(userAnswer) {
    const q = _questions[_idx];
    let marksEarned = 0;
    let mastery = 'skipped';
    let gradeClass = 'g-low';
    let gradeLabel = '';

    if (userAnswer) {
      const lower = userAnswer.toLowerCase();
      const hits = (q.keywords || []).filter(kw => lower.includes(kw.toLowerCase())).length;
      const ratio = q.keywords?.length ? hits / q.keywords.length : 0;

      if (ratio >= 0.65) {
        marksEarned = q.marks;
        mastery = 'full';
        gradeClass = 'g-high';
        gradeLabel = `✅ Excellent — Grade 7–8 &nbsp;(${marksEarned}/${q.marks} marks)`;
      } else if (ratio >= 0.35) {
        marksEarned = Math.round(q.marks * 0.6);
        mastery = 'partial';
        gradeClass = 'g-mid';
        gradeLabel = `📋 Good — Grade 5–6 &nbsp;(${marksEarned}/${q.marks} marks)`;
      } else {
        marksEarned = Math.max(0, Math.round(q.marks * 0.2));
        mastery = 'missed';
        gradeClass = 'g-low';
        gradeLabel = `⚠️ Needs more — Grade 3–4 &nbsp;(${marksEarned}/${q.marks} marks)`;
      }
      _score += marksEarned;
    }

    _results.push({ question: q.question, marks: q.marks, earned: marksEarned, mastery, userAnswer, modelAnswer: q.modelAnswer, examTip: q.examTip });
    App.setScoreChip(`${_score}/${_total}`);

    // Render grade + model answer + next buttons
    const canRetry = mastery === 'missed' || mastery === 'partial';
    document.getElementById('qInner').innerHTML = `
      <div class="q-card">
        <div class="q-meta">
          <span class="q-num">Question ${_idx + 1} of ${_questions.length}</span>
          <span class="q-marks">${q.marks} mark${q.marks>1?'s':''}</span>
        </div>
        <div class="q-text">${q.question}</div>
        ${userAnswer ? `
          <div style="background:var(--s2);border:1px solid var(--border2);border-radius:8px;padding:0.65rem 0.85rem;font-size:0.84rem;margin-top:0.75rem;color:var(--muted)">
            <strong style="color:var(--text);display:block;margin-bottom:0.25rem">Your answer:</strong>${userAnswer}
          </div>
          <div class="grade-box ${gradeClass}" style="margin-top:0.75rem"><strong>${gradeLabel}</strong></div>
        ` : `<p style="color:var(--muted);font-size:0.85rem;margin-top:0.75rem">Here's what a strong answer looks like:</p>`}
        <div style="margin-top:0.75rem">
          <p style="font-size:0.78rem;font-weight:700;color:var(--blue);margin-bottom:0.35rem">MODEL ANSWER (${q.marks} mark${q.marks>1?'s':''}):</p>
          <div class="model-ans">${q.modelAnswer}</div>
          <p style="font-size:0.78rem;color:var(--muted);font-style:italic;margin-top:0.4rem">💡 ${q.examTip}</p>
        </div>
        <div class="q-btns" style="margin-top:1rem">
          ${canRetry ? `<button class="btn yel" onclick="Questions._retry()">🔁 Have another go</button>` : ''}
          ${_idx + 1 < _questions.length
            ? `<button class="btn pri" onclick="Questions._next()">➡️ Question ${_idx + 2}</button>`
            : `<button class="btn pri" onclick="Questions._showResults()">🏁 See results</button>`}
          <button class="btn" onclick="Questions._showResults()">Finish early</button>
        </div>
      </div>`;
  }

  function _retry() {
    // Remove last result so it can be re-recorded
    const last = _results[_results.length - 1];
    if (last) { _score -= last.earned; _results.pop(); App.setScoreChip(`${_score}/${_total}`); }

    const q = _questions[_idx];
    document.getElementById('qInner').innerHTML = `
      <div class="q-card">
        <div class="q-meta">
          <span class="q-num">Question ${_idx + 1} — retry</span>
          <span class="q-marks">${q.marks} mark${q.marks>1?'s':''}</span>
        </div>
        <div class="q-text">${q.question}</div>
        <div class="q-input-area">
          <textarea class="q-textarea" id="qAnswer" placeholder="Try again — you've seen the model answer, use it to guide you…"></textarea>
          <div class="q-btns">
            <button class="btn pri" onclick="Questions._submit()">Submit</button>
            <button class="btn red" onclick="Questions._skip()">Skip</button>
          </div>
        </div>
      </div>`;
    document.getElementById('qAnswer').focus();
  }

  function _next() {
    _idx++;
    _renderQuestion();
  }

  // ── Results screen ────────────────────────────────────────
  function _showResults() {
    const full    = _results.filter(r => r.mastery === 'full').length;
    const partial = _results.filter(r => r.mastery === 'partial').length;
    const missed  = _results.filter(r => r.mastery === 'missed').length;
    const skipped = _results.filter(r => r.mastery === 'skipped').length;
    const errors  = _results.filter(r => r.mastery !== 'full' && r.mastery !== 'skipped');
    const total   = _results.length;
    const pct     = _total > 0 ? Math.round((_score / _total) * 100) : 0;
    const pctCol  = pct >= 70 ? 'var(--green)' : pct >= 50 ? 'var(--yellow)' : 'var(--red)';

    // Save to store
    Store.addScore(_topicName, _score, _total);

    // Mastery bar widths
    const mFull    = Math.round((full/total)*100);
    const mPartial = Math.round((partial/total)*100);
    const mRest    = 100 - mFull - mPartial;

    let html = `
      <div class="results-header">
        <h2>📊 Results</h2>
        <p style="color:var(--muted)">${_topicName}</p>
      </div>

      <div class="stat-grid">
        <div class="stat-cell"><div class="stat-icon">✏️</div>
          <div class="stat-val">${_results.length}</div>
          <div class="stat-label">Questions</div></div>
        <div class="stat-cell"><div class="stat-icon">🎯</div>
          <div class="stat-val">${_score}/${_total}</div>
          <div class="stat-label">Marks</div></div>
        <div class="stat-cell"><div class="stat-icon">📈</div>
          <div class="stat-val" style="color:${pctCol}">${pct}%</div>
          <div class="stat-label">${pct>=70?'Strong':pct>=50?'Getting there':'Keep working'}</div></div>
      </div>

      <!-- Mastery tracker -->
      <div class="mastery-bar-wrap">
        <div style="display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:0.4rem">
          <strong>Mastery</strong>
          <span style="color:var(--muted)">${full}/${total} fully mastered</span>
        </div>
        <div class="mastery-bar">
          <div class="m-green"  style="width:${mFull}%"></div>
          <div class="m-yellow" style="width:${mPartial}%"></div>
          <div class="m-red"    style="width:${mRest}%"></div>
        </div>
        <div class="mastery-legend" style="margin-top:0.5rem">
          <span><span class="dot" style="background:var(--green)"></span> Mastered (${full})</span>
          <span><span class="dot" style="background:var(--yellow)"></span> Partial (${partial})</span>
          <span><span class="dot" style="background:var(--red)"></span> Missed (${missed})</span>
          ${skipped > 0 ? `<span><span class="dot" style="background:var(--muted)"></span> Skipped (${skipped})</span>` : ''}
        </div>
        <p style="font-size:0.8rem;color:var(--muted);margin-top:0.55rem">
          ${pct >= 80 ? '🎉 Excellent mastery. Ready to move on.' :
            pct >= 50 ? '📚 Good progress. Review the errors below and have another go.' :
            '🔁 Needs more work. Use the error log to focus your revision.'}
        </p>
      </div>`;

    // Error log
    if (errors.length > 0) {
      html += `<div class="section-label" style="margin-top:1.25rem">Error log — questions to revisit</div>`;
      errors.forEach((r, i) => {
        html += `<div class="error-log-item ${r.mastery}">
          <div class="elog-meta">Q${_results.indexOf(r)+1} · ${r.earned}/${r.marks} marks · ${r.mastery === 'partial' ? '📋 Partial' : '❌ Missed'}</div>
          <div class="elog-q">${r.question}</div>
          <div class="elog-model"><strong>Model answer:</strong> ${r.modelAnswer}</div>
          ${r.examTip ? `<div class="elog-tip">💡 ${r.examTip}</div>` : ''}
        </div>`;
      });
      html += `<p class="write-note" style="margin:0.5rem 0 1rem">✍️ Write out the error log and model answers by hand — that's your revision list.</p>`;
    }

    if (pct === 100) {
      html += `<div class="joke-box">😸 Perfect score. Silver is grudgingly impressed. She's pretending to be asleep but she definitely heard that.</div>`;
    }

    // Action buttons
    html += `<div style="display:flex;gap:0.55rem;flex-wrap:wrap;margin-top:1rem">`;
    if (errors.length > 0) {
      html += `<button class="btn yel" onclick="Questions._retryErrors()">🔁 Retry missed questions</button>`;
    }
    html += `<button class="btn pri" onclick="Questions.close()">📖 Back to lesson</button>`;
    html += `<button class="btn" onclick="showHome()">🏠 Home</button>`;
    html += `</div>`;

    document.getElementById('qInner').innerHTML = html;
  }

  function _retryErrors() {
    const errors = _results.filter(r => r.mastery !== 'full' && r.mastery !== 'skipped');
    // Rebuild question list from errors
    _questions = errors.map(r => ({
      question: r.question,
      marks: r.marks,
      keywords: [],
      hint1: 'You\'ve seen the model answer — use the key words from it.',
      hint2: '',
      modelAnswer: r.modelAnswer,
      examTip: r.examTip || '',
    }));
    _idx     = 0;
    _results = [];
    _score   = 0;
    _total   = _questions.reduce((s, q) => s + q.marks, 0);
    App.setScoreChip(`0/${_total}`);
    _renderQuestion();
  }

  function close() {
    document.getElementById('qPanel').classList.remove('open');
    document.getElementById('hdrScore').style.display = 'none';
  }

  return { start, close, _load, _submit, _skip, _hint, _retry, _next, _showResults: _showResults, _retryErrors };
})();
