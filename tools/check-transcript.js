#!/usr/bin/env node
/* Free checks on a saved AI-lesson transcript (brief docs/briefs/2026-11-11-coverage-and-faults.md, step 4a).
 * Each check names its id in docs/FAULTS.md. No API.
 *
 *   node tools/check-transcript.js <site-test result.json | transcript.json> [--lesson <id>] [--quiet]
 *   node tools/check-transcript.js --all          every tools/site-test-runs/<date>/<id>/result.json of an AI lesson
 *
 * Input: a site-test result.json (its "transcript" lines: "T12: …", "S12 (…): …", "  [T12 shown first: …]",
 * "[widget under T17: … controls …]", "[widget text under T17: …]", "[counter now "1/7 covered" after T22]"), or
 * a JSON array of { role: 'assistant' | 'user', text, pt, card } entries (tools/check-kp-run.js --dump).
 * Exit 1 if any check fails.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const TeachCore = require(path.join(ROOT, 'js', 'teach-core.js'));
const C = TeachCore.create({ call: async () => '' });
const { _stems, _stripMarkdown, _wordCount } = C;
// A sentence's content words, without the words of a verdict ("that's right, …").
const factStems = x => [...new Set(_stems(_stripMarkdown(x)).filter(w => !/'$/.test(w) && !/^(that'|right|yes|correct|exactly|actually|really|answer)$/.test(w)))];
const sentences = t => (String(t || '').match(/(?:[^.!?]|\.(?=\d))+[.!?]+["')\]]*\s*|(?:[^.!?]|\.(?=\d))+$/g) || []).map(x => x.trim()).filter(Boolean);

const CHECKS = {
  'repeat-fact': 'F1', 'dangling-opener': 'F2', 'term-before-explained': 'F3', 'word-box': 'F4', 'later-term': 'F4',
  'two-new-terms': 'F5', 'echo': 'F6', 'idk-harder': 'F7', 'answer-before-question': 'F8', 'revision': 'F9',
  'equation-before-symbols': 'F10', 'worked-twice': 'F11', 'stock-praise': 'F12', 'widget-term': 'F12', 'over-60': 'P6',
};
const OPENER = /^\W*(it|its|it's|they|they're|them|their|this|that|these|those|so|he|she|which|to (?:find|do|work out|get) (?:it|this|that|them))\b/i;
const LEAD = /^\W*(yes, that'?s right|that'?s right|partly right|not quite|that'?s fine|no problem|ok, moving on|ok, let'?s finish this one|here'?s the rest of this one|let me just tell you this bit|back to (?:the|my) question|fair enough|noted|ha, i get that|no worries)\W*$/i;
// Messages made in code from the lesson file (questions, their marking, buttons' words): not the tutor's teaching.
const CODE_MSG = /^\W*(quick question|quiz, question|before the practical|from the last lesson|back to (?:the|my) question|your turn|another one|worked example|here is a worked example|predict first|try it|tap your answer|tap one of the answers|good place for a break|one last thing|done: this lesson|that's the end of the quiz|see you next time|copy those into your notes|the equation is|that's as far as this version goes|now, the question again|have a go at the question|no worries\. back to the question|tap or type your answer first|type your answer as a number)\b/i;
// Feedback on her answer: it may say the rule again (that is the correction), so it is not a repeated fact.
const FEEDBACK = /^\W*(yes|not quite|right|that'?s fine|no problem|partly right|now back to the question)\b/i;
const MC_FEEDBACK = /^\W*(yes, that'?s right[.:]|not quite: it'?s|yes, that step is right|yes, that'?s the way)/i;
const STOCK = /\b(good prediction|great prediction|great question|good question|great job|good job|well done|nice one|brilliant|excellent|awesome|perfect|fantastic|amazing)\b/i;
const REVISION = /\brevis(?:e|es|ed|ing|ion)\b(?!\s+cards?)/i;
const IDK = /\b(i\s+)?(don'?t|dont|do not) know\b|\bidk\b|\bdunno\b|\bno idea\b|\bno clue\b/i;
const RESULT = /\b(dim|dims|dimmer|bright|brighter|bigger|smaller|larger|more|less|fewer|increase[sd]?|decrease[sd]?|goes up|goes down|rises?|falls?|stops?|same|double[sd]?|halve[sd]?|zero)\b/i;

function lessonOf(id) {
  for (const subject of fs.readdirSync(path.join(ROOT, 'lessons'))) {
    const f = path.join(ROOT, 'lessons', subject, `${id}.json`);
    if (fs.existsSync(f)) return JSON.parse(fs.readFileSync(f, 'utf8'));
  }
  return null;
}
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function termRe(term) {
  const base = String(term).replace(/\s*\(.*?\)\s*/g, ' ').trim();
  return new RegExp(`(^|[^A-Za-z])(${esc(base).replace(/\s+/g, '[\\s-]+')})(e?s)?(?![A-Za-z])`, 'i');
}
// The lesson's terms: each key term with the key point that teaches it (the first that lists it) and its definition.
function termsOf(data) {
  const out = [], seen = new Set();
  (data.keyPoints || []).forEach((kp, i) => (kp.keyTerms || []).forEach(t => {
    const base = String(t.term).replace(/\s*\(.*?\)\s*/g, ' ').trim(), key = base.toLowerCase();
    if (seen.has(key) || base.length < 3) return;
    seen.add(key);
    out.push({ term: base, def: String(t.def || ''), owner: i, re: termRe(base) });
  }));
  return out.filter((e, k, all) => !all.some(o => o !== e && o.term.length > e.term.length && o.term.toLowerCase().includes(e.term.toLowerCase()) && false));
}
function definedIn(sentence, e) {
  if (!e.re.test(sentence)) return false;
  // The sentence names it as it explains it: "… is an ohmic conductor", "a voltmeter, which …", "people call it voltage".
  const t = e.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '[\\s-]+');
  if (new RegExp(`\\b(?:is|are|called|call it|call this|known as)\\s+(?:a |an |the )?(?:directly )?${t}|${t}(?:e?s)?\\s*(?:,|\\(|:|—|–)`, 'i').test(sentence)) return true;
  const own = new Set(_stems(e.term));
  const def = [...new Set(_stems(e.def.split(/(?<=[.!?])\s/)[0]))].filter(w => !own.has(w));
  if (!def.length) return true;
  const have = new Set(_stems(sentence));
  return def.filter(w => have.has(w)).length >= (def.length <= 3 ? 1 : 2);
}
const flatEq = x => String(x || '').toLowerCase().replace(/<[^>]+>/g, '').replace(/[\s×*·]+/g, '');
function usesEq(text, e) {
  const f = flatEq(_stripMarkdown(text));
  if (f.includes(flatEq(e.symbols)) || (e.words && f.includes(flatEq(e.words)))) return true;
  const low = String(text).toLowerCase(), qs = (e.units || []).map(u => String(u.quantity).toLowerCase());
  return qs.length >= 2 && qs.filter(q => low.includes(q)).length >= qs.length - 1 && /\b(multiply|multiplied|times|divide|divided|equals|equation|rearrange)\b|[×÷=]/i.test(low);
}
function namesSymbols(text, e) {
  const low = String(text).toLowerCase();
  return (e.units || []).every(u => low.includes(String(u.unit).toLowerCase().replace(/s$/, '')) && low.includes(String(u.quantity).toLowerCase()));
}

