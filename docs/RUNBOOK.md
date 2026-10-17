# mabel-gcse — Runbook v2

Jason starts each session with "Continue with docs/RUNBOOK.md". Read
this file and the "Runbook position" line in docs/STATE.md, then carry
on. Never ask Jason anything except the STOP cases in section 2.

## 1. Rules for every task

- Folder C:\dev\mabel-gcse (or a worktree of it whose branch is main);
  git status --porcelain empty at the start (otherwise STOP); git pull.
- Work only on this PC (C:\dev\mabel-gcse or a worktree of it); push
  with git push origin HEAD:main. If the session is running in a cloud
  container or cannot push to GitHub, stop at once and say so.
- Commit and push after every fix round, not only at the end of a task,
  so an interrupted session loses at most one round. Update "Runbook
  position" in STATE with each commit, precise to the step.
- One topic per session: after finishing a topic, end the session with
  "Topic done. Type Continue in a new session." (fresh context is
  cheaper).
- Never delete a file. Superseded code goes behind a flag.
- API key: env var SPEC_CHECK_API_KEY (if unset in the shell, read it
  with [Environment]::GetEnvironmentVariable('SPEC_CHECK_API_KEY','User')
  inside the same command). Never print it or write it to a file. Never
  read ANTHROPIC_API_KEY.
- Record every API call's actual cost. STATE keeps a "Spend" table: one
  row per topic with API runs and dollars.
- Before marking anything verified, re-read it from disk.

EDIT RULES for lesson content:
- Edit only what a decision or finding names. A term fixed for a
  wrong_terms finding is fixed everywhere in that lesson. A cut removes
  the content everywhere in that lesson (content, writeBullets,
  keyTerms, tables, tutor_note, memTip, examTip(s), commonMistakes,
  revisionCardBullets, introTips, intro, checkpoints).
- Content above the specification is removed, never signposted.
- Short real-world examples are allowed only when they illustrate
  required content and add no new term, equation, number or fact to
  learn. Do not restore examples already cut.
- tools/plain-english-rules.md; speak to "you"; never name the student;
  no sentence over 20 words; reading grade 9 or below; specification
  terms exactly; "potential difference", never "voltage".
- No exam board name, code or paper number. Never label tiers or use
  the specification's own numbering (topic, section or required
  practical numbers) in lesson text.
- Physics: never bond, bonds, bonded or bonding.
- No new real-world figures, prices, dates or market claims.
- Each key point ends with exactly one checkpoint that tests it, keyed
  by the key point's index. Re-key when key points change.
- FIX-LOG line for every change: lesson | field | decision or finding
  ID; for factual_errors, above_gcse and missing_spec_content changes,
  also old and new text in full.

## 2. STOP cases (the only times to wait)

- git status not empty at the start, or HEAD not where STATE says.
- API billing or credit error: "Add credits, then type Continue."
- Usage limit reached: commit what is complete, then end.
- A change would delete a file, or remove content the specification
  requires.
- A HOLD in the Runbook position line: stop where it says.
Escalations do NOT stop work: write them to docs/ESCALATIONS.md and
carry on. Claude in the planning chat decides them.

When Jason types a line starting "Mabel:", write it verbatim with the
date to docs/MABEL-FEEDBACK.md, remove any HOLD that waits for it,
commit "Mabel feedback", and continue. Do not change the plan because of
it; the planning chat decides that.

## 3. Topic procedure (every science topic)

TRIAGE FILE: tools/spec-check-results/<TOPIC>-TRIAGE.md. Run budget per
topic: R1 (a double run) plus at most two re-checks.

a. BASE = HEAD. Scanner clean for the topic; every topic JSON parses.
b. R1: run node tools/spec-check.js --topic <TOPIC> --run twice (R1a,
   R1b). Combine the findings; treat two findings on the same field and
   text as one.
c. Triage every R1 finding ACCEPT or REJECT. REJECT only for:
     R-a already decided in the TRIAGE FILE (give the ID);
     R-b the lesson wording matches the specification text (quote it);
     R-c the correction would break an EDIT RULE or contradict the
         specification text (say which);
     R-d moot, the text no longer exists;
     R-e taught in a sibling lesson of the same topic (name it, quote
         the line);
     R-f a skills suggestion the specification marks as a skills
         opportunity.
   Write "## R1" in the TRIAGE FILE: one line per finding (lesson |
   category+index | decision | summary). Apply every ACCEPT. Commit
   "<TOPIC>: R1 fixes". Push.
d. Re-check R2: node tools/spec-check.js --run --blocking-only
   --decided <TRIAGE FILE> <only the lessons changed in the last round>.
   Triage and apply as in c; write "## R2". Commit. If R2 has no
   ACCEPT, go to f.
e. Re-check R3: same as d, on the lessons changed in R2. Triage, apply,
   commit. Do not run R4; anything left is handled by the audit.
