# Site test: M3 (maths, 2026-10-17)

**FAIL** · cost $0.1909 (4 tool calls, 0 calls from the site)

## Judge

```json
{
  "broken": [
    {
      "what": "The home page says 'Pick up where you left off — you were doing well' but gives no way to resume. Dashboard still shows 0%, History still says 'No sessions yet' and Error log says 'All clear'. Four completed test questions and two wrong warm-up answers were not saved anywhere visible.",
      "step": "Student taps Home and leaves the test"
    },
    {
      "what": "Q5 Step 3 text gives away the Step 2 answer ('does 30 litres split in ratio 3:2…') while Step 2 is still unanswered.",
      "step": "Question 5 (rat-B06) Step 2/Step 3"
    },
    {
      "what": "Q5 Step 3 says 'Enter 1 for yes' but has no answer box, only 'Mark as understood'.",
      "step": "Question 5 (rat-B06) Step 3"
    },
    {
      "what": "Q3 Step 1 asks a question ('£350 is what percentage of the original price?') but gives no answer box, only 'Mark as understood'. The student never has to work out 70%.",
      "step": "Question 3 (pch-A02) Step 1"
    },
    {
      "what": "In Q2, k = 3 and x = 3, and the worked example answer is also 3. The student guessed '3' for Step 2 and got the mark without working it out.",
      "step": "Question 2 (pro-A05) Step 2"
    },
    {
      "what": "A resource failed to load with a 404 error.",
      "step": "[console error] at start"
    }
  ],
  "looks_wrong": [
    {
      "what": "The site title 'Mabel's GCSE Tutor' wraps onto 3 lines in the header. The top line is cut off and the text spills below the header bar.",
      "screenshot": "01-home-phone.png"
    },
    {
      "what": "The same header title is cut off and overlaps the 'Topics'/question content below it.",
      "screenshot": "06-topic-m3-phone.png"
    },
    {
      "what": "The answer box placeholder is cut to 'Your answ' because the unit label takes up the space.",
      "screenshot": "13-question-4-phone.png"
    },
    {
      "what": "The answer box placeholder is cut to 'Your answe' next to the 'litres' label.",
      "screenshot": "15-question-5-phone.png"
    },
    {
      "what": "All 5 progress bars are green even though 2 of the 5 warm-up answers were wrong.",
      "screenshot": "04-warm-up-result-phone.png"
    },
    {
      "what": "A stray 'well.' fragment of the tagline shows under the header, so the tagline is hidden behind it.",
      "screenshot": "17-after-leaving-phone.png"
    },
    {
      "what": "Hint 1 and 'Still stuck — next hint' still show after Step 1 is already marked correct.",
      "screenshot": "10-q2-step2-laptop.png"
    }
  ],
  "would_quit": {
    "turn": "Question 5",
    "quote": "Step 2: \"What is the total amount of orange paint made? (litres)\" — the student gives up here",
    "why": "A 3-mark, 3-step question after four others feels long. Step 3 already shows the answer (30), so the step seems pointless, and nothing tells the student how far they are through the test."
  },
  "fixes": [
    {
      "target": "rat-B06 step 3 text",
      "change": "Change to 'Check: does your total split in ratio 3:2 give 18 and 12?' and drop 'Enter 1 for yes', or keep the step text hidden until Step 2 is answered."
    },
    {
      "target": "Test progress saving / home resume",
      "change": "Save each answered question as it is answered. Add a 'Resume M3 topic test (Q5 of 10)' button on home, and update Dashboard, History and Error log, including the wrong warm-up answers."
    },
    {
      "target": "Header brand text at widths under 420px",
      "change": "Hide the 'Mabel's GCSE Tutor' text, or use white-space:nowrap with a smaller font, so only the logo shows and nothing overflows."
    },
    {
      "target": "pro-A05 question data",
      "change": "Change 'Find x when y = 9' to 'y = 15' (answer 5) so k and x are different and differ from the worked example's 3."
    },
    {
      "target": "Warm-up progress bars",
      "change": "Colour a bar red when that answer was wrong, both on the question screen and on the result screen."
    }
  ]
}
```

