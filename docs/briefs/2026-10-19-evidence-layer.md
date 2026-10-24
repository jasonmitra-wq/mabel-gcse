Brief from the planning chat, 2026-10-19 (4): evidence layer for the
pilot. First save this whole message, word for word, to
docs/briefs/2026-10-19-evidence-layer.md and commit "Brief: evidence
layer". The pilot lessons were rebuilt under
docs/briefs/2026-10-19-pilot-feedback-v3-1.md (commits 3ac569a,
c643030, 508b585). Do not rebuild them. Add the evidence layer below
and change the lessons only where the evidence shows a gap. Scope stays
the two pilot lessons (p2-current-voltage, p2-components).

Principle: check the lessons against the exam and against the student,
not against our notes. Raw sources only: the specification, past
papers, mark schemes, examiner reports, research on students'
misconceptions, and the student's own answers. Do not use our triage
files or tester judgements as sources.

PRIVACY AND COPYRIGHT (the repo is public):
- The student's answers, scores and logs are never committed. They live
  in her browser (localStorage) and, when exported, in a gitignored
  local folder data/private/. Only anonymous summaries (counts,
  percentages, no names, no free text she typed) go into the repo.
- Past papers, mark schemes and examiner reports are downloaded to a
  gitignored local folder data/exam/ with a MANIFEST.md (title, year,
  source URL, md5) like data/spec/. Their text is never committed and
  never copied into lessons. Lesson and test questions are our own,
  modelled on the question types.

0. Confirm you are on this PC (C:\dev\mabel-gcse or a worktree), not a
   cloud container; no other Claude Code session is running; git status
   --porcelain empty; git pull. Push with git push origin HEAD:main.

1. Raw sources (no API cost).
   a. Electricity is examined in Physics Paper 1. Download to data/exam/,
      for Paper 1 Foundation (1F) and Higher (1H), every available
      series (specimen, 2018 to the latest): the question paper (QP),
      mark scheme (MS) and examiner report ("Report on the Examination",
      WRE).
      Source order:
      1. The exam board's file store, filestore.aqa.org.uk. Known
         patterns: /sample-papers-and-mark-schemes/<year>/<month>/
         AQA-84631F-MS-JUN23.PDF, AQA-84631F-WRE-JUN23.PDF,
         AQA-84631H-MS-JUN22.PDF; question papers as
         AQA-84631F-QP-<series>.PDF; specimen papers as
         AQA-84631F-SQP.PDF and AQA-84631F-SMS.PDF. Find the exact
         links from the exam board's past-papers page for Physics 8463
         rather than guessing.
      2. Only for a document not available there: savemyexams.com
         (GCSE Physics AQA past papers), physicsandmathstutor.com or
         mathsgenie.co.uk. Record the source of every file in
         MANIFEST.md.
      If neither gives a document, record it as missing and carry on;
      do not stop.
   b. From them, list every question part that tests the specification
      sections of the two pilot lessons: question type (recall,
      calculation, graph, practical, explain), marks, and what the mark
      scheme gives marks for, in our own words. And list every common
      error the examiner reports name for these sections. Save as
      data/exam/electricity-outcomes.md (gitignored) and an anonymous,
      paraphrased summary as tools/pilot/outcomes.md (committed:
      question types, mark-earning points in our words, and error
      patterns; no copied text).
   c. Misconceptions: from published physics-education sources (for
      example the Institute of Physics' teaching guidance on
      electricity, and research summaries on students' ideas about
      circuits), list the known misconceptions for these sections, each
      with its source URL. Save as tools/pilot/misconceptions.md. Do
      not use model memory alone; every item needs a source you have
      opened.
   d. Extra practice to link to (not copy): Isaac Physics (University of
      Cambridge) GCSE electricity problems. Record the links in
      tools/pilot/outcomes.md, and add a "More practice" link at the
      end of each pilot lesson.

