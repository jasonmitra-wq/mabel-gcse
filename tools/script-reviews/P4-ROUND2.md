# P4 second script reviews: every finding and what was done (Phase C, 2026-11-27)

Brief docs/briefs/2026-11-27-phase-c-physics.md, B4: the second review's findings by F-number, each fixed or disputed with the reason.
Reviews: tools/script-reviews/p4-*-2026-11-27-2/review.md (claude-fable-5-2). Numbers below are the review's own order.

Shared reasons used below:
- **D-widget**: P14 "nothing hands-on". No widget exists for any P4 idea; building one is shared teach-mode code (STOP rule). Recorded in ESCALATIONS.
- **D-template**: the own-words feedback ("You have this: …", "Still needed: …") is written by js/teach-script.js from the points, not by the script. Shared code; recorded in ESCALATIONS. The points were rewritten as plain sentences in round 1 and again here where flagged.
- **D-summary**: the closing summary is built by js/teach-script.js from each key point's own-words model line. Shared code. Model lines were made to stand alone where flagged; what the summary covers is not a script change.
- **D-picture**: asks for a picture that does not exist (S4 work: new diagrams are drawn and render-checked under S4, not in B4).

## p4-nuclear-model (27 findings)

| # | F | Finding (short) | Done |
|---|---|---|---|
| 1 | new | 2.6 cannot be told from the plum pudding prediction | Fixed: the result now says "without being turned at all", and the question asks about that |
| 2 | F2 | "that first result" | Fixed: question now restates the result |
| 3 | new | 2.8 "only something tiny and dense" asserted | Fixed: split into dense (turning a fast particle round) and tiny (so few came back) |
| 4 | F2 | 2.8 opens "And", alpha particles not named | Fixed |
| 5 | F8 | 2.3c gives the 2.4 answer ("weak push") | Fixed: 2.3c now only recalls that the charge is spread thinly |
| 6 | F5 | 2.2 alpha particles and radioactive source together | Fixed: split into 2.2 and 2.2b |
| 7 | F2 | 2.2 "these" unclear | Fixed: "radioactive sources" |
| 8 | P6 | 2.3 foil, screen, scattered, name in one | Fixed: split into 2.3 and 2.3b |
| 9 | new | 2.6b bare definition breaks the story | Fixed: definition moved into 2.7 where the word is used |
| 10 | new | 2.10 options answer "which", not "why" | Fixed: question is now "Which alpha particles bounced back?" |
| 11 | P5 | no picture of the plum pudding model | Disputed: D-picture |
| 12 | new | plum pudding comparison may not help | Disputed: "plum pudding model" is the specification's name for the model, so it has to be taught with its picture-word |
| 13 | new | "no overall charge" slipped into 1.6 | Fixed: stated in 1.5 first |
| 14 | new | own-words feedback stilted | Disputed: D-template |
| 15 | F8 | 2.11 states the 2.12 points | Fixed: 2.11 only names the nuclear model |
| 16 | P5 | no picture of foil, source and screen | Disputed: D-picture |
| 17 | new | 3.3 reply claims plum pudding put mass everywhere | Fixed: reply now only states the nuclear model |
| 18 | P6 | 3.5 relative mass of three particles at once | Fixed: electron split into 3.5b |
| 19 | F3 | "element" not explained | Fixed: 3.8 says what an element is in terms of atomic number |
| 20 | F3 | "carbon-12" name not explained | Fixed: 3.9 says the number in the name is the mass number |
| 21 | F3 | 3.13b three ideas; Li⁺ not explained | Fixed: split, and 3.13d explains Li and the small + |
| 22 | new | sodium gains an electron (it loses one) | Fixed: chlorine |
| 23 | new | 3.18 model answer in fragments | Fixed: points are now full sentences ("isotopes have …") |
| 24 | F3 | "emit" first appears in a button | Fixed: 4.4b says what emit means before the question |
| 25 | new | 4.7 "whole number of smaller particles" | Fixed: "the charge of a nucleus always comes in equal lumps" |
| 26 | new | summary leaves things out | Disputed: D-summary |
| 27 | P14 | nothing hands-on | Disputed: D-widget |

