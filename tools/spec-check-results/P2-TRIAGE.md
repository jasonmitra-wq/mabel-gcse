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
