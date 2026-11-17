# Review: p1-national-grid (2026-11-17)

Reviewer claude-fable-5-2, effort medium, 0 screenshots, 35 findings, cost $0.5318.

## Counts (made in code from the findings)

- new: 13
- P6: 4
- F5: 3
- F3: 2
- F1: 2
- L3: 1
- M1: 1
- P14: 1
- P13: 1
- F10: 1
- F8: 1
- F7: 1
- P5: 1
- L1: 1
- F9: 1
- P16: 1

## Findings

- **1.1a** [L3, a teacher would correct it] "First, two quick questions from earlier lessons. What is power?" — The first thing she is asked assumes earlier lessons. A first-time learner has not been told what power is, so she can only guess.
- **1.1a don't know (first time)** [new, a teacher would correct it] "Which button has "each second" in it?" — The hint asks her to match words on a button, not to think about power. She can get it right and understand nothing.
- **1.1b** [F3, would confuse or mislead her] "a current flowing through a long wire warms the wire up" — 'Current' is used here and all through the lesson, but the script never says what a current is. This question also relies on an earlier lesson she has not had.
- **1.1b right answer** [F5, a teacher would correct it] "it is wasted, spread out, or dissipated, into the thermal store of the surroundings" — Two new terms, 'dissipated' and 'thermal store', arrive in one reply. 'Thermal store' is not explained at all.
- **1.2 to 1.6b** [M1, a teacher would correct it] "Button: Next" — Seven told messages in a row (1.2, 1.3, 1.4, 1.4b, 1.5, 1.6, 1.6b) with nothing for her to do but press Next. She would switch off before the first real question.
- **whole script** [P14, a teacher would correct it] "Button: Next" — There is nothing hands-on anywhere in the lesson: no circuit, no slider to raise the potential difference and watch the current and the waste change. It is all telling and multiple choice.
- **1.5** [P6, a teacher would correct it] "Power stations make electricity at about 25 000 V. Transformers raise that to as much as 400 000 V for the long cables. Near towns, more transformers lower it to 230 V for homes." — Three stages and three big numbers in one message, with no picture to hang them on. The picture does not come until 2.3.
- **1.6** [new, minor] "The cables use such a high potential difference for a reason." — The message promises a reason and then gives an equation instead. The reason does not arrive until 1.7, so she is left waiting.
- **1.6** [F3, a teacher would correct it] "I the current in amperes (A)" — Amperes appear as a unit before current or the ampere has ever been explained, in the same message as a new equation.
- **1.6b** [new, would confuse or mislead her] "For the same power, a bigger V means a smaller I." — Step 1.3 told her 'a bigger number means a bigger push' that drives the current. Now a bigger potential difference means a smaller current, and nothing reconciles the two.
- **1.6b** [P13, a teacher would correct it] "1 000 000 W at 25 000 V needs a current of 40 A, but at 400 000 V it needs only 2.5 A" — The numbers 40 A and 2.5 A appear with no working. The rearrangement I = P ÷ V is not shown until it sits in brackets in the next question, so there is no proper worked example before she is asked to calculate.
- **1.6b** [new, minor] "A power station sends out a fixed power." — This is imprecise. The point is that we compare sending the same power at two different potential differences, not that a power station's output never changes.
- **1.6c wrong answer** [new, a teacher would correct it] "Not quite: 5 A. I = P ÷ V = 2 000 000 ÷ 400 000 = 5 A." — Any wrong number is met with the full answer straight away, with no second try. A slip with the zeros gets the same reply as not understanding. The same pattern runs through every question in the script.
- **1.7** [new, a teacher would correct it] "A smaller current wastes much less energy heating the cables, so less energy is wasted overall." — The sentence goes round in a circle: it wastes less, so less is wasted. It also says 'much less' before anything has said why.
- **1.7** [F1, minor] "A current heats the cables it flows through, and that energy is wasted." — This is the same fact she was asked about in 1.1b, said again.
- **1.7b** [new, a teacher would correct it] "For Higher:" — She is not told what 'Higher' means or whether it applies to her. The next question (1.9) then tests this material on everyone.
- **1.7b** [F5, a teacher would correct it] "R is the resistance of the cable, how hard it is for the current to flow, in ohms (Ω)." — Resistance and ohms are both new, and they share a message with a new formula and the squared rule.
- **1.7b** [F10, a teacher would correct it] "the energy wasted each second in a cable is I² R" — The formula is never written as an equation with its subject and unit (power wasted, in watts). I is not named again here, and there is no worked number to show what squaring does.
- **1.9** [F8, a teacher would correct it] "Halve the current and the waste falls to a quarter." — The message just before the question (1.7b) gives the answer word for word. 1.9 then asks what happens when the current goes from 4 A to 2 A, with 'It falls to a quarter' as a button.
- **1.9 don't know (first time)** [F7, a teacher would correct it] "The waste is I² R. If I is halved, what happens to I²?" — After 'don't know' she gets a more abstract algebra question, and the buttons do not match it. An easier step would use the numbers: 4 × 4 = 16 and 2 × 2 = 4.
- **1.10 all of them** [new, minor] "Yes, your line has it: the current is smaller; and less energy is wasted heating the cables." — The reply reads as a stitched-together list. It also loses the 'so' that links smaller current to less waste, which is the whole point. The same pattern is in 2.5 and 3.14.
- **2.2** [F1, minor] "Near homes, the potential difference must be lowered to a safer 230 V." — This repeats 1.5 ('Near towns, more transformers lower it to 230 V for homes').
- **2.3** [P6, a teacher would correct it] "The long cables are called transmission cables. kV means kilovolts: 1 kV = 1000 V, so 400 kV is 400 000 V." — One message carries a picture, a new term (transmission cables) and a new unit prefix (kV). None of the listed picture labels uses kV, so the kV note has nothing to attach to.
- **2.3** [P5, a teacher would correct it] "The picture shows the chain from power station to homes, with each transformer in its place." — The whole chain appears in one picture, all at once, and only after key point 1 has described it in words. It should be built up stage by stage when each part is first met.
- **3.2b** [F5, minor] "They are called fossil fuels, because they formed from living things over millions of years. Nuclear fuel, mined from rocks, is non-renewable too." — Fossil fuels and nuclear fuel are both introduced in one message. Nothing says what nuclear fuel is beyond being mined.
- **3.3b** [L1, a teacher would correct it] "hydro-electricity, from water stored behind a dam in a river valley; geothermal energy, from hot rocks underground; and bio-fuel, made from plants that can be grown again" — Three new resources and terms in one sentence, straight after four more in 3.3.
- **3.4 "One that never runs out"** [new, would confuse or mislead her] "Close, but not quite: the key idea is that it is replenished, topped up as it is used." — She was told non-renewable means 'will run out one day', so 'never runs out' is the natural opposite. The reply does not say why it is wrong, and 3.5 then says 'the wind keeps blowing, so it is renewable'.
- **3.4 don't know (first time)** [F9, a teacher would correct it] "The exam wants one particular word that means "topped up". Which button uses it?" — This is exam-revision talk to someone meeting the idea for the first time. It is also another word-matching hint rather than help with the idea.
- **3.7** [P6, a teacher would correct it] "But they make radioactive waste, which stays dangerous for thousands of years, and they are slow to start up." — The message carries the meaning of 'reliable', three facts about nuclear and the unexplained term 'radioactive waste'. That is too many ideas for one message.
- **3.7** [new, a teacher would correct it] "A reliable resource can supply energy whenever it is needed." — The same message says nuclear is 'very reliable' and 'slow to start up'. By this definition that looks like a contradiction, and she is not helped to see the difference.
- **3.9** [P16, a teacher would correct it] "Some renewables are reliable. Hydro-electricity lets water through the dam when it is needed. The tides come in and out on a regular cycle." — Tides are predictable, not available 'whenever it is needed', so by the lesson's own definition they are not simply reliable. The lesson's key point says 'predictable'. The message also packs in three resources.
- **3.10 wrong answers** [new, minor] "gas and coal power stations can be turned up when needed" — The script never told her that gas, coal or hydro stations can be turned up on demand. The reply leans on a fact she has not been given.
- **3.12a** [P6, minor] "The reasons: worry about carbon dioxide and global warming, government targets to cut the carbon dioxide given out, renewables getting cheaper, and fossil fuels running out." — Four separate reasons are listed in one message, and none is ever asked about.
- **3.13 still doesn't know** [new, minor] "That's fine. Say what to stop and what to do instead: electric cars instead of petrol cars, charged from renewables." — This reads as an instruction for writing an answer, not the answer to a button question, so it does not fit. The hint before it ('Which button stops something?') is word-matching again.
- **3.14** [new, a teacher would correct it] "The AI checks which of these points it makes: "it gives out no carbon dioxide", "it is intermittent: not always available"." — A sensible answer such as 'it is renewable and will not run out' gets no credit. She would be told 'A good line would say…' as if she were wrong.

## Overall

No, not as it stands. The numbers and the main physics are right, but key point 1 leans on things she has never been taught: power, current and amperes come from 'earlier lessons', and resistance arrives in one line. It also tells her a bigger potential difference is a bigger push and then that it means a smaller current, with nothing to reconcile the two. The one question that should make her think (1.9) is answered in the message before it, several don't-know hints only ask her to spot a word on a button, and the lesson is long runs of Next with nothing hands-on. I would let her use it once current is explained, the P = IV example is worked step by step, the push/smaller-current conflict is dealt with, and the 'never runs out' and 'reliable' wording in key point 3 is fixed.
