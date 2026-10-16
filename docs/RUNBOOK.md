# mabel-gcse — Runbook

Claude Code follows this file. Jason starts each session with "Continue
with docs/RUNBOOK.md". Read this file, docs/STATE.md (the "Runbook
position" line) and the project rules below, then carry on from that
position. Do not ask Jason anything except the STOP cases in section 2.

## 1. Standing rules for every task

- One task = one commit. Before each task: folder is C:\dev\mabel-gcse,
  git status --porcelain empty (otherwise STOP and report), git pull.
  After each task: node tools/audit-lessons.js, commit, push, confirm
  with git log origin/main -1, then update "Runbook position" in STATE
  in the same or a follow-up commit.
- When a session ends mid-task (usage limit), nothing is committed; the
  next session redoes the task from the start.
- Never delete a file. Superseded code goes behind a flag.
- The API key is in env var SPEC_CHECK_API_KEY. Never print it, never
  write it to a file, never read ANTHROPIC_API_KEY.
- If an API call fails with a billing or credit error: STOP (see
  section 2).
- Before marking anything verified, re-read what you claim from disk;
  no status from memory.

EDIT RULES for lesson content:
- Edit only what a decision or finding names. A term fixed for a
  wrong_terms finding is fixed everywhere in that lesson. A cut removes
  the content everywhere in that lesson (content, writeBullets,
  keyTerms, tables, tutor_note, memTip, examTip(s), commonMistakes,
  revisionCardBullets, introTips, intro, checkpoints).
- Content above the specification is removed, never signposted. No
  pointers to later or higher study.
- Short real-world examples are allowed only when they illustrate
  required content and add no new term, equation, number or fact to
  learn. Do not restore examples already cut.
- tools/plain-english-rules.md; speak to "you"; never name the student;
  no sentence over 20 words; reading grade 9 or below; science terms
  exactly as the specification uses them; "potential difference",
  never "voltage".
- No exam board name, code or paper number anywhere she can see,
  including model prompts.
- Physics: never bond, bonds, bonded or bonding.
- No new real-world figures, prices, dates or market claims.
- Each key point ends with exactly one checkpoint that tests it, keyed
  by the key point's index (checkpoints[i] shows right after
  keyPoints[i]). Re-key when a key point is removed or added.
- Log every change in tools/spec-check-results/<TOPIC>-FIX-LOG.md:
  lesson | field | decision or finding ID. For every change made for a
  factual_errors, above_gcse or missing_spec_content finding, also log
  the old text and the new text in full.

## 2. STOP cases (the only times to wait for Jason)

- git status not empty at the start of a task, or HEAD not where STATE
  says.
- API billing or credit error. Report: "Add credits, then type
  Continue."
- Phase 2 gate: Mabel's verdict is not yet recorded (section 4).
- A change would delete a file, or would remove taught content that
  the specification requires.
On STOP: commit nothing partial, report in three lines, end.

When Jason types a line starting "Mabel:" at any time, write it verbatim
with the date to docs/MABEL-FEEDBACK.md, commit "Mabel feedback", and
continue.

## 3. The topic loop (used for every science topic)

Input: TOPIC (e.g. P3), its lesson files, TRIAGE FILE
tools/spec-check-results/<TOPIC>-TRIAGE.md (create if missing), runs
already used (count the "## R" sections in the TRIAGE FILE plus the
first runs recorded in SUMMARY.md for that topic). Limit 5 runs per
topic (P1: 8).

a. Record BASE = HEAD.
b. Checks, fix until clean: scanner shows no ERROR or WARN in any topic
   lesson; every topic JSON parses.
c. If runs used = limit, go to g as NOT CLEAN. Otherwise
   node tools/spec-check.js --topic <TOPIC> --run --max-usd 3. Name the
   run R<n>.
d. For every finding in all five categories decide ACCEPT or REJECT.
   REJECT only for:
     R-a already decided in the TRIAGE FILE (give the ID);
     R-b the lesson wording matches the specification text (quote it);
     R-c the correction would break an EDIT RULE or contradict the
         specification text (say which);
     R-d moot, the text no longer exists;
     R-e taught in a sibling lesson of the same topic (name it, quote
         the line found by grep);
     R-f a skills or practical suggestion the specification marks as a
         skills opportunity, not required content.
   Anything else is ACCEPT. Append "## R<n>" to the TRIAGE FILE: one
   line per finding (lesson | category+index | ACCEPT or REJECT code |
   summary), with BLOCKING ACCEPTs (factual_errors, above_gcse,
   missing_spec_content) and NON-BLOCKING ACCEPTs (wrong_terms,
   checkpoint_mismatch) counted at the top.
e. Apply every ACCEPT under the EDIT RULES.
f. If BLOCKING ACCEPTs = 0: CLEAN, go to g. Else back to b.
g. Independent audit: invoke the lesson-auditor subagent with BASE set
   to the commit before this topic's first loop edit (for P1, P2 and P3
   use d08b060). Do not edit .claude/agents/lesson-auditor.md; confirm
   its md5 is 90b88f8fd486eab28278852ee5ed067a first. Read its findings
   file. Fix every factual error, contradiction, wrong term and rule
   breach it finds, once, logging old and new text. Any finding you
   reject must cite an R code; write it to docs/ESCALATIONS.md with the
   topic and the auditor's evidence.
