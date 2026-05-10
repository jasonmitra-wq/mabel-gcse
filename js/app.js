/* ============================================================
   APP.JS — Main controller: home, routing, dashboard, AI calls
   ============================================================ */

// ── AI API ────────────────────────────────────────────────────
const AI = (() => {
  let _queue = Promise.resolve();
  const _KEY_STORE = 'mabel_api_key';

  function getKey()   { return localStorage.getItem(_KEY_STORE) || ''; }
  function saveKey(k) { localStorage.setItem(_KEY_STORE, k.trim()); }
  function clearKey() { localStorage.removeItem(_KEY_STORE); }
  function hasKey()   { return !!getKey(); }

  async function _call(sys, user, tokens, attempt = 0) {
    const key = getKey();
    if (!key) throw new Error('NO_KEY');
    const MAX = 4;
    try {
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': key,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: tokens || 2000,
          system: sys,
          messages: [{ role: 'user', content: user }]
        })
      });

      if ((resp.status === 429 || resp.status === 529) && attempt < MAX) {
        await new Promise(r => setTimeout(r, 4000 * Math.pow(2, attempt)));
        return _call(sys, user, tokens, attempt + 1);
      }
      if (resp.status === 401) throw new Error('BAD_KEY');
      if (!resp.ok) throw new Error(resp.status);

      const data = await resp.json();
      await new Promise(r => setTimeout(r, 600));
      return data.content.filter(b => b.type === 'text').map(b => b.text).join('');
    } catch(e) {
      if (e.message === 'NO_KEY' || e.message === 'BAD_KEY') throw e;
      if (attempt < MAX && !String(e.message).match(/^[45]\d\d$/)) {
        await new Promise(r => setTimeout(r, 3000));
        return _call(sys, user, tokens, attempt + 1);
      }
      throw e;
    }
  }

  function call(sys, user, tokens) {
    _queue = _queue.then(() => _call(sys, user, tokens));
    return _queue;
  }

  function callMultimodal(sys, contentBlocks, tokens) {
    _queue = _queue.then(() => _call(sys, contentBlocks, tokens));
    return _queue;
  }

  return { call, callMultimodal, hasKey, saveKey, clearKey, getKey };
})();

// ── State ──────────────────────────────────────────────────────
let _syllabus       = null;
let _progress       = null;
let _activeSubject  = 'biology';

// ── Boot ───────────────────────────────────────────────────────
async function boot() {
  _progress = Store.getProgress();

  // Load syllabus
  try {
    const res  = await fetch('data/biology-syllabus.json');
    _syllabus  = await res.json();
  } catch(e) {
    document.getElementById('main').innerHTML = `
      <div class="empty-state">
        <div class="es-icon">⚠️</div>
        <h3>Could not load syllabus</h3>
        <p>Make sure you're running this from a web server, not a local file.</p>
      </div>`;
    return;
  }

  const last = _progress.lastPosition;
  showHome(!!last?.subtopicId);
}

// ── TUTOR GREETING ────────────────────────────────────────────
const _GREETINGS = [
  { text: "Right. Let's get something done today.",                                          silver: false },
  { text: "Good to see you. Silver better not be sitting on your notes again.",              silver: true  },
  { text: "Pick up where you left off — you were doing well.",                               silver: false },
  { text: "Small sessions add up. Let's do one now.",                                        silver: false },
  { text: "Every topic you cover today is one less thing to worry about in June.",           silver: false },
  { text: "Back again. Good. Consistency beats cramming every time.",                        silver: false },
  { text: "You're building something here. Keep going.",                                     silver: false },
  { text: "Even 20 minutes today makes a difference. Let's start.",                         silver: false },
  { text: "The exam doesn't know you revised last week. It only knows today.",               silver: false },
  { text: "Come on then. Pick a topic.",                                                     silver: false },
];

function _pickGreeting() {
  const sp = Store.getMabelProfile()?.silver || {};
  const silverKnown = !!(sp.colour || sp.mood || sp.habits?.length);
  const lastIdx = Store.get('ui_lastGreeting') ?? -1;
  const pool = _GREETINGS
    .map((g, i) => ({ ...g, i }))
    .filter(g => g.i !== lastIdx && (!g.silver || silverKnown));
  // fallback: if pool empty (e.g. only 1 eligible message), allow repeat
  const eligible = pool.length ? pool : _GREETINGS.map((g, i) => ({ ...g, i })).filter(g => !g.silver || silverKnown);
  const pick = eligible[Math.floor(Math.random() * eligible.length)];
  Store.set('ui_lastGreeting', pick.i);
  return pick.text;
}

// ── HOME ───────────────────────────────────────────────────────
function showHome(hasSaved) {
  _progress = Store.getProgress();
  const last = _progress.lastPosition;
  const coveredCount = Object.keys(_progress.covered || {}).length;
  const _homeDeck  = Store.getDeck();
  const deckSize   = _homeDeck.length;
  const _homeToday = new Date().toISOString();
  const dueCount   = _homeDeck.filter(c => !c.nextReview || c.nextReview <= _homeToday).length;

  App.setStage('Home');
  document.getElementById('hdrTopic').style.display = 'none';
  document.getElementById('hdrScore').style.display = 'none';

  // Close panels (inline override ensures stale cached CSS can't leave panel visible)
  const _lp = document.getElementById('lessonPanel');
  _lp.style.transition = 'transform 0.32s cubic-bezier(0.4,0,0.2,1)';
  _lp.style.transform = 'translateX(100vw)';
  setTimeout(() => { _lp.style.cssText = ''; _lp.classList.remove('open'); }, 340);
  document.getElementById('qPanel').classList.remove('open');

  const streak = Store.getStreak();
  const streakHtml = streak.currentStreak >= 2
    ? `<div style="font-size:0.85rem;color:var(--yellow);margin-top:0.5rem;font-weight:600">${streak.currentStreak} day streak 🔥</div>`
    : '';

  const greeting = _pickGreeting();

  const main = document.getElementById('main');
  main.innerHTML = `
    <div class="home-hero">
      <h1>Mabel's GCSE Tutor</h1>
      <p>Everything you need to do well in your exams.</p>
      ${streakHtml}
    </div>
    <p style="font-size:16px;color:#C8A8E8;margin:0.1rem 0 1.1rem;line-height:1.6">${greeting}</p>
    <div class="mode-grid" id="modeGrid"></div>
    <div id="upcomingSection"></div>`;

  const grid = document.getElementById('modeGrid');

  // Continue card (if last position saved)
  if (last?.subtopicId && last?.subtopicName) {
    const cont = _modeCard(Icons.get('continue', 48), last.subtopicName, 'Pick up where you left off.', 'continue', () => {
      Lessons.open(last.subtopicId, last.subtopicName, last.topicCode, last.subject || 'biology');
    });
    cont.className = 'mode-card continue';
    grid.appendChild(cont);
  }

  const errorLog   = Store.getErrorLog();
  const errorCount = Object.keys(errorLog).length;

  // Global mastery: % of saved cards rated good or easy
  const _deckGood  = _homeDeck.filter(c => c.difficulty === 'good' || c.difficulty === 'easy' || c.status === 'known').length;
  const globalMastery = _homeDeck.length > 0 ? Math.round((_deckGood / _homeDeck.length) * 100) : null;

  // ── Dashboard tile: overall progress bar ───────────────────
  const _dbPct   = globalMastery ?? 0;
  const _dbPhase = coveredCount === 0
    ? "Nothing secured yet — let's start"
    : _dbPct <= 30 ? 'Building foundations'
    : _dbPct <= 60 ? 'Getting there'
    : _dbPct <= 80 ? 'Most of it covered'
    : 'Nearly exam-ready';
  const _dbBarCol = _dbPct >= 80 ? '#52C97A' : _dbPct >= 71 ? '#6BBDE3' : _dbPct >= 41 ? '#E8A838' : '#E05252';
  const _dbSub = `<div style="height:6px;background:rgba(255,255,255,0.12);border-radius:3px;overflow:hidden;margin-top:6px">${
    _dbPct > 0 ? `<div style="height:100%;width:${_dbPct}%;background:${_dbBarCol};border-radius:3px;transition:width 0.5s ease"></div>` : ''
  }</div><div style="font-size:12px;color:var(--muted);margin-top:5px">${_dbPhase}</div>`;

  const modes = [
    { title: 'Revise',    sub: 'Pick a subject & topic',        fn: showSubjectPicker,  pct: globalMastery },
    { title: 'Getting ready for a test?', sub: "Tell me what's coming up and I'll help you focus", fn: showTestPrep, pct: globalMastery },
    { title: 'Dashboard', sub: _dbSub,                           fn: showDashboard,      pct: globalMastery },
    { title: `Card deck${deckSize > 0 ? ' · '+deckSize : ''}`,  sub: dueCount > 0 ? `⏰ ${dueCount} due today` : 'Drill your saved cards', fn: showCardDeck, pct: globalMastery },
    { icon: '❌', title: `Error log${errorCount > 0 ? ' · ' + errorCount : ''}`, sub: errorCount > 0 ? 'Review your missed questions' : 'No errors yet — keep going!', fn: showErrorLog },
    { icon: '📋', title: 'Session history', sub: 'Your recent practice sessions', fn: showSessionHistory },
  ];

  modes.forEach(m => {
    grid.appendChild(_modeCard(m.icon || null, m.title, m.sub, '', m.fn, m.pct));
  });

  _renderUpcomingTests();
}

