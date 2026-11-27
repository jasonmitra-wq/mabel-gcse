# Site test: p2-current-voltage (lesson, 2026-11-27)

**PASS** · cost $0.1052 (66 tool calls, 60 calls from the site; tutor claude-sonnet-5-5 $0.0375)

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
    T1: Inside the metal wires are tiny particles that carry electric charge, which is what flows through the wires. When the torch is on, these particles drift round the wires together. You cannot see the charge, but you can see what it does: it makes the lamp light.
    [side picture after T1: none; newest in the chat: none]
    S2 (tapped "Next")
    T2: A torch has a cell inside it, the part that pushes the charge round.
    S3 (tapped "Next")
    T3: In everyday talk a cell is often called a battery. In science, a battery is two or more cells joined together.
    [screenshot 07-exchange-3-laptop.png] exchange-3
    S4 (tapped "Next")
    T4: The cell, the wires and the lamp, all joined up, make a circuit.
    S5 (tapped "Next")
    T5: The circuit below has a switch, a part that can open a gap in the loop of wire. Predict first: answer the question in the box. Then try the switch to test your answer. Tap Next when you are done.
    [side picture after T5: none; newest in the chat: widget]
    [widget under T5: prediction "The switch in this circuit is open, so there is a gap in the loop. Does the lamp" tapped; then shown: yes, ammeters 0, controls Open the switch; "Now explain it" before a control was used: no, after: yes]
    [widget text under T5: PREDICT FIRST The switch in this circuit is open, so there is a gap in the loop. Does the lamp light? Yes, brightly Yes, but only dimly No Now test your prediction. Look at the lamp while the switch is open. Then close the switch. No: with a gap in the loop, the lamp does not light. While the switch was open, the lamp stayed off. When you closed it, the lamp lit. lamp switch Open the switch The lamp is on NOW EXPLAIN IT In one line: why do you think closing the switch made the lamp light? Check my line cell switch lamp]
    [check] OK: predict-first widget 1 works and matches its words — opened after the prediction true; ammeters 0 (words: -); controls match true; prediction first true
    [screenshot 08-widget-5-laptop.png] widget-5
    S6 (tapped "Next")
    T6: A complete loop, out of the cell, through the lamp and back to the cell, is called a closed circuit.
    [screenshot 09-exchange-6-laptop.png] exchange-6
    [side picture after T6: "A closed circuit: a cell, a switch and a lamp in one loop."; newest in the chat: picture "A closed circuit: a cell, a switch and a lamp in one loop."]
    S7 (tapped "Next")
    T7: In a torch, the wire to the lamp comes loose at one end. What happens to the movement of charge?
    S8 (ask): what happens at the gap
    T8: Now, the question again: In a torch, the wire to the lamp comes loose at one end. What happens to the movement of charge?
    [diagram shown in the conversation under T8: "A closed circuit: a cell, a switch and a lamp in one loop."]
    [screenshot 10-diagram-8-laptop.png] diagram-8
    [widget 1 in the chat, under the message "The circuit below has a switch, a part that can open a gap i"]
    [check] OK: each widget appears once, under its own message — 1 widget(s)
    [predict-first widget's prediction first has text after T8: "PREDICT FIRST"]
    [screenshot 11-widget-8-laptop.png] widget-8
      [T8 shown first: A loose wire leaves a gap in the loop, just like the gap a switch makes on purpose. The loop is no longer complete, so it is no longer a closed circuit. Think about what the lesson says charge needs in order to flow round, and what the torch is now missing.]
    S9 (idk): idk
    T9: Think about the switch in the circuit above: when it left a gap in the loop, what happened to the movement of charge round the loop?
    [screenshot 12-exchange-9-laptop.png] exchange-9
      [T9 easier step]
    S10 (try): it stops everywhere
    T10: A flow of charge is called an electric current. The size of a current is how much charge passes a point in the wire each second.
      [T10 shown first: Yes. A gap anywhere breaks the loop, and the charge stops moving everywhere at once, not just near the gap.]
    S11 (tapped "Next")
    T11: In one second, 2 units of charge pass a point in wire A, and 5 units pass a point in wire B. Which wire has the bigger current?
    S12 (try, tapped the button): wire b
    T12: Charge is counted in a unit called the coulomb, written C.
    [screenshot 13-exchange-12-laptop.png] exchange-12
      [T12 shown first: Yes. More charge passes each second in wire B, so wire B has the bigger current.]
    S13 (tapped "Next")
    T13: Current is measured in a unit called the ampere, written A, or amp for short. One ampere means one coulomb of charge passing a point each second.
    S14 (tapped "Next")
    T14: A wire carries 3 coulombs of charge past a point every second. What is the current, in amperes?
    S15 (idk): 3 amps
    T15: Current is measured with an ammeter, a meter that shows the current in amperes.
    [screenshot 14-exchange-15-laptop.png] exchange-15
      [T15 shown first: Yes: 3 A. One coulomb each second is one ampere, so 3 coulombs each second is 3 amperes.]
    S16 (tapped "Next")
    T16: An ammeter is joined into the loop itself, so the charge moves through it.
    [side picture after T16: "The same loop with an ammeter in it, measuring the current."; newest in the chat: picture "The same loop with an ammeter in it, measuring the current."]
    S17 (tapped "Next")
    T17: Predict first: answer the question in the box below. Then a circuit opens so you can check your answer. Tap Next when you are done.
    [side picture after T17: none; newest in the chat: widget]
    [widget under T17: prediction "The circuit has two ammeters in the same loop, one on each side of the lamp. How" tapped; then shown: yes, ammeters 2, controls Close the switch; "Now explain it" before a control was used: no, after: yes]
    [widget text under T17: PREDICT FIRST The circuit has two ammeters in the same loop, one on each side of the lamp. How do their readings compare? Both read the same The one nearer the cell reads more One reads less, as the lamp uses some up Now test your prediction. Read both ammeters. Then open the switch and read them again. Your prediction was right. With the switch closed, both ammeters showed the same reading. With it open, both showed 0 A. lamp A1 0.00 A A2 0.00 A switch Close the switch Ammeter 1: 0.00 A Ammeter 2: 0.00 A NOW EXPLAIN IT In one line: why do you think both ammeters read the same? Check my line cell switch lamp ammeter current]
    [check] OK: predict-first widget 2 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 15-widget-17-laptop.png] widget-17
    S18 (tapped "Next")
    T18: In a single loop, a circuit with only one path round, the current is the same at every point, because charge is not used up on the way round.
    [screenshot 16-exchange-18-laptop.png] exchange-18
    S19 (tapped "Next")
    T19: The total amount of charge that passes a point is called the charge flow. Its symbol is Q, and it is measured in coulombs. It depends on two things: the current, and how long the current lasts.
    S20 (tapped "Next")
    T20: The equation for charge flow is Q = I t: charge flow = current × time. Q is the charge flow in coulombs (C), I is the current in amperes (A) and t is the time in seconds (s). Writing I t means I multiplied by t.
    S21 (tapped "Next")
    T21: Here is a worked example. Tap "Show the first step" under it to see how it is done, one step at a time.
    [screenshot 17-exchange-21-laptop.png] exchange-21
    [side picture after T21: none; newest in the chat: worked or question card]
    [worked example under T21: buttons seen Show the first step → Next step → Next step; after the last step: Next]
    [screenshot 18-worked-21-laptop.png] worked-21
    S22 (tapped "Next")
    T22: Your turn: A current of 2 A flows for 10 s. How much charge flows, in coulombs (C)?
    S23 (what): wdym
    T23: Have a go at the question: A current of 2 A flows for 10 s. How much charge flows, in coulombs (C)?
    [diagram shown in the conversation under T23: "The same loop with an ammeter in it, measuring the current."]
    [screenshot 19-diagram-23-laptop.png] diagram-23
      [T23 shown first: In other words: how much electric charge moves along the wire in total. The current, 2 amps, tells you how many coulombs pass each second, and the time is 10 seconds. So work out the total number of coulombs that have passed by the end of those 10 seconds.]
    S24 (ask): what do i use
    T24: Back to the question: A current of 2 A flows for 10 s. How much charge flows, in coulombs (C)?
    [screenshot 20-exchange-24-laptop.png] exchange-24
      [T24 shown first: You use the two numbers in the question: the current and the time. The lesson says charge flow is found by multiplying the current in amps by the time in seconds, and the answer comes out in coulombs.]
    S25 (idk): idk
    T25: Here is how to start: Write the equation: Q = I t. In this question, I = 2 A and t = 10 s. Now put the numbers in. What do you get?
    S26 (idk): 2 times 10
    T26: In one line, in your own words: what is an electric current?
      [T26 shown first: Yes, that's the right working: it comes to 20 C.]
    S27 (ask): whats charge again
    T27: Now, the question again: In one line, in your own words: what is an electric current?
    [screenshot 21-exchange-27-laptop.png] exchange-27
      [T27 shown first: Charge is the electric property carried by the tiny particles inside a metal wire. You cannot see it, but you can see what it does, like lighting a lamp. It is counted in coulombs (C).]
    S28 (what): wdym
    T28: Have a go at the question: In one line, in your own words: what is an electric current?
      [T28 shown first: In other words: to put "electric current" into a short sentence of your own, as if explaining it to a friend. Think about what is moving inside the wires of a circuit, and what we measure about that movement.]
    S29 (what): huh
    T29: Back to the question: In one line, in your own words: what is an electric current?
      [T29 shown first: In other words: to explain, in just one sentence and in your own simple words, what an electric current actually is. Think about what is moving inside the wire when a torch is on, and how you would describe that to a friend.]
    S30 (try): charge moving fast
    T30: A torch is switched on. Where in its single loop is the current biggest?
    [screenshot 22-exchange-30-laptop.png] exchange-30
      [T30 shown first: Partly there. You have this: a flow of charge. Still needed: how much charge passes a point each second.]
    S31 (try): same everywhere loop
    T31: Next: what decides how big a current is. Connect a lamp to one cell and it glows dimly. The brighter a lamp glows, the bigger the current through it.
    [counter now "1/7 covered" after T31; AI calls from the site so far: 20, $0.0149]
      [T31 shown first: Yes. In a single loop the current is the same at every point: no part of the loop has more.]
    S32 (tapped "Next")
    T32: Predict first: answer the question in the box below. Then add a cell to test your answer. Tap Next when you are done.
    [side picture after T32: none; newest in the chat: widget]
    [widget under T32: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away; "Now explain it" before a control was used: no, after: yes]
    [widget text under T32: PREDICT FIRST You add a second cell. What happens to the ammeter reading and to the lamp? Nothing changes Only the current near the new cell goes up The lamp gets brighter; the reading stays the same The reading rises and the lamp gets brighter Now test your prediction. Tap Add a cell and watch the ammeter and the lamp. The ammeter reading rises and the lamp gets brighter. With two cells, the ammeter reading went up and the lamp got brighter. lamp A 0.21 A Add a cell Take a cell away Ammeter: 0.21 A NOW EXPLAIN IT In one line: why do you think a second cell changed the current? Check my line cell lamp ammeter]
    [check] OK: predict-first widget 3 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 23-widget-32-laptop.png] widget-32
    S33 (tapped "Next")
    T33: Any part of a circuit, such as a lamp, is called a component.
    [screenshot 24-exchange-33-laptop.png] exchange-33
    S34 (tapped "Next")
    T34: The push that drives charge through a component, from one end of it to the other, is called the potential difference across it. Two cells give a bigger potential difference than one, and a bigger push drives a bigger current.
    S35 (tapped "Next")
    T35: Potential difference is measured in a unit called the volt, written V. Cells joined one after the other add their potential differences together.
    S36 (tapped "Next")
    T36: A single torch cell has 1.5 V across it. What potential difference do two of these cells give, in volts?
    [screenshot 25-exchange-36-laptop.png] exchange-36
    S37 (try): 3 volts
    T37: A voltmeter is the meter that measures potential difference. A voltmeter is joined across a component, with one of its wires at each end of the component, not into the loop.
      [T37 shown first: Yes: 3 V. Two cells give twice the push of one.]
    S38 (tapped "Next")
    T38: Try it: in the circuit below, a voltmeter is joined across the lamp, with one wire at each end of it. Add a cell and watch the voltmeter. Tap Next when you are done.
    [widget under T38: prediction "" tapped; then shown: yes, ammeters 1, controls Add a cell; "Now explain it" before a control was used: no, after: no]
    [widget text under T38: lamp A 0.35 A V Add a cell Ammeter: 0.35 A Voltmeter across the lamp: 3.00 V cell lamp ammeter voltmeter]
    [check] OK: predict-first widget 4 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 26-widget-38-laptop.png] widget-38
    S39 (tapped "Next")
    T39: Another name for potential difference is voltage.
    [screenshot 27-exchange-39-laptop.png] exchange-39
    S40 (tapped "Next")
    T40: You want to find out how hard the charge is being pushed through a lamp. Which meter do you use?
    S41 (idk): idk
    T41: How hard the charge is pushed is the potential difference. Which meter do you use to measure that push?
    [widget 2 in the chat, under the message "Try it: in the circuit below, a voltmeter is joined across t"]
    [check] OK: each widget appears once, under its own message — 2 widget(s)
      [T41 easier step]
    S42 (try, tapped the button): a voltmeter
    T42: Next, a new component: a resistor, a small part that charge has to pass through, which changes how much current flows.
    [screenshot 28-exchange-42-laptop.png] exchange-42
      [T42 shown first: Yes. How hard the charge is pushed is the potential difference, and that is what a voltmeter measures.]
    S43 (tapped "Next")
    T43: Predict first: answer the question in the box below. Then put the resistor into the loop to test your answer. Tap Next when you are done.
    [widget under T43: prediction "You put a resistor into the loop. What happens to the current and to the lamp?" tapped; then shown: yes, ammeters 1, controls Take the resistor out; "Now explain it" before a control was used: no, after: yes]
    [widget text under T43: PREDICT FIRST You put a resistor into the loop. What happens to the current and to the lamp? Only the current after the resistor goes down The current stays the same The current goes down and the lamp dims The current goes up and the lamp gets brighter Now test your prediction. Put the resistor into the loop and watch the ammeter and the lamp. The current goes down and the lamp gets dimmer. With the resistor in, the ammeter reading went down and the lamp got dimmer. lamp A 0.18 A resistor Take the resistor out Ammeter: 0.18 A NOW EXPLAIN IT In one line: why do you think the lamp got dimmer? Check my line cell lamp ammeter resistor]
    [check] OK: predict-first widget 5 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 29-widget-43-laptop.png] widget-43
    S44 (tapped "Next")
    T44: A resistor limits the current: it makes it harder for charge to get through. How hard a component makes it for charge to get through is called its resistance.
    S45 (tapped "Next")
    T45: Resistance is measured in a unit called the ohm, written Ω.
    [screenshot 30-exchange-45-laptop.png] exchange-45
    S46 (tapped "Next")
    T46: The picture below puts it all together: a loop with a resistor in it, an ammeter in the loop, and a voltmeter joined across the lamp.
    [side picture after T46: "The same loop with a resistor added, and a voltmeter connected across the lamp."; newest in the chat: picture "The same loop with a resistor added, and a voltmeter connected across the lamp."]
    S47 (tapped "Next")
    T47: Components X and Y each have 6 V across them. X has a bigger resistance than Y. Which one has the bigger current?
    S48 (try, tapped the button): Y
    T48: The current depends on two things: a bigger potential difference gives a bigger current, and a bigger resistance gives a smaller current.
    [screenshot 31-exchange-48-laptop.png] exchange-48
    [widget 3 in the chat, under the message "Predict first: answer the question in the box below. Then pu"]
    [check] OK: each widget appears once, under its own message — 3 widget(s)
      [T48 shown first: Yes: Y. For the same potential difference, the bigger the resistance, the smaller the current.]
    S49 (tapped "Next")
    T49: Potential difference, current and resistance are linked by one equation: V = I R, potential difference = current × resistance. V is the potential difference in volts (V), I is the current in amperes (A) and R is the resistance in ohms (Ω). In the equation, the letter V means the potential difference, not the unit.
    S50 (tapped "Next")
    T50: Here is a worked example. Tap "Show the first step" under it to see how it is done, one step at a time.
    [side picture after T50: none; newest in the chat: worked or question card]
    [worked example under T50: buttons seen Show the first step → Next step → Next step; after the last step: Next]
    [screenshot 32-worked-50-laptop.png] worked-50
    S51 (tapped "Next")
    T51: Your turn: A current of 3 A flows through a 4 Ω resistor. What is the potential difference across it, in volts (V)?
    [screenshot 33-exchange-51-laptop.png] exchange-51
    S52 (idk): idk
    T52: Here is how to start: Write the equation: V = I R. In this question, I = 3 A and R = 4 Ω. Now put the numbers in. What do you get?
    S53 (try): v equals 12
    T53: Sometimes you need to find the resistance instead. Here is a worked example of that. Tap "Show the first step" under it to see how it is done, one step at a time.
      [T53 shown first: Yes, that's right: 12 V.]
    [worked example under T53: buttons seen Show the first step → Next step → Next step → Next step; after the last step: Next]
    [screenshot 34-worked-53-laptop.png] worked-53
    S54 (tapped "Next")
    T54: Your turn: A component has a potential difference of 18 V across it and a current of 3 A through it. What is its resistance, in ohms (Ω)?
    [screenshot 35-exchange-54-laptop.png] exchange-54
    S55 (try): 6 ohms
    T55: In the same way, to find a current, divide both sides of V = I R by R: I = V ÷ R, current = potential difference ÷ resistance.
      [T55 shown first: Yes, that's right: 6 Ω.]
    S56 (tapped "Next")
    T56: Your turn: A potential difference of 24 V is put across a 12 Ω resistor. What is the current through it, in amperes (A)?
    S57 (try): 2 amps
    T57: In one line: what do potential difference and resistance each do to the current?
    [screenshot 36-exchange-57-laptop.png] exchange-57
      [T57 shown first: Yes, that's right: 2 A.]
    S58 (idk): bigger pd makes bigger current, bigger resistance makes smaller current
    T58: Where do you put an ammeter to measure the current in a single loop?
      [T58 shown first: Yes: your line makes every point. You have this: a bigger potential difference (push) gives a bigger current. You have this: a bigger resistance gives a smaller current.]
    S59 (try, tapped the button): anywhere in the loop
    T59: Wire is used in heaters, chargers and the coils inside motors, so engineers need to know how the length of a wire changes its resistance. This is a practical you will do in class; here is how it works.
    [counter now "2/7 covered" after T59; AI calls from the site so far: 26, $0.0155]
      [T59 shown first: Yes. In a single loop the current is the same at every point, so the ammeter can go anywhere in the loop.]
    S60 (tapped "Next")
    T60: Before the practical, a quick check. What does an ammeter measure?
    [screenshot 37-exchange-60-laptop.png] exchange-60
    S61 (idk): dont know
    T61: An ammeter's name gives a clue: an ammeter shows a reading in amperes. Which quantity is measured in amperes?
      [T61 easier step]
    S62 (try): the curent
    T62: How do you work out a resistance from the potential difference V and the current I?
      [T62 shown first: Yes: an ammeter measures the current through a component.]
    S63 (what): wdym
    T63: Now, the question again: How do you work out a resistance from the potential difference V and the current I?
    [screenshot 38-exchange-63-laptop.png] exchange-63
      [T63 shown first: The tutor is asking how to turn two measurements into a resistance. You measure the push across a wire (potential difference, in volts) and the flow through it (current, in amps), and the question is what you do with those two numbers to get the resistance, in ohms.]
    S64 (try): divide potential difference by current
    T64: A long wire is clipped along a metre ruler and joined to a cell. The ammeter is joined in series with the wire: one after another in the same loop, so the same current flows through both.
      [T64 shown first: Yes: resistance = potential difference ÷ current, R = V ÷ I.]
    S65 (tapped "Next")
    T65: The voltmeter is joined in parallel with the wire, side by side across the same two points: its two clips go at each end of the length you are testing. The voltmeter measures the potential difference across that length.
    [side picture after T65: "Measuring the resistance of a length of wire."; newest in the chat: picture "Measuring the resistance of a length of wire."]
    S66 (tapped "Next")
    T66: The voltmeter reads 3 V and the ammeter reads 0.5 A. What is the resistance of this length of wire, in ohms?
    [screenshot 39-exchange-66-laptop.png] exchange-66
    S67 (what): wdym
    T67: Have a go at the question: The voltmeter reads 3 V and the ammeter reads 0.5 A. What is the resistance of this length of wire, in ohms?
      [T67 shown first: The wire in the circuit pushes back against the current, and that pushing back is its resistance. You have two readings from the meters: the push across the wire in volts and the flow through it in amps. Use the equation linking those two to find how many ohms the wire has.]
    S68 (try): 3 divided by 0.5
    T68: Next, move one clip to change the length of wire between the clips, and read the ammeter and the voltmeter again. Do this for several different lengths.
      [T68 shown first: Yes: 6 Ω. R = V ÷ I = 3 ÷ 0.5 = 6.]
    S69 (tapped "Next")
    T69: What do you think happens to the resistance when the length of wire between the clips is longer?
    [screenshot 40-exchange-69-laptop.png] exchange-69
    S70 (try, tapped the button): it gets bigger
    T70: Keep the current small and switch off between readings, so the wire does not warm up. As a wire warms, its resistance changes, which would spoil the test. That is why the wire is kept at a constant temperature: its temperature stays the same.
      [T70 shown first: Yes. A longer wire has a bigger resistance.]
    S71 (tapped "Next")
    T71: Keeping the current small matters for safety too: a hot wire can burn you. One cell's low potential difference gives no risk of an electric shock.
    S72 (tapped "Next")
    T72: Repeat each reading and work out the mean: the average of the repeats.
    [screenshot 41-exchange-72-laptop.png] exchange-72
    S73 (tapped "Next")
    T73: Then plot a graph of resistance against length. The points lie on a straight line through the origin, the point where both length and resistance are zero.
    S74 (tapped "Next")
    T74: The same circuit can also measure two resistors joined together, either one after the other in the same loop (in series) or side by side (in parallel). For each, measure the potential difference and the current, then divide.
    S75 (tapped "Next")
    T75: In one line: how does the length of a wire change its resistance?
    [screenshot 42-exchange-75-laptop.png] exchange-75
    S76 (ask): does longer mean more resistance
    T76: In the resistance-of-a-wire practical, why does one cell give no risk of an electric shock?
      [T76 shown first: Here is what a good line says. A longer wire has a bigger resistance.]
    S77 (idk): dont know
    T77: One cell gives only a small push. Which answer is about the push?
      [T77 easier step]
    S78 (try): its potencial difference is low
    T78: In some components the resistance stays the same as the current changes; in others it changes. To find out which is which, you measure the current at several potential differences and plot a graph.
    [screenshot 43-exchange-78-laptop.png] exchange-78
    [counter now "3/7 covered" after T78; AI calls from the site so far: 39, $0.0243]
      [T78 shown first: Yes. A low potential difference means no risk of an electric shock. The wire can still get hot, so keep the current small.]
    [side picture after T78: none; newest in the chat: picture "Measuring the resistance of a length of wire."]
    S79 (tapped "Next")
    T79: A graph of current against potential difference is called an I-V characteristic. Current (I) goes up the side and potential difference (V) goes along the bottom.
    S80 (tapped "Next")
    T80: Predict first: answer the question in the box below. Then a graph of a resistor opens: drag the point along the line to test your answer. Tap Next when you are done.
    [side picture after T80: none; newest in the chat: widget]
    [widget under T80: prediction "A 10 Ω resistor is kept at a constant temperature. You double the potential diff" tapped; then shown: yes, ammeters 0, controls Resistor; "Now explain it" before a control was used: no, after: no]
    [widget text under T80: PREDICT FIRST A 10 Ω resistor is kept at a constant temperature. You double the potential difference across it. What is its resistance now? Still 10 Ω 5 Ω You cannot tell 20 Ω Now test your prediction. On the graph, drag the point from 2 V to 4 V. Watch the current and the resistance reading (V ÷ I). current (A) potential difference (V) 0 Drag the point, or slide: potential difference 2.00 V Potential difference: 2.00 V Current: 0.20 A Resistance (V ÷ I): 10 Ω resistor current potential difference]
    [check] OK: predict-first widget 6 works and matches its words — opened after the prediction true; ammeters 0 (words: -); controls match true; prediction first true
    [screenshot 44-widget-80-laptop.png] widget-80
    S81 (tapped "Next")
    T81: For a resistor kept at a constant temperature, the points of an I-V characteristic lie on a straight line through the origin.
    [screenshot 45-exchange-81-laptop.png] exchange-81
    [side picture after T81: "A resistor at constant temperature: a straight line through the origin."; newest in the chat: picture "A resistor at constant temperature: a straight line through the origin."]
    S82 (tapped "Next")
    T82: When the potential difference doubles, the current doubles too. Two quantities that change together like this are directly proportional: here, the current is directly proportional to the potential difference.
    S83 (tapped "Next")
    T83: A straight line through the origin means the resistance does not change as the current changes. A component whose resistance stays the same like this, at a constant temperature, is called an ohmic conductor.
    S84 (tapped "Next")
    T84: An ohmic conductor has a current of 0.2 A through it at 3 V. What is the current through it at 6 V?
    [screenshot 46-exchange-84-laptop.png] exchange-84
    S85 (try, tapped the button): 0.4 a
    T85: For an ohmic conductor you can use V = I R with one fixed value of R, whatever the current.
      [T85 shown first: Yes: 0.4 A. The potential difference doubled, so the current doubled too.]
    S86 (tapped "Next")
    T86: In one line: what does a straight-line I-V graph through the origin tell you?
    S87 (try): resistence dont change
    T87: What is the unit of resistance?
    [screenshot 47-exchange-87-laptop.png] exchange-87
      [T87 shown first: Partly there. Still needed: the current is directly proportional to the potential difference. You have this: the resistance stays the same.]
    S88 (try, tapped the button): the ohm
    T88: Not every component gives a straight line. Some give curves, and the shape of the curve tells you what is happening inside the component.
    [counter now "4/7 covered" after T88; AI calls from the site so far: 41, $0.0247]
      [T88 shown first: Yes: resistance is measured in ohms (Ω).]
    [side picture after T88: none; newest in the chat: picture "A resistor at constant temperature: a straight line through the origin."]
    S89 (tapped "Next")
    T89: An old-style bulb is a filament lamp.
    S90 (tapped "Next")
    T90: Inside a filament lamp is a thin coil of metal wire, called the filament, that glows white-hot.
    [screenshot 48-exchange-90-laptop.png] exchange-90
    S91 (tapped "Next")
    T91: As the current through a filament lamp rises, the filament gets hotter, and its resistance increases as its temperature increases.
    S92 (tapped "Next")
    T92: A filament lamp is glowing brightly. You turn the potential difference down, so the filament cools. What happens to its resistance?
    S93 (idk): dont know
    T93: Hotter means a bigger resistance. What do you think cooler means?
    [screenshot 49-exchange-93-laptop.png] exchange-93
      [T93 easier step]
    S94 (try, tapped the button): it decreases
    T94: Back to turning the potential difference up: as the filament heats and its resistance goes up, each extra volt pushes less extra current through the lamp than the volt before. The graph bends over and gets flatter.
      [T94 shown first: Yes. A cooler filament has a smaller resistance.]
    [side picture after T94: "A filament lamp: the line gets flatter as the filament heats up."; newest in the chat: picture "A filament lamp: the line gets flatter as the filament heats up."]
    S95 (tapped "Next")
    T95: How steep a line on a graph is is called its gradient. The filament lamp's line gets flatter, so its gradient decreases.
    S96 (tapped "Next")
    T96: Try it: below is the filament lamp's graph. Drag the point from 2 V up to 6 V and watch the resistance reading (V ÷ I). Tap Next when you are done.
    [screenshot 50-exchange-96-laptop.png] exchange-96
    [side picture after T96: none; newest in the chat: widget]
    [widget under T96: prediction "" tapped; then shown: yes, ammeters 0, controls Filament lamp; "Now explain it" before a control was used: no, after: no]
    [widget text under T96: current (A) potential difference (V) 0 Drag the point, or slide: potential difference 3.00 V Potential difference: 3.00 V Current: 0.35 A Resistance (V ÷ I): 8.5 Ω filament lamp current potential difference]
    [check] OK: predict-first widget 7 works and matches its words — opened after the prediction true; ammeters 0 (words: -); controls match true; prediction first true
    [screenshot 51-widget-96-laptop.png] widget-96
    S97 (tapped "Next")
    T97: On a curved graph, the resistance is different at different points. To find the resistance at one point, read off V and I there, then divide V by I.
    S98 (tapped "Next")
    T98: Next, a diode: a component used in chargers and other electronics. In a circuit drawing, a diode is a triangle pointing at a short bar.
    S99 (tapped "Next")
    T99: Turning a component round makes the potential difference push the other way. On an I-V graph, readings taken like this go on the left of zero, as a negative potential difference.
    [screenshot 52-exchange-99-laptop.png] exchange-99
    S100 (tapped "Next")
    T100: Predict first: answer the question in the box below. Then drag the point on the diode's graph to test your answer. Tap Next when you are done.
    [widget under T100: prediction "A diode is joined into a loop with a cell and an ammeter, and a current flows. T" tapped; then shown: yes, ammeters 0, controls Diode; "Now explain it" before a control was used: no, after: no]
    [widget text under T100: PREDICT FIRST A diode is joined into a loop with a cell and an ammeter, and a current flows. Then the diode is turned round. What happens to the current? It flows the other way, just as big It stays the same It drops to almost zero Now test your prediction. On the diode graph, the point is at a negative potential difference: that is the diode turned round. Read the current. Then drag the point to the right of zero. current (A) potential difference (V) 0 Drag the point, or slide: potential difference -2.00 V Potential difference: -2.00 V Current: 0.00 A Resistance (V ÷ I): very high diode current potential difference]
    [check] OK: predict-first widget 8 works and matches its words — opened after the prediction true; ammeters 0 (words: -); controls match true; prediction first true
    [screenshot 53-widget-100-laptop.png] widget-100
    S101 (tapped "Next")
    T101: A diode lets current flow in one direction only. Turned round, almost no current flows, because the diode has a very high resistance in the reverse direction.
    S102 (tapped "Next")
    T102: On the diode's graph, the left side (turned round, the reverse direction) lies flat along the axis. On the right side (the forward direction), the current stays near zero at first, then rises steeply. The filament lamp's graph has the same shape on both sides.
    [screenshot 54-exchange-102-laptop.png] exchange-102
    [side picture after T102: "The full graphs. The left half shows the readings with the component turned round."; newest in the chat: picture "The full graphs. The left half shows the readings with the component turned round."]
    S103 (tapped "Next")
    T103: In one line: how are a filament lamp and a diode different from a resistor?
    S104 (idk): dont know
    T104: Which component lets current flow in one direction only?
      [T104 shown first: No problem. A good line would be: their I-V graphs are not straight lines.]
    S105 (idk, tapped the button): a diode
    T105: Before the practical, a quick check. Which meter goes in parallel across the component you are testing?
    [screenshot 55-exchange-105-laptop.png] exchange-105
    [counter now "5/7 covered" after T105; AI calls from the site so far: 41, $0.0247]
      [T105 shown first: Yes: a diode. Its resistance is very high in the reverse direction.]
    [side picture after T105: none; newest in the chat: picture "The full graphs. The left half shows the readings with the component turned round."]
    S106 (try, tapped the button): the voltmeter
    T106: What does a straight-line I-V graph through the origin show?
      [T106 shown first: Yes: the voltmeter goes in parallel, to measure the potential difference across the component.]
    S107 (try): the resistence stays the same
    T107: Here is how you measure an I-V characteristic in class, step by step. The circuit has a cell or a battery (two or more cells joined together) and the component you are testing. The ammeter is in series with the component, and the voltmeter is in parallel across it.
      [T107 shown first: Yes: the resistance stays the same. It is an ohmic conductor.]
    S108 (tapped "Next")
    T108: The loop also has a variable resistor: a resistor whose resistance you can change with a slider. Moving the slider changes the current, so you get a range of readings.
    [screenshot 56-exchange-108-laptop.png] exchange-108
    [side picture after T108: "The circuit for measuring an I-V graph."; newest in the chat: picture "The circuit for measuring an I-V graph."]
    S109 (tapped "Next")
    T109: Instead of a variable resistor, you can change the number of cells, or use a supply whose potential difference you can set.
    S110 (tapped "Next")
    T110: To make the current small at the start, do you set the variable resistor to its highest or its lowest resistance?
    S111 (try, tapped the button): its highest
    T111: Record the current and the potential difference, then move the slider and record both again.
    [diagram shown in the conversation under T111: "The circuit for measuring an I-V graph."]
    [screenshot 57-diagram-111-laptop.png] diagram-111
    [screenshot 58-exchange-111-laptop.png] exchange-111
      [T111 shown first: Yes: its highest resistance, so the current starts small.]
    S112 (tapped "Next")
    T112: Take readings at even steps across the range, and repeat them, as in the wire practical. Take care with a filament lamp: it gets very hot, so do not touch it.
    S113 (tapped "Next")
    T113: For the left-hand half of the graph, turn the component round and take the readings again. Those readings count as negative.
    S114 (tapped "Next")
    T114: A component whose I-V graph is a straight line is called linear.
    [screenshot 59-exchange-114-laptop.png] exchange-114
    S115 (tapped "Next")
    T115: Which of these components is linear?
    S116 (try): a resistor
    T116: A component whose graph is not a straight line is called non-linear, so the filament lamp and the diode are non-linear.
      [T116 shown first: Yes: a resistor at constant temperature gives a straight line.]
    S117 (tapped "Next")
    T117: The shape of a graph shows how a component's resistance behaves, and so what the component is useful for. A diode, for example, can stop current flowing the wrong way.
    [screenshot 60-exchange-117-laptop.png] exchange-117
    S118 (tapped "Next")
    T118: In one line: how do you take the readings for an I-V graph?
    S119 (try): measure curent and voltaje
    T119: Why do you keep the current small in the resistance-of-a-wire practical?
      [T119 shown first: Here is what a good line says. Ammeter in series, voltmeter in parallel. Change the current with a variable resistor. Turn the component round for the negative readings.]
    S120 (what): wdym
    T120: Back to the question: Why do you keep the current small in the resistance-of-a-wire practical?
    [screenshot 61-exchange-120-laptop.png] exchange-120
      [T120 shown first: In other words: what goes wrong in the wire practical if a big current flows through it. Think about what a lot of current might do to the wire itself, and why that would matter when you want its resistance to stay steady between readings.]
    S121 (ask): why does it warm up
    T121: Now, the question again: Why do you keep the current small in the resistance-of-a-wire practical?
      [T121 shown first: A wire warming up isn't explained anywhere in this lesson, so the reason it heats comes later in the course. What the lesson does say is that heat is a problem here: a hot wire changes its resistance, so the readings stop being fair, and it can also burn you.]
    S122 (try, tapped the button): so the wire does not warm up
    T122: Energy is measured in a unit called the joule, written J.
    [counter now "6/7 covered" after T122; AI calls from the site so far: 51, $0.0370]
      [T122 shown first: Yes. A small current keeps the wire at a constant temperature.]
    [side picture after T122: none; newest in the chat: picture "The circuit for measuring an I-V graph."]
    S123 (tapped "Next")
    T123: Predict first: answer the question in the box below. Then run the circuit for 10 seconds at a time to test your answer. Tap Next when you are done.
    [screenshot 62-exchange-123-laptop.png] exchange-123
    [side picture after T123: none; newest in the chat: widget]
    [widget under T123: prediction "A torch cell goes flat after a few hours. What has it run out of?" tapped; then shown: yes, ammeters 1, controls Run for 10 s, Start again; "Now explain it" before a control was used: no, after: yes]
    [widget text under T123: PREDICT FIRST A torch cell goes flat after a few hours. What has it run out of? Its store of energy Its current Its electricity Its charge Now test your prediction. Tap Run for 10 s a few times. Compare the charge that left the cell with the charge that came back. Your prediction was right. The charge that came back to the cell was the same as the charge that left it, while the energy passed to the lamp kept going up. lamp A 0.18 A resistor Run for 10 s Start again Ammeter: 0.18 A Time: 0 s Charge that left the cells: 0.00 C Charge that came back to them: 0.00 C Energy passed to the lamp: 0.00 J NOW EXPLAIN IT In one line: why do you think the cell goes flat? Check my line cell lamp resistor ammeter]
    [check] OK: predict-first widget 9 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 63-widget-123-laptop.png] widget-123
    S124 (tapped "Next")
    T124: A cell does more than push charge round a circuit: it gives energy to the charge. The charge hands that energy over in the components, lighting a lamp, warming a heater or turning a motor.
    S125 (tapped "Next")
    T125: When charge flows through a component, energy is passed from the charge to the component. Physicists call this work done.
    S126 (tapped "Next")
    T126: The amount of energy passed on is called the energy transferred, measured in joules.
    [screenshot 64-exchange-126-laptop.png] exchange-126
    S127 (tapped "Next")
    T127: The push of a potential difference is really about energy: the potential difference across a component tells you how much energy each coulomb transfers there. A potential difference of 1 volt means 1 joule is transferred for each coulomb that passes.
    S128 (tapped "Next")
    T128: A lamp has a potential difference of 12 V across it. How many joules does each coulomb of charge transfer in the lamp?
    S129 (idk): 12 joules
    T129: To find the total energy transferred, use E = Q V: energy transferred = charge flow × potential difference. E is the energy transferred in joules (J), Q is the charge flow in coulombs (C) and V is the potential difference in volts (V).
    [screenshot 65-exchange-129-laptop.png] exchange-129
      [T129 shown first: Yes: 12 J for each coulomb. 12 V means 12 joules for every coulomb.]
    S130 (tapped "Next")
    T130: Here is a worked example. Tap "Show the first step" under it to see how it is done, one step at a time.
    [side picture after T130: none; newest in the chat: worked or question card]
    [worked example under T130: buttons seen Show the first step → Next step → Next step; after the last step: Next]
    [screenshot 66-worked-130-laptop.png] worked-130
    S131 (tapped "Next")
    T131: Your turn: 100 C of charge flows through a lamp with a potential difference of 12 V across it. How much energy is transferred, in joules (J)?
    S132 (try): 1200 j
    T132: If you are given a current and a time instead of a charge, find the charge first with Q = I t. Then use E = Q V.
    [screenshot 67-exchange-132-laptop.png] exchange-132
      [T132 shown first: Yes, that's right: 1200 J.]
    S133 (tapped "Next")
    T133: Here is a worked example with both steps. Tap "Show the first step" under it to see how it is done.
    [worked example under T133: buttons seen Show the first step → Next step → Next step → Next step; after the last step: Next]
    [screenshot 68-worked-133-laptop.png] worked-133
    S134 (tapped "Next")
    T134: Your turn: A current of 2 A flows through a heater for 100 s. The potential difference across it is 12 V. How much energy is transferred, in joules (J)?
    S135 (try): 24000 j
    T135: Not quite. Check your working and have one more go: A current of 2 A flows through a heater for 100 s. The potential difference across it is 12 V. How much energy is transferred, in joules (J)?
    [screenshot 69-exchange-135-laptop.png] exchange-135
    S136 (try): 2400 j
    T136: In one line: what does a potential difference of 1 volt mean?
      [T136 shown first: Yes, that's right: 2400 J.]
    S137 (try): 1 joule per coulomb
    T137: When charge flows through a lamp, what happens to the charge and to its energy?
      [T137 shown first: Yes: your line makes every point. You have this: 1 joule of energy is transferred. You have this: for each coulomb of charge that passes.]
    S138 (try): charge goes round
    T138: To finish, a short quiz on the whole lesson: 8 questions.
    [screenshot 70-exchange-138-laptop.png] exchange-138
      [T138 shown first: Yes. The charge carries on round the circuit, and its energy is transferred to the lamp.]
    S139 (tapped "Next")
    T139: Quiz, question 1 of 8: What is electric current?
    S140 (try): how much charge passes
    T140: Quiz, question 2 of 8: Which equation links charge flow, current and time?
      [T140 shown first: Yes. Current is how much charge passes a point each second.]
    S141 (try, tapped the button): Q = I t
    T141: Quiz, question 3 of 8: What does the I-V characteristic of an ohmic conductor look like?
    [screenshot 71-exchange-141-laptop.png] exchange-141
      [T141 shown first: Yes. Q = I t: charge flow = current × time.]
    S142 (try): straight line through the origin
    T142: Quiz, question 4 of 8: Why does a filament lamp's I-V graph curve?
      [T142 shown first: Yes. A straight line through the origin: its current is directly proportional to the potential difference.]
    S143 (idk): idk
    T143: Quiz, question 5 of 8: In the I-V practical, how is the voltmeter connected?
      [T143 shown first: A filament lamp's resistance increases as it gets hotter, so the line gets flatter.]
    S144 (try, tapped the button): in parallel across the component
    T144: Quiz, question 6 of 8: At constant temperature, what happens to a wire's resistance as its length increases?
    [screenshot 72-exchange-144-laptop.png] exchange-144
      [T144 shown first: Yes. In parallel across the component, to measure the potential difference across it.]
    S145 (try, tapped the button): it increases
    T145: Quiz, question 7 of 8: A current of 1 A flows through a 8 Ω resistor. What is the potential difference across it, in volts (V)?
      [T145 shown first: Yes. A wire's resistance increases: a longer wire has a bigger resistance.]
    S146 (idk): idk
    T146: Here is how to start: Write the equation: V = I R. In this question, I = 1 A and R = 8 Ω. Now put the numbers in. What do you get?
    S147 (try): 8 v
    T147: Quiz, question 8 of 8: 50 C of charge flows through a lamp with a potential difference of 9 V across it. How much energy is transferred, in joules (J)?
    [screenshot 73-exchange-147-laptop.png] exchange-147
      [T147 shown first: Yes, that's right: 8 V.]
    S148 (try): 450 j
    T148: That's the end of the quiz: you got 7 out of 8.
      [T148 shown first: Yes, that's right: 450 J.]
    [side picture after T148: none; newest in the chat: none]
    S149 (tapped "Next")
    T149: You have finished this lesson: current, potential difference, resistance, how different components behave, and the energy that charge carries.
      [T149 shown first: Summary, point 1 of 7: A current is a flow of charge, and its size is how much charge passes a point each second.]
      [T149 shown first: Summary, point 2 of 7: A bigger potential difference pushes a bigger current, and a bigger resistance makes the current smaller.]
      [T149 shown first: Summary, point 3 of 7: A longer wire has a bigger resistance.]
      [T149 shown first: Summary, point 4 of 7: The current is directly proportional to the potential difference, so the resistance stays the same.]
      [T149 shown first: Summary, point 5 of 7: Their I-V graphs are not straight lines.]
      [T149 shown first: Summary, point 6 of 7: Ammeter in series and voltmeter in parallel; change the current with a variable resistor; turn the component round for the negative readings.]
      [T149 shown first: Summary, point 7 of 7: 1 volt means 1 joule of energy is transferred for each coulomb of charge that passes.]
    [counter now "7/7 covered" after T149; AI calls from the site so far: 60, $0.0385]
    S150 (closing): ok thx
    T150: You're welcome. Tap "Go to the slides" or "Home" when you are ready.
    [screenshot 74-exchange-150-laptop.png] exchange-150
    S151 (closing, tapped the button): home
    [S151 left the lesson: the page is no longer the AI lesson (a button such as Home or the slides)]
    [screenshot 75-end-laptop.png] end
    [tutor-side time: 1.6 minutes over 150 exchanges]
