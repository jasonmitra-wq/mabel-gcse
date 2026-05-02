/* ============================================================
   APP.JS — Main controller: home, routing, dashboard, AI calls
   ============================================================ */

// ── AI API ────────────────────────────────────────────────────
const AI = (() => {
  let _queue = Promise.resolve();

  async function _call(sys, user, tokens, attempt = 0) {
    const MAX = 4;
    try {
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: tokens || 2000,
          system: sys,
          messages: [{ role: 'user', content: user }]
        })
      });

      if ((resp.status === 429 || resp.status === 529) && attempt < MAX) {
        await new Promise(r => setTimeout(r, 4000 * Math.pow(2, attempt)));
        return _call(sys, user, tokens, attempt + 1);
      }
      if (!resp.ok) throw new Error(resp.status);

      const data = await resp.json();
      await new Promise(r => setTimeout(r, 600)); // breathing room between calls
      return data.content.filter(b => b.type === 'text').map(b => b.text).join('');
    } catch(e) {
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

  return { call };
})();

// ── State ──────────────────────────────────────────────────────
let _syllabus = null;
let _progress = null;

// ── Boot ───────────────────────────────────────────────────────
async function boot() {
  _progress = Store.getProgress();

  // Load syllabus
  try {
    const res  = await fetch('data/syllabus.json');
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

  // Check for last position
  const last = _progress.lastPosition;
  if (last?.subtopicId) {
    showHome(true);
  } else {
    showHome(false);
  }
}

// ── HOME ───────────────────────────────────────────────────────
function showHome(hasSaved) {
  _progress = Store.getProgress();
  const last = _progress.lastPosition;
  const coveredCount = Object.keys(_progress.covered || {}).length;
  const deckSize = Store.getDeck().length;

  App.setStage('Home');
  document.getElementById('hdrTopic').style.display = 'none';
  document.getElementById('hdrScore').style.display = 'none';

  // Close panels
  document.getElementById('lessonPanel').classList.remove('open');
  document.getElementById('qPanel').classList.remove('open');

  const main = document.getElementById('main');
  main.innerHTML = `
    <div class="home-hero">
      <h1>Mabel's Biology Tutor</h1>
      <p>AQA GCSE Separate Science · Paper 1 — B1 to B4 fully covered</p>
    </div>
    <div class="mode-grid" id="modeGrid"></div>`;

  const grid = document.getElementById('modeGrid');

  // Continue card (if last position saved)
  if (last?.subtopicId && last?.subtopicName) {
    const cont = _modeCard('▶️', 'Continue', last.subtopicName, 'continue', () => {
      Lessons.open(last.subtopicId, last.subtopicName, last.topicCode);
    });
    cont.className = 'mode-card continue';
    grid.appendChild(cont);
  }

  const modes = [
    { icon: '🧠', title: 'Revise',    sub: 'Pick a topic',                  fn: showTopics },
    { icon: '🎯', title: 'Test prep', sub: 'Focused countdown revision',     fn: showTestPrep },
    { icon: '📊', title: `Dashboard${coveredCount > 0 ? ' · '+coveredCount+' done' : ''}`, sub: 'Progress & scores', fn: showDashboard },
    { icon: '🃏', title: `Card deck${deckSize > 0 ? ' · '+deckSize : ''}`,   sub: 'Drill your saved cards',        fn: showCardDeck },
  ];

  modes.forEach(m => {
    grid.appendChild(_modeCard(m.icon, m.title, m.sub, '', m.fn));
  });
}

function _modeCard(icon, title, sub, extraClass, fn) {
  const card = document.createElement('div');
  card.className = `mode-card ${extraClass}`;
  card.innerHTML = `<span class="mc-icon">${icon}</span><div class="mc-title">${title}</div><div class="mc-sub">${sub}</div>`;
  card.onclick = fn;
  return card;
}

// ── TOPIC BROWSER ──────────────────────────────────────────────
function showTopics() {
  App.setStage('Topics');
  _progress = Store.getProgress();

  const main = document.getElementById('main');
  main.innerHTML = `
    <div class="topic-header">
      <button class="back-btn" onclick="showHome()">← Home</button>
      <h2>🧬 AQA Biology</h2>
    </div>
    <div id="topicList"></div>`;

  const list = document.getElementById('topicList');
  const topics = _syllabus?.topics || {};

  Object.entries(topics).forEach(([code, t]) => {
    const subtopics = t.subtopics || [];
    const total     = subtopics.length;
    const done      = subtopics.filter(st => _progress.covered[st.id]).length;
    const pct       = total ? Math.round((done / total) * 100) : 0;
    const avail     = t.available !== false;

    const card = document.createElement('div');
    card.className = `topic-card ${avail ? '' : 'unavailable'}`;
    card.innerHTML = `
      <div class="tc-icon">${t.icon}</div>
      <div class="tc-body">
        <div class="tc-name">${t.name}</div>
        <div class="tc-code">${code} · AQA Paper ${t.paper}</div>
      </div>
      <div class="tc-right">
        ${avail ? `
          <div class="tc-prog">${done}/${total}</div>
          <div class="prog-bar"><div class="prog-fill" style="width:${pct}%"></div></div>
        ` : `<span class="chip chip-gold">Coming soon</span>`}
      </div>`;

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

  const list = document.getElementById('subtopicList');
  const subtopics = topicData.subtopics || [];

  subtopics.forEach(st => {
    const done  = !!_progress.covered[st.id];
    const avail = st.available !== false;

    const card = document.createElement('div');
    card.className = `subtopic-card ${done ? 'done' : ''} ${avail ? '' : 'unavailable'}`;

    let chipHtml = '';
    if (!avail)  chipHtml = `<span class="st-chip" style="background:rgba(255,217,61,0.1);color:var(--yellow);border:1px solid rgba(255,217,61,0.3)">Soon</span>`;
    else if (done) chipHtml = `<span class="st-chip" style="background:rgba(107,203,119,0.1);color:var(--green);border:1px solid rgba(107,203,119,0.3)">✓ Done</span>`;

    card.innerHTML = `
      <div class="st-check">${done ? '✅' : '○'}</div>
      <div class="st-name">${st.name}</div>
      ${chipHtml}`;

    if (avail) {
      card.onclick = () => {
        App.setTopicChip(`${topicCode}: ${topicData.name}`);
        Lessons.open(st.id, st.name, topicCode);
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
  if (profile.summary || profile.liked?.length > 0) {
    html += `<div class="dash-section"><h3>Your learning profile</h3>
      <div style="background:rgba(77,150,255,0.06);border:1px solid rgba(77,150,255,0.2);border-radius:12px;padding:0.85rem 1rem;font-size:0.84rem;line-height:1.6">
        ${profile.summary || `${profile.liked?.length || 0} lessons rated. Keep going — your profile builds up over time.`}
        <p style="font-size:0.75rem;color:var(--muted);margin-top:0.4rem">This adapts how your questions are generated.</p>
      </div>
    </div>`;
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

// ── CARD DECK WRAPPER ──────────────────────────────────────────
function showCardDeck() {
  App.setStage('Cards');
  document.getElementById('lessonPanel').classList.remove('open');
  document.getElementById('qPanel').classList.remove('open');
  Cards.showDeck();
}

// ── TEST PREP ──────────────────────────────────────────────────
function showTestPrep() {
  App.setStage('Test prep');
  document.getElementById('main').innerHTML = `
    <div style="max-width:600px">
      <div class="topic-header">
        <button class="back-btn" onclick="showHome()">← Home</button>
        <h2>🎯 Test prep</h2>
      </div>
      <div style="background:var(--s1);border:1px solid var(--border2);border-radius:14px;padding:1.25rem 1.3rem">
        <p style="font-size:0.9rem;margin-bottom:1rem">Tell me about your upcoming test and I'll build you a focused revision plan.</p>
        <div style="display:flex;flex-direction:column;gap:0.5rem;margin-bottom:1rem">
          <input id="testSubject" type="text" placeholder="Subject (e.g. Biology)" value="Biology"
            style="background:var(--s2);border:1.5px solid var(--border2);color:var(--text);font-family:'DM Sans',sans-serif;font-size:0.88rem;padding:0.6rem 0.85rem;border-radius:8px;outline:none">
          <input id="testTopic" type="text" placeholder="Topic (e.g. B2 Organisation)"
            style="background:var(--s2);border:1.5px solid var(--border2);color:var(--text);font-family:'DM Sans',sans-serif;font-size:0.88rem;padding:0.6rem 0.85rem;border-radius:8px;outline:none">
          <input id="testDate" type="date"
            style="background:var(--s2);border:1.5px solid var(--border2);color:var(--text);font-family:'DM Sans',sans-serif;font-size:0.88rem;padding:0.6rem 0.85rem;border-radius:8px;outline:none">
        </div>
        <button class="btn pri full" onclick="_buildTestPlan()">📋 Build revision plan</button>
      </div>
    </div>`;
}

async function _buildTestPlan() {
  const subject = document.getElementById('testSubject')?.value || 'Biology';
  const topic   = document.getElementById('testTopic')?.value || 'General';
  const dateVal = document.getElementById('testDate')?.value;

  let daysUntil = null;
  if (dateVal) {
    const testDate = new Date(dateVal);
    const today    = new Date(); today.setHours(0,0,0,0);
    daysUntil = Math.ceil((testDate - today) / (1000 * 60 * 60 * 24));
  }

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
    html += `<div style="background:rgba(255,107,107,0.06);border:1px solid rgba(255,107,107,0.2);border-radius:12px;padding:0.85rem 1rem;margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem">
      <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:800;color:${urgency}">${daysUntil}</div>
      <div><div style="font-weight:600">day${daysUntil!==1?'s':''} until your test</div>
      <div style="font-size:0.78rem;color:var(--muted)">${daysUntil <= 3 ? '🚨 Crunch time' : daysUntil <= 7 ? '⚡ Coming up fast' : '✅ Good time to prepare'}</div></div>
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
