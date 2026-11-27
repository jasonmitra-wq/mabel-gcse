/**
 * Recompute functions for the 41 maths lesson files (maths full audit,
 * 2026-11-26). Loaded by tools/maths-lesson-check.js.
 *
 * Written from the slide text, the way tools/maths-recompute-fns.js was
 * written for the questions: each value is worked out here from the question
 * or the mistake as described, then compared with what the lesson states.
 *
 * Per lesson, a function (H) => ({ we: [...], mistakes: [...], read: [...] }):
 *   H.chk(label, computed, field, literal, stated?)
 *       worked-example check. `literal` must appear in `field` of the worked
 *       example (so a misread is caught); `stated` is its value (default: the
 *       last "=" piece of the literal, evaluated).
 *   H.mis(item, { correct, stated, mistaken, claimed, how })
 *       one "Watch out for this" item (1-based). correct = the right answer,
 *       worked out here; stated = [field, literal, value?] where the
 *       correction states it; mistaken = what the mistaken method really
 *       gives; claimed = [field, literal, value?] where the text says what the
 *       mistake gives. Values: numbers, expression strings (compared as
 *       identities), arrays (compared as sets) or plain strings.
 *   H.concept(item, note)
 *       an item with no number to recompute (a habit, a label, a unit).
 *   read: things found while reading the text that no recompute can test.
 * Fields: "question", "conclusion", "steps[i].working|result|instruction",
 * "mistakes[i].mistake|correction" (0-based i, as in the JSON).
 */

