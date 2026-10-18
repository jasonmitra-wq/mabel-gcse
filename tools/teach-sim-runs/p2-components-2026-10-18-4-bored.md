# Teach sim: p2-components (run, persona bored, 2026-10-18)

Model claude-sonnet-5-5. 13 tutor turns, 1 flagged. Complete: false. Coverage: [null,null,null,null].

Lesson flags: points never completed: 0 "Fixed resistors and variable resistors", 1 "Diodes", 2 "Light-Dependent Resistors (LDRs)", 3 "Thermistors"; no clean ending: lesson not completed

**Tutor** [opening (what she knows)]: Welcome, I'm glad you're here! Think about a street lamp that switches itself on as it gets dark: what do you think makes it turn on?

**Student** (offtopic): omg my phone battery's dead i swear

**Tutor** [start, point 0]: Ha, a dead phone is a good reminder that batteries push electric charge round circuits. Look at the diagram: a resistor at constant temperature gives a straight line through the origin, meaning double the push gives double the flow. If the push were tripled, what would happen to the flow?

🖼 Diagram shown: p2-iv-resistor — "A resistor at constant temperature: a straight line through the origin."

**Student** (try): whats the origin

**Tutor** [retry, point 0]: The origin is the point on a graph where both quantities are zero, usually the bottom-left corner. So a line through the origin means no push gives no flow. If the push is zero on this graph, how much flow would there be?

(basic: The origin)

**Student** (wrong): zero i guess? like if nothings pushing it nothings gonna move

**Tutor** [fact, point 0]: Yes, zero is right: with no push, nothing moves, which is why the line passes through the origin. If the push on an ohmic conductor is doubled, what happens to the flow?

(basic: The origin)

**Student** (idk): whats ohmic conductor

**Tutor** [fact, point 0]: An ohmic conductor is a component whose resistance stays constant at constant temperature. Because of that, its graph is a straight line through the origin, so double the push gives double the flow. If the push on an ohmic conductor is tripled, what happens to the flow?

**Student** (script): I'm tired

**Tutor** [exit-offer, point 0]: That's fair, it's a lot of new stuff. Do you want to stop here, do one more quick thing, or switch to the slides?

**Student** (script): one more quick thing

**Tutor** [carryon, point 0]: Thanks for sticking with it. For an ohmic conductor, double the push gives double the flow. Say your dead phone's charger gives the push. If the push is tripled, what happens to the flow?

**Student** (try): it like... triples too? cause double makes it double so triple makes it triple

**Tutor** [fact, point 0]: Yes, the flow triples too. You spotted the pattern from "double gives double," and that's exactly how an ohmic conductor works. Well done, and you can come back to this any time. That was the quick one. Do you want to stop here, or keep going?

⚑ yes/no question; unanswerable: either/or question

**Student** (script): keep going

**Tutor** [carryon, point 0]: Let's go. A variable resistor lets you change the resistance by hand, by sliding a contact along a track. That's how a volume control or dimmer switch works. If you slide it so the resistance goes up, what happens to the current?

**Student** (try): whats current

**Tutor** [retry, point 0]: Current is how much electric charge flows round the circuit each second. Think of cars passing under a bridge: more cars each second means a bigger current. It's the "flow" you tripled earlier. Back to the volume control on your phone. If the resistance goes up, what happens to the flow?

**Student** (bored): this is long

**Tutor** [checkin, point 0]: This bit is a tricky one, so no worries. Do you want me to just tell you the rest of this one?

**Student** (checkin-no): nah just ask simpler

**Tutor** [fact, point 0]: Think of your phone's volume slider. Sliding it changes the resistance, and that changes how much current flows. When you slide the volume down, what happens to the resistance?

**Student** (offtopic): lol my volume's always at max anyway

**Tutor** [retry, point 0]: Max is fine, the slider still shows the idea. If you slide a dimmer to make a lamp dimmer, what has happened to the current?

## Judge (claude-opus-5-5)

**FAIL** — would quit at T12; question does not match what was taught: T8, T9, T11, T12; flow faults: unexplained_term T1, unexplained_term T1, answer_in_question T2, unexplained_term T3, unexplained_term T4, unexplained_term T8, factual_or_unit_slip T9, factual_or_unit_slip T11, checkin_without_struggle T10

Engagement 2/5 — "this is long"

