# Site test: p5-elasticity (lesson, 2026-11-28)

**PASS** · cost $0.0405 (32 tool calls, 22 calls from the site; tutor claude-sonnet-5-5 $0.0121)

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

    Lesson p5-elasticity (Physics › Forces › Forces and elasticity — stretching springs).
    [screenshot 01-home-laptop.png] home
    [screenshot 02-subjects-laptop.png] subjects
    [screenshot 03-topics-physics-laptop.png] topics-physics
    [screenshot 04-lessons-p5-laptop.png] lessons-P5
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Welcome! This lesson is about stretching, squashing and bending things, and the energy a stretched spring stores.
    [screenshot 05-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (tapped "Next")
    T1: First, two quick questions from the last lesson. What is the weight of a 0.5 kg mass where g = 9.8 N/kg?
    [side picture after T1: none; newest in the chat: none]
    S2 (idk): idk
    T2: Weight = mass × g, where g is gravity's pull on each kilogram: here 9.8 N/kg.
      [T2 easier step]
    S3 (idk): dont know
    T3: Second: which force keeps a satellite in its orbit?
    [screenshot 06-exchange-3-laptop.png] exchange-3
      [T3 shown first: No problem. W = m g = 0.5 × 9.8 = 4.9 N.]
    S4 (idk): idk
    T4: Which force pulls the satellite towards the Earth?
      [T4 easier step]
    S5 (try, tapped the button): gravity
    T5: Now this lesson. Forces can change the shape of an object. You can stretch it, as when you pull a spring; compress it, which means squash it, as when you sit on a cushion; or bend it, as a diver bends a diving board.
      [T5 shown first: Yes: gravity pulls the satellite towards the Earth and keeps it going round.]
    S6 (tapped "Next")
    T6: A still object needs more than one force on it before its shape can change. With only one force it would not stay still: it would move off in the direction of the force.
    [screenshot 07-exchange-6-laptop.png] exchange-6
    S7 (tapped "Next")
    T7: A spring hangs from a clamp with masses on the end, and it is stretched. Which forces stretch it?
    S8 (try): masses pulling down and the clamp pulling up
    T8: Some objects go back to their first shape and length when the forces are removed. That kind of change of shape is called elastic deformation.
      [T8 shown first: Yes: it takes two forces, one at each end, to stretch a spring that is not moving.]
    S9 (tapped "Next")
    T9: Other objects stay changed when the forces are removed: that is called inelastic deformation. The same spring can do both: elastic when stretched a little, inelastic when stretched too far.
    [screenshot 08-exchange-9-laptop.png] exchange-9
    S10 (tapped "Next")
    T10: A plastic bag is stretched so much that it stays longer, even after you let go. What kind of deformation is that?
    S11 (try, tapped the button): inelastic deformation
    T11: In one line: what is the difference between elastic and inelastic deformation?
      [T11 shown first: Yes: it does not go back to its first shape, so it is inelastic deformation.]
    S12 (what): wdym
    T12: Now, the question again: In one line: what is the difference between elastic and inelastic deformation?
    [screenshot 09-exchange-12-laptop.png] exchange-12
      [T12 shown first: Elastic and inelastic deformation are two different things that can happen to an object after forces change its shape. The question wants you to say, in one short sentence, what is different about the object once the forces have been taken away.]
    S13 (try): elastic goes back inelastic stays changed
    T13: When you stretch a spring, it gets longer. How much longer it gets is called the extension: stretched length minus original length.
    [counter now "1/4 covered" after T13; AI calls from the site so far: 6, $0.0029]
      [T13 shown first: Yes: your line makes every point. You have this: After elastic deformation, an object goes back to its first shape. You have this: After inelastic deformation, it stays changed.]
    S14 (tapped "Next")
    T14: A spring is 20 cm long. With a mass hung on it, it is 26 cm long. What is the extension, in cm?
    S15 (try): 6 cm
    T15: Hang twice the weight on a spring and you get twice the extension. Extension is directly proportional to force.
    [screenshot 10-exchange-15-laptop.png] exchange-15
      [T15 shown first: Yes: 26 − 20 = 6 cm.]
    S16 (tapped "Next")
    T16: A spring stretches 2 cm with a force of 1 N. If it stays proportional, how far does it stretch with a force of 3 N, in cm?
    S17 (try): 6 cm
    T17: Proportionality holds only up to a point. Stretched further, the spring stops following the rule. The point where it stops is called the limit of proportionality.
      [T17 shown first: Yes: three times the force gives three times the extension: 3 × 2 = 6 cm.]
    S18 (tapped "Next")
    T18: Each spring has its own spring constant, k: how stiff it is. A stiff spring has a big spring constant: it needs a big force to stretch it a little.
    [screenshot 11-exchange-18-laptop.png] exchange-18
    S19 (tapped "Next")
    T19: The equation linking force, spring constant and extension is F = k e. F is in newtons (N) and e in metres (m). k is in newtons per metre (N/m): the force needed for each metre of extension.
    S20 (tapped "Next")
    T20: Here is a worked example. Tap "Show the first step" under it to see each step in turn.
    [side picture after T20: none; newest in the chat: worked or question card]
    [worked example under T20: buttons seen Show the first step → Next step → Next step → Next step; after the last step: Next]
    [screenshot 12-worked-20-laptop.png] worked-20
    S21 (tapped "Next")
    T21: Your turn. A force of 6 N stretches a spring by 3 cm. What is its spring constant, in N/m? (100 cm = 1 m.)
    [screenshot 13-exchange-21-laptop.png] exchange-21
    S22 (try): 200 n/m
    T22: F = k e also works for squashing. Then e is how much shorter the object gets, called its compression.
      [T22 shown first: Yes: 3 cm = 0.03 m, and k = 6 ÷ 0.03 = 200 N/m.]
    S23 (tapped "Next")
    T23: In one line: what does F = k e tell you about a spring?
    S24 (try): force equals spring constant times extention
    T24: Before a practical with springs: to find a spring's extension, what must you measure?
    [screenshot 14-exchange-24-laptop.png] exchange-24
    [counter now "2/4 covered" after T24; AI calls from the site so far: 9, $0.0033]
      [T24 shown first: Yes: your line makes the point. You have this: The extension is proportional to the force.]
    S25 (idk): not sure
    T25: Extension = stretched length − original length.
      [T25 easier step]
    S26 (try): original and stretched length
    T26: In a class practical, you hang a spring from a clamp with a ruler beside it. You measure its original length, then add masses one at a time and measure the stretched length each time.
      [T26 shown first: Yes: extension = stretched length − original length, so you need both.]
    S27 (tapped "Next")
    T27: The force on the spring is the weight of the hanging masses: W = m g, weight (N) = mass (kg) × g (N/kg).
    [screenshot 15-exchange-27-laptop.png] exchange-27
    S28 (tapped "Next")
    T28: How should you read the ruler to measure the spring's length accurately?
    S29 (try): eye level with bottom
    T29: The results go on a graph, with force up the side and extension along the bottom.
      [T29 shown first: Yes: with your eye level with the bottom of the spring, you do not read the ruler too high or too low.]
    S30 (tapped "Next")
    T30: The origin is the corner of the graph where both force and extension are zero.
    [screenshot 16-exchange-30-laptop.png] exchange-30
    S31 (tapped "Next")
    T31: A graph that is a straight line shows a linear relationship. For a spring the line also goes through the origin, so force and extension are directly proportional.
    S32 (tapped "Next")
    T32: On a force-extension graph, the line is straight at first, then starts to curve. What do you think the curve shows?
    S33 (idk): idk
    T33: Up to which point is extension proportional to force?
    [screenshot 17-exchange-33-laptop.png] exchange-33
      [T33 easier step]
    S34 (try): the limit of proportonality has been passed
    T34: A relationship with a curved graph is called a non-linear relationship.
      [T34 shown first: Yes: after the limit of proportionality, extension is no longer proportional to force, so the line curves.]
    S35 (tapped "Next")
    T35: The gradient is how steep the line is. On the straight part, the gradient of the force-extension graph is the spring constant: the change in force ÷ the change in extension.
    S36 (tapped "Next")
    T36: Between two points on the straight part, the force goes up by 10 N and the extension by 0.25 m. What is the spring constant, in N/m?
    [screenshot 18-exchange-36-laptop.png] exchange-36
    S37 (try): 40 n/m
    T37: In one line: what does a straight line through the origin on a force-extension graph show?
      [T37 shown first: Yes: 10 ÷ 0.25 = 40 N/m.]
    [side picture after T37: none; newest in the chat: none]
    S38 (try): force and extention proportional
    T38: When a force moves something, it does work: it transfers energy. Stretching a spring takes work, because your force moves through a distance.
    [counter now "3/4 covered" after T38; AI calls from the site so far: 18, $0.0047]
      [T38 shown first: Yes: your line makes the point. You have this: It shows that force and extension are directly proportional.]
    S39 (tapped "Next")
    T39: Energy stored in a stretched or squashed object is called elastic potential energy.
    [screenshot 19-exchange-39-laptop.png] exchange-39
    S40 (tapped "Next")
    T40: If the spring goes back to its original shape afterwards, all the work done on it is stored. Let go, and it can give that energy back.
    S41 (tapped "Next")
    T41: The equation is Ee = ½ k e²: elastic potential energy = 0.5 × spring constant × extension squared. Ee is in joules (J), k in N/m and e in metres (m). It works up to the limit of proportionality.
    S42 (tapped "Next")
    T42: Here is a worked example. Tap "Show the first step" under it to see each step in turn.
    [screenshot 20-exchange-42-laptop.png] exchange-42
    [side picture after T42: none; newest in the chat: worked or question card]
    [worked example under T42: buttons seen Show the first step → Next step → Next step → Next step; after the last step: Next]
    [screenshot 21-worked-42-laptop.png] worked-42
    S43 (tapped "Next")
    T43: Your turn. A spring with k = 200 N/m is stretched by 0.1 m. How much elastic potential energy does it store, in J?
    S44 (try): 1 j
    T44: A spring with k = 400 N/m is stretched by 5 cm. How much energy does it store, in J?
      [T44 shown first: Yes: 0.1² = 0.01, and 0.5 × 200 × 0.01 = 1 J.]
    S45 (try): 0.5 j
    T45: In one line: what is elastic potential energy, and how do you work it out?
    [screenshot 22-exchange-45-laptop.png] exchange-45
      [T45 shown first: Yes: 5 cm = 0.05 m, 0.05² = 0.0025, and 0.5 × 400 × 0.0025 = 0.5 J.]
    S46 (idk): idk
    T46: Now for a short quiz: six questions on the whole lesson. Take your time.
      [T46 shown first: A good line would be: elastic potential energy is the energy stored in a stretched or squashed object: Ee = ½ k e².]
    S47 (tapped "Next")
    T47: Quiz, question 1 of 6: a spring goes back to its first length when the masses are taken off. What kind of deformation was it?
    S48 (what): wdym
    T48: Have a go at the question: Quiz, question 1 of 6: a spring goes back to its first length when the masses are taken off. What kind of deformation was it?
    [screenshot 23-exchange-48-laptop.png] exchange-48
      [T48 shown first: The quiz is asking about a spring that has been pulled by masses and then comes back to the length it started at once the masses are taken off. It wants the name for that kind of change in shape, and there are two names in the lesson, one for springs that return and one for springs that stay stretched.]
    S49 (try, tapped the button): elastic
    T49: Quiz, question 2 of 6: a spring 15 cm long is stretched to 23 cm. What is its extension?
      [T49 shown first: Yes: it went back to its first shape, so the deformation was elastic.]
    S50 (try, tapped the button): 8 cm
    T50: Quiz, question 3 of 6: a force of 10 N gives an extension of 0.5 m. What is the spring constant?
      [T50 shown first: Yes: 23 − 15 = 8 cm.]
    S51 (try, tapped the button): 20 n/m
    T51: Quiz, question 4 of 6: what does the gradient of the straight part of a force-extension graph give?
    [screenshot 24-exchange-51-laptop.png] exchange-51
      [T51 shown first: Yes: k = 10 ÷ 0.5 = 20 N/m.]
    S52 (try, tapped the button): the spring constant
    T52: Quiz, question 5 of 6: what does a graph of a non-linear relationship look like?
      [T52 shown first: Yes: force ÷ extension is the spring constant.]
    S53 (try, tapped the button): A curve
    T53: Quiz, question 6 of 6: a spring with k = 100 N/m is stretched by 0.2 m. How much energy does it store?
      [T53 shown first: Yes: a non-linear relationship gives a curve.]
    S54 (what): what?
    T54: Back to the question: Quiz, question 6 of 6: a spring with k = 100 N/m is stretched by 0.2 m. How much energy does it store?
    [screenshot 25-exchange-54-laptop.png] exchange-54
      [T54 shown first: A spring stores energy when you stretch it, and this question asks you to work out how much. You are told the spring is stiff by a number, k = 100 N/m, and that it gets 0. 2 m longer. Use the elastic potential energy equation, Ee = ½ke², to find the energy in joules.]
    S55 (try, tapped the button): 2 j
    T55: That's the end of the quiz: you got 6 out of 6.
      [T55 shown first: Yes: 0.5 × 100 × 0.2² = 0.5 × 100 × 0.04 = 2 J.]
    S56 (tapped "Next")
    T56: The lesson is finished. Tap a button to go on.
      [T56 shown first: Summary, point 1 of 4: After elastic deformation an object goes back to its first shape, but after inelastic deformation it stays changed.]
      [T56 shown first: Summary, point 2 of 4: For a spring, force = spring constant × extension, so the extension is proportional to the force up to the limit of proportionality.]
      [T56 shown first: Summary, point 3 of 4: A straight line through the origin on a force-extension graph shows that force and extension are directly proportional; its gradient is the spring constant.]
      [T56 shown first: Summary, point 4 of 4: Elastic potential energy is the energy stored in a stretched or squashed object: Ee = ½ k e².]
    [counter now "4/4 covered" after T56; AI calls from the site so far: 22, $0.0125]
    [side picture after T56: none; newest in the chat: none]
    S57 (closing): thx
    T57: You're welcome. Tap "Go to the slides" or "Home" when you are ready.
    [screenshot 26-exchange-57-laptop.png] exchange-57
    S58 (closing, tapped the button): go to the slides
    [S58 left the lesson: the page is no longer the AI lesson (a button such as Home or the slides)]
    [screenshot 27-end-laptop.png] end
    [tutor-side time: 0.6 minutes over 57 exchanges]
