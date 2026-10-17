# Site test: M2 (maths, 2026-10-17)

**FAIL** · cost $0.2005 (5 tool calls, 0 calls from the site)

## Judge

```json
{
  "broken": [
    {
      "what": "Leaving the test loses all progress. After four questions answered correctly and one left unfinished, Home still shows 'Nothing secured yet', '0% across all subjects' and 'History: No sessions yet'. There is no 'resume topic test' option.",
      "step": "Student taps Home and leaves the test"
    },
    {
      "what": "The Error log still says 'All clear' even though the student got warm-up 3 and 5 wrong and typed '6' (wrong) on Question 4 step 1. Missed questions are not recorded.",
      "step": "18-after-leaving / Question 4 Step 1"
    },
    {
      "what": "Some steps award progress with no work. Question 1 step 1, Question 2 step 1 and Question 5 steps 1–2 are completed just by tapping 'Mark as understood', with no answer box. On Question 5 the student reached 'Solve for x' having never found the LCM (12) or the expanded equation.",
      "step": "Question 5 Steps 1–2"
    },
    {
      "what": "First visit with no history greets the student with 'Pick up where you left off — you were doing well.' That is false: the dashboard shows 0% and no sessions.",
      "step": "01-home"
    }
  ],
  "looks_wrong": [
    {
      "what": "The sticky header covers the progress strip. 'Topic test · question 3 of 10' is cut in half under the nav bar.",
      "screenshot": "11-question-3-laptop.png"
    },
    {
      "what": "The feedback strip 'Good — keep going.' is half hidden under the sticky header.",
      "screenshot": "13-q3-step2-laptop.png"
    },
    {
      "what": "The topic title is hidden under the header and the 'Take the topic test' button is cut off at the bottom edge.",
      "screenshot": "06-topic-m2-laptop.png"
    },
    {
      "what": "The question/worked-example tab bar sits under the header. Only an orange underline is visible, with no tab labels, so the student can't see how to open the worked example that step 1 tells them to read.",
      "screenshot": "11-question-3-phone.png"
    },
    {
      "what": "Step 1 says 'Read the worked example for this step', but there is no visible tab or link to the worked example on phone.",
      "screenshot": "07-question-1-phone.png"
    },
    {
      "what": "Locked step 2 still shows a bright-looking 'Mark as understood →' link under 'Finish step 1 first.', so it looks tappable.",
      "screenshot": "16-question-5-phone.png"
    }
  ],
  "would_quit": {
    "turn": "Question 5",
    "quote": "Step 3: \"Solve for x.\" — the student gives up here and leaves the question unfinished.",
    "why": "Steps 1–2 were just tap-throughs, so the student is suddenly asked for the whole answer (x = 11) with no scaffolding, and gives up."
  },
  "fixes": [
    {
      "target": "Topic test session state / Home dashboard",
      "change": "Save each answered step as it is checked. On Home, show 'Resume Algebra topic test (Q5 of 10)'. Update Dashboard, History and Error log, including logging the wrong '6' on Q4 step 1."
    },
    {
      "target": "eq-B01 steps 1–2 (and quad-A03 / ineq-A05 step 1)",
      "change": "Replace 'Mark as understood' with answer boxes: 'What is the LCM of 4 and 6?' (12) and 'After multiplying and expanding, 3x + 9 = ?' (4x − 2). Only award marks for these typed steps."
    },
    {
      "target": "Test page layout (sticky header)",
      "change": "Add top padding or scroll-margin equal to the header height (~56px) so the progress strip and the phone tab bar are never hidden under the header."
    },
    {
      "target": "Phone question view",
      "change": "Show a clearly labelled 'Question | Worked example' tab bar under the progress strip, or add a 'See worked example' button inside each step card that says to read it."
    },
    {
      "target": "Home greeting / locked step links",
      "change": "Use a first-visit greeting when there are no sessions. Render 'Mark as understood' on locked steps as disabled grey text, not green."
    }
  ]
}
```

