# Physics spec-check run — 2026-10-16

`node tools/spec-check.js --subject physics --run --max-usd 13`, model claude-opus-5-5, max_tokens 16000.
Findings are recorded as the model returned them: not judged, filtered or fixed. Per-lesson JSON is in this folder.

Failed calls in the run: p5-gravity (re-run once on its own; the table shows the re-run).

## Results

| lesson | status | stop_reason | missing_spec_content | above_gcse | factual_errors (spec / own knowledge) | wrong_terms | checkpoint_mismatch | output tokens | cost |
|---|---|---|---|---|---|---|---|---|---|
| p1-energy-stores | OK | end_turn | 9 | 0 | 11 (0 / 11) | 2 | 1 | 6841 | $0.1727 |
| p1-kinetic-potential | OK | end_turn | 4 | 0 | 5 (5 / 0) | 9 | 0 | 3987 | $0.1092 |
| p1-conservation | OK | end_turn | 4 | 4 | 4 (1 / 3) | 3 | 2 | 4628 | $0.1211 |
| p1-efficiency | OK | end_turn | 0 | 5 | 6 (1 / 5) | 3 | 1 | 4652 | $0.1208 |
| p1-power | OK | end_turn | 5 | 5 | 3 (0 / 3) | 5 | 0 | 4495 | $0.1153 |
| p1-heating | OK | end_turn | 3 | 4 | 4 (0 / 4) | 4 | 1 | 6087 | $0.1537 |
| p1-national-grid | OK | end_turn | 5 | 8 | 3 (0 / 3) | 5 | 1 | 6749 | $0.1697 |
| p2-current-voltage | OK | end_turn | 13 | 8 | 7 (3 / 4) | 6 | 0 | 7835 | $0.1939 |
| p2-series-parallel | OK | end_turn | 3 | 11 | 3 (2 / 1) | 5 | 3 | 5889 | $0.1503 |
| p2-components | OK | end_turn | 7 | 10 | 9 (3 / 6) | 6 | 1 | 6908 | $0.1708 |
| p2-domestic | OK | end_turn | 4 | 6 | 3 (0 / 3) | 6 | 4 | 5521 | $0.1443 |
| p2-power-energy | OK | end_turn | 3 | 4 | 3 (0 / 3) | 5 | 3 | 4692 | $0.1285 |
| p2-static | OK | end_turn | 2 | 7 | 5 (1 / 4) | 3 | 1 | 6852 | $0.1708 |
| p3-particle-model | OK | end_turn | 6 | 3 | 5 (2 / 3) | 2 | 0 | 4885 | $0.1282 |
| p3-density | OK | end_turn | 4 | 7 | 4 (0 / 4) | 2 | 0 | 5375 | $0.1380 |
| p3-changes-of-state | OK | end_turn | 5 | 3 | 1 (0 / 1) | 5 | 0 | 5081 | $0.1329 |
| p3-pressure | OK | end_turn | 3 | 10 | 2 (0 / 2) | 3 | 1 | 5080 | $0.1286 |
| p4-nuclear-model | OK | end_turn | 9 | 6 | 6 (2 / 4) | 4 | 1 | 6256 | $0.1569 |
| p4-radioactivity | OK | end_turn | 8 | 6 | 1 (0 / 1) | 2 | 1 | 4507 | $0.1206 |
| p4-half-life | OK | end_turn | 9 | 5 | 7 (1 / 6) | 0 | 2 | 6994 | $0.1709 |
| p4-nuclear-fission | OK | end_turn | 4 | 9 | 3 (0 / 3) | 3 | 1 | 6075 | $0.1526 |
| p5-forces-motion | OK | end_turn | 15 | 4 | 1 (0 / 1) | 6 | 3 | 6751 | $0.1734 |
| p5-newtons-laws | OK | end_turn | 12 | 3 | 2 (2 / 0) | 3 | 1 | 6156 | $0.1556 |
| p5-stopping-distance | OK | end_turn | 7 | 4 | 5 (2 / 3) | 3 | 2 | 5518 | $0.1396 |
| p5-momentum | OK | end_turn | 2 | 2 | 3 (2 / 1) | 2 | 1 | 4095 | $0.1031 |
| p5-gravity | OK | end_turn | 6 | 6 | 3 (1 / 2) | 0 | 1 | 4550 | $0.1128 |
| p6-wave-properties | OK | end_turn | 9 | 3 | 3 (0 / 3) | 4 | 1 | 5878 | $0.1480 |
| p6-em-spectrum | OK | end_turn | 17 | 5 | 8 (3 / 5) | 3 | 2 | 8569 | $0.2042 |
| p6-light | OK | end_turn | 17 | 4 | 2 (0 / 2) | 3 | 1 | 5333 | $0.1379 |
| p6-sound | OK | end_turn | 12 | 6 | 4 (2 / 2) | 2 | 1 | 5774 | $0.1453 |
| p7-magnets | OK | end_turn | 8 | 5 | 6 (0 / 6) | 3 | 1 | 6836 | $0.1710 |
| p7-motor-effect | OK | end_turn | 4 | 3 | 3 (1 / 2) | 3 | 2 | 4556 | $0.1167 |
| p7-induction | OK | end_turn | 5 | 2 | 5 (2 / 3) | 4 | 2 | 4252 | $0.1115 |
| p7-transformers | OK | end_turn | 3 | 2 | 0 (0 / 0) | 5 | 0 | 3481 | $0.0986 |
| **Total (34)** | 34 OK, 0 FAILED | | 227 | 170 | 140 (36 / 104) | 124 | 42 | 191138 | $4.8676 |

