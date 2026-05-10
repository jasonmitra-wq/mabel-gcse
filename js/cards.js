/* ============================================================
   CARDS.JS — Card deck, drill mode, spaced repetition
   ============================================================ */

const Cards = (() => {
  let _deck = [];
  let _drillQueue = [];
  let _drillIdx = 0;
  let _flipped = false;
  let _onComplete = null;
  let _againQueue = [];
  let _againPass = 0;
  let _sessionStats = {};

  // Matching game state
  let _matchSets = [];
  let _matchSetIdx = 0;
  let _matchBacks = [];
  let _matchMatched = new Set();
  let _matchSelectedFront = null;

  // ── Show card deck overview ───────────────────────────────
  function showDeck() {
    _deck = Store.getDeck();
    const el = document.getElementById('main');
    el.innerHTML = '';

    const known    = _deck.filter(c => c.status === 'known').length;
    const learning = _deck.filter(c => c.status === 'learning').length;
    const unseen   = _deck.filter(c => c.status === 'unseen' || !c.status).length;

    // Due for review today (spaced repetition)
    const today = new Date().toISOString();
    const due   = _deck.filter(c => !c.nextReview || c.nextReview <= today).length;

    el.innerHTML = `
      <div class="card-deck">
        <div class="topic-header">
          <button class="back-btn" onclick="showHome()">← Home</button>
          <h2>🃏 My Card Deck</h2>
        </div>

        ${_deck.length === 0 ? `
          <div class="empty-state">
            <div class="es-icon">🃏</div>
            <h3>Your deck is empty</h3>
            <p>Save cards from any lesson and they'll appear here for drilling.</p>
          </div>
        ` : `
          <div class="deck-stats">
            ${statCell('👀', unseen,   'To learn')}
            ${statCell('🔁', learning, 'In progress')}
            ${statCell('✅', known,    'Known')}
          </div>

          ${due > 0 ? `<div style="background:rgba(232,160,64,0.08);border:1px solid rgba(232,160,64,0.25);border-radius:12px;padding:0.7rem 1rem;margin:0.5rem 0;font-size:0.85rem">
            ⏰ <strong style="color:var(--amber)">${due} card${due!==1?'s':''} due for review today</strong>
          </div>` : ''}

          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin:0.85rem 0" id="drillBtns"></div>

          <div class="section-label" style="margin-top:1.25rem">By topic</div>
          <div id="deckByTopic"></div>
        `}
      </div>`;

    if (_deck.length > 0) {
      _buildDrillButtons(known, learning, unseen, due);
      _buildByTopic();
    }
  }

  function statCell(icon, val, label) {
    return `<div class="stat-cell"><div class="stat-icon">${icon}</div>
      <div class="stat-val">${val}</div>
      <div class="stat-label">${label}</div></div>`;
  }

  function _buildDrillButtons(known, learning, unseen, due) {
    const wrap = document.getElementById('drillBtns');
    const btns = [
      { label: `🔀 Drill all (${_deck.length})`,  filter: 'all',      cls: 'btn pri' },
      { label: `👀 New only (${unseen})`,           filter: 'unseen',   cls: 'btn' },
      { label: `🔁 In progress (${learning})`,      filter: 'learning', cls: 'btn' },
    ];
    if (due > 0) btns.unshift({ label: `⏰ Due today (${due})`, filter: 'due', cls: 'btn yel' });

    btns.forEach(b => {
      const btn = document.createElement('button');
      btn.className = b.cls;
      btn.textContent = b.label;
      btn.onclick = () => startDrill(b.filter);
      wrap.appendChild(btn);
    });

    if (_deck.length >= 4) {
      const matchBtn = document.createElement('button');
      matchBtn.className = 'btn';
      matchBtn.textContent = '🎯 Matching game';
      matchBtn.onclick = () => startMatchingGame();
      wrap.appendChild(matchBtn);
    }
  }

  function _buildByTopic() {
    const wrap = document.getElementById('deckByTopic');
    const byTopic = {};
    _deck.forEach(c => {
      const k = c.topic || 'General';
      if (!byTopic[k]) byTopic[k] = [];
      byTopic[k].push(c);
    });
    const now = new Date().toISOString();
    Object.entries(byTopic).forEach(([topic, cards]) => {
      const kn  = cards.filter(c => c.status === 'known').length;
      const due = cards.filter(c => !c.nextReview || c.nextReview <= now).length;
      const pct    = Math.round((kn / cards.length) * 100);
      const barCol = pct >= 80 ? '#52C97A' : pct >= 71 ? '#6BBDE3' : pct >= 41 ? '#E8A838' : '#E05252';
      const dueBadge = due > 0
        ? `<span style="font-size:0.72rem;color:var(--amber);margin-left:0.3rem">⏰ ${due} due</span>`
        : '';
      wrap.insertAdjacentHTML('beforeend', `
        <div style="background:var(--s1);border:1px solid var(--border2);border-radius:12px;
          padding:0.65rem 0.9rem;margin-bottom:0.4rem;display:flex;align-items:center;gap:0.6rem">
          <div style="flex:1;font-size:0.85rem;font-weight:500">${topic}${dueBadge}</div>
          <div style="font-size:0.75rem;color:var(--muted)">${cards.length} cards</div>
          <div style="width:64px;height:8px;background:rgba(255,255,255,0.10);border-radius:4px;overflow:hidden;flex-shrink:0">
            ${pct > 0 ? `<div style="height:100%;width:${pct}%;background:${barCol};border-radius:4px;transition:width 0.5s ease"></div>` : ''}
          </div>
          <div style="font-size:0.72rem;color:${pct===100?'var(--green)':'var(--muted)'};min-width:28px">${pct}%</div>
        </div>`);
    });
    wrap.insertAdjacentHTML('beforeend', `
      <div id="clearDeckWrap" style="text-align:center;margin-top:1.5rem">
        <button onclick="Cards.showClearDeckConfirm()" style="background:none;border:none;color:rgba(224,82,82,0.70);font-size:13px;cursor:pointer;padding:0.25rem 0.5rem;font-family:inherit">🗑️ Clear entire deck</button>
      </div>`);
  }

  // ── Start drill session ───────────────────────────────────
  function startDrill(filter) {
    _deck = Store.getDeck();
    const today = new Date().toISOString();

    if (filter === 'unseen')
      _drillQueue = _deck.filter(c => !c.difficulty && (!c.status || c.status === 'unseen'));
    else if (filter === 'learning')
      _drillQueue = _deck.filter(c => c.difficulty === 'hard' || c.difficulty === 'good' || (!c.difficulty && c.status === 'learning'));
    else if (filter === 'due')
      _drillQueue = _deck.filter(c => !c.nextReview || c.nextReview <= today);
    else
      _drillQueue = [..._deck];

    // Overdue cards first (sorted by nextReview ascending), then unseen at end
    _drillQueue.sort((a, b) => {
      const aOver = !a.nextReview || a.nextReview <= today;
      const bOver = !b.nextReview || b.nextReview <= today;
      if (aOver && !bOver) return -1;
      if (!aOver && bOver) return  1;
      return (a.nextReview || '') < (b.nextReview || '') ? -1 : 1;
    });

    _drillIdx = 0;
    _flipped = false;
    _againQueue = [];
    _againPass = 0;
    _sessionStats = {};

    if (!_drillQueue.length) {
      App.toast('No cards in that category');
      return;
    }
    _showCard();
  }

  function _showCard() {
    if (_drillIdx >= _drillQueue.length) {
      if (_againQueue.length > 0 && _againPass === 0) { _showAgainInterstitial(); return; }
      _finishDrill();
      return;
    }
    const card = _drillQueue[_drillIdx];
    _flipped = false;

    const el = document.getElementById('main');
    const pNum   = _drillIdx + 1;
    const pTotal = _drillQueue.length;
    const _drillPct    = Math.round(((pNum - 1) / pTotal) * 100);
    const _drillBarCol = _drillPct >= 80 ? '#52C97A' : _drillPct >= 71 ? '#6BBDE3' : _drillPct >= 41 ? '#E8A838' : '#E05252';

    const diff = card.difficulty;
    const statusLabel = diff === 'easy'  ? '✅ Mastered'
                      : diff === 'good'  ? '👍 Good'
                      : diff === 'hard'  ? '😬 Hard'
                      : diff === 'again' ? '❌ Again'
                      : card.status === 'known'    ? '✅ Known'
                      : card.status === 'learning' ? '🔁 Learning'
                      : '👀 New';
    const statusColor = (diff === 'easy' || card.status === 'known')    ? 'var(--green)'
                      : (diff === 'good' || diff === 'hard' || card.status === 'learning') ? 'var(--amber)'
                      : diff === 'again' ? '#ff6b6b'
                      : 'var(--muted)';

    el.innerHTML = `
      <div class="card-deck">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
          <button class="back-btn" onclick="Cards.showDeck()">← Back to deck</button>
          <span style="font-size:0.78rem;color:var(--muted)">${pNum} / ${pTotal}</span>
        </div>
        <div class="q-progress-track" style="margin-bottom:1rem">
          <div class="q-progress-fill" style="width:${_drillPct}%;background:${_drillBarCol}"></div>
        </div>

        <div class="flashcard" id="flashcard" onclick="Cards.flip()">
          <div class="fc-side">QUESTION — tap to flip</div>
          <div class="fc-text">${card.front}</div>
          <div class="fc-sub" style="color:${statusColor}">${statusLabel}</div>
        </div>

        <div id="cardBack" style="display:none">
          <div class="flashcard answer">
            <div class="fc-side">ANSWER</div>
            <div class="fc-text">${card.back}</div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.4rem;margin-top:0.75rem">
            <button class="btn red"  onclick="Cards.rate('again')" style="line-height:1.3">❌ Again<br><small style="opacity:0.7;font-size:0.72rem">show again now</small></button>
            <button class="btn yel"  onclick="Cards.rate('hard')"  style="line-height:1.3">😬 Hard<br><small style="opacity:0.7;font-size:0.72rem">1 day</small></button>
            <button class="btn grn"  onclick="Cards.rate('good')"  style="line-height:1.3">👍 Good<br><small style="opacity:0.7;font-size:0.72rem">3 days</small></button>
            <button class="btn"      onclick="Cards.rate('easy')"  style="line-height:1.3;background:var(--green,#3dba7a);color:#fff">⭐ Easy<br><small style="opacity:0.7;font-size:0.72rem">7 days</small></button>
          </div>
        </div>

        <button class="btn full" style="margin-top:0.6rem" onclick="Cards.skip()">⏭ Skip</button>
      </div>`;
  }

  function _showAgainInterstitial() {
    const n = _againQueue.length;
    document.getElementById('main').innerHTML = `
      <div class="card-deck">
        <div class="results-header">
          <h2>🔄 ${n} card${n !== 1 ? 's' : ''} to go over again</h2>
          <p>These didn't stick yet — one more pass.</p>
        </div>
        <div style="display:flex;gap:0.55rem;flex-wrap:wrap">
          <button class="btn pri" onclick="Cards.startAgainPass()">▶ Go again</button>
          <button class="btn"     onclick="Cards.finishDrill()">✓ Finish drill</button>
        </div>
      </div>`;
  }

  function startAgainPass() {
    _drillQueue = [..._againQueue];
    _againQueue = [];
    _againPass  = 1;
    _drillIdx   = 0;
    _showCard();
  }

  function flip() {
    if (_flipped) return;
    _flipped = true;
    const fc = document.getElementById('flashcard');
    const cb = document.getElementById('cardBack');
    if (fc) { fc.querySelector('.fc-side').textContent = 'QUESTION'; fc.style.opacity = '0.6'; }
    if (cb) cb.style.display = 'block';
  }

  function rate(difficulty) {
    const card = _drillQueue[_drillIdx];
    Store.updateCardStatus(card.id, difficulty);
    _drillQueue[_drillIdx].difficulty = difficulty;
    _sessionStats[difficulty] = (_sessionStats[difficulty] || 0) + 1;

    if (difficulty === 'again' && _againPass === 0) {
      _againQueue.push({ ...card, difficulty: 'again' });
    }

    // Milestone check — fires once when a subtopic first crosses 80% mastery
    if (difficulty === 'good' || difficulty === 'easy') {
      const match = card.id.match(/^card_([a-z0-9-]+)_\d+/);
      const subtopicId = match?.[1];
      if (subtopicId && !Store.hasMilestone(subtopicId)) {
        const mastery = Store.getSubtopicMastery(subtopicId);
        if (mastery !== null && mastery >= 80) {
          Store.markMilestone(subtopicId);
          Personality.showMilestone(card.topic || subtopicId);
        }
      }
    }

    _drillIdx++;
    _showCard();
  }

  function skip() {
    _drillIdx++;
    _showCard();
  }

  function _finishDrill() {
    const nEasy  = _sessionStats.easy  || 0;
    const nGood  = _sessionStats.good  || 0;
    const nHard  = _sessionStats.hard  || 0;
    const nAgain = _sessionStats.again || 0;
    const total  = nEasy + nGood + nHard + nAgain;

    const remembered = nEasy + nGood;
    const isClean    = nAgain === 0;
    const summary    = isClean && nHard === 0
      ? 'Perfect run — every card nailed.'
      : isClean
        ? `${nHard} tricky one${nHard !== 1 ? 's' : ''} — you know your stuff.`
        : `${nAgain} card${nAgain !== 1 ? 's' : ''} still need work — they\'re due again today.`;

    document.getElementById('main').innerHTML = `
      <div class="card-deck">
        <div class="results-header">
          <h2>🃏 Drill complete!</h2>
          <p>${summary}</p>
        </div>
        <div class="stat-grid" style="margin-bottom:1rem">
          ${statCell('✅', remembered, 'Remembered')}
          ${statCell('😬', nHard,      'Hard')}
          ${statCell('❌', nAgain,     'Again')}
        </div>
        <div style="display:flex;gap:0.55rem;flex-wrap:wrap">
          <button class="btn pri" onclick="Cards.startDrill('all')">🔁 Drill again</button>
          ${nAgain > 0 ? `<button class="btn yel" onclick="Cards.startDrill('due')">📋 Drill missed only</button>` : ''}
          <button class="btn" onclick="Cards.showDeck()">🃏 Back to deck</button>
          <button class="btn" onclick="showHome()">🏠 Home</button>
        </div>
      </div>`;
  }

  // ── Matching game ─────────────────────────────────────────
  function startMatchingGame() {
    _deck = Store.getDeck();
    if (_deck.length < 4) { App.toast('Need at least 4 cards to play'); return; }
    const shuffled = [..._deck].sort(() => Math.random() - 0.5);
    _matchSets = [];
    for (let i = 0; i < shuffled.length; i += 4) {
      _matchSets.push(shuffled.slice(i, i + 4));
    }
    _matchSetIdx = 0;
    _renderMatchSet();
  }

  function _renderMatchSet() {
    if (_matchSetIdx >= _matchSets.length) { _finishMatch(); return; }
    const set = _matchSets[_matchSetIdx];
    _matchBacks = [...set].sort(() => Math.random() - 0.5);
    _matchMatched = new Set();
    _matchSelectedFront = null;

    let html = `
      <div class="card-deck">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
          <button class="back-btn" onclick="Cards.showDeck()">← Deck</button>
          <span style="font-size:0.78rem;color:var(--muted)">Set ${_matchSetIdx + 1} of ${_matchSets.length}</span>
        </div>
        <p style="font-size:0.82rem;color:var(--muted);margin-bottom:0.75rem">Tap a question, then tap its answer.</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem" id="matchGrid">`;

    set.forEach((card, i) => {
      html += `<div class="match-card" id="mf_${i}" onclick="Cards._matchFront(${i})">${card.front}</div>`;
    });
    _matchBacks.forEach((card, i) => {
      html += `<div class="match-card back" id="mb_${i}" onclick="Cards._matchBack(${i})">${card.back}</div>`;
    });

    html += `</div></div>`;
    document.getElementById('main').innerHTML = html;
  }

  function _matchFront(i) {
    if (_matchMatched.has('f' + i)) return;
    document.querySelectorAll('.match-card').forEach(c => c.classList.remove('sel'));
    _matchSelectedFront = i;
    document.getElementById(`mf_${i}`)?.classList.add('sel');
  }

  function _matchBack(backIdx) {
    if (_matchSelectedFront === null) { App.toast('Tap a question first'); return; }
    if (_matchMatched.has('b' + backIdx)) return;

    const set = _matchSets[_matchSetIdx];
    const frontCard = set[_matchSelectedFront];
    const backCard  = _matchBacks[backIdx];

    if (frontCard.id === backCard.id) {
      _matchMatched.add('f' + _matchSelectedFront);
      _matchMatched.add('b' + backIdx);
      const fEl = document.getElementById(`mf_${_matchSelectedFront}`);
      const bEl = document.getElementById(`mb_${backIdx}`);
      if (fEl) { fEl.classList.remove('sel'); fEl.classList.add('matched'); fEl.onclick = null; }
      if (bEl) { bEl.classList.add('matched'); bEl.onclick = null; }
      _matchSelectedFront = null;
      if (_matchMatched.size === set.length * 2) {
        setTimeout(() => { _matchSetIdx++; _renderMatchSet(); }, 700);
      }
    } else {
      const fEl = document.getElementById(`mf_${_matchSelectedFront}`);
      const bEl = document.getElementById(`mb_${backIdx}`);
      if (bEl) { bEl.classList.add('shake'); setTimeout(() => bEl.classList.remove('shake'), 450); }
      if (fEl) { fEl.classList.add('shake'); setTimeout(() => { fEl.classList.remove('shake', 'sel'); _matchSelectedFront = null; }, 450); }
    }
  }

  function _finishMatch() {
    document.getElementById('main').innerHTML = `
      <div class="card-deck">
        <div class="results-header">
          <h2>🎯 Well done!</h2>
          <p>You matched all the cards.</p>
        </div>
        <div style="display:flex;gap:0.55rem;flex-wrap:wrap;margin-top:1rem">
          <button class="btn pri" onclick="Cards.startMatchingGame()">🔁 Play again</button>
          <button class="btn" onclick="Cards.showDeck()">🃏 Back to deck</button>
        </div>
      </div>`;
  }

  function showClearDeckConfirm() {
    const wrap = document.getElementById('clearDeckWrap');
    if (!wrap) return;
    wrap.innerHTML = `
      <span style="font-size:13px;color:var(--muted)">Are you sure? This can't be undone.</span>
      <span style="display:inline-flex;gap:0.5rem;align-items:center;margin-left:0.6rem">
        <button onclick="Cards.cancelClearDeck()" style="background:none;border:none;color:var(--muted);font-size:13px;cursor:pointer;padding:0.2rem 0.4rem;font-family:inherit">Cancel</button>
        <button onclick="Cards.confirmClearDeck()" style="background:#E05252;border:none;color:#fff;font-size:13px;font-weight:600;border-radius:6px;padding:0.25rem 0.7rem;cursor:pointer;font-family:inherit">Yes, clear</button>
      </span>`;
  }

  function cancelClearDeck() {
    const wrap = document.getElementById('clearDeckWrap');
    if (!wrap) return;
    wrap.innerHTML = `<button onclick="Cards.showClearDeckConfirm()" style="background:none;border:none;color:rgba(224,82,82,0.70);font-size:13px;cursor:pointer;padding:0.25rem 0.5rem;font-family:inherit">🗑️ Clear entire deck</button>`;
  }

  function confirmClearDeck() {
    const wrap = document.getElementById('clearDeckWrap');
    if (wrap) wrap.innerHTML = `<span style="font-size:13px;color:var(--muted)">Done — deck cleared</span>`;
    Store.clearDeck();
    setTimeout(() => showDeck(), 1100);
  }

  function clearDeck() {
    // kept for internal/legacy use — UI now routes through showClearDeckConfirm
    Store.clearDeck();
    showDeck();
  }

  // ── Save cards from lesson ────────────────────────────────
  function saveFromLesson(bullets, topicTitle, topicId) {
    const cards = bullets.map((b, i) => ({
      id: `card_${topicId}_${i}_${Date.now()}`,
      front: _inferFront(b),
      back: b,
      topic: topicTitle,
      status: 'unseen',
      addedDate: new Date().toISOString(),
      nextReview: new Date().toISOString(), // due immediately
    }));
    const added = Store.addCards(cards);
    return added;
  }

  function _inferFront(back) {
    const clean = back.replace(/<[^>]+>/g, '').trim();
    if (clean.includes(' — ')) return clean.split(' — ')[0] + '?';
    if (clean.includes(': '))  return 'What is ' + clean.split(': ')[0] + '?';
    const words = clean.split(' ').slice(0, 7).join(' ');
    return 'What do you know about: ' + words + '…?';
  }

  return { showDeck, startDrill, flip, rate, skip, clearDeck, showClearDeckConfirm, cancelClearDeck, confirmClearDeck, saveFromLesson, startMatchingGame, _matchFront, _matchBack, startAgainPass, finishDrill: _finishDrill };
})();