f. Independent audit: invoke the lesson-auditor subagent with BASE
   (confirm its md5 is bd6484be683355a5ff38abc61f4ee9f9 first; never
   edit it). Fix every factual error, contradiction, wrong term and rule
   breach once, logging old and new text. Rejections need an R code and
   go to docs/ESCALATIONS.md.
g. node tools/check-rewrite.js BASE: every failure must match a FIX-LOG
   line, otherwise undo it.
h. STATE row: S1–S3 "✓ <hash>"; S6 "✓ <hash> (R<last>; audited <file>)"
   with "clean" if the last re-check had no ACCEPT; S5 "✓" if the
   scanner's checkpoint check is clean and the last run has no
   checkpoint_mismatch ACCEPT. Spend row. Commit "<TOPIC>: done".
   End the session (one topic per session).

## 4. Phase 2 tasks, in order

2.0 Done. Mabel's verdict: bored by the slides until she has the
    interactive AI lesson. Decided by the planning chat: AI lessons
    first, topic by topic.
2.1 Cheaper defaults. Add "model": "sonnet" to .claude/settings.json
    (create it if missing). In tools/spec-check.js add: --blocking-only
    (ask the model only for missing_spec_content, above_gcse and
    factual_errors); --decided <file> (append the TRIAGE FILE's decision
    lines to the prompt under "Already decided — do not report these
    again"). Recalibrate with --blocking-only on
    tools/spec-check-calibration/p7-magnets-13ac63d.json (--file --as
    p7-magnets): it must still flag iron as a permanent magnet; if not,
    STOP and report.
2.2 Maths answers (no API): extend tools/maths-recompute.js to all 600
    questions. Fix every step whose stored answer, tolerance or unit
    disagrees with the recomputed value, or whose prompt asks for
    something different from the stored answer, so the right answer is
    accepted. Then marks = steps.length everywhere. auditStatus
    "verified" only where every step recomputes and passes. Log every
    change in tools/maths-fix-log.md with old and new values. Report the
    error rate before and after in STATE. Commit after every 100
    questions.
2.3 Teach-mode shared code (one fix for all lessons): in js/teach-core.js
    the tutor never names the student; replies over 60 words are
    shortened, and a reply still too long after retries is cut at the
    last full sentence under 60 words, not sent long; the praise filter
    also strips a stock opener ("Good", "Great", "Nice", "Well done")
    unless it directly names what was right. Behind a flag, old path
    kept. Re-run tools/teach-sim.js --rescore and one --run on
    p3-particle-model; all three fault types must be gone.
2.4 Missing Physics content before any further topic loops:
    - new lessons 4.5.3 forces and elasticity, 4.5.4 moments levers and
      gears, 4.5.5 pressure in fluids (into P5); 4.6.3 black body
      radiation (into P6); a new topic P8 Space in
      data/physics-syllabus.json with lessons for 4.8.1.1, 4.8.1.2 (with
      4.8.1.3 orbits if not fully taught in p5-gravity) and 4.8.2;
    - additions: 4.5.1.2 contact and non-contact forces to
      p5-forces-motion; seismic waves (4.6.1.5) to p6-sound.
    Write each from the specification text, using the fields of
    existing Physics lessons, under the EDIT RULES. Add specRefs. Commit
    per lesson.
2.5 AI lessons for Energy (P1) and Electricity (P2), which are already
    checked:
    a. Make the AI lesson the default when a lesson is in TEACH_ENABLED
       and a key is present; the slides stay available one tap away.
       Behind a flag, old behaviour kept. Check in a headless browser
       that both paths still open.
    b. Add every P1 and P2 lesson to TEACH_ENABLED.
    c. Run tools/teach-sim.js --run once on each P1 and P2 lesson (dry
       run first, cost guard as built). Fix faults that are in the
       lesson file, under the EDIT RULES. Fix faults in shared code
       once, behind a flag. Re-run only the lessons that failed, once.
    d. Record T1–T3 for P1 and P2 in STATE. Commit after each topic.
2.6 For P3, P4, P5, P6, P7 and P8, one topic per session: run the topic
    procedure (section 3); then, in the same session, add the topic's
    lessons to TEACH_ENABLED and run 2.5c and 2.5d for that topic. End
    the session with "Topic done. Type Continue in a new session."
    P1 and P2 are not re-run.
2.7 Diagrams (S4): for each Physics lesson, add a diagram wherever the
    spec-check or auditor named a visual concept or the specification
    asks students to draw or interpret one (circuits, field patterns,
    graphs, particle arrangements). Run tools/check-diagrams.js until
    clean. Commit per topic.
2.8 When every Physics row is ✓ on S1–S6 and T1–T3: STOP with "Physics
    finished. One real session needed (Jason or Mabel)."

Phase 3 — Biology, then Chemistry: defect 10 renderer fix first, then
plain-English rewrite batches, then the topic procedure per topic.
