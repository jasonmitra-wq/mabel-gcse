# mabel-gcse — Runbook v3 (lesson rewrite)

Jason starts each session with "Continue with docs/RUNBOOK.md". Read
this file and the "Runbook position" line in docs/STATE.md, then carry
on. Never ask Jason anything except the STOP cases in section 2.

## 1. Rules for every task

- Work only on this PC (C:\dev\mabel-gcse or a worktree of it); push
  with git push origin HEAD:main. If the session is in a cloud
  container or cannot push to GitHub, stop at once and say so.
- One session at a time. git status --porcelain empty at the start
  (otherwise STOP); git pull.
- Commit and push after every lesson. Update "Runbook position" in
  STATE with each commit, precise to the lesson and step.
- Every brief from the planning chat is saved word for word to
  docs/briefs/ before it is started. Never search old session
  transcripts for instructions; if a brief is missing, stop and say
  which.
- Never delete a file. Superseded code goes behind a flag.
- API key: env var SPEC_CHECK_API_KEY (if unset, read it with
  [Environment]::GetEnvironmentVariable('SPEC_CHECK_API_KEY','User')
  inside the same command). Never print it or write it to a file. Never
  read ANTHROPIC_API_KEY. Record every API call's cost in the STATE
  Spend table.
- The AI tutor is frozen except for the PILOT_FIX behaviour in
  docs/briefs/2026-10-19-pilot-feedback-v3-1.md. No other tutor
  changes, no tutor tuning, no tester rounds aimed at tutor behaviour.
- No loops. Each lesson goes through the fixed sequence in section 3
  once. Nothing is re-run except the free script checks.
- Escalations do not stop work: write them to docs/ESCALATIONS.md and
  carry on. The planning chat decides them.

## 2. STOP cases (the only times to wait)

- git status not empty at the start, or HEAD not where STATE says.
- API billing, credit or spend-limit error: "Add credits or raise the
  limit, then type Continue."
- Usage limit reached: commit what is complete, then end.
- The pilot gate (task A9) and the end-of-subject gates.
- A change would delete a file.
When Jason types a line starting "Mabel:" or "Pilot:", write it verbatim
with the date to docs/MABEL-FEEDBACK.md, commit, and continue as the
current task says.

## 3. The lesson shape and the fixed sequence for each lesson

LESSON SHAPE (all subjects):
- The lesson follows the syllabus: one key point per specification
  idea, in specification order. The lesson's specChecklist lists every
  statement of its specRef sections (as specRef plus a paraphrase of at
  most 12 words; never copy specification text into the repo) and the
  key point that teaches it.
- Each key point's content is teaching, written for a first-time
  learner, in the style of lessons/biology/b3-defences.json: why it
  matters → what you would see or do → the idea → its proper name →
  how it is used. Every term is explained in everyday words the first
  time it appears (mark it with <dfn>term</dfn>), or it is listed in the
  lesson's prerequisites with the earlier lesson that teaches it.
  Comparisons are welcome when they illustrate the idea; each is listed
  in the key point's analogies field with one line on where it stops
  being true.
- Each key point ends with examBox: the exact definition(s),
  equation(s) with symbols and units, as an exam expects them.
- Every equation has a workedExample with real numbers, broken into
  small steps (including any rearranging and unit conversion), and the
  numbers are checked in code.
- A diagram wherever a picture makes the idea clearer (hand-written SVG,
  tools/check-diagrams.js clean, science checked).
- Slides show only: the diagram, the examBox, at most three short
  writeBullets, and the worked example revealed step by step; the full
  teaching text is behind "Read the full explanation".
- One quick "try it" checkpoint per key point that tests that key point.
- About 15 minutes at most: about 1,200 words of teaching text. Longer
  lessons are split into two lessons in the syllabus file.
- Plain English: short sentences where possible; a sentence carrying a
  "because" or "so" may run to 30 words. Specification terms are taught
  and used exactly, after their everyday explanation, and are not
  repeated where plain words do the job. No exam board name, code or
  paper number; no tier labels; no specification numbering in lesson
  text. Physics: never bond, bonds, bonded or bonding. No real-world
  figures, prices or dates unless sourced in the lesson's sources field.
- Use the existing triage decisions for the topic
  (tools/spec-check-results/<TOPIC>-TRIAGE.md) as the to-do list: what
  was missing, wrong or above GCSE.
- The additions in docs/briefs/2026-10-19-pilot-feedback-v3-1.md, step
  1, apply to every lesson in every subject.

FIXED SEQUENCE (once per lesson, no repeats):
a. Rewrite the lesson in the shape above. Keep the existing file's other
   fields (id, topic, basics, diagrams, revisionCardBullets, etc.).
a2. Build the lesson's picture sequence, worked examples, practice
   generators, widgets and consolidation items (brief v3.1, step 1).
b. Free script checks (tools/check-lesson-v3.js, task A2) until clean:
   spec checklist complete; every glossary term explained at first use
   or listed as a prerequisite; length; sentence rules; every examBox
   equation has a worked example whose numbers recompute; diagrams
   clean; no banned words.
