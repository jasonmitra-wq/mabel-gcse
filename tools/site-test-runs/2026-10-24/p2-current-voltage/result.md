# Site test: p2-current-voltage (lesson, 2026-10-24)

**FAIL** · cost $0.7135 (33 tool calls, 81 calls from the site; tutor claude-sonnet-5-5 $0.4843)

## Judge

```json
{
  "broken": [
    {
      "what": "After the student's goodbye, the tutor sent the T31 goodbye again word for word, so the screen shows two identical farewell messages. The test tool also logged no new reply within 120 s.",
      "step": "S32"
    },
    {
      "what": "A correct answer was never marked. The student said 1 × 4 = 4 coulombs, which is right, but the tutor did not say so. It explained what coulombs are and changed the question to the unit of current.",
      "step": "T20"
    },
    {
      "what": "Reasonable physics was marked wrong. 'More charge flow means the battery dies faster' is right: more charge flowing transfers more energy from the battery, so it goes flat sooner. The tutor said 'Not quite' and called the battery two or more cells, which is muddled.",
      "step": "S2/T2 and S4/T4"
    },
    {
      "what": "The tutor gave away answers instead of letting her try. The 2 × 5 answer came after an off-topic hunger message, and the 4 A × 5 s answer came straight after 'idk' with no hint.",
      "step": "T12, T17"
    },
    {
      "what": "Questions were repeated. 2 A for 5 s was asked at T9 and again at T23, 3 A for 2 s was answered at T19 then asked again at T22, and T23 states the 2 A, 5 s numbers without asking a question.",
      "step": "T22-T23"
    },
    {
      "what": "The lesson never moved on. After more than 10 correct Q = I t answers the progress stays at '0/7 covered', Key Terms stays empty and 'Electric current' is never completed.",
      "step": "T13-T30"
    },
    {
      "what": "automatic check failed: tutor replies",
      "step": "no reply after S32"
    }
  ],
  "looks_wrong": [
    {
      "what": "The identical goodbye message appears twice in a row at the end of the chat.",
      "screenshot": "17-end-phone.png",
      "stops_use": false
    },
    {
      "what": "The identical goodbye message appears twice, and a stray horizontal line from a clipped bubble shows at the top of the chat area.",
      "screenshot": "17-end-laptop.png",
      "stops_use": false
    },
    {
      "what": "Progress still reads '0/7 covered' and Key Terms still says 'Key terms show up here as you finish each point' after the whole session.",
      "screenshot": "17-end-laptop.png",
      "stops_use": false
    },
    {
      "what": "The topics page is scrolled so the Physics heading and back button are not visible; the Energy card is clipped at the top.",
      "screenshot": "03-topics-physics-laptop.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "S31",
    "quote": "idk tbh can we stop",
    "why": "About 15 near-identical 'multiply amps by seconds' questions, some repeated, with no visible progress (0/7), so the bored student gives up."
  },
  "fixes": [
    {
      "target": "Session end behaviour",
      "change": "Once the goodbye message has been sent, do not generate another tutor turn. Show an ended state with 'Back to topics' and 'Resume' buttons instead of repeating the farewell."
    },
    {
      "target": "Answer marking (T20 case)",
      "change": "Always mark the student's numeric answer before asking anything new, e.g. 'Yes, 1 × 4 = 4 C.'"
    },
    {
      "target": "Point mastery and progress",
      "change": "After 3 correct Q = I t answers, mark 'Electric current' covered, update the 'x/7 covered' counter, add Q, I, t and coulomb to Key Terms, and move on to the next point."
    },
    {
      "target": "Question generation",
      "change": "Keep a list of current/time pairs already used in the session and never reuse one; every practice item must end with an explicit question."
    },
    {
      "target": "Tutor content on batteries and give-aways",
      "change": "Accept 'battery runs out faster' as correct (more charge flow transfers more energy). On 'idk' or off-topic messages, give one hint before revealing an answer."
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
    T0: Welcome! Think about a torch you've used: what happens to its light when you press the button on it?
    [screenshot 06-ai-lesson-opening-phone.png and 06-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (offtopic): omg my phone battery dies so fast lol
    T1: Phone batteries do run flat quickly. Inside a phone, charge flows through wires, and the amount of charge that passes a point is called charge flow, measured in coulombs. If more charge keeps flowing, what do you think happens to the battery?
    S2 (try): it gets more tired and dies quicker?
    T2: Not quite: the battery isn't "tired", it just has to keep pushing charge round the circuit. Charge itself is never used up on the way round. If a phone has charge flowing for a longer time, what happens to the charge flow?
    S3 (try): umm so like... more charge flows out?
    T3: Yes, more charge flows in total, because charge keeps flowing the whole time the current is on.
    [screenshot 07-exchange-3-phone.png and 07-exchange-3-laptop.png] exchange-3
    S4 (wrong): oh right so like... more charge means the battery dies faster then?
    T4: Not quite: more charge flowing just means the battery, which is two or more cells joined together, keeps pushing for longer. The charge itself isn't used up. It goes round the circuit again and again. Charge flow is counted in which unit?
    S5 (try): coulombs innit
    T5: Right — charge flow is counted in coulombs.
    S6 (try): cool so like... what do we do with coulombs then
    T6: Coulombs count charge flow, Q: the amount of charge that passes a point. Picture runners on a track: Q is how many runners go past a spot, so more charge passing a point means a bigger Q.
    [screenshot 08-exchange-6-phone.png and 08-exchange-6-laptop.png] exchange-6
    S7 (offtopic): yeah yeah but like when do we actually use this stuff tho
    T7: You use coulombs to find how much charge has passed through a lamp: multiply the current by the time in seconds, Q = I t. The current is how fast the charge flows, so a bigger current means more charge passes each second. If the same current flows for twice as long, what happens to the charge flow Q?
    S8 (wrong): it stays the same?
    T8: Not quite. The current stays the same, but it flows for twice as long, so more charge passes. Think of your phone: leave it running twice as long and twice as much charge flows through it.
    S9 (minimal): ohhh right yeah
    T9: Yes, that's the idea: twice as long, twice the charge. Charge flow Q is the amount of charge that passes a point, counted in coulombs (C). A current of 2 A flows through a lamp for 5 s. Using Q = I t, how many coulombs of charge flow?
    [screenshot 09-exchange-9-phone.png and 09-exchange-9-laptop.png] exchange-9
    S10 (offtopic): what's ampere innit
    T10: An ampere is the unit of current. 1 ampere means 1 coulomb of charge passing each second.
    S11 (wrong): so like 2 plus 5 is 7 coulombs?
    T11: Coulombs are the unit we count charge in, so the answer will be in C. But Q = I t means current times time, not plus. Multiply the two numbers instead. So what is 2 × 5?
    S12 (offtopic): ugh i'm so hungry rn lol
    T12: That's fine, hunger makes it hard to think, and you can come back to this lesson any time; the answer to 2 × 5 is 10.
    [screenshot 10-exchange-12-phone.png and 10-exchange-12-laptop.png] exchange-12
    S13 (wrong): wait so the answer is 10 coulombs yeah
    T13: Yes, 10 coulombs is right: 2 × 5 gives 10, and the unit for charge flow is C. Charge flow, Q, is just the amount of charge that passes a point. If the same 2 A flowed for 10 seconds instead of 5, what would Q be?
    S14 (try): um 2 times 10... is like 20 coulombs?
    T14: You've got it: 2 × 10 is 20, and the unit is coulombs (C), the unit we count charge in. Now the same 2 A flows for 3 seconds. What is Q?
    S15 (try): umm 2 times 3... is 6 coulombs?
    T15: Right — 2 times 3 giving 6 coulombs is correct, because charge is current times time.
    [screenshot 11-exchange-15-phone.png and 11-exchange-15-laptop.png] exchange-15
    S16 (idk): ok so like... is that it then?
    T16: Nearly. You've got the main idea: charge flow is current times time, Q = I t. One last thing to try with it. If 4 A flows for 5 seconds, what is Q?
    S17 (idk): idk how to do this one lol
    T17: That's fine, here's the answer: Q = 20 C, because you multiply the current 4 A by the time 5 s.
    S18 (wrong): ohh so you just times them together yeah
    T18: Yes, you just multiply them. Charge flow Q is the amount of charge passing a point, counted in coulombs (C). Now try a new one: a lamp has a current of 3 A flowing for 2 s. What is Q?
    [screenshot 12-exchange-18-phone.png and 12-exchange-18-laptop.png] exchange-18
    S19 (idk): no idea mate lol
    T19: That's fine: the answer is Q = 6 C, because 3 × 2 = 6. You already know you multiply the current by the time. So try a tiny one: a current of 1 A flows for 4 s. What is Q?
    S20 (try): umm like 1 times 4 so... 4 coulombs?
    T20: Coulombs (C) are the unit we use to count charge, like metres count distance. So "4 coulombs" just means 4 units of charge. What unit is current measured in?
    S21 (try): amperes innit
    T21: Yes, amperes is right, and it's often shortened to amps.
    [screenshot 13-exchange-21-phone.png and 13-exchange-21-laptop.png] exchange-21
    S22 (try): cool so like... what comes next then
    T22: Next comes the amount of charge itself. Charge flow, written Q, is how much charge passes a point, counted in coulombs (C). A current of 3 A flows for 2 s. How many coulombs of charge flow?
    S23 (try): um 3 times 2 is like 6 coulombs?
    T23: Yes, 6 coulombs is right: you multiplied current by time. And coulombs are the unit we use to count charge, like metres count distance. A current of 2 A flows for 5 s.
    S24 (try): 2 times 5 is um... 10 coulombs
    T24: Yes, 10 C is right: 2 × 5 = 10 coulombs, current times time. That is the rule Q = I t, where Q is the charge flow, I is the current and t is the time in seconds. A current of 4 A flows for 3 s. What is Q?
    [screenshot 14-exchange-24-phone.png and 14-exchange-24-laptop.png] exchange-24
    S25 (bored): huh?
    T25: Let me say it simpler. To find how much charge flows, just multiply the amps by the seconds. Here is one to try: 4 amps flowing for 3 seconds. What is 4 × 3?
    S26 (try): um like 12?
    T26: Yes — 12 is right, because 4 × 3 means 4 multiplied by 3.
    S27 (idk): so the answer is 12 coulombs yeah
    T27: Yes, 12 coulombs is right: 4 × 3 = 12 C. Charge flow, Q, is the amount of charge that passes a point, counted in coulombs. Now a new case: a current of 5 A flows for 2 s. What is Q?
    [screenshot 15-exchange-27-phone.png and 15-exchange-27-laptop.png] exchange-27
    S28 (offtopic): man i'm so tired rn ngl
    T28: That's fair, it's a lot of new stuff. Do you want to stop here, do one more quick thing, or switch to the slides?
    S29 (try): do one more quick thing
    T29: Thanks for sticking with it. Back to the pair we just did: 5 A for 2 s, where Q = I × t, so it's the same sum as before, just with new numbers. What is Q in coulombs?
    S30 (try): um 5 times 2 is like 10 coulombs?
    T30: Yes, 10 C is right: Q = I × t = 5 × 2 = 10, so the charge flow is 10 C. Nice work getting that done while tired, and you can come back to this lesson any time. That was the quick one. Do you want to stop here, or keep going?
    [screenshot 16-exchange-30-phone.png and 16-exchange-30-laptop.png] exchange-30
    S31 (idk): idk tbh can we stop
    T31: No problem, thanks for sticking with it. Today you answered questions on electric current. Your place is saved, so we'll pick up right here next time. Bye for now!
    S32 (try): yeah cheers see ya
    [no tutor reply within 120 s after S32]
    [check] BROKEN: tutor replies — no reply after S32
    [screenshot 17-end-phone.png and 17-end-laptop.png] end
