# Review: p4-half-life (2026-11-27)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 38 findings, cost $0.5533.

## Counts (made in code from the findings)

- new: 11
- F3: 8
- F8: 5
- F2: 3
- F1: 2
- F5: 2
- L3: 1
- P9: 1
- F9: 1
- P14: 1
- F7: 1
- P16: 1
- M1: 1

## Findings

- **1.1a** [L3, would confuse or mislead her] "First, two quick questions from the last lesson. What is the activity of a radioactive source?" — The lesson opens by testing activity, nuclei and decay before any of them is explained here. A girl meeting the topic for the first time can only guess.
- **1.1a wrong answer (How far its radiation travels)** [F3, minor] "Not quite: that is its range." — "Range" is used as a technical term with no explanation.
- **1.1b right answer** [new, minor] "Yes: radioactive decay is random, like rolling dice." — She has just tapped "No: decay is random" and the reply opens "Yes:". Replying Yes to a No answer reads oddly.
- **1.2** [P9, a teacher would correct it] "just as a million coin tosses give almost exactly half heads" — This is a second everyday comparison, straight after the dice in 1.1b. The checklist allows one.
- **1.2** [F1, minor] "Each decay is random" — The randomness of decay was stated in the reply to 1.1b one message earlier and is said again here.
- **1.3** [F3, a teacher would correct it] "The half-life of a radioactive isotope" — "Isotope" is used here, and again in 1.9, 3.1 and 3.2, without ever being explained.
- **1.3** [F5, a teacher would correct it] "The half-life of a radioactive isotope is the time it takes for the number of unstable nuclei in a sample to halve." — Three new terms arrive in one sentence: half-life, isotope and unstable nuclei. Until now the lesson has only said "nuclei".
- **1.4** [F3, a teacher would correct it] "the time for the activity, or the count rate, to fall to half" — "Count rate" is used but never defined. The key point's line about what a detector records each second is missing from the script.
- **1.6** [F2, minor] "Each half-life, it halves again." — The message opens with "it" before saying what halves. The activity is only named in the next sentence.
- **1.8** [F9, a teacher would correct it] "Exam questions often go the other way. If a quarter is left, the activity has halved twice: that is 2 half-lives. Write "2 half-lives" in words, not just the number 2." — This is exam-technique talk aimed at a reviser, not a first-time learner. "The other way" is not explained, and the message mixes a new idea with a writing tip.
- **1.9 don't know (first time)** [new, would confuse or mislead her] "Halve once: 1/2. Twice: 1/4. How many halvings give 1/8? (same buttons)" — The hint asks for a number of halvings (3), but the buttons are still 48, 12 and 18 hours. She cannot answer the question she has just been asked.
- **1.10** [new, a teacher would correct it] "You can also give the fall as a ratio. After 2 half-lives, 1/4 of the activity is left, so it has fallen by 3/4 of its starting value." — It calls a fraction a "ratio", and "fallen by 3/4" sits next to "1/4 left" with no question to check she can tell the two apart. She is likely to mix them up.
- **2.5** [F8, minor] "the activity falls from 600 Bq to 300 Bq in 4 hours. How long will it take to fall from 300 Bq to 150 Bq?" — Message 2.4 has just shown exactly this pattern (800 to 400 in 2 hours, 400 to 200 in another 2 hours). She only has to copy it.
- **2.5** [P14, a teacher would correct it] "On a decay graph, the activity falls from 600 Bq to 300 Bq in 4 hours." — The key point is reading and drawing graphs, but she never reads a value off a graph or plots a point herself. There is one picture in the whole lesson, the question gives her the numbers in words, and nothing is hands-on.
- **2.7** [F8, a teacher would correct it] "You plot a decay graph. Where should the curve end?" — Message 2.6 has just said "a smooth curve that never touches the x-axis", and 2.2 said it never reaches zero. The answer was given immediately before the question.
- **2.7 don't know (first time)** [new, minor] "If you keep halving a number, do you ever get exactly zero? (same buttons)" — The hint is a yes/no question, but the buttons are still the three descriptions of the curve.
- **2.8 (Some / None)** [F2, minor] "Still needed: the half-life is the time between them." — "Them" has no clear referent. The first point mentions only one time, so "between them" does not make sense on its own.
- **3.3** [F3, would confuse or mislead her] "Which kind of radiation should a tracer give out?" — Alpha, beta and gamma have not been mentioned anywhere in this lesson, nor what each can pass through. She cannot answer from what she has been told.
- **3.3 don't know (first time)** [F7, a teacher would correct it] "The camera is outside the body. Which radiation gets through skin and muscle?" — The easier step still depends on knowing the penetrating power of alpha, beta and gamma, which the lesson has not taught. It is no easier for her.
- **3.4** [F3, minor] "so the patient's total dose stays low" — "Dose" is used without saying what it means.
- **3.5** [F8, a teacher would correct it] "Why should a tracer have a short half-life?" — Message 3.4 has just said "its activity falls quickly after the scan, so the patient's total dose stays low", which is the right button almost word for word.
- **3.5 don't know (first time)** [new, minor] "Is that good or bad for the patient's dose? (same buttons)" — The hint asks "good or bad", but the buttons are the three "So it…" sentences. The reply does not fit the choices.
- **3.5 wrong answer (So it stays in the body longer)** [P16, a teacher would correct it] "a short half-life means it stops being radioactive quickly" — This contradicts the lesson's own point that activity keeps halving and never reaches zero. It also does not correct the muddle between half-life and how long the tracer stays in the body.
- **3.6** [F5, minor] "A tumour is a lump of cancer cells. Using radiation to kill them is called radiotherapy." — Two new terms, tumour and radiotherapy, come in one message.
- **3.8** [F3, a teacher would correct it] "Both uses expose the patient to ionising radiation" — "Ionising" is used here but what it does is not described until 4.6.
- **3.9** [new, a teacher would correct it] "To judge a use, compare the data with and without it." — The wording is muddled. It is not clear what "with and without it" refers to, and a 15-year-old would not know what she is being told to compare.
- **3.6 to 3.9** [M1, a teacher would correct it] "Using radiation to kill them is called radiotherapy." — There are four tell-only messages in a row on radiotherapy, risk and perceived risk, with no question on any of them. The own-words question that follows goes back to tracers, so this content is never checked.
- **3.10** [F1, minor] "In one line: why does a medical tracer give out gamma, with a short half-life?" — The gamma and short half-life reasons have already been told and asked in 3.3, 3.4 and 3.5. This is the third pass before the quiz asks again.
- **4.5** [F8, a teacher would correct it] "Is the fruit radioactive afterwards?" — Message 4.2 said "An irradiated object does not become radioactive", and the right button repeats it as "No: irradiation does not make it radioactive". The option carries its own explanation.
- **4.5 right answer** [new, minor] "Yes: the fruit was exposed to radiation, but no radioactive atoms were left on it." — She chose "No" and the reply opens "Yes:". For a split second it reads as "Yes, it is radioactive".
- **4.5 don't know (first time)** [new, minor] "Were any radioactive atoms left on the fruit, or was it only exposed to radiation? (same buttons)" — The hint is an either/or question, but the buttons are Yes/No/Yes sentences that do not match it.
- **4.8** [F3, a teacher would correct it] "Alpha is the most ionising, so alpha inside the body is the biggest danger" — Alpha has never been explained in this lesson: what it is, or that it is stopped by skin. So "inside the body" has no reason behind it.
- **4.11** [F8, a teacher would correct it] "Two samples have the same number of nuclei. Which gives the bigger dose in the first minute?" — Message 4.10 has just said "For the same number of nuclei, a short half-life gives a high activity at first". The answer comes directly before the question.
- **4.11** [new, a teacher would correct it] "Two samples have the same number of nuclei. Which gives the bigger dose in the first minute?" — The question never says the two samples have different half-lives; she learns that only from the buttons. It also treats higher activity as the same thing as bigger dose, which depends on the type of radiation too.
- **4.11 don't know (first time)** [new, minor] "Does that mean more or fewer decays each second? (same buttons)" — The hint asks "more or fewer", but the buttons are about which half-life. The reply does not fit the choices.
- **4.19** [F3, minor] "Background radiation" — This quiz option uses a term the lesson never taught.
- **4.21** [new, a teacher would correct it] "Alpha is the most ionising, and nothing shields you" — "Nothing shields you" is vague. The lesson never taught that alpha is stopped by skin outside the body or that it "travels the least far", so half the right answer and the wrong-answer reply rest on untaught facts.
- **Summary, point 3 of 4** [F2, minor] "Gamma passes out of the body to the camera, and a short half-life keeps the patient's dose low." — The summary line never mentions a tracer, so read on its own it is out of context. It sounds as if a short half-life is always what you want.

## Overall

Not as it is. The half-life arithmetic in key point 1 is sound and well stepped, but the lesson leans on things it never teaches: activity, isotope, count rate, and above all alpha, beta and gamma, so the tracer and alpha-danger questions cannot be answered by a first-time learner. Several questions (2.7, 3.5, 4.5, 4.11) are answered by the message just before them, and several "don't know" hints ask a question the buttons do not fit. I would want those fixed, the alpha/beta/gamma basics told before 3.3, and a real graph for her to read in key point 2 before she uses it.
