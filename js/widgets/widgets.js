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
  // Options (each adds one control): resistor (the 10 Ω resistor can go in),
  // variable (a variable resistor with a slider), side (the resistor can be
  // moved to the other side of the lamp), twoAmmeters (one before and one
  // after the lamp), switch (a switch to open), voltmeter (across the lamp),
  // energy (run the circuit for a time: charge out, charge back, energy),
  // redraw (the same loop drawn another way).
  const WIRE = 'rgba(245,240,232,0.85)', AMB = '#e8a040', TXT = '#f5f0e8', BG = '#0f0e0c';
  function _meter(x, y, letter, sub) {
    return `<circle cx="${x}" cy="${y}" r="17" fill="${BG}" stroke="${AMB}" stroke-width="3"/><text x="${x}" y="${y + 6}" text-anchor="middle" font-size="17" font-weight="600" fill="${AMB}">${letter}${sub ? `<tspan font-size="11" dy="4">${sub}</tspan>` : ''}</text>`;
  }
  function circuit(el, opts) {
    let cells = 1, volts = M.CELL_V, supply = false;
    let resistor = opts.variable ? 10 : false, side = 'after', open = false, layout = 0, seconds = 0;
    const has = k => !!opts[k];
    // Cover mode (AI lesson, COVER_FIX g): only the controls its predictions need (opts.controls), no slider unless
    // listed, so the supply is always drawn with the cell symbol, and the potential difference is shown only where
    // it is taught (cells to add, a slider or a voltmeter).
    const cover = !!opts.cover, ctl = Array.isArray(opts.controls) ? opts.controls : [];
    const may = k => !cover || ctl.includes(k);
    // (with a voltmeter, only its reading: the cell's beside it puzzled the reviewer, 1.5 V and 0.56 V)
    // (opts.hidePd: not before potential difference is taught; the scripted lesson's first cell prediction)
    const pdShown = !cover || (!has('voltmeter') && !has('hidePd') && (ctl.includes('add') || ctl.includes('slider')));
    el.innerHTML = `<svg viewBox="0 0 360 210" aria-label="A circuit with cells, a lamp and an ammeter"></svg>
      <div class="wdg-row">
        ${may('add') ? `<button class="btn" data-a="add">Add a cell</button>` : ''}
        ${may('remove') ? `<button class="btn" data-a="remove">Take a cell away</button>` : ''}
        ${has('resistor') && !has('variable') && may('res') ? `<button class="btn" data-a="res">Put the resistor in</button>` : ''}
        ${has('side') && may('side') ? `<button class="btn" data-a="side">Move the resistor</button>` : ''}
        ${has('switch') && may('sw') ? `<button class="btn" data-a="sw">Open the switch</button>` : ''}
        ${has('redraw') && may('redraw') ? `<button class="btn" data-a="redraw">Draw it another way</button>` : ''}
        ${has('energy') && may('run') ? `<button class="btn" data-a="run">Run for 10 s</button><button class="btn" data-a="reset">Start again</button>` : ''}
      </div>
      ${has('variable') && may('variable') ? `<label>Variable resistor: <span data-r></span></label><input type="range" data-in="r" min="0" max="30" step="2" value="10">` : ''}
      ${has('energy') || has('redraw') || !may('slider') ? '' : `<label>Or slide the potential difference: <span data-v></span></label><input type="range" data-in="v" min="0" max="6" step="0.5" value="${volts}">`}
      <div class="wdg-read"></div>`;
    const svg = el.querySelector('svg'), range = el.querySelector('[data-in=v]'), rRange = el.querySelector('[data-in=r]'), read = el.querySelector('.wdg-read');
    function state() { return { cells, volts, resistor, side, open, layout, seconds }; }
    function draw() {
      const c = M.circuit({ volts, resistor, open });
      const inLoop = resistor !== false;
      // Two layouts of the same loop (redraw): cells top, lamp right; or cells bottom, lamp left.
      const P = layout === 0
        ? { cellY: 32, lamp: [300, 105], a1: [60, 105], a2: [235, 178], sw: [120, 178], resAfter: [178, 178], resBefore: [250, 32], lampLabel: [300, 157] }
        : { cellY: 178, lamp: [60, 105], a1: [300, 105], a2: [125, 32], sw: [240, 32], resAfter: [182, 32], resBefore: [110, 178], lampLabel: [60, 157] };
      const glow = c.brightness;
      const cy = P.cellY;
      const src = supply
        ? `<rect x="150" y="${cy - 14}" width="60" height="28" rx="5" fill="${BG}" stroke="${AMB}" stroke-width="3"/><text x="180" y="${cy + 6}" text-anchor="middle" font-size="14" fill="${AMB}">${volts} V</text>`
        : Array.from({ length: cells }, (_, k) => { const x = 180 - (cells - 1) * 14 + k * 28; return `<rect x="${x - 9}" y="${cy - 8}" width="18" height="16" fill="${BG}"/><line x1="${x - 7}" y1="${cy - 18}" x2="${x - 7}" y2="${cy + 18}" stroke="${AMB}" stroke-width="3"/><line x1="${x + 7}" y1="${cy - 10}" x2="${x + 7}" y2="${cy + 10}" stroke="${AMB}" stroke-width="7"/>`; }).join('');
      const [lx, ly] = P.lamp;
      const lamp = `<circle cx="${lx}" cy="${ly}" r="32" fill="rgba(232,208,64,${(0.85 * glow).toFixed(2)})"/>
        <circle cx="${lx}" cy="${ly}" r="18" fill="${BG}" stroke="${AMB}" stroke-width="3"/>
        <line x1="${lx - 12}" y1="${ly - 12}" x2="${lx + 12}" y2="${ly + 12}" stroke="${AMB}" stroke-width="3"/><line x1="${lx - 12}" y1="${ly + 12}" x2="${lx + 12}" y2="${ly - 12}" stroke="${AMB}" stroke-width="3"/>
        <text x="${lx < 180 ? lx + 38 : lx - 38}" y="${ly + 5}" text-anchor="${lx < 180 ? 'start' : 'end'}" font-size="13" fill="${TXT}">lamp</text>`;
      const two = has('twoAmmeters');
      const [ax, ay] = P.a1, [bx, by] = P.a2;
      // Readings sit inside the loop, beside the meter, clear of the wires.
      // Cover mode, opts.hideMeters: no ammeter at all (a prediction made before the ammeter is taught); the wire runs on.
      const meters = cover && opts.hideMeters ? '' : _meter(ax, ay, 'A', two ? '1' : '') + `<text x="${ax < 180 ? ax + 24 : ax - 24}" y="${ay + 5}" text-anchor="${ax < 180 ? 'start' : 'end'}" font-size="13" fill="${TXT}">${f2(c.current)} A</text>` +
        (two ? _meter(bx, by, 'A', '2') + `<text x="${bx}" y="${by + (by > 100 ? -24 : 34)}" text-anchor="middle" font-size="13" fill="${TXT}">${f2(c.current)} A</text>` : '');
      const [rx, ry] = side === 'after' ? P.resAfter : P.resBefore;
      const res = inLoop ? `<rect x="${rx - 26}" y="${ry - 10}" width="52" height="20" fill="${BG}" stroke="${AMB}" stroke-width="3"/>${has('variable') ? `<line x1="${rx - 30}" y1="${ry + 16}" x2="${rx + 28}" y2="${ry - 16}" stroke="${AMB}" stroke-width="2.5"/><path d="M${rx + 28} ${ry - 16} l-9 1 l4 7 z" fill="${AMB}"/>` : ''}
        <text x="${rx}" y="${ry + (ry > 100 ? 30 : -16)}" text-anchor="middle" font-size="12" fill="${TXT}">${has('variable') ? `${c.resistorOhms} Ω` : 'resistor'}</text>` : '';
      const [sx, sy] = P.sw;
      const sw = has('switch') ? `<rect x="${sx - 22}" y="${sy - 6}" width="44" height="12" fill="${BG}"/><circle cx="${sx - 18}" cy="${sy}" r="3" fill="${AMB}"/><circle cx="${sx + 18}" cy="${sy}" r="3" fill="${AMB}"/>
        <line x1="${sx - 18}" y1="${sy}" x2="${sx + 16}" y2="${open ? sy - 16 : sy}" stroke="${AMB}" stroke-width="3"/><text x="${sx}" y="${sy + (sy > 100 ? 26 : -14)}" text-anchor="middle" font-size="12" fill="${TXT}">switch</text>` : '';
      const vm = has('voltmeter') ? (layout === 0
        ? `<path d="M300 71 H342 V88 M342 122 V139 H300" fill="none" stroke="${WIRE}" stroke-width="2.5"/>${_meter(342, 105, 'V')}`
        : `<path d="M60 71 H22 V88 M22 122 V139 H60" fill="none" stroke="${WIRE}" stroke-width="2.5"/>${_meter(22, 105, 'V')}`) : '';
      svg.innerHTML = `<rect width="360" height="210" fill="${BG}" rx="8"/>
        <path d="M60 32 H300 V178 H60 Z" fill="none" stroke="${WIRE}" stroke-width="3"/>
        ${src}${lamp}${meters}${res}${sw}${vm}`;
      const e = has('energy') ? M.energyRun({ volts, resistor, seconds }) : null;
      read.innerHTML = [
        pdShown ? `<span>Potential difference of the ${supply ? 'supply' : cells > 1 ? 'cells' : 'cell'}: <b>${volts} V</b></span>` : '',
        cover && opts.hideMeters ? (c.current > 0 ? '<span>The lamp is <b>on</b></span>' : '<span>The lamp is <b>off</b></span>') : two ? `<span>Ammeter 1: <b>${f2(c.current)} A</b></span><span>Ammeter 2: <b>${f2(c.current)} A</b></span>` : `<span>Ammeter: <b>${f2(c.current)} A</b></span>`,
        has('voltmeter') ? `<span>Voltmeter across the lamp: <b>${f2(c.lampVolts)} V</b></span>` : '',
        has('variable') ? `<span>Total resistance: <b>${fmtR(c.resistance)}</b></span>` : '',
        e ? `<span>Time: <b>${seconds} s</b></span><span>Charge that left the ${supply ? 'supply' : cells > 1 ? 'cells' : 'cell'}: <b>${f2(e.chargeOut)} C</b></span><span>Charge that came back to ${supply ? 'it' : cells > 1 ? 'them' : 'it'}: <b>${f2(e.chargeBack)} C</b></span><span>${cover ? 'Energy passed to the lamp' : 'Energy transferred (E = Q V)'}: <b>${f2(e.energy)} J</b></span>` : '',
      ].join('');
      const vEl = el.querySelector('[data-v]'); if (vEl) vEl.textContent = `${volts} V`;
      if (range) range.value = volts;
      const rEl = el.querySelector('[data-r]'); if (rEl) rEl.textContent = `${c.resistorOhms} Ω`;
      if (rRange) rRange.value = c.resistorOhms;
      const rb = el.querySelector('[data-a=res]');
      if (rb) { rb.textContent = inLoop ? 'Take the resistor out' : 'Put the resistor in'; rb.classList.toggle('on', inLoop); }
      const sb = el.querySelector('[data-a=sw]'); if (sb) { sb.textContent = open ? 'Close the switch' : 'Open the switch'; sb.classList.toggle('on', open); }
      const db = el.querySelector('[data-a=side]'); if (db) db.style.display = inLoop ? '' : 'none';
    }
    const cellsTo = n => { if (supply) { supply = false; cells = Math.max(1, Math.round(volts / M.CELL_V)); } cells = Math.min(4, Math.max(1, n)); volts = cells * M.CELL_V; seconds = 0; draw(); _log('cells', cells); };
    // Cover mode: the predict-first panel is told which control she used (opts.onUse).
    const used = a => { if (typeof opts.onUse === 'function') opts.onUse(a); };
    const on = (a, f) => { const b = el.querySelector(`[data-a=${a}]`); if (b) b.onclick = () => { f(); used(a); }; };
    on('add', () => cellsTo((supply ? Math.round(volts / M.CELL_V) : cells) + 1));
    on('remove', () => cellsTo((supply ? Math.round(volts / M.CELL_V) : cells) - 1));
    on('res', () => { resistor = resistor === false ? true : false; draw(); _log('resistor', resistor); });
    on('side', () => { side = side === 'after' ? 'before' : 'after'; draw(); _log('side', side); });
    on('sw', () => { open = !open; draw(); _log('switch', open ? 'open' : 'closed'); });
    on('redraw', () => { layout = 1 - layout; draw(); _log('redraw', layout); });
    on('run', () => { seconds += 10; draw(); _log('run', seconds); });
    on('reset', () => { seconds = 0; draw(); });
    if (range) range.oninput = () => { supply = true; volts = Number(range.value); seconds = 0; draw(); used('slider'); };
    if (rRange) rRange.oninput = () => { resistor = Number(rRange.value); draw(); };
    function _log(what, v) { if (typeof Record !== 'undefined' && Record.widget) Record.widget({ widget: 'circuit', what, value: v }); }
    draw();
    return {
      set(s) {
        if (s.cells !== undefined) { supply = false; cells = s.cells; volts = cells * M.CELL_V; }
        if (s.resistor !== undefined) resistor = s.resistor;
        if (s.side) side = s.side;
        if (s.open !== undefined) open = s.open;
        if (s.layout !== undefined) layout = s.layout;
        if (s.seconds !== undefined) seconds = s.seconds;
        draw();
      },
      state,
    };
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
        <text x="${box.x1}" y="${Math.min(s.oy + 18, 256)}" text-anchor="end" font-size="13" fill="rgba(245,240,232,0.75)">potential difference (V)</text>
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
    // Cover mode: a drag (or the slider) is the control a prediction may need (opts.onUse('drag')).
    const usedDrag = () => { if (typeof opts.onUse === 'function') opts.onUse('drag'); };
    svg.addEventListener('pointerup', () => { if (dragging) usedDrag(); dragging = false; });
    range.oninput = () => { V = Number(range.value); draw(); usedDrag(); };
    el.querySelectorAll('[data-c]').forEach(b => b.onclick = () => { comp = b.dataset.c; const s = rangeOf(); V = Math.min(s.max, Math.max(s.min, V)); draw(); if (typeof Record !== 'undefined' && Record.widget) Record.widget({ widget: 'iv-graph', what: 'component', value: comp }); });
    draw();
    return {
      set(s) {
        if (s.comp && M.IV[s.comp] && comps.includes(s.comp)) comp = s.comp;
        if (s.V !== undefined) { const r = rangeOf(); V = Math.min(r.max, Math.max(r.min, s.V)); }
        draw();
      },
      state: () => ({ comp, V }),
    };
  }

  // ── Sensor ─────────────────────────────────────────────────
  function sensor(el, opts) {
    const kinds = (opts.sensors || ['thermistor', 'ldr']);
    let kind = kinds[0], x = 20;
    const spec = { thermistor: { label: 'Thermistor', what: 'Temperature', unit: '°C', min: 0, max: 100, step: 1, start: 20 },
                   ldr: { label: 'LDR', what: 'Light intensity (0 is dark, 100 is bright)', unit: '', min: 0, max: 100, step: 1, start: 10, scale: 10 } };
    el.innerHTML = `<div class="wdg-row">${kinds.map(k => `<button class="btn" data-k="${k}">${spec[k].label}</button>`).join('')}</div>
      <label><span data-w></span>: <span data-v></span></label>
      <input type="range">
      <div class="wdg-read"></div>`;
    const range = el.querySelector('input'), read = el.querySelector('.wdg-read');
    function draw() {
      const sp = spec[kind];
      range.min = sp.min; range.max = sp.max; range.step = sp.step; range.value = x;
      const r = M.sensor(kind, x * (sp.scale || 1));
      el.querySelector('[data-w]').textContent = sp.what;
      el.querySelector('[data-v]').textContent = `${x}${sp.unit ? ' ' + sp.unit : ''}`;
      read.innerHTML = `<span>Potential difference: <b>${M.SENSOR_V} V</b></span><span>Resistance: <b>${fmtR(r.resistance)}</b></span><span>Current: <b>${Number(r.current.toPrecision(2))} A</b></span>`;
      el.querySelectorAll('[data-k]').forEach(b => b.classList.toggle('on', b.dataset.k === kind));
    }
    range.oninput = () => { x = Number(range.value); draw(); };
    el.querySelectorAll('[data-k]').forEach(b => b.onclick = () => { kind = b.dataset.k; x = spec[kind].start; draw(); });
    x = spec[kind].start;
    draw();
  }

  // ── Predict first (evidence layer, step 3) ─────────────────
  // options.predicts: [{ id, question, options: [{ text, mis }], correct,
  //   setup: { … widget state … }, try: "what to do in the widget",
  //   explain: { prompt, points: [...] }, from: { lesson, kp } }]
  // She answers the prediction before the widget opens; then the widget is set
  // up to show it; then she writes what she saw in one line and ticks the points
  // it should include. Each answer is logged (Record.predict) with the
  // misconception her option matches.
  const pcss = `
    .wdg-pred { margin:0 0 0.6rem; }
    .wdg-pred .lx-opts, .wdg-pred-opts { display:flex; flex-direction:column; gap:0.4rem; margin-top:0.45rem; }
    .wdg-pred-opts button { text-align:left; }
    .wdg-pred-opts button.right { border-color:var(--teal); color:var(--teal); }
    .wdg-pred-opts button.on { border-color:var(--amber); color:var(--amber); opacity:1; }
    .wdg-pred-opts button.wrong { border-color:#e8705a; color:#e8705a; }
    .wdg-pred-title { font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--amber); margin-bottom:0.3rem; }
    .wdg-pred textarea { width:100%; box-sizing:border-box; font:inherit; padding:0.45rem 0.6rem; border-radius:8px; border:1px solid var(--border2); background:var(--bg); color:var(--text); margin-top:0.35rem; }
    .wdg-pred .fb { margin-top:0.45rem; line-height:1.55; }
    .wdg-pred ul { padding:0; margin:0.3rem 0 0; } .wdg-pred li { list-style:none; margin:0.25rem 0; }`;
  const pesc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  function _order(q) {
    let h = 0; for (const ch of String(q.question)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    const idx = q.options.map((o, k) => k);
    for (let k = idx.length - 1; k > 0; k--) { h = (h * 1103515245 + 12345) >>> 0; const r = h % (k + 1); [idx[k], idx[r]] = [idx[r], idx[k]]; }
    return idx;
  }
  function withPredicts(el, id, options) {
    if (!document.getElementById('wdgPredStyles')) { const s = document.createElement('style'); s.id = 'wdgPredStyles'; s.textContent = pcss; document.head.appendChild(s); }
    const list = options.predicts;
    const panel = document.createElement('div'); panel.className = 'wdg-pred';
    const body = document.createElement('div'); body.style.display = 'none';
    const after = document.createElement('div'); after.className = 'wdg-pred';   // her one line, under the widget
    el.appendChild(panel); el.appendChild(body); el.appendChild(after);
    // Cover mode (AI lesson, COVER_FIX g): short options with no explanation in them; her pick is marked right or
    // wrong only once she has used the control the prediction needs, and "Now explain it" comes after that.
    const cover = !!options.cover;
    let waiting = null;   // { need: [controls], done() } while her test is awaited
    const onUse = a => { if (waiting && (!waiting.need.length || waiting.need.includes(a))) { const w = waiting; waiting = null; w.done(); } };
    const ctl = KINDS[id](body, cover ? { ...options, onUse } : options) || null;
    let k = 0;
    const label = o => (cover ? String(o.short || String(o.text).split(':')[0]).trim() : o.text);
    const needsOf = p => (Array.isArray(p.needs) ? p.needs : p.needs ? [p.needs] : p.setup && p.setup.open ? ['sw'] : []);
    function ask() {
      const p = list[k];
      const order = _order(p);
      panel.innerHTML = `<div class="wdg-pred-title">Predict first${list.length > 1 ? ` (${k + 1} of ${list.length})` : ''}</div><p style="margin:0">${pesc(p.question)}</p><div class="wdg-pred-opts"></div><div class="fb"></div>`;
      after.innerHTML = '';
      const opts = panel.querySelector('.wdg-pred-opts'), fb = panel.querySelector('.fb');
      order.forEach(j => {
        const b = document.createElement('button'); b.className = 'btn'; b.textContent = label(p.options[j]);
        if (cover) b.onclick = () => {
          opts.querySelectorAll('button').forEach(x => { x.disabled = true; });
          b.classList.add('on');
          const right = j === p.correct;
          if (typeof Record !== 'undefined' && Record.predict) Record.predict({ id: p.id, from: p.from || null, right, chose: p.options[j].text, mis: right ? null : (p.options[j].mis || null) });
          body.style.display = '';
          if (ctl && p.setup) ctl.set(p.setup);
          const reveal = () => {
            b.classList.remove('on');
            b.classList.add(right ? 'right' : 'wrong');
            if (!right) opts.children[order.indexOf(p.correct)].classList.add('right');
            fb.innerHTML = `${pesc(fb.textContent)} ${right ? 'Your prediction was right.' : p.reveal ? pesc(p.reveal) : `What happens: ${pesc(label(p.options[p.correct]))}.`}${p.afterTest ? ` ${pesc(p.afterTest)}` : ''}`;
            explain(p);
          };
          fb.textContent = `Now test your prediction. ${p.tryShort || p.try || 'Try it below and see.'}`;
          const need = needsOf(p);
          if (need.length) waiting = { need, done: reveal }; else reveal();
        };
        else b.onclick = () => {
          opts.querySelectorAll('button').forEach(x => { x.disabled = true; });
          const right = j === p.correct;
          b.classList.add(right ? 'right' : 'wrong');
          if (!right) opts.children[order.indexOf(p.correct)].classList.add('right');
          if (typeof Record !== 'undefined' && Record.predict) Record.predict({ id: p.id, from: p.from || null, right, chose: p.options[j].text, mis: right ? null : (p.options[j].mis || null) });
          fb.innerHTML = `${right ? 'Good prediction. Now check it.' : "Let's see what really happens."} ${pesc(p.try || 'Try it below and see.')}`;
          body.style.display = '';
          if (ctl && p.setup) ctl.set(p.setup);
          explain(p);
        };
        opts.appendChild(b);
      });
    }
    function explain(p) {
      const box = document.createElement('div');
      box.innerHTML = `<div class="wdg-pred-title" style="margin-top:0.7rem">Now explain it</div><p style="margin:0">${pesc((p.explain && (cover && p.explain.promptShort ? p.explain.promptShort : p.explain.prompt)) || 'In one line: what did you see, and why?')}</p><textarea rows="2" placeholder="One line…"></textarea><button class="btn pri" style="margin-top:0.35rem">Check my line</button><div class="fb"></div>`;
      after.appendChild(box);
      const btn = box.querySelector('button');
      btn.onclick = () => {
        btn.remove(); box.querySelector('textarea').readOnly = true;
        const pts = (p.explain && p.explain.points) || [];
        box.querySelector('.fb').innerHTML = `Does your line say these? Tick the ones it does.<ul>${pts.map(t => `<li><label style="display:flex;gap:0.5rem;align-items:flex-start"><input type="checkbox"><span>${pesc(t)}</span></label></li>`).join('')}</ul>`;
        if (typeof Record !== 'undefined' && Record.explained) Record.explained({ id: p.id, from: p.from || null });
        if (k + 1 < list.length) {
          const nb = document.createElement('button'); nb.className = 'btn'; nb.textContent = 'Next prediction';
          nb.onclick = () => { k++; ask(); };
          box.appendChild(nb);
        }
      };
    }
    ask();
    return ctl;
  }

  const KINDS = { circuit, 'iv-graph': ivGraph, sensor };
  function mount(el, id, options) {
    _style();
    el.classList.add('wdg');
    if (!KINDS[id]) { el.textContent = ''; return false; }
    if (options && Array.isArray(options.predicts) && options.predicts.length) withPredicts(el, id, options);
    else KINDS[id](el, options || {});
    return true;
  }
  return { mount };
})();
