# Site test: M1 (maths, 2026-10-17)

**FAIL** · cost $0.2136 (6 tool calls, 0 calls from the site)

## Judge

```json
{
  "broken": [
    {
      "what": "The student's correct working (∛27=3, √144=12, total 15) was rejected with 'Not quite — check your working'. The maths was right; only the format was wrong, so the feedback tells them their maths is wrong.",
      "step": "Question 3 Step 2: 'um so cube root of 27 is like 3 right? ... so 12 plus 3 is 15?'"
    },
    {
      "what": "The correct discount 29.75 was rejected as 'check your working' because it was typed inside a sentence. There was no prompt to enter just the number.",
      "step": "Question 4 Step 2: 'um so 35% of 85... like 29.75 i think?'"
    },
    {
      "what": "'um like 14?' contains the correct answer (2/3 of 21 = 14) but was rejected with no format guidance. The test tool also did not compute the true answer here.",
      "step": "Warm-up 4"
    },
    {
      "what": "The warm-up progress bar shows wrong answers as green. Q2 is green in the warm-up-3 screen and all 5 bars are green on the result screen, although the score is 1 out of 5.",
      "step": "Warm-up 2–5 / warm-up result"
    },
    {
      "what": "After leaving the test with 4 questions done, nothing was saved. The Dashboard shows 0% and 'Nothing secured yet', History says 'No sessions yet', and Error log says 'All clear' despite the warm-up misses. No resume option is offered.",
      "step": "Student taps Home and leaves the test"
    },
    {
      "what": "A resource failed to load (404 Not Found) in the console.",
      "step": "console error at start"
    }
  ],
  "looks_wrong": [
    {
      "what": "On phone the header title 'Mabel's GCSE Tutor' wraps to 3 lines and the top line 'Mabel's' is clipped above the screen.",
      "screenshot": "01-home-phone.png"
    },
    {
      "what": "The header text 'Tutor' overlaps the question text 'sold for £204' and the question's first line is hidden behind the sticky header.",
      "screenshot": "17-question-5-phone.png"
    },
    {
      "what": "The header 'Tutor' overlaps the greeting line 'Good to see you. Silver the cat...', which is cut off at the top.",
      "screenshot": "19-after-leaving-phone.png"
    },
    {
      "what": "The phone banner says 'Have a look at the example on the right', but on phone there is no example on the right; it is hidden in a separate tab.",
      "screenshot": "13-q3-step2-phone.png"
    },
    {
      "what": "All five progress bars are green next to a score of '1 out of 5'.",
      "screenshot": "04-warm-up-result-phone.png"
    },
    {
      "what": "The Q2 progress bar is green even though Q2 was answered wrong.",
      "screenshot": "03-warm-up-3-laptop.png"
    }
  ],
  "would_quit": {
    "turn": "Question 5",
    "quote": "Step 2: \"Divide the loss by the original price.\" — the student gives up here and leaves the question unfinished.",
    "why": "Twice already, correct maths was rejected as 'check your working'. On phone the worked example is hidden in a tab, and there is no inline hint about which number is the original price (240). Bored and doubting themselves, they leave."
  },
  "fixes": [
    {
      "target": "Answer checker (step and warm-up input)",
      "change": "Extract the final number from free text (e.g. last number in 'so 12 plus 3 is 15?'). If the input contains non-numeric words and the extracted number is right, accept it or reply 'Right idea! Just type the number, e.g. 15', not 'check your working'."
    },
    {
      "target": "Warm-up progress bar",
      "change": "Colour a segment red when that warm-up answer was rejected and green only when accepted. The result screen bars must then match the 'x out of 5' score."
    },
    {
      "target": "Session persistence on leaving the test",
      "change": "Save completed steps and questions as you go, write a History entry and log warm-up and test misses to the Error log. Show a 'Resume Number topic test (Q5 of 10)' card on Home."
    },
    {
      "target": "Phone header (≤480px)",
      "change": "Show the logo only, or 'Mabel's Tutor' on one line with white-space:nowrap. Add top padding to page content equal to the header height so the question text and greeting are not hidden or overlapped."
    },
    {
      "target": "Coaching banner text on phone",
      "change": "When the worked example is in a tab (narrow layout), change 'Have a look at the example on the right' to 'Tap Worked example above to see the method' and highlight that tab."
    }
  ]
}
```

