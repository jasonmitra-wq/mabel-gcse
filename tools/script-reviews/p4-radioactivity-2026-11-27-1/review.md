# Review: p4-radioactivity (2026-11-27)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 39 findings, cost $0.6369.

## Counts (made in code from the findings)

- new: 10
- F3: 9
- F5: 5
- P6: 4
- F8: 4
- M1: 2
- P9: 1
- P5: 1
- F10: 1
- F2: 1
- P14: 1

## Findings

- **1.1a** [new, minor] "What is in the nucleus of an atom?" — 1.1 said 'the centre of some atoms' and this step switches to 'nucleus' without ever saying the nucleus is that centre. A girl who has forgotten the last lesson is left to guess the link.
- **1.1b "Its neutrons"** [F3, a teacher would correct it] "Not quite: the atomic number counts the protons. Neutrons = mass number − atomic number." — The reply throws in a formula using 'mass number', which the lesson has not explained, and which does not help with the question asked. (The 'Its protons and neutrons' reply also says 'that is the mass number' without saying what it is.)
- **1.2 to 1.6** [M1, a teacher would correct it] "Now this lesson. Some nuclei are unstable: they cannot stay as they are forever." — Five told messages in a row (unstable, radiation, decay, random, activity, detector) with only Next to tap and no picture. She has nothing to do until 1.7.
- **1.4** [P9, minor] "It is like rolling dice." — This is a second everyday comparison after the fire in 1.2b ('A fire gives out heat and light'), and light is used again in 3.1. The dice comparison is also left unexplained: it does not say what is like what.
- **1.5** [F3, a teacher would correct it] "The activity of a source is the number of its nuclei that decay each second." — 'Source' is used here, and in 1.7, 1.15 and the quiz, without ever being explained as a piece of material containing unstable nuclei.
- **1.5** [F5, a teacher would correct it] "The activity of a source is the number of its nuclei that decay each second. It is measured in becquerels (Bq): 1 Bq is one decay each second." — Two new terms (activity and becquerel), plus the unexplained 'source', in one message.
- **1.6** [F5, a teacher would correct it] "A Geiger-Muller tube is a detector that clicks for each bit of radiation that reaches it. The count rate is the number it records each second." — Three new terms in one message: Geiger-Muller tube, detector and count rate.
- **1.6** [new, a teacher would correct it] "The count rate is the number it records each second." — Coming straight after activity, this reads as the same thing. The lesson never says how count rate differs from activity (the tube only catches some of the radiation), yet quiz question 6 expects her to tell them apart.
- **1.10** [F3, would confuse or mislead her] "Its mass number falls by 4 and its atomic number falls by 2." — 'Mass number' is never explained in the lesson (protons plus neutrons); only atomic number was recalled in 1.1b. Question 1.11 and its hint 'Take them away from 226' then depend on her knowing it.
- **1.10** [P6, a teacher would correct it] "When a nucleus gives out an alpha particle, it loses 2 protons and 2 neutrons. Its mass number falls by 4 and its atomic number falls by 2. It becomes a different element." — Four ideas in one message: what is lost, the mass number change, the atomic number change, and a new element. Why it becomes a different element is not linked back to 'the atomic number decides the element'.
- **1.12** [F5, minor] "Radiation that knocks electrons off atoms as it passes is called ionising radiation. An atom that loses electrons becomes an ion." — Two new terms (ionising radiation and ion) in one message.
- **1.13** [P6, minor] "Alpha is highly ionising: each alpha particle makes lots of ions. That uses up its energy fast, so it only travels about 5 cm in air, and a sheet of paper stops it." — Several ideas at once: highly ionising, loses energy fast, range in air, and stopped by paper.
- **1.14** [new, a teacher would correct it] "Breathed in or swallowed, alpha is very dangerous, because it ionises so much inside the body." — The lesson never says why ionising is harmful (it damages the body's cells). 'Dangerous because it ionises' is just a statement to her, and the later 'it does a lot of damage' is left unexplained.
- **1.15** [F8, a teacher would correct it] "Why is a source that gives out alpha most dangerous when it is swallowed?" — The message just before (1.14) gave the answer: 'Outside the body, alpha is stopped by the skin. Breathed in or swallowed, alpha is very dangerous, because it ionises so much inside the body.' The two wrong options are also obviously false after 1.13.
- **1.16 (also 2.7, 3.9, 4.12)** [new, minor] "Yes: your line makes every point. You have this: 2 protons and 2 neutrons (a helium nucleus). You have this: stopped by paper (or skin, or a few cm of air)." — The own-words feedback reads like a marking checklist, not a teacher: 'You have this: … You have this: …' and bare fragments such as 'Stopped by paper (or skin, or a few cm of air).' The same template is used on all four own-words steps.
- **2.3** [F3, a teacher would correct it] "A proton has the same relative mass as a neutron, so the mass number stays the same." — 'Relative mass' is not explained, and mass number is still undefined. It would be clearer to say that one neutron is lost and one proton gained, so the total number of protons and neutrons is unchanged.
- **2.5** [F3, a teacher would correct it] "Beta is moderately ionising: less than alpha, more than gamma." — Gamma has not been introduced yet; it is taught in key point 3. She cannot compare beta with something she has not met.
- **2.5** [P6, minor] "So it travels further than alpha: about 1 m in air. A sheet of aluminium a few millimetres thick stops it." — Ionising power, range in air and what stops it are all in one message.
- **2.6** [F8, a teacher would correct it] "Which of these stops beta radiation?" — The message immediately before said 'A sheet of aluminium a few millimetres thick stops it.' She only has to copy it.
- **2.6 "Nothing; it is only reduced"** [F3, a teacher would correct it] "Not quite: that is gamma. Beta is stopped by a few mm of aluminium." — The option and its reply rely on gamma's behaviour, which is not taught until key point 3. She has no way to know 'that is gamma'.
- **2.7** [F8, minor] "In one line: what is a beta particle, and what stops it?" — The 'what stops it' half was the answer to the question just before, and its reply has just said 'a few millimetres of aluminium stop beta'.
- **3.2** [P6, minor] "Gamma has no mass and no charge. So when a nucleus gives out gamma, its mass number and atomic number stay the same. Gamma often comes out just after an alpha or beta decay." — Three ideas in one message, and 'charge' is used for the first time without the lesson having said anything about the charge of alpha or beta.
- **3.4** [P5, a teacher would correct it] "The picture puts all three side by side: alpha ends at the paper, beta ends at the aluminium, and some gamma still gets through the lead." — This is the only picture in the lesson and it arrives all at once in key point 3. Alpha and paper, and beta and aluminium, were taught earlier with no picture, so it is not built up step by step.
- **3.5** [F8, minor] "A detector picks up radiation that gets through a few millimetres of aluminium. Which kind is it?" — The message and picture just before said 'beta ends at the aluminium, and some gamma still gets through the lead', so the answer is on the screen.
- **3.6** [F3, minor] "compare how far each kind penetrates, its range in air and how strongly it ionises." — 'Penetrates' is used for the first time without being explained as how far the radiation gets through materials.
- **3.7** [new, would confuse or mislead her] "For example, to detect a source from outside the body, use gamma: it passes out through the body to a detector." — This is muddled. It does not say the source is inside the body, or why one would be there, so 'from outside the body' and 'passes out through the body' do not make sense together for a first-time learner.
- **4.1** [F3, minor] "Radiation is not only made by people. Background radiation is low-level radiation that is around us all the time, from natural and man-made sources." — 'Man-made' is used here but not explained until 4.3. The opener also answers a claim nobody made: the lesson has not said radiation is made by people.
- **4.2** [F5, minor] "The biggest natural source in the UK is radon, a radioactive gas that seeps out of some rocks. Another is cosmic rays, radiation from space. Rocks, buildings, food and drink add a little." — Two new terms (radon and cosmic rays) and a list of further sources in one message.
- **4.3** [F3, minor] "fallout from nuclear weapons tests" — 'Fallout' is used one message before it is explained in 4.3b.
- **4.5** [F5, minor] "How much radiation a person receives is their dose, measured in sieverts (Sv). 1000 millisieverts (mSv) = 1 Sv." — Dose, sievert and millisievert are all introduced in one message, with a conversion that is never used or practised.
- **4.5 to 4.10** [M1, a teacher would correct it] "To find the new nucleus: write the starting nucleus, write the radiation with its numbers, then work out the numbers left over." — Six told messages in a row (dose, where you live, nuclear equations, the alpha example, the beta example, the method) with only Next, and the densest content of the lesson. She is likely to switch off before the one question at 4.11.
- **4.7** [new, minor] "The mass numbers must add up to the same on both sides, and so must the atomic numbers." — 'Both sides' is said before she has seen any equation, so she cannot know both sides of what. The rule should come after the first example.
- **4.8** [F10, would confuse or mislead her] "An alpha particle is written ⁴₂He. Radium-226 gives out alpha and becomes radon-222: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He. Top numbers: 226 = 222 + 4. Bottom: 88 = 86 + 2." — The notation is used without first saying that the top number is the mass number, the bottom number is the atomic number, the letters are the element's symbol and the arrow means 'becomes'. It is also far too much for one message.
- **4.9** [new, a teacher would correct it] "A beta particle is written ⁰₋₁e: mass number 0, and −1 at the bottom for its charge." — She was told the bottom number counts protons, and now it is a 'charge' of −1; charge of particles has not been taught. The top numbers (14 = 14 + 0) are not checked as they were for alpha.
- **4.13** [new, minor] "Now for a short quiz: six questions on the whole lesson." — The quiz is not on the whole lesson: it has no question on gamma or on nuclear equations.
- **4.18** [new, minor] "a source has an activity of 50 Bq. How many of its nuclei decay in 10 seconds?" — Multiplying activity by time was never shown or practised in the lesson; she meets this kind of calculation for the first time in the quiz.
- **61 (Summary, point 4 of 4)** [F2, minor] "The mass numbers on each side add up to the same total, and so do the atomic numbers." — The summary line never mentions a nuclear equation, so 'each side' has nothing to refer to.
- **58 to 61 (Summary)** [new, a teacher would correct it] "Summary, point 1 of 4: An alpha particle is 2 protons and 2 neutrons, like a helium nucleus, and a sheet of paper stops it." — The summary only repeats the four own-words model lines. It leaves out radioactive decay being random, activity in becquerels, ionising power and danger, and all of background radiation and dose.
- **whole lesson** [P14, a teacher would correct it] "Button: Next" — There is nothing hands-on anywhere, for example a source, absorbers and a detector to try. The lesson is all told messages and three-button questions, with a single static picture.

## Overall

Not as it is. The physics is mostly sound and the don't-know steps do get easier, but 'mass number' and 'source' are never explained, gamma is used in key point 2 before it is taught, and the nuclear equation notation in 4.8 and 4.9 is dropped on her without saying what the top and bottom numbers are. Several questions (1.15, 2.6, 3.5) only ask her to repeat the message before, the gamma-in-the-body example in 3.7 is muddled, and long runs of Next-only messages with one picture and nothing hands-on would bore her. I would fix the undefined terms, split the dense messages, build the absorber picture up from key point 1 and rewrite 3.7 and 4.8 to 4.9 before she uses it.
