# Site test: p2-current-voltage (lesson, 2026-10-28)

**FAIL** · cost $2.3218 (63 tool calls, 438 calls from the site; tutor claude-sonnet-5-5 $1.8287)

## Judge

```json
{
  "broken": [
    {
      "what": "After the student had already answered the resistance question correctly, the tutor ended its reply by asking 'What happens to the current?' again. This re-ask prompted a confused wrong answer at S31.",
      "step": "T30"
    },
    {
      "what": "The feedback states physics that is wrong: 'a very high resistance lets more current through than usual'. A very high resistance lets less current through.",
      "step": "T85"
    },
    {
      "what": "An auto word gloss picked the optics meaning of 'normal' ('line perpendicular to a surface... angles of incidence') for the everyday phrase 'higher than normal' in a diode explanation.",
      "step": "T84"
    },
    {
      "what": "An auto word gloss defined 'work' as 'the transfer of energy by a force' because the sentence said 'one fixed value of R works in V = I R'. This is the wrong meaning.",
      "step": "T69"
    },
    {
      "what": "Internal or meta text leaked to the student: 'Since she's asked to move on, here's the last bit'. The student never asked to move on.",
      "step": "T106"
    },
    {
      "what": "The student's answer 'the same energy because its the same charge' was marked 'Not quite', but no correct answer was given. The question itself was unclear.",
      "step": "T121"
    },
    {
      "what": "Key point 1 (Electric current) is never ticked as covered. The counter stays at 0/7 through it, then the tick goes to 'Potential difference and resistance' instead.",
      "step": "T44"
    },
    {
      "what": "A stray line about the ammeter position appears before the ammeter has been introduced. T10 also promises 'the next key point explains it' and then changes topic.",
      "step": "T11"
    }
  ],
  "looks_wrong": [
    {
      "what": "A key-word box shows the optics definition of 'normal' (angles of incidence and reflection) in the middle of an electricity lesson.",
      "screenshot": "39-exchange-84-phone.png",
      "stops_use": false
    },
    {
      "what": "A key-word box defines 'work' (the energy-transfer meaning) for the verb 'works' in the sentence about V = I R.",
      "screenshot": "34-exchange-69-phone.png",
      "stops_use": false
    },
    {
      "what": "The tutor bubble ends with a repeated 'What happens to the current?' right after confirming the answer.",
      "screenshot": "20-exchange-30-phone.png",
      "stops_use": false
    },
    {
      "what": "The JUMP TO list shows 'Electric current' unticked while the later section 'Potential difference and resistance' is ticked.",
      "screenshot": "26-exchange-45-laptop.png",
      "stops_use": false
    }
  ],
  "would_quit": false,
  "fixes": [
    {
      "target": "Key-word gloss injection",
      "change": "Only gloss a term when it is a noun used in the current subject's sense. Restrict glossary lookups to the lesson's subject (Physics › Electricity), and skip verbs like 'works' and everyday words like 'normal'."
    },
    {
      "target": "Model feedback check (T85-type replies)",
      "change": "Validate the feedback against the key point facts and reject replies that contradict them (e.g. 'high resistance lets more current through'). For comparative questions, phrase the feedback relative to the comparison asked."
    },
    {
      "target": "Tutor reply post-processing",
      "change": "Strip or regenerate any reply that refers to the student in the third person ('she', 'he') or mentions requests she didn't make (T106)."
    },
    {
      "target": "Turn planner after a correct answer (T30)",
      "change": "Do not append a question that was just answered. Check the closing question against the previous tutor question and drop it if it duplicates that question."
    },
    {
      "target": "Progress counter / JUMP TO ticks",
      "change": "Mark key point 1 (Electric current) covered when its check (T23/T24) is answered, so the ticks and the 'n/7 covered' count advance in order."
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
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Welcome, it's lovely to have you here! What happens when you press the button on a torch to turn it on?
    [screenshot 06-ai-lesson-opening-phone.png and 06-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (try): umm the battery like powers it i think? and then the light comes on
    T1: The battery pushing it is a good start. Inside the wires, tiny particles carry something called charge, and the bulb lights when that charge drifts round together. What do you think would happen to the bulb if there were a gap in the wire?
    S2 (wrong): oh like the charge wouldnt be able to get through so the light would just stay off yeah
    T2: Yes, that's right. With a gap, the charge can't get round, so nothing lights. That flow of charge is called an electric current, and its size is how much charge passes a point each second, like counting runners passing a spot on a track.
      [S2 read as: answer (model)]
    S3 (tapped "Next")
    T3: Current is measured in amperes, or amps, and it tells you how much charge passes a point each second. So if more runners pass the spot each second, the current is bigger.
    [screenshot 07-exchange-3-phone.png and 07-exchange-3-laptop.png] exchange-3
      [S3 read as: button (code)]
    S4 (tapped "Next")
    T4: So a bigger current just means more charge getting past a point every second. Picture the track: if twice as many runners pass the spot each second, the current is twice as big. What would you say has happened to the current if only half as many runners pass the spot each second?
      [S4 read as: button (code)]
    S5 (try): it would be half as big i think? like half the runners so half the current
    T5: Yes, that's right. Half the runners, half the current: that's the idea, and the exam wording is "current is the rate of flow of charge". Current is measured in amperes (amps), and 1 ampere means 1 coulomb of charge passing each second.
      [S5 read as: answer (model)]
    S6 (tapped "Next")
    T6: One ampere means one coulomb of charge passing a point every second, and a coulomb is simply the unit we use to count charge.
    [screenshot 08-exchange-6-phone.png and 08-exchange-6-laptop.png] exchange-6
      [S6 read as: button (code)]
    S7 (tapped "Next")
    T7: Every torch, phone and kettle runs on something moving through its wires.
      [S7 read as: button (code)]
    S8 (tapped "Next")
    T8: The ampere is the unit of current, and 1 ampere means 1 coulomb of charge passing a point each second. So a bigger current means more charge passes every second.
      [S8 read as: button (code)]
    S9 (tapped "Next")
    T9: You cannot see charge, but you can see what it does. A complete loop is a closed circuit. Charge only flows round a closed circuit if it includes something to push it, such as a cell or a battery.
    [screenshot 09-exchange-9-phone.png and 09-exchange-9-laptop.png] exchange-9
      [S9 read as: button (code)]
    S10 (tapped "Next")
    T10: That push is called a potential difference, and the next key point explains it. Break the loop anywhere and the flow stops everywhere. A switch does this on purpose: it opens a gap in the loop.
      [S10 read as: button (code)]
      [T10 told piece: model, 36 words, key point 1]
    S11 (tapped "Next")
    T11: So it does not matter where you put the ammeter.
      [S11 read as: button (code)]
      [T11 told piece: model, 10 words, key point 1]
    S12 (tapped "Next")
    T12: Next comes the amount of charge that passes. It's called the charge flow, written Q, and it's counted in coulombs. To find it, multiply the current by the time in seconds.
    [screenshot 10-exchange-12-phone.png and 10-exchange-12-laptop.png] exchange-12
      [S12 read as: button (code)]
      [T12 told piece: model, 31 words, key point 1]
    S13 (tapped "Next")
    T13: Worked example: A current of 2 A flows through a lamp for 5 s. How much charge flows? Tap the button under it to see each step.
      [S13 read as: button (code)]
    S14 (try): so current is 2 amps and time is 5 seconds, so i multiply them? 2 times 5 is 10, so 10 coulombs?
    T14: Yes, that's right: 10 C.
    [diagram shown in the conversation under T14: "The same loop with an ammeter in it, measuring the current."]
    [screenshot 11-diagram-14-phone.png and 11-diagram-14-laptop.png] diagram-14
      [S14 read as: answer (model)]
    S15 (tapped "Next")
    T15: Your turn: A current of 100 mA flows for 600 s. How much charge flows, in coulombs (C)?
    [screenshot 12-exchange-15-phone.png and 12-exchange-15-laptop.png] exchange-15
      [S15 read as: button (code)]
    S16 (ask): wait so mA means like milliamps right? is that smaller than amps?
    T16: It's a tiny fraction of an amp, so the same current can be written as a smaller number in mA than in A. So if a lamp's current is written in mA, which unit would you need it in to use Q = I t?
      [S16 read as: question (model)]
    S17 (try): oh so i need to convert it to amps first? so 100 mA is like 0.1 amps? then 0.1 times 600 is 60 coulombs
    T17: Yes, that's right. Converting 100 mA to 0.1 amps first, then multiplying by the 600 seconds to get 60 coulombs, is exactly how to use Q = I t.
      [S17 read as: answer (model)]
    S18 (tapped "Next")
    T18: Back to the question: A current of 100 mA flows for 600 s. How much charge flows, in coulombs (C)?
    [screenshot 13-exchange-18-phone.png and 13-exchange-18-laptop.png] exchange-18
      [S18 read as: button (code)]
    S19 (try): so 100 mA is 0.1 amps, then i do 0.1 times 600 which is 60 coulombs
    T19: Yes, that's right: 60 C.
      [S19 read as: answer (model)]
    S20 (tapped "Next")
    T20: Predict first: answer the question below (3 questions, one at a time). Then a working circuit with two ammeters opens: you can add a cell or open and close the switch to check your answer. Tap Next when you are done.
      [S20 read as: button (code)]
    [widget under T20: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 1 works and matches its words — opened after the prediction true; ammeters 2 (words: two); controls match true; prediction first true
    [screenshot 14-widget-20-phone.png and 14-widget-20-laptop.png] widget-20
    S21 (tapped "Next")
    T21: In one line, in your own words: what is an electric current?
    [screenshot 15-exchange-21-phone.png and 15-exchange-21-laptop.png] exchange-21
      [S21 read as: button (code)]
    S22 (try): its like the flow of charge around a circuit, how much charge passes a point each second
    T22: Your line gets the key point right: current is a flow of charge, and you added how much passes a point each second, which is the rate. Nothing is missing or wrong.
    [predict-first widget shown under T22: "PREDICT FIRST (1 OF 3)"]
    [screenshot 16-widget-22-phone.png and 16-widget-22-laptop.png] widget-22
      [S22 read as: answer (model)]
    S23 (tapped "Next")
    T23: Quick question: You open the switch in a single loop. What happens to the current?
      [S23 read as: button (code)]
    S24 (try, tapped the button): It stops everywhere in the loop
    T24: Yes, that's right. Break the loop anywhere and the flow stops everywhere.
    [screenshot 17-exchange-24-phone.png and 17-exchange-24-laptop.png] exchange-24
      [S24 read as: button (code)]
    S25 (tapped "Next")
    T25: Connect a lamp to one cell and it glows dimly. Add a second cell and it glows brighter, because more current flows. The extra push that drives charge through the lamp is called the potential difference. If you swapped one cell for three cells, what would you expect the lamp to do?
      [S25 read as: button (code)]
    S26 (wrong): it would glow even brighter cuz theres more cells pushing the charge through
    T26: Yes, that's right. Bigger push, more current, so the lamp glows brighter. Potential difference is measured in volts (V) using a voltmeter, which is connected across the part you are testing.
    [diagram shown in the conversation under T26: "The same loop with a resistor added, and a voltmeter connected across the lamp."]
    [screenshot 18-diagram-26-phone.png and 18-diagram-26-laptop.png] diagram-26
      [S26 read as: answer (model)]
    S27 (tapped "Next")
    T27: A voltmeter is the meter that measures potential difference, and it is connected across the part you are testing, not in the loop itself. So it sits alongside a lamp, checking the push across that lamp.
    [screenshot 19-exchange-27-phone.png and 19-exchange-27-laptop.png] exchange-27
      [S27 read as: button (code)]
    S28 (tapped "Next")
    T28: Say you want to check the push across a lamp. You'd attach the voltmeter's two ends on either side of that lamp, so the lamp sits between them. If you wanted to know the potential difference across a resistor instead, where would you connect the voltmeter?
      [S28 read as: button (code)]
    S29 (try): i'd connect it on either side of the resistor so the resistor sits between the two ends
    T29: Yes, that's right. Across the resistor, exactly. The push is only half the story: resistance is how much a component opposes the current, measured in ohms (Ω). With the same push, what happens to the current if you add a resistor with a bigger resistance?
      [S29 read as: answer (model)]
    S30 (try): if the resistance is bigger it would oppose the current more so the current would get smaller
    T30: Yes, that's right. Bigger resistance means a smaller current — that matches the exam wording: for a fixed potential difference, a bigger resistance means a smaller current. The unit of resistance is the ohm (Ω), and a lamp, a resistor or any other part of a circuit is called a component. What happens to the current?
    [screenshot 20-exchange-30-phone.png and 20-exchange-30-laptop.png] exchange-30
      [S30 read as: answer (model)]
    S31 (wrong): um so if you increase the resistance the current gets bigger cuz theres more resistance to push against
    T31: Not quite. More resistance makes the current smaller, not bigger. For the same potential difference, a bigger resistance means a smaller current, because the component makes it harder for charge to get through.
      [S31 read as: answer (model)]
    S32 (tapped "Next")
    T32: So the size of a current depends on two things.
      [S32 read as: button (code)]
      [T32 told piece: model, 10 words, key point 2]
    S33 (tapped "Next")
    T33: People often call potential difference "voltage".
    [screenshot 21-exchange-33-phone.png and 21-exchange-33-laptop.png] exchange-33
      [S33 read as: button (code)]
      [T33 told piece: model, 6 words, key point 2]
    S34 (tapped "Next")
    T34: If you know any two of them, you can rearrange it to find the third.
      [S34 read as: button (code)]
      [T34 told piece: model, 15 words, key point 2]
    S35 (tapped "Next")
    T35: Worked example: A current of 2 A flows through a 3 Ω resistor. What is the potential difference across it? Tap the button under it to see each step.
      [S35 read as: button (code)]
    S36 (try): so i use V = I R, thats 2 times 3 which is 6 volts
    T36: Yes, that's right: 6 V.
    [screenshot 22-exchange-36-phone.png and 22-exchange-36-laptop.png] exchange-36
      [S36 read as: answer (model)]
    S37 (tapped "Next")
    T37: Your turn: A potential difference of 5 V is put across a 50 Ω resistor. What is the current through it, in amperes (A)?
      [S37 read as: button (code)]
    S38 (wrong): so i do V equals I R, so 5 equals I times 50, then I is 5 divided by 50 which is 0.1 A
    T38: Yes, that's right: 0.1 A.
      [S38 read as: answer (model)]
    S39 (tapped "Next")
    T39: Predict first: answer the question below (3 questions, one at a time). Then a working circuit with an ammeter and a voltmeter opens: you can add a cell, put the resistor in or take it out or move it to check your answer. Tap Next when you are done.
    [screenshot 23-exchange-39-phone.png and 23-exchange-39-laptop.png] exchange-39
      [S39 read as: button (code)]
    [widget under T39: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 2 works and matches its words — opened after the prediction true; ammeters 1 (words: one); controls match true; prediction first true
    [screenshot 24-widget-39-phone.png and 24-widget-39-laptop.png] widget-39
    S40 (tapped "Next")
    T40: In one line: what do potential difference and resistance each do to the current?
      [S40 read as: button (code)]
    S41 (wrong): potential difference makes the current bigger but resistance makes it smaller i think
    T41: Your line gets both points: potential difference is the push that drives the current, so more of it makes the current bigger, and a bigger resistance means a smaller current. Nothing is missing or wrong here.
      [S41 read as: answer (model)]
    S42 (tapped "Next")
    T42: Quick question: Where do you put an ammeter to measure the current in a single loop?
    [screenshot 25-exchange-42-phone.png and 25-exchange-42-laptop.png] exchange-42
      [S42 read as: button (code)]
    S43 (wrong, tapped the button): across the cell
    T43: Not quite: it's "Anywhere in the loop". In a single loop the current is the same at every point.
      [S43 read as: button (code)]
    S44 (tapped "Next")
    T44: Before the practical, question 1 of 2: What does an ammeter measure?
      [S44 read as: button (code)]
    [counter now "1/7 covered" after T44]
    S45 (ask): so like is the ammeter the one that measures how much charge is flowing through
    T45: Yes, that's right. An ammeter measures the current through a component.
    [screenshot 26-exchange-45-phone.png and 26-exchange-45-laptop.png] exchange-45
      [S45 read as: answer (model)]
    S46 (tapped "Next")
    T46: Before the practical, question 2 of 2: You know the potential difference across a component and the current through it. How do you find its resistance?
      [S46 read as: button (code)]
    S47 (wrong, tapped the button): Divide the current by the potential difference
    T47: Not quite: it's "Divide the potential difference by the current". Resistance = potential difference ÷ current, from V = I R.
      [S47 read as: button (code)]
    S48 (tapped "Next")
    T48: A quick recap. An ammeter measures the current through a component. A voltmeter measures the potential difference across it. Resistance = potential difference ÷ current.
    [screenshot 27-exchange-48-phone.png and 27-exchange-48-laptop.png] exchange-48
      [S48 read as: button (code)]
    S49 (tapped "Next")
    T49: In this practical, a long wire is clipped along a metre ruler and joined to a cell, with an ammeter placed in the same loop, one after another with the wire.
      [S49 read as: button (code)]
    S50 (tapped "Next")
    T50: "In series" means one after another in the same loop, so the same current flows through each.
      [S50 read as: button (code)]
    S51 (tapped "Next")
    T51: The voltmeter goes somewhere different: it is connected across the wire, side by side with it, not in the loop. That is called being "in parallel", and it lets the voltmeter measure the potential difference across the wire. Which meter is connected in series with the wire?
    [screenshot 28-exchange-51-phone.png and 28-exchange-51-laptop.png] exchange-51
      [S51 read as: button (code)]
    S52 (try): the ammeter is in series with the wire
    T52: Yes, that's right. The ammeter in series is right: it sits in the loop, one after another with the wire. The voltmeter is in parallel, side by side across the same two ends of the wire. If you connected the voltmeter in series instead, in the loop, what would be wrong with where it sits?
      [S52 read as: answer (model)]
    S53 (try): it would break the loop or mess up the current i think
    T53: Yes, that's right. Breaking the loop is right: a voltmeter in series sits in the loop, so it is not measuring across the wire. Next, keep the wire at a "constant temperature", meaning its temperature stays the same throughout the measurements. Why might a wire that heats up give you unreliable readings?
      [S53 read as: answer (model)]
    S54 (try): because if it gets hotter the resistance might change so the readings would be wrong
    T54: Yes, that's right. A hotter wire changes its resistance, so the readings would be wrong. That is why you keep the current small and switch off between readings, so the wire stays at a constant temperature.
    [screenshot 29-exchange-54-phone.png and 29-exchange-54-laptop.png] exchange-54
      [S54 read as: answer (model)]
    S55 (tapped "Next")
    T55: Heaters, leads and the coils inside motors all use wire, so engineers need to know how a wire's length changes its resistance. That is why this practical measures it: you change the length of the wire, then measure its resistance each time.
      [S55 read as: button (code)]
      [T55 told piece: model, 42 words, key point 3]
    S56 (tapped "Next")
    T56: Once you have your first reading, you move one clip along the wire to change its length, then repeat the measurements. Each new length gives you a new set of readings.
      [S56 read as: button (code)]
      [T56 told piece: model, 31 words, key point 3]
    S57 (tapped "Next")
    T57: There is also a safety point. One cell's low potential difference gives no risk of an electric shock.
    [screenshot 30-exchange-57-phone.png and 30-exchange-57-laptop.png] exchange-57
      [S57 read as: button (code)]
      [T57 told piece: model, 18 words, key point 3]
    S58 (tapped "Next")
    T58: Once you have your results, plot resistance against length on a graph. The points lie on a straight line through the origin.
      [S58 read as: button (code)]
      [T58 told piece: model, 22 words, key point 3]
    S59 (tapped "Next")
    T59: Worked example: A length of the wire has a potential difference of 1.5 V across it and a current of 0.3 A through it. What is its resistance? Tap the button under it to see each step.
      [S59 read as: button (code)]
    S60 (try): resistance equals potential difference divided by current so 1.5 divided by 0.3 equals 5 ohms
    T60: Yes, that's right: 5 Ω.
    [screenshot 31-exchange-60-phone.png and 31-exchange-60-laptop.png] exchange-60
      [S60 read as: answer (model)]
    S61 (tapped "Next")
    T61: Your turn: A component has a potential difference of 24 V across it and a current of 3 A through it. What is its resistance, in ohms (Ω)?
      [S61 read as: button (code)]
    S62 (try): so 24 divided by 3 equals 8 ohms
    T62: Yes, that's right: 8 Ω.
      [S62 read as: answer (model)]
    S63 (tapped "Next")
    T63: In one line: how does the length of a wire change its resistance?
    [screenshot 32-exchange-63-phone.png and 32-exchange-63-laptop.png] exchange-63
      [S63 read as: button (code)]
    S64 (wrong): longer wires have less resistance because theyre thinner
    T64: Not quite. Your line has it backwards: a longer wire has a bigger resistance, not less. The reason you gave, "because they're thinner", is also wrong, since the question is about length, not thickness.
      [S64 read as: answer (model)]
    S65 (tapped "Next")
    T65: Quick question: In the resistance-of-a-wire practical, why does one cell give no risk of an electric shock?
      [S65 read as: button (code)]
    S66 (try, tapped the button): Its potential difference is low
    T66: Yes, that's right. A low potential difference means no risk of an electric shock. The wire can still get hot, so keep the current small.
    [screenshot 33-exchange-66-phone.png and 33-exchange-66-laptop.png] exchange-66
      [S66 read as: button (code)]
    S67 (tapped "Next")
    T67: To test a component, you measure the current through it at several potential differences, then plot the readings as a graph. Current goes up the side and potential difference goes along the bottom, and this graph is called an I-V characteristic.
      [S67 read as: button (code)]
    S68 (tapped "Next")
    T68: For a resistor at constant temperature, the I-V graph is a straight line through the origin, so doubling the potential difference doubles the current.
      [S68 read as: button (code)]
    S69 (tapped "Next")
    T69: A straight line through the origin means the resistance isn't changing. A component that behaves this way is called an ohmic conductor, so one fixed value of R works in V = I R.
    [screenshot 34-exchange-69-phone.png and 34-exchange-69-laptop.png] exchange-69
      [S69 read as: button (code)]
    S70 (tapped "Next")
    T70: An I-V characteristic is a graph for one component, with current up the side and potential difference along the bottom. Each point on it is one pair of readings you measured.
      [S70 read as: button (code)]
    S71 (tapped "Next")
    T71: For a resistor at constant temperature, the points on an I-V characteristic lie on a straight line through the origin. That means if you double the potential difference, the current doubles too. If the potential difference across the resistor is tripled, what happens to the current?
      [S71 read as: button (code)]
    S72 (try): it triples too because the line goes straight through the origin
    T72: Yes, that's right. Tripling the potential difference triples the current, because the line goes straight through the origin. In the exam, that's called being directly proportional: when one quantity doubles, the other doubles too, and the graph is a straight line through the origin. If the potential difference is halved, what happens to the current?
    [screenshot 35-exchange-72-phone.png and 35-exchange-72-laptop.png] exchange-72
      [S72 read as: answer (model)]
    S73 (wrong): it stays the same because you only changed the potential difference not the current
    T73: Not quite. Changing the potential difference is exactly what changes the current, because they move together. On the graph, the straight line through the origin means that when the potential difference goes down, the current goes down by the same factor. On that same graph, what stays the same for the resistor as the current changes?
      [S73 read as: answer (model)]
    S74 (try): the resistance stays the same because its a straight line through the origin
    T74: Yes, that's right. The resistance staying fixed is right, and the exam wording is that it stays constant. A component like that is an ohmic conductor, so V = I R uses one fixed value of R.
      [S74 read as: answer (model)]
    S75 (tapped "Next")
    T75: An ohmic conductor is any component whose resistance stays constant at constant temperature, so its I-V graph is a straight line through the origin. If a component's graph was a curve instead, what would that tell you about its resistance?
    [screenshot 36-exchange-75-phone.png and 36-exchange-75-laptop.png] exchange-75
      [S75 read as: button (code)]
    S76 (try): the resistance would be changing because its not a straight line
    T76: Yes, that's right. A curved line means the resistance is changing, because only a straight line through the origin gives a steady, constant resistance.
      [S76 read as: answer (model)]
    S77 (tapped "Next")
    T77: In one line: what does a straight-line I-V graph through the origin tell you?
      [S77 read as: button (code)]
    S78 (wrong): it tells you the resistance is constant and the component is ohmic
    T78: Your line gets two points right: the resistance stays the same, and the component is an ohmic conductor. What's missing is that the current is directly proportional to the potential difference, which is what the straight line through the origin shows.
    [screenshot 37-exchange-78-phone.png and 37-exchange-78-laptop.png] exchange-78
      [S78 read as: answer (model)]
    S79 (tapped "Next")
    T79: Quick question: For an ohmic conductor, you double the potential difference. What happens to the current?
      [S79 read as: button (code)]
    S80 (ask): wait so if the potential difference doubles then the current has to double too right
    T80: Yes, that's right. The current is directly proportional to the potential difference, so it doubles too.
      [S80 read as: answer (model)]
    S81 (tapped "Next")
    T81: Good place for a break. Your place is saved.
    [screenshot 38-exchange-81-phone.png and 38-exchange-81-laptop.png] exchange-81
      [S81 read as: button (code)]
    [counter now "2/7 covered" after T81]
    S82 (tapped "Keep going")
    T82: Not every component gives a straight-line graph. An old-style bulb has a thin coil of metal wire inside, called a filament lamp, and the filament glows white-hot as more current flows through it. What do you think happens to the filament's resistance as it gets hotter?
    S83 (try): i think the resistance increases because when it gets hotter the wire resists more
    T83: Yes, that's right. Your reasoning matches the exam wording: as a filament lamp gets hotter, its resistance increases. A diode lets current flow in one direction only, and in the reverse direction its resistance is very high. If a diode is turned the wrong way round in a circuit, why would the lamp barely light?
      [S83 read as: answer (model)]
    S84 (wrong): because the current cant flow through it so theres barely any current
    T84: Partly right. It's true that hardly any current flows, but it doesn't flow zero. The diode doesn't block everything: its resistance is very high in the reverse direction, so a very small current still gets through. If that resistance were only a bit higher than normal, rather than very high, what would you expect the lamp to do?
    [screenshot 39-exchange-84-phone.png and 39-exchange-84-laptop.png] exchange-84
      [S84 read as: answer (model)]
    S85 (try): the lamp would be brighter because more current would flow through
    T85: Yes, that's right. Idea: a very high resistance lets more current through than usual, so the lamp would be brighter. Gradient means how steep a line on a graph is, and a flatter line has a smaller gradient.
      [S85 read as: answer (model)]
    S86 (tapped "Next")
    T86: On a filament lamp's graph, the line bends over and gets flatter as the current rises, so its gradient decreases. That happens because the filament gets hotter, and its resistance increases with temperature.
      [S86 read as: button (code)]
    S87 (tapped "Next")
    T87: On a flat part of a graph, the line has a small gradient. For a filament lamp, a smaller gradient means each extra volt pushes through only a little extra current. Imagine the filament getting even hotter. What would happen to the line's steepness there?
    [screenshot 40-exchange-87-phone.png and 40-exchange-87-laptop.png] exchange-87
      [S87 read as: button (code)]
    S88 (wrong): the line would get steeper because the filament is hotter so it pushes more current through
    T88: Not quite. The line would get flatter, not steeper. A hotter filament has a higher resistance, so each extra volt pushes through even less extra current.
      [S88 read as: answer (model)]
    S89 (tapped "Next")
    T89: The filament lamp isn't the only component that gives a curve. Not every component gives a straight line on its graph. Some give curves, and the shapes tell you what is happening inside them.
      [S89 read as: button (code)]
      [T89 told piece: model, 34 words, key point 5]
    S90 (tapped "Next")
    T90: A diode's graph looks different again. On the reverse side, the line lies flat along the axis. On the forward side, it stays near zero at first, then rises steeply.
    [screenshot 41-exchange-90-phone.png and 41-exchange-90-laptop.png] exchange-90
      [S90 read as: button (code)]
      [T90 told piece: model, 30 words, key point 5]
    S91 (tapped "Next")
    T91: To find the resistance at one point on one of these graphs, read off the potential difference (V) and the current (I) at that point. Then divide V by I.
      [S91 read as: button (code)]
      [T91 told piece: model, 30 words, key point 5]
    S92 (tapped "Next")
    T92: Predict first: answer the question below (4 questions, one at a time). Then a graph opens: you can drag the point along it to check your answer. Tap Next when you are done.
      [S92 read as: button (code)]
    [widget under T92: prediction "A 10 Ω resistor is kept at a constant temperature. You double the potential diff" tapped; then shown: yes, ammeters 0, controls Resistor, Filament lamp, Diode]
    [check] OK: predict-first widget 3 works and matches its words — opened after the prediction true; ammeters 0 (words: -); controls match true; prediction first true
    [screenshot 42-widget-92-phone.png and 42-widget-92-laptop.png] widget-92
    S93 (tapped "Next")
    T93: In one line: how are a filament lamp and a diode different from a resistor?
    [screenshot 43-exchange-93-phone.png and 43-exchange-93-laptop.png] exchange-93
      [S93 read as: button (code)]
    S94 (try): their resistance changes but a resistor stays the same
    T94: Your line gets the key contrast: a resistor stays the same, while these two change. Missing: their I-V graphs are not straight lines, a filament lamp's resistance increases as it gets hotter, and a diode lets current flow one way only.
      [S94 read as: answer (model)]
    S95 (tapped "Next")
    T95: Quick question: Which component lets current flow in one direction only?
      [S95 read as: button (code)]
    S96 (try, tapped the button): A diode
    T96: Yes, that's right. A diode has a very high resistance in the reverse direction.
    [screenshot 44-exchange-96-phone.png and 44-exchange-96-laptop.png] exchange-96
      [S96 read as: button (code)]
    S97 (tapped "Next")
    T97: Before the practical, question 1 of 2: Which meter goes in parallel across the component you are testing?
      [S97 read as: button (code)]
    [counter now "3/7 covered" after T97]
    S98 (try, tapped the button): The voltmeter
    T98: Yes, that's right. The voltmeter measures the potential difference across the component.
      [S98 read as: button (code)]
    S99 (tapped "Next")
    T99: Before the practical, question 2 of 2: What does a straight-line I-V graph through the origin show?
    [screenshot 45-exchange-99-phone.png and 45-exchange-99-laptop.png] exchange-99
      [S99 read as: button (code)]
    S100 (wrong, tapped the button): Current flows one way only
    T100: Not quite: it's "The resistance stays the same". A straight line through the origin means a constant resistance: an ohmic conductor.
      [S100 read as: button (code)]
    S101 (tapped "Next")
    T101: A quick recap. The ammeter goes in series. The voltmeter goes in parallel across the component. An I-V graph plots current against potential difference. A straight line through the origin means the resistance stays the same.
      [S101 read as: button (code)]
    S102 (tapped "Next")
    T102: In the practical, you build a circuit with a cell, the component you're testing, an ammeter and a voltmeter. You also add a variable resistor, a resistor with a slider that lets you change its resistance, so the current changes as you move it. What do you think you'd get by moving the slider and recording the readings each time?
    [screenshot 46-exchange-102-phone.png and 46-exchange-102-laptop.png] exchange-102
      [S102 read as: button (code)]
    S103 (try): you'd get different currents and voltages so you can plot them on a graph
    T103: Yes, that's right. Plotting those readings is exactly what the method needs. When the points make a straight-line graph, the component is called linear; any other shape is called non-linear. A resistor at constant temperature gives a straight line, so which word describes its graph?
      [S103 read as: answer (model)]
    S104 (try): linear
    T104: Yes, that's right. "Linear" is right: a straight-line graph is called linear. Any other shape is non-linear, like the curve of a filament lamp or the graph of a diode.
      [S104 read as: answer (model)]
    S105 (tapped "Next")
    T105: Any graph that isn't a straight line is non-linear, and the filament lamp and the diode both give graphs like this.
    [screenshot 47-exchange-105-phone.png and 47-exchange-105-laptop.png] exchange-105
      [S105 read as: button (code)]
    S106 (tapped "Next")
    T106: Since she's asked to move on, here's the last bit: non-linear means the graph is not a straight line, and a diode is useful because it can stop current flowing the wrong way.
      [S106 read as: button (code)]
    S107 (tapped "Next")
    T107: Picture a graph where the line bends like a curve instead of running straight. That's non-linear. If you tested a different component and its graph came out as a curve, what would you call that component?
      [S107 read as: button (code)]
    S108 (try): non-linear
    T108: Yes, that's right. Non-linear is right: a component whose graph is a curve, not a straight line, is non-linear. The filament lamp and the diode are both examples.
    [screenshot 48-exchange-108-phone.png and 48-exchange-108-laptop.png] exchange-108
      [S108 read as: answer (model)]
    S109 (tapped "Next")
    T109: Exam questions often ask you to describe how to get these graphs, so it is worth knowing the method step by step.
      [S109 read as: button (code)]
      [T109 told piece: model, 22 words, key point 6]
    S110 (tapped "Next")
    T110: A variable resistor (also called a rheostat), a resistor you can adjust with a slider, is in the loop too.
      [S110 read as: button (code)]
      [T110 told piece: model, 20 words, key point 6]
    S111 (tapped "Next")
    T111: Another way to get a range of readings is to change the number of cells, or use a supply whose potential difference you can set.
    [screenshot 49-exchange-111-phone.png and 49-exchange-111-laptop.png] exchange-111
      [S111 read as: button (code)]
      [T111 told piece: model, 25 words, key point 6]
    S112 (tapped "Next")
    T112: Take repeat readings and find the mean. To get the other half of the graph, turn the component round and repeat; these readings count as negative. The lamp gets very hot, so do not touch it.
      [S112 read as: button (code)]
      [T112 told piece: model, 36 words, key point 6]
    S113 (tapped "Next")
    T113: In one line: how do you take the readings for an I-V graph?
      [S113 read as: button (code)]
    S114 (try): you change the variable resistor and record the current and voltage each time
    T114: Your line gets the second point right: you change the current with a variable resistor, then record the current and voltage each time. What's missing is the first point: the ammeter goes in series, and the voltmeter goes in parallel.
    [screenshot 50-exchange-114-phone.png and 50-exchange-114-laptop.png] exchange-114
      [S114 read as: answer (model)]
    S115 (tapped "Next")
    T115: Quick question: In the I-V practical, what is the variable resistor for?
      [S115 read as: button (code)]
    S116 (try, tapped the button): To change the current
    T116: Yes, that's right. Moving its slider changes the current, so you get a range of readings.
      [S116 read as: button (code)]
    S117 (tapped "Next")
    T117: When a lamp lights up, the charge flowing through it is handing over energy to it. This is called "work done": energy passed from the charge to the component. What do you think a heater does with the energy it receives?
    [screenshot 51-exchange-117-phone.png and 51-exchange-117-laptop.png] exchange-117
      [S117 read as: button (code)]
    S118 (ask): so like does the energy turn into heat
    T118: Yes, that's right. The energy passed on as charge flows through a component is called the "energy transferred", and it's measured in joules (J). A cell gave the charge that energy in the first place.
      [S118 read as: answer (model)]
    S119 (tapped "Next")
    T119: A cell does more than push charge round a circuit. It gives energy to the charge, and the charge hands that energy over in the components: lighting a lamp, warming a heater, turning a motor.
      [S119 read as: button (code)]
    S120 (tapped "Next")
    T120: Energy transferred is what's left in the component after the charge has passed through: the heater's warmth, the lamp's light. If the same charge flowed through a heater and a lamp, what would the cell have had to give the charge in the first place?
    [screenshot 52-exchange-120-phone.png and 52-exchange-120-laptop.png] exchange-120
      [S120 read as: button (code)]
    S121 (try): the same energy because its the same charge
    T121: Not quite. The cell gave the charge its energy, and the components take it. A lamp and a heater only get energy the charge was carrying.
      [S121 read as: answer (model)]
    S122 (tapped "Next")
    T122: Energy is measured in joules (J). A potential difference of 1 volt means 1 joule is transferred for each coulomb of charge that passes. So 12 V means 12 joules for every coulomb.
      [S122 read as: button (code)]
    S123 (tapped "Next")
    T123: Energy transferred is the energy passed on to a component as charge flows through it, and it is measured in joules (J). So the more energy a component gets, the more heat or light it gives out. If a heater had a higher potential difference across it, what would happen to the energy each coulomb transfers there?
    [screenshot 53-exchange-123-phone.png and 53-exchange-123-laptop.png] exchange-123
      [S123 read as: button (code)]
    S124 (wrong): it would transfer less energy cos the voltage is higher
    T124: Not quite. A higher potential difference means each coulomb transfers more energy, not less.
      [S124 read as: answer (model)]
    S125 (tapped "Next")
    T125: Energy transferred is the energy the charge passes on to a component, and the potential difference tells you how much each coulomb passes on.
      [S125 read as: button (code)]
    S126 (tapped "Next")
    T126: If you are given a current and a time instead of a charge, find the charge first with Q = I t.
    [screenshot 54-exchange-126-phone.png and 54-exchange-126-laptop.png] exchange-126
      [S126 read as: button (code)]
      [T126 told piece: model, 22 words, key point 7]
    S127 (tapped "Next")
    T127: Worked example: 3 C of charge flows through a potential difference of 6 V. How much energy is transferred? Tap the button under it to see each step.
      [S127 read as: button (code)]
    S128 (try): energy transferred equals charge times potential difference so 3 times 6 equals 18 joules
    T128: Yes, that's right: 18 J.
      [S128 read as: answer (model)]
    S129 (tapped "Next")
    T129: Your turn: 90 J of energy is transferred when 10 C of charge flows through a component. What is the potential difference across it, in volts (V)?
    [screenshot 55-exchange-129-phone.png and 55-exchange-129-laptop.png] exchange-129
      [S129 read as: button (code)]
    S130 (try): so energy transferred equals charge times potential difference so 90 equals 10 times potential difference so potential difference equals 90 divided by 10 which is 9 volts
    T130: Yes, that's right: 9 V.
      [S130 read as: answer (model)]
    S131 (tapped "Next")
    T131: Predict first: answer the question below. Then a working circuit with an ammeter opens: you can put the resistor in or take it out or run it for 10 seconds to check your answer. Tap Next when you are done.
      [S131 read as: button (code)]
    [widget under T131: prediction "A torch cell goes flat after a few hours. What has it run out of?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Take the resistor out, Run for 10 s, Start again]
    [check] OK: predict-first widget 4 works and matches its words — opened after the prediction true; ammeters 1 (words: one); controls match true; prediction first true
    [screenshot 56-widget-131-phone.png and 56-widget-131-laptop.png] widget-131
    S132 (tapped "Next")
    T132: In one line: what does a potential difference of 1 volt mean?
    [screenshot 57-exchange-132-phone.png and 57-exchange-132-laptop.png] exchange-132
      [S132 read as: button (code)]
    S133 (wrong): it means 1 joule of energy for each coulomb of charge
    T133: Your line gets both points: 1 joule of energy is transferred, and it's for each coulomb of charge that passes. Nothing is missing or wrong, so that's a good, complete one-line answer.
      [S133 read as: answer (model)]
    S134 (tapped "Next")
    T134: Quick question: When charge flows through a component, what happens?
      [S134 read as: button (code)]
    S135 (try, tapped the button): Work is done: energy is transferred
    T135: Yes, that's right. Energy is transferred from the charge to the component. The charge is not used up.
    [screenshot 58-exchange-135-phone.png and 58-exchange-135-laptop.png] exchange-135
      [S135 read as: button (code)]
    S136 (tapped "Next")
    T136: Quiz, question 1 of 8: What is electric current?
      [S136 read as: button (code)]
    [counter now "4/7 covered" after T136]
    S137 (try, tapped the button): The rate of flow of charge
    T137: Yes, that's right. Current is how much charge passes a point each second.
    S138 (tapped "Next")
    T138: Quiz, question 2 of 8: A component has a potential difference of 150 V across it and a current of 3 A through it. What is its resistance, in ohms (Ω)?
    [screenshot 59-exchange-138-phone.png and 59-exchange-138-laptop.png] exchange-138
    S139 (try): i dont think weve done resistance yet
    T139: Fair enough. Back to the question: A component has a potential difference of 150 V across it and a current of 3 A through it. What is its resistance, in ohms (Ω)?
    S140 (wrong): potential difference divided by current so 150 divided by 3 equals 50 ohms
    T140: Yes, that's right: 50 Ω.
    S141 (tapped "Next")
    T141: Quiz, question 3 of 8: Which equation links charge flow, current and time?
    [screenshot 60-exchange-141-phone.png and 60-exchange-141-laptop.png] exchange-141
    S142 (wrong, tapped the button): Q = I ÷ t
    T142: Not quite: it's "Q = I t". Charge flow = current × time. A correct rearrangement also scores, but write only one version.
    S143 (tapped "Next")
    T143: Quiz, question 4 of 8: What does the I-V characteristic of an ohmic conductor look like?
    S144 (try, tapped the button): A straight line through the origin
    T144: Yes, that's right. Its current is directly proportional to the potential difference.
    [screenshot 61-exchange-144-phone.png and 61-exchange-144-laptop.png] exchange-144
    S145 (tapped "Next")
    T145: Quiz, question 5 of 8: Why does a filament lamp's I-V graph curve?
    S146 (try, tapped the button): Its resistance increases as it gets hotter
    T146: Yes, that's right. A hotter filament has a bigger resistance, so the line gets flatter.
    S147 (tapped "Next")
    T147: Quiz, question 6 of 8: In the I-V practical, how is the voltmeter connected?
    [screenshot 62-exchange-147-phone.png and 62-exchange-147-laptop.png] exchange-147
    S148 (wrong, tapped the button): In series with the component
    T148: Not quite: it's "In parallel across the component". It measures the potential difference across the component.
    S149 (tapped "Next")
    T149: Quiz, question 7 of 8: 920 J of energy is transferred when 4 C of charge flows through a component. What is the potential difference across it, in volts (V)?
    S150 (wrong): so energy divided by charge is 920 divided by 4 which is 230 volts
    T150: Yes, that's right: 230 V.
    [screenshot 63-exchange-150-phone.png and 63-exchange-150-laptop.png] exchange-150
    S151 (tapped "Next")
    T151: Quiz, question 8 of 8: At constant temperature, what happens to a wire's resistance as its length increases?
    S152 (try, tapped the button): It increases
    T152: Yes, that's right. A longer wire has a bigger resistance.
    S153 (tapped "Next")
    T153: That's the end of the quiz: you got 6 out of 8.
    [screenshot 64-exchange-153-phone.png and 64-exchange-153-laptop.png] exchange-153
    S154 (tapped "Next")
    T154: One last thing: shall we make revision cards from this lesson? They go in your card deck, so you can test yourself later.
    S155 (tapped "Make my revision cards")
    T155: Done: this lesson's revision cards are in your card deck. You'll find them under Cards on the home page.
    S156 (tapped "Next")
    T156: You got 6 out of 8 in the end quiz, which is a solid result.
    [screenshot 65-exchange-156-phone.png and 65-exchange-156-laptop.png] exchange-156
    S157 (wrong): thanks that was pretty good i guess
    T157: Glad it helped. You can come back to this lesson any time to go over the parts you answered fewer questions on, and your revision cards are ready whenever you want to test yourself. Good luck with the rest of your revision!
    [the lesson shows "Lesson finished."]
    [screenshot 66-end-phone.png and 66-end-laptop.png] end
    [tutor-side time: 16.0 minutes over 157 exchanges]
