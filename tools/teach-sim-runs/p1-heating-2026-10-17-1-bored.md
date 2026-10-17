# Teach sim: p1-heating (run, persona bored, rescored, 2026-10-17)

Model claude-haiku-4-5-20251001. 19 tutor turns, 0 flagged. Complete: true. Coverage: [true,true,true,true].

Lesson flags: none

**Tutor** [opening]: Hi! When we heat something up, we're putting energy into it, and that energy makes the particles move around more. What do you think happens to the temperature when the particles have more energy?

**Student** (offtopic): yeah but like my phone's about to die lol

**Tutor** [retry, point 0]: Oh no, plug it in when you get a chance! But quick thing — when particles get more energy and move around faster, the temperature *goes up*. That's what temperature really means: how fast the particles are jiggling.  What happens to the temperature of water when you heat it?

**Student** (try): it goes up innit cos particles move faster

**Tutor** [fact, point 0]: We write that as an equation: **ΔE = mcΔθ**, which means change in energy equals mass times specific heat capacity times change in temperature. What does the **m** stand for in that equation?

**Student** (idk): idk what m is ngl

**Tutor** [retry, point 0]: Right, so in that equation, **m** just stands for how much of the substance you've got — like if you're heating up 1 kg of water versus 10 kg of water, the mass is different. What word do we use for how much something weighs?

**Student** (try): mass i guess? thats the m?

**Tutor** [checkin, point 0]: Spot on — **m** is mass!  Do you want me to walk you through what the **c** in that equation means?

**Student** (checkin-yes): yeah go on then

