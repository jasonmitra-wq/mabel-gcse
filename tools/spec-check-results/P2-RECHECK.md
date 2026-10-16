# P2 Electricity — re-check after the fix round (run 2026-10-16)

`node tools/spec-check.js --topic P2 --run --max-usd 3`, run on the fixed
lessons. Cost $0.7283. Full results are in `tools/spec-check-results/p2-*.json`.

This file lists only items that are both:
- a spec-basis factual error, a missing spec item or an above-GCSE item; and
- not already covered by an ACCEPT, REJECT or DEFER in P2-TRIAGE.md.

Nothing here has been fixed.

Left out because already decided:
- p2-components missing 0–3: miss3 and miss4 REJECT, miss6 DEFER, miss5 REJECT.
- p2-current-voltage missing 0–7:
  - miss3 and miss4 REJECT;
  - miss6 DEFER;
  - miss8–miss11 REJECT.
- p2-domestic:
  - missing 0 is covered by miss0 ACCEPT. The lesson states the fact; the
    explanation is only in checkpoint 3's feedback.
  - above 0, 1, 2, 4 and 5 (fuses, MCB, RCCB, the earth + fuse exam tip, and
    the fuse-in-live tutor note) are covered by abov2 and abov3, both HELD.
- p2-power-energy above 0 (fuse rating column) is covered by abov3 (HELD).
- p2-series-parallel missing 1 is covered by miss2 DEFER.

## p2-components
None.

## p2-current-voltage
- factual_errors 0 (spec) — `keyPoints[2].content` "Two factors affect
  resistance: length … temperature". Other things also affect resistance, for
  example light intensity for an LDR. **Introduced by this fix round**: my
  wording after cutting cross-sectional area and material (abov6, abov7).
- factual_errors 1 (spec) — `keyPoints[3].keyTerms[1].def` "A component whose
  resistance stays constant". The resistance is constant only at constant
  temperature. Present before this round.
- missing_spec_content 8 — 4.2.4.2 "Work is done when charge flows in a
  circuit." Not stated.
- above_gcse 0 — `keyPoints[0].content` conventional current versus electron
  flow, presented as a frequent exam trap. Not in the sections given. Present
  before this round.
- above_gcse 1 — `keyPoints[0].writeBullets[1]` "1 A = 1 C s⁻¹" (and
  "1 Ω = 1 V A⁻¹" in keyPoints[2].keyTerms[1]). Negative-index unit notation
  is not used in the spec. Present before this round.

## p2-domestic
- factual_errors 0–3 (spec) — `keyPoints[1].content`,
  `keyPoints[1].writeBullets[4]`, `keyPoints[3].writeBullets[1]`,
  `examTips[0]`: the fault sequence says "casing goes live" before the fuse
  blows. The spec says the earth wire is a safety wire to stop the appliance
  becoming live. Present before this round.
- above_gcse 3 — `keyPoints[1].content` the cable grip. Plug construction is
  not in 4.2.3.1 or 4.2.3.2. Present before this round.
- above_gcse 6 — `keyPoints[0].content` oscilloscope traces for AC and DC.
  4.2.3.1 only asks for the difference between direct and alternating
  potential difference. Present before this round.

## p2-power-energy
- missing_spec_content 0 — 4.2.4.2 "Work is done when charge flows in a
  circuit." Only mentioned in passing.
- missing_spec_content 1 — 4.2.4.2 E = QV must be applied. There is no worked
  example or checkpoint that applies E = QV in this lesson. p2-current-voltage
  now has an E = QV checkpoint.

## p2-series-parallel
- missing_spec_content 0 — 4.2.2 "Some circuits include both series and
  parallel parts." **Introduced by this fix round**: abov5 rewrote the
  mixed-circuit key point as series only, so mixed circuits are no longer
  mentioned.
- above_gcse 0 — `keyPoints[4].content` ammeter very low and voltmeter very
  high resistance. Not required by 4.2.2. Present before this round.
- above_gcse 1 — `keyPoints[4].tutor_note` "Why ammeters have low resistance
  and voltmeters high resistance is a frequent exam question." Present before
  this round.

## p2-static
- missing_spec_content 0 — 4.2.5.1 "explain how the transfer of electrons
  between objects can explain the phenomena of static electricity". Sparking
  and discharge are described as "charge" moving, not electrons. Clinging
  clothes and hair are not linked back to electron transfer. The sparking
  wording is from this round (miss0).
- above_gcse 0 — `keyPoints[1].content` a charged screen attracting neutral
  dust needs induced charge, which is not in the spec. Present before this
  round.
- above_gcse 1 — `keyPoints[2].content` a charged rod attracting uncharged
  paper, explained only by the field weakening with distance. It also needs
  induced charge. Present before this round.
