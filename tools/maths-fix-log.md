# Maths bank fixes (task 2.2)

Every change to js/maths-questions.js made from tools/maths-recompute.js --all, with old and new values.

## Batch 1: bank questions 1–120 (pct-A01 … gph-C02)

- pct-C01 step 1 | wrong: £4000 × 1.035³ = £4434.87 to the nearest penny; stored 4434.9 with tolerance 0.01 marked the right answer wrong
  - answer OLD: 4434.90
  - answer NEW: 4434.87
  - tolerance OLD: 0.01
  - tolerance NEW: 0.005
- frc-B01 step 0 | ambiguous: two fractions asked for, one box
  - prompt OLD: 'Convert both mixed numbers to improper fractions.'
  - prompt NEW: 'Convert both mixed numbers to improper fractions. Enter 1⅔ as an improper fraction.'
- frc-B03 step 0 | ambiguous: two fractions asked for, one box
  - prompt OLD: 'Convert both mixed numbers to improper fractions.'
  - prompt NEW: 'Convert both mixed numbers to improper fractions. Enter 2⅓ as an improper fraction.'
- rat-A01 step 1 | ambiguous: two shares asked for, one box
  - prompt OLD: 'Calculate the two shares.'
  - prompt NEW: 'Calculate the two shares. Enter the larger share.'
- rat-A02 step 1 | ambiguous: two parts asked for, one box
  - prompt OLD: 'Divide both parts by the HCF.'
  - prompt NEW: 'Divide both parts by the HCF. Enter the second part of the simplified ratio.'
- rat-C01 step 0 | ambiguous: prompt asked for an equation; the box takes k
  - prompt OLD: 'Write the equation for inverse proportion.'
  - prompt NEW: 'Write the equation for inverse proportion, y = k/x. Enter the value of k.'
- rat-C02 step 0 | ambiguous: prompt asked for an equation; the box takes k
  - prompt OLD: 'Write the equation for this type of proportion.'
  - prompt NEW: 'Write the equation for this type of proportion, p = kq². Enter the value of k.'
- stf-A03 step 0 | ambiguous: prompt asked how far to move the point; the box takes the number
  - prompt OLD: 'The power is +4. How far and in which direction do you move the decimal?'
  - prompt NEW: 'The power is +4, so move the decimal point 4 places to the right. Write the ordinary number.'
- stf-B01 step 2 | ambiguous: one box for a standard-form answer; it takes the power
  - prompt OLD: 'Write in standard form. (12.8 × 10⁸ is not standard form — adjust.)'
  - prompt NEW: 'Write in standard form. (12.8 × 10⁸ is not standard form — adjust.) Enter the power of 10.'
- stf-B02 step 2 | ambiguous: one box for a standard-form answer; it takes the ordinary number
  - prompt OLD: 'Write the final answer in standard form.'
  - prompt NEW: 'Write the final answer in standard form. Enter it as an ordinary number.'
- stf-C01 step 1 | ambiguous: one box for a standard-form answer; it takes the power
  - prompt OLD: 'Write 5800 in standard form.'
  - prompt NEW: 'Write 5800 in standard form. Enter the power of 10.'
- stf-C02 step 1 | ambiguous: the box takes the value, not the power
  - prompt OLD: 'Subtract the powers: 10⁻² ÷ 10⁻³.'
  - prompt NEW: 'Work out 10⁻² ÷ 10⁻³. Enter it as an ordinary number.'
- eq-B03 step 2 | ambiguous: length and width asked for, one box (the box takes the length)
  - prompt OLD: 'Find the length and width by substituting x = 7.'
  - prompt NEW: 'Find the length by substituting x = 7.'
- eq-C02 step 0 | ambiguous: two numbers asked for, one box
  - prompt OLD: 'Find two numbers that multiply to −10 and add to +3.'
  - prompt NEW: 'Find two numbers that multiply to −10 and add to +3. Enter the positive one.'
- eq-C02 step 2 | ambiguous: both values asked for, one box
  - prompt OLD: 'Solve: each bracket = 0. State both values of x.'
  - prompt NEW: 'Solve: each bracket = 0. Enter the positive value of x.'
- sub-C02 step 0 | ambiguous: three values asked for, one box
  - prompt OLD: 'Identify a, b, c from 2x² − 5x − 3 = 0.'
  - prompt NEW: 'Identify a, b, c from 2x² − 5x − 3 = 0. Enter the value of a.'
- sub-C02 step 2 | ambiguous: two solutions asked for, one box
  - prompt OLD: 'Apply the formula: x = (−b ± √49) / (2a). Find both solutions.'
  - prompt NEW: 'Apply the formula: x = (−b ± √49) / (2a). Find both solutions. Enter the positive one.'
- int-A01 step 0 | mismatch: prompt asked a yes/no question; the box takes the rounded number
  - prompt OLD: 'Look at the hundreds digit. Is it 5 or more?'
  - prompt NEW: 'Look at the hundreds digit. If it is 5 or more, round up. If not, round down. Write the rounded number.'
- pow-A01 step 0 | ambiguous: index or value
  - prompt OLD: 'Use the multiplication law: aᵐ × aⁿ = aᵐ⁺ⁿ. Add the powers.'
  - prompt NEW: 'Use the multiplication law: aᵐ × aⁿ = aᵐ⁺ⁿ. Add the powers. Enter the new power of 2.'
- pow-A02 step 1 | ambiguous: ∛27 or the total
  - prompt OLD: 'Find ∛27, then add.'
  - prompt NEW: 'Find ∛27, then add it to √144. Enter the total.'
- pow-A03 step 0 | ambiguous: index or value
  - prompt OLD: 'Use the power law: (aᵐ)ⁿ = aᵐⁿ. Multiply the indices.'
  - prompt NEW: 'Use the power law: (aᵐ)ⁿ = aᵐⁿ. Multiply the indices. Enter the new power of 3.'
- bnd-A01 step 1 | ambiguous: two bounds, one box
  - prompt OLD: 'State the error interval using inequality notation.'
  - prompt NEW: 'State the error interval using inequality notation. Enter the upper bound.'
- nrt-A02 step 1 | ambiguous: two parts asked for, one box
  - prompt OLD: 'Divide both parts by 15.'
  - prompt NEW: 'Divide both parts by 15. Enter the second part of the simplified ratio.'
- sim-A02 step 0 | ambiguous: 3y = 9 or y
  - prompt OLD: 'Subtract equation 2 from equation 1.'
  - prompt NEW: 'Subtract equation 2 from equation 1, then find y.'
- sim-A02 step 1 | wrong: x = 10/3; stored 10 (the value of 3x) marked the right answer wrong
  - prompt OLD: 'Substitute y = 3 into 3x − y = 7.'
  - prompt NEW: 'Substitute y = 3 into 3x − y = 7 and solve for x. Give x to 2 decimal places.'
  - answer OLD: 10
  - answer NEW: 3.3333
  - tolerance OLD: 0.1
  - tolerance NEW: 0.01
- eq-B05 step 0 | ambiguous: an expansion asked for, one box
  - prompt OLD: 'Expand the left-hand side.'
  - prompt NEW: 'Expand the left-hand side, 5(x − 2). Enter the number term.'
- eq-B05 step 1 | ambiguous: an expansion asked for, one box
  - prompt OLD: 'Expand the right-hand side.'
  - prompt NEW: 'Expand the right-hand side, 3(x + 4). Enter the number term.'
- eq-B06 step 1 | mismatch: prompt asked to simplify the left side (5x); the box takes the right side, 20
  - prompt OLD: 'Simplify the left side.'
  - prompt NEW: 'Simplify the left side. 5x = ?'
- eq-C04 step 0 | ambiguous: an equation asked for, one box
  - prompt OLD: 'Form a quadratic equation using area = length × width.'
  - prompt NEW: 'Form a quadratic equation using area = length × width, with 0 on the right. Enter the number term.'
- eq-C04 step 1 | ambiguous: x = 4 or x = −7
  - prompt OLD: 'Factorise x² + 3x − 28 = 0.'
  - prompt NEW: 'Factorise x² + 3x − 28 = 0. Enter the positive value of x.'
- fn-A03 step 0 | ambiguous: 2x = 8 or x = 4
  - prompt OLD: 'Set h(x) = 13 and solve for x.'
  - prompt NEW: 'Set h(x) = 13 and subtract 5 from both sides. 2x = ?'
- fn-B03 step 1 | ambiguous: x = 2 or x = −8
  - prompt OLD: 'Solve gf(x) = 25: (x+3)² = 25.'
  - prompt NEW: 'Solve gf(x) = 25: (x+3)² = 25. Enter the positive solution.'
- fn-C02 step 1 | ambiguous: an equation asked for, one box
  - prompt OLD: 'Set f(x) = f⁻¹(x) and multiply through by 2.'
  - prompt NEW: 'Set f(x) = f⁻¹(x) and multiply through by 2. Collect the x terms. 3x = ?'
- gph-B06 step 0 | ambiguous: 2x = 6, one box
  - prompt OLD: 'At the intersection, both y values are equal. Set 3x − 4 = x + 2 and collect x terms.'
  - prompt NEW: 'At the intersection, both y values are equal. Set 3x − 4 = x + 2 and collect x terms. 2x = ?'
- tr-B02 step 2 | ambiguous (sample report): image is (5, 11); the box takes the y-coordinate
  - prompt OLD: 'Find image of C(1, 3).'
  - prompt NEW: 'Find the image of C(1, 3). Enter its y-coordinate.'
- pyth-C02 step 2 | ambiguous (sample report): prompt asked inside or outside; the box takes CR
  - prompt OLD: 'Is R(0, 0) inside or outside the circle?'
  - prompt NEW: 'Is R(0, 0) inside or outside the circle? Enter the distance CR.'
- venn-C03 step 2 | mismatch (sample report): prompt asked whether A and B are independent; the box now takes P(B), which is compared with P(B|A) = 0.375
  - prompt OLD: 'Compare P(B|A) with P(B). Are A and B independent?'
  - prompt NEW: 'Compare P(B|A) with P(B). Enter P(B).'
  - answer OLD: 0.375
  - answer NEW: 0.25
- venn-C03 step 3 | wrong (sample report): P(A) × P(B) = 0.4 × 0.25 = 0.1; stored 0.375
  - prompt OLD: 'Verify by checking P(A) x P(B) vs P(A and B).'
  - prompt NEW: 'Verify by checking P(A) × P(B) against P(A and B). Enter P(A) × P(B).'
  - answer OLD: 0.375
  - answer NEW: 0.1

## Batch 2: bank questions 121–240 (gph-C03 … pro-B02)

- gph-C04 step 3 | ambiguous: midpoint y-coordinate and gradient asked for, one box
  - prompt OLD: 'Find the y-coordinate of the midpoint, then calculate the gradient of AB.'
  - prompt NEW: 'Find the y-coordinate of the midpoint, then calculate the gradient of AB. Enter the gradient.'
- ineq-B03 step 2 | ambiguous: upper bound and number of integers asked for, one box
  - prompt OLD: 'Upper bound: 3n ≤ 9 → n ≤ ? And how many integers satisfy this?'
  - prompt NEW: 'Upper bound: 3n ≤ 9 → n ≤ 3. How many integers satisfy the inequality?'
- ineq-B06 step 0 | ambiguous: 2x > 8 or x > 4
  - prompt OLD: 'Solve 4x − 1 > 2x + 7. Collect x terms.'
  - prompt NEW: 'Solve 4x − 1 > 2x + 7. Collect x terms, then divide. x > ?'
- seq-C04 step 0 | ambiguous: an equation asked for, one box
  - prompt OLD: 'Write the equation for the 4th term: a + 3d = 19. Now write the sum of 6 terms formula and set equal to 78.'
  - prompt NEW: 'Write the equation for the 4th term: a + 3d = 19. Now write the sum of 6 terms formula, set it equal to 78 and divide by 3. 2a + 5d = ?'
- sim-A03 step 0 | ambiguous: 2x = 4 or x
  - prompt OLD: 'Set the two expressions for y equal: 3x + 1 = x + 5. Collect x terms.'
  - prompt NEW: 'Set the two expressions for y equal: 3x + 1 = x + 5. Collect x terms. 2x = ?'
- sim-A04 step 0 | ambiguous: 2x = 6 or x
  - prompt OLD: 'Subtract equation 2 from equation 1 to eliminate y.'
  - prompt NEW: 'Subtract equation 2 from equation 1 to eliminate y. 2x = ?'
- sim-A05 step 0 | ambiguous: 7x = 21 or x
  - prompt OLD: 'Add the two equations to eliminate y.'
  - prompt NEW: 'Add the two equations to eliminate y. 7x = ?'
- sim-B02 step 0 | ambiguous: 5x = 25 or x
  - prompt OLD: 'Add the equations to eliminate y.'
  - prompt NEW: 'Add the equations to eliminate y. 5x = ?'
- sim-B03 step 1 | ambiguous: prompt asked 9x + 8x = ? (17x); the box takes 34
  - prompt OLD: 'Add the two new equations to eliminate y. What is 9x + 8x = ?'
  - prompt NEW: 'Add the two new equations to eliminate y. 17x = ?'
- sim-B04 step 0 | ambiguous: prompt asked for 3a + 100 (= 127); the box takes 3a = 27
  - prompt OLD: 'Let a = adults, c = children. Write two equations. Substitute c = 20 − a into 8a + 5c = 127 and expand. Find 3a + 100.'
  - prompt NEW: 'Let a = adults, c = children. Write two equations. Substitute c = 20 − a into 8a + 5c = 127 and expand to get 3a + 100 = 127. Find 3a.'
- sim-B06 step 0 | ambiguous: an equation asked for, one box
  - prompt OLD: 'Multiply the second equation by 5 to match y-coefficients.'
  - prompt NEW: 'Multiply the second equation by 5 to match y-coefficients. 20x − 5y = ?'
- sim-B06 step 1 | ambiguous: 22x = 66 or x
  - prompt OLD: 'Add to the first equation to eliminate y.'
  - prompt NEW: 'Add to the first equation to eliminate y. 22x = ?'
- quad-C04 step 0 | ambiguous: prompt asked for the discriminant expression; the box takes k² = 36
  - prompt OLD: 'A quadratic has exactly one solution when the discriminant = 0. Write the discriminant.'
  - prompt NEW: 'A quadratic has exactly one solution when the discriminant = 0. Set the discriminant equal to 0. k² = ?'

## Batch 2 (continued): pch, cmp

- pch-C02 step 2 | ambiguous: prompt asked for 1.12⁶; the box (unit hours) takes n = 7
  - prompt OLD: 'Calculate 1.12⁶ to check if n = 6 is sufficient.'
  - prompt NEW: 'Calculate 1.12⁶ and 1.12⁷. What is the smallest number of complete hours for which 1.12ⁿ > 2?'
- pch-C04 step 1 | ambiguous: per-year (0.97) or two-year (0.9409) multiplier
  - prompt OLD: 'Now apply 3% decrease for 2 years. What multiplier is applied?'
  - prompt NEW: 'Now apply 3% decrease for 2 years. What single multiplier covers both years?'
- pch-C04 step 2 | wrong: £180 000 × 1.05⁴ × 0.97² = £205 860.57, so £205 861 to the nearest pound; stored 205820 (tolerance 10) marked the right answer wrong
  - answer OLD: 205820
  - answer NEW: 205861
  - tolerance OLD: 10
  - tolerance NEW: 1
