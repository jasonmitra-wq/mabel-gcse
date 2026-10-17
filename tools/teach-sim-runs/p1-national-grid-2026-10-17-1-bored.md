# Teach sim: p1-national-grid (run, persona bored, 2026-10-17)

Model claude-haiku-4-5-20251001. 18 tutor turns, 0 flagged. Complete: true. Coverage: [true,true,true].

Lesson flags: none

**Tutor** [opening]: Hi! So electricity travels hundreds of miles from power stations to your home through cables and transformers — that's the National Grid. What do you think the National Grid connects?

**Student** (minimal): k so like what am i meant to say

**Tutor** [retry, point 0]: Right — so you need to name what gets connected. What does the National Grid link together?

**Student** (try): power stations and homes i guess?

**Tutor** [fact, point 0]: That's exactly right — power stations and homes, plus schools and businesses too. So here's why the grid uses such a huge potential difference. What happens to the current when you make the potential difference much bigger?

**Student** (try): umm the current gets smaller?

**Tutor** [fact, point 0]: That's right — when potential difference goes up and power stays the same, current has to come down. Now here's the clever bit: when current flows through the cables, some energy gets wasted as heat. What happens to the power wasted as heat when you halve the current?

**Student** (wrong): it halves too?

**Tutor** [checkin, point 0]: Not quite — it actually gets cut down to a quarter, not a half, because power loss depends on current squared. Would you like me to walk you through why that happens?

**Student** (checkin-yes): yeah go on then

**Tutor** [next, point 0]: So the power wasted as heat is proportional to current squared — that's why even a small drop in current saves a massive amount of energy. The formula is: power lost equals current squared times resistance. What do you think happens to the current when the potential difference gets stepped up like that?

> Recap: The National Grid connects power stations to homes, schools and businesses across the country. / The Grid uses really high potential differences to push electricity long distances. / When potential difference increases, the current flowing through the cables gets smaller. / Smaller currents waste much less energy as heat in the cables during transmission.

**Student** (bored): huh?

**Tutor** [retry, point 1]: When the potential difference gets stepped up really high, the current flowing through the cables becomes much smaller. So less energy gets wasted as heat in those cables.  What does a step-up transformer do to the potential difference?

**Student** (try): it makes it bigger yeah?

**Tutor** [fact, point 1]: Yes, exactly — it makes it bigger. So after the electricity leaves the power station with that high potential difference and travels safely through the cables without wasting energy, it needs to come back down to a safe level before it reaches your home. What do you think a step-down transformer does to the potential difference?

**Student** (offtopic): makes it smaller i guess... anyway im starving lol

**Tutor** [retry, point 1]: That's fair — go grab a snack if you need to! Before you do though: a step-down transformer decreases the potential difference, bringing it back down to a safe level for homes. Why do we need to step it down before electricity reaches your house?

**Student** (wrong): cuz it would be too dangerous for us? like we'd get shocked or something

**Tutor** [checkin, point 1]: Right — high potential difference would be really dangerous to touch.  Would you like me to quickly explain the rest of how this all fits together?

**Student** (checkin-no): nah im good im just gonna eat lol

**Tutor** [fact, point 1]: Enjoy your food! Just so you've got the whole picture: that step-down transformer at the end is what makes it safe for your home, and it's why we can send electricity so far without wasting loads of energy on the way.  What happens to the current when the potential difference goes up in those high-voltage cables?

**Student** (bored): huh?

**Tutor** [retry, point 1]: When electricity travels through those long cables at very high potential difference, the current stays low — that means less energy gets wasted as heat in the wires, which is clever. Then at the end, the step-down transformer brings that potential difference back down to safe levels for homes.  What does the step-down transformer do to the potential difference?

**Student** (try): makes it lower? for homes and stuff

**Tutor** [next, point 1]: We use different energy resources to generate it — some like coal and oil will eventually run out, but others like wind and solar can be replenished as we use them. A renewable energy resource is one that keeps getting replaced naturally. What's an example of a renewable energy resource?

> Recap: Step-up transformers increase the potential difference so electricity travels through cables with a low current. / Low current means far less energy gets wasted as heat in the cables during transmission. / Step-down transformers decrease the potential difference back to safe levels before electricity reaches homes. / This two-step process lets us send electricity long distances efficiently and safely.

**Student** (try): wind or solar i guess

**Tutor** [fact, point 2]: Right — wind and solar are both renewable, so they keep getting replaced. Now, some energy resources won't keep getting replaced — they'll run out eventually. What's an example of a non-renewable energy resource?

**Student** (try): coal or oil like you said

**Tutor** [fact, point 2]: Now, even though renewable resources like wind and solar are better in some ways, they have a problem: they're not always available when we need them. Solar cells don't work at night, and wind turbines only work when the wind is blowing — we call this being **intermittent**. What happens to a solar panel at night?

**Student** (wrong): it still makes electricity but like less of it

**Tutor** [retry, point 2]: Right — it does produce less when it's cloudy. But what happens to it at night?

