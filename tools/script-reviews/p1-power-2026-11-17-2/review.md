# Review: p1-power (2026-11-17)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 23 findings, cost $0.5005.

## Counts (made in code from the findings)

- new: 17
- F2: 1
- P13: 1
- P6: 1
- P16: 1
- F1: 1
- P14: 1

## Findings

- **2.5b** [F2, a teacher would correct it] "To find the time instead, put the numbers in first, then rearrange. Its steps open one at a time." — "Its steps" has nothing to refer to: the message never mentions a worked example (compare 4.4, which says "Here is a worked example" first). She cannot tell what "its" is.
- **2.5b** [new, would confuse or mislead her] "Rearrange: t = E ÷ P = 36 000 ÷ 2000." — The hard step is skipped. She is told to put the numbers in and then rearrange, but the card jumps from 2000 = 36 000 ÷ t to a symbol formula t = E ÷ P with no working. A first-time learner will not see where it came from, and 2.7 then expects her to use it.
- **2.5** [new, a teacher would correct it] "To find the energy, multiply both sides of P = E ÷ t by t: that gives E = P × t." — The rearrangement is done in one line of algebra with no numbers and no check that she followed. Many 15-year-olds would be lost here; it needs a worked example of its own.
- **2.6** [P13, a teacher would correct it] "A 3 kW oven is on for 20 s. How much energy does it transfer, in joules?" — There is no worked example for E = P × t. The example just before this is for finding time, so her first energy question comes cold and adds a kilowatt conversion as well. The time example belongs before 2.7, not here.
- **2.8** [new, a teacher would correct it] "A 1.5 kW kettle is on for 2 minutes. How much energy does it transfer, in joules?" — She has been told to change kilowatts and megawatts into watts, but never to change minutes into seconds. The question tests a conversion the lesson has not taught, and combines it with a kW conversion.
- **2.2 (she types 0.005)** [new, a teacher would correct it] "Put the energy on top: P = 12 000 ÷ 60 = 200 W." — "On top" only makes sense for a fraction, but the equation has only ever been shown with a ÷ sign. She has nothing to picture as the top.
- **2.7 (she types 0.0167)** [new, a teacher would correct it] "Put the energy on top: t = 30 000 ÷ 500 = 60 s." — The same "on top" wording again, with no fraction ever shown.
- **2.4** [P6, minor] "The power output of a power station is given in megawatts (MW): 1 MW = 1 000 000 W, a million watts. Change kilowatts and megawatts into watts before you calculate." — Two ideas in one message: a new unit, and the rule about converting before calculating. The rule deserves its own message, and should include minutes to seconds.
- **3.2** [new, a teacher would correct it] "A large power station gives out about 1 to 2 gigawatts (GW)." — Step 2.4 told her a power station's output "is given in megawatts"; now it is given in gigawatts with no link between the two. She should be told that 1 GW = 1000 MW, or the two statements made consistent.
- **3.1** [P16, minor] "a kettle 1500 to 3000 W" — The lesson file gives a kettle as about 2000 to 3000 W; the script has substituted its own figure.
- **3.3 (The 300 kW car motor)** [new, minor] "so the turbine is faster." — "The turbine is faster" reads as if the turbine spins or moves faster. It should say the turbine transfers energy faster, or has the greater power.
- **4.7** [new, would confuse or mislead her] "P is the power in watts (W), W is the work done in joules (J)" — W means watts and then work done in consecutive phrases of one sentence. Even after the warning in 4.2b, this is exactly where a beginner mixes the two up; it needs rewording or a reminder here.
- **4.8** [new, minor] "P = W ÷ t = 60 000 ÷ 30 = 2000 W." — W is used for work done and for watts in the same line of working, with no reminder which is which.
- **4.5** [new, a teacher would correct it] "W = F s = 50 × 4 = 200 J." — The equation was taught as W = F × s, but the replies write "F s" with no multiplication sign. She has not been told that two letters side by side mean multiply. This appears in the right-answer, other-wrong-answer and don't-know replies.
- **4.15** [new, minor] "W = F s = 20 × 5 = 100 J." — The same unexplained "F s" notation instead of F × s.
- **4.6** [F1, minor] "Lifting a box raises it, so energy goes into its gravitational potential store." — This is the same fact, with the same box, that she was asked and told in 1.1b ("raising the box fills its gravitational potential store"). It is presented as new teaching rather than linked back.
- **4.6b** [new, minor] "Pushing a box along a rough floor against friction makes the box and the floor warmer, so energy goes into their thermal stores." — The stores idea in key point 4 is only told. No question, here or in the quiz, checks that she took it in.
- **1.10** [new, minor] "Yes, your line has it: the energy transferred each second (the rate of energy transfer); and watts." — The reply is a pasted mark scheme, not a sentence. "; and watts" reads oddly and does not model a good line for her to copy.
- **2.9** [new, minor] "Yes, your line has it: power in watts; and energy in joules; and time in seconds." — The same stilted list feedback joined with "; and". It is not how a teacher would say it.
- **4.4** [new, minor] "Yes, that's right: 60000 J." — The number is written "60000" here but "60 000" on the card and everywhere else. Inconsistent.
- **4.12** [new, minor] "Yes: 3 × 1000 = 3000 W." — Sloppy units in the working. It should read 3 kW = 3 × 1000 W = 3000 W.
- **4.16** [new, minor] "a 3 kW kettle heats some water in 2 minutes. How long would a 1.5 kW kettle take to transfer the same energy?" — The final quiz question reuses the kettles from 1.2 with the same numbers (2 minutes and 4 minutes). She may recall the answer rather than reason it out.
- **whole lesson** [P14, a teacher would correct it] "Buttons: "Next" ... She types a number." — Nothing in the script is hands-on or visual: no picture, no widget, no slider to see power change with time. It is all reading, Next and typing numbers, and key point 2 is five calculations in a row. She may well get bored (M1).

## Overall

Not quite as it is. Key points 1 and 3 are sound, and the physics is correct throughout, but key point 2 would lose her: the rearrangements are asserted rather than shown, the time example sits before the energy question, and minutes are never taught as needing conversion before she is tested on it. In key point 4, W meaning both watts and work done in one sentence (4.7) and the unexplained "F s" notation need fixing, as do "put the energy on top" and the megawatt/gigawatt mismatch for power stations. With those corrected and something visual or hands-on added, I would let her use it.
