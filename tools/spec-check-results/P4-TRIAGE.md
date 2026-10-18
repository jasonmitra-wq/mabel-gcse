# P4 Atomic structure — spec-check triage

Runbook v2 section 3. BASE = d994ef3. Step a (checkpoint keys; quantum
and bond WARNs in p4-nuclear-model) committed at c53f121; R1 ran on that
commit. ACCEPT = change the lesson. REJECT = no change, with an R code
from the runbook. IDs: R1a/R1b run, then category and index in that
run's JSON (tools/spec-check-results/P4-R1a/, P4-R1b/). Two findings on
the same field and text are one line.

## R1

### p4-nuclear-model
- p4-nuclear-model | R1a miss0 + R1b miss0 (atom radius about 1 × 10⁻¹⁰ m) | ACCEPT | keyPoints[2]: radius and what the standard form means; write bullet, revision bullet. The standard-form skill itself is R-f (skills box), but the radius is required content.
- p4-nuclear-model | R1a miss1 + R1b miss1 (nucleus radius less than 1/10 000 of the atom's) | ACCEPT | keyPoints[2], with "most of the mass is in the nucleus"; write bullet.
- p4-nuclear-model | R1a miss2 + R1b miss2 (isotopes) | ACCEPT | keyPoints[2]: isotopes defined, carbon-12 and carbon-14; key term, write bullet, revision bullet. Not taught in any sibling lesson.
- p4-nuclear-model | R1a miss3 + R1b miss3 (isotopes in notation) | ACCEPT | keyPoints[2]: ¹²₆C and ¹⁴₆C compared (same bottom number, different top number).
- p4-nuclear-model | R1a miss4 + R1b miss4 (positive ions) | ACCEPT | keyPoints[2]: atoms have no overall charge; an atom that loses outer electrons becomes a positive ion; key term, write bullet.
- p4-nuclear-model | R1a miss5 + R1b miss5 (tiny spheres that could not be divided) | ACCEPT | keyPoints[0] first paragraph; write bullet, revision bullet.
- p4-nuclear-model | R1a miss6 + R1b miss6 (Bohr: specific distances, calculations agreed with experiment) | ACCEPT | keyPoints[3] rewritten around Bohr's model; write bullet, revision bullet.
- p4-nuclear-model | R1a miss7 + R1b miss7 (proton from later experiments) | ACCEPT | keyPoints[3]; write bullet.
- p4-nuclear-model | R1a miss8 + R1b miss8 (Chadwick, neutrons about 20 years later) | ACCEPT | keyPoints[3]; write bullet, revision bullet.
- p4-nuclear-model | R1a abov0 + R1b abov1 (unique spectrum, specific frequency) | ACCEPT | cut everywhere (keyPoints[3] content and write bullet, introTips[4] "how they give out light").
- p4-nuclear-model | R1b abov0 (shell filling order) | ACCEPT | cut everywhere (content, write bullet, key term def).
- p4-nuclear-model | R1a abov1 + R1b abov2 (electron relative mass 1/1836) | ACCEPT | "very small" in keyPoints[2] and tables[0].
- p4-nuclear-model | R1b abov3 + R1a chec0 + R1b chec0 (checkpoint 3 on periods and shell capacities) | ACCEPT | new checkpoint 3: what happens when an electron absorbs electromagnetic radiation.
- p4-nuclear-model | R1a fact0 (small-angle deflections as the evidence for the nucleus) | ACCEPT | observation (2) is now "a few deflected through large angles" in keyPoints[1] content and write bullet, tables[1].rows[1], revisionCardBullets[3], examTip, memTip.
- p4-nuclear-model | R1b fact0 ("prediction … almost completely wrong") | ACCEPT | keyPoints[0]: most did pass straight through; the model could not explain the large deflections and bounce-backs.
- p4-nuclear-model | R1b fact1 (straight-through particles show the charge is not spread out) | ACCEPT | that conclusion moved to observation (2).
- p4-nuclear-model | R1a fact1 + R1b fact2 ("Only direct hits") | ACCEPT | particles heading almost straight at the nucleus are repelled before they reach it.
- p4-nuclear-model | R1a fact2 + R1b fact3 (heading puts electrons in the nucleus) | ACCEPT | heading "Structure of the atom — protons, neutrons and electrons".
- p4-nuclear-model | R1a fact3 + R1b fact4 (shells in Rutherford's model) | ACCEPT | keyPoints[2] says only "surrounded by electrons"; specific distances come with Bohr in keyPoints[3].
- p4-nuclear-model | R1a fact4 + R1b fact5 (tutor_note leaves out absorption; "two things") | ACCEPT | tutor_note: absorbing moves up a level, emitting moves down.
- p4-nuclear-model | R1a fact5 + R1b fact7 ("Two shells filled = Period 2") | ACCEPT | checkpoint 3 replaced (see abov3).
- p4-nuclear-model | R1b fact6 (checkpoint 1: "almost all the positive charge") | ACCEPT | "all the positive charge and most of the mass".
- p4-nuclear-model | R1a wron0 + R1b wron0 + R1b wron1 ("gold foil experiment") | ACCEPT | "alpha particle scattering experiment" everywhere the experiment is named (keyPoints[1] heading, content, key term; keyPoints[0] write bullet; tables[1].title; examTips[0]).
- p4-nuclear-model | R1b wron2 ("electron shell") | ACCEPT | "energy level" / "specific distances" everywhere (keyPoints[2], keyPoints[3], key terms, tables[0], commonMistakes[2], introTips[4], revision bullets); key term "electron shell" cut.

### p4-radioactivity
- p4-radioactivity | R1a miss0 + R1b miss0 (unstable nuclei become more stable) | ACCEPT | new opening paragraph in keyPoints[0]; write bullet; introTips[0].
- p4-radioactivity | R1a miss1 + R1b miss1 (activity, becquerel) | ACCEPT | keyPoints[0]; key term, write bullet.
- p4-radioactivity | R1a miss2 + R1b miss2 (count-rate, Geiger-Muller tube) | ACCEPT | keyPoints[0]; key term.
- p4-radioactivity | R1a miss3 + R1b miss3 (neutron as a fourth radiation) | ACCEPT | keyPoints[0] list; intro "three completely different types" changed.
- p4-radioactivity | R1a miss4 + R1b miss4 (choosing the best source) | ACCEPT | keyPoints[2]: choose by penetration, range in air and ionising power, with one example; write bullet; examTips.
- p4-radioactivity | R1a miss5 + R1b miss5 (fallout, nuclear accidents) | ACCEPT | keyPoints[3] man-made sources; write bullet, revision bullet.
- p4-radioactivity | R1a miss6 + R1b miss6 (occupation and location) | ACCEPT | keyPoints[3]; write bullet.
- p4-radioactivity | R1a miss7 + R1b miss7 (dose in sieverts, 1000 mSv = 1 Sv) | ACCEPT | keyPoints[3]; key term.
- p4-radioactivity | R1a abov0 + R1a abov1 + R1b abov0 + R1b abov1 (neutrino) | ACCEPT | cut from keyPoints[1] content and writeBullets[0].
- p4-radioactivity | R1a abov2 + R1b abov2 (polonium-218 named) | ACCEPT | checkpoint 3 correctFeedback: mass number 218, no element named.
- p4-radioactivity | R1a abov3 + R1b abov3 (85 % / 15 %, potassium-40) | ACCEPT | cut.
- p4-radioactivity | R1a abov4 + R1b abov4 (excited nuclear state) | ACCEPT | cut from keyPoints[2] content and writeBullets[4].
- p4-radioactivity | R1a fact0 + R1b fact0 (gamma range "Effectively infinite") | ACCEPT | "Very long (many metres or more)".
- p4-radioactivity | R1a fact1 ("beyond X-rays") | ACCEPT | "It comes from the nucleus" (spec wording).
- p4-radioactivity | R1a fact2 (radiotherapy as background) | ACCEPT | man-made sources: medical X-rays, fallout, nuclear accidents.
- p4-radioactivity | R1b fact1 (introTips[4] natural sources only) | ACCEPT | "natural and man-made sources".
- p4-radioactivity | R1a wron0 + R1a wron1 + R1b wron0 ("artificial sources") | ACCEPT | "man-made" everywhere (content, key term def).
- p4-radioactivity | R1a wron2 + R1b wron1 (Z and A in tables[0]) | ACCEPT | "atomic number" and "mass number" in rows[7].

### p4-half-life
- p4-half-life | R1a miss0 + R1b miss3 + R1b chec0 (irradiated object does not become radioactive) | ACCEPT | keyPoints[3] content, write bullet, key term def, revision bullet; checkpoint 3's distractor is now answerable from the key point.
- p4-half-life | R1a miss1 + R1b miss2 (contamination on other materials; hazard from the decay of its atoms) | ACCEPT | keyPoints[3] definition; key term def; introTips[3].
- p4-half-life | R1a miss2 + R1b miss4 (studies published and peer reviewed) | ACCEPT | keyPoints[3] last paragraph; write bullet.
- p4-half-life | R1a miss3 + R1b miss5 (hazard depends on half-life) | ACCEPT | keyPoints[3] paragraph; write bullet, revision bullet.
- p4-half-life | R1a miss4 + R1b miss7 + R1b miss8 (evaluate the medical uses and perceived risk) | ACCEPT | keyPoints[2] rewritten around the two medical uses with benefit and risk; perceived versus real risk; write bullet, examTips.
- p4-half-life | R1a miss5 + R1b miss0 + R1a wron2 + R1b wron1 (count rate in the definition) | ACCEPT | keyPoints[0] definition, write bullet, key term, introTips[1], revision bullet; decay graph axis "activity or count rate".
- p4-half-life | R1b miss1 (net decline as a ratio) | ACCEPT | keyPoints[0]: after 2 half-lives the activity is 1/4 of the start, a net decline of 3/4; write bullet. No tier label.
- p4-half-life | R1a miss6 + R1b miss6 (standard form data) | REJECT R-f | spec 4.4.3.2 "Key opportunities for skills development … Students should be able to use data presented in standard form."
- p4-half-life | R1a abov0 + R1a abov3 + R1b abov0 (carbon dating) | ACCEPT | cut everywhere (content, write bullet, key term, table row, revision bullet, intro).
- p4-half-life | R1a abov1 + R1b abov1 (smoke detectors) | ACCEPT | cut everywhere (content, write bullet, table row, memTip, revision bullet, introTips[4]).
- p4-half-life | R1a abov2 + R1b abov2 (thickness gauges) | ACCEPT | cut from introTips[4].
- p4-half-life | R1b abov3 + R1b abov4 (named isotopes: technetium-99m, cobalt-60) | ACCEPT | cut everywhere (content, write bullet, key term, table column, revision bullet).
- p4-half-life | R1b abov5 (radiation sickness) | ACCEPT | cut.
- p4-half-life | R1a fact0 + R1b fact0 ("since the Big Bang") | ACCEPT | intro: "decay so slowly that they will carry on for billions of years".
- p4-half-life | R1a fact1 + R1b fact1 (activity "never" reaches zero) | ACCEPT | commonMistakes[1]: it halves each half-life; the smooth curve on the graph never touches zero.
- p4-half-life | R1a fact2 + R1b fact2 (memTip "stops with distance") | ACCEPT | "stops when the source is removed or shielded".
- p4-half-life | R1b fact3 (checkpoint 3 "or you move away") | ACCEPT | correctFeedback and wrongFeedback: removed or shielded.
- p4-half-life | R1a fact3 + R1b fact4 (smoke "breaks the current") | REJECT R-d | smoke detectors cut (R1a abov1).
- p4-half-life | R1b fact5 (carbon-14 taken in from CO₂) | REJECT R-d | carbon dating cut (R1a abov0).
- p4-half-life | R1b wron0 ("Some elements are so unstable") | ACCEPT | "Some radioactive isotopes".
- p4-half-life | R1a wron0 + R1a wron1 + R1b wron2 + R1b wron3 (tracers, radiotherapy) | ACCEPT | keyPoints[2] names the two uses in the spec's words: "exploring internal organs" and "controlling or destroying unwanted tissue".

### p4-nuclear-fission
- p4-nuclear-fission | R1a miss0 + R1b miss2 + R1b fact0 (spontaneous fission is rare; neutron absorption usual) | ACCEPT | keyPoints[0] content; key term def.
- p4-nuclear-fission | R1a miss1 + R1b miss0 (roughly equal in size) | ACCEPT | keyPoints[0]; write bullet.
- p4-nuclear-fission | R1a miss2 + R1b miss1 + R1a fact5 (all fission products have kinetic energy) | ACCEPT | keyPoints[0] content and write bullet; key term "fission products".
- p4-nuclear-fission | R1a miss3 + R1b miss3 (fission and chain-reaction diagrams) | ACCEPT | diagrams drawn in step f2 (runbook: before the topic's AI lessons go live).
- p4-nuclear-fission | R1a miss4 + R1b miss4 (fusion: some mass converted into the energy of radiation) | ACCEPT | keyPoints[2] content; write bullet.
- p4-nuclear-fission | R1a abov0 + R1a abov1 + R1b abov0 + R1b abov1 (MeV and eV figures) | ACCEPT | cut everywhere (content, write bullet, table row, introTips[0]).
- p4-nuclear-fission | R1a abov2 + R1a abov3 + R1b abov3 (control rods, moderator) | ACCEPT | cut everywhere (content, write bullets, key terms, memTip, commonMistakes[1], examTips[1], revision bullets); checkpoint 1 now tests controlled versus uncontrolled chain reactions.
- p4-nuclear-fission | R1a abov4 + R1b abov2 (deuterium–tritium reaction) | ACCEPT | cut everywhere (content, write bullet, key term, table rows, revision bullet, examTip).
- p4-nuclear-fission | R1a abov5 + R1b abov4 (fusion temperature, electrostatic repulsion) | ACCEPT | cut everywhere (content, write bullets, key term, tutor_note, examTips[3], revision bullet, table row); checkpoint 2 now tests what fusion is.
- p4-nuclear-fission | R1a abov6 (Sun's core conditions) | ACCEPT | cut; "fusion is the energy source of stars" kept.
- p4-nuclear-fission | R1a abov7 + R1b abov5 (E = mc²) | ACCEPT | cut everywhere (keyPoints[3], key term, write bullet, revision bullet, intro).
- p4-nuclear-fission | R1a abov8 + R1b abov6 (nuclear power evaluation) | ACCEPT | keyPoints[3] now "Comparing fission and fusion" at specification level; evaluation cut (table rows, introTips[4], commonMistakes[4], examTips[2]); checkpoint 3 now compares the two processes.
- p4-nuclear-fission | R1b abov7 ("fissile", slow neutron) | ACCEPT | key term def; checkpoint 0 "absorbing a neutron".
- p4-nuclear-fission | R1a fact0 ("exactly one more fission") | ACCEPT | "on average, one neutron from each fission".
- p4-nuclear-fission | R1a fact1 + R1a fact2 + R1b fact1 + R1b fact2 (tritium not plentiful) | REJECT R-d | deuterium, tritium and the fuel claims cut (R1a abov4, abov8).
- p4-nuclear-fission | R1a fact3 (fusion waste "Short-lived or none") | REJECT R-d | table row cut with the evaluation (R1a abov8).
- p4-nuclear-fission | R1a fact4 (waste used for weapons) | REJECT R-d | cut with the evaluation (R1a abov8).
- p4-nuclear-fission | R1b fact3 (helium radioactivity) | REJECT R-d | commonMistakes[2] cut with the evaluation (R1a abov8).
- p4-nuclear-fission | R1a wron0 + R1b wron0 ("two small nuclei combine to form a larger nucleus") | ACCEPT | "two light nuclei join to form a heavier nucleus" everywhere.
- p4-nuclear-fission | R1a wron1 + R1b wron1 ("fission fragments") | ACCEPT | "two smaller nuclei"; "fission products" for everything the fission makes; key term.
- p4-nuclear-fission | R1a wron2 ("gamma radiation") | ACCEPT | "gamma rays".
