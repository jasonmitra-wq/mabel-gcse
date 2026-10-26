Brief from the planning chat, 2026-10-24: AI tutor key-point loop. First
save this whole message, word for word, to
docs/briefs/2026-10-24-keypoint-loop.md and commit "Brief: key-point
loop". Jason approved this change to shared teach-mode code.

Fault (docs/ESCALATIONS.md, site test of p2-current-voltage,
2026-10-24): the tutor stayed on key point 1 for 30 turns asking its
own Q = It questions, never ended the point, left "4 coulombs"
unmarked, marked "more charge flow means the battery dies faster" as
not quite, sent the goodbye twice, and "0/7 covered" stayed at 0.

0. Confirm you are on this PC in C:\dev\mabel-gcse (or a worktree), no
   other Claude Code session running, git status --porcelain empty,
   git pull. Push with git push origin HEAD:main.

1. Gate 0, in the real code (js/teach-core.js, js/teach.js,
   js/lessons.js and anything they call): find what decides a key
   point is finished, what the "covered" counter reads, where answers
   are marked, and where the goodbye is sent. Say why each fault
   happens before changing anything. Search every file that shares
   this logic, including the file being edited, and state the counts.

2. Fix, behind a new flag KP_LOOP_FIX, on by default:
   a. A key point ends in code, not by the model's choice: when its
      teaching items are covered, or after at most 3 practice
      questions on it (right or wrong), or when she asks to move on.
      Then its end steps run (worked examples, predict-first widget,
      own-words line, mixed questions) and the next point starts.
   b. The tutor asks no practice question of its own invention. It
      uses the lesson's questions and the "Try another" generators.
      No question is repeated within a key point.
   c. Every answer she gives is marked before anything else is said.
      Numeric answers are checked in code where a generator made the
      question. A sensible answer that is right in substance is
      accepted, with the exam wording given after.
   d. The goodbye is sent once.
   e. The covered counter updates when each key point ends.
   With the flag off, prompts and behaviour are byte-identical to
   before; prove it on 5 lessons, as before.

3. Checks: all free checks; tools/site-test.js once at phone size on
   p2-current-voltage as an AI lesson. Pass means it reaches the end
   of key point 1, shows its predict-first widget, and the counter
   moves. Fix breakage once; no text-tester rounds.

4. Record the result in ESCALATIONS under the 2026-10-24 entry; leave
   STATE's runbook position at the A9 evidence pilot gate. Commit.
   Push. Report: the cause of each fault, what changed, the site-test
   result (how many turns it took to reach the end of key point 1,
   and whether the widget showed), and the API cost.
