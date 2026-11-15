# Mains electricity — ac, dc and your home's wiring: the scripted AI lesson (key points 1, 2, 3)

This is every message she can see, in order, written once and stored (p2-domestic.script.json). Each tutor message is one chat bubble. Under each question: what she sees for a right answer, for each likely wrong answer, and if she says she does not know (the easier step first, then a smaller question, then the answer and why).

At any point she can ask a question of her own. The AI answers it from the lesson in at most 60 words, then asks the same question again. Apart from that and marking what she types, nothing here is written by the AI.

## Key point 1: ac vs dc

1. [1.1] Tutor: Welcome! This lesson is about the electricity in your home: how the electricity from a wall socket differs from a battery's, what the three wires in a cable do, and why one of them is so dangerous to touch.
   Button: Next

2. [1.1a] Tutor asks: First, two quick questions you will need today. The lights and sockets in a home are wired in parallel. What potential difference does each appliance get?
   Buttons: "A share of the supply potential difference" / "The full supply potential difference" (she can also type)
   - Right ("The full supply potential difference"): Yes: each appliance is on its own branch across the supply, so each gets the full supply potential difference.
   - "A share of the supply potential difference" (wrong idea shared: ): Not quite: sharing is the series rule. In parallel each appliance has its own branch across the supply, so each gets the full supply potential difference.
   - Don't know (first time): In parallel, each branch is joined straight across the supply. Is the push shared, or all of it? (same buttons)
   - Still doesn't know: That's fine. In parallel, each appliance is on its own branch across the supply, so each gets the full supply potential difference.
   - She asks to move on or skip: In parallel, each appliance is on its own branch across the supply, so each gets the full supply potential difference.

3. [1.1c] Tutor asks: Second: what is potential difference?
   Buttons: "How much charge flows each second" / "How hard it is for charge to flow" / "The push that drives charge round a circuit" (she can also type)
   - Right ("The push that drives charge round a circuit"): Yes: potential difference is the push that drives charge round a circuit, measured in volts (V).
   - "How much charge flows each second" (wrong idea current: ): Not quite: how much charge flows each second is the current. Potential difference is the push that drives charge round a circuit, measured in volts (V).
   - "How hard it is for charge to flow" (wrong idea hard: ): Not quite: how hard it is for charge to flow is the resistance. Potential difference is the push that drives charge round a circuit, measured in volts (V).
   - Don't know (first time): A cell gives the charge a push. Which button is about a push? (same buttons)
   - Still doesn't know: That's fine. Potential difference is the push that drives charge round a circuit, measured in volts (V).
   - She asks to move on or skip: Potential difference is the push that drives charge round a circuit, measured in volts (V).

4. [1.3] Tutor: Now, this lesson. A cell or battery always pushes the same way round a circuit: one end is always positive and the other always negative. A potential difference whose direction never changes like this is called a direct potential difference.
   Button: Next

5. [1.3b] Tutor: A direct potential difference drives a current that flows one way only, called direct current, or dc for short. Cells, batteries and solar cells give dc, and torches, phones and laptops run on it.
   Button: Next

6. [1.4] Tutor: Look at the top graph, for a cell, and leave the bottom one for now. Time runs along the bottom, and the height of the line shows the potential difference. The line stays on the same side of zero the whole time: the push never changes direction.
   (Under it, a picture: "Two graphs of potential difference against time, one for a cell and one for the mains.", labelled time, potential difference.)
   Button: Next

7. [1.5] Tutor: The mains supply, from the sockets in your home, is different. Its push keeps reversing direction, many times every second. A potential difference that keeps reversing like that is called an alternating potential difference.
   Button: Next

8. [1.5b] Tutor: An alternating potential difference drives a current that keeps reversing too, called alternating current, or ac for short.
   Button: Next

9. [1.6] Tutor: Look at the bottom graph. The line goes above zero, then below zero, then above again. Below zero means the push is the other way round. One trip up, down and back to the start is called one cycle.
   Button: Next

