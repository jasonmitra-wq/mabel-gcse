# Teach sim: p2-current-voltage (run, persona bored, 2026-10-21)

Model claude-sonnet-5-5. 50 tutor turns, 2 flagged. Complete: false. Coverage: [null,null,null,null,null,null,null].

Lesson flags: points never completed: 0 "Electric current", 1 "Potential difference and resistance", 2 "Required practical", 3 "Ohmic conductors", 4 "Filament lamps and diodes", 5 "Required practical", 6 "Energy transferred"

**Tutor** [opening (what she knows)]: Welcome! Let's start with something from everyday life: when you press the button on a torch and the bulb lights up, what do you think is going on inside it to make that happen?

**Student** (idk): idk like... electricity goes in somehow?

**Tutor** [start, point 0]: That's fine, you're on the right track: something does travel through the wires. It's tiny particles that carry charge, and they drift round together. What do you think would happen to the bulb if there were a gap in the wire?

**Student** (wrong): umm the particles would just jump across the gap?

**Tutor** [pilot, point 0]: Not quite. The particles can't jump across a gap, so the flow stops everywhere in the loop and the bulb goes out. Where else in a torch might a gap like that appear when you slide it to off?

**Student** (wrong): oh in the battery maybe?

**Tutor** [pilot]: Not quite: a gap in the battery isn't how a torch switches off. The gap opens in the switch itself, where it breaks the loop so nothing can flow round.

**Student** (idk): whats a switch tho

**Tutor** [pilot, point 0]: A switch is the part that opens or closes a gap in the wire, to stop or start the flow. Think of the light switch on your bedroom wall. What do you do with it to make the light stop working?

**Student** (try): flip it down to break the wire

**Tutor** [pilot]: Yes: flipping the switch down opens a gap in the circuit, so nothing gets round and the light stops.

**Student** (try): ok got it

**Tutor** [pilot, point 0]: The amount of charge that passes a point is called the charge flow, and it is counted in coulombs (C). Picture the running track: the charge flow is how many runners go past one spot. What part of the track would you stand at to count them?

**Student** (try): anywhere on the track really? like by the finish line?

**Tutor** [pilot, point 0]: Yes, anywhere works, the finish line included. In a single loop the same amount of charge passes every spot each second, so the count is the same wherever you stand.

**Student** (wrong): so like more runners means more charge flow right

**Tutor** [pilot, point 0]: Yes, more runners passing a spot means more charge flow, counted in coulombs (C). Suppose 3 coulombs pass the finish line, then 4 more pass a little later. What is the total charge flow in coulombs?

**Student** (try): um 7 coulombs i think?

**Tutor** [pilot, point 0]: A coulomb (C) is the unit we count charge in, like counting runners one by one. And 7 coulombs is right: 3 plus 4 gives 7. Now suppose 10 coulombs passed the finish line, and 2 more passed the same spot.

**Student** (try): 12 coulombs?

**Tutor** [pilot, point 0]: Yes, 12 coulombs is right: 10 plus 2 gives the charge flow, the total charge passing a point. We write charge flow as Q, so here Q = 12 C.  Now suppose 5 coulombs pass the finish line in one second, then 5 more pass in the next second. What is Q after those two seconds?

**Student** (bored): huh?

**Tutor** [pilot, point 0]: Sorry, that was a lot. Simply: charge flow, Q, is just the total number of coulombs that go past a spot, like counting all the runners who cross the finish line.  Suppose 4 coulombs cross the finish line, then 6 more cross. What is Q in coulombs?

**Student** (try): 4 plus 6 is... 10 coulombs?

**Tutor** [pilot]: Yes — 10 coulombs is right, because you added the two amounts of charge together.

**Student** (wrong): cool so Q is just adding up the charge yeah

**Tutor** [pilot, point 0]: Yes, Q is the total charge that passes a point, counted in coulombs. Now the next idea: if charge passes steadily, the current is how much passes each second, so 3 coulombs passing every second is a current of 3 amps.  If 3 coulombs pass each second, what is Q after 2 seconds, in coulombs?

**Student** (idk): idk how to work that out

**Tutor** [retry, point 0]: That's okay, let's do it in steps. If 3 coulombs cross the finish line in the first second, then another 3 coulombs cross in the second second, you just add them up like before.  How many coulombs have crossed after those 2 seconds?

**Student** (try): 3 plus 3 is like 6 coulombs?

