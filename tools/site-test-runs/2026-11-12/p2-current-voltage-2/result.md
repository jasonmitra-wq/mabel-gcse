# Site test: p2-current-voltage (lesson, 2026-11-12)

**PASS** · cost $0.0301 (20 tool calls, 17 calls from the site; tutor claude-sonnet-5-5 $0.0110)

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

- T21-first [dangling-opener, F2] It's asking how much charge moves round the circuit in total.
- T27-first [dangling-opener, F2] It's asking you to picture the torch's wire as one loop going round from the battery, through the bulb and back.

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
    S7 (ask): does charge need complete loop
    T7: Now, the question again: In a torch, the wire to the lamp comes loose at one end. What happens to the movement of charge?
    [diagram shown in the conversation under T7: "A closed circuit: a cell, a switch and a lamp in one loop."]
    [screenshot 10-diagram-7-laptop.png] diagram-7
    [widget 1 in the chat, under the message "The circuit below has a switch, a part that can open a gap i"]
    [check] OK: each widget appears once, under its own message — 1 widget(s)
    [predict-first widget's prediction first has text after T7: "PREDICT FIRST"]
    [screenshot 11-widget-7-laptop.png] widget-7
      [T7 shown first: Yes. Charge only flows round if the circuit is a closed loop that also has something to push it, like a cell or a battery.]
    S8 (idk): dont know
    T8: Think about the switch in the circuit above: when it left a gap in the loop, what happened to the movement of charge round the loop?
    S9 (try, tapped the button): it stops everywhere in the loop
    T9: A flow of charge is called an electric current. The size of a current is how much charge passes a point in the wire each second.
    [screenshot 12-exchange-9-laptop.png] exchange-9
      [T9 shown first: Yes. A gap anywhere breaks the loop, and the charge stops moving everywhere at once, not just near the gap.]
    S10 (tapped "Next")
    T10: In one second, 2 units of charge pass a point in wire A, and 5 units pass a point in wire B. Which wire has the bigger current?
    S11 (try, tapped the button): wire b
    T11: Charge is counted in a unit called the coulomb, written C.
      [T11 shown first: Yes. More charge passes each second in wire B, so wire B has the bigger current.]
    S12 (tapped "Next")
    T12: Current is measured in a unit called the ampere, written A, or amp for short. One ampere means one coulomb of charge passing a point each second.
    [screenshot 13-exchange-12-laptop.png] exchange-12
    S13 (tapped "Next")
    T13: A wire carries 3 coulombs of charge past a point every second. What is the current, in amperes?
    S14 (idk): 3 amps
    T14: Current is measured with an ammeter, a meter that shows the current in amperes.
      [T14 shown first: Yes: 3 A. 3 coulombs each second is 3 amperes.]
    S15 (tapped "Next")
    T15: Predict first: two questions in the box below, one at a time. Then a circuit opens so you can check each answer. Tap Next when you are done.
    [screenshot 14-exchange-15-laptop.png] exchange-15
    [side picture after T15: none; newest in the chat: widget]
    [widget under T15: prediction "The circuit has two ammeters in the same loop, one on each side of the lamp. How" tapped; then shown: yes, ammeters 2, controls Close the switch; "Now explain it" before a control was used: no, after: yes]
    [widget text under T15: PREDICT FIRST (1 OF 2) The circuit has two ammeters in the same loop, one on each side of the lamp. How do their readings compare? One reads less, as the lamp uses some up Both read the same The one nearer the cell reads more Now test your prediction. Read both ammeters. Then open the switch and read them again. Both read the same. With the switch closed, both ammeters showed the same reading. With it open, both showed 0 A. lamp A1 0.00 A A2 0.00 A switch Close the switch Ammeter 1: 0.00 A Ammeter 2: 0.00 A NOW EXPLAIN IT In one line: why do you think both ammeters read the same? Check my line cell switch lamp ammeter current]
    [check] OK: predict-first widget 2 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 15-widget-15-laptop.png] widget-15
    S16 (tapped "Next")
    T16: In a single loop the current is the same at every point, because charge is not used up on the way round.
    [side picture after T16: "The same loop with an ammeter in it, measuring the current."; newest in the chat: picture "The same loop with an ammeter in it, measuring the current."]
    S17 (tapped "Next")
    T17: The total amount of charge that passes a point is called the charge flow. Its symbol is Q, and it is measured in coulombs. It depends on two things: the current, and how long the current lasts.
    S18 (tapped "Next")
    T18: The equation is Q = I t: charge flow = current × time. Q is the charge flow in coulombs (C), I is the current in amperes (A) and t is the time in seconds (s). Writing I t means I multiplied by t.
    [screenshot 16-exchange-18-laptop.png] exchange-18
    S19 (tapped "Next")
    T19: Here is a worked example. Tap "Show the first step" under it to see how it is done, one step at a time.
    [side picture after T19: none; newest in the chat: worked or question card]
    [worked example under T19: buttons seen Show the first step → Next step → Next step; after the last step: Next]
    [screenshot 17-worked-19-laptop.png] worked-19
    S20 (tapped "Next")
    T20: Your turn: A current of 0.4 A flows for 50 s. How much charge flows, in coulombs (C)?
    S21 (what): wdym
    T21: Have a go at the question: A current of 0.4 A flows for 50 s. How much charge flows, in coulombs (C)?
    [diagram shown in the conversation under T21: "The same loop with an ammeter in it, measuring the current."]
    [screenshot 18-diagram-21-laptop.png] diagram-21
    [screenshot 19-exchange-21-laptop.png] exchange-21
    [widget 2 in the chat, under the message "Predict first: two questions in the box below, one at a time"]
    [check] OK: each widget appears once, under its own message — 2 widget(s)
      [T21 shown first: It's asking how much charge moves round the circuit in total. You're told how fast charge flows (the current, 0. 4 amps) and how long it flows for (50 seconds). Use the rule that charge flow is current multiplied by time.]
    S22 (ask): whats the equation again
    T22: Back to the question: A current of 0.4 A flows for 50 s. How much charge flows, in coulombs (C)?
      [T22 shown first: The lesson says to find the charge flow, Q, you multiply the current by the time in seconds. So Q = I × t, with current in amps and time in seconds, and the answer comes out in coulombs.]
    S23 (idk): idk
    T23: That's fine. Here is how to start: Write the equation: Q = I t. In this question, I = 0.4 A and t = 50 s. Now put the numbers in. What do you get?
    S24 (idk): dont know
    T24: In one line, in your own words: what is an electric current?
    [screenshot 20-exchange-24-laptop.png] exchange-24
      [T24 shown first: Here is how it goes. Write the equation: Q = I t. Put the numbers in: Q = 0.4 × 50 = 20. The charge flow is 20 C.]
    S25 (ask): is it charge moving
    T25: A torch is switched on. Where in its single loop is the current biggest?
      [T25 shown first: Your line gets this right: a flow of charge. A full line also says: how much charge passes a point each second.]
    S26 (what): wdym
    T26: Now, the question again: A torch is switched on. Where in its single loop is the current biggest?
      [T26 shown first: I'm asking you to picture the torch's loop of wire with the bulb and battery in it, and to decide whether the flow of charge is stronger at some spot along that loop than at others.]
    S27 (what): wdym
    T27: Have a go at the question: A torch is switched on. Where in its single loop is the current biggest?
    [screenshot 21-exchange-27-laptop.png] exchange-27
      [T27 shown first: It's asking you to picture the torch's wire as one loop going round from the battery, through the bulb and back.]
    S28 (try): same everywhere in the loop
    T28: Next: what decides how big a current is. Connect a lamp to one cell and it glows dimly.
    [counter now "1/7 covered" after T28; AI calls from the site so far: 15, $0.0113]
      [T28 shown first: Yes. In a single loop the current is the same at every point: no part of the loop has more.]
    S29 (tapped "Next")
    T29: Predict first: answer the question in the box below. Then add a cell to test your answer. Tap Next when you are done.
    [side picture after T29: none; newest in the chat: widget]
    [widget under T29: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away; "Now explain it" before a control was used: no, after: yes]
    [widget text under T29: PREDICT FIRST You add a second cell. What happens to the ammeter reading and to the lamp? The lamp gets brighter, the ammeter stays the same Only the current near the new cell goes up Nothing changes Both go up Now test your prediction. Tap Add a cell and watch the ammeter and the lamp. Both go up: the ammeter reading rises and the lamp gets brighter. With two cells, the ammeter reading went up and the lamp got brighter. lamp A 0.21 A Add a cell Take a cell away Ammeter: 0.21 A NOW EXPLAIN IT In one line: why do you think a second cell changed the current? Check my line cell lamp ammeter]
    [check] OK: predict-first widget 3 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 22-widget-29-laptop.png] widget-29
    S30 (tapped "Next")
    T30: Any part of a circuit, such as a lamp, is called a component.
    [screenshot 23-exchange-30-laptop.png] exchange-30
    S31 (tapped "Next")
    T31: The push that drives charge through a component is called the potential difference across it. Two cells give a bigger potential difference than one, and a bigger push drives a bigger current.
    S32 (tapped "Next")
    T32: Potential difference is measured in a unit called the volt, written V.
    S33 (tapped "Next")
    T33: A voltmeter is the meter that measures potential difference. It is joined across a component, with one wire to each end of it. An ammeter goes into the loop; a voltmeter does not.
    [screenshot 24-exchange-33-laptop.png] exchange-33
    S34 (tapped "Next")
    T34: Another name for potential difference is voltage.
    S35 (tapped "Next")
    T35: You want to find out how hard the charge is being pushed through a lamp. Which meter do you use?
    S36 (try, tapped the button): a voltmeter
    T36: Next, a new component: a resistor, a small part that the charge has to pass through when it is in the loop. In a circuit drawing, a resistor is a small rectangle.
    [screenshot 25-exchange-36-laptop.png] exchange-36
      [T36 shown first: Yes. How hard the charge is pushed is the potential difference, and that is what a voltmeter measures.]
    S37 (tapped "Next")
    T37: Predict first: answer the question in the box below. Then put the resistor into the loop to test your answer. Tap Next when you are done.
    [widget under T37: prediction "You put a resistor into the loop. What happens to the current and to the lamp?" tapped; then shown: yes, ammeters 1, controls Take the resistor out; "Now explain it" before a control was used: no, after: yes]
    [widget text under T37: PREDICT FIRST You put a resistor into the loop. What happens to the current and to the lamp? The current stays the same Only the current after the resistor goes down The current goes up and the lamp gets brighter The current goes down and the lamp dims Now test your prediction. Put the resistor into the loop and watch the ammeter and the lamp. The current goes down and the lamp gets dimmer. With the resistor in, the ammeter reading went down and the lamp got dimmer. lamp A 0.18 A resistor Take the resistor out Ammeter: 0.18 A NOW EXPLAIN IT In one line: why do you think the lamp got dimmer? Check my line cell lamp ammeter resistor]
    [check] OK: predict-first widget 4 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 26-widget-37-laptop.png] widget-37
    S38 (tapped "Next")
    T38: A resistor limits the current: it makes it harder for charge to get through. How hard a component makes it for charge to get through is called its resistance.
    S39 (tapped "Next")
    T39: Resistance is measured in a unit called the ohm, written Ω.
    [screenshot 27-exchange-39-laptop.png] exchange-39
    S40 (tapped "Next")
    T40: The picture below puts it all together: a loop with a resistor in it, an ammeter in the loop, and a voltmeter joined across the lamp.
    [side picture after T40: "The same loop with a resistor added, and a voltmeter connected across the lamp."; newest in the chat: picture "The same loop with a resistor added, and a voltmeter connected across the lamp."]
    S41 (tapped "Next")
    T41: Components X and Y each have 6 V across them. X has a bigger resistance than Y. Which one has the bigger current?
    S42 (try, tapped the button): y
    T42: Potential difference, current and resistance are linked by one equation: V = I R, potential difference = current × resistance. V is the potential difference in volts (V), I is the current in amperes (A) and R is the resistance in ohms (Ω). In the equation, the letter V means the potential difference, not the unit.
    [screenshot 28-exchange-42-laptop.png] exchange-42
      [T42 shown first: Yes: Y. For the same potential difference, the bigger the resistance, the smaller the current.]
    S43 (tapped "Next")
    T43: To find a resistance, divide both sides of V = I R by I. So R = V ÷ I: resistance equals potential difference divided by current.
    S44 (tapped "Next")
    T44: Here is a worked example. Tap "Show the first step" under it to see how it is done, one step at a time.
    [side picture after T44: none; newest in the chat: worked or question card]
    [worked example under T44: buttons seen Show the first step → Next step → Next step; after the last step: Next]
    [screenshot 29-worked-44-laptop.png] worked-44
    S45 (tapped "Next")
    T45: Your turn: A current of 0.4 A flows through a 2 Ω resistor. What is the potential difference across it, in volts (V)?
    [screenshot 30-exchange-45-laptop.png] exchange-45
    S46 (idk): not sure
    T46: That's fine. Here is how to start: Write the equation: V = I R. In this question, I = 0.4 A and R = 2 Ω. Now put the numbers in. What do you get?
    S47 (try): v equals 0.8
    T47: Here is a worked example of finding a resistance. Tap "Show the first step" under it to see how it is done, one step at a time.
      [T47 shown first: Yes, that's right: 0.8 V.]
    [worked example under T47: buttons seen Show the first step → Next step → Next step → Next step; after the last step: Next]
    [screenshot 31-worked-47-laptop.png] worked-47
    S48 (tapped "Next")
    T48: Your turn: A component has a potential difference of 12 V across it and a current of 1.5 A through it. What is its resistance, in ohms (Ω)?
    [screenshot 32-exchange-48-laptop.png] exchange-48
    S49 (try): r equals 8
    T49: In one line: what do potential difference and resistance each do to the current?
      [T49 shown first: Yes, that's right: 8 Ω.]
    S50 (idk): not sure
    T50: Where do you put an ammeter to measure the current in a single loop?
      [T50 shown first: No problem. A good line would be: a bigger potential difference pushes a bigger current, and a bigger resistance makes the current smaller.]
    S51 (try, tapped the button): anywhere in the loop
    T51: That's as far as this version goes. The rest is on the slides for now.
    [screenshot 33-exchange-51-laptop.png] exchange-51
    [counter now "2/7 covered" after T51; AI calls from the site so far: 17, $0.0113]
      [T51 shown first: Yes. In a single loop the current is the same at every point, so the ammeter can go anywhere in the loop.]
    [stopped: 2 key points ticked (counter "2/7 covered") after T51]
    [screenshot 34-end-laptop.png] end
    [tutor-side time: 0.6 minutes over 51 exchanges]
