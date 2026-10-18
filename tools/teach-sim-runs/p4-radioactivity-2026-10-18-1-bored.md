# Teach sim: p4-radioactivity (run, persona bored, 2026-10-18)

Model claude-sonnet-5-5. 19 tutor turns, 1 flagged. Complete: true. Coverage: [true,true,true,true].

Lesson flags: none

**Tutor** [opening (what she knows)]: Welcome, I'm glad you're here! Think about a fire or a heater on a cold day: what do you feel coming off it when you stand nearby?

**Student** (try): heat and light i guess

**Tutor** [start, point 0]: Heat and light, yes. Some atoms give out something similar: tiny particles, called alpha particles, that a sheet of paper can stop. If you held paper in front of a source, what would reach your hand?

**Student** (wrong): the alpha particles would go through

**Tutor** [retry, point 0]: Not quite. Paper is like a wall to alpha particles: they are stopped by it, so nothing gets through to your hand. Think of throwing a ball at a closed door. If you held a sheet of paper in front of an alpha source, what would your hand feel?

**Student** (try): nothing would reach my hand

**Tutor** [fact, point 0]: Yes, nothing reaches your hand: paper stops alpha. Even so, alpha is called ionising radiation, meaning it knocks tiny electrons off the atoms it hits. What do you think happens to an atom that loses an electron?

**Student** (wrong): it becomes charged or something?

**Tutor** [fact, point 0]: Yes, an atom that loses an electron becomes charged, and that's what ionising means. If a source has an activity of 50 Bq, how many of its atoms decay each second?

**Student** (offtopic): whats activity mean

**Tutor** [retry, point 0]: Activity just means how fast a source is decaying, meaning how many of its unstable atoms give out radiation each second. It's like a speedometer reading, but for decays. It's measured in becquerels (Bq), and 1 Bq means one decay each second. So if a source has an activity of 50 Bq, how many of its atoms decay each second?

**Student** (bored): that's confusing mate

**Tutor** [checkin, point 0]: This bit is a tricky one, so no worries. Do you want me to just tell you the rest of this one?

**Student** (checkin-no): nah just tell me

**Tutor** [next, point 0]: So, the answer is 50 atoms each second. Some nuclei are unstable and give out radiation to become more stable, called radioactive decay, and it's random. A Geiger-Muller tube counts decays, and the count rate is the number it records each second. The radiation can be alpha, beta, gamma or a neutron. An alpha particle is 2 protons and 2 neutrons, so the nucleus loses 4 from its mass number and 2 from its atomic number, becoming a new element. Alpha is stopped by paper or a few cm of air, is highly ionising, and is most dangerous if swallowed or breathed in.  Next is beta radiation, which is a fast-moving electron given out by the nucleus when a neutron turns into a proton. A neutron has no charge and a proton has a positive charge. If a nucleus gains a proton, what happens to its atomic number?

> Recap: Alpha particles are stopped by a sheet of paper, so nothing gets through. / Ionising means the radiation knocks electrons off atoms, leaving them charged. / Activity is how many unstable atoms decay each second, measured in becquerels (Bq). / So 50 Bq means 50 decays every second.

⚑ over length (148 words)

**Student** (bored): this is long man

**Tutor** [retry, point 1]: Fair enough, I'll keep it short. Beta radiation is a fast electron fired out of the nucleus when a neutron turns into a proton. The nucleus now has one extra proton. What happens to its atomic number?

**Student** (wrong): it goes down by one?

**Tutor** [fact, point 1]: Not quite: it goes up by 1, because the nucleus gains a proton and the atomic number counts protons. If a nucleus has 6 protons before beta decay, how many does it have after?

**Student** (try): 7 protons?

**Tutor** [next, point 1]: Yes — 7 protons is right, because beta decay adds one. Gamma is different: it is energy sent out from the nucleus, with no mass and no charge. What stops gamma getting through, then?

🖼 Diagram shown: p4-penetration — "Paper stops alpha. A few millimetres of aluminium stop beta. Thick lead only reduces gamma."

> Recap: Beta radiation is a fast electron fired out of the nucleus. / It happens when a neutron turns into a proton. / The nucleus gains one proton, so its atomic number goes up by 1. / 6 protons before beta decay means 7 protons after, a new element.

**Student** (wrong): paper stops it like alpha?

**Tutor** [retry, point 2]: Not quite: paper stops alpha, but gamma goes straight through it, and through your hand too. Only thick lead or thick concrete cuts it down. If gamma passes through your body that easily, what could it damage inside you?

**Student** (try): cells inside maybe? or organs?

**Tutor** [fact, point 2]: Yes, cells and organs are right, since gamma passes through you and can damage DNA. If gamma has the most energy of all these waves, what might that mean for how well it passes through things?

**Student** (try): like more energy means it goes through stuff easier?

**Tutor** [next, point 2]: Now, radiation isn't only in labs: a little is always around you, even right now, from things like rocks and food. If it comes from rocks and food, what do you think makes it "natural" rather than man-made?

