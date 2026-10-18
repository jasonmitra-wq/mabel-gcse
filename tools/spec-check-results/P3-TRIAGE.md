# P3 Particle model — spec-check triage

Runbook v2 section 3. BASE = bb269b4. Step a (checkpoint keys, specRef
4.3.3.3 on p3-pressure) committed at 4515076; R1 ran on that commit.
ACCEPT = change the lesson. REJECT = no change, with an R code from the
runbook. IDs: R1a/R1b run, then category and index in that run's JSON
(tools/spec-check-results/P3-R1a/, P3-R1b/). Two findings on the same
field and text are one line.

## R1

### p3-particle-model
- p3-particle-model | R1a miss0 + R1b miss0 (density equation) | REJECT R-e | taught in p3-density: "The equation is: ρ = m / V".
- p3-particle-model | R1a miss1 (apply ρ = m/V where mass is conserved) | REJECT R-e | taught in p3-density (R1 adds worked example 4, "Same mass, bigger volume, lower density").
- p3-particle-model | R1a miss2 + R1b miss1 (required practical 5) | REJECT R-e | taught in p3-density: "There are three set-ups you need to know for the required practical".
- p3-particle-model | R1a miss3 (density differences between states) | REJECT R-e | taught in p3-density: "Gases are far less dense than liquids and solids. This is because the particles are very far apart."
- p3-particle-model | R1a miss4 + R1b miss2 (mass conserved in a change of state) | ACCEPT | home lesson for 4.3.1.2: keyPoints[2] says mass is conserved in every change of state.
- p3-particle-model | R1a miss5 + R1b miss3 (physical changes) | ACCEPT | keyPoints[2]: changes of state are physical changes; reversed, the material gets back its original properties.
- p3-particle-model | R1a abov0 (tutor_note "On the higher tier…") | ACCEPT | also breaks an EDIT RULE (no tier labels); tier sentence cut.
- p3-particle-model | R1a fact0 + R1b fact0 (freezing: "slow down") | ACCEPT | particles lose potential energy.
- p3-particle-model | R1a fact1 + R1b fact1 (condensation: "slow down") | ACCEPT | particles lose potential energy.
- p3-particle-model | R1a fact2 + R1b fact2 (table row kinetic energy low/medium/high) | ACCEPT | row cut.
- p3-particle-model | R1a fact3 + R1b fact3 (liquid density "slightly less than solid") | ACCEPT | "usually a little less than solid".
- p3-particle-model | R1b fact4 (temperature constant during any change of state) | REJECT R-b | spec 4.3.2.3: "When a change of state occurs, the energy supplied changes the energy stored (internal energy) but not the temperature."
- p3-particle-model | R1a wron0 (memTip "Sublime") | ACCEPT | "Sublimate".
- p3-particle-model | R1a wron1 + R1b wron0 ("kinetic theory model") | ACCEPT | "particle model" everywhere in the lesson (heading, content, writeBullets).
- p3-particle-model | R1a wron2 + R1b wron1 (internal energy of "all its particles") | ACCEPT | "the internal energy of a system … the atoms and molecules that make up the system".

