# mabel-gcse — State

Runbook position: Phase 2, task 2.4 done 2026-10-17 (2.1 and 2.3 also done). HOLD before 2.5 until a Mabel verdict is in docs/MABEL-FEEDBACK.md

The single record of what is finished. Updated by every commit that changes
state. Anything not recorded here as verified is not finished.

Last verified: 2026-10-16, from a fresh pull at commit 9951f13.

## Definition of done (summary — full text in the project instructions)

Slide path: S1 rewritten to plain-English rules · S2 scanner clean · S3
rewrite checker passes · S4 diagrams for visual concepts, render-checked · S5
checkpoints test their key point · S6 spec audit clean.
S6 means: the topic was spec-checked repeatedly, every finding of every run was fixed or rejected for a listed reason in tools/spec-check-results/<topic>-TRIAGE.md, and the last run was clean (no finding needed a fix), within at most 5 runs. If 5 runs pass without a clean run, the topic is escalated to Jason. Above-GCSE content is removed, never signposted.
AI teacher path: T1 in TEACH_ENABLED · T2 simulated-student run passes · T3 no
open shared-code fault.

✓ = verified, with the commit that proved it · – = not done · n/a = tool not built yet

## Physics

| Topic | S1 | S2 | S3 | S4 | S5 | S6 | T1 | T2 | T3 | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| P1 Energy | ✓ f3a97da (re-proved after content fix) | ✓ f3a97da (re-proved after content fix) | ✓ f3a97da (re-proved after content fix) | – | ✓ (check clean; R8 has no checkpoint_mismatch ACCEPT) | ✓ f3a97da (not clean after 8 runs; auditor-reviewed; open items in docs/ESCALATIONS.md) | – | n/a | – | Spec-check loop R1–R8 and independent audit tools/audit-runs/d08b060-1.md; triage in tools/spec-check-results/P1-TRIAGE.md; fixes in P1-FIX-LOG.md |
| P2 Electricity | ✓ 52be2ad (re-proved after content fix) | ✓ 52be2ad (re-proved after content fix) | ✓ 52be2ad (re-proved after content fix) | – | – (check clean; R5 had p2-power-energy chec0 ACCEPT) | ✓ 52be2ad (not clean after 5 runs; auditor-reviewed; open items in docs/ESCALATIONS.md) | – | n/a | – | Spec-check loop R1–R5 and independent audit tools/audit-runs/d08b060-2.md; triage in tools/spec-check-results/P2-TRIAGE.md; fixes in P2-FIX-LOG.md; circuit diagrams deferred to S4 |
| P3 Particle model | ✓ dd98fe9 | – reopened: p3-pressure has 24 Kelvin/absolute-zero WARNs unresolved; decided by spec-check | ✓ dd98fe9 | partial: p3-particle-model only (4110010) | – (checkpoint keys check fails) | n/a | partial: p3-particle-model only | partial: p3-particle-model ✓ (teach-sim 2026-10-17-1, 0 flagged) | – | |
| P4 Atomic structure | ✓ 9984fe6 | ✓ 9984fe6 | ✓ 9984fe6 | – | – (checkpoint keys check fails) | n/a | – | n/a | – | p4-nuclear-model 'chemical bonding' checked and correct; p4-nuclear-model 'quantum' ×2 and its A-level pointer to be removed in the P4 fix round |
| P5 Forces | ✓ 9984fe6 (new lessons from 2.4 not yet) | ✓ 9984fe6 (new lessons from 2.4 not yet) | ✓ 9984fe6 | – | – (checkpoint keys check fails) | n/a | – | n/a | – | Task 2.4 (2026-10-17): new p5-elasticity, p5-moments, p5-fluid-pressure; p5-forces-motion gains contact and non-contact forces; P5-FIX-LOG.md |
| P6 Waves | ✓ 13ac63d (new lesson from 2.4 not yet) | ✓ 13ac63d (new lesson from 2.4 not yet) | ✓ 13ac63d | – | – (checkpoint keys check fails) | n/a | – | n/a | – | Task 2.4 (2026-10-17): new p6-black-body; p6-sound gains seismic waves; P6-FIX-LOG.md. p6-em-spectrum 'molecular bonds' (UV) checked and correct; 'bonded' ×3 → forces between particles, verified a6fd3c1 |
| P7 Magnetism | ✓ 13ac63d | ✓ 13ac63d | ✓ 13ac63d | – | – (checkpoint keys check fails) | n/a | – | n/a | – | iron-as-permanent-magnet error, solenoid poles, misplaced DC mistake corrected, verified a6fd3c1 |
| P8 Space physics | – | – | n/a (new lessons, no rewrite base) | – | – | n/a | – | n/a | – | New topic, task 2.4 (2026-10-17): p8-solar-system, p8-life-cycle-of-a-star, p8-red-shift; P8-FIX-LOG.md |

