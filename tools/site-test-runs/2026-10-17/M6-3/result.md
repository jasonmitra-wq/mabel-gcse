# Site test: M6 (maths, 2026-10-17)

**FAIL** · cost $0.2002 (5 tool calls, 0 calls from the site; tutor claude-sonnet-5-5 $0.0000)

## Judge

```json
{
  "broken": [
    {
      "what": "After a warm-up and four completed test questions, the home page still shows History 'No sessions yet' and Dashboard 'Nothing secured yet — 0% across all subjects'. Error log shows 'All clear' even though she missed warm-up 3, warm-up 5 and her first try at Q4 step 1. None of this activity was recorded where she can see it.",
      "step": "Student taps Home and leaves the test (18-after-leaving)"
    }
  ],
  "looks_wrong": [
    {
      "what": "The degree sign '°' sits on its own to the left of the answer box, where it looks like a stray bullet. It should be a unit after the box.",
      "screenshot": "09-question-2-phone.png",
      "stops_use": false
    },
    {
      "what": "The degree sign '°' floats on its own to the left of the wide answer box.",
      "screenshot": "09-question-2-laptop.png",
      "stops_use": false
    },
    {
      "what": "The 'Revise a topic' card lists 'Biology · Chemistry · Physics · Geography · Sociology' but not Maths, the subject she is actually doing.",
      "screenshot": "18-after-leaving-laptop.png",
      "stops_use": false
    },
    {
      "what": "The home page has no 'Carry on your topic test' card. She has to dig back through Maths > Statistics to find her unfinished test.",
      "screenshot": "18-after-leaving-phone.png",
      "stops_use": false
    },
    {
      "what": "The hint links wrap unevenly: 'Show me the answer' drops onto its own indented line under 'Still stuck — next hint'.",
      "screenshot": "10-q2-hint-phone.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "Question 5",
    "quote": "Step 1: \"In a histogram: frequency = frequency density × class width.\"",
    "why": "The step is a bare statement, not an instruction. She can't tell what to type, so she gave up and left the test."
  },
  "fixes": [
    {
      "target": "Question chr-B01, step 1 prompt text",
      "change": "Rewrite as a question: 'Work out the frequency: frequency density (3.5) × class width (10).'"
    },
    {
      "target": "Step answer input with a unit (stat-charts-A04)",
      "change": "Put the '°' unit after the input as a suffix, e.g. [ 243 ] °, instead of before it."
    },
    {
      "target": "Home page behaviour",
      "change": "When a topic test is unfinished, show a 'Carry on your Statistics test (question 5 of 10) →' card at the top of home."
    },
    {
      "target": "History / Error log / Dashboard",
      "change": "Save the session as soon as the warm-up or any test question is answered. Add missed warm-up and test attempts to the Error log so the home cards stop saying 'No sessions yet' and 'All clear'."
    },
    {
      "target": "Home 'Revise a topic' card subject list",
      "change": "Add Maths to the list (e.g. 'Maths · Biology · Chemistry · …')."
    }
  ]
}
```

