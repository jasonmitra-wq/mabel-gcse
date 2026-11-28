# Review: p5-elasticity (2026-11-28)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 34 findings, cost $0.6064.

## Counts (made in code from the findings)

- new: 18
- F2: 4
- F5: 2
- F1: 2
- P4: 2
- P6: 2
- F3: 2
- M1: 1
- P14: 1

## Findings

- **1.1a** [new, minor] "First, two quick questions from the last lesson. What is the weight of a 0.5 kg mass where g = 9.8 N/kg?" — The lesson opens with a calculation that nothing in this lesson has told her how to do. If she has forgotten W = m g, her first experience is getting stuck. A line saying why weight matters here (it is the force on the spring) would help.
- **1.1b** [new, minor] "Second: which force keeps a satellite in its orbit?" — This recall question has nothing to do with springs and is never used again. It delays the start and cannot be answered from anything this lesson tells her.
- **1.2** [F5, a teacher would correct it] "You can stretch it, as when you pull a spring; compress it, which means squash it; or bend it, as a diver bends a diving board." — Three new ideas (stretch, compress, bend) arrive in one message. Compress gets no example, and neither compressing nor bending is ever practised with a question.
- **1.4** [new, a teacher would correct it] "A spring hangs from a clamp with masses on the end, and it is stretched. Which forces stretch it?" — The question comes before step 1.3, which teaches that a still object needs more than one force. She has not been told what she needs, and a first-time learner will naturally pick 'Only the masses pulling down'.
- **1.4** [new, minor] "Yes: it takes two forces, one at each end, to stretch the still spring." — 'The still spring' reads oddly, and 'still' can be taken as 'yet'. 'A spring that is not moving' would be clearer.
- **1.3** [F1, a teacher would correct it] "A still object needs more than one force on it before its shape can change. With only one force it would not stay still: it would move off in the direction of the force." — This repeats what every reply to 1.4 has just told her (two forces; one force alone would just move the spring). The teaching and the question are in the wrong order.
- **1.6** [F2, minor] "Others stay changed when the forces are removed: that is called inelastic deformation." — The bubble opens with 'Others', whose referent (objects) is in the previous message. It does not stand on its own.
- **1.5 / 1.6** [P4, would confuse or mislead her] "Some objects go back to their first shape and length when the forces are removed." — This makes elastic or inelastic sound like a kind of object. The key point says the same spring is elastic if not stretched too far and inelastic if stretched too far, and the script never tells her that, so she may think springs are always elastic and step 4.2 will not make sense.
- **1.8** [new, minor] "Yes: your line makes every point. You have this: After elastic deformation, an object goes back to its first shape. You have this: After inelastic deformation, it stays changed." — The praise reads like a marking scheme, with 'You have this:' twice in a row. A teacher would just say 'Yes' and confirm the idea once.
- **2.3** [new, minor] "Hang twice the force on a spring and you get twice the extension." — You hang masses or weights, not 'force'. It is loose wording at the moment the key rule is introduced.
- **2.4 to 2.7** [M1, a teacher would correct it] "Proportionality holds only up to a point. Stretched further, the spring stops following the rule." — Four tell-and-Next messages run in a row (limit of proportionality, spring constant, equation, worked example) with no question. Neither the limit nor the meaning of 'stiff' is checked before the equation arrives, and she is likely to tap through without reading.
- **2.6** [F2, minor] "The equation linking them is F = k e" — 'Them' has no referent in this message. She has to remember from earlier bubbles that it means force, spring constant and extension.
- **2.6** [P6, minor] "F is the force in newtons (N), k is in newtons per metre (N/m) and e is the extension in metres (m)." — The equation, three symbols and three units come in one bubble. 'Newtons per metre' is new and is not explained as newtons needed for each metre of stretch.
- **2.8** [new, a teacher would correct it] "Your turn. A force of 6 N stretches a spring by 3 cm. What is its spring constant, in N/m? (100 cm = 1 m.)" — Her first practice adds a unit conversion the worked example never showed, plus dividing by 0.03. Every extension so far has been in cm with no warning that the equation needs metres. A like-for-like question should come first.
- **2.9** [F2, minor] "The same equation works for squashing." — 'The same equation' is not named in the message. Say F = k e.
- **2.10** [new, a teacher would correct it] "In one line: what does F = k e tell you about a spring?" — The only point checked is 'Force = spring constant × extension', which is just the equation read aloud. A good answer such as 'extension is proportional to force' or 'a stiffer spring needs more force' would be marked as missing the point, yet the don't-know model line includes proportionality.
- **2.11** [F1, minor] "Extension = stretched length − original length." — The same sentence has already appeared at 2.1 and in the replies to 2.2. It comes again here, in 3.2 and in 4.10.
- **3.2** [new, minor] "Take the original length from each new length to get each extension." — The same two lengths are called 'first length', 'original length', 'stretched length' and now 'new length' in different steps. A beginner may think these are different things.
- **3.2** [P6, minor] "The force on the spring is the weight of the masses: W = m g, weight (N) = mass (kg) × g (N/kg). Take the original length from each new length to get each extension." — Two separate ideas share one bubble: how to get the force and how to get the extension.
- **3.3** [new, a teacher would correct it] "Not quite: looking from above makes the reading wrong. Keep your eye level with the bottom of the spring." — Nothing has taught her how to read the ruler before she is asked. The wrong-answer replies only say the reading is 'wrong' without saying why (the mark you see on the ruler shifts when you look at an angle).
- **3.4** [F2, minor] "Then plot a graph with force up the side and extension along the bottom." — The bubble opens with 'Then', depending on the earlier messages. It also puts a second idea, the origin, in the same message.
- **3.6 "The spring has got stiffer"** [F3, a teacher would correct it] "Not quite: a stiffer spring would give a steeper line, but still straight." — This relies on steepness meaning spring constant, which is not taught until 3.7. She cannot follow why stiffer means steeper yet.
- **3.6 "No more force is being added"** [new, minor] "Not quite: the force is still going up along the graph." — The wording is muddled. Force is up the side, so 'going up along the graph' is unclear and does not really say why her choice was wrong.
- **3.7** [F3, a teacher would correct it] "On the straight part, the gradient of the force-extension graph is the spring constant: the change in force divided by the change in extension." — 'Gradient' is used without saying it means how steep the line is. The sentence also leaves it unclear whether the part after the colon defines the gradient or the spring constant.
- **3.8 don't know** [new, minor] "The gradient is the rise in force divided by the rise in extension." — 3.7 said 'change in', and now it is 'rise in'. Extension is along the bottom, so 'rise in extension' is confusing.
- **3.9** [new, a teacher would correct it] "In one line: what does a force-extension graph show about a spring?" — The question is vague and only one point is accepted. A sound answer about the gradient being the spring constant, or the curve showing the limit, would be marked as missing the point, though the don't-know model line includes the gradient.
- **4.1** [F5, a teacher would correct it] "Stretching a spring takes work: your force moves through a distance. Energy stored in a stretched or squashed object is called elastic potential energy." — 'Work' in its physics sense is used without being explained or linked to energy. A second new term, elastic potential energy, comes in the same bubble, and the step from work to energy stored is not made.
- **4.2** [new, a teacher would correct it] "If the spring is not inelastically deformed, so it goes back to its first shape, all the work done on it is stored." — 'Not inelastically deformed' is a double negative a 15-year-old will stumble on. She has also never been told that a spring can be inelastically deformed.
- **4.3** [P4, minor] "The equation is Ee = ½ k e²: elastic potential energy = 0.5 × spring constant × extension squared." — The key point says this equation only works up to the limit of proportionality. The script leaves that condition out.
- **4.7** [new, minor] "Yes: your line makes every point. You have this: It is energy stored in a stretched or squashed object. You have this: It is worked out with Ee = ½ k e²." — This is the same marking-scheme style of praise as in 1.8, with 'You have this:' twice.
- **4.10** [new, minor] "a spring 15 cm long is stretched to 21 cm. What is its extension?" — The answer is 6 cm again, as it was in 2.2 and in 2.3b. She can get it right from memory rather than by subtracting.
- **whole lesson** [new, minor] "Not quite:" — Every wrong answer in the lesson opens with 'Not quite:' and every right one with 'Yes:'. Over about twenty questions it feels mechanical.
- **whole lesson** [P14, a teacher would correct it] "In a class practical, you hang a spring from a clamp with a ruler beside it." — Nothing in the script is hands-on. The practical is only described, with no spring to load, no readings to take and no graph to plot or watch curve, in a topic that is ideal for it.
- **Summary, point 3 of 4** [new, minor] "A force-extension graph is a straight line through the origin while force and extension are directly proportional, and its gradient is the spring constant." — The summary lines are the long 'good line' sentences reused word for word. Each packs two or three ideas into one sentence, which is hard to take in as a final recap.

## Overall

Not quite as it stands. The sums and their answers are all correct and the wrong-answer replies are mostly well aimed, but she is never told that the same spring deforms elastically or inelastically depending on how far it is stretched, and that will mislead her. Several other things need fixing first: the clamp question comes before its teaching, the first F = k e practice adds a unit conversion the worked example never showed, 'gradient' and 'work' are used without explanation, and two of the own-words checks would reject good answers. There is also nothing hands-on and a long run of tell-and-Next messages in key point 2; with those repaired I would let her use it.