## Transcript

    Maths topic M2 (Algebra).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    Warm-up offered.
    [screenshot 02-warm-up-phone.png and 02-warm-up-laptop.png] warm-up
    Warm-up 1: "50 + 24" — typed "74" — app accepted — true answer 74
    [check] OK: warm-up 1: "74" for 50 + 24 accepted — app accepted
    Warm-up 2: "4 × 15" — typed "60" — app accepted — true answer 60
    [check] OK: warm-up 2: "60" for 4 × 15 accepted — app accepted
    Warm-up 3: "104 ÷ 8" — typed "17.25" — app rejected — true answer 13
    [check] OK: warm-up 3: "17.25" for 104 ÷ 8 rejected — app rejected
    [screenshot 03-warm-up-3-phone.png and 03-warm-up-3-laptop.png] warm-up-3
    Warm-up 4: "Find 2/3 of 6" — typed "4" — app accepted — true answer 4
    [check] OK: warm-up 4: "4" for Find 2/3 of 6 accepted — app accepted
    Warm-up 5: "10% of 40" — typed "idk" — app rejected — true answer 4
    [check] OK: warm-up 5: "idk" for 10% of 40 rejected — app rejected
    [screenshot 04-warm-up-result-phone.png and 04-warm-up-result-laptop.png] warm-up-result
    [screenshot 05-maths-topics-phone.png and 05-maths-topics-laptop.png] maths-topics
    [screenshot 06-topic-m2-phone.png and 06-topic-m2-laptop.png] topic-M2
    Question 1 (quad-A03): Solve x² + 3x − 10 = 0 by factorising.
    [screenshot 07-question-1-phone.png and 07-question-1-laptop.png] question-1
      Step 1: "Find two numbers that multiply to −10 and add to 3." — marked as understood (no answer box).
      Step 2: "State the positive root." — typed "2" (right) — app accepted "✓ Correct. x = 2." — independent value 2
    [check] OK: quad-A03 step 2: "2" should be accepted — app accepted; independent value 2
    [screenshot 08-q1-step2-phone.png and 08-q1-step2-laptop.png] q1-step2
      Step 3: "State the negative root." — typed "-5" (right) — app accepted "✓ Correct. x = −5. Solutions: x = 2 or x = −5." — independent value -5
    [check] OK: quad-A03 step 3: "-5" should be accepted — app accepted; independent value -5
    Question 2 (ineq-A05): Solve the inequality 5 ≤ 2x + 1 < 11.
    [screenshot 09-question-2-phone.png and 09-question-2-laptop.png] question-2
      Step 1: "Subtract 1 from all three parts." — marked as understood (no answer box).
      Step 2: "Divide all three parts by 2. What is the left bound of x?" — typed "2" (try) — app accepted "✓ Correct. 2 ≤ x." — independent value 2
    [check] OK: ineq-A05 step 2: "2" should be accepted — app accepted; independent value 2
      Step 3: "What is the right bound of x?" — typed "5" (right) — app accepted "✓ Correct. x < 5. Solution: 2 ≤ x < 5." — independent value 5
    [check] OK: ineq-A05 step 3: "5" should be accepted — app accepted; independent value 5
    [screenshot 10-q2-step3-phone.png and 10-q2-step3-laptop.png] q2-step3
    Question 3 (ineq-A03): Solve the inequality 4x − 3 ≥ 9.
    [screenshot 11-question-3-phone.png and 11-question-3-laptop.png] question-3
    Student opens the worked example.
    [screenshot 12-worked-example-3-phone.png and 12-worked-example-3-laptop.png] worked-example-3
      Step 1: "Add 3 to both sides." — typed "12" (right) — app accepted "✓ Correct. 4x ≥ 12." — independent value 12
    [check] OK: ineq-A03 step 1: "12" should be accepted — app accepted; independent value 12
      Step 2: "Divide both sides by 4." — typed "x ≥ 3" (try) — app rejected "Type just your answer as a number, like 15." — independent value 3
    [check] OK: ineq-A03 step 2: "x ≥ 3" should be rejected — app rejected; independent value 3
      Step 2: "Divide both sides by 4." — typed "3" (right) — app accepted "✓ Correct. x ≥ 3." — independent value 3
    [check] OK: ineq-A03 step 2: "3" should be accepted — app accepted; independent value 3
    [screenshot 13-q3-step2-phone.png and 13-q3-step2-laptop.png] q3-step2
    Question 4 (gph-A05): Find the coordinates of the midpoint of the line segment joining (1, 3) and (7, 9).
    [screenshot 14-question-4-phone.png and 14-question-4-laptop.png] question-4
      Step 1: "Average the x-coordinates: (1 + 7) ÷ 2." — typed "6" (wrong) — app rejected "Not quite — check your working." — independent value 4
    [check] OK: gph-A05 step 1: "6" should be rejected — app rejected; independent value 4
      Step 1: "Average the x-coordinates: (1 + 7) ÷ 2." — typed "4" (right) — app accepted "✓ Correct. x-midpoint = (1 + 7)/2 = 4." — independent value 4
    [check] OK: gph-A05 step 1: "4" should be accepted — app accepted; independent value 4
      Step 2: "Average the y-coordinates: (3 + 9) ÷ 2." — typed "6" (try) — app accepted "✓ Correct. y-midpoint = (3 + 9)/2 = 6. Midpoint = (4, 6)." — independent value 6
    [check] OK: gph-A05 step 2: "6" should be accepted — app accepted; independent value 6
    [screenshot 15-q4-step2-phone.png and 15-q4-step2-laptop.png] q4-step2
    Question 5 (eq-B01): Solve (x + 3)/4 = (2x − 1)/6.
    [screenshot 16-question-5-phone.png and 16-question-5-laptop.png] question-5
      Step 1: "Eliminate the fractions by multiplying both sides by the LCM of 4 and 6." — marked as understood (no answer box).
      Step 2: "Expand both brackets." — marked as understood (no answer box).
      Step 3: "Solve for x." — the student gives up here and leaves the question unfinished.
    [screenshot 17-question-5-left-unfinished-phone.png and 17-question-5-left-unfinished-laptop.png] question-5-left-unfinished
    Student taps Home and leaves the test.
    [screenshot 18-after-leaving-phone.png and 18-after-leaving-laptop.png] after-leaving