**Tutor** [pilot, point 0]: Yes — 6 coulombs is right, because you added 3 and 3. A coulomb is just the unit we count charge in.  If 3 coulombs pass each second, how many coulombs have passed after 3 seconds?

**Student** (try): um 3 plus 3 plus 3... is 9 coulombs?

**Tutor** [pilot]: Yes, 9 coulombs is right, because 3 coulombs pass each second, and adding 3 three times gives the total after 3 seconds.

**Student** (try): got it so i just keep adding

**Tutor** [pilot, point 0]: Yes, just keep adding. The amount of charge that has passed a point is called the charge flow, written Q, and it's counted in coulombs. Say 4 coulombs pass each second.

**Student** (idk): ok so what now

**Tutor** [pilot, point 0]: Now try it the other way round: 4 coulombs pass a point each second, and that steady flow lasts for 5 seconds. How many coulombs of charge flow have passed after those 5 seconds?

**Student** (try): um 4 times 5... is like 20 coulombs?

**Tutor** [pilot, point 0]: Yes, 20 coulombs is right, and a coulomb is just the unit we use to count charge. Multiplying works because 4 coulombs pass each second for 5 seconds. Now suppose the flow was only 2 coulombs each second, still for 5 seconds.

**Student** (try): 2 times 5 is like 10 coulombs?

**Tutor** [pilot, point 0]: Yes, 10 coulombs is right: 2 coulombs each second for 5 seconds. A coulomb is just the unit we count charge in. Notice the flow was smaller this time, so less charge passed.  Now suppose the flow is 3 coulombs each second, for 4 seconds. How many coulombs pass?

**Student** (idk): idk how to do it

**Tutor** [pilot]: That's fine, I haven't shown you the way to work it out yet, so let's build it step by step.

**Student** (wrong): um is it 3 plus 4 equals 7 coulombs?

**Tutor** [pilot, point 0]: Not quite. A coulomb is the unit we count charge in, and here 3 and 4 are multiplied, not added: 3 coulombs pass each second, and that happens for 4 seconds.  So how many coulombs pass in total?

**Student** (idk): idk lol

**Tutor** [pilot]: That's fine, I haven't given you the numbers yet, so there was nothing to work from. Let's go back to the start and take it one step at a time.

**Student** (offtopic): im kinda hungry tbh

**Tutor** [pilot, point 0]: Being hungry is fair, and you can come back to this any time. Charge flow, Q, is how much charge passes a point, counted in coulombs (C). If 3 coulombs pass a point every second, how many coulombs have passed after 2 seconds?

**Student** (try): 3 times 2 is 6 coulombs

**Tutor** [fact, point 0]: Yes, 3 times 2 is 6 coulombs, so you multiplied the charge each second by the seconds. That "how much charge passes each second" is called electric current, and we measure it in amperes (A), so 1 ampere is 1 coulomb each second.

⚑ no question on a teaching turn

**Student** (offtopic): wait whats electric current then

**Tutor** [pilot, point 0]: Electric current is a flow of charge, and its size is how much charge passes a point each second, measured in amperes (A). Like runners passing a marker on a track: the more runners passing each second, the bigger the current.  If 5 coulombs pass a point every second, what is the current in amperes?

**Student** (try): 5 amperes?

**Tutor** [fact, point 0]: Yes, 5 amperes is right: 5 coulombs each second means a current of 5 A. An ammeter is the meter that measures current in amperes.  If an ammeter reads 4 A, how many coulombs pass that point each second?

**Student** (wrong): is it 4 coulombs each second?

**Tutor** [pilot, point 0]: Yes, 4 coulombs each second is right. Coulombs are the unit of charge, so 4 A means 4 coulombs pass that point every second.

**Student** (wrong): so current is just coulombs per second basically?

**Tutor** [pilot, point 0]: Yes, that's the idea: current is how many coulombs, the unit of charge, pass a point each second.

**Student** (idk): ok cool next

**Tutor** [pilot, point 0]: One ampere is one coulomb passing each second, so a current of 2 A means 2 coulombs pass each second. If an ammeter reads 3 A, how many coulombs pass that point in 1 second?

**Student** (try): 3 coulombs pass each second

**Tutor** [fact, point 0]: Yes, 3 coulombs each second is right, because 3 A means 3 coulombs pass every second. Charge only flows round a closed circuit, which is a complete loop with no gaps, like a running track you can lap. If you cut the wire so there is a gap in the loop, what happens to the current?