## p4-radioactivity (34 findings)

| # | F | Finding (short) | Done |
|---|---|---|---|
| 1 | L3 | opens by testing the last lesson | Disputed: the two openers are labelled recall from p4-nuclear-model, which comes first in syllabus order (prerequisite map physics-p4.json) |
| 2 | F3 | "radiation" in the welcome | Fixed: welcome says "what comes out of the nucleus" |
| 3 | F3 | atomic number, protons asked before explained | Fixed with 1: recall question, reply and hint now state each plainly; mass number recalled at 1.10b |
| 4 | new | 1.1b hint circular | Fixed: "counts one kind of particle: the kind with a positive charge" |
| 5 | F5 | three terms in the 1.1b right reply | Fixed: reply only confirms protons |
| 6 | F8 | 1.4b answer said just before | Fixed: question now asks stable versus unstable |
| 7 | F8 | 1.7 just swaps 1 for 300 | Fixed: now a number question, decays in one minute (300 × 60) |
| 8 | new | "bit of radiation" loose | Fixed: "clicks each time radiation enters it" |
| 9 | new | count rate never checked | Fixed: new question 1.6c, why the count rate is lower than the activity |
| 10 | P6 | 1.10b three ideas | Fixed: 1.10b only recalls mass number; the changes come after the question (1.11b) |
| 11 | F8 | 1.11 rule stated just before | Fixed: same change as 10 |
| 12 | new | ion not said to be charged | Fixed |
| 13 | new | "radioactive decay never stops" wrong | Fixed: "gives out radiation all the time, smoke or not" |
| 14 | new | own-words feedback mechanical | Disputed: D-template |
| 15 | new | "an electron in the nucleus" | Fixed: "How can a nucleus give out an electron when it has none?" |
| 16 | P6 | 2.3 three ideas | Fixed: 2.3 says only what is lost and gained; the number changes come after the question (2.4b) |
| 17 | F8 | 2.4 rule stated just before | Fixed: same change as 16 |
| 18 | F3 | "carbon-14" naming not explained | Fixed: 2.4 gives "(mass number 14)", 4.7 says the number in a name is the mass number |
| 19 | F8 | 2.6 answer given word for word | Fixed: question now asks what could stop beta, before aluminium is named |
| 20 | F15 | two points joined | Fixed: three separate points |
| 21 | F3 | "charge" never mentioned | Fixed: 3.2 says alpha and beta carry a charge |
| 22 | new | five told messages before a question | Fixed: new question 3.1c (which is also electromagnetic radiation) |
| 23 | P6 | 3.3 several ideas | Fixed: split into 3.3 and 3.3b |
| 24 | F3 | "range in air" not explained | Fixed |
| 25 | P4 | gamma danger not taught; choosing never asked | Fixed: 3.3 adds the danger from outside; new question 3.7b (paper thickness gauge: beta) |
| 26 | new | own-words feedback mechanical | Disputed: D-template |
| 27 | F8 | 4.4 options named just before | Fixed: "Which of these is man-made?" now comes before the man-made list |
| 28 | new | dose units never used | Fixed: new number question 4.5c (2.5 mSv in Sv) |
| 29 | new | job fact only in the right reply | Fixed: told to everyone in 4.6b |
| 30 | P6 | 4.8b equation, arrow and term in one | Fixed: split into 4.8b and 4.8d |
| 31 | new | −1 "keeps the numbers balanced" circular | Fixed: "because its charge is −1, the opposite of a proton's +1" |
| 32 | new | own-words feedback mechanical | Disputed: D-template |
| 33 | P14 | nothing hands-on | Disputed: D-widget |
| 34 | new | summary leaves things out | Disputed: D-summary |

## p4-half-life (33 findings)

