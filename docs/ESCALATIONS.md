# Escalations

Open items for Jason. Each entry: topic | finding | reject code | auditor's evidence.

## P1 Energy: independent audit d08b060-1 (runbook task 1.0 step g)

Findings file: tools/audit-runs/d08b060-1.md. The topic ran 8 of 8 spec-check runs without a clean run (R8 had 4 blocking ACCEPTs, applied but not re-checked).

The auditor checked every change against tools/plain-english-rules.md, which forbids changing keyTerms, tables, headings, numbers or facts. That file governs the plain-English rewrite (S1). The spec-check loop changes content on purpose, under the EDIT RULES in docs/RUNBOOK.md. So most findings below are changes a triage decision required. They are rejected R-a with the decision ID from tools/spec-check-results/P1-TRIAGE.md. Grep of data/spec/physics.md for payback, regenerative, perpetual and P = Fv finds no match.

### Needs a decision from Jason

- P1 | E6 p1-efficiency keyPoints[3].content "Describing ways to increase efficiency is Higher Tier content." | R-a (R6 p1-efficiency miss0 ACCEPT) | Auditor: names the exam tier, which is specification metadata; rule file says never name the specification (Spec line 233 "(HT only)"). Kept because R6 decided it. Is a tier label allowed in lesson text? **RESOLVED 2026-10-16 (Jason):** tier label removed, content kept; see P1-FIX-LOG.md "Jason escalation decisions".
- P1 | H5 p1-heating keyPoints[3].content "Internal energy depends on temperature AND the number of particles." | R-a (R8 p1-heating abov0 ACCEPT, which cut "the spacing between them") | Auditor: internal energy is defined two sentences earlier as total kinetic and potential energy; potential energy depends on particle spacing, so the list is incomplete [own knowledge]. **RESOLVED 2026-10-16 (Jason):** sentence replaced with the internal energy definition (total kinetic and potential energy of all the particles).
- P1 | K2 / X6 specific heat capacity taught in both p1-heating and p1-kinetic-potential keyPoints[4] | R-a (p1-kinetic-potential wron0–wron8, miss2, miss3 kept and extended it there) | Auditor: the content belongs in p1-heating. (The introTips count contradiction was fixed.) **RESOLVED 2026-10-16 (Jason):** specific heat capacity cut from p1-kinetic-potential (key point, checkpoint, tips, bullets); 4.1.1.3 removed from its specRef; taught in p1-heating.
- P1 | N14 p1-national-grid mixes 4.2.4.3 (National Grid) with 4.1.3 (energy resources); title does not fit | R-a (P1-TRIAGE header "p1-national-grid (4.1.3, 4.2.4.3)"; miss0–miss4) | Auditor: no separate P1 energy-resources lesson exists. **RESOLVED 2026-10-16 (Jason):** title is now "Energy resources and the National Grid" in the lesson and the syllabus file.
- P1 | W2 p1-power keyPoints[3] (W = Fs, 1 J = 1 N m, friction raising temperature) is Spec 4.5.2 | R-a (P1-TRIAGE header "p1-power (4.1.1.4, 4.5.2)"; miss0–miss3) | Auditor: grep for "line of action" finds it only in p1-power, so no P5 lesson teaches W = Fs; a new home is needed before it could move. **RESOLVED 2026-10-16 (Jason):** no change; W = Fs stays in p1-power.

### Rejected: change required by a triage decision

p1-conservation
- C1 intro: perpetual motion cut, "three" became "two" | R-a (abov1) | check-rewrite `intro: number "three" lost`
- C2 perpetual motion removed everywhere | R-a (abov1) | key term "perpetual motion" lost
- C3 regenerative braking removed everywhere | R-a (abov0) | key term lost, memTip "four" lost, table row removed
- C4 thermal conductivity, building walls, required practical 2 added | R-a (miss0, miss1, miss2) | matches Spec 4.1.2.1
- C5 light bulb bold terms reworded | R-a (R4 wron2) | bold "useful light energy" lost
- C6 kettle example and walls warming lost | R-a (R5 fact0, fact3) | facts lost
- C8 lubrication, friction, streamlining, thermal conductivity key terms changed | R-a (R5 fact2, R7 fact0, R5 wron1, re-check abov0: relationship only, no definition) | keyTerms must not change; thermal conductivity def does not define the term
- C9 table header, inputs, fixes and electric-car row changed | R-a (R5 fact1, R5 wron0, fact1, R7 fact1, abov0) | tables must not change. The motor row contradiction inside the table was fixed.
- C10 checkpoints replaced and added | R-a (chec0, chec1) | checkpoints keys changed
- C11 Sankey exam tip reworded | R-a (abov2, R4 fact1) | auditor notes the new text is more accurate
- C12 examTip "transferred usefully, stored or dissipated" | R-a (fact2) | Spec line 195
- C13 bouncing ball elastic store added | R-a (R4 fact0) | correct [own knowledge]

