# Review: p3-changes-of-state (2026-11-17)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 24 findings, cost $0.5137.

## Counts (made in code from the findings)

- new: 7
- F3: 5
- F8: 4
- L3: 2
- F5: 1
- F10: 1
- F7: 1
- F1: 1
- F2: 1
- P14: 1

## Findings

- **1.1a** [L3, would confuse or mislead her] "First, two quick questions from earlier lessons. Ice is melting. Which is true of its temperature while it melts?" — The lesson opens by treating her as revising. This question is the main idea of key point 1, asked before anything has been taught, so a first-time learner can only guess.
- **1.1a don't know (first time)** [F8, a teacher would correct it] "Think of a drink with ice in it: it stays at about 0 °C while the ice is still melting." — The hint states the answer (the temperature stays the same) and then shows the same buttons again.
- **1.1a don't know (again) / skip** [F3, would confuse or mislead her] "the energy raises the particles' potential energy, not their kinetic energy" — Potential energy and kinetic energy of particles are used here before anything has said what either means. This is the third message of the lesson.
- **1.1a don't know (again) / skip** [F5, a teacher would correct it] "the energy raises the particles' potential energy, not their kinetic energy" — Two new terms (potential energy, kinetic energy) arrive in one message, and she has just said twice that she does not know.
- **1.1b** [L3, a teacher would correct it] "Second: what is the specific heat capacity of a substance?" — She has not been told what specific heat capacity is in this lesson, so she cannot answer; it assumes an earlier lesson. One wrong option is also the definition of the quantity this lesson is about to teach.
- **1.1b don't know (first time)** [F10, would confuse or mislead her] "The lesson on heating water used ΔE = m c Δθ. What does c tell you?" — An equation is used with none of its symbols or units explained. After 'don't know' she gets a harder question about a symbol, not an easier step.
- **1.5** [F3, would confuse or mislead her] "On a flat part the energy pulls the particles apart, raising their potential energy, so the temperature does not change." — 'Potential energy' is used without explanation. The 'so' does not follow either: she has not been told that temperature goes with the particles' kinetic energy, so the reason the temperature stays the same is missing.
- **1.5** [new, minor] "On a flat part the energy pulls the particles apart" — This is said of every flat part, including melting, but 2.4 later says 'Melting only loosens them: they stay close together'. The two descriptions of melting do not match.
- **1.8** [new, would confuse or mislead her] "On the sloping parts of a heating curve, which energy of the particles is rising?" — On the main path kinetic energy has never been mentioned, nor that temperature is linked to how fast particles move. She cannot answer from what she has been told; the teaching only comes in the feedback.
- **1.8 don't know (first time)** [F7, a teacher would correct it] "On a sloping part the temperature goes up. Which energy is linked to temperature?" — The hint asks for the very fact she was never given (that temperature goes with kinetic energy), so it is no easier than the question.
- **1.10** [F8, minor] "The line falls, then goes flat while the substance condenses or freezes" — The message just before the wax question says a flat part on a cooling curve is condensing or freezing, and only 'freezing' is among the options. The third option, 'The thermometer has stopped working', is not a serious distractor.
- **2.2** [F3, minor] "For water it is 334 000 J/kg." — The unit J/kg is used here and in 2.3, but is not explained as joules per kilogram until 2.6.
- **2.5** [F8, a teacher would correct it] "Why does boiling away 1 kg of water take far more energy than melting 1 kg of ice?" — The message immediately before (2.4) said 'boiling must pull the particles completely apart', and the right button repeats those words. She only has to copy.
- **2.5 wrong answer (more particles)** [new, a teacher would correct it] "1 kg of ice and 1 kg of water have the same particles." — Imprecise: the point is that they have the same number of particles. 'The same particles' does not answer her idea that water has more of them.
- **2.9** [new, minor] "Yes, your line has it: the energy needed to melt 1 kg of a substance; and with no change in temperature." — The stitched-together reply reads awkwardly ('; and with…'). The same pattern is used at 1.11, 3.11 and 4.6.
- **3.4** [F1, minor] "Change the mass into kilograms: 500 g = 0.5 kg." — The message just before (3.3) already said 'For example, 500 g is 0.5 kg', so the first step of the worked example repeats it with the same numbers.
- **3.7** [F3, a teacher would correct it] "A joulemeter shows 23 000 J were supplied." — 'Joulemeter' is used in a question before 3.8 says what it does ('A joulemeter measures the energy supplied').
- **3.7** [new, minor] "Yes: 2 300 000 J/kg." — The answer differs from the 2 260 000 J/kg she was given for water in 2.3 and 3.2, with no word that an experiment gives a slightly different value. She may think she has gone wrong.
- **3.10** [new, a teacher would correct it] "Is the value of L the student calculates too high or too low?" — 'The student' has not been mentioned before. L = E ÷ m has also never been stated on the main path (only inside a worked step and hints), so reasoning about 'E ÷ m' is a big jump for a first-timer.
- **4.1** [F3, a teacher would correct it] "over 2000 kJ for every kilogram" — The whole lesson has used joules; kJ appears here for the first time with no explanation.
- **4.1** [new, would confuse or mislead her] "As it evaporates from your skin it takes in latent heat" — She has only been told that latent heat goes in while water boils at 100 °C. Nothing explains that water can evaporate, taking in latent heat, at skin temperature, so she may well ask how sweat can 'boil'.
- **4.4** [F2, minor] "After condensing, the hot water cools on the skin and gives out more energy. Water at 100 °C gives out only that second part." — The message depends on the one before: what condensed (the steam) is not in it, and 'that second part' is vague.
- **4.5** [F8, a teacher would correct it] "Why does steam at 100 °C scald worse than water at 100 °C?" — The two messages just before (4.3, 4.4) gave exactly this answer: 'it condenses, giving out its latent heat to the skin'. The right button repeats it.
- **1.2–1.4 and whole lesson** [P14, a teacher would correct it] "A graph of its temperature against time is called a heating curve." — The heating curve is described only in words. Nothing in the script shows the graph, builds it up, or lets her try anything, so a lesson about reading a graph has no graph to look at or use.

## Overall

No, not as it is. The opening treats her as revising: it asks her the lesson's own main idea and a definition from another lesson before teaching anything, and its fallbacks bring in potential energy, kinetic energy and ΔE = m c Δθ unexplained. The link between temperature and the particles' kinetic energy is never taught before 1.8 asks for it, so the explanation of why the curve goes flat does not hold together for a first-time learner. Several questions (2.5, 4.5, 1.10) only ask her to repeat the message just before them. The calculations in key point 3 and the quiz are sound and correct, so once the opening, the kinetic and potential energy teaching, the give-away questions and the evaporation step are fixed, I would let her use it.
