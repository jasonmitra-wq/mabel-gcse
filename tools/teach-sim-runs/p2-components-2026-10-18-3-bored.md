# Teach sim: p2-components (run, persona bored, 2026-10-18)

Model claude-sonnet-5-5. 18 tutor turns, 2 flagged. Complete: true. Coverage: [true,true,true,true].

Lesson flags: none

**Tutor** [opening (what she knows)]: Welcome! Let's start with something you've probably noticed: what have you seen switch on or off by itself, like a street lamp coming on at dusk?

**Student** (offtopic): oh yeah street lamps go on when its dark lol. anyway im so tired rn

**Tutor** [exit-offer, point 0]: That's fair, it's a lot of new stuff. Do you want to stop here, do one more quick thing, or switch to the slides?

**Student** (script): one more quick thing

**Tutor** [carryon, point 0]: Thanks, just one quick thing. Look at the diagram: a fixed resistor at constant temperature gives a perfectly straight line. That tells us its resistance stays constant. What shape is the line on the diagram?

🖼 Diagram shown: p2-iv-resistor — "A resistor at constant temperature: a straight line through the origin."

**Student** (try): whats resistance

**Tutor** [retry, point 0]: Resistance is how hard it is for current to get through something, like a narrow, crowded corridor that slows people down. And the line on the diagram is a straight line. That was the quick one. Do you want to stop here, or keep going?

⚑ yes/no question; unanswerable: either/or question

**Student** (script): keep going

**Tutor** [carryon, point 0]: Let's go. A fixed resistor at constant temperature always has the same resistance, so we call it an ohmic conductor. It's like a corridor that stays the same width, whatever the crowd does.  If its resistance stays the same, what happens to the current when you give it a bigger push?

**Student** (script): I'm tired

**Tutor** [exit-offer, point 0]: That's fair, it's a lot of new stuff. Do you want to stop here, do one more quick thing, or switch to the slides?

**Student** (script): one more quick thing

**Tutor** [carryon, point 0]: Thanks for sticking with it. For an ohmic conductor the current is directly proportional to the push, meaning doubling the push doubles the current.  If you double the push across a fixed resistor, what happens to the current?

**Student** (wrong): whats directly proportional

**Tutor** [fact, point 0]: Directly proportional just means that when one thing doubles, the other doubles too, like twice as many apples costing twice as much. So if you double the push across a fixed resistor, the current doubles as well. That was the quick one. Do you want to stop here, or keep going?

⚑ yes/no question; unanswerable: either/or question

**Student** (script): keep going

**Tutor** [carryon, point 0]: Let's keep going. A variable resistor is one where you change the resistance by hand, like the dial on a dimmer switch or a volume control. Turning it changes how hard it is for current to get through.  If you turn a dimmer switch so the resistance goes up, what happens to the lamp's brightness?

**Student** (try): goes dimmer i guess

**Tutor** [fact, point 0]: Yes, dimmer is right: more resistance makes it harder for current to get through. Resistance is measured in ohms, which tell you how hard that squeeze is, like a narrower corridor.  If a lamp's resistance goes down, what happens to the current through it?

**Student** (try): it goes up?

**Tutor** [next, point 0]: Yes — lower resistance means an easier path, so the current goes up. Look at the diagram: a diode is a component that lets current flow in one direction only, a bit like a one-way gate.  If current tries to go through a diode the opposite way, what do you think happens to it?

🖼 Diagram shown: p2-iv-diode — "A diode: current flows in one direction only."

> Recap: Resistance is how hard it is for current to get through something. / A fixed resistor keeps the same resistance, so its graph is a straight line. / Double the push across it and the current doubles too. / Turn a variable resistor up and the lamp dims.

**Student** (bored): whats diode

**Tutor** [retry, point 1]: A diode is a small electronic part that works like a one-way door for current. Let it flow forwards and it goes through easily; push it backwards and the diode has a very high resistance, so only a tiny bit gets through. If you push the wrong way, what do you think you'd feel?

**Student** (bored): this is long

**Tutor** [fact, point 1]: Sorry, that was a lot. An LED is a diode that glows, like a tiny bulb, when current flows forwards. What do you think an LED gives out?

**Student** (offtopic): whats led

**Tutor** [retry, point 1]: LED stands for light-emitting diode. When current flows forwards through an LED, what do you think it gives out?

**Student** (minimal): light?

**Tutor** [next, point 1]: Yes — light is right, an LED gives out light. Now an LDR is a part whose resistance falls as the light gets brighter, as the diagram shows. In a bright room, what happens to the LDR's resistance?

🖼 Diagram shown: p2-ldr-graph — "An LDR: brighter light, lower resistance."

> Recap: A diode lets current flow in one direction only, like a one-way door. / Forwards, current passes easily; backwards, its resistance is very high. / Backwards, only a tiny bit of current gets through. / An LED is a light-emitting diode that gives out light when current flows forwards.

