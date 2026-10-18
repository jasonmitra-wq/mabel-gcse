# Teach sim: p4-half-life (run, persona bored, 2026-10-18)

Model claude-sonnet-5-5. 22 tutor turns, 2 flagged. Complete: true. Coverage: [true,true,true,true].

Lesson flags: none

**Tutor** [opening (what she knows)]: Welcome! Let's start with something from everyday life: think about a hot cup of tea left on a table. What happens to it over the next hour?

**Student** (try): it gets cold innit

**Tutor** [start, point 0]: Yes, tea cooling down is a good place to start. A radioactive sample also fades over time, and half-life is the time it takes to drop to half of what it started with. Say a sample gives 800 decays each second at the start, and one half-life passes. What does it give then?

**Student** (idk): 400 decays a second?

**Tutor** [fact, point 0]: Yes, 400 is right: after one half-life, 800 is halved. That number of decays each second has a name, activity, so a sample giving 800 decays each second has an activity of 800. If the activity starts at 800 and two half-lives pass, what is it now?

(basic: Halving)

**Student** (try): so after one half-life its 400, then after another its 200?

**Tutor** [fact, point 0]: Yes, 400 then 200 is right: each half-life halves the activity again. Activity is measured in becquerels, written Bq, and 1 Bq means 1 decay per second. So a sample with an activity of 200 Bq has how many decays each second?

**Student** (try): 200 decays a second

**Tutor** [fact, point 0]: Yes, 200 decays each second is right: 1 Bq means 1 decay per second, so 200 Bq is 200 decays each second. A detector, like a Geiger counter, clicks each time it catches a decay, and the number it records each second is called the count rate. If a detector records 50 decays each second, what is the count rate?

**Student** (bored): what's count rate then

**Tutor** [retry, point 0]: Count rate is just how many decays a detector actually catches each second, like counting how many raindrops land on your hand each second. Say a detector clicks 30 times in one second, and the sample's count rate halves after one half-life. What would the clicks per second be then?

**Student** (wrong): would it be 60?

**Tutor** [checkin, point 0]: This bit is a tricky one, so no worries. Do you want me to just tell you the rest of this one?

**Student** (checkin-yes): yeah just tell me

**Tutor** [next, point 0]: Half-life is the time for the number of undecayed nuclei, or the activity, to fall to half. Look at the diagram: the activity halves every 2 hours, so the half-life is 2 hours. Each single decay is random, but with huge numbers of atoms the overall rate is predictable. After 1 half-life the activity is A₀/2, after 2 it is A₀/4, and after n it is A₀ × (½)ⁿ. After 2 half-lives, 1/4 is left, a net decline of 3/4. A decay graph curves down steeply, then flattens, and never reaches zero.  Plotted over time, that pattern makes an exponential decay curve, where the quantity halves in equal time intervals. Say a sample starts at 800 Bq and the half-life is 2 hours. What would its activity be after 4 hours?

🖼 Diagram shown: p4-decay-graph — "The activity halves every 2 hours, so the half-life is 2 hours."

> Recap: Half-life is the time for a sample's activity to drop to half. / Activity means decays each second, measured in becquerels (Bq). / 1 Bq is 1 decay per second, so 200 Bq is 200 decays a second. / Count rate is the decays a detector actually catches each second, and it halves too.

⚑ over length (131 words)

**Student** (bored): whats exponential decay

**Tutor** [retry, point 1]: Exponential decay is just a pattern where something drops by half in the same amount of time, again and again. Here the activity halves every 2 hours, so a sample at 800 Bq is at 400 Bq after 2 hours. What would it be after 4 hours?

**Student** (offtopic): im starving can we do this after lunch

**Tutor** [fact, point 1]: Lunch is a good call, and you can come back to this lesson any time. After 4 hours it would be 200 Bq. On a decay graph, activity sits on the y-axis, which runs up the side. What goes on the x-axis along the bottom?

**Student** (wrong): is it the number of decays?

**Tutor** [retry, point 1]: Not quite. The y-axis, up the side, is the activity, which counts decays. The x-axis along the bottom is the thing that keeps ticking on, like the clock. What quantity goes along the bottom?

**Student** (minimal): time?

