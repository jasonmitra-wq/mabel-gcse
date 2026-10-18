# Teach sim: p4-radioactivity (run, persona bored, 2026-10-18)

Model claude-sonnet-5-5. 19 tutor turns, 1 flagged. Complete: true. Coverage: [true,false,true,true].

Lesson flags: points never completed: 1 "Beta radiation (β)"

**Tutor** [opening (what she knows)]: Welcome, I'm glad you're here! Think about a time you've seen something give off energy that you couldn't see coming out, like a hot radiator or a torch. How could you tell it was giving something out?

**Student** (try): felt the heat from the radiator

**Tutor** [start, point 0]: Yes — feeling heat on your skin is a good way to know something is giving energy out. If you held a source giving out alpha particles a few centimetres from your skin, what do you think would happen to those particles?

**Student** (wrong): whats an alpha particle

**Tutor** [retry, point 0]: An alpha particle is a tiny lump of matter that some unstable atoms fire out, made of 2 protons and 2 neutrons stuck together. If you held a sheet of paper in front of a source giving out alpha particles, what would happen to them?

**Student** (try): they'd get stopped by the paper?

**Tutor** [fact, point 0]: Yes — paper stops alpha particles, so they can't get through it. But alpha particles are highly ionising: they knock electrons off atoms they pass, and a source swallowed or breathed in has no skin to stop it. Why would that be dangerous inside your body?

**Student** (wrong): cos they'd knock electrons off your cells and damage them?

**Tutor** [fact, point 0]: Yes — knocking electrons off atoms in your cells damages them. A source's activity is how many of its unstable nuclei decay each second, measured in becquerels (Bq). If a source has a high activity, what does that tell you about how much radiation it gives out?

**Student** (offtopic): whats activity mean tho

**Tutor** [retry, point 0]: Activity is how fast a source is "going off", like how many popcorn kernels pop each second in a pan. Each pop here is one unstable nucleus decaying, so more pops per second means more radiation coming out. If source A has an activity of 500 Bq and source B has 20 Bq, which one gives out more radiation?

**Student** (bored): k

**Tutor** [checkin, point 0]: This bit is a tricky one, so no worries. Do you want me to just tell you the rest of this one?

**Student** (checkin-no): nah tell me the answer

**Tutor** [next, point 0]: Source A, at 500 Bq, gives out more. Here's the rest: an unstable nucleus gives out radiation to become more stable, and it happens at random. An alpha particle is a helium nucleus, 2 protons and 2 neutrons, so the mass number falls by 4 and the atomic number by 2. It's stopped by paper or about 5 cm of air, but it's very dangerous if swallowed or breathed in.  Next up: a beta particle is a fast electron that comes out of the nucleus. If a neutron turns into a proton, where do you think the electron comes from?

> Recap: Alpha particles are 2 protons and 2 neutrons fired out by unstable atoms. / Paper stops them, so outside the body they can't get through skin. / Highly ionising: they knock electrons off atoms, so inside the body they damage cells. / Activity is how many nuclei decay each second, measured in becquerels (Bq).

⚑ over length (100 words)

**Student** (bored): this is confusing lol

**Tutor** [retry, point 1]: Fair enough, let me simplify. A neutron in the nucleus turns into a proton, and that change makes a fast electron which shoots out. That electron is the beta particle, made inside the nucleus, not taken from the outside of the atom.  So where is the beta particle made?

**Student** (wrong): from the electrons outside the atom?

**Tutor** [fact, point 1]: Not quite, but that's a really common mix-up: the beta particle is made inside the nucleus, when a neutron turns into a proton. When that happens, the nucleus has gained one proton, so its atomic number (its number of protons) goes up by 1. How many protons does it have afterwards?

**Student** (bored): can we skip this

**Tutor** [next, point 1]: Skipping beta for now; it was about fast electrons made in the nucleus. Next is gamma, which is high-energy waves from the nucleus, with no mass and no charge. Look at the diagram: paper stops alpha, aluminium stops beta, but thick lead only reduces gamma. Which of the three passes through the most material?

🖼 Diagram shown: p4-penetration — "Paper stops alpha. A few millimetres of aluminium stop beta. Thick lead only reduces gamma."

**Student** (bored): gamma i guess

**Tutor** [fact, point 2]: Yes — gamma passes through the most material, which is why it needs thick lead to cut it down. So if gamma is the highest-energy wave, what does that tell you about how much damage it could do passing through your body?

**Student** (try): it could do loads of damage cos its strong?

**Tutor** [next, point 2]: Yes, you're right that gamma's high energy means loads of damage. One source is radon gas coming out of rocks. Which part of the UK's ground do you think radon comes from?

> Recap: Gamma is a high-energy wave from the nucleus, with no mass or charge. / Paper stops alpha, aluminium stops beta, but gamma only fades in thick lead. / Gamma passes through the most material of the three. / That high energy means it can cause real damage inside the body.

**Student** (try): dunno, rocks underground?

