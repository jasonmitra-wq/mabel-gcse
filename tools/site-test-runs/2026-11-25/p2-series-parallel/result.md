# Site test: p2-series-parallel (lesson, 2026-11-25)

**PASS** · cost $0.0666 (45 tool calls, 33 calls from the site; tutor claude-sonnet-5-5 $0.0187)

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

    Lesson p2-series-parallel (Physics › Electricity › Series and parallel circuits).
    [screenshot 01-home-laptop.png] home
    [screenshot 02-subjects-laptop.png] subjects
    [screenshot 03-topics-physics-laptop.png] topics-physics
    [screenshot 04-quick-check-offer-laptop.png] quick-check-offer
    [the quick check is offered on its own screen] tapped "Not now: show the lessons"
    [screenshot 05-lessons-p2-laptop.png] lessons-P2
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Welcome! In this lesson you will learn the two ways of joining the parts of a circuit, and what each way does to the current, the potential difference and the resistance.
    [screenshot 06-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (tapped "Next")
    T1: First, three quick questions from the last lesson. What is electric current?
    [side picture after T1: none; newest in the chat: none]
    S2 (try, tapped the button): the rate of flow of charge
    T2: Second: what is potential difference?
      [T2 shown first: Yes: current is the rate of flow of charge, measured in amperes (A).]
    S3 (try, tapped the button): the push that drives charge round a circuit
    T3: Third: V = I R links the potential difference V, in volts, the current I, in amperes, and the resistance R, in ohms (Ω). A resistor has 2 A through it and a resistance of 3 Ω. What is the potential difference across it, in volts?
    [screenshot 07-exchange-3-laptop.png] exchange-3
      [T3 shown first: Yes: potential difference is the push that drives charge round a circuit, measured in volts (V).]
    S4 (try): 6 volts
    T4: Now, this lesson. Picture a cell and two resistors joined one after another in a single loop, with no places where the wire splits. A circuit like that is called a series circuit.
      [T4 shown first: Yes: 6 V. V = I R = 2 × 3 = 6 V. You will use V = I R a lot today.]
    S5 (tapped "Next")
    T5: Look at the picture: a series circuit. Charge has only one path. Every bit of charge that leaves the supply, the cell or battery, goes through the first resistor, then through the second, then back to the supply.
    [side picture after T5: "A series circuit: a 12 V supply and two resistors in one loop, with the current and the potential differences marked."; newest in the chat: picture "A series circuit: a 12 V supply and two resistors in one loop, with the current and the potential differences marked."]
    S6 (tapped "Next")
    T6: Predict: two lamps are joined in series with a cell. The current through the first lamp is 0.3 A. What is the current through the second lamp?
    [screenshot 08-exchange-6-laptop.png] exchange-6
    S7 (try, tapped the button): 0.3 a, the same
    T7: Rule one, then: in a series circuit, the current is the same at every point. In the picture, with a 12 V supply, the current is 2 A before the first resistor, between the two, and after the second.
    [diagram shown in the conversation under T7: "A series circuit: a 12 V supply and two resistors in one loop, with the current and the potential differences marked."]
    [screenshot 09-diagram-7-laptop.png] diagram-7
      [T7 shown first: Yes: 0.3 A. There is only one path, so all the charge that goes through the first lamp goes through the second.]
    S8 (tapped "Next")
    T8: Rule two is about potential difference. The supply gives a total push, and in a series circuit that total is shared between the components, the parts of the circuit. In the picture, the supply gives 12 V: one resistor has 8 V across it and the other has 4 V.
    S9 (tapped "Next")
    T9: A 9 V battery is joined in series with two lamps. The potential difference across one lamp is 6 V. What is the potential difference across the other lamp, in volts?
    [screenshot 10-exchange-9-laptop.png] exchange-9
    S10 (try): 3 v
    T10: Now, which part gets the bigger share. The current is the same through both, and V = I R, so the part with the bigger resistance has the bigger potential difference across it.
      [T10 shown first: Yes: 3 V. The shares add up to the supply: 6 V + 3 V = 9 V.]
    S11 (tapped "Next")
    T11: A 6 V cell is joined in series with two resistors of 10 Ω each. What is the potential difference across each one?
    S12 (try, tapped the button): 3 v each
    T12: Now a 6 V cell is in series with a 10 Ω and a 20 Ω resistor. Which resistor has the bigger share of the potential difference?
    [screenshot 11-exchange-12-laptop.png] exchange-12
      [T12 shown first: Yes: 3 V each. Neither resistance is bigger, so the 6 V is shared equally.]
    S13 (ask, tapped the button): the 20 Ω resistor
    T13: Rule three is about resistance. In series, the charge passes through each resistor in turn, so each one adds to how hard it is to get round. The total resistance is the sum: R total = R1 + R2, where R1 and R2 are the two resistances, all in ohms (Ω).
      [T13 shown first: Yes: the 20 Ω resistor. Same current, bigger resistance, so by V = I R a bigger potential difference: 4 V, against 2 V for the 10 Ω one.]
    S14 (tapped "Next")
    T14: A 4 Ω resistor and a 6 Ω resistor are joined in series. What is their total resistance, in ohms?
    S15 (what): what?
    T15: Now, the question again: A 4 Ω resistor and a 6 Ω resistor are joined in series. What is their total resistance, in ohms?
    [screenshot 12-exchange-15-laptop.png] exchange-15
      [T15 shown first: In other words: to find how much the two resistors oppose the current when they are joined one after the other in a single loop. You are working out the one resistance that would replace both of them together, and the answer is a number of ohms.]
    S16 (idk): idk
    T16: In series, the total resistance is the sum: add the two resistances.
      [T16 easier step]
    S17 (try): 10 ohms
    T17: The circuit below has a cell and a lamp, and a resistor you can put into the loop. Predict first: answer the question in the box. Then put the resistor in to test your answer. Tap Next when you are done.
    [widget 1 in the chat, under the message "The circuit below has a cell and a lamp, and a resistor you "]
    [check] OK: each widget appears once, under its own message — 1 widget(s)
    [predict-first widget's prediction first has text after T17: "PREDICT FIRST"]
    [screenshot 13-widget-17-laptop.png] widget-17
      [T17 shown first: Yes: 10 Ω. In series, R total = 4 + 6 = 10 Ω.]
    [side picture after T17: none; newest in the chat: widget]
    [widget under T17: prediction "You put a resistor into this loop, in series with the lamp. Which is true?" tapped; then shown: yes, ammeters 0, controls Take the resistor out; "Now explain it" before a control was used: no, after: yes]
    [widget text under T17: PREDICT FIRST You put a resistor into this loop, in series with the lamp. Which is true? The lamp gets brighter The lamp gets dimmer The lamp stays the same Now test your prediction. Put the resistor in and watch the lamp. Then take it out again. The lamp gets dimmer. With the resistor in, the lamp was dimmer than without it. lamp resistor Take the resistor out The lamp is on NOW EXPLAIN IT In one line: why do you think the lamp got dimmer? Check my line cell lamp resistor]
    [check] OK: predict-first widget 1 works and matches its words — opened after the prediction true; ammeters 0 (words: -); controls match true; prediction first true
    [screenshot 14-widget-17-laptop.png] widget-17
    S18 (tapped "Next")
    T18: A cell does not give a fixed current. The current depends on everything in the loop: the more resistance there is in series, the smaller the current.
    [screenshot 15-exchange-18-laptop.png] exchange-18
    S19 (tapped "Next")
    T19: In one line: what are the three series rules, for the current, the potential difference and the resistance?
    S20 (try): curent same, voltage splits, resistence adds
    T20: Now the other way of joining components. Picture a cell with two lamps, each on its own branch: a separate path for the charge. A circuit like that is called a parallel circuit.
    [counter now "1/5 covered" after T20; AI calls from the site so far: 6, $0.0027]
      [T20 shown first: Yes: your line makes every point. You have this: the current is the same everywhere. You have this: the supply potential difference is shared between the components. You have this: the total resistance is the sum of the resistances.]
    S21 (tapped "Next")
    T21: Look at the picture: a parallel circuit. The charge splits where the branches start: some goes through branch 1 and some through branch 2. Then it joins up again and goes back to the supply.
    [screenshot 16-exchange-21-laptop.png] exchange-21
    [side picture after T21: "A parallel circuit: a supply and two branches."; newest in the chat: picture "A parallel circuit: a supply and two branches."]
    S22 (tapped "Next")
    T22: Predict: two lamps are in parallel with a 6 V battery, each lamp on its own branch. What is the potential difference across each lamp?
    S23 (try, tapped the button): 6 v each
    T23: Rule one for parallel, then: the potential difference across each branch is the same as the supply potential difference. Nothing is shared out between the branches.
      [T23 shown first: Yes: 6 V each. Each branch is joined straight across the battery, from one end to the other, so each lamp has the full 6 V.]
    S24 (tapped "Next")
    T24: Rule two is about the current, and it works differently. The current splits where the branches start and joins again where they meet. The total current from the supply is the sum of the currents in the branches.
    [screenshot 17-exchange-24-laptop.png] exchange-24
    S25 (tapped "Next")
    T25: In a parallel circuit, one branch has a current of 0.2 A and the other has 0.3 A. What is the total current from the supply, in amperes?
    S26 (try): 0.5 a
    T26: Every branch has the full push across it. Turning V = I R round gives I = V ÷ R: current = potential difference ÷ resistance, with I in amperes, V in volts and R in ohms. You can use it to compare two branches.
      [T26 shown first: Yes: 0.5 A. The branch currents add up: 0.2 + 0.3 = 0.5 A.]
    S27 (tapped "Next")
    T27: Branch A has a 5 Ω resistor and branch B has a 10 Ω resistor, both across the same 6 V supply. Which branch carries the bigger current?
    [screenshot 18-exchange-27-laptop.png] exchange-27
    S28 (what): wdym
    T28: Have a go at the question: Branch A has a 5 Ω resistor and branch B has a 10 Ω resistor, both across the same 6 V supply. Which branch carries the bigger current?
      [T28 shown first: In other words: to compare two routes for charge. Both branches are connected to the same 6 V supply, but one has a smaller resistor and one has a bigger resistor.]
    S29 (try): branch a with 5 ohm
    T29: Now a surprise. Picture a cell with one lamp joined across it. Then you add a second lamp on a new branch beside the first.
      [T29 shown first: Yes: branch A. With the same push, the smaller resistance lets the bigger current through: 6 ÷ 5 = 1.2 A, against 6 ÷ 10 = 0.6 A.]
    S30 (tapped "Next")
    T30: Predict: which is true about the total current from the cell, now there are two branches?
    [screenshot 19-exchange-30-laptop.png] exchange-30
    S31 (idk): idk
    T31: The first lamp still has the full push of the cell across it, so its current stays. The second lamp has a current too. Which button fits?
      [T31 easier step]
    S32 (try, tapped the button): it is bigger
    T32: Adding the branch kept the push of the cell the same but made the total current bigger. Which is true about the total resistance of the circuit?
      [T32 shown first: Yes: bigger. The first lamp still has the full push, so its current does not change, and the new branch adds a current of its own.]
    S33 (try): it is smaller
    T33: Rule three for parallel: the total resistance of two resistors in parallel is less than the resistance of the smaller one. Two branches together let more current through than even the smaller resistor alone. You do not need to work out the value.
    [screenshot 20-exchange-33-laptop.png] exchange-33
      [T33 shown first: Yes: smaller. The same push driving a bigger current means less resistance overall.]
    S34 (tapped "Next")
    T34: In one line: why does adding a resistor in parallel make the total resistance smaller?
    S35 (try): more paths for curent
    T35: Here is why this matters. Some old strings of decorative lights had all their bulbs in series. When one bulb broke, the single loop had a gap, so no current flowed and every bulb went out.
    [counter now "2/5 covered" after T35; AI calls from the site so far: 14, $0.0067]
      [T35 shown first: Partly there. You have this: it gives the charge another path. Still needed: so the total current is bigger for the same potential difference.]
    [side picture after T35: none; newest in the chat: picture "A parallel circuit: a supply and two branches."]
    S36 (tapped "Next")
    T36: Some decorative lights have every bulb on its own branch, in parallel. One bulb breaks. Which is true about the other bulbs?
    [screenshot 21-exchange-36-laptop.png] exchange-36
    S37 (try, tapped the button): they stay lit
    T37: The lights and sockets in a home are wired in parallel too, each on its own branch across the supply. That has three good results.
      [T37 shown first: Yes: they stay lit. Each bulb is on its own branch, so the other branches still have a complete path.]
    [side picture after T37: none; newest in the chat: none]
    S38 (tapped "Next")
    T38: First: every appliance gets the full supply potential difference it was made for.
    S39 (tapped "Next")
    T39: Second: each appliance can be switched on and off by itself, because turning one off only breaks its own branch.
    [screenshot 22-exchange-39-laptop.png] exchange-39
    S40 (tapped "Next")
    T40: The third one: your toaster develops a fault and stops working. Which is true about the kettle on another socket?
    S41 (idk): idk
    T41: The kettle has its own branch, with its own path back to the supply. Which button fits?
      [T41 easier step]
    S42 (try, tapped the button): it keeps working
    T42: Why are homes wired in parallel? Write one line with as many reasons as you can.
    [screenshot 23-exchange-42-laptop.png] exchange-42
      [T42 shown first: Yes: it keeps working. A fault in one appliance does not stop the others, because each is on its own branch.]
    S43 (what): wdym
    T43: Back to the question: Why are homes wired in parallel? Write one line with as many reasons as you can.
      [T43 shown first: In other words: to think about a house full of sockets and gadgets, and to say what is good about wiring them in separate branches instead of one single loop. Try listing every advantage you can think of, all squeezed into one line.]
    S44 (try): every thing gets full voltage and can switch on off alone and other stuff still works
    T44: Now some calculations, for series circuits only. The total resistance of a series circuit is also called the equivalent resistance: the resistance of one single resistor that would do the same job as the whole set.
    [counter now "3/5 covered" after T44; AI calls from the site so far: 18, $0.0103]
      [T44 shown first: Yes: your line makes every point. You have this: each appliance gets the full supply potential difference. You have this: each can be switched on and off on its own. You have this: a fault in one does not stop the others.]
    S45 (tapped "Next")
    T45: To find the current in a series circuit, use I = V ÷ R, the equation from the parallel part, with the supply potential difference and the equivalent resistance.
    [screenshot 24-exchange-45-laptop.png] exchange-45
    S46 (tapped "Next")
    T46: Here is an example with four steps. Tap "Show the first step" under it to see each step in turn.
    [side picture after T46: none; newest in the chat: worked or question card]
    [worked example under T46: buttons seen Show the first step → Next step → Next step → Next step; after the last step: Next]
    [screenshot 25-worked-46-laptop.png] worked-46
    S47 (tapped "Next")
    T47: Your turn, one step at a time. A 5 Ω and a 7 Ω resistor are in series with a 6 V supply. Step 1: what is the equivalent resistance, in ohms?
    S48 (idk): dont know
    T48: Step 1 is the series rule for resistance: add the two resistances.
    [screenshot 26-exchange-48-laptop.png] exchange-48
      [T48 easier step]
    S49 (try): 12 ohms
    T49: Step 2: the supply is 6 V and the equivalent resistance is 12 Ω. What is the current, in amperes?
      [T49 shown first: Yes: 12 Ω. In series, 5 + 7 = 12 Ω.]
    S50 (try): 0.5 amps
    T50: Step 3: the current is 0.5 A. What is the potential difference across the 5 Ω resistor, in volts?
      [T50 shown first: Yes: 0.5 A. I = V ÷ R = 6 ÷ 12 = 0.5 A.]
    S51 (try): use v equals i r
    T51: Type your answer as a number. Step 3: the current is 0.5 A. What is the potential difference across the 5 Ω resistor, in volts?
    [screenshot 27-exchange-51-laptop.png] exchange-51
    S52 (try): 2.5 volts
    T52: Step 4, the check: what is the potential difference across the 7 Ω resistor, in volts?
      [T52 shown first: Yes: 2.5 V. V = I R = 0.5 × 5 = 2.5 V.]
    S53 (what): wdym
    T53: Now, the question again: Step 4, the check: what is the potential difference across the 7 Ω resistor, in volts?
      [T53 shown first: The check in step 4 is asking you to work out how many volts are across the 7 Ω resistor, using what you already found for the current. Then you see if that voltage plus the other resistor's voltage adds up to the supply.]
    S54 (ask): is it 3.5
    T54: In one line: how do you find the current in a series circuit from the supply and the resistances?
    [screenshot 28-exchange-54-laptop.png] exchange-54
      [T54 shown first: Yes: 3.5 V. V = I R = 0.5 × 7 = 3.5 V. And 2.5 + 3.5 = 6 V, the supply, so the answers check out.]
    S55 (idk): idk
    T55: Last part: measuring. An ammeter is the meter that measures current. An ammeter goes in series, in the loop, so that all the current you want to measure flows through the meter.
    [counter now "4/5 covered" after T55; AI calls from the site so far: 25, $0.0142]
      [T55 shown first: No problem. A good line would be: add the resistances to get the equivalent resistance, then divide the supply potential difference by it.]
    S56 (tapped "Next")
    T56: A voltmeter is the meter that measures potential difference: the difference in push between two points. To measure it for a lamp, where does the voltmeter go?
    S57 (idk): idk
    T57: A potential difference is a push across something, from one end to the other. Which button joins the meter to both ends of the lamp?
    [screenshot 29-exchange-57-laptop.png] exchange-57
      [T57 easier step]
    S58 (idk): idk
    T58: The circuit below has an ammeter in the loop and a voltmeter across the lamp. Make your prediction in the box, then put the resistor in to check it. Tap Next when you are done.
      [T58 shown first: A voltmeter goes across the lamp, in parallel, joined to its two ends.]
    [side picture after T58: none; newest in the chat: widget]
    [widget under T58: prediction "The ammeter is in the loop and the voltmeter is across the lamp. You put the res" tapped; then shown: yes, ammeters 1, controls Take the resistor out; "Now explain it" before a control was used: no, after: yes]
    [widget text under T58: PREDICT FIRST The ammeter is in the loop and the voltmeter is across the lamp. You put the resistor in, in series. Which is true? Only the ammeter goes down Both readings go down Both readings stay the same Now test your prediction. Put the resistor in and read both meters. Then take it out again. Both readings go down. With the resistor in, both readings were smaller. lamp A 0.18 A resistor V Take the resistor out Ammeter: 0.18 A Voltmeter across the lamp: 1.21 V NOW EXPLAIN IT In one line: why do you think the voltmeter reading went down? Check my line cell lamp resistor ammeter voltmeter]
    [check] OK: predict-first widget 2 works and matches its words — opened after the prediction true; ammeters 1 (words: one); controls match true; prediction first true
    [screenshot 30-widget-58-laptop.png] widget-58
    S59 (tapped "Next")
    T59: Here is why both readings fell. The resistor adds resistance, so the current is smaller. The resistor also takes a share of the potential difference, so the lamp's share is smaller.
    S60 (tapped "Next")
    T60: To test a component, you measure its current and potential difference at several settings. For that, people put a variable resistor in the loop: a resistor whose resistance you can change, by turning a knob or sliding a contact.
    [screenshot 31-exchange-60-laptop.png] exchange-60
    S61 (tapped "Next")
    T61: A lamp is in series with a variable resistor. You turn the variable resistor to a bigger resistance. Which is true?
    S62 (try): current falls dimmer
    T62: Now for a short quiz on the whole lesson: seven questions. Take your time.
      [T62 shown first: Yes: the total resistance is bigger, so the current falls and the lamp gets dimmer.]
    S63 (tapped "Next")
    T63: Quiz, question 1 of 7: In a series circuit, how does the current compare at different points?
    [screenshot 32-exchange-63-laptop.png] exchange-63
    S64 (idk, tapped the button): the same at every point
    T64: Quiz, question 2 of 7: In a parallel circuit, how does the potential difference across each branch compare with the supply?
      [T64 shown first: Yes. In series the current is the same at every point.]
    S65 (idk, tapped the button): the same as the supply
    T65: Quiz, question 3 of 7: Resistors of 3 Ω, 5 Ω and 2 Ω are in series. What is the total resistance, in ohms?
      [T65 shown first: Yes. Each branch has the same potential difference as the supply.]
    S66 (ask): do i add them all
    T66: Have a go at the question: Quiz, question 3 of 7: Resistors of 3 Ω, 5 Ω and 2 Ω are in series. What is the total resistance, in ohms?
    [screenshot 33-exchange-66-laptop.png] exchange-66
      [T66 shown first: Resistors in series have their resistances added together, one after another, to give the total. The lesson's example does this with two resistors, and the same rule works for as many as you have, so a third one just gets added on as well.]
    S67 (try): 10 ohms
    T67: Quiz, question 4 of 7: A 4 Ω resistor and a 12 Ω resistor are joined in parallel. Which is true about their total resistance?
      [T67 shown first: Yes: 3 + 5 + 2 = 10 Ω.]
    S68 (idk): idk
    T68: Quiz, question 5 of 7: A 2 Ω and a 4 Ω resistor are in series with a 3 V cell. What is the current, in amperes?
      [T68 shown first: OK. In parallel the total resistance is less than the smaller resistor: less than 4 Ω.]
    S69 (try): 0.5 amps
    T69: Quiz, question 6 of 7: Why are the sockets in a home wired in parallel?
    [screenshot 34-exchange-69-laptop.png] exchange-69
      [T69 shown first: Yes: equivalent resistance 6 Ω, then I = 3 ÷ 6 = 0.5 A.]
    S70 (try): each gets full suply
    T70: Quiz, question 7 of 7: How is an ammeter joined to measure the current through a lamp?
      [T70 shown first: Yes. Each gets the full supply potential difference and can be switched on its own.]
    S71 (idk, tapped the button): in series with the lamp
    T71: That's the end of the quiz: you got 6 out of 7.
      [T71 shown first: Yes. An ammeter goes in series, so the current flows through it.]
    S72 (tapped "Next")
    T72: You have finished this lesson: series and parallel circuits, and how to work out the current and potential differences in a series circuit.
    [screenshot 35-exchange-72-laptop.png] exchange-72
      [T72 shown first: Summary, point 1 of 5: The current is the same everywhere, the supply potential difference is shared, and the total resistance is the sum of the resistances.]
      [T72 shown first: Summary, point 2 of 5: The new branch gives the charge another path, so more current flows for the same potential difference, and the total resistance is smaller.]
      [T72 shown first: Summary, point 3 of 5: Each appliance gets the full supply potential difference, each can be switched on and off on its own, and a fault in one does not stop the others.]
      [T72 shown first: Summary, point 4 of 5: Add the resistances to get the equivalent resistance, then divide the supply potential difference by it.]
      [T72 shown first: Summary, point 5 of 5: Measuring circuits — ammeters and voltmeters.]
    [counter now "5/5 covered" after T72; AI calls from the site so far: 33, $0.0194]
    [side picture after T72: none; newest in the chat: none]
    S73 (closing): ok thx
    T73: You're welcome. Tap "Go to the slides" or "Home" when you are ready.
    S74 (closing, tapped the button): home
    [S74 left the lesson: the page is no longer the AI lesson (a button such as Home or the slides)]
    [screenshot 36-end-laptop.png] end
    [tutor-side time: 0.8 minutes over 73 exchanges]
