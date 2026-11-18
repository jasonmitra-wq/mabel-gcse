# Review: p3-density (2026-11-17)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 35 findings, cost $0.5344.

## Counts (made in code from the findings)

- new: 11
- F1: 4
- F8: 3
- F7: 2
- F12: 2
- P4: 2
- P16: 2
- F3: 2
- F5: 1
- M1: 1
- F10: 1
- P13: 1
- P10: 1
- P14: 1
- F2: 1

## Findings

- **1.1** [new, minor] "how to find out what something is made of" — The opening promises she will learn to identify a material from its density, but no step ever does this. The title's feathers are never mentioned either.
- **1.1a don't know (first time)** [F7, minor] "Which state can you squash into a smaller space?" — This is not an easier step. It is a different recall question that needs the same knowledge she has just said she does not have.
- **1.1b don't know (first time)** [new, a teacher would correct it] "When ice melts, are any particles made or destroyed? (same buttons)" — The hint is a yes/no question, but the buttons still read "More than 200 g / 200 g / Less than 200 g", so she cannot answer what she was just asked.
- **1.2** [F5, minor] "Mass is how much matter something has, in kilograms (kg) or grams (g). Volume is how much space it takes up, in cubic metres (m³) or cubic centimetres (cm³)." — Two terms are defined and four units introduced in a single message. Mass and volume should each have their own message.
- **1.2-1.6** [M1, a teacher would correct it] "Button: Next" — Five telling messages in a row (1.2 to 1.6) with only Next to press before she is asked anything. The same happens at 3.1-3.3 and 4.1-4.4, and she would drift.
- **1.4** [F10, minor] "The equation is ρ = m ÷ V: density = mass ÷ volume." — The symbol ρ appears in the equation before she is told it is the Greek letter rho. The symbols and units only come in the next message, and the same message also carries the definition of density.
- **1.7** [F12, a teacher would correct it] ""Block B: the same mass in half the volume"" — The right button carries the full explanation and the wrong ones carry plainly weak reasons. She can pick it without thinking about density at all.
- **1.11** [P4, a teacher would correct it] "In one line: what does density mean?" — Key point 1 closes without ever teaching that a dense substance has heavier particles, more closely packed particles, or both. It also only covers floating on water, not comparing an object with whatever fluid it is in.
- **1.10** [F12, minor] ""Yes: it is less dense than water"" — The right option again contains the reason, and that reason is the rule stated two messages earlier. The question tests nothing.
- **1.10 wrong answer (solid)** [new, a teacher would correct it] "Not quite: compare the numbers: 920 kg/m³ is less than water's 1000 kg/m³, so ice floats." — She chose "a solid is denser than a liquid", which is a sensible idea and usually true. The reply ignores it; she should be told here that water is an exception, not left until 4.4.
- **1.10 don't know (first time)** [new, minor] "Is 920 more or less than that? (same buttons)" — The hint asks "more or less?" but the buttons are still the three Yes/No options, so the reply does not fit what she can press.
- **2.3** [P16, a teacher would correct it] "Rearranging first is where most wrong answers come from." — This is the tutor's own claim. The lesson gives m = ρV and V = m/ρ as the rearrangements, the script never states them, and yet 2.11 accepts "V = m ÷ ρ" as the model answer.
- **2.5 wrong answers (450 and 0.00222)** [new, minor] "Not quite: 1800 kg. Put the numbers in first: 900 = m ÷ 2. Multiply both sides by 2: m = 1800 kg." — The same reply is given for two different mistakes (dividing, and dividing upside down). Neither tells her what she actually did wrong.
- **2.6** [P13, would confuse or mislead her] "What volume of seawater has a mass of 515 000 kg, in m³?" — She is asked to find a volume, with the unknown on the bottom of the fraction, without any worked example of that. This is the hardest rearrangement, set with awkward large numbers.
- **2.7** [new, a teacher would correct it] "To change a density in g/cm³ into kg/m³, multiply by 1000." — The rule is given with no reason, and a first-time learner will wonder why it is 1000. The reverse conversion (divide by 1000) in the key point is never taught.
- **2.8** [F8, a teacher would correct it] "Aluminium has a density of 2.7 g/cm³. What is that in kg/m³?" — The message just before said "multiply by 1000", so the question only asks her to repeat the rule she has just read.
- **2.8 don't know (first time)** [F7, minor] "To go from g/cm³ to kg/m³, multiply by 1000." — The help is the previous message said again, not an easier step such as "what is 2.7 × 1000?".
- **2.9** [F1, minor] "When a substance changes state its mass stays the same" — This was already stated in the replies to 1.1b ("Mass stays the same in a change of state"). It is then repeated again in every reply at 2.10.
- **2.10** [new, minor] "ρ = 2.7 ÷ 0.00108 = 2500 kg/m³" — Dividing 2.7 by 0.00108 cannot reasonably be done in her head, and nothing tells her to use a calculator. The same applies to 515 000 ÷ 1030 in 2.6.
- **3.1** [P10, a teacher would correct it] "Measuring density is a required practical: the exam can ask you to describe how to do it." — The practical section starts cold with telling. There are no readiness questions, and it opens with the exam rather than with why she would want to measure density.
- **3.1-3.13** [P14, a teacher would correct it] "Lower the stone in on a thin thread and read the new level." — The whole practical is described in words only. There is nothing for her to try, read or move: no measuring cylinder to read, no balance, no picture.
- **3.2** [F3, minor] "Find the mass on a balance, in grams." — "Balance" is used without saying what it is (a weighing scale for the lab). The same message goes straight on to correcting a zero error.
- **3.3** [P4, minor] "For a regular solid, such as a cube or a cuboid, measure its length, width and height with a ruler." — The key point also covers cylinders (V = πr²h) and using a micrometer or callipers for small objects. Neither is taught before the key point is finished.
- **3.6** [F3, minor] "half fill a measuring cylinder with water and read the level" — "Measuring cylinder" is used without saying what it is (a tall container with a volume scale). It is never explained anywhere in the lesson.
- **3.6** [F2, minor] "One way: half fill a measuring cylinder" — "One way" of doing what? The message does not say it is a way of finding the stone's volume by displacement.
- **3.7** [F8, a teacher would correct it] "What is the stone's volume, in cm³?" — The message just before said "The stone's volume is the new reading minus the first". She only has to do 52 − 40.
- **3.10 don't know (first time)** [new, minor] "Do you get the same number? (same buttons)" — The hint is a yes/no question, but the buttons are still the three "So…" reasons. She cannot answer the question she was asked.
- **3.11** [new, a teacher would correct it] "Small slips like an eye not quite level are called random errors" — This is imprecise. Someone who always reads from above gets a reading that is wrong the same way every time, which is not random. The zero error in 3.2 is a different kind of error and is never named, so she may lump them together.
- **3.11** [P16, minor] "they push readings a little too high one time and a little too low the next" — Random errors, repeats and means are not in this lesson's key point. The tutor has brought in its own material and left out the listed sources of error (object not fully covered, worn ruler).
- **3.12** [new, a teacher would correct it] "Why do scientists repeat each measurement and take a mean?" — Repeating and taking a mean have not been taught. She can only get this right by spotting the button that contains "random errors", the term introduced one message earlier.
- **3.12 wrong answer (wrong)** [new, would confuse or mislead her] "Not quite: that answer scores nothing in the exam. Say that a mean reduces the effect of random errors." — This is a discouraging reply to a reasonable first thought. It tells her a phrase to say for the exam instead of explaining why her answer falls short.
- **4.1** [F1, minor] "because their particles are far apart, with empty space between them" — The same sentence was already given at 1.1a. It comes again in 4.5, 4.6 and 4.13.
- **4.3** [F1, minor] "A solid is usually a little denser than its own liquid" — This repeats 2.9 ("Most solids take up a little more space when they melt, so the liquid is a little less dense").
- **4.5** [F8, a teacher would correct it] "Why is steam far less dense than liquid water?" — 4.1 has just told her gases are far less dense "because their particles are far apart". The answer was given four messages earlier and the other two options are plainly wrong.
- **4.6** [F1, a teacher would correct it] "In one line: why is a gas much less dense than a solid?" — This is the same question she answered one step earlier at 4.5, and it is asked a third time at 4.13. She would feel she is being asked the same thing over and over.

## Overall

Not as it is. The arithmetic and nearly all the physics are correct, the build-up from mass and volume to density is sensible, and the wrong-answer replies in the calculations are mostly helpful. But too many questions are answered by the message just before them or by the wording of the right button, the hints after "don't know" often do not match the buttons, and she is asked to find a volume with no worked example. The practical section is all telling with nothing to try, it brings in random errors loosely, and the "scores nothing in the exam" reply must go before she sees it.