// ── Reading a transcript ──
function readSiteTest(lines) {
  const msgs = [];
  let kp = 0;
  for (const raw of lines.map(String)) {
    let m;
    if ((m = raw.match(/^T(\d+): ([\s\S]*)$/))) msgs.push({ n: `T${m[1]}`, role: 'assistant', text: m[2], kp });
    else if ((m = raw.match(/^\s+\[T(\d+) shown first: ([\s\S]*)\]$/))) {
      // shown before T<n>: put it before that message (the logger writes it after)
      const k = msgs.map(x => x.n).lastIndexOf(`T${m[1]}`);
      const entry = { n: `T${m[1]}-first`, role: 'assistant', text: m[2], kp };
      if (k === -1) msgs.push(entry); else msgs.splice(k, 0, entry);
    }
    else if ((m = raw.match(/^S(\d+)(?: \(([^)]*)\))?: ([\s\S]*)$/))) msgs.push({ n: `S${m[1]}`, role: 'user', text: m[3], tapped: /tapped/.test(m[2] || ''), kp });
    else if ((m = raw.match(/^S(\d+) \(tapped "([^"]*)"\)/))) msgs.push({ n: `S${m[1]}`, role: 'user', text: m[2], tapped: true, kp });
    else if ((m = raw.match(/^\[counter now "(\d+)\/\d+ covered" after T\d+/))) kp = Number(m[1]);
    else if ((m = raw.match(/^\[widget under T(\d+): ([\s\S]*)\]$/))) msgs.push({ n: `W${m[1]}`, role: 'widget', text: m[2], kp });
    else if ((m = raw.match(/^\[widget text under T(\d+): ([\s\S]*)\]$/))) msgs.push({ n: `W${m[1]}`, role: 'widget', text: m[2], kp, full: true });
    else if ((m = raw.match(/^\s+\[T(\d+) told piece: (\w+)/))) { const t = [...msgs].reverse().find(x => x.n === `T${m[1]}`); if (t) t.told = m[2]; }
    else if ((m = raw.match(/^\s+\[S(\d+) read as: (\w+)/))) { const t = [...msgs].reverse().find(x => x.n === `S${m[1]}`); if (t) t.cls = m[2]; }
  }
  return msgs;
}
function readEntries(list) {
  let n = 0, kp = 0;
  return list.filter(e => e.role === 'assistant' || e.role === 'user').flatMap(e => {
    if (e.pt != null) kp = Math.max(kp, e.pt);   // a message with no key point (the quiz, an answer shown first) is on the latest one
    const out = [{ n: `${e.role === 'user' ? 'S' : 'T'}${++n}`, role: e.role, text: e.text || '', kp, told: e.told, feedback: !!e.feedback, easier: !!e.easier,
                   cls: e.cls, tapped: e.tapped || (e.role === 'user' && /^(Next|Keep going|Make my revision cards|Show me another|Try another)$/.test(e.text || '')) }];
    if (e.role === 'assistant' && e.card && e.card.type === 'widget') out.push({ n: `W${n}`, role: 'widget', text: e.widgetText || '', kp, full: !!e.widgetText, card: e.card });
    if (e.role === 'assistant' && e.card && e.card.type === 'worked') out[0].worked = e.card;
    return out;
  });
}

function check(msgs, data) {
  const terms = data ? termsOf(data) : [];
  const eqs = data ? (data.keyPoints || []).flatMap(kp => ((kp.examBox || {}).equations || [])).filter(e => e.symbols) : [];
  const found = [];
  const add = (check, n, what) => found.push({ check, id: CHECKS[check], n, what: String(what).slice(0, 220) });
  const tutor = msgs.filter(m => m.role === 'assistant');
  const priorSents = [];   // earlier teaching sentences, for repeat-fact
  const said = [];         // everything said so far (both), for new terms
  const defined = new Set();
  let lastQ = null;
  const eqDone = new Set();
  let asked = false;   // the last thing she typed was a question of her own
  msgs.forEach((m, i) => {
    if (m.role === 'user') { if (!m.tapped) said.push(m.text); asked = /^(question|both)$/.test(m.cls || '') || (!m.cls && /\?\s*$/.test(m.text)); return; }
    if (m.role === 'widget') {
      // A summary line ("[widget under T4: …]") is passed over when the tester also logged what the widget showed.
      if (!m.full && msgs.some(x => x.role === 'widget' && x.full && x.n === m.n)) return;
      // widget-term: a term on the widget (its labels, controls and predictions) not yet explained; a later point's term.
      const kp = data && data.keyPoints[m.kp] ? data.keyPoints[m.kp] : null;
      const w = kp && kp.widget;
      const text = m.full ? m.text : [m.text, ...(w ? (w.labels || []) : [])].join(' ');
      terms.forEach(e => {
        if (!e.re.test(text)) return;
        if (e.owner > m.kp) add('widget-term', m.n, `the widget shows "${e.term}", a term of key point ${e.owner + 1} (she is on ${m.kp + 1})`);
        else if (!defined.has(e.term) && !said.some(s => e.re.test(s))) add('widget-term', m.n, `the widget shows "${e.term}" before any message explained it`);
      });
      if (STOCK.test(m.text)) add('stock-praise', m.n, m.text.match(STOCK)[0]);
      return;
    }
    const plain = _stripMarkdown(m.text);
    const sents = sentences(plain);
    const code = CODE_MSG.test(plain) || MC_FEEDBACK.test(plain);
    // word-box
    if (/first, a word you'?ll need/i.test(plain)) add('word-box', m.n, plain);
    // over-60
    if (_wordCount(plain) > 60) add('over-60', m.n, `${_wordCount(plain)} words: ${plain.slice(0, 80)}…`);
    // revision
    if (REVISION.test(plain)) add('revision', m.n, plain.match(REVISION)[0] + ': ' + plain.slice(0, 120));
    // stock praise
    if (STOCK.test(plain)) add('stock-praise', m.n, plain.match(STOCK)[0]);
    // worked-twice: the card shows the question, so a message that also gives it shows it twice.
    if (/^\W*worked example\b/i.test(plain) && /\?/.test(plain)) add('worked-twice', m.n, plain);
    // dangling-opener
    if (!code) {
      const first = sents.find(s => !LEAD.test(s)) || '';
      const o = /\?/.test(first) ? null : first.match(OPENER);
      if (o) add('dangling-opener', m.n, first);
    }
    // echo: her last typed words, or "don't know", said back to her
    const prevUser = [...msgs.slice(0, i)].reverse().find(x => x.role === 'user');
    if (prevUser && !prevUser.tapped) {
      const h = prevUser.text.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
      const echo = sents.find(s => { const n = s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim(); return (IDK.test(prevUser.text) && IDK.test(s)) || (h.split(' ').length >= 3 && h.length >= 12 && n.includes(h)); });
      if (echo) add('echo', m.n, `she said "${prevUser.text}"; the tutor: "${echo}"`);
    }
    // terms: new ones in this message, later points' terms, and a term's first use without saying what it is
    if (terms.length) {
      const news = terms.filter(e => e.re.test(plain) && !said.some(s => e.re.test(s)))
        .filter((e, k, all) => !all.some(o => o !== e && o.term.length > e.term.length && o.re.test(plain) && o.term.toLowerCase().includes(e.term.toLowerCase())));
      if (news.length > 1 && !/first, a word/i.test(plain)) add('two-new-terms', m.n, `${news.map(e => e.term).join(', ')}: ${plain.slice(0, 120)}`);
      news.forEach(e => {
        const s = sents.find(x => e.re.test(x)) || '';
        if (definedIn(s, e) || /first, a word/i.test(plain)) defined.add(e.term);
        else add('term-before-explained', m.n, `"${e.term}" used without saying what it is: "${s}"`);
      });
      terms.filter(e => e.owner > m.kp && e.re.test(plain)).forEach(e => add('later-term', m.n, `"${e.term}" (taught in key point ${e.owner + 1}) used in key point ${m.kp + 1}`));
    }
    // equation-before-symbols: the first message that uses an equation must name its symbols and units
    eqs.forEach(e => {
      if (eqDone.has(e.symbols) || !usesEq(plain, e)) return;
      eqDone.add(e.symbols);
      if (!namesSymbols(plain, e)) add('equation-before-symbols', m.n, `${e.symbols} used before a message said what each symbol stands for and its unit: "${plain.slice(0, 120)}"`);
    });
    // answer-before-question
    const qi = sents.map((s, k) => (/\?/.test(s) ? k : -1)).filter(k => k >= 0).pop();
    if (qi !== undefined && !code) {
      const q = sents[qi];
      const prevT = [...msgs.slice(0, i)].reverse().find(x => x.role === 'assistant');
      const before = [...sents.slice(0, qi), ...(prevT ? sentences(_stripMarkdown(prevT.text)).slice(-2) : [])];
      const qs = new Set(_stems(q).filter(w => !/^(happen|would|will|think|does|what)$/.test(w)));
      if (/\b(what (happens|would happen|will happen)|how (does|would|will)|what (does|would|will) .* do|which way)\b/i.test(q)
          && before.some(b => !/\?/.test(b) && RESULT.test(b) && _stems(b).filter(w => qs.has(w)).length >= 2)) add('answer-before-question', m.n, q);
    }
    // idk-harder: after her "don't know" to a question, a new question on something else
    // (only the first tutor message after her "don't know": what comes after that is the next step)
    const firstAfter = prevUser && msgs.slice(msgs.indexOf(prevUser) + 1, i).every(x => x.role !== 'assistant');
    if (qi !== undefined && prevUser && firstAfter && !m.easier && IDK.test(prevUser.text) && lastQ && !code) {
      const q = sents[qi], a = new Set(_stems(lastQ)), b = _stems(q);
      // the same idea: most of the shorter question's words are in the other (a longer hint is not a new question)
      const bs = [...new Set(b)], shared = bs.filter(w => a.has(w)).length, share = Math.min(a.size, bs.length) ? shared / Math.min(a.size, bs.length) : 1;
      if (share < 0.5) add('idk-harder', m.n, `after "${prevUser.text}" to "${lastQ}", a new question: "${q}"`);
    }
    if (qi !== undefined) lastQ = sents[qi];
    // repeat-fact (teaching sentences only; an answer to her own question may say a fact again)
    // the first message after her reply to a question is feedback (a correction or a hint may say the rule again)
    const replyTo = prevUser && firstAfter && (() => { const t = [...msgs.slice(0, msgs.indexOf(prevUser))].reverse().find(x => x.role === 'assistant'); return !!(t && /\?/.test(t.text)); })();
    if (!code && !asked && !replyTo && !m.feedback && !FEEDBACK.test(plain)) {
      sents.forEach(s => {
        if (/\?/.test(s) || LEAD.test(s) || /^the answer:/i.test(s)) return;
        const st = factStems(s);
        if (st.length < 4) return;
        const hit = priorSents.find(p => { const ps = new Set(factStems(p.s)); return st.filter(w => ps.has(w)).length / st.length >= 0.8; });
        if (hit) add('repeat-fact', m.n, `"${s}" (said before at ${hit.n}: "${hit.s}")`);
      });
      sents.forEach(s => priorSents.push({ n: m.n, s }));
    }
    said.push(plain);
  });
  return found;
}

function runOne(file, lessonId, quiet) {
  const j = JSON.parse(fs.readFileSync(file, 'utf8'));
  const id = lessonId || (j && j.id) || null;
  const data = id ? lessonOf(id) : null;
  const msgs = Array.isArray(j) ? readEntries(j) : readSiteTest(j.transcript || []);
  const found = check(msgs, data);
  const by = {};
  found.forEach(f => { (by[f.check] = by[f.check] || []).push(f); });
  console.log(`${found.length ? 'FAIL' : 'ok  '}  ${path.relative(ROOT, file)} (${id || 'no lesson'}): ${msgs.filter(m => m.role === 'assistant').length} tutor messages; ${Object.keys(CHECKS).map(c => `${c} ${(by[c] || []).length}`).join(', ')}`);
  if (!quiet) found.forEach(f => console.log(`      ${f.n} [${f.check}, ${f.id}] ${f.what}`));
  return { found, by };
}

function main() {
  const argv = process.argv.slice(2);
  const opt = k => { const i = argv.indexOf(k); if (i === -1) return null; const v = argv[i + 1]; argv.splice(i, 2); return v; };
  const lesson = opt('--lesson');
  const quiet = argv.includes('--quiet'); if (quiet) argv.splice(argv.indexOf('--quiet'), 1);
  let files = argv.filter(a => !a.startsWith('--'));
  if (argv.includes('--all')) {
    const base = path.join(ROOT, 'tools', 'site-test-runs');
    files = fs.readdirSync(base).flatMap(d => fs.statSync(path.join(base, d)).isDirectory() ? fs.readdirSync(path.join(base, d)).map(x => path.join(base, d, x, 'result.json')) : [])
      .filter(f => fs.existsSync(f)).filter(f => { try { return JSON.parse(fs.readFileSync(f, 'utf8')).mode === 'lesson'; } catch { return false; } });
  }
  if (!files.length) { console.error('Usage: node tools/check-transcript.js <result.json | transcript.json> [--lesson id] | --all'); process.exit(2); }
  let bad = 0;
  for (const f of files) bad += runOne(f, lesson, quiet || files.length > 1).found.length ? 1 : 0;
  process.exit(bad ? 1 : 0);
}
if (require.main === module) main();
module.exports = { check, readSiteTest, readEntries, CHECKS, termsOf };
