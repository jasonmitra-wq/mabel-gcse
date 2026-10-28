Brief from the planning chat, 2026-10-28: small fixes, then Mabel.
First save this whole message, word for word, to
docs/briefs/2026-10-28-small-fixes.md and commit "Brief: small
fixes". Jason approved this change to shared teach-mode code by
pasting it. No paid site test this round.

From tools/site-test-runs/2026-10-28/p2-current-voltage-4 (5fb75e7).

0. Confirm you are on this PC in C:\dev\mabel-gcse (or a worktree), no
   other Claude Code session running, git status --porcelain empty,
   git pull. Push with git push origin HEAD:main.

1. Fixes (under the existing flags, on by default; flags off stay
   byte-identical on 5 lessons):
   a. A worked example or practice question never uses an equation
      before the tutor has stated it in this lesson. Check in code; if
      not yet stated, state it in one line first ("The equation is
      V = I R: potential difference = current × resistance").
   b. The verdict appears once per message (no "Yes, that's right.
      That's right.").
   c. A message answering her question never opens with a verdict
      unless she also gave an answer to the waiting question.
   d. "The answer:" lines name their subject, never start with a bare
      pronoun.
   e. A widget appears once, under the message it belongs to.
   f. S2: say why "the charged particles stop moving around and just
      stay still" was marked "Not quite". Add it and 9 other right
      answers in her loose wording (fingerprinted before running) to
      the marking check, alongside the existing 30, and run the
      marking check once with --run (under $0.10). Report misses as
      they come; do not tune on the new 10.

2. Free checks, including check-versions and the scripted key-point
   run; one marking-check --run as above. No site test.

3. ESCALATIONS (new entry), spend table. Set STATE's runbook position
   to "Phase A, A9: evidence pilot gate. AI lesson ready for Mabel
   (known issues in ESCALATIONS 2026-10-28)". Commit. Push. Report the
   hash, each fix, the marking-check score, and the API cost.