## Transcript

    Maths topic M6 (Statistics).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    Warm-up offered.
    [screenshot 02-warm-up-phone.png and 02-warm-up-laptop.png] warm-up
    Warm-up 1: "32 + 35" — typed "67" — app accepted — true answer 67
    [check] OK: warm-up 1: "67" for 32 + 35 accepted — app accepted
    Warm-up 2: "10 × 19" — typed "190" — app accepted — true answer 190
    [check] OK: warm-up 2: "190" for 10 × 19 accepted — app accepted
    Warm-up 3: "45 ÷ 5" — typed "12.25" — app rejected — true answer 9
    [check] OK: warm-up 3: "12.25" for 45 ÷ 5 rejected — app rejected
    [screenshot 03-warm-up-3-phone.png and 03-warm-up-3-laptop.png] warm-up-3
    Warm-up 4: "Find 1/4 of 32" — typed "8" — app accepted — true answer 8
    [check] OK: warm-up 4: "8" for Find 1/4 of 32 accepted — app accepted
    Warm-up 5: "20% of 72" — typed "idk" — app rejected — true answer 14.4
    [check] OK: warm-up 5: "idk" for 20% of 72 rejected — app rejected
    [screenshot 04-warm-up-result-phone.png and 04-warm-up-result-laptop.png] warm-up-result
    [screenshot 05-maths-topics-phone.png and 05-maths-topics-laptop.png] maths-topics
    [screenshot 06-topic-m6-phone.png and 06-topic-m6-laptop.png] topic-M6
    Question 1 (stat-averages-A04): A frequency table shows: mark 5 (freq 2), mark 6 (freq 4), mark 7 (freq 6), mark 8 (freq 5), mark 9 (freq 3). Find the mean mark.
    [screenshot 07-question-1-phone.png and 07-question-1-laptop.png] question-1
      Step 1: "Find the total frequency." — typed "20" (right) — app accepted "✓ Correct. Total frequency n = 2+4+6+5+3 = 20." — independent value 20
    [check] OK: stat-averages-A04 step 1: "20" should be accepted — app accepted; independent value 20
    [screenshot 08-q1-step1-phone.png and 08-q1-step1-laptop.png] q1-step1
      Step 2: "Calculate Σfx (multiply each mark by its frequency, then add)." — typed "143" (right) — app accepted "✓ Correct. Σfx = 10+24+42+40+27 = 143." — independent value 143
    [check] OK: stat-averages-A04 step 2: "143" should be accepted — app accepted; independent value 143
      Step 3: "Find the mean: Σfx ÷ n." — typed "7.15" (right) — app accepted "✓ Correct. Mean = 143 ÷ 20 = 7.15." — independent value 7.15
    [check] OK: stat-averages-A04 step 3: "7.15" should be accepted — app accepted; independent value 7.15
    Question 2 (stat-charts-A04): In a class of 40 students, 27 prefer pop music and 13 prefer rock. Find the pie chart angle for (a) pop and (b) rock.
    [screenshot 09-question-2-phone.png and 09-question-2-laptop.png] question-2
      Step 1: student asks for a hint — "💡 Hint 1: Angle = (27 ÷ 40) × 360."
    [screenshot 10-q2-hint-phone.png and 10-q2-hint-laptop.png] q2-hint
      Step 1: "Find the angle for pop music." — typed "243" (right) — app accepted "✓ Correct. Pop: (27/40) × 360 = 243°." — independent value 243
    [check] OK: stat-charts-A04 step 1: "243" should be accepted — app accepted; independent value 243
      Step 2: "Find the angle for rock. Check both angles sum to 360°." — typed "rock: 117, pop: 243, sum: 360" (try) — app rejected "Type just your answer as a number, like 15." — independent value 117
    [check] OK: stat-charts-A04 step 2: "rock: 117, pop: 243, sum: 360" should be rejected — app rejected; independent value 117
      Step 2: "Find the angle for rock. Check both angles sum to 360°." — typed "117" (right) — app accepted "✓ Correct. Rock: (13/40) × 360 = 117°. Total: 243+117 = 360° ✓." — independent value 117
    [check] OK: stat-charts-A04 step 2: "117" should be accepted — app accepted; independent value 117
    [screenshot 11-q2-step2-phone.png and 11-q2-step2-laptop.png] q2-step2
    Question 3 (stat-sampling-A01): A school has 300 students: 120 in Year 10 and 180 in Year 11. A stratified sample of 50 is required. How many students should be selected from each year group?
    [screenshot 12-question-3-phone.png and 12-question-3-laptop.png] question-3
    Student looks for the worked example: there is none in the topic test (by design; it is in practice).
      Step 1: "How many students should be selected from Year 10?" — typed "20" (right) — app accepted "✓ Correct. Year 10: (120 ÷ 300) × 50 = 0.4 × 50 = 20 students." — independent value 20
    [check] OK: stat-sampling-A01 step 1: "20" should be accepted — app accepted; independent value 20
      Step 2: "How many students should be selected from Year 11?" — typed "30" (try) — app accepted "✓ Correct. Year 11: (180 ÷ 300) × 50 = 0.6 × 50 = 30 students. Check: 20 + 30 = 50 ✓" — independent value 30
    [check] OK: stat-sampling-A01 step 2: "30" should be accepted — app accepted; independent value 30
    Question 4 (stat-averages-A02): Find the mean, median and mode of: 3, 5, 5, 7, 8, 9, 5.
    [screenshot 13-question-4-phone.png and 13-question-4-laptop.png] question-4
      Step 1: "Sort the data and find the mean." — typed "8.5" (wrong) — app rejected "Not quite — check your working." — independent value 6
    [check] OK: stat-averages-A02 step 1: "8.5" should be rejected — app rejected; independent value 6
    [screenshot 14-q4-step1-phone.png and 14-q4-step1-laptop.png] q4-step1
      Step 1: "Sort the data and find the mean." — typed "6" (right) — app accepted "✓ Correct. Sorted: 3,5,5,5,7,8,9. Sum = 42. Mean = 42 ÷ 7 = 6." — independent value 6
    [check] OK: stat-averages-A02 step 1: "6" should be accepted — app accepted; independent value 6
      Step 2: "Find the median (middle value of the sorted list)." — typed "5" (try) — app accepted "✓ Correct. The 4th value in 3,5,5,5,7,8,9 is 5." — independent value 5
    [check] OK: stat-averages-A02 step 2: "5" should be accepted — app accepted; independent value 5
      Step 3: "Find the mode (most frequent value)." — typed "5" (right) — app accepted "✓ Correct. 5 appears 3 times, more than any other value. Mode = 5." — independent value 5
    [check] OK: stat-averages-A02 step 3: "5" should be accepted — app accepted; independent value 5
    [screenshot 15-q4-step3-phone.png and 15-q4-step3-laptop.png] q4-step3
    Question 5 (chr-B01): A histogram has class 10≤x<20 with frequency density 3.5, class width 10. What is the frequency for this class?
    [screenshot 16-question-5-phone.png and 16-question-5-laptop.png] question-5
      Step 1: "In a histogram: frequency = frequency density × class width." — the student gives up here and leaves the question unfinished.
    [screenshot 17-question-5-left-unfinished-phone.png and 17-question-5-left-unfinished-laptop.png] question-5-left-unfinished
    Student taps Home and leaves the test.
    [screenshot 18-after-leaving-phone.png and 18-after-leaving-laptop.png] after-leaving
    Student comes back to the topic: "Carry on your topic test (question 5 of 10) →".
    [check] OK: coming back resumes the same test question — same question
    [screenshot 19-after-coming-back-phone.png and 19-after-coming-back-laptop.png] after-coming-back
