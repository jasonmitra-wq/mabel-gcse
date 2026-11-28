# Review: p5-momentum (2026-11-28)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 34 findings, cost $0.6390.

## Counts (made in code from the findings)

- new: 13
- L3: 3
- P4: 3
- F3: 2
- P6: 2
- F2: 2
- F8: 2
- F1: 1
- F7: 1
- P13: 1
- F5: 1
- F10: 1
- P14: 1
- M1: 1

## Findings

- **1.1a** [L3, would confuse or mislead her] "First, two quick questions from earlier lessons. A 2 kg trolley accelerates at 3 m/s². What is the resultant force on it?" — The lesson opens by testing F = m a, acceleration and resultant force, none of which it has taught. A first-time learner can only guess, and her first experience of the lesson is getting something wrong.
- **1.1b** [L3, would confuse or mislead her] "Second: which of these is a vector, with a size and a direction?" — She has not been told the difference between speed and velocity, so she cannot choose between them from anything the lesson has said. It is written as a revision check.
- **1.1b "Speed" / "Mass" / still doesn't know** [F3, a teacher would correct it] "speed has no direction, so it is a scalar" — The word scalar is used in three replies and is never explained anywhere in the lesson.
- **1.7** [F1, a teacher would correct it] "A quantity with a size and a direction is called a vector quantity." — This is given as a new definition, but 1.1b already said a vector has a size and a direction and already asked her about it. It should have been taught here first and asked afterwards.
- **1.2** [new, minor] "What they share is a quantity that combines mass and velocity." — This is loose. The lorry and the car do not share one quantity; each has a large amount of it. "Combines" is vague too, when the next message says it is a multiplication.
- **1.5 (all wrong-answer branches, and the same pattern on every question)** [new, a teacher would correct it] "Not quite: 300 kg m/s. Multiply the mass by the velocity: 60 × 5 = 300 kg m/s." — Every wrong answer is met with the full answer straight away, with no hint and no second try. She never gets to correct herself.
- **1.6 don't know (first time)** [F7, minor] "Change 50 g into kilograms first: 1000 g = 1 kg." — The hint only repeats the conversion already printed in the question, so it is no easier. It should help her do the conversion, for example by asking what 50 ÷ 1000 is.
- **1.8** [P6, a teacher would correct it] "Pick one direction as positive; momentum the other way is then negative. Two cars of the same mass driving towards each other at the same speed have momenta (the plural of momentum) of the same size, one positive and one negative." — One message carries the sign rule, a new word (momenta) and a two-car example. The sign rule is the hard idea here and needs its own message.
- **1.8b** [new, would confuse or mislead her] "Taking right as positive, what is their total momentum, in kg m/s?" — She has never been told that a total momentum is found by adding the separate momenta with their signs. The question needs two calculations, a sign and an addition with no example first.
- **1.9 and its don't know (first time)** [new, a teacher would correct it] "The first car has 1000 × 10 = 10 000 kg m/s. Divide that by 500 kg to find the speed." — Finding a velocity from a momentum (v = p ÷ m) has not been taught. The hint tells her to divide without saying why, and the lesson switches between "speed" and "velocity".
- **1.10 (all of them)** [new, a teacher would correct it] "Yes: your line makes every point. You have this: Momentum is mass × velocity. You have this: Momentum has a direction." — This reads like a mark scheme, not a teacher. "You have this:" twice in a row is stilted and she would not see it as a reply to what she wrote.
- **1.10 (end of key point 1)** [P4, minor] "Momentum is mass × velocity. Momentum has a direction." — Key point 1 says momentum can also be measured in N s, and that is never taught. The lesson also never says outright that momentum is a vector quantity; she has to infer it from 1.7.
- **2.2** [new, a teacher would correct it] "A group of objects with no outside forces acting on it is called a closed system." — "Outside forces" is abstract and comes with no example such as friction or a push from something not in the group. She will not be able to tell when a system is closed.
- **2.7** [new, minor] ""The ball pushes air back onto it" / "The momenta must still add up to zero" / "Firing makes the cannon lighter"" — Only one option mentions momentum, in a section about momentum, so she can pick it without understanding. The air option is also oddly worded.
- **2.8** [P13, a teacher would correct it] "A 0.02 kg bullet leaves a still 4 kg rifle at 400 m/s. How fast does the rifle move backwards (recoil), in m/s?" — This is the first explosion calculation and there is no worked example for it. The only worked example was a stick-together collision; this one has a decimal mass and a different method.
- **2.10 (all of them)** [new, minor] "Yes: your line makes the point. You have this: In a closed system, the total momentum before an event equals the total momentum after it." — The same stilted mark-scheme wording as 1.10. There is also no reply for a half-right line that says "same before and after" but leaves out the closed system.
- **2.10 (end of key point 2)** [P4, a teacher would correct it] "In a closed system, the total momentum before an event equals the total momentum after it." — Key point 2 includes the collision equation m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂, with u and v as initial and final velocity. The script never shows it and never has a collision where both objects are moving.
- **3.1** [F5, would confuse or mislead her] "A resultant force on an object changes its velocity, so it changes its momentum. Momentum after minus momentum before is called the change in momentum, written m Δv (Δ means "change in")." — One message brings in resultant force (never explained), change in momentum, the Δ sign and the expression m Δv. That is too much at once for a first-time learner.
- **3.1** [new, a teacher would correct it] "written m Δv" — She was taught that momentum is p, so change in momentum should be Δp, as in the lesson file. It is not explained why it is m Δv (mass unchanged, Δv the change in velocity).
- **3.2** [F10, would confuse or mislead her] "Putting F = m a together with a = Δv ÷ Δt gives F = m Δv ÷ Δt." — The equation appears before Δt is named or any units are given; those only come in the next message.
- **3.2** [L3, would confuse or mislead her] "Putting F = m a together with a = Δv ÷ Δt gives" — This assumes she knows F = m a and a = Δv ÷ Δt and can follow an algebraic substitution. The second equation appears nowhere else in the lesson.
- **3.3** [P6, a teacher would correct it] "Force equals the rate of change of momentum: how much the momentum changes each second. The same change in momentum spread over a longer time needs a smaller force." — Two ideas in one message: a new phrase (rate of change), which restates the previous message, and the longer-time-smaller-force result. The second is the key idea of the section and should be led up to, not told.
- **3.4** [new, a teacher would correct it] "Change in momentum: 0.5 × 10 = 5 kg m/s." — 3.1 defined change in momentum as after minus before, which here is 0 − 5 = −5 kg m/s. The sign is dropped without comment, after key point 1 taught her that signs matter, and nothing says the force acts against the motion.
- **3.5** [F2, minor] "The same ball is caught with soft hands that stop it in 0.5 s." — The question depends on the mass and speed from the worked example card, which are not in this message. She has to remember or scroll back for 0.5 kg and 10 m/s.
- **3.7** [F8, a teacher would correct it] "Why does a crash mat in a gym help when someone lands on it?" — The answer was stated at 3.3 ("spread over a longer time needs a smaller force") and again in the 3.5 don't-know reply ("a longer stop means a smaller force"). She only has to match the wording.
- **3.6** [F2, minor] "Many safety features work the same way." — "The same way" refers to the crash mat in the previous question, which is not in this message.
- **3.6** [F3, minor] "Airbags, seat belts, crumple zones, cycle helmets and soft playground surfaces all make a collision last longer" — "Crumple zones" is not explained. Five examples in one list go past without any of them being pictured or explained.
- **3.8 (all of them)** [new, minor] "Yes: your line makes the point. You have this: Force equals the change in momentum divided by the time taken." — The same stilted mark-scheme feedback as 1.10 and 2.10.
- **3.8 (end of key point 3)** [P4, a teacher would correct it] "Force equals the change in momentum divided by the time taken." — Key point 3 teaches impulse (FΔt = Δp, force × time = change in momentum). The word impulse and the rearranged form never appear in the script.
- **3.12 don't know (first time)** [new, minor] "Conservation of momentum says the total momentum in a closed system does not change." — The first reply to "don't know" simply gives the answer and then shows the same buttons, so it is not a hint. The 3.14 hint ("Force is the rate of change of momentum.") does much the same.
- **3.13 "Neither has any momentum"** [new, minor] "It is equal and opposite, so the total is zero." — "It" refers to two momenta, so it should read "Their momenta are equal and opposite".
- **3.15** [F8, minor] ""The stop takes longer, so the force is smaller"" — The right option is word for word the right option from 3.7, and 3.6 said the same about airbags. She can answer by recognising the sentence.
- **whole script** [P14, a teacher would correct it] "Here is a worked example. Tap "Show the first step" under it to see each step in turn." — There is nothing hands-on and no picture anywhere: no trolleys to collide, no before-and-after diagram, no arrows for direction. Collisions and recoil need to be seen.
- **whole script** [M1, a teacher would correct it] "Your turn. A 4 kg trolley at 5 m/s hits a still 1 kg trolley, and they stick together." — The lesson is 45 steps of text and arithmetic with the same tell, example, your-turn pattern three times. I would expect her to lose interest well before the quiz.

## Overall

No, not as it stands. The sums are right and key points 1 and 2 are mostly sound, but the lesson opens with two questions on F = m a and vectors that a first-time learner cannot answer, and it uses "scalar" and "resultant force" without explaining them. Key point 3 would lose her: it derives F = m Δv ÷ Δt from equations she has not met, writes change in momentum as m Δv when she was taught p, and leaves out impulse. Total momentum, rearranging p = m v and recoil are also asked before they are taught, wrong answers get no second try, and there is no picture or hands-on activity anywhere, so I would want those fixed before she uses it.
