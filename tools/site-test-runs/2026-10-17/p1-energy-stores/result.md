# Site test: p1-energy-stores (lesson, 2026-10-17)

**FAIL** · cost $0.4660 (29 tool calls, 50 calls from the site; tutor claude-sonnet-5-5 $0.2640)

## Judge

```json
{
  "broken": [
    {
      "what": "A correct answer was marked wrong. The student said heat 'spreads everywhere randomly so u cant use it'. The tutor gave no credit and then stated the same idea as 'the answer'.",
      "step": "S15/T15"
    },
    {
      "what": "The student answered 'light obviously lol', which is correct. The tutor ignored it and fired the 'Do you want me to just tell you the rest' check-in. The answer was only confirmed after she said no.",
      "step": "S17/T17"
    },
    {
      "what": "The student answered '15%', which is correct. Again the tutor gave no feedback and replaced it with the check-in. Confirmation only came at T25.",
      "step": "S24/T24"
    },
    {
      "what": "The end-of-lesson score line is garbled: 'You got 15% right for 0.' The template is mixing the efficiency value into the score sentence.",
      "step": "T27"
    },
    {
      "what": "The number is formatted with a stray space: '20 ÷ 50 is 0. 4' instead of '0.4'.",
      "step": "T27"
    },
    {
      "what": "The lesson ends straight after a wrong final answer (2.5) with no retry. Progress still shows 5/5 covered.",
      "step": "S27/T27"
    },
    {
      "what": "After 'yeah go on', the tutor says 'Quick rest:' and dumps the Ek, Ep and Ee equations, which belong to the next lesson. It does not finish the energy-stores point, and only 3 of 8 stores were ever named in chat.",
      "step": "T5"
    },
    {
      "what": "A vague answer was accepted as 'mechanical transfer' even though the student never named a pathway.",
      "step": "S6/T6"
    },
    {
      "what": "The question is garbled and does not make sense.",
      "step": "T15 'What is the wasted energy in a lightbulb meant to give light?'"
    },
    {
      "what": "The car-engine question was repeated after the bored reply. The student had already given 'heat warming stuff up' / 'thermal store of surroundings' at S14/T14.",
      "step": "T18/T19"
    }
  ],
  "looks_wrong": [
    {
      "what": "The tutor message shows '0. 4' with a stray space and the nonsense line 'You got 15% right for 0.'",
      "screenshot": "14-exchange-27-laptop.png",
      "stops_use": false
    },
    {
      "what": "The '← Home' button and the 'What are you revising?' heading are cut off under the sticky top bar.",
      "screenshot": "02-subjects-phone.png",
      "stops_use": false
    },
    {
      "what": "Key Terms panel text is clipped at the bottom: 'calculated using Ek = ½mv²' is cut mid-line.",
      "screenshot": "07-exchange-6-laptop.png",
      "stops_use": false
    },
    {
      "what": "The 'Lesson finished' message and the Topics / Ask something else buttons are not visible. The chat ends with no next action on screen.",
      "screenshot": "15-end-phone.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "S19",
    "quote": "huh? that was long",
    "why": "Her correct answer at S15 got no credit. Her correct answer at S17 was ignored for a check-in. Then she got another long block repeating the car-engine question. That is the fourth 'too long' complaint."
  },
  "fixes": [
    {
      "target": "answer grading for open/explanation questions",
      "change": "Mark paraphrases of the target idea as correct (e.g. 'spreads out so can't use it' = dissipated, hard to use) and say 'Yes' before adding detail."
    },
    {
      "target": "check-in trigger ('Do you want me to just tell you the rest')",
      "change": "Never send the check-in in place of feedback. First confirm or correct the student's answer in the same turn, then ask the check-in if needed."
    },
    {
      "target": "end-of-lesson summary template and number formatting",
      "change": "Use 'You got X of Y questions right' from the actual tally, never interpolating answer values. Strip spaces inside decimals ('0.4')."
    },
    {
      "target": "final question / lesson completion",
      "change": "After a wrong final answer, give one hint and one retry before ending. Do not mark the section covered until it is answered correctly or explicitly revealed."
    },
    {
      "target": "checkin-yes behaviour and turn length",
      "change": "On 'yeah go on', summarise the rest of the current section in 2 short sentences with no next-lesson formulas, and remove the 'Quick rest:' phrasing. Cap tutor turns at about 35 words after any 'too long' signal for the rest of the lesson."
    }
  ]
}
```