**Tutor** [retry, point 3]: Yes, rocks underground is right: radon gas seeps out of rocks, and it's the biggest source of background radiation in the UK. Background radiation just means the low-level radiation that's always around us. Since some rocks give out more radon than others, what would that change about the radiation you get?

**Student** (bored): this is long

**Tutor** [fact, point 3]: Sorry, that was a lot. A nuclear equation is like a balanced bank account: the numbers going in must match the numbers coming out. If the left side adds up to 10, what must the right side add up to?

**Student** (wrong): whats a nuclear equation

**Tutor** [retry, point 3]: A nuclear equation is a short sum showing a radioactive atom changing into something else, with the mass numbers balanced on both sides. If the left side's mass numbers add to 14, what do the right side's add to?

**Student** (try): also 14?

**Tutor** [fact, point 3]: Yes, 14 is right: the mass numbers must balance on both sides. Next, the radiation dose you receive is measured in sieverts (Sv), and 1000 millisieverts (mSv) = 1 sievert (Sv). What unit measures your radiation dose?

**Student** (try): sieverts?

**Tutor** [complete, point 3]: Yes, sieverts is right: that's the unit for radiation dose. That brings us to the end of this lesson.

> Recap: Background radiation is the low-level radiation that is always around us. / Radon gas seeping out of rocks is the biggest UK source. / In a nuclear equation, mass numbers must add up the same on both sides. / Radiation dose is measured in sieverts, and 1000 millisieverts make 1 sievert.

**Student** (closing): ok thanks bye

**Tutor** [free]: Thanks for sticking with it. Today you answered questions on gamma radiation (γ) and I told you about radioactive decay and alpha radiation (α) and background radiation and nuclear equations. Your progress is saved, so you can come back to this lesson any time. Bye for now!

## Judge (claude-opus-5-5)

**FAIL** — question does not match what was taught: T1, T2, T11, T12; flow faults: unexplained_term T1, unexplained_term T4, unexplained_term T14, answer_in_question T3, answer_in_question T5, answer_in_question T7, answer_in_question T8, answer_in_question T10, answer_in_question T12, answer_in_question T14, answer_in_question T15, answer_in_question T16, checkin_without_struggle T6, tell_me_skipped_content T7, factual_or_unit_slip T12, factual_or_unit_slip T15

Engagement 2/5 — "this is long"

Would quit: false

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | null | false | false | "Think about a time you've seen something give off energy that you couldn't see coming out, like a hot radiator or a torch." — Everyday warm-up before any teaching. |
| T1 | true | false | false | true | "If you held a source giving out alpha particles a few centimetres from your skin, what do you think would happen to those particles?" — Asks about alpha particles before saying what they are. She replies 'whats an alpha particle'. |
| T2 | true | false | false | false | "If you held a sheet of paper in front of a source giving out alpha particles, what would happen to them?" — Teaches what alpha is made of, then asks about paper stopping it, which was never taught. |
| T3 | true | true | false | false | "Why would that be dangerous inside your body?" — The answer ('knock electrons off atoms') is in the same message. |
| T4 | true | true | false | false | "A source's activity is how many of its unstable nuclei decay each second, measured in becquerels (Bq)." — 'decay' is used without an everyday explanation. |
| T5 | true | true | false | false | "If source A has an activity of 500 Bq and source B has 20 Bq, which one gives out more radiation?" — The rule 'more pops per second means more radiation' is given just before the question. |
| T6 | true | null | false | false | "This bit is a tricky one, so no worries. Do you want me to just tell you the rest of this one?" — Check-in offered after only one short reply ('k'). |
| T7 | true | true | true | true | "Next up: a beta particle is a fast electron that comes out of the nucleus. If a neutron turns into a proton, where do you think the electron comes from?" — About 95 words. Says the electron comes out of the nucleus, then asks where it comes from. She replies 'this is confusing lol'. |
| T8 | true | true | false | false | "So where is the beta particle made?" — Answer ('made inside the nucleus') is stated just before. |
| T9 | true | true | false | true | "How many protons does it have afterwards?" — Cannot be answered: no starting number of protons was given. |
| T10 | true | true | false | false | "Which of the three passes through the most material?" — Answer is given just before: 'thick lead only reduces gamma'. |
| T11 | true | false | false | true | "So if gamma is the highest-energy wave, what does that tell you about how much damage it could do passing through your body?" — Leading question that steers her towards 'loads of damage'. Ionising power was never taught for gamma, and gamma is the least ionising. |
| T12 | true | false | false | true | "Yes, you're right that gamma's high energy means loads of damage. One source is radon gas coming out of rocks." — Confirms a misconception. Says 'one source' without saying of what (background radiation not yet introduced). The answer 'rocks' is in the same message. |
| T13 | true | true | false | false | "Yes, rocks underground is right: radon gas seeps out of rocks, and it's the biggest source of background radiation in the UK." |
| T14 | true | true | false | true | "A nuclear equation is like a balanced bank account: the numbers going in must match the numbers coming out." — Uses 'nuclear equation' without explaining it. The bank-account analogy is muddled. The question is trivial. |
| T15 | true | true | false | true | "A nuclear equation is a short sum showing a radioactive atom changing into something else, with the mass numbers balanced on both sides." — Leaves out that atomic numbers must also balance, which is the lesson's main common mistake. |
| T16 | true | true | false | false | "What unit measures your radiation dose?" — Answer given in the sentence just before. |
| T17 | true | null | false | false | "That brings us to the end of this lesson." — Ends the lesson without teaching atomic-number balancing, alpha/beta/gamma in equations, or the inside/outside-the-body hazards. |
| T18 | true | null | false | false | "Today you answered questions on gamma radiation (γ) and I told you about radioactive decay and alpha radiation (α) and background radiation and nuclear equations." — Clunky summary. She also answered alpha and nuclear-equation questions. |

