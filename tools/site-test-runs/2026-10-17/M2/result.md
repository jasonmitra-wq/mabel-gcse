# Site test: M2 (maths, 2026-10-17)

**FAIL** · cost $0.2124 (6 tool calls, 0 calls from the site)

## Judge

```json
{
  "broken": [
    {
      "what": "Q5 (3(x + 2) > 2(x + 5)) has no question id and no stored answer for step 1. The tool had nothing to submit except 'undefined'. The true answer, 6, could never be accepted, the test is stuck at question 5 of 10, and the topic test cannot be finished.",
      "step": "Question 5 Step 1: 'Expand the left bracket. What is 3 × 2?' typed 'undefined', app rejected"
    },
    {
      "what": "Later step prompts give away the answers to earlier steps before they are solved. Q1 step 2 says '4n + c' (reveals d = 4). Q2 step 2 says 'Substitute y = 3' (reveals step 1). Q3 step 3 says 'Substitute x = 3' (reveals step 2).",
      "step": "Question 1 Step 2 / Question 2 Step 2 / Question 3 Step 3"
    },
    {
      "what": "The Q4 step 1 prompt already contains the answer: '(x + 3)² = x² + 2(3)x + 9'. It gives both the coefficient (2×3) and the constant term (9) asked for in step 2.",
      "step": "Question 4 Step 1"
    },
    {
      "what": "After leaving the test, nothing was recorded. History says 'No sessions yet', Error log says 'All clear' despite the wrong Q4 attempt '8.5', and Dashboard shows 0%.",
      "step": "Student taps Home and leaves the test"
    },
    {
      "what": "A resource failed to load with a 404 error.",
      "step": "[console error] Failed to load resource: 404"
    },
    {
      "what": "automatic check failed: Q5 step 1 can be completed",
      "step": "right answer not accepted"
    }
  ],
  "looks_wrong": [
    {
      "what": "On the result screen ('3 out of 5'), all five progress bars are green even though 2 answers were wrong.",
      "screenshot": "04-warm-up-result-phone.png"
    },
    {
      "what": "The phone header title 'Mabel's GCSE Tutor' wraps to 3 lines and spills out of the header. 'Mabel's' is clipped at the top and 'Tutor' overlaps the 'Topic test · question 1 of 10' bar.",
      "screenshot": "07-question-1-phone.png"
    },
    {
      "what": "The page title 'Mabel's GCSE Tutor' is overlapped and clipped by the wrapped header text.",
      "screenshot": "19-after-leaving-phone.png"
    },
    {
      "what": "On phone, the feedback says 'Have a look at the example on the right', but there is no right-hand panel at phone width.",
      "screenshot": "15-q4-step1-phone.png"
    },
    {
      "what": "A hint box and a 'Still stuck — next hint' link still show inside step 1 after it was marked correct.",
      "screenshot": "10-q2-step1-laptop.png"
    },
    {
      "what": "The 'Take the topic test' button is cut off at the bottom of the screen.",
      "screenshot": "06-topic-m2-laptop.png"
    }
  ],
  "would_quit": {
    "turn": "Question 5",
    "quote": "Step 1 could not be completed; the question is stuck.",
    "why": "The right answer can never be accepted, there is no skip option, and the test cannot be finished, so a bored teen gives up."
  },
  "fixes": [
    {
      "target": "Question bank: Algebra test Q5 (inequality 3(x+2) > 2(x+5))",
      "change": "Add an id and stored answers for each step: step1 = 6, step2 = 10, step3 = 'x > 4' (also accept 4). Add a validation check that fails the build if any step has an undefined answer."
    },
    {
      "target": "Question bank: step prompts for seq-A04, sim-A02, sim-A05, quad-A04",
      "change": "Hide later step text until the previous step is solved, or rewrite it without the answer (e.g. 'Substitute your y value…'). Change the Q4 step 1 prompt to 'Expand (x + 3)². What is the coefficient of x?'"
    },
    {
      "target": "Header CSS at 390px width",
      "change": "Stop the title wrapping into the content: use white-space:nowrap with a smaller font size, or show only the logo below 480px, so the header keeps a fixed height."
    },
    {
      "target": "Warm-up result progress bar and test feedback text",
      "change": "Colour the warm-up result bars by correctness (red for wrong). On phone, say 'Tap Worked example to see the method' instead of 'on the right'."
    },
    {
      "target": "Session persistence on leaving the test",
      "change": "Save the partial test and the warm-up to History. Log wrong attempts (Q4 '8.5') to the Error log. Offer 'Resume test' on Home."
    }
  ]
}
```

