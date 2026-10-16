# P1 Energy — re-check after the fix round (run 2026-10-16)

`node tools/spec-check.js --topic P1 --run --max-usd 4`, run on the fixed
lessons. Cost $0.8277. Full results are in `tools/spec-check-results/p1-*.json`.

This file lists only:
- factual errors with basis "spec";
- missing spec content whose spec text is not already covered by an ACCEPT or
  REJECT decision in P1-TRIAGE.md;
- every above-GCSE item.

Nothing here has been fixed. The next triage decides each one.

## p1-conservation
- above_gcse 0 — `keyPoints[3].keyTerms[1].def` "How well a material conducts
  energy; the higher it is, the higher the rate of energy transfer by
  conduction". The spec says students do not need to know the definition of
  thermal conductivity; only the link to the rate of energy transfer is needed.
  Introduced by this fix round (miss0).
- above_gcse 1 — `keyPoints[3].content` "Thermal conductivity: this tells you
  how well a material conducts energy." Same issue. Introduced by this fix
  round (miss0).
- above_gcse 2 — `examTips[2]` Sankey diagrams are not in 4.1.2.1. Already
  decided: abov2 REJECT in P1-TRIAGE.md (Sankey diagrams support 4.1.1.1).

## p1-efficiency
None.

## p1-energy-stores
- factual_errors 2 (spec) — `keyPoints[3].content` "all energy eventually ends
  up as thermal energy in the surroundings". The spec says energy can be
  transferred usefully, stored or dissipated; only dissipated energy ends up
  spread out in the surroundings. Repeated in writeBullets, commonMistakes[2]
  and revisionCardBullets[4]. Present before this fix round.

## p1-heating
- above_gcse 0 — `keyPoints[3].content` "Temperature is a measure of the
  average kinetic energy of the particles." Already decided: abov0 REJECT in
  P1-TRIAGE.md (in the specification at 4.3.3.1).
- above_gcse 1 — `keyPoints[3].content` "Heat always flows from hot to cold. It
  never flows the other way on its own." Not required by 4.1.1.3, 4.3.2.1 or
  4.3.2.2. Present before this fix round.

## p1-kinetic-potential
- missing_spec_content 1 — 4.1.1.2 "AT 1 Investigate the transfer of energy
  from a gravitational potential energy store to a kinetic energy store." The
  lesson gives no practical context for the GPE → KE transfer. The checker
  calls it a skills opportunity and a lower-priority gap.

## p1-national-grid
- factual_errors 5 (spec) — `tables[0].rows[7]` "Bio-fuel", "Potentially"
  renewable. The spec counts bio-fuel as renewable; the lesson's own key terms
  and revision card list it as renewable. The "Potentially" cell was there
  before this fix round; only the row name changed (wron2).
- missing_spec_content 2 — 4.1.3 "A renewable energy resource is one that is
  being (or can be) replenished as it is used." The lesson's definition drops
  "(or can be)". Related to wron4 ACCEPT, which set the wording "replenished as
  it is used"; the "(or can be)" part was not in that decision.

## p1-power
- above_gcse 0 — `keyPoints[2].tutor_note` "Real power values help with
  'estimate' questions. These come up in 6-mark or multi-step problems." The
  spec does not require typical power values; with the table flagged for the
  exam, this suggests the figures must be learned. Present before this fix
  round.
