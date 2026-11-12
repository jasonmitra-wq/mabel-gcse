# Components — symbols, thermistors and LDRs: the scripted AI lesson (key points 1, 2, 3, 4)

This is every message she can see, in order, written once and stored (p2-components.script.json). Each tutor message is one chat bubble. Under each question: what she sees for a right answer, for each likely wrong answer, and if she says she does not know (the easier step first, then a smaller question, then the answer and why).

At any point she can ask a question of her own. The AI answers it from the lesson in at most 60 words, then asks the same question again. Apart from that and marking what she types, nothing here is written by the AI.

## Key point 1: Circuit symbols — the language of circuit diagrams

1. [1.1] Tutor: Welcome! In this lesson you will learn how circuits are drawn, and meet two components whose resistance changes: one with how hot it is, and one with light.
   Button: Next

2. [1.1a] Tutor asks: First, three quick questions from the last lesson, on current and resistance. What is electric current?
   Buttons: "The push that drives charge" / "How hard it is for charge to flow" / "The rate of flow of charge" (she can also type)
   - Right ("The rate of flow of charge"): Yes: current is the rate of flow of charge, measured in amperes.
   - "The push that drives charge" (wrong idea push: ): Not quite: current is the rate of flow of charge. The push that drives the charge is the potential difference.
   - "How hard it is for charge to flow" (wrong idea hard: ): Not quite: current is the rate of flow of charge. How hard it is for charge to flow is the resistance.
   - Don't know (first time): Current is about how much charge flows past a point each second. Which button says how fast the charge flows? (same buttons)
   - Still doesn't know: That's fine. Current is the rate of flow of charge, measured in amperes.
   - She asks to move on or skip: Current is the rate of flow of charge, measured in amperes.

3. [1.1b] Tutor asks: Second: for the same potential difference, what does a bigger resistance do to the current?
   Buttons: "It does not change the current" / "It makes the current smaller" / "It makes the current bigger" (she can also type)
   - Right ("It makes the current smaller"): Yes: a bigger resistance makes the current smaller, and a smaller resistance makes it bigger. You will need that later in this lesson.
   - "It makes the current bigger" (wrong idea bigger: ): Not quite: a bigger resistance makes the current smaller, and a smaller resistance makes it bigger. Resistance is how hard it is for charge to flow.
   - "It does not change the current" (wrong idea same: ): Not quite: the current is not fixed. Resistance is how hard it is for charge to flow, so a bigger resistance makes the current smaller.
   - Don't know (first time): Resistance is how hard it is for charge to flow. If it is harder to flow, does more charge flow each second, or less? (same buttons)
   - Still doesn't know: That's fine. A bigger resistance makes the current smaller, and a smaller resistance makes it bigger.
   - She asks to move on or skip: A bigger resistance makes the current smaller, and a smaller resistance makes it bigger.

4. [1.1c] Tutor asks: Third: why does a filament lamp's I-V graph curve?
   Buttons: "Its resistance falls as it gets hotter" / "Its resistance increases as it gets hotter" / "It lets current flow one way only" (she can also type)
   - Right ("Its resistance increases as it gets hotter"): Yes: as the filament gets hotter, its resistance increases, so each extra volt adds less current than the one before.
   - "It lets current flow one way only" (wrong idea diode: ): Not quite: as the filament gets hotter, its resistance increases. Letting current flow one way only is what a diode does.
   - "Its resistance falls as it gets hotter" (wrong idea falls: ): Not quite: it is the other way round. As the filament gets hotter, its resistance increases, so each extra volt adds less current than the one before.
   - Don't know (first time): A filament glows because it gets very hot. Does a hotter filament let the current through more easily, or less easily? (same buttons)
   - Still doesn't know: That's fine. As a filament lamp gets hotter, its resistance increases, so the graph curves.
   - She asks to move on or skip: As a filament lamp gets hotter, its resistance increases, so the graph curves.

5. [1.2] Tutor: Now, this lesson. People draw circuits so that anyone can build them. Instead of drawing a real lamp or meter, they use simple shapes that everyone agrees on, called circuit symbols.
   Button: Next

6. [1.3] Tutor: A drawing of a circuit made from circuit symbols, with straight lines for the wires, is called a circuit diagram.
   Button: Next

7. [1.3a] Tutor: Here is a chart of the first symbols. Keep it in view: the next messages go through them one at a time.
   (Under it, a picture: "Circuit symbols: cell, battery, switches, lamp, resistor and the two meters.", labelled cell, battery, switch, lamp, resistor, ammeter, voltmeter.)
   Button: Next

8. [1.4] Tutor: A cell, the part that pushes charge round a circuit, is drawn as a long thin line next to a short thick one. A lamp is a circle with a cross in it.
   Button: Next