### p3-density
- p3-density | R1a miss0 + R1b miss0 (particle diagrams of the states) | REJECT R-e | p3-particle-model keyPoints[0] has diagram p3-states-particles and "Solid: particles are packed closely together. They sit in a regular pattern called a lattice."
- p3-density | R1a miss1 + R1b miss3 (liquids in the density explanation) | ACCEPT | keyPoints[3]: liquid particles are still close together, so liquid and solid densities are similar.
- p3-density | R1b miss4 (particle model of the states themselves) | REJECT R-e | p3-particle-model keyPoints[0]: "The particle model explains why each state behaves as it does."
- p3-density | R1a miss2 + R1b miss1 (micrometer, Vernier callipers) | ACCEPT | keyPoints[2] and writeBullets[0].
- p3-density | R1a miss3 + R1b miss2 (ρ = m/V where mass is conserved) | ACCEPT | keyPoints[1] worked example 4 (change of state) and a write bullet.
- p3-density | R1a abov0 + R1b abov0 (ice: hexagonal lattice, anomalous density) | ACCEPT | ice cut everywhere in the lesson: keyPoints[0] and [3] content, writeBullets, keyTerm, memTip, tutor_note, table row, checkpoint 3, commonMistakes, revisionCardBullets.
- p3-density | R1a abov1 (key term "Hexagonal lattice") | ACCEPT | cut with the ice content.
- p3-density | R1a abov2 + R1b abov1 (osmium) | ACCEPT | cut.
- p3-density | R1a abov3 + R1b abov3 (liquid aluminium figure) | ACCEPT | cut.
- p3-density | R1a abov4 + R1b abov2 (floating and sinking) | REJECT R-c | cutting it would contradict the specification: 4.5.5.1.2 "Students should be able to describe the factors which influence floating and sinking."
- p3-density | R1a abov5 + R1b abov4 (lakes freeze from the top) | ACCEPT | cut with the ice content.
- p3-density | R1a abov6 + R1a fact0 + R1b fact0 ("Archimedes' principle") | ACCEPT | name cut from the write bullet.
- p3-density | R1a fact1 (displaced volume, commonMistakes[3]) | ACCEPT | "A fully submerged object displaces its own volume of water, not its own mass."
- p3-density | R1a fact2 (eureka can "gives you the volume directly") | ACCEPT | collect the water in a measuring cylinder, or read the rise in level.
- p3-density | R1b fact1 (intro: density "explains why the air gets thinner") | ACCEPT | sentence cut.
- p3-density | R1a chec0 (checkpoint 3 tests only the ice exception) | ACCEPT | new checkpoint 3: why a gas is much less dense than its liquid.
- p3-density | R1a chec1 (checkpoint 0 is the same calculation as 1) | ACCEPT | new checkpoint 0: what density means (same volume, twice the mass).
- p3-density | R1b chec0 (checkpoint 1 tests no rearranging or unit change) | ACCEPT | new checkpoint 1: g/cm³ to kg/m³.

### p3-changes-of-state
- p3-changes-of-state | R1a miss0 + R1b miss0 (mass conserved) | REJECT R-e | p3-particle-model (R1): "Mass is conserved in every change of state."
- p3-changes-of-state | R1a miss1 + R1b miss1 (physical changes) | REJECT R-e | p3-particle-model (R1): "Changes of state are physical changes. They differ from chemical changes."
- p3-changes-of-state | R1a miss2 + R1b miss2 + R1a wron1 + R1b wron2 (energy supplied changes internal energy, not temperature) | ACCEPT | keyPoints[0] content and a write bullet; revision bullet.
- p3-changes-of-state | R1a miss3 + R1b miss3 (experiment for latent heat of fusion of water) | REJECT R-f | spec lists it under "Key opportunities for skills development" (AT 5).
- p3-changes-of-state | R1a miss4 + R1b wron3 (cooling graphs) | ACCEPT | keyPoints[0]: cooling curve; write bullet, key term, revision bullet.
- p3-changes-of-state | R1a abov0 + R1b abov0 (freeze-drying) | ACCEPT | cut everywhere.
- p3-changes-of-state | R1a abov1 + R1b abov1 (refrigerators) | ACCEPT | cut everywhere (content, writeBullets, key term, tutor_note, intro, examTips[2], revision bullet).
- p3-changes-of-state | R1b fact1 (back of a fridge warm) | REJECT R-d | fridge content cut (R1a abov1).
- p3-changes-of-state | R1a abov2 + R1b abov2 (four-step ice-to-steam calculation) | ACCEPT | cut, with its write bullet, the "SHC of water" key term, commonMistakes[4] and the revision bullet.
- p3-changes-of-state | R1b abov3 + R1b abov4 (exothermic, endothermic) | ACCEPT | cut everywhere (key terms, content, table).
- p3-changes-of-state | R1a fact0 + R1b fact0 (steam burns "DOUBLE the energy") | ACCEPT | "much worse … THEN more energy as it cools".
- p3-changes-of-state | R1a fact1 (table: forces "weaken") | ACCEPT | particles gain enough energy to partly overcome the forces.
- p3-changes-of-state | R1a wron0 + R1b wron1 ("liquid ↔ gas" for vaporisation) | ACCEPT | "liquid ↔ vapour" in vaporisation definitions, write bullet, revision bullet, table.
- p3-changes-of-state | R1b wron0 ("Latent heat of FUSION/VAPORISATION") | ACCEPT | "Specific latent heat of …" everywhere the quantity is named (examTip, introTips, writeBullets, table, commonMistakes, revision bullets, steam-burn wording).