function _renderUpcomingTests() {
  const section = document.getElementById('upcomingSection');
  if (!section) return;

  try {
    const raw = Store.get('schedule');
    if (!raw) return;
    const parsed  = typeof raw === 'string' ? JSON.parse(raw) : raw;
    const tests   = Array.isArray(parsed) ? parsed : (parsed.tests || []);
    const today   = new Date(); today.setHours(0, 0, 0, 0);

    const upcoming = tests
      .filter(t => t.date)
      .map(t => ({ ...t, days: Math.ceil((new Date(t.date) - today) / 86400000) }))
      .filter(t => t.days >= 0 && t.days <= 30)
      .sort((a, b) => a.days - b.days)
      .slice(0, 3);

    if (!upcoming.length) return;

    let html = `<div style="margin-top:0.5rem">
      <div class="section-label">Coming up</div>`;

    upcoming.forEach((t, i) => {
      const isUrgent = t.days < 7;
      const urgBg    = isUrgent ? 'rgba(255,107,107,0.06)' : t.days < 21 ? 'rgba(255,217,61,0.05)' : 'rgba(107,203,119,0.05)';
      const urgBdr   = isUrgent ? 'rgba(255,107,107,0.25)' : t.days < 21 ? 'rgba(255,217,61,0.25)' : 'rgba(107,203,119,0.2)';
      const dayStr   = t.days === 0 ? 'today' : t.days === 1 ? 'tomorrow' : `${t.days} days away`;
      const topicStr = t.topic ? ` — ${t.topic}` : '';
      const chip     = isUrgent
        ? `<span class="chip chip-red">Soon!</span>`
        : t.days < 21
          ? `<span class="chip chip-gold">Coming up</span>`
          : `<span class="chip chip-green">Plenty of time</span>`;
      html += `<div onclick="_buildTestPlan(_scheduleTests[${i}] || {subject:'${(t.subject||'').replace(/'/g,"\\'")}',topic:'${(t.topic||'').replace(/'/g,"\\'")}',days:${t.days}})"
        style="background:${urgBg};border:1.5px solid ${urgBdr};border-radius:12px;padding:0.65rem 0.9rem;margin-bottom:0.4rem;cursor:pointer;display:flex;align-items:center;gap:0.75rem;transition:all 0.18s"
        onmouseover="this.style.transform='translateX(3px)'" onmouseout="this.style.transform=''">
        <div style="flex:1;min-width:0;font-weight:600;font-size:0.85rem">${t.subject}${topicStr} — ${dayStr}</div>
        ${chip}
      </div>`;
    });

    html += `</div>`;
    section.innerHTML = html;

    // Sync _scheduleTests so onclick refs work
    const today2 = new Date(); today2.setHours(0, 0, 0, 0);
    _scheduleTests = tests
      .filter(t => t.date)
      .map(t => {
        const d = new Date(t.date);
        const days = Math.ceil((d - today2) / 86400000);
        return { ...t, days, urgency: days < 7 ? 'urgent' : days < 21 ? 'soon' : 'ready', dateObj: d };
      })
      .filter(t => t.days >= 0)
      .sort((a, b) => a.days - b.days);

  } catch { /* silently ignore corrupt schedule data */ }
}

// pct: 0-100 or null. done/total optional — renders "3/8" fraction label when supplied.
function _masteryBar(pct, done, total) {
  if (pct === null || pct === undefined) return '';
  const fillCol  = pct >= 80 ? '#52C97A' : pct >= 71 ? '#6BBDE3' : pct >= 41 ? '#E8A838' : '#E05252';
  const labelCol = pct >= 80 ? '#52C97A' : pct >= 71 ? '#6BBDE3' : pct >= 41 ? '#E8A838' : 'var(--muted)';
  const fill     = pct > 0
    ? `<div style="height:100%;width:${pct}%;background:${fillCol};border-radius:4px;transition:width 0.5s ease"></div>`
    : '';
  const label    = (done != null && total != null)
    ? `<span style="font-size:12px;color:${labelCol};font-weight:600;white-space:nowrap;flex-shrink:0">${done}/${total}</span>`
    : '';
  return `<div style="display:flex;align-items:center;gap:0.5rem;margin-top:4px">
    <div style="flex:1;height:8px;background:rgba(255,255,255,0.12);border-radius:4px;overflow:hidden">${fill}</div>
    ${label}
  </div>`;
}

// SVG circular progress arc — 40px, stroke-width 4, top-right of tile
function _masteryArc(pct) {
  const r = 18, circ = +(2 * Math.PI * r).toFixed(1);
  const filled = pct != null && pct > 0;
  const offset = filled ? +(circ * (1 - pct / 100)).toFixed(1) : circ;
  const stroke = pct == null ? 'none'
    : pct >= 71 ? 'var(--green)' : pct >= 41 ? '#f59e0b' : 'var(--red)';
  return `<svg width="40" height="40" viewBox="0 0 40 40"
      style="position:absolute;top:12px;right:12px;flex-shrink:0;pointer-events:none">
    <circle cx="20" cy="20" r="${r}" fill="none" stroke="var(--border2)" stroke-width="4"/>
    ${filled ? `<circle cx="20" cy="20" r="${r}" fill="none"
      stroke="${stroke}" stroke-width="4"
      stroke-dasharray="${circ}" stroke-dashoffset="${offset}"
      stroke-linecap="round" transform="rotate(-90 20 20)"/>` : ''}
  </svg>`;
}

