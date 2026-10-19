/* ============================================================
   PRACTICE.JS — "Try another" practice questions (brief v3.1, step 1d)
   Shared by the browser (window.Practice) and Node (require). No DOM.
   A generator makes a fresh question of the same kind as an equation's
   worked examples, with sensible numbers, and works out the answer and
   the steps. Her answer is checked here, in code, with a tolerance.

   Generators register under the equation's id ("Q=It"), so a lesson's
   examBox equation finds its generator by its own id. Subject files in
   this folder (physics.js, …) call Practice.register.

   A question:
     { equation, question, given: { symbol: SI value }, find: symbol,
       answer: { value, unit, si },   // si = the factor to SI: value * si
       steps: [ { text } ], tolerance }
   ============================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Practice = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  const _gens = {};

  function register(id, gen) { _gens[id] = gen; }
  function has(id) { return Object.prototype.hasOwnProperty.call(_gens, id); }
  function ids() { return Object.keys(_gens); }

  // Small seeded generator (mulberry32). make(id) with no seed uses Math.random.
  function rng(seed) {
    if (seed === undefined || seed === null) return Math.random;
    let a = (Number(seed) >>> 0) || 1;
    return () => {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const pick = (r, list) => list[Math.floor(r() * list.length)];

  // A number to at most 3 significant figures, with no trailing zeros
  // (0.5, 120, 0.025, 4500). Floating noise (0.30000000000000004) is removed.
  function round3(x) { return x === 0 ? 0 : Number(Number(x).toPrecision(3)); }
  function clean(x) { return Number(Number(x).toPrecision(12)); }
  function fmt(x) {
    const v = round3(clean(x));
    const s = String(v);
    if (/e/.test(s)) return v.toFixed(Math.max(0, 3 - Math.floor(Math.log10(Math.abs(v))) - 1));
    // Thousands with a comma once they reach 10 000, as the lessons write them.
    return Math.abs(v) >= 10000 ? v.toLocaleString('en-GB') : s;
  }

  function make(id, seed) {
    if (!has(id)) throw new Error(`No practice generator for ${id}`);
    const q = _gens[id](rng(seed), { pick, fmt, clean });
    q.equation = id;
    if (!q.tolerance) q.tolerance = 0.02;
    return q;
  }

  // Her answer: the first number in what she typed ("0.5", "0.5 A", "500mA",
  // "1,200 J", ".5"). A unit with a prefix (m, k) on the answer's own unit is
  // converted. Returns { ok, value, given } — given false when there is no number.
  function check(q, text) {
    const t = String(text || '').replace(/(\d),(\d{3})\b/g, '$1$2').replace(/(\d) (\d{3})\b/g, '$1$2');
    const m = t.match(/-?(\d+(\.\d*)?|\.\d+)/);
    if (!m) return { ok: false, value: null, given: false };
    let v = Number(m[0]);
    const after = t.slice(m.index + m[0].length).trim();
    const u = q.answer.unit;
    if (u && after) {
      const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (new RegExp(`^m\\s?${esc(u)}`).test(after)) v = v / 1000;        // "500 mA" when the answer is in A
      else if (new RegExp(`^k\\s?${esc(u)}`).test(after)) v = v * 1000;   // "1.2 kJ" when the answer is in J
    }
    const a = q.answer.value;
    const ok = Math.abs(v - a) <= Math.max(q.tolerance * Math.abs(a), 1e-9);
    return { ok, value: v, given: true };
  }

  return { register, has, ids, make, check, fmt, round3, rng };
});
