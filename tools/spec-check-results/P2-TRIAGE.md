# P2 Electricity — spec-check triage (results at commit d08b060)

Decided by Claude in the planning chat. ACCEPT = change the lesson.
REJECT = no change, reason given. DEFER = genuine gap, handled in a
later stage. Standing rule from Jason: content above the specification
is removed, never signposted.

## p2-components (4.2.1.1; 4.2.1.4 shared — home lesson for resistors,
## diodes, LDRs, thermistors)
- miss0 REJECT: filament lamp resistance rising with temperature is
  taught in p2-current-voltage (I–V characteristics).
- miss1 ACCEPT: for some resistors R stays constant; in others it
  changes as the current changes.
- miss2 ACCEPT: the resistance of lamps, diodes, thermistors and LDRs is
  not constant; it changes with the current through them.
- miss3 REJECT: measuring resistance with an ammeter and voltmeter is
  taught in p2-current-voltage (required practical 4) and
  p2-series-parallel.
- miss4 REJECT: required practical 4 is taught in p2-current-voltage.
- miss5 REJECT: linear and non-linear are added in p2-current-voltage
  (miss7 there).
- miss6 DEFER: circuit diagrams come with the Physics diagrams stage
  (S4).
- abov0 ACCEPT: cut 0.7 V.
- abov1 ACCEPT: "reverse bias" becomes "reverse direction".
- abov2 ACCEPT: cut photons and junction.
- abov3 ACCEPT: cut rectification.
- abov4 ACCEPT: cut photons, charge carriers and cadmium sulphide.
- abov5 ACCEPT: cut the charge carrier / hole key term.
- abov6 ACCEPT: cut potential divider and transistor. Keep the spec
  applications: a thermistor in a thermostat; an LDR switching lights
  on when it gets dark.
- abov7 ACCEPT: cut NTC.
- abov8 ACCEPT: cut the charge-carrier mechanism.
- abov9 ACCEPT: cut the fuse exam tip.
- fact0 ACCEPT: a fixed resistor's resistance is constant at constant
  temperature.
- fact1 ACCEPT: same in the write bullet.
- fact2 ACCEPT: V = IR links potential difference, current and
  resistance for any component. For an ohmic conductor at constant
  temperature, current is directly proportional to potential
  difference. Do not call it "Ohm's law".
- fact3 ACCEPT: same in the write bullet.
- fact4 ACCEPT: remove the claim that each light level gives a constant
  LDR resistance.
- fact5 ACCEPT: the diode table row says current flows in one direction
  only and the diode has a very high resistance in the reverse
  direction; no fixed "very low" forward value.
- fact6 ACCEPT: cut "inverse components"; say LDR resistance decreases
  as light intensity increases, and thermistor resistance decreases as
  temperature increases.
- fact7 ACCEPT: the graph is a downward curve; remove "inverse
  relationship".
- fact8 ACCEPT: checkpoint feedback says R = V ÷ I, not Ohm's law.
- wron0 ACCEPT: "potential difference".
- wron1 ACCEPT: same.
- wron2 ACCEPT: "filament lamp".
- wron3 ACCEPT: as abov1.
- wron4 ACCEPT: as fact6.
- wron5 ACCEPT: the resistor symbol is a rectangle; remove "zigzag".
- chec0 ACCEPT: the thermistor checkpoint tests how thermistor
  resistance changes with temperature, or its use in a thermostat.

## p2-current-voltage (4.2.1.2, 4.2.1.3; 4.2.1.4 shared; 4.2.4.2 is
## taught in p2-power-energy)
- miss0 ACCEPT: charge flows only in a closed circuit that includes a
  source of potential difference.
- miss1 ACCEPT: current is the same at any point in a single closed
  loop.
- miss2 ACCEPT: describe required practical 3 briefly: the length of a
  wire at constant temperature; combinations of resistors in series
  and in parallel (measured, not calculated).
- miss3 REJECT: thermistors are taught in p2-components.
- miss4 REJECT: LDRs are taught in p2-components.
- miss5 REJECT: added in p2-components (miss2).
- miss6 DEFER: circuit diagrams come with the diagrams stage (S4).
- miss7 ACCEPT: classify I–V graphs as linear (resistor at constant
  temperature) or non-linear (filament lamp, diode).