**Student** (wrong): it still works but just way quieter or smth

**Tutor** [complete, point 2]: Not quite — at night there's no sunlight at all, so a solar panel doesn't produce any electricity during those hours. You've covered the really important stuff now: where energy comes from (renewable and non-renewable resources), that some sources are intermittent, and how the National Grid solves that problem by using transformers to send electricity long distances without wasting it.

> Recap: Renewable energy resources like wind and solar get replaced naturally and won't run out. / Non-renewable resources like coal and oil will eventually run out because they can't be replaced. / Renewable energy is intermittent — solar panels don't work at night and wind turbines need wind. / Intermittency means renewable energy isn't always available when we actually need to use it.

**Student** (closing): ok thanks bye

**Tutor** [free]: You're welcome! You've done really well today — come back whenever you want to practise more. Good luck with your GCSEs!

## Judge (claude-opus-5-5)

**FAIL** — engagement 2; would quit at T10; question does not match what was taught: T2, T3, T5, T6, T10

Engagement 2/5 — "nah im good im just gonna eat lol"

Would quit: T10 — "What happens to the current when the potential difference goes up in those high-voltage cables?" (The student has just said they are leaving to eat. The tutor ignores this and re-asks a question already answered at S3. A bored student would close the app here.)

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | true | false | false | "What do you think the National Grid connects?" |
| T1 | true | true | false | false | "What does the National Grid link together?" |
| T2 | true | false | false | false | "What happens to the current when you make the potential difference much bigger?" — Asks about the current before P = IV has been taught. The student has to guess. |
| T3 | true | false | false | false | "What happens to the power wasted as heat when you halve the current?" — Tests the I² relationship before it is taught. The student guessed wrong: 'it halves too?' |
| T4 | true | null | false | false | "Would you like me to walk you through why that happens?" |
| T5 | true | false | false | true | "What do you think happens to the current when the potential difference gets stepped up like that?" — The promised walk-through has no numbers. The question jumps back to something already answered at S3, and 'like that' has no referent. Student replies 'huh?' |
| T6 | true | false | false | false | "What does a step-up transformer do to the potential difference?" — This turn taught the drop in current. Transformers had not been taught yet. |
| T7 | true | true | false | true | "travels safely through the cables without wasting energy" — Factual error. Some energy is still wasted, just less. |
| T8 | true | true | false | false | "Why do we need to step it down before electricity reaches your house?" |
| T9 | true | null | false | false | "Would you like me to quickly explain the rest of how this all fits together?" |
| T10 | true | false | false | true | "What happens to the current when the potential difference goes up in those high-voltage cables?" — Ignores the student's exit. Re-asks the S3 question, which this turn did not teach. Uses 'voltage' against keyPoints[1].tutor_note. |
| T11 | true | true | false | false | "What does the step-down transformer do to the potential difference?" — Repeats the T7 question. The answer is given in the same turn. |
| T12 | true | true | false | true | "We use different energy resources to generate it" — Does not acknowledge S12. Abrupt topic switch, and 'it' has no referent. |
| T13 | true | true | false | false | "What's an example of a non-renewable energy resource?" |
| T14 | true | true | false | false | "What happens to a solar panel at night?" |
| T15 | true | true | false | true | "Right — it does produce less when it's cloudy." — Says 'Right' to a wrong answer. The student is not corrected about night. |
| T16 | true | null | true | true | "how the National Grid solves that problem by using transformers to send electricity long distances without wasting it" — Factual error. Transformers do not solve intermittency, and the claim of zero waste is wrong. |
| T17 | true | null | false | false | "You've done really well today — come back whenever you want to practise more." |

Fixes:

1. **teach-core: teach the fact before asking about it**: Before asking a prediction question, state the rule in one line. For example, say 'P = IV, so if power stays the same and V goes up, I goes down' before asking about current. Say 'loss = I²R, so the current is squared' before asking about halving it. — "What happens to the power wasted as heat when you halve the current?"
2. **keyPoints[0].tutor_note**: Add a no-calculator worked example the tutor must use when it offers a walk-through. Current 2 A gives loss 2×2 = 4 units. Halve it to 1 A and the loss is 1×1 = 1 unit, a quarter. Then ask: 'What if the current is cut to a third?' — "So the power wasted as heat is proportional to current squared — that's why even a small drop in current saves a massive amount of energy."
3. **teach-core: respect exit signals**: When the student declines more help or says they are leaving, give one summary line from revisionCardBullets[1] and end the session. Do not ask a new question. — "nah im good im just gonna eat lol"
4. **teach-core: never affirm a wrong answer**: If the answer is wrong, open with 'Not quite' and correct it immediately. Do not start with 'Right' and then re-ask. — "Right — it does produce less when it's cloudy."
5. **teach-core: end-of-session summary**: Build the summary only from revisionCardBullets. Never claim the grid or transformers fix intermittency or waste no energy. Say 'less energy wasted' (revisionCardBullets[1]). — "how the National Grid solves that problem by using transformers to send electricity long distances without wasting it"
