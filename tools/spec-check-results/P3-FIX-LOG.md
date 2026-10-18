# P3 Particle model — fix log

One line per change: lesson | field | decision or finding ID.
For factual_errors, above_gcse and missing_spec_content changes, old and
new text in full.

BASE = bb269b4 (runbook v2 task 2.6, 2026-10-18).

## Step a: scanner (checkpoint keys not 0..keyPoints−1)

- p3-particle-model | checkpoints["3"] added (limitations of the particle model) | scanner S5-ck
- p3-changes-of-state | checkpoints["1"] (E = mL melting calculation) re-keyed to ["2"], the calculations key point | scanner S5-ck
- p3-changes-of-state | checkpoints["0"] added (flat section of a heating curve) | scanner S5-ck
- p3-changes-of-state | checkpoints["1"] added (meaning of specific latent heat of vaporisation) | scanner S5-ck
- p3-pressure | checkpoints["0"] (pV calculation) re-keyed to ["2"], the pV = constant key point | scanner S5-ck
- p3-pressure | checkpoints["0"] added (why heating a gas at fixed volume raises its pressure) | scanner S5-ck
- p3-pressure | data/physics-syllabus.json specRef 4.3.3.3 added, so the spec-check tests it (defect 11: work done on a gas was the one unmapped section) | defect 11
