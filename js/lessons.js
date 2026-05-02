/* ============================================================
   LESSONS.JS — Lesson renderer, checkpoints, diagrams, feedback
   ============================================================ */

const Lessons = (() => {
  let _current = null;  // current lesson data
  let _cpScores = {};   // checkpoint scores { cpId: true/false }
  let _usedJokeIds = []; // track which jokes have been shown this lesson
  let _pendingProfileQ = null; // profile question waiting for answer

  // ── Open a lesson ─────────────────────────────────────────
  async function open(subtopicId, subtopicName, topicCode) {
    const panel = document.getElementById('lessonPanel');
    const inner = document.getElementById('lessonInner');

    // Show loading state
    inner.innerHTML = `
      <div style="text-align:center;padding:4rem 1rem">
        <div style="font-size:2.5rem;margin-bottom:1rem">📖</div>
        <p style="color:var(--muted)">Loading <strong style="color:var(--text)">${subtopicName}</strong>…</p>
      </div>`;
    panel.classList.add('open');

    // Save last position
    Store.setLastPosition({ subtopicId, subtopicName, topicCode });

    // Fetch lesson JSON
    let lessonData;
    try {
      const res = await fetch(`lessons/biology/${subtopicId}.json`);
      if (!res.ok) throw new Error(res.status);
      lessonData = await res.json();
    } catch(e) {
      inner.innerHTML = `
        <div style="text-align:center;padding:4rem 1rem">
          <p style="color:var(--muted)">This lesson is being prepared — check back soon.</p>
          <button class="btn" style="margin-top:1rem" onclick="Lessons.close()">← Back</button>
        </div>`;
      return;
    }

    _current   = lessonData;
    _cpScores  = {};
    _usedJokeIds = [];
    _pendingProfileQ = null;
    Personality.incrementLessonCount();
    _render(lessonData, subtopicName, topicCode);
    Store.markCovered(subtopicId);
  }

  function close() {
    document.getElementById('lessonPanel').classList.remove('open');
    _current = null;
  }

  // ── Render lesson ─────────────────────────────────────────
  function _render(data, subtopicName, topicCode) {
    const inner = document.getElementById('lessonInner');

    // Build HTML
    let html = `
      <!-- Top bar -->
      <div class="lesson-top-bar">
        <button class="back-btn" onclick="Lessons.close()">← Topics</button>
        <h1>${data.title || subtopicName}</h1>
        <span class="chip chip-blue">${topicCode}</span>
      </div>

      <!-- Exam tip banner -->
      ${data.examTip ? `<div class="tips-box" style="margin-bottom:1.25rem">
        <h4>🎯 Exam focus</h4>
        <p style="font-size:0.85rem;line-height:1.6">${data.examTip}</p>
      </div>` : ''}

      <!-- Intro -->
      <div class="lesson-intro">${data.intro}</div>`;

    // Key points — each as its own micro-section with optional diagram
    if (data.keyPoints?.length) {
      html += `<div class="section-divider"><span>Key concepts</span></div>`;
      data.keyPoints.forEach((kp, i) => {
        html += _renderKeyPoint(kp, i, data);

        // Checkpoint after every 2 key points
        if (data.checkpoints && data.checkpoints[i]) {
          html += _renderCheckpoint(data.checkpoints[i], `cp_${i}`);
        }

        // Silver or skating moment after key points 1 and 3
        if (i === 1) {
          const moment = Personality.renderMoment('silver', _usedJokeIds);
          _usedJokeIds.push(moment.id);
          html += moment.html;
          // Also inject a profile question if we have one
          const pq = Personality.renderQuestion(Personality.getLessonCount());
          if (pq) { html += pq.html; _pendingProfileQ = pq.id; }
        }
        if (i === 3) {
          const moment = Personality.renderMoment('skating', _usedJokeIds);
          _usedJokeIds.push(moment.id);
          html += moment.html;
        }
      });
    }

    // Tables
    if (data.tables?.length) {
      html += `<div class="section-divider"><span>Key tables</span></div>`;
      data.tables.forEach(t => { html += _renderTable(t); });
    }

    // Diagrams that aren't attached to key points
    if (data.diagrams?.length) {
      html += `<div class="section-divider"><span>Diagrams to know</span></div>`;
      data.diagrams.forEach(d => { html += _renderDiagramBlock(d, data); });
    }

    // Common mistakes
    if (data.commonMistakes?.length) {
      html += `<div class="section-divider"><span>Common mistakes</span></div>
        <div class="mistakes-box">
          <h4>⚠️ Students lose marks on these every year</h4>
          <ul>${data.commonMistakes.map(m => `<li>${m}</li>`).join('')}</ul>
        </div>`;
    }

    // Exam tips
    if (data.examTips?.length) {
      html += `<div class="section-divider"><span>Exam tips</span></div>
        <div class="tips-box">
          <h4>🎯 How to pick up marks</h4>
          <ul>${data.examTips.map(t => `<li>${t}</li>`).join('')}</ul>
        </div>`;
    }

    // Video links
    if (data.videoLinks?.length) {
      html += `<div class="section-divider"><span>Helpful videos</span></div>
        <div class="video-links">
          ${data.videoLinks.map(v => `<a class="video-link" href="${v.url}" target="_blank" rel="noopener">🎥 ${v.label}</a>`).join('')}
        </div>`;
    }

    // Revision cards section
    if (data.revisionCardBullets?.length) {
      html += `<div class="section-divider"><span>Revision cards</span></div>
        <div style="background:var(--s2);border:1px solid var(--border2);border-radius:14px;padding:1.1rem 1.2rem">
          <p style="font-size:0.85rem;margin-bottom:0.75rem">These are the key facts for this topic. Save them to your deck.</p>
          <div id="cardList"></div>
          <p class="write-note" style="margin-top:0.65rem">✍️ Write these out by hand too — the act of writing helps them stick.</p>
          <button class="btn grn full" style="margin-top:0.75rem" onclick="Lessons.saveAllCards()">💾 Save all cards to my deck</button>
        </div>`;
    }

    // Feedback bar
    html += `
      <div class="section-divider"><span>How was this lesson?</span></div>
      <div class="feedback-bar" id="feedbackBar">
        <span>Tell me how this worked for you:</span>
        <div id="fbBtns" style="display:flex;gap:0.4rem;flex-wrap:wrap"></div>
      </div>

      <!-- Spacer for footer -->
      <div style="height:80px"></div>`;

    inner.innerHTML = html;

    // Inject card list as DOM (not HTML string to avoid escaping issues)
    if (data.revisionCardBullets?.length) {
      _buildCardList(data.revisionCardBullets);
    }

    // Build label exercises
    if (data.labelExercises) {
      data.labelExercises.forEach(ex => LabelEx.build(ex));
    }

    // Build feedback buttons
    _buildFeedbackBtns(data.title || subtopicName, data);

    // Sticky footer
    _buildFooter(data, subtopicName);
  }

  function _renderKeyPoint(kp, i, data) {
    let html = `<div class="kp">
      <div class="kp-header">
        <h3>${kp.heading}</h3>
        ${kp.examFlag ? `<span class="flag flag-exam">🚨 Exam</span>` : ''}
        ${kp.cardFlag ? `<span class="flag flag-card">📋 Card</span>` : ''}
      </div>
      <p>${kp.content}</p>`;

    // Inline diagram if referenced
    if (kp.diagram) {
      html += _renderInlineDiagram(kp.diagram, data);
    }

    html += `</div>`;
    return html;
  }

  function _renderInlineDiagram(diagramId, data) {
    // Find diagram definition
    const diagDef = data.diagrams?.find(d => d.id === diagramId) ||
                    data.allDiagrams?.find(d => d.id === diagramId);
    const title   = diagDef?.title || diagramId;
    const isExam  = diagDef?.examFlag;

    return `<div class="diagram-wrap" id="diag_${diagramId}">
      <div class="diagram-title">📊 ${title}${isExam ? ' <span class="flag flag-exam" style="margin-left:auto">🚨 Exam diagram</span>' : ''}</div>
      <div id="diagContent_${diagramId}">
        <img src="diagrams/biology/${diagramId}.svg" alt="${title}"
          onerror="this.style.display='none';document.getElementById('diagFallback_${diagramId}').style.display='block'"
          style="width:100%;height:auto">
        <div id="diagFallback_${diagramId}" style="display:none;color:var(--muted);font-size:0.83rem;font-style:italic;padding:0.5rem">
          Diagram: ${title}
        </div>
      </div>
      ${isExam ? `<p class="write-note" style="margin-top:0.5rem">✍️ Sketch this diagram with labels — it's been tested on past papers.</p>` : ''}
    </div>`;
  }

  function _renderDiagramBlock(d, data) {
    return _renderInlineDiagram(d.id, data);
  }

  function _renderTable(t) {
    let html = `
      <div style="margin-bottom:1rem">
        ${t.examFlag ? `<span class="flag flag-exam" style="margin-bottom:0.5rem;display:inline-flex">🚨 Learn this table</span><br>` : ''}
        <p style="font-weight:600;font-size:0.88rem;margin-bottom:0.5rem">${t.title}</p>
        <div class="lesson-table-wrap">
          <table class="lesson-table">
            <thead><tr>${t.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
            <tbody>${t.rows.map(row =>
              `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
            ).join('')}</tbody>
          </table>
        </div>
        <p class="write-note">✍️ Copy this table onto a revision card.</p>
      </div>`;
    return html;
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

  // ── Checkpoint interaction ────────────────────────────────
  function checkpointClick(btn, cpId, isCorrect) {
    const cp = btn.closest('.checkpoint');
    cp.querySelectorAll('.cp-btn').forEach(b => {
      b.disabled = true;
      if (b.dataset.correct === 'true') b.classList.add('correct');
    });
    if (!isCorrect) btn.classList.add('wrong');

    const fb = document.getElementById(`${cpId}_fb`);
    const cpDef = _findCheckpoint(cpId);
    if (fb && cpDef) {
      fb.innerHTML = isCorrect
        ? `✅ ${cpDef.correctFeedback || 'Correct!'}`
        : `❌ ${cpDef.wrongFeedback || `The answer is: ${cpDef.options[cpDef.correct]}`}`;
      fb.className = `cp-feedback show ${isCorrect ? 'correct' : 'wrong'}`;
    }
    _cpScores[cpId] = isCorrect;
  }

  function _findCheckpoint(cpId) {
    if (!_current?.checkpoints) return null;
    return Object.values(_current.checkpoints).find(cp => cp && true);
  }

  // ── Card list (built as DOM, not HTML string) ─────────────
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

      row.appendChild(num);
      row.appendChild(text);
      row.appendChild(btn);
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
    btn.disabled = true;
    btn.style.opacity = '0.55';
    if (added) row.style.borderColor = 'rgba(107,203,119,0.3)';
    App.toast(added ? '1 card saved to deck' : 'Already in deck');
  }

  function saveAllCards() {
    if (!_current?.revisionCardBullets) return;
    const added = Cards.saveFromLesson(_current.revisionCardBullets, _current.title, _current.id);
    // Update all save buttons
    document.querySelectorAll('[id^="csave_"]').forEach((btn, i) => {
      btn.textContent = '✓ Saved'; btn.disabled = true; btn.style.opacity = '0.55';
    });
    App.toast(`${added} card${added!==1?'s':''} saved to deck`);
  }

  function _inferFront(back) {
    const clean = back.replace(/<[^>]+>/g, '').trim();
    if (clean.includes(' — ')) return clean.split(' — ')[0] + '?';
    if (clean.includes(': '))  return 'What is ' + clean.split(': ')[0] + '?';
    return 'What do you know about: ' + clean.split(' ').slice(0, 7).join(' ') + '…?';
  }

  // ── Feedback buttons ──────────────────────────────────────
  function _buildFeedbackBtns(subtopicName, lessonData) {
    const wrap = document.getElementById('fbBtns');
    if (!wrap) return;

    const opts = [
      { val: 'liked',        label: '👍 Worked well' },
      { val: 'more-examples',label: '🔁 More examples' },
      { val: 'simpler',      label: '✂️ Simpler' },
      { val: 'more-detail',  label: '🔍 More detail' },
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

    // Quick summary without API call
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

  // ── Sticky lesson footer ──────────────────────────────────
  function _buildFooter(data, subtopicName) {
    const footer = document.createElement('div');
    footer.className = 'lesson-footer';

    const qBtn = document.createElement('button');
    qBtn.className = 'btn pri';
    qBtn.innerHTML = '✏️ Practice questions';
    qBtn.onclick = () => Questions.start(data, subtopicName, data.id);

    const cardBtn = document.createElement('button');
    cardBtn.className = 'btn grn';
    cardBtn.innerHTML = '🃏 View card deck';
    cardBtn.onclick = () => showCardDeck();

    const closeBtn = document.createElement('button');
    closeBtn.className = 'btn';
    closeBtn.innerHTML = '← Topics';
    closeBtn.onclick = () => Lessons.close();

    footer.appendChild(closeBtn);
    footer.appendChild(qBtn);
    footer.appendChild(cardBtn);

    document.getElementById('lessonPanel').appendChild(footer);
  }

  return { open, close, checkpointClick, saveAllCards };
})();

/* ============================================================
   LABEL EXERCISE — interactive diagram labelling
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
        <div class="prog-bar" style="margin-top:0.75rem;height:6px">
          <div class="prog-fill" id="labelProg_${ex.id}" style="width:0%"></div>
        </div>
        <p style="font-size:0.75rem;color:var(--muted);margin-top:0.3rem" id="labelStatus_${ex.id}">0 / ${ex.labels.length} labelled</p>
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
