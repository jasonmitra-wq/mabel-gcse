# Review: p2-current-voltage (2026-11-11)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 29 findings, cost $0.5872.

## Counts (made in code from the findings)

- new: 8
- F3: 3
- F8: 3
- F1: 3
- F7: 2
- F6: 2
- F12: 1
- P6: 1
- L3: 1
- P5: 1
- P16: 1
- P13: 1
- P8: 1
- P15: 1

## Findings

- **1.4** [new, would confuse or mislead her] "A lamp is joined to a cell by one wire only, from one end of the cell to the lamp. Does the lamp light?" — The prediction is about a lamp joined by one wire only, but the circuit she then tests is a full loop with a switch. The test does not show the thing she was asked to predict.
- **1.4** [new, would confuse or mislead her] ""Your prediction was right." or "What happens: No." and "With the gap, the lamp stayed off. When you closed the switch, the loop was complete and the lamp lit."" — She is told the answer is "No, it does not light" and in the same breath that the lamp lit when she closed the switch. The reply does not fit the question she answered.
- **1.4** [F3, a teacher would correct it] "a gap anywhere stops the current everywhere" — The tick-list uses "current" three steps before 1.7 says what a current is.
- **1.1** [F3, minor] "In a circuit, a bulb is called a lamp." — "Circuit" is used here and in 1.4 before anything says what a circuit is; only "closed circuit" is defined, in 1.5.
- **1.3** [new, minor] "People often call a cell a battery." — This is loose: a battery is properly two or more cells joined together. The lesson's own key point treats them as two things ("a cell or a battery").
- **1.6** [F8, a teacher would correct it] "What happens to the movement of charge?" — The answer was on the tick-list two steps earlier ("a gap anywhere stops the current everywhere"), and 1.5 has just said "Charge moves round only when the circuit is closed".
- **1.6 don't know (again)** [F1, minor] "With a gap, the charge cannot move all the way round the loop. Then: The movement of charge stops everywhere in the loop. A loose wire leaves a gap, so there is no complete loop and the charge cannot move round at all." — The same fact is said twice in two bubbles one after the other. The same doubling happens on the don't-know branches of 1.8, 1.11, 1.20, 2.8, 2.13 and 2.19.
- **1.8 don't know (again)** [F7, a teacher would correct it] "Wire A has 2 units of charge passing each second; wire B has 5. Which wire has the bigger current?" — The "smaller question" is the original question reworded with one button taken away. It is not an easier step.
- **1.10** [new, minor] "Current is counted in a unit called the ampere" — Current is measured, not counted. The next sentence and 1.12 both say "measured", so the wording is inconsistent.
- **1.11** [F1, a teacher would correct it] "One ampere is one coulomb each second, so 3 coulombs each second is 3 amperes." — "One ampere is one coulomb each second" is in 1.10, then again in the first don't-know, the smaller question, its reply and the final answer. On the don't-know path she reads it up to five times.
- **1.11 don't know (again)** [F7, a teacher would correct it] "If 1 coulomb each second is 1 ampere, what current in amperes is 3 coulombs each second?" — This is the same as the first don't-know hint, reworded. It is not a smaller step.
- **1.11 she types 0.333** [new, minor] "Not quite: it's 3 A. One ampere is one coulomb each second, so 3 coulombs each second is 3 amperes." — She divided 1 by 3, and the reply is the same generic one as for any wrong answer. It does not tell her what she did wrong.
- **1.11 right** [new, minor] "Each coulomb passing every second adds one ampere." — Muddled wording that a 15-year-old would not follow. Plainer: "3 coulombs each second is 3 amperes".
- **1.13 (1 of 2)** [new, minor] "Ammeter 1 is before the lamp and ammeter 2 is after it." — "Before" and "after" assume a direction of flow that has never been taught, and invite the very idea that current is used up on the way round. The option "They read in opposite directions" would also mean nothing to her.
- **1.13 (1 of 2)** [new, a teacher would correct it] "In one line: what did the two ammeters show, and why?" — She cannot answer "why" from what she has been told. That charge is not used up is first stated in 1.14, after this.
- **1.13** [F12, a teacher would correct it] "controls: none" — The "hands-on" circuit has nothing to do: she only reads two meters and is given the result "straight away". It is a picture, not a test of her prediction.
- **1.13 (2 of 2)** [F8, a teacher would correct it] "The circuit has two ammeters in its loop, so you can check each answer." — The message says the ammeters are "in its loop" and she has just read them there. She is then asked how to connect an ammeter, with the right answer "In the loop".
- **1.14** [F1, a teacher would correct it] "An ammeter goes in the loop, so the charge moves through it. In a single loop the current is the same at every point, because charge is not used up on the way round. So it does not matter where in the loop you put the ammeter." — All of this was said in the 1.13 box just before ("Both ammeters sit in the loop, so the charge moves through them", and the tick-list lines). She reads the same facts again straight away.
- **1.14** [P6, minor] "An ammeter goes in the loop, so the charge moves through it. In a single loop the current is the same at every point, because charge is not used up on the way round. So it does not matter where in the loop you put the ammeter." — Three ideas in one message: where the ammeter goes, current the same everywhere, and charge not used up.
- **1.18 don't know / still doesn't know** [F6, minor] "That's fine. Here is the first step: … That's fine. Here is how it goes." — The same stock opener twice running on the don't-know path. The first hint also does not say which number is I and which is t.
- **2.6** [F3, minor] "one lead on each side of it, not in the loop" — "Lead" is not explained. She has no picture of a voltmeter until 2.9 and never gets to use one in a circuit.
- **2.7** [L3, minor] "Exam questions say potential difference, but either word gets the mark." — Talk of exams and marks to a girl meeting the idea for the first time reads as revision notes.
- **2.9 / 2.10** [F8, a teacher would correct it] "A resistor is a component put in a circuit to limit the current." — The next step asks her to predict what a resistor does to the current, straight after she has been told it limits the current. The prediction is given away.
- **2.9** [P5, minor] "The same loop with a resistor added, and a voltmeter connected across the lamp." — Two new parts, the resistor and the voltmeter, appear in the picture at once. It is also not clear which loop "the same loop" is, since the last circuit she used had no switch.
- **2.11** [P16, would confuse or mislead her] "A resistor has a big resistance." — This is not in the lesson and is not true in general: the worked example five steps later uses a 3 Ω resistor. It also suggests that lamps and other components have no resistance.
- **2.15** [P13, a teacher would correct it] "To find I, divide V by R: I = V ÷ R. To find R, divide V by I: R = V ÷ I." — Two rearrangements are stated in one message with no reason given. Neither is ever shown in a worked example or practised; the example and the practice both only multiply.
- **2.17 don't know / still doesn't know** [F6, minor] "That's fine. Here is the first step: … That's fine. Here is how it goes." — The same stock opener twice running again.
- **2.19 don't know (again)** [P8, minor] "In a single loop the current is the same at every point. Where in the loop can you put the ammeter to measure the current?" — The question hands her the reason and then asks for the answer that follows directly from it.
- **The end** [P15, a teacher would correct it] "That's as far as this version goes. The rest is on the slides for now." — The lesson stops dead with no round-up or closing questions on potential difference and resistance. "This version" is developer talk, and she is sent to slides, which is where Mabel said she gets bored (M1).

## Overall

Not quite as it is. The order is sound and most questions are fair, but the first hands-on box (1.4) asks her to predict one thing and tests another, and "A resistor has a big resistance" (2.11) is wrong and contradicted by the 3 Ω example. Three predictions or questions are given away just before they are asked (1.6, 1.13 second box, 2.10), and several "smaller questions" after "don't know" are the same question again. I would fix those, practise the rearranged V = I R, and give it a proper ending before she uses it.
