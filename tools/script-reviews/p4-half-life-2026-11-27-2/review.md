# Review: p4-half-life (2026-11-27)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 33 findings, cost $0.6824.

## Counts (made in code from the findings)

- new: 14
- F8: 4
- F12: 3
- P6: 3
- F3: 2
- F5: 1
- P4: 1
- P13: 1
- F1: 1
- P16: 1
- M1: 1
- P14: 1

## Findings

- **1.1b** [F12, minor] ""Yes: the biggest one" / "No: decay is random" / "Yes: the oldest one"" — The right button is the only 'No' and carries the reason itself, so she can pick it without thinking. The two wrong options are not ideas a pupil really holds, and both get the identical reply.
- **1.1a wrong answer (How far its radiation travels)** [new, minor] "Not quite: that is how far it reaches." — The reply just hands her own answer back in other words; it tells her nothing about why it is not activity.
- **1.2** [new, a teacher would correct it] "With so many, the overall rate of decay can be predicted well." — She has just agreed that decay is random and is now told it is predictable, with no reason given. A teacher would stop here with coins or dice to show why big numbers make chance predictable; as written it is simply asserted and never asked about.
- **1.3a** [F5, minor] "Remember: isotopes are atoms of the same element with different numbers of neutrons. A radioactive isotope is one whose nuclei are unstable, so they decay." — Isotope, radioactive isotope and unstable all arrive in one message as a 'Remember', with no check that she does remember. If she has forgotten isotopes, this single line is all she gets.
- **1.4** [P6, a teacher would correct it] "The count rate is the number of decays a detector records each second. The activity and the count rate fall in step with the number of unstable nuclei. So the half-life is also the time for the activity, or the count rate, to fall to half." — Three ideas in one bubble: a new quantity, a claim that it falls in step with the nuclei (not explained), and a second definition of half-life. Each needs its own message.
- **1.4** [F3, minor] "the number of decays a detector records each second" — 'Detector' is used without saying what it is or what it does.
- **1.5 wrong answer (0 Bq)** [new, minor] "Not quite: after one half-life only half the unstable nuclei have decayed." — 'Not quite' opens every wrong reply in the lesson, even for answers that are completely wrong (0 Bq here, 'Radiotherapy radiation is harmless' at 3.8b). It does not fit those answers and becomes a stock phrase.
- **1.6** [P6, minor] "A₀ stands for the starting activity. After 1 half-life the activity is A₀ ÷ 2; after 2 half-lives, A₀ ÷ 4; after 3, A₀ ÷ 8." — A new symbol and three results in one message, and A₀ is never used again in any question or reply. It is notation she has to take in for no purpose.
- **1.6 to 1.11** [P4, minor] "After 1 half-life the activity is A₀ ÷ 2; after 2 half-lives, A₀ ÷ 4; after 3, A₀ ÷ 8." — The key point includes the general rule for n half-lives, A₀ × (½)ⁿ, but the script stops at three half-lives and still closes the key point.
- **1.7** [P13, a teacher would correct it] "A source starts at 640 Bq. Its half-life is 5 days. What is its activity after 15 days, in Bq?" — She has never been shown how to turn a time into a number of half-lives (15 ÷ 5 = 3); the only earlier question used exactly one half-life. There should be a worked example of the two-step method before she is asked to do it alone.
- **1.11 all points** [new, minor] "Yes: your line makes the point. You have this: the time for the number of unstable nuclei (or the activity) to halve." — Stilted feedback that reads like a mark scheme, not a teacher. 'You have this:' followed by a sentence fragment recurs on every own-words step (2.8, 3.10, 4.14).
- **2.4** [new, a teacher would correct it] "The activity falls from 800 Bq to 400 Bq in 2 hours, and from 400 Bq to 200 Bq in another 2 hours. So the half-life is 2 hours." — The one graph in the lesson is read for her, in the message and again in its labels ('half-life = 2 hours'). She is never asked to find 800, 400 and the two times on the graph herself.
- **2.5** [new, a teacher would correct it] "On another decay graph, the activity is 900 Bq at 0 hours and 450 Bq at 5 hours." — It says 'on another decay graph' but no graph is shown; the readings are handed over in words. A key point called reading and drawing decay graphs ends without her ever reading or plotting a point.
- **2.7** [F8, a teacher would correct it] "You draw a decay graph starting at 800 Bq, with a half-life of 2 hours. What activity do you plot at 4 hours, in Bq?" — Same numbers as the picture at 2.4, which already said 'from 400 Bq to 200 Bq in another 2 hours'; the 1.5 wrong-answer reply also said '200 Bq is after two half-lives, 4 hours'. The answer has been given, so use fresh numbers.
- **2.7 don't know (again)** [new, minor] "so the point is at 800 → 400 → 200 Bq" — Muddled wording: the point is at 200 Bq, not at a chain of three values.
- **2.8 all points** [new, minor] "Yes: your line makes every point. You have this: read the time at one activity and the time when it has fallen to half of it. You have this: the half-life is the time between these two readings." — 'You have this:' twice in a row, reciting the marking points back at her. A teacher would simply say 'Yes' and give one clean sentence.
- **3.3** [F8, minor] "Which kind of radiation should a tracer give out?" — The message immediately before it says 'gamma passes through the body' and the one before that says the camera is outside the body. The question is recall of the last line, not thinking.
- **3.5** [F12, minor] ""So its activity soon falls and the dose stays low"" — The right button contains the whole explanation the question asks for, and the other two are obviously silly ('more radiation over the years'). The new word 'dose' is also defined inside the question message itself.
- **3.6** [F3, minor] "A tumour is a lump of cancer cells." — A lone word-box message, and it explains tumour using 'cancer', which is not explained until 4.7 ('that is cancer').
- **3.8b** [F8, a teacher would correct it] "Why do doctors use radiotherapy, even though radiation can harm healthy cells?" — The message just before (3.8) says 'doctors use radiation only when the benefit is bigger than the risk… radiotherapy can cure a cancer'. The answer was given one bubble earlier; 3.8 is itself overloaded with a recall of ionising, the benefit-and-risk rule and two examples.
- **3.10** [F1, a teacher would correct it] "In one line: why do doctors use radiation in medicine, even though it carries a risk?" — The same benefit-bigger-than-risk point is told at 3.8, asked at 3.8b and asked again here two messages later. Tracers, gamma and short half-life, the real content of this key point, are left out of the own-words check.
- **3.9** [new, would confuse or mislead her] "To judge a medical use, compare patients who have it with patients who do not." — Muddled: 'have it' has no clear referent (the treatment? the illness?), and it does not say what to compare or what 'the data' are. Perceived risk and evaluating a use are two new ideas in one bubble, neither with an example nor a question.
- **4.5** [F8, minor] "Fruit is irradiated with gamma rays to kill germs. Is the fruit radioactive afterwards?" — 4.2 said in so many words 'An irradiated object does not become radioactive', and the question even uses the word 'irradiated'. It is recall of a sentence rather than a test of the idea.
- **4.8** [P16, would confuse or mislead her] "Skin stops alpha from outside, but inside the body nothing stops it." — Wrong as written, and it contradicts 3.3 ('alpha is stopped inside the body, so the camera outside would see nothing'). Alpha is stopped within a tiny distance of living tissue, and that is exactly why it does so much damage; the script should say there is no dead skin layer to protect the living cells.
- **4.8** [P6, a teacher would correct it] "The risk grows with the dose, and with how ionising the radiation is. Skin stops alpha from outside, but inside the body nothing stops it. Alpha is the most ionising, so contamination with an alpha source is the biggest danger." — Four ideas in one bubble: dose, ionising power, alpha outside versus inside, and the conclusion about contamination.
- **4.10** [new, a teacher would correct it] "a short half-life gives a high activity at first: very dangerous, but not for long" — At 3.5 she learned a short half-life is chosen to keep the patient's dose low; here a short half-life is 'very dangerous'. The script never reconciles the two, and it drops the condition 'for the same number of nuclei'.
- **4.13** [new, minor] "Studies of how radiation affects people are published, so other scientists can check them. This checking is called peer review." — Dropped in after safety rules with no link to anything around it and never asked about. She will not see why it is here.
- **4.6 to 4.13** [M1, a teacher would correct it] "Why is radiation dangerous? When it ionises atoms in the cells of your body, it can damage their DNA" — Eight messages cover DNA, mutation, cancer, dose, alpha, the range of half-lives, protection and peer review with only one question among them (4.11). She is tapping Next on the part with the most new words, and the dangers and protection are never checked before the quiz.
- **4.16** [new, minor] "Any other wrong answer: Not quite: 300 Bq. 6 hours is 2 half-lives: 1200 → 600 → 300 Bq." — Unlike 1.7, there is no targeted reply for the likely slips: 600 (halved once) or 400 (divided by 3). She gets the same line whatever she did wrong.
- **4.17 wrong answer (The time for the radiation to halve)** [new, a teacher would correct it] "Not quite: say what halves: the number of unstable nuclei, or the activity." — The lesson itself taught that half-life is also the time for the activity to fall to half, so a first-timer could fairly pick this option. The reply then tells her to 'say' something on a button question, which does not fit.
- **4.20** [new, minor] "on a decay graph, how does the curve end?" — Odd wording: the point being taught is that the curve does not end at zero. Better: 'what happens to the curve as time goes on?'
- **4.21** [F12, minor] ""Alpha is the most ionising, and inside the body skin cannot stop it"" — The right option is by far the longest and holds the full explanation, so it stands out without any thought.
- **whole script** [P14, a teacher would correct it] "(Under it, a picture: "The activity halves every 2 hours, so the half-life is 2 hours."" — There is nothing to do with her hands anywhere in the lesson: no dice or coin model of decay, no graph to read from or plot on, and one static picture in four key points. It is read, tap Next, pick a button throughout.

## Overall

Not as it is. The half-life arithmetic in key point 1 is mostly sound, but 4.8 says nothing stops alpha inside the body, which contradicts 3.3 and is wrong physics, and 3.9 on judging risk is too muddled to follow. Key point 2 claims to teach reading and drawing decay graphs, yet she never reads or plots a single point, and several questions (2.7, 3.3, 3.8b, 3.10, 4.5) ask for something the previous message has just told her. I would fix the alpha statement, give her a real graph to read, add a worked example before 1.7 and break up the long told run in key point 4 before letting her use it.
