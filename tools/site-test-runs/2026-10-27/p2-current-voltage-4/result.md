# Site test: p2-current-voltage (lesson, 2026-10-27)

**FAIL** · cost $1.9277 (84 tool calls, 323 calls from the site; tutor claude-sonnet-5-5 $1.3927)

## Judge

```json
{
  "broken": [
    {
      "what": "Wrong answer 'it would double?' to 'half as many runners each second' is never corrected. The tutor offers to 'tell the rest', then moves to new content and never says the current halves.",
      "step": "S16-T17"
    },
    {
      "what": "Worked example 3 (30 C in 60 s) is skipped. When she says 'idk how to do that one', the tutor jumps to 'Your turn' with the numbers swapped and never shows the worked steps.",
      "step": "S35-T35"
    },
    {
      "what": "The predict-first widget (two ammeters, open switch) is attached again under every tutor message from T38 to T85, 38 copies in all. Only question 1 of 3 is ever seen, already answered.",
      "step": "T38-T85"
    },
    {
      "what": "The equation V = I R is never stated before 'If you know any two of them, you can rearrange it' and the V = I R worked examples. The order is also muddled: 'second thing' (resistance, T51) comes before 'first thing' (T57).",
      "step": "T51-T60"
    },
    {
      "what": "The tutor claims 'I haven't covered that yet' about where a voltmeter connects, but it was taught at T48-T51 and she answered it correctly at S51. Her wrong answer 'in series' is not corrected.",
      "step": "T76"
    },
    {
      "what": "After she answers 'What does an ammeter measure?' correctly ('how many runners pass each second', accepted at T84), the tutor asks the same question 3 more times ('Back to the question').",
      "step": "T82-T87"
    },
    {
      "what": "After 'idk' to 'what would be wrong with putting the voltmeter in the loop?', the tutor just says 'No worries.' and moves on with no answer.",
      "step": "S98-T98"
    },
    {
      "what": "A reasonable answer ('if resistance stays same then graph is straight line') is called 'backwards'. Then for 'current more than doubled', her wrong 'it got bigger' is never corrected to 'resistance got smaller'.",
      "step": "T132, T134"
    },
    {
      "what": "The tutor asks a question at T71 after 'what?', saying 'Sorry, that was muddled', and drops the pending ammeter question for an unrelated resistor question.",
      "step": "T71"
    }
  ],
  "looks_wrong": [
    {
      "what": "The phone view shows the same old predict-first widget (switch open, 0.00 A) instead of the newest tutor message. The new question is off screen.",
      "screenshot": "26-widget-40-phone.png",
      "stops_use": true
    },
    {
      "what": "Same repeated widget fills the phone screen, hiding the latest exchange.",
      "screenshot": "39-widget-50-phone.png",
      "stops_use": true
    },
    {
      "what": "Diagram caption cut off at the bottom of the screen ('...in one loo').",
      "screenshot": "15-exchange-24-phone.png",
      "stops_use": false
    },
    {
      "what": "Lesson title truncated to 'Current and potential difference ...'.",
      "screenshot": "07-ai-lesson-opening-phone.png",
      "stops_use": false
    },
    {
      "what": "Key terms panel text fades and cuts off mid-sentence ('A flow of charge. Its size is the').",
      "screenshot": "34-widget-46-laptop.png",
      "stops_use": false
    },
    {
      "what": "The 'cell' label at the top of the diagram is clipped under the sticky header.",
      "screenshot": "36-exchange-48-laptop.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "S135",
    "quote": "nah im done im proper tired",
    "why": "The lesson is long and repetitive: the same ammeter question was asked 4 times, there were repeated 'Back to the question' prompts, and she already asked to stop at S105, S115 and S133."
  },
  "fixes": [
    {
      "target": "predict-first widget rendering",
      "change": "Render the widget once, under the message that introduced it (T37 only). Stop re-attaching it to later turns, and on phone auto-scroll to the newest message."
    },
    {
      "target": "pending-question tracking",
      "change": "Clear the pending question once the student answers it correctly (e.g. S84). Never emit 'Back to the question' for an already-answered question."
    },
    {
      "target": "wrong/idk/checkin-yes handling",
      "change": "Always state the correct answer to the pending question before moving on: half current at T17, voltmeter-in-series consequence at T98, 'resistance got smaller' at T134, 'connect it in parallel' at T76."
    },
    {
      "target": "coverage check ('haven't covered that yet')",
      "change": "Check already-taught key points (voltmeter taught at T48-T51) before saying a topic is uncovered. Introduce 'V = I R' explicitly before T59/T60 and order 'first thing' before 'second thing'."
    },
    {
      "target": "worked example flow (T34-T35)",
      "change": "When the student says 'idk' on a worked example, reveal its steps (I = Q ÷ t = 30 ÷ 60 = 0.5 A) before giving the 'Your turn' question."
    }
  ]
}
```

