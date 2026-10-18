# P4 Atomic structure — fix log

One line per change: lesson | field | decision or finding ID.
For factual_errors, above_gcse and missing_spec_content changes, old and
new text in full.

BASE = d994ef3 (runbook v2 task 2.6, 2026-10-18).

## Step a: scanner (checkpoint keys not 0..keyPoints−1; WARNs in p4-nuclear-model)

- p4-radioactivity | checkpoints["2"] added (gamma: mass and atomic number stay the same) | scanner S5-ck
- p4-half-life | checkpoints["1"] (tracer half-life) re-keyed to ["2"], the uses key point | scanner S5-ck
- p4-half-life | checkpoints["1"] added (constant half-life read from a decay graph) | scanner S5-ck
- p4-nuclear-fission | checkpoints["3"] (why fusion is not yet used) re-keyed to ["2"], the fusion key point | scanner S5-ck
- p4-nuclear-fission | checkpoints["3"] added (a disadvantage of fission power) | scanner S5-ck
- p4-nuclear-model | keyPoints[3].content | scanner above-GCSE watch word "quantum" (STATE P4 note) | old «Bohr refined this model further (1913), and later quantum mechanics did too.» | new «Bohr refined this model further (1913).»
- p4-nuclear-model | keyPoints[3].content | scanner physics "bond" (EDIT RULE) | old «The arrangement of outer electrons decides how atoms bond chemically.» | new «» (sentence cut)
- p4-nuclear-model | keyPoints[3].writeBullets | scanner physics "bond" (EDIT RULE) | old bullet «Outer electron arrangement determines chemical bonding behaviour» | new «» (bullet cut)
- p4-nuclear-model | keyPoints[3].tutor_note | scanner above-GCSE watch word "quantum", A-level pointer (STATE P4 note) | old «The full quantum treatment is A-level.» | new «» (sentence cut)
