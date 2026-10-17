# Teach sim: p1-efficiency (run, persona bored, 2026-10-17)

Model claude-haiku-4-5-20251001. 17 tutor turns, 1 flagged. Complete: true. Coverage: [true,true,true,true].

Lesson flags: none

**Tutor** [opening]: Hi! So imagine a petrol engine gets 100 units of energy from fuel, but only 25 of those units actually make the car move — the rest just heats up or gets wasted. What fraction of the petrol engine's input energy actually became useful motion?

**Student** (try): wait so like 25 out of 100? that's like a quarter right?

**Tutor** [retry, point 0]: That fraction, 25/100, tells us how much of the input energy was actually useful. We call that **efficiency** — it's just the proportion of energy that goes into doing the job we want, rather than being wasted as heat or sound. What proportion of the petrol engine's input energy was wasted?

**Student** (bored): huh? like just tell me is it 75

**Tutor** [fact, point 0]: Yes, 75 out of 100 is wasted. So efficiency is just how much of the energy you put in actually does the job you want — the rest gets lost as heat or sound. In the engine, the 25 units that make the car move is the useful output energy.  What happens to the other 75 units?

**Student** (bored): turns into heat or whatever

**Tutor** [retry, point 0]: Right — it does turn into heat. So those 75 units are wasted as heat, but the 25 units that actually move the car are what we call the **useful output energy transfer** — that's the energy doing the job we want.  What's the job the engine is trying to do?

**Student** (wrong): make heat?

**Tutor** [checkin, point 0]: Would you like me to just tell you what the engine's job actually is?

**Student** (checkin-yes): yeah go on

**Tutor** [next, point 0]: The engine's job is to make the car move — so the 25 units that push the car forward are the useful output energy, and all the energy the engine gets from fuel (100 units) is the total input energy. What do you think happens to the other 75 units we talked about?

> Recap: Efficiency means how much of the energy you put in actually does the job you want. / The rest of the input energy gets wasted as heat or sound instead. / You can write efficiency as a fraction — useful energy out divided by total energy in. / In a petrol engine, only about 25% becomes useful motion; the other 75% becomes wasted heat.

**Student** (bored): this is long innit

**Tutor** [retry, point 1]: Sorry, let me make it simpler. The engine wastes 75 units as heat, and only uses 25 units to move the car. So we divide the useful bit by the total bit: 25 ÷ 100, which gives us 0.25 or 25%.  What do you get if you divide 375 by 500?

⚑ unanswerable: no word from the lesson

**Student** (bored): huh?

**Tutor** [fact, point 1]: You get 0. 75, or 75%. Now, here's something useful: the energy that doesn't become useful output is wasted energy. So wasted energy is just the total input energy minus the useful output energy. How much energy was wasted in the car engine — the one that got 100 units in and only 25 units as useful motion?

**Student** (wrong): um like 50?

**Tutor** [retry, point 1]: Not quite — let me say it a different way. The engine gets 100 units in total, and only 25 units become useful motion, so the wasted energy is 100 minus 25.  What's 100 minus 25?

**Student** (try): 75?

**Tutor** [checkin, point 1]: Right — that's 75 units wasted.  Would you like me to just walk you through how we use this to work out efficiency, so you can see the whole thing?

**Student** (checkin-yes): yeah ok go on

**Tutor** [next, point 1]: So wasted energy is the total input energy minus the useful output energy — in that car engine, 100 minus 25 equals 75 units wasted. What happens to most of the energy that goes into a filament bulb?

> Recap: Efficiency means dividing useful energy output by total energy input. / Wasted energy is whatever doesn't become useful output — just subtract it out. / Most engines waste loads of energy as heat rather than moving things. / You can write efficiency as a decimal or a percentage.

**Student** (idk): idk like heat?

**Tutor** [retry, point 2]: You're on the right track — a filament bulb does waste a lot of energy as heat, but it wastes *most* of its energy that way, not just some. So when you put energy into an old filament bulb, where does most of it go?

**Student** (try): most of it becomes heat

**Tutor** [fact, point 2]: Exactly — most of it becomes heat. An LED bulb is different: it's much better at turning the energy it gets into useful light instead of wasting it as heat, which is why LEDs replaced old filament bulbs in most homes.  What do you think happens to the wasted energy in an LED bulb — where does it go?

**Student** (bored): this is long

**Tutor** [retry, point 2]: An LED bulb wastes some energy as heat too, but much less than a filament bulb does — most of its energy becomes useful light instead.  How much of the energy going into an LED bulb becomes useful light?

