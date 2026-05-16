/* ============================================================
   MATHS-QUESTIONS.JS — Scaffolded question bank
   Covers: percentages, fractions, ratio & proportion,
           standard form, linear equations, substitution.
   Each question: steps[] (with hints) + workedExample.
   Band A = grades 3-4, Band B = grades 5-6, Band C = grades 7-8.
   ============================================================ */

const MathsQuestions = (() => {

  // ─────────────────────────────────────────────────────────────
  // QUESTION BANK
  // ─────────────────────────────────────────────────────────────

  const _bank = [

    // ══════════════════════════════════════════════════════════
    // PERCENTAGES (num-percentages)
    // ══════════════════════════════════════════════════════════

    // Band A ─────────────────────────────────────────────────
    {
      id: 'pct-A01', subtopic: 'num-percentages', band: 'A', marks: 3,
      question: 'A jacket costs £85. It is reduced by 35%. What is the sale price?',
      steps: [
        {
          prompt: 'Write 35% as a decimal.',
          hint1: 'To convert a percentage to a decimal, divide by 100.',
          hint2: '35 ÷ 100 = ?',
          hint3: '35 ÷ 100 = 0.35',
          answer: 0.35, tolerance: 0, unit: '',
          explanation: 'Dividing by 100 converts any percentage to its decimal multiplier.',
        },
        {
          prompt: 'Calculate the discount amount.',
          hint1: 'Multiply the original price by the decimal.',
          hint2: '£85 × 0.35 = ?',
          hint3: '£85 × 0.35 = £29.75',
          answer: 29.75, tolerance: 0, unit: '£',
          explanation: 'Decimal multiplier × original price gives the portion being removed.',
        },
        {
          prompt: 'Find the sale price.',
          hint1: 'Subtract the discount from the original.',
          hint2: '£85 − £29.75 = ?',
          hint3: '£85 − £29.75 = £55.25',
          answer: 55.25, tolerance: 0, unit: '£',
          explanation: 'Original price minus discount = sale price.',
        },
      ],
      workedExample: {
        question: 'A shirt costs £60. It is reduced by 20%. Find the sale price.',
        steps: [
          'Step 1 — decimal: 20 ÷ 100 = <strong>0.20</strong>',
          'Step 2 — discount: £60 × 0.20 = <strong>£12.00</strong>',
          'Step 3 — sale price: £60 − £12 = <strong>£48.00</strong>',
        ],
      },
    },
    {
      id: 'pct-A02', subtopic: 'num-percentages', band: 'A', marks: 2,
      question: 'A school has 450 pupils. 54% of them walk to school. How many pupils walk?',
      steps: [
        {
          prompt: 'Write 54% as a decimal.',
          hint1: 'Divide the percentage by 100.',
          hint2: '54 ÷ 100 = ?',
          hint3: '54 ÷ 100 = 0.54',
          answer: 0.54, tolerance: 0, unit: '',
          explanation: 'Percentage ÷ 100 = decimal multiplier.',
        },
        {
          prompt: 'Calculate how many pupils walk.',
          hint1: 'Multiply the total number of pupils by your decimal.',
          hint2: '450 × 0.54 = ?',
          hint3: '450 × 0.54 = 243',
          answer: 243, tolerance: 0, unit: '',
          explanation: '450 × 0.54 gives 54% of 450.',
        },
      ],
      workedExample: {
        question: 'A club has 200 members. 35% are under 18. How many are under 18?',
        steps: [
          'Step 1 — decimal: 35 ÷ 100 = <strong>0.35</strong>',
          'Step 2 — multiply: 200 × 0.35 = <strong>70</strong>',
        ],
      },
    },
    {
      id: 'pct-A03', subtopic: 'num-percentages', band: 'A', marks: 2,
      question: 'Increase £120 by 15%.',
      steps: [
        {
          prompt: 'Write the multiplier for a 15% increase.',
          hint1: 'For an increase, add 15% to 100%.',
          hint2: '100% + 15% = 115%, and 115 ÷ 100 = ?',
          hint3: '115 ÷ 100 = 1.15',
          answer: 1.15, tolerance: 0, unit: '',
          explanation: 'Increase multiplier = 1 + (percentage/100). Here, 1 + 0.15 = 1.15.',
        },
        {
          prompt: 'Calculate the new amount.',
          hint1: 'Multiply £120 by your multiplier.',
          hint2: '£120 × 1.15 = ?',
          hint3: '£120 × 1.15 = £138',
          answer: 138, tolerance: 0, unit: '£',
          explanation: 'Multiplying by 1.15 gives the original plus 15% in one step.',
        },
      ],
      workedExample: {
        question: 'Increase £80 by 25%.',
        steps: [
          'Step 1 — multiplier: 100% + 25% = 125%, so 125 ÷ 100 = <strong>1.25</strong>',
          'Step 2 — new amount: £80 × 1.25 = <strong>£100</strong>',
        ],
      },
    },

    // Band B ─────────────────────────────────────────────────
    {
      id: 'pct-B01', subtopic: 'num-percentages', band: 'B', marks: 3,
      question: 'A car was bought for £12,000 and sold for £9,600. Calculate the percentage decrease.',
      steps: [
        {
          prompt: 'Find the decrease in value.',
          hint1: 'Subtract the selling price from the buying price.',
          hint2: '£12,000 − £9,600 = ?',
          hint3: '£12,000 − £9,600 = £2,400',
          answer: 2400, tolerance: 0, unit: '£',
          explanation: 'The actual decrease = original price − new price.',
        },
        {
          prompt: 'Divide the decrease by the original price.',
          hint1: 'Percentage change = (change ÷ original) × 100.',
          hint2: '2400 ÷ 12000 = ?',
          hint3: '2400 ÷ 12000 = 0.2',
          answer: 0.2, tolerance: 0, unit: '',
          explanation: 'Dividing gives the decimal fraction of the original.',
        },
        {
          prompt: 'Convert to a percentage.',
          hint1: 'Multiply your decimal by 100.',
          hint2: '0.2 × 100 = ?',
          hint3: '0.2 × 100 = 20%',
          answer: 20, tolerance: 0, unit: '%',
          explanation: 'Multiply by 100 to convert a decimal to a percentage.',
        },
      ],
      workedExample: {
        question: 'A phone was bought for £500 and sold for £400. Find the percentage decrease.',
        steps: [
          'Step 1 — decrease: £500 − £400 = <strong>£100</strong>',
          'Step 2 — divide: 100 ÷ 500 = <strong>0.2</strong>',
          'Step 3 — percentage: 0.2 × 100 = <strong>20%</strong>',
        ],
      },
    },
    {
      id: 'pct-B02', subtopic: 'num-percentages', band: 'B', marks: 3,
      question: 'After a 20% pay rise, Emily earns £27,600 per year. What was her original salary?',
      steps: [
        {
          prompt: 'Write the multiplier that was applied to her original salary.',
          hint1: 'A 20% rise means the original was multiplied by 1.20.',
          hint2: '100% + 20% = 120%, written as 1.20.',
          hint3: 'The multiplier is 1.20.',
          answer: 1.2, tolerance: 0.001, unit: '',
          explanation: 'For a percentage increase, multiplier = 1 + (percent/100).',
        },
        {
          prompt: 'Divide her new salary by the multiplier to find the original.',
          hint1: 'Original = new salary ÷ multiplier.',
          hint2: '£27,600 ÷ 1.20 = ?',
          hint3: '£27,600 ÷ 1.20 = £23,000',
          answer: 23000, tolerance: 0, unit: '£',
          explanation: 'Dividing reverses the multiplication, giving the original amount.',
        },
      ],
      workedExample: {
        question: 'After a 25% increase, a price is £75. What was the original price?',
        steps: [
          'Step 1 — multiplier: 100% + 25% = 125% → <strong>1.25</strong>',
          'Step 2 — original: £75 ÷ 1.25 = <strong>£60</strong>',
        ],
      },
    },
    {
      id: 'pct-B03', subtopic: 'num-percentages', band: 'B', marks: 3,
      question: 'A TV costs £340 after a 15% reduction. What was the original price?',
      steps: [
        {
          prompt: 'Write the multiplier used after the reduction.',
          hint1: 'A 15% reduction means 85% of the original price remains.',
          hint2: '100% − 15% = 85%, written as 0.85.',
          hint3: 'The multiplier is 0.85.',
          answer: 0.85, tolerance: 0.001, unit: '',
          explanation: 'Reduction multiplier = 1 − (percent/100). Here, 1 − 0.15 = 0.85.',
        },
        {
          prompt: 'Find the original price by dividing.',
          hint1: 'Original = reduced price ÷ 0.85.',
          hint2: '£340 ÷ 0.85 = ?',
          hint3: '£340 ÷ 0.85 = £400',
          answer: 400, tolerance: 0, unit: '£',
          explanation: 'Dividing by the multiplier undoes the percentage reduction.',
        },
      ],
      workedExample: {
        question: 'A coat costs £68 after a 20% reduction. Find the original price.',
        steps: [
          'Step 1 — multiplier: 100% − 20% = 80% → <strong>0.80</strong>',
          'Step 2 — original: £68 ÷ 0.80 = <strong>£85</strong>',
        ],
      },
    },

    // Band C ─────────────────────────────────────────────────
    {
      id: 'pct-C01', subtopic: 'num-percentages', band: 'C', marks: 4,
      question: 'A savings account pays 3.5% compound interest per year. Jake invests £4,000 for 3 years. How much does he have at the end, to the nearest penny?',
      steps: [
        {
          prompt: 'Write the multiplier for one year at 3.5% interest.',
          hint1: 'Interest means growth, so add 3.5% to 100%.',
          hint2: '100% + 3.5% = 103.5%, written as 1.035.',
          hint3: 'The multiplier is 1.035.',
          answer: 1.035, tolerance: 0.0001, unit: '',
          explanation: 'Growth multiplier = 1 + (rate/100). Annual rate of 3.5% → 1.035.',
        },
        {
          prompt: 'Apply the multiplier three times (or use a power).',
          hint1: 'Compound means apply the multiplier repeatedly: 4000 × 1.035³.',
          hint2: '1.035³ = 1.035 × 1.035 × 1.035 ≈ 1.10872...',
          hint3: '4000 × 1.035³ ≈ 4434.90',
          answer: 4434.90, tolerance: 0.01, unit: '£',
          explanation: 'Compound interest formula: A = P × (1 + r)ⁿ. Here P=4000, r=0.035, n=3.',
        },
      ],
      workedExample: {
        question: 'A bank account pays 4% compound interest. Amy invests £2,000 for 2 years. Find the total amount.',
        steps: [
          'Step 1 — multiplier: 100% + 4% = 104% → <strong>1.04</strong>',
          'Step 2 — total: £2,000 × 1.04² = £2,000 × 1.0816 = <strong>£2,163.20</strong>',
        ],
      },
    },
    {
      id: 'pct-C02', subtopic: 'num-percentages', band: 'C', marks: 4,
      question: 'The population of a town decreased by 4% each year for 2 years. Starting population was 25,000. What is the population after 2 years? Round to the nearest whole number.',
      steps: [
        {
          prompt: 'Write the multiplier for a 4% decrease.',
          hint1: 'A decrease means less than 100% remains.',
          hint2: '100% − 4% = 96%, written as 0.96.',
          hint3: 'The multiplier is 0.96.',
          answer: 0.96, tolerance: 0.001, unit: '',
          explanation: 'Decrease multiplier = 1 − (rate/100). 4% decrease → 0.96.',
        },
        {
          prompt: 'Calculate the population after 2 years.',
          hint1: 'Apply the multiplier twice: 25000 × 0.96².',
          hint2: '0.96² = 0.9216, so 25000 × 0.9216 = ?',
          hint3: '25000 × 0.9216 = 23040',
          answer: 23040, tolerance: 0.5, unit: '',
          explanation: 'P = 25000 × 0.96² = 25000 × 0.9216 = 23,040.',
        },
      ],
      workedExample: {
        question: 'A tree grows by 5% each year. It is 8 m tall now. How tall after 2 years?',
        steps: [
          'Step 1 — multiplier: 100% + 5% = 105% → <strong>1.05</strong>',
          'Step 2 — height: 8 × 1.05² = 8 × 1.1025 = <strong>8.82 m</strong>',
        ],
      },
    },

    // ══════════════════════════════════════════════════════════
    // FRACTIONS (num-fractions)
    // ══════════════════════════════════════════════════════════

    // Band A ─────────────────────────────────────────────────
    {
      id: 'frc-A01', subtopic: 'num-fractions', band: 'A', marks: 2,
      question: 'Work out 2/3 + 1/4. Give your answer as a fraction in its simplest form.',
      steps: [
        {
          prompt: 'Find a common denominator for 3 and 4.',
          hint1: 'The lowest common multiple of 3 and 4 is 12.',
          hint2: 'Convert both fractions to twelfths.',
          hint3: '2/3 = 8/12 and 1/4 = 3/12. LCD = 12.',
          answer: 12, tolerance: 0, unit: '',
          explanation: 'LCD of 3 and 4 is 12. Rewrite both fractions with denominator 12.',
        },
        {
          prompt: 'Add the numerators and write the answer as a fraction.',
          hint1: 'Once denominators match, add the numerators.',
          hint2: '8/12 + 3/12 = ?/12',
          hint3: '8 + 3 = 11, so the answer is 11/12.',
          answer: 11 / 12, tolerance: 0.001, unit: '',
          explanation: '8/12 + 3/12 = 11/12. This is already in simplest form.',
          displayAnswer: '11/12',
        },
      ],
      workedExample: {
        question: 'Work out 1/2 + 1/3.',
        steps: [
          'Step 1 — LCD: LCM of 2 and 3 is <strong>6</strong>',
          'Step 2 — convert: 1/2 = 3/6 and 1/3 = 2/6',
          'Step 3 — add: 3/6 + 2/6 = <strong>5/6</strong>',
        ],
      },
    },
    {
      id: 'frc-A02', subtopic: 'num-fractions', band: 'A', marks: 2,
      question: 'Work out 3/4 − 1/6. Give your answer as a fraction.',
      steps: [
        {
          prompt: 'Find the lowest common denominator of 4 and 6.',
          hint1: 'Multiples of 4: 4, 8, 12... Multiples of 6: 6, 12...',
          hint2: 'The LCD is 12.',
          hint3: 'LCD = 12.',
          answer: 12, tolerance: 0, unit: '',
          explanation: 'LCM(4,6) = 12. Both fractions need to be written as twelfths.',
        },
        {
          prompt: 'Subtract and simplify.',
          hint1: '3/4 = 9/12 and 1/6 = 2/12. Now subtract.',
          hint2: '9/12 − 2/12 = ?',
          hint3: '9 − 2 = 7, so 7/12.',
          answer: 7 / 12, tolerance: 0.001, unit: '',
          explanation: '9/12 − 2/12 = 7/12. Cannot simplify further.',
          displayAnswer: '7/12',
        },
      ],
      workedExample: {
        question: 'Work out 5/6 − 1/4.',
        steps: [
          'Step 1 — LCD: LCM(6,4) = <strong>12</strong>',
          'Step 2 — convert: 5/6 = 10/12 and 1/4 = 3/12',
          'Step 3 — subtract: 10/12 − 3/12 = <strong>7/12</strong>',
        ],
      },
    },
    {
      id: 'frc-A03', subtopic: 'num-fractions', band: 'A', marks: 2,
      question: 'Work out 2/5 × 3/4.',
      steps: [
        {
          prompt: 'Multiply the numerators together and the denominators together.',
          hint1: 'Numerators: 2 × 3 = ? Denominators: 5 × 4 = ?',
          hint2: '2 × 3 = 6 and 5 × 4 = 20. Write as 6/20.',
          hint3: 'You get 6/20 before simplifying.',
          answer: 6 / 20, tolerance: 0.001, unit: '',
          explanation: 'To multiply fractions: multiply tops, multiply bottoms.',
          displayAnswer: '6/20',
        },
        {
          prompt: 'Simplify your answer.',
          hint1: 'Find the HCF of 6 and 20.',
          hint2: 'HCF(6, 20) = 2. Divide both by 2.',
          hint3: '6/20 ÷ 2/2 = 3/10.',
          answer: 3 / 10, tolerance: 0.001, unit: '',
          explanation: '6/20 simplifies to 3/10 by dividing numerator and denominator by 2.',
          displayAnswer: '3/10',
        },
      ],
      workedExample: {
        question: 'Work out 3/4 × 2/9.',
        steps: [
          'Step 1 — multiply: (3×2)/(4×9) = <strong>6/36</strong>',
          'Step 2 — simplify: HCF(6,36) = 6, so 6/36 = <strong>1/6</strong>',
        ],
      },
    },

    // Band B ─────────────────────────────────────────────────
    {
      id: 'frc-B01', subtopic: 'num-fractions', band: 'B', marks: 3,
      question: 'Work out 1⅔ × 2¼. Give your answer as a mixed number.',
      steps: [
        {
          prompt: 'Convert both mixed numbers to improper fractions.',
          hint1: '1⅔ = (1×3 + 2)/3 and 2¼ = (2×4 + 1)/4.',
          hint2: '1⅔ = 5/3 and 2¼ = 9/4.',
          hint3: '5/3 and 9/4.',
          answer: 5 / 3, tolerance: 0.01, unit: '',
          explanation: 'Mixed to improper: multiply whole by denominator, add numerator. 1⅔ = 5/3.',
          displayAnswer: '5/3',
        },
        {
          prompt: 'Multiply 5/3 × 9/4.',
          hint1: '(5 × 9) ÷ (3 × 4) = ?',
          hint2: '45/12. Can you simplify?',
          hint3: 'HCF(45, 12) = 3, so 45/12 = 15/4.',
          answer: 15 / 4, tolerance: 0.01, unit: '',
          explanation: '5×9 = 45, 3×4 = 12. GCF is 3, so 45/12 = 15/4.',
          displayAnswer: '15/4',
        },
        {
          prompt: 'Convert 15/4 to a mixed number.',
          hint1: 'How many times does 4 go into 15?',
          hint2: '4 goes 3 times with 3 remainder: 15/4 = 3 and 3/4.',
          hint3: '15/4 = 3¾.',
          answer: 3.75, tolerance: 0.01, unit: '',
          explanation: '15 ÷ 4 = 3 remainder 3, so 15/4 = 3¾.',
          displayAnswer: '3¾',
        },
      ],
      workedExample: {
        question: 'Work out 1½ × 2⅔.',
        steps: [
          'Step 1 — improper: 1½ = 3/2, 2⅔ = 8/3',
          'Step 2 — multiply: (3×8)/(2×3) = 24/6 = <strong>4</strong>',
        ],
      },
    },
    {
      id: 'frc-B02', subtopic: 'num-fractions', band: 'B', marks: 3,
      question: 'Work out 3/4 ÷ 3/8. Give your answer as a mixed number where appropriate.',
      steps: [
        {
          prompt: 'Apply the rule for dividing fractions: keep, change, flip.',
          hint1: 'Keep the first fraction, change ÷ to ×, flip the second fraction.',
          hint2: '3/4 ÷ 3/8 becomes 3/4 × 8/3.',
          hint3: '3/4 × 8/3.',
          answer: 0.75, tolerance: 0.01, unit: '',
          explanation: 'KCF: 3/4 × 8/3. Keep 3/4, Change ÷ to ×, Flip 3/8 to 8/3.',
          displayAnswer: '3/4 × 8/3',
          checkType: 'skip',
        },
        {
          prompt: 'Multiply and simplify: 3/4 × 8/3.',
          hint1: 'Cancel first: the 3s cancel, and 8 and 4 cancel to give 2.',
          hint2: '(3×8)/(4×3) = 24/12.',
          hint3: '24/12 = 2.',
          answer: 2, tolerance: 0, unit: '',
          explanation: 'Cancel diagonally: 3/3 = 1 and 8/4 = 2. Answer = 2.',
          displayAnswer: '2',
        },
      ],
      workedExample: {
        question: 'Work out 5/6 ÷ 5/12.',
        steps: [
          'Step 1 — KCF: 5/6 × 12/5',
          'Step 2 — cancel: 5s cancel, 12/6 = 2',
          'Step 3 — answer: <strong>2</strong>',
        ],
      },
    },
    {
      id: 'frc-B03', subtopic: 'num-fractions', band: 'B', marks: 3,
      question: 'Work out 2⅓ + 1¾. Give your answer as a mixed number.',
      steps: [
        {
          prompt: 'Convert both mixed numbers to improper fractions.',
          hint1: '2⅓ = (2×3 + 1)/3 and 1¾ = (1×4 + 3)/4.',
          hint2: '2⅓ = 7/3 and 1¾ = 7/4.',
          hint3: '7/3 and 7/4.',
          answer: 7 / 3, tolerance: 0.01, unit: '',
          explanation: '2⅓ = 7/3 (whole × denominator + numerator).',
          displayAnswer: '7/3',
        },
        {
          prompt: 'Find the LCD and add.',
          hint1: 'LCD of 3 and 4 is 12.',
          hint2: '7/3 = 28/12 and 7/4 = 21/12. Add the numerators.',
          hint3: '28/12 + 21/12 = 49/12.',
          answer: 49 / 12, tolerance: 0.01, unit: '',
          explanation: '28 + 21 = 49, so 49/12.',
          displayAnswer: '49/12',
        },
        {
          prompt: 'Convert 49/12 to a mixed number.',
          hint1: '12 goes into 49 how many times?',
          hint2: '12 × 4 = 48, remainder 1. So 49/12 = 4 and 1/12.',
          hint3: '49/12 = 4 1/12.',
          answer: 49 / 12, tolerance: 0.01, unit: '',
          explanation: '49 ÷ 12 = 4 remainder 1, so 4 1/12.',
          displayAnswer: '4 1/12',
        },
      ],
      workedExample: {
        question: 'Work out 1⅔ + 2½.',
        steps: [
          'Step 1 — improper: 1⅔ = 5/3, 2½ = 5/2',
          'Step 2 — LCD = 6: 5/3 = 10/6, 5/2 = 15/6',
          'Step 3 — add: 10/6 + 15/6 = 25/6 = <strong>4 1/6</strong>',
        ],
      },
    },

    // Band C ─────────────────────────────────────────────────
    {
      id: 'frc-C01', subtopic: 'num-fractions', band: 'C', marks: 4,
      question: 'Show that 1/(2+√3) = 2−√3.',
      steps: [
        {
          prompt: 'Write the conjugate of (2 + √3).',
          hint1: 'The conjugate changes the sign between the terms.',
          hint2: 'Conjugate of (2 + √3) is (2 − √3).',
          hint3: '(2 − √3).',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Conjugate: flip the sign between surds. (2+√3) → (2−√3).',
          checkType: 'skip',
        },
        {
          prompt: 'Multiply numerator and denominator by (2 − √3). What does the denominator become?',
          hint1: 'Denominator: (2+√3)(2−√3) = 2² − (√3)².',
          hint2: '4 − 3 = ?',
          hint3: '4 − 3 = 1.',
          answer: 1, tolerance: 0, unit: '',
          explanation: 'Difference of squares: (a+b)(a−b) = a² − b². Here 4 − 3 = 1.',
        },
        {
          prompt: 'State the final simplified form.',
          hint1: 'Numerator becomes 1 × (2 − √3). Denominator is 1.',
          hint2: '(2 − √3)/1 = ?',
          hint3: '2 − √3. This matches the right-hand side. ✓',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'With denominator = 1, the expression equals (2 − √3). QED.',
          checkType: 'skip',
        },
      ],
      workedExample: {
        question: 'Rationalise 1/(3+√2). Give your answer in the form a + b√2.',
        steps: [
          'Step 1 — conjugate: multiply by (3−√2)/(3−√2)',
          'Step 2 — denominator: 3² − (√2)² = 9 − 2 = <strong>7</strong>',
          'Step 3 — result: (3−√2)/7 = 3/7 − (1/7)√2',
        ],
      },
    },
    {
      id: 'frc-C02', subtopic: 'num-fractions', band: 'C', marks: 3,
      question: 'Work out 3/(x+1) + 2/(x−2). Give your answer as a single fraction.',
      steps: [
        {
          prompt: 'Write the common denominator.',
          hint1: 'Multiply the two denominators together.',
          hint2: '(x+1)(x−2) is the common denominator.',
          hint3: 'Common denominator: (x+1)(x−2).',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'LCD = (x+1)(x−2). Rewrite each fraction with this denominator.',
          checkType: 'skip',
        },
        {
          prompt: 'Write the combined numerator.',
          hint1: 'Multiply each numerator by the missing factor: 3(x−2) + 2(x+1).',
          hint2: 'Expand: 3x − 6 + 2x + 2.',
          hint3: '5x − 4.',
          answer: 0, tolerance: 0, unit: '',
          explanation: '3(x−2) + 2(x+1) = 3x−6 + 2x+2 = 5x−4.',
          checkType: 'skip',
        },
      ],
      workedExample: {
        question: 'Write as a single fraction: 2/(x+3) + 1/(x−1).',
        steps: [
          'Step 1 — LCD: (x+3)(x−1)',
          'Step 2 — numerator: 2(x−1) + 1(x+3) = 2x−2 + x+3 = 3x+1',
          'Step 3 — answer: <strong>(3x+1)/[(x+3)(x−1)]</strong>',
        ],
      },
    },

    // ══════════════════════════════════════════════════════════
    // RATIO & PROPORTION (rpr-ratio)
    // ══════════════════════════════════════════════════════════

    // Band A ─────────────────────────────────────────────────
    {
      id: 'rat-A01', subtopic: 'rpr-ratio', band: 'A', marks: 2,
      question: 'Share £72 in the ratio 3 : 5.',
      steps: [
        {
          prompt: 'Find the value of one share (one part).',
          hint1: 'Total parts = 3 + 5. Divide £72 by total parts.',
          hint2: '3 + 5 = 8. £72 ÷ 8 = ?',
          hint3: '£72 ÷ 8 = £9',
          answer: 9, tolerance: 0, unit: '£',
          explanation: 'Total ratio parts = 8. One part = 72 ÷ 8 = £9.',
        },
        {
          prompt: 'Calculate the two shares.',
          hint1: 'Multiply one part by each ratio number.',
          hint2: '3 × £9 = ? and 5 × £9 = ?',
          hint3: '3 × £9 = £27 and 5 × £9 = £45.',
          answer: 45, tolerance: 0, unit: '£',
          explanation: '3 parts = £27 and 5 parts = £45. Check: 27 + 45 = 72 ✓',
        },
      ],
      workedExample: {
        question: 'Share £60 in the ratio 2 : 3.',
        steps: [
          'Step 1 — total parts: 2 + 3 = 5. One part: £60 ÷ 5 = <strong>£12</strong>',
          'Step 2 — shares: 2 × £12 = <strong>£24</strong> and 3 × £12 = <strong>£36</strong>',
        ],
      },
    },
    {
      id: 'rat-A02', subtopic: 'rpr-ratio', band: 'A', marks: 2,
      question: 'Simplify the ratio 24 : 36.',
      steps: [
        {
          prompt: 'Find the highest common factor (HCF) of 24 and 36.',
          hint1: 'Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36.',
          hint2: 'The largest factor in both lists is 12.',
          hint3: 'HCF = 12.',
          answer: 12, tolerance: 0, unit: '',
          explanation: 'HCF(24, 36) = 12. Divide both parts by 12 to simplify.',
        },
        {
          prompt: 'Divide both parts by the HCF.',
          hint1: '24 ÷ 12 = ? and 36 ÷ 12 = ?',
          hint2: '24 ÷ 12 = 2 and 36 ÷ 12 = 3.',
          hint3: 'Simplified ratio: 2 : 3.',
          answer: 3, tolerance: 0, unit: '',
          explanation: '24 ÷ 12 = 2 and 36 ÷ 12 = 3. Simplified ratio is 2 : 3.',
        },
      ],
      workedExample: {
        question: 'Simplify the ratio 18 : 30.',
        steps: [
          'Step 1 — HCF: HCF(18, 30) = <strong>6</strong>',
          'Step 2 — divide: 18÷6 = 3, 30÷6 = 5. Ratio = <strong>3 : 5</strong>',
        ],
      },
    },
    {
      id: 'rat-A03', subtopic: 'rpr-ratio', band: 'A', marks: 3,
      question: 'Orange squash is mixed with water in the ratio 1 : 4. How much water is needed for 350 ml of squash?',
      steps: [
        {
          prompt: 'Identify the ratio: 1 part squash to 4 parts water. For 350 ml of squash, what is one part?',
          hint1: '350 ml represents 1 part.',
          hint2: 'So 1 part = 350 ml.',
          hint3: '1 part = 350 ml.',
          answer: 350, tolerance: 0, unit: 'ml',
          explanation: 'The squash IS the 1 part, so one part = 350 ml.',
        },
        {
          prompt: 'Calculate the volume of water needed.',
          hint1: 'Water is 4 parts. Multiply 4 by the value of one part.',
          hint2: '4 × 350 = ?',
          hint3: '4 × 350 = 1400 ml',
          answer: 1400, tolerance: 0, unit: 'ml',
          explanation: 'Water = 4 parts = 4 × 350 = 1400 ml.',
        },
      ],
      workedExample: {
        question: 'Cement is mixed with sand in ratio 1 : 3. How much sand for 5 kg of cement?',
        steps: [
          'Step 1 — 1 part = 5 kg (the cement)',
          'Step 2 — sand = 3 parts = 3 × 5 = <strong>15 kg</strong>',
        ],
      },
    },

    // Band B ─────────────────────────────────────────────────
    {
      id: 'rat-B01', subtopic: 'rpr-ratio', band: 'B', marks: 3,
      question: 'Jake and Maya share money in ratio 5 : 3. Jake gets £120 more than Maya. How much does each person get?',
      steps: [
        {
          prompt: 'Find the difference in ratio parts and relate it to £120.',
          hint1: 'Jake gets 5 parts, Maya gets 3 parts. The difference is 5 − 3 = 2 parts.',
          hint2: '2 parts = £120, so 1 part = ?',
          hint3: '1 part = £60.',
          answer: 60, tolerance: 0, unit: '£',
          explanation: 'Difference in parts = 2. If 2 parts = £120, then 1 part = £60.',
        },
        {
          prompt: "Find Jake's share.",
          hint1: 'Jake gets 5 parts.',
          hint2: '5 × £60 = ?',
          hint3: '5 × £60 = £300.',
          answer: 300, tolerance: 0, unit: '£',
          explanation: "Jake's share = 5 × £60 = £300.",
        },
        {
          prompt: "Find Maya's share.",
          hint1: 'Maya gets 3 parts.',
          hint2: '3 × £60 = ?',
          hint3: '3 × £60 = £180.',
          answer: 180, tolerance: 0, unit: '£',
          explanation: "Maya's share = 3 × £60 = £180. Check: £300 − £180 = £120 ✓",
        },
      ],
      workedExample: {
        question: 'Liam and Sophie share £84 in ratio 4 : 3. How much does each get?',
        steps: [
          'Step 1 — total parts: 4 + 3 = 7. One part = 84 ÷ 7 = <strong>£12</strong>',
          'Step 2 — Liam: 4 × 12 = <strong>£48</strong>, Sophie: 3 × 12 = <strong>£36</strong>',
        ],
      },
    },
    {
      id: 'rat-B02', subtopic: 'rpr-ratio', band: 'B', marks: 3,
      question: 'A recipe for 4 people uses 300 g of flour, 180 g of sugar and 2 eggs. How much flour and sugar are needed for 10 people?',
      steps: [
        {
          prompt: 'Find the scale factor to go from 4 people to 10.',
          hint1: 'Divide the new number by the original: 10 ÷ 4.',
          hint2: '10 ÷ 4 = 2.5.',
          hint3: 'Scale factor = 2.5.',
          answer: 2.5, tolerance: 0, unit: '',
          explanation: 'Scale factor = 10 ÷ 4 = 2.5.',
        },
        {
          prompt: 'Calculate the flour needed.',
          hint1: 'Multiply the original flour by the scale factor.',
          hint2: '300 × 2.5 = ?',
          hint3: '300 × 2.5 = 750 g.',
          answer: 750, tolerance: 0, unit: 'g',
          explanation: '300 g × 2.5 = 750 g of flour.',
        },
        {
          prompt: 'Calculate the sugar needed.',
          hint1: 'Multiply the original sugar by the scale factor.',
          hint2: '180 × 2.5 = ?',
          hint3: '180 × 2.5 = 450 g.',
          answer: 450, tolerance: 0, unit: 'g',
          explanation: '180 g × 2.5 = 450 g of sugar.',
        },
      ],
      workedExample: {
        question: 'A recipe for 6 serves uses 240 g flour. How much for 9 serves?',
        steps: [
          'Step 1 — scale factor: 9 ÷ 6 = <strong>1.5</strong>',
          'Step 2 — flour: 240 × 1.5 = <strong>360 g</strong>',
        ],
      },
    },
    {
      id: 'rat-B03', subtopic: 'rpr-ratio', band: 'B', marks: 3,
      question: 'y is directly proportional to x. When x = 4, y = 10. Find y when x = 7.',
      steps: [
        {
          prompt: 'Find the constant of proportionality k, where y = kx.',
          hint1: 'Substitute x = 4 and y = 10 into y = kx.',
          hint2: '10 = k × 4, so k = ?',
          hint3: 'k = 10/4 = 2.5.',
          answer: 2.5, tolerance: 0.001, unit: '',
          explanation: 'k = y ÷ x = 10 ÷ 4 = 2.5. So y = 2.5x.',
        },
        {
          prompt: 'Find y when x = 7.',
          hint1: 'Substitute x = 7 into y = 2.5x.',
          hint2: 'y = 2.5 × 7 = ?',
          hint3: 'y = 17.5.',
          answer: 17.5, tolerance: 0, unit: '',
          explanation: 'y = 2.5 × 7 = 17.5.',
        },
      ],
      workedExample: {
        question: 'y is directly proportional to x. When x = 3, y = 12. Find y when x = 5.',
        steps: [
          'Step 1 — find k: k = y ÷ x = 12 ÷ 3 = <strong>4</strong>. So y = 4x.',
          'Step 2 — y when x=5: y = 4 × 5 = <strong>20</strong>',
        ],
      },
    },

    // Band C ─────────────────────────────────────────────────
    {
      id: 'rat-C01', subtopic: 'rpr-ratio', band: 'C', marks: 4,
      question: 'y is inversely proportional to x. When x = 5, y = 4. Find y when x = 8.',
      steps: [
        {
          prompt: 'Write the equation for inverse proportion.',
          hint1: 'Inverse proportion: y = k/x, where k is a constant.',
          hint2: 'Substitute x = 5 and y = 4: 4 = k/5.',
          hint3: 'k = 20.',
          answer: 20, tolerance: 0, unit: '',
          explanation: 'Inverse proportion: y = k/x. So k = y × x = 4 × 5 = 20.',
        },
        {
          prompt: 'Find y when x = 8.',
          hint1: 'Substitute x = 8 into y = 20/x.',
          hint2: 'y = 20/8 = ?',
          hint3: 'y = 2.5.',
          answer: 2.5, tolerance: 0.001, unit: '',
          explanation: 'y = 20 ÷ 8 = 2.5.',
        },
      ],
      workedExample: {
        question: 'y is inversely proportional to x. When x = 6, y = 5. Find y when x = 15.',
        steps: [
          'Step 1 — k: k = 6 × 5 = <strong>30</strong>. So y = 30/x.',
          'Step 2 — y when x=15: y = 30 ÷ 15 = <strong>2</strong>',
        ],
      },
    },
    {
      id: 'rat-C02', subtopic: 'rpr-ratio', band: 'C', marks: 4,
      question: 'p is proportional to q². When p = 75, q = 5. Find p when q = 8.',
      steps: [
        {
          prompt: 'Write the equation for this type of proportion.',
          hint1: 'p ∝ q² means p = kq².',
          hint2: 'Substitute p = 75, q = 5: 75 = k × 25.',
          hint3: 'k = 3.',
          answer: 3, tolerance: 0, unit: '',
          explanation: 'p = kq². So k = p ÷ q² = 75 ÷ 25 = 3.',
        },
        {
          prompt: 'Find p when q = 8.',
          hint1: 'Substitute k = 3 and q = 8 into p = kq².',
          hint2: 'p = 3 × 8² = 3 × 64 = ?',
          hint3: 'p = 192.',
          answer: 192, tolerance: 0, unit: '',
          explanation: 'p = 3 × 64 = 192.',
        },
      ],
      workedExample: {
        question: 'y ∝ x². When x = 4, y = 48. Find y when x = 6.',
        steps: [
          'Step 1 — k: k = y ÷ x² = 48 ÷ 16 = <strong>3</strong>. So y = 3x².',
          'Step 2 — y when x=6: y = 3 × 36 = <strong>108</strong>',
        ],
      },
    },

    // ══════════════════════════════════════════════════════════
    // STANDARD FORM (num-standard-form)
    // ══════════════════════════════════════════════════════════

    // Band A ─────────────────────────────────────────────────
    {
      id: 'stf-A01', subtopic: 'num-standard-form', band: 'A', marks: 2,
      question: 'Write 4,750,000 in standard form.',
      steps: [
        {
          prompt: 'Write the number as a value between 1 and 10, multiplied by a power of 10.',
          hint1: 'Move the decimal point to get a number between 1 and 10.',
          hint2: '4,750,000 → 4.75. How many places did the decimal move?',
          hint3: 'The decimal moved 6 places left.',
          answer: 4.75, tolerance: 0.001, unit: '',
          explanation: '4,750,000 = 4.75 × 10ⁿ. The 4.75 comes from placing the decimal after the first digit.',
        },
        {
          prompt: 'Write the correct power of 10.',
          hint1: 'Count the number of places you moved the decimal.',
          hint2: 'You moved 6 places left, so the power is +6.',
          hint3: '10⁶.',
          answer: 6, tolerance: 0, unit: '',
          explanation: 'Moving left means a positive power. 4,750,000 = 4.75 × 10⁶.',
        },
      ],
      workedExample: {
        question: 'Write 3,200,000 in standard form.',
        steps: [
          'Step 1 — coefficient: 3.2 (between 1 and 10)',
          'Step 2 — power: decimal moved 6 places left → 10⁶',
          'Step 3 — answer: <strong>3.2 × 10⁶</strong>',
        ],
      },
    },
    {
      id: 'stf-A02', subtopic: 'num-standard-form', band: 'A', marks: 2,
      question: 'Write 0.000085 in standard form.',
      steps: [
        {
          prompt: 'Find the coefficient (number between 1 and 10).',
          hint1: 'Move the decimal point right until you get a number between 1 and 10.',
          hint2: '0.000085 → 8.5. How many places did the decimal move right?',
          hint3: '5 places right.',
          answer: 8.5, tolerance: 0.001, unit: '',
          explanation: '8.5 is between 1 and 10. It is the coefficient.',
        },
        {
          prompt: 'Write the power of 10. Remember: small numbers have negative powers.',
          hint1: 'Moving right means the power is negative.',
          hint2: 'Moved 5 places right → 10⁻⁵.',
          hint3: '10⁻⁵.',
          answer: -5, tolerance: 0, unit: '',
          explanation: '0.000085 = 8.5 × 10⁻⁵. Negative power because the number is small.',
        },
      ],
      workedExample: {
        question: 'Write 0.00072 in standard form.',
        steps: [
          'Step 1 — coefficient: 7.2 (move decimal 4 places right)',
          'Step 2 — power: moving right → negative. 10⁻⁴',
          'Step 3 — answer: <strong>7.2 × 10⁻⁴</strong>',
        ],
      },
    },
    {
      id: 'stf-A03', subtopic: 'num-standard-form', band: 'A', marks: 2,
      question: 'Write 5.6 × 10⁴ as an ordinary number.',
      steps: [
        {
          prompt: 'The power is +4. How far and in which direction do you move the decimal?',
          hint1: 'Positive power means the number is large — move decimal right.',
          hint2: 'Move the decimal 4 places to the right.',
          hint3: '5.6 → 56000.',
          answer: 56000, tolerance: 0, unit: '',
          explanation: '5.6 × 10⁴: positive power, so move decimal 4 places right. 5.6000 → 56,000.',
        },
      ],
      workedExample: {
        question: 'Write 3.2 × 10⁵ as an ordinary number.',
        steps: [
          'Positive power → large number. Move decimal 5 places right.',
          '3.2 → 3.20000 → <strong>320,000</strong>',
        ],
      },
    },

    // Band B ─────────────────────────────────────────────────
    {
      id: 'stf-B01', subtopic: 'num-standard-form', band: 'B', marks: 3,
      question: 'Work out (3.2 × 10⁵) × (4 × 10³). Give your answer in standard form.',
      steps: [
        {
          prompt: 'Multiply the coefficients (the numbers in front).',
          hint1: '3.2 × 4 = ?',
          hint2: '3.2 × 4 = 12.8.',
          hint3: '12.8.',
          answer: 12.8, tolerance: 0.001, unit: '',
          explanation: 'Multiply the coefficients separately: 3.2 × 4 = 12.8.',
        },
        {
          prompt: 'Add the powers of 10.',
          hint1: '10⁵ × 10³ = 10^(5+3).',
          hint2: '5 + 3 = 8.',
          hint3: '10⁸.',
          answer: 8, tolerance: 0, unit: '',
          explanation: 'When multiplying powers of 10, add the exponents: 10⁵ × 10³ = 10⁸.',
        },
        {
          prompt: 'Write in standard form. (12.8 × 10⁸ is not standard form — adjust.)',
          hint1: '12.8 = 1.28 × 10¹. So 12.8 × 10⁸ = 1.28 × 10¹ × 10⁸.',
          hint2: '10¹ × 10⁸ = 10⁹.',
          hint3: '1.28 × 10⁹.',
          answer: 9, tolerance: 0, unit: '',
          explanation: '12.8 × 10⁸ = 1.28 × 10¹ × 10⁸ = 1.28 × 10⁹.',
          displayAnswer: '1.28 × 10⁹',
        },
      ],
      workedExample: {
        question: 'Work out (2.5 × 10⁴) × (2 × 10³).',
        steps: [
          'Step 1 — coefficients: 2.5 × 2 = <strong>5</strong>',
          'Step 2 — powers: 10⁴ × 10³ = <strong>10⁷</strong>',
          'Step 3 — result: 5 × 10⁷ (already standard form)',
        ],
      },
    },
    {
      id: 'stf-B02', subtopic: 'num-standard-form', band: 'B', marks: 3,
      question: 'Work out (9.6 × 10⁷) ÷ (3.2 × 10⁴). Give your answer in standard form.',
      steps: [
        {
          prompt: 'Divide the coefficients.',
          hint1: '9.6 ÷ 3.2 = ?',
          hint2: '9.6 ÷ 3.2 = 3.',
          hint3: '3.',
          answer: 3, tolerance: 0.001, unit: '',
          explanation: '9.6 ÷ 3.2 = 3. Deal with the numbers and the powers separately.',
        },
        {
          prompt: 'Subtract the powers of 10.',
          hint1: '10⁷ ÷ 10⁴ = 10^(7−4).',
          hint2: '7 − 4 = 3.',
          hint3: '10³.',
          answer: 3, tolerance: 0, unit: '',
          explanation: 'When dividing powers of 10, subtract the exponents: 10⁷ ÷ 10⁴ = 10³.',
        },
        {
          prompt: 'Write the final answer in standard form.',
          hint1: 'Combine coefficient and power.',
          hint2: '3 × 10³.',
          hint3: '3 × 10³.',
          answer: 3000, tolerance: 0, unit: '',
          explanation: '3 × 10³ = 3000. Already in standard form.',
          displayAnswer: '3 × 10³',
        },
      ],
      workedExample: {
        question: 'Work out (8 × 10⁶) ÷ (4 × 10²).',
        steps: [
          'Step 1 — coefficients: 8 ÷ 4 = <strong>2</strong>',
          'Step 2 — powers: 10⁶ ÷ 10² = <strong>10⁴</strong>',
          'Step 3 — answer: <strong>2 × 10⁴</strong>',
        ],
      },
    },
    {
      id: 'stf-B03', subtopic: 'num-standard-form', band: 'B', marks: 3,
      question: 'The distance from Earth to the Sun is 1.5 × 10⁸ km. Light travels at 3 × 10⁵ km/s. How many seconds does light take to reach Earth from the Sun?',
      steps: [
        {
          prompt: 'Write the formula: time = distance ÷ speed.',
          hint1: 'Time = distance ÷ speed.',
          hint2: 'Time = (1.5 × 10⁸) ÷ (3 × 10⁵).',
          hint3: 'Divide: 1.5 ÷ 3 and 10⁸ ÷ 10⁵.',
          answer: 0.5, tolerance: 0.001, unit: '',
          explanation: 'Coefficient: 1.5 ÷ 3 = 0.5.',
        },
        {
          prompt: 'Subtract the powers of 10.',
          hint1: '10⁸ ÷ 10⁵ = 10^(8−5).',
          hint2: '8 − 5 = 3.',
          hint3: '10³.',
          answer: 3, tolerance: 0, unit: '',
          explanation: '10⁸ ÷ 10⁵ = 10³.',
        },
        {
          prompt: 'Write the time in standard form and as an ordinary number.',
          hint1: '0.5 × 10³ — is this standard form? 0.5 is not between 1 and 10.',
          hint2: '0.5 × 10³ = 5 × 10⁻¹ × 10³ = 5 × 10².',
          hint3: '5 × 10² = 500 seconds.',
          answer: 500, tolerance: 0, unit: 's',
          explanation: '0.5 × 10³ = 5 × 10² = 500 seconds.',
        },
      ],
      workedExample: {
        question: 'A satellite travels 4.8 × 10⁵ km at 1.6 × 10³ km/h. How many hours?',
        steps: [
          'Step 1 — time = distance ÷ speed: (4.8 × 10⁵) ÷ (1.6 × 10³)',
          'Step 2 — coefficients: 4.8 ÷ 1.6 = <strong>3</strong>',
          'Step 3 — powers: 10⁵ ÷ 10³ = 10². Answer: <strong>3 × 10² = 300 hours</strong>',
        ],
      },
    },

    // Band C ─────────────────────────────────────────────────
    {
      id: 'stf-C01', subtopic: 'num-standard-form', band: 'C', marks: 4,
      question: 'Work out (5 × 10³) + (8 × 10²). Give your answer in standard form.',
      steps: [
        {
          prompt: 'Convert both numbers to ordinary numbers before adding.',
          hint1: '5 × 10³ = 5000 and 8 × 10² = 800.',
          hint2: '5000 + 800 = ?',
          hint3: '5800.',
          answer: 5800, tolerance: 0, unit: '',
          explanation: 'For addition in standard form, convert to ordinary numbers first: 5000 + 800 = 5800.',
        },
        {
          prompt: 'Write 5800 in standard form.',
          hint1: 'Move the decimal to get a number between 1 and 10.',
          hint2: '5800 = 5.8 × 10³.',
          hint3: '5.8 × 10³.',
          answer: 3, tolerance: 0, unit: '',
          explanation: '5800 = 5.8 × 10³ (decimal moved 3 places left).',
          displayAnswer: '5.8 × 10³',
        },
      ],
      workedExample: {
        question: 'Work out (7 × 10⁴) + (5 × 10³). Give your answer in standard form.',
        steps: [
          'Step 1 — convert: 7 × 10⁴ = 70,000 and 5 × 10³ = 5,000',
          'Step 2 — add: 70,000 + 5,000 = <strong>75,000</strong>',
          'Step 3 — standard form: <strong>7.5 × 10⁴</strong>',
        ],
      },
    },
    {
      id: 'stf-C02', subtopic: 'num-standard-form', band: 'C', marks: 4,
      question: 'A red blood cell has a diameter of 8 × 10⁻³ mm. A human hair has a diameter of 7 × 10⁻² mm. How many times thicker is the hair than the blood cell?',
      steps: [
        {
          prompt: 'Divide the hair diameter by the blood cell diameter.',
          hint1: 'How many times thicker = larger ÷ smaller.',
          hint2: '(7 × 10⁻²) ÷ (8 × 10⁻³).',
          hint3: 'Coefficients: 7 ÷ 8. Powers: 10⁻² ÷ 10⁻³.',
          answer: 0.875, tolerance: 0.001, unit: '',
          explanation: 'Coefficient: 7 ÷ 8 = 0.875.',
        },
        {
          prompt: 'Subtract the powers: 10⁻² ÷ 10⁻³.',
          hint1: '10⁻² ÷ 10⁻³ = 10^(−2 − (−3)) = 10^(−2+3).',
          hint2: '−2 + 3 = 1.',
          hint3: '10¹ = 10.',
          answer: 10, tolerance: 0, unit: '',
          explanation: '10⁻² ÷ 10⁻³ = 10^(−2+3) = 10¹ = 10.',
        },
        {
          prompt: 'Combine: 0.875 × 10 = ?',
          hint1: '0.875 × 10 = 8.75.',
          hint2: '8.75 times thicker.',
          hint3: '8.75.',
          answer: 8.75, tolerance: 0.01, unit: '',
          explanation: '0.875 × 10 = 8.75. The hair is 8.75 times thicker.',
        },
      ],
      workedExample: {
        question: 'An atom has diameter 4 × 10⁻¹⁰ m. A virus is 2 × 10⁻⁸ m wide. How many atoms fit across the virus?',
        steps: [
          'Step 1 — divide: (2 × 10⁻⁸) ÷ (4 × 10⁻¹⁰)',
          'Step 2 — coefficients: 2 ÷ 4 = <strong>0.5</strong>',
          'Step 3 — powers: 10⁻⁸ ÷ 10⁻¹⁰ = 10². Answer: 0.5 × 10² = <strong>50 atoms</strong>',
        ],
      },
    },

    // ══════════════════════════════════════════════════════════
    // SOLVING LINEAR EQUATIONS (alg-equations)
    // ══════════════════════════════════════════════════════════

    // Band A ─────────────────────────────────────────────────
    {
      id: 'eq-A01', subtopic: 'alg-equations', band: 'A', marks: 2,
      question: 'Solve 3x + 7 = 22.',
      steps: [
        {
          prompt: 'Subtract 7 from both sides.',
          hint1: 'To isolate 3x, remove the +7 by subtracting 7 from both sides.',
          hint2: '3x + 7 − 7 = 22 − 7.',
          hint3: '3x = 15.',
          answer: 15, tolerance: 0, unit: '',
          explanation: 'Subtracting 7 from both sides: 3x = 15.',
        },
        {
          prompt: 'Divide both sides by 3.',
          hint1: 'Divide both sides by the coefficient of x.',
          hint2: '15 ÷ 3 = ?',
          hint3: 'x = 5.',
          answer: 5, tolerance: 0, unit: '',
          explanation: '3x = 15. Dividing both sides by 3 gives x = 5.',
        },
      ],
      workedExample: {
        question: 'Solve 4x + 3 = 19.',
        steps: [
          'Step 1 — subtract 3: 4x = 16',
          'Step 2 — divide by 4: x = <strong>4</strong>',
        ],
      },
    },
    {
      id: 'eq-A02', subtopic: 'alg-equations', band: 'A', marks: 3,
      question: 'Solve 2(3x − 4) = 16.',
      steps: [
        {
          prompt: 'Expand the bracket on the left-hand side.',
          hint1: 'Multiply each term inside the bracket by 2.',
          hint2: '2 × 3x = 6x and 2 × (−4) = −8.',
          hint3: '6x − 8 = 16.',
          answer: -8, tolerance: 0, unit: '',
          explanation: '2(3x − 4) = 6x − 8. So the equation becomes 6x − 8 = 16.',
          displayAnswer: '6x − 8 = 16',
          checkType: 'skip',
        },
        {
          prompt: 'Add 8 to both sides.',
          hint1: '6x − 8 + 8 = 16 + 8.',
          hint2: '6x = 24.',
          hint3: '6x = 24.',
          answer: 24, tolerance: 0, unit: '',
          explanation: '6x = 24.',
        },
        {
          prompt: 'Divide both sides by 6.',
          hint1: '24 ÷ 6 = ?',
          hint2: 'x = 4.',
          hint3: 'x = 4.',
          answer: 4, tolerance: 0, unit: '',
          explanation: '6x = 24 → x = 4.',
        },
      ],
      workedExample: {
        question: 'Solve 3(2x − 1) = 15.',
        steps: [
          'Step 1 — expand: 6x − 3 = 15',
          'Step 2 — add 3: 6x = 18',
          'Step 3 — divide by 6: x = <strong>3</strong>',
        ],
      },
    },
    {
      id: 'eq-A03', subtopic: 'alg-equations', band: 'A', marks: 3,
      question: 'Solve 5x − 3 = 2x + 9.',
      steps: [
        {
          prompt: 'Collect the x terms on one side by subtracting 2x.',
          hint1: 'Subtract 2x from both sides.',
          hint2: '5x − 2x − 3 = 9.',
          hint3: '3x − 3 = 9.',
          answer: 9, tolerance: 0, unit: '',
          explanation: '5x − 2x = 3x. So 3x − 3 = 9.',
          checkType: 'skip',
        },
        {
          prompt: 'Add 3 to both sides.',
          hint1: '3x − 3 + 3 = 9 + 3.',
          hint2: '3x = 12.',
          hint3: '3x = 12.',
          answer: 12, tolerance: 0, unit: '',
          explanation: '3x = 12.',
        },
        {
          prompt: 'Divide both sides by 3.',
          hint1: '12 ÷ 3 = ?',
          hint2: 'x = 4.',
          hint3: 'x = 4.',
          answer: 4, tolerance: 0, unit: '',
          explanation: 'x = 4. Check: 5(4) − 3 = 17 and 2(4) + 9 = 17 ✓',
        },
      ],
      workedExample: {
        question: 'Solve 4x + 1 = x + 10.',
        steps: [
          'Step 1 — collect x: subtract x: 3x + 1 = 10',
          'Step 2 — subtract 1: 3x = 9',
          'Step 3 — divide by 3: x = <strong>3</strong>',
        ],
      },
    },

    // Band B ─────────────────────────────────────────────────
    {
      id: 'eq-B01', subtopic: 'alg-equations', band: 'B', marks: 3,
      question: 'Solve (x + 3)/4 = (2x − 1)/6.',
      steps: [
        {
          prompt: 'Eliminate the fractions by multiplying both sides by the LCM of 4 and 6.',
          hint1: 'LCM(4, 6) = 12. Multiply both sides by 12.',
          hint2: '12 × (x+3)/4 = 3(x+3) and 12 × (2x−1)/6 = 2(2x−1).',
          hint3: '3(x+3) = 2(2x−1).',
          answer: 12, tolerance: 0, unit: '',
          explanation: 'Multiply through by LCD = 12 to clear fractions.',
          checkType: 'skip',
        },
        {
          prompt: 'Expand both brackets.',
          hint1: '3(x+3) = 3x+9 and 2(2x−1) = 4x−2.',
          hint2: '3x + 9 = 4x − 2.',
          hint3: '3x + 9 = 4x − 2.',
          answer: 9, tolerance: 0, unit: '',
          explanation: 'Expanded: 3x + 9 = 4x − 2.',
          checkType: 'skip',
        },
        {
          prompt: 'Solve for x.',
          hint1: 'Subtract 3x from both sides: 9 = x − 2.',
          hint2: 'Add 2: x = 11.',
          hint3: 'x = 11.',
          answer: 11, tolerance: 0, unit: '',
          explanation: '9 = x − 2 → x = 11. Check: (11+3)/4 = 14/4 = 3.5 and (22−1)/6 = 21/6 = 3.5 ✓',
        },
      ],
      workedExample: {
        question: 'Solve (x+1)/3 = (x−1)/2.',
        steps: [
          'Step 1 — multiply by LCM = 6: 2(x+1) = 3(x−1)',
          'Step 2 — expand: 2x + 2 = 3x − 3',
          'Step 3 — solve: 5 = x, so <strong>x = 5</strong>',
        ],
      },
    },
    {
      id: 'eq-B02', subtopic: 'alg-equations', band: 'B', marks: 3,
      question: 'Solve 3(2x + 5) = 2(4x − 1).',
      steps: [
        {
          prompt: 'Expand both brackets.',
          hint1: '3(2x+5) = 6x+15 and 2(4x−1) = 8x−2.',
          hint2: '6x + 15 = 8x − 2.',
          hint3: '6x + 15 = 8x − 2.',
          answer: 15, tolerance: 0, unit: '',
          explanation: 'Expanded: 6x + 15 = 8x − 2.',
          checkType: 'skip',
        },
        {
          prompt: 'Collect like terms. Move x terms to one side, numbers to the other.',
          hint1: 'Subtract 6x: 15 = 2x − 2. Then add 2: 17 = 2x.',
          hint2: '17 = 2x.',
          hint3: '2x = 17.',
          answer: 17, tolerance: 0, unit: '',
          explanation: '15 + 2 = 2x − 2 + 2 → 17 = 2x.',
          checkType: 'skip',
        },
        {
          prompt: 'Solve for x.',
          hint1: '2x = 17. Divide both sides by 2.',
          hint2: 'x = 17/2 = 8.5.',
          hint3: 'x = 8.5.',
          answer: 8.5, tolerance: 0, unit: '',
          explanation: 'x = 17/2 = 8.5.',
        },
      ],
      workedExample: {
        question: 'Solve 2(3x + 1) = 4(x + 3).',
        steps: [
          'Step 1 — expand: 6x + 2 = 4x + 12',
          'Step 2 — collect: 2x = 10',
          'Step 3 — divide: x = <strong>5</strong>',
        ],
      },
    },
    {
      id: 'eq-B03', subtopic: 'alg-equations', band: 'B', marks: 4,
      question: 'The perimeter of a rectangle is 46 cm. The length is (2x + 3) cm and the width is (x − 1) cm. Find the value of x and the dimensions.',
      steps: [
        {
          prompt: 'Write the perimeter equation.',
          hint1: 'Perimeter = 2(length + width).',
          hint2: '2[(2x+3) + (x−1)] = 46.',
          hint3: '2(3x + 2) = 46.',
          answer: 46, tolerance: 0, unit: '',
          explanation: 'P = 2(l + w) = 2[(2x+3) + (x−1)] = 2(3x+2) = 46.',
          checkType: 'skip',
        },
        {
          prompt: 'Expand and solve.',
          hint1: '2(3x+2) = 6x + 4 = 46.',
          hint2: '6x = 42.',
          hint3: 'x = 7.',
          answer: 7, tolerance: 0, unit: '',
          explanation: '6x + 4 = 46 → 6x = 42 → x = 7.',
        },
        {
          prompt: 'Find the length and width by substituting x = 7.',
          hint1: 'Length = 2(7) + 3 = ? Width = 7 − 1 = ?',
          hint2: 'Length = 17 cm, Width = 6 cm.',
          hint3: 'Length = 17 cm, Width = 6 cm.',
          answer: 17, tolerance: 0, unit: 'cm',
          explanation: 'Length = 2(7) + 3 = 17 cm. Width = 7 − 1 = 6 cm. Check: 2(17+6) = 46 ✓',
        },
      ],
      workedExample: {
        question: 'A triangle has sides (2x+1), (x+4) and (3x−2). Perimeter = 30. Find x.',
        steps: [
          'Step 1 — equation: (2x+1) + (x+4) + (3x−2) = 30 → 6x + 3 = 30',
          'Step 2 — solve: 6x = 27 → x = <strong>4.5</strong>',
        ],
      },
    },

    // Band C ─────────────────────────────────────────────────
    {
      id: 'eq-C01', subtopic: 'alg-equations', band: 'C', marks: 4,
      question: 'Solve the simultaneous equations: 3x + 2y = 16 and x − y = 2.',
      steps: [
        {
          prompt: 'From the second equation, express x in terms of y.',
          hint1: 'x − y = 2 → x = y + 2.',
          hint2: 'x = y + 2.',
          hint3: 'x = y + 2.',
          answer: 2, tolerance: 0, unit: '',
          explanation: 'Rearranging x − y = 2 gives x = y + 2.',
          checkType: 'skip',
        },
        {
          prompt: 'Substitute into 3x + 2y = 16 and solve for y.',
          hint1: '3(y + 2) + 2y = 16.',
          hint2: '3y + 6 + 2y = 16 → 5y = 10.',
          hint3: 'y = 2.',
          answer: 2, tolerance: 0, unit: '',
          explanation: '5y + 6 = 16 → 5y = 10 → y = 2.',
        },
        {
          prompt: 'Find x using x = y + 2.',
          hint1: 'Substitute y = 2 into x = y + 2.',
          hint2: 'x = 2 + 2 = 4.',
          hint3: 'x = 4.',
          answer: 4, tolerance: 0, unit: '',
          explanation: 'x = 2 + 2 = 4. Check: 3(4) + 2(2) = 12 + 4 = 16 ✓',
        },
      ],
      workedExample: {
        question: 'Solve: 2x + y = 11 and x − y = 1.',
        steps: [
          'Step 1 — from 2nd: x = y + 1',
          'Step 2 — substitute: 2(y+1) + y = 11 → 3y + 2 = 11 → y = 3',
          'Step 3 — x: x = 3 + 1 = <strong>4</strong>. Answer: x = 4, y = 3',
        ],
      },
    },
    {
      id: 'eq-C02', subtopic: 'alg-equations', band: 'C', marks: 4,
      question: 'Solve x² + 3x − 10 = 0.',
      steps: [
        {
          prompt: 'Find two numbers that multiply to −10 and add to +3.',
          hint1: 'You need a × b = −10 and a + b = +3.',
          hint2: 'Try 5 and −2: 5 × (−2) = −10 and 5 + (−2) = 3.',
          hint3: 'Numbers are 5 and −2.',
          answer: 5, tolerance: 0, unit: '',
          explanation: 'Factor pairs of −10: (5, −2) works since 5 + (−2) = 3.',
        },
        {
          prompt: 'Write the factorised form.',
          hint1: '(x + 5)(x − 2) = 0.',
          hint2: '(x + 5)(x − 2) = 0.',
          hint3: '(x + 5)(x − 2) = 0.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'x² + 3x − 10 = (x + 5)(x − 2).',
          checkType: 'skip',
        },
        {
          prompt: 'Solve: each bracket = 0. State both values of x.',
          hint1: 'x + 5 = 0 → x = −5. x − 2 = 0 → x = 2.',
          hint2: 'x = −5 or x = 2.',
          hint3: 'x = −5 or x = 2.',
          answer: 2, tolerance: 0, unit: '',
          explanation: 'x = −5 or x = 2. Enter the positive solution here.',
          displayAnswer: 'x = −5 or x = 2',
        },
      ],
      workedExample: {
        question: 'Solve x² − x − 6 = 0.',
        steps: [
          'Step 1 — factors: (−3) × 2 = −6 and −3 + 2 = −1 ✓',
          'Step 2 — factorise: (x − 3)(x + 2) = 0',
          'Step 3 — solutions: x = 3 or <strong>x = −2</strong>',
        ],
      },
    },

    // ══════════════════════════════════════════════════════════
    // SUBSTITUTION INTO FORMULAE (alg-expressions)
    // ══════════════════════════════════════════════════════════

    // Band A ─────────────────────────────────────────────────
    {
      id: 'sub-A01', subtopic: 'alg-expressions', band: 'A', marks: 2,
      question: 'The formula for the area of a triangle is A = ½bh. Find A when b = 12 and h = 7.',
      steps: [
        {
          prompt: 'Substitute b = 12 and h = 7 into the formula.',
          hint1: 'A = ½ × b × h = ½ × 12 × 7.',
          hint2: '½ × 12 = 6. Then 6 × 7 = ?',
          hint3: '6 × 7 = 42.',
          answer: 42, tolerance: 0, unit: 'cm²',
          explanation: 'A = ½ × 12 × 7 = 6 × 7 = 42.',
        },
      ],
      workedExample: {
        question: 'Find A when b = 8 and h = 5 using A = ½bh.',
        steps: [
          'Substitute: A = ½ × 8 × 5 = 4 × 5 = <strong>20</strong>',
        ],
      },
    },
    {
      id: 'sub-A02', subtopic: 'alg-expressions', band: 'A', marks: 2,
      question: 'Use the formula v = u + at. Find v when u = 5, a = 3 and t = 4.',
      steps: [
        {
          prompt: 'Substitute the values into the formula.',
          hint1: 'v = u + at = 5 + (3 × 4).',
          hint2: '3 × 4 = 12. Then 5 + 12 = ?',
          hint3: 'v = 17.',
          answer: 17, tolerance: 0, unit: '',
          explanation: 'v = 5 + 3 × 4 = 5 + 12 = 17. BODMAS: multiplication before addition.',
        },
      ],
      workedExample: {
        question: 'Find v when u = 8, a = 2 and t = 6 using v = u + at.',
        steps: [
          'Substitute: v = 8 + (2 × 6) = 8 + 12 = <strong>20</strong>',
        ],
      },
    },
    {
      id: 'sub-A03', subtopic: 'alg-expressions', band: 'A', marks: 2,
      question: 'The formula for the volume of a cuboid is V = lwh. Find V when l = 5, w = 4, h = 3.',
      steps: [
        {
          prompt: 'Substitute l = 5, w = 4, h = 3.',
          hint1: 'V = 5 × 4 × 3.',
          hint2: '5 × 4 = 20. Then 20 × 3 = ?',
          hint3: 'V = 60.',
          answer: 60, tolerance: 0, unit: 'cm³',
          explanation: 'V = 5 × 4 × 3 = 60 cm³.',
        },
      ],
      workedExample: {
        question: 'Find V when l = 6, w = 2, h = 4 using V = lwh.',
        steps: [
          'V = 6 × 2 × 4 = <strong>48 cm³</strong>',
        ],
      },
    },

    // Band B ─────────────────────────────────────────────────
    {
      id: 'sub-B01', subtopic: 'alg-expressions', band: 'B', marks: 3,
      question: 'Using s = ut + ½at², find s when u = 4, a = −10 and t = 3.',
      steps: [
        {
          prompt: 'Calculate ut.',
          hint1: 'u × t = 4 × 3.',
          hint2: '4 × 3 = 12.',
          hint3: 'ut = 12.',
          answer: 12, tolerance: 0, unit: '',
          explanation: 'ut = 4 × 3 = 12.',
        },
        {
          prompt: 'Calculate ½at².',
          hint1: 't² = 9. Then ½ × (−10) × 9.',
          hint2: '½ × (−10) = −5. −5 × 9 = ?',
          hint3: '½at² = −45.',
          answer: -45, tolerance: 0, unit: '',
          explanation: 'a = −10, t² = 9. So ½ × (−10) × 9 = −45.',
        },
        {
          prompt: 'Find s = ut + ½at².',
          hint1: 's = 12 + (−45).',
          hint2: '12 − 45 = ?',
          hint3: 's = −33.',
          answer: -33, tolerance: 0, unit: 'm',
          explanation: 's = 12 + (−45) = −33 m. Negative means below the starting point.',
        },
      ],
      workedExample: {
        question: 'Find s when u = 10, a = −10 and t = 2 using s = ut + ½at².',
        steps: [
          'Step 1 — ut: 10 × 2 = <strong>20</strong>',
          'Step 2 — ½at²: ½ × (−10) × 4 = <strong>−20</strong>',
          'Step 3 — s: 20 + (−20) = <strong>0 m</strong>',
        ],
      },
    },
    {
      id: 'sub-B02', subtopic: 'alg-expressions', band: 'B', marks: 3,
      question: 'Make u the subject of v = u + at.',
      steps: [
        {
          prompt: 'Identify what needs to move. Subtract at from both sides.',
          hint1: 'To isolate u, subtract at from both sides.',
          hint2: 'v − at = u.',
          hint3: 'u = v − at.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'u = v − at. Subtract at from both sides to isolate u.',
          checkType: 'skip',
        },
      ],
      workedExample: {
        question: 'Make a the subject of v = u + at.',
        steps: [
          'Step 1 — subtract u: v − u = at',
          'Step 2 — divide by t: a = (v − u)/t',
        ],
      },
    },
    {
      id: 'sub-B03', subtopic: 'alg-expressions', band: 'B', marks: 3,
      question: 'Make r the subject of A = πr².',
      steps: [
        {
          prompt: 'Divide both sides by π.',
          hint1: 'A/π = r².',
          hint2: 'A ÷ π = r².',
          hint3: 'r² = A/π.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Dividing both sides by π: r² = A/π.',
          checkType: 'skip',
        },
        {
          prompt: 'Take the square root of both sides.',
          hint1: '√(r²) = r. Apply √ to both sides.',
          hint2: 'r = √(A/π).',
          hint3: 'r = √(A/π).',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'r = √(A/π). Only the positive root since r is a length.',
          checkType: 'skip',
        },
      ],
      workedExample: {
        question: 'Make t the subject of s = ½gt².',
        steps: [
          'Step 1 — multiply by 2: 2s = gt²',
          'Step 2 — divide by g: t² = 2s/g',
          'Step 3 — square root: t = √(2s/g)',
        ],
      },
    },

    // Band C ─────────────────────────────────────────────────
    {
      id: 'sub-C01', subtopic: 'alg-expressions', band: 'C', marks: 4,
      question: 'Make x the subject of y = (3x + 2)/(x − 4).',
      steps: [
        {
          prompt: 'Multiply both sides by (x − 4) to clear the fraction.',
          hint1: 'y(x − 4) = 3x + 2.',
          hint2: 'Expand: yx − 4y = 3x + 2.',
          hint3: 'yx − 4y = 3x + 2.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Multiply through: yx − 4y = 3x + 2.',
          checkType: 'skip',
        },
        {
          prompt: 'Collect all x terms on one side.',
          hint1: 'yx − 3x = 4y + 2. Factorise the left side.',
          hint2: 'x(y − 3) = 4y + 2.',
          hint3: 'x(y − 3) = 4y + 2.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Collecting x terms: x(y − 3) = 4y + 2.',
          checkType: 'skip',
        },
        {
          prompt: 'Divide both sides by (y − 3) to isolate x.',
          hint1: 'x = (4y + 2) / (y − 3).',
          hint2: 'x = (4y + 2) / (y − 3).',
          hint3: 'x = (4y + 2) / (y − 3).',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'x = (4y + 2) / (y − 3). This is the subject in terms of y.',
          checkType: 'skip',
        },
      ],
      workedExample: {
        question: 'Make x the subject of y = (2x + 1)/(x + 3).',
        steps: [
          'Step 1 — multiply: y(x+3) = 2x+1 → yx + 3y = 2x + 1',
          'Step 2 — collect: yx − 2x = 1 − 3y → x(y−2) = 1−3y',
          'Step 3 — divide: x = (1−3y)/(y−2)',
        ],
      },
    },
    {
      id: 'sub-C02', subtopic: 'alg-expressions', band: 'C', marks: 4,
      question: 'Use the quadratic formula to solve 2x² − 5x − 3 = 0. Give answers to 2 d.p.',
      steps: [
        {
          prompt: 'Identify a, b, c from 2x² − 5x − 3 = 0.',
          hint1: 'The quadratic formula needs a, b, c where ax² + bx + c = 0.',
          hint2: 'a = 2, b = −5, c = −3.',
          hint3: 'a = 2, b = −5, c = −3.',
          answer: 2, tolerance: 0, unit: '',
          explanation: 'Matching ax² + bx + c = 0: a=2, b=−5, c=−3.',
        },
        {
          prompt: 'Calculate the discriminant: b² − 4ac.',
          hint1: 'b² = (−5)² = 25. 4ac = 4 × 2 × (−3) = −24.',
          hint2: '25 − (−24) = 49.',
          hint3: 'Discriminant = 49.',
          answer: 49, tolerance: 0, unit: '',
          explanation: 'b² − 4ac = 25 + 24 = 49.',
        },
        {
          prompt: 'Apply the formula: x = (−b ± √49) / (2a). Find both solutions.',
          hint1: 'x = (5 ± 7) / 4.',
          hint2: 'x = (5+7)/4 = 3 or x = (5−7)/4 = −0.5.',
          hint3: 'x = 3 or x = −0.5.',
          answer: 3, tolerance: 0.01, unit: '',
          explanation: 'x = (5+7)/4 = 12/4 = 3 and x = (5−7)/4 = −2/4 = −0.5.',
          displayAnswer: 'x = 3 or x = −0.5',
        },
      ],
      workedExample: {
        question: 'Solve x² − 4x + 1 = 0 using the quadratic formula (to 2 d.p.).',
        steps: [
          'Step 1 — a=1, b=−4, c=1. Discriminant = 16−4 = <strong>12</strong>',
          'Step 2 — x = (4 ± √12) / 2 = (4 ± 3.464) / 2',
          'Step 3 — x = <strong>3.73</strong> or <strong>0.27</strong> (to 2 d.p.)',
        ],
      },
    },
  ];

  // ─────────────────────────────────────────────────────────────
  // TOPIC → SUBTOPIC MAP
  // ─────────────────────────────────────────────────────────────

  const _topicMap = {
    M1: ['num-integers','num-fractions','num-percentages','num-powers-roots','num-standard-form','num-bounds','num-ratio'],
    M2: ['alg-expressions','alg-equations','alg-inequalities','alg-sequences','alg-graphs','alg-quadratics','alg-simultaneous','alg-functions'],
    M3: ['rpr-ratio','rpr-proportion','rpr-speed','rpr-percentage-change','rpr-compound-measures'],
    M4: ['geo-angles','geo-shapes','geo-area-volume','geo-transformations','geo-pythagoras','geo-trigonometry','geo-circle-theorems','geo-vectors'],
    M5: ['prob-basic','prob-combined','prob-tree-diagrams','prob-venn'],
    M6: ['stat-averages','stat-charts','stat-scatter','stat-cumulative'],
  };

  // ─────────────────────────────────────────────────────────────
  // PUBLIC API
  // ─────────────────────────────────────────────────────────────

  /**
   * Get a question for a subtopic, optionally filtering by band.
   * Excludes already-used question ids to avoid repeats in a session.
   */
  function getQuestion(subtopicId, band, excludeIds = []) {
    let pool = _bank.filter(q =>
      q.subtopic === subtopicId && !excludeIds.includes(q.id)
    );
    if (band) pool = pool.filter(q => q.band === band);

    // Fallback: any band if filtered pool is empty
    if (!pool.length) {
      pool = _bank.filter(q =>
        q.subtopic === subtopicId && !excludeIds.includes(q.id)
      );
    }
    if (!pool.length) return null;

    return pool[Math.floor(Math.random() * pool.length)];
  }

  /**
   * Returns an array of questions for a topic test.
   * Mix: 4×A, 4×B, 2×C (up to count total).
   */
  function getTestQuestions(topicCode) {
    const subs = _topicMap[topicCode] || [];
    const used = new Set();
    const result = [];

    const pick = (band) => {
      const pool = _bank.filter(q =>
        subs.includes(q.subtopic) && q.band === band && !used.has(q.id)
      );
      if (!pool.length) return null;
      const q = pool[Math.floor(Math.random() * pool.length)];
      used.add(q.id);
      return q;
    };

    ['A','A','A','A','B','B','B','B','C','C'].forEach(band => {
      const q = pick(band);
      if (q) result.push(q);
    });

    return result;
  }

  /**
   * Check if any questions exist for a given subtopic.
   */
  function hasQuestions(subtopicId) {
    return _bank.some(q => q.subtopic === subtopicId);
  }

  return { getQuestion, getTestQuestions, hasQuestions };

})();
