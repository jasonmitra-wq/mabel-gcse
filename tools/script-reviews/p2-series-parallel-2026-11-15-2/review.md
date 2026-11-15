# Review: p2-series-parallel (2026-11-15)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 33 findings, cost $0.7260.

## Counts (made in code from the findings)

- new: 18
- F5: 2
- F3: 2
- F12: 2
- F1: 2
- F2: 2
- P12: 1
- F11: 1
- F8: 1
- F10: 1
- P8: 1

## Findings

- **1.1c** [F5, a teacher would correct it] "A resistor, a part that adds resistance to a circuit, has 2 A through it and a resistance of 3 Ω." — "Resistor" and "resistance" arrive in the same bubble, which also restates V = I R with three symbols and units and then sets a calculation. That is too many ideas in one message for a first-timer.
- **1.1a** [new, minor] "You met current and potential difference in the last lesson, so first, three quick questions on them." — The third question is not on current or potential difference: it is a V = I R calculation involving resistance and a resistor. The promise does not match what follows.
- **1.3** [new, minor] "Every bit of charge that leaves the supply goes through the first resistor" — 1.2 said "cell", the picture and 1.3 say "supply", and 1.7 says "battery". She is never told these mean the same thing here.
- **1.4 wrong answer (used up)** [new, minor] "The lamps transfer energy, not charge." — Muddled: charge does pass through the lamps. The point is that the lamps do not use up charge, and the line should say that plainly.
- **1.5** [new, a teacher would correct it] "In the picture, the current is 2 A before the first resistor, between the two, and after the second." — The picture is labelled only "supply" and "resistor", with no current values listed. She will look for 2 A and not find it. The example also jumps from the 0.3 A lamps of 1.4 to 2 A without saying so.
- **1.6** [new, a teacher would correct it] "In the picture, the supply gives 12 V: one resistor has 8 V across it and the other has 4 V." — Again the message points to values "in the picture" that the picture's labels (supply, resistor) do not show.
- **1.6** [F3, minor] "that total is shared between the components" — "Components" is used for the first time without saying it means the parts of the circuit (the lesson has said "parts" up to now).
- **1.9** [new, minor] "A 6 V cell is joined in series with two resistors of 10 Ω each. What is the potential difference across each one?" — 1.8 has just taught that the bigger resistance gets the bigger share, but the question uses equal resistors. The new idea is not practised until key point 4.
- **1.12** [P12, minor] "It shows a cell, a switch and a lamp in one loop" — The circuit shows a switch, but the message only mentions a cell, a lamp and a resistor. Nothing in the lesson so far has said what the switch is or does.
- **1.12** [F11, minor] "Tap Next when you are done." — The Next button sits under the message from the start, so she can skip the hands-on circuit without predicting or trying it. The same is true at 5.3.
- **1.12** [F12, minor] "With the resistor in, the lamp was dimmer. Taking it out made the lamp bright again." — This line appears after she first uses the resistor button, so it reports what happened on taking the resistor out before she may have done so.
- **1.12** [new, a teacher would correct it] "Now explain it: In one line: why do you think the lamp got dimmer?" — The expected line is "the total resistance is bigger, so the current is smaller". She has not yet been told that more resistance means less current for the same cell, nor that a smaller current makes a lamp dimmer.
- **1.13** [F1, minor] "Here is why. With the resistor in, the total resistance is bigger. The cell's push is the same, so a smaller current flows and the lamp is dimmer." — This repeats what the tick-list in the widget has just shown her ("the total resistance is bigger", "so the current is smaller").
- **1.14** [new, minor] "Yes, your line has it: the current is the same everywhere; and the supply potential difference is shared between the components; and the total resistance is the sum of the resistances." — The stitched-together "; and … ; and" reads like a machine. The same clumsy joining is in the replies at 2.12, 3.7 and 4.8. Asking for three rules "in one line" is also a lot.
- **2.3 don't know (first time)** [new, a teacher would correct it] "Is its push shared, or all of it?" — Muddled wording: it is not clear whether "its" is the lamp or the battery, and "or all of it" is not a sentence she can parse. Say "Does each lamp get part of the 6 V or all of it?"
- **2.5** [F2, a teacher would correct it] "The current is different." — Different from what? She could read this as "the current is different in each branch" or "different from series". It means the current behaves differently from the potential difference, but that referent is in the previous bubble.
- **2.8** [F8, a teacher would correct it] "Which branch carries the bigger current?" — 2.7 has just said "a branch with a smaller resistance carries a bigger current". The question only asks her to spot which of 5 Ω and 10 Ω is smaller.
- **2.8** [F10, a teacher would correct it] "6 ÷ 5 = 1.2 A, against 6 ÷ 10 = 0.6 A" — The replies divide potential difference by resistance to get current, but I = V ÷ R is not stated until 4.2. She has only seen V = I R as a multiplication. This appears in the right-answer, wrong-answer and don't-know replies.
- **2.9** [new, minor] "Picture one lamp on a branch across a cell, then add a second branch." — With one lamp and one cell there is just a loop, not a "branch". The bubble also packs four steps of reasoning into one message and tells her the "surprise" rather than letting her see or predict it.
- **2.10** [F2, minor] "The push from the supply is the same as before, but the total current is now bigger." — "As before" and "now" depend on the previous bubble's scenario of adding a second branch. The question does not restate what has changed.
- **2.11** [new, would confuse or mislead her] "Rule three for parallel" — Rule one was named at 2.4, but no message ever says "rule two". She will wonder what she missed. The current rule at 2.5 needs to be labelled rule two.
- **2.11** [new, a teacher would correct it] "the total resistance of two resistors in parallel is less than the resistance of the smaller one" — The lesson has only shown that adding a branch makes the total smaller than before. The step to "less than the smaller of the two" is asserted without explanation.
- **3.2 don't know (first time)** [new, minor] "A gap in one path: which button fits?" — Too clipped to be a question she can follow. Ask "If there is a gap in one path, can charge still flow round the other paths?"
- **3.5** [F3, minor] "opening a switch only breaks its own branch" — "Opening a switch" is circuit jargon that has not been explained. To her, a switch is turned off, not opened.
- **3.6** [new, minor] "Predict the third one: your toaster develops a fault and stops working. Which is true about the kettle on another socket?" — This is the same idea she answered at 3.2 (one bulb breaks, the others stay lit), with only two buttons. It is not really a prediction.
- **3.7** [new, minor] "In one line: why are homes wired in parallel? Give as many reasons as you can." — "In one line" and "as many reasons as you can" pull against each other, since three reasons are wanted.
- **4.1** [new, minor] "the equivalent resistance: the one resistor that would do the same job as the whole set" — A resistance is defined as a resistor. It should be "the resistance of the one resistor that would do the same job".
- **5.1** [new, minor] "An ammeter goes in series, in the loop, so all the current it measures flows through it." — Circular wording. It should say "so that all the current you want to measure flows through the meter".
- **5.2** [P8, a teacher would correct it] "the push across a component. To measure the potential difference across a lamp, where does the voltmeter go?" — The question says "across" twice and the right button begins "Across the lamp". With only two buttons, the answer is in the question.
- **5.3** [F12, a teacher would correct it] "With the resistor in, the current was smaller and the lamp had a smaller share of the potential difference." — This result line gives the explanation that the very next prompt asks for ("why do you think the voltmeter reading went down?"; expected: the resistor takes a share, so the lamp gets less).
- **5.4** [F1, minor] "The resistor also takes a share of the potential difference, so the lamp's share is smaller." — This is the third time in a row she reads the same explanation: the widget's result line, the tick-list, and now this bubble.
- **5.5** [F5, minor] "In place of the fixed resistor, people use a variable resistor" — "Fixed resistor" and "variable resistor" are both new in one bubble. "Used for testing a component" also does not say what testing means (measuring the current and potential difference at different settings).
- **5.13** [new, minor] "So one switch turns everything off" — The distractors are implausible and the right option is much the longest, so she can pick it without knowing any physics. The right option also leaves out the third reason about faults.

## Overall

Not quite as it is, though it is close: the physics is sound, the steps are small, and the don't-know branches do get easier. Before she uses it I would fix the missing "rule two" for parallel, the two messages that point to numbers the picture does not show, and the 2.7/2.8 pair where the answer is given just before the question. I would also state I = V ÷ R before the 2.8 replies use it, and stop the 5.3 widget giving the explanation before asking for it. The rest is wording to tidy: cell/supply/battery, "The current is different", and the clipped don't-know prompts.
