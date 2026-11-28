# P5 B4 round 2: every finding and what was done (Phase C, 2026-11-28)

Second script reviews (tools/review-lesson.js --script, claude-fable-5-2), one per lesson, $4.9204 in all. Second reviews were allowed: every first review found an F-numbered fault more than twice. Each finding below is listed by F-number (its place in that review's review.json) with its fault id, step and outcome. "fixed" means the script was changed (lessons/physics/<id>.script.json, walk 0 after the change).

Totals: 262 findings; 181 fixed, 6 fixed in part, 75 disputed.

## p5-forces-motion (41 findings: 29 fixed, 1 fixed in part, 11 disputed; $0.7965)

| F | Fault | Step | Finding (reviewer, shortened) | Outcome |
|---|---|---|---|---|
| F1 | new | 1.1a don't know (first time) | The hint is the answer in all but name, so she just picks the matching button without thinking about what energy is measured in. | fixed |
| F2 | F5 | 1.2 | Two new terms (quantity, magnitude) in one message. Magnitude is then never used again in the script. | fixed |
| F3 | new | 1.3 | Muddled wording: it is not clear what is being pointed, or by whom. Say plainly that a mass has no direction. | fixed |
| F4 | new | 1.7 | The Pythagoras working is skipped and the 53° comes from nowhere (it needs trigonometry or a scale drawing). A first-time learner cannot see where either number comes from, in the same message that introduces displacemen | fixed |
| F5 | F1 | 1.7b | 1.6 has already said 'Distance is a scalar'; the same fact is told again two messages later. | fixed |
| F6 | new | 1.10 | Two different definitions are run together. 'Displacement ÷ time' appears before she has been told speed is distance ÷ time, and it does not follow from the 'so'. | fixed |
| F7 | new | 1.12 (all of them) | Robotic feedback: 'You have this:' twice, reading her own answer back as a checklist. The same pattern recurs at 6.9. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F8 | new | 1.12 (none) | If her line is wrong, the reply says nothing about what she wrote or why it misses; it does not fit the answer it follows. The same happens at 2.16, 3.12, 4.7, 5.11 and 6.9. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F9 | P4 | 1.12 | Key point 1 closes without ever saying that energy is a scalar or that acceleration and weight are vectors, all of which the lesson file lists. Speed = distance ÷ time is also not stated in this key point. | fixed |
| F10 | P16 | 2.2 | The lesson file gives v = d/t, d = vt, t = d/v. The script uses s for distance, so the slides she goes to next will not match. | disputed: the spec writes distance = speed × time as s = v t |
| F11 | new | 2.2 | The symbol s is introduced for distance while 's' is also the unit for seconds ('450 m in 30 s' on the next card). The unit symbol for seconds is not given here although the others are, so a beginner will mix the two up. | fixed |
| F12 | new | 2.3 | Two rearrangements are stated in one message with no explanation of how they come from the equation. The time form is never practised. | fixed |
| F13 | P16 | 2.7 | The running speed is not in the lesson file's list of typical speeds; it is the tutor's own addition. | disputed: running about 3 m/s is in the spec's list of typical speeds |
| F14 | P4 | 2.7 | The lesson file's car on a motorway (about 30 m/s) and the speed of light are left out, yet the key point is ticked. | disputed: the spec's typical values (walking, running, cycling, sound) are taught; a motorway car and light are not spec values |
| F15 | P14 | 2.9 | The script indicates no graph to look at or try: flat, sloping, steeper and curved lines (2.9 to 2.15, and again in 3.8 to 3.11) are described in words only. A girl meeting graphs of motion for the first time needs to se | disputed: no hands-on widget or picture exists for P5 (no P5 diagrams yet; new widgets are shared code) |
| F16 | P16 | 2.15 | Tangents are not in the lesson file's key point. It is a new term and a hard idea, told once and never practised or tested. | disputed: a tangent to a distance-time curve is spec 4.5.6.1.4 (HT) |
| F17 | F1 | 3.2b | The message before has just written 'metres per second squared (m/s²)'; the same thing is said again. | fixed |
| F18 | new | 3.10 | The 'so' is a leap. She is never shown the simple case (a flat line gives a rectangle, height × base = speed × time) that makes area mean distance, and the triangle formula is added in the same message. | fixed |
| F19 | P4 | 3.10 | The lesson file also teaches the trapezium area, which is not covered before the key point is ticked. | disputed: the trapezium is not required; rectangle (3.10) and triangle (3.10b) are taught |
| F20 | P4 | 4.2 | The lesson file's key point 4 has three equations (v = u + at, s = ½(u + v)t, v² = u² + 2as) and five quantities. The script teaches only one, in a different form from the slides, and calls s distance rather than displac | disputed: the spec's only equation of motion is v² − u² = 2 a s |
| F21 | F10 | 4.2 | The symbols v and u are never named outright as final and starting velocity, only by their unit. Until now v meant 'the speed', and u is brand new. | fixed |
| F22 | F3 | 4.3 | 'From rest' is used on the card before anything has said it means starting at 0 m/s. | fixed |
| F23 | new | 4.7 | This asks her to type an equation with squared symbols from memory. That is awkward on a keyboard and is rote recall, not her own words. | fixed |
| F24 | F5 | 5.3 | Two new terms (weight, free fall) in one message. | fixed |
| F25 | new | 5.3 | Misleading: near the Earth, air always pushes back. The lesson file says to ignore air resistance, which is an idealisation, not something true of 'some objects'. | fixed |
| F26 | F3 | 5.5 right answer | 'Air resistance' is used here, but it is not explained until 5.6. | fixed |
| F27 | F7 | 5.5 don't know (first time) | The hint asks a new question she has not been told the answer to, rather than pointing her back to 'anything in free fall accelerates at about 9.8 m/s²'. | fixed |
| F28 | new | 5.7 | Nothing so far has told her that equal, opposite forces mean no change of speed, or that air resistance acts upward. A sensible beginner would pick 'bigger than the weight'. The right-answer reply ('the up and down force | fixed |
| F29 | F3 | 5.7 right answer | 'Forces' is leaned on throughout key point 5, but a force is not explained until 6.1 ('A force is a push or a pull'). | disputed: force is an everyday word; the lesson file teaches forces last; the newton is now named at 6.1 |
| F30 | new | 5.7 wrong answer (bigger than the weight) | This does not address her idea that the upward force must win. 'It stops growing' is unclear ('it' could be the speed or the air resistance) and no reason is given. | fixed |
| F31 | F7 | 5.7 don't know (first time) | The hint swaps in a different, muddled question that she cannot answer, while giving away that 'equal' is the answer wanted. | fixed |
| F32 | F8 | 5.8 | The answer ('Air resistance equals the weight') was the right option at 5.7 and was restated in 5.7b just before this question. | fixed |
| F33 | new | 5.9 | It does not say why the forces become equal again (air resistance falls as the speed falls), so the second terminal velocity is just asserted. | fixed |
| F34 | P4 | 5.11 | The key point is closed without the lesson file's point that the acceleration shrinks as air resistance grows, the velocity-time graph of the fall, or the term 'non-uniform' that is in the key point's title. | fixed in part: 5.6 now says the acceleration falls as air resistance grows; the velocity-time graph of the fall is disputed (no picture) |
| F35 | F3 | 6.2 | Friction and tension are named here, but they are only explained in the next message (6.2b). | fixed |
| F36 | F5 | 6.2b | Two new terms are defined in one message. | fixed |
| F37 | F5 | 6.4 | Several new terms at once: non-contact force, magnetic force, electrostatic force and 'charged objects', the last with no explanation. | fixed |
| F38 | F3 | 6.8 | The newton and its symbol N have not been taught as the unit of force in this lesson. They appear only in a wrong-answer reply at 1.1a. | fixed |
| F39 | new | 6.10 | The quiz is not on the whole lesson. Three questions are on key point 3 and none are on key point 2 (speed, distance-time graphs) or key point 5 (free fall, terminal velocity). | fixed |
| F40 | new | 6.15 don't know (first time) | Muddled wording: a part of a graph does not multiply anything. A 15-year-old would not know what is being asked. | fixed |
| F41 | M1 | whole script | Six key points, three equations, two kinds of graph and a quiz in one sitting of nearly 90 messages, almost all 'read, tap Next, pick a button', with no hands-on activity indicated. A first-time learner would flag well b | disputed: length and order follow the lesson file's key points; nothing hands-on exists to break up the runs (see P14) |

## p5-newtons-laws (32 findings: 21 fixed, 1 fixed in part, 10 disputed; $0.6523)

| F | Fault | Step | Finding (reviewer, shortened) | Outcome |
|---|---|---|---|---|
| F1 | L3 | 1.1a | The lesson opens by testing acceleration, velocity and m/s², which this lesson never explains. Key point 2 depends on acceleration, so a girl who does not have it secure is lost from the first question. | disputed: labelled recall question from an earlier lesson ("two quick questions from earlier lessons"), the opening every scripted lesson uses |
| F2 | F3 | 1.2 | N is used all through key point 1 without its name. She is only told it stands for newton at 2.1, so she has no way to read '50 N' aloud. | disputed: the term check (later-term) forbids "newton" before key point 2, where it is taught; 1.2b now says the name comes next |
| F3 | P6 | 1.2 | Three things in one message: several forces at once, the box example, and the unit. The unit sentence is bolted on and does not belong with the other two. | fixed |
| F4 | F3 | 1.8b | Air resistance is used here and in the 1.9 replies without explanation. It is only glossed as 'the push of the air' at 4.10. | fixed |
| F5 | new | 1.9 | She has only been told 'zero resultant means steady velocity'. This asks the reverse (steady velocity means zero resultant), and the idea that makes that safe ('Changing the speed or the direction of an object needs a re | fixed |
| F6 | F7 | 1.9 don't know (first time) | This is not an easier step. It sends her back to a law that was stated the other way round, so a girl who is stuck stays stuck. | fixed |
| F7 | new | 1.11 | 'Rolls' suggests nobody is pushing, then a push appears in the next sentence. She should be told at the start that someone pushes the trolley with a steady force. | fixed |
| F8 | new | 1.11 don't know (first time) | The hint asks which way the resultant acts, but the buttons are 'It speeds up', 'It keeps the same speed' and 'It slows down'. None of the buttons answers the question just asked. | fixed |
| F9 | new | 1.13 | 'You have this:' followed by a stock sentence is stilted and reads like a marking machine. The same wording returns at 2.12 and 3.7. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F10 | new | 1.13 (None) | If her line was wrong, this does not say so or say what was wrong with it. It just shows a model answer, as do the 'None' replies at 2.12, 3.7 and 4.13. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F11 | F1 | 2.1 | The unit of force was already given at 1.2 and has been used for a whole key point. This says it again as if new, when the name should have come at 1.2. | fixed |
| F12 | F2 | 2.4b | 'it' means F = m a, which is not in this message. The worked-example card sits between the equation and this line. | fixed |
| F13 | P13 | 2.4b | Two rearrangements are stated in one line with no worked example of either. She is then asked to use a = F ÷ m cold at 2.5, and m = F ÷ a is never practised at all. | fixed in part: a = F ÷ m is now practised at 2.5; m = F ÷ a is stated, not practised |
| F14 | new | 2.5 | 'Your turn' comes on the second practice question, after she has already had her turn at 2.6. The step ids suggest the two questions were swapped and the wording not updated. | fixed |
| F15 | P6 | 2.7 | A second idea and a new term are added to the message about inertia. She is given no reason why mass needs another name, and nothing ever uses it again. | fixed |
| F16 | F1 | 2.7 | This is the same fact as 1.12b ('The more mass an object has, the more inertia it has'), said again. | fixed |
| F17 | F8 | 2.8 | The message just before says more mass makes velocity harder to change, 2.2 says bigger mass means smaller acceleration, and 1.12b used the same full and empty trolley. She can answer by recall, not by thinking. | fixed |
| F18 | F5 | 2.9 | Pulley and light gates are both new in one message. 'Light gates, electronic timers, measure' is hard to parse, and light gates time the trolley so that acceleration can be worked out; they do not measure it directly. | fixed |
| F19 | new | 2.9b | She has not been told that the pull on the trolley is the weight of the hanging masses (weight is not taught until key point 4). 'The hanger' has not been mentioned, so she cannot see why moving masses changes the force. | fixed |
| F20 | F8 | 2.10 | The message just before the question gives the answer almost word for word. The right button is 'The total mass being pulled'. | fixed |
| F21 | new | 2.11 | This arrives from nowhere between the experiment and the summing-up, with no question. It is nearly the same sum as the worked example, so it reads as a stray repeat. | fixed |
| F22 | new | 2.12 | The only point checked is 'The resultant force equals mass × acceleration', which is just reading the symbols aloud. The useful ideas (bigger force means bigger acceleration, bigger mass means smaller) appear only in the | fixed |
| F23 | F1 | 3.4 | 3.2 has already said 'they act on different objects'. The new idea here, that they therefore cannot cancel, could be given without repeating it. | fixed |
| F24 | F3 | 4.3b | Mass has been used since 1.12b and throughout F = m a. It is only said what it is here, near the end of the lesson. | fixed |
| F25 | P6 | 4.3b | Two ideas share one message: what mass is, and that weight changes from place to place. The mass-versus-weight difference is the point pupils most often muddle, so each deserves its own message and a question. | fixed |
| F26 | new | 4.5 | Nothing has warned her to change grams to kilograms, so most first-timers will type 1960 and be told the answer straight away. A teacher would give one line on grams and kilograms first, or let her try again. | fixed |
| F27 | M1 | 4.6 to 4.9 | Five told messages in a row (proportionality, newtonmeter, centre of mass, free body diagram, the book on the table) with only Next to tap. This follows six told steps at 4.1 to 4.3c, so she will stop reading. | disputed: length and order follow the lesson file's key points; nothing hands-on exists to break up the runs (see P14) |
| F28 | new | 4.9 | Free body diagrams are described only in words here and at 4.8; nothing in the script shows her one or asks her to read or draw one. A diagram topic taught without a diagram will not stick. | disputed: no hands-on widget or picture exists for P5 (no P5 diagrams yet; new widgets are shared code) |
| F29 | new | 4.11 | Adding forces at an angle by scale drawing is put into one message with no picture, no example and no question, and 'tip to tail' is unexplained. It is also not in the lesson's key points, so she cannot follow it or see  | disputed: adding forces by scale drawing is spec 4.5.1.4 (HT); no picture available (P14) |
| F30 | new | 4.12 | Splitting a force into two parts is a hard idea, given in two sentences with no picture, example or question. It is outside the key points, and a first-time learner will get nothing from it. | disputed: resolving a force is spec 4.5.1.4 (HT); no picture available (P14) |
| F31 | new | 4.13 | 'You have this:' twice in one reply is clumsy and mechanical. One plain sentence of feedback would do. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F32 | P14 | whole script | There is nothing for her to try anywhere in the lesson: no force arrows to move, no trolley to pull. The one practical is only described in words. | disputed: no hands-on widget or picture exists for P5 (no P5 diagrams yet; new widgets are shared code) |

## p5-stopping-distance (34 findings: 27 fixed, 0 fixed in part, 7 disputed; $0.5870)

| F | Fault | Step | Finding (reviewer, shortened) | Outcome |
|---|---|---|---|---|
| F1 | L3 | 1.1a | The lesson opens by testing F = m a, which this lesson has not taught. A first-time learner who knows only what the lesson has told her cannot answer it, and it uses the equation before stating it (also F10). | disputed: labelled recall question from an earlier lesson ("two quick questions from earlier lessons"), the opening every scripted lesson uses |
| F2 | F3 | 1.1a | "Resultant force" is used without being explained anywhere in the lesson. | fixed |
| F3 | L3 | 1.1b | The laws of motion are assumed and never taught here, and the third law is not used again in this lesson. She can only guess. | disputed: labelled recall question from an earlier lesson ("two quick questions from earlier lessons"), the opening every scripted lesson uses |
| F4 | P7 | 1.1b don't know (first time) | The hint only restates the question. If she does not know the laws by number, it is no easier. | fixed |
| F5 | F8 | 1.7 | The message just before was only "Stopping distance = thinking distance + braking distance", so the question asks for nothing more than adding the two numbers. | disputed: a one-step practice straight after the rule is intended |
| F6 | new | 1.10 | It states that braking distance grows with speed before anything has been said about why. It also packs four figures in two different speed units into one message. | fixed |
| F7 | new | 1.11 | She is asked to interpret a graph that is only described in words, with no picture. The lesson has not taught her what a steepening curve means. | fixed |
| F8 | new | 1.11 don't know (first time) | There is no graph or table of values for her to compare, so she cannot do what the hint asks. | fixed |
| F9 | new | 1.12 | The feedback reads like a marking sheet in sentence fragments, not a teacher's reply. "You have this:" twice in a row is stilted. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F10 | P16 | 2.1 | The lesson file says this range is for an alert driver. "Most people" then clashes with 2.3, where 0.9 s is the tired driver's time. | fixed |
| F11 | new | 2.6 | She is not told how a fall distance is turned into a time (a conversion chart). The single example invites her to think 10 cm means 0.1 s, which is wrong. | fixed |
| F12 | F5 | 2.6b | Two new terms, "mean" and "reliable", arrive in one message. How to work out a mean is not said before 2.7 asks for one. | fixed |
| F13 | new | 2.8 | The same stilted "You have this:" feedback. It credits her with the whole list even if she named only one cause. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F14 | new | 3.3 | Both steps are bare assertions. She is not told why the energy is four times as big, nor why four times the energy means four times the distance (work = force × distance is never given). | fixed |
| F15 | new | 3.6 | This question comes before 3.5 and 3.5b, which are the steps that teach about road and tyre condition. Worn tyres have not been mentioned yet, so she can only answer by elimination. | fixed |
| F16 | F1 | 3.5b | The reply to 3.6 has just told her "worn tyres grip the road less". The fact is repeated because the question was placed before the teaching. | fixed |
| F17 | P6 | 3.5b | Two separate factors (tyres and brakes) and a new word (tread) share one message. | fixed |
| F18 | new | 3.8 (all) | She is shown the marker's instruction ("It names two of these") as if it were feedback. It makes no sense read as a reply to her. | fixed |
| F19 | new | 3.8 (none) | Again the marking criterion is shown instead of a model answer, and she is not told plainly that her line missed. | fixed |
| F20 | F3 | 4.3 | "Thermal store" appears in the answer option and is never explained anywhere in the lesson. | fixed |
| F21 | F3 | 4.3 right answer | "Work done" is used before the lesson has said anything about what doing work means. | fixed |
| F22 | new | 4.3 | The question is asked before 4.2, the step that teaches the answer. Nothing so far has told her that brakes heat up or what an energy store is. | fixed |
| F23 | F1 | 4.2 | Every reply to 4.3 has just said this. "Here is how" then repeats it without really explaining what "does work" means. | fixed |
| F24 | P6 | 4.4 | One message carries an equation, three symbols, the doubling rule and the link to braking distance. The last step again leans on work = force × distance, which is never taught. | fixed |
| F25 | F1 | 4.4 | This is the same fact as 3.3 and 3.4 (double the speed, four times the braking distance), said again. | fixed |
| F26 | P13 | 4.4 | The equation is given with no worked example and no practice. She never puts numbers into it to see why doubling v gives four times Ek. | fixed |
| F27 | P4 | 4.5b | The key point's teaching about large forces on passengers, and why seatbelts and crumple zones matter, is left out. The key point would still be ticked. | fixed |
| F28 | F10 | 4.7 | The deceleration equation is first met inside a worked-example step. It is never stated beforehand with its symbols and units, and 4.5 only said "how quickly the car slows down". | fixed |
| F29 | F3 | 4.7 | "Velocity" appears for the first time here without comment. The lesson has said "speed" throughout. | fixed |
| F30 | new | 4.9 | The same stilted checklist feedback as at 1.12 and 2.8, built on "does work" and "thermal store", which were never explained. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F31 | new | 4.14 wrong answer (twice as long) | "Goes up with speed squared" has not been said in words before. She has only been told "double the speed, four times". | fixed |
| F32 | new | 4.15 right answer | 3.1 defined braking force as the force the brakes apply. The lesson never joins that to the tyre-road friction, so she may wonder how ice changes what the brakes do. | fixed |
| F33 | new | 4.16 | "Filling" a thermal store is odd wording she has not met, and "thermal store" is still unexplained. | fixed |
| F34 | P14 | whole script (e.g. 1.2 to 1.6, 4.4 to 4.6) | There is nothing hands-on and no picture mentioned anywhere: no stopping-distance graph, no car to try at different speeds. Long runs of told messages are followed only by Next, so she is likely to get bored (also M1). | disputed: no hands-on widget or picture exists for P5 (no P5 diagrams yet; new widgets are shared code) |

## p5-momentum (34 findings: 21 fixed, 1 fixed in part, 12 disputed; $0.6390)

| F | Fault | Step | Finding (reviewer, shortened) | Outcome |
|---|---|---|---|---|
| F1 | L3 | 1.1a | The lesson opens by testing F = m a, acceleration and resultant force, none of which it has taught. A first-time learner can only guess, and her first experience of the lesson is getting something wrong. | disputed: labelled recall question from an earlier lesson ("two quick questions from earlier lessons"), the opening every scripted lesson uses |
| F2 | L3 | 1.1b | She has not been told the difference between speed and velocity, so she cannot choose between them from anything the lesson has said. It is written as a revision check. | disputed: labelled recall question from an earlier lesson ("two quick questions from earlier lessons"), the opening every scripted lesson uses |
| F3 | F3 | 1.1b "Speed" / "Mass" / still doesn't know | The word scalar is used in three replies and is never explained anywhere in the lesson. | fixed |
| F4 | F1 | 1.7 | This is given as a new definition, but 1.1b already said a vector has a size and a direction and already asked her about it. It should have been taught here first and asked afterwards. | fixed |
| F5 | new | 1.2 | This is loose. The lorry and the car do not share one quantity; each has a large amount of it. "Combines" is vague too, when the next message says it is a multiplication. | fixed |
| F6 | new | 1.5 (all wrong-answer branches, and the same pattern on every question) | Every wrong answer is met with the full answer straight away, with no hint and no second try. She never gets to correct herself. | disputed: the engine answers a wrong typed number with the working (shared code) |
| F7 | F7 | 1.6 don't know (first time) | The hint only repeats the conversion already printed in the question, so it is no easier. It should help her do the conversion, for example by asking what 50 ÷ 1000 is. | fixed |
| F8 | P6 | 1.8 | One message carries the sign rule, a new word (momenta) and a two-car example. The sign rule is the hard idea here and needs its own message. | fixed |
| F9 | new | 1.8b | She has never been told that a total momentum is found by adding the separate momenta with their signs. The question needs two calculations, a sign and an addition with no example first. | fixed |
| F10 | new | 1.9 and its don't know (first time) | Finding a velocity from a momentum (v = p ÷ m) has not been taught. The hint tells her to divide without saying why, and the lesson switches between "speed" and "velocity". | fixed |
| F11 | new | 1.10 (all of them) | This reads like a mark scheme, not a teacher. "You have this:" twice in a row is stilted and she would not see it as a reply to what she wrote. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F12 | P4 | 1.10 (end of key point 1) | Key point 1 says momentum can also be measured in N s, and that is never taught. The lesson also never says outright that momentum is a vector quantity; she has to infer it from 1.7. | fixed in part: 1.7 now says momentum is a vector quantity; N s disputed (the spec gives kg m/s only) |
| F13 | new | 2.2 | "Outside forces" is abstract and comes with no example such as friction or a push from something not in the group. She will not be able to tell when a system is closed. | fixed |
| F14 | new | 2.7 | Only one option mentions momentum, in a section about momentum, so she can pick it without understanding. The air option is also oddly worded. | fixed |
| F15 | P13 | 2.8 | This is the first explosion calculation and there is no worked example for it. The only worked example was a stick-together collision; this one has a decimal mass and a different method. | fixed |
| F16 | new | 2.10 (all of them) | The same stilted mark-scheme wording as 1.10. There is also no reply for a half-right line that says "same before and after" but leaves out the closed system. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F17 | P4 | 2.10 (end of key point 2) | Key point 2 includes the collision equation m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂, with u and v as initial and final velocity. The script never shows it and never has a collision where both objects are moving. | disputed: the spec asks for collision calculations, done step by step; the general equation is not in the spec |
| F18 | F5 | 3.1 | One message brings in resultant force (never explained), change in momentum, the Δ sign and the expression m Δv. That is too much at once for a first-time learner. | fixed |
| F19 | new | 3.1 | She was taught that momentum is p, so change in momentum should be Δp, as in the lesson file. It is not explained why it is m Δv (mass unchanged, Δv the change in velocity). | fixed |
| F20 | F10 | 3.2 | The equation appears before Δt is named or any units are given; those only come in the next message. | fixed |
| F21 | L3 | 3.2 | This assumes she knows F = m a and a = Δv ÷ Δt and can follow an algebraic substitution. The second equation appears nowhere else in the lesson. | disputed: F = m a and a = Δv ÷ t are taught in p5-newtons-laws and p5-forces-motion; the spec gives this combination |
| F22 | P6 | 3.3 | Two ideas in one message: a new phrase (rate of change), which restates the previous message, and the longer-time-smaller-force result. The second is the key idea of the section and should be led up to, not told. | fixed |
| F23 | new | 3.4 | 3.1 defined change in momentum as after minus before, which here is 0 − 5 = −5 kg m/s. The sign is dropped without comment, after key point 1 taught her that signs matter, and nothing says the force acts against the moti | fixed |
| F24 | F2 | 3.5 | The question depends on the mass and speed from the worked example card, which are not in this message. She has to remember or scroll back for 0.5 kg and 10 m/s. | fixed |
| F25 | F8 | 3.7 | The answer was stated at 3.3 ("spread over a longer time needs a smaller force") and again in the 3.5 don't-know reply ("a longer stop means a smaller force"). She only has to match the wording. | disputed: applying the rule to a crash mat is the point of the question |
| F26 | F2 | 3.6 | "The same way" refers to the crash mat in the previous question, which is not in this message. | fixed |
| F27 | F3 | 3.6 | "Crumple zones" is not explained. Five examples in one list go past without any of them being pictured or explained. | fixed |
| F28 | new | 3.8 (all of them) | The same stilted mark-scheme feedback as 1.10 and 2.10. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F29 | P4 | 3.8 (end of key point 3) | Key point 3 teaches impulse (FΔt = Δp, force × time = change in momentum). The word impulse and the rearranged form never appear in the script. | disputed: impulse is not in the spec |
| F30 | new | 3.12 don't know (first time) | The first reply to "don't know" simply gives the answer and then shows the same buttons, so it is not a hint. The 3.14 hint ("Force is the rate of change of momentum.") does much the same. | fixed |
| F31 | new | 3.13 "Neither has any momentum" | "It" refers to two momenta, so it should read "Their momenta are equal and opposite". | fixed |
| F32 | F8 | 3.15 | The right option is word for word the right option from 3.7, and 3.6 said the same about airbags. She can answer by recognising the sentence. | fixed |
| F33 | P14 | whole script | There is nothing hands-on and no picture anywhere: no trolleys to collide, no before-and-after diagram, no arrows for direction. Collisions and recoil need to be seen. | disputed: no hands-on widget or picture exists for P5 (no P5 diagrams yet; new widgets are shared code) |
| F34 | M1 | whole script | The lesson is 45 steps of text and arithmetic with the same tell, example, your-turn pattern three times. I would expect her to lose interest well before the quiz. | disputed: length and order follow the lesson file's key points; nothing hands-on exists to break up the runs (see P14) |

## p5-gravity (31 findings: 18 fixed, 2 fixed in part, 11 disputed; $0.4949)

| F | Fault | Step | Finding (reviewer, shortened) | Outcome |
|---|---|---|---|---|
| F1 | L3 | 1.1a | The lesson opens with a momentum question that nothing in this lesson has taught her, and momentum is never used again. A first-time learner can only guess, which is a discouraging start. | disputed: labelled recall question from an earlier lesson ("two quick questions from earlier lessons"), the opening every scripted lesson uses |
| F2 | F10 | 1.1a | The equation p = m v is used without saying what p, m and v stand for or their units. | disputed: the term check forbids "mass" before it is taught at 1.2; the hint gives the working |
| F3 | L3 | 1.1b | This assumes she already knows about air resistance and balanced forces at steady speed. Neither has been told in this lesson. | disputed: labelled recall question from an earlier lesson ("two quick questions from earlier lessons"), the opening every scripted lesson uses |
| F4 | new | 1.6 | Every wrong answer to her first calculation is given the full answer straight away, with no second try. A teacher would point out the slip and let her try again. | disputed: the engine answers a wrong typed number with the working (shared code) |
| F5 | new | 1.9 | The praise is clumsy and mechanical: 'You have this:' appears twice and her points are read back to her in the tutor's words. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F6 | new | 2.2 | This is one dense sentence that renames g and links it to the new idea of a field. She would need it in two steps. | fixed |
| F7 | new | 2.5 | The question comes before step 2.3, which is the message that teaches that the field weakens with distance. Because 1.8 said g is 'almost zero' far out, the 'zero' option is a fair guess, and 'there' is vague. | disputed: 1.8 (g almost zero far out) gives the basis for the answer; the repeat in 2.3 is removed (F8) |
| F8 | F1 | 2.3 | This repeats what the 2.5 feedback has just told her on every branch ('the field gets weaker further from the Earth'). | fixed |
| F9 | F2 | 2.3 | The message does not say which surface or whose field; the Earth is only named in its second sentence. | fixed |
| F10 | new | 2.4 | Field lines are described in words only, with no diagram shown. A first-time learner needs to see the picture to make sense of this. | disputed: no hands-on widget or picture exists for P5 (no P5 diagrams yet; new widgets are shared code) |
| F11 | new | 2.6 | The model line includes 'gets weaker further away', but her own line is marked only on the 'region' point. The model answer and the marking do not match. | fixed |
| F12 | new | 2.6 | The feedback is stilted and redundant: 'makes the point' is followed at once by 'You have this:'. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F13 | new | 3.1 | This is loose physics. It suggests gravity drives the Moon along its path, when gravity only pulls it inwards and bends the path. | fixed |
| F14 | F5 | 3.2 | Two new terms (satellite, natural satellite) arrive in one message, and a third (artificial satellite) follows in the next. | fixed |
| F15 | L3 | 3.6b | This is written as a reminder of things she is assumed to know. It also arrives abruptly between centripetal force and the next question, with no link to either. | fixed in part: reworded as a link to the first forces lesson; recall of velocity stays |
| F16 | F5 | 3.6b | Two technical terms are defined in a single sentence. 'Any change in velocity' is also loose, since acceleration is the rate of change of velocity. | fixed |
| F17 | F8 | 3.7 | The message just before the question gave the definitions, and the right button carries the reason. She can pick it by matching words rather than thinking. | disputed: applying the definitions to an orbit is the question's purpose |
| F18 | new | 3.7 | The direction of the acceleration is asserted with no explanation. Acceleration in orbit is also not part of the lesson's key point. | fixed in part: the reason (gravity pulls it that way) is added; acceleration in a circle is spec 4.8.1.3 (HT) |
| F19 | F3 | 3.8 | 'Stable orbit' is used here, and again in quiz question 6, without being explained. | fixed |
| F20 | new | 3.8 | This is stated with no reason; the reason (weaker gravity further out) only comes in 3.9. 'Radius' is also slipped in within the same message. | fixed |
| F21 | new | 3.11 | The question is asked before 3.9, which is the message that explains higher satellites move more slowly and have further to go. She has not been given what she needs to reason it out. | fixed |
| F22 | new | 3.11 | The feedback relies on a fact she has not yet been taught and points forward to a later message. The steps are in the wrong order. | fixed |
| F23 | F8 | 3.11 don't know (first time) | The hint hands her both reasons, so the answer is obvious. It also states as known a fact (moves more slowly) that has not been taught yet. | fixed |
| F24 | new | 3.11 wrong answer (B, the lower one) | The correction rests on 'lower moves faster', which she has not been told and which is not explained here. | fixed |
| F25 | new | 3.11 wrong answer (They take the same time) | The correction again uses the untaught fact that higher satellites move more slowly, with no reason given. | fixed |
| F26 | F1 | 3.9 | By now every branch of 3.11 has already told her both of these facts, so the teaching message repeats them. | fixed |
| F27 | new | 3.12 | This is the same mechanical 'You have this: … You have this: …' feedback as before. It does not read like a teacher talking. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F28 | new | 3.15 | This is almost the worked example again (a bag on Earth with the same g). It tests copying more than understanding; a Moon or other-planet value would be better. | fixed |
| F29 | new | 3.19 wrong answer (Its speed stays the same) | 'Go together' is vague and could be read as 'both go up'. It should say plainly that a bigger radius needs a lower speed because gravity is weaker. | fixed |
| F30 | P14 | whole lesson | The only thing she handles in the whole lesson is this worked-example card. There is nothing to try, such as changing g or a satellite's height, and no pictures are mentioned for fields or orbits. | disputed: no hands-on widget or picture exists for P5 (no P5 diagrams yet; new widgets are shared code) |
| F31 | new | The end (summary) | The summary leaves out W = m g and its units, which is the one equation the lesson taught. | fixed |

## p5-elasticity (34 findings: 24 fixed, 1 fixed in part, 9 disputed; $0.6064)

| F | Fault | Step | Finding (reviewer, shortened) | Outcome |
|---|---|---|---|---|
| F1 | new | 1.1a | The lesson opens with a calculation that nothing in this lesson has told her how to do. If she has forgotten W = m g, her first experience is getting stuck. A line saying why weight matters here (it is the force on the s | disputed: labelled recall question from an earlier lesson ("two quick questions from earlier lessons"), the opening every scripted lesson uses |
| F2 | new | 1.1b | This recall question has nothing to do with springs and is never used again. It delays the start and cannot be answered from anything this lesson tells her. | disputed: labelled recall question from an earlier lesson ("two quick questions from earlier lessons"), the opening every scripted lesson uses |
| F3 | F5 | 1.2 | Three new ideas (stretch, compress, bend) arrive in one message. Compress gets no example, and neither compressing nor bending is ever practised with a question. | fixed in part: a compress example is added; practising bending is disputed (the spec asks for examples only) |
| F4 | new | 1.4 | The question comes before step 1.3, which teaches that a still object needs more than one force. She has not been told what she needs, and a first-time learner will naturally pick 'Only the masses pulling down'. | fixed |
| F5 | new | 1.4 | 'The still spring' reads oddly, and 'still' can be taken as 'yet'. 'A spring that is not moving' would be clearer. | fixed |
| F6 | F1 | 1.3 | This repeats what every reply to 1.4 has just told her (two forces; one force alone would just move the spring). The teaching and the question are in the wrong order. | fixed |
| F7 | F2 | 1.6 | The bubble opens with 'Others', whose referent (objects) is in the previous message. It does not stand on its own. | fixed |
| F8 | P4 | 1.5 / 1.6 | This makes elastic or inelastic sound like a kind of object. The key point says the same spring is elastic if not stretched too far and inelastic if stretched too far, and the script never tells her that, so she may thin | fixed |
| F9 | new | 1.8 | The praise reads like a marking scheme, with 'You have this:' twice in a row. A teacher would just say 'Yes' and confirm the idea once. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F10 | new | 2.3 | You hang masses or weights, not 'force'. It is loose wording at the moment the key rule is introduced. | fixed |
| F11 | M1 | 2.4 to 2.7 | Four tell-and-Next messages run in a row (limit of proportionality, spring constant, equation, worked example) with no question. Neither the limit nor the meaning of 'stiff' is checked before the equation arrives, and sh | disputed: length and order follow the lesson file's key points; nothing hands-on exists to break up the runs (see P14) |
| F12 | F2 | 2.6 | 'Them' has no referent in this message. She has to remember from earlier bubbles that it means force, spring constant and extension. | fixed |
| F13 | P6 | 2.6 | The equation, three symbols and three units come in one bubble. 'Newtons per metre' is new and is not explained as newtons needed for each metre of stretch. | fixed |
| F14 | new | 2.8 | Her first practice adds a unit conversion the worked example never showed, plus dividing by 0.03. Every extension so far has been in cm with no warning that the equation needs metres. A like-for-like question should come | disputed: the conversion is signposted in the question (100 cm = 1 m) |
| F15 | F2 | 2.9 | 'The same equation' is not named in the message. Say F = k e. | fixed |
| F16 | new | 2.10 | The only point checked is 'Force = spring constant × extension', which is just the equation read aloud. A good answer such as 'extension is proportional to force' or 'a stiffer spring needs more force' would be marked as | fixed |
| F17 | F1 | 2.11 | The same sentence has already appeared at 2.1 and in the replies to 2.2. It comes again here, in 3.2 and in 4.10. | fixed |
| F18 | new | 3.2 | The same two lengths are called 'first length', 'original length', 'stretched length' and now 'new length' in different steps. A beginner may think these are different things. | fixed |
| F19 | P6 | 3.2 | Two separate ideas share one bubble: how to get the force and how to get the extension. | fixed |
| F20 | new | 3.3 | Nothing has taught her how to read the ruler before she is asked. The wrong-answer replies only say the reading is 'wrong' without saying why (the mark you see on the ruler shifts when you look at an angle). | fixed |
| F21 | F2 | 3.4 | The bubble opens with 'Then', depending on the earlier messages. It also puts a second idea, the origin, in the same message. | fixed |
| F22 | F3 | 3.6 "The spring has got stiffer" | This relies on steepness meaning spring constant, which is not taught until 3.7. She cannot follow why stiffer means steeper yet. | fixed |
| F23 | new | 3.6 "No more force is being added" | The wording is muddled. Force is up the side, so 'going up along the graph' is unclear and does not really say why her choice was wrong. | fixed |
| F24 | F3 | 3.7 | 'Gradient' is used without saying it means how steep the line is. The sentence also leaves it unclear whether the part after the colon defines the gradient or the spring constant. | fixed |
| F25 | new | 3.8 don't know | 3.7 said 'change in', and now it is 'rise in'. Extension is along the bottom, so 'rise in extension' is confusing. | fixed |
| F26 | new | 3.9 | The question is vague and only one point is accepted. A sound answer about the gradient being the spring constant, or the curve showing the limit, would be marked as missing the point, though the don't-know model line in | fixed |
| F27 | F5 | 4.1 | 'Work' in its physics sense is used without being explained or linked to energy. A second new term, elastic potential energy, comes in the same bubble, and the step from work to energy stored is not made. | fixed |
| F28 | new | 4.2 | 'Not inelastically deformed' is a double negative a 15-year-old will stumble on. She has also never been told that a spring can be inelastically deformed. | fixed |
| F29 | P4 | 4.3 | The key point says this equation only works up to the limit of proportionality. The script leaves that condition out. | fixed |
| F30 | new | 4.7 | This is the same marking-scheme style of praise as in 1.8, with 'You have this:' twice. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F31 | new | 4.10 | The answer is 6 cm again, as it was in 2.2 and in 2.3b. She can get it right from memory rather than by subtracting. | fixed |
| F32 | new | whole lesson | Every wrong answer in the lesson opens with 'Not quite:' and every right one with 'Yes:'. Over about twenty questions it feels mechanical. | disputed: "Yes:" and "Not quite:" openers are the house style of every scripted lesson |
| F33 | P14 | whole lesson | Nothing in the script is hands-on. The practical is only described, with no spring to load, no readings to take and no graph to plot or watch curve, in a topic that is ideal for it. | disputed: no hands-on widget or picture exists for P5 (no P5 diagrams yet; new widgets are shared code) |
| F34 | new | Summary, point 3 of 4 | The summary lines are the long 'good line' sentences reused word for word. Each packs two or three ideas into one sentence, which is hard to take in as a final recap. | disputed: summary lines are the key points' model lines by design (shared summary code) |

## p5-moments (28 findings: 22 fixed, 0 fixed in part, 6 disputed; $0.5494)

| F | Fault | Step | Finding (reviewer, shortened) | Outcome |
|---|---|---|---|---|
| F1 | L3 | 1.1a | The lesson opens with a calculation from another lesson. A first-time learner who knows only this lesson has never been told what a spring constant is, so her first experience is a question she cannot do. | disputed: labelled recall question from an earlier lesson ("two quick questions from earlier lessons"), the opening every scripted lesson uses |
| F2 | F10 | 1.1a right answer | k, F and e are used without saying what each stands for. Only the don't-know branch names them. | fixed |
| F3 | F3 | 1.1b | "Deformation", "inelastic", "elastic" and "compression" are all used in the question and its buttons without being explained anywhere in this lesson. | disputed: labelled recall question from an earlier lesson ("two quick questions from earlier lessons"), the opening every scripted lesson uses |
| F4 | F7 | 1.1b don't know (first time) | This is the same question in other words, not an easier step. It still depends on her knowing the terms. | fixed |
| F5 | new | 1.6 | The wording is muddled: the distance is at right angles to the line of the force, not "at right angles from the pivot". With no picture, a 15-year-old will not be able to see what "the line the force acts along" means. | fixed |
| F6 | new | 1.6b | "Pushed straight on" is vague (it means at right angles to the door) and "the distance from the hinge" does not say to where. That a slanted push shortens the distance is asserted with no picture or reason. | fixed |
| F7 | new | 1.8 | She has not been told that the nut is the pivot for a spanner. That is first said in a wrong-answer reply at 3.14. | fixed |
| F8 | new | 1.9 | The two wrong options say the same thing and the right one is the odd one out and the longest, so she can pick it without thinking about M = F d. | fixed |
| F9 | P4 | 1.10 | Key point 1 also says a bigger force gives a bigger moment. That is never told or asked before the key point closes; only the distance half is covered. | fixed |
| F10 | new | 1.10 | Stilted feedback that reads like a marking scheme, not a teacher. The same wording comes back at 2.7. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F11 | F5 | 2.1 | Two new terms arrive in one message. Both are explained, so it is a small point. | disputed: both terms are explained in the same message, as a natural pair |
| F12 | new | 2.2 | "Total" is never explained (adding the moments when there is more than one force on a side) and never practised. It is also a long, dense sentence to meet cold. | fixed |
| F13 | P6 | 2.2b | Three ideas in one message: what weight is (tucked into an aside), that it pushes the side down, and which side turns which way. The last needs a picture to follow. | fixed |
| F14 | F1 | 2.3 | The same instruction is given word for word at 1.7, 2.3 and 3.3. She needs it once. | disputed: the worked-example introduction is the shared standard wording |
| F15 | new | 2.4 wrong answer 3.33 | The reply is identical to the one for "2" and does not tell her what she did wrong, which was to multiply by the wrong weight and divide by the other. | fixed |
| F16 | new | 2.6 | "Weight" is now used for an object, just after being defined as a force, and "a force, hung" is odd wording. This is also the first time she must find a force rather than a distance, with no example of that. | fixed |
| F17 | F2 | 3.2b | "That same moment" refers to the previous message; nothing in this message says which moment is meant. | fixed |
| F18 | new | 3.3 | F stands for her 50 N push in one step and for the unknown force on the load in the next. A beginner may read it as the same F. | fixed |
| F19 | P16 | 3.6 | "And it turns more slowly" is tacked on with no reason, so it reads as if the bigger moment causes the slower turning. The message also carries three ideas at once and never says the gear's centre is its pivot. | fixed |
| F20 | P7 | 3.7 don't know (first time) | The real reason for the speed difference appears for the first time in a hint that only some learners see. It is a new idea, not an easier step, and it should have been taught at 3.6. | fixed |
| F21 | new | 3.8 don't know | The question was only about levers, but the model line starts with gears. It also does not match the two points she is marked against, and has two colons in one sentence. | fixed |
| F22 | new | 3.8 all of them | "You have this:" twice in a row reads like a machine. "In one line" also asks for two separate points, which is a lot for one line. | fixed |
| F23 | new | 3.9 | The quiz has no balanced-moment calculation and nothing on levers, so it is not the whole lesson. The hardest ideas go untested. | fixed |
| F24 | new | 3.12 | No "force arrow" has been mentioned or shown in the lesson. Both wrong options also get exactly the same reply, so neither says why her choice was wrong. | fixed |
| F25 | F1 | 3.15 | This is the same question, with the same stem, as 3.7 only eight steps earlier. It tests memory of that answer, not understanding. | fixed |
| F26 | new | 3.15 don't know (first time) | The hint only helps with direction. It gives nothing on faster or slower, which is the other half of every option. | fixed |
| F27 | new | Summary, point 3 of 3 | Gears are named and then nothing is said about them, so the summary leaves out what she learned about big and small gears. | fixed |
| F28 | P14 | whole script | There is nothing hands-on and no picture is mentioned anywhere: no see-saw to balance, no spanner to lengthen, no gears to turn. Perpendicular distance, clockwise and anticlockwise, and gears all need a diagram, and she  | disputed: no hands-on widget or picture exists for P5 (no P5 diagrams yet; new widgets are shared code) |

## p5-fluid-pressure (28 findings: 19 fixed, 0 fixed in part, 9 disputed; $0.5949)

| F | Fault | Step | Finding (reviewer, shortened) | Outcome |
|---|---|---|---|---|
| F1 | L3 | 1.1a | The lesson opens by testing moments, which this lesson has not taught and never uses. A first-time learner cannot answer it from anything she has been told, and it has nothing to do with pressure. | disputed: labelled recall question from an earlier lesson ("two quick questions from earlier lessons"), the opening every scripted lesson uses |
| F2 | F3 | 1.1a | "Pivot" and "moment" are used with no explanation anywhere in the lesson. | disputed: labelled recall question from an earlier lesson ("two quick questions from earlier lessons"), the opening every scripted lesson uses |
| F3 | F3 | 1.1b | She is asked to calculate density here, but the lesson only says what density is at 2.2. The term is used, and tested, before it is explained. | disputed: density is recalled from p3-density (labelled recall); the hint gives the formula |
| F4 | P6 | 1.3 | Three ideas in one message: particles hitting surfaces, the push being at right angles, and the new word "normal". These should be separate steps. | fixed |
| F5 | new | 1.7 | Her first practice question is harder than the worked example. She must first work out an area from two lengths, a step the example never showed. | fixed |
| F6 | new | 1.7 any other wrong answer | A wrong answer is met with the full answer straight away, with no hint and no second try. The same happens on the other number questions (2.5, 2.6), so she never has to correct her own slip. | disputed: the engine answers a wrong typed number with the working (shared code) |
| F7 | new | 1.10 none | The reply ignores whatever she wrote. If her line was half right or held a wrong idea, she is not told which part was wrong. The same reply is used at 2.8, 3.7 and 4.5. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F8 | new | 1.10 all of them | Stilted stock wording, used identically on all four own-words steps (1.10, 2.8, 3.7, 4.5). "You have this:" followed by the model sentence reads oddly. | disputed: the shared own-words feedback template in js/teach-script.js ("You have this: …"), not script text (ESCALATIONS) |
| F9 | F3 | 2.3 | "Gravitational field strength" and the symbol ρ both appear here unexplained. The meaning ("gravity's pull on each kilogram") only comes in the next message. | fixed |
| F10 | P6 | 2.3b | Three symbols, three units, a new Greek letter and an exam note packed into one message. It also never says p is in pascals here. | fixed |
| F11 | new | 2.7 | The script shows no picture and does not describe the shapes, yet the options are "widest" and "narrowest". She has to imagine the containers herself. | fixed |
| F12 | new | 2.7 "In the widest one" | This argument only works for straight-sided containers. For containers of different shapes the weight of water is not in proportion to the area of the bottom, so the reason given is not sound physics. | fixed |
| F13 | new | 2.7 "In the narrowest one" | The same imprecise argument: it only holds for straight sides, not for "different shapes". Better to say that only the height of water above the point matters. | fixed |
| F14 | F3 | 3.3 right | "Resultant force" has not been explained. The later message 3.2 says "overall force" instead, so she meets the technical term first, with no meaning given. | fixed |
| F15 | F3 | 3.3 still doesn't know | "Resultant force" is used again unexplained, this time to a girl who has already said twice that she does not know. | fixed |
| F16 | new | 3.3 don't know (first time) | The hint asks a new question (top or bottom?) but shows the original three buttons, none of which answers it. | fixed |
| F17 | F1 | 3.1 | This repeats what the reply to 3.3 has just told her about the brick. "Now think of an object under water" also reads as if the brick had never been mentioned. | fixed |
| F18 | P6 | 3.4 | Three ideas in one message. The first is stated with no reason: she is not told why more of the object under water gives more upthrust. | fixed |
| F19 | new | 3.6 | Nothing so far has linked floating to density, so she cannot answer from what she has been told; that link is only taught afterwards in 3.5. The right button is also the only one that sounds like physics, so she can pick | disputed: a prediction question; density is taught at 2.2 and the reply explains |
| F20 | new | 3.5 | This is asserted, not explained, and "gets enough upthrust before it is fully under" is hard for a 15-year-old to follow. "Floating links to density" also just repeats the reply to 3.6. | fixed |
| F21 | F12 | 4.4 | The right option contains the explanation ("there is less air above"), which the lesson then teaches in 4.3 and asks her to give in 4.5. The buttons hand her the reason. | fixed |
| F22 | F1 | 4.3 | This repeats the reply she has just had to 4.4 ("less air above means less weight of air, so lower pressure"). | fixed |
| F23 | F8 | 4.5 | The answer has been given three times just before it: in the 4.4 button, in the 4.4 reply and in 4.3. She only has to copy it out. | disputed: an own-words line after the teaching is the lesson design |
| F24 | new | 4.3b | "Thinner" here means less dense, but 4.1 and quiz question 6 use "thin" for a layer that is not very deep. One word with two meanings in the same key point will muddle her. | fixed |
| F25 | new | 4.2 | The lesson gives two accounts of pressure and never connects them: molecules hitting surfaces (1.3, 4.2) and the weight of fluid above (2.1, 4.3). She may fairly ask which one it is. | fixed |
| F26 | new | 4.11 | "Solid" is confusing just after she was told a hollow steel ship floats. It is not clear whether it means "not hollow" or "not a liquid", and it is not needed. | fixed |
| F27 | new | 4.6 | The quiz does not cover the whole lesson. There is no p = h ρ g calculation, nothing on upthrust, and the only atmosphere question asks whether it is thin, not that pressure falls with height. | fixed |
| F28 | P14 | whole lesson | The script has nothing hands-on and shows no pictures: no diagram of the column of water, the three containers or the brick. It is all text and buttons, which is hard going for a first-time learner on a very visual topic | disputed: no hands-on widget or picture exists for P5 (no P5 diagrams yet; new widgets are shared code) |