h. node tools/check-rewrite.js BASE: every failure must match a FIX-LOG
   line, otherwise undo it.
i. STATE row for the topic: S1–S3 "✓ <hash> (re-proved after content
   fix)"; S6 "✓ <hash> (clean at R<n>; audited <auditor file>)" or
   "✓ <hash> (not clean after <limit> runs; auditor-reviewed; open
   items in docs/ESCALATIONS.md)"; Notes point to the TRIAGE FILE.
   Commit "<TOPIC>: spec-check loop and independent audit". Push.

Starting notes:
- P1: runs used 5, limit 8.
- P2: runs used 5 (limit reached). Also cut "conventional current" from
  the diode symbol description in p2-components (decision R2-extend,
  log it).
- P3: runs used 1. Spec 4.3.3.3 (work done on a gas) is added to
  p3-pressure as a new key point during the P3 loop (defect 11).

## 4. Phases

Phase 1 — while P1 is with Mabel
1.0 P1: section 3 in full (loop from R6, limit 8, then audit g–i).
1.1 P2: section 3 (it goes straight to g as NOT CLEAN), including the
    R2-extend cut.
1.2 Roadmap: add a "Physics roadmap" section to STATE listing, with
    status: S4 diagrams (33 of 34 lessons have none), S5 checkpoint
    proof, check D teach simulator, T1 teach-enable, defect 11 new
    lessons (4.5.3, 4.5.4, 4.5.5, 4.6.3, 4.8.1.1, 4.8.1.2, 4.8.2; P8
    Space becomes a new topic in data/physics-syllabus.json), and the
    maths track.
1.3 S5 structural check: add to tools/audit-lessons.js an ERROR when a
    lesson's checkpoint keys are not exactly 0..(number of key points
    − 1). S5 for a topic = this check clean AND the last spec-check run
    has no checkpoint_mismatch ACCEPT.
1.4 S4 diagram check: build tools/check-diagrams.js. Render each
    diagrams/<subject>/*.svg headless (Playwright or Puppeteer, dev
    dependency only, never loaded by the site) and flag text that
    overruns the viewBox or overlaps other text. Report counts. If no
    headless browser can be installed, record "S4 check blocked:
    <reason>" in STATE and continue.
1.5 Check D design: read js/lessons.js and the teach-mode code. Decide
    whether the decision and prompt-building functions can run in Node.
    If not, move them into a module both the browser and Node load,
    with no change in behaviour: prove it by building the same prompts
    for p3-particle-model before and after and diffing them (must be
    identical). Then build tools/teach-sim.js as specified in the
    project instructions (check D): scripted student turns (correct,
    wrong, "idk", yes/no at the check-in, off-topic, "give me the
    answer"); score every tutor turn for yes/no questions, stock
    praise, unanswerable questions, over-length, cut-off sentences,
    board name, student's name, URLs, points that never complete, no
    clean ending; save transcripts to tools/teach-sim-runs/. Use
    SPEC_CHECK_API_KEY; dry-run cost estimate first; --max-usd guard
    as in spec-check. Calibrate on p3-particle-model (teach-enabled).
1.6 Maths answer check (no API cost): write tools/maths-recompute.js.
    For a fixed random sample of 40 questions (seed 2026), recompute
    every step answer in code from the question's numbers and compare
    within tolerance. Report the error rate in STATE. Do not change any
    question.
1.7 Then STOP if docs/MABEL-FEEDBACK.md has no entry: "Phase 1 done.
    Waiting for Mabel's verdict on P1. Type 'Mabel: <what she said>'."

Phase 2 — after Mabel's verdict is recorded
2.0 Read docs/MABEL-FEEDBACK.md. If it says the content or questions are
    the problem, write docs/PHASE2-PLAN.md proposing the content change
    in one page, then continue with 2.1 using it. If it says the look is
    the problem, record that in STATE, skip to 2.4 for content and add
    "Design: ask Mabel to name two screens" to ESCALATIONS.md.
    Otherwise continue.
2.1 Topic loop (section 3) for P3, P4, P5, P6, P7, in order.
2.2 Defect 11: write the seven new Physics lessons and P8 Space topic
    from the specification text, following the lesson TEMPLATE fields
    used by existing Physics lessons, then run the topic loop on each
    affected topic (new lessons start at run 1).
2.3 S4: draw diagrams for every Physics visual concept the spec-check
    or auditor names, run tools/check-diagrams.js until clean.
2.4 Teach mode: add each finished Physics lesson to TEACH_ENABLED, run
    tools/teach-sim.js on it, fix lesson faults in the lesson; fix
    shared-code faults once behind a flag and re-run every
    teach-enabled lesson.
2.5 When every Physics row in STATE is ✓ on S1–S6 and T1–T3: STOP with
    "Physics finished. One real session needed (Jason or Mabel)."

Phase 3 — Biology, then Chemistry: defect 10 renderer fix first (it is
recorded in STATE), then plain-English rewrite batches, then the topic
loop per topic. Order follows the syllabus files.
