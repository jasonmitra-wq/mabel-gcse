Brief from the planning chat, 2026-10-17. First save this whole message,
word for word, to docs/briefs/2026-10-17-sonnet-tutor.md and commit
"Brief: Sonnet tutor". Then do it.

0. Confirm you are on this PC (C:\dev\mabel-gcse or a worktree of it),
   not a cloud container; git status --porcelain empty (if the last
   session left finished work uncommitted, commit it first under its
   own task name); git pull. Push with git push origin HEAD:main.

1. Put the AI lessons back, decided by the planning chat: AI lessons are
   what keep the student engaged; a tester FAIL is a measure to improve,
   not a reason to remove a lesson.
   a. Restore b3-defences, g5-development, g5-nigeria and g5-uk-economy
      to TEACH_ENABLED (switch the flag that removed them off). Confirm
      in the headless browser, with a key saved, that b3-defences opens
      as the AI lesson.
   b. Commit "AI lessons restored: tester failures do not remove
      lessons". Push.

2. Switch the AI tutor to Sonnet (decided by Jason):
   - GET /v1/models with SPEC_CHECK_API_KEY and find the current Sonnet
     model id (expected "claude-sonnet-5-5"). If no Sonnet model is
     listed, stop and report the list.
   - In the shared teach code (js/teach-core.js and wherever the app
     sets the tutor model), make that Sonnet id the tutor model, behind
     a flag (TUTOR_SONNET, on by default); with the flag off, the old
     Haiku model is used exactly as before.
   - tools/teach-sim.js and tools/site-test.js use the same tutor model
     as the app (read from the shared code). The bored student stays on
     the cheap model; the judge stays on claude-opus-5-5.
   - Keep every existing fix (fix23, fix25, fixT4, the naming check).
   - Commit "Tutor model: Sonnet (TUTOR_SONNET flag)". Push.

3. New pass rule for the text tester (replace the old one in
   tools/bored-student.js and wherever PASS is computed):
   PASS = engagement 3 or more AND would_quit false AND at most one
   question that fails question_matches_what_was_just_taught.
   Website tester: PASS = nothing broken AND would_quit false AND
   nothing in looks_wrong that stops her reading or using the page.
   Re-score the saved runs under the new rule with --rescore (no new
   API calls) and report the before and after counts. Commit "Tester:
   realistic pass rule". Push.

4. Sample test with the Sonnet tutor:
   - Text tester on p1-energy-stores, p2-current-voltage, b3-defences
     and g5-development. Website tester on p1-energy-stores and
     b3-defences. Dry run first; --max-usd 5. Record, per lesson, PASS
     or FAIL and the actual tutor cost of the lesson (from API usage).
   - If two or more still FAIL on questions asked before teaching, do
     step 5. Otherwise skip step 5.
   - Record in STATE: "Sonnet tutor: sample tested <date>; other AI
     lessons re-tested when their topic is next worked on." Commit.

5. Teach-then-ask (only if step 4 says so). In the shared teach code,
   behind a flag (TEACH_THEN_ASK, on by default):
   - Before each tutor turn that will ask a question, the code picks the
     next untaught sentence(s) from the current key point's content and
     passes them to the tutor as "Teach this first, in your own words,
     then ask one question whose answer is in it."
   - After the reply, the code checks that the question's answer words
     appear in the taught text of this or an earlier turn; if not, it
     asks the tutor to try again once.
   - A key point counts as covered only when every one of its sentences
     has been taught.
   Re-run the same sample once. Record results. Commit
   "Teach-then-ask (TEACH_THEN_ASK flag)". Push.

6. Maths, decided by the planning chat. Behind the existing maths fix
   flag:
   a. A step cannot be skipped: the next step unlocks only after the
      current step is answered correctly, or after she asks to be shown
      the answer (which counts as not correct first time).
   b. Steps with no answer box earn no marks and cannot be tapped
      through for marks; they show as a statement with a "Next" button.
   c. In the topic test, the worked example is hidden. It stays visible
      in practice mode.
   d. Progress is saved as she goes (localStorage, maths_ prefix), so
      leaving and coming back resumes at the same question and step.
   e. Fix the content faults in cmp-A03 and cmp-B04 named by the
      website tester; log old and new values in tools/maths-fix-log.md.
   Re-run the website tester in maths mode on every maths topic once.
   Commit "Maths: no skipping, no worked example in tests, progress
   saved, two question fixes". Push.

7. Runbook (docs/RUNBOOK.md):
   a. Escalation 4e: add "(with AI lesson testing before they go live)"
      as the last sentence of the Phase 3 paragraph, whatever its
      current wording. Mark it resolved.
   b. Replace the section 1 rule that begins "Never switch a lesson's
      AI teacher on for the live site" with: "Test every AI lesson
      (text tester on each lesson, website tester on one per topic)
      before switching it on, and fix what fails once. A lesson that
      still fails goes live anyway, with its faults listed in
      docs/ESCALATIONS.md. Never take an AI lesson off the live site
      because of a tester result."
   c. Replace "c2." in task 2.5 to match: test, fix once, re-run once,
      then switch on regardless; list remaining faults in
      docs/ESCALATIONS.md.
   d. Add to section 1: "Every brief from the planning chat is saved
      word for word to docs/briefs/ before it is started. Never search
      old session transcripts for instructions; if a brief is not in
      docs/briefs/, stop and say which one is missing."
   Commit "Runbook: testers measure, never remove; briefs saved". Push.

8. Report: the Sonnet model id used; per sample lesson PASS or FAIL and
   the tutor cost per lesson; whether step 5 ran and its result; the
   maths results; total API cost. Then continue with docs/RUNBOOK.md
   from the position in STATE.