- cmp-C03 step 0 | ambiguous: prompt asked for volume and mass; the box (unit N) takes the weight
  - prompt OLD: 'Find the volume and mass of the block.'
  - prompt NEW: 'Find the volume and mass of the block, then its weight (g = 10 N/kg). Enter the weight in N.'

## Batch 2 (continued): stale values in hints and sample answers

- pct-C01 text | wrong value in hint (answer fixed in batch 1): £4000 × 1.035³ = £4434.87
  - line 276 OLD: hint3: '4000 × 1.035³ ≈ 4434.90',
  - line 276 NEW: hint3: '4000 × 1.035³ ≈ 4434.87',
- pch-C04 text | wrong value in hints, explanations, displayAnswer and sample answers (answer fixed above): £205 860.57 → £205 861
  - line 10095 OLD: hint3: '£205 820.',
  - line 10095 NEW: hint3: '£205 861.',
  - line 10099 OLD: explanation: '218 791 × 0.9409 ≈ £205 820.'
  - line 10099 NEW: explanation: '218 791 × 0.9409 ≈ £205 861.'
  - line 10104 OLD: hint2: '180 000 × 1.21550625 × 0.9409 ≈ £205 820.',
  - line 10104 NEW: hint2: '180 000 × 1.21550625 × 0.9409 ≈ £205 861.',
  - line 10110 OLD: displayAnswer: 'V = 180 000 × 1.05⁴ × 0.97² ≈ £205 820',
  - line 10110 NEW: displayAnswer: 'V = 180 000 × 1.05⁴ × 0.97² ≈ £205 861',
  - line 10111 OLD: explanation: '180 000 × 1.05⁴ × 0.97² ≈ £205 820.'
  - line 10111 NEW: explanation: '180 000 × 1.05⁴ × 0.97² ≈ £205 861.'
  - line 10122 OLD: grade4: 'After growth: £218 791. After decline: £218 791 × 0.9409 ≈ £205 820.',
  - line 10122 NEW: grade4: 'After growth: £218 791. After decline: £218 791 × 0.9409 ≈ £205 861.',
  - line 10123 OLD: grade6: 'V = 180 000 × 1.05⁴ × 0.97² ≈ £218 791 × 0.9409 ≈ £205 820.',
  - line 10123 NEW: grade6: 'V = 180 000 × 1.05⁴ × 0.97² ≈ £218 791 × 0.9409 ≈ £205 861.',
  - line 10124 OLD: grade8: 'V = 180 000 × 1.05⁴ × 0.97² = 180 000 × 1.21550625 × 0.9409 ≈ £205 820.'
  - line 10124 NEW: grade8: 'V = 180 000 × 1.05⁴ × 0.97² = 180 000 × 1.21550625 × 0.9409 ≈ £205 861.'

## Batch 3: bank questions 241–360 (grd-B03 … )

- grd-C02 question | wrong: the question's figures were inconsistent (£13 600 × 1.05³ = £15 743.70, not £15 746.40), so r came out 4.94% and P £13 602.43, not the stored 5% and £13 600
  - OLD: question: 'An investment of £P grows at rate r% per year. After 3 years it is worth £15 746.40. After 5 years it is worth £17 340.16. Find P and r.',
  - NEW: question: 'An investment of £P grows at rate r% per year. After 3 years it is worth £15 743.70. After 5 years it is worth £17 340.16. Find P and r.',
- grd-C02 question | wrong: £13 600 × 1.05⁵ = £17 357.43, not £17 340.16
  - OLD: question: 'An investment of £P grows at rate r% per year. After 3 years it is worth £15 743.70. After 5 years it is worth £17 340.16. Find P and r.',
  - NEW: question: 'An investment of £P grows at rate r% per year. After 3 years it is worth £15 743.70. After 5 years it is worth £17 357.43. Find P and r.',
- grd-C02 text | figure brought in line with the corrected question
  - line 11501 OLD: hint1: 'Equation 1: P×(1+r)³ = 15746.40. Equation 2: P×(1+r)⁵ = 17340.16. Divide E2 by E1.',
  - line 11501 NEW: hint1: 'Equation 1: P×(1+r)³ = 15743.70. Equation 2: P×(1+r)⁵ = 17340.16. Divide E2 by E1.',
  - line 11502 OLD: hint2: '(1+r)² = 17340.16/15746.40.',
  - line 11502 NEW: hint2: '(1+r)² = 17340.16/15743.70.',
  - line 11508 OLD: displayAnswer: '(1+r)² = 17340.16 ÷ 15746.40 ≈ 1.1012',
  - line 11508 NEW: displayAnswer: '(1+r)² = 17340.16 ÷ 15743.70 ≈ 1.1012',
  - line 11509 OLD: explanation: 'Dividing eliminates P: (1+r)² = 17340.16/15746.40 ≈ 1.1012.'
  - line 11509 NEW: explanation: 'Dividing eliminates P: (1+r)² = 17340.16/15743.70 ≈ 1.1012.'
  - line 11514 OLD: hint2: 'Wait — exact answer: 17340.16/15746.40 = 1.1025 (check with clean numbers). √1.1025 = 1.05.',
  - line 11514 NEW: hint2: 'Wait — exact answer: 17340.16/15743.70 = 1.1025 (check with clean numbers). √1.1025 = 1.05.',
  - line 11519 OLD: explanation: '(1+r)² = 17340.16/15746.40 = 1.1025. √1.1025 = 1.05. r = 5%.'
  - line 11519 NEW: explanation: '(1+r)² = 17340.16/15743.70 = 1.1025. √1.1025 = 1.05. r = 5%.'
  - line 11524 OLD: hint2: 'P = 15746.40 ÷ 1.157625.',
  - line 11524 NEW: hint2: 'P = 15743.70 ÷ 1.157625.',
  - line 11529 OLD: explanation: 'P = 15746.40/1.157625 = £13 600.'
  - line 11529 NEW: explanation: 'P = 15743.70/1.157625 = £13 600.'
  - line 11552 OLD: grade4: '(1+r)² = 17340.16/15746.40 = 1.1025. r = 5%. P = 15746.40/1.157625 = £13 600.',
  - line 11552 NEW: grade4: '(1+r)² = 17340.16/15743.70 = 1.1025. r = 5%. P = 15743.70/1.157625 = £13 600.',
  - line 11553 OLD: grade6: 'Dividing gives (1+r)² = 1.1025, so r = 5%. P = 15746.40/1.05³ = £13 600.',
  - line 11553 NEW: grade6: 'Dividing gives (1+r)² = 1.1025, so r = 5%. P = 15743.70/1.05³ = £13 600.',
  - line 11554 OLD: grade8: '(1+r)² = 1.1025 → r=5%. P = 15746.40/1.05³ = £13 600. Check: 13600×1.05⁵ ≈ £17 340 ✓'
  - line 11554 NEW: grade8: '(1+r)² = 1.1025 → r=5%. P = 15743.70/1.05³ = £13 600. Check: 13600×1.05⁵ ≈ £17 340 ✓'
- grd-C02 text | figure brought in line with the corrected question
  - line 11501 OLD: hint1: 'Equation 1: P×(1+r)³ = 15743.70. Equation 2: P×(1+r)⁵ = 17340.16. Divide E2 by E1.',
  - line 11501 NEW: hint1: 'Equation 1: P×(1+r)³ = 15743.70. Equation 2: P×(1+r)⁵ = 17357.43. Divide E2 by E1.',
  - line 11502 OLD: hint2: '(1+r)² = 17340.16/15743.70.',
  - line 11502 NEW: hint2: '(1+r)² = 17357.43/15743.70.',
  - line 11508 OLD: displayAnswer: '(1+r)² = 17340.16 ÷ 15743.70 ≈ 1.1012',
  - line 11508 NEW: displayAnswer: '(1+r)² = 17357.43 ÷ 15743.70 ≈ 1.1012',
  - line 11509 OLD: explanation: 'Dividing eliminates P: (1+r)² = 17340.16/15743.70 ≈ 1.1012.'
  - line 11509 NEW: explanation: 'Dividing eliminates P: (1+r)² = 17357.43/15743.70 ≈ 1.1012.'
  - line 11514 OLD: hint2: 'Wait — exact answer: 17340.16/15743.70 = 1.1025 (check with clean numbers). √1.1025 = 1.05.',
  - line 11514 NEW: hint2: 'Wait — exact answer: 17357.43/15743.70 = 1.1025 (check with clean numbers). √1.1025 = 1.05.',
  - line 11519 OLD: explanation: '(1+r)² = 17340.16/15743.70 = 1.1025. √1.1025 = 1.05. r = 5%.'
  - line 11519 NEW: explanation: '(1+r)² = 17357.43/15743.70 = 1.1025. √1.1025 = 1.05. r = 5%.'
  - line 11552 OLD: grade4: '(1+r)² = 17340.16/15743.70 = 1.1025. r = 5%. P = 15743.70/1.157625 = £13 600.',
  - line 11552 NEW: grade4: '(1+r)² = 17357.43/15743.70 = 1.1025. r = 5%. P = 15743.70/1.157625 = £13 600.',
- grd-C02 text | value from the corrected figures
  - line 11503 OLD: hint3: '(1+r)² = 1.1012...',
  - line 11503 NEW: hint3: '(1+r)² = 1.1025',
- grd-C02 text | value from the corrected figures
  - line 11508 OLD: displayAnswer: '(1+r)² = 17357.43 ÷ 15743.70 ≈ 1.1012',
  - line 11508 NEW: displayAnswer: '(1+r)² = 17357.43 ÷ 15743.70 = 1.1025',
  - line 11509 OLD: explanation: 'Dividing eliminates P: (1+r)² = 17357.43/15743.70 ≈ 1.1012.'
  - line 11509 NEW: explanation: 'Dividing eliminates P: (1+r)² = 17357.43/15743.70 = 1.1025.'
- grd-C02 text | value from the corrected figures
  - line 11513 OLD: hint1: '1+r = √1.1012 ≈ 1.04938.',
  - line 11513 NEW: hint1: '1+r = √1.1025 = 1.05.',
- grd-C02 text | the hint no longer needs to correct the question's figures
  - line 11514 OLD: hint2: 'Wait — exact answer: 17357.43/15743.70 = 1.1025 (check with clean numbers). √1.1025 = 1.05.',
  - line 11514 NEW: hint2: 'So r = 0.05.',
- grd-C02 text | value from the corrected figures
  - line 11534 OLD: hint2: '13600 × 1.2762816 ≈ 17357 — round check.',
  - line 11534 NEW: hint2: '13600 × 1.2762816 = 17357.43.',
- grd-C02 text | value from the corrected figures
  - line 11540 OLD: displayAnswer: '13600 × 1.05⁵ = 13600 × 1.27628 ≈ £17 357 ≈ £17 340 ✓ (minor rounding)',
  - line 11540 NEW: displayAnswer: '13600 × 1.05⁵ = 13600 × 1.27628 = £17 357.43 ✓',
- grd-C02 step 2 | figure brought in line with the corrected question
  - prompt OLD: 'Find P using P × 1.05³ = 15746.40.'
  - prompt NEW: 'Find P using P × 1.05³ = 15743.70.'
- grd-C02 step 3 | figure brought in line with the corrected question
  - prompt OLD: 'Verify: does £13 600 × 1.05⁵ = £17 340.16?'
  - prompt NEW: 'Verify: does £13 600 × 1.05⁵ = £17 357.43?'
- grd-C01 step 1 | ambiguous: prompt asked for 1.06⁷ and 1.06⁸; the box (unit years) takes n = 9
  - prompt OLD: 'Calculate 1.06⁷ and 1.06⁸ to check which bracket n falls in.'
  - prompt NEW: 'Calculate 1.06⁸ and 1.06⁹. What is the smallest n for which 1.06ⁿ > 1.6?'
- ang-B03 step 0 | ambiguous: prompt named the theorem; the box takes y
  - prompt OLD: 'Use the exterior angle theorem: exterior angle = sum of two non-adjacent interior angles.'
  - prompt NEW: 'Use the exterior angle theorem: 4y + 3y = 112. Find y.'
- ang-B05 step 0 | ambiguous: prompt asked for an equation; the box takes x
  - prompt OLD: 'Use the property of alternate angles to form an equation.'
  - prompt NEW: 'Use the property of alternate angles to form an equation and solve it. x = ?'
- ang-C02 step 0 | ambiguous: prompt asked for an equation; the box takes x
  - prompt OLD: 'Form an equation using the angle sum of a quadrilateral (360°).'
  - prompt NEW: 'Form an equation using the angle sum of a quadrilateral (360°) and solve it. x = ?'
- shp-A01 step 1 | ambiguous: two sides asked for, one box
  - prompt OLD: 'Find the other sides of the larger triangle.'
  - prompt NEW: 'Find the other sides of the larger triangle. Enter the longer of the two.'
- shp-B02 step 0 | mismatch: prompt asked for ADE → ABC (2.5); the stored answer 0.4 is ABC → ADE
  - prompt OLD: 'Find the scale factor from triangle ADE to triangle ABC.'
  - prompt NEW: 'Find the scale factor from triangle ABC to triangle ADE: AD ÷ AB.'
- shp-B04 step 2 | ambiguous: in terms of π (500π/3) or a number; the box takes the number
  - prompt OLD: 'Find the volume of the larger cone.'
  - prompt NEW: 'Find the volume of the larger cone, to 1 decimal place.'
- av-A01 step 0 | ambiguous: answer in terms of π; the box takes the number in front of π
  - prompt OLD: 'Use the formula: A = πr².'
  - prompt NEW: 'Use the formula: A = πr². Enter the number in front of π.'
- av-A04 step 0 | ambiguous: answer in terms of π; the box takes the number in front of π
  - prompt OLD: 'Use the formula: V = (4/3)πr³.'
  - prompt NEW: 'Use the formula: V = (4/3)πr³. Enter the number in front of π.'
- av-B03 step 0 | ambiguous: answer in terms of π; the box takes the number in front of π
  - prompt OLD: '(a) Arc length = (angle/360) × 2πr.'
  - prompt NEW: '(a) Arc length = (angle/360) × 2πr. Enter the number in front of π.'
- av-B03 step 1 | ambiguous: answer in terms of π; the box takes the number in front of π
  - prompt OLD: '(b) Area of sector = (angle/360) × πr².'
  - prompt NEW: '(b) Area of sector = (angle/360) × πr². Enter the number in front of π.'
- av-B04 step 0 | ambiguous: answer in terms of π; the box takes the number in front of π
  - prompt OLD: 'Use: Surface area = 4πr².'
  - prompt NEW: 'Use: Surface area = 4πr². Enter the number in front of π.'
- av-B04 step 2 | ambiguous: 400π = 1256.6; the box takes 1260 (3 s.f.), which the prompt did not ask for
  - prompt OLD: 'What would the surface area be if the radius were doubled to 10 cm?'
  - prompt NEW: 'What would the surface area be if the radius were doubled to 10 cm? Give your answer to 3 significant figures.'