// Padlock SVG for coming-soon tiles
function _lockIcon() {
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="var(--muted)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute;top:14px;right:14px;pointer-events:none;opacity:0.5">
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>`;
}

function _modeCard(icon, title, sub, extraClass, fn, pct) {
  const card = document.createElement('div');
  card.className = `mode-card ${extraClass}`;
  card.style.position = 'relative';
  // pct provided → arc replaces icon; otherwise fall back to icon
  const topEl = pct !== undefined
    ? _masteryArc(pct)
    : (icon ? `<span class="mc-icon">${icon}</span>` : '');
  card.innerHTML = `${topEl}<div class="mc-title">${title}</div><div class="mc-sub">${sub}</div>`;
  card.onclick = fn;
  return card;
}

// ── SUBJECT PICKER ─────────────────────────────────────────────
function showSubjectPicker() {
  App.setStage('Subjects');

  const subjects = [
    { id: 'biology',  label: 'Biology',   sub: 'Separate Science · Paper 1 & 2', available: true  },
    { id: 'chemistry',label: 'Chemistry', sub: 'Separate Science · Paper 1 & 2', available: true  },
    { id: 'physics',  label: 'Physics',   sub: 'Separate Science · Paper 1 & 2', available: true  },
    { id: 'maths',    label: 'Maths',       icon: '📐', sub: 'Coming soon', available: false },
    { id: 'english',  label: 'English Lit', icon: '📚', sub: 'Coming soon', available: false },
    { id: 'history',  label: 'History',     icon: '🏛️', sub: 'Coming soon', available: false },
  ];

  let html = `
    <div class="topic-header">
      <button class="back-btn" onclick="showHome()">← Home</button>
      <h2>What are you revising?</h2>
    </div>
    <div class="mode-grid">`;

  // Compute global mastery for the Biology arc
  const _spDeck = Store.getDeck();
  const _spGood = _spDeck.filter(c => c.difficulty === 'good' || c.difficulty === 'easy' || c.status === 'known').length;
  const _spMastery = _spDeck.length > 0 ? Math.round((_spGood / _spDeck.length) * 100) : null;

  subjects.forEach(s => {
    if (s.available) {
      const arc = s.id === 'biology' ? _masteryArc(_spMastery) : _masteryArc(null);
      html += `<div class="mode-card" style="position:relative" onclick="_selectSubject('${s.id}')">
        ${arc}
        <div class="mc-title">${s.label}</div>
        <div class="mc-sub">${s.sub}</div>
      </div>`;
    } else {
      html += `<div class="mode-card" style="position:relative;opacity:0.45" onclick="_comingSoonSubject('${s.label}')">
        ${_lockIcon()}
        <div class="mc-title">${s.label}</div>
        <div class="mc-sub">Coming soon</div>
      </div>`;
    }
  });

  html += `</div>`;
  document.getElementById('main').innerHTML = html;
}

async function _selectSubject(subjectId) {
  _activeSubject = subjectId;
  try {
    const res = await fetch(`data/${subjectId}-syllabus.json`);
    if (!res.ok) throw new Error(res.status);
    _syllabus = await res.json();
  } catch {
    _syllabus = { topics: {} };
  }
  showTopics();
}

function _comingSoonSubject(subjectName) {
  App.setStage('Coming soon');
  document.getElementById('main').innerHTML = `
    <div style="max-width:500px">
      <div class="topic-header">
        <button class="back-btn" onclick="showSubjectPicker()">← Subjects</button>
        <h2>Coming soon</h2>
      </div>
      <div style="background:var(--s1);border:1px solid var(--border2);border-radius:14px;padding:1.5rem;text-align:center">
        <div style="font-size:2.5rem;margin-bottom:0.75rem">🚧</div>
        <p style="font-size:0.9rem;line-height:1.65;margin-bottom:1.25rem">${subjectName} is on its way — Biology first, then we'll add it.</p>
        <button class="btn pri full" onclick="_selectSubject('biology')">→ Go to Biology</button>
      </div>
    </div>`;
}

// ── TOPIC BROWSER ──────────────────────────────────────────────
function showTopics() {
  App.setStage('Topics');
  _progress = Store.getProgress();

  const _subjectMeta = { biology:'🧬 Biology', chemistry:'⚗️ Chemistry', physics:'⚡ Physics', maths:'📐 Maths', english:'📚 English', history:'🏛️ History' };
  const subjectLabel = _subjectMeta[_activeSubject] || _activeSubject;

  const main = document.getElementById('main');
  main.innerHTML = `
    <div class="topic-header">
      <button class="back-btn" onclick="showSubjectPicker()">← Subjects</button>
      <h2>${subjectLabel}</h2>
    </div>
    <div id="topicList"></div>`;

  const list = document.getElementById('topicList');
  const topics = _syllabus?.topics || {};

  const _deck = Store.getDeck();

  // ── Badge pre-pass ─────────────────────────────────────────
  // Compute coverage for every available topic so we can pick
  // the single most logical "next" topic to highlight.
  const _availTopics = Object.entries(topics)
    .filter(([, t]) => t.available !== false)
    .map(([code, t]) => {
      const subs   = t.subtopics || [];
      const done   = subs.filter(st => _progress.covered[st.id]).length;
      const covPct = subs.length ? Math.round((done / subs.length) * 100) : 0;
      return { code, done, covPct };
    });

  let _badgeCode = null, _badgeText = null;

  // "Start here" — first unstarted topic whose immediate predecessor
  // is either complete (≥80%) or also unstarted (handles fresh start).
  let _prevCovPct = -1; // -1 = before first topic; treat as "ok to begin"
  for (const s of _availTopics) {
    if (s.done === 0 && (_prevCovPct < 0 || _prevCovPct === 0 || _prevCovPct >= 80)) {
      _badgeCode = s.code;
      _badgeText = 'Start here →';
      break;
    }
    _prevCovPct = s.covPct;
  }

  // "Continue" — all topics started but not all complete: pick lowest-covPct
  if (!_badgeCode) {
    const _allStarted  = _availTopics.every(s => s.done > 0);
    const _allComplete = _availTopics.every(s => s.covPct >= 80);
    if (_allStarted && !_allComplete) {
      const _pick = _availTopics
        .filter(s => s.covPct < 80)
        .sort((a, b) => a.covPct - b.covPct)[0];
      if (_pick) { _badgeCode = _pick.code; _badgeText = 'Continue →'; }
    }
  }
  // (If all topics are ≥80% — no badge. _badgeCode stays null.)

  // ── Render cards ───────────────────────────────────────────
  Object.entries(topics).forEach(([code, t]) => {
    const subtopics  = t.subtopics || [];
    const total      = subtopics.length;
    const done       = subtopics.filter(st => _progress.covered[st.id]).length;
    const avail      = t.available !== false;
    const mastery    = avail ? Store.getTopicMastery(subtopics.map(st => st.id), _deck) : null;
    const complete   = subtopics.filter(st => {
      const m = Store.getSubtopicMastery(st.id, _deck);
      return m !== null && m >= 80;
    }).length;

    const covPct = total ? Math.round((done / total) * 100) : 0;

    const badgeHtml = (avail && code === _badgeCode)
      ? `<span style="font-size:11px;font-weight:600;background:var(--blue);color:#fff;padding:3px 8px;border-radius:999px;white-space:nowrap;line-height:1">${_badgeText}</span>`
      : (!avail ? `<span class="chip chip-gold">Coming soon</span>` : '');

    const card = document.createElement('div');
    card.className = `topic-card ${avail ? '' : 'unavailable'}`;
    card.innerHTML = `
      <div class="tc-icon">${t.icon}</div>
      <div class="tc-body">
        <div class="tc-name">${t.name}</div>
        ${t.description ? `<div style="font-size:14px;color:var(--muted);margin-top:2px;line-height:1.6">${t.description}</div>` : ''}
        ${complete > 0 ? `<div style="font-size:0.72rem;color:#52C97A;margin-top:3px">${complete} secure</div>` : ''}
        ${avail ? _masteryBar(covPct, done, total) : ''}
      </div>
      <div class="tc-right">${badgeHtml}</div>`;

    if (avail) {
      card.onclick = () => showSubtopics(code, t);
    }
    list.appendChild(card);
  });
}

function showSubtopics(topicCode, topicData) {
  App.setStage('Topics');
  _progress = Store.getProgress();

  const main = document.getElementById('main');
  main.innerHTML = `
    <div class="topic-header">
      <button class="back-btn" onclick="showTopics()">← All topics</button>
      <h2>${topicData.icon} ${topicData.name}</h2>
    </div>
    <div id="subtopicList"></div>`;

  const list     = document.getElementById('subtopicList');
  const subtopics = topicData.subtopics || [];
  const _deck    = Store.getDeck();

  subtopics.forEach(st => {
    const started  = !!_progress.covered[st.id];
    const avail    = st.available !== false;
    const mastery  = avail ? Store.getSubtopicMastery(st.id, _deck) : null;
    const complete = mastery !== null && mastery >= 80;

    const card = document.createElement('div');
    card.className = `subtopic-card ${complete ? 'done' : ''} ${avail ? '' : 'unavailable'}`;

    let chipHtml = '';
    if (!avail) {
      chipHtml = `<span class="st-chip" style="background:rgba(255,217,61,0.1);color:var(--yellow);border:1px solid rgba(255,217,61,0.3)">Soon</span>`;
    } else if (complete) {
      chipHtml = `<span class="st-chip" style="background:rgba(107,203,119,0.1);color:var(--green);border:1px solid rgba(107,203,119,0.3)">✓ Complete</span>`;
    } else if (!started) {
      chipHtml = `<span class="st-chip" style="background:rgba(160,160,180,0.1);color:var(--muted);border:1px solid var(--border2)">Not started</span>`;
    }

    const barHtml = started && mastery !== null ? _masteryBar(mastery) : '';

    card.innerHTML = `
      <div class="st-check">${complete ? '✅' : started ? '◑' : '○'}</div>
      <div class="st-name" style="flex:1">
        ${st.name}
        ${barHtml}
      </div>
      ${chipHtml}`;

    if (avail) {
      card.onclick = () => {
        App.setTopicChip(`${topicCode}: ${topicData.name}`);
        Lessons.open(st.id, st.name, topicCode, _activeSubject);
      };
    }
    list.appendChild(card);
  });
}

// ── DASHBOARD ──────────────────────────────────────────────────
function showDashboard() {
  App.setStage('Dashboard');
  _progress = Store.getProgress();

  const totalSubs = Object.values(_syllabus?.topics || {})
    .reduce((s, t) => s + (t.subtopics || []).length, 0);
  const coveredCount = Object.keys(_progress.covered || {}).length;
  const scores = _progress.testScores || [];
  const avgPct = scores.length ? Math.round(scores.reduce((s, t) => s + t.pct, 0) / scores.length) : null;
  const deckSize = Store.getDeck().length;
  const profile = _progress.learnerProfile || {};

  let html = `
    <div class="dashboard">
      <div class="topic-header">
        <button class="back-btn" onclick="showHome()">← Home</button>
        <h2>📊 Dashboard</h2>
      </div>

      <div class="stat-grid">
        ${_statCell('📚', coveredCount + '/' + totalSubs, 'Subtopics')}
        ${_statCell('✏️', scores.length, 'Tests done')}
        ${_statCell('🎯', avgPct !== null ? avgPct + '%' : '—', 'Avg score')}
      </div>`;

  // Progress per topic
  const topics = _syllabus?.topics || {};
  const hasCoverage = Object.entries(topics).some(([,t]) => {
    return (t.subtopics || []).some(st => _progress.covered[st.id]);
  });

  if (hasCoverage) {
    html += `<div class="dash-section" style="margin-top:1.25rem"><h3>Progress by topic</h3>`;
    Object.entries(topics).forEach(([code, t]) => {
      const subs = t.subtopics || [];
      const done = subs.filter(st => _progress.covered[st.id]).length;
      if (!done) return;
      const pct = Math.round((done / subs.length) * 100);
      html += `<div style="margin-bottom:0.6rem">
        <div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:0.25rem">
          <span>${t.icon} ${t.name}</span>
          <span style="color:var(--muted)">${done}/${subs.length} · ${pct}%</span>
        </div>
        <div class="prog-bar" style="height:6px"><div class="prog-fill" style="width:${pct}%"></div></div>
      </div>`;
    });
    html += `</div>`;
  }

  // Card deck
  if (deckSize > 0) {
    const deck   = Store.getDeck();
    const known   = deck.filter(c => c.status === 'known').length;
    html += `<div class="dash-section"><h3>Card deck</h3>
      <div style="background:var(--s1);border:1px solid var(--border2);border-radius:12px;padding:0.85rem 1rem;display:flex;align-items:center;gap:0.75rem">
        <div style="flex:1;font-size:0.85rem">${deckSize} cards saved · ${known} known</div>
        <button class="btn" onclick="showCardDeck()">🃏 Drill</button>
      </div>
    </div>`;
  }

  // Learner profile
  {
    const liked         = profile.liked    || [];
    const disliked      = profile.disliked || [];
    const wantsSimpler  = disliked.filter(d => d.preference === 'simpler').length;
    const wantsMore     = disliked.filter(d => d.preference === 'more-detail').length;
    const wantsExamples = disliked.filter(d => d.preference === 'more-examples').length;
    const totalRated    = liked.length + disliked.length;
    const mabelProfile  = Store.getMabelProfile();
    const silver        = mabelProfile.silver  || {};
    const skating       = mabelProfile.skating || {};

    html += `<div class="dash-section"><h3>How you learn</h3>`;

    if (totalRated === 0) {
      html += `<div style="background:rgba(77,150,255,0.06);border:1px solid rgba(77,150,255,0.2);border-radius:12px;padding:0.85rem 1rem;font-size:0.84rem;color:var(--muted)">
        Rate a few lessons and I'll start building your learning profile. The more you rate, the better your practice questions get.
      </div>`;
    } else {
      html += `<div style="background:rgba(77,150,255,0.06);border:1px solid rgba(77,150,255,0.2);border-radius:12px;padding:0.85rem 1rem;font-size:0.84rem;line-height:1.7">
        ${profile.summary ? `<p style="margin-bottom:0.65rem">${profile.summary}</p>` : ''}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.4rem;margin-bottom:0.65rem">
          <div style="background:rgba(107,203,119,0.08);border:1px solid rgba(107,203,119,0.2);border-radius:8px;padding:0.45rem 0.65rem;text-align:center">
            <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:800;color:var(--green)">${liked.length}</div>
            <div style="font-size:0.7rem;color:var(--muted)">👍 Worked well</div>
          </div>
          <div style="background:rgba(255,217,61,0.06);border:1px solid rgba(255,217,61,0.2);border-radius:8px;padding:0.45rem 0.65rem;text-align:center">
            <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:800;color:var(--yellow)">${wantsExamples}</div>
            <div style="font-size:0.7rem;color:var(--muted)">🔁 Wants examples</div>
          </div>
          <div style="background:rgba(78,205,196,0.06);border:1px solid rgba(78,205,196,0.2);border-radius:8px;padding:0.45rem 0.65rem;text-align:center">
            <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:800;color:var(--teal)">${wantsMore}</div>
            <div style="font-size:0.7rem;color:var(--muted)">🔍 Wants more detail</div>
          </div>
          <div style="background:rgba(199,125,255,0.06);border:1px solid rgba(199,125,255,0.2);border-radius:8px;padding:0.45rem 0.65rem;text-align:center">
            <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:800;color:var(--purple)">${wantsSimpler}</div>
            <div style="font-size:0.7rem;color:var(--muted)">✂️ Wants simpler</div>
          </div>
        </div>
        <p style="font-size:0.75rem;color:var(--muted)">This adapts how your practice questions are generated.</p>
      </div>`;
    }

    // Silver & skating details gathered so far
    const silverFacts  = [silver.colour, silver.breed, silver.mood].filter(Boolean);
    const skatingFacts = [
      skating.monthsIn  ? `${skating.monthsIn} months in` : null,
      skating.currentMove ? `working on ${skating.currentMove}` : null,
      skating.level ? skating.level : null,
    ].filter(Boolean);

    if (silverFacts.length || skatingFacts.length) {
      let silverLine = '';
      if (silver.colour && silver.breed && silver.mood) {
        silverLine = `I know Silver is ${silver.colour}, ${silver.breed}, and ${silver.mood}.`;
      } else if (silver.colour && silver.breed) {
        silverLine = `I know Silver is ${silver.colour} and a ${silver.breed}.`;
      } else if (silver.colour && silver.mood) {
        silverLine = `I know Silver is ${silver.colour} and ${silver.mood}.`;
      } else if (silverFacts.length) {
        silverLine = `I know Silver is ${silverFacts[0]}.`;
      }

      let skatingLine = '';
      if (skating.monthsIn && skating.currentMove) {
        skatingLine = `You've been skating for ${skating.monthsIn} months and you're working on ${skating.currentMove}.`;
      } else if (skating.monthsIn && skating.level) {
        skatingLine = `You've been skating for ${skating.monthsIn} months at ${skating.level} level.`;
      } else if (skating.monthsIn) {
        skatingLine = `You've been skating for ${skating.monthsIn} months.`;
      } else if (skating.currentMove) {
        skatingLine = `You're working on ${skating.currentMove}.`;
      } else if (skating.level) {
        skatingLine = `You're at ${skating.level} level.`;
      }

      html += `<div style="background:rgba(199,125,255,0.05);border:1px solid rgba(199,125,255,0.15);border-radius:12px;padding:0.75rem 1rem;margin-top:0.5rem;font-size:0.82rem;line-height:1.85">`;
      if (silverLine)  html += `<div>🐱 ${silverLine}</div>`;
      if (skatingLine) html += `<div>⛸️ ${skatingLine}</div>`;
      html += `</div>`;
    }

    html += `</div>`;
  }

  // Recent scores
  if (scores.length) {
    html += `<div class="dash-section"><h3>Recent test scores</h3>`;
    scores.slice(-6).reverse().forEach(s => {
      const cls = s.pct >= 70 ? 'var(--green)' : s.pct >= 50 ? 'var(--yellow)' : 'var(--red)';
      html += `<div class="score-row">
        <div class="topic">${s.topic}</div>
        <div class="score" style="color:${cls}">${s.score}/${s.total} · ${s.pct}%</div>
      </div>`;
    });
    html += `</div>`;
  }

  html += `<div style="display:flex;gap:0.55rem;flex-wrap:wrap;margin-top:1rem">
    <button class="btn pri" onclick="showTopics()">🧠 Keep revising</button>
    <button class="btn" onclick="showCardDeck()">🃏 Card deck</button>
    <button class="btn red" onclick="_confirmReset()">🗑 Reset progress</button>
  </div></div>`;

  document.getElementById('main').innerHTML = html;
}

