# Site test: p2-current-voltage (lesson, 2026-11-11)

**PASS** · cost $0.0292 (20 tool calls, 16 calls from the site; tutor claude-sonnet-5-5 $0.0098)

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

- W4 [widget-term, F12] the widget shows "Ammeter" before any message explained it
- W26 [widget-term, F12] the widget shows "Potential difference" before any message explained it
- W26 [widget-term, F12] the widget shows "Resistor" before any message explained it
- W26 [widget-term, F12] the widget shows "Voltmeter" before any message explained it

## Transcript

    Lesson p2-current-voltage (Physics › Electricity › Current, potential difference and resistance).
    [screenshot 01-home-laptop.png] home
    [screenshot 02-subjects-laptop.png] subjects
    [screenshot 03-topics-physics-laptop.png] topics-physics
    [screenshot 04-quick-check-offer-laptop.png] quick-check-offer
    [the quick check is offered on its own screen] tapped "Not now: show the lessons"
    [screenshot 05-lessons-p2-laptop.png] lessons-P2
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Welcome! Today you will find out what is going on inside the wires when you turn something on. Press the button on a torch and its bulb lights at once. In science, a bulb like this is called a lamp.
    [screenshot 06-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (tapped "Next")
    T1: Inside the metal wires are tiny particles that carry electric charge, the thing that moves through the wires when the torch is on. You cannot see the charge, but you can see what it does: it makes the lamp light.
    [side picture after T1: none; newest in the chat: none]
    S2 (tapped "Next")
    T2: A torch has a cell inside it, the part that pushes the charge round.
    S3 (tapped "Next")
    T3: The cell, the wires and the lamp, all joined up, make a circuit.
    [screenshot 07-exchange-3-laptop.png] exchange-3
    S4 (tapped "Next")
    T4: The circuit below has a switch, a part that can open a gap in the loop of wire. Predict first: answer the question in the box. Then try the switch to test your answer. Tap Next when you are done.
    [side picture after T4: none; newest in the chat: widget]
    [widget under T4: prediction "The switch in this circuit is open, so there is a gap in the loop. Does the lamp" tapped; then shown: yes, ammeters 0, controls Open the switch; "Now explain it" before a control was used: no, after: yes]
    [widget text under T4: PREDICT FIRST The switch in this circuit is open, so there is a gap in the loop. Does the lamp light? Yes, brightly No Yes, but only dimly Now test your prediction. Look at the lamp while the switch is open. Then close the switch. No: with a gap in the loop, the lamp does not light. While the switch was open, the lamp stayed off. When you closed it, the lamp lit. lamp switch Open the switch The lamp is on NOW EXPLAIN IT In one line: why do you think closing the switch made the lamp light? Check my line cell switch lamp]
    [check] OK: predict-first widget 1 works and matches its words — opened after the prediction true; ammeters 0 (words: -); controls match true; prediction first true
    [screenshot 08-widget-4-laptop.png] widget-4
    S5 (tapped "Next")
    T5: A complete loop, out of the cell, through the lamp and back to the cell, is called a closed circuit.
    [side picture after T5: "A closed circuit: a cell, a switch and a lamp in one loop."; newest in the chat: picture "A closed circuit: a cell, a switch and a lamp in one loop."]
    S6 (tapped "Next")
    T6: In a torch, the wire to the lamp comes loose at one end. What happens to the movement of charge?
    [screenshot 09-exchange-6-laptop.png] exchange-6
    S7 (ask): stops everywhere right
    T7: A flow of charge is called an electric current. The size of a current is how much charge passes a point in the wire each second.
    [diagram shown in the conversation under T7: "A closed circuit: a cell, a switch and a lamp in one loop."]
    [screenshot 10-diagram-7-laptop.png] diagram-7
    [widget 1 in the chat, under the message "The circuit below has a switch, a part that can open a gap i"]
    [check] OK: each widget appears once, under its own message — 1 widget(s)
    [predict-first widget's prediction first has text after T7: "PREDICT FIRST"]
    [screenshot 11-widget-7-laptop.png] widget-7
      [T7 shown first: Yes. A gap anywhere breaks the loop, and the charge stops moving everywhere at once, not just near the gap.]
    S8 (tapped "Next")
    T8: In one second, 2 units of charge pass a point in wire A, and 5 units pass a point in wire B. Which wire has the bigger current?
    S9 (idk): idk
    T9: The bigger current is in the wire with more charge passing each second. Which wire has the bigger current?
    [screenshot 12-exchange-9-laptop.png] exchange-9
    S10 (try, tapped the button): wire b
    T10: Charge is counted in a unit called the coulomb, written C.
      [T10 shown first: Yes. More charge passes each second in wire B, so wire B has the bigger current.]
    S11 (tapped "Next")
    T11: Current is measured in a unit called the ampere, written A, or amp for short. One ampere means one coulomb of charge passing a point each second.
    S12 (tapped "Next")
    T12: A wire carries 3 coulombs of charge past a point every second. What is the current, in amperes?
    [screenshot 13-exchange-12-laptop.png] exchange-12
    S13 (try): 3 amps
    T13: Current is measured with an ammeter, a meter that shows the current in amperes.
      [T13 shown first: Yes: 3 A. 3 coulombs each second is 3 amperes.]
    S14 (tapped "Next")
    T14: Predict first: two questions in the box below, one at a time. Then a circuit opens so you can check each answer. Tap Next when you are done.
    [side picture after T14: none; newest in the chat: widget]
    [widget under T14: prediction "The circuit has two ammeters in the same loop, one on each side of the lamp. How" tapped; then shown: yes, ammeters 2, controls Close the switch; "Now explain it" before a control was used: no, after: yes]
    [widget text under T14: PREDICT FIRST (1 OF 2) The circuit has two ammeters in the same loop, one on each side of the lamp. How do their readings compare? One reads less, as the lamp uses some up Both read the same The one nearer the cell reads more Now test your prediction. Read both ammeters. Then open the switch and read them again. Both read the same. With the switch closed, both ammeters showed the same reading. With it open, both showed 0 A. lamp A1 0.00 A A2 0.00 A switch Close the switch Ammeter 1: 0.00 A Ammeter 2: 0.00 A NOW EXPLAIN IT In one line: why do you think both ammeters read the same? Check my line cell switch lamp ammeter current]
    [check] OK: predict-first widget 2 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 14-widget-14-laptop.png] widget-14
    S15 (tapped "Next")
    T15: In a single loop the current is the same at every point, because charge is not used up on the way round.
    [screenshot 15-exchange-15-laptop.png] exchange-15
    [side picture after T15: "The same loop with an ammeter in it, measuring the current."; newest in the chat: picture "The same loop with an ammeter in it, measuring the current."]
    S16 (tapped "Next")
    T16: The total amount of charge that passes a point is called the charge flow. Its symbol is Q, and it is measured in coulombs. It depends on two things: the current, and how long the current lasts.
    S17 (tapped "Next")
    T17: The equation is Q = I t: charge flow = current × time. Q is the charge flow in coulombs (C), I is the current in amperes (A) and t is the time in seconds (s). Writing I t means I multiplied by t.
    S18 (tapped "Next")
    T18: Here is a worked example. Tap "Show the first step" under it to see how it is done, one step at a time.
    [screenshot 16-exchange-18-laptop.png] exchange-18
    [side picture after T18: none; newest in the chat: worked or question card]
    [worked example under T18: buttons seen Show the first step → Next step → Next step; after the last step: Next]
    [screenshot 17-worked-18-laptop.png] worked-18
    S19 (tapped "Next")
    T19: Your turn: A current of 0.4 A flows for 50 s. How much charge flows, in coulombs (C)?
    S20 (idk): idk
    T20: That's fine. Here is how to start: Write the equation: Q = I t. In this question, I = 0.4 A and t = 50 s. Now put the numbers in. What do you get?
    [diagram shown in the conversation under T20: "The same loop with an ammeter in it, measuring the current."]
    [screenshot 18-diagram-20-laptop.png] diagram-20
    [widget 2 in the chat, under the message "Predict first: two questions in the box below, one at a time"]
    [check] OK: each widget appears once, under its own message — 2 widget(s)
    S21 (what): wdym
    T21: Now, the question again: A current of 0.4 A flows for 50 s. How much charge flows, in coulombs (C)?
    [screenshot 19-exchange-21-laptop.png] exchange-21
      [T21 shown first: I meant: write the rule for charge flow, which is Q = I × t (charge equals current times time). Then swap in the numbers you were given, 0. 4 for the current and 50 for the time, so you have 0. 4 × 50 to work out.]
    S22 (ask): whats the equation again
    T22: Have a go at the question: A current of 0.4 A flows for 50 s. How much charge flows, in coulombs (C)?
      [T22 shown first: Charge flow is current multiplied by time in seconds. In symbols that is Q = I × t, with Q in coulombs, I in amps and t in seconds.]
    S23 (idk): idk
    T23: In one line, in your own words: what is an electric current?
      [T23 shown first: Here is how it goes. Write the equation: Q = I t. Put the numbers in: Q = 0.4 × 50 = 20. The charge flow is 20 C.]
    S24 (idk): dont know
    T24: A torch is switched on. Where in its single loop is the current biggest?
    [screenshot 20-exchange-24-laptop.png] exchange-24
      [T24 shown first: No problem. A good line would be: a current is a flow of charge, and its size is how much charge passes a point each second.]
    S25 (ask): is it same everywhere
    T25: Next: what decides how big a current is. Connect a lamp to one cell and it glows dimly.
    [counter now "1/7 covered" after T25]
      [T25 shown first: Yes. In a single loop the current is the same at every point: no part of the loop has more.]
    S26 (tapped "Next")
    T26: Predict first: answer the question in the box below. Then add a cell to test your answer. Tap Next when you are done.
    [side picture after T26: none; newest in the chat: widget]
    [widget under T26: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away; "Now explain it" before a control was used: no, after: yes]
    [widget text under T26: PREDICT FIRST You add a second cell. What happens to the ammeter reading and to the lamp? The lamp gets brighter, the ammeter stays the same Only the current near the new cell goes up Nothing changes Both go up Now test your prediction. Tap Add a cell and watch the ammeter and the lamp. Both go up: the ammeter reading rises and the lamp gets brighter. With two cells, the ammeter reading went up and the lamp got brighter. lamp A 0.21 A Add a cell Take a cell away Ammeter: 0.21 A NOW EXPLAIN IT In one line: why do you think a second cell changed the current? Check my line cell lamp ammeter]
    [check] OK: predict-first widget 3 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 21-widget-26-laptop.png] widget-26
    S27 (tapped "Next")
    T27: Any part of a circuit, such as a lamp, is called a component.
    [screenshot 22-exchange-27-laptop.png] exchange-27
    S28 (tapped "Next")
    T28: The push that drives charge through a component is called the potential difference across it. Two cells give a bigger potential difference than one, and a bigger push drives a bigger current.
    S29 (tapped "Next")
    T29: Potential difference is measured in a unit called the volt, written V.
    S30 (tapped "Next")
    T30: A voltmeter is the meter that measures potential difference. It is joined across a component, with one wire to each end of it. An ammeter goes into the loop; a voltmeter does not.
    [screenshot 23-exchange-30-laptop.png] exchange-30
    S31 (tapped "Next")
    T31: Another name for potential difference is voltage.
    S32 (tapped "Next")
    T32: You want to find out how hard the charge is being pushed through a lamp. Which meter do you use?
    S33 (what): wdym
    T33: Back to the question: You want to find out how hard the charge is being pushed through a lamp. Which meter do you use?
    [screenshot 24-exchange-33-laptop.png] exchange-33
      [T33 shown first: I was asking which instrument you'd use to measure the push on the charge as it goes through the lamp. That push is the potential difference, and it's measured in volts with a voltmeter. You connect the voltmeter across the lamp, on either side of it, so it reads the push across that one part.]
    S34 (what): wdym
    T34: Now, the question again: You want to find out how hard the charge is being pushed through a lamp. Which meter do you use?
      [T34 shown first: I meant: the push on the charge is the potential difference, and you measure it in volts with a voltmeter. You connect the voltmeter across the lamp, meaning on either side of it, so it reads the push through that lamp.]
    S35 (try, tapped the button): a voltmeter
    T35: Next, a new component: a resistor, a small part that the charge has to pass through when it is in the loop. In a circuit drawing, a resistor is a small rectangle.
      [T35 shown first: Yes. How hard the charge is pushed is the potential difference, and that is what a voltmeter measures.]
    S36 (tapped "Next")
    T36: Predict first: answer the question in the box below. Then put the resistor into the loop to test your answer. Tap Next when you are done.
    [screenshot 25-exchange-36-laptop.png] exchange-36
    [widget under T36: prediction "You put a resistor into the loop. What happens to the current and to the lamp?" tapped; then shown: yes, ammeters 1, controls Take the resistor out; "Now explain it" before a control was used: no, after: yes]
    [widget text under T36: PREDICT FIRST You put a resistor into the loop. What happens to the current and to the lamp? The current stays the same Only the current after the resistor goes down The current goes up and the lamp gets brighter The current goes down and the lamp dims Now test your prediction. Put the resistor into the loop and watch the ammeter and the lamp. The current goes down and the lamp gets dimmer. With the resistor in, the ammeter reading went down and the lamp got dimmer. lamp A 0.18 A resistor Take the resistor out Ammeter: 0.18 A NOW EXPLAIN IT In one line: why do you think the lamp got dimmer? Check my line cell lamp ammeter resistor]
    [check] OK: predict-first widget 4 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 26-widget-36-laptop.png] widget-36
    S37 (tapped "Next")
    T37: A resistor limits the current: it makes it harder for charge to get through. How hard a component makes it for charge to get through is called its resistance.
    S38 (tapped "Next")
    T38: Resistance is measured in a unit called the ohm, written Ω.
    S39 (tapped "Next")
    T39: The picture below puts it all together: a loop with a resistor in it, an ammeter in the loop, and a voltmeter joined across the lamp.
    [screenshot 27-exchange-39-laptop.png] exchange-39
    [side picture after T39: "The same loop with a resistor added, and a voltmeter connected across the lamp."; newest in the chat: picture "The same loop with a resistor added, and a voltmeter connected across the lamp."]
    S40 (tapped "Next")
    T40: Components X and Y each have 6 V across them. X has a bigger resistance than Y. Which one has the bigger current?
    S41 (try, tapped the button): y
    T41: Potential difference, current and resistance are linked by one equation: V = I R, potential difference = current × resistance. V is the potential difference in volts (V), I is the current in amperes (A) and R is the resistance in ohms (Ω). In the equation, the letter V means the potential difference, not the unit.
      [T41 shown first: Yes: Y. For the same potential difference, the bigger the resistance, the smaller the current.]
    S42 (tapped "Next")
    T42: To find a resistance, divide both sides of V = I R by I. So R = V ÷ I: resistance equals potential difference divided by current.
    [screenshot 28-exchange-42-laptop.png] exchange-42
    S43 (tapped "Next")
    T43: Here is a worked example. Tap "Show the first step" under it to see how it is done, one step at a time.
    [side picture after T43: none; newest in the chat: worked or question card]
    [worked example under T43: buttons seen Show the first step → Next step → Next step; after the last step: Next]
    [screenshot 29-worked-43-laptop.png] worked-43
    S44 (tapped "Next")
    T44: Your turn: A current of 0.4 A flows through a 2 Ω resistor. What is the potential difference across it, in volts (V)?
    S45 (try): v equals ir
    T45: Type your answer as a number. A current of 0.4 A flows through a 2 Ω resistor. What is the potential difference across it, in volts (V)?
    [screenshot 30-exchange-45-laptop.png] exchange-45
    S46 (idk): not sure
    T46: That's fine. Here is how to start: Write the equation: V = I R. In this question, I = 0.4 A and R = 2 Ω. Now put the numbers in. What do you get?
    S47 (try): v equals 0.4 times 2
    T47: Here is a worked example of finding a resistance. Tap "Show the first step" under it to see how it is done, one step at a time.
      [T47 shown first: Not quite: it's 0.8 V. Write the equation: V = I R. Put the numbers in: V = 0.4 × 2 = 0.8. The potential difference is 0.8 V.]
    [worked example under T47: buttons seen Show the first step → Next step → Next step → Next step; after the last step: Next]
    [screenshot 31-worked-47-laptop.png] worked-47
    S48 (tapped "Next")
    T48: Your turn: A component has a potential difference of 12 V across it and a current of 1.5 A through it. What is its resistance, in ohms (Ω)?
    [screenshot 32-exchange-48-laptop.png] exchange-48
    S49 (try): r equals 12 divided by 1.5
    T49: In one line: what do potential difference and resistance each do to the current?
      [T49 shown first: Not quite: it's 8 Ω. Start from V = I R. You want R, so divide both sides by I: R = V ÷ I. Put the numbers in: R = 12 ÷ 1.5 = 8. The resistance is 8 Ω.]
    S50 (idk): not sure
    T50: Where do you put an ammeter to measure the current in a single loop?
      [T50 shown first: No problem. A good line would be: a bigger potential difference pushes a bigger current, and a bigger resistance makes the current smaller.]
    S51 (try, tapped the button): anywhere in the loop
    T51: That's as far as this version goes. The rest is on the slides for now.
    [screenshot 33-exchange-51-laptop.png] exchange-51
    [counter now "2/7 covered" after T51]
      [T51 shown first: Yes. In a single loop the current is the same at every point, so the ammeter can go anywhere in the loop.]
    [stopped: 2 key points ticked (counter "2/7 covered") after T51]
    [screenshot 34-end-laptop.png] end
    [tutor-side time: 0.5 minutes over 51 exchanges]