**Tutor** [next, point 1]: Yes, time is right: activity falls as time goes on. Doctors use radioactive isotopes as tracers, a bit like a tiny glowing marker. They inject or swallow one, it travels to an organ, and a camera outside the body picks up its radiation. Why would the tracer need to give out gamma rays so the camera can see it?

> Recap: Half-life is the time for activity to fall to half. / Exponential decay means halving in equal time steps, again and again. / 800 Bq with a 2-hour half-life gives 400 Bq, then 200 Bq after 4 hours. / On a decay graph, activity goes up the side and time along the bottom.

**Student** (bored): whats tracer

**Tutor** [retry, point 2]: A tracer is a tiny radioactive marker you swallow or have injected, a bit like a glow stick you can follow as it travels to an organ. The camera sits outside your body, so the radiation has to get out through you to reach it. Why would a camera outside the body need the tracer to give out gamma rays?

**Student** (try): cause gamma rays can go through stuff?

**Tutor** [fact, point 2]: Yes, gamma rays can pass through the body, so the camera outside can detect them. Radiotherapy uses radiation the opposite way: a focused beam of gamma rays is aimed at a tumour, a lump of cancer cells, and the radiation kills those cells. Why would doctors aim the beam only at the tumour, and not at the whole body?

**Student** (bored): whats radiotherapy

**Tutor** [retry, point 2]: Radiotherapy means using radiation as a treatment, to kill unwanted cells. Think of it like using a magnifying glass to burn one spot, but with a beam of gamma rays aimed at a tumour, which is a lump of cancer cells. If the beam hit the whole body too, what would it do to the healthy cells?

**Student** (idk): idk probably damage them?

**Tutor** [next, point 2]: Being hit by radiation, like standing in sunlight, is called irradiation, and it only lasts while the source is pointing at you. After standing near a radioactive rock, what would you expect to happen to you once you walk away from it?

> Recap: A tracer is a tiny radioactive marker that travels to an organ. / Tracers give out gamma rays because they pass through the body to the camera. / Radiotherapy aims a gamma ray beam at a tumour to kill cancer cells. / Aim it only at the tumour, or healthy cells get damaged too.

**Student** (try): you'd stop being irradiated?

**Tutor** [fact, point 3]: Yes — once you walk away, the irradiation stops. Contamination is different: it means radioactive dust gets on your skin or clothes, and it keeps irradiating you wherever you go. If dust from that rock stuck to your jumper, what would happen when you walked away?

**Student** (wrong): it would stop irradiating you?

**Tutor** [retry, point 3]: Not quite. With contamination the dust is stuck to your jumper, so it travels with you and keeps irradiating you wherever you go. Compare that with the rock, which you can simply walk away from. If you wanted to stop the dust irradiating you, what would you have to do with it?

**Student** (bored): this is too long mate

**Tutor** [fact, point 3]: You'd have to wash it off or get rid of it. Studies on radiation and people get published so other scientists can check them. That's called peer review. Why would scientists want others to check their findings?

**Student** (try): whats peer review

**Tutor** [checkin, point 3]: Lots of people find this part hard, so that's fine. Do you want me to just tell you the rest of it?

**Student** (checkin-yes): yeah go on

**Tutor** [complete, point 3]: Radiation knocks electrons off atoms in your cells, which damages DNA and can cause cancer. Alpha is the most dangerous inside the body. A short half-life is very dangerous but only briefly, while a long one stays a hazard for ages. Peer review means other scientists check published findings.  That's the end of this lesson. You answered questions on "Uses of nuclear radiation", and some on "What half-life means", "Reading and drawing decay graphs" and "Contamination, irradiation and radiation dangers". I told you the rest. Come back any time.

> Recap: Irradiation is being hit by radiation, and it stops when you walk away. / Contamination is radioactive dust stuck on your skin or clothes. / Contaminated dust travels with you, so it keeps irradiating you until removed. / To stop it, wash the dust off or get rid of it.

⚑ over length (89 words)

**Student** (closing): ok thanks bye

**Tutor** [free]: Thanks for sticking with it. Today you answered questions on uses of nuclear radiation and I told you about what half-life means, reading and drawing decay graphs and contamination, irradiation and radiation dangers. Your progress is saved, so you can come back to this lesson any time. Bye for now!

## Judge (claude-opus-5-5)

