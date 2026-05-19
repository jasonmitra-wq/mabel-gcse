/* ============================================================
   QUESTIONS.JS — Question engine, grading, error log, mastery
   ============================================================ */

const Questions = (() => {
  // State
  let _questions           = [];
  let _idx                 = 0;
  let _results             = [];
  let _score               = 0;
  let _total               = 0;
  let _topicName           = '';
  let _topicId             = '';
  let _hintShown           = 0;
  let _sessionStart        = null;
  let _currentSampleAnswer = null; // used by _toggleSampleAnswer

  // ── Entry point ───────────────────────────────────────────
  async function start(lessonData, topicName, topicId) {
    _topicName = topicName;
    _topicId   = topicId;
    document.getElementById('qPanel').classList.add('open');
    _showCountPicker(lessonData, topicName, topicId);
  }

  function _showCountPicker(lessonData, topicName, topicId) {
    document.getElementById('qInner').innerHTML = `
      <div style="max-width:500px;margin:2rem auto;text-align:center">
        <div style="font-size:2rem;margin-bottom:0.75rem">✏️</div>
        <h2 style="font-family:'Playfair Display',serif;font-size:1.2rem;margin-bottom:0.4rem">Practice questions</h2>
        <p style="color:var(--muted);font-size:0.88rem;margin-bottom:1.5rem">${topicName}</p>
        <div style="display:flex;flex-direction:column;gap:0.55rem;max-width:280px;margin:0 auto">
          <button class="btn pri full" onclick="Questions._load(${JSON.stringify(lessonData).replace(/"/g,'&quot;')},'${topicName}','${topicId}',3)">3 questions — quick</button>
          <button class="btn pri full" onclick="Questions._load(${JSON.stringify(lessonData).replace(/"/g,'&quot;')},'${topicName}','${topicId}',5)">5 questions — standard</button>
          <button class="btn pri full" onclick="Questions._load(${JSON.stringify(lessonData).replace(/"/g,'&quot;')},'${topicName}','${topicId}',8)">8 questions — full practice</button>
        </div>
        <button class="btn full" style="max-width:280px;margin:0.5rem auto;display:block" onclick="Questions.close()">← Back to lesson</button>
      </div>`;
  }

  // ── Load — no API key required ────────────────────────────
  function _load(lessonData, topicName, topicId, count) {
    _topicName = topicName;
    _topicId   = topicId;

    _questions = _generateQuestionsFromLesson(lessonData, count);

    if (_questions.length === 0) {
      document.getElementById('qInner').innerHTML = `
        <div style="text-align:center;padding:3rem 1rem">
          <p style="color:var(--muted);margin-bottom:1rem">No questions available for this topic yet.</p>
          <button class="btn" onclick="Questions.close()">Back to lesson</button>
        </div>`;
      return;
    }

    _idx          = 0;
    _results      = [];
    _score        = 0;
    _sessionStart = new Date().toISOString();
    _total        = _questions.reduce((s, q) => s + (q.marks || 2), 0);
    App.setScoreChip(`0/${_total}`);
    document.getElementById('hdrScore').style.display = '';
    _renderQuestion();
  }

  // ── Local question generation ─────────────────────────────
  const _STOP = new Set([
    'the','and','for','are','its','has','can','but','not','that','with','this',
    'from','they','what','when','how','into','than','more','each','have','been',
    'also','very','only','used','does','make','both','such','then','some','over',
    'just','like','here','most','much','your','will','would','which','where',
    'their','there','these','those','other','after','about','unit','units',
    'means','using','gives','value','measured','called','known','often','always',
  ]);

  function _sigWords(text) {
    return text.replace(/<[^>]+>/g, '')
      .split(/\W+/)
      .filter(w => w.length > 3 && !_STOP.has(w.toLowerCase()) && isNaN(w))
      .map(w => w.toLowerCase());
  }

  function _defKeywords(text) {
    const seen = new Set();
    return _sigWords(text).filter(w => !seen.has(w) && seen.add(w)).slice(0, 6);
  }

  function _extractKeywords(bullets, terms) {
    const seen = new Set();
    const out  = [];
    // Term names first (highest signal)
    terms.forEach(t => {
      const name = t.term.replace(/\s*\(.*?\)/g, '').toLowerCase().trim();
      if (name.length > 2 && !seen.has(name)) { seen.add(name); out.push(name); }
    });
    // Significant words from bullets
    bullets.forEach(b => {
      _sigWords(b).forEach(w => {
        if (!seen.has(w)) { seen.add(w); out.push(w); }
      });
    });
    return out.slice(0, 8);
  }

  function _makeQuestion(kp) {
    const heading = kp.heading || '';
    const topic   = heading.split(/[—–\-]/)[0].trim();
    const bullets = kp.writeBullets || [];
    if (/equation|formula|calculat/i.test(heading)) {
      return `State the equation for ${topic.toLowerCase().replace(/\s*(equation|formula|calculation).*/i, '').trim()} and explain what each term represents.`;
    }
    const cmd = bullets.length >= 4 ? 'Explain' : 'Describe';
    const t   = topic.charAt(0).toLowerCase() + topic.slice(1);
    return `${cmd} ${t}.`;
  }

  function _sampleAnswer(bullets) {
    if (!bullets.length) return null;
    return {
      grade4: bullets[0],
      grade6: bullets.slice(0, Math.max(2, Math.ceil(bullets.length / 2))).join(' '),
      grade8: bullets.join(' '),
    };
  }

  function _generateQuestionsFromLesson(lessonData, count) {
    const pool          = [];
    const kps           = lessonData.keyPoints     || [];
    const examTips      = lessonData.examTips      || [];
    const commonMistakes = lessonData.commonMistakes || [];

    kps.forEach((kp, i) => {
      const bullets = kp.writeBullets || [];
      const terms   = kp.keyTerms    || [];
      const tip     = commonMistakes[i] || commonMistakes[0] || examTips[i] || examTips[0] || '';
      const sa      = _sampleAnswer(bullets);

      // ── Concept question from write bullets ───────────────
      if (bullets.length >= 2) {
        const marks = Math.min(Math.max(2, bullets.length), 6);
        const kws   = _extractKeywords(bullets, terms);
        pool.push({
          question:    _makeQuestion(kp),
          marks,
          hint1:       bullets[0],
          hint2:       terms.length
            ? `Key terms: ${terms.map(t => t.term.replace(/\s*\(.*?\)/g, '')).join(', ')}`
            : (bullets[1] || ''),
          keywords:    kws,
          modelAnswer: bullets.map((b, j) => `${b} [${j + 1}]`).join(' '),
          examTip:     tip,
          examinerTip: tip,
          sampleAnswer: sa,
          difficulty:  kp.examFlag ? 'higher' : 'foundation',
        });
      }

      // ── Definition question per key term (max 2 per kp) ──
      terms.slice(0, 2).forEach(kt => {
        const defKws  = _defKeywords(kt.def);
        const defTip  = tip || `Include what ${kt.term.replace(/\s*\(.*?\)/g, '').toLowerCase()} means and its units where relevant.`;
        const basic   = kt.def.split(/[.;]/)[0].trim() + '.';
        pool.push({
          question:    `Define the term <strong>${kt.term}</strong>.`,
          marks:       2,
          hint1:       `Start with what ${kt.term.replace(/\s*\(.*?\)/g, '').toLowerCase()} is.`,
          hint2:       defKws.length ? `Your answer should include: ${defKws.slice(0, 3).join(', ')}.` : '',
          keywords:    defKws,
          modelAnswer: `${kt.def} [1][2]`,
          examTip:     defTip,
          examinerTip: defTip,
          sampleAnswer: {
            grade4: basic,
            grade6: kt.def,
            grade8: kt.def + (bullets[0] ? ` Example: ${bullets[0]}` : ''),
          },
          difficulty: 'foundation',
        });
      });
    });

    // Shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, count);
  }

  // ── Render question ───────────────────────────────────────
  function _renderQuestion() {
    if (_idx >= _questions.length) { _showResults(); return; }

    const q   = _questions[_idx];
    _hintShown = 0;
    const pct = (_idx / _questions.length) * 100;

    document.getElementById('qInner').innerHTML = `
      <div class="q-card">
        <div class="q-meta">
          <span class="q-num">Question ${_idx + 1} of ${_questions.length}</span>
          <span class="q-marks">${q.marks} mark${q.marks > 1 ? 's' : ''}</span>
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
  }

  // ── Hint system ───────────────────────────────────────────
  function _hint() {
    const q   = _questions[_idx];
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

  // ── Submit / skip ─────────────────────────────────────────
  function _submit() {
    const ans = (document.getElementById('qAnswer')?.value || '').trim();
    if (!ans) { App.toast('Write something first!'); return; }
    _grade(ans);
  }

  function _skip() { _grade(null); }

  // ── Grade — fully local, no API key needed ────────────────
  function _grade(userAnswer) {
    const q = _questions[_idx];
    let marksEarned = 0;
    let mastery     = 'skipped';
    let gradeClass  = 'g-low';
    let gradeLabel  = '';

    if (userAnswer) {
      // Strip punctuation before matching
      const stripped = userAnswer.toLowerCase().replace(/[^\w\s]/g, ' ');
      const kws      = q.keywords || [];
      const hits     = kws.filter(kw =>
        stripped.includes(kw.toLowerCase().replace(/[^\w\s]/g, ' '))
      ).length;
      const ratio    = kws.length > 0 ? hits / kws.length : 0.5;

      if (ratio >= 0.65) {
        marksEarned = q.marks;
        mastery     = 'full';
        gradeClass  = 'g-high';
        gradeLabel  = `✅ Excellent — Grade 7–8 &nbsp;(${marksEarned}/${q.marks} marks)`;
      } else if (ratio >= 0.35) {
        marksEarned = Math.round(q.marks * 0.6);
        mastery     = 'partial';
        gradeClass  = 'g-mid';
        gradeLabel  = `📋 Good — Grade 5–6 &nbsp;(${marksEarned}/${q.marks} marks)`;
      } else {
        marksEarned = Math.max(0, Math.round(q.marks * 0.2));
        mastery     = 'missed';
        gradeClass  = 'g-low';
        gradeLabel  = `⚠️ Needs more — Grade 3–4 &nbsp;(${marksEarned}/${q.marks} marks)`;
      }
      _score += marksEarned;
    }

    _results.push({
      question:     q.question,
      marks:        q.marks,
      earned:       marksEarned,
      mastery,
      userAnswer,
      modelAnswer:  q.modelAnswer,
      examTip:      q.examTip,
      examinerTip:  q.examinerTip || q.examTip,
      keywords:     q.keywords    || [],   // preserved for retry grading
      sampleAnswer: q.sampleAnswer || null,
      hintsUsed:    _hintShown,
    });
    App.setScoreChip(`${_score}/${_total}`);

    if (mastery !== 'full') {
      Store.logError(`q_${_topicId}_${_idx}`, {
        type:        'question',
        subtopicId:  _topicId,
        topic:       _topicName,
        question:    q.question,
        mastery,
        modelAnswer: q.modelAnswer,
        hintsUsed:   _hintShown,
        date:        new Date().toISOString(),
      });
    }

    _currentSampleAnswer = q.sampleAnswer || null;

    const canRetry      = mastery === 'missed' || mastery === 'partial';
    const examinerNote  = q.examinerTip || q.examTip;

    // Mark-point breakdown
    let breakdownHtml = '';
    if (userAnswer) {
      const pts = q.modelAnswer.split(/\s*\[\d+\]\s*/).map(s => s.trim()).filter(Boolean);
      if (pts.length >= 2) {
        const uLow    = userAnswer.toLowerCase();
        const ptCheck = pts.map(pt => {
          const words = pt.toLowerCase().split(/\W+/).filter(w => w.length > 3);
          const got   = words.length > 0 &&
            words.filter(w => uLow.includes(w)).length / words.length >= 0.4;
          return { pt, got };
        });
        const allGot = ptCheck.every(r => r.got);
        breakdownHtml = `
          <div style="margin-top:0.6rem;border-top:1px solid var(--border);padding-top:0.55rem">
            <p style="font-size:0.78rem;font-weight:700;color:${allGot ? 'var(--green)' : 'var(--muted)'};margin-bottom:0.35rem">
              ${allGot ? 'You hit every point.' : 'Where you could pick up more marks:'}
            </p>
            ${ptCheck.map(r => `
              <div style="display:flex;gap:0.45rem;font-size:0.81rem;padding:0.2rem 0;line-height:1.5">
                <span style="flex-shrink:0">${r.got ? '✅' : '❌'}</span>
                <span style="color:${r.got ? 'var(--green)' : 'var(--text)'}">${r.pt}</span>
              </div>`).join('')}
          </div>`;
      }
    }

    // Sample answer toggle (only if question has one)
    const sampleHtml = q.sampleAnswer ? `
      <div style="margin-top:0.7rem">
        <button class="btn" style="font-size:0.8rem;padding:0.35rem 0.75rem"
          onclick="Questions._toggleSampleAnswer(this)">📚 See graded sample answers</button>
        <div id="sampleAnswerBox" style="display:none;margin-top:0.5rem;padding:0.75rem;
          background:var(--s2);border-radius:10px;border:1px solid var(--border2)"></div>
      </div>` : '';

    document.getElementById('qInner').innerHTML = `
      <div class="q-card">
        <div class="q-meta">
          <span class="q-num">Question ${_idx + 1} of ${_questions.length}</span>
          <span class="q-marks">${q.marks} mark${q.marks > 1 ? 's' : ''}</span>
        </div>
        <div class="q-text">${q.question}</div>

        ${userAnswer ? `
          <div style="background:var(--s2);border:1px solid var(--border2);border-radius:8px;
            padding:0.65rem 0.85rem;font-size:0.84rem;margin-top:0.75rem;color:var(--muted)">
            <strong style="color:var(--text);display:block;margin-bottom:0.25rem">Your answer:</strong>
            ${userAnswer}
          </div>
          <div class="grade-box ${gradeClass}" style="margin-top:0.75rem">
            <strong>${gradeLabel}</strong>
          </div>
        ` : `<p style="color:var(--muted);font-size:0.85rem;margin-top:0.75rem">
          Here's what a strong answer looks like:</p>`}

        ${examinerNote ? `
          <div style="margin-top:0.6rem;padding:0.5rem 0.75rem;border-left:3px solid var(--yellow);
            background:rgba(255,180,0,0.07);border-radius:0 8px 8px 0;font-size:0.82rem;line-height:1.55">
            <strong>Common mistake:</strong> ${examinerNote}
          </div>` : ''}

        <div style="margin-top:0.75rem">
          <p style="font-size:0.78rem;font-weight:700;color:var(--blue);margin-bottom:0.35rem">
            MODEL ANSWER (${q.marks} mark${q.marks > 1 ? 's' : ''}):</p>
          <div class="model-ans">${q.modelAnswer}</div>
          ${breakdownHtml}
          ${sampleHtml}
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

  // ── Sample answer toggle ──────────────────────────────────
  function _toggleSampleAnswer(btn) {
    const box = document.getElementById('sampleAnswerBox');
    if (!box) return;

    if (box.style.display === 'none') {
      box.style.display = '';
      if (btn) btn.textContent = '📚 Hide sample answers';

      const sa = _currentSampleAnswer;
      if (!sa) {
        box.innerHTML = '<p style="color:var(--muted);font-size:0.84rem">No sample answers available.</p>';
        return;
      }

      const badge = (label, bg) =>
        `<span style="display:inline-block;font-size:0.71rem;font-weight:700;padding:0.12rem 0.55rem;
          border-radius:12px;background:${bg};color:#fff;margin-bottom:0.3rem">${label}</span>`;

      box.innerHTML = `
        <p style="font-size:0.76rem;font-weight:700;color:var(--blue);margin:0 0 0.6rem">GRADED SAMPLE ANSWERS</p>
        ${sa.grade4 ? `<div style="margin-bottom:0.65rem">
          ${badge('A basic answer (Grade 4)', '#888')}
          <p style="font-size:0.83rem;margin:0;line-height:1.6;color:var(--text)">${sa.grade4}</p>
        </div>` : ''}
        ${sa.grade6 ? `<div style="margin-bottom:0.65rem">
          ${badge('A good answer (Grade 6)', '#3a8fc4')}
          <p style="font-size:0.83rem;margin:0;line-height:1.6;color:var(--text)">${sa.grade6}</p>
        </div>` : ''}
        ${sa.grade8 ? `<div>
          ${badge('An excellent answer (Grade 8)', '#2a7a52')}
          <p style="font-size:0.83rem;margin:0;line-height:1.6;color:var(--text)">${sa.grade8}</p>
        </div>` : ''}`;
    } else {
      box.style.display = 'none';
      if (btn) btn.textContent = '📚 See graded sample answers';
    }
  }

  // ── Retry ─────────────────────────────────────────────────
  function _retry() {
    const last = _results[_results.length - 1];
    if (last) { _score -= last.earned; _results.pop(); App.setScoreChip(`${_score}/${_total}`); }

    const q = _questions[_idx];
    document.getElementById('qInner').innerHTML = `
      <div class="q-card">
        <div class="q-meta">
          <span class="q-num">Question ${_idx + 1} — retry</span>
          <span class="q-marks">${q.marks} mark${q.marks > 1 ? 's' : ''}</span>
        </div>
        <div class="q-text">${q.question}</div>
        <div class="q-input-area">
          <textarea class="q-textarea" id="qAnswer"
            placeholder="Try again — you've seen the model answer, use it to guide you…"></textarea>
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

    Store.addScore(_topicName, _score, _total);
    Store.updateStreak();
    const noHintCorrect = _results.filter(r => r.mastery === 'full' && r.hintsUsed === 0).length;
    Store.saveSession({
      id:           _sessionStart || new Date().toISOString(),
      topic:        _topicName,
      subtopicId:   _topicId,
      startedAt:    _sessionStart,
      finishedAt:   new Date().toISOString(),
      attempted:    total,
      noHintCorrect,
      hintsUsed:    _results.filter(r => r.hintsUsed > 0).length,
      skipped,
      score:        total > 0 ? Math.round((noHintCorrect / total) * 100) : 0,
      marksPct:     pct,
    });

    const mFull    = Math.round((full / total) * 100);
    const mPartial = Math.round((partial / total) * 100);
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
          <div class="stat-label">${pct >= 70 ? 'Strong' : pct >= 50 ? 'Getting there' : 'Keep working'}</div></div>
      </div>
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

    if (errors.length > 0) {
      html += `<div class="section-label" style="margin-top:1.25rem">Error log — questions to revisit</div>`;
      errors.forEach(r => {
        const tip = r.examinerTip || r.examTip;
        html += `<div class="error-log-item ${r.mastery}">
          <div class="elog-meta">Q${_results.indexOf(r) + 1} · ${r.earned}/${r.marks} marks · ${r.mastery === 'partial' ? '📋 Partial' : '❌ Missed'}</div>
          <div class="elog-q">${r.question}</div>
          <div class="elog-model"><strong>Model answer:</strong> ${r.modelAnswer}</div>
          ${tip ? `<div class="elog-tip">⚠️ <strong>Common mistake:</strong> ${tip}</div>` : ''}
        </div>`;
      });
      html += `<p class="write-note" style="margin:0.5rem 0 1rem">✍️ Write out the error log and model answers by hand — that's your revision list.</p>`;
    }

    if (pct === 100) {
      html += `<div class="joke-box">😸 Perfect score. Silver is grudgingly impressed. She's pretending to be asleep but she definitely heard that.</div>`;
    }

    html += `<div style="display:flex;gap:0.55rem;flex-wrap:wrap;margin-top:1rem">`;
    if (errors.length > 0) {
      html += `<button class="btn yel" onclick="Questions._retryErrors()">🔁 Retry missed questions</button>`;
    }
    html += `<button class="btn pri" onclick="Questions.close()">📖 Back to lesson</button>`;
    html += `<button class="btn" onclick="showHome()">🏠 Home</button>`;
    html += `<button class="btn" id="emailReportBtn" onclick="Questions._sendSessionReport()">📧 Email this report</button>`;
    html += `</div>`;

    document.getElementById('qInner').innerHTML = html;
  }

  // ── Retry errors — keywords preserved (fixes NaN grading) ─
  function _retryErrors() {
    const errors = _results.filter(r => r.mastery !== 'full' && r.mastery !== 'skipped');
    _questions = errors.map(r => ({
      question:    r.question,
      marks:       r.marks,
      keywords:    r.keywords || [],       // was [] — caused NaN ratio
      hint1:       'You\'ve seen the model answer — use the key words from it.',
      hint2:       '',
      modelAnswer: r.modelAnswer,
      examTip:     r.examTip      || '',
      examinerTip: r.examinerTip  || r.examTip || '',
      sampleAnswer: r.sampleAnswer || null,
    }));
    _idx     = 0;
    _results = [];
    _score   = 0;
    _total   = _questions.reduce((s, q) => s + q.marks, 0);
    App.setScoreChip(`0/${_total}`);
    _renderQuestion();
  }

  // ── Key setup — Settings / Ask Me only, never during a session ──
  function _showKeySetup(isBadKey) {
    document.getElementById('qInner').innerHTML = `
      <div style="max-width:480px;margin:2.5rem auto;padding:0 1.25rem">
        <div style="font-size:2rem;margin-bottom:0.75rem">🔑</div>
        <h2 style="font-family:'Playfair Display',serif;font-size:1.3rem;font-weight:800;margin-bottom:0.5rem">
          ${isBadKey ? 'API key rejected — try again' : 'API key setup'}
        </h2>
        <p style="color:var(--muted);font-size:0.9rem;line-height:1.6;margin-bottom:0.5rem">
          ${isBadKey
            ? 'The saved key was rejected. Enter a valid Anthropic API key below.'
            : 'The Ask Me feature uses Claude AI. Enter your Anthropic API key — saved in your browser only, never sent elsewhere.'}
        </p>
        <p style="font-size:0.82rem;color:var(--muted);margin-bottom:1rem">
          Get a free key at <strong style="color:var(--text)">console.anthropic.com</strong> → API Keys
        </p>
        <input type="password" id="apiKeyInput" placeholder="sk-ant-api03-…"
          style="width:100%;padding:0.7rem 0.9rem;background:var(--s2);border:1.5px solid var(--border2);
            border-radius:10px;color:var(--text);font-family:'Inter',sans-serif;font-size:0.9rem;
            margin-bottom:0.75rem;outline:none"
          onkeydown="if(event.key==='Enter')Questions._confirmKey()">
        <button class="btn pri full" onclick="Questions._confirmKey()">Save key</button>
        <button class="btn full" style="margin-top:0.4rem" onclick="Questions.close()">Cancel</button>
      </div>`;
    setTimeout(() => document.getElementById('apiKeyInput')?.focus(), 50);
  }

  function _confirmKey() {
    const key = (document.getElementById('apiKeyInput')?.value || '').trim();
    if (!key.startsWith('sk-')) {
      App.toast('Enter a valid Anthropic key — it starts with sk-');
      return;
    }
    AI.saveKey(key);
    App.toast('API key saved ✓');
    close();
  }

  function setupKey() {
    document.getElementById('qPanel').classList.add('open');
    _showKeySetup(false);
  }

  function close() {
    document.getElementById('qPanel').classList.remove('open');
    document.getElementById('hdrScore').style.display = 'none';
  }

  // ── Session report email ──────────────────────────────────
  async function _sendSessionReport() {
    const EMAILJS_PUBLIC_KEY  = '3UxpA4dBrUbXlNHs3';
    const EMAILJS_SERVICE_ID  = 'service_mabel';
    const EMAILJS_TEMPLATE_ID = 'template_session';

    const btn = document.getElementById('emailReportBtn');
    if (btn) { btn.disabled = true; btn.textContent = '⏳ Sending…'; }

    const full    = _results.filter(r => r.mastery === 'full').length;
    const partial = _results.filter(r => r.mastery === 'partial').length;
    const missed  = _results.filter(r => r.mastery === 'missed').length;
    const pct     = _total > 0 ? Math.round((_score / _total) * 100) : 0;
    const errors  = _results.filter(r => r.mastery !== 'full' && r.mastery !== 'skipped');

    const errorLog = errors.length
      ? errors.map(r => `Q: ${r.question}\nYour answer: ${r.userAnswer || '(skipped)'}\nModel answer: ${r.modelAnswer}`).join('\n\n---\n\n')
      : 'No errors — all questions answered correctly.';

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          student:  Store.getChildName(),
          date:     new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' }),
          topic:    _topicName,
          score:    _score,
          total:    _total,
          pct:      pct + '%',
          mastery:  `Mastered: ${full} · Partial: ${partial} · Missed: ${missed}`,
          errorLog,
        },
        EMAILJS_PUBLIC_KEY
      );
      App.toast('📧 Report sent!', 3000);
      if (btn) { btn.textContent = '✅ Sent'; }
    } catch {
      App.toast('Couldn\'t send — check EmailJS setup in questions.js');
      if (btn) { btn.disabled = false; btn.textContent = '📧 Try again'; }
    }
  }

  return {
    start, close, setupKey,
    _load, _submit, _skip, _hint, _retry, _next,
    _showResults, _retryErrors, _toggleSampleAnswer,
    _sendSessionReport, _confirmKey, _showKeySetup,
  };
})();