**Student** (try): whats closed circuit mean

**Tutor** [pilot, point 0]: A closed circuit is a complete loop with no gaps. Charge only flows round it if it also has a cell in it to push the charge along. If you took the cell out, leaving a gap, what would happen to the lamp?

**Student** (try): the lamp would turn off?

**Tutor** [pilot]: Yes: the lamp would turn off, because a gap means the loop is broken, so no charge can get round.

**Student** (try): k got it

**Tutor** [pilot, point 0]: A closed circuit is a complete loop, and charge only flows round it if there's a cell in the loop to push it. Picture a loop with a lamp and a cell, then a loop with a lamp and no cell. In which loop does the lamp light?

**Student** (minimal): what?

**Tutor** [pilot, point 0]: Think of a loop with a lamp, and a cell as the thing that pushes. No push, no flow. Suppose you build a complete loop with a lamp but forget to put in a cell.

**Student** (try): the lamp wont light cos no cell to push

**Tutor** [pilot, point 0]: Yes: no cell means no push, so no flow. A closed circuit is a complete loop, and charge flows round it only if the loop also has a cell to push it. Suppose you join a cell into the loop but cut the wire somewhere. What happens to the lamp?

**Student** (try): lamp turns off cos the loop is broken

**Tutor** [fact, point 0]: Yes — breaking the loop stops the flow, so the lamp goes off. An ammeter is the meter that measures current, and it goes inside the loop, in line with the lamp, so the charge flows through it.

⚑ no question on a teaching turn

**Student** (wrong): so ammeter measures how bright the lamp is?

**Tutor** [pilot, point 0]: Not quite. An ammeter doesn't measure brightness; it measures current, which is how much charge flows round the loop each second.  Suppose you move the ammeter to a different spot in the same single loop. What does it still measure?

**Student** (idk): idk

**Tutor** [pilot]: That's fine, not knowing is okay. It still measures the current, meaning how much charge is flowing past a point each second.

**Student** (try): ok so current is same everywhere in the loop?

**Tutor** [pilot, point 0]: Yes, in a single loop the current is the same at every point, because charge is not used up on the way round.  Picture the running track: if 3 runners pass the start line each second, how many pass the far side of the track each second?

**Student** (try): 3 runners pass the far side each second

**Tutor** [pilot]: Yes, 3 runners pass the far side each second, because the same runners keep going round the loop, so the rate is the same everywhere on the track.

**Student** (try): whats rate mean

**Tutor** [pilot, point 0]: Rate means how quickly something happens: how many times it happens each second. For current, it's how many pieces of charge pass a point each second.  On the running track, what would happen to the rate if 6 runners passed the start line each second instead of 3?

**Student** (idk): 6 runners would pass the far side each second

**Tutor** [pilot]: Not quite — the rate would go up to 6 runners each second, because the rate is how many pass a point every second, and it was 3 before.

**Student** (wrong): so if current goes up the rate goes up too?

**Tutor** [pilot, point 0]: Yes. Current is the rate of flow of charge, so if more charge passes a point each second, the current is bigger.  On the track, if 2 runners pass each second, what happens to the current if 5 runners pass each second instead?

**Student** (idk): the current goes up?

**Tutor** [pilot]: Yes — the current goes up, because more runners (more charge) pass each second.

**Student** (offtopic): im so hungry rn can we take a break

**Tutor** [pilot, point 0]: That's fine, you can come back to this lesson any time. If you carry on, here's one more bit: an ammeter is the meter that measures current, and it goes in the loop itself, in line with the lamp.  If the ammeter sits in the loop, which unit does it show the current in?

**Student** (bored): huh?

**Tutor** [pilot, point 0]: An ammeter is just a meter that measures current, and it goes right in the loop with the lamp.

**Student** (try): amperes?

**Tutor** [pilot, point 0]: Yes — amperes (amps) is right, that's the unit of current. Because the current is the same everywhere in a single loop, the ammeter can go anywhere in it.

**Student** (offtopic): yeah im gonna go eat something bye

**Tutor** [pause, point 0]: No problem, thanks for sticking with it. Today you answered questions on electric current. Your place is saved, so we'll pick up right here next time. Bye for now!

## Judge (claude-opus-5-5)

