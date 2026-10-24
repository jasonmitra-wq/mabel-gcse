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

- P2 | B1 (HIGH) p2-domestic earthing: "The earth wire gives a low-resistance path to earth. So most of the fault current flows through the earth wire, not through anyone touching the casing." | R-a (fuse hold released: p2-domestic abov3 cut every fuse and circuit breaker; R3 p2-domestic fact2: "most of the fault current", no fuse reintroduced) | Auditor: the lesson now implies the earth wire alone makes a faulty appliance safe; the protection depends on the large current blowing the fuse or tripping the breaker, which cuts off the live supply [own knowledge]. Spec 4.2.3.2 says only "The earth wire is a safety wire to stop the appliance becoming live" and does not name fuses. Restore one sentence on the fuse, or keep the spec-only version? **RESOLVED 2026-10-16 (Jason):** fuses stay cut; sentence replaced with the spec wording "The earth wire is a safety wire to stop the appliance becoming live"; the same fault-current claim removed from memTip, tutor_note, examTips[0] and intro.
- P2 | A1 (HIGH) fuses, fuse ratings, MCB and RCCB gone from the whole topic (grep -i fuse on lessons/physics/p2-*.json finds nothing) | R-a (fuse hold released: p2-domestic abov2, abov3, chec1; p2-power-energy abov3; p2-components abov9) | Auditor: large fact loss, tied to B1. "fuse" is not in data/spec/physics.md. **RESOLVED 2026-10-16 (Jason):** fuses stay cut ("fuse" is not in the specification).
- P2 | B2 p2-current-voltage "The resistance of a wire depends on its length and its temperature" | R-a (R2 p2-current-voltage fact0; abov6, abov7 cut material and cross-sectional area; rejected again in R4 and R5 fact0) | Auditor: false by omission; a wire's resistance also depends on cross-sectional area and material [own knowledge]. **RESOLVED 2026-10-16 (Jason):** "depends on its length and its temperature" lead-in removed; practical now reads "you investigate how the length of a wire affects its resistance, at constant temperature".
- P2 | D3 "Required practical 3" (p2-current-voltage keyPoints[2].content, writeBullets[5]) and intro "a big chunk of Topic 2" use the specification's own numbering | R-a (p2-current-voltage miss2 ACCEPT: describe required practical 3) | Auditor: the rule says never name the specification; whether practical and topic numbers count is a judgement call. Same question as P1 E6. **RESOLVED 2026-10-16 (Jason):** specification numbering removed from P1 and P2 text ("a required practical"; "Topic 2" removed). Grep of P1 and P2 lessons for practical, topic, section and paper numbers now finds none.

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

## Runbook v2 task 2.1: --blocking-only recalibration not run (2026-10-16)

