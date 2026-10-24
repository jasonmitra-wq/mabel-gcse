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