9. [1.4a] Tutor: Two or more cells joined together are called a battery, drawn as two or more cell symbols side by side.
   Button: Next

10. [1.4b] Tutor asks: Which symbol is a long thin line next to a short thick one?
   Buttons: "A battery" / "A cell" / "A lamp" (she can also type)
   - Right ("A cell"): Yes: a cell.
   - "A lamp" (wrong idea lamp: ): Not quite: that is a cell. A lamp is a circle with a cross in it.
   - "A battery" (wrong idea battery: ): Not quite: that is one cell. A battery is two or more of them side by side.
   - Don't know (first time): There is just one long line and one short line. A battery has two or more pairs. So which button names a single part? (same buttons)
   - Still doesn't know: That's fine. The answer is a cell: a long thin line next to a short thick one.
   - She asks to move on or skip: The answer is a cell: a long thin line next to a short thick one.

11. [1.5] Tutor: A resistor, a part that makes it harder for current to flow, is drawn as a small rectangle.
   Button: Next

12. [1.5a] Tutor: A switch, which opens or closes a gap in the circuit, is drawn open, with a gap, or closed, with no gap. When it is closed, current flows; when it is open, no current flows.
   Button: Next

13. [1.9] Tutor: To read a circuit diagram, follow the wire from one side of the cell round to the other. Components joined one after another in a single loop are in series, and the same current flows through each of them.
   Button: Next

14. [1.9a] Tutor: If the wire splits, the circuit has branches: separate paths for the current. Components on separate branches are in parallel.
   Button: Next

15. [1.9b] Tutor asks: In a torch, a cell, a switch and a lamp make one loop with no branches. Are the switch and the lamp in series or in parallel?
   Buttons: "Neither" / "In series" / "In parallel" (she can also type)
   - Right ("In series"): Yes: in series, so the same current flows through the switch and the lamp.
   - "In parallel" (wrong idea par: ): Not quite: in series. Parallel means on separate branches; one after another in a single loop is series.
   - "Neither" (wrong idea neither: ): Not quite: in series. One after another in a single loop is what series means.
   - Don't know (first time): There is only one loop, with no branches. Which word means one after another in a single loop? (same buttons)
   - Still doesn't know: That's fine. The switch and the lamp are in series: there is one loop and no branches.
   - She asks to move on or skip: The switch and the lamp are in series: there is one loop and no branches.

16. [1.5b] Tutor: An ammeter, the meter that measures the current, is a circle with A in it. It goes in series, in the loop with the other parts.
   Button: Next

17. [1.5c] Tutor: A voltmeter, the meter that measures the potential difference across a component, is a circle with V in it. It goes in parallel: across the component, on its own short branch.
   Button: Next

18. [1.5e] Tutor asks: Which meter measures the current?
   Buttons: "The voltmeter, a circle with V in it" / "The lamp, a circle with a cross in it" / "The ammeter, a circle with A in it" (she can also type)
   - Right ("The ammeter, a circle with A in it"): Yes: the ammeter, a circle with A in it.
   - "The voltmeter, a circle with V in it" (wrong idea volt: ): Not quite: the ammeter, a circle with A in it. The voltmeter measures the potential difference.
   - "The lamp, a circle with a cross in it" (wrong idea lamp: ): Not quite: the ammeter, a circle with A in it. A lamp gives out light; it does not measure anything.
   - Don't know (first time): Current is measured in amperes. Which meter has the letter for amperes? (same buttons)
   - Still doesn't know: That's fine. The ammeter measures the current: a circle with A in it, for amperes.
   - She asks to move on or skip: The ammeter measures the current: a circle with A in it, for amperes.

19. [1.5f] Tutor: Here is a second chart, with four more symbols to meet.
   (Under it, a picture: "More symbols: diode, LED, variable resistor and fuse.", labelled diode, light-emitting diode, variable resistor, fuse.)
   Button: Next

20. [1.6] Tutor: A diode, a component that lets current flow in one direction only, is drawn as a triangle pointing the way the current can flow, with a bar across its tip.
   Button: Next

21. [1.7] Tutor: A diode with two arrows coming out of it is a light-emitting diode (LED), a diode that gives out light.
   Button: Next

22. [1.7a] Tutor: A variable resistor, a resistor whose resistance can be changed, is drawn as a resistor with an arrow through it.
   Button: Next

23. [1.8] Tutor: A fuse, a safety part that melts and breaks the circuit if the current gets too big, is drawn as a rectangle with a line through it.
   Button: Next

