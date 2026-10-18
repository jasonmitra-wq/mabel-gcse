# Site test: p4-half-life (lesson, 2026-10-18)

**FAIL** · cost $0.6376 (18 tool calls, 124 calls from the site; tutor claude-sonnet-5-5 $0.4635)

## Judge

```json
{
  "broken": [
    {
      "what": "Correct answer ignored: the student said '40 Bq, half of 80', which is right. The tutor gave no feedback at all and moved straight on to count rate. A later note does say 80 Bq drops to 40 Bq, but the student was never told they were right.",
      "step": "S4 -> T4"
    },
    {
      "what": "Wrong answer accepted: the running example was 80 Bq then 40 Bq. After another half-life it should be 20 Bq, but the tutor accepted the student's 25. It justified this with 'it halves again from 50 Bq', a number from a different example. The diagram shown in the same turn uses 800 -> 400 -> 200, so the next value there would be 100.",
      "step": "S6 -> T6"
    },
    {
      "what": "Tutor states a wrong sequence as fact: '80 Bq, then 40 Bq, then 25 Bq'. Halving 40 gives 20, not 25.",
      "step": "T7"
    },
    {
      "what": "The student said they were confused, but the tutor ignored it and jumped to tracers. The decay-graph questions in T6 and T7 were never answered, yet the 'Reading and drawing decay graphs' section was marked done (2/4 covered).",
      "step": "S8 -> T8"
    },
    {
      "what": "The question gives away its own answer: T9 says 'it gives out gamma rays' and then asks 'Which kind of ray reaches that camera?'. The tutor then supplied the answer itself in T10 without the student ever answering.",
      "step": "T9 -> T10"
    },
    {
      "what": "Correct answer ignored: the student said radiation 'keeps going cuz its on me still', which is correct (contamination). The tutor gave no confirmation and switched to peer review. The point was only explained after the lesson had already ended, when the student asked.",
      "step": "S15 -> T15"
    },
    {
      "what": "The end summary says the student answered questions only on 'What half-life means' and 'Contamination...', yet all 4/4 sections are marked covered. The radiotherapy question (T11) and the graph questions were never answered.",
      "step": "T16"
    }
  ],
  "looks_wrong": [
    {
      "what": "The sidebar shows a tiny duplicate thumbnail of the decay graph whose labels are far too small to read. It is pointless clutter.",
      "screenshot": "07-diagram-5-laptop.png",
      "stops_use": false
    },
    {
      "what": "The diagram uses 800/400/200 Bq while the conversation uses 80/40 and 50/25 Bq. The numbers on screen don't match the question being asked.",
      "screenshot": "07-diagram-5-phone.png",
      "stops_use": false
    },
    {
      "what": "Diagram caption lines ('800 Bq → 400 Bq takes 2 hours...') and the axis tick labels are small on the phone. They are readable, but only just.",
      "screenshot": "07-diagram-5-phone.png",
      "stops_use": false
    },
    {
      "what": "Scrolled chat text is sliced off right under the sticky 'Start this topic over' link. The half-visible line sits jammed against the link.",
      "screenshot": "06-exchange-3-phone.png",
      "stops_use": false
    },
    {
      "what": "The Key Terms box is cut off at the bottom: the 'becquerel (Bq)' heading shows with no definition, and there is no visible scroll cue.",
      "screenshot": "12-end-laptop.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "S8",
    "quote": "huh this is confusing",
    "why": "The tutor had just told them a wrong answer (25) was right and listed 80, 40, 25, which doesn't make sense. Then it ignored their confusion and changed topic."
  },
  "fixes": [
    {
      "target": "tutor answer-checking behaviour",
      "change": "Always give explicit right/wrong feedback on the student's answer before starting new content. S4 and S15 were both skipped."
    },
    {
      "target": "tutor numeric checking for halving questions",
      "change": "Compute the expected value from the current running example (80 -> 40 -> 20) and reject 25. Never reuse a number from a different example."
    },
    {
      "target": "diagram data for p4-half-life section 2",
      "change": "Make the decay graph use the same numbers as the dialogue (80, 40, 20, 10 Bq), or make the dialogue use 800/400/200."
    },
    {
      "target": "confusion/boredom handling",
      "change": "When the student says 'this is confusing' or asks 'whats X', re-explain with one short example and re-ask a simple check. Don't move on or mark the section covered until a question in it is answered."
    },
    {
      "target": "question generation rule",
      "change": "Don't state the answer in the same turn as the question (T9, gamma rays). Ask first, then reveal the answer only after the student responds."
    }
  ]
}
```

