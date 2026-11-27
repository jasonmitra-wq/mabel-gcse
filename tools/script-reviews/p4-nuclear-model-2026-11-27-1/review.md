# Review: p4-nuclear-model (2026-11-27)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 34 findings, cost $0.5993.

## Counts (made in code from the findings)

- new: 13
- F3: 5
- F8: 5
- F1: 3
- P6: 2
- F4: 1
- P9: 1
- P13: 1
- F7: 1
- P14: 1
- M1: 1

## Findings

- **1.1a don't know (first time)** [new, a teacher would correct it] "Opposite charges attract. Are two positive charges opposite, or alike?" — The hint asks 'opposite or alike?' but the buttons are still attract / repel / nothing happens, so she cannot answer the question asked. She has also not been told that like charges repel, so 'alike' does not get her to the answer.
- **1.2b** [F3, minor] "Carbon and gold are two of the elements." — 'Elements' is used without saying what an element is. The message has no clear purpose at this point and leaves her wondering why carbon and gold matter.
- **1.8** [F1, minor] "In the plum pudding model, the negative electrons balance the spread-out positive charge. So the whole atom has no overall charge." — This is the same fact she was given in the reply to 1.6 ('positive charge must balance the negative electrons, so the atom has no overall charge'), said again two messages later.
- **1.9** [F8, a teacher would correct it] "In the plum pudding model, where is the positive charge?" — The message just before said 'the spread-out positive charge', and 1.7 said 'a ball of positive charge, spread out evenly'. She only has to copy the words from the line above.
- **1.10 (all / some / none)** [new, a teacher would correct it] "Yes: your line makes every point. You have this: a ball (sphere) of positive charge, spread out. You have this: with negative electrons dotted through it." — The feedback reads like a mark scheme, not a teacher: 'You have this:' twice, bracketed alternatives and sentence fragments ('With negative electrons dotted through it.'). The same stilted pattern recurs at 2.12, 3.18 and 4.10.
- **2.2** [F4, a teacher would correct it] "A radioactive source is a material that gives out radiation on its own. The next lesson is about it." — This is a stand-alone vocabulary message for a term a later lesson teaches, and it is followed by more definition-only messages (alpha particles in 2.2b, 'Deflected means' in 2.3b) before anything happens. She gets three word-boxes in a row with no context.
- **2.2** [F3, a teacher would correct it] "gives out radiation on its own" — 'Radiation' is used to define 'radioactive source' but has not itself been explained. Later, 4.3 defines 'electromagnetic radiation' as waves, so she may think alpha particles are waves too.
- **2.3** [F3, minor] "This is the alpha particle scattering experiment." — 'Scattering' is never explained. One sentence saying the particles were scattered (sent off in different directions) would fix it.
- **2.3b** [P9, minor] "Deflected means pushed off a straight path, like a ball glancing off a wall." — This is a second everyday comparison, on top of the plum pudding.
- **2.3b** [new, a teacher would correct it] "like a ball glancing off a wall" — The picture is of a ball touching a wall, but the alpha particles are repelled without touching the nucleus (2.10 says 'before they reach it'). The comparison plants the wrong idea of a collision.
- **2.4** [new, would confuse or mislead her] "If the plum pudding model were right, what would the alpha particles do?" — She has not been told anything that lets her work this out: that spread-out charge can only push weakly, or that alpha particles are heavy and fast enough to plough through. For a first-time learner it is a guess between three options.
- **2.4 don't know (first time)** [new, a teacher would correct it] "In the plum pudding model, the positive charge is spread thinly. Could anything push an alpha particle hard?" — This is a yes/no question shown with the same three buttons, none of which is yes or no. 'Spread thinly' is also a new idea: she was told 'spread out evenly', not that this makes the push weak.
- **2.5** [P6, minor] "most alpha particles went straight through the foil. A few were deflected through large angles. A very small number bounced almost straight back." — All three results arrive in one message, and the next question then refers to 'the first result'. They should be built up one at a time.
- **2.8** [F1, minor] "dense means a lot of mass in a small space" — The definition of dense was already given in 1.1b ('Dense means a lot of mass in a small space', 'packs the same mass into a much smaller space'). Here it is repeated mid-sentence, which breaks up the introduction of the nucleus.
- **2.10 don't know (first time)** [new, minor] "The nucleus is tiny. Would many alpha particles be aimed straight at it?" — This is another yes/no hint shown with the same three option buttons, so her natural answer ('no') has no button.
- **2.12 (all / some / none)** [new, a teacher would correct it] "Still needed: the nucleus is dense or holds the positive charge (most of the mass)." — She is shown the marker's wording with 'or' and brackets, which is muddled as a sentence. It also says the nucleus holds 'most of the mass', which the lesson does not teach until 3.2.
- **3.3** [F8, a teacher would correct it] "Where is most of the mass of an atom?" — The message immediately before ends 'Yet most of the mass of the atom is in the nucleus.' The answer is given word for word just before the question.
- **3.3 don't know (first time)** [new, would confuse or mislead her] "The alpha particles that bounced back hit something dense. Where was it?" — This says the alpha particles 'hit' the nucleus, but 2.10 taught that they are 'repelled back before they reach it'. The lesson contradicts its own physics.
- **3.5** [new, a teacher would correct it] "Relative mass compares masses without using kilograms." — This does not say what the masses are compared with (the proton counts as 1), so 'relative mass 1' means little to her. 'A very small relative mass' for the electron is also vague.
- **3.6** [P6, minor] "A proton has relative charge +1, a neutron 0 and an electron −1. The electrons are outside the nucleus." — There are two separate ideas in one message: a new term with three values, then where the electrons are. The location is tacked on at the end.
- **3.7** [F8, a teacher would correct it] "Which particle is outside the nucleus?" — The message just before ends 'The electrons are outside the nucleus.' and 3.4b said protons and neutrons are in it. The answer is given directly before the question.
- **3.12** [P13, a teacher would correct it] "An atom has atomic number 11 and mass number 23. How many neutrons does it have?" — The subtraction neutrons = mass number − atomic number is stated in words at 3.9 but never worked through. The only numbers shown (lithium, 3 + 4 = 7) go the other way, and the lesson file's carbon-12 example has been dropped.
- **3.14** [F3, minor] "How many protons does ²³⁸₉₂U have?" — U is not named as uranium. The same happens with N and Mg in 3.16 and with Ar, Ca, O, S and Cl in the quiz. She can still answer, but unnamed symbols are off-putting on first meeting.
- **3.16** [F8, a teacher would correct it] "Which pair are isotopes of the same element?" — The right option, ¹²₆C and ¹⁴₆C, is exactly the example given in the message before ('Carbon-12 and carbon-14 both have 6 protons'). She can match it without understanding isotopes; use a different element.
- **3.17** [new, a teacher would correct it] "An atom can lose or gain electrons. Then it is no longer neutral: it is an ion, a particle with a charge. A lithium atom that loses one electron becomes a positive ion, written Li⁺." — Three ideas are packed into one message, dropped between the isotope question and the isotope own-words line. It never says why losing an electron makes the ion positive, and ions are never asked about or practised.
- **3.17** [F3, minor] "Then it is no longer neutral" — 'Neutral' appears for the first time here. Up to now the lesson has said 'no overall charge' and never linked the two.
- **3.18 (all / some / none)** [new, minor] "You have this: atoms with the same number of protons (same element or atomic number)." — The marker's alternatives in brackets are shown to her as if they were a sentence. It should read as one plain statement.
- **4.6** [F8, minor] "An electron changes level, and its energy falls. What does it do?" — 4.4b and the picture message 4.5 ('emitting brings it down') have just said this, so it is recall of the line above. 'What does it do?' is also vague wording.
- **4.7** [F1, a teacher would correct it] "Later experiments showed that the positive charge of a nucleus is shared by smaller particles, each with the same charge. These are the protons." — Protons and neutrons were fully taught in key point 3, so 4.7 and 4.8 present as new discoveries things she has already been using. 'Later' has nothing to attach to, and 'shared by smaller particles' is unclear wording.
- **4.9 don't know (first time)** [F7, a teacher would correct it] "Which experiment showed the plum pudding model was wrong, and what did it lead to?" — After 'don't know' she gets two questions at once, which is harder than the original, and they do not match the three model buttons she is shown.
- **4.9 right answer** [new, minor] "the scattering experiment replaced the plum pudding with the nuclear model" — This is loose wording: an experiment does not replace a model. Its evidence led scientists to replace it.
- **The end (summary points 1 to 4)** [new, would confuse or mislead her] "Summary, point 1 of 4: A ball of spread-out positive charge, with negative electrons dotted through it like plums in a pudding." — Point 1 does not say it describes the plum pudding model, or that the model was replaced, so it reads as what an atom is. The summary also leaves out the three results and their conclusions, protons / neutrons / electrons, atomic and mass number, and energy levels.
- **whole lesson** [P14, a teacher would correct it] "Button: Next" — There is nothing hands-on anywhere: no firing of alpha particles at an atom, no building an atom, no moving an electron between levels. The lesson is only Next buttons, three-option questions and a typed line.
- **2.1 to 2.3b, 4.1 to 4.5** [M1, a teacher would correct it] "Button: Next" — She taps Next through five telling messages in a row before 2.4, and six in a row at the start of key point 4, with nothing to do. Add the answer-before-question recall questions and she is likely to switch off.

## Overall

Not as it stands. Most of the physics is sound and the order is sensible, but three things would mislead her: the hint at 3.3 says the alpha particles 'hit' the nucleus after 2.10 taught they never reach it, the prediction at 2.4 cannot be reasoned out from what she has been told, and summary point 1 states the plum pudding picture as if it were what an atom is. Five questions are answered by the message just before them (1.9, 3.3, 3.7, 3.16, 4.6), several 'don't know' hints ask a question the buttons cannot answer, and the own-words feedback shows her the mark scheme. With no worked example for the neutron sum and nothing hands-on in the whole lesson, I would want these fixed before she uses it.