### p3-pressure
- p3-pressure | R1a miss0 + R1b miss2 (4.3.3.3 doing work on a gas) | ACCEPT | new keyPoints[3] "Doing work on a gas", checkpoint 3 (bicycle pump), revision bullet. Closes defect 11's last gap.
- p3-pressure | R1a miss1 + R1b miss1 (net force at right angles) | ACCEPT | keyPoints[0], write bullet, revision bullet.
- p3-pressure | R1a miss2 + R1b miss1 (compressed or expanded by pressure changes) | ACCEPT | keyPoints[2] first sentence.
- p3-pressure | R1a miss3 + R1b miss0 (constant random motion) | ACCEPT | keyPoints[0], write bullet, revision bullet.
- p3-pressure | R1a abov0 + R1b abov0 + R1b abov1 (combined gas law, p/T calculation) | ACCEPT | keyPoints[3] replaced (see miss0); table rows cut; qualitative pressure–temperature row kept.
- p3-pressure | R1a abov1 + R1b abov2 (Gay-Lussac's Law) | ACCEPT | cut.
- p3-pressure | R1a abov2 + R1b abov3 (Charles's Law) | ACCEPT | table row cut.
- p3-pressure | R1b abov4 (combined gas law table row) | ACCEPT | cut.
- p3-pressure | R1a abov3 + R1b abov5 (absolute zero, Kelvin) | ACCEPT | keyPoints[1] replaced by "Temperature and pressure at constant volume" (qualitative, spec 4.3.3.1); Kelvin cut everywhere (introTips[2], commonMistakes[0], examTips[0], revision bullets, checkpoint 1, video link). Resolves the 24 Kelvin WARNs (S2).
- p3-pressure | R1a abov4 (introTips[4] "pV/T = constant") | ACCEPT | "p₁V₁ = p₂V₂ is the equation you need."
- p3-pressure | R1a abov5 + R1b abov6 (checkpoint 3 p/T calculation) | ACCEPT | replaced by the bicycle-pump checkpoint.
- p3-pressure | R1a abov6 + R1b abov7 (checkpoint 1 Kelvin conversion) | ACCEPT | replaced by "why does heating a gas at fixed volume raise its pressure".
- p3-pressure | R1b abov8 (commonMistakes[1] "use pV/T = constant") | ACCEPT | sentence cut.
- p3-pressure | R1a fact0 + R1b fact0 + R1b fact1 + R1b fact2 (absolute zero: "stop moving", zero pressure) | ACCEPT | cut with the Kelvin key point.
- p3-pressure | R1a fact1 ("twice as often") | ACCEPT | "hit each part of the walls twice as often".
- p3-pressure | R1a fact2 (introTips[2] Kelvin "before any gas law") | ACCEPT | cut with Kelvin.
- p3-pressure | R1a wron0 + R1b wron0 ("particles" for gas molecules) | ACCEPT | "molecules" everywhere the lesson means the gas's particles (title, examTip, introTips, intro, content, writeBullets, key terms, checkpoints, commonMistakes, examTips, revision bullets).
- p3-pressure | R1a wron1 ("squashed") | ACCEPT | "compressed" everywhere.
- p3-pressure | R1b wron1 (named "Boyle's Law") | ACCEPT | name cut everywhere; the lesson says "pV = constant" (heading, writeBullets, key term, table, tutor_note, introTips, examTip, examTips, commonMistakes, checkpoint feedback, video labels).
- p3-pressure | R1b wron2 (units: Pa, m³) | ACCEPT | "pressure in pascals (Pa), volume in metres cubed (m³)"; kPa or cm³ only if both sides use the same unit.

## R2

--blocking-only --decided P3-TRIAGE.md on all four lessons (all changed in R1). Results in P3-R2/. p3-density: no findings.

- p3-particle-model | R2 fact0 (limitation "the model shows no forces between particles" contradicts the lesson's own model) | ACCEPT | "does not show the size of the forces between particles".
- p3-particle-model | R2 fact1 (same, writeBullets[4]) | ACCEPT | same wording.
- p3-particle-model | R2 fact2 (same, revisionCardBullets[11]) | ACCEPT | same wording.
- p3-particle-model | R2 fact3 (key term "Incompressible": volume "stays constant") | ACCEPT | "Virtually cannot be compressed — volume hardly changes under pressure".
- p3-changes-of-state | R2 miss0 (distinguish specific heat capacity and specific latent heat) | ACCEPT | keyPoints[1]: side-by-side lines and a write bullet.
- p3-pressure | R2 fact0 ("Billions of collisions per second") | ACCEPT | "Huge numbers of collisions every second".
- p3-pressure | R2 fact1 (intro "billions of tiny molecules") | ACCEPT | "huge numbers of tiny molecules".
