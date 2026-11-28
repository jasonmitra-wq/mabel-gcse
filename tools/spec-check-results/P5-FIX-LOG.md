# P5 Forces — fix log

One line per change: lesson | field | decision or finding ID.

## Runbook v2 task 2.4: new content (2026-10-17)

Written from data/spec/physics.md (md5 6a6e0cc7eaee22f1e58d78b217f4f4bc). New files have no old text.

- p5-elasticity | new lesson, all fields; syllabus entry with specRef 4.5.3 | 2.4 (spec 4.5.3)
- p5-moments | new lesson, all fields; syllabus entry with specRef 4.5.4 | 2.4 (spec 4.5.4)
- p5-fluid-pressure | new lesson, all fields; syllabus entry with specRef 4.5.5.1.1, 4.5.5.1.2, 4.5.5.2 | 2.4 (spec 4.5.5)
- p5-forces-motion | keyPoints[5] added (contact and non-contact forces: content, writeBullets, keyTerms, memTip, tutor_note); checkpoints["5"] added; revisionCardBullets[12], [13] added; syllabus specRef 4.5.1.2 added | 2.4 (spec 4.5.1.2)

## Phase C C0 and B2 (2026-11-28, brief docs/briefs/2026-11-27-phase-c-physics.md, base 9fd883f)

C0, missing checkpoints (recount 4 in P5, as the planning chat: p5-forces-motion 0, p5-gravity 2, p5-momentum 1,
p5-stopping-distance 2). Each new checkpoint: correct 0, four options of similar length, CP_SHUFFLE orders them.
lesson-auditor tools/audit-runs/9fd883f-1.md: F1–F4 and F7 fixed in one round (forces-motion and momentum moved to a
new context and the forces-motion stem asks for the reason; stopping-distance option 2 replaced); F5 and F6 come from
the old checkpoints "0" (momentum) and "1" (stopping-distance), which test the next key point (ESCALATIONS).

- p5-forces-motion | checkpoints["0"] added (a cyclist at 6 m/s west: speed or velocity, and why) | C0
- p5-gravity | checkpoints["2"] added (why an orbiting satellite does not fall to Earth) | C0
- p5-momentum | checkpoints["1"] added (two skaters push apart from rest: total momentum after) | C0
- p5-stopping-distance | checkpoints["2"] added (wet road: less friction, smaller braking force) | C0