**Student** (try): it goes down

**Tutor** [next, point 2]: Yes — brighter light means the LDR's resistance goes down. A thermistor is similar but reacts to heat, not light: look at the diagram, hotter means lower resistance. What happens to a thermistor's resistance as a room gets colder?

🖼 Diagram shown: p2-thermistor-graph — "A thermistor: hotter, lower resistance."

> Recap: An LED gives out light, which is the opposite job to an LDR. / An LDR is a part that reacts to light. / Brighter light means the LDR's resistance goes down. / In a bright room, an LDR has low resistance.

**Student** (try): it goes up

**Tutor** [complete, point 3]: Yes — colder means the thermistor's resistance goes up. That's the end of this lesson. You answered questions on LDRs and thermistors, and some on fixed and variable resistors and diodes, where I told you the rest. Nice work today.

> Recap: A thermistor's resistance changes with temperature. / Hotter means lower resistance, so colder means higher. / An LDR works the same way, but with light. / Brighter light means the LDR's resistance goes down.

**Student** (closing): ok thanks bye

**Tutor** [free]: Bye for now! You worked out how LDRs and thermistors react to light and heat, and that's the idea behind things like street lamps switching on at dusk. Come back any time to go over diodes again.

## Judge (claude-opus-5-5)

**FAIL** — would quit at T11; question does not match what was taught: T4, T11; flow faults: unexplained_term T2, unexplained_term T2, answer_in_question T2, unexplained_term T3, unexplained_term T6, answer_in_question T6, answer_in_question T10, answer_in_question T11, tiredness_pushed_on T12, unexplained_term T12, answer_in_question T12, answer_in_question T13, answer_in_question T14, closing_claims_untaught_content T16, exit_not_respected T17

Engagement 2/5 — "this is long"

Would quit: T11 — "If you push the wrong way, what do you think you'd feel?" (She is already tired twice. She asked 'whats diode' and gets a re-explanation that gives the answer away, then a baffling question, and she replies 'this is long'.)

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | null | false | false | "what have you seen switch on or off by itself, like a street lamp coming on at dusk?" |
| T1 | true | null | false | false | "That's fair, it's a lot of new stuff. Do you want to stop here, do one more quick thing, or switch to the slides?" — 'a lot of new stuff' rings false, because nothing has been taught yet. |
| T2 | true | true | false | false | "a fixed resistor at constant temperature gives a perfectly straight line. That tells us its resistance stays constant. What shape is the line on the diagram?" — The answer is in the same message. 'Resistance' and 'fixed resistor' are used before being explained. |
| T3 | true | null | false | false | "And the line on the diagram is a straight line. That was the quick one." — The tutor answers its own question. 'Current' is used before being explained. |
| T4 | true | false | false | false | "If its resistance stays the same, what happens to the current when you give it a bigger push?" — Asks about the current/push relationship, which has not been taught yet. |
| T5 | true | null | false | false | "That's fair, it's a lot of new stuff. Do you want to stop here, do one more quick thing, or switch to the slides?" |
| T6 | true | true | false | false | "doubling the push doubles the current. If you double the push across a fixed resistor, what happens to the current?" — The answer is stated in the line just before the question. 'Directly proportional' is not explained. |
| T7 | true | null | false | false | "So if you double the push across a fixed resistor, the current doubles as well." — The tutor answers the question for her. |
| T8 | true | true | false | false | "If you turn a dimmer switch so the resistance goes up, what happens to the lamp's brightness?" |
| T9 | true | true | false | false | "If a lamp's resistance goes down, what happens to the current through it?" — Near-repeat of the last question in reverse. The ohms aside adds nothing. |
| T10 | true | true | false | false | "a diode is a component that lets current flow in one direction only, a bit like a one-way gate. If current tries to go through a diode the opposite way, what do you think happens to it?" — The answer is given in the same message. |
| T11 | true | false | false | true | "If you push the wrong way, what do you think you'd feel?" — 'Feel' is a nonsensical question. The previous sentence already gave the answer ('only a tiny bit gets through'). |
| T12 | true | true | false | false | "An LED is a diode that glows, like a tiny bulb, when current flows forwards. What do you think an LED gives out?" — Ignores 'this is long' and keeps teaching. The answer ('glows') is in the message. The diode point is abandoned. |
| T13 | true | true | false | false | "LED stands for light-emitting diode. When current flows forwards through an LED, what do you think it gives out?" — 'Light-emitting' gives the answer away. |
| T14 | true | true | false | false | "an LDR is a part whose resistance falls as the light gets brighter, as the diagram shows. In a bright room, what happens to the LDR's resistance?" — The answer is in the same message. |
| T15 | true | true | false | false | "What happens to a thermistor's resistance as a room gets colder?" |
| T16 | true | null | false | true | "You answered questions on LDRs and thermistors, and some on fixed and variable resistors and diodes, where I told you the rest." — She answered no diode question. 'End of this lesson' hides that V = IR, the I-V graphs and the checkpoints were never reached. |
| T17 | true | null | false | false | "Come back any time to go over diodes again." — Does not say her place is saved. |