**FAIL** — would quit at T46; flow faults: unexplained_term T1, unexplained_term T3, unexplained_term T7a, correct_answer_not_acknowledged T9, factual_or_unit_slip T21, factual_or_unit_slip T23, question_repeated_after_correct_answer T24, question_repeated_after_correct_answer T30, answer_in_question T30, question_repeated_after_correct_answer T31, question_not_answered_first T32a, question_repeated_after_correct_answer T34, question_repeated_after_correct_answer T36, answer_in_question T40, answer_in_question T42, correct_answer_not_acknowledged T43, factual_or_unit_slip T43, answer_in_question T44, exit_not_respected T46, tiredness_pushed_on T46

Engagement 2/5 — "im kinda hungry tbh"

Would quit: T46 — "If you carry on, here's one more bit: an ammeter is the meter that measures current, and it goes in the loop itself, in line with the lamp." (She asked for a break and the tutor kept teaching. She left soon after.)

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | null | false | false | "when you press the button on a torch and the bulb lights up, what do you think is going on inside it to make that happen?" |
| T1 | true | false | false | false | "What do you think would happen to the bulb if there were a gap in the wire?" — Asks about gaps before any teaching on loops. 'charge' is not explained. |
| T2 | true | true | false | false | "Where else in a torch might a gap like that appear when you slide it to off?" |
| T3 | true | null | false | false | "The gap opens in the switch itself, where it breaks the loop so nothing can flow round." — Uses 'switch' without explaining it. |
| T4 | true | true | false | false | "A switch is the part that opens or closes a gap in the wire, to stop or start the flow." |
| T5 | true | null | false | false | "Yes: flipping the switch down opens a gap in the circuit, so nothing gets round and the light stops." |
| T6 | true | true | false | true | "Picture the running track: the charge flow is how many runners go past one spot." — Says 'the running track' as if it was already introduced. It was not. |
| T7a | false | null | false | true | "First, a word you'll need: **work**. The transfer of energy by a force" — Irrelevant term card at this point, built from more unexplained terms. |
| T7 | true | null | false | false | "Yes, anywhere works, the finish line included." |
| T8 | true | true | false | false | "Suppose 3 coulombs pass the finish line, then 4 more pass a little later. What is the total charge flow in coulombs?" |
| T9 | true | true | false | true | "Now suppose 10 coulombs passed the finish line, and 2 more passed the same spot." — Opens with a definition instead of confirming her answer. Ends on an unfinished prompt with a Next button. |
| T10 | true | true | false | false | "Now suppose 5 coulombs pass the finish line in one second, then 5 more pass in the next second. What is Q after those two seconds?" |
| T11 | true | true | false | false | "Suppose 4 coulombs cross the finish line, then 6 more cross. What is Q in coulombs?" |
| T12 | true | null | false | false | "Yes — 10 coulombs is right, because you added the two amounts of charge together." |
| T13 | true | true | false | false | "If 3 coulombs pass each second, what is Q after 2 seconds, in coulombs?" — Introduces current, then drops it until T25. |
| T14 | true | true | false | false | "How many coulombs have crossed after those 2 seconds?" |
| T15 | true | true | false | false | "A coulomb is just the unit we count charge in." — Repeats the coulomb definition for no reason. |
| T16 | true | null | false | false | "Yes, 9 coulombs is right, because 3 coulombs pass each second, and adding 3 three times gives the total after 3 seconds." |
| T17 | true | null | false | true | "Say 4 coulombs pass each second." — Ends on a dangling statement, so she asks 'ok so what now'. 'just keep adding' is later contradicted. |
| T18 | true | true | false | true | "Now try it the other way round: 4 coulombs pass a point each second, and that steady flow lasts for 5 seconds." — Nothing here is 'the other way round'. |
| T19 | true | null | false | true | "Now suppose the flow was only 2 coulombs each second, still for 5 seconds." — Dangling prompt with no question. Repeats the coulomb definition again. |
| T20 | true | true | false | false | "Now suppose the flow is 3 coulombs each second, for 4 seconds. How many coulombs pass?" |
| T21 | true | null | false | true | "That's fine, I haven't shown you the way to work it out yet, so let's build it step by step." — False claim: the method was shown in T19. |
| T22 | true | true | false | true | "here 3 and 4 are multiplied, not added" — Contradicts 'Yes, just keep adding' in T17. |
| T23 | true | null | false | true | "That's fine, I haven't given you the numbers yet, so there was nothing to work from." — False: the numbers 3 and 4 were given. |
| T24 | true | true | false | false | "If 3 coulombs pass a point every second, how many coulombs have passed after 2 seconds?" — Repeats a question she already answered correctly in S15. |
| T25 | true | null | false | false | "That "how much charge passes each second" is called electric current, and we measure it in amperes (A), so 1 ampere is 1 coulomb each second." |
| T26 | true | true | false | false | "If 5 coulombs pass a point every second, what is the current in amperes?" |
| T27 | true | true | false | false | "If an ammeter reads 4 A, how many coulombs pass that point each second?" |
| T28 | true | null | false | false | "Yes, 4 coulombs each second is right." |
| T29 | true | null | false | false | "Yes, that's the idea: current is how many coulombs, the unit of charge, pass a point each second." |
| T30 | true | true | false | false | "If an ammeter reads 3 A, how many coulombs pass that point in 1 second?" — Same question as T27. The answer pattern is given in the same message. |
| T31 | true | true | false | false | "If you cut the wire so there is a gap in the loop, what happens to the current?" — Re-asks the gap question she already answered in S5. |
| T32a | true | null | false | false | "First, a word you'll need: **lamp**. In a circuit, a bulb is called a lamp." — Appears before her question is answered. |
| T32b | true | null | false | false | "First, a word you'll need: **cell**. Something that pushes charge round a circuit." |
| T32 | true | true | false | false | "If you took the cell out, leaving a gap, what would happen to the lamp?" |
| T33 | true | null | false | false | "Yes: the lamp would turn off, because a gap means the loop is broken, so no charge can get round." |
| T34 | true | true | false | false | "In which loop does the lamp light?" — Same idea she just answered in S33. |
| T35 | true | null | false | true | "Suppose you build a complete loop with a lamp but forget to put in a cell." — Dangling prompt with no question. |
| T36 | true | true | false | false | "Suppose you join a cell into the loop but cut the wire somewhere. What happens to the lamp?" — Third time this gap question is asked. |
| T37 | true | null | false | false | "An ammeter is the meter that measures current, and it goes inside the loop, in line with the lamp, so the charge flows through it." |
| T38 | true | true | false | false | "Suppose you move the ammeter to a different spot in the same single loop. What does it still measure?" |
| T39 | true | null | false | false | "It still measures the current, meaning how much charge is flowing past a point each second." |
| T40 | true | true | false | false | "Picture the running track: if 3 runners pass the start line each second, how many pass the far side of the track each second?" — The answer is stated just before the question. |
| T41 | true | null | false | false | "Yes, 3 runners pass the far side each second, because the same runners keep going round the loop, so the rate is the same everywhere on the track." |
| T42 | true | true | false | false | "On the running track, what would happen to the rate if 6 runners passed the start line each second instead of 3?" — The answer is in the question itself. |
| T43 | true | null | false | true | "Not quite — the rate would go up to 6 runners each second, because the rate is how many pass a point every second, and it was 3 before." — Marks her correct answer as wrong. |
| T44 | true | true | false | false | "On the track, if 2 runners pass each second, what happens to the current if 5 runners pass each second instead?" — The answer is stated just before the question. |
| T45 | true | null | false | false | "Yes — the current goes up, because more runners (more charge) pass each second." |
| T46 | true | true | false | false | "If you carry on, here's one more bit: an ammeter is the meter that measures current, and it goes in the loop itself, in line with the lamp." — Ignores her break request. |
| T47 | true | null | false | false | "An ammeter is just a meter that measures current, and it goes right in the loop with the lamp." — Keeps teaching after the break request. |
| T48 | true | null | false | false | "Because the current is the same everywhere in a single loop, the ammeter can go anywhere in it." — Still teaching after she asked to stop. |
| T49 | true | null | false | false | "Today you answered questions on electric current. Your place is saved, so we'll pick up right here next time." |