10. [1.7] Tutor asks: Which of these gives a direct potential difference?
   Buttons: "A socket in your home" / "A torch battery" / "Both of them" (she can also type)
   - Right ("A torch battery"): Yes: a battery's push never changes direction, so it is direct. The mains from a socket is alternating.
   - "A socket in your home" (wrong idea mains: ): Not quite: the sockets in your home give an alternating potential difference, which keeps reversing. A torch battery gives a direct one: its push never changes direction.
   - "Both of them" (wrong idea both: ): Not quite: only the torch battery. Its push never changes direction. The mains from a socket keeps reversing, so it is alternating.
   - Don't know (first time): Direct means the push never changes direction. Which of these keeps pushing the same way round the circuit? (same buttons)
   - Still doesn't know: That's fine. A battery's push never changes direction, so it is direct. The mains keeps reversing, so it is alternating.
   - She asks to move on or skip: A battery's push never changes direction, so it is direct. The mains keeps reversing, so it is alternating.

11. [1.9] Tutor: How many complete cycles an alternating potential difference goes through each second is called its frequency.
   Button: Next

12. [1.9b] Tutor: Frequency is measured in hertz (Hz). One hertz is one cycle each second, so 50 Hz means 50 complete cycles every second.
   Button: Next

13. [1.10] Tutor: In the UK, the mains supply is ac with a frequency of 50 Hz.
   Button: Next

14. [1.10b] Tutor: The UK mains has a potential difference of about 230 V. The mains push swings back and forth, and 230 V is the usual way of giving its size. A torch cell gives about 1.5 V, so the mains push is far bigger.
   Button: Next

15. [1.11] Tutor asks: In some countries the mains completes 120 cycles in 2 seconds. What is its frequency, in hertz?
   She types a number.
   - Right (60 Hz): Yes: 60 Hz. 120 cycles in 2 seconds is 60 cycles each second.
   - She types 120 (wrong idea cycles): Not quite: 60 Hz. 120 cycles took 2 seconds, so in one second there are 120 ÷ 2 = 60 cycles: 60 Hz.
   - She types 240 (wrong idea times): Not quite: 60 Hz. Divide the cycles by the seconds: 120 ÷ 2 = 60 cycles each second.
   - She types 50 (wrong idea uk): Not quite: 60 Hz. 50 Hz is the UK mains. Here 120 cycles take 2 seconds: 120 ÷ 2 = 60 cycles each second.
   - Any other wrong answer: Not quite: 60 Hz. 120 cycles in 2 seconds is 120 ÷ 2 = 60 cycles each second.
   - Don't know (first time): Frequency is the number of cycles in one second. If 120 cycles take 2 seconds, how many happen in 1 second?
   - Still doesn't know: That's fine. 120 cycles in 2 seconds is 120 ÷ 2 = 60 cycles each second: 60 Hz.
   - She asks to move on or skip: 120 cycles in 2 seconds is 120 ÷ 2 = 60 cycles each second: 60 Hz.

16. [1.11b] Tutor asks: Back to dc. Which is the best way to say what a direct potential difference is?
   Buttons: "One that pushes charge round faster" / "One whose direction never changes" / "One that is always 230 V" (she can also type)
   - Right ("One whose direction never changes"): Yes: a direct potential difference is one whose direction never changes.
   - "One that is always 230 V" (wrong idea mains: ): Not quite: about 230 V is the mains, which is alternating. A direct potential difference is one whose direction never changes.
   - "One that pushes charge round faster" (wrong idea faster: ): Not quite: direct is not about how hard or fast. A direct potential difference is one whose direction never changes.
   - Don't know (first time): Direct and alternating are about which way the push points. Which button is about direction? (same buttons)
   - Still doesn't know: That's fine. A direct potential difference is one whose direction never changes.
   - She asks to move on or skip: A direct potential difference is one whose direction never changes.

17. [1.12] Tutor: In one line: what is the difference between a direct and an alternating potential difference?
   She types one line. The AI checks which of these points it makes: "a direct potential difference never changes direction", "an alternating potential difference keeps reversing direction".
   - All of them: Yes, your line has it: a direct potential difference never changes direction; and an alternating potential difference keeps reversing direction.
   - Some: Your line gets this right: <the points it makes>. A full line also says: <the points it misses>.
   - None: A good line would say: a direct potential difference never changes direction; and an alternating potential difference keeps reversing direction.
   - Don't know: No problem. A good line would be: a direct potential difference never changes direction, but an alternating one keeps reversing direction.

## Key point 2: Three-core cable

18. [2.1] Tutor: Most appliances, like a kettle or a toaster, are joined to the mains by a cable with three wires inside it, each wrapped in plastic. A cable like that is called three-core cable.
   Button: Next