**Student** (try): most of it? like more than the filament one

**Tutor** [next, point 2]: Exactly — an LED turns far more of its energy into useful light than a filament bulb does. One simple way is to put oil between moving parts — this is called lubrication — so that friction doesn't waste so much energy as heat. Why would putting oil between moving parts reduce the wasted heat?

> Recap: Filament bulbs waste most of their energy as heat, not light. / LED bulbs turn most of their energy into useful light instead. / LEDs are more efficient because they waste less energy as heat. / You can compare devices by looking at how much energy they waste.

**Student** (offtopic): oil makes them slide easier so less friction i guess

**Tutor** [complete, point 3]: Exactly — oil lets the surfaces slide more smoothly, so there's less friction rubbing away energy as heat. That's a really good way to think about efficiency: you've seen that wasted energy usually becomes heat, and that we can reduce waste by making things work more smoothly. You've got the main idea — well done.

> Recap: Oil between moving parts makes them slide more easily instead of rubbing. / When parts rub less, there's less friction creating wasted heat energy. / LEDs waste much less energy as heat than old filament bulbs do.

**Student** (closing): ok thanks bye

**Tutor** [free]: You're welcome — you've done really well today. Come back whenever you want to go over it again.

## Judge (claude-opus-5-5)

**FAIL** — engagement 2; would quit at T6; question does not match what was taught: T1, T5, T6, T10, T12

Engagement 2/5 — "S6: this is long innit"

Would quit: T6 — "T6: Sorry, let me make it simpler. The engine wastes 75 units as heat, and only uses 25 units to move the car. So we divide the useful bit by the total bit: 25 ÷ 100, which gives us 0.25 or 25%. What do you get if you divide 375 by 500?" (Student had just said 'this is long innit'. Instead of simplifying, the tutor fires an unexplained hard division at a student weak in mental arithmetic.)

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | true | false | false | "T0: Hi! So imagine a petrol engine gets 100 units of energy from fuel, but only 25 of those units actually make the car move — the rest just heats up or gets wasted. What fraction of the petrol engine's input energy actually became useful motion?" |
| T1 | true | false | false | true | "T1: That fraction, 25/100, tells us how much of the input energy was actually useful. We call that **efficiency** — it's just the proportion of energy that goes into doing the job we want, rather than being wasted as heat or sound. What proportion of the petrol engine's input energy was wasted?" — Never confirms the student's correct 'a quarter'. It teaches efficiency as the useful proportion, then asks about the wasted proportion instead. Student replies 'huh?'. |
| T2 | true | true | false | false | "T2: Yes, 75 out of 100 is wasted. So efficiency is just how much of the energy you put in actually does the job you want — the rest gets lost as heat or sound. In the engine, the 25 units that make the car move is the useful output energy. What happens to the other 75 units?" — Asks something it already answered in the same sentence ('gets lost as heat or sound'), which wastes the student's patience. |
| T3 | true | true | false | false | "T3: Right — it does turn into heat. So those 75 units are wasted as heat, but the 25 units that actually move the car are what we call the **useful output energy transfer** — that's the energy doing the job we want. What's the job the engine is trying to do?" |
| T4 | true | null | false | true | "T4: Would you like me to just tell you what the engine's job actually is?" — Leaves the misconception 'make heat?' uncorrected and adds a wasted round-trip. |
| T5 | true | false | false | false | "T5: The engine's job is to make the car move — so the 25 units that push the car forward are the useful output energy, and all the energy the engine gets from fuel (100 units) is the total input energy. What do you think happens to the other 75 units we talked about?" — Teaches total input, but re-asks the 75-units question for the third time instead of testing total input. Student: 'this is long innit'. |
| T6 | true | false | false | true | "T6: Sorry, let me make it simpler. The engine wastes 75 units as heat, and only uses 25 units to move the car. So we divide the useful bit by the total bit: 25 ÷ 100, which gives us 0.25 or 25%. What do you get if you divide 375 by 500?" — 375 ÷ 500 appears with no motor context and is hard mental arithmetic for this student. Student: 'huh?'. |
| T7 | true | true | false | true | "T7: You get 0. 75, or 75%. Now, here's something useful: the energy that doesn't become useful output is wasted energy. So wasted energy is just the total input energy minus the useful output energy. How much energy was wasted in the car engine — the one that got 100 units in and only 25 units as useful motion?" — Answers its own question with a malformed '0. 75' and never explains it. Then re-asks the wasted amount that the student already gave as 75 in S2. |
| T8 | true | true | false | false | "T8: Not quite — let me say it a different way. The engine gets 100 units in total, and only 25 units become useful motion, so the wasted energy is 100 minus 25. What's 100 minus 25?" |
| T9 | true | null | false | false | "T9: Right — that's 75 units wasted. Would you like me to just walk you through how we use this to work out efficiency, so you can see the whole thing?" |
| T10 | true | false | false | true | "T10: So wasted energy is the total input energy minus the useful output energy — in that car engine, 100 minus 25 equals 75 units wasted. What happens to most of the energy that goes into a filament bulb?" — Breaks the promised efficiency walkthrough, repeats the subtraction, then jumps to filament bulbs, which have not been taught. |
| T11 | true | true | false | true | "T11: You're on the right track — a filament bulb does waste a lot of energy as heat, but it wastes *most* of its energy that way, not just some. So when you put energy into an old filament bulb, where does most of it go?" — The student's 'heat' was correct. The tutor treats it as partial and re-asks the same question. |
| T12 | true | false | false | false | "T12: Exactly — most of it becomes heat. An LED bulb is different: it's much better at turning the energy it gets into useful light instead of wasting it as heat, which is why LEDs replaced old filament bulbs in most homes. What do you think happens to the wasted energy in an LED bulb — where does it go?" — Teaches that LEDs give more useful light, then asks where LED waste goes, which was not taught. Student: 'this is long'. |
| T13 | true | true | false | false | "T13: An LED bulb wastes some energy as heat too, but much less than a filament bulb does — most of its energy becomes useful light instead. How much of the energy going into an LED bulb becomes useful light?" — The question just echoes the sentence before it, so it tests nothing. |
| T14 | true | true | false | true | "T14: Exactly — an LED turns far more of its energy into useful light than a filament bulb does. One simple way is to put oil between moving parts — this is called lubrication — so that friction doesn't waste so much energy as heat. Why would putting oil between moving parts reduce the wasted heat?" — 'One simple way' refers to nothing. 'Improving efficiency' is never introduced. |
| T15 | true | null | false | true | "T15: Exactly — oil lets the surfaces slide more smoothly, so there's less friction rubbing away energy as heat. That's a really good way to think about efficiency: you've seen that wasted energy usually becomes heat, and that we can reduce waste by making things work more smoothly. You've got the main idea — well done." — Claims mastery, but the student never calculated an efficiency. No checkpoint was run, and the ≤1 rule and percentage conversion were never covered. |
| T16 | true | null | false | false | "T16: You're welcome — you've done really well today. Come back whenever you want to go over it again." |

