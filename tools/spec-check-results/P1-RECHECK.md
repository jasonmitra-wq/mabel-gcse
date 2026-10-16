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

## Final re-check

`node tools/spec-check.js --run --max-usd 2 p1-conservation p1-energy-stores
p1-heating p1-national-grid p1-power`, run on the close-out edits. Cost
$0.5899. Listed: spec-basis factual errors, missing spec items and above-GCSE
items that no ACCEPT or REJECT in P1-TRIAGE.md already covers. Not fixed.

Left out because already decided: p1-conservation missing 0 (required
practical 2, miss2 ACCEPT) and 1 (rods, miss3 REJECT); p1-energy-stores
missing 0–5 (miss2, miss4–miss8 REJECT); p1-national-grid missing 0 (trends,
miss2 ACCEPT) and 1 (uses, miss1 ACCEPT). p1-heating and p1-power have no
spec-basis, missing or above-GCSE items.

### p1-energy-stores
- factual_errors 1 (spec) — `keyPoints[3].content` "It becomes so spread out
  that it cannot be used again." Dissipated energy is stored in less useful
  ways: harder to use, not impossible. The lesson's own writeBullets say
  "harder to use" and its memTip says "cannot easily be recovered". This is the
  sentence right after the one changed by fact2; it was there before.

### p1-national-grid
- factual_errors 5 (spec) — `examTips[0]` "Give both equations for full
  marks." The spec asks students to explain why the National Grid is an
  efficient way to transfer energy; a clear explanation earns credit without
  quoting equations. Present since before d08b060.
- above_gcse 0 — `keyPoints[1].content` "A step-up transformer increases the
  potential difference and decreases the current." The change in current comes
  from the Higher Tier transformer section; 4.2.4.3 only needs the change in
  potential difference. Also in keyPoints[1].writeBullets, keyTerms and
  revisionCardBullets[2] and [3]. abov3 kept "step-up increases the potential
  difference, step-down decreases it" but did not decide the current.
- above_gcse 1 — `keyPoints[2].content` "the cheapest new electricity source
  in the UK by the 2020s". A dated economic claim the spec does not need. The
  table ("Cheapest new electricity (UK)", "gas prices volatile") adds similar
  market detail. Present since before d08b060.
- above_gcse 2 — `tables[0].rows[7][4]` "Can use existing coal power
  stations". The spec says descriptions of how resources generate electricity
  are not required. abov0 cut the generating key point but did not cover this
  table cell. Present since before d08b060.
