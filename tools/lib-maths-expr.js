/**
 * Small expression reader for the maths lesson check (tools/maths-lesson-check.js).
 *
 *   normalise(text)     unicode maths → ASCII (− × ÷ ² ³ ½ √ π …)
 *   parse(expr)         → function(vars) → number, or null if it cannot read it
 *   vars(expr)          single-letter variables used
 *   chains(text)        every run of maths in free text, split into pieces and
 *                       the operators between them (=, ≠, ≈, →)
 *   approxEqual(a, b, shown)  equal within the precision the text shows
 *   linearRoot(lhs, rhs)      root of a one-variable linear equation, or null
 *
 * Implicit multiplication is read: 3x, 2(x + 1), (a + b)(c + d), 2πr.
 * Anything with a word of two or more letters is not maths and is skipped.
 */

const SUP = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-', 'ⁿ': 'n' };
const FRAC = { '½': '(1/2)', '⅓': '(1/3)', '⅔': '(2/3)', '¼': '(1/4)', '¾': '(3/4)', '⅕': '(1/5)', '⅛': '(1/8)', '⅜': '(3/8)', '⅝': '(5/8)', '⅞': '(7/8)' };

function normalise(s) {
  s = String(s);
  s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻ⁿ]+/g, m => '^(' + [...m].map(c => SUP[c]).join('') + ')');
  s = s.replace(/(\d)([½⅓⅔¼¾⅕⅛⅜⅝⅞])/g, (m, d, f) => '(' + d + '+' + FRAC[f] + ')');   // mixed numbers: 2¼
  for (const [k, v] of Object.entries(FRAC)) s = s.split(k).join(v);
  return s
    .replace(/[−–]/g, '-').replace(/×|·/g, '*').replace(/÷/g, '/')
    .replace(/π/g, 'π').replace(/√\(/g, 'R(').replace(/√(\d+(?:\.\d+)?|[a-z])/g, 'R($1)')
    .replace(/°/g, '').replace(/£/g, '').replace(/%/g, '').replace(/ /g, ' ');
}

// ---- tokenizer and recursive-descent parser ----

function tokenize(s) {
  const out = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (c === ' ') { i++; continue; }
    const num = s.slice(i).match(/^\d+(?:\.\d+)?|^\.\d+/);
    if (num) { out.push({ t: 'n', v: parseFloat(num[0]), raw: num[0] }); i += num[0].length; continue; }
    if (c === 'π') { out.push({ t: 'n', v: Math.PI, raw: 'π' }); i++; continue; }
    if (c === 'R') { out.push({ t: 'f', v: 'sqrt' }); i++; continue; }
    if (/[a-zA-Z]/.test(c)) { out.push({ t: 'v', v: c }); i++; continue; }
    if ('+-*/^()%'.includes(c)) { out.push({ t: c }); i++; continue; }
    return null;
  }
  return out;
}

function parse(expr) {
  const toks = tokenize(normalise(expr).trim());
  if (!toks || !toks.length) return null;
  let p = 0;
  const peek = () => toks[p];
  const startsFactor = t => t && (t.t === 'n' || t.t === 'v' || t.t === 'f' || t.t === '(');
  function sum() {
    let f = term();
    while (peek() && (peek().t === '+' || peek().t === '-')) {
      const op = toks[p++].t; const g = term();
      const a = f; f = op === '+' ? v => a(v) + g(v) : v => a(v) - g(v);
    }
    return f;
  }
  function term() {
    let f = unary();
    for (;;) {
      const t = peek();
      if (t && (t.t === '*' || t.t === '/')) {
        p++; const g = unary(); const a = f;
        f = t.t === '*' ? v => a(v) * g(v) : v => a(v) / g(v);
      } else if (startsFactor(t)) {            // implicit multiplication
        const g = power(); const a = f; f = v => a(v) * g(v);
      } else return f;
    }
  }
  function unary() {
    if (peek() && peek().t === '-') { p++; const g = unary(); return v => -g(v); }
    if (peek() && peek().t === '+') { p++; return unary(); }
    return power();
  }
  function power() {
    let f = atom();
    if (peek() && peek().t === '%') { p++; const a = f; f = v => a(v) / 100; }
    if (peek() && peek().t === '^') { p++; const g = unaryAtom(); const a = f; return v => Math.pow(a(v), g(v)); }
    return f;
  }
  function unaryAtom() {
    if (peek() && peek().t === '-') { p++; const g = unaryAtom(); return v => -g(v); }
    return atom();
  }
  function atom() {
    const t = toks[p++];
    if (!t) throw 0;
    if (t.t === 'n') return () => t.v;
    if (t.t === 'v') return v => { if (!(t.v in v)) throw 0; return v[t.v]; };
    if (t.t === 'f') { const g = atom(); return v => Math.sqrt(g(v)); }
    if (t.t === '(') { const f = sum(); if (!peek() || peek().t !== ')') throw 0; p++; return f; }
    throw 0;
  }
  try {
    const f = sum();
    if (p !== toks.length) return null;
    return v => { try { return f(v || {}); } catch { return NaN; } };
  } catch { return null; }
}

function vars(expr) {
  const toks = tokenize(normalise(expr).trim()) || [];
  return [...new Set(toks.filter(t => t.t === 'v').map(t => t.v))];
}

// decimals shown in a bare literal ("3.14" → 2), else null
function shownDecimals(expr) {
  const m = normalise(expr).trim().match(/^-?\d+(?:\.(\d+))?%?$/);
  return m ? (m[1] ? m[1].length : 0) : null;
}

