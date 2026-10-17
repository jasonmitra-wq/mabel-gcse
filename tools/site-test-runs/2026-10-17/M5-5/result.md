# Site test: M5 (maths, 2026-10-17)

**FAIL** · cost $0.1888 (5 tool calls, 0 calls from the site; tutor claude-sonnet-5-5 $0.0000)

## Judge

```json
{
  "broken": [
    {
      "what": "After resuming, Q5 step 1 shows '25/36' in the answer box, but the student typed '0.6944'. The restored state replaces her own input with the app's stored answer.",
      "step": "Question 5 Step 1 / after-coming-back"
    },
    {
      "what": "The format error for a probability step says 'Type just your answer as a number, like 15.' 15 is not a valid probability, and the message ignores that her text already contained the correct 5/12.",
      "step": "Question 4 Step 2 (\"wait so P(B) is 5+7 which is 12 right? then 5/12?\")"
    },
    {
      "what": "The step asks her to 'Find P(B) and then P(A|B)' but gives only one answer box for P(A|B), so P(B) cannot be entered or checked.",
      "step": "Question 4 Step 2"
    }
  ],
  "looks_wrong": [
    {
      "what": "After a correct step, the header text 'Topic test · question N of 10' is replaced by 'Good — keep going.', so the question count disappears mid-question.",
      "screenshot": "08-q1-step1-phone.png",
      "stops_use": false
    },
    {
      "what": "Her long typed answer is scrolled inside the narrow input; only '12 right? then 5/12?' is visible.",
      "screenshot": "14-q4-step2-phone.png",
      "stops_use": false
    },
    {
      "what": "The 'Question 3 complete' panel and its 'See sample answer' button are cut off at the bottom edge and need scrolling.",
      "screenshot": "12-q3-step2-laptop.png",
      "stops_use": false
    },
    {
      "what": "Step 3 card is cut off at the bottom of the screen, with its input and Check button half hidden.",
      "screenshot": "16-question-5-left-unfinished-phone.png",
      "stops_use": false
    }
  ],
  "would_quit": {
    "turn": "Question 5",
    "quote": "Step 2: \"Find P(at least one 5) using the complement.\" — the student gives up here and leaves the question unfinished.",
    "why": "Fifth question in a row with a 3-step chain still to go, and no visible end in sight (5 of 10). A bored student taps Home."
  },
  "fixes": [
    {
      "target": "Test resume: restore step answers",
      "change": "Repopulate completed step inputs with the student's own typed value (e.g. '0.6944'), not the stored canonical answer."
    },
    {
      "target": "Answer-format error message for probability steps",
      "change": "Replace 'like 15' with a step-appropriate example such as 'like 5/12 or 0.42'. When a single fraction/decimal can be found in her text (5/12), offer 'Did you mean 5/12?'."
    },
    {
      "target": "venn-A01 step 2 prompt",
      "change": "Either split into two steps (P(B) then P(A|B)) or reword to 'Enter P(A|B)' only, with P(B) as a hint."
    },
    {
      "target": "Topic test header",
      "change": "Keep 'Question N of 10' visible at all times and show the 'Good — keep going.' feedback beside it rather than replacing it."
    },
    {
      "target": "Question complete panel / step cards layout",
      "change": "Auto-scroll the newly unlocked step or completion panel into view so its input and buttons are fully on screen."
    }
  ]
}
```