24. [1.8a] Tutor asks: Which symbol is a resistor with an arrow through it?
   Buttons: "A fuse" / "A variable resistor" / "A diode" (she can also type)
   - Right ("A variable resistor"): Yes: a variable resistor. The arrow shows that its resistance can be changed.
   - "A diode" (wrong idea diode: ): Not quite: a variable resistor. A diode is a triangle with a bar across its tip.
   - "A fuse" (wrong idea fuse: ): Not quite: a variable resistor. A fuse is a rectangle with a line through it, not an arrow.
   - Don't know (first time): The arrow shows that its resistance can be changed. Which button names a component whose resistance you can change? (same buttons)
   - Still doesn't know: That's fine. The answer is a variable resistor: the arrow shows that its resistance can be changed.
   - She asks to move on or skip: The answer is a variable resistor: the arrow shows that its resistance can be changed.

25. [1.10] Tutor: Predict first: answer the question in the box below. Then tap Draw it another way to test your answer. Tap Next when you are done.
   Under it, the hands-on circuit. It shows a cell, a switch, a lamp and an ammeter; controls: Draw it another way (the same parts and loop, drawn in new places on the page).
   Box, "Predict first": Two circuit diagrams show the same cell, switch, lamp and ammeter joined in one loop. In one, the lamp is drawn on the right; in the other, on the left. What can you say?
     Choices: "They are the same circuit" / "They are different circuits" / "The lamp drawn nearer the cell gets more current" / "The lamp drawn on the right is brighter" (right: "They are the same circuit")
     After she taps one: "Now test your prediction. Tap Draw it another way, and watch the ammeter and the lamp."
     Then, after she uses Draw it another way: "Your prediction was right." or "They are the same circuit." and "The parts moved on the page, but the ammeter reading and the lamp did not change."
     Then "Now explain it: In one line: why do you think the two drawings are the same circuit?" She writes one line and taps Check my line; then "Does your line say these? Tick the ones it does." with: "the same parts are joined in the same loop", "where a part is drawn on the page does not matter".
   Button under the message: Next

26. [1.13] Tutor: In one line: how can you tell whether two components are in series or in parallel?
   She types one line. The AI checks which of these points it makes: "in series they are one after another in a single loop", "in parallel they are on separate branches".
   - All of them: Yes, your line has it: in series they are one after another in a single loop; and in parallel they are on separate branches.
   - Some: Your line gets this right: <the points it makes>. A full line also says: <the points it misses>.
   - None: A good line would say: in series they are one after another in a single loop; and in parallel they are on separate branches.
   - Don't know: No problem. A good line would be: in series they are one after another in a single loop; in parallel they are on separate branches.

27. [1.14] Tutor asks: What does a diode do?
   Buttons: "It gives out light" / "It lets current flow in one direction only" / "It measures the current" (she can also type)
   - Right ("It lets current flow in one direction only"): Yes: a diode lets current flow in one direction only. Its triangle points the way the current can flow.
   - "It gives out light" (wrong idea led: ): Not quite: a diode lets current flow in one direction only. A diode that also gives out light is an LED.
   - "It measures the current" (wrong idea meter: ): Not quite: a diode lets current flow in one direction only. The ammeter measures the current.
   - Don't know (first time): The triangle in the diode's symbol points one way, with a bar across its tip. What does that show about the current? (same buttons)
   - Still doesn't know: That's fine. A diode lets current flow in one direction only: its triangle points the way the current can flow.
   - She asks to move on or skip: A diode lets current flow in one direction only: its triangle points the way the current can flow.

## Key point 2: Thermistors — resistance that changes with temperature

28. [2.1] Tutor: In the last lesson, the filament lamp and the diode did not keep a fixed resistance. Two more components change their resistance because of the world around them: one reacts to temperature, how hot it is, and one reacts to light.
   Button: Next

29. [2.2] Tutor: The first is the thermistor, a component whose resistance depends on its temperature.
   Button: Next

30. [2.3] Tutor asks: Have a guess: as a thermistor gets warmer, what do you think happens to its resistance?
   Buttons: "It goes up" / "It stays the same" / "It goes down" (she can also type)
   - Right ("It goes down"): Yes: as a thermistor gets warmer, its resistance goes down.
   - "It goes up": In fact it goes down: as a thermistor gets warmer, its resistance falls. That is the opposite of a filament lamp.
   - "It stays the same" (wrong idea same: ): In fact it goes down: a thermistor's resistance does not stay the same as its temperature changes.
   - Still doesn't know: That's fine. As a thermistor gets warmer, its resistance goes down.
   - She asks to move on or skip: As a thermistor gets warmer, its resistance goes down.

31. [2.4] Tutor: The graph shows it: the hotter the thermistor, the lower its resistance. When it cools, its resistance goes back up.
   (Under it, a picture: "A thermistor: hotter means lower resistance.", labelled thermistor, temperature, resistance.)
   Button: Next

