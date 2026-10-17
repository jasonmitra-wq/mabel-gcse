# Site test: p1-power (lesson, 2026-10-17)

**FAIL** · cost $0.2261 (19 tool calls, 41 calls from the site)

## Judge

```json
{
  "broken": [
    {
      "what": "The test tool saw no tutor reply within 120 s after S18. The end screenshot does show a final reply, so the reply either arrived far too late or the check missed it. Either way, the student waited with no typing or loading indicator.",
      "step": "S18"
    },
    {
      "what": "Console shows a 404 'Failed to load resource' when the page loads.",
      "step": "page load (before T0)"
    },
    {
      "what": "T4 asked a rearrangement question ('What would you need to rearrange that formula to find…'), which is also badly worded. After the off-topic S5, the tutor dropped it and switched to kilowatts. E = P × t was never taught or practised.",
      "step": "T4–T5"
    },
    {
      "what": "The student said 'huh? that's too long', which shows confusion and no answer. The tutor replied 'Right — 3000 watts…', treating it as a correct answer and giving the answer away.",
      "step": "S6/T6"
    },
    {
      "what": "The 500 MW to watts question was never answered. The student said 'huh?', and the tutor moved straight to a GW question, then answered that one itself after 'this is long'. Even so, the 'Power in everyday contexts' section was marked covered.",
      "step": "T9–T12"
    },
    {
      "what": "The student correctly answered 'newton-metres'. The tutor gave no feedback and instead asked 'Would you like me to just tell you the rest of this bit?', which is a non-sequitur.",
      "step": "S16/T16"
    },
    {
      "what": "T7 was a yes/no offer of exam questions, so there was nothing to answer. After the student declined, the student never did one P = E/t calculation unaided: in T4 the tutor gave 600 W itself. Even so, 'Calculating power' was ticked and the ending says 'You're ready for this!'",
      "step": "T4, T7, T8, end"
    },
    {
      "what": "automatic check failed: tutor replies",
      "step": "no reply after S18"
    }
  ],
  "looks_wrong": [
    {
      "what": "Raw markdown asterisks shown literally: '*how fast*'.",
      "screenshot": "05-ai-lesson-opening-phone.png"
    },
    {
      "what": "Raw markdown asterisks shown literally: '**kilowatts**' and '**P = E/t**'.",
      "screenshot": "07-exchange-6-phone.png"
    },
    {
      "what": "Raw markdown asterisks shown literally: '**P = E/t**'.",
      "screenshot": "07-exchange-6-laptop.png"
    },
    {
      "what": "Site title wraps to 3 lines, and its first line ('Mabel's') is clipped at the top of the header.",
      "screenshot": "01-home-phone.png"
    },
    {
      "what": "The '← Home' button and the 'What are you revising?' heading are clipped and overlapped under the header.",
      "screenshot": "02-subjects-phone.png"
    },
    {
      "what": "Header nav icons overflow: the rightmost icon is cut off at the screen edge.",
      "screenshot": "05-ai-lesson-opening-phone.png"
    },
    {
      "what": "The 'Jump to' panel's top, including its 'JUMP TO' heading, is hidden under the sticky lesson header.",
      "screenshot": "09-exchange-12-laptop.png"
    },
    {
      "what": "Key Terms panel is cut off: the 'CALCULATING POWER' heading sits at the bottom edge and later terms (9 total) can't be seen, with no visible scroll cue.",
      "screenshot": "11-end-laptop.png"
    }
  ],
  "would_quit": {
    "turn": "S11",
    "quote": "this is long",
    "why": "Lesson ignores repeated 'huh?'/'too tired'/'this is long' signals, keeps adding unit trivia (MW, GW, zeros) and answers its own questions."
  },
  "fixes": [
    {
      "target": "tutor reply handling (S6/S10-type replies)",
      "change": "Classify 'huh?' and 'too long' as confusion, not answers. Never say 'Right' or reveal the answer. Rephrase the question in a single short sentence."
    },
    {
      "target": "tutor off-topic handling (S5)",
      "change": "After a brief acknowledgement, re-ask the pending question, e.g. rearranging P = E/t, instead of jumping to a new subtopic."
    },
    {
      "target": "section completion logic",
      "change": "Only tick a section once the student has correctly answered at least one question in it unaided, e.g. calculating P from given E and t."
    },
    {
      "target": "chat bubble renderer",
      "change": "Render markdown, or strip * and ** from tutor text before display."
    },
    {
      "target": "lesson layout CSS (phone header + laptop sidebar)",
      "change": "Shorten or truncate the title on screens under 400px, wrap or shrink the nav icons, offset the sticky header so the Jump To and Home buttons aren't covered, and make Key Terms scrollable with a fade cue. Also add a typing indicator and a timeout/retry message after 15 s with no reply."
    }
  ]
}
```

