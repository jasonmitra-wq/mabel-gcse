# Site test: p2-domestic (lesson, 2026-11-25)

**PASS** · cost $0.0334 (24 tool calls, 14 calls from the site; tutor claude-sonnet-5-5 $0.0096)

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

    Lesson p2-domestic (Physics › Electricity › Mains electricity — AC, DC and household circuits).
    [screenshot 01-home-laptop.png] home
    [screenshot 02-subjects-laptop.png] subjects
    [screenshot 03-topics-physics-laptop.png] topics-physics
    [screenshot 04-quick-check-offer-laptop.png] quick-check-offer
    [the quick check is offered on its own screen] tapped "Not now: show the lessons"
    [screenshot 05-lessons-p2-laptop.png] lessons-P2
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Welcome! This lesson is about the electricity in your home: how the electricity from a wall socket differs from a battery's, what the three wires in a cable do, and why one of them is so dangerous to touch.
    [screenshot 06-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (tapped "Next")
    T1: First, two quick questions you will need today. The lights and sockets in a home are wired in parallel. What potential difference does each appliance get?
    [side picture after T1: none; newest in the chat: none]
    S2 (try): the full supply potentail difference
    T2: Second: what is potential difference?
      [T2 shown first: Yes: each appliance is on its own branch across the supply, so each gets the full supply potential difference.]
    S3 (try, tapped the button): the push that drives charge round a circuit
    T3: Now, this lesson. A cell or battery always pushes the same way round a circuit: one end is always positive and the other always negative. A potential difference whose direction never changes like this is called a direct potential difference.
    [screenshot 07-exchange-3-laptop.png] exchange-3
      [T3 shown first: Yes: potential difference is the push that drives charge round a circuit, measured in volts (V).]
    S4 (tapped "Next")
    T4: A direct potential difference drives a current that flows one way only, called direct current, or dc for short. Cells, batteries and solar cells give dc, and torches, phones and laptops run on it.
    S5 (tapped "Next")
    T5: Look at the top graph, for a cell, and leave the bottom one for now. Time runs along the bottom, and the height of the line shows the potential difference. The line stays on the same side of zero the whole time: the push never changes direction.
    [side picture after T5: "Two graphs of potential difference against time, one for a cell and one for the mains."; newest in the chat: picture "Two graphs of potential difference against time, one for a cell and one for the mains."]
    S6 (tapped "Next")
    T6: The mains supply, from the sockets in your home, is different. Its push keeps reversing direction, many times every second. A potential difference that keeps reversing like that is called an alternating potential difference.
    [screenshot 08-exchange-6-laptop.png] exchange-6
    S7 (tapped "Next")
    T7: An alternating potential difference drives a current that keeps reversing too, called alternating current, or ac for short.
    S8 (tapped "Next")
    T8: Look at the bottom graph. The line goes above zero, then below zero, then above again. Below zero means the push is the other way round. One trip up, down and back to the start is called one cycle.
    S9 (tapped "Next")
    T9: Which of these gives a direct potential difference?
    [screenshot 09-exchange-9-laptop.png] exchange-9
    S10 (idk): idk
    T10: Direct means the push never changes direction. Which of these keeps pushing the same way round the circuit?
    [diagram shown in the conversation under T10: "Two graphs of potential difference against time, one for a cell and one for the mains."]
    [screenshot 10-diagram-10-laptop.png] diagram-10
      [T10 easier step]
    S11 (idk, tapped the button): a torch battery
    T11: How many complete cycles an alternating potential difference goes through each second is called its frequency.
      [T11 shown first: Yes: a battery's push never changes direction, so it is direct. The mains from a socket is alternating.]
    S12 (tapped "Next")
    T12: Frequency is measured in hertz (Hz). One hertz is one cycle each second, so 50 Hz means 50 complete cycles every second.
    [screenshot 11-exchange-12-laptop.png] exchange-12
    S13 (tapped "Next")
    T13: In the UK, the mains supply is ac with a frequency of 50 Hz.
    S14 (tapped "Next")
    T14: The UK mains has a potential difference of about 230 V. The mains push swings back and forth, and 230 V is the usual way of giving its size. A torch cell gives about 1.5 V, so the mains push is far bigger.
    S15 (tapped "Next")
    T15: In some countries the mains completes 120 cycles in 2 seconds. What is its frequency, in hertz?
    [screenshot 12-exchange-15-laptop.png] exchange-15
    S16 (what): wdym
    T16: Now, the question again: In some countries the mains completes 120 cycles in 2 seconds. What is its frequency, in hertz?
      [T16 shown first: The tutor is asking how many complete cycles the mains supply does in every single second. In the UK, 50 cycles happen each second, which is 50 Hz. Here the country does 120 cycles in 2 seconds, so you need to work out how many that fits into just 1 second.]
    S17 (try): 60 hz
    T17: Back to dc. Which is the best way to say what a direct potential difference is?
      [T17 shown first: Yes: 60 Hz. 120 cycles in 2 seconds is 60 cycles each second.]
    S18 (try, tapped the button): one whose direction never changes
    T18: In one line: what is the difference between a direct and an alternating potential difference?
    [screenshot 13-exchange-18-laptop.png] exchange-18
      [T18 shown first: Yes: a direct potential difference is one whose direction never changes.]
    S19 (idk): dont know
    T19: Most appliances, like a kettle or a toaster, are joined to the mains by a cable with three wires inside it, each wrapped in plastic. A cable like that is called three-core cable.
    [counter now "1/3 covered" after T19; AI calls from the site so far: 4, $0.0024]
      [T19 shown first: No problem. A good line would be: a direct potential difference never changes direction, but an alternating one keeps reversing direction.]
    [side picture after T19: none; newest in the chat: picture "Two graphs of potential difference against time, one for a cell and one for the mains."]
    S20 (tapped "Next")
    T20: Look at the picture of a plug. The plastic around each wire, called insulation, has its own colour, so that anyone can tell the wires apart: brown, blue, and green-and-yellow stripes.
    [side picture after T20: "Three-core cable in a plug: brown, blue, and green-and-yellow wires."; newest in the chat: picture "Three-core cable in a plug: brown, blue, and green-and-yellow wires."]
    S21 (tapped "Next")
    T21: One more idea before the wires. Electricians call the ground earth, and use it as the zero for measuring. When a wire is said to be at 230 V, that means there are 230 V between that wire and earth. Earth itself is at 0 V.
    [screenshot 14-exchange-21-laptop.png] exchange-21
    S22 (tapped "Next")
    T22: The brown wire is called the live wire: the wire that carries the alternating potential difference from the supply. Between the live wire and earth there is about 230 V.
    S23 (tapped "Next")
    T23: Which colour is the insulation on the live wire?
    S24 (try, tapped the button): Brown
    T24: The blue wire is called the neutral wire: the wire that completes the circuit, so that charge can flow back to the supply. The neutral wire is at, or close to, 0 V.
    [screenshot 15-exchange-24-laptop.png] exchange-24
      [T24 shown first: Yes: brown, the colour of the live wire.]
    S25 (tapped "Next")
    T25: The green-and-yellow striped wire is called the earth wire: a safety wire that joins the metal case of an appliance to the ground. The earth wire is at 0 V.
    S26 (tapped "Next")
    T26: Predict: a kettle is working normally. Which of the three wires carries no current?
    S27 (try, tapped the button): the earth wire
    T27: In one line: what does each of the three wires do?
    [screenshot 16-exchange-27-laptop.png] exchange-27
      [T27 shown first: Yes: the earth wire. Normally the current goes round through the live and neutral wires, reversing back and forth with the ac. The earth wire only carries a current if something goes wrong with the appliance.]
    S28 (try): live carries curent, neutral completes circuit, earth is safety
    T28: Now, why the earth wire matters. Suppose a loose live wire inside a metal kettle touches the kettle's metal case. Without an earth wire, the case is now at about 230 V, and anyone who touches it could get an electric shock: a current through their body.
    [counter now "2/3 covered" after T28; AI calls from the site so far: 6, $0.0030]
      [T28 shown first: Partly there. Still needed: the live wire carries the alternating potential difference from the supply. You have this: the neutral wire completes the circuit. You have this: the earth wire is a safety wire.]
    [side picture after T28: none; newest in the chat: picture "Three-core cable in a plug: brown, blue, and green-and-yellow wires."]
    S29 (tapped "Next")
    T29: Predict: now the kettle's metal case is joined to the earth wire, and the same loose wire touches it. Which is true?
    S30 (try, tapped the button): charge flows down the earth wire, not through you
    T30: Joining a metal case to the ground through the earth wire is called earthing. Earthing is why a metal kettle or toaster has a three-core cable.
    [screenshot 17-exchange-30-laptop.png] exchange-30
      [T30 shown first: Yes: the earth wire gives the charge an easy path to the ground, so the case does not stay at 230 V.]
    S31 (tapped "Next")
    T31: Your body is joined to the ground through your feet, so you are at about 0 V too. If you touched a live wire, there would be about 230 V between your hand and your feet. That potential difference drives a current through your body: an electric shock.
    S32 (tapped "Next")
    T32: In a lamp circuit, the switch is in the live wire. Turning the switch off makes a gap in the live wire, between the supply and the lamp.
    S33 (tapped "Next")
    T33: Predict: the lamp is switched off. An electrician touches the live wire on the supply's side of the gap. Is that safe?
    [screenshot 18-exchange-33-laptop.png] exchange-33
    S34 (try): no its not safe
    T34: Any connection between the live wire and earth is dangerous. A person, a wet surface or a metal tool could make that connection, and a current would flow through it to the ground.
      [T34 shown first: Yes: not safe. The live wire is still joined to the supply, at about 230 V, and the electrician is at 0 V, so a current would flow through the electrician.]
    S35 (tapped "Next")
    T35: Water can make a connection between a live wire and earth, so keep electrical appliances away from water. A damaged cable can leave a live wire where you could touch it, so check cables before you use them.
    S36 (tapped "Next")
    T36: In one line: why is touching a live wire dangerous, even with the switch off?
    [screenshot 19-exchange-36-laptop.png] exchange-36
    S37 (try): curent flows to ground
    T37: Now for a short quiz on the whole lesson: six questions. Take your time.
      [T37 shown first: Partly there. Still needed: the live wire is still at about 230 V. Still needed: you are at 0 V, so there is a big potential difference across you. You have this: a current flows through you.]
    [side picture after T37: none; newest in the chat: none]
    S38 (tapped "Next")
    T38: Quiz, question 1 of 6: What is the frequency of the UK mains supply?
    S39 (ask): whats frequency mean
    T39: Have a go at the question: Quiz, question 1 of 6: What is the frequency of the UK mains supply?
    [screenshot 20-exchange-39-laptop.png] exchange-39
      [T39 shown first: Frequency means how many complete cycles the alternating current goes through in one second. One cycle is the current flowing one way, then reversing, then returning to how it started. So the quiz is asking how many times per second the UK mains supply repeats that pattern.]
    S40 (what): wdym
    T40: Back to the question: Quiz, question 1 of 6: What is the frequency of the UK mains supply?
      [T40 shown first: The question about frequency is asking how many times per second the mains supply goes through one full cycle of reversing its direction. The answer is a number, with the unit hertz (Hz) after it.]
    S41 (try, tapped the button): 50 hz
    T41: Quiz, question 2 of 6: What is the potential difference of the UK mains supply?
      [T41 shown first: Yes. 50 Hz: 50 cycles every second.]
    S42 (try, tapped the button): about 230 v
    T42: Quiz, question 3 of 6: What colour is the insulation on the neutral wire?
    [screenshot 21-exchange-42-laptop.png] exchange-42
      [T42 shown first: Yes. About 230 V.]
    S43 (try, tapped the button): blue
    T43: Quiz, question 4 of 6: What is an alternating potential difference?
      [T43 shown first: Yes. The neutral wire is blue.]
    S44 (idk): dont know
    T44: Quiz, question 5 of 6: Which wire is the safety wire, joined to the metal case of an appliance?
      [T44 shown first: An alternating potential difference keeps reversing direction.]
    S45 (try, tapped the button): the earth wire
    T45: Quiz, question 6 of 6: Why does touching a live wire give you an electric shock?
    [screenshot 22-exchange-45-laptop.png] exchange-45
      [T45 shown first: Yes. The earth wire joins the case to the ground.]
    S46 (idk): not sure
    T46: That's the end of the quiz: you got 4 out of 6.
      [T46 shown first: OK. The wire is at about 230 V and you are at 0 V, so a current flows through you.]
    S47 (tapped "Next")
    T47: You have finished this lesson on mains electricity. Tap a button to go on.
      [T47 shown first: Summary, point 1 of 3: A direct potential difference never changes direction, but an alternating one keeps reversing direction.]
      [T47 shown first: Summary, point 2 of 3: The live wire carries the alternating potential difference from the supply, the neutral wire completes the circuit, and the earth wire is a safety wire.]
      [T47 shown first: Summary, point 3 of 3: The live wire is still at about 230 V and you are at 0 V, so the big potential difference drives a current through you.]
    [counter now "3/3 covered" after T47; AI calls from the site so far: 14, $0.0099]
    S48 (closing): ok thx
    T48: You're welcome. Tap "Go to the slides" or "Home" when you are ready.
    [screenshot 23-exchange-48-laptop.png] exchange-48
    S49 (closing, tapped the button): go to the slides
    [S49 left the lesson: the page is no longer the AI lesson (a button such as Home or the slides)]
    [screenshot 24-end-laptop.png] end
    [tutor-side time: 0.4 minutes over 48 exchanges]
