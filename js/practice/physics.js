/* ============================================================
   PRACTICE / PHYSICS.JS — practice generators for physics equations
   (brief v3.1, step 1d). Each makes a question like the lesson's worked
   examples: sometimes the simple case, sometimes with a unit to convert
   or the equation to rearrange. Numbers are picked so the answer comes
   out to at most 3 significant figures. Steps use the lessons' wording.
   ============================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./practice.js'));
  else factory(root.Practice);
})(typeof self !== 'undefined' ? self : this, function (Practice) {

  // Q = I t: charge flow = current × time
  Practice.register('Q=It', (r, { pick, fmt, clean }) => {
    const I = pick(r, [0.2, 0.25, 0.4, 0.5, 0.8, 1, 1.5, 2, 2.5, 3, 4, 5]);
    const kind = pick(r, ['Q', 'Q-min', 'I', 't']);
    if (kind === 'Q' || kind === 'Q-min') {
      const mins = kind === 'Q-min';
      const tShown = mins ? pick(r, [1, 2, 3, 4, 5, 10]) : pick(r, [5, 10, 20, 30, 40, 50, 60, 90, 120, 300]);
      const t = mins ? tShown * 60 : tShown;
      const Q = clean(I * t);
      return {
        question: `A current of ${fmt(I)} A flows for ${fmt(tShown)} ${mins ? (tShown === 1 ? 'minute' : 'minutes') : 's'}. How much charge flows, in coulombs (C)?`,
        given: { I, t }, find: 'Q', answer: { value: Q, unit: 'C', si: 1 },
        steps: [
          ...(mins ? [{ text: `Time must be in seconds: ${fmt(tShown)} × 60 = ${fmt(t)} s.` }] : []),
          { text: 'Write the equation: Q = I t.' },
          { text: `Put the numbers in: Q = ${fmt(I)} × ${fmt(t)} = ${fmt(Q)}` },
          { text: `The charge flow is ${fmt(Q)} C.` },
        ],
      };
    }
    const t = pick(r, [10, 20, 30, 40, 50, 60, 100, 120, 200]);
    const Q = clean(I * t);
    if (kind === 'I') {
      return {
        question: `${fmt(Q)} C of charge flows past a point in ${fmt(t)} s. What is the current, in amperes (A)?`,
        given: { Q, t }, find: 'I', answer: { value: I, unit: 'A', si: 1 },
        steps: [
          { text: 'Start from Q = I t.' },
          { text: 'You want I, so divide both sides by t: I = Q ÷ t.' },
          { text: `Put the numbers in: I = ${fmt(Q)} ÷ ${fmt(t)} = ${fmt(I)}` },
          { text: `The current is ${fmt(I)} A.` },
        ],
      };
    }
    return {
      question: `A current of ${fmt(I)} A flows until ${fmt(Q)} C of charge has passed. How long does that take, in seconds (s)?`,
      given: { Q, I }, find: 't', answer: { value: t, unit: 's', si: 1 },
      steps: [
        { text: 'Start from Q = I t.' },
        { text: 'You want t, so divide both sides by I: t = Q ÷ I.' },
        { text: `Put the numbers in: t = ${fmt(Q)} ÷ ${fmt(I)} = ${fmt(t)}` },
        { text: `It takes ${fmt(t)} s.` },
      ],
    };
  });

  // E = Q V: energy transferred = charge flow × potential difference
  Practice.register('E=QV', (r, { pick, fmt, clean }) => {
    const Q = pick(r, [2, 4, 5, 10, 15, 20, 30, 40, 50, 60, 100, 200]);
    const V = pick(r, [1.5, 3, 4.5, 6, 9, 12, 24, 230]);
    const E = clean(Q * V);
    const kind = pick(r, ['E', 'V', 'Q', 'V-kJ']);
    if (kind === 'E') {
      return {
        question: `${fmt(Q)} C of charge flows through a potential difference of ${fmt(V)} V. How much energy is transferred, in joules (J)?`,
        given: { Q, V }, find: 'E', answer: { value: E, unit: 'J', si: 1 },
        steps: [
          { text: 'Write the equation: E = Q V.' },
          { text: `Put the numbers in: E = ${fmt(Q)} × ${fmt(V)} = ${fmt(E)}` },
          { text: `The energy transferred is ${fmt(E)} J.` },
        ],
      };
    }
    if (kind === 'V') {
      return {
        question: `${fmt(E)} J of energy is transferred when ${fmt(Q)} C of charge flows through a component. What is the potential difference across it, in volts (V)?`,
        given: { E, Q }, find: 'V', answer: { value: V, unit: 'V', si: 1 },
        steps: [
          { text: 'Start from E = Q V.' },
          { text: 'You want V, so divide both sides by Q: V = E ÷ Q.' },
          { text: `Put the numbers in: V = ${fmt(E)} ÷ ${fmt(Q)} = ${fmt(V)}` },
          { text: `The potential difference is ${fmt(V)} V.` },
        ],
      };
    }
    if (kind === 'Q') {
      return {
        question: `A component has a potential difference of ${fmt(V)} V across it, and ${fmt(E)} J of energy is transferred. How much charge flowed, in coulombs (C)?`,
        given: { E, V }, find: 'Q', answer: { value: Q, unit: 'C', si: 1 },
        steps: [
          { text: 'Start from E = Q V.' },
          { text: 'You want Q, so divide both sides by V: Q = E ÷ V.' },
          { text: `Put the numbers in: Q = ${fmt(E)} ÷ ${fmt(V)} = ${fmt(Q)}` },
          { text: `The charge flow is ${fmt(Q)} C.` },
        ],
      };
    }
    // Energy given in kilojoules: convert first, then rearrange.
    const Q2 = pick(r, [10, 20, 40, 50, 100, 200, 500]);
    const V2 = pick(r, [6, 12, 24, 230]);
    const E2 = clean(Q2 * V2);
    const kJ = clean(E2 / 1000);
    return {
      question: `${fmt(kJ)} kJ of energy is transferred when ${fmt(Q2)} C of charge flows through a heater. What is the potential difference across the heater, in volts (V)?`,
      given: { E: E2, Q: Q2 }, find: 'V', answer: { value: V2, unit: 'V', si: 1 },
      steps: [
        { text: `Energy must be in joules: ${fmt(kJ)} kJ = ${fmt(kJ)} × 1000 = ${fmt(E2)} J.` },
        { text: 'Start from E = Q V. You want V, so divide both sides by Q: V = E ÷ Q.' },
        { text: `Put the numbers in: V = ${fmt(E2)} ÷ ${fmt(Q2)} = ${fmt(V2)}` },
        { text: `The potential difference is ${fmt(V2)} V.` },
      ],
    };
  });

  // V = I R: potential difference = current × resistance
  Practice.register('V=IR', (r, { pick, fmt, clean }) => {
    const kind = pick(r, ['V', 'I', 'R', 'V-mA']);
    if (kind === 'V-mA') {
      const mA = pick(r, [2, 4, 5, 10, 20, 25, 40, 50]);
      const R = pick(r, [100, 150, 200, 300, 400, 500, 1000]);
      const I = clean(mA / 1000);
      const V = clean(I * R);
      return {
        question: `A current of ${fmt(mA)} mA flows through a ${fmt(R)} Ω resistor. What is the potential difference across it, in volts (V)?`,
        given: { I, R }, find: 'V', answer: { value: V, unit: 'V', si: 1 },
        steps: [
          { text: `Current must be in amperes: ${fmt(mA)} mA = ${fmt(mA)} ÷ 1000 = ${fmt(I)} A.` },
          { text: 'Write the equation: V = I R.' },
          { text: `Put the numbers in: V = ${fmt(I)} × ${fmt(R)} = ${fmt(V)}` },
          { text: `The potential difference is ${fmt(V)} V.` },
        ],
      };
    }
    const I = pick(r, [0.1, 0.2, 0.25, 0.4, 0.5, 0.75, 1, 1.5, 2, 3]);
    const R = pick(r, [2, 4, 5, 6, 8, 10, 12, 20, 24, 30, 40, 50, 100]);
    const V = clean(I * R);
    if (kind === 'V') {
      return {
        question: `A current of ${fmt(I)} A flows through a ${fmt(R)} Ω resistor. What is the potential difference across it, in volts (V)?`,
        given: { I, R }, find: 'V', answer: { value: V, unit: 'V', si: 1 },
        steps: [
          { text: 'Write the equation: V = I R.' },
          { text: `Put the numbers in: V = ${fmt(I)} × ${fmt(R)} = ${fmt(V)}` },
          { text: `The potential difference is ${fmt(V)} V.` },
        ],
      };
    }
    if (kind === 'I') {
      return {
        question: `A potential difference of ${fmt(V)} V is put across a ${fmt(R)} Ω resistor. What is the current through it, in amperes (A)?`,
        given: { V, R }, find: 'I', answer: { value: I, unit: 'A', si: 1 },
        steps: [
          { text: 'Write the equation: V = I R.' },
          { text: 'You want I, so divide both sides by R: I = V ÷ R.' },
          { text: `Put the numbers in: I = ${fmt(V)} ÷ ${fmt(R)} = ${fmt(I)}` },
          { text: `The current is ${fmt(I)} A.` },
        ],
      };
    }
    return {
      question: `A component has a potential difference of ${fmt(V)} V across it and a current of ${fmt(I)} A through it. What is its resistance, in ohms (Ω)?`,
      given: { V, I }, find: 'R', answer: { value: R, unit: 'Ω', si: 1 },
      steps: [
        { text: 'Start from V = I R.' },
        { text: 'You want R, so divide both sides by I: R = V ÷ I.' },
        { text: `Put the numbers in: R = ${fmt(V)} ÷ ${fmt(I)} = ${fmt(R)}` },
        { text: `The resistance is ${fmt(R)} Ω.` },
      ],
    };
  });

  return Practice;
});