32. [2.5] Tutor asks: A thermistor has the same potential difference across it all the time. It warms up. What happens to the current through it?
   Buttons: "It stays the same" / "It goes up" / "It goes down" (she can also type)
   - Right ("It goes up"): Yes. Its resistance falls, and a smaller resistance makes the current bigger.
   - "It goes down": Not quite: it goes up. A warmer thermistor has a lower resistance, and for the same potential difference a lower resistance lets a bigger current through.
   - "It stays the same" (wrong idea M5: A cell or battery always gives the same current, whatever circuit it is in.): Not quite: it goes up. The current is not fixed: a warmer thermistor has a lower resistance, so a bigger current flows.
   - Don't know (first time): A warming thermistor's resistance goes down. Think back to the start of the lesson: what does a smaller resistance do to the current? (same buttons)
   - Still doesn't know: That's fine. The current goes up: a warmer thermistor has a lower resistance, so for the same potential difference a bigger current flows.
   - She asks to move on or skip: The current goes up: a warmer thermistor has a lower resistance, so for the same potential difference a bigger current flows.

33. [2.6] Tutor: A thermistor makes a good temperature sensor, a part that detects a change around it.
   Button: Next

34. [2.7] Tutor: In a thermostat, the control that keeps a room or an oven at a set temperature, a thermistor senses how warm it is.
   Button: Next

35. [2.9] Tutor: When the room warms, the thermistor's resistance falls and the current through it rises. The thermostat's circuit detects that bigger current and switches the heater off. When the room cools, the current falls and the heater comes back on.
   Button: Next

36. [2.8] Tutor asks: A thermistor cools down. What happens to its resistance?
   Buttons: "It goes down" / "It goes up" / "It stays the same" (she can also type)
   - Right ("It goes up"): Yes: a cooler thermistor has a higher resistance.
   - "It goes down": Not quite: it goes up. A warmer thermistor has a lower resistance, so a cooler one has a higher resistance.
   - "It stays the same" (wrong idea same: ): Not quite: it goes up. A thermistor's resistance changes with its temperature.
   - Don't know (first time): Warming makes a thermistor's resistance go down. Cooling is the opposite. So what does cooling do? (same buttons)
   - Still doesn't know: That's fine. A cooler thermistor has a higher resistance: cooling is the opposite of warming.
   - She asks to move on or skip: A cooler thermistor has a higher resistance: cooling is the opposite of warming.

37. [2.10] Tutor: The thermistor's symbol is a resistor with a diagonal line through it that ends in a short flat tail.
   (Under it, a picture: "The resistor symbol, and the thermistor symbol beside it.", labelled resistor, thermistor.)
   Button: Next

38. [2.11] Tutor: In one line: what does a thermistor do, and what is it used for?
   She types one line. The AI checks which of these points it makes: "as it gets hotter, its resistance decreases", "it senses temperature, for example in a thermostat".
   - All of them: Yes, your line has it: as it gets hotter, its resistance decreases; and it senses temperature, for example in a thermostat.
   - Some: Your line gets this right: <the points it makes>. A full line also says: <the points it misses>.
   - None: A good line would say: as it gets hotter, its resistance decreases; and it senses temperature, for example in a thermostat.
   - Don't know: No problem. A good line would be: as a thermistor gets hotter, its resistance decreases, so it can sense temperature, for example in a thermostat.

39. [2.12] Tutor asks: Which symbol is a diode with two arrows coming out of it?
   Buttons: "A thermistor" / "An LED" / "A variable resistor" (she can also type)
   - Right ("An LED"): Yes: an LED, a diode that gives out light. The arrows show the light coming out.
   - "A thermistor" (wrong idea therm: ): Not quite: an LED, a diode that gives out light. A thermistor is a resistor with a line through it that ends in a tail.
   - "A variable resistor" (wrong idea var: ): Not quite: an LED, a diode that gives out light. A variable resistor is a rectangle with one arrow through it.
   - Don't know (first time): The two arrows show light coming out. Which button names a component that gives out light? (same buttons)
   - Still doesn't know: That's fine. The answer is an LED: a diode that gives out light, shown by the two arrows coming out.
   - She asks to move on or skip: The answer is an LED: a diode that gives out light, shown by the two arrows coming out.

## Key point 3: LDRs — resistance that changes with light

40. [3.1] Tutor: Some street lights come on by themselves as it gets dark. They use a light-dependent resistor, or LDR, a component whose resistance depends on the light falling on it.
   Button: Next

41. [3.2] Tutor: Light intensity means how bright the light falling on something is.
   Button: Next

42. [3.3] Tutor asks: Have a guess: as the light on an LDR gets brighter, what do you think happens to its resistance?
   Buttons: "It goes up" / "It stays the same" / "It goes down" (she can also type)
   - Right ("It goes down"): Noted. Now test your guess.
   - "It goes up": Noted. Now test your guess.
   - "It stays the same" (wrong idea same: ): Noted. Now test your guess.
   - Still doesn't know: That's fine. Let's find out: test it in the next step.
   - She asks to move on or skip: Let's find out: test it in the next step.