Spec coverage (2026-10-17, after task 2.4): 30 of 30 sections mapped; 90 of 91 deepest-level sections mapped (the gap is 4.3.3.3, for the P3 loop) (tools/spec-coverage.md). Spec coverage counts a section as mapped if any lesson points into it, not that it is fully taught; spec-check (C) measures teaching.

## Spend

Spec-check API calls, summed from tools/spec-check-results/SUMMARY.md (one line per lesson call, actual cost) on 2026-10-16. P7 includes the calibration calls on p7-magnets (and the task 2.1 --blocking-only recalibration, 2026-10-17, $0.15).

| Topic | API calls | USD |
|---|---|---|
| P1 Energy | 54 | 6.02 |
| P2 Electricity | 30 | 3.49 |
| P3 Particle model | 4 | 0.53 |
| P4 Atomic structure | 4 | 0.60 |
| P5 Forces | 6 | 0.81 |
| P6 Waves | 5 | 0.77 |
| P7 Magnetism | 6 | 0.83 |
| Teach-sim (check D) | 2 runs | 0.12 |

## Physics roadmap

Checked against the repo 2026-10-16 at 8c8ab0f.

| Item | Status | Runbook |
|---|---|---|
| S4 diagrams | – 33 of 34 Physics lessons have no diagram; only p3-particle-model has two (diagrams/physics/p3-state-changes.svg, p3-states-particles.svg). Render check built: tools/check-diagrams.js (headless Chrome via dev dependency puppeteer-core). First run 2026-10-16: 24 diagrams, 5 flagged, 5 text overruns, 10 text overlaps, all in Biology (b2-blood-vessels, b2-digestive-system, b2-enzyme-ph, b2-heart, cell-structure-plant); both Physics diagrams clean. | 1.4 check; 2.3 drawing |
| S5 checkpoint proof | structural check built: tools/audit-lessons.js ERROR "checkpoint keys not 0..keyPoints−1". 135 of 170 lessons fail it, including all 21 Physics lessons outside P1 and P2. S5: P1 ✓; P2 – (last run had a checkpoint_mismatch ACCEPT). | 1.3 |
| Check D teach simulator | built and calibrated. Design: the decision and prompt code was private to the browser module, so it moved verbatim into js/teach-core.js (loaded by index.html and by Node); js/teach.js keeps DOM and storage. Proof: one scripted p3-particle-model conversation (39 steps, every decision kind, stub model) gave byte-identical prompts, decisions and state before and after (514 KB); browser smoke test clean. tools/teach-sim.js: dry run, --mock self-test and scorer checks pass. Calibration run 2026-10-16 on p3-particle-model ($0.06, 18 tutor turns, lesson completed with a clean ending): first scoring had 4 false positives (a tag question counted as a second question; questions read without the sentence before them), scorer fixed and the run rescored (--rescore). 8 real faults remain, all in shared code (T3): student's name ×2 (the system prompt in js/teach-core.js names her), over 60 words ×5 (the length guard falls back to a long reply when the retries are also long), stock praise ×1 ("Good —" opener not covered by STOCK_PRAISE). Run: tools/teach-sim-runs/p3-particle-model-2026-10-16-1.md. Fix in task 2.4. **Task 2.3 (2026-10-16):** fixed once in js/teach-core.js behind `create({ fix23 })`, on by default; `fix23: false` gives the old behaviour (proved: prompts and replies for a scripted p3-particle-model conversation byte-identical to the previous teach-core.js, 21 970 bytes). (1) The student's name is in no prompt (system, user, history labels, recap, opening, jump) and is filtered out of replies and recap lines. (2) A reply still over 60 words after the retries is cut at sentence boundaries, keeping its closing question and the sentences that question leans on. (3) "Good/Great/Nice/Well done" followed by punctuation is stripped as an opener unless the next words say what was right. `--rescore` alone leaves the saved run as it was (8 flagged); `--rescore --replay` passes the same saved replies through the new post-processing: 0 flagged (tools/teach-sim-runs/p3-particle-model-2026-10-16-1-replay.md); --mock clean; page loads with fix23 on and no script error. **Live `--run` on p3-particle-model, 2026-10-17 (C:\dev\mabel-gcse, fix23 on by default): PASS** — 18 tutor turns, 0 flagged, lesson complete, coverage 4/4; no student name, no reply over 60 words, no stock praise ($0.06, 38 calls; tools/teach-sim-runs/p3-particle-model-2026-10-17-1.md). The three shared-code faults of task 2.3 are closed. | 1.5 |
| T1 teach-enable | – Physics in TEACH_ENABLED (js/lessons.js:18): p3-particle-model only. | 2.4 |
| Defect 11 new lessons | ✓ written 2026-10-17 (task 2.4) from data/spec/physics.md, one commit per lesson: p5-elasticity (4.5.3), p5-moments (4.5.4), p5-fluid-pressure (4.5.5), p6-black-body (4.6.3), new topic P8 Space physics with p8-solar-system (4.8.1.1, 4.8.1.3), p8-life-cycle-of-a-star (4.8.1.1, 4.8.1.2; stage names from the specification's life-cycle diagram, an image not in the .md), p8-red-shift (4.8.2). Additions: p5-forces-motion keyPoints[5] contact and non-contact forces (4.5.1.2); p6-sound keyPoints[4] seismic waves (4.6.1.5). Scanner clean on every new lesson and key point (the existing checkpoint-key ERRORs in p5-forces-motion and p6-sound predate 2.4). Not yet spec-checked or audited: that happens in each topic's loop. Still open: 4.3.3.3 (p3-pressure, in the P3 loop). | 2.4 |
| Maths track | ✓ task 2.2 (2026-10-16): all 600 questions recomputed by tools/maths-recompute.js --all (functions in tools/maths-recompute-fns.js, written from the question text and step prompts with stored answers and hints hidden). Before (bank at fd0f6f1, report tools/maths-recompute-all-report-fd0f6f1.md): 1385 checked steps, 15 wrong, 12 mismatch (prompt asks for something else) = 27/1385 = 1.9%, in 22 of 600 questions; a further 131 steps ambiguous (the prompt did not say which of several right numbers to enter). After (tools/maths-recompute-all-report.md): 1375 checked steps (10 comment steps that checked an unrelated number are now checkType skip), 0 wrong, 0 mismatch, 0 ambiguous. Six questions rewritten because their figures or reasoning were wrong (pyth-C03, cth-C02, cth-C04, trig-C02, trig-C04, vec-C04 — vec-C04 asked for a proof of something false); grd-C02's figures made consistent. marks = steps.length for all 600 (87 changed, matching defect 8's count). auditStatus 'verified' for 567; the other 33 have no step the app checks (all statements), so nothing could be recomputed. Every change with old and new values: tools/maths-fix-log.md. Not checked: the text of checkType skip steps (vec-C04 was found by reading, not by the tool); fractions typed as a/b are accepted only when they equal a step's displayAnswer exactly (js/maths.js _matchAnswer), so x = 10/3 typed as "10/3" is still marked wrong. The functions and the fixes were written in the same session, so the after-run checks the bank against my own reading of each prompt; the before-run on fd0f6f1 is the same functions on the untouched bank. | 2.2 |

