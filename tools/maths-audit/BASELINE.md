# Maths audit — baseline (2026-11-26)

Step 1 of the maths full audit (brief 2026-11-26). This measures; it fixes nothing. The fixes come topic by topic (M1–M6) in later prompts, planned from this.

Sources: `node tools/maths-lesson-check.js` (mechanical, free, writes mechanical.json); `node tools/spec-check.js --subject maths --run` (model, claude-opus-5-5, results in tools/spec-check-results/); `node tools/maths-tag-check.js --run` (bank tagging, tagging.json). Regenerate this file with `node tools/maths-audit-baseline.js`.

Lessons: 41 (TEMPLATE.json skipped: placeholder text, no subtopic). Model results for 41 of 41. Lessons opened to her: 0 of 41 (MATHS_LESSON_GATE on, MATHS_LESSONS_CHECKED empty).

## Key

Mechanical (recomputed in code, tools/maths-lesson-fns.js and tools/lib-maths-expr.js):
- **WE** worked-example value that does not match the recomputed one
- **FM** "Watch out for this" item that is not a mistake (the "mistaken" method reaches the correct answer, or the item says it is correct); counted once per item
- **CW** correction states a wrong answer; **CL** the text says the mistake gives a value the mistaken method does not give
- **CH** an "=", "≈" or later-link chain whose two sides differ; **NE** "≠" between equal values; **AR** "→" chain of equations whose roots differ

Model (claude-opus-5-5 given only the lesson JSON and its spec sections): **ME** maths_errors, **MFM** false_mistakes, **MS** missing_spec_content, **AG** above_gcse, **CN** cases_not_modelled, **DN** density. These are the model's claims from one run each, not yet triaged: some will be wrong or duplicate the mechanical findings. Triage belongs to the per-topic fix prompts.

Density (counted, free): **→** lines with more than one "→"; **|** formula field joined by " | " (rendered one per line since 2026-11-26, maths.js v7); **60w** slides over 60 words (keyFacts counted apart); **20w** sentences over 20 words.

Score for the worst-10 = mechanical maths faults (WE + CW + CL + CH + NE + AR) + model maths_errors + false mistakes (the larger of FM and MFM, so one item is not counted twice).

## Per lesson

| Lesson | WE | FM | CW | CL | CH | NE | AR | ME | MFM | MS | AG | CN | DN | → | \| | 60w | 20w |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| num-bounds | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 5 | 0 | 9 | 4 | 0 | 1 | 4 | 9 |
| num-fractions | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 9 | 0 | 11 | 7 | 0 | 1 | 4 | 7 |
| num-integers | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 9 | 0 | 11 | 6 | 0 | 0 | 3 | 4 |
| num-percentages | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 6 | 0 | 8 | 5 | 0 | 0 | 4 | 8 |
| num-powers-roots | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 7 | 0 | 7 | 5 | 0 | 1 | 4 | 5 |
| num-ratio | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 7 | 0 | 9 | 4 | 0 | 0 | 4 | 10 |
| num-standard-form | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 4 | 0 | 3 | 0 | 8 | 6 | 2 | 0 | 4 | 8 |
| alg-equations | 0 | 2 | 0 | 0 | 0 | 1 | 0 | 6 | 2 | 4 | 0 | 7 | 8 | 2 | 0 | 3 | 8 |
| alg-expressions | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 0 | 14 | 8 | 0 | 1 | 4 | 13 |
| alg-functions | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 2 | 0 | 7 | 5 | 0 | 0 | 4 | 9 |
| alg-graphs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 5 | 1 | 14 | 4 | 0 | 0 | 4 | 13 |
| alg-inequalities | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 5 | 0 | 10 | 5 | 2 | 0 | 4 | 11 |
| alg-quadratics | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 10 | 0 | 9 | 6 | 3 | 0 | 4 | 11 |
| alg-sequences | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 7 | 1 | 10 | 8 | 1 | 0 | 4 | 9 |
| alg-simultaneous | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 3 | 1 | 4 | 0 | 8 | 7 | 0 | 0 | 3 | 8 |
| rpr-compound-measures | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 5 | 0 | 7 | 5 | 0 | 1 | 4 | 7 |
| rpr-growth-decay | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 2 | 0 | 6 | 6 | 1 | 0 | 4 | 10 |
| rpr-percentage-change | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 8 | 0 | 10 | 9 | 0 | 1 | 4 | 10 |
| rpr-proportion | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 4 | 0 | 8 | 5 | 0 | 1 | 4 | 10 |
| rpr-ratio | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 5 | 0 | 8 | 6 | 0 | 1 | 4 | 10 |
| rpr-speed | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 7 | 0 | 9 | 6 | 0 | 1 | 4 | 10 |
| geo-angles | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 9 | 0 | 11 | 6 | 0 | 1 | 4 | 6 |
| geo-circles | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 9 | 0 | 17 | 7 | 0 | 1 | 4 | 9 |
| geo-perimeter-area | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 8 | 0 | 13 | 5 | 0 | 1 | 4 | 9 |
| geo-pythagoras | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 3 | 0 | 7 | 3 | 0 | 0 | 4 | 10 |
| geo-shapes | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 10 | 0 | 8 | 6 | 0 | 1 | 4 | 6 |
| geo-transformations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 4 | 0 | 9 | 6 | 0 | 1 | 4 | 6 |
| geo-trigonometry | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 3 | 1 | 6 | 3 | 0 | 1 | 4 | 6 |
| geo-vectors | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 3 | 1 | 7 | 4 | 0 | 1 | 4 | 13 |
| geo-volume | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 5 | 0 | 11 | 4 | 0 | 1 | 4 | 8 |
| prob-basic | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 4 | 0 | 6 | 5 | 0 | 1 | 4 | 10 |
| prob-combined | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 5 | 1 | 9 | 5 | 0 | 1 | 4 | 9 |
| prob-conditional | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 5 | 1 | 6 | 5 | 0 | 1 | 4 | 11 |
| prob-tree | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 3 | 0 | 6 | 5 | 0 | 1 | 4 | 12 |
| prob-venn | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 3 | 1 | 10 | 5 | 0 | 1 | 4 | 8 |
| stat-averages | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 6 | 0 | 7 | 6 | 0 | 1 | 4 | 8 |
| stat-boxplots | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 3 | 2 | 6 | 5 | 0 | 1 | 4 | 16 |
| stat-charts | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 8 | 0 | 13 | 7 | 0 | 1 | 4 | 4 |
| stat-cumulative | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 5 | 0 | 6 | 5 | 0 | 1 | 4 | 11 |
| stat-sampling | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 3 | 0 | 6 | 4 | 0 | 1 | 4 | 11 |
| stat-scatter | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 4 | 2 | 7 | 4 | 0 | 1 | 4 | 14 |

## Per topic

