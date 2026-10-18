#!/usr/bin/env node
/* Draws the P1 and P2 diagrams for the AI lessons (brief
 * docs/briefs/2026-10-18-first-time-learner.md step 4b) as plain SVG files in
 * diagrams/physics/. Written by hand as code so the shapes and numbers are
 * exact and easy to check; the site only ever loads the .svg files. Nothing
 * here runs in the browser, and no image comes from the internet.
 *
 *   node tools/draw-p1-p2-diagrams.js            # writes every diagram
 *   node tools/draw-p1-p2-diagrams.js p2-iv      # only ids starting with p2-iv
 *
 * Style matches diagrams/physics/p3-*.svg (dark background, amber and teal),
 * but drawn 480 units wide with labels of 17 units or more, so at a phone's
 * chat width (about 350 px) no label is smaller than about 12 px.
 * Then run: node tools/check-diagrams.js physics
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'diagrams', 'physics');
const FONT = `Inter, 'Helvetica Neue', Arial, sans-serif`;
const C = {
  bg: '#0f0e0c', text: '#f5f0e8', muted: 'rgba(245,240,232,0.68)', wire: 'rgba(245,240,232,0.85)',
  amber: '#e8a040', teal: '#4ecfaa', red: '#e8705a', blue: '#5b9cf0', brown: '#a8693a',
  green: '#3fae5a', yellow: '#e8d040', grid: 'rgba(245,240,232,0.12)',
};

// ── helpers ─────────────────────────────────────────────────────
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function text(x, y, s, o = {}) {
  return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${o.size || 20}"${o.weight ? ` font-weight="${o.weight}"` : ''}${o.anchor ? ` text-anchor="${o.anchor}"` : ''} fill="${o.fill || C.text}"${o.style ? ` font-style="${o.style}"` : ''}>${esc(s)}</text>`;
}
const line = (x1, y1, x2, y2, o = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.stroke || C.wire}" stroke-width="${o.w || 3}"${o.marker ? ` marker-end="url(#${o.marker})"` : ''}${o.dash ? ` stroke-dasharray="${o.dash}"` : ''} stroke-linecap="round"/>`;
const pathD = (d, o = {}) =>
  `<path d="${d}" fill="${o.fill || 'none'}" stroke="${o.stroke || C.wire}" stroke-width="${o.w || 3}"${o.marker ? ` marker-end="url(#${o.marker})"` : ''} stroke-linejoin="round" stroke-linecap="round"/>`;
const rect = (x, y, w, h, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}"${o.rx ? ` rx="${o.rx}"` : ''} fill="${o.fill || C.bg}" stroke="${o.stroke || 'none'}" stroke-width="${o.w || 3}"/>`;
const circle = (cx, cy, r, o = {}) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${o.fill || C.bg}" stroke="${o.stroke || C.amber}" stroke-width="${o.w || 3}"/>`;

function markers() {
  const m = (id, col, size = 7) => `<marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="${size}" markerHeight="${size}" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="${col}"/></marker>`;
  return `<defs>${m('aw', C.wire, 6)}${m('aa', C.amber)}${m('at', C.teal)}${m('ar', C.red)}${m('am', C.muted, 6)}</defs>`;
}
function svg(w, h, body, title) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="100%" role="img" aria-label="${esc(title)}">\n${markers()}\n${rect(0, 0, w, h, { fill: C.bg })}\n${body.filter(Boolean).join('\n')}\n</svg>\n`;
}

// ── circuit symbols (centred on cx, cy; wire runs through, horizontal or vertical) ──
// Each one first blanks the wire under it, then draws the symbol.
function cell(cx, cy, vertical = false) {
  // long thin plate = positive terminal, short thick plate = negative
  if (!vertical) return [rect(cx - 9, cy - 4, 18, 8), line(cx - 8, cy - 22, cx - 8, cy + 22, { stroke: C.amber, w: 3 }), line(cx + 8, cy - 11, cx + 8, cy + 11, { stroke: C.amber, w: 7 })].join('');
  return [rect(cx - 4, cy - 9, 8, 18), line(cx - 22, cy - 8, cx + 22, cy - 8, { stroke: C.amber, w: 3 }), line(cx - 11, cy + 8, cx + 11, cy + 8, { stroke: C.amber, w: 7 })].join('');
}
function lamp(cx, cy) {
  const d = 13;
  return [circle(cx, cy, 19), line(cx - d, cy - d, cx + d, cy + d, { stroke: C.amber }), line(cx - d, cy + d, cx + d, cy - d, { stroke: C.amber })].join('');
}
function resistor(cx, cy, vertical = false, label = '') {
  const [w, h] = vertical ? [20, 56] : [56, 20];
  return rect(cx - w / 2, cy - h / 2, w, h, { stroke: C.amber }) + (label ? text(cx, cy + 6, label, { size: 16, anchor: 'middle', fill: C.amber }) : '');
}
function variableResistor(cx, cy, vertical = false) {
  return resistor(cx, cy, vertical) + (vertical
    ? line(cx - 18, cy + 30, cx + 18, cy - 30, { stroke: C.amber, w: 2.5, marker: 'aa' })
    : line(cx - 26, cy + 18, cx + 26, cy - 18, { stroke: C.amber, w: 2.5, marker: 'aa' }));
}
function meter(cx, cy, letter) {
  return circle(cx, cy, 19) + text(cx, cy + 7, letter, { size: 20, anchor: 'middle', weight: 600, fill: C.amber });
}
function switchClosed(cx, cy, vertical = false) {
  if (!vertical) return [rect(cx - 24, cy - 6, 48, 12), circle(cx - 20, cy, 4, { stroke: C.amber, w: 2.5 }), circle(cx + 20, cy, 4, { stroke: C.amber, w: 2.5 }), line(cx - 16, cy - 3, cx + 20, cy - 3, { stroke: C.amber })].join('');
  return [rect(cx - 6, cy - 24, 12, 48), circle(cx, cy - 20, 4, { stroke: C.amber, w: 2.5 }), circle(cx, cy + 20, 4, { stroke: C.amber, w: 2.5 }), line(cx - 3, cy - 16, cx - 3, cy + 20, { stroke: C.amber })].join('');
}

// ── graph helpers ───────────────────────────────────────────────
// I-V characteristic panel: axes cross at the origin in the middle.
function ivPanel(ox, oy, title, curve, notes) {
  const L = 190, U = 125, D = 125;            // half-lengths of the axes
  const out = [];
  out.push(text(20, oy - U - 22, title, { size: 22, weight: 600 }));
  out.push(line(ox - L, oy, ox + L + 10, oy, { stroke: C.muted, w: 2, marker: 'am' }));
  out.push(line(ox, oy + D, ox, oy - U - 10, { stroke: C.muted, w: 2, marker: 'am' }));
  out.push(text(ox - 12, oy - U + 8, 'current (A)', { size: 18, anchor: 'end', fill: C.muted }));
  out.push(text(ox + L + 10, oy + 28, 'potential difference (V)', { size: 18, anchor: 'end', fill: C.muted }));
  out.push(text(ox - 8, oy - 8, '0', { size: 17, anchor: 'end', fill: C.muted }));   // top-left: no curve there
  out.push(pathD(curve(ox, oy, L, U), { stroke: C.teal, w: 4 }));
  notes.forEach((s, k) => out.push(text(20, oy + D + 34 + 22 * k, s, { size: 17 })));
  return out.join('\n');
}
const pts = (f, x0, x1, n = 60) => Array.from({ length: n + 1 }, (_, i) => { const x = x0 + (x1 - x0) * i / n; return [x, f(x)]; });
const toD = (p, ox, oy) => p.map(([x, y], i) => `${i ? 'L' : 'M'}${(ox + x).toFixed(1)} ${(oy - y).toFixed(1)}`).join(' ');

const IV = {
  resistor: (ox, oy, L, U) => toD([[-L + 15, -(U - 8)], [L - 15, U - 8]], ox, oy),
  lamp: (ox, oy, L, U) => toD(pts(x => (U - 5) * Math.tanh(x / 85), -L + 10, L - 10), ox, oy),
  // reverse: no current (a very small one, drawn on the axis); forward: rises steeply once the p.d. passes a small value
  diode: (ox, oy, L, U) => toD(pts(x => Math.min(U - 5, (U - 5) * Math.exp((x - 135) / 16)), -L + 10, 136, 90), ox, oy),
};
const IV_NOTES = {
  resistor: ['Straight line through the origin:', 'the resistance stays the same.'],
  lamp: ['The line gets flatter as the filament heats up:', 'its resistance increases.'],
  diode: ['Almost no current the reverse way.', 'Current flows in one direction only.'],
};

// Positive-quadrant graph (resistance against something), axes from the bottom-left corner.
function quadrantGraph(title, xLabel, yLabel, f, notes) {
  const ox = 70, oy = 330, W = 380, H = 250;
  const out = [text(20, 36, title, { size: 22, weight: 600 })];
  out.push(line(ox, oy, ox + W, oy, { stroke: C.muted, w: 2, marker: 'am' }));
  out.push(line(ox, oy, ox, oy - H, { stroke: C.muted, w: 2, marker: 'am' }));
  out.push(text(ox + W, oy + 32, xLabel, { size: 18, anchor: 'end', fill: C.muted }));
  out.push(text(ox + 12, oy - H + 6, yLabel, { size: 18, fill: C.muted }));
  out.push(text(ox - 10, oy + 22, '0', { size: 17, anchor: 'end', fill: C.muted }));
  out.push(pathD(toD(pts(f, 8, W - 20), ox, oy), { stroke: C.teal, w: 4 }));
  notes.forEach(([x, y, s]) => out.push(text(x, y, s, { size: 17 })));
  return out.join('\n');
}

// ── the diagrams ────────────────────────────────────────────────
const D = {};

D['p2-simple-circuit'] = () => {
  const L = 100, R = 380, T = 90, B = 270;
  return svg(480, 340, [
    pathD(`M${L} ${T} H${R} V${B} H${L} Z`),
    cell(240, T), text(240, T - 34, 'cell', { anchor: 'middle' }),
    line(200, T - 12, 140, T - 12, { stroke: C.teal, w: 2.5, marker: 'at' }), text(170, T - 22, 'current', { anchor: 'middle', size: 17, fill: C.teal }),
    switchClosed(L, 180, true), text(L - 16, 186, 'switch', { anchor: 'end' }),
    lamp(R, 180), text(R + 28, 186, 'lamp'),
    resistor(180, B), text(180, B + 44, 'resistor', { anchor: 'middle' }),
    meter(300, B, 'A'), text(300, B + 44, 'ammeter', { anchor: 'middle' }),
    text(20, 36, 'A simple circuit', { size: 22, weight: 600 }),
  ], 'A simple circuit: a cell, a switch, a lamp, a resistor and an ammeter in one loop');
};

D['p2-iv-practical-circuit'] = () => {
  const L = 80, R = 400, T = 100, B = 250;
  return svg(480, 380, [
    text(20, 36, 'Measuring an I-V graph', { size: 22, weight: 600 }),
    pathD(`M${L} ${T} H${R} V${B} H${L} Z`),
    cell(240, T), text(240, T - 34, 'cell', { anchor: 'middle' }),
    variableResistor(L, 175, true),
    meter(R, 175, 'A'), text(R - 30, 181, 'ammeter', { anchor: 'end' }),
    resistor(240, B), text(240, B + 6 + 34, 'component', { anchor: 'middle', size: 17 }),
    // voltmeter in parallel across the component
    pathD(`M180 ${B} V${B + 70} H218 M262 ${B + 70} H300 V${B}`),
    meter(240, B + 70, 'V'), text(240, B + 112, 'voltmeter (in parallel)', { anchor: 'middle', size: 17 }),
    text(L + 34, 181, 'variable resistor', { size: 17 }),
  ], 'Circuit for measuring an I-V graph: cell, variable resistor, ammeter in series with the component, voltmeter in parallel across it');
};

D['p2-iv-graphs'] = () => svg(480, 1230, [
  ivPanel(240, 190, 'Resistor at constant temperature', IV.resistor, IV_NOTES.resistor),
  line(20, 405, 460, 405, { stroke: C.grid, w: 1.5 }),
  ivPanel(240, 600, 'Filament lamp', IV.lamp, IV_NOTES.lamp),
  line(20, 815, 460, 815, { stroke: C.grid, w: 1.5 }),
  ivPanel(240, 1010, 'Diode', IV.diode, IV_NOTES.diode),
], 'I-V graphs for a resistor at constant temperature, a filament lamp and a diode');
D['p2-iv-resistor'] = () => svg(480, 405, [ivPanel(240, 190, 'Resistor at constant temperature', IV.resistor, IV_NOTES.resistor)], 'I-V graph for a resistor at constant temperature: a straight line through the origin');
D['p2-iv-diode'] = () => svg(480, 405, [ivPanel(240, 190, 'Diode', IV.diode, IV_NOTES.diode)], 'I-V graph for a diode: almost no current in the reverse direction, current rises steeply in the forward direction');

D['p2-thermistor-graph'] = () => svg(480, 380, [quadrantGraph('Thermistor', 'temperature (°C)', 'resistance (Ω)',
  x => 15 + 215 * Math.exp(-x / 95), [[230, 150, 'Hotter → lower'], [230, 174, 'resistance']])],
  'Graph of resistance against temperature for a thermistor: resistance falls as temperature rises');
D['p2-ldr-graph'] = () => svg(480, 380, [quadrantGraph('LDR (light-dependent resistor)', 'light intensity (lux)', 'resistance (Ω)',
  x => 15 + 215 * Math.exp(-x / 70), [[230, 150, 'Brighter → lower'], [230, 174, 'resistance']])],
  'Graph of resistance against light intensity for an LDR: resistance falls as light intensity rises');

D['p2-series-circuit'] = () => {
  const L = 90, R = 390, T = 100, B = 260;
  return svg(480, 360, [
    text(20, 36, 'Series: one loop', { size: 22, weight: 600 }),
    pathD(`M${L} ${T} H${R} V${B} H${L} Z`),
    cell(240, T), text(240, T - 34, '12 V supply', { anchor: 'middle' }),
    resistor(170, B), text(170, B + 44, '8 V across', { anchor: 'middle' }),
    resistor(310, B), text(310, B + 44, '4 V across', { anchor: 'middle' }),
    line(L - 18, 150, L - 18, 210, { stroke: C.teal, w: 2.5, marker: 'at' }), text(L - 26, 186, '2 A', { anchor: 'end', fill: C.teal }),
    line(R + 18, 210, R + 18, 150, { stroke: C.teal, w: 2.5, marker: 'at' }), text(R + 26, 186, '2 A', { fill: C.teal }),
    text(240, 178, 'Same current everywhere.', { anchor: 'middle', size: 17 }),
    text(240, 202, '8 V + 4 V = 12 V', { anchor: 'middle', size: 17 }),
  ], 'Series circuit: a 12 V supply and two resistors in one loop; 2 A everywhere; 8 V and 4 V across the resistors add up to 12 V');
};

D['p2-parallel-circuit'] = () => {
  // The cell's long (positive) plate is on the left, so the current leaves
  // leftwards, goes through both branches left to right, and returns up the right side.
  const L = 90, R = 390, T = 90, M = 190, B = 290;
  return svg(480, 440, [
    text(20, 36, 'Parallel: separate branches', { size: 22, weight: 600 }),
    pathD(`M${L} ${T} H${R} V${B} H${L} Z M${L} ${M} H${R}`),
    cell(240, T), text(240, T - 30, 'supply', { anchor: 'middle', size: 18 }),
    resistor(240, M), text(240, M - 22, 'branch 1', { anchor: 'middle', size: 17, fill: C.muted }),
    resistor(240, B), text(240, B - 22, 'branch 2', { anchor: 'middle', size: 17, fill: C.muted }),
    circle(L, M, 5, { fill: C.wire, stroke: C.wire, w: 1 }), circle(R, M, 5, { fill: C.wire, stroke: C.wire, w: 1 }),
    line(R + 18, 165, R + 18, 115, { stroke: C.teal, w: 2.5, marker: 'at' }),
    line(130, M + 16, 180, M + 16, { stroke: C.teal, w: 2.5, marker: 'at' }), line(130, B + 16, 180, B + 16, { stroke: C.teal, w: 2.5, marker: 'at' }),
    text(20, B + 56, 'Each branch has the full supply p.d.', { size: 17 }),
    text(20, B + 78, 'across it.', { size: 17 }),
    text(20, B + 110, 'The current splits between the branches,', { size: 17 }),
    text(20, B + 132, 'then joins up again.', { size: 17 }),
  ], 'Parallel circuit: two resistors on separate branches; each has the full supply potential difference; the current splits and joins again');
};

D['p2-ac-dc'] = () => {
  const panel = (oy, title, f) => {
    const ox = 60, W = 390, H = 70;
    return [text(20, oy - H - 42, title, { size: 22, weight: 600 }),
      line(ox, oy, ox + W, oy, { stroke: C.muted, w: 2, marker: 'am' }),
      line(ox, oy + H + 10, ox, oy - H - 10, { stroke: C.muted, w: 2, marker: 'am' }),
      text(ox + W, oy - 12, 'time (s)', { size: 18, anchor: 'end', fill: C.muted }),
      text(ox + 10, oy - H - 14, 'potential difference (V)', { size: 18, fill: C.muted }),
      pathD(toD(pts(f, 0, W - 20, 120), ox, oy), { stroke: C.teal, w: 4 })].join('\n');
  };
  return svg(480, 440, [
    panel(150, 'Direct (dc): stays one way', () => 50),
    text(220, 130, 'from a cell or battery', { size: 17, anchor: 'middle' }),
    panel(350, 'Alternating (ac): keeps reversing', x => 60 * Math.sin(x / 370 * 4 * Math.PI)),
  ], 'Graphs of potential difference against time: direct stays the same way; alternating keeps reversing direction');
};

D['p2-plug'] = () => {
  // Inside a UK plug, from the back with the cover off: earth top middle, neutral left, live right.
  const wire = (d, col) => pathD(d, { stroke: col, w: 9 }) ;
  return svg(480, 440, [
    text(20, 36, 'Three-core cable in a plug', { size: 22, weight: 600 }),
    rect(110, 70, 260, 300, { rx: 34, fill: 'rgba(245,240,232,0.05)', stroke: 'rgba(245,240,232,0.35)', w: 2 }),
    // pins (seen from the back)
    rect(222, 92, 36, 30, { fill: '#7a7468', stroke: C.text, w: 1.5 }),
    rect(140, 210, 30, 36, { fill: '#7a7468', stroke: C.text, w: 1.5 }),
    rect(310, 210, 30, 36, { fill: '#7a7468', stroke: C.text, w: 1.5 }),
    // cable coming in at the bottom, outer insulation
    rect(212, 330, 56, 100, { fill: '#2a2620', stroke: 'rgba(245,240,232,0.5)', w: 2 }),
    // wires
    wire('M240 340 V122', C.green), pathD('M240 340 V122', { stroke: C.yellow, w: 9 }).replace('stroke-width="9"', 'stroke-width="9" stroke-dasharray="14 14"'),
    wire('M228 340 V300 Q228 270 200 262 L155 246', C.blue),
    wire('M252 340 V300 Q252 270 280 262 L325 246', C.brown),
    // labels
    text(270, 112, 'earth', { size: 19 }), text(270, 134, 'green and yellow', { size: 17, fill: C.muted }),
    text(20, 236, 'neutral', { size: 19 }), text(20, 258, 'blue', { size: 17, fill: C.muted }),
    text(460, 236, 'live', { size: 19, anchor: 'end' }), text(460, 258, 'brown', { size: 17, fill: C.muted, anchor: 'end' }),
    text(290, 400, 'cable: three wires', { size: 17 }), text(290, 422, 'inside the outer cover', { size: 17, fill: C.muted }),
  ], 'Inside a plug: the earth wire (green and yellow) goes to the top pin, the neutral wire (blue) to the left pin and the live wire (brown) to the right pin');
};

D['p2-field-lines'] = () => {
  const sphere = (cx, cy, sign) => {
    const out = [];
    for (let k = 0; k < 8; k++) {
      const a = k * Math.PI / 4, r1 = 34, r2 = 92;
      const [x1, y1, x2, y2] = [cx + r1 * Math.cos(a), cy + r1 * Math.sin(a), cx + r2 * Math.cos(a), cy + r2 * Math.sin(a)];
      out.push(sign > 0 ? line(x1.toFixed(1), y1.toFixed(1), x2.toFixed(1), y2.toFixed(1), { stroke: C.teal, w: 2.5, marker: 'at' })
                        : line(x2.toFixed(1), y2.toFixed(1), x1.toFixed(1), y1.toFixed(1), { stroke: C.teal, w: 2.5, marker: 'at' }));
    }
    out.push(circle(cx, cy, 28, { stroke: sign > 0 ? C.red : C.blue, fill: sign > 0 ? 'rgba(232,112,90,0.25)' : 'rgba(91,156,240,0.25)' }));
    out.push(text(cx, cy + 9, sign > 0 ? '+' : '−', { size: 28, anchor: 'middle', weight: 700 }));
    return out.join('\n');
  };
  return svg(480, 340, [
    text(20, 36, 'Electric field lines', { size: 22, weight: 600 }),
    sphere(125, 180, +1), sphere(355, 180, -1),
    text(125, 305, 'positive: lines point out', { size: 17, anchor: 'middle' }),
    text(355, 305, 'negative: lines point in', { size: 17, anchor: 'middle' }),
  ], 'Electric field lines around a positive sphere point outwards; around a negative sphere they point inwards');
};

// ── P1 ──
D['p1-torch-energy'] = () => {
  const box = (x, y, w, h, l1, l2, col) => [rect(x, y, w, h, { rx: 10, fill: 'rgba(245,240,232,0.05)', stroke: col, w: 2.5 }),
    text(x + w / 2, y + (l2 ? h / 2 - 4 : h / 2 + 7), l1, { size: 19, anchor: 'middle' }),
    l2 ? text(x + w / 2, y + h / 2 + 20, l2, { size: 17, anchor: 'middle', fill: C.muted }) : ''].join('\n');
  return svg(480, 470, [
    text(20, 36, 'A torch: stores and transfers', { size: 22, weight: 600 }),
    box(100, 60, 280, 64, 'chemical energy store', 'of the battery', C.amber),
    line(240, 126, 240, 190, { stroke: C.amber, w: 3, marker: 'aa' }), text(254, 164, 'electrically', { size: 18, fill: C.amber }),
    box(160, 194, 160, 52, 'the lamp', '', C.text),
    line(210, 248, 150, 350, { stroke: C.teal, w: 3, marker: 'at' }), line(270, 248, 330, 350, { stroke: C.red, w: 3, marker: 'ar' }),
    text(20, 296, 'by radiation', { size: 18, fill: C.teal }), text(20, 318, '(light): useful', { size: 17, fill: C.teal }),
    text(460, 296, 'by heating:', { size: 18, fill: C.red, anchor: 'end' }), text(460, 318, 'wasted', { size: 17, fill: C.red, anchor: 'end' }),
    box(60, 354, 360, 64, 'thermal energy store', 'of the surroundings', C.muted),
    text(240, 452, 'The light is absorbed and warms the room too.', { size: 17, anchor: 'middle', fill: C.muted }),
  ], 'A torch: energy is transferred electrically from the chemical store of the battery to the lamp, then by light and by heating to the thermal store of the surroundings');
};

D['p1-sankey-lamp'] = () => {
  // Widths proportional to energy: 2 units per joule. 100 J in = 15 J useful + 85 J wasted.
  const k = 2, x0 = 40, top = 90, inW = 100 * k, useW = 15 * k, wasteW = 85 * k;
  const splitX = 200, endX = 400;
  return svg(480, 440, [
    text(20, 36, 'Sankey diagram: a lamp', { size: 22, weight: 600 }),
    // input arrow body and the useful branch (top part), continuing right
    pathD(`M${x0} ${top} H${endX} V${top - 12} L${endX + 40} ${top + useW / 2} L${endX} ${top + useW + 12} V${top + useW} H${splitX + wasteW} `
      + `V${top + inW + 60} H${splitX + wasteW + 14} L${splitX + wasteW / 2} ${top + inW + 110} L${splitX - 14} ${top + inW + 60} H${splitX} V${top + inW} H${x0} Z`,
      { fill: 'rgba(232,160,64,0.18)', stroke: C.amber, w: 2.5 }),
    line(splitX, top + useW, splitX + wasteW, top + useW, { stroke: C.amber, w: 1.5, dash: '6 6' }),
    text(x0 + 10, top + inW / 2 + 2, '100 J in', { size: 20, weight: 600 }),
    text(x0 + 10, top + inW / 2 + 26, 'electrically', { size: 17, fill: C.muted }),
    text(endX + 40, top - 20, '15 J useful, by light', { size: 18, anchor: 'end', fill: C.teal }),
    text(175, top + inW + 40, '85 J wasted', { size: 19, anchor: 'end', fill: C.red }),
    text(175, top + inW + 64, 'by heating the', { size: 17, anchor: 'end', fill: C.muted }),
    text(175, top + inW + 86, 'surroundings', { size: 17, anchor: 'end', fill: C.muted }),
    text(20, 420, '15 J + 85 J = 100 J. Arrow width shows the energy.', { size: 17, fill: C.muted }),
  ], 'Sankey diagram for a lamp: 100 J in electrically, 15 J out usefully by light, 85 J wasted by heating the surroundings');
};

D['p1-national-grid'] = () => {
  const box = (x, y, w, l1, l2) => [rect(x, y, w, 66, { rx: 10, fill: 'rgba(245,240,232,0.05)', stroke: C.amber, w: 2.5 }),
    text(x + w / 2, y + 28, l1, { size: 18, anchor: 'middle' }), text(x + w / 2, y + 52, l2, { size: 17, anchor: 'middle', fill: C.teal })].join('\n');
  const down = y => line(240, y, 240, y + 34, { stroke: C.wire, w: 3, marker: 'aw' });
  return svg(480, 560, [
    text(20, 36, 'The National Grid', { size: 22, weight: 600 }),
    box(110, 56, 260, 'power station', 'about 25 kV'), down(124),
    box(110, 160, 260, 'step-up transformer', 'up to 400 kV'), down(228),
    box(110, 264, 260, 'transmission cables', 'high p.d., low current'), down(332),
    box(110, 368, 260, 'step-down transformer', 'p.d. made lower'), down(436),
    box(110, 472, 260, 'homes', '230 V'),
  ], 'The National Grid: power station at about 25 kV, step-up transformer to 400 kV, transmission cables, step-down transformer, homes at 230 V');
};

// ── main ────────────────────────────────────────────────────────
const only = process.argv.slice(2);
for (const [id, draw] of Object.entries(D)) {
  if (only.length && !only.some(p => id.startsWith(p))) continue;
  fs.writeFileSync(path.join(OUT, `${id}.svg`), draw());
  console.log(`diagrams/physics/${id}.svg`);
}
