# Teach sim: p2-current-voltage (run, persona bored, 2026-10-17)

Model claude-sonnet-5-5. 23 tutor turns, 0 flagged. Complete: true. Coverage: [true,true,true,true,true].

Lesson flags: none

**Tutor** [opening]: Welcome to electricity, the topic behind your phone, a kettle and Christmas lights! We'll start with electric current, which is simply the rate at which electric charge flows around a circuit, measured in amperes (A). So if charge is flowing quickly past a point in a wire, what would you say about the current there?

**Student** (wrong): it would be like really slow then?

**Tutor** [retry, point 0]: Not quite: fast flow means a big current, not a slow one. Current is just how much charge passes a point each second, like how much water rushes past in a river. If a lot of charge passes a point every second, what would you say about the current?

**Student** (wrong): oh right so it would be like 5 amps or smth

**Tutor** [fact, point 0]: So the answer is a big current, and 5 amps is a good example of one. Charge itself is measured in coulombs (C), and 1 ampere means 1 coulomb passes a point every second. So if a current of 1 A flows for 1 second, how many coulombs of charge have passed?

**Student** (try): um like 1 coulomb?

**Tutor** [next, point 0]: Right, 1 coulomb: 1 A means 1 coulomb passes every second. Now for what pushes the charge round: potential difference (p.d.) is how much energy is transferred for each coulomb of charge between two points, and it's measured in volts (V). So what unit is potential difference measured in?

> Recap: Current is how fast electric charge flows past a point. / More charge passing each second means a bigger current. / Current is measured in amperes (A), and charge in coulombs (C). / 1 amp means 1 coulomb passes each second, so 1 A for 1 s gives 1 C.

**Student** (try): volts innit

**Tutor** [retry, point 1]: Volts, yes. Now what that number actually means: a p.d. of 1 volt means 1 joule of energy is transferred for every 1 coulomb of charge that passes. Think of it as how big a push each coulomb gets. If a battery gives 3 volts, how many joules does each coulomb carry?

**Student** (bored): huh?

**Tutor** [next, point 1]: No worries: it's 3 joules for every coulomb. Next up is resistance, which is how much a component opposes the flow of current, so the more resistance, the less current flows. What do you think happens to the current if the resistance goes up?

> Recap: Potential difference is the energy transferred per coulomb of charge between two points. / It's measured in volts (V), and it works like the size of the push. / 1 volt means 1 joule of energy for every 1 coulomb that passes. / So a 3 volt battery gives each coulomb 3 joules of energy.

**Student** (wrong): it goes up too?

**Tutor** [retry, point 2]: Not quite: more resistance means *more* opposition, so *less* current gets through. Picture a crowd squeezing through a narrow gap: the narrower the gap, the fewer people get through each second. Resistance is measured in ohms (Ω). So if you increase the resistance of a wire, what happens to the current?

**Student** (bored): this is long man

**Tutor** [fact, point 2]: Fair enough, I'll keep it short: the current goes *down* when resistance goes up. Resistance is measured in ohms (Ω), and 1 ohm means 1 volt for every 1 ampere of current. What unit is resistance measured in?

**Student** (try): ohms?

**Tutor** [retry, point 2]: Yes, ohms, written as Ω. Think of 1 ohm as "1 volt pushing through for every 1 ampere that flows". So if 1 volt gives 1 ampere, the resistance is 1 ohm. If 2 volts give 1 ampere, what is the resistance in ohms?

**Student** (try): um like 2 ohms?

**Tutor** [next, point 2]: Yes, 2 ohms: 2 volts ÷ 1 ampere. Now, a graph of current against potential difference, called an I-V characteristic, shows how a component behaves, with current (I) on the y-axis and potential difference (V) on the x-axis. Which quantity goes on the x-axis?

> Recap: Resistance is how much a component opposes the flow of current. / More resistance means less current gets through. / Resistance is measured in ohms, written as Ω. / 1 ohm means 1 volt pushes 1 ampere of current.

**Student** (try): potential difference?

**Tutor** [retry, point 3]: Yes, potential difference goes on the x-axis, and current goes up the y-axis. A fixed resistor gives a straight line through the origin, because doubling the potential difference doubles the current. If the line is straight, what stays constant for that resistor?