p1-efficiency
- E1 "always" became "most"; electric heater added | R-a (fact4) | number "100" lost. The contradictions with "always" elsewhere (X1) were fixed.
- E2 intro LED, EV and energy-rating examples removed | R-a (fact0, fact3, abov1, abov4) | number "90" lost
- E3 device efficiency values, table column and rows, checkpoint 1 | R-a (abov2, abov3, fact2, fact3, fact5, chec0, re-check table title) | more than 40 numbers lost
- E5 payback time, energy labels, regenerative systems cut; heading changed | R-a (abov0, abov1, abov4) | payback now in no lesson; not in the spec
- E7 worked example "LED bulb" became "lamp" | R-a (fact3) | named example changed
- E8 "25 kW of kinetic energy" became "useful power output of 25 kW" | R-a (fact1) | auditor: new text is correct
- E9 key terms renamed to spec wording | R-a (wron0, wron1, R4 wron0–wron4) | keyTerms must not change; matches Spec 4.1.2.2
- E12 checkpoints replaced | R-a (chec0) | arithmetic correct

p1-energy-stores
- S2 radiation removed from heating; key terms renamed | R-a (fact3, fact4, R4 fact2, R7 wron0, wron1) | keyTerms must not change. The "exactly four" contradiction with sound waves was fixed.
- S3 thermal and chemical rows changed; table cell repeats its example | R-a (fact5, fact6); restoring "Chemical bonds" is R-c (EDIT RULE: physics never uses bond) | tables must not change
- S4 electrostatic and magnetic rows changed | R-a (fact2, R3 fact0) | auditor: old text was wrong, new text correct
- S5 system definition and spec situations added | R-a (miss0, miss1, R5 miss6, R6 fact1) | Spec lines 32–42. The contradiction with writeBullets and revision card was fixed.
- S6 "all energy eventually ends up as thermal energy" replaced | R-a (re-check fact2) | bold term lost
- S8 Sankey example added; "always" became "most" | R-a (miss3, fact0, R8 fact0) | contradiction X1 fixed
- S9 checkpoint 3 distractors changed | R-a (R5 chec0) | order and correct index kept
- S11 "every exam paper" claims removed | R-a (R4 abov0, R7 fact1) | minor facts lost

p1-heating
- H1 spoon example removed; definition added | R-a (fact0, R4 fact2, R7 fact2) | named example lost. The dangling "This is one of the most important equations" was fixed.
- H2 Kelvin removed | R-a (abov2) | number "1" lost
- H3 heating raises temperature or changes state (overlaps p3-particle-model) | R-a (miss0; P1-TRIAGE header makes p1-heating the home for 4.3.2.1, 4.3.2.2) | Spec lines 668–672
- H4 E = IVt and thermal equilibrium removed | R-a (R4 abov0, abov3) | key term "E = IVt" lost
- H6 temperature key term changed, unit K lost | R-a (R7 fact1, abov2) | the "measure of" versus "related to" contradiction was fixed (Spec line 743 "related to")
- H7 table note column and "(at const. pressure)" removed | R-a (abov1, R4 abov2) | tables must not change
- H8 "highest" softened; values bullet cut | R-a (R6 fact0, R4 abov2) | number "900" lost
- H9 "close to brass or copper" cut | R-a (R4 fact0) | auditor: old claim was weak
- H10 checkpoints replaced and added | R-a (chec0, R7 fact0, chec0) | arithmetic correct

p1-kinetic-potential
- K1 heading, Q = mcΔT became ΔE = mcΔθ | R-a (wron0–wron8, R5 fact1) | removes a contradiction with p1-heating
- K3 "use 10" removed; use the g given | R-a (fact0–fact4) | Spec line 102
- K4 joule "in the direction of the force" | R-a (R4 fact0) | correct
- K5 limit of proportionality added | R-a (miss0) | Spec line 84
- K6 learn versus given equations | R-a (miss3) | Spec lines 114–122, 157
- K8 checkpoint "compressed" became "stretched" | R-a (R4 chec0) | answer unchanged