function _statCell(icon, val, label) {
  return `<div class="stat-cell"><div class="stat-icon">${icon}</div>
    <div class="stat-val">${val}</div>
    <div class="stat-label">${label}</div></div>`;
}

function _confirmReset() {
  if (!confirm('Reset all progress, scores and card deck? This cannot be undone.')) return;
  Store.clearAll();
  showHome();
  App.toast('All progress cleared');
}

// ── ERROR LOG VIEW ─────────────────────────────────────────────
function showErrorLog() {
  App.setStage('Error log');
  const log = Store.getErrorLog();
  const entries = Object.values(log).sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  let html = `
    <div style="max-width:680px">
      <div class="topic-header">
        <button class="back-btn" onclick="showHome()">← Home</button>
        <h2>❌ Error log</h2>
      </div>`;

  if (entries.length === 0) {
    html += `
      <div style="text-align:center;padding:3rem 1rem">
        <div style="font-size:3rem;margin-bottom:1rem">🎉</div>
        <p style="color:var(--muted)">No errors logged yet — keep working through topics!</p>
      </div>`;
  } else {
    html += `<p style="font-size:0.85rem;color:var(--muted);margin-bottom:1rem">${entries.length} question${entries.length !== 1 ? 's' : ''} to revisit. Write these out by hand — that's your revision list.</p>`;

    const checkpoints = entries.filter(e => e.type === 'checkpoint');
    const questions   = entries.filter(e => e.type === 'question');

    if (checkpoints.length > 0) {
      html += `<div class="section-label" style="margin-bottom:0.6rem">Lesson checkpoints</div>`;
      checkpoints.forEach(e => {
        const badge = e.gotRight
          ? `<span style="color:var(--yellow);font-size:0.75rem;font-weight:700">✓ Got it (with ${e.hintsUsed} hint${e.hintsUsed !== 1 ? 's' : ''})</span>`
          : `<span style="color:var(--red);font-size:0.75rem;font-weight:700">✗ Wrong</span>`;
        html += `<div class="error-log-item" style="margin-bottom:0.65rem;padding:0.75rem 0.9rem;background:var(--s2);border:1px solid var(--border2);border-radius:10px">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;margin-bottom:0.35rem">
            <span style="font-size:0.78rem;color:var(--muted)">${e.subtopicName || e.subtopicId}</span>
            ${badge}
          </div>
          <div style="font-size:0.9rem;font-weight:600;margin-bottom:0.35rem">${e.question}</div>
          <div style="font-size:0.85rem;color:var(--green)">✓ ${e.correct}</div>
        </div>`;
      });
    }

    if (questions.length > 0) {
      html += `<div class="section-label" style="margin-top:1rem;margin-bottom:0.6rem">Practice questions</div>`;
      questions.forEach(e => {
        const masteryLabel = e.mastery === 'skipped'
          ? `<span style="color:var(--muted);font-size:0.75rem;font-weight:700">Skipped</span>`
          : e.mastery === 'partial'
            ? `<span style="color:var(--yellow);font-size:0.75rem;font-weight:700">📋 Partial</span>`
            : `<span style="color:var(--red);font-size:0.75rem;font-weight:700">❌ Missed</span>`;
        html += `<div class="error-log-item" style="margin-bottom:0.65rem;padding:0.75rem 0.9rem;background:var(--s2);border:1px solid var(--border2);border-radius:10px">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;margin-bottom:0.35rem">
            <span style="font-size:0.78rem;color:var(--muted)">${e.topic || e.subtopicId}</span>
            ${masteryLabel}
          </div>
          <div style="font-size:0.9rem;font-weight:600;margin-bottom:0.35rem">${e.question}</div>
          <div style="font-size:0.8rem;color:var(--blue);font-weight:700;margin-bottom:0.2rem">Model answer:</div>
          <div style="font-size:0.82rem;color:var(--muted);line-height:1.5">${e.modelAnswer}</div>
        </div>`;
      });
    }

    html += `<button class="btn" style="margin-top:1rem" onclick="if(confirm('Clear all logged errors?')){Store.clearErrorLog();showHome();}">🗑 Clear error log</button>`;
  }

  html += `</div>`;
  document.getElementById('main').innerHTML = html;
}