| # | F | Finding (short) | Done |
|---|---|---|---|
| 1 | F12 | 1.1b right option the only "No" and carries the reason | Fixed: options "No" / two plausible "Yes" ideas, each with its own reply |
| 2 | new | "that is how far it reaches" hands her answer back | Fixed: says range is a different idea, then what activity is |
| 3 | new | random but predictable, no reason | Fixed: 1.2 gives the coin-toss reason (the lesson's one comparison) |
| 4 | F5 | 1.3a three terms | Fixed: split into 1.3a (isotope) and 1.3c (radioactive isotope) |
| 5 | P6 | 1.4 three ideas | Fixed: split into 1.4 and 1.4b |
| 6 | F3 | "detector" not explained | Fixed: "A detector, such as a Geiger-Muller tube, counts the radiation reaching it" |
| 7 | new | "Not quite" for completely wrong answers | Fixed for the two flagged (0 Bq; "harmless"): "No:" |
| 8 | P6 | 1.6 new symbol and three results | Fixed: split into 1.6 and 1.6b; A₀ now used in the worked example |
| 9 | P4 | A₀ × (½)ⁿ left out | Fixed: in 1.6b and the worked example |
| 10 | P13 | no worked example of the two-step method | Fixed: worked example 1.6c (15 days ÷ 5, then halve 3 times), then a fresh question (960 Bq, 12 hours) |
| 11 | new | own-words feedback stilted | Disputed: D-template |
| 12 | new | the graph is read for her | Partly fixed: the message no longer reads it; disputed for the rest: the SVG itself prints "half-life = 2 hours" (changing it is S4 diagram work) and there is no graph widget (D-widget) |
| 13 | new | "another decay graph" with no graph | Fixed: "Readings from another decay graph" |
| 14 | F8 | 2.7 same numbers as the picture | Fixed: fresh numbers (600 Bq, 3 hours, 150 Bq) |
| 15 | new | "the point is at 800 → 400 → 200" | Fixed: "the point is at 150 Bq" |
| 16 | new | own-words feedback stilted | Disputed: D-template |
| 17 | F8 | 3.3 answer in the recall line just before | Fixed: recall line removed; what stops each radiation is in the hint and replies |
| 18 | F12 | 3.5 right option holds the explanation; dose defined in the question | Fixed: options of equal weight; dose defined in its own message 3.4 |
| 19 | F3 | tumour explained with untaught "cancer" | Fixed: 3.6 says what cancer is, 3.6b what a tumour is |
| 20 | F8 | 3.8 gives the 3.8b answer | Fixed: 3.8 only recalls the risk; the benefit comes in the reply |
| 21 | F1 | benefit-against-risk asked three times; tracers left out | Fixed: own-words 3.10 now asks about the tracer |
| 22 | new | 3.9 muddled, two ideas | Fixed: split into 3.9 (perceived risk) and 3.9b (compare with and without the treatment) |
| 23 | F8 | 4.5 recall of 4.2 | Fixed: 4.2 removed; what ends irradiation comes after the question (4.5b) |
| 24 | P16 | "inside the body nothing stops it" wrong | Fixed: alpha is stopped within the living tissue, so all its ionising happens there (4.8b) |
| 25 | P6 | 4.8 four ideas | Fixed: split into 4.8, 4.8b, 4.8c |
| 26 | new | short half-life "very dangerous" against the tracer | Fixed: 4.10 keeps "for the same number of nuclei" and says why a tracer is safe |
| 27 | new | peer review dropped in | Fixed: linked to finding out how dangerous radiation is |
| 28 | M1 | eight messages, one question | Fixed: new question 4.12b (moving a source safely: tongs and speed, not gloves; E103); 4.12 no longer names tongs (self-audit) |
| 29 | new | quiz 1 has no replies for likely slips | Fixed: 600 (halved once) and 400 (divided by 3) |
| 30 | new | "time for the radiation to halve" fair to pick | Fixed: option is now "the time for a source to become safe" |
| 31 | new | "how does the curve end?" | Fixed: "what happens to the curve as time goes on?" |
| 32 | F12 | 4.21 right option longest | Fixed: "Alpha is the most ionising" |
| 33 | P14 | nothing hands-on | Disputed: D-widget |

## p4-nuclear-fission (27 findings)

| # | F | Finding (short) | Done |
|---|---|---|---|
| 1 | new | 2.8 "fewer absorbed" reads as fewer fissions | Fixed: "the materials that absorb neutrons start taking in fewer" |
| 2 | new | 2.8 hint contradicts 1.4 | Fixed: hint says neutrons taken in by those materials cannot cause fissions |
| 3 | new | 2.8 "It falls" reply does not meet her reason | Fixed: reply names the absorbing materials |
| 4 | new | "third step" undefined | Fixed: question defines the second step (3 fissions) and asks for the next |
| 5 | new | wrong answers 13 or 27 not met | Fixed: replies for 27 (one step too far) and 13 (total so far) |
| 6 | new | picture message calls both kinds "growing" | Fixed: "an uncontrolled chain reaction that grows, and a controlled one that stays steady" |
| 7 | new | "heavier" but "less mass" | Fixed: "less mass than the two light nuclei had added together" |
| 8 | F3 | "uranium-235" before 235 explained | Fixed: 1.2 no longer names it; 1.2c explains it |
| 9 | F5 | 1.2b isotope, mass number, notation together | Fixed: split into 1.2b (mass number) and 1.2c (U-235) |
| 10 | F8 | 1.6b answer said in 1.3; tests nothing about the neutron | Fixed: 1.6b now asks why the 2 or 3 neutrons matter; new 1.3b asks how the two nuclei compare (the size fact moved into its reply) |
| 11 | new | "shared between two pieces" ignores the neutrons | Fixed: that question was replaced (see 10) |
| 12 | new | picture "from start to finish" lacks gamma and energy | Fixed: message says the gamma rays and energy are not drawn |
| 13 | F5 | fuel, nuclear fuel, plutonium together | Fixed: split into 1.9 and 1.9b |
| 14 | new | "a fuel is something that releases energy" loose | Fixed: "a material that stores energy that can be released" |
| 15 | new | own-words feedback stilted | Disputed: D-template |
| 16 | new | model line adds points the marking does not ask | Fixed: model line now says only the two points |
| 17 | M1 | runs of five and four told messages | Fixed: new questions 1.3b and 3.7b break the runs |
| 18 | P14 | nothing hands-on | Disputed: D-widget |
| 19 | P6 | 2.7 three ideas; "controlled chain reaction" never named | Fixed: split into 2.7 and 2.7b, which names it |
| 20 | new | reactor a "machine" | Fixed: "the part of a nuclear power station where fission happens" |
| 21 | F2 | 3.1 "Here" points at nothing | Fixed: "Now the opposite of splitting: joining light nuclei. A light nucleus is…" |
| 22 | F8 | 3.5 only option with "join" | Fixed: all three options now say "becomes" or "gives out" |
| 23 | F3 | "energy level" not in this lesson | Fixed: option replaced by alpha decay |
| 24 | F8 | 4.4 replies give the 4.5 answer | Fixed: own-words 4.5 now comes before 4.4 |
| 25 | F1 | 4.3 repeats 2.6 and 3.7 | Fixed: removed |
| 26 | F8 | quiz 1 replies give quiz 2's answer | Fixed: quiz 1 replies no longer mention the neutrons |
| 27 | new | quiz misses what starts fission and how a reactor stays steady | Fixed: quiz 5 and 6 now ask exactly these (6 no longer repeats 3.8) |

## Totals

Round 1 → round 2: p4-nuclear-model 34 → 27, p4-radioactivity 39 → 34, p4-half-life 38 → 33, p4-nuclear-fission 34 → 27 (145 → 121).
Round 2: 121 findings; 103 fixed, 18 disputed (D-widget 4, D-template 7, D-summary 2, D-picture 2, L3 1, plum pudding name 1, decay-graph labels 1 (partly fixed)).
All four scripts walk 0 after the fixes.