| Topic | Lessons | Mech. maths faults | FM items | ME | MFM | MS | AG | CN | DN | → | \| | 60w | 20w |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| M1 Number | 7 | 1 | 1 | 12 | 1 | 46 | 0 | 63 | 37 | 2 | 3 | 27 | 51 |
| M2 Algebra | 8 | 1 | 4 | 15 | 6 | 47 | 2 | 79 | 51 | 8 | 1 | 30 | 82 |
| M3 Ratio, Proportion & Rates of Change | 6 | 0 | 2 | 14 | 2 | 31 | 0 | 48 | 37 | 1 | 5 | 24 | 57 |
| M4 Geometry & Measures | 9 | 1 | 0 | 16 | 2 | 54 | 2 | 89 | 44 | 0 | 8 | 36 | 73 |
| M5 Probability | 5 | 1 | 1 | 6 | 1 | 20 | 3 | 37 | 25 | 0 | 5 | 20 | 50 |
| M6 Statistics | 6 | 1 | 0 | 18 | 1 | 29 | 4 | 45 | 31 | 0 | 6 | 24 | 64 |
| **All** | 41 | 5 | 8 | 81 | 13 | 227 | 11 | 361 | 225 | 11 | 28 | 161 | 377 |

## Worst 10 (maths errors plus false mistakes)

| # | Lesson | Score | Mechanical maths | FM | ME | MFM |
|---|---|---|---|---|---|---|
| 1 | alg-equations | 9 | 1 | 2 | 6 | 2 |
| 2 | geo-trigonometry | 6 | 1 | 0 | 4 | 1 |
| 3 | num-standard-form | 5 | 1 | 0 | 4 | 0 |
| 4 | rpr-speed | 5 | 0 | 1 | 4 | 1 |
| 5 | stat-charts | 5 | 0 | 0 | 5 | 0 |
| 6 | stat-cumulative | 5 | 1 | 0 | 4 | 0 |
| 7 | alg-simultaneous | 4 | 0 | 1 | 3 | 1 |
| 8 | alg-graphs | 3 | 0 | 0 | 2 | 1 |
| 9 | geo-circles | 3 | 0 | 0 | 2 | 1 |
| 10 | rpr-compound-measures | 3 | 0 | 0 | 3 | 0 |

## Mechanical faults, item by item

**alg-equations**
- FALSE_MISTAKE — commonMistakes.mistakes[0]: the mistaken method gives 5, which is the correct answer (dividing every term by 3 first: x + 7/3 = 22/3, so x = 15/3 = 5)
- FALSE_MISTAKE — commonMistakes.mistakes[1]: the item's own text says it is correct: "actually correct"
- FALSE_MISTAKE — commonMistakes.mistakes[1]: the mistaken method gives 4, which is the correct answer (subtracting 3 from both sides is a legal move; 5x − 6 = 2x + 6 still gives x = 4)
- NE_EQUAL — slides[3].mistakes[1].mistake: 5(4)−3=17 ≠ 2(4)+9=17
- read (not a recompute): mistakes[1].mistake prints "5(4)−3=17 ≠ 2(4)+9=17" (17 ≠ 17).

**alg-sequences**
- FALSE_MISTAKE — commonMistakes.mistakes[2]: the mistaken method gives "not a term", which is the correct answer (listing 2, 7, …, 47, 52 shows 48 is skipped: the listing method reaches the right answer (slower, not wrong))
- read (not a recompute): mistakes[2] calls listing terms a mistake; listing reaches the same answer (48 is not a term). It is slower, not wrong.

**alg-simultaneous**
- FALSE_MISTAKE — commonMistakes.mistakes[2]: the mistaken method gives 1, which is the correct answer (a correctly multiplied equation has the same solutions: substituting into it gives the same value (here x = 3 gives y = 1 both ways))
- read (not a recompute): mistakes[2] says substituting into the multiplied equation introduces "a factor-of-2 error". A correctly multiplied equation has the same solutions, so substituting into it gives the right answer; the error only comes from a wrongly multiplied one (item 2).

**geo-trigonometry**
- WE_MISMATCH — workedExample.conclusion: 15 sin 38°: computed 9.23, lesson states 9.24

**num-integers**
- read (not a recompute): mistakes[0].mistake says the student "rounds up the 8, giving 3.86"; rounding up the 8 would give 3.9. The digit rounded up to reach 3.86 is the 5.

**num-ratio**
- FALSE_MISTAKE — commonMistakes.mistakes[2]: the item's own text says it is correct: "same answer here"
- FALSE_MISTAKE — commonMistakes.mistakes[2]: the mistaken method gives 240, which is the correct answer (adding 40 g per extra serving is the unitary method (40 g per serving), which works for any number of servings, whole or not)
- read (not a recompute): mistakes[2] says the additive route "fails for non-integer scaling". Adding 40 g per serving is the unitary method; it gives the right answer for any number of servings.

**num-standard-form**
- CHAIN_MISMATCH — slides[2].conclusion: 6.35 × 10⁶ ÷ 2.5 × 10³ = 2.54 × 10³

**prob-basic**
- FALSE_MISTAKE — commonMistakes.mistakes[2]: the mistaken method gives 0.4, which is the correct answer (4/10 and 2/5 are the same probability; an unsimplified fraction is not wrong unless the question asks for the simplest form)
- CHAIN_MISMATCH — slides[3].mistakes[2].correction: 4/10 ÷ 2 = 2/5
- read (not a recompute): mistakes[2] calls an unsimplified fraction (4/10) a mistake. It is the same value as 2/5; mark schemes accept equivalent fractions unless the question asks for simplest form.

**rpr-proportion**
- FALSE_MISTAKE — commonMistakes.mistakes[2]: the mistaken method gives 21, which is the correct answer (for y = kx, adding 3 × k to y(4) gives y(7) exactly: the additive method with the right "value" (k) is correct)
- read (not a recompute): mistakes[2] calls an additive method a mistake for direct proportion. For y = kx, adding 3k when x goes from 4 to 7 gives the right y; "some value" is not defined, so the item does not show a real error.

**rpr-speed**
- FALSE_MISTAKE — commonMistakes.mistakes[1]: the mistaken method gives 25, which is the correct answer (mean of the two speeds: both legs take 2 h, so it gives the right answer here)
- read (not a recompute): mistakes[1]: the example chosen makes the "wrong" method give the right answer (25 km/h both ways, because both legs take 2 hours).

**stat-cumulative**
- WE_MISMATCH — workedExample.conclusion: median by straight-line reading: computed 24, lesson states 26

## Model maths errors and false mistakes, item by item