Would quit: T12 — "If you slide a dimmer to make a lamp dimmer, what has happened to the current?" (She has already complained the session is long and given an off-topic reply. The tutor then drops its own question and asks another one about a link it never taught, so she is likely to give up.)

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | null | false | false | "Think about a street lamp that switches itself on as it gets dark: what do you think makes it turn on?" |
| T1 | true | true | false | true | "Look at the diagram: a resistor at constant temperature gives a straight line through the origin, meaning double the push gives double the flow." — 'resistor' and 'origin' are used without being explained. The street lamp question is dropped and never picked up again. |
| T2 | true | true | false | false | "So a line through the origin means no push gives no flow. If the push is zero on this graph, how much flow would there be?" — The answer is stated in the sentence just before the question. |
| T3 | true | true | false | true | "If the push on an ohmic conductor is doubled, what happens to the flow?" — 'ohmic conductor' appears in the question without explanation. The pending T1 question was about 'tripled', but this asks 'doubled'. |
| T4 | true | true | false | true | "An ohmic conductor is a component whose resistance stays constant at constant temperature." — Defines one term using another unexplained term, 'resistance'. |
| T5 | true | null | false | false | "That's fair, it's a lot of new stuff. Do you want to stop here, do one more quick thing, or switch to the slides?" |
| T6 | true | true | false | false | "Say your dead phone's charger gives the push. If the push is tripled, what happens to the flow?" |
| T7 | true | null | false | false | "Yes, the flow triples too. You spotted the pattern from "double gives double," and that's exactly how an ohmic conductor works." |
| T8 | true | false | false | true | "If you slide it so the resistance goes up, what happens to the current?" — 'current' and 'resistance' are both unexplained. The rule 'more resistance means less current' was never taught. |
| T9 | true | false | false | true | "Back to the volume control on your phone. If the resistance goes up, what happens to the flow?" — 'resistance' is still undefined and its link to current is still untaught. A phone volume control is not a variable resistor. |
| T10 | true | null | false | false | "This bit is a tricky one, so no worries. Do you want me to just tell you the rest of this one?" — 'this is long' asks for shorter replies, not for a tell-me offer. |
| T11 | true | false | false | true | "Think of your phone's volume slider. Sliding it changes the resistance, and that changes how much current flows. When you slide the volume down, what happens to the resistance?" — Wrong example: a phone volume slider is digital, not a resistor. The direction of the resistance change was never taught, so this is not simpler. |
| T12 | true | false | false | true | "Max is fine, the slider still shows the idea. If you slide a dimmer to make a lamp dimmer, what has happened to the current?" — Drops the T11 question without resolving it and switches to a new untaught link. |

Tone vs reference: n/a (no reference)


Flow faults (9):

- T1 **unexplained_term** — "Look at the diagram: a resistor at constant temperature gives a straight line through the origin, meaning double the push gives double the flow." — 'resistor' is never explained in everyday words.
- T1 **unexplained_term** — "Look at the diagram: a resistor at constant temperature gives a straight line through the origin, meaning double the push gives double the flow." — 'origin' is used before it is explained, so she had to ask at S2.
- T2 **answer_in_question** — "So a line through the origin means no push gives no flow. If the push is zero on this graph, how much flow would there be?" — The answer 'no flow' comes directly before the question.
- T3 **unexplained_term** — "If the push on an ohmic conductor is doubled, what happens to the flow?" — 'ohmic conductor' appears in the question before any explanation, so she had to ask at S4.
- T4 **unexplained_term** — "An ohmic conductor is a component whose resistance stays constant at constant temperature." — 'resistance' is never given an everyday explanation (basics[2] is unused).
- T8 **unexplained_term** — "If you slide it so the resistance goes up, what happens to the current?" — 'current' appears in the question before it is explained, so she had to ask at S9.
- T9 **factual_or_unit_slip** — "Back to the volume control on your phone." — A phone's volume control is digital, not a variable resistor. The lesson's examples are dimmer switches and volume controls in general.
- T11 **factual_or_unit_slip** — "Think of your phone's volume slider. Sliding it changes the resistance, and that changes how much current flows." — Repeats the wrong claim that a phone slider changes resistance.
- T10 **checkin_without_struggle** — "This bit is a tricky one, so no worries. Do you want me to just tell you the rest of this one?" — Her last reply 'this is long' was a request for shorter replies. It was not wrong, not 'idk', and not a second off-topic reply in a row (S9 was an on-topic question).

Fixes:

1. **teach-core: explain basics before use**: Before the first use of 'resistance', 'resistor' or 'current', give the basics[1]/basics[2] everyday explanation, e.g. 'resistance = how hard it is for current to get through, like a narrow crowded corridor'. Teach 'more resistance → less current for the same push' before asking any question that depends on it. — "If you slide it so the resistance goes up, what happens to the current?"
2. **teach-core: define terms before asking about them**: Never put a new term in a question before explaining it. Explain 'origin' and 'ohmic conductor' first in one short everyday sentence, or replace them with 'straight line from zero'. — "If the push on an ohmic conductor is doubled, what happens to the flow?"
3. **teach-core: handle 'this is long'**: When she says 'this is long' or 'too long', shorten the next reply to one sentence plus one question. Do not offer the tell-me check-in unless she has struggled. — "This bit is a tricky one, so no worries. Do you want me to just tell you the rest of this one?"
4. **keyPoints[0].content**: Add a concrete everyday variable-resistor example (a dimmer switch: slide one way → more resistance → less current → dimmer lamp) and an explicit line saying a phone's touchscreen volume is not a resistor, so the tutor does not invent the phone-slider analogy. — "Think of your phone's volume slider. Sliding it changes the resistance, and that changes how much current flows."
5. **teach-core: no answer in the preceding sentence**: Do not state the answer immediately before asking the question. Ask first, then confirm. — "So a line through the origin means no push gives no flow. If the push is zero on this graph, how much flow would there be?"