## Transcript

    Maths topic M5 (Probability).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    Warm-up offered.
    [screenshot 02-warm-up-phone.png and 02-warm-up-laptop.png] warm-up
    Warm-up 1: "77 − 49" — typed "28" — app accepted — true answer 28
    [check] OK: warm-up 1: "28" for 77 − 49 accepted — app accepted
    Warm-up 2: "10 × 7" — typed "70" — app accepted — true answer 70
    [check] OK: warm-up 2: "70" for 10 × 7 accepted — app accepted
    Warm-up 3: "84 ÷ 6" — typed "18.5" — app rejected — true answer 14
    [check] OK: warm-up 3: "18.5" for 84 ÷ 6 rejected — app rejected
    [screenshot 03-warm-up-3-phone.png and 03-warm-up-3-laptop.png] warm-up-3
    Warm-up 4: "Find 4/5 of 10" — typed "8" — app accepted — true answer 8
    [check] OK: warm-up 4: "8" for Find 4/5 of 10 accepted — app accepted
    Warm-up 5: "10% of 68" — typed "idk" — app rejected — true answer 6.8
    [check] OK: warm-up 5: "idk" for 10% of 68 rejected — app rejected
    [screenshot 04-warm-up-result-phone.png and 04-warm-up-result-laptop.png] warm-up-result
    [screenshot 05-maths-topics-phone.png and 05-maths-topics-laptop.png] maths-topics
    [screenshot 06-topic-m5-phone.png and 06-topic-m5-laptop.png] topic-M5
    Question 1 (prb-A01): A bag contains 5 red, 3 blue, and 2 green counters. A counter is picked at random. Find P(red) and P(not red).
    [screenshot 07-question-1-phone.png and 07-question-1-laptop.png] question-1
      Step 1: "Find P(red) = number of red ÷ total." — typed "0.5" (right) — app accepted "✓ Correct. P(red) = 5/10 = 1/2." — independent value 0.5
    [check] OK: prb-A01 step 1: "0.5" should be accepted — app accepted; independent value 0.5
    [screenshot 08-q1-step1-phone.png and 08-q1-step1-laptop.png] q1-step1
      Step 2: "Find P(not red) = 1 − P(red)." — typed "0.5" (right) — app accepted "✓ Correct. P(not red) = 1 − 1/2 = 1/2." — independent value 0.5
    [check] OK: prb-A01 step 2: "0.5" should be accepted — app accepted; independent value 0.5
    Question 2 (comb-A02): A spinner has 3 equal sections (red, blue, green). It is spun twice. Find P(red on both spins) as a fraction.
    [screenshot 09-question-2-phone.png and 09-question-2-laptop.png] question-2
      Step 1: student asks for a hint — "💡 Hint 1: 3 equal sections, one is red."
      Step 1: "What is P(red) on a single spin?" — typed "0.3333" (right) — app accepted "✓ Correct. P(red) = 1/3 since there are 3 equally likely outcomes." — independent value 0.3333
    [check] OK: comb-A02 step 1: "0.3333" should be accepted — app accepted; independent value 0.3333
    [screenshot 10-q2-step1-phone.png and 10-q2-step1-laptop.png] q2-step1
      Step 2: "The two spins are independent. Find P(red on both spins)." — typed "1/9" (try) — app accepted "✓ Correct. P(RR) = (1/3) x (1/3) = 1/9." — independent value 0.1111
    [check] OK: comb-A02 step 2: "1/9" should be accepted — app accepted; independent value 0.1111
    Question 3 (tree-A03): Player A has a probability of 0.6 of winning any game against player B. They play two independent games. Find P(player A wins both games).
    [screenshot 11-question-3-phone.png and 11-question-3-laptop.png] question-3
    Student looks for the worked example: there is none in the topic test (by design; it is in practice).
      Step 1: "What is P(A wins one game)?" — typed "0.6" (right) — app accepted "✓ Correct. P(A wins one game) = 0.6." — independent value 0.6
    [check] OK: tree-A03 step 1: "0.6" should be accepted — app accepted; independent value 0.6
      Step 2: "The games are independent. Find P(A wins both games)." — typed "0.36" (try) — app accepted "✓ Correct. P(A wins both) = 0.6 x 0.6 = 0.36." — independent value 0.36
    [check] OK: tree-A03 step 2: "0.36" should be accepted — app accepted; independent value 0.36
    [screenshot 12-q3-step2-phone.png and 12-q3-step2-laptop.png] q3-step2
    Question 4 (venn-A01): From a Venn diagram: 8 in A only, 5 in A∩B, 7 in B only, 10 outside both. Find P(A∪B) and P(A|B).
    [screenshot 13-question-4-phone.png and 13-question-4-laptop.png] question-4
      Step 1: "Total number of elements. n(total) = 8 + 5 + 7 + 10 = 30. Find P(A∪B)." — typed "1.83" (wrong) — app rejected "Not quite — check your working." — independent value 0.6667
    [check] OK: venn-A01 step 1: "1.83" should be rejected — app rejected; independent value 0.6667
      Step 1: "Total number of elements. n(total) = 8 + 5 + 7 + 10 = 30. Find P(A∪B)." — typed "0.6667" (right) — app accepted "✓ Correct. P(A∪B) = 20/30 = 2/3." — independent value 0.6667
    [check] OK: venn-A01 step 1: "0.6667" should be accepted — app accepted; independent value 0.6667
      Step 2: "P(A|B) = P(A∩B)/P(B). Find P(B) and then P(A|B). Enter P(A|B)." — typed "wait so P(B) is 5+7 which is 12 right? then 5/12?" (try) — app rejected "Type just your answer as a number, like 15." — independent value 0.4167
    [check] OK: venn-A01 step 2: "wait so P(B) is 5+7 which is 12 right? then 5/12?" should be rejected — app rejected; independent value 0.4167
    [screenshot 14-q4-step2-phone.png and 14-q4-step2-laptop.png] q4-step2
      Step 2: "P(A|B) = P(A∩B)/P(B). Find P(B) and then P(A|B). Enter P(A|B)." — typed "0.4167" (right) — app accepted "✓ Correct. P(A|B) = P(A∩B)/P(B) = (5/30)/(12/30) = 5/12." — independent value 0.4167
    [check] OK: venn-A01 step 2: "0.4167" should be accepted — app accepted; independent value 0.4167
    Question 5 (comb-B03): Two fair dice are rolled. Find P(at least one die shows a 5) as a fraction.
    [screenshot 15-question-5-phone.png and 15-question-5-laptop.png] question-5
      Step 1: "Use the complement: find P(no 5 on either die) first." — typed "0.6944" (right) — app accepted "✓ Correct. P(no 5 on either die) = (5/6)^2 = 25/36." — independent value 0.6944
    [check] OK: comb-B03 step 1: "0.6944" should be accepted — app accepted; independent value 0.6944
      Step 2: "Find P(at least one 5) using the complement." — the student gives up here and leaves the question unfinished.
    [screenshot 16-question-5-left-unfinished-phone.png and 16-question-5-left-unfinished-laptop.png] question-5-left-unfinished
    Student taps Home and leaves the test.
    [screenshot 17-after-leaving-phone.png and 17-after-leaving-laptop.png] after-leaving
    Student comes back to the topic: "Carry on your topic test (question 5 of 10) →".
    [check] OK: coming back resumes the same test question — same question
    [screenshot 18-after-coming-back-phone.png and 18-after-coming-back-laptop.png] after-coming-back
