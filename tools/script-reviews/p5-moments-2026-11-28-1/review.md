# Review: p5-moments (2026-11-28)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 35 findings, cost $0.5664.

## Counts (made in code from the findings)

- new: 15
- F3: 5
- F8: 3
- L3: 2
- F1: 2
- P6: 2
- F2: 2
- F10: 1
- F5: 1
- F7: 1
- P14: 1

## Findings

- **1.1a** [L3, would confuse or mislead her] "First, two quick questions from the last lesson. A force of 8 N stretches a spring by 0.04 m. What is its spring constant?" — The first thing she has to do is a calculation on a topic this lesson has not taught. She knows only everyday life, so she cannot answer and starts the lesson by failing.
- **1.1a don't know (first time)** [F10, would confuse or mislead her] "Rearrange F = k e to get k = F ÷ e." — An equation is used without ever saying what F, k and e stand for or their units. "Rearrange" is no help to someone who has never seen it.
- **1.1b** [F3, would confuse or mislead her] "Second: which kind of deformation leaves an object changed for good?" — "Deformation", "elastic", "inelastic" and "proportional" have not been explained anywhere in this lesson. She can only guess.
- **1.2** [F1, minor] "Pushing a door open, turning a nut with a spanner and riding a see-saw all use forces that cause rotation." — The same three examples were given in 1.1 ("opening doors, turning nuts and riding see-saws"), so this says the same thing again.
- **1.5** [F3, minor] "F is the force in newtons (N)" — The newton is used as if she already knows it is the unit of force and roughly how big it is. Nothing in the lesson has told her.
- **1.6** [new, would confuse or mislead her] "The distance d must be measured at right angles from the pivot to the line the force acts along. This is called the perpendicular distance." — This is a hard idea given in one dense sentence with no picture or example. It is never used in any calculation, yet 1.10 and quiz question 3 expect her to have it.
- **1.8** [new, a teacher would correct it] "A spanner is pushed with 50 N, 25 cm from the nut. What is the moment, in Nm?" — Her first practice question hides a centimetres-to-metres conversion that the worked example did not show or warn about. A first-timer will type 1250 and be marked wrong for something she was not taught.
- **1.8 wrong answer (1250)** [new, minor] "Not quite: 12.5 Nm. Change centimetres to metres first" — Every wrong answer gets the full answer at once, here and in 2.4, 2.6 and 3.4. She never gets a hint and a second go, so she does not practise the calculation herself.
- **1.10** [new, a teacher would correct it] "Here is what a good line says. The turning effect of a force. Force times perpendicular distance from the pivot." — The feedback is a list of sentence fragments, not a good line. "You have this: … You have this: …" reads like a mark scheme rather than a teacher.
- **1.10 some** [new, minor] "Partly there. You have this: the turning effect of a force. Still needed: force times perpendicular distance from the pivot." — "What is the moment of a force?" is fully answered by "the turning effect of a force". Telling her she is only partly there for leaving out the equation is unfair to the question asked.
- **2.1** [F5, minor] "clockwise, the way a clock's hands turn, or anticlockwise, the other way" — Two new terms in one message. They are a natural pair and clockwise is explained, so this is a small point.
- **2.2** [F3, a teacher would correct it] "If an object is balanced, the total clockwise moment about the pivot equals the total anticlockwise moment about that pivot." — "Balanced" is never explained as not turning or tipping either way. "Total" moment is introduced with no example of more than one moment on a side.
- **2.3** [F3, a teacher would correct it] "A child weighing 400 N sits 1.5 m to the left of the pivot." — She thinks of weight in kilograms or stones. Nothing has told her that weight is a force measured in newtons and acting downwards, which is what the moment calculation needs.
- **2.3** [new, would confuse or mislead her] "Anticlockwise moment: 400 × 1.5 = 600 Nm." — Nothing says why the child on the left gives an anticlockwise moment and the adult a clockwise one. With no picture she cannot see it, and she is never asked to decide a direction herself.
- **2.3** [new, a teacher would correct it] "Balanced, so 600 × d = 600." — One 600 is the adult's weight in newtons and the other is the child's moment in newton-metres. The matching numbers hide which is which, and "d = 600 ÷ 600" teaches nothing about the rearranging.
- **2.4 wrong answer (3.33)** [F8, a teacher would correct it] "The heavier child must sit closer." — This gives the answer to the very next question, 2.5 ("Which is true of where the heavier person sits?").
- **2.4 wrong answer (2)** [F8, a teacher would correct it] "The heavier child gives a bigger moment at the same distance, so must sit closer" — On this branch too, the answer to 2.5 and its reason are given just before 2.5 asks for them.
- **2.6 don't know (first time)** [new, a teacher would correct it] "Work out the left moment: 2 × 0.3. Then divide it by 0.2." — This is a recipe with no reason. It does not say the right-hand moment must equal the left, and 30 cm becomes 0.3 and 20 cm becomes 0.2 without a word.
- **2.6 wrong answer (2)** [new, minor] "Closer to the pivot needs a bigger force: 0.6 ÷ 0.2 = 3 N." — On this branch the 0.6 appears from nowhere. She is not shown that it is the left moment, 2 × 0.3.
- **2.7 some** [new, a teacher would correct it] "Still needed: about the same pivot." — No first-time learner would add "about the same pivot" unprompted, so a perfectly good answer is marked as partly there. The "none" reply is again fragments ("About the same pivot.").
- **3.1** [new, minor] "A crowbar, a spanner and a wheelbarrow are all levers." — She is not told where the pivot is on any of these. A wheelbarrow's pivot at the wheel is far from obvious, and she may not know what a crowbar is.
- **3.2** [F3, a teacher would correct it] "The load is close to the pivot" — "The load" is used without saying it is the thing the lever is moving or lifting.
- **3.2** [P6, would confuse or mislead her] "You push far from the pivot, so your small force makes a big moment. The load is close to the pivot, so that same moment gives a big force on the load." — Two ideas in one message, and the key step is not explained: why the lever passes "that same moment" to the load. No worked example shows it before 3.4 asks her to calculate it.
- **3.3** [F8, a teacher would correct it] "Where should you push to need the smallest force?" — The message just before said "You push far from the pivot, so your small force makes a big moment", so the answer has just been given.
- **3.3** [F1, minor] "Where should you push to need the smallest force?" — This is the same idea as 1.9 (longer spanner, push at its end), and it is asked again in quiz question 5.
- **3.3 don't know (first time)** [F7, a teacher would correct it] "M = F d. Which d makes the same moment with a smaller F?" — This abstract algebra question is harder than the crowbar question it is meant to make easier.
- **3.6** [P6, a teacher would correct it] "When a small gear turns a bigger one, the big one turns more slowly, but with a bigger moment, because its teeth are further from its centre." — Three ideas in one sentence. Nothing explains why the bigger gear turns more slowly, and the "because" needs the unstated idea that the push on the teeth is the same.
- **3.7 don't know (first time)** [new, would confuse or mislead her] "The small gear's teeth are closer to its centre. Does it go round more or fewer times?" — Teeth being closer to the centre is not why a small gear goes round more times; it has fewer teeth. The hint also asks a more-or-fewer question while showing the same three buttons, none of which says that.
- **3.8 some** [F2, a teacher would correct it] "Still needed: so a small force gives a big force on the load near the pivot." — The fragment opens with "so" and has nothing before it to follow from. The "none" reply is the same broken pair of fragments.
- **3.10 wrong answer (N/m)** [L3, minor] "Not quite: N/m is the unit of a spring constant." — This leans on a topic this lesson never taught her.
- **3.11 don't know (first time)** [new, minor] "M = F d." — A bare equation is not an easier step. It does not tell her which number is F and which is d, or to multiply.
- **3.12 don't know (first time)** [new, minor] "The moment is about the pivot." — The hint is too terse to help. It does not point her towards "at right angles", which is the hard part of the question.
- **3.14 don't know (first time)** [new, minor] "M = F d." — The same bare equation again as the help for a "why" question. It does not say which quantity the long spanner changes.
- **Summary, point 3 of 3** [F2, a teacher would correct it] "You push far from the pivot, so a small force makes a big moment, which gives a big force on the load near the pivot." — The summary line never says it is about a lever, so it reads out of context. Gears, half of key point 3, are missing from the summary altogether.
- **whole script** [P14, a teacher would correct it] "Tutor: The distance d must be measured at right angles from the pivot to the line the force acts along." — The script as written shows no picture and nothing to try, in a topic about see-saws, spanners, perpendicular distance and meshing gears. It is all text, tapping Next and typing numbers, which I would expect to lose her interest and her understanding.

## Overall

No, not as it is. It opens with two questions on springs and deformation that a first-time learner cannot answer, and the hardest ideas (perpendicular distance, which moment is clockwise, why a lever passes on the same moment, why gears change speed) are stated in one line each with no picture and no explanation. Several questions are answered just before they are asked (2.5 after a wrong answer to 2.4, and 3.3 after 3.2), and some don't-know hints are harder or wrong (3.3, 3.7). The core of key point 1 (M = F d, the door example, the spanner question) is sound, so I would let her use it once the opening questions are dropped or taught, diagrams are added and the listed steps are fixed.