**FAIL** — would quit at T9; question does not match what was taught: T9, T13, T14; flow faults: answer_in_question T4, unexplained_term T7, unexplained_term T7, tell_me_skipped_content T7, exit_not_respected T9, unexplained_term T11, answer_in_question T12, correct_answer_not_acknowledged T15, answer_in_question T15, answer_in_question T16, answer_in_question T18, tell_me_skipped_content T20, factual_or_unit_slip T20, exit_not_respected T21

Engagement 2/5 — "this is too long mate"

Would quit: T9 — "Lunch is a good call, and you can come back to this lesson any time. After 4 hours it would be 200 Bq. On a decay graph, activity sits on the y-axis, which runs up the side. What goes on the x-axis along the bottom?" (She asked to stop for lunch. The tutor agreed but then kept teaching and asked a new question.)

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | null | false | false | "Welcome! Let's start with something from everyday life: think about a hot cup of tea left on a table. What happens to it over the next hour?" |
| T1 | true | true | false | false | "Say a sample gives 800 decays each second at the start, and one half-life passes. What does it give then?" |
| T2 | true | true | false | false | "If the activity starts at 800 and two half-lives pass, what is it now?" |
| T3 | true | true | false | false | "So a sample with an activity of 200 Bq has how many decays each second?" |
| T4 | true | true | false | false | "If a detector records 50 decays each second, what is the count rate?" — The answer is given in the definition just before the question, so she can copy it back. |
| T5 | true | true | false | false | "Say a detector clicks 30 times in one second, and the sample's count rate halves after one half-life. What would the clicks per second be then?" |
| T6 | true | null | false | true | "This bit is a tricky one, so no worries. Do you want me to just tell you the rest of this one?" — Her wrong answer of 60 is never corrected to 15, here or later. |
| T7 | true | true | true | true | "After 1 half-life the activity is A₀/2, after 2 it is A₀/4, and after n it is A₀ × (½)ⁿ." — Over 120 words. A₀ and 'nuclei' are never explained. Too heavy for a student who is weak at maths. |
| T8 | true | true | false | false | "Exponential decay is just a pattern where something drops by half in the same amount of time, again and again." |
| T9 | true | false | false | false | "Lunch is a good call, and you can come back to this lesson any time. After 4 hours it would be 200 Bq. On a decay graph, activity sits on the y-axis, which runs up the side. What goes on the x-axis along the bottom?" — Ignores her request to stop. The x-axis question tests something not yet taught. |
| T10 | true | true | false | false | "The x-axis along the bottom is the thing that keeps ticking on, like the clock. What quantity goes along the bottom?" |
| T11 | true | true | false | false | "Doctors use radioactive isotopes as tracers, a bit like a tiny glowing marker." — 'Isotopes' is not explained. The method for reading half-life off a graph is skipped entirely. |
| T12 | true | true | false | false | "The camera sits outside your body, so the radiation has to get out through you to reach it." — The answer is given just before the question. |
| T13 | true | false | false | false | "Why would doctors aim the beam only at the tumour, and not at the whole body?" — Damage to healthy cells was never taught. Why a tracer needs a short half-life was skipped. |
| T14 | true | false | false | false | "If the beam hit the whole body too, what would it do to the healthy cells?" — Still not taught. |
| T15 | true | true | false | false | "Being hit by radiation, like standing in sunlight, is called irradiation, and it only lasts while the source is pointing at you." — Does not acknowledge her correct 'damage them'. The answer is given in the same message. |
| T16 | true | true | false | false | "Contamination is different: it means radioactive dust gets on your skin or clothes, and it keeps irradiating you wherever you go." — The answer is given just before the question. |
| T17 | true | true | false | false | "If you wanted to stop the dust irradiating you, what would you have to do with it?" |
| T18 | true | true | false | false | "Studies on radiation and people get published so other scientists can check them. That's called peer review. Why would scientists want others to check their findings?" — The answer is in the question. Jumps to peer review and skips DNA damage, alpha danger and protection. |
| T19 | true | null | false | false | "Lots of people find this part hard, so that's fine. Do you want me to just tell you the rest of it?" — Does not answer her question 'whats peer review'. |
| T20 | true | null | true | true | "A short half-life is very dangerous but only briefly, while a long one stays a hazard for ages." — Leaves out protection (distance, shielding, time). 'Very dangerous' should be 'high activity'. |
| T21 | true | null | false | true | "Today you answered questions on uses of nuclear radiation and I told you about what half-life means, reading and drawing decay graphs and contamination, irradiation and radiation dangers." — Contradicts T20. She did answer half-life questions. A second, longer closing message. |

