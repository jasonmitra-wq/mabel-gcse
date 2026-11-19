# Widget candidates for the 17 scripted lessons

Brief docs/briefs/2026-11-18-shared-script-fixes.md, step 3, 2026-11-19. One interactive per lesson, the one that
would help most, tied to a misconception (M ids, tools/pilot/misconceptions.md) or an examiner-named error (E ids,
data/exam/*-outcomes.md, local). Nothing here is built: the planning chat decides. The script reviews of P2, P1 and
P3 all raised the same point (P14, M1): long runs of telling and tapping Next, with nothing to try.

Widgets that exist today (js/widgets/widgets.js): `circuit` (cells, lamp, resistor, switch, meters, predict-first),
`sensor` (thermistor and LDR against temperature and light), `iv-graph`. "Reuse" below means one of these with new
options; "new" means a new widget type.

| Lesson | Widget | What she does | What she sees | Why (misconception or exam skill) |
|---|---|---|---|---|
| p2-current-voltage | Reuse `circuit`: ammeter anywhere in a series loop | Predicts, then drags the ammeter to three places in the loop | The same reading everywhere | M2 (current used up), M4 (sequential reasoning) |
| p2-components | Reuse `sensor`: thermistor in a potential divider | Moves the temperature slider and predicts the lamp | Resistance falls as it warms, the current and lamp rise | Exam skill: explain a sensor circuit; resistance read off a graph |
| p2-series-parallel | Reuse `circuit` with a parallel branch | Adds a second lamp in series, then in parallel, predicting the brightness each time | Series: both dimmer, current down; parallel: same brightness, total current up | M5 (a battery gives a fixed current); E: "adding a resistor in parallel raises the resistance" |
| p2-domestic | New: three-pin plug and lamp fault | Touches live, neutral and earth with the switch on and off; then a live wire touching the metal case | Which wire is at 230 V; the fuse blowing when the case is earthed | E: live wire dangerous with the switch open; wire colours (42% and 48% right) |
| p2-power-energy | New: appliance timer | Chooses an appliance (power) and a time | The energy in J and kWh, with the minutes-to-seconds and kW-to-W steps shown | E: E = P t with time or power not converted (8% full marks, 1F-JUN24 7.5) |
| p2-static | New: rub and charge | Rubs a polythene or acetate rod with a cloth, then brings it near another rod | Electrons move to or from the cloth; attraction or repulsion | M22 (touching a charged dome gives the opposite charge); which way electrons move |
| p1-energy-stores | New: energy bar chart for an event | Steps a ball through throw, top and catch | The kinetic, gravitational potential and thermal bars change; the total bar stays the same | M23, M24 (energy used up; disappears at the top); E50 (name the store AND how it changes) |
| p1-kinetic-potential | New: drop height slider | Sets the height and mass of a dropped ball | Ep at the top, Ek at the bottom, v from ½ m v² = m g h, with v squared shown | E46 (v or e not squared), E47 (cm and g not converted) |
| p1-conservation | New: insulated house | Adds loft insulation, cavity wall and thicker walls one at a time | The rate of energy loss falls; the heating bill falls | E57 (lubrication "rotates faster"), E60 (conductivity answered as "good insulator") |
| p1-efficiency | New: Sankey builder | Drags the useful and wasted arrow widths for a lamp, kettle or motor | The efficiency as a decimal and a percentage; it can never pass 1 | E55 (×100 when a decimal is asked), E56 ("saves energy") |
| p1-power | New: two kettles race | Picks two powers and runs both on the same water | The same energy, different times; P = E ÷ t worked live | M29 (power and energy the same) |
| p1-heating | New: heating curve for water | Sets the mass and heater power, presses start | Temperature against time; Δθ marked between two times | E51 (final temperature used for the change), E53 (why wait for the reading) |
| p1-national-grid | New: transmission line | Changes the transmission potential difference | The current and the energy heating the cables fall as the pd rises | E64, E66; why step-up transformers are used |
| p3-particle-model | New: particles in a box | Heats or cools the box, watching solid, liquid and gas | Vibrating in place, sliding, flying apart; the temperature holds during each change of state | M32 (solid particles do not move), M36 (temperature rises while melting), E74 |
| p3-density | New: displacement measuring cylinder | Lowers a stone into a cylinder and reads the level before and after (eye level matters) | The rise is the volume; reading from above gives a wrong value | E69 (mean of two readings), E72 (random error, eye level), M35 (heavy sinks) |
| p3-changes-of-state | New: heating curve for ice to steam | Heats steadily and pauses at each flat part | Flat parts at 0 °C and 100 °C; a bar for kinetic and a bar for potential energy | E74 (kinetic said to rise while melting), E76 (latent heat and specific heat capacity mixed up) |
| p3-pressure | New: gas in a syringe | Pushes the plunger in or heats the gas | Collision counter on the walls each second, particle speed, p × V | E78 (collisions with each other, not the walls; "per second" missing), E79, M37 |

If only one can be built first: the particles-in-a-box widget (p3-particle-model) would also serve p3-changes-of-state
and p3-pressure with different controls, and the energy bar chart (p1-energy-stores) would serve p1-kinetic-potential
and p1-conservation.
