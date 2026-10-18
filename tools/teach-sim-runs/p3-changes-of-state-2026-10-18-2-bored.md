# Teach sim: p3-changes-of-state (run, persona bored, 2026-10-18)

Model claude-sonnet-5-5. 16 tutor turns, 2 flagged. Complete: true. Coverage: [true,true,true,true].

Lesson flags: none

**Tutor** [opening]: Welcome! Think of a kettle at 100°C: the water keeps taking in energy, yet its temperature stops rising while it turns to steam. That "hidden" energy is called latent heat, because it changes the state without changing the temperature. So where do you think that energy is going, if the thermometer isn't showing it?

**Student** (minimal): k

**Tutor** [retry, point 0]: Let's try it another way. The energy isn't lost: it goes into pulling the water particles away from each other, so they gain potential energy, not speed. And a thermometer only shows how fast the particles move. So what does the thermometer stay the same?

**Student** (try): oh so the particles move same speed still?

**Tutor** [fact, point 0]: Yes — the particles keep the same speed, so the thermometer stays put. If you draw temperature against time as you heat a substance, you get a heating curve: sloping sections where it's warming up, and flat sections at the melting point and boiling point. What is happening to the temperature on a flat section?

**Student** (bored): that was long ngl

**Tutor** [retry, point 0]: Fair enough, I'll keep it short. A heating curve is just a graph of temperature against time, and its flat sections show where the substance is melting or boiling. What happens to the temperature on one of those flat sections?

**Student** (try): it stays the same innit

**Tutor** [fact, point 0]: Yes — it stays the same on the flat section. Cooling works the same way in reverse: a cooling curve is a graph of temperature against time as a substance cools, with flat sections where it condenses or freezes. Latent heat is released there, so the temperature holds steady. When steam condenses, what is being released?

**Student** (bored): this is long man

**Tutor** [retry, point 0]: Sorry, I'll keep it short. A cooling curve is a temperature-time graph as something cools, with flat sections where steam condenses or water freezes. On a cooling curve, what is the substance doing at a flat section?

**Student** (try): its condensing or freezing

**Tutor** [next, point 0]: Yes — condensing or freezing is right, and the temperature stays flat there. Which two states does fusion change between?

> Recap: Latent heat is energy absorbed during a state change, without any temperature rise. / That energy pulls particles apart, so they gain potential energy, not speed. / A heating curve plots temperature against time, with flat sections at melting and boiling. / On a cooling curve, flat sections show condensing or freezing, where latent heat is released.

**Student** (wrong): solid and gas?

**Tutor** [retry, point 1]: Not quite. Fusion here means solid and liquid, so melting or freezing. It has nothing to do with gas, or with nuclear fusion. When ice melts, which state does it turn into?

**Student** (try): liquid

**Tutor** [fact, point 1]: Yes — liquid is right, so fusion is solid ↔ liquid. When water boils, which two states is it changing between?

**Student** (wrong): solid and gas

**Tutor** [retry, point 1]: Not quite. Boiling changes liquid into gas (vapour), and condensing is the reverse. The energy per kg for that change is specific latent heat of vaporisation, measured in J/kg. What is the unit of specific latent heat?

**Student** (wrong): joules per kelvin?

**Tutor** [checkin, point 1]: Do you want me to just tell you the rest of this one?

**Student** (checkin-yes): yeah go on

**Tutor** [next, point 1]: The unit is J/kg, joules per kilogram, because it's the energy needed to change the state of 1 kg. The equation is E = mL, with E in joules and m in kilograms. For water, melting needs 334,000 J/kg but boiling needs 2,260,000 J/kg, because boiling separates the particles completely.  Next we use E = mL on real numbers. To melt 2 kg of ice at 0°C, with L = 334,000 J/kg, what do you get when you multiply 2 × 334,000?

> Recap: E = mL gives the energy needed to change state, with no temperature change. / Specific latent heat is the energy needed to change 1 kg of a substance. / Its unit is J/kg, not J/K, which is a mix-up with specific heat capacity. / Fusion means solid and liquid, while vaporisation means liquid and gas.

⚑ over length (82 words)

**Student** (try): um like 600,000?

**Tutor** [retry, point 2]: Not quite, 600,000 isn't the product. E = mL means multiplying the mass, 2 kg, by L, 334,000 J/kg, so it's 2 lots of 334,000. What is 334,000 + 334,000?

⚑ unanswerable: no word from the lesson

**Student** (try): 668,000

**Tutor** [next, point 2]: Yes, 668,000 is right: two lots of 334,000. Latent heat explains everyday things, like sweating. Sweat is mainly water, and when it evaporates it carries lots of energy away from your skin.  Why does sweating cool you down?

> Recap: Latent heat is measured in J/kg, the energy to change 1 kg's state. / Energy E = mL, with energy in joules and mass in kilograms. / Boiling water needs far more energy than melting ice, since particles fully separate. / 2 kg of ice melting needs 2 × 334,000 = 668,000 J.

