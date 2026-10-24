/* ============================================================
   PILOT / RECORD.JS — her record for the Electricity pilot (brief
   docs/briefs/2026-10-19-evidence-layer.md, step 5). Browser only.

   Kept in her browser (localStorage, through Store) and nowhere else. She
   can see all of it on the "My record" page; "Export for Jason" saves it to
   a file, which Jason puts in data/private/ (gitignored) for
   tools/pilot/analyse.js. Nothing here is sent anywhere.

   Logged: when each lesson step or key point is shown (time per key point),
   her messages in the AI lesson with "don't know" and "tell me" marked,
   hints, her answers, her predictions, the tests.
   ============================================================ */
const Record = (() => {
  const KEY = 'pilot_record';
  const PILOT = ['p2-current-voltage', 'p2-components'];
  const MAX_EVENTS = 4000;
  let _ctx = { lesson: null, kp: null, mode: null };

  function _load() {
    const r = (typeof Store !== 'undefined' && Store.get(KEY)) || null;
    if (r && r.version === 1 && Array.isArray(r.events)) { if (!r.tests) r.tests = {}; return r; }
    return { version: 1, created: new Date().toISOString(), events: [], tests: {} };
  }
  function _save(r) {
    if (r.events.length > MAX_EVENTS) r.events = r.events.slice(-MAX_EVENTS);
    try { Store.set(KEY, r); } catch { /* storage full or blocked: the lesson carries on */ }
  }
  function _push(ev) {
    const r = _load();
    r.events.push({ t: new Date().toISOString(), ...ev });
    _save(r);
  }
  const isPilot = id => PILOT.includes(id);
  const DONT_KNOW = /\b(don'?t know|dont know|do not know|no idea|no clue|not sure|unsure|idk|dunno)\b/i;
  const TELL_ME = /\b(tell me|just tell|show me the answer|give me the answer)\b/i;
  const CONFUSED = /\b(confus\w*|lost|don'?t (get|understand)|makes no sense)\b/i;

  // ── Lessons ──
  function lesson(id, mode) {
    if (!isPilot(id)) { _ctx = { lesson: null, kp: null, mode: null }; return; }
    _ctx = { lesson: id, kp: null, mode };
    _push({ type: 'lesson-open', lesson: id, mode });
  }
  function step(id, kp, stepType) {
    if (!isPilot(id)) return;
    _ctx = { ..._ctx, lesson: id, kp: Number.isInteger(kp) ? kp : null };
    _push({ type: 'step', lesson: id, kp: _ctx.kp, step: stepType, mode: 'slides' });
  }
  function chat(id, kp, text) {
    if (!isPilot(id)) return;
    _ctx = { ..._ctx, lesson: id, kp: Number.isInteger(kp) ? kp : null, mode: 'ai' };
    const t = String(text || '');
    _push({ type: 'chat', lesson: id, kp: _ctx.kp, mode: 'ai', text: t.slice(0, 500),
            dontKnow: DONT_KNOW.test(t), tellMe: TELL_ME.test(t), confused: CONFUSED.test(t) });
  }
  function finished(id, mode, extra) {
    if (!isPilot(id)) return;
    const r = _load();
    if (r.events.some(e => e.type === 'lesson-finish' && e.lesson === id && e.mode === mode)) return;
    _push({ type: 'lesson-finish', lesson: id, mode, ...(extra || {}) });
  }
  // ── Pieces of a lesson (shared by slides and the AI lesson) ──
  function hint(id, kp) { if (isPilot(id)) _push({ type: 'hint', lesson: id, kp }); }
  function answer(a) {
    if (!_ctx.lesson) return;
    _push({ type: 'answer', lesson: _ctx.lesson, kp: a.kp !== undefined ? a.kp : _ctx.kp, where: a.where, right: a.right === undefined ? null : !!a.right, dontKnow: !!a.dontKnow, text: a.text ? String(a.text).slice(0, 300) : undefined });
  }
  function predict(p) {
    const lessonId = (p.from && p.from.lesson) || _ctx.lesson;
    if (!isPilot(lessonId)) return;
    _push({ type: 'predict', lesson: lessonId, kp: p.from ? p.from.kp : _ctx.kp, id: p.id, right: p.right, mis: p.mis || null, chose: p.chose });
  }
  function explained(p) {
    const lessonId = (p.from && p.from.lesson) || _ctx.lesson;
    if (isPilot(lessonId)) _push({ type: 'explained', lesson: lessonId, kp: p.from ? p.from.kp : _ctx.kp, id: p.id });
  }
  function widget(w) { if (_ctx.lesson) _push({ type: 'widget', lesson: _ctx.lesson, kp: _ctx.kp, ...w }); }

  // ── Tests ──
  function saveTest(testId, answers, score, startedAt, dontKnow) {
    const r = _load();
    r.tests[testId] = { done: new Date().toISOString(), started: startedAt, answers, dontKnow: dontKnow || [], score };
    r.events.push({ t: new Date().toISOString(), type: 'test', test: testId, examPct: score.examPct, allPct: score.allPct, misconceptions: score.misconceptions });
    _save(r);
  }
  function test(testId) { return _load().tests[testId] || null; }

  // ── Summaries for the "My record" page (the same sums as tools/pilot/analyse.js) ──
  function summary() {
    const r = _load();
    const out = {};
    for (const id of PILOT) {
      const ev = r.events.filter(e => e.lesson === id);
      const kps = {};
      // Time per key point: from each event at a key point to the next event (capped at 10 minutes, for breaks).
      for (let i = 0; i < ev.length; i++) {
        const e = ev[i], n = ev[i + 1];
        if (!Number.isInteger(e.kp)) continue;
        const k = kps[e.kp] = kps[e.kp] || { seconds: 0, dontKnow: 0, tellMe: 0, hints: 0, answers: 0, right: 0, predicts: 0, predictsRight: 0 };
        if (n) k.seconds += Math.min(600, Math.max(0, (Date.parse(n.t) - Date.parse(e.t)) / 1000));
        if (e.type === 'chat') { if (e.dontKnow) k.dontKnow++; if (e.tellMe) k.tellMe++; }
        if (e.type === 'hint') k.hints++;
        if (e.type === 'answer' && e.right !== null) { k.answers++; if (e.right) k.right++; if (e.dontKnow) k.dontKnow++; }
        if (e.type === 'predict') { k.predicts++; if (e.right) k.predictsRight++; }
      }
      out[id] = { opened: ev.some(e => e.type === 'lesson-open'), finished: ev.some(e => e.type === 'lesson-finish'), keyPoints: kps };
    }
    return out;
  }

  function exportFile() {
    const r = _load();
    const blob = new Blob([JSON.stringify({ ...r, exported: new Date().toISOString(), app: 'mabel-gcse pilot' }, null, 1)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `pilot-record-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }

  return { PILOT, isPilot, lesson, step, chat, finished, hint, answer, predict, explained, widget, saveTest, test, summary, exportFile, all: _load, context: () => ({ ..._ctx }) };
})();