// ── SESSION HISTORY ────────────────────────────────────────────
function showSessionHistory() {
  App.setStage('Session history');
  const sessions = Store.getSessions();

  const _fmtDate = iso => {
    if (!iso) return '—';
    const d = new Date(iso);
    return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })
      + ' · ' + d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  };

  const _duration = (start, end) => {
    if (!start || !end) return null;
    const mins = Math.round((new Date(end) - new Date(start)) / 60000);
    if (mins < 1) return 'under a minute';
    return `${mins} min${mins !== 1 ? 's' : ''}`;
  };

  const _scoreCol = pct => pct >= 70 ? 'var(--green)' : pct >= 40 ? '#f59e0b' : 'var(--red)';

  let html = `
    <div style="max-width:680px">
      <div class="topic-header">
        <button class="back-btn" onclick="showHome()">← Home</button>
        <h2>📋 Session history</h2>
      </div>`;

  if (sessions.length === 0) {
    html += `
      <div style="text-align:center;padding:3rem 1rem">
        <div style="font-size:3rem;margin-bottom:1rem">📖</div>
        <p style="color:var(--muted)">No sessions yet — finish a practice session and it'll appear here.</p>
      </div>`;
  } else {
    sessions.forEach((s, i) => {
      const dur     = _duration(s.startedAt, s.finishedAt);
      const scoreCol = _scoreCol(s.score);
      const statParts = [];
      if (s.attempted)      statParts.push(`${s.attempted} question${s.attempted !== 1 ? 's' : ''}`);
      if (s.noHintCorrect != null) statParts.push(`${s.noHintCorrect} without hints`);
      if (s.hintsUsed)      statParts.push(`${s.hintsUsed} needed hints`);
      if (s.skipped)        statParts.push(`${s.skipped} skipped`);
      if (dur)              statParts.push(dur);

      html += `
        <div style="background:var(--s2);border:1px solid var(--border2);border-radius:12px;padding:0.85rem 1rem;margin-bottom:0.65rem">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;margin-bottom:0.3rem">
            <div style="font-size:0.95rem;font-weight:600;line-height:1.3">${s.topic || '—'}</div>
            <div style="font-size:1.1rem;font-weight:800;color:${scoreCol};white-space:nowrap">${s.score ?? '—'}%</div>
          </div>
          <div style="font-size:0.75rem;color:var(--muted);margin-bottom:0.4rem">${_fmtDate(s.startedAt)}</div>
          <div style="font-size:0.8rem;color:var(--muted)">${statParts.join(' · ')}</div>
        </div>`;
    });
  }

  html += `</div>`;
  document.getElementById('main').innerHTML = html;
}

