# Electricity pilot: gaps found and what was added

Brief docs/briefs/2026-10-19-evidence-layer.md, step 3: the two pilot lessons
(p2-current-voltage, p2-components) checked against the exam
(tools/pilot/outcomes.md), the misconceptions research
(tools/pilot/misconceptions.md) and the prerequisite map
(data/prereq/physics-electricity.json). The lessons were not rebuilt: each gap
was filled in the lesson's existing shape. Checked 2026-10-24.

## 1. Exam abilities (taught and practised, marking by mark-scheme points)

Already covered, no change: recall of each symbol taught; ammeter in series and
voltmeter in parallel; Q = I t, V = I R and E = Q V with substitution and
rearranging (worked examples and "Try another"); minutes to seconds and kJ to J;
the charge-then-energy chain (E = Q V worked example 2); a longer wire has more
resistance; switching off between readings; ohmic conductor; the three I-V
shapes and why (lamp heats up, diode one way, very high reverse resistance);
resistance at a point = V ÷ I; negative readings by turning the component round;
thermistor and LDR behaviour and uses; the sensor test circuit.

| Gap | Evidence | Added |
|---|---|---|
| G1 Unit conversions the exam uses but the lessons did not practise: mA, ms, hours, kV | examiner error 1 (8 parts) | "Try another" now also makes questions with mA, ms and hours (Q = I t) and kV (E = Q V); each first step converts and says what the prefix means. Watch out (common mistakes) listing every conversion. |
| G2 Chained calculations | 6 parts, 5 to 6 marks | "Try another" for E = Q V now includes a current and a time (Q = I t first). The Q = I t then R = V ÷ I chain (Higher, 2 parts) is not added to the lesson; it is in the post-test only. |
| G3 Significant figures and powers of ten | examiner error 4 | End quiz question (2 significant figures, wrong options match the errors) and an exam tip. |
| G4 Writing an equation from memory; two versions score nothing | 6 recall parts; errors 5 and 6 | End quiz question on the Q = I t equation; exam tip "write one version only". |
| G5 What turning up a resistance does to the current, the lamp's pd and the total resistance | 5% full marks (error 9) | Predict-first item on the key point 2 circuit (resistor in, then moved), with a voltmeter across the lamp in the widget. |
| G6 Wire practical: repeats and mean, the resistance-length graph (straight through the origin), the hazard and its control, why one cell is safe | method questions (6 marks, levels); errors 15 and 16 | Two sentences in key point 3; the mixed question on the voltmeter replaced by one on why one cell is safe. |
| G7 I-V practical: ways to vary the pd; a range at even steps | errors 17 and 18 | Two sentences in key point 6 (number of cells, a settable supply; every volt from 0 to 6 V); a "close the switch" wrong option on the mixed question; exam tip. |
| G8 Measurement words: zero error, resolution, precision, mean of repeats only | errors 12, 23, 26, 27 | End quiz question on zero error (replacing one on the voltmeter, practised elsewhere); exam tips for the other words. |
| G9 "Gradient" (the exam asks how the gradient changes) | 23% right (error 11) | Key point 5 now names it: the graph gets flatter, its gradient (steepness) decreases. New key term and glossary entry. |
| G10 Lamp at double the pd: power not four times | 2% full marks (error 20) | Exam tip: the current does not double because the lamp's resistance rises. |
| G11 Inverse proportion shown by a constant product | error 24 | Exam tip. |
| G12 Reversed LED or diode: no current because of very high reverse resistance, not "the circuit is broken" | error 19 (3 parts) | Predict-first item on the key point 5 I-V graph (diode turned round); exam tip in p2-components. |
| G13 Fuse and thermistor symbols often not known; careless meter symbols | error 7 (7 parts) | p2-components end quiz question on the fuse symbol; common mistake on lines through meter circles. |
| G14 Choosing a thermistor: biggest change over the range, not lowest resistance | error 21 | p2-components end quiz question and exam tip. |
| G15 Reading a graph scale (0.08 A, not 0.8 A) | error 13 | Common mistake. |
| — Not added: thermistor in series (pd sharing), parallel resistors, static shocks, power | errors 22, 25; mixed parts | Taught in p2-series-parallel, p2-static and p2-power-energy; outside these lessons. |
| — Not added: pencil for graphs, the jockey | errors 14; 2 parts | Exam technique, not physics; very rare. |

Mark-scheme marking in the lessons: the practice generators' steps follow the
mark-scheme points (convert, substitute, rearrange, answer), and a wrong answer
shows them one at a time. The post-tests and the delayed test mark each point
in code (js/pilot/tests.js).

## 2. Misconceptions (predict first, see it in a widget, explain in one line)

Before: none of the 14 was met this way (some were stated in the text, for
example "charge is not used up"). Added: "predict first" items inside the
lessons' widgets (js/widgets/widgets.js). She chooses a prediction, the widget
opens set up to show it, and she writes one line on what she saw, then ticks the
points it should include. Each wrong option matches a misconception, and her
choice is logged. The same widget card appears on the slides and in the AI
lesson (the tutor shows a key point's widget; no tutor change).

| Misconception | Where it is met | Widget shows |
|---|---|---|
| M1 one wire is enough | p2-current-voltage key point 1 | the switch opens a gap: both ammeters read 0 |
| M2 current used up; M3 clashing currents; M4 sequential | key point 1 | an ammeter before and after the lamp read the same |
| M10 how to connect an ammeter | key point 1 | both ammeters in the loop, same reading |
| M5 a cell always gives the same current | key point 2 | add a cell: the current rises; put the resistor in: it falls |
| M8 current and pd confused; M9 what a voltmeter measures | key point 2 | voltmeter across the lamp next to the ammeter |
| M4 sequential (resistor before or after the lamp) | key point 2 | move the resistor: nothing changes |
| M12 resistance depends on V and I | key point 5 (resistor graph) | drag from 2 V to 4 V: V ÷ I stays 10 Ω |
| M14 axes of an I-V graph | key point 5 | the axis labels |
| M13 resistance from the gradient | key point 5 (lamp graph) | V ÷ I at the point |
| M6 a battery stores charge; M7 "electricity" | key point 7 (new circuit widget) | run the circuit: the charge back equals the charge out; the energy goes up (E = Q V) |
| M11 where a part is drawn matters | p2-components key point 1 (new circuit widget) | "Draw it another way": same loop, same readings |

The widget models gained an open switch, the pd across the lamp and the
resistor, a variable resistance, and charge and energy over time, each tested
against the equations (js/widgets/widget-models.js). Each lesson still uses at
most two different widgets; a widget can now come back at a later key point
(tools/check-lesson-v3.js counts distinct widgets).

## 3. Examiner-named errors

All 28 are covered by a worked example, a watch out (common mistakes or exam
tips) or a practice question, or are outside these lessons (see the table
above).

## 4. Prerequisite order

data/prereq/physics-electricity.json; the check in tools/check-lesson-v3.js
passes for both lessons. One gap found and fixed while adding text: "power"
(taught in a later lesson) in key point 6 was reworded ("a supply whose
potential difference you can set").

## 5. Also

- "More practice" at the end of each lesson: Isaac Physics GCSE sets (links,
  not copies), on the last slide and at the end of the AI lesson.
- Text added: p2-current-voltage 1,265 → 1,344 words of teaching text (limit
  1,350); p2-components unchanged (735).
