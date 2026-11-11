Brief from the planning chat, 2026-11-11 (2): written-once teaching
(scripted AI lesson), pilot on key points 1–2 of p2-current-voltage.
First save this whole message, word for word, to
docs/briefs/2026-11-11-scripted-teaching.md and commit "Brief:
scripted teaching". Jason approved this design change and the change to
shared teach-mode code by pasting it.

Decision (Jason, 2026-11-11): the AI lesson's teaching is written once,
checked, and stored. The AI is used only to (1) mark her typed
answers, (2) answer her own questions, (3) sort her messages. The
current live-written tutor stays behind its flags; nothing is deleted.

0. Confirm you are on this PC in C:\dev\mabel-gcse (or a worktree), no
   other Claude Code session running, git status --porcelain empty,
   git pull. Push with git push origin HEAD:main.

1. Write docs/RETROSPECTIVE-ai-tutor.md with exactly this text, and add
   a line to docs/RUNBOOK.md section 1: "Read
   docs/RETROSPECTIVE-ai-tutor.md before any work on the AI lesson."

   # Why the AI lesson went down a fruitless rabbit hole (2026-10-24 to 2026-11-11)
   1. Wrong design. The AI wrote every teaching message live, so every
      message was a new chance to fail and no fix was ever final. The
      original plan said "written once and stored"; it was not held to.
   2. Tests that couldn't fail it. Testers checked short pass lists the
      planning chat wrote. "Pass" meant "follows these rules", not
      "teaches well", and the lesson was declared ready on that basis.
   3. Patches on patches. About ten fix rounds left nine stacked flags
      (FLOW_FIX, FIRST_TIME, PILOT_FIX, KP_LOOP_FIX, KP_ORDER, KP_SHORT,
      TELL_FIX, MARK_FIX, COVER_FIX). Many fixes were word lists and
      overlap guesses that broke on how she really types.
   4. The planning chat's briefs added faults: ticking a point after 3
      practice questions; an overlong per-point sequence; telling
      lesson sentences verbatim.
   5. "One more round". By 2026-10-27 each run was finding about five
      new faults; this was noticed and another round recommended
      anyway.
   6. Jason was the real test, and came last. He found in minutes what
      about $16 of paid test runs had missed.
   Rule since: content is written once and checked before anyone sees
   it; Jason reads it before it counts as finished. Runtime AI only
   where it must react to what she types.

2. Script format. Design a "script" for each key point, stored in
   lessons/physics/p2-current-voltage.script.json (lesson file
   unchanged). Steps:
   - say: one idea, ≤60 words, at most one new term, explained in the
     sentence that first uses it; no opener (pronoun, So, This, That,
     It) without its referent in the same step.
   - ask: the question; its type (tap / number / short text); the
     expected answer(s); a reply for right; replies for each likely
     wrong answer (one per misconception in tools/pilot/
     misconceptions.md that applies, plus "other wrong"); a "don't
     know" path that is easier (a hint or a smaller question, up to
     two levels, then the answer with why). Never states the answer
     before asking.
   - equation: names each symbol with quantity and unit.
   - worked example: card only, one step per tap.
   - practice: existing generators.
   - widget: predict → test → "Now explain it" after the control is
     used; only the controls the prediction needs.
   - own words; mixed question.
   Every path ends back on the script. A schema check (free) validates
   every step.

3. Engine, behind a new flag SCRIPTED (on for p2-current-voltage only;
   other lessons unchanged): code plays the script. AI calls only:
   a. marking typed answers: given the question, expected answers, the
      lesson's rules and the misconceptions; returns which branch
      (right / a named wrong answer / other wrong / don't know); the
      reply text comes from the script, never from the model.
   b. her own question (sorted by the existing classifier): answered in
      ≤60 words from the lesson file only, then the same step is asked
      again.
   c. sorting her messages: the existing classifier.
   In scripted mode the lesson covers key points 1 and 2, then ends
   with "That's as far as this version goes. The rest is on the slides
   for now." and buttons to the slides and home.

4. Write the script for key points 1 and 2 (Opus, in this session),
   from the lesson file, tools/pilot/outcomes.md, misconceptions.md,
   data/prereq/physics-electricity.json and docs/FAULTS.md.

5. Check the script BEFORE any site test:
   a. Free: walk every path of the script statically (every branch,
      every don't-know level) and run tools/check-transcript.js on each
      path. Zero findings required.
   b. Paid: tools/review-lesson.js on the whole script, all branches
      laid out (cap $1.50), as an experienced physics teacher teaching
      a 15-year-old for the first time, FAULTS.md as checklist.
   c. Fix every finding in the script; re-run the free walk and one
      more review (cap $1.50).

6. Jason's copy: write docs/review/p2-current-voltage-kp1-2.md, the
   script laid out as she would read it: the main path in order, each
   question followed by what she sees for right, each wrong answer, and
   each don't-know level. Plain text, no code. This is what Jason reads.

7. Site test (cheap now): one tools/site-test.js --persona mabel run,
   key points 1–2, laptop size (cap $0.50); run check-transcript on it.
   Report AI calls per key point and cost per key point.

8. STATE: "Phase A, A9: evidence pilot gate. Scripted AI lesson
   (p2-current-voltage key points 1–2) waiting for Jason to read
   docs/review/p2-current-voltage-kp1-2.md; slides ready." ESCALATIONS
   entry, spend table. Free checks including check-versions. Commit.
   Push. Report the hash, the two review results, the free-walk
   result, the site-test result and cost per key point, and the API
   cost. Then STOP: no more key points until Jason has read the review
   copy and said "Script: ok" or what to change.
