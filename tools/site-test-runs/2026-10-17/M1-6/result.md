# Site test: M1 (maths, 2026-10-17)

**PASS** · cost $0.1832 (5 tool calls, 0 calls from the site; tutor claude-sonnet-5-5 $0.0000)

## Judge

```json
{
  "broken": [],
  "looks_wrong": [
    {
      "what": "The header 'Topic test · question 1 of 10' wraps onto two lines and crowds against the progress dots.",
      "screenshot": "07-question-1-phone.png",
      "stops_use": false
    },
    {
      "what": "After a correct step, the header text changes to 'Good — keep going.' and the 'question X of 10' count disappears, so she loses track of where she is in the test.",
      "screenshot": "08-q1-step1-phone.png",
      "stops_use": false
    },
    {
      "what": "Warm-up feedback shows only the correct answer (7) with a red cross. Her own answer (9.75) is not shown, so she can't see what she got wrong.",
      "screenshot": "03-warm-up-3-phone.png",
      "stops_use": false
    },
    {
      "what": "Step 2 says 'write the error interval' but the only field is a single number box for the upper bound. The instruction doesn't match the input.",
      "screenshot": "08-q1-step1-laptop.png",
      "stops_use": false
    },
    {
      "what": "The button under 'Question 3 complete' / 'See sample answer' is cut off at the bottom edge and needs a scroll to reach.",
      "screenshot": "12-q3-step2-laptop.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "Question 5",
    "quote": "Step 2: \"Find the volume of one part.\" — the student gives up here and leaves the question unfinished.",
    "why": "Dividing 2.5 litres by 10 parts gives a decimal (0.25). The prompt doesn't say what to divide by, and there is no worked example in the test, so a bored student stalls and leaves."
  },
  "fixes": [
    {
      "target": "Topic test header (progress label)",
      "change": "Keep 'Question X of 10' visible at all times. Show 'Good — keep going.' as a separate small line or toast instead of replacing the count."
    },
    {
      "target": "nrt-B02 step 2 prompt",
      "change": "Reword to 'Find the volume of one part: divide 2.5 L by the total number of parts.' so the operation is clear without opening a hint."
    },
    {
      "target": "bnd-A04 / bnd-A05 step 2 prompt",
      "change": "Change to 'Find the upper bound.' and show the full error interval only in the feedback after a correct answer."
    },
    {
      "target": "Warm-up feedback card",
      "change": "Show 'You wrote: 9.75' above 'Answer: 7' when an answer is rejected."
    },
    {
      "target": "Topic test header on phone (390px)",
      "change": "Shorten the label to 'Q1 of 10', or let the dots wrap below, so the text fits on one line."
    }
  ]
}
```