- miss8 REJECT: E = Pt is taught in p2-power-energy.
- miss9 REJECT: power is taught in p2-power-energy.
- miss10 REJECT: added in p2-power-energy (miss0).
- miss11 REJECT: added in p2-power-energy (miss1).
- miss12 REJECT: taught in p2-power-energy (E = Pt).
- abov0 ACCEPT: cut EMF, terminal potential difference and internal
  resistance everywhere.
- abov1 ACCEPT: same.
- abov2 ACCEPT: same.
- abov3 ACCEPT: same.
- abov4 ACCEPT: cut 0.7 V.
- abov5 ACCEPT: same.
- abov6 ACCEPT: cut resistivity and "material".
- abov7 ACCEPT: cut cross-sectional area. Resistance increases with the
  length of the wire.
- fact0 ACCEPT: R = V ÷ I is not called "Ohm's law" (see p2-components
  fact2 wording).
- fact1 REJECT: moot, the content is cut by abov0.
- fact2 ACCEPT: required practical 4 includes a filament lamp, a diode
  and a resistor at constant temperature.
- fact3 ACCEPT: "Resistance increases with the length of the wire. A
  filament's resistance increases as it gets hotter; a thermistor's
  decreases."
- fact4 ACCEPT: find resistance at a point on an I–V graph by reading V
  and I and using R = V ÷ I; cut the reciprocal-of-gradient method.
- fact5 ACCEPT: in the reverse direction the current is very small, not
  zero.
- fact6 ACCEPT: replace the V = W/Q mnemonic; teach E = QV (energy
  transferred = charge flow × potential difference).
- wron0 ACCEPT: as fact6.
- wron1 ACCEPT: "charge flow".
- wron2 ACCEPT: "potential difference".
- wron3 ACCEPT: same.
- wron4 ACCEPT: as fact0.
- wron5 ACCEPT: "the diode has a very high resistance in the reverse
  direction".

## p2-domestic (4.2.3.1, 4.2.3.2)
- miss0 ACCEPT: the live wire may be dangerous even when a switch in the
  mains circuit is open.
- miss1 ACCEPT: any connection between the live wire and earth is
  dangerous, because current can flow through it to earth.
- miss2 ACCEPT: most appliances are connected to the mains using
  three-core cable.
- miss3 ACCEPT: a direct potential difference stays in one direction;
  an alternating potential difference keeps reversing.
- abov0 ACCEPT: cut RMS and peak; the mains supply is about 230 V.
- abov1 ACCEPT: same.
- abov2 ACCEPT (unless HELD): cut RCCBs.
- abov3 ACCEPT (unless HELD): cut the whole fuses and circuit breakers
  key point, its checkpoint and every mention of fuses, fuse ratings
  and circuit breakers.
- abov4 ACCEPT: cut the National Grid and transformer sentence (taught
  in p1-national-grid).
- abov5 ACCEPT: cut double insulation and its symbol everywhere.
- fact0 REJECT: moot, cut by abov3.
- fact1 REJECT: moot, cut by abov5.
- fact2 REJECT: moot, cut by abov5.
- wron0 ACCEPT: "direct potential difference".
- wron1 ACCEPT: "alternating potential difference".
- wron2 ACCEPT: "alternating potential difference".
- wron3 ACCEPT: "three-core cable".
- wron4 ACCEPT: "earth (0 V)".
- wron5 ACCEPT: "earth".
- chec0 ACCEPT: the checkpoints are out of step with the key points.
  The live wire question follows the three-pin plug / three-core cable
  key point.
- chec1 ACCEPT: the fuse question is cut with abov3 (unless HELD, in
  which case it follows the fuses key point).
- chec2 ACCEPT: the double-insulation question is cut with abov5. Write
  a new checkpoint for the earthing key point (for example, why the
  live wire is dangerous even when the switch is open).
- chec3 ACCEPT: the mains frequency question follows the AC/DC key
  point.

## p2-power-energy (4.2.4.1, 4.2.4.2)
- miss0 ACCEPT: describe how appliances transfer energy from batteries
  or ac mains to the kinetic energy of electric motors or the energy of
  heating devices.
- miss1 ACCEPT: link power ratings to changes in stored energy (a higher
  power kettle transfers more energy to the water each second).
- miss2 ACCEPT: everyday electrical appliances are designed to bring
  about energy transfers.