## Transcript

    [console error] Failed to load resource: the server responded with a status of 404 (Not Found)
    Maths topic M3 (Ratio, Proportion & Rates of Change).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    Warm-up offered.
    [screenshot 02-warm-up-phone.png and 02-warm-up-laptop.png] warm-up
    Warm-up 1: "16 + 80" — typed "96" — app accepted — true answer 96
    [check] OK: warm-up 1: "96" for 16 + 80 accepted — app accepted
    Warm-up 2: "5 × 19" — typed "95" — app accepted — true answer 95
    [check] OK: warm-up 2: "95" for 5 × 19 accepted — app accepted
    Warm-up 3: "70 ÷ 5" — typed "18.5" — app rejected — true answer 14
    [check] OK: warm-up 3: "18.5" for 70 ÷ 5 rejected — app rejected
    [screenshot 03-warm-up-3-phone.png and 03-warm-up-3-laptop.png] warm-up-3
    Warm-up 4: "Find 3/4 of 8" — typed "6" — app accepted — true answer 6
    [check] OK: warm-up 4: "6" for Find 3/4 of 8 accepted — app accepted
    Warm-up 5: "10% of 76" — typed "idk" — app rejected — true answer 7.6
    [check] OK: warm-up 5: "idk" for 10% of 76 rejected — app rejected
    [screenshot 04-warm-up-result-phone.png and 04-warm-up-result-laptop.png] warm-up-result
    [screenshot 05-maths-topics-phone.png and 05-maths-topics-laptop.png] maths-topics
    [screenshot 06-topic-m3-phone.png and 06-topic-m3-laptop.png] topic-M3
    Question 1 (cmp-A05): A substance has density 11.3 g/cm³. Calculate the mass of 20 cm³ of this substance.
    [screenshot 07-question-1-phone.png and 07-question-1-laptop.png] question-1
      Step 1: "Rearrange the density formula to find mass." — marked as understood (no answer box).
      Step 2: "Calculate the mass in grams." — typed "226" (right) — app accepted "✓ Correct. M = 11.3 × 20 = 226 g." — independent value 226
    [check] OK: cmp-A05 step 2: "226" should be accepted — app accepted; independent value 226
    [screenshot 08-q1-step2-phone.png and 08-q1-step2-laptop.png] q1-step2
    Question 2 (pro-A05): y is directly proportional to x. y = 24 when x = 8. Find x when y = 9.
    [screenshot 09-question-2-phone.png and 09-question-2-laptop.png] question-2
      Step 1: student asks for a hint — "💡 Hint 1: y = kx, so k = y ÷ x."
      Step 1: "Find k (the constant of proportionality)." — typed "3" (right) — app accepted "✓ Correct. k = 24 ÷ 8 = 3, so y = 3x." — independent value 3
    [check] OK: pro-A05 step 1: "3" should be accepted — app accepted; independent value 3
      Step 2: "Find x when y = 9." — typed "3" (try) — app accepted "✓ Correct. x = 9 ÷ 3 = 3." — independent value 3
    [check] OK: pro-A05 step 2: "3" should be accepted — app accepted; independent value 3
    [screenshot 10-q2-step2-phone.png and 10-q2-step2-laptop.png] q2-step2
    Question 3 (pch-A02): A TV costs £350 after a 30% reduction. What was the original price?
    [screenshot 11-question-3-phone.png and 11-question-3-laptop.png] question-3
    Student opens the worked example.
    [screenshot 12-worked-example-3-phone.png and 12-worked-example-3-laptop.png] worked-example-3
      Step 1: "£350 is what percentage of the original price?" — marked as understood (no answer box).
      Step 2: "Find 100% (the original price)." — typed "500" (try) — app accepted "✓ Correct. £350 ÷ 0.70 = £500. Or: 350/70 × 100 = £500." — independent value 500
    [check] OK: pch-A02 step 2: "500" should be accepted — app accepted; independent value 500
    Question 4 (cmp-A01): A block of metal has mass 540 g and volume 60 cm³. Calculate its density.
    [screenshot 13-question-4-phone.png and 13-question-4-laptop.png] question-4
      Step 1: "Use: density = mass ÷ volume." — typed "12.25" (wrong) — app rejected "Not quite — check your working." — independent value 9
    [check] OK: cmp-A01 step 1: "12.25" should be rejected — app rejected; independent value 9
      Step 1: "Use: density = mass ÷ volume." — typed "9" (right) — app accepted "✓ Correct. density = 540/60 = 9 g/cm³." — independent value 9
    [check] OK: cmp-A01 step 1: "9" should be accepted — app accepted; independent value 9
    [screenshot 14-q4-step1-phone.png and 14-q4-step1-laptop.png] q4-step1
    Question 5 (rat-B06): Orange paint is made by mixing red and yellow in the ratio 3:2. A painter has 18 litres of red paint and plenty of yellow. What is the maximum amount of orange paint they can make?
    [screenshot 15-question-5-phone.png and 15-question-5-laptop.png] question-5
      Step 1: "How many litres of yellow paint are needed for every 18 litres of red?" — typed "12" (right) — app accepted "✓ Correct. Scale factor = 18 ÷ 3 = 6. Yellow needed = 6 × 2 = 12 litres." — independent value 12
    [check] OK: rat-B06 step 1: "12" should be accepted — app accepted; independent value 12
      Step 2: "What is the total amount of orange paint made? (litres)" — the student gives up here and leaves the question unfinished.
    [screenshot 16-question-5-left-unfinished-phone.png and 16-question-5-left-unfinished-laptop.png] question-5-left-unfinished
    Student taps Home and leaves the test.
    [screenshot 17-after-leaving-phone.png and 17-after-leaving-laptop.png] after-leaving