**Student** (wrong): the current stays the same?

**Tutor** [fact, point 3]: Not quite: the current changes (it doubles when V doubles). What stays constant is the resistance. A component like this, with constant resistance at constant temperature, is called an ohmic conductor. If doubling V doubles I, what happens to the resistance, R = V ÷ I?

**Student** (offtopic): ugh im so hungry rn

**Tutor** [retry, point 3]: Hungry is fair, and you can come back to this any time. Here's the idea another way: when the graph is a straight line through the origin, every point gives the same V ÷ I, so the resistance never changes. If a resistor gives 2 volts at 1 ampere, what would the resistance be at 4 volts and 2 amperes?

**Student** (try): um 4 divided by 2 is like 2 ohms?

**Tutor** [checkin, point 3]: Do you want me to just tell you the rest of this one?

**Student** (checkin-no): no wait lemme try again

**Tutor** [fact, point 3]: Go for it. Your 2 ohms was right, because 4 ÷ 2 = 2 ohms, the same as 2 ÷ 1, so the resistance stayed constant. That's why an ohmic conductor gives a straight-line I-V graph through the origin. If a resistor's graph is a straight line, what happens to its current when you triple the potential difference?

**Student** (bored): huh?

**Tutor** [retry, point 3]: No worries, let me say it simpler. For a resistor with a straight-line graph, if you double the voltage, the current doubles too. So if the voltage goes from 2 volts to 6 volts, how many times bigger does the current get?

**Student** (idk): idk how to work that out

**Tutor** [next, point 3]: That's okay, we'll leave it there. You build a circuit with a variable resistor (rheostat), a resistor whose resistance can be changed, so you can vary the current. What do you think the variable resistor is used for in this circuit?

> Recap: An I-V graph plots current up the side and potential difference along the bottom. / A straight line through the origin means current and voltage rise together. / Double the voltage and the current doubles, so resistance stays constant. / A resistor with constant resistance at steady temperature is called an ohmic conductor.

**Student** (try): to change how much current flows?

**Tutor** [fact, point 4]: Yes, that's what a variable resistor does: it changes how much current flows. The ammeter measures that current, and it goes in series with the component, so the current passes through both, one after the other. In a series connection, where does the current have to go?

**Student** (try): through everything in the circuit?

**Tutor** [retry, point 4]: Yes, the current goes through everything in a series connection, including the ammeter. So the ammeter is connected in series with the component; which instrument is connected in parallel with it instead?

**Student** (idk): no idea what parallel means

**Tutor** [fact, point 4]: The instrument in parallel is the voltmeter. Parallel means it connects across the component, on its own branch, so it measures the p.d. across it. If the voltmeter were in series instead, it would change the current, so it must go in parallel. Which quantity does the voltmeter measure?

**Student** (wrong): does it measure the current?

**Tutor** [checkin, point 4]: Would you like me to just tell you the rest of this one?

**Student** (checkin-yes): yeah just tell me

**Tutor** [complete, point 4]: A voltmeter measures potential difference (p.d.), and it's connected in parallel, across the component. That's the end of this lesson, and you were right that the ammeter sits in series with the component, so the current goes through it. Well done sticking with it, and you can ask me anything else whenever you like.

> Recap: The variable resistor changes how much current flows around the circuit. / The ammeter goes in series, so the current passes through it and the component. / The voltmeter goes in parallel, across the component, on its own branch. / The voltmeter measures p.d. across the component, not the current.

**Student** (closing): ok thanks bye

**Tutor** [free]: Bye for now! Remember: ammeter in series, voltmeter in parallel. Come back whenever you want to practise more circuits.

## Judge (claude-opus-5-5)

**FAIL** — engagement 2

Engagement 2/5 — "S7: this is long man"