- abov0 ACCEPT: cut P = V²/R everywhere.
- abov1 ACCEPT: cut payback time everywhere.
- abov2 ACCEPT (unless HELD): cut the kilowatt-hour and the whole cost
  of electricity key point, its checkpoint, and every mention of
  bills, tariffs, pence and off-peak. Energy is in joules.
- abov3 ACCEPT (unless HELD): cut the fuse rating column.
- fact0 REJECT: moot, cut by abov2.
- fact1 REJECT: moot, cut by abov3.
- fact2 ACCEPT: V = IR is not called "Ohm's law".
- wron0 ACCEPT: power = potential difference × current.
- wron1 ACCEPT: energy transferred = charge flow × potential
  difference.
- wron2 ACCEPT: "charge flow, Q, in coulombs".
- wron3 ACCEPT: "potential difference" throughout the tables, write
  bullets and revision card.
- wron4 ACCEPT: as wron1.
- chec0 ACCEPT: each remaining key point gets one checkpoint that tests
  it.
- chec1 ACCEPT: same.
- chec2 ACCEPT: same.

## p2-series-parallel (4.2.2)
- miss0 ACCEPT: explain in words why adding resistors in series
  increases the total resistance.
- miss1 ACCEPT: a dc series circuit can be used for measurement and
  testing, for example a variable resistor in series to change the
  current through a component.
- miss2 DEFER: circuit diagrams come with the diagrams stage (S4).
- abov0 ACCEPT: cut the parallel resistance formula and its worked
  example everywhere. Keep: the total resistance of two resistors in
  parallel is less than the resistance of the smaller one.
- abov1 ACCEPT: same.
- abov2 ACCEPT: same.
- abov3 ACCEPT: same.
- abov4 ACCEPT: same.
- abov5 ACCEPT: rewrite the mixed-circuit key point as solving series
  circuits using equivalent resistance (R total = R1 + R2), then
  current and potential difference.
- abov6 ACCEPT: as abov0.
- abov7 ACCEPT: as abov0.
- abov8 ACCEPT: as abov0.
- abov9 ACCEPT: as abov0.
- abov10 ACCEPT: as abov0.
- fact0 ACCEPT: cut the exam tip calling the formula a favourite.
- fact1 ACCEPT: "the potential difference across each component in
  parallel is the same".
- fact2 ACCEPT: remove "modern sets"; say lights wired in parallel keep
  working if one bulb fails.
- wron0 ACCEPT: "the total potential difference of the supply is shared
  between the components".
- wron1 ACCEPT: "potential difference".
- wron2 ACCEPT: same.
- wron3 ACCEPT: as fact1.
- wron4 ACCEPT: "potential difference of the power supply".
- chec0 ACCEPT: key point 0 states current = potential difference ÷
  total resistance, so its checkpoint can be answered from it.
- chec1 ACCEPT: the parallel checkpoint tests that the total resistance
  is less than the smallest resistor.
- chec2 ACCEPT: the mixed-circuit checkpoint tests a series equivalent-
  resistance calculation.

## p2-static (4.2.5.1, 4.2.5.2)
- miss0 ACCEPT: use the electric field to explain sparking: a strong
  enough field near a charged object can make charge jump through the
  air.
- miss1 ACCEPT: the field around an isolated charged sphere: straight
  lines at right angles to the surface, pointing outward for positive
  and inward for negative. (The diagram comes in S4.)
- abov0 ACCEPT: cut parallel plates and uniform fields everywhere.
- abov1 ACCEPT: cut all applications everywhere: inkjet printers,
  photocopiers and laser printers, electrostatic precipitators, paint
  spraying, aircraft and tanker earthing, bonding cables.
- abov2 ACCEPT: same.
- abov3 ACCEPT: same.
- abov4 ACCEPT: same.
- abov5 ACCEPT: cut how storm clouds become charged.
- abov6 ACCEPT: cut "ionise the air".
- fact0 ACCEPT: the material that loses electrons is left with an equal
  positive charge.
- fact1 ACCEPT: replace "only builds up on insulators" with: certain
  insulating materials become charged when rubbed against each other.
- fact2 ACCEPT: rewrite the intro without the "insulating surface"
  claim.
- fact3 REJECT: moot, cut by abov1.
- fact4 REJECT: moot, cut by abov1.
- wron0 ACCEPT: "non-contact force".
- wron1 ACCEPT: "isolated charged sphere".
- wron2 ACCEPT: same type of charge repel; different types attract.
- chec0 ACCEPT: the electric fields key point gets a checkpoint that
  tests electric fields.


