# Review: p2-components (2026-11-12)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 57 findings, cost $0.7280.

## Counts (made in code from the findings)

- new: 19
- F1: 7
- F3: 6
- P16: 3
- F5: 3
- P8: 3
- L3: 2
- F8: 2
- P1: 1
- P12: 1
- F2: 1
- F4: 1
- M1: 1
- F12: 1
- F11: 1
- F7: 1
- F10: 1
- P5: 1
- P6: 1
- P7: 1

## Findings

- **1.1a** [L3, would confuse or mislead her] "First, three quick questions from the last lesson. What is electric current?" — The lesson opens with three recall questions on another lesson before teaching anything. A girl meeting this for the first time has nothing in this lesson to answer them from.
- **1.1a wrong answer** [F3, a teacher would correct it] "The push is the potential difference, and how hard it is for charge to flow is the resistance." — Potential difference and resistance are used here without ever being explained in this lesson.
- **1.1b** [F3, would confuse or mislead her] "what does the I-V graph of an ohmic conductor look like?" — "I-V graph", "ohmic conductor" and "origin" are all used with no explanation and no picture. She could not answer this from what she has been told.
- **1.1c** [L3, a teacher would correct it] "Third: why does a filament lamp's I-V graph curve?" — This assumes she already knows the filament lamp's graph. Nothing in this lesson has shown or described it.
- **1.1c wrong answer ("Its resistance falls as it gets hotter")** [new, a teacher would correct it] "Letting current flow one way only is what a diode does." — The reply does not fit the answer she chose. She said the resistance falls, not that current flows one way, and the reply does not say why "falls" is the wrong way round.
- **1.1c right answer** [F8, a teacher would correct it] "Remember that one: later in this lesson you will meet a component that does the opposite." — This gives away the "have a guess" question at 2.3 before it is asked. She already knows the thermistor's resistance must fall.
- **1.1** [P16, minor] "two components whose resistance changes with heat and with light" — It should say temperature, not heat. The rest of the lesson says temperature.
- **1.4** [P1, a teacher would correct it] "labelled cell, battery, switch, lamp, resistor, ammeter, voltmeter" — Only the cell and lamp have been taught, but the picture already shows and labels the battery, switch, resistor, ammeter and voltmeter. The picture is not built up step by step.
- **1.5a** [F5, a teacher would correct it] "A switch, which opens or closes a gap in the circuit, is drawn open, with a gap, or closed, with no gap. A meter is a circle with a letter in it: A for an ammeter, V for a voltmeter." — Switch, ammeter and voltmeter are three new terms in one message, and two different ideas.
- **1.5a** [F3, would confuse or mislead her] "A for an ammeter, V for a voltmeter" — The lesson never says what an ammeter or a voltmeter measures. Both are then used in the widget at 1.10 and in the practical in key point 4.
- **1.6** [F3, minor] "A diode is a triangle pointing the way current can flow, with a bar across its tip." — The symbol is given without first saying what a diode is or does.
- **1.7** [F5, a teacher would correct it] "A resistor with an arrow through it is a variable resistor. A diode with two arrows coming out of it is a light-emitting diode (LED), a diode that gives out light." — Two new components in one message. What a variable resistor does is not said here at all.
- **1.7** [P12, minor] "labelled diode, light-emitting diode, variable resistor, fuse" — The picture labels a fuse before the fuse has been mentioned.
- **1.8** [F2, minor] "The chart also shows the symbol for a fuse" — "The chart" is not in this message and the picture was never called a chart. She has to guess that it means the picture under the previous message.
- **1.8** [F4, minor] "What a fuse does comes in a later lesson." — A term is introduced with its meaning held back for a later lesson, and the quiz then tests its symbol at 5.2.
- **1.9** [F5, would confuse or mislead her] "Components on one single path are in series; components on separate branches are in parallel." — Series and parallel are both introduced in one message, along with how to read a diagram. "Branches" is not explained and there is no picture of either arrangement.
- **1.2 to 1.9** [M1, a teacher would correct it] "Button: Next" — Nine telling messages in a row with nothing for her to do but tap Next. It is a list of shapes to memorise and she would switch off.
- **1.10** [new, would confuse or mislead her] "Then tap Draw it another way to test your answer. ... controls: none." — She is told to tap "Draw it another way", but the circuit is listed with no controls. If the button is not there she cannot do the task.
- **1.10 predict box** [P8, a teacher would correct it] "Two circuit diagrams show the same cell, switch, lamp and ammeter joined in one loop." — The question already says the same parts are joined in one loop. That is the answer, and it is also the first tick-box point she is asked to explain afterwards.
- **1.10** [F3, a teacher would correct it] "watch the ammeter and the lamp" — She is asked to watch an ammeter reading when the lesson has only told her its symbol, not what it measures.
- **1.10** [F12, minor] "Your prediction was right." — Stock praise in the predict-first widget, with nothing about why.
- **1.10** [F11, minor] "Button under the message: Next" — Next sits under the message from the start, so she can skip the whole predict-and-test activity without doing any of it.
- **1.11 right answer** [F1, minor] "Two or more cells joined together make a battery." — This repeats 1.4a and is not what the question was about.
- **1.12 wrong answer ("A diode")** [new, a teacher would correct it] "a fuse is a rectangle with a line through it" — She chose a diode but the reply corrects the fuse. It should say a diode is the triangle with a bar.
- **1.13** [new, a teacher would correct it] "In one line: how do you read a circuit diagram?" — The question is too vague. She cannot tell that the marker wants both "follow the wire round from the cell" and the series/parallel definitions in one line.
- **1.14** [new, a teacher would correct it] "From the last lesson: what does a diode do?" — This lesson has only given the diode's symbol. On the main path she has not been told what a diode does, and the right-answer reply adds "reverse direction" unexplained.
- **1.14 don't know (first time)** [F7, would confuse or mislead her] "Think of the diode's graph: one side lay flat along the axis. What does that mean for the current one way round?" — The hint is harder than the question. It asks her to interpret a graph that this lesson has never shown.
- **2.3** [F8, minor] "Have a guess: as a thermistor gets warmer, what do you think happens to its resistance?" — This is not a real guess. At 1.1c she was told a later component "does the opposite" of the filament lamp, so the answer has already been given.
- **2.5** [F10, a teacher would correct it] "A thermistor has the same potential difference across it all the time. It warms up. What happens to the current through it?" — This needs the link between potential difference, current and resistance. The lesson does not state it until V = I R at 4.8, so she cannot work it out from what she has been told.
- **2.8** [F1, minor] "A room warms up. What happens to the resistance of the thermistor in the thermostat?" — The same fact, warmer thermistor means lower resistance, was asked at 2.3, told at 2.4 and used at 2.5. Here it is asked again in a thin disguise.
- **2.9** [P16, a teacher would correct it] "the thermistor's resistance falls, the current changes, and the circuit switches the heater off" — "The current changes" is vague when she has just learned that it goes up. How a changing current switches a heater off is left as a jump she cannot follow.
- **3.2** [new, minor] "How bright the light falling on something is is called the light intensity." — The "is is" makes this hard to read. Better: "Light intensity means how bright the light falling on something is."
- **3.3** [P8, a teacher would correct it] "An LDR behaves like a thermistor, but with light instead of heat. As the light on an LDR gets brighter, what do you think happens to its resistance?" — The first sentence gives the answer. She only has to copy what the thermistor does.
- **3.3 wrong answer ("It goes up")** [P16, a teacher would correct it] "as more heat means less resistance for a thermistor" — "More heat" should be "a higher temperature". Heat and temperature are not the same thing, and the lesson elsewhere says temperature.
- **3.5** [new, would confuse or mislead her] "the circuit below can hold a thermistor or an LDR. Slide the temperature or the light, and watch the resistance and the current. ... It shows a cell, a lamp and an ammeter; controls: none." — The message promises a thermistor or LDR with temperature and light sliders. The circuit listed has a cell, lamp and ammeter and no controls, so she cannot do what she is told.
- **3.5** [new, minor] "Try it: ... Tap Next when you are done." — The hands-on step has no prediction and no question, so she has nothing to find out. It also comes only after both graphs have told her the result.
- **3.6 wrong answer ("A diode")** [new, minor] "Not quite: a thermistor. It senses temperature; an LDR senses light." — She chose a diode, but the reply talks about the LDR and says nothing about why a diode will not do.
- **3.7** [F1, minor] "An LDR is a light sensor. In an automatic street light, the LDR's resistance rises as evening comes" — The street light was the opening of 3.1 and the resistance rule was at 3.3 and 3.4. This is the same material told again.
- **3.8** [F1, minor] "The LDR and the thermistor behave in the same way ... For both, more of that thing means less resistance." — "Behaves like a thermistor" was already said in 3.3 and in its replies. "More of that thing" is also loose wording.
- **3.11 wrong answer ("A thermistor")** [new, minor] "Its arrows point in, for light falling on it; an LED's arrows point out." — She chose a thermistor, but the reply compares the LDR with an LED. It should say the thermistor has a line through it and no circle.
- **4.2** [F3, would confuse or mislead her] "Where does the voltmeter go when you test a component?" — This lesson has only given the voltmeter's symbol. It has not said what a voltmeter measures or how it is connected, so she can only guess.
- **4.2 don't know (first time)** [new, a teacher would correct it] "Is that in the loop, or across it?" — "Across it" reads as across the loop, and neither phrase matches the buttons, which say "in series" and "in parallel".
- **4.3** [F1, minor] "As a thermistor gets hotter, what happens to its resistance?" — This is the third time the same question has been asked (2.3, 2.8, 4.3).
- **4.4** [P5, minor] "Draw the cell, a switch and an ammeter in one loop with the thermistor, all in series. Then draw a voltmeter in parallel across the thermistor, on its own short branch." — The whole test circuit appears at once in one picture rather than being built up. She is told to "draw" when she has nothing to draw on.
- **4.5** [new, minor] "Which of these is a mistake in a circuit diagram?" — The drawing rules (correct symbols, straight wires, no gaps) have not been taught. They appear only in the reply.
- **4.5 don't know (first time)** [P8, a teacher would correct it] "A gap in a circuit diagram means the circuit is open. Where would that be a mistake?" — The hint names the answer (a gap) and then asks a "where" question that does not match the buttons. "The circuit is open" has not been explained either.
- **4.6** [new, minor] "then change the temperature and repeat" — It does not say how to change the temperature, for example by adding hot water or heating the water.
- **4.8** [P6, a teacher would correct it] "Use V = I R from the last lesson: V is the potential difference in volts (V), I is the current in amperes (A) and R is the resistance in ohms (Ω). At each reading, divide the potential difference by the current to get the resistance: R = V ÷ I." — One message carries the equation, three symbols with units and the rearrangement. This is the first time the ohm is mentioned. It should be split into two messages.
- **4.9 steps** [F1, minor] "Start from V = I R. ... You want R, so divide both sides by I: R = V ÷ I." — The message just before (4.8) already said this. It then comes again at 4.10 and in every branch of 4.11.
- **4.9** [new, minor] "Put the numbers in: R = 6 ÷ 0.002 = 3000." — Dividing by 0.002 is a hard step for a 15-year-old. The example gives the result with no mention of using a calculator and no working.
- **4.11 wrong (first time)** [P7, minor] "Not quite. Check your working and have one more go" — After a wrong answer she gets the same question again with no hint, not even a reminder that R = V ÷ I.
- **4.11** [new, minor] "A component has a potential difference of 30 V across it and a current of 1 A through it." — Dividing by 1 does not test whether she can use R = V ÷ I. The worked examples used decimals, but her only practice is trivial.
- **4.12** [new, minor] "Plot resistance against temperature, or against light intensity." — It does not say which quantity goes on which axis, and the next sentence repeats the two graphs she saw at 2.4 and 3.4.
- **4.14 wrong answer ("To make its resistance stay the same")** [new, a teacher would correct it] "the point is to change the temperature, so the resistance changes, and to measure it with a thermometer" — "Measure it with a thermometer" reads as measuring the resistance with a thermometer. It should say "measure the temperature".
- **5.4** [F1, minor] "What happens to the resistance of a thermistor as it gets hotter?" — This is the fourth time the identical question has been asked (2.3, 2.8, 4.3, 5.4).
- **5.6 wrong answer ("To switch on street lights at dusk")** [new, minor] "Not quite. A thermistor senses temperature, so it suits a thermostat." — The reply should say that street lights use an LDR. This is the very mix-up the lesson warned about.
- **5.7** [new, minor] "A current of 3 A flows through a 4 Ω resistor. What is the potential difference across it, in volts (V)?" — The script calls this "the same kind as the worked example", but it asks for V. Every example and the one practice question found R, so she has never practised this calculation in the lesson.

## Overall

No, I would not let her use this lesson as it is. It opens with three questions on a lesson she has not had, and it leans on that lesson throughout: ammeter, voltmeter, diode, potential difference and the link between resistance and current are all used or tested before this lesson explains them. Both hands-on steps tell her to use controls the script lists as absent ("Draw it another way" at 1.10, the temperature and light sliders at 3.5), and several questions carry their own answer (1.10, 3.3, the 2.3 "guess"). The thermistor and LDR physics is correct and the worked examples are sound, so it is fixable, but it needs the opening recall, the meters, the widgets and the mismatched wrong-answer replies put right first, and the long run of Next-only symbol messages broken up.
