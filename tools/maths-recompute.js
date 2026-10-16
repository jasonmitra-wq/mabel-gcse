#!/usr/bin/env node
/**
 * Maths answer check: recomputes, in code, every step answer of a fixed random
 * sample of questions from the maths bank, using the numbers in the question,
 * and compares with the stored answer the way the app marks her input
 * (js/maths.js _matchAnswer: |input − answer| ≤ tolerance, default 0.005).
 *
 *   node tools/maths-recompute.js            # sample of 40, seed 2026
 *   node tools/maths-recompute.js --all [--base <commit>]
 *                                            # all 600 (task 2.2), optionally on the bank
 *                                            # as it was at <commit>; functions for the
 *                                            # other 560 are in tools/maths-recompute-fns.js
 *
 * Reads js/maths-questions.js (never changes it). Writes
 * tools/maths-recompute-report.md (sample) or tools/maths-recompute-all-report.md
 * (--all). Exit code 1 if any checked step is wrong.
 *
 * Each sampled question has its own recompute function below, written from
 * the question text: the stored answers and hints are never used to get the
 * expected value. A step is one of:
 *   ok         — the stored answer matches the recomputed value
 *   wrong      — the stored answer does not match; the correct input is marked wrong
 *   mismatch   — the prompt asks for something the stored number is not
 *   ambiguous  — the prompt does not say which of two numbers to enter; the stored one is right
 *   skip       — checkType 'skip': the app never checks this step (recomputed for the record only)
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const SEED = 2026, SAMPLE = 40;
const APP_TOL = 0.005;   // js/maths.js default when a step has no tolerance

function loadBank(base) {
  // base: a commit; the bank is read from that commit instead of the working tree
  let src = base ? require('child_process').execSync(`git show ${base}:js/maths-questions.js`, { cwd: ROOT, maxBuffer: 1 << 26 }).toString('utf8')
                 : fs.readFileSync(path.join(ROOT, 'js/maths-questions.js'), 'utf8');
  const anchor = '  return { getQuestion, getTestQuestions, hasQuestions };';
  if (!src.includes(anchor)) throw new Error('maths-questions.js export line not found');
  src = src.replace(anchor, '  globalThis.__bank = _allBank;\n' + anchor);
  const ctx = vm.createContext({});
  vm.runInContext(src, ctx);
  return ctx.__bank;
}

// Seeded shuffle (mulberry32), first SAMPLE, back in bank order.
function sample(bank) {
  let a = SEED;
  const rnd = () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const idx = bank.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  return idx.slice(0, SAMPLE).sort((x, y) => x - y).map(i => bank[i]);
}

// Numbers in a string, in order. "−" is a minus; "4,000" is four thousand.
function N(s) {
  return (String(s).replace(/−/g, '-').match(/-?\d+(?:,\d{3})*(?:\.\d+)?/g) || []).map(x => Number(x.replace(/,/g, '')));
}
const gcd = (x, y) => (y ? gcd(y, x % y) : Math.abs(x));
const lcm = (x, y) => Math.abs(x * y) / gcd(x, y);
// Round half up to n significant figures, done on the decimal string (no binary drift).
function sigFig(x, n) {
  const [m, e] = x.toExponential(12).split('e');
  const digits = m.replace('-', '').replace('.', '');
  let keep = BigInt(digits.slice(0, n)) + (Number(digits[n]) >= 5 ? 1n : 0n);
  return Number(`${keep}e${Number(e) - n + 1}`) * Math.sign(x);
}
const pennies = x => Math.round(x * 100) / 100;

// expected value per step, from the question's own numbers.
// A plain number = expected answer; { mismatch } / { ambiguous, value } as described above.
const RECOMPUTE = {
  'pct-C01': q => { const [r, P, n] = N(q.question); const m = 1 + r / 100; return [m, pennies(P * m ** n)]; },
  'frc-A02': q => { const [a, b, c, d] = N(q.question); return [lcm(b, d), a / b - c / d]; },
  'rat-B04': q => { const [a, b, diff] = N(q.question); const part = diff / (b - a); return [b - a, part, a * part]; },
  'rat-B06': q => { const [r, y, red] = N(q.question); const yellow = red / r * y; return [yellow, red + yellow, 1]; },
  'stf-B03': q => {
    const m = q.question.match(/([\d.]+) × 10([⁰¹²³⁴⁵⁶⁷⁸⁹]+) km\. .*?([\d.]+) × 10([⁰¹²³⁴⁵⁶⁷⁸⁹]+) km\/s/);
    const sup = s => Number([...s].map(c => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)).join(''));
    const [d, de, v, ve] = [Number(m[1]), sup(m[2]), Number(m[3]), sup(m[4])];
    return [d / v, de - ve, d * 10 ** de / (v * 10 ** ve)];
  },
  'sub-A03': q => { const [l, w, h] = N(q.question); return [l * w * h]; },
  'ineq-A02': q => { const [lo, hi] = N(q.question); let c = 0; for (let x = Math.floor(lo) + 1; x <= hi; x++) c++; return [c]; },
  'sim-B01': q => {   // 4x + 3y = 25, 2x − y = 5
    const [a1, b1, c1, a2, c2] = N(q.question); const b2 = -1;
    const x = (c1 * b2 - b1 * c2) / (a1 * b2 - b1 * a2), y = (a1 * c2 - c1 * a2) / (a1 * b2 - b1 * a2);
    return [3 * c2, x, y];
  },
  'eq-B04': q => { const [a, b, d, r] = N(q.question); return [r * d, r * d - b, (r * d - b) / a]; },   // (2x + 5)/3 = 7
  'eq-B06': q => {   // 3x/4 + x/2 = 5
    const [a, d1, d2, r] = N(q.question); const L = lcm(d1, d2); const coeff = a * L / d1 + L / d2;
    return [r * L, { mismatch: `prompt asks to simplify the left side (${coeff}x); stored answer is the right side`, value: coeff }, r * L / coeff];
  },
  'sub-A04': q => {   // a(bx − c) + d(x + e)
    const m = q.question.match(/(\d+)\((\d+)x ([−+]) (\d+)\) \+ (\d+)\(x ([−+]) (\d+)\)/);
    const [a, b, c, d, e] = [m[1], m[2], (m[3] === '−' ? -1 : 1) * m[4], m[5], (m[6] === '−' ? -1 : 1) * m[7]].map(Number);
    return [a * b + d, a * c + d * e];
  },
  'seq-B05': q => { const f = n => n * n - n + 4; return [f(1), f(2), f(10)]; },
  'sim-C02': q => {   // y = x + 3, y = x² − 3  →  x² − x − 6 = 0
    const m = q.question.match(/y = x \+ (\d+) and y = x² − (\d+)/); const p = Number(m[1]), k = Number(m[2]); const B = -1, C = -k - p;
    const disc = Math.sqrt(B * B - 4 * C); const x1 = (-B + disc) / 2, x2 = (-B - disc) / 2;
    return [0, x1, x2, x1 + p];
  },
  'cmp-B05': q => { const [rho, m] = N(q.question); const area = N(q.steps[2].prompt)[0]; return [m / rho, rho > 1 ? 1 : 2, (m / 1000 * 10) / area]; },
  'ang-A04': q => { const [ext] = N(q.question); return [360 / ext, 180 - ext]; },
  'shp-C02': () => [1, 1, 0, 1],   // a proof: every step is a statement, not a number
  'av-B05': q => {
    const [r, h, , pi] = N(q.question);
    const cyl = pi * r * r * h, hemi = 2 / 3 * pi * r ** 3;
    return [cyl, hemi, cyl + hemi];
  },
  'tr-A03': q => { const [x, y, dx, dy] = N(q.question); return [x + dx, y + dy]; },
  'tr-B02': q => {
    const [ax, ay, bx, by, cx, cy, k, ox, oy] = N(q.question);
    const img = (x, y) => [ox + k * (x - ox), oy + k * (y - oy)];
    const A = img(ax, ay), Bp = img(bx, by), Cp = img(cx, cy);
    return [A[0], Bp[0], { ambiguous: `image is (${Cp[0]}, ${Cp[1]}); the stored answer is its y-coordinate, while the step for B took the x-coordinate`, value: Cp[1] }];
  },
  'pyth-B03': q => { const [r, chord] = N(q.question); const half = chord / 2; return [half, r * r - half * half, Math.sqrt(r * r - half * half)]; },
  'pyth-C02': q => {
    const [cx, cy, r, qx, qy] = N(q.question); const dist = (x, y) => Math.hypot(x - cx, y - cy);
    const [rx, ry] = N(q.steps[2].prompt), [sx, sy] = N(q.steps[3].prompt);
    return [dist(qx, qy), 0, { ambiguous: 'prompt asks inside or outside; the stored answer is the distance CR', value: dist(rx, ry) }, dist(sx, sy)];
  },
  'trig-B01': q => { const [hyp, adj] = N(q.question); return [adj / hyp, Math.acos(adj / hyp) * 180 / Math.PI]; },
  'cth-B04': q => { const [t] = N(q.question); return [null, t, t]; },   // alternate segment theorem: angle = tangent–chord angle
  'cth-C02': q => { const [a, b] = N(q.question); return [null, a + b, 180 - a - b, 180 - a - b]; },
  'vec-A04': q => { const [ax, ay, bx, by] = N(q.question); return [null, `(${bx - ax},${by - ay})`]; },
  'vec-A05': q => { const [ax, ay, k] = N(q.question.replace(/Find (\d)a/, ' $1')); return [`(${k * ax},${k * ay})`, `(${k * ax},${k * ay})`]; },
  'vec-C03': q => {
    const [ax, ay, bx, by] = N(q.question); const v = [bx - ax, by - ay], len = Math.hypot(...v);
    const u = v.map(c => c / len), d = N(q.steps[3].prompt)[0];
    return [`(${v[0]},${v[1]})`, Math.round(len * 100) / 100, `(${u.map(c => c.toFixed(3)).join(', ')})`,
      `(${(ax + d * u[0]).toFixed(2)}, ${(ay + d * u[1]).toFixed(2)})`];
  },
  'comb-A04': () => [4, 2 / 4],
  'comb-B06': () => [0.5 ** 3, 1 - 0.5 ** 3, 1 - 0.5 ** 3],
  'venn-C03': q => {
    const [ab, aGb, a] = N(q.question); const b = ab / aGb, bGa = ab / a;
    return [b, bGa, { mismatch: `prompt asks whether A and B are independent (no: P(B|A) = ${+bGa.toFixed(4)} ≠ P(B) = ${+b.toFixed(4)}); the stored number is P(B|A)`, value: bGa }, a * b];
  },
  'stat-averages-A05': q => {
    const xs = N(q.question).sort((x, y) => x - y); const med = xs[(xs.length - 1) / 2];
    const cnt = {}; xs.forEach(x => { cnt[x] = (cnt[x] || 0) + 1; }); const mode = Number(Object.entries(cnt).sort((p, r) => r[1] - p[1])[0][0]);
    return [med, mode];
  },
  'stat-averages-C03': q => { const [, n1, m1, , n2, m2] = N(q.question);   // 'Group 1 has 12 … 60. Group 2 has 18 … 70'
    return [n1 * m1, n2 * m2, (n1 * m1 + n2 * m2) / (n1 + n2)]; },
  'stat-charts-B02': q => {
    const n = N(q.question);   // 0,4,1.5,4 | 4,8,3.5,4 | 8,16,2,8
    const f = [n[2] * n[3], n[6] * n[7], n[10] * n[11]];
    return [f[1], f[2], f[0] + f[1] + f[2]];
  },
  'cum-B01': q => { const [, , mB, iB] = N(q.question); return [mB, iB]; },
  'stat-cumulative-A05': q => { const [p1, v1, p2, v2, n] = N(q.question); return [v2 - v1, (p2 - p1) / 100 * n]; },
  'stat-boxplots-B06': q => { const [n, , q1, , q3] = N(q.question);   // 'n = 20 … Q1 = 18 and Q3 = 34'
    return [q3 - q1, n / 4, n / 2]; },
  'int-A05': q => { const [x, sf] = N(q.question); return [Number(String(x).replace(/^0\.0*/, '')[0]), sigFig(x, sf)]; },
  'pow-B03': q => { const [b, p, r] = N(q.question.replace('^(', ' ').replace('/', ' ')); const root = Math.round(b ** (1 / r)); return [root, root, root ** p]; },
  'pow-C01': q => {
    const [a, b] = N(q.question);
    const out = n => { for (let s = Math.floor(Math.sqrt(n)); s > 1; s--) if (n % (s * s) === 0) return s; return 1; };
    return [out(a), out(b), out(a) + out(b), null];   // last step: the conclusion, a statement
  },
  'pow-C04': q => { const [a, b] = N(q.question); return [a * a, 2 * a, b, a * a + b]; },   // (3 + √5)²
};

