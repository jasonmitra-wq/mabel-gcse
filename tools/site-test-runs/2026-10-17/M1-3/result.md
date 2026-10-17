# Site test: M1 (maths, 2026-10-17)

**FAIL** · cost $0.1696 (4 tool calls, 0 calls from the site)

## Judge

```json
{
  "broken": [
    {
      "what": "Topic test Question 4 has no answer box. Step 1 is only 'Mark as understood', so the student never orders the numbers. Yet the progress dots on question 5 show question 4 as green (done/correct). A mark is given for no answer.",
      "step": "Question 4 (int-A03) Step 1"
    },
    {
      "what": "Question 3 step 1 is also a 'mark as understood' step with nothing to answer. Marks for a 2-mark test question partly come from tapping a link.",
      "step": "Question 3 (int-A04) Step 1"
    },
    {
      "what": "After leaving, home says 'Pick up where you left off — you were doing well.' There is no resume button or card on the page.",
      "step": "Student taps Home and leaves the test"
    },
    {
      "what": "Progress is not recorded after answering 4 test questions. Dashboard still shows 'Nothing secured yet' and '0% across all subjects', and History shows 'No sessions yet'.",
      "step": "Student taps Home and leaves the test"
    },
    {
      "what": "On laptop, the worked example sits next to the topic test question and uses near-identical steps (3⁴ × 3² = 3⁶ beside 2⁵ × 2³). This gives away the method and answer during a scored test.",
      "step": "Question 1 (pow-A01)"
    }
  ],
  "looks_wrong": [
    {
      "what": "Unit label 'L' sits to the left of the answer box and looks like a stray letter. It should come after the box, e.g. 'litres'.",
      "screenshot": "15-question-5-left-unfinished-phone.png"
    },
    {
      "what": "Unit 'L' appears before the disabled step 2 and step 3 boxes.",
      "screenshot": "14-question-5-laptop.png"
    },
    {
      "what": "Feedback uses caret notation '2^(5+3)', mixed in with superscripts '2⁵ × 2³ = 2⁸'.",
      "screenshot": "08-q1-step1-phone.png"
    },
    {
      "what": "Worked example uses caret '3^(4+2)' next to superscript powers.",
      "screenshot": "07-question-1-laptop.png"
    },
    {
      "what": "Hint box 'Hint 1: 24 ÷ 3 = ?' is shown below the 'Correct' feedback, out of order after the step is already solved.",
      "screenshot": "10-q2-step2-phone.png"
    }
  ],
  "would_quit": {
    "turn": "Question 5",
    "quote": "Step 2: \"Find the volume of one part.\" — the student gives up here and leaves the question unfinished.",
    "why": "2.5 ÷ 10 is decimal division with a confusing 'L' before the box. Home then promises 'pick up where you left off' but gives no way back."
  },
  "fixes": [
    {
      "target": "Question int-A03 step 1",
      "change": "Replace 'Mark as understood' with an answer box that checks the order 0.043, 0.304, 0.34, 0.43. Only mark the question green when it is answered correctly."
    },
    {
      "target": "Home page resume message",
      "change": "When a test is unfinished, show a 'Resume Number topic test — question 5 of 10' button that opens the saved question."
    },
    {
      "target": "Dashboard/History saving",
      "change": "Save each answered topic-test step on submit, so Dashboard % and History update after leaving mid-test."
    },
    {
      "target": "Answer input unit label (steps with units)",
      "change": "Render the unit as a suffix after the input ('[ 0.25 ] litres'), not a prefix 'L'."
    },
    {
      "target": "Topic test worked-example panel",
      "change": "Hide the worked example during topic tests, or collapse it behind a 'Show example' button. Replace '^(...)' with superscript formatting."
    }
  ]
}
```