**Student** (try): the sweat evaporates and takes energy away

**Tutor** [complete, point 3]: Yes, evaporating sweat takes energy away from your skin, and that's what cools you down. That's the end of this lesson. You answered questions on "Temperature during changes of state", "Calculations using E = mL" and "Applications of latent heat".

> Recap: Latent heat is the energy needed to change state without changing temperature. / Sweat is mostly water, and evaporating needs lots of energy. / That energy is taken from your skin, which cools you down. / The calculation worked because 668,000 joules is two lots of 334,000.

**Student** (closing): ok thanks bye

**Tutor** [free]: Bye for now, and good luck with the revision. You can come back to latent heat any time you like.

## Judge (claude-opus-5-5)

**FAIL** — question does not match what was taught: T0, T6, T8; flow faults: tell_me_skipped_content T11, closing_claims_untaught_content T14

Engagement 2/5 — "this is long man"

Would quit: false

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | false | false | false | "So where do you think that energy is going, if the thermometer isn't showing it?" — Asks her to predict something not yet taught, and she replied only 'k'. |
| T1 | true | true | false | true | "So what does the thermometer stay the same?" — The question is ungrammatical and garbled. |
| T2 | true | true | true | false | "If you draw temperature against time as you heat a substance, you get a heating curve: sloping sections where it's warming up, and flat sections at the melting point and boiling point." — Close to 60 words, and the student complained it was long. |
| T3 | true | true | false | false | "A heating curve is just a graph of temperature against time, and its flat sections show where the substance is melting or boiling." |
| T4 | true | true | true | false | "Cooling works the same way in reverse: a cooling curve is a graph of temperature against time as a substance cools, with flat sections where it condenses or freezes." — Right after a length complaint, it adds a whole new concept, and she complains again. |
| T5 | true | true | false | false | "On a cooling curve, what is the substance doing at a flat section?" |
| T6 | true | false | false | false | "Which two states does fusion change between?" — Fusion had not been taught yet, so she guessed wrong. |
| T7 | true | true | false | false | "When ice melts, which state does it turn into?" |
| T8 | true | false | false | false | "When water boils, which two states is it changing between?" — Vaporisation and boiling had not been taught yet, so she guessed wrong. |
| T9 | true | true | false | false | "The energy per kg for that change is specific latent heat of vaporisation, measured in J/kg. What is the unit of specific latent heat?" |
| T10 | true | null | false | false | "Do you want me to just tell you the rest of this one?" |
| T11 | true | true | true | false | "For water, melting needs 334,000 J/kg but boiling needs 2,260,000 J/kg, because boiling separates the particles completely." — About 80 words, sent to a student who has twice complained about length. |
| T12 | true | true | false | false | "What is 334,000 + 334,000?" |
| T13 | true | true | false | false | "Why does sweating cool you down?" |
| T14 | true | null | false | false | "You answered questions on "Temperature during changes of state", "Calculations using E = mL" and "Applications of latent heat"." — Steam burns, the rearrangements and the g to kg conversion were never reached. |
| T15 | true | null | false | false | "Bye for now, and good luck with the revision." |

Flow faults (2):

- T11 **tell_me_skipped_content** — "The equation is E = mL, with E in joules and m in kilograms." — Leaves out the rearrangements L = E/m and m = E/L, and the contrast with specific heat capacity in keyPoints[1].writeBullets[6].
- T14 **closing_claims_untaught_content** — "You answered questions on "Temperature during changes of state", "Calculations using E = mL" and "Applications of latent heat"." — Implies she covered applications and calculations, but steam burns, the rearrangements and the g to kg conversion were never reached.

Fixes:

1. **teach-core: after a length complaint**: Once she says a turn was long, cap every later turn at about 35 words and add no new concept in the same turn as the acknowledgement. In T4, ask only one thing about the heating curve, and move cooling curves to their own turn. — "this is long man"
2. **teach-core: teach before asking**: Never ask about a term before stating it. Say 'Fusion means solid ↔ liquid' before asking about fusion, and say 'Boiling: liquid → gas' before asking about boiling. — "Which two states does fusion change between?"
3. **keyPoints[1] tell-me path**: Send the telling in two short turns of about 35 words each. The second turn must include L = E/m, m = E/L, and the line 'heat capacity = temperature change, latent heat = state change'. — "The unit is J/kg, joules per kilogram, because it's the energy needed to change the state of 1 kg."
4. **teach-core: closing message**: List only the key points she actually answered. Name the parts she was not taken through as still to do, for example: 'Next time: steam burns and grams to kg.' — "You answered questions on "Temperature during changes of state", "Calculations using E = mL" and "Applications of latent heat"."
5. **keyPoints[0] question template**: Replace the garbled question with: 'So why does the thermometer reading stay the same?' — "So what does the thermometer stay the same?"