## Transcript

    [console error] Failed to load resource: the server responded with a status of 404 (Not Found)
    Maths topic M2 (Algebra).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    Warm-up offered.
    [screenshot 02-warm-up-phone.png and 02-warm-up-laptop.png] warm-up
    Warm-up 1: "37 − 23" — typed "14" — app accepted — true answer 14
    [check] OK: warm-up 1: "14" for 37 − 23 accepted — app accepted
    Warm-up 2: "8 × 24" — typed "192" — app accepted — true answer 192
    [check] OK: warm-up 2: "192" for 8 × 24 accepted — app accepted
    Warm-up 3: "48 ÷ 4" — typed "16" — app rejected — true answer 12
    [check] OK: warm-up 3: "16" for 48 ÷ 4 rejected — app rejected
    [screenshot 03-warm-up-3-phone.png and 03-warm-up-3-laptop.png] warm-up-3
    Warm-up 4: "Find 1/4 of 24" — typed "6" — app accepted — true answer 6
    [check] OK: warm-up 4: "6" for Find 1/4 of 24 accepted — app accepted
    Warm-up 5: "10% of 56" — typed "idk" — app rejected — true answer 5.6
    [check] OK: warm-up 5: "idk" for 10% of 56 rejected — app rejected
    [screenshot 04-warm-up-result-phone.png and 04-warm-up-result-laptop.png] warm-up-result
    [screenshot 05-maths-topics-phone.png and 05-maths-topics-laptop.png] maths-topics
    [screenshot 06-topic-m2-phone.png and 06-topic-m2-laptop.png] topic-M2
    Question 1 (seq-A04): Find the nth term of the arithmetic sequence 2, 6, 10, 14, ...
    [screenshot 07-question-1-phone.png and 07-question-1-laptop.png] question-1
      Step 1: "Find the common difference d." — typed "4" (right) — app accepted "✓ Correct. d = 6 − 2 = 4." — independent value 4
    [check] OK: seq-A04 step 1: "4" should be accepted — app accepted; independent value 4
    [screenshot 08-q1-step1-phone.png and 08-q1-step1-laptop.png] q1-step1
      Step 2: "nth term = 4n + c. Use the first term (n = 1) to find c." — typed "-2" (right) — app accepted "✓ Correct. 4(1) + c = 2 → c = −2. nth term = 4n − 2." — independent value -2
    [check] OK: seq-A04 step 2: "-2" should be accepted — app accepted; independent value -2
    Question 2 (sim-A02): Solve: 3x + 2y = 16 and 3x − y = 7.
    [screenshot 09-question-2-phone.png and 09-question-2-laptop.png] question-2
      Step 1: student asks for a hint — "💡 Hint 1: (3x + 2y) − (3x − y) = 16 − 7."
      Step 1: "Subtract equation 2 from equation 1, then find y." — typed "3" (right) — app accepted "✓ Correct. 2y − (−y) = 3y. 3y = 9 → y = 3." — independent value 3
    [check] OK: sim-A02 step 1: "3" should be accepted — app accepted; independent value 3
    [screenshot 10-q2-step1-phone.png and 10-q2-step1-laptop.png] q2-step1
      Step 2: "Substitute y = 3 into 3x − y = 7 and solve for x. Give x to 2 decimal places." — typed "3.33" (try) — app accepted "✓ Correct. 3x = 10 → x = 10/3." — independent value 3.3333
    [check] OK: sim-A02 step 2: "3.33" should be accepted — app accepted; independent value 3.3333
    Question 3 (sim-A05): Solve the simultaneous equations: 5x − y = 9 and 2x + y = 12.
    [screenshot 11-question-3-phone.png and 11-question-3-laptop.png] question-3
    Student opens the worked example.
    [screenshot 12-worked-example-3-phone.png and 12-worked-example-3-laptop.png] worked-example-3
      Step 1: "Add the two equations to eliminate y. 7x = ?" — typed "21" (right) — app accepted "✓ Correct. Adding: 7x = 21." — independent value 21
    [check] OK: sim-A05 step 1: "21" should be accepted — app accepted; independent value 21
      Step 2: "Find x." — typed "3" (try) — app accepted "✓ Correct. x = 21/7 = 3." — independent value 3
    [check] OK: sim-A05 step 2: "3" should be accepted — app accepted; independent value 3
    [screenshot 13-q3-step2-phone.png and 13-q3-step2-laptop.png] q3-step2
      Step 3: "Substitute x = 3 into 2x + y = 12." — typed "6" (right) — app accepted "✓ Correct. 6 + y = 12 → y = 6." — independent value 6
    [check] OK: sim-A05 step 3: "6" should be accepted — app accepted; independent value 6
      Step 4: "Verify in the first equation: 5(3) − 6 = ?" — typed "9" (try) — app accepted "✓ Correct. 5(3)−6=9 ✓. Solution: x=3, y=6." — independent value 9
    [check] OK: sim-A05 step 4: "9" should be accepted — app accepted; independent value 9
    Question 4 (quad-A04): Expand (x + 3)². State the coefficient of x and the constant term.
    [screenshot 14-question-4-phone.png and 14-question-4-laptop.png] question-4
      Step 1: "(x + 3)² = x² + 2(3)x + 9. What is the coefficient of x?" — typed "8.5" (wrong) — app rejected "Not quite — check your working." — independent value 6
    [check] OK: quad-A04 step 1: "8.5" should be rejected — app rejected; independent value 6
    [screenshot 15-q4-step1-phone.png and 15-q4-step1-laptop.png] q4-step1
      Step 1: "(x + 3)² = x² + 2(3)x + 9. What is the coefficient of x?" — typed "6" (right) — app accepted "✓ Correct. (x+3)² = x²+6x+9. Coefficient of x = 6." — independent value 6
    [check] OK: quad-A04 step 1: "6" should be accepted — app accepted; independent value 6
      Step 2: "What is the constant term?" — typed "9" (try) — app accepted "✓ Correct. Constant term = 3² = 9." — independent value 9
    [check] OK: quad-A04 step 2: "9" should be accepted — app accepted; independent value 9
    Question 5: Solve the inequality 3(x + 2) &gt; 2(x + 5).
    [screenshot 16-question-5-phone.png and 16-question-5-laptop.png] question-5
      Step 1: "Expand the left bracket. What is 3 × 2?" — typed "undefined" (right) — app rejected "Not quite — check your working." — no independent value (stored answer used to move on)
    [screenshot 17-q5-step1-phone.png and 17-q5-step1-laptop.png] q5-step1
      Step 1 could not be completed; the question is stuck.
    [check] BROKEN: Q5 step 1 can be completed — right answer not accepted
    [screenshot 18-question-5-left-unfinished-phone.png and 18-question-5-left-unfinished-laptop.png] question-5-left-unfinished
    Student taps Home and leaves the test.
    [screenshot 19-after-leaving-phone.png and 19-after-leaving-laptop.png] after-leaving