**alg-equations**
- ME slides[0].body: "Linear equations (no x² or higher) always have exactly one solution." → This is false. 2x + 1 = 2x + 3 has no solution. 2(x + 1) = 2x + 2 is true for every x. A linear equation has exactly one solution only when the x terms do not cancel out.
- ME slides[3].mistakes[0].mistake: "This leaves a fraction on the left and gives the wrong answer." → Dividing first gives the right answer. From x + 7/3 = 22/3, take 7/3 from both sides: x = 22/3 − 7/3 = 15/3 = 5. This is the same as the lesson's answer.
- ME slides[3].mistakes[0].correction: "Always deal with addition and subtraction first (remove constants from the x side), then divide." → 'Always' is too strong. Dividing first is valid and is sometimes the neatest route. For 3(x + 2) = 12, dividing by 3 gives x + 2 = 4, so x = 2. Taking away constants first is a sensible habit, not a r
- ME slides[3].mistakes[1].mistake: "Check: 5(4)−3=17 ≠ 2(4)+9=17" → Both sides equal 17, so the '≠' sign is wrong. It should read 5(4) − 3 = 17 = 2(4) + 9.
- ME keyFacts[0].examTip: "adding, subtracting, multiplying or dividing both sides by the same value." → Multiplying or dividing both sides must use a non-zero value. Dividing by zero is undefined. Multiplying both sides by zero turns any equation into 0 = 0, so the equation is lost.
- ME keyFacts[1].examTip: "Undo operations in reverse order: addition/subtraction first, multiplication/division last." → This is not true for every equation. It only describes equations like 3x + 7 = 22, where x was multiplied first and then had something added. For (x + 7)/3 = 5 the reverse order is to multiply by 3 fi
- MFM slides[3].mistakes[0].mistake: Dividing every term on both sides by 3 is a legal step that keeps the balance. It gives fractions to work with, but it does not give a wrong answer. (gives: x = 22/3 − 7/3 = 15/3 = 5, which is correct.)
- MFM slides[3].mistakes[1].mistake: Subtracting 3 from both sides is a legal step, so the method is not flawed. It just does not remove the constant from the left side. The item itself admits the answer is correct. (gives: 5x − 6 = 2x + 6, so 3x = 12 and x = 4, which is correct.)

**alg-functions**
- ME slides[3].mistakes[2].correction: "Skipping the swap gives you f(x) back, not its inverse." → Rearranging y = f(x) to make x the subject does not give f(x) back. It gives the inverse rule written in terms of y. For f(x) = 2x + 5 it gives x = (y − 5)/2, which is f⁻¹. Renaming y as x then gives 
- MFM slides[3].mistakes[2].mistake: Rearranging y = f(x) for x is a standard, valid way to find an inverse. The 'rearranged version' is the inverse rule, only with y as the input letter. The only extra step needed is to rename the variable at the end; the  (gives: For f(x) = 2x + 5: y = 2x + 5 gives x = (y − 5)/2. Writing x for the input gives)

**alg-graphs**
- ME slides[0].body: "Every straight-line graph has an equation of the form y = mx + c, where every point on the line satisfies the equation." → Not every straight line can be written as y = mx + c. Vertical lines have equations of the form x = k and cannot be written as y = mx + c. The lesson itself says this in slides[3].mistakes[2].correcti
- ME keyFacts[0].fact: "Read them directly from the equation without rearranging." → This is only true when the equation is already in the form y = mx + c. Otherwise you must rearrange first. The examTip in the same entry says so: 'For 3y = 6x + 9, divide everything by 3'. The same ap
- MFM slides[3].mistakes[2].mistake: For a vertical line, writing the equation as 'x = …' is exactly right. The item's own correction says a vertical line 'is always of the form x = k', which is x = my + c with m = 0. More generally, x = my + c (for example (gives: For a vertical line it gives the correct equation x = k. For other lines it give)

**alg-inequalities**
- ME slides[3].mistakes[1].correction: "If you prefer, keep x positive throughout by rearranging first." → It is the coefficient of x that must stay positive, not x itself. In this example the answer is x < −4, so x is negative. Reword as: "keep the number in front of x positive by rearranging first".

**alg-quadratics**
- ME slides[1].formulaExplained: "When it does factorise, find two numbers that multiply to ac and add to b, then write the two brackets." → This only works directly when a = 1, where ac = c and the brackets are (x + p)(x + q). When a ≠ 1 the two numbers cannot just be placed in brackets. Example: 2x² + 7x + 3 has ac = 6, so the numbers ar
- ME keyFacts[3].fact: "Always check solutions by substituting back into the original equation. Both values must make the equation equal zero." → A repeated root has only one value to check. Formula answers rounded to decimal places give only approximately zero when substituted back, not exactly zero. Example: x² + 4x + 1 = 0 gives x ≈ −0.27 or

**alg-sequences**
- MFM slides[3].mistakes[2].mistake: Listing terms is a valid method and reaches the correct conclusion. The sequence 5n − 3 goes 2, 7, 12, …, 47, 52. It passes 48 without hitting it, so 48 is not a term. Listing is slower, but it is not a mistake. The clai (gives: Listing gives …, 42, 47, 52. It jumps from 47 to 52, so 48 is not a term. This i)

**alg-simultaneous**
- ME slides[1].body: "Elimination removes one variable by making its coefficient equal in both equations, then adding or subtracting. If the matching coefficients have the same sign," → Coefficients that are equal cannot have opposite signs, so the rule contradicts itself. Say: make the size of one variable's coefficient the same in both equations, ignoring sign. For example, +2y and
- ME keyFacts[0].fact: "Elimination: make the coefficient of one variable equal in both equations (multiply if needed), then subtract (same signs) or add (opposite signs) to remove it." → This has the same contradiction. It should say 'make the size of the coefficient of one variable the same in both equations (ignoring sign)'.
- ME keyFacts[2].fact: "After finding one variable, always substitute back into an original equation (not a modified version) to find the second." → A correctly multiplied equation is equivalent to the original, so substituting into it gives the same answer. For example, 4x − 2y = 10 and 2x − y = 5 give the same x for any y. Using an original equa
- MFM slides[3].mistakes[2].mistake: Multiplying every term of an equation by 2 gives an equivalent equation with exactly the same solutions. Substituting into it cannot introduce a factor-of-2 error, provided the multiplication itself was done correctly. (gives: The correct value. For example, with y = 3: 4x − 2(3) = 10 gives x = 4, and the )

**geo-angles**
- ME slides[1].formulaExplained: "co-interior angles (same side of the transversal, making a C-shape) add to 180°" → Being on the same side of the transversal is not enough. Corresponding angles are also on the same side, and they are equal, not supplementary. Co-interior angles are on the same side of the transvers
- ME slides[1].formulaExplained: "alternate angles (opposite sides of the transversal, making a Z-shape) are equal" → Being on opposite sides of the transversal is not enough. Many pairs of angles on opposite sides are not equal: one acute and one obtuse angle at different crossings add to 180°. Alternate angles are 