Tone vs reference: n/a (no reference)


Flow faults (14):

- T4 **answer_in_question** — "If a detector records 50 decays each second, what is the count rate?" — The definition just given makes the answer 50; she only has to copy it.
- T7 **unexplained_term** — "After 1 half-life the activity is A₀/2, after 2 it is A₀/4, and after n it is A₀ × (½)ⁿ." — A₀ is never explained.
- T7 **unexplained_term** — "Half-life is the time for the number of undecayed nuclei, or the activity, to fall to half." — 'Nuclei' is not explained.
- T7 **tell_me_skipped_content** — "Half-life is the time for the number of undecayed nuclei, or the activity, to fall to half." — Her wrong answer (60 instead of 15) on count-rate halving is never corrected.
- T9 **exit_not_respected** — "Lunch is a good call, and you can come back to this lesson any time. After 4 hours it would be 200 Bq. On a decay graph, activity sits on the y-axis, which runs up the side. What goes on the x-axis along the bottom?" — Keeps teaching and asks a new question after she asked to stop.
- T11 **unexplained_term** — "Doctors use radioactive isotopes as tracers, a bit like a tiny glowing marker." — 'Isotopes' is not explained.
- T12 **answer_in_question** — "The camera sits outside your body, so the radiation has to get out through you to reach it."
- T15 **correct_answer_not_acknowledged** — "Being hit by radiation, like standing in sunlight, is called irradiation, and it only lasts while the source is pointing at you." — Her 'probably damage them' was right.
- T15 **answer_in_question** — "Being hit by radiation, like standing in sunlight, is called irradiation, and it only lasts while the source is pointing at you."
- T16 **answer_in_question** — "Contamination is different: it means radioactive dust gets on your skin or clothes, and it keeps irradiating you wherever you go."
- T18 **answer_in_question** — "Studies on radiation and people get published so other scientists can check them. That's called peer review. Why would scientists want others to check their findings?"
- T20 **tell_me_skipped_content** — "Radiation knocks electrons off atoms in your cells, which damages DNA and can cause cancer." — Leaves out protection (distance, shielding, exposure time) from keyPoints[3].
- T20 **factual_or_unit_slip** — "A short half-life is very dangerous but only briefly, while a long one stays a hazard for ages." — The lesson says 'high activity, but not for long', not 'very dangerous'.
- T21 **exit_not_respected** — "Today you answered questions on uses of nuclear radiation and I told you about what half-life means, reading and drawing decay graphs and contamination, irradiation and radiation dangers." — Not one short line, and wrong about what she answered (she did answer half-life questions).

Fixes:

1. **shared-code: exit detection**: Treat 'can we do this after lunch' as a request to stop. Reply with one warm line saying what she did and that her place is saved. Ask no question. — "im starving can we do this after lunch"
2. **shared-code: tell-me behaviour**: First correct her last wrong answer ('30 halves to 15'). Then tell the rest in 60 words or fewer, with no A₀ notation. Use worked numbers like 800 → 400 → 200. — "After 1 half-life the activity is A₀/2, after 2 it is A₀/4, and after n it is A₀ × (½)ⁿ."
3. **shared-code: teach-core question writing**: Never state the answer in the same message as the question or in the message before it. Ask about a new case instead, e.g. 'the dust is on your jumper and you go home, what happens?' after explaining the rock. — "Contamination is different: it means radioactive dust gets on your skin or clothes, and it keeps irradiating you wherever you go."
4. **keyPoints[2].content**: Make sure the tutor teaches 'a tracer needs a short half-life to keep the dose low', and asks about it, before moving on to radiotherapy. Also teach reading half-life off a graph (keyPoints[1]), which was skipped. — "Yes, gamma rays can pass through the body, so the camera outside can detect them."
5. **shared-code: acknowledge hedged correct answers**: When she says 'idk probably X' and X is right, open with 'Yes, it would damage them' before moving on. — "idk probably damage them?"
