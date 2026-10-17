# Teach sim: p1-heating (run, persona bored, 2026-10-17)

Model claude-haiku-4-5-20251001. 13 tutor turns, 1 flagged. Complete: true. Coverage: [true,true,true,true].

Lesson flags: none

**Tutor** [opening]: Hi! Ever wondered why the sea keeps coastal towns warm long after summer, or why pie filling burns your mouth but the pastry doesn't? That's all about specific heat capacity — how much energy different materials need to heat up. What does specific heat capacity measure?

⚑ unanswerable: more than one question

**Student** (offtopic): ugh my battery's dying why's this even important tho

**Tutor** [retry, point 0]: Hope your battery holds! So specific heat capacity just means: how much energy you need to heat up 1 kg of something by 1°C. Why's that useful to know?

**Student** (try): oh ok so like... different things need different amounts of energy?

**Tutor** [fact, point 0]: Exactly — different materials need very different amounts of energy to heat up by the same amount. So scientists use an equation to work out how much energy you need: change in thermal energy equals mass times specific heat capacity times the change in temperature. What does the "m" stand for in that equation?

**Student** (try): mass innit

**Tutor** [retry, point 0]: Right — mass is what we need. So in that equation, the "m" is the mass of whatever you're heating up, measured in kilograms. The bigger the mass, the more energy you need to heat it.  What does the "c" stand for in that equation?

**Student** (offtopic): wait my mate just texted me something mad lol

**Tutor** [checkin, point 0]: Want me to just tell you what the "c" stands for so we can move on?

**Student** (checkin-no): nah nah tell me i can figure it out

**Tutor** [next, point 0]: Right, so the "c" stands for **specific heat capacity** — that's the amount of energy needed to raise 1 kg of a substance by 1°C. The equation is **ΔE = mcΔθ**, which means change in thermal energy equals mass times specific heat capacity times temperature change. If you wanted to find the mass, how would you rearrange the equation?

> Recap: Specific heat capacity tells you how much energy is needed to heat 1 kg by 1°C. / Different materials need different amounts of energy to warm up by the same temperature. / The equation is: change in energy = mass × specific heat capacity × temperature change. / Mass (m) is measured in kilograms — bigger mass means you need more energy.

**Student** (bored): huh? too much mate

**Tutor** [retry, point 1]: Fair enough — let me make it simpler. If you know the energy, the mass, and the temperature change, how would you find the specific heat capacity?

**Student** (try): um divide energy by mass and temp change?

**Tutor** [next, point 1]: That's right — divide energy by mass and temperature change, so c = ΔE divided by m times Δθ. There's a special instrument called a **joulemeter** that measures this energy directly in joules. What do you think a joulemeter does?

> Recap: The equation ΔE = mcΔθ links thermal energy, mass, specific heat capacity, and temperature change. / Specific heat capacity is the energy needed to warm 1 kg of something by 1°C. / To find specific heat capacity, divide the energy by both the mass and temperature change.

**Student** (try): measures how many joules something uses?

**Tutor** [next, point 2]: Spot on. Now, imagine a big cold swimming pool and a small hot cup of tea — which one has more total energy stored in all its particles?

> Recap: The formula for specific heat capacity is c = ΔE ÷ (m × Δθ). / A joulemeter is a device that directly measures energy transferred in joules. / To find specific heat capacity, you need to measure the energy supplied to a material.

**Student** (minimal): what?

**Tutor** [retry, point 3]: Think of it this way: a big cold pool has loads of particles, even though they're moving slowly. A tiny hot cup has far fewer particles moving fast. Which one has more energy altogether in all its particles?

**Student** (try): the pool i guess? cos theres way more stuff in it

**Tutor** [fact, point 3]: Right — the pool does have more total energy altogether because it has so many more particles, even though they're cold. Now, temperature is different: it's about how fast the particles are moving *on average*. What do you think happens to how fast particles move when you heat something up?

**Student** (wrong): they move slower cuz theres less energy?

**Tutor** [complete, point 3]: Not quite — when you heat something up, you're actually *adding* energy to it, so the particles move *faster*, not slower. More heat means faster movement on average. We've done a lot of ground here today!

> Recap: Thermal energy is the total energy stored in all the particles in something — a big cold pool has more total energy than a hot cup because it has way more particles. / Temperature is different — it measures how fast particles are moving on average, not the total amount of energy. / When you heat something up, its particles move faster on average, so the temperature goes up.

**Student** (closing): ok thanks bye

**Tutor** [free]: You're welcome! You've got the main idea now — particles move faster when heated, and different materials need different amounts of energy to warm up. Come back anytime you want to go over it again.

