# Site test: p2-current-voltage (lesson, 2026-10-27)

**FAIL** · cost $1.5847 (74 tool calls, 258 calls from the site; tutor claude-sonnet-5-5 $1.0975)

## Judge

```json
{
  "broken": [
    {
      "what": "Correct step rejected: the student says 2 minutes is 120 seconds, which is right. The tutor replies 'Not quite: it's 60 C' and then uses 120 itself.",
      "step": "S21/T21"
    },
    {
      "what": "Correct method rejected: 'multiply 2 times 3' gets 'Not quite: it's 6 V. V = 2 × 3 = 6'.",
      "step": "S60/T60"
    },
    {
      "what": "Correct method rejected: '2.4 divided by 0.4' gets 'Not quite: it's 6 Ω' and then the same sum. The independent value is 2.4 ÷ 0.4 = 6.",
      "step": "S64/T64"
    },
    {
      "what": "Correct answer rejected: 'divide the voltage by the current' gets 'Not quite, I'm afraid', then the tutor says exactly the same thing.",
      "step": "S84/T84"
    },
    {
      "what": "Contradictory feedback: 'Not quite' is followed by 'so you've got it exactly right'.",
      "step": "T110"
    },
    {
      "what": "Wrong answer 'the bulb' for the flat battery is never corrected. 'Here's the rest' never says that the cell (the push) is missing.",
      "step": "S8-T9"
    },
    {
      "what": "Misconception 'resistors stop all the charge' is ignored. The reply is an unrelated line, 'Resistance is measured in ohms'. The student's correction at S58 is also ignored.",
      "step": "S57/T57, S58/T58"
    },
    {
      "what": "T58 'If you know any two of them, rearrange it' refers to V = I R, which had not been introduced yet.",
      "step": "T58"
    },
    {
      "what": "Tutor says 'we'll get to what resistance means later' right after defining resistance.",
      "step": "T52"
    },
    {
      "what": "Resistor follow-up question is dropped. T47 gives a vague 'answer' and T48 goes back to an earlier question.",
      "step": "T46-T48"
    },
    {
      "what": "Worked example 2 of 2 (6 V, 12 Ω) is never answered or stepped through. It moves on after 'k'. The answer should be 0.5 A.",
      "step": "T62/T63"
    },
    {
      "what": "Predict-first widget 1: T26 says 'open the switch', but the widget's control is 'Close the switch' (the check reports controls do not match).",
      "step": "T26"
    },
    {
      "what": "Predict-first widget 2 never appears. The student's guess '12 volts' is ignored and the lesson jumps to notes.",
      "step": "T65/S66/T66"
    },
    {
      "what": "Tutor talks about the student in the third person: 'Her line gets two points right'.",
      "step": "T68"
    },
    {
      "what": "automatic check failed: predict-first widget 1 works and matches its words",
      "step": "opened after the prediction true; ammeters 2 (words: two); controls match false; prediction first true"
    }
  ],
  "looks_wrong": [
    {
      "what": "Jump To list shows 'Required practical' twice with no way to tell them apart",
      "screenshot": "07-ai-lesson-opening-laptop.png",
      "stops_use": false
    },
    {
      "what": "Lesson title truncated to 'Current and potential difference ...'",
      "screenshot": "07-ai-lesson-opening-phone.png",
      "stops_use": false
    },
    {
      "what": "Sidebar diagram thumbnail labels (cell, switch, lamp, ammeter) are far too small to read",
      "screenshot": "13-exchange-15-laptop.png",
      "stops_use": false
    },
    {
      "what": "Key Terms panel text fades out mid-sentence ('carried by tiny particles in the')",
      "screenshot": "24-exchange-39-laptop.png",
      "stops_use": false
    },
    {
      "what": "Formula wraps awkwardly: 'I = Q' on one line and '÷ t' on the next",
      "screenshot": "23-exchange-36-phone.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "S64",
    "quote": "um like 2.4 divided by 0.4?",
    "why": "Fourth time a correct answer gets 'Not quite' and then the same answer back; she stops trusting it"
  },
  "fixes": [
    {
      "target": "answer marking for calculations and short answers",
      "change": "Accept a correct method or intermediate value (e.g. '2.4 divided by 0.4', '120 seconds', '2 times 3', 'voltage by current') as correct. Never open with 'Not quite' when the model answer contains the student's working."
    },
    {
      "target": "feedback opener generation",
      "change": "Pick the opener ('Yes'/'Not quite') from the marking result after the reply is written. Block replies that contain both. Address the student as 'you', never 'her'."
    },
    {
      "target": "misconception and reveal handling (T9, T57, T58)",
      "change": "When the student states something wrong, correct it directly ('No, resistors only make it harder; current still flows'). A 'tell me' reveal must state the actual answer ('the cell, the push, is missing')."
    },
    {
      "target": "key point 2 script order",
      "change": "Teach V = I R before T58 and the worked examples. Always finish every worked example with its answer (6 ÷ 12 = 0.5 A) even if the student skips."
    },
    {
      "target": "predict-first widgets and Jump To",
      "change": "T26 text: 'close the switch' to match the control. Make sure widget 2 at T65 renders. Rename the second 'Required practical' to 'Required practical: I–V characteristics'."
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
    T0: Welcome! We're starting with how electricity gets things working. What happens when you press the button on a torch to make it light up?
    [screenshot 07-ai-lesson-opening-phone.png and 07-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (offtopic): tbh im so hungry rn cant stop thinking about lunch
    T1: Lunch will be there soon, so a quick one first. When you press a torch button, tiny particles in the wire drift round together, and that flow is what lights the bulb. What do you think those particles are carrying along the wire to the bulb?
    S2 (try): like... energy? to make it light up?
    T2: Energy is passed on, yes, but what drifts along the wire is electric charge. Charge is like runners on a track: it carries the energy round. If the track has a gap, what happens to the runners?
    S3 (try): they stop? cant get across the gap?
    T3: Yes: the runners stop because the gap breaks the loop. A flow of charge like this is called an electric current, and its size is how much charge passes a point each second. If more runners pass a point each second, what does that tell you about the current?
    [screenshot 08-exchange-3-phone.png and 08-exchange-3-laptop.png] exchange-3
    S4 (wrong): more runners = bigger current?
    T4: Yes — more runners passing each second means a bigger current. Current is measured in amperes (amps): 1 amp means 1 coulomb of charge passing each second. If twice as many runners passed each second, what would happen to the current?
    S5 (try): it would double? like 2 amps instead of 1?
    T5: Yes — doubling the runners doubles the current, so 2 amps instead of 1 is right. A complete loop is called a closed circuit, and charge only flows round it if it also has something to push it, like a cell or a battery. If a torch has a flat battery, which part of the circuit is missing?
    S6 (bored): whats closed circuit mean
    T6: A closed circuit is a complete loop with no gaps. Charge only flows round it if it also has something to push it, like a cell.
    [screenshot 09-exchange-6-phone.png and 09-exchange-6-laptop.png] exchange-6
    S7 (offtopic): yeah ok but im still starving lol
    T7: Back to my question: If a torch has a flat battery, which part of the circuit is missing?
    S8 (wrong): the bulb? battery died so no bulb works?
    T8: This bit is a tricky one, so no worries. Do you want me to just tell you the rest of this one?
    S9 (checkin-yes): yeah just tell me lol
    T9: Here's the rest of this one. Every torch, phone and kettle runs on something moving through its wires.
    [screenshot 10-exchange-9-phone.png and 10-exchange-9-laptop.png] exchange-9
    S10 (tapped "Next")
    T10: You cannot see charge, but you can see what it does.
    S11 (tapped "Next")
    T11: Charge only flows round a closed circuit if it includes something to push it, such as a cell or a battery. That push is called a potential difference, and the next key point explains it.
    S12 (tapped "Next")
    T12: A switch does this on purpose: it opens a gap in the loop.
    [screenshot 11-exchange-12-phone.png and 11-exchange-12-laptop.png] exchange-12
    S13 (minimal): whats a switch
    T13: A switch is a part that opens or closes a gap in a circuit, to stop or start the current. Think of a torch: you press its button to turn it on or off. What would happen to the bulb if the switch is left open?
    [diagram shown in the conversation under T13: "A closed circuit: a cell, a switch and a lamp in one loop."]
    [screenshot 12-diagram-13-phone.png and 12-diagram-13-laptop.png] diagram-13
    S14 (offtopic): dunno im just gonna ask my mate about this later
    T14: No worries, here's the answer: the bulb stays off, because an open switch is a gap in the circuit, so no charge can get all the way round.
    S15 (tapped "Next")
    T15: In a single loop, the current is the same at every point, because charge is not used up on the way round.
    [screenshot 13-exchange-15-phone.png and 13-exchange-15-laptop.png] exchange-15
    S16 (tapped "Next")
    T16: So it does not matter where you put the ammeter.
    S17 (tapped "Next")
    T17: The amount of charge that passes is the charge flow, Q. To find it, multiply the current by the time in seconds.
    S18 (tapped "Next")
    T18: Worked example 1 of 3: A current of 2 A flows through a lamp for 5 s. How much charge flows? Tap the button under it to see each step.
    [screenshot 14-exchange-18-phone.png and 14-exchange-18-laptop.png] exchange-18
    S19 (wrong): is it like 10 or something?
    T19: Yes, that's right: 10 C.
    [diagram shown in the conversation under T19: "The same loop with an ammeter in it, measuring the current."]
    [screenshot 15-diagram-19-phone.png and 15-diagram-19-laptop.png] diagram-19
    S20 (tapped "Next")
    T20: Worked example 2 of 3: A current of 0.5 A flows through a lamp for 2 minutes. How much charge flows? Tap the button under it to see each step.
    S21 (offtopic): wait 2 mins? thats like 120 seconds right
    T21: Not quite: it's 60 C. Put the numbers in: Q = 0.5 × 120 = 60
    [screenshot 16-exchange-21-phone.png and 16-exchange-21-laptop.png] exchange-21
    S22 (tapped "Next")
    T22: Worked example 3 of 3: A charge of 30 C flows past a point in 60 s. What is the current? Tap the button under it to see each step.
    S23 (wrong): is it like 90 amps or something?
    T23: Not quite: it's 0.5 A. Put the numbers in: I = 30 ÷ 60 = 0.5
    S24 (try): oh right so you divide not multiply
    T24: Your turn: A current of 0.5 A flows for 60 s. How much charge flows, in coulombs (C)?
    [screenshot 17-exchange-24-phone.png and 17-exchange-24-laptop.png] exchange-24
    S25 (try): 0.5 times 60 is 30 C?
    T25: Yes, that's right: 30 C.
    S26 (tapped "Next")
    T26: Predict first: answer the question below (3 questions, one at a time). Then a working circuit with two ammeters opens: you can add a cell or open the switch to check your answer. Tap Next when you are done.
    [widget under T26: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] BROKEN: predict-first widget 1 works and matches its words — opened after the prediction true; ammeters 2 (words: two); controls match false; prediction first true
    [screenshot 18-widget-26-phone.png and 18-widget-26-laptop.png] widget-26
    S27 (tapped "Next")
    T27: Copy those into your notes, then tap Next.
    [screenshot 19-exchange-27-phone.png and 19-exchange-27-laptop.png] exchange-27
    S28 (tapped "Next")
    T28: In one line, in your own words: what is an electric current?
    S29 (idk): idk man
    T29: No problem. A good line would say: a flow of charge; how much charge passes a point each second; measured in amperes with an ammeter.
    [predict-first widget shown under T29: "PREDICT FIRST (1 OF 3)"]
    [screenshot 20-widget-29-phone.png and 20-widget-29-laptop.png] widget-29
    S30 (tapped "Next")
    T30: Quick question: You open the switch in a single loop. What happens to the current?
    [screenshot 21-exchange-30-phone.png and 21-exchange-30-laptop.png] exchange-30
    S31 (idk): no idea
    T31: Not quite: it's "It stops everywhere in the loop". Break the loop anywhere and the flow stops everywhere.
    S32 (tapped "Next")
    T32: Quick question: 125 C of charge flows past a point in 50 s. What is the current, in amperes (A)?
    S33 (wrong): is it like 175 amps?
    T33: Not quite. Here is how it goes, one step at a time. Start from Q = I t.
    [screenshot 22-exchange-33-phone.png and 22-exchange-33-laptop.png] exchange-33
    S34 (idk): idk how to rearrange it
    T34: You want I, so divide both sides by t: I = Q ÷ t.
    S35 (tapped "Next step")
    T35: Put the numbers in: I = 125 ÷ 50 = 2.5
    S36 (tapped "Next step")
    T36: The current is 2.5 A.
    [screenshot 23-exchange-36-phone.png and 23-exchange-36-laptop.png] exchange-36
    S37 (tapped "Next")
    T37: Connect a lamp to one cell and it glows dimly; use two cells and it glows brighter, because more current flows. The cell gives the charge a push to get round the loop, and we call that push the potential difference. With two cells instead of one, what happens to that push?
    [counter now "1/7 covered" after T37]
    S38 (bored): that's long man
    T38: Fair enough. Back to the question: With two cells instead of one, what happens to that push?
    S39 (try): it gets bigger?
    T39: Yes, it gets bigger: two cells give a bigger push, so the potential difference goes up. We measure it in volts with a voltmeter, a meter you connect across the part you're testing.
    [screenshot 24-exchange-39-phone.png and 24-exchange-39-laptop.png] exchange-39
    S40 (try): what's a voltmeter?
    T40: A voltmeter is a meter that measures potential difference, and you connect it across the part you're testing.
    S41 (tapped "Next")
    T41: A voltmeter doesn't go in the loop like the ammeter does. It is connected across the part you are testing, one side on each end of it.
    S42 (try): so it measures the push?
    T42: Yes, a voltmeter measures the push, which is called potential difference. It is the push that drives charge through the part you test. If the voltmeter reading across a lamp went up, what would you say had happened to the push?
    [screenshot 25-exchange-42-phone.png and 25-exchange-42-laptop.png] exchange-42
    S43 (try): the push got bigger
    T43: Yes — a higher voltmeter reading means the push across the lamp got bigger.
    S44 (tapped "Next")
    T44: People often call potential difference "voltage" too, and either word gets the mark in the exam. Say a voltmeter is joined across a lamp, with one side on each end of it. Why does it have to go across the lamp, instead of being put in the loop like the ammeter?
    S45 (bored): huh?
    T45: Simply: a voltmeter measures the push across a part, so it touches both ends of that part.
    [screenshot 26-exchange-45-phone.png and 26-exchange-45-laptop.png] exchange-45
    S46 (try): cos it needs to touch both ends?
    T46: Yes — a voltmeter goes across the lamp, touching both ends, because it measures the push across that part. Now imagine the voltmeter was connected across a resistor instead of the lamp. Which part of the circuit would it be measuring the push across?
    S47 (idk): whats resistor
    T47: A resistor is a component in a circuit that holds back the flow of charge, and the answer we're after is that part of the circuit.
    S48 (tapped "Next")
    T48: Back to my question: Why does it have to go across the lamp, instead of being put in the loop like the ammeter?
    [screenshot 27-exchange-48-phone.png and 27-exchange-48-laptop.png] exchange-48
    S49 (offtopic): man im so hungry rn
    T49: Ha, I get that. Back to the question: Why does it have to go across the lamp, instead of being put in the loop like the ammeter?
    S50 (try): cos it measures the push across it
    T50: Yes, the push across the part is right, which is why the voltmeter goes across the lamp. Now the second thing that decides the current: resistance, how hard a component makes it for charge to get through. If the push stays the same but the resistance gets bigger, what happens to the current?
    S51 (bored): whats resistance
    T51: Resistance is how much a component opposes the current through it. It's measured in ohms (Ω). A lamp and a resistor are both in the loop, and the resistor's resistance gets bigger. How does the lamp's glow change?
    [screenshot 28-exchange-51-phone.png and 28-exchange-51-laptop.png] exchange-51
    S52 (minimal): whats ohm (ω)
    T52: An ohm (Ω) is the unit that measures resistance, and we'll get to what resistance means and how to use it a little later in this lesson.
    S53 (idk): idk what happens then
    T53: Back to my question: If the push stays the same but the resistance gets bigger, what happens to the current?
    S54 (try): it gets smaller?
    T54: Yes: a bigger resistance means a smaller current. The exam wording is: for a fixed potential difference, a bigger resistance means a smaller current. If you swapped a resistor for one with a smaller resistance, what would happen to the lamp's glow?
    [screenshot 29-exchange-54-phone.png and 29-exchange-54-laptop.png] exchange-54
    S55 (try): it gets brighter
    T55: Yes, a smaller resistance lets more current flow, so the lamp glows brighter. Lamps and resistors both have a name: a component is any part of a circuit, such as a lamp or a resistor. Which component in our circuit is the one that limits the current?
    S56 (try): the resistor?
    T56: Yes — the resistor is right. It's the part that limits the current by making it harder for charge to get through.
    S57 (wrong): so resistors stop all the charge then
    T57: Resistance is measured in ohms (Ω).
    [screenshot 30-exchange-57-phone.png and 30-exchange-57-laptop.png] exchange-57
    S58 (wrong): no they just make it harder right
    T58: If you know any two of them, you can rearrange it to find the third.
    S59 (tapped "Next")
    T59: Worked example 1 of 2: A current of 2 A flows through a 3 Ω resistor. What is the potential difference across it? Tap the button under it to see each step.
    S60 (try): um so i multiply 2 times 3?
    T60: Not quite: it's 6 V. Put the numbers in: V = 2 × 3 = 6
    [screenshot 31-exchange-60-phone.png and 31-exchange-60-laptop.png] exchange-60
    S61 (tapped "Next")
    T61: Worked example 2 of 2: A potential difference of 6 V is put across a 12 Ω resistor. What is the current through it? Tap the button under it to see each step.
    S62 (offtopic): my phone battery is dying lol
    T62: Noted! Back to the question: A potential difference of 6 V is put across a 12 Ω resistor. What is the current through it? Type your answer, or tap Next to go on.
    S63 (minimal): k
    T63: Your turn: A component has a potential difference of 2.4 V across it and a current of 0.4 A through it. What is its resistance, in ohms (Ω)?
    [screenshot 32-exchange-63-phone.png and 32-exchange-63-laptop.png] exchange-63
    S64 (try): um like 2.4 divided by 0.4?
    T64: Not quite: it's 6 Ω. Start from V = I R. You want R, so divide both sides by I: R = V ÷ I. Put the numbers in: R = 2.4 ÷ 0.4 = 6 The resistance is 6 Ω.
    S65 (tapped "Next")
    T65: Predict first: answer the question below (3 questions, one at a time). Then a working circuit with an ammeter and a voltmeter opens: you can add a cell, put the resistor in or move it to check your answer. Tap Next when you are done.
    S66 (wrong): is it like 12 volts or something
    T66: Copy those into your notes, then tap Next.
    [screenshot 33-exchange-66-phone.png and 33-exchange-66-laptop.png] exchange-66
    S67 (tapped "Next")
    T67: In one line: what do potential difference and resistance each do to the current?
    S68 (try): push makes current bigger resistance makes it smaller
    T68: Her line gets two points right: the push (potential difference) drives the current, and a bigger resistance means a smaller current. Missing is the link between them: V = I R.
    S69 (tapped "Next")
    T69: Quick question: Where do you put an ammeter to measure the current in a single loop?
    [screenshot 34-exchange-69-phone.png and 34-exchange-69-laptop.png] exchange-69
    S70 (wrong): in the middle of the loop?
    T70: Yes, that's right. In a single loop the current is the same at every point.
    S71 (tapped "Next")
    T71: Quick question: A potential difference of 30 V is put across a 30 Ω resistor. What is the current through it, in amperes (A)?
    S72 (try): 30 divided by 30 is like 1 A?
    T72: Yes, that's right: 1 A.
    [screenshot 35-exchange-72-phone.png and 35-exchange-72-laptop.png] exchange-72
    S73 (tapped "Next")
    T73: Before the practical, question 1 of 2: What does an ammeter measure?
    [counter now "2/7 covered" after T73]
    S74 (minimal): what?
    T74: An ammeter is the meter that goes in the loop and tells you how much charge is flowing past each second. It reads current, which is how many runners pass a point each second. If the ammeter reads a bigger number, what has happened to the current?
    S75 (minimal): k
    T75: "k" isn't quite an answer, so here it is: a bigger ammeter reading means the current has gone up, so more charge is flowing round each second.
    [screenshot 36-exchange-75-phone.png and 36-exchange-75-laptop.png] exchange-75
    S76 (tapped "Next")
    T76: Back to the question: What does an ammeter measure?
    S77 (minimal): ok
    T77: No worries. Back to the question: What does an ammeter measure?
    S78 (try): how much charge flows past each second
    T78: Yes, that's it: an ammeter measures how much charge passes a point each second, which is the current. It's like counting how many runners cross a line on the track every second. If the ammeter reading drops, what has happened to the number of runners passing each second?
    [screenshot 37-exchange-78-phone.png and 37-exchange-78-laptop.png] exchange-78
    S79 (try): fewer runners are passing?
    T79: Yes — fewer runners pass each second, so a lower ammeter reading means a smaller current.
    S80 (tapped "Next")
    T80: Back to the question: What does an ammeter measure?
    S81 (try): the current, like how much charge flows each second
    T81: Yes, that's right. An ammeter measures the current through a component.
    [screenshot 38-exchange-81-phone.png and 38-exchange-81-laptop.png] exchange-81
    S82 (tapped "Next")
    T82: Before the practical, question 2 of 2: You know the potential difference across a component and the current through it. How do you find its resistance?
    S83 (minimal): what?
    T83: Let me say it simpler: to find resistance, you measure two things on the wire, the potential difference across it and the current through it. Then you divide one by the other. Which of those two measurements do you divide by?
    S84 (try): divide the voltage by the current?
    T84: Not quite, I'm afraid. Resistance is the potential difference divided by the current, so the potential difference goes on top and the current is what you divide by.
    [screenshot 39-exchange-84-phone.png and 39-exchange-84-laptop.png] exchange-84
    S85 (tapped "Next")
    T85: Back to the question: You know the potential difference across a component and the current through it. How do you find its resistance?
    S86 (try): divide the potential difference by the current
    T86: Yes, that's right. Resistance = potential difference ÷ current, from V = I R.
    S87 (tapped "Next")
    T87: In this practical, a long wire is clipped along a metre ruler and joined to a cell, and the ammeter goes in the same loop, one after another with the wire.
    [screenshot 40-exchange-87-phone.png and 40-exchange-87-laptop.png] exchange-87
    S88 (wrong): so the ammeter goes across the wire?
    T88: Not quite. The ammeter goes in the loop, in line with the wire, so the current flows through both. It doesn't go across it. If the loop were broken and the ammeter put into the gap, what would the ammeter be measuring?
    S89 (try): the current flowing through the wire
    T89: Yes, the current flowing through the wire is right: an ammeter in the gap measures how much charge passes through it each second.
    S90 (tapped "Next")
    T90: That ammeter placement has a name: the ammeter is connected "in series" with the wire, meaning one after another in the same loop, so the same current flows through both. If two bulbs were connected in series in one loop, what would you say about the current through each?
    [screenshot 41-exchange-90-phone.png and 41-exchange-90-laptop.png] exchange-90
    S91 (minimal): whats in series
    T91: "In series" means connected one after another in the same loop, so the same current flows through each one. If you cut the loop and put a bulb, then an ammeter, then another bulb into the gap, how would they all be connected?
    S92 (try): they'd all be in series?
    T92: Yes — series is right, because they all sit one after another in the same single loop.
    S93 (tapped "Next")
    T93: Back to my question: If two bulbs were connected in series in one loop, what would you say about the current through each?
    [screenshot 42-exchange-93-phone.png and 42-exchange-93-laptop.png] exchange-93
    S94 (wrong): the current splits between them?
    T94: Not quite. Think of one single running track: every runner passing the first bulb must also pass the second, so nothing splits in series. The same current flows through each bulb. If an ammeter sits in that loop too, what current would it read compared with the bulbs?
    S95 (offtopic): same current as the bulbs i guess, im starving tho
    T95: Yes — the ammeter reads the same current as the bulbs, because they're all in series. The voltmeter is wired differently: in parallel, meaning side by side across the same two points, like two lanes of the track starting and ending together. Where would the voltmeter's two ends connect in this circuit, if it's measuring the wire?
    S96 (wrong): whats in parallel
    T96: In parallel means side by side, across the same two points. The voltmeter's two ends touch the wire at its start and end, rather than sitting in the loop.
    [screenshot 43-exchange-96-phone.png and 43-exchange-96-laptop.png] exchange-96
    S97 (tapped "Next")
    T97: Back to my question: Where would the voltmeter's two ends connect in this circuit, if it's measuring the wire?
    S98 (try): one end at the start of the wire, one at the end
    T98: Yes — one end at the start, one at the end, so it sits across the wire in parallel. The wire must stay at a constant temperature, meaning its temperature stays the same throughout the measurements. Why might we keep the current small?
    S99 (wrong): whats constant temperature
    T99: Constant temperature means the wire's temperature stays the same the whole time you're taking readings. If a wire warms up, that's a change, so it wouldn't be constant. If the wire got hot during the readings, what would have changed?
    [screenshot 44-exchange-99-phone.png and 44-exchange-99-laptop.png] exchange-99
    S100 (minimal): what?
    T100: No problem, that one jumped ahead of what we've covered: the answer is that the wire's resistance would have changed, which is something we'll get to properly soon.
    S101 (minimal): k
    T101: Back to my question: Why might we keep the current small?
    S102 (offtopic): so the wire doesnt get too hot i guess
    T102: Yes — keeping the current small stops the wire getting too hot. That keeps it at a constant temperature, and it also means the wire can't burn you.
    [screenshot 45-exchange-102-phone.png and 45-exchange-102-laptop.png] exchange-102
    S103 (wrong): ok got it
    T103: Heaters, leads and the coils inside motors all use wire, so engineers need to know how its length changes its resistance.
    S104 (tapped "Next")
    T104: You can measure it yourself.
    S105 (tapped "Next")
    T105: Then find the resistance: divide the potential difference by the current. Move one clip to change the length, and repeat.
    [screenshot 46-exchange-105-phone.png and 46-exchange-105-laptop.png] exchange-105
    S106 (wrong): so i measure the voltage and current for each length?
    T106: Yes. Voltage is just another name for potential difference, and you read the current from the ammeter. Then divide one by the other to get the resistance for that length.
    S107 (tapped "Next")
    T107: One cell's low potential difference gives no risk of an electric shock. Repeat each reading and take the mean, then plot resistance against length.
    S108 (tapped "Next")
    T108: You find that a longer wire has a bigger resistance. The points lie on a straight line through the origin.
    [screenshot 47-exchange-108-phone.png and 47-exchange-108-laptop.png] exchange-108
    S109 (idk): whats the origin
    T109: The origin is the point on a graph where both quantities are zero. On many graphs it's the bottom-left corner. On this graph, a line through the origin means that when the length is zero, what else is zero?
    S110 (try): the resistance is zero
    T110: Not quite, a line through the origin means that when the length is zero, the resistance is zero too, so you've got it exactly right.
    S111 (offtopic): im so tired rn cant focus anymore
    T111: That's fair, it's a lot of new stuff. Do you want to stop here, do one more quick thing, or switch to the slides?
    [screenshot 48-exchange-111-phone.png and 48-exchange-111-laptop.png] exchange-111
    S112 (try): stop here i think
    T112: No problem, thanks for sticking with it. Today you answered questions on potential difference and resistance and required practical and I told you about electric current. Your place is saved, so we'll pick up right here next time. Bye for now!
    [the lesson shows "Lesson finished."]
    [screenshot 49-end-phone.png and 49-end-laptop.png] end
