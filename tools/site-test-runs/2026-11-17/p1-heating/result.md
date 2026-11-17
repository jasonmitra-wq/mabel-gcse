# Site test: p1-heating (lesson, 2026-11-17)

**PASS** · cost $0.0430 (29 tool calls, 29 calls from the site; tutor claude-sonnet-5-5 $0.0133)

## Judge

```json
{
  "broken": [],
  "looks_wrong": [],
  "would_quit": false,
  "fixes": []
}
```

## Transcript checks (tools/check-transcript.js)

none

## Transcript

    Lesson p1-heating (Physics › Energy › Heating and cooling — specific heat capacity).
    [screenshot 01-home-laptop.png] home
    [screenshot 02-subjects-laptop.png] subjects
    [screenshot 03-topics-physics-laptop.png] topics-physics
    [screenshot 04-lessons-p1-laptop.png] lessons-P1
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Welcome! This lesson is about heating: why some things need far more energy to warm up than others, and how to work out the energy needed.
    [screenshot 05-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (tapped "Next")
    T1: First, two quick questions from earlier lessons. A kettle heats some water. Which store of the water rises?
    [side picture after T1: none; newest in the chat: none]
    S2 (try, tapped the button): its thermal store
    T2: Second: a hot cup of tea cools down in a room. Where does its energy go?
      [T2 shown first: Yes: the water gets hotter, so its thermal store rises.]
    S3 (ask, tapped the button): into the thermal store of the surroundings
    T3: Now this lesson. Heat 1 kg of water and 1 kg of cooking oil in two pans on the same hob: the oil gets hot about twice as fast. Different materials need different amounts of energy to warm up by the same amount.
    [screenshot 06-exchange-3-laptop.png] exchange-3
      [T3 shown first: Yes: it spreads into the surroundings, warming the room a tiny bit.]
    S4 (tapped "Next")
    T4: Temperature tells you how hot or cold something is, in degrees Celsius (°C). When something is heated, its rise in temperature depends on its mass in kilograms (kg), what it is made of, and how much energy goes in.
    S5 (tapped "Next")
    T5: The energy needed to raise the temperature of 1 kg of a material by 1 °C is called its specific heat capacity, c. Its unit is joules per kilogram per degree Celsius (J/kg °C).
    S6 (tapped "Next")
    T6: Water has a high specific heat capacity: 4200 J/kg °C. It takes 4200 J to warm 1 kg of water by 1 °C. Most metals need far less: copper needs only about 390 J.
    [screenshot 07-exchange-6-laptop.png] exchange-6
    S7 (tapped "Next")
    T7: 1 kg of water and 1 kg of copper are each given 4200 J. Which one has the bigger temperature rise?
    S8 (try, tapped the button): the copper
    T8: The symbol θ, the Greek letter theta, stands for temperature.
      [T8 shown first: Yes: copper needs only about 390 J for each degree, so 4200 J warms it by about 11 °C. The water warms by only 1 °C.]
    S9 (tapped "Next")
    T9: The Greek letter Δ, delta, means "change in". So Δθ is the change in temperature: the final temperature minus the starting temperature.
    [screenshot 08-exchange-9-laptop.png] exchange-9
    S10 (tapped "Next")
    T10: The equation is ΔE = m c Δθ: change in the energy of the thermal store = mass × specific heat capacity × temperature change. ΔE is in joules (J), m is the mass in kilograms (kg), c is the specific heat capacity in J/kg °C and Δθ is the temperature change in °C.
    S11 (tapped "Next")
    T11: Water is heated from 20 °C to 70 °C. What is Δθ?
    S12 (what): wdym
    T12: Now, the question again: Water is heated from 20 °C to 70 °C. What is Δθ?
    [screenshot 09-exchange-12-laptop.png] exchange-12
      [T12 shown first: The question is asking how much the water's temperature changed by. Δθ just means "change in temperature", so you look at where it started and where it ended up, and work out the difference between those two.]
    S13 (try, tapped the button): 50 °C
    T13: In one line: what is specific heat capacity?
      [T13 shown first: Yes: 50 °C. Δθ = 70 − 20 = 50 °C.]
    S14 (try): energy to warm 1kg by 1°c
    T14: Here is a worked example. Tap "Show the first step" under it to see each step in turn.
    [counter now "1/4 covered" after T14; AI calls from the site so far: 4, $0.0023]
      [T14 shown first: Yes, your line has it: the energy needed to raise the temperature of 1 kg of a material by 1 °C.]
    [side picture after T14: none; newest in the chat: worked or question card]
    [worked example under T14: buttons seen Show the first step → Next step → Next step; after the last step: Next]
    [screenshot 10-worked-14-laptop.png] worked-14
    S15 (tapped "Next")
    T15: Your turn. How much energy is needed to heat 0.5 kg of water from 10 °C to 30 °C, in joules? (c = 4200 J/kg °C)
    [screenshot 11-exchange-15-laptop.png] exchange-15
    S16 (idk): idk
    T16: First the change: 30 − 10 = 20 °C. Then multiply 0.5 × 4200 × 20.
      [T16 easier step]
    S17 (try): 42000 j
    T17: Masses given in grams must be changed to kilograms first: divide by 1000. 250 g is 0.25 kg.
      [T17 shown first: Yes: 42 000 J. Δθ = 30 − 10 = 20 °C, and ΔE = 0.5 × 4200 × 20 = 42 000 J.]
    S18 (tapped "Next")
    T18: A 200 g block of aluminium is warmed by 10 °C. c = 900 J/kg °C. How much energy does it take in, in joules?
    [screenshot 12-exchange-18-laptop.png] exchange-18
    S19 (try): 200g is 0.2kg
    T19: Cooling works the same way, but energy is given out instead of taken in.
      [T19 shown first: Not quite: 1800 J. 200 g = 0.2 kg, and ΔE = 0.2 × 900 × 10 = 1800 J.]
    S20 (tapped "Next")
    T20: When something cools, final minus start comes out negative. Use the size of the change, without the minus sign: from 80 °C to 20 °C, Δθ = 60 °C.
    S21 (tapped "Next")
    T21: A 1.5 kg aluminium block (c = 900 J/kg °C) cooling from 80 °C to 20 °C gives out 1.5 × 900 × 60 = 81 000 J.
    [screenshot 13-exchange-21-laptop.png] exchange-21
    S22 (tapped "Next")
    T22: Here is a worked example of finding c: put the numbers in first, then divide. Its steps open one at a time.
    [worked example under T22: buttons seen Show the first step → Next step → Next step → Next step; after the last step: Next]
    [screenshot 14-worked-22-laptop.png] worked-22
    S23 (tapped "Next")
    T23: 5 kg of a material takes in 15 000 J, and its temperature rises by 10 °C. What is its specific heat capacity, in J/kg °C?
    S24 (try): 300 j/kg °c
    T24: Rearranged, the equation gives c = ΔE ÷ (m × Δθ). Δθ is found the same way: Δθ = ΔE ÷ (m × c).
    [screenshot 15-exchange-24-laptop.png] exchange-24
      [T24 shown first: Yes: 300 J/kg °C. 15 000 = 5 × c × 10, so c = 15 000 ÷ (5 × 10) = 15 000 ÷ 50 = 300 J/kg °C.]
    S25 (tapped "Next")
    T25: 2 kg of water is given 84 000 J. c = 4200 J/kg °C. How much does its temperature rise, in °C?
    S26 (try): 10 °c
    T26: In one line: how would you find c if you know ΔE, m and Δθ?
      [T26 shown first: Yes: 10 °C. Δθ = 84 000 ÷ (2 × 4200) = 84 000 ÷ 8400 = 10 °C.]
    S27 (try): divide energy by mass and change
    T27: Next, a required practical: one you could be asked about in the exam. The aim is to measure the specific heat capacity of a material, such as a metal block or some water.
    [screenshot 16-exchange-27-laptop.png] exchange-27
    [counter now "2/4 covered" after T27; AI calls from the site so far: 9, $0.0029]
      [T27 shown first: A good line would say: divide the energy by the mass times the temperature change.]
    S28 (tapped "Next")
    T28: To work out c = ΔE ÷ (m × Δθ), which things must the practical measure?
    S29 (try, tapped the button): the energy supplied, the mass and the temperature change
    T29: A heater goes into one hole in a metal block, and a thermometer into another. The heater is wired to a joulemeter, a meter that measures the energy supplied in joules.
      [T29 shown first: Yes: ΔE, m and Δθ, the three quantities in the equation.]
    S30 (tapped "Next")
    T30: Measure the mass of the block and its starting temperature. Switch on the heater for a set time, then switch off, and record the energy on the joulemeter and the highest temperature the block reaches.
    [screenshot 17-exchange-30-laptop.png] exchange-30
    S31 (tapped "Next")
    T31: After the heater is switched off, the block's temperature keeps rising for a little while. Why?
    S32 (try): energy still spreading
    T32: The main problem is that some energy escapes from the block to the surroundings, and some stays in the heater. Less energy stays in the block than the joulemeter shows, so its temperature rises less.
      [T32 shown first: Yes: the heater is hotter than the block, so energy keeps passing into the block for a while. That is why you record the highest temperature it reaches.]
    S33 (tapped "Next")
    T33: Energy escaping to the surroundings makes the temperature rise smaller. What does that do to the specific heat capacity you work out?
    [screenshot 18-exchange-33-laptop.png] exchange-33
    S34 (try): comes out lower
    T34: To reduce the energy escaping, wrap the block in insulation.
      [T34 shown first: Not quite: you divide by Δθ in c = ΔE ÷ (m × Δθ). Dividing by a smaller number gives a bigger answer, so c comes out too high.]
    S35 (tapped "Next")
    T35: The practical can also be done with water in an insulated cup with a lid. Stir the water so it is the same temperature all through.
    S36 (tapped "Next")
    T36: If you are asked for a hazard, name the hot heater, block or water, which could burn you. The heater runs from a low-voltage supply, which is not itself a hazard.
    [screenshot 19-exchange-36-laptop.png] exchange-36
    S37 (tapped "Next")
    T37: To compare your result with the true value, work out the percentage difference: (your value − true value) ÷ true value × 100.
    S38 (tapped "Next")
    T38: Suppose your result for water is 4410 J/kg °C, and the true value is 4200 J/kg °C. What is the percentage difference?
    S39 (try): 5 percent
    T39: In one line: why does the measured specific heat capacity usually come out too high, and how can you reduce that?
    [screenshot 20-exchange-39-laptop.png] exchange-39
      [T39 shown first: Yes: 5%. (4410 − 4200) ÷ 4200 × 100 = 210 ÷ 4200 × 100 = 5%.]
    [side picture after T39: none; newest in the chat: none]
    S40 (try): less energy escapes, insulate better
    T40: Last part: what heating does inside a material. Everything is made of tiny particles that are always moving. Heating something gives its particles more energy.
    [counter now "3/4 covered" after T40; AI calls from the site so far: 16, $0.0043]
      [T40 shown first: A good line would say: energy escapes to the surroundings, and insulate the block (or use a lid).]
    S41 (tapped "Next")
    T41: The total energy of all the particles in an object, from their movement and from the forces between them, is called its internal energy. Heating something raises its internal energy.
    S42 (tapped "Next")
    T42: Temperature is linked to how fast the particles move on average: the higher the temperature, the more kinetic energy, the energy of movement, each particle has on average.
    [screenshot 21-exchange-42-laptop.png] exchange-42
    S43 (tapped "Next")
    T43: A thermal store is really the energy of moving particles: an object gets hotter when its particles move faster.
    S44 (tapped "Next")
    T44: A big cold lake and a tiny hot spark. Which has more internal energy?
    S45 (try, tapped the button): the lake
    T45: Water's high specific heat capacity makes it useful. Central heating uses water because each kilogram carries a lot of energy to the radiators.
    [screenshot 22-exchange-45-laptop.png] exchange-45
      [T45 shown first: Yes. Each particle in the spark has more energy on average, but the lake has so many more particles that its total is far bigger.]
    S46 (tapped "Next")
    T46: Water's high specific heat capacity also explains why places by the sea have milder weather: the sea warms up and cools down slowly.
    S47 (tapped "Next")
    T47: A car engine is cooled by water pumped around it. Why is water a good choice?
    S48 (ask): why does it cool the engine
    T48: Have a go at the question: A car engine is cooled by water pumped around it. Why is water a good choice?
    [screenshot 23-exchange-48-laptop.png] exchange-48
      [T48 shown first: Water pumped around an engine cools it because energy moves by heating from a hotter object to a cooler one. The hot engine passes its energy to the cooler water, which carries it away and releases it elsewhere, so the engine ends up with less thermal energy.]
    S49 (ask): whats internal energy again
    T49: Back to the question: A car engine is cooled by water pumped around it. Why is water a good choice?
      [T49 shown first: Internal energy is the total kinetic energy and potential energy of all the particles that make up a system. It's different from temperature, which only tells you the average kinetic energy of each particle.]
    S50 (try, tapped the button): it can take in a lot of energy without getting very hot
    T50: In one line: what is the difference between temperature and internal energy?
      [T50 shown first: Yes: water's high specific heat capacity means it can take in a lot of energy from the engine while its own temperature rises only a little.]
    S51 (try): temperature is how fast particles move, internal energy is total energy of all particles
    T51: Now for a short quiz: six questions on the whole lesson. Take your time.
    [screenshot 24-exchange-51-laptop.png] exchange-51
      [T51 shown first: Yes, your line has it: temperature is linked to the average kinetic energy of the particles, and internal energy is the total energy of all the particles.]
    S52 (tapped "Next")
    T52: Quiz, question 1 of 6: water is heated from 15 °C to 40 °C. What is Δθ, in °C?
    S53 (try): 25 degrees
    T53: Quiz, question 2 of 6: how much energy warms 1 kg of water by 5 °C, in joules? (c = 4200 J/kg °C)
      [T53 shown first: Yes: 40 − 15 = 25 °C.]
    S54 (try): 21000 joules
    T54: Quiz, question 3 of 6: what is specific heat capacity?
    [screenshot 25-exchange-54-laptop.png] exchange-54
      [T54 shown first: Yes: ΔE = 1 × 4200 × 5 = 21 000 J.]
    S55 (try): energy needed to raise 1 kg
    T55: Quiz, question 4 of 6: 2 kg of oil (c = 2000 J/kg °C) takes in 40 000 J. How much does its temperature rise, in °C?
      [T55 shown first: Yes: the energy needed to raise 1 kg by 1 °C.]
    S56 (try): 10 degrees
    T56: Quiz, question 5 of 6: in the practical, why is the block wrapped in insulation?
      [T56 shown first: Yes: Δθ = 40 000 ÷ (2 × 2000) = 10 °C.]
    S57 (try, tapped the button): To reduce the energy escaping to the surroundings
    T57: Quiz, question 6 of 6: temperature is linked to…
    [screenshot 26-exchange-57-laptop.png] exchange-57
      [T57 shown first: Yes: less energy escapes, so the result is closer to the true value.]
    S58 (try): average kinetic energy
    T58: That's the end of the quiz: you got 6 out of 6.
      [T58 shown first: Yes: the higher the temperature, the more kinetic energy each particle has on average.]
    S59 (tapped "Next")
    T59: The lesson is finished. Tap a button to go on.
    [counter now "4/4 covered" after T59; AI calls from the site so far: 29, $0.0139]
    S60 (closing, tapped the button): go to the slides
    [S60 left the lesson: the page is no longer the AI lesson (a button such as Home or the slides)]
    [screenshot 27-end-laptop.png] end
    [tutor-side time: 0.8 minutes over 59 exchanges]
