# Site test: M1 (maths, 2026-10-17)

**FAIL** · cost $0.1865 (3 tool calls, 0 calls from the site)

## Judge

```json
{
  "broken": [
    {
      "what": "A decimal was accepted where the step asks for an improper fraction. '1.6667' was marked correct for 'Enter 1⅔ as an improper fraction'. The answer should be 5/3; a rounded decimal is neither a fraction nor exact.",
      "step": "Question 5 Step 1 (frc-B01)"
    },
    {
      "what": "Leaving the test mid-way saved nothing. Home still shows Dashboard '0% across all subjects', History 'No sessions yet' and Error log 'All clear', even though 4 questions were answered and Q4 was answered wrongly first.",
      "step": "Student taps Home and leaves the test"
    },
    {
      "what": "The console shows a failed resource load: 404 Not Found.",
      "step": "[console error] at start"
    },
    {
      "what": "On Q2 the hint was requested but only appeared after the step was already marked correct. The completed step still offers 'Still stuck — next hint'.",
      "step": "Question 2 Step 1 (bnd-A01)"
    }
  ],
  "looks_wrong": [
    {
      "what": "The site title 'Mabel's GCSE Tutor' wraps onto 3 lines in the phone header, and the top line 'Mabel's' is clipped off the top of the screen.",
      "screenshot": "01-home-phone.png"
    },
    {
      "what": "The same clipped, wrapped site title appears in the phone header on every screen.",
      "screenshot": "07-question-1-phone.png"
    },
    {
      "what": "The warm-up result progress bar shows all 5 segments green, but the score is 3 out of 5 (Q3 and Q5 were wrong).",
      "screenshot": "04-warm-up-result-phone.png"
    },
    {
      "what": "The home 'Revise a topic' card lists Biology · Chemistry · Physics · Geography · Sociology but not Maths, which is the subject being used.",
      "screenshot": "01-home-laptop.png"
    },
    {
      "what": "The feedback says 'Have a look at the example on the right', but on phone the worked example is in a separate tab, not on the right.",
      "screenshot": "14-q4-step1-phone.png"
    },
    {
      "what": "The input placeholder is truncated to 'Your answer..' next to the 'cm' label on phone.",
      "screenshot": "09-question-2-phone.png"
    },
    {
      "what": "After a correct answer, the completed step still shows 'I need a hint'.",
      "screenshot": "08-q1-step1-laptop.png"
    }
  ],
  "would_quit": {
    "turn": "Question 5",
    "quote": "Step 2: \"Multiply 5/3 × 9/4.\" — the student gives up here and leaves the question unfinished.",
    "why": "This is a 3-step fraction question with no hint of the expected format (fraction vs decimal). Step 1 accepted a decimal, which muddles things. A bored student bails, and none of their progress is saved."
  },
  "fixes": [
    {
      "target": "frc-B01 step 1 answer checking",
      "change": "Accept only 5/3 (and equivalent fractions). If a decimal is entered, reply 'Give it as a fraction, e.g. a/b' instead of marking it correct."
    },
    {
      "target": "Session persistence on leaving a test",
      "change": "On navigating away, save partial test progress. Record the attempt in History, add the Q4 wrong attempt to the Error log, and update the Dashboard and the 'x of 7 attempted' counts. Offer 'Resume test' on Home."
    },
    {
      "target": "Phone header (390px) site title",
      "change": "Shorten the title to 'Mabel's' or hide the text below 480px. Use white-space:nowrap with ellipsis so it never wraps or clips."
    },
    {
      "target": "Warm-up result progress bar",
      "change": "Colour each segment by its result: green for correct, red for wrong. This should match 3/5 instead of all green."
    },
    {
      "target": "Q4 wrong-answer feedback text on phone",
      "change": "On narrow screens, replace 'example on the right' with 'tap Worked example above'. Also make the hint show before the answer is checked."
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
    Warm-up 1: "23 + 26" — typed "49" — app accepted — true answer 49
    [check] OK: warm-up 1: "49" for 23 + 26 accepted — app accepted
    Warm-up 2: "9 × 10" — typed "90" — app accepted — true answer 90
    [check] OK: warm-up 2: "90" for 9 × 10 accepted — app accepted
    Warm-up 3: "24 ÷ 2" — typed "16" — app rejected — true answer 12
    [check] OK: warm-up 3: "16" for 24 ÷ 2 rejected — app rejected
    [screenshot 03-warm-up-3-phone.png and 03-warm-up-3-laptop.png] warm-up-3
    Warm-up 4: "Find 4/5 of 30" — typed "24" — app accepted — true answer 24
    [check] OK: warm-up 4: "24" for Find 4/5 of 30 accepted — app accepted
    Warm-up 5: "25% of 64" — typed "idk" — app rejected — true answer 16
    [check] OK: warm-up 5: "idk" for 25% of 64 rejected — app rejected
    [screenshot 04-warm-up-result-phone.png and 04-warm-up-result-laptop.png] warm-up-result
    [screenshot 05-maths-topics-phone.png and 05-maths-topics-laptop.png] maths-topics
    [screenshot 06-topic-m1-phone.png and 06-topic-m1-laptop.png] topic-M1
    Question 1 (stf-A02): Write 0.000085 in standard form.
    [screenshot 07-question-1-phone.png and 07-question-1-laptop.png] question-1
      Step 1: "Find the coefficient (number between 1 and 10)." — typed "8.5" (right) — app accepted "✓ Correct. 8.5 is between 1 and 10. It is the coefficient." — independent value 8.5
    [check] OK: stf-A02 step 1: "8.5" should be accepted — app accepted; independent value 8.5
    [screenshot 08-q1-step1-phone.png and 08-q1-step1-laptop.png] q1-step1
      Step 2: "Write the power of 10. Remember: small numbers have negative powers." — typed "-5" (right) — app accepted "✓ Correct. 0.000085 = 8.5 × 10⁻⁵. Negative power because the number is small." — independent value -5
    [check] OK: stf-A02 step 2: "-5" should be accepted — app accepted; independent value -5
    Question 2 (bnd-A01): A length is measured as 8.4 cm to 1 decimal place. Write the error interval.
    [screenshot 09-question-2-phone.png and 09-question-2-laptop.png] question-2
      Step 1: student asks for a hint — "💡 Hint 1: Half the precision = 0.05 cm."
      Step 1: "Find the lower bound. Half of 0.1 cm below 8.4." — typed "8.35" (right) — app accepted "✓ Correct. Rounded to 1 d.p. (precision 0.1 cm). Lower bound = 8.4 − 0.05 = 8.35 cm." — independent value 8.35
    [check] OK: bnd-A01 step 1: "8.35" should be accepted — app accepted; independent value 8.35
    [screenshot 10-q2-step1-phone.png and 10-q2-step1-laptop.png] q2-step1
      Step 2: "State the error interval using inequality notation. Enter the upper bound." — typed "8.45" (try) — app accepted "✓ Correct. Error interval: 8.35 ≤ l < 8.45 cm. Upper bound is strict (<)." — independent value 8.45
    [check] OK: bnd-A01 step 2: "8.45" should be accepted — app accepted; independent value 8.45
    Question 3 (int-A01): Round 47,382 to the nearest thousand.
    [screenshot 11-question-3-phone.png and 11-question-3-laptop.png] question-3
    Student opens the worked example.
    [screenshot 12-worked-example-3-phone.png and 12-worked-example-3-laptop.png] worked-example-3
      Step 1: "Look at the hundreds digit. If it is 5 or more, round up. If not, round down. Write the rounded number." — typed "47000" (right) — app accepted "✓ Correct. Hundreds digit = 3 < 5, so the thousands digit stays at 7. Answer: 47,000." — independent value 47000
    [check] OK: int-A01 step 1: "47000" should be accepted — app accepted; independent value 47000
    Question 4 (pow-A03): Simplify (3²)⁴.
    [screenshot 13-question-4-phone.png and 13-question-4-laptop.png] question-4
      Step 1: "Use the power law: (aᵐ)ⁿ = aᵐⁿ. Multiply the indices. Enter the new power of 3." — typed "11" (wrong) — app rejected "Not quite — check your working." — independent value 8
    [check] OK: pow-A03 step 1: "11" should be rejected — app rejected; independent value 8
    [screenshot 14-q4-step1-phone.png and 14-q4-step1-laptop.png] q4-step1
      Step 1: "Use the power law: (aᵐ)ⁿ = aᵐⁿ. Multiply the indices. Enter the new power of 3." — typed "8" (right) — app accepted "✓ Correct. (3²)⁴ = 3^(2×4) = 3⁸." — independent value 8
    [check] OK: pow-A03 step 1: "8" should be accepted — app accepted; independent value 8
    Question 5 (frc-B01): Work out 1⅔ × 2¼. Give your answer as a mixed number.
    [screenshot 15-question-5-phone.png and 15-question-5-laptop.png] question-5
      Step 1: "Convert both mixed numbers to improper fractions. Enter 1⅔ as an improper fraction." — typed "1.6667" (right) — app accepted "✓ Correct. Mixed to improper: multiply whole by denominator, add numerator. 1⅔ = 5/3." — independent value 1.6667
    [check] OK: frc-B01 step 1: "1.6667" should be accepted — app accepted; independent value 1.6667
      Step 2: "Multiply 5/3 × 9/4." — the student gives up here and leaves the question unfinished.
    [screenshot 16-question-5-left-unfinished-phone.png and 16-question-5-left-unfinished-laptop.png] question-5-left-unfinished
    Student taps Home and leaves the test.
    [screenshot 17-after-leaving-phone.png and 17-after-leaving-laptop.png] after-leaving
