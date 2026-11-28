# Review: p5-elasticity (2026-11-28)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 37 findings, cost $0.6343.

## Counts (made in code from the findings)

- new: 16
- F3: 3
- F8: 3
- P16: 3
- L3: 2
- F10: 2
- F2: 2
- F5: 2
- P4: 1
- P10: 1
- F1: 1
- P14: 1

## Findings

- **1.1a** [L3, would confuse or mislead her] "First, two quick questions from the last lesson. What is the weight of a 0.5 kg mass where g = 9.8 N/kg?" — The lesson opens by testing something it has not taught. A girl meeting this for the first time has never been told what g is or how to find a weight, so her first experience is a question she cannot do.
- **1.1a don't know (first time)** [F10, a teacher would correct it] "Weight = mass × g." — The equation is used without saying what g is or what units W, m and g are in. As a hint it tells her nothing if she does not already know g.
- **1.1b** [L3, would confuse or mislead her] "Second: which force keeps a satellite in its orbit?" — Satellites and orbits have nothing to do with stretching springs and nothing in this lesson has taught them. It assumes earlier lessons and distracts her before the topic has started.
- **1.1b** [F3, would confuse or mislead her] "Yes: gravity provides the centripetal force." — 'Centripetal force' is used in the right-answer reply and in the final don't-know reply, and is never explained anywhere in the lesson.
- **1.2** [P4, a teacher would correct it] "You can stretch it, compress it, which means squash it, or bend it." — Bending is named once and never explained or given an example (the diving board, forces at different places on a beam). None of the three ways gets an example, yet key point 1 is treated as taught.
- **1.4** [F8, a teacher would correct it] "A still object needs more than one force on it before its shape can change." — The message just before the question says more than one force is needed, and only one of the three options has two forces. She can pick it without thinking about the spring.
- **1.4 don't know (first time)** [new, would confuse or mislead her] "What holds it in place while the masses pull? (same buttons)" — The hint asks a different question from the one on screen. The honest answer to 'what holds it in place' is the clamp, which steers her to the wrong button 'Only the clamp pulling up'.
- **1.4 wrong answer 'Only the clamp pulling up'** [P16, a teacher would correct it] "Not quite: the clamp alone would just hold it." — This contradicts what 1.3 has just taught, that with only one force an object would not stay still. By the lesson's own rule the clamp alone would move the spring, not hold it.
- **1.7** [F8, a teacher would correct it] "Others stay changed when the forces are removed: that is called inelastic deformation. A spring stretched too far stays longer." — The question straight after uses the same words ('it stays longer') about a bag. The answer has been handed to her in the message before.
- **1.8** [new, a teacher would correct it] "Yes: your line makes every point. You have this: elastic: it goes back to its first shape. You have this: inelastic: it stays changed." — The feedback reads like a marking checklist, not a teacher: 'You have this:' twice, with colons piled on colons. A 15-year-old would find it odd and hard to read.
- **2.5** [F2, minor] "The equation is F = k e." — 'The equation' arrives with no statement of what it is the equation for. The message before was about the limit of proportionality, so the link to 'twice the force, twice the extension' is not made.
- **2.5** [F3, a teacher would correct it] "k is the spring constant in newtons per metre (N/m)" — 'Spring constant' is used, with a strange new unit, before anything says what it means. The explanation only comes in the next message.
- **2.3 to 2.7** [new, a teacher would correct it] "Extension is directly proportional to force." — Five telling messages in a row (direct proportion, limit of proportionality, the equation, spring constant, worked example) with no question. Direct proportion and the limit are not checked at all before she is asked to calculate.
- **2.7** [new, a teacher would correct it] "Write the equation: F = k e, so k = F ÷ e." — The rearrangement is done in one jump with no reason given. A first-time learner who is shaky on algebra will not see where k = F ÷ e comes from.
- **2.8** [new, would confuse or mislead her] "Your turn. A force of 6 N stretches a spring by 3 cm. What is its spring constant, in N/m?" — Her first practice question hides a cm-to-m conversion that was never shown. 2.2 used cm and the worked example used metres. She will most likely type 2 and be marked wrong for something she was not taught.
- **2.9** [P16, minor] "Then e is how much shorter the object gets, called its compression." — The lesson file does not call this length 'its compression'. In 1.2 'compress' meant the act of squashing, so the same word now means two things.
- **2.10** [new, a teacher would correct it] "In one line: what does F = k e tell you about a spring?" — The question is too vague for her to know that two points are wanted. The limit of proportionality is not in the equation at all, so a sensible answer gets 'Still needed'.
- **2.10** [new, minor] "Partly there. You have this: force equals spring constant times extension. Still needed: extension is proportional to force up to the limit of proportionality." — Same checklist-style feedback as 1.8: stilted 'You have this:' and 'Still needed:' lines, not a reply to what she actually wrote.
- **3.1** [P10, minor] "In a class practical, you hang a spring from a clamp with a ruler beside it." — The practical starts cold. No question first checks she is ready, for example what you need to measure to find an extension or how you would find the force from the masses.
- **3.2** [F10, a teacher would correct it] "The force on the spring is the weight of the masses, worked out with W = m g." — W = m g is used without ever saying in a taught message what W, m and g stand for or their units. It appeared only in the feedback to the opening recall question.
- **3.3 right answer** [new, minor] "Yes: with your eye level with the mark, you do not read it too high or too low." — The option she chose said 'the bottom of the spring' but the reply talks about 'the mark', which has not been mentioned. The wrong-answer replies only say it 'makes the reading wrong' without saying why.
- **3.4** [F5, a teacher would correct it] "A graph that is a straight line shows a linear relationship. For a spring the line also goes through the origin, so force and extension are directly proportional." — Two new terms ('linear relationship' and 'origin') plus plotting the graph and the link to direct proportion, all in one message. That is too much at once.
- **3.4** [F3, a teacher would correct it] "the line also goes through the origin" — 'Origin' is never explained. She has not been told it is the point where both force and extension are zero.
- **3.4** [new, would confuse or mislead her] "Then plot force against extension." — She is not told which quantity goes on which axis and no graph is shown. Everything about the graph in 3.4 to 3.9 is words only, which is hard to picture for someone who has never seen it.
- **3.6** [F8, a teacher would correct it] "Once the limit of proportionality is passed, the graph curves." — The message before the question states the answer almost word for word. The question then asks what the curve shows.
- **3.6 wrong answer 'The spring has got stiffer'** [new, minor] "Not quite: the curve shows the spring has stopped following F = k e." — The reply does not deal with her idea. It never says why 'stiffer' is wrong; it just restates the right answer.
- **3.7** [new, minor] "the rise in force divided by the rise in extension" — 'Rise in extension' is muddled if extension is along the bottom; a teacher would say 'change in force divided by change in extension'. 'Gradient' is also given no plain meaning such as how steep the line is.
- **3.9** [new, minor] "Yes: your line makes every point. You have this: force and extension are directly proportional. You have this: the limit of proportionality has not been passed." — Same stilted checklist feedback as 1.8 and 2.10.
- **4.1** [F5, a teacher would correct it] "Stretching a spring takes work: your force moves through a distance. Energy stored in a stretched or squashed object is called elastic potential energy." — Two new ideas in one message: 'work' (given only a half-explanation) and 'elastic potential energy'. The message does not say that the work done is what becomes the stored energy.
- **4.2** [P16, a teacher would correct it] "If the spring is not stretched past its limit of proportionality, all the work done on it is stored." — The lesson file says 'if the spring is not inelastically deformed'. The script has swapped in the limit of proportionality, which is a different condition; this is the tutor's own science.
- **4.3** [new, minor] "You are given this equation." — Given where? The lesson file says 'in the exam'; without that the sentence makes no sense to her. The message also drops the condition that the equation only works up to the limit of proportionality.
- **4.7 none** [new, minor] "Here is what a good line says. Energy stored in a stretched or squashed object. Half times spring constant times extension squared." — The 'good line' is two sentence fragments, not a line she could copy as a model. It has the same checklist feel as the other own-words replies.
- **4.12 wrong answer 'The extension'** [new, minor] "Not quite: the extension is along the bottom." — The lesson never told her which axis extension goes on, so this correction relies on something she was not taught.
- **4.13 wrong answer 'A flat line'** [new, minor] "Not quite: non-linear gives a curve." — The reply just states the answer and does not say why a flat line is wrong (it is still a straight line).
- **Summary, point 3 of 4** [F2, would confuse or mislead her] "Force and extension are directly proportional there, because the limit of proportionality has not been passed." — 'There' points at nothing. The sentence was lifted from the answer to the graph question, so without 'a straight line through the origin' it makes no sense.
- **Summary, point 3 of 4** [F1, a teacher would correct it] "Force and extension are directly proportional there, because the limit of proportionality has not been passed." — This repeats summary point 2 (proportional up to the limit of proportionality). The summary says nothing about the practical or the gradient, which is what key point 3 actually taught.
- **whole lesson (1.1 to 4.15)** [P14, a teacher would correct it] "Button: Next" — There is nothing hands-on anywhere in the script: no spring to stretch, no masses to add, no graph to build. It is 44 steps of reading and buttons, and she would get bored (M1).

## Overall

No, not as it is. The sums are right and most of the physics is sound, but the lesson opens with two questions she cannot answer (weight with g, and a satellite question that brings in 'centripetal force'), and the don't-know hint at 1.4 points her to a wrong button. Her first calculation at 2.8 hides a cm-to-m trap she was never shown, the graph work is words only with 'origin' and the axes unexplained, and three questions are answered by the message just before them. I would want those fixed, along with the 'there' in summary point 3, the changed condition at 4.2, and something hands-on with a spring and a graph, before she uses it.
