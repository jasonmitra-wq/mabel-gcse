# Teach sim: p2-series-parallel (run, persona bored, rescored, 2026-10-17)

Model claude-haiku-4-5-20251001. 19 tutor turns, 0 flagged. Complete: true. Coverage: [true,true,true,true,true].

Lesson flags: none

**Tutor** [opening]: Hi! Let's start with series circuits, where all the components are wired up in one single loop. What do you think "single loop" means — how many different paths can the charge take?

**Student** (wrong): um like 3 different paths?

**Tutor** [fact, point 0]: Not quite — in a single loop, the charge can only take one path, so there's just one route all the way round. In a series circuit, the components are all joined in that one continuous loop with no branches. What's the total resistance when you connect a 10 Ω resistor and a 6 Ω resistor in series?

**Student** (bored): huh?

**Tutor** [retry, point 0]: In a series circuit, resistances just add together — so a 10 Ω resistor and a 6 Ω resistor give you 10 + 6 altogether. What's that total?

**Student** (try): like 16 ohms?

**Tutor** [next, point 0]: Yes, 16 ohms is right.  Now let's look at a completely different way to wire things up. In a parallel circuit, components are joined in separate branches between the same two points, so the charge has different routes it can take. What's different about how many paths the charge has compared to a series circuit?

> Recap: In a series circuit, all components are connected in one continuous loop with no branches. / The charge can only follow one single path all the way around the circuit. / Resistances in series just add together — so 10 Ω plus 6 Ω equals 16 Ω total.

**Student** (bored): this is long

**Tutor** [retry, point 1]: In a parallel circuit, the branches split off and then join back up — so the charge can go different ways instead of just one loop. How many routes can the charge take in a parallel circuit with three separate branches?

**Student** (try): like 3 different paths?

**Tutor** [fact, point 1]: Right — three different paths, exactly.  Here's the really important bit: when you add branches in parallel, the total resistance actually gets *smaller*, not bigger like in series. It's always less than even the smallest single resistor you've got.  What do you think happens to how easily charge can flow when you give it more routes to take?

**Student** (bored): huh?

**Tutor** [retry, point 1]: Think of it like this: if water can flow down one pipe or two pipes instead, it spreads out and flows more easily through the whole system. More routes means less resistance overall.  What happens to the total resistance when you add a second branch in parallel?

**Student** (try): it gets smaller?

**Tutor** [checkin, point 1]: Right — it gets smaller, exactly.  Would you like me to tell you the rest about parallel resistance now?

**Student** (checkin-no): nah im good for now

**Tutor** [fact, point 1]: So in a parallel circuit, the total resistance is always smaller than the smallest single resistor in it. That's the key rule to remember — it's what makes parallel circuits so useful.  What would the total resistance be if you had one resistor of 10 ohms and another of 20 ohms in parallel?

**Student** (wrong): umm like 30 ohms?

**Tutor** [retry, point 1]: Not quite — remember, in parallel the total resistance is always *less* than the smallest resistor, not more. So if your smallest one is 10 ohms, the total has to be smaller than 10 ohms.  What's the smallest resistor in your 10 and 20 ohms pair?

**Student** (try): 10 ohms is smaller

**Tutor** [next, point 1]: Right — 10 ohms is the smallest. So the total resistance must be less than 10 ohms, not 30. Now, think about your home. Why would it be a problem if your house wiring was in series instead?

> Recap: In parallel circuits, the charge can split and take multiple different routes instead of just one path. / When you add more branches in parallel, the total resistance actually gets smaller, not bigger. / The total resistance in a parallel circuit is always less than even the smallest single resistor in it. / More routes for charge to flow means the overall resistance decreases — like water spreading through extra pipes.

**Student** (wrong): cos then like all the lights would be really bright?

**Tutor** [retry, point 2]: Right — lights in series would actually all go dim, not bright. But the real problem is: what happens if you turn off one device, like your phone charger?

**Student** (wrong): then all the other stuff would turn off too?

**Tutor** [next, point 2]: Exactly — in series, if one device switches off, the whole circuit breaks and everything stops.  Now let's look at series circuits properly. When resistors are in series, we can replace them all with a single resistance that has the same effect — we call that the **equivalent resistance**.   What do you think "equivalent" means?

> Recap: In a series circuit, if one device switches off, everything else stops working too. / Home wiring uses parallel circuits so you can control each device independently. / Series circuits don't work for houses because you'd lose power to everything if one thing breaks or turns off.

**Student** (bored): um that's like a lot of words

**Tutor** [retry, point 3]: No worries — think of it this way: instead of lots of resistors all joined up, you can pretend there's just one resistor that does the same job. What's a word that means "does the same job"?

**Student** (wrong): same?

**Tutor** [next, point 3]: Yeah, same — that's the idea. Now, when you want to measure the current flowing through a component, you need to use a meter called an **ammeter**, and it has to be connected in series with the component.  What does "in series" mean?

> Recap: In a series circuit, all the resistors work together as one unit. / You can replace multiple resistors with a single "equivalent resistor" that has the same effect. / Equivalent just means it does the same job as all the others combined.

**Student** (wrong): like all connected in a line?

**Tutor** [fact, point 4]: Now, to measure the **potential difference** across a component, you use a different meter called a **voltmeter**, and it connects **in parallel** with the component — that means it joins between the same two points as the component, like a little branch off to the side. What does "across" a component mean?

**Student** (bored): this is way too long

