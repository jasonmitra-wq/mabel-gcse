# Teach sim: p1-energy-stores (run, persona bored, 2026-10-17)

Model claude-sonnet-5-5. 16 tutor turns, 1 flagged. Complete: true. Coverage: [true,false,true,true,true].

Lesson flags: points never completed: 1 "The four ways energy is transferred"

**Tutor** [opening]: Welcome! Every time you move, eat or switch on a light, energy is being held in some way and then changed, and today we start by learning that there are eight different "energy stores". One of them is kinetic, the energy of anything that's moving, like a kicked ball. Which store is a stretched spring holding its energy in?

**Student** (try): elastic energy store?

**Tutor** [fact, point 0]: Yes — a stretched spring holds its energy in the elastic potential store. Now back to kinetic: it's the energy of anything moving, worked out with Ek = ½mv², where m is mass in kg and v is speed in m/s, measured in joules (J). A parked lorry isn't moving, so what is its kinetic energy?

**Student** (try): zero because its not moving

**Tutor** [fact, point 0]: Next is the gravitational potential store: energy an object has because of its height above a reference point, worked out with Ep = mgh, where g = 9.8 N/kg on Earth. A book on a high shelf has energy in this store, so what does the book's height do to that energy?

**Student** (try): the higher it is the more energy it has

**Tutor** [fact, point 0]: Yes — the higher the book is, the more energy it has in its gravitational potential store. Now back to the spring: its elastic potential store is worked out with Ee = ½ke², where k is the spring constant (N/m) and e is the extension (m), measured in joules (J). In that formula, what does the letter e stand for?

**Student** (wrong): is it the spring constant?

**Tutor** [checkin, point 0]: Do you want me to just tell you the rest of this one?

**Student** (checkin-yes): yeah just tell me

**Tutor** [next, point 0]: Here's the rest, quickly. The "e" in that formula is the extension, in metres, so it's not the spring constant. Thermal: every object has it, and more energy at a higher temperature. Chemical: food, fuels and batteries. Nuclear: inside atomic nuclei, like uranium or the Sun's core. Electrostatic: between charged objects, like static on a balloon. Magnetic: between magnets.  Energy doesn't just jump between stores. It moves by pathways, and one is mechanical: work done by forces, like pushing, pulling or kicking a ball. When you kick a ball, what is the force doing to the energy?

> Recap: Kinetic energy is the energy of moving things: Ek = ½mv², in joules. / A stationary object, like a parked lorry, has zero kinetic energy. / The higher an object is, the more gravitational potential energy it has: Ep = mgh. / A stretched spring stores elastic energy: Ee = ½ke², where k is spring constant, e is extension.

⚑ over length (97 words)

**Student** (bored): huh? can we skip this

**Tutor** [next, point 1]: That's fine, we'll skip the four ways energy is transferred. Next is the rule that never breaks: energy cannot be created or destroyed, so the total energy in a closed system always stays the same. If a book falls off a table, its gravitational potential energy doesn't vanish, so what happens to the total amount of energy?

**Student** (idk): idk what happens to it

**Tutor** [retry, point 2]: Think of it like money moving between pockets: the book's energy doesn't vanish, it just moves from one store to another, and the total stays the same. As the book falls, its gravitational potential energy becomes kinetic energy. So if the book started with 10 J of energy in total, how much energy is there in total once it's falling?

**Student** (wrong): like 5 j? cuz half went somewhere

**Tutor** [fact, point 2]: Not quite — the total stays 10 J, because none of the energy went anywhere; it just moved between stores. If a closed system has 20 J of energy in total, how much energy is in it after something changes inside it?

**Student** (try): still 20 j right

**Tutor** [next, point 2]: Yes — the total stays 20 J, because energy only moves between stores. In real life, though, some energy always ends up in a store that is no use, which is called dissipation: it spreads into the thermal store of the surroundings, like heat warming the air around a car engine. Where does that wasted energy end up?

> Recap: Energy can't be created or destroyed, only moved between stores. / In a closed system, the total energy always stays the same. / A falling book turns gravitational potential energy into kinetic energy. / Start with 20 J in total, and you still have 20 J after.

**Student** (bored): huh

**Tutor** [retry, point 3]: Let me say that more simply. When a car engine runs, some of its energy warms the air around it, and that heat spreads out so much that we can't use it again. Where does that wasted energy end up?

**Student** (minimal): the air?

**Tutor** [fact, point 3]: Yes — the air around the engine is right, because wasted energy spreads into the thermal store of the surroundings. In a car engine, the useful job is making the car move, so what is the wasted energy there?

**Student** (try): the heat that comes out?

**Tutor** [next, point 3]: Yes — the heat that comes out is right, because that's the wasted energy spreading into the surroundings. The thick input arrow splits into a useful arrow and a wasted arrow, so which arrow is wider if the engine wastes more than it uses?

> Recap: Energy is never lost, it only moves between stores. / Dissipation means energy spreads into the surroundings, where we can't use it. / Wasted energy ends up in the thermal store of the surroundings. / In a car engine, the waste is heat warming the air.

**Student** (try): the wasted arrow would be wider?

**Tutor** [fact, point 4]: Yes — the wasted arrow is wider when more energy is wasted than used. Now, efficiency compares the two: efficiency = useful output ÷ total input. A lamp is supplied with 100 J and transfers 15 J usefully by light, so what is its efficiency as a decimal?