p1-national-grid
- N1 place names removed | R-a (R4 fact0) | named places lost
- N2 transformer workings and equations removed | R-a (abov1, abov2, abov3) | checked: lessons/physics/p7-transformers.json teaches AC only, Vp/Vs = Np/Ns and VpIp = VsIs
- N3 generating electricity key point removed | R-a (abov0) | Spec line 266: descriptions not required
- N4 33 kV, 11 kV, overhead cables removed | R-a (abov7, R5 wron3) | numbers lost
- N6 energy resources key point rewritten: costs, mix figures, baseload removed; spec content added | R-a (miss0–miss4, abov4, fact1, wron3, wron4, R3 cost, R3 memTip) | Spec 4.1.3 lines 249–271
- N7 lesson asks to weigh cost but gives no cost facts | R-a (R3 cost ACCEPT cut every cost claim) | restoring them is also R-c (no prices or market claims)
- N9 table rows, columns and cells changed; advantage cells repeat reliability | R-a (miss0, abov5, abov6, fact0, fact5, R3 cost, R3 table cell, R5 wron2, wron4) | tables must not change
- N11 trends with no year | R-a (miss2: trends in words only, no figures) | [own knowledge]
- N12 tutor note "potential difference, not voltage" | R-a (wron0, wron1) | auditor: clarity only, not an error
- N13 checkpoints replaced or removed | R-a (chec0, abov0) | keys changed

p1-power
- W1 P = Fv removed; W = Fs, 1 J = 1 N m added; heading changed | R-a (abov0–abov4, wron0–wron3, miss0–miss3) | P = Fv not in Spec 4.1.1.4
- W3 human power figures and table rows removed | R-a (R6 abov0, R6 fact0, re-check abov0, fact1) | numbers lost
- W5 crane explanation reworded | R-a (fact2) | auditor: improvement
- W6 triangle memTip corrected | R-a (fact0) | auditor: fixes an old error
- W7 kettle tutor note condition added | R-a (R7 fact0) | "lost" in it was fixed (X3)
- W8 "baseload" removed from table | R-a (p1-national-grid abov4: baseload cut from the topic) | fact lost
- W9 checkpoints replaced and added | R-a (abov1, R4 chec0; EDIT RULE: one checkpoint per key point) | arithmetic correct

Across P1
- X7 concepts removed from every P1 lesson (payback time, P = Fv, baseload, regenerative braking, perpetual motion, thermal equilibrium, E = IVt, kelvin) | R-a (efficiency abov0; power abov0; national-grid abov4; conservation abov0, abov1; heating abov3, R4 abov0, abov2) | none of payback, P = Fv, regenerative or perpetual is in data/spec/physics.md

### Fixed (see P1-FIX-LOG.md, section "Runbook task 1.0 step g")

C7, C9 (motor row), C14 / X2, C15, E1 / S8 / X1, E4, E10 / X4, E11, S1 / X5, S2 (four main pathways), S5 (contradiction), S7, S10, H1 (dangling sentence), H6 (contradiction), H11, H12 / W7 / X3, K2 (introTips count), K7, N5, N8, N10, W4.

## P2 Electricity: independent audit d08b060-2 (runbook task 1.1 step g)

Findings file: tools/audit-runs/d08b060-2.md. The topic ran 5 of 5 spec-check runs without a clean run and went straight to the audit. As for P1, the auditor measured spec-check changes against tools/plain-english-rules.md, so most findings are changes a triage decision required. They are rejected R-a with the decision ID from tools/spec-check-results/P2-TRIAGE.md.

### Needs a decision from Jason

- P2 | B1 (HIGH) p2-domestic earthing: "The earth wire gives a low-resistance path to earth. So most of the fault current flows through the earth wire, not through anyone touching the casing." | R-a (fuse hold released: p2-domestic abov3 cut every fuse and circuit breaker; R3 p2-domestic fact2: "most of the fault current", no fuse reintroduced) | Auditor: the lesson now implies the earth wire alone makes a faulty appliance safe; the protection depends on the large current blowing the fuse or tripping the breaker, which cuts off the live supply [own knowledge]. Spec 4.2.3.2 says only "The earth wire is a safety wire to stop the appliance becoming live" and does not name fuses. Restore one sentence on the fuse, or keep the spec-only version?
- P2 | A1 (HIGH) fuses, fuse ratings, MCB and RCCB gone from the whole topic (grep -i fuse on lessons/physics/p2-*.json finds nothing) | R-a (fuse hold released: p2-domestic abov2, abov3, chec1; p2-power-energy abov3; p2-components abov9) | Auditor: large fact loss, tied to B1. "fuse" is not in data/spec/physics.md.
- P2 | B2 p2-current-voltage "The resistance of a wire depends on its length and its temperature" | R-a (R2 p2-current-voltage fact0; abov6, abov7 cut material and cross-sectional area; rejected again in R4 and R5 fact0) | Auditor: false by omission; a wire's resistance also depends on cross-sectional area and material [own knowledge].
- P2 | D3 "Required practical 3" (p2-current-voltage keyPoints[2].content, writeBullets[5]) and intro "a big chunk of Topic 2" use the specification's own numbering | R-a (p2-current-voltage miss2 ACCEPT: describe required practical 3) | Auditor: the rule says never name the specification; whether practical and topic numbers count is a judgement call. Same question as P1 E6.

