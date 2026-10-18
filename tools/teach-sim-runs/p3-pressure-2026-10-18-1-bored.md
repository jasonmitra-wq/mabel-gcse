# Teach sim: p3-pressure (run, persona bored, 2026-10-18)

Model claude-sonnet-5-5. 14 tutor turns, 0 flagged. Complete: true. Coverage: [true,true,true,true].

Lesson flags: none

**Tutor** [opening]: Welcome! You've seen gas pressure when pumping a bike tyre or squeezing a balloon, and it all comes down to tiny gas molecules moving randomly and constantly. Each time one strikes the wall of its container, it pushes on that wall with a tiny force. What do you think gas pressure is caused by?

**Student** (try): molecules hitting the walls?

**Tutor** [fact, point 0]: Yes — molecules hitting the walls is exactly what causes gas pressure. Each single collision pushes on the wall with only a tiny force, but huge numbers of molecules collide every second, so the total effect is a steady pressure. If each collision is that tiny, why can we still measure a steady pressure?

**Student** (wrong): cos theres like millions of them hitting at once?

**Tutor** [next, point 0]: Yes — huge numbers of molecules hitting the walls is why the pressure is steady. If you heat a gas in a sealed rigid container, what happens to the speed of its molecules?

> Recap: Gas molecules move randomly and constantly, bumping into the container walls. / Each collision gives the wall a tiny push, a very small force. / So many molecules collide every second that the pushes add up. / That total effect is a steady pressure we can measure.

**Student** (try): they move faster?

**Tutor** [fact, point 1]: Yes — heating a gas makes its molecules move faster on average. Now, in a sealed rigid container the gas stays in the same space, which is what "constant volume" means. If the molecules in that sealed container are moving faster, what happens to the pressure?

**Student** (wrong): um does the pressure go down cos theres less space?

**Tutor** [retry, point 1]: Not quite — the space doesn't shrink here. In a sealed rigid container the gas stays in the same space, so the molecules have the same room as before, but they are moving faster. How does that change how hard and how often they hit the walls?

**Student** (try): oh they hit harder and more often so pressure goes up?

**Tutor** [next, point 1]: Yes — faster molecules hit the walls harder and more often, so the pressure goes up. Now keep the temperature constant and squash a fixed mass of gas into half its volume. The same molecules now have less space, so they hit the walls twice as often. What happens to the pressure?

> Recap: Heating a gas makes its molecules move faster on average. / In a sealed rigid container, the volume stays the same. / Faster molecules hit the walls harder and more often. / So at constant volume, higher temperature means higher pressure.

**Student** (bored): this is too long ngl

**Tutor** [retry, point 2]: Fair, let me keep it short. Squash the gas into half the space and the molecules hit the walls twice as often, so the pressure doubles. That's because pressure × volume stays the same.  If the pressure starts at 100 kPa and the volume is halved, what is the new pressure?

**Student** (bored): huh?

**Tutor** [fact, point 2]: No worries — the new pressure is 200 kPa, because halving the volume doubles it. That's called inversely proportional: when one quantity doubles, the other halves. If the volume of a gas is doubled at constant temperature, what happens to the pressure?

**Student** (try): it gets halved?

**Tutor** [next, point 2]: Yes — halving is right: doubling the volume halves the pressure. Next up: work is the transfer of energy by a force, and pushing a piston into a gas applies a force to it. So when you push that piston in, what is being transferred to the gas?

> Recap: Squash a gas into less space and the molecules hit the walls more often. / More frequent hits means higher pressure, as long as the temperature stays the same. / Pressure times volume stays constant, so halving the volume doubles the pressure. / That's inversely proportional: when one doubles, the other halves, just as you said.

**Student** (idk): idk

**Tutor** [retry, point 3]: That's okay. Think of it this way: when you push the piston in, your push passes energy into the gas, and we call that transfer "work". So the gas gains energy from your push. What is it that the gas gains when you do work on it?

**Student** (idk): energy?

**Tutor** [fact, point 3]: Yes — energy is right: the gas gains energy from your push. That energy increases the gas's internal energy, which is the total kinetic and potential energy of all its particles. When the internal energy of the gas goes up, what can happen to its temperature?

**Student** (idk): no idea

**Tutor** [retry, point 3]: No worries. Think of internal energy as the total energy of all the gas molecules added up, including the energy they have from moving. When your push gives the gas more energy, its molecules end up moving faster on average. So when the molecules move faster, what happens to the temperature of the gas?

**Student** (bored): this is too long

