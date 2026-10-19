#!/usr/bin/env node
/* Draws the picture sequences for the pilot lessons (brief
 * docs/briefs/2026-10-19-pilot-feedback-v3-1.md, step 1a, task A7) as plain
 * SVG files in diagrams/physics/. A picture shows only what has been taught
 * where it appears, so a circuit is built up over several pictures and a
 * graph comes first as a beginner's version (positive values, the origin
 * labelled). Same style as tools/draw-p1-p2-diagrams.js.
 *
 * The symbol charts are cut from diagrams/physics/p2-circuit-symbols.svg
 * (kept as it was), so each symbol is drawn exactly as before.
 *
 *   node tools/draw-v31-pictures.js        # writes every picture
 * Then run: node tools/check-diagrams.js physics
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'diagrams', 'physics');
const FONT = `Inter, 'Helvetica Neue', Arial, sans-serif`;
const C = { bg: '#0f0e0c', text: '#f5f0e8', muted: 'rgba(245,240,232,0.68)', wire: 'rgba(245,240,232,0.85)', amber: '#e8a040', teal: '#4ecfaa' };

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function text(x, y, s, o = {}) {
  return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${o.size || 20}"${o.weight ? ` font-weight="${o.weight}"` : ''}${o.anchor ? ` text-anchor="${o.anchor}"` : ''} fill="${o.fill || C.text}">${esc(s)}</text>`;
}
const line = (x1, y1, x2, y2, o = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.stroke || C.wire}" stroke-width="${o.w || 3}"${o.marker ? ` marker-end="url(#${o.marker})"` : ''} stroke-linecap="round"/>`;
const pathD = (d, o = {}) => `<path d="${d}" fill="${o.fill || 'none'}" stroke="${o.stroke || C.wire}" stroke-width="${o.w || 3}" stroke-linejoin="round" stroke-linecap="round"/>`;
const rect = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${o.fill || C.bg}" stroke="${o.stroke || 'none'}" stroke-width="${o.w || 3}"/>`;
const circle = (cx, cy, r, o = {}) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${o.fill || C.bg}" stroke="${o.stroke || C.amber}" stroke-width="${o.w || 3}"/>`;
function markers() {
  const m = (id, col, size = 7) => `<marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="${size}" markerHeight="${size}" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="${col}"/></marker>`;
  return `<defs>${m('at', C.teal)}${m('am', C.muted, 6)}${m('sa', C.amber, 6)}</defs>`;
}
function svg(w, h, body, title) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="100%" role="img" aria-label="${esc(title)}">\n${markers()}\n${rect(0, 0, w, h, { fill: C.bg })}\n${body.filter(Boolean).join('\n')}\n</svg>\n`;
}
function cell(cx, cy) { return [rect(cx - 9, cy - 4, 18, 8), line(cx - 8, cy - 22, cx - 8, cy + 22, { stroke: C.amber }), line(cx + 8, cy - 11, cx + 8, cy + 11, { stroke: C.amber, w: 7 })].join(''); }
function lamp(cx, cy) { const d = 13; return [circle(cx, cy, 19), line(cx - d, cy - d, cx + d, cy + d, { stroke: C.amber }), line(cx - d, cy + d, cx + d, cy - d, { stroke: C.amber })].join(''); }
function resistor(cx, cy) { return rect(cx - 28, cy - 10, 56, 20, { stroke: C.amber }); }
function meter(cx, cy, letter) { return circle(cx, cy, 19) + text(cx, cy + 7, letter, { size: 20, anchor: 'middle', weight: 600, fill: C.amber }); }
function switchV(cx, cy) { return [rect(cx - 6, cy - 24, 12, 48), circle(cx, cy - 20, 4, { w: 2.5 }), circle(cx, cy + 20, 4, { w: 2.5 }), line(cx - 3, cy - 16, cx - 3, cy + 20, { stroke: C.amber })].join(''); }

const D = {};

// ── Current and potential difference: the circuit, built up ───────
const L = 100, R = 380, T = 110, B = 290;
D['p2-cv-loop'] = () => svg(480, 340, [
  text(20, 36, 'One loop: a cell, a switch and a lamp', { size: 22, weight: 600 }),
  pathD(`M${L} ${T} H${R} V${B} H${L} Z`),
  cell(240, T), text(240, T - 34, 'cell', { anchor: 'middle' }),
  switchV(L, 200), text(L - 16, 206, 'switch', { anchor: 'end' }),
  lamp(R, 200), text(R + 28, 206, 'lamp'),
], 'A closed circuit: a cell, a switch and a lamp joined by wires in one loop');

D['p2-cv-ammeter'] = () => svg(480, 360, [
  text(20, 36, 'Measuring the current', { size: 22, weight: 600 }),
  pathD(`M${L} ${T} H${R} V${B} H${L} Z`),
  cell(240, T), text(240, T - 34, 'cell', { anchor: 'middle' }),
  line(200, T - 12, 140, T - 12, { stroke: C.teal, w: 2.5, marker: 'at' }), text(170, T - 22, 'current', { anchor: 'middle', size: 17, fill: C.teal }),
  switchV(L, 200), text(L - 16, 206, 'switch', { anchor: 'end' }),
  lamp(R, 200), text(R + 28, 206, 'lamp'),
  meter(240, B, 'A'), text(240, B + 44, 'ammeter', { anchor: 'middle' }),
], 'The same loop with an ammeter in it, measuring the current');

D['p2-cv-resistor'] = () => svg(480, 420, [
  text(20, 36, 'Adding a resistor and a voltmeter', { size: 22, weight: 600 }),
  pathD(`M${L} ${T} H${R} V${B} H${L} Z`),
  cell(240, T), text(240, T - 34, 'cell', { anchor: 'middle' }),
  switchV(L, 200), text(L - 16, 206, 'switch', { anchor: 'end' }),
  lamp(R, 200), text(R - 30, 206, 'lamp', { anchor: 'end' }),
  // the voltmeter across the lamp
  pathD(`M${R} 150 H${R + 50} V178 M${R + 50} 222 V250 H${R}`),
  meter(R + 50, 200, 'V'), text(R + 50, 272, 'voltmeter', { anchor: 'middle', size: 17 }),
  resistor(170, B), text(170, B + 44, 'resistor', { anchor: 'middle' }),
  meter(310, B, 'A'), text(310, B + 44, 'ammeter', { anchor: 'middle' }),
], 'The same loop with a resistor added, and a voltmeter connected across the lamp');

// ── Graphs: the beginner's versions (positive values, the origin labelled) ──
function quadrant(title, curve, notes) {
  const ox = 80, oy = 330, W = 360, H = 250;
  const pts = Array.from({ length: 61 }, (_, i) => { const x = 8 + (W - 30) * i / 60; return [x, curve(x)]; });
  return [
    text(20, 36, title, { size: 22, weight: 600 }),
    line(ox, oy, ox + W, oy, { stroke: C.muted, w: 2, marker: 'am' }),
    line(ox, oy, ox, oy - H, { stroke: C.muted, w: 2, marker: 'am' }),
    text(ox + W, oy + 32, 'potential difference (V)', { size: 18, anchor: 'end', fill: C.muted }),
    text(ox + 12, oy - H + 6, 'current (A)', { size: 18, fill: C.muted }),
    text(ox - 8, oy + 22, '0', { size: 17, anchor: 'end', fill: C.muted }),
    line(ox + 60, oy + 50, ox + 8, oy + 6, { stroke: C.amber, w: 2, marker: 'sa' }),
    text(ox + 64, oy + 62, 'the origin', { size: 17, fill: C.amber }),
    pathD(pts.map(([x, y], i) => `${i ? 'L' : 'M'}${(ox + x).toFixed(1)} ${(oy - y).toFixed(1)}`).join(' '), { stroke: C.teal, w: 4 }),
    ...notes.map((s, k) => text(20, oy + 100 + 24 * k, s, { size: 17 })),
  ];
}
D['p2-iv-resistor-beginner'] = () => svg(480, 480, quadrant('Resistor at constant temperature', x => x * 0.66,
  ['Straight line through the origin.', 'At the origin: no potential difference, no current.']),
  'Beginner I-V graph for a resistor at constant temperature: a straight line from the origin, positive values only');
D['p2-iv-lamp-beginner'] = () => svg(480, 480, quadrant('Filament lamp', x => 228 * Math.tanh(x / 150),
  ['The line gets flatter as the filament heats up:', 'its resistance increases.']),
  'Beginner I-V graph for a filament lamp: a curve from the origin that gets flatter, positive values only');

// ── Symbol charts, cut from p2-circuit-symbols.svg ───────────────
// That chart is a grid: two columns (centres x 120 and 360), rows 96 apart
// from y 92; each symbol is the elements whose first y lies in its row.
const SRC = fs.readFileSync(path.join(OUT, 'p2-circuit-symbols.svg'), 'utf8');
const ELEMENTS = [...SRC.replace(/<defs>[\s\S]*?<\/defs>/, '').matchAll(/<(path|circle|rect|line|text)\b[^>]*?(\/>|>[^<]*<\/text>)/g)].map(m => m[0])
  .filter(e => !/width="480"/.test(e) && !/>Circuit symbols</.test(e));
function firstXY(e) {
  const g = a => { const m = e.match(new RegExp(`\\b${a}="(-?[\\d.]+)"`)); return m ? Number(m[1]) : null; };
  if (e.startsWith('<path')) { const m = e.match(/d="M\s*(-?[\d.]+)[ ,](-?[\d.]+)/); return [Number(m[1]), Number(m[2])]; }
  if (e.startsWith('<circle')) return [g('cx'), g('cy')];
  if (e.startsWith('<line')) return [g('x1'), g('y1')];
  return [g('x'), g('y')];
}
const SYMBOLS = {};   // label → { elements, cx, cy }
// An element's middle height: the mean of its y values (y, cy, y1, y2, or a path's points).
function midY(e) {
  const ys = [...e.matchAll(/\s(?:y|cy|y1|y2)="(-?[\d.]+)"/g)].map(m => Number(m[1]));
  const d = e.match(/\sd="([^"]+)"/);
  if (d) for (const t of d[1].match(/[MLHVZ][^MLHVZ]*/g) || []) {
    const v = (t.slice(1).match(/-?[\d.]+/g) || []).map(Number);
    if ('ML'.includes(t[0])) ys.push(v[1]); else if (t[0] === 'V') ys.push(v[0]);
  }
  return ys.reduce((a, b) => a + b, 0) / ys.length;
}
const ROWS = 7;
const cellOf = e => { const [x] = firstXY(e); const r = Math.max(0, Math.min(ROWS - 1, Math.round((midY(e) - 92) / 96))); return [x < 240 ? 0 : 1, r]; };
const groups = new Map();
for (const e of ELEMENTS) { const k = cellOf(e).join(','); if (!groups.has(k)) groups.set(k, []); groups.get(k).push(e); }
for (const [k, els] of groups) {
  const label = (els.find(e => e.startsWith('<text') && /font-size="17"/.test(e)) || '').replace(/<[^>]+>/g, '');
  const [col, row] = k.split(',').map(Number);
  if (label) SYMBOLS[label] = { els, cx: col ? 360 : 120, cy: 92 + 96 * row };
}
function chart(title, labels, aria) {
  const rows = Math.ceil(labels.length / 2);
  const h = 80 + rows * 96 + 30;
  const body = [text(20, 36, title, { size: 22, weight: 600 })];
  labels.forEach((l, k) => {
    const s = SYMBOLS[l];
    if (!s) throw new Error(`no symbol "${l}" in p2-circuit-symbols.svg`);
    const cx = k % 2 ? 360 : 120, cy = 112 + 96 * Math.floor(k / 2);
    body.push(`<g transform="translate(${cx - s.cx} ${cy - s.cy})">${s.els.join('')}</g>`);
  });
  return svg(480, h, body, aria);
}
D['p2-symbols-basic'] = () => chart('Circuit symbols', ['cell', 'battery', 'open switch', 'closed switch', 'lamp', 'resistor', 'ammeter', 'voltmeter'],
  'Circuit symbols: cell, battery, open switch, closed switch, lamp, resistor, ammeter, voltmeter');
D['p2-symbols-more'] = () => chart('More circuit symbols', ['diode', 'LED', 'variable resistor', 'fuse'],
  'More circuit symbols: diode, LED, variable resistor, fuse');
D['p2-symbol-thermistor'] = () => chart('Thermistor symbol', ['resistor', 'thermistor'], 'The resistor symbol and the thermistor symbol side by side');
D['p2-symbol-ldr'] = () => chart('LDR symbol', ['resistor', 'LDR'], 'The resistor symbol and the LDR symbol side by side');

for (const [id, draw] of Object.entries(D)) {
  fs.writeFileSync(path.join(OUT, `${id}.svg`), draw());
  console.log(`diagrams/physics/${id}.svg`);
}
