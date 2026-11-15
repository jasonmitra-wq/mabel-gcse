# Review: p2-domestic (2026-11-15)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 30 findings, cost $0.5254.

## Counts (made in code from the findings)

- new: 12
- F3: 5
- P4: 3
- P8: 3
- F8: 2
- P6: 2
- P12: 1
- F5: 1
- P14: 1

## Findings

- **1.3** [P4, would confuse or mislead her] "Its short name is dc." — dc stands for direct current, but the script never says so and never says the current flows one way only, which is the heart of key point 1. She will wonder what the 'c' is and wrongly learn that dc means a potential difference.
- **1.5** [P4, would confuse or mislead her] "Its short name is ac." — ac stands for alternating current, but the words are never given and she is never told that the current keeps reversing too. Key point 1 is ticked without its statement about current being taught.
- **1.4** [P12, a teacher would correct it] "Two graphs of potential difference against time: direct (top) and alternating (bottom)." — The picture shows and labels the alternating graph one step before 'alternating' is taught in 1.5. The two graphs should be built up one at a time.
- **1.1** [F3, minor] "how the mains supply differs from a battery" — 'Mains supply' is used in the welcome but is not explained until 1.5 ('from the sockets in your home').
- **1.7 don't know (first time)** [P8, minor] "Is that a battery, or the mains, which keeps reversing?" — The hint states the definition and then says the mains keeps reversing, so only one answer is left. It tells her the answer rather than giving her an easier step.
- **1.8** [F8, a teacher would correct it] "Yes: a battery's push never changes direction, so it is direct." — The reply to 1.7 gives the definition, and the very next question asks for it, with the right button reading 'One whose direction never changes'. She only has to copy.
- **1.8 right** [new, would confuse or mislead her] "Say it about the potential difference, not about the charge flowing." — None of the buttons mentioned charge flowing, so this instruction comes from nowhere. It also discourages her from saying that the current flows one way, which is true and is what the key point teaches.
- **1.8** [F3, a teacher would correct it] "One where the voltage flows one way" — 'Voltage' has not been used or explained in this lesson; she has only been told 'potential difference'. She cannot judge an option that uses a word she has not been given.
- **1.8 wrong (size)** [new, minor] "its size can still change" — This is a new claim, never taught, and the only direct graph she has seen is for a cell. She has no way to make sense of a direct potential difference whose size changes.
- **1.9** [F5, a teacher would correct it] "its frequency: the number of complete cycles each second, measured in hertz (Hz)" — Two new terms, frequency and hertz, arrive in one message, straight after 'cycle'.
- **1.9** [new, a teacher would correct it] "How often an alternating potential difference reverses is given by its frequency" — Imprecise physics: the potential difference reverses twice in each cycle, so a 50 Hz supply reverses 100 times a second. Frequency counts cycles, not reversals.
- **1.10** [P6, minor] "the mains supply is ac with a frequency of 50 Hz, and a potential difference of about 230 V. A torch cell gives about 1.5 V" — Three figures to remember (50 Hz, 230 V, 1.5 V) plus a comparison in one message. The frequency and the potential difference should be separate steps.
- **1.11** [P8, a teacher would correct it] "goes through 60 complete cycles every second. What is its frequency, in hertz?" — The number she must type is in the question, and 1.9 has just said '50 Hz means 50 cycles every second'. It tests nothing.
- **1.12 all** [new, minor] "a direct potential difference never changes direction; and an alternating potential difference keeps reversing direction." — The stitched-together '; and' reads awkwardly, like a machine joining a list.
- **2.3** [P6, would confuse or mislead her] "The ground counts as 0 V, and between the live wire and the ground there is about 230 V." — Until now potential difference was 'a push' from a supply. The message names the live wire, gives its job, and then drops in the idea that a place can be 'at 0 V' with no explanation. That is a big new idea and needs its own step.
- **2.5 don't know (first time)** [new, minor] "Two messages back it was given a colour. Which button is that colour?" — This is not an easier step; it only tells her to scroll back and look.
- **2.7** [P8, a teacher would correct it] "Predict: the earth wire is there only for safety. A kettle is working normally. Which wire carries no current?" — The question names the earth wire as 'only for safety' and then asks which wire carries no current. That is not a prediction; the answer is in the stem.
- **2.7 right** [F3, minor] "The earth wire only carries a current if there is a fault." — 'Fault' is used here, but what a fault is (the live wire touching the case) is not explained until 3.1.
- **2.7 right** [new, minor] "Normally the current flows in the live wire and back in the neutral wire." — For ac the current reverses in both wires. Because the lesson never told her the current alternates, this leaves her picturing a one-way flow in the mains.
- **2.8 all** [new, minor] "the live wire carries the alternating potential difference from the supply; and the neutral wire completes the circuit; and the earth wire is a safety wire." — Clumsy '; and … ; and' wording. Asking for three wires' jobs 'in one line' is also a lot.
- **3.3** [F8, a teacher would correct it] "charge flows from the live wire, through the case and down the earth wire, not through a person" — The next question's right button is 'Charge flows down the earth wire, not through you', almost word for word what 3.2 has just said.
- **3.3 wrong (shoes)** [new, a teacher would correct it] "Not quite: with the case earthed, charge flows down the earth wire to the ground, so the case does not stay at 230 V." — The reply never mentions shoes, so it does not answer what she chose. She also could not reason about shoes yet, because the body's connection to the ground through the feet is not taught until 3.4.
- **3.4** [new, minor] "Touch a live wire and there are about 230 V between your hand and your feet." — In a safety lesson this should not be phrased like an instruction. 'If you touched a live wire…' is safer and clearer.
- **3.5** [new, a teacher would correct it] "on the supply side of the switch" — A 15-year-old will not follow 'the supply side of the switch' without a picture of where the switch sits in the live wire. There is no picture and no earlier explanation of what a switch does in this circuit.
- **3.6** [F3, a teacher would correct it] "Any connection between the live wire and earth is dangerous." — The script has said 'the ground' throughout and now says 'earth' as a place, without telling her they are the same thing. She knows 'earth' only as the name of a wire.
- **3.6** [P4, a teacher would correct it] "A person, a wet surface or a metal tool could make that connection" — Key point 3's safety rules (no appliances near water, no overloaded sockets, check cables for damage) are never taught, yet the key point finishes after 3.7.
- **3.7 all** [new, minor] "the live wire is still at about 230 V; and you are at 0 V, so there is a big potential difference across you; and a current flows through you." — The same clumsy '; and … ; and' wording as the other one-line replies.
- **3.12** [new, a teacher would correct it] "One that reverses 50 times a second" — This plants the idea that the mains reverses 50 times a second. It goes through 50 cycles a second, which is 100 reversals.
- **3.13** [F3, a teacher would correct it] "Which wire stops a metal case becoming live if there is a fault?" — A case 'becoming live' has never been explained. 'Live' has only been the name of the brown wire, and the script said the case 'is now at about 230 V'.
- **whole lesson** [P14, a teacher would correct it] "Button: Next" — There is nothing hands-on anywhere: no graph to change, no plug to wire, no fault to switch on. It is Next buttons and three-way choices from start to finish, and she is likely to get bored (M1).

## Overall

Not as it is. The biggest gap is in key point 1: she is never told that ac and dc mean alternating and direct current, or that the current itself goes one way or keeps reversing, and one reply even steers her away from talking about the charge flowing. The idea of a wire or the ground being 'at 0 V' is dropped in without explanation, several questions (1.8, 1.11, 2.7, 3.3) have their answer given just before or inside them, and the safety rules in key point 3 are missing. The wire colours and the shock explanation are sound, but I would want those points fixed and something hands-on added before she uses it.