## Biology, Chemistry, Geography, Sociology

Biology spec coverage: 20 of 24 sections mapped (tools/spec-coverage.md)
Chemistry spec coverage: 31 of 32 sections mapped (tools/spec-coverage.md)

Not started on the pipeline. Already in place:
- b3-defences: teach mode on; 5 diagrams. Built before the pipeline existed —
  must still pass S1–S6 and T2.
- Biology B2: 8 diagrams exist (blood, heart, digestion, enzymes, villus).
- Geography g5-development, g5-nigeria, g5-uk-economy: teach mode on; 6
  diagrams; key terms fixed. Figures have years but are not source-verified
  (figuresSourced: false). Must still pass the pipeline.
- Sociology and Geography outside G5 are switched off. 29 of these lessons
  still have key terms in the old format.

## Whole-bank fixes already done (verified)

- Exam board name, codes and paper numbers removed from all lesson text:
  73d69bf (+ 27dacfa). Scanner: 0.
- Teach mode: no yes/no questions (446c0d8); stock praise stripped (8a0bb75);
  check-in "yes" now means she is told the rest (81f7e6e).

## Open defects (checked against the repo 2026-10-11)

| # | Defect | Where | Status |
|---|---|---|---|
| 1 | EmailJS parent reporting still live | js/questions.js:639 | fixed 51ff762, verified |
| 2 | "Show this to claim your reward" | js/maths.js:890 | fixed 51ff762, verified |
| 3 | Four maths subtopics have no matching bank ids → "coming soon" — bank used different subtopic ids | geo-perimeter-area, geo-volume, geo-circles, prob-tree | fixed 51ff762 + ffe9970, verified |
| 4 | Exam board name visible in 9 places: js/app.js ×6, js/glossary.js ×2, js/maths-questions.js ×1 | js/app.js (6 hits) | fixed 51ff762, verified |
| 5 | HANDOFF.md stale and misleading; 40 one-off .py scripts at repo root | repo root | fixed 51ff762, verified |
| 6 | Slide renderer shows "- " lines as dashed paragraphs, not bullets | js/lessons.js _fmtChunk | fixed 4943b2a — code verified; render seen by Claude Code only |
| 7 | Diagram title in slide view shows the file id (no `diagrams` list in any lesson) | js/lessons.js _renderInlineDiagram | open, cosmetic |
| 8 | Maths bank: 600 questions; marks ≠ step count (87); 38 have no sampleAnswer (trig, vectors, circle theorems). Step answers recomputed for a 40-question sample: 4.7% of checked steps wrong (tools/maths-recompute-report.md) | js/maths-questions.js | step answers: fixed for all 600, marks = steps.length (task 2.2; see Physics roadmap → Maths track). Still open: sampleAnswer text not recomputed; 38 without sampleAnswer; a/b fraction input |
| 9 | 5 lessons outside Physics still name Mabel | scanner | closes as each subject is rewritten |
| 10 | Slide renderer _tryRenderAsList cuts the text before an auto-list to one sentence of ≤15 words and drops exam-language sentences, so slides can show less than the lesson file. 0 Physics lines trigger it; 68 key-point lines in other subjects do. | js/lessons.js _tryRenderAsList, _renderKpList | open — fix before the Biology rewrite |
| 11 | Physics content missing (written in task 2.4, 2026-10-17, except 4.3.3.3) — new lessons needed for spec 4.5.3 forces and elasticity, 4.5.4 moments levers and gears, 4.5.5 pressure in fluids and atmospheric pressure, 4.6.3 black body radiation, 4.8.1.1 solar system, 4.8.1.2 life cycle of a star, 4.8.2 red-shift; additions needed: 4.5.1.2 contact and non-contact forces (p5-forces-motion), 4.3.3.3 work done on a gas (p3-pressure), seismic waves in 4.6.1.5 (p6-sound). Physics cannot be finished until these exist. | data/physics-syllabus.json, lessons/physics | open — new content, not a rewrite |

