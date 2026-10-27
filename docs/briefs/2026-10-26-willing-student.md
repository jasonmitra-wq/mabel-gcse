Brief from the planning chat, 2026-10-26 (4): willing-student run.
First save this whole message, word for word, to
docs/briefs/2026-10-26-willing-student.md and commit "Brief: willing
student".

Why: tools/site-test.js only plays a bored student who may stop at any
turn (S111 in one run, S15 in the last), so no run has measured turns
per key point under KP_SHORT or reached the end quiz.

0. Confirm you are on this PC in C:\dev\mabel-gcse (or a worktree), no
   other Claude Code session running, git status --porcelain empty,
   git pull. Push with git push origin HEAD:main.

1. Add --persona willing to tools/site-test.js (bored stays the
   default): a 15-year-old learning this for the first time who tries
   every question, gets about a third wrong in realistic ways (units
   not converted, equation the wrong way round, a misconception from
   tools/pilot/misconceptions.md), asks 3–4 short questions in her own
   style across the lesson, takes no optional extras ("Show me
   another", "Try another"), and never asks to stop. Pass items are
   the same as the a6ae8ab brief, plus: the lesson reaches the end
   quiz and the revision-cards offer.

2. The quick check is offered once: on opening Electricity. Remove the
   second offer before the first pilot lesson; the card stays first in
   the topic list until done. check-tests.js and check-versions must
   pass.

3. Run once: tools/site-test.js --persona willing on p2-current-voltage
   as an AI lesson at phone size, whole lesson (cap $2.50).
   Report: turns per key point, total turns, minutes of tutor-side
   time if measurable, whether it reached the end quiz and the
   revision cards, the longest tutor message in words, every
   classifier call that looks wrong, and each pass item. Fix breakage
   once; no re-run.

4. ESCALATIONS (new entry), spend table. Leave STATE's runbook position
   at A9. Commit. Push. Report the hash and the API cost.