## Transcript

    Lesson p4-half-life (Physics › Atomic structure › Half-life and uses of radiation).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    [screenshot 02-subjects-phone.png and 02-subjects-laptop.png] subjects
    [screenshot 03-topics-physics-phone.png and 03-topics-physics-laptop.png] topics-physics
    [screenshot 04-lessons-p4-phone.png and 04-lessons-p4-laptop.png] lessons-P4
    [check] OK: AI lesson opens by default (in TEACH_ENABLED) — AI lesson opened
    T0: Welcome, I'm glad you're here! Think of a fizzy drink left open on the counter: what happens to its fizz as the hours go by?
    [screenshot 05-ai-lesson-opening-phone.png and 05-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (idk): no idea, it just goes flat i guess?
    T1: Going flat is exactly the idea we'll build on: something slowly fading away. A radioactive sample does that too, and the time it takes to fade to half of what it started with is called its half-life. If a sample starts with 800 nuclei, how many would be left after one half-life?
    S2 (bored): half of 800?
    T2: Yes — half of 800 is right, so 400 nuclei are left. Activity is how many decays happen each second, measured in becquerels (Bq): 1 Bq is 1 decay per second. If a sample has an activity of 50 Bq, how many decays happen each second?
    S3 (try): 50 decays happen each second
    T3: Yes — 50 decays each second is right, because 1 Bq means 1 decay per second. Activity also falls to half after one half-life, so a sample at 50 Bq would drop to 25 Bq. If a sample starts at 80 Bq, what is its activity after one half-life?
    [screenshot 06-exchange-3-phone.png and 06-exchange-3-laptop.png] exchange-3
    S4 (wrong): um like 40 bq maybe? half of 80?
    T4: A detector can't catch every decay, so it records its own number each second, called the count rate, a bit like a bell that rings each time something is spotted. If a detector records 60 decays in one second, what is the count rate?
    S5 (try): 60 decays per second?
    T5: Yes, 60 decays in one second is right, so the count rate is 60. Look at the diagram: the activity halves every 2 hours, so the half-life is 2 hours. That steady halving makes a curve on a graph, not a flat line. What happens to the activity after another 2 hours?
    [diagram shown in the conversation under T5: "The activity halves every 2 hours, so the half-life is 2 hours."]
    [screenshot 07-diagram-5-phone.png and 07-diagram-5-laptop.png] diagram-5
    S6 (try): it halves again so like 25?
    T6: Yes, 25 Bq is right, because it halves again from 50 Bq. If you plot those activities against time on a graph, you get a decay graph: activity goes up the side, time runs along the bottom, and the line curves downward. Looking at that curve, what would happen to it as time keeps going?
    [screenshot 08-exchange-6-phone.png and 08-exchange-6-laptop.png] exchange-6
    S7 (bored): whats a decay graph
    T7: A decay graph is just a picture of how the activity drops over time, like a line showing how a phone battery drains as the hours pass. Our numbers, 80 Bq, then 40 Bq, then 25 Bq, would be dots on it, joined by a curve. Where on that graph would the 80 Bq starting dot sit?
    S8 (bored): huh this is confusing
    T8: Now for what half-life is used for: doctors can inject a tiny bit of radioactive material that travels to an organ, a bit like a delivery driver you can track from outside the body. What does a camera outside the body need to pick up from that material?
    S9 (idk): no idea what it needs to pick up
    T9: That's fine, I'll make it simpler. A tracer is a radioactive material injected into you, and it gives out gamma rays. Gamma rays pass through your body, so a camera outside can detect them. Which kind of ray reaches that camera?
    [screenshot 09-exchange-9-phone.png and 09-exchange-9-laptop.png] exchange-9
    S10 (minimal): whats a tracer
    T10: A tracer is a radioactive material you swallow or have injected, so a camera outside can follow where it goes. The answer was gamma rays. Radiotherapy uses radiation to kill cancer cells in a tumour, a lump of cancer cells. What do you think radiotherapy does to those cancer cells?
    S11 (wrong): it like injects them with radioactive stuff?
    T11: Not quite. That's the tracer, which just travels to an organ so a camera can find it. Radiotherapy is different: the radiation is aimed at a tumour, like pointing a torch at one spot, and it kills the cancer cells there. Why would doctors aim a focused beam at the tumour rather than the whole body?
    S12 (bored): this is long mate
    T12: Fair enough, I'll keep it short. Next: being exposed to radiation, like standing near a radioactive rock, is called irradiation. What happens to you once you walk away from the rock?
    [screenshot 10-exchange-12-phone.png and 10-exchange-12-laptop.png] exchange-12
    S13 (offtopic): whats irradiation
    T13: Irradiation just means being exposed to radiation, like feeling the heat from a fire without touching it. If you walk away from the rock, what happens to the irradiation?
    S14 (try): it stops i guess? cuz im not near it
    T14: Yes, it stops once you're away, because irradiation only lasts while you're exposed to the source. If you walk away from the rock but the material is still on your clothes, what do you think happens to the radiation?
    S15 (try): it keeps going cuz its on me still?
    T15: Studies of radiation's effects on people get published, and other scientists check them before they're accepted. Why would other scientists checking a study's findings be useful?
    [screenshot 11-exchange-15-phone.png and 11-exchange-15-laptop.png] exchange-15
    S16 (try): so like they make sure its right?
    T16: Yes, that's right: other scientists check the findings to make sure they're reliable. That brings us to the end of this lesson. You answered questions on "What half-life means" and on "Contamination, irradiation and radiation dangers".
    S17 (closing): whats contamination
    T17: Contamination is when radioactive material gets onto or into something, like dust or spilled paint landing on your clothes or skin. It's the "keeps going" case you described: the radiation carries on for as long as the material stays on you.
    [the lesson shows "Lesson finished."]
    [screenshot 12-end-phone.png and 12-end-laptop.png] end