## Transcript

    Maths topic M1 (Number).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    Warm-up offered.
    [screenshot 02-warm-up-phone.png and 02-warm-up-laptop.png] warm-up
    Warm-up 1: "43 − 13" — typed "30" — app accepted — true answer 30
    [check] OK: warm-up 1: "30" for 43 − 13 accepted — app accepted
    Warm-up 2: "8 × 6" — typed "48" — app accepted — true answer 48
    [check] OK: warm-up 2: "48" for 8 × 6 accepted — app accepted
    Warm-up 3: "30 ÷ 3" — typed "13.5" — app rejected — true answer 10
    [check] OK: warm-up 3: "13.5" for 30 ÷ 3 rejected — app rejected
    [screenshot 03-warm-up-3-phone.png and 03-warm-up-3-laptop.png] warm-up-3
    Warm-up 4: "Find 3/4 of 8" — typed "6" — app accepted — true answer 6
    [check] OK: warm-up 4: "6" for Find 3/4 of 8 accepted — app accepted
    Warm-up 5: "50% of 56" — typed "idk" — app rejected — true answer 28
    [check] OK: warm-up 5: "idk" for 50% of 56 rejected — app rejected
    [screenshot 04-warm-up-result-phone.png and 04-warm-up-result-laptop.png] warm-up-result
    [screenshot 05-maths-topics-phone.png and 05-maths-topics-laptop.png] maths-topics
    [screenshot 06-topic-m1-phone.png and 06-topic-m1-laptop.png] topic-M1
    Question 1 (pow-A01): Work out 2⁵ × 2³, giving your answer as a power of 2.
    [screenshot 07-question-1-phone.png and 07-question-1-laptop.png] question-1
      Step 1: "Use the multiplication law: aᵐ × aⁿ = aᵐ⁺ⁿ. Add the powers. Enter the new power of 2." — typed "8" (right) — app accepted "✓ Correct. 2⁵ × 2³ = 2^(5+3) = 2⁸. (= 256)" — independent value 8
    [check] OK: pow-A01 step 1: "8" should be accepted — app accepted; independent value 8
    [screenshot 08-q1-step1-phone.png and 08-q1-step1-laptop.png] q1-step1
    Question 2 (nrt-A01): In a bag there are red and blue counters in the ratio 3 : 5. There are 24 red counters. How many blue counters are there?
    [screenshot 09-question-2-phone.png and 09-question-2-laptop.png] question-2
      Step 1: student asks for a hint — "💡 Hint 1: 24 ÷ 3 = ?"
      Step 1: "Find the value of one part. 3 parts = 24 red counters." — typed "8" (right) — app accepted "✓ Correct. 3 parts = 24, so 1 part = 24 ÷ 3 = 8." — independent value 8
    [check] OK: nrt-A01 step 1: "8" should be accepted — app accepted; independent value 8
      Step 2: "Calculate the number of blue counters (5 parts)." — typed "40" (try) — app accepted "✓ Correct. Blue = 5 parts = 5 × 8 = 40." — independent value 40
    [check] OK: nrt-A01 step 2: "40" should be accepted — app accepted; independent value 40
    [screenshot 10-q2-step2-phone.png and 10-q2-step2-laptop.png] q2-step2
    Question 3 (int-A04): Round 345,679 to the nearest 10,000.
    [screenshot 11-question-3-phone.png and 11-question-3-laptop.png] question-3
    Student opens the worked example.
    [screenshot 12-worked-example-3-phone.png and 12-worked-example-3-laptop.png] worked-example-3
      Step 1: "Identify the ten-thousands digit and the digit to its right." — marked as understood (no answer box).
      Step 2: "Write the rounded number." — typed "350000" (try) — app accepted "✓ Correct. 345,679 rounded to nearest 10,000 = 350,000." — independent value 350000
    [check] OK: int-A04 step 2: "350000" should be accepted — app accepted; independent value 350000
    Question 4 (int-A03): Write these numbers in order, smallest first: 0.34, 0.304, 0.043, 0.43
    [screenshot 13-question-4-phone.png and 13-question-4-laptop.png] question-4
      Step 1: "Compare the digits column by column. Which is smallest?" — marked as understood (no answer box).
    Question 5 (nrt-B02): Orange juice and lemonade are mixed in the ratio 3 : 7. How much orange juice is needed to make 2.5 litres of the mixture?
    [screenshot 14-question-5-phone.png and 14-question-5-laptop.png] question-5
      Step 1: "Find the total number of parts." — typed "10" (right) — app accepted "✓ Correct. Total parts = 3 + 7 = 10." — independent value 10
    [check] OK: nrt-B02 step 1: "10" should be accepted — app accepted; independent value 10
      Step 2: "Find the volume of one part." — the student gives up here and leaves the question unfinished.
    [screenshot 15-question-5-left-unfinished-phone.png and 15-question-5-left-unfinished-laptop.png] question-5-left-unfinished
    Student taps Home and leaves the test.
    [screenshot 16-after-leaving-phone.png and 16-after-leaving-laptop.png] after-leaving