Tone vs reference: n/a (no reference)


Flow faults (15):

- T2 **unexplained_term** — "That tells us its resistance stays constant." — 'Resistance' is used before being explained. She asks 'whats resistance'.
- T2 **unexplained_term** — "a fixed resistor at constant temperature gives a perfectly straight line." — 'Fixed resistor' is never explained in everyday words.
- T2 **answer_in_question** — "a fixed resistor at constant temperature gives a perfectly straight line. That tells us its resistance stays constant. What shape is the line on the diagram?" — 'Straight line' is stated just before the question.
- T3 **unexplained_term** — "Resistance is how hard it is for current to get through something" — 'Current' (basics[0]) is never explained.
- T6 **unexplained_term** — "For an ohmic conductor the current is directly proportional to the push" — She asks 'whats directly proportional'.
- T6 **answer_in_question** — "meaning doubling the push doubles the current. If you double the push across a fixed resistor, what happens to the current?" — She can copy the answer back.
- T10 **answer_in_question** — "a diode is a component that lets current flow in one direction only, a bit like a one-way gate. If current tries to go through a diode the opposite way, what do you think happens to it?" — The answer is stated in the same message.
- T11 **answer_in_question** — "push it backwards and the diode has a very high resistance, so only a tiny bit gets through. If you push the wrong way, what do you think you'd feel?" — The reverse behaviour is given just before the question.
- T12 **tiredness_pushed_on** — "Sorry, that was a lot. An LED is a diode that glows, like a tiny bulb, when current flows forwards." — After 'this is long' (her third fatigue signal), the tutor teaches on without offering stop / one more / slides.
- T12 **unexplained_term** — "An LED is a diode that glows, like a tiny bulb" — The acronym is not expanded. She asks 'whats led'.
- T12 **answer_in_question** — "An LED is a diode that glows, like a tiny bulb, when current flows forwards. What do you think an LED gives out?" — 'Glows' gives the answer away.
- T13 **answer_in_question** — "LED stands for light-emitting diode. When current flows forwards through an LED, what do you think it gives out?" — 'Light-emitting' gives the answer away.
- T14 **answer_in_question** — "an LDR is a part whose resistance falls as the light gets brighter, as the diagram shows. In a bright room, what happens to the LDR's resistance?" — The answer is stated in the same message.
- T16 **closing_claims_untaught_content** — "You answered questions on LDRs and thermistors, and some on fixed and variable resistors and diodes, where I told you the rest." — No diode question was answered. 'That's the end of this lesson' implies the lesson was completed, but V = IR, the I-V graphs and the checkpoints were never reached.
- T17 **exit_not_respected** — "Bye for now! You worked out how LDRs and thermistors react to light and heat, and that's the idea behind things like street lamps switching on at dusk. Come back any time to go over diodes again." — Three sentences with no mention that her place is saved.

Fixes:

1. **teach-core: ask before telling**: Never state the answer in the message that asks the question, or in the message just before it. Teach the rule for one case and ask about a different case (e.g. teach bright → low resistance, then ask about a dark cupboard). Do not answer a check question yourself after a check-in. — "In a bright room, what happens to the LDR's resistance?"
2. **teach-core: fatigue detection**: Treat 'this is long', 'im tired', 'boring' and similar as fatigue signals that always trigger the stop / one more quick thing / slides choice. After the third such signal, offer a stop with her place saved first. — "Sorry, that was a lot. An LED is a diode that glows, like a tiny bulb, when current flows forwards."
3. **teach-core: introduce basics before first use**: Teach basics[0] (current), basics[2] (resistance) and basics[5] (directly proportional) in one plain sentence each before any key point that uses them. Expand acronyms (LED, LDR) on first use. — "whats resistance"
4. **keyPoints[1].content (diode question generation)**: Replace the reverse-direction question with a concrete check whose answer is not given, e.g. 'An LED is put in the wrong way round. Will it light up?' Never ask what she would 'feel'. Finish the diode point before moving on to the LED. — "If you push the wrong way, what do you think you'd feel?"
5. **teach-core: closing message**: Do not say 'end of this lesson' when keyPoints or checkpoints are unreached. List only the topics she actually answered (LDR, thermistor, variable resistor). Name the unreached ones (V = IR, I-V graphs). Give one short line saying her place is saved. — "That's the end of this lesson. You answered questions on LDRs and thermistors, and some on fixed and variable resistors and diodes, where I told you the rest."
