# Teach sim: p2-components (run, persona bored, 2026-10-18)

Model claude-sonnet-5-5. 16 tutor turns, 0 flagged. Complete: true. Coverage: [true,false,true,true].

Lesson flags: points never completed: 1 "Diodes"

**Tutor** [opening (what she knows)]: Welcome, I'm glad you're here! When you've noticed street lamps coming on by themselves in the evening, what do you think makes them switch on?

**Student** (offtopic): idk maybe it gets dark? honestly im starving rn tho

**Tutor** [start, point 0]: Let's start with something simpler: a resistor is a part that makes it harder for electric current to flow, a bit like a narrow corridor slowing people down. It shows that for a fixed resistor, if you double the push, the current doubles too. If you gave a fixed resistor three times the push, what would happen to the current?

🖼 Diagram shown: p2-iv-resistor — "A resistor at constant temperature: a straight line through the origin."

**Student** (bored): what's electric current

**Tutor** [retry, point 0]: Electric current is how much electric charge flows past a point each second. Think of cars passing under a bridge: more cars each second means a bigger current. It's measured in amps (A).  Imagine a fixed resistor where 2 amps flow. If the push is doubled, how many amps would flow now?

(basic: Electric current)

**Student** (idk): idk mate

**Tutor** [fact, point 0]: That's okay, here's the idea in plain words. A fixed resistor is called an ohmic conductor when its resistance stays the same as long as its temperature stays the same. If a fixed resistor carries 3 amps, how many amps would flow if the push were doubled?

**Student** (try): 6 amps?

**Tutor** [fact, point 0]: Yes — doubling the push doubles the current, so 6 amps is right. A variable resistor is a resistor whose resistance you change by hand, like a volume dial. If you turn its resistance up, what happens to the current?

**Student** (try): it goes down right

**Tutor** [fact, point 0]: Yes — turning the resistance up makes the current go down. If a push of 6 V drives a current of 2 A through a resistor, what is its resistance in ohms?

**Student** (try): umm 6 divided by 2? so like 3 ohms?

**Tutor** [next, point 0]: Yes — 6 divided by 2 gives 3 ohms, spot on. Now a new component: a diode only lets current flow one way, like a door that only opens outwards. Look at the diagram: the current goes through in one direction only. If you tried to push current the other way, what would you expect to happen?

🖼 Diagram shown: p2-iv-diode — "A diode: current flows in one direction only."

> Recap: Current is how much charge flows past a point each second, measured in amps. / A fixed resistor keeps the same resistance if its temperature stays the same. / Double the push through a fixed resistor and the current doubles too. / A variable resistor's resistance can be changed by hand; more resistance means less current.

**Student** (bored): whats a diode

**Tutor** [retry, point 1]: A diode is a small part that lets current through one way only, like a turnstile that spins just one direction. Push the other way and it fights back with very high resistance, so hardly any current gets through.  If you turned a diode round the wrong way in a circuit, how much current would you expect to flow?

**Student** (minimal): what?

**Tutor** [fact, point 1]: Turned the wrong way, hardly any current flows, only a very small current, because the resistance is very high. Now a handy type: an LED is a diode that gives out light when current flows forwards, like the little lights on a traffic light. If you wired an LED in backwards, what would you expect to see it do?

**Student** (bored): whats led

**Tutor** [retry, point 1]: An LED is a diode that glows. Think of the tiny light on your phone charger or a TV standby light: it only lights up when current flows through it the forward way, and nothing happens the wrong way round.  If an LED were wired in backwards, what would you see it do?

**Student** (bored): can we skip this

**Tutor** [next, point 1]: Fine, we'll skip diodes, which were about parts that let current flow one way only. Next is the LDR, a part that changes how hard it is for current to flow depending on how bright the light is. Look at the diagram: brighter light gives lower resistance.  What happens to an LDR's resistance when it goes dark?

🖼 Diagram shown: p2-ldr-graph — "An LDR: brighter light, lower resistance."

**Student** (idk): whats ldr