Tone vs reference: n/a (no reference)


A8 counts (brief v3.1): messages over 60 words 0, two questions in one message 0, her question not answered first 1, two key points in one message 0, answer in question 4, term used before explained 3

Flow faults (20):

- T1 **unexplained_term** — "It's tiny particles that carry charge, and they drift round together." — 'charge' is never explained in everyday words.
- T3 **unexplained_term** — "The gap opens in the switch itself, where it breaks the loop so nothing can flow round." — She then asks 'whats a switch tho'.
- T7a **unexplained_term** — "First, a word you'll need: **work**. The transfer of energy by a force" — 'energy' and 'force' are unexplained, and the term is irrelevant here.
- T9 **correct_answer_not_acknowledged** — "A coulomb (C) is the unit we count charge in, like counting runners one by one. And 7 coulombs is right" — Opens with a definition, not a confirmation.
- T21 **factual_or_unit_slip** — "That's fine, I haven't shown you the way to work it out yet, so let's build it step by step." — Multiplication was shown in T19.
- T23 **factual_or_unit_slip** — "That's fine, I haven't given you the numbers yet, so there was nothing to work from." — The numbers 3 and 4 were given in T22.
- T24 **question_repeated_after_correct_answer** — "If 3 coulombs pass a point every second, how many coulombs have passed after 2 seconds?" — Already answered correctly in S15.
- T30 **question_repeated_after_correct_answer** — "If an ammeter reads 3 A, how many coulombs pass that point in 1 second?" — Same as the T27 question she answered in S28.
- T30 **answer_in_question** — "One ampere is one coulomb passing each second, so a current of 2 A means 2 coulombs pass each second." — She can copy the pattern back.
- T31 **question_repeated_after_correct_answer** — "If you cut the wire so there is a gap in the loop, what happens to the current?" — Answered in S5.
- T32a **question_not_answered_first** — "First, a word you'll need: **lamp**. In a circuit, a bulb is called a lamp." — Term cards come before the answer to 'whats closed circuit mean'.
- T34 **question_repeated_after_correct_answer** — "In which loop does the lamp light?" — Answered in S33.
- T36 **question_repeated_after_correct_answer** — "Suppose you join a cell into the loop but cut the wire somewhere. What happens to the lamp?" — Answered in S5 and S33.
- T40 **answer_in_question** — "Yes, in a single loop the current is the same at every point, because charge is not used up on the way round." — The answer is stated just before the question.
- T42 **answer_in_question** — "On the running track, what would happen to the rate if 6 runners passed the start line each second instead of 3?" — The question states the rate.
- T43 **correct_answer_not_acknowledged** — "Not quite — the rate would go up to 6 runners each second" — Her S43 answer was correct but was marked wrong.
- T43 **factual_or_unit_slip** — "Not quite — the rate would go up to 6 runners each second" — Wrong judgement of a correct answer.
- T44 **answer_in_question** — "Current is the rate of flow of charge, so if more charge passes a point each second, the current is bigger." — The answer is stated just before the question.
- T46 **exit_not_respected** — "If you carry on, here's one more bit: an ammeter is the meter that measures current, and it goes in the loop itself, in line with the lamp." — She asked 'can we take a break' and got more teaching plus a question.
- T46 **tiredness_pushed_on** — "If the ammeter sits in the loop, which unit does it show the current in?" — No choice was offered. Teaching continued.

