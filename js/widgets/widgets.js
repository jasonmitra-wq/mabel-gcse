/* ============================================================
   WIDGETS.JS — the hands-on widgets (brief v3.1, step 1e). Browser only.
   Every number comes from js/widgets/widget-models.js (WidgetModels),
   which tools/check-lesson-v3.js tests against the lesson's equations.

   WidgetView.mount(element, id, options)
     circuit   — cells, a supply slider, a lamp, an ammeter, a resistor
                 that can go in the loop (options.resistor)
     iv-graph  — an I-V graph with a point she drags (options.components,
                 options.negative: values below zero only where the lesson
                 teaches turning a component round)
     sensor    — a thermistor or LDR in a 6 V circuit, with a slider
   ============================================================ */
const WidgetView = (() => {
  const M = WidgetModels;
  const css = `
    .wdg { background:var(--s2); border:1px solid var(--border2); border-radius:12px; padding:0.8rem; margin:0.5rem 0; max-width:100%; }
    .wdg svg { display:block; width:100%; height:auto; touch-action:none; }
    .wdg-row { display:flex; flex-wrap:wrap; gap:0.45rem; align-items:center; margin-top:0.55rem; }
    .wdg-row .btn { font-size:0.85rem; padding:0.4rem 0.75rem; }
    .wdg-row .btn.on { border-color:var(--amber); color:var(--amber); }
    .wdg-read { display:flex; flex-wrap:wrap; gap:0.4rem 1.1rem; margin-top:0.55rem; font-size:0.95rem; }
    .wdg-read b { color:var(--amber); font-variant-numeric:tabular-nums; }
    .wdg label { font-size:0.85rem; color:var(--muted); display:block; margin-top:0.5rem; }
    .wdg input[type=range] { width:100%; accent-color:var(--amber); }`;
  function _style() {
    if (document.getElementById('wdgStyles')) return;
    const el = document.createElement('style');
    el.id = 'wdgStyles';
    el.textContent = css;
    document.head.appendChild(el);
  }
  const f2 = x => (Math.round(x * 100) / 100).toFixed(2);
  const fmtR = R => (!isFinite(R) ? 'very high' : R >= 1000 ? `${Math.round(R).toLocaleString('en-GB')} Ω` : `${Math.round(R * 10) / 10} Ω`);

  // ── Circuit ────────────────────────────────────────────────
  function circuit(el, opts) {
    let cells = 1, volts = M.CELL_V, supply = false, resistor = false;
    el.innerHTML = `<svg viewBox="0 0 360 200" aria-label="A circuit with cells, a lamp and an ammeter"></svg>
      <div class="wdg-row">
        <button class="btn" data-a="add">Add a cell</button>
        <button class="btn" data-a="remove">Take a cell away</button>
        ${opts.resistor ? `<button class="btn" data-a="res">Put the resistor in</button>` : ''}
      </div>
      <label>Or slide the potential difference of a power supply: <span data-v></span></label>
      <input type="range" min="0" max="6" step="0.5" value="${volts}">
      <div class="wdg-read"></div>`;
    const svg = el.querySelector('svg'), range = el.querySelector('input'), read = el.querySelector('.wdg-read');
    function draw() {
      const c = M.circuit({ volts, resistor });
      const glow = c.brightness;
      const src = supply
        ? `<rect x="150" y="18" width="60" height="28" rx="5" fill="#0f0e0c" stroke="#e8a040" stroke-width="3"/><text x="180" y="38" text-anchor="middle" font-size="14" fill="#e8a040">${volts} V</text>`
        : Array.from({ length: cells }, (_, k) => { const x = 180 - (cells - 1) * 14 + k * 28; return `<rect x="${x - 9}" y="24" width="18" height="16" fill="#0f0e0c"/><line x1="${x - 7}" y1="14" x2="${x - 7}" y2="50" stroke="#e8a040" stroke-width="3"/><line x1="${x + 7}" y1="22" x2="${x + 7}" y2="42" stroke="#e8a040" stroke-width="7"/>`; }).join('');
      svg.innerHTML = `<rect width="360" height="200" fill="#0f0e0c" rx="8"/>
        <path d="M60 32 H300 V168 H60 Z" fill="none" stroke="rgba(245,240,232,0.85)" stroke-width="3"/>
        ${src}
        <circle cx="300" cy="100" r="34" fill="rgba(232,208,64,${(0.85 * glow).toFixed(2)})"/>
        <circle cx="300" cy="100" r="19" fill="#0f0e0c" stroke="#e8a040" stroke-width="3"/>
        <line x1="287" y1="87" x2="313" y2="113" stroke="#e8a040" stroke-width="3"/><line x1="287" y1="113" x2="313" y2="87" stroke="#e8a040" stroke-width="3"/>
        <text x="300" y="150" text-anchor="middle" font-size="14" fill="#f5f0e8">lamp</text>
        <circle cx="60" cy="100" r="19" fill="#0f0e0c" stroke="#e8a040" stroke-width="3"/><text x="60" y="106" text-anchor="middle" font-size="18" font-weight="600" fill="#e8a040">A</text>
        <text x="60" y="140" text-anchor="middle" font-size="14" fill="#f5f0e8">${f2(c.current)} A</text>
        ${resistor ? `<rect x="152" y="158" width="56" height="20" fill="#0f0e0c" stroke="#e8a040" stroke-width="3"/><text x="180" y="196" text-anchor="middle" font-size="13" fill="#f5f0e8">resistor</text>` : ''}`;
      read.innerHTML = `<span>Potential difference: <b>${volts} V</b></span><span>Ammeter: <b>${f2(c.current)} A</b></span>`;
      el.querySelector('[data-v]').textContent = `${volts} V`;
      range.value = volts;
      const rb = el.querySelector('[data-a=res]');
      if (rb) { rb.textContent = resistor ? 'Take the resistor out' : 'Put the resistor in'; rb.classList.toggle('on', resistor); }
    }
    el.querySelector('[data-a=add]').onclick = () => { if (supply) { supply = false; cells = Math.max(1, Math.round(volts / M.CELL_V)); } cells = Math.min(4, cells + 1); volts = cells * M.CELL_V; draw(); };
    el.querySelector('[data-a=remove]').onclick = () => { if (supply) { supply = false; cells = Math.max(1, Math.round(volts / M.CELL_V)); } cells = Math.max(1, cells - 1); volts = cells * M.CELL_V; draw(); };
    const rb = el.querySelector('[data-a=res]');
    if (rb) rb.onclick = () => { resistor = !resistor; draw(); };
    range.oninput = () => { supply = true; volts = Number(range.value); draw(); };
    draw();
  }

  // ── I-V graph ──────────────────────────────────────────────
  function ivGraph(el, opts) {
    const comps = (opts.components || ['resistor']).filter(k => M.IV[k]);
    const neg = !!opts.negative;
    let comp = comps[0], V = 3;
    el.innerHTML = `<div class="wdg-row" ${comps.length < 2 ? 'style="display:none"' : ''}>${comps.map(k => `<button class="btn" data-c="${k}">${M.IV[k].label}</button>`).join('')}</div>
      <svg viewBox="0 0 360 260" aria-label="An I-V graph with a point to drag"></svg>
      <label>Drag the point, or slide: potential difference <span data-v></span></label>
      <input type="range" step="0.05">
      <div class="wdg-read"></div>`;
    const svg = el.querySelector('svg'), range = el.querySelector('input'), read = el.querySelector('.wdg-read');
    const box = { x0: 30, x1: 340, y0: 20, y1: 240 };
    const rangeOf = () => { const c = M.IV[comp]; return { min: neg ? c.min : 0, max: c.max }; };
    function scales() {
      const { min, max } = rangeOf();
      const Imax = Math.max(...[min, max].map(v => Math.abs(M.iv(comp, v).current)), 0.05) * 1.1;
      const Imin = neg ? -Imax : 0;
      const ox = box.x0 + (box.x1 - box.x0) * (0 - min) / (max - min);
      const oy = box.y1 - (box.y1 - box.y0) * (0 - Imin) / (Imax - Imin);
      return { min, max, Imin, Imax, ox, oy,
        X: v => box.x0 + (box.x1 - box.x0) * (v - min) / (max - min),
        Y: i => box.y1 - (box.y1 - box.y0) * (i - Imin) / (Imax - Imin),
        V: x => min + (max - min) * (x - box.x0) / (box.x1 - box.x0) };
    }
    function draw() {
      const s = scales();
      const pts = Array.from({ length: 121 }, (_, k) => s.min + (s.max - s.min) * k / 120).map(v => `${s.X(v).toFixed(1)},${s.Y(M.iv(comp, v).current).toFixed(1)}`).join(' ');
      const r = M.iv(comp, V);
      svg.innerHTML = `<rect width="360" height="260" fill="#0f0e0c" rx="8"/>
        <line x1="${box.x0}" y1="${s.oy}" x2="${box.x1}" y2="${s.oy}" stroke="rgba(245,240,232,0.6)" stroke-width="2"/>
        <line x1="${s.ox}" y1="${box.y1}" x2="${s.ox}" y2="${box.y0}" stroke="rgba(245,240,232,0.6)" stroke-width="2"/>
        <text x="${s.ox + 6}" y="${box.y0 + 12}" font-size="13" fill="rgba(245,240,232,0.75)">current (A)</text>
        <text x="${box.x1}" y="${s.oy - 8}" text-anchor="end" font-size="13" fill="rgba(245,240,232,0.75)">potential difference (V)</text>
        <text x="${s.ox - 5}" y="${s.oy + 15}" text-anchor="end" font-size="12" fill="rgba(245,240,232,0.75)">0</text>
        <polyline points="${pts}" fill="none" stroke="#4ecfaa" stroke-width="3"/>
        <line x1="${s.X(V)}" y1="${s.oy}" x2="${s.X(V)}" y2="${s.Y(r.current)}" stroke="#e8a040" stroke-dasharray="4 4"/>
        <line x1="${s.ox}" y1="${s.Y(r.current)}" x2="${s.X(V)}" y2="${s.Y(r.current)}" stroke="#e8a040" stroke-dasharray="4 4"/>
        <circle data-pt cx="${s.X(V)}" cy="${s.Y(r.current)}" r="10" fill="#e8a040" stroke="#0f0e0c" stroke-width="2" style="cursor:grab"/>`;
      range.min = s.min; range.max = s.max; range.value = V;
      el.querySelector('[data-v]').textContent = `${f2(V)} V`;
      read.innerHTML = `<span>Potential difference: <b>${f2(V)} V</b></span><span>Current: <b>${f2(r.current)} A</b></span><span>Resistance (V ÷ I): <b>${r.current === 0 ? (V === 0 ? '—' : 'very high') : fmtR(r.resistance)}</b></span>`;
      el.querySelectorAll('[data-c]').forEach(b => b.classList.toggle('on', b.dataset.c === comp));
    }
    let dragging = false;
    const toV = e => {
      const rect = svg.getBoundingClientRect();
      const x = (e.clientX - rect.left) * 360 / rect.width;
      const s = scales();
      V = Math.max(s.min, Math.min(s.max, Math.round(s.V(x) * 20) / 20));
      draw();
    };
    svg.addEventListener('pointerdown', e => { dragging = true; svg.setPointerCapture(e.pointerId); toV(e); });
    svg.addEventListener('pointermove', e => { if (dragging) toV(e); });
    svg.addEventListener('pointerup', () => { dragging = false; });
    range.oninput = () => { V = Number(range.value); draw(); };
    el.querySelectorAll('[data-c]').forEach(b => b.onclick = () => { comp = b.dataset.c; const s = rangeOf(); V = Math.min(s.max, Math.max(s.min, V)); draw(); });
    draw();
  }

  // ── Sensor ─────────────────────────────────────────────────
  function sensor(el, opts) {
    const kinds = (opts.sensors || ['thermistor', 'ldr']);
    let kind = kinds[0], x = 20;
    const spec = { thermistor: { label: 'Thermistor', what: 'Temperature', unit: '°C', min: 0, max: 100, step: 1, start: 20 },
                   ldr: { label: 'LDR', what: 'Light intensity', unit: 'lux', min: 0, max: 1000, step: 10, start: 100 } };
    el.innerHTML = `<div class="wdg-row">${kinds.map(k => `<button class="btn" data-k="${k}">${spec[k].label}</button>`).join('')}</div>
      <label><span data-w></span>: <span data-v></span></label>
      <input type="range">
      <div class="wdg-read"></div>`;
    const range = el.querySelector('input'), read = el.querySelector('.wdg-read');
    function draw() {
      const sp = spec[kind];
      range.min = sp.min; range.max = sp.max; range.step = sp.step; range.value = x;
      const r = M.sensor(kind, x);
      el.querySelector('[data-w]').textContent = sp.what;
      el.querySelector('[data-v]').textContent = `${x} ${sp.unit}`;
      read.innerHTML = `<span>Potential difference: <b>${M.SENSOR_V} V</b></span><span>Resistance: <b>${fmtR(r.resistance)}</b></span><span>Current: <b>${(r.current * 1000).toFixed(1)} mA</b></span>`;
      el.querySelectorAll('[data-k]').forEach(b => b.classList.toggle('on', b.dataset.k === kind));
    }
    range.oninput = () => { x = Number(range.value); draw(); };
    el.querySelectorAll('[data-k]').forEach(b => b.onclick = () => { kind = b.dataset.k; x = spec[kind].start; draw(); });
    x = spec[kind].start;
    draw();
  }

  const KINDS = { circuit, 'iv-graph': ivGraph, sensor };
  function mount(el, id, options) {
    _style();
    el.classList.add('wdg');
    if (!KINDS[id]) { el.textContent = ''; return false; }
    KINDS[id](el, options || {});
    return true;
  }
  return { mount };
})();