// ── CARD DECK WRAPPER ──────────────────────────────────────────
function showCardDeck() {
  App.setStage('Cards');
  const _lp2 = document.getElementById('lessonPanel');
  _lp2.style.transition = 'transform 0.32s cubic-bezier(0.4,0,0.2,1)';
  _lp2.style.transform = 'translateX(100vw)';
  setTimeout(() => { _lp2.style.cssText = ''; _lp2.classList.remove('open'); }, 340);
  document.getElementById('qPanel').classList.remove('open');
  Cards.showDeck();
}

// ── TEST PREP ──────────────────────────────────────────────────
// Language note: avoid countdown/deadline/time-pressure framing throughout
// this flow. Anxiety-inducing time pressure language reduces engagement in
// adolescent learners — use agency-and-preparation framing instead.
// "X days left" → "X days to prepare", "running out of time" → remove.
function showTestPrep() {
  App.setStage('Test prep');
  document.getElementById('main').innerHTML = `
    <div style="max-width:600px">
      <div class="topic-header">
        <button class="back-btn" onclick="showHome()">← Home</button>
        <h2>🎯 Getting ready for a test?</h2>
      </div>

      <div style="background:var(--s1);border:1px solid var(--border2);border-radius:14px;padding:1.25rem 1.3rem;margin-bottom:1rem">
        <p style="font-size:0.88rem;color:var(--muted);margin-bottom:0.85rem">Upload a photo or PDF of your school timetable — I'll find your upcoming tests and build a revision plan for each one.</p>
        <label class="upload-zone" id="uploadZone">
          <input type="file" id="scheduleFile" accept=".pdf,image/*" style="display:none">
          <div class="uz-icon">📅</div>
          <div class="uz-label">Upload your timetable</div>
          <div class="uz-sub">PDF or photo · drag and drop or click</div>
        </label>
        <div id="uploadStatus" style="margin-top:0.65rem"></div>
      </div>

      <div class="or-divider"><span>or enter one test manually</span></div>

      <div style="background:var(--s1);border:1px solid var(--border2);border-radius:14px;padding:1.25rem 1.3rem">
        <p style="font-size:0.88rem;color:var(--muted);margin-bottom:0.85rem">Tell me about one test and I'll build you a focused day-by-day revision plan.</p>
        <div style="display:flex;flex-direction:column;gap:0.5rem;margin-bottom:1rem">
          <input id="testSubject" type="text" placeholder="Subject (e.g. Biology)" value="Biology"
            style="background:var(--s2);border:1.5px solid var(--border2);color:var(--text);font-family:'DM Sans',sans-serif;font-size:0.88rem;padding:0.6rem 0.85rem;border-radius:8px;outline:none">
          <input id="testTopic" type="text" placeholder="Topic (e.g. Digestive system)"
            style="background:var(--s2);border:1.5px solid var(--border2);color:var(--text);font-family:'DM Sans',sans-serif;font-size:0.88rem;padding:0.6rem 0.85rem;border-radius:8px;outline:none">
          <input id="testDate" type="date"
            style="background:var(--s2);border:1.5px solid var(--border2);color:var(--text);font-family:'DM Sans',sans-serif;font-size:0.88rem;padding:0.6rem 0.85rem;border-radius:8px;outline:none">
        </div>
        <button class="btn pri full" onclick="_buildTestPlan()">📋 Build revision plan</button>
      </div>
    </div>`;

  _setupUploadZone();
}

// ── SCHEDULE UPLOAD ────────────────────────────────────────────
let _scheduleTests = [];

function _setupUploadZone() {
  const zone  = document.getElementById('uploadZone');
  const input = document.getElementById('scheduleFile');
  if (!zone || !input) return;

  zone.addEventListener('dragover', e => {
    e.preventDefault();
    zone.classList.add('drag-over');
  });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    const file = e.dataTransfer?.files[0];
    if (file) _handleScheduleUpload(file);
  });
  input.addEventListener('change', () => {
    if (input.files[0]) _handleScheduleUpload(input.files[0]);
  });
}

