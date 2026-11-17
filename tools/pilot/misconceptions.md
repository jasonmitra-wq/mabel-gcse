# Electricity pilot: known misconceptions

Brief docs/briefs/2026-10-19-evidence-layer.md, step 1c. Every item comes from a
published physics-education source that was opened and read on 2026-10-24 (not
from memory). The wording below is ours. The ids (M1 to M14) are used by the
lessons' "predict first" items, the quick check, the post-test and the delayed
test, and by tools/pilot/analyse.js.

Main source: the Institute of Physics' IOPSpark misconceptions database,
Electricity and Magnetism (https://spark.iop.org/misconceptions, filtered to
Electricity and Magnetism, 31 entries). Each entry cites the research it rests on;
the main studies are named below.

## In scope for the two pilot lessons

| Id | Misconception (our words) | Where it bites | Source (opened) |
|---|---|---|---|
| M1 | A lamp only needs one wire from the cell (the cell "gives" something to the lamp); a complete loop is not needed. | Q = I t key point; closed circuit | IOPSpark, "Some students hold a 'consumer-source' model of the simple circuit": https://spark.iop.org/some-students-hold-consumer-source-model-simple-circuit (cites Arnold and Millar 1987; Osborne 1983) |
| M2 | Current is partly used up by a lamp or other component, so less comes back to the cell. Very resistant to change. | current the same everywhere in one loop | IOPSpark, "Some students have differing ideas about what is happening in the wires of an electric circuit when it is working": https://spark.iop.org/some-students-have-differing-ideas-about-what-happening-wires-electric-circuit-when-it-working (cites Küçüközer and Kocakülah 2007, 2008) |
| M3 | Current flows out of both ends of the cell and the two currents "clash" or meet in the lamp. | current round one loop | same page as M2 |
| M4 | Sequential reasoning: a change affects only the parts "after" it in the loop, or only the component that was changed. | where an ammeter or a resistor sits in the loop | IOPSpark, "Many students see circuit behaviour as a sequence of causes and effects, rather than seeing the whole circuit as an interacting system": https://spark.iop.org/many-students-see-circuit-behaviour-sequence-causes-and-effects-rather-seeing-whole-circuit |
| M5 | A cell or battery always gives the same current, whatever circuit it is in. | adding a cell; adding a resistor | IOPSpark, "Many students think that a battery supplies the same current, regardless of the circuit in which it is used": https://spark.iop.org/many-students-think-battery-supplies-same-current-regardless-circuit-which-it-used (cites Küçüközer and Kocakülah 2007) |
| M6 | A battery stores charge or current (or "electricity"), not energy, and that is what runs out. | E = Q V key point | IOPSpark, "Many students think that electric current or electric charge (or 'electricity'), rather than energy, is stored in a battery": https://spark.iop.org/many-students-think-electric-current-or-electric-charge-or-electricity-rather-energy-stored-battery (cites Dupin and Johsua 1987) |
| M7 | "Electricity" or "energy" used for everything; effects explained by energy or "electricity" instead of current. | current versus energy transferred | IOPSpark, "Many students offer explanations of electrical effects in terms of energy, rather than electric current": https://spark.iop.org/many-students-offer-explanations-electrical-effects-terms-energy-rather-electric-current and "Students often struggle to define 'electricity' precisely": https://spark.iop.org/students-often-struggle-define-electricity-precisely |
| M8 | Potential difference is a result of the current, not its cause; "voltage flows" through the circuit; charge, current and pd not told apart. | potential difference key point | IOPSpark, "Few students can clearly distinguish the ideas of electric current and potential difference": https://spark.iop.org/few-students-can-clearly-distinguish-ideas-electric-current-and-potential-difference (cites Küçüközer and Kocakülah 2007, 2008); also "Students often consider the behaviour of a circuit in terms of current and much less often in terms of potential difference": https://spark.iop.org/students-often-consider-behaviour-circuit-terms-current-and-much-less-often-terms-potential |
| M9 | Cannot say what a voltmeter measures, especially across a lamp or resistor rather than across the cell. | voltmeter across a component; 1 V = 1 J per C | IOPSpark, "Few students can say in words what the physical quantity measured by a voltmeter is": https://spark.iop.org/few-students-can-say-words-what-physical-quantity-measured-voltmeter (cites Psillos, Tiberghien and Koumaras) |
| M10 | Not sure how to connect an ammeter to measure the current at a point (it must go in the loop, in series). | ammeter key point; both practicals | IOPSpark, "Many students are unable to connect an ammeter in a circuit correctly": https://spark.iop.org/many-students-are-unable-connect-ammeter-circuit-correctly (cites McDermott and Shaffer 1992) |
| M11 | Where a component is drawn on a circuit diagram matters (top or side), so two drawings of the same loop are taken as different circuits. | circuit symbols and reading diagrams | IOPSpark, "Many students cannot identify reliably when two different circuit diagrams are/are not showing the same circuit": https://spark.iop.org/many-students-cannot-identify-reliably-when-two-different-circuit-diagrams-areare-not-showing-same (cites Millar and King 1993) |
| M12 | Because R = V / I, the resistance of an ohmic resistor depends on the pd across it and the current through it (double the pd, double the resistance). | ohmic conductor key point | Li, J. and Singh, C., "Students' difficulties with equations involving circuit elements", University of Pittsburgh, arXiv:1602.04872, https://arxiv.org/pdf/1602.04872 (25% of introductory students chose "depends on current and pd only"); Garcia, J. C. and Herrera, M. U. (2004) "Detection of students' misconceptions regarding capacitance and resistance", Proceedings of the 22nd Samahang Pisika ng Pilipinas Physics Congress, https://proceedings.spp-online.org/article/view/SPP-2004-3G-01 (about one third of respondents) |
| M13 | The resistance at a point on an I-V graph is its gradient (rather than V ÷ I at that point); matters most for the filament lamp. | filament lamp; resistance from a graph | IOPSpark, "Episode 109: Electrical characteristics" (teaching notes): https://spark.iop.org/episode-109-electrical-characteristics |
| M14 | I-V and V-I graphs mixed up (which quantity is on which axis). | reading I-V graphs | same IOPSpark page as M13 |

