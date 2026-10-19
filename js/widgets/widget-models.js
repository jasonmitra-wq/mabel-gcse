/* ============================================================
   WIDGET-MODELS.JS — the numbers behind the hands-on widgets
   (brief v3.1, step 1e). Shared by the browser (window.WidgetModels)
   and Node (require). No DOM: js/widgets/widgets.js draws them.

   Each model follows the lesson's equations and the specification, and
   each has a test (tests[id]) that compares its numbers with the
   equation. tools/check-lesson-v3.js runs the test of every widget a
   lesson uses.
   ============================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.WidgetModels = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  const CELL_V = 1.5;          // one cell, in volts
  const RESISTOR_OHMS = 10;    // the resistor in the circuit and graph widgets

  // A filament lamp: its resistance rises as the current heats it,
  // R = 5 + 10·|I| ohms. Then V = I R gives 10I² + 5I − |V| = 0.
  const lampR = I => 5 + 10 * Math.abs(I);
  function lampCurrent(V) {
    const a = Math.abs(V);
    return Math.sign(V) * (-5 + Math.sqrt(25 + 40 * a)) / 20;
  }

  // Circuit: a cell or cells (or a supply), a lamp, an ammeter, and a
  // resistor that can be put in the loop. One loop: the same current
  // everywhere, I from V = I R with R = lamp + resistor.
  function circuit({ volts, resistor }) {
    const Rr = resistor ? RESISTOR_OHMS : 0;
    // 10I² + (5 + Rr)I − V = 0
    const b = 5 + Rr;
    const I = volts > 0 ? (-b + Math.sqrt(b * b + 40 * volts)) / 20 : 0;
    const R = lampR(I) + Rr;
    const lampPower = I * I * lampR(I);           // brightness follows the energy transferred each second
    return { volts, current: I, resistance: R, lampResistance: lampR(I), brightness: Math.min(1, lampPower / 3.4) };
  }

  // I-V graph: current for a potential difference, for each component.
  const IV = {
    resistor: { label: 'Resistor', min: -6, max: 6, current: V => V / RESISTOR_OHMS },
    lamp:     { label: 'Filament lamp', min: -6, max: 6, current: lampCurrent },
    // A diode: almost no current until the forward p.d. passes 0.6 V, then it rises steeply.
    diode:    { label: 'Diode', min: -3, max: 1.4, current: V => (V > 0.6 ? (V - 0.6) / 2 : 0) },
  };
  function iv(component, V) {
    const c = IV[component];
    const I = c.current(V);
    return { volts: V, current: I, resistance: I !== 0 ? V / I : Infinity };
  }

  // Sensors in a 6 V circuit: a thermistor (resistance falls as it warms)
  // and an LDR (resistance falls as the light gets brighter). I = V ÷ R.
  const SENSOR_V = 6;
  const thermistorR = T => 3000 * Math.exp(-(T - 5) / 27.7);   // 3000 Ω at 5 °C, 200 Ω at 80 °C
  const ldrR = lux => 50000 / (1 + lux / 5);                    // 50 000 Ω in the dark
  function sensor(kind, x) {
    const R = kind === 'thermistor' ? thermistorR(x) : ldrR(x);
    return { volts: SENSOR_V, resistance: R, current: SENSOR_V / R };
  }

  // ── Tests: the numbers against the equations ─────────────────
  const close = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));
  const tests = {
    circuit() {
      const f = [];
      let lastI = 0;
      for (let n = 1; n <= 4; n++) {
        for (const res of [false, true]) {
          const c = circuit({ volts: n * CELL_V, resistor: res });
          if (!close(c.volts, c.current * c.resistance)) f.push(`V = I R fails at ${n} cells${res ? ' with the resistor' : ''}`);
          if (!(c.current > 0)) f.push(`no current at ${n} cells`);
        }
        const c = circuit({ volts: n * CELL_V, resistor: false });
        if (!(c.current > lastI)) f.push(`adding a cell does not raise the current (${n} cells)`);
        lastI = c.current;
        if (!(circuit({ volts: n * CELL_V, resistor: true }).current < c.current)) f.push('the resistor does not lower the current');
        if (!(circuit({ volts: n * CELL_V, resistor: true }).brightness < c.brightness)) f.push('the resistor does not dim the lamp');
      }
      for (let V = 0.5; V <= 6; V += 0.5) {
        const c = circuit({ volts: V, resistor: true });
        if (!close(V, c.current * c.resistance)) f.push(`V = I R fails at ${V} V`);
      }
      if (circuit({ volts: 0, resistor: false }).current !== 0) f.push('current flows with no potential difference');
      return f;
    },
    'iv-graph'() {
      const f = [];
      for (let V = -6; V <= 6; V += 0.25) {
        const r = iv('resistor', V);
        if (!close(r.volts, r.current * RESISTOR_OHMS)) f.push(`resistor: V = I R fails at ${V} V`);
        const l = iv('lamp', V);
        if (!close(V, l.current * lampR(l.current))) f.push(`lamp: V = I R fails at ${V} V`);
      }
      // Ohmic: the resistor's resistance is the same at every point; doubling V doubles I.
      [1, 2, 3].forEach(V => { if (!close(iv('resistor', 2 * V).current, 2 * iv('resistor', V).current)) f.push('resistor: double the p.d. does not double the current'); });
      // Filament lamp: resistance increases as the current (and temperature) rises.
      let last = 0;
      for (let V = 0.5; V <= 6; V += 0.5) { const R = iv('lamp', V).resistance; if (!(R > last)) f.push(`lamp: resistance does not rise at ${V} V`); last = R; }
      if (!close(iv('lamp', -3).current, -iv('lamp', 3).current)) f.push('lamp: turning it round should only change the sign');
      // Diode: current one way only; in reverse its resistance is very high (no current here).
      for (let V = -3; V <= 0; V += 0.5) if (iv('diode', V).current !== 0) f.push(`diode: current in reverse at ${V} V`);
      if (!(iv('diode', 1.2).current > iv('diode', 0.9).current && iv('diode', 0.9).current > 0)) f.push('diode: forward current does not rise');
      for (let V = 0.8; V <= 1.4; V += 0.2) { const d = iv('diode', V); if (!close(d.volts, d.current * d.resistance)) f.push(`diode: V = I R fails at ${V} V`); }
      return f;
    },
    sensor() {
      const f = [];
      let lastR = Infinity;
      for (let T = 0; T <= 100; T += 5) {
        const s = sensor('thermistor', T);
        if (!close(s.volts, s.current * s.resistance)) f.push(`thermistor: V = I R fails at ${T} °C`);
        if (!(s.resistance < lastR)) f.push(`thermistor: resistance does not fall at ${T} °C`);
        lastR = s.resistance;
      }
      if (Math.abs(thermistorR(5) - 3000) > 1 || Math.abs(thermistorR(80) - 200) > 2) f.push('thermistor: does not match the worked examples (3000 Ω cold, 200 Ω hot)');
      lastR = Infinity;
      for (let L = 0; L <= 1000; L += 50) {
        const s = sensor('ldr', L);
        if (!close(s.volts, s.current * s.resistance)) f.push(`LDR: V = I R fails at ${L} lux`);
        if (!(s.resistance < lastR)) f.push(`LDR: resistance does not fall at ${L} lux`);
        lastR = s.resistance;
      }
      return f;
    },
  };

  return { CELL_V, RESISTOR_OHMS, SENSOR_V, circuit, iv, IV, sensor, thermistorR, ldrR, lampR, tests, ids: () => Object.keys(tests) };
});
