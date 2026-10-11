# mabel-gcse — State

The single record of what is finished. Updated by every commit that changes
state. Anything not recorded here as verified is not finished.

Last verified: 2026-10-11, from a fresh pull at commit 9984fe6.

## Definition of done (summary — full text in the project instructions)

Slide path: S1 rewritten to plain-English rules · S2 scanner clean · S3
rewrite checker passes · S4 diagrams for visual concepts, render-checked · S5
checkpoints test their key point · S6 spec audit clean.
AI teacher path: T1 in TEACH_ENABLED · T2 simulated-student run passes · T3 no
open shared-code fault.

✓ = verified, with the commit that proved it · – = not done · n/a = tool not built yet

## Physics

| Topic | S1 | S2 | S3 | S4 | S5 | S6 | T1 | T2 | T3 | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| P1 Energy | ✓ 0c40b8e | ✓ 0c40b8e | ✓ 0c40b8e | – | n/a | n/a | – | n/a | – | p1-energy-stores "chemical energy stored in bonds" checked and correct |
| P2 Electricity | ✓ 0c40b8e | ✓ 0c40b8e | ✓ 0c40b8e | – | n/a | n/a | – | n/a | – | misplaced common mistake removed 51a3dc2 |
| P3 Particle model | ✓ dd98fe9 | ✓ 9b952ab | ✓ dd98fe9 | partial: p3-particle-model only (4110010) | n/a | n/a | partial: p3-particle-model only | n/a | – | |
| P4 Atomic structure | ✓ 9984fe6 | ✓ 9984fe6 | ✓ 9984fe6 | – | n/a | n/a | – | n/a | – | |
| P5 Forces | ✓ 9984fe6 | ✓ 9984fe6 | ✓ 9984fe6 | – | n/a | n/a | – | n/a | – | |
| P6 Waves | – | – | – | – | n/a | n/a | – | n/a | – | next rewrite batch |
| P7 Magnetism | – | – | – | – | n/a | n/a | – | n/a | – | |

## Biology, Chemistry, Geography, Sociology

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
| 1 | EmailJS parent reporting still live | js/questions.js:639 | open |
| 2 | "Show this to claim your reward" | js/maths.js:890 | open |
| 3 | Four maths subtopics have no matching bank ids → "coming soon" | geo-perimeter-area, geo-volume, geo-circles, prob-tree | open |
| 4 | "AQA" on subject tiles and maths tile | js/app.js (6 hits) | open |
| 5 | HANDOFF.md stale and misleading; 40 one-off .py scripts at repo root | repo root | open — archive to tools/archive/, don't delete |
| 6 | Slide renderer shows "- " lines as dashed paragraphs, not bullets | js/lessons.js _fmtChunk | fixed in _formatKpContent (commit "render '- ' lines in key point content as bullet lists") |
| 7 | Diagram title in slide view shows the file id (no `diagrams` list in any lesson) | js/lessons.js _renderInlineDiagram | open, cosmetic |
| 8 | Maths: marks ≠ step count (~86), no readable steps (38), no answer verified | js/maths-questions.js | open — maths track |
| 9 | 5 lessons outside Physics still name Mabel | scanner | closes as each subject is rewritten |

## Tools

- tools/audit-lessons.js — scanner (check A)
- tools/check-rewrite.js — rewrite checker (check B)
- tools/plain-english-rules.md — rewrite rules
- tools/fix-board-refs.js — one-off, already run
- tools/spec-check.js — TO BUILD (check C)
- tools/teach-sim.js — TO BUILD (check D)

## Next

1. Physics P6–P7 rewrite batch (S1–S3).
2. Build order, section 7 of the instructions: open defects 1–5; spec text
   into data/spec/; spec-check.js; teach-sim.js; scanner additions.
3. Then Physics through C and D, topic by topic, until every Physics row is ✓.