function same(stored, expected, tol) {
  if (typeof expected === 'string') return String(stored).replace(/\s/g, '') === expected.replace(/\s/g, '');
  const num = Number(stored);
  if (Number.isNaN(num)) return false;
  return Math.abs(num - expected) <= tol + 1e-9;
}

function main() {
  const ALL = process.argv.includes('--all');
  if (ALL) Object.assign(RECOMPUTE, require('./maths-recompute-fns.js')({ N, gcd, lcm, sigFig, pennies }));
  const bi = process.argv.indexOf('--base');
  const BASE = bi > 0 ? process.argv[bi + 1] : null;
  const bank = loadBank(BASE);
  let qs = ALL ? bank : sample(bank);
  if (ALL) {
    const todo = qs.filter(q => !RECOMPUTE[q.id]);
    if (todo.length) console.log(`No recompute function yet for ${todo.length} question(s); not checked: ${todo.map(q => q.id).join(', ')}`);
    qs = qs.filter(q => RECOMPUTE[q.id]);
  }
  const rows = [];
  for (const q of qs) {
    const fn = RECOMPUTE[q.id];
    if (!fn) throw new Error(`no recompute function for ${q.id}`);
    const exp = fn(q);
    if (exp.length !== q.steps.length) throw new Error(`${q.id}: ${exp.length} values for ${q.steps.length} steps`);
    q.steps.forEach((s, i) => {
      const e = exp[i];
      const tol = s.tolerance ?? APP_TOL;
      const skip = s.checkType === 'skip';
      let status, note = '', value = e;
      if (e && typeof e === 'object' && e.anyOf) {
        // the prompt does not say which of these to enter; any of them is right
        const hit = e.anyOf.find(v => same(s.answer, v, tol));
        value = hit ?? e.anyOf[0];
        status = hit !== undefined ? 'ambiguous' : 'wrong';
        note = hit !== undefined ? e.ambiguous : `stored ${JSON.stringify(s.answer)} (tolerance ${tol}); recomputed one of ${e.anyOf.map(v => typeof v === 'number' ? +v.toFixed(6) : v).join(' / ')}`;
      } else if (e && typeof e === 'object') {
        value = e.value;
        if (e.mismatch) { status = 'mismatch'; note = e.mismatch; }
        else { status = same(s.answer, e.value, tol) ? 'ambiguous' : 'wrong'; note = e.ambiguous; }
      } else if (e === null) {
        status = 'ok'; note = 'not a number (statement step)';
      } else {
        status = same(s.answer, e, tol) ? 'ok' : 'wrong';
        if (status === 'wrong') note = `stored ${JSON.stringify(s.answer)} (tolerance ${tol}); recomputed ${typeof e === 'number' ? +e.toFixed(6) : e}`;
      }
      if (skip) { note = (status === 'ok' ? '' : `${status}: ${note}`); status = 'skip'; }
      rows.push({ id: q.id, step: i, prompt: s.prompt, stored: s.answer, tol, value, status, note });
    });
  }

  const checked = rows.filter(r => r.status !== 'skip');
  const count = st => rows.filter(r => r.status === st).length;
  const errors = checked.filter(r => r.status === 'wrong' || r.status === 'mismatch');
  const qErr = new Set(errors.map(r => r.id));
  const rate = (100 * errors.length / checked.length).toFixed(1);
  const head = `${ALL ? 'All' : 'Sample:'} ${qs.length} questions${ALL ? '' : ` (seed ${SEED}) of 600`}, ${rows.length} steps. Checked by the app: ${checked.length}; checkType skip: ${count('skip')}.\n` +
    `Checked steps: ok ${count('ok')}, ambiguous ${count('ambiguous')}, wrong ${count('wrong')}, mismatch ${count('mismatch')}.\n` +
    `Error rate (wrong + mismatch over checked steps): ${errors.length}/${checked.length} = ${rate}%. Questions with at least one error: ${qErr.size}/${qs.length}.`;
  console.log(head);
  for (const r of rows.filter(r => !['ok', 'skip'].includes(r.status) || (r.status === 'skip' && r.note))) {
    console.log(`  ${r.status.padEnd(9)} ${r.id} step ${r.step}: ${r.note}`);
  }

  const md = ['# Maths answer check', '', `Generated ${new Date().toISOString().slice(0, 10)} by tools/maths-recompute.js. Read-only: no question was changed.`, '', ...head.split('\n').map(l => l + '  '), '',
    ...(ALL ? [] : [`Sampled ids: ${qs.map(q => q.id).join(', ')}`, '']), '| Question | Step | Prompt | Stored | Recomputed | Status | Note |', '|---|---|---|---|---|---|---|'];
  const cell = v => String(v ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
  for (const r of rows) {
    const val = typeof r.value === 'number' ? +r.value.toFixed(6) : r.value;
    md.push(`| ${r.id} | ${r.step} | ${cell(r.prompt.slice(0, 70))} | ${cell(JSON.stringify(r.stored))} | ${cell(val === null ? '—' : val)} | ${r.status} | ${cell(r.note)} |`);
  }
  const out = ALL ? (BASE ? `tools/maths-recompute-all-report-${BASE}.md` : 'tools/maths-recompute-all-report.md') : 'tools/maths-recompute-report.md';
  fs.writeFileSync(path.join(ROOT, out), md.join('\n') + '\n');
  console.log('\nReport: ' + out);
  process.exit(errors.length ? 1 : 0);
}

module.exports = { RECOMPUTE, N, gcd, lcm, sigFig, pennies, loadBank };
if (require.main === module) main();
