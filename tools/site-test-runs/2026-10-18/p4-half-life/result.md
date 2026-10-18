# Site test: p4-half-life (lesson, 2026-10-18)

**FAIL** · cost $0.7365 (23 tool calls, 144 calls from the site; tutor claude-sonnet-5-5 $0.5361)

## Judge

```json
{
  "broken": [
    {
      "what": "The student asked 'whats exponential decay mean'. The tutor ignored the question and just repeated the 800 Bq question.",
      "step": "S10/T10"
    },
    {
      "what": "The correct answer '400 bq' got no 'yes' or 'right'. The tutor moved straight on to decay-graph axes, so the student never learns it was correct.",
      "step": "S11/T11"
    },
    {
      "what": "The tutor asked what a 20-decays-per-second detector reading is called before 'count rate' had been taught. After S9 it explained the term but never came back to the question.",
      "step": "T8/T9"
    },
    {
      "what": "T13 asks why the isotope must give out gamma rays for 'that camera'. No camera, tracer or medical imaging was mentioned before this.",
      "step": "T13"
    },
    {
      "what": "The vague answer 'so the camera can see it' was accepted with 'Yes' even though it does not answer the 'why'.",
      "step": "S14/T14"
    },
    {
      "what": "A physically wrong answer was accepted. The rock's radiation does not stop when you step away; only your exposure stops. The question invited the error and the tutor confirmed 'it stops'.",
      "step": "T16/S17/T17"
    },
    {
      "what": "The student asked 'whats contamination mean'. The tutor ignored it and repeated the question.",
      "step": "S18/T18"
    },
    {
      "what": "'this is long' got the reply 'This bit is a tricky one', which does not match what the student said. It also offered to 'tell you the rest' instead of shortening the lesson.",
      "step": "S6/T6"
    },
    {
      "what": "The closing summary lists topics in a jumbled order with a stray capital ('Contamination'). It also claims the student practised drawing decay graphs, which never happened.",
      "step": "T22"
    },
    {
      "what": "The 300 Bq question was answered by the tutor itself in T5, which then re-asked the same thing with 50 Bq. This padding made the lesson longer for a student who was already bored.",
      "step": "T5/T7"
    }
  ],
  "looks_wrong": [
    {
      "what": "The Revise a topic card lists 'Sociology', but the subjects page has Maths and no Sociology.",
      "screenshot": "01-home-laptop.png",
      "stops_use": false
    },
    {
      "what": "The page heading '← Home  What are you revising?' is half hidden under the sticky top bar.",
      "screenshot": "02-subjects-phone.png",
      "stops_use": false
    },
    {
      "what": "The diagram thumbnail in the sidebar is far too small to read anything.",
      "screenshot": "08-diagram-9-laptop.png",
      "stops_use": false
    },
    {
      "what": "The Key Terms panel is clipped at the bottom. The 'activity' definition is cut off after its heading.",
      "screenshot": "08-diagram-9-laptop.png",
      "stops_use": false
    },
    {
      "what": "The 'Lesson finished.' message and the Topics / Show me the slides / Ask something else buttons are not visible on phone, even though they appear on laptop.",
      "screenshot": "14-end-phone.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "S10",
    "quote": "whats exponential decay mean",
    "why": "The student was already saying 'this is long'. Then a direct question was ignored and the old question repeated, so it feels like the tutor isn't listening."
  },
  "fixes": [
    {
      "target": "tutor behaviour: clarification requests",
      "change": "When the student asks 'whats X mean', give a one-sentence definition of X before re-asking. This applies at T10 (exponential decay) and T18 (contamination)."
    },
    {
      "target": "p4-half-life uses-of-radiation step (T13)",
      "change": "Before asking about gamma rays, add one sentence introducing medical tracers. For example: 'Doctors inject a radioactive tracer and a gamma camera outside the body detects it.'"
    },
    {
      "target": "p4-half-life irradiation question (T16/T17)",
      "change": "Ask 'What happens to your exposure when you step away?' Mark 'it stops' as correct only for the exposure, and add that the rock keeps emitting."
    },
    {
      "target": "tutor behaviour: answer marking",
      "change": "Always confirm a correct answer before moving on (e.g. S11 '400 bq'). Reject vague answers like S14 with a hint instead of 'Yes'."
    },
    {
      "target": "p4-half-life count-rate step (T8) and closing summary (T22)",
      "change": "Define count rate before asking for its name. List covered points in lesson order, with consistent casing and no claims about drawing graphs."
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
    T0: Welcome, glad you're here! Think about a hot drink left on the table, or a bag of ice melting on a warm day: what do you notice happening to it as the minutes go by?
    [screenshot 05-ai-lesson-opening-phone.png and 05-ai-lesson-opening-laptop.png] ai-lesson-opening
    S1 (idk): idk like it just gets cold or melts i guess?
    T1: Yes, things fading or melting is exactly the starting point. A radioactive sample also fades away over time, and half-life is the time it takes for it to fall to half of what it started with. So if a sample has 800 radioactive nuclei (tiny cores of atoms) now, and one half-life passes, how many are left?
    S2 (bored): 400?
    T2: Yes — 400 is right, because half of 800 is 400. Now, a sample is also busy breaking down all the time, and activity is just how many of its nuclei decay each second. If a sample has an activity of 500 decays per second, how many decays happen in 2 seconds?
    S3 (bored): whats activity mean
    T3: Activity just means how fast a sample is breaking down: how many of its nuclei decay every second. Think of popcorn popping, where the number of pops each second is its "activity". So if a sample has an activity of 500 decays per second, how many decays happen in 2 seconds?
    [screenshot 06-exchange-3-phone.png and 06-exchange-3-laptop.png] exchange-3
    S4 (try): um like 1000?
    T4: Yes — 1000 is right, because 500 decays each second for 2 seconds gives 1000. Scientists measure activity in a unit called the becquerel, written Bq, where 1 Bq means 1 decay per second. So if a sample has an activity of 300 Bq, how many decays happen each second?
    S5 (idk): whats becquerel mean
    T5: A becquerel is just a unit for activity, like "metres" is a unit for length. It's the label we put on the number, and 1 Bq means 1 decay each second. So a sample with an activity of 300 Bq has 300 decays every second. If a sample has an activity of 50 Bq, how many decays happen each second?
    S6 (bored): this is long
    T6: This bit is a tricky one, so no worries. Do you want me to just tell you the rest of this one?
    [screenshot 07-exchange-6-phone.png and 07-exchange-6-laptop.png] exchange-6
    S7 (checkin-no): nah im good lol
    T7: Fair enough, we'll keep going. If a sample's activity is 50 Bq, how many decays happen each second?
    S8 (try): 50?
    T8: Yes — 50 decays each second is right. If a detector records 20 decays one second, what is that number called?
    S9 (idk): idk what that is
    T9: Count rate is just how many decays a detector records each second. Radioactive decay is random, but with huge numbers of atoms the overall rate is predictable. Look at the diagram: the activity halves every 2 hours, so the half-life is 2 hours. Plotted over time, this gives a curve called exponential decay, which keeps halving but never reaches zero. If the activity is 800 Bq at the start, what will it be after one 2-hour half-life?
    [diagram shown in the conversation under T9: "The activity halves every 2 hours, so the half-life is 2 hours."]
    [screenshot 08-diagram-9-phone.png and 08-diagram-9-laptop.png] diagram-9
    [screenshot 09-exchange-9-phone.png and 09-exchange-9-laptop.png] exchange-9
    S10 (wrong): whats exponential decay mean
    T10: Here the activity halves every 2 hours. If it starts at 800 Bq, what is it after one 2-hour half-life?
    S11 (try): 400 bq?
    T11: A decay graph plots activity up the side against time along the bottom, and the curve falls but never touches zero. On that graph, which quantity goes along the bottom?
    S12 (offtopic): whats decay graph
    T12: A decay graph is just a picture of activity falling over time. Up the side goes activity in Bq. Along the bottom goes time. Which quantity goes along the bottom of the graph?
    [screenshot 10-exchange-12-phone.png and 10-exchange-12-laptop.png] exchange-12
    S13 (try): time?
    T13: Yes — time goes along the bottom. Why must the isotope give out gamma rays for that camera to pick it up?
    S14 (try): um so the camera can see it?
    T14: Yes — the camera does need to pick it up. Which type of radiation passes out through the body to the camera?
    S15 (try): gamma rays?
    T15: Yes — gamma rays is right, they pass out through the body. Radiotherapy uses radiation to kill unwanted tissue, like a tumour, which is a lump of cancer cells. What does radiotherapy aim to do to the cancer cells?
    [screenshot 11-exchange-15-phone.png and 11-exchange-15-laptop.png] exchange-15
    S16 (try): kill them i think
    T16: Yes, kill them is right. Irradiation means being exposed to radiation, like standing near a radioactive rock, and you don't become radioactive. What do you think happens to the rock's radiation if you step away?
    S17 (wrong): it stops?
    T17: Yes — it stops, because irradiation only lasts while you're exposed. Contamination is different: radioactive dust on your skin or clothes comes with you. If you walk away from the rock wearing that dust, what happens to the radiation?
    S18 (offtopic): whats contamination mean
    T18: So if you leave the rock but still have radioactive dust on your clothes, what happens to the radiation?
    [screenshot 12-exchange-18-phone.png and 12-exchange-18-laptop.png] exchange-18
    S19 (try): it goes with me?
    T19: Yes — it goes with you, because contamination carries the radioactive material along. Why might it matter that other scientists check a study before people trust it?
    S20 (try): so they dont mess up or lie i guess
    T20: Right — checking helps stop mistakes and lies. Other scientists reading a study before it's trusted is called peer review. What do you think those scientists are checking in the study?
    S21 (offtopic): whats peer review mean
    T21: Peer review just means other scientists check a study's findings before they're accepted, to make sure the work is sound. That brings us to the end of this lesson.
    [screenshot 13-exchange-21-phone.png and 13-exchange-21-laptop.png] exchange-21
    S22 (closing): ok thanks bye
    T22: Thanks for sticking with it. Today you answered questions on reading and drawing decay graphs, uses of nuclear radiation, what half-life means and Contamination, irradiation and radiation dangers. Your progress is saved, so you can come back to this lesson any time. Bye for now!
    [the lesson shows "Lesson finished."]
    [screenshot 14-end-phone.png and 14-end-laptop.png] end