Total actual cost of the run: $4.9973 across 35 API calls (the table's cost column counts only the result kept for each lesson; this total includes the failed call).

## Every factual_errors finding

### p1-energy-stores

1. **field:** keyPoints[4].content  
   **text:** One wide arrow = useful energy output. One or more thinner arrows = wasted energy, usually pointing down.  
   **correction:** The useful output arrow is not always the widest. Its width depends on how much energy is useful. For an inefficient device, such as the lesson's own bulb (15 J light from 100 J), the useful arrow is narrower than the wasted arrow.  
   **basis:** own knowledge

2. **field:** keyPoints[4].writeBullets[2]  
   **text:** Wide right arrow = useful output. Thin arrow(s) = wasted energy  
   **correction:** Arrow width shows the amount of energy, not whether it is useful. A wasted-energy arrow can be wider than the useful arrow.  
   **basis:** own knowledge

3. **field:** tables[0].rows[6][3]  
   **text:** Objects become more charged or move further apart  
   **correction:** Moving charged objects further apart increases the electrostatic store only for opposite (attracting) charges. For like (repelling) charges, the store decreases as they move apart. The lesson draws this distinction correctly for magnets but not here.  
   **basis:** own knowledge

4. **field:** keyPoints[1].content  
   **text:** <strong>By heating</strong>: energy flows from a hotter object to a cooler one (conduction, convection, radiation).  
   **correction:** Radiation is then listed as a separate fourth pathway ('By radiation: by electromagnetic waves (light, infrared)...'). Listing radiation under heating as well makes the four pathways overlap. Transfer by infrared radiation belongs to the radiation pathway. Heating, as used here, should be conduction and convection.  
   **basis:** own knowledge

5. **field:** keyPoints[1].keyTerms[2].def  
   **text:** Energy transferred from a hotter object to a cooler one by conduction, convection, or radiation  
   **correction:** This repeats the overlap with the separate 'Radiation' pathway. Radiation should not appear under both heating and radiation.  
   **basis:** own knowledge

6. **field:** keyPoints[0].content  
   **text:** <strong>Thermal</strong>: any object with heat.  
   **correction:** Heat is energy being transferred, not something an object holds. The thermal store depends on an object's temperature (and mass and material). Every object has energy in its thermal store, not only hot ones.  
   **basis:** own knowledge

7. **field:** keyPoints[0].writeBullets[3]  
   **text:** Thermal — any object with heat energy  
   **correction:** Objects do not hold 'heat energy'. They have energy in a thermal store, which is linked to temperature. Heating is a transfer pathway.  
   **basis:** own knowledge

8. **field:** keyPoints[2].content  
   **text:** Then it becomes sound and thermal energy when the book hits the floor.  
   **correction:** Sound is not an energy store, and it is not on the lesson's own list of eight stores. Energy is transferred by sound waves, which the lesson counts as radiation, and ends up in the thermal store of the floor and surroundings.  
   **basis:** own knowledge

9. **field:** keyPoints[2].writeBullets[3]  
   **text:** Example: a falling book. Gravitational potential → kinetic → thermal + sound on impact  
   **correction:** Sound is a way energy is transferred, not a store. Energy goes from the kinetic store to the thermal store of the surroundings, partly transferred by sound waves.  
   **basis:** own knowledge

10. **field:** keyPoints[3].content  
   **text:** In any real energy transfer, some energy ends up in a store that is no use. ... But some becomes sound (engine noise).  
   **correction:** Sound is not a store. Engine noise transfers energy by sound waves, which ends up in the thermal store of the surroundings.  
   **basis:** own knowledge

11. **field:** keyPoints[3].writeBullets[4]  
   **text:** Example: a light bulb. Electrical → light (useful) + thermal (wasted)  
   **correction:** Neither 'electrical' nor 'light' is one of the lesson's eight stores. Energy is transferred electrically to the bulb. It is then transferred usefully by light (radiation), and the rest is dissipated to the thermal store of the surroundings.  
   **basis:** own knowledge

### p1-kinetic-potential

1. **field:** keyPoints[1].content  
   **text:** It is 9.8 N/kg on Earth. Use 10 in non-calculator questions unless told otherwise  
   **correction:** The specification states that in any calculation the value of g will be given. The student should use the value the question provides. There is no 'non-calculator' rule for choosing g.  
   **basis:** spec

2. **field:** commonMistakes[1]  
   **text:** g = 9.8 N/kg is the standard value. Only use g = 10 N/kg when the question says 'non-calculator' or tells you to use 10.  
   **correction:** The specification says: 'In any calculation the value of the gravitational field strength (g) will be given'. Students should always use the value stated in the question.  
   **basis:** spec

3. **field:** keyPoints[1].writeBullets[1]  
   **text:** g = 9.8 N/kg (use 10 in non-calculator)  
   **correction:** The value of g is always given in the question. Use the value provided.  
   **basis:** spec

4. **field:** keyPoints[1].keyTerms[1].def  
   **text:** g = 9.8 N/kg on Earth's surface (use 10 N/kg in non-calculator questions unless told otherwise)  
   **correction:** The value of g is always given in the question. Use the value provided.  
   **basis:** spec

5. **field:** revisionCardBullets[2]  
   **text:** g = 9.8 N/kg (use 10 for non-calculator)  
   **correction:** The value of g is always given in the question. Use the value provided.  
   **basis:** spec

### p1-conservation

1. **field:** keyPoints[2].writeBullets[2]  
   **text:** Electrical resistance — the property of a material that turns electrical energy into heat  
   **correction:** Resistance is opposition to the flow of current (R = V/I). Heating of a resistor is a consequence of current flowing through it, not the definition of resistance.  
   **basis:** own knowledge

2. **field:** tables[0].rows[2][4]  
   **text:** Better conductors, cooling  
   **correction:** Cooling a motor does not reduce the energy wasted. It only removes the thermal energy after it has already been dissipated. Wasted energy is reduced by lowering resistance (for example, better conductors) and by reducing friction (for example, lubricating bearings).  
   **basis:** own knowledge

3. **field:** examTip  
   **text:** Energy is never created or destroyed. It is always transferred.  
   **correction:** Energy can be transferred usefully, stored or dissipated. It is not always transferred: it can also remain stored.  
   **basis:** spec

4. **field:** keyPoints[0].content  
   **text:** On every impact, some energy goes to the thermal store of the ball, floor and air. It goes as sound and heat.  
   **correction:** Sound is not a store. Energy is transferred by sound waves and then ends up in the thermal store of the surroundings. As written, this suggests energy enters the thermal store 'as sound'.  
   **basis:** own knowledge

### p1-efficiency

1. **field:** intro  
   **text:** Imagine you pay for 100 units of electricity and only get 25 units of useful motion. That is a petrol car engine.  
   **correction:** A petrol engine is supplied with chemical energy from fuel, not electricity. The example should say something like '100 units of energy from fuel'.  
   **basis:** own knowledge

2. **field:** keyPoints[1].content  
   **text:** a petrol car engine has an input power of 100 kW. It gives out 25 kW of kinetic energy  
   **correction:** Kilowatts measure power, not energy. It should say 'a useful power output of 25 kW'. This matches the spec's 'efficiency = useful power output / total power input'.  
   **basis:** spec

3. **field:** keyPoints[2].content  
   **text:** <strong>Fluorescent tubes</strong>: ~70–80% efficient.  
   **correction:** Fluorescent tubes transfer only about 20–30% of their electrical input as visible light. A figure of 70–80% is far too high. The same error appears as '~75% (0.75)' in tables[0].  
   **basis:** own knowledge

4. **field:** keyPoints[2].content  
   **text:** <strong>LED bulbs</strong>: ~90% efficient (electrical → light). Excellent.  
   **correction:** Typical LED lamps transfer roughly 30–50% of their electrical input as light. They are far better than filament bulbs (about 5%), but ~90% overstates them. The same figure is repeated in intro, tables[0], checkpoints['1'] and revisionCardBullets.  
   **basis:** own knowledge

5. **field:** keyPoints[0].content  
   **text:** No real machine is 100% efficient. Some energy is always wasted, usually as thermal energy (heat) or sound.  
   **correction:** Efficiency depends on which output counts as useful. An electric heater, where the thermal output is the useful output, is close to 100% efficient. Most devices waste some energy, but the blanket statement is not true for every device.  
   **basis:** own knowledge

6. **field:** tables[0].rows[6]  
   **text:** Thermal (reflected/absorbed)  
   **correction:** Light that is reflected stays as light (radiation). It is not transferred to a thermal store. Only absorbed light that is not converted to electricity heats the panel.  
   **basis:** own knowledge

### p1-power

1. **field:** keyPoints[1].memTip  
   **text:** Triangle trick: put P at the top, and E and t at the bottom.  
   **correction:** Because P = E/t (so E = P × t), E goes at the top of the triangle and P and t go at the bottom. With P at the top, covering P would give E × t, which is wrong.  
   **basis:** own knowledge

2. **field:** keyPoints[2].content  
   **text:** A professional Tour de France cyclist can keep up about 400 W for an hour. That is impressive, but far less than even a small electric motor.  
   **correction:** Many small electric motors (toys, fans, small appliances) are rated well below 400 W. 400 W is not 'far less than even a small electric motor'.  
   **basis:** own knowledge

3. **field:** keyPoints[0].content  
   **text:** But the crane that does it in 5 seconds has <strong>four times</strong> the power. P = E/t, so for the same E, halving t doubles P.  
   **correction:** The 'four times' figure is correct, because the time is divided by 4 (20 s to 5 s). The explanation given, 'halving t doubles P', does not explain a factor of four. Dividing t by 4 multiplies P by 4.  
   **basis:** own knowledge

### p1-heating

1. **field:** intro  
   **text:** A metal spoon left in soup gets scorching hot. So why does the soup stay drinkable?  
   **correction:** A spoon heated only by the soup cannot become hotter than the soup. At most it reaches the soup's temperature. The spoon feels hot because metal is a good thermal conductor and transfers energy to your hand quickly, not because it is hotter than the soup.  
   **basis:** own knowledge

2. **field:** examTips[0]  
   **text:** If an object cools, Δθ is still positive, because it is the size of the change.  
   **correction:** This contradicts the lesson's own definition "Δθ = final temperature − initial temperature" (keyPoints[0].writeBullets[2]). By that definition Δθ is negative when an object cools, so ΔE is negative (energy released). If the size of the change is wanted, the lesson should say to use the magnitude of the change.  
   **basis:** own knowledge

3. **field:** tables[0].rows[1][2]  
   **text:** Low SHC — heats and cools quickly; used in engine parts and cookware  
   **correction:** At 900 J/kg°C, aluminium has a high specific heat capacity for a metal. It is double iron/steel's 450, which the table calls "Moderate", and similar to concrete's 880, which the table calls "Useful thermal mass". Aluminium cookware heats quickly mainly because of its high thermal conductivity and thin construction, not a low SHC.  
   **basis:** own knowledge

4. **field:** keyPoints[2].writeBullets[3]  
   **text:** Error: heat loss to the surroundings makes the measured c too high (more energy needed than calculated)  
   **correction:** The reason in brackets is muddled. Heat loss means the measured energy supplied is more than the energy actually transferred to the sample. Using that larger energy in c = E/(mΔθ) gives a value of c that is too high.  
   **basis:** own knowledge

### p1-national-grid

1. **field:** keyPoints[3].content  
   **text:** But it is <strong>intermittent</strong>, and only works when it is sunny.  
   **correction:** Solar PV works in any daylight, including cloudy conditions, though output is lower. It produces nothing at night. The lesson's own table correctly says 'Only works in daylight'.  
   **basis:** own knowledge

2. **field:** keyPoints[3].content  
   **text:** UK energy mix (approximate 2023): ~40% renewables (mainly offshore wind), ~40% gas, ~15% nuclear, and the rest other.  
   **correction:** UK government (DESNZ) figures for 2023 electricity generation are about 46–47% renewables, about 34–35% gas and about 14% nuclear. Wind as a whole, onshore and offshore together, was the largest renewable share. Calling renewables 'mainly offshore wind' overstates offshore wind's share.  
   **basis:** own knowledge

3. **field:** revisionCardBullets[11]  
   **text:** UK mix (~2023): ~40% renewables, ~40% gas, ~15% nuclear  
   **correction:** This repeats the inaccurate figures. The 2023 figures are about 47% renewables, about 35% gas and about 14% nuclear.  
   **basis:** own knowledge

### p2-current-voltage

1. **field:** keyPoints[2].content  
   **text:** The equation linking the three is <strong>R = V/I</strong>, often called <strong>Ohm's law</strong>.  
   **correction:** R = V/I (V = IR) defines resistance and applies to any component, including lamps and diodes. Ohm's law is the separate statement that current is directly proportional to potential difference for an ohmic conductor at constant temperature. Calling R = V/I Ohm's law contradicts examTips[4], which says not to apply Ohm's law to lamps. Checkpoint 2 correctly applies R = V/I to a lamp.  
   **basis:** own knowledge

2. **field:** keyPoints[1].keyTerms[2].def  
   **text:** The p.d. measured across the battery terminals in a working circuit — always less than EMF  
   **correction:** Terminal p.d. equals the EMF when no current flows. It can exceed the EMF when the battery is being charged. It is not always less.  
   **basis:** own knowledge

3. **field:** keyPoints[4].content  
   **text:** These are usually a resistor and a filament lamp, and sometimes a diode.  
   **correction:** Required practical 4 must include a filament lamp, a diode and a resistor at constant temperature. The diode is required, not optional.  
   **basis:** spec

4. **field:** revisionCardBullets[11]  
   **text:** Resistance increases with: greater length, smaller cross-section, higher temperature  
   **correction:** Resistance rises with temperature only for metals, such as a filament. The resistance of a thermistor decreases as temperature increases.  
   **basis:** spec

5. **field:** keyPoints[3].writeBullets[5]  
   **text:** Resistance from an I-V graph — find the gradient (I/V) and take its reciprocal. Or read off V and I and use R = V/I  
   **correction:** The reciprocal of the gradient gives resistance only for a straight line through the origin. For curved graphs such as the lamp or diode, resistance at a point is V/I at that point, not the reciprocal of the tangent gradient.  
   **basis:** own knowledge

6. **field:** tables[0].rows[2][1]  
   **text:** zero current in reverse bias  
   **correction:** In the reverse direction the diode has a very high resistance, so the current is very small but not exactly zero. The lesson's own commonMistakes[4] says this.  
   **basis:** spec

7. **field:** keyPoints[1].memTip  
   **text:** V = W/Q: 'Voltage is Watts per Queue'. Energy ÷ charge.  
   **correction:** W here stands for energy (work done) in joules, not watts. Watts are units of power, so the mnemonic links the symbol to the wrong quantity.  
   **basis:** own knowledge

### p2-series-parallel

1. **field:** examTip  
   **text:** Two favourites keep coming back. One is the parallel resistance formula (1/Rtotal = 1/R1 + 1/R2).  
   **correction:** The spec states 'Students are not required to calculate the total resistance of two resistors joined in parallel', so this formula is not an assessed favourite at this level.  
   **basis:** spec

2. **field:** keyPoints[1].content  
   **text:** the <strong>potential difference is the same across every branch</strong>, and equals the supply voltage  
   **correction:** The spec says 'the potential difference across each component is the same'. The p.d. across parallel branches equals the supply p.d. only when the branches are connected directly across the supply. The lesson's own mixed-circuit example in keyPoints[3] has 6 V across the parallel section from a 12 V supply. The same overgeneralisation appears in keyPoints[1].writeBullets[1] '(equals the supply voltage)' and in tables[0].rows[1][2] 'Same across every branch — equals supply voltage'.  
   **basis:** spec

3. **field:** keyPoints[2].content  
   **text:** Modern sets wire bulbs in parallel, so each has its own branch.  
   **correction:** This is an overgeneralisation. Many modern light strings use series or series–parallel strings, often with shunted bulbs or LED drivers. Not all modern sets are fully parallel.  
   **basis:** own knowledge

### p2-components

1. **field:** keyPoints[0].content  
   **text:** A <strong>fixed resistor</strong> has a constant resistance, whatever the temperature, light or other conditions.  
   **correction:** Current through an ohmic conductor is proportional to potential difference only at a constant temperature. A resistor's resistance can change if its temperature changes.  
   **basis:** spec

2. **field:** keyPoints[0].writeBullets[0]  
   **text:** Fixed resistor — resistance stays the same at all voltages and temperatures  
   **correction:** Resistance is constant only at constant temperature ('at a constant temperature' in the spec).  
   **basis:** spec

3. **field:** keyPoints[0].content  
   **text:** It follows <strong>Ohm's Law</strong>: V = IR.  
   **correction:** V = IR defines resistance and applies to any component. Ohm's law is the statement that current is directly proportional to potential difference at constant temperature.  
   **basis:** own knowledge

4. **field:** keyPoints[0].writeBullets[2]  
   **text:** Ohm's Law — V = IR. Current is proportional to voltage for ohmic conductors  
   **correction:** V = IR is the resistance relationship for all components, not Ohm's law itself.  
   **basis:** own knowledge

5. **field:** tables[1].rows[3]  
   **text:** Different straight lines for different light levels / Each light level gives different (constant) resistance  
   **correction:** The spec states that the resistance of LDRs 'is not constant; it changes with the current through the component'.  
   **basis:** spec

6. **field:** tables[0].rows[2]  
   **text:** Very low (forward) / very high (reverse)  
   **correction:** In the forward direction a diode's resistance is high below the threshold and becomes low only once the threshold is passed. Its resistance changes with current.  
   **basis:** own knowledge

7. **field:** keyPoints[3].content  
   **text:** Key rule: the <strong>LDR and the thermistor are inverse components</strong>.  
   **correction:** Resistance decreases as light intensity or temperature increases, but the relationship is non-linear. It is not an inverse proportion, which is what 'inverse' suggests.  
   **basis:** own knowledge

8. **field:** keyPoints[2].writeBullets[5]  
   **text:** Graph: resistance vs light intensity is a downward curve (inverse relationship)  
   **correction:** Resistance decreases non-linearly with light intensity. It is not inversely proportional.  
   **basis:** own knowledge

9. **field:** checkpoints.0.wrongFeedback  
   **text:** Ohm's Law is a division here.  
   **correction:** R = V ÷ I is the definition of resistance, not Ohm's law.  
   **basis:** own knowledge

### p2-domestic

1. **field:** keyPoints[2].tutor_note  
   **text:** The rating is the current at which the fuse blows, not the current it allows.  
   **correction:** A fuse's rating is the largest current it can carry normally without blowing. It blows when the current goes significantly above this value. The note also contradicts the lesson's own definition in keyPoints[2].keyTerms[0].def: "The maximum current (in amps) a fuse can carry before it melts".  
   **basis:** own knowledge

2. **field:** keyPoints[3].content  
   **text:** <strong>Double insulation</strong> is used for appliances with fully plastic casings. ... The casing is plastic, which is an insulator. So the live wire cannot make the casing dangerous, and no earth wire is needed.  
   **correction:** Double insulation means the live parts are separated from the user by two independent layers of insulation, often insulated wiring plus an insulating casing. It is not just having a plastic casing. Some double-insulated appliances have metal parts that the user can touch, but these are insulated from the live parts.  
   **basis:** own knowledge

3. **field:** keyPoints[3].memTip  
   **text:** Double insulated = nothing to earth (no metal casing).  
   **correction:** Double-insulated appliances can have metal parts. No earth is needed because two layers of insulation separate the live parts from anything the user can touch, not because there is no metal at all.  
   **basis:** own knowledge

### p2-power-energy

1. **field:** keyPoints[2].content  
   **text:** use appliances at off-peak times  
   **correction:** This is listed under "Ways to save energy", but using appliances off-peak does not reduce the energy transferred. It may reduce cost on some tariffs only.  
   **basis:** own knowledge

2. **field:** tables[1].rows[6]  
   **text:** 13 A (dedicated circuit)  
   **correction:** An 8–10 kW shower on 230 V draws about 35–45 A. It is protected by a breaker of roughly 40–45 A on a dedicated circuit, not by a 13 A fuse.  
   **basis:** own knowledge

3. **field:** keyPoints[3].content  
   **text:** <strong>V = IR</strong> (Ohm's Law: voltage = current × resistance)  
   **correction:** V = IR relates potential difference, current and resistance for any component. Ohm's law is the statement that current is directly proportional to potential difference for an ohmic conductor at constant temperature. Calling V = IR "Ohm's Law" is imprecise. The same label appears in tables[0].rows[0] and keyPoints[3].writeBullets[0].  
   **basis:** own knowledge

### p2-static

1. **field:** keyPoints[0].content  
   **text:** <strong>Charge is conserved</strong>: the amount of negative charge gained equals the positive charge lost.  
   **correction:** One material gains negative charge (electrons). The other loses those electrons and is left with an equal positive charge. No positive charge is "lost". The spec says: "The material that loses electrons is left with an equal positive charge."  
   **basis:** spec

2. **field:** keyPoints[0].content  
   **text:** Static electricity only builds up on <strong>insulators</strong>. Conductors let charge flow away.  
   **correction:** A conductor can hold static charge if it is insulated from the ground. Examples are a person in rubber-soled shoes, a Van de Graaff dome, a fuel tanker or an aircraft. The lesson itself says metal tankers and aircraft build up charge, which contradicts this statement. Conductors lose their charge only when connected to earth.  
   **basis:** own knowledge

3. **field:** intro  
   **text:** In both cases, charge builds up on an insulating surface until it suddenly discharges.  
   **correction:** In the carpet and door-handle shock, the charge builds up on your body. Your body is a conductor, insulated from the ground by your shoes. In lightning, the charge is in the cloud. Neither case is simply "an insulating surface".  
   **basis:** own knowledge

4. **field:** keyPoints[3].content  
   **text:** The car body is earthed (opposite charge), so it attracts all the droplets.  
   **correction:** Earthing does not give the car body an opposite charge. An earthed body stays at zero potential, and an opposite charge is induced on it as the charged droplets approach. Some systems give the body an opposite charge directly. Treating "earthed" and "opposite charge" as the same thing is wrong. The same error appears in checkpoints[3].wrongFeedback: "The car body (earthed, opposite charge) then attracts them all."  
   **basis:** own knowledge

5. **field:** keyPoints[3].content  
   **text:** <strong>Photocopiers (laser printers)</strong>: a drum is charged. Laser light removes charge from areas that should stay white.  
   **correction:** Photocopiers and laser printers are different devices. In a traditional photocopier, light reflected from the white parts of the original (usually not a laser) discharges the drum. In a laser printer, the laser usually discharges the areas where toner should go, and toner of the same charge sticks to those discharged areas. The lesson's single description is correct for neither device as stated.  
   **basis:** own knowledge

### p3-particle-model

1. **field:** keyPoints[3].content  
   **text:** The model shows no forces between particles  
   **correction:** The particle model used at GCSE does include forces of attraction between particles. The lesson itself relies on them in keyPoints[0] ('strong forces of attraction between particles') and keyPoints[1] ('particles gain potential energy ... forces of attraction ... are overcome'). Internal energy includes potential energy, which only makes sense if there are forces between particles. So this 'limitation' is wrong and contradicts the rest of the lesson.  
   **basis:** spec

2. **field:** revisionCardBullets[10]  
   **text:** Particle model limitations: particles shown as identical solid spheres, with no forces between them  
   **correction:** Same error as above. The model includes attractive forces between particles, and internal energy includes the potential energy that comes from those forces.  
   **basis:** spec

3. **field:** tables[0].rows[3]  
   **text:** Kinetic energy | Low | Medium | High  
   **correction:** The average kinetic energy of particles depends on temperature, not on state. Ice and water at 0 °C have the same average particle kinetic energy. The difference between states is potential energy and arrangement. The lesson itself says kinetic energy does not change during melting.  
   **basis:** own knowledge

4. **field:** keyPoints[2].content  
   **text:** KEY POINT: temperature stays constant during any change of state.  
   **correction:** This holds for a pure substance being heated or cooled at its melting or boiling point. It does not hold for evaporation, which happens 'at ANY temperature' and usually cools the remaining liquid. It also does not hold for mixtures, which change state over a range of temperatures.  
   **basis:** own knowledge

5. **field:** tables[0].rows[7]  
   **text:** High (slightly less than solid)  
   **correction:** This is true for most substances, but water is a common exception: ice is less dense than liquid water. It should be stated as 'usually'.  
   **basis:** own knowledge

### p3-density

1. **field:** keyPoints[2].writeBullets[2]  
   **text:** Volume of displaced water = volume of the irregular object (Archimedes' principle)  
   **correction:** Archimedes' principle says that the upthrust on an object equals the weight of fluid it displaces. The fact that a fully submerged object displaces its own volume of water is simply the displacement method. It should not be labelled Archimedes' principle.  
   **basis:** own knowledge

2. **field:** intro  
   **text:** It explains why the air gets thinner the higher you go.  
   **correction:** "Thinner" air is lower-density air, so density describes the effect rather than explaining it. Air is less dense higher up because there is less air above pressing down on it, so the pressure is lower.  
   **basis:** own knowledge

3. **field:** keyPoints[3].writeBullets[5]  
   **text:** Liquid to gas density ratio: typically ~1000:1. For example, water and water vapour  
   **correction:** At 100 °C and atmospheric pressure, liquid water (about 958 kg/m³) is roughly 1600 times denser than steam (about 0.6 kg/m³). The ratio is roughly 1000:1 or more. Using water as the example of exactly ~1000:1 is inaccurate.  
   **basis:** own knowledge

4. **field:** checkpoints.2.wrongFeedback  
   **text:** A eureka can or measuring cylinder gives you the volume directly.  
   **correction:** A eureka can does not give a volume reading. The displaced water has to be collected and measured in a measuring cylinder, as keyPoints[2].content itself says.  
   **basis:** own knowledge

### p3-changes-of-state

1. **field:** keyPoints[3].memTip  
   **text:** Steam burns = DOUBLE the energy. You get L_v as it condenses, THEN Q = mcΔT as it cools.  
   **correction:** It is not double. Per kg, condensing steam releases 2,260,000 J. Cooling the condensed water from 100°C to body temperature releases only about 4200 × 63 ≈ 265,000 J. So steam delivers roughly 9–10 times the energy of the same mass of boiling water, not twice as much.  
   **basis:** own knowledge

### p3-pressure

1. **field:** keyPoints[2].content  
   **text:** They hit the walls <strong>twice as often</strong> per second → pressure doubles.  
   **correction:** Halving the volume doubles the number of particles per unit volume. This doubles the rate of collisions per unit area of wall, which is why the pressure doubles. The total wall area also changes, so the total number of hits on all the walls does not simply double. revisionCardBullets[2] correctly says 'per unit area'.  
   **basis:** own knowledge

2. **field:** keyPoints[0].writeBullets[1]  
   **text:** Billions of collisions per second make a pressure you can measure  
   **correction:** The true number is vastly larger, around 10²³ collisions per square centimetre per second at room conditions. 'Billions' understates it by many orders of magnitude.  
   **basis:** own knowledge

### p4-nuclear-model

1. **field:** keyPoints[1].content  
   **text:** (1) Most alpha particles went straight through → the atom is mostly empty space. The positive charge is not spread out as the plum pudding model said.  
   **correction:** The plum pudding model also predicted that most alpha particles would pass straight through, so this observation does not disprove it. The evidence that the positive charge is concentrated, not spread out, comes from the large-angle deflections and back-scattering. The lesson itself says this in keyPoints[0]: 'They would all pass straight through'.  
   **basis:** own knowledge

2. **field:** keyPoints[1].content  
   **text:** (2) Some alpha particles were deflected at small angles → there is a small, dense, positively charged region at the centre.  
   **correction:** The plum pudding model predicted small deflections. The surprising evidence for a concentrated positive nucleus was that some particles were deflected through large angles. The conclusion should be tied to large-angle deflections, or simply to deflection by a positive charge.  
   **basis:** own knowledge

3. **field:** keyPoints[1].content  
   **text:** Only direct hits cause the large deflections.  
   **correction:** Alpha particles do not hit the nucleus. They are strongly repelled when they come very close to it on a near head-on path.  
   **basis:** own knowledge

4. **field:** keyPoints[2].heading  
   **text:** Structure of the nucleus — protons, neutrons and electrons  
   **correction:** Electrons are not part of the nucleus. The nucleus contains protons and neutrons, and electrons surround it.  
   **basis:** spec

5. **field:** keyPoints[3].tutor_note  
   **text:** At GCSE, you just need to know two things. Electrons are in shells at set energy levels. Moving between them emits radiation.  
   **correction:** Moving to a higher energy level involves absorbing electromagnetic radiation. Only moving to a lower level involves emitting it. The spec requires both.  
   **basis:** spec

6. **field:** checkpoints.3.wrongFeedback  
   **text:** Two shells filled = Period 2.  
   **correction:** The second shell is not filled: it holds 7 of a possible 8 electrons. It should say that two shells are occupied (in use).  
   **basis:** own knowledge

### p4-radioactivity

1. **field:** revisionCardBullets[2]  
   **text:** Beta: fast electron from the nucleus. Mass 0, charge −1.  
   **correction:** A beta particle (an electron) has a very small mass, not zero. Its mass number is 0. The bullet should say "mass number 0" or "very small mass".  
   **basis:** own knowledge

### p4-half-life

1. **field:** intro  
   **text:** Others have been decaying since the Big Bang and will carry on for billions of years.  
   **correction:** The long-lived radioactive isotopes on Earth, such as uranium-238 and thorium-232, were made in stars, supernovae and neutron-star mergers, not in the Big Bang. The Big Bang produced mainly hydrogen and helium. They have been decaying since before the Earth formed, about 4.6 billion years ago.  
   **basis:** own knowledge

2. **field:** keyPoints[3].memTip  
   **text:** Irradiation = from outside, stops with distance.  
   **correction:** Moving away reduces irradiation. It does not generally stop it: gamma radiation is only reduced with distance, not eliminated. Irradiation stops when the source is removed or fully shielded.  
   **basis:** own knowledge

3. **field:** checkpoints[3].correctFeedback  
   **text:** Remove the source or move away, and the exposure stops.  
   **correction:** Removing the source stops the exposure. Moving away only reduces it, especially for gamma.  
   **basis:** own knowledge

4. **field:** keyPoints[3].content  
   **text:** or it can cause genetic mutations (if reproductive cells are affected)  
   **correction:** Radiation can cause mutations in any cell, and cancer itself results from mutations. Mutations in reproductive cells are the ones that can be passed on to offspring.  
   **basis:** own knowledge

5. **field:** commonMistakes[1]  
   **text:** Saying the activity reaches zero. It never does. The curve gets closer and closer to zero but never arrives.  
   **correction:** The mathematical model approaches zero without reaching it. A real sample has a finite number of nuclei, so its activity does eventually become zero. Saying the activity "never" reaches zero is true of the model, not of a real sample.  
   **basis:** own knowledge

6. **field:** keyPoints[2].writeBullets[4]  
   **text:** It ionises air; smoke breaks the current → alarm  
   **correction:** Smoke absorbs the alpha particles and ions and so reduces the current. The alarm triggers when the current falls; the current is not completely broken.  
   **basis:** own knowledge

7. **field:** introTips[3]  
   **text:** Contamination means radioactive material gets onto or inside the body.  
   **correction:** Contamination is the unwanted presence of materials containing radioactive atoms on other materials. The body is one case, but objects and surfaces can also be contaminated.  
   **basis:** spec

### p4-nuclear-fission

1. **field:** keyPoints[2].keyTerms[1].def  
   **text:** Hydrogen isotopes used as fuel in fusion reactions; abundant and available from seawater (deuterium)  
   **correction:** Only deuterium is abundant and can be taken from seawater. Tritium is radioactive (half-life about 12 years) and extremely rare in nature. It has to be produced, usually from lithium, so it is not abundant.  
   **basis:** own knowledge

2. **field:** keyPoints[3].content  
   **text:** almost limitless fuel (hydrogen from seawater)  
   **correction:** Deuterium can be taken from seawater, but tritium cannot. D-T fusion fuel supply is limited by tritium production (from lithium). It is not simply hydrogen from seawater.  
   **basis:** own knowledge

3. **field:** commonMistakes[2]  
   **text:** Fusion's main product is helium. Its radioactivity is much shorter-lived than that of fission fragments.  
   **correction:** Helium-4 is stable and not radioactive. The radioactivity linked to fusion comes from the tritium fuel and from reactor materials made radioactive by neutrons. It does not come from the helium product.  
   **basis:** own knowledge

### p5-forces-motion

1. **field:** keyPoints[0].content  
   **text:** Displacement = 500m at an angle north-east.  
   **correction:** For 300 m east then 400 m north, the displacement is 500 m at about 53° north of east (a bearing of about 037°). This is not north-east, which would be 45°. The spec says students must 'express a displacement in terms of both the magnitude and direction', so the direction should be stated precisely.  
   **basis:** own knowledge

### p5-newtons-laws

1. **field:** keyPoints[0].content  
   **text:** Friction and air resistance are the resultant forces that slow real objects.  
   **correction:** Friction and air resistance are individual resistive forces. The resultant force is the single force that has the same effect as all the forces acting together. Friction and air resistance contribute to a resultant force that slows the object; they are not themselves 'the resultant forces'.  
   **basis:** spec

2. **field:** checkpoints.0.correctFeedback  
   **text:** Correct! Constant velocity means zero acceleration.  
   **correction:** The question says 'constant speed', not constant velocity. Velocity includes direction. A car at constant speed on a curved road has a changing velocity and therefore a non-zero resultant force. Zero resultant force follows only if the speed and direction are both constant.  
   **basis:** spec

### p5-stopping-distance

1. **field:** keyPoints[0].content  
   **text:** That is roughly four car-lengths compared with 24 car-lengths.  
   **correction:** Using the Highway Code convention of about 4 m per car length, 23 m is about six car lengths, not four. 96 m is about 24 car lengths. The comparison should be roughly six car-lengths against 24.  
   **basis:** own knowledge

2. **field:** keyPoints[2].keyTerms[0].def  
   **text:** The force applied by the brakes to decelerate the vehicle; transferred from kinetic energy to thermal energy in the brakes  
   **correction:** A force is not 'transferred' from kinetic energy. Work done by the friction force between the brakes and the wheel reduces the vehicle's kinetic energy, and the temperature of the brakes increases. The definition mixes up force and energy.  
   **basis:** spec

3. **field:** keyPoints[1].list[0].definition  
   **text:** slows brain processing significantly — the biggest single impairment  
   **correction:** There is no basis for ranking alcohol as the single biggest impairment. The spec lists tiredness, drugs and alcohol as factors without ranking them, and severe tiredness or some drugs can impair reactions as much or more.  
   **basis:** spec

4. **field:** keyPoints[2].content  
   **text:** Ice can reduce friction to nearly zero.  
   **correction:** Ice greatly reduces the friction between tyres and road. The coefficient of friction typically falls to around 0.1, which is much lower than on dry roads but not 'nearly zero'.  
   **basis:** own knowledge

5. **field:** keyPoints[2].content  
   **text:** braking distance is proportional to KE  
   **correction:** This is only true for a constant braking force, because work done = force × distance = KE lost. The condition is missing from this sentence, although it is given elsewhere in the lesson.  
   **basis:** own knowledge

### p5-momentum

1. **field:** intro  
   **text:** Momentum is always conserved in collisions and explosions.  
   **correction:** Total momentum is conserved only in a closed system: 'In a closed system, the total momentum before an event is equal to the total momentum after the event.'  
   **basis:** spec

2. **field:** keyPoints[1].memTip  
   **text:** Total momentum before = total momentum after. Always.  
   **correction:** Conservation holds only in a closed system, meaning no external resultant force acts. It is not true 'always'. This also contradicts the lesson's own keyPoints[1].content.  
   **basis:** spec

3. **field:** revisionCardBullets[4]  
   **text:** Explosion: before p = 0; after: two objects move in opposite directions with equal magnitude momenta  
   **correction:** Total momentum before an explosion is zero only if the system starts at rest. The result of equal and opposite momenta applies only to two fragments from a system at rest. The same over-generalisation appears in keyPoints[1].writeBullets: 'Explosion: before = 0; after = equal and opposite momenta (sum still = 0)'.  
   **basis:** own knowledge

### p5-gravity

1. **field:** keyPoints[1].content  
   **text:** Near Earth's surface, the field is roughly uniform (the same in all directions near the surface).  
   **correction:** A uniform field has the same strength and the same direction at every point in the region. It does not mean 'the same in all directions'. Near Earth's surface the field everywhere points straight down with about the same strength.  
   **basis:** own knowledge

2. **field:** keyPoints[2].content  
   **text:** Too fast, and the object escapes. Too slow, and it falls back to Earth.  
   **correction:** A small change in speed changes the orbit, not whether the object stays in it. Slightly too fast gives a higher or elliptical orbit. Escape happens only above escape speed. Slightly too slow gives a lower or elliptical orbit. The object hits Earth only if that new path meets the atmosphere or the surface. The spec puts it this way: "for a stable orbit, the radius must change if the speed changes".  
   **basis:** own knowledge

3. **field:** commonMistakes[3]  
   **text:** Not using g = 9.8 N/kg in calculations. The gravitational field strength on Earth is 9.8 N/kg. Use 10 N/kg only if told to round.  
   **correction:** The spec states: "In any calculation the value of the gravitational field strength (g) will be given." Students should use whatever value the question gives. There is no default value to recall, and 'not using 9.8' is not a mistake.  
   **basis:** spec

### p6-wave-properties

1. **field:** keyPoints[3].keyTerms[1].def  
   **text:** Change in wave speed at a boundary causing a change in direction (frequency unchanged)  
   **correction:** A change in speed at a boundary only changes the direction when the wave meets the boundary at an angle. A wave travelling along the normal changes speed but does not change direction. The lesson's own content says this correctly: "If it hits at an angle, its direction changes too."  
   **basis:** own knowledge

2. **field:** keyPoints[3].tutor_note  
   **text:** People often say diffraction happens 'when the gap is smaller than the wavelength'. The correct phrase is 'similar to the wavelength'.  
   **correction:** Spreading increases as the gap gets narrower. It is very marked when the gap is similar to or smaller than the wavelength. A gap smaller than the wavelength does not give less diffraction, so calling 'smaller than the wavelength' incorrect is misleading. It also contradicts the lesson's own statement that "a narrow gap diffracts more than a wide one". The same issue appears in commonMistakes[1].  
   **basis:** own knowledge

3. **field:** intro  
   **text:** Waves are how energy moves through space.  
   **correction:** Waves are one way energy is transferred. Energy is also transferred by heating through conduction and convection, by electric currents, and by forces doing work. The statement should be limited, for example "Waves are one way energy is transferred from place to place."  
   **basis:** own knowledge

### p6-em-spectrum

1. **field:** keyPoints[0].content  
   **text:** The <strong>only difference</strong> between types of EM radiation is their <strong>frequency</strong>, and so their wavelength.  
   **correction:** The specification links gamma rays to their origin: 'Gamma rays originate from changes in the nucleus of an atom.' X-rays and gamma rays overlap in frequency and are distinguished by their source, not only by frequency.  
   **basis:** spec

2. **field:** revisionCardBullets[9]  
   **text:** UV, X-ray and gamma are all ionising. Radio, microwave and IR usually are not  
   **correction:** The specification names only X-rays and gamma rays as ionising: 'X-rays and gamma rays are ionising radiation'. It describes UV separately, as causing premature skin ageing and skin cancer. The same error appears in keyPoints[3].keyTerms[0].def: 'includes UV, X-rays, and gamma rays'.  
   **basis:** spec

3. **field:** checkpoints.3.wrongFeedback  
   **text:** It is ionising enough to break molecular bonds.  
   **correction:** The specification does not class UV as ionising. It classes only X-rays and gamma rays as ionising radiation.  
   **basis:** spec

4. **field:** keyPoints[3].content  
   **text:** Gamma rays</strong>: highly ionising, and the most dangerous type.  
   **correction:** Gamma rays are weakly ionising but highly penetrating; alpha radiation is the most ionising. The specification also says 'The effects depend on the type of radiation and the size of the dose', so no single type is simply 'the most dangerous'. The same error appears in keyPoints[3].writeBullets[3] ('the most ionising') and keyPoints[3].keyTerms[1].def ('highly ionising').  
   **basis:** own knowledge

5. **field:** tables[0].rows[0][2]  
   **text:** mm to km  
   **correction:** Radio wavelengths are longer than microwave wavelengths, from about 1 m or more up to kilometres. 'mm to km' overlaps the microwave range given in the next row ('~1 mm – 1 m').  
   **basis:** own knowledge

6. **field:** keyPoints[1].content  
   **text:** Gamma rays have the shortest, smaller than an atomic nucleus.  
   **correction:** Typical gamma ray wavelengths are around 10⁻¹² m or less. Only very high-energy gamma rays have wavelengths smaller than a nucleus, so the statement is not generally true.  
   **basis:** own knowledge

7. **field:** introTips[2]  
   **text:** Higher frequency EM waves carry more energy. That is why gamma rays are dangerous and radio waves are not.  
   **correction:** Higher frequency means more energy per photon. The total energy a wave carries depends on its intensity, so a powerful radio beam can carry a lot of energy.  
   **basis:** own knowledge

8. **field:** checkpoints.0.correctFeedback  
   **text:** All EM waves travel at exactly 3 × 10⁸ m/s in a vacuum.  
   **correction:** The speed is approximately 3 × 10⁸ m/s (2.998 × 10⁸ m/s), not exactly.  
   **basis:** own knowledge

### p6-light

1. **field:** keyPoints[1].content  
   **text:** The media have different densities, and so different wave speeds.  
   **correction:** The speed of light in a material depends on its optical properties (refractive index), not on its mass density. A denser material does not always slow light more. The spec frames refraction only as being 'due to the difference in velocity of the waves in different substances'.  
   **basis:** own knowledge

2. **field:** keyPoints[1].writeBullets[3]  
   **text:** Hits the boundary at 90° (along the normal) → no change in direction. Only the speed changes  
   **correction:** A ray along the normal has an angle of incidence of 0°. It is at 90° to the surface. This contradicts keyPoints[1].content, which says '0° incidence', and the lesson's own rule to measure angles from the normal.  
   **basis:** own knowledge

### p6-sound

1. **field:** keyPoints[1].keyTerms[0].def  
   **text:** ~340 m/s in air at room temperature; faster in denser media  
   **correction:** The speed of sound is not set by density alone. It depends mainly on how stiff (incompressible) the medium is. Denser materials can carry sound more slowly: lead is denser than steel but sound travels more slowly in it, and sound is slower in denser gases. Safer wording is 'generally fastest in solids, slower in liquids, slowest in gases'.  
   **basis:** own knowledge

2. **field:** keyPoints[1].tutor_note  
   **text:** Light slows down in denser media, but sound speeds up.  
   **correction:** Stated as a general rule, this is incorrect for sound. Sound speed depends mainly on stiffness, not density (see above).  
   **basis:** own knowledge

3. **field:** keyPoints[3].content  
   **text:** ultrasound pulses reflect off boundaries between tissues, such as between a baby and the fluid around it. The reflected pulses are used to build up an image.  
   **correction:** Ultrasound waves are only partially reflected at a boundary between two different media. The rest is transmitted, which is why reflections from deeper boundaries can also be detected.  
   **basis:** spec

4. **field:** introTips[4]  
   **text:** It is safe, and it reflects off boundaries inside the body.  
   **correction:** Ultrasound is partially reflected at boundaries between different media.  
   **basis:** spec

### p7-magnets

1. **field:** keyPoints[0].tutor_note  
   **text:** Only iron, cobalt, nickel and steel are ferromagnetic.  
   **correction:** Other materials are ferromagnetic too, for example gadolinium and the neodymium–iron–boron alloys the lesson itself names for permanent magnets. The specification lists iron, steel, cobalt and nickel as the magnetic materials to know. It does not say they are the only ones. The lesson contradicts itself by also citing neodymium alloys.  
   **basis:** own knowledge

2. **field:** revisionCardBullets[3]  
   **text:** Ferromagnetic materials: iron, steel, cobalt, nickel only  
   **correction:** As above: these are the magnetic materials named in the specification, but they are not the only ferromagnetic materials.  
   **basis:** own knowledge

3. **field:** keyPoints[0].content  
   **text:** All other materials, like aluminium, copper, wood and plastic, are <strong>non-magnetic</strong>. Magnetic fields do not affect them.  
   **correction:** These materials are not attracted to magnets in any noticeable way. They are still very weakly affected (paramagnetism/diamagnetism), and a changing field induces currents in metals like copper and aluminium. It would be more accurate to say they are not attracted to magnets.  
   **basis:** own knowledge

4. **field:** keyPoints[3].content  
   **text:** They make fields strong enough to line up hydrogen atoms in the body.  
   **correction:** MRI fields align the magnetic moments (spins) of hydrogen nuclei (protons), not whole hydrogen atoms.  
   **basis:** own knowledge

5. **field:** keyPoints[1].content  
   **text:** People have used this for navigation for thousands of years.  
   **correction:** Magnetic compasses have been used for navigation for roughly one thousand years, from about the 11th century. Earlier lodestone devices were not navigational.  
   **basis:** own knowledge

6. **field:** checkpoints.2.correctFeedback  
   **text:** Doubling the turns doubles the field, and halving the current halves it.  
   **correction:** A solenoid's field depends on turns per unit length. Doubling the turns doubles the field only if the solenoid's length stays the same, and the question does not say this.  
   **basis:** own knowledge

### p7-motor-effect

1. **field:** keyPoints[0].memTip  
   **text:** The three quantities (force, current, field) are always at right angles to each other.  
   **correction:** The force is perpendicular to both the current and the field. The current and the field do not have to be at right angles; there is a force whenever the conductor has a component across the field. This also contradicts keyPoints[0].content ("must run at least partly across the field"). The spec's condition "For a conductor at right angles" implies this is a special case, not a rule.  
   **basis:** own knowledge

2. **field:** keyPoints[2].content  
   **text:** The size of the force on a current-carrying conductor is given by: <strong>F = BIL</strong>.  
   **correction:** F = BIl gives the force only when the conductor is at right angles to the magnetic field.  
   **basis:** spec

3. **field:** keyPoints[3].content  
   **text:** The problem: if the current direction stays the same, the forces reverse after half a turn, and the motor stops.  
   **correction:** Without a commutator, the forces on each side of the coil keep the same direction in space. After the coil passes the vertical, the sides swap positions, so the turning effect reverses. The coil then rocks back and forth and settles in the vertical position. It is the turning effect that reverses, not the forces. The statement is also inconsistent with keyPoints[3].memTip ("the motor would rock back and forth").  
   **basis:** own knowledge

### p7-induction

1. **field:** introTips[1]  
   **text:** To induce an EMF, the conductor and the magnetic field must move relative to each other.  
   **correction:** Relative movement is not required. A changing magnetic field around a stationary conductor also induces a potential difference.  
   **basis:** spec

2. **field:** keyPoints[0].tutor_note  
   **text:** In fact, induction comes from relative movement between the conductor and the field.  
   **correction:** Induction comes from relative movement OR from a change in the magnetic field around the conductor.  
   **basis:** spec

3. **field:** keyPoints[2].keyTerms[1].def  
   **text:** Continuous rings in an AC generator that allow the coil to rotate freely while maintaining electrical contact, producing AC output  
   **correction:** Slip rings do not produce the ac. The ac is induced in the rotating coil. Slip rings simply pass it to the external circuit without reversing the connections, so the output stays ac. A commutator would reverse the connections and give dc.  
   **basis:** own knowledge

4. **field:** revisionCardBullets[5]  
   **text:** Slip rings — allow free rotation and give an AC output  
   **correction:** The alternating p.d. comes from the rotating coil. Slip rings keep contact without reversing the connections, so the ac reaches the circuit unchanged.  
   **basis:** own knowledge

5. **field:** keyPoints[0].content  
   **text:** A stationary conductor in a constant magnetic field feels nothing.  
   **correction:** No p.d. is induced. However, if the stationary conductor carries a current it does experience a force (the motor effect). The claim should be limited to 'no induced p.d.'.  
   **basis:** own knowledge

## Findings whose correction or suggested text uses bond / bonds / bonded / bonding

Searched the model-written fields `correction`, `why` and `spec_term` of every finding (not the quoted lesson or spec text).

- p2-static — above_gcse[4].why: Bonding cables, earthing of tankers and aircraft refuelling procedures are not in these specification sections. The spec asks only that sparking be described and explained.
- p3-density — above_gcse[0].why: The specification only asks for density differences to be explained by the arrangement of atoms or molecules. The hexagonal lattice structure of ice (and the hydrogen bonding behind it) is not required. Checkpoint 3 then makes it the marked correct answer.
- p4-nuclear-model — above_gcse[3].why: Chemical bonding is not part of these specification sections.
- p6-em-spectrum — checkpoint_mismatch[1].why: The question matches the key point. However, the wrongFeedback claims UV 'is ionising enough to break molecular bonds'. keyPoints[3].content never says UV is ionising or that it breaks molecular bonds, so this part of the feedback is not supported by the key point.
