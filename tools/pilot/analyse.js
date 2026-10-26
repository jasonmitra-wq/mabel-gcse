#!/usr/bin/env node
/* Evidence layer, step 5: score the pilot against the success criteria.
 *
 *   node tools/pilot/analyse.js            # reads data/private/*.json, writes tools/pilot/results.md
 *   node tools/pilot/analyse.js --print    # prints instead of writing
 *
 * Input: the file(s) saved by "Export for Jason" on the "My record" page
 * (pilot-record-YYYY-MM-DD.json), copied into data/private/ (gitignored).
 * When there are several, the newest export is used (it holds everything
 * the older ones did).
 *
 * Output: tools/pilot/results.md, anonymous: counts and percentages only. No
 * name, no free text she typed, no answers. The tests are re-marked here
 * with the app's own marking (js/pilot/tests.js).
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const T = require(path.join(ROOT, 'js', 'pilot', 'tests.js'));
const PRIV = path.join(ROOT, 'data', 'private');
const OUT = path.join(ROOT, 'tools', 'pilot', 'results.md');
const print = process.argv.includes('--print');

function newestExport() {
  if (!fs.existsSync(PRIV)) return null;
  const files = fs.readdirSync(PRIV).filter(f => /\.json$/i.test(f)).map(f => ({ f, p: path.join(PRIV, f) }))
    .map(x => { try { const j = JSON.parse(fs.readFileSync(x.p, 'utf8')); return j && j.version === 1 && Array.isArray(j.events) ? { ...x, j } : null; } catch { return null; } })
    .filter(Boolean)
    .sort((a, b) => String(b.j.exported || '').localeCompare(String(a.j.exported || '')));
  return files[0] || null;
}

const pct = (a, b) => (b ? Math.round(100 * a / b) : null);
const yesNo = v => (v === null || v === undefined ? 'not yet' : v ? 'met' : 'not met');

// The quick check's misconception questions: shown there (her first answer wrong), and right in the delayed test.
function quickMis(tests) {
  const at = (t, id) => (t ? t.score.per.find(x => x.id === id) : null);
  return T.TESTS.diagnostic.items.filter(i => i.kind === 'mis' && i.later).map(i => {
    const q = at(tests.diagnostic, i.id), l = at(tests.delayed, i.later);
    return { label: i.label, shown: q ? !q.right : null, mis: q ? q.mis : [], laterRight: l ? l.right : null };
  });
}

function analyse(rec) {
  const tests = {};
  for (const id of Object.keys(T.TESTS)) {
    const r = rec.tests && rec.tests[id];
    tests[id] = r ? { done: r.done, score: T.score(id, r.answers || {}), dontKnow: (r.dontKnow || []).length } : null;
  }
  const finished = id => rec.events.some(e => e.type === 'lesson-finish' && e.lesson === id);
  const C = T.CRITERIA;
  const post = ['post-cv', 'post-comp'].map(id => tests[id] && tests[id].score.examPct);
  const diagMis = tests.diagnostic ? tests.diagnostic.score.misconceptions : null;
  const delMis = tests.delayed ? tests.delayed.score.misconceptions : null;
  const criteria = {
    post: post.every(v => v !== null && v !== undefined) ? post.every(v => v >= C.postPct) : null,
    delayed: tests.delayed ? tests.delayed.score.examPct >= C.delayedPct : null,
    // Shorter quick check (brief 2026-10-26): the two misconceptions it asks, each measured in the
    // delayed test by its own new question (item.later); one she showed is gone if that is right.
    misconceptions: T.SHORT_CHECK ? (tests.diagnostic && tests.delayed ? quickMis(tests).every(m => !m.shown || m.laterRight) : null)
      : diagMis && delMis ? diagMis.every(m => !delMis.includes(m)) : null,
    finished: T.LESSONS && finished(T.LESSONS.cv) && finished(T.LESSONS.comp) ? true : (tests.delayed ? false : null),
  };
  // Lessons: time per key point, "don't know", "tell me", hints, answers, predictions.
  const lessons = {};
  for (const id of [T.LESSONS.cv, T.LESSONS.comp]) {
    const ev = rec.events.filter(e => e.lesson === id);
    const kps = {};
    for (let i = 0; i < ev.length; i++) {
      const e = ev[i], n = ev[i + 1];
      if (!Number.isInteger(e.kp)) continue;
      const k = kps[e.kp] = kps[e.kp] || { seconds: 0, dontKnow: 0, tellMe: 0, confused: 0, hints: 0, answers: 0, right: 0, predicts: 0, predictsRight: 0, messages: 0 };
      if (n) k.seconds += Math.min(600, Math.max(0, (Date.parse(n.t) - Date.parse(e.t)) / 1000));
      if (e.type === 'chat') { k.messages++; if (e.dontKnow) k.dontKnow++; if (e.tellMe) k.tellMe++; if (e.confused) k.confused++; }
      if (e.type === 'hint') k.hints++;
      if (e.type === 'answer' && e.right !== null && e.right !== undefined) { k.answers++; if (e.right) k.right++; }
      if (e.type === 'predict') { k.predicts++; if (e.right) k.predictsRight++; }
    }
    const modes = [...new Set(ev.filter(e => e.type === 'lesson-open').map(e => e.mode))];
    lessons[id] = { opened: ev.some(e => e.type === 'lesson-open'), finished: finished(id), modes, kps };
  }
  // Predictions: which misconceptions her wrong predictions matched.
  const predMis = {};
  rec.events.filter(e => e.type === 'predict' && e.mis).forEach(e => { predMis[e.mis] = (predMis[e.mis] || 0) + 1; });
  // Exam-style marks by question type, across the tests.
  const byType = {};
  for (const [id, t] of Object.entries(tests)) {
    if (!t) continue;
    for (const x of t.score.per.filter(p => p.kind === 'exam')) {
      const k = byType[x.type] = byType[x.type] || {};
      const s = k[id] = k[id] || { marks: 0, max: 0 };
      s.marks += x.marks; s.max += x.max;
    }
  }
  return { tests, criteria, lessons, predMis, byType };
}

function render(a, src) {
  const C = T.CRITERIA;
  const L = [];
  L.push('# Electricity pilot: results (anonymous)', '');
  L.push(`Written by tools/pilot/analyse.js from the newest export in data/private/ (exported ${src.j.exported ? src.j.exported.slice(0, 10) : 'date unknown'}). Counts and percentages only: no name, no free text, no answers. The success criteria were set before she started (tools/pilot/success-criteria.md).`, '');
  L.push('## Success criteria', '', '| Criterion | Result | Status |', '|---|---|---|');
  const t = a.tests;
  const ex = id => (t[id] ? `${t[id].score.exam.marks}/${t[id].score.exam.max} (${t[id].score.examPct}%)` : 'not taken');
  L.push(`| Post-test at least ${C.postPct}% (each lesson) | Current and pd: ${ex('post-cv')}; Components: ${ex('post-comp')} | ${yesNo(a.criteria.post)} |`);
  L.push(`| Delayed test at least ${C.delayedPct}% | ${ex('delayed')} | ${yesNo(a.criteria.delayed)} |`);
  const dm = t.diagnostic ? t.diagnostic.score.misconceptions : null, ym = t.delayed ? t.delayed.score.misconceptions : null;
  if (T.SHORT_CHECK) {
    const qm = quickMis(t);
    L.push(`| The quick check's two misconceptions, where she showed them, gone in the delayed test (its new questions) | ${qm.map(m => `${m.label}: quick check ${m.shown === null ? 'not taken' : m.shown ? `shown (${m.mis.join(', ')})` : 'not shown'}, delayed ${m.laterRight === null ? 'not taken' : m.laterRight ? 'right' : 'wrong'}`).join('; ')} | ${yesNo(a.criteria.misconceptions)} |`);
  } else L.push(`| Every misconception shown in the quick check gone in the delayed test | quick check: ${dm ? (dm.join(', ') || 'none') : 'not taken'}; delayed: ${ym ? (ym.join(', ') || 'none') : 'not taken'} | ${yesNo(a.criteria.misconceptions)} |`);
  L.push(`| She finishes both lessons | Current and pd: ${a.lessons[T.LESSONS.cv].finished ? 'finished' : 'not finished'}; Components: ${a.lessons[T.LESSONS.comp].finished ? 'finished' : 'not finished'} | ${yesNo(a.criteria.finished)} |`, '');
  L.push('## Tests', '', '| Test | Taken | Exam-style marks | Misconception questions right | "I don\'t know" |', '|---|---|---|---|---|');
  for (const [id, x] of Object.entries(t)) L.push(`| ${T.TESTS[id].name} | ${x ? x.done.slice(0, 10) : '—'} | ${x ? `${x.score.exam.marks}/${x.score.exam.max} (${x.score.examPct}%)` : '—'} | ${x ? `${x.score.misRight}/${x.score.misCount}` : '—'} | ${x ? x.dontKnow : '—'} |`);
  L.push('', '## Exam-style marks by question type', '', '| Type | ' + Object.keys(T.TESTS).map(id => T.TESTS[id].name).join(' | ') + ' |', '|---|' + Object.keys(T.TESTS).map(() => '---').join('|') + '|');
  for (const [type, row] of Object.entries(a.byType)) L.push(`| ${type} | ${Object.keys(T.TESTS).map(id => (row[id] ? `${row[id].marks}/${row[id].max}` : '—')).join(' | ')} |`);
  L.push('', '## Lessons', '');
  for (const [id, x] of Object.entries(a.lessons)) {
    L.push(`### ${id}`, '', `Opened: ${x.opened ? `yes (${x.modes.join(', ') || 'mode not recorded'})` : 'no'}. Finished: ${x.finished ? 'yes' : 'no'}.`, '');
    const rows = Object.entries(x.kps).sort((p, q) => p[0] - q[0]);
    if (!rows.length) { L.push('No key-point records.', ''); continue; }
    L.push('| Key point | Minutes | Messages | "Don\'t know" | "Tell me" | Confused | Hints | Answers right | Predictions right |', '|---|---|---|---|---|---|---|---|---|');
    for (const [k, v] of rows) L.push(`| ${Number(k) + 1} | ${Math.round(v.seconds / 6) / 10} | ${v.messages} | ${v.dontKnow} | ${v.tellMe} | ${v.confused} | ${v.hints} | ${v.answers ? `${v.right}/${v.answers}` : '—'} | ${v.predicts ? `${v.predictsRight}/${v.predicts}` : '—'} |`);
    L.push('');
  }
  L.push('## Wrong predictions, by misconception', '', Object.keys(a.predMis).length ? Object.entries(a.predMis).sort().map(([m, n]) => `- ${m}: ${n}`).join('\n') : 'None recorded.', '');
  return L.join('\n');
}

function main() {
  const src = newestExport();
  if (!src) { console.error('No export found in data/private/. Save "Export for Jason" from the My record page, and copy the file there.'); process.exit(1); }
  const md = render(analyse(src.j), src);
  if (print) { console.log(md); return; }
  fs.writeFileSync(OUT, md + '\n');
  console.log(`Wrote ${path.relative(ROOT, OUT)} from ${src.f}`);
}

if (require.main === module) main();
module.exports = { analyse, render };
