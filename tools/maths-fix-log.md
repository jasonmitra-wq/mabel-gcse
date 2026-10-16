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
