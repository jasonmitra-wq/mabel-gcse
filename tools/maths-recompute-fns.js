/**
 * Recompute functions for the 560 maths questions outside the seeded sample
 * (task 2.2). Loaded by tools/maths-recompute.js --all.
 *
 * Each function is written from the question text and step prompts only: the
 * stored answers and hints were not shown while writing them. Return values,
 * one per step:
 *   number or string   the expected answer
 *   null               a statement step (no number to check)
 *   amb(note, a, b…)   the prompt does not say which of these numbers to enter
 *   mis(note, value)   the prompt asks for something other than a number to enter
 *   when(q, i, re, v, old)  v if step i's prompt matches re (a prompt fixed in task 2.2
 *                      to name the number to enter), otherwise old
 */

module.exports = ({ N, gcd, lcm, sigFig, pennies }) => {
  const amb = (note, ...anyOf) => ({ ambiguous: note, anyOf });
  const mis = (note, value) => ({ mismatch: note, value });
  // after a prompt fix: if step i's prompt now matches re, it names one value; otherwise the old verdict stands
  const when = (q, i, re, value, otherwise) => (re.test(q.steps[i].prompt) ? value : otherwise);
  const r2 = x => Math.round(x * 100) / 100;
  const deg = r => r * 180 / Math.PI, rad = d => d * Math.PI / 180;

  return {
    // ── percentages ──
    'pct-A01': q => { const [p, r] = N(q.question); return [r / 100, p * r / 100, p * (1 - r / 100)]; },
    'pct-A02': q => { const [n, r] = N(q.question); return [r / 100, n * r / 100]; },
    'pct-A03': q => { const [p, r] = N(q.question); return [1 + r / 100, p * (1 + r / 100)]; },
    'pct-B01': q => { const [a, b] = N(q.question); return [a - b, (a - b) / a, 100 * (a - b) / a]; },
    'pct-B02': q => { const [r, s] = N(q.question); return [1 + r / 100, s / (1 + r / 100)]; },
    'pct-B03': q => { const [p, r] = N(q.question); return [1 - r / 100, p / (1 - r / 100)]; },
    'pct-C02': q => { const [r, n, p] = N(q.question); const m = 1 - r / 100; return [m, Math.round(p * m ** n)]; },

    // ── fractions ──
    'frc-A01': () => [12, 2 / 3 + 1 / 4],
    'frc-A03': () => [6 / 20, 3 / 10],
    'frc-B01': q => [when(q, 0, /Enter 1⅔/, 5 / 3, amb('two improper fractions asked for, one box', 5 / 3, 9 / 4)), 15 / 4, 15 / 4],
    'frc-B02': () => [null, (3 / 4) / (3 / 8)],
    'frc-B03': q => [when(q, 0, /Enter 2⅓/, 7 / 3, amb('two improper fractions asked for, one box', 7 / 3, 7 / 4)), 49 / 12, 49 / 12],
    'frc-C01': () => [null, (2 + Math.sqrt(3)) * (2 - Math.sqrt(3)), null],
    'frc-C02': () => [null, null],

    // ── ratio and proportion ──
    'rat-A01': q => { const [t, a, b] = N(q.question); const p = t / (a + b); return [p, when(q, 1, /larger share/, Math.max(a, b) * p, amb('two shares asked for, one box', a * p, b * p))]; },
    'rat-A02': q => { const [a, b] = N(q.question); const h = gcd(a, b); return [h, when(q, 1, /second part/, b / h, amb('two parts asked for, one box', a / h, b / h))]; },
    'rat-A03': q => { const [a, b, s] = N(q.question); return [s / a, s / a * b]; },
    'rat-B01': q => { const [a, b, d] = N(q.question); const p = d / (a - b); return [p, a * p, b * p]; },
    'rat-B02': q => { const [p1, f, s, , p2] = N(q.question); const k = p2 / p1; return [k, f * k, s * k]; },
    'rat-B03': q => { const [x1, y1, x2] = N(q.question); const k = y1 / x1; return [k, k * x2]; },
    'rat-C01': q => { const [x1, y1, x2] = N(q.question); const k = x1 * y1; return [when(q, 0, /value of k/, k, amb('prompt asks for the equation; the number entered is k', k)), k / x2]; },
    'rat-C02': q => { const [p1, q1, q2] = N(q.question); const k = p1 / q1 ** 2; return [when(q, 0, /value of k/, k, amb('prompt asks for the equation; the number entered is k', k)), k * q2 ** 2]; },
    'rat-A04': q => { const [t, a, b] = N(q.question); return [a + b, t / (a + b)]; },
    'rat-A05': q => { const [a, b] = N(q.question); const h = gcd(a, b); return [h, a / h]; },
    'rat-B05': () => { const cm = 7 * 50000; return [cm, cm / 100, cm / 100000]; },
    'rat-C03': q => { const [x1, y1, x2] = N(q.question); const k = y1 / x1 ** 2; return [null, k, null, k * x2 ** 2]; },
    'rat-C04': q => { const [c, z, t, , zinc] = N(q.question); const f = z / (c + z + t); const tot = zinc / f; return [f, tot, tot * c / (c + z + t), tot * t / (c + z + t)]; },

    // ── standard form ──
    'stf-A01': () => [4.75, 6],
    'stf-A02': () => [8.5, -5],
    'stf-A03': q => [when(q, 0, /Write the ordinary number/, 56000, amb('prompt asks how far to move the point; the box takes the places or the number', 4, 56000))],
    'stf-B01': q => [3.2 * 4, 5 + 3, when(q, 2, /power of 10/, 9, amb('one box for a standard-form answer', 1.28, 9, 1.28e9))],
    'stf-B02': q => [9.6 / 3.2, 7 - 4, when(q, 2, /ordinary number/, 3000, amb('one box for a standard-form answer', 3, 3000))],
    'stf-C01': q => [5000 + 800, when(q, 1, /power of 10/, 3, amb('one box for a standard-form answer', 5.8, 3, 5800))],
    'stf-C02': q => [7 / 8, when(q, 1, /ordinary number/, 10, amb('prompt asks for 10⁻² ÷ 10⁻³; the box takes the power or the value', 1, 10)), 8.75],

    // ── equations ──
    'eq-A01': () => [22 - 7, 15 / 3],
    'eq-A02': () => [null, 16 + 8, 24 / 6],
    'eq-A03': () => [null, 9 + 3, 12 / 3],
    'eq-B01': () => [null, null, 11],          // 3(x + 3) = 2(2x − 1) → x = 11
    'eq-B02': () => [null, null, 17 / 2],      // 6x + 15 = 8x − 2
    'eq-B03': q => { const x = (46 / 2 - 3 + 1) / 3; return [null, x, when(q, 2, /^Find the length by/, 2 * x + 3, amb('length and width asked for, one box', 2 * x + 3, x - 1))]; },
    'eq-C01': () => { const y = (16 - 6) / 5; return [null, y, y + 2]; },
    'eq-C02': q => [when(q, 0, /positive one/, 5, amb('two numbers asked for, one box', 5, -2)), null, when(q, 2, /positive value/, 2, amb('both values asked for, one box', 2, -5))],

    // ── substitution ──
    'sub-A01': () => [0.5 * 12 * 7],
    'sub-A02': () => [5 + 3 * 4],

    'sub-B01': () => { const u = 4, a = -10, t = 3; return [u * t, 0.5 * a * t * t, u * t + 0.5 * a * t * t]; },
    'sub-B02': () => [null],
    'sub-B03': () => [null, null],
    'sub-C01': () => [null, null, null],
    'sub-C02': q => { const a = 2, b = -5, c = -3, d = b * b - 4 * a * c; return [when(q, 0, /value of a/, a, amb('a, b and c asked for, one box', a, b, c)), d, when(q, 2, /positive one/, (-b + Math.sqrt(d)) / (2 * a), amb('two solutions asked for, one box', (-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)))]; },

    // ── integers, rounding, powers, bounds ──
    'int-A01': q => [when(q, 0, /Write the rounded number/, Math.round(47382 / 1000) * 1000, mis('prompt asks a yes/no question (is the hundreds digit 5 or more?); the box takes a number', Math.round(47382 / 1000) * 1000))],
    'int-A02': () => [null, sigFig(0.04763, 2)],
    'int-A03': () => [null],
    'int-B01': () => [3.75, 12.5, 3.75 * 12.5],
    'pow-A01': q => [when(q, 0, /new power of 2/, 5 + 3, amb('power of 2 asked for: the index or the value', 5 + 3, 2 ** 8))],
    'pow-A02': q => [Math.sqrt(144), when(q, 1, /Enter the total/, 12 + 3, amb('prompt asks for ∛27, then the sum', 3, 12 + 3))],
    'pow-A03': q => [when(q, 0, /new power of 3/, 2 * 4, amb('index or value', 2 * 4, 3 ** 8))],
    'pow-B01': () => [2, 2 ** 3],
    'bnd-A01': q => [8.35, when(q, 1, /upper bound/, 8.45, amb('error interval has two bounds, one box', 8.35, 8.45))],
    'bnd-B01': () => [7.25, 2.15, 7.25 - 2.15],
    'bnd-C01': () => [240.5, 12.35, 240.5 / 12.35],

    // ── ratio (second set) ──
    'nrt-A01': q => { const [a, b, r] = N(q.question); return [r / a, r / a * b]; },
    'nrt-A02': q => [15, when(q, 1, /second part/, 4, amb('two parts asked for, one box', 3, 4))],
    'nrt-B01': q => { const [a, b, f] = N(q.question); const p = f / a; return [p, b * p, (a + b) * p]; },

    // ── inequalities, sequences, graphs ──
    'ineq-A01': () => [null, (14 - 5) / 3],
    'ineq-B01': () => [null, null, (6 + 2) / 2],
    'seq-A01': () => [3, 5 - 3],
    'seq-A02': () => [5 * 10 - 2, (73 + 2) / 5],
    'seq-B01': () => [2, 3 * 2 ** 7],
    'gph-A01': () => [3, -2],
    'gph-A02': () => [3, null],
    'gph-B01': () => { const m = (13 - 7) / (5 - 2); return [m, 7 - m * 2]; },

    // ── simultaneous equations, functions ──
    'sim-A01': () => [7 - 4, 4 - 3],
    'sim-A02': q => { const y = (16 - 7) / 3; return [when(q, 0, /then find y/, y, amb('subtracting gives 3y = 9: the box takes 9 or y', 9, y)), (7 + y) / 3]; },
    'fn-A01': () => [3 * 5 - 4, 3 * -2 - 4],
    'fn-B01': () => [9, 2 * 9 + 1, 7 ** 2],
    'fn-C01': () => [null, null],

    // ── equations (second set) ──
    'eq-A04': () => [15 + 9, 24 / 4],
    'eq-A05': () => [1 - 7, (1 - 7) / -2],
    'eq-B05': q => [when(q, 0, /number term/, -10, amb('prompt asks for an expansion (5x − 10); one box', 5, -10)), when(q, 1, /number term/, 12, amb('prompt asks for an expansion (3x + 12); one box', 3, 12)), (12 + 10) / (5 - 3)],
    'eq-C03': () => [null, 9, -2 - 9, null],
    'eq-C04': q => [when(q, 0, /number term/, -28, amb('prompt asks for the quadratic (x² + 3x − 28 = 0); one box', -28, 3)), when(q, 1, /positive value/, 4, amb('factorising gives x = 4 or x = −7; one box', 4, -7)), 4 + 4, 4 - 1],

    // ── substitution and subject (second set) ──
    'sub-A05': () => [0 + 2 * 10 * 45, Math.sqrt(900)],
    'sub-B04': () => [null, null, Math.sqrt(2 * 100 / 2)],
    'sub-B05': () => [null, null, (11 - 2) / 3],
    'sub-B06': () => [null, null, 3 * 12 / 3 ** 2],
    'sub-C03': () => [null, null, null, (3 * 1 + 1) / (2 - 1)],
    'sub-C04': () => [null, null, null, 10 * (2 * Math.PI) ** 2 / (4 * Math.PI ** 2)],

    // ── functions (second set) ──
    'fn-A02': () => [3 ** 2 - 4, (-2) ** 2 - 4],
    'fn-A03': q => [when(q, 0, /2x = \?/, 8, amb('solving gives 2x = 8 then x = 4; one box', 8, 4)), 4],
    'fn-A04': () => [16 + 8, 16 + 8 - 3],
    'fn-A05': () => [3 / 6, 3 / -3],
    'fn-B02': () => [5 + 4, 2 * 9 - 3, null],
    'fn-B03': q => [9, when(q, 1, /positive solution/, 2, amb('(x + 3)² = 25 gives x = 2 or x = −8', 2, -8)), -8],
    'fn-B04': () => [null, 7 + 1, 8 / 4],
    'fn-B05': () => [7, 2 * 7 + 1, null],
    'fn-B06': () => [(-2) ** 2 + 1, 2 * 5 - 3, (2 * -2 - 3) ** 2 + 1],
    'fn-C02': q => [null, when(q, 1, /3x = \?/, -9, amb('prompt asks for the equation after multiplying by 2 (4x + 6 = x − 3); one box', -9, 4, 6, -3)), -9 / 3, null],
    'fn-C03': () => [3 * 1 + 1, 22 - 4, (22 - 4) / 9, null],
    'fn-C04': () => [null, null, 2, null],

    // ── straight-line graphs (second set) ──
    'gph-A03': () => [-3, 7],
    'gph-A04': () => [3 * 2, 6 - 4],
    'gph-A05': () => [(1 + 7) / 2, (3 + 9) / 2],
    'gph-B02': () => [(10 - -2) / 4, -2, null],
    'gph-B03': () => { const m = (7 - 1) / 3; return [m, 1 - m * -1, null]; },
    'gph-B04': () => [2, 1 - 2 * 3, null],
    'gph-B05': () => [-2 * 3, 4 + 6, null, 10 / 2],
    'gph-B06': q => [when(q, 0, /2x = \?/, 6, amb('collecting gives 2x = 6; one box', 2, 6)), 3, 3 + 2, null],
    'gph-C01': () => [(8 - 4) / (6 - 2), -1, null, 6 + 4],
    'gph-C02': () => [2, null, 1 + 0.5 * 4, null],

    // ── sampled questions whose prompts were fixed in task 2.2 (override the sample functions in --all) ──
    'eq-B06': q => {   // 3x/4 + x/2 = 5
      const [a, d1, d2, r] = N(q.question); const L = lcm(d1, d2); const coeff = a * L / d1 + L / d2;
      return [r * L, when(q, 1, /5x = \?/, r * L, mis(`prompt asks to simplify the left side (${coeff}x); stored answer is the right side`, coeff)), r * L / coeff];
    },
    'tr-B02': q => {
      const [ax, ay, bx, by, cx, cy, k, ox, oy] = N(q.question);
      const img = (x, y) => [ox + k * (x - ox), oy + k * (y - oy)];
      const A = img(ax, ay), Bp = img(bx, by), Cp = img(cx, cy);
      return [A[0], Bp[0], when(q, 2, /y-coordinate/, Cp[1], amb(`image is (${Cp[0]}, ${Cp[1]}); x- or y-coordinate`, Cp[0], Cp[1]))];
    },
    'pyth-C02': q => {
      const [cx, cy, , qx, qy] = N(q.question); const dist = (x, y) => Math.hypot(x - cx, y - cy);
      const [rx, ry] = N(q.steps[2].prompt), [sx, sy] = N(q.steps[3].prompt);
      return [dist(qx, qy), 0, when(q, 2, /Enter the distance CR/, dist(rx, ry), amb('prompt asks inside or outside; the stored answer is the distance CR', dist(rx, ry))), dist(sx, sy)];
    },
    'venn-C03': q => {
      const [ab, aGb, a] = N(q.question); const b = ab / aGb, bGa = ab / a;
      return [b, bGa, when(q, 2, /Enter P\(B\)\./, b, mis('prompt asks whether A and B are independent; the stored number is P(B|A)', bGa)), a * b];
    },
  };
};