Tone vs reference: n/a (no reference)


Flow faults (16):

- T1 **unexplained_term** — "If you held a source giving out alpha particles a few centimetres from your skin, what do you think would happen to those particles?" — 'alpha particles' is used in a question before it is explained.
- T4 **unexplained_term** — "A source's activity is how many of its unstable nuclei decay each second, measured in becquerels (Bq)." — 'decay' is never explained in everyday words.
- T14 **unexplained_term** — "A nuclear equation is like a balanced bank account: the numbers going in must match the numbers coming out." — She asks 'whats a nuclear equation'.
- T3 **answer_in_question** — "But alpha particles are highly ionising: they knock electrons off atoms they pass" — She copies it back: 'knock electrons off your cells'.
- T5 **answer_in_question** — "so more pops per second means more radiation coming out." — The rule is stated just before the 500 Bq vs 20 Bq question.
- T7 **answer_in_question** — "Next up: a beta particle is a fast electron that comes out of the nucleus." — States where the electron comes from, then asks it.
- T8 **answer_in_question** — "That electron is the beta particle, made inside the nucleus, not taken from the outside of the atom." — Then asks where it is made.
- T10 **answer_in_question** — "Look at the diagram: paper stops alpha, aluminium stops beta, but thick lead only reduces gamma." — Answers 'which passes through the most'.
- T12 **answer_in_question** — "One source is radon gas coming out of rocks." — Then asks where radon comes from.
- T14 **answer_in_question** — "the numbers going in must match the numbers coming out." — Then asks what the right side must add up to.
- T15 **answer_in_question** — "with the mass numbers balanced on both sides." — Then asks 14 → ?
- T16 **answer_in_question** — "Next, the radiation dose you receive is measured in sieverts (Sv)" — Then asks which unit measures dose.
- T6 **checkin_without_struggle** — "Do you want me to just tell you the rest of this one?" — 'k' was her first short reply, not the second in a row.
- T7 **tell_me_skipped_content** — "Source A, at 500 Bq, gives out more. Here's the rest:" — Leaves out the Geiger-Muller tube and count rate, and that radiation can also be a neutron (keyPoints[0]).
- T12 **factual_or_unit_slip** — "Yes, you're right that gamma's high energy means loads of damage." — The lesson says gamma is weakly ionising (least ionising). This confirms a misconception.
- T15 **factual_or_unit_slip** — "with the mass numbers balanced on both sides." — Implies only mass numbers balance. Atomic numbers must balance too (commonMistakes[2]).

Fixes:

1. **keyPoints[2].writeBullets[3] / teach-core: never affirm a wrong answer**: After the gamma penetration question, teach 'gamma is weakly ionising: it goes far but ionises few atoms'. Do not ask the leading 'highest-energy → damage' question. If she says gamma does loads of damage, correct it: it is dangerous from outside because it reaches organs, but it ionises weakly. — "Yes, you're right that gamma's high energy means loads of damage."
2. **teach-core: tell-me summary**: When she asks to be told, cover every keyPoints[0].writeBullets item (including count rate/detector and neutron) in at most two short sentences per message. Move to beta in a separate message, and do not ask a question whose answer was just stated. — "Next up: a beta particle is a fast electron that comes out of the nucleus. If a neutron turns into a proton, where do you think the electron comes from?"
3. **teach-core: question generation**: Reject any question whose answer appears in the same or the previous tutor message. Ask her to apply the idea to a new case instead, e.g. 'Which would get through a sheet of paper: alpha or gamma?' rather than restating the diagram. — "Which of the three passes through the most material?"
4. **keyPoints[1].content**: Add a concrete number to use in the beta question, e.g. 'Carbon-14 has 6 protons. After beta decay, how many?' (answer 7), so the question can actually be answered. — "How many protons does it have afterwards?"
5. **keyPoints[3].content**: Introduce 'nuclear equation' with a tiny worked example in notation (top = mass, bottom = atomic). State that both the top and bottom numbers balance. Then ask her to fill in a bottom number. Drop the bank-account analogy. — "A nuclear equation is like a balanced bank account: the numbers going in must match the numbers coming out."
