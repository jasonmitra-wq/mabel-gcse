Claude Code prompt: G5 checkpoints on every key point, and a new "Next" list (2026-11-27)
One prompt, one commit. Pull first. Spend cap $1.00.
Decision (Jason, 2026-11-27)
Every key point gets a checkpoint. The scanner rule "checkpoint keys 0..keyPoints−1" stands, and lessons are fixed to meet it; the rule isn't relaxed. Close the open ESCALATIONS item "checkpoint-key ERROR: rule versus design" with this decision and the date.
Of the topics she can see now (P1, P2, P3, G5), only G5 falls short. The planning chat counted 11 missing checkpoints:

* g5-development: keys [0, 3]; missing 1, 2, 4, 5
* g5-nigeria: keys [2, 4]; missing 0, 1, 3
* g5-uk-economy: keys [1, 3]; missing 0, 2, 4, 5

Every P1–P3 lesson already has keys 0..n−1. Confirm both counts.
Task 1: write the 11 checkpoints
Same shape as the existing ones: `question`, 4 `options`, `correct: 0`, `correctFeedback`, `wrongFeedback`. CP_SHUFFLE mixes up the order on screen. For each one:

* Content: test the main idea of the key point it follows, using only what that key point has taught so far. No new facts.
* Wrong options: each must sound right to someone who hasn't understood. No joke options, nothing absurd, no "all/none of the above". Make all four options about the same length, so the longest isn't the giveaway.
* Feedback: `correctFeedback` says what was right. `wrongFeedback` says why the right answer is right, in plain English, without naming the other options one by one.
* Rules: tools/plain-english-rules.md; sentences of 20 words or fewer; no board name; never names her.
* Figures: any figure used must already be in that key point's text, with its year.
* Don't change the existing six checkpoints, any key point, or any script.

Then check them:

1. The lesson-auditor agent reads each new checkpoint against its key point. Fix what it finds, one round.
2. `node tools/spec-check.js --run g5-development g5-nigeria g5-uk-economy`. Report `checkpoint_mismatch` in full, and the totals of the other fields. Fix any `checkpoint_mismatch` on the new checkpoints. One fix round; anything still disputed goes to ESCALATIONS.

Task 2: STATE.md

1. G5 row: S2 and S5 become whatever is now true. S2 is met only if the scanner shows no ERROR for G5 and every WARN is recorded as checked and correct.
2. Replace the "## Next" list (it's from October, and the spend rows that run into it belong in "## Spend"; move them there unchanged) with:


```
## Next (set 2026-11-27, Jason: finish Physics and Geography first)

Rule: every key point has a checkpoint (decided 2026-11-27).

1. Physics P4 Atomic structure to scripted, then to done (S1–S6, T1–T3).
2. Physics P5, P6, P7, P8, each the same way. Missing checkpoints written first in each topic.
3. Geography G1, G2, G3, G4, G6, G7: spec check, figures sourced, old key-term format fixed, content rewrite, checkpoints, then scripted and done.
4. Across all topics: diagrams (S4; 33 of 34 Physics lessons have none), teach-sim T2, shared-code faults T3.
5. Spend: about $5–9 per topic at Phase B rates. Pace to the $100 monthly cap; expect to run into December.

To do later (held by Jason 2026-11-27): Maths lessons rebuild.
- Baseline 30d9a54 (tools/maths-audit/BASELINE.md). All 41 maths lessons are greyed out (MATHS_LESSON_GATE); questions stay open.
- Plan: pilot a new lesson format on alg-equations (concept slides one idea each; graded worked examples covering every spec case; step-by-step "What's the next move?"; "your turn" from the bank; mistakes recomputed by tools/maths-lesson-check.js; spec check clean), Jason reviews it on screen, then M2 → M6 → M1.
- Don't confirm the old lessons' model claims; they are being replaced.
- Also: add a similarity and congruence subtopic (14 bank questions have no home); retag the 63 mistagged questions after that.
- Held briefs: maths walk-through and question-density, not run; may change with the new format.

```

Checks

* `node tools/audit-lessons.js`: report the totals, and the full G5 sections of the report. The checkpoint-key ERROR count must fall by exactly 3 (149 → 146).
* `node tools/check-cp-order.js` (513 + 11 = 524 checkpoints): PASS.
* `node tools/check-rewrite.js <base>` on the 3 lessons: 0 failed.
* All 20 walks still 0.

End
Report the cost, every check's output word for word, and the 11 checkpoints in full (question, options with the right one marked, feedback). Update docs/STATE.md, commit, push, and report the hash.
Gate 0 (what the planning chat checked)

* Counted checkpoint keys against key points in every P1–P3 and G5 lesson file (not scripts): only the 3 G5 lessons fall short, 11 missing in all.
* Read g5-nigeria checkpoint "2" for the field shape.
* `tools/spec-check.js` already reports `checkpoint_mismatch` (line 50).
* No code touched.
