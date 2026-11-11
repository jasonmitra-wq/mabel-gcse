# Review: p2-current-voltage (2026-11-11)

Reviewer claude-fable-5-2, effort medium, 16 screenshots, 49 findings, cost $0.8819.

## Counts (made in code from the findings)

- new: 14
- F8: 8
- F1: 5
- F12: 4
- F6: 3
- P16: 3
- P6: 3
- F5: 2
- F2: 2
- F9: 1
- F3: 1
- P7: 1
- P4: 1
- M1: 1

## Findings

- **01-home-laptop.png** [F9, minor] "Revise a topic … Everything you need to do well in your exams." — The home screen she starts from talks about revising and exams, though she is meeting this topic for the first time.
- **T0** [new, minor] "what do you think is happening inside it to make that happen?" — The very first question asks for something she has not been told and cannot work out from everyday life. A wild guess is the only possible answer.
- **T4** [F5, a teacher would correct it] "Current is measured in amperes (A, or amps), and one ampere means one coulomb of charge passing each second, a coulomb being the unit we count charge in." — Two new units, ampere and coulomb, arrive in one sentence, and coulomb is used before the clause that explains it.
- **T4** [F6, minor] "Yes, that's right. Doubling is right" — Her answer is echoed back and she is told it is right twice in a row.
- **T5** [F3, minor] "In a circuit, a bulb is called a lamp." — "Circuit" is used here before anything has said what a circuit is; the closed circuit is only explained in T6.
- **T6** [F8, a teacher would correct it] "If there is a gap anywhere in the loop, nothing flows. What would happen to the lamp if you cut the wire somewhere in a closed circuit?" — The sentence before the question gives its answer.
- **T7** [new, would confuse or mislead her] "The answer:In a circuit, a bulb is called a lamp." — A stray line is stuck on the end as "The answer", and it is not the answer to the question about cutting the wire. It also repeats T5 word for word, with a missing space.
- **T7** [P16, a teacher would correct it] "so no charge reaches the lamp" — This is the tutor's own wording and suggests charge travels from the cell to the lamp and gets used there. The charge is already all round the loop; it just stops moving.
- **T8** [new, a teacher would correct it] "That pusher is a cell, a small part that pushes charge round the loop." — The cell is defined in a circle (a pusher that pushes) and is never linked to the battery in the torch she knows. The lesson's "a cell or a battery" has been dropped.
- **T9** [F1, minor] "the gap stops the flow everywhere, and the lamp goes out" — This is the same fact as T6 and T7 (a gap stops the flow, the lamp goes out), said a third time.
- **T10** [P6, minor] "An ammeter, the meter that measures current, goes in the loop, and it reads the same wherever you put it." — Two ideas in one message: current is the same all round the loop, and a new instrument, the ammeter, with where it goes.
- **T11** [F1, minor] "Current tells you how much charge passes each second" — The meaning of current has already been given in T3 and T4 and is restated here.
- **T14** [new, a teacher would correct it] "A current of 0.4 A flows for 2 minutes. How much charge flows, in coulombs (C)?" — Her first go on her own is harder than the worked example (2 A for 5 s). It needs a decimal and a minutes-to-seconds change that no example showed, and she replied "wdym".
- **12-diagram-15-laptop.png** [new, minor] "Measuring the current (ammeter circuit picture, with the T10 message above it)" — While she is asking about minutes and seconds, the screenshot for T15 shows the ammeter picture and the T10 text rather than the reply. If that is what her screen shows, it is out of step with the chat.
- **T17** [new, minor] "Yes, that's right: 48 C." — She asked tentatively ("is it 48") and got only a tick. A teacher would show 0.4 × 120 = 48 so she knows why it is right.
- **T18** [F12, would confuse or mislead her] "A lamp is joined to a cell by one wire only, from one end of the cell to the lamp. Does the lamp light? … The switch below is open, so the loop has a gap." — The prediction is about a lamp with only one wire, but the circuit she tests is a full loop with an open switch. Nothing tells her these are the same idea.
- **T18** [F12, would confuse or mislead her] "What happens: No. With the switch open, the lamp was off and both ammeters read 0 A. When you closed the switch, it lit." — The wording is muddled: "What happens: No." is followed by "it lit". She chose "Yes, it lights" and is never told plainly that the one-wire lamp does not light, or why.
- **15-widget-18-laptop.png** [new, minor] "Yes, it lights / Only if the wire is thick / Yes, but only dimly / No (all greyed out)" — After she answers, the options are dimmed so much that they are hard to read. Her choice and the right one are marked only by faint red and green outlines.
- **T20** [P7, minor] "No problem. A good line would say: a flow of charge." — After "idk" she is just handed the answer. There is no easier prompt and no chance to say it herself.
- **T22** [new, minor] "Not quite: it's "It stops everywhere in the loop"." — She said she did not know; "Not quite" treats that as a wrong answer.
- **T23** [P4, a teacher would correct it] "counter now "1/7 covered"" — Key point 1 is ticked straight after she answered "idk" to both the own-words line and the quick question. There is no evidence she has it.
- **T25** [F2, minor] "So the size of a current depends on two things." — The message opens with "So", leaning on an earlier message, and the "second thing" is not named anywhere in it.
- **T25** [F5, a teacher would correct it] "through a component (any part of a circuit, such as a lamp or a resistor); that push is called the potential difference across it" — Two new terms, component and potential difference, are packed into one sentence with a bracket in the middle. She had to ask "whats potential difference" straight away.
- **T25** [F8, a teacher would correct it] "Adding a second cell gave the lamp more push. What happened to the current?" — T23 had already told her "because more current flows", so the question asks for what she was just given.
- **T26** [F8, a teacher would correct it] "Imagine you swapped one cell for two cells, giving the lamp a bigger push. What would happen to the lamp's brightness?" — T23 had already said that two cells make the lamp glow brighter.
- **T27** [F6, minor] "Yes, that's right. Brighter is right" — Her word is echoed back and she is told it is right twice.
- **T28** [F8, would confuse or mislead her] "Back to my question: What happened to the current?" — T27 had just said "a bigger push drives more current through the lamp", so the answer sits directly above the question. The question also has no context (current when?), and she replied "wdym".
- **T29** [F8, a teacher would correct it] "so more charge flows through it each second. If you used three cells instead of two, what would you expect to see from the lamp?" — She asked what the question meant. The tutor gave away the answer, then asked the brightness question again in a slightly different form instead of making the original question clear.
- **T30** [F6, minor] "Yes, that's right. Even brighter is right" — Her words are echoed back and she is told it is right twice.
- **T31** [F8, would confuse or mislead her] "Back to my question: What happened to the current?" — The same question is asked a third time, straight after T30 said "more cells push more current round the loop".
- **T32** [new, would confuse or mislead her] "Partly right. The current did increase, and that's the part I was after." — Her answer was exactly what was asked for, yet it is marked "Partly right". She will think she missed something.
- **T32** [new, a teacher would correct it] "The answer:Use two cells and it glows brighter, because more current flows." — The stray "The answer:" line appears again with a missing space, repeating a sentence from T23 after she has already answered correctly.
- **T32** [F1, minor] "That push is called potential difference, measured in volts (V)" — She was told this in T25 and T26, in almost the same words.
- **T34** [F8, a teacher would correct it] "Picture a lamp wired to three cells instead of one … What would you expect to happen to the lamp's brightness?" — This is the fourth "more cells, what happens to the brightness" question. She has answered it twice and been told the answer several times.
- **T34** [P6, minor] "Exam questions say potential difference, but either that or voltage gets you the mark. Picture a lamp wired to three cells instead of one" — An exam-wording note and an unrelated thought experiment share one message.
- **T35** [new, minor] "Resistance is how hard a component makes it for charge to get through." — T25 promised "two things" and named the first. Ten turns later resistance arrives without being called the second thing, so the thread is lost.
- **T37** [P16, minor] "One ohm is the unit that tells you how strongly a component opposes the current" — This is the tutor's own muddled wording. The ohm is the unit of resistance; "one ohm is the unit that tells you" is not a definition.
- **T38** [F1, minor] "a bigger resistance means a smaller current" — This is the same fact as T36 ("The current would get smaller, because a bigger resistance…"), told again two messages later.
- **T39** [P6, a teacher would correct it] "The equation is V = I R: … The equation linking potential difference, current and resistance works like a set of three connected facts." — Two messages arrive together (about 87 words): the equation with its symbols, and a paragraph on rearranging. That is too much at once.
- **T39** [P16, a teacher would correct it] "works like a set of three connected facts" — This is the tutor's own vague phrase and it explains nothing. "Rearrange" is then used without showing how.
- **T41** [new, would confuse or mislead her] "A component has a potential difference of 22.5 V across it and a current of 0.75 A through it. What is its resistance, in ohms (Ω)?" — The worked example only multiplied (V = 2 × 3). This question needs the equation rearranged to R = V ÷ I, with awkward decimals, and no rearranging has been shown. A real first-timer would be stuck here.
- **T43** [F1, minor] "An ammeter is a meter that measures current." — She was told this in T10 and has since used ammeters in a widget.
- **T43** [F12, minor] "you can add a cell, put the resistor in or take it out or move the resistor to check your answer" — The instruction is a muddled string of "or"s, and it is not clear which control checks which prediction.
- **T43** [F8, a teacher would correct it] "You add a second cell. What happens to the ammeter reading and to the lamp?" — This "prediction" has been told and asked repeatedly from T23 to T34 (more cells, more current, brighter). There is nothing left to predict.
- **T43** [F12, minor] "What happens: Both go up." — The wording is muddled: a lamp does not "go up". It should say the ammeter reading rises and the lamp gets brighter.
- **26-widget-43-laptop.png** [new, a teacher would correct it] "Now test your prediction. Tap Add a cell and watch the ammeter and the lamp. What happens: Both go up. (circuit drawn with one cell, 0.09 A)" — The result "Both go up" sits on screen next to the instruction to test, while the circuit shows a single cell and 0.09 A. Either the answer is shown before she tests it or the text is out of step with the circuit.
- **T47** [new, minor] "Not quite: it's "Anywhere in the loop"." — "Not quite" is again the reply to "idk", as if she had given a wrong answer.
- **T48** [F2, minor] "Before the practical, question 1 of 2: What does an ammeter measure?" — "The practical" has not been mentioned before. She does not know what practical this is or why she is being quizzed.
- **T25–T34** [M1, would confuse or mislead her] "Back to my question: What happened to the current? … what would you expect to see from the lamp? … What would you expect to happen to the lamp's brightness?" — For ten turns she is asked the same two questions (more cells: brighter? more current?) over and over, with the answers already given. She said "wdym" and would be bored or cross by now.

## Overall

No, I would not let her use it as it is. The physics is mostly sound and the told pieces are short, but T25 to T34 go round in a loop asking the same question after the answer has been given, and a fully correct answer is marked "Partly right". Stray "The answer:" lines appear twice with the wrong text, and the first predict-first widget asks about one wire but tests an open switch, with the muddled "What happens: No … it lit". Both "Your turn" questions need a step the worked example never showed (minutes to seconds, then rearranging V = I R), and key points are ticked after a run of "idk" replies, so the counter says she has covered things she has not shown she understands.
