# Teach sim: p2-current-voltage (run, persona bored, 2026-10-17)

Model claude-sonnet-5-5. 18 tutor turns, 1 flagged. Complete: true. Coverage: [true,true,true,true,false].

Lesson flags: points never completed: 4 "Required practical"

**Tutor** [opening]: Welcome! Everything from your phone to a kettle works because charge flows around a circuit, and that flow is called electric current, which is the rate of flow of electric charge, measured in amperes (A). So if charge is the thing moving, what do you think "rate of flow" tells us about how that charge moves?

**Student** (wrong): um like how much charge moves? or how fast it goes somewhere?

**Tutor** [retry, point 0]: Yes, "how much charge moves" is on the right track, and "how fast" matters too: current is the amount of charge passing a point each second. So if more charge passes a point every second, what happens to the current?

**Student** (wrong): it gets slower?

**Tutor** [fact, point 0]: More charge passing each second actually means a bigger current, so the current goes up. Charge is measured in coulombs (C), and 1 coulomb is the charge that passes when a current of 1 ampere flows for 1 second. So what unit do we use to measure charge?

**Student** (idk): idk what coulombs are tho

**Tutor** [retry, point 0]: That's fine, a coulomb is just the unit we count charge in, a bit like a "bucket" of charge, and it's written C. If a current of 1 ampere flows for 1 second, exactly 1 coulomb of charge has passed. So what unit do we use to measure charge?

**Student** (try): coulombs?

**Tutor** [next, point 0]: Yes, coulombs (C) is right: that's the unit for charge. Now for the energy side: potential difference (p.d.) tells you how much energy is transferred for each coulomb of charge that flows between two points, and it's measured in volts (V). So what unit do we measure potential difference in?

> Recap: Electric current is the rate at which charge flows past a point. / More charge passing each second means a bigger current. / Current is measured in amperes (A), and charge in coulombs (C). / One ampere flowing for one second moves exactly one coulomb of charge.

**Student** (try): volts

**Tutor** [next, point 1]: Yes, volts (V) is right for potential difference. Next idea: resistance is the opposition to the flow of current, and it's measured in ohms (Ω). So if the resistance goes up but the potential difference stays the same, what happens to the current?

> Recap: Charge is measured in coulombs, written C. / Potential difference is the energy transferred for each coulomb of charge. / It's measured in volts, written V. / A bigger p.d. means each coulomb gets a bigger energy push.

**Student** (try): it goes down?

**Tutor** [fact, point 2]: Yes, the current goes down: more resistance means less current for the same p.d. Now the unit: resistance is measured in ohms (Ω), and 1 ohm is 1 volt per ampere. So what unit is resistance measured in?

**Student** (wrong): watts?

**Tutor** [retry, point 2]: Not quite. Watts measure power, which is a different idea. Resistance is measured in ohms (Ω), and 1 ohm means 1 volt for every 1 ampere of current. So if a resistor has a p.d. of 12 V across it and a current of 3 A through it, what is its resistance in ohms?

**Student** (bored): huh?

**Tutor** [next, point 2]: No worries, here's the answer: resistance is measured in ohms (Ω). Now onto a new idea: an I-V characteristic is a graph showing how the current through a component changes with the potential difference across it. Which quantity goes on the y-axis of that graph?

> Recap: Resistance is how much a component opposes the flow of current. / More resistance with the same p.d. means less current flows. / Resistance is measured in ohms (Ω), not watts, which measure power. / 1 ohm means 1 volt for every 1 ampere of current.

**Student** (try): current?

**Tutor** [fact, point 3]: Yes, current goes on the y-axis, with potential difference on the x-axis. A fixed resistor at constant temperature is an ohmic conductor, and its I-V graph is a straight line through the origin, so doubling V doubles I. What does that straight line tell you about its resistance?

**Student** (try): stays the same?

**Tutor** [fact, point 3]: Yes, a straight line through the origin means the resistance stays the same. Now for a new component: a diode only lets current flow in one direction, the forward direction, and in the reverse direction it has a very high resistance. So what kind of current flows through a diode in the reverse direction?

**Student** (bored): this is long

**Tutor** [retry, point 3]: Fair enough, I'll keep it short. A diode has a very high resistance in the reverse direction, so only a very small current flows, not zero. How big is the current in the reverse direction?

**Student** (wrong): like a few amps?

**Tutor** [checkin, point 3]: Do you want me to just tell you the rest of this one?

**Student** (checkin-yes): yeah go on

**Tutor** [next, point 3]: An I-V graph shows how current changes with potential difference, with I on the y-axis and V on the x-axis. An ohmic conductor, like a fixed resistor at constant temperature, gives a straight line through the origin, so doubling V doubles I and the resistance is constant. A filament lamp gives a curve that flattens as V increases, because the filament heats up and its resistance rises. A diode only lets current flow in the forward direction, and its very high reverse resistance means only a very small current flows. The lamp and diode graphs are non-linear. To find resistance at any point, read off V and I and use R = V ÷ I. Examiners want the shape AND the reason.  Next, the required practical: you measure I-V characteristics of a filament lamp, a diode and a resistor. The circuit uses a variable resistor (rheostat), and what is it used for in the circuit?

