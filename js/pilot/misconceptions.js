/* PILOT / MISCONCEPTIONS.JS: the in-scope misconceptions of tools/pilot/misconceptions.md (M1 to M14),
   for the AI lesson's marking (js/teach-core.js MARK_FIX). Generated from that file; tools/pilot/check-tests.js
   fails if the two differ. Shared by the browser (window.PilotMisconceptions) and Node (require). */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.PilotMisconceptions = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  return [
    {
      "id": "M1",
      "text": "A lamp only needs one wire from the cell (the cell \"gives\" something to the lamp); a complete loop is not needed."
    },
    {
      "id": "M2",
      "text": "Current is partly used up by a lamp or other component, so less comes back to the cell. Very resistant to change."
    },
    {
      "id": "M3",
      "text": "Current flows out of both ends of the cell and the two currents \"clash\" or meet in the lamp."
    },
    {
      "id": "M4",
      "text": "Sequential reasoning: a change affects only the parts \"after\" it in the loop, or only the component that was changed."
    },
    {
      "id": "M5",
      "text": "A cell or battery always gives the same current, whatever circuit it is in."
    },
    {
      "id": "M6",
      "text": "A battery stores charge or current (or \"electricity\"), not energy, and that is what runs out."
    },
    {
      "id": "M7",
      "text": "\"Electricity\" or \"energy\" used for everything; effects explained by energy or \"electricity\" instead of current."
    },
    {
      "id": "M8",
      "text": "Potential difference is a result of the current, not its cause; \"voltage flows\" through the circuit; charge, current and pd not told apart."
    },
    {
      "id": "M9",
      "text": "Cannot say what a voltmeter measures, especially across a lamp or resistor rather than across the cell."
    },
    {
      "id": "M10",
      "text": "Not sure how to connect an ammeter to measure the current at a point (it must go in the loop, in series)."
    },
    {
      "id": "M11",
      "text": "Where a component is drawn on a circuit diagram matters (top or side), so two drawings of the same loop are taken as different circuits."
    },
    {
      "id": "M12",
      "text": "Because R = V / I, the resistance of an ohmic resistor depends on the pd across it and the current through it (double the pd, double the resistance)."
    },
    {
      "id": "M13",
      "text": "The resistance at a point on an I-V graph is its gradient (rather than V ÷ I at that point); matters most for the filament lamp."
    },
    {
      "id": "M14",
      "text": "I-V and V-I graphs mixed up (which quantity is on which axis)."
    }
  ];
});
