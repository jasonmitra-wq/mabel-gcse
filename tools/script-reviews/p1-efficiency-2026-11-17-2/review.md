# Review: p1-efficiency (2026-11-17)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 30 findings, cost $0.5416.

## Counts (made in code from the findings)

- new: 16
- F3: 6
- F8: 2
- L3: 1
- F1: 1
- P6: 1
- F5: 1
- P13: 1
- P14: 1

## Findings

- **1.1a** [L3, would confuse or mislead her] "First, two quick questions from earlier lessons." — The lesson opens by testing her on earlier lessons. She is meeting the topic for the first time and has not been told any of this, so the first thing she meets is a question she can only guess.
- **1.1a** [F3, would confuse or mislead her] "In the thermal store of the surroundings" — "Thermal store" and "surroundings" appear on the right-answer button and are never explained anywhere in the lesson. The first don't-know hint ("warms the air around it") does not connect to that wording either.
- **1.1a wrong answer "It is destroyed"** [F3, a teacher would correct it] "The energy a machine wastes is dissipated into the thermal store of the surroundings." — "Dissipated" is used without its meaning. Only the right-answer reply says it means spread out, so a girl who picks wrong never learns the word.
- **1.1a wrong answer "Back in the battery"** [F3, a teacher would correct it] "The energy a machine wastes is dissipated into the thermal store of the surroundings." — "Dissipated" is again used with no meaning given on this branch.
- **1.1a don't know (again)** [F3, would confuse or mislead her] "That's fine. The energy a machine wastes is dissipated into the thermal store of the surroundings." — The pupil who is most stuck gets the sentence with two unexplained terms, "dissipated" and "thermal store", and no plain-English version. The skip branch is the same.
- **1.1b** [new, a teacher would correct it] "Second: oil is put between the moving parts of a machine. What does it reduce?" — This is billed as an earlier-lesson question but is really this lesson's key point 4, asked before anything has been taught. "Friction" and "air resistance" have not been explained.
- **4.1** [F1, a teacher would correct it] "Lubrication, putting oil between moving parts, reduces friction, so less energy is wasted by heating" — This is the same fact, in almost the same words, as the reply at 1.1b ("oil reduces friction, so less energy is wasted by heating the parts"). She is told it as new when she has already had it.
- **1.2** [F3, a teacher would correct it] "A lamp is supplied with 100 J and gives out 20 J as light." — "J" is used without saying it stands for joules, the unit of energy. The word "joules" first appears at 1.6 and is never linked to the symbol J.
- **1.6** [P6, minor] "Efficiency has no unit, because it is joules divided by joules. To give it as a percentage, multiply by 100: the lamp's 0.2 is 20%." — Two separate ideas, no unit and converting to a percentage, share one bubble. Each deserves its own message.
- **1.8** [new, a teacher would correct it] "Which of these efficiencies is impossible?" — She has not been told that efficiency cannot exceed 1, nor that energy cannot be created, which the reply relies on. She could reason it out, but the idea needs teaching first or the question needs presenting openly as a prediction.
- **1.8b** [new, a teacher would correct it] "Many other devices also waste energy as sound." — The "also" has nothing to attach to. Straight after the heater it reads as if the heater wastes energy as sound, or as if sound had been mentioned before. It is a second, unconnected idea bolted onto the heater message.
- **1.8b** [new, a teacher would correct it] "An electric heater is close to 100% efficient, because heating is the job it is for." — The reasoning is too thin for a first-timer. It needs to say that in other devices the wasted energy ends up heating things, and in a heater that heating is the useful output, so almost nothing counts as waste.
- **1.9** [new, would confuse or mislead her] "A good line would say: useful output energy divided by total input energy." — The only marking point is the equation, but 1.5 taught the meaning as "the share, or fraction, of the energy supplied that is transferred usefully". If she writes that correct definition she may be told her line misses the point.
- **1.9 (Some)** [new, minor] "Your line gets this right: <the points it makes>. A full line also says: <the points it misses>." — There is only one marking point, so the "some" reply cannot sensibly fire. If it does, it will read oddly.
- **2.3** [F5, minor] "Power is the energy transferred each second, measured in watts (W)." — Two new terms, power and watt, arrive in one short message with no example to anchor them, and are used in a calculation two steps later.
- **2.3b** [new, would confuse or mislead her] "It gives the same answer, because both powers are for the same second." — This is muddled. "The same answer" as what, and what does "for the same second" mean? It should say that power is energy each second, so dividing the two powers is the same as dividing the two energies transferred in one second.
- **2.4** [new, minor] "A modern lamp is supplied with 10 W, and 9 W of that comes out as light." — A 90% efficient lamp is unrealistic, since real LED lamps are far below this, and a teacher would not want her to carry that figure away. "Supplied with 10 W" is also loose wording for a power input.
- **2.7b** [P13, would confuse or mislead her] "for example 0.5 = 100 ÷ total. Multiply both sides by the total, then divide both sides by 0.5: total = 100 ÷ 0.5 = 200 J." — The hardest rearrangement, with the unknown on the bottom, is squeezed into one bubble with bare numbers and no device or context. It has no step-by-step worked example card like the easier cases had, and most 15-year-olds would be lost here.
- **2.8** [new, a teacher would correct it] "A motor is 80% efficient and transfers 400 J usefully. What is the total input energy, in joules?" — Her first try at finding the total input also requires converting a percentage. Two new steps are tested together, each only told once and never practised.
- **2.9 (Some)** [new, minor] "Your line gets this right: <the points it makes>. A full line also says: <the points it misses>." — Again there is only one marking point, so a "some" reply makes no sense here.
- **3.3** [F3, minor] "Modern bulbs are called LEDs, short for light-emitting diodes." — "Diode" is not explained. The expansion adds a new unknown word without helping her.
- **3.4** [new, minor] ""Motor B: it gives out more useful power" / "Motor A" / "They are the same"" — Only the wrong option carries a reason, so the bare "Motor A" stands out as the answer without her doing the calculation.
- **3.5** [F8, a teacher would correct it] "most of the energy from its fuel heats the engine and the exhaust. An electric motor stays much cooler." — The message just before (3.4b) hands her the answer to "Which is likely to be more efficient, a petrol engine or an electric motor?". The right button then repeats the reason, so there is nothing left to think about.
- **3.6** [new, a teacher would correct it] "A full line also says: <the points it misses>. ... "the higher efficiency wastes a smaller share of its input"" — The question asks how you decide. A fully correct answer ("work out each efficiency and pick the higher one") would be told it is missing the point about wasting a smaller share, which the question did not ask for.
- **4.4** [F8, a teacher would correct it] "With less waste, less energy has to be supplied for the same job." — 4.3 states the answer immediately before 4.4 asks for it. The right button ("It wastes less energy, so less electricity has to be supplied") is almost the same sentence.
- **4.4 wrong answer "It saves energy"** [new, would confuse or mislead her] "Not quite: "saves energy" is too vague, because energy is never used up." — "It saves energy" is a reasonable everyday answer, and she will feel unfairly marked wrong. The reason given does not follow, and "energy is never used up" has not been taught in this lesson.
- **4.5 (All of them)** [new, a teacher would correct it] "Yes, your line has it: lubrication, insulation or better parts; and so less energy is wasted." — She was asked for one way and gave one, but the reply reads back the whole list in a clumsy sentence ("; and so"). It does not fit what she wrote.
- **4.7** [new, minor] "Not quite: 75%. 150 ÷ 200 = 0.75, and 0.75 × 100 = 75%." — If she types 0.75 in the quiz she gets a flat "Not quite" and loses the mark. Earlier (2.2, 2.4) the same slip earned "Nearly: ... as a decimal". The numbers also repeat Motor A from 3.4 and the 75% answer from 2.1.
- **4.9** [new, minor] "Not quite: 40%. 20 ÷ 50 = 0.4, and 0.4 × 100 = 40%." — As at 4.7, there is no reply for the decimal answer 0.4, so a nearly-right answer is treated as plain wrong.
- **whole lesson** [P14, a teacher would correct it] "Button: Next" — There is nothing hands-on anywhere in 47 steps. No picture, energy-flow diagram or widget is mentioned, only text bubbles, Next buttons and sums. I would expect her to drift (Mabel's M1).

## Overall

No, not as it is. The calculation core (the lamp example, the worked-example cards and the practice at 2.2 to 2.6) is sound and well paced, but the lesson opens with two questions she cannot answer, built on unexplained terms ("thermal store", "dissipated", "J"). The hardest step, finding the total input at 2.7b, is crammed into one bubble with no worked example. Several replies do not fit a good answer (1.9, 3.6, 4.4 "It saves energy", 4.5), two questions are answered by the message just before them (3.5, 4.4), and the power sentence at 2.3b is muddled. With those fixed and at least one picture or interactive energy diagram added, I would let her use it.
