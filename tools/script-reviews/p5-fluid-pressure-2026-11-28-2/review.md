# Review: p5-fluid-pressure (2026-11-28)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 28 findings, cost $0.5949.

## Counts (made in code from the findings)

- new: 14
- F3: 5
- P6: 3
- F1: 2
- L3: 1
- F12: 1
- F8: 1
- P14: 1

## Findings

- **1.1a** [L3, would confuse or mislead her] "First, two quick questions from earlier lessons. A 40 N force acts 0.5 m from a pivot. What is its moment?" — The lesson opens by testing moments, which this lesson has not taught and never uses. A first-time learner cannot answer it from anything she has been told, and it has nothing to do with pressure.
- **1.1a** [F3, a teacher would correct it] "A 40 N force acts 0.5 m from a pivot. What is its moment?" — "Pivot" and "moment" are used with no explanation anywhere in the lesson.
- **1.1b** [F3, a teacher would correct it] "Second: a block has a mass of 2 kg and a volume of 0.001 m³. What is its density?" — She is asked to calculate density here, but the lesson only says what density is at 2.2. The term is used, and tested, before it is explained.
- **1.3** [P6, a teacher would correct it] "A fluid is made of tiny particles that move about and hit every surface they touch, from every side: up, down and sideways. Their hits push on each surface at right angles to it. At right angles to a surface is called normal to it." — Three ideas in one message: particles hitting surfaces, the push being at right angles, and the new word "normal". These should be separate steps.
- **1.7** [new, a teacher would correct it] "The face it rests on is 0.5 m long and 0.4 m wide. What pressure does it put on the floor, in Pa?" — Her first practice question is harder than the worked example. She must first work out an area from two lengths, a step the example never showed.
- **1.7 any other wrong answer** [new, a teacher would correct it] "Not quite: 2500 Pa. Area = 0.5 × 0.4 = 0.2 m², and p = 500 ÷ 0.2 = 2500 Pa." — A wrong answer is met with the full answer straight away, with no hint and no second try. The same happens on the other number questions (2.5, 2.6), so she never has to correct her own slip.
- **1.10 none** [new, a teacher would correct it] "Here is what a good line says. Pressure is the force on each square metre of a surface: force ÷ area." — The reply ignores whatever she wrote. If her line was half right or held a wrong idea, she is not told which part was wrong. The same reply is used at 2.8, 3.7 and 4.5.
- **1.10 all of them** [new, minor] "Yes: your line makes the point. You have this: Pressure is the force on each square metre of a surface: force ÷ area." — Stilted stock wording, used identically on all four own-words steps (1.10, 2.8, 3.7, 4.5). "You have this:" followed by the model sentence reads oddly.
- **2.3** [F3, a teacher would correct it] "pressure = height of the column × density of the liquid × gravitational field strength" — "Gravitational field strength" and the symbol ρ both appear here unexplained. The meaning ("gravity's pull on each kilogram") only comes in the next message.
- **2.3b** [P6, minor] "h is in metres (m); ρ (rho), the density, is in kg/m³; g, gravity's pull on each kilogram, is in N/kg. You are given this equation in the exam." — Three symbols, three units, a new Greek letter and an exam note packed into one message. It also never says p is in pascals here.
- **2.7** [new, a teacher would correct it] "Three containers of different shapes are filled with water to the same depth. Where is the pressure at the bottom biggest?" — The script shows no picture and does not describe the shapes, yet the options are "widest" and "narrowest". She has to imagine the containers herself.
- **2.7 "In the widest one"** [new, a teacher would correct it] "a wider container holds more water, but it is spread over a bigger bottom, so the force on each square metre is the same" — This argument only works for straight-sided containers. For containers of different shapes the weight of water is not in proportion to the area of the bottom, so the reason given is not sound physics.
- **2.7 "In the narrowest one"** [new, a teacher would correct it] "a narrow container holds less water, but over a smaller bottom, so the force on each square metre is the same" — The same imprecise argument: it only holds for straight sides, not for "different shapes". Better to say that only the height of water above the point matters.
- **3.3 right** [F3, a teacher would correct it] "Yes: its bottom is deeper, so the pressure there is bigger, giving an upward resultant force." — "Resultant force" has not been explained. The later message 3.2 says "overall force" instead, so she meets the technical term first, with no meaning given.
- **3.3 still doesn't know** [F3, a teacher would correct it] "The bottom is deeper, so the pressure there is bigger than on the top, which gives a resultant force upwards." — "Resultant force" is used again unexplained, this time to a girl who has already said twice that she does not know.
- **3.3 don't know (first time)** [new, minor] "Which surface of the brick is deeper: the top or the bottom? (same buttons)" — The hint asks a new question (top or bottom?) but shows the original three buttons, none of which answers it.
- **3.1** [F1, a teacher would correct it] "Now think of an object under water. Its bottom surface is deeper than its top surface, so the water pushes up on the bottom harder than it pushes down on the top." — This repeats what the reply to 3.3 has just told her about the brick. "Now think of an object under water" also reads as if the brick had never been mentioned.
- **3.4** [P6, would confuse or mislead her] "The more of an object goes under, the bigger the upthrust, until it is fully under. An object floats when the upthrust equals its weight. If its weight is still bigger once it is fully under, it sinks." — Three ideas in one message. The first is stated with no reason: she is not told why more of the object under water gives more upthrust.
- **3.6** [new, a teacher would correct it] "A large log floats, but a small stone sinks. Why do you think that is?" — Nothing so far has linked floating to density, so she cannot answer from what she has been told; that link is only taught afterwards in 3.5. The right button is also the only one that sounds like physics, so she can pick it without understanding.
- **3.5** [new, a teacher would correct it] "An object less dense than the liquid gets enough upthrust before it is fully under, so it floats." — This is asserted, not explained, and "gets enough upthrust before it is fully under" is hard for a 15-year-old to follow. "Floating links to density" also just repeats the reply to 3.6.
- **4.4** [F12, a teacher would correct it] ""It is higher: it is closer to space" / "It is the same: air is everywhere" / "It is lower: there is less air above"" — The right option contains the explanation ("there is less air above"), which the lesson then teaches in 4.3 and asks her to give in 4.5. The buttons hand her the reason.
- **4.3** [F1, minor] "Higher up, there is less air above a surface, so the weight of air above it is smaller. So atmospheric pressure falls as height increases." — This repeats the reply she has just had to 4.4 ("less air above means less weight of air, so lower pressure").
- **4.5** [F8, minor] "In one line: why does air pressure fall as you go higher?" — The answer has been given three times just before it: in the 4.4 button, in the 4.4 reply and in 4.3. She only has to copy it out.
- **4.3b** [new, would confuse or mislead her] "The air also gets thinner, or less dense, higher up, because there is less air above pressing down on it." — "Thinner" here means less dense, but 4.1 and quiz question 6 use "thin" for a layer that is not very deep. One word with two meanings in the same key point will muddle her.
- **4.2** [new, a teacher would correct it] "They are always hitting every surface, and their hits make a pressure called atmospheric pressure." — The lesson gives two accounts of pressure and never connects them: molecules hitting surfaces (1.3, 4.2) and the weight of fluid above (2.1, 4.3). She may fairly ask which one it is.
- **4.11** [new, minor] "A solid object less dense than water" — "Solid" is confusing just after she was told a hollow steel ship floats. It is not clear whether it means "not hollow" or "not a liquid", and it is not needed.
- **4.6** [new, a teacher would correct it] "Now for a short quiz: six questions on the whole lesson." — The quiz does not cover the whole lesson. There is no p = h ρ g calculation, nothing on upthrust, and the only atmosphere question asks whether it is thin, not that pressure falls with height.
- **whole lesson** [P14, a teacher would correct it] "Three containers of different shapes are filled with water to the same depth." — The script has nothing hands-on and shows no pictures: no diagram of the column of water, the three containers or the brick. It is all text and buttons, which is hard going for a first-time learner on a very visual topic.

## Overall

Not as it is. The sums and equations are right, and the don't-know steps do get easier with varied openers, but it opens with a moments question that has nothing to do with the topic and uses "density", "gravitational field strength" and "resultant force" before explaining them. The floating section asserts its key claims without reasons and asks why the log floats before teaching the density link, the container replies use an argument that only holds for straight sides, and "thin" is used in two senses for the atmosphere. I would want those fixed, and at least a picture or something to try added, before she uses it.
