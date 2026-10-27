/* ============================================================
   PILOT / TESTS.JS — the evidence layer's tests (brief
   docs/briefs/2026-10-19-evidence-layer.md, steps 4 and 5).
   Shared by the browser (window.PilotTests) and Node (require), so the
   marking is the same in the app and in tools/pilot/analyse.js. No DOM.

   Tests: "diagnostic" (Quick check before you start), "post-cv" and
   "post-comp" (straight after each pilot lesson), "delayed" (a week later).
   Every question is our own, modelled on the exam's question types
   (tools/pilot/outcomes.md), with numbers and contexts that are not in the
   lessons. Marking is in code and follows the mark-scheme points: a
   conversion and an answer are separate boxes, each worth its marks, and
   an answer worked from her own wrong conversion still earns its marks
   (error carried forward).

   An item:
     { id, kind: 'prereq' | 'mis' | 'exam', type, idea, lesson, kp, question,
       // one of:
       options: [ { text, mis? } ], correct,            // multiple choice, 1 mark
       parts: [ { label, options, correct, marks } ],   // several choices, a mark each
       nums: [ { key, label, unit, answer, tol, marks, ecf? } ],   // number boxes
       graph?: { … }, recap?, known? }
   ecf: an expression in the earlier boxes' keys, the answer her own
   earlier values give (for example "54000 / E" uses her E).

   Shorter quick check (brief docs/briefs/2026-10-26-shorter-quick-check.md),
   on with SHORT_CHECK: 6 questions that teach. Each quick-check item also has
     feedback: { right, why?: [lines], steps?: [lines], explains?: [terms] },
     inLesson: { kp, text, match, explains? }   // match: words in that key point
     similar?: true    // "Try a similar one": similar(id, seed), not scored
   and each misconception item names the later-test question that asks the
   same misconception in other words (later). Her first answer is the one
   recorded and scored.
   ============================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.PilotTests = factory();
})(typeof self !== 'undefined' ? self : this, function () {

  const LESSONS = { cv: 'p2-current-voltage', comp: 'p2-components' };
  const CV = LESSONS.cv, COMP = LESSONS.comp;

  // ── Graphs drawn in the tests (data, drawn by js/pilot.js) ─────────────
  const G = {
    line: { x: { label: 'potential difference (V)', max: 6, step: 1 }, y: { label: 'current (A)', max: 0.6, step: 0.1 }, points: [[0, 0], [6, 0.6]] },
    lampMarked: { x: { label: 'potential difference (V)', max: 6, step: 1 }, y: { label: 'current (A)', max: 0.7, step: 0.1 },
      points: [[0, 0], [1, 0.2], [2, 0.33], [3, 0.42], [4, 0.5], [5, 0.56], [6, 0.61]], smooth: true, mark: [4, 0.5] },
    lamp: { x: { label: 'potential difference (V)', max: 6, step: 1 }, y: { label: 'current (A)', max: 0.4, step: 0.05 },
      points: [[0, 0], [1, 0.12], [2, 0.2], [3, 0.25], [4, 0.29], [5, 0.32], [6, 0.34]], smooth: true },
    resistor: { x: { label: 'potential difference (V)', max: 6, step: 1 }, y: { label: 'current (A)', max: 0.5, step: 0.05 }, points: [[0, 0], [6, 0.48]] },
    thermistor: { x: { label: 'temperature (°C)', max: 60, step: 10 }, y: { label: 'resistance (Ω)', max: 4000, step: 500 },
      points: [[0, 4000], [10, 2600], [20, 1700], [30, 1150], [40, 800], [50, 560], [60, 400]], smooth: true },
  };

  // ── The misconception questions (in the quick check, and again in the tests) ──
  const MIS = [
    { id: 'm-loop', kind: 'mis', type: 'recall', idea: 'closed-circuit', lesson: CV, kp: 0, label: 'A lamp needs a complete loop',
      question: 'Which set-up makes a lamp light?',
      options: [
        { text: 'Two wires making a complete loop: from the cell, through the lamp, and back to the cell' },
        { text: 'One wire from one end of the cell to the lamp', mis: 'M1' },
        { text: 'One wire from the cell, as long as it is thick enough', mis: 'M1' },
        { text: 'Any set-up with a cell in it: the cell sends the electricity out', mis: 'M7' },
      ], correct: 0 },
    { id: 'm-same-current', kind: 'mis', type: 'explain', idea: 'current-same-in-loop', lesson: CV, kp: 0, label: 'The current is the same all round a loop',
      question: 'A cell and a lamp are joined in one loop, with an ammeter on each side of the lamp. How do the two ammeter readings compare?',
      options: [
        { text: 'They are the same' },
        { text: 'The one after the lamp is lower: the lamp uses up some of the current', mis: 'M2' },
        { text: 'The one further round the loop from the cell is lower', mis: 'M4' },
        { text: 'The currents flow towards the lamp from both ends of the cell, so they point opposite ways', mis: 'M3' },
      ], correct: 0 },
    { id: 'm-add-cell', kind: 'mis', type: 'explain', idea: 'eq-V=IR', lesson: CV, kp: 1, label: 'A bigger push gives a bigger current',
      question: 'A circuit has one cell and a lamp. You add a second cell in the same loop. What happens to the current?',
      options: [
        { text: 'It increases' },
        { text: 'It stays the same: a cell always gives the same current', mis: 'M5' },
        { text: 'It stays the same, but the lamp gets brighter', mis: 'M5' },
        { text: 'It increases only in the wire next to the new cell', mis: 'M4' },
      ], correct: 0 },
    { id: 'm-flat', kind: 'mis', type: 'recall', idea: 'energy-transferred', lesson: CV, kp: 6, label: 'A cell stores energy, not charge',
      question: 'A phone battery goes flat. What has it run out of?',
      options: [
        { text: 'Stored energy' },
        { text: 'Charge', mis: 'M6' },
        { text: 'Current', mis: 'M6' },
        { text: 'Electricity', mis: 'M7' },
      ], correct: 0 },
    { id: 'm-voltmeter', kind: 'mis', type: 'recall', idea: 'voltmeter', lesson: CV, kp: 1, label: 'What a voltmeter measures',
      question: 'A voltmeter is connected across a lamp. What does it measure?',
      options: [
        { text: 'The potential difference across the lamp' },
        { text: 'The current through the lamp', mis: 'M8' },
        { text: 'The voltage flowing through the lamp', mis: 'M8' },
        { text: 'Only the cell\'s potential difference, whatever it is connected to', mis: 'M9' },
      ], correct: 0 },
    { id: 'm-ammeter', kind: 'mis', type: 'practical', idea: 'ammeter', lesson: CV, kp: 0, label: 'Where an ammeter goes',
      question: 'You want to measure the current through a lamp. Where do you put the ammeter?',
      options: [
        { text: 'In the loop, so the current flows through it' },
        { text: 'Across the lamp, joined to both of its ends', mis: 'M10' },
        { text: 'It must be drawn right next to the lamp on the diagram, or it reads a different current', mis: 'M11' },
        { text: 'Not joined in at all, just held near the wire', mis: 'M10' },
      ], correct: 0 },
    { id: 'm-ohmic', kind: 'mis', type: 'explain', idea: 'ohmic-conductor', lesson: CV, kp: 3, label: 'A resistor keeps its resistance',
      question: 'A resistor at constant temperature has a resistance of 20 Ω. The potential difference across it is doubled. What is its resistance now?',
      options: [
        { text: '20 Ω' },
        { text: '40 Ω', mis: 'M12' },
        { text: '10 Ω', mis: 'M12' },
        { text: 'You cannot tell without knowing the current', mis: 'M12' },
      ], correct: 0 },
    { id: 'm-graph-R', kind: 'mis', type: 'graph', idea: 'resistance-at-a-point', lesson: CV, kp: 4, label: 'Resistance from a graph: V ÷ I', graph: G.lampMarked,
      question: 'This is a filament lamp\'s I-V graph. At the marked point the potential difference is 4.0 V and the current is 0.50 A. What is the resistance there?',
      options: [
        { text: '8 Ω (4.0 ÷ 0.50)' },
        { text: 'The gradient (steepness) of the curve at that point', mis: 'M13' },
        { text: '0.125 Ω (0.50 ÷ 4.0)', mis: 'M14' },
      ], correct: 0 },
  ];
  const mis = id => MIS.find(m => m.id === id) || LATER.find(m => m.id === id);

  // Shorter quick check (brief 2026-10-26): false keeps the 15-question version.
  const SHORT_CHECK = true;

  // ── For the later tests: the two misconceptions the quick check now teaches,
  // asked in other words and another situation (brief 2026-10-26, step 4) ──
  const LATER = [
    { id: 'm-loop-2', kind: 'mis', type: 'recall', idea: 'closed-circuit', lesson: CV, kp: 0, label: 'A lamp needs a complete loop',
      question: 'A doorbell is joined to a cell by two wires. One of the wires breaks. What happens when you press the bell?',
      options: [
        { text: 'Nothing: charge must flow out of the cell, through the bell and back again' },
        { text: 'It still rings: one wire is enough to carry the electricity to the bell', mis: 'M1' },
        { text: 'It still rings, but more quietly, because only one wire is working', mis: 'M1' },
        { text: 'It still rings: the cell sends the electricity out whatever the wiring', mis: 'M7' },
      ], correct: 0 },
    { id: 'm-used-up-2', kind: 'mis', type: 'explain', idea: 'current-same-in-loop', lesson: CV, kp: 0, label: 'The current is the same all round a loop',
      question: 'A heater is joined to a power supply in one loop. How does the current flowing into the heater compare with the current flowing out of it?',
      options: [
        { text: 'They are the same' },
        { text: 'Less flows out: the heater uses up some of the current', mis: 'M2' },
        { text: 'Less flows out, because that wire is further round the loop from the supply', mis: 'M4' },
        { text: 'Currents flow into the heater from both ends of the supply and meet there', mis: 'M3' },
      ], correct: 0 },
  ];

  // ── The shorter quick check: 6 questions, about 5 minutes, that teach ──
  const QUICK = [
    { id: 'd-rearrange', kind: 'prereq', type: 'recall', idea: 'maths-rearrange', lesson: CV, kp: 0, label: 'Rearranging an equation',
      question: 'If a = b × c, which of these is right?',
      options: [{ text: 'c = a ÷ b' }, { text: 'c = a × b' }, { text: 'c = b ÷ a' }, { text: 'c = a − b' }], correct: 0,
      recap: 'Rearranging: to get a letter on its own when a = b × c, divide both sides by the other letter. So c = a ÷ b, and b = a ÷ c. The lesson does this step by step in its worked examples.',
      feedback: { right: 'Right: to get c on its own, you divide a by b.',
        steps: ['Start with a = b × c.', 'To get c on its own, undo the "× b": divide both sides by b.', 'That leaves c = a ÷ b.'] },
      inLesson: { kp: 0, text: 'In the lesson: a worked example turns an equation round like this to find a missing number.', match: 'What is the current?' },
      similar: true },
    { id: 'd-minutes', kind: 'prereq', type: 'calculation', idea: 'maths-units-time', lesson: CV, kp: 0, label: 'Minutes into seconds',
      question: 'How many seconds are there in 3 minutes?',
      nums: [{ key: 't', label: 'Seconds', unit: 's', answer: 180, tol: 0, marks: 1 }],
      recap: 'Time in seconds: 1 minute is 60 s, so multiply minutes by 60. 1 hour is 60 × 60 = 3600 s. Electricity equations use time in seconds.',
      feedback: { right: 'Right: 3 minutes is 3 × 60 = 180 seconds.',
        steps: ['There are 60 seconds in 1 minute.', 'So multiply the minutes by 60: 3 × 60.', 'That gives 180 seconds.'] },
      inLesson: { kp: 0, text: 'In the lesson: a worked example changes 2 minutes into seconds first: 2 × 60 = 120 s.', match: '2 minutes = 2 × 60 = 120 s' },
      similar: true },
    { id: 'd-milli', kind: 'prereq', type: 'recall', idea: 'maths-prefix', lesson: CV, kp: 0, label: 'Milli and kilo',
      question: 'How many amperes is 250 milliamperes (250 mA)?',
      options: [{ text: '0.25 A' }, { text: '2.5 A' }, { text: '25 A' }, { text: '250 000 A' }], correct: 0,
      recap: 'Prefixes: milli means a thousandth, so divide by 1000 (250 mA = 0.25 A). Kilo means a thousand, so multiply by 1000 (3 kJ = 3000 J).',
      feedback: { right: 'Right: milli means a thousandth, so 250 mA is 250 ÷ 1000 = 0.25 A.',
        steps: ['Milli means a thousandth.', 'So divide by 1000: 250 ÷ 1000.', 'That gives 0.25 A (amperes, a unit you will meet in the lesson).'], explains: ['ampere'] },
      inLesson: { kp: 6, text: 'In the lesson: a worked example starts with 1.2 kJ. Kilo means a thousand, so there you multiply by 1000.', match: '1.2 kJ' },
      similar: true },
    { id: 'd-read-graph', kind: 'prereq', type: 'graph', idea: 'maths-read-graph', lesson: CV, kp: 3, label: 'Reading a value off a graph', graph: G.line,
      question: 'Use the graph. What is the current when the potential difference is 4 V?',
      nums: [{ key: 'I', label: 'Current', unit: 'A', answer: 0.4, abs: 0.02, marks: 1 }],
      recap: 'Reading a graph: go along the bottom axis to the value you know, straight up to the line, then across to the side axis and read the value there. Check what each square is worth first.',
      feedback: { right: 'Right: up from 4 on the bottom axis to the line, then across to 0.4.',
        steps: ['Find 4 on the bottom axis.', 'Go straight up until you reach the line.', 'Go across to the side axis and read the number there: 0.4.'] },
      inLesson: { kp: 4, text: 'In the lesson: you will read numbers off graphs like this, and drag a point along them to watch the numbers change.', match: 'drag the point along each graph' },
      similar: true },
    { id: 'd-loop', kind: 'mis', type: 'recall', idea: 'closed-circuit', lesson: CV, kp: 0, label: 'A lamp needs a complete loop', later: 'm-loop-2',
      question: 'You have a bulb, some wire and a battery (the kind that goes in a torch). How do you make the bulb light up?',
      options: [
        { text: 'Two wires, making a loop: out of the battery, through the bulb and back' },
        { text: 'One wire from the battery to the bulb is enough', mis: 'M1' },
        { text: 'One wire is enough, as long as it is a thick one', mis: 'M1' },
        { text: 'Any way at all: the battery sends electricity out to the bulb', mis: 'M7' },
      ], correct: 0, explains: ['battery'],
      feedback: { right: 'Right: you need a complete loop, out of the battery, through the bulb and back.',
        why: ['The answer: two wires, making a loop from the battery, through the bulb and back.', 'Nothing flows unless there is a loop all the way round and back to the battery.', 'With one wire there is a gap, so nothing flows and the bulb stays dark.'], explains: ['battery'] },
      inLesson: { kp: 0, text: 'In the lesson: you will try this on a circuit on screen. Open the switch, which makes a gap, and watch the bulb go out.', match: 'Open the switch', explains: ['switch'] } },
    { id: 'd-used-up', kind: 'mis', type: 'explain', idea: 'current-same-in-loop', lesson: CV, kp: 0, label: 'The current is the same all round a loop', later: 'm-used-up-2',
      question: 'A bulb is joined to a battery (the kind in a torch) in one loop of wire. The bulb is lit. Compare the flow of electricity going into the bulb with the flow coming out of it.',
      options: [
        { text: 'They are the same' },
        { text: 'Less comes out: the bulb uses up some of the flow', mis: 'M2' },
        { text: 'The flow gets less the further it goes from the battery', mis: 'M4' },
        { text: 'Electricity flows into the bulb from both ends of the battery and meets there', mis: 'M3' },
      ], correct: 0, explains: ['battery'],
      feedback: { right: 'Right: the bulb does not use up the flow. The same amount goes in and comes out.',
        why: ['The answer: the same amount flows in and out.', 'The bulb does not use up the flow. It all carries on round the loop.', 'So the flow is the same all the way round the loop.'], explains: ['battery'] },
      inLesson: { kp: 0, text: 'In the lesson: you will test this on a circuit on screen, with a measuring dial before the bulb and one after it.', match: 'watch both ammeters' } },
  ];

  // "Try a similar one": the same kind of question with new numbers, checked in code.
  function similar(id, seed) {
    let a = (Number(seed) >>> 0) || 1;
    const r = () => { a = (a * 1103515245 + 12345) >>> 0; return a / 4294967296; };
    const pick = list => list[Math.floor(r() * list.length)];
    const fmt = v => String(+v.toFixed(4));
    if (id === 'd-rearrange') {
      const [x, y, z] = pick([['p', 'q', 'r'], ['x', 'y', 'z'], ['d', 's', 't'], ['m', 'n', 'k'], ['w', 'f', 'h']]);
      const findY = r() < 0.5, want = findY ? y : z, other = findY ? z : y;
      return { question: `If ${x} = ${y} × ${z}, which of these is right?`,
        options: [`${want} = ${x} ÷ ${other}`, `${want} = ${x} × ${other}`, `${want} = ${other} ÷ ${x}`, `${want} = ${x} − ${other}`], correct: 0,
        answerText: `${want} = ${x} ÷ ${other}`,
        steps: [`Start with ${x} = ${y} × ${z}.`, `To get ${want} on its own, divide both sides by ${other}.`, `That leaves ${want} = ${x} ÷ ${other}.`] };
    }
    if (id === 'd-minutes') {
      const m = pick([2, 4, 5, 6, 7, 8, 10, 12, 15, 20]);
      return { question: `How many seconds are there in ${m} minutes?`, answer: m * 60, unit: 's', abs: 0, label: 'Seconds',
        answerText: `${m * 60} seconds`,
        steps: ['There are 60 seconds in 1 minute.', `So multiply the minutes by 60: ${m} × 60.`, `That gives ${m * 60} seconds.`] };
    }
    if (id === 'd-milli') {
      const x = pick([20, 40, 50, 80, 100, 125, 200, 400, 500, 750]);
      const opts = [x / 1000, x / 100, x / 10, x * 1000].map(v => `${fmt(v).replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} A`);
      return { question: `How many amperes is ${x} milliamperes (${x} mA)?`, options: opts, correct: 0,
        answerText: `${fmt(x / 1000)} A`,
        steps: ['Milli means a thousandth.', `So divide by 1000: ${x} ÷ 1000.`, `That gives ${fmt(x / 1000)} A.`] };
    }
    if (id === 'd-read-graph') {
      const v = pick([1, 2, 3, 5, 6]);
      return { question: `Use the graph. What is the current when the potential difference is ${v} V?`, graph: G.line, answer: +(v * 0.1).toFixed(2), unit: 'A', abs: 0.02, label: 'Current',
        answerText: `${fmt(v * 0.1)} A`,
        steps: [`Find ${v} on the bottom axis.`, 'Go straight up until you reach the line.', `Go across to the side axis and read the number there: ${fmt(v * 0.1)}.`] };
    }
    return null;
  }
  // Her answer to a similar question: right or not.
  function markSimilar(q, response) {
    if (q.options) return Number.isInteger(response) && response === q.correct;
    return within(num(response), q.answer, 0, q.abs);
  }

  // ── The quick check before you start, before 2026-10-26 (15 questions, about 10 minutes; SHORT_CHECK false) ──
  const DIAGNOSTIC_15 = [
    { id: 'd-rearrange', kind: 'prereq', type: 'recall', idea: 'maths-rearrange', lesson: CV, kp: 0, label: 'Rearranging an equation',
      question: 'If a = b × c, which of these is right?',
      options: [{ text: 'c = a ÷ b' }, { text: 'c = a × b' }, { text: 'c = b ÷ a' }, { text: 'c = a − b' }], correct: 0,
      recap: 'Rearranging: to get a letter on its own when a = b × c, divide both sides by the other letter. So c = a ÷ b, and b = a ÷ c. The lesson does this step by step in its worked examples.' },
    { id: 'd-minutes', kind: 'prereq', type: 'calculation', idea: 'maths-units-time', lesson: CV, kp: 0, label: 'Minutes into seconds',
      question: 'How many seconds are there in 3 minutes?',
      nums: [{ key: 't', label: 'Seconds', unit: 's', answer: 180, tol: 0, marks: 1 }],
      recap: 'Time in seconds: 1 minute is 60 s, so multiply minutes by 60. 1 hour is 60 × 60 = 3600 s. Electricity equations use time in seconds.' },
    { id: 'd-milli', kind: 'prereq', type: 'recall', idea: 'maths-prefix', lesson: CV, kp: 0, label: 'Milli and kilo',
      question: 'How many amperes is 250 milliamperes (250 mA)?',
      options: [{ text: '0.25 A' }, { text: '2.5 A' }, { text: '25 A' }, { text: '250 000 A' }], correct: 0,
      recap: 'Prefixes: milli means a thousandth, so divide by 1000 (250 mA = 0.25 A). Kilo means a thousand, so multiply by 1000 (3 kJ = 3000 J).' },
    { id: 'd-read-graph', kind: 'prereq', type: 'graph', idea: 'maths-read-graph', lesson: CV, kp: 3, label: 'Reading a value off a graph', graph: G.line,
      question: 'Use the graph. What is the current when the potential difference is 4 V?',
      nums: [{ key: 'I', label: 'Current', unit: 'A', answer: 0.4, abs: 0.02, marks: 1 }],
      recap: 'Reading a graph: go along the bottom axis to the value you know, straight up to the line, then across to the side axis and read the value there. Check what each square is worth first.' },
    mis('m-loop'), mis('m-same-current'), mis('m-add-cell'), mis('m-flat'), mis('m-voltmeter'), mis('m-ammeter'), mis('m-ohmic'), mis('m-graph-R'),
    { id: 'd-x-charge', kind: 'exam', type: 'calculation', idea: 'eq-Q=It', lesson: CV, kp: 0, label: 'Charge flow, with minutes',
      question: 'A phone charger supplies a current of 1.5 A for 20 minutes. Calculate the charge that flows. Show the time in seconds first.',
      nums: [
        { key: 't', label: 'Time in seconds', unit: 's', answer: 1200, tol: 0, marks: 1 },
        { key: 'Q', label: 'Charge flow', unit: 'C', answer: 1800, tol: 0.01, marks: 2, ecf: '1.5 * t' },
      ] },
    { id: 'd-x-graph', kind: 'exam', type: 'graph', idea: 'ohmic-conductor', lesson: CV, kp: 3, label: 'Naming a component from its I-V graph',
      question: 'A component\'s I-V graph is a straight line through the origin. Which component is it?',
      options: [{ text: 'A resistor at constant temperature' }, { text: 'A filament lamp' }, { text: 'A diode' }, { text: 'A thermistor' }], correct: 0 },
    { id: 'd-x-vary', kind: 'exam', type: 'practical', idea: 'practical-iv', lesson: CV, kp: 5, label: 'Changing the potential difference in the I-V practical',
      question: 'In the I-V practical, how could you change the potential difference across the component you are testing?',
      options: [{ text: 'Change the resistance of the variable resistor' }, { text: 'Close the switch' }, { text: 'Reverse the connections to the supply' }, { text: 'Take the ammeter out' }], correct: 0 },
  ];
  const DIAGNOSTIC = SHORT_CHECK ? QUICK : DIAGNOSTIC_15;
  // The later tests ask the quick check's two misconceptions in other words (SHORT_CHECK).
  const LOOP = SHORT_CHECK ? 'm-loop-2' : 'm-loop', SAME = SHORT_CHECK ? 'm-used-up-2' : 'm-same-current';

  // ── Post-test: Current and potential difference ──
  const POST_CV = [
    { id: 'p1-recall', kind: 'exam', type: 'recall', idea: 'eq-V=IR', lesson: CV, kp: 1, label: 'Recall V = I R',
      question: 'Which equation links potential difference (V), current (I) and resistance (R)?',
      options: [{ text: 'V = I R' }, { text: 'V = I ÷ R' }, { text: 'R = V × I' }, { text: 'I = V R' }], correct: 0 },
    { id: 'p1-current', kind: 'exam', type: 'calculation', idea: 'eq-Q=It', lesson: CV, kp: 0, label: 'Current from charge and time',
      question: 'A charge of 54 C flows through a toy motor in 90 s. Calculate the current.',
      nums: [{ key: 'I', label: 'Current', unit: 'A', answer: 0.6, tol: 0.01, marks: 3 }] },
    { id: 'p1-mA', kind: 'exam', type: 'calculation', idea: 'eq-Q=It', lesson: CV, kp: 0, label: 'Charge flow with mA and minutes',
      question: 'An LED torch has a current of 40 mA for 15 minutes. Calculate the charge that flows. Convert the current and the time first.',
      nums: [
        { key: 'I', label: 'Current in amperes', unit: 'A', answer: 0.04, tol: 0, marks: 1 },
        { key: 't', label: 'Time in seconds', unit: 's', answer: 900, tol: 0, marks: 1 },
        { key: 'Q', label: 'Charge flow', unit: 'C', answer: 36, tol: 0.01, marks: 2, ecf: 'I * t' },
      ] },
    { id: 'p1-resistance', kind: 'exam', type: 'calculation', idea: 'eq-V=IR', lesson: CV, kp: 1, label: 'Resistance from V and I',
      question: 'A kettle\'s heating element has a potential difference of 230 V across it and a current of 9.2 A through it. Calculate its resistance.',
      nums: [{ key: 'R', label: 'Resistance', unit: 'Ω', answer: 25, tol: 0.01, marks: 3 }] },
    { id: 'p1-kJ', kind: 'exam', type: 'calculation', idea: 'eq-E=QV', lesson: CV, kp: 6, label: 'Potential difference from kJ and C',
      question: 'A drone\'s battery transfers 54 kJ of energy when 3600 C of charge flows. Calculate the potential difference of the battery. Convert the energy first.',
      nums: [
        { key: 'E', label: 'Energy in joules', unit: 'J', answer: 54000, tol: 0, marks: 1 },
        { key: 'V', label: 'Potential difference', unit: 'V', answer: 15, tol: 0.01, marks: 3, ecf: 'E / 3600' },
      ] },
    { id: 'p1-lamp-graph', kind: 'exam', type: 'graph', idea: 'resistance-at-a-point', lesson: CV, kp: 4, label: 'Resistance from a lamp\'s graph', graph: G.lamp,
      question: 'This is the I-V graph of a filament lamp. Use it to find the lamp\'s resistance when the potential difference is 3.0 V.',
      nums: [
        { key: 'I', label: 'Current at 3.0 V, read off the graph', unit: 'A', answer: 0.25, abs: 0.01, marks: 1 },
        { key: 'R', label: 'Resistance at 3.0 V', unit: 'Ω', answer: 12, tol: 0.02, marks: 2, ecf: '3 / I' },
      ] },
    { id: 'p1-diode-graph', kind: 'exam', type: 'graph', idea: 'diode', lesson: CV, kp: 4, label: 'Naming a diode from its graph',
      question: 'A component\'s I-V graph shows no current for negative potential differences. For positive ones, the current stays near zero at first, then rises steeply. Which component is it?',
      options: [{ text: 'A diode' }, { text: 'A filament lamp' }, { text: 'A resistor at constant temperature' }, { text: 'An LDR' }], correct: 0 },
    { id: 'p1-switch-off', kind: 'exam', type: 'practical', idea: 'practical-wire', lesson: CV, kp: 2, label: 'Why switch off between readings',
      question: 'In the resistance-of-a-wire practical, why should you switch the circuit off between readings?',
      options: [{ text: 'To keep the temperature of the wire the same' }, { text: 'To save the cell' }, { text: 'To set the ammeter back to zero' }, { text: 'To make the wire longer' }], correct: 0 },
    { id: 'p1-meters', kind: 'exam', type: 'practical', idea: 'practical-iv', lesson: CV, kp: 5, label: 'Connecting the two meters',
      question: 'You are measuring the I-V characteristic of a component.',
      parts: [
        { label: 'How is the ammeter connected?', options: ['In series with the component', 'In parallel across the component'], correct: 0, marks: 1 },
        { label: 'How is the voltmeter connected?', options: ['In parallel across the component', 'In series with the component'], correct: 0, marks: 1 },
      ] },
    { id: 'p1-lamp-explain', kind: 'exam', type: 'explain', idea: 'filament-lamp', lesson: CV, kp: 4, label: 'Why a lamp\'s resistance rises',
      question: 'Explain why the resistance of a filament lamp increases as the potential difference across it increases. Complete each step.',
      parts: [
        { label: 'As the potential difference increases, the current…', options: ['increases', 'decreases', 'stays the same'], correct: 0, marks: 1 },
        { label: '…so the temperature of the filament…', options: ['increases', 'decreases', 'stays the same'], correct: 0, marks: 1 },
        { label: '…so the resistance of the filament…', options: ['increases', 'decreases', 'stays the same'], correct: 0, marks: 1 },
      ] },
    mis(LOOP), mis(SAME), mis('m-add-cell'), mis('m-flat'), mis('m-voltmeter'), mis('m-ohmic'), mis('m-graph-R'),
  ];

  // ── Post-test: Components ──
  const POST_COMP = [
    { id: 'p2-thermistor-symbol', kind: 'exam', type: 'recall', idea: 'thermistor', lesson: COMP, kp: 1, label: 'The thermistor symbol',
      question: 'Which description is the circuit symbol for a thermistor?',
      options: [{ text: 'A resistor with a diagonal line through it that ends in a short flat tail' }, { text: 'A resistor in a circle with two arrows pointing in' }, { text: 'A resistor with an arrow through it' }, { text: 'A rectangle with a line through it' }], correct: 0 },
    { id: 'p2-led', kind: 'exam', type: 'recall', idea: 'led', lesson: COMP, kp: 0, label: 'What an LED is',
      question: 'Which component is a diode that gives out light?',
      options: [{ text: 'An LED' }, { text: 'An LDR' }, { text: 'A filament lamp' }, { text: 'A thermistor' }], correct: 0 },
    { id: 'p2-ldr', kind: 'exam', type: 'recall', idea: 'ldr', lesson: COMP, kp: 2, label: 'An LDR in brighter light',
      question: 'What happens to the resistance of an LDR as the light falling on it gets brighter?',
      options: [{ text: 'It decreases' }, { text: 'It increases' }, { text: 'It stays the same' }], correct: 0 },
    { id: 'p2-dusk', kind: 'exam', type: 'explain', idea: 'ldr', lesson: COMP, kp: 2, label: 'A light that comes on at dusk',
      question: 'A garden light should switch on by itself when it gets dark.',
      parts: [
        { label: 'Which component senses the dark?', options: ['An LDR', 'A thermistor', 'A diode', 'A fuse'], correct: 0, marks: 1 },
        { label: 'As it gets dark, its resistance…', options: ['increases', 'decreases', 'stays the same'], correct: 0, marks: 1 },
      ] },
    { id: 'p2-thermistor-graph', kind: 'exam', type: 'graph', idea: 'thermistor', lesson: COMP, kp: 1, label: 'Reading a thermistor graph', graph: G.thermistor,
      question: 'The graph shows how a thermistor\'s resistance changes with temperature. At 20 °C its resistance is 1700 Ω. Find the change in resistance from 20 °C to 40 °C.',
      nums: [
        { key: 'R40', label: 'Resistance at 40 °C, read off the graph', unit: 'Ω', answer: 800, abs: 50, marks: 1 },
        { key: 'dR', label: 'Change in resistance', unit: 'Ω', answer: 900, abs: 60, marks: 1, ecf: '1700 - R40' },
      ] },
    { id: 'p2-thermistor-R', kind: 'exam', type: 'calculation', idea: 'sensor-circuit', lesson: COMP, kp: 3, label: 'A thermistor\'s resistance from V and I',
      question: 'A thermistor in hot water has a potential difference of 4.5 V across it and a current of 0.015 A through it. Calculate its resistance.',
      nums: [{ key: 'R', label: 'Resistance', unit: 'Ω', answer: 300, tol: 0.01, marks: 3 }] },
    { id: 'p2-choose', kind: 'exam', type: 'explain', idea: 'thermistor', lesson: COMP, kp: 1, label: 'Choosing a thermistor',
      question: 'Between 0 °C and 20 °C, thermistor A\'s resistance falls from 5000 Ω to 1000 Ω. Thermistor B\'s falls from 300 Ω to 250 Ω.',
      parts: [
        { label: 'Which is better for sensing temperatures between 0 °C and 20 °C?', options: ['Thermistor A', 'Thermistor B'], correct: 0, marks: 1 },
        { label: 'Why?', options: ['Its resistance changes more over that range', 'It has the lower resistance', 'It has the higher resistance'], correct: 0, marks: 1 },
      ] },
    { id: 'p2-measure', kind: 'exam', type: 'practical', idea: 'sensor-circuit', lesson: COMP, kp: 3, label: 'How to find a sensor\'s resistance',
      question: 'How do you find the resistance of a thermistor at one temperature?',
      options: [{ text: 'Measure the current through it and the potential difference across it, then divide the potential difference by the current' }, { text: 'Read its resistance off the ammeter' }, { text: 'Measure the current only' }, { text: 'Measure the temperature only' }], correct: 0 },
    { id: 'p2-ldr-circuit', kind: 'exam', type: 'practical', idea: 'sensor-circuit', lesson: COMP, kp: 3, label: 'Meters in a sensor circuit',
      question: 'You are drawing a circuit to test an LDR.',
      parts: [
        { label: 'The ammeter goes…', options: ['in series with the LDR', 'in parallel across the LDR'], correct: 0, marks: 1 },
        { label: 'The voltmeter goes…', options: ['in parallel across the LDR', 'in series with the LDR'], correct: 0, marks: 1 },
      ] },
    { id: 'p2-open-switch', kind: 'exam', type: 'recall', idea: 'circuit-diagram', lesson: COMP, kp: 0, label: 'An open switch in a diagram',
      question: 'A circuit diagram shows a cell, a switch, a lamp and an ammeter in one loop. The switch is drawn open. What does the ammeter read?',
      options: [{ text: '0 A, because the loop is broken' }, { text: 'The same as with the switch closed' }, { text: 'Half the current' }, { text: 'It depends where the switch is drawn' }], correct: 0 },
    mis('m-ammeter'), mis(SAME),
  ];

  // ── Delayed test, a week later: both lessons ──
  const DELAYED = [
    { id: 'y-hours', kind: 'exam', type: 'calculation', idea: 'eq-Q=It', lesson: CV, kp: 0, label: 'Charge flow over hours',
      question: 'A car battery charger gives a current of 4.0 A for 2 hours. Calculate the charge that flows. Show the time in seconds first.',
      nums: [
        { key: 't', label: 'Time in seconds', unit: 's', answer: 7200, tol: 0, marks: 1 },
        { key: 'Q', label: 'Charge flow', unit: 'C', answer: 28800, tol: 0.01, marks: 2, ecf: '4 * t' },
      ] },
    { id: 'y-energy', kind: 'exam', type: 'calculation', idea: 'eq-E=QV', lesson: CV, kp: 6, label: 'Energy from charge and pd',
      question: 'A charge of 500 C flows through a car\'s 12 V starter motor. Calculate the energy transferred.',
      nums: [{ key: 'E', label: 'Energy transferred', unit: 'J', answer: 6000, tol: 0.01, marks: 2 }] },
    { id: 'y-current', kind: 'exam', type: 'calculation', idea: 'eq-V=IR', lesson: CV, kp: 1, label: 'Current from V and R',
      question: 'A heater with a resistance of 46 Ω is connected to a 230 V supply. Calculate the current through it.',
      nums: [{ key: 'I', label: 'Current', unit: 'A', answer: 5, tol: 0.01, marks: 3 }] },
    { id: 'y-lamp-shape', kind: 'exam', type: 'graph', idea: 'filament-lamp', lesson: CV, kp: 4, label: 'Naming a lamp from its graph',
      question: 'Which component has an I-V graph that curves and gets flatter as the potential difference increases?',
      options: [{ text: 'A filament lamp' }, { text: 'A resistor at constant temperature' }, { text: 'A diode' }, { text: 'A fuse' }], correct: 0 },
    { id: 'y-resistor-graph', kind: 'exam', type: 'graph', idea: 'resistance-at-a-point', lesson: CV, kp: 3, label: 'Resistance from a resistor\'s graph', graph: G.resistor,
      question: 'This is the I-V graph of a resistor. Use it to find the resistance.',
      nums: [
        { key: 'I', label: 'Current at 5 V, read off the graph', unit: 'A', answer: 0.4, abs: 0.01, marks: 1 },
        { key: 'R', label: 'Resistance', unit: 'Ω', answer: 12.5, tol: 0.02, marks: 2, ecf: '5 / I' },
      ] },
    { id: 'y-diode', kind: 'exam', type: 'explain', idea: 'diode', lesson: CV, kp: 4, label: 'A diode connected backwards',
      question: 'A student connects a diode the wrong way round in a circuit with a cell and an ammeter.',
      parts: [
        { label: 'What does the ammeter read?', options: ['Zero, or almost zero', 'A large current', 'The same as the right way round'], correct: 0, marks: 1 },
        { label: 'Why?', options: ['The diode has a very high resistance in the reverse direction', 'The ammeter is broken', 'There is a gap in the circuit', 'The cell and the diode push against each other'], correct: 0, marks: 1 },
      ] },
    { id: 'y-vary', kind: 'exam', type: 'practical', idea: 'practical-iv', lesson: CV, kp: 5, label: 'Changing the current in the I-V practical',
      question: 'Give one way to change the current through the component in the I-V practical.',
      options: [{ text: 'Change the number of cells' }, { text: 'Close the switch' }, { text: 'Use longer wires for the voltmeter' }, { text: 'Reverse the ammeter only' }], correct: 0 },
    { id: 'y-wire', kind: 'exam', type: 'practical', idea: 'practical-wire', lesson: CV, kp: 2, label: 'The resistance-of-a-wire method',
      question: 'In the resistance-of-a-wire practical:',
      parts: [
        { label: 'How do you change the length of wire being tested?', options: ['Move one clip along the wire', 'Change the number of cells', 'Move the voltmeter to the cell'], correct: 0, marks: 1 },
        { label: 'Which graph do you plot?', options: ['Resistance against length', 'Current against time', 'Length against temperature'], correct: 0, marks: 1 },
      ] },
    { id: 'y-ldr-symbol', kind: 'exam', type: 'recall', idea: 'ldr', lesson: COMP, kp: 2, label: 'The LDR symbol',
      question: 'Which description is the circuit symbol for an LDR?',
      options: [{ text: 'A resistor in a circle with two arrows pointing in' }, { text: 'A resistor with a diagonal line through it that ends in a short flat tail' }, { text: 'A diode with two arrows coming out of it' }, { text: 'A rectangle with a line through it' }], correct: 0 },
    { id: 'y-thermostat', kind: 'exam', type: 'explain', idea: 'thermistor', lesson: COMP, kp: 1, label: 'A thermistor as a room warms',
      question: 'A thermistor in a thermostat has a fixed potential difference across it. The room warms up.',
      parts: [
        { label: 'The thermistor\'s resistance…', options: ['decreases', 'increases', 'stays the same'], correct: 0, marks: 1 },
        { label: 'So the current through it…', options: ['increases', 'decreases', 'stays the same'], correct: 0, marks: 1 },
      ] },
    ...MIS.map(m => (m.id === 'm-loop' ? mis(LOOP) : m.id === 'm-same-current' ? mis(SAME) : m)),
  ];

  const TESTS = {
    diagnostic: { id: 'diagnostic', name: 'Quick check before you start', minutes: SHORT_CHECK ? 5 : 10, items: DIAGNOSTIC, teach: SHORT_CHECK },
    'post-cv': { id: 'post-cv', name: 'Post-test: Current and potential difference', lesson: CV, minutes: 15, items: POST_CV },
    'post-comp': { id: 'post-comp', name: 'Post-test: Components', lesson: COMP, minutes: 12, items: POST_COMP },
    delayed: { id: 'delayed', name: 'Delayed test (a week later)', minutes: 15, items: DELAYED },
  };

  // ── Success criteria, set before she starts (tools/pilot/success-criteria.md) ──
  const CRITERIA = { postPct: 70, delayedPct: 60, delayedAfterDays: 7 };

  // ── Marking ───────────────────────────────────────────────────────────
  const maxMarks = it => it.nums ? it.nums.reduce((a, n) => a + n.marks, 0) : it.parts ? it.parts.reduce((a, p) => a + p.marks, 0) : 1;
  // Her number: the first number in what she typed ("1,800", "1800 C", "0.04").
  function num(text) {
    const t = String(text == null ? '' : text).replace(/(\d),(\d{3})\b/g, '$1$2').replace(/(\d) (\d{3})\b/g, '$1$2');
    const m = t.match(/-?(\d+(\.\d*)?|\.\d+)/);
    return m ? Number(m[0]) : null;
  }
  // tol: a fraction of the answer (0 = exact); abs: an absolute range, for a
  // value read off a graph (the mark schemes allow a range there).
  function within(v, want, tol, abs) {
    if (v === null || !isFinite(v)) return false;
    const t = abs !== undefined ? abs : (tol || 0) * Math.abs(want);
    return Math.abs(v - want) <= t + 1e-9 * Math.max(1, Math.abs(want));
  }
  function evalEcf(expr, vals) {
    const names = Object.keys(vals);
    // eslint-disable-next-line no-new-func
    return new Function(...names, `return (${expr});`)(...names.map(k => vals[k]));
  }
  // response: for options, the option index; for parts, an array of indexes;
  // for nums, an object { key: text }. Returns { marks, max, right, mis: [...] }.
  function mark(it, response) {
    const max = maxMarks(it);
    if (it.options) {
      const k = Number.isInteger(response) ? response : -1;
      const right = k === it.correct;
      const m = !right && it.options[k] && it.options[k].mis ? [it.options[k].mis] : [];
      return { marks: right ? 1 : 0, max, right, mis: m, chose: k };
    }
    if (it.parts) {
      const r = Array.isArray(response) ? response : [];
      let marks = 0;
      it.parts.forEach((p, j) => { if (r[j] === p.correct) marks += p.marks; });
      return { marks, max, right: marks === max, mis: [] };
    }
    const vals = {}, got = {};
    let marks = 0;
    for (const n of it.nums) {
      const v = num((response || {})[n.key]);
      vals[n.key] = v;
      let ok = within(v, n.answer, n.tol, n.abs);
      // Error carried forward: right for her own earlier values.
      if (!ok && n.ecf && v !== null) {
        const deps = Object.fromEntries(Object.entries(vals).filter(([k]) => k !== n.key).map(([k, x]) => [k, x === null ? NaN : x]));
        let want = NaN;
        try { want = evalEcf(n.ecf, deps); } catch { want = NaN; }
        if (isFinite(want) && within(v, want, n.tol || 0.01, n.abs)) ok = true;
      }
      got[n.key] = ok;
      if (ok) marks += n.marks;
    }
    return { marks, max, right: marks === max, mis: [], parts: got };
  }
  // A finished test: { answers: { itemId: response } } → totals.
  function score(testId, answers) {
    const t = TESTS[testId];
    const per = t.items.map(it => ({ id: it.id, kind: it.kind, type: it.type, idea: it.idea, lesson: it.lesson, kp: it.kp, ...mark(it, (answers || {})[it.id]) }));
    const sum = (f) => per.filter(f).reduce((a, x) => ({ marks: a.marks + x.marks, max: a.max + x.max }), { marks: 0, max: 0 });
    const exam = sum(x => x.kind === 'exam'), all = sum(() => true), misItems = per.filter(x => x.kind === 'mis');
    const shown = [...new Set(per.flatMap(x => x.mis))].sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)));
    const pct = s => (s.max ? Math.round(100 * s.marks / s.max) : null);
    return { test: testId, per, exam, examPct: pct(exam), all, allPct: pct(all), misRight: misItems.filter(x => x.right).length, misCount: misItems.length, misconceptions: shown };
  }

  // What the quick check tells each lesson: recaps for what she lacks, and
  // what she already knows (so the lesson can say she may go quickly).
  function plan(diagScore, lessonId) {
    if (!diagScore) return null;
    const items = Object.fromEntries(DIAGNOSTIC.map(i => [i.id, i]));
    const per = diagScore.per.filter(x => items[x.id] && items[x.id].lesson === lessonId);
    return {
      recaps: per.filter(x => x.kind === 'prereq' && !x.right).map(x => ({ id: x.id, label: items[x.id].label, text: items[x.id].recap, kp: x.kp })),
      known: per.filter(x => x.right).map(x => ({ id: x.id, label: items[x.id].label, kp: x.kp, kind: x.kind })),
      work: per.filter(x => !x.right).map(x => ({ id: x.id, label: items[x.id].label, kp: x.kp, kind: x.kind, mis: x.mis })),
    };
  }

  return { LESSONS, TESTS, MIS, LATER, SHORT_CHECK, CRITERIA, GRAPHS: G, maxMarks, mark, score, plan, num, similar, markSimilar };
});
