# Site test: M5 (maths, 2026-10-17)

**FAIL** · cost $0.2093 (5 tool calls, 0 calls from the site)

## Judge

```json
{
  "broken": [
    {
      "what": "Progress was not saved after leaving the test. Four questions were answered (one with a wrong first attempt) plus a warm-up, yet Home still shows Dashboard 'Nothing secured yet / 0% across all subjects', History 'No sessions yet' and Error log 'All clear'.",
      "step": "Student taps Home and leaves the test"
    },
    {
      "what": "The wrong first attempt '1.31' was not logged. Error log still says 'All clear'.",
      "step": "Question 4 Step 1 (prb-A03) typed '1.31'"
    },
    {
      "what": "The step says 'List the prime numbers on a die. Find P(prime).' The student typed the list '2, 3, 5' and it was rejected as 'Not quite — check your working', even though the step asked for that list.",
      "step": "Question 2 Step 2 (prb-A02) typed '2, 3, 5'"
    },
    {
      "what": "The step asks 'How many kings are in the pack? Find P(king) to 4 d.p.' The student answered both parts with '4, 0.0769' and was rejected with only a generic message.",
      "step": "Question 4 Step 2 (prb-A03) typed '4, 0.0769'"
    },
    {
      "what": "The question asks for P(both red) 'as a fraction', but the step demands a decimal. '0.36' was accepted although the exact answer is 5/14 = 0.3571. The precision is unstated, and the fraction the question asked for is never requested.",
      "step": "Question 3 Step 2 (tree-A02) typed '0.36'"
    },
    {
      "what": "The question asks for P(heart) and P(king) 'each as a simplified fraction', but both steps demand decimals ('as a decimal', 'to 4 d.p.'). The fraction answer is never asked for.",
      "step": "Question 4 Steps 1–2 (prb-A03)"
    },
    {
      "what": "Step 2 'State your final answer.' only repeats the answer already given in step 1 (0.15). It is a redundant step that earns the same mark twice.",
      "step": "Question 1 Step 2 (cond-A04)"
    }
  ],
  "looks_wrong": [
    {
      "what": "The question text says 'each as a simplified fraction' but Step 1 says 'Find P(heart) as a decimal'. The instructions contradict each other on screen.",
      "screenshot": "14-question-4-phone.png"
    },
    {
      "what": "The question says 'Find P(both red) as a fraction' while Step 2 says 'find P(both red) as a decimal'.",
      "screenshot": "13-q3-step1-laptop.png"
    },
    {
      "what": "After a test session, Home still shows '0% across all subjects', 'No sessions yet' and 'All clear'.",
      "screenshot": "19-after-leaving-laptop.png"
    },
    {
      "what": "The multiplication sign is inconsistent: the step text uses a letter 'x' ('P(B|A) x P(A)') while feedback and worked examples use '×'.",
      "screenshot": "08-q1-step1-laptop.png"
    }
  ],
  "would_quit": {
    "turn": "Question 5",
    "quote": "Step 2: \"Find P(disease and positive test).\"",
    "why": "A sudden jump to a 3-mark Bayes question after easy dice and card questions. There is no hint of the link to step 1's 0.0095, so a bored student gives up."
  },
  "fixes": [
    {
      "target": "behaviour: leaving a topic test via Home",
      "change": "Save attempted steps, wrong answers and the partial session so Dashboard, History, Error log and the topic's 'attempted' count update. Offer 'Resume test' on Home."
    },
    {
      "target": "prb-A02 step 2 and prb-A03 step 2 prompts",
      "change": "Split each into two inputs ('List the primes' / 'P(prime)'; 'Number of kings' / 'P(king)'), or reword to ask only for the probability. When a list or count is entered, give specific feedback instead of 'check your working'."
    },
    {
      "target": "tree-A02 and prb-A03 step prompts",
      "change": "Ask for the fraction the question requests (e.g. 'Give P(both red) as a fraction' accepting 5/14 or 20/56, and P(heart) = 1/4, P(king) = 1/13). Otherwise change the question text to say decimal and state the required d.p."
    },
    {
      "target": "cond-A04 step 2",
      "change": "Remove the duplicate 'State your final answer' step, or make step 1 ask for the method value and step 2 for the answer, so marks are not double-counted."
    },
    {
      "target": "cond-B04 step 2 hint",
      "change": "Make the first hint point back to step 1: 'You already worked out 0.95 × 0.01 = 0.0095 inside P(positive) — that is P(disease and positive).'"
    }
  ]
}
```