> Recap: An I-V graph plots current (y-axis) against potential difference (x-axis). / A fixed resistor at constant temperature gives a straight line through the origin. / Straight line means constant resistance, so doubling V doubles I. / A diode has very high reverse resistance, so only a tiny current flows.

⚑ over length (155 words)

**Student** (try): to change the voltage?

**Tutor** [retry, point 4]: Changing the voltage is on the right track, since the variable resistor lets you change the settings as you go. What quantity does it directly vary in the circuit?

**Student** (try): changes the current?

**Tutor** [fact, point 4]: Yes — changing the current is right, since the variable resistor varies the current in the circuit. To measure that current, you put an ammeter in series with the component, meaning in the same loop as it. If the component is a filament lamp, where in the circuit do you connect the ammeter?

**Student** (bored): can we skip this

**Tutor** [complete, point 4]: Skipping the required practical, which was about measuring I-V characteristics. That's the end of this lesson: you worked through potential difference, I told you about current, resistance and I-V graphs, and you skipped the practical. Thanks for sticking with it!

**Student** (closing): ok thanks bye

**Tutor** [free]: Bye for now! You can come back any time to go over the practical and the other ideas we only touched on. Good luck with the revision.

## Judge (claude-opus-5-5)

**FAIL** — flow faults: closing_claims_untaught_content T16, factual_or_unit_slip T8

Engagement 2/5 — "this is long"

Would quit: false

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | true | false | false | "So if charge is the thing moving, what do you think "rate of flow" tells us about how that charge moves?" |
| T1 | true | true | false | false | "So if more charge passes a point every second, what happens to the current?" |
| T2 | true | true | false | false | "More charge passing each second actually means a bigger current, so the current goes up." |
| T3 | true | true | false | false | "a coulomb is just the unit we count charge in, a bit like a "bucket" of charge, and it's written C." |
| T4 | true | true | false | false | "Yes, coulombs (C) is right: that's the unit for charge." — Moves on without ever teaching Q = It. |
| T5 | true | true | false | false | "So if the resistance goes up but the potential difference stays the same, what happens to the current?" — E = QV was never taught before moving to resistance. |
| T6 | true | true | false | false | "Yes, the current goes down: more resistance means less current for the same p.d." |
| T7 | true | true | false | false | "So if a resistor has a p.d. of 12 V across it and a current of 3 A through it, what is its resistance in ohms?" — R = V/I was never stated before this calculation. |
| T8 | true | true | false | true | "No worries, here's the answer: resistance is measured in ohms (Ω)." — Claims to give the answer but never works out 12 ÷ 3 = 4 Ω. |
| T9 | true | true | false | false | "What does that straight line tell you about its resistance?" |
| T10 | true | true | false | false | "So what kind of current flows through a diode in the reverse direction?" — Skips the filament lamp and jumps to the diode. |
| T11 | true | true | false | false | "How big is the current in the reverse direction?" |
| T12 | true | null | false | false | "Do you want me to just tell you the rest of this one?" — Leaves the wrong answer 'a few amps' uncorrected. |
| T13 | true | false | true | false | "The circuit uses a variable resistor (rheostat), and what is it used for in the circuit?" — About 160 words. Ends by asking about a purpose it never taught. |
| T14 | true | true | false | true | "since the variable resistor lets you change the settings as you go" — 'change the settings' is vague. |
| T15 | true | true | false | false | "If the component is a filament lamp, where in the circuit do you connect the ammeter?" |
| T16 | true | null | false | true | "you worked through potential difference, I told you about current, resistance and I-V graphs" — Backwards: she answered questions on current and resistance, but only named the unit of p.d. |
| T17 | true | null | false | false | "Bye for now! You can come back any time to go over the practical and the other ideas we only touched on." |

Flow faults (2):

- T16 **closing_claims_untaught_content** — "you worked through potential difference, I told you about current, resistance and I-V graphs" — For p.d. she only gave the unit. E = QV was never taught.
- T8 **factual_or_unit_slip** — "No worries, here's the answer: resistance is measured in ohms (Ω)." — The question asked for a number (4 Ω). The tutor gives the unit instead.

Fixes:

1. **teach-core: give the worked answer on 'huh?' to a calculation**: When she is lost on a calculation, show formula, substitution and result (R = V/I = 12 ÷ 3 = 4 Ω) before moving on. — "No worries, here's the answer: resistance is measured in ohms (Ω)."
2. **keyPoints[0].tutor_note and keyPoints[1].tutor_note**: Require teaching Q = It and E = QV, each with one easy worked example, before leaving the key point. introTips[1] promises this, and the session never stated either equation. — "Yes, coulombs (C) is right: that's the unit for charge."
3. **teach-core: tell mode length and scope**: Keep the told summary to the current key point and under about 60 words. Start the next key point in a separate turn, and teach the rheostat's purpose before asking about it. — "The circuit uses a variable resistor (rheostat), and what is it used for in the circuit?"
4. **teach-core: closing summary**: Build the summary from the record of what she actually answered versus what she was told. Here she answered on current and resistance, and was told the I-V graphs. — "you worked through potential difference, I told you about current, resistance and I-V graphs"
5. **teach-core: correct before check-in**: Correct a wrong answer in one line before offering to tell the rest, e.g. 'No, it's a tiny current, nearly zero.' — "Do you want me to just tell you the rest of this one?"