**Tutor** [retry, point 4]: Think of it simply: the voltmeter sits beside the component, touching both its ends — like a shortcut that doesn't block anything.  Where does a voltmeter connect compared to the component?

**Student** (try): both ends of it?

**Tutor** [complete, point 4]: Yes, exactly — both ends of the component, so it can measure the voltage across it.  That's the end of this lesson — you've really got the core idea that **where** you connect things completely changes how the circuit works. You can always ask me anything else about circuits whenever you need to.

> Recap: An ammeter measures current and connects in series — right in the path of the flow. / A voltmeter measures potential difference and connects in parallel — touching both ends of a component. / In parallel means the voltmeter sits beside the component like a branch, not blocking anything.

**Student** (closing): ok thanks bye

**Tutor** [free]: You're welcome — well done today, and good luck with your GCSEs!

## Judge (claude-opus-5-5)

**FAIL** — engagement 2; would quit at T15; question does not match what was taught: T1, T8, T10

Engagement 2/5 — "this is way too long"

Would quit: T15 — "this is way too long" (This is the third length complaint (after 'this is long' and 'that's like a lot of words'). T15 is still a long, bold-heavy paragraph that ignores the student's earlier answer.)

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | true | false | false | "What do you think "single loop" means — how many different paths can the charge take?" |
| T1 | true | false | false | false | "What's the total resistance when you connect a 10 Ω resistor and a 6 Ω resistor in series?" — Asks for a series total before teaching that resistances add. The student replies 'huh?'. |
| T2 | true | true | false | false | "so a 10 Ω resistor and a 6 Ω resistor give you 10 + 6 altogether. What's that total?" |
| T3 | true | true | true | false | "What's different about how many paths the charge has compared to a series circuit?" — Around 55 words. The student immediately says 'this is long'. |
| T4 | true | true | false | false | "How many routes can the charge take in a parallel circuit with three separate branches?" — Ignores the student's 'this is long' complaint and carries on unchanged. |
| T5 | true | true | true | true | "What do you think happens to how easily charge can flow when you give it more routes to take?" — Too long. The vague, abstract question switches from 'resistance' to 'how easily charge flows'. The student replies 'huh?'. |
| T6 | true | true | false | false | "What happens to the total resistance when you add a second branch in parallel?" |
| T7 | true | null | false | false | "Would you like me to tell you the rest about parallel resistance now?" — This check-in invites a 'no'. The student declines. |
| T8 | true | false | false | false | "What would the total resistance be if you had one resistor of 10 ohms and another of 20 ohms in parallel?" — Overrides the student's 'nah im good for now'. Asks for a numeric parallel total, but no method was taught; only 'less than smallest' was. The student guesses 30. |
| T9 | true | true | false | false | "What's the smallest resistor in your 10 and 20 ohms pair?" |
| T10 | true | false | false | false | "Why would it be a problem if your house wiring was in series instead?" — Jumps to household wiring without teaching it first. |
| T11 | true | true | false | true | "Right — lights in series would actually all go dim, not bright." — Says 'Right' to a wrong answer, then contradicts it. |
| T12 | true | true | true | false | "What do you think "equivalent" means?" — Around 60 words, with the new term bolded mid-paragraph. The student says 'that's like a lot of words'. |
| T13 | true | true | false | false | "What's a word that means "does the same job"?" |
| T14 | true | true | false | false | "What does "in series" mean?" — Skips the whole series calculation method (I = V ÷ Rtotal, V = IR, the add-up check) and jumps to meters. |
| T15 | true | true | true | false | "What does "across" a component mean?" — Gives no feedback on S15 'like all connected in a line?'. The long paragraph triggers 'this is way too long'. |
| T16 | true | true | false | true | "like a shortcut that doesn't block anything" — 'Shortcut' suggests a short circuit. This is a misleading picture of a voltmeter. |
| T17 | true | null | false | false | "That's the end of this lesson" — Ends with no series calculation taught, no checkpoints run, and the household two-point answer never given. |
| T18 | true | null | false | false | "You're welcome — well done today, and good luck with your GCSEs!" |

Fixes:

1. **teach-core: respond to boredom/length signals**: When the student writes 'this is long', 'too long', 'lot of words' or 'huh?', drop to one idea in 25 words or fewer plus one short question. Remove bold markup and the preamble. — "this is way too long"
2. **teach-core: teach before testing**: Never ask a question whose rule hasn't been stated yet. In T1, state 'in series, resistances just add' before asking for the 10 Ω + 6 Ω total. — "What's the total resistance when you connect a 10 Ω resistor and a 6 Ω resistor in series?"
3. **keyPoints[3].content**: Teach the series calculation steps in small chunks, using checkpoints.0 and checkpoints.3 as worked mini-questions with whole-number arithmetic. Only end the lesson after the checkpoints have been run. — "That's the end of this lesson — you've really got the core idea"
4. **teach-core: feedback on wrong answers**: Never open with 'Right' or 'Exactly' when the answer is wrong. Say 'Not quite' and give the correct fact once. Always acknowledge the student's previous answer before moving on, which T15 skipped. — "Right — lights in series would actually all go dim, not bright."
5. **keyPoints[1].tutor_note**: Add: 'Don't ask for a numeric parallel total. Ask a comparison instead, e.g. Is it bigger or smaller than 10 Ω?' This avoids mental arithmetic the student can't do and that wasn't taught. — "What would the total resistance be if you had one resistor of 10 ohms and another of 20 ohms in parallel?"