## Transcript

    [console error] Failed to load resource: the server responded with a status of 404 (Not Found)
    Maths topic M1 (Number).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    Warm-up offered.
    [screenshot 02-warm-up-phone.png and 02-warm-up-laptop.png] warm-up
    Warm-up 1: "76 − 13" — typed "63" — app accepted — true answer 63
    [check] OK: warm-up 1: "63" for 76 − 13 accepted — app accepted
    Warm-up 2: "12 × 18" — typed "um like 200 something? maybe 216?" — app rejected — true answer 216
    [check] OK: warm-up 2: "um like 200 something? maybe 216?" for 12 × 18 rejected — app rejected
    Warm-up 3: "108 ÷ 9" — typed "16" — app rejected — true answer 12
    [check] OK: warm-up 3: "16" for 108 ÷ 9 rejected — app rejected
    [screenshot 03-warm-up-3-phone.png and 03-warm-up-3-laptop.png] warm-up-3
    Warm-up 4: "Find 2/3 of 21" — typed "um like 14?" — app rejected — true answer not computed
    Warm-up 5: "25% of 28" — typed "idk" — app rejected — true answer 7
    [check] OK: warm-up 5: "idk" for 25% of 28 rejected — app rejected
    [screenshot 04-warm-up-result-phone.png and 04-warm-up-result-laptop.png] warm-up-result
    [screenshot 05-maths-topics-phone.png and 05-maths-topics-laptop.png] maths-topics
    [screenshot 06-topic-m1-phone.png and 06-topic-m1-laptop.png] topic-M1
    Question 1 (pct-A05): What percentage of 80 is 52?
    [screenshot 07-question-1-phone.png and 07-question-1-laptop.png] question-1
      Step 1: "Divide the part by the whole." — typed "0.65" (right) — app accepted "✓ Correct. 52 ÷ 80 = 0.65. This decimal represents the proportion." — independent value 0.65
    [check] OK: pct-A05 step 1: "0.65" should be accepted — app accepted; independent value 0.65
    [screenshot 08-q1-step1-phone.png and 08-q1-step1-laptop.png] q1-step1
      Step 2: "Multiply by 100 to convert to a percentage." — typed "65" (right) — app accepted "✓ Correct. 0.65 × 100 = 65%. So 52 is 65% of 80." — independent value 65
    [check] OK: pct-A05 step 2: "65" should be accepted — app accepted; independent value 65
    Question 2 (nrt-A02): Write the ratio 45 : 60 in its simplest form.
    [screenshot 09-question-2-phone.png and 09-question-2-laptop.png] question-2
      Step 1: student asks for a hint — "💡 Hint 1: Factors of 45: 1, 3, 5, 9, 15, 45. Factors of 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60."
      Step 1: "Find the HCF of 45 and 60." — typed "15" (right) — app accepted "✓ Correct. HCF(45, 60) = 15." — independent value 15
    [check] OK: nrt-A02 step 1: "15" should be accepted — app accepted; independent value 15
    [screenshot 10-q2-step1-phone.png and 10-q2-step1-laptop.png] q2-step1
      Step 2: "Divide both parts by 15. Enter the second part of the simplified ratio." — typed "4" (try) — app accepted "✓ Correct. 45 ÷ 15 = 3, 60 ÷ 15 = 4. Simplest form: 3 : 4." — independent value 4
    [check] OK: nrt-A02 step 2: "4" should be accepted — app accepted; independent value 4
    Question 3 (pow-A02): Evaluate √144 + ∛27.
    [screenshot 11-question-3-phone.png and 11-question-3-laptop.png] question-3
    Student opens the worked example.
    [screenshot 12-worked-example-3-phone.png and 12-worked-example-3-laptop.png] worked-example-3
      Step 1: "Find √144." — typed "12" (right) — app accepted "✓ Correct. 12² = 144, so √144 = 12." — independent value 12
    [check] OK: pow-A02 step 1: "12" should be accepted — app accepted; independent value 12
      Step 2: "Find ∛27, then add it to √144. Enter the total." — typed "um so cube root of 27 is like 3 right? and square root of 144 is 12. so 12 plus 3 is 15?" (try) — app rejected "Not quite — check your working." — independent value 15
    [check] OK: pow-A02 step 2: "um so cube root of 27 is like 3 right? and square root of 144 is 12. so 12 plus 3 is 15?" should be rejected — app rejected; independent value 15
    [screenshot 13-q3-step2-phone.png and 13-q3-step2-laptop.png] q3-step2
      Step 2: "Find ∛27, then add it to √144. Enter the total." — typed "15" (right) — app accepted "✓ Correct. ∛27 = 3. Total: 12 + 3 = 15." — independent value 15
    [check] OK: pow-A02 step 2: "15" should be accepted — app accepted; independent value 15
    Question 4 (pct-A01): A jacket costs £85. It is reduced by 35%. What is the sale price?
    [screenshot 14-question-4-phone.png and 14-question-4-laptop.png] question-4
      Step 1: "Write 35% as a decimal." — typed "1.44" (wrong) — app rejected "Not quite — check your working." — independent value 0.35
    [check] OK: pct-A01 step 1: "1.44" should be rejected — app rejected; independent value 0.35
      Step 1: "Write 35% as a decimal." — typed "0.35" (right) — app accepted "✓ Correct. Dividing by 100 converts any percentage to its decimal multiplier." — independent value 0.35
    [check] OK: pct-A01 step 1: "0.35" should be accepted — app accepted; independent value 0.35
    [screenshot 15-q4-step1-phone.png and 15-q4-step1-laptop.png] q4-step1
      Step 2: "Calculate the discount amount." — typed "um so 35% of 85... like 29.75 i think?" (try) — app rejected "Not quite — check your working." — independent value 29.75
    [check] OK: pct-A01 step 2: "um so 35% of 85... like 29.75 i think?" should be rejected — app rejected; independent value 29.75
      Step 2: "Calculate the discount amount." — typed "29.75" (right) — app accepted "✓ Correct. Decimal multiplier × original price gives the portion being removed." — independent value 29.75
    [check] OK: pct-A01 step 2: "29.75" should be accepted — app accepted; independent value 29.75
      Step 3: "Find the sale price." — typed "55.25" (right) — app accepted "✓ Correct. Original price minus discount = sale price." — independent value 55.25
    [check] OK: pct-A01 step 3: "55.25" should be accepted — app accepted; independent value 55.25
    [screenshot 16-q4-step3-phone.png and 16-q4-step3-laptop.png] q4-step3
    Question 5 (pct-B04): A phone is bought for £240 and sold for £204. Calculate the percentage loss.
    [screenshot 17-question-5-phone.png and 17-question-5-laptop.png] question-5
      Step 1: "Find the loss in pounds." — typed "36" (right) — app accepted "✓ Correct. The actual loss is £240 − £204 = £36." — independent value 36
    [check] OK: pct-B04 step 1: "36" should be accepted — app accepted; independent value 36
      Step 2: "Divide the loss by the original price." — the student gives up here and leaves the question unfinished.
    [screenshot 18-question-5-left-unfinished-phone.png and 18-question-5-left-unfinished-laptop.png] question-5-left-unfinished
    Student taps Home and leaves the test.
    [screenshot 19-after-leaving-phone.png and 19-after-leaving-laptop.png] after-leaving
