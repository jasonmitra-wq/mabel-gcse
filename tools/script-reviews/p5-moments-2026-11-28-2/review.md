# Review: p5-moments (2026-11-28)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 28 findings, cost $0.5494.

## Counts (made in code from the findings)

- new: 15
- F1: 2
- L3: 1
- F10: 1
- F3: 1
- F7: 1
- P4: 1
- F5: 1
- P6: 1
- F2: 1
- P16: 1
- P7: 1
- P14: 1

## Findings

- **1.1a** [L3, would confuse or mislead her] "First, two quick questions from the last lesson. A force of 8 N stretches a spring by 0.04 m. What is its spring constant?" — The lesson opens with a calculation from another lesson. A first-time learner who knows only this lesson has never been told what a spring constant is, so her first experience is a question she cannot do.
- **1.1a right answer** [F10, minor] "Yes: k = F ÷ e = 8 ÷ 0.04 = 200 N/m." — k, F and e are used without saying what each stands for. Only the don't-know branch names them.
- **1.1b** [F3, would confuse or mislead her] "Second: which kind of deformation leaves an object changed for good?" — "Deformation", "inelastic", "elastic" and "compression" are all used in the question and its buttons without being explained anywhere in this lesson.
- **1.1b don't know (first time)** [F7, minor] "One kind goes back to its first shape. Which kind does not?" — This is the same question in other words, not an easier step. It still depends on her knowing the terms.
- **1.6** [new, would confuse or mislead her] "The distance d must be measured at right angles from the pivot to the line the force acts along. This is called the perpendicular distance." — The wording is muddled: the distance is at right angles to the line of the force, not "at right angles from the pivot". With no picture, a 15-year-old will not be able to see what "the line the force acts along" means.
- **1.6b** [new, a teacher would correct it] "For a door pushed straight on, d is just the distance from the hinge. Pushing at a slant makes the perpendicular distance shorter, so the moment is smaller." — "Pushed straight on" is vague (it means at right angles to the door) and "the distance from the hinge" does not say to where. That a slanted push shortens the distance is asserted with no picture or reason.
- **1.8** [new, minor] "A spanner is pushed with 50 N, 25 cm from the nut. What is the moment, in Nm?" — She has not been told that the nut is the pivot for a spanner. That is first said in a wrong-answer reply at 3.14.
- **1.9** [new, minor] ""Use a longer spanner and push at its end" / "Use a shorter spanner" / "Push closer to the nut"" — The two wrong options say the same thing and the right one is the odd one out and the longest, so she can pick it without thinking about M = F d.
- **1.10** [P4, minor] "Yes: the same force further from the pivot gives a bigger moment." — Key point 1 also says a bigger force gives a bigger moment. That is never told or asked before the key point closes; only the distance half is covered.
- **1.10** [new, minor] "Yes: your line makes the point. You have this: The moment is the turning effect of a force." — Stilted feedback that reads like a marking scheme, not a teacher. The same wording comes back at 2.7.
- **2.1** [F5, minor] "clockwise, the way a clock's hands turn, or anticlockwise, the other way" — Two new terms arrive in one message. Both are explained, so it is a small point.
- **2.2** [new, minor] "the total clockwise moment about the pivot equals the total anticlockwise moment about that pivot" — "Total" is never explained (adding the moments when there is more than one force on a side) and never practised. It is also a long, dense sentence to meet cold.
- **2.2b** [P6, a teacher would correct it] "On a see-saw, each person's weight, the pull of gravity on them in newtons, pushes their side down. A weight left of the pivot turns it anticlockwise; one on the right, clockwise." — Three ideas in one message: what weight is (tucked into an aside), that it pushes the side down, and which side turns which way. The last needs a picture to follow.
- **2.3** [F1, minor] "Here is a worked example. Tap "Show the first step" under it to see each step in turn." — The same instruction is given word for word at 1.7, 2.3 and 3.3. She needs it once.
- **2.4 wrong answer 3.33** [new, minor] "Not quite: 1.2 m. The two moments must be equal: 300 × 2 = 600 Nm, so 500 × d = 600 and d = 1.2 m." — The reply is identical to the one for "2" and does not tell her what she did wrong, which was to multiply by the wrong weight and divide by the other.
- **2.6** [new, minor] "A 2 N weight hangs 30 cm to the left of the pivot. What force, hung 20 cm to the right, balances it, in N?" — "Weight" is now used for an object, just after being defined as a force, and "a force, hung" is odd wording. This is also the first time she must find a force rather than a distance, with no example of that.
- **3.2b** [F2, a teacher would correct it] "The lever passes that same moment on to the load." — "That same moment" refers to the previous message; nothing in this message says which moment is meant.
- **3.3** [new, minor] "Your moment: M = F d = 50 × 2 = 100 Nm. ... The load gets the same moment: F × 0.5 = 100." — F stands for her 50 N push in one step and for the unknown force on the load in the next. A beginner may read it as the same F.
- **3.6** [P16, would confuse or mislead her] "A bigger gear's teeth are further from its centre, so that force gives it a bigger moment, and it turns more slowly." — "And it turns more slowly" is tacked on with no reason, so it reads as if the bigger moment causes the slower turning. The message also carries three ideas at once and never says the gear's centre is its pivot.
- **3.7 don't know (first time)** [P7, a teacher would correct it] "The small gear has fewer teeth, so it has to go round more times for each turn of the large gear." — The real reason for the speed difference appears for the first time in a hint that only some learners see. It is a new idea, not an easier step, and it should have been taught at 3.6.
- **3.8 don't know** [new, a teacher would correct it] "A good line would be: levers and gears pass on the turning effect of a force: a lever turns a small force far from the pivot into a big force near it." — The question was only about levers, but the model line starts with gears. It also does not match the two points she is marked against, and has two colons in one sentence.
- **3.8 all of them** [new, minor] "Yes: your line makes every point. You have this: You push far from the pivot, so a small force makes a big moment. You have this: The load is near the pivot, so it gets a big force." — "You have this:" twice in a row reads like a machine. "In one line" also asks for two separate points, which is a lot for one line.
- **3.9** [new, minor] "Now for a short quiz: six questions on the whole lesson." — The quiz has no balanced-moment calculation and nothing on levers, so it is not the whole lesson. The hardest ideas go untested.
- **3.12** [new, minor] ""Along the force arrow"" — No "force arrow" has been mentioned or shown in the lesson. Both wrong options also get exactly the same reply, so neither says why her choice was wrong.
- **3.15** [F1, minor] "Quiz, question 6 of 6: a large gear turns a small gear. How does the small gear turn?" — This is the same question, with the same stem, as 3.7 only eight steps earlier. It tests memory of that answer, not understanding.
- **3.15 don't know (first time)** [new, minor] "Touching gears push each other round. Which way does the second one go?" — The hint only helps with direction. It gives nothing on faster or slower, which is the other half of every option.
- **Summary, point 3 of 3** [new, minor] "Levers and gears pass on the turning effect of a force: a lever turns a small force far from the pivot into a big force near it." — Gears are named and then nothing is said about them, so the summary leaves out what she learned about big and small gears.
- **whole script** [P14, a teacher would correct it] "Button: Next" — There is nothing hands-on and no picture is mentioned anywhere: no see-saw to balance, no spanner to lengthen, no gears to turn. Perpendicular distance, clockwise and anticlockwise, and gears all need a diagram, and she may get bored (M1).

## Overall

Not quite as it is. The calculation steps in key points 1 and 2 are sound and well sequenced, with good worked examples, wrong-answer replies and a summary. But the lesson opens with two questions from another lesson that a first-time learner cannot answer, and perpendicular distance is explained in muddled words with no picture. The gears message (3.6) says the big gear turns more slowly without giving the reason, which only appears in a hint. I would cut or move the opening recap, add diagrams and something to try, and fix 1.6, 3.6 and the 3.8 model line before she uses it.
