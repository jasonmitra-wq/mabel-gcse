Brief from the planning chat, 2026-10-18 (3). First save this whole
message, word for word, to docs/briefs/2026-10-18-leaving-and-tired.md
and commit "Brief: leaving and tired". Do this task NEXT, then return to
the runbook position in STATE.

0. Confirm you are on this PC (C:\dev\mabel-gcse or a worktree of it),
   not a cloud container; git status --porcelain empty (commit finished
   work under its own task name first if needed); git pull. Push with
   git push origin HEAD:main.

1. Fix the three tone faults the last tester run found outside
   FIRST_TIME, in the shared teach code behind one flag (RESPECT_EXIT,
   on by default; with it off, prompts are byte-identical to now,
   proved with the prompt-building comparison):
   a. When she says goodbye, that she has to go, or that she wants to
      stop: the tutor stops at once. One short warm closing line that
      says what she covered (honestly, per FLOW_FIX), that her place is
      saved, and nothing else. No further question. Progress is saved
      so the lesson resumes at the same point.
   b. When she says she is tired, bored or has had enough: the tutor
      offers, in one short message, three choices as buttons (if the
      chat supports buttons; otherwise as three short phrases): stop
      here, one more quick thing, or switch to the slides. It does what
      she picks. It never pushes on without asking.
   c. The "Do you want me to just tell you the rest?" check-in is warm
      and short: one sentence that acknowledges this bit is tricky,
      then the offer. Never curt, never repeated twice in a row.

2. Test, dry run first, --max-usd 5:
   - text tester on p2-components and b3-defences, with the bored
     student told to say "I'm tired" once and "bye, got to go" near the
     end;
   - website tester on p2-components at phone size, which must show at
     least one diagram in the conversation (looks_wrong empty for it).
   Record unexplained_term, answer_in_question, the three new faults,
   and tone_vs_reference for b3-defences. Fix once; re-run only
   failures, once. Remaining faults go to docs/ESCALATIONS.md. No lesson
   is taken off the live site.

3. Commit "Respect exit and tiredness (RESPECT_EXIT)". Push. Report:
   per lesson the counts above, before and after; whether the diagram
   showed on the phone screenshot (path); tutor cost per lesson; total
   API cost. Then continue with docs/RUNBOOK.md from the position in
   STATE.
