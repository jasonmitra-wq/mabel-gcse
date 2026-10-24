# Electricity pilot: what the exam asks (summary)

Brief docs/briefs/2026-10-19-evidence-layer.md, step 1b and 1d. Built
2026-10-24 from the exam board's Physics Paper 1 question papers, mark schemes
and examiner reports (Foundation and Higher, specimen to June 2025; the files
and their sources are in data/exam/MANIFEST.md). This is a paraphrased summary
in our own words: no question or mark-scheme text is copied. The per-part list
stays local, in data/exam/electricity-outcomes.md (gitignored).

Scope: the specification sections of the two pilot lessons, 4.2.1.1 to 4.2.1.4
(p2-current-voltage, p2-components), and energy = charge × potential difference
(taught in p2-current-voltage). A part counts if its mark scheme tags one of these
sections, it belongs to required practical 3 or 4, or it plainly tests one of
these ideas. 36 of the parts also need series/parallel, power or static ideas
("mixed"); the other P2 lessons teach those.

## How much

- 153 question parts, 352 marks, across 18 papers (9 Foundation, 9 Higher).
- Foundation 84 parts (165 marks); Higher 69 parts (187 marks).
- By series: specimen 15 parts, June 2018 26, June 2019 7 (Foundation only for
  the examiner report), November 2020 31, November 2021 20, June 2022 5, June
  2023 15, June 2024 21, June 2025 13.
- Examiner reports were available for 11 of the 18 papers; they comment on 84 of
  the parts and name 28 distinct errors (below).

## Question types

| Type | Parts | Marks | What it usually looks like |
|---|---|---|---|
| Calculation | 39 | 119 | Q = I t, V = I R, E = Q V; 2 marks with the equation given in the needed form, 3 to 4 with a rearrangement or a unit to convert, 5 to 6 when two equations are chained |
| Practical | 34 | 89 | the resistance-of-a-wire and I-V practicals: complete the circuit, describe the method (6 marks, level-marked), how to vary the pd, errors, resolution, precision, means |
| Graph | 26 | 59 | identify a component from its I-V graph, read a value off a graph and work out a resistance, describe a gradient, sketch the negative half, read a thermistor graph |
| Explain | 25 | 53 | why a lamp's resistance rises, why a reversed LED gives no current, what turning up a variable resistor does, why a low-pd cell is safe |
| Recall | 29 | 32 | pick or draw a circuit symbol, write an equation, what each meter measures |

By idea (parts / marks): charge flow Q = I t 19 / 56; V = I R 18 / 39; E = Q V
15 / 37; circuit symbols and reading diagrams 15 / 17; wire practical 14 / 42;
I-V practical 10 / 35; filament lamp 11 / 28; identifying I-V graphs 8 / 15;
what changing a resistance does 8 / 17; diode or LED 4 / 8; ohmic conductor 4 / 9;
thermistor 3 / 10; LDR 2 / 4; current as moving charge 4 / 10; general practical
skills (mean, resolution, precision, zero and random error, accuracy) 15 / 19.

## What earns the marks (our words)

Calculations
- Writing the equation: words or symbols, in any correct arrangement. Writing two
  versions where one is wrong scores nothing.
- 2-mark calculation: one mark for putting the numbers in, one for the answer.
- 3 or 4 marks: add a mark for the rearrangement, and one for converting a unit
  before substituting (minutes or hours to seconds, ms to s, mA to A, kJ to J,
  kV to V, µC to C). An unconverted value still earns the later marks if used
  correctly.
- Some answers carry a mark for significant figures (2 or 3) or for choosing the
  unit (coulombs for charge).
- 5 and 6 marks: two equations in a chain (for example Q = I t then R = V / I, or
  P = I² R then Q = I t); each step earns its own mark, and an error is carried
  forward.
- Resistance from a graph: read the current at the given pd (a range is allowed),
  then divide pd by current.

Circuits and symbols
- Standard symbols only: cell, battery, switch, lamp, fuse, LED, diode, resistor,
  variable resistor, thermistor, LDR, ammeter, voltmeter.
- Measuring a resistance: ammeter in series with the component, voltmeter in
  parallel across it, each with the correct symbol (one mark each), plus a way to
  vary the pd for the I-V practical.

The two practicals (6-mark methods, marked by level)
- Wire: measure the length with a ruler and change it by moving a clip; measure the
  current and the pd; work out R = V / I for each length; repeat and average; plot
  resistance against length; keep the current small and switch off between
  readings so the wire stays at the same temperature; a hazard (the wire gets hot)
  and how to reduce it.