## Transcript

    Lesson p2-current-voltage (Physics › Electricity › Current, potential difference and resistance).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    [screenshot 02-subjects-phone.png and 02-subjects-laptop.png] subjects
    [screenshot 03-topics-physics-phone.png and 03-topics-physics-laptop.png] topics-physics
    [screenshot 04-quick-check-offer-phone.png and 04-quick-check-offer-laptop.png] quick-check-offer
    [the quick check is offered on its own screen] tapped "Not now: show the lessons"
    [screenshot 05-lessons-p2-phone.png and 05-lessons-p2-laptop.png] lessons-P2
    [screenshot 06-pilot-card-phone.png and 06-pilot-card-laptop.png] pilot-card
    [pilot card] tapped "Not now: go to the lesson"
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Welcome, it's lovely to have you here! What happens when you press the button on a torch to make it light up?
    [screenshot 07-ai-lesson-opening-phone.png and 07-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (offtopic): ugh dunno, the battery thing makes it work innit
    T1: The battery is a good start, because it pushes tiny charged particles along the wire.
    S2 (try): so like... the battery pushes stuff through wires?
    T2: Yes, that's it. A battery is two or more cells joined together, and it pushes tiny charged particles along the wires in a circuit. If you took the battery out of the torch, what would happen to the bulb?
    S3 (try): whats a circuit
    T3: A circuit is a complete loop of wire that charge can flow round, like a running track, and the bulb goes out without the battery.
    [screenshot 08-exchange-3-phone.png and 08-exchange-3-laptop.png] exchange-3
    S4 (tapped "Next")
    T4: The amount of charge that passes a point is called charge flow. Think of the runners on the track: it's how many runners go past one spot. If the same bulb stays on for longer, what happens to the charge flow?
    S5 (wrong): more runners go past so it goes up?
    T5: Yes — more runners go past, so the charge flow goes up. A flow of charge is called an electric current, and its size is how much charge passes a point each second. If a torch had twice as many runners passing a spot every second, what would happen to the current?
    S6 (bored): it would go up?
    T6: Yes — twice as many runners each second means the current goes up. In exam wording, current is the rate of flow of charge. Current is measured in amperes (amps), and 1 ampere means 1 coulomb of charge passing each second.
    [screenshot 09-exchange-6-phone.png and 09-exchange-6-laptop.png] exchange-6
    S7 (tapped "Next")
    T7: Ampere is the unit of current, and 1 ampere means 1 coulomb of charge passing a point each second. So a bigger current means more coulombs go past every second.
    S8 (tapped "Next")
    T8: So 1 ampere means 1 coulomb of charge passing a point every second. A bigger current means more coulombs pass each second.
    S9 (try): ok so like more charge = bigger current right
    T9: Yes, more charge passing each second means a bigger current. The runners on the track are the charge, so more runners passing a point each second means a bigger current. If the number of runners passing each second drops, what happens to the current?
    [screenshot 10-exchange-9-phone.png and 10-exchange-9-laptop.png] exchange-9
    S10 (offtopic): man im so hungry rn
    T10: Fair enough. Back to the question: If the number of runners passing each second drops, what happens to the current?
    S11 (wrong): it stays the same?
    T11: Not quite. Current is how much charge passes each second, so fewer runners passing means a smaller current.
    S12 (tapped "Next")
    T12: Current is measured in amperes, or amps, and 1 ampere means 1 coulomb of charge passing a point each second. A coulomb is just the unit we count charge in.
    [screenshot 11-exchange-12-phone.png and 11-exchange-12-laptop.png] exchange-12
    S13 (tapped "Next")
    T13: A bigger current means more coulombs pass each second.
    S14 (tapped "Next")
    T14: Think of runners on a track: 1 ampere means 1 coulomb of charge passes a point every second. So a current of 2 amperes means more charge passes each second than with 1 ampere.
    S15 (tapped "Next")
    T15: So 1 ampere means 1 coulomb passes a point every second, and the ampere is the unit we measure current in. Picture the track: if only half as many runners passed the line each second, what would that do to the current?
    [screenshot 12-exchange-15-phone.png and 12-exchange-15-laptop.png] exchange-15
    S16 (wrong): it would double?
    T16: This bit is a tricky one, so no worries. Do you want me to just tell you the rest of this one?
    S17 (checkin-yes): yeah just tell me
    T17: Here's the rest of this one. Every torch, phone and kettle runs on something moving through its wires. Turn on a torch and the bulb lights at once.
    S18 (tapped "Next")
    T18: Inside the metal wire, tiny particles that carry electric charge start to drift round together.
    [screenshot 13-exchange-18-phone.png and 13-exchange-18-laptop.png] exchange-18
    S19 (tapped "Next")
    T19: You cannot see charge, but you can see what it does. A complete loop is a closed circuit.
    S20 (offtopic): whats closed circuit
    T20: A closed circuit is a complete loop. Charge only flows round it if it also has something to push it, like a cell. Picture a torch with a cell, a lamp and wire joined in a full loop, then one wire pulled out. What happens to the lamp?
    S21 (wrong): it still lights up cuz theres still charge?
    T21: Not quite — with a gap in the circuit, the lamp goes out, because charge can only flow round when the loop is complete.
    [screenshot 14-exchange-21-phone.png and 14-exchange-21-laptop.png] exchange-21
    S22 (tapped "Next")
    T22: Charge only flows round a closed circuit if it includes something to push it, such as a cell or a battery.
    S23 (tapped "Next")
    T23: That push is called a potential difference, and the next key point explains it.
    S24 (tapped "Next")
    T24: Break the loop anywhere and the flow stops everywhere. A switch does this on purpose: it opens a gap in the loop.
    [screenshot 15-exchange-24-phone.png and 15-exchange-24-laptop.png] exchange-24
    S25 (tapped "Next")
    T25: In a single loop, the current is the same at every point, because charge is not used up on the way round.
    S26 (tapped "Next")
    T26: So it does not matter where you put the ammeter.
    S27 (offtopic): whats ammeter
    T27: An ammeter is a meter that measures current. You put it in the loop, in line with the component. Say you wanted to know the current through a lamp. What would you have to do with the loop to fit the ammeter in?
    [diagram shown in the conversation under T27: "The same loop with an ammeter in it, measuring the current."]
    [screenshot 16-diagram-27-phone.png and 16-diagram-27-laptop.png] diagram-27
    [screenshot 17-exchange-27-phone.png and 17-exchange-27-laptop.png] exchange-27
    S28 (wrong): whats component
    T28: A component is just any part of a circuit, like a bulb, a switch or a cell.
    S29 (tapped "Next")
    T29: The amount of charge that passes is the charge flow, Q. To find it, multiply the current by the time in seconds.
    S30 (tapped "Next")
    T30: Worked example 1 of 3: A current of 2 A flows through a lamp for 5 s. How much charge flows? Tap the button under it to see each step.
    [screenshot 18-exchange-30-phone.png and 18-exchange-30-laptop.png] exchange-30
    S31 (try): 2 times 5 is 10?
    T31: Yes, that's right: 10 C.
    S32 (tapped "Next")
    T32: Worked example 2 of 3: A current of 0.5 A flows through a lamp for 2 minutes. How much charge flows? Tap the button under it to see each step.
    S33 (try): 0.5 times 2 is like 1?
    T33: Not quite: it's 60 C. Time must be in seconds: 2 minutes = 2 × 60 = 120 s. Write the equation: Q = I t. Put the numbers in: Q = 0.5 × 120 = 60 The charge flow is 60 C.
    [screenshot 19-exchange-33-phone.png and 19-exchange-33-laptop.png] exchange-33
    S34 (idk): oh i didnt convert the minutes. got it
    T34: Ha, I get that. Worked example 3 of 3: A charge of 30 C flows past a point in 60 s. What is the current? Tap the button under it to see each step.
    S35 (idk): idk how to do that one
    T35: Your turn: 60 C of charge flows past a point in 30 s. What is the current, in amperes (A)?
    S36 (wrong): is it 60 times 30?
    T36: Not quite: it's 2 A. Start from Q = I t. You want I, so divide both sides by t: I = Q ÷ t. Put the numbers in: I = 60 ÷ 30 = 2 The current is 2 A.
    [screenshot 20-exchange-36-phone.png and 20-exchange-36-laptop.png] exchange-36
    S37 (tapped "Next")
    T37: Predict first: answer the question below (3 questions, one at a time). Then a working circuit with two ammeters opens: you can add a cell or open and close the switch to check your answer. Tap Next when you are done.
    [widget under T37: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 1 works and matches its words — opened after the prediction true; ammeters 2 (words: two); controls match true; prediction first true
    [screenshot 21-widget-37-phone.png and 21-widget-37-laptop.png] widget-37
    S38 (idk): idk what the question is
    T38: Tap your answer under the question above, then try the circuit to check it. Tap Next when you are done.
    [predict-first widget shown under T38: "PREDICT FIRST (1 OF 3)"]
    [screenshot 22-widget-38-phone.png and 22-widget-38-laptop.png] widget-38
    [widget under T38: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 2 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 23-widget-38-phone.png and 23-widget-38-laptop.png] widget-38
    S39 (tapped "Next")
    T39: Copy those into your notes, then tap Next.
    [screenshot 24-exchange-39-phone.png and 24-exchange-39-laptop.png] exchange-39
    [widget under T39: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 3 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 25-widget-39-phone.png and 25-widget-39-laptop.png] widget-39
    S40 (try): done
    T40: In one line, in your own words: what is an electric current?
    [widget under T40: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 4 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 26-widget-40-phone.png and 26-widget-40-laptop.png] widget-40
    S41 (try): charge flowing round a loop
    T41: Your line gets "a flow of charge" right. Still missing: how much charge passes a point each second, and that current is measured in amperes with an ammeter.
    [widget under T41: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 5 works and matches its words — opened after the prediction true; ammeters 2 (words: one); controls match true; prediction first true
    [screenshot 27-widget-41-phone.png and 27-widget-41-laptop.png] widget-41
    S42 (tapped "Next")
    T42: Quick question: You open the switch in a single loop. What happens to the current?
    [screenshot 28-exchange-42-phone.png and 28-exchange-42-laptop.png] exchange-42
    [widget under T42: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 6 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 29-widget-42-phone.png and 29-widget-42-laptop.png] widget-42
    S43 (try): it stops everywhere cos the loop is broken
    T43: Yes, that's right. Break the loop anywhere and the flow stops everywhere.
    [widget under T43: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 7 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 30-widget-43-phone.png and 30-widget-43-laptop.png] widget-43
    S44 (try): Next
    T44: Quick question: A current of 2.5 A flows for 30 s. How much charge flows, in coulombs (C)?
    [widget under T44: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 8 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 31-widget-44-phone.png and 31-widget-44-laptop.png] widget-44
    S45 (try): 2.5 times 30 is like 75?
    T45: Yes, that's right: 75 C.
    [screenshot 32-exchange-45-phone.png and 32-exchange-45-laptop.png] exchange-45
    [widget under T45: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 9 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 33-widget-45-phone.png and 33-widget-45-laptop.png] widget-45
    S46 (try): Next
    T46: Connect a lamp to one cell and it glows dimly; swap in two cells and it glows brighter, because the cells give charge a bigger push. That push is called potential difference, measured in volts (V). If you used three cells instead of two, what would you expect to see the lamp do?
    [counter now "1/7 covered" after T46]
    [widget under T46: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 10 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 34-widget-46-phone.png and 34-widget-46-laptop.png] widget-46
    S47 (bored): glow even brighter?
    T47: Yes, brighter is right: three cells give a bigger push, so the lamp glows even brighter.
    [widget under T47: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 11 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 35-widget-47-phone.png and 35-widget-47-laptop.png] widget-47
    S48 (idk): Next
    T48: A voltmeter is a meter that measures potential difference, and you connect it across the part you're testing, not in the loop as part of the path.
    [screenshot 36-exchange-48-phone.png and 36-exchange-48-laptop.png] exchange-48
    [widget under T48: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 12 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 37-widget-48-phone.png and 37-widget-48-laptop.png] widget-48
    S49 (tapped "Next")
    T49: Think of the voltmeter as measuring the push between the two ends of the part you're testing, so its two wires touch either side of that part. If you wanted to measure the push across a lamp, where would you attach the voltmeter's wires?
    [widget under T49: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 13 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 38-widget-49-phone.png and 38-widget-49-laptop.png] widget-49
    S50 (offtopic): im so hungry rn lol
    T50: Noted! Back to the question: If you wanted to measure the push across a lamp, where would you attach the voltmeter's wires?
    [widget under T50: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 14 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 39-widget-50-phone.png and 39-widget-50-laptop.png] widget-50
    S51 (try): one wire on each side of the lamp?
    T51: Right: one wire on each side of the lamp is exactly where it goes, across the part. The second thing that matters is resistance, how much a component opposes the current through it. If the opposition gets bigger, what would you expect to happen to the current?
    [screenshot 40-exchange-51-phone.png and 40-exchange-51-laptop.png] exchange-51
    [widget under T51: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 15 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 41-widget-51-phone.png and 41-widget-51-laptop.png] widget-51
    S52 (try): the current gets smaller?
    T52: Yes, a bigger opposition means a smaller current. In the exam, say: for a fixed potential difference, a bigger resistance means a smaller current. Resistance is measured in ohms (Ω). A lamp is one component, and a resistor is another. If you add a resistor into the loop with the lamp, why does the lamp dim?
    [widget under T52: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 16 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 42-widget-52-phone.png and 42-widget-52-laptop.png] widget-52
    S53 (idk): whats a resistor
    T53: A resistor is a part you put in a circuit to limit the current.
    [widget under T53: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 17 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 43-widget-53-phone.png and 43-widget-53-laptop.png] widget-53
    S54 (tapped "Next")
    T54: Back to my question: If you add a resistor into the loop with the lamp, why does the lamp dim?
    [screenshot 44-exchange-54-phone.png and 44-exchange-54-laptop.png] exchange-54
    [widget under T54: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 18 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 45-widget-54-phone.png and 45-widget-54-laptop.png] widget-54
    S55 (try): the resistor limits the current so less goes through the lamp
    T55: Yes, the resistor limits the current, so less flows through the lamp. In the exam, say: for a fixed potential difference, a bigger resistance means a smaller current. If you took the resistor out again, what would happen to the lamp's brightness?
    [widget under T55: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 19 works and matches its words — opened after the prediction true; ammeters 2 (words: -); controls match true; prediction first true
    [screenshot 46-widget-55-phone.png and 46-widget-55-laptop.png] widget-55
    S56 (try): it gets brighter again cos theres less resistance
    T56: Yes — it gets brighter, because taking the resistor out means less resistance, so more current flows through the lamp.
    S57 (tapped "Next")
    T57: The first thing is the push that drives charge through the component: the potential difference across it.
    [screenshot 47-exchange-57-phone.png and 47-exchange-57-laptop.png] exchange-57
    S58 (try): ok got it
    T58: No worries. People often call it voltage. Exam questions say potential difference, but either word gets the mark.
    S59 (tapped "Next")
    T59: If you know any two of them, you can rearrange it to find the third.
    S60 (tapped "Next")
    T60: Worked example 1 of 2: A current of 2 A flows through a 3 Ω resistor. What is the potential difference across it? Tap the button under it to see each step.
    [screenshot 48-exchange-60-phone.png and 48-exchange-60-laptop.png] exchange-60
    S61 (wrong): is it 2 plus 3 so like 5 volts?
    T61: Not quite: it's 6 V. Write the equation: V = I R. Put the numbers in: V = 2 × 3 = 6 The potential difference is 6 V.
    S62 (tapped "Next")
    T62: Worked example 2 of 2: A potential difference of 6 V is put across a 12 Ω resistor. What is the current through it? Tap the button under it to see each step.
    S63 (wrong): 6 plus 12 is 18 amps?
    T63: Not quite: it's 0.5 A. Write the equation: V = I R. You want I, so divide both sides by R: I = V ÷ R. Put the numbers in: I = 6 ÷ 12 = 0.5 The current is 0.5 A.
    [screenshot 49-exchange-63-phone.png and 49-exchange-63-laptop.png] exchange-63
    S64 (tapped "Next")
    T64: Your turn: A current of 0.5 A flows through a 2 Ω resistor. What is the potential difference across it, in volts (V)?
    S65 (try): um is it 0.5 times 2 so like 1 volt?
    T65: Yes, that's right: 1 V.
    S66 (tapped "Next")
    T66: Predict first: answer the question below (3 questions, one at a time). Then a working circuit with an ammeter and a voltmeter opens: you can add a cell, put the resistor in or move it to check your answer. Tap Next when you are done.
    [screenshot 50-exchange-66-phone.png and 50-exchange-66-laptop.png] exchange-66
    [widget under T66: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 20 works and matches its words — opened after the prediction true; ammeters 1 (words: one); controls match true; prediction first true
    [screenshot 51-widget-66-phone.png and 51-widget-66-laptop.png] widget-66
    S67 (tapped "Next")
    T67: Copy those into your notes, then tap Next.
    [widget under T67: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 21 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 52-widget-67-phone.png and 52-widget-67-laptop.png] widget-67
    S68 (tapped "Next")
    T68: In one line: what do potential difference and resistance each do to the current?
    [widget under T68: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 22 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 53-widget-68-phone.png and 53-widget-68-laptop.png] widget-68
    S69 (offtopic): bigger pd makes more current bigger resistance makes it smaller
    T69: Your line gets two points right: a bigger potential difference, the push driving the current, gives more current, and a bigger resistance means a smaller current. Missing is the link between them: V = I R.
    [screenshot 54-exchange-69-phone.png and 54-exchange-69-laptop.png] exchange-69
    [widget under T69: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 23 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 55-widget-69-phone.png and 55-widget-69-laptop.png] widget-69
    S70 (tapped "Next")
    T70: Quick question: Where do you put an ammeter to measure the current in a single loop?
    [widget under T70: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 24 works and matches its words — opened after the prediction true; ammeters 1 (words: one); controls match true; prediction first true
    [screenshot 56-widget-70-phone.png and 56-widget-70-laptop.png] widget-70
    S71 (minimal): what?
    T71: Sorry, that was muddled. Let me say it simply: a lamp glows brighter when more current flows through it. A cell is what pushes the charge round. If you added a resistor to a lamp's loop, what would you expect the lamp to do?
    [widget under T71: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 25 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 57-widget-71-phone.png and 57-widget-71-laptop.png] widget-71
    S72 (try): lamp would get dimmer cos resistor limits current
    T72: Yes, the lamp gets dimmer, and you gave the right reason: the resistor limits the current flowing round the loop.
    [screenshot 58-exchange-72-phone.png and 58-exchange-72-laptop.png] exchange-72
    [widget under T72: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 26 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 59-widget-72-phone.png and 59-widget-72-laptop.png] widget-72
    S73 (tapped "Next")
    T73: Back to the question: Where do you put an ammeter to measure the current in a single loop?
    [widget under T73: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 27 works and matches its words — opened after the prediction true; ammeters 1 (words: one); controls match true; prediction first true
    [screenshot 60-widget-73-phone.png and 60-widget-73-laptop.png] widget-73
    S74 (wrong): in parallel with the lamp?
    T74: Not quite: it's "Anywhere in the loop". In a single loop the current is the same at every point.
    [widget under T74: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 28 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 61-widget-74-phone.png and 61-widget-74-laptop.png] widget-74
    S75 (try): oh right so it goes anywhere in the loop
    T75: Yes, anywhere in the loop is right, because the current is the same at every point in a single loop. Now think about a voltmeter, the meter that measures the push across a part. Where does it connect to a resistor?
    [screenshot 62-exchange-75-phone.png and 62-exchange-75-laptop.png] exchange-75
    [widget under T75: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 29 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 63-widget-75-phone.png and 63-widget-75-laptop.png] widget-75
    S76 (wrong): in series with the resistor?
    T76: Not quite — I haven't covered that yet, so there's no way you could have known; we'll work out where it connects as we go.
    [widget under T76: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 30 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 64-widget-76-phone.png and 64-widget-76-laptop.png] widget-76
    S77 (tapped "Next")
    T77: Quick question: A current of 0.2 A flows through a 2 Ω resistor. What is the potential difference across it, in volts (V)?
    [widget under T77: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 31 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 65-widget-77-phone.png and 65-widget-77-laptop.png] widget-77
    S78 (try): 0.2 times 2 is 0.4 volts
    T78: Yes, that's right: 0.4 V.
    [screenshot 66-exchange-78-phone.png and 66-exchange-78-laptop.png] exchange-78
    [widget under T78: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 32 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 67-widget-78-phone.png and 67-widget-78-laptop.png] widget-78
    S79 (tapped "Next")
    T79: Before the practical, question 1 of 2: What does an ammeter measure?
    [counter now "2/7 covered" after T79]
    [widget under T79: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 33 works and matches its words — opened after the prediction true; ammeters 1 (words: one); controls match true; prediction first true
    [screenshot 68-widget-79-phone.png and 68-widget-79-laptop.png] widget-79
    S80 (minimal): what?
    T80: An ammeter is a meter you put in the circuit to read the current. Current is how many runners pass a spot on the track each second. If the ammeter shows a bigger reading, what has happened to the number of runners passing each second?
    [widget under T80: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 34 works and matches its words — opened after the prediction true; ammeters 1 (words: one); controls match true; prediction first true
    [screenshot 69-widget-80-phone.png and 69-widget-80-laptop.png] widget-80
    S81 (minimal): ok
    T81: "Ok" doesn't answer it, so here it is: a bigger reading means more runners are passing each second.
    [screenshot 70-exchange-81-phone.png and 70-exchange-81-laptop.png] exchange-81
    [widget under T81: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 35 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 71-widget-81-phone.png and 71-widget-81-laptop.png] widget-81
    S82 (tapped "Next")
    T82: Back to the question: What does an ammeter measure?
    [widget under T82: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 36 works and matches its words — opened after the prediction true; ammeters 1 (words: one); controls match true; prediction first true
    [screenshot 72-widget-82-phone.png and 72-widget-82-laptop.png] widget-82
    S83 (minimal): k
    T83: Fair enough. Back to the question: What does an ammeter measure?
    [widget under T83: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 37 works and matches its words — opened after the prediction true; ammeters 1 (words: one); controls match true; prediction first true
    [screenshot 73-widget-83-phone.png and 73-widget-83-laptop.png] widget-83
    S84 (try): how many runners pass each second
    T84: Yes — an ammeter counts how many runners pass each second, which is the current. A bigger reading means more runners passing every second. If an ammeter reading went down, what would that tell you about the runners?
    [screenshot 74-exchange-84-phone.png and 74-exchange-84-laptop.png] exchange-84
    [widget under T84: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 38 works and matches its words — opened after the prediction true; ammeters 1 (words: one); controls match true; prediction first true
    [screenshot 75-widget-84-phone.png and 75-widget-84-laptop.png] widget-84
    S85 (try): fewer runners passing each second
    T85: Yes — a lower ammeter reading means fewer runners (charge) passing each second, so the current has gone down.
    [widget under T85: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 39 works and matches its words — opened after the prediction true; ammeters 1 (words: -); controls match true; prediction first true
    [screenshot 76-widget-85-phone.png and 76-widget-85-laptop.png] widget-85
    S86 (try): ok got it
    T86: Back to the question: What does an ammeter measure?
    S87 (minimal): k
    T87: Ha, I get that. Back to the question: What does an ammeter measure?
    [screenshot 77-exchange-87-phone.png and 77-exchange-87-laptop.png] exchange-87
    S88 (try): the current flowing round the circuit
    T88: Yes, that's right. An ammeter measures the current through a component.
    S89 (try): Next
    T89: Before the practical, question 2 of 2: You know the potential difference across a component and the current through it. How do you find its resistance?
    S90 (wrong): divide the potential difference by the current?
    T90: Yes, that's right. Resistance = potential difference ÷ current, from V = I R.
    [screenshot 78-exchange-90-phone.png and 78-exchange-90-laptop.png] exchange-90
    S91 (tapped "Next")
    T91: In this practical, you clip a long wire along a metre ruler and connect it to a cell, with an ammeter in the loop one after another with the wire. Why does it matter that the ammeter is connected in series with the wire?
    S92 (try): whats in series
    T92: "In series" means connected one after another in the same loop, so the same current flows through each part.
    S93 (tapped "Next")
    T93: Back to my question: Why does it matter that the ammeter is connected in series with the wire?
    [screenshot 79-exchange-93-phone.png and 79-exchange-93-laptop.png] exchange-93
    S94 (minimal): k
    T94: Noted! Back to the question: Why does it matter that the ammeter is connected in series with the wire?
    S95 (try): so the same current flows through the wire
    T95: Yes, the same current flows through the ammeter and the wire, because they're one after another in the loop. The voltmeter is different: it's connected "in parallel", meaning side by side, across the same two points as the wire.
    S96 (wrong): whats in parallel
    T96: "In parallel" means connected side by side, across the same two points. So the voltmeter sits next to the wire, touching both of its ends, instead of being in the loop one after another with it.
    [screenshot 80-exchange-96-phone.png and 80-exchange-96-laptop.png] exchange-96
    S97 (tapped "Next")
    T97: In this practical, the voltmeter goes in parallel with the wire, touching both ends of it, to measure the potential difference across it. Meanwhile the ammeter sits in the loop, in series. If you accidentally put the voltmeter in the loop, one after another with the wire, what would be wrong with that?
    S98 (idk): idk
    T98: No worries.
    S99 (tapped "Next")
    T99: To find the resistance, divide the potential difference by the current. You get both readings from the same circuit. Which two meters give you those two readings?
    [screenshot 81-exchange-99-phone.png and 81-exchange-99-laptop.png] exchange-99
    S100 (wrong): ammeter gives the potential difference and voltmeter gives the current?
    T100: Not quite, those two are swapped: the ammeter gives the current, and the voltmeter gives the potential difference. Remember the voltmeter is the one connected across the wire, side by side with it. So which meter sits in series, in the loop with the wire?
    S101 (try): the ammeter sits in series
    T101: Yes — the ammeter is the one in series, in the loop with the wire. Next, the wire must stay at a constant temperature: its temperature stays the same throughout the measurements. A hot wire could change the readings. What could you do between readings to stop the wire warming up?
    S102 (bored): whats constant temperature
    T102: Constant temperature just means the wire's temperature stays the same all the way through your measurements, so it doesn't warm up or cool down. If the wire did get hotter halfway through, what would that mean for your readings?
    [screenshot 82-exchange-102-phone.png and 82-exchange-102-laptop.png] exchange-102
    S103 (minimal): what?
    T103: No worries, that was a bit wordy. If the wire got hotter, your readings would no longer be reliable, because the heat would change how the wire behaves.
    S104 (minimal): ok
    T104: Back to my question: What could you do between readings to stop the wire warming up?
    S105 (offtopic): can we take a break im hungry
    T105: No worries. Back to the question: What could you do between readings to stop the wire warming up?
    [screenshot 83-exchange-105-phone.png and 83-exchange-105-laptop.png] exchange-105
    S106 (wrong): turn off the cell between readings?
    T106: Yes, switching off the cell between readings is right. With no current flowing, the wire can't heat up, so it stays at a constant temperature.
    S107 (wrong): next
    T107: Heaters, leads and the coils inside motors all use wire, so engineers need to know how its length changes its resistance.
    S108 (tapped "Next")
    T108: Move one clip to change the length, and repeat. Keep the current small and switch off between readings, so the wire does not warm up.
    [screenshot 84-exchange-108-phone.png and 84-exchange-108-laptop.png] exchange-108
    S109 (tapped "Next")
    T109: A hot wire can also burn you, so keep the current small. One cell's low potential difference gives no risk of an electric shock.
    S110 (tapped "Next")
    T110: Repeat each reading and take the mean, then plot resistance against length. You find that a longer wire has a bigger resistance.
    S111 (tapped "Next")
    T111: The points lie on a straight line through the origin. The same circuit measures two or more resistors joined together, in series or in parallel.
    [screenshot 85-exchange-111-phone.png and 85-exchange-111-laptop.png] exchange-111
    S112 (idk): whats the origin
    T112: The origin is the point on a graph where both quantities are zero. That's usually the bottom-left corner, and a line "through the origin" means that when one quantity is zero, so is the other. On your graph, what would the length of the wire be at the origin?
    S113 (try): zero length
    T113: Yes — zero length is right, because at the origin both quantities on the graph are zero.
    S114 (tapped "Next")
    T114: Worked example: A length of the wire has a potential difference of 1.5 V across it and a current of 0.3 A through it. What is its resistance? Tap the button under it to see each step.
    [screenshot 86-exchange-114-phone.png and 86-exchange-114-laptop.png] exchange-114
    S115 (offtopic): my battery is dying can we finish soon
    T115: Fair enough. Back to the question: A length of the wire has a potential difference of 1.5 V across it and a current of 0.3 A through it. What is its resistance? Type your answer, or tap Next to go on.
    S116 (try): 1.5 divided by 0.3... um like 5?
    T116: Yes, that's right: 5 Ω.
    S117 (tapped "Next")
    T117: Your turn: A current of 1.5 A flows through a 8 Ω resistor. What is the potential difference across it, in volts (V)?
    [screenshot 87-exchange-117-phone.png and 87-exchange-117-laptop.png] exchange-117
    S118 (wrong): is it 8 divided by 1.5? like 5 point something?
    T118: Not quite: it's 12 V. Write the equation: V = I R. Put the numbers in: V = 1.5 × 8 = 12 The potential difference is 12 V.
    S119 (tapped "Next")
    T119: Copy those into your notes, then tap Next.
    S120 (idk): idk what to copy
    T120: Ha, I get that. In one line: how does the length of a wire change its resistance?
    [screenshot 88-exchange-120-phone.png and 88-exchange-120-laptop.png] exchange-120
    S121 (idk): idk
    T121: No problem. A good line would say: a longer wire has a bigger resistance; the temperature is kept constant; resistance = potential difference ÷ current.
    S122 (tapped "Next")
    T122: Quick question: In the resistance-of-a-wire practical, why does one cell give no risk of an electric shock?
    S123 (try): one cell has low potential difference
    T123: Yes, that's right. A low potential difference means no risk of an electric shock. The wire can still get hot, so keep the current small.
    [screenshot 89-exchange-123-phone.png and 89-exchange-123-laptop.png] exchange-123
    S124 (tapped "Next")
    T124: Quick question: A potential difference of 80 V is put across a 40 Ω resistor. What is the current through it, in amperes (A)?
    S125 (try): um 80 divided by 40... is it 2 amps?
    T125: Yes, that's right: 2 A.
    S126 (tapped "Next")
    T126: To find out how a component behaves, you measure the current through it at several potential differences, then plot the points on a graph: current up the side, potential difference along the bottom. That graph is called an I-V characteristic.
    [screenshot 90-exchange-126-phone.png and 90-exchange-126-laptop.png] exchange-126
    [counter now "3/7 covered" after T126]
    S127 (tapped "Next")
    T127: For a resistor at a constant temperature, the points on an I-V characteristic lie on a straight line through the origin. That means if you double the potential difference, the current doubles too.
    S128 (tapped "Next")
    T128: A straight line through the origin means the resistance isn't changing as the current changes. A component that behaves this way is called an ohmic conductor, so one fixed value of R works in V = I R. Why does a straight line through the origin tell you the resistance stays the same?
    S129 (bored): whats ohmic conductor
    T129: An ohmic conductor is a component whose resistance stays constant at constant temperature. Its I-V graph is a straight line through the origin. If a component's I-V graph was a curved line instead, what would that tell you about its resistance?
    [screenshot 91-exchange-129-phone.png and 91-exchange-129-laptop.png] exchange-129
    S130 (wrong): it gets bigger or smaller as current changes?
    T130: Yes — a curved line means the resistance isn't constant; it changes as the current changes.
    S131 (tapped "Next")
    T131: Back to my question: Why does a straight line through the origin tell you the resistance stays the same?
    S132 (try): cuz if resistance stays same then graph is straight line?
    T132: Not quite — that has it backwards. The straight line comes from the measurements: double the potential difference and the current doubles too, so the points line up. That steady pattern is what shows the resistance isn't changing. If a component's potential difference was doubled but its current more than doubled, what would that tell you about its resistance?
    [screenshot 92-exchange-132-phone.png and 92-exchange-132-laptop.png] exchange-132
    S133 (offtopic): im starving ngl can we wrap up
    T133: Noted! Back to the question: If a component's potential difference was doubled but its current more than doubled, what would that tell you about its resistance?
    S134 (wrong): it got bigger?
    T134: Not quite. If the current more than doubled, the resistance changed, so it wasn't steady. Remember: for a resistor at constant temperature, doubling the potential difference doubles the current. So what shape of line does that give on an I-V graph?
    S135 (offtopic): nah im done im proper tired
    T135: No problem, thanks for sticking with it. Today you answered questions on potential difference and resistance and required practical, I told you about electric current and we made a start on ohmic conductors. Your place is saved, so we'll pick up right here next time. Bye for now!
    [screenshot 93-exchange-135-phone.png and 93-exchange-135-laptop.png] exchange-135
    [the lesson shows "Lesson finished."]
    [screenshot 94-end-phone.png and 94-end-laptop.png] end
