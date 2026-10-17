# Teach sim: p2-series-parallel (run, persona bored, 2026-10-17)

Model claude-haiku-4-5-20251001. 16 tutor turns, 1 flagged. Complete: true. Coverage: [true,true,true,true,true].

Lesson flags: none

**Tutor** [opening]: Hi! Today we're looking at how the way you join components in a circuit completely changes what happens — and we'll start by understanding what a series circuit actually is: components all wired in one continuous loop with nowhere else for the current to go.  In a series circuit, how many paths does the current have to follow?

**Student** (try): just one path right? everything in a loop

**Tutor** [fact, point 0]: Exactly — one loop, nothing branches off. But here's something else that matters: the total resistance in the circuit is actually the sum of each resistor's resistance added together. So if you have a 3 Ω resistor and a 5 Ω resistor in series, what's the total resistance?

**Student** (try): um 3 plus 5 so like 8 ohms?

**Tutor** [retry, point 0]: Right answer — 8 ohms is spot on. The thing to remember is that when resistors are in series, you're literally adding up how much they each resist the current. If you had three resistors in series — one of 2 Ω, one of 4 Ω, and one of 1 Ω — what would the total resistance be?

**Student** (bored): huh?

**Tutor** [next, point 0]: Now, series circuits are one loop, but there's another way to join components — in separate branches. In a parallel circuit, components connect between the same two points but take different paths. What's different about the potential difference across each branch compared to a series circuit?

> Recap: In a series circuit, current flows in just one continuous loop with no branches. / The total resistance in a series circuit is all the individual resistances added together. / When you add resistors in series, their resistances combine — so 3 Ω + 5 Ω = 8 Ω total.

**Student** (try): wait so like each branch has the same voltage across it?

**Tutor** [fact, point 1]: Yes, exactly — each branch has the same voltage across it. If you had a 6 Ω resistor in one branch and a 3 Ω resistor in another branch, what do you think the total resistance would be compared to that 3 Ω resistor?

**Student** (try): um like less than 3 ohms?

**Tutor** [next, point 1]: Right — less than 3 ohms is correct, because the parallel path gives current extra ways to flow through, so total resistance drops. Now, series and parallel aren't just theory — they're everywhere in real life. What do you think would happen if all those appliances were wired in series instead of parallel?

> Recap: In parallel circuits, components sit in separate branches between the same two points. / Each branch gets the full voltage across it — they all have the same potential difference. / Adding more branches to a parallel circuit lowers the total resistance.

**Student** (bored): this is too long ngl

**Tutor** [retry, point 2]: You're right — it's a lot to think about at once. If your home was wired in series instead of parallel, what would happen when you switched one thing off?

**Student** (try): everything else would turn off too?

**Tutor** [next, point 2]: Exactly right — everything else would turn off too, because in series they're all in one loop. Now, when resistors are in series, we can treat them as one single resistance instead, and that makes calculations much easier. What do you think you'd do first if you wanted to find that equivalent resistance for two resistors in series?

> Recap: In parallel circuits, appliances work independently — switching one off doesn't affect the others. / If home wiring used series instead, turning off one thing breaks the whole circuit. / Parallel wiring is why your lights stay on when you unplug something else.

**Student** (wrong): add them together?

**Tutor** [retry, point 3]: Yes, exactly — you add them together. That single number you get is called the **equivalent resistance**, because it's one resistance value that works the same as both resistors together in the circuit.  Once you've found that total, what's the next step to find the current flowing through the circuit?

**Student** (try): use ohms law? voltage divided by resistance?

**Tutor** [next, point 3]: Spot on — voltage divided by resistance is Ohm's law, so you've got it. Now, when you're actually building a circuit to measure things, you need to put meters in the right places. Where exactly would you put an ammeter if you wanted to measure the current going through a resistor?

> Recap: In a series circuit, add all the resistors together to find the total resistance. / Once you've got the total resistance, use Ohm's law to find the current. / Ohm's law is voltage divided by resistance, which gives you the current in amps.

**Student** (bored): huh?

**Tutor** [retry, point 4]: Think of it this way: the ammeter needs to be *in the path* so all the current flows through it to measure it. Where in the circuit would you put the ammeter — in series with the component, or in parallel with it?

⚑ unanswerable: either/or question

**Student** (wrong): in parallel with it?

**Tutor** [fact, point 4]: Actually, the ammeter goes in series with the component — that way all the current flows through it. Now, if you want to measure the voltage across a component instead, you use a different meter called a **voltmeter**, and that one connects in parallel across the component, between the same two points.  What do you think "across the component" means?

**Student** (bored): this is long

**Tutor** [retry, point 4]: I get it — let me make it simpler. A voltmeter clips onto two points on opposite sides of a component to measure the voltage *between* them. What do you call the two ends of a component where you'd clip the voltmeter on?

**Student** (wrong): the wires?

**Tutor** [checkin, point 4]: Would you like me to just tell you the rest about voltmeters so you've got it clear?

**Student** (checkin-yes): yeah go on

**Tutor** [complete, point 4]: A voltmeter measures the voltage (or potential difference) across a component, and it always connects in parallel — clipped across both ends of the component so current can bypass it.

> Recap: An ammeter measures current and goes in series with a component so all current flows through it. / A voltmeter measures voltage and connects in parallel across a component between its two terminals. / The ammeter is part of the main circuit path, but the voltmeter clips on at both ends of the component.

**Student** (closing): ok thanks