> Recap: Gamma is pure energy from the nucleus, with no mass and no charge. / Paper doesn't stop gamma, and it passes through your body too. / Only thick lead or thick concrete cuts gamma down. / Gamma can damage DNA inside cells and organs as it passes through.

**Student** (wrong): it's not made by people in labs?

**Tutor** [fact, point 3]: A nuclear equation shows decay like a sum, with the mass numbers adding up the same on both sides. If a nucleus with mass number 226 gives off an alpha particle of mass number 4, what mass number is left?

**Student** (wrong): whats nuclear equation mean

**Tutor** [retry, point 3]: So if one nucleus has mass number 226 and gives off an alpha particle with mass number 4, what mass number is left?

**Student** (try): um 222?

**Tutor** [fact, point 3]: Yes, 222 is right: 226 take away 4 leaves 222. The radiation dose you receive is measured in sieverts (Sv), and 1000 millisieverts (mSv) make 1 sievert. If someone gets a dose of 2000 mSv, how many sieverts is that?

**Student** (try): um like 2 sieverts?

**Tutor** [complete, point 3]: Yes, 2 sieverts is right: 2000 mSv divided by 1000 gives 2 Sv. That brings us to the end of this lesson. You answered questions on gamma radiation and on background radiation and nuclear equations.

> Recap: Background radiation is always around us, from natural sources like rocks and food. / A nuclear equation shows decay like a sum, with mass numbers matching on both sides. / Alpha decay: 226 minus the alpha particle's 4 leaves a nucleus with mass number 222. / Radiation dose is measured in sieverts, and 1000 mSv make 1 Sv, so 2000 mSv is 2 Sv.

**Student** (closing): whats background radiation

**Tutor** [free]: Background radiation is the low level of radiation that is around us all the time, coming from things like rocks, the air and space. It's there everywhere, even when nothing special is going on.

## Judge (claude-opus-5-5)

**FAIL** — would quit at T7; question does not match what was taught: T4, T10, T11, T12, T13; flow faults: answer_in_question T1, answer_in_question T2, unexplained_term T4, unexplained_term T4, unexplained_term T4, unexplained_term T7, unexplained_term T7, unexplained_term T7, factual_or_unit_slip T10, answer_in_question T10, factual_or_unit_slip T12, answer_in_question T12, correct_answer_not_acknowledged T13, correct_answer_not_acknowledged T14

Engagement 2/5 — "this is long man"

