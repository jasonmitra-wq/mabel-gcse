# Site test: M5 (maths, 2026-10-17)

**FAIL** · cost $0.1904 (5 tool calls, 0 calls from the site; tutor claude-sonnet-5-5 $0.0000)

## Judge

```json
{
  "broken": [
    {
      "what": "After leaving and resuming, Q5 step 1 shows '1/26' in the answer box, but the student typed '0.0385'. The resume restores the stored answer, not the student's own input.",
      "step": "Question 5 Step 1 / Student comes back to the topic (screenshot 18)"
    },
    {
      "what": "Q5 asks for both answers 'as simplified fractions', but step 1 demands P(red queen) 'to 4 d.p.' The question and step contradict each other on the answer format.",
      "step": "Question 5 Step 1"
    },
    {
      "what": "Q5 step 1 asks two things ('How many red queens are there?' and 'Find P(red queen) to 4 d.p.') but has a single answer box. Typing the count 2 would be ambiguous.",
      "step": "Question 5 Step 1"
    },
    {
      "what": "Q3 step 2 asks her to 'State your answer and interpret it briefly', yet it is a numeric box that accepts the same '0.5' again. This gives a free mark and never checks any interpretation.",
      "step": "Question 3 Step 2"
    },
    {
      "what": "After 4 completed test questions and wrong attempts on Q4, the home page still shows 'Nothing secured yet', 'No sessions yet' and Error log 'All clear'. There is no 'carry on' card on home.",
      "step": "Student taps Home and leaves the test (screenshot 17)"
    }
  ],
  "looks_wrong": [
    {
      "what": "Once a step is answered, the top bar text changes from 'Topic test · question N of 10' to 'Good — keep going.', so the question number disappears.",
      "screenshot": "08-q1-step1-phone.png",
      "stops_use": false
    },
    {
      "what": "The 'routes' label beside the answer box squeezes the input on phone. The step text says 'identify the branches' but the box wants a count, which is unclear.",
      "screenshot": "09-question-2-phone.png",
      "stops_use": false
    },
    {
      "what": "The Next/continue button below 'Question 3 complete' is cut off at the bottom edge on laptop.",
      "screenshot": "12-q3-step2-laptop.png",
      "stops_use": false
    },
    {
      "what": "Home shows no sign of the test in progress: Dashboard 0%, History 'No sessions yet', Error log 'All clear'.",
      "screenshot": "17-after-leaving-laptop.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "Question 5",
    "quote": "Use the addition rule: P(red or queen) = P(red) + P(queen) - P(red queen).",
    "why": "The question says simplified fractions but step 1 forced 4 d.p. Step 2 gives no format clue, so she doesn't know what to type and gives up."
  },
  "fixes": [
    {
      "target": "prb-B05 step 1 prompt",
      "change": "Change to 'Find P(red queen) as a simplified fraction.' and accept 1/26 or 2/52, or ask for the count in a separate step. Remove 'to 4 d.p.' so it matches the question."
    },
    {
      "target": "prb-B05 step 2 prompt",
      "change": "Add 'Give your answer as a simplified fraction (e.g. 7/13)' and accept 7/13, 28/52 and 0.5385."
    },
    {
      "target": "Resume behaviour for completed steps",
      "change": "Restore the exact text the student typed (e.g. '0.0385') instead of the stored answer '1/26'."
    },
    {
      "target": "cond-A01 step 2",
      "change": "Replace the repeat-number step with a real check, e.g. multiple choice 'What does P(B|A)=0.5 mean?', or merge it into step 1."
    },
    {
      "target": "Home page during an unfinished topic test",
      "change": "Show a 'Carry on Probability test (question 5 of 10) →' card. Update History, Dashboard and Error log after answered test questions and wrong attempts."
    }
  ]
}
```