- Gate: `node tools/spec-check.js --run --blocking-only --file tools/spec-check-calibration/p7-magnets-13ac63d.json --as p7-magnets` must still flag iron as a permanent magnet. Not run in the cloud session: SPEC_CHECK_API_KEY unset, and data/spec/physics.md absent (gitignored; filestore.aqa.org.uk blocked by the session's network policy). Code and dry run done. Run the gate on C:\dev\mabel-gcse before task 2.5; if iron is not flagged, STOP per 2.1. **RESOLVED 2026-10-17:** run on C:\dev\mabel-gcse; PASS, iron flagged as a permanent magnet (factual_errors[0], keyPoints[0].content); $0.15.

## Runbook v2 task 2.3: teach-sim --run not done (2026-10-16)

- Gate: one `node tools/teach-sim.js --run p3-particle-model` with all three fault types (student's name, over 60 words, stock praise) gone. Not run in the cloud session: SPEC_CHECK_API_KEY unset. Done instead: `--rescore` (saved run unchanged, 8 flagged) and `--rescore --replay` (the same model replies through the new post-processing: 0 flagged). Run the gate on C:\dev\mabel-gcse. **RESOLVED 2026-10-17:** `--run p3-particle-model` on C:\dev\mabel-gcse: 18 tutor turns, 0 flagged; name, over-60-word replies and stock praise all gone (tools/teach-sim-runs/p3-particle-model-2026-10-17-1.md).
- Seen while doing it, not changed (outside teach mode): js/lessons.js:725–726, the "ask a question" prompt after a lesson, still names the student in the system and user prompt.

## Runbook v2 task 2.4: new Physics content not written (2026-10-16)

- 2.4 says to write the new lessons (4.5.3, 4.5.4, 4.5.5, 4.6.3, P8 Space: 4.8.1.1, 4.8.1.2, 4.8.1.3 if needed, 4.8.2) and the additions (4.5.1.2 to p5-forces-motion, 4.6.1.5 seismic waves to p6-sound) from the specification text. data/spec/physics.md is gitignored and absent from the cloud container, and filestore.aqa.org.uk, www.aqa.org.uk are blocked by the session's network policy, so it cannot be rebuilt (MANIFEST md5 check impossible). Writing from memory would break the EDIT RULE "specification terms exactly", so nothing was written. Do 2.4 on C:\dev\mabel-gcse, where data/spec/physics.md exists. **RESOLVED 2026-10-17:** written on C:\dev\mabel-gcse from data/spec/physics.md (md5 matches MANIFEST): p5-elasticity, p5-moments, p5-fluid-pressure, p6-black-body, new topic P8 with p8-solar-system, p8-life-cycle-of-a-star, p8-red-shift; additions to p5-forces-motion (4.5.1.2) and p6-sound (seismic waves). Logs: P5-, P6- and P8-FIX-LOG.md.

## Bored-student testers (2026-10-17)

- STOP: API credit balance too low ("Your credit balance is too low to access the Anthropic API"), hit during step 3's first pass. Add credits, then type Continue. Where to resume: the Runbook position line in docs/STATE.md. **Credits added; resumed 2026-10-17.**
- STOP (2026-10-17, second): "You have reached your specified API usage limits. You will regain access on 2026-11-01 at 00:00 UTC." — a monthly spend limit set on the API account, hit during the text runs (after p1-heating). Raise the limit in the Anthropic Console, or wait until 2026-11-01, then type Continue. Still to run: 5 text first-pass lessons, then the re-runs of every failure (about 25 runs, roughly $6–8 at today's costs).
- Live AI lessons that the testers have failed so far, and are still switched on: b3-defences (text FAIL), p1-energy-stores, p2-current-voltage, p2-series-parallel (text FAIL), p1-power (website FAIL), and p3-particle-model (text FAIL, calibration). The task says a non-Physics lesson that still fails after its one re-run comes out of TEACH_ENABLED; nothing has been re-run yet, so nothing has been removed. Question for the planning chat: should the P1, P2 and P3 AI lessons also stay off the live site until they pass (the new section 1 rule in step 4a says so), or stay on as the task's step 3 implies? **Resolved 2026-10-17 (brief docs/briefs/2026-10-17-sonnet-tutor.md): they stay on; a tester FAIL never takes an AI lesson off the live site (runbook section 1).**
- **Still failing after the one re-run (2026-10-17): every tested lesson and maths topic.** Text tester: p3-particle-model, b3-defences, p1-energy-stores, p1-kinetic-potential, p1-conservation, p1-efficiency, p1-power (closest: engagement 3, no quit, 2 mismatched questions), p1-heating, p1-national-grid, p2-current-voltage, p2-series-parallel, p2-components, p2-domestic, p2-power-energy, p2-static, g5-development, g5-nigeria, g5-uk-economy. Website tester: M1–M6, p1-power, b3-defences, g5-development, p2-static. Run files: tools/teach-sim-runs/*-2026-10-17-2-bored.md, tools/site-test-runs/2026-10-17/*-2 to -5/.
  - Taken out of TEACH_ENABLED as the brief says (slides stay): b3-defences, g5-development, g5-nigeria, g5-uk-economy. **Put back 2026-10-17 (brief docs/briefs/2026-10-17-sonnet-tutor.md, step 1).**
  - Common cause in the text runs: the tutor model (claude-haiku-4-5) asks about terms and facts it has not yet said, despite the fixT4 prompt rule and a code re-ask for "What do we call…?" questions. Prompt rules alone have not fixed it. Options for the planning chat: a stronger tutor model for teaching turns; have the code pass the tutor the exact sentence to teach before each question (from the key point's content) rather than the whole key point; or accept a lower bar for "question matches what was taught". **Decided 2026-10-17 (brief docs/briefs/2026-10-17-sonnet-tutor.md): tutor model Sonnet (TUTOR_SONNET), at most one mismatched question allowed, and teach-then-ask if the sample still fails.**
  - Maths, not fixed (design questions): steps with no answer box can be tapped through for marks in a scored test (330 skip steps in the bank); the worked example is on screen beside a scored test question; cmp-A03's worked example has the same answer as the question; cmp-B04 step 3 asks for kg, which the question does not ask for; the home page says "Pick up where you left off" on a first visit with no history. **Decided 2026-10-17 (brief docs/briefs/2026-10-17-sonnet-tutor.md, step 6): no skipping, statement steps earn no marks, no worked example in the topic test, cmp-A03 and cmp-B04 fixed. The "Pick up where you left off" line is not in the brief and stays open.**
  - Question repeated from above: should the Physics AI lessons (P1, P2, p3-particle-model) also come off the live site until they pass, as the new section 1 rule says for new switch-ons? They are still on. **Resolved 2026-10-17: they stay on (see above).**
- Step 4e of the tester brief not applied: it says to add "(with 2.5c2 testing before they go live)" after "each followed by its AI lessons" in Phase 3, but docs/RUNBOOK.md's Phase 3 line ("Phase 3 — Biology, then Chemistry: defect 10 renderer fix first, then plain-English rewrite batches, then the topic procedure per topic.") has no such phrase. Section 1's new rule already covers every subject. Where should the words go? **Resolved 2026-10-17 (brief docs/briefs/2026-10-17-sonnet-tutor.md, step 7a): "(with AI lesson testing before they go live)" added as the last sentence of the Phase 3 paragraph.**
- Half-done maths topic test saves nothing: leaving after 4 of the questions leaves Dashboard 0%, History "No sessions yet", Error log "All clear" (M1, M2, M3 runs). What should a half-done test count as? Not changed. **Decided 2026-10-17 (brief docs/briefs/2026-10-17-sonnet-tutor.md, step 6d): progress is saved as she goes and resumes at the same question and step.**

## Brief 2026-10-17 (Sonnet tutor): faults still open after the maths re-run (step 6)

Website tester, maths mode, one run each (tools/site-test-runs/2026-10-17/M1-5, M2-4, M3-4, M4-4, M5-4, M6-3). Not fixed, as they are outside the brief:
- Statement steps (no answer box) can hold the marked answer in a topic test: M2 f⁻¹(x) = (x+1)/4 given in step 1; M4 Q1 "All three sides are equal (SSS)" and Q4 "SAS congruence" given, both steps statements, so the question tests nothing; M4 Q3 and Q5 give the method. A question whose answer is a statement step needs rewriting or leaving out of tests.
- Answer format: "Write the correct power of 10" rejects "10^6" (wants 6); M5 Q5 step 1 asks for a decimal to 4 d.p. while the question asks for simplified fractions, and asks two things with one box; M5 Q3 step 2 "State your answer and interpret it briefly" is a number box that re-accepts the last value.
- Home: "Pick up where you left off" with no resume card; Dashboard, History and Error log show nothing after a test (the test resumes from the topic page only).
- Test header: "Topic test · question N of 10" is replaced by "Good — keep going." after a correct step, and is half hidden under the sticky nav on laptop.
- Resume shows the stored answer in finished steps, not what she typed.
- Hint box stays inside a step after it is correct; "£" in a prompt and as a prefix.

## Brief 2026-10-17 (Sonnet tutor): AI lessons still failing after teach-then-ask (step 5)

Same sample re-run once with TEACH_THEN_ASK on (tools/teach-sim-runs/*-2026-10-17-4-bored.md; tools/site-test-runs/2026-10-17/p1-energy-stores-2, b3-defences-4). All four text lessons and both website lessons FAIL; every one still has engagement 2 and a quit point. All stay live (runbook section 1). For the planning chat:
- Questions asked before teaching: b3-defences 4 → 1, g5-development 4 → 1, p2-current-voltage 1 → 1, p1-energy-stores 2 → 3. The tutor now often asks back the sentence it has just said ("…called cilia… What are these tiny hair-like structures called?"), which the judge calls a question that tests nothing.
- Lessons are longer (29–35 tutor turns, was 23–33): every content sentence must be taught before a point is covered (p1-energy-stores point 1 has 18 sentences).
- A correct answer often gets no feedback when the check-in ("Do you want me to just tell you the rest?") fires on that turn (both website runs, 2–3 times each). This is the check-in path in js/teach-core.js `_decide`: the check-in prompt says not to teach or acknowledge anything.
- She asks to stop ("can we do this later im hungry") and gets the same question again; no pause button.
- Content errors seen from the tutor: "the lamp wastes the other 85 J" for a 100 W / 15 W example; heating "conduction and convection are the two ways"; "0. 15" with a stray space (also seen with Haiku: "0. 4").

## Brief 2026-10-17 (tutor flow): AI lessons still failing after FLOW_FIX (step 3)

FLOW_FIX (js/teach-core.js, on) ran once, got one fix round, and was re-run once (text: tools/teach-sim-runs/*-2026-10-17-7-bored.md; website: tools/site-test-runs/2026-10-17/p1-energy-stores-5, b3-defences-7). All six still FAIL under the new rule. All stay live (runbook section 1).

Flow faults per text run: before FLOW_FIX (step-4 Sonnet runs re-judged, *-5-bored) → first pass (*-6) → after the fix round (*-7):
p1-energy-stores 11 → 1 → 3; p2-current-voltage 4 → 2 → 3; b3-defences 9 → 4 → 5; g5-development 12 → 10 → 5. checkin_without_struggle is gone (0 in the re-run, was 12 across the baseline); skip_request_ignored is gone.

Still there, all in shared code:
- question_repeated_after_correct_answer (p2 ×2, b3 ×3): the repeat is reworded or reversed ("what does non-specific tell us…" after she said "it attacks anything"), so the word-overlap guard and the list of her correct answers in the prompt do not catch it. Next idea: let the answer-marking call also say whether the new question is already answered.
- correct_answer_not_acknowledged (p1, b3, g5 ×2): the marking call said OTHER or PARTLY for an answer the judge calls right (e.g. "cause we want kinetic not heat", "schools and hospitals"), so the reply did not open with the confirmation.
- tell_me_skipped_content (p1, g5 ×2): long key points (g5 causes of the gap, aid) are told in 170 words or fewer, which leaves sub-points out. The brief asks for all of it; that would need more than one turn per telling.
- closing_claims_untaught_content (p2, g5): the closing names a point as "answered questions on" when she answered one of several questions, or names a point never reached. The point's state is per key term, not per content sentence.
- factual_or_unit_slip (p1: sound called an end store; b3: "non-specific" glossed as "all at once"): model wording, not lesson text.
- Website (both FAIL, broken 6 each): answers given inside the question and copy-back questions (b3), a lamp Sankey example used without being introduced (p1), a correct "measles" marked wrong because the question was "which one did we say" (b3). b3 would quit at S16.
- Not a flow fault but seen: questions asked before teaching are 0–1 per text run now (p1 T0, b3 T11), down from 1–4.

## Brief 2026-10-17 (tutor flow): maths website re-run after step 5

Re-run once on M1–M6 (tools/site-test-runs/2026-10-17/M1-6, M2-5, M3-5, M4-5, M5-5, M6-4). M1 and M3 PASS (all six failed before). The three step-5 faults are gone: no statement step gives away a marked answer, "10^6" is accepted, and the home page has a working resume card (no "Pick up where you left off" without one). Still failing, none of them step-5 items:
- Home: History / Dashboard / Error log show nothing after a maths test (M2, M5); "Revise a topic" card lists no Maths (M2, M4).
- Question wording: M2 Q3 unit cm³ not in the question; M4 step 2 repeats step 1 ("Calculate angle ACB"), step 1 "Identify the two legs" has no box, "What fraction do you get?" wants 0.6; M5 "Find P(B) and then P(A|B)" with one box, format message "like 15" on a probability step; M6 Q5 "minimum and maximum" checks only the maximum; M6 Q4 statement step now hides "7/36" until the question is done, and the judge wants a box for it.
- Resume shows the stored answer in finished steps, not what she typed (M5; already listed above).

## FLOW_FIX round 2 (2026-10-17): re-run, still failing

Round 2 (ce3d08c: model check for reworded repeats, more lenient marking, tell-all up to 260 words, closing splits worked / part-told / told) was re-run once. Two sessions ran it at the same time, so b3, g5 and both website lessons have two runs each (text: tools/teach-sim-runs/*-2026-10-17-8-bored.md and b3/g5 -9; website: tools/site-test-runs/2026-10-17/p1-energy-stores-7, -8, b3-defences-8, -9; p1-energy-stores-6 was cut short and has no result). All FAIL. All stay live.

Flow faults per text run, after round 1 (*-7) -> round 2: p1-energy-stores 3 -> 1; p2-current-voltage 3 -> 4; b3-defences 5 -> 2, 1; g5-development 5 -> 4, 2. Engagement 3 for p1 and p2 (was 2), 2 for b3 and g5. Website broken: p1 6 -> 4, 8; b3 6 -> 8, 7.

Still there:
- correct_answer_not_acknowledged (p1, p2, g5 x2; website p1-8 twice: "kinetic store cos its moving", "make it go higher?"). The lenient marking prompt did not fix it.
- question_repeated_after_correct_answer down to one per b3 run (b3-8 T3, b3-9 T20); gone from p2 and g5.
- tell_me_skipped_content (b3-8, g5-8, g5-9) and, on the website, "yeah just tell me" not answering the question just asked (b3-9 S5).
- closing_claims_untaught_content (p2 x2) and factual_or_unit_slip (p2 T11, g5-8 T8).
- checkin_without_struggle back once (g5-8 T17).
- Website, new or still seen: "no just explain it better" read as yes to the tell-all (b3-8 S15); questions dropped unanswered (b3-8); copy-back questions after naming the term (b3-9 "leucocytes"; p1-8 "The next pathway is electrical ... which pathway?"); "too long" answered at the same length (p1-7 T3, T9); she asks to stop for lunch and gets another question (b3-9 S3); loose "heat" accepted (p1-7 T16).

## P3 Particle model audit (2026-10-18, tools/audit-runs/bb269b4-1.md)

- F5 (c) REJECT, R-c: the auditor notes that p3-particle-model keyPoints[3] "Limitations of the particle model" (and its checkpoint 3) is not in the physics specification; it is chemistry 4.2.2.1 (HT there). Not cut: it is GCSE content, not above GCSE, and cutting it would remove what chemistry 4.2.2.1 requires ("Limitations of the simple model above include that in the model there are no forces, that all particles are represented as spheres and that the spheres are solid"). Parts (a) and (b) fixed: the lesson now says the spheres are drawn with no forces between them. For the planning chat: keep it here, or move it to the chemistry lessons when Chemistry is done.

## P3 Particle model AI lessons, testers (2026-10-18, runbook 2.5c2)

All four P3 lessons are on (TEACH_ENABLED). Text tester first pass: p3-density PASS (engagement 3, no quit; the first text-tester PASS), p3-particle-model, p3-changes-of-state, p3-pressure FAIL. Website tester p3-pressure FAIL (tools/site-test-runs/2026-10-18/p3-pressure). One fix round: shared code js/teach-core.js PAUSE_FIX (pause on "do this later" / "can we stop" / "gotta go" with a fixed goodbye and no question; after "too long", tell-alls at most 4 sentences / 90 words and other replies at most 40 words); lesson p3-pressure keyPoints[0] no longer previews keyPoints[1] and [2], keyPoints[3] states the internal energy → temperature link. Re-run once: all FAIL (text: tools/teach-sim-runs/p3-*-2026-10-18-2-bored.md; website: p3-pressure-2). Lessons stay on.

Still there after the re-run:
- correct_answer_not_acknowledged and question_repeated_after_correct_answer (p3-particle-model ×4 and ×2; p3-pressure ×1 each); "it doubles innit" copied from the tutor's own hint counted as correct (website).
- Tutor drops a stated condition: "pressure × volume always stays the same" (p3-pressure T10, T14; the lesson says fixed mass, constant temperature). "Thermal is half-right" for internal energy (p3-particle-model T6).
- closing_claims_untaught_content (p3-changes-of-state T14; website closing says both "end of this lesson" and "come back to the rest").
- tell_me_skipped_content (p3-changes-of-state T11): the short tell-all after "too long" (PAUSE_FIX b) leaves out the rearrangements and the specific heat capacity contrast. This is the trade-off PAUSE_FIX makes on purpose; for the planning chat to decide.
- Website: wrong answer "it doubles again?" goes straight to the "just tell you the rest?" check-in with no feedback; "nah just tell me lol" logged as check-in no; Key Terms side panel clipped at 1366×768; "Jump to" heading and "← Home" under the sticky bar; lesson title truncated on phone; end screen scrolled up so "Lesson finished." and its buttons are out of view.
- PAUSE_FIX regression found by the website re-run and corrected the same day: "can i get food after this im starving" ended the lesson (bare "im starving" matched). Hunger or tiredness alone no longer pauses; "do this later", "can we stop", "gotta go" still do. Checked offline (pattern tests; pauseFix:false byte-identical), not re-run through the testers (runbook: one re-run).
- Run-order note: the first-pass text run of p3-pressure started after PAUSE_FIX (a)/(b) was written (the loop starts one process per lesson), so it ran with the fix.

## Brief 2026-10-18 (first-time learner): step 6 re-run, still failing

Re-run once after the fix round (2f41513), FIRST_TIME on: tools/teach-sim-runs/b3-defences-2026-10-18-4-bored.md, g5-development-2026-10-18-5-bored.md. Both FAIL. Both stay live.

unexplained_term / answer_in_question, after-run -> re-run: b3-defences 8/13 -> 4/12; g5-development 4/5 -> 6/5. tone_vs_reference: b3-defences worse -> same; g5-development worse -> worse.

Still there:
- g5-development tone worse. Judge evidence: "Not quite. Sharing 100 million pounds between 10 million people gives 10 pounds each ... So that is right." (a right answer still opens with "Not quite", after the fix round stopped marking basics answers; cause not yet traced); a reasonable answer skipped; a muddled pocket-money comparison instead of answering "what?". The brief asks for the cause to be fixed before finishing; the one re-run is used, so it is here for the planning chat.
- b3-defences: the "Do you want me to just tell you the rest?" check-in is colder than the reference (no reassurance). Taken up by brief 2026-10-18 (3), step 1c.
- answer_in_question stays high on b3-defences (12): mostly the same fact restated in the question one message later.

## Brief 2026-10-18 (leaving and tired): RESPECT_EXIT test, still failing

Text tester with --exit-script (she says "I'm tired" once, picks "one more quick thing" then "keep going", and says "bye, got to go" near the end), first pass -> re-run: tools/teach-sim-runs/p2-components-2026-10-18-3-bored -> -4, b3-defences-2026-10-18-5-bored -> -6. Website: tools/site-test-runs/2026-10-18/p2-components-2 -> -3. All FAIL. All stay live.

Counts, first pass -> re-run (unexplained_term / answer_in_question / exit_not_respected / tiredness_pushed_on / checkin_curt_or_repeated):
- p2-components: 5/7/1/1/0 -> 5/1/0/0/0.
- b3-defences: 4/8/0/0/0 -> 4/11/0/0/0. tone_vs_reference worse -> same.

Fixed in the one round: "bye" after the lesson has ended now gets the same fixed goodbye (it got a free reply with no "place is saved"); after the one quick question, a reply that would bring the check-in now still gets the reaction and "stop here or keep going?" (the choice was lost on the website); the quick question must not contain its own answer. Tester: "near the end" is her first reply on the last key point (the second never came, so p2 had no goodbye); the judge's tiredness_pushed_on says "this is long" is not tiredness (it flagged one).

Still there:
- The goodbye's "answered questions on" follows the FLOW_FIX record, which counted diodes as part-answered when she had only asked "whats a diode" (website p2-components-3 T16). The goodbye is honest only as far as that record is.
- p2-components text re-run stopped at T12 on the first key point (the tester's 12-turns-a-point limit), so "bye, got to go" did not come up in that run. It was tested in both b3 runs and the website re-run.
- Not RESPECT_EXIT, seen on the website: the "tell me the rest" message on fixed resistors is a wall of text (V = IR, worked example, I-V graph) and twice said LDR and thermistor resistance "changes with current" (not in the lesson; a tutor slip); "the origin is usually the bottom-left corner" while the diagram's origin is in the middle; phone layout items as before (panels above the chat, title truncated, end screen scrolled up).
- The quick-thing reaction sometimes adds its own sign-off ("you can rest up and grab some food") before "stop here or keep going?".

## P4 Atomic structure (runbook 2.6, 2026-10-18): testers still failing

Topic procedure done (P4: done, 72a6fd4). AI lessons on for all four (bdd9612). teach-sim: QUESTION_FIX added (either/or question left after the retries ran out); re-runs clean apart from long tell-the-rest and closing replies.

Text tester first pass -> re-run (one fix round, 1203c61: TESTER_FIX4 shared code; basics for neutron, gamma rays, atomic and mass number). All FAIL. All stay live.
- p4-nuclear-model: quits T14 -> T11; unexplained_term 9 -> 3, answer_in_question 8 -> 3.
- p4-radioactivity: quits T7 -> no quit; unexplained_term 6 -> 3, answer_in_question 4 -> 9.
- p4-half-life: quits T8 -> T9; unexplained_term 5 -> 3, answer_in_question 2 -> 5.
- p4-nuclear-fission: quits T9 -> T9; unexplained_term 6 -> 4, answer_in_question 6 -> 4.
Website p4-half-life: FAIL, broken 10 (quits S10) -> 7 (quits S8) (tools/site-test-runs/2026-10-18/p4-half-life, -2). No looks_wrong item stops use.

Fixed and seen fixed in the re-runs: "whats X mean" is now answered (it was ignored twice on the website); goodbye names points in lesson order with consistent capitals.

Still there (tutor slips, not lesson text; the lesson text is right in each case):
- Wrong arithmetic accepted and repeated (website -2 T6/T7: "40 Bq, then 25 Bq"); a correct answer ignored (website -2 S4, S15; text half-life T15, fission T3).
- p4-radioactivity: tutor agreed gamma's high energy means "loads of damage" (gamma is weakly ionising); said only mass numbers balance.
- p4-nuclear-fission: tutor said a nucleus "only" splits after absorbing a neutron (the lesson says usually; spontaneous fission is rare).
- p4-half-life: a request to stop for lunch was followed by more teaching (exit_not_respected T9): "Lunch is a good call" did not match the exit patterns.
- The goodbye after the lesson's end is still long and its "answered"/"told" split follows the FLOW_FIX record, which can be wrong (website -2 T16, text half-life T21).
- answer_in_question stays high (p4-radioactivity 9).
- Website: the side-column diagram thumbnail is unreadably small; the diagram's 800/400/200 Bq does not match the tutor's own 80/40 example; Key Terms panel cut off at the bottom.
## Runbook v3 (2026-10-19)

- p2-current-voltage, audit 13cf62e-1 F8 REJECTED: the auditor says workedExamples[0].given in keyPoints[6] lists Q = 60, which the question does not give (it gives I, t and V). Reason: `given` holds the values the examBox formula E = Q V is solved with, so tools/check-lesson-v3.js can recompute the answer; Q = 60 C is derived in step 1, whose own calc (2 × 30) is checked. The question and steps a learner sees are correct. Decision for the planning chat only if the shape should carry derived values in a separate field.
- p2-components, audit 923f2b9-1 F7 REJECTED: "a steeper I-V line means a lower resistance" (kept by P2-TRIAGE R4 p2-components fact0) is no longer taught in P2. Reason: it is not a specification statement; the v3 lessons find resistance at a point with R = V ÷ I, the route the specification gives, and the brief asks for less load on a beginner. Decision for the planning chat if it should come back (it would sit in p2-current-voltage keyPoints[3]).
- p2-components, audit 923f2b9-1 F14 REJECTED: six sentences of 21–23 words and some bracketed asides break tools/plain-english-rules.md (15 to 20 words). Reason: runbook v3 section 3 replaces that limit (25 words, 30 with "because" or "so"), and the auditor (frozen) still reads the old rules file. Every sentence passes tools/check-lesson-v3.js.
- p2-components, audit 923f2b9-1 F5 (fixed, noted): the fuse symbol is kept in the circuit symbol chart, because the specification's symbol chart (an image, not in data/spec/physics.md) includes it [own knowledge]. What a fuse does is not taught, in line with P2-TRIAGE. Confirm or cut.
- Pilot site tests (phone size, breakage only, 2026-10-19). Breakage fixed once (P2-FIX-LOG). Left for the planning chat, none of them lesson text, all tutor behaviour (the tutor is frozen) or existing layout:
  - Tutor ignores "whats X" questions, or answers them only after "just tell me" (p2-current-voltage-2 S6 coulomb, S15 in parallel, S18 resistance; p2-components-2 S9 LDR). The lesson defines each term (keyTerms, <dfn>, glossary).
  - Tutor science slips, not in the lessons: "the voltmeter measures the push from the cell" and "a cell is just a battery" (p2-components-2 T12, T13); "It sits in parallel" after an ammeter sentence (p2-current-voltage-2 T14); "Earlier you said…" for something the tutor said (T28).
  - Correct answers not acknowledged or under-credited (p2-components-2 S8, S11; p2-current-voltage-2 S26 "the potential difference?").
  - End of lesson: the goodbye summary is sent twice; the "answered"/"told" split can contradict the transcript; a point is ticked covered after "just tell me" (both runs).
  - Layout already logged: sticky header covers page tops; the side-column diagram thumbnail is small (it enlarges on tap; the in-chat copy is full width); Key Terms panel clipped.

## Pilot (runbook v3 task A6, 2026-10-19)

Lessons:
- Physics → Electricity → Current, potential difference and resistance (p2-current-voltage): 7 key points.
- Physics → Electricity → Components — symbols, thermistors and LDRs (p2-components): 4 key points; it opens with the "Words from earlier lessons" card until the first lesson has been opened.

Screenshot folders (phone and laptop): tools/site-test-runs/2026-10-19/p2-current-voltage-2 and tools/site-test-runs/2026-10-19/p2-components-2 (first runs: p2-current-voltage, stopped by the credit error; p2-components, stopped at the card).

What to try:
- Jason: read both lessons as slides (no API key saved, or "Show me the slides instead"). Each key point is one slide: diagram, "For the exam" box, three bullets to write down, a worked example revealed with "Show the next step", and "Read the full explanation". Tap an underlined word for its meaning. Home → "Words I've learned".
- Mabel: do one of them as an AI lesson.
- Then type "Pilot: yes" or "Pilot: <what to change>", and "Mabel: <what she said>".

## Brief v3.1 rebuild, p2-current-voltage audit rejections (tools/audit-runs/8dde1a5-1.md, 2026-10-19)

- F1 (keyPoints[0], [1], [3] diagram and diagramCaption changed, "never change"): rejected. Brief v3.1 step 1a needs the picture sequence; lesson-shape-v3.md says a key point's diagram is its last picture, so the old views never show a picture ahead of the teaching (the old p2-simple-circuit showed a resistor in key point 0, pilot fault 1).
- F2 (tables[0].rows[2][1] and keyPoints[4] diode wording; TRIAGE R4 had cut forward-threshold wording): rejected. The v3.1 fact check (step c fact1) found the old wording wrong (the forward current does not rise at once). The new wording describes only the shape, "near zero at first, then rising steeply", with no threshold value, and matches the drawn graph. For the planning chat: the two fact-check runs disagree on how much of the diode curve to describe.
- F7 (lesson-level diagrams list no longer matches the key points): rejected for now. diagrams is a frozen field; the slides show a diagram from this list that no key point uses as its own extra slide at the end (p2-simple-circuit, p2-iv-resistor), after everything in them is taught. For the planning chat: whether v3.1 lessons should list their pictures here.
- F8 (heater worked example: given {Q: 60, V: 12} although the question states I and t): rejected. In lesson-shape-v3.md, given holds the values the formula is solved with; step 1 works out Q = I t, which the checker verifies.

## Brief v3.1 rebuild, p2-components audit rejection (tools/audit-runs/3ac569a-1.md, 2026-10-19)

- F12 (keyPoints[0..2] diagram and diagramCaption changed; lesson-level diagrams list not updated): rejected, as F1 and F7 for p2-current-voltage. The v3.1 shape makes each key point's diagram its last picture; old views lose the earlier pictures of a sequence. For the planning chat: whether v3.1 lessons should list their pictures in "diagrams".
- Note for the planning chat (F1): the symbols chart needs the fuse symbol (data/spec 4.2.1.1 lists it, or the old chart had it); the lesson now names only its symbol, with no function.

## Brief v3.1 site tests (task A8, 2026-10-19), not fixed

Breakage-only fix round done (P2-FIX-LOG.md). Left, as frozen tutor behaviour or existing layout:
- Sign-offs the RESPECT_EXIT patterns miss ("cheers m8 see u", "nah im logging off soz", "ok cheers ill be back later") are taken as answers (p2-current-voltage-3 T13–T19).
- Choosing "Switch to the slides" opens the slides with no chat reply; the site tester counts this as no reply (p2-components-3 S45).
- The Silver-the-cat profile popup covers the slide buttons on a phone; the sticky header covers page tops; the side-column thumbnail is small.

## Pilot v3.1 (runbook v3 task A9, 2026-10-21)

What changed since the first pilot (brief docs/briefs/2026-10-19-pilot-feedback-v3-1.md):
- Both lessons rebuilt with the v3.1 additions: pictures that build up (the circuit in three steps; beginner graphs with positive values and the origin labelled before the full graphs; the symbols chart split so each symbol comes when it is taught); one comparison per lesson (a running track); two quick readiness questions before each practical; 2 or 3 worked examples per equation with "Try another"; widgets (current and potential difference: a circuit with cells, a potential-difference slider, ammeter and lamp brightness, and an I-V graph with a point to drag; components: a thermistor and LDR circuit); after each key point a line in her own words and two mixed questions; an end quiz (7 and 6 questions); a lesson after a finished one opens with three recall questions.
- The AI tutor has the PILOT_FIX change and nothing else: at most 60 words and one question per message; her question answered first; "tell me" gives the rest one idea at a time with Next, then the "Worth writing down" card; ticks only when every sentence was taught or told; back a step after two wrong answers; words explained, each in its own bubble, before use; the lesson's own numbers and rules only; the same pieces as the slides.
- Text tester counts (A8, reported, not gating), before → after the one fix round:
  - p2-current-voltage: over 60 words 0 → 0; two questions 0 → 0; her question not answered first 0 → 1; two key points 0 → 0; answer in question 5 → 4; term before explained 5 → 3.
  - p2-components: 0 → 0; 0 → 0; 3 → 1; 0 → 0; 4 → 3; 10 → 8 (part of these are terms from p2-current-voltage, which the tester treats as opened and the judge does not see).
- Still open for the planning chat (tutor, not fixed again: one fix round only): answers in questions and terms used early are fewer but not zero; the tutor sometimes misremembers what it has already shown ("I haven't given you the numbers yet") and once marked a right answer wrong (p2-current-voltage-2026-10-21-1-bored T21, T23, T43); sign-offs such as "cheers m8 see u" are missed; "tell me" can mean several Next taps on a long key point.
- Site tests: tools/site-test-runs/2026-10-19/p2-current-voltage-3 and p2-components-3 (breakage fixed once).

What to try:
- Jason: Physics → Electricity → Current and potential difference, and Components, as slides (no API key, or "Show me the slides instead") and as an AI lesson. On the slides: the pictures in order, "Show the first step" and "Try another" under each worked example, the widgets (add a cell, slide the potential difference, drag the graph point, try the diode the wrong way round; the thermistor and LDR sliders), "Make it stick" after each key point, the quiz at the end. Finish the first lesson's quiz, then open Components: it starts with three questions on the first lesson.
- Mabel: do one of them as an AI lesson.
- Then type "Pilot: yes" or "Pilot: <what to change>", and "Mabel: <what she said>".

## Evidence layer audit (2026-10-24, tools/audit-runs/33bbc51-1.md)

- F11 rejected: "The points lie on a straight line through the origin" (p2-current-voltage keyPoints[2].content) stays. The exam's resistance-against-length question credits the straight line through the origin (tools/pilot/outcomes.md, wire practical), and the lesson says it about the measured points, as an exam answer expects. The auditor flagged it as low severity, from its own knowledge (clip contact resistance can give an intercept).
