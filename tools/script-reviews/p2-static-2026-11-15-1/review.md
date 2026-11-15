# Review: p2-static (2026-11-15)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 34 findings, cost $0.5188.

## Counts (made in code from the findings)

- new: 11
- F3: 4
- F8: 3
- L3: 2
- P6: 2
- P16: 2
- P4: 2
- F5: 2
- L1: 1
- F1: 1
- P5: 1
- P8: 1
- F12: 1
- P14: 1

## Findings

- **1.1** [new, a teacher would correct it] "why a balloon rubbed on your hair clings to a wall" — The opening promises to explain why a charged balloon clings to a wall, but the lesson never comes back to it. It could not: a neutral wall attracting a charged balloon is never taught.
- **1.1a** [L3, a teacher would correct it] "First, two quick questions from earlier lessons. What is electric current?" — The lesson opens by testing her on earlier lessons, as if she were revising. A first-time learner can only guess, and the answer is not needed for static electricity.
- **1.1a wrong answer (push)** [F3, a teacher would correct it] "The push that drives the charge is the potential difference." — "Potential difference" is used without ever being explained in this lesson.
- **1.1a wrong answer (hard)** [F3, minor] "How hard it is for charge to flow is the resistance." — "Resistance" is used without being explained, and it has nothing to do with this lesson.
- **1.1b** [L3, a teacher would correct it] "Second, from the last lesson: what is the unit of power?" — A recall question on power has nothing to do with static electricity and assumes a lesson she may not have had. It delays the start and could put her off before the topic begins.
- **1.1b wrong answer (volt)** [F3, minor] "the volt is the unit of potential difference" — "Potential difference" is used again with no explanation.
- **1.1b don't know (first time)** [new, a teacher would correct it] "A 60 W lamp: which button is the W?" — The hint just points at the button with a W on it. She can get it right by matching letters and learn nothing about power.
- **1.2** [L1, would confuse or mislead her] "Everything is made of atoms. Each atom has a tiny centre, the nucleus, which holds protons with a positive charge. Around the nucleus are electrons, with a negative charge." — Atom, nucleus, proton, electron, positive charge and negative charge all arrive in one message. "Charge" itself is never explained.
- **1.9** [P6, minor] "A material like that is called an insulator. On an insulator, the charge stays where it was rubbed on." — One message carries three ideas: which materials charge by rubbing, the new word insulator, and that the charge stays put. "Where it was rubbed on" also does not fit the material that lost electrons.
- **1.10** [P16, would confuse or mislead her] "A polythene rod is rubbed with a cloth and becomes positively charged." — This is the wrong way round. The lesson file, and every GCSE textbook, says polythene gains electrons and becomes negative; it is acetate that becomes positive. She would learn a wrong fact.
- **1.10 right answer** [F1, minor] "Only electrons move, never protons, so a positive object is one that has lost electrons." — "Only electrons move" was said in 1.4 and comes again in 1.10's don't-know reply, the 1.11 marking, 2.7, 4.3 and 4.9. That is too many times in nearly the same words.
- **1.11** [new, a teacher would correct it] "A full line also says: <the points it misses>." — The question asks only how rubbing makes the balloon negative. A correct answer ("electrons are rubbed onto it") is told it is incomplete for not adding "only electrons move, not protons", which the question did not ask for.
- **1.11** [P4, a teacher would correct it] "In one line: how does rubbing make a balloon negatively charged?" — Key point 1 closes without teaching conductors: that a metal door handle lets charge flow through it and discharges you, while a polythene rod stays charged. The word "conductor" never appears, yet later steps rely on charge moving through metal.
- **2.2** [new, would confuse or mislead her] "two polythene rods are both rubbed with the same cloth, so both are negatively charged" — A few steps earlier (1.10) a polythene rod rubbed with a cloth became positive. Now the same rubbing makes it negative, with "so" as if that followed. She cannot tell which is true.
- **2.2 don't know (first time)** [new, minor] "Do you think the same type pushes or pulls? (same buttons)" — The hint asks "pushes or pulls" but the buttons say Together / They do not move / Apart. It is also no easier than the original question, just the same guess reworded.
- **2.3** [F5, minor] "Two objects with the same type of charge repel: they push each other apart. A push like that between charged objects is called repulsion." — Two new words, "repel" and "repulsion", in one message.
- **2.4** [F5, minor] "attract: they pull together. A pull like that between charged objects is called attraction." — Two new words, "attract" and "attraction", in one message.
- **2.4** [new, a teacher would correct it] "Two objects with different types of charge, one positive and one negative, attract: they pull together." — Attraction is only told. She never predicts it, sees the polythene-and-acetate demonstration, or answers a question on it; every question in key point 2 and the quiz is about repulsion. Clothes clinging from the dryer is also left out.
- **2.5** [F8, a teacher would correct it] "your hairs can each get the same negative charge, and they stand apart. Why?" — The stem says the hairs have the same charge, and the rule "same type repel" was given two messages earlier. The right button is just that rule repeated, so there is nothing to work out.
- **2.5** [P16, minor] "your hairs can each get the same negative charge" — The lesson file says only that the strands get the same charge. The script adds that it is negative, when hair usually loses electrons and goes positive. The sign should be left out.
- **2.6** [P6, minor] "attraction and repulsion between charged objects are non-contact forces. The closer the two objects are, the stronger the force between them." — Two separate ideas in one message, the new term "non-contact force" and how force changes with distance, and no question on either until the quiz.
- **2.7** [new, would confuse or mislead her] "A girl touches a negatively charged metal dome. Charge moves through metal and through her body, so some spreads onto her" — A new idea, that charge can flow through metal and a person, is slipped into a question stem. Conductors were never taught, 1.9 told her charge stays where it is, and "metal dome" is not explained. The stem then nearly gives the answer.
- **2.7 don't know (first time)** [new, minor] "Electrons spread from the dome onto her. What charge do electrons carry? (same buttons)" — The hint asks what charge electrons carry, but the buttons are three long statements about the girl. The question and the buttons do not match.
- **3.3** [F8, a teacher would correct it] "Which is the best way to say what an electric field is?" — The definition was given word for word in 3.1, and the right button is that sentence, by far the longest option. It tests only whether she can spot the sentence she just read.
- **3.3 don't know (first time)** [new, minor] "Which button mentions that force?" — The hint tells her to pick the button with the word "force" in it. That is matching words, not thinking.
- **3.4** [new, a teacher would correct it] "Each arrow shows the way a small positive charge would be pushed if you put it there." — "Each arrow" appears before she has been told that field lines carry arrows, and before she has seen any picture of them.
- **3.5** [P5, would confuse or mislead her] "the field lines are straight and meet its surface at right angles, spreading out like the spokes of a wheel" — The field pattern is described only in words (straight, right angles, spokes, outwards) with no picture. The picture does not come until 3.7, after the question, so she must imagine a diagram she has never seen.
- **3.6** [P8, a teacher would correct it] "Predict: a small positive charge near a negative sphere is pulled towards it. Which way do the field lines around a negative sphere point?" — The question tells her the charge is pulled towards the sphere and then asks which way the lines point. The answer is in the question, so it is not a prediction.
- **3.8** [P4, a teacher would correct it] "In one line: what is an electric field, and how does it change as you move away from the charged object?" — Key point 3 closes without teaching that a stronger field is shown by field lines drawn closer together, which the lesson file includes.
- **4.3** [F8, a teacher would correct it] "Which particles jump across the gap in a spark?" — 4.1 said "electrons jump across the gap" and 4.2 said "electrons jump between you and the handle". The answer was given twice just before the question.
- **4.5** [F12, a teacher would correct it] "A spark is more likely: the field is stronger closer to the object" — The right option carries the explanation and is much longer than the other two. She can pick it by its look, and has no reasoning left to do.
- **4.9** [F3, a teacher would correct it] "Neutrons" — "Neutrons" is a quiz option but the lesson has never mentioned them. The reply to that choice does not say what a neutron is either.
- **4.14 right answer** [new, would confuse or mislead her] "Yes. Non-contact: the electric field does it." — She has just chosen "No", and the reply begins "Yes." It reads as if the answer to "do they need to touch?" is yes.
- **whole lesson** [P14, a teacher would correct it] "Hang two charged rods near each other on threads, and they swing one way or the other." — There is nothing hands-on anywhere: no rods to move, no charges to place, no field to explore. The only picture is at 3.7. It is 45 steps of reading and tapping, and she is likely to get bored.

## Overall

No, I would not let her use this lesson as it is. The polythene rod is said to become positive in 1.10 and negative in 2.2, and the first is simply wrong; charge moving through metal and a person is slipped into a question (2.7) without conductors ever being taught. The lesson opens with two revision questions she cannot answer and that have nothing to do with static, and several questions (2.5, 3.3, 3.6, 4.3, 4.5) give their own answer away. The order of ideas is sound and the don't-know steps mostly do get easier, but it needs the polythene fact fixed, conductors taught, pictures for field lines before 3.7, the "Yes" reply at 4.14 corrected, and something for her to do besides tapping.
