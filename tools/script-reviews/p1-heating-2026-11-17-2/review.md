# Review: p1-heating (2026-11-17)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 20 findings, cost $0.5602.

## Counts (made in code from the findings)

- new: 11
- F3: 2
- L3: 1
- P6: 1
- F2: 1
- F1: 1
- F10: 1
- P8: 1
- P14: 1

## Findings

- **1.1a** [F3, would confuse or mislead her] "Which store of the water rises?" — The first question uses 'store', 'kinetic store', 'thermal store' and 'chemical store' and nothing in this lesson has said what an energy store is. A girl meeting the topic for the first time can only guess.
- **1.1b** [L3, a teacher would correct it] "Second: energy transferred = power × time, E = P t, with E in joules (J), P in watts (W) and t in seconds (s). A 2 kW (2000 W) heater is on for 10 s." — This assumes she already knows what power, watts and kilowatts are. E = P t is then never used anywhere in the script (the practical uses a joulemeter), so it is a cold calculation with no purpose before the lesson starts.
- **1.8** [new, minor] "change in thermal energy = mass × specific heat capacity × temperature change" — The lesson has said 'thermal store' until now and switches to 'thermal energy' without saying they are the same thing. E was also 'energy transferred' in 1.1b.
- **2.2** [new, a teacher would correct it] "Not quite: 42 000 J. 30 °C is the final temperature. Use the change: Δθ = 30 − 10 = 20 °C, so ΔE = 0.5 × 4200 × 20 = 42 000 J." — Every wrong answer in the lesson is met at once with the full answer and working. She never gets a hint and a second try, so a wrong answer teaches her only to read the solution.
- **2.5** [new, would confuse or mislead her] "When something cools, use the size of the temperature change. A 1.5 kg aluminium block (c = 900 J/kg °C) cooling from 80 °C to 20 °C has Δθ = 60 °C" — She was told in 1.7b that Δθ is final minus start, which here gives 20 − 80 = −60. The message calls Δθ 60 °C without explaining the minus sign or what 'the size of' means, so it contradicts the rule she is asked to recite in 2.9.
- **2.5** [P6, a teacher would correct it] "Cooling works the same way, but energy is given out. When something cools, use the size of the temperature change. A 1.5 kg aluminium block ... so it gives out 1.5 × 900 × 60 = 81 000 J." — A new idea, a rule and a complete worked calculation are packed into one bubble of about 55 words. She is never asked a cooling question herself.
- **2.6** [F2, a teacher would correct it] "Its steps open one at a time." — 'Its' has nothing to refer to in the message. The worked example has not been mentioned, only 'To find c'.
- **2.6** [new, would confuse or mislead her] "On a calculator, put the bottom in brackets: 36 000 ÷ (4 × 20)." — Nothing has been written as a fraction, so there is no 'bottom' for her to see. The step also follows a method (divide by 80) that needed no brackets, so it comes from nowhere.
- **2.7 (she types 30000)** [new, minor] "Put the bottom in brackets: 15 000 ÷ (5 × 10) = 15 000 ÷ 50 = 300. Without brackets the calculator multiplies by 10 instead." — 'The bottom' again with no fraction shown. 'Multiplies by 10 instead' does not make clear that the calculator does 15 000 ÷ 5 and then × 10.
- **2.7b** [new, minor] "Δθ is found the same way: put the numbers in, then divide the energy by the mass times c. Δθ = ΔE ÷ (m × c)." — The lesson's key point says the equation can be rearranged for any variable, but finding the mass m is never shown or practised. Δθ gets one sentence and no worked example.
- **2.9** [F1, a teacher would correct it] "In one line: how do you work out Δθ from a starting temperature and a final temperature?" — Final minus start has already been said or asked in 1.7b, 1.9, 2.1 and 2.2. As the own-words check for key point 2 it repeats that fact instead of testing how to use ΔE = m c Δθ.
- **3.1b** [F10, a teacher would correct it] "To work out c = ΔE ÷ (m × Δθ), which things must the practical measure?" — On the main path the rearranged form c = ΔE ÷ (m × Δθ) has never been stated. It appeared only in the don't-know branch of 2.7, because the worked example found c by substituting and dividing.
- **3.1b** [P8, a teacher would correct it] ""Only the final temperature" / "The energy supplied, the mass and the temperature change" / "The time and the colour of the block"" — The question prints the equation and the right option simply lists its three quantities. The other two options are not believable, so she can answer without thinking.
- **3.4 don't know (first time)** [new, minor] "Just after switching off, the heater is still very hot. Which button is about the heater?" — The hint asks her to spot the word 'heater' on a button rather than to think about why energy is still moving. The 3.1b hint ('Which button lists everything on its right-hand side?') does the same.
- **3.5** [new, minor] "Less energy goes into the block than the joulemeter shows, so its temperature rises less." — This is imprecise. The energy does go into the block and then escapes from it, and some stays in the heater, so 'less stays in the block' would be accurate.
- **3.6** [new, minor] "Δθ is on the bottom of c = ΔE ÷ (m × Δθ). A smaller number on the bottom gives a bigger answer" — 'On the bottom' again when the equation is written on one line with ÷. A weaker pupil will not see what 'bottom' means here.
- **3.8** [F3, a teacher would correct it] "The low-voltage supply itself is not a hazard." — No supply and no voltage have been mentioned anywhere in the lesson. The heater was only said to be 'wired to a joulemeter'.
- **3.11** [new, minor] "Yes, your line has it: energy escapes to the surroundings; and insulate the block (or use a lid)." — The praise line is stitched-together marking points, not a sentence. 'Use a lid' belongs to the water version, not the block.
- **4.3** [new, would confuse or mislead her] "the higher the temperature, the more kinetic energy, the energy of movement, each particle has on average" — In 1.1a she was told 'the kinetic store is for moving things' and that getting hotter is the thermal store instead. Now getting hotter is the particles' kinetic energy, and the lesson never says that internal energy is what the thermal store is. The sentence itself is also hard to follow.
- **whole script** [P14, a teacher would correct it] "Button: Next" — There is nothing hands-on in any of the four key points: no heating simulation, no virtual practical, and no picture is mentioned even for the heater-and-block apparatus in 3.2. It is text, Next buttons and typed sums throughout, so she may well get bored (M1).

## Overall

Not quite as it is. The sums and numbers are all correct and the order of ideas is sensible, but she would trip in several places: the opening questions lean on 'energy stores' and power that this lesson never explains, the cooling example contradicts the 'final minus start' rule she has just learned, and 'put the bottom in brackets' refers to a fraction she has never been shown. The kinetic store in 1.1a against the particles' kinetic energy in 4.3 also needs one linking sentence. I would fix those, give her a second try after a wrong answer, and add something to do or look at for the practical before letting her use it.
