# Teach sim: p2-domestic (run, persona bored, 2026-10-17)

Model claude-haiku-4-5-20251001. 16 tutor turns, 0 flagged. Complete: true. Coverage: [true,true,true].

Lesson flags: none

**Tutor** [opening]: Hi! A **direct potential difference** stays in one direction, so the current flows one way only — that's what you get from batteries and cells in torches and phones. What do we call it when a potential difference keeps reversing direction instead?

**Student** (minimal): what?

**Tutor** [retry, point 0]: A battery pushes current in just one direction — always the same way round. That's called direct current, or dc for short. Where does the current go when you use a battery in a torch?

**Student** (try): from the battery through the bulb and back?

**Tutor** [fact, point 0]: Spot on — it goes out through the bulb and back to the battery. Now, the UK mains supply works differently. How many times per second does the mains current reverse direction?

**Student** (wrong): like 50 times?

**Tutor** [retry, point 0]: Right — 50 times per second is exactly it! So the mains current reverses direction 50 times every single second, which we call 50 Hz. That reversing back and forth is what makes it alternating current, or ac.  What voltage is the UK mains supply?

**Student** (try): um like 230 volts?

**Tutor** [checkin, point 0]: Would you like me to just tell you the rest about ac?

**Student** (checkin-no): nah im good, ask me stuff

**Tutor** [fact, point 0]: Right — 230 volts is the UK mains voltage. So the mains supply is alternating current at 230 V that reverses 50 times per second.  What do you use alternating current for in your home?

**Student** (try): like lights and stuff? plugging things in?

**Tutor** [retry, point 0]: Right — lights, phones, kettles, all of those. The thing is, all those devices can use the mains ac supply because ac is what comes out of the wall socket. Your phone charger and kettle are designed to work with that reversing current at 230 V.  Why do you think we use ac in homes rather than dc from batteries?

**Student** (bored): huh?

**Tutor** [next, point 0]: OK, let me put that more simply. Now, when you plug in a kettle or phone charger, the wire that connects them has three different wires inside it, each one doing a different job. The live wire is brown, and that's the one carrying the dangerous 230 V from the mains supply. Which wire colour is the live wire?

> Recap: Direct current (dc) from batteries flows one way only, like in a torch. / Alternating current (ac) from the mains reverses direction 50 times every second (50 Hz). / UK mains supply is 230 volts of alternating current. / Ac powers most things in your home like lights and kettles.

**Student** (bored): this is long

**Tutor** [retry, point 1]: Inside a cable are three wires with different colours and different jobs. The brown one is called the live wire, and it carries the dangerous 230 V from the mains.  What colour is the live wire?

**Student** (minimal): k

**Tutor** [fact, point 1]: The live wire is brown — it carries the dangerous 230 V from the mains. Now, there's also a blue wire called the neutral wire, and that one completes the circuit by returning the current back to the supply.  What does the neutral wire do?

**Student** (try): returns the current back?

**Tutor** [fact, point 1]: Right — it returns the current back to the supply. There's also a third wire called the earth wire, and it's green and yellow striped. It's a safety wire that connects the metal casing of an appliance to earth, so if something goes wrong, the appliance doesn't become dangerous.  What colour is the earth wire?

**Student** (bored): this is long

**Tutor** [checkin, point 1]: Would you like me to just tell you about the earth wire so we can move on?

**Student** (checkin-yes): yeah just tell me

**Tutor** [next, point 1]: The earth wire is green and yellow. It connects the metal casing to earth so the appliance can't become dangerous if something goes wrong inside.  What does earthing mean?

> Recap: Three wires run through a cable, each with a different job to do. / The brown live wire carries the dangerous 230 V from the mains supply. / The blue neutral wire completes the circuit by sending current back. / The green and yellow earth wire is the safety wire protecting the metal casing.

**Student** (offtopic): dunno im hungry lol

**Tutor** [retry, point 2]: That's fair! So earthing is just connecting the metal case to the ground through that green and yellow wire, so it stays safe even if something breaks inside.  Why does connecting the metal casing to earth make an appliance safer?

**Student** (try): so like if something breaks the electricity goes to earth instead of like shocking you?

**Tutor** [complete, point 2]: Exactly — if something inside breaks and the metal casing becomes live, the current flows safely down the earth wire to the ground instead of through you.  You've got the main idea spot on: earthing keeps you safe when things go wrong. Come back to this whenever you're ready, or if you want to chat through anything else!

