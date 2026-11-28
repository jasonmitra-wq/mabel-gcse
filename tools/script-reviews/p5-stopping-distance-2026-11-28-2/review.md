# Review: p5-stopping-distance (2026-11-28)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 34 findings, cost $0.5870.

## Counts (made in code from the findings)

- new: 15
- F3: 4
- F1: 3
- L3: 2
- P6: 2
- P7: 1
- F8: 1
- P16: 1
- F5: 1
- P13: 1
- P4: 1
- F10: 1
- P14: 1

## Findings

- **1.1a** [L3, a teacher would correct it] "First, two quick questions from the last lesson. A resultant force of 20 N acts on a 4 kg mass. What is its acceleration?" — The lesson opens by testing F = m a, which this lesson has not taught. A first-time learner who knows only what the lesson has told her cannot answer it, and it uses the equation before stating it (also F10).
- **1.1a** [F3, a teacher would correct it] "A resultant force of 20 N" — "Resultant force" is used without being explained anywhere in the lesson.
- **1.1b** [L3, a teacher would correct it] "Second: which law of motion says that two objects push on each other with forces of the same size in opposite directions?" — The laws of motion are assumed and never taught here, and the third law is not used again in this lesson. She can only guess.
- **1.1b don't know (first time)** [P7, minor] "Think of the law about pairs of forces between two objects." — The hint only restates the question. If she does not know the laws by number, it is no easier.
- **1.7** [F8, minor] "A car's thinking distance is 12 m and its braking distance is 24 m. What is its stopping distance, in m?" — The message just before was only "Stopping distance = thinking distance + braking distance", so the question asks for nothing more than adding the two numbers.
- **1.10** [new, minor] "Both parts grow with speed. A typical car's stopping distance is about 23 m at 30 mph (about 13 m/s) and about 96 m at 70 mph (about 31 m/s)." — It states that braking distance grows with speed before anything has been said about why. It also packs four figures in two different speed units into one message.
- **1.11** [new, would confuse or mislead her] "A graph shows stopping distance against speed for a car. The line curves upwards, getting steeper as the speed goes up. What does that tell you?" — She is asked to interpret a graph that is only described in words, with no picture. The lesson has not taught her what a steepening curve means.
- **1.11 don't know (first time)** [new, would confuse or mislead her] "Compare how much the distance rises over the first 10 mph with how much it rises over the last 10 mph." — There is no graph or table of values for her to compare, so she cannot do what the hint asks.
- **1.12** [new, minor] "Yes: your line makes every point. You have this: The thinking distance, while the driver reacts. You have this: The braking distance, while the brakes slow the car." — The feedback reads like a marking sheet in sentence fragments, not a teacher's reply. "You have this:" twice in a row is stilted.
- **2.1** [P16, minor] "For most people it is between about 0.2 s and 0.9 s." — The lesson file says this range is for an alert driver. "Most people" then clashes with 2.3, where 0.9 s is the tired driver's time.
- **2.6** [new, minor] "A fall of about 20 cm means a reaction time of about 0.2 s." — She is not told how a fall distance is turned into a time (a conversion chart). The single example invites her to think 10 cm means 0.1 s, which is wrong.
- **2.6b** [F5, minor] "Repeating the test and taking the mean, the average, gives a more reliable result: one you can trust more." — Two new terms, "mean" and "reliable", arrive in one message. How to work out a mean is not said before 2.7 asks for one.
- **2.8** [new, minor] "You have this: A longer reaction time, from tiredness, alcohol, drugs or distractions, makes it longer." — The same stilted "You have this:" feedback. It credits her with the whole list even if she named only one cause.
- **3.3** [new, would confuse or mislead her] "A car going twice as fast has four times as much energy of movement to get rid of. So, for the same braking force, its braking distance is four times as long." — Both steps are bare assertions. She is not told why the energy is four times as big, nor why four times the energy means four times the distance (work = force × distance is never given).
- **3.6** [new, a teacher would correct it] "Which of these would make a car's braking distance longer?" — This question comes before 3.5 and 3.5b, which are the steps that teach about road and tyre condition. Worn tyres have not been mentioned yet, so she can only answer by elimination.
- **3.5b** [F1, a teacher would correct it] "Worn tyres, with shallow grooves (tread), grip the road less" — The reply to 3.6 has just told her "worn tyres grip the road less". The fact is repeated because the question was placed before the teaching.
- **3.5b** [P6, minor] "Worn tyres, with shallow grooves (tread), grip the road less, and worn brakes apply less force. Both mean the car needs further to stop." — Two separate factors (tyres and brakes) and a new word (tread) share one message.
- **3.8 (all)** [new, would confuse or mislead her] "Yes: your line makes the point. You have this: It names two of these: a higher speed, wet or icy roads, worn tyres, worn brakes." — She is shown the marker's instruction ("It names two of these") as if it were feedback. It makes no sense read as a reply to her.
- **3.8 (none)** [new, would confuse or mislead her] "Here is what a good line says. It names two of these: a higher speed, wet or icy roads, worn tyres, worn brakes." — Again the marking criterion is shown instead of a model answer, and she is not told plainly that her line missed.
- **4.3** [F3, a teacher would correct it] "To the thermal store of the brakes" — "Thermal store" appears in the answer option and is never explained anywhere in the lesson.
- **4.3 right answer** [F3, a teacher would correct it] "Yes: the work done by friction heats the brakes." — "Work done" is used before the lesson has said anything about what doing work means.
- **4.3** [new, a teacher would correct it] "As a car brakes to a stop, where does most of its kinetic energy go?" — The question is asked before 4.2, the step that teaches the answer. Nothing so far has told her that brakes heat up or what an energy store is.
- **4.2** [F1, a teacher would correct it] "It moves the car's kinetic energy into the thermal store of the brakes, so the brakes warm up." — Every reply to 4.3 has just said this. "Here is how" then repeats it without really explaining what "does work" means.
- **4.4** [P6, would confuse or mislead her] "Kinetic energy is Ek = ½ m v²: m is the car's mass in kg, v its speed in m/s and Ek is in joules. Double the speed and Ek is four times as big, so the brakes must work over four times the distance." — One message carries an equation, three symbols, the doubling rule and the link to braking distance. The last step again leans on work = force × distance, which is never taught.
- **4.4** [F1, minor] "Double the speed and Ek is four times as big, so the brakes must work over four times the distance." — This is the same fact as 3.3 and 3.4 (double the speed, four times the braking distance), said again.
- **4.4** [P13, a teacher would correct it] "Kinetic energy is Ek = ½ m v²" — The equation is given with no worked example and no practice. She never puts numbers into it to see why doubling v gives four times Ek.
- **4.5b** [P4, minor] "Very large decelerations are dangerous. The brakes can overheat, and the tyres can skid, so the driver loses control." — The key point's teaching about large forces on passengers, and why seatbelts and crumple zones matter, is left out. The key point would still be ticked.
- **4.7** [F10, a teacher would correct it] "Find the deceleration: change in velocity ÷ time = 20 ÷ 4 = 5 m/s²." — The deceleration equation is first met inside a worked-example step. It is never stated beforehand with its symbols and units, and 4.5 only said "how quickly the car slows down".
- **4.7** [F3, minor] "change in velocity ÷ time" — "Velocity" appears for the first time here without comment. The lesson has said "speed" throughout.
- **4.9** [new, minor] "You have this: The friction in the brakes does work. You have this: The car's kinetic energy goes to the thermal store of the brakes." — The same stilted checklist feedback as at 1.12 and 2.8, built on "does work" and "thermal store", which were never explained.
- **4.14 wrong answer (twice as long)** [new, minor] "Not quite: braking distance goes up with speed squared, so it becomes four times as long." — "Goes up with speed squared" has not been said in words before. She has only been told "double the speed, four times".
- **4.15 right answer** [new, minor] "Yes: less friction means less braking force." — 3.1 defined braking force as the force the brakes apply. The lesson never joins that to the tyre-road friction, so she may wonder how ice changes what the brakes do.
- **4.16** [new, minor] "Friction does work, filling their thermal store" — "Filling" a thermal store is odd wording she has not met, and "thermal store" is still unexplained.
- **whole script (e.g. 1.2 to 1.6, 4.4 to 4.6)** [P14, a teacher would correct it] "Button: Next" — There is nothing hands-on and no picture mentioned anywhere: no stopping-distance graph, no car to try at different speeds. Long runs of told messages are followed only by Next, so she is likely to get bored (also M1).

## Overall

No, not as it is. Key points 1 and 2 are mostly sound and the calculations are all correct, but the lesson opens with recall questions on physics it has not taught, and the graph question at 1.11 has no graph for her to read. In key points 3 and 4 two questions (3.6 and 4.3) come before the steps that teach their answers, "thermal store" and "work done" are never explained, and the four-times rule is asserted, not built up. The own-words feedback at 3.8 shows her the marking instruction, and there is nothing hands-on, so I would want these fixed before she uses it.
