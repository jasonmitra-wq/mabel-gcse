Brief from the planning chat, 2026-11-18: shared fixes from the
repeated reviewer complaints, then G5. First save this whole message,
word for word, to docs/briefs/2026-11-18-shared-script-fixes.md and
commit "Brief: shared script fixes". Jason approved this change to
shared teach-mode code by pasting it.

Why: the script reviews for P2, P1 and P3 raised the same complaints
each time; they come from js/teach-script.js and the shared answer
prompt, not the scripts.

0. Confirm you are on this PC in C:\dev\mabel-gcse (or a worktree), no
   other Claude Code session running, git status --porcelain empty,
   git pull. Push with git push origin HEAD:main. Use the API key saved
   in the Windows user environment, not the terminal's.

1. Fixes, behind a new flag SCRIPT_POLISH (on by default; with it off,
   every scripted lesson's walk output is byte-identical to before):
   a. "Don't know" replies: no fixed "That's fine." opener. Lead with
      the help itself; where an opener is wanted, rotate short ones so
      no opener repeats within 5 of her "don't know"s in a lesson.
   b. Own-words feedback: one point per sentence, each saying what was
      there or missing; never several points joined with commas or
      "and".
   c. End of every scripted lesson: a closing summary (the lesson's key
      points, one line each, from the script, not written live), then
      the revision-cards offer as now.
   d. The live answer to her own question never opens with "That
      question", "Good question" or any comment on the question; it
      opens with the answer.
   Search every file that shares this logic (teach-script.js, the
   answer prompt, tools/check-transcript.js) and state the counts.

2. Checks that stop them coming back: add to tools/check-transcript.js
   (named by FAULTS.md id, new ids added to docs/FAULTS.md): the same
   opener twice within 5 replies to "don't know"; own-words feedback
   with more than one point in a sentence; a lesson ending with no
   summary; an answer to her question opening with a comment on the
   question. Prove each fails with SCRIPT_POLISH off.

3. Hands-on: write tools/pilot/widget-candidates.md: for each of the 17
   scripted lessons, the one interactive (widget) that would most help,
   tied to a misconception or exam skill, with what she'd do and see.
   Do not build any. The planning chat decides.

4. Free checks (check-versions, check-kp-run --jason,
   check-widget-cover, check-script on all 17); one tools/site-test.js
   --persona mabel run on p1-energy-stores, laptop, no judge. Fix
   breakage once. ESCALATIONS, spend, STATE. Commit. Push. Report the
   hash, the counts, each check proven, the site-test result and the
   cost.

5. Then continue docs/RUNBOOK.md Phase B with topic G5 (G-a to G-d
   first) and stop at its "Topic done" line.