## Transcript

    Maths topic M5 (Probability).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    Warm-up offered.
    [screenshot 02-warm-up-phone.png and 02-warm-up-laptop.png] warm-up
    Warm-up 1: "50 − 7" — typed "43" — app accepted — true answer 43
    [check] OK: warm-up 1: "43" for 50 − 7 accepted — app accepted
    Warm-up 2: "11 × 10" — typed "110" — app accepted — true answer 110
    [check] OK: warm-up 2: "110" for 11 × 10 accepted — app accepted
    Warm-up 3: "54 ÷ 9" — typed "8.5" — app rejected — true answer 6
    [check] OK: warm-up 3: "8.5" for 54 ÷ 9 rejected — app rejected
    [screenshot 03-warm-up-3-phone.png and 03-warm-up-3-laptop.png] warm-up-3
    Warm-up 4: "Find 2/3 of 24" — typed "16" — app accepted — true answer 16
    [check] OK: warm-up 4: "16" for Find 2/3 of 24 accepted — app accepted
    Warm-up 5: "20% of 76" — typed "idk" — app rejected — true answer 15.2
    [check] OK: warm-up 5: "idk" for 20% of 76 rejected — app rejected
    [screenshot 04-warm-up-result-phone.png and 04-warm-up-result-laptop.png] warm-up-result
    [screenshot 05-maths-topics-phone.png and 05-maths-topics-laptop.png] maths-topics
    [screenshot 06-topic-m5-phone.png and 06-topic-m5-laptop.png] topic-M5
    Question 1 (cond-A03): A card is drawn from a standard 52-card pack and is a court card (Jack, Queen or King). Find P(it is a Queen | it is a court card).
    [screenshot 07-question-1-phone.png and 07-question-1-laptop.png] question-1
      Step 1: "How many court cards are there in a standard pack?" — typed "12" (right) — app accepted "✓ Correct. There are 12 court cards: J, Q, K in each of 4 suits." — independent value 12
    [check] OK: cond-A03 step 1: "12" should be accepted — app accepted; independent value 12
    [screenshot 08-q1-step1-phone.png and 08-q1-step1-laptop.png] q1-step1
      Step 2: "Given the card is a court card, find P(it is a Queen)." — typed "0.3333" (right) — app accepted "✓ Correct. P(Queen | court card) = 4/12 = 1/3." — independent value 0.3333
    [check] OK: cond-A03 step 2: "0.3333" should be accepted — app accepted; independent value 0.3333
    Question 2 (tree-A04): A fair coin is tossed twice. Draw a tree diagram and use it to find P(exactly one head).
    [screenshot 09-question-2-phone.png and 09-question-2-laptop.png] question-2
      Step 1: student asks for a hint — "💡 Hint 1: First toss: H or T (each prob 1/2). Second toss: H or T (each 1/2)."
      Step 1: "In your tree diagram, identify the branches for exactly one head." — typed "2" (right) — app accepted "✓ Correct. Two branches give exactly one head: H then T, and T then H." — independent value 2
    [check] OK: tree-A04 step 1: "2" should be accepted — app accepted; independent value 2
    [screenshot 10-q2-step1-phone.png and 10-q2-step1-laptop.png] q2-step1
      Step 2: "Calculate P(exactly one head) by adding the probabilities of the two routes." — typed "1/2" (try) — app accepted "✓ Correct. P(exactly one head) = P(HT) + P(TH) = 1/4 + 1/4 = 1/2." — independent value 0.5
    [check] OK: tree-A04 step 2: "1/2" should be accepted — app accepted; independent value 0.5
    Question 3 (cond-A01): P(A) = 0.4 and P(A and B) = 0.2. Find P(B|A).
    [screenshot 11-question-3-phone.png and 11-question-3-laptop.png] question-3
    Student looks for the worked example: there is none in the topic test (by design; it is in practice).
      Step 1: "Use the formula P(B|A) = P(A and B) ÷ P(A). Calculate P(B|A)." — typed "0.5" (right) — app accepted "✓ Correct. P(B|A) = P(A and B) / P(A) = 0.2 / 0.4 = 0.5." — independent value 0.5
    [check] OK: cond-A01 step 1: "0.5" should be accepted — app accepted; independent value 0.5
      Step 2: "State your answer and interpret it briefly." — typed "0.5" (try) — app accepted "✓ Correct. P(B|A) = 0.5. Given A has occurred, P(B) becomes 0.5." — independent value 0.5
    [check] OK: cond-A01 step 2: "0.5" should be accepted — app accepted; independent value 0.5
    [screenshot 12-q3-step2-phone.png and 12-q3-step2-laptop.png] q3-step2
    Question 4 (venn-A02): A Venn diagram shows sets A and B. A only = 6, A and B = 4, B only = 8, neither = 2. Total = 20. Find P(A) and P(A').
    [screenshot 13-question-4-phone.png and 13-question-4-laptop.png] question-4
      Step 1: "Find P(A). n(A) = n(A only) + n(A and B)." — typed "1.63" (wrong) — app rejected "Not quite — check your working." — independent value 0.5
    [check] OK: venn-A02 step 1: "1.63" should be rejected — app rejected; independent value 0.5
      Step 1: "Find P(A). n(A) = n(A only) + n(A and B)." — typed "0.5" (right) — app accepted "✓ Correct. P(A) = (6+4)/20 = 10/20 = 1/2." — independent value 0.5
    [check] OK: venn-A02 step 1: "0.5" should be accepted — app accepted; independent value 0.5
      Step 2: "Find P(A') using the complement." — typed "0.7" (try) — app rejected "Not quite — check your working." — independent value 0.5
    [check] OK: venn-A02 step 2: "0.7" should be rejected — app rejected; independent value 0.5
    [screenshot 14-q4-step2-phone.png and 14-q4-step2-laptop.png] q4-step2
      Step 2: "Find P(A') using the complement." — typed "0.5" (right) — app accepted "✓ Correct. P(A') = 1 - 1/2 = 1/2." — independent value 0.5
    [check] OK: venn-A02 step 2: "0.5" should be accepted — app accepted; independent value 0.5
    Question 5 (prb-B05): A card is drawn at random from a standard 52-card pack. Find P(red queen) and P(red or queen), each as simplified fractions.
    [screenshot 15-question-5-phone.png and 15-question-5-laptop.png] question-5
      Step 1: "How many red queens are there? Find P(red queen) to 4 d.p." — typed "0.0385" (right) — app accepted "✓ Correct. P(red queen) = 2/52 = 1/26." — independent value 0.0385
    [check] OK: prb-B05 step 1: "0.0385" should be accepted — app accepted; independent value 0.0385
      Step 2: "Use the addition rule: P(red or queen) = P(red) + P(queen) - P(red queen)." — the student gives up here and leaves the question unfinished.
    [screenshot 16-question-5-left-unfinished-phone.png and 16-question-5-left-unfinished-laptop.png] question-5-left-unfinished
    Student taps Home and leaves the test.
    [screenshot 17-after-leaving-phone.png and 17-after-leaving-laptop.png] after-leaving
    Student comes back to the topic: "Carry on your topic test (question 5 of 10) →".
    [check] OK: coming back resumes the same test question — same question
    [screenshot 18-after-coming-back-phone.png and 18-after-coming-back-laptop.png] after-coming-back
