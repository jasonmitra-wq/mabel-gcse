/* ============================================================
   CARDS.JS — Card deck, drill mode, spaced repetition
   ============================================================ */

const Cards = (() => {
  let _deck = [];
  let _drillQueue = [];
  let _drillIdx = 0;
  let _flipped = false;
  let _onComplete = null;

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

          ${due > 0 ? `<div style="background:rgba(255,217,61,0.08);border:1px solid rgba(255,217,61,0.25);border-radius:12px;padding:0.7rem 1rem;margin:0.5rem 0;font-size:0.85rem">
            ⏰ <strong style="color:var(--yellow)">${due} card${due!==1?'s':''} due for review today</strong>
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
  }

  function _buildByTopic() {
    const wrap = document.getElementById('deckByTopic');
    const byTopic = {};
    _deck.forEach(c => {
      const k = c.topic || 'General';
      if (!byTopic[k]) byTopic[k] = [];
      byTopic[k].push(c);
    });
    Object.entries(byTopic).forEach(([topic, cards]) => {
      const kn = cards.filter(c => c.status === 'known').length;
      const pct = Math.round((kn / cards.length) * 100);
      wrap.insertAdjacentHTML('beforeend', `
        <div style="background:var(--s1);border:1px solid var(--border2);border-radius:12px;
          padding:0.65rem 0.9rem;margin-bottom:0.4rem;display:flex;align-items:center;gap:0.6rem">
          <div style="flex:1;font-size:0.85rem;font-weight:500">${topic}</div>
          <div style="font-size:0.75rem;color:var(--muted)">${cards.length} cards</div>
          <div style="width:60px">
            <div class="prog-bar"><div class="prog-fill" style="width:${pct}%"></div></div>
          </div>
          <div style="font-size:0.72rem;color:${pct===100?'var(--green)':'var(--muted)'};min-width:28px">${pct}%</div>
        </div>`);
    });
    wrap.insertAdjacentHTML('beforeend', `
      <button class="btn red full" style="margin-top:1rem" onclick="Cards.clearDeck()">🗑 Clear entire deck</button>`);
  }

  // ── Start drill session ───────────────────────────────────
  function startDrill(filter) {
    _deck = Store.getDeck();
    const today = new Date().toISOString();

    if (filter === 'unseen')   _drillQueue = _deck.filter(c => c.status === 'unseen' || !c.status);
    else if (filter === 'learning') _drillQueue = _deck.filter(c => c.status === 'learning');
    else if (filter === 'due') _drillQueue = _deck.filter(c => !c.nextReview || c.nextReview <= today);
    else _drillQueue = [..._deck];

    // Shuffle
    _drillQueue = _drillQueue.sort(() => Math.random() - 0.5);
    _drillIdx = 0;
    _flipped = false;

    if (!_drillQueue.length) {
      App.toast('No cards in that category');
      return;
    }
    _showCard();
  }

  function _showCard() {
    if (_drillIdx >= _drillQueue.length) { _finishDrill(); return; }
    const card = _drillQueue[_drillIdx];
    _flipped = false;

    const el = document.getElementById('main');
    const pNum = _drillIdx + 1;
    const pTotal = _drillQueue.length;
    const statusLabel = card.status === 'known' ? '✅ Known' : card.status === 'learning' ? '🔁 Learning' : '👀 New';
    const statusColor = card.status === 'known' ? 'var(--green)' : card.status === 'learning' ? 'var(--yellow)' : 'var(--muted)';

    el.innerHTML = `
      <div class="card-deck">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
          <button class="back-btn" onclick="Cards.showDeck()">← Back to deck</button>
          <span style="font-size:0.78rem;color:var(--muted)">${pNum} / ${pTotal}</span>
        </div>
        <div class="q-progress-track" style="margin-bottom:1rem">
          <div class="q-progress-fill" style="width:${((pNum-1)/pTotal)*100}%"></div>
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
          <div class="drill-btns" style="margin-top:0.75rem">
            <button class="btn grn" onclick="Cards.rate('known')">✅ Got it</button>
            <button class="btn yel" onclick="Cards.rate('learning')">🔁 Nearly</button>
            <button class="btn red" onclick="Cards.rate('unseen')">❌ Missed</button>
          </div>
        </div>

        <button class="btn full" style="margin-top:0.6rem" onclick="Cards.skip()">⏭ Skip</button>
      </div>`;
  }

  function flip() {
    if (_flipped) return;
    _flipped = true;
    const fc = document.getElementById('flashcard');
    const cb = document.getElementById('cardBack');
    if (fc) { fc.querySelector('.fc-side').textContent = 'QUESTION'; fc.style.opacity = '0.6'; }
    if (cb) cb.style.display = 'block';
  }

  function rate(status) {
    const card = _drillQueue[_drillIdx];
    Store.updateCardStatus(card.id, status);
    _drillQueue[_drillIdx].status = status;
    _drillIdx++;
    _showCard();
  }

  function skip() {
    _drillIdx++;
    _showCard();
  }

  function _finishDrill() {
    const known    = _drillQueue.filter(c => c.status === 'known').length;
    const learning = _drillQueue.filter(c => c.status === 'learning').length;
    const missed   = _drillQueue.filter(c => c.status === 'unseen' || !c.status).length;
    const total    = _drillQueue.length;

    document.getElementById('main').innerHTML = `
      <div class="card-deck">
        <div class="results-header">
          <h2>🃏 Drill complete!</h2>
          <p>${known === total ? 'Perfect run — every card nailed.' : `${learning + missed} card${learning+missed!==1?'s':''} still to work on.`}</p>
        </div>
        <div class="stat-grid" style="margin-bottom:1rem">
          ${statCell('✅', known,    'Got it')}
          ${statCell('🔁', learning, 'Nearly')}
          ${statCell('❌', missed,   'Missed')}
        </div>
        <div style="display:flex;gap:0.55rem;flex-wrap:wrap">
          <button class="btn pri" onclick="Cards.startDrill('all')">🔁 Drill again</button>
          ${missed + learning > 0 ? `<button class="btn yel" onclick="Cards.startDrill('learning')">📋 Drill missed only</button>` : ''}
          <button class="btn" onclick="Cards.showDeck()">🃏 Back to deck</button>
          <button class="btn" onclick="showHome()">🏠 Home</button>
        </div>
      </div>`;
  }

  function clearDeck() {
    if (!confirm('Clear your entire card deck? This cannot be undone.')) return;
    Store.clearDeck();
    showDeck();
    App.toast('Deck cleared');
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

  return { showDeck, startDrill, flip, rate, skip, clearDeck, saveFromLesson };
})();