43. [3.5] Tutor: Tap LDR below, then slide the light from dark to bright and watch the resistance and the current. Then try the thermistor with the temperature. Tap Next when you are done.
   Under it, the hands-on sensor (no circuit drawing): buttons to choose a thermistor or an LDR, a slider for the temperature (thermistor) or the light intensity (LDR), and readings of the potential difference across it (always 6 V), its resistance and the current. Controls: the sensor buttons and the slider.
   Button under the message: Next

44. [3.4] Tutor: The graph shows what you saw: in the dark, an LDR's resistance is high, and it falls as the light intensity rises.
   (Under it, a picture: "An LDR: brighter light means lower resistance.", labelled LDR, light intensity, resistance.)
   Button: Next

45. [3.6] Tutor asks: Which component would you use to switch a fan on when a room gets too hot?
   Buttons: "An LDR" / "A diode" / "A thermistor" (she can also type)
   - Right ("A thermistor"): Yes: a thermistor, because it senses temperature.
   - "An LDR" (wrong idea ldr: ): Not quite: a thermistor. It senses temperature; an LDR senses light.
   - "A diode" (wrong idea diode: ): Not quite: a thermistor, because it senses temperature. A diode only lets current flow one way; it does not sense anything.
   - Don't know (first time): The fan should react to how hot the room is. Which button names the component that senses temperature? (same buttons)
   - Still doesn't know: That's fine. A thermistor: it senses temperature, while an LDR senses light.
   - She asks to move on or skip: A thermistor: it senses temperature, while an LDR senses light.

46. [3.7] Tutor: In an automatic street light, as evening comes the LDR's resistance rises; the circuit detects that change and switches the light on. In the morning, the resistance falls and the light switches off.
   Button: Next

47. [3.8] Tutor: An LDR and a thermistor are easy to mix up. Remember what each one senses: an LDR responds to light, a thermistor to temperature.
   Button: Next

48. [3.9] Tutor: The symbol for an LDR is a resistor in a circle, with two arrows pointing in to show light falling on it.
   (Under it, a picture: "The resistor symbol, and the LDR symbol beside it.", labelled resistor, LDR.)
   Button: Next

49. [3.10] Tutor: In one line: what does an LDR do, and how is it different from a thermistor?
   She types one line. The AI checks which of these points it makes: "brighter light means a lower resistance", "an LDR senses light, a thermistor senses temperature".
   - All of them: Yes, your line has it: brighter light means a lower resistance; and an LDR senses light, a thermistor senses temperature.
   - Some: Your line gets this right: <the points it makes>. A full line also says: <the points it misses>.
   - None: A good line would say: brighter light means a lower resistance; and an LDR senses light, a thermistor senses temperature.
   - Don't know: No problem. A good line would be: brighter light means a lower resistance; an LDR senses light, and a thermistor senses temperature.

50. [3.11] Tutor asks: In a circuit diagram, which symbol is a resistor in a circle with two arrows pointing in?
   Buttons: "An LED" / "An LDR" / "A thermistor" (she can also type)
   - Right ("An LDR"): Yes: an LDR. The arrows point in, to show light falling on it.
   - "An LED" (wrong idea led: ): Not quite: an LDR. Its arrows point in, for light falling on it; an LED's arrows point out.
   - "A thermistor" (wrong idea therm: ): Not quite: an LDR. A thermistor has a line through it that ends in a tail, and no arrows.
   - Don't know (first time): The arrows point in, showing light falling on the part. Which button names a component that reacts to light? (same buttons)
   - Still doesn't know: That's fine. The answer is an LDR: the arrows pointing in show light falling on it.
   - She asks to move on or skip: The answer is an LDR: the arrows pointing in show light falling on it.

## Key point 4: Drawing a circuit to test a sensor

51. [4.1] Tutor: You can measure how a thermistor's resistance changes with temperature in class. It works the same way as for any component: measure the current and the potential difference, then find the resistance.
   Button: Next

52. [4.2] Tutor asks: Before the practical, a quick check. Where does the voltmeter go when you test a component?
   Buttons: "In series with the component" / "It is not needed" / "In parallel across the component" (she can also type)
   - Right ("In parallel across the component"): Yes: in parallel across the component, to measure the potential difference across it.
   - "In series with the component" (wrong idea series: ): Not quite: in parallel across the component. It is the ammeter that goes in series.
   - "It is not needed": Not quite: you need it, in parallel across the component, to measure the potential difference.
   - Don't know (first time): The voltmeter measures the potential difference across one component. Does that need it in the loop, or on its own branch beside the component? (same buttons)
   - Still doesn't know: That's fine. The voltmeter goes in parallel across the component, to measure the potential difference across it.
   - She asks to move on or skip: The voltmeter goes in parallel across the component, to measure the potential difference across it.

