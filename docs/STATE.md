# mabel-gcse — State

The single record of what is finished. Updated by every commit that changes
state. Anything not recorded here as verified is not finished.

Last verified: 2026-10-11, from a fresh pull at commit a6fd3c1.

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
| P2 Electricity | ✓ 0c40b8e | ✓ 0c40b8e | ✓ 0c40b8e | – | n/a | n/a | – | n/a | – | misplaced common mistake removed 51a3dc2; p2-static 'bonding cables' (electrical bonding) checked and correct |
| P3 Particle model | ✓ dd98fe9 | ✓ 9b952ab | ✓ dd98fe9 | partial: p3-particle-model only (4110010) | n/a | n/a | partial: p3-particle-model only | n/a | – | |
| P4 Atomic structure | ✓ 9984fe6 | ✓ 9984fe6 | ✓ 9984fe6 | – | n/a | n/a | – | n/a | – | p4-nuclear-model 'chemical bonding' checked and correct |
| P5 Forces | ✓ 9984fe6 | ✓ 9984fe6 | ✓ 9984fe6 | – | n/a | n/a | – | n/a | – | |
| P6 Waves | ✓ 13ac63d | ✓ 13ac63d | ✓ 13ac63d | – | n/a | n/a | – | n/a | – | p6-em-spectrum 'molecular bonds' (UV) checked and correct; 'bonded' ×3 → forces between particles, verified a6fd3c1 |
| P7 Magnetism | ✓ 13ac63d | ✓ 13ac63d | ✓ 13ac63d | – | n/a | n/a | – | n/a | – | iron-as-permanent-magnet error, solenoid poles, misplaced DC mistake corrected, verified a6fd3c1 |

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
| 1 | EmailJS parent reporting still live | js/questions.js:639 | fixed next commit — pending verification |
| 2 | "Show this to claim your reward" | js/maths.js:890 | fixed next commit — pending verification |
| 3 | Four maths subtopics have no matching bank ids → "coming soon" — bank used different subtopic ids; geo-circles has only 2 questions after the fix (maths track top-up) | geo-perimeter-area, geo-volume, geo-circles, prob-tree | fixed next commit (bank subtopics + _topicMap M4/M5) — pending verification |
| 4 | Exam board name visible in 9 places: js/app.js ×6, js/glossary.js ×2, js/maths-questions.js ×1 | js/app.js (6 hits) | fixed next commit — pending verification |
| 5 | HANDOFF.md stale and misleading; 40 one-off .py scripts at repo root | repo root | fixed next commit — pending verification |
| 6 | Slide renderer shows "- " lines as dashed paragraphs, not bullets | js/lessons.js _fmtChunk | fixed 4943b2a — code verified; render seen by Claude Code only |
| 7 | Diagram title in slide view shows the file id (no `diagrams` list in any lesson) | js/lessons.js _renderInlineDiagram | open, cosmetic |
| 8 | Maths: marks ≠ step count (~86), no readable steps (38), no answer verified | js/maths-questions.js | open — maths track |
| 9 | 5 lessons outside Physics still name Mabel | scanner | closes as each subject is rewritten |
| 10 | Slide renderer _tryRenderAsList cuts the text before an auto-list to one sentence of ≤15 words and drops exam-language sentences, so slides can show less than the lesson file. 0 Physics lines trigger it; 68 key-point lines in other subjects do. | js/lessons.js _tryRenderAsList, _renderKpList | open — fix before the Biology rewrite |

## Tools

- tools/audit-lessons.js — scanner (check A)
- tools/check-rewrite.js — rewrite checker (check B)
- tools/plain-english-rules.md — rewrite rules
- tools/fix-board-refs.js — one-off, already run
- tools/spec-check.js — TO BUILD (check C)
- tools/teach-sim.js — TO BUILD (check D)
- .claude/agents/lesson-auditor.md — independent lesson auditor (subagent); findings in tools/audit-runs/

## Next

1. Spec text into data/spec/ and a specRef on every subtopic (section 7 step 3).
2. Build order, section 7 of the instructions: open defects 1–5; spec text
   into data/spec/; spec-check.js; teach-sim.js; scanner additions.
3. Then Physics through C and D, topic by topic, until every Physics row is ✓.
