/* ============================================================
   PILOT / PILOT.JS — the evidence layer's screens (brief
   docs/briefs/2026-10-19-evidence-layer.md, steps 4 and 5). Browser only.

   On the Electricity topic page: "Quick check before you start", the two
   post-tests, the delayed test (it unlocks a week after both post-tests)
   and "My record". Before the first pilot lesson, if she has not done the
   quick check, it is offered first. After the quick check, each lesson opens
   with what it showed: what she already knows and the recaps she needs.
   At the end of each lesson: "More practice" links and the post-test.
   Questions and marking: js/pilot/tests.js. Her record: js/pilot/record.js.
   ============================================================ */
const Pilot = (() => {
  const T = PilotTests;
  const LESSON_IDS = [T.LESSONS.cv, T.LESSONS.comp];
  const POST = { [T.LESSONS.cv]: 'post-cv', [T.LESSONS.comp]: 'post-comp' };
  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  let _active = false;      // a test is on screen: no popups
  const css = `
    .pl-wrap { max-width:640px; margin:0 auto; padding:0.75rem 0 2rem; }
    .pl-card { background:var(--s2); border:1px solid var(--border2); border-radius:12px; padding:0.9rem 1rem; margin:0.6rem 0; }
    .pl-title { font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--amber); margin-bottom:0.35rem; }
    .pl-row { display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:0.6rem; }
    .pl-opts { display:flex; flex-direction:column; gap:0.45rem; margin-top:0.6rem; }
    .pl-opts .btn { text-align:left; white-space:normal; }
    .pl-opts .btn.on { border-color:var(--amber); color:var(--amber); }
    .pl-num { display:flex; flex-direction:column; gap:0.2rem; margin-top:0.6rem; }
    .pl-num input { font:inherit; padding:0.5rem 0.6rem; border-radius:8px; border:1px solid var(--border2); background:var(--bg); color:var(--text); max-width:16rem; }
    .pl-muted { color:var(--muted); font-size:0.9rem; }
    .pl-list { margin:0.3rem 0 0; padding-left:1.1rem; line-height:1.6; }
    .pl-graph { display:block; width:100%; max-width:420px; height:auto; margin:0.6rem 0; }
    .pl-table { width:100%; border-collapse:collapse; font-size:0.85rem; margin-top:0.4rem; }
    .pl-table td, .pl-table th { border-bottom:1px solid var(--border2); padding:0.3rem 0.35rem; text-align:left; vertical-align:top; }
    .pl-topic { margin:0 0 1rem; padding-bottom:0.9rem; border-bottom:1px solid var(--border2); }
    .pl-topic .subtopic-card { cursor:pointer; }
    .pl-card a { color:var(--teal); text-decoration:underline; }`;
  function _style() {
    if (document.getElementById('plStyles')) return;
    const el = document.createElement('style'); el.id = 'plStyles'; el.textContent = css; document.head.appendChild(el);
  }

  // ── Status ──
  const done = id => !!Record.test(id);
  const finishedLesson = id => !!(Store.hasFinished && Store.hasFinished(id));
  function delayedOpensAt() {
    const a = Record.test('post-cv'), b = Record.test('post-comp');
    if (!a || !b) return null;
    const last = Math.max(Date.parse(a.done), Date.parse(b.done));
    return new Date(last + T.CRITERIA.delayedAfterDays * 24 * 3600 * 1000);
  }
  const fmtDate = d => d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });

  // ── The Electricity topic page: the pilot cards above the lessons ──
  function topicCards(listEl, topicCode, subject) {
    if (subject !== 'physics' || topicCode !== 'P2' || !listEl) return;
    _style();
    const box = document.createElement('div');
    box.className = 'pl-topic';
    const card = (icon, name, chip, onclick, muted) => {
      const c = document.createElement('div');
      c.className = `subtopic-card${muted ? ' unavailable' : ''}`;
      c.innerHTML = `<div class="st-check">${icon}</div><div class="st-name" style="flex:1">${esc(name)}</div>${chip ? `<span class="st-chip" style="background:rgba(160,160,180,0.1);color:var(--muted);border:1px solid var(--border2)">${esc(chip)}</span>` : ''}`;
      if (onclick) c.onclick = onclick;
      box.appendChild(c);
    };
    const opens = delayedOpensAt();
    card(done('diagnostic') ? '✅' : '○', 'Quick check before you start', done('diagnostic') ? 'Done: see what it showed' : 'About 10 minutes', () => (done('diagnostic') ? showResult('diagnostic') : run('diagnostic')));
    for (const [lid, tid] of Object.entries(POST)) {
      const t = T.TESTS[tid];
      if (done(tid)) card('✅', t.name, 'Done', () => showResult(tid));
      else if (finishedLesson(lid)) card('○', t.name, 'Ready', () => run(tid));
      else card('○', t.name, 'After the lesson', null, true);
    }
    if (done('delayed')) card('✅', T.TESTS.delayed.name, 'Done', () => showResult('delayed'));
    else if (opens && Date.now() >= opens.getTime()) card('○', T.TESTS.delayed.name, 'Ready', () => run('delayed'));
    else card('○', T.TESTS.delayed.name, opens ? `Opens ${fmtDate(opens)}` : 'A week after both post-tests', null, true);
    card('📒', 'My record', 'What the app keeps', () => showRecord());
    listEl.prepend(box);
  }

  // ── Before a pilot lesson: the quick check first; then what it showed ──
  // Returns true when it put a card on screen (go() runs from the card).
  function gate(lessonId, go) {
    if (!LESSON_IDS.includes(lessonId)) return false;
    _style();
    const inner = document.getElementById('lessonInner');
    if (!inner) return false;
    if (!done('diagnostic') && !sessionStorage.getItem('pl_notnow')) {
      window._plGo = go;
      inner.innerHTML = `<div class="pl-wrap"><div style="padding-top:0.25rem"><button class="back-btn" onclick="Lessons.close()">← Topics</button></div>
        <div class="pl-card"><div class="pl-title">Before your first Electricity lesson</div>
          <h3 style="margin:0.2rem 0 0.4rem">Quick check before you start</h3>
          <p style="margin:0">15 short questions, about 10 minutes. It shows what you already know and what the lessons will work on, so they can skip what you have and recap what you need. It is not a test you can fail.</p>
          <div class="pl-row"><button class="btn pri" onclick="Lessons.close();Pilot.run('diagnostic')">Start the quick check</button>
          <button class="btn" onclick="try{sessionStorage.setItem('pl_notnow','1')}catch(e){};window._plGo&&window._plGo()">Not now: go to the lesson</button></div></div></div>`;
      return true;
    }
    const d = Record.test('diagnostic');
    const p = d ? T.plan(d.score, lessonId) : null;
    const seenKey = `pl_plan_${lessonId}`;
    if (p && (p.recaps.length || p.known.length) && !Store.get(seenKey)) {
      Store.set(seenKey, true);
      window._plGo = go;
      inner.innerHTML = `<div class="pl-wrap"><div style="padding-top:0.25rem"><button class="back-btn" onclick="Lessons.close()">← Topics</button></div>
        <div class="pl-card"><div class="pl-title">From your quick check</div>
          ${p.known.length ? `<p style="margin:0.2rem 0 0"><strong>You already know:</strong></p><ul class="pl-list">${p.known.map(k => `<li>${esc(k.label)}</li>`).join('')}</ul>` : ''}
          ${(() => { const kps = [...new Set(p.known.filter(k => k.kind === 'exam').map(k => k.kp + 1))].sort((a, b) => a - b); return kps.length ? `<p class="pl-muted" style="margin:0.4rem 0 0">You can go quickly through key point${kps.length > 1 ? 's' : ''} ${kps.join(' and ')}.</p>` : ''; })()}
          ${p.recaps.length ? `<p style="margin:0.6rem 0 0"><strong>A quick recap first:</strong></p>${p.recaps.map(r => `<p style="margin:0.35rem 0 0">${esc(r.text)}</p>`).join('')}` : ''}
          ${p.work.filter(w => w.kind === 'mis').length ? `<p style="margin:0.6rem 0 0"><strong>Watch for these in the lesson:</strong> the "Predict first" questions on ${p.work.filter(w => w.kind === 'mis').map(w => esc(w.label.toLowerCase())).join('; ')}.</p>` : ''}
          <div class="pl-row"><button class="btn pri" onclick="window._plGo&&window._plGo()">Start the lesson</button></div></div></div>`;
      return true;
    }
    return false;
  }
  // On a slide: a note when the quick check showed she can already do this key point.
  function knownNote(lessonId, kp) {
    const d = Record.test('diagnostic');
    const p = d ? T.plan(d.score, lessonId) : null;
    const k = p ? p.known.filter(x => x.kp === kp && x.kind === 'exam') : [];
    return k.length ? `<p class="pl-muted" style="margin:0.4rem 0">Your quick check showed you can already do this (${esc(k.map(x => x.label.toLowerCase()).join('; '))}). Go through it quickly, or try the worked example.</p>` : '';
  }

  // ── A test ──
  let _run = null;
  function run(testId) {
    _style();
    const t = T.TESTS[testId];
    if (!t) return;
    if (typeof Lessons !== 'undefined' && document.getElementById('lessonPanel')?.classList.contains('open')) Lessons.close();
    _active = true;
    document.getElementById('personalityToast')?.remove(); document.getElementById('personalityModal')?.remove();
    _run = { testId, k: 0, answers: {}, dontKnow: [], started: new Date().toISOString() };
    if (typeof App !== 'undefined' && App.setStage) App.setStage('Topics');
    _question();
  }
  function _graphSvg(g) {
    const W = 360, H = 250, x0 = 52, x1 = 344, y0 = 16, y1 = 206;
    const X = v => x0 + (x1 - x0) * v / g.x.max, Y = v => y1 - (y1 - y0) * v / g.y.max;
    let grid = '';
    for (let v = 0; v <= g.x.max + 1e-9; v += g.x.step) grid += `<line x1="${X(v)}" y1="${y0}" x2="${X(v)}" y2="${y1}" stroke="rgba(245,240,232,0.15)"/><text x="${X(v)}" y="${y1 + 15}" text-anchor="middle" font-size="11" fill="rgba(245,240,232,0.8)">${+v.toFixed(2)}</text>`;
    for (let v = 0; v <= g.y.max + 1e-9; v += g.y.step) grid += `<line x1="${x0}" y1="${Y(v)}" x2="${x1}" y2="${Y(v)}" stroke="rgba(245,240,232,0.15)"/><text x="${x0 - 5}" y="${Y(v) + 4}" text-anchor="end" font-size="11" fill="rgba(245,240,232,0.8)">${+v.toFixed(2)}</text>`;
    const P = g.points.map(([a, b]) => [X(a), Y(b)]);
    let d = `M${P[0][0].toFixed(1)} ${P[0][1].toFixed(1)}`;
    if (g.smooth) for (let i = 0; i < P.length - 1; i++) {
      const p0 = P[i - 1] || P[i], p1 = P[i], p2 = P[i + 1], p3 = P[i + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
    } else for (let i = 1; i < P.length; i++) d += ` L${P[i][0].toFixed(1)} ${P[i][1].toFixed(1)}`;
    const mark = g.mark ? `<circle cx="${X(g.mark[0])}" cy="${Y(g.mark[1])}" r="6" fill="#e8a040"/>` : '';
    return `<svg class="pl-graph" viewBox="0 0 ${W} ${H}" role="img" aria-label="A graph of ${esc(g.y.label)} against ${esc(g.x.label)}">
      <rect width="${W}" height="${H}" fill="#0f0e0c" rx="8"/>${grid}
      <line x1="${x0}" y1="${y1}" x2="${x1}" y2="${y1}" stroke="rgba(245,240,232,0.8)" stroke-width="2"/><line x1="${x0}" y1="${y1}" x2="${x0}" y2="${y0}" stroke="rgba(245,240,232,0.8)" stroke-width="2"/>
      <path d="${d}" fill="none" stroke="#4ecfaa" stroke-width="3"/>${mark}
      <text x="${(x0 + x1) / 2}" y="${H - 4}" text-anchor="middle" font-size="12" fill="rgba(245,240,232,0.9)">${esc(g.x.label)}</text>
      <text x="12" y="${(y0 + y1) / 2}" text-anchor="middle" font-size="12" fill="rgba(245,240,232,0.9)" transform="rotate(-90 12 ${(y0 + y1) / 2})">${esc(g.y.label)}</text></svg>`;
  }
  function _question() {
    const t = T.TESTS[_run.testId], it = t.items[_run.k];
    const main = document.getElementById('main');
    const n = t.items.length;
    let body = '';
    if (it.options) body = `<div class="pl-opts">${it.options.map((o, j) => `<button class="btn" data-o="${j}">${esc(o.text)}</button>`).join('')}</div>`;
    if (it.parts) body = it.parts.map((p, j) => `<p style="margin:0.7rem 0 0">${esc(p.label)}</p><div class="pl-opts" data-p="${j}">${p.options.map((o, m) => `<button class="btn" data-po="${m}">${esc(o)}</button>`).join('')}</div>`).join('');
    if (it.nums) body = it.nums.map(x => `<label class="pl-num"><span>${esc(x.label)} (${esc(x.unit)})</span><input inputmode="decimal" data-k="${esc(x.key)}" autocomplete="off"></label>`).join('');
    main.innerHTML = `<div class="pl-wrap">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem"><span class="pl-muted">${esc(t.name)}</span><span class="pl-muted">${_run.k + 1} of ${n}</span></div>
      <div style="height:6px;background:rgba(255,255,255,0.1);border-radius:3px;margin:0.4rem 0 0.2rem"><div style="height:100%;width:${Math.round(100 * _run.k / n)}%;background:var(--amber);border-radius:3px"></div></div>
      <div class="pl-card"><p style="margin:0;line-height:1.6">${esc(it.question)}</p>${it.graph ? _graphSvg(it.graph) : ''}${body}</div>
      <div class="pl-row" style="justify-content:space-between"><button class="btn" data-dk>I don't know</button><button class="btn pri" data-next>${_run.k + 1 < n ? 'Next' : 'Finish'}</button></div></div>`;
    const resp = { o: null, p: (it.parts || []).map(() => null) };
    main.querySelectorAll('[data-o]').forEach(b => b.onclick = () => { resp.o = Number(b.dataset.o); main.querySelectorAll('[data-o]').forEach(x => x.classList.toggle('on', x === b)); });
    main.querySelectorAll('[data-p]').forEach(g => g.querySelectorAll('[data-po]').forEach(b => b.onclick = () => { resp.p[Number(g.dataset.p)] = Number(b.dataset.po); g.querySelectorAll('[data-po]').forEach(x => x.classList.toggle('on', x === b)); }));
    const collect = () => {
      if (it.options) return resp.o;
      if (it.parts) return resp.p;
      return Object.fromEntries([...main.querySelectorAll('[data-k]')].map(i => [i.dataset.k, i.value]));
    };
    main.querySelector('[data-next]').onclick = () => { _run.answers[it.id] = collect(); _advance(); };
    main.querySelector('[data-dk]').onclick = () => { _run.answers[it.id] = it.nums ? {} : it.parts ? [] : null; _run.dontKnow.push(it.id); _advance(); };
    window.scrollTo(0, 0);
  }
  function _advance() {
    const t = T.TESTS[_run.testId];
    _run.k++;
    if (_run.k < t.items.length) { _question(); return; }
    const score = T.score(_run.testId, _run.answers);
    Record.saveTest(_run.testId, _run.answers, score, _run.started, _run.dontKnow);
    _active = false;
    showResult(_run.testId);
  }

  // ── Results: what it showed (no answers shown, so the later tests still measure) ──
  function showResult(testId) {
    _style();
    const r = Record.test(testId), t = T.TESTS[testId];
    const main = document.getElementById('main');
    if (!r) { run(testId); return; }
    const s = r.score;
    const label = id => (t.items.find(i => i.id === id) || {}).label || id;
    const right = s.per.filter(x => x.right), wrong = s.per.filter(x => !x.right);
    const uniq = list => [...new Set(list)];
    let html = '';
    if (testId === 'diagnostic') {
      html = `<div class="pl-card"><div class="pl-title">Your quick check</div>
        <p style="margin:0.2rem 0 0"><strong>What you already know</strong></p>
        ${right.length ? `<ul class="pl-list">${uniq(right.map(x => label(x.id))).map(l => `<li>${esc(l)}</li>`).join('')}</ul>` : '<p class="pl-muted" style="margin:0.2rem 0 0">Nothing yet, which is fine: the lessons start from the beginning.</p>'}
        <p style="margin:0.8rem 0 0"><strong>What we'll work on</strong></p>
        ${wrong.length ? `<ul class="pl-list">${uniq(wrong.map(x => label(x.id))).map(l => `<li>${esc(l)}</li>`).join('')}</ul>` : '<p class="pl-muted" style="margin:0.2rem 0 0">You got everything: the lessons will go quickly.</p>'}
        <p class="pl-muted" style="margin:0.8rem 0 0">The lessons use this: they recap what you need and tell you where you can go quickly. The answers are not shown here, because the same kind of questions come back later to see what you have learned.</p></div>`;
    } else {
      html = `<div class="pl-card"><div class="pl-title">${esc(t.name)}</div>
        <p style="margin:0.2rem 0 0;font-size:1.1rem">You scored <strong>${s.exam.marks} out of ${s.exam.max}</strong> marks on the exam-style questions (${s.examPct}%).</p>
        <p class="pl-muted" style="margin:0.3rem 0 0">Plus ${s.misRight} of ${s.misCount} on the "what really happens" questions.</p>
        ${wrong.length ? `<p style="margin:0.8rem 0 0"><strong>Worth another look</strong></p><ul class="pl-list">${uniq(wrong.map(x => label(x.id))).map(l => `<li>${esc(l)}</li>`).join('')}</ul>` : ''}
        <p class="pl-muted" style="margin:0.8rem 0 0">The answers are not shown here, so that the delayed test still shows what has stuck.</p></div>`;
    }
    main.innerHTML = `<div class="pl-wrap"><button class="back-btn" onclick="Pilot.backToTopic()">← Electricity</button>${html}
      <div class="pl-row"><button class="btn pri" onclick="Pilot.backToTopic()">Back to Electricity</button><button class="btn" onclick="Pilot.showRecord()">My record</button></div></div>`;
    window.scrollTo(0, 0);
  }
  function backToTopic() {
    _active = false;
    // app.js keeps the open subject's syllabus in _syllabus; load physics if another subject is open.
    try {
      if (typeof _activeSubject !== 'undefined' && _activeSubject === 'physics' && _syllabus && _syllabus.topics && _syllabus.topics.P2) { showSubtopics('P2', _syllabus.topics.P2); return; }
    } catch { /* fall through */ }
    fetch('data/physics-syllabus.json').then(r => r.json()).then(s => {
      try { _activeSubject = 'physics'; _syllabus = s; } catch { /* app.js not loaded */ }
      showSubtopics('P2', s.topics.P2);
    }).catch(() => showHome());
  }

  // ── My record: everything the app keeps about the pilot, and the export ──
  function showRecord() {
    _style();
    _active = false;
    const all = Record.all(), sum = Record.summary();
    const main = document.getElementById('main');
    const tests = Object.entries(all.tests || {}).map(([id, r]) => `<tr><td>${esc((T.TESTS[id] || {}).name || id)}</td><td>${esc(new Date(r.done).toLocaleString('en-GB'))}</td><td>${r.score.exam.max ? `${r.score.exam.marks}/${r.score.exam.max} (${r.score.examPct}%)` : '—'}</td><td>${r.score.misRight}/${r.score.misCount}</td></tr>`).join('');
    const lessons = Object.entries(sum).map(([id, L]) => {
      const rows = Object.entries(L.keyPoints).map(([k, v]) => `<tr><td>${Number(k) + 1}</td><td>${Math.round(v.seconds / 60 * 10) / 10} min</td><td>${v.dontKnow}</td><td>${v.tellMe}</td><td>${v.hints}</td><td>${v.answers ? `${v.right}/${v.answers}` : '—'}</td><td>${v.predicts ? `${v.predictsRight}/${v.predicts}` : '—'}</td></tr>`).join('');
      return `<p style="margin:0.8rem 0 0"><strong>${esc(id === T.LESSONS.cv ? 'Current and potential difference' : 'Components')}</strong> ${L.finished ? '✅ finished' : L.opened ? '◑ started' : '○ not started'}</p>
        ${rows ? `<div style="overflow-x:auto"><table class="pl-table"><tr><th>Key point</th><th>Time</th><th>"Don't know"</th><th>"Tell me"</th><th>Hints</th><th>Answers right</th><th>Predictions right</th></tr>${rows}</table></div>` : ''}`;
    }).join('');
    const recent = all.events.slice(-60).reverse().map(e => `<tr><td>${esc(new Date(e.t).toLocaleString('en-GB'))}</td><td>${esc(e.type)}</td><td>${esc([e.lesson, Number.isInteger(e.kp) ? `key point ${e.kp + 1}` : '', e.test, e.step, e.text ? `"${e.text}"` : '', e.right === true ? 'right' : e.right === false ? 'not yet' : ''].filter(Boolean).join(' · '))}</td></tr>`).join('');
    main.innerHTML = `<div class="pl-wrap"><button class="back-btn" onclick="Pilot.backToTopic()">← Electricity</button>
      <div class="pl-card"><div class="pl-title">My record</div>
        <p style="margin:0">While you do the two Electricity lessons and their tests, the app keeps a record of how they go: how long each key point takes, when you say "don't know" or "tell me", hints, your answers and your test scores. It is kept in this browser only. Jason sees it only if you press "Export for Jason" and send him the file.</p>
        <div class="pl-row"><button class="btn pri" onclick="Record.exportFile()">Export for Jason</button></div></div>
      <div class="pl-card"><div class="pl-title">Tests</div>${tests ? `<div style="overflow-x:auto"><table class="pl-table"><tr><th>Test</th><th>When</th><th>Exam-style marks</th><th>"What really happens"</th></tr>${tests}</table></div>` : '<p class="pl-muted" style="margin:0">None yet.</p>'}</div>
      <div class="pl-card"><div class="pl-title">Lessons</div>${lessons}</div>
      <div class="pl-card"><div class="pl-title">Latest entries</div>${recent ? `<details><summary>Show the last 60</summary><div style="overflow-x:auto"><table class="pl-table">${recent}</table></div></details>` : '<p class="pl-muted" style="margin:0">Nothing yet.</p>'}</div></div>`;
    window.scrollTo(0, 0);
  }

  // ── The end of a pilot lesson: more practice, and the post-test ──
  function endCard(lessonId, links) {
    if (!LESSON_IDS.includes(lessonId)) return null;
    _style();
    const tid = POST[lessonId];
    const el = document.createElement('div');
    el.className = 'pl-card';
    el.innerHTML = `<div class="pl-title">More practice</div>
      ${(links || []).length ? `<ul class="pl-list">${links.map(l => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>${l.source ? ` <span class="pl-muted">(${esc(l.source)})</span>` : ''}</li>`).join('')}</ul>` : ''}
      ${done(tid) ? `<p class="pl-muted" style="margin:0.5rem 0 0">Post-test done ✓</p>` : `<p style="margin:0.6rem 0 0">Now the post-test: about 15 minutes of exam-style questions on this lesson.</p><div class="pl-row"><button class="btn pri" data-post>Take the post-test</button></div>`}`;
    const b = el.querySelector('[data-post]');
    if (b) b.onclick = () => {
      if (typeof Teach !== 'undefined' && Teach.close) { try { Teach.close(); } catch { /* not open */ } }
      run(tid);
    };
    return el;
  }

  return { topicCards, gate, knownNote, run, showResult, showRecord, endCard, backToTopic, active: () => _active, LESSON_IDS };
})();
