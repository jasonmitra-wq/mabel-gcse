# Review: p1-kinetic-potential (2026-11-17)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 28 findings, cost $0.5784.

## Counts (made in code from the findings)

- new: 11
- F2: 3
- P4: 3
- P6: 2
- F3: 2
- L1: 1
- L3: 1
- F8: 1
- F5: 1
- P8: 1
- P16: 1
- P14: 1

## Findings

- **1.1** [L1, a teacher would correct it] "three stores: the kinetic store, the gravitational potential store and the elastic potential store" — The opening names three stores in one sentence and never says what an energy 'store' is.
- **1.1a** [L3, a teacher would correct it] "First, two quick questions from the last lesson." — The lesson starts by testing her on something it has not told her. A first-time learner has to guess, and 'store' and 'thermal' are never explained here.
- **1.1a don't know (first time)** [new, minor] "The store for moving things starts with a K. Which button is it?" — This is a spelling clue, not physics. She can pick the right button without thinking about movement at all.
- **1.1a wrong answer "Gravitational potential" → 1.1b** [F8, minor] "The gravitational potential store is for things raised up." — On this branch she is told the answer to the very next question (which store holds energy because of height) just before it is asked.
- **1.1c** [F2, minor] "And energy is measured in joules, written J." — The bubble opens with 'And', hanging on the previous message. It reads as an afterthought, not as a fact she needs for the equations.
- **1.6** [new, a teacher would correct it] "Ek = ½ × 2 × 9 = 9 J." — Poor choice of numbers: the ½ and the 2 kg cancel, so the answer equals v² and the mass and the half seem to do nothing. The last step also substitutes and calculates in one jump.
- **1.7 any wrong answer (same pattern in 2.5, 2.7, 2.9, 3.4, 3.5, 4.7, 4.8)** [new, a teacher would correct it] "Not quite: 50 J. Ek = ½ × 4 × 5² = ½ × 4 × 25 = 50 J." — Every wrong answer is met with the full answer straight away. She never gets a hint and a second try, so she never actually does a calculation correctly herself after a mistake.
- **2.2** [F5, a teacher would correct it] "gravitational field strength, g. On Earth it is about 9.8 newtons per kilogram (N/kg); a newton is the unit of force." — Three new things in one bubble: gravitational field strength, the newton, and force (which is not explained at all).
- **2.2** [new, a teacher would correct it] "On Earth it is about 9.8 newtons per kilogram (N/kg)" — She is never told what 9.8 N/kg means, namely that gravity pulls with 9.8 newtons on each kilogram. It is just a number to multiply by.
- **2.6** [P6, minor] "Heights are often given in centimetres, but h must be in metres: divide by 100, so 50 cm is 0.5 m. Masses in grams must be in kilograms: divide by 1000, so 200 g is 0.2 kg." — Two separate conversions in one message. The grams one is never practised anywhere in the lesson.
- **2.7** [new, a teacher would correct it] "A 0.5 kg book falls off a shelf 80 cm high. g = 9.8 N/kg. How much energy leaves its gravitational potential store, in joules?" — So far she has only been told that lifting fills the store. Energy leaving it when something falls is not taught until key point 3, so the question rests on an idea she has not met.
- **2.10** [P4, a teacher would correct it] "In one line: what is the equation for gravitational potential energy, and what unit must the height be in?" — Key point 2 is closed without ever teaching that the energy goes up in step with height and mass (double the height, double the energy) or the contrast with the squared speed.
- **3.1** [P6, a teacher would correct it] "Air resistance is the push of the air on anything moving through it. With no air resistance, all of that energy moves across." — The bubble joins the two stores, defines air resistance and states the no-air-resistance condition all at once. The definition is dropped into the middle of another idea.
- **3.2** [F2, minor] "The energy gained by the kinetic store at the bottom then equals the energy lost from the gravitational potential store." — 'then' and 'at the bottom' depend on the previous bubble. Read alone, it does not say the bottom of what or after what.
- **3.3** [F2, minor] "Here is a worked example of that." — 'that' refers to something in the previous message, not in this one.
- **3.3** [F3, would confuse or mislead her] "v = √98 = 9.9 m/s." — The square root and its sign are used with no explanation, and nothing tells her she needs a calculator. Squaring was explained carefully in 1.5; undoing it is not explained at all.
- **3.3** [new, would confuse or mislead her] "Ek = ½ m v²: 98 = ½ × 2 × v², so v² = 98." — With a 2 kg ball the half and the mass cancel, so the example never shows the 'double the energy' step. Her own question (3.5, mass 1 kg) then needs that step, so the example does not prepare her for it.
- **3.5 don't know (first time)** [new, minor] "Double 196 to get v², then take the square root." — She is told to double but not why (to undo the half). √392 cannot be done without a calculator, which is never mentioned.
- **3.6** [P8, a teacher would correct it] "It lands a bit slower: some energy goes to thermal stores" — The right button carries its own explanation and is the only detailed option. She can pick it without thinking, and the reply has nothing left to teach.
- **3.6 wrong answer "It lands faster"** [F3, a teacher would correct it] "Not quite: energy cannot be created, so it cannot land faster." — The lesson never states that energy cannot be created or destroyed, yet this reply uses it as if she already knew it.
- **3.6 don't know (first time)** [new, minor] "Does that leave more or less energy for the kinetic store? (same buttons)" — The hint asks 'more or less?' but the buttons are still about landing faster or slower, so the question and the choices do not match.
- **3.7** [P4, a teacher would correct it] "In one line: for something falling with no air resistance, how are its gravitational potential store and its kinetic store linked?" — Key point 3 is closed without stating the conservation law itself. Nor does it say that halfway down half the energy has moved, or that mass cancels to give v = √(2gh).
- **4.3** [new, minor] "its spring constant, k, in newtons per metre (N/m)" — What 'newtons per metre' means (the force needed for each metre of stretch) is never said, so the unit is just a label to her.
- **4.5** [P16, would confuse or mislead her] "The equation only works while the spring would spring back to its original shape. Stretched too far, past a point called its limit of proportionality, it no longer follows the equation." — This mixes up the elastic limit (springing back) with the limit of proportionality (extension no longer in step with force). They are different points, and 'proportionality' is not explained.
- **4.8** [new, minor] "Yes: 1 J. The extension is 40 − 20 = 20 cm = 0.2 m" — The answer is 1 J, the same as the question just before (4.7), so a guess or a carried-over answer is marked right.
- **4.9** [P4, a teacher would correct it] "In one line: what is e in Ee = ½ k e², and what unit must it be in?" — Key point 4 is closed without teaching that doubling the extension quadruples the energy, or that squashing a spring and stretching a rubber band also store energy.
- **4.13 wrong answers** [new, minor] "Not quite: v, the speed, is squared." — 'The mass' and 'The energy' get the same reply. Neither points to where the little 2 sits in the equation, so the reply does not address her mistake.
- **whole lesson (1.1 to 4.17)** [P14, a teacher would correct it] "She types a number." — There is nothing hands-on and no picture anywhere: no spring to stretch, no ball to drop, no slider for speed. It is 48 steps of reading and typing numbers, and she is likely to get bored (M1).

## Overall

Not as it is. The arithmetic is all correct and the steps are mostly small and clear, but I would fix three things before she uses it: the limit of proportionality is explained wrongly in 4.5, the square root is used without explanation in 3.3, and the worked examples in 1.6 and 3.3 use a 2 kg mass that hides the half. The lesson also opens as if she already knows energy stores, never states that energy cannot be created or destroyed, and skips the 'doubling' ideas the key points promise for height and extension. Finally, it is a long run of typed calculations with no picture or anything to try, and every wrong answer simply hands her the answer, so I would add something hands-on and a second attempt.
