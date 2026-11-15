# Review: p2-domestic (2026-11-15)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 24 findings, cost $0.5162.

## Counts (made in code from the findings)

- new: 7
- F3: 3
- F8: 3
- F5: 2
- F1: 2
- L3: 1
- P1: 1
- P4: 1
- P16: 1
- F2: 1
- M1: 1
- P14: 1

## Findings

- **1.1a** [L3, a teacher would correct it] "First, three quick questions from the last lesson. What happens to the resistance of a thermistor as it gets hotter?" — The lesson opens by testing thermistors and resistance, which this lesson never explains and never uses again. A girl meeting the topic for the first time is quizzed on unrelated material before anything is taught.
- **1.1b** [F3, a teacher would correct it] "Second: when the light on an LDR gets brighter, which is true about its resistance?" — LDR is never spelled out as light-dependent resistor or explained anywhere in the script, and it has nothing to do with mains electricity.
- **1.3** [F5, a teacher would correct it] "A potential difference whose direction never changes is called a direct potential difference. Cells, batteries and solar cells give a direct potential difference. It drives a current that flows one way only, a direct current, so people call it dc." — Three new names (direct potential difference, direct current, dc) arrive in one message. It is also unclear what 'it' in 'people call it dc' refers to, and she is not told that dc is just the initials of direct current.
- **1.4** [P1, a teacher would correct it] "Look at the top graph: potential difference against time, for a cell." — The picture already shows the mains graph underneath, before alternating potential difference has been mentioned. She sees a curve crossing zero with nothing yet said about it.
- **1.4** [new, minor] "The line stays on the same side of zero the whole time, because the push never changes direction." — She is not told how to read the graph: that time runs along the bottom, that height shows the size of the push, or where zero is. A first-time learner needs that before 'same side of zero' means anything.
- **1.5** [F5, a teacher would correct it] "A potential difference that keeps reversing like that is called an alternating potential difference. The current it drives keeps reversing too, an alternating current, so people call it ac." — Again three new names in one message (alternating potential difference, alternating current, ac), on top of 'mains supply' in the same bubble.
- **1.10b** [new, minor] "The UK mains has a potential difference of about 230 V." — She has just been shown a mains graph where the line rises, falls through zero and reverses, and is now told the mains is 'about 230 V' with nothing to connect the two. A sharp pupil will ask how it can be 230 V if it keeps changing.
- **1.11b** [new, minor] "When you explain dc, describe the push like that." — This is exam-technique advice aimed at someone revising, not at someone who met the idea a few minutes ago.
- **1.12** [F8, minor] "In one line: what is the difference between a direct and an alternating potential difference?" — Half the answer was handed over in the step immediately before, in every branch of 1.11b: 'A direct potential difference is one whose direction never changes.'
- **1.12** [P4, minor] "Cells, batteries and solar cells give a direct potential difference." — Key point 1 also says what dc is used in (phones, laptops, torches). The script only mentions a torch battery in passing, so the key point is finished without that part being told.
- **2.2b** [F3, would confuse or mislead her] "it counts as 0 V: the zero that every other potential is measured from. Anything joined to the ground, a person standing on it included, is at about 0 V." — 'Potential' on its own, and the idea of one thing being 'at' a number of volts, are used without explanation. So far she has only met potential difference as a push round a circuit, and the rest of the lesson (case at 230 V, you at 0 V) depends on this idea.
- **2.7 wrong answer (The live wire)** [P16, a teacher would correct it] "the live wire brings the current from the supply" — This describes a one-way current out along the live wire, and the 'neutral' reply says it 'flows back along' the neutral. That contradicts the right-answer reply, which says the current is 'reversing back and forth with the ac'.
- **2.8 all of them** [new, minor] "Yes, your line has it: the live wire carries the alternating potential difference from the supply; and the neutral wire completes the circuit; and the earth wire is a safety wire." — The '; and ... ; and ...' stitching reads like a machine-made list, not a sentence a teacher would say. The same wording appears in the 'None' reply.
- **3.1** [F3, a teacher would correct it] "anyone who touches it could get an electric shock" — Electric shock is used here and the whole of question 3.3 depends on it, but what a shock is (a current driven through the body by the 230 V) is not explained until 3.4.
- **3.3** [F8, a teacher would correct it] "Predict: now the kettle's metal case is joined to the earth wire, and the same fault happens. Which is true?" — This is not a real prediction. The reply at 2.7 already told her: 'The earth wire only carries a current if something goes wrong, such as the live wire touching the metal case.'
- **3.4** [F1, minor] "Your body is joined to the ground through your feet, so you are at about 0 V too." — This repeats 2.2b ('a person standing on it included, is at about 0 V'). It is then said again in 3.5, 3.7 and 3.14.
- **3.5** [new, would confuse or mislead her] "the switch for a ceiling lamp is in the live wire. The lamp is switched off. An electrician touches the live wire between the switch and the supply." — She has to hold a wiring layout in her head with no picture: a switch 'in' the live wire, and a point 'between the switch and the supply'. A 15-year-old who has never seen house wiring will not follow this without a diagram.
- **3.5** [F8, a teacher would correct it] ""No: the live wire is still at about 230 V"" — The message just before (3.4) said touching a live wire puts 230 V across you. The right button is also the only 'No' and carries the reason itself, so she can pick it without thinking about the switch.
- **3.6b** [F2, minor] "Because of this danger, there are safety rules" — 'This danger' points back to the previous bubble; the message does not make sense on its own.
- **3.6b** [new, a teacher would correct it] "keep electrical appliances away from water, do not plug too many things into one socket, and check cables for damage before you use them" — Three rules are listed in one bubble with no reasons. Overloading a socket has nothing to do with 'this danger' (a connection from live to earth), so the link is wrong for that rule, and she is never told plainly that water conducts.
- **3.7 all of them** [new, minor] "Yes, your line has it: the live wire is still at about 230 V; and you are at 0 V, so there is a big potential difference across you; and a current flows through you." — The same clumsy '; and ... ; and ...' stitched reply appears again; it does not read as natural praise of her own sentence.
- **3.12** [F1, minor] "Quiz, question 4 of 6: What is a direct potential difference?" — This is the same question as 1.11b, with the same two options ('One that is always 230 V', 'One whose direction never changes'). 'Direction never changes' has by now been said in 1.3, 1.7, 1.11b, 1.12 and here.
- **1.2 to 1.6** [M1, a teacher would correct it] "Button: Next" — There are five telling messages in a row before she is asked anything, then four more (1.9 to 1.10b), then five again at the start of key point 2. She only presses Next, and this is where she would drift off.
- **whole lesson** [P14, a teacher would correct it] "Buttons: "Go to the slides" / "Home"" — The lesson ends with nothing hands-on having happened: no graph to change, no plug to wire, no fault to try with and without the earth wire. Everything is Next, three buttons or one typed line.

## Overall

Not as it stands, though it is close: the physics is mostly sound and the order of ideas is sensible. Before she uses it I would fix the unexplained jump to things being 'at' 0 V or 230 V (2.2b), give the switch question at 3.5 a picture, and split the bubbles that introduce three names at once (1.3, 1.5). I would also drop or replace the thermistor and LDR starter questions, make the 'Predict' questions at 3.3 and 3.5 real predictions, and give reasons for the safety rules. It also needs something for her to do other than press Next, or she will be bored well before the quiz.