## Transcript

    Lesson p1-energy-stores (Physics › Energy › Energy stores and transfers — what energy actually is).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    [screenshot 02-subjects-phone.png and 02-subjects-laptop.png] subjects
    [screenshot 03-topics-physics-phone.png and 03-topics-physics-laptop.png] topics-physics
    [screenshot 04-lessons-p1-phone.png and 04-lessons-p1-laptop.png] lessons-P1
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Welcome! Energy is involved every time you move, eat or switch on a light, and a good place to start is that energy can be held, or "stored", in different ways, and there are eight of these energy stores. Which store would a book sitting high on a shelf have?
    [screenshot 05-ai-lesson-opening-phone.png and 05-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (minimal): what?
    T1: Let me say it more simply. An "energy store" is just a way energy can be held, like a book high on a shelf holds energy because of its height. That's called the gravitational potential energy store. If the book falls off, which energy store does it gain as it speeds up?
    S2 (try): kinetic energy store?
    T2: Yes, kinetic is the store it gains as it speeds up. Kinetic energy belongs to any moving object, like a kicked ball or a running person, and an object that isn't moving has none, however heavy it is. Which energy store would a parked car have, as far as movement goes?
    S3 (bored): this is too long
    T3: Fair enough, I'll keep it short. A parked car isn't moving, so its kinetic energy is zero, however heavy it is. What kinetic energy does a car have when it's driving along the road?
    [screenshot 06-exchange-3-phone.png and 06-exchange-3-laptop.png] exchange-3
    S4 (try): loads?
    T4: Loads is right, a moving car has lots of kinetic energy. Do you want me to just tell you the rest of this one?
    S5 (checkin-yes): yeah go on
    T5: Quick rest: a moving object's kinetic energy is Ek = ½mv² (in joules), height gives gravitational potential energy Ep = mgh, and a stretched or squashed spring has elastic energy Ee = ½ke². What pathway moves energy when you kick a football?
    S6 (try): like your leg to the ball?
    T6: Yes, your leg pushes the ball with a force, and that's mechanical transfer. What pathway moves energy when a current flows round a circuit to light a bulb?
    [screenshot 07-exchange-6-phone.png and 07-exchange-6-laptop.png] exchange-6
    S7 (try): electricity to the bulb i guess
    T7: The pathway is electrical transfer: energy moved by work done when a current flows in a circuit. So when a current flows round a circuit, energy is transferred electrically to the bulb. Which pathway moves energy when a hot cup of tea warms your hands?
    S8 (try): thermal transfer? heat from cup to hands
    T8: Yes, thermal transfer: energy is transferred by heating from the hotter cup to your cooler hands. Heating always flows from higher to lower temperature, by conduction or convection. If you put an ice cube in your hand, which way does the energy flow?
    S9 (try): from your hand to the ice cube
    T9: Hand to ice cube is right, since heating flows from hotter to cooler. Do you want me to just tell you the rest of this one?
    [screenshot 08-exchange-9-phone.png and 08-exchange-9-laptop.png] exchange-9
    S10 (checkin-yes): yeah go on then
    T10: Heating is energy moving from a hotter object to a cooler one by conduction or convection. Radiation is energy carried by electromagnetic waves, like light and infrared. So if a book falls off a table and its gravitational potential energy drops, what happens to that energy?
    S11 (try): turns into kinetic energy when it falls?
    T11: Kinetic energy is right: the gravitational potential energy becomes kinetic as the book falls. A closed system is one where no energy is transferred to or from the surroundings, so its total energy stays constant. If a closed system starts with 50 J of energy in total, how much does it have after the book has fallen?
    S12 (bored): this is too long mate
    T12: Fair enough, short version: in a closed system, no energy gets in or out, so the total never changes. If a closed system starts with 50 J in total, how many joules does it have at the end?
    [screenshot 09-exchange-12-phone.png and 09-exchange-12-laptop.png] exchange-12
    S13 (try): still 50 j right
    T13: Yes, 50 J, since nothing gets in or out. In real life, though, some energy always ends up somewhere useless, like heat warming the air round a car engine; that spreading out is called dissipation. So where does that wasted energy end up?
    S14 (try): goes into heat warming stuff up?
    T14: Yes, it's heat warming things up. To be exact, the wasted energy goes into the thermal store of the surroundings. So why is energy in that store less useful than the energy in the petrol was?
    S15 (wrong): cause heat just spreads everywhere randomly so u cant use it
    T15: The answer is that the energy gets so spread out into the surroundings that it's hard to use again. Wasted energy is any energy that goes to a store that isn't useful for what the device is meant to do. What is the wasted energy in a lightbulb meant to give light?
    [screenshot 10-exchange-15-phone.png and 10-exchange-15-laptop.png] exchange-15
    S16 (try): heat i guess? warms up the air
    T16: Yes, the heat warming the air is the wasted energy. So what is the lightbulb actually meant to give out, the useful energy it's for?
    S17 (try): light obviously lol
    T17: Do you want me to just tell you the rest of this one?
    S18 (checkin-no): nah im good
    T18: Light, yes. Wasted energy is the energy that goes into a store you don't want, so in the bulb it's the heat. That wasted energy isn't destroyed: it's dissipated into the thermal store of the surroundings. A car engine makes noise and heats its exhaust, so where does that wasted energy end up?
    [screenshot 11-exchange-18-phone.png and 11-exchange-18-laptop.png] exchange-18
    S19 (bored): huh? that was long
    T19: Sorry, that was a lot. Simply put: wasted energy is energy that ends up somewhere you didn't want it. In a car, the engine noise and hot exhaust are wasted, and they warm the air around it. So what is the car's wasted energy actually heating up?
    S20 (offtopic): the air i guess? anyway im starving lol
    T20: Yes, the air, and that heat is dissipated, which means spread out as wasted energy. When you're back: a Sankey diagram draws energy as arrows, with a wide input arrow on the left splitting into a useful output arrow and wasted arrows. In a diagram like that, what does the width of each arrow show?
    S21 (bored): this is long lol
    T21: Short version: in a Sankey diagram, a wider arrow means more energy. A lamp takes in 100 J and only 15 J comes out as light, so the light arrow is thin and the wasted arrow is wide. Which arrow is wider, the 15 J arrow or the 85 J one?
    [screenshot 12-exchange-21-phone.png and 12-exchange-21-laptop.png] exchange-21
    S22 (bored): the 85 one obviously
    T22: Yes, the 85 J one is wider, so you've got it. Efficiency is useful output divided by total input, so the lamp's is 15 ÷ 100. What decimal does that give?
    S23 (try): um like 0.15?
    T23: Yes, 0.15 is right. That's the efficiency of the lamp. Now turn it into a percentage: multiply by 100. What percentage efficiency does that give?
    S24 (try): 0.15 times 100 is like... 15%?
    T24: Do you want me to just tell you the rest of this one?
    [screenshot 13-exchange-24-phone.png and 13-exchange-24-laptop.png] exchange-24
    S25 (checkin-no): nah im good
    T25: Yes, 15% is right. Efficiency can never be more than 1 (or 100%), because a device can't give out more useful energy than it takes in; a perfect device would be exactly 1.0. A different lamp is supplied with 50 J and gives 20 J as light. What is its efficiency as a decimal?
    S26 (bored): huh?
    T26: No worries, here's the same idea more simply. Efficiency is just useful energy out divided by total energy in. For this lamp, the useful energy is the 20 J of light, and the total energy in is 50 J. What is 20 divided by 50?
    S27 (wrong): is it 2.5?
    T27: Not quite: 20 ÷ 50 is 0. 4, because the 20 J is the smaller number, so the answer must be less than 1. Efficiency is useful output divided by total input, and it always sits between 0 and 1 (or 0% and 100%). That's the end of this lesson. You got 15% right for 0.
    [screenshot 14-exchange-27-phone.png and 14-exchange-27-laptop.png] exchange-27
    S28 (closing): ok thanks
    T28: You're welcome. You worked through some tricky efficiency sums today, and it's good to keep practising dividing the smaller number by the larger. See you next time!
    [the lesson shows "Lesson finished."]
    [screenshot 15-end-phone.png and 15-end-laptop.png] end
