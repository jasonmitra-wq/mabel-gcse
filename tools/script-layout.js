#!/usr/bin/env node
/* The scripted AI lesson laid out as she would read it (brief docs/briefs/2026-11-11-scripted-teaching.md, step 6).
 *
 *   node tools/script-layout.js [lessonId] [--out <file>]
 *     default out: docs/review/<lessonId>-kp1-2.md
 *
 * The main path in order; each question followed by what she sees for right, each wrong answer and each
 * "don't know" level; worked examples step by step; widgets as she meets them. Plain text, no code. This is what
 * Jason reads, and what tools/review-lesson.js --script sends to the reviewer.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const TS = require(path.join(ROOT, 'js', 'teach-script.js'));
const Practice = require(path.join(ROOT, 'js', 'practice', 'practice.js'));
global.Practice = Practice;
require(path.join(ROOT, 'js', 'practice', 'physics.js'));
const MIS = require(path.join(ROOT, 'js', 'pilot', 'misconceptions.js'));

function layout(id) {
  const lesson = JSON.parse(fs.readFileSync(path.join(ROOT, 'lessons', 'physics', `${id}.json`), 'utf8'));
  const script = JSON.parse(fs.readFileSync(path.join(ROOT, 'lessons', 'physics', `${id}.script.json`), 'utf8'));
  const misText = m => (MIS.find(x => x.id === m) || {}).text || '';
  const strip = h => String(h || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const dot = s => { const t = String(s || '').trim(); return /[.!?]$/.test(t) ? t : `${t}.`; };
  const out = [];
  out.push(`# ${lesson.title}: key points ${script.keyPoints.map(k => k.kp + 1).join(' and ')}, the scripted AI lesson`, '');
  out.push(`This is every message she can see, in order, written once and stored (${id}.script.json). Each tutor message is one chat bubble. Under each question: what she sees for a right answer, for each likely wrong answer, and if she says she does not know (the easier step first, then a smaller question, then the answer and why).`, '');
  out.push(`At any point she can ask a question of her own. The AI answers it from the lesson in at most 60 words, then asks the same question again. Apart from that and marking what she types, nothing here is written by the AI.`, '');
  let n = 0;
  const engine = TS.create({ call: async () => '', practice: Practice, lesson, script, misconceptions: MIS });
  const st = { kp: 0, i: 0, seed: 1 };
  script.keyPoints.forEach(kp => {
    out.push(`## Key point ${kp.kp + 1}: ${kp.heading}`, '');
    kp.steps.forEach((s, i) => {
      st.kp = script.keyPoints.indexOf(kp); st.i = i;
      const tag = `[${s.id}]`;
      if (s.type === 'say' || s.type === 'equation') {
        out.push(`${++n}. ${tag} Tutor: ${s.text}`);
        if (s.picture) { const p = (lesson.keyPoints[kp.kp].pictures || []).find(x => x.diagram === s.picture); out.push(`   (Under it, a picture: "${p ? p.caption : s.picture}", labelled ${p ? p.labels.join(', ') : ''}.)`); }
        out.push(`   Button: Next`, '');
      } else if (s.type === 'ask') {
        out.push(`${++n}. ${tag} Tutor asks: ${s.question}`);
        if (s.kind === 'tap') out.push(`   Buttons: ${engine.shown(s).map(o => `"${o.text}"`).join(' / ')} (she can also type)`);
        else out.push(`   She types a ${s.kind === 'number' ? 'number' : 'short answer'}.`);
        out.push(`   - Right${s.kind === 'number' ? ` (${s.answer.value} ${s.answer.unit})` : s.kind === 'tap' ? ` ("${s.options.find(o => o.branch === 'right').text}")` : ''}: ${s.right}`);
        if (s.kind === 'tap') s.options.filter(o => o.branch !== 'right').forEach(o => out.push(`   - "${o.text}"${o.branch !== 'other' ? ` (wrong idea ${o.branch}: ${misText(o.branch)})` : ''}: ${(s.wrong[o.branch] || s.wrong.other)}`));
        else {
          (s.wrongValues || []).forEach(w => out.push(`   - She types ${w.value}${w.branch !== 'other' ? ` (wrong idea ${w.branch})` : ''}: ${(s.wrong[w.branch] || s.wrong.other)}`));
          Object.keys(s.wrong).filter(b => b !== 'other').forEach(b => { if (!(s.wrongValues || []).some(w => w.branch === b)) out.push(`   - An answer with the wrong idea ${b} (${misText(b)}): ${s.wrong[b]}`); });
          out.push(`   - Any other wrong answer: ${s.wrong.other}`);
        }
        (s.idk || []).forEach((lv, k) => {
          if (lv.hint) out.push(`   - Don't know (${k === 0 ? 'first time' : 'again'}): ${lv.hint}${s.kind === 'tap' ? ' (same buttons)' : ''}`);
          if (lv.ask) {
            out.push(`   - Don't know (${k === 0 ? 'first time' : 'again'}): a smaller question: ${lv.ask.question} Buttons: ${engine.shown(lv.ask).map(o => `"${o.text}"`).join(' / ')}`);
            out.push(`       - Right: ${lv.ask.right} Then: ${s.answerWhy}`);
            out.push(`       - Wrong: ${lv.ask.wrong.other} Then: ${s.answerWhy}
       - Don't know: That's fine. Then: ${s.answerWhy}`);
          }
        });
        out.push(`   - Still doesn't know: That's fine. ${s.answerWhy}`);
        out.push(`   - She asks to move on or skip: ${s.answerWhy}`, '');
      } else if (s.type === 'widget') {
        const card = engine.show({ ...st }).find(e => e.card).card, o = card.options;
        out.push(`${++n}. ${tag} Tutor: ${s.text}`);
        out.push(`   Under it, the hands-on circuit. It shows ${o.hideMeters ? 'a cell, a switch and a lamp in one loop (no meters yet)' : `a cell, ${o.switch ? 'a switch, ' : ''}a lamp${o.resistor ? ', a resistor that can go in or out of the loop' : ''} and ${o.twoAmmeters ? 'two ammeters' : 'an ammeter'}${o.voltmeter ? ' and a voltmeter' : ''}`}; controls: ${(o.controls || []).map(c => ({ sw: 'Open/Close the switch', add: 'Add a cell', remove: 'Take a cell away', res: 'Put the resistor in / Take it out', side: 'Move the resistor', run: 'Run for 10 s' }[c])).join(', ') || 'none'}.`);
        (o.predicts || []).forEach((p, k) => {
          out.push(`   Box, "Predict first${o.predicts.length > 1 ? ` (${k + 1} of ${o.predicts.length})` : ''}": ${p.question}`);
          out.push(`     Choices: ${(p.options || []).map(x => `"${x.short || x.text}"`).join(' / ')} (right: "${p.options[p.correct].short || p.options[p.correct].text}")`);
          out.push(`     After she taps one: "Now test your prediction. ${p.tryShort || p.try}"`);
          const need = (p.needs || []).length ? `after she uses ${p.needs.map(c => ({ sw: 'the switch', add: 'Add a cell', remove: 'Take a cell away', res: 'the resistor button', run: 'Run for 10 s', redraw: 'Draw it another way' }[c])).join(' or ')}` : 'straight away';
          out.push(`     Then, ${need}: "Your prediction was right." or "${p.reveal || `What happens: ${p.options[p.correct].short || p.options[p.correct].text}.`}"${p.afterTest ? ` and "${p.afterTest}"` : ''}`);
          out.push(`     Then "Now explain it: ${(p.explain && (p.explain.promptShort || p.explain.prompt)) || ''}" She writes one line and taps Check my line; then "Does your line say these? Tick the ones it does." with: ${((p.explain || {}).points || []).map(x => `"${x}"`).join(', ')}.`);
        });
        out.push(`   Button under the message: Next`, '');
      } else if (s.type === 'worked') {
        const x = s.question ? { question: s.question, steps: s.steps.map(t => ({ text: t })), answer: s.answer } : lesson.keyPoints[kp.kp].workedExamples[s.example];
        out.push(`${++n}. ${tag} Tutor: ${s.text}`);
        out.push(`   The card: "Worked example: ${strip(x.question)}"`);
        x.steps.forEach((z, k) => out.push(`   ${k === 0 ? 'She taps "Show the first step"' : 'She taps "Next step"'}: ${dot(z.text)}`));
        out.push(`   After the last step: Next. (If she types an answer instead: "Yes, that's right: ${x.answer.value} ${x.answer.unit}." or "Not quite: it's ${x.answer.value} ${x.answer.unit}. The steps on the card show how.")`, '');
      } else if (s.type === 'practice') {
        const q = engine.show({ ...st, seed: 1 }).find(e => /^Your turn/.test(e.text));
        const pq = (() => { const t = { ...st, seed: 1 }; engine.show(t); return t.pend.q; })();
        const ans = `${Practice.fmt(pq.answer.value)} ${pq.answer.unit}`, steps = pq.steps.map(z => dot(z.text)).join(' ');
        out.push(`${++n}. ${tag} Tutor: ${q.text}`);
        out.push(`   (A new question each time, the same kind as the worked example. She types a number.)`);
        out.push(`   - Right: Yes, that's right: ${ans}.`);
        out.push(`   - Wrong: Not quite: it's ${ans}. ${steps}`);
        const eqDef = lesson.keyPoints.flatMap(k => ((k.examBox || {}).equations || [])).find(e => e.id === pq.equation);
        const given = Object.entries(pq.given || {}).map(([sym, v]) => { const u = eqDef && eqDef.units.find(x => x.symbol === sym); return `${sym} = ${Practice.fmt(v)} ${u ? u.unitSymbol : ''}`.trim(); });
        out.push(`   - Don't know: That's fine. Here is how to start: ${pq.steps.slice(0, Math.max(1, pq.steps.length - 2)).map(x => dot(x.text)).join(' ')} In this question, ${given.length > 1 ? `${given.slice(0, -1).join(', ')} and ${given[given.length - 1]}` : given[0]}. Now put the numbers in. What do you get?`);
        out.push(`   - Still doesn't know: Here is how it goes. ${steps}`, '');
      } else if (s.type === 'own') {
        out.push(`${++n}. ${tag} Tutor: ${s.prompt}`);
        out.push(`   She types one line. The AI checks which of these points it makes: ${s.points.map(x => `"${x}"`).join(', ')}.`);
        out.push(`   - All of them: Yes, your line has it: ${s.points.join('; and ')}.`);
        out.push(`   - Some: Your line gets this right: <the points it makes>. A full line also says: <the points it misses>.`);
        out.push(`   - None: A good line would say: ${s.points.join('; and ')}.`);
        out.push(`   - Don't know: ${s.idk}`, '');
      }
    });
  });
  out.push(`## The end`, '', `${++n}. Tutor: ${script.end.text}`, `   Buttons: ${script.end.buttons.map(b => `"${b}"`).join(' / ')}`, '');
  return out.join('\n');
}

if (require.main === module) {
  const argv = process.argv.slice(2);
  const id = argv.find(a => !a.startsWith('--') && argv[argv.indexOf(a) - 1] !== '--out') || 'p2-current-voltage';
  const oi = argv.indexOf('--out');
  const file = oi !== -1 ? argv[oi + 1] : path.join(ROOT, 'docs', 'review', `${id}-kp1-2.md`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, layout(id));
  console.log(`Wrote ${path.relative(ROOT, file)}`);
}
module.exports = { layout };