Would quit: T7 — "So, the answer is 50 atoms each second. Some nuclei are unstable and give out radiation to become more stable, called radioactive decay, and it's random." (A block of about 150 words lands right after 'that's confusing mate'. Her reply 'this is long man' shows she is close to leaving.)

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | null | false | false | "Think about a fire or a heater on a cold day: what do you feel coming off it when you stand nearby?" |
| T1 | true | true | false | false | "tiny particles, called alpha particles, that a sheet of paper can stop. If you held paper in front of a source, what would reach your hand?" — The answer is given in the line just before the question. |
| T2 | true | true | false | false | "they are stopped by it, so nothing gets through to your hand. Think of throwing a ball at a closed door. If you held a sheet of paper in front of an alpha source, what would your hand feel?" — The tutor states 'nothing gets through to your hand', then asks for it back. |
| T3 | true | true | false | false | "alpha is called ionising radiation, meaning it knocks tiny electrons off the atoms it hits. What do you think happens to an atom that loses an electron?" |
| T4 | true | false | false | true | "If a source has an activity of 50 Bq, how many of its atoms decay each second?" — Asks about activity, Bq and decay before teaching any of them. |
| T5 | true | true | false | false | "It's measured in becquerels (Bq), and 1 Bq means one decay each second. So if a source has an activity of 50 Bq, how many of its atoms decay each second?" — About 59 words, close to the limit. |
| T6 | true | null | false | false | "This bit is a tricky one, so no worries. Do you want me to just tell you the rest of this one?" |
| T7 | true | true | true | true | "An alpha particle is 2 protons and 2 neutrons, so the nucleus loses 4 from its mass number and 2 from its atomic number, becoming a new element." — About 150 words. Introduces mass number and atomic number without explaining them, then asks about atomic number. |
| T8 | true | true | false | true | "The nucleus now has one extra proton. What happens to its atomic number?" — Atomic number has still not been defined as the count of protons. |
| T9 | true | true | false | false | "it goes up by 1, because the nucleus gains a proton and the atomic number counts protons. If a nucleus has 6 protons before beta decay, how many does it have after?" |
| T10 | true | false | false | true | "What stops gamma getting through, then?" — Penetration was not taught in the text. The question assumes gamma is stopped, which goes against keyPoints[2].tutor_note. Beta's aluminium and ionising facts were skipped. |
| T11 | true | false | false | false | "If gamma passes through your body that easily, what could it damage inside you?" — Damage to cells had not been taught. She has to guess. |
| T12 | true | false | false | true | "If gamma has the most energy of all these waves, what might that mean for how well it passes through things?" — 'These waves' was never introduced, and alpha and beta are not waves. The answer was already given: 'gamma passes through you'. |
| T13 | true | false | false | false | "If it comes from rocks and food, what do you think makes it "natural" rather than man-made?" — Ignores her correct answer. The question tests the everyday meaning of 'natural', not radon or the sources. |
| T14 | true | true | false | false | "If a nucleus with mass number 226 gives off an alpha particle of mass number 4, what mass number is left?" — Does not acknowledge her correct answer. Atomic numbers balancing is skipped. |
| T15 | true | true | false | true | "So if one nucleus has mass number 226 and gives off an alpha particle with mass number 4, what mass number is left?" — Ignores her question 'whats nuclear equation mean'. |
| T16 | true | true | false | false | "If someone gets a dose of 2000 mSv, how many sieverts is that?" |
| T17 | true | null | false | false | "You answered questions on gamma radiation and on background radiation and nuclear equations." — Leaves out that alpha and activity were told to her rather than worked through. |
| T18 | true | null | false | false | "Background radiation is the low level of radiation that is around us all the time, coming from things like rocks, the air and space." — Radon as the largest source and the man-made sources are never given. |

Tone vs reference: n/a (no reference)


Flow faults (14):

- T1 **answer_in_question** — "tiny particles, called alpha particles, that a sheet of paper can stop. If you held paper in front of a source, what would reach your hand?" — Paper stopping alpha is stated just before the question.
- T2 **answer_in_question** — "they are stopped by it, so nothing gets through to your hand." — She can copy 'nothing' straight back.
- T4 **unexplained_term** — "If a source has an activity of 50 Bq, how many of its atoms decay each second?" — activity
- T4 **unexplained_term** — "If a source has an activity of 50 Bq, how many of its atoms decay each second?" — Bq (becquerel)
- T4 **unexplained_term** — "If a source has an activity of 50 Bq, how many of its atoms decay each second?" — decay
- T7 **unexplained_term** — "Some nuclei are unstable and give out radiation to become more stable" — nucleus/nuclei
- T7 **unexplained_term** — "so the nucleus loses 4 from its mass number and 2 from its atomic number, becoming a new element." — mass number
- T7 **unexplained_term** — "so the nucleus loses 4 from its mass number and 2 from its atomic number, becoming a new element." — Atomic number is used and then asked about at the end of T7 before T9 defines it.
- T10 **factual_or_unit_slip** — "What stops gamma getting through, then?" — Gamma is only reduced, not stopped (keyPoints[2].tutor_note).
- T10 **answer_in_question** — "Paper stops alpha. A few millimetres of aluminium stop beta. Thick lead only reduces gamma." — The diagram shown with the question gives the answer.
- T12 **factual_or_unit_slip** — "If gamma has the most energy of all these waves" — Alpha and beta are particles, not waves. 'These waves' was never defined.
- T12 **answer_in_question** — "Yes, cells and organs are right, since gamma passes through you and can damage DNA." — 'Passes through you' already answers the question that follows.
- T13 **correct_answer_not_acknowledged** — "Now, radiation isn't only in labs: a little is always around you, even right now, from things like rocks and food." — Her answer to S13 was right and was skipped over.
- T14 **correct_answer_not_acknowledged** — "A nuclear equation shows decay like a sum, with the mass numbers adding up the same on both sides." — Her answer to S14 was right and was skipped over.

Fixes:

1. **shared-code: teach-core: define before asking**: Never ask a question that uses a term (activity, Bq, decay, atomic number, mass number) before a one-line everyday explanation in that turn or the one before. For T4, teach '1 Bq = one decay each second' first, then ask. — "If a source has an activity of 50 Bq, how many of its atoms decay each second?"
2. **shared-code: tell-me mode length**: When she says 'just tell me', split the telling into chunks of 60 words or fewer, and stop before starting the next key point. Add one line to keyPoints[0].content: 'Atomic number = number of protons; mass number = protons + neutrons.' — "So, the answer is 50 atoms each second. Some nuclei are unstable and give out radiation to become more stable, called radioactive decay, and it's random."
3. **keyPoints[1].writeBullets / keyPoints[2] tutor question**: Teach beta's 'stopped by a few mm of aluminium' and 'moderately ionising' before moving to gamma. Rephrase the gamma question as 'Which of paper, aluminium or thick lead cuts gamma down the most?', and ask it only after saying that gamma is reduced, not stopped. — "What stops gamma getting through, then?"
4. **shared-code: answer student questions**: When she asks 'whats X mean', answer in one everyday sentence before re-asking the question. — "So if one nucleus has mass number 226 and gives off an alpha particle with mass number 4, what mass number is left?"
5. **shared-code: teach-core: acknowledge correct answers**: Open every reply after a correct answer with 'Yes — <what was right>'. In keyPoints[3], teach radon as the largest UK source and name the man-made sources, instead of asking what 'natural' means. — "Now, radiation isn't only in labs: a little is always around you, even right now, from things like rocks and food."