**geo-circles**
- ME slides[3].mistakes[0].mistake: "Doubling the circumference angle to get the centre angle instead of halving the centre angle — getting 224° instead of 56°." → Doubling the circumference angle (56°) gives 56° × 2 = 112°, which is the correct centre angle, not 224°. The answer 224° comes from doubling the centre angle (112° × 2 = 224°). The mistake should rea
- ME slides[1].formulaExplained: "Two angles in the same segment (same side of a chord) are equal." → Being on the same side of a chord is not enough. The angles must be subtended by that chord: their arms must go to the two ends of the chord. Correct version: 'Angles subtended by the same chord (or a
- MFM slides[3].mistakes[0].mistake: As worded, the 'mistake' is a valid method. Doubling the circumference angle is exactly how you find the centre angle (centre = 2 × circumference). The error that actually produces 224° is doubling the centre angle. (gives: 56° × 2 = 112°, the correct angle AOB.)

**geo-perimeter-area**
- ME keyFacts[0].examTip: "This formula is given on the formula sheet — but you must correctly identify which sides are parallel and which measurement is the perpendicular height." → The trapezium area formula is not given on the AQA 8300 formulae sheet. G16 says students must 'know and apply' it, so it has to be learned. The tip should read: 'You must learn this formula. It is no

**geo-pythagoras**
- ME slides[3].mistakes[0].mistake: "Squaring the hypotenuse instead of finding its square root — writing c = 169 instead of c = √169 = 13." → Writing c = 169 does not square the hypotenuse. It leaves the answer as c² and misses the final square-root step. Reword to: "Forgetting to take the square root — writing c = 169 (which is c²) instead

**geo-shapes**
- ME keyFacts[2].fact: "A rhombus has 4 equal sides but angles are not 90°." → A rhombus is any quadrilateral with 4 equal sides. Its angles need not be 90°, but they can be: a square is a special rhombus. Say instead: 'A rhombus has 4 equal sides; its angles do not have to be 9
- ME slides[3].mistakes[0].correction: "That's the check — if n = 3 gives 180°, your formula is right." → Checking one value does not prove a formula is right. For example, n × 60° also gives 180° when n = 3, and it is wrong for n = 4 (240° instead of 360°). Say: 'Check with a triangle (180°) and a quadri

**geo-transformations**
- ME keyFacts[2].fact: "For an enlargement, scale factor = image length ÷ object length." → Dividing lengths only gives the size of the scale factor, which is always positive. The same lesson teaches negative scale factors in keyFacts[2].examTip. The fact should say: 'image length ÷ object l
- ME slides[1].formulaExplained: "For enlargement, image distance from centre = scale factor × object distance from centre." → A distance cannot be negative, so this rule fails for a negative scale factor. State it for positive scale factors, or say: 'image distance = size of scale factor × object distance, measured in the op

**geo-trigonometry**
- ME slides[2].steps[2].working: "sin 38° ≈ 0.6157. O = 15 × 0.6157 ≈ 9.24" → sin 38° = 0.615661… so O = 15 × 0.615661… = 9.2349… = 9.23 cm (3 s.f.). The answer 9.24 comes from rounding sin 38° to 0.6157 before multiplying. Keep the full calculator value until the final step. T
- ME slides[3].mistakes[2].correction: "In radians, sin 38 gives approximately 0.2955 (not 0.6157)." → sin(38 radians) ≈ 0.2964. 38 − 12π ≈ 0.3009, and sin 0.3009 ≈ 0.2964. The value 0.2955 is sin(0.3), not sin 38.
- ME keyFacts[1].examTip: "Don't divide H by sin θ — that's the inverse formula for finding H, not O." → H ÷ sin θ is not the formula for finding H. From sin θ = O ÷ H, the hypotenuse is H = O ÷ sin θ. Dividing H by sin θ does not give any side of the triangle.
- ME slides[1].whenToUse: "Any right-angled triangle where one angle (not the right angle) and one side are known. Choose the trig ratio that links the two sides involved in the question " → Trigonometry is also used when two sides are known and an angle is missing. In that case both sides are known and you use an inverse function. The formulaExplained on the same slide even mentions this
- MFM slides[3].mistakes[0].mistake: Both shorter sides touch the right angle, so the opposite side is always next to the right angle. Labelling 'the side next to the right angle' as opposite is therefore often correct. The real error is labelling the side  (gives: When the chosen side is the leg across from θ, it gives the correct opposite sid)

**geo-vectors**
- ME slides[1].formulaExplained: "Multiplying by a scalar k scales both components by k — this changes the magnitude but keeps the direction (or reverses it if k is negative)." → Multiplying by k multiplies the length by |k|. The length does not change when k = 1 or k = −1, and when k = 0 the result is the zero vector, which has no direction. The statement should say: 'the len

