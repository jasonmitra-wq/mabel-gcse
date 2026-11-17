# P1 fix log (Phase B, brief docs/briefs/2026-11-15-script-four-topics.md)

## B2 fact check, 2026-11-17

First attempt stopped at HTTP 401 (old key). Re-run with the renewed key:
$0.5572 for seven lessons (logs in P1-B2/). Findings and what was done:

- p1-energy-stores: "heating" limited to conduction and convection (content and
  key term): now "conduction, convection or infrared radiation". "Most real
  transfers dissipate" (key term, revision bullet): now every real transfer.
  The six "missing" items (insulation, thermal conductivity, building walls,
  required practical 2, increasing efficiency, calculating energy changes) are
  taught in p1-conservation, p1-efficiency and the equation lessons, which share
  those spec sections: no change.
- p1-conservation: revision bullet called sound a store: fixed. Basics said
  conduction is only through solids: now "through a material, best in solids"
  (script 4.2 too). Required practical 2's other factors (thickness, number of
  layers as the independent variable) added to key point 4 and the script
  (new step 4.13b).
- p1-efficiency: useful output "to the store we want": now "the energy
  transferred in the way we want".
- p1-power: basics "a rate is how much happens each second" and "kicking a
  ball ... are forces" reworded (script 1.3 too).
- p1-national-grid: fuel defined as "burned": now includes nuclear fission.
  Trends now explained (carbon dioxide, targets, cheaper renewables, finite
  fossil fuels) and the three uses compared, in the lesson and the script (new
  steps 3.1b, 3.12b).
- p1-kinetic-potential, p1-heating: 0 findings.

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

## B4 script reviews, round 1 (2026-11-17)

tools/review-lesson.js --script, one each, $4.07 in all. Findings: energy-stores
41, kinetic-potential 28, conservation 45, efficiency 24, power 28, heating 30,
national-grid 46. Fixed in the scripts (walk 0 after): answers given just before
the question (F8) replaced with new cases she reasons out; one new term per
message (F5); dangling openers (F2); terms explained (charge, atom and nucleus,
force and newton, square root, theta, kV, reliable, fossil fuels); new questions
on heating, the last three stores, the Sankey widths, the dependent variable,
streamlining, I = P ÷ V and the I² R waste; worked examples for rearranging
(efficiency, power, specific heat capacity); quiz replies for each wrong option;
physics: the specific heat practical's "wait" question now asks why the block
keeps warming after switch-off; elastic limit vs limit of proportionality.
Not changed: "nothing hands-on" (no Energy widget exists; adding one is shared
widget code); the end message and the own-words reply template ("…; and …"),
which are shared teach-mode code (runbook: ask Jason first); "every wrong number
gets the answer at once" (engine behaviour).
