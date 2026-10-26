# Site test: p2-current-voltage (lesson, 2026-10-26)

**FAIL** · cost $0.8440 (45 tool calls, 126 calls from the site; tutor claude-sonnet-5-5 $0.5305)

## Judge

```json
{
  "broken": [
    {
      "what": "An off-topic message ('omg im so hungry rn') was marked as a wrong answer. The tutor said 'Not quite' and gave away 7200 C without the student ever attempting the question.",
      "step": "S11/T11"
    },
    {
      "what": "The same thing happened again: 'bro im starving' was graded as a wrong answer and the answer 5 A was revealed.",
      "step": "S13/T13"
    },
    {
      "what": "The student asked 'why 0.05 tho? i said 50'. The mA-to-A conversion was never explained. The tutor jumped to an unrelated torch intro instead.",
      "step": "S16/T16"
    },
    {
      "what": "'idk what ur on about' got a repeated lamp definition. The lamp definition appears twice in a row as separate bubbles.",
      "step": "S17/T17"
    },
    {
      "what": "Practice questions (Q = I t, time conversions, mA) were asked before the formula was taught. Q = I t is only introduced at T40, and the worked examples come after the practice.",
      "step": "T8, T12, T14 vs T40-T43"
    },
    {
      "what": "The question 'If a circuit has no source of this push, what would happen to the charge?' was dropped after the student asked side questions. It was never returned to.",
      "step": "T27-T29"
    },
    {
      "what": "The tutor set up a scenario with no question ('Picture a torch that won't come on even though the switch is closed.'), which confused the student.",
      "step": "T31/S32"
    },
    {
      "what": "A correct answer ('they'd be the same') got no confirmation, just 'So it does not matter where you put the ammeter.'",
      "step": "S39/T39"
    },
    {
      "what": "A correct worked-example answer (2 × 5 = 10 C) was ignored and the tutor moved straight on.",
      "step": "S42/T42"
    },
    {
      "what": "A wrong answer (0.5 × 2 = 1, minutes not converted to seconds; the correct answer is 60 C) was silently accepted and not corrected.",
      "step": "S43/T43"
    },
    {
      "what": "A correct answer (30 ÷ 60 = 0.5 A) was ignored.",
      "step": "S44/T44"
    },
    {
      "what": "The prompt says 'Open the switch, add cells, and watch both ammeters', but the widget is a multiple-choice question with no circuit to use. The diagram only has one ammeter.",
      "step": "T44"
    },
    {
      "what": "'Joule' is introduced as a needed word before potential difference but is never used.",
      "step": "T27"
    },
    {
      "what": "The counter showed key point 1 as covered after T15, yet key point 1 content carried on until T44.",
      "step": "T15-T44"
    }
  ],
  "looks_wrong": [
    {
      "what": "The '← Home' button and the 'What are you revising?' heading are cut off under the top bar.",
      "screenshot": "02-subjects-phone.png",
      "stops_use": false
    },
    {
      "what": "The lamp definition is shown twice in consecutive bubbles.",
      "screenshot": "12-exchange-18-phone.png",
      "stops_use": false
    },
    {
      "what": "There is a stray 'First, a word you'll need: Closed circuit' bubble after closed circuit was already explained, with odd capitalisation.",
      "screenshot": "13-exchange-21-phone.png",
      "stops_use": false
    },
    {
      "what": "The Key terms panel is clipped mid-sentence ('The amount of charge that passes…'), and the Jump to header is cut off at the top of the sidebar.",
      "screenshot": "11-exchange-15-laptop.png",
      "stops_use": false
    },
    {
      "what": "The sidebar diagram thumbnail is too small for its labels to be read.",
      "screenshot": "17-diagram-33-laptop.png",
      "stops_use": false
    },
    {
      "what": "The screenshot labelled exchange-36 shows the earlier diagram from T33, not the ammeter diagram.",
      "screenshot": "20-exchange-36-phone.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "S17",
    "quote": "idk what ur on about lol",
    "why": "Her question about 0.05 was ignored and the tutor switched to an unrelated torch intro, after already giving away answers she never tried."
  },
  "fixes": [
    {
      "target": "answer grading / off-topic handling",
      "change": "Messages classed as offtopic must not count as an attempt. Reply briefly, then re-ask the same question without revealing the answer."
    },
    {
      "target": "key point advance logic",
      "change": "If the student's last message is a question, answer it first (e.g. 50 mA = 50 ÷ 1000 = 0.05 A) before starting the next key point."
    },
    {
      "target": "lesson p2-current-voltage key point 1 order",
      "change": "Teach Q = I t and the worked examples (with unit conversions for hours, minutes and mA) before any 'Your turn' calculation questions."
    },
    {
      "target": "worked example / predict replies",
      "change": "Grade typed attempts: confirm correct answers (10 C, 0.5 A) and correct errors (2 min = 120 s, so 0.5 × 120 = 60 C)."
    },
    {
      "target": "T44 widget prompt and vocab bubbles",
      "change": "Make the prompt match the multiple-choice widget (remove 'add cells, watch both ammeters'). Stop repeating 'First, a word you'll need' bubbles for terms already defined, and remove the unused 'Joule'."
    }
  ]
}
```