53. [4.3] Tutor asks: And why does the ammeter go in series with the thermistor?
   Buttons: "To keep the thermistor cool" / "So the same current flows through both" / "To measure the potential difference" (she can also type)
   - Right ("So the same current flows through both"): Yes: in series, the same current flows through the ammeter and the thermistor, so the ammeter reads the thermistor's current.
   - "To measure the potential difference" (wrong idea pd: ): Not quite: the voltmeter measures the potential difference. The ammeter is in series so the same current flows through it and the thermistor.
   - "To keep the thermistor cool" (wrong idea cool: ): Not quite: the ammeter does not change the temperature. It is in series so the same current flows through it and the thermistor.
   - Don't know (first time): In series, the parts are one after another in a single loop. What is the same for every part of that loop? (same buttons)
   - Still doesn't know: That's fine. The ammeter is in series so the same current flows through it and the thermistor.
   - She asks to move on or skip: The ammeter is in series so the same current flows through it and the thermistor.

54. [4.4] Tutor: Here is the circuit: the cell, a switch and an ammeter in one loop with the thermistor, all in series, and a voltmeter in parallel across the thermistor, on its own short branch.
   (Under it, a picture: "Testing a thermistor: ammeter in series, voltmeter in parallel across it.", labelled cell, switch, ammeter, thermistor, voltmeter.)
   Button: Next

55. [4.4a] Tutor: When you draw a circuit diagram yourself, use the correct symbol for every part, draw the wires as straight lines, and leave no gap where two wires should join: a gap means the circuit is broken there.
   Button: Next

56. [4.5] Tutor asks: A student draws the ammeter in this circuit as a circle with V in it. What is wrong?
   Buttons: "Nothing is wrong" / "It should be a circle with A in it" / "It should be a rectangle" (she can also type)
   - Right ("It should be a circle with A in it"): Yes: a circle with V in it is a voltmeter. The ammeter is a circle with A in it.
   - "It should be a rectangle" (wrong idea rect: ): Not quite: a rectangle is a resistor. The ammeter is a circle with A in it; a circle with V in it is a voltmeter.
   - "Nothing is wrong" (wrong idea none: ): Not quite: a circle with V in it is a voltmeter, so the diagram shows the wrong meter. The ammeter is a circle with A in it.
   - Don't know (first time): Every part needs its correct symbol. Which letter goes in the ammeter's circle? (same buttons)
   - Still doesn't know: That's fine. The ammeter is a circle with A in it; a circle with V in it is a voltmeter.
   - She asks to move on or skip: The ammeter is a circle with A in it; a circle with V in it is a voltmeter.

57. [4.6] Tutor: Put the thermistor in a beaker of water and measure the water's temperature with a thermometer. Record the current and the potential difference. Then change the temperature, for example by adding hot water (carefully), and repeat.
   Button: Next

58. [4.7] Tutor asks: How would you test an LDR instead?
   Buttons: "Change the temperature of the water" / "Change the cell for a bigger one" / "Change the light on it, for example by moving a lamp closer" (she can also type)
   - Right ("Change the light on it, for example by moving a lamp closer"): Yes: change the light intensity, for example by moving a lamp closer, and record the readings each time.
   - "Change the temperature of the water" (wrong idea water: ): Not quite: an LDR reacts to light, not temperature, so change the light on it, for example by moving a lamp closer.
   - "Change the cell for a bigger one" (wrong idea cell: ): Not quite: an LDR reacts to light, so change the light on it, for example by moving a lamp closer. A bigger cell would change the potential difference instead.
   - Don't know (first time): An LDR reacts to light. What would you change around it? (same buttons)
   - Still doesn't know: That's fine. Change the light on the LDR, for example by moving a lamp closer, and record the readings each time.
   - She asks to move on or skip: Change the light on the LDR, for example by moving a lamp closer, and record the readings each time.

59. [4.8] Tutor: From the last lesson: V = I R, potential difference = current × resistance. V is the potential difference in volts (V), I is the current in amperes (A) and R is the resistance in ohms (Ω).
   Button: Next

60. [4.8a] Tutor: To find the resistance at each reading, divide the potential difference by the current: R = V ÷ I.
   Button: Next

61. [4.9] Tutor: Here is a worked example. Tap "Show the first step" under it to see how it is done, one step at a time. Use a calculator for the division.
   The card: "Worked example: A thermistor in cold water has a potential difference of 6 V across it and a current of 0.002 A through it. What is its resistance?"
   She taps "Show the first step": Start from V = I R.
   She taps "Next step": You want R, so divide both sides by I: R = V ÷ I.
   She taps "Next step": Put the numbers in: R = 6 ÷ 0.002 = 3000.
   She taps "Next step": The resistance is 3000 Ω.
   After the last step: Next. (If she types an answer instead: "Yes, that's right: 3000 Ω." or "Not quite: it's 3000 Ω. The steps on the card show how.")