## Tools

- tools/audit-lessons.js — scanner (check A); includes the S5 structural check (checkpoint keys 0..keyPoints−1)
- tools/check-rewrite.js — rewrite checker (check B)
- tools/plain-english-rules.md — rewrite rules
- tools/fix-board-refs.js — one-off, already run
- tools/spec-check.js — built; calibration PASS; key from env var SPEC_CHECK_API_KEY; max_tokens 16000; Physics run 2026-10-16, results in tools/spec-check-results/; --blocking-only and --decided <TRIAGE FILE> added (task 2.1, dry-run tested on the p7-magnets calibration file). --blocking-only recalibration PASS 2026-10-17 on C:\dev\mabel-gcse: `--run --blocking-only --file tools/spec-check-calibration/p7-magnets-13ac63d.json --as p7-magnets` flagged iron listed as a permanent magnet (factual_errors[0], keyPoints[0].content); 1 call, $0.15
- tools/extract-spec.py — spec PDF section 4 → data/spec/<subject>.md (spec text local only, not committed)
- tools/check-spec-sections.py — independent check that every numbered spec section reached the .md
- tools/spec-coverage.js — specRef coverage report → tools/spec-coverage.md
- data/spec/MANIFEST.md — source URL, version, md5s and section counts for the local spec text
- tools/maths-recompute.js — maths answer check: recomputes every step of a seeded 40-question sample; report tools/maths-recompute-report.md; --all recomputes all 600 (functions in tools/maths-recompute-fns.js; --base <commit> checks an older bank); tools/maths-fix.js applies logged fixes; tools/maths-finalise.js sets marks and auditStatus
- tools/check-diagrams.js — S4 render check: text past the viewBox or overlapping other text; report tools/diagram-report.md. Needs npm install (puppeteer-core, dev only) and local Chrome or Edge
- js/teach-core.js — teach mode decisions and prompts, shared by js/teach.js and tools/teach-sim.js
- tools/teach-sim.js — check D: scripted student through teach mode with the browser's tutor model (claude-haiku-4-5-20251001); scores every tutor turn; --mock for an offline self-test; outputs in tools/teach-sim-runs/. calibrated on p3-particle-model 2026-10-16; --rescore re-scores a saved run without calls
- .claude/agents/lesson-auditor.md — independent lesson auditor (subagent); findings in tools/audit-runs/

## Next

1. Triage and fix P3 Particle model (first triage by Claude in the planning chat, then the spec-check loop).
2. Write the missing Physics content (defect 11): lesson-auditor
   mode for new files first; decide whether P8 Space becomes a
   topic in the syllabus file.
3. tools/teach-sim.js (check D).
4. Scanner additions: checkpoint-to-key-point match (S5), diagram
   render check (S4).
5. Physics diagrams.
6. Each Physics topic through C, D and verification.
