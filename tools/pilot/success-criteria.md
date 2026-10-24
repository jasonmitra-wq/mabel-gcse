# Electricity pilot: success criteria

Set on 2026-10-24, before she starts (brief
docs/briefs/2026-10-19-evidence-layer.md, step 5). Scored by
tools/pilot/analyse.js from her exported record; the numbers are also in
js/pilot/tests.js (CRITERIA), so the app and the analysis use the same ones.

The pilot counts as a success if all four are met:

1. **Post-test at least 70%**, after each lesson: at least 70% of the marks on
   the exam-style questions of "Post-test: Current and potential difference"
   (25 marks) and of "Post-test: Components" (16 marks), each taken straight
   after its lesson.
2. **Delayed test at least 60%**: at least 60% of the marks on the exam-style
   questions of the delayed test (20 marks), which unlocks 7 days after both
   post-tests are done.
3. **Misconceptions gone**: every misconception she showed in the quick check
   (a wrong option that matches one of M1 to M14 in
   tools/pilot/misconceptions.md) is not shown again in the delayed test, which
   asks the same misconception questions.
4. **She finishes both lessons**: both pilot lessons reach their end (the end
   quiz on the slides, or the end of the AI lesson).

How the marks are counted:
- The percentages use the exam-style questions only. The misconception
  questions are counted separately, for criterion 3.
- Questions are marked in code against the mark-scheme points (in our own
  words): a conversion box and an answer box earn their own marks, and an answer
  worked from her own wrong conversion keeps its marks (error carried forward).
  "I don't know" scores no marks.
- The tests do not show her the correct answers, so that the later tests still
  measure what she has learned.

What the planning chat gets: tools/pilot/results.md (anonymous counts and
percentages, no names, no free text), written by
`node tools/pilot/analyse.js` after the delayed test.