## Transcript

    Lesson p2-current-voltage (Physics › Electricity › Current, potential difference and resistance).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    [screenshot 02-subjects-phone.png and 02-subjects-laptop.png] subjects
    [screenshot 03-topics-physics-phone.png and 03-topics-physics-laptop.png] topics-physics
    [screenshot 04-lessons-p2-phone.png and 04-lessons-p2-laptop.png] lessons-P2
    [screenshot 05-pilot-card-phone.png and 05-pilot-card-laptop.png] pilot-card
    [pilot card] tapped "Not now: go to the lesson"
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Welcome, glad you're here! Think about the last time you turned on a torch or a lamp: what do you think made it light up?
    [screenshot 06-ai-lesson-opening-phone.png and 06-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (offtopic): lol idk electricity i guess? anyway my phone's dying rn
    T1: Electricity is a good start, and it's just tiny charged particles drifting round the wires. Charge is the amount of that stuff flowing, and we measure it in coulombs. If the particles keep drifting round a torch's wires for longer, what happens to the amount of charge that has passed?
    S2 (try): whats a coulomb lol
    T2: A coulomb is the unit we use to count charge, just like metres count distance. If more charge flows through a torch's wires, what happens to the number of coulombs that have passed?
    S3 (try): it goes up innit
    T3: Yes — the number of coulombs that have passed goes up when more charge flows.
    [screenshot 07-exchange-3-phone.png and 07-exchange-3-laptop.png] exchange-3
    S4 (wrong): ok so more charge = more coulombs. got it
    T4: Yes, more charge flowing means more coulombs. The amount of charge that passes a point is called the charge flow, and we write it as Q, measured in coulombs (C). If a torch is on for twice as long, what happens to the charge flow, Q?
    S5 (try): it doubles i think? like if its on longer more stuff flows
    T5: Yes, twice as long means twice the charge flow, because more stuff keeps flowing the longer it's on. How much charge passes each second is what we call the electric current, so a bigger current means more charge passing each second.
    S6 (try): so like current is how much charge per second?
    T6: Yes, that's it: current is the rate of flow, how much charge passes a point each second. Picture runners going past a spot on a track: more runners passing each second means a bigger current.
    [screenshot 08-exchange-6-phone.png and 08-exchange-6-laptop.png] exchange-6
    S7 (offtopic): whats rate mean tho
    T7: A rate just tells you how much happens each second. Speed is a rate too: how many metres you travel each second. For current, it's how much charge passes a point each second.
    S8 (wrong): ohhh so like speed but for electricity? got it. so if more coulombs pass each second the current gets bigger yeah
    T8: Your turn: A current of 1 A flows for 2 hours. How much charge flows, in coulombs (C)?
    S9 (wrong): whats ampere mean lol
    T9: An ampere (amp, A) is just the unit we use to measure current, like metres per second for speed. One amp means one coulomb of charge passing each second.
    [screenshot 09-exchange-9-phone.png and 09-exchange-9-laptop.png] exchange-9
    S10 (minimal): k so 1 coulomb per second
    T10: Back to the question: A current of 1 A flows for 2 hours. How much charge flows, in coulombs (C)?
    S11 (offtopic): omg im so hungry rn can we do this after
    T11: Not quite: it's 7200 C. Put the numbers in: Q = 1 × 7200 = 7200
    S12 (wrong): wait how did u get 7200? i thought it was like 2 times something
    T12: Your turn: 4 C of charge flows through a fuse in 800 ms. What is the current, in amperes (A)?
    [screenshot 10-exchange-12-phone.png and 10-exchange-12-laptop.png] exchange-12
    S13 (offtopic): bro im starving can we just finish this later
    T13: Not quite: it's 5 A. Put the numbers in: I = 4 ÷ 0.8 = 5
    S14 (wrong): wait so u divide charge by time? thats confusing ngl
    T14: Your turn: A current of 50 mA flows for 600 s. How much charge flows, in coulombs (C)?
    S15 (try): ugh maths is hard. so like 50 times 600? or divide? idk maybe 30000?
    T15: Not quite: it's 30 C. Put the numbers in: Q = 0.05 × 600 = 30
    [screenshot 11-exchange-15-phone.png and 11-exchange-15-laptop.png] exchange-15
    [counter now "1/7 covered" after T15]
    S16 (try): wait why 0.05 tho? i said 50
    T16: Every torch, phone and kettle runs on something moving through its wires. Turn on a torch and the bulb lights at once.
    S17 (idk): idk what ur on about lol
    T17: In a circuit, a bulb is called a lamp.
    S18 (idk): whats a circuit tho
    T18: A circuit is a complete loop of wire that charge can flow round, like a running track where you end up back where you started. If there's a gap anywhere, nothing gets round. Picture a torch with a gap in its loop. What happens to the bulb?
    [screenshot 12-exchange-18-phone.png and 12-exchange-18-laptop.png] exchange-18
    S19 (wrong): it still lights up cuz theres electricity?
    T19: Not quite — with a gap in the circuit, nothing can flow round, so the bulb stays off.
    S20 (idk): ohh so the loop has to be complete or nothing happens?
    T20: Yes, exactly. A complete loop is called a closed circuit, and if it's broken anywhere, the flow stops everywhere. Picture a running track with a gap in it. What happens to the runners trying to get round?
    S21 (try): they cant get all the way round innit
    T21: Yes — with a gap in the track, the runners can't get all the way round, so nothing flows.
    [screenshot 13-exchange-21-phone.png and 13-exchange-21-laptop.png] exchange-21
    S22 (try): got it so like gaps = no flow. makes sense
    T22: You cannot see charge, but you can see what it does. A complete loop is a closed circuit.
    S23 (try): yh ok so closed circuit means complete loop right
    T23: Charge only flows round a closed circuit if it includes something to push it, such as a cell or a battery.
    S24 (try): so like a battery pushes the charge round? thats the thing that makes it go?
    T24: Yes, a battery is two or more cells joined together, and that's what pushes the charge round. If you took the battery out of a torch circuit, what would you expect the bulb to do?
    [screenshot 14-exchange-24-phone.png and 14-exchange-24-laptop.png] exchange-24
    S25 (try): it would turn off cuz theres nothing to push the charge anymore
    T25: Yes, it would turn off, and you gave the right reason: without the battery there's nothing pushing the charge round the circuit.
    S26 (try): sick so batteries are like super important then
    T26: That push is called a potential difference, and the next key point explains it.
    S27 (try): whats potential difference tho
    T27: Potential difference is the push that makes charge flow through a component. It's measured in volts (V), and you'll often hear it called voltage. If a circuit has no source of this push, what would happen to the charge?
    [screenshot 15-exchange-27-phone.png and 15-exchange-27-laptop.png] exchange-27
    S28 (idk): whats a component tho
    T28: A component is any single part in a circuit, like a bulb, a switch or a cell, that the charge flows through.
    S29 (offtopic): whats a switch tho
    T29: A switch is a part that opens or closes a gap in a circuit, to stop or start the current. Think of a gap in the running track: the runners can't get round. If you open a switch in a torch, what happens to the bulb?
    S30 (try): it turns off cuz the gap stops the charge flowing
    T30: Yes — the bulb turns off because the gap in the circuit stops the charge flowing.
    [screenshot 16-exchange-30-phone.png and 16-exchange-30-laptop.png] exchange-30
    S31 (try): ok got it. so switches make gaps to stop stuff?
    T31: Yes, a switch makes a gap on purpose to stop the current, and closing it again lets the charge flow once more. Picture a torch that won't come on even though the switch is closed.
    S32 (minimal): what?
    T32: Sorry, that was a lot. Simply: a switch makes a gap in the loop, and a gap means the charge can't get round.
    S33 (idk): yeah ok that makes sense now
    T33: Break the loop anywhere and the flow stops everywhere. A switch does this on purpose: it opens a gap in the loop.
    [diagram shown in the conversation under T33: "A closed circuit: a cell, a switch and a lamp in one loop."]
    [screenshot 17-diagram-33-phone.png and 17-diagram-33-laptop.png] diagram-33
    [screenshot 18-exchange-33-phone.png and 18-exchange-33-laptop.png] exchange-33
    S34 (try): so closing the switch lets charge flow again?
    T34: Yes, closing the switch fills the gap, so the loop is complete and charge can flow again. Now picture a torch with a cell, a lamp and a closed switch, but one wire has come loose and left a gap. What happens to the lamp?
    S35 (try): the lamp turns off cuz theres a gap in the loop
    T35: Yes — the lamp goes off because a gap anywhere in the loop means no charge can get round.
    S36 (try): yh so gaps anywhere = no flow. gets it now
    T36: In a single loop, the current is the same at every point, because charge is not used up on the way round.
    [diagram shown in the conversation under T36: "The same loop with an ammeter in it, measuring the current."]
    [screenshot 19-diagram-36-phone.png and 19-diagram-36-laptop.png] diagram-36
    [screenshot 20-exchange-36-phone.png and 20-exchange-36-laptop.png] exchange-36
    S37 (wrong): so like the charge gets weaker as it goes round the loop?
    T37: No — the charge doesn't get weaker. It isn't used up, so the same amount keeps going round the loop. If you put an ammeter at two different points in one loop, what would you expect the two readings to be?
    S38 (wrong): whats ammeter
    T38: An ammeter is the meter you connect into a circuit to measure how much current is flowing, so you read the current straight off it.
    S39 (try): they'd be the same right cuz charge doesnt get used up
    T39: So it does not matter where you put the ammeter.
    [screenshot 21-exchange-39-phone.png and 21-exchange-39-laptop.png] exchange-39
    S40 (offtopic): im starving can we finish soon lol
    T40: The amount of charge that passes is the charge flow, Q. To find it, multiply the current by the time in seconds.
    S41 (minimal): ok but like what do i need to do with that
    T41: Worked example 1 of 3: A current of 2 A flows through a lamp for 5 s. How much charge flows? Tap the button under it to see each step.
    S42 (try): um so charge = current times time? so 2 times 5 = like 10?
    T42: Worked example 2 of 3: A current of 0.5 A flows through a lamp for 2 minutes. How much charge flows? Tap the button under it to see each step.
    [screenshot 22-exchange-42-phone.png and 22-exchange-42-laptop.png] exchange-42
    S43 (wrong): is it 0.5 times 2 so like 1?
    T43: Worked example 3 of 3: A charge of 30 C flows past a point in 60 s. What is the current? Tap the button under it to see each step.
    S44 (try): so current = charge divided by time? so 30 divided by 60... like 0.5?
    T44: Try it: predict first, then use the circuit to check. Open the switch, add cells, and watch both ammeters. Tap Next when you are done.
    [predict-first widget shown under T44: "PREDICT FIRST (1 OF 3)"]
    [screenshot 23-widget-44-phone.png and 23-widget-44-laptop.png] widget-44
    [stopped: key point 1 ended (counter "1/7 covered") and its predict-first widget showed, at T44]
    [screenshot 24-end-phone.png and 24-end-laptop.png] end