- I-V: ammeter in series, voltmeter across the component; vary the pd with a
  variable resistor, the number of cells or the supply; take a range of readings
  at even steps; reverse the component or supply for negative values; repeat and
  average; plot current against pd. The top level needs a working circuit and a
  way to get the negative values.

Graphs and explanations
- A straight line through the origin is the resistor at constant temperature
  (ohmic: current proportional to pd, so resistance constant); a curve that
  flattens is the filament lamp; zero then steep, flat in reverse, is the diode.
- Filament lamp: current rises, so the filament gets hotter, so its resistance
  rises (one mark per link). Its gradient decreases as the pd increases.
- Diode or LED reversed: no current, because its resistance is very high in the
  reverse direction. "The circuit is broken" does not score.
- Turning up a variable resistor in series with a lamp: current down, lamp pd down,
  total resistance up.
- Thermistor for a job: the one whose resistance changes most over the
  temperatures needed.
- Inverse proportion: show with three pairs that the product stays the same.

General practical skills
- Zero error: the meter shows a reading with nothing connected. Random error: a
  reading that keeps changing. Resolution: the smallest step the meter shows.
  Precise: repeat readings close together. A digital meter: less misreading, no
  parallax. A mean uses only the repeat readings.

## Errors the examiner reports name (our words)

Each line gives how many of the listed parts the reports tie it to.

1. Units not converted, or converted wrongly, before substituting (minutes,
   hours, ms, mA, kJ, µC). 8 parts.
2. The wrong unit chosen for charge (watts, not coulombs). 1.
3. Rearranging the wrong way (multiplying energy by pd to get charge; P = I V
   turned into I = V / P; two half-remembered equations mixed). 2.
4. Rounding too far, losing the power of ten, or adding steps the question did not
   need. 2.
5. Two versions of an equation written, one wrong. 1.
6. V = I R not recalled when the equation is not given (series before 2022; from
   2022 the papers came with an equation sheet). 1.
7. Non-standard or careless symbols (textbook variants, a line through a meter's
   circle); fuse, LED and thermistor symbols often not known. 7.
8. What a voltmeter measures less well known than what an ammeter measures. 1.
9. The effect of turning up a variable resistor on current, lamp pd and total
   resistance rarely all right. 1.
10. I-V graphs matched to components by guessing, not by shape; the filament lamp
    often not recognised. 2.
11. How the gradient of a curved I-V graph changes rarely described. 1.
12. Zero error not understood. 2.
13. A graph scale misread (0.8 for 0.08); the current hard to read off. 3.
14. The negative half of an I-V graph drawn in pen or levelling off. 1.
15. Wire method: "measure the resistance" without saying how; other practicals
    mixed in. 2.
16. Low-pd cell: "no risk" without saying of what (an electric shock). 2.
17. Varying the pd: "increase the resistance" with no means, "close the switch",
    "reverse the connections". 2.
18. I-V method: voltmeter in series; vague on negative readings; no range or
    interval. 1.
19. Reversed diode or LED blamed on a broken meter, an open switch, a gap or
    "fighting" cells, instead of one-way current and a very high reverse
    resistance. 3.
20. Lamp at double the pd treated as if power or current were proportional to pd. 1.
21. Choosing a thermistor by lowest resistance instead of largest change. 1.
22. Thermistor in series: current found without adding the resistances first
    (mixed with series circuits). 1.
23. Precision confused with resolution or accuracy. 2.
24. Inverse proportion described only as "one up, one down". 2.
25. Parallel resistors explained as "the resistance is shared" (parallel circuits,
    taught in p2-series-parallel). 1.
26. A mean that includes the value of the variable. 1.
27. Resolution given as the reading instead of the smallest step. 1.
28. Dirty coin: not saying that the measured resistance changes. 1.

## More practice: Isaac Physics (University of Cambridge)

Linked, not copied. The site now serves these at isaacscience.org (opened
2026-10-24). They are from the "Essential GCSE Physics" book, chapter 3.

- Charge and current (Q = I t): https://isaacscience.org/questions/gcse_ch3_22_q1
  (set of 18: gcse_ch3_22_q1 to q18)
- Resistance (V = I R): https://isaacscience.org/questions/gcse_ch3_24_q1_r1
  (set of 10)
- Characteristics (I-V graphs, resistance at a point):
  https://isaacscience.org/questions/gcse_ch3_25_q1 (set of 5)
- All GCSE electricity questions, filtered:
  https://isaacscience.org/questions?stages=gcse&subjects=physics&fields=electricity
- GCSE components (diodes, LEDs):
  https://isaacscience.org/questions?stages=gcse&subjects=physics&fields=electricity&topics=components

Each pilot lesson ends with a "More practice" link to the sets for its ideas.
