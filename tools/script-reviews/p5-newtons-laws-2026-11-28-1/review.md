# Review: p5-newtons-laws (2026-11-28)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 36 findings, cost $0.6901.

## Counts (made in code from the findings)

- new: 17
- F3: 5
- P6: 4
- P4: 3
- F10: 1
- L3: 1
- F8: 1
- F2: 1
- P13: 1
- F5: 1
- P14: 1

## Findings

- **1.1a** [F10, a teacher would correct it] "Yes: a = Δv ÷ t = 20 ÷ 10 = 2 m/s²." — The reply uses the symbols a, Δv and t without saying what each stands for; the Δ sign is never explained anywhere. It is also a cold calculation as the very first thing she does.
- **1.1b** [L3, minor] "Second: which of these is a contact force?" — The question depends on 'contact force', and the replies on 'non-contact force', neither of which this lesson explains. It assumes she remembers the last lesson.
- **1.4** [P6, minor] "For forces along one line, add the forces that act the same way and take away the forces that act the opposite way. The resultant acts in the direction of the bigger total." — Add, subtract and direction are all given in one abstract message, with no example before she is asked to do it.
- **1.5** [F3, a teacher would correct it] "What is the size of the resultant force, in N?" — Forces are given in N throughout key point 1, but the newton is not introduced as the unit of force until 2.1.
- **1.9** [F3, minor] "Yes: its velocity is not changing, so the resultant force is zero." — 'Velocity' appears here (and in 1.12, 2.7 and 4.16) without ever being tied to the 'same speed in the same direction' wording that 1.8 used.
- **1.9 wrong answer (Forwards)** [new, minor] "The engine's push only balances friction and air resistance." — This is loose physics: the forward force on a car is the driving force from the road on the tyres, which is itself friction, so 'the engine's push balances friction' is muddled. 'Air resistance' has also not been explained.
- **1.8** [P4, a teacher would correct it] "a still object stays still, and a moving object keeps the same speed in the same direction" — The main path never says that friction and air resistance are what slow real things down. Her everyday experience that moving things stop by themselves goes unanswered, and the lesson file's skater and spaceship examples are left out.
- **1.11** [F8, a teacher would correct it] "If the forward push is bigger than the friction, the resultant acts forwards and the object speeds up." — 1.10 states this just before 1.11 asks what happens when the push becomes bigger than the friction. The answer has been handed to her.
- **1.11 don't know (first time)** [new, a teacher would correct it] "Which force is now bigger?" — The hint asks which force is bigger, but the buttons still read 'It speeds up / It keeps the same speed / It slows down'. She cannot answer the hint with the buttons shown.
- **1.12** [P4, a teacher would correct it] "This tendency is called inertia." — Inertia is named but the lesson never says that more mass means more inertia, which is part of key point 1. No question follows it either.
- **1.13 (all points)** [new, minor] "Yes: your line makes every point. You have this: with zero resultant force a still object stays still. You have this: a moving object keeps the same speed and direction." — The feedback reads like a checklist, with 'You have this:' twice, and it simply repeats the law back to her. A teacher would say it in one natural sentence.
- **2.1** [P6, minor] "Force is measured in a unit called the newton (N), after the scientist Isaac Newton. The three laws of motion are his, so they are called Newton's laws." — Two separate ideas, the unit and the name of the laws, share one message. The unit belongs back where N was first used.
- **2.2** [P6, minor] "The bigger the resultant force, the bigger the acceleration. The bigger the mass, the smaller the acceleration." — Two relationships are told in one message with no example or question on either before the equation arrives.
- **2.5** [new, would confuse or mislead her] "Your turn. A resultant force of 150 N acts on a 50 kg crate. What is its acceleration, in m/s²?" — 'Your turn' follows a worked example that found F, but this asks for a, which needs F = m a rearranged. No message has shown a = F ÷ m, so she cannot do it from what she has been told. The direct question (2.6) comes after this harder one.
- **2.7** [new, would confuse or mislead her] "Mass measured this way, as force divided by acceleration, is called inertial mass." — m = F ÷ a has never been shown or practised, and 'measured this way' points at nothing clear. The new term 'inertial mass' is dropped in and never used again, and it is not linked to inertia.
- **2.9** [F3, a teacher would correct it] "Light gates measure the acceleration." — 'Light gates' (and the pulley arrangement) are used with no explanation and no picture. The practical is described cold in one packed message.
- **2.10** [new, would confuse or mislead her] "Yes: keep the total mass the same, so only the force changes." — 2.9 said 'More hanging masses give a bigger force', which adds mass. She is never told that the masses are moved from the trolley to the hanger, so 'keep the total mass the same' contradicts what she has just read. Control variables were not taught before this was asked.
- **2.11** [new, minor] "A car of about 1000 kg speeding up at about 2 m/s² needs a resultant force of about 1000 × 2 = 2000 N." — This is almost the same calculation as the worked example (1200 kg car at 3 m/s²), with nothing for her to do. It adds little and what 'estimate' means is not made clear.
- **2.12 (some points)** [new, minor] "Partly there. You have this: the resultant force equals mass times acceleration. Still needed: a bigger force gives a bigger acceleration." — A perfectly good answer to 'what does F = m a tell you?' is marked only partly right, when the question never said two points were wanted. The 'don't know' model line adds a third point about mass that is not checked.
- **3.2** [F2, minor] "The two forces are of the same type and act on different objects." — 'The two forces' depends on the previous message. 'Of the same type' is never explained, so she does not know what a type of force is here.
- **3.7 (none)** [new, a teacher would correct it] "Here is what a good line says. Two objects push on each other with equal forces. In opposite directions." — The model answer is broken into a sentence and a fragment. It should be one clear sentence she could copy.
- **3.7 (all points)** [new, minor] "You have this: in opposite directions." — The feedback is a stitched-together fragment that reads oddly as praise.
- **4.2** [P6, minor] "How strongly gravity pulls on each kilogram is called the gravitational field strength, g. It is measured in newtons per kilogram (N/kg). On Earth it is about 9.8 N/kg." — A long new term, its symbol, its unit and its value all arrive in one message.
- **4.1** [P4, would confuse or mislead her] "The pull of gravity on an object is called weight. Weight is a force, so it is measured in newtons." — The lesson never says what mass is, nor that mass stays the same everywhere while weight changes with g (the Moon example). That is the central point of key point 4 and the commonest confusion.
- **4.4** [P13, minor] "A bag has a mass of 5 kg, and g = 9.8 N/kg. What is its weight, in N?" — W = m g is stated and then asked straight away with no worked example, although the lesson file has one.
- **4.6** [F5, a teacher would correct it] "Weight and mass are directly proportional: double the mass, and the weight doubles. Weight is measured with a newtonmeter, a spring balance marked in newtons." — Two new terms ('directly proportional' and 'newtonmeter') and two unrelated ideas sit in one message.
- **4.7** [new, minor] "An object's weight can be treated as acting at one point, called its centre of mass." — A new term is dropped in as a single line with no picture, example or use afterwards. She would not know why it matters.
- **4.8** [new, a teacher would correct it] "A diagram that shows one object with every force on it, each as a labelled arrow, is called a free body diagram. Longer arrows show bigger forces." — Free body diagrams are only described in words. She never sees one, draws one or reads one; even the skydiver question gives the numbers in the text.
- **4.9** [F3, a teacher would correct it] "its weight down and the normal contact force up" — 'Normal contact force' is used without explanation. Earlier this was simply 'pushed up by the floor'.
- **4.10** [F3, minor] "450 N of air resistance up" — Air resistance has never been explained on the main path.
- **4.11** [new, would confuse or mislead her] "Draw each force as an arrow to scale, tip to tail. The arrow from the start of the first to the end of the last is the resultant." — Adding forces at an angle by scale drawing is told in one wordy message with no picture, example or question. 'To scale' and 'tip to tail' are unexplained. A first-time learner would be lost, and it is not in the lesson's key points.
- **4.12** [new, would confuse or mislead her] "A scale drawing can also split one force into two parts at right angles, such as along the ground and upwards." — Resolving a force is introduced in words only, with no picture, example or question. She cannot picture it, and it is never used again.
- **4.13** [new, minor] "In one line: what is weight, and how do you work it out?" — The recall question comes straight after two messages on scale drawings, so it jumps back ten steps. The 'none' reply is a fragment: 'The force of gravity on an object.'
- **4.20** [new, would confuse or mislead her] "Quiz, question 6 of 6: which has more inertia, a lorry or a bicycle?" — The lesson never told her that inertia depends on mass; 1.12 only named inertia. She has to guess this quiz question.
- **4.20 wrong answer (bicycle)** [new, minor] "Not quite: inertia grows with mass, so the heavier lorry has more." — 'Heavier' and the option's 'lighter' blur mass and weight in the very lesson meant to separate them.
- **whole script** [P14, a teacher would correct it] "In a class experiment, a trolley is pulled along a bench by a string over a pulley, with masses hanging on the end." — The whole lesson is text with Next buttons and questions. There is no widget, no picture and nothing to try, even for the trolley experiment or the free body diagrams. She would get bored (M1).

## Overall

No, not as it is. The core of the first and second laws is sound and the numbers are right, but she is asked things she has not been taught: rearranging F = m a at 2.5, the inertia and mass link in the quiz, and keeping 'total mass' the same in the practical. Important parts of the key points are missing, namely the difference between mass and weight and why real objects slow down, while hard extras (inertial mass, centre of mass, scale drawings, resolving forces) are dropped in as single wordy messages with no picture or question. Units and terms such as N, velocity, light gates and normal contact force are used before they are explained, and there is nothing hands-on, so I would want these fixed before she uses it.
