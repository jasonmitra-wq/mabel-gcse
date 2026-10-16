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

    // ── batch 2: bank questions 121–240 ──
    'gph-C03': () => { const m = (9 - 1) / (6 - 2), c = 1 - m * 2, x = (12 - c) / (m + 1); return [m, c, x, -x + 12]; },
    'gph-C04': q => { const d2 = 6 ** 2 + 8 ** 2; return [d2, Math.sqrt(d2), (-1 + 5) / 2, when(q, 3, /Enter the gradient/, 8 / 6, amb('midpoint y-coordinate and gradient asked for, one box', (2 + 10) / 2, 8 / 6))]; },
    'ineq-A03': () => [9 + 3, 12 / 4],
    'ineq-A04': () => [10 - 2, 8 / 4],
    'ineq-A05': () => [null, (5 - 1) / 2, (11 - 1) / 2],
    'ineq-B02': () => [3 * 2, 2 * 5, 10 - 6],
    'ineq-B03': q => { let c = 0; for (let n = -5; n <= 5; n++) if (-2 < 3 * n - 1 && 3 * n - 1 <= 8) c++; return [null, null, when(q, 2, /How many integers satisfy the inequality/, c, amb('upper bound and the number of integers asked for, one box', 3, c))]; },
    'ineq-B04': () => [13 - 4, 9 / -3, Math.max(-3, -2)],
    'ineq-B05': () => [-1, 2, null, 2 - -1 + 1],
    'ineq-B06': q => { let c = 0; for (let x = -10; x <= 10; x++) if (4 * x - 1 > 2 * x + 7 && 3 * x <= 21) c++; return [when(q, 0, /x > \?/, 4, amb('collecting gives 2x > 8 then x > 4; one box', 8, 4)), 7, null, c]; },
    'ineq-C01': () => [null, null, 0, 4],
    'ineq-C02': () => [null, -4, 2, null],
    'ineq-C03': () => [null, -0.5, 3, null],
    'ineq-C04': () => { let c = 0; for (let x = -10; x <= 10; x++) if (x * x < 25 && 2 * x + 3 > 5) c++; return [-5, (5 - 3) / 2, null, c]; },
    'seq-A03': () => [2 * 10, 20 + 5],
    'seq-A04': () => [4, 2 - 4],
    'seq-A05': () => [197 + 2, null, null],
    'seq-B02': () => { const t8 = 3 * 8 + 1; return [t8, 4 + t8, 8 / 2 * (4 + t8)]; },
    'seq-B03': () => [3, 45 * 3, 45 * 9],
    'seq-B04': () => [2, 1, 3 ** 2 + 2 * 3],
    'seq-B06': () => { const d = (27 - 11) / 4, a = 11 - 2 * d; return [d, a, null, a + 2 * d]; },
    'seq-C01': () => [null, 7 - 3, 4 * 4 + 3, 3 * 4 + 7],
    'seq-C02': () => [2, 1, -1, 16 - 1],
    'seq-C03': () => [null, null, 3, 2 + 6 + 18],
    'seq-C04': q => { const d = (2 * 19 - 26) / (6 - 5), a = 19 - 3 * d; return [when(q, 0, /2a \+ 5d = \?/, 26, amb('prompt asks for an equation (2a + 5d = 26); one box', 26, 78)), d, a, 3 * (2 * a + 5 * d)]; },
    'sim-A03': q => [when(q, 0, /2x = \?/, 4, amb('collecting gives 2x = 4; one box', 4, 2)), 2, 2 + 5],
    'sim-A04': q => [when(q, 0, /2x = \?/, 6, amb('subtracting gives 2x = 6; one box', 6, 3)), 3, 5 - 3],
    'sim-A05': q => [when(q, 0, /7x = \?/, 21, amb('adding gives 7x = 21; one box', 21, 7)), 3, 12 - 6, 15 - 6],
    'sim-B02': q => [when(q, 0, /5x = \?/, 25, amb('adding gives 5x = 25; one box', 25, 5)), 5, 11 - 10, 15 - 1],
    'sim-B03': q => [null, when(q, 1, /17x = \?/, 34, amb('prompt asks 9x + 8x = ?; 17x or 34', 17, 34)), 2, (10 - 6) / 4],
    'sim-B04': q => { const a = (127 - 100) / 3; return [when(q, 0, /Find 3a\./, 27, amb('prompt asks for 3a + 100: the expression equals 127', 127, 27)), a, 20 - a, 8 * a + 5 * (20 - a)]; },
    'sim-B05': () => [13 - 3, 5, 8, 2 * (8 + 5)],
    'sim-B06': q => [when(q, 0, /20x − 5y = \?/, 50, amb('prompt asks for the multiplied equation (20x − 5y = 50); one box', 20, -5, 50)), when(q, 1, /22x = \?/, 66, amb('adding gives 22x = 66; one box', 22, 66)), 3, 12 - 10],
    'sim-C01': () => [null, null, -3, 2],
    'sim-C03': () => [null, -4, 3, 4],
    'sim-C04': () => [27 - 3, 6, 12, 9],
    'quad-A01': () => [3, -2],
    'quad-A02': () => [4, -4],
    'quad-A03': () => [null, 2, -5],
    'quad-A04': () => [6, 9],
    'quad-A05': () => [null, 3, 4],
    'quad-B01': () => [9 - 8, -3 + 1, -3 - 1],
    'quad-B02': () => [25 + 24, 7, (-5 + 7) / 4, (-5 - 7) / 4],
    'quad-B03': () => [2, r2(Math.sqrt(11)), -2 + Math.sqrt(11), -2 - Math.sqrt(11)],
    'quad-B04': () => [null, 4, 10, 3],
    'quad-B05': () => [4, -16 + 3, -13, -4],
    'quad-B06': () => [49 - 24, 5, 12 / 6, 2 / 6],
    'quad-C01': () => [36 - 40, null, 10 - 9, 9 - 18 + 10],
    'quad-C02': () => [25 - 20, r2(Math.sqrt(5)), (5 + Math.sqrt(5)) / 2, (5 - Math.sqrt(5)) / 2],
    'quad-C03': () => { const h = t => -5 * t * t + 20 * t + 2; return [null, 1, 3, h(2), h(2)]; },
    'quad-C04': q => [when(q, 0, /k² = \?/, 36, amb('prompt asks for the discriminant (k² − 36); one box', 36, -36)), 6, -6, 9 - 18 + 9],
    'pro-A01': () => [20 / 4, 5 * 7],
    'pro-A02': () => [40, 40 / 10],
    'pro-B01': () => [36 / 9, 4 * 25],
    'pro-A03': () => [18 / 6, 3 * 9],
    'pro-A04': () => [60, 60 / 12],
    'pro-A05': () => [24 / 8, 9 / 3],
    'pro-B02': () => [null, 32 / 8, 4 * 27],
    'pro-B03': () => { const k = 8 * 3 ** 2; return [null, k, k / 6 ** 2]; },
    'pro-B04': () => { const k = 12 / Math.sqrt(16); return [k, null, k * Math.sqrt(25)]; },
    'pro-B05': () => [35 / 5, 7 * 11, null],
    'pro-B06': () => [3 * 20, 60 / 4, null],
    'pro-C01': () => { const k = 45 / 9; return [k, 80 / k, Math.sqrt(80 / k), null]; },
    'pro-C02': () => { const k = 25 * 4; return [k, k / 4, Math.sqrt(k / 4), null]; },
    'pro-C03': () => { const k1 = 12 / 4, y = k1 * 25, k2 = 30 / 12; return [k1, y, k2, k2 * y]; },
    'pro-C04': () => { const k = 15 * Math.sqrt(4); return [k, null, 3, k / 3]; },
    'spd-A01': () => [180 / 2.5],
    'spd-A02': () => [1 + 20 / 60, 90 * (1 + 20 / 60)],
    'spd-B01': () => [60 / 40, 90 / 60, 150 / (60 / 40 + 90 / 60)],
    'spd-A03': () => [null, 45 / 15],
    'spd-A04': () => [null, 80 * 2.5],
    'spd-A05': () => [4 / 3, 96 / (4 / 3)],
    'spd-B02': () => [150, 1.75, 150 / 1.75],
    'spd-B03': () => [2.5, 200 / 2.5, null],
    'spd-B04': () => [90000, 90000 / 3600, 3.6],
    'spd-B05': () => [60 * 40 / 60, 90 * 20 / 60, 40 + 30],
    'spd-B06': () => [6 / 4, 6 / 6, 12 / (1.5 + 1)],
    'spd-C01': () => [18 + 12, 15 / 30, 30, 18 * 0.5],
    'spd-C02': () => [null, null, null, 5 / (1 / 60 + 1 / 40)],
    'spd-C03': () => [0.5 * 10 * 20, 20 * 30, 0.5 * 5 * 20, 100 + 600 + 50],
    'spd-C04': () => { const gap = 240 - 40; return [80 * 0.5, gap, 80 + 60, Math.round(gap / 140 * 60)]; },
    'pch-A01': () => [1.15, 180000 * 1.15],
    'pch-A02': () => [70, 350 / 0.7],
    'pch-B01': () => [1.04, null, pennies(2000 * 1.04 ** 3)],
    'pch-A03': () => [65 * 0.2, 65 * 0.8],
    'pch-A04': () => [48000, 100 * 48000 / 240000],
    'pch-A05': () => [1.25, 75 / 1.25],
    'pch-B02': () => [800 * 0.03, 800 * 0.03 * 4, 800 + 96],
    'pch-B03': () => [1.05, null, pennies(1500 * 1.05 ** 3)],
    'pch-B04': () => [0.85, 12000 * 0.85, 12000 * 0.85 ** 2],
    'pch-B05': () => [200 * 1.04, 208 * 0.96, null],
    'pch-B06': () => [120, 540 / 120, 450],
    'pch-C01': () => { const r3 = 6298.56 / 5000, r = Math.cbrt(r3); return [r3, r, (r - 1) * 100, null]; },
    'pch-C02': q => [null, 2, when(q, 2, /smallest number of complete hours/, 7, amb('prompt asks for 1.12⁶ with unit hours', 1.12 ** 6, 7)), Math.round(4000 * 1.12 ** 7)],
    'pch-C03': () => [120 * 1.1 * 0.9, 120 * 0.9 * 1.1, 1.1 * 0.9, (1.1 * 0.9 - 1) * 100],
    'pch-C04': q => { const v4 = 180000 * 1.05 ** 4; return [v4, when(q, 1, /single multiplier covers both years/, 0.97 ** 2, amb('per-year or two-year multiplier', 0.97, 0.97 ** 2)), Math.round(v4 * 0.97 ** 2), null]; },
    'cmp-A01': () => [540 / 60],
    'cmp-A02': () => [150 / 25],
    'cmp-B01': () => [340 / 8.5, 340 / 80],
    'cmp-A03': () => [null, 360 / 45],
    'cmp-A04': () => [null, 90 / 15],
    'cmp-A05': () => [null, 11.3 * 20],
    'cmp-B02': () => [300, 35, r2(300 / 35)],
    'cmp-B03': () => [40, null, 12 * 40],
    'cmp-B04': () => [300, 0.8 * 300, 0.24],
    'cmp-B06': () => [150 * 8, 1200 / 0.6, 2],
    'cmp-C01': () => { const d = 1728 / 64, vs = 4 / 3 * Math.PI * 27; return [64, d, vs, d * vs / 1000]; },
    'cmp-C02': () => [60 / 5, null, 12 * 80, 80 / 5],
    'cmp-C03': q => { const V = 20 * 10 * 4, m = 0.75 * V, W = m / 1000 * 10; return [when(q, 0, /Enter the weight in N/, W, amb('volume and mass asked for; the unit is N', W, m, V)), W / 200, W / 40, 200 / 40]; },
    'cmp-C04': () => { const g = 75 / 19.3, s = 25 / 10.5; return [g, s, g + s, 100 / (g + s)]; },
    'grd-A01': () => [1.06, 3000 * 1.06],
    'grd-A02': () => [0.9, 500 * 0.9],
    'grd-A03': () => [1.04, Math.round(25000 * 1.04 ** 2)],
    'grd-A04': () => [0.82, 15000 * 0.82],
    'grd-A05': () => [2, 500 * 8],
    'grd-B01': () => [null, 1.05 ** 4, pennies(4000 * 1.05 ** 4)],
    'grd-B02': () => [12 / 3, null, 640 / 2 ** 4],
  };
};
