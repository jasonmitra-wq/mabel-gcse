# Teach sim: p3-density (run, persona bored, 2026-10-18)

Model claude-sonnet-5-5. 10 tutor turns, 1 flagged. Complete: true. Coverage: [true,true,true,true].

Lesson flags: none

**Tutor** [opening]: Welcome! Today we're finding out why wood floats while a nail sinks, and the answer is density: how much mass is packed into a given space, with the symbol ρ (rho) and the unit kg/m³. So imagine two bags of the same size, one full of flour and one full of popcorn: which bag has the higher density?

**Student** (bored): huh? like just tell me which one

**Tutor** [next, point 0]: The flour bag is denser, because more mass is packed into the same space. Density is ρ = m / V (mass divided by volume), in kg/m³ or g/cm³. High density means particles that are heavier, more closely packed, or both. Water is 1000 kg/m³, air is ~1.2 kg/m³, iron is 7900 kg/m³ and gold is 19,300 kg/m³. An object floats if it is less dense than the fluid, and sinks if it is denser.  Next we'll use the equation, and watch units: 1 g/cm³ = 1000 kg/m³, so you multiply by 1000 to convert g/cm³ to kg/m³. Aluminium is 2.7 g/cm³, so what is that in kg/m³?

> Recap: Density is how much mass is packed into a given space. / Its symbol is ρ (rho), and the unit is kg/m³. / Same-sized bags: flour has more mass, so it is denser than popcorn. / Density explains why wood floats but a nail sinks.

⚑ over length (108 words)

**Student** (bored): this is long mate

**Tutor** [retry, point 1]: Fair enough, I'll keep it short. To switch from g/cm³ to kg/m³, you just multiply by 1000. So 1 g/cm³ becomes 1000 kg/m³.  Water is 1 g/cm³, so what is its density in kg/m³?

**Student** (idk): idk lol

**Tutor** [next, point 1]: No worries. Water is 1 g/cm³, so that's 1000 kg/m³.  Now the lab: to find the volume of an odd-shaped stone, you lower it into a eureka can, which is filled to the brim with water. The stone pushes water out of the spout. What does that pushed-out water tell you about the stone?

> Recap: Density is mass divided by volume: ρ = m / V. / More mass squeezed into the same space means higher density. / Less dense than the fluid floats, denser sinks. / To change g/cm³ into kg/m³, multiply by 1000.

**Student** (try): umm the water that comes out is like the same size as the stone right

**Tutor** [fact, point 2]: Yes — the pushed-out water is the same volume as the stone. That's called displacement, and it means you can catch that water in a measuring cylinder and read off the stone's volume.  You also need its mass, which you'd get from a balance. What equation then gives you the stone's density?

**Student** (bored): k

**Tutor** [retry, point 2]: Let me say it another way. Once you've caught the water in the measuring cylinder, you read its volume, and that's the stone's volume. You've got the mass from the balance too.  So what do you divide the mass by to get the stone's density?

**Student** (try): divide mass by volume?

**Tutor** [next, point 2]: Yes — mass divided by volume is right. Now let's use the particle model to explain density: in a gas, the particles are very far apart, so most of a gas is empty space.  So how does that spread-out particle arrangement affect a gas's density?

> Recap: Water is 1 g/cm³, which is the same as 1000 kg/m³. / Lower an odd-shaped stone into a brim-full eureka can. / The water pushed out has the same volume as the stone. / Catch it in a measuring cylinder, then divide mass by volume for density.

**Student** (wrong): so theres more space so density is like really high?

**Tutor** [retry, point 3]: Not quite: more space means *less* mass packed into each bit of volume, so a gas's density is really low. Air is about 1.2 kg/m³, while water is 1000 kg/m³.  So in a gas, what is most of the volume made up of?

**Student** (try): empty space?

**Tutor** [complete, point 3]: Yes — empty space is right, which is why gases have such low density. That brings us to the end of this lesson.

> Recap: Density is mass divided by volume: how much mass fits in each bit of space. / In a gas, the particles are far apart, so most of it is empty space. / More empty space means less mass per volume, so gases have low density. / Air is about 1.2 kg/m³, while water is 1000 kg/m³.

**Student** (closing): ok thanks bye

**Tutor** [free]: You're welcome. You've picked up how density is mass divided by volume, and why gases come out so low. Come back any time to go over the rest. Bye for now!

## Judge (claude-opus-5-5)

**PASS**

Engagement 3/5 — "this is long mate"

Would quit: false

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | true | false | false | "So imagine two bags of the same size, one full of flour and one full of popcorn: which bag has the higher density?" |
| T1 | true | true | true | false | "Water is 1000 kg/m³, air is ~1.2 kg/m³, iron is 7900 kg/m³ and gold is 19,300 kg/m³." — About 100 words. It packs the definition, the particle idea, four densities, floating and unit conversion into one reply. The student complained straight after. |
| T2 | true | true | false | false | "So 1 g/cm³ becomes 1000 kg/m³. Water is 1 g/cm³, so what is its density in kg/m³?" — The answer is stated in the line just before the question. This is a pointless check, and the student replied 'idk lol'. |
| T3 | true | true | false | false | "The stone pushes water out of the spout. What does that pushed-out water tell you about the stone?" — Unit conversion was dropped after 'idk' with no retry. The worked examples in keyPoints[1] were skipped completely. |
| T4 | true | true | false | false | "Yes — the pushed-out water is the same volume as the stone." |
| T5 | true | true | false | false | "So what do you divide the mass by to get the stone's density?" |
| T6 | true | true | false | false | "So how does that spread-out particle arrangement affect a gas's density?" |
| T7 | true | true | false | false | "So in a gas, what is most of the volume made up of?" — This re-asks a fact T6 stated outright ('most of a gas is empty space'). It does not check the reasoning she just got wrong. |
| T8 | true | null | false | false | "That brings us to the end of this lesson." — The lesson ends early. The liquid/solid part of keyPoints[3], the keyPoints[1] calculations and the checkpoints were never reached. |
| T9 | true | null | false | false | "You've picked up how density is mass divided by volume, and why gases come out so low." |

Flow faults (0):


Fixes:

1. **keyPoints[0].writeBullets[3], keyPoints[1].writeBullets[5], revisionCardBullets[3]**: Restore the missing comparison symbols. Write 'An object floats if its density < fluid density' and 'If density > fluid density → sinks'. As they stand, these lines say nothing. — "An object floats if it is less dense than the fluid, and sinks if it is denser."
2. **teach-core: tell-me replies**: When she says 'just tell me', answer the question in one sentence. Give at most one more new idea, keep it under 60 words, and move unit conversion to its own later turn. — "The flour bag is denser, because more mass is packed into the same space."
3. **teach-core: question generation**: Never ask a question whose answer appears in the same turn. Ask about a new value instead, e.g. aluminium 2.7 g/cm³ → kg/m³, after showing the water example. — "So 1 g/cm³ becomes 1000 kg/m³. Water is 1 g/cm³, so what is its density in kg/m³?"
4. **keyPoints[1].memTip**: Add a non-arithmetic trick for a student who is weak at mental maths: '×1000 = slide the decimal point 3 places right (2.7 → 2700)'. After an 'idk', give the answer, then retry one easy item using this trick instead of dropping the topic. — "No worries. Water is 1 g/cm³, so that's 1000 kg/m³."
5. **teach-core: lesson ending**: Do not close the lesson while key points or checkpoints remain unvisited. Finish keyPoints[3] (liquids vs solids) and run at least checkpoints 0 and 3 before saying the lesson is over. — "Yes — empty space is right, which is why gases have such low density. That brings us to the end of this lesson."
