# Review: p3-pressure (2026-11-18)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 32 findings, cost $0.5211.

## Counts (made in code from the findings)

- new: 14
- F3: 5
- F5: 3
- F8: 2
- P6: 2
- L3: 1
- P13: 1
- P16: 1
- F2: 1
- F1: 1
- P14: 1

## Findings

- **1.1a** [L3, a teacher would correct it] "First, two quick questions from earlier lessons." — The lesson opens by testing her on earlier work (states of matter, energy stores) that she may not have met. A first-time learner is being quizzed before she has been taught anything.
- **1.1b** [F3, a teacher would correct it] "Second: which energy store is filled by movement?" — "Energy store", and a store being "filled", are used with no explanation. She cannot answer this from everyday life or from anything the lesson has said.
- **1.1b don't know (first time)** [F8, minor] "The kinetic store is the one for moving things. Which button is that?" — The hint states the answer and then asks her to press it. It is not an easier question, just the answer.
- **1.1b wrong answer (Thermal)** [new, minor] "Not quite: the thermal store is about how hot something is. Movement fills the kinetic store." — This separates "hot" from "movement", yet 2.2 then says temperature is the kinetic energy of the particles. A girl who chose Thermal is told something the lesson later seems to contradict.
- **1.2** [F3, minor] "The particles of a gas are usually molecules." — "Molecules" is dropped in without saying what a molecule is, and the script then says "particles" throughout although the key points say molecules. The message also carries a second idea (different speeds).
- **1.3** [F3, minor] "it pushes on the wall with a tiny force" — "Force" is used here and only explained in the next message (1.4). The message also introduces "collision" at the same time.
- **1.4** [P6, a teacher would correct it] "A force is a push or a pull, measured in newtons (N). Billions of collisions every second add up to a steady push on every part of the wall, at right angles to the wall." — Two separate ideas in one bubble: the definition and unit of force, and collisions adding up to a steady push at right angles. "At right angles to the wall" is given with no explanation or picture.
- **1.5** [F5, a teacher would correct it] "Pressure is the force on each square metre of a surface: pressure = force ÷ area. With the force in newtons and the area in square metres (m²), the pressure is in pascals (Pa)." — Pressure, the equation, area in m² and the pascal all arrive in one message. That is several new terms at once for a first-time learner.
- **1.5c** [P13, a teacher would correct it] "A force of 600 N pushes evenly on an area of 2 m². What is the pressure, in Pa?" — She is asked to calculate with pressure = force ÷ area without having seen a worked example. Key point 3 gives worked examples first; this equation gets none.
- **1.7** [new, minor] "More air is pumped into a sealed box" — A box that is sealed cannot have air pumped into it. The wording contradicts itself; better to say the box is sealed after more air is pumped in.
- **1.7 don't know (first time)** [new, would confuse or mislead her] "With more particles in the box, are there more or fewer collisions with the walls each second? (same buttons)" — The hint asks "more or fewer", but the buttons still read "It falls / It rises / It stays the same". None of them answers the question she has just been asked.
- **1.9 right answer** [new, minor] "The stretched rubber pulls inwards, and the two balance." — This adds a new idea about balanced forces inside the praise, and it leaves out the outside air, which also pushes inwards. It is imprecise physics that she has not been prepared for.
- **1.10 don't know** [new, minor] "No problem. A good line would be: gas pressure is caused by the particles colliding with the walls of their container." — The script's own rule is an easier step first on "don't know". Here, and in the other "in one line" steps, she is simply handed the answer.
- **2.1** [F5, minor] "Keep a gas in a sealed, rigid container, one that cannot bend or stretch. Then its volume, the space it takes up, cannot change: the gas is at constant volume." — "Rigid", "volume" and "constant volume" are all new in one message. Each is explained, but that is three terms in one bubble.
- **2.2** [P16, minor] "The temperature of a gas goes with the average kinetic energy of its particles" — "Goes with" is the tutor's own vague wording for the lesson's "is related to". It does not say that higher temperature means higher average kinetic energy, and "average" is not unpacked.
- **2.3 don't know (first time)** [new, would confuse or mislead her] "Hotter particles move faster. Do faster particles push on the walls more, or less? (same buttons)" — The hint asks "more, or less", but the buttons are about the pressure falling, rising or staying the same. "Hotter particles" is also loose: it is the gas that is hotter, not single particles.
- **2.3 wrong answer (It falls)** [new, minor] "Not quite: it rises. Next, why." — The reply does nothing with her idea that the pressure falls. It only states the right answer.
- **2.6** [new, a teacher would correct it] "A sealed can of gas is put in a freezer. Why does the pressure inside fall?" — Cooling is never taught in a message of its own (the key point's "Cool the gas, and the opposite happens" is missing). The question tells her the pressure falls, and the right option is 2.4 turned round, so it tests little.
- **2.6 don't know (first time)** [new, a teacher would correct it] "Cooling is the opposite of heating. What happens to the speed of the particles? (same buttons)" — The hint asks about speed, but none of the three buttons is a statement about speed alone. The smaller question cannot be answered with the buttons offered.
- **2.8** [new, minor] "In one line: why does heating a sealed gas raise its pressure?" — "A sealed gas" is loose; it should be a gas in a sealed rigid container, at constant volume, which is the condition this key point is about.
- **2.8 all of them** [new, minor] "Yes, your line has it: the particles move faster; and they hit the walls more often each second; and they hit harder (with more force)." — The stitched "; and … ; and" reads like a machine, not a teacher. The same pattern recurs in the replies at 3.11 and 4.6.
- **3.1** [P6, a teacher would correct it] "Now keep the temperature fixed, and the amount of gas fixed too: none let in or out. Change the volume instead, like pushing in the plunger of a sealed syringe. Squashing a gas is called compressing it." — One bubble holds fixed temperature, fixed amount of gas, changing the volume, the syringe and the new word "compressing". That is too many ideas at once.
- **3.2 wrong answer (It halves)** [new, minor] "Not quite: it doubles. Next, why." — The same bare reply is used for "It halves" and "It stays the same". Neither says anything about why her idea was wrong.
- **3.4** [F3, minor] "For a fixed mass of gas at constant temperature" — 3.1 said "the amount of gas fixed"; now it is "a fixed mass of gas" with no link between the two phrases. "Constant" is also used as a noun ("= constant") without comment.
- **3.7** [F2, a teacher would correct it] "as long as the before and after values use the same units" — This comes before any calculation, so she has not yet met any "before and after values". It belongs after the first worked example (3.6), where it would make sense.
- **3.10** [F3, minor] "A gas expands into a bigger volume at constant temperature. Which is true?" — "Expands" has not been explained; only "compressing" was defined. It is a small gap because "into a bigger volume" helps.
- **4.2** [new, minor] "Push a piston into a gas and your force moves the gas: you are doing work on the gas." — The force moves the piston and squashes the gas; "moves the gas" is imprecise. The bubble also both defines a piston and makes the work point.
- **4.3** [F5, would confuse or mislead her] "the internal energy of the gas: the total kinetic and potential energy of all its particles. Potential energy is the energy stored by the forces between particles." — Internal energy and potential energy are both new in one message. "Energy stored by the forces between particles" is abstract and would lose a first-time learner.
- **4.5** [F8, a teacher would correct it] "Each push does work on the air, raising its internal energy" — 4.2 and 4.3 have just said that pushing does work on the gas and the energy goes into its internal energy. The right button repeats the two previous messages.
- **4.5** [new, a teacher would correct it] "Predict: you pump up a tyre quickly, pushing the pump's handle in again and again. Why does the air in the pump get warmer?" — It says "Predict" but then tells her the outcome and asks why. The link from internal energy to temperature is only taught afterwards in 4.4, so she cannot yet explain why the air is warmer.
- **4.13** [F1, minor] "why does pumping a tyre quickly warm the air in the pump?" — This is the third time the same pump question is asked (4.5, 4.6 and here) with the same answer. One of them should be a fresh context.
- **whole script** [P14, a teacher would correct it] "Button: Next" — There is nothing hands-on anywhere: no particle box to heat or squash, and no picture is mentioned. It is 48 steps of reading and tapping Next, and I think she would get bored (M1).

## Overall

Not quite as it is, though it is close. The physics is essentially sound and the sums all check, but the "don't know" hints at 1.7, 2.3 and 2.6 ask a question the buttons cannot answer, and several messages pile up new terms (1.5, 2.1, 3.1, 4.3). The opening leans on "earlier lessons" and an unexplained "energy store", cooling is questioned without being taught, and 4.5 asks why the air warms before 4.4 links internal energy to temperature. I would fix those, add a worked example for pressure = force ÷ area and something hands-on such as a particle box, and then let her use it.
