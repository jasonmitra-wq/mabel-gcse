Brief from the planning chat, 2026-10-27: telling, marking and a
halfway stop. First save this whole message, word for word, to
docs/briefs/2026-10-27-telling-and-halfway.md and commit "Brief:
telling and halfway". Jason approved this change to shared teach-mode
code by pasting it.

From the 47410dd willing-student run and its ESCALATIONS entry.

0. Confirm you are on this PC in C:\dev\mabel-gcse (or a worktree), no
   other Claude Code session running, git status --porcelain empty,
   git pull. Push with git push origin HEAD:main.

1. Gate 0 in the real code: how the told part chooses its sentences,
   how coverage of a key point's items is recorded during model
   teaching, how "Not quite" is chosen relative to the model's
   explanation, how own-words points are set, and why the widget resets
   on redraw. Counts as usual.

2. Fixes, behind a new flag TELL_FIX (on by default; earlier flags
   stay):
   a. The told part covers only the key point's items not yet taught in
      this lesson (use the coverage record; where unsure, check the
      transcript so far). Never re-tell a covered item.
   b. Each told piece reads on its own: written by the model from the
      uncovered items and the conversation so far, at most 60 words,
      keeping every number, bold term and key term of those items
      exactly (check in code against the lesson file; if a check
      fails, fall back to the lesson sentences with any needed
      lead-in). One idea per piece; ends with Next.
   c. The verdict on her answer is decided once, in code or the marking
      call, and the message opens with it; the model writing the
      explanation is given the verdict and may not contradict it. If
      she is right, it never says "Not quite".
   d. Own-words marking: the prompt she sees and the points marked
      come from the same list; mark only what the prompt asked for.
   e. The widget keeps her predictions and its state across chat
      redraws.
   f. A halfway stop: after the key point closest to the middle of the
      lesson, offer "Good place for a break. Your place is saved." with
      "Keep going" and "Stop here". Offered once; "Stop here" ends
      cleanly and the lesson resumes at the next key point.
   With the flags off, byte-identical on 5 lessons.

3. Checks: all free checks, including check-versions; one
   tools/site-test.js --persona willing run on p2-current-voltage,
   whole lesson, phone size (cap $2.50). The willing student taps
   "Keep going" at the halfway stop. Report: turns per key point,
   total, every told piece (word count and whether it repeats a
   covered item), the end quiz, the revision-cards offer, classifier
   calls that look wrong, and the pass items from the last two briefs.
   Fix breakage once; no re-run.

4. ESCALATIONS (new entry), spend table. Leave STATE's runbook position
   at A9. Commit. Push. Report the hash and the API cost.