async function _handleScheduleUpload(file) {
  const status = document.getElementById('uploadStatus');
  if (status) {
    status.innerHTML = `<p style="font-size:0.82rem;color:var(--muted);text-align:center">⏳ Reading <strong style="color:var(--text)">${file.name}</strong>…</p>`;
  }

  const mediaType = file.type ||
    (file.name.toLowerCase().endsWith('.pdf') ? 'application/pdf' : 'image/jpeg');

  let base64;
  try {
    base64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload  = e => resolve(e.target.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  } catch {
    if (status) status.innerHTML = `<p style="font-size:0.82rem;color:var(--red)">Couldn't read that file — try again.</p>`;
    return;
  }

  if (status) {
    status.innerHTML = `<p style="font-size:0.82rem;color:var(--muted);text-align:center">🧠 Scanning for test dates…</p>`;
  }

  try {
    const tests = await _parseSchedule(base64, mediaType);
    if (!Array.isArray(tests) || !tests.length) throw new Error('empty');
    _renderSchedule(tests);
  } catch {
    if (status) {
      status.innerHTML = `<p style="font-size:0.82rem;color:var(--red)">Couldn't find any tests in that file. Try a clearer photo, or enter your test details manually below.</p>`;
    }
  }
}

async function _parseSchedule(base64, mediaType) {
  const isImage   = mediaType.startsWith('image/');
  const fileBlock = isImage
    ? { type: 'image',    source: { type: 'base64', media_type: mediaType,         data: base64 } }
    : { type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: base64 } };

  const raw = await AI.callMultimodal(
    `You are reading a school schedule or timetable. Extract all upcoming tests, assessments or exams. Return ONLY valid JSON: {"tests":[{"subject":"","topic":"","date":"YYYY-MM-DD or null","dateRaw":"as written on timetable","notes":""}]}`,
    [
      fileBlock,
      { type: 'text', text: 'Extract all tests and exams from this timetable. Return only the JSON object.' }
    ],
    900
  );

  const clean  = raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/i, '').trim();
  const parsed = JSON.parse(clean);
  Store.set('schedule', JSON.stringify(parsed));        // persist for home screen widget
  return Array.isArray(parsed) ? parsed : (parsed.tests || []);
}

function _renderSchedule(tests) {
  const today = new Date(); today.setHours(0, 0, 0, 0);

  _scheduleTests = tests
    .map(t => {
      const d       = new Date(t.date);
      const days    = Math.ceil((d - today) / 86400000);
      const urgency = days < 7 ? 'urgent' : days < 21 ? 'soon' : 'ready';
      return { ...t, days, urgency, dateObj: d };
    })
    .filter(t => t.days >= 0)
    .sort((a, b) => a.days - b.days);

  let html = `
    <div style="max-width:600px">
      <div class="topic-header">
        <button class="back-btn" onclick="showTestPrep()">← Back</button>
        <h2>📅 What's coming up</h2>
      </div>`;

  if (!_scheduleTests.length) {
    html += `<div class="empty-state">
      <div class="es-icon">📭</div>
      <p>No upcoming tests found in that timetable.</p>
      <button class="btn" style="margin-top:0.75rem" onclick="showTestPrep()">Try again</button>
    </div>`;
  } else {
    const urgentCount = _scheduleTests.filter(t => t.urgency === 'urgent').length;
    if (urgentCount) {
      html += `<div style="background:rgba(255,107,107,0.06);border:1px solid rgba(255,107,107,0.2);border-radius:12px;padding:0.7rem 1rem;margin-bottom:1rem;font-size:0.84rem;color:var(--red)">
        🚨 ${urgentCount} test${urgentCount !== 1 ? 's' : ''} in the next 7 days — click one to build a plan now.
      </div>`;
    }

    _scheduleTests.forEach((t, i) => {
      const dateStr    = t.dateObj.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
      const daysLabel  = t.days === 0 ? 'Today' : t.days === 1 ? 'Tmrw' : t.days + 'd';
      const urgLabel   = t.urgency === 'urgent' ? 'Soon!' : t.urgency === 'soon' ? 'Coming up' : 'Plenty of time';
      html += `<div class="test-event-card ${t.urgency}" onclick="_buildTestPlan(_scheduleTests[${i}])">
        <div class="tec-badge ${t.urgency}">
          <div class="tec-days">${daysLabel}</div>
          <div style="font-size:0.6rem;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;opacity:0.85;margin-top:1px">${urgLabel}</div>
        </div>
        <div class="tec-body">
          <div class="tec-subject">${t.subject}</div>
          ${t.topic ? `<div class="tec-topic">${t.topic}</div>` : ''}
          <div class="tec-date">${dateStr}</div>
        </div>
        <div class="tec-arrow">→</div>
      </div>`;
    });
  }

  if (_scheduleTests.length > 1) {
    html += `<button class="btn pri full" style="margin-top:0.75rem" onclick="showFullTimetable()">📅 See your full revision plan</button>`;
  }
  html += `<button class="btn full" style="margin-top:0.5rem" onclick="showTestPrep()">↩ Upload different timetable</button>
    </div>`;

  document.getElementById('main').innerHTML = html;
}

function _daysFromInput() {
  const dateVal = document.getElementById('testDate')?.value;
  if (!dateVal) return null;
  const testDate = new Date(dateVal);
  const today    = new Date(); today.setHours(0, 0, 0, 0);
  return Math.ceil((testDate - today) / 86400000);
}

// prefill is optional — passed when clicking a test from the schedule view
async function _buildTestPlan(prefill) {
  const subject   = (prefill && prefill.subject) || document.getElementById('testSubject')?.value || 'Biology';
  const topic     = (prefill && prefill.topic)   || document.getElementById('testTopic')?.value  || 'General';
  const daysUntil = (prefill && prefill.days != null) ? prefill.days : _daysFromInput();

  document.getElementById('main').innerHTML = `
    <div style="text-align:center;padding:3rem 1rem">
      <div style="font-size:2rem;margin-bottom:0.75rem">📋</div>
      <p style="color:var(--muted)">Building your revision plan…</p>
    </div>`;

  try {
    const raw = await AI.call(
      `You are a GCSE revision tutor. Create a day-by-day revision plan. Return ONLY valid JSON, no markdown:
{"summary":"2 sentences encouraging intro","days":[{"day":1,"label":"e.g. Mon 13 Jan","focus":"what to revise","tasks":["task","task","task"],"mins":45}],"dayBefore":{"focus":"light review","tasks":["task","task"],"mins":30},"keyTopics":["topic1","topic2","topic3"],"quickWins":["tip1","tip2"]}`,
      `Subject: ${subject}, Topic: ${topic}, Days until test: ${daysUntil ?? 14}. Student is 15. AQA spec. Make the plan realistic — max 3-4 tasks per day.`,
      1500
    );
    let clean = raw.trim().replace(/^```(?:json)?\s*/i,'').replace(/\s*```\s*$/i,'').trim();
    const plan = JSON.parse(clean);
    _renderTestPlan(plan, topic, daysUntil);
  } catch(e) {
    document.getElementById('main').innerHTML = `
      <div class="empty-state">
        <p>Couldn't generate plan. <button class="btn" onclick="showTestPrep()">Try again</button></p>
      </div>`;
  }
}

