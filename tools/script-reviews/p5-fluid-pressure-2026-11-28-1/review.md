# Review: p5-fluid-pressure (2026-11-28)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 36 findings, cost $0.5336.

## Counts (made in code from the findings)

- new: 15
- F3: 7
- F8: 4
- F1: 3
- L3: 2
- P6: 2
- F10: 1
- F2: 1
- P14: 1

## Findings

- **1.1a** [L3, would confuse or mislead her] "First, two quick questions from earlier lessons. A 40 N force acts 0.5 m from a pivot. What is its moment?" — The lesson opens by testing moments, which she has not been taught here and which this lesson never uses. A first-time learner can only guess, and may start by getting one wrong.
- **1.1a** [F3, a teacher would correct it] "A 40 N force acts 0.5 m from a pivot. What is its moment?" — "Moment" and "pivot" are used with no explanation. The only help is the bare formula after she says she does not know.
- **1.1a** [F10, minor] "Yes: M = F d = 40 × 0.5 = 20 Nm." — The symbols M, F and d are used without saying what each one stands for or its unit. The same bare equation appears in the "still doesn't know" and skip replies.
- **1.1b** [L3, would confuse or mislead her] "Second: a block has a mass of 2 kg and a volume of 0.001 m³. What is its density?" — This assumes she already knows density and its equation. Nothing in the lesson has told her what density is, so she cannot answer from what she has been given.
- **1.3** [F3, minor] "The particles of a fluid move about and hit every surface they touch." — "Particles" is used as if she already has the particle picture of liquids and gases. One sentence saying a fluid is made of tiny moving particles would fix it.
- **1.7** [new, a teacher would correct it] "A 500 N box rests on a face 0.5 m long and 0.4 m wide. What pressure does it put on the floor, in Pa?" — Her first practice question needs an extra step (area = length × width) that the worked example did not show. "Rests on a face" is also awkward wording she may not follow.
- **1.7** [new, minor] "A 500 N box" — She has not been told that the box's weight is the force pressing on the floor. "A 500 N box" will not obviously mean F = 500 N to a beginner.
- **1.9** [F1, minor] "It pushes at right angles on every surface it touches." — This repeats 1.3 ("hit every surface they touch… push on the surface at right angles to it"). Only "in every direction" is new, and it arrives after the practice instead of with the idea.
- **1.10** [new, a teacher would correct it] "The AI checks which of these points it makes: "the force normal to a surface", "divided by the area of the surface"." — The lesson defined pressure in 1.4 as "the force on each square metre of a surface". If she repeats that, she may be told "Still needed: divided by the area", marking down the lesson's own definition.
- **1.10 all of them** [new, minor] "Yes: your line makes every point. You have this: the force normal to a surface. You have this: divided by the area of the surface." — This is stilted, machine-like feedback. "You have this" twice, followed by sentence fragments, does not read as a teacher talking, and the same template is reused in 2.8, 3.7 and 4.5.
- **1.10 none** [new, a teacher would correct it] "Here is what a good line says. The force normal to a surface. Divided by the area of the surface." — The model answer is given as two broken fragments, not one sentence. She never sees the good line written out whole on this branch.
- **2.1** [F3, a teacher would correct it] "the taller the column of water above you" — "Column of water" is used without saying what it means (the water directly above you, like a tall stack). The whole of key point 2 depends on this picture.
- **2.2** [F3, a teacher would correct it] "Pressure also grows with the density of the liquid. A denser liquid has more mass in each column" — Density has never been explained in this lesson, only quizzed as recall. "Denser" needs a line such as "more mass packed into each cubic metre".
- **2.3** [F3, a teacher would correct it] "gravitational field strength" — The term is used with no explanation. She is not told that g is the weight of each kilogram, about 9.8 N/kg on Earth.
- **2.3** [F2, a teacher would correct it] "You are given it." — Given what, and where? The line means the equation is on the exam sheet, but it does not say so. Exam talk also sits oddly for someone meeting the topic for the first time.
- **2.3** [P6, a teacher would correct it] "The equation is p = h ρ g: pressure = height of the column × density of the liquid × gravitational field strength. h is in metres (m), ρ (rho) in kg/m³ and g in N/kg. You are given it." — One bubble carries a new equation, three symbols (one a Greek letter), three units and an exam note. That should be split, as p = F ÷ A was across 1.4 and 1.5.
- **2.5** [new, minor] "in the same pool" — The worked example never mentioned a pool, only "water" at 2 m. "The same pool" points to something she has not been given.
- **2.7** [new, would confuse or mislead her] "Not quite: p = h ρ g has no width in it. Same depth and same liquid means the same pressure." — The lesson has just taught that pressure comes from the weight of water above, so "the widest one" is a sensible answer. The reply only points at the formula and never says that a wider container has more weight spread over more area, so each square metre carries the same.
- **2.8 none** [new, minor] "Here is what a good line says. There is a taller column of liquid above. So more weight pushes down." — The model answer is again given as chopped fragments, not the single good line the question asked for.
- **3.2** [F3, a teacher would correct it] "gives a resultant force upwards on the object. This upward force from a liquid is called upthrust." — "Resultant force" is used unexplained, in the same message that introduces the new word "upthrust".
- **3.3** [F8, a teacher would correct it] "A brick is held under water. Why is there an upthrust on it?" — The answer was stated in the two messages just before ("the water pushes up on the bottom harder than it pushes down on the top"). She only has to pick out the sentence she has just read.
- **3.4** [new, a teacher would correct it] "It sinks when its weight is bigger than the upthrust, even once it is fully under." — "Even once it is fully under" will not mean anything to her. She has not been told that upthrust grows as more of the object goes under and stops growing once it is fully submerged.
- **3.5** [new, a teacher would correct it] "An object less dense than the liquid floats, and one denser than the liquid sinks." — The density rule is set down beside the upthrust-and-weight rule with nothing linking them. Later, 3.7 says "which happens when it is less dense" as though this had been explained.
- **3.6** [F8, a teacher would correct it] "A large log floats, but a small stone sinks. Why?" — The message immediately before said "An object less dense than the liquid floats, and one denser than the liquid sinks". The right option is that sentence again.
- **3.7 some** [new, would confuse or mislead her] "Partly there. You have this: when the upthrust equals its weight. Still needed: when it is less dense than the liquid." — "When the upthrust equals its weight" is a complete, correct one-line answer. She is told she is only partly there because she did not also give a second, different answer.
- **3.7 none** [new, minor] "Here is what a good line says. When the upthrust equals its weight. When it is less dense than the liquid." — Two disconnected fragments are offered as "a good line". It reads as two separate answers, with nothing to say how they relate.
- **4.2** [F3, minor] "Air molecules are always hitting every surface." — The lesson has said "particles" until now and switches to "molecules" without saying they are the particles of the air.
- **4.3** [P6, minor] "Higher up, there is less air above a surface, so the weight of air above it is smaller. So the pressure falls as height increases. The air also gets less dense higher up." — Three ideas are in one message: less air above, pressure falls with height, and the air gets less dense. The last is tacked on with no explanation.
- **4.4** [F8, a teacher would correct it] "A climber goes up a high mountain. Which is true of the air pressure at the top?" — The message just before said "the pressure falls as height increases" and gave the reason. The right button repeats both.
- **4.5** [F8, a teacher would correct it] "In one line: why does air pressure fall as you go higher?" — The right option in 4.4 ("It is lower: there is less air above") and its reply ("less air above means less weight of air, so lower pressure") have just given this answer word for word. She only has to copy it.
- **4.5 none** [new, minor] "Here is what a good line says. There is less air above. So less weight of air pushes down." — The model answer is again in fragments, and it does not mention the pressure she was asked about.
- **4.7 don't know (first time)** [new, a teacher would correct it] "Pressure has its own unit, named after a scientist." — She was never told the pascal is named after a scientist. The newton is named after one too, so the hint does not separate the options.
- **4.8 "100.5 Pa"** [new, minor] "Not quite: divide the force by the area: 100 ÷ 0.5 = 200 Pa." — The reply does not fit the mistake. She added the two numbers, and it should say so, as the 1.1a reply does with "multiply, do not add".
- **4.11** [F1, minor] ""More pressure on its bottom than on its top" / "Water pushing only upwards" / "The object losing weight"" — The quiz question reuses 3.3 with the same three options barely reworded. It tests whether she remembers the button, not whether she understands.
- **4.12** [F1, minor] "which is true of atmospheric pressure higher above the ground?" — This is the same question as 4.4, asked a few minutes earlier, and as 4.5. It is the third time she is asked the same thing in one key point.
- **whole lesson** [P14, a teacher would correct it] "Button: Next" — There is nothing hands-on and no picture anywhere in the script: no column of water, no three containers, no arrows on a submerged block. This topic depends on diagrams, and key points 3 and 4 are read-then-click with no calculation or activity, so she is likely to drift.

## Overall

No, not as it stands. The physics is mostly sound and the worked examples and calculation practice are fine, but the lesson opens with two recall questions on moments and density that a first-time learner cannot answer, and then relies on density, column, gravitational field strength and resultant force without explaining them. The containers question (2.7) is answered only by pointing at the formula, which will leave her sensible "more water, more weight" idea uncorrected, and 3.7 tells her a correct answer is only "partly there". Key points 3 and 4 mostly ask her to repeat the sentence she has just read, and there is no picture or hands-on activity, so I would want these fixed before she uses it.
