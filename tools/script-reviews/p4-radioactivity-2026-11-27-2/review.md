# Review: p4-radioactivity (2026-11-27)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 34 findings, cost $0.6226.

## Counts (made in code from the findings)

- new: 14
- F8: 6
- F3: 5
- P6: 4
- L3: 1
- F5: 1
- F15: 1
- P4: 1
- P14: 1

## Findings

- **1.1a** [L3, would confuse or mislead her] "First, two quick questions from the last lesson. What is in the nucleus of an atom?" — The lesson opens by testing an earlier lesson she may not have had. Nothing in this lesson has told her what protons, neutrons or electrons are, so a first-time learner can only guess.
- **1.1** [F3, minor] "This lesson is about the radiation that comes out of the nucleus, the tiny centre, of some atoms" — "Radiation" is used in the welcome but is not explained until 1.2b.
- **1.1b** [F3, would confuse or mislead her] "Second: what does the atomic number of an atom count?" — "Atomic number", "protons" and "neutrons" are asked about before the lesson has explained any of them. They are only ever explained in the replies to this question, yet the rest of the lesson depends on them.
- **1.1b don't know (first time)** [new, a teacher would correct it] "The atomic number decides the element, and that is set by the protons." — The hint is circular and muddled: "that" could mean the element or the atomic number, and "element" has not been explained. It would not help a girl who does not know.
- **1.1b right answer** [F5, a teacher would correct it] "the atomic number counts the protons, and it decides the element. The mass number counts protons plus neutrons." — Three terms (atomic number, element, mass number) arrive in one reply. Mass number is only met on this branch and the "both" branch, so a girl who chose "Its neutrons" or said don't know never gets it here.
- **1.4b** [F8, a teacher would correct it] "Radioactive decay is random: you cannot predict which nucleus will decay next, or when." — The message immediately before the question says you cannot predict which nucleus decays next. The question "Which one will decay first?" with the answer "No one can tell" just asks for that sentence back.
- **1.7** [F8, minor] "1 Bq is one decay each second." — The definition is given in the message just before "A source has an activity of 300 Bq. What does that mean?", so she only has to swap 1 for 300.
- **1.6** [new, minor] "clicks for each bit of radiation that reaches it" — "Bit of radiation" is loose. She should be told it clicks each time an alpha particle, beta particle or ray enters it; the lesson file says it counts decays.
- **1.6b** [new, minor] "The number of clicks each second is the count rate. It is less than the activity, because radiation goes out in all directions and the tube only catches some of it." — Detector, Geiger-Muller tube and count rate are told in two messages and never asked about anywhere, not even in the quiz. Nothing checks she can tell count rate from activity.
- **1.10b** [P6, a teacher would correct it] "The nucleus's mass number, protons plus neutrons, falls by 4. Its atomic number falls by 2. A different atomic number means a different element." — Three ideas in one message: mass number falls by 4, atomic number falls by 2, and a new element forms. For some girls it is also the first definition of mass number.
- **1.11** [F8, minor] "The nucleus's mass number, protons plus neutrons, falls by 4." — The rule is stated in the message straight before the question, so the question is only the subtraction 226 − 4.
- **1.12** [new, minor] "An ion is an atom that has lost or gained electrons." — It does not say an ion is charged, which is the point of the word. Charge is never introduced anywhere in the lesson.
- **1.15 wrong answer (smoke)** [new, a teacher would correct it] "Not quite: radioactive decay never stops." — This is not right as physics: a source's activity falls with time. It should say the source gives out radiation all the time, whether or not there is smoke.
- **1.16** [new, minor] "Yes: your line makes every point. You have this: an alpha particle is 2 protons and 2 neutrons. You have this: a sheet of paper stops it." — The own-words feedback reads like a machine checklist with "You have this:" twice. It just recites the mark scheme rather than responding to what she wrote.
- **2.2** [new, a teacher would correct it] "Where does an electron in the nucleus come from?" — She was told at 1.1a that electrons are outside the nucleus; this wording says there is an electron in the nucleus. It should ask how a nucleus can give out an electron when it has none.
- **2.3** [P6, a teacher would correct it] "In beta decay, one neutron is lost and one proton is gained. The number of protons plus neutrons, the mass number, stays the same. The atomic number goes up by 1." — Three ideas in one message, with no pause to let her work out either number change for herself.
- **2.4** [F8, minor] "The atomic number goes up by 1." — The rule is stated in the message straight before the question, so the question is only 6 + 1.
- **2.4** [F3, a teacher would correct it] "Carbon-14 has atomic number 6." — The "-14" way of naming a nucleus is never explained as the mass number, here or later (radium-226, radon-222, potassium-40). She may wonder what the 14 is.
- **2.6** [F8, a teacher would correct it] "Paper does not stop beta. A sheet of aluminium a few millimetres thick does." — The very next message asks which radiation gets through paper but not a few mm of aluminium. The answer has just been given word for word.
- **2.7** [F15, minor] "the atomic number goes up by 1 and the mass number stays the same" — Two separate points are joined as one marking point, so a line with only one of them cannot be credited cleanly. The feedback "You have this: a neutron turns into a proton (and an electron)." also reads oddly with its bracket.
- **3.2** [F3, a teacher would correct it] "Gamma rays have no mass and no charge." — "Charge" has not been mentioned at all: she has not been told protons, electrons, alpha or beta particles are charged. "No charge" means nothing to her here.
- **3.1 to 3.3** [new, minor] "Gamma rays have no mass and no charge." — Five told messages in a row (3.1, 3.1b, 3.2, 3.2b, 3.3) with only Next to press before any question. She is likely to tap through without reading.
- **3.3** [P6, a teacher would correct it] "Gamma is weakly ionising: it makes few ions, so it travels a long way through air and through the body. Thick lead or thick concrete reduces it a lot, but never stops it completely." — Several ideas in one message: weakly ionising, long range, passes through the body, lead and concrete reduce it, never fully stopped.
- **3.6** [F3, minor] "compare how far each kind penetrates, its range in air and how strongly it ionises" — "Range in air" is used without saying it means how far the radiation travels in air. The same message takes care to explain "penetrate".
- **3.9** [P4, a teacher would correct it] "In one line: what is gamma radiation, and what does lead do to it?" — Key point 3 is closed without its danger being taught: that gamma can pass into the body from outside and damage organs and DNA. Choosing a radiation for a job (3.6, 3.7) is told but never asked about.
- **3.9** [new, minor] "Yes: your line makes every point. You have this: gamma is electromagnetic radiation (waves from the nucleus). You have this: thick lead reduces it but does not stop it completely." — The same mechanical "You have this:" feedback as at 1.16, with a bracketed mark-scheme phrase read back to her.
- **4.4** [F8, a teacher would correct it] "Man-made sources include medical X-rays, fallout from nuclear weapons tests, and nuclear accidents." — The message just before the question names both wrong options as man-made, and radon was called the biggest natural source three messages earlier. The question needs no thought.
- **4.5b** [new, minor] "Dose is measured in sieverts (Sv). A smaller unit is the millisievert (mSv): 1000 mSv = 1 Sv." — Dose and its units are told and never used or asked about, not even a simple conversion. It will not stick.
- **4.6 right answer** [new, a teacher would correct it] "Your job matters too: working with X-rays adds to your dose." — A new fact from the key point is slipped into the reply to a right answer only. A girl who answers wrongly or says don't know never hears that her job affects her dose.
- **4.8b** [P6, minor] "Radium-226 gives out an alpha particle and becomes radon-222: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He. The arrow means "becomes". A decay written with symbols like this is called a nuclear equation." — Her first full equation, the meaning of the arrow and the new term "nuclear equation" all come in one message.
- **4.9** [new, would confuse or mislead her] "Its bottom number is −1, which keeps the bottom numbers balanced when a neutron turns into a proton." — She was told at 4.7 that the bottom number is the atomic number, the count of protons, so −1 will puzzle her. "It keeps the numbers balanced" is circular; the real reason, the electron's charge opposite to a proton's, is never given.
- **4.12** [new, minor] "Yes: your line makes every point. You have this: the top numbers (mass numbers) add up the same on each side. You have this: the bottom numbers (atomic numbers) add up the same on each side." — The same mechanical "You have this:" feedback again, long and repetitive.
- **whole script** [P14, a teacher would correct it] "The picture puts all three side by side: alpha ends at the paper, beta ends at the aluminium, and some gamma still gets through the lead." — There is nothing hands-on in 76 steps and only this one picture: no absorber to try, no Geiger counter to listen to, no picture of a nucleus or alpha particle. It is tap Next and pick one of three throughout, and she is likely to get bored.
- **The end (summary)** [new, minor] "Summary, point 4 of 4: In a nuclear equation, the mass numbers on each side add up to the same total, and so do the atomic numbers." — The summary leaves out much of what was taught: unstable nuclei and random decay, activity in becquerels, ionising, background radiation and dose. Each point only repeats the model "good line" word for word.

## Overall

Not as it stands. The physics is mostly sound and the don't-know steps do get easier, but the lesson opens by quizzing her on protons, neutrons and atomic number that it never teaches, and it uses "charge" and a bottom number of −1 with no explanation. Several questions (1.4b, 2.6, 4.4) are answered by the message just before them, many messages carry three ideas, and there is nothing to do except tap Next and pick from three, with one picture in the whole lesson. I would want the opening recall turned into teaching, the −1 and "decay never stops" lines corrected, the give-away questions reworked and the gamma danger added before she uses it.