19. [2.2] Tutor: Look at the picture of a plug. The plastic around each wire, called insulation, has its own colour, so that anyone can tell the wires apart: brown, blue, and green-and-yellow stripes.
   (Under it, a picture: "Three-core cable in a plug: brown, blue, and green-and-yellow wires.", labelled brown, blue, green and yellow.)
   Button: Next

20. [2.2b] Tutor: One more idea before the wires. Electricians call the ground earth, and use it as the zero for measuring. When a wire is said to be at 230 V, that means there are 230 V between that wire and earth. Earth itself is at 0 V.
   Button: Next

21. [2.3] Tutor: The brown wire is called the live wire: the wire that carries the alternating potential difference from the supply. Between the live wire and earth there is about 230 V.
   Button: Next

22. [2.5] Tutor asks: Which colour is the insulation on the live wire?
   Buttons: "Blue" / "Brown" / "Green and yellow stripes" (she can also type)
   - Right ("Brown"): Yes: brown, the colour of the live wire.
   - "Blue" (wrong idea blue: ): Not quite: blue is another wire, which you meet next. The live wire is brown.
   - "Green and yellow stripes" (wrong idea earth: ): Not quite: green and yellow stripes is another wire, which you meet soon. The live wire is brown.
   - Don't know (first time): The message just before said which colour the live wire is. Brown, blue, or green and yellow? (same buttons)
   - Still doesn't know: That's fine. The live wire is brown.
   - She asks to move on or skip: The live wire is brown.

23. [2.4] Tutor: The blue wire is called the neutral wire: the wire that completes the circuit, so that charge can flow back to the supply. The neutral wire is at, or close to, 0 V.
   Button: Next

24. [2.6] Tutor: The green-and-yellow striped wire is called the earth wire: a safety wire that joins the metal case of an appliance to the ground. The earth wire is at 0 V.
   Button: Next

25. [2.7] Tutor asks: Predict: a kettle is working normally. Which of the three wires carries no current?
   Buttons: "The neutral wire" / "The earth wire" / "The live wire" (she can also type)
   - Right ("The earth wire"): Yes: the earth wire. Normally the current goes round through the live and neutral wires, reversing back and forth with the ac. The earth wire only carries a current if something goes wrong with the appliance.
   - "The neutral wire" (wrong idea neutral: ): Not quite: the neutral wire is part of the loop the current goes round, with the live wire. The earth wire carries no current unless something goes wrong.
   - "The live wire" (wrong idea live: ): Not quite: the live wire is part of the loop the current goes round, with the neutral wire. The earth wire carries no current unless something goes wrong.
   - Don't know (first time): The live and neutral wires make the loop that the current goes round. Which wire is not part of that loop? (same buttons)
   - Still doesn't know: That's fine. Normally the current goes along the live wire and back along the neutral wire. The earth wire only carries a current if there is a fault.
   - She asks to move on or skip: Normally the current goes along the live wire and back along the neutral wire. The earth wire only carries a current if there is a fault.

26. [2.8] Tutor: In one line: what does each of the three wires do?
   She types one line. The AI checks which of these points it makes: "the live wire carries the alternating potential difference from the supply", "the neutral wire completes the circuit", "the earth wire is a safety wire".
   - All of them: Yes, your line has it: the live wire carries the alternating potential difference from the supply; and the neutral wire completes the circuit; and the earth wire is a safety wire.
   - Some: Your line gets this right: <the points it makes>. A full line also says: <the points it misses>.
   - None: A good line would say: the live wire carries the alternating potential difference from the supply; and the neutral wire completes the circuit; and the earth wire is a safety wire.
   - Don't know: No problem. A good line would be: the live wire carries the alternating potential difference from the supply, the neutral wire completes the circuit, and the earth wire is a safety wire.

## Key point 3: Earthing

27. [3.1] Tutor: Now, why the earth wire matters. Suppose a loose live wire inside a metal kettle touches the kettle's metal case. Without an earth wire, the case is now at about 230 V, and anyone who touches it could get an electric shock: a current through their body.
   Button: Next

