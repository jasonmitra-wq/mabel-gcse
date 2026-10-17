Brief from the planning chat, 2026-10-17 (2). First save this whole
message, word for word, to docs/briefs/2026-10-17-tutor-flow.md and
commit "Brief: tutor flow fixes". Then do it.

0. Confirm you are on this PC (C:\dev\mabel-gcse or a worktree of it),
   not a cloud container; git status --porcelain empty; git pull. Push
   with git push origin HEAD:main.

1. Turn TEACH_THEN_ASK off by default (it made the tutor read a
   sentence and ask it straight back). Keep the code behind the flag.
   Commit "TEACH_THEN_ASK off". Push.

2. Tester rule, decided by the planning chat: the engagement score is
   not a pass condition (it scores every lesson 2/5, including one the
   student likes, so it is not calibrated). Keep reporting it.
   Text tester PASS = would_quit false AND at most one question asked
   before its answer was taught AND no item in the new "flow_faults"
   list (step 3).
   Website tester PASS = nothing in "broken" AND nothing in looks_wrong
   that stops her reading or using the page.
   Add to the judge's JSON a "flow_faults" list with these types, each
   with the turn and quoted line: correct_answer_not_acknowledged;
   checkin_without_struggle; question_repeated_after_correct_answer;
   tell_me_skipped_content; skip_request_ignored;
   closing_claims_untaught_content; factual_or_unit_slip.
   Commit "Tester: engagement reported, not a pass condition; flow
   faults". Push.

3. Tutor flow fixes in the shared teach code, one flag (FLOW_FIX, on by
   default; with it off, behaviour is byte-identical to now — prove
   with the prompt-building comparison used before):
   a. When her answer is correct, the reply's first sentence confirms
      it and says what was right, before anything else, including the
      check-in.
   b. The "Do you want me to just tell you the rest?" check-in is
      offered only after a wrong answer, an "idk", or two short or
      off-topic replies in a row. Never after a correct answer.
   c. A question she has answered correctly is never asked again in
      that lesson; the code records it and moves on.
   d. "Just tell me" / yes at the check-in: the tutor tells her the
      rest of the current key point in full (every remaining sentence
      of its content, in plain words), then moves to the next key
      point. Nothing in the point is skipped.
   e. "Skip" (or similar): move to the next key point at once, with
      one sentence saying what was skipped.
   f. The closing message says honestly which points she worked
      through and which she was told or skipped. Never "you got
      through all of it" unless she did.
   g. Numbers and units in tutor replies are copied from the lesson
      file, not recalculated; tell the tutor so in the system prompt.
   Then run the text tester on p1-energy-stores, p2-current-voltage,
   b3-defences and g5-development, and the website tester on
   p1-energy-stores and b3-defences. Dry run first; --max-usd 5. Fix
   any remaining flow fault once in the same flag; re-run only what
   failed, once. Remaining faults go to docs/ESCALATIONS.md. No lesson
   is taken off the live site. Commit "Tutor flow fixes (FLOW_FIX)".
   Push.

4. Lesson slips found by the tester (fix in the lesson files under the
   EDIT RULES, log in the topic FIX-LOG):
   - p1-energy-stores: wherever heating is described as conduction and
     convection, make clear radiation is a separate way energy is
     transferred, as the four-pathways section says.
   - b3-defences: "when pathogens breathe in" becomes "when you breathe
     them in"; remove the booster-jab claim unless the lesson teaches
     it.
   Commit. Push.

5. Maths faults found by the website tester. Behind the existing maths
   fix flag:
   a. In a topic test, a step with no answer box must not show the
      answer to a marked step; reword it or hide it until that step is
      answered (M2, M4 and any other question where it happens).
   b. Accept equivalent answer formats the prompt allows (for example
      "10^6" and "6" where the prompt asks for a power of ten); make the
      prompt say exactly what to type when only one form is accepted.
   c. Home page: either show a working resume card for a saved maths
      session or remove the "Pick up where you left off" line.
   Re-run the website tester in maths mode on the affected topics once.
   Commit. Push.

6. Report: per sample lesson, flow faults before and after, early
   questions, and the tutor cost per lesson; maths results; total API
   cost. Then continue with docs/RUNBOOK.md from the position in STATE.
