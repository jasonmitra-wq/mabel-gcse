/* ============================================================
   MATHS-WARMUP.JS — Arithmetic warm-up (once per day)
   5 randomised questions, difficulty calibrated via localStorage.
   No timer. Wrong answers show answer + method, then move on.
   ============================================================ */

const MathsWarmup = (() => {

  const LEVEL_KEY  = 'maths_warmup_level';
  const DATE_KEY   = 'maths_warmup_date';
  const STREAK_KEY = 'maths_warmup_streak';

  // ── Helpers ──────────────────────────────────────────────────

  function _localDate() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  function getLevel() {
    return Store.get(LEVEL_KEY) || 1;
  }

  function _gcd(a, b) {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
    while (b) { const t = b; b = a % b; a = t; }
    return a || 1;
  }

  function _ri(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // ── Difficulty calibration ────────────────────────────────────

  function _updateDifficulty(score) {
    const streak = Store.get(STREAK_KEY) || { consec5: 0, consec2: 0 };
    const level  = getLevel();

    if (score === 5) {
      streak.consec5 = (streak.consec5 || 0) + 1;
      streak.consec2 = 0;
      if (streak.consec5 >= 3) {
        Store.set(LEVEL_KEY, Math.min(5, level + 1));
        streak.consec5 = 0;
      }
    } else if (score <= 2) {
      streak.consec2 = (streak.consec2 || 0) + 1;
      streak.consec5 = 0;
      if (streak.consec2 >= 2) {
        Store.set(LEVEL_KEY, Math.max(1, level - 1));
        streak.consec2 = 0;
      }
    } else {
      streak.consec5 = 0;
      streak.consec2 = 0;
    }

    Store.set(STREAK_KEY, streak);
  }

  // ── Question generators ───────────────────────────────────────
  // Each generator returns: { question, answer, display, hint, type }
  // answer is always numeric (float).
  // display is what to show the user in the "answer was X" line.

  /* ── Level 1-2 (Grade 3-4) ── */
  function _gen1(op) {
    switch (op) {
      case 'add': {
        const a = _ri(15, 79), b = _ri(11, 99 - a);
        return { question: `${a} + ${b}`, answer: a + b, display: String(a + b), type: 'int' };
      }
      case 'sub': {
        const a = _ri(30, 99), b = _ri(5, a - 5);
        return { question: `${a} − ${b}`, answer: a - b, display: String(a - b), type: 'int' };
      }
      case 'mul': {
        const a = _ri(3, 12), b = _ri(6, 24);
        return { question: `${a} × ${b}`, answer: a * b, display: String(a * b), type: 'int' };
      }
      case 'div': {
        const d = _ri(2, 9), r = _ri(4, 14);
        return { question: `${d * r} ÷ ${d}`, answer: r, display: String(r), type: 'int' };
      }
      case 'frac': {
        const pairs = [[3,4],[2,3],[3,5],[4,5],[2,5],[1,4]];
        const [n, d] = pairs[_ri(0, pairs.length - 1)];
        const base   = _ri(2, 8) * d;
        const ans    = (base / d) * n;
        return {
          question: `Find ${n}/${d} of ${base}`,
          answer: ans, display: String(ans),
          hint: `Divide ${base} by ${d}, then multiply by ${n}`,
          type: 'int'
        };
      }
      case 'wildcard': {
        const pcts = [10, 20, 25, 50];
        const pct  = pcts[_ri(0, pcts.length - 1)];
        const base = _ri(2, 20) * 4;
        const ans  = Math.round(base * pct / 100);
        return { question: `${pct}% of ${base}`, answer: ans, display: String(ans), type: 'int' };
      }
    }
  }

  /* ── Level 3-4 (Grade 5-6) ── */
  function _gen3(op) {
    switch (op) {
      case 'add': {
        const a = Math.round(_ri(10, 89) / 10 * 10) / 10;
        const b = Math.round(_ri(10, 89) / 10 * 10) / 10;
        const ans = Math.round((a + b) * 10) / 10;
        return { question: `${a} + ${b}`, answer: ans, display: String(ans), type: 'dec1' };
      }
      case 'sub': {
        const a = (_ri(40, 99)) / 10;
        const b = (_ri(10, Math.floor(a * 10) - 10)) / 10;
        const ans = Math.round((a - b) * 10) / 10;
        return { question: `${a.toFixed(1)} − ${b.toFixed(1)}`, answer: ans, display: ans.toFixed(1), type: 'dec1' };
      }
      case 'mul': {
        // e.g. 2.4 × 0.35
        const a = _ri(12, 39) / 10;
        const b = _ri(12, 48) / 100;
        const ans = Math.round(a * b * 10000) / 10000;
        // Round to 2 dp for cleaner display
        const ans2 = Math.round(ans * 100) / 100;
        return { question: `${a} × ${b}`, answer: ans2, display: ans2.toFixed(2), type: 'dec2' };
      }
      case 'div': {
        const d = _ri(4, 15), r = _ri(4, 20);
        return { question: `${d * r} ÷ ${d}`, answer: r, display: String(r), type: 'int' };
      }
      case 'frac': {
        // 15% of 340-style
        const pcts = [15, 35, 45, 65];
        const pct  = pcts[_ri(0, pcts.length - 1)];
        const base = _ri(2, 14) * 20;
        const ans  = base * pct / 100;
        const ansR = Math.round(ans * 100) / 100;
        return { question: `${pct}% of ${base}`, answer: ansR, display: String(ansR), type: ansR % 1 === 0 ? 'int' : 'dec1' };
      }
      case 'wildcard': {
        // Fraction addition: 1/3 + 1/4 style
        const pairs = [[1,3],[1,4],[1,6],[2,5],[3,8]];
        const [n1, d1] = pairs[_ri(0, pairs.length - 1)];
        const [n2, d2] = pairs[_ri(0, pairs.length - 1)];
        const lcd = (d1 * d2) / _gcd(d1, d2);
        const num = n1 * (lcd / d1) + n2 * (lcd / d2);
        const g   = _gcd(num, lcd);
        const nr  = num / g, dr = lcd / g;
        const ans = nr / dr;
        const display = dr === 1 ? String(nr) : `${nr}/${dr}`;
        return {
          question: `${n1}/${d1} + ${n2}/${d2} — give your answer as a fraction`,
          answer: ans, display, type: 'fraction'
        };
      }
    }
  }

  /* ── Level 5 (Grade 7-8) ── */
  function _gen5(op) {
    switch (op) {
      case 'add': {
        const a = _ri(10, 49) / 10;
        const b = _ri(10, 49) / 100;
        const ans = Math.round((a + b) * 100) / 100;
        return { question: `${a} + ${b}`, answer: ans, display: ans.toFixed(2), type: 'dec2' };
      }
      case 'sub': {
        const a = _ri(50, 99) / 10;
        const b = _ri(10, 49) / 10;
        const ans = Math.round((a - b) * 10) / 10;
        return { question: `${a.toFixed(1)} − ${b.toFixed(1)}`, answer: ans, display: ans.toFixed(1), type: 'dec1' };
      }
      case 'mul': {
        // Powers: e.g. 2³ × 5²
        const opts = [[2,3,5,2],[2,4,3,2],[3,2,2,4],[2,3,3,3],[5,2,2,3]];
        const [b1,e1,b2,e2] = opts[_ri(0, opts.length - 1)];
        const ans = Math.pow(b1,e1) * Math.pow(b2,e2);
        const expStr = n => n === 2 ? '²' : n === 3 ? '³' : n === 4 ? '⁴' : `^${n}`;
        return { question: `${b1}${expStr(e1)} × ${b2}${expStr(e2)}`, answer: ans, display: String(ans), type: 'int' };
      }
      case 'div': {
        // Square root of a perfect decimal square
        const roots = [[1.44,1.2],[2.25,1.5],[3.24,1.8],[4.41,2.1],[5.76,2.4],[6.25,2.5],[7.84,2.8],[9.61,3.1]];
        const [sq, rt] = roots[_ri(0, roots.length - 1)];
        return { question: `√(${sq})`, answer: rt, display: String(rt), type: 'dec1' };
      }
      case 'frac': {
        // Simplest form fraction
        const combos = [[6,4],[9,6],[10,4],[15,9],[8,6],[12,8]];
        const [a, b] = combos[_ri(0, combos.length - 1)];
        const g  = _gcd(a, b);
        const nr = a / g, dr = b / g;
        const display = dr === 1 ? String(nr) : `${nr}/${dr}`;
        return {
          question: `Write ${a}/${b} in its simplest form`,
          answer: nr / dr, display, type: 'fraction'
        };
      }
      case 'wildcard': {
        // BODMAS
        const a = _ri(2, 8), b = _ri(2, 7), c = _ri(3, 12);
        const ans = a + b * c;
        return { question: `${a} + ${b} × ${c}`, answer: ans, display: String(ans), type: 'int' };
      }
    }
  }

  function _generateSet(level) {
    const ops = ['add', 'sub', 'mul', 'div', 'frac', 'wildcard'];
    // Always 5 questions; shuffle slightly so they don't feel templated
    const selected = [
      Math.random() > 0.5 ? 'add' : 'sub',
      'mul',
      'div',
      'frac',
      'wildcard'
    ];

    const gen = level <= 2 ? _gen1 : level <= 4 ? _gen3 : _gen5;
    return selected.map(op => gen(op));
  }

  // ── Tutor voice responses ─────────────────────────────────────
  // Strings live here (not in personality.js as these are maths-specific)

  function _tutorLine(score) {
    if (score === 5) return "Right, brain's working. Let's go.";
    if (score === 4) return "Good warm-up. One slipped — check your working on that one.";
    if (score === 3) return "Not bad — arithmetic is the engine of everything we do in maths. We'll keep chipping away.";
    return "Tricky one today. Don't worry — this is exactly what we're here for. Lesson coming up.";
  }

  // ── Module state ──────────────────────────────────────────────

  let _questions = [];
  let _current   = 0;
  let _score     = 0;
  let _callback  = null;

  // ── Public API ────────────────────────────────────────────────

  function needsWarmup() {
    return Store.get(DATE_KEY) !== _localDate();
  }

  function start(callback) {
    _callback  = callback;
    _questions = _generateSet(getLevel());
    _current   = 0;
    _score     = 0;
    _renderOverlay();
  }

  function submit() {
    const input = document.getElementById('wu-answer-input');
    if (!input) return;
    const raw = input.value.trim();
    if (!raw) return;

    const q       = _questions[_current];
    const correct = _checkAnswer(raw, q);
    if (correct) _score++;

    _showResult(q, correct);

    setTimeout(() => {
      _current++;
      if (_current < 5) _renderOverlay();
      else              _finishScreen();
    }, correct ? 900 : 2400);
  }

  function dismiss() {
    const el = document.getElementById('maths-warmup');
    if (!el) { if (_callback) _callback(); return; }
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.3s';
    setTimeout(() => { el.remove(); if (_callback) _callback(); }, 320);
  }

  // ── Private rendering ─────────────────────────────────────────

  function _renderOverlay() {
    // Remove any existing overlay
    document.getElementById('maths-warmup')?.remove();

    const q   = _questions[_current];
    const pips = [0,1,2,3,4].map(i =>
      `<div style="width:30px;height:5px;border-radius:999px;background:${
        i < _current ? 'var(--green)' : i === _current ? 'var(--amber)' : 'var(--border2)'
      }"></div>`
    ).join('');

    const overlay = document.createElement('div');
    overlay.id = 'maths-warmup';
    overlay.style.cssText = [
      'position:fixed','inset:0','z-index:1000',
      'background:var(--bg)','display:flex','flex-direction:column',
      'align-items:center','justify-content:center',
      'padding:2rem','overflow-y:auto',
    ].join(';');

    overlay.innerHTML = `
      <div style="max-width:480px;width:100%">
        <div style="text-align:center;margin-bottom:1.25rem">
          <div style="font-size:2rem;margin-bottom:0.4rem">🧮</div>
          <h2 style="font-family:'Playfair Display',serif;font-size:1.35rem;margin-bottom:0.25rem;letter-spacing:-0.02em">Quick warm-up</h2>
          <p style="font-size:0.82rem;color:var(--muted)">5 questions · no calculator · question ${_current + 1} of 5</p>
        </div>
        <div style="display:flex;gap:5px;justify-content:center;margin-bottom:1.5rem">${pips}</div>
        <div id="wu-card" style="background:var(--s1);border:1.5px solid var(--border2);border-radius:16px;padding:1.75rem">
          <div style="font-size:1.4rem;font-weight:700;text-align:center;margin-bottom:1.4rem;letter-spacing:-0.02em">${q.question}</div>
          <div style="display:flex;gap:0.5rem;align-items:stretch">
            <input type="text" id="wu-answer-input" placeholder="Your answer…"
              style="flex:1;background:var(--s2);border:1.5px solid var(--border2);color:var(--text);
              font-family:'Inter',sans-serif;font-size:1.05rem;padding:0.65rem 1rem;border-radius:10px;
              outline:none;min-width:0;transition:border-color 0.18s"
              onfocus="this.style.borderColor='var(--amber)'"
              onblur="this.style.borderColor='var(--border2)'"
              onkeydown="if(event.key==='Enter')MathsWarmup.submit()">
            <button onclick="MathsWarmup.submit()"
              style="background:var(--amber);border:none;border-radius:10px;color:#0f0e0c;
              font-family:'Inter',sans-serif;font-size:0.9rem;font-weight:700;
              padding:0.65rem 1.1rem;cursor:pointer;white-space:nowrap;flex-shrink:0">
              Check →
            </button>
          </div>
          ${q.type === 'fraction' ? `<p style="font-size:0.78rem;color:var(--muted);margin-top:0.6rem;text-align:center">Enter as a fraction e.g. 3/4 or as a decimal</p>` : ''}
        </div>
      </div>`;

    document.body.appendChild(overlay);
    setTimeout(() => document.getElementById('wu-answer-input')?.focus(), 60);
  }

  function _showResult(q, correct) {
    const card = document.getElementById('wu-card');
    if (!card) return;

    if (correct) {
      card.innerHTML = `
        <div style="text-align:center">
          <div style="font-size:2rem;margin-bottom:0.4rem">✅</div>
          <div style="font-size:1.25rem;font-weight:700;margin-bottom:0.3rem">${q.question}</div>
          <div style="color:var(--green);font-size:0.9rem;font-weight:500">Correct — <strong>${q.display}</strong></div>
        </div>`;
    } else {
      card.innerHTML = `
        <div style="text-align:center">
          <div style="font-size:2rem;margin-bottom:0.4rem">❌</div>
          <div style="font-size:1.25rem;font-weight:700;margin-bottom:0.5rem">${q.question}</div>
          <div style="background:var(--s2);border-radius:10px;padding:0.85rem 1rem;text-align:left;margin-bottom:0.5rem">
            <div style="font-size:0.8rem;color:var(--muted);margin-bottom:0.2rem;font-weight:600;letter-spacing:0.05em;text-transform:uppercase">Answer</div>
            <div style="font-size:1.05rem;font-weight:600;color:var(--text)">${q.display}</div>
            ${q.hint ? `<div style="font-size:0.82rem;color:var(--muted);margin-top:0.4rem">${q.hint}</div>` : ''}
          </div>
          <p style="font-size:0.78rem;color:var(--muted)">Warm-up isn't a test — just getting the engine running.</p>
        </div>`;
    }
  }

  function _finishScreen() {
    _updateDifficulty(_score);
    Store.set(DATE_KEY, _localDate());

    // Store warmup score on session data
    Store.set('maths_warmup_today', { score: _score, level: getLevel(), date: _localDate() });

    const overlay = document.getElementById('maths-warmup');
    if (!overlay) { if (_callback) _callback(); return; }

    const pips = [0,1,2,3,4].map(() =>
      `<div style="width:30px;height:5px;border-radius:999px;background:var(--green)"></div>`
    ).join('');

    const icon = _score >= 5 ? '🎯' : _score >= 4 ? '👍' : _score >= 3 ? '💪' : '🤔';

    overlay.querySelector('div').innerHTML = `
      <div style="text-align:center;max-width:420px;margin:0 auto">
        <div style="display:flex;gap:5px;justify-content:center;margin-bottom:1.5rem">${pips}</div>
        <div style="font-size:2.5rem;margin-bottom:0.6rem">${icon}</div>
        <div style="font-family:'Playfair Display',serif;font-size:1.65rem;font-weight:800;
          letter-spacing:-0.02em;margin-bottom:0.4rem">${_score} out of 5</div>
        <p style="font-size:0.9rem;color:var(--muted);line-height:1.7;max-width:340px;margin:0 auto 1.75rem">
          ${_tutorLine(_score)}
        </p>
        <button onclick="MathsWarmup.dismiss()"
          style="width:100%;max-width:260px;background:var(--amber);border:none;border-radius:12px;
          color:#0f0e0c;font-family:'Inter',sans-serif;font-size:1rem;font-weight:700;
          padding:0.8rem 1.5rem;cursor:pointer">
          Let's go →
        </button>
      </div>`;
  }

  // ── Answer checking ───────────────────────────────────────────

  function _checkAnswer(raw, q) {
    const str = raw.trim();

    // Fraction type: accept display form or numeric
    if (q.type === 'fraction') {
      if (str === q.display) return true;
      // Accept decimal equivalent
      const num = parseFloat(str);
      return !isNaN(num) && Math.abs(num - q.answer) < 0.005;
    }

    // Numeric types
    const num = parseFloat(str.replace(',', ''));
    if (isNaN(num)) return false;

    const tol = q.type === 'dec2' ? 0.005 : q.type === 'dec1' ? 0.005 : 0;
    return Math.abs(num - q.answer) <= tol;
  }

  return { start, submit, dismiss, needsWarmup, getLevel };

})();
