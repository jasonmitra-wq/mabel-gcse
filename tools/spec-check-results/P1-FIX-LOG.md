# P1 fix log (Phase B, brief docs/briefs/2026-11-15-script-four-topics.md)

## B2 fact check, 2026-11-17

Not run: tools/spec-check.js stopped at GET /v1/models with HTTP 401
(invalid x-api-key) for all seven lessons (logs in P1-B2/). No cost. To be
re-run when the key works.

## Lesson-file changes made while scripting (B3)

- p1-energy-stores: pictures added to key point 4 (p1-torch-energy, moved from
  key point 2, where its "useful" and "wasted" labels were not yet taught) and
  key point 5 (p1-sankey-lamp), each with its labels.
- p1-conservation: the key term "friction" moved from key point 3 to key point
  2, where lubrication first needs it.
- p1-heating: the key term "temperature" moved from key point 4 to key point
  1, where the equation first needs it.
- p1-national-grid: picture p1-national-grid added to key point 2 (its labels
  name the step-up and step-down transformers, which key point 2 teaches).

## B4 self-audit (free), 2026-11-17

All seven scripts walk to zero (tools/check-script.js). Reading copies in
docs/review/p1-*.md. Self-audit changes: p1-energy-stores 1.6 replies
("Yes, that's right: no" reworded), 1.9 ("no kinetic store yet" reworded);
p1-heating 1.2 compared an empty pan with a pan of water (different masses),
now 1 kg of water and 1 kg of cooking oil. Paid script reviews and site tests
not run: the API key is rejected (401).
