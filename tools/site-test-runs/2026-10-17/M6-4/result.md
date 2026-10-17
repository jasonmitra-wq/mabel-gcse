# Site test: M6 (maths, 2026-10-17)

**FAIL** · cost $0.1828 (4 tool calls, 0 calls from the site; tutor claude-sonnet-5-5 $0.0000)

## Judge

```json
{
  "broken": [
    {
      "what": "Question 4 asks for 'the fraction of data it represents', but step 2 has no answer box and no worked answer. The student taps Next and never enters or sees 7/36 (70/360), so half the question is never checked.",
      "step": "Question 4 (stat-charts-A05) Step 2: 'Express the fourth sector as a fraction of the whole.'"
    },
    {
      "what": "Question 5 step 1 says 'State the minimum and maximum values' but only checks the maximum. The minimum (12) is never entered.",
      "step": "Question 5 (stat-boxplots-B03) Step 1"
    }
  ],
  "looks_wrong": [
    {
      "what": "The degree sign '°' sits on its own to the left of the answer box, as if it were a prefix, instead of after the number.",
      "screenshot": "07-question-1-phone.png",
      "stops_use": false
    },
    {
      "what": "After an answer, the header text 'Topic test · question 1 of 10' is replaced by 'Good — keep going.', so the question count disappears.",
      "screenshot": "08-q1-step1-phone.png",
      "stops_use": false
    },
    {
      "what": "Question 4 shows '1 mark' even though it has two parts (angle and fraction).",
      "screenshot": "13-question-4-laptop.png",
      "stops_use": false
    },
    {
      "what": "The home page subject list reads 'Biology · Chemistry · Physics · Geography · Sociology' and leaves out Maths, the subject she is studying.",
      "screenshot": "01-home-phone.png",
      "stops_use": false
    },
    {
      "what": "The empty step 2 box under question 4 looks like a dead end: just a statement and a Next button, with no input and no answer shown.",
      "screenshot": "14-q4-step1-phone.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "Question 5",
    "quote": "Step 2: \"Find the median (middle value of 9 data points).\" — the student gives up here",
    "why": "This is a 4-mark question with several steps still locked below, at only question 5 of 10. A bored student sees a long grind ahead and gets no help unless she taps a small hint link."
  },
  "fixes": [
    {
      "target": "stat-charts-A05 step 2",
      "change": "Add an answer box that accepts 7/36 (and equivalents such as 70/360 or 0.194). Show the working 70/360 = 7/36 on submit, and set the question to 2 marks."
    },
    {
      "target": "stat-boxplots-B03 step 1",
      "change": "Split into two inputs (min = 12, max = 40), or reword the step to 'Enter the maximum value.'"
    },
    {
      "target": "Step input unit label",
      "change": "Render the unit '°' as a suffix inside or after the input (e.g. '[ 90 ] °') rather than to the left of it."
    },
    {
      "target": "Topic test header",
      "change": "Keep 'Question N of 10' visible at all times and show encouragement text on a second line or as a toast."
    },
    {
      "target": "Home 'Revise a topic' card subject list",
      "change": "Include Maths in the list: 'Maths · Biology · Chemistry · Physics · Geography · Sociology'."
    }
  ]
}
```