B2, fact check: node tools/spec-check.js --topic P5 --run (claude-opus-5-5, full run, $0.8762; results
tools/spec-check-results/p5-*.json). checkpoint_mismatch on the four new checkpoints: 0. Every factual_errors finding
(19) fixed in the lesson file; two checkpoint_mismatch findings fixed where the wording was wrong (newtons-laws 0,
elasticity 3); the other five mismatches are old checkpoints keyed to the wrong key point (ESCALATIONS). The
missing_spec_content (42) and above_gcse (19) findings are not changed in the lesson files: the B3 scripts are written
from the spec text and teach what the spec asks; nothing above GCSE is scripted (as P4's B2).

- p5-forces-motion | keyPoints[0].content | B2 spec-check 2026-11-28 fact0 | old «Displacement = 500m at an angle north-east.» | new «Displacement = 500m, in a direction about 53° north of east.»
- p5-forces-motion | revisionCardBullets[11] | B2 spec-check 2026-11-28 fact1 | old «sound 340 m/s,» | new «sound 330 m/s,»
- p5-newtons-laws | keyPoints[0].content | B2 spec-check 2026-11-28 fact0 | old «Friction and air resistance are the resultant forces that slow real objects.» | new «Friction and air resistance are forces that act against motion. They are what slow real objects down.»
- p5-newtons-laws | checkpoints["0"].question | B2 spec-check 2026-11-28 fact1 + checkpoint_mismatch0 | old «A car travels at constant speed on a level road.» | new «A car travels at constant speed in a straight line on a level road.»
- p5-stopping-distance | keyPoints[0].content | B2 spec-check 2026-11-28 fact0 | old «That is roughly four car-lengths compared with 24 car-lengths.» | new «That is roughly 6 car-lengths compared with 24 car-lengths.»
- p5-stopping-distance | keyPoints[2].keyTerms[0].def | B2 spec-check 2026-11-28 fact1 | old «The force applied by the brakes to decelerate the vehicle; transferred from kinetic energy to thermal energy in the brakes» | new «The force applied by the brakes to decelerate the vehicle; the work it does transfers kinetic energy to thermal energy in the brakes»
- p5-stopping-distance | keyPoints[2].content | B2 spec-check 2026-11-28 fact2 | old «This is because kinetic energy = ½mv², and braking distance is proportional to KE.» | new «This is because kinetic energy = ½mv², and for a given braking force, braking distance is proportional to KE.»
- p5-stopping-distance | keyPoints[1].list[0].definition | B2 spec-check 2026-11-28 fact3 | old «slows brain processing significantly — the biggest single impairment» | new «slows brain processing, so reactions are slower»
- p5-stopping-distance | keyPoints[2].content | B2 spec-check 2026-11-28 fact4 | old «Ice can reduce friction to nearly zero.» | new «Ice reduces friction a great deal.»
- p5-momentum | intro | B2 spec-check 2026-11-28 fact0 | old «Momentum is always conserved in collisions and explosions.» | new «In a closed system, momentum is conserved in collisions and explosions.»
- p5-momentum | keyPoints[1].memTip | B2 spec-check 2026-11-28 fact1 | old «Total momentum before = total momentum after. Always.» | new «Total momentum before = total momentum after, in a closed system.»
- p5-momentum | intro | B2 spec-check 2026-11-28 fact2 | old «Stopping either one takes the same effort.» | new «Stopping either one in the same time takes the same force.»
- p5-momentum | revisionCardBullets[4] | B2 spec-check 2026-11-28 fact3 | old «Explosion: before p = 0; after: two objects move in opposite directions with equal magnitude momenta» | new «Explosion from rest: before p = 0; after, the momenta of the parts still add up to zero»
- p5-gravity | keyPoints[1].content | B2 spec-check 2026-11-28 fact0 | old «roughly uniform (the same in all directions near the surface)» | new «roughly uniform (the same strength and direction everywhere near the surface)»
- p5-gravity | keyPoints[2].content | B2 spec-check 2026-11-28 fact1 | old «Too fast, and the object escapes. Too slow, and it falls back to Earth.» | new «If the speed changes, the radius of the orbit must change too.»
- p5-gravity | keyPoints[2].content | B2 spec-check 2026-11-28 fact2 | old «the gravitational field is weaker, so less centripetal force is needed. The orbital speed is lower.» | new «the gravitational field is weaker, so gravity provides less centripetal force. So a lower speed is needed to stay in orbit.»
- p5-gravity | checkpoints["1"].options[1] | B2 spec-check 2026-11-28 fact2 (same reversed reasoning); auditor C4 (length) | old «Further from Earth, the gravitational field is weaker. So less centripetal force, and therefore less speed, is needed to stay in orbit» | new «Further out, gravity is weaker, so it holds the satellite in orbit at a lower speed»
- p5-gravity | checkpoints["1"].correctFeedback | B2 spec-check 2026-11-28 fact2 | old «Right. At a greater orbital radius, Earth's gravitational field is weaker. Less centripetal force is needed, which goes with a lower orbital speed.» | new «Right. At a greater orbital radius, Earth's gravitational field is weaker. Gravity provides less centripetal force, so a lower speed is needed to stay in orbit.»
- p5-gravity | checkpoints["1"].wrongFeedback | B2 spec-check 2026-11-28 fact2 | old «So less centripetal force is needed to stay in a circular orbit. Less centripetal force goes with a lower orbital speed.» | new «So gravity provides less centripetal force. A satellite there needs a lower speed to stay in a circular orbit.»
- p5-gravity | commonMistakes[3] | B2 spec-check 2026-11-28 fact3 | old «Not using g = 9.8 N/kg in calculations. The gravitational field strength on Earth is 9.8 N/kg. Use 10 N/kg only if told to round. Always check which value the exam question specifies.» | new «Not using the value of g the question gives. On Earth, g is about 9.8 N/kg. In a calculation, always use the value you are given.»
- p5-elasticity | keyPoints[2].content | B2 spec-check 2026-11-28 fact0 | old «A <strong>linear</strong> relationship gives a straight line through the origin. Force and extension are directly proportional.» | new «A <strong>linear</strong> relationship gives a straight line. For a spring, the line goes through the origin, so force and extension are directly proportional.»
- p5-elasticity | keyPoints[2].writeBullets[*] | B2 spec-check 2026-11-28 fact0 | old «Linear: straight line through the origin — force and extension directly proportional» | new «Linear: a straight line. Through the origin, so force and extension are directly proportional»
- p5-elasticity | keyPoints[2].keyTerms[0].def | B2 spec-check 2026-11-28 fact0 | old «A straight-line graph through the origin; the two quantities are directly proportional» | new «A straight-line graph; if it also goes through the origin, the two quantities are directly proportional»
- p5-elasticity | revisionCardBullets[5] | B2 spec-check 2026-11-28 fact0 | old «Force–extension graph: straight line through origin = linear; curve = non-linear» | new «Force–extension graph: straight line = linear (through the origin = directly proportional); curve = non-linear»
- p5-elasticity | checkpoints["3"].question | B2 spec-check 2026-11-28 checkpoint_mismatch0 | old «It is not inelastically deformed.» | new «It has not gone past its limit of proportionality.»
- p5-moments | keyPoints[2].content | B2 spec-check 2026-11-28 fact0 | old «You push on one end, far from the pivot. Your small force makes a large moment. The other end is close to the pivot. There, the same moment gives a large force on the load. Examples: a crowbar, a spanner, a wheelbarrow.» | new «You push far from the pivot, so your small force makes a large moment. The load is close to the pivot. There, the same moment gives a large force on the load. Examples: a crowbar, a spanner, a wheelbarrow.»
- p5-forces-motion | keyPoints[1].content | B2 spec-check 2026-11-28 fact1 | old «speed of sound in air ≈ 340 m/s» | new «speed of sound in air ≈ 330 m/s» (the spec value)
- p5-forces-motion | keyPoints[1].writeBullets[5] | B2 spec-check 2026-11-28 fact1 | old «…, sound 340 m/s» | new «…, sound 330 m/s»

## 2026-11-28 post-scripting fixes (brief docs/briefs/2026-11-28-p5-lesson-file-fixes.md, base 44884a4)

Lesson files only. Five checkpoints rewritten to test their own key point (same key, same correct index, four options); four lesson-auditor list C faults fixed (the mass/weight overlap between p5-newtons-laws key point 3 and p5-gravity key point 0 left as it is, per Jason); basics added to the eight P5 lesson files, because teach-enabling them in 44884a4 raised the audit WARN "AI tutor on but no basics" that step 4 must clear.

- p5-forces-motion | checkpoints["3"].question | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «A motorcycle accelerates from 5 m/s to 25 m/s in 4s. What is its acceleration?» | new «A cyclist starts from rest and accelerates at 2 m/s² over 16 m. What is the cyclist's final velocity?»
- p5-forces-motion | checkpoints["3"].options[0] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «5 m/s²» | new «8 m/s»
- p5-forces-motion | checkpoints["3"].options[1] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «6.25 m/s²» | new «64 m/s»
- p5-forces-motion | checkpoints["3"].options[2] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «20 m/s²» | new «32 m/s»
- p5-forces-motion | checkpoints["3"].options[3] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «0.2 m/s²» | new «4 m/s»
- p5-forces-motion | checkpoints["3"].correctFeedback | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «Correct! a = (v − u) / t = (25 − 5) / 4 = 20/4 = 5 m/s².» | new «Correct. v² = u² + 2as = 0 + 2 × 2 × 16 = 64, so v = √64 = 8 m/s.»
- p5-forces-motion | checkpoints["3"].wrongFeedback | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «Use a = (v − u) / t = (25 − 5) / 4 = 5 m/s². Remember to subtract initial from final velocity first.» | new «Use v² = u² + 2as. From rest, u = 0, so v² = 2 × 2 × 16 = 64. Then take the square root: v = 8 m/s.»
- p5-forces-motion | checkpoints["4"].question | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «A ball is dropped from rest and falls freely under gravity (g = 9.8 m/s²) for 3s. How far does it fall?» | new «Why does a falling skydiver stop speeding up and reach terminal velocity?»
- p5-forces-motion | checkpoints["4"].options[0] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «44.1 m» | new «Air resistance grows with speed until it equals the weight»
- p5-forces-motion | checkpoints["4"].options[1] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «29.4 m» | new «The weight of the skydiver gets smaller during the fall»
- p5-forces-motion | checkpoints["4"].options[2] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «88.2 m» | new «Gravity stops acting once the skydiver is falling fast»
- p5-forces-motion | checkpoints["4"].options[3] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «9.8 m» | new «Air resistance becomes bigger than the weight and stays so»
- p5-forces-motion | checkpoints["4"].correctFeedback | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «Correct! s = ½at² = ½ × 9.8 × 9 = 44.1m (using u = 0, so s = ½(u+v)t or v = at = 29.4, s = ½ × 29.4 × 3 = 44.1m).» | new «Correct. Air resistance rises with speed until it equals the weight. The resultant force is then zero, so the speed stays constant.»
- p5-forces-motion | checkpoints["4"].wrongFeedback | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «Use v = u + at first: v = 0 + 9.8 × 3 = 29.4 m/s. Then s = ½(u+v)t = ½ × 29.4 × 3 = 44.1m.» | new «Air resistance grows as the skydiver speeds up. When it equals the weight, the resultant force is zero. With no resultant force there is no acceleration, so the speed stays constant.»
- p5-gravity | checkpoints["1"].question | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «Why does a satellite in a higher orbit travel more slowly than one in a lower orbit?» | new «A space probe travels away from the Earth. What happens to the Earth's gravitational field strength where the probe is?»
- p5-gravity | checkpoints["1"].options[0] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «Higher orbits are further from the Sun, so solar wind slows the satellite» | new «It stays at 9.8 N/kg all the way out»
- p5-gravity | checkpoints["1"].options[1] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «Further out, gravity is weaker, so it holds the satellite in orbit at a lower speed» | new «It gets weaker as the distance increases»
- p5-gravity | checkpoints["1"].options[2] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «Higher orbits have more atmospheric drag, slowing the satellite down» | new «It drops to zero once the probe leaves the air»
- p5-gravity | checkpoints["1"].options[3] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «Satellites at higher orbits have greater mass, which reduces their speed» | new «It gets stronger as the probe speeds up»
- p5-gravity | checkpoints["1"].correctFeedback | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «Right. At a greater orbital radius, Earth's gravitational field is weaker. Gravity provides less centripetal force, so a lower speed is needed to stay in orbit.» | new «Correct. Field strength falls with distance from the centre of the Earth. It is about 9.8 N/kg only near the surface.»
- p5-gravity | checkpoints["1"].wrongFeedback | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «Further from Earth, the gravitational field strength is weaker, because gravity decreases with distance. So gravity provides less centripetal force. A satellite there needs a lower speed to stay in a circular orbit. Higher orbits = weaker gravity = slower orbital speed = longer orbital period.» | new «Field strength decreases with distance from the centre of the mass. Near Earth's surface it is about 9.8 N/kg. Further out it is weaker, but it does not drop to zero.»
- p5-momentum | checkpoints["0"].question | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «A 2 kg ball moving at 5 m/s hits a 3 kg ball that is not moving. They stick together. What is their combined velocity after the collision?» | new «A cyclist and bike have a mass of 70 kg and move at 6 m/s. What is their momentum?»
- p5-momentum | checkpoints["0"].options[0] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «5 m/s» | new «11.7 kg m/s»
- p5-momentum | checkpoints["0"].options[1] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «2 m/s» | new «420 kg m/s»
- p5-momentum | checkpoints["0"].options[2] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «3 m/s» | new «76 kg m/s»
- p5-momentum | checkpoints["0"].options[3] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «10 m/s» | new «420 N»
- p5-momentum | checkpoints["0"].correctFeedback | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «Correct. Total momentum before = 2 × 5 + 3 × 0 = 10 kg m/s. After: (2 + 3) × v = 10, so v = 10/5 = 2 m/s.» | new «Correct. p = m v = 70 × 6 = 420 kg m/s.»
- p5-momentum | checkpoints["0"].wrongFeedback | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «Use conservation of momentum: total before = total after. Before: p = 2 × 5 + 3 × 0 = 10 kg m/s. After: the combined mass is 2 + 3 = 5 kg. The momentum is still 10 kg m/s. So v = 10 ÷ 5 = 2 m/s. The velocity is less because the total mass increased.» | new «Use p = m v. Multiply the mass by the velocity: 70 × 6 = 420. Momentum is measured in kg m/s, not newtons.»
- p5-stopping-distance | checkpoints["1"].question | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «A car's braking distance at 20 m/s is 25 m. What would the braking distance be at 40 m/s, on the same road?» | new «Which of these would make a driver's thinking distance longer?»
- p5-stopping-distance | checkpoints["1"].options[0] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «100 m» | new «The driver is tired»
- p5-stopping-distance | checkpoints["1"].options[1] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «50 m» | new «The road is wet»
- p5-stopping-distance | checkpoints["1"].options[2] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «12.5 m» | new «The tyres are worn»
- p5-stopping-distance | checkpoints["1"].options[3] | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «200 m» | new «The brakes are worn»
- p5-stopping-distance | checkpoints["1"].correctFeedback | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «Correct! Braking distance ∝ v². The speed doubles → the distance quadruples: 25 × 4 = 100 m.» | new «Correct. Tiredness makes the reaction time longer. At the same speed, the car travels further before the brakes go on.»
- p5-stopping-distance | checkpoints["1"].wrongFeedback | brief 2026-11-28 step 1 (checkpoint tests its own key point) | old «Braking distance is proportional to speed squared. Double the speed → (2)² = 4 times the braking distance: 25 × 4 = 100 m. Not 50 m. It is quadratic, not linear.» | new «Thinking distance depends on the driver's reaction time. Tiredness makes that time longer. Wet roads and worn tyres or brakes affect the braking distance instead.»
- p5-forces-motion | keyPoints[2].memTip | brief 2026-11-28 step 2 (lesson-auditor 9fd883f-1 list C) | old «v-t graph: Gradient = Acceleration, Area = Distance. GA-D: 'Gonna Ace D-grade no more!'» | new «v-t graph: gradient = acceleration; area under the line = distance travelled.»
- p5-momentum | checkpoints["2"].options[2] | brief 2026-11-28 step 2 (lesson-auditor 9fd883f-1 list C) | old «They absorb kinetic energy and convert it to electrical energy» | new «They make the car stop in a shorter time, which reduces the force»
- p5-stopping-distance | keyPoints[1].list[4] | brief 2026-11-28 step 2 (list C: not in the spec list) | old «{ "term": "Age", "definition": "reaction times tend to slow with age" }» | new «» (item removed; the content sentence "All of these factors make it longer." still reads correctly over the four left: alcohol, drugs, tiredness, distractions)
- p5-gravity | revisionCardBullets[8] | brief 2026-11-28 step 2 (list C) | old «Geostationary satellites: 24-hour period, same position above Earth» | new «» (bullet removed: the spec does not name geostationary satellites; 4.8.1.3 says only "Gravity provides the force that allows planets and satellites (both natural and artificial) to maintain their circular orbits.")
- p5-forces-motion | basics (new field) | brief 2026-11-28 step 4 (audit WARN "AI tutor on but no basics", from teach-enabling in 44884a4) | old «» | new «[{"idea":"Metres and seconds","text":"Distance is measured in metres (m) and time in seconds (s). 1 km is 1000 m."},{"idea":"Graph axes","text":"A graph has two lines called axes. The x-axis runs along the bottom. The y-axis runs up the side. Each axis shows a quantity and its unit."},{"idea":"Squares and square roots","text":"5² means 5 × 5 = 25. The square root of 25 is 5, because 5 × 5 = 25."}]»
- p5-newtons-laws | basics (new field) | brief 2026-11-28 step 4 (audit WARN "AI tutor on but no basics", from teach-enabling in 44884a4) | old «» | new «[{"idea":"A force","text":"A force is a push or a pull. Forces are measured in newtons (N)."},{"idea":"Mass","text":"Mass is the amount of matter in an object, measured in kilograms (kg)."},{"idea":"Speed and acceleration","text":"Speed is how far something goes each second. Acceleration is how quickly its velocity changes."}]»
- p5-stopping-distance | basics (new field) | brief 2026-11-28 step 4 (audit WARN "AI tutor on but no basics", from teach-enabling in 44884a4) | old «» | new «[{"idea":"Speed × time","text":"Distance = speed × time. At 10 m/s for 2 s, a car travels 20 m."},{"idea":"Friction","text":"Friction is a force that acts against one surface sliding over another."},{"idea":"Kinetic energy","text":"A moving object has energy in its kinetic store. The faster it moves, the more it has."}]»
- p5-momentum | basics (new field) | brief 2026-11-28 step 4 (audit WARN "AI tutor on but no basics", from teach-enabling in 44884a4) | old «» | new «[{"idea":"Mass","text":"Mass is the amount of matter in an object, measured in kilograms (kg)."},{"idea":"Velocity","text":"Velocity is speed in a given direction. It is measured in metres per second (m/s)."},{"idea":"Grams and kilograms","text":"1000 g = 1 kg, so 50 g is 0.05 kg."}]»
- p5-gravity | basics (new field) | brief 2026-11-28 step 4 (audit WARN "AI tutor on but no basics", from teach-enabling in 44884a4) | old «» | new «[{"idea":"A force","text":"A force is a push or a pull. Forces are measured in newtons (N)."},{"idea":"Mass","text":"Mass is the amount of matter in an object, measured in kilograms (kg)."},{"idea":"Orbit","text":"An orbit is the path one object takes round another, like the Moon round the Earth."}]»
- p5-elasticity | basics (new field) | brief 2026-11-28 step 4 (audit WARN "AI tutor on but no basics", from teach-enabling in 44884a4) | old «» | new «[{"idea":"A force","text":"A force is a push or a pull. Forces are measured in newtons (N)."},{"idea":"Centimetres and metres","text":"100 cm = 1 m, so 5 cm is 0.05 m."},{"idea":"Graph axes","text":"A graph has two lines called axes. The x-axis runs along the bottom. The y-axis runs up the side. Each axis shows a quantity and its unit."}]»
- p5-moments | basics (new field) | brief 2026-11-28 step 4 (audit WARN "AI tutor on but no basics", from teach-enabling in 44884a4) | old «» | new «[{"idea":"A force","text":"A force is a push or a pull. Forces are measured in newtons (N)."},{"idea":"Clockwise","text":"Clockwise is the way the hands of a clock turn. Anticlockwise is the other way."},{"idea":"Centimetres and metres","text":"100 cm = 1 m, so 5 cm is 0.05 m."}]»
- p5-fluid-pressure | basics (new field) | brief 2026-11-28 step 4 (audit WARN "AI tutor on but no basics", from teach-enabling in 44884a4) | old «» | new «[{"idea":"Area","text":"Area is how much surface something covers. A rectangle's area is length × width, in square metres (m²)."},{"idea":"Density","text":"Density is how much mass is packed into each cubic metre: density = mass ÷ volume."},{"idea":"Particles","text":"Liquids and gases are made of tiny particles that move about all the time."}]»

Spec-check 2 (2026-11-28, tools/spec-check-results/p5-*.json, $0.7885): factual_errors 2 (both p5-fluid-pressure), fixed in one round; checkpoint_mismatch 0 on all eight.

- p5-fluid-pressure | keyPoints[2].content | spec-check 2 (2026-11-28) fact0/fact1 | old «A floating object is less dense than the liquid.» | new «A floating object has a lower average density than the liquid, counting any air inside it.»
- p5-fluid-pressure | keyPoints[2].content | spec-check 2 (2026-11-28) fact0/fact1 | old «A sinking object is denser than the liquid.» | new «A sinking object has a higher average density than the liquid.»
- p5-fluid-pressure | keyPoints[2].keyTerms[0].def | spec-check 2 (2026-11-28) fact0/fact1 | old «The resultant upward force on an object in a liquid, caused by greater pressure on its bottom surface than its top» | new «The resultant upward force on an object in a fluid (a liquid or a gas), caused by greater pressure on its bottom surface than its top»

## 2026-11-28 triage (brief docs/briefs/2026-11-28-p5-triage-brief.md; triage docs/briefs/2026-11-28-p5-triage.md, md5 034f8323b194fe7269395087137b52dd; base ff68066)

Higher label: no lesson file had one (the shape rule bans tier labels; see ESCALATIONS), so each Higher paragraph starts "Higher only:", as the brief says. Figures in added text, with sources: running 3 m/s (spec 4.5.6.1.2); car on a motorway 30 m/s (lesson p5-forces-motion keyPoints[1], existing); car 0 to 30 m/s in 10 s = 3 m/s² (lesson p5-forces-motion keyPoints[2] worked example, existing); free fall 9.8 m/s² (spec 4.5.6.1.5); car 1200 kg at 3 m/s² = 3600 N (lesson p5-newtons-laws keyPoints[1] worked example 1, existing); 70 mph braking distance 75 m and stopping distances 23 m and 96 m (lesson p5-stopping-distance keyPoints[0] and [2], existing); 1200 kg car in the stopping-distance estimate (from p5-newtons-laws worked example 1); reaction times 0.5 s and 0.8 s, and the example table 0.24-0.41 s (example data inside the spec range 0.2-0.9 s, spec 4.5.6.3.2). Unsourced, not written: typical speeds of transport other than the motorway car (forces-motion M1; no transport speeds in the spec or the Paper 2 mark schemes, whose only typical speed is "typical walking speed = 1.5m/s"); stopping-distance data for vehicles other than a car (stopping-distance M3). gravity A3: KEEP, the Paper 2 mark schemes use the word: 2H June 2025 04.7 "a gravitational / centripetal / resultant force acts on the satellite".

- p5-forces-motion | keyPoints[0].content | forces-motion A2 | old «Displacement = 500m, in a direction about 53° north of east.» | new «Displacement = 500m, in a direction you can find with a scale drawing.»
- p5-forces-motion | keyPoints[0].content | forces-motion M5 (HT) | old «'A car drives at 20 m/s due north' gives velocity.» | new «'A car drives at 20 m/s due north' gives velocity.

Higher only: an object moving in a circle at constant speed has a changing velocity. Its speed stays the same, but its direction keeps changing.»
- p5-forces-motion | keyPoints[1].content | forces-motion M0 | old «- walking ≈ 1.5 m/s
- cycling» | new «- walking ≈ 1.5 m/s
- running ≈ 3 m/s
- cycling»
- p5-forces-motion | keyPoints[1].content | forces-motion M1, M2, M3, M4 | old «- speed of light ≈ 3 × 10⁸ m/s

» | new «- speed of light ≈ 3 × 10⁸ m/s

Each type of transport has its own typical speed. A car on a motorway, at about 30 m/s, is one example.

Speed is rarely constant. When people walk, run or travel in a car, their speed keeps changing. How fast a person walks, runs or cycles depends on age, terrain, fitness and distance travelled. The speed of sound and the speed of the wind also vary.

To find a speed, measure a distance and a time, then divide the distance by the time. Measure the distance with a tape measure or a trundle wheel. Time it with a stopwatch, or with light gates for short times.

»
- p5-forces-motion | keyPoints[1].content | forces-motion M6 (HT) | old «A steeper gradient on a d-t graph always means a faster speed.» | new «A steeper gradient on a d-t graph always means a faster speed.

Higher only: if an object is accelerating, find its speed at one time by drawing a tangent to the curve at that time. The gradient of the tangent is the speed.»
- p5-forces-motion | keyPoints[2].content | forces-motion M7, M8 (HT) | old «For a trapezium: area = ½ × (sum of parallel sides) × height.» | new «For a trapezium: area = ½ × (sum of parallel sides) × height.

Higher only: if the line on a v-t graph is curved, find the area by counting the squares under it. Multiply the number of squares by the distance one square stands for.

Everyday accelerations are a few metres per second squared. A car speeding up from 0 to 30 m/s in 10 s accelerates at 3 m/s². An object falling freely near the Earth accelerates at about 9.8 m/s².»
- p5-forces-motion | keyPoints[3].content | forces-motion A0, A1 | old «These equations link the five motion quantities:
- s (displacement, m)
- u (initial velocity, m/s)
- v (final velocity, m/s)
- a (acceleration, m/s²)
- t (time, s)

You are given three values and asked to find a fourth.

<strong>Equations</strong>:
• v = u + at
• s = ½(u + v)t
• v² = u² + 2as (no time needed)

Worked example 1: a ball rolls from rest (u = 0) with acceleration 2 m/s² for 5s. Find displacement.
s = ½(u + v)t — but we need v first. v = 0 + 2 × 5 = 10 m/s. s = ½ × (0 + 10) × 5 = <strong>25m</strong>.

Or using v² = u² + 2as: 10² = 0 + 2 × 2 × s → 100 = 4s → s = 25m. ✓

Worked example 2: a car brakes from 20 m/s to rest over 40m. Find deceleration.
v² = u² + 2as → 0 = 400 + 2a × 40 → 80a = −400 → a = <strong>−5 m/s²</strong> (decelerating at 5 m/s²).» | new «For uniform acceleration, one equation links velocity, acceleration and distance:

<strong>v² − u² = 2 a s</strong>
- v is the final velocity, in m/s
- u is the initial velocity, in m/s
- a is the acceleration, in m/s²
- s is the distance, in m

It needs no time. You can also rearrange a = (v − u) / t to give v = u + at.

Worked example 1: a ball rolls from rest (u = 0) with an acceleration of 2 m/s² over 25 m. Find its final velocity.
v² − u² = 2as → v² − 0 = 2 × 2 × 25 = 100 → v = √100 = <strong>10 m/s</strong>.

Worked example 2: a car brakes from 20 m/s to rest over 40 m. Find its deceleration.
v² − u² = 2as → 0 − 400 = 2 × a × 40 → 80a = −400 → a = <strong>−5 m/s²</strong> (decelerating at 5 m/s²).»
- p5-forces-motion | keyPoints[3].writeBullets[0] | forces-motion A0, A1 | old «s = displacement (m), u = initial velocity (m/s), v = final velocity (m/s). a = acceleration (m/s²), t = time (s)» | new «v² − u² = 2as: v final velocity (m/s), u initial velocity (m/s), a acceleration (m/s²), s distance (m)»
- p5-forces-motion | keyPoints[3].writeBullets[1] | forces-motion A0 | old «v = u + at — use when you have u, a, t and want v» | new «v = u + at is a = (v − u)/t rearranged»
- p5-forces-motion | keyPoints[3].writeBullets[2] | forces-motion A0 | old «s = ½(u + v)t — use when you have u, v, t and want s» | new «»
- p5-forces-motion | keyPoints[3].writeBullets | forces-motion A0 | old «v² = u² + 2as — use when there is no time given» | new «Use v² − u² = 2as when no time is given»
- p5-forces-motion | keyPoints[3].writeBullets | forces-motion A1 | old «List known values before choosing which equation to use» | new «Square both velocities before you subtract»
- p5-forces-motion | keyPoints[3].memTip | forces-motion A1 | old «Write out s, u, v, a, t. Tick off the three you know and circle the one you want. Then pick the equation that contains all four.» | new «v² − u² = 2as has no t in it: use it when the time is not given.»
- p5-forces-motion | keyPoints[3].tutor_note | forces-motion A1 | old «v² = u² + 2as is the most tested, because it hides time.» | new «v² − u² = 2as is the equation of motion to know, and it hides time.»
- p5-forces-motion | commonMistakes[2] | forces-motion A1 | old «Using the wrong SUVAT equation. Always list s, u, v, a, t and tick off the known values before choosing.» | new «Forgetting to square the velocities in v² − u² = 2as. Square each velocity before you subtract.»
- p5-forces-motion | examTips[1] | forces-motion A1 | old «For SUVAT questions, write the five letters s u v a t and tick what you know. It shows at once which equation to use.» | new «For v² − u² = 2as questions, write down v, u, a and s, and mark the one you need to find.»
- p5-forces-motion | revisionCardBullets[6] | forces-motion A0, A1 | old «SUVAT: v = u + at; s = ½(u+v)t; v² = u² + 2as» | new «Uniform acceleration: v² − u² = 2as; v = u + at is a = (v − u)/t rearranged»
- p5-forces-motion | revisionCardBullets[7] | forces-motion A1 | old «List s, u, v, a, t and tick known values before choosing equation» | new «Square both velocities first in v² − u² = 2as»
- p5-forces-motion | revisionCardBullets[11] | forces-motion M0 | old «Typical speeds: walking 1.5, cycling 6, motorway car 30, sound 330 m/s, light 3×10⁸ m/s» | new «Typical speeds: walking 1.5, running 3, cycling 6, motorway car 30, sound 330 m/s, light 3×10⁸ m/s»
- p5-forces-motion | keyPoints[1].writeBullets | forces-motion M0 | old «Typical speeds: walking 1.5 m/s, cycling 6 m/s, motorway car 30 m/s, sound 330 m/s» | new «Typical speeds: walking 1.5 m/s, running 3 m/s, cycling 6 m/s, motorway car 30 m/s, sound 330 m/s»
- p5-newtons-laws | keyPoints[1].content | newtons-laws M6, M8, M9 | old «Rearrangements: a = F/m (more force → more acceleration; more mass → less acceleration). m = F/a.» | new «The acceleration of an object is proportional to the resultant force on it, and inversely proportional to its mass. Inversely proportional means that doubling the mass halves the acceleration.

Rearrangements: a = F/m (more force → more acceleration; more mass → less acceleration). m = F/a.»
- p5-newtons-laws | keyPoints[1].content | newtons-laws M7 (HT), A0 | old «<strong>Inertial mass</strong>: the mass measured by F = ma is called inertial mass. It measures how much the object resists acceleration. Experiments show that inertial mass equals gravitational mass (the mass in W = mg). This holds to extremely high precision.» | new «You can estimate forces for road transport. A car of about 1200 kg accelerating at about 3 m/s² needs a resultant force of about 1200 × 3 ≈ 3600 N. The symbol ~ means "approximately", so this force is ~ 3600 N.

Higher only: <strong>inertial mass</strong> is a measure of how difficult it is to change the velocity of an object. It is defined as the ratio of force over acceleration: m = F ÷ a.»
- p5-newtons-laws | keyPoints[1].writeBullets[5] | newtons-laws A1 | old «Inertial mass — measured from F = ma; equals gravitational mass in all experiments» | new «Higher only: inertial mass = force ÷ acceleration; how hard it is to change velocity»
- p5-newtons-laws | keyPoints[1].keyTerms[1].def | newtons-laws A2 (key term, logged) | old «Mass measured by resistance to acceleration using F = ma; equal to gravitational mass» | new «Mass measured by resistance to acceleration using F = ma»
- p5-newtons-laws | keyPoints[2].content | newtons-laws M11 | old «But the Earth is 6 × 10²⁴ kg, so your pull hardly accelerates it at all.» | new «But the Earth is 6 × 10²⁴ kg, so your pull hardly accelerates it at all.

In equilibrium, as for a book resting on a table, the forces on the book balance. The book's weight and the table's push up are NOT a Third Law pair. They act on the same object, and they are different types of force. The book's weight pairs with the book's pull on the Earth.»
- p5-newtons-laws | keyPoints[3].content | newtons-laws M0, M1, M2, M3 | old «<strong>Mass</strong> is the amount of matter in an object.» | new «The force of gravity close to the Earth is due to the gravitational field around the Earth. An object's weight depends on the gravitational field strength where it is. The weight of an object may be considered to act at a single point, called its <strong>centre of mass</strong>.

Weight and mass are directly proportional: W ∝ m. The symbol ∝ means "is directly proportional to". Double the mass and the weight doubles. Weight is measured with a calibrated spring-balance, called a <strong>newtonmeter</strong>.

<strong>Mass</strong> is the amount of matter in an object.»
- p5-newtons-laws | keyPoints[3].content | newtons-laws M4, M5 (HT) | old «If resultant ≠ 0, the object accelerates in the direction of the resultant force.» | new «If resultant ≠ 0, the object accelerates in the direction of the resultant force.

Higher only: to find the resultant of two forces that are not in a line, use a scale drawing. Draw each force as an arrow to scale, tip to tail. The arrow from the start of the first to the end of the second is the resultant. Measure its length and angle for its size and direction. If the arrows join up into a closed shape, the resultant is zero: the object is in equilibrium.

Higher only: a single force can be resolved into two components acting at right angles to each other. The two components together have the same effect as the single force.»
- p5-newtons-laws | keyPoints[4] (new key point: required practical) | newtons-laws M10 | old «» | new «new key point 4 "Required practical: force, mass and acceleration" (content, writeBullets, keyTerms Independent variable and Control variable, memTip, tutor_note; full text in the file)»
- p5-newtons-laws | checkpoints["4"] (new, for the new key point) | newtons-laws M10 | old «» | new «new checkpoint "4" (straight line through the origin: acceleration directly proportional to force; correct 0)»
- p5-stopping-distance | keyPoints[0].content | stopping-distance M4 | old «That is roughly 6 car-lengths compared with 24 car-lengths.» | new «That is roughly 6 car-lengths compared with 24 car-lengths.

You can use these values to estimate an emergency stop. At 70 mph the stopping distance is about 96 m: about four times the 23 m at 30 mph.

Graphs of stopping distance against speed can be drawn for different vehicles. On such a graph you can read each vehicle's stopping distance at a given speed and compare them.»
- p5-stopping-distance | keyPoints[1].content | stopping-distance M0, M1, M2 | old «All of these factors make it longer.» | new «All of these factors make it longer.

You can measure reaction time in two simple ways. In the ruler-drop test, someone drops a ruler between your finger and thumb, and you catch it. The further it falls, the longer your reaction time. A computer test times how long you take to press a key after a signal appears.

Repeat the test several times and record each result in a table. Leave out any anomaly, a result far from the others. Then work out the mean of the rest.

You can then judge a factor from data. At 20 m/s, a reaction time of 0.5 s gives a thinking distance of 10 m. If tiredness makes it 0.8 s, the thinking distance becomes 16 m.»
- p5-stopping-distance | keyPoints[1].list[2].definition | stopping-distance A1 | old «fatigue slows brain responses; severe tiredness can cause microsleep at the wheel» | new «fatigue slows brain responses»
- p5-stopping-distance | keyPoints[2].content | stopping-distance M5 | old «Several factors affect <strong>braking distance</strong>.» | new «Several factors affect <strong>braking distance</strong>. The greater the speed of a vehicle, the greater the braking force needed to stop it in a certain distance.»
- p5-stopping-distance | keyPoints[3].content | stopping-distance M8 | old «When the brakes are on, the car slows down.» | new «When the brakes are applied, the friction force between the brakes and the wheel does work. This work reduces the kinetic energy of the vehicle, and the temperature of the brakes increases.»
- p5-stopping-distance | keyPoints[3].content | stopping-distance M6, M7 (HT) | old «Newton's Second Law: F = ma → braking force = mass × deceleration.» | new «Newton's Second Law: F = ma → braking force = mass × deceleration.

Large decelerations may lead to brakes overheating and/or loss of control. A very large deceleration can make the tyres skid, so the driver can no longer steer.

Higher only: you can estimate a braking force. At 70 mph (about 31 m/s), the braking distance is about 75 m. From v² − u² = 2as, the deceleration is about 31² ÷ (2 × 75) ≈ 6.4 m/s². For a car of about 1200 kg, F = m a ≈ 1200 × 6.4 ≈ 7700 N.»
- p5-stopping-distance | tables[1] (new table) | stopping-distance M1 | old «» | new «new table "Example results: ruler-drop reaction times for one student": tries 1-4: 0.25, 0.24, 0.41, 0.26 s (try 3 is the anomaly; the mean of the rest is 0.25 s)»
- p5-momentum | keyPoints[0].content | momentum A2 | old «Momentum is measured in <strong>kg m/s</strong>, or N s. These units are equivalent.» | new «Momentum is measured in <strong>kg m/s</strong>.»
- p5-momentum | keyPoints[0].writeBullets[1] | momentum A2 | old «Units: kg m/s (or N s — equivalent)» | new «Units: kg m/s»
- p5-momentum | keyPoints[2].heading | momentum A0 (heading, logged) | old «Force, impulse and change in momentum» | new «Force and change in momentum»
- p5-momentum | keyPoints[2].content | momentum M0, M1 (HT), M2, A0 | old «A <strong>resultant force</strong> acting on an object changes its momentum. The relationship is: <strong>F = Δp / Δt</strong>, or rearranged: <strong>FΔt = Δp</strong>. This means force × time = change in momentum. The quantity FΔt is called the <strong>impulse</strong>. Compare a large force for a short time with a small force for a long time. Both can give the same change in momentum. This explains safety features. Crumple zones and airbags make a collision last longer. That reduces the force felt (same Δp, larger Δt → smaller F). A cycling or motorcycle helmet works the same way.» | new «A <strong>resultant force</strong> acting on an object that is moving, or able to move, changes its momentum.

Higher only: the equations F = m × a and a = (v − u) / t combine to give <strong>F = m Δv / Δt</strong>. Here m Δv is the change in momentum, so force equals the rate of change of momentum. A bigger change in velocity, or a shorter time, means a bigger force.

Rearranged: <strong>FΔt = Δp</strong>, so force × time = change in momentum. Compare a large force for a short time with a small force for a long time. Both can give the same change in momentum.

This explains safety features. Air bags, seat belts, gymnasium crash mats, cycle helmets and cushioned playground surfaces all make an impact last longer. Crumple zones in cars do the same. A longer time means a smaller rate of change of momentum, so a smaller force (same Δp, larger Δt → smaller F).»
- p5-momentum | keyPoints[2].writeBullets[1] | momentum A0 | old «FΔt = Δp (impulse = change in momentum)» | new «FΔt = Δp (force × time = change in momentum)»
- p5-momentum | keyPoints[2].writeBullets[4] | momentum M2 | old «Helmets, padded flooring: same principle — extend time of impact» | new «Seat belts, crash mats, helmets, cushioned playground surfaces: same principle — extend the time of impact»
- p5-momentum | keyPoints[2].keyTerms[0] (Impulse) | momentum A0 (key term, logged) | old «{
          "term": "Impulse",
          "def": "Force multiplied by time (FΔt) — equal to the change in momentum; measured in N s (equivalent to kg m/s)"
        }» | new «»
- p5-momentum | introTips[2] | momentum A0 | old «Impulse = force × time = change in momentum.» | new «Force × time = change in momentum.»
- p5-momentum | examTip | momentum A1 | old «They also test the link between impulse and momentum (F = Δp/t or FΔt = Δp).» | new «They also test force as the rate of change of momentum (F = Δp/Δt).»
- p5-momentum | commonMistakes[1] | momentum A0 | old «Mixing up impulse (FΔt) and work (Fd). Impulse involves time, and work involves distance. They are different ideas.» | new «Mixing up force × time (FΔt) and work done (Fd). FΔt gives a change in momentum and involves time. Work done involves distance.»
- p5-momentum | examTips[3] | momentum A0, A2 | old «Units check: momentum is kg m/s or N s, which are equivalent. Impulse is also N s. Force is N, time is s — so N × s = N s = kg m/s. All consistent.» | new «Units check: momentum is in kg m/s, force in N and time in s.»
- p5-momentum | revisionCardBullets[6] | momentum A0 | old «Impulse: FΔt = Δp (force × time = change in momentum)» | new «FΔt = Δp (force × time = change in momentum)»
- p5-momentum | tables[0].rows[3][1] | momentum A0 (table, logged) | old «Impulse = change in momentum» | new «Force × time = change in momentum»
- p5-gravity | keyPoints[1].content | gravity A0 | old «Near Earth's surface, the field is roughly uniform (the same strength and direction everywhere near the surface). There, g = 9.8 N/kg.» | new «Near Earth's surface, g = 9.8 N/kg.»
- p5-gravity | keyPoints[1].content | gravity A0 | old « The gravitational field is shown by field lines pointing towards the centre of the mass. They show the direction of the force on a small test mass.» | new «»
- p5-gravity | keyPoints[1].writeBullets[2] | gravity A0 | old «Near Earth's surface: approximately uniform field, g = 9.8 N/kg» | new «Near Earth's surface: g = 9.8 N/kg»
- p5-gravity | keyPoints[1].writeBullets[4] | gravity A0 | old «Field lines point towards centre of mass (direction of force on a small test mass)» | new «»
- p5-gravity | keyPoints[1].memTip | gravity A0 | old «Gravitational field = region where gravity acts. Field lines point IN (towards the mass).» | new «Gravitational field = region where gravity acts. It gets weaker further from the mass.»
- p5-gravity | keyPoints[2].content | gravity A1 | old « A higher orbit also has a longer circumference. So the orbital period (the time for one orbit) is longer.» | new «»
- p5-gravity | keyPoints[2].content | gravity M4, M5 (HT) | old «So a lower speed is needed to stay in orbit.» | new «So a lower speed is needed to stay in orbit.

Planets orbit the Sun. Moons are natural satellites that orbit planets. Artificial satellites are machines that people launch into orbit round the Earth. Gravity keeps all three in their orbits.

Higher only: in a circular orbit, the force of gravity can change the velocity without changing the speed. The speed stays the same, but the direction keeps changing. For a stable orbit, the radius must change if the speed changes.»
- p5-gravity | keyPoints[2].writeBullets[3] | gravity A1 | old «Higher orbit: weaker gravity → lower orbital speed → longer orbital period» | new «Higher orbit: weaker gravity → lower orbital speed»
- p5-gravity | keyPoints[2].writeBullets[4] | gravity A1 | old «Satellites in lower orbits move faster and orbit more quickly» | new «Satellites in lower orbits move faster»
- p5-gravity | keyPoints[2].keyTerms[2] (Orbital period) | gravity A2 (key term, logged) | old «{
          "term": "Orbital period",
          "def": "The time taken for one complete orbit — longer for higher orbits"
        }» | new «»
- p5-gravity | commonMistakes[2] | gravity A1 | old «Higher orbit = weaker gravity = slower orbital speed = longer period.» | new «Higher orbit = weaker gravity = slower orbital speed.»
- p5-gravity | revisionCardBullets[7] | gravity A1 | old «Higher orbit: weaker gravity → slower orbital speed → longer orbital period» | new «Higher orbit: weaker gravity → slower orbital speed»
- p5-fluid-pressure | keyPoints[1].content | fluid-pressure M0 (HT label) | old «The pressure due to a column of liquid is given by <strong>p = hρg</strong>.» | new «Higher only: the pressure due to a column of liquid is given by <strong>p = hρg</strong>.»
- p5-fluid-pressure | keyPoints[2].content | fluid-pressure M0 (HT label) | old «Think of an object partly or fully under the surface of a liquid.» | new «Higher only: think of an object partly or fully under the surface of a liquid.»
- p5-fluid-pressure | keyPoints[2].content | fluid-pressure M1 (HT) | old «A sinking object has a higher average density than the liquid.» | new «A sinking object has a higher average density than the liquid.

Upthrust grows with the volume of the object under the surface, and with the density of the liquid.»
- data/physics-syllabus.json | p5-gravity specRef | gravity D3 (M0-M3: weight content lives in p5-newtons-laws) | old «["4.5.1.3", "4.8.1.3"]» | new «["4.8.1.3"]»
- p5-momentum | videoLinks[*].url | momentum A0 | old «…search_query=momentum+conservation+impulse+AQA+GCSE+physics» | new «…search_query=momentum+conservation+AQA+GCSE+physics»
- p5-fluid-pressure.script.json | step 3.2 (the brief names 3.3; the sentence is in 3.2) | brief step 3 (upthrust in any fluid) | old «This upward force from a liquid is called upthrust.» | new «This upward force from a liquid or a gas is called upthrust.» (1 place in the script; TeachScript.VERSION 10 → 11, teach-script v27 → v28)
- p5-forces-motion | keyPoints[1].content | forces-motion M6 (HT), sentence length | old «Higher only: if an object is accelerating, find its speed at one time by drawing a tangent to the curve at that time.» | new «Higher only: if an object is accelerating, draw a tangent to the curve at the time you want.»
- p5-momentum | keyPoints[2].content | momentum M2, sentence length | old «A longer time means a smaller rate of change of momentum, so a smaller force (same Δp, larger Δt → smaller F).» | new «A longer time means a smaller rate of change of momentum. So the force is smaller (same Δp, larger Δt → smaller F).»
- p5-newtons-laws | keyPoints[4].content | newtons-laws M10, sentence length | old «Results: a graph of acceleration against force is a straight line through the origin, so the acceleration is directly proportional to the force.» | new «Results: a graph of acceleration against force is a straight line through the origin. So the acceleration is directly proportional to the force.»

Spec-check 3 (2026-11-28, $0.6743, seven lessons; p5-fluid-pressure not run: one more lesson could have passed the $0.81 limit): factual_errors 4, fixed in one round; checkpoint_mismatch 0 on all seven. "Physics only" labels not added: every P5 lesson belongs to the GCSE Physics course, which teaches all physics-only content.

- p5-stopping-distance | keyPoints[3].content | spec-check 3 fact (stopping-distance, new item) | old «This is why seatbelts and crumple zones are essential.» | new «This is why seatbelts are essential.»
- p5-momentum | keyPoints[0].content | spec-check 3 fact (momentum: the spec marks all of 4.5.7 HT only) | old «<strong>Momentum</strong> is defined as the product» | new «Higher only: <strong>momentum</strong> is defined as the product»
- p5-momentum | keyPoints[1].content | spec-check 3 fact (momentum) | old «The <strong>law of conservation of momentum</strong> applies» | new «Higher only: the <strong>law of conservation of momentum</strong> applies»
- p5-momentum | keyPoints[2].content | spec-check 3 fact (momentum) | old «A <strong>resultant force</strong> acting on an object that is moving, or able to move, changes its momentum.

Higher only: the equations F = m × a» | new «Higher only: a <strong>resultant force</strong> acting on an object that is moving, or able to move, changes its momentum.

The equations F = m × a»
- p5-gravity | keyPoints[2].content | spec-check 3 fact (gravity, triage M4 wording) | old «Artificial satellites are machines that people launch into orbit round the Earth.» | new «Artificial satellites are machines that people launch into orbit, round the Earth or another body such as the Moon.»
- p5-moments | keyPoints[0].content | spec-check 3 fact (moments, new item) | old «It turns about a fixed point called the <strong>pivot</strong>.» | new «The object turns about a fixed point called the <strong>pivot</strong>.»