### Rejected: change required by a triage decision, or not a fault

- A2 "Ohm's law" no longer named in P2 | R-a (p2-components fact2, fact8; p2-current-voltage fact0, wron4; p2-power-energy fact2) | key term lost; spec 4.2.1.3 and 4.2.1.4 do not use the name
- A3 conventional current versus electron flow cut; diode symbol now "points the way current flows" | R-a (R2 p2-current-voltage abov0; R2-extend in docs/RUNBOOK.md) | auditor: less precise, since p2-static teaches that electrons move [own knowledge]
- A4 ammeter low and voltmeter high resistance cut | R-a (R2 p2-series-parallel abov0, abov1; R5 p2-current-voltage abov1) | fact lost
- A5 other facts cut across P2 (0.7 V, rectification, photons, potential divider, charge carriers, NTC, zigzag symbol, EMF and internal resistance, material and area, oscilloscope, RMS and peak, transformers, double insulation, cable grip, P = V²/R, kWh, cost, payback, typical powers, parallel resistance formula, mixed circuits, static uses and dangers, uniform fields, lightning build-up, dust on screens) | R-a (p2-components abov0–abov8, wron5; p2-current-voltage abov0–abov7, R2 abov1; p2-domestic abov0, abov1, abov4, abov5, R2 abov3, abov6, R5 abov0; p2-power-energy abov0–abov3, R4 abov0; p2-series-parallel abov0–abov10, abov5; p2-static abov0–abov6, R2 abov0, abov1) | auditor: removal looks spec-driven (e.g. spec: total resistance of parallel resistors not required)
- B3 "also called voltage" removed | R-c (EDIT RULE: "potential difference", never "voltage") | the broken pronoun in the same paragraph was fixed
- B4 "Certain insulators become charged" against a person becoming charged by rubbing feet on carpet | R-b (spec 4.2.5.1: "When certain insulating materials are rubbed against each other they become electrically charged") | the door-handle reason was fixed
- C3 earth wire and open-switch danger facts repeated across keyPoints[1] and [2] | R-a (p2-domestic miss0, R3 miss0, chec0, R2 fact0–fact3 placed them in each field) | repetition, no error
- C4 (part) parallel total resistance stated twice in keyPoints[1].content and in revisionCardBullets[1] and [2] | R-a (p2-series-parallel abov0: keep "less than the resistance of the smaller one") | repetition, no error. The orphan branch-current bullet was cut.
- C6 video titles point to content no longer taught | R-c (videos and videoLinks are never-change fields) | mismatch is in the video fields
- C8 (part) diode table "Real-world use" repeats "What it does" | R-a (p2-components abov3: rectification cut) | the LDR "semiconductor" key term was fixed
- D1 science terms changed: friction to rubbing, like/unlike to same/different types, AC/DC key terms, bias to direction, "Charge flow (Q)" | R-a (p2-components abov1, wron3; p2-current-voltage wron1; p2-domestic wron0–wron2, R4 wron0; p2-power-energy wron2; p2-static wron2, R3 wron0, wron3, R4 wron0–wron7, R5 wron0–wron2) | new wording follows data/spec/physics.md
- D2 checkpoints replaced, added or reordered | R-a (chec decisions in every P2 lesson; EDIT RULE: one checkpoint per key point) | auditor checked every new answer: all correct
- E1 thermistor sentence and series/parallel combinations in p2-current-voltage | R-a (p2-current-voltage fact3, miss2) | belongs in p2-components and p2-series-parallel
- E2 E = QV taught in both p2-current-voltage and p2-power-energy; "designed to bring about energy transfers" twice in p2-power-energy | R-a (p2-current-voltage fact6, wron0; p2-power-energy wron1, miss2, R2 miss1) | duplication

### Fixed (see P2-FIX-LOG.md, section "Step g: independent audit")

B3 (pronoun), B4 (door handle reason), B5, B6, C1, C2, C4 (orphan bullet), C5, C7, C8 (LDR key term), D4.
