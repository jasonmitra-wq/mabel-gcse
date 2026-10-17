# Site test: M4 (maths, 2026-10-17)

**FAIL** · cost $0.1960 (5 tool calls, 0 calls from the site)

## Judge

```json
{
  "broken": [
    {
      "what": "A resource failed to load with a 404 error.",
      "step": "[console error] Failed to load resource: the server responded with a status of 404"
    },
    {
      "what": "Progress was not saved. After 4 questions answered in the topic test, one wrong attempt (901) and 2 wrong warm-up answers, home still shows 'Nothing secured yet', '0% across all subjects', Error log 'All clear' and History 'No sessions yet'. The unfinished test has no resume option.",
      "step": "Student taps Home and leaves the test"
    },
    {
      "what": "The step 2 answer box only takes a number with a '°' unit. 'Describe fully' needs a direction and a centre (90° anticlockwise about the origin), and the box gives no way to enter a direction.",
      "step": "Question 5 Step 2: (x, y) → (−y, x) corresponds to which rotation about the origin?"
    },
    {
      "what": "The step counter stays at 'Step 1 of 2' with an empty progress bar after step 1 is ticked.",
      "step": "Question 5 Step 1 marked as understood"
    },
    {
      "what": "The question says 'The longer side of the larger is 15 cm'. A triangle has three sides, so this should say 'longest'.",
      "step": "Question 3 (shp-A01)"
    }
  ],
  "looks_wrong": [
    {
      "what": "The site title 'Mabel's GCSE Tutor' wraps onto 3 lines in the phone header, and the top line 'Mabel's' is cut off.",
      "screenshot": "01-home-phone.png"
    },
    {
      "what": "The header title is still clipped and wrapped over 3 lines, crowding the nav buttons.",
      "screenshot": "07-question-1-phone.png"
    },
    {
      "what": "The 'Topic test · question 1 of 10' bar is half hidden under the sticky top nav.",
      "screenshot": "07-question-1-laptop.png"
    },
    {
      "what": "All 5 warm-up progress bars are green although 2 of 5 answers were wrong (the score says 3 out of 5).",
      "screenshot": "04-warm-up-result-phone.png"
    },
    {
      "what": "The answer box placeholder is cut off as 'Your answe', squeezed by the 'units' label.",
      "screenshot": "09-question-2-phone.png"
    },
    {
      "what": "The status line reads 'Good — keep going.' and the question number is gone, so the student loses track of position.",
      "screenshot": "08-q1-step1-phone.png"
    },
    {
      "what": "Step 1 shows a tick but 'Mark as understood →' is still shown, and the footer still says 'Step 1 of 2' with an empty bar.",
      "screenshot": "16-question-5-left-unfinished-laptop.png"
    },
    {
      "what": "The worked example shows (x,y)→(y,−x) = 90° clockwise right next to a question about the opposite mapping, which invites the wrong answer.",
      "screenshot": "15-question-5-laptop.png"
    }
  ],
  "would_quit": {
    "turn": "Question 5",
    "quote": "(x, y) → (−y, x) corresponds to which rotation about the origin?",
    "why": "The box only takes degrees with no way to give a direction, and the worked example points the wrong way (clockwise). The student can't tell what to type, so they give up."
  },
  "fixes": [
    {
      "target": "topic test behaviour: answer checking and leaving the test",
      "change": "Save each step result as soon as it is checked. Then update the Dashboard, History, Error log (including the 901 attempt) and the M4 '0 of 9 attempted' count. Show 'Resume test – question 5 of 10' on home."
    },
    {
      "target": "tr-B01 step 2 input",
      "change": "Replace the '°'-only box with an angle field (90/180/270) plus a clockwise/anticlockwise choice. Accept '90 anticlockwise' or '270 clockwise'. Add a step 3 for the centre (origin)."
    },
    {
      "target": "header CSS at widths under 480px",
      "change": "Hide the 'Mabel's GCSE Tutor' text or set white-space:nowrap with ellipsis, keeping only the logo. Offset the sticky test status bar by the nav height so 'question N of 10' is never covered."
    },
    {
      "target": "warm-up result progress bars",
      "change": "Colour each bar by its result: green for correct, red/orange for wrong (Q3 and Q5 here) to match '3 out of 5'."
    },
    {
      "target": "step progress footer and shp-A01 question text",
      "change": "Update 'Step X of Y' and the bar when a step is completed, and hide 'Mark as understood' once ticked. Change 'The longer side of the larger' to 'The longest side of the larger'."
    }
  ]
}
```

