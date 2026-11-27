# Site test: p2-power-energy (lesson, 2026-11-27)

**PASS** · cost $0.0371 (29 tool calls, 25 calls from the site; tutor claude-sonnet-5-5 $0.0084)

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
      [T2 shown first: The tutor is asking how many volts the electricity from a normal wall socket in a UK home gives out. Potential difference is the "push" the supply gives to the charge, and it is measured in volts (V). Just tell me the number you remember.]
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
    S6 (idk): dont know
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
    S12 (ask): so thats joules per second
    T12: Big appliances have big powers, so their power is often given in kilowatts (kW): 1 kW = 1000 W. A 1.5 kW hairdryer has a power of 1500 W.
    [screenshot 10-exchange-12-laptop.png] exchange-12
      [T12 shown first: Yes: 500 J. A watt is a joule each second, so 500 W is 500 J every second.]
    S13 (tapped "Next")
    T13: A heater has a power of 3 kW. What is its power in watts?
    S14 (try): 3000 w
    T14: The circuit below has a cell and a lamp, and a display of the energy passed to the lamp. Predict first: answer the question in the box. Then run it for 10 seconds with one cell and with two. Tap Next when you are done.
    [widget 1 in the chat, under the message "The circuit below has a cell and a lamp, and a display of th"]
    [check] OK: each widget appears once, under its own message — 1 widget(s)
    [predict-first widget's prediction first has text after T14: "PREDICT FIRST"]
    [screenshot 11-widget-14-laptop.png] widget-14
      [T14 shown first: Yes: 3000 W. 3 kW = 3 × 1000 = 3000 W.]
    [side picture after T14: none; newest in the chat: widget]
    [widget under T14: prediction "You run the lamp for 10 s with one cell, then add a second cell and run it for 1" tapped; then shown: yes, ammeters 1, controls Add a cell, Run for 10 s, Start again; "Now explain it" before a control was used: no, after: yes]
    [widget text under T14: PREDICT FIRST You run the lamp for 10 s with one cell, then add a second cell and run it for 10 s again. Which is true about the energy the lamp gets in 10 s? More with two cells The same Less with two cells Now test your prediction. Tap Run for 10 s and note the energy. Then add a cell and run it again. Your prediction was right. With two cells, the lamp got more energy in the same 10 s, and it was brighter. lamp A 0.35 A Add a cell Run for 10 s Start again Potential difference of the cells: 3 V Ammeter: 0.35 A Time: 0 s Charge that left the cells: 0.00 C Charge that came back to them: 0.00 C Energy passed to the lamp: 0.00 J NOW EXPLAIN IT In one line: why do you think the lamp got more energy each second? Check my line cell lamp energy]
    [check] OK: predict-first widget 1 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 12-widget-14-laptop.png] widget-14
    S15 (tapped "Next")
    T15: Why two cells gave the lamp more energy each second: potential difference is the energy each coulomb of charge is given (a coulomb is a unit of charge), and current is the number of coulombs that flow each second. More of either means more energy each second: more power.
    [screenshot 13-exchange-15-laptop.png] exchange-15
    S16 (tapped "Next")
    T16: The equation for power is P = V I: power = potential difference × current. P is the power in watts (W), V is the potential difference in volts (V) and I is the current in amperes (A).
    S17 (tapped "Next")
    T17: Here is an example. Tap "Show the first step" under it to see each step in turn.
    [side picture after T17: none; newest in the chat: worked or question card]
    [worked example under T17: buttons seen Show the first step → Next step → Next step; after the last step: Next]
    [screenshot 14-worked-17-laptop.png] worked-17
    S18 (tapped "Next")
    T18: Your turn. A phone charger supplies 5 V, and a current of 2 A flows. What is its power, in watts?
    [screenshot 15-exchange-18-laptop.png] exchange-18
    S19 (try): 5 times 2
    T19: To find the current, divide both sides of P = V I by V. That leaves I = P ÷ V: the power divided by the potential difference. Check it with the kettle: 2300 ÷ 230 = 10 A.
      [T19 shown first: Yes: 10 W. P = V I = 5 × 2 = 10 W.]
    S20 (tapped "Next")
    T20: A 1150 W heater runs on the 230 V mains. What current does it take, in amperes?
    S21 (try): 1150 divided by 230
    T21: A second equation for power uses resistance: P = I² R, power = current² × resistance. P is the power in watts (W), I is the current in amperes (A) and R is the resistance in ohms (Ω). I² means I × I.
    [screenshot 16-exchange-21-laptop.png] exchange-21
      [T21 shown first: Yes: 5 A. I = P ÷ V = 1150 ÷ 230 = 5 A.]
    S22 (tapped "Next")
    T22: P = I² R comes from the first equation. In P = V I, swap the V for I R, because V = I R. That gives P = I R × I. And I × I is I², so P = I² R.
    S23 (tapped "Next")
    T23: Here is a worked example with P = I² R. Its steps open one at a time under it.
    [worked example under T23: buttons seen Show the first step → Next step → Next step; after the last step: Next]
    [screenshot 17-worked-23-laptop.png] worked-23
    S24 (tapped "Next")
    T24: Your turn. A current of 2 A flows through a 5 Ω resistor. What is the power, in watts?
    [screenshot 18-exchange-24-laptop.png] exchange-24
    S25 (what): wdym
    T25: Have a go at the question: Your turn. A current of 2 A flows through a 5 Ω resistor. What is the power, in watts?
      [T25 shown first: In other words: to work out how fast energy is being transferred in a resistor. You're told the current going through it is 2 A and its resistance is 5 Ω, and you need to find the power in watts, using one of the power equations from this lesson.]
    S26 (ask): how do i use the equation
    T26: Back to the question: Your turn. A current of 2 A flows through a 5 Ω resistor. What is the power, in watts?
      [T26 shown first: The power equation P = I²R is the one to use when you're given current and resistance, which is what your question gives you. Square the current first (multiply it by itself), then multiply that answer by the resistance. Worked example 3 does exactly this with 3 A and 20 Ω, so follow its steps with your own numbers.]
    S27 (try): 2 squared times 5
    T27: In one line: what is power, and what are its two equations?
    [screenshot 19-exchange-27-laptop.png] exchange-27
      [T27 shown first: Not quite: 20 W. P = I² R = 2² × 5 = 4 × 5 = 20 W.]
    S28 (try): energy per second, P equals V I and I squared R
    T28: Appliances are made to transfer energy, from a battery or the mains, into a store of energy. A kettle or heater transfers energy to a thermal store: the water or the room gets hotter.
    [counter now "1/3 covered" after T28; AI calls from the site so far: 13, $0.0080]
      [T28 shown first: Yes: your line makes every point. You have this: the energy an appliance transfers each second. You have this: P = V I. You have this: P = I² R.]
    S29 (tapped "Next")
    T29: A fan or a drill has an electric motor, which transfers energy to a kinetic store: the energy of something moving.
    S30 (tapped "Next")
    T30: A hairdryer has a heater and a fan driven by a motor. Which stores does it transfer energy to?
    [screenshot 20-exchange-30-laptop.png] exchange-30
    S31 (try): thermal and kinetic
    T31: How much energy an appliance transfers depends on two things: its power, and how long it is switched on. The total amount is called the energy transferred.
      [T31 shown first: Yes: the energy goes to the thermal store of the warm air and the kinetic store of the turning fan.]
    S32 (tapped "Next")
    T32: The equation is E = P t: energy transferred = power × time. E is the energy transferred in joules (J), P is the power in watts (W) and t is the time in seconds (s).
    S33 (tapped "Next")
    T33: Watch the units. Time must be in seconds: 1 minute is 60 s and 1 hour is 60 × 60 = 3600 s. Power must be in watts: 0.5 kW is 500 W.
    [screenshot 21-exchange-33-laptop.png] exchange-33
    S34 (tapped "Next")
    T34: The next example needs both conversions, kilowatts to watts and minutes to seconds. Open the card below as before.
    [worked example under T34: buttons seen Show the first step → Next step → Next step; after the last step: Next]
    [screenshot 22-worked-34-laptop.png] worked-34
    S35 (tapped "Next")
    T35: Your turn. A 60 W lamp is on for 1 hour. How much energy does it transfer, in joules?
    S36 (try): 60 times 3600
    T36: A 3 kW kettle and a 1.5 kW kettle each heat water for 1 minute: which is true?
    [screenshot 23-exchange-36-laptop.png] exchange-36
      [T36 shown first: Yes: 216 000 J. E = P t = 60 × 3600 = 216 000 J.]
    S37 (try, tapped the button): the 3 kW kettle transfers twice as much energy
    T37: Because P = V I, you can also write E = P t as E = V I t: energy transferred = potential difference × current × time.
      [T37 shown first: Yes: twice the power, so twice the energy in the same time. Its water's thermal store fills twice as fast.]
    S38 (tapped "Next")
    T38: In one line: what two things does the energy an appliance transfers depend on?
    S39 (idk): power and how long its on
    T39: Last part: putting the equations together. Charge flow is the amount of charge that passes a point. Its equation is Q = I t: charge flow = current × time, with Q in coulombs (C), I in amperes (A) and t in seconds (s).
    [screenshot 24-exchange-39-laptop.png] exchange-39
    [counter now "2/3 covered" after T39; AI calls from the site so far: 18, $0.0088]
      [T39 shown first: Yes: your line makes every point. You have this: its power. You have this: how long it is switched on.]
    S40 (tapped "Next")
    T40: Another equation for energy uses charge: E = Q V, energy transferred = charge flow × potential difference, with E in joules, Q in coulombs and V in volts. Each coulomb pushed through a component gives it energy.
    S41 (tapped "Next")
    T41: How much energy is transferred, in joules, when 20 C of charge flows through a lamp with 12 V across it?
    S42 (idk): 20 times 12
    T42: Harder questions need two equations in a row. Write down what you know, find an equation that links it to the next thing you need, and use that answer in the next equation.
    [screenshot 25-exchange-42-laptop.png] exchange-42
      [T42 shown first: Yes: 240 J. E = Q V = 20 × 12 = 240 J.]
    S43 (tapped "Next")
    T43: Here is a worked example of that. Its steps open one at a time.
    [worked example under T43: buttons seen Show the first step → Next step → Next step → Next step; after the last step: Next]
    [screenshot 26-worked-43-laptop.png] worked-43
    S44 (tapped "Next")
    T44: Your turn, in two steps. A heater takes 4 A from the 230 V mains. Step 1: what is its power, in watts?
    S45 (try): 230 times 4 is 920
    T45: Step 2: the heater is on for 10 s. How much energy does it transfer, in joules?
    [screenshot 27-exchange-45-laptop.png] exchange-45
      [T45 shown first: Yes: 920 W. P = V I = 230 × 4 = 920 W.]
    S46 (try): 920 times 10 is 9200
    T46: In one line: how would you find the energy a heater transfers, if you know its current, its potential difference and the time?
      [T46 shown first: Yes: 9200 J. E = P t = 920 × 10 = 9200 J.]
    S47 (idk): dont know
    T47: Now for a short quiz: six questions on the calculations. Take your time.
      [T47 shown first: No problem. A good line would be: multiply the potential difference, the current and the time in seconds, E = V I t (or find P = V I first, then E = P t).]
    S48 (tapped "Next")
    T48: Quiz, question 1 of 6: A current of 3 A flows through a 10 Ω resistor. What is the power, in watts?
    [screenshot 28-exchange-48-laptop.png] exchange-48
    S49 (idk): dont know
    T49: Quiz, question 2 of 6: A lamp has 12 V across it and 3 A through it. What is its power, in watts?
      [T49 shown first: P = I² R = 3² × 10 = 9 × 10 = 90 W.]
    S50 (idk): 12 times 3 is 36
    T50: Quiz, question 3 of 6: A cooker has a power of 2.5 kW. What is that in watts?
      [T50 shown first: Yes: P = V I = 12 × 3 = 36 W.]
    S51 (ask): is that 2500
    T51: Quiz, question 4 of 6: A 100 W fan runs for 30 s. How much energy does it transfer, in joules?
    [screenshot 29-exchange-51-laptop.png] exchange-51
      [T51 shown first: Yes: 2.5 × 1000 = 2500 W.]
    S52 (idk): 100 times 30 is 3000
    T52: Quiz, question 5 of 6: P = V I. Which gives the current?
      [T52 shown first: Yes: E = P t = 100 × 30 = 3000 J.]
    S53 (try, tapped the button): I = P ÷ V
    T53: Quiz, question 6 of 6: A 2000 W heater is on for 2 minutes. How much energy does it transfer, in joules?
      [T53 shown first: Yes. I = P ÷ V.]
    S54 (try): 2000 times 120 is 240000
    T54: That's the end of the quiz: you got 5 out of 6.
    [screenshot 30-exchange-54-laptop.png] exchange-54
      [T54 shown first: Yes: 2 minutes is 120 s, and E = P t = 2000 × 120 = 240 000 J.]
    S55 (tapped "Next")
    T55: The lesson is finished. Tap a button to go on.
      [T55 shown first: Summary, point 1 of 3: Power is the energy an appliance transfers each second; P = V I and P = I² R.]
      [T55 shown first: Summary, point 2 of 3: The energy transferred depends on the appliance's power and how long it is switched on.]
      [T55 shown first: Summary, point 3 of 3: Multiply the potential difference, the current and the time in seconds, E = V I t (or find P = V I first, then E = P t).]
    [counter now "3/3 covered" after T55; AI calls from the site so far: 25, $0.0090]
    S56 (closing, tapped the button): home
    [S56 left the lesson: the page is no longer the AI lesson (a button such as Home or the slides)]
    [screenshot 31-end-laptop.png] end
    [tutor-side time: 0.7 minutes over 55 exchanges]