**Tutor** [complete, point 3]: The temperature goes up: faster molecules means a hotter gas. That brings us to the end of this lesson. You answered questions on "What causes gas pressure" and "Temperature and pressure at constant volume", answered some on "Pressure and volume at constant temperature" and "Doing work on a gas", and I told you the rest. Thanks for sticking with it.

> Recap: Work is energy transferred by a force, like pushing a piston. / Pushing the piston in transfers energy to the gas. / That extra energy raises the gas's internal energy. / More energy means the molecules move faster, so the gas heats up.

**Student** (closing): ok thanks

**Tutor** [free]: You're welcome. Remember the big idea: gas pressure is just countless tiny molecules crashing into the container walls. Bye for now, and come back any time!

## Judge (claude-opus-5-5)

**FAIL** — would quit at T11; question does not match what was taught: T2, T10

Engagement 2/5 — "this is too long"

Would quit: T11 — "So when the molecules move faster, what happens to the temperature of the gas?" (Second 'too long' complaint after two non-answers in a row ('idk', 'no idea'). The turns stayed at about 50 words even after she complained at S6.)

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | true | false | false | "What do you think gas pressure is caused by?" |
| T1 | true | true | false | false | "If each collision is that tiny, why can we still measure a steady pressure?" |
| T2 | true | false | false | false | "If you heat a gas in a sealed rigid container, what happens to the speed of its molecules?" — Asks about heating before teaching that temperature relates to molecule speed. Also skips 'net force at right angles to the wall' from keyPoints[0]. |
| T3 | true | true | false | false | "If the molecules in that sealed container are moving faster, what happens to the pressure?" |
| T4 | true | true | false | false | "How does that change how hard and how often they hit the walls?" |
| T5 | true | true | true | false | "Now keep the temperature constant and squash a fixed mass of gas into half its volume. The same molecules now have less space, so they hit the walls twice as often. What happens to the pressure?" — About 52 words. The student replied 'this is too long ngl'. |
| T6 | true | true | false | false | "If the pressure starts at 100 kPa and the volume is halved, what is the new pressure?" — Says 'pressure × volume stays the same' but never writes p₁V₁ = p₂V₂. The student answered 'huh?'. |
| T7 | true | true | false | false | "If the volume of a gas is doubled at constant temperature, what happens to the pressure?" — Gave the answer outright after 'huh?' instead of a one-step hint. |
| T8 | true | true | false | false | "So when you push that piston in, what is being transferred to the gas?" — pV = constant was never practised with the equation, and checkpoint 2 was never used. |
| T9 | true | true | false | false | "What is it that the gas gains when you do work on it?" — Gives the answer away in the previous sentence ('the gas gains energy from your push'). |
| T10 | true | false | false | false | "When the internal energy of the gas goes up, what can happen to its temperature?" — The link between internal energy and temperature was never taught. The student answered 'no idea'. |
| T11 | true | true | true | false | "Think of internal energy as the total energy of all the gas molecules added up, including the energy they have from moving." — About 55 words after 'no idea', for a student who already said turns were too long. |
| T12 | true | null | true | false | "You answered questions on "What causes gas pressure" and "Temperature and pressure at constant volume", answered some on "Pressure and volume at constant temperature" and "Doing work on a gas", and I told you the rest." — The closing recap is about 55 words, sent straight after 'this is too long'. |
| T13 | true | null | false | false | "Remember the big idea: gas pressure is just countless tiny molecules crashing into the container walls." |

Flow faults (0):


Fixes:

1. **teach-core: length after 'too long'**: Once the student says 'too long', cap every later turn at 30 words: one fact, then one question. T9, T10 and T11 were still 45–55 words. — "this is too long ngl"
2. **keyPoints[3].content**: Add an explicit bridge sentence before any temperature question: 'More internal energy means the molecules move faster, and faster molecules mean a higher temperature.' This lets the tutor teach the link before asking for it. — "When the internal energy of the gas goes up, what can happen to its temperature?"
3. **keyPoints[2].writeBullets[0]**: Make the tutor show p₁V₁ = p₂V₂ with one tiny worked example (100 × 2 = p₂ × 1) before asking a numeric question. Then use checkpoints.2 so the equation is actually practised. — "If the pressure starts at 100 kPa and the volume is halved, what is the new pressure?"
4. **teach-core: confusion reply**: After 'huh?', give a one-step hint ('half the space → hits twice as often → pressure ×2. So 100 becomes…?') and re-ask, instead of stating the answer outright. — "No worries — the new pressure is 200 kPa, because halving the volume doubles it."
5. **keyPoints[1].keyTerms[0]**: Teach 'hotter gas = faster molecules' before asking about molecule speed, so T2's question tests something already taught. — "If you heat a gas in a sealed rigid container, what happens to the speed of its molecules?"