**geo-volume**
- ME slides[1].formulaExplained: "Cone and pyramid volumes are one-third of the corresponding prism or cylinder with the same base." → Incomplete condition. A cone or pyramid has one-third of the volume of the prism or cylinder with the same base AND the same perpendicular height. Without equal heights the statement is false. slides[

**num-bounds**
- ME slides[3].mistakes[1].correction: "The measured value itself does not determine the bounds — the rounding unit does." → Taken literally this is false. The bounds are 94 − 0.5 and 94 + 0.5, so they depend on the measured value. What the rounding unit alone decides is the amount added and subtracted (half the precision).

**num-integers**
- ME slides[1].body: "If that digit is 5 or more, round the target digit up by 1; if it is 4 or less, leave it unchanged and drop everything after. This same rule applies whether you" → "Drop everything after" is only right for digits after the decimal point. Digits before the decimal point must be replaced by zeros as placeholders. For example, 34 560 to 2 s.f. is 35 000, not 35, an
- ME slides[3].mistakes[0].mistake: "the student sees 5 in the 2nd d.p. position and rounds up the 8, giving 3.86" → In 3.8512 the 8 is the 1st d.p. digit and the 5 is the 2nd d.p. digit, which is the target digit. A student who wrongly treats the 5 as the deciding digit rounds up the 5 (5 → 6), giving 3.86. Roundin

**num-percentages**
- ME keyFacts[2].examTip: "If something costs £92.40 after a 10% discount, the original = £92.40 ÷ 0.90 = £102.67, not £92.40 − 9.24." → £92.40 ÷ 0.90 = £102.666… = £102.67 is correct. The wrong method it warns against is the wrong one. Nobody subtracts to undo a discount: £92.40 − £9.24 = £83.16, which is less than the sale price. The
- ME keyFacts[2].fact: "To reverse a percentage change (find the original value): divide the new value by the multiplier. Never subtract the percentage from the new value." → The rule only covers reversing an increase. It should say: never add or subtract the percentage of the new value. After a decrease, the tempting error is adding the percentage of the new value back on

**num-powers-roots**
- ME slides[1].formulaExplained: "Any base to the power zero equals 1." → Only a non-zero base to the power zero equals 1. 0⁰ is not defined at GCSE. The formula line should read a⁰ = 1 (a ≠ 0), which matches the later wording in keyFacts[3] and slides[3].mistakes[2].correc
- ME slides[1].formula: "a⁰ = 1" → State the condition: a⁰ = 1 for a ≠ 0.

**num-ratio**
- ME slides[3].mistakes[2].mistake: "(same answer here, but fails for non-integer scaling)" → The method described does not fail for non-integer scaling. It finds the amount per serving (160 ÷ 4 = 40 g) and adds 40 g for each extra serving, so it always gives the correct answer. For example, s
- MFM slides[3].mistakes[2].mistake: Adding 2 × 40 g is the unitary method: find one serving (40 g) and add two more servings. This is valid multiplicative reasoning, and the item itself admits it gives the same answer. It works for any number of servings. (gives: 240 g, which is correct. In general it always gives the correct scaled amount (o)

**num-standard-form**
- ME slides[0].body: "The key discipline is always keeping the coefficient strictly between 1 and 10." → The coefficient can equal 1. The condition is 1 ≤ a < 10, as the formula slide and keyFacts[0] state. For example, 1 × 10⁴ is valid standard form. 'Strictly between 1 and 10' would wrongly exclude a =
- ME slides[0].body: "Standard form expresses any number as a × 10ⁿ, where 1 ≤ a < 10 and n is an integer." → Not every number fits this form. Zero cannot be written with 1 ≤ a < 10, and negative numbers need a minus sign in front (for example −3 × 10²). Say instead: 'any positive number'.
- ME slides[2].conclusion: "6.35 × 10⁶ ÷ 2.5 × 10³ = 2.54 × 10³." → Without brackets, normal order of operations reads this left to right as (6.35 × 10⁶ ÷ 2.5) × 10³ = 2.54 × 10⁹. Write (6.35 × 10⁶) ÷ (2.5 × 10³) = 2.54 × 10³. The commonMistakes slide already uses thi
- ME keyFacts[1].fact: "Large numbers have positive powers of 10 (decimal moved left). Small numbers have negative powers (decimal moved right)." → This leaves out numbers from 1 up to (but not including) 10. These have n = 0 (for example 7.2 = 7.2 × 10⁰). Precisely: numbers of 10 or more have a positive power, numbers from 1 to below 10 have pow

**prob-basic**
- MFM slides[3].mistakes[2].mistake: 4/10 and 2/5 are the same probability, so leaving 4/10 is not a mathematical mistake. AQA mark schemes accept unsimplified equivalent fractions unless the question asks for the simplest form. The correction 'Always simpl (gives: 4/10, which equals 2/5 and is the correct probability.)

**prob-combined**
- ME slides[3].mistakes[0].correction: "'Both happen' = multiply. 'Either happens' = add. The words tell you which rule to use." → The word 'or' alone does not tell you to add. Simple addition only works when the events are mutually exclusive. Example: flip a coin and roll a die. P(head or 6) = 1/2 + 1/6 − 1/12 = 7/12, not 1/2 + 
- ME keyFacts[0].examTip: "If the question says 'both', 'and', or involves two separate trials (two coins, two dice), multiply the probabilities." → Multiplying gives the probability of one particular combined outcome only. Some questions about two trials need more than this. Example: P(one head and one tail from two coins) = 1/2 × 1/2 + 1/2 × 1/2

**prob-conditional**
- ME slides[3].mistakes[2].correction: "If the question says 'without replacement' or 'given that', the events are not independent." → The words 'given that' do not make events dependent. A question can say 'given that' about independent events, and then P(A | B) = P(A). For example, two dice: P(second shows 6 | first shows 6) = 1/6.
- ME slides[3].mistakes[2].mistake: "applying the simple multiplication rule P(A) × P(B) when the question involves 'without replacement' or a condition." → P(A) × P(B) is wrong only when the events are dependent. 'A condition' in the question does not on its own make the rule wrong. When events are dependent, the correct rule is P(A and B) = P(A) × P(B |

**prob-tree**
- ME slides[3].mistakes[2].correction: "For 'exactly one red': P(R,B) + P(B,R) = both paths must be included." → The equals sign joins a calculation to a sentence, which is not a valid mathematical statement. It should read: P(exactly one red) = P(R,B) + P(B,R) = 4/10 × 6/9 + 6/10 × 4/9 = 24/90 + 24/90 = 48/90 =

**prob-venn**
- ME slides[3].mistakes[1].mistake: "Forgetting the 'outside' region — placing all items inside the circles and getting a total that's too high." → If you forget the outside region, the numbers in the diagram add up to too little, not too much. In the worked example the circles hold 11 + 7 + 7 = 25, which is 5 short of 30. The real mistake is tha

**rpr-compound-measures**
- ME slides[1].formulaExplained: "Both formulas follow the same triangle structure: the compound measure (D or P) is at the top — divide by it to isolate mass/volume or force/area." → In the formula triangle, M (or F) goes at the top, with D and V (or P and A) on the bottom. You do not divide by D to find mass: M = D × V and F = P × A. Dividing only applies to volume and area: V = 
- ME keyFacts[0].examTip: "Draw the D|MV triangle: D on top, M and V on the bottom. Cover the unknown to read off the formula." → The triangle has M on top, with D and V on the bottom. With D on top, covering M would give D ÷ V, which is wrong; the correct result is M = D × V. This tip also contradicts commonMistakes[2], which c
- ME keyFacts[1].examTip: "Same triangle pattern as density: P on top, F and A on the bottom." → F goes on top, with P and A on the bottom. Covering F gives F = P × A; covering P gives P = F ÷ A; covering A gives A = F ÷ P.

**rpr-growth-decay**
- ME keyFacts[1].fact: "Compound interest: the interest is calculated on the growing total. Compound always gives a larger result over time." → This is not true 'always'. For growth at the same rate, compound and simple interest give the same total after the first period (for example £1,000 at 5% gives £1,050 either way). Compound only gives 

**rpr-percentage-change**
- ME slides[3].mistakes[2].correction: "Simple interest adds the same fixed amount each time; compound always gives a higher result." → Compound interest is not always higher. Over one period, simple and compound interest give the same total (for example, £2,000 at 4% for 1 year gives £2,080 either way). Compound interest only gives t
- ME keyFacts[3].fact: "Compound interest gives a larger total because each period's interest is added to the running total before the next calculation." → This is true only for 2 or more periods with a positive rate. For a single period the two totals are equal.

**rpr-proportion**
- ME slides[0].body: "Two quantities are in direct proportion when they increase and decrease together at the same rate — doubling one doubles the other." → Direct proportion does not mean the quantities change 'at the same rate'. In the lesson's own example, y = 3x, y increases 3 times as fast as x. The correct statement is that y is always the same mult
- ME slides[3].mistakes[0].correction: "Direct proportion: as x increases, y increases (y = kx). Inverse proportion: as x increases, y decreases (y = k/x)." → This is presented as the way to tell the two apart, but it is not a correct test. y = x + 5 increases with x but is not direct proportion. y = 10 − x decreases as x increases but is not inverse propor
- MFM slides[3].mistakes[2].mistake: For y = kx, an increase of 3 in x always gives an increase of 3k in y. So 'adding 3 × (some value) to y' is a valid method when the value is k, the amount y goes up per 1 unit of x. The described method is not in itself  (gives: With k as the value: if x = 4, y = 12 (k = 3), then y = 12 + 3 × 3 = 21. This eq)

**rpr-ratio**
- ME keyFacts[0].examTip: "If your simplified ratio still has a common factor, you haven't found the true HCF. Check by trying 2, 3, 5 as factors." → Checking only 2, 3 and 5 does not prove a ratio is fully simplified. For example, 21:49 has no common factor of 2, 3 or 5, but it does have the common factor 7, so it simplifies to 3:7. Say instead: c
- ME keyFacts[2].examTip: "For ratio a:b with difference d: 1 part = d ÷ (a−b)." → This only works when a is greater than b. If a is smaller than b, a−b is negative and the formula gives a negative part. State it as 1 part = d ÷ (larger ratio number − smaller ratio number).

**rpr-speed**
- ME slides[3].mistakes[0].correction: "Never just place the minutes after a decimal point — that only works for exact half-hours." → Putting the minutes after a decimal point does not work for half-hours either. 1 hour 30 minutes is 1.5 h, not 1.30 h. It only works for whole hours, where there are 0 minutes. The rule is always minu
- ME keyFacts[2].examTip: "The average of two speeds is not the average speed. Always use total distance ÷ total time." → This is stated as always true, but it is not. When the same amount of time is spent at each speed, the mean of the speeds equals the average speed. The lesson's own example shows this: 2 h at 20 km/h 
- ME slides[3].mistakes[1].correction: "The shortcut of averaging speeds only gives the right answer by coincidence in specific cases." → It is not a coincidence. Averaging the speeds always gives the right answer when the times spent at each speed are equal, and that is exactly the case in this example. Say: 'it only works when equal t
- ME slides[0].body: "Average speed over a whole journey is always total distance ÷ total time, not the average of the individual speeds." → The first part is correct. The words 'not the average of the individual speeds' are too absolute, because the two are equal when the times at each speed are equal. Say 'not, in general, the average of
- MFM slides[3].mistakes[1].mistake: Both legs take 2 hours (40 ÷ 20 = 2, 60 ÷ 30 = 2). Because the times are equal, the mean of the speeds is the correct average speed. The item's own correction works out 100 ÷ 4 = 25 km/h, the same answer as the 'mistake' (gives: 25 km/h, which is the correct average speed for this journey.)

**stat-averages**
- ME slides[0].body: "the mode is simply the most common value and is most useful for categorical data like shoe sizes or colours" → Shoe sizes are discrete numerical data, not categorical data. Colours are categorical. Say: 'most useful for categorical data such as colours, or for discrete data such as shoe sizes'.
- ME slides[1].formulaExplained: "Best when data has outliers (e.g. salaries, house prices) — the median is unaffected by extreme values." → The median is not 'unaffected'. It is resistant to extreme values: it changes far less than the mean, but adding an extreme value still shifts the middle position. Say 'the median is hardly affected b

**stat-boxplots**
- ME slides[3].mistakes[0].mistake: "Including the median value in both halves when finding Q1 and Q3 — using all 9 values for the lower half instead of just the 4 below the median." → The sentence contradicts itself. Including the median in both halves gives a lower half of 5 values (22, 25, 28, 31, 33), not all 9. Using all 9 values would just give the median, 33. Including the me
- ME slides[0].body: "a narrow box means the data is tightly clustered around the median" → A narrow box only means the middle 50% of the data (between Q1 and Q3) is close together. It says nothing about the values outside the box, and the median need not sit in the centre of the box. It sho
- MFM slides[3].mistakes[1]: The correction admits that the standard box plot, which is the GCSE expectation, draws the whiskers to the minimum and maximum, even when those values are outliers. So stretching a whisker to an extreme value is the corr (gives: A correct standard box plot, with whiskers ending at the actual minimum and maxi)

**stat-charts**
- ME slides[3].mistakes[0].correction: "Dividing 360 by the frequency only gives the right answer if the total happens to be 360." → This is false. If the total is 360, the correct angle is (f ÷ 360) × 360 = f degrees, not 360 ÷ f. For example, f = 8 gives 8°, but 360 ÷ 8 = 45°. The value 360 ÷ f equals (f ÷ total) × 360 only when 
- ME slides[2].steps[1].working: "(8 ÷ 30) × 360° = 0.2667 × 360° = 96°" → 0.2667 × 360 = 96.012, not exactly 96. The exact working is 8/30 = 4/15, and 4/15 × 360 = 96°. Alternatively, 360 ÷ 30 = 12° per student, and 8 × 12 = 96°. Using a rounded decimal and then writing '='
- ME slides[0].body: "Frequency polygons and histograms are for continuous data (things you measure, like height or time)" → Incomplete and misleading. Specification S3 says histograms are for grouped discrete data as well as continuous data. Frequency polygons can also be drawn for grouped discrete data.
- ME keyFacts[1].examTip: "If class widths are all equal, histograms look like bar charts — but the y-axis is still technically frequency density." → When class widths are equal, a histogram may use frequency on the vertical axis, and this is accepted at GCSE. The lesson's own slides[1].whenToUse says 'check whether class widths are equal before de
- ME keyFacts[2].fact: "Frequency polygons join the midpoints of histogram bars." → Imprecise. A frequency polygon plots each frequency at the midpoint of its class interval, which is the midpoint of the top of each bar when drawn over a histogram. The points are then joined with str

**stat-cumulative**
- ME slides[2].steps[1].working: "CF = 20 falls between the points (20, 14) and (30, 28). Reading down from the curve at CF = 20 gives approximately 26 minutes." → CF = 20 is 6 of the 14 students in the 20–30 class above CF 14. Estimate = 20 + (6/14) × 10 ≈ 24.3 minutes. A smooth curve through these points would also give about 24 minutes, not 26. Median ≈ 24 mi
- ME slides[2].steps[1].result: "Median ≈ 26 minutes" → Median ≈ 24 minutes (20 + 6/14 × 10 ≈ 24.3).
- ME slides[2].steps[2].result: "Median ≈ 26 minutes ✓" → Median ≈ 24 minutes. The check in this step only confirms that the value lies in the 20–30 class. That is too weak to catch the wrong reading.
- ME slides[2].conclusion: "The median time is approximately 26 minutes." → The median time is approximately 24 minutes.

**stat-sampling**
- ME slides[2].steps[2].working: "In practice, the spinner would land on A approximately 87 or 88 times." → The arithmetic (0.25 × 350 = 87.5) is right, but this sentence is wrong. In a real set of 350 spins the number of A's varies and could easily be, say, 80 or 95. The correct statement is: 'You would ex
- ME slides[3].mistakes[1].correction: "the sample is too small to be representative" → This mixes up two separate ideas. Sample size affects how reliable (how variable) an estimate is. Whether a sample is representative depends on how it was selected. A small random sample can still be 

**stat-scatter**
- ME slides[3].mistakes[0].correction: "Both could be caused by a third variable (e.g. hot weather), or the relationship could be coincidence." → In this example the third-variable illustration does not work. Hot weather does not cause sunshine; sunshine is a main cause of hot weather. So 'hot weather' is not an independent common cause of both
- ME slides[3].mistakes[1].correction: "The line of best fit must pass through the mean point (x̄, ȳ) and balance points above and below." → At GCSE a line of best fit is drawn by eye. It should follow the trend with roughly equal numbers of points either side. Passing through the mean point is a helpful guide, not a requirement, so 'must'
- ME slides[2].steps[2].working: "Because 6 hours is within the data range, the estimate of £140 is reasonably reliable." → Being within the data range is necessary but not enough on its own. Reliability also depends on the strength of the correlation and on how many data points there are (only 8 here). A fuller answer: 'r

## Question bank

600 questions sent in batches of 25 (claude-opus-5-5); answered 600. Tag differs from the model's subtopic for **93**. Nothing retagged.

Read these in groups (counts by current tag → suggested):

- **geo-shapes → geo-transformations 14**: the bank's geo-shapes questions are congruence and similarity (spec G5, G6, G19); the geo-shapes lesson teaches polygon angle sums, and no subtopic in data/maths-syllabus.json covers similarity, so the model put them under transformations (G7). The fix is a syllabus decision (a similarity subtopic, or the lesson), not a retag.
- **Overlapping subtopics 22**: the syllabus has both num-percentages and rpr-percentage-change, rpr-percentage-change and rpr-growth-decay (both teach compound interest), and num-ratio and rpr-ratio (same title and spec lines). Moves between these are mostly the model choosing the other of two near-duplicates.
- **The rest 57**: single questions that test a neighbouring skill (eq-C01 simultaneous equations under linear equations; quadratics under equations; Venn or tree questions under basic probability). These are the retag candidates.

| Question | Current tag | Suggested | Also | Why (model) |
|---|---|---|---|---|
| pct-C01 | num-percentages | rpr-percentage-change | rpr-growth-decay | Compound interest using a repeated multiplier |
| pct-C02 | num-percentages | rpr-percentage-change | rpr-growth-decay | Repeated percentage decrease, which is compound decay |
| frc-C02 | num-fractions | alg-expressions | num-fractions | Adding algebraic fractions into a single fraction |
| rat-B03 | rpr-ratio | rpr-proportion |  | Direct proportion using y = kx |
| rat-C01 | rpr-ratio | rpr-proportion |  | Inverse proportion using y = k/x |
| rat-C02 | rpr-ratio | rpr-proportion |  | Direct proportion to a square |
| rat-C03 | rpr-ratio | rpr-proportion |  | Direct proportion to x squared using constant k |
| eq-C01 | alg-equations | alg-simultaneous |  | Linear simultaneous equations by substitution |
| eq-C02 | alg-equations | alg-quadratics |  | Solving a quadratic by factorising |
| sub-B02 | alg-expressions | alg-equations | alg-expressions | Rearranging a simple formula using inverse operations. |
| sub-B03 | alg-expressions | alg-equations | num-powers-roots | Rearranging a formula, which needs a square root. |
| sub-C01 | alg-expressions | alg-equations | alg-expressions | Changing the subject when it appears twice; needs factorising out x. |
| sub-C02 | alg-expressions | alg-quadratics |  | Solving a quadratic with the quadratic formula. |
| int-B01 | num-integers | num-bounds |  | Using upper bounds to find a maximum product. |
| eq-C04 | alg-equations | alg-quadratics | alg-equations | Forms a quadratic from area and solves by factorising |
| gph-B06 | alg-graphs | alg-simultaneous | alg-graphs | Intersection of two lines via simultaneous equations. |
| seq-C01 | alg-sequences | alg-equations | alg-sequences | Equate two nth terms and solve linear equation |
| seq-C03 | alg-sequences | alg-quadratics | alg-sequences | Form and factorise quadratic from geometric sum |
| seq-C04 | alg-sequences | alg-simultaneous | alg-sequences | Solve simultaneous equations from arithmetic sequence conditions |
| quad-A04 | alg-quadratics | alg-expressions |  | Expanding a squared bracket, no solving involved |
| pch-A01 | rpr-percentage-change | num-percentages | rpr-percentage-change | Single percentage increase using a multiplier. |
| pch-A02 | rpr-percentage-change | num-percentages |  | Reverse percentage to find the original price. |
| pch-A03 | rpr-percentage-change | num-percentages |  | Finds 20% of an amount and subtracts it. |
| pch-A05 | rpr-percentage-change | num-percentages |  | Reverse percentage after a 25% increase. |
| pch-B06 | rpr-percentage-change | num-percentages |  | Reverse percentage to remove VAT. |
| pch-C02 | rpr-percentage-change | rpr-growth-decay |  | Exponential growth: when does the population first exceed 8000. |
| grd-A01 | rpr-growth-decay | rpr-percentage-change | rpr-growth-decay | Compound interest multiplier applied for one year |
| grd-A04 | rpr-growth-decay | rpr-percentage-change | rpr-growth-decay | Depreciation as a percentage decrease multiplier |
| grd-B01 | rpr-growth-decay | rpr-percentage-change | rpr-growth-decay | Compound interest formula over four years |
| grd-B05 | rpr-growth-decay | rpr-percentage-change | rpr-growth-decay | Compound percentage increase over five years |
| shp-A01 | geo-shapes | geo-transformations |  | Scale factor of similar triangles |
| shp-A02 | geo-shapes | geo-transformations | geo-angles | Triangle congruence condition SSS |
| shp-B01 | geo-shapes | geo-transformations | geo-perimeter-area | Length scale factor from an area ratio of similar shapes |
| shp-A03 | geo-shapes | geo-transformations | geo-angles | Triangle congruence condition SAS |
| shp-A04 | geo-shapes | geo-transformations | geo-perimeter-area | Area scale factor of similar shapes |
| shp-A05 | geo-shapes | geo-transformations |  | Scale factor of similar rectangles |
| shp-B02 | geo-shapes | geo-transformations |  | Similar triangles formed by a parallel line |
| shp-B03 | geo-shapes | geo-transformations | geo-volume | Volume and area scale factors of similar solids |
| shp-B04 | geo-shapes | geo-transformations | geo-volume | Volume scale factor of similar cones |
| shp-B05 | geo-shapes | geo-transformations | geo-perimeter-area | Length scale factor from an area ratio |
| shp-B06 | geo-shapes | geo-transformations | geo-volume | Volume scale factor with unit conversion |
| shp-C01 | geo-shapes | geo-transformations | geo-volume | Area to length to volume scale factors |
| shp-C02 | geo-shapes | geo-angles | geo-shapes | Congruence proof using alternate angles and equal sides (G6). |
| shp-C03 | geo-shapes | geo-transformations | geo-perimeter-area | Similar triangles; area scale factor from length scale factor. |
| shp-C04 | geo-shapes | geo-transformations | geo-volume | Similar solids; area and volume scale factors. |
| av-B01 | geo-volume | geo-perimeter-area |  | Total surface area of a cone. |
| av-B04 | geo-volume | geo-perimeter-area |  | Surface area of a sphere. |
| av-C01 | geo-volume | geo-perimeter-area | geo-pythagoras | Composite surface area; slant height found by Pythagoras. |
| pyth-C03 | geo-pythagoras | alg-quadratics | geo-pythagoras | Expand, factorise and solve a quadratic set up from Pythagoras. |
| cth-C02 | geo-circles | geo-angles | geo-circles | Solved using the angle sum of triangle CBD. |
| cth-C03 | geo-circles | geo-trigonometry | geo-circles | Tangent-radius right angle, then Pythagoras and tan give PT and the angle. |
| prb-B01 | prob-basic | prob-venn |  | Union/intersection counting to find how many study neither. |
| prb-B03 | prob-basic | prob-venn |  | Addition rule for overlapping sets; union of dog and cat owners |
| prb-B05 | prob-basic | prob-venn | prob-basic | Addition rule for overlapping events: red or queen |
| prb-C01 | prob-basic | prob-conditional |  | Conditional probabilities from a two-way table |
| prb-C03 | prob-basic | prob-tree | alg-equations | Solve for n, then two draws without replacement |
| prb-C04 | prob-basic | prob-combined | prob-basic | Biased die probabilities, then independent combined throws |
| comb-A05 | prob-combined | prob-tree | prob-combined | Two draws with replacement |
| comb-C01 | prob-combined | prob-conditional | prob-combined | Conditional probability formula used to test independence |
| comb-C03 | prob-combined | prob-venn | prob-basic | Set notation with complements for mutually exclusive events |
| comb-C04 | prob-combined | prob-conditional | prob-combined | Conditional probability on a restricted two-dice sample space |
| tree-C04 | prob-tree | prob-conditional | prob-tree | Finds P(bag A given red) via Bayes from tree routes. |
| venn-C01 | prob-venn | prob-conditional | prob-venn | Independence: product rule and check that P(A/B) equals P(A). |
| venn-C03 | prob-venn | prob-conditional | prob-venn | Uses the conditional probability formula and tests independence |
| venn-C04 | prob-venn | prob-combined | prob-venn | Addition rule for mutually exclusive versus independent events |
| cond-B06 | prob-conditional | prob-tree | prob-conditional | Sequential dependent events multiplied along branches |
| stat-charts-A03 | stat-charts | stat-averages |  | Range and total of data |
| stat-charts-B04 | stat-charts | stat-cumulative | stat-averages | Class frequencies from cumulative frequencies, then modal class |
| stat-charts-B06 | stat-charts | prob-conditional | prob-basic | Conditional probability from a two-way table |
| stat-charts-C03 | stat-charts | num-percentages |  | Percentages of amounts and a combined percentage |
| stat-scatter-A02 | stat-scatter | stat-averages | stat-scatter | Calculating two means to find the mean point |
| stat-scatter-A04 | stat-scatter | alg-graphs | stat-scatter | Equation of a straight line through two points |
| cum-B01 | stat-cumulative | stat-averages | stat-boxplots | Comparing distributions using median and IQR |
| stat-cumulative-B03 | stat-cumulative | stat-boxplots |  | Box plot IQR and outlier fence |
| stat-cumulative-B04 | stat-cumulative | stat-averages | stat-boxplots | Compare distributions using median and IQR |
| stat-cumulative-C01 | stat-cumulative | stat-averages | stat-cumulative | Grouped estimated mean, median estimate and skew |
| stat-cumulative-C03 | stat-cumulative | stat-boxplots | stat-cumulative | IQR and outlier fences from given quartiles |
| stat-cumulative-C04 | stat-cumulative | stat-boxplots | stat-cumulative | Outlier fence and box plot features from quartiles |
| pct-B04 | num-percentages | rpr-percentage-change | num-percentages | Calculate a percentage loss |
| pct-B05 | num-percentages | rpr-percentage-change |  | Successive percentage changes using multipliers |
| pct-B06 | num-percentages | rpr-percentage-change |  | Successive percentage increase and decrease |
| pct-C03 | num-percentages | rpr-percentage-change |  | Repeated percentage change with multipliers |
| pct-C04 | num-percentages | rpr-percentage-change |  | Compound interest over two years |
| int-B02 | num-integers | num-bounds |  | Error interval from rounding to 2 s.f. |
| int-B05 | num-integers | num-fractions |  | Converting a recurring decimal to a fraction. |
| int-B06 | num-integers | num-bounds |  | Minimum product found using lower bounds. |
| int-C01 | num-integers | num-bounds |  | Upper bound of a quotient. |
| int-C02 | num-integers | num-bounds |  | Combining bounds in a compound expression. |
| int-C03 | num-integers | num-fractions |  | Converting a recurring decimal to a fraction. |
| int-C04 | num-integers | num-bounds | num-standard-form | Upper bound of an area, answer given in standard form. |
| pow-B04 | num-powers-roots | alg-expressions | num-powers-roots | Simplifying an algebraic product using index laws. |
| pow-B06 | num-powers-roots | alg-expressions | num-powers-roots | Power of a power in an algebraic expression. |
| nrt-C04 | num-ratio | rpr-proportion | num-ratio | Scaling a recipe by direct proportion |

Free count: 36 questions have a step explanation or worked-example step with more than one "→".

## What this audit cannot see

- Layout on screen: how a slide looks at laptop or phone size, what wraps or scrolls (only the formula box was checked, by eye, on 2026-11-26).
- Whether an explanation actually lands with her. Density counts and the model's "density" findings are proxies; nothing here watches a 15-year-old read it.
- Diagrams and pictures: the lessons have none the check could read, and the model cannot see images.
- Mistake items with no numbers (habits, labels, units, "not writing a reason"): 55 of 123 are checked only for text that admits they are correct.
- The mechanical check reads only what its expression reader understands: chains with words in them ("40% of £750"), coordinates, vectors written "(a over b)", inequalities and trig are skipped or handled only where tools/maths-lesson-fns.js computes them by hand. A fault in a skipped chain is not found.
- The fns file and the lessons were read by the same session that wrote the fns; a misreading of a question would make both agree. The model audit is the independent check, and it is one model, run once.
- The question bank's answers were recomputed on 2026-10-16 (maths-recompute --all: still 0 wrong of 1376 checked steps); its explanations, hints and worked examples were not recomputed here, only the "→" density counted.
- Spec coverage is judged against the extracted spec text (data/spec/maths.md), which loses stacked fractions and one √ sign; see data/spec/MANIFEST.md.

Model spend in this file's spec-check results: $3.8105; tagging $1.8027.
