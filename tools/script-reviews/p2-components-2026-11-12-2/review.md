# Review: p2-components (2026-11-12)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 48 findings, cost $0.8110.

## Counts (made in code from the findings)

- new: 17
- F3: 7
- F2: 5
- F1: 4
- L3: 3
- F8: 3
- F5: 1
- P5: 1
- M1: 1
- F12: 1
- P16: 1
- F7: 1
- P6: 1
- P7: 1
- P4: 1

## Findings

- **1.1** [F3, minor] "meet two components whose resistance changes" — The very first message uses 'components' and 'resistance' before either has been explained. 'Component' is never defined anywhere in the lesson.
- **1.1a** [L3, would confuse or mislead her] "First, three quick questions from the last lesson, on current and resistance. What is electric current?" — The lesson opens with a recall test on another lesson. A first-time learner has not been told any of this here, so her first three experiences are likely to be guessing or getting it wrong.
- **1.1a (wrong: push)** [F3, a teacher would correct it] "The push that drives the charge is the potential difference." — 'Potential difference' is used here and all through the lesson (1.1b, 1.5c, 2.5, 4.x) but this lesson never explains it.
- **1.1a don't know (first time)** [new, a teacher would correct it] "Which button is about the charge flowing?" — The hint does not separate the options: all three buttons mention charge, and two mention it flowing.
- **1.1b** [F3, a teacher would correct it] "Second: for the same potential difference, what does a bigger resistance do to the current?" — The question depends on 'resistance' and 'potential difference' before either is explained. Resistance is only explained on the wrong and don't-know branches, and a girl who answers correctly never gets it.
- **1.1b (wrong: It does not change the current)** [new, minor] "Not quite: a bigger resistance makes the current smaller, and a smaller resistance makes it bigger. Resistance is how hard it is for charge to flow." — This is word for word the reply to 'It makes the current bigger'. It does not address her idea that the current is fixed whatever is in the circuit.
- **1.1c** [F3, would confuse or mislead her] "Third: why does a filament lamp's I-V graph curve?" — 'I-V graph' and 'filament lamp' have not been explained in this lesson. She cannot answer this from everyday knowledge or from anything she has been told.
- **1.1c (right)** [new, a teacher would correct it] "so the current goes up less and less" — This is imprecise. The current goes up by less for each equal increase in potential difference; 'goes up less and less' with no mention of what is being increased is muddled.
- **1.4** [F5, minor] "A cell, the part that pushes charge round a circuit, is drawn as a long thin line next to a short thick one. A lamp is a circle with a cross in it." — Two new components and two new symbols are introduced in one message.
- **1.4b** [new, a teacher would correct it] "Which symbol is a long thin line next to a short thick one?" — She is asked to recognise symbols she has only had described in words. No picture of any symbol appears until 1.5d, after seven have been described. Each symbol should be shown as it is introduced.
- **1.4b don't know (first time)** [new, a teacher would correct it] "Think of the part that pushes the charge round the circuit. Which button names that part?" — The hint does not separate a cell from a battery, since a battery also pushes the charge round. It also swaps the question from the shape to the job.
- **1.5a** [new, minor] "A switch, which opens or closes a gap in the circuit, is drawn open, with a gap, or closed, with no gap." — It never says what open and closed do: open means no current flows, closed means it does. A beginner often reads 'closed' as 'off'.
- **1.5b** [F3, a teacher would correct it] "It goes in series: in the loop, so the current flows through it." — 'In series' is used here but not taught until 1.9. It also makes two new terms (ammeter, series) in one message.
- **1.5c** [F3, a teacher would correct it] "It goes in parallel: across the component, on its own short branch." — 'Parallel' and 'branch' are used before 1.9a explains them, alongside the new term 'voltmeter' and the unexplained 'potential difference'. That is too much new language in one bubble.
- **1.5d** [P5, a teacher would correct it] "Here are the symbols so far, all together." — Seven symbols appear at once in a single chart after all the telling. They are not built up one at a time as each is introduced.
- **1.4 to 1.8** [M1, a teacher would correct it] "A variable resistor, a resistor whose resistance can be changed, is drawn as a resistor with an arrow through it." — Key point 1 is a long run of 'X is drawn as Y' messages with Next (eleven symbols) and only three recognition questions. Nothing is hands-on until 1.10, so I would expect her to switch off.
- **1.9a** [new, would confuse or mislead her] "If the wire splits, the circuit has branches: separate paths for the current. Components on separate branches are in parallel." — Series and parallel are taught in words only. She is never shown a circuit with branches, and the widget that follows shows only a single loop, yet 1.13 then asks her to tell series from parallel.
- **1.10** [new, a teacher would correct it] "Two circuit diagrams use the same cell, switch, lamp and ammeter. In one, the lamp is drawn on the right; in the other, on the left. What can you say?" — The question does not say the parts are joined in the same loop, so 'They are different circuits' is a defensible answer. The idea that position on the page does not matter has also not been taught, and it sits between the series/parallel teaching and the question about it.
- **1.10 (wrong prediction)** [new, a teacher would correct it] "They are the same circuit." — If she chose 'The lamp drawn nearer the cell gets more current', a real and common misconception, she is just told the right option. Nothing explains that the current is the same all the way round one loop.
- **1.10** [F12, minor] "Now explain it: In one line: why do you think the two drawings are the same circuit?" — The line just before ('The parts moved on the page, but the ammeter reading and the lamp did not change.') has all but given her the explanation she is now asked to write.
- **2.1** [L3, a teacher would correct it] "In the last lesson, the filament lamp and the diode did not keep a fixed resistance." — This leans on an earlier lesson as if she were revising. In this lesson she has only been told that a diode lets current through one way.
- **2.1** [F1, minor] "one reacts to temperature, how hot it is, and one reacts to light" — This repeats the preview from the welcome message (1.1) almost word for word.
- **2.4** [F1, minor] "the hotter the thermistor, the lower its resistance" — The same fact was stated in the reply to 2.3 one message earlier.
- **2.9** [P16, a teacher would correct it] "The thermostat's circuit detects that bigger current and switches the heater off." — The lesson file says only that 'the current changes'. The script adds its own account of what the circuit detects, and packs three linked ideas into one message.
- **2.11** [new, minor] "In one line: what does a thermistor do, and what is it used for?" — 'What does a thermistor do' is vague when the wanted answer is how its resistance changes. The lesson also switches between 'goes down', 'falls', 'lower' and 'decreases' for the same thing.
- **3.5** [new, a teacher would correct it] "Test your guess: tap LDR below, then slide the light from dark to bright and watch the resistance and the current." — The reply to 3.3 has already told her the answer ('Yes: brighter light, lower resistance'), so there is nothing left to test. The widget should come straight after the guess, before the answer is given.
- **3.4** [F1, minor] "in the dark, an LDR's resistance is high, and it falls as the light intensity rises" — This is the third time in a row she meets the same fact: the 3.3 reply, the widget, and now the graph message.
- **3.10** [F8, minor] "In one line: what does an LDR do, and how is it different from a thermistor?" — The difference was given two messages earlier in 3.8 ('an LDR responds to light, a thermistor to temperature'), and also in the 3.6 replies.
- **3.11** [F8, minor] "In a circuit diagram, which symbol is a resistor in a circle with two arrows pointing in?" — 3.9 gave this description of the LDR symbol in the same words two messages before.
- **4.1** [L3, a teacher would correct it] "It works the same way as for any component: measure the current and the potential difference, then find the resistance." — This assumes she already knows the method for finding a resistance from another lesson. Here it is new to her.
- **4.3** [new, would confuse or mislead her] "And why does the ammeter go in series with the thermistor?" — The right answer ('So the same current flows through both') relies on the current being the same everywhere in a series loop. The lesson has never told her that, so she can only get it by ruling out the silly options.
- **4.3 don't know (first time)** [F7, a teacher would correct it] "What is the same for every part of that loop?" — The 'easier' step asks for exactly the untaught fact (same current all round a series loop). It is no easier than the question.
- **4.4a** [P6, minor] "use the correct symbol for every part, draw the wires as straight lines, and leave no gap where two wires should join" — Three drawing rules are given in one message.
- **4.5** [F8, a teacher would correct it] "Which of these is a mistake in a circuit diagram?" — The message immediately before lists all three options: two as rules, and the gap as the thing to avoid. She only has to read back one line.
- **4.6** [new, minor] "Then change the temperature, for example by adding hot water, and repeat." — There is no word of care about hot water. The whole method (set up, measure, record, change, repeat) is in one bubble.
- **4.8** [F3, minor] "R is the resistance in ohms (Ω)" — The unit of resistance appears for the first time here, near the end, under 'From the last lesson'. It comes after a graph and a widget have already shown resistance values.
- **4.9 (second step)** [F1, minor] "You want R, so divide both sides by I: R = V ÷ I." — The message just before the card (4.8a) has already stated R = V ÷ I, and 4.10 and 4.11 say it again.
- **4.11** [new, a teacher would correct it] "A component has a potential difference of 30 V across it and a current of 1 A through it. What is its resistance, in ohms (Ω)?" — Dividing by 1 tests nothing. She gets 30 by copying the number, or by wrongly multiplying, so a right answer shows no understanding. The numbers should be like the worked examples.
- **4.11 wrong (first time)** [P7, minor] "Not quite. Check your working and have one more go" — After a wrong answer she gets the same question with no hint at all, not an easier step.
- **4.12** [F2, a teacher would correct it] "Then plot a graph: the temperature (or the light intensity) along the bottom, and the resistance up the side." — 'Then' follows a practice calculation, and the practical it continues from was several messages back. She will not know what it comes after.
- **4.12** [P4, minor] "Then plot a graph: the temperature (or the light intensity) along the bottom, and the resistance up the side." — The key point says both graphs are downward curves and what that means. The script leaves this out, so key point 4 ends without all of it taught.
- **4.14** [new, minor] "Not quite: the water lets you set the thermistor's temperature and measure the temperature with a thermometer." — The reply to 'To stop the current' does not say why that idea is wrong. The question also comes after the own-words summary when it belongs straight after 4.6.
- **5.1 (wrong: circle with a cross)** [F2, would confuse or mislead her] "Not quite. A battery is two or more cells side by side. That is a lamp." — 'That' reads as pointing at the battery description just before it, so it seems to say two cells side by side is a lamp. It should say 'A circle with a cross in it is a lamp'.
- **5.1 (wrong: rectangle)** [F2, would confuse or mislead her] "Not quite. A battery is two or more cells side by side. That is a resistor." — The same dangling 'That': it seems to call the battery a resistor.
- **5.2 (wrong: arrow)** [F2, would confuse or mislead her] "Not quite. A fuse is a rectangle with a line through it. That is a variable resistor." — 'That' seems to refer to the fuse symbol just described, so it reads as if a rectangle with a line through it is a variable resistor.
- **5.2 (wrong: circle with a cross)** [F2, would confuse or mislead her] "Not quite. A fuse is a rectangle with a line through it. That is a lamp." — The same dangling 'That': it reads as if the fuse symbol is a lamp.
- **5.5 (wrong: It increases)** [new, minor] "As the light gets brighter, an LDR's resistance decreases. Brighter light means a lower resistance." — The reply says the same thing twice and gives no help with why she might have had it backwards. The 5.4 'It decreases' reply does the same.
- **5.7** [new, would confuse or mislead her] "A potential difference of 1.2 V is put across a 12 Ω resistor. What is the current through it, in amperes (A)?" — She has only been shown and practised finding R. Rearranging for current (I = V ÷ R) was never taught or tried in this lesson, so this is not 'the same kind as the worked example'.

## Overall

No, not as it is. The physics is mostly sound and the thermistor and LDR sections are reasonably paced, but the lesson opens with three recall questions on a lesson she has not had, and uses potential difference, series, parallel and I-V graph before explaining them. Key point 1 describes symbols in words with no picture until seven are done, and teaches series and parallel without ever showing a branched circuit. Before she uses it I would fix those, along with the 4.3 question that needs an untaught fact, the trivial 30 ÷ 1 practice, the quiz question that needs an untaught rearrangement, and the quiz replies where 'That is a lamp' follows the battery or fuse description.