## Fuse hold released (decided by Claude in the planning chat)

The spec guard in the P2 fix round matched "fuse" only inside "diffuse
reflection". The word "fuse" does not appear in the specification. The
held decisions now apply:
- p2-domestic abov2 ACCEPT: cut RCCBs.
- p2-domestic abov3 ACCEPT: cut the whole fuses and circuit breakers
  key point, its checkpoint, and every mention of fuses, fuse ratings,
  MCBs and circuit breakers. Re-key the checkpoints.
- p2-domestic chec1 ACCEPT: the fuse checkpoint goes with the key point.
- p2-power-energy abov3 ACCEPT: cut the fuse rating column.

## R2 decisions (re-check on 79f8902, made by Claude in the planning chat)

- p2-current-voltage fact0 ACCEPT: the resistance of a wire depends on
  its length and its temperature. Say "of a wire"; do not claim these
  are the only factors for every component.
- p2-current-voltage fact1 ACCEPT: an ohmic conductor's resistance is
  constant at constant temperature.
- p2-current-voltage miss8 ACCEPT: state that work is done when charge
  flows in a circuit.
- p2-current-voltage abov0 ACCEPT: cut conventional current versus
  electron flow.
- p2-current-voltage abov1 ACCEPT: write units in words: 1 ampere is 1
  coulomb per second; 1 ohm is 1 volt per ampere. No negative-index
  notation.
- p2-domestic fact0 ACCEPT: the earth wire is a safety wire that stops
  the appliance becoming live. Remove the sequence in which the casing
  "goes live" first.
- p2-domestic fact1 ACCEPT: same fix in the write bullet.
- p2-domestic fact2 ACCEPT: same fix in the write bullet.
- p2-domestic fact3 ACCEPT: same fix in the exam tip.
- p2-domestic abov3 (R2 above_gcse 3) ACCEPT: cut the cable grip.
- p2-domestic abov6 (R2 above_gcse 6) ACCEPT: cut oscilloscope traces.
- p2-power-energy miss0 ACCEPT: one sentence: work is done when charge
  flows in a circuit.
- p2-power-energy miss1 ACCEPT: add one worked example applying
  E = QV, with numbers given in the example.
- p2-series-parallel miss0 ACCEPT: one sentence: some circuits include
  both series and parallel parts. No calculation.
- p2-series-parallel abov0 ACCEPT: cut ammeter and voltmeter
  resistance values.
- p2-series-parallel abov1 ACCEPT: cut the tutor note on why ammeters
  and voltmeters have low and high resistance.
- p2-static miss0 ACCEPT: describe sparking, clinging clothes and hair
  in terms of electrons transferred between objects.
- p2-static abov0 ACCEPT: cut the charged screen attracting neutral
  dust.
- p2-static abov1 ACCEPT: cut the charged rod attracting uncharged
  paper.

## R3

Run R3: `node tools/spec-check.js --topic P2 --run --max-usd 3` on the fuse-release and R2 decisions (base f9f57a1). Cost $0.6125. 52 findings: 36 ACCEPT, 16 REJECT.