> Recap: The earth wire (green and yellow) connects the metal casing safely to the ground. / If something breaks inside, the dangerous electricity flows into the earth instead of you. / This stops you getting an electric shock when you touch the appliance.

**Student** (closing): ok thanks bye

**Tutor** [free]: You're welcome! You've done really well today — you've understood the key safety ideas. Come back whenever you're ready to learn more.

## Judge (claude-opus-5-5)

**FAIL** — engagement 2; question does not match what was taught: T0, T2, T3, T5, T6

Engagement 2/5 — "S11: this is long"

Would quit: false

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | false | false | false | "What do we call it when a potential difference keeps reversing direction instead?" — Asks the name for ac before ac has been taught. The student replied 'what?' |
| T1 | true | true | false | false | "Where does the current go when you use a battery in a torch?" |
| T2 | true | false | false | false | "How many times per second does the mains current reverse direction?" — Asks for the mains frequency before teaching it. The student had to guess. |
| T3 | true | false | false | true | "So the mains current reverses direction 50 times every single second, which we call 50 Hz." — Factual error: 50 Hz is 50 complete cycles per second, so the current reverses 100 times. It also asks for the mains voltage, which had not been taught. |
| T4 | true | null | false | true | "Would you like me to just tell you the rest about ac?" — Ignores the student's correct answer '230 volts' and gives no feedback. |
| T5 | true | false | false | false | "What do you use alternating current for in your home?" — This question was not taught and does not test anything from the lesson. |
| T6 | false | false | false | false | "Why do you think we use ac in homes rather than dc from batteries?" — Off-spec question that is not in the lesson. The student replied 'huh?' |
| T7 | true | true | true | true | "OK, let me put that more simply. Now, when you plug in a kettle or phone charger, the wire that connects them has three different wires inside it" — Promises to simplify, then abandons the question and switches topic. Around 60 words. |
| T8 | true | true | false | false | "What colour is the live wire?" — Repeats T7 almost word for word right after the student said 'this is long'. |
| T9 | true | true | false | false | "What does the neutral wire do?" — Answers its own previous question after the student's non-answer 'k'. |
| T10 | true | true | false | false | "What colour is the earth wire?" — Asks the student to parrot a colour given one sentence earlier, which is low value. |
| T11 | true | null | false | false | "Would you like me to just tell you about the earth wire so we can move on?" |
| T12 | true | true | false | false | "What does earthing mean?" — The student had just said 'yeah just tell me', but the tutor ends with another question anyway. |
| T13 | true | true | false | false | "Why does connecting the metal casing to earth make an appliance safer?" |
| T14 | true | null | false | false | "Exactly — if something inside breaks and the metal casing becomes live, the current flows safely down the earth wire to the ground instead of through you." — Ends the session without covering 'live wire dangerous even when switch is open' or the neutral wire's ~0 V. |
| T15 | true | null | false | false | "You're welcome! You've done really well today — you've understood the key safety ideas." |

Fixes:

1. **teach-core: only ask questions about content already taught**: Teach the fact first, then question it. Never open by asking for the name, frequency or voltage of ac before stating it. — "T2: Now, the UK mains supply works differently. How many times per second does the mains current reverse direction?"
2. **keyPoints[0].memTip**: Replace 'back and forth 50 times a second' with '50 complete back-and-forth cycles every second'. This stops the tutor saying the current reverses 50 times per second. — "T3: So the mains current reverses direction 50 times every single second, which we call 50 Hz."
3. **teach-core: acknowledge the student's answer before any check-in offer**: When the student answers, confirm it immediately in the same turn. Never reply with only a check-in offer. — "S4: um like 230 volts?"
4. **teach-core: respond to boredom signals**: After 'this is long', 'k' or 'huh?', cut the next turn to 25 words or fewer with one new fact and one question. Do not repeat the previous turn. — "S8: this is long"
5. **teach-core: stay within lesson scope and cover all keyPoints**: Drop off-spec questions such as 'why ac rather than dc'. Use the time to teach keyPoints[1].writeBullets[1], that the live wire can be dangerous even when a switch is open, before closing the session. — "T6: Why do you think we use ac in homes rather than dc from batteries?"