28. [3.3] Tutor asks: Predict: now the kettle's metal case is joined to the earth wire, and the same loose wire touches it. Which is true?
   Buttons: "The case stays at about 230 V" / "Charge flows down the earth wire, not through you" / "The earth wire stops any current flowing" (she can also type)
   - Right ("Charge flows down the earth wire, not through you"): Yes: the earth wire gives the charge an easy path to the ground, so the case does not stay at 230 V.
   - "The earth wire stops any current flowing" (wrong idea stops: ): Not quite: the earth wire does not stop the current. It gives the charge an easy path to the ground, so the charge goes that way and not through you.
   - "The case stays at about 230 V" (wrong idea stays: ): Not quite: the earth wire joins the case to the ground, at 0 V. Charge flows down the earth wire, so the case does not stay at about 230 V.
   - Don't know (first time): The earth wire joins the metal case to the ground. Which button sends the charge that way? (same buttons)
   - Still doesn't know: That's fine. The earth wire gives the charge an easy path to the ground, so the case does not stay at 230 V.
   - She asks to move on or skip: The earth wire gives the charge an easy path to the ground, so the case does not stay at 230 V.

29. [3.3b] Tutor: Joining a metal case to the ground through the earth wire is called earthing. Earthing is why a metal kettle or toaster has a three-core cable.
   Button: Next

30. [3.4] Tutor: Your body is joined to the ground through your feet, so you are at about 0 V too. If you touched a live wire, there would be about 230 V between your hand and your feet. That potential difference drives a current through your body: an electric shock.
   Button: Next

31. [3.4b] Tutor: In a lamp circuit, the switch is in the live wire. Turning the switch off makes a gap in the live wire, between the supply and the lamp.
   Button: Next

32. [3.5] Tutor asks: Predict: the lamp is switched off. An electrician touches the live wire on the supply's side of the gap. Is that safe?
   Buttons: "Yes: the switch is off, so the wire is at 0 V" / "Yes: no current flows when the lamp is off" / "No, it is not safe" (she can also type)
   - Right ("No, it is not safe"): Yes: not safe. The live wire is still joined to the supply, at about 230 V, and the electrician is at 0 V, so a current would flow through the electrician.
   - "Yes: the switch is off, so the wire is at 0 V" (wrong idea switch: ): Not quite: not safe. The switch only makes a gap further along. The bit of live wire between the switch and the supply is still joined to the supply, at about 230 V, and the electrician is at 0 V.
   - "Yes: no current flows when the lamp is off" (wrong idea current: ): Not quite: not safe. No current flows through the lamp, but the live wire is still at about 230 V. Touching it joins it to the ground through the electrician, so a current flows through the electrician.
   - Don't know (first time): Turning the switch off makes a gap, but the bit of live wire between the switch and the supply is still joined to the supply. Which button fits? (same buttons)
   - Still doesn't know: That's fine. The live wire is still joined to the supply at about 230 V, and the electrician is at 0 V, so a current would flow through the electrician.
   - She asks to move on or skip: The live wire is still joined to the supply at about 230 V, and the electrician is at 0 V, so a current would flow through the electrician.

33. [3.6] Tutor: Any connection between the live wire and earth is dangerous. A person, a wet surface or a metal tool could make that connection, and a current would flow through it to the ground.
   Button: Next

34. [3.6b] Tutor: Water can make a connection between a live wire and earth, so keep electrical appliances away from water. A damaged cable can leave a live wire where you could touch it, so check cables before you use them.
   Button: Next

35. [3.7] Tutor: In one line: why is touching a live wire dangerous, even with the switch off?
   She types one line. The AI checks which of these points it makes: "the live wire is still at about 230 V", "you are at 0 V, so there is a big potential difference across you", "a current flows through you".
   - All of them: Yes, your line has it: the live wire is still at about 230 V; and you are at 0 V, so there is a big potential difference across you; and a current flows through you.
   - Some: Your line gets this right: <the points it makes>. A full line also says: <the points it misses>.
   - None: A good line would say: the live wire is still at about 230 V; and you are at 0 V, so there is a big potential difference across you; and a current flows through you.
   - Don't know: No problem. A good line would be: the live wire is still at about 230 V and you are at 0 V, so the big potential difference drives a current through you.

36. [3.8] Tutor: Now for a short quiz on the whole lesson: six questions. Take your time.
   Button: Next

37. [3.9] Tutor asks: Quiz, question 1 of 6: What is the frequency of the UK mains supply?
   Buttons: "1.5 Hz" / "50 Hz" / "230 Hz" (she can also type)
   - Right ("50 Hz"): Yes. 50 Hz: 50 cycles every second.
   - "230 Hz" (wrong idea w1: ): Not quite. 230 is the potential difference, in volts. The frequency is 50 Hz.
   - "1.5 Hz" (wrong idea w2: ): Not quite. The UK mains frequency is 50 Hz: 50 cycles every second.
   - Still doesn't know: That's fine. The UK mains frequency is 50 Hz.
   - She asks to move on or skip: The UK mains frequency is 50 Hz.