c. One fact check: node tools/spec-check.js --blocking-only --run on
   the lesson. Fix every accepted finding once, under the shape rules
   (weave missing points into the teaching, never bolt on spec
   wording). Log old and new text in the topic FIX-LOG.
d. One independent read: the lesson-auditor subagent (md5
   bd6484be683355a5ff38abc61f4ee9f9; never edit it) with BASE = the
   commit before step a. Fix its findings once; rejections with reasons
   go to docs/ESCALATIONS.md. Re-run step b (free).
e. Glossary: add the lesson's terms to the subject glossary (task A4).
f. Commit "<lesson>: rewritten (v3)". Push. Record in STATE: done, with
   hash and cost.
When every lesson in a topic is done: run tools/site-test.js once on
one lesson of the topic at phone size, for breakage only (nothing
broken; diagrams and exam boxes readable). Fix breakage once. The AI
tutor is on for every lesson in the topic. Commit "<topic>: done
(v3)".

## 4. Phases

Phase A — pilot
A1 Write tools/lesson-shape-v3.md: the shape and rules from section 3,
   with one short example key point written to them.
A2 Build tools/check-lesson-v3.js (free, no API): the step b checks.
   The specification statements for a specRef come from the local
   data/spec/<subject>.md; the glossary-term check uses the subject
   glossary plus each lesson's keyTerms.
A3 App changes, each behind a flag, old behaviour kept:
   - slides use the new shape (section 3, "Slides show only");
   - the AI tutor's brief includes the examBox and workedExample fields
     (no other tutor change);
   - glossary (A4) shown in lessons and the AI chat.
A4 Glossary, all subjects: data/glossary/<subject>.json built from every
   lesson's keyTerms and <dfn> terms (term, plain definition, lesson
   id). In slides and AI messages, a term from the glossary is
   underlined; tapping it shows its definition and the lesson it comes
   from. A "Words I've learned" page lists the terms from lessons she
   has opened, by topic, with a link back to each lesson. When she opens
   a lesson whose prerequisites include terms from lessons she has not
   opened, the lesson starts with a short card: the terms with one-line
   meanings, a button "Go to <earlier lesson>" and a button "Carry on".
A5 Rewrite p2-current-voltage, then p2-components, through the fixed
   sequence. Run tools/site-test.js once on each at phone size, for
   breakage only, and save screenshots.
A6 Rebuild the two pilot lessons with the v3.1 additions and the
   PILOT_FIX tutor (A7–A9).
A7 Build the practice generators for Q = It, E = QV and V = IR; the
   circuit widget (add cells, potential-difference slider, ammeter
   reading, lamp brightness); the I-V graph widget; the picture
   sequences for both lessons.
A8 Run both lessons through the fixed sequence again (steps a–f). Then:
   tools/site-test.js once on each at phone size, for breakage only;
   and the text tester once on each, reporting (not gating) the counts
   for: messages over 60 words, two questions in one message, her
   question not answered first, two key points in one message, answer
   in question, term used before explained. Any of these above zero is
   fixed once in PILOT_FIX and the text tester re-run once.
A9 EVIDENCE PILOT GATE (brief docs/briefs/2026-10-19-evidence-layer.md,
   step 9). STOP with "Pilot ready. Mabel: first do 'Quick check before
   you start', then both Electricity lessons as AI lessons, then the
   post-test; the delayed test unlocks in a week. Jason: try both lessons
   as slides (not before Mabel's quick check, if on her device). Type
   'Pilot: <what you think>' and 'Mabel: <what she said>'."
   After the delayed test, run tools/pilot/analyse.js; the planning chat
   decides whether to roll the approach out to all subjects.

Phases B, C and D: each lesson includes the v3.1 additions (brief
docs/briefs/2026-10-19-pilot-feedback-v3-1.md, step 1). Maths (Phase D)
uses the same picture sequence, worked examples, practice generators,
widgets and consolidation; its existing question bank provides practice
where a generator is not needed.

Phase B — Physics
B1 The lessons live with the AI tutor first: the rest of P2, then P1,
   then P3. Then P4, P5, P6, P7, P8. Section 3 for each lesson.
B2 When all Physics topics are done: STOP with "Physics finished. One
   real session needed (Jason or Mabel)."

Phase C — Biology, Geography, Chemistry
C1 b3-defences and the G5 lessons: keep their style; add examBox,
   workedExample where there is an equation, specChecklist, <dfn>
   marks; then steps b–f.
C2 The rest of Biology, then Chemistry, then Geography (G5 topic first):
   section 3 for each lesson. Fix defect 10 (renderer drops text) before
   the first Biology rewrite. STOP at the end of each subject for one
   real session.

Phase D — Maths
D1 Maths lessons in the same shape: why → idea → rule box (one rule per
   line, each with a tiny example) → worked example revealed step by
   step → "try it". Same checks, with every number recomputed in code.
D2 Every maths question where all steps are statements (about 33) is
   rewritten so each step she can do has an answer box with a checked
   answer. tools/maths-recompute.js must pass on the whole bank.
D3 The AI tutor for maths uses the same frozen tutor, briefed from the
   maths lesson fields; numbers she types are checked in code, never by
   the model.
D4 STOP: "Maths finished. One real session needed (Mabel)."