2. Prerequisite map. Write data/prereq/physics-electricity.json: every
   idea and term the two lessons use, what each depends on (including
   maths skills: rearranging, units, reading a graph), and where each
   is taught (lesson, or "outside these lessons"). Extend
   tools/check-lesson-v3.js: a lesson may only use an idea after its
   prerequisites, in order. [free check] Also give the text tester the
   prerequisite map, so its judge knows which terms come from the
   earlier lesson (this removes the false "term used before explained"
   hits on p2-components).

3. Gap check of the two lessons against steps 1–2 (no rebuild):
   - Every exam ability from 1b is taught and practised at least once,
     with marking that follows the mark-scheme points (in our words).
     Where one is missing, add it in the lesson's existing shape.
   - Every misconception from 1c is met head-on in the lesson: she
     predicts first (for example, "add a second cell: what happens to
     the lamp and the ammeter?"), then sees it in a widget, then
     explains it in one line. Where one is missing, add it.
   - Every common error from the examiner reports is covered by a
     worked example, a "watch out" or a practice question.
   - The prerequisite check passes.
   Record the gaps found and what was added in tools/pilot/gaps.md.
   Changed lessons go through the fixed sequence steps b–f once.

4. Diagnostic test (before the lessons). Build a short test (12 to 15
   questions, about 10 minutes) in the app, reachable from the
   Electricity topic as "Quick check before you start", and shown
   before the first pilot lesson if she has not done it:
   - the prerequisites from step 2, including the maths she needs;
   - one diagnostic multiple-choice question per misconception from
     step 1c, where each wrong option matches one misconception;
   - three exam-style questions of the types in step 1b.
   Marked in code. The result is stored in her browser and shown to her
   as "what you already know" and "what we'll work on". It also tells
   the lessons where to start (skip what she knows; recap what she
   lacks).

5. Measuring learning (the evidence).
   - Post-test straight after each lesson, and a delayed test one week
     later: each 8 to 10 exam-style questions of the 1b types, with
     different numbers and contexts from anything in the lesson, marked
     in code against mark-scheme points, plus the misconception
     questions again.
   - Success criteria, set now, before she starts: post-test at least
     70%; delayed test at least 60%; every misconception she showed in
     the diagnostic gone in the delayed test; she finishes both
     lessons.
   - Logging, kept in her browser and visible to her in a "My record"
     page she knows exists: time per key point, where she said "don't
     know", hints and "tell me" used, answers. An "Export for Jason"
     button saves it to a file; tools/pilot/analyse.js reads it from
     data/private/ and writes only anonymous summaries to the repo,
     scored against the success criteria.

6. Layout fault from the v3.1 site tests: the Silver-the-cat popup must
   never cover buttons or text on any screen; it appears only at a
   natural break, in a corner, dismissible, and never during a
   question, test or the diagnostic. Check at phone size.

7. Independent expert review (optional, Jason decides): write
   tools/pilot/teacher-review.md, a one-page brief a qualified physics
   teacher could use to review the two lessons in an hour (what to look
   at, with the lesson links).

8. Checks before handing over: every free check passes, including the
   prerequisite order; tools/site-test.js once at phone size on the
   diagnostic and on one lesson, for breakage only; fix breakage once.
   No text-tester rounds.

9. Runbook: in docs/RUNBOOK.md Phase A, replace the A9 gate with: STOP
   with "Pilot ready. Mabel: first do 'Quick check before you start',
   then both Electricity lessons as AI lessons, then the post-test; the
   delayed test unlocks in a week. Jason: try both lessons as slides
   (not before Mabel's quick check, if on her device). Type 'Pilot:
   <what you think>' and 'Mabel: <what she said>'." Add: "After the
   delayed test, run tools/pilot/analyse.js; the planning chat decides
   whether to roll the approach out to all subjects." Set "Runbook
   position: Phase A, A9 (evidence pilot gate)" in STATE. Commit. Push.

10. Report in plain words: the sources downloaded (titles, years, and
    which came from the exam board's own site); any missing; how many
    exam question parts and examiner-named errors were found for these
    sections; the misconceptions list with sources; the gaps found and
    what was added; what the diagnostic covers; the check results; the
    API cost.