## Transcript

    [console error] Failed to load resource: the server responded with a status of 404 (Not Found)
    Lesson p1-power (Physics › Energy › Power — how fast energy is transferred).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    [screenshot 02-subjects-phone.png and 02-subjects-laptop.png] subjects
    [screenshot 03-topics-physics-phone.png and 03-topics-physics-laptop.png] topics-physics
    [screenshot 04-lessons-p1-phone.png and 04-lessons-p1-laptop.png] lessons-P1
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Hi! Today we're looking at power — which is all about *how fast* energy gets transferred. So if power is about how fast energy moves, what do you think the units of power might be based on?
    [screenshot 05-ai-lesson-opening-phone.png and 05-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (idk): idk honestly
    T1: No worries! Think of it this way — if power is about *how fast* energy moves, and we measure speed in metres per second, then power should measure energy per second. So if a kettle transfers 1000 joules of energy in just 1 second, that's pretty powerful! What word do you think we use for "energy per second"?
    S2 (try): energy per second? um... watts?
    T2: Exactly — watts! So power is the *rate* at which energy gets transferred, which means how many joules of energy move every single second. If a kettle transfers 2000 joules in just 1 second, how many joules does it transfer per second?
    S3 (wrong): 2000 joules per second?
    T3: Spot on — 2000 joules per second, which is 2000 watts! Now we can actually work out power using a simple formula. If a kettle transfers 3000 joules of energy in 5 seconds, what calculation would you do to find the power in watts?
    [screenshot 06-exchange-3-phone.png and 06-exchange-3-laptop.png] exchange-3
    S4 (try): divide 3000 by 5?
    T4: Exactly right — you divide 3000 by 5 to get 600 watts! That's the formula we use: **power equals energy divided by time**, or **P = E/t**. What would you need to rearrange that formula to find if you knew the power was 600 watts and the time was 5 seconds?
    S5 (offtopic): wait is it lunch soon? im starving lol
    T5: Haha, I know that feeling! Right, now here's a thing: when machines are really powerful, we don't always write watts — we use **kilowatts** instead. One kilowatt is 1000 watts, so a 2 kW kettle is actually 2000 watts. What do you think a 3 kW heater would be in watts?
    S6 (bored): huh? that's too long
    T6: Right — 3000 watts is a lot to say out loud! So if a 3 kW heater is 3000 watts, how many watts would a 5 kW heater be?
    [screenshot 07-exchange-6-phone.png and 07-exchange-6-laptop.png] exchange-6
    S7 (try): 5000 watts?
    T7: Right — you've got it! Shall I walk you through a couple of real exam-style questions now so you can see how to use the formula?
    S8 (offtopic): nah im too tired rn tbh
    T8: That's fair — you can always come back to it when you're fresher! So we know that 1 kW = 1000 W. What would 7 kW be in watts?
    S9 (try): um like 7000 watts?
    T9: Spot on — 7000 watts is right! Now, for really powerful things like power stations, we use an even bigger unit called a megawatt, or MW. One megawatt is a million watts — so 1 MW = 1,000,000 W. If a power station outputs 500 MW, how many watts would that be?
    [screenshot 08-exchange-9-phone.png and 08-exchange-9-laptop.png] exchange-9
    S10 (bored): huh?
    T10: A megawatt is a million watts — so 1 MW = 1,000,000 W. That's why we use it for power stations, because their power is so huge. A hairdryer uses about 2000 watts, and a kettle uses about 2000–3000 watts — things you'd recognize. What do you think 1 GW equals in watts?
    S11 (bored): this is long
    T11: I get it — numbers with lots of zeros look scary! But here's the trick: a gigawatt is just 1 billion watts, written as 1,000,000,000 W. Power stations need that huge unit because they power whole cities. How many zeros are in a billion?
    S12 (try): like 9 zeros?
    T12: That's right — a billion has 9 zeros! Now, let's move on to something called work done. When a force pushes or pulls an object and moves it, energy gets transferred — and we call that "work done". What unit do we measure work done in?
    [screenshot 09-exchange-12-phone.png and 09-exchange-12-laptop.png] exchange-12
    S13 (try): um like joules?
    T13: Right — joules is correct! Work done is just energy being transferred when a force moves something. So if I push a box along the ground, the force I'm using transfers energy, and that's work being done. To work out how much work, we multiply the force by how far the object moves — what would you multiply together?
    S14 (try): force times distance?
    T14: Yes, force times distance — that's it! So work done = force × distance, and we measure it in joules. Now here's a neat thing: when we multiply newtons by metres, we get newton-metres, written as N m. If a force of 5 newtons moves something 3 metres, how many joules of work is done?
    S15 (try): um 5 times 3... is like 15 joules?
    T15: Right — 5 times 3 is 15! So when we multiply 5 newtons by 3 metres, what do we call that answer?
    [screenshot 10-exchange-15-phone.png and 10-exchange-15-laptop.png] exchange-15
    S16 (try): newton-metres?
    T16: Would you like me to just tell you the rest of this bit?
    S17 (checkin-no): nah im good, keep going
    T17: Perfect. So newton-metres and joules are exactly the same thing — 1 N m = 1 J. That's why when we do force times distance, our answer is in joules. If a force of 1 newton moves something 1 metre, how much work is done?
    S18 (try): 1 newton times 1 metre is 1 joule innit
    [no tutor reply within 120 s after S18]
    [check] BROKEN: tutor replies — no reply after S18
    [screenshot 11-end-phone.png and 11-end-laptop.png] end