## Transcript

    Maths topic M6 (Statistics).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    Warm-up offered.
    [screenshot 02-warm-up-phone.png and 02-warm-up-laptop.png] warm-up
    Warm-up 1: "30 − 8" — typed "22" — app accepted — true answer 22
    [check] OK: warm-up 1: "22" for 30 − 8 accepted — app accepted
    Warm-up 2: "10 × 9" — typed "90" — app accepted — true answer 90
    [check] OK: warm-up 2: "90" for 10 × 9 accepted — app accepted
    Warm-up 3: "117 ÷ 9" — typed "17.25" — app rejected — true answer 13
    [check] OK: warm-up 3: "17.25" for 117 ÷ 9 rejected — app rejected
    [screenshot 03-warm-up-3-phone.png and 03-warm-up-3-laptop.png] warm-up-3
    Warm-up 4: "Find 2/5 of 40" — typed "16" — app accepted — true answer 16
    [check] OK: warm-up 4: "16" for Find 2/5 of 40 accepted — app accepted
    Warm-up 5: "25% of 12" — typed "idk" — app rejected — true answer 3
    [check] OK: warm-up 5: "idk" for 25% of 12 rejected — app rejected
    [screenshot 04-warm-up-result-phone.png and 04-warm-up-result-laptop.png] warm-up-result
    [screenshot 05-maths-topics-phone.png and 05-maths-topics-laptop.png] maths-topics
    [screenshot 06-topic-m6-phone.png and 06-topic-m6-laptop.png] topic-M6
    Question 1 (stat-charts-A02): 120 people were surveyed about their favourite pet. 30 chose cats, 50 chose dogs, 40 chose rabbits. Calculate the pie chart angle for each pet.
    [screenshot 07-question-1-phone.png and 07-question-1-laptop.png] question-1
      Step 1: "Calculate the angle for cats." — typed "90" (right) — app accepted "✓ Correct. Cats: (30/120) × 360 = 0.25 × 360 = 90°." — independent value 90
    [check] OK: stat-charts-A02 step 1: "90" should be accepted — app accepted; independent value 90
    [screenshot 08-q1-step1-phone.png and 08-q1-step1-laptop.png] q1-step1
      Step 2: "Calculate the angle for dogs." — typed "150" (right) — app accepted "✓ Correct. Dogs: (50/120) × 360 = 150°." — independent value 150
    [check] OK: stat-charts-A02 step 2: "150" should be accepted — app accepted; independent value 150
      Step 3: "Calculate the angle for rabbits. Check all three sum to 360°." — typed "120" (right) — app accepted "✓ Correct. Rabbits: (40/120) × 360 = 120°. Total: 90+150+120 = 360° ✓." — independent value 120
    [check] OK: stat-charts-A02 step 3: "120" should be accepted — app accepted; independent value 120
    Question 2 (stat-sampling-A04): Systematic sampling is used from a list of 400 names. A sample of 20 is needed. (a) Find the sampling interval. (b) If the first person selected is number 7, what is the number of the next person selected?
    [screenshot 09-question-2-phone.png and 09-question-2-laptop.png] question-2
      Step 1: student asks for a hint — "💡 Hint 1: Sampling interval = population size ÷ sample size"
    [screenshot 10-q2-hint-phone.png and 10-q2-hint-laptop.png] q2-hint
      Step 1: "Calculate the sampling interval." — typed "20" (right) — app accepted "✓ Correct. Sampling interval = 400 ÷ 20 = 20. Every 20th person is selected." — independent value 20
    [check] OK: stat-sampling-A04 step 1: "20" should be accepted — app accepted; independent value 20
      Step 2: "If the first person is number 7, what is the next person selected?" — typed "27" (try) — app accepted "✓ Correct. Next person = first + interval = 7 + 20 = 27." — independent value 27
    [check] OK: stat-sampling-A04 step 2: "27" should be accepted — app accepted; independent value 27
    Question 3 (stat-sampling-A03): A sample of 50 products contains 12 defective items. Estimate the number of defective items in a batch of 500.
    [screenshot 11-question-3-phone.png and 11-question-3-laptop.png] question-3
    Student looks for the worked example: there is none in the topic test (by design; it is in practice).
      Step 1: "Calculate the proportion of defective items in the sample." — typed "0.24" (right) — app accepted "✓ Correct. Proportion defective = 12 ÷ 50 = 0.24 (24%)." — independent value 0.24
    [check] OK: stat-sampling-A03 step 1: "0.24" should be accepted — app accepted; independent value 0.24
    [screenshot 12-q3-step1-phone.png and 12-q3-step1-laptop.png] q3-step1
      Step 2: "Estimate the total defective items in a batch of 500." — typed "120" (try) — app accepted "✓ Correct. Estimated defectives = 0.24 × 500 = 120 items." — independent value 120
    [check] OK: stat-sampling-A03 step 2: "120" should be accepted — app accepted; independent value 120
    Question 4 (stat-charts-A05): A pie chart has four sectors. Three of the angles are 90°, 120° and 80°. Find the fourth angle and the fraction of data it represents.
    [screenshot 13-question-4-phone.png and 13-question-4-laptop.png] question-4
      Step 1: "Find the fourth angle." — typed "88.5" (wrong) — app rejected "Not quite — check your working." — independent value 70
    [check] OK: stat-charts-A05 step 1: "88.5" should be rejected — app rejected; independent value 70
      Step 1: "Find the fourth angle." — typed "70" (right) — app accepted "✓ Correct. Fourth angle = 360 − 90 − 120 − 80 = 70°." — independent value 70
    [check] OK: stat-charts-A05 step 1: "70" should be accepted — app accepted; independent value 70
    [screenshot 14-q4-step1-phone.png and 14-q4-step1-laptop.png] q4-step1
      Step 2: "Express the fourth sector as a fraction of the whole." — a statement with no answer box; the student taps Next.
    Question 5 (stat-boxplots-B03): Find the five-number summary for this dataset: 12, 15, 18, 21, 24, 27, 30, 35, 40.
    [screenshot 15-question-5-phone.png and 15-question-5-laptop.png] question-5
      Step 1: "State the minimum and maximum values. Enter the maximum." — typed "40" (right) — app accepted "✓ Correct. Min = 12, max = 40 (the smallest and largest values in the dataset)." — independent value 40
    [check] OK: stat-boxplots-B03 step 1: "40" should be accepted — app accepted; independent value 40
      Step 2: "Find the median (middle value of 9 data points)." — the student gives up here and leaves the question unfinished.
    [screenshot 16-question-5-left-unfinished-phone.png and 16-question-5-left-unfinished-laptop.png] question-5-left-unfinished
    Student taps Home and leaves the test.
    [screenshot 17-after-leaving-phone.png and 17-after-leaving-laptop.png] after-leaving
    Student comes back to the topic: "Carry on your topic test (question 5 of 10) →".
    [check] OK: coming back resumes the same test question — same question
    [screenshot 18-after-coming-back-phone.png and 18-after-coming-back-laptop.png] after-coming-back
