# Site test: p2-current-voltage (lesson, 2026-11-11)

**PASS** · cost $0.8710 (19 tool calls, 151 calls from the site; tutor claude-sonnet-5-5 $0.8521)

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

- T1 [two-new-terms, F5] Electric charge, Charge flow: Inside the metal wire are tiny particles that carry electric charge, and that is what flows when the torch is on. You ca
- T1 [term-before-explained, F3] "Charge flow" used without saying what it is: "What does the bulb do when the charge flows through it?"
- T2 [term-before-explained, F3] "Switch" used without saying what it is: "What does the torch bulb do the moment you switch it on?"
- T2 [idk-harder, F7] after "idk" to "What does the bulb do when the charge flows through it?", a new question: "What does the torch bulb do the moment you switch it on?"
- T4 [two-new-terms, F5] Coulomb, Ampere: Yes, that's right. Doubling is right: twice the charge each second means twice the current. Current is measured in amper
- T25 [dangling-opener, F2] So the size of a current depends on two things.
- T25 [two-new-terms, F5] Potential difference, Component: So the size of a current depends on two things. The first is the push that drives charge through a component (any part o
- T43 [repeat-fact, F1] "An ammeter is a meter that measures current." (said before at T10: "An ammeter, the meter that measures current, goes in the loop, and it reads the same wherever you put it.")

## Transcript

    Lesson p2-current-voltage (Physics › Electricity › Current, potential difference and resistance).
    [screenshot 01-home-laptop.png] home
    [screenshot 02-subjects-laptop.png] subjects
    [screenshot 03-topics-physics-laptop.png] topics-physics
    [screenshot 04-quick-check-offer-laptop.png] quick-check-offer
    [the quick check is offered on its own screen] tapped "Not now: show the lessons"
    [screenshot 05-lessons-p2-laptop.png] lessons-P2
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Welcome, and let's get started! When you press the button on a torch and the bulb lights up straight away, what do you think is happening inside it to make that happen?
    [screenshot 06-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (ask): whats inside the wire
    T1: Inside the metal wire are tiny particles that carry electric charge, and that is what flows when the torch is on. You cannot see charge, but you can see what it does. What does the bulb do when the charge flows through it?
    [side picture after T1: none; newest in the chat: none]
    S2 (idk): idk
    T2: That's fine. Here's a hint: think of what you see when you press the button on a torch. When the charge flows through the bulb, the bulb does something you can see. What does the torch bulb do the moment you switch it on?
      [S2 read as: idk (code)]
    S3 (try): gets bright
    T3: Yes, that's right. The bulb gets bright because charge is flowing through it. A flow of charge is called an electric current, and its size is how much charge passes a point each second. If twice as much charge passed a point each second, what would happen to the size of the current?
    [screenshot 07-exchange-3-laptop.png] exchange-3
      [S3 read as: answer (model)]
    S4 (try): it would double
    T4: Yes, that's right. Doubling is right: twice the charge each second means twice the current. Current is measured in amperes (A, or amps), and one ampere means one coulomb of charge passing each second, a coulomb being the unit we count charge in.
      [S4 read as: answer (model)]
    S5 (tapped "Next")
    T5: In a circuit, a bulb is called a lamp.
      [S5 read as: button (code)]
    S6 (tapped "Next")
    T6: A complete loop of wire that charge can flow round is called a closed circuit. If there is a gap anywhere in the loop, nothing flows. What would happen to the lamp if you cut the wire somewhere in a closed circuit?
    [screenshot 08-exchange-6-laptop.png] exchange-6
      [S6 read as: button (code)]
    S7 (idk): idk
    T7: That's fine. The lamp would go out. Breaking the loop anywhere stops the flow everywhere, so no charge reaches the lamp. The answer:In a circuit, a bulb is called a lamp.
      [S7 read as: idk (code)]
    S8 (tapped "Next")
    T8: A closed circuit only gets charge flowing if it also includes something to push the charge round. That pusher is a cell, a small part that pushes charge round the loop. Without a cell in the loop, the charge just sits still, even though the wire is a complete loop.
      [S8 read as: button (code)]
      [T8 told piece: model, 50 words, key point 1]
    S9 (tapped "Next")
    T9: A switch is a part that opens a gap in the loop on purpose. When you flick a switch off, the gap stops the flow everywhere, and the lamp goes out. Flick it back on and the gap closes, so the loop is complete again.
    [screenshot 09-exchange-9-laptop.png] exchange-9
      [S9 read as: button (code)]
      [T9 told piece: model, 45 words, key point 1]
    [side picture after T9: "A closed circuit: a cell, a switch and a lamp in one loop."; newest in the chat: picture "A closed circuit: a cell, a switch and a lamp in one loop."]
    S10 (tapped "Next")
    T10: In a single loop, the current is the same at every point, because charge is not used up on the way round. The same charge keeps going round and round. An ammeter, the meter that measures current, goes in the loop, and it reads the same wherever you put it.
      [S10 read as: button (code)]
      [T10 told piece: model, 50 words, key point 1]
    [side picture after T10: "The same loop with an ammeter in it, measuring the current."; newest in the chat: picture "The same loop with an ammeter in it, measuring the current."]
    S11 (tapped "Next")
    T11: Charge flow is the total amount of charge that passes a point in the loop, and its symbol is Q. Current tells you how much charge passes each second, so the charge flow is how much has passed altogether.
      [S11 read as: button (code)]
      [T11 told piece: model, 39 words, key point 1]
    S12 (tapped "Next")
    T12: The equation is Q = I t: charge flow = current × time. Q is the charge flow in coulombs (C), I is the current in amperes (A) and t is the time in seconds (s).
    [screenshot 10-exchange-12-laptop.png] exchange-12
      [S12 read as: button (code)]
      [T12 told piece: equation, 36 words, key point 1]
    S13 (tapped "Next")
    T13: Here is a worked example. Tap "Show the first step" under it to see how it is done, one step at a time.
      [S13 read as: button (code)]
    [side picture after T13: none; newest in the chat: worked or question card]
    [worked example under T13: buttons seen Show the first step → Next step → Next step; after the last step: Show me another, Next]
    [screenshot 11-worked-13-laptop.png] worked-13
    S14 (tapped "Next")
    T14: Your turn: A current of 0.4 A flows for 2 minutes. How much charge flows, in coulombs (C)?
      [S14 read as: button (code)]
    S15 (what): wdym
    T15: I mean: the equation needs the time in seconds, and the question gives it in minutes. So you change the minutes to seconds first. There are 60 seconds in each minute.
    [diagram shown in the conversation under T15: "The same loop with an ammeter in it, measuring the current."]
    [screenshot 12-diagram-15-laptop.png] diagram-15
    [screenshot 13-exchange-15-laptop.png] exchange-15
      [S15 read as: question (model)]
    S16 (tapped "Next")
    T16: Back to the question: A current of 0.4 A flows for 2 minutes. How much charge flows, in coulombs (C)?
      [S16 read as: button (code)]
    S17 (ask): is it 48
    T17: Yes, that's right: 48 C.
      [S17 read as: answer (model)]
    S18 (tapped "Next")
    T18: Predict first: answer the question below (3 questions, one at a time). Then a working circuit with two ammeters opens: you can close the switch to check your answer. Tap Next when you are done.
    [screenshot 14-exchange-18-laptop.png] exchange-18
      [S18 read as: button (code)]
    [side picture after T18: none; newest in the chat: widget]
    [widget under T18: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Open the switch; "Now explain it" before a control was used: no, after: yes]
    [widget text under T18: PREDICT FIRST (1 OF 3) A lamp is joined to a cell by one wire only, from one end of the cell to the lamp. Does the lamp light? Yes, it lights Only if the wire is thick Yes, but only dimly No Now test your prediction. The switch below is open, so the loop has a gap. Look at the lamp and both ammeters, then close the switch. What happens: No. With the switch open, the lamp was off and both ammeters read 0 A. When you closed the switch, it lit. lamp A1 0.21 A A2 0.21 A switch Open the switch Ammeter 1: 0.21 A Ammeter 2: 0.21 A NOW EXPLAIN IT In one line: what did closing the switch change? Check my line cell switch lamp ammeter current]
    [check] OK: predict-first widget 1 works and matches its words — opened after the prediction true; ammeters 2 (words: two); controls match true; prediction first true
    [screenshot 15-widget-18-laptop.png] widget-18
    S19 (tapped "Next")
    T19: In one line, in your own words: what is an electric current?
      [S19 read as: button (code)]
    S20 (idk): idk
    T20: No problem. A good line would say: a flow of charge.
    [widget 1 in the chat, under the message "Predict first: answer the question below (3 questions, one a"]
    [check] OK: each widget appears once, under its own message — 1 widget(s)
    [predict-first widget's prediction first has text after T20: "PREDICT FIRST (1 OF 3)"]
    [screenshot 16-widget-20-laptop.png] widget-20
      [S20 read as: idk (code)]
    S21 (tapped "Next")
    T21: Quick question: You open the switch in a single loop. What happens to the current?
    [screenshot 17-exchange-21-laptop.png] exchange-21
      [S21 read as: button (code)]
    S22 (idk): idk
    T22: Not quite: it's "It stops everywhere in the loop". Break the loop anywhere and the flow stops everywhere.
      [S22 read as: idk (code)]
    S23 (tapped "Next")
    T23: Connect a lamp to one cell and it glows dimly; swap in two cells and it glows brighter, because more current flows.
      [S23 read as: button (code)]
    [counter now "1/7 covered" after T23]
    S24 (tapped "Next")
    T24: Put a resistor, a part that limits the current, into the loop with the lamp, and the lamp dims again, because less current flows. Two cells made the lamp brighter and a resistor makes it dimmer, so what you put in the loop changes the current.
    [screenshot 18-exchange-24-laptop.png] exchange-24
      [S24 read as: button (code)]
    S25 (tapped "Next")
    T25: So the size of a current depends on two things. The first is the push that drives charge through a component (any part of a circuit, such as a lamp or a resistor); that push is called the potential difference across it. Adding a second cell gave the lamp more push. What happened to the current?
      [S25 read as: button (code)]
    S26 (ask): whats potential difference
    T26: Potential difference is the push that makes charge flow through a component, like a lamp. It's measured in units called volts (V). Imagine you swapped one cell for two cells, giving the lamp a bigger push. What would happen to the lamp's brightness?
      [S26 read as: question (model)]
    S27 (what): itd be brighter
    T27: Yes, that's right. Brighter is right, because a bigger push drives more current through the lamp.
    [screenshot 19-exchange-27-laptop.png] exchange-27
      [S27 read as: answer (model)]
    S28 (tapped "Next")
    T28: Back to my question: What happened to the current?
      [S28 read as: button (code)]
    S29 (what): wdym
    T29: Sorry, that was unclear. With two cells, the lamp gets a bigger push, so more charge flows through it each second. If you used three cells instead of two, what would you expect to see from the lamp?
      [S29 read as: question (model)]
    S30 (try): even brighter
    T30: Yes, that's right. Even brighter is right, because more cells push more current round the loop.
    [screenshot 20-exchange-30-laptop.png] exchange-30
      [S30 read as: answer (model)]
    S31 (tapped "Next")
    T31: Back to my question: What happened to the current?
      [S31 read as: button (code)]
    S32 (try): it increased
    T32: Partly right. The current did increase, and that's the part I was after. What made it increase was the extra push from the added cell. That push is called potential difference, measured in volts (V), and many people call it voltage. The answer:Use two cells and it glows brighter, because more current flows.
      [S32 read as: answer (model)]
    S33 (tapped "Next")
    T33: A voltmeter is a meter that measures potential difference, and it is connected across the part you are testing, not in the loop itself.
    [screenshot 21-exchange-33-laptop.png] exchange-33
      [S33 read as: button (code)]
    [side picture after T33: "The same loop with a resistor added, and a voltmeter connected across the lamp."; newest in the chat: picture "The same loop with a resistor added, and a voltmeter connected across the lamp."]
    S34 (tapped "Next")
    T34: Exam questions say potential difference, but either that or voltage gets you the mark. Picture a lamp wired to three cells instead of one: the push driving charge through the lamp is bigger. What would you expect to happen to the lamp's brightness?
      [S34 read as: button (code)]
    S35 (try): itd be brighter
    T35: Yes, that's right. Resistance is how hard a component makes it for charge to get through. If a lamp's resistance went up while the push stayed the same, what would happen to the current?
      [S35 read as: answer (model)]
    S36 (idk): idk
    T36: That's fine. The current would get smaller, because a bigger resistance makes it harder for charge to get through.
    [screenshot 22-exchange-36-laptop.png] exchange-36
      [S36 read as: idk (code)]
    S37 (tapped "Next")
    T37: Resistance is measured in ohms (Ω). One ohm is the unit that tells you how strongly a component opposes the current: the bigger the number of ohms, the harder it is for charge to get through.
      [S37 read as: button (code)]
      [T37 told piece: model, 36 words, key point 2]
    S38 (tapped "Next")
    T38: Keep the push the same, but change the resistance. Potential difference stays fixed, and a bigger resistance means a smaller current. A component with a small resistance lets a bigger current through for that same push.
      [S38 read as: button (code)]
      [T38 told piece: model, 36 words, key point 2]
    S39 (tapped "Next")
    T39: The equation linking potential difference, current and resistance works like a set of three connected facts. If you know any two of the three, you can rearrange the equation to find the one you are missing. For example, knowing the potential difference and the resistance lets you work out the current.
    [screenshot 23-exchange-39-laptop.png] exchange-39
      [S39 read as: button (code)]
      [T39 told piece: model, 51 words, key point 2]
      [T39 shown first: The equation is V = I R: potential difference = current × resistance. V is the potential difference in volts (V), I is the current in amperes (A) and R is the resistance in ohms (Ω).]
    S40 (tapped "Next")
    T40: Here is a worked example. Tap "Show the first step" under it to see how it is done, one step at a time.
      [S40 read as: button (code)]
    [side picture after T40: none; newest in the chat: worked or question card]
    [worked example under T40: buttons seen Show the first step → Next step → Next step; after the last step: Show me another, Next]
    [screenshot 24-worked-40-laptop.png] worked-40
    S41 (tapped "Next")
    T41: Your turn: A component has a potential difference of 22.5 V across it and a current of 0.75 A through it. What is its resistance, in ohms (Ω)?
      [S41 read as: button (code)]
    S42 (try): um 30 ohms
    T42: Yes, that's right: 30 Ω.
    [screenshot 25-exchange-42-laptop.png] exchange-42
      [S42 read as: answer (model)]
    S43 (tapped "Next")
    T43: An ammeter is a meter that measures current. Predict first: answer the question below (3 questions, one at a time). Then a working circuit with an ammeter and a voltmeter opens: you can add a cell, put the resistor in or take it out or move the resistor to check your answer. Tap Next when you are done.
      [S43 read as: button (code)]
    [side picture after T43: none; newest in the chat: widget]
    [widget under T43: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Take the resistor out, Move the resistor; "Now explain it" before a control was used: no, after: yes]
    [widget text under T43: PREDICT FIRST (1 OF 3) You add a second cell. What happens to the ammeter reading and to the lamp? The lamp gets brighter, the ammeter stays the same Only the current near the new cell goes up Nothing changes Both go up Now test your prediction. Tap Add a cell and watch the ammeter and the lamp. What happens: Both go up. lamp A 0.09 A resistor V Add a cell Take a cell away Take the resistor out Move the resistor Ammeter: 0.09 A Voltmeter across the lamp: 0.56 V NOW EXPLAIN IT In one line: why does a second cell change the current? Check my line cell potential difference ammeter voltmeter lamp resistor]
    [check] OK: predict-first widget 2 works and matches its words — opened after the prediction true; ammeters 1 (words: one); controls match true; prediction first true
    [screenshot 26-widget-43-laptop.png] widget-43
    S44 (tapped "Next")
    T44: In one line: what do potential difference and resistance each do to the current?
      [S44 read as: button (code)]
    S45 (try): potential difference pushes it, resistance stops it
    T45: Your line gets the first point right: potential difference is the push that drives the current. The second needs tightening: resistance doesn't stop the current, it limits it, so a bigger resistance means a smaller current.
    [screenshot 27-exchange-45-laptop.png] exchange-45
      [S45 read as: answer (model)]
    S46 (tapped "Next")
    T46: Quick question: Where do you put an ammeter to measure the current in a single loop?
      [S46 read as: button (code)]
    S47 (idk): idk
    T47: Not quite: it's "Anywhere in the loop". In a single loop the current is the same at every point.
      [S47 read as: idk (code)]
    S48 (tapped "Next")
    T48: Before the practical, question 1 of 2: What does an ammeter measure?
    [screenshot 28-exchange-48-laptop.png] exchange-48
      [S48 read as: button (code)]
    [counter now "2/7 covered" after T48]
    [stopped: 2 key points ticked (counter "2/7 covered") after T48]
    [screenshot 29-end-laptop.png] end
    [tutor-side time: 4.8 minutes over 48 exchanges]
