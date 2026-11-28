# Review: p5-forces-motion (2026-11-28)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 41 findings, cost $0.7965.

## Counts (made in code from the findings)

- new: 16
- P4: 5
- F3: 5
- F5: 4
- P16: 3
- F1: 2
- F7: 2
- P14: 1
- F10: 1
- F8: 1
- M1: 1

## Findings

- **1.1a don't know (first time)** [new, minor] "The unit is named after James Joule." — The hint is the answer in all but name, so she just picks the matching button without thinking about what energy is measured in.
- **1.2** [F5, minor] "A quantity is anything you can measure, such as a mass or a length. Every quantity has a size: a number with a unit, such as 5 kg or 20 m. Its size is also called its magnitude." — Two new terms (quantity, magnitude) in one message. Magnitude is then never used again in the script.
- **1.3** [new, minor] "5 kg is 5 kg, whichever way you point." — Muddled wording: it is not clear what is being pointed, or by whom. Say plainly that a mass has no direction.
- **1.7** [new, would confuse or mislead her] "so Pythagoras gives the straight line: 500 m, about 53° north of east" — The Pythagoras working is skipped and the 53° comes from nowhere (it needs trigonometry or a scale drawing). A first-time learner cannot see where either number comes from, in the same message that introduces displacement.
- **1.7b** [F1, minor] "Distance is its scalar partner: just how far, with no direction." — 1.6 has already said 'Distance is a scalar'; the same fact is told again two messages later.
- **1.10** [new, a teacher would correct it] "Velocity is speed in a given direction, so velocity is a vector: it is displacement ÷ time." — Two different definitions are run together. 'Displacement ÷ time' appears before she has been told speed is distance ÷ time, and it does not follow from the 'so'.
- **1.12 (all of them)** [new, minor] "Yes: your line makes every point. You have this: A scalar has a size only. You have this: A vector has a size and a direction." — Robotic feedback: 'You have this:' twice, reading her own answer back as a checklist. The same pattern recurs at 6.9.
- **1.12 (none)** [new, minor] "Here is what a good line says. A scalar has a size only. A vector has a size and a direction." — If her line is wrong, the reply says nothing about what she wrote or why it misses; it does not fit the answer it follows. The same happens at 2.16, 3.12, 4.7, 5.11 and 6.9.
- **1.12** [P4, minor] "In one line: what is the difference between a scalar and a vector?" — Key point 1 closes without ever saying that energy is a scalar or that acceleration and weight are vectors, all of which the lesson file lists. Speed = distance ÷ time is also not stated in this key point.
- **2.2** [P16, a teacher would correct it] "The equation is v = s ÷ t: speed = distance ÷ time." — The lesson file gives v = d/t, d = vt, t = d/v. The script uses s for distance, so the slides she goes to next will not match.
- **2.2** [new, a teacher would correct it] "s is the distance in metres (m) and t is the time in seconds." — The symbol s is introduced for distance while 's' is also the unit for seconds ('450 m in 30 s' on the next card). The unit symbol for seconds is not given here although the others are, so a beginner will mix the two up.
- **2.3** [new, minor] "Rearranged for distance: s = v t. Rearranged for time: t = s ÷ v." — Two rearrangements are stated in one message with no explanation of how they come from the equation. The time form is never practised.
- **2.7** [P16, minor] "running about 3 m/s" — The running speed is not in the lesson file's list of typical speeds; it is the tutor's own addition.
- **2.7** [P4, minor] "Walking is about 1.5 m/s, running about 3 m/s and cycling about 6 m/s. Sound travels through air at about 330 m/s." — The lesson file's car on a motorway (about 30 m/s) and the speed of light are left out, yet the key point is ticked.
- **2.9** [P14, a teacher would correct it] "A distance-time graph shows how far something has gone at each moment. Time runs along the bottom and distance goes up the side." — The script indicates no graph to look at or try: flat, sloping, steeper and curved lines (2.9 to 2.15, and again in 3.8 to 3.11) are described in words only. A girl meeting graphs of motion for the first time needs to see and handle them.
- **2.15** [P16, minor] "That line is a tangent, and its gradient is the speed at that moment." — Tangents are not in the lesson file's key point. It is a new term and a hard idea, told once and never practised or tested.
- **3.2b** [F1, minor] "m/s² is read as "metres per second squared"." — The message before has just written 'metres per second squared (m/s²)'; the same thing is said again.
- **3.10** [new, would confuse or mislead her] "Distance = speed × time, so on a velocity-time graph the area between the line and the time axis is the distance travelled." — The 'so' is a leap. She is never shown the simple case (a flat line gives a rectangle, height × base = speed × time) that makes area mean distance, and the triangle formula is added in the same message.
- **3.10** [P4, minor] "A straight line rising from zero makes a triangle: area = ½ × base × height." — The lesson file also teaches the trapezium area, which is not covered before the key point is ticked.
- **4.2** [P4, a teacher would correct it] "The equation is v² − u² = 2 a s" — The lesson file's key point 4 has three equations (v = u + at, s = ½(u + v)t, v² = u² + 2as) and five quantities. The script teaches only one, in a different form from the slides, and calls s distance rather than displacement, yet ticks the key point.
- **4.2** [F10, a teacher would correct it] "v and u are in m/s, a is the acceleration in m/s² and s is the distance in metres (m)." — The symbols v and u are never named outright as final and starting velocity, only by their unit. Until now v meant 'the speed', and u is brand new.
- **4.3** [F3, minor] "A ball starts from rest and speeds up at 2 m/s² over 25 m." — 'From rest' is used on the card before anything has said it means starting at 0 m/s.
- **4.7** [new, minor] "In one line: which equation links velocity, acceleration and distance when the time is not given?" — This asks her to type an equation with squared symbols from memory. That is awkward on a keyboard and is rote recall, not her own words.
- **5.3** [F5, minor] "The pull of gravity on an object is its weight. Some objects fall with only their weight acting: no air pushes back on them. Falling under gravity alone is called free fall." — Two new terms (weight, free fall) in one message.
- **5.3** [new, a teacher would correct it] "Some objects fall with only their weight acting: no air pushes back on them." — Misleading: near the Earth, air always pushes back. The lesson file says to ignore air resistance, which is an idealisation, not something true of 'some objects'.
- **5.5 right answer** [F3, a teacher would correct it] "Yes: with no air resistance, everything falls with the same acceleration, whatever its mass." — 'Air resistance' is used here, but it is not explained until 5.6.
- **5.5 don't know (first time)** [F7, minor] "Does mass change the acceleration in free fall?" — The hint asks a new question she has not been told the answer to, rather than pointing her back to 'anything in free fall accelerates at about 9.8 m/s²'.
- **5.7** [new, would confuse or mislead her] "When does the skydiver stop speeding up?" — Nothing so far has told her that equal, opposite forces mean no change of speed, or that air resistance acts upward. A sensible beginner would pick 'bigger than the weight'. The right-answer reply ('the up and down forces are equal and cancel') still does not say why cancelling stops the speeding up.
- **5.7 right answer** [F3, minor] "the up and down forces are equal and cancel" — 'Forces' is leaned on throughout key point 5, but a force is not explained until 6.1 ('A force is a push or a pull').
- **5.7 wrong answer (bigger than the weight)** [new, a teacher would correct it] "Not quite: air resistance grows only until it equals the weight. Then the forces cancel, and it stops growing." — This does not address her idea that the upward force must win. 'It stops growing' is unclear ('it' could be the speed or the air resistance) and no reason is given.
- **5.7 don't know (first time)** [F7, a teacher would correct it] "When would the two be equal?" — The hint swaps in a different, muddled question that she cannot answer, while giving away that 'equal' is the answer wanted.
- **5.8** [F8, a teacher would correct it] "A skydiver is falling at terminal velocity. Which is true of the forces on the skydiver?" — The answer ('Air resistance equals the weight') was the right option at 5.7 and was restated in 5.7b just before this question.
- **5.9** [new, minor] "The skydiver slows down until the forces are equal again, at a new, lower terminal velocity." — It does not say why the forces become equal again (air resistance falls as the speed falls), so the second terminal velocity is just asserted.
- **5.11** [P4, a teacher would correct it] "In one line: why does a falling skydiver reach a steady speed?" — The key point is closed without the lesson file's point that the acceleration shrinks as air resistance grows, the velocity-time graph of the fall, or the term 'non-uniform' that is in the key point's title.
- **6.2** [F3, minor] "Friction, air resistance and the tension in a rope are contact forces." — Friction and tension are named here, but they are only explained in the next message (6.2b).
- **6.2b** [F5, minor] "Friction is the force that resists one surface sliding over another. Tension is the pull in a stretched rope or string." — Two new terms are defined in one message.
- **6.4** [F5, a teacher would correct it] "A force between objects that are apart is called a non-contact force. Gravity, magnetic force and electrostatic force, between charged objects, are examples." — Several new terms at once: non-contact force, magnetic force, electrostatic force and 'charged objects', the last with no explanation.
- **6.8** [F3, a teacher would correct it] "a 10 N force is drawn as an arrow 2 cm long" — The newton and its symbol N have not been taught as the unit of force in this lesson. They appear only in a wrong-answer reply at 1.1a.
- **6.10** [new, a teacher would correct it] "Now for a short quiz: six questions on the whole lesson." — The quiz is not on the whole lesson. Three questions are on key point 3 and none are on key point 2 (speed, distance-time graphs) or key point 5 (free fall, terminal velocity).
- **6.15 don't know (first time)** [new, minor] "Which part of the graph multiplies velocity by time?" — Muddled wording: a part of a graph does not multiply anything. A 15-year-old would not know what is being asked.
- **whole script** [M1, a teacher would correct it] "the scripted AI lesson (key points 1, 2, 3, 4, 5, 6)" — Six key points, three equations, two kinds of graph and a quiz in one sitting of nearly 90 messages, almost all 'read, tap Next, pick a button', with no hands-on activity indicated. A first-time learner would flag well before terminal velocity.

## Overall

Not as it is. The calculations and most wrong-answer replies are sound, but three steps would lose a first-time learner: the unexplained Pythagoras and 53° at 1.7, the jump to 'area is distance' at 3.10, and the skydiver question at 5.7, which she cannot answer from what she has been told. The symbols need sorting out (s for distance against s for seconds, d on the slides, v and u never named), and several terms are used before they are explained (air resistance, from rest, N, friction, tension). It also ticks key points 4 and 5 with much of the lesson file untaught, the quiz skips two key points, and it is too long and too wordy about graphs with nothing indicated for her to look at or try; I would fix these and split it before she uses it.