**Tutor** [next, point 0]: Right, so **Δθ** (that's the Greek letter delta theta) just means the temperature *change* — you take the final temperature and subtract the starting temperature. If you already know the energy and the mass and temperature change, but you need to find the specific heat capacity, which part of the equation would you move to the other side?

> Recap: When you heat something, the particles move faster and the temperature goes up. / Energy, mass, and temperature are linked together in the equation ΔE = mcΔθ. / The m in that equation means mass — basically how much stuff you're heating up.

**Student** (bored): huh?

**Tutor** [retry, point 1]: No worries! So imagine you know the energy that went in, the mass, and how much the temperature changed — but you want to find out what the specific heat capacity **c** is. You'd need to rearrange the equation to get **c** on its own.  What would you divide the energy by to get **c** by itself?

**Student** (bored): this is confusing mate

**Tutor** [next, point 1]: Now, in the actual practical where you heat something up to find its specific heat capacity, you need to measure how much electrical energy goes into it — and there's a handy meter called a **joulemeter** that does exactly that job for you. What does a joulemeter measure?

> Recap: The formula ΔE = mcΔθ links energy, mass, specific heat capacity and temperature change together. / Δθ just means the temperature change — final temperature minus starting temperature. / You can rearrange the formula different ways depending on what you're trying to find. / If you know the energy, mass and temperature change, divide energy by both to find c.

**Student** (try): the energy thats gone in innit

**Tutor** [next, point 2]: Now, here's something really important: when you heat something up, that energy doesn't just vanish — it gets stored inside the object. We call that stored energy the **internal energy**, and it's the total energy of all the particles moving and vibrating inside the substance. What do you think happens to those particles when you heat something up?

> Recap: A joulemeter measures the electrical energy being supplied during the heating experiment. / This tells you exactly how much energy has gone into your substance. / You need this measurement to calculate the specific heat capacity using the results.

**Student** (bored): this is long mate

**Tutor** [retry, point 3]: Think of it this way — when you heat something, all those tiny particles inside start moving around faster and more energetically. That's the internal energy: it's all that movement and energy added together from every single particle.  When you heat something up, what happens to how fast the particles are moving?

**Student** (try): they move faster i guess

**Tutor** [fact, point 3]: Right — they move faster, and that's internal energy storing up inside the object. Now, **temperature** is actually different: it's how hot or cold something is, and it's linked to how fast the particles are moving *on average*.  What do you think "on average" means when we're talking about millions of particles?

**Student** (bored): huh?

**Tutor** [retry, point 3]: Okay, imagine you've got millions of particles bouncing around. Some move really fast, some slowly — temperature is about how fast *most* of them are moving, not every single one.  How would you measure temperature?

**Student** (idk): idk with a thermometer?

**Tutor** [checkin, point 3]: You've got it — a thermometer measures temperature. Shall I just walk you through the rest of this bit about temperature and internal energy?

**Student** (checkin-no): no im bored lol

**Tutor** [fact, point 3]: Fair enough! So here's the thing: temperature is just a measure of how hot or cold something is, and it tells us about the average speed of the particles. The hotter something is, the faster those particles are moving on average.  What do you measure temperature in?

**Student** (try): degrees? like celsius?

**Tutor** [retry, point 3]: Exactly — degrees Celsius is right! So temperature tells us how fast the particles are moving *on average*. The higher the temperature, the faster they're jiggling about.  What happens to how fast particles move when something gets hotter?

**Student** (try): they move faster innit

**Tutor** [complete, point 3]: Spot on — they move faster innit. So temperature is basically a measure of how fast the particles are moving on average, and it's linked to their kinetic energy, which is the energy of movement.

> Recap: Internal energy is all the energy stored in an object from its moving particles. / Temperature measures how hot or cold something is and shows average particle speed. / When you heat something, particles move faster and temperature goes up. / Temperature is measured in degrees Celsius.

**Student** (closing): ok can we stop now

**Tutor** [free]: No problem! You've got the big idea sorted — particles move faster when things heat up, and different materials need different amounts of energy to warm up. That's specific heat capacity, and it's why the sea keeps coastal towns cozy.  Same time next week?

**Student** (closing): ok thanks bye

**Tutor** [free]: You're welcome! Well done today — you've got the foundations of this sorted. Same time next week?

**Student** (closing): yeah ok bye

**Tutor** [free]: See you next week!

## Judge (claude-opus-5-5)

**FAIL** — engagement 2; would quit at T13; question does not match what was taught: T2, T5, T6, T11, T13

Engagement 2/5 — "S13: no im bored lol"

Would quit: T13 — "Fair enough! So here's the thing: temperature is just a measure of how hot or cold something is, and it tells us about the average speed of the particles." (The student refused more on this topic ('no im bored lol'), but the tutor kept re-teaching temperature for a third time. This came after the confusion at S7 was ignored and the complaint at S9 ('this is long mate').)

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | true | false | false | "What do you think happens to the temperature when the particles have more energy?" |
| T1 | true | true | false | false | "What happens to the temperature of water when you heat it?" — The answer ('the temperature *goes up*') is stated in the same turn, so the question checks nothing. |
| T2 | true | false | false | true | "What does the **m** stand for in that equation?" — Jumps straight to the full equation with no bridge, then asks about m before explaining any symbol. The student answers 'idk what m is ngl'. |
| T3 | true | true | false | true | "What word do we use for how much something weighs?" — Mixes up mass and weight. Weight is a force in N; m is mass in kg. |
| T4 | true | null | false | false | "Do you want me to walk you through what the **c** in that equation means?" — The student accepts this offer, but T5 never delivers it. |
| T5 | true | false | true | true | "Right, so **Δθ** (that's the Greek letter delta theta) just means the temperature *change*" — Promised c but taught Δθ instead. Then asks about rearranging for c, which was never defined or shown. The student replies 'huh?'. |
| T6 | true | false | false | true | "What would you divide the energy by to get **c** by itself?" — Asks the student to rearrange without ever showing how or giving c = ΔE/(mΔθ). This student is weak at maths. |
| T7 | true | true | false | false | "Now, in the actual practical where you heat something up to find its specific heat capacity" — Ignores 'this is confusing mate' and drops the rearrangement unresolved. The question just repeats the answer given in the same turn. |
| T8 | true | true | true | false | "We call that stored energy the **internal energy**, and it's the total energy of all the particles moving and vibrating inside the substance." — Runs about 60 words; the student replies 'this is long mate'. It also omits potential energy from internal energy. |
| T9 | true | true | false | false | "When you heat something up, what happens to how fast the particles are moving?" — Ignores 'this is long mate'. The answer ('moving around faster') is stated in the same turn. This is the second time the question has been asked. |
| T10 | true | true | false | false | "What do you think "on average" means when we're talking about millions of particles?" — An abstract question for a bored student; the reply is 'huh?'. |
| T11 | true | false | false | true | "temperature is about how fast *most* of them are moving, not every single one. How would you measure temperature?" — 'Most' is wrong; temperature relates to the average. The question about measuring temperature does not test 'average'. |
| T12 | true | null | false | false | "Shall I just walk you through the rest of this bit about temperature and internal energy?" |
| T13 | true | false | false | false | "What do you measure temperature in?" — Overrides the student's 'no' and re-teaches temperature anyway. The question about units was never taught. |
| T14 | true | true | false | false | "What happens to how fast particles move when something gets hotter?" — Third repeat of the same question, with the answer given in the same turn. |
| T15 | true | null | false | false | "Spot on — they move faster innit." — Mimics the student's slang awkwardly. Adds nothing new. |
| T16 | true | null | false | true | "different materials need different amounts of energy to warm up. That's specific heat capacity" — The summary claims content that was never taught in the session. c was never defined, and ΔE = mcΔθ was never used with numbers. |
| T17 | true | null | false | false | "Well done today — you've got the foundations of this sorted. Same time next week?" — Repeats the sign-off already given in T16. |
| T18 | true | null | false | false | "See you next week!" |

Fixes:

1. **teach-core: honour refusals and confusion signals**: Handle three signals. (1) If the student answers 'no' to a check-in, move to the next key point or offer to end; never re-teach the same point. (2) On 'confusing', 'huh?' or 'idk', re-explain the same idea in one sentence with one number example before moving on. (3) On 'this is long', cap the next turns at 30 words. — "Fair enough! So here's the thing: temperature is just a measure of how hot or cold something is, and it tells us about the average speed of the particles."
2. **teach-core: deliver what was offered**: When the student accepts an offer (e.g. 'walk you through what the c means'), the next turn must teach exactly that item. Teach c from keyPoints[0].writeBullets[0] before anything else. Do not switch to Δθ or rearranging. — "Right, so **Δθ** (that's the Greek letter delta theta) just means the temperature *change*"
3. **keyPoints[0].content, keyPoints[1].content, keyPoints[2].content, keyPoints[3].content**: Complete the truncated text: 'symbol c. I', 'Use the size of', 'Measure the energy supplied wi', 'Internal energy is the total '. Make sure keyPoints[0].content explicitly defines c as 'energy to warm 1 kg by 1°C' so the tutor teaches c before the equation. — "What does the **m** stand for in that equation?"
4. **keyPoints[1].tutor_note**: Add: 'For weak arithmetic, never ask the student to rearrange cold. First show a filled-in example, e.g. c = 630,000 ÷ (3 × 50) = 4200. Then ask the student only to pick the right number to divide by.' — "What would you divide the energy by to get **c** by itself?"
5. **keyPoints[3].tutor_note**: Add: 'Temperature relates to the AVERAGE kinetic energy per particle, not how fast "most" particles move. Do not ask the same "what happens when heated" question more than once. Use the lake-vs-spark checkpoint instead.' — "temperature is about how fast *most* of them are moving, not every single one. How would you measure temperature?"