62. [4.10] Tutor: And here is the same thermistor after the water is heated. Tap "Show the first step" under it.
   The card: "Worked example: The water is heated. With the same 6 V, the current rises to 0.03 A. What is the resistance now?"
   She taps "Show the first step": Use R = V ÷ I again.
   She taps "Next step": Put the numbers in: R = 6 ÷ 0.03 = 200.
   She taps "Next step": The resistance is 200 Ω: lower, because the thermistor is hotter.
   After the last step: Next. (If she types an answer instead: "Yes, that's right: 200 Ω." or "Not quite: it's 200 Ω. The steps on the card show how.")

63. [4.11] Tutor asks: Your turn. In the practical, the voltmeter reads 6 V and the ammeter reads 0.05 A. What is the thermistor's resistance, in ohms?
   She types a number.
   - Right (120 Ω): Yes: 120 Ω. R = V ÷ I = 6 ÷ 0.05 = 120.
   - She types 0.3 (wrong idea multiplied): Not quite: it's 120 Ω. You multiplied; resistance needs dividing: R = V ÷ I = 6 ÷ 0.05 = 120.
   - She types 0.00833 (wrong idea upside-down): Not quite: it's 120 Ω. You divided the current by the potential difference; it is the other way up: R = V ÷ I = 6 ÷ 0.05 = 120.
   - Any other wrong answer: Not quite: it's 120 Ω. R = V ÷ I = 6 ÷ 0.05 = 120.
   - Don't know (first time): Use R = V ÷ I: the potential difference divided by the current. Type 6 ÷ 0.05 into a calculator.
   - Still doesn't know: That's fine. The resistance is 120 Ω: R = V ÷ I = 6 ÷ 0.05 = 120.
   - She asks to move on or skip: The resistance is 120 Ω: R = V ÷ I = 6 ÷ 0.05 = 120.

64. [4.12] Tutor: When you have all your readings, plot a graph: the temperature (or the light intensity) along the bottom, and the resistance up the side. For both sensors the graph is a downward curve.
   Button: Next

65. [4.13] Tutor: In one line: how do you find how a thermistor's resistance changes with temperature?
   She types one line. The AI checks which of these points it makes: "ammeter in series, voltmeter in parallel across it", "change the temperature and work out V ÷ I each time".
   - All of them: Yes, your line has it: ammeter in series, voltmeter in parallel across it; and change the temperature and work out V ÷ I each time.
   - Some: Your line gets this right: <the points it makes>. A full line also says: <the points it misses>.
   - None: A good line would say: ammeter in series, voltmeter in parallel across it; and change the temperature and work out V ÷ I each time.
   - Don't know: No problem. A good line would be: ammeter in series and voltmeter in parallel across it; change the temperature and work out V ÷ I each time.

66. [4.14] Tutor asks: Why do you put the thermistor in water for this test?
   Buttons: "To stop the current" / "To make its resistance stay the same" / "So you can set and measure its temperature" (she can also type)
   - Right ("So you can set and measure its temperature"): Yes: the water lets you set the thermistor's temperature and measure the temperature with a thermometer.
   - "To stop the current": Not quite: the water does not stop the current. It lets you set the thermistor's temperature and measure the temperature with a thermometer.
   - "To make its resistance stay the same" (wrong idea same: ): Not quite: the point is to change the temperature, so the resistance changes, and to measure the temperature with a thermometer.
   - Don't know (first time): The test is about how the resistance changes with temperature. What does the water let you control? (same buttons)
   - Still doesn't know: That's fine. The water lets you set the thermistor's temperature and measure the temperature with a thermometer.
   - She asks to move on or skip: The water lets you set the thermistor's temperature and measure the temperature with a thermometer.

67. [5.0] Tutor: To finish, a short quiz on the whole lesson: 7 questions.
   Button: Next

68. [5.1] Tutor asks: Quiz, question 1 of 7: How is a battery drawn in a circuit diagram?
   Buttons: "As a circle with a cross in it" / "As a rectangle" / "As two or more cells side by side" (she can also type)
   - Right ("As two or more cells side by side"): Yes. A battery is two or more cells side by side.
   - "As a circle with a cross in it" (wrong idea w1: ): Not quite. A battery is two or more cells side by side. A circle with a cross in it is a lamp.
   - "As a rectangle" (wrong idea w2: ): Not quite. A battery is two or more cells side by side. A rectangle is a resistor.
   - Still doesn't know: That's fine. A battery is two or more cells side by side.
   - She asks to move on or skip: A battery is two or more cells side by side.