## Transcript

    Maths topic M5 (Probability).
    [screenshot 01-home-phone.png and 01-home-laptop.png] home
    Warm-up offered.
    [screenshot 02-warm-up-phone.png and 02-warm-up-laptop.png] warm-up
    Warm-up 1: "60 + 39" — typed "99" — app accepted — true answer 99
    [check] OK: warm-up 1: "99" for 60 + 39 accepted — app accepted
    Warm-up 2: "10 × 9" — typed "90" — app accepted — true answer 90
    [check] OK: warm-up 2: "90" for 10 × 9 accepted — app accepted
    Warm-up 3: "64 ÷ 8" — typed "11" — app rejected — true answer 8
    [check] OK: warm-up 3: "11" for 64 ÷ 8 rejected — app rejected
    [screenshot 03-warm-up-3-phone.png and 03-warm-up-3-laptop.png] warm-up-3
    Warm-up 4: "Find 2/3 of 9" — typed "6" — app accepted — true answer 6
    [check] OK: warm-up 4: "6" for Find 2/3 of 9 accepted — app accepted
    Warm-up 5: "50% of 12" — typed "idk" — app rejected — true answer 6
    [check] OK: warm-up 5: "idk" for 50% of 12 rejected — app rejected
    [screenshot 04-warm-up-result-phone.png and 04-warm-up-result-laptop.png] warm-up-result
    [screenshot 05-maths-topics-phone.png and 05-maths-topics-laptop.png] maths-topics
    [screenshot 06-topic-m5-phone.png and 06-topic-m5-laptop.png] topic-M5
    Question 1 (cond-A04): P(B|A) = 0.3 and P(A) = 0.5. Find P(A and B).
    [screenshot 07-question-1-phone.png and 07-question-1-laptop.png] question-1
      Step 1: "Use the multiplication rule: P(A and B) = P(B|A) x P(A)." — typed "0.15" (right) — app accepted "✓ Correct. P(A and B) = P(B|A) x P(A) = 0.3 x 0.5 = 0.15." — independent value 0.15
    [check] OK: cond-A04 step 1: "0.15" should be accepted — app accepted; independent value 0.15
    [screenshot 08-q1-step1-phone.png and 08-q1-step1-laptop.png] q1-step1
      Step 2: "State your final answer." — typed "0.15" (right) — app accepted "✓ Correct. P(A and B) = 0.15." — independent value 0.15
    [check] OK: cond-A04 step 2: "0.15" should be accepted — app accepted; independent value 0.15
    Question 2 (prb-A02): A fair die is thrown once. Find: P(even number) and P(prime number).
    [screenshot 09-question-2-phone.png and 09-question-2-laptop.png] question-2
      Step 1: student asks for a hint — "💡 Hint 1: Even numbers: 2, 4, 6 → 3 outcomes."
      Step 1: "List the even numbers on a die (1–6). Find P(even)." — typed "0.5" (right) — app accepted "✓ Correct. P(even) = 3/6 = 1/2." — independent value 0.5
    [check] OK: prb-A02 step 1: "0.5" should be accepted — app accepted; independent value 0.5
    [screenshot 10-q2-step1-phone.png and 10-q2-step1-laptop.png] q2-step1
      Step 2: "List the prime numbers on a die. Find P(prime)." — typed "2, 3, 5" (try) — app rejected "Not quite — check your working." — independent value 0.5
    [check] OK: prb-A02 step 2: "2, 3, 5" should be rejected — app rejected; independent value 0.5
      Step 2: "List the prime numbers on a die. Find P(prime)." — typed "0.5" (right) — app accepted "✓ Correct. Primes: 2, 3, 5. P(prime) = 3/6 = 1/2." — independent value 0.5
    [check] OK: prb-A02 step 2: "0.5" should be accepted — app accepted; independent value 0.5
    Question 3 (tree-A02): A bag has 5 red and 3 yellow counters. One is taken out (not replaced), then another is taken. Find P(both red) as a fraction.
    [screenshot 11-question-3-phone.png and 11-question-3-laptop.png] question-3
    Student opens the worked example.
    [screenshot 12-worked-example-3-phone.png and 12-worked-example-3-laptop.png] worked-example-3
      Step 1: "Find P(red on first draw)." — typed "0.625" (right) — app accepted "✓ Correct. P(red 1st) = 5/8." — independent value 0.625
    [check] OK: tree-A02 step 1: "0.625" should be accepted — app accepted; independent value 0.625
    [screenshot 13-q3-step1-phone.png and 13-q3-step1-laptop.png] q3-step1
      Step 2: "After removing a red counter, find P(red on second draw). Multiply to find P(both red) as a decimal." — typed "0.36" (try) — app accepted "✓ Correct. P(both red) = (5/8) x (4/7) = 20/56 = 5/14." — independent value 0.3571
    [check] OK: tree-A02 step 2: "0.36" should be accepted — app accepted; independent value 0.3571
    Question 4 (prb-A03): A card is drawn at random from a standard 52-card pack. Find P(heart) and P(king), each as a simplified fraction.
    [screenshot 14-question-4-phone.png and 14-question-4-laptop.png] question-4
      Step 1: "How many hearts are in the pack? Find P(heart) as a decimal." — typed "1.31" (wrong) — app rejected "Not quite — check your working." — independent value 0.25
    [check] OK: prb-A03 step 1: "1.31" should be rejected — app rejected; independent value 0.25
      Step 1: "How many hearts are in the pack? Find P(heart) as a decimal." — typed "0.25" (right) — app accepted "✓ Correct. P(heart) = 13/52 = 1/4." — independent value 0.25
    [check] OK: prb-A03 step 1: "0.25" should be accepted — app accepted; independent value 0.25
    [screenshot 15-q4-step1-phone.png and 15-q4-step1-laptop.png] q4-step1
      Step 2: "How many kings are in the pack? Find P(king) to 4 d.p." — typed "4, 0.0769" (try) — app rejected "Not quite — check your working." — independent value 0.0769
    [check] OK: prb-A03 step 2: "4, 0.0769" should be rejected — app rejected; independent value 0.0769
      Step 2: "How many kings are in the pack? Find P(king) to 4 d.p." — typed "0.0769" (right) — app accepted "✓ Correct. P(king) = 4/52 = 1/13." — independent value 0.0769
    [check] OK: prb-A03 step 2: "0.0769" should be accepted — app accepted; independent value 0.0769
    Question 5 (cond-B04): A medical test for a disease has: P(positive | has disease) = 0.95 and P(positive | no disease) = 0.05. The prevalence of the disease is P(disease) = 0.01. A patient tests positive. Find P(has disease | positive test) to 3 d.p.
    [screenshot 16-question-5-phone.png and 16-question-5-laptop.png] question-5
      Step 1: "Find P(positive test) using the total probability law." — typed "0.059" (right) — app accepted "✓ Correct. P(positive) = 0.0095 + 0.0495 = 0.059." — independent value 0.059
    [check] OK: cond-B04 step 1: "0.059" should be accepted — app accepted; independent value 0.059
    [screenshot 17-q5-step1-phone.png and 17-q5-step1-laptop.png] q5-step1
      Step 2: "Find P(disease and positive test)." — the student gives up here and leaves the question unfinished.
    [screenshot 18-question-5-left-unfinished-phone.png and 18-question-5-left-unfinished-laptop.png] question-5-left-unfinished
    Student taps Home and leaves the test.
    [screenshot 19-after-leaving-phone.png and 19-after-leaving-laptop.png] after-leaving
