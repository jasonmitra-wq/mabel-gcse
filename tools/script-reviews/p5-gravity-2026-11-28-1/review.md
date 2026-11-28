# Review: p5-gravity (2026-11-28)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 32 findings, cost $0.4278.

## Counts (made in code from the findings)

- new: 9
- F3: 4
- F8: 3
- L3: 2
- F1: 2
- F7: 2
- F2: 2
- F10: 1
- P6: 1
- P13: 1
- F15: 1
- F5: 1
- P16: 1
- P14: 1
- M1: 1

## Findings

- **1.1a** [L3, would confuse or mislead her] "First, two quick questions from earlier lessons. What is the momentum of a 2 kg ball moving at 3 m/s?" — The lesson opens by testing momentum, which this lesson never teaches and never uses again. A first-time learner cannot answer it from what she has been told, and it has nothing to do with gravity.
- **1.1a** [F10, a teacher would correct it] "Yes: p = m v = 2 × 3 = 6 kg m/s." — The equation p = m v appears with p, m and v never named and no units explained. The same line is shown on the 'still doesn't know' and skip branches.
- **1.1a don't know (first time)** [new, a teacher would correct it] "Momentum = kilograms × velocity. Multiply 2 by 3." — 'Kilograms × velocity' mixes a unit with a quantity; it should be mass × velocity. The hint also tells her the whole calculation, so nothing is left to work out.
- **1.1b** [L3, a teacher would correct it] "Second: a skydiver is falling at a steady speed. Which is true?" — This needs balanced forces and air resistance, neither of which the lesson has explained. She can only guess.
- **1.1b don't know (first time)** [F8, minor] "A steady speed means the forces balance." — The hint is the answer: only one button mentions balance, so she just matches the word.
- **1.1** [F3, minor] "how it keeps the Moon and satellites going round the Earth" — 'Satellites' is used in the opening line, but what a satellite is does not come until 3.2.
- **1.4** [P6, a teacher would correct it] "How hard gravity pulls depends on where you are. Gravity's pull on each kilogram is written g, in newtons per kilogram (N/kg). On Earth g is about 9.8 N/kg; on the Moon it is about 1.6 N/kg." — One message carries four new things: pull depends on place, the symbol g, a new compound unit and two values. It should be split.
- **1.5** [P13, a teacher would correct it] "Weight = mass × g, or W = m g, with W in newtons (N), m in kilograms (kg) and g in N/kg." — The equation is stated and the very next message asks her to calculate with it. There is no worked example first and only one practice question before the quiz.
- **1.6 any other wrong answer** [new, minor] "Not quite: 112 N. W = m g = 70 × 1.6 = 112 N." — Any wrong number gets the answer straight away with no second try and no check of what she did wrong, so she never does the calculation herself.
- **1.7** [new, minor] "It is 686 kg" — Unless she happened to type 686 in the last question, this number comes from nowhere; the lesson has never shown 70 × 9.8. The reply calls it 'the weight on Earth' without showing where it comes from.
- **1.9** [F15, minor] "Yes: your line makes every point. You have this: mass is the amount of matter, the same everywhere. You have this: weight is the force of gravity on it, which changes with g." — The feedback is stilted, with 'You have this:' twice, and reads back both points she has just written. It sounds like a mark scheme, not a teacher.
- **1.9** [F1, minor] "mass is the amount of matter, the same everywhere" — This fact was told in 1.2, repeated in the 1.7 replies, and comes again here, in two quiz replies and in the summary, in nearly the same words each time.
- **2.2** [F1, minor] "Near the Earth's surface it is about 9.8 N/kg." — She was told this in 1.4. The message also does not link 'pull on each kilogram' to the new name 'gravitational field strength', so g seems to be defined twice.
- **2.4** [new, would confuse or mislead her] "Field lines show a gravitational field. They point towards the centre of the Earth: the way a mass there would be pulled." — Field lines are introduced with no picture and no statement that they are lines drawn on a diagram, so she cannot imagine them. 'A mass there' does not say where 'there' is.
- **2.5** [F3, minor] "A satellite moves from close to the Earth to much further away." — The question is about a satellite before the lesson has said what a satellite is (3.2).
- **2.5** [F8, a teacher would correct it] "Which is true of the gravitational field strength there?" — 2.3 has just said 'Further from the Earth, the field gets weaker', with only the field-lines message in between. The question asks her to read that sentence back.
- **2.5 don't know (first time)** [F7, a teacher would correct it] "Does the Earth's pull get stronger or weaker as you go further away?" — This is the same question in other words, not an easier step. If she did not know before, she does not know now.
- **2.6** [new, would confuse or mislead her] "Partly there. You have this: a region where a mass feels a force of gravity. Still needed: it gets weaker further away." — The question asks what a gravitational field is. A correct definition is marked 'Partly there' because it does not add that the field weakens with distance, which is not part of what a field is.
- **2.6 none** [F2, minor] "A region where a mass feels a force of gravity. It gets weaker further away." — The model line is a fragment with no subject, and 'It' has nothing to refer to.
- **3.2** [F5, minor] "Moons are natural satellites: they orbit planets. Artificial satellites are machines people have put into orbit round the Earth" — Two new terms, natural satellite and artificial satellite, arrive in one message, and 'satellite' itself is never plainly defined.
- **3.7** [F3, would confuse or mislead her] "A satellite orbits the Earth in a circle at a steady speed. Is it accelerating?" — Acceleration and velocity have not been taught in this lesson, nor that velocity includes direction. She would reasonably say no because the speed is steady, and she cannot work out the right answer from what she has been told.
- **3.7** [P16, a teacher would correct it] "That is acceleration, towards the Earth." — Acceleration in a circle is not in the lesson's key points. The direction 'towards the Earth' is asserted with no reason given.
- **3.8** [F3, would confuse or mislead her] "For a stable orbit, speed and height go together. If a satellite's speed changes, the radius of its orbit must change too." — 'Stable orbit' and 'radius of its orbit' are not explained, and 'height' and 'radius' are used as if they were the same thing. 'Go together' does not say how, so the message tells her nothing she can use.
- **3.9** [new, would confuse or mislead her] "Further out, gravity is weaker, so it provides less centripetal force, and a satellite there moves more slowly." — The step from less centripetal force to slower speed is not explained. She has only just met centripetal force and would not follow it. The message also carries three ideas at once.
- **3.11** [F8, minor] "Satellite A orbits higher than satellite B. Which has the longer orbital period?" — 3.9 has just said a satellite further out 'moves more slowly' and 'has further to go round', and 3.10 has defined the period. The answer has been handed over two messages earlier.
- **3.12** [new, a teacher would correct it] "it moves sideways fast enough to keep missing" — Missing what? The model answer leaves out 'the Earth', here and on the none and don't-know branches.
- **3.17 don't know (first time)** [F7, minor] "Does the pull get stronger or weaker with distance?" — Again the hint is the question restated, not an easier step. The quiz question itself is also a near copy of 2.5.
- **Summary, point 3 of 3** [F2, a teacher would correct it] "Gravity pulls it towards the Earth all the time, but it moves sideways fast enough to keep missing." — 'It' has no referent, since the satellite is never named in the message, and 'keep missing' has no object. As a stand-alone summary line it does not make sense.
- **whole lesson** [P14, would confuse or mislead her] "Button: Next" — There is nothing hands-on and no picture anywhere in the script: no field-line diagram, no orbit diagram, nothing to change and watch. Field lines and 'falling but missing' cannot be taught in words alone.
- **whole lesson** [M1, a teacher would correct it] "Button: Next" — The lesson is 41 text bubbles with runs of four 'Next' taps (1.2 to 1.5, 2.1 to 2.4, 3.1 to 3.4). She would be bored well before the orbits section.
- **every wrong-answer reply (1.1a to 3.19)** [new, minor] "Not quite:" — Every wrong-answer reply in the lesson opens with the same two words, about thirty times, and every right one with 'Yes:'. It reads as a machine.
- **Key point 2** [new, minor] "Further from the Earth, the field gets weaker." — The key point's purpose for fields is left out: that they act over huge distances, that the Sun's field reaches billions of kilometres and that this is why planets orbit stars. 'Every object with mass' has a field is said once and never used.

## Overall

No, not as it stands. The mass and weight section is mostly sound, but the lesson opens with two questions on momentum and balanced forces that a first-time learner cannot answer, and there is no worked example for W = m g. The orbits section would lose her: it asks whether a satellite is accelerating without having taught acceleration or velocity, uses 'stable orbit' and 'radius' unexplained, and jumps from less centripetal force to slower speed with no reason. There is not a single picture or hands-on step for field lines or orbits, several hints only restate the question, and the last summary line does not make sense on its own.
