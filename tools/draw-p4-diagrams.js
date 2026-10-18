#!/usr/bin/env node
/* Draws the P4 Atomic structure diagrams for the AI lessons (runbook section 3
 * step f2; brief docs/briefs/2026-10-18-first-time-learner.md step 4) as plain
 * SVG files in diagrams/physics/. Same style and helpers as
 * tools/draw-p1-p2-diagrams.js: 480 units wide, labels of 17 units or more.
 * Nothing here runs in the browser, and no image comes from the internet.
 *
 *   node tools/draw-p4-diagrams.js            # writes every diagram
 *   node tools/draw-p4-diagrams.js p4-fis     # only ids starting with p4-fis
 *
 * Then run: node tools/check-diagrams.js physics
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'diagrams', 'physics');
const FONT = `Inter, 'Helvetica Neue', Arial, sans-serif`;
const C = {
  bg: '#0f0e0c', text: '#f5f0e8', muted: 'rgba(245,240,232,0.68)', wire: 'rgba(245,240,232,0.85)',
  amber: '#e8a040', teal: '#4ecfaa', red: '#e8705a', blue: '#5b9cf0', grey: '#9a948a',
  grid: 'rgba(245,240,232,0.12)',
};

// ── helpers (as in draw-p1-p2-diagrams.js) ──────────────────────
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function text(x, y, s, o = {}) {
  return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${o.size || 20}"${o.weight ? ` font-weight="${o.weight}"` : ''}${o.anchor ? ` text-anchor="${o.anchor}"` : ''} fill="${o.fill || C.text}">${esc(s)}</text>`;
}
const line = (x1, y1, x2, y2, o = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.stroke || C.wire}" stroke-width="${o.w || 3}"${o.marker ? ` marker-end="url(#${o.marker})"` : ''}${o.dash ? ` stroke-dasharray="${o.dash}"` : ''} stroke-linecap="round"/>`;
const pathD = (d, o = {}) =>
  `<path d="${d}" fill="${o.fill || 'none'}" stroke="${o.stroke || C.wire}" stroke-width="${o.w || 3}"${o.marker ? ` marker-end="url(#${o.marker})"` : ''}${o.dash ? ` stroke-dasharray="${o.dash}"` : ''} stroke-linejoin="round" stroke-linecap="round"/>`;
const rect = (x, y, w, h, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}"${o.rx ? ` rx="${o.rx}"` : ''} fill="${o.fill || C.bg}" stroke="${o.stroke || 'none'}" stroke-width="${o.w || 3}"/>`;
const circle = (cx, cy, r, o = {}) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${o.fill || C.bg}" stroke="${o.stroke || C.amber}" stroke-width="${o.w || 3}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;

function markers() {
  const m = (id, col, size = 7) => `<marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="${size}" markerHeight="${size}" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="${col}"/></marker>`;
  return `<defs>${m('aw', C.wire, 6)}${m('aa', C.amber)}${m('at', C.teal)}${m('ar', C.red)}${m('am', C.muted, 6)}</defs>`;
}
function svg(w, h, body, title) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="100%" role="img" aria-label="${esc(title)}">\n${markers()}\n${rect(0, 0, w, h, { fill: C.bg })}\n${body.filter(Boolean).join('\n')}\n</svg>\n`;
}
// a nucleus drawn as a filled circle with a label inside
const nucleus = (cx, cy, r, label, col = C.amber) =>
  circle(cx, cy, r, { fill: 'rgba(232,160,64,0.22)', stroke: col }) + (label ? text(cx, cy + 6, label, { size: 17, anchor: 'middle', weight: 600 }) : '');
const neutron = (cx, cy) => circle(cx, cy, 7, { fill: C.grey, stroke: C.grey, w: 1 });
const legendRow = (y, col, marker, s) => line(24, y - 6, 64, y - 6, { stroke: col, w: 3, marker }) + text(76, y, s, { size: 17 });

const D = {};

// ── p4-nuclear-model ────────────────────────────────────────────
D['p4-alpha-scattering'] = () => {
  const nx = 250, ny = 190;
  return svg(480, 440, [
    text(20, 36, 'Alpha particle scattering', { size: 22, weight: 600 }),
    // most pass straight through
    ...[80, 120, 260, 300].map(y => line(30, y, 450, y, { stroke: C.teal, w: 2.5, marker: 'at' })),
    // a few deflected through large angles (pass close to the nucleus)
    pathD(`M30 165 L${nx - 60} 165 Q${nx - 5} 163 ${nx + 30} 128 L${nx + 120} 62`, { stroke: C.amber, w: 2.5, marker: 'aa' }),
    pathD(`M30 218 L${nx - 60} 218 Q${nx - 5} 220 ${nx + 30} 255 L${nx + 120} 322`, { stroke: C.amber, w: 2.5, marker: 'aa' }),
    // very few bounce back (head on)
    pathD(`M30 190 L${nx - 34} 190 Q${nx - 14} 192 ${nx - 34} 198 L60 238`, { stroke: C.red, w: 2.5, marker: 'ar' }),
    circle(nx, ny, 9, { fill: C.amber, stroke: C.amber, w: 1 }),
    text(nx + 18, ny + 6, 'nucleus (+)', { size: 17, fill: C.amber }),
    legendRow(360, C.teal, 'at', 'most pass straight through'),
    legendRow(386, C.amber, 'aa', 'a few are deflected through large angles'),
    legendRow(412, C.red, 'ar', 'very few bounce back'),
    text(20, 434, 'Not to scale: the nucleus is far smaller than this.', { size: 17, fill: C.muted }),
  ], 'Alpha particles fired at a nucleus: most pass straight through, a few are deflected through large angles, very few bounce back');
};

D['p4-atom-structure'] = () => {
  const cx = 160, cy = 200;
  // centre + six around it at 19 units: 3 protons, 4 neutrons
  const ring = ['n', 'p', 'n', 'p', 'n', 'n'].map((k, i) => [19 * Math.cos(i * Math.PI / 3), 19 * Math.sin(i * Math.PI / 3), k]);
  const nuc = [[0, 0, 'p'], ...ring];
  const parts = nuc.map(([dx, dy, k]) => circle(cx + dx, cy + dy, 9, k === 'p'
    ? { fill: C.red, stroke: C.red, w: 1 } : { fill: C.grey, stroke: C.grey, w: 1 }));
  const elec = [[cx + 95, cy - 50], [cx - 105, cy + 30], [cx + 30, cy + 125]];
  return svg(480, 440, [
    text(20, 36, 'Inside an atom: lithium-7', { size: 22, weight: 600 }),
    circle(cx, cy, 140, { fill: 'rgba(245,240,232,0.03)', stroke: C.grid, w: 2, dash: '6 6' }),
    ...parts,
    ...elec.map(([x, y]) => circle(x, y, 8, { fill: C.blue, stroke: C.blue, w: 1 })),
    circle(330, 92, 9, { fill: C.red, stroke: C.red, w: 1 }), text(348, 98, 'proton (+)', { size: 17 }),
    circle(330, 124, 9, { fill: C.grey, stroke: C.grey, w: 1 }), text(348, 130, 'neutron (0)', { size: 17 }),
    circle(330, 156, 8, { fill: C.blue, stroke: C.blue, w: 1 }), text(348, 162, 'electron (−)', { size: 17 }),
    line(cx + 30, cy - 4, 318, 214, { stroke: C.muted, w: 1.5 }), text(326, 212, 'nucleus', { size: 17, fill: C.amber }),
    text(326, 236, '3 protons,', { size: 17, fill: C.muted }), text(326, 258, '4 neutrons', { size: 17, fill: C.muted }),
    text(20, 372, '⁷₃Li: mass number 7 (protons + neutrons),', { size: 17 }),
    text(20, 396, 'atomic number 3 (protons). 3 electrons.', { size: 17 }),
    text(20, 426, 'Not to scale: the nucleus is far smaller.', { size: 17, fill: C.muted }),
  ], 'A lithium-7 atom: a nucleus of 3 protons and 4 neutrons, with 3 electrons around it');
};

D['p4-energy-levels'] = () => {
  const cx = 240, cy = 190, R = [48, 92, 136];
  const at = (r, deg) => [cx + r * Math.cos(deg * Math.PI / 180), cy - r * Math.sin(deg * Math.PI / 180)];
  const [a1, a2] = [at(R[0] + 9, 35), at(R[1] - 11, 35)];
  const [e1, e2] = [at(R[2] - 9, 215), at(R[1] + 11, 215)];
  const f = n => n.toFixed(1);
  return svg(480, 440, [
    text(20, 36, 'Energy levels', { size: 22, weight: 600 }),
    ...R.map(r => circle(cx, cy, r, { fill: 'none', stroke: C.muted, w: 1.5, dash: '5 6' })),
    circle(cx, cy, 10, { fill: C.amber, stroke: C.amber, w: 1 }),
    circle(...at(R[0], 35), 7, { fill: C.blue, stroke: C.blue, w: 1 }),
    circle(...at(R[2], 215), 7, { fill: C.blue, stroke: C.blue, w: 1 }),
    line(f(a1[0]), f(a1[1]), f(a2[0]), f(a2[1]), { stroke: C.amber, w: 3, marker: 'aa' }),
    line(f(e1[0]), f(e1[1]), f(e2[0]), f(e2[1]), { stroke: C.teal, w: 3, marker: 'at' }),
    text(cx + 18, cy + 6, 'nucleus', { size: 17, fill: C.amber }),
    legendRow(360, C.amber, 'aa', 'absorbs radiation: moves up a level, further out'),
    legendRow(388, C.teal, 'at', 'emits radiation: moves down a level, closer in'),
    text(20, 424, 'Further from the nucleus = higher energy level.', { size: 17, fill: C.muted }),
  ], 'Energy levels at set distances from the nucleus: absorbing radiation moves an electron out to a higher level, emitting radiation moves it in to a lower level');
};

// ── p4-radioactivity ────────────────────────────────────────────
D['p4-penetration'] = () => {
  const ys = [130, 220, 310], bx = [170, 290, 400];
  return svg(480, 440, [
    text(20, 36, 'What stops each radiation', { size: 22, weight: 600 }),
    rect(24, 100, 40, 240, { rx: 6, fill: 'rgba(245,240,232,0.05)', stroke: C.muted, w: 2 }),
    text(44, 362, 'source', { size: 17, anchor: 'middle', fill: C.muted }),
    rect(bx[0] - 3, 92, 6, 256, { fill: C.text, stroke: 'none' }),
    rect(bx[1] - 8, 92, 16, 256, { fill: '#b8b8c0', stroke: 'none' }),
    rect(bx[2] - 18, 92, 36, 256, { fill: '#6a6e78', stroke: 'none' }),
    text(bx[0], 70, 'paper', { size: 17, anchor: 'middle' }),
    text(bx[1], 62, 'aluminium', { size: 17, anchor: 'middle' }),
    text(bx[1], 84, '(a few mm)', { size: 17, anchor: 'middle', fill: C.muted }),
    text(bx[2] + 8, 62, 'lead', { size: 17, anchor: 'middle' }),
    text(bx[2] + 8, 84, '(thick)', { size: 17, anchor: 'middle', fill: C.muted }),
    line(70, ys[0], bx[0] - 6, ys[0], { stroke: C.red, w: 4, marker: 'ar' }), text(84, ys[0] - 12, 'alpha (α)', { size: 18, fill: C.red }),
    line(70, ys[1], bx[1] - 11, ys[1], { stroke: C.amber, w: 4, marker: 'aa' }), text(84, ys[1] - 12, 'beta (β)', { size: 18, fill: C.amber }),
    line(70, ys[2], bx[2] - 20, ys[2], { stroke: C.teal, w: 4 }),
    line(bx[2] + 20, ys[2], 466, ys[2], { stroke: C.teal, w: 2, dash: '6 6', marker: 'at' }),
    text(84, ys[2] - 12, 'gamma (γ)', { size: 18, fill: C.teal }),
    text(20, 396, 'Gamma is only reduced by thick lead,', { size: 17 }),
    text(20, 420, 'not stopped completely.', { size: 17 }),
  ], 'Alpha is stopped by paper, beta by a few millimetres of aluminium, and gamma is only reduced by thick lead');
};

// ── p4-half-life ────────────────────────────────────────────────
D['p4-decay-graph'] = () => {
  const ox = 80, oy = 320, W = 360, H = 240;           // 8 hours across, 800 Bq up
  const X = t => ox + t * W / 8, Y = a => oy - a * H / 800;
  const pts = Array.from({ length: 81 }, (_, i) => { const t = i / 10; return [X(t), Y(800 * Math.pow(0.5, t / 2))]; });
  const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
  const out = [text(20, 36, 'A decay graph', { size: 22, weight: 600 })];
  [200, 400, 600, 800].forEach(a => { out.push(line(ox, Y(a), ox + W, Y(a), { stroke: C.grid, w: 1 })); out.push(text(ox - 8, Y(a) + 6, String(a), { size: 17, anchor: 'end', fill: C.muted })); });
  [2, 4, 6, 8].forEach(t => out.push(text(X(t), oy + 24, String(t), { size: 17, anchor: 'middle', fill: C.muted })));
  out.push(text(ox - 8, oy + 24, '0', { size: 17, anchor: 'end', fill: C.muted }));
  out.push(line(ox, oy, ox + W + 10, oy, { stroke: C.muted, w: 2, marker: 'am' }));
  out.push(line(ox, oy, ox, oy - H - 14, { stroke: C.muted, w: 2, marker: 'am' }));
  out.push(text(ox + 8, 62, 'activity (Bq)', { size: 18, fill: C.muted }));
  out.push(text(ox + W + 10, oy + 48, 'time (hours)', { size: 18, anchor: 'end', fill: C.muted }));
  out.push(pathD(d, { stroke: C.teal, w: 4 }));
  // half-life read-offs: 800 → 400 at 2 h, 400 → 200 at 4 h
  out.push(line(ox, Y(400), X(2), Y(400), { stroke: C.amber, w: 2, dash: '6 5' }), line(X(2), Y(400), X(2), oy, { stroke: C.amber, w: 2, dash: '6 5' }));
  out.push(line(ox, Y(200), X(4), Y(200), { stroke: C.amber, w: 2, dash: '6 5' }), line(X(4), Y(200), X(4), oy, { stroke: C.amber, w: 2, dash: '6 5' }));
  out.push(text(20, 398, '800 Bq → 400 Bq takes 2 hours.', { size: 17 }));
  out.push(text(20, 422, '400 Bq → 200 Bq also takes 2 hours: half-life = 2 hours.', { size: 17 }));
  return svg(480, 440, out, 'A decay graph: activity halves every 2 hours, from 800 Bq to 400 Bq to 200 Bq, so the half-life is 2 hours');
};

// ── p4-nuclear-fission ──────────────────────────────────────────
D['p4-fission'] = () => svg(480, 440, [
  text(20, 36, 'Nuclear fission', { size: 22, weight: 600 }),
  neutron(40, 200), line(50, 200, 112, 200, { stroke: C.grey, w: 3, marker: 'aw' }),
  text(20, 180, 'neutron', { size: 17, fill: C.muted }),
  nucleus(165, 200, 46, 'U-235'),
  text(165, 272, 'large, unstable', { size: 17, anchor: 'middle', fill: C.muted }),
  text(165, 294, 'nucleus', { size: 17, anchor: 'middle', fill: C.muted }),
  line(200, 168, 330, 112, { stroke: C.wire, w: 3, marker: 'aw' }),
  line(200, 232, 330, 288, { stroke: C.wire, w: 3, marker: 'aw' }),
  nucleus(365, 100, 30, ''), nucleus(365, 300, 30, ''),
  text(365, 56, 'smaller nucleus', { size: 17, anchor: 'middle' }),
  text(365, 354, 'smaller nucleus', { size: 17, anchor: 'middle' }),
  line(214, 192, 300, 174, { stroke: C.grey, w: 2.5, marker: 'aw' }), neutron(310, 172),
  line(214, 200, 306, 200, { stroke: C.grey, w: 2.5, marker: 'aw' }), neutron(316, 200),
  line(214, 208, 300, 226, { stroke: C.grey, w: 2.5, marker: 'aw' }), neutron(310, 228),
  text(330, 206, '2 or 3 neutrons', { size: 17 }),
  text(20, 396, 'Also given out: gamma rays and energy.', { size: 17 }),
  text(20, 420, 'The two smaller nuclei are roughly equal in size.', { size: 17, fill: C.muted }),
], 'Nuclear fission: a uranium-235 nucleus absorbs a neutron and splits into two smaller nuclei, giving out 2 or 3 neutrons, gamma rays and energy');

D['p4-chain-reaction'] = () => {
  const out = [text(20, 36, 'A chain reaction', { size: 22, weight: 600 })];
  out.push(neutron(30, 200), line(38, 200, 66, 200, { stroke: C.grey, w: 2.5, marker: 'aw' }));
  out.push(nucleus(92, 200, 22, ''));
  const gen2 = [100, 200, 300];
  gen2.forEach(y => {
    out.push(line(114, 200 + (y - 200) * 0.12, 196, y, { stroke: C.grey, w: 2.5, marker: 'aw' }));
    out.push(nucleus(222, y, 22, ''));
    [-26, 0, 26].forEach(dy => {
      out.push(line(246, y + dy * 0.4, 318, y + dy, { stroke: C.grey, w: 2, marker: 'aw' }));
      out.push(neutron(326, y + dy));
    });
  });
  out.push(text(344, 106, 'each neutron', { size: 17 }), text(344, 128, 'can split', { size: 17 }), text(344, 150, 'another', { size: 17 }), text(344, 172, 'nucleus', { size: 17 }));
  out.push(text(92, 246, '1 fission', { size: 17, anchor: 'middle', fill: C.muted }));
  out.push(text(222, 346, '3 fissions', { size: 17, anchor: 'middle', fill: C.muted }));
  out.push(text(20, 384, 'Uncontrolled: the number grows fast (a weapon).', { size: 17 }));
  out.push(text(20, 408, 'Controlled: on average one neutron from each', { size: 17 }));
  out.push(text(20, 430, 'fission causes one more fission (a reactor).', { size: 17 }));
  return svg(480, 440, out, 'A chain reaction: one fission releases neutrons that cause three more fissions, which release more neutrons');
};

D['p4-fusion'] = () => svg(480, 340, [
  text(20, 36, 'Nuclear fusion', { size: 22, weight: 600 }),
  nucleus(70, 110, 22, ''), nucleus(70, 230, 22, ''),
  text(70, 72, 'light nucleus', { size: 17, anchor: 'middle' }),
  text(70, 276, 'light nucleus', { size: 17, anchor: 'middle' }),
  line(94, 122, 200, 162, { stroke: C.wire, w: 3, marker: 'aw' }),
  line(94, 218, 200, 178, { stroke: C.wire, w: 3, marker: 'aw' }),
  nucleus(240, 170, 34, ''),
  text(240, 230, 'heavier nucleus', { size: 17, anchor: 'middle' }),
  line(282, 170, 380, 170, { stroke: C.amber, w: 3, marker: 'aa' }),
  text(392, 164, 'energy', { size: 18, fill: C.amber }),
  text(392, 188, 'released', { size: 17, fill: C.amber }),
  text(20, 316, 'Some of the mass may become the energy of radiation.', { size: 17, fill: C.muted }),
], 'Nuclear fusion: two light nuclei join to form a heavier nucleus and energy is released');

// ── main ────────────────────────────────────────────────────────
const only = process.argv.slice(2);
for (const [id, draw] of Object.entries(D)) {
  if (only.length && !only.some(p => id.startsWith(p))) continue;
  fs.writeFileSync(path.join(OUT, `${id}.svg`), draw());
  console.log(`diagrams/physics/${id}.svg`);
}
