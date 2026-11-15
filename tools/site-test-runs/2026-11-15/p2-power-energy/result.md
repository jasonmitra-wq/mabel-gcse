# Site test: p2-power-energy (lesson, 2026-11-15)

**PASS** · cost $0.0468 (35 tool calls, 20 calls from the site; tutor claude-sonnet-5-5 $0.0132)

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

- T12-first [term-before-explained, F3] "Energy transferred" used without saying what it is: "The unit of power is called the watt because that is simply the name given to it, where 1 watt means 1 joule of energy transferred every second (1 W = 1 J/s)."
- T12-first [later-term, F4] "Energy transferred" (taught in key point 2) used in key point 1

## Transcript

    Lesson p2-power-energy (Physics › Electricity › Electrical power and energy — cost of electricity).
    [screenshot 01-home-laptop.png] home
    [screenshot 02-subjects-laptop.png] subjects
    [screenshot 03-topics-physics-laptop.png] topics-physics
    [screenshot 04-quick-check-offer-laptop.png] quick-check-offer
    [the quick check is offered on its own screen] tapped "Not now: show the lessons"
    [screenshot 05-lessons-p2-laptop.png] lessons-P2
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Welcome! This lesson is about electrical power: how fast appliances transfer energy, two equations for working it out, and how much energy an appliance transfers in a given time.
    [screenshot 06-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (tapped "Next")
    T1: First, three quick questions from earlier lessons. What is the potential difference of the UK mains supply?
    [side picture after T1: none; newest in the chat: none]
    S2 (what): wdym
    T2: Now, the question again: First, three quick questions from earlier lessons. What is the potential difference of the UK mains supply?
      [T2 shown first: I'm asking about the electricity that comes out of the sockets in your home. Potential difference is measured in volts, so I'm asking how many volts the UK's wall sockets supply.]
    S3 (idk): idk
    T3: The mains push is over a hundred times bigger than a 1.5 V torch cell. Which button fits?
    [screenshot 07-exchange-3-laptop.png] exchange-3
      [T3 easier step]
    S4 (try, tapped the button): about 230 v
    T4: Second: what is electric current?
      [T4 shown first: Yes: about 230 V. You will meet 230 V a lot today.]
    S5 (try, tapped the button): the rate of flow of charge
    T5: Third, from the lesson on resistance: V = I R, potential difference = current × resistance. A current of 2 A flows through a 5 Ω resistor. What is the potential difference across it, in volts?
      [T5 shown first: Yes: current is the rate of flow of charge, measured in amperes (A).]
    S6 (idk): idk
    T6: Multiply the current, 2, by the resistance, 5.
    [screenshot 08-exchange-6-laptop.png] exchange-6
      [T6 easier step]
    S7 (try): 10 v
    T7: Now, this lesson. A kettle and a phone charger both run from the mains, but the kettle moves energy much faster: it heats a whole kettle of water in a few minutes.
      [T7 shown first: Yes: 10 V. V = I R = 2 × 5 = 10 V.]
    S8 (tapped "Next")
    T8: How fast an appliance transfers energy is called its power: the amount of energy it transfers each second. A more powerful kettle heats the same water faster.
    S9 (tapped "Next")
    T9: Energy is measured in joules (J).
    [screenshot 09-exchange-9-laptop.png] exchange-9
    S10 (tapped "Next")
    T10: Power is measured in watts (W). An appliance with a power of 1 watt transfers 1 joule of energy every second.
    S11 (tapped "Next")
    T11: A heater has a power of 500 W. How much energy does it transfer in one second?
    S12 (ask): why is it watts tho
    T12: Have a go at the question: A heater has a power of 500 W. How much energy does it transfer in one second?
    [screenshot 10-exchange-12-laptop.png] exchange-12
      [T12 shown first: The unit of power is called the watt because that is simply the name given to it, where 1 watt means 1 joule of energy transferred every second (1 W = 1 J/s). The lesson doesn't say who the name honours, so that part comes later in the course.]
    S13 (try, tapped the button): 500 j
    T13: Big appliances have big powers, so their power is often given in kilowatts (kW): 1 kW = 1000 W. A 1.5 kW hairdryer has a power of 1500 W.
      [T13 shown first: Yes: 500 J. A watt is a joule each second, so 500 W is 500 J every second.]
    S14 (tapped "Next")
    T14: A heater has a power of 3 kW. What is its power in watts?
    S15 (try): 3000 w
    T15: The circuit below has a cell and a lamp, and a display of the energy passed to the lamp. Predict first: answer the question in the box. Then run it for 10 seconds with one cell and with two. Tap Next when you are done.
    [screenshot 11-exchange-15-laptop.png] exchange-15
    [widget 1 in the chat, under the message "The circuit below has a cell and a lamp, and a display of th"]
    [check] OK: each widget appears once, under its own message — 1 widget(s)
    [predict-first widget's prediction first has text after T15: "PREDICT FIRST"]
    [screenshot 12-widget-15-laptop.png] widget-15
      [T15 shown first: Yes: 3000 W. 3 kW = 3 × 1000 = 3000 W.]
    [side picture after T15: none; newest in the chat: widget]
    [widget under T15: prediction "You run the lamp for 10 s with one cell, then add a second cell and run it for 1" tapped; then shown: yes, ammeters 1, controls Add a cell, Run for 10 s, Start again; "Now explain it" before a control was used: no, after: yes]
    [widget text under T15: PREDICT FIRST You run the lamp for 10 s with one cell, then add a second cell and run it for 10 s again. Which is true about the energy the lamp gets in 10 s? The same More with two cells Less with two cells Now test your prediction. Tap Run for 10 s and note the energy. Then add a cell and run it again. More with two cells. With two cells, the lamp got more energy in the same 10 s, and it was brighter. lamp A 0.35 A Add a cell Run for 10 s Start again Potential difference of the cells: 3 V Ammeter: 0.35 A Time: 0 s Charge that left the cells: 0.00 C Charge that came back to them: 0.00 C Energy passed to the lamp: 0.00 J NOW EXPLAIN IT In one line: why do you think the lamp got more energy each second? Check my line cell lamp energy]
    [check] OK: predict-first widget 1 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 13-widget-15-laptop.png] widget-15
    S16 (tapped "Next")
    T16: Why two cells gave the lamp more energy each second: potential difference is the energy each coulomb of charge is given (a coulomb is a unit of charge), and current is the number of coulombs that flow each second. More of either means more energy each second: more power.
    S17 (tapped "Next")
    T17: The equation for power is P = V I: power = potential difference × current. P is the power in watts (W), V is the potential difference in volts (V) and I is the current in amperes (A).
    S18 (tapped "Next")
    T18: Here is an example. Tap "Show the first step" under it to see each step in turn.
    [screenshot 14-exchange-18-laptop.png] exchange-18
    [side picture after T18: none; newest in the chat: worked or question card]
    [worked example under T18: buttons seen Show the first step → Next step → Next step; after the last step: Next]
    [screenshot 15-worked-18-laptop.png] worked-18
    S19 (tapped "Next")
    T19: Your turn. A phone charger supplies 5 V, and a current of 2 A flows. What is its power, in watts?
    S20 (try): 10 w
    T20: To find the current, divide both sides of P = V I by V. That leaves I = P ÷ V: the power divided by the potential difference. Check it with the kettle: 2300 ÷ 230 = 10 A.
      [T20 shown first: Yes: 10 W. P = V I = 5 × 2 = 10 W.]
    S21 (tapped "Next")
    T21: A 1150 W heater runs on the 230 V mains. What current does it take, in amperes?
    [screenshot 16-exchange-21-laptop.png] exchange-21
    S22 (what): wdym
    T22: Back to the question: A 1150 W heater runs on the 230 V mains. What current does it take, in amperes?
      [T22 shown first: The question is asking how much electric current flows through a heater that uses 1150 watts of power when it is plugged into the 230 volt mains. The lesson gave a link between power, current and voltage, so you can use the power and voltage you're given to find the current.]
    S23 (ask): how do i work it out
    T23: Now, the question again: A 1150 W heater runs on the 230 V mains. What current does it take, in amperes?
      [T23 shown first: Working out the current from a heater's power uses the equation P = IV, where power is potential difference times current. You are given the power and the voltage, so rearrange the equation to get the current by itself, then put the two numbers in.]
    S24 (try): 1150 divided by 230
    T24: A second equation for power uses resistance: P = I² R, power = current² × resistance. P is the power in watts (W), I is the current in amperes (A) and R is the resistance in ohms (Ω). I² means I × I.
    [screenshot 17-exchange-24-laptop.png] exchange-24
      [T24 shown first: Yes: 5 A. I = P ÷ V = 1150 ÷ 230 = 5 A.]
    S25 (tapped "Next")
    T25: P = I² R comes from the first equation. In P = V I, swap the V for I R, because V = I R. That gives P = I R × I. And I × I is I², so P = I² R.
    S26 (tapped "Next")
    T26: Here is a worked example with P = I² R. Its steps open one at a time under it.
    [worked example under T26: buttons seen Show the first step → Next step → Next step; after the last step: Next]
    [screenshot 18-worked-26-laptop.png] worked-26
    S27 (tapped "Next")
    T27: Your turn. A current of 2 A flows through a 5 Ω resistor. What is the power, in watts?
    [screenshot 19-exchange-27-laptop.png] exchange-27
    S28 (try): 20 w
    T28: In one line: what is power, and what are its two equations?
      [T28 shown first: Yes: 20 W. P = I² R = 2² × 5 = 4 × 5 = 20 W.]
    S29 (try): energy per second, p equals v i and i squared r
    T29: Appliances are made to transfer energy, from a battery or the mains, into a store of energy. A kettle or heater transfers energy to a thermal store: the water or the room gets hotter.
    [counter now "1/3 covered" after T29; AI calls from the site so far: 11, $0.0091]
      [T29 shown first: Yes, your line has it: the energy an appliance transfers each second, P = V I, and P = I² R.]
    S30 (tapped "Next")
    T30: A fan or a drill has an electric motor, which transfers energy to a kinetic store: the energy of something moving.
    [screenshot 20-exchange-30-laptop.png] exchange-30
    S31 (tapped "Next")
    T31: A hairdryer has a heater and a fan driven by a motor. Which stores does it transfer energy to?
    S32 (try): thermal and kinetic
    T32: How much energy an appliance transfers depends on two things: its power, and how long it is switched on. The total amount is called the energy transferred.
      [T32 shown first: Yes: the energy goes to the thermal store of the warm air and the kinetic store of the turning fan.]
    S33 (tapped "Next")
    T33: The equation is E = P t: energy transferred = power × time. E is the energy transferred in joules (J), P is the power in watts (W) and t is the time in seconds (s).
    [screenshot 21-exchange-33-laptop.png] exchange-33
    S34 (tapped "Next")
    T34: Watch the units. Time must be in seconds: 1 minute is 60 s and 1 hour is 60 × 60 = 3600 s. Power must be in watts: 0.5 kW is 500 W.
    S35 (tapped "Next")
    T35: The next example needs both conversions, kilowatts to watts and minutes to seconds. Open the card below as before.
    [worked example under T35: buttons seen Show the first step → Next step → Next step; after the last step: Next]
    [screenshot 22-worked-35-laptop.png] worked-35
    S36 (tapped "Next")
    T36: Your turn. A 60 W lamp is on for 1 hour. How much energy does it transfer, in joules?
    [screenshot 23-exchange-36-laptop.png] exchange-36
    S37 (try): 60 times 3600
    T37: A 3 kW kettle and a 1.5 kW kettle each heat water for 1 minute: which is true?
      [T37 shown first: Yes: 216 000 J. E = P t = 60 × 3600 = 216 000 J.]
    S38 (idk): dont know
    T38: E = P t. The time is the same, but one power is twice the other. Which button fits?
      [T38 easier step]
    S39 (idk): not sure
    T39: Because P = V I, you can also write E = P t as E = V I t: energy transferred = potential difference × current × time.
    [screenshot 24-exchange-39-laptop.png] exchange-39
      [T39 shown first: That's fine. E = P t: with the same time, twice the power transfers twice the energy.]
    S40 (tapped "Next")
    T40: In one line: what two things does the energy an appliance transfers depend on?
    S41 (try): power and time
    T41: Last part: putting the equations together. Charge flow is the amount of charge that passes a point. Its equation is Q = I t: charge flow = current × time, with Q in coulombs (C), I in amperes (A) and t in seconds (s).
    [counter now "2/3 covered" after T41; AI calls from the site so far: 16, $0.0099]
      [T41 shown first: Yes, your line has it: its power, and how long it is switched on.]
    S42 (tapped "Next")
    T42: Another equation for energy uses charge: E = Q V, energy transferred = charge flow × potential difference, with E in joules, Q in coulombs and V in volts. Each coulomb pushed through a component gives it energy.
    [screenshot 25-exchange-42-laptop.png] exchange-42
    S43 (tapped "Next")
    T43: How much energy is transferred, in joules, when 20 C of charge flows through a lamp with 12 V across it?
    S44 (try): 240 j
    T44: Harder questions need two equations in a row. Write down what you know, find an equation that links it to the next thing you need, and use that answer in the next equation.
      [T44 shown first: Yes: 240 J. E = Q V = 20 × 12 = 240 J.]
    S45 (tapped "Next")
    T45: Here is a worked example of that. Its steps open one at a time.
    [screenshot 26-exchange-45-laptop.png] exchange-45
    [worked example under T45: buttons seen Show the first step → Next step → Next step → Next step; after the last step: Next]
    [screenshot 27-worked-45-laptop.png] worked-45
    S46 (tapped "Next")
    T46: Your turn, in two steps. A heater takes 4 A from the 230 V mains. Step 1: what is its power, in watts?
    S47 (idk): idk
    T47: Use P = V I: multiply 230 by 4.
      [T47 easier step]
    S48 (idk): 920 w
    T48: Step 2: the heater is on for 10 s. How much energy does it transfer, in joules?
    [screenshot 28-exchange-48-laptop.png] exchange-48
      [T48 shown first: Yes: 920 W. P = V I = 230 × 4 = 920 W.]
    S49 (idk): idk
    T49: Use E = P t with the power from step 1, 920 W, and the time, 10 s.
      [T49 easier step]
    S50 (ask): multiply 920 by 10
    T50: In one line: how would you find the energy a heater transfers, if you know its current, its potential difference and the time?
      [T50 shown first: Yes: 9200 J. E = P t = 920 × 10 = 9200 J.]
    S51 (idk): dont know
    T51: Now for a short quiz: six questions on the calculations. Take your time.
    [screenshot 29-exchange-51-laptop.png] exchange-51
      [T51 shown first: No problem. A good line would be: multiply the potential difference, the current and the time in seconds, E = V I t (or find P = V I first, then E = P t).]
    S52 (tapped "Next")
    T52: Quiz, question 1 of 6: A current of 3 A flows through a 10 Ω resistor. What is the power, in watts?
    S53 (try): need voltage
    T53: Have a go at the question: Quiz, question 1 of 6: A current of 3 A flows through a 10 Ω resistor. What is the power, in watts?
      [T53 shown first: The quiz question gives you the current and the resistance but no voltage, and you don't actually need one. Your lesson shows a power equation that uses only current and resistance, so you can go straight to the watts from the two numbers you've been given.]
    S54 (try): 90 w
    T54: Quiz, question 2 of 6: A lamp has 12 V across it and 3 A through it. What is its power, in watts?
    [screenshot 30-exchange-54-laptop.png] exchange-54
      [T54 shown first: Yes: P = I² R = 3² × 10 = 9 × 10 = 90 W.]
    S55 (try): 36 w
    T55: Quiz, question 3 of 6: A cooker has a power of 2.5 kW. What is that in watts?
      [T55 shown first: Yes: P = V I = 12 × 3 = 36 W.]
    S56 (idk): idk
    T56: Quiz, question 4 of 6: A 100 W fan runs for 30 s. How much energy does it transfer, in joules?
      [T56 shown first: That's fine. 2.5 kW = 2.5 × 1000 = 2500 W.]
    S57 (try): 100 times 30
    T57: Quiz, question 5 of 6: P = V I. Which gives the current?
    [screenshot 31-exchange-57-laptop.png] exchange-57
      [T57 shown first: Yes: E = P t = 100 × 30 = 3000 J.]
    S58 (try, tapped the button): I = P ÷ V
    T58: Quiz, question 6 of 6: A 2000 W heater is on for 2 minutes. How much energy does it transfer, in joules?
      [T58 shown first: Yes. I = P ÷ V.]
    S59 (idk): dont know
    T59: That's the end of the quiz: you got 4 out of 6.
      [T59 shown first: That's fine. 2 minutes is 120 s, and E = P t = 2000 × 120 = 240 000 J.]
    S60 (tapped "Next")
    T60: The lesson is finished. Tap a button to go on.
    [screenshot 32-exchange-60-laptop.png] exchange-60
    [counter now "3/3 covered" after T60; AI calls from the site so far: 20, $0.0136]
    [side picture after T60: none; newest in the chat: none]
    S61 (closing): thx bye
    T61: You're welcome. Tap "Go to the slides" or "Home" when you are ready.
    S62 (closing, tapped the button): go to the slides
    [S62 left the lesson: the page is no longer the AI lesson (a button such as Home or the slides)]
    [screenshot 33-end-laptop.png] end
    [tutor-side time: 0.7 minutes over 61 exchanges]
