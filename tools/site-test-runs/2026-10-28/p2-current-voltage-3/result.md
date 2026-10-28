# Site test: p2-current-voltage (lesson, 2026-10-28)

**FAIL** · cost $2.1489 (62 tool calls, 358 calls from the site; tutor claude-sonnet-5-5 $1.6236)

## Judge

```json
{
  "broken": [
    {
      "what": "The student asked a real question ('does the charge lose energy when it goes through the lamp?'). The tutor answered 'Ha, I get that. Back to the question' and never answered it. That is the core idea of the energy-transferred section.",
      "step": "S112/T112"
    },
    {
      "what": "The tutor re-asked a question the student had just answered correctly. After S77 ('the resistance increases because it gets hotter') was accepted, T78 asked the same question again. The student then changed to a wrong answer (S79).",
      "step": "T78"
    },
    {
      "what": "Non-sequitur in the practical explanation. 'That keeps it at a constant temperature' follows a sentence about the voltmeter touching both ends of the wire. A voltmeter does not keep the wire's temperature constant.",
      "step": "T49"
    },
    {
      "what": "The end recap lists the wrong topics. The student missed quiz Q4 (ohmic conductor graph) and Q8 (wire length and resistance). The recap instead names filament lamps and diodes and energy transferred, which were answered correctly. It never says which ones were missed.",
      "step": "T145"
    },
    {
      "what": "A vague answer was accepted as right. 'The light getting brighter' was accepted, but brightness changing is not what shows charge is flowing: the bulb lighting at all is.",
      "step": "S2/T2"
    },
    {
      "what": "The same fact (1 A = 1 coulomb per second) is told five times in a row with only Next taps and no new content.",
      "step": "T4, T6, T7, T8, T9"
    },
    {
      "what": "A worked example says 'Tap the button under it to see each step', but the typed answer was marked without the steps being shown. The steps were never offered after a correct answer.",
      "step": "T14/T15, T55/T56, T117/T118"
    }
  ],
  "looks_wrong": [
    {
      "what": "On phone the chat does not scroll to the newest reply. The diagram and the T12 text fill the screen, and the student's answer and 'Yes, that's right: 10 C' are off screen below.",
      "screenshot": "12-exchange-15-phone.png",
      "stops_use": false
    },
    {
      "what": "Filament lamp and diode graphs are too small on phone. Axis labels and the captions under each graph ('The line gets flatter as the filament heats up...', 'Almost no current the reverse way...') can't be read without zooming.",
      "screenshot": "40-exchange-87-phone.png",
      "stops_use": false
    },
    {
      "what": "In the diagram the 'voltmeter' label is small and squeezed against the right edge next to the V symbol.",
      "screenshot": "18-diagram-25-phone.png",
      "stops_use": false
    },
    {
      "what": "The sticky 'Start this topic over' link sits on top of the scrolled chat, overlapping the term chips row.",
      "screenshot": "39-exchange-84-laptop.png",
      "stops_use": false
    },
    {
      "what": "The sidebar 'JUMP TO' heading is cut off at the top. The Key Terms list is cut off and faded at the bottom with no sign it scrolls.",
      "screenshot": "17-exchange-24-laptop.png",
      "stops_use": false
    },
    {
      "what": "The second predict-first widget is labelled 'PREDICT FIRST (1 OF 3)', the same as the first widget, so the count is confusing.",
      "screenshot": "23-widget-37-phone.png",
      "stops_use": false
    }
  ],
  "would_quit": false,
  "fixes": [
    {
      "target": "tutor behaviour for 'ask' turns (S112)",
      "change": "Answer the student's question in 1–2 sentences first (e.g. 'Yes, the charge transfers energy to the lamp but the charge itself isn't used up'), then return to the pending question."
    },
    {
      "target": "tutor behaviour after a side-question gets answered (T76–T78)",
      "change": "If the student's reply to the clarifying follow-up already answers the pending question, mark it answered and move on. Do not send 'Back to my question'."
    },
    {
      "target": "T49 text (key point 3 practical)",
      "change": "Replace 'That keeps it at a constant temperature' with 'Keep the current small so the wire stays at a constant temperature'."
    },
    {
      "target": "end summary T145",
      "change": "Build the recap from the questions answered wrong (Q4 ohmic conductor I-V graph, Q8 wire length and resistance) and name those as the ones to revisit."
    },
    {
      "target": "key point 1 told pieces T6–T9 and chat autoscroll on phone",
      "change": "Merge the four repeats of '1 A = 1 C per second' into one line. Scroll the phone chat to the newest message after a diagram is inserted."
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
    T0: Welcome, it's lovely to have you here! When you press the button on a torch and the light comes on, what do you think is happening to make it work?
    [screenshot 06-ai-lesson-opening-phone.png and 06-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (try): umm the battery like powers it? the electricity goes through the bulb and makes it light up
    T1: You're right that something goes through the wire to the bulb. That something is tiny charged particles in the metal wire, called electric charge, and they all drift round together when you press the button. Since you can't see charge, what could you see that shows it's flowing?
    S2 (wrong): the light getting brighter? like you can see the bulb lighting up so thats how you know the charge is moving
    T2: Yes, that's right. The bulb lighting up is what shows the charge is flowing. This flow of charge has a name: electric current, and its size is how much charge passes a point each second.
      [S2 read as: answer (model)]
    S3 (tapped "Next")
    T3: Think of a running track: current is how many runners pass a point each second. It's measured in amperes, or amps (A). If more runners pass the same point every second, what has happened to the current?
    [screenshot 07-exchange-3-phone.png and 07-exchange-3-laptop.png] exchange-3
      [S3 read as: button (code)]
    S4 (try): the current has increased? like more charge passing each second means bigger current
    T4: Yes, that's right. The current has increased, and in exam wording, current is the rate of flow of charge. Charge itself is counted in a unit called the coulomb (C), and a current of 1 ampere means 1 coulomb passes each second.
      [S4 read as: answer (model)]
    S5 (tapped "Next")
    T5: Every torch, phone and kettle runs on something moving through its wires.
      [S5 read as: button (code)]
    S6 (tapped "Next")
    T6: A current of 1 ampere means 1 coulomb of charge passes a point every second. So a bigger current means more coulombs passing each second.
    [screenshot 08-exchange-6-phone.png and 08-exchange-6-laptop.png] exchange-6
      [S6 read as: button (code)]
    S7 (tapped "Next")
    T7: An ampere is the unit that measures current, and 1 ampere means 1 coulomb of charge passes a point each second.
      [S7 read as: button (code)]
    S8 (tapped "Next")
    T8: Picture the track again: the current is how many runners pass a point each second. So if the current is 3 A, then 3 coulombs of charge pass that point every second.
      [S8 read as: button (code)]
    S9 (tapped "Next")
    T9: So if 3 coulombs pass a point each second, that's a current of 3 A. A bigger current just means more charge passing each second.
    [screenshot 09-exchange-9-phone.png and 09-exchange-9-laptop.png] exchange-9
      [S9 read as: button (code)]
    S10 (tapped "Next")
    T10: A complete loop is a closed circuit. Charge only flows round a closed circuit if it includes something to push it, such as a cell or a battery. That push is called a potential difference, and the next key point explains it.
      [S10 read as: button (code)]
      [T10 told piece: model, 42 words, key point 1]
    S11 (tapped "Next")
    T11: Break the loop anywhere and the flow stops everywhere. A switch does this on purpose: it opens a gap in the loop.
      [S11 read as: button (code)]
      [T11 told piece: model, 22 words, key point 1]
    S12 (tapped "Next")
    T12: So it does not matter where you put the ammeter: in a single loop, the current is the same at every point.
    [screenshot 10-exchange-12-phone.png and 10-exchange-12-laptop.png] exchange-12
      [S12 read as: button (code)]
      [T12 told piece: model, 22 words, key point 1]
    S13 (tapped "Next")
    T13: The amount of charge that passes is called the charge flow, written Q. To find it, multiply the current by the time in seconds.
      [S13 read as: button (code)]
      [T13 told piece: model, 24 words, key point 1]
    S14 (tapped "Next")
    T14: Worked example: A current of 2 A flows through a lamp for 5 s. How much charge flows? Tap the button under it to see each step.
      [S14 read as: button (code)]
    S15 (try): so current is 2 amps and time is 5 seconds so charge is 2 times 5 which is 10 coulombs
    T15: Yes, that's right: 10 C.
    [diagram shown in the conversation under T15: "The same loop with an ammeter in it, measuring the current."]
    [screenshot 11-diagram-15-phone.png and 11-diagram-15-laptop.png] diagram-15
    [screenshot 12-exchange-15-phone.png and 12-exchange-15-laptop.png] exchange-15
      [S15 read as: answer (model)]
    S16 (tapped "Next")
    T16: Your turn: A current of 0.5 A flows until 15 C of charge has passed. How long does that take, in seconds (s)?
      [S16 read as: button (code)]
    S17 (ask): wait so like do i need to rearrange the formula to find time instead
    T17: Fair enough. Back to the question: A current of 0.5 A flows until 15 C of charge has passed. How long does that take, in seconds (s)?
      [S17 read as: both (model)]
    S18 (try): so charge equals current times time right so 15 equals 0.5 times time so time is 15 divided by 0.5 which is 30 seconds
    T18: Yes, that's right: 30 s.
    [screenshot 13-exchange-18-phone.png and 13-exchange-18-laptop.png] exchange-18
      [S18 read as: answer (model)]
    S19 (tapped "Next")
    T19: Predict first: answer the question below (3 questions, one at a time). Then a working circuit with two ammeters opens: you can add a cell or open and close the switch to check your answer. Tap Next when you are done.
      [S19 read as: button (code)]
    [widget under T19: prediction "A lamp is joined to a cell by one wire only, from one end of the cell to the lam" tapped; then shown: yes, ammeters 2, controls Add a cell, Take a cell away, Close the switch]
    [check] OK: predict-first widget 1 works and matches its words — opened after the prediction true; ammeters 2 (words: two); controls match true; prediction first true
    [screenshot 14-widget-19-phone.png and 14-widget-19-laptop.png] widget-19
    S20 (tapped "Next")
    T20: In one line, in your own words: what is an electric current?
      [S20 read as: button (code)]
    S21 (try): electric current is how much charge flows past a point every second measured in amps
    T21: Your line gets the key idea right: current is a flow of charge, and you've said how it's measured, by how much passes a point each second, in amps. Nothing is missing or wrong.
    [screenshot 15-exchange-21-phone.png and 15-exchange-21-laptop.png] exchange-21
    [predict-first widget shown under T21: "PREDICT FIRST (1 OF 3)"]
    [screenshot 16-widget-21-phone.png and 16-widget-21-laptop.png] widget-21
      [S21 read as: answer (model)]
    S22 (tapped "Next")
    T22: Quick question: You open the switch in a single loop. What happens to the current?
      [S22 read as: button (code)]
    S23 (try, tapped the button): It stops everywhere in the loop
    T23: Yes, that's right. Break the loop anywhere and the flow stops everywhere.
      [S23 read as: button (code)]
    S24 (tapped "Next")
    T24: Connect a lamp to one cell and it glows dimly; swap in two cells and it glows brighter, because more current flows. The extra cell gives charge a bigger push through the lamp, and that push is called potential difference. What do you think happens to the push if you use three cells instead of two?
    [screenshot 17-exchange-24-phone.png and 17-exchange-24-laptop.png] exchange-24
      [S24 read as: button (code)]
    [counter now "1/7 covered" after T24]
    S25 (try): the push gets even bigger because theres more cells pushing the charge through so more potential difference
    T25: Yes, that's right. More cells give a bigger push, which is exactly what potential difference means. Potential difference is measured in volts (V) using a voltmeter, a meter connected across the part you are testing, such as the lamp.
    [diagram shown in the conversation under T25: "The same loop with a resistor added, and a voltmeter connected across the lamp."]
    [screenshot 18-diagram-25-phone.png and 18-diagram-25-laptop.png] diagram-25
      [S25 read as: answer (model)]
    S26 (tapped "Next")
    T26: A voltmeter measures the push (potential difference) across a part, so it is connected across that part, on either side of it, like a lamp.
      [S26 read as: button (code)]
    S27 (tapped "Next")
    T27: If you wanted to measure the push across a lamp, the voltmeter goes on either side of the lamp, not in the loop itself. Picture a circuit with a cell and a lamp. If you connect a voltmeter across the cell instead, what would it be measuring the push of?
    [screenshot 19-exchange-27-phone.png and 19-exchange-27-laptop.png] exchange-27
      [S27 read as: button (code)]
    S28 (wrong): it would be measuring the push of the cell itself not the lamp
    T28: Yes, that's right. "The push of the cell itself" is exactly it. The second thing that sets the current is resistance, which is how hard a component makes it for charge to get through, measured in ohms (Ω). If the push stays the same but the resistance gets bigger, what happens to the current?
      [S28 read as: answer (model)]
    S29 (try): if the push stays the same but resistance gets bigger then the current gets smaller because its harder for charge to flow through
    T29: Yes, that's right. The bigger resistance means a smaller current, because for the same potential difference it is harder for charge to get through. Resistance is measured in ohms (Ω). If you put a resistor with a bigger resistance in the loop with a lamp, what happens to the lamp?
      [S29 read as: answer (model)]
    S30 (try): the lamp gets dimmer because the bigger resistance makes the current smaller and smaller current means the lamp glows less bright
    T30: Yes, that's right. The lamp gets dimmer. You linked the bigger resistance to a smaller current, and the smaller current to a less bright lamp.
    [screenshot 20-exchange-30-phone.png and 20-exchange-30-laptop.png] exchange-30
      [S30 read as: answer (model)]
    S31 (tapped "Next")
    T31: People often call it voltage. Exam questions say potential difference, but either word gets the mark.
      [S31 read as: button (code)]
      [T31 told piece: model, 16 words, key point 2]
    S32 (tapped "Next")
    T32: If you know any two of potential difference, current and resistance, you can rearrange the equation V = I R to find the third.
      [S32 read as: button (code)]
      [T32 told piece: model, 24 words, key point 2]
    S33 (tapped "Next")
    T33: Worked example: A current of 2 A flows through a 3 Ω resistor. What is the potential difference across it? Tap the button under it to see each step.
    [screenshot 21-exchange-33-phone.png and 21-exchange-33-laptop.png] exchange-33
      [S33 read as: button (code)]
    S34 (wrong): so current is 2 amps and resistance is 3 ohms so potential difference is 2 plus 3 which is 5 volts
    T34: Not quite: it's 6 V. Write the equation: V = I R. Put the numbers in: V = 2 × 3 = 6 The potential difference is 6 V.
      [S34 read as: answer (model)]
    S35 (tapped "Next")
    T35: Your turn: A component has a potential difference of 0.5 V across it and a current of 0.1 A through it. What is its resistance, in ohms (Ω)?
      [S35 read as: button (code)]
    S36 (try): so v equals i times r so 0.5 equals 0.1 times r so r equals 0.5 divided by 0.1 which is 5 ohms
    T36: Yes, that's right: 5 Ω.
    [screenshot 22-exchange-36-phone.png and 22-exchange-36-laptop.png] exchange-36
      [S36 read as: answer (model)]
    S37 (tapped "Next")
    T37: Predict first: answer the question below (3 questions, one at a time). Then a working circuit with an ammeter and a voltmeter opens: you can add a cell, put the resistor in or take it out or move it to check your answer. Tap Next when you are done.
      [S37 read as: button (code)]
    [widget under T37: prediction "You add a second cell. What happens to the ammeter reading and to the lamp?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Put the resistor in, Move the resistor]
    [check] OK: predict-first widget 2 works and matches its words — opened after the prediction true; ammeters 1 (words: one); controls match true; prediction first true
    [screenshot 23-widget-37-phone.png and 23-widget-37-laptop.png] widget-37
    S38 (tapped "Next")
    T38: In one line: what do potential difference and resistance each do to the current?
      [S38 read as: button (code)]
    S39 (wrong): potential difference pushes the current so bigger pd makes bigger current but resistance stops it so bigger resistance makes smaller current
    T39: Your line gets both points right: potential difference is the push that drives the current, and a bigger resistance means a smaller current. Nothing is missing or wrong, and you've even linked a bigger push to a bigger current.
    [screenshot 24-exchange-39-phone.png and 24-exchange-39-laptop.png] exchange-39
      [S39 read as: answer (model)]
    S40 (tapped "Next")
    T40: Quick question: Where do you put an ammeter to measure the current in a single loop?
      [S40 read as: button (code)]
    S41 (wrong, tapped the button): Anywhere in the loop
    T41: Yes, that's right. In a single loop the current is the same at every point.
      [S41 read as: button (code)]
    S42 (tapped "Next")
    T42: Before the practical, question 1 of 2: What does an ammeter measure?
    [screenshot 25-exchange-42-phone.png and 25-exchange-42-laptop.png] exchange-42
      [S42 read as: button (code)]
    [counter now "2/7 covered" after T42]
    S43 (wrong, tapped the button): The potential difference
    T43: Not quite: it's "The current". An ammeter measures the current through a component.
      [S43 read as: button (code)]
    S44 (tapped "Next")
    T44: Before the practical, question 2 of 2: You know the potential difference across a component and the current through it. How do you find its resistance?
      [S44 read as: button (code)]
    S45 (ask): so like we rearrange v equals i r right to find r
    T45: Yes, that's right. Resistance = potential difference ÷ current, from V = I R.
    [screenshot 26-exchange-45-phone.png and 26-exchange-45-laptop.png] exchange-45
      [S45 read as: answer (model)]
    S46 (tapped "Next")
    T46: A quick recap. An ammeter measures the current through a component. A voltmeter measures the potential difference across it. Resistance = potential difference ÷ current.
      [S46 read as: button (code)]
    S47 (tapped "Next")
    T47: In the practical, a long wire is clipped along a metre ruler and joined to a cell. The ammeter goes in the loop, one after another with the wire. Why does the same current flow through both?
      [S47 read as: button (code)]
    S48 (wrong): because theyre both in the same loop so the current has to go through both of them
    T48: Yes, that's right. Same loop means the same current through both; in series means one after another. Now the voltmeter: it goes in parallel, side by side across the wire, so it touches the same two points the wire does. Why does it have to sit across the wire rather than in the loop?
    [screenshot 27-exchange-48-phone.png and 27-exchange-48-laptop.png] exchange-48
      [S48 read as: answer (model)]
    S49 (try): because it measures potential difference across the wire so it needs to touch both ends of the wire to measure the voltage drop
    T49: Yes, that's right. That's the idea: the voltmeter touches both ends of the wire, so it measures the potential difference across it. That keeps it at a constant temperature, which just means its temperature stays the same throughout the measurements. Why do you think we want the wire's temperature to stay the same while we measure?
      [S49 read as: answer (model)]
    S50 (try): because if the temperature changes the resistance might change so the measurements wouldnt be accurate
    T50: Yes, that's right. That's the reason: if the temperature changes, the resistance might change too, so your measurements wouldn't be reliable. Keeping the wire at a constant temperature means any change in resistance comes from the length you changed.
      [S50 read as: answer (model)]
    S51 (tapped "Next")
    T51: Heaters, leads and the coils inside motors all use wire, so engineers need to know how its length changes its resistance.
    [screenshot 28-exchange-51-phone.png and 28-exchange-51-laptop.png] exchange-51
      [S51 read as: button (code)]
      [T51 told piece: model, 21 words, key point 3]
    S52 (tapped "Next")
    T52: Next, move one clip along the ruler to change the length of wire, and take the readings again. Keep the current small, and switch off between readings, so the wire does not warm up.
      [S52 read as: button (code)]
      [T52 told piece: model, 34 words, key point 3]
    S53 (tapped "Next")
    T53: One cell's low potential difference gives no risk of an electric shock. Repeat each reading and take the mean, then plot resistance against length.
      [S53 read as: button (code)]
      [T53 told piece: model, 24 words, key point 3]
    S54 (tapped "Next")
    T54: When you plot your graph, the points lie on a straight line through the origin.
    [screenshot 29-exchange-54-phone.png and 29-exchange-54-laptop.png] exchange-54
      [S54 read as: button (code)]
      [T54 told piece: model, 15 words, key point 3]
    S55 (tapped "Next")
    T55: Worked example: A length of the wire has a potential difference of 1.5 V across it and a current of 0.3 A through it. What is its resistance? Tap the button under it to see each step.
      [S55 read as: button (code)]
    S56 (try): resistance equals potential difference divided by current so 1.5 divided by 0.3 equals 5 ohms
    T56: Yes, that's right: 5 Ω.
      [S56 read as: answer (model)]
    S57 (tapped "Next")
    T57: Your turn: A potential difference of 2.4 V is put across a 6 Ω resistor. What is the current through it, in amperes (A)?
    [screenshot 30-exchange-57-phone.png and 30-exchange-57-laptop.png] exchange-57
      [S57 read as: button (code)]
    S58 (try): so resistance equals potential difference divided by current so i need to rearrange it to get current equals potential difference divided by resistance so 2.4 divided by 6 equals 0.4 A
    T58: Yes, that's right: 0.4 A.
      [S58 read as: answer (model)]
    S59 (tapped "Next")
    T59: In one line: how does the length of a wire change its resistance?
      [S59 read as: button (code)]
    S60 (try): longer wire has higher resistance
    T60: Your line gets the key point right: a longer wire has a bigger resistance. Nothing is missing or wrong. "Higher" and "bigger" mean the same thing here.
    [screenshot 31-exchange-60-phone.png and 31-exchange-60-laptop.png] exchange-60
      [S60 read as: answer (model)]
    S61 (tapped "Next")
    T61: Quick question: In the resistance-of-a-wire practical, why does one cell give no risk of an electric shock?
      [S61 read as: button (code)]
    S62 (wrong, tapped the button): The ammeter stops a shock
    T62: Not quite: it's "Its potential difference is low". A low potential difference means no risk of an electric shock. The wire can still get hot, so keep the current small.
      [S62 read as: button (code)]
    S63 (tapped "Next")
    T63: Imagine measuring the current through a resistor at several different potential differences, then plotting the readings on a graph. That graph, with current up the side and potential difference along the bottom, is called an I-V characteristic.
    [screenshot 32-exchange-63-phone.png and 32-exchange-63-laptop.png] exchange-63
      [S63 read as: button (code)]
    [counter now "3/7 covered" after T63]
    S64 (tapped "Next")
    T64: On an I-V graph, each point is one pair of readings: how much current flowed at one potential difference. Picture the graph with potential difference along the bottom. If you made the potential difference bigger, which way along the graph would your next point sit?
      [S64 read as: button (code)]
    S65 (try): to the right because potential difference is along the bottom so bigger potential difference means further right
    T65: Yes, that's right. Bigger potential difference means further right, as you said. For a resistor at constant temperature, the points lie on a straight line through the origin. Double the potential difference and the current doubles too, which is called directly proportional. If the potential difference were tripled, what would happen to the current?
      [S65 read as: answer (model)]
    S66 (try): if potential difference is tripled then current would triple too because theyre directly proportional
    T66: Yes, that's right. Directly proportional, as you said. A component with a straight-line graph through the origin is an ohmic conductor: its resistance stays constant at constant temperature. If you double the current through one, what happens to its resistance?
    [screenshot 33-exchange-66-phone.png and 33-exchange-66-laptop.png] exchange-66
      [S66 read as: answer (model)]
    S67 (wrong): the resistance would double because you doubled the current
    T67: Not quite. The current going up doesn't change the resistance. An ohmic conductor's resistance stays the same whatever the current, as long as its temperature doesn't change. So if you double the current through an ohmic conductor, what happens to its resistance?
      [S67 read as: answer (model)]
    S68 (try): it stays the same because resistance doesnt change if temperature stays constant
    T68: Yes, that's right. It stays the same, as long as the temperature stays constant. That's the key condition for an ohmic conductor: its resistance doesn't change however the current changes.
      [S68 read as: answer (model)]
    S69 (tapped "Next")
    T69: Some components behave in a simple, steady way, and an ohmic conductor is one of them. Because its resistance stays the same, you can use V = I R with one fixed value of R for it.
    [screenshot 34-exchange-69-phone.png and 34-exchange-69-laptop.png] exchange-69
      [S69 read as: button (code)]
      [T69 told piece: model, 37 words, key point 4]
    S70 (tapped "Next")
    T70: In one line: what does a straight-line I-V graph through the origin tell you?
      [S70 read as: button (code)]
    S71 (try): the resistance stays the same so its an ohmic conductor
    T71: Your line gets two points right: the resistance stays the same, and the component is an ohmic conductor. What's missing is that the current is directly proportional to the potential difference, which is what the straight line through the origin shows.
      [S71 read as: answer (model)]
    S72 (tapped "Next")
    T72: Quick question: For an ohmic conductor, you double the potential difference. What happens to the current?
    [screenshot 35-exchange-72-phone.png and 35-exchange-72-laptop.png] exchange-72
      [S72 read as: button (code)]
    S73 (wrong, tapped the button): It stays the same
    T73: Not quite: it's "It doubles". The current is directly proportional to the potential difference, so it doubles too.
      [S73 read as: button (code)]
    S74 (tapped "Next")
    T74: Good place for a break. Your place is saved.
      [S74 read as: button (code)]
    [counter now "4/7 covered" after T74]
    S75 (tapped "Keep going")
    T75: An old-style bulb has a thin coil of metal wire inside, called the filament, and it glows white-hot when current flows. As you push more current through it, the filament gets hotter. What do you think happens to the filament's resistance as it gets hotter?
    [screenshot 36-exchange-75-phone.png and 36-exchange-75-laptop.png] exchange-75
    S76 (ask): so does the filament getting hotter mean the temperature increases
    T76: Yes, temperature is how hot something is, measured in °C. So a hotter filament means a higher temperature. If the filament's temperature goes up, what happens to its resistance?
      [S76 read as: question (model)]
    S77 (try): the resistance increases because it gets hotter
    T77: Yes, that's right. A hotter filament means a higher resistance, and you gave the reason too.
      [S77 read as: answer (model)]
    S78 (tapped "Next")
    T78: Back to my question: What do you think happens to the filament's resistance as it gets hotter?
    [screenshot 37-exchange-78-phone.png and 37-exchange-78-laptop.png] exchange-78
      [S78 read as: button (code)]
    S79 (wrong): the resistance stays the same because filaments are made of metal
    T79: Not quite. The filament is a metal, but it gets white-hot, and the hotter it gets, the more its resistance increases. A cooler wire at constant temperature stays steady; a glowing one does not. So as the filament gets hotter, what happens to the current for each extra push?
      [S79 read as: answer (model)]
    S80 (try): the current increases less because resistance keeps going up as it gets hotter
    T80: Yes, that's right. You said it in your own words; the exam wording is that its resistance increases as its temperature increases. Now a diode lets current flow one way only, because in the reverse direction its resistance is very high.
      [S80 read as: answer (model)]
    S81 (tapped "Next")
    T81: Turn a diode round the wrong way and its very high resistance means only a tiny current gets through. Imagine a diode connected so the cell pushes the wrong way through it. Why would a very small current still flow, rather than none at all?
    [screenshot 38-exchange-81-phone.png and 38-exchange-81-laptop.png] exchange-81
      [S81 read as: button (code)]
    S82 (wrong): because theres still some electricity getting through even though the resistance is really high
    T82: Yes, that's right. Now the steepness of a graph line is called its gradient, and a flatter line has a smaller gradient. On the filament lamp's graph, the line bends over and gets flatter as the voltage rises.
      [S82 read as: answer (model)]
    S83 (tapped "Next")
    T83: The lamp's line gets flatter as the voltage rises, so its gradient gets smaller. That is the graph's way of showing the resistance going up. If a different line on a graph were steeper than the lamp's flattened part, what would you say about its gradient?
      [S83 read as: button (code)]
    S84 (try): it would have a larger gradient because steeper means larger gradient
    T84: Yes, that's right. A steeper line does mean a larger gradient. So a line steeper than the lamp's flattened part has a larger gradient than the lamp's.
    [screenshot 39-exchange-84-phone.png and 39-exchange-84-laptop.png] exchange-84
      [S84 read as: answer (model)]
    S85 (tapped "Next")
    T85: Not every component gives a straight line on this kind of graph. Some give curves, and the shapes tell you what is happening inside them.
      [S85 read as: button (code)]
      [T85 told piece: model, 25 words, key point 5]
    S86 (tapped "Next")
    T86: Now for the diode's graph. On the reverse side, the line lies flat along the axis. On the forward side, it stays near zero at first, then rises steeply.
      [S86 read as: button (code)]
      [T86 told piece: model, 29 words, key point 5]
    S87 (tapped "Next")
    T87: For both of these components, the resistance is different at different points on the graph. To find it at one point, read off V and I there, then divide V by I.
    [screenshot 40-exchange-87-phone.png and 40-exchange-87-laptop.png] exchange-87
      [S87 read as: button (code)]
      [T87 told piece: model, 32 words, key point 5]
    S88 (tapped "Next")
    T88: Predict first: answer the question below (4 questions, one at a time). Then a graph opens: you can drag the point along it to check your answer. Tap Next when you are done.
      [S88 read as: button (code)]
    [widget under T88: prediction "A 10 Ω resistor is kept at a constant temperature. You double the potential diff" tapped; then shown: yes, ammeters 0, controls Resistor, Filament lamp, Diode]
    [check] OK: predict-first widget 3 works and matches its words — opened after the prediction true; ammeters 0 (words: -); controls match true; prediction first true
    [screenshot 41-widget-88-phone.png and 41-widget-88-laptop.png] widget-88
    S89 (tapped "Next")
    T89: In one line: how are a filament lamp and a diode different from a resistor?
      [S89 read as: button (code)]
    S90 (try): their resistance changes at different points but a resistors stays the same
    T90: Your line gets one idea right: a resistor's resistance stays the same, while these two change. Missing: their I-V graphs are not straight lines, a filament lamp's resistance increases as it gets hotter, and a diode lets current flow one way only.
    [screenshot 42-exchange-90-phone.png and 42-exchange-90-laptop.png] exchange-90
      [S90 read as: answer (model)]
    S91 (tapped "Next")
    T91: Quick question: Which component lets current flow in one direction only?
      [S91 read as: button (code)]
    S92 (try, tapped the button): A diode
    T92: Yes, that's right. A diode has a very high resistance in the reverse direction.
      [S92 read as: button (code)]
    S93 (tapped "Next")
    T93: Before the practical, question 1 of 2: Which meter goes in parallel across the component you are testing?
    [screenshot 43-exchange-93-phone.png and 43-exchange-93-laptop.png] exchange-93
      [S93 read as: button (code)]
    [counter now "5/7 covered" after T93]
    S94 (wrong, tapped the button): The ammeter
    T94: Not quite: it's "The voltmeter". The voltmeter measures the potential difference across the component.
      [S94 read as: button (code)]
    S95 (tapped "Next")
    T95: Before the practical, question 2 of 2: What does a straight-line I-V graph through the origin show?
      [S95 read as: button (code)]
    S96 (try, tapped the button): The resistance stays the same
    T96: Yes, that's right. A straight line through the origin means a constant resistance: an ohmic conductor.
    [screenshot 44-exchange-96-phone.png and 44-exchange-96-laptop.png] exchange-96
      [S96 read as: button (code)]
    S97 (tapped "Next")
    T97: A quick recap. The ammeter goes in series. The voltmeter goes in parallel across the component. An I-V graph plots current against potential difference. A straight line through the origin means the resistance stays the same.
      [S97 read as: button (code)]
    S98 (tapped "Next")
    T98: To get an I-V graph you build a loop with the component, an ammeter and a voltmeter, then add a variable resistor, which is a resistor with a slider that lets you change its resistance. If you slide it to make the resistance bigger, what happens to the current?
      [S98 read as: button (code)]
    S99 (try): the current gets smaller because bigger resistance means less current
    T99: Yes, that's right. Bigger resistance means a smaller current — that's the exam idea. A component that gives a straight-line I-V graph is called linear. A resistor at constant temperature is linear.
    [screenshot 45-exchange-99-phone.png and 45-exchange-99-laptop.png] exchange-99
      [S99 read as: answer (model)]
    S100 (tapped "Next")
    T100: Any graph that is a straight line is called linear, and any other shape is called non-linear. Non-linear is the new term: it just means the graph is not a straight line, like the curve of a filament lamp. If you plot current against potential difference for a resistor at constant temperature, what shape does the graph make?
      [S100 read as: button (code)]
    S101 (try): a straight line because a resistor at constant temperature is linear
    T101: Yes, that's right. A straight line is right, and you also gave the reason: a resistor at constant temperature is linear.
      [S101 read as: answer (model)]
    S102 (tapped "Next")
    T102: Exam questions often ask you to describe how to get these graphs, so it's worth knowing the method step by step. The circuit has a cell or battery and the component you are testing.
    [screenshot 46-exchange-102-phone.png and 46-exchange-102-laptop.png] exchange-102
      [S102 read as: button (code)]
      [T102 told piece: model, 34 words, key point 6]
    S103 (tapped "Next")
    T103: There's another way to get a range of readings: you can change the number of cells, or use a supply whose potential difference you can set.
      [S103 read as: button (code)]
      [T103 told piece: model, 26 words, key point 6]
    S104 (tapped "Next")
    T104: Once the circuit is set up, record the current and the potential difference, then move the slider and record again. Take repeat readings and find the mean. To get the other half of the graph, turn the component round and repeat; these readings count as negative.
      [S104 read as: button (code)]
      [T104 told piece: model, 46 words, key point 6]
    S105 (tapped "Next")
    T105: One safety point for the filament lamp: it gets very hot, so do not touch it.
    [screenshot 47-exchange-105-phone.png and 47-exchange-105-laptop.png] exchange-105
      [S105 read as: button (code)]
      [T105 told piece: model, 16 words, key point 6]
    S106 (tapped "Next")
    T106: The shape of each graph shows what a component is useful for. A diode, for example, can stop current flowing the wrong way.
      [S106 read as: button (code)]
      [T106 told piece: model, 23 words, key point 6]
    S107 (tapped "Next")
    T107: In one line: how do you take the readings for an I-V graph?
      [S107 read as: button (code)]
    S108 (try): record current and potential difference then move the slider and record again
    T108: Your line gets the method right: record current and potential difference, change the slider, then record again. It's missing the equipment, though: an ammeter in series, a voltmeter in parallel, and a variable resistor to change the current (that's your slider).
    [screenshot 48-exchange-108-phone.png and 48-exchange-108-laptop.png] exchange-108
      [S108 read as: answer (model)]
    S109 (tapped "Next")
    T109: Quick question: In the I-V practical, what is the variable resistor for?
      [S109 read as: button (code)]
    S110 (try, tapped the button): To change the current
    T110: Yes, that's right. Moving its slider changes the current, so you get a range of readings.
      [S110 read as: button (code)]
    S111 (tapped "Next")
    T111: When charge flows through a lamp, the lamp lights up. That's work being done: energy passes from the charge to the lamp. What do you think a heater does with that energy?
    [screenshot 49-exchange-111-phone.png and 49-exchange-111-laptop.png] exchange-111
      [S111 read as: button (code)]
    [counter now "6/7 covered" after T111]
    S112 (ask): so does the charge lose energy when it goes through the lamp?
    T112: Ha, I get that. Back to the question: What do you think a heater does with that energy?
      [S112 read as: both (model)]
    S113 (try): it turns the energy into heat
    T113: Yes, that's right. Turning energy into heat is right: the heater gets the energy the charge hands over. That passed-on energy is called the energy transferred, measured in joules (J). If a motor is turning when charge flows through it, where has that energy come from?
      [S113 read as: answer (model)]
    S114 (wrong): the energy comes from the charge flowing through it
    T114: Yes, that's right. The energy comes from the charge flowing through the motor. The charge carries the energy and hands it over to the motor as it passes through, and that is the energy transferred.
    [screenshot 50-exchange-114-phone.png and 50-exchange-114-laptop.png] exchange-114
      [S114 read as: answer (model)]
    S115 (tapped "Next")
    T115: The potential difference across a component tells you how much energy each coulomb transfers there. A potential difference of 1 volt means 1 joule is transferred for each coulomb that passes. So 12 V means 12 joules for every coulomb.
      [S115 read as: button (code)]
      [T115 told piece: model, 40 words, key point 7]
    S116 (tapped "Next")
    T116: If you are given a current and a time instead of a charge, find the charge first with Q = I t.
      [S116 read as: button (code)]
      [T116 told piece: model, 22 words, key point 7]
    S117 (tapped "Next")
    T117: Worked example: 3 C of charge flows through a potential difference of 6 V. How much energy is transferred? Tap the button under it to see each step.
    [screenshot 51-exchange-117-phone.png and 51-exchange-117-laptop.png] exchange-117
      [S117 read as: button (code)]
    S118 (try): energy transferred equals charge times potential difference so 3 times 6 equals 18 joules
    T118: Yes, that's right: 18 J.
      [S118 read as: answer (model)]
    S119 (tapped "Next")
    T119: Your turn: A component has a potential difference of 4.5 V across it, and 180 J of energy is transferred. How much charge flowed, in coulombs (C)?
      [S119 read as: button (code)]
    S120 (try): so energy transferred equals charge times potential difference, so charge equals energy divided by potential difference, so 180 divided by 4.5 equals 40 coulombs
    T120: Yes, that's right: 40 C.
    [screenshot 52-exchange-120-phone.png and 52-exchange-120-laptop.png] exchange-120
      [S120 read as: answer (model)]
    S121 (tapped "Next")
    T121: Predict first: answer the question below. Then a working circuit with an ammeter opens: you can put the resistor in or take it out or run it for 10 seconds to check your answer. Tap Next when you are done.
      [S121 read as: button (code)]
    [widget under T121: prediction "A torch cell goes flat after a few hours. What has it run out of?" tapped; then shown: yes, ammeters 1, controls Add a cell, Take a cell away, Take the resistor out, Run for 10 s, Start again]
    [check] OK: predict-first widget 4 works and matches its words — opened after the prediction true; ammeters 1 (words: one); controls match true; prediction first true
    [screenshot 53-widget-121-phone.png and 53-widget-121-laptop.png] widget-121
    S122 (tapped "Next")
    T122: In one line: what does a potential difference of 1 volt mean?
      [S122 read as: button (code)]
    S123 (wrong): it means 1 amp of current flows through the component
    T123: Not quite. Your line mixes up potential difference with current: amps measure current, not volts. It's missing both key points: 1 joule of energy is transferred, for each coulomb of charge that passes. So 1 volt means 1 joule per coulomb.
    [screenshot 54-exchange-123-phone.png and 54-exchange-123-laptop.png] exchange-123
      [S123 read as: answer (model)]
    S124 (tapped "Next")
    T124: Quick question: When charge flows through a component, what happens?
      [S124 read as: button (code)]
    S125 (try, tapped the button): Work is done: energy is transferred
    T125: Yes, that's right. Energy is transferred from the charge to the component. The charge is not used up.
      [S125 read as: button (code)]
    S126 (tapped "Next")
    T126: Quiz, question 1 of 8: What is electric current?
    [screenshot 55-exchange-126-phone.png and 55-exchange-126-laptop.png] exchange-126
      [S126 read as: button (code)]
    [counter now "7/7 covered" after T126]
    S127 (try, tapped the button): The rate of flow of charge
    T127: Yes, that's right. Current is how much charge passes a point each second.
    S128 (tapped "Next")
    T128: Quiz, question 2 of 8: A current of 3 A flows through a 24 Ω resistor. What is the potential difference across it, in volts (V)?
    S129 (try): potential difference equals current times resistance so 3 times 24 equals 72 volts
    T129: Yes, that's right: 72 V.
    [screenshot 56-exchange-129-phone.png and 56-exchange-129-laptop.png] exchange-129
    S130 (tapped "Next")
    T130: Quiz, question 3 of 8: Which equation links charge flow, current and time?
    S131 (wrong, tapped the button): Q = I t
    T131: Yes, that's right. Charge flow = current × time. A correct rearrangement also scores, but write only one version.
    S132 (tapped "Next")
    T132: Quiz, question 4 of 8: What does the I-V characteristic of an ohmic conductor look like?
    [screenshot 57-exchange-132-phone.png and 57-exchange-132-laptop.png] exchange-132
    S133 (wrong, tapped the button): A curve that gets flatter
    T133: Not quite: it's "A straight line through the origin". Its current is directly proportional to the potential difference.
    S134 (tapped "Next")
    T134: Quiz, question 5 of 8: Why does a filament lamp's I-V graph curve?
    S135 (try, tapped the button): Its resistance increases as it gets hotter
    T135: Yes, that's right. A hotter filament has a bigger resistance, so the line gets flatter.
    [screenshot 58-exchange-135-phone.png and 58-exchange-135-laptop.png] exchange-135
    S136 (tapped "Next")
    T136: Quiz, question 6 of 8: In the I-V practical, how is the voltmeter connected?
    S137 (try, tapped the button): In parallel across the component
    T137: Yes, that's right. It measures the potential difference across the component.
    S138 (tapped "Next")
    T138: Quiz, question 7 of 8: A current of 2 A flows through a heater for 30 s. The potential difference across it is 9 V. How much energy is transferred, in joules (J)?
    [screenshot 59-exchange-138-phone.png and 59-exchange-138-laptop.png] exchange-138
    S139 (wrong): so energy equals charge times potential difference, charge equals current times time so 2 times 30 equals 60 coulombs, then 60 times 9 equals 540 joules
    T139: Yes, that's right: 540 J.
    S140 (tapped "Next")
    T140: Quiz, question 8 of 8: At constant temperature, what happens to a wire's resistance as its length increases?
    S141 (wrong, tapped the button): It stays the same
    T141: Not quite: it's "It increases". A longer wire has a bigger resistance.
    [screenshot 60-exchange-141-phone.png and 60-exchange-141-laptop.png] exchange-141
    S142 (tapped "Next")
    T142: That's the end of the quiz: you got 6 out of 8.
    S143 (tapped "Next")
    T143: One last thing: shall we make revision cards from this lesson? They go in your card deck, so you can test yourself later.
    S144 (tapped "Make my revision cards")
    T144: Done: this lesson's revision cards are in your card deck. You'll find them under Cards on the home page.
    [screenshot 61-exchange-144-phone.png and 61-exchange-144-laptop.png] exchange-144
    S145 (tapped "Next")
    T145: You got 6 out of 8 in the end quiz, which is a solid result. You answered questions on required practicals, ohmic conductors, filament lamps and diodes, and energy transferred, so those are worth a quick recap. Well done, and come back any time.
    S146 (closing): ok thanks
    T146: You're welcome. Come back any time to go over current, potential difference and resistance again. Good luck with the revision!
    [the lesson shows "Lesson finished."]
    [screenshot 62-end-phone.png and 62-end-laptop.png] end
    [tutor-side time: 11.7 minutes over 146 exchanges]