**Tutor** [free]: You're welcome. You've got the key ideas now — series and parallel work totally differently, and that's what makes circuit problems solvable. Good luck with your revision!

## Judge (claude-opus-5-5)

**FAIL** — engagement 2; would quit at T12; question does not match what was taught: T3, T4, T5, T8, T9, T12

Engagement 2/5 — "S12: this is long"

Would quit: T12 — "What do you call the two ends of a component where you'd clip the voltmeter on?" (This was the student's second length complaint ('this is long'). The tutor answered it with a guess-the-word question, and the student guessed 'the wires?' and then let the tutor talk.)

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | true | false | false | "In a series circuit, how many paths does the current have to follow?" — About 57 words, close to the limit. The preamble already says 'nowhere else for the current to go', so the question gives its own answer away. |
| T1 | true | true | false | false | "So if you have a 3 Ω resistor and a 5 Ω resistor in series, what's the total resistance?" — Skips the first series rule in keyPoints[0], that current is the same everywhere. That rule is never taught in the whole session. |
| T2 | true | true | false | false | "If you had three resistors in series — one of 2 Ω, one of 4 Ω, and one of 1 Ω — what would the total resistance be?" — Adding three numbers in your head is a load for a student weak at arithmetic. It got 'huh?'. |
| T3 | true | false | false | true | "What's different about the potential difference across each branch compared to a series circuit?" — Ignores the student's 'huh?' and abandons the series question. It also asks for a comparison with series p.d. sharing, which was never taught, and asks about parallel p.d. before teaching it. |
| T4 | true | false | false | false | "If you had a 6 Ω resistor in one branch and a 3 Ω resistor in another branch, what do you think the total resistance would be compared to that 3 Ω resistor?" — Asks about parallel total resistance before teaching the 'less than the smallest' rule. The student just guessed. |
| T5 | true | false | true | true | "What do you think would happen if all those appliances were wired in series instead of parallel?" — 'Those appliances' were never mentioned, and household wiring was not taught. The student replied 'this is too long ngl'. |
| T6 | true | true | false | false | "If your home was wired in series instead of parallel, what would happen when you switched one thing off?" |
| T7 | true | true | false | false | "Exactly right — everything else would turn off too, because in series they're all in one loop." — Never gives the exam's two-point answer (full 230 V to each device AND separate switching) even though examTip calls it a favourite. The next question repeats 'add them', which was already asked twice. |
| T8 | true | false | false | false | "Once you've found that total, what's the next step to find the current flowing through the circuit?" — I = V ÷ Rtotal was not taught before being asked. The student happened to know it. |
| T9 | true | false | false | false | "Where exactly would you put an ammeter if you wanted to measure the current going through a resistor?" — Jumps to ammeters with no teaching and got 'huh?'. No numerical series calculation is ever done, so checkpoints.0 and checkpoints.3 are skipped. |
| T10 | true | true | false | false | "Where in the circuit would you put the ammeter — in series with the component, or in parallel with it?" |
| T11 | true | true | true | false | "What do you think "across the component" means?" — Corrects the ammeter error but never re-checks it, then piles the voltmeter on top in about 59 words. The student replied 'this is long'. |
| T12 | true | false | false | true | "What do you call the two ends of a component where you'd clip the voltmeter on?" — A guess-the-word question about vocabulary the lesson never teaches. It does not test voltmeter placement. |
| T13 | true | null | false | false | "Would you like me to just tell you the rest about voltmeters so you've got it clear?" — Gives up on checking understanding. |
| T14 | true | null | false | true | "A voltmeter measures the voltage (or potential difference) across a component, and it always connects in parallel — clipped across both ends of the component so current can bypass it." — 'So current can bypass it' is a misleading reason. The lesson's reason is that it sits between the same two points, so it measures the same p.d. |
| T15 | true | null | false | false | "You've got the key ideas now — series and parallel work totally differently, and that's what makes circuit problems solvable." — Overclaims: the student did no calculation and got the ammeter wrong. There is no recap of rules and no checkpoint. |

Fixes:

1. **teach-core: rescue after 'huh?'**: When the student says 'huh?', do not move to a new topic. Re-ask the same idea in a smaller step, e.g. '2 + 4 first — what's that? Now add 1.' Only advance after a correct answer. — "huh?"
2. **teach-core: teach the rule before asking about it**: Before each question, state the keyPoint rule it tests in one sentence. Examples: 'In parallel, every branch gets the same p.d.' before T3's question; 'parallel total is less than the smallest resistor' before T4's; 'ammeter goes in series' before T9's. — "What's different about the potential difference across each branch compared to a series circuit?"
3. **teach-core: respond to length complaints**: After 'this is too long' or 'this is long', cap the next turns at 25 words: one fact plus one question, and drop the preamble. Never answer a complaint with a vocabulary-guess question. — "this is long"
4. **keyPoints[2].tutor_note**: Make the tutor deliver both exam points right after the student reasons about series home wiring: 'Parallel gives every device the full 230 V AND lets you switch each one separately — you need both for full marks.' Then ask checkpoints.2. — "Exactly right — everything else would turn off too, because in series they're all in one loop."
5. **keyPoints[0].content and keyPoints[3].content**: Teach 'current is the same everywhere in series'. Then walk through one easy-number calculation step by step: checkpoints.0, 6 + 10 = 16 Ω, 16 ÷ 16 = 1 A. Use two-number sums only, since the student is weak at mental arithmetic. — "Spot on — voltage divided by resistance is Ohm's law, so you've got it."