**Tutor** [retry, point 2]: LDR stands for light-dependent resistor. It's a part whose resistance goes down when it's brighter, like a gate that opens wider the more light hits it. In the dark, the gate is nearly shut, so the resistance is very high. When evening comes and the light fades, what happens to the LDR's resistance?

**Student** (idk): goes up?

**Tutor** [next, point 2]: Yes, resistance goes up in the dark, because less light means the LDR lets less current through. Now a thermistor is a part whose resistance depends on heat instead of light. Look at the diagram: the hotter it gets, the lower its resistance.  If a thermistor sits in a room that is getting colder, what happens to its resistance?

🖼 Diagram shown: p2-thermistor-graph — "A thermistor: hotter, lower resistance."

> Recap: LDR means light-dependent resistor, a part that reacts to light. / Brighter light makes its resistance go down. / In the dark, its resistance goes up, nearly blocking current. / Picture a gate: more light opens it wider.

**Student** (bored): whats thermistor

**Tutor** [retry, point 3]: A thermistor is a part that reacts to heat, a bit like a gate that opens wider as it gets warmer. So when it's hot, current passes through it more easily, and when it's cold, it's much harder.  If a thermistor sits in a room that is getting colder, what happens to its resistance?

**Student** (offtopic): honestly im so tired rn can we do this tmrw

**Tutor** [complete, point 3]: That's fine, we can stop here. When it gets colder, a thermistor's resistance goes up. You answered questions on fixed and variable resistors and LDRs, I told you about thermistors, and we skipped diodes. Rest well!

> Recap: A thermistor is a part whose resistance changes with heat, not light. / The hotter it gets, the lower its resistance becomes. / Low resistance means current passes through it more easily. / When it's cold, resistance is higher, so current struggles to get through.

**Student** (closing): ok thanks bye

**Tutor** [free]: Bye, and rest up. Whenever you come back, we'll pick up with diodes and go over thermistors again.

## Judge (claude-opus-5-5)

**FAIL** — would quit at T13; question does not match what was taught: T3, T5; flow faults: correct_answer_not_acknowledged T1, unexplained_term T1, unexplained_term T5, unexplained_term T5, answer_in_question T7, answer_in_question T9, answer_in_question T11, answer_in_question T13

Engagement 2/5 — "can we skip this"