Fixes:

1. **teach-core: answer judging**: Judge the student's answer by meaning against the expected fact. An answer that matches the taught rule must be confirmed, never met with 'Not quite'. — "Not quite — the rate would go up to 6 runners each second, because the rate is how many pass a point every second, and it was 3 before."
2. **teach-core: exit handling**: When she asks for a break or to stop, reply with one warm closing line that says what she did and that her place is saved. Ask no question and teach nothing more. — "If you carry on, here's one more bit: an ammeter is the meter that measures current, and it goes in the loop itself, in line with the lamp."
3. **teach-core: question tracking and fallback text**: Keep a list of questions already answered correctly and never re-ask them. Remove the 'I haven't shown you…/given you the numbers yet' fallbacks, which are false. After an 'idk', give the method once. — "That's fine, I haven't given you the numbers yet, so there was nothing to work from."
4. **keyPoints[0].workedExamples[0]**: Teach Q = I t as 'charge each second × number of seconds' once, using the 2 A for 5 s example. Do not run more than 10 adding drills first, and do not say 'just keep adding' and later 'multiplied, not added'. — "Yes, just keep adding."
5. **teach-core: dangling prompts and glossary cards**: Every turn with a Next button must end with a question or move on, never with 'Now suppose…' alone. Only show term cards for the current key point's keyTerms (no 'work' in keyPoints[0]). Define 'charge' (basics[0]) and 'switch' (keyPoints[0].keyTerms[6]) before first use. — "Now suppose the flow was only 2 coulombs each second, still for 5 seconds."
