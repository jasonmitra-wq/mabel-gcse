# mabel-gcse — State

Runbook position: Phase 1, task 1.5 (check D design, then tools/teach-sim.js)

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
| P3 Particle model | ✓ dd98fe9 | – reopened: p3-pressure has 24 Kelvin/absolute-zero WARNs unresolved; decided by spec-check | ✓ dd98fe9 | partial: p3-particle-model only (4110010) | – (checkpoint keys check fails) | n/a | partial: p3-particle-model only | n/a | – | |
| P4 Atomic structure | ✓ 9984fe6 | ✓ 9984fe6 | ✓ 9984fe6 | – | – (checkpoint keys check fails) | n/a | – | n/a | – | p4-nuclear-model 'chemical bonding' checked and correct; p4-nuclear-model 'quantum' ×2 and its A-level pointer to be removed in the P4 fix round |
| P5 Forces | ✓ 9984fe6 | ✓ 9984fe6 | ✓ 9984fe6 | – | – (checkpoint keys check fails) | n/a | – | n/a | – | |
| P6 Waves | ✓ 13ac63d | ✓ 13ac63d | ✓ 13ac63d | – | – (checkpoint keys check fails) | n/a | – | n/a | – | p6-em-spectrum 'molecular bonds' (UV) checked and correct; 'bonded' ×3 → forces between particles, verified a6fd3c1 |
| P7 Magnetism | ✓ 13ac63d | ✓ 13ac63d | ✓ 13ac63d | – | – (checkpoint keys check fails) | n/a | – | n/a | – | iron-as-permanent-magnet error, solenoid poles, misplaced DC mistake corrected, verified a6fd3c1 |

Spec coverage: 25 of 30 sections mapped; 79 of 91 deepest-level sections mapped (tools/spec-coverage.md). Spec coverage counts a section as mapped if any lesson points into it, not that it is fully taught; spec-check (C) measures teaching.

## Physics roadmap

Checked against the repo 2026-10-16 at 8c8ab0f.

| Item | Status | Runbook |
|---|---|---|
| S4 diagrams | – 33 of 34 Physics lessons have no diagram; only p3-particle-model has two (diagrams/physics/p3-state-changes.svg, p3-states-particles.svg). Render check built: tools/check-diagrams.js (headless Chrome via dev dependency puppeteer-core). First run 2026-10-16: 24 diagrams, 5 flagged, 5 text overruns, 10 text overlaps, all in Biology (b2-blood-vessels, b2-digestive-system, b2-enzyme-ph, b2-heart, cell-structure-plant); both Physics diagrams clean. | 1.4 check; 2.3 drawing |
| S5 checkpoint proof | structural check built: tools/audit-lessons.js ERROR "checkpoint keys not 0..keyPoints−1". 135 of 170 lessons fail it, including all 21 Physics lessons outside P1 and P2. S5: P1 ✓; P2 – (last run had a checkpoint_mismatch ACCEPT). | 1.3 |
| Check D teach simulator | – tools/teach-sim.js not built. Design step first: can the js/lessons.js decision and prompt-building code run in Node? | 1.5 |
| T1 teach-enable | – Physics in TEACH_ENABLED (js/lessons.js:18): p3-particle-model only. | 2.4 |
| Defect 11 new lessons | – not written: 4.5.3, 4.5.4, 4.5.5, 4.6.3, 4.8.1.1, 4.8.1.2, 4.8.2. P8 Space becomes a new topic in data/physics-syllabus.json (no P8 entry yet). Additions to existing lessons: 4.5.1.2 (p5-forces-motion), 4.3.3.3 (p3-pressure, in the P3 loop), seismic waves 4.6.1.5 (p6-sound). | 2.2 |
| Maths track | – defect 8 open: 600 questions; marks ≠ step count in 87; 38 without sampleAnswer; no answer verified by recomputation. tools/maths-recompute.js not built. | 1.6 |

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
| 8 | Maths bank: 600 questions; marks ≠ step count (87); none has sample answer verified by recomputation; 38 have no sampleAnswer (trig, vectors, circle theorems) | js/maths-questions.js | open — maths track |
| 9 | 5 lessons outside Physics still name Mabel | scanner | closes as each subject is rewritten |
| 10 | Slide renderer _tryRenderAsList cuts the text before an auto-list to one sentence of ≤15 words and drops exam-language sentences, so slides can show less than the lesson file. 0 Physics lines trigger it; 68 key-point lines in other subjects do. | js/lessons.js _tryRenderAsList, _renderKpList | open — fix before the Biology rewrite |
| 11 | Physics content missing — new lessons needed for spec 4.5.3 forces and elasticity, 4.5.4 moments levers and gears, 4.5.5 pressure in fluids and atmospheric pressure, 4.6.3 black body radiation, 4.8.1.1 solar system, 4.8.1.2 life cycle of a star, 4.8.2 red-shift; additions needed: 4.5.1.2 contact and non-contact forces (p5-forces-motion), 4.3.3.3 work done on a gas (p3-pressure), seismic waves in 4.6.1.5 (p6-sound). Physics cannot be finished until these exist. | data/physics-syllabus.json, lessons/physics | open — new content, not a rewrite |

## Tools

- tools/audit-lessons.js — scanner (check A); includes the S5 structural check (checkpoint keys 0..keyPoints−1)
- tools/check-rewrite.js — rewrite checker (check B)
- tools/plain-english-rules.md — rewrite rules
- tools/fix-board-refs.js — one-off, already run
- tools/spec-check.js — built; calibration PASS; key from env var SPEC_CHECK_API_KEY; max_tokens 16000; Physics run 2026-10-16, results in tools/spec-check-results/
- tools/extract-spec.py — spec PDF section 4 → data/spec/<subject>.md (spec text local only, not committed)
- tools/check-spec-sections.py — independent check that every numbered spec section reached the .md
- tools/spec-coverage.js — specRef coverage report → tools/spec-coverage.md
- data/spec/MANIFEST.md — source URL, version, md5s and section counts for the local spec text
- tools/check-diagrams.js — S4 render check: text past the viewBox or overlapping other text; report tools/diagram-report.md. Needs npm install (puppeteer-core, dev only) and local Chrome or Edge
- tools/teach-sim.js — TO BUILD (check D)
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
