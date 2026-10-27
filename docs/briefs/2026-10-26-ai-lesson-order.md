Brief from the planning chat, 2026-10-26 (2): AI lesson order and
marking. First save this whole message, word for word, to
docs/briefs/2026-10-26-ai-lesson-order.md and commit "Brief: AI lesson
order". Jason approved this change to shared teach-mode code by
pasting it.

The site test of 08a2083 (tools/site-test-runs/2026-10-26/
p2-current-voltage/result.md) shows the loop is gone but: key point 1
was ticked at turn 15 and taught until turn 44; practice came before
Q = It was taught; off-topic messages were marked as wrong answers and
the answer given away; her question "why 0.05?" was skipped; worked-
example answers were ignored or a wrong one accepted; a question was
dropped after a side question; a set-up line with no question; "First,
a word you'll need" repeated for a term already explained, and a term
introduced but never used; the predict-first prompt said "add cells,
watch both ammeters" but showed a multiple-choice question with one
ammeter. Some of these were patched after the run and never tested.
The planning chat's previous brief caused the early tick: it said a
point ends when covered OR after 3 practice questions.

0. Confirm you are on this PC in C:\dev\mabel-gcse (or a worktree), no
   other Claude Code session running, git status --porcelain empty,
   git pull. Push with git push origin HEAD:main.

1. Gate 0 in the real code (js/teach-core.js, js/teach.js,
   js/widgets/, tools/teach-sim.js, tools/site-test.js): for each fault
   above, say why it happens, and whether the post-run patches in
   08a2083 already cover it. Search every file sharing the logic,
   including the one being edited, and state the counts. Also say why
   check-teach-default gets 4/8 on p2-current-voltage.

2. Fix, behind a new flag KP_ORDER (on by default; KP_LOOP_FIX stays):
   a. Each key point runs in this order, enforced in code: teach its
      content (short steps, her questions answered) → its worked
      examples, her typed answers marked in code → practice ("Try
      another" generators only, and only after the equation has been
      taught; at most 3) → the predict-first widget → her own-words
      line → the mixed questions. The point is ticked only when this
      sequence ends. "Tell me the rest" and "move on" still work: they
      jump forward in this order, never past teaching she hasn't seen
      without telling it to her first.
   b. An off-topic message is never an attempt: one short friendly
      reply, then the same question again, answer not given.
   c. Her question is always answered before anything else, including
      before a new key point starts.
   d. After a side question, the tutor goes back to the question it
      had asked.
   e. Every tutor message that sets something up ends in a question or
      a button.
   f. "First, a word you'll need" only for a term not yet explained,
      and only for a term the next step uses.
   g. The predict-first step in the AI lesson shows the same working
      widget as the slides (switch, two ammeters, cells), and its
      wording matches what is on screen.
   With the flag off, prompts and behaviour are byte-identical to
   before; prove it on 5 lessons.

3. Layout, from the same site test: on phone, the "← Home" button and
   the "What are you revising?" heading are hidden under the top bar;
   on laptop, the Key terms panel cuts off mid-sentence, the "Jump to"
   header is cut off, and the sidebar diagram is too small to read.
   Fix each; check at phone and laptop size.

4. Quick check, question 5: replace "Electricity only flows" with
   wording that uses neither "electricity" nor a term the lessons
   teach (for example "Nothing flows unless there is a loop all the
   way round and back to the battery"). check-tests.js must still
   pass.

5. Checks: all free checks; then tools/site-test.js on
   p2-current-voltage as an AI lesson at phone size, the WHOLE lesson
   (cap $2.50). Pass means: every key point is ticked only after its
   sequence ends; no practice before its equation is taught; no
   off-topic message marked; every question of hers answered first;
   every typed worked-example answer marked correctly; each
   predict-first widget works and matches its words. Fix breakage
   once and re-run once (cap $2.50). Report turns per key point.

6. Record the result in ESCALATIONS (a new 2026-10-26 entry). Leave
   STATE's runbook position at the A9 evidence pilot gate. Commit.
   Push. Report: the cause of each fault, what changed, both site-test
   results against the pass list, turns per key point, and the API
   cost.