- p2-components | miss0 | REJECT R-a (p2-components miss3 REJECT: measuring resistance taught in p2-current-voltage and p2-series-parallel) | measuring circuit
- p2-components | miss1 | REJECT R-a (p2-components miss4 REJECT: required practical 4 taught in p2-current-voltage) | required practical 4
- p2-components | miss2 | REJECT R-a (p2-components miss0 REJECT: filament lamp taught in p2-current-voltage) | filament lamp resistance
- p2-components | miss3 | REJECT R-a (p2-components miss6 DEFER: circuit diagrams in S4) | circuit diagrams
- p2-components | wron0 | ACCEPT | ohmic conductor definition: "at constant temperature", "potential difference"
- p2-components | wron1 | ACCEPT | "negative voltages" became "negative potential differences" (whole lesson swept)
- p2-components | wron2 | ACCEPT | checkpoint 1 question wording
- p2-components | wron3 | ACCEPT | threshold key term "potential difference"
- p2-current-voltage | miss0 | REJECT R-a (p2-current-voltage miss4 REJECT: LDRs taught in p2-components) | LDR resistance
- p2-current-voltage | miss1 | REJECT R-a (p2-current-voltage miss4 REJECT) | LDR applications
- p2-current-voltage | miss2 | REJECT R-a (p2-current-voltage miss3 REJECT: thermistors taught in p2-components) | thermistor applications
- p2-current-voltage | miss3 | REJECT R-a (p2-current-voltage miss5 REJECT: added in p2-components) | resistance changes with current
- p2-current-voltage | miss4 | REJECT R-a (p2-current-voltage miss6 DEFER: circuit diagrams in S4) | circuit diagram
- p2-current-voltage | miss5 | REJECT R-a (p2-current-voltage miss2 ACCEPT: required practical 3 described, measured not calculated) | series and parallel combinations
- p2-current-voltage | miss6 | REJECT R-a (p2-current-voltage miss8 REJECT: E = Pt taught in p2-power-energy) | E = Pt
- p2-current-voltage | miss7 | REJECT R-a (p2-current-voltage miss12 REJECT: taught in p2-power-energy) | energy depends on time and power
- p2-current-voltage | miss8 | REJECT R-a (p2-current-voltage miss10 REJECT: added in p2-power-energy) | appliance energy transfers
- p2-current-voltage | miss9 | REJECT R-a (p2-current-voltage miss9 REJECT: power taught in p2-power-energy) | power
- p2-current-voltage | miss10 | REJECT R-a (p2-current-voltage miss11 REJECT: added in p2-power-energy) | power ratings
- p2-current-voltage | wron0 | ACCEPT | title "Current and voltage" became "Current and potential difference"
- p2-current-voltage | wron1 | ACCEPT | intro "voltage" became "potential difference" (whole lesson swept)
- p2-domestic | miss0 | ACCEPT | live wire with switch open: explained (still connected to the supply)
- p2-domestic | miss1 | ACCEPT | "the potential difference between the live wire and earth (0 V) is about 230 V"
- p2-domestic | fact0 | ACCEPT | intro: mains is an alternating potential difference of about 230 V
- p2-domestic | fact1 | ACCEPT | neutral: "at, or close to, earth potential (0 V)"; "much safer to touch" cut
- p2-domestic | fact2 | ACCEPT | earth wire carries "most of the fault current" (no fuse or breaker reintroduced, per abov3)
- p2-domestic | wron0 | ACCEPT | live wire key term "potential difference"
- p2-domestic | wron1 | ACCEPT | table header "Voltage" became "Potential difference"
- p2-domestic | wron2 | ACCEPT | intro "voltages that could kill" became "potential differences"
- p2-domestic | wron3 | ACCEPT | "dangerous wire (230 V AC)" became the live–earth potential difference of about 230 V
- p2-domestic | chec0 | ACCEPT | Earthing key point now teaches the open-switch danger its checkpoint tests
- p2-power-energy | fact0 | ACCEPT | tutor note: E = QV is core, not "higher-grade"
- p2-power-energy | fact1 | ACCEPT | table: "higher-grade questions" cut
- p2-power-energy | wron0 | ACCEPT | common mistake "potential difference"
- p2-power-energy | wron1 | ACCEPT | checkpoint 0 feedback "potential difference"
- p2-series-parallel | miss0 | REJECT R-a (p2-series-parallel miss2 DEFER: circuit diagrams in S4) | circuit diagrams
- p2-series-parallel | wron0 | ACCEPT | "full supply voltage" (key point 2 content)
- p2-series-parallel | wron1 | ACCEPT | key point 2 tutor note
- p2-series-parallel | wron2 | ACCEPT | key point 2 write bullet
- p2-series-parallel | wron3 | ACCEPT | household wiring key term
- p2-series-parallel | wron4 | ACCEPT | key point 0 tutor note
- p2-series-parallel | wron5 | ACCEPT | key point 3 tutor note
- p2-series-parallel | wron6 | ACCEPT | table "Potential difference (voltage)" became "Potential difference"
- p2-series-parallel | wron7 | ACCEPT | common mistake "series voltages"
- p2-series-parallel | wron8 | ACCEPT | exam tip
- p2-series-parallel | wron9 | ACCEPT | revision card
- p2-series-parallel | wron10 | ACCEPT | revision card
- p2-series-parallel | wron11 | ACCEPT | revision card
- p2-static | wron0 | ACCEPT | heading "Like and unlike charges" became "Same and different types of charge"
- p2-static | wron1 | ACCEPT | tutor note in spec wording
- p2-static | wron2 | ACCEPT | common mistake in spec wording
- p2-static | wron3 | ACCEPT | heading and key term "Charging by friction" became "Charging by rubbing"

