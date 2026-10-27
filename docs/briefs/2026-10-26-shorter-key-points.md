Brief from the planning chat, 2026-10-26 (3): shorter key points and
reading her messages. First save this whole message, word for word, to
docs/briefs/2026-10-26-shorter-key-points.md and commit "Brief:
shorter key points". Jason approved this change to shared teach-mode
code by pasting it.

Why: a6ae8ab's site tests took 33–47 turns per key point; with 7 key
points that is about 250–300 turns per lesson, and the bored student
stopped in key point 3 or 4 both times. The planning chat's sequence is
the cause. Separately, her questions are still found by word lists and
"?" (WHY_ASKED and the rules around it in js/teach-core.js), which
will miss phrasings such as "wait is that the same as voltage".

0. Confirm you are on this PC in C:\dev\mabel-gcse (or a worktree), no
   other Claude Code session running, git status --porcelain empty,
   git pull. Push with git push origin HEAD:main.

1. Gate 0: count the steps a key point now runs in the AI lesson for
   each of p2-current-voltage's and p2-components' key points, and the
   turns each took in the a6ae8ab re-run. Say where every turn went.

2. Shorter sequence, behind a new flag KP_SHORT (on by default; KP_ORDER
   stays). In the AI lesson only (slides unchanged), each key point
   runs:
   - the teaching;
   - 1 worked example (her answer marked as now); then a button "Show
     me another" for the next ones, which she may ignore;
   - 1 practice question, only after the equation is taught; then
     "Try another", optional;
   - the predict-first widget only if the key point has one tied to a
     misconception in tools/pilot/misconceptions.md;
   - her own-words line;
   - 1 mixed question.
   Optional buttons never block moving on. Target: about 15 turns per
   key point for a student who takes no extras. Ticked at the end, as
   now.

3. Reading her messages: when the code's rules are not certain what her
   message is, one small model call (claude-haiku-5-5; check the exact
   name with GET /v1/models first, as spec-check does) classifies it
   as: answer to the waiting question / her own question / a statement
   about the topic / off-topic / don't know / move on. Its result
   decides the path. Clear cases (a button tap, a bare number, "idk",
   "next") stay in code with no call. Log every classification in the
   transcript. Add 20 test messages to a free check (her real phrasings
   from the site-test transcripts, including "wait is that the same as
   voltage", "why 0.05 tho? i said 50", "is that like a resistor",
   "omg im so hungry", "0.5 times 2 so like 1") with the expected
   class, run against the classifier with --run only (cost under
   $0.05); the free version checks the code path for clear cases.

4. With the flags off, byte-identical on 5 lessons as before.

5. Checks: all free checks, including check-versions; then ONE
   tools/site-test.js run on p2-current-voltage as an AI lesson at
   phone size, the whole lesson (cap $2.50). Report turns per key
   point, whether it reached the end quiz, every classifier call that
   looks wrong, and the pass items from the last brief. Fix breakage
   once; no re-run.

6. ESCALATIONS (new entry), spend table. Leave STATE's runbook position
   at A9. Commit. Push. Report: the step counts from Gate 0, what
   changed, the site-test result, and the API cost.