module.exports = (H) => {
  const { root, ev } = H;
  const quadRoots = (a, b, c) => { const d = Math.sqrt(b * b - 4 * a * c); return [(-b + d) / (2 * a), (-b - d) / (2 * a)]; };
  const rad = d => d * Math.PI / 180;

  return {
    // ───────────────────────── M1 Number ─────────────────────────
    'num-integers': () => {
      const r2 = x => Math.round(x * 100) / 100;
      return {
        we: [
          H.chk('5.3864 to 2 d.p.', r2(5.3864), 'conclusion', '2 d.p. = 5.39', 5.39),
          H.chk('5.3864 to 2 s.f.', Number((5.3864).toPrecision(2)), 'conclusion', '2 s.f. = 5.4', 5.4),
        ],
        mistakes: [
          H.mis(1, { correct: r2(3.8512), stated: ['mistakes[0].mistake', 'the answer is 3.85', 3.85],
            mistaken: 3.86, claimed: ['mistakes[0].mistake', 'giving 3.86', 3.86],
            how: 'rounding on the 2nd d.p. digit (5) itself rounds 3.85 up to 3.86' }),
          H.concept(2, 'd.p. versus s.f. labels: 5.39 and 5.4 are both right answers to different questions'),
          H.mis(3, { correct: Math.round(6.96 * 10) / 10, stated: ['mistakes[2].correction', '7.0', 7], mistaken: 6.9,
            claimed: ['mistakes[2].mistake', 'writing 6.9', 6.9], how: 'dropping the carry' }),
        ],
        read: ['mistakes[0].mistake says the student "rounds up the 8, giving 3.86"; rounding up the 8 would give 3.9. The digit rounded up to reach 3.86 is the 5.'],
      };
    },

    'num-fractions': () => ({
      we: [
        H.chk('2¼ ÷ 1½', (9 / 4) / (3 / 2), 'conclusion', '= 1½', 1.5),
        H.chk('step 3 simplified', 18 / 12, 'steps[2].result', '3/2'),
        H.chk('quick check 1½ × 1½', 1.5 * 1.5, 'conclusion', '1½ × 1½ = 9/4', 9 / 4),
      ],
      mistakes: [
        H.mis(1, { correct: 1 / 3 + 1 / 4, stated: ['mistakes[0].mistake', '= 7/12', 7 / 12], mistaken: 2 / 7,
          claimed: ['mistakes[0].mistake', '= 2/7', 2 / 7], how: 'adding tops and bottoms' }),
        H.mis(2, { correct: (5 / 8) / (3 / 4), stated: ['mistakes[1].mistake', '5/8 × 4/3', (5 / 8) * (4 / 3)],
          mistaken: (8 / 5) * (3 / 4), claimed: ['mistakes[1].mistake', '8/5 × 3/4', (8 / 5) * (3 / 4)], how: 'flipping the first fraction' }),
        H.mis(3, { correct: (9 / 4) * (3 / 2), stated: ['mistakes[2].mistake', '= 3⅜', 27 / 8], mistaken: 2 * 1 + (1 / 4) * (1 / 2),
          claimed: ['mistakes[2].mistake', '= 2⅛', 17 / 8], how: 'whole parts and fraction parts multiplied separately' }),
      ],
    }),

    'num-percentages': () => ({
      we: [
        H.chk('750 reduced by 40%', 750 * 0.6, 'conclusion', '£450', 450),
        H.chk('40% of 750', 750 * 0.4, 'steps[2].working', '= £300', 300),
      ],
      mistakes: [
        H.mis(1, { correct: 750 * 0.6, stated: ['mistakes[0].correction', '0.60', 0.6 * 750], mistaken: 750 * 0.4,
          claimed: ['mistakes[0].mistake', '(£300)', 300], how: 'multiplier 0.40' }),
        H.mis(2, { correct: 96 / 1.2, stated: ['mistakes[1].mistake', '£96 ÷ 1.20 = £80', 80], mistaken: 96 * 0.8,
          claimed: ['mistakes[1].mistake', '= £76.80', 76.8], how: 'taking 20% off the new value' }),
        H.mis(3, { correct: 100 * 10 / 50, stated: ['mistakes[2].mistake', '× 100 = 20%', 20], mistaken: 100 * 10 / 60,
          claimed: ['mistakes[2].mistake', '= 16.7%', 16.7], how: 'dividing by the new value' }),
      ],
    }),

    'num-powers-roots': () => ({
      we: [
        H.chk('5³ × 5² ÷ 5⁴', 5 ** 3 * 5 ** 2 / 5 ** 4, 'conclusion', '= 5', 5),
        H.chk('5³ × 5²', 5 ** 5, 'steps[2].working', '5³ × 5² = 3125', 3125),
      ],
      mistakes: [
        H.mis(1, { correct: 3 ** 5, stated: ['mistakes[0].correction', '= 243', 243], mistaken: 9 ** 5, claimed: ['mistakes[0].mistake', '9⁵', 9 ** 5], how: 'multiplying the bases' }),
        H.mis(2, { correct: 4 ** 5, stated: ['mistakes[1].mistake', 'instead of 4⁵', 4 ** 5], mistaken: 4 ** 6, claimed: ['mistakes[1].mistake', '4⁶', 4 ** 6], how: 'multiplying the indices' }),
        H.mis(3, { correct: 7 ** 0, stated: ['mistakes[2].mistake', 'instead of 1', 1], mistaken: 0, claimed: ['mistakes[2].mistake', '7⁰ = 0', 0], how: 'a⁰ = 0' }),
      ],
    }),

    'num-standard-form': () => ({
      we: [
        H.chk('6,350,000 in standard form', 6350000, 'steps[0].result', '6.35 × 10⁶'),
        H.chk('6.35 × 10⁶ ÷ 2.5 × 10³', 6350000 / 2500, 'conclusion', '2.54 × 10³.', 2540),
      ],
      mistakes: [
        H.mis(1, { correct: 356000, stated: ['mistakes[0].mistake', '3.56 × 10⁵', 356000], mistaken: '35.6 × 10⁴ (same value, not standard form)', claimed: null,
          how: 'value equal, form wrong: a form mistake, not a false one' , formOnly: true }),
        H.mis(2, { correct: 0.000034, stated: ['mistakes[1].mistake', '3.4 × 10⁻⁵', 3.4e-5], mistaken: 3.4e4, claimed: ['mistakes[1].mistake', '3.4 × 10⁴', 3.4e4], how: 'positive power' }),
        H.mis(3, { correct: 8e5 / 2e2, stated: ['mistakes[2].mistake', 'instead of 4 × 10³', 4e3], mistaken: 4e7, claimed: ['mistakes[2].mistake', 'giving 4 × 10⁷', 4e7], how: 'adding powers' }),
      ],
    }),

    'num-bounds': () => ({
      we: [
        H.chk('lower bound', 94 - 0.5, 'steps[1].result', '93.5 cm', 93.5),
        H.chk('upper bound', 94 + 0.5, 'steps[2].result', '94.5 cm', 94.5),
      ],
      mistakes: [
        H.concept(1, 'notation: ≤ versus < at the upper bound'),
        H.mis(2, { correct: [93.5, 94.5], stated: ['mistakes[1].correction', '± 0.5', [93.5, 94.5]], mistaken: [94 - 47, 94 + 47], claimed: null, how: '± half the measured value' }),
        H.mis(3, { correct: [3.65, 3.75], stated: ['mistakes[2].correction', '3.65 ≤ l < 3.75', [3.65, 3.75]], mistaken: [3.2, 4.2], claimed: null, how: '± 0.5 for a 1 d.p. measurement' }),
      ],
    }),

    'num-ratio': () => ({
      we: [
        H.chk('£270 in 5:4, first share', 270 / 9 * 5, 'conclusion', '£150', 150),
        H.chk('£270 in 5:4, second share', 270 / 9 * 4, 'conclusion', '£120', 120),
      ],
      mistakes: [
        H.mis(1, { correct: 270 / 9, stated: ['mistakes[0].mistake', 'to get £30', 30], mistaken: 270 / 5, claimed: ['mistakes[0].mistake', 'to get £54', 54], how: 'dividing by the larger ratio number' }),
        H.mis(2, { correct: 70 / 2, stated: null, mistaken: 70 / 8, claimed: null, how: 'dividing the difference by total parts' }),
        H.mis(3, { correct: 160 * 6 / 4, stated: ['mistakes[2].mistake', '160 g × (6/4) = 240 g', 240], mistaken: 160 + 2 * (160 / 4),
          claimed: ['mistakes[2].mistake', 'to get 240 g', 240],
          how: 'adding 40 g per extra serving is the unitary method (40 g per serving), which works for any number of servings, whole or not' }),
      ],
      read: ['mistakes[2] says the additive route "fails for non-integer scaling". Adding 40 g per serving is the unitary method; it gives the right answer for any number of servings.'],
    }),

    // ───────────────────────── M2 Algebra ─────────────────────────
    'alg-expressions': () => ({
      we: [
        H.chk('(x + 3)(x − 4) expanded', '(x + 3)(x − 4)', 'conclusion', '= x² − x − 12', 'x² − x − 12'),
        H.chk('step 1: x(x − 4)', 'x(x − 4)', 'steps[0].result', 'x² − 4x', 'x² − 4x'),
        H.chk('step 2: 3(x − 4)', '3(x − 4)', 'steps[1].result', '3x − 12', '3x − 12'),
      ],
      mistakes: [
        H.mis(1, { correct: '(x + 3)(x − 4)', stated: null, mistaken: 'x² − 12', claimed: ['mistakes[0].mistake', 'x² − 12', 'x² − 12'], how: 'two products only' }),
        H.mis(2, { correct: '(x − 5)(x − 3)', stated: ['mistakes[1].correction', 'x² − 8x + 15', 'x² − 8x + 15'], mistaken: 'x² − 8x − 15',
          claimed: ['mistakes[1].mistake', 'giving x² − 8x − 15', 'x² − 8x − 15'], how: '−5 × −3 taken as −15' }),
        H.mis(3, { correct: '4(3x − 2)', stated: ['mistakes[2].correction', '= 12x − 8', '12x − 8'], mistaken: '12x − 2', claimed: ['mistakes[2].mistake', '12x − 2', '12x − 2'], how: 'only the first term multiplied' }),
      ],
    }),

    'alg-equations': () => ({
      we: [
        H.chk('root of 7x − 1 = 4x + 11', root('7x − 1 = 4x + 11'), 'conclusion', 'x = 4', 4),
        H.chk('step 1 result has the same root', root('7x − 1 = 4x + 11'), 'steps[0].result', '3x − 1 = 11', root('3x − 1 = 11')),
        H.chk('step 2 result has the same root', root('7x − 1 = 4x + 11'), 'steps[1].result', '3x = 12', root('3x = 12')),
      ],
      mistakes: [
        H.mis(1, { correct: root('3x + 7 = 22'), stated: ['mistakes[0].correction', 'x = 5', 5], mistaken: root('x + 7/3 = 22/3'),
          claimed: ['mistakes[0].mistake', 'gives the wrong answer', 'a wrong answer'],
          how: 'dividing every term by 3 first: x + 7/3 = 22/3, so x = 15/3 = 5' }),
        H.mis(2, { correct: root('5x − 3 = 2x + 9'), stated: ['mistakes[1].correction', 'x = 4', 4], mistaken: root('5x − 3 − 3 = 2x + 9 − 3'),
          claimed: ['mistakes[1].mistake', 'and x = 4', 4], how: 'subtracting 3 from both sides is a legal move; 5x − 6 = 2x + 6 still gives x = 4' }),
        H.mis(3, { correct: root('3(2x − 5) = 9'), stated: ['mistakes[2].correction', 'x = 4', 4], mistaken: root('6x − 5 = 9'), claimed: null, how: '−5 not multiplied by 3' }),
      ],
      read: ['mistakes[1].mistake prints "5(4)−3=17 ≠ 2(4)+9=17" (17 ≠ 17).'],
    }),

    'alg-inequalities': () => {
      const sat = x => 4 * x - 1 >= 2 * x + 5;
      return {
        we: [
          H.chk('boundary of 4x − 1 ≥ 2x + 5', root('4x − 1 = 2x + 5'), 'conclusion', 'x ≥ 3', 3),
          H.chk('direction: x = 4 satisfies, x = 2 does not', sat(4) && !sat(2) ? 1 : 0, 'conclusion', 'x ≥ 3', 1),
        ],
        mistakes: [
          H.concept(1, 'answer written as x = 3 instead of x ≥ 3'),
          H.mis(2, { correct: '−2x > 8 holds for x = −5 (x < −4)', stated: ['mistakes[1].mistake', 'instead of x < −4', '−2x > 8 holds for x = −5 (x < −4)'],
            mistaken: (-2 * 0 > 8) ? 'x > −4 also right' : 'x > −4 fails at x = 0', claimed: null, how: 'not flipping the sign' }),
          H.concept(3, 'open versus closed circle'),
        ],
      };
    },

    'alg-sequences': () => ({
      we: [
        H.chk('5n − 3 gives 2, 7, 12, 17', [1, 2, 3, 4].map(n => 5 * n - 3).join(','), 'conclusion', '5n − 3', '2,7,12,17'),
      ],
      mistakes: [
        H.mis(1, { correct: '5n − 3', stated: ['mistakes[0].mistake', 'instead of 5n − 3', '5n − 3'], mistaken: '5n + 2', claimed: ['mistakes[0].mistake', '5n + 2', '5n + 2'], how: 'first term as the constant' }),
        H.mis(2, { correct: '5n − 3', stated: null, mistaken: 'n + 5', claimed: null, how: 'd as a constant' }),
        H.mis(3, { correct: (51 / 5) % 1 === 0 ? 'a term' : 'not a term', stated: ['mistakes[2].correction', 'n = 10.2', 'not a term'],
          mistaken: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => 5 * n - 3).includes(48) ? 'a term' : 'not a term', claimed: null,
          how: 'listing 2, 7, …, 47, 52 shows 48 is skipped: the listing method reaches the right answer (slower, not wrong)' }),
      ],
      read: ['mistakes[2] calls listing terms a mistake; listing reaches the same answer (48 is not a term). It is slower, not wrong.'],
    }),

    'alg-graphs': () => ({
      we: [
        H.chk('y = −3x + 4 passes through (0, 4)', ev('−3x + 4', { x: 0 }), 'conclusion', 'y = −3x + 4', 4),
        H.chk('gradient of y = −3x + 4', ev('−3x + 4', { x: 1 }) - ev('−3x + 4', { x: 0 }), 'steps[0].result', 'm = −3', -3),
      ],
      mistakes: [
        H.mis(1, { correct: [5, -2], stated: ['mistakes[0].correction', 'gradient m = 5, y-intercept c = −2', [5, -2]], mistaken: [-2, 5], claimed: null, how: 'swapped m and c', ordered: true }),
        H.concept(2, 'run ÷ rise gives the reciprocal gradient (wrong unless m = ±1)'),
        H.concept(3, 'x = my + c form'),
      ],
    }),

    'alg-quadratics': () => ({
      we: [
        H.chk('roots of x² + 5x + 6 = 0', quadRoots(1, 5, 6), 'conclusion', 'x = −2 or x = −3', [-2, -3]),
        H.chk('factorised form', '(x + 2)(x + 3)', 'steps[1].result', '(x + 2)(x + 3) = 0', 'x² + 5x + 6'),
      ],
      mistakes: [
        H.mis(1, { correct: quadRoots(1, 5, 6), stated: ['mistakes[0].mistake', 'instead of x = −2 or x = −3', [-2, -3]], mistaken: [2, 3], claimed: ['mistakes[0].mistake', 'x = 2 or x = 3', [2, 3]], how: 'wrong signs in the brackets' }),
        H.mis(2, { correct: quadRoots(1, 5, 6), stated: ['mistakes[1].correction', '= −2 and x = (−5 − 1)/2 = −3', [-2, -3]], mistaken: [(5 + 1) / 2, (5 - 1) / 2], claimed: null, how: '+b in place of −b' }),
        H.concept(3, 'stopping at the factorised form'),
      ],
    }),

    'alg-simultaneous': () => {
      // the multiplied equation of item 2: 2(2x − y) = 2(5), i.e. 4x − 2y = 10. With any second
      // equation, substituting into 4x − 2y = 10 gives the same answer as into 2x − y = 5.
      const x = 3, yOrig = 2 * x - 5, yMult = (4 * x - 10) / 2;
      return {
        we: [
          H.chk('y from elimination', (23 - 13) / 2, 'steps[1].result', 'y = 5', 5),
          H.chk('x from 4x + y = 13', (13 - 5) / 4, 'steps[2].result', 'x = 2', 2),
          H.chk('check in equation 1', 4 * 2 + 3 * 5, 'steps[3].working', '= 23', 23),
        ],
        mistakes: [
          H.concept(1, 'adding when the signs match leaves 8x, not 0x'),
          H.mis(2, { correct: 10, stated: ['mistakes[1].correction', '4x − 2y = 10', 10], mistaken: 5, claimed: ['mistakes[1].mistake', 'leaving the right side as 5', 5], how: 'right-hand side not multiplied' }),
          H.mis(3, { correct: yOrig, stated: null, mistaken: yMult, claimed: null,
            how: 'a correctly multiplied equation has the same solutions: substituting into it gives the same value (here x = 3 gives y = 1 both ways)' }),
        ],
        read: ['mistakes[2] says substituting into the multiplied equation introduces "a factor-of-2 error". A correctly multiplied equation has the same solutions, so substituting into it gives the right answer; the error only comes from a wrongly multiplied one (item 2).'],
      };
    },

    'alg-functions': () => ({
      we: [
        H.chk('h(2)', ev('4x − 1', { x: 2 }), 'conclusion', 'h(2) = 7', 7),
        H.chk('h(−3)', ev('4x − 1', { x: -3 }), 'conclusion', 'h(−3) = −13', -13),
      ],
      mistakes: [
        H.mis(1, { correct: ev('2x + 5', { x: 5 }), stated: ['mistakes[0].correction', 'f(5) = 2(5) + 5 = 15', 15], mistaken: null, claimed: null, how: '"f times 5" has no value' }),
        H.concept(2, 'fg(3) order: no functions given, nothing to compute'),
        H.concept(3, 'inverse without swapping x and y'),
      ],
    }),

    // ─────────────── M3 Ratio, proportion and rates of change ───────────────
    'rpr-ratio': () => ({
      we: [
        H.chk('£108 in 5:4, first share', 108 / 9 * 5, 'conclusion', '£60', 60),
        H.chk('£108 in 5:4, second share', 108 / 9 * 4, 'conclusion', '£48', 48),
      ],
      mistakes: [
        H.mis(1, { correct: 108 / 9, stated: ['mistakes[0].mistake', 'to get £12', 12], mistaken: 108 / 5, claimed: ['mistakes[0].mistake', 'to get £21.60', 21.6], how: 'dividing by 5' }),
        H.mis(2, { correct: '5:3', stated: ['mistakes[1].correction', '= 5:3', '5:3'], mistaken: '10:6', claimed: ['mistakes[1].mistake', 'to get 10:6', '10:6'], how: 'stopping at 10:6' }),
        H.mis(3, { correct: 56 / 2, stated: null, mistaken: 56 / 8, claimed: null, how: 'difference ÷ total parts' }),
      ],
    }),

    'rpr-proportion': () => ({
      we: [
        H.chk('k', 15 / 5, 'steps[0].result', 'k = 3', 3),
        H.chk('y when x = 8', 3 * 8, 'conclusion', 'y = 24', 24),
      ],
      mistakes: [
        H.concept(1, 'y = kx used for inverse proportion (no numbers)'),
        H.mis(2, { correct: 36 / 3 ** 2, stated: ['mistakes[1].mistake', 'instead of k = 36 ÷ 9 = 4', 4], mistaken: 36 / 3, claimed: ['mistakes[1].mistake', 'k = 36 ÷ 3 = 12', 12], how: 'x not squared' }),
        H.mis(3, { correct: 3 * 7, stated: null, mistaken: 3 * 4 + 3 * 3, claimed: null,   // with k = 3 from the worked example
          how: 'for y = kx, adding 3 × k to y(4) gives y(7) exactly: the additive method with the right "value" (k) is correct' }),
      ],
      read: ['mistakes[2] calls an additive method a mistake for direct proportion. For y = kx, adding 3k when x goes from 4 to 7 gives the right y; "some value" is not defined, so the item does not show a real error.'],
    }),

    'rpr-speed': () => ({
      we: [
        H.chk('126 km in 1.5 h', 126 / 1.5, 'conclusion', '84 km/h', 84),
      ],
      mistakes: [
        H.mis(1, { correct: 1 + 20 / 60, stated: ['mistakes[0].mistake', '1.333', 1 + 1 / 3], mistaken: 1.2, claimed: ['mistakes[0].mistake', 'as 1.2 hours', 1.2], how: 'minutes after the point' }),
        H.mis(2, { correct: (40 + 60) / (40 / 20 + 60 / 30), stated: ['mistakes[1].correction', '100 ÷ 4 = 25 km/h', 25], mistaken: (20 + 30) / 2,
          claimed: ['mistakes[1].mistake', '÷ 2 = 25 km/h', 25], how: 'mean of the two speeds: both legs take 2 h, so it gives the right answer here' }),
        H.concept(3, 'time ÷ distance'),
      ],
      read: ['mistakes[1]: the example chosen makes the "wrong" method give the right answer (25 km/h both ways, because both legs take 2 hours).'],
    }),

    'rpr-percentage-change': () => ({
      we: [
        H.chk('decrease 160 → 120', 100 * (160 - 120) / 160, 'conclusion', '25%', 25),
      ],
      mistakes: [
        H.mis(1, { correct: 100 * 10 / 40, stated: ['mistakes[0].mistake', '10 ÷ 40 = 25%', 25], mistaken: 100 * 10 / 50, claimed: ['mistakes[0].mistake', '10 ÷ 50 = 20%', 20], how: 'dividing by the new value' }),
        H.mis(2, { correct: 350 / 0.7, stated: ['mistakes[1].correction', '£350 ÷ 0.70 = £500', 500], mistaken: 350 * 1.3, claimed: ['mistakes[1].mistake', '(£350 × 1.30 = £455)', 455], how: 'adding 30% back' }),
        H.mis(3, { correct: Math.round(2000 * 1.04 ** 3 * 100) / 100, stated: ['mistakes[2].mistake', 'to get £2,249.73', 2249.73], mistaken: 2000 * 1.12,
          claimed: ['mistakes[2].mistake', 'giving £2,240', 2240], how: 'simple interest' }),
      ],
    }),

    'rpr-compound-measures': () => ({
      we: [
        H.chk('density 135 ÷ 50', 135 / 50, 'conclusion', '2.7 g/cm³', 2.7),
      ],
      mistakes: [
        H.mis(1, { correct: 135 / 50, stated: ['mistakes[0].mistake', '135 ÷ 50 = 2.7', 2.7], mistaken: 50 / 135, claimed: ['mistakes[0].mistake', '≈ 0.37', 0.37], how: 'V ÷ M' }),
        H.concept(2, 'units'),
        H.concept(3, 'M = D ÷ V rearrangement (no numbers)'),
      ],
    }),

    'rpr-growth-decay': () => ({
      we: [
        H.chk('8000 × 0.85²', 8000 * 0.85 ** 2, 'conclusion', '£5,780', 5780),
      ],
      mistakes: [
        H.mis(1, { correct: 8000 * 0.85 ** 2, stated: ['mistakes[0].mistake', 'instead of £5,780', 5780], mistaken: 8000 - 2 * 0.15 * 8000, claimed: ['mistakes[0].mistake', '= £5,600', 5600], how: 'simple decay' }),
        H.mis(2, { correct: 0.85, stated: ['mistakes[1].correction', 'm = 0.85', 0.85], mistaken: 1.15, claimed: null, how: 'growth multiplier' }),
        H.mis(3, { correct: Math.round(2000 * 1.06 ** 3 * 100) / 100, stated: ['mistakes[2].mistake', 'instead of £2,382.03', 2382.03], mistaken: 2000 * 1.19,
          claimed: ['mistakes[2].mistake', 'getting £2,380', 2380], how: 'multiplier rounded to 1.19' }),
      ],
    }),

    // ───────────────────────── M4 Geometry ─────────────────────────
    'geo-angles': () => ({
      we: [H.chk('co-interior with 68°', 180 - 68, 'conclusion', '112°', 112)],
      mistakes: [
        H.concept(1, 'alternate equal versus co-interior 180°'),
        H.concept(2, 'no reason written'),
        H.concept(3, 'parallel-line rules on non-parallel lines'),
      ],
    }),

    'geo-shapes': () => ({
      we: [
        H.chk('octagon angle sum', (8 - 2) * 180, 'conclusion', '1080°', 1080),
        H.chk('octagon interior angle', (8 - 2) * 180 / 8, 'conclusion', '135°', 135),
      ],
      mistakes: [
        H.mis(1, { correct: (8 - 2) * 180, stated: null, mistaken: 8 * 180, claimed: null, how: 'n × 180 (for the octagon)' }),
        H.concept(2, 'interior versus exterior'),
        H.concept(3, 'regular formula on an irregular polygon'),
      ],
    }),

    'geo-perimeter-area': () => ({
      we: [H.chk('trapezium area', 0.5 * (9 + 5) * 6, 'conclusion', '42 cm²', 42)],
      mistakes: [
        H.concept(1, 'slant height'),
        H.concept(2, 'b × h without the ½ (no numbers)'),
        H.concept(3, 'units'),
      ],
    }),

    'geo-volume': () => ({
      we: [
        H.chk('cylinder volume ÷ π', 4 ** 2 * 11, 'conclusion', '176π', 176),
        H.chk('cylinder volume decimal', Math.PI * 16 * 11, 'conclusion', '≈ 552.9', 552.9),
      ],
      mistakes: [
        H.concept(1, 'diameter for radius (no full example)'),
        H.concept(2, 'volume versus surface area'),
        H.concept(3, 'missing ⅓'),
      ],
    }),

    'geo-transformations': () => ({
      we: [
        H.chk('image of (1, 1)', [1 - 4, 1 + 2], 'conclusion', '(−3, 3)', [-3, 3], true),
        H.chk('image of (3, 1)', [3 - 4, 1 + 2], 'conclusion', '(−1, 3)', [-1, 3], true),
        H.chk('image of (3, 4)', [3 - 4, 4 + 2], 'conclusion', '(−1, 6)', [-1, 6], true),
      ],
      mistakes: [H.concept(1, 'centre of rotation'), H.concept(2, 'vector direction'), H.concept(3, 'centre of enlargement')],
    }),

    'geo-pythagoras': () => ({
      we: [H.chk('hypotenuse of 5, 12', Math.hypot(5, 12), 'conclusion', '13 cm', 13)],
      mistakes: [
        H.mis(1, { correct: 13, stated: ['mistakes[0].mistake', 'c = √169 = 13', 13], mistaken: 169, claimed: ['mistakes[0].mistake', 'writing c = 169', 169], how: 'no square root' }),
        H.concept(2, 'adding when finding a shorter side (no numbers)'),
        H.concept(3, 'which side is the hypotenuse'),
      ],
    }),

    'geo-trigonometry': () => ({
      we: [
        H.chk('15 sin 38°', Math.round(15 * Math.sin(rad(38)) * 100) / 100, 'conclusion', 'approximately 9.24 cm', 9.24),
        H.chk('sin 38°', Math.round(Math.sin(rad(38)) * 10000) / 10000, 'steps[2].working', 'sin 38° ≈ 0.6157', 0.6157),
      ],
      mistakes: [
        H.concept(1, 'labelling sides'),
        H.concept(2, 'wrong ratio'),
        H.mis(3, { correct: Math.round(Math.sin(rad(38)) * 10000) / 10000, stated: ['mistakes[2].correction', '(not 0.6157)', 0.6157],
          mistaken: Math.round(Math.sin(38) * 10000) / 10000, claimed: ['mistakes[2].correction', 'approximately 0.2955', 0.2955], how: 'sin 38 in radians' }),
      ],
    }),

    'geo-circles': () => ({
      we: [H.chk('112° ÷ 2', 112 / 2, 'conclusion', '56°', 56)],
      mistakes: [
        H.mis(1, { correct: 56, stated: ['mistakes[0].mistake', 'instead of 56°', 56], mistaken: 112 * 2, claimed: ['mistakes[0].mistake', 'getting 224°', 224], how: 'doubling' }),
        H.concept(2, 'circumference and area formulas swapped'),
        H.concept(3, 'theorem not stated'),
      ],
    }),

    'geo-vectors': () => ({
      we: [
        H.chk('a + b', [3 - 1, 1 + 4], 'conclusion', '(2 over 5)', [2, 5], true),
        H.chk('2a − b', [6 + 1, 2 - 4], 'conclusion', '(7 over −2)', [7, -2], true),
      ],
      mistakes: [
        H.concept(1, 'adding across rows'),
        H.mis(2, { correct: [1, -4], stated: ['mistakes[1].correction', '(1 over −4)', [1, -4]], mistaken: null, claimed: null, how: '−b components', ordered: true }),
        H.mis(3, { correct: [-4, 2], stated: ['mistakes[2].correction', 'BA = (−4 over 2)', [-4, 2]], mistaken: [4, -2], claimed: null, how: 'BA taken as AB', ordered: true }),
      ],
    }),

    // ───────────────────────── M5 Probability ─────────────────────────
    'prob-basic': () => ({
      we: [
        H.chk('P(blue)', 5 / 10, 'conclusion', 'P(blue) = 1/2', 0.5),
        H.chk('P(not green)', 1 - 2 / 10, 'conclusion', 'P(not green) = 4/5', 0.8),
      ],
      mistakes: [
        H.mis(1, { correct: 0.5, stated: null, mistaken: 5, claimed: ['mistakes[0].mistake', 'P(blue) = 5', 5], how: 'count for probability' }),
        H.mis(2, { correct: 0.7, stated: ['mistakes[1].correction', 'then P(not A) = 0.7', 0.7], mistaken: 1.3, claimed: ['mistakes[1].correction', 'not 1.3', 1.3], how: '1 + P(A)' }),
        H.mis(3, { correct: 2 / 5, stated: ['mistakes[2].correction', '= 2/5', 0.4], mistaken: 4 / 10, claimed: ['mistakes[2].mistake', 'P = 4/10', 0.4],
          how: '4/10 and 2/5 are the same probability; an unsimplified fraction is not wrong unless the question asks for the simplest form' }),
      ],
      read: ['mistakes[2] calls an unsimplified fraction (4/10) a mistake. It is the same value as 2/5; mark schemes accept equivalent fractions unless the question asks for simplest form.'],
    }),

    'prob-combined': () => ({
      we: [H.chk('P(sum 4) on two 1-3 spinners', [1, 2, 3].flatMap(a => [1, 2, 3].map(b => a + b)).filter(s => s === 4).length / 9, 'conclusion', '= 1/3', 1 / 3)],
      mistakes: [H.concept(1, 'add for AND'), H.concept(2, 'OR rule double-counting'), H.concept(3, 'missing outcomes')],
    }),

    'prob-tree': () => ({
      we: [H.chk('P(both red) without replacement', 4 / 10 * 3 / 9, 'conclusion', '= 2/15', 2 / 15)],
      mistakes: [
        H.mis(1, { correct: 4 / 10 * 3 / 9, stated: null, mistaken: 4 / 10 + 3 / 9, claimed: null, how: 'adding along branches' }),
        H.mis(2, { correct: 4 / 10 * 3 / 9, stated: null, mistaken: 4 / 10 * 3 / 10, claimed: null, how: 'same denominator' }),
        H.mis(3, { correct: 4 / 10 * 6 / 9 + 6 / 10 * 4 / 9, stated: null, mistaken: 4 / 10 * 6 / 9, claimed: null, how: 'one path only (for this bag)' }),
      ],
    }),

    'prob-venn': () => ({
      we: [
        H.chk('neither', 30 - (18 + 14 - 7), 'conclusion', '5 students', 5),
        H.chk('P(French only)', (18 - 7) / 30, 'conclusion', '= 11/30', 11 / 30),
      ],
      mistakes: [
        H.mis(1, { correct: 11, stated: ['mistakes[0].correction', '(18 − 7 = 11)', 11], mistaken: 18, claimed: null, how: 'circle total in one region' }),
        H.concept(2, 'outside region'),
        H.concept(3, '∩ versus ∪'),
      ],
    }),

    'prob-conditional': () => ({
      we: [H.chk('P(Spanish | sport)', 9 / (9 + 5), 'conclusion', '= 9/14', 9 / 14)],
      mistakes: [
        H.mis(1, { correct: 9 / 14, stated: ['mistakes[0].mistake', 'instead of 9/14', 9 / 14], mistaken: 9 / 40, claimed: ['mistakes[0].mistake', 'writing 9/40', 9 / 40], how: 'whole group' }),
        H.mis(2, { correct: 9 / 14, stated: ['mistakes[1].mistake', '= 9/14', 9 / 14], mistaken: 9 / 24, claimed: ['mistakes[1].mistake', '= 9/24', 9 / 24], how: 'reversed condition' }),
        H.concept(3, 'independence assumed'),
      ],
    }),

    // ───────────────────────── M6 Statistics ─────────────────────────
    'stat-averages': () => {
      const d = [12, 15, 11, 18, 14, 11, 20];
      const s = [...d].sort((a, b) => a - b);
      return {
        we: [
          H.chk('mean', Math.round(d.reduce((a, b) => a + b) / 7 * 10) / 10, 'conclusion', 'Mean ≈ 14.4', 14.4),
          H.chk('median', s[3], 'conclusion', 'Median = 14', 14),
          H.chk('mode', 11, 'conclusion', 'Mode = 11', 11),
          H.chk('range', s[6] - s[0], 'conclusion', 'Range = 9', 9),
        ],
        mistakes: [
          H.mis(1, { correct: s[3], stated: null, mistaken: d[3], claimed: null, how: 'middle of the unsorted list (for this data)' }),
          H.mis(2, { correct: 101 / 7, stated: null, mistaken: 101 / 6, claimed: null, how: 'dividing by 6' }),
          H.concept(3, 'position for value'),
        ],
      };
    },

    'stat-charts': () => ({
      we: [
        H.chk('Science sector', 8 / 30 * 360, 'conclusion', '96°', 96),
        H.chk('Maths sector', 12 / 30 * 360, 'steps[2].instruction', '= 144°', 144),
        H.chk('English sector', 10 / 30 * 360, 'steps[2].instruction', '= 120°', 120),
      ],
      mistakes: [
        H.mis(1, { correct: 96, stated: null, mistaken: 360 / 8, claimed: ['mistakes[0].mistake', '= 45°', 45], how: '360 ÷ frequency' }),
        H.concept(2, 'histogram axis'),
        H.concept(3, 'bar height for frequency'),
      ],
    }),

    'stat-scatter': () => ({
      we: [H.chk('6 h inside 2 to 9 h', 6 >= 2 && 6 <= 9 ? 'interpolation' : 'extrapolation', 'conclusion', 'interpolation', 'interpolation')],
      mistakes: [H.concept(1, 'causation'), H.concept(2, 'line through origin'), H.concept(3, 'no context')],
    }),

    'stat-cumulative': () => {
      const f = [4, 10, 14, 9, 3];
      const cf = f.map((_, i) => f.slice(0, i + 1).reduce((a, b) => a + b));
      const median = 20 + (20 - 14) / (28 - 14) * 10;   // straight-line reading between (20, 14) and (30, 28)
      return {
        we: [
          H.chk('cumulative frequencies', cf.join(','), 'steps[0].instruction', '(10, 4), (20, 14), (30, 28), (40, 37), (50, 40)', '4,14,28,37,40'),
          H.chk('median by straight-line reading', Math.round(median), 'conclusion', 'approximately 26 minutes', 26, false, 1),
        ],
        mistakes: [H.concept(1, 'midpoints'), H.concept(2, 'reading from the table'), H.concept(3, 'IQR versus range')],
      };
    },

    'stat-boxplots': () => {
      const d = [22, 25, 28, 31, 33, 36, 38, 42, 47];
      return {
        we: [
          H.chk('Q1', (d[1] + d[2]) / 2, 'conclusion', '26.5', 26.5),
          H.chk('median', d[4], 'conclusion', '33', 33),
          H.chk('Q3', (d[6] + d[7]) / 2, 'conclusion', '40', 40),
          H.chk('IQR', (d[6] + d[7]) / 2 - (d[1] + d[2]) / 2, 'conclusion', 'IQR = 13.5', 13.5),
        ],
        mistakes: [
          H.mis(1, { correct: 26.5, stated: null, mistaken: d.slice(0, 5)[2], claimed: null,
            how: 'lower half with the median included (22, 25, 28, 31, 33) gives Q1 = 28' }),
          H.concept(2, 'whisker to an outlier'),
          H.concept(3, 'median only'),
        ],
      };
    },

    'stat-sampling': () => ({
      we: [
        H.chk('P(A)', 50 / 200, 'conclusion', 'P(A) = 0.25', 0.25),
        H.chk('expected frequency', 0.25 * 350, 'conclusion', '87.5', 87.5),
      ],
      mistakes: [H.concept(1, 'expected frequency for probability'), H.concept(2, 'small sample'), H.concept(3, 'biased selection')],
    }),
  };
};