## Found but outside these two lessons

These came up in the same sources but belong to other lessons or to no GCSE
statement in these sections. They are not used in the quick check or the tests.

- Two resistors in parallel are thought to have a larger resistance than one;
  the pd across each parallel branch; the pd across each resistor in series;
  spotting parallel resistors drawn in an unfamiliar way; the
  voltage-resistance-current model of a series circuit. All series and parallel
  circuits: p2-series-parallel. (IOPSpark misconceptions database, Electricity and
  Magnetism.)
- Conventional current flows the opposite way to electrons. The pilot lessons do
  not teach the direction of electron flow (not in these specification sections).
  (https://spark.iop.org/many-students-are-confused-idea-conventional-current)
- "A charge" used to mean "a charged particle". The lessons say "particles that
  carry charge" and never "a charge" for a particle, so nothing to correct.
  (https://spark.iop.org/some-students-may-conflate-charge-charged-particle)
- Most students see the battery as the source of all electrical effects in a
  circuit (an entry with references but no description).
  (https://spark.iop.org/most-students-see-battery-source-electrical-effects-circuit)

## Not found

No published misconception research on thermistors or LDRs turned up in the
sources reached (IOPSpark's database has none; a search found only revision
sites). For these components the evidence is the examiner reports
(tools/pilot/outcomes.md, errors 21 and 22). A blog post of an interview study on
"resistance is current over voltage" (science-education-research.com) could not be
opened here and is not used.

## Phase B, P2 rest (series and parallel, mains, power and energy, static)

Brief docs/briefs/2026-11-15-script-four-topics.md, step B1. Sources opened on
2026-11-15; the wording is ours. These ids are outside the pilot: they are not
in the "In scope" table above, so the pilot's quick check, tests and
js/pilot/misconceptions.js are unchanged. In the scripts they are the reasons
behind the named wrong options (a tap option's branch says which, in the
script's own words). Examiner errors E29 to E44 are in
data/exam/p2-rest-outcomes.md (local).

| Id | Misconception (our words) | Lesson | Source (opened) |
|---|---|---|---|
| M15 | Two resistors in parallel have a bigger total resistance than either one alone (resistances always add). | p2-series-parallel | IOPSpark, "Many students predict incorrectly that two resistors in parallel will have a larger resistance than each resistor alone": https://spark.iop.org/many-students-predict-incorrectly-two-resistors-parallel-will-have-larger-resistance-each-resistor ; examiner report 1H-NOV20 8.4 (E30) |
| M16 | The potential difference across each branch of a parallel circuit is a share of the supply, not the whole supply pd. | p2-series-parallel | IOPSpark, "Many students do not recognise that the potential difference across each resistor in a simple parallel circuit is the potential difference across the battery": https://spark.iop.org/many-students-do-not-recognise-potential-difference-across-each-resistor-simple-parallel-circuit |
| M17 | In series, the supply pd is shared equally whatever the resistances (or not shared at all); the bigger resistor does not get the bigger share. | p2-series-parallel | IOPSpark, "Many students cannot correctly predict the potential difference across each resistor in a series circuit…": https://spark.iop.org/many-students-cannot-correctly-predict-potential-difference-across-each-resistor-series-circuit ; examiner report 1F-JUN24 2.5, 2.6 (E29) |
| M18 | Adding a resistor in series leaves the current the same (the cell gives a fixed current); current is not set by the supply pd and the whole circuit's resistance together. | p2-series-parallel | IOPSpark, "Few students use the Voltage-Resistance-Current (VRI) model of a series circuit": https://spark.iop.org/few-students-use-voltage-resistance-current-vri-model-series-circuit (with M5 above) |
| M19 | Two resistors are only "in parallel" when drawn side by side as a ladder; the same circuit drawn another way is not recognised. | p2-series-parallel | IOPSpark, "Many students cannot identify reliably from a diagram whether or not two resistors in a circuit are in parallel when they are drawn in an unfamiliar format": https://spark.iop.org/many-students-cannot-identify-reliably-diagram-whether-or-not-two-resistors-circuit-are-parallel ; examiner report 1F-JUN22 6.1 (35% saw parallel) |
| M20 | Static charging happens because positive charges (protons) move, or an object becomes positive by gaining protons. | p2-static | The Physics Classroom, "Triboelectric Charging, Help 2" (names gaining protons as a common misconception): https://www.physicsclassroom.com/minds-on/static-electricity/mission-se3-triboelectric-charging/help/qg2help ; mark schemes 1F/1H-JUN18 10.1/01.1 ("mention of positive charge moving negates both marks"); examiner report 1H-JUN24 4.1 (E39) |
| M21 | Electric (static) forces are magnetic: charged objects have poles, or a magnet attracts a charged rod. | p2-static | IOPSpark, "Some students conflate magnetic and electrostatic effects": https://spark.iop.org/some-students-conflate-magnetic-and-electrostatic-effects ; examiner report 1F-JUN22 3.3 ("discussed magnetic poles") |
| M22 | Touching a charged object gives you the opposite charge (so you are attracted), rather than the same charge. | p2-static | examiner report 1H-JUN24 4.1 and 1F-JUN24 1.1 (38% knew a person touching a negative dome becomes negative) (E39) |

## Not found (P2 rest)

No published misconception research on mains wiring (live, neutral, earth),
ac and dc, or electrical power turned up in the sources reached (IOPSpark's
Electricity and Magnetism entries, 31, list none). For these the evidence is
the examiner reports (data/exam/p2-rest-outcomes.md, errors E31 to E38):
"direct" taken to mean the current or charge flows one way (the specification
asks about the potential difference); 240 V; live and neutral colours mixed;
the danger of a live wire with the switch open put in terms of current, not
potential; power taken as proportional to pd for a lamp; E = P t with time
or power not converted.

## Phase B, P1 Energy (stores, Ek/Ep/Ee, conservation, efficiency, power, heating, resources)

Brief docs/briefs/2026-11-15-script-four-topics.md, step B1. Sources opened on
2026-11-17 (IOPSpark pages read in the browser pane; the site refuses plain
fetches); the wording is ours. Outside the pilot, as for M15–M22. Examiner
errors E45 to E66 are in data/exam/p1-outcomes.md (local).

| Id | Misconception (our words) | Lesson | Source (opened) |
|---|---|---|---|
| M23 | Energy gets used up or lost (a flat battery has "no energy left"); it is the fuel or store that runs down, while the total energy stays the same. | p1-energy-stores, p1-conservation | IOPSpark, "The Law of Conservation of Energy" (14-16): https://spark.iop.org/collections/law-conservation-energy ; IOPSpark, "Energy: common knowledge, hard concept": https://spark.iop.org/energy-common-knowledge-hard-concept ; examiner reports 1F-JUN22 9.4, 1H-JUN22 1.4 ("saving energy", "waste no energy") (E56) |
| M24 | Energy disappears when an object stops for a moment (a ball at the top of its throw has no energy); the gravitational potential store is not seen. | p1-energy-stores, p1-kinetic-potential | IOPSpark, "Students may think that energy disappears when an object is thrown upwards": https://spark.iop.org/students-may-think-energy-disappears-when-object-thrown-upwards ; examiner report 1H-JUN23 7.2 |
| M25 | A moving object "has force"; force and energy are the same thing, so it stops when its force runs out. | p1-energy-stores, p1-kinetic-potential | IOPSpark, "Is force the same as energy?": https://spark.iop.org/force-same-energy |
| M26 | Energy belongs to living things (needed for life and activity), not to a raised book or a hot cup. | p1-energy-stores | IOPSpark, "Many students associate 'energy' with humans and other living things": https://spark.iop.org/many-students-associate-energy-humans-and-other-living-things |
| M27 | Heat is a substance (or "cold" is) that flows in and out of objects; heat and temperature are the same thing. | p1-heating | IOPSpark, "Many students think of heat as an intangible substance that can flow into and out of objects": https://spark.iop.org/many-students-think-heat-intangible-substance-can-flow-and-out-objects ; IOPSpark digest of Kautz et al. (2005): https://spark.iop.org/kautz-et-al-2005-parts-1-and-2 |
| M28 | Temperature measures how much energy an object holds (a bath and a cup of its water at the same temperature hold the same energy); specific heat capacity confused with heat capacity, conductivity or insulation. | p1-heating | IOPSpark digest of Harrison et al. (1999): https://spark.iop.org/harrison-et-al-1999 ; IOPSpark, "Some students see the more obvious 'heat' of very hot objects…": https://spark.iop.org/some-students-see-more-obvious-heat-very-hot-objects-different-objects-lower-temperatures ; examiner report 1H-JUN25 5.3 (E52) |
| M29 | Power and energy are the same thing (a more powerful kettle "has more energy"), rather than power being energy transferred each second. | p1-power | IOPSpark, "Energy: common knowledge, hard concept" (power as the rate of transfer of energy, a hard term): https://spark.iop.org/energy-common-knowledge-hard-concept ; examiner reports 1F-JUN23 4.4, 1F-JUN24 10.3 (E47) |
| M30 | Renewable means "can be used again" or "never runs out"; energy resources are conserved like energy. Resources are used up; renewable ones are replenished as they are used. | p1-national-grid | IOPSpark, "Resources, stores, pathways": https://spark.iop.org/resources-stores-pathways ; examiner reports 1F-JUN25 8.1, 1H-JUN25 1.1 (E61) |

## Not found (P1)

No published misconception research on efficiency calculations turned up in
the sources reached; the evidence is the examiner reports (E55 to E57:
multiplying by 100 when a decimal is asked, "saves energy", lubrication
answered as "rotates faster"). A diagnostic worksheet on calculating energy
(stem.org.uk, BEST) was found but is a download, so not opened or used.