69. [5.2] Tutor asks: Quiz, question 2 of 7: Which symbol is a fuse?
   Buttons: "A circle with a cross in it" / "A rectangle with a line through it" / "A rectangle with an arrow through it" (she can also type)
   - Right ("A rectangle with a line through it"): Yes. A fuse is a rectangle with a line through it.
   - "A rectangle with an arrow through it" (wrong idea w1: ): Not quite. A fuse is a rectangle with a line through it. A rectangle with an arrow through it is a variable resistor.
   - "A circle with a cross in it" (wrong idea w2: ): Not quite. A fuse is a rectangle with a line through it. A circle with a cross in it is a lamp.
   - Still doesn't know: That's fine. A fuse is a rectangle with a line through it.
   - She asks to move on or skip: A fuse is a rectangle with a line through it.

70. [5.3] Tutor asks: Quiz, question 3 of 7: Components on separate branches of a circuit are…
   Buttons: "in series" / "switched off" / "in parallel" (she can also type)
   - Right ("in parallel"): Yes. Separate branches are in parallel.
   - "in series" (wrong idea w1: ): Not quite. Separate branches are in parallel. In series means one after another in a single loop.
   - "switched off" (wrong idea w2: ): Not quite. Separate branches are in parallel. Being on a branch does not switch a component off.
   - Still doesn't know: That's fine. Separate branches are in parallel.
   - She asks to move on or skip: Separate branches are in parallel.

71. [5.4] Tutor asks: Quiz, question 4 of 7: What happens to the resistance of a thermistor as it cools down?
   Buttons: "It decreases" / "It stays the same" / "It increases" (she can also type)
   - Right ("It increases"): Yes. As a thermistor cools, its resistance increases.
   - "It decreases" (wrong idea w1: ): Not quite. As a thermistor cools, its resistance increases. It decreases when the thermistor gets hotter; cooling does the opposite.
   - "It stays the same" (wrong idea w2: ): Not quite. As a thermistor cools, its resistance increases. A thermistor's resistance changes with its temperature.
   - Still doesn't know: That's fine. As a thermistor cools, its resistance increases.
   - She asks to move on or skip: As a thermistor cools, its resistance increases.

72. [5.5] Tutor asks: Quiz, question 5 of 7: What happens to the resistance of an LDR as the light gets brighter?
   Buttons: "It increases" / "It decreases" / "It stays the same" (she can also type)
   - Right ("It decreases"): Yes. As the light gets brighter, an LDR's resistance decreases.
   - "It increases" (wrong idea w1: ): Not quite. As the light gets brighter, an LDR's resistance decreases. It increases in the dark, not in bright light.
   - "It stays the same" (wrong idea w2: ): Not quite. As the light gets brighter, an LDR's resistance decreases. An LDR's resistance changes with the light on it.
   - Still doesn't know: That's fine. As the light gets brighter, an LDR's resistance decreases.
   - She asks to move on or skip: As the light gets brighter, an LDR's resistance decreases.

73. [5.6] Tutor asks: Quiz, question 6 of 7: Which is a good use for a thermistor?
   Buttons: "To measure the current" / "In a thermostat" / "To switch on street lights at dusk" (she can also type)
   - Right ("In a thermostat"): Yes. A thermistor senses temperature, so it suits a thermostat.
   - "To switch on street lights at dusk" (wrong idea w1: ): Not quite. A thermistor senses temperature, so it suits a thermostat. Street lights use an LDR, which senses light.
   - "To measure the current" (wrong idea w2: ): Not quite. A thermistor senses temperature, so it suits a thermostat. The current is measured with an ammeter.
   - Still doesn't know: That's fine. A thermistor senses temperature, so it suits a thermostat.
   - She asks to move on or skip: A thermistor senses temperature, so it suits a thermostat.

74. [5.7] Tutor asks: Quiz, question 7 of 7: a thermistor has 12 V across it and a current of 0.004 A through it. What is its resistance, in ohms?
   She types a number.
   - Right (3000 Ω): Yes: 3000 Ω. R = V ÷ I = 12 ÷ 0.004 = 3000.
   - She types 0.048 (wrong idea multiplied): Not quite: it's 3000 Ω. You multiplied; resistance needs dividing: R = V ÷ I = 12 ÷ 0.004 = 3000.
   - Any other wrong answer: Not quite: it's 3000 Ω. R = V ÷ I = 12 ÷ 0.004 = 3000.
   - Still doesn't know: That's fine. The resistance is 3000 Ω: R = V ÷ I = 12 ÷ 0.004 = 3000.
   - She asks to move on or skip: The resistance is 3000 Ω: R = V ÷ I = 12 ÷ 0.004 = 3000.

75. [5.9] Tutor: That's the end of the quiz: you got <her number right> out of <the number asked>.
   Button: Next

## The end

76. Tutor: You have finished this lesson: circuit symbols, thermistors, LDRs, and how to test them.
   Buttons: "Go to the slides" / "Home"