## Judge (claude-opus-5-5)

**FAIL** — engagement 2; would quit at T11; question does not match what was taught: T1, T5, T6, T8

Engagement 2/5 — "huh? too much mate"

Would quit: T11 — "We've done a lot of ground here today!" (The tutor wraps up after a wrong answer with no quick win or next step, which hands a bored student an exit; the reply is 'ok thanks bye'.)

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | true | false | false | "That's all about specific heat capacity — how much energy different materials need to heat up. What does specific heat capacity measure?" |
| T1 | true | false | false | true | "Hope your battery holds! So specific heat capacity just means: how much energy you need to heat up 1 kg of something by 1°C. Why's that useful to know?" — The student asked 'why's this even important'. The tutor bounces the same question back without answering it, though the intro has hooks ready (radiators, sea, pie filling). Usefulness was never taught. |
| T2 | true | true | false | false | "What does the "m" stand for in that equation?" — The answer was given in the same turn ('mass times...'), so it tests nothing. |
| T3 | true | true | false | false | "What does the "c" stand for in that equation?" — Already stated in T2 ('mass times specific heat capacity'), so this is a giveaway question. |
| T4 | true | null | false | false | "Want me to just tell you what the "c" stands for so we can move on?" — Offers to give up instead of a quick hook to win attention back. |
| T5 | true | false | true | false | "If you wanted to find the mass, how would you rearrange the equation?" — Rearranging was never taught. The turn is a dense ~58-word block with an untaught question; the student replies 'huh? too much mate'. |
| T6 | true | false | false | false | "If you know the energy, the mass, and the temperature change, how would you find the specific heat capacity?" — Still an untaught rearrangement; it is no simpler than T5. No numbers and no Δθ subtraction were ever shown. |
| T7 | true | true | false | true | "so c = ΔE divided by m times Δθ. There's a special instrument called a **joulemeter** that measures this energy directly in joules. What do you think a joulemeter does?" — No brackets, so it reads as (ΔE/m)×Δθ. The joulemeter appears with no practical context ('this energy'?). The question repeats the answer just given. |
| T8 | true | false | false | true | "Now, imagine a big cold swimming pool and a small hot cup of tea — which one has more total energy stored in all its particles?" — Abrupt jump to internal energy with nothing taught first; the student replies 'what?'. |
| T9 | true | true | false | false | "Which one has more energy altogether in all its particles?" |
| T10 | true | true | false | false | "Now, temperature is different: it's about how fast the particles are moving *on average*." — The term 'internal energy' is never named, so the student can't link it to the exam wording. |
| T11 | true | null | false | true | "More heat means faster movement on average. We've done a lot of ground here today!" — 'More heat' blurs energy transferred with temperature. 'done a lot of ground' is garbled. The tutor ends the session right after an error with no recheck. |
| T12 | true | null | false | false | "You've got the main idea now" — Overclaims: no ΔE = mcΔθ calculation was done, and Δθ = final − initial (the lesson's examTip) was never covered. |

Fixes:

1. **teach-core: answer the student's 'why does this matter' with a lesson hook before asking anything**: When the student asks why it's important, give one concrete hook from intro (e.g. 'it's why the sea stays warm and pie filling burns you'). Then ask a question about it. Never reflect the student's question back. — "ugh my battery's dying why's this even important tho"
2. **teach-core: only ask about content taught in the same or previous turn**: Before asking for a rearrangement (keyPoints[1]) or an internal-energy comparison (keyPoints[3]), teach it in one short sentence first. Block questions whose answer was never shown, and block questions whose answer is stated in the same turn. — "If you wanted to find the mass, how would you rearrange the equation?"
3. **keyPoints[1].tutor_note**: Add: 'For learners weak at mental arithmetic, first do one tiny example: 1 kg water warmed from 20°C to 30°C, so Δθ = 30 − 20 = 10, and ΔE = 1 × 4200 × 10 = 42,000 J. Show the subtraction step out loud before any rearrangement.' — "um divide energy by mass and temp change?"
4. **teach-core: write rearranged formulas with explicit brackets/multiplication**: Always render as c = ΔE ÷ (m × Δθ), and say 'multiply mass by temp change first, then divide', as in keyPoints[1].tutor_note. — "so c = ΔE divided by m times Δθ."
5. **teach-core: don't close the session after a wrong answer**: After correcting an error, ask one easy recheck question (e.g. 'So heating makes particles move faster or slower?'). Then offer one short checkpoint (checkpoints.0) before any wrap-up. Never volunteer an ending line like 'We've done a lot of ground'. — "Not quite — when you heat something up, you're actually *adding* energy to it, so the particles move *faster*, not slower."