38. [3.10] Tutor asks: Quiz, question 2 of 6: What is the potential difference of the UK mains supply?
   Buttons: "About 50 V" / "About 1.5 V" / "About 230 V" (she can also type)
   - Right ("About 230 V"): Yes. About 230 V.
   - "About 50 V" (wrong idea w1: ): Not quite. 50 is the frequency, in hertz. The potential difference is about 230 V.
   - "About 1.5 V" (wrong idea w2: ): Not quite. 1.5 V is a torch cell. The mains is about 230 V.
   - Still doesn't know: That's fine. The UK mains is about 230 V.
   - She asks to move on or skip: The UK mains is about 230 V.

39. [3.11] Tutor asks: Quiz, question 3 of 6: What colour is the insulation on the neutral wire?
   Buttons: "Green and yellow stripes" / "Blue" / "Brown" (she can also type)
   - Right ("Blue"): Yes. The neutral wire is blue.
   - "Brown" (wrong idea w1: ): Not quite. Brown is the live wire. The neutral wire is blue.
   - "Green and yellow stripes" (wrong idea w2: ): Not quite. Green and yellow is the earth wire. The neutral wire is blue.
   - Still doesn't know: That's fine. The neutral wire is blue.
   - She asks to move on or skip: The neutral wire is blue.

40. [3.12] Tutor asks: Quiz, question 4 of 6: What is an alternating potential difference?
   Buttons: "One that never changes direction" / "One that keeps reversing direction" / "One that comes from a battery" (she can also type)
   - Right ("One that keeps reversing direction"): Yes. It keeps reversing direction, like the mains.
   - "One that never changes direction" (wrong idea w1: ): Not quite. Never changing direction is direct. An alternating potential difference keeps reversing direction.
   - "One that comes from a battery" (wrong idea w2: ): Not quite. A battery gives a direct potential difference. An alternating one keeps reversing direction, like the mains.
   - Still doesn't know: That's fine. An alternating potential difference keeps reversing direction.
   - She asks to move on or skip: An alternating potential difference keeps reversing direction.

41. [3.13] Tutor asks: Quiz, question 5 of 6: Which wire is the safety wire, joined to the metal case of an appliance?
   Buttons: "The neutral wire" / "The earth wire" / "The live wire" (she can also type)
   - Right ("The earth wire"): Yes. The earth wire joins the case to the ground.
   - "The neutral wire" (wrong idea w1: ): Not quite. The neutral wire completes the circuit. The earth wire is the safety wire joined to the case.
   - "The live wire" (wrong idea w2: ): Not quite. The live wire carries the supply. The earth wire is the safety wire joined to the case.
   - Still doesn't know: That's fine. The earth wire is the safety wire joined to the case.
   - She asks to move on or skip: The earth wire is the safety wire joined to the case.

42. [3.14] Tutor asks: Quiz, question 6 of 6: Why does touching a live wire give you an electric shock?
   Buttons: "The live wire is very hot" / "The current comes up from the earth wire" / "There is a big potential difference between the wire and you, so a current flows through you" (she can also type)
   - Right ("There is a big potential difference between the wire and you, so a current flows through you"): Yes. The wire is at about 230 V and you are at 0 V, so a current flows through you.
   - "The live wire is very hot" (wrong idea w1: ): Not quite. The danger is the big potential difference between the wire, at about 230 V, and you, at 0 V: a current flows through you.
   - "The current comes up from the earth wire" (wrong idea w2: ): Not quite. The live wire is at about 230 V and you are at 0 V, so a current flows from the wire through you to the ground.
   - Still doesn't know: That's fine. The wire is at about 230 V and you are at 0 V, so a current flows through you.
   - She asks to move on or skip: The wire is at about 230 V and you are at 0 V, so a current flows through you.

43. [3.15] Tutor: That's the end of the quiz: you got <her number right> out of <the number asked>.
   Button: Next

## The end

44. Tutor: You have finished this lesson on mains electricity. Tap a button to go on.
   Buttons: "Go to the slides" / "Home"