function approxEqual(a, b, sa, sb, loose) {
  if (!isFinite(a) || !isFinite(b)) return false;
  if (loose) return Math.abs(a - b) <= Math.max(0.02 * Math.max(Math.abs(a), Math.abs(b)), 0.01);
  let tol = 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));
  for (const s of [sa, sb]) {
    const d = s == null ? null : shownDecimals(s);
    if (d != null) tol = Math.max(tol, 0.5 * Math.pow(10, -d) * 1.0001);
  }
  // a rounded decimal used inside a side (0.2667 × 360): relative tolerance from its last digit
  for (const side of [sa, sb]) {
    for (const lit of String(side == null ? '' : normalise(side)).match(/\d+\.\d{3,}/g) || []) {
      const d = lit.split('.')[1].length, v = parseFloat(lit);
      if (v) tol = Math.max(tol, (0.5 * Math.pow(10, -d) / Math.abs(v)) * Math.max(Math.abs(a), Math.abs(b)) * 1.0001);
    }
  }
  return Math.abs(a - b) <= tol;
}

// ---- finding maths in free text ----

const OPS = /(≠|≈|=|→)/;
const STOP = new Set(('an as at be by do go he if in is it me my no of on or so to up us we ok eg ie vs ' +
  'the and for are but not you all any can has her was one our out two its add sum use get set let cos sin tan ' +
  'max min per cm mm km kg ml mg cl pm am hr min sec day new old odd yes now how why who see way end top get put ' +
  'own off few big top low far ago lot box row key cap rpm mph kmh').split(/\s+/));

function chains(text) {
  const out = [];
  const s = String(text).replace(/(\d),(?=\d{3}\b)/g, '$1')   // 6,350,000
    .replace(/(\d)\s*:\s*(\d)/g, '$1\u0002$2');                  // ratios 5:3 stay whole (and unreadable)
  // Words of 2+ letters break the maths; a run of 2-3 lower-case letters that
  // is not an English word or unit is algebra (ac, bd, xy). Each break
  // remembers the word, so a number straight after a word ("sin 38",
  // "Year 2", "up to 10") is not read as a whole side, and "70% of" is not 70.
  const marked = s.replace(/[A-Za-z]{2,}/g, w => (/^[a-z]{2,3}$/.test(w) && !STOP.has(w)) ? w : '\u0001' + w.toLowerCase() + '\u0001');
  const re = /\u0001([a-z]+)\u0001|[,;:?!✓✗"“”'‘’\[\]{}]|\.(?=\s|$)|\s—\s|\s–\s/g;
  const frags = [];
  let last = 0, prevWord = null, m;
  while ((m = re.exec(marked))) {
    frags.push({ text: marked.slice(last, m.index), leftWord: prevWord, rightWord: m[1] || null });
    prevWord = m[1] || null;
    last = re.lastIndex;
  }
  frags.push({ text: marked.slice(last), leftWord: prevWord, rightWord: null });
  for (const fr of frags) {
    const frag = fr.text.trim();
    if (!/[=≠≈→]/.test(frag)) continue;
    const parts = frag.split(OPS).map(x => x.trim());
    let items = [];
    for (let i = 0; i < parts.length; i++) items.push(i % 2 === 0 ? { piece: parts[i] } : { op: parts[i] });
    // a bare number right after a word belongs to that word
    // ("sin 38° ≈ 0.6157", "Year 2 = 6800 × 0.85", "up to 10 = 4"); not before "≠"
    if (fr.leftWord && items.length > 2 && items[0].piece && /^[\d.]+°?\)?$/.test(items[0].piece) && items[1].op !== '≠') items = items.slice(2);
    // "40% of £750 = …": what follows "of" is an operand, not a whole side
    else if (fr.leftWord === 'of' && items.length > 2 && items[0].piece) items = items.slice(2);
    // "70% of …", "3 times …": the last number is only part of a phrase
    if (fr.rightWord && /^(of|times|more|less|over|out|lots|squared|cubed|per)$/.test(fr.rightWord) && items.length > 2) items = items.slice(0, -2);
    if (items.length < 3) continue;
    out.push({ text: frag.replace(/\u0002/g, ':'), items: items.map(x => ('piece' in x ? { piece: x.piece.replace(/\u0002/g, ':') } : x)), leftWord: fr.leftWord, rightWord: fr.rightWord });
  }
  return out;
}

// Root of lhs = rhs if both are linear in one variable; null otherwise.
function linearRoot(lhs, rhs) {
  const vs = [...new Set([...vars(lhs), ...vars(rhs)])];
  if (vs.length !== 1) return null;
  const f = parse(lhs), g = parse(rhs);
  if (!f || !g) return null;
  const x = vs[0];
  const h = t => f({ [x]: t }) - g({ [x]: t });
  const h0 = h(0), h1 = h(1), h2 = h(2.5);
  if (![h0, h1, h2].every(isFinite)) return null;
  const m = h1 - h0;
  if (Math.abs((h2 - h0) - 2.5 * m) > 1e-7 * Math.max(1, Math.abs(m))) return null;  // not linear
  if (Math.abs(m) < 1e-12) return null;
  return { variable: x, value: -h0 / m };
}

// lhs and rhs equal for all values of their variables (checked at 4 points)
function identical(lhs, rhs) {
  const vs = [...new Set([...vars(lhs), ...vars(rhs)])];
  const f = parse(lhs), g = parse(rhs);
  if (!f || !g || !vs.length) return null;
  const pts = [1.3, -0.7, 2.9, 0.41];
  return pts.every((t, k) => {
    const env = Object.fromEntries(vs.map((v, i) => [v, t + i * 0.37 + k * 0.11]));
    const a = f(env), b = g(env);
    return isFinite(a) && isFinite(b) && Math.abs(a - b) <= 1e-7 * Math.max(1, Math.abs(a));
  });
}

module.exports = { normalise, parse, vars, chains, approxEqual, linearRoot, identical, shownDecimals };
