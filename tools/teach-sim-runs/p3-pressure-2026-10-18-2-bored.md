# Teach sim: p3-pressure (run, persona bored, 2026-10-18)

Model claude-sonnet-5-5. 19 tutor turns, 0 flagged. Complete: true. Coverage: [true,true,true,true].

Lesson flags: none

**Tutor** [opening]: Welcome! Pumping up a bike tyre or squeezing a balloon shows gas pressure at work, and it all comes down to tiny gas molecules moving constantly and randomly inside their container. What do you think those molecules do when they reach the container's walls?

**Student** (offtopic): ugh my phone battery's dying already lol

**Tutor** [retry, point 0]: Ha, fair enough, we'll keep it quick! Here's the idea another way: inside a tyre, billions of tiny gas molecules keep hitting the inner wall, and each hit gives the wall a tiny push. Those pushes all add up to gas pressure. What do the molecules do to the wall every time they hit it?

**Student** (bored): huh? too much lol

**Tutor** [fact, point 0]: Every time a molecule hits the wall, it gives the wall a tiny push. Each hit is called a collision, and each collision adds a tiny force to the total pressure. Why does a tyre have a steady pressure, even though each push is so tiny?

**Student** (minimal): what?

**Tutor** [retry, point 0]: No worries, let's make it simpler. Imagine a ball bouncing off a wall: that bounce is a collision, and it gives the wall a tiny push. In a tyre, billions of molecules do this every second. What does each collision give the wall?

**Student** (wrong): like a tiny... heat thing?

**Tutor** [checkin, point 0]: Not quite, but you're getting there. Would you like me to just tell you the rest of this one?

**Student** (checkin-no): nah i get it now. they push it right?

**Tutor** [fact, point 0]: Yes — they push it. Each collision is one molecule striking the wall, and it gives the wall a tiny force; with huge numbers of collisions every second, those tiny forces add up to a steady pressure. So what does each collision give the wall?

**Student** (wrong): loads of tiny forces?

**Tutor** [next, point 0]: Yes — each collision gives the wall a tiny force, and loads of them add up to pressure. Next, the temperature of a gas is related to the average kinetic energy of its molecules, so a hotter gas has faster-moving molecules. If you heat a gas, what happens to the speed of its molecules?

> Recap: Gas molecules move randomly and constantly, hitting the walls of their container. / Each collision gives the wall a tiny push, which is a tiny force. / Billions of collisions every second add up to a steady pressure. / Pressure is just loads of tiny forces from molecules pushing on the walls.

**Student** (bored): huh?

**Tutor** [retry, point 1]: Let me say that more simply: when you heat a gas, its molecules gain energy and zoom around faster. So a hotter gas just means faster molecules. If you heat a gas, how does the speed of its molecules change?

**Student** (try): they go faster?

**Tutor** [fact, point 1]: Yes — hotter gas means faster molecules. Now put that gas in a sealed rigid container, so its volume stays the same, and heat it. The faster molecules hit the walls harder and more often. What happens to the pressure?

**Student** (try): it goes up?

**Tutor** [next, point 1]: Yes — faster molecules hit the walls harder and more often, so the pressure goes up. Now keep the temperature the same and squeeze a fixed mass of gas into half the volume. The pressure and volume multiply to give the same number every time, so p₁V₁ = p₂V₂. If the volume halves, what happens to the pressure?

> Recap: Pressure comes from loads of tiny molecule collisions pushing on the container walls. / Heating a gas gives its molecules more energy, so they move faster. / In a sealed rigid container, the volume stays the same when you heat the gas. / Faster molecules hit the walls harder and more often, so the pressure rises.

**Student** (bored): this is long

**Tutor** [retry, point 2]: Fair enough, shorter: squeeze a gas into half the space and its molecules hit the walls twice as often, so the pressure doubles. Pressure × volume always stays the same. If the volume halves, what happens to the pressure?

**Student** (idk): idk what happens

**Tutor** [fact, point 2]: That's fine, the answer is that the pressure doubles. Pressure and volume are inversely proportional, which means when one doubles, the other halves. So if you double the volume of a gas at constant temperature, what happens to the pressure?

**Student** (idk): no idea

**Tutor** [retry, point 2]: No worries. Picture a gas spreading into a space twice as big: its molecules hit the walls less often, so the pressure halves. Now flip it: if you halve the pressure, what happens to the volume?

**Student** (idk): no idea

**Tutor** [checkin, point 2]: Do you want me to just tell you the rest of this one?

**Student** (checkin-no): nah im listening

**Tutor** [fact, point 2]: Let's keep going. Inversely proportional means that when one quantity doubles, the other halves, so pressure × volume always stays the same. So if a gas is squashed into half the space, what happens to its pressure?

**Student** (try): it doubles?

**Tutor** [next, point 2]: Next idea: when you push a piston into a gas, you apply a force to it, and that transfers energy to the gas. So when you push a bike pump handle in, what is being transferred to the air inside?

> Recap: Squash a gas into half the space and the pressure doubles. / Pressure and volume are inversely proportional: one goes up, the other goes down. / Pressure × volume stays the same, so p₁V₁ = p₂V₂. / Give a gas double the room and its pressure halves.

**Student** (try): energy

**Tutor** [fact, point 3]: Yes — energy is right. So when the pump does work on the air, what happens to the air's internal energy?

**Student** (try): it goes up