function _renderTestPlan(plan, topic, daysUntil) {
  let html = `
    <div style="max-width:680px">
      <div class="topic-header">
        <button class="back-btn" onclick="showHome()">← Home</button>
        <h2>🎯 ${topic} revision plan</h2>
      </div>`;

  if (daysUntil !== null) {
    const urgency = daysUntil <= 3 ? 'var(--red)' : daysUntil <= 7 ? 'var(--yellow)' : 'var(--green)';
    // Forward-looking framing — "days to prepare" not "days left/until"
    const prepLabel = daysUntil <= 3 ? '🎯 Make it count' : daysUntil <= 7 ? '⚡ Good time to focus' : '✅ Good time to prepare';
    html += `<div style="background:rgba(255,107,107,0.06);border:1px solid rgba(255,107,107,0.2);border-radius:12px;padding:0.85rem 1rem;margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem">
      <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:800;color:${urgency}">${daysUntil}</div>
      <div><div style="font-weight:600">day${daysUntil!==1?'s':''} to prepare</div>
      <div style="font-size:0.78rem;color:var(--muted)">${prepLabel}</div></div>
    </div>`;
  }

  html += `<p style="font-size:0.88rem;line-height:1.65;margin-bottom:1rem;color:var(--muted)">${plan.summary}</p>`;

  // Day cards
  (plan.days || []).forEach(d => {
    html += `<div style="background:var(--s1);border:1px solid var(--border2);border-radius:12px;padding:0.85rem 1rem;margin-bottom:0.5rem">
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.4rem">
        <div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--green));display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;color:#fff;flex-shrink:0">${d.day}</div>
        <strong style="font-size:0.88rem">${d.label || 'Day ' + d.day}</strong>
        <span style="margin-left:auto;font-size:0.75rem;color:var(--muted)">⏱ ${d.mins || 45} mins</span>
      </div>
      <div style="font-size:0.83rem;color:var(--blue);font-weight:600;margin-bottom:0.3rem;padding-left:2rem">${d.focus}</div>
      <div style="font-size:0.8rem;color:var(--muted);padding-left:2rem;line-height:1.65">${(d.tasks||[]).map(t => '• ' + t).join('<br>')}</div>
    </div>`;
  });

  if (plan.dayBefore) {
    html += `<div style="background:rgba(255,217,61,0.06);border:1px solid rgba(255,217,61,0.25);border-radius:12px;padding:0.85rem 1rem;margin-bottom:0.5rem">
      <div style="font-weight:700;color:var(--yellow);margin-bottom:0.35rem">🌙 Night before</div>
      <div style="font-size:0.83rem;color:var(--muted)">${(plan.dayBefore.tasks||[]).map(t => '• ' + t).join('<br>')}</div>
    </div>`;
  }

  if (plan.quickWins?.length) {
    html += `<div class="tips-box" style="margin-top:0.75rem">
      <h4>⚡ Quick wins — do these first</h4>
      <ul>${plan.quickWins.map(q => `<li>${q}</li>`).join('')}</ul>
    </div>`;
  }

  html += `<div style="display:flex;gap:0.55rem;flex-wrap:wrap;margin-top:1rem">
    <button class="btn pri" onclick="showTopics()">🧠 Start revising</button>
    <button class="btn" onclick="showHome()">🏠 Home</button>
  </div></div>`;

  document.getElementById('main').innerHTML = html;
}

// ── FULL COMBINED TIMETABLE ────────────────────────────────────
function showFullTimetable() {
  if (!_scheduleTests.length) { App.toast('No tests loaded yet'); return; }

  document.getElementById('main').innerHTML = `
    <div style="text-align:center;padding:3rem 1rem">
      <div style="font-size:2rem;margin-bottom:0.75rem">📅</div>
      <p style="color:var(--muted)">Building your combined revision plan…</p>
    </div>`;

  const testList = _scheduleTests
    .map(t => `${t.subject}${t.topic ? ' — ' + t.topic : ''} in ${t.days} day${t.days !== 1 ? 's' : ''}`)
    .join('; ');

  AI.call(
    `You are a GCSE revision tutor. Create a combined day-by-day revision plan covering multiple upcoming tests. Return ONLY valid JSON, no markdown:
{"intro":"2 sentence encouraging overview","days":[{"day":1,"label":"e.g. Mon 13 Jan","subjects":["Biology"],"focus":"what to cover today","tasks":["task","task","task"],"mins":45}],"tests":[{"name":"Biology — digestion","daysAway":3,"nightBefore":{"tasks":["task","task"]}}]}`,
    `Tests coming up: ${testList}. Student is 15. Create a realistic combined study plan spreading subjects across days. Max 3 tasks per day.`,
    2000
  ).then(raw => {
    try {
      const clean = raw.trim().replace(/^```(?:json)?\s*/i,'').replace(/\s*```\s*$/i,'').trim();
      _renderFullTimetable(JSON.parse(clean));
    } catch {
      document.getElementById('main').innerHTML = `
        <div class="empty-state">
          <p>Couldn't build the combined plan. <button class="btn" onclick="showTestPrep()">Back</button></p>
        </div>`;
    }
  }).catch(() => {
    document.getElementById('main').innerHTML = `
      <div class="empty-state">
        <p>Something went wrong. <button class="btn" onclick="showTestPrep()">Back</button></p>
      </div>`;
  });
}

function _renderFullTimetable(plan) {
  let html = `
    <div style="max-width:680px">
      <div class="topic-header">
        <button class="back-btn" onclick="showTestPrep()">← Test prep</button>
        <h2>📅 Your revision plan</h2>
      </div>
      <p style="font-size:0.88rem;line-height:1.65;margin-bottom:1rem;color:var(--muted)">${plan.intro}</p>`;

  (plan.days || []).forEach(d => {
    const chips = (d.subjects || []).map(s => `<span class="chip chip-blue" style="font-size:0.7rem">${s}</span>`).join('');
    html += `<div style="background:var(--s1);border:1px solid var(--border2);border-radius:12px;padding:0.85rem 1rem;margin-bottom:0.5rem">
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.35rem">
        <div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--green));display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;color:#fff;flex-shrink:0">${d.day}</div>
        <strong style="font-size:0.88rem">${d.label || 'Day ' + d.day}</strong>
        <span style="font-size:0.72rem;color:var(--muted);margin-left:auto">⏱ ${d.mins || 45} mins</span>
      </div>
      ${chips ? `<div style="padding-left:2rem;margin-bottom:0.3rem;display:flex;gap:0.3rem;flex-wrap:wrap">${chips}</div>` : ''}
      <div style="font-size:0.83rem;color:var(--blue);font-weight:600;margin-bottom:0.3rem;padding-left:2rem">${d.focus}</div>
      <div style="font-size:0.8rem;color:var(--muted);padding-left:2rem;line-height:1.65">${(d.tasks||[]).map(t => '• ' + t).join('<br>')}</div>
    </div>`;
  });

  if (plan.tests?.length) {
    html += `<div class="section-label" style="margin-top:1rem">Night-before plans</div>`;
    plan.tests.forEach(t => {
      html += `<div style="background:rgba(255,217,61,0.06);border:1px solid rgba(255,217,61,0.25);border-radius:12px;padding:0.85rem 1rem;margin-bottom:0.5rem">
        <div style="font-weight:700;color:var(--yellow);margin-bottom:0.35rem">🌙 Night before: ${t.name}</div>
        <div style="font-size:0.83rem;color:var(--muted)">${(t.nightBefore?.tasks||[]).map(task => '• ' + task).join('<br>')}</div>
      </div>`;
    });
  }

  html += `<div style="display:flex;gap:0.55rem;flex-wrap:wrap;margin-top:1rem">
    <button class="btn pri" onclick="showTopics()">🧠 Start revising</button>
    <button class="btn" onclick="showHome()">🏠 Home</button>
  </div></div>`;

  document.getElementById('main').innerHTML = html;
}

// ── APP HELPERS ────────────────────────────────────────────────
const App = {
  setStage(s) {
    document.getElementById('hdrStage').textContent = s;
  },
  setTopicChip(text) {
    const el = document.getElementById('hdrTopic');
    el.textContent = text; el.style.display = '';
  },
  setScoreChip(text) {
    const el = document.getElementById('hdrScore');
    el.textContent = text; el.style.display = '';
  },
  toast(msg, duration = 2200) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), duration);
  }
};

// ── START ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', boot);