## R4

Run R4: `node tools/spec-check.js --topic P2 --run --max-usd 3` on the R3 fixes. Cost $0.6130. 39 findings: 23 ACCEPT, 16 REJECT.

- p2-components | miss0 | REJECT R-a (p2-components miss3 REJECT) | measuring circuit
- p2-components | miss1 | REJECT R-a (p2-components miss4 REJECT) | required practical 4
- p2-components | miss2 | REJECT R-a (p2-components miss6 DEFER) | circuit diagrams
- p2-components | miss3 | REJECT R-a (p2-components miss5 REJECT: linear and non-linear added in p2-current-voltage) | linear and non-linear
- p2-components | fact0 | ACCEPT | I-V graph axes stated, so "steeper = lower resistance" holds
- p2-current-voltage | miss0 | REJECT R-a (p2-current-voltage miss4 REJECT) | LDR resistance
- p2-current-voltage | miss1 | REJECT R-a (p2-current-voltage miss4 REJECT) | LDR applications
- p2-current-voltage | miss2 | REJECT R-a (p2-current-voltage miss3 REJECT) | thermistor applications
- p2-current-voltage | miss3 | REJECT R-a (p2-current-voltage miss5 REJECT) | resistance changes with current
- p2-current-voltage | miss4 | REJECT R-a (p2-current-voltage miss6 DEFER) | circuit diagram
- p2-current-voltage | miss5 | REJECT R-a (p2-current-voltage miss8 REJECT) | E = Pt
- p2-current-voltage | miss6 | REJECT R-a (p2-current-voltage miss10 REJECT) | appliance energy transfers
- p2-current-voltage | miss7 | REJECT R-a (p2-current-voltage miss9 REJECT) | power
- p2-current-voltage | miss8 | REJECT R-a (p2-current-voltage miss11 REJECT) | power ratings
- p2-current-voltage | miss9 | REJECT R-a (p2-current-voltage miss12 REJECT) | energy depends on time and power
- p2-current-voltage | abov0 | ACCEPT | diode table: forward-threshold wording cut; "current flows in one direction only"
- p2-current-voltage | fact0 | REJECT R-a (R2 p2-current-voltage fact0 ACCEPT: "the resistance of a wire depends on its length and its temperature"; cross-sectional area and material cut by abov6, abov7) | other factors for a wire
- p2-current-voltage | wron0 | ACCEPT | equation given as V = IR (recall form), then rearranged
- p2-domestic | miss0 | ACCEPT | insulation colour coded for easy identification
- p2-domestic | abov0 | ACCEPT | AC versus DC danger tutor note cut
- p2-domestic | abov1 | ACCEPT | neutral row: "less immediately dangerous" cut
- p2-domestic | fact0 | ACCEPT | same tutor note cut (debatable AC/DC claim)
- p2-domestic | wron0 | ACCEPT | key terms "Direct potential difference", "Alternating potential difference"
- p2-power-energy | abov0 | ACCEPT | "Typical values to know" cut everywhere (content, bullet, typical power table)
- p2-power-energy | wron0 | ACCEPT | "mechanical 'work done' idea" became "energy transferred by electrical work"
- p2-series-parallel | miss0 | REJECT R-a (p2-series-parallel miss2 DEFER) | circuit diagrams
- p2-series-parallel | fact0 | ACCEPT | "Both circuit types appear in every paper" cut
- p2-series-parallel | wron0 | ACCEPT | "components" became "resistors" (content)
- p2-series-parallel | wron1 | ACCEPT | same (write bullet)
- p2-series-parallel | wron2 | ACCEPT | same (table)
- p2-series-parallel | chec0 | ACCEPT | checkpoint 4: "vary … in steps"; reversed-diode distractor replaced
- p2-static | wron0 | ACCEPT | Attraction definition in spec wording
- p2-static | wron1 | ACCEPT | Repulsion definition in spec wording
- p2-static | wron2 | ACCEPT | memTip in spec wording
- p2-static | wron3 | ACCEPT | checkpoint 1 correct feedback
- p2-static | wron4 | ACCEPT | checkpoint 1 wrong feedback
- p2-static | wron5 | ACCEPT | table title "Charging by rubbing — summary"
- p2-static | wron6 | ACCEPT | "friction" became "rubbing" throughout the lesson text
- p2-static | wron7 | ACCEPT | Lightning definition: "huge spark"

