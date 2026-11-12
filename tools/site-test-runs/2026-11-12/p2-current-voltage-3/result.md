# Site test: p2-current-voltage (lesson, 2026-11-12)

**FAIL** · cost $0.0764 (47 tool calls, 36 calls from the site; tutor claude-sonnet-5-5 $0.0282)

## Judge

```json
{
  "broken": [
    {
      "what": "automatic check failed: tutor replies",
      "step": "no reply after S120"
    }
  ],
  "looks_wrong": [],
  "would_quit": false,
  "fixes": []
}
```

## Transcript checks (tools/check-transcript.js)

- T10 [idk-harder, F7] after "idk" to "Which wire has the bigger current?", a new question: "Look at the two wires again: in which one does more charge pass each second?"
- T29-first [dangling-opener, F2] It means: the torch has one loop of wire going round.
- T77 [idk-harder, F7] after "idk" to "Have a go at the question: In the resistance-of-a-wire practical, why does one cell give no risk of an electric shock?", a new question: "Which answer is about the push?"
- T93 [idk-harder, F7] after "idk" to "What happens to its resistance?", a new question: "What do you think cooler means?"

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
    [widget text under T5: PREDICT FIRST The switch in this circuit is open, so there is a gap in the loop. Does the lamp light? Yes, brightly No Yes, but only dimly Now test your prediction. Look at the lamp while the switch is open. Then close the switch. No: with a gap in the loop, the lamp does not light. While the switch was open, the lamp stayed off. When you closed it, the lamp lit. lamp switch Open the switch The lamp is on NOW EXPLAIN IT In one line: why do you think closing the switch made the lamp light? Check my line cell switch lamp]
    [check] OK: predict-first widget 1 works and matches its words — opened after the prediction true; ammeters 0 (words: -); controls match true; prediction first true
    [screenshot 08-widget-5-laptop.png] widget-5
    S6 (tapped "Next")
    T6: A complete loop, out of the cell, through the lamp and back to the cell, is called a closed circuit.
    [screenshot 09-exchange-6-laptop.png] exchange-6
    [side picture after T6: "A closed circuit: a cell, a switch and a lamp in one loop."; newest in the chat: picture "A closed circuit: a cell, a switch and a lamp in one loop."]
    S7 (tapped "Next")
    T7: In a torch, the wire to the lamp comes loose at one end. What happens to the movement of charge?
    S8 (ask): stops everywhere right
    T8: A flow of charge is called an electric current. The size of a current is how much charge passes a point in the wire each second.
    [diagram shown in the conversation under T8: "A closed circuit: a cell, a switch and a lamp in one loop."]
    [screenshot 10-diagram-8-laptop.png] diagram-8
    [widget 1 in the chat, under the message "The circuit below has a switch, a part that can open a gap i"]
    [check] OK: each widget appears once, under its own message — 1 widget(s)
    [predict-first widget's prediction first has text after T8: "PREDICT FIRST"]
    [screenshot 11-widget-8-laptop.png] widget-8
      [T8 shown first: Yes. A gap anywhere breaks the loop, and the charge stops moving everywhere at once, not just near the gap.]
    S9 (tapped "Next")
    T9: In one second, 2 units of charge pass a point in wire A, and 5 units pass a point in wire B. Which wire has the bigger current?
    [screenshot 12-exchange-9-laptop.png] exchange-9
    S10 (idk): idk
    T10: Current is about how much charge passes each second. Look at the two wires again: in which one does more charge pass each second?
    S11 (try, tapped the button): wire b
    T11: Charge is counted in a unit called the coulomb, written C.
      [T11 shown first: Yes. More charge passes each second in wire B, so wire B has the bigger current.]
    S12 (tapped "Next")
    T12: Current is measured in a unit called the ampere, written A, or amp for short. One ampere means one coulomb of charge passing a point each second.
    [screenshot 13-exchange-12-laptop.png] exchange-12
    S13 (tapped "Next")
    T13: A wire carries 3 coulombs of charge past a point every second. What is the current, in amperes?
    S14 (try): 3 amps
    T14: Current is measured with an ammeter, a meter that shows the current in amperes.
      [T14 shown first: Yes: 3 A. One coulomb each second is one ampere, so 3 coulombs each second is 3 amperes.]
    S15 (tapped "Next")
    T15: An ammeter is joined into the loop itself, so the charge moves through it.
    [screenshot 14-exchange-15-laptop.png] exchange-15
    [side picture after T15: "The same loop with an ammeter in it, measuring the current."; newest in the chat: picture "The same loop with an ammeter in it, measuring the current."]
    S16 (tapped "Next")
    T16: Predict first: answer the question in the box below. Then a circuit opens so you can check your answer. Tap Next when you are done.
    [side picture after T16: none; newest in the chat: widget]
    [widget under T16: prediction "The circuit has two ammeters in the same loop, one on each side of the lamp. How" tapped; then shown: yes, ammeters 2, controls Close the switch; "Now explain it" before a control was used: no, after: yes]
    [widget text under T16: PREDICT FIRST The circuit has two ammeters in the same loop, one on each side of the lamp. How do their readings compare? One reads less, as the lamp uses some up Both read the same The one nearer the cell reads more Now test your prediction. Read both ammeters. Then open the switch and read them again. Both read the same. With the switch closed, both ammeters showed the same reading. With it open, both showed 0 A. lamp A1 0.00 A A2 0.00 A switch Close the switch Ammeter 1: 0.00 A Ammeter 2: 0.00 A NOW EXPLAIN IT In one line: why do you think both ammeters read the same? Check my line cell switch lamp ammeter current]
    [check] OK: predict-first widget 2 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 15-widget-16-laptop.png] widget-16
    S17 (tapped "Next")
    T17: In a single loop, a circuit with only one path round, the current is the same at every point, because charge is not used up on the way round.
    S18 (tapped "Next")
    T18: The total amount of charge that passes a point is called the charge flow. Its symbol is Q, and it is measured in coulombs. It depends on two things: the current, and how long the current lasts.
    [screenshot 16-exchange-18-laptop.png] exchange-18
    S19 (tapped "Next")
    T19: The equation for charge flow is Q = I t: charge flow = current × time. Q is the charge flow in coulombs (C), I is the current in amperes (A) and t is the time in seconds (s). Writing I t means I multiplied by t.
    S20 (tapped "Next")
    T20: Here is a worked example. Tap "Show the first step" under it to see how it is done, one step at a time.
    [side picture after T20: none; newest in the chat: worked or question card]
    [worked example under T20: buttons seen Show the first step → Next step → Next step; after the last step: Next]
    [screenshot 17-worked-20-laptop.png] worked-20
    S21 (tapped "Next")
    T21: Your turn: A current of 2 A flows for 10 s. How much charge flows, in coulombs (C)?
    [screenshot 18-exchange-21-laptop.png] exchange-21
    S22 (idk): idk
    T22: That's fine. Here is how to start: Write the equation: Q = I t. In this question, I = 2 A and t = 10 s. Now put the numbers in. What do you get?
    [diagram shown in the conversation under T22: "The same loop with an ammeter in it, measuring the current."]
    [screenshot 19-diagram-22-laptop.png] diagram-22
    [widget 2 in the chat, under the message "Predict first: answer the question in the box below. Then a "]
    [check] OK: each widget appears once, under its own message — 2 widget(s)
    S23 (what): wdym
    T23: Now, the question again: A current of 2 A flows for 10 s. How much charge flows, in coulombs (C)?
      [T23 shown first: The question is asking how much charge moves through the wire in total. The current tells you how much charge passes each second, and the wire carries that current for 10 seconds, so you want the total amount that went past in that time.]
    S24 (ask): whats the equation again
    T24: Have a go at the question: A current of 2 A flows for 10 s. How much charge flows, in coulombs (C)?
    [screenshot 20-exchange-24-laptop.png] exchange-24
      [T24 shown first: Charge flow equals current multiplied by time. So Q = I × t, where Q is the charge in coulombs, I is the current in amps, and t is the time in seconds.]
    S25 (idk): idk
    T25: In one line, in your own words: what is an electric current?
      [T25 shown first: Here is how it goes. Write the equation: Q = I t. Put the numbers in: Q = 2 × 10 = 20. The charge flow is 20 C.]
    S26 (idk): idk
    T26: A torch is switched on. Where in its single loop is the current biggest?
      [T26 shown first: No problem. A good line would be: a current is a flow of charge, and its size is how much charge passes a point each second.]
    S27 (ask): whats a single loop
    T27: Back to the question: A torch is switched on. Where in its single loop is the current biggest?
    [screenshot 21-exchange-27-laptop.png] exchange-27
      [T27 shown first: A single loop is a circuit where the wire makes just one complete ring, so the charge has only one path to follow all the way round. A torch is like this: cell, switch, lamp and wire joined end to end in one circle.]
    S28 (what): wdym
    T28: Now, the question again: A torch is switched on. Where in its single loop is the current biggest?
      [T28 shown first: I'm asking you to picture a torch with its wire loop going round from the battery, through the bulb and back.]
    S29 (what): wdym
    T29: Have a go at the question: A torch is switched on. Where in its single loop is the current biggest?
      [T29 shown first: It means: the torch has one loop of wire going round.]
    S30 (try): same everywhere
    T30: Next: what decides how big a current is. Connect a lamp to one cell and it glows dimly. The brighter a lamp glows, the bigger the current through it.
    [screenshot 22-exchange-30-laptop.png] exchange-30
    [counter now "1/7 covered" after T30; AI calls from the site so far: 15, $0.0112]
      [T30 shown first: Yes. In a single loop the current is the same at every point: no part of the loop has more.]
    S31 (tapped "Next")
    T31: Predict first: answer the question in the box below. Then add a cell to test your answer. Tap Next when you are done.
    [side picture after T31: none; newest in the chat: widget]
    [widget under T31: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away; "Now explain it" before a control was used: no, after: yes]
    [widget text under T31: PREDICT FIRST You add a second cell. What happens to the ammeter reading and to the lamp? The lamp gets brighter; the reading stays the same Only the current near the new cell goes up Nothing changes The reading rises and the lamp gets brighter Now test your prediction. Tap Add a cell and watch the ammeter and the lamp. The ammeter reading rises and the lamp gets brighter. With two cells, the ammeter reading went up and the lamp got brighter. lamp A 0.21 A Add a cell Take a cell away Ammeter: 0.21 A NOW EXPLAIN IT In one line: why do you think a second cell changed the current? Check my line cell lamp ammeter]
    [check] OK: predict-first widget 3 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 23-widget-31-laptop.png] widget-31
    S32 (tapped "Next")
    T32: Any part of a circuit, such as a lamp, is called a component.
    S33 (tapped "Next")
    T33: The push that drives charge through a component, from one end of it to the other, is called the potential difference across it. Two cells give a bigger potential difference than one, and a bigger push drives a bigger current.
    [screenshot 24-exchange-33-laptop.png] exchange-33
    S34 (tapped "Next")
    T34: Potential difference is measured in a unit called the volt, written V. Cells joined one after the other add their potential differences together.
    S35 (tapped "Next")
    T35: A single torch cell has 1.5 V across it. What potential difference do two of these cells give, in volts?
    S36 (try): 3 v
    T36: A voltmeter is the meter that measures potential difference. A voltmeter is joined across a component, with one of its wires at each end of the component, not into the loop.
    [screenshot 25-exchange-36-laptop.png] exchange-36
      [T36 shown first: Yes: 3 V. Two cells give twice the push of one.]
    S37 (tapped "Next")
    T37: Try it: in the circuit below, a voltmeter is joined across the lamp, with one wire at each end of it. Add a cell and watch the voltmeter. Tap Next when you are done.
    [widget under T37: prediction "" tapped; then shown: yes, ammeters 1, controls Add a cell; "Now explain it" before a control was used: no, after: no]
    [widget text under T37: lamp A 0.35 A V Add a cell Ammeter: 0.35 A Voltmeter across the lamp: 3.00 V cell lamp ammeter voltmeter]
    [check] OK: predict-first widget 4 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 26-widget-37-laptop.png] widget-37
    S38 (tapped "Next")
    T38: Another name for potential difference is voltage.
    S39 (tapped "Next")
    T39: You want to find out how hard the charge is being pushed through a lamp. Which meter do you use?
    [screenshot 27-exchange-39-laptop.png] exchange-39
    S40 (try, tapped the button): a voltmeter
    T40: Next, a new component: a resistor, a small part that charge has to pass through, which changes how much current flows.
      [T40 shown first: Yes. How hard the charge is pushed is the potential difference, and that is what a voltmeter measures.]
    S41 (tapped "Next")
    T41: Predict first: answer the question in the box below. Then put the resistor into the loop to test your answer. Tap Next when you are done.
    [widget under T41: prediction "You put a resistor into the loop. What happens to the current and to the lamp?" tapped; then shown: yes, ammeters 1, controls Take the resistor out; "Now explain it" before a control was used: no, after: yes]
    [widget text under T41: PREDICT FIRST You put a resistor into the loop. What happens to the current and to the lamp? The current stays the same Only the current after the resistor goes down The current goes up and the lamp gets brighter The current goes down and the lamp dims Now test your prediction. Put the resistor into the loop and watch the ammeter and the lamp. The current goes down and the lamp gets dimmer. With the resistor in, the ammeter reading went down and the lamp got dimmer. lamp A 0.18 A resistor Take the resistor out Ammeter: 0.18 A NOW EXPLAIN IT In one line: why do you think the lamp got dimmer? Check my line cell lamp ammeter resistor]
    [check] OK: predict-first widget 5 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 28-widget-41-laptop.png] widget-41
    S42 (tapped "Next")
    T42: A resistor limits the current: it makes it harder for charge to get through. How hard a component makes it for charge to get through is called its resistance.
    [screenshot 29-exchange-42-laptop.png] exchange-42
    S43 (tapped "Next")
    T43: Resistance is measured in a unit called the ohm, written Ω.
    S44 (tapped "Next")
    T44: The picture below puts it all together: a loop with a resistor in it, an ammeter in the loop, and a voltmeter joined across the lamp.
    [side picture after T44: "The same loop with a resistor added, and a voltmeter connected across the lamp."; newest in the chat: picture "The same loop with a resistor added, and a voltmeter connected across the lamp."]
    S45 (tapped "Next")
    T45: Components X and Y each have 6 V across them. X has a bigger resistance than Y. Which one has the bigger current?
    [screenshot 30-exchange-45-laptop.png] exchange-45
    S46 (idk): idk
    T46: The bigger current goes through the component that lets charge through more easily. Which one has the bigger current?
    [widget 3 in the chat, under the message "Predict first: answer the question in the box below. Then pu"]
    [check] OK: each widget appears once, under its own message — 3 widget(s)
    S47 (try, tapped the button): y
    T47: The current depends on two things: a bigger potential difference gives a bigger current, and a bigger resistance gives a smaller current.
      [T47 shown first: Yes: Y. For the same potential difference, the bigger the resistance, the smaller the current.]
    S48 (tapped "Next")
    T48: Potential difference, current and resistance are linked by one equation: V = I R, potential difference = current × resistance. V is the potential difference in volts (V), I is the current in amperes (A) and R is the resistance in ohms (Ω). In the equation, the letter V means the potential difference, not the unit.
    [screenshot 31-exchange-48-laptop.png] exchange-48
    S49 (tapped "Next")
    T49: Here is a worked example. Tap "Show the first step" under it to see how it is done, one step at a time.
    [side picture after T49: none; newest in the chat: worked or question card]
    [worked example under T49: buttons seen Show the first step → Next step → Next step; after the last step: Next]
    [screenshot 32-worked-49-laptop.png] worked-49
    S50 (tapped "Next")
    T50: Your turn: A current of 3 A flows through a 4 Ω resistor. What is the potential difference across it, in volts (V)?
    S51 (try): 12 v
    T51: Sometimes you need to find the resistance instead. Here is a worked example of that. Tap "Show the first step" under it to see how it is done, one step at a time.
    [screenshot 33-exchange-51-laptop.png] exchange-51
      [T51 shown first: Yes, that's right: 12 V.]
    [worked example under T51: buttons seen Show the first step → Next step → Next step → Next step; after the last step: Next]
    [screenshot 34-worked-51-laptop.png] worked-51
    S52 (tapped "Next")
    T52: Your turn: A component has a potential difference of 18 V across it and a current of 3 A through it. What is its resistance, in ohms (Ω)?
    S53 (idk): idk
    T53: That's fine. Here is how to start: Start from V = I R. You want R, so divide both sides by I: R = V ÷ I. In this question, V = 18 V and I = 3 A. Now put the numbers in. What do you get?
    S54 (try): 18 divided 3
    T54: In the same way, to find a current, divide both sides of V = I R by R: I = V ÷ R, current = potential difference ÷ resistance.
    [screenshot 35-exchange-54-laptop.png] exchange-54
      [T54 shown first: Yes, that's the right working: it comes to 6 Ω.]
    S55 (tapped "Next")
    T55: Your turn: A potential difference of 24 V is put across a 12 Ω resistor. What is the current through it, in amperes (A)?
    S56 (try): 24 divided 12
    T56: In one line: what do potential difference and resistance each do to the current?
      [T56 shown first: Yes, that's the right working: it comes to 2 A.]
    S57 (try): pd makes it bigger, resistence makes it smaller
    T57: Where do you put an ammeter to measure the current in a single loop?
    [screenshot 36-exchange-57-laptop.png] exchange-57
      [T57 shown first: Yes, your line has it: a bigger potential difference (push) gives a bigger current, and a bigger resistance gives a smaller current.]
    S58 (idk): idk
    T58: Think about whether the current in a single loop is different in different places. Where can you put the ammeter to measure the current?
    S59 (try, tapped the button): anywhere in the loop
    T59: Wire is used in heaters, chargers and the coils inside motors, so engineers need to know how the length of a wire changes its resistance. This is a practical you will do in class; here is how it works.
    [counter now "2/7 covered" after T59; AI calls from the site so far: 19, $0.0117]
      [T59 shown first: Yes. In a single loop the current is the same at every point, so the ammeter can go anywhere in the loop.]
    S60 (tapped "Next")
    T60: Before the practical, a quick check. What does an ammeter measure?
    [screenshot 37-exchange-60-laptop.png] exchange-60
    S61 (idk, tapped the button): the current
    T61: How do you work out a resistance from the potential difference V and the current I?
      [T61 shown first: Yes: an ammeter measures the current through a component.]
    S62 (try, tapped the button): divide the potential difference by the current
    T62: A long wire is clipped along a metre ruler and joined to a cell. The ammeter is joined in series with the wire: one after another in the same loop, so the same current flows through both.
      [T62 shown first: Yes: resistance = potential difference ÷ current, R = V ÷ I.]
    S63 (tapped "Next")
    T63: The voltmeter is joined in parallel with the wire, side by side across the same two points: its two clips go at each end of the length you are testing. The voltmeter measures the potential difference across that length.
    [screenshot 38-exchange-63-laptop.png] exchange-63
    [side picture after T63: "Measuring the resistance of a length of wire."; newest in the chat: picture "Measuring the resistance of a length of wire."]
    S64 (tapped "Next")
    T64: The voltmeter reads 3 V and the ammeter reads 0.5 A. What is the resistance of this length of wire, in ohms?
    S65 (what): wdym
    T65: Back to the question: The voltmeter reads 3 V and the ammeter reads 0.5 A. What is the resistance of this length of wire, in ohms?
      [T65 shown first: I'm asking you to work out how hard this piece of wire makes it for charge to flow through. You've been given the push (the potential difference, in volts) and the flow (the current, in amps), and the lesson says you can use those two numbers to find the resistance.]
    S66 (try): 3 divided 0.5
    T66: Next, move one clip to change the length of wire between the clips, and read the ammeter and the voltmeter again. Do this for several different lengths.
    [screenshot 39-exchange-66-laptop.png] exchange-66
      [T66 shown first: Yes: 6 Ω. R = V ÷ I = 3 ÷ 0.5 = 6.]
    S67 (tapped "Next")
    T67: What do you think happens to the resistance when the length of wire between the clips is longer?
    S68 (what): wdym
    T68: Now, the question again: What do you think happens to the resistance when the length of wire between the clips is longer?
      [T68 shown first: I'm asking about the wire stretched between the two clips.]
    S69 (try, tapped the button): it gets bigger
    T69: Keep the current small and switch off between readings, so the wire does not warm up. As a wire warms, its resistance changes, which would spoil the test. That is why the wire is kept at a constant temperature: its temperature stays the same.
    [screenshot 40-exchange-69-laptop.png] exchange-69
      [T69 shown first: Yes. A longer wire has a bigger resistance.]
    S70 (tapped "Next")
    T70: Keeping the current small matters for safety too: a hot wire can burn you. One cell's low potential difference gives no risk of an electric shock.
    S71 (tapped "Next")
    T71: Repeat each reading and work out the mean: the average of the repeats.
    S72 (tapped "Next")
    T72: Then plot a graph of resistance against length. The points lie on a straight line through the origin, the point where both length and resistance are zero.
    [screenshot 41-exchange-72-laptop.png] exchange-72
    S73 (tapped "Next")
    T73: The same circuit can also measure two resistors joined together, either one after the other in the same loop (in series) or side by side (in parallel). For each, measure the potential difference and the current, then divide.
    S74 (tapped "Next")
    T74: In one line: how does the length of a wire change its resistance?
    S75 (try): longer length bigger resistence
    T75: In the resistance-of-a-wire practical, why does one cell give no risk of an electric shock?
    [screenshot 42-exchange-75-laptop.png] exchange-75
      [T75 shown first: Yes, your line has it: a longer wire has a bigger resistance.]
    S76 (ask): what does low pd mean
    T76: Have a go at the question: In the resistance-of-a-wire practical, why does one cell give no risk of an electric shock?
      [T76 shown first: Potential difference is the push that drives charge round a circuit, measured in volts. A "low" one means that push is small, so it doesn't drive much charge through anything it's connected to.]
    S77 (idk): idk
    T77: One cell gives only a small push. Which answer is about the push?
    S78 (try): its potencial difference is low
    T78: In some components the resistance stays the same as the current changes; in others it changes. To find out which is which, you measure the current at several potential differences and plot a graph.
    [screenshot 43-exchange-78-laptop.png] exchange-78
    [counter now "3/7 covered" after T78; AI calls from the site so far: 30, $0.0228]
      [T78 shown first: Yes. A low potential difference means no risk of an electric shock. The wire can still get hot, so keep the current small.]
    [side picture after T78: none; newest in the chat: picture "Measuring the resistance of a length of wire."]
    S79 (tapped "Next")
    T79: A graph of current against potential difference is called an I-V characteristic. Current (I) goes up the side and potential difference (V) goes along the bottom.
    S80 (tapped "Next")
    T80: Predict first: answer the question in the box below. Then a graph of a resistor opens: drag the point along the line to test your answer. Tap Next when you are done.
    [side picture after T80: none; newest in the chat: widget]
    [widget under T80: prediction "A 10 Ω resistor is kept at a constant temperature. You double the potential diff" tapped; then shown: yes, ammeters 0, controls Resistor; "Now explain it" before a control was used: no, after: no]
    [widget text under T80: PREDICT FIRST A 10 Ω resistor is kept at a constant temperature. You double the potential difference across it. What is its resistance now? 20 Ω 5 Ω You cannot tell Still 10 Ω Now test your prediction. On the graph, drag the point from 2 V to 4 V. Watch the current and the resistance reading (V ÷ I). current (A) potential difference (V) 0 Drag the point, or slide: potential difference 2.00 V Potential difference: 2.00 V Current: 0.20 A Resistance (V ÷ I): 10 Ω resistor current potential difference]
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
    S87 (try): resistence doesnt change
    T87: What is the unit of resistance?
    [screenshot 47-exchange-87-laptop.png] exchange-87
      [T87 shown first: Your line gets this right: the resistance stays the same. A full line also says: the current is directly proportional to the potential difference.]
    S88 (try, tapped the button): the ohm
    T88: Not every component gives a straight line. Some give curves, and the shape of the curve tells you what is happening inside the component.
    [counter now "4/7 covered" after T88; AI calls from the site so far: 32, $0.0231]
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
    S93 (idk): idk
    T93: Hotter means a bigger resistance. What do you think cooler means?
    [screenshot 49-exchange-93-laptop.png] exchange-93
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
    [widget text under T100: PREDICT FIRST A diode is joined into a loop with a cell and an ammeter, and a current flows. Then the diode is turned round. What happens to the current? It flows the other way, just as big It drops to almost zero It stays the same Now test your prediction. On the diode graph, the point is at a negative potential difference: that is the diode turned round. Read the current. Then drag the point to the right of zero. current (A) potential difference (V) 0 Drag the point, or slide: potential difference -2.00 V Potential difference: -2.00 V Current: 0.00 A Resistance (V ÷ I): very high diode current potential difference]
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
    S104 (idk): idk
    T104: Which component lets current flow in one direction only?
      [T104 shown first: No problem. A good line would be: their I-V graphs are not straight lines.]
    S105 (idk): idk
    T105: Think of the graph that lay flat along the axis on one side. Which component was that?
    [screenshot 55-exchange-105-laptop.png] exchange-105
    S106 (try, tapped the button): a diode
    T106: Before the practical, a quick check. Which meter goes in parallel across the component you are testing?
    [counter now "5/7 covered" after T106; AI calls from the site so far: 32, $0.0231]
      [T106 shown first: Yes: a diode. Its resistance is very high in the reverse direction.]
    [side picture after T106: none; newest in the chat: picture "The full graphs. The left half shows the readings with the component turned round."]
    S107 (try, tapped the button): the voltmeter
    T107: What does a straight-line I-V graph through the origin show?
      [T107 shown first: Yes: the voltmeter goes in parallel, to measure the potential difference across the component.]
    S108 (try): the resistence stays the same
    T108: Here is how you measure an I-V characteristic in class, step by step. The circuit has a cell or a battery (two or more cells joined together) and the component you are testing. The ammeter is in series with the component, and the voltmeter is in parallel across it.
    [screenshot 56-exchange-108-laptop.png] exchange-108
      [T108 shown first: Yes: the resistance stays the same. It is an ohmic conductor.]
    S109 (tapped "Next")
    T109: The loop also has a variable resistor: a resistor whose resistance you can change with a slider. Moving the slider changes the current, so you get a range of readings.
    [side picture after T109: "The circuit for measuring an I-V graph."; newest in the chat: picture "The circuit for measuring an I-V graph."]
    S110 (tapped "Next")
    T110: Instead of a variable resistor, you can change the number of cells, or use a supply whose potential difference you can set.
    S111 (tapped "Next")
    T111: To make the current small at the start, do you set the variable resistor to its highest or its lowest resistance?
    [screenshot 57-exchange-111-laptop.png] exchange-111
    S112 (try, tapped the button): its highest
    T112: Record the current and the potential difference, then move the slider and record both again.
      [T112 shown first: Yes: its highest resistance, so the current starts small.]
    S113 (tapped "Next")
    T113: Take readings at even steps across the range, and repeat them, as in the wire practical. Take care with a filament lamp: it gets very hot, so do not touch it.
    S114 (tapped "Next")
    T114: For the left-hand half of the graph, turn the component round and take the readings again. Those readings count as negative.
    [screenshot 58-exchange-114-laptop.png] exchange-114
    S115 (tapped "Next")
    T115: A component whose I-V graph is a straight line is called linear.
    S116 (tapped "Next")
    T116: Which of these components is linear?
    S117 (try, tapped the button): a resistor at constant temperature
    T117: A component whose graph is not a straight line is called non-linear, so the filament lamp and the diode are non-linear.
    [screenshot 59-exchange-117-laptop.png] exchange-117
      [T117 shown first: Yes: a resistor at constant temperature gives a straight line.]
    S118 (tapped "Next")
    T118: The shape of a graph shows how a component's resistance behaves, and so what the component is useful for. A diode, for example, can stop current flowing the wrong way.
    S119 (tapped "Next")
    T119: In one line: how do you take the readings for an I-V graph?
    S120 (what): wdym
    [no tutor reply within 120 s after S120]
    [check] BROKEN: tutor replies — no reply after S120
    [screenshot 60-end-laptop.png] end
    [tutor-side time: 1.1 minutes over 119 exchanges]