## Transcript

    Maths topic M1 (Number).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    Warm-up offered.
    [screenshot 02-warm-up-phone.png and 02-warm-up-laptop.png] warm-up
    Warm-up 1: "65 − 60" — typed "5" — app accepted — true answer 5
    [check] OK: warm-up 1: "5" for 65 − 60 accepted — app accepted
    Warm-up 2: "5 × 13" — typed "65" — app accepted — true answer 65
    [check] OK: warm-up 2: "65" for 5 × 13 accepted — app accepted
    Warm-up 3: "21 ÷ 3" — typed "9.75" — app rejected — true answer 7
    [check] OK: warm-up 3: "9.75" for 21 ÷ 3 rejected — app rejected
    [screenshot 03-warm-up-3-phone.png and 03-warm-up-3-laptop.png] warm-up-3
    Warm-up 4: "Find 3/5 of 35" — typed "21" — app accepted — true answer 21
    [check] OK: warm-up 4: "21" for Find 3/5 of 35 accepted — app accepted
    Warm-up 5: "20% of 56" — typed "idk" — app rejected — true answer 11.2
    [check] OK: warm-up 5: "idk" for 20% of 56 rejected — app rejected
    [screenshot 04-warm-up-result-phone.png and 04-warm-up-result-laptop.png] warm-up-result
    [screenshot 05-maths-topics-phone.png and 05-maths-topics-laptop.png] maths-topics
    [screenshot 06-topic-m1-phone.png and 06-topic-m1-laptop.png] topic-M1
    Question 1 (bnd-A04): A distance is recorded as 8 km, rounded to the nearest kilometre. Write the error interval.
    [screenshot 07-question-1-phone.png and 07-question-1-laptop.png] question-1
      Step 1: "Find the lower bound." — typed "7.5" (right) — app accepted "✓ Correct. Lower bound = 8 − 0.5 = 7.5 km." — independent value 7.5
    [check] OK: bnd-A04 step 1: "7.5" should be accepted — app accepted; independent value 7.5
    [screenshot 08-q1-step1-phone.png and 08-q1-step1-laptop.png] q1-step1
      Step 2: "Find the upper bound and write the error interval. Enter the upper bound." — typed "8.5" (right) — app accepted "✓ Correct. Upper bound = 8.5 km. Error interval: 7.5 ≤ d < 8.5." — independent value 8.5
    [check] OK: bnd-A04 step 2: "8.5" should be accepted — app accepted; independent value 8.5
    Question 2 (pct-A04): Find 65% of 320.
    [screenshot 09-question-2-phone.png and 09-question-2-laptop.png] question-2
      Step 1: student asks for a hint — "💡 Hint 1: Divide the percentage by 100."
      Step 1: "Convert 65% to a decimal multiplier." — typed "0.65" (right) — app accepted "✓ Correct. Percentage ÷ 100 converts it to a decimal multiplier." — independent value 0.65
    [check] OK: pct-A04 step 1: "0.65" should be accepted — app accepted; independent value 0.65
    [screenshot 10-q2-step1-phone.png and 10-q2-step1-laptop.png] q2-step1
      Step 2: "Multiply 320 by your decimal to find 65% of 320." — typed "208" (try) — app accepted "✓ Correct. 320 × 0.65 = 208." — independent value 208
    [check] OK: pct-A04 step 2: "208" should be accepted — app accepted; independent value 208
    Question 3 (bnd-A05): A speed is recorded as 13.7 m/s to 1 decimal place. Write the error interval.
    [screenshot 11-question-3-phone.png and 11-question-3-laptop.png] question-3
    Student looks for the worked example: there is none in the topic test (by design; it is in practice).
      Step 1: "Find the lower bound." — typed "13.65" (right) — app accepted "✓ Correct. Lower bound = 13.7 − 0.05 = 13.65 m/s." — independent value 13.65
    [check] OK: bnd-A05 step 1: "13.65" should be accepted — app accepted; independent value 13.65
      Step 2: "Find the upper bound and write the error interval. Enter the upper bound." — typed "13.75" (try) — app accepted "✓ Correct. Upper bound = 13.75. Error interval: 13.65 ≤ v < 13.75." — independent value 13.75
    [check] OK: bnd-A05 step 2: "13.75" should be accepted — app accepted; independent value 13.75
    [screenshot 12-q3-step2-phone.png and 12-q3-step2-laptop.png] q3-step2
    Question 4 (pow-A04): Simplify 5³ ÷ 5⁴. Give your answer as a power of 5 and as a decimal.
    [screenshot 13-question-4-phone.png and 13-question-4-laptop.png] question-4
      Step 1: "Apply the division law for indices: subtract the powers." — typed "-0.25" (wrong) — app rejected "Not quite — check your working." — independent value -1
    [check] OK: pow-A04 step 1: "-0.25" should be rejected — app rejected; independent value -1
      Step 1: "Apply the division law for indices: subtract the powers." — typed "-1" (right) — app accepted "✓ Correct. 5³ ÷ 5⁴ = 5^(3−4) = 5⁻¹." — independent value -1
    [check] OK: pow-A04 step 1: "-1" should be accepted — app accepted; independent value -1
      Step 2: "Write 5⁻¹ as a decimal." — typed "0.2" (try) — app accepted "✓ Correct. 5⁻¹ = 1/5 = 0.2." — independent value 0.2
    [check] OK: pow-A04 step 2: "0.2" should be accepted — app accepted; independent value 0.2
    [screenshot 14-q4-step2-phone.png and 14-q4-step2-laptop.png] q4-step2
    Question 5 (nrt-B02): Orange juice and lemonade are mixed in the ratio 3 : 7. How much orange juice is needed to make 2.5 litres of the mixture?
    [screenshot 15-question-5-phone.png and 15-question-5-laptop.png] question-5
      Step 1: "Find the total number of parts." — typed "10" (right) — app accepted "✓ Correct. Total parts = 3 + 7 = 10." — independent value 10
    [check] OK: nrt-B02 step 1: "10" should be accepted — app accepted; independent value 10
      Step 2: "Find the volume of one part." — the student gives up here and leaves the question unfinished.
    [screenshot 16-question-5-left-unfinished-phone.png and 16-question-5-left-unfinished-laptop.png] question-5-left-unfinished
    Student taps Home and leaves the test.
    [screenshot 17-after-leaving-phone.png and 17-after-leaving-laptop.png] after-leaving
    Student comes back to the topic: "Carry on your topic test (question 5 of 10) →".
    [check] OK: coming back resumes the same test question — same question
    [screenshot 18-after-coming-back-phone.png and 18-after-coming-back-laptop.png] after-coming-back