## Transcript

    [console error] Failed to load resource: the server responded with a status of 404 (Not Found)
    Maths topic M4 (Geometry & Measures).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    Warm-up offered.
    [screenshot 02-warm-up-phone.png and 02-warm-up-laptop.png] warm-up
    Warm-up 1: "70 − 32" — typed "38" — app accepted — true answer 38
    [check] OK: warm-up 1: "38" for 70 − 32 accepted — app accepted
    Warm-up 2: "6 × 12" — typed "72" — app accepted — true answer 72
    [check] OK: warm-up 2: "72" for 6 × 12 accepted — app accepted
    Warm-up 3: "24 ÷ 2" — typed "16" — app rejected — true answer 12
    [check] OK: warm-up 3: "16" for 24 ÷ 2 rejected — app rejected
    [screenshot 03-warm-up-3-phone.png and 03-warm-up-3-laptop.png] warm-up-3
    Warm-up 4: "Find 3/4 of 32" — typed "24" — app accepted — true answer 24
    [check] OK: warm-up 4: "24" for Find 3/4 of 32 accepted — app accepted
    Warm-up 5: "25% of 48" — typed "idk" — app rejected — true answer 12
    [check] OK: warm-up 5: "idk" for 25% of 48 rejected — app rejected
    [screenshot 04-warm-up-result-phone.png and 04-warm-up-result-laptop.png] warm-up-result
    [screenshot 05-maths-topics-phone.png and 05-maths-topics-laptop.png] maths-topics
    [screenshot 06-topic-m4-phone.png and 06-topic-m4-laptop.png] topic-M4
    Question 1 (av-A01): Find the area of a circle with radius 6 cm. Give your answer in terms of π.
    [screenshot 07-question-1-phone.png and 07-question-1-laptop.png] question-1
      Step 1: "Use the formula: A = πr². Enter the number in front of π." — typed "36" (right) — app accepted "✓ Correct. A = π × 6² = 36π cm²." — independent value 36
    [check] OK: av-A01 step 1: "36" should be accepted — app accepted; independent value 36
    [screenshot 08-q1-step1-phone.png and 08-q1-step1-laptop.png] q1-step1
    Question 2 (pyth-A04): Find the distance between points (1, 2) and (7, 10).
    [screenshot 09-question-2-phone.png and 09-question-2-laptop.png] question-2
      Step 1: "Find the horizontal and vertical distances." — marked as understood (no answer box).
      Step 2: "Use Pythagoras: distance = √(6² + 8²)." — typed "10" (try) — app accepted "✓ Correct. √(36+64) = √100 = 10." — independent value 10
    [check] OK: pyth-A04 step 2: "10" should be accepted — app accepted; independent value 10
    Question 3 (shp-A01): Two triangles are similar. The smaller has sides 3 cm, 4 cm, 5 cm. The longer side of the larger is 15 cm. Find the scale factor and the other two sides.
    [screenshot 10-question-3-phone.png and 10-question-3-laptop.png] question-3
    Student opens the worked example.
    [screenshot 11-worked-example-3-phone.png and 11-worked-example-3-laptop.png] worked-example-3
      Step 1: "Find the scale factor: longer side of large ÷ corresponding side of small." — typed "3" (right) — app accepted "✓ Correct. Scale factor = 15/5 = 3." — independent value 3
    [check] OK: shp-A01 step 1: "3" should be accepted — app accepted; independent value 3
      Step 2: "Find the other sides of the larger triangle. Enter the longer of the two." — typed "12" (try) — app accepted "✓ Correct. Other sides: 3×3=9 cm and 4×3=12 cm." — independent value 12
    [check] OK: shp-A01 step 2: "12" should be accepted — app accepted; independent value 12
    [screenshot 12-q3-step2-phone.png and 12-q3-step2-laptop.png] q3-step2
    Question 4 (ang-A02): Find the interior angle of a regular hexagon.
    [screenshot 13-question-4-phone.png and 13-question-4-laptop.png] question-4
      Step 1: "Find the sum of interior angles of a hexagon using (n − 2) × 180°." — typed "901" (wrong) — app rejected "Not quite — check your working." — independent value 720
    [check] OK: ang-A02 step 1: "901" should be rejected — app rejected; independent value 720
      Step 1: "Find the sum of interior angles of a hexagon using (n − 2) × 180°." — typed "720" (right) — app accepted "✓ Correct. Sum of interior angles = (6−2) × 180 = 720°." — independent value 720
    [check] OK: ang-A02 step 1: "720" should be accepted — app accepted; independent value 720
      Step 2: "Divide by the number of sides to get one interior angle." — typed "120" (try) — app accepted "✓ Correct. Each interior angle = 720 ÷ 6 = 120°." — independent value 120
    [check] OK: ang-A02 step 2: "120" should be accepted — app accepted; independent value 120
    [screenshot 14-q4-step2-phone.png and 14-q4-step2-laptop.png] q4-step2
    Question 5 (tr-B01): Describe fully the transformation that maps point (3, 1) to (−1, 3).
    [screenshot 15-question-5-phone.png and 15-question-5-laptop.png] question-5
      Step 1: "Check if it could be a rotation. Does the distance from the origin stay the same?" — marked as understood (no answer box).
      Step 2: "(x, y) → (−y, x) corresponds to which rotation about the origin?" — the student gives up here and leaves the question unfinished.
    [screenshot 16-question-5-left-unfinished-phone.png and 16-question-5-left-unfinished-laptop.png] question-5-left-unfinished
    Student taps Home and leaves the test.
    [screenshot 17-after-leaving-phone.png and 17-after-leaving-laptop.png] after-leaving
