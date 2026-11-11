# Review: p2-current-voltage (2026-11-11)

Reviewer claude-fable-5-2, effort low, 2 screenshots, 78 findings (output cut off at its limit; complete findings kept), cost $0.4133.

## Counts (made in code from the findings)

- F1: 22
- new: 13
- F8: 10
- F5: 6
- P16: 4
- F12: 4
- P3: 3
- F6: 3
- F2: 2
- F3: 2
- P4: 2
- P6: 2
- F11: 1
- F7: 1
- F13: 1
- P1: 1
- P9: 1

## Findings

- **T1** [P3, a teacher would correct it] "A battery is what pushes charge round a circuit." — She asked what is inside a battery; the tutor says what a battery does, not what is inside it, and moves on to its own question.
- **T1** [F5, a teacher would correct it] "A battery is what pushes charge round a circuit. Charge is the tiny particles in a wire that carry electricity" — Battery, charge and circuit are all new in one message; 'circuit' is not explained at all.
- **T1** [P16, would confuse or mislead her] "Charge is the tiny particles in a wire that carry electricity" — Charge is not the particles; the particles carry charge (the lesson says so). 'Carry electricity' is also vague and not the lesson's wording.
- **T2** [F6, minor] "That's fine. Here's a hint:" — Stock 'That's fine' reply to her 'idk', the same pattern as the reported echo.
- **T2** [F8, minor] "you can't see the charge itself, but you can see what it does" — Repeats T1's 'you can't see them' and the hint almost hands her the answer before asking again.
- **T3** [F5, a teacher would correct it] "In a circuit, a bulb is called a lamp, and it lights because charge is flowing through it. A flow of charge is called an electric current, and its size is how much charge passes a point each second." — Lamp, electric current and rate of flow all introduced in one message: more than one idea at once.
- **T4** [F8, a teacher would correct it] "the current is how many runners pass one spot on the track each second. Now imagine twice as many runners passing that spot each second. What would happen to the size of the current?" — The message defines current as runners per second and then asks what twice as many runners does; the answer is in the question.
- **T5** [F1, minor] "that rate of flow is what current measures" — Rate of flow as the size of current was already said in T3 and T4.
- **T6** [F1, a teacher would correct it] "which measures how much charge passes a point each second" — Third or fourth statement of 'how much charge passes a point each second'.
- **T7** [F5, minor] "The charge itself is counted in coulombs (C), and one ampere means one coulomb passing a point each second." — Coulomb is introduced and at once used to define the ampere, in one message, straight after the ampere was new in T6.
- **T7** [F2, minor] "So a bigger current means more coulombs passing each second." — Sentence opens with 'So' and merely restates the previous point.
- **T8** [F3, a teacher would correct it] "it goes in the loop itself, so the charge passes through it" — 'The loop' is used before a loop or closed circuit has been explained (that comes in T11), and no picture is on screen.
- **T9** [F1, a teacher would correct it] "a current of 3 A means 3 coulombs of charge pass a point every second" — The ampere–coulomb per second fact again, straight after T7.
- **T9** [new, minor] "Picture a runner-style count" — Muddled wording; 'a runner-style count' means nothing to a 15-year-old.
- **T10** [F1, a teacher would correct it] "Inside the metal wire are tiny particles that carry electric charge, the thing that flows round a circuit." — After current, amperes, coulombs and the ammeter have been taught, the told part restarts from the beginning of the key point (T1 already covered this).
- **T10** [F1, minor] "like runners setting off round a track at the same moment" — The running track comparison again (T4, T5, T9, and it recurs through the lesson).
- **T11** [F1, minor] "Like a running track, it brings charge back to where it started" — Running track repeated yet again.
- **T12** [F5, a teacher would correct it] "that is a cell, the part that pushes charge round a circuit. Join two or more cells together and you have a battery." — Two new terms (cell, battery) in one message; it also clashes with T1, which used 'battery' for a single thing that pushes charge.
- **T12** [P16, minor] "Without a cell or a battery in the loop, the charge just sits still." — The tutor's own science, not in the lesson; the charged particles in a metal do not sit still, they just have no overall drift.
- **T13** [F1, minor] "there is a gap in the track, so the charge stops everywhere" — Running track again.
- **T14** [F1, minor] "Wherever you put the ammeter, the meter that measures current, it reads the same." — The ammeter is defined again (T8).
- **T15** [F1, minor] "counted in coulombs (C)" — Coulombs as the unit of charge repeated from T7.
- **T15** [new, would confuse or mislead her] "Current tells you how fast the runners pass each second" — 'How fast' suggests the speed of the runners; current is how many pass each second. Sets up a speed misconception.
- **12-worked-17-laptop.png** [F11, minor] "Show me another | Next" — After the last step the card offers two buttons plus the type box; the transcript shows Next available throughout the worked example.
- **12-worked-17-laptop.png** [new, minor] "0/7 covered" — After 17 exchanges covering all of key point 1's telling, the counter still says 0 of 7, which is discouraging. The step 2 line 'Q = 2 × 5 = 10' also has no unit.
- **T19** [F7, a teacher would correct it] "Not quite: it's 50 C. Write the equation: Q = I t. Put the numbers in: Q = 2.5 × 20 = 50 The charge flow is 50 C." — She said 'dont know'; she got the whole answer dumped with no easier step or second try, so she never practises the equation herself.
- **T19** [new, a teacher would correct it] "Not quite: it's 50 C." — She did not give an answer, so 'Not quite' is wrong; 'dont know' was marked as a wrong answer.
- **T19** [new, minor] "Q = 2.5 × 20 = 50 The charge flow is 50 C." — Steps run together with no punctuation or line breaks, and '= 50' has no unit.
- **T19** [F13, minor] "[diagram shown in the conversation under T19: "The same loop with an ammeter in it, measuring the current."]" — The ammeter loop picture reappears under a Q = I t calculation it has nothing to do with.
- **T20** [F12, would confuse or mislead her] "Predict first: answer the question below (3 questions, one at a time). Then a working circuit with two ammeters opens: you can close the switch to check your answer. Tap Next when you are done." — Muddled instructions, several things in one message; the widget's only control is labelled 'Open the switch' while the text says the switch is open and to close it.
- **T20** [F12, a teacher would correct it] "NOW EXPLAIN IT In one line: why does the lamp need a complete loop?" — The explain question gives away the reason for the prediction just asked (it needs a complete loop), and she had been told this in T11–T13 anyway.
- **T20** [new, would confuse or mislead her] "What happens: No. lamp A1 0.21 A A2 0.21 A" — The prediction is about a lamp joined by one wire only, but the circuit shows a complete loop with current 0.21 A and a switch; the test does not match the question, and 'What happens: No.' sits beside non-zero readings.
- **T22** [P3, a teacher would correct it] "An electric current is just charge moving round a circuit, like runners going round a track." — She asked what the task meant ('wdym'); the tutor gives her the answer to the own-words question and sets a different question instead of explaining the task.
- **T22** [F8, a teacher would correct it] "The more runners passing a point each second, the bigger the current. Picture a track where twice as many runners pass a point each second as before. What has happened to the current?" — Answer stated just before the question, and it is the same question as T4.
- **T22** [F1, a teacher would correct it] "Picture a track where twice as many runners pass a point each second as before." — Exact repeat of the T4 question she already answered correctly.
- **T23** [P16, would confuse or mislead her] "The same: charge is what moves (the runners), and current is how fast it moves" — She asked if current is the same as charge; the reply opens 'The same' and then says they differ. 'How fast it moves' again suggests speed.
- **T23** [new, minor] "If fewer runners pass a point each second on the track, what has happened to the current?" — Her twice-as-many question from T22 is dropped without comment and replaced by another.
- **T23** [F8, minor] "how much charge passes a point each second. If fewer runners pass a point each second on the track, what has happened to the current?" — Answer is in the message again.
- **T24** [F1, minor] "Current is the rate of charge flow, so fewer runners passing each second means a smaller current." — The same fact once more.
- **T25** [F1, a teacher would correct it] "In one line, in your own words: what is an electric current?" — Same question as T21, asked just after the tutor told her the answer in T22 ('charge moving round a circuit'); she repeats the tutor's words back, so it is not recall.
- **T28** [P3, would confuse or mislead her] "Yes, that's right. Break the loop anywhere and the flow stops everywhere." — She asked 'why does it stop everywhere'; it was marked as a correct answer, praised, and the why was never answered.
- **T29** [P4, a teacher would correct it] "[counter now "1/7 covered" after T29]" — Key point 1 ticked although she could not do the Q = I t question (T19) and her 'why' question was never answered.
- **T29** [new, minor] "so the cells must be doing something extra to the charge" — Vague, tutor's own wording; 'something extra to the charge' tells her nothing.
- **T30** [F5, a teacher would correct it] "potential difference: the push that drives charge through a part of the circuit. It is measured in volts (V), and people often call it voltage." — Three new terms in one message: potential difference, volts, voltage.
- **T31** [P16, would confuse or mislead her] "Think of the two cells making the runners on the track push harder." — Muddled analogy: the cells push the charge, the runners do not push. Not the lesson's science.
- **T31** [F8, minor] "a bigger push means more charge flowing through the lamp each second" — With T29's 'add a second cell and it glows brighter', the three cells answer has been given already.
- **T32** [F6, minor] "Yes, that's right. Brighter is right:" — Her word echoed back, and 'right' said twice.
- **T33** [new, a teacher would correct it] "it is connected across the part you are testing, not in the loop" — 'Across' is not explained in words; she must rely on the picture to know what it means.
- **T33** [P1, a teacher would correct it] "The same loop with a resistor added, and a voltmeter connected across the lamp." — The picture shows a resistor before resistor is introduced (T40).
- **T34** [F1, a teacher would correct it] "Volts (V) are the unit that measures potential difference, the push on the charge." — Volts already given in T30; whole message is a repeat.
- **T35** [F1, minor] "Another name for potential difference is voltage" — Voltage as another name was said in T30.
- **T35** [P6, minor] "the exam may use either word, so both get the mark. Now picture a lamp in a loop with one cell, and you want to measure the potential difference across the lamp. Where does the voltmeter go?" — Two unrelated things in one message (naming, then a placement question). The lesson says exam questions say potential difference, not 'either word'.
- **T35** [F8, a teacher would correct it] "you want to measure the potential difference across the lamp. Where does the voltmeter go?" — The question contains its answer ('across the lamp'), and T33 had just said it.
- **T36** [F1, a teacher would correct it] "Voltage is just another word for potential difference, the push on the charge. You can say either one in an exam." — Third time for voltage = potential difference.
- **T36** [F8, a teacher would correct it] "A voltmeter measures that push across a part of the circuit, so which meter would you use to find the voltage across a lamp?" — The answer (voltmeter) is named in the same sentence as the question.
- **T37** [F1, minor] "The voltmeter is the meter that measures the potential difference across a part of the circuit, such as a lamp." — Voltmeter definition again (T33, T36).
- **T38** [F8, minor] "Back to my question: Where does the voltmeter go?" — T36 and T37 have both just said 'across a part of the circuit, such as a lamp'.
- **T39** [F3, a teacher would correct it] "resistance, how much a component opposes the current through it" — 'Component' is used here but not explained until T41.
- **T39** [F2, a teacher would correct it] "Now the second thing that decides the current:" — 'The second thing' with no first thing ever named; potential difference is only called the first thing later in T42.
- **T39** [F5, minor] "Yes, that's right. Now the second thing that decides the current: resistance" — A new idea tacked onto feedback, and resistance arrives one message before resistor (T40).
- **T40** [new, minor] "The lamp dims again" — 'Again' has no referent: the lamp has not dimmed before in what she was told.
- **T42** [F1, a teacher would correct it] "Potential difference is the first thing that decides the current: the push that drives charge through a component." — Potential difference was taught in T30–T38; told again, out of order after resistance was begun.
- **T42** [F1, minor] "Picture the runners on their track. A lamp with two cells glows brighter because the push across it is bigger." — Two cells brighter repeated (T29, T31, T32), with a track mention that adds nothing.
- **T43** [P9, minor] "like a narrow, bumpy stretch of the running track" — The comparison is stretched with new features (narrow, bumpy) not in the lesson; a tutor's own extension.
- **T43** [F1, minor] "An ohm is the unit that tells you how strongly a component opposes the current through it." — Repeats T39's definition of resistance in the same words.
- **T44** [F1, minor] "a component with a bigger resistance makes it harder for charge to get through" — Same sentence as T43, and the bumpy track again.
- **T45** [P6, a teacher would correct it] "The equation is V = I R: potential difference = current × resistance. V is the potential difference in volts (V)..." — The equation message and the rearranging message arrive together: about 80 words and two ideas in one go.
- **T45** [new, a teacher would correct it] "you can find the current by dividing the potential difference by the resistance" — Rearranging is told in words only, never shown as I = V ÷ R, yet the Your turn question needs it.
- **T48** [new, minor] "Yes, that's right: 0.4 A." — She gave the method, not the answer; the tutor did the arithmetic for her without asking her to finish.
- **T49** [F1, minor] "An ammeter is a meter that measures current." — Third definition of the ammeter (T8, T14).
- **T49** [F12, a teacher would correct it] "you can add a cell, put the resistor in or take it out or move the resistor to check your answer" — Muddled wording and a long, 58-word instruction message with four controls at once.
- **T49** [F8, minor] "You add a second cell. What happens to the ammeter reading and to the lamp?" — She has been told three or four times that a second cell means more current and a brighter lamp; not a prediction.
- **T49** [F12, minor] "Only the current near the new cell goes up" — Odd distractor; the options mix 'the lamp' and 'the ammeter' with a bare 'Both go up'.
- **T49** [new, would confuse or mislead her] "Potential difference of the cell: 1.5 V Ammeter: 0.09 A Voltmeter across the lamp: 0.56 V" — The voltmeter reads 0.56 V with a 1.5 V cell, and nothing taught explains why they differ; sharing of potential difference is not in this lesson.
- **T51** [F6, minor] "Resistance "stops it" is slightly off" — Her words quoted back, though the correction itself is fair.
- **T52** [F8, minor] "Quick question: Where do you put an ammeter to measure the current in a single loop?" — Answered by tapping a button offered to her, so it tests nothing.
- **T54** [P4, minor] "[counter now "2/7 covered" after T54]" — Key point 2 ticked after one calculation where the tutor finished the arithmetic and a one-tap question.
- **T54** [F1, minor] "Before the practical, question 1 of 2: What does an ammeter measure?" — She has been told what an ammeter measures four times, most recently in T49.

## Overall

(cut off at the output limit before the overall view; every complete finding is kept)