## R5

Run R5: `node tools/spec-check.js --topic P2 --run --max-usd 3` on the R4 fixes. Cost $0.5773. 34 findings: 17 ACCEPT, 17 REJECT. Not clean. This was run 5 of 5, so the R5 ACCEPTs are applied but not re-checked.

- p2-components | miss0 | REJECT R-a (p2-components miss6 DEFER: circuit diagrams in S4) | draw and interpret circuit diagrams
- p2-components | miss1 | REJECT R-a (p2-components miss3 REJECT) | measuring circuit
- p2-components | miss2 | REJECT R-a (p2-components miss6 DEFER) | circuit symbols
- p2-components | miss3 | REJECT R-a (p2-components miss4 REJECT) | required practical 4
- p2-components | abov0 | ACCEPT | "forward threshold potential difference" cut everywhere in the lesson
- p2-components | fact0 | ACCEPT | thermistor symbol description completed
- p2-components | wron0 | ACCEPT | table: "light intensity"
- p2-current-voltage | miss0 | REJECT R-a (p2-current-voltage miss4 REJECT) | LDR resistance
- p2-current-voltage | miss1 | REJECT R-a (p2-current-voltage miss4 REJECT) | LDR applications
- p2-current-voltage | miss2 | REJECT R-a (p2-current-voltage miss3 REJECT) | thermistor applications
- p2-current-voltage | miss3 | REJECT R-a (p2-current-voltage miss5 REJECT) | resistance changes with current
- p2-current-voltage | miss4 | REJECT R-a (p2-current-voltage miss6 DEFER) | circuit diagram
- p2-current-voltage | miss5 | REJECT R-a (p2-current-voltage miss7 ACCEPT: I-V graphs classified as linear or non-linear) | relate curves to function
- p2-current-voltage | miss6 | REJECT R-a (p2-current-voltage miss8 REJECT) | E = Pt
- p2-current-voltage | miss7 | REJECT R-a (p2-current-voltage miss12 REJECT) | energy depends on time and power
- p2-current-voltage | miss8 | REJECT R-a (p2-current-voltage miss10 REJECT) | appliance energy transfers
- p2-current-voltage | miss9 | REJECT R-a (p2-current-voltage miss9 REJECT) | power
- p2-current-voltage | miss10 | REJECT R-a (p2-current-voltage miss11 REJECT) | power ratings
- p2-current-voltage | abov0 | ACCEPT | ion and electron model cut (content and checkpoint 3 feedback)
- p2-current-voltage | abov1 | ACCEPT | meter resistance cut from ammeter and voltmeter key terms
- p2-current-voltage | fact0 | REJECT R-a (R2 p2-current-voltage fact0 ACCEPT: "the resistance of a wire depends on its length and its temperature") | other factors for a wire
- p2-domestic | abov0 | ACCEPT | "reverses direction 100 times every second" cut; checkpoint 0 reworded
- p2-domestic | fact0 | ACCEPT | checkpoint 2 feedback: potential difference between the live wire and earth
- p2-domestic | wron0 | ACCEPT | heading "The three-pin plug" became "Three-core cable" (also introTips, live wire key term)
- p2-domestic | wron1 | ACCEPT | table title "three-core cable"
- p2-domestic | wron2 | ACCEPT | checkpoint 1 "in three-core cable"
- p2-power-energy | miss0 | ACCEPT | second power-rating example: an electric motor's kinetic store
- p2-power-energy | wron0 | ACCEPT | intro: "energy is transferred by electrical work"
- p2-power-energy | chec0 | ACCEPT | checkpoint 2 replaced: Q = It then E = QV, new numbers
- p2-series-parallel | miss0 | REJECT R-a (p2-series-parallel miss2 DEFER) | circuit diagrams
- p2-static | fact0 | ACCEPT | lightning: to another cloud or to the ground
- p2-static | wron0 | ACCEPT | write bullet "same type of charge"
- p2-static | wron1 | ACCEPT | write bullet "different types of charge"
- p2-static | wron2 | ACCEPT | key term "Conservation of charge" became "Equal positive charge"