Would quit: T13 — "If a thermistor sits in a room that is getting colder, what happens to its resistance?" (Fourth 'what's X' in a row, then the same question re-asked; she replies 'honestly im so tired rn can we do this tmrw' and ends the session.)

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | null | false | false | "When you've noticed street lamps coming on by themselves in the evening, what do you think makes them switch on?" |
| T1 | true | true | false | true | "It shows that for a fixed resistor, if you double the push, the current doubles too." — Ignores her right guess 'maybe it gets dark'. 'It' points at the diagram without saying so. 'Current' is used before it is explained. |
| T2 | true | true | false | false | "Imagine a fixed resistor where 2 amps flow. If the push is doubled, how many amps would flow now?" |
| T3 | true | false | false | true | "That's okay, here's the idea in plain words. A fixed resistor is called an ohmic conductor when its resistance stays the same as long as its temperature stays the same." — Promises 'plain words' but adds jargon. It never re-explains the doubling idea, yet it asks the doubling question again. |
| T4 | true | true | false | false | "If you turn its resistance up, what happens to the current?" |
| T5 | true | false | false | true | "If a push of 6 V drives a current of 2 A through a resistor, what is its resistance in ohms?" — R = V ÷ I, volts and ohms were never taught. This is a calculation for a student weak at mental arithmetic. |
| T6 | true | true | false | false | "If you tried to push current the other way, what would you expect to happen?" |
| T7 | true | true | false | false | "Push the other way and it fights back with very high resistance, so hardly any current gets through. If you turned a diode round the wrong way in a circuit, how much current would you expect to flow?" — The answer is stated in the line just before the question. |
| T8 | true | true | false | false | "If you wired an LED in backwards, what would you expect to see it do?" — Moves on to LED while she is still lost on diodes. |
| T9 | true | true | false | false | "it only lights up when current flows through it the forward way, and nothing happens the wrong way round. If an LED were wired in backwards, what would you see it do?" — Gives the answer, then asks the same question again. |
| T10 | true | true | false | false | "Fine, we'll skip diodes, which were about parts that let current flow one way only." — Skip honoured. 'LDR' is used without being expanded, which leads to 'whats ldr'. |
| T11 | true | true | false | false | "In the dark, the gate is nearly shut, so the resistance is very high. When evening comes and the light fades, what happens to the LDR's resistance?" — The answer is given just before the question. |
| T12 | true | true | false | false | "If a thermistor sits in a room that is getting colder, what happens to its resistance?" — Missed the chance to link back to her street-lamp guess. |
| T13 | true | true | false | false | "So when it's hot, current passes through it more easily, and when it's cold, it's much harder. If a thermistor sits in a room that is getting colder, what happens to its resistance?" — Gives the answer in the message and repeats the T12 question word for word. |
| T14 | true | null | false | false | "You answered questions on fixed and variable resistors and LDRs, I told you about thermistors, and we skipped diodes." |
| T15 | true | null | false | false | "Bye, and rest up. Whenever you come back, we'll pick up with diodes and go over thermistors again." |

Tone vs reference: n/a (no reference)


Flow faults (8):

- T1 **correct_answer_not_acknowledged** — "Let's start with something simpler: a resistor is a part that makes it harder for electric current to flow, a bit like a narrow corridor slowing people down." — S1 'maybe it gets dark?' is right, but T1 brushes it aside.
- T1 **unexplained_term** — "a resistor is a part that makes it harder for electric current to flow" — 'Current' is used before it is explained. S2: 'what's electric current'.
- T5 **unexplained_term** — "If a push of 6 V drives a current of 2 A through a resistor, what is its resistance in ohms?" — V (volts) is never explained.
- T5 **unexplained_term** — "If a push of 6 V drives a current of 2 A through a resistor, what is its resistance in ohms?" — Ohms are never explained.
- T7 **answer_in_question** — "Push the other way and it fights back with very high resistance, so hardly any current gets through. If you turned a diode round the wrong way in a circuit, how much current would you expect to flow?"
- T9 **answer_in_question** — "nothing happens the wrong way round. If an LED were wired in backwards, what would you see it do?"
- T11 **answer_in_question** — "In the dark, the gate is nearly shut, so the resistance is very high. When evening comes and the light fades, what happens to the LDR's resistance?"
- T13 **answer_in_question** — "when it's cold, it's much harder. If a thermistor sits in a room that is getting colder, what happens to its resistance?"

Fixes:

1. **teach-core: question generation**: Never state the answer in the same message as the question or in the message just before it. After re-explaining, ask a new angle, e.g. 'Fire alarm: room heats up, resistance goes...?' instead of repeating the same question. — "In the dark, the gate is nearly shut, so the resistance is very high. When evening comes and the light fades, what happens to the LDR's resistance?"
2. **keyPoints[0].content**: Before any number question, teach 'resistance = push ÷ current' in plain words, saying push is measured in volts (V) and resistance in ohms. Use easy numbers (6 ÷ 2) only after that. — "If a push of 6 V drives a current of 2 A through a resistor, what is its resistance in ohms?"
3. **teach-core: hook follow-up**: When the opening answer is right ('maybe it gets dark'), confirm it in one line and say a light-sensing part is the reason, so the lesson has a payoff. Use basics[0] (current) before using the word. — "idk maybe it gets dark? honestly im starving rn tho"
4. **teach-core: new-component intro**: Open each new component with one short sentence: full name, then what it does in everyday words, e.g. 'LDR = light-dependent resistor: a light sensor'. Use that before saying 'Look at the diagram', to stop the 'whats X' loop. — "Next is the LDR, a part that changes how hard it is for current to flow depending on how bright the light is."
5. **teach-core: after idk**: After 'idk', re-explain the idea that was missed (double the push, double the current, with a car-bridge example). Do not add new jargon like 'ohmic conductor' and then re-ask the same question. — "That's okay, here's the idea in plain words. A fixed resistor is called an ohmic conductor when its resistance stays the same as long as its temperature stays the same."
