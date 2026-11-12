# Review: p2-current-voltage (2026-11-12)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 52 findings, cost $1.1564.

## Counts (made in code from the findings)

- new: 23
- F3: 5
- F1: 5
- F12: 3
- F2: 3
- F7: 3
- P8: 2
- F8: 2
- F4: 1
- P5: 1
- P14: 1
- F5: 1
- M1: 1
- P13: 1

## Findings

- **1.2** [new, minor] "tiny particles that carry electric charge, the thing that moves through the wires when the torch is on" — Charge is explained only as 'the thing that moves', which is circular. She is left with no idea what charge is beyond a name.
- **1.8 don't know (first time)** [P8, minor] "The bigger current is in the wire with more charge passing each second. Which wire has the bigger current?" — The hint hands her the rule that decides the answer and then asks the same question, so nothing is left to think about.
- **1.11 don't know (first time)** [new, a teacher would correct it] "Start with the charge: how many coulombs pass the point each second in this wire?" — The hint asks a different question whose answer (3) is printed in the question itself. If she types 3 she is marked right for the amperes without having linked coulombs per second to amperes.
- **1.11** [new, minor] "each coulomb a second makes one ampere" — Awkward wording used in every branch. 'One coulomb each second is one ampere, so 3 coulombs each second is 3 amperes' would be clearer.
- **1.13 (Predict first 2 of 2)** [F8, a teacher would correct it] "You want to measure the current through the lamp. How do you connect the ammeter?" — She has just been told 'The circuit has two ammeters in the same loop' and has used that circuit, so 'In the loop' is not a prediction. The answer was shown before the question.
- **1.13 (Predict first 2 of 2)** [F12, a teacher would correct it] "Now test your prediction. Look where the two ammeters sit in the circuit below." — This is not a test: nothing is tried, and seeing ammeters in the loop does not show why 'across the lamp' would be wrong. The self-check tick 'so it can measure the current' is circular as a reason.
- **1.14** [F3, minor] "In a single loop the current is the same at every point" — 'Single loop' is used here and in 1.20 and 2.19 without saying what else a circuit could be. She cannot tell why the word 'single' matters.
- **1.16** [F2, minor] "The equation is Q = I t" — The message opens with 'The equation' without saying what it is for. The link to charge flow depending on current and time is in the previous bubble.
- **1.18** [new, minor] "A current of 0.4 A flows for 50 s. How much charge flows, in coulombs (C)?" — Her first go alone jumps from 2 × 5 in the worked example to a decimal times 50. A whole-number question first would be kinder.
- **2.2** [F12, minor] "Both go up" — The question asks about the ammeter reading and the lamp, and a lamp does not 'go up'. Nothing so far has told her that brightness goes with the size of the current, so the wording should say 'the reading goes up and the lamp gets brighter'.
- **2.3 to 2.7** [F4, a teacher would correct it] "Any part of a circuit, such as a lamp, is called a component. ... Another name for potential difference is voltage." — Five tell-only messages in a row each bring a new word (component, potential difference, volt, voltmeter, voltage) with nothing for her to do. This is a vocabulary list in all but name.
- **2.6** [P5, a teacher would correct it] "It is joined across a component, with one wire to each end of it. An ammeter goes into the loop; a voltmeter does not." — 'Across' is described in words only: there is no picture until 2.12b and no circuit with a voltmeter to try, yet 2.8 questions her on it. The message also carries three ideas at once.
- **2.9** [new, a teacher would correct it] "a resistor, a small part that the charge has to pass through when it is in the loop. In a circuit drawing, a resistor is a small rectangle." — The description fits a lamp or an ammeter equally and tells her nothing about what a resistor does, so her prediction in 2.10 is a guess from the name. The resistor is the only part whose symbol is described; the cell, lamp, switch and ammeter symbols never are.
- **2.13** [new, minor] "Both the same: the cells give the same current" — The question mentions no cells, only two components with 6 V across them. The option and its reply ('The cells do not always give the same current') bring in something that is not in the question.
- **2.14** [new, minor] "Potential difference, current and resistance are linked by one equation: V = I R" — The equation arrives from nowhere. It is not tied to what she has just found (more push gives more current, more resistance gives less), so it is a formula to memorise rather than understand.
- **2.15** [new, a teacher would correct it] "To find a resistance, divide both sides of V = I R by I. So R = V ÷ I" — The rearrangement is taught before she has used V = I R even once, and it is not needed until 2.17a, three steps later. It belongs just before the resistance worked example.
- **2.17a** [F1, minor] "You want R, so divide both sides by I: R = V ÷ I." — This repeats 2.15 almost word for word.
- **2.17b** [new, minor] "a potential difference of 1 V across it and a current of 0.5 A through it" — Her first resistance question alone needs dividing by 0.5, which many 15-year-olds get wrong. That hides whether she understood the physics.
- **8.7** [new, would confuse or mislead her] "A potential difference of 15 V is put across a 20 Ω resistor. What is the current through it, in amperes (A)?" — The lesson only ever taught and practised V = I R and R = V ÷ I. Finding the current (I = V ÷ R) is never shown, yet the quiz asks for it with awkward numbers (15 ÷ 20) and says 'the same kind as the worked example' when no such example exists.
- **3.2 don't know (first time)** [new, a teacher would correct it] "Start from V = I R. To get R on its own, what do you divide both sides by? (same buttons)" — The hint's answer is 'I', but the buttons offered are 'Multiply them together' and the two 'Divide…' options. The hint and the buttons do not match.
- **3.7** [F2, minor] "Then move one clip to change the length of wire between the clips, and take both readings again." — The message opens with 'Then' after a calculation question has intervened, and 'both readings' is not named in the message.
- **3.5** [new, minor] "side by side across the same two points: one wire at each end of the length you are testing" — 'Wire' here means the voltmeter's leads, in a practical about 'the wire'. She will not know which wire is meant.
- **3.8 don't know (first time)** [new, minor] "Is a longer wire harder or easier for charge to get through? (same buttons)" — The hint asks 'harder or easier', but the buttons are 'It gets smaller / It gets bigger / It stays the same'.
- **3.9** [new, a teacher would correct it] "Keep the current small and switch off between readings, so the wire does not warm up." — She is never told why warming matters. That resistance changes with temperature is not said until 5.3, so this is a rule without a reason.
- **3.15** [new, a teacher would correct it] ""a longer wire has a bigger resistance", "as long as its temperature stays the same"" — Her line is marked as missing a point unless it mentions temperature. The question does not ask for that, and she has not been told temperature changes resistance. The 'all of them' reply ('…; and as long as its temperature stays the same') is also not a sentence.
- **3.12** [F3, would confuse or mislead her] "The same circuit measures two or more resistors joined together, in series or in parallel. Measure the potential difference and the current for each" — Resistors 'in parallel' has never been shown; 'in parallel' has only been used for a voltmeter. There is no picture, and 'for each' does not say each what, so she could not picture or do this.
- **3.13** [F1, minor] "Start from V = I R. ... You want R, so divide both sides by I: R = V ÷ I." — The same rearrangement is walked through for the fourth time (2.15, 2.17a, 3.2, 3.13).
- **3.14** [F1, minor] "A component has a potential difference of 1 V across it and a current of 0.5 A through it. What is its resistance, in ohms (Ω)?" — As scripted this is word for word the question from 2.17b. It also says 'a component' rather than a length of wire, so it does not belong to the practical. If the question really is new each time this may not arise.
- **3.3 to 3.12** [P14, a teacher would correct it] "In this practical you measure it yourself." — She does not measure anything herself: the whole practical is told, with no circuit or wire to try. Steps 3.9 to 3.12 are four tell-only messages in a row.
- **4.3** [new, would confuse or mislead her] "Under it, the hands-on circuit. It shows a cell, a lamp and an ammeter; controls: none." — The message promises 'a graph of a resistor' with a point to drag, but the script describes a cell-lamp-ammeter circuit with no controls, and 'after she uses' is blank. If that is what she sees, she cannot do the test.
- **4.6** [new, minor] "A component like this is called an ohmic conductor, as long as its temperature does not change." — Muddled sentence: the temperature condition belongs to the resistance staying the same, not to what the component is called. 'Conductor' is also never explained.
- **5.2** [F5, minor] "An old-style bulb is a filament lamp: inside it is a thin coil of metal wire, the filament" — Two new terms in one message.
- **5.3** [new, a teacher would correct it] "As the current through a filament lamp rises, the filament gets hotter. What do you think happens to its resistance?" — Nothing she has been told lets her work out which way resistance goes with temperature. It is a guess presented as an ordinary question with 'Not quite' for a wrong guess.
- **5.3 don't know (first time)** [F7, a teacher would correct it] "An ohmic conductor keeps the same resistance only while its temperature does not change. A filament gets very hot. Which way do you think its resistance goes?" — The hint does not make the question easier. It tells her the resistance changes but gives her nothing to choose between up and down.
- **5.6** [new, would confuse or mislead her] "Under it, the hands-on circuit. It shows a cell, a lamp and an ammeter; controls: none." — As in 4.3, she is told to drag a point on the lamp graph but the widget described is a circuit with no controls.
- **5.6** [F12, a teacher would correct it] ""6 ÷ 0.56, about 11 Ω" ... "Now explain it: In one line: how do you find the resistance at one point on the graph?"" — The right option already contains the method (divide V by I) that she is then asked to explain. It is also a calculation, not a prediction.
- **5.7** [new, minor] "then divide V by I, not the steepness of the line" — The sentence does not parse ('divide V by I, not the steepness'). It should say 'do not use the steepness of the line'.
- **5.8** [new, minor] "a diode: another component that can be joined into a loop, like a resistor or a lamp" — This tells her nothing about what a diode is or looks like, so the prediction in 5.9 is a blind guess.
- **5.9** [F3, a teacher would correct it] "the point is at a negative potential difference: that is the diode turned round" — A negative potential difference and the left half of the graph are used here but not explained until the 5.11 picture and 6.8. Up to now potential difference has only been 'the push'.
- **5.9** [new, would confuse or mislead her] "Under it, the hands-on circuit. It shows a cell, a lamp and an ammeter; controls: none." — As in 4.3 and 5.6, she is told to drag a point on the diode graph but the widget described has no graph and no controls.
- **5.12** [new, minor] "In one line: how are a filament lamp and a diode different from a resistor?" — She is asked for one line but marked against three separate points. 6.13 does the same.
- **6.3** [F3, a teacher would correct it] "The circuit has a cell or battery" — 'Battery' is never explained. 1.3 does not say that a cell is what she calls a battery at home, or how the two differ.
- **6.3 to 6.7** [M1, a teacher would correct it] "Here is how you measure an I-V characteristic yourself, step by step." — Five tell-only messages in a row with nothing to do, in a practical she is told she does 'yourself'. She would be tapping Next without reading.
- **6.11** [F2, minor] "A graph of any other shape is called non-linear" — 'Any other shape' depends on 6.9, and a question has come in between.
- **6.14 don't know (first time)** [F7, a teacher would correct it] "A bigger current would make the wire warm. Why would that be a problem in a test of length? (same buttons)" — The hint gives away the answer ('so the wire does not warm up') and then asks a harder question (why warming matters) that none of the buttons answers.
- **7.2** [F8, a teacher would correct it] "A torch cell goes flat after a few hours. What has it run out of?" — The message just before (7.1) says 'The last part of this lesson is about energy', so 'Its store of energy' is given away.
- **7.2** [P8, minor] "Now explain it: In one line: if the charge is not used up, why do you think the cell goes flat?" — The prompt states the first tick ('the charge is not used up'), and the right option 'Its store of energy' already holds the second.
- **7.7 don't know (again)** [F7, minor] "1 V gives 1 J for each coulomb. What does 12 V give for each coulomb?" — The 'smaller question' is the first hint reworded. It is not an easier step.
- **7.12** [P13, minor] "Here is a worked example with both steps." — The two-step calculation (Q = I t, then E = Q V) is shown once but she never gets a go at one herself.
- **8.1** [F3, a teacher would correct it] "The rate of flow of charge" — The lesson never used the phrase 'rate of flow'; it always said 'how much charge passes a point each second'. She has to recognise an exam phrase she has not met.
- **8.8** [F1, minor] "60 C of charge flows through a potential difference of 6 V. How much energy is transferred, in joules (J)?" — As scripted this is identical to the 7.10 practice question, so it tests memory of 360, not the method. If the question really is new each time this may not arise.
- **4.10** [F1, minor] "A wire is kept at a constant temperature. What happens to its resistance if you use a longer piece?" — The same wire-length question is asked at 3.8, 3.15, 4.10 and 8.6, and 'what does a straight line through the origin show' at 4.9, 5.13, 6.2 and 8.3. Some returning is good, but four times each will feel like the lesson repeating itself.

## Overall

Not quite as it is, though key points 1 and 2 are close: the physics is sound and the switch, two-ammeter, add-a-cell and resistor predictions are well built. Before she uses those two I would fix the second ammeter 'prediction' (already answered on screen), the empty description of a resistor, the run of five vocabulary messages with no picture of a voltmeter, and the misplaced rearrangement in 2.15. I would also teach I = V ÷ R, because the quiz asks for it. The later key points need more work: the graph steps (4.3, 5.6, 5.9) are scripted with a circuit that has no controls, both practicals are all telling, resistors 'in series or in parallel' is never explained, and several hints give the answer away or do not match the buttons.