- av-C02 step 0 | ambiguous: answer in terms of π; the box takes the number in front of π
  - prompt OLD: 'Find the volume of the large sphere. (In terms of π.)'
  - prompt NEW: 'Find the volume of the large sphere in terms of π. Enter the number in front of π.'
- av-C02 step 1 | ambiguous: answer in terms of π; the box takes the number in front of π
  - prompt OLD: 'Find the volume of one small sphere. (In terms of π.)'
  - prompt NEW: 'Find the volume of one small sphere in terms of π. Enter the number in front of π.'
- tr-A05 step 0 | ambiguous: a coordinate pair asked for, one box
  - prompt OLD: '180° rotation about origin: (x, y) → (−x, −y). What is the image of (4, 2)?'
  - prompt NEW: '180° rotation about origin: (x, y) → (−x, −y). What is the x-coordinate of the image of (4, 2)?'

## Batch 3 (continued): questions rewritten because their figures or reasoning were wrong

- pyth-C03 whole question | mismatch: the question (hypotenuse x + 4, legs x and 4) gives x = 0, and the steps showed the author abandoning two setups mid-question; the last step answered a different triangle (legs x, x + 7, hypotenuse x + 8). Question and steps rewritten to that triangle, which the answer, hints and sample answers already used
  - OLD:
```js
      id: 'pyth-C03',
      subtopic: 'geo-pythagoras',
      band: 'C',
      marks: 4,
      question: 'In a right-angled triangle, the hypotenuse is (x+4) cm, one leg is x cm and the other is 4 cm. Find x and all three sides.',
      steps: [
        {
          prompt: 'Apply Pythagoras: x² + 4² = (x+4)². Expand the right side.',
          hint1: '(x+4)² = x² + 8x + 16.',
          hint2: 'So x² + 16 = x² + 8x + 16.',
          hint3: '0 = 8x. Hmm — let me simplify.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'x² + 16 = x² + 8x + 16',
          explanation: 'Expanding: x²+16 = x²+8x+16.',
        },
        {
          prompt: 'Simplify: subtract x² + 16 from both sides.',
          hint1: '0 = 8x.',
          hint2: 'x = 0. But that gives a degenerate triangle — the original problem needs a different setup.',
          hint3: 'This means the algebra gives x=0, which is impossible for a triangle. Recheck: the hypotenuse must be the longest side.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'This gives 0=8x → x=0: impossible. Reconsider which side is the hypotenuse.',
          explanation: 'If (x+4) is the hypotenuse, we get x=0. So the correct setup uses (x+4) ≠ hypotenuse.',
        },
        {
          prompt: 'Re-set up: legs are x and (x+4), hypotenuse is (2x−2). Use Pythagoras: x²+(x+4)²=(2x−2)². Expand and solve. Find x.',
          hint1: 'x²+x²+8x+16=4x²−8x+4. Simplify: 2x²+8x+16=4x²−8x+4.',
          hint2: '0=2x²−16x−12. x²−8x−6=0... Hmm, not clean. Try: hyp=(x+6), legs x and (x+2).',
          hint3: 'x²+(x+2)²=(x+6)²: x²+x²+4x+4=x²+12x+36 → x²−8x−32=0 → (x−12)(x+... not easy.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'Setup: legs = 3x and 4x, hypotenuse = 5x (Pythagorean ratio)',
          explanation: 'Using a scaled 3-4-5 triple. If one leg = 3x and other = 4x, then hyp = 5x.',
        },
        {
          prompt: 'Use: legs are x and (x+7), hypotenuse is (x+8). Solve x²+(x+7)²=(x+8)². Find x.',
          hint1: 'x²+x²+14x+49=x²+16x+64. So x²−2x−15=0.',
          hint2: '(x−5)(x+3)=0. x=5 (positive).',
          hint3: 'x=5. Sides: 5, 12, 13.',
          answer: 5,
          tolerance: 0,
          unit: 'cm',
          explanation: 'x²−2x−15=0 → (x−5)(x+3)=0 → x=5. Sides: 5, 12, 13 (classic triple).',
        },
      ],
      workedExample: {
        question: 'Legs x and (x+5), hypotenuse (x+10). Find x.',
        steps: ['x²+(x+5)²=(x+10)²', 'x²+x²+10x+25=x²+20x+100', 'x²−10x−75=0 → (x−15)(x+5)=0', 'x=15. Sides: 15, 20, 25'],
      },
      sampleAnswer: {
        grade4: 'x=5. Sides: 5 cm, 12 cm, 13 cm.',
        grade6: 'x²+(x+7)²=(x+8)². Expand: x²−2x−15=0. (x−5)(x+3)=0. x=5. Sides: 5,12,13.',
        grade8: '(x−5)(x+3)=0. x=5 (positive only). Sides 5,12,13. Check: 25+144=169=13² ✓',
      },
      examinerTip: 'Algebraic Pythagoras: expand carefully, cancel x² terms if possible, then solve the resulting quadratic.',
      auditStatus: 'pending',
```
  - NEW:
```js
      id: 'pyth-C03',
      subtopic: 'geo-pythagoras',
      band: 'C',
      marks: 4,
      question: 'In a right-angled triangle, the two shorter sides are x cm and (x + 7) cm. The hypotenuse is (x + 8) cm. Find x and all three sides.',
      steps: [
        {
          prompt: 'Apply Pythagoras: x² + (x + 7)² = (x + 8)². Expand both brackets.',
          hint1: '(x + 7)² = x² + 14x + 49.',
          hint2: '(x + 8)² = x² + 16x + 64.',
          hint3: 'x² + x² + 14x + 49 = x² + 16x + 64.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'x² + x² + 14x + 49 = x² + 16x + 64',
          explanation: 'Expanding both brackets gives 2x² + 14x + 49 = x² + 16x + 64.',
        },
        {
          prompt: 'Collect all the terms on one side to get a quadratic equal to 0.',
          hint1: 'Subtract x² + 16x + 64 from both sides.',
          hint2: '2x² − x² + 14x − 16x + 49 − 64 = 0.',
          hint3: 'x² − 2x − 15 = 0.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'x² − 2x − 15 = 0',
          explanation: 'Collecting terms gives x² − 2x − 15 = 0.',
        },
        {
          prompt: 'Factorise x² − 2x − 15 = 0.',
          hint1: 'Find two numbers that multiply to −15 and add to −2.',
          hint2: '−5 and 3.',
          hint3: '(x − 5)(x + 3) = 0.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: '(x − 5)(x + 3) = 0',
          explanation: '−5 × 3 = −15 and −5 + 3 = −2, so (x − 5)(x + 3) = 0.',
        },
        {
          prompt: 'Solve. A length must be positive, so find the positive value of x.',
          hint1: 'x − 5 = 0 or x + 3 = 0.',
          hint2: 'x = 5 or x = −3.',
          hint3: 'x = 5. Sides: 5, 12, 13.',
          answer: 5,
          tolerance: 0,
          unit: 'cm',
          explanation: 'x²−2x−15=0 → (x−5)(x+3)=0 → x=5. Sides: 5, 12, 13 (classic triple).',
        },
      ],
      workedExample: {
        question: 'Legs x and (x+5), hypotenuse (x+10). Find x.',
        steps: ['x²+(x+5)²=(x+10)²', 'x²+x²+10x+25=x²+20x+100', 'x²−10x−75=0 → (x−15)(x+5)=0', 'x=15. Sides: 15, 20, 25'],
      },
      sampleAnswer: {
        grade4: 'x=5. Sides: 5 cm, 12 cm, 13 cm.',
        grade6: 'x²+(x+7)²=(x+8)². Expand: x²−2x−15=0. (x−5)(x+3)=0. x=5. Sides: 5,12,13.',
        grade8: '(x−5)(x+3)=0. x=5 (positive only). Sides 5,12,13. Check: 25+144=169=13² ✓',
      },
      examinerTip: 'Algebraic Pythagoras: expand carefully, cancel x² terms if possible, then solve the resulting quadratic.',
      auditStatus: 'pending',
```
- cth-C04 whole question | wrong: with D = (4x − 15)° the opposite angles B + D came to 200°, so no cyclic quadrilateral fits; steps 3–4 then gave x = 33 and the answer 35 in a box asking for B + D. D is now (4x − 35)°, so x = 35, A = 115°, B = 75°, C = 65°, D = 105° and both pairs sum to 180°. The worked example had the same fault (Q + S = 109°); S is now (160 − x)°
  - OLD:
```js
      id: 'cth-C04', subtopic: 'geo-circles', band: 'C', marks: 4,
      question: 'ABCD is a cyclic quadrilateral. Angle A = (3x + 10)°, angle B = (2x + 5)°, angle C = (x + 30)°, angle D = (4x − 15)°. Find x and all four angles.',
      workedExample: {
        question: 'Cyclic quadrilateral: angle P = (2x+5)°, Q = (x+20)°, R = (3x−10)°, S = (x+15)°. Find x.',
        steps: [
          { explanation: 'Opposite angles sum to 180°: P + R = 180 and Q + S = 180' },
          { explanation: '(2x+5) + (3x−10) = 180; 5x − 5 = 180; 5x = 185; x = 37' },
          { explanation: 'Check: Q + S = (37+20) + (37+15) = 57 + 52 = 109 ≠ 180 → use all angles sum to 360° approach instead: 7x + 30 = 360; x = 47.14... Use opposite angles only' }
        ]
      },
      steps: [
        { prompt: 'State the two pairs of opposite angles in cyclic quadrilateral ABCD.', hint1: 'A and C are opposite; B and D are opposite', hint2: 'A + C = 180° and B + D = 180°', hint3: '(3x+10) + (x+30) = 180', answer: '4x+40=180', checkType: 'skip', displayAnswer: 'A + C = 180°: (3x+10) + (x+30) = 180', explanation: 'Opposite angles in a cyclic quadrilateral sum to 180°' },
        { prompt: 'Solve (3x + 10) + (x + 30) = 180 to find x.', hint1: '4x + 40 = 180', hint2: '4x = 140', hint3: 'x = 35', answer: '35', tolerance: 0.005, explanation: '4x + 40 = 180; 4x = 140; x = 35' },
        { prompt: 'Check with the other pair: B + D = (2×35+5) + (4×35−15). Calculate B + D.', hint1: 'B = 75°, D = 125°', hint2: '75 + 125 = 200 ... ', hint3: 'Check: 75 + 125 = 200 ≠ 180 — use all four sum to 360: 10x+30=360, x=33', answer: '33', tolerance: 0.005, explanation: 'Using all four angles: (3x+10)+(2x+5)+(x+30)+(4x-15)=360; 10x+30=360; x=33' },
        { prompt: 'With x = 33, find all four angles.', hint1: 'A = 3(33)+10 = 109°; B = 2(33)+5 = 71°; C = 33+30 = 63°; D = 4(33)-15 = 117°', hint2: 'Check A+C = 172, B+D = 188 — these should each be 180, so x = 35 from A+C=180 gives A=115, C=65, B=75, D=125', hint3: 'A=115°, B=75°, C=65°, D=125°', answer: '35', tolerance: 0.005, explanation: 'x = 35; A = 115°, B = 75°, C = 65°, D = 125°; check: A+C=180 ✓, B+D=200 — discrepancy means angles are overdetermined; use A+C=180 result: x=35' }
      ]
```
  - NEW:
```js
      id: 'cth-C04', subtopic: 'geo-circles', band: 'C', marks: 4,
      question: 'ABCD is a cyclic quadrilateral. Angle A = (3x + 10)°, angle B = (2x + 5)°, angle C = (x + 30)°, angle D = (4x − 35)°. Find x and all four angles.',
      workedExample: {
        question: 'Cyclic quadrilateral: angle P = (2x+5)°, Q = (x+20)°, R = (3x−10)°, S = (160−x)°. Find x.',
        steps: [
          { explanation: 'Opposite angles sum to 180°: P + R = 180 and Q + S = 180' },
          { explanation: '(2x+5) + (3x−10) = 180; 5x − 5 = 180; 5x = 185; x = 37' },
          { explanation: 'Check: Q + S = (37+20) + (160−37) = 57 + 123 = 180 ✓' }
        ]
      },
      steps: [
        { prompt: 'State the two pairs of opposite angles in cyclic quadrilateral ABCD.', hint1: 'A and C are opposite; B and D are opposite', hint2: 'A + C = 180° and B + D = 180°', hint3: '(3x+10) + (x+30) = 180', answer: '4x+40=180', checkType: 'skip', displayAnswer: 'A + C = 180°: (3x+10) + (x+30) = 180', explanation: 'Opposite angles in a cyclic quadrilateral sum to 180°' },
        { prompt: 'Solve (3x + 10) + (x + 30) = 180 to find x.', hint1: '4x + 40 = 180', hint2: '4x = 140', hint3: 'x = 35', answer: '35', tolerance: 0.005, explanation: '4x + 40 = 180; 4x = 140; x = 35' },
        { prompt: 'Check with the other pair: B + D = (2×35 + 5) + (4×35 − 35). Calculate B + D.', hint1: 'B = 75°, D = 105°', hint2: '75 + 105 = ?', hint3: '180, as opposite angles should be', answer: '180', tolerance: 0.005, explanation: 'B + D = 75 + 105 = 180°, so the other pair of opposite angles checks' },
        { prompt: 'With x = 35, find all four angles. Enter angle D.', hint1: 'A = 3(35)+10 = 115°; B = 2(35)+5 = 75°; C = 35+30 = 65°; D = 4(35)−35 = ?', hint2: 'Check: A + C = 180 and B + D = 180', hint3: 'A=115°, B=75°, C=65°, D=105°', answer: '105', tolerance: 0.005, explanation: 'x = 35; A = 115°, B = 75°, C = 65°, D = 105°; check: A+C=180 ✓, B+D=180 ✓' }
      ]
```
- cth-C02 whole question | wrong: the question named chord CB, and step 1 said CAB + DAB + CBD = 180° are angles on a straight line, which is false. The answer 45° holds when chord AB subtends 64° at C and 71° at D (angles in triangle CBD); question and step 1 now say that. The worked example contained unfinished working ("actually this needs specific diagram setup") and is rewritten the same way
  - OLD:
```js
      id: 'cth-C02', subtopic: 'geo-circles', band: 'C', marks: 4,
      question: 'Two circles intersect at points A and B. C is a point on the first circle and D is a point on the second circle, with C, A, D collinear. The chord CB subtends an angle of 64° at the circumference of the first circle. The chord DB subtends an angle of 71° at the circumference of the second circle. Find angle CBD.',
      workedExample: {
        question: 'Two intersecting circles. Chord PQ subtends 50° at first circle circumference. Chord QR subtends 65° at second circle circumference. P, Q, R collinear. Find angle PQR.',
        steps: [
          { explanation: 'Angle in semicircle at circumference... use the angles provided directly' },
          { explanation: 'Angle QPR = 50° (given); angle QRP = 65° ... actually this needs specific diagram setup' },
          { explanation: 'Use the fact that angle in same segment: angle CAB = 64° in first circle, angle DAB = 71° in second circle' },
          { explanation: 'Angle CBD = 180° − 64° − 71° = 45° (angles on a straight line with the circle angles)' }
        ]
      },
      steps: [
        { prompt: 'In the first circle, chord CB subtends 64° at the circumference. So angle CAB = 64°. In the second circle, chord DB subtends 71°. So angle DAB = 71°. What is the relationship between angle CAB and angle DAB?', hint1: 'C, A, D are collinear (on a straight line)', hint2: 'Angle CAB and angle DAB are on opposite sides of AB', hint3: 'Angle CAB + angle DAB + angle CBD = 180°', answer: '64 + 71 + angle CBD = 180', checkType: 'skip', displayAnswer: 'CAB + DAB + CBD = 180° (angles on straight line)', explanation: 'Since CAD is a straight line, angles CAB + DAB + angle CBD add to 180°' },
        { prompt: 'Calculate 64° + 71°.', hint1: '64 + 71 = 135', hint2: '135°', hint3: '135', answer: '135', tolerance: 0.005, unit: '°', explanation: '64° + 71° = 135°' },
        { prompt: 'Find angle CBD.', hint1: '180° − 135° = 45°', hint2: '45°', hint3: '45', answer: '45', tolerance: 0.005, unit: '°', explanation: 'Angle CBD = 180° − 135° = 45°' },
        { prompt: 'State your final answer for angle CBD.', hint1: '45°', hint2: '45', hint3: '45', answer: '45', tolerance: 0.005, unit: '°', explanation: 'Angle CBD = 45°' }
      ]
```
  - NEW:
```js
      id: 'cth-C02', subtopic: 'geo-circles', band: 'C', marks: 4,
      question: 'Two circles intersect at points A and B. C is a point on the first circle and D is a point on the second circle, with C, A, D collinear. The chord AB subtends an angle of 64° at C. The chord AB subtends an angle of 71° at D. Find angle CBD.',
      workedExample: {
        question: 'Two circles intersect at P and Q. R is on the first circle and S is on the second, with R, P, S collinear. Chord PQ subtends 50° at R and 65° at S. Find angle RQS.',
        steps: [
          { explanation: 'Angle QRS = angle QRP = 50° (the angle chord PQ subtends at R)' },
          { explanation: 'Angle QSR = angle QSP = 65° (the angle chord PQ subtends at S)' },
          { explanation: 'R, Q and S form a triangle, so angle RQS = 180° − 50° − 65° = 65°' }
        ]
      },
      steps: [
        { prompt: 'C, A, D lie on a straight line, so C, B and D form a triangle. Angle BCD = 64° and angle BDC = 71°. Which fact links the three angles of triangle CBD?', hint1: 'Angle BCD = angle BCA = 64°', hint2: 'Angle BDC = angle BDA = 71°', hint3: 'Angles in a triangle add up to 180°', answer: '64 + 71 + angle CBD = 180', checkType: 'skip', displayAnswer: 'BCD + BDC + CBD = 180° (angles in triangle CBD)', explanation: 'The three angles of triangle CBD add up to 180°' },
        { prompt: 'Calculate 64° + 71°.', hint1: '64 + 71 = 135', hint2: '135°', hint3: '135', answer: '135', tolerance: 0.005, unit: '°', explanation: '64° + 71° = 135°' },
        { prompt: 'Find angle CBD.', hint1: '180° − 135° = 45°', hint2: '45°', hint3: '45', answer: '45', tolerance: 0.005, unit: '°', explanation: 'Angle CBD = 180° − 135° = 45°' },
        { prompt: 'State your final answer for angle CBD.', hint1: '45°', hint2: '45', hint3: '45', answer: '45', tolerance: 0.005, unit: '°', explanation: 'Angle CBD = 45°' }
      ]
```
- trig-C02 whole question | wrong: step 3 said triangle ACD has a right angle at A; the right angle is at B. Steps 3–4 now use right-angled triangle BCD: BD = 7 tan 27.50° = 3.64, AD = 10 − BD = 6.36 (stored step 3 answer 6.35 was outside its tolerance of the true 6.355). Worked example contained abandoned working; rewritten the same way (PS = 5.00 cm, unchanged)
  - OLD:
```js
      id: 'trig-C02', subtopic: 'geo-trigonometry', band: 'C', marks: 4,
      question: 'In triangle ABC, AB = 10 cm, BC = 7 cm, angle ABC = 90°. Point D lies on AB such that CD bisects angle ACB. Find the length AD to 2 d.p.',
      workedExample: {
        question: 'In right-angled triangle PQR (right angle Q), PQ = 8 cm, QR = 6 cm. Point S on PQ such that RS bisects angle PRQ. Find PS to 2 d.p.',
        steps: [
          { explanation: 'PR = √(64+36) = 10 cm; tan(PRQ) = PQ/QR = 8/6, angle PRQ = 53.13°' },
          { explanation: 'RS bisects angle PRQ, so angle PRS = 26.565°' },
          { explanation: 'In triangle PRS: tan(26.565°) = PS/PR → PS = 10 × tan(26.565°) ... but use angle bisector theorem instead' },
          { explanation: 'Angle bisector: PS/SR = PR/QR = 10/6; SR = QR - ... use PS/QS = PR/QR with QS = QR = 6, PS/6 = 10/6, so this needs full setup. PS = PQ × PR/(PR+QR) = 8×10/16 = 5 cm' }
        ]
      },
      steps: [
        { prompt: 'Find AC using Pythagoras. AB = 10, BC = 7, right angle at B.', hint1: 'AC² = AB² + BC² = 100 + 49 = 149', hint2: 'AC = √149', hint3: '12.21', answer: '12.21', tolerance: 0.005, unit: 'cm', explanation: 'AC = √(100+49) = √149 ≈ 12.21 cm' },
        { prompt: 'Find angle ACB. From C, BC = 7 (adjacent) and AC ≈ 12.21 (hypotenuse). Find angle ACB.', hint1: 'cos(ACB) = BC/AC = 7/12.21 ≈ 0.5733', hint2: 'angle ACB = cos⁻¹(0.5733)', hint3: '55.01', answer: '55.01', tolerance: 0.005, unit: '°', explanation: 'cos(ACB) = 7/√149; angle ACB ≈ 55.01°' },
        { prompt: 'CD bisects angle ACB, so angle ACD = 55.01°/2 ≈ 27.5°. In triangle ACD, angle A = 90° (same right angle). Find AD using tan.', hint1: 'In triangle ACD: angle DAC = 90°, angle ACD = 27.5°, AC = 12.21 cm', hint2: 'tan(27.5°) = AD/AC', hint3: 'AD = 12.21 × tan(27.5°)', answer: '6.35', tolerance: 0.005, unit: 'cm', explanation: 'tan(27.5°) = AD/AC; AD = 12.21 × tan(27.5°) ≈ 12.21 × 0.5206 ≈ 6.36 cm' },
        { prompt: 'Calculate AD = AC × tan(27.5°) to 2 d.p.', hint1: 'tan(27.5°) ≈ 0.5206', hint2: '12.21 × 0.5206 ≈ 6.36', hint3: '6.36', answer: '6.36', tolerance: 0.01, unit: 'cm', explanation: 'AD ≈ 6.36 cm' }
      ]
```
  - NEW:
```js
      id: 'trig-C02', subtopic: 'geo-trigonometry', band: 'C', marks: 4,
      question: 'In triangle ABC, AB = 10 cm, BC = 7 cm, angle ABC = 90°. Point D lies on AB such that CD bisects angle ACB. Find the length AD to 2 d.p.',
      workedExample: {
        question: 'In right-angled triangle PQR (right angle Q), PQ = 8 cm, QR = 6 cm. Point S on PQ such that RS bisects angle PRQ. Find PS to 2 d.p.',
        steps: [
          { explanation: 'tan(PRQ) = PQ/QR = 8/6, so angle PRQ = 53.13°' },
          { explanation: 'RS bisects angle PRQ, so angle QRS = 26.57°' },
          { explanation: 'Triangle QRS has its right angle at Q: QS = 6 × tan(26.57°) = 3.00 cm' },
          { explanation: 'S lies on PQ, so PS = PQ − QS = 8 − 3 = 5.00 cm' }
        ]
      },
      steps: [
        { prompt: 'Find AC using Pythagoras. AB = 10, BC = 7, right angle at B.', hint1: 'AC² = AB² + BC² = 100 + 49 = 149', hint2: 'AC = √149', hint3: '12.21', answer: '12.21', tolerance: 0.005, unit: 'cm', explanation: 'AC = √(100+49) = √149 ≈ 12.21 cm' },
        { prompt: 'Find angle ACB. From C, BC = 7 (adjacent) and AC ≈ 12.21 (hypotenuse). Find angle ACB.', hint1: 'cos(ACB) = BC/AC = 7/12.21 ≈ 0.5733', hint2: 'angle ACB = cos⁻¹(0.5733)', hint3: '55.01', answer: '55.01', tolerance: 0.005, unit: '°', explanation: 'cos(ACB) = 7/√149; angle ACB ≈ 55.01°' },
        { prompt: 'CD bisects angle ACB, so angle BCD = 55.01° ÷ 2 ≈ 27.50°. Triangle BCD has its right angle at B. Find BD to 2 d.p.', hint1: 'tan(BCD) = BD/BC', hint2: 'BD = 7 × tan(27.50°)', hint3: '7 × 0.5207 ≈ 3.64', answer: '3.64', tolerance: 0.01, unit: 'cm', explanation: 'In right-angled triangle BCD, BD = BC × tan(BCD) = 7 × tan(27.50°) ≈ 3.64 cm' },
        { prompt: 'D lies on AB, so AD = AB − BD. Calculate AD to 2 d.p.', hint1: 'AD = 10 − BD', hint2: '10 − 3.645 ≈ 6.355', hint3: '6.36', answer: '6.36', tolerance: 0.01, unit: 'cm', explanation: 'AD = 10 − 3.645 ≈ 6.36 cm' }
      ]
```
- trig-C03 whole question | wrong: d and h came from rounded intermediates (18.2/0.3362): d = 54.12 m and h = 37.90 m, not the stored 54.14 and 37.92 (tolerance 0.005). Worked example also wrong: tan 32°/tan 18° = 1.9232, so d = 43.33 m and h = 27.08 m, not 44.77 m and 27.98 m
  - OLD:
```js
      id: 'trig-C03', subtopic: 'geo-trigonometry', band: 'C', marks: 4,
      question: 'A surveyor at point X measures the angles of elevation to the top T of a cliff from two positions: from X the angle is 20°, and from Y (50 m closer along the same horizontal) the angle is 35°. Calculate the height of the cliff to 2 d.p.',
      workedExample: {
        question: 'From point P, angle of elevation to cliff top = 18°. From Q, 40 m closer, angle = 32°. Find cliff height to 2 d.p.',
        steps: [
          { explanation: 'Let h = height, d = distance from Q to cliff base' },
          { explanation: 'tan 32° = h/d and tan 18° = h/(d+40)' },
          { explanation: 'h = d·tan 32°; d+40 = h/tan 18° = d·tan 32°/tan 18°' },
          { explanation: 'd(tan 32°/tan 18° − 1) = 40; d = 40/(1.8939 − 1) = 44.77 m; h = 44.77 × 0.6249 = 27.98 m' }
        ]
      },
      steps: [
        { prompt: 'Let h = height of cliff, d = distance from Y to cliff base. Write equations for tan 35° and tan 20°.', hint1: 'tan 35° = h/d and tan 20° = h/(d+50)', hint2: 'So h = d·tan 35°', hint3: 'And h/(d+50) = tan 20°', answer: 'h=d·tan35', checkType: 'skip', displayAnswer: 'h = d·tan35°; h/(d+50) = tan20°', explanation: 'Two equations from the two observation points' },
        { prompt: 'Substitute h = d·tan 35° into tan 20° = h/(d+50) and rearrange to find d.', hint1: 'tan 20° = d·tan 35°/(d+50)', hint2: 'd·tan 20° + 50·tan 20° = d·tan 35°', hint3: '50·tan 20° = d(tan 35° − tan 20°)', answer: '50tan20', checkType: 'skip', displayAnswer: '50·tan20° = d(tan35° − tan20°)', explanation: 'Rearranging gives d(tan 35° − tan 20°) = 50 tan 20°' },
        { prompt: 'Calculate d = 50·tan 20°/(tan 35° − tan 20°). Give your answer to 2 d.p.', hint1: 'tan 20° = 0.3640, tan 35° = 0.7002', hint2: '50 × 0.3640/(0.7002 − 0.3640)', hint3: '18.2/0.3362 = 54.14', answer: '54.14', tolerance: 0.005, unit: 'm', explanation: 'd = 50 × 0.3640/0.3362 = 54.14 m' },
        { prompt: 'Find height h = d × tan 35° to 2 d.p.', hint1: 'h = 54.14 × tan 35°', hint2: '54.14 × 0.7002', hint3: '37.92', answer: '37.92', tolerance: 0.005, unit: 'm', explanation: 'h = 54.14 × 0.7002 = 37.92 m' }
      ]
```
  - NEW:
```js
      id: 'trig-C03', subtopic: 'geo-trigonometry', band: 'C', marks: 4,
      question: 'A surveyor at point X measures the angles of elevation to the top T of a cliff from two positions: from X the angle is 20°, and from Y (50 m closer along the same horizontal) the angle is 35°. Calculate the height of the cliff to 2 d.p.',
      workedExample: {
        question: 'From point P, angle of elevation to cliff top = 18°. From Q, 40 m closer, angle = 32°. Find cliff height to 2 d.p.',
        steps: [
          { explanation: 'Let h = height, d = distance from Q to cliff base' },
          { explanation: 'tan 32° = h/d and tan 18° = h/(d+40)' },
          { explanation: 'h = d·tan 32°; d+40 = h/tan 18° = d·tan 32°/tan 18°' },
          { explanation: 'd(tan 32°/tan 18° − 1) = 40; d = 40/(1.9232 − 1) = 43.33 m; h = 43.33 × 0.6249 = 27.08 m' }
        ]
      },
      steps: [
        { prompt: 'Let h = height of cliff, d = distance from Y to cliff base. Write equations for tan 35° and tan 20°.', hint1: 'tan 35° = h/d and tan 20° = h/(d+50)', hint2: 'So h = d·tan 35°', hint3: 'And h/(d+50) = tan 20°', answer: 'h=d·tan35', checkType: 'skip', displayAnswer: 'h = d·tan35°; h/(d+50) = tan20°', explanation: 'Two equations from the two observation points' },
        { prompt: 'Substitute h = d·tan 35° into tan 20° = h/(d+50) and rearrange to find d.', hint1: 'tan 20° = d·tan 35°/(d+50)', hint2: 'd·tan 20° + 50·tan 20° = d·tan 35°', hint3: '50·tan 20° = d(tan 35° − tan 20°)', answer: '50tan20', checkType: 'skip', displayAnswer: '50·tan20° = d(tan35° − tan20°)', explanation: 'Rearranging gives d(tan 35° − tan 20°) = 50 tan 20°' },
        { prompt: 'Calculate d = 50·tan 20°/(tan 35° − tan 20°). Give your answer to 2 d.p.', hint1: 'tan 20° = 0.36397, tan 35° = 0.70021', hint2: '50 × 0.36397/(0.70021 − 0.36397)', hint3: '18.1985/0.33624 = 54.12', answer: '54.12', tolerance: 0.01, unit: 'm', explanation: 'd = 50 × 0.36397/0.33624 ≈ 54.12 m' },
        { prompt: 'Find height h = d × tan 35° to 2 d.p.', hint1: 'h = 54.124 × tan 35°', hint2: '54.124 × 0.70021', hint3: '37.90', answer: '37.90', tolerance: 0.01, unit: 'm', explanation: 'h = 54.124 × 0.70021 ≈ 37.90 m' }
      ]
```
- trig-C04 whole question | wrong: XZ² = 71.87, not the stored 72.14; angle YXZ = 83.71°, not the stored 83.47°; sin(YXZ) = 0.9940 (prompt said 0.9937). Worked example: AC = 5.85 and angle BAC is obtuse (cos BAC < 0), so BAC = 98.79°, not 80.87°
  - OLD:
```js
      id: 'trig-C04', subtopic: 'geo-trigonometry', band: 'C', marks: 4,
      question: 'Triangle XYZ has XY = 8 cm, YZ = 11 cm and angle XYZ = 50°. Using the cosine rule, find XZ to 2 d.p., then use the sine rule to find angle YXZ to 2 d.p.',
      workedExample: {
        question: 'Triangle ABC has AB = 6 cm, BC = 9 cm and angle ABC = 40°. Find AC to 2 d.p., then find angle BAC to 2 d.p.',
        steps: [
          { explanation: 'Cosine rule: AC² = AB² + BC² − 2·AB·BC·cos(ABC) = 36 + 81 − 108·cos 40° = 117 − 82.72 = 34.28; AC = 5.86 cm' },
          { explanation: 'Sine rule: sin(BAC)/BC = sin(ABC)/AC → sin(BAC) = 9·sin 40°/5.86 = 0.9877' },
          { explanation: 'angle BAC = sin⁻¹(0.9877) = 80.87°' }
        ]
      },
      steps: [
        { prompt: 'Apply the cosine rule: XZ² = XY² + YZ² − 2·XY·YZ·cos(XYZ). Substitute values.', hint1: 'XZ² = 8² + 11² − 2×8×11×cos 50°', hint2: 'XZ² = 64 + 121 − 176 × cos 50°', hint3: 'XZ² = 185 − 176 × 0.6428', answer: '72.14', tolerance: 0.05, explanation: 'XZ² = 185 − 176 × 0.6428 = 185 − 113.13 = 71.87; varies slightly with precision' },
        { prompt: 'Calculate XZ² = 185 − 176·cos 50°, then find XZ to 2 d.p.', hint1: '176 × cos 50° = 176 × 0.6428 = 113.13', hint2: 'XZ² = 185 − 113.13 = 71.87', hint3: 'XZ = √71.87 = 8.48', answer: '8.48', tolerance: 0.005, unit: 'cm', explanation: 'XZ = √71.87 ≈ 8.48 cm' },
        { prompt: 'Use the sine rule: sin(YXZ)/YZ = sin(XYZ)/XZ. Rearrange to find sin(YXZ).', hint1: 'sin(YXZ) = YZ × sin(XYZ)/XZ', hint2: 'sin(YXZ) = 11 × sin 50°/8.48', hint3: '11 × 0.7660/8.48 = 0.9937', answer: '0.9937', tolerance: 0.005, explanation: 'sin(YXZ) = 11 × sin 50° / 8.48 ≈ 0.9937' },
        { prompt: 'Find angle YXZ = sin⁻¹(0.9937) to 2 d.p.', hint1: 'Use your calculator: sin⁻¹(0.9937)', hint2: 'Check: is this the correct triangle? (angle sum must be < 180°)', hint3: '83.47', answer: '83.47', tolerance: 0.005, unit: '°', explanation: 'angle YXZ = sin⁻¹(0.9937) ≈ 83.47°' }
      ]
```
  - NEW:
```js
      id: 'trig-C04', subtopic: 'geo-trigonometry', band: 'C', marks: 4,
      question: 'Triangle XYZ has XY = 8 cm, YZ = 11 cm and angle XYZ = 50°. Using the cosine rule, find XZ to 2 d.p., then use the sine rule to find angle YXZ to 2 d.p.',
      workedExample: {
        question: 'Triangle ABC has AB = 6 cm, BC = 9 cm and angle ABC = 40°. Find AC to 2 d.p., then find angle BAC to 2 d.p.',
        steps: [
          { explanation: 'Cosine rule: AC² = AB² + BC² − 2·AB·BC·cos(ABC) = 36 + 81 − 108·cos 40° = 117 − 82.73 = 34.27; AC = 5.85 cm' },
          { explanation: 'Sine rule: sin(BAC)/BC = sin(ABC)/AC → sin(BAC) = 9·sin 40°/5.854 = 0.9883' },
          { explanation: 'BC is the longest side, so check whether BAC is obtuse: cos(BAC) = (36 + 34.27 − 81)/(2 × 6 × 5.854) < 0, so angle BAC = 180° − sin⁻¹(0.9883) = 98.79°' }
        ]
      },
      steps: [
        { prompt: 'Apply the cosine rule: XZ² = XY² + YZ² − 2·XY·YZ·cos(XYZ). Substitute values and calculate XZ² to 2 d.p.', hint1: 'XZ² = 8² + 11² − 2×8×11×cos 50°', hint2: 'XZ² = 64 + 121 − 176 × cos 50°', hint3: 'XZ² = 185 − 176 × 0.6428', answer: '71.87', tolerance: 0.05, explanation: 'XZ² = 185 − 176 × 0.6428 = 185 − 113.13 = 71.87' },
        { prompt: 'Calculate XZ² = 185 − 176·cos 50°, then find XZ to 2 d.p.', hint1: '176 × cos 50° = 176 × 0.6428 = 113.13', hint2: 'XZ² = 185 − 113.13 = 71.87', hint3: 'XZ = √71.87 = 8.48', answer: '8.48', tolerance: 0.005, unit: 'cm', explanation: 'XZ = √71.87 ≈ 8.48 cm' },
        { prompt: 'Use the sine rule: sin(YXZ)/YZ = sin(XYZ)/XZ. Find sin(YXZ) to 4 d.p. Use XZ = √71.87, not the rounded 8.48.', hint1: 'sin(YXZ) = YZ × sin(XYZ)/XZ', hint2: 'sin(YXZ) = 11 × sin 50°/√71.87', hint3: '11 × 0.76604/8.4776 = 0.9940', answer: '0.9940', tolerance: 0.0005, explanation: 'sin(YXZ) = 11 × sin 50° / 8.4776 ≈ 0.9940' },
        { prompt: 'Find angle YXZ = sin⁻¹(0.9940) to 2 d.p.', hint1: 'Use your calculator: sin⁻¹(0.9940)', hint2: 'Check: is this the correct triangle? (angle sum must be < 180°)', hint3: '83.71', answer: '83.71', tolerance: 0.02, unit: '°', explanation: 'angle YXZ = sin⁻¹(0.99397) ≈ 83.71°' }
      ]
```

## Batch 3 (continued): wrong values and prompts that did not name the number to enter

- trig-A05 step 0 | wrong: stored 5.88, but 7 × tan 40° = 5.87 (step 2 stores 5.87); the step now asks for tan 40°, which its hints already lead to
  - prompt OLD: 'Which trig ratio links opposite and adjacent? Write the formula for the opposite side.'
  - prompt NEW: 'Which trig ratio links opposite and adjacent? Enter tan 40° to 4 d.p.'
  - answer OLD: '5.88'
  - answer NEW: '0.8391'
  - tolerance OLD: 0.005
  - tolerance NEW: 0.0001
- trig-A05 text | hint matched to the new step 1 prompt
  - line 15508 OLD: { prompt: 'Which trig ratio links opposite and adjacent? Enter tan 40° to 4 d.p.', hint1: 'tan 40° = opposite/adjacent', hint2: 'opposite = adjacent × tan 40°', hint3: 'opposite = 7 × tan 40°', answer: '0.8391', tolerance: 0.0001, unit: 'cm', explanation: 'tan 40° = opp/adj, so opp = 7 × tan 40° = 7 × 0.8391 ≈ 5.87 cm' },
  - line 15508 NEW: { prompt: 'Which trig ratio links opposite and adjacent? Enter tan 40° to 4 d.p.', hint1: 'tan 40° = opposite/adjacent', hint2: 'opposite = adjacent × tan 40°', hint3: 'tan 40° ≈ 0.8391', answer: '0.8391', tolerance: 0.0001, unit: 'cm', explanation: 'tan 40° = opp/adj, so opp = 7 × tan 40° = 7 × 0.8391 ≈ 5.87 cm' },
- cth-C01 step 3 | wrong: angle BAC stands on arc BC, so it is half of angle BOC = 140°, i.e. 70° (check: OAB = 35°, OAC = 35°, sum 70°); stored 55 halved angle BOA, which stands on arc AB
  - prompt OLD: 'Use the angle at the centre theorem to find angle BAC.'
  - prompt NEW: 'Angle BAC stands on arc BC. Use the angle at the centre theorem to find angle BAC.'
  - answer OLD: '55'
  - answer NEW: '70'
- cth-C01 text | hints matched to the corrected answer
  - line 15913 OLD: { prompt: 'Angle BAC stands on arc BC. Use the angle at the centre theorem to find angle BAC.', hint1: 'Angle BAC = angle BOA / 2', hint2: '110°/2 = 55°', hint3: '55', answer: '70', tolerance: 0.005, unit: '°', explanation: 'Angle BAC = 110°/2 = 55°' }
  - line 15913 NEW: { prompt: 'Angle BAC stands on arc BC. Use the angle at the centre theorem to find angle BAC.', hint1: 'Angle BAC = angle BOC / 2', hint2: '140°/2 = 70°', hint3: '70', answer: '70', tolerance: 0.005, unit: '°', explanation: 'Angle BAC = 110°/2 = 55°' }
- cth-C01 text | explanation matched to the corrected answer
  - line 15913 OLD: { prompt: 'Angle BAC stands on arc BC. Use the angle at the centre theorem to find angle BAC.', hint1: 'Angle BAC = angle BOC / 2', hint2: '140°/2 = 70°', hint3: '70', answer: '70', tolerance: 0.005, unit: '°', explanation: 'Angle BAC = 110°/2 = 55°' }
  - line 15913 NEW: { prompt: 'Angle BAC stands on arc BC. Use the angle at the centre theorem to find angle BAC.', hint1: 'Angle BAC = angle BOC / 2', hint2: '140°/2 = 70°', hint3: '70', answer: '70', tolerance: 0.005, unit: '°', explanation: 'Angle BAC = 140°/2 = 70° (angle at the centre is twice the angle at the circumference on the same arc BC)' }
- cth-C01 text | worked example had the same error: BAC = 144°/2 = 72°, not 46°
  - line 15906 OLD: { explanation: 'Angle BOA = 360° − 144° − 124° = 92°; angle BAC = 92°/2 = 46°' }
  - line 15906 NEW: { explanation: 'Angle BAC stands on arc BC, so angle BAC = angle BOC ÷ 2 = 144° ÷ 2 = 72°' }
- tr-B04 step 1 | ambiguous: a coordinate pair asked for, one box
  - prompt OLD: 'Find the image of (2, 3).'
  - prompt NEW: 'Find the image of (2, 3). Enter its x-coordinate.'
- tr-B05 step 1 | ambiguous: a vector asked for, one box
  - prompt OLD: '90° clockwise rotation: (a, b) → (b, −a). Apply to (4, 1).'
  - prompt NEW: '90° clockwise rotation: (a, b) → (b, −a). Apply to (4, 1). Enter the second component.'
- tr-B05 step 2 | ambiguous: a coordinate pair asked for, one box
  - prompt OLD: 'Add the rotated vector to the centre (1,1). Find the image.'
  - prompt NEW: 'Add the rotated vector to the centre (1,1). Find the image. Enter its y-coordinate.'
- tr-B06 step 0 | ambiguous: three vertices asked for, one box
  - prompt OLD: 'Reflect A in the x-axis: (x,y)→(x,−y).'
  - prompt NEW: 'Reflect A in the x-axis: (x,y)→(x,−y). Enter the y-coordinate of the image of (3, 2).'
- tr-B06 step 1 | ambiguous: a coordinate pair asked for, one box
  - prompt OLD: 'Translate B by (−4, 1). Apply to (1, 0).'
  - prompt NEW: 'Translate B by (−4, 1). Apply to (1, 0). Enter the x-coordinate.'
- tr-B06 step 2 | ambiguous: a coordinate pair asked for, one box
  - prompt OLD: 'Apply translation to (3, 0).'
  - prompt NEW: 'Apply the translation to (3, 0). Enter the x-coordinate.'
- tr-B06 step 3 | ambiguous: a coordinate pair asked for, one box
  - prompt OLD: 'Apply translation to (3, −2). Give final vertex.'
  - prompt NEW: 'Apply the translation to (3, −2). Enter the y-coordinate of the final vertex.'
