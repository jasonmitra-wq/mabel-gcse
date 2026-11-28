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