Fixes:

1. **keyPoints[1].memTip**: Remove the bare 'motor 375/500=0.75' drill. Set the motor up as a story first ('motor gets 500 J, does 375 J useful work'). Have the tutor show the division, or use easy numbers like 300/400. Never ask raw division of a weak-arithmetic student. — "T6: Sorry, let me make it simpler. The engine wastes 75 units as heat, and only uses 25 units to move the car. So we divide the useful bit by the total bit: 25 ÷ 100, which gives us 0.25 or 25%. What do you get if you divide 375 by 500?"
2. **teach-core: track answered questions**: Never re-ask a question the student has already answered correctly. After the answer, move to the next concept. Here: total input, then the efficiency formula, then the ≤1 check. — "T5: The engine's job is to make the car move — so the 25 units that push the car forward are the useful output energy, and all the energy the engine gets from fuel (100 units) is the total input energy. What do you think happens to the other 75 units we talked about?"
3. **teach-core: confirm correct answers**: Explicitly confirm correct student answers ('Yes — a quarter, 0.25, is its efficiency') instead of ignoring them or calling them partial. — "S1: wait so like 25 out of 100? that's like a quarter right?"
4. **teach-core: honour walkthrough offers / run checkpoints before wrap-up**: When the student accepts 'walk you through how we use this to work out efficiency', do that walkthrough. Before T15 praises mastery, run checkpoints.0 (560/800) and checkpoints.2 (lamp comparison) at minimum. — "T9: Right — that's 75 units wasted. Would you like me to just walk you through how we use this to work out efficiency, so you can see the whole thing?"
5. **teach-core: shorten after boredom signal**: After 'this is long', switch to one-sentence turns with an either/or question (e.g. 'Engine's job: make heat or make the car move?'). Correct misconceptions directly instead of asking permission to tell. — "T4: Would you like me to just tell you what the engine's job actually is?"