Would quit: false

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | true | false | false | "So if charge is flowing quickly past a point in a wire, what would you say about the current there?" |
| T1 | true | true | false | false | "If a lot of charge passes a point every second, what would you say about the current?" |
| T2 | true | true | false | false | "So the answer is a big current, and 5 amps is a good example of one." — Accepts '5 amps' as 'big' without saying that size is relative. |
| T3 | true | true | false | false | "So what unit is potential difference measured in?" — Repeats back the word it just said. This is too easy to show understanding. |
| T4 | true | true | false | false | "If a battery gives 3 volts, how many joules does each coulomb carry?" |
| T5 | true | true | false | false | "No worries: it's 3 joules for every coulomb. Next up is resistance" — The student said 'huh?'. The tutor gave the answer and moved on with no re-explanation of 1 V = 1 J per C. |
| T6 | true | true | false | false | "So if you increase the resistance of a wire, what happens to the current?" |
| T7 | true | true | false | false | "What unit is resistance measured in?" — Asks for a word stated one sentence earlier. Gives no real check. |
| T8 | true | true | false | false | "If 2 volts give 1 ampere, what is the resistance in ohms?" |
| T9 | true | true | false | false | "Which quantity goes on the x-axis?" |
| T10 | true | true | false | false | "If the line is straight, what stays constant for that resistor?" |
| T11 | true | true | false | false | "If doubling V doubles I, what happens to the resistance, R = V ÷ I?" |
| T12 | true | true | false | false | "Hungry is fair, and you can come back to this any time." — Invites the student to leave just as their attention is fading. |
| T13 | true | null | false | true | "Do you want me to just tell you the rest of this one?" — The student's '2 ohms' was correct. Offering to give the answer implies they were wrong. |
| T14 | true | true | false | false | "Your 2 ohms was right, because 4 ÷ 2 = 2 ohms" — Confirms the correct answer only after the student asked to retry. |
| T15 | true | true | false | false | "So if the voltage goes from 2 volts to 6 volts, how many times bigger does the current get?" — Needs 6÷2 ratio reasoning, but only doubling was taught. This is a poor fit for weak mental arithmetic. |
| T16 | true | true | false | true | "That's okay, we'll leave it there. You build a circuit with a variable resistor (rheostat)" — Drops the question without giving the answer. Jumps to the practical with no context. Skips the filament lamp and diode entirely. |
| T17 | true | true | false | false | "In a series connection, where does the current have to go?" |
| T18 | true | false | false | false | "which instrument is connected in parallel with it instead?" — 'Parallel' was never taught before this question. |
| T19 | true | true | false | false | "Which quantity does the voltmeter measure?" |
| T20 | true | null | false | true | "Would you like me to just tell you the rest of this one?" — The wrong answer ('current') is not corrected. The tutor offers to give up instead of contrasting voltmeter with ammeter. |
| T21 | true | null | false | false | "That's the end of this lesson" — Ends the lesson with the I-V shapes for filament lamp and diode, Q = It/E = QV calculations and checkpoints never covered. |
| T22 | true | null | false | false | "Remember: ammeter in series, voltmeter in parallel." |

Fixes:

1. **teach-core: grade answer before offering to tell**: If the student's answer is correct, confirm it first, e.g. 'Yes, 2 Ω, the same as before'. Never send the 'just tell you' offer after a correct answer. — "T13: Do you want me to just tell you the rest of this one?"
2. **teach-core: end-of-lesson gating**: Do not end the lesson until keyPoints[3] (filament lamp and diode I-V shapes) is taught and Q = It, E = QV and R = V/I have each been practised once with checkpoints.0-3. — "T21: That's the end of this lesson"
3. **teach-core: handling 'huh?'/'idk'**: Re-explain with one tiny worked step, e.g. '1 V = 1 J per coulomb, so 3 V = ? J', then re-ask. Do not give the answer and move on or drop the question. — "T16: That's okay, we'll leave it there."
4. **teach-core: don't ask about untaught terms**: Define 'parallel' (connected across the component, on its own branch) before asking which meter goes in parallel. — "T18: which instrument is connected in parallel with it instead?"
5. **teach-core: number choice for weak arithmetic**: Use doubling-only examples (2 V → 4 V) for proportionality questions instead of ratio questions like 2 → 6. After a wrong answer, correct it directly, e.g. 'No, the ammeter measures current; the voltmeter measures p.d.' — "T15: So if the voltage goes from 2 volts to 6 volts, how many times bigger does the current get?"