**Tutor** [complete, point 3]: Yes — the air's internal energy goes up, because the pump transfers energy to it. That brings us to the end of this lesson.

> Recap: Pushing a piston into a gas applies a force to it. / That force does work, transferring energy to the gas. / The gas's internal energy goes up when work is done on it. / So pushing a bike pump handle in gives the air more energy.

**Student** (closing): ok thanks

**Tutor** [free]: You're welcome! You worked well today, especially on how adding energy to a gas raises its internal energy. Come back any time to go over the rest.

## Judge (claude-opus-5-5)

**FAIL** — flow faults: question_repeated_after_correct_answer T5, correct_answer_not_acknowledged T15, factual_or_unit_slip T10, factual_or_unit_slip T14

Engagement 2/5 — "this is long"

Would quit: false

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | false | false | false | "What do you think those molecules do when they reach the container's walls?" — Asks about wall collisions before teaching them; only random motion had been taught. |
| T1 | true | true | true | false | "Here's the idea another way: inside a tyre, billions of tiny gas molecules keep hitting the inner wall, and each hit gives the wall a tiny push." — About 55 words. Student replied "huh? too much lol". |
| T2 | true | true | false | false | "Why does a tyre have a steady pressure, even though each push is so tiny?" — Student had just said "too much", but the turn still introduces a new 'why' question instead of simplifying. |
| T3 | true | true | false | false | "Imagine a ball bouncing off a wall: that bounce is a collision, and it gives the wall a tiny push." |
| T4 | true | null | false | true | "Not quite, but you're getting there." — Wrong answer ('heat thing') is called close and never corrected to 'a push/force'. |
| T5 | true | true | false | false | "So what does each collision give the wall?" — Re-asks a question she just answered correctly ('they push it right?'). |
| T6 | true | true | false | false | "If you heat a gas, what happens to the speed of its molecules?" |
| T7 | true | true | false | false | "when you heat a gas, its molecules gain energy and zoom around faster." |
| T8 | true | true | false | false | "The faster molecules hit the walls harder and more often. What happens to the pressure?" |
| T9 | true | true | true | false | "The pressure and volume multiply to give the same number every time, so p₁V₁ = p₂V₂." — About 55 words. Student replied "this is long". |
| T10 | true | true | false | true | "Pressure × volume always stays the same." — Leaves out 'fixed mass, constant temperature', so it reads as always true. |
| T11 | true | true | false | false | "So if you double the volume of a gas at constant temperature, what happens to the pressure?" |
| T12 | true | true | false | false | "Now flip it: if you halve the pressure, what happens to the volume?" — Third abstract variant in a row after two non-answers; should have checked in or used numbers. |
| T13 | true | null | false | false | "Do you want me to just tell you the rest of this one?" |
| T14 | true | true | false | true | "so pressure × volume always stays the same" — Again drops the constant-temperature condition. |
| T15 | true | true | false | false | "Next idea: when you push a piston into a gas, you apply a force to it, and that transfers energy to the gas." — Does not acknowledge the correct 'it doubles?'. The term 'work' is never named. |
| T16 | true | true | false | true | "So when the pump does work on the air, what happens to the air's internal energy?" — Uses 'work' and 'internal energy' without defining either. |
| T17 | true | null | false | false | "That brings us to the end of this lesson." — Ends before the temperature-rise link in keyPoints[3], and no checkpoint is used. |
| T18 | true | null | false | false | "You worked well today, especially on how adding energy to a gas raises its internal energy." |

Flow faults (4):

- T5 **question_repeated_after_correct_answer** — "So what does each collision give the wall?" — She had just answered 'they push it right?', which the tutor confirmed.
- T15 **correct_answer_not_acknowledged** — "Next idea: when you push a piston into a gas, you apply a force to it, and that transfers energy to the gas." — S15 'it doubles?' was correct, but T15 opens with 'Next idea' and gives no confirmation.
- T10 **factual_or_unit_slip** — "Pressure × volume always stays the same." — Only true for a fixed mass at constant temperature (keyPoints[2].content).
- T14 **factual_or_unit_slip** — "so pressure × volume always stays the same" — Same missing condition as T10.

Fixes:

1. **teach-core: acknowledge correct answers**: When the student's answer is correct, open with 'Yes — pressure doubles, because…' before starting the next key point. — "Next idea: when you push a piston into a gas, you apply a force to it, and that transfers energy to the gas."
2. **teach-core: do not re-ask answered questions**: After confirming a correct answer, move to the next link (many collisions → steady pressure) instead of re-asking the same question. — "So what does each collision give the wall?"
3. **keyPoints[3].content**: Teach the full chain in short steps: name 'work' as 'energy transferred by a force', define internal energy as 'energy of the molecules', then ask about temperature rise. Use checkpoints.3 before closing. — "So when the pump does work on the air, what happens to the air's internal energy?"
4. **keyPoints[2].content**: Every short restatement must keep the condition: 'for a fixed mass of gas at constant temperature, p × V stays the same'. Then use a simple worked number, e.g. 100 kPa × 2 m³ → 1 m³ gives 200 kPa. — "Pressure × volume always stays the same."
5. **teach-core: wrong-answer handling and turn length**: On a wrong answer, state the right one plainly ('Not heat — a push, a tiny force'). Cap turns at about 35 words, and use one sentence plus a question after 'too much' or 'this is long'. — "Not quite, but you're getting there."