- tr-C01 step 0 | ambiguous: three image vertices asked for, one box (the hint already said to enter A's x-coordinate)
  - prompt OLD: 'Apply SF = −2: multiply each coordinate by −2.'
  - prompt NEW: 'Apply SF = −2: multiply each coordinate by −2. Enter the x-coordinate of A\'.'
- tr-C02 step 2 | ambiguous: a coordinate pair asked for, one box
  - prompt OLD: 'Apply M to P\'=(−1,3) to get P\'\'.'
  - prompt NEW: 'Apply M to P\'=(−1,3) to get P\'\'. Enter the x-coordinate of P\'\'.'
- tr-C03 step 2 | ambiguous: 90° clockwise or 270° anticlockwise
  - prompt OLD: 'What single transformation maps (2,1)→(1,−2)? The rule is (x,y)→(y,−x).'
  - prompt NEW: 'The rule (x,y)→(y,−x) maps (2,1) to (1,−2). It is a rotation about the origin. How many degrees clockwise?'
- pyth-A03 step 1 | mismatch: prompt asked a yes/no question; the box takes 25² = 625
  - prompt OLD: 'Does this equal 25²?'
  - prompt NEW: 'Calculate 25². Does it equal 7² + 24²?'
- trig-A01 step 0 | ambiguous: prompt asked which ratio; the box takes sin θ = 0.7
  - prompt OLD: 'Write the correct trig ratio: which one uses opposite and hypotenuse?'
  - prompt NEW: 'Which trig ratio uses opposite and hypotenuse? Calculate it as a decimal.'
- trig-B02 step 0 | mismatch: prompt asked which side is the height; the box takes 6
  - prompt OLD: 'Draw a diagram. Label the ladder (hypotenuse = 6 m) and the angle with the ground (72°). Which side is the height?'
  - prompt NEW: 'Draw a diagram. Label the ladder (hypotenuse) and the angle with the ground (72°). The height is the side opposite the angle. Enter the length of the hypotenuse.'
- trig-B03 step 0 | mismatch: prompt asked which sides are known and for the ratio; the box takes 20
  - prompt OLD: 'In this right-angled triangle, which sides are known and unknown? Write the trig ratio.'
  - prompt NEW: 'In this right-angled triangle, the height is opposite the 38° angle. The known side is adjacent to it. Enter the length of the adjacent side.'
- trig-B04 step 0 | mismatch: prompt asked to identify the sides; the box takes 7
  - prompt OLD: 'From angle P: which sides are PQ and PR? Identify adjacent and hypotenuse.'
  - prompt NEW: 'From angle P: PR is the adjacent side and PQ is the hypotenuse. Enter the length of the adjacent side.'
- trig-B05 step 0 | ambiguous: prompt asked which function; the box (km) takes the north component
  - prompt OLD: 'A bearing of 035° means 35° clockwise from north. Which trig function gives the north component?'
  - prompt NEW: 'A bearing of 035° means 35° clockwise from north. The north component is 12 × cos 35°. Calculate it to 2 d.p.'
- trig-B05 step 2 | ambiguous: both components asked for, one box
  - prompt OLD: 'State both components: North = ? km, East = ? km'
  - prompt NEW: 'State both components. Enter the north component in km.'
- trig-B06 step 1 | ambiguous: prompt asked for the ratio; the box takes tan A = 1.3333
  - prompt OLD: 'Now find angle A. From angle A, BC is opposite and AB is adjacent. Write the trig ratio.'
  - prompt NEW: 'Now find angle A. From angle A, BC is opposite and AB is adjacent. Calculate tan A as a decimal.'
- cth-A02 step 0 | ambiguous: prompt asked to state a theorem; the box (°) takes 55
  - prompt OLD: 'State the circle theorem that connects the angle at the centre to the angle at the circumference.'
  - prompt NEW: 'The angle at the centre is twice the angle at the circumference. Use this to find angle ACB.'
- cth-A03 step 0 | ambiguous: prompt asked to state a theorem; the box takes 180
  - prompt OLD: 'State the theorem for opposite angles in a cyclic quadrilateral.'
  - prompt NEW: 'Opposite angles in a cyclic quadrilateral add up to how many degrees?'
- cth-B03 step 0 | ambiguous: prompt asked to state a theorem; the box takes 36
  - prompt OLD: 'State the intersecting chords theorem.'
  - prompt NEW: 'The intersecting chords theorem says AX × XB = CX × XD. Calculate AX × XB.'
- cth-C01 step 0 | ambiguous: two angles asked for, one box
  - prompt OLD: 'Triangle OBC is isosceles (OB = OC = radii). Find angles OCB and BOC.'
  - prompt NEW: 'Triangle OBC is isosceles (OB = OC = radii). Find angle BOC.'
- cth-C03 step 3 | ambiguous: two answers asked for, one box
  - prompt OLD: 'State both answers: PT and angle POT.'
  - prompt NEW: 'State both answers: PT and angle POT. Enter angle POT.'
- vec-A01 step 0 | ambiguous: a vector asked for, one box
  - prompt OLD: 'Add the x-components and y-components separately.'
  - prompt NEW: 'Add the x-components and y-components separately. Enter the y-component of a + b.'
- vec-A03 step 0 | ambiguous: prompt asked for the formula; the box takes |m|
  - prompt OLD: 'Write the formula for |m| and substitute the components of m = (6, −4).'
  - prompt NEW: 'Write |m| = √(6² + (−4)²). Calculate |m| to 2 d.p.'

## Batch 3 (continued): unit

- trig-A05 step 0 | unit matched to the new step 1 (tan 40° has no unit)
  - unit OLD: 'cm'
  - unit NEW: ''

## Batch 4: bank questions 361–480 (vec-B03 … )

- vec-C04 whole question | wrong: the question asked to prove X, Y and B collinear, which is false (Y and B both lie on AB, X does not); step 4 and its hints admitted the contradiction ("Try again … state result correctly"), and the worked example ended "check the actual problem". Rewritten as a true proof: with OX = (4/5)a, XY = (1/5)b, so XY is parallel to OB. Worked example rewritten the same way (OX = (2/3)a, XY = (1/3)b)
  - OLD:
```js
      id: 'vec-C04', subtopic: 'geo-vectors', band: 'C', marks: 4,
      question: 'In triangle OAB, OA = a and OB = b. Point X lies on OA with OX = (2/5)a. Point Y lies on AB with AY:YB = 1:4. Prove that X, Y and B are collinear.',
      workedExample: {
        question: 'OA = a, OB = b. X on OA with OX = (1/3)a. Y on AB with AY:YB = 1:2. Prove X, Y, B collinear.',
        steps: [
          { explanation: 'OY = OA + AY = a + (1/3)(b−a) = (2/3)a + (1/3)b' },
          { explanation: 'XY = OY − OX = (2/3)a + (1/3)b − (1/3)a = (1/3)a + (1/3)b = (1/3)(a + b)' },
          { explanation: 'XB = OB − OX = b − (1/3)a' },
          { explanation: 'XY is not a multiple of XB unless specific values — check the actual problem' }
        ]
      },
      steps: [
        { prompt: 'Find OY. AY:YB = 1:4, so AY = (1/5)AB. Calculate OY.', hint1: 'AB = b − a; AY = (1/5)(b − a)', hint2: 'OY = OA + AY = a + (1/5)(b − a)', hint3: 'OY = (4/5)a + (1/5)b', answer: '(4/5)a + (1/5)b', checkType: 'skip', displayAnswer: 'OY = (4/5)a + (1/5)b', explanation: 'OY = a + (1/5)(b−a) = (4/5)a + (1/5)b' },
        { prompt: 'Find XY = OY − OX, where OX = (2/5)a.', hint1: 'XY = (4/5)a + (1/5)b − (2/5)a', hint2: 'XY = (2/5)a + (1/5)b', hint3: '(1/5)(2a + b)', answer: '(1/5)(2a+b)', checkType: 'skip', displayAnswer: 'XY = (1/5)(2a + b)', explanation: 'XY = (4/5 − 2/5)a + (1/5)b = (2/5)a + (1/5)b = (1/5)(2a + b)' },
        { prompt: 'Find XB = OB − OX.', hint1: 'XB = b − (2/5)a', hint2: '−(2/5)a + b', hint3: '(1/5)(−2a + 5b)', answer: '(1/5)(-2a+5b)', checkType: 'skip', displayAnswer: 'XB = b − (2/5)a', explanation: 'XB = b − (2/5)a' },
        { prompt: 'Is XY a scalar multiple of XB? If XY = k × XB, find k and state the conclusion.', hint1: 'XY = (2/5)a + (1/5)b; XB = b − (2/5)a = (−2/5)a + b', hint2: 'If XY = k XB: (2/5) = k(−2/5) → k = −1; and (1/5) = k(1) = −1 — contradiction', hint3: 'Try again: XY = (1/5)XB? (1/5)(2a+b) vs (1/5)(5b−2a): these differ. Actually check if XB = 2×... No — they are NOT multiples, so not collinear from this route — state result correctly', answer: 'not collinear from these vectors', checkType: 'skip', displayAnswer: 'XY is not a scalar multiple of XB — X, Y, B are not collinear in this configuration', explanation: 'XY = (2/5)a + (1/5)b and XB = −(2/5)a + b; for XY = k·XB: 2/5 = −2k/5 gives k=−1, but 1/5 = k·1 = −1 contradiction. X, Y, B are NOT collinear.' }
      ]
```
  - NEW:
```js
      id: 'vec-C04', subtopic: 'geo-vectors', band: 'C', marks: 4,
      question: 'In triangle OAB, OA = a and OB = b. Point X lies on OA with OX = (4/5)a. Point Y lies on AB with AY:YB = 1:4. Prove that XY is parallel to OB.',
      workedExample: {
        question: 'OA = a, OB = b. X on OA with OX = (2/3)a. Y on AB with AY:YB = 1:2. Prove XY is parallel to OB.',
        steps: [
          { explanation: 'OY = OA + AY = a + (1/3)(b−a) = (2/3)a + (1/3)b' },
          { explanation: 'XY = OY − OX = (2/3)a + (1/3)b − (2/3)a = (1/3)b' },
          { explanation: 'XY = (1/3)b = (1/3)OB, a multiple of OB, so XY is parallel to OB' }
        ]
      },
      steps: [
        { prompt: 'Find OY. AY:YB = 1:4, so AY = (1/5)AB. Calculate OY.', hint1: 'AB = b − a; AY = (1/5)(b − a)', hint2: 'OY = OA + AY = a + (1/5)(b − a)', hint3: 'OY = (4/5)a + (1/5)b', answer: '(4/5)a + (1/5)b', checkType: 'skip', displayAnswer: 'OY = (4/5)a + (1/5)b', explanation: 'OY = a + (1/5)(b−a) = (4/5)a + (1/5)b' },
        { prompt: 'Find XY = OY − OX, where OX = (4/5)a.', hint1: 'XY = (4/5)a + (1/5)b − (4/5)a', hint2: 'The a terms cancel', hint3: 'XY = (1/5)b', answer: '(1/5)b', checkType: 'skip', displayAnswer: 'XY = (1/5)b', explanation: 'XY = (4/5 − 4/5)a + (1/5)b = (1/5)b' },
        { prompt: 'Write XY as a multiple of OB.', hint1: 'OB = b', hint2: 'XY = (1/5)b', hint3: 'XY = (1/5)OB', answer: '(1/5)OB', checkType: 'skip', displayAnswer: 'XY = (1/5)OB', explanation: 'XY = (1/5)b and OB = b, so XY = (1/5)OB' },
        { prompt: 'State the conclusion.', hint1: 'Two vectors are parallel if one is a multiple of the other', hint2: 'XY = (1/5)OB', hint3: 'XY is parallel to OB', answer: 'parallel', checkType: 'skip', displayAnswer: 'XY = (1/5)OB, so XY is parallel to OB', explanation: 'XY is a multiple of OB, so XY is parallel to OB. It is one fifth of the length of OB.' }
      ]
```
- prb-A05 step 0 | mismatch: prompt asked for a list; the box takes P(multiple of 3) = 2/8
  - prompt OLD: 'List the multiples of 3 from 1 to 8.'
  - prompt NEW: 'List the multiples of 3 from 1 to 8, then find P(multiple of 3).'
- prb-B06 step 2 | mismatch: the step asks for a comment (displayAnswer "Probably fair …") but the box checked 290, the answer to step 2; the step is now unchecked like other comment steps
  - checkType OLD: (none)
  - checkType NEW: 'skip'
- prb-C01 step 2 | mismatch: prompt asked how many girls prefer maths (14); the box takes P(maths | girl) = 7/15
  - prompt OLD: 'For P(maths | girl), restrict to the 30 girls only. How many girls prefer maths?'
  - prompt NEW: 'For P(maths | girl), restrict to the 30 girls only. 14 of them prefer maths. Find P(maths | girl).'
- prb-C01 step 3 | mismatch: prompt asked how many are boys (12); the box takes P(boy | English) = 3/7
  - prompt OLD: 'For P(boy | English), restrict to the 28 who prefer English. How many are boys?'
  - prompt NEW: 'For P(boy | English), restrict to the 28 who prefer English. 12 of them are boys. Find P(boy | English).'
- comb-C01 step 2 | mismatch: the step asks what you notice (displayAnswer "P(A|B) = P(A), so independent") but the box checked 0.4; the step is now unchecked like other comment steps
  - checkType OLD: (none)
  - checkType NEW: 'skip'
- vec-B04 step 1 | ambiguous: prompt asked for the calculation; the box takes √41 = 6.40
  - prompt OLD: 'Find |u − v| = |(5, 4)|. Write the calculation.'
  - prompt NEW: 'Find |u − v| = |(5, 4)| = √(5² + 4²). Calculate it to 2 d.p.'
- vec-B05 step 2 | ambiguous: √17 or 4.12
  - prompt OLD: 'Calculate |AB| = |(−1, 4)|.'
  - prompt NEW: 'Calculate |AB| = |(−1, 4)| to 2 d.p.'
- prb-A03 step 0 | ambiguous: a count and a probability asked for, one box
  - prompt OLD: 'How many hearts are in the pack? Find P(heart).'
  - prompt NEW: 'How many hearts are in the pack? Find P(heart) as a decimal.'
- prb-A03 step 1 | ambiguous: a count and a probability asked for, one box
  - prompt OLD: 'How many kings are in the pack? Find P(king).'
  - prompt NEW: 'How many kings are in the pack? Find P(king) to 4 d.p.'
- prb-A04 step 0 | ambiguous: a count and a probability asked for, one box
  - prompt OLD: 'How many counters in total? Find P(blue).'
  - prompt NEW: 'How many counters in total? Find P(blue) as a decimal.'
- prb-B04 step 2 | ambiguous: two probabilities asked for, one box
  - prompt OLD: 'State P(A) and P(B).'
  - prompt NEW: 'State P(A) and P(B). Enter P(B).'
- prb-B05 step 0 | ambiguous: a count and a probability asked for, one box
  - prompt OLD: 'Find P(red queen). How many red queens are there?'
  - prompt NEW: 'How many red queens are there? Find P(red queen) to 4 d.p.'
- prb-C02 step 0 | ambiguous: prompt asked for the equation; the box takes 10 (unit text "k coefficient gives 10k = 1" gave the answer away)
  - prompt OLD: 'Mutually exclusive and exhaustive means the probabilities sum to 1. Write the equation.'
  - prompt NEW: 'Mutually exclusive and exhaustive means the probabilities sum to 1: 2k + 5k + 3k = 1. What is the total coefficient of k?'
  - unit OLD: 'k coefficient gives 10k = 1'
  - unit NEW: ''
- prb-C02 step 2 | ambiguous: two probabilities asked for, one box
  - prompt OLD: 'Find P(A) and P(C).'
  - prompt NEW: 'Find P(A) and P(C). Enter P(C).'
- comb-A03 step 1 | ambiguous: a count of pairs and a probability asked for, one box
  - prompt OLD: 'List the pairs (d1, d2) that sum to 7. Find P(sum = 7).'
  - prompt NEW: 'List the pairs (d1, d2) that sum to 7. Find P(sum = 7) as a decimal.'
- comb-B05 step 1 | ambiguous: 9/15 or its numerator
  - prompt OLD: 'Use the addition rule: P(A or B) = P(A) + P(B) - P(A and B). Convert to 15ths.'
  - prompt NEW: 'Use the addition rule: P(A or B) = P(A) + P(B) − P(A and B). Work in 15ths. Give P(A or B) as a decimal.'
- tree-A02 step 1 | ambiguous: P(second red) or the product
  - prompt OLD: 'After removing a red counter, find P(red on second draw). Then multiply.'
  - prompt NEW: 'After removing a red counter, find P(red on second draw). Multiply to find P(both red) as a decimal.'
- tree-A05 step 0 | ambiguous: two probabilities asked for, one box (P(blue) is used in the next step)
  - prompt OLD: 'Find P(yellow on first draw). The counter is replaced, so what is P(blue on second draw)?'
  - prompt NEW: 'Find P(yellow on first draw).'
- venn-A01 step 1 | ambiguous: two probabilities asked for, one box
  - prompt OLD: 'P(A|B) = P(A∩B)/P(B). Find P(B) and then P(A|B).'
  - prompt NEW: 'P(A|B) = P(A∩B)/P(B). Find P(B) and then P(A|B). Enter P(A|B).'
- venn-B02 step 0 | ambiguous: two counts asked for, one box
  - prompt OLD: 'Find n(car only) and n(bike only).'
  - prompt NEW: 'Find n(car only) and n(bike only). Enter n(car only).'

## Batch 4 (continued): comment steps and prompts that did not name the number to enter

- venn-C01 step 3 | mismatch: the step asks for an explanation (displayAnswer "P(A|B) = P(A) — confirms independence") but the box checked 1/3, the answer to step 3; now unchecked like other comment steps
  - checkType OLD: (none)
  - checkType NEW: 'skip'
- venn-C02 step 3 | mismatch: the step asks a yes/no check but the box checked 0.22, the answer to step 3; now unchecked
  - checkType OLD: (none)
  - checkType NEW: 'skip'
- venn-C04 step 3 | mismatch: the step asks for an explanation but the box checked 0.7, the answer to step 3; now unchecked
  - checkType OLD: (none)
  - checkType NEW: 'skip'
- cond-B05 step 2 | mismatch: the step asks whether A and B are independent but the box checked 0.4, the answer to step 2; now unchecked
  - checkType OLD: (none)
  - checkType NEW: 'skip'
- cond-C01 step 3 | mismatch: the step asks for an interpretation but the box checked 0.6, the answer to step 3; now unchecked
  - checkType OLD: (none)
  - checkType NEW: 'skip'
- cond-C02 step 3 | mismatch: the step asks whether A is independent of (B and C) but the box checked 1/3, the answer to step 3; now unchecked
  - checkType OLD: (none)
  - checkType NEW: 'skip'
- cond-C03 step 3 | mismatch: the step asks for an interpretation but the box checked 0.25, the answer to step 3; now unchecked
  - checkType OLD: (none)
  - checkType NEW: 'skip'
- cond-C04 step 3 | mismatch: the step asks for an interpretation but the box checked 0.375, the answer to step 3; now unchecked
  - checkType OLD: (none)
  - checkType NEW: 'skip'
- venn-B05 step 1 | ambiguous: prompt asked how many (18); the box takes P(H | G') = 3/5
  - prompt OLD: "Find P(H | G'). Of the 30 not in G, how many are in H?"
  - prompt NEW: 'Find P(H | G\'). Of the 30 not in G, 18 are in H. Find the probability.'
- cond-A01 step 0 | ambiguous: prompt asked for the formula; the box takes 0.5
  - prompt OLD: 'Write the formula for conditional probability.'
  - prompt NEW: 'Use the formula P(B|A) = P(A and B) ÷ P(A). Calculate P(B|A).'
- cond-A02 step 0 | ambiguous: two counts asked for, one box (unit "balls remain")
  - prompt OLD: 'After drawing a red ball (not replaced), how many balls remain? How many are red?'
  - prompt NEW: 'After drawing a red ball (not replaced), how many balls remain?'
- cond-B02 step 0 | ambiguous: two probabilities asked for, one box; the box takes P(A' and B)
  - prompt OLD: "Find P(A') and calculate P(A' and B)."
  - prompt NEW: 'Find P(A\'), then calculate P(A\' and B).'
- cond-C01 step 0 | ambiguous: two probabilities asked for, one box; the box takes P(B)
  - prompt OLD: "Find P(A') and use total probability to find P(B)."
  - prompt NEW: 'Find P(A\'), then use total probability to find P(B).'
- stat-averages-B04 step 0 | ambiguous: sum or mean
  - prompt OLD: 'List all 8 values, find the sum and calculate the mean.'
  - prompt NEW: 'List all 8 values, find the sum and calculate the mean. Enter the mean.'

## Batch 5: bank questions 481–600 (stat-scatter-B03 … )

- stat-scatter-C02 step 0 | ambiguous: prompt asked to verify; the box takes y at x = 6
  - prompt OLD: 'Verify the mean point (6, 15.6) lies on the line y = 2.4x + 1.2.'
  - prompt NEW: 'Verify the mean point (6, 15.6) lies on the line y = 2.4x + 1.2. Calculate y when x = 6.'
- stat-boxplots-B02 step 0 | ambiguous: two IQRs asked for, one box
  - prompt OLD: 'Find the IQR for both classes. Which class has greater spread?'
  - prompt NEW: 'Find the IQR for both classes. Enter the IQR for Class B.'

## Batch 5 (continued): wrong value and prompts that did not name the number to enter

- pow-A05 step 0 | wrong: 4⁻² = 1/16 = 0.0625; stored 16 marked 0.0625 wrong and 16 right (the typed fraction 1/16 still matches displayAnswer)
  - answer OLD: 16
  - answer NEW: 0.0625
  - tolerance OLD: 0
  - tolerance NEW: 0.0001
- stf-B04 step 2 | ambiguous: standard form and ordinary number asked for, one box
  - prompt OLD: 'Write the full answer in standard form and as an ordinary number.'
  - prompt NEW: 'Write the full answer in standard form. Enter it as an ordinary number.'
- stf-B05 step 2 | ambiguous: one box for a standard-form answer; it takes the ordinary number
  - prompt OLD: 'State the full answer in standard form.'
  - prompt NEW: 'State the full answer in standard form. Enter it as an ordinary number.'
- stf-B06 step 2 | ambiguous: coefficient, power or seconds; the box (unit s) takes 500
  - prompt OLD: 'Divide powers: 10¹¹ ÷ 10⁸ = 10³. Adjust 0.5 × 10³ to standard form.'
  - prompt NEW: 'Divide powers: 10¹¹ ÷ 10⁸ = 10³. Adjust 0.5 × 10³ to standard form. Enter the time in seconds as an ordinary number.'
- stf-C03 step 1 | ambiguous: power or value; the box takes 1440
  - prompt OLD: 'Multiply the powers: 10⁵ × 10⁻³. Then adjust to standard form.'
  - prompt NEW: 'Multiply the powers: 10⁵ × 10⁻³. Then adjust to standard form. Enter the result as an ordinary number.'
- stf-C03 step 3 | ambiguous: one box for a standard-form answer; it takes 1190
  - prompt OLD: 'Subtract and write in standard form: 1440 − 250.'
  - prompt NEW: 'Subtract 1440 − 250 and write the answer in standard form. Enter it as an ordinary number.'
- stf-C04 step 2 | ambiguous: power or value; the box takes the power
  - prompt OLD: 'Find the power of 10: 10⁻⁵ ÷ 10⁻⁶.'
  - prompt NEW: 'Find the power of 10: 10⁻⁵ ÷ 10⁻⁶ = 10ⁿ. Enter n.'
- int-B02 step 0 | ambiguous: two values asked for, one box
  - prompt OLD: 'What is the degree of rounding? What is half of this?'
  - prompt NEW: 'What is the degree of rounding? Enter half of it.'
- int-B02 step 2 | ambiguous: two bounds, one box
  - prompt OLD: 'State the full error interval.'
  - prompt NEW: 'State the full error interval. Enter the upper bound.'
- int-C03 step 1 | ambiguous: an equation asked for, one box
  - prompt OLD: 'Subtract x from 100x.'
  - prompt NEW: 'Subtract x from 100x. 99x = ?'
- int-C04 step 2 | ambiguous: one box for a standard-form answer; it takes 600
  - prompt OLD: 'Write 600.25 in standard form to 3 significant figures.'
  - prompt NEW: 'Write 600.25 in standard form to 3 significant figures. Enter it as an ordinary number.'
- pow-B02 step 0 | ambiguous: two powers asked for, one box
  - prompt OLD: 'Write 4² and 8² as powers of 2.'
  - prompt NEW: 'Write 4² and 8² as powers of 2. 4² = 2 to the power of what?'
- pow-B04 step 2 | ambiguous: the y index or the whole expression; the box takes the index
  - prompt OLD: 'Apply the multiplication law to the y terms: y² × y³. State the full simplified expression.'
  - prompt NEW: 'Apply the multiplication law to the y terms: y² × y³. Enter the power of y.'
- pow-B06 step 0 | ambiguous: coefficient or index
  - prompt OLD: 'Expand (2x²)³ using the power of a product rule.'
  - prompt NEW: 'Expand (2x²)³ using the power of a product rule. Enter the number in front of x.'
- pow-B06 step 2 | ambiguous: coefficient or index
  - prompt OLD: 'Multiply 8x⁶ × x⁴ to get the final simplified expression.'
  - prompt NEW: 'Multiply 8x⁶ × x⁴ to get the final simplified expression. Enter the power of x.'
- pow-C03 step 0 | ambiguous: an equation asked for, one box
  - prompt OLD: 'Write both sides as powers of 2.'
  - prompt NEW: 'Write both sides as powers of 2. 4^x = 2 to the power of (?)x. Enter the number in front of x.'
- bnd-A02 step 1 | ambiguous: upper bound or the interval
  - prompt OLD: 'Find the upper bound and write the error interval.'
  - prompt NEW: 'Find the upper bound and write the error interval. Enter the upper bound.'
- bnd-A03 step 1 | ambiguous: upper bound or the interval
  - prompt OLD: 'Find the upper bound and state the error interval.'
  - prompt NEW: 'Find the upper bound and state the error interval. Enter the upper bound.'
- bnd-A04 step 1 | ambiguous: upper bound or the interval
  - prompt OLD: 'Find the upper bound and write the error interval.'
  - prompt NEW: 'Find the upper bound and write the error interval. Enter the upper bound.'
- bnd-A05 step 1 | ambiguous: upper bound or the interval
  - prompt OLD: 'Find the upper bound and write the error interval.'
  - prompt NEW: 'Find the upper bound and write the error interval. Enter the upper bound.'
- bnd-B05 step 0 | ambiguous: two bounds asked for, one box (unit kg)
  - prompt OLD: 'Find the upper bound of m and of v.'
  - prompt NEW: 'Find the upper bound of m and of v. Enter the upper bound of m.'
- nrt-A03 step 1 | ambiguous: two shares asked for, one box
  - prompt OLD: 'Calculate each share.'
  - prompt NEW: 'Calculate each share. Enter the larger share.'
- nrt-A04 step 0 | ambiguous: two lengths asked for, one box
  - prompt OLD: 'Convert to the same units.'
  - prompt NEW: 'Convert to the same units. Write 3 m in centimetres.'
- nrt-A04 step 1 | ambiguous: two parts asked for, one box
  - prompt OLD: 'Simplify 120 : 300 by dividing both by the HCF.'
  - prompt NEW: 'Simplify 120 : 300 by dividing both by the HCF. Enter the second part of the simplified ratio.'
- nrt-B05 step 2 | ambiguous: three shares asked for, one box
  - prompt OLD: 'Calculate each share: 1 part, 2 parts, and 5 parts.'
  - prompt NEW: 'Calculate each share: 1 part, 2 parts, and 5 parts. Enter the largest share.'
- nrt-B06 step 2 | ambiguous: two numbers asked for, one box
  - prompt OLD: 'Calculate Year 10 and Year 11 numbers.'
  - prompt NEW: 'Calculate the Year 10 and Year 11 numbers. Enter the Year 11 number.'
- nrt-C02 step 2 | ambiguous: two numbers asked for, one box
  - prompt OLD: 'Find Year 10 and Year 11 student numbers.'
  - prompt NEW: 'Find the Year 10 and Year 11 student numbers. Enter the Year 11 number.'
- nrt-C04 step 3 | ambiguous: prompt asked for a conclusion; the box (unit g) takes the shortfall, 80
  - prompt OLD: 'State the conclusion clearly.'
  - prompt NEW: 'State the conclusion. How many grams of butter is Ben short?'

## Marks and audit status (task 2.2, last step)

marks set to steps.length where they differed (87 questions); auditStatus 'verified' where every checked step recomputes and passes (567 of 600).

- pct-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pct-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pct-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pct-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pct-B02 | marks | 3 → 2 (steps.length)
- pct-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pct-B03 | marks | 3 → 2 (steps.length)
- pct-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pct-C01 | marks | 4 → 2 (steps.length)
- pct-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pct-C02 | marks | 4 → 2 (steps.length)
- pct-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- frc-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- frc-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- frc-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- frc-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- frc-B02 | marks | 3 → 2 (steps.length)
- frc-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- frc-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- frc-C01 | marks | 4 → 3 (steps.length)
- frc-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- frc-C02 | marks | 3 → 2 (steps.length)
- rat-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- rat-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- rat-A03 | marks | 3 → 2 (steps.length)
- rat-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- rat-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- rat-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- rat-B03 | marks | 3 → 2 (steps.length)
- rat-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- rat-C01 | marks | 4 → 2 (steps.length)
- rat-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- rat-C02 | marks | 4 → 2 (steps.length)
- rat-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- rat-A04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- rat-A05 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- rat-B04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- rat-B05 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- rat-B06 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- rat-C03 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- rat-C04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- stf-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stf-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stf-A03 | marks | 2 → 1 (steps.length)
- stf-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stf-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stf-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stf-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stf-C01 | marks | 4 → 2 (steps.length)
- stf-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stf-C02 | marks | 4 → 3 (steps.length)
- stf-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- eq-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- eq-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- eq-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- eq-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- eq-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- eq-B03 | marks | 4 → 3 (steps.length)
- eq-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- eq-C01 | marks | 4 → 3 (steps.length)
- eq-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- eq-C02 | marks | 4 → 3 (steps.length)
- eq-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sub-A01 | marks | 2 → 1 (steps.length)
- sub-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sub-A02 | marks | 2 → 1 (steps.length)
- sub-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sub-A03 | marks | 2 → 1 (steps.length)
- sub-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sub-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sub-B02 | marks | 3 → 1 (steps.length)
- sub-B03 | marks | 3 → 2 (steps.length)
- sub-C01 | marks | 4 → 3 (steps.length)
- sub-C02 | marks | 4 → 3 (steps.length)
- sub-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- int-A01 | marks | 2 → 1 (steps.length)
- int-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- int-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- int-A03 | marks | 2 → 1 (steps.length)
- int-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pow-A01 | marks | 2 → 1 (steps.length)
- pow-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pow-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pow-A03 | marks | 2 → 1 (steps.length)
- pow-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pow-B01 | marks | 3 → 2 (steps.length)
- pow-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- bnd-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- bnd-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- bnd-C01 | marks | 4 → 3 (steps.length)
- bnd-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- nrt-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- nrt-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- nrt-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ineq-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ineq-A02 | marks | 2 → 1 (steps.length)
- ineq-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- seq-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- seq-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- seq-B01 | marks | 3 → 2 (steps.length)
- seq-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- gph-A01 | marks | 3 → 2 (steps.length)
- gph-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- gph-A02 | marks | 3 → 2 (steps.length)
- gph-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- gph-B01 | marks | 4 → 2 (steps.length)
- gph-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sim-A01 | marks | 4 → 2 (steps.length)
- sim-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sim-A02 | marks | 4 → 2 (steps.length)
- sim-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sim-B01 | marks | 4 → 3 (steps.length)
- sim-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- fn-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- fn-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- fn-C01 | marks | 3 → 2 (steps.length)
- eq-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- eq-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- eq-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- eq-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- eq-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- eq-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- eq-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sub-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sub-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sub-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sub-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sub-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sub-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sub-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- fn-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- fn-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- fn-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- fn-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- fn-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- fn-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- fn-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- fn-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- fn-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- fn-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- fn-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- fn-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- gph-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- gph-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- gph-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- gph-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- gph-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- gph-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- gph-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- gph-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- gph-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- gph-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- gph-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- gph-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ineq-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ineq-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ineq-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ineq-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ineq-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ineq-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ineq-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ineq-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ineq-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ineq-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ineq-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ineq-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- seq-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- seq-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- seq-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- seq-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- seq-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- seq-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- seq-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- seq-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- seq-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- seq-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- seq-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- seq-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sim-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sim-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sim-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sim-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sim-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sim-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sim-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sim-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sim-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sim-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sim-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sim-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- quad-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- quad-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- quad-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- quad-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- quad-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- quad-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- quad-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- quad-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- quad-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- quad-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- quad-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- quad-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- quad-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- quad-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- quad-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pro-A01 | marks | 3 → 2 (steps.length)
- pro-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pro-A02 | marks | 3 → 2 (steps.length)
- pro-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pro-B01 | marks | 3 → 2 (steps.length)
- pro-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pro-A03 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pro-A04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pro-A05 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pro-B02 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pro-B03 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pro-B04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pro-B05 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pro-B06 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pro-C01 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pro-C02 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pro-C03 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pro-C04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- spd-A01 | marks | 2 → 1 (steps.length)
- spd-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- spd-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- spd-B01 | marks | 4 → 3 (steps.length)
- spd-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- spd-A03 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- spd-A04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- spd-A05 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- spd-B02 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- spd-B03 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- spd-B04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- spd-B05 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- spd-B06 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- spd-C01 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- spd-C02 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- spd-C03 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- spd-C04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pch-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pch-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pch-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pch-A03 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pch-A04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pch-A05 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pch-B02 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pch-B03 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pch-B04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pch-B05 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pch-B06 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pch-C01 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pch-C02 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pch-C03 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- pch-C04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- cmp-A01 | marks | 2 → 1 (steps.length)
- cmp-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cmp-A02 | marks | 2 → 1 (steps.length)
- cmp-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cmp-B01 | marks | 3 → 2 (steps.length)
- cmp-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cmp-A03 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- cmp-A04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- cmp-A05 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- cmp-B02 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- cmp-B03 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- cmp-B04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- cmp-B05 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- cmp-B06 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- cmp-C01 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- cmp-C02 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- cmp-C03 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- cmp-C04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- grd-A01 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- grd-A02 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- grd-A03 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- grd-A04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- grd-A05 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- grd-B01 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- grd-B02 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- grd-B03 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- grd-B04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- grd-B05 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- grd-B06 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- grd-C01 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- grd-C02 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- grd-C03 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- grd-C04 | auditStatus | auditStatus: 'pending' → auditStatus: 'verified'
- ang-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ang-A02 | marks | 3 → 2 (steps.length)
- ang-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ang-B01 | marks | 3 → 2 (steps.length)
- ang-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ang-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ang-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ang-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ang-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ang-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ang-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ang-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ang-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ang-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ang-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ang-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- ang-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- shp-A01 | marks | 3 → 2 (steps.length)
- shp-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- shp-A02 | marks | 2 → 1 (steps.length)
- shp-B01 | marks | 3 → 2 (steps.length)
- shp-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- shp-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- shp-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- shp-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- shp-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- shp-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- shp-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- shp-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- shp-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- shp-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- shp-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- av-A01 | marks | 2 → 1 (steps.length)
- av-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- av-A02 | marks | 3 → 2 (steps.length)
- av-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- av-B01 | marks | 4 → 3 (steps.length)
- av-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- av-A03 | marks | 2 → 1 (steps.length)
- av-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- av-A04 | marks | 2 → 1 (steps.length)
- av-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- av-A05 | marks | 2 → 1 (steps.length)
- av-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- av-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- av-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- av-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- av-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- av-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- av-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- av-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- av-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- av-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tr-A01 | marks | 3 → 1 (steps.length)
- tr-A02 | marks | 3 → 1 (steps.length)
- tr-B01 | marks | 4 → 2 (steps.length)
- tr-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tr-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tr-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tr-A05 | marks | 2 → 1 (steps.length)
- tr-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tr-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tr-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tr-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tr-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tr-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tr-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tr-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tr-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tr-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pyth-A01 | marks | 3 → 2 (steps.length)
- pyth-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pyth-A02 | marks | 3 → 2 (steps.length)
- pyth-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pyth-B01 | marks | 4 → 2 (steps.length)
- pyth-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pyth-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pyth-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pyth-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pyth-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pyth-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pyth-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pyth-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pyth-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pyth-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pyth-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pyth-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pyth-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- trig-A01 | marks | 3 → 2 (steps.length)
- trig-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- trig-A02 | marks | 3 → 2 (steps.length)
- trig-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- trig-B01 | marks | 4 → 2 (steps.length)
- trig-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- trig-A03 | auditStatus | (none) → auditStatus: 'verified'
- trig-A04 | auditStatus | (none) → auditStatus: 'verified'
- trig-A05 | auditStatus | (none) → auditStatus: 'verified'
- trig-B02 | auditStatus | (none) → auditStatus: 'verified'
- trig-B03 | auditStatus | (none) → auditStatus: 'verified'
- trig-B04 | auditStatus | (none) → auditStatus: 'verified'
- trig-B05 | auditStatus | (none) → auditStatus: 'verified'
- trig-B06 | auditStatus | (none) → auditStatus: 'verified'
- trig-C01 | auditStatus | (none) → auditStatus: 'verified'
- trig-C02 | auditStatus | (none) → auditStatus: 'verified'
- trig-C03 | auditStatus | (none) → auditStatus: 'verified'
- trig-C04 | auditStatus | (none) → auditStatus: 'verified'
- cth-A01 | marks | 2 → 1 (steps.length)
- cth-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cth-B01 | marks | 3 → 2 (steps.length)
- cth-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cth-A02 | auditStatus | (none) → auditStatus: 'verified'
- cth-A03 | auditStatus | (none) → auditStatus: 'verified'
- cth-A04 | auditStatus | (none) → auditStatus: 'verified'
- cth-A05 | auditStatus | (none) → auditStatus: 'verified'
- cth-B02 | auditStatus | (none) → auditStatus: 'verified'
- cth-B03 | auditStatus | (none) → auditStatus: 'verified'
- cth-B04 | auditStatus | (none) → auditStatus: 'verified'
- cth-B05 | auditStatus | (none) → auditStatus: 'verified'
- cth-C01 | auditStatus | (none) → auditStatus: 'verified'
- cth-C02 | auditStatus | (none) → auditStatus: 'verified'
- cth-C03 | auditStatus | (none) → auditStatus: 'verified'
- cth-C04 | auditStatus | (none) → auditStatus: 'verified'
- vec-A01 | marks | 2 → 1 (steps.length)
- vec-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- vec-B01 | marks | 4 → 2 (steps.length)
- vec-A03 | auditStatus | (none) → auditStatus: 'verified'
- vec-B04 | auditStatus | (none) → auditStatus: 'verified'
- vec-B05 | auditStatus | (none) → auditStatus: 'verified'
- vec-C03 | auditStatus | (none) → auditStatus: 'verified'
- prb-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- prb-A02 | marks | 3 → 2 (steps.length)
- prb-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- prb-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- prb-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- prb-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- prb-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- prb-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- prb-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- prb-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- prb-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- prb-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- prb-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- prb-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- prb-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- prb-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- comb-A01 | marks | 3 → 2 (steps.length)
- comb-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- comb-B01 | marks | 4 → 2 (steps.length)
- comb-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- comb-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- comb-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- comb-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- comb-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- comb-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- comb-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- comb-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- comb-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- comb-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- comb-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- comb-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- comb-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- comb-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tree-A01 | marks | 4 → 2 (steps.length)
- tree-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tree-B01 | marks | 5 → 3 (steps.length)
- tree-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tree-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tree-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tree-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tree-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tree-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tree-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tree-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tree-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tree-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tree-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tree-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tree-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- tree-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- venn-A01 | marks | 3 → 2 (steps.length)
- venn-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- venn-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- venn-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- venn-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- venn-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- venn-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- venn-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- venn-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- venn-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- venn-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- venn-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- venn-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- venn-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- venn-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- venn-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cond-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cond-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cond-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cond-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cond-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cond-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cond-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cond-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cond-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cond-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cond-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cond-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cond-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cond-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cond-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- avg-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- avg-B01 | marks | 4 → 3 (steps.length)
- avg-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-averages-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-averages-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-averages-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-averages-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-averages-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-averages-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-averages-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-averages-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-averages-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-averages-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-averages-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-averages-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-averages-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- chr-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- chr-B01 | marks | 3 → 1 (steps.length)
- chr-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-charts-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-charts-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-charts-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-charts-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-charts-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-charts-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-charts-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-charts-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-charts-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-charts-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-charts-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-charts-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- sct-A01 | marks | 3 → 2 (steps.length)
- sct-B01 | marks | 4 → 3 (steps.length)
- sct-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-scatter-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-scatter-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-scatter-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-scatter-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-scatter-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-scatter-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-scatter-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-scatter-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-scatter-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-scatter-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-scatter-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cum-A01 | marks | 4 → 2 (steps.length)
- cum-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- cum-B01 | marks | 4 → 2 (steps.length)
- stat-cumulative-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-cumulative-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-cumulative-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-cumulative-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-cumulative-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-cumulative-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-cumulative-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-cumulative-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-cumulative-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-cumulative-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-cumulative-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-cumulative-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-boxplots-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-boxplots-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-boxplots-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-boxplots-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-boxplots-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-boxplots-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-boxplots-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-boxplots-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-boxplots-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-boxplots-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-boxplots-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-boxplots-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-boxplots-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-sampling-A01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-sampling-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-sampling-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-sampling-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-sampling-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-sampling-B01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-sampling-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-sampling-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-sampling-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-sampling-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-sampling-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-sampling-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stat-sampling-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pct-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pct-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pct-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pct-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pct-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pct-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pct-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- frc-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- frc-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- frc-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- frc-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- frc-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- frc-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- frc-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stf-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stf-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stf-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stf-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stf-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stf-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- stf-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- int-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- int-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- int-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- int-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- int-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- int-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- int-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- int-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- int-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- int-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- int-C04 | marks | 4 → 3 (steps.length)
- int-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pow-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pow-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pow-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pow-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pow-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pow-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pow-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pow-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pow-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pow-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- pow-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- bnd-A02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- bnd-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- bnd-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- bnd-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- bnd-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- bnd-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- bnd-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- bnd-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- bnd-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- bnd-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- bnd-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- bnd-C04 | marks | 4 → 3 (steps.length)
- bnd-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- nrt-A03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- nrt-A04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- nrt-A05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- nrt-B02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- nrt-B03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- nrt-B04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- nrt-B05 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- nrt-B06 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- nrt-C01 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- nrt-C02 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- nrt-C03 | marks | 4 → 3 (steps.length)
- nrt-C03 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'
- nrt-C04 | auditStatus | auditStatus: 'pending', → auditStatus: 'verified'

## Bored-student tester fixes (2026-10-17)

Found by tools/site-test.js (M1-M6). After the fixes, `node tools/maths-recompute.js --all`: 1376 checked steps, 0 wrong, 0 mismatch, 0 ambiguous.

- quad-A04 | steps[0].prompt | the prompt gave the answer and step 2's answer | '(x + 3)² = x² + 2(3)x + 9. What is the coefficient of x?' → 'Expand (x + 3)² = (x + 3)(x + 3). What is the coefficient of x?'
- rat-B06 | steps[2].prompt | "Enter 1 for yes" on a step with no answer box | 'Check: does 30 litres split in ratio 3:2 give 18 and 12? Enter 1 for yes.' → 'Check: split 30 litres in the ratio 3:2. It gives 18 litres of red and 12 litres of yellow.'
- rat-B06 | steps[2].hint2 | same | 'Both values match — confirm with 1.' → 'Both values match.'
- rat-B06 | steps[2].hint3 | same | 'Enter 1.' → '18 and 12, as in steps 1 and 2.'
- pch-A02 | steps[0].prompt | a question on a step with no answer box | '£350 is what percentage of the original price?' → 'After a 30% reduction, £350 is 100% − 30% = 70% of the original price.'
- stat-boxplots-A01 | steps[2] | a step with a definite answer (50%) had no answer box | answer 0, unit '', checkType 'skip' → answer 50, unit '%', checked (tools/maths-recompute-fns.js: null → 50)
- stat-boxplots-A05 | question, steps[1] hint2, hint3, displayAnswer, explanation, sampleAnswer | the question asks which half of the box is wider but both halves were 7 | median 23 → 21; hint2 'Lower: 23 − 16 = 7; upper: 30 − 23 = 7.' → 'Lower: 21 − 16 = 5; upper: 30 − 21 = 9.'; hint3 'Both halves are equal (7 each).' → 'The upper half is wider (9 > 5).'; displayAnswer 'Both halves equal (7 each) — symmetric distribution' → 'Upper half wider (9 > 5) — positive skew'; explanation and sampleAnswer grade4/6/8 rewritten to the same figures. IQR (step 1) unchanged at 14.
- seq-A04, sim-A02, sim-A05, rat-B06 | locked step prompts gave earlier answers | no content change: js/maths.js now hides a locked step's prompt until it unlocks (MATHS_INPUT_FIXES)

## Website tester content faults (brief 2026-10-17, step 6e)

- cmp-A03 workedExample | the worked example had the same answer as the question (8 g/cm³), so it gave the answer away
  - workedExample.question OLD: 'A block has mass 280 g and volume 35 cm³. Find its density.'
  - workedExample.question NEW: 'A block has mass 280 g and volume 40 cm³. Find its density.'
  - workedExample.steps[1] OLD: 'D = 280 ÷ 35 = <strong>8 g/cm³</strong>'
  - workedExample.steps[1] NEW: 'D = 280 ÷ 40 = <strong>7 g/cm³</strong>'
- cmp-B04 question | step 3 asks for the mass in kg, which the question did not ask for
  - question OLD: 'A liquid has density 0.8 g/cm³. It is poured into a container with base area 50 cm² to a depth of 6 cm. Calculate the mass of the liquid.'
  - question NEW: 'A liquid has density 0.8 g/cm³. It is poured into a container with base area 50 cm² to a depth of 6 cm. Calculate the mass of the liquid in kilograms.'
- cmp-B04 workedExample | its mass (240 g = 0.24 kg) was the question's own answer
  - workedExample.question OLD: 'Liquid density 1.2 g/cm³ fills a container 40 cm² base, 5 cm deep. Find the mass in kg.'
  - workedExample.question NEW: 'Liquid density 1.2 g/cm³ fills a container 40 cm² base, 6 cm deep. Find the mass in kg.'
  - workedExample.steps OLD: 'Volume = 40 × 5 = 200 cm³' / 'Mass = 1.2 × 200 = 240 g' / '240 g = <strong>0.24 kg</strong>'
  - workedExample.steps NEW: 'Volume = 40 × 6 = 240 cm³' / 'Mass = 1.2 × 240 = 288 g' / '288 g = <strong>0.288 kg</strong>'

## Tutor flow brief (docs/briefs/2026-10-17-tutor-flow.md step 5a), 2026-10-17
- spd-C02 steps[2] (statement, no answer box): in a topic test a statement now shows its prompt and keeps its worked answer until the question is done (js/maths.js, MATHS_INPUT_FIXES). This prompt printed "d/120" while the marked last step's answer is d = 120.
  - prompt OLD: 'Solve: find the value of d/120 by combining fractions. What is the combined fraction coefficient of d?'
  - prompt NEW: 'Combine d/60 + d/40 into one fraction of d.'
