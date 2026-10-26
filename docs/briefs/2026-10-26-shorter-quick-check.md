Brief from the planning chat, 2026-10-26: shorter quick check that
teaches, shown when she opens the topic. First save this whole
message, word for word, to
docs/briefs/2026-10-26-shorter-quick-check.md and commit "Brief:
shorter quick check". Jason's decisions: 15 questions is too many for a
first-time learner before any teaching; the quick check must help her
to the right answer, correct her mistakes, and connect each one to what
the lesson will teach; and it must appear when she opens the topic,
not be one card among many.

0. Confirm you are on this PC in C:\dev\mabel-gcse (or a worktree), no
   other Claude Code session running, git status --porcelain empty,
   git pull. Push with git push origin HEAD:main.

1. Cut the diagnostic ("Quick check before you start", js/pilot/
   tests.js) to 6 questions, about 5 minutes:
   - keep the 4 prerequisite questions (rearranging, minutes into
     seconds, milli and kilo, reading a graph);
   - keep only the 2 misconception questions she can answer from
     everyday experience with no term the lessons teach (choose from
     tools/pilot/misconceptions.md; "current is used up in the lamp"
     should be one). Reword in everyday words if needed; each wrong
     option still matches one misconception;
   - remove the 3 exam-style questions.
   Intro, in plain words: 6 quick questions; it's fine not to know;
   you'll be shown the answer each time. Update every screen that
   says "15 questions" or "10 minutes".

2. Feedback after every answer, before the next question (her first
   answer is what gets recorded and scored):
   - Right: say what was right, in one short sentence. No stock praise.
   - Wrong or "I don't know": show the right answer and why, in at most
     3 short lines. Maths questions show the working one step at a
     time, like the "Try another" wrong-answer view. Then offer one
     optional "Try a similar one" (new numbers, checked in code; not
     scored). Never make her retry to move on.
   - Every question, right or wrong, ends with one line: "In the
     lesson: ..." naming where it comes up (for example "In the lesson
     you'll test this with the circuit: add a lamp and watch the
     ammeters"). The line must match real lesson content; name the key
     point it points to in the test data and check it in
     check-tests.js.
   Wording follows tools/plain-english-rules.md: no term the lessons
   teach unless explained in the same line.

3. Where it appears (js/pilot/pilot.js topicCards and gate; js/app.js
   where the topic opens):
   - The first time she opens Physics → Electricity and has not done
     the quick check, it is offered on its own screen before the
     lesson list: a short intro, "Start the quick check" and "Not now:
     show the lessons". Offered once per visit to the topic, never
     more.
   - "Not now" always works. The card stays first in the topic list,
     clearly marked, until it is done. Before her first pilot lesson it
     is offered once more, as now; "Not now" there goes straight to
     the lesson.
   - Once done, the topic opens straight to the lesson list; the card
     shows "Done: see what it showed".

4. Measurement stays fair: the post-tests and the delayed test must not
   reuse the quick check's 2 misconception questions now that she is
   shown their answers. Write a new question for each of the 2
   misconceptions (different wording and situation, same
   misconception) and use those in the post-tests and delayed test.
   check-tests.js fails if any quick-check question appears in a later
   test.

5. Keep everything else that depends on the diagnostic working: the end
   screen ("What you already know" / "What we'll work on"), the lesson
   recaps and notes, "My record", analyse.js.

6. tools/pilot/success-criteria.md: the misconception criterion now
   refers to the 2 kept, measured by the new questions; note that the
   quick check now teaches, so it is a starting point, not a clean
   "before" score. Date the change. Other criteria unchanged.

7. Checks: all free checks, including tools/pilot/check-tests.js;
   tools/site-test.js --pilot diagnostic once at phone size, starting
   from the home screen and opening Electricity, so it shows the
   quick check appears on its own. Fix breakage once.

8. Leave STATE's runbook position at the A9 evidence pilot gate.
   Commit. Push. Report: the 6 questions with the feedback she sees
   for a right and a wrong answer to each, the 2 new later-test
   questions, what she sees on opening Electricity, the check results,
   and the API cost.