**Student** (try): um 15 divided by 100... is like 0.15?

**Tutor** [complete, point 4]: Yes — 15 ÷ 100 = 0.15 is right, so the lamp's efficiency is 0.15. That brings us to the end of this lesson. You answered questions on "Dissipation" and "Sankey diagrams and efficiency", and answered some questions on "The eight energy stores" and "Conservation of energy", where I told you the rest.

> Recap: A Sankey diagram's input arrow splits into a useful arrow and a wasted arrow. / Arrow width shows how much energy there is, so more waste means a wider wasted arrow. / Efficiency = useful output ÷ total input. / The lamp's 15 J useful out of 100 J in gives 0.15.

**Student** (closing): ok thanks bye

**Tutor** [free]: Bye for now! You can come back to "The four ways energy is transferred" any time, and good luck with your GCSE revision.

## Judge (claude-opus-5-5)

**FAIL** — question does not match what was taught: T0, T12; flow faults: correct_answer_not_acknowledged T2

Engagement 3/5 — "huh? can we skip this"

Would quit: false

| Turn | on topic | question matches | too long | confusing | quote / note |
|---|---|---|---|---|---|
| T0 | true | false | false | false | "Which store is a stretched spring holding its energy in?" — The turn taught only kinetic, but the question asks about the elastic store, which had not been taught yet. |
| T1 | true | true | false | false | "A parked lorry isn't moving, so what is its kinetic energy?" |
| T2 | true | true | false | false | "Next is the gravitational potential store: energy an object has because of its height above a reference point, worked out with Ep = mgh, where g = 9.8 N/kg on Earth." — Moves on without confirming her correct 'zero' answer. |
| T3 | true | true | false | false | "In that formula, what does the letter e stand for?" |
| T4 | true | null | false | false | "Do you want me to just tell you the rest of this one?" — Check-in follows a wrong answer, which is allowed. |
| T5 | true | true | true | true | "When you kick a ball, what is the force doing to the energy?" — About 95 words. It bolts a new key point onto the telling, and the closing question is vague, so she replies 'huh?'. |
| T6 | true | true | false | false | "If a book falls off a table, its gravitational potential energy doesn't vanish, so what happens to the total amount of energy?" |
| T7 | true | true | false | false | "So if the book started with 10 J of energy in total, how much energy is there in total once it's falling?" |
| T8 | true | true | false | true | "Not quite — the total stays 10 J, because none of the energy went anywhere; it just moved between stores." — 'Went nowhere' contradicts 'moved between stores', and this student just guessed that half went somewhere. |
| T9 | true | true | false | false | "Where does that wasted energy end up?" — The answer was stated in the same sentence, and she still replied 'huh'. |
| T10 | true | true | false | false | "When a car engine runs, some of its energy warms the air around it, and that heat spreads out so much that we can't use it again." |
| T11 | true | true | false | false | "In a car engine, the useful job is making the car move, so what is the wasted energy there?" |
| T12 | true | false | false | true | "The thick input arrow splits into a useful arrow and a wasted arrow, so which arrow is wider if the engine wastes more than it uses?" — Sankey diagrams are never named or introduced, and 'arrow width = amount of energy' was never taught. |
| T13 | true | true | false | false | "A lamp is supplied with 100 J and transfers 15 J usefully by light, so what is its efficiency as a decimal?" |
| T14 | true | null | false | true | "You answered questions on "Dissipation" and "Sankey diagrams and efficiency", and answered some questions on "The eight energy stores" and "Conservation of energy", where I told you the rest." — She was never 'told the rest' of Conservation of energy; she worked through it herself. |
| T15 | true | null | false | false | "Bye for now! You can come back to "The four ways energy is transferred" any time, and good luck with your GCSE revision." |

Flow faults (1):

- T2 **correct_answer_not_acknowledged** — "Next is the gravitational potential store: energy an object has because of its height above a reference point, worked out with Ep = mgh, where g = 9.8 N/kg on Earth." — She answered 'zero because its not moving', which is correct, and got no confirmation.

Fixes:

1. **teach-core: confirm correct answers before moving on**: Always open the reply to a correct answer with confirmation plus the reason, e.g. 'Yes — zero, because kinetic energy needs movement.' — "zero because its not moving"
2. **keyPoints[4].content / teach-core: introduce before asking**: Before any width question, name the Sankey diagram and state 'arrow width = amount of energy'. Then ask which arrow is wider. — "The thick input arrow splits into a useful arrow and a wasted arrow, so which arrow is wider if the engine wastes more than it uses?"
3. **teach-core: tell-me scope**: When telling the rest, finish only the current key point in one short turn. Then start the next key point in a separate short turn with a concrete question, e.g. 'When you kick a ball, energy goes into which store of the ball?', using the sentence frame in keyPoints[1].memTip. — "When you kick a ball, what is the force doing to the energy?"
4. **teach-core: first question tests taught content**: The opening question must test what was just taught, e.g. ask about the kicked ball's store, not the elastic store that comes later. — "Which store is a stretched spring holding its energy in?"
5. **teach-core: closing summary accuracy**: Tag 'told you the rest' only on key points where tell-me was actually used (here The eight energy stores), not on Conservation of energy. — "You answered questions on "Dissipation" and "Sankey diagrams and efficiency", and answered some questions on "The eight energy stores" and "Conservation of energy", where I told you the rest."
