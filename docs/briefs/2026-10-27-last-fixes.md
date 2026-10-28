Brief from the planning chat, 2026-10-27 (2): last fixes before Mabel.
First save this whole message, word for word, to
docs/briefs/2026-10-27-last-fixes.md and commit "Brief: last fixes".
Jason approved this change to shared teach-mode code by pasting it.

The bar for this round, and the last before Mabel uses the AI lesson:
(1) no wrong science marked right and no right answer marked wrong;
(2) every "Not quite" gives the right answer or the next step;
(3) every key point is ticked at the end of its sequence;
(4) her questions are answered, including ones phrased as a check.
Other faults found are logged in ESCALATIONS, not fixed, this round.

0. Confirm you are on this PC in C:\dev\mabel-gcse (or a worktree), no
   other Claude Code session running, git status --porcelain empty,
   git pull. Push with git push origin HEAD:main.

1. Gate 0: why T85 ("a very high resistance lets more current
   through") was marked right: which call marked it, with which model,
   and what it was given. Why T121's "Not quite" had no answer. Counts
   as usual.

2. Fixes (behind TELL_FIX or a new flag MARK_FIX, on by default):
   a. Marking of every free-text answer is given the key point's
      sentences, the lesson's relationships stated as rules (for
      example "higher resistance, smaller current for the same
      potential difference") and the misconceptions in
      tools/pilot/misconceptions.md. An answer stating a misconception
      or the reverse of a rule is marked wrong, and the reply corrects
      it. Use the stronger model for the marking call if Gate 0 shows
      the weaker one made the error; report the cost per lesson.
   b. A "Not quite" message must contain the right answer or the next
      step; checked in code, with a fallback taken from the lesson.
   c. Her message that is both a question and an answer (for example
      "so like does the energy turn into heat", "so if the curve gets
      steeper the resistance is changing right"): answer her question
      in one or two sentences, then mark it as her answer if it
      answers the waiting question.
   d. Marking check, free and paid: write 20 wrong-physics answers
      (reversed rules, misconceptions, half-right) and 10 right answers
      in her style for p2-current-voltage and p2-components, expected
      verdicts written down and fingerprinted BEFORE any run. Run once
      with --run. All 30 must get the expected verdict; report misses
      as they come; do not tune on them.
   e. Add 10 new held-out classifier messages of the check-question
      kind, expected classes fingerprinted first; run once.
   With the flags off, byte-identical on 5 lessons.

3. Checks: all free checks, including check-versions; one
   tools/site-test.js --persona willing run on p2-current-voltage,
   whole lesson, phone size (cap $2.50). Report against the four bar
   items only: every tick (turn and key point), every marking verdict
   that looks wrong, every "Not quite" and what followed, every
   question of hers and whether it was answered. Fix breakage once;
   no re-run.

4. ESCALATIONS (new entry), spend table. If the four bar items are all
   met in the run, set STATE's runbook position to "Phase A, A9:
   evidence pilot gate — AI lesson ready for Mabel"; otherwise leave it
   at A9. Commit. Push. Report the hash, the four bar items as met or
   not met with evidence, and the API cost.
