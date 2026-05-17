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
      sampleAnswer: {
        grade4: "£55.25",
        grade6: "35% = 0.35. Discount = £85 × 0.35 = £29.75. Sale price = £85 − £29.75 = £55.25",
        grade8: "Multiplier for 35% reduction = 1 − 0.35 = 0.65. £85 × 0.65 = £55.25 in one step.",
      },
      examinerTip: "Students often calculate the discount (£29.75) correctly but give it as the final answer, forgetting to subtract it from the original price.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "243 pupils",
        grade6: "54% = 0.54. 450 × 0.54 = 243",
        grade8: "450 × 0.54 = 243. Alternative: 450 × 54/100 = 24300/100 = 243.",
      },
      examinerTip: "Students multiply without converting the percentage to a decimal first, writing 450 × 54 = 24,300.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "£138",
        grade6: "Multiplier = 1.15. £120 × 1.15 = £138",
        grade8: "£120 × 1.15 = £138. Alternative: 10% = £12, 5% = £6, total increase = £18, answer = £138.",
      },
      examinerTip: "Students use 0.15 instead of 1.15 as the multiplier, giving £18 (the increase) rather than £138 (the new amount).",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "20%",
        grade6: "Decrease = £2,400. 2400 ÷ 12000 × 100 = 20%",
        grade8: "Percentage decrease = (12000 − 9600)/12000 × 100 = 2400/12000 × 100 = 20%.",
      },
      examinerTip: "Students divide by the NEW value (9600) instead of the ORIGINAL value (12000), giving 25% instead of 20%.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "£23,000",
        grade6: "Multiplier = 1.20. Original = £27,600 ÷ 1.20 = £23,000",
        grade8: "Original = 27600/1.20 = £23,000. Reverse percentage: divide by the multiplier, never subtract the percentage from the new amount.",
      },
      examinerTip: "Students subtract 20% from the new salary (£27,600 × 0.80 = £22,080) instead of dividing by 1.20.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "£400",
        grade6: "£340 = 85% of original. Original = £340 ÷ 0.85 = £400",
        grade8: "After 15% reduction, multiplier = 0.85. Reverse: original = 340/0.85 = £400.",
      },
      examinerTip: "Students add 15% to £340 (£340 × 1.15 = £391) instead of dividing by 0.85 to reverse the reduction.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "£4,434.90",
        grade6: "Multiplier = 1.035. Total = £4000 × 1.035³ ≈ £4,434.90",
        grade8: "A = P(1 + r)ⁿ = 4000 × 1.035³ = 4000 × 1.10872 ≈ £4,434.90. Formula approach avoids step-by-step rounding errors.",
      },
      examinerTip: "Students add simple interest instead of compounding: 3 × 3.5% = 10.5% of £4000 = £420, total £4420 — not the same as compound interest.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "23,040",
        grade6: "Multiplier = 0.96. 25000 × 0.96² = 25000 × 0.9216 = 23,040",
        grade8: "25000 × 0.96² = 23,040. Step check: year 1 = 24,000; year 2 = 24,000 × 0.96 = 23,040.",
      },
      examinerTip: "Students subtract 4% twice as simple interest (25000 − 2000 = 23000 each year) rather than applying 0.96 twice to a reducing base.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "11/12",
        grade6: "LCD = 12. 2/3 = 8/12, 1/4 = 3/12. Sum = 11/12",
        grade8: "LCD(3,4) = 12. 8/12 + 3/12 = 11/12. HCF(11,12) = 1 so already in simplest form.",
      },
      examinerTip: "Students add numerators and denominators separately: 2/3 + 1/4 = 3/7.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "7/12",
        grade6: "LCD = 12. 3/4 = 9/12, 1/6 = 2/12. 9/12 − 2/12 = 7/12",
        grade8: "LCD(4,6) = 12. 9/12 − 2/12 = 7/12. HCF(7,12) = 1, already fully simplified.",
      },
      examinerTip: "Students subtract numerators and denominators separately, writing 3/4 − 1/6 = 2/2 = 1.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "3/10",
        grade6: "2 × 3 = 6, 5 × 4 = 20. 6/20 simplifies by ÷2 = 3/10",
        grade8: "Cross-cancel before multiplying: HCF(2,4)=2 → 1/5 × 3/2 = 3/10. Faster than multiplying then simplifying.",
      },
      examinerTip: "Students find a common denominator before multiplying (as they would for addition), which is incorrect for multiplication.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "3¾",
        grade6: "1⅔ = 5/3, 2¼ = 9/4. 5/3 × 9/4 = 45/12 = 15/4 = 3¾",
        grade8: "5/3 × 9/4: cross-cancel HCF(9,3)=3 → 5/1 × 3/4 = 15/4 = 3¾.",
      },
      examinerTip: "Students multiply whole-number parts and fraction parts separately (1×2=2, 2/3×1/4=2/12) instead of converting to improper fractions first.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "2",
        grade6: "KCF: 3/4 × 8/3. Cancel: 3s cancel, 8÷4=2. Answer = 2",
        grade8: "3/4 ÷ 3/8 = 3/4 × 8/3. Cancel: 3s and 8/4 → 1 × 2 = 2.",
      },
      examinerTip: "Students flip the first fraction instead of the second, writing 4/3 × 3/8 = 1/2.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "4 1/12",
        grade6: "7/3 + 7/4. LCD=12: 28/12 + 21/12 = 49/12 = 4 1/12",
        grade8: "49/12: 12×4=48, remainder 1. Answer: 4 1/12. Alternative: add whole parts (3) then fractions (1/3+3/4=13/12=1 1/12), total 4 1/12.",
      },
      examinerTip: "Students add whole and fraction parts separately but fail to regroup when the fraction sum exceeds 1, leaving the answer as 3 13/12.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "2 − √3 (multiply by conjugate (2−√3); denominator becomes 1)",
        grade6: "Multiply top and bottom by (2−√3). Denominator: (2+√3)(2−√3) = 4−3 = 1. Result: (2−√3)/1 = 2−√3",
        grade8: "Rationalise: ×(2−√3)/(2−√3). Denominator = difference of squares = 4−3=1. Numerator = 2−√3. Therefore 1/(2+√3) = 2−√3. □",
      },
      examinerTip: "Students multiply by (2+√3)/(2+√3) instead of the conjugate (2−√3), making the denominator (2+√3)² = 7+4√3, which is harder to simplify.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "(5x − 4) / [(x+1)(x−2)]",
        grade6: "LCD = (x+1)(x−2). Numerator: 3(x−2) + 2(x+1) = 3x−6+2x+2 = 5x−4. Answer: (5x−4)/[(x+1)(x−2)]",
        grade8: "LCD = (x+1)(x−2). Numerator: 3(x−2)+2(x+1) = 5x−4. Final answer: (5x−4)/[(x+1)(x−2)]. Check: 5x−4 has no common factor with either denominator factor.",
      },
      examinerTip: "Students add numerators directly without multiplying each by the missing factor, writing (3+2)/[(x+1)(x−2)] = 5/[(x+1)(x−2)].",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "£27 and £45",
        grade6: "3+5=8 parts. 1 part = £72÷8 = £9. Shares: 3×£9=£27 and 5×£9=£45",
        grade8: "£9 per part. 3:5 → £27:£45. Check: 27+45=72 ✓",
      },
      examinerTip: "Students divide £72 by the larger ratio number (÷5) instead of the total number of parts (÷8).",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "2 : 3",
        grade6: "HCF(24,36) = 12. 24÷12 : 36÷12 = 2:3",
        grade8: "HCF by prime factors: 24=2³×3, 36=2²×3². HCF=12. 24÷12:36÷12 = 2:3.",
      },
      examinerTip: "Students divide by a common factor that is not the HCF (e.g. dividing by 6 to get 4:6) and stop without simplifying further.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "1400 ml",
        grade6: "1 part = 350 ml (the squash). Water = 4 parts = 4×350 = 1400 ml",
        grade8: "Water = 4×350 = 1400 ml. Total mixture = 5×350 = 1750 ml (not required but useful check).",
      },
      examinerTip: "Students calculate the total mixture (5×350 = 1750 ml) instead of the water only (4×350 = 1400 ml).",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "Jake £300, Maya £180",
        grade6: "Difference in parts = 5−3 = 2. 2 parts = £120 → 1 part = £60. Jake: 5×£60=£300, Maya: 3×£60=£180",
        grade8: "2 parts=£120 → 1 part=£60. Total=8 parts=£480. Jake=5/8×£480=£300. Check: £300−£180=£120 ✓",
      },
      examinerTip: "Students divide £120 by 5+3=8 (total parts) instead of 5−3=2 (difference), giving £15 per part and wrong answers.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "750 g flour, 450 g sugar",
        grade6: "Scale factor = 10÷4 = 2.5. Flour: 300×2.5=750g. Sugar: 180×2.5=450g",
        grade8: "SF=2.5. Flour=750g, sugar=450g. Also: eggs=2×2.5=5 eggs (not asked, but same method).",
      },
      examinerTip: "Students use an additive scale factor (10−4=6 extra people) rather than a multiplicative one (10÷4=2.5), giving wrong quantities.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "y = 17.5",
        grade6: "k = 10÷4 = 2.5. y = 2.5×7 = 17.5",
        grade8: "y = kx where k = y/x = 10/4 = 2.5. y(7) = 17.5. Ratio method: y₂ = y₁×(x₂/x₁) = 10×(7/4) = 17.5.",
      },
      examinerTip: "Students find the additive difference (10−4=6) and try to apply it proportionally rather than finding the constant of proportionality k.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "y = 2.5",
        grade6: "Inverse proportion: k = y×x = 4×5 = 20. y = 20÷8 = 2.5",
        grade8: "y = 20/x. y(8) = 2.5. Note: doubling x from 4 to 8 halves y from 4 to 2 — hallmark of inverse proportion.",
      },
      examinerTip: "Students treat it as direct proportion (y = kx), finding k = 0.8 and y = 0.8×8 = 6.4 instead of 2.5.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "p = 192",
        grade6: "p = kq². k = 75÷5² = 75÷25 = 3. p = 3×8² = 3×64 = 192",
        grade8: "p = 3q². p(8) = 192. Check: if q doubles (5→10), p quadruples (75→300) since (10/5)²=4.",
      },
      examinerTip: "Students forget to square q before finding k, writing k = 75÷5 = 15, then p = 15×8 = 120.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "4.75 × 10⁶",
        grade6: "Coefficient = 4.75 (between 1 and 10). Decimal moved 6 places left → ×10⁶. Answer: 4.75 × 10⁶",
        grade8: "4,750,000: place decimal after first non-zero digit → 4.75. Count 6 places left → 4.75 × 10⁶.",
      },
      examinerTip: "Students write 47.5 × 10⁵ instead of adjusting the coefficient to be strictly between 1 and 10.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "8.5 × 10⁻⁵",
        grade6: "Coefficient = 8.5. Decimal moved 5 places right → negative power. Answer: 8.5 × 10⁻⁵",
        grade8: "0.000085: first sig fig is 8. Move decimal 5 places right → 8.5 × 10⁻⁵. Numbers less than 1 always have negative powers.",
      },
      examinerTip: "Students write a positive power (8.5 × 10⁵) for a small number, not recognising that numbers less than 1 require a negative power.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "56,000",
        grade6: "Positive power → large number. Move decimal 4 places right: 5.6 → 56,000",
        grade8: "5.6 × 10⁴: positive power means multiply by 10,000. 5.6 × 10,000 = 56,000.",
      },
      examinerTip: "Students move the decimal in the wrong direction, writing 0.00056 instead of 56,000.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "1.28 × 10⁹",
        grade6: "Coefficients: 3.2 × 4 = 12.8. Powers: 10⁵ × 10³ = 10⁸. 12.8 × 10⁸ = 1.28 × 10⁹",
        grade8: "3.2 × 4 = 12.8, 10⁵ × 10³ = 10⁸. Adjust: 12.8 × 10⁸ → 1.28 × 10¹ × 10⁸ = 1.28 × 10⁹.",
      },
      examinerTip: "Students correctly get 12.8 × 10⁸ but leave it in this non-standard form instead of adjusting the coefficient below 10.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "3 × 10³",
        grade6: "Coefficients: 9.6 ÷ 3.2 = 3. Powers: 10⁷ ÷ 10⁴ = 10³. Answer: 3 × 10³",
        grade8: "9.6/3.2 = 3; 10^(7−4) = 10³. Answer: 3 × 10³. Already in standard form (coefficient is exactly 3).",
      },
      examinerTip: "Students add the powers instead of subtracting when dividing, giving 10¹¹ instead of 10³.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "500 seconds",
        grade6: "time = distance ÷ speed. Coefficients: 1.5÷3=0.5. Powers: 10⁸÷10⁵=10³. 0.5×10³ = 5×10² = 500 s",
        grade8: "(1.5/3) × 10^(8−5) = 0.5 × 10³. Adjust: 5 × 10² = 500 s. Always check the coefficient is between 1 and 10 after dividing.",
      },
      examinerTip: "Students get 0.5 × 10³ but do not adjust to standard form, or divide powers rather than subtracting exponents.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "5.8 × 10³",
        grade6: "Convert: 5×10³=5000 and 8×10²=800. 5000+800=5800. In standard form: 5.8×10³",
        grade8: "5000+800=5800=5.8×10³. For addition in standard form, always convert to ordinary numbers first — you cannot add coefficients directly.",
      },
      examinerTip: "Students try to add coefficients directly: (5+8)×10^(something), which is meaningless when powers differ.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "8.75 times thicker",
        grade6: "Coefficients: 7÷8=0.875. Powers: 10⁻²÷10⁻³=10^(−2+3)=10¹. 0.875×10=8.75",
        grade8: "(7/8) × 10^(−2−(−3)) = 0.875 × 10¹ = 8.75. The hair is 8.75 times thicker than a red blood cell.",
      },
      examinerTip: "Students subtract powers incorrectly: 10^(−2 − (−3)) = 10^(−5) instead of 10^(−2+3)=10¹, forgetting that subtracting a negative gives a positive.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "x = 5",
        grade6: "3x = 22−7 = 15. x = 15÷3 = 5",
        grade8: "3x+7=22 → 3x=15 → x=5. Check: 3(5)+7=22 ✓",
      },
      examinerTip: "Students divide both sides by 3 before subtracting 7, giving x+7/3=22/3 — incorrect order of inverse operations.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "x = 4",
        grade6: "Expand: 6x−8=16. 6x=24. x=4",
        grade8: "2(3x−4)=16: divide both sides by 2 first → 3x−4=8 → x=4. Or expand: 6x−8=16 → x=4.",
      },
      examinerTip: "Students only multiply the first term inside the bracket by 2: writing 6x−4=16 instead of 6x−8=16.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "x = 4",
        grade6: "5x−2x=9+3. 3x=12. x=4",
        grade8: "5x−3=2x+9 → 3x=12 → x=4. Check: 5(4)−3=17; 2(4)+9=17 ✓",
      },
      examinerTip: "Students move the constant to the wrong side, writing 3x = 9−3 = 6, giving x=2 instead of x=4.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "x = 11",
        grade6: "LCM=12. ×12: 3(x+3)=2(2x−1). 3x+9=4x−2. x=11",
        grade8: "×12: 3(x+3)=2(2x−1) → 3x+9=4x−2 → 9+2=x → x=11. Check: (14)/4=3.5 and (21)/6=3.5 ✓",
      },
      examinerTip: "Students multiply by 4 and 6 separately without clearing both fractions in one step, or forget to multiply the whole numerator expressions.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "x = 8.5",
        grade6: "Expand: 6x+15=8x−2. Collect: 17=2x. x=8.5",
        grade8: "6x+15=8x−2 → 17=2x → x=8.5 (or 17/2).",
      },
      examinerTip: "Students make a sign error expanding 2(4x−1) as 8x+2 instead of 8x−2.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "x=7, length=17 cm, width=6 cm",
        grade6: "2[(2x+3)+(x−1)]=46 → 2(3x+2)=46 → 6x+4=46 → x=7. Length=17cm, width=6cm",
        grade8: "P=2(l+w)=46 → l+w=23. (2x+3)+(x−1)=23 → 3x+2=23 → x=7. Length=17cm, width=6cm. Check: 2(17+6)=46 ✓",
      },
      examinerTip: "Students write P=l+w=46 (omitting the factor of 2), giving 3x+2=46, x=44/3 — a non-integer which should signal an error.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "x=4, y=2",
        grade6: "From eq2: x=y+2. Substitute: 3(y+2)+2y=16 → 5y=10 → y=2, x=4",
        grade8: "x=y+2 → 3(y+2)+2y=16 → 5y=10 → y=2, x=4. Check: 3(4)+2(2)=16 ✓; 4−2=2 ✓",
      },
      examinerTip: "Students substitute incorrectly, merging the expression into the equation: 3(y+2+2y)=16 instead of 3(y+2)+2y=16.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "x=2 or x=−5",
        grade6: "Need factors of −10 adding to 3: 5 and −2. (x+5)(x−2)=0. x=−5 or x=2",
        grade8: "(x+5)(x−2)=0 → x=−5 or x=2. Alternative: quadratic formula gives x=(−3±7)/2 → x=2 or −5.",
      },
      examinerTip: "Students find the correct numbers (5 and −2) but write (x−5)(x+2)=0, reversing the signs and giving x=5 or x=−2.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "A = 42",
        grade6: "A = ½ × 12 × 7 = 6 × 7 = 42",
        grade8: "A = ½bh = ½(12)(7) = 42. Units: 42 cm² if dimensions in cm.",
      },
      examinerTip: "Students forget the ½ and calculate 12 × 7 = 84.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "v = 17",
        grade6: "v = 5 + (3 × 4) = 5 + 12 = 17",
        grade8: "v = u + at = 5 + (3)(4) = 17. BODMAS: multiplication before addition is essential here.",
      },
      examinerTip: "Students add u and a before multiplying by t: (5+3) × 4 = 32 — a BODMAS error.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "V = 60 cm³",
        grade6: "V = 5 × 4 × 3 = 60 cm³",
        grade8: "V = lwh = 5 × 4 × 3 = 60 cm³. Multiplication is commutative so order does not matter.",
      },
      examinerTip: "Students confuse V = lwh with a surface area formula, or square one dimension accidentally.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "s = −33 m",
        grade6: "ut = 4×3=12. ½at² = ½×(−10)×9 = −45. s = 12+(−45) = −33 m",
        grade8: "s = ut + ½at² = 12 + ½(−10)(9) = 12 − 45 = −33 m. Negative means below the starting point.",
      },
      examinerTip: "Students omit the ½: writing at² = −10×9 = −90, giving s = 12−90 = −78 m.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "u = v − at",
        grade6: "Subtract at from both sides: v − at = u. So u = v − at",
        grade8: "v = u + at → u = v − at. One operation: subtract at from both sides.",
      },
      examinerTip: "Students rearrange to v − u = at then stop, not isolating u but instead trying to divide by a.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "r = √(A/π)",
        grade6: "Divide by π: r² = A/π. Take positive square root: r = √(A/π)",
        grade8: "A = πr² → r² = A/π → r = √(A/π). Only positive root since r is a length.",
      },
      examinerTip: "Students divide by π correctly to get r² = A/π but forget to take the square root, leaving r² as the subject.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "x = (4y + 2) / (y − 3)",
        grade6: "Multiply by (x−4): y(x−4)=3x+2 → yx−4y=3x+2. Collect x: x(y−3)=4y+2. Divide: x=(4y+2)/(y−3)",
        grade8: "y(x−4)=3x+2 → yx−3x=4y+2 → x(y−3)=4y+2 → x=(4y+2)/(y−3). Domain: y≠3.",
      },
      examinerTip: "Students expand and collect x terms on one side but forget to factorise, leaving yx−3x=4y+2 without extracting the common x factor.",
      auditStatus: 'pending',
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
      sampleAnswer: {
        grade4: "x = 3 or x = −0.5",
        grade6: "a=2, b=−5, c=−3. Discriminant = 25+24=49. x = (5±7)/4. x=3 or x=−0.5",
        grade8: "b²−4ac = 49. x=(5±7)/4 → x=3 or x=−½. Alternative: factorise as (2x+1)(x−3)=0 → same solutions.",
      },
      examinerTip: "Students use b=5 instead of b=−5 in the formula, giving x=(−5±7)/4 → x=0.5 or x=−3 instead of x=3 or x=−0.5.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // INTEGERS, DECIMALS & ROUNDING (num-integers)
    // ══════════════════════════════════════════════════════════
    {
      id: 'int-A01', subtopic: 'num-integers', band: 'A', marks: 2,
      question: 'Round 47,382 to the nearest thousand.',
      steps: [
        {
          prompt: 'Look at the hundreds digit. Is it 5 or more?',
          hint1: 'The hundreds digit is 3 (in 47,382).',
          hint2: '3 is less than 5, so round down.',
          hint3: 'Round down: the thousands digit stays as 7.',
          answer: 47000, tolerance: 0, unit: '',
          explanation: 'Hundreds digit = 3 < 5, so the thousands digit stays at 7. Answer: 47,000.',
        },
      ],
      workedExample: {
        question: 'Round 63,750 to the nearest thousand.',
        steps: ['Hundreds digit = 7 ≥ 5, so round up. 63,750 → <strong>64,000</strong>'],
      },
      sampleAnswer: {
        grade4: "47,000",
        grade6: "Hundreds digit = 3 < 5 → round down. Thousands digit stays at 7. Answer: 47,000",
        grade8: "47,382: to nearest thousand, look at hundreds digit (3). 3 < 5 → round down. 47,000.",
      },
      examinerTip: "Students look at the tens digit (8) rather than the hundreds digit (3), rounding up to 48,000.",
      auditStatus: 'pending',
    },
    {
      id: 'int-A02', subtopic: 'num-integers', band: 'A', marks: 2,
      question: 'Round 0.04763 to 2 significant figures.',
      steps: [
        {
          prompt: 'Identify the first significant figure (first non-zero digit).',
          hint1: 'Leading zeros are not significant.',
          hint2: 'The first significant figure is 4.',
          hint3: 'First sig fig = 4 (the 4 in the hundredths place).',
          answer: 4, tolerance: 0, unit: '',
          explanation: 'Leading zeros don\'t count. First sig fig is 4, second is 7.',
          checkType: 'skip',
        },
        {
          prompt: 'Round to 2 sig figs. The third sig fig is 6 — what does 0.04763 round to?',
          hint1: 'Third sig fig is 6 ≥ 5, so round up the second sig fig.',
          hint2: '7 rounds up to 8.',
          hint3: '0.048.',
          answer: 0.048, tolerance: 0.00001, unit: '',
          explanation: '0.04763: 1st sf = 4, 2nd sf = 7. Third sf = 6 ≥ 5, round 7 up to 8. Answer: 0.048.',
        },
      ],
      workedExample: {
        question: 'Round 0.003829 to 2 significant figures.',
        steps: ['1st sf = 3, 2nd sf = 8. Third sf = 2 < 5 → round down.', 'Answer: <strong>0.0038</strong>'],
      },
      sampleAnswer: {
        grade4: "0.048",
        grade6: "First sig fig = 4, second = 7. Third sig fig = 6 ≥ 5 → round 7 up to 8. Answer: 0.048",
        grade8: "0.04763: leading zeros are not significant. 1st sf=4, 2nd sf=7. Third sf=6≥5 → round up: 0.048.",
      },
      examinerTip: "Students count leading zeros as significant figures, rounding at the wrong digit entirely.",
      auditStatus: 'pending',
    },
    {
      id: 'int-A03', subtopic: 'num-integers', band: 'A', marks: 2,
      question: 'Write these numbers in order, smallest first: 0.34, 0.304, 0.043, 0.43',
      steps: [
        {
          prompt: 'Compare the digits column by column. Which is smallest?',
          hint1: '0.043 has 0 in the tenths place — smaller than all others.',
          hint2: 'Next: 0.304 has 3 tenths but 0 hundredths. Then 0.34. Largest is 0.43.',
          hint3: '0.043, 0.304, 0.34, 0.43',
          answer: 43, tolerance: 0, unit: '',
          explanation: 'Tenths digits: 0.043=0, 0.304=3, 0.34=3, 0.43=4. Order: 0.043, 0.304, 0.34, 0.43.',
          checkType: 'skip',
          displayAnswer: '0.043, 0.304, 0.34, 0.43',
        },
      ],
      workedExample: {
        question: 'Order smallest first: 0.6, 0.06, 0.606, 0.066',
        steps: ['Tenths: 0.06=0, 0.066=0, 0.6=6, 0.606=6. Then hundredths for ties.', 'Order: <strong>0.06, 0.066, 0.6, 0.606</strong>'],
      },
      sampleAnswer: {
        grade4: "0.043, 0.304, 0.34, 0.43",
        grade6: "Compare tenths: 0.043=0, 0.304=3, 0.34=3, 0.43=4. For equal tenths, compare hundredths: 0.304 < 0.34. Order: 0.043, 0.304, 0.34, 0.43",
        grade8: "Tenths: 0 < 3 < 4. For the two with tenths=3: hundredths 0 (0.304) < 3 (0.34). Final order: 0.043, 0.304, 0.34, 0.43.",
      },
      examinerTip: "Students treat the digits after the decimal point as whole numbers (e.g. thinking 304 > 340) giving an incorrect order.",
      auditStatus: 'pending',
    },
    {
      id: 'int-B01', subtopic: 'num-integers', band: 'B', marks: 3,
      question: 'A = 3.7 (1 d.p.), B = 12 (2 s.f.). Find the maximum possible value of A × B.',
      steps: [
        {
          prompt: 'Find the upper bound of A (3.7 to 1 d.p.).',
          hint1: 'A is between 3.65 and 3.75.',
          hint2: 'Upper bound of A = 3.75.',
          hint3: 'Upper bound of A = 3.75.',
          answer: 3.75, tolerance: 0.001, unit: '',
          explanation: '3.7 rounded to 1 d.p. means 3.65 ≤ A < 3.75. Upper bound = 3.75.',
        },
        {
          prompt: 'Find the upper bound of B (12 to 2 s.f.).',
          hint1: 'B is between 11.5 and 12.5.',
          hint2: 'Upper bound of B = 12.5.',
          hint3: 'Upper bound of B = 12.5.',
          answer: 12.5, tolerance: 0.001, unit: '',
          explanation: '12 to 2 s.f. means 11.5 ≤ B < 12.5. Upper bound = 12.5.',
        },
        {
          prompt: 'Calculate the maximum value of A × B.',
          hint1: 'Maximum product uses both upper bounds.',
          hint2: '3.75 × 12.5 = ?',
          hint3: '3.75 × 12.5 = 46.875.',
          answer: 46.875, tolerance: 0.001, unit: '',
          explanation: 'Max A × B = 3.75 × 12.5 = 46.875.',
        },
      ],
      workedExample: {
        question: 'P = 4.2 (1 d.p.), Q = 8 (1 s.f.). Find max P × Q.',
        steps: ['Upper bound P = 4.25, upper bound Q = 8.5', 'Max = 4.25 × 8.5 = <strong>36.125</strong>'],
      },
      sampleAnswer: {
        grade4: "46.875",
        grade6: "Upper bound A = 3.75, upper bound B = 12.5. Max = 3.75 × 12.5 = 46.875",
        grade8: "UB(A)=3.75, UB(B)=12.5. Max(A×B) = 3.75 × 12.5 = 46.875. Rule: max product uses both upper bounds.",
      },
      examinerTip: "Students use the lower bound for both values, or upper bound for only one, not recognising that maximum product requires both upper bounds.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // POWERS, ROOTS & INDICES (num-powers-roots)
    // ══════════════════════════════════════════════════════════
    {
      id: 'pow-A01', subtopic: 'num-powers-roots', band: 'A', marks: 2,
      question: 'Work out 2⁵ × 2³, giving your answer as a power of 2.',
      steps: [
        {
          prompt: 'Use the multiplication law: aᵐ × aⁿ = aᵐ⁺ⁿ. Add the powers.',
          hint1: '5 + 3 = ?',
          hint2: '5 + 3 = 8.',
          hint3: '2⁸.',
          answer: 8, tolerance: 0, unit: '',
          explanation: '2⁵ × 2³ = 2^(5+3) = 2⁸. (= 256)',
          displayAnswer: '2⁸',
        },
      ],
      workedExample: {
        question: 'Work out 3⁴ × 3² as a power of 3.',
        steps: ['Multiplication law: 3⁴ × 3² = 3^(4+2) = <strong>3⁶</strong>'],
      },
      sampleAnswer: {
        grade4: "2⁸",
        grade6: "Multiplication law: add the indices. 2⁵ × 2³ = 2^(5+3) = 2⁸",
        grade8: "aᵐ × aⁿ = aᵐ⁺ⁿ. 2⁵ × 2³ = 2⁸ = 256.",
      },
      examinerTip: "Students multiply the indices instead of adding: 2⁵ × 2³ = 2¹⁵.",
      auditStatus: 'pending',
    },
    {
      id: 'pow-A02', subtopic: 'num-powers-roots', band: 'A', marks: 2,
      question: 'Evaluate √144 + ∛27.',
      steps: [
        {
          prompt: 'Find √144.',
          hint1: '12 × 12 = 144.',
          hint2: '√144 = 12.',
          hint3: '√144 = 12.',
          answer: 12, tolerance: 0, unit: '',
          explanation: '12² = 144, so √144 = 12.',
        },
        {
          prompt: 'Find ∛27, then add.',
          hint1: '3 × 3 × 3 = 27, so ∛27 = 3.',
          hint2: '12 + 3 = 15.',
          hint3: '15.',
          answer: 15, tolerance: 0, unit: '',
          explanation: '∛27 = 3. Total: 12 + 3 = 15.',
        },
      ],
      workedExample: {
        question: 'Evaluate √81 + ∛8.',
        steps: ['√81 = 9, ∛8 = 2', '9 + 2 = <strong>11</strong>'],
      },
      sampleAnswer: {
        grade4: "15",
        grade6: "√144 = 12 and ∛27 = 3. Sum = 12 + 3 = 15",
        grade8: "12² = 144 so √144 = 12. 3³ = 27 so ∛27 = 3. Total = 15.",
      },
      examinerTip: "Students confuse √ and ∛, evaluating √27 ≈ 5.2 instead of ∛27 = 3.",
      auditStatus: 'pending',
    },
    {
      id: 'pow-A03', subtopic: 'num-powers-roots', band: 'A', marks: 2,
      question: 'Simplify (3²)⁴.',
      steps: [
        {
          prompt: 'Use the power law: (aᵐ)ⁿ = aᵐⁿ. Multiply the indices.',
          hint1: '2 × 4 = ?',
          hint2: '2 × 4 = 8.',
          hint3: '3⁸.',
          answer: 8, tolerance: 0, unit: '',
          explanation: '(3²)⁴ = 3^(2×4) = 3⁸.',
          displayAnswer: '3⁸',
        },
      ],
      workedExample: {
        question: 'Simplify (5³)².',
        steps: ['Power law: (5³)² = 5^(3×2) = <strong>5⁶</strong>'],
      },
      sampleAnswer: {
        grade4: "3⁸",
        grade6: "Power law: multiply indices. (3²)⁴ = 3^(2×4) = 3⁸",
        grade8: "(aᵐ)ⁿ = aᵐⁿ. (3²)⁴ = 3⁸ = 6561.",
      },
      examinerTip: "Students add the indices instead of multiplying: (3²)⁴ = 3^(2+4) = 3⁶.",
      auditStatus: 'pending',
    },
    {
      id: 'pow-B01', subtopic: 'num-powers-roots', band: 'B', marks: 3,
      question: 'Write 16^(3/4) as an integer.',
      steps: [
        {
          prompt: 'A fractional index: 16^(3/4) means (⁴√16)³. Find the fourth root of 16 first.',
          hint1: '2⁴ = 16, so ⁴√16 = 2.',
          hint2: '⁴√16 = 2.',
          hint3: '⁴√16 = 2.',
          answer: 2, tolerance: 0, unit: '',
          explanation: 'The denominator of the fraction is the root. ⁴√16 = 2.',
        },
        {
          prompt: 'Now raise your answer to the power 3.',
          hint1: '2³ = ?',
          hint2: '2 × 2 × 2 = 8.',
          hint3: '8.',
          answer: 8, tolerance: 0, unit: '',
          explanation: '(⁴√16)³ = 2³ = 8.',
        },
      ],
      workedExample: {
        question: 'Write 8^(2/3) as an integer.',
        steps: ['Denominator = cube root: ∛8 = 2', 'Raise to power 2: 2² = <strong>4</strong>'],
      },
      sampleAnswer: {
        grade4: "8",
        grade6: "Denominator of fraction = root: ⁴√16 = 2. Numerator = power: 2³ = 8",
        grade8: "16^(3/4) = (⁴√16)³ = 2³ = 8. Alternative: 16^(3/4) = (16^(1/4))³ = 2³ = 8.",
      },
      examinerTip: "Students evaluate 16³=4096 first, then struggle to find the fourth root, rather than taking the fourth root (giving 2) first.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // BOUNDS (num-bounds) — Higher tier
    // ══════════════════════════════════════════════════════════
    {
      id: 'bnd-A01', subtopic: 'num-bounds', band: 'A', marks: 2,
      question: 'A length is measured as 8.4 cm to 1 decimal place. Write the error interval.',
      steps: [
        {
          prompt: 'Find the lower bound. Half of 0.1 cm below 8.4.',
          hint1: 'Half the precision = 0.05 cm.',
          hint2: '8.4 − 0.05 = 8.35.',
          hint3: 'Lower bound = 8.35 cm.',
          answer: 8.35, tolerance: 0.001, unit: 'cm',
          explanation: 'Rounded to 1 d.p. (precision 0.1 cm). Lower bound = 8.4 − 0.05 = 8.35 cm.',
        },
        {
          prompt: 'State the error interval using inequality notation.',
          hint1: 'Upper bound = 8.4 + 0.05 = 8.45 cm.',
          hint2: '8.35 ≤ length < 8.45.',
          hint3: '8.35 ≤ l < 8.45.',
          answer: 8.45, tolerance: 0.001, unit: 'cm',
          explanation: 'Error interval: 8.35 ≤ l < 8.45 cm. Upper bound is strict (<).',
          displayAnswer: '8.35 ≤ l < 8.45',
        },
      ],
      workedExample: {
        question: 'A mass is 5.2 kg to 1 d.p. Write the error interval.',
        steps: ['Half precision = 0.05. Lower = 5.15, Upper = 5.25', '<strong>5.15 ≤ m < 5.25</strong>'],
      },
      sampleAnswer: {
        grade4: "8.35 ≤ l < 8.45",
        grade6: "Half precision = 0.05. Lower = 8.35, Upper = 8.45. Error interval: 8.35 ≤ l < 8.45",
        grade8: "Precision = 0.1 cm; half = 0.05. 8.35 ≤ l < 8.45. Upper bound is strict (<): 8.45 would round to 8.5, not 8.4.",
      },
      examinerTip: "Students write 8.35 ≤ l ≤ 8.45 with ≤ at the upper bound, not recognising that the upper bound is strict (< not ≤).",
      auditStatus: 'pending',
    },
    {
      id: 'bnd-B01', subtopic: 'num-bounds', band: 'B', marks: 3,
      question: 'p = 7.3 (1 d.p.), q = 2.1 (1 d.p.). Find the lower bound of p − q.',
      steps: [
        {
          prompt: 'For the minimum of p − q, you need minimum p and maximum q. Find the lower bound of p.',
          hint1: 'Lower bound of p = 7.3 − 0.05 = 7.25.',
          hint2: '7.25.',
          hint3: '7.25.',
          answer: 7.25, tolerance: 0.001, unit: '',
          explanation: 'Lower bound of p = 7.25.',
        },
        {
          prompt: 'Find the upper bound of q.',
          hint1: 'Upper bound of q = 2.1 + 0.05 = 2.15.',
          hint2: '2.15.',
          hint3: '2.15.',
          answer: 2.15, tolerance: 0.001, unit: '',
          explanation: 'Upper bound of q = 2.15.',
        },
        {
          prompt: 'Calculate the lower bound of p − q.',
          hint1: 'Lower bound of difference = lower bound of p minus upper bound of q.',
          hint2: '7.25 − 2.15 = ?',
          hint3: '5.10.',
          answer: 5.10, tolerance: 0.001, unit: '',
          explanation: 'Lower bound of p − q = 7.25 − 2.15 = 5.10.',
        },
      ],
      workedExample: {
        question: 'x = 9.4 (1 d.p.), y = 3.2 (1 d.p.). Find lower bound of x − y.',
        steps: ['Min x = 9.35, Max y = 3.25', 'Lower bound = 9.35 − 3.25 = <strong>6.10</strong>'],
      },
      sampleAnswer: {
        grade4: "5.10",
        grade6: "Min(p−q) = min p − max q = 7.25 − 2.15 = 5.10",
        grade8: "LB(p−q) = LB(p) − UB(q) = 7.25 − 2.15 = 5.10. Rule: to minimise a difference, use minimum p and maximum q.",
      },
      examinerTip: "Students use LB(p) − LB(q) = 7.25 − 2.05 = 5.20, not realising that minimising a difference requires maximising the quantity being subtracted.",
      auditStatus: 'pending',
    },
    {
      id: 'bnd-C01', subtopic: 'num-bounds', band: 'C', marks: 4,
      question: 'd = 240 m (3 s.f.), t = 12.4 s (3 s.f.). Find the upper bound of speed = d/t.',
      steps: [
        {
          prompt: 'For maximum speed, use maximum d and minimum t. Upper bound of d = ?',
          hint1: 'd = 240 m to 3 s.f. Half precision = 0.5.',
          hint2: 'Upper bound of d = 240.5 m.',
          hint3: '240.5 m.',
          answer: 240.5, tolerance: 0.01, unit: 'm',
          explanation: 'Upper bound d = 240.5 m.',
        },
        {
          prompt: 'Lower bound of t = ?',
          hint1: 't = 12.4 s to 3 s.f. Half precision = 0.05.',
          hint2: 'Lower bound of t = 12.35 s.',
          hint3: '12.35 s.',
          answer: 12.35, tolerance: 0.001, unit: 's',
          explanation: 'Lower bound t = 12.35 s.',
        },
        {
          prompt: 'Calculate the upper bound of speed = d/t.',
          hint1: '240.5 ÷ 12.35 = ?',
          hint2: 'Use a calculator: ≈ 19.47...',
          hint3: '≈ 19.47 m/s.',
          answer: 19.47, tolerance: 0.05, unit: 'm/s',
          explanation: 'Upper bound = 240.5 ÷ 12.35 ≈ 19.47 m/s.',
        },
      ],
      workedExample: {
        question: 'd = 150 m (3 s.f.), t = 8.5 s (2 s.f.). Upper bound of speed?',
        steps: ['Max d = 150.5, Min t = 8.45', 'Upper bound = 150.5 ÷ 8.45 ≈ <strong>17.81 m/s</strong>'],
      },
      sampleAnswer: {
        grade4: "≈ 19.47 m/s",
        grade6: "Max speed = max d ÷ min t = 240.5 ÷ 12.35 ≈ 19.47 m/s",
        grade8: "UB(d) = 240.5 m (±0.5), LB(t) = 12.35 s (±0.05). UB(speed) = 240.5/12.35 ≈ 19.47 m/s.",
      },
      examinerTip: "Students use max d and max t (both upper bounds) instead of max d and min t, reversing the logic for maximising a quotient.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // RATIO (num-ratio)
    // ══════════════════════════════════════════════════════════
    {
      id: 'nrt-A01', subtopic: 'num-ratio', band: 'A', marks: 2,
      question: 'In a bag there are red and blue counters in the ratio 3 : 5. There are 24 red counters. How many blue counters are there?',
      steps: [
        {
          prompt: 'Find the value of one part. 3 parts = 24 red counters.',
          hint1: '24 ÷ 3 = ?',
          hint2: 'One part = 8.',
          hint3: 'One part = 8 counters.',
          answer: 8, tolerance: 0, unit: '',
          explanation: '3 parts = 24, so 1 part = 24 ÷ 3 = 8.',
        },
        {
          prompt: 'Calculate the number of blue counters (5 parts).',
          hint1: '5 × 8 = ?',
          hint2: '5 × 8 = 40.',
          hint3: '40 blue counters.',
          answer: 40, tolerance: 0, unit: '',
          explanation: 'Blue = 5 parts = 5 × 8 = 40.',
        },
      ],
      workedExample: {
        question: 'Red : blue = 2 : 7. There are 18 red. How many blue?',
        steps: ['1 part = 18 ÷ 2 = 9', 'Blue = 7 × 9 = <strong>63</strong>'],
      },
      sampleAnswer: {
        grade4: "40 blue counters",
        grade6: "1 part = 24÷3 = 8. Blue = 5×8 = 40",
        grade8: "3 parts=24 → 1 part=8. Blue=5×8=40. Check: red:blue = 24:40 = 3:5 ✓",
      },
      examinerTip: "Students find 1 part (8) and multiply by 3 again instead of by 5, giving 24 blue counters.",
      auditStatus: 'pending',
    },
    {
      id: 'nrt-A02', subtopic: 'num-ratio', band: 'A', marks: 2,
      question: 'Write the ratio 45 : 60 in its simplest form.',
      steps: [
        {
          prompt: 'Find the HCF of 45 and 60.',
          hint1: 'Factors of 45: 1, 3, 5, 9, 15, 45. Factors of 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60.',
          hint2: 'Highest common factor = 15.',
          hint3: 'HCF = 15.',
          answer: 15, tolerance: 0, unit: '',
          explanation: 'HCF(45, 60) = 15.',
        },
        {
          prompt: 'Divide both parts by 15.',
          hint1: '45 ÷ 15 = 3, 60 ÷ 15 = 4.',
          hint2: 'Ratio = 3 : 4.',
          hint3: '3 : 4.',
          answer: 4, tolerance: 0, unit: '',
          explanation: '45 ÷ 15 = 3, 60 ÷ 15 = 4. Simplest form: 3 : 4.',
          displayAnswer: '3 : 4',
        },
      ],
      workedExample: {
        question: 'Simplify 20 : 35.',
        steps: ['HCF(20, 35) = 5', '20÷5 : 35÷5 = <strong>4 : 7</strong>'],
      },
      sampleAnswer: {
        grade4: "3 : 4",
        grade6: "HCF(45,60) = 15. 45÷15 : 60÷15 = 3:4",
        grade8: "HCF=15. 3:4. Alternative: 45:60 → 9:12 (÷5) → 3:4 (÷3). Always verify HCF gives the simplest form.",
      },
      examinerTip: "Students divide by a factor that is not the HCF (e.g. ÷5 gives 9:12) and stop without checking if further simplification is possible.",
      auditStatus: 'pending',
    },
    {
      id: 'nrt-B01', subtopic: 'num-ratio', band: 'B', marks: 3,
      question: 'A recipe uses flour and sugar in the ratio 5 : 2. Helen uses 350 g of flour. How much sugar does she need, and what is the total mass of the mixture?',
      steps: [
        {
          prompt: 'Find one part. 5 parts = 350 g.',
          hint1: '350 ÷ 5 = ?',
          hint2: '70 g per part.',
          hint3: '1 part = 70 g.',
          answer: 70, tolerance: 0, unit: 'g',
          explanation: '1 part = 350 ÷ 5 = 70 g.',
        },
        {
          prompt: 'Calculate the sugar (2 parts).',
          hint1: '2 × 70 = ?',
          hint2: '140 g.',
          hint3: '140 g of sugar.',
          answer: 140, tolerance: 0, unit: 'g',
          explanation: 'Sugar = 2 parts = 2 × 70 = 140 g.',
        },
        {
          prompt: 'Find the total mass.',
          hint1: '350 + 140 = ?',
          hint2: '490 g.',
          hint3: '490 g.',
          answer: 490, tolerance: 0, unit: 'g',
          explanation: 'Total = 350 + 140 = 490 g.',
        },
      ],
      workedExample: {
        question: 'Sand : cement = 3 : 1. 240 kg of sand. Find cement and total.',
        steps: ['1 part = 240 ÷ 3 = 80 kg', 'Cement = 80 kg. Total = 240 + 80 = <strong>320 kg</strong>'],
      },
      sampleAnswer: {
        grade4: "140 g sugar, 490 g total",
        grade6: "1 part = 350÷5 = 70 g. Sugar = 2×70 = 140 g. Total = 350+140 = 490 g",
        grade8: "Scale: 1 part=70g. Sugar=140g. Total = 7 parts = 7×70 = 490 g.",
      },
      examinerTip: "Students calculate sugar as 350÷2=175 g instead of finding 1 part first (70 g) then multiplying by 2.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // INEQUALITIES (alg-inequalities)
    // ══════════════════════════════════════════════════════════
    {
      id: 'ineq-A01', subtopic: 'alg-inequalities', band: 'A', marks: 2,
      question: 'Solve 3x + 5 > 14.',
      steps: [
        {
          prompt: 'Subtract 5 from both sides.',
          hint1: '3x + 5 − 5 > 14 − 5.',
          hint2: '3x > 9.',
          hint3: '3x > 9.',
          answer: 9, tolerance: 0, unit: '',
          explanation: '3x > 9.',
          checkType: 'skip',
          displayAnswer: '3x > 9',
        },
        {
          prompt: 'Divide both sides by 3.',
          hint1: '9 ÷ 3 = 3.',
          hint2: 'x > 3.',
          hint3: 'x > 3.',
          answer: 3, tolerance: 0, unit: '',
          explanation: 'x > 3.',
          displayAnswer: 'x > 3',
        },
      ],
      workedExample: {
        question: 'Solve 4x − 3 > 13.',
        steps: ['Add 3: 4x > 16', 'Divide by 4: <strong>x > 4</strong>'],
      },
      sampleAnswer: {
        grade4: "x > 3",
        grade6: "3x > 14−5 = 9. x > 3",
        grade8: "3x+5>14 → 3x>9 → x>3. The inequality sign is preserved when dividing by a positive number.",
      },
      examinerTip: "Students solve correctly but write x=3 (an equation) rather than x>3, losing the inequality sign in the final answer.",
      auditStatus: 'pending',
    },
    {
      id: 'ineq-A02', subtopic: 'alg-inequalities', band: 'A', marks: 2,
      question: 'Write down all the integers that satisfy −3 < x ≤ 2.',
      steps: [
        {
          prompt: 'The inequality says x is greater than −3 (not equal) and less than or equal to 2.',
          hint1: '−3 is NOT included (strict inequality). 2 IS included.',
          hint2: 'Integers greater than −3: −2, −1, 0, 1, 2, ...',
          hint3: 'Integers: −2, −1, 0, 1, 2.',
          answer: 5, tolerance: 0, unit: '',
          explanation: 'x > −3 and x ≤ 2. Integers: −2, −1, 0, 1, 2 (five values).',
          checkType: 'skip',
          displayAnswer: '−2, −1, 0, 1, 2',
        },
      ],
      workedExample: {
        question: 'List integers satisfying −1 ≤ x < 3.',
        steps: ['−1 is included, 3 is not.', 'Integers: <strong>−1, 0, 1, 2</strong>'],
      },
      sampleAnswer: {
        grade4: "−2, −1, 0, 1, 2",
        grade6: "x>−3 (−3 excluded) and x≤2 (2 included). Integers: −2, −1, 0, 1, 2",
        grade8: "−3 excluded by strict inequality (<). 2 included (≤). Five integer values: −2, −1, 0, 1, 2.",
      },
      examinerTip: "Students include −3 in their list, not recognising that the strict inequality x > −3 (not ≥) excludes −3.",
      auditStatus: 'pending',
    },
    {
      id: 'ineq-B01', subtopic: 'alg-inequalities', band: 'B', marks: 3,
      question: 'Solve 2(3x − 1) ≤ 4x + 6.',
      steps: [
        {
          prompt: 'Expand the bracket.',
          hint1: '2 × 3x = 6x, 2 × (−1) = −2.',
          hint2: '6x − 2 ≤ 4x + 6.',
          hint3: '6x − 2 ≤ 4x + 6.',
          answer: 0, tolerance: 0, unit: '',
          explanation: '6x − 2 ≤ 4x + 6.',
          checkType: 'skip',
          displayAnswer: '6x − 2 ≤ 4x + 6',
        },
        {
          prompt: 'Collect x terms: subtract 4x from both sides.',
          hint1: '6x − 4x − 2 ≤ 6.',
          hint2: '2x − 2 ≤ 6.',
          hint3: '2x − 2 ≤ 6.',
          answer: 6, tolerance: 0, unit: '',
          explanation: '2x − 2 ≤ 6.',
          checkType: 'skip',
          displayAnswer: '2x − 2 ≤ 6',
        },
        {
          prompt: 'Add 2, then divide by 2.',
          hint1: '2x ≤ 8, so x ≤ 4.',
          hint2: 'x ≤ 4.',
          hint3: 'x ≤ 4.',
          answer: 4, tolerance: 0, unit: '',
          explanation: '2x ≤ 8 → x ≤ 4.',
          displayAnswer: 'x ≤ 4',
        },
      ],
      workedExample: {
        question: 'Solve 3(2x + 1) ≤ 5x + 9.',
        steps: ['Expand: 6x + 3 ≤ 5x + 9', 'Subtract 5x: x + 3 ≤ 9', 'Subtract 3: <strong>x ≤ 6</strong>'],
      },
      sampleAnswer: {
        grade4: "x ≤ 4",
        grade6: "Expand: 6x−2≤4x+6. Collect: 2x≤8. x≤4",
        grade8: "6x−2≤4x+6 → 2x≤8 → x≤4. Dividing by positive 2 preserves the ≤ direction.",
      },
      examinerTip: "Students expand the bracket as 6x−1≤4x+6 (multiplying only 3x by 2 and not −1), then solve incorrectly.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // SEQUENCES (alg-sequences)
    // ══════════════════════════════════════════════════════════
    {
      id: 'seq-A01', subtopic: 'alg-sequences', band: 'A', marks: 2,
      question: 'Find the nth term of the sequence: 5, 8, 11, 14, ...',
      steps: [
        {
          prompt: 'Find the common difference.',
          hint1: '8 − 5 = 3. The sequence increases by 3 each time.',
          hint2: 'Common difference = 3.',
          hint3: 'd = 3.',
          answer: 3, tolerance: 0, unit: '',
          explanation: 'Each term increases by 3, so the nth term contains 3n.',
        },
        {
          prompt: 'Find the nth term formula: 3n + ?. When n = 1, term = 5.',
          hint1: '3 × 1 = 3. We need 5, so add 2.',
          hint2: 'nth term = 3n + 2.',
          hint3: '3n + 2.',
          answer: 2, tolerance: 0, unit: '',
          explanation: '3n + 2: when n=1, 3+2=5 ✓. When n=2, 6+2=8 ✓.',
          displayAnswer: '3n + 2',
        },
      ],
      workedExample: {
        question: 'Find nth term of 7, 11, 15, 19, ...',
        steps: ['Difference = 4, so 4n. When n=1: 4+?=7, so +3.', 'nth term = <strong>4n + 3</strong>'],
      },
      sampleAnswer: {
        grade4: "3n + 2",
        grade6: "Common difference = 3. When n=1: 3+?=5 → add 2. nth term = 3n+2",
        grade8: "d=3, first term=5. nth term = 5+3(n−1) = 3n+2. Check: n=2 → 8 ✓; n=3 → 11 ✓.",
      },
      examinerTip: "Students write 3n+5 by using the first term as the constant instead of adjusting: 3(1)=3, need 5, so constant = 5−3 = 2 (not 5).",
      auditStatus: 'pending',
    },
    {
      id: 'seq-A02', subtopic: 'alg-sequences', band: 'A', marks: 2,
      question: 'The nth term of a sequence is 5n − 2. Find the 10th term and check if 73 is in the sequence.',
      steps: [
        {
          prompt: 'Find the 10th term: substitute n = 10.',
          hint1: '5 × 10 − 2 = ?',
          hint2: '50 − 2 = 48.',
          hint3: '10th term = 48.',
          answer: 48, tolerance: 0, unit: '',
          explanation: 'n=10: 5(10)−2 = 48.',
        },
        {
          prompt: 'Is 73 in the sequence? Set 5n − 2 = 73 and solve.',
          hint1: '5n = 75.',
          hint2: 'n = 15. Since 15 is a positive integer, 73 IS in the sequence.',
          hint3: 'n = 15 — yes, 73 is in the sequence.',
          answer: 15, tolerance: 0, unit: '',
          explanation: '5n − 2 = 73 → 5n = 75 → n = 15. Integer, so yes.',
          displayAnswer: 'n = 15, so 73 is in the sequence',
        },
      ],
      workedExample: {
        question: 'nth term = 4n + 1. Find 8th term. Is 37 in the sequence?',
        steps: ['8th term: 4(8)+1 = 33', '4n+1=37 → n=9 (integer) → <strong>yes, 37 is in the sequence</strong>'],
      },
      sampleAnswer: {
        grade4: "10th term = 48. Yes, 73 is in the sequence (n=15)",
        grade6: "5(10)−2=48. Set 5n−2=73: 5n=75, n=15. Since 15 is a positive integer, 73 is in the sequence",
        grade8: "T₁₀=48. 5n−2=73 → n=15 (positive integer) → 73 is the 15th term. If n were fractional or negative, 73 would not be a term.",
      },
      examinerTip: "Students check if 73 is in the sequence by substituting trial values of n instead of solving 5n−2=73 algebraically.",
      auditStatus: 'pending',
    },
    {
      id: 'seq-B01', subtopic: 'alg-sequences', band: 'B', marks: 3,
      question: 'A geometric sequence starts 3, 6, 12, 24, ... Find the 8th term.',
      steps: [
        {
          prompt: 'Find the common ratio r.',
          hint1: '6 ÷ 3 = 2. Each term is multiplied by 2.',
          hint2: 'r = 2.',
          hint3: 'r = 2.',
          answer: 2, tolerance: 0, unit: '',
          explanation: 'Geometric sequence: each term × 2.',
        },
        {
          prompt: 'Use the formula: nth term = a × rⁿ⁻¹ where a = 3. Find the 8th term.',
          hint1: '3 × 2^(8−1) = 3 × 2⁷.',
          hint2: '2⁷ = 128. 3 × 128 = ?',
          hint3: '384.',
          answer: 384, tolerance: 0, unit: '',
          explanation: '3 × 2⁷ = 3 × 128 = 384.',
        },
      ],
      workedExample: {
        question: 'Geometric sequence: 5, 15, 45, ... Find the 6th term.',
        steps: ['r = 3. a = 5', '5th term: 5 × 3⁵ = 5 × 243 = <strong>1215</strong> — wait, 6th: 5 × 3⁵ = <strong>1215</strong>'],
      },
      sampleAnswer: {
        grade4: "384",
        grade6: "Common ratio r=2. 8th term = 3 × 2⁷ = 3 × 128 = 384",
        grade8: "aₙ = ar^(n−1) = 3 × 2⁷ = 384. Exponent is n−1=7, not n=8.",
      },
      examinerTip: "Students use the formula aₙ = ar^n instead of ar^(n−1), giving 3 × 2⁸ = 768 for the 8th term.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // GRAPHS (alg-graphs)
    // ══════════════════════════════════════════════════════════
    {
      id: 'gph-A01', subtopic: 'alg-graphs', band: 'A', marks: 3,
      question: 'A straight line has equation y = 3x − 2. State the gradient and y-intercept.',
      steps: [
        {
          prompt: 'The equation is in the form y = mx + c. What is the gradient m?',
          hint1: 'Gradient m is the coefficient of x.',
          hint2: 'm = 3.',
          hint3: 'Gradient = 3.',
          answer: 3, tolerance: 0, unit: '',
          explanation: 'In y = mx + c, m = 3 is the gradient.',
        },
        {
          prompt: 'What is the y-intercept c?',
          hint1: 'c is the constant term.',
          hint2: 'c = −2.',
          hint3: 'y-intercept = −2.',
          answer: -2, tolerance: 0, unit: '',
          explanation: 'y-intercept = −2. The line crosses the y-axis at (0, −2).',
        },
      ],
      workedExample: {
        question: 'State gradient and y-intercept of y = −4x + 7.',
        steps: ['Gradient m = <strong>−4</strong>', 'y-intercept c = <strong>7</strong>'],
      },
      sampleAnswer: {
        grade4: "Gradient = 3, y-intercept = −2",
        grade6: "y = mx + c. m = 3 (coefficient of x). c = −2 (constant term)",
        grade8: "y = 3x − 2: m=3, c=−2. Line crosses y-axis at (0,−2) and has slope 3 (rises 3 for every 1 across).",
      },
      examinerTip: "Students swap gradient and y-intercept, especially when the sign is negative — stating gradient = −2 and y-intercept = 3.",
      auditStatus: 'pending',
    },
    {
      id: 'gph-A02', subtopic: 'alg-graphs', band: 'A', marks: 3,
      question: 'Find the equation of the line through (0, 3) with gradient 2.',
      steps: [
        {
          prompt: 'The line passes through the y-axis at y = 3, so c = ?',
          hint1: 'Passes through (0, 3) → y-intercept = 3.',
          hint2: 'c = 3.',
          hint3: 'c = 3.',
          answer: 3, tolerance: 0, unit: '',
          explanation: 'y-intercept = 3 since the line passes through (0, 3).',
        },
        {
          prompt: 'Write the full equation: y = mx + c with m = 2 and c = 3.',
          hint1: 'y = 2x + 3.',
          hint2: 'y = 2x + 3.',
          hint3: 'y = 2x + 3.',
          answer: 3, tolerance: 0, unit: '',
          explanation: 'y = 2x + 3.',
          checkType: 'skip',
          displayAnswer: 'y = 2x + 3',
        },
      ],
      workedExample: {
        question: 'Equation of line through (0, −1) with gradient 5.',
        steps: ['c = −1, m = 5', 'Equation: <strong>y = 5x − 1</strong>'],
      },
      sampleAnswer: {
        grade4: "y = 2x + 3",
        grade6: "c = 3 (passes through (0,3)). m = 2. Equation: y = 2x + 3",
        grade8: "y-intercept = 3, gradient = 2. Equation: y = 2x + 3. Check: y(0) = 3 ✓",
      },
      examinerTip: "Students swap gradient and y-intercept, writing y = 3x + 2 instead of y = 2x + 3.",
      auditStatus: 'pending',
    },
    {
      id: 'gph-B01', subtopic: 'alg-graphs', band: 'B', marks: 4,
      question: 'Find the equation of the line passing through (2, 7) and (5, 13).',
      steps: [
        {
          prompt: 'Find the gradient: m = (y₂ − y₁)/(x₂ − x₁).',
          hint1: '(13 − 7)/(5 − 2) = 6/3.',
          hint2: 'm = 2.',
          hint3: 'm = 2.',
          answer: 2, tolerance: 0, unit: '',
          explanation: 'm = (13−7)/(5−2) = 6/3 = 2.',
        },
        {
          prompt: 'Substitute (2, 7) and m = 2 into y = mx + c to find c.',
          hint1: '7 = 2 × 2 + c.',
          hint2: '7 = 4 + c → c = 3.',
          hint3: 'c = 3.',
          answer: 3, tolerance: 0, unit: '',
          explanation: '7 = 2(2) + c → c = 3.',
          displayAnswer: 'y = 2x + 3',
        },
      ],
      workedExample: {
        question: 'Find equation through (1, 5) and (3, 11).',
        steps: ['m = (11−5)/(3−1) = 3', 'y = 3x + c: 5 = 3+c → c = 2. Equation: <strong>y = 3x + 2</strong>'],
      },
      sampleAnswer: {
        grade4: "y = 2x + 3",
        grade6: "m = (13−7)/(5−2) = 6/3 = 2. Use (2,7): 7 = 2(2)+c → c=3. Equation: y = 2x+3",
        grade8: "m=2. y=2x+c. Sub (2,7): c=3. Equation: y=2x+3. Verify (5,13): 2(5)+3=13 ✓",
      },
      examinerTip: "Students calculate the gradient correctly (m=2) but then divide m by y to find c, writing c = 2/7 instead of substituting a point.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // SIMULTANEOUS EQUATIONS (alg-simultaneous)
    // ══════════════════════════════════════════════════════════
    {
      id: 'sim-A01', subtopic: 'alg-simultaneous', band: 'A', marks: 4,
      question: 'Solve: 2x + y = 7 and x + y = 4.',
      steps: [
        {
          prompt: 'Subtract equation 2 from equation 1 to eliminate y.',
          hint1: '(2x + y) − (x + y) = 7 − 4.',
          hint2: '2x − x + y − y = 3.',
          hint3: 'x = 3.',
          answer: 3, tolerance: 0, unit: '',
          explanation: 'Subtracting: x = 3.',
        },
        {
          prompt: 'Substitute x = 3 into x + y = 4.',
          hint1: '3 + y = 4.',
          hint2: 'y = 1.',
          hint3: 'y = 1.',
          answer: 1, tolerance: 0, unit: '',
          explanation: '3 + y = 4 → y = 1.',
        },
      ],
      workedExample: {
        question: 'Solve: 3x + y = 10, x + y = 6.',
        steps: ['Subtract: 3x − x = 10 − 6 → 2x = 4 → x = 2', 'Sub in: 2 + y = 6 → <strong>y = 4</strong>'],
      },
      sampleAnswer: {
        grade4: "x=3, y=1",
        grade6: "Subtract eq2 from eq1: x=3. Sub: 3+y=4 → y=1",
        grade8: "(2x+y)−(x+y)=7−4 → x=3. Then y=4−3=1. Check: 2(3)+1=7 ✓",
      },
      examinerTip: "Students add the equations instead of subtracting, getting 3x+2y=11 and solving incorrectly.",
      auditStatus: 'pending',
    },
    {
      id: 'sim-A02', subtopic: 'alg-simultaneous', band: 'A', marks: 4,
      question: 'Solve: 3x + 2y = 16 and 3x − y = 7.',
      steps: [
        {
          prompt: 'Subtract equation 2 from equation 1.',
          hint1: '(3x + 2y) − (3x − y) = 16 − 7.',
          hint2: '3y = 9.',
          hint3: 'y = 3.',
          answer: 3, tolerance: 0, unit: '',
          explanation: '2y − (−y) = 3y. 3y = 9 → y = 3.',
        },
        {
          prompt: 'Substitute y = 3 into 3x − y = 7.',
          hint1: '3x − 3 = 7.',
          hint2: '3x = 10, so x = 10/3.',
          hint3: 'x = 10/3.',
          answer: 10, tolerance: 0.1, unit: '',
          explanation: '3x = 10 → x = 10/3.',
          displayAnswer: 'x = 10/3, y = 3',
        },
      ],
      workedExample: {
        question: 'Solve: 2x + 3y = 12, 2x − y = 4.',
        steps: ['Subtract: 4y = 8 → y = 2', 'Sub in: 2x − 2 = 4 → 2x = 6 → <strong>x = 3</strong>'],
      },
      sampleAnswer: {
        grade4: "x=10/3, y=3",
        grade6: "Subtract eq2 from eq1: 3y=9 → y=3. Sub: 3x−3=7 → x=10/3",
        grade8: "Subtract: 3y=9 → y=3. 3x=10 → x=10/3. Check: 3(10/3)+2(3)=10+6=16 ✓",
      },
      examinerTip: "Students subtract 2y−(−y) = y instead of 3y, mishandling the subtraction of a negative coefficient.",
      auditStatus: 'pending',
    },
    {
      id: 'sim-B01', subtopic: 'alg-simultaneous', band: 'B', marks: 4,
      question: 'Solve: 4x + 3y = 25 and 2x − y = 5.',
      steps: [
        {
          prompt: 'Multiply equation 2 by 3 to make the y-coefficients equal.',
          hint1: '3 × (2x − y) = 3 × 5.',
          hint2: '6x − 3y = 15.',
          hint3: '6x − 3y = 15.',
          answer: 15, tolerance: 0, unit: '',
          explanation: 'Multiply equation 2 by 3: 6x − 3y = 15.',
          checkType: 'skip',
          displayAnswer: '6x − 3y = 15',
        },
        {
          prompt: 'Add the two equations to eliminate y.',
          hint1: '(4x + 3y) + (6x − 3y) = 25 + 15.',
          hint2: '10x = 40 → x = 4.',
          hint3: 'x = 4.',
          answer: 4, tolerance: 0, unit: '',
          explanation: '10x = 40 → x = 4.',
        },
        {
          prompt: 'Substitute x = 4 into 2x − y = 5.',
          hint1: '8 − y = 5.',
          hint2: 'y = 3.',
          hint3: 'y = 3.',
          answer: 3, tolerance: 0, unit: '',
          explanation: '8 − y = 5 → y = 3.',
        },
      ],
      workedExample: {
        question: 'Solve: 3x + 2y = 13, x − y = 1.',
        steps: ['Multiply eq 2 by 2: 2x − 2y = 2', 'Add: 5x = 15 → x = 3', 'Sub in: 3 − y = 1 → <strong>y = 2</strong>'],
      },
      sampleAnswer: {
        grade4: "x=4, y=3",
        grade6: "Multiply eq2 by 3: 6x−3y=15. Add eq1: 10x=40 → x=4. Sub: 8−y=5 → y=3",
        grade8: "Multiply eq2×3: 6x−3y=15. Add: 10x=40 → x=4. Back-sub: y=3. Check: 4(4)+3(3)=25 ✓",
      },
      examinerTip: "Students correctly multiply to make coefficients equal but then subtract equations instead of adding (or vice versa), failing to eliminate the variable.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // FUNCTIONS (alg-functions) — Higher tier
    // ══════════════════════════════════════════════════════════
    {
      id: 'fn-A01', subtopic: 'alg-functions', band: 'A', marks: 2,
      question: 'f(x) = 3x − 4. Find f(5) and f(−2).',
      steps: [
        {
          prompt: 'Find f(5): substitute x = 5.',
          hint1: 'f(5) = 3(5) − 4.',
          hint2: '15 − 4 = 11.',
          hint3: 'f(5) = 11.',
          answer: 11, tolerance: 0, unit: '',
          explanation: 'f(5) = 3×5 − 4 = 11.',
        },
        {
          prompt: 'Find f(−2): substitute x = −2.',
          hint1: 'f(−2) = 3(−2) − 4.',
          hint2: '−6 − 4 = −10.',
          hint3: 'f(−2) = −10.',
          answer: -10, tolerance: 0, unit: '',
          explanation: 'f(−2) = 3×(−2) − 4 = −10.',
        },
      ],
      workedExample: {
        question: 'g(x) = 2x + 7. Find g(3) and g(−4).',
        steps: ['g(3) = 6+7 = 13', 'g(−4) = −8+7 = <strong>−1</strong>'],
      },
      sampleAnswer: {
        grade4: "f(5)=11, f(−2)=−10",
        grade6: "f(5) = 3(5)−4 = 15−4 = 11. f(−2) = 3(−2)−4 = −6−4 = −10",
        grade8: "Substitute directly: f(5)=11, f(−2)=−10. Negative inputs give negative results when the function has a positive coefficient.",
      },
      examinerTip: "Students calculate f(−2) as 3−2−4=−3, treating the negative sign as subtraction rather than as part of the input −2.",
      auditStatus: 'pending',
    },
    {
      id: 'fn-B01', subtopic: 'alg-functions', band: 'B', marks: 3,
      question: 'f(x) = 2x + 1 and g(x) = x². Find fg(3) and gf(3).',
      steps: [
        {
          prompt: 'Find fg(3): apply g first, then f. Work out g(3).',
          hint1: 'g(3) = 3² = 9.',
          hint2: 'g(3) = 9.',
          hint3: '9.',
          answer: 9, tolerance: 0, unit: '',
          explanation: 'g(3) = 9.',
        },
        {
          prompt: 'Now apply f to g(3) = 9.',
          hint1: 'f(9) = 2(9) + 1 = 19.',
          hint2: 'fg(3) = 19.',
          hint3: '19.',
          answer: 19, tolerance: 0, unit: '',
          explanation: 'fg(3) = f(g(3)) = f(9) = 19.',
        },
        {
          prompt: 'Find gf(3): apply f first. f(3) = 2(3)+1 = 7. Then g(7) = ?',
          hint1: 'g(7) = 7² = 49.',
          hint2: 'gf(3) = 49.',
          hint3: '49.',
          answer: 49, tolerance: 0, unit: '',
          explanation: 'gf(3) = g(f(3)) = g(7) = 49. Note fg ≠ gf.',
        },
      ],
      workedExample: {
        question: 'f(x) = x+3, g(x) = 2x. Find fg(4) and gf(4).',
        steps: ['fg(4): g(4)=8, f(8)=11', 'gf(4): f(4)=7, g(7)=<strong>14</strong>'],
      },
      sampleAnswer: {
        grade4: "fg(3)=19, gf(3)=49",
        grade6: "fg(3): g(3)=9, then f(9)=2(9)+1=19. gf(3): f(3)=7, then g(7)=49",
        grade8: "fg(3) = f(g(3)) = f(9) = 19. gf(3) = g(f(3)) = g(7) = 49. Composition is not commutative: fg ≠ gf.",
      },
      examinerTip: "Students apply f and g in the wrong order, confusing fg (apply g first, then f) with gf (apply f first, then g).",
      auditStatus: 'pending',
    },
    {
      id: 'fn-C01', subtopic: 'alg-functions', band: 'C', marks: 3,
      question: 'f(x) = (x + 3)/2. Find f⁻¹(x).',
      steps: [
        {
          prompt: 'Write y = (x + 3)/2, then swap x and y.',
          hint1: 'x = (y + 3)/2.',
          hint2: 'x = (y + 3)/2.',
          hint3: 'x = (y + 3)/2.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Swap: x = (y+3)/2.',
          checkType: 'skip',
          displayAnswer: 'x = (y+3)/2',
        },
        {
          prompt: 'Make y the subject.',
          hint1: '2x = y + 3.',
          hint2: 'y = 2x − 3.',
          hint3: 'y = 2x − 3.',
          answer: 0, tolerance: 0, unit: '',
          explanation: '2x = y + 3 → y = 2x − 3.',
          checkType: 'skip',
          displayAnswer: 'f⁻¹(x) = 2x − 3',
        },
      ],
      workedExample: {
        question: 'Find f⁻¹(x) when f(x) = (x − 1)/3.',
        steps: ['Swap: x = (y−1)/3', '3x = y−1 → y = 3x+1', '<strong>f⁻¹(x) = 3x + 1</strong>'],
      },
      sampleAnswer: {
        grade4: "f⁻¹(x) = 2x − 3",
        grade6: "Write y=(x+3)/2. Swap x and y: x=(y+3)/2. Solve: 2x=y+3 → y=2x−3. So f⁻¹(x)=2x−3",
        grade8: "f(x)=(x+3)/2. Swap: x=(y+3)/2 → y=2x−3. Check: f(f⁻¹(x)) = f(2x−3) = (2x−3+3)/2 = x ✓",
      },
      examinerTip: "Students rearrange the original function without swapping x and y first, leaving f⁻¹(x)=(x+3)/2 — identical to f(x).",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // DIRECT & INVERSE PROPORTION (rpr-proportion)
    // ══════════════════════════════════════════════════════════
    {
      id: 'pro-A01', subtopic: 'rpr-proportion', band: 'A', marks: 3,
      question: 'y is directly proportional to x. When x = 4, y = 20. Find y when x = 7.',
      steps: [
        {
          prompt: 'Write the equation: y = kx. Find the constant k using x = 4, y = 20.',
          hint1: '20 = k × 4.',
          hint2: 'k = 20 ÷ 4 = 5.',
          hint3: 'k = 5.',
          answer: 5, tolerance: 0, unit: '',
          explanation: 'y = kx → 20 = 4k → k = 5. So y = 5x.',
        },
        {
          prompt: 'Find y when x = 7.',
          hint1: 'y = 5 × 7.',
          hint2: 'y = 35.',
          hint3: '35.',
          answer: 35, tolerance: 0, unit: '',
          explanation: 'y = 5 × 7 = 35.',
        },
      ],
      workedExample: {
        question: 'y ∝ x. When x = 3, y = 12. Find y when x = 8.',
        steps: ['k = 12/3 = 4. y = 4x', 'y = 4 × 8 = <strong>32</strong>'],
      },
      sampleAnswer: {
        grade4: "y = 35",
        grade6: "k = 20÷4 = 5. y = 5×7 = 35",
        grade8: "y = 5x. y(7) = 35. Verify: y/x = 35/7 = 5 = 20/4 ✓",
      },
      examinerTip: "Students add the difference (7−4=3) multiplied by y/x to y: 20+3×5=35 — this gives the right answer here but relies on wrong reasoning.",
      auditStatus: 'pending',
    },
    {
      id: 'pro-A02', subtopic: 'rpr-proportion', band: 'A', marks: 3,
      question: 'y is inversely proportional to x. When x = 5, y = 8. Find y when x = 10.',
      steps: [
        {
          prompt: 'Write: y = k/x. Find k using x = 5, y = 8.',
          hint1: '8 = k/5.',
          hint2: 'k = 8 × 5 = 40.',
          hint3: 'k = 40.',
          answer: 40, tolerance: 0, unit: '',
          explanation: 'y = k/x → 8 = k/5 → k = 40.',
        },
        {
          prompt: 'Find y when x = 10.',
          hint1: 'y = 40/10.',
          hint2: 'y = 4.',
          hint3: '4.',
          answer: 4, tolerance: 0, unit: '',
          explanation: 'y = 40/10 = 4.',
        },
      ],
      workedExample: {
        question: 'y ∝ 1/x. When x = 4, y = 6. Find y when x = 8.',
        steps: ['k = 6 × 4 = 24. y = 24/x', 'y = 24/8 = <strong>3</strong>'],
      },
      sampleAnswer: {
        grade4: "y = 4",
        grade6: "k = 8×5 = 40. y = 40÷10 = 4",
        grade8: "y = 40/x. y(10) = 4. When x doubles (5→10), y halves (8→4) — hallmark of inverse proportion.",
      },
      examinerTip: "Students treat it as direct proportion: k = y/x = 8/5 = 1.6, then y = 1.6×10 = 16 instead of 4.",
      auditStatus: 'pending',
    },
    {
      id: 'pro-B01', subtopic: 'rpr-proportion', band: 'B', marks: 3,
      question: 'y is proportional to x². When x = 3, y = 36. Find y when x = 5.',
      steps: [
        {
          prompt: 'Write: y = kx². Find k.',
          hint1: '36 = k × 3² = 9k.',
          hint2: 'k = 36 ÷ 9 = 4.',
          hint3: 'k = 4.',
          answer: 4, tolerance: 0, unit: '',
          explanation: '36 = 9k → k = 4. So y = 4x².',
        },
        {
          prompt: 'Find y when x = 5.',
          hint1: 'y = 4 × 5² = 4 × 25.',
          hint2: 'y = 100.',
          hint3: '100.',
          answer: 100, tolerance: 0, unit: '',
          explanation: 'y = 4 × 25 = 100.',
        },
      ],
      workedExample: {
        question: 'y ∝ x². When x = 2, y = 20. Find y when x = 4.',
        steps: ['k = 20/4 = 5. y = 5x²', 'y = 5 × 16 = <strong>80</strong>'],
      },
      sampleAnswer: {
        grade4: "y = 100",
        grade6: "k = 36÷3² = 36÷9 = 4. y = 4×5² = 4×25 = 100",
        grade8: "y = 4x². y(5) = 100. If x doubles, y quadruples (×2²=×4) — a useful check.",
      },
      examinerTip: "Students forget to square x when finding k: k = 36÷3 = 12, then y = 12×25 = 300.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // SPEED, DISTANCE, TIME (rpr-speed)
    // ══════════════════════════════════════════════════════════
    {
      id: 'spd-A01', subtopic: 'rpr-speed', band: 'A', marks: 2,
      question: 'A car travels 180 km in 2.5 hours. Calculate the average speed.',
      steps: [
        {
          prompt: 'Use the formula: speed = distance ÷ time.',
          hint1: 'speed = 180 ÷ 2.5.',
          hint2: '180 ÷ 2.5 = 72.',
          hint3: '72 km/h.',
          answer: 72, tolerance: 0, unit: 'km/h',
          explanation: 'speed = 180 ÷ 2.5 = 72 km/h.',
        },
      ],
      workedExample: {
        question: 'Distance = 240 km, time = 3 hours. Find speed.',
        steps: ['speed = 240 ÷ 3 = <strong>80 km/h</strong>'],
      },
      sampleAnswer: {
        grade4: "72 km/h",
        grade6: "speed = distance ÷ time = 180 ÷ 2.5 = 72 km/h",
        grade8: "180 ÷ 2.5 = 72 km/h. Alternative: 180 ÷ (5/2) = 180 × 2/5 = 72.",
      },
      examinerTip: "Students invert the formula, dividing time by distance: 2.5 ÷ 180 ≈ 0.014 km/h.",
      auditStatus: 'pending',
    },
    {
      id: 'spd-A02', subtopic: 'rpr-speed', band: 'A', marks: 2,
      question: 'A train travels at 90 km/h for 1 hour 20 minutes. How far does it travel?',
      steps: [
        {
          prompt: 'Convert 1 hour 20 minutes to hours.',
          hint1: '20 minutes = 20/60 hours.',
          hint2: '20/60 = 1/3. Total = 1⅓ hours = 4/3 hours.',
          hint3: '1.333... hours.',
          answer: 1.333, tolerance: 0.01, unit: 'hours',
          explanation: '1 h 20 min = 1 + 20/60 = 4/3 hours.',
        },
        {
          prompt: 'Calculate distance = speed × time.',
          hint1: '90 × 4/3 = ?',
          hint2: '90 × 4/3 = 120.',
          hint3: '120 km.',
          answer: 120, tolerance: 0, unit: 'km',
          explanation: 'distance = 90 × 4/3 = 120 km.',
        },
      ],
      workedExample: {
        question: 'Speed = 60 km/h for 2h 30 min. Find distance.',
        steps: ['Time = 2.5 h', 'distance = 60 × 2.5 = <strong>150 km</strong>'],
      },
      sampleAnswer: {
        grade4: "120 km",
        grade6: "1h20min = 4/3 hours. distance = 90 × 4/3 = 120 km",
        grade8: "1h20min = 80min = 80/60 h = 4/3 h. d = 90 × (4/3) = 120 km.",
      },
      examinerTip: "Students convert 1h20min to 1.2 hours instead of 1.333... hours, treating 20 minutes as 0.2 of an hour.",
      auditStatus: 'pending',
    },
    {
      id: 'spd-B01', subtopic: 'rpr-speed', band: 'B', marks: 4,
      question: 'Jay drives 60 km at 40 km/h, then 90 km at 60 km/h. Find his average speed for the whole journey.',
      steps: [
        {
          prompt: 'Find time for first part: time = distance ÷ speed.',
          hint1: '60 ÷ 40 = 1.5 hours.',
          hint2: '1.5 hours.',
          hint3: '1.5 hours.',
          answer: 1.5, tolerance: 0.01, unit: 'hours',
          explanation: 'Time₁ = 60/40 = 1.5 h.',
        },
        {
          prompt: 'Find time for second part.',
          hint1: '90 ÷ 60 = 1.5 hours.',
          hint2: '1.5 hours.',
          hint3: '1.5 hours.',
          answer: 1.5, tolerance: 0.01, unit: 'hours',
          explanation: 'Time₂ = 90/60 = 1.5 h.',
        },
        {
          prompt: 'Average speed = total distance ÷ total time.',
          hint1: 'Total distance = 60 + 90 = 150 km. Total time = 1.5 + 1.5 = 3 h.',
          hint2: '150 ÷ 3 = 50 km/h.',
          hint3: '50 km/h.',
          answer: 50, tolerance: 0, unit: 'km/h',
          explanation: 'Average speed = 150/3 = 50 km/h. Note: average speed ≠ average of the two speeds.',
        },
      ],
      workedExample: {
        question: '40 km at 20 km/h, then 60 km at 30 km/h. Average speed?',
        steps: ['t₁ = 2 h, t₂ = 2 h. Total dist = 100 km, total time = 4 h', 'Average speed = 100/4 = <strong>25 km/h</strong>'],
      },
      sampleAnswer: {
        grade4: "50 km/h",
        grade6: "t₁ = 60÷40 = 1.5h. t₂ = 90÷60 = 1.5h. Average speed = 150÷3 = 50 km/h",
        grade8: "Total distance=150km, total time=3h. Average speed=50km/h. Note: the shortcut (40+60)/2=50 gives the same answer here by coincidence — always use total distance ÷ total time.",
      },
      examinerTip: "Students calculate average speed as (40+60)÷2=50 km/h — this is a coincidence here; the correct method is always total distance ÷ total time.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // PERCENTAGE CHANGE (rpr-percentage-change)
    // ══════════════════════════════════════════════════════════
    {
      id: 'pch-A01', subtopic: 'rpr-percentage-change', band: 'A', marks: 2,
      question: 'A house was worth £180,000. It increased in value by 15%. Find its new value.',
      steps: [
        {
          prompt: 'Find the multiplier for a 15% increase.',
          hint1: '100% + 15% = 115% = 1.15.',
          hint2: 'Multiplier = 1.15.',
          hint3: '1.15.',
          answer: 1.15, tolerance: 0.001, unit: '',
          explanation: 'Increase of 15% → multiply by 1.15.',
        },
        {
          prompt: 'Calculate the new value.',
          hint1: '£180,000 × 1.15 = ?',
          hint2: '£207,000.',
          hint3: '£207,000.',
          answer: 207000, tolerance: 0, unit: '£',
          explanation: '180,000 × 1.15 = £207,000.',
        },
      ],
      workedExample: {
        question: 'Price = £240. Increases by 20%. New price?',
        steps: ['Multiplier = 1.20', '£240 × 1.20 = <strong>£288</strong>'],
      },
      sampleAnswer: {
        grade4: "£207,000",
        grade6: "Multiplier = 1.15. £180,000 × 1.15 = £207,000",
        grade8: "180000 × 1.15 = £207,000. Alternative: 10%=£18,000, 5%=£9,000, total increase=£27,000, new value=£207,000.",
      },
      examinerTip: "Students calculate the increase (£27,000) correctly but stop there, giving the increase rather than the new value.",
      auditStatus: 'pending',
    },
    {
      id: 'pch-A02', subtopic: 'rpr-percentage-change', band: 'A', marks: 2,
      question: 'A TV costs £350 after a 30% reduction. What was the original price?',
      steps: [
        {
          prompt: '£350 is what percentage of the original price?',
          hint1: 'After 30% reduction, the price is 70% of original.',
          hint2: '100% − 30% = 70%.',
          hint3: '£350 = 70% of original.',
          answer: 70, tolerance: 0, unit: '%',
          explanation: '100% − 30% = 70%. So £350 = 70% of original.',
          checkType: 'skip',
          displayAnswer: '£350 = 70% of original',
        },
        {
          prompt: 'Find 100% (the original price).',
          hint1: '1% = £350 ÷ 70.',
          hint2: '1% = £5. 100% = £500.',
          hint3: '£500.',
          answer: 500, tolerance: 0, unit: '£',
          explanation: '£350 ÷ 0.70 = £500. Or: 350/70 × 100 = £500.',
        },
      ],
      workedExample: {
        question: 'After 25% discount, a coat costs £90. Original price?',
        steps: ['£90 = 75% of original', 'Original = 90/0.75 = <strong>£120</strong>'],
      },
      sampleAnswer: {
        grade4: "£500",
        grade6: "£350 = 70% of original. Original = £350 ÷ 0.70 = £500",
        grade8: "After 30% reduction, £350 = 70% of original. Original = 350/0.70 = £500. Or: 1% = 350÷70=£5, 100%=£500.",
      },
      examinerTip: "Students add 30% to £350 (350 × 1.30 = £455) rather than dividing by 0.70 to reverse the reduction.",
      auditStatus: 'pending',
    },
    {
      id: 'pch-B01', subtopic: 'rpr-percentage-change', band: 'B', marks: 3,
      question: '£2,000 is invested at 4% compound interest per year. Find the value after 3 years.',
      steps: [
        {
          prompt: 'Write the multiplier for 4% increase.',
          hint1: '1 + 0.04 = 1.04.',
          hint2: 'Multiplier per year = 1.04.',
          hint3: '1.04.',
          answer: 1.04, tolerance: 0.001, unit: '',
          explanation: 'Each year, multiply by 1.04.',
        },
        {
          prompt: 'Apply for 3 years: £2000 × 1.04³.',
          hint1: '1.04³ = 1.04 × 1.04 × 1.04.',
          hint2: '1.04² = 1.0816. 1.0816 × 1.04 = 1.124864.',
          hint3: '£2000 × 1.124864.',
          answer: 1.124864, tolerance: 0.0001, unit: '',
          explanation: '1.04³ = 1.124864.',
          checkType: 'skip',
          displayAnswer: '£2000 × 1.04³',
        },
        {
          prompt: 'Calculate the final value.',
          hint1: '2000 × 1.124864 = ?',
          hint2: '£2249.73 (to the nearest penny).',
          hint3: '£2249.73.',
          answer: 2249.73, tolerance: 0.05, unit: '£',
          explanation: '£2000 × 1.04³ = £2,249.73.',
        },
      ],
      workedExample: {
        question: '£1,500 at 5% compound interest for 2 years.',
        steps: ['Multiplier = 1.05. After 2 years: 1500 × 1.05²', '= 1500 × 1.1025 = <strong>£1,653.75</strong>'],
      },
      sampleAnswer: {
        grade4: "£2,249.73",
        grade6: "Multiplier = 1.04. After 3 years: £2000 × 1.04³ ≈ £2,249.73",
        grade8: "£2000 × 1.04³ = £2000 × 1.124864 = £2,249.73. Simple interest gives only £2,240 — compound always gives more.",
      },
      examinerTip: "Students calculate simple interest (4% × 3 = 12% of £2000 = £240, total = £2,240) rather than applying the 1.04 multiplier three times.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // COMPOUND MEASURES — DENSITY & PRESSURE (rpr-compound-measures)
    // ══════════════════════════════════════════════════════════
    {
      id: 'cmp-A01', subtopic: 'rpr-compound-measures', band: 'A', marks: 2,
      question: 'A block of metal has mass 540 g and volume 60 cm³. Calculate its density.',
      steps: [
        {
          prompt: 'Use: density = mass ÷ volume.',
          hint1: 'density = 540 ÷ 60.',
          hint2: '540 ÷ 60 = 9.',
          hint3: '9 g/cm³.',
          answer: 9, tolerance: 0, unit: 'g/cm³',
          explanation: 'density = 540/60 = 9 g/cm³.',
        },
      ],
      workedExample: {
        question: 'Mass = 320 g, volume = 40 cm³. Find density.',
        steps: ['density = 320/40 = <strong>8 g/cm³</strong>'],
      },
      sampleAnswer: {
        grade4: "9 g/cm³",
        grade6: "density = mass ÷ volume = 540 ÷ 60 = 9 g/cm³",
        grade8: "D = M/V = 540/60 = 9 g/cm³. Units: grams per cubic centimetre.",
      },
      examinerTip: "Students divide volume by mass (60÷540 ≈ 0.11) instead of mass by volume.",
      auditStatus: 'pending',
    },
    {
      id: 'cmp-A02', subtopic: 'rpr-compound-measures', band: 'A', marks: 2,
      question: 'A force of 150 N acts on an area of 25 cm². Calculate the pressure in N/cm².',
      steps: [
        {
          prompt: 'Use: pressure = force ÷ area.',
          hint1: 'pressure = 150 ÷ 25.',
          hint2: '150 ÷ 25 = 6.',
          hint3: '6 N/cm².',
          answer: 6, tolerance: 0, unit: 'N/cm²',
          explanation: 'pressure = 150/25 = 6 N/cm².',
        },
      ],
      workedExample: {
        question: 'Force = 200 N, area = 40 cm². Pressure?',
        steps: ['pressure = 200/40 = <strong>5 N/cm²</strong>'],
      },
      sampleAnswer: {
        grade4: "6 N/cm²",
        grade6: "pressure = force ÷ area = 150 ÷ 25 = 6 N/cm²",
        grade8: "P = F/A = 150/25 = 6 N/cm². Units: newtons per square centimetre.",
      },
      examinerTip: "Students confuse the formula, calculating area ÷ force, or use P = F × A.",
      auditStatus: 'pending',
    },
    {
      id: 'cmp-B01', subtopic: 'rpr-compound-measures', band: 'B', marks: 3,
      question: 'An object has density 8.5 g/cm³ and mass 340 g. Find its volume. Then find the new density if the volume doubles but mass stays the same.',
      steps: [
        {
          prompt: 'Rearrange density formula to find volume: volume = mass ÷ density.',
          hint1: 'volume = 340 ÷ 8.5.',
          hint2: '340 ÷ 8.5 = 40.',
          hint3: 'volume = 40 cm³.',
          answer: 40, tolerance: 0, unit: 'cm³',
          explanation: 'volume = 340/8.5 = 40 cm³.',
        },
        {
          prompt: 'If volume doubles (80 cm³), find the new density.',
          hint1: 'density = 340 ÷ 80.',
          hint2: '340 ÷ 80 = 4.25.',
          hint3: '4.25 g/cm³.',
          answer: 4.25, tolerance: 0.01, unit: 'g/cm³',
          explanation: 'density = 340/80 = 4.25 g/cm³. Density halves when volume doubles.',
        },
      ],
      workedExample: {
        question: 'Density = 6 g/cm³, mass = 180 g. Find volume.',
        steps: ['volume = 180/6 = <strong>30 cm³</strong>'],
      },
      sampleAnswer: {
        grade4: "Volume = 40 cm³. New density = 4.25 g/cm³",
        grade6: "V = 340÷8.5 = 40 cm³. New D = 340÷80 = 4.25 g/cm³",
        grade8: "V = 340/8.5 = 40 cm³. Double V = 80 cm³. New D = 340/80 = 4.25 g/cm³. Density halves when volume doubles (mass constant).",
      },
      examinerTip: "Students correctly find the volume but then calculate the new density as 8.5÷2 = 4.25, halving the density rather than recalculating D = M/V with the new volume.",
      auditStatus: 'pending',
    },

  ];

  // ─────────────────────────────────────────────────────────────
  // GEOMETRY & MEASURES + PROBABILITY + STATISTICS
  // ─────────────────────────────────────────────────────────────

  const _bank2 = [

    // ══════════════════════════════════════════════════════════
    // ANGLES (geo-angles)
    // ══════════════════════════════════════════════════════════
    {
      id: 'ang-A01', subtopic: 'geo-angles', band: 'A', marks: 2,
      question: 'Two parallel lines are cut by a transversal. One angle is 65°. Find the alternate angle and co-interior angle.',
      steps: [
        {
          prompt: 'Alternate angles (Z-angles) are equal. What is the alternate angle?',
          hint1: 'Alternate angles are on opposite sides of the transversal, between the parallel lines.',
          hint2: 'They are equal.',
          hint3: '65°.',
          answer: 65, tolerance: 0, unit: '°',
          explanation: 'Alternate angles are equal: 65°.',
        },
        {
          prompt: 'Co-interior angles (C-angles) add up to 180°. Find the co-interior angle.',
          hint1: '180° − 65° = ?',
          hint2: '115°.',
          hint3: '115°.',
          answer: 115, tolerance: 0, unit: '°',
          explanation: 'Co-interior angles sum to 180°: 180 − 65 = 115°.',
        },
      ],
      workedExample: {
        question: 'Transversal cuts parallel lines. One angle = 48°. Find alternate and co-interior angles.',
        steps: ['Alternate = <strong>48°</strong> (equal)', 'Co-interior = 180 − 48 = <strong>132°</strong>'],
      },
      sampleAnswer: {
        grade4: "Alternate angle = 65°, co-interior angle = 115°",
        grade6: "Alternate angles (Z-angles) are equal: 65°. Co-interior angles (C-angles) add to 180°: 180−65=115°",
        grade8: "Alternate = 65° (Z-angles equal between parallel lines). Co-interior = 115° (C-angles supplementary). Both theorems require the lines to be parallel.",
      },
      examinerTip: "Students confuse alternate and co-interior angles — stating both equal 65° instead of recognising that co-interior angles are supplementary.",
      auditStatus: 'pending',
    },
    {
      id: 'ang-A02', subtopic: 'geo-angles', band: 'A', marks: 3,
      question: 'Find the interior angle of a regular hexagon.',
      steps: [
        {
          prompt: 'Find the sum of interior angles of a hexagon using (n − 2) × 180°.',
          hint1: 'A hexagon has 6 sides, so n = 6.',
          hint2: '(6 − 2) × 180 = 4 × 180.',
          hint3: '720°.',
          answer: 720, tolerance: 0, unit: '°',
          explanation: 'Sum of interior angles = (6−2) × 180 = 720°.',
        },
        {
          prompt: 'Divide by the number of sides to get one interior angle.',
          hint1: '720 ÷ 6 = ?',
          hint2: '120°.',
          hint3: '120°.',
          answer: 120, tolerance: 0, unit: '°',
          explanation: 'Each interior angle = 720 ÷ 6 = 120°.',
        },
      ],
      workedExample: {
        question: 'Find the interior angle of a regular pentagon.',
        steps: ['Sum = (5−2) × 180 = 540°', 'Each angle = 540 ÷ 5 = <strong>108°</strong>'],
      },
      sampleAnswer: {
        grade4: "120°",
        grade6: "Sum of interior angles = (6−2) × 180 = 720°. Each angle = 720÷6 = 120°",
        grade8: "(n−2)×180/n = 4×180/6 = 120°. Alternative: exterior angle = 360/6 = 60°, so interior = 180−60 = 120°.",
      },
      examinerTip: "Students calculate the angle sum (720°) correctly but give that as the final answer, forgetting to divide by the number of sides.",
      auditStatus: 'pending',
    },
    {
      id: 'ang-B01', subtopic: 'geo-angles', band: 'B', marks: 3,
      question: 'A polygon has interior angles summing to 1260°. How many sides does it have?',
      steps: [
        {
          prompt: 'Use the formula: sum = (n − 2) × 180. Set equal to 1260.',
          hint1: '(n − 2) × 180 = 1260.',
          hint2: 'n − 2 = 1260 ÷ 180.',
          hint3: 'n − 2 = 7.',
          answer: 7, tolerance: 0, unit: '',
          explanation: 'n − 2 = 1260/180 = 7.',
          checkType: 'skip',
          displayAnswer: 'n − 2 = 7',
        },
        {
          prompt: 'Solve for n.',
          hint1: 'n = 7 + 2.',
          hint2: 'n = 9.',
          hint3: '9 sides.',
          answer: 9, tolerance: 0, unit: 'sides',
          explanation: 'n = 9. A nonagon.',
        },
      ],
      workedExample: {
        question: 'Sum of interior angles = 900°. How many sides?',
        steps: ['n−2 = 900/180 = 5', 'n = <strong>7</strong>'],
      },
      sampleAnswer: {
        grade4: "9 sides",
        grade6: "(n−2) × 180 = 1260. n−2 = 7. n = 9",
        grade8: "n−2 = 1260/180 = 7. n = 9 (nonagon). Check: (9−2)×180 = 1260 ✓",
      },
      examinerTip: "Students correctly divide 1260÷180=7 but forget to add 2, giving n=7 (a heptagon) as their answer.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // PROPERTIES OF SHAPES (geo-shapes)
    // ══════════════════════════════════════════════════════════
    {
      id: 'shp-A01', subtopic: 'geo-shapes', band: 'A', marks: 3,
      question: 'Two triangles are similar. The smaller has sides 3 cm, 4 cm, 5 cm. The longer side of the larger is 15 cm. Find the scale factor and the other two sides.',
      steps: [
        {
          prompt: 'Find the scale factor: longer side of large ÷ corresponding side of small.',
          hint1: '15 ÷ 5 = ?',
          hint2: 'Scale factor = 3.',
          hint3: '3.',
          answer: 3, tolerance: 0, unit: '',
          explanation: 'Scale factor = 15/5 = 3.',
        },
        {
          prompt: 'Find the other sides of the larger triangle.',
          hint1: '3 × 3 = 9 and 4 × 3 = 12.',
          hint2: '9 cm and 12 cm.',
          hint3: '9 cm and 12 cm.',
          answer: 12, tolerance: 0, unit: 'cm',
          explanation: 'Other sides: 3×3=9 cm and 4×3=12 cm.',
          displayAnswer: '9 cm and 12 cm',
        },
      ],
      workedExample: {
        question: 'Similar triangles: small sides 5, 6, 8 cm. Longest side of large = 24 cm. Find scale factor.',
        steps: ['Scale factor = 24/8 = 3', 'Other sides: 5×3=15 cm, 6×3=18 cm'],
      },
      sampleAnswer: {
        grade4: "Scale factor 3. Other sides 9 cm and 12 cm",
        grade6: "SF = 15÷5 = 3. Other sides: 3×3=9 cm and 4×3=12 cm",
        grade8: "SF = 3. Sides of large triangle: 9, 12, 15 cm. Area ratio = 9:1 (SF²). Check: 9,12,15 is a 3-4-5 triple scaled by 3.",
      },
      examinerTip: "Students find the scale factor (3) but divide the smaller sides instead of multiplying, giving 1 cm and 1.33 cm.",
      auditStatus: 'pending',
    },
    {
      id: 'shp-A02', subtopic: 'geo-shapes', band: 'A', marks: 2,
      question: 'Explain why these two triangles are congruent: Triangle 1 has sides 5 cm, 7 cm, 9 cm. Triangle 2 has sides 9 cm, 5 cm, 7 cm.',
      steps: [
        {
          prompt: 'Which congruence condition applies when all three sides are equal?',
          hint1: 'Three sides: Side, Side, Side.',
          hint2: 'SSS condition.',
          hint3: 'SSS (Side-Side-Side).',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'All three sides are equal (SSS), so the triangles are congruent.',
          checkType: 'skip',
          displayAnswer: 'SSS — all three sides are equal',
        },
      ],
      workedExample: {
        question: 'Two triangles share: two equal sides and the included angle. Which condition?',
        steps: ['Two sides and the angle between them = <strong>SAS (Side-Angle-Side)</strong>'],
      },
      sampleAnswer: {
        grade4: "SSS — all three sides are equal so the triangles are congruent",
        grade6: "Both triangles have sides 5, 7 and 9 cm in some order. Three pairs of equal sides → SSS condition → congruent",
        grade8: "SSS (Side-Side-Side): if all three sides of one triangle equal all three sides of another, the triangles are congruent. Order of vertices does not matter.",
      },
      examinerTip: "Students state a different congruence condition (e.g. SAS or AAS) without justification when SSS is the obvious applicable one.",
      auditStatus: 'pending',
    },
    {
      id: 'shp-B01', subtopic: 'geo-shapes', band: 'B', marks: 3,
      question: 'Two similar shapes have area ratio 9 : 25. The smaller shape has perimeter 24 cm. Find the perimeter of the larger shape.',
      steps: [
        {
          prompt: 'Find the length ratio from the area ratio. Area ratio = (length ratio)².',
          hint1: '√(9 : 25) = √9 : √25.',
          hint2: 'Length ratio = 3 : 5.',
          hint3: '3 : 5.',
          answer: 5, tolerance: 0, unit: '',
          explanation: 'Length ratio = √9 : √25 = 3 : 5.',
          checkType: 'skip',
          displayAnswer: 'Length ratio = 3 : 5',
        },
        {
          prompt: 'Use the length ratio to find the larger perimeter.',
          hint1: 'Larger perimeter = 24 × (5/3).',
          hint2: '24 × 5/3 = 40.',
          hint3: '40 cm.',
          answer: 40, tolerance: 0, unit: 'cm',
          explanation: 'Perimeter scales by length ratio: 24 × 5/3 = 40 cm.',
        },
      ],
      workedExample: {
        question: 'Area ratio = 4 : 9. Smaller perimeter = 16 cm. Find larger perimeter.',
        steps: ['Length ratio = √4:√9 = 2:3', 'Larger = 16 × 3/2 = <strong>24 cm</strong>'],
      },
      sampleAnswer: {
        grade4: "40 cm",
        grade6: "Length ratio = √(9:25) = 3:5. Larger perimeter = 24 × (5/3) = 40 cm",
        grade8: "Area ratio = (length ratio)². Length ratio = √(9/25) = 3/5. Scale factor for larger = 5/3. Perimeter = 24 × 5/3 = 40 cm.",
      },
      examinerTip: "Students scale the perimeter directly using the area ratio (×25/9) instead of taking the square root first to find the length ratio.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // AREA & VOLUME (geo-area-volume)
    // ══════════════════════════════════════════════════════════
    {
      id: 'av-A01', subtopic: 'geo-area-volume', band: 'A', marks: 2,
      question: 'Find the area of a circle with radius 6 cm. Give your answer in terms of π.',
      steps: [
        {
          prompt: 'Use the formula: A = πr².',
          hint1: 'r = 6, so r² = 36.',
          hint2: 'A = π × 36.',
          hint3: '36π cm².',
          answer: 36, tolerance: 0, unit: '',
          explanation: 'A = π × 6² = 36π cm².',
          displayAnswer: '36π cm²',
        },
      ],
      workedExample: {
        question: 'Area of circle with radius 5 cm (in terms of π).',
        steps: ['A = π × 5² = <strong>25π cm²</strong>'],
      },
      sampleAnswer: {
        grade4: "36π cm²",
        grade6: "A = πr² = π × 6² = 36π cm²",
        grade8: "A = π(6)² = 36π cm² ≈ 113.1 cm². In terms of π: 36π.",
      },
      examinerTip: "Students use the diameter (12) instead of the radius (6): A = π × 12² = 144π instead of 36π.",
      auditStatus: 'pending',
    },
    {
      id: 'av-A02', subtopic: 'geo-area-volume', band: 'A', marks: 3,
      question: 'Find the volume of a cylinder with radius 4 cm and height 10 cm. Use π = 3.14.',
      steps: [
        {
          prompt: 'Area of the circular cross-section: A = πr².',
          hint1: 'A = 3.14 × 4² = 3.14 × 16.',
          hint2: '3.14 × 16 = 50.24.',
          hint3: '50.24 cm².',
          answer: 50.24, tolerance: 0.01, unit: 'cm²',
          explanation: 'Cross-section area = 3.14 × 16 = 50.24 cm².',
        },
        {
          prompt: 'Volume = area × height.',
          hint1: '50.24 × 10 = ?',
          hint2: '502.4.',
          hint3: '502.4 cm³.',
          answer: 502.4, tolerance: 0.1, unit: 'cm³',
          explanation: 'Volume = 50.24 × 10 = 502.4 cm³.',
        },
      ],
      workedExample: {
        question: 'Cylinder: radius 3 cm, height 8 cm. Volume (π=3.14)?',
        steps: ['Area = 3.14 × 9 = 28.26 cm²', 'Volume = 28.26 × 8 = <strong>226.08 cm³</strong>'],
      },
      sampleAnswer: {
        grade4: "502.4 cm³",
        grade6: "Cross-section area = 3.14 × 4² = 50.24 cm². Volume = 50.24 × 10 = 502.4 cm³",
        grade8: "V = πr²h = 3.14 × 16 × 10 = 502.4 cm³.",
      },
      examinerTip: "Students use diameter 8 instead of radius 4 in the formula: 3.14 × 64 × 10 = 2009.6 cm³.",
      auditStatus: 'pending',
    },
    {
      id: 'av-B01', subtopic: 'geo-area-volume', band: 'B', marks: 4,
      question: 'A cone has radius 5 cm and slant height 13 cm. Find the total surface area (curved + base). Use π = 3.14.',
      steps: [
        {
          prompt: 'Curved surface area = πrl. Find l (slant height) and calculate.',
          hint1: 'l = 13 cm (given). Curved SA = 3.14 × 5 × 13.',
          hint2: '3.14 × 5 × 13 = 204.1.',
          hint3: '204.1 cm².',
          answer: 204.1, tolerance: 0.5, unit: 'cm²',
          explanation: 'Curved SA = πrl = 3.14 × 5 × 13 = 204.1 cm².',
        },
        {
          prompt: 'Base area = πr².',
          hint1: '3.14 × 5² = 3.14 × 25.',
          hint2: '78.5 cm².',
          hint3: '78.5 cm².',
          answer: 78.5, tolerance: 0.1, unit: 'cm²',
          explanation: 'Base = πr² = 3.14 × 25 = 78.5 cm².',
        },
        {
          prompt: 'Total surface area = curved + base.',
          hint1: '204.1 + 78.5 = ?',
          hint2: '282.6 cm².',
          hint3: '282.6 cm².',
          answer: 282.6, tolerance: 0.5, unit: 'cm²',
          explanation: 'Total SA = 204.1 + 78.5 = 282.6 cm².',
        },
      ],
      workedExample: {
        question: 'Cone: r = 3 cm, slant height = 5 cm. Total SA (π=3.14)?',
        steps: ['Curved: 3.14×3×5 = 47.1 cm²', 'Base: 3.14×9 = 28.26 cm²', 'Total: <strong>75.36 cm²</strong>'],
      },
      sampleAnswer: {
        grade4: "282.6 cm²",
        grade6: "Curved SA = πrl = 3.14×5×13=204.1 cm². Base = πr² = 3.14×25=78.5 cm². Total = 282.6 cm²",
        grade8: "CSA = πrl = 204.1 cm². Base = πr² = 78.5 cm². Total SA = 282.6 cm². Note: slant height l=13 is given directly here.",
      },
      examinerTip: "Students confuse slant height and perpendicular height, using the perpendicular height in the formula πrl when the slant height is needed.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // TRANSFORMATIONS (geo-transformations)
    // ══════════════════════════════════════════════════════════
    {
      id: 'tr-A01', subtopic: 'geo-transformations', band: 'A', marks: 3,
      question: 'Describe fully the single transformation that maps triangle A to triangle B, where A has vertices (1,1), (3,1), (2,3) and B has vertices (1,−1), (3,−1), (2,−3).',
      steps: [
        {
          prompt: 'Compare coordinates. The x-coordinates are the same; the y-coordinates are negated. What transformation does this?',
          hint1: '(x, y) → (x, −y) is a reflection.',
          hint2: 'The y-coordinates are reflected.',
          hint3: 'Reflection in the x-axis.',
          answer: 0, tolerance: 0, unit: '',
          explanation: '(x,y)→(x,−y): reflection in the x-axis.',
          checkType: 'skip',
          displayAnswer: 'Reflection in the x-axis',
        },
      ],
      workedExample: {
        question: '(x,y) → (−x, y). What transformation?',
        steps: ['x-coordinates change sign, y stays. This is a <strong>reflection in the y-axis</strong>.'],
      },
      sampleAnswer: {
        grade4: "Reflection in the x-axis",
        grade6: "(x,y) → (x,−y): x-coordinates unchanged, y-coordinates negated. This is a reflection in the x-axis",
        grade8: "(x,y) → (x,−y) = reflection in the x-axis. All y-coordinates change sign; all x-coordinates are unchanged.",
      },
      examinerTip: "Students identify the transformation as a reflection correctly but state the wrong mirror line (saying the y-axis instead of the x-axis).",
      auditStatus: 'pending',
    },
    {
      id: 'tr-A02', subtopic: 'geo-transformations', band: 'A', marks: 3,
      question: 'Shape A has vertices (1,2), (3,2), (3,4). It is enlarged by scale factor 2 from centre (0,0). Find the image coordinates.',
      steps: [
        {
          prompt: 'Multiply each coordinate by the scale factor 2.',
          hint1: '(1,2) → (2,4). (3,2) → (6,4). (3,4) → (6,8).',
          hint2: '(2,4), (6,4), (6,8).',
          hint3: '(2,4), (6,4), (6,8).',
          answer: 8, tolerance: 0, unit: '',
          explanation: 'Enlargement from origin: multiply all coordinates by 2.',
          checkType: 'skip',
          displayAnswer: '(2,4), (6,4), (6,8)',
        },
      ],
      workedExample: {
        question: 'Vertices (2,1),(4,1),(4,3) enlarged by SF 3 from (0,0).',
        steps: ['Multiply by 3: (6,3), (12,3), (12,9)'],
      },
      sampleAnswer: {
        grade4: "(2,4), (6,4), (6,8)",
        grade6: "Multiply each coordinate by scale factor 2: (1,2)→(2,4), (3,2)→(6,4), (3,4)→(6,8)",
        grade8: "SF=2 from origin: all coordinates ×2. New vertices: (2,4), (6,4), (6,8).",
      },
      examinerTip: "Students add the scale factor to each coordinate instead of multiplying: (1+2,2+2)=(3,4) instead of (2,4).",
      auditStatus: 'pending',
    },
    {
      id: 'tr-B01', subtopic: 'geo-transformations', band: 'B', marks: 4,
      question: 'Describe fully the transformation that maps point (3, 1) to (−1, 3).',
      steps: [
        {
          prompt: 'Check if it could be a rotation. Does the distance from the origin stay the same?',
          hint1: 'Distance of (3,1) from origin = √(9+1) = √10.',
          hint2: 'Distance of (−1,3) from origin = √(1+9) = √10. Same — could be a rotation.',
          hint3: 'Distances equal → rotation is possible.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Equal distances suggest rotation.',
          checkType: 'skip',
        },
        {
          prompt: '(x, y) → (−y, x) corresponds to which rotation about the origin?',
          hint1: '(3,1) → (−1, 3). Check: (−y, x) = (−1, 3). ✓',
          hint2: 'This is 90° anticlockwise about the origin.',
          hint3: '90° anticlockwise about (0,0).',
          answer: 90, tolerance: 0, unit: '°',
          explanation: '(x,y)→(−y,x) is a 90° anticlockwise rotation about the origin.',
          displayAnswer: '90° anticlockwise rotation about (0,0)',
        },
      ],
      workedExample: {
        question: '(x,y) → (y,−x). What rotation?',
        steps: ['Check with (1,0)→(0,−1). That is 90° clockwise.', 'Answer: <strong>90° clockwise about the origin</strong>'],
      },
      sampleAnswer: {
        grade4: "Rotation 90° anticlockwise about (0,0)",
        grade6: "(x,y)→(−y,x): check (3,1)→(−1,3) ✓. This is a 90° anticlockwise rotation about the origin",
        grade8: "(x,y)→(−y,x) = 90° anticlockwise about origin. Equal distances from origin confirm rotation. (3,1)→(−1,3) matches exactly.",
      },
      examinerTip: "Students confuse 90° clockwise (x,y)→(y,−x) with 90° anticlockwise (x,y)→(−y,x), getting the direction of rotation wrong.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // PYTHAGORAS (geo-pythagoras)
    // ══════════════════════════════════════════════════════════
    {
      id: 'pyth-A01', subtopic: 'geo-pythagoras', band: 'A', marks: 3,
      question: 'Find the hypotenuse of a right-angled triangle with legs 5 cm and 12 cm.',
      steps: [
        {
          prompt: 'Use Pythagoras: a² + b² = c². Calculate a² + b².',
          hint1: '5² + 12² = 25 + 144.',
          hint2: '25 + 144 = 169.',
          hint3: '169.',
          answer: 169, tolerance: 0, unit: '',
          explanation: '5² + 12² = 25 + 144 = 169.',
        },
        {
          prompt: 'Find c = √169.',
          hint1: '√169 = ?',
          hint2: '13.',
          hint3: '13 cm.',
          answer: 13, tolerance: 0, unit: 'cm',
          explanation: 'c = √169 = 13 cm.',
        },
      ],
      workedExample: {
        question: 'Legs 6 cm and 8 cm. Find hypotenuse.',
        steps: ['6² + 8² = 36 + 64 = 100', 'c = √100 = <strong>10 cm</strong>'],
      },
      sampleAnswer: {
        grade4: "13 cm",
        grade6: "5² + 12² = 25 + 144 = 169. c = √169 = 13 cm",
        grade8: "a²+b²=c². c=√169=13 cm. This is the 5-12-13 Pythagorean triple.",
      },
      examinerTip: "Students add the leg lengths instead of squaring them: 5+12=17 cm.",
      auditStatus: 'pending',
    },
    {
      id: 'pyth-A02', subtopic: 'geo-pythagoras', band: 'A', marks: 3,
      question: 'A right-angled triangle has hypotenuse 17 cm and one leg 8 cm. Find the other leg.',
      steps: [
        {
          prompt: 'Use a² = c² − b². Calculate 17² − 8².',
          hint1: '17² = 289, 8² = 64.',
          hint2: '289 − 64 = 225.',
          hint3: '225.',
          answer: 225, tolerance: 0, unit: '',
          explanation: 'a² = 289 − 64 = 225.',
        },
        {
          prompt: 'Find a = √225.',
          hint1: '√225 = ?',
          hint2: '15.',
          hint3: '15 cm.',
          answer: 15, tolerance: 0, unit: 'cm',
          explanation: 'a = √225 = 15 cm.',
        },
      ],
      workedExample: {
        question: 'Hypotenuse 13 cm, one leg 5 cm. Find the other.',
        steps: ['a² = 13² − 5² = 169 − 25 = 144', 'a = √144 = <strong>12 cm</strong>'],
      },
      sampleAnswer: {
        grade4: "15 cm",
        grade6: "a² = 17²−8² = 289−64 = 225. a = √225 = 15 cm",
        grade8: "a² = c²−b² = 289−64 = 225. a = 15 cm. 8-15-17 is a Pythagorean triple.",
      },
      examinerTip: "Students add rather than subtract: a² = 17²+8² = 353, giving a = √353 ≈ 18.8 cm.",
      auditStatus: 'pending',
    },
    {
      id: 'pyth-B01', subtopic: 'geo-pythagoras', band: 'B', marks: 4,
      question: 'A cuboid is 8 cm × 6 cm × 3 cm. Find the length of the space diagonal (longest diagonal inside).',
      steps: [
        {
          prompt: 'Find the diagonal of the base (8 × 6 rectangle) using Pythagoras.',
          hint1: '8² + 6² = 64 + 36 = 100.',
          hint2: 'Base diagonal = √100 = 10 cm.',
          hint3: '10 cm.',
          answer: 10, tolerance: 0, unit: 'cm',
          explanation: 'Base diagonal = √(64+36) = 10 cm.',
        },
        {
          prompt: 'Now use Pythagoras again with the base diagonal and height: √(10² + 3²).',
          hint1: '10² + 3² = 100 + 9 = 109.',
          hint2: 'Space diagonal = √109.',
          hint3: '√109 ≈ 10.44 cm.',
          answer: 10.44, tolerance: 0.05, unit: 'cm',
          explanation: 'Space diagonal = √(10² + 3²) = √109 ≈ 10.44 cm.',
        },
      ],
      workedExample: {
        question: 'Cuboid 3×4×12 cm. Space diagonal?',
        steps: ['Base diagonal: √(9+16) = 5 cm', 'Space diagonal: √(25+144) = √169 = <strong>13 cm</strong>'],
      },
      sampleAnswer: {
        grade4: "≈ 10.44 cm",
        grade6: "Base diagonal: √(8²+6²) = √100 = 10 cm. Space diagonal: √(10²+3²) = √109 ≈ 10.44 cm",
        grade8: "Step 1: base diagonal = √(64+36) = 10 cm. Step 2: space diagonal = √(100+9) = √109 ≈ 10.44 cm. Note: √(8²+6²+3²) = √109 also works directly.",
      },
      examinerTip: "Students try to apply Pythagoras in 3D in one step but forget to square all three dimensions, adding them linearly: 8+6+3=17 cm.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // TRIGONOMETRY (geo-trigonometry)
    // ══════════════════════════════════════════════════════════
    {
      id: 'trig-A01', subtopic: 'geo-trigonometry', band: 'A', marks: 3,
      question: 'In a right-angled triangle, the opposite side is 7 cm and the hypotenuse is 10 cm. Find the angle θ opposite the 7 cm side.',
      steps: [
        {
          prompt: 'Write the correct trig ratio: which one uses opposite and hypotenuse?',
          hint1: 'sin θ = opposite/hypotenuse.',
          hint2: 'sin θ = 7/10 = 0.7.',
          hint3: 'sin θ = 0.7.',
          answer: 0.7, tolerance: 0.001, unit: '',
          explanation: 'sin θ = opp/hyp = 7/10 = 0.7.',
        },
        {
          prompt: 'Find θ using the inverse sine: θ = sin⁻¹(0.7).',
          hint1: 'Use your calculator: sin⁻¹(0.7).',
          hint2: '≈ 44.4°.',
          hint3: '44.4°.',
          answer: 44.4, tolerance: 0.2, unit: '°',
          explanation: 'θ = sin⁻¹(0.7) ≈ 44.4°.',
        },
      ],
      workedExample: {
        question: 'opposite = 5 cm, hypotenuse = 8 cm. Find θ.',
        steps: ['sin θ = 5/8 = 0.625', 'θ = sin⁻¹(0.625) ≈ <strong>38.7°</strong>'],
      },
      sampleAnswer: {
        grade4: "≈ 44.4°",
        grade6: "sin θ = opposite/hypotenuse = 7/10 = 0.7. θ = sin⁻¹(0.7) ≈ 44.4°",
        grade8: "SOH: sin θ = opp/hyp = 0.7. θ = sin⁻¹(0.7) ≈ 44.4°.",
      },
      examinerTip: "Students use cos instead of sin (choosing the wrong trig ratio), writing cos θ = 7/10 and getting θ ≈ 45.6°.",
      auditStatus: 'pending',
    },
    {
      id: 'trig-A02', subtopic: 'geo-trigonometry', band: 'A', marks: 3,
      question: 'In a right-angled triangle, angle θ = 35° and the adjacent side is 12 cm. Find the opposite side.',
      steps: [
        {
          prompt: 'Which trig ratio uses opposite and adjacent?',
          hint1: 'tan θ = opposite/adjacent.',
          hint2: 'tan 35° = opposite/12.',
          hint3: 'opposite = 12 × tan 35°.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'tan θ = opp/adj → opp = adj × tan θ.',
          checkType: 'skip',
          displayAnswer: 'opp = 12 × tan 35°',
        },
        {
          prompt: 'Calculate: 12 × tan 35°.',
          hint1: 'tan 35° ≈ 0.700.',
          hint2: '12 × 0.700 = 8.40.',
          hint3: '8.40 cm.',
          answer: 8.40, tolerance: 0.1, unit: 'cm',
          explanation: '12 × tan 35° ≈ 8.40 cm.',
        },
      ],
      workedExample: {
        question: 'θ = 50°, adjacent = 9 cm. Find opposite.',
        steps: ['tan 50° ≈ 1.192', 'opposite = 9 × 1.192 ≈ <strong>10.73 cm</strong>'],
      },
      sampleAnswer: {
        grade4: "≈ 8.40 cm",
        grade6: "TOA: tan 35° = opposite/12. opposite = 12 × tan 35° ≈ 8.40 cm",
        grade8: "tan θ = opp/adj → opp = adj × tan θ = 12 × tan 35° ≈ 8.40 cm.",
      },
      examinerTip: "Students rearrange incorrectly, writing opposite = 12 ÷ tan 35° ≈ 17.1 cm instead of 12 × tan 35°.",
      auditStatus: 'pending',
    },
    {
      id: 'trig-B01', subtopic: 'geo-trigonometry', band: 'B', marks: 4,
      question: 'A ladder 6 m long leans against a wall. The base is 2.5 m from the wall. Find the angle the ladder makes with the ground.',
      steps: [
        {
          prompt: 'Identify: hypotenuse = 6 m, adjacent = 2.5 m. Which ratio?',
          hint1: 'cos θ = adjacent/hypotenuse.',
          hint2: 'cos θ = 2.5/6.',
          hint3: 'cos θ ≈ 0.417.',
          answer: 0.417, tolerance: 0.005, unit: '',
          explanation: 'cos θ = 2.5/6 ≈ 0.417.',
        },
        {
          prompt: 'Find θ = cos⁻¹(2.5/6).',
          hint1: 'cos⁻¹(0.417) ≈ ?',
          hint2: '≈ 65.4°.',
          hint3: '65.4°.',
          answer: 65.4, tolerance: 0.3, unit: '°',
          explanation: 'θ = cos⁻¹(0.417) ≈ 65.4°.',
        },
      ],
      workedExample: {
        question: 'Ladder 5 m, base 2 m from wall. Angle with ground?',
        steps: ['cos θ = 2/5 = 0.4', 'θ = cos⁻¹(0.4) ≈ <strong>66.4°</strong>'],
      },
      sampleAnswer: {
        grade4: "≈ 65.4°",
        grade6: "cos θ = adjacent/hypotenuse = 2.5/6 ≈ 0.417. θ = cos⁻¹(0.417) ≈ 65.4°",
        grade8: "CAH: cos θ = adj/hyp = 2.5/6. θ = cos⁻¹(2.5/6) ≈ 65.4°.",
      },
      examinerTip: "Students use sin instead of cos (adjacent and hypotenuse are given, so cos is needed): sin θ=2.5/6 gives θ≈24.6°, the complement of the correct answer.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // CIRCLE THEOREMS (geo-circle-theorems) — Higher
    // ══════════════════════════════════════════════════════════
    {
      id: 'cth-A01', subtopic: 'geo-circle-theorems', band: 'A', marks: 2,
      question: 'An inscribed angle is 38°. What is the central angle subtended by the same arc?',
      steps: [
        {
          prompt: 'The central angle theorem: central angle = 2 × inscribed angle.',
          hint1: '2 × 38° = ?',
          hint2: '76°.',
          hint3: '76°.',
          answer: 76, tolerance: 0, unit: '°',
          explanation: 'Central angle = 2 × inscribed angle = 76°.',
        },
      ],
      workedExample: {
        question: 'Inscribed angle = 52°. Find the central angle.',
        steps: ['Central angle = 2 × 52 = <strong>104°</strong>'],
      },
      sampleAnswer: {
        grade4: "76°",
        grade6: "Central angle = 2 × inscribed angle = 2 × 38 = 76°",
        grade8: "The angle at the centre is twice the angle at the circumference subtending the same arc: 2×38=76°.",
      },
      examinerTip: "Students halve the inscribed angle (38÷2=19°) instead of doubling it, confusing which angle is larger.",
      auditStatus: 'pending',
    },
    {
      id: 'cth-B01', subtopic: 'geo-circle-theorems', band: 'B', marks: 3,
      question: 'ABCD is a cyclic quadrilateral. Angle A = 75°. Find angle C.',
      steps: [
        {
          prompt: 'Which theorem applies to opposite angles in a cyclic quadrilateral?',
          hint1: 'Opposite angles in a cyclic quadrilateral add up to 180°.',
          hint2: '∠A + ∠C = 180°.',
          hint3: '75 + ∠C = 180.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Opposite angles in a cyclic quadrilateral sum to 180°.',
          checkType: 'skip',
          displayAnswer: '∠A + ∠C = 180°',
        },
        {
          prompt: 'Find angle C.',
          hint1: '∠C = 180 − 75.',
          hint2: '105°.',
          hint3: '105°.',
          answer: 105, tolerance: 0, unit: '°',
          explanation: '∠C = 180 − 75 = 105°.',
        },
      ],
      workedExample: {
        question: 'Cyclic quad: angle A = 68°. Find angle C.',
        steps: ['Opposite angles sum to 180°', '∠C = 180 − 68 = <strong>112°</strong>'],
      },
      sampleAnswer: {
        grade4: "105°",
        grade6: "Opposite angles in a cyclic quadrilateral sum to 180°. 180 − 75 = 105°",
        grade8: "∠A + ∠C = 180° (opposite angles in cyclic quad). ∠C = 105°.",
      },
      examinerTip: "Students state that opposite angles in a cyclic quadrilateral are equal (citing the wrong theorem), giving angle C = 75°.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // VECTORS (geo-vectors) — Higher
    // ══════════════════════════════════════════════════════════
    {
      id: 'vec-A01', subtopic: 'geo-vectors', band: 'A', marks: 2,
      question: 'Vector a = (3, 2) and vector b = (−1, 4). Find a + b.',
      steps: [
        {
          prompt: 'Add the x-components and y-components separately.',
          hint1: 'x: 3 + (−1) = 2. y: 2 + 4 = 6.',
          hint2: 'a + b = (2, 6).',
          hint3: '(2, 6).',
          answer: 6, tolerance: 0, unit: '',
          explanation: 'a + b = (3+(−1), 2+4) = (2, 6).',
          displayAnswer: '(2, 6)',
        },
      ],
      workedExample: {
        question: 'a = (4, −1), b = (2, 3). Find a + b.',
        steps: ['x: 4+2=6, y: −1+3=2', 'a + b = <strong>(6, 2)</strong>'],
      },
      sampleAnswer: {
        grade4: "(2, 6)",
        grade6: "Add components: x = 3+(−1)=2, y = 2+4=6. a+b = (2,6)",
        grade8: "a + b = (3−1, 2+4) = (2, 6). Component-wise addition.",
      },
      examinerTip: "Students add x-component of one vector to the y-component of another: 3+4=7 and 2+(−1)=1, giving (7,1).",
      auditStatus: 'pending',
    },
    {
      id: 'vec-B01', subtopic: 'geo-vectors', band: 'B', marks: 4,
      question: 'OA = a, OB = b. M is the midpoint of AB. Find the vector OM.',
      steps: [
        {
          prompt: 'Find the vector AB in terms of a and b.',
          hint1: 'AB = AO + OB = −a + b.',
          hint2: 'AB = b − a.',
          hint3: 'AB = b − a.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'AB = −OA + OB = b − a.',
          checkType: 'skip',
          displayAnswer: 'AB = b − a',
        },
        {
          prompt: 'AM = ½AB. Find OM = OA + AM.',
          hint1: 'AM = ½(b − a). OM = a + ½(b − a).',
          hint2: 'OM = a + ½b − ½a = ½a + ½b.',
          hint3: 'OM = ½(a + b).',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'OM = OA + AM = a + ½(b−a) = ½a + ½b = ½(a+b).',
          checkType: 'skip',
          displayAnswer: 'OM = ½(a + b)',
        },
      ],
      workedExample: {
        question: 'OA = a, OB = b. Find midpoint of OA in terms of a.',
        steps: ['Midpoint of OA = ½ × OA = <strong>½a</strong>'],
      },
      sampleAnswer: {
        grade4: "OM = ½(a + b)",
        grade6: "AB = b−a. AM = ½(b−a). OM = OA + AM = a + ½(b−a) = ½a + ½b = ½(a+b)",
        grade8: "AB = b−a. OM = OA + ½AB = a + ½(b−a) = ½a + ½b = ½(a+b). This is the midpoint formula in vector form.",
      },
      examinerTip: "Students write OM = OA + OB = a+b instead of taking the midpoint, forgetting to multiply by ½.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // BASIC PROBABILITY (prob-basic)
    // ══════════════════════════════════════════════════════════
    {
      id: 'prb-A01', subtopic: 'prob-basic', band: 'A', marks: 2,
      question: 'A bag contains 5 red, 3 blue, and 2 green counters. A counter is picked at random. Find P(red) and P(not red).',
      steps: [
        {
          prompt: 'Find P(red) = number of red ÷ total.',
          hint1: 'Total = 5 + 3 + 2 = 10.',
          hint2: 'P(red) = 5/10 = 1/2.',
          hint3: '1/2.',
          answer: 0.5, tolerance: 0.01, unit: '',
          explanation: 'P(red) = 5/10 = 1/2.',
          displayAnswer: '1/2',
        },
        {
          prompt: 'Find P(not red) = 1 − P(red).',
          hint1: '1 − 1/2 = 1/2.',
          hint2: '1/2.',
          hint3: '5/10 = 1/2.',
          answer: 0.5, tolerance: 0.01, unit: '',
          explanation: 'P(not red) = 1 − 1/2 = 1/2.',
          displayAnswer: '1/2',
        },
      ],
      workedExample: {
        question: 'Bag: 3 red, 2 blue, 5 green. P(blue)?',
        steps: ['Total = 10', 'P(blue) = 2/10 = <strong>1/5</strong>'],
      },
      sampleAnswer: {
        grade4: "P(red) = 1/2, P(not red) = 1/2",
        grade6: "Total = 10. P(red) = 5/10 = 1/2. P(not red) = 1 − 1/2 = 1/2",
        grade8: "P(red) = 5/10 = 1/2. P(not red) = (3+2)/10 = 5/10 = 1/2. Complementary probability: P(not red) = 1 − P(red).",
      },
      examinerTip: "Students add P(blue)+P(green) separately as fractions rather than combining them or using the complementary rule.",
      auditStatus: 'pending',
    },
    {
      id: 'prb-A02', subtopic: 'prob-basic', band: 'A', marks: 3,
      question: 'A fair die is thrown once. Find: P(even number) and P(prime number).',
      steps: [
        {
          prompt: 'List the even numbers on a die (1–6). Find P(even).',
          hint1: 'Even numbers: 2, 4, 6 → 3 outcomes.',
          hint2: 'P(even) = 3/6 = 1/2.',
          hint3: '1/2.',
          answer: 0.5, tolerance: 0.01, unit: '',
          explanation: 'P(even) = 3/6 = 1/2.',
          displayAnswer: '1/2',
        },
        {
          prompt: 'List the prime numbers on a die. Find P(prime).',
          hint1: 'Prime numbers 1–6: 2, 3, 5 → 3 outcomes.',
          hint2: 'P(prime) = 3/6 = 1/2.',
          hint3: '1/2.',
          answer: 0.5, tolerance: 0.01, unit: '',
          explanation: 'Primes: 2, 3, 5. P(prime) = 3/6 = 1/2.',
          displayAnswer: '1/2',
        },
      ],
      workedExample: {
        question: 'Fair die: P(square number)?',
        steps: ['Square numbers 1–6: 1, 4 → 2 outcomes', 'P(square) = 2/6 = <strong>1/3</strong>'],
      },
      sampleAnswer: {
        grade4: "P(even) = 1/2, P(prime) = 1/2",
        grade6: "Even: {2,4,6} → 3/6=1/2. Prime: {2,3,5} → 3/6=1/2",
        grade8: "P(even) = P({2,4,6}) = 1/2. P(prime) = P({2,3,5}) = 1/2. Key: 1 is not a prime number.",
      },
      examinerTip: "Students include 1 as a prime number, listing primes as {1,2,3,5} and giving P(prime) = 4/6 = 2/3.",
      auditStatus: 'pending',
    },
    {
      id: 'prb-B01', subtopic: 'prob-basic', band: 'B', marks: 3,
      question: 'In a class of 30, 18 study French, 12 study Spanish, and 5 study both. How many study neither? Find P(studies neither).',
      steps: [
        {
          prompt: 'Use the addition rule: n(F ∪ S) = n(F) + n(S) − n(F ∩ S).',
          hint1: '18 + 12 − 5 = 25.',
          hint2: '25 study French or Spanish (or both).',
          hint3: '25.',
          answer: 25, tolerance: 0, unit: '',
          explanation: '18 + 12 − 5 = 25 study at least one language.',
        },
        {
          prompt: 'Find the number who study neither.',
          hint1: '30 − 25 = 5.',
          hint2: '5 students study neither.',
          hint3: '5.',
          answer: 5, tolerance: 0, unit: '',
          explanation: '30 − 25 = 5 study neither.',
        },
        {
          prompt: 'P(studies neither) = 5/30.',
          hint1: '5/30 = 1/6.',
          hint2: '1/6.',
          hint3: '1/6.',
          answer: 0.1667, tolerance: 0.01, unit: '',
          explanation: 'P(neither) = 5/30 = 1/6.',
          displayAnswer: '1/6',
        },
      ],
      workedExample: {
        question: '25 students: 15 like football, 12 like tennis, 7 like both. P(likes neither)?',
        steps: ['n(F∪T) = 15+12−7 = 20. Neither = 25−20 = 5', 'P(neither) = 5/25 = <strong>1/5</strong>'],
      },
      sampleAnswer: {
        grade4: "5 study neither. P(neither) = 1/6",
        grade6: "n(F∪S) = 18+12−5 = 25. Neither = 30−25 = 5. P(neither) = 5/30 = 1/6",
        grade8: "Inclusion-exclusion: 18+12−5=25 study at least one language. 30−25=5 study neither. P=5/30=1/6.",
      },
      examinerTip: "Students add 18+12+5 = 35 (overcounting), giving neither = 30−35, which is negative and clearly wrong.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // COMBINED EVENTS (prob-combined)
    // ══════════════════════════════════════════════════════════
    {
      id: 'comb-A01', subtopic: 'prob-combined', band: 'A', marks: 3,
      question: 'A coin is flipped and a die is thrown. List the sample space and find P(heads and 4).',
      steps: [
        {
          prompt: 'How many outcomes are there in total?',
          hint1: 'Coin: 2 outcomes. Die: 6 outcomes. Total = 2 × 6.',
          hint2: '12 equally likely outcomes.',
          hint3: '12.',
          answer: 12, tolerance: 0, unit: '',
          explanation: '2 × 6 = 12 outcomes.',
        },
        {
          prompt: 'Find P(heads AND 4).',
          hint1: 'Only one outcome gives heads AND 4.',
          hint2: 'P = 1/12.',
          hint3: '1/12.',
          answer: 0.0833, tolerance: 0.005, unit: '',
          explanation: 'P(H and 4) = 1/12.',
          displayAnswer: '1/12',
        },
      ],
      workedExample: {
        question: 'Two fair dice thrown. Find P(both show 6).',
        steps: ['Total outcomes = 36', 'P(6,6) = 1/36'],
      },
      sampleAnswer: {
        grade4: "P(heads and 4) = 1/12",
        grade6: "Total outcomes = 2×6 = 12. Only one gives H and 4. P = 1/12",
        grade8: "P(H and 4) = P(H)×P(4) = 1/2 × 1/6 = 1/12. Independent events: multiply probabilities.",
      },
      examinerTip: "Students add P(H) + P(4) = 1/2 + 1/6 = 2/3, confusing \"and\" (multiply independent probabilities) with \"or\" (add, with care).",
      auditStatus: 'pending',
    },
    {
      id: 'comb-B01', subtopic: 'prob-combined', band: 'B', marks: 4,
      question: 'P(A) = 0.4, P(B) = 0.3, A and B are independent. Find P(A and B) and P(A or B).',
      steps: [
        {
          prompt: 'For independent events, P(A and B) = P(A) × P(B).',
          hint1: '0.4 × 0.3 = ?',
          hint2: '0.12.',
          hint3: '0.12.',
          answer: 0.12, tolerance: 0.001, unit: '',
          explanation: 'P(A and B) = 0.4 × 0.3 = 0.12.',
        },
        {
          prompt: 'P(A or B) = P(A) + P(B) − P(A and B).',
          hint1: '0.4 + 0.3 − 0.12.',
          hint2: '0.58.',
          hint3: '0.58.',
          answer: 0.58, tolerance: 0.001, unit: '',
          explanation: 'P(A or B) = 0.4 + 0.3 − 0.12 = 0.58.',
        },
      ],
      workedExample: {
        question: 'P(A)=0.5, P(B)=0.6, independent. Find P(A and B) and P(A or B).',
        steps: ['P(A∩B) = 0.5×0.6 = 0.3', 'P(A∪B) = 0.5+0.6−0.3 = <strong>0.8</strong>'],
      },
      sampleAnswer: {
        grade4: "P(A and B) = 0.12, P(A or B) = 0.58",
        grade6: "P(A∩B) = 0.4×0.3 = 0.12. P(A∪B) = 0.4+0.3−0.12 = 0.58",
        grade8: "P(A∩B) = 0.12 (independent: multiply). P(A∪B) = P(A)+P(B)−P(A∩B) = 0.58.",
      },
      examinerTip: "Students calculate P(A∪B) = 0.4+0.3 = 0.7 without subtracting P(A∩B), double-counting the overlap.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // TREE DIAGRAMS (prob-tree-diagrams)
    // ══════════════════════════════════════════════════════════
    {
      id: 'tree-A01', subtopic: 'prob-tree-diagrams', band: 'A', marks: 4,
      question: 'A bag has 4 red and 6 blue balls. One ball is drawn, replaced, and a second is drawn. Find P(two red).',
      steps: [
        {
          prompt: 'P(red on first draw).',
          hint1: '4 red out of 10 total.',
          hint2: 'P(R) = 4/10 = 2/5.',
          hint3: '2/5.',
          answer: 0.4, tolerance: 0.01, unit: '',
          explanation: 'P(red) = 4/10 = 2/5 = 0.4. Replaced, so probabilities don\'t change.',
        },
        {
          prompt: 'P(two red) = P(R) × P(R) — because the ball is replaced.',
          hint1: '0.4 × 0.4 = ?',
          hint2: '0.16.',
          hint3: '0.16.',
          answer: 0.16, tolerance: 0.005, unit: '',
          explanation: 'P(RR) = 0.4 × 0.4 = 0.16.',
          displayAnswer: '4/25 or 0.16',
        },
      ],
      workedExample: {
        question: 'P(head) = 1/2. Two coins flipped. P(two heads)?',
        steps: ['P(HH) = 1/2 × 1/2 = <strong>1/4</strong>'],
      },
      sampleAnswer: {
        grade4: "0.16 (or 4/25)",
        grade6: "P(R) = 4/10 = 0.4. With replacement: P(RR) = 0.4×0.4 = 0.16",
        grade8: "P(R) = 2/5. P(RR) = (2/5)² = 4/25 = 0.16. Replacement means probabilities are unchanged for the second draw.",
      },
      examinerTip: "Students treat it as without replacement: P(RR) = 4/10 × 3/9 = 2/15, forgetting the ball is replaced.",
      auditStatus: 'pending',
    },
    {
      id: 'tree-B01', subtopic: 'prob-tree-diagrams', band: 'B', marks: 5,
      question: 'A bag has 3 red and 5 blue balls. Two are drawn WITHOUT replacement. Find P(one red, one blue).',
      steps: [
        {
          prompt: 'P(red first, then blue) = P(R) × P(B|R).',
          hint1: 'P(R) = 3/8. After removing a red, 7 balls remain with 5 blue.',
          hint2: 'P(B|R) = 5/7.',
          hint3: '(3/8) × (5/7) = 15/56.',
          answer: 0.268, tolerance: 0.01, unit: '',
          explanation: 'P(R then B) = (3/8) × (5/7) = 15/56.',
          displayAnswer: '15/56',
        },
        {
          prompt: 'P(blue first, then red) = P(B) × P(R|B).',
          hint1: 'P(B) = 5/8. After removing a blue, 7 balls remain with 3 red.',
          hint2: 'P(R|B) = 3/7.',
          hint3: '(5/8) × (3/7) = 15/56.',
          answer: 0.268, tolerance: 0.01, unit: '',
          explanation: 'P(B then R) = (5/8) × (3/7) = 15/56.',
          displayAnswer: '15/56',
        },
        {
          prompt: 'P(one red, one blue) = add both routes.',
          hint1: '15/56 + 15/56 = 30/56.',
          hint2: '30/56 = 15/28.',
          hint3: '15/28.',
          answer: 0.536, tolerance: 0.01, unit: '',
          explanation: 'P(one red, one blue) = 30/56 = 15/28 ≈ 0.536.',
          displayAnswer: '15/28',
        },
      ],
      workedExample: {
        question: 'Bag: 2 red, 4 blue. Two drawn without replacement. P(both blue)?',
        steps: ['P(B₁) = 4/6 = 2/3. P(B₂|B₁) = 3/5', 'P(BB) = 2/3 × 3/5 = 6/15 = <strong>2/5</strong>'],
      },
      sampleAnswer: {
        grade4: "15/28 (≈ 0.536)",
        grade6: "P(RB) = 3/8 × 5/7 = 15/56. P(BR) = 5/8 × 3/7 = 15/56. Total = 30/56 = 15/28",
        grade8: "Two routes: P(RB)+P(BR) = 15/56+15/56 = 30/56 = 15/28 ≈ 0.536.",
      },
      examinerTip: "Students find only one route (P(RB) = 15/56) and forget to add the second route P(BR), giving 15/56 instead of 30/56.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // VENN DIAGRAMS (prob-venn) — Higher
    // ══════════════════════════════════════════════════════════
    {
      id: 'venn-A01', subtopic: 'prob-venn', band: 'A', marks: 3,
      question: 'From a Venn diagram: 8 in A only, 5 in A∩B, 7 in B only, 10 outside both. Find P(A∪B) and P(A|B).',
      steps: [
        {
          prompt: 'Total number of elements. n(total) = 8 + 5 + 7 + 10 = 30. Find P(A∪B).',
          hint1: 'n(A∪B) = 8 + 5 + 7 = 20.',
          hint2: 'P(A∪B) = 20/30 = 2/3.',
          hint3: '2/3.',
          answer: 0.667, tolerance: 0.01, unit: '',
          explanation: 'P(A∪B) = 20/30 = 2/3.',
          displayAnswer: '2/3',
        },
        {
          prompt: 'P(A|B) = P(A∩B)/P(B). Find P(B) and then P(A|B).',
          hint1: 'n(B) = 5 + 7 = 12. P(B) = 12/30.',
          hint2: 'P(A|B) = (5/30)/(12/30) = 5/12.',
          hint3: '5/12.',
          answer: 0.417, tolerance: 0.01, unit: '',
          explanation: 'P(A|B) = P(A∩B)/P(B) = (5/30)/(12/30) = 5/12.',
          displayAnswer: '5/12',
        },
      ],
      workedExample: {
        question: 'A only=6, A∩B=4, B only=8, neither=2. Total=20. Find P(A|B).',
        steps: ['P(A∩B) = 4/20, P(B) = 12/20', 'P(A|B) = (4/20)/(12/20) = 4/12 = <strong>1/3</strong>'],
      },
      sampleAnswer: {
        grade4: "P(A∪B) = 2/3, P(A|B) = 5/12",
        grade6: "n(A∪B) = 20. P(A∪B) = 20/30 = 2/3. P(A|B) = P(A∩B)/P(B) = (5/30)/(12/30) = 5/12",
        grade8: "P(A∪B) = 20/30 = 2/3. P(A|B) = P(A∩B)/P(B) = 5/12. Given B has occurred, we restrict to 12 elements in B, of which 5 are in A∩B.",
      },
      examinerTip: "Students calculate P(A|B) as P(A∩B)/P(total) = 5/30 = 1/6 instead of dividing by P(B) = 12/30.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // AVERAGES & RANGE (stat-averages)
    // ══════════════════════════════════════════════════════════
    {
      id: 'avg-A01', subtopic: 'stat-averages', band: 'A', marks: 3,
      question: 'Find the mean, median and range of: 4, 7, 2, 9, 3, 7, 5.',
      steps: [
        {
          prompt: 'Find the mean: add all values and divide by 7.',
          hint1: '4+7+2+9+3+7+5 = 37.',
          hint2: '37 ÷ 7 = 5.29 (to 2 d.p.).',
          hint3: '5.29.',
          answer: 5.29, tolerance: 0.05, unit: '',
          explanation: 'Mean = 37/7 ≈ 5.29.',
        },
        {
          prompt: 'Find the median: order the data and find the middle value.',
          hint1: 'Ordered: 2, 3, 4, 5, 7, 7, 9.',
          hint2: '7 values — middle is the 4th.',
          hint3: 'Median = 5.',
          answer: 5, tolerance: 0, unit: '',
          explanation: 'Ordered: 2,3,4,5,7,7,9. Median = 4th value = 5.',
        },
        {
          prompt: 'Find the range: maximum − minimum.',
          hint1: '9 − 2 = ?',
          hint2: '7.',
          hint3: 'Range = 7.',
          answer: 7, tolerance: 0, unit: '',
          explanation: 'Range = 9 − 2 = 7.',
        },
      ],
      workedExample: {
        question: 'Find mean and median of: 6, 2, 8, 4, 10.',
        steps: ['Mean: (6+2+8+4+10)/5 = 30/5 = 6', 'Ordered: 2,4,6,8,10. Median = <strong>6</strong>'],
      },
      sampleAnswer: {
        grade4: "Mean ≈ 5.29, median = 5, range = 7",
        grade6: "Sum = 37. Mean = 37÷7 ≈ 5.29. Ordered: 2,3,4,5,7,7,9 → median = 5. Range = 9−2 = 7",
        grade8: "Mean = 37/7 ≈ 5.29. Median (4th of 7 ordered values) = 5. Range = 7. Mode = 7.",
      },
      examinerTip: "Students find the median without ordering the data first, taking the middle number from the unordered list rather than the ordered one.",
      auditStatus: 'pending',
    },
    {
      id: 'avg-B01', subtopic: 'stat-averages', band: 'B', marks: 4,
      question: 'From a frequency table: x=1,f=3; x=2,f=5; x=3,f=4; x=4,f=8. Calculate the mean.',
      steps: [
        {
          prompt: 'Find the total frequency (n).',
          hint1: '3 + 5 + 4 + 8 = 20.',
          hint2: 'n = 20.',
          hint3: '20.',
          answer: 20, tolerance: 0, unit: '',
          explanation: 'Total frequency = 3+5+4+8 = 20.',
        },
        {
          prompt: 'Find Σ(fx): multiply each x by its frequency and sum.',
          hint1: '1×3=3, 2×5=10, 3×4=12, 4×8=32.',
          hint2: '3+10+12+32 = 57.',
          hint3: 'Σfx = 57.',
          answer: 57, tolerance: 0, unit: '',
          explanation: 'Σfx = 3+10+12+32 = 57.',
        },
        {
          prompt: 'Mean = Σfx ÷ n.',
          hint1: '57 ÷ 20 = ?',
          hint2: '2.85.',
          hint3: '2.85.',
          answer: 2.85, tolerance: 0.01, unit: '',
          explanation: 'Mean = 57/20 = 2.85.',
        },
      ],
      workedExample: {
        question: 'x=2,f=4; x=3,f=6; x=4,f=2. Find mean.',
        steps: ['n=12. Σfx = 8+18+8=34', 'Mean = 34/12 ≈ <strong>2.83</strong>'],
      },
      sampleAnswer: {
        grade4: "Mean = 2.85",
        grade6: "Total frequency n = 20. Σfx = 3+10+12+32 = 57. Mean = 57÷20 = 2.85",
        grade8: "Mean = Σfx/Σf = 57/20 = 2.85. Always multiply each x-value by its frequency before summing.",
      },
      examinerTip: "Students add the x-values (1+2+3+4=10) and divide by 4, ignoring frequencies and giving a mean of 2.5.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // CHARTS & DIAGRAMS (stat-charts)
    // ══════════════════════════════════════════════════════════
    {
      id: 'chr-A01', subtopic: 'stat-charts', band: 'A', marks: 3,
      question: '360 students were surveyed. 90 prefer History, 120 prefer Maths, 150 prefer Science. Calculate the angle for each subject in a pie chart.',
      steps: [
        {
          prompt: 'Angle for History: (90/360) × 360°.',
          hint1: 'Fraction = 90/360 = 1/4.',
          hint2: '1/4 × 360° = 90°.',
          hint3: '90°.',
          answer: 90, tolerance: 0, unit: '°',
          explanation: 'History: (90/360) × 360 = 90°.',
        },
        {
          prompt: 'Angle for Maths: (120/360) × 360°.',
          hint1: 'Fraction = 120/360 = 1/3.',
          hint2: '1/3 × 360° = 120°.',
          hint3: '120°.',
          answer: 120, tolerance: 0, unit: '°',
          explanation: 'Maths: (120/360) × 360 = 120°.',
        },
        {
          prompt: 'Angle for Science: (150/360) × 360°.',
          hint1: 'Fraction = 150/360 = 5/12.',
          hint2: '5/12 × 360° = 150°.',
          hint3: '150°.',
          answer: 150, tolerance: 0, unit: '°',
          explanation: 'Science: (150/360) × 360 = 150°. Check: 90+120+150 = 360 ✓',
        },
      ],
      workedExample: {
        question: '200 people: 50 chose A, 100 chose B, 50 chose C. Find angles.',
        steps: ['A: 50/200×360=90°, B: 100/200×360=180°, C: 50/200×360=90°'],
      },
      sampleAnswer: {
        grade4: "History 90°, Maths 120°, Science 150°",
        grade6: "Angle = (frequency/total) × 360. History: 90/360×360=90°. Maths: 120°. Science: 150°",
        grade8: "Each of 360 students = 1°. History=90°, Maths=120°, Science=150°. Check: 90+120+150=360° ✓",
      },
      examinerTip: "Students forget to multiply by 360 at the end, giving the fraction (e.g. 1/4) rather than the angle (90°).",
      auditStatus: 'pending',
    },
    {
      id: 'chr-B01', subtopic: 'stat-charts', band: 'B', marks: 3,
      question: 'A histogram has class 10≤x<20 with frequency density 3.5, class width 10. What is the frequency for this class?',
      steps: [
        {
          prompt: 'In a histogram: frequency = frequency density × class width.',
          hint1: 'Frequency = 3.5 × 10.',
          hint2: '35.',
          hint3: '35.',
          answer: 35, tolerance: 0, unit: '',
          explanation: 'Frequency = frequency density × class width = 3.5 × 10 = 35.',
        },
      ],
      workedExample: {
        question: 'Class 20≤x<30, frequency density = 4.2. Find frequency.',
        steps: ['Frequency = 4.2 × 10 = <strong>42</strong>'],
      },
      sampleAnswer: {
        grade4: "35",
        grade6: "frequency = frequency density × class width = 3.5 × 10 = 35",
        grade8: "In a histogram, area = frequency. Area = fd × cw = 3.5 × 10 = 35.",
      },
      examinerTip: "Students read the frequency density (3.5) directly as the frequency, giving 3.5 without multiplying by the class width.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // SCATTER GRAPHS (stat-scatter)
    // ══════════════════════════════════════════════════════════
    {
      id: 'sct-A01', subtopic: 'stat-scatter', band: 'A', marks: 3,
      question: 'A scatter graph shows hours of revision vs exam score. The points show that as revision hours increase, scores increase. What type of correlation is this, and what does it tell us?',
      steps: [
        {
          prompt: 'What type of correlation is shown?',
          hint1: 'Both variables increase together.',
          hint2: 'This is positive correlation.',
          hint3: 'Positive correlation.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'As one variable increases the other increases = positive correlation.',
          checkType: 'skip',
          displayAnswer: 'Positive correlation',
        },
        {
          prompt: 'Does correlation prove that revision CAUSES higher scores?',
          hint1: 'Correlation shows a relationship, not cause and effect.',
          hint2: 'Correlation does not imply causation.',
          hint3: 'No — correlation does not prove causation.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Correlation shows a statistical relationship but doesn\'t prove causation.',
          checkType: 'skip',
          displayAnswer: 'Correlation does not prove causation',
        },
      ],
      workedExample: {
        question: 'As temperature increases, ice cream sales increase. What type of correlation?',
        steps: ['Both increase together = <strong>positive correlation</strong>'],
      },
      sampleAnswer: {
        grade4: "Positive correlation. Correlation does not prove causation.",
        grade6: "As revision hours increase, scores increase = positive correlation. But correlation alone cannot prove that revision causes higher scores.",
        grade8: "Positive correlation (both variables increase together). Correlation ≠ causation — a confounding variable (e.g. student ability) could explain both.",
      },
      examinerTip: "Students state that revision \"causes\" higher scores based on the correlation, failing to distinguish between statistical association and causation.",
      auditStatus: 'pending',
    },
    {
      id: 'sct-B01', subtopic: 'stat-scatter', band: 'B', marks: 4,
      question: 'A line of best fit passes through (2, 14) and (8, 26). Use it to estimate the y-value when x = 5, and state any limitations.',
      steps: [
        {
          prompt: 'Find the gradient of the line of best fit.',
          hint1: 'm = (26 − 14)/(8 − 2) = 12/6.',
          hint2: 'm = 2.',
          hint3: 'm = 2.',
          answer: 2, tolerance: 0, unit: '',
          explanation: 'Gradient = 12/6 = 2.',
        },
        {
          prompt: 'Find the equation: y = 2x + c. Use (2, 14) to find c.',
          hint1: '14 = 2(2) + c → c = 10.',
          hint2: 'y = 2x + 10.',
          hint3: 'y = 2x + 10.',
          answer: 10, tolerance: 0, unit: '',
          explanation: 'c = 14 − 4 = 10. Equation: y = 2x + 10.',
          checkType: 'skip',
          displayAnswer: 'y = 2x + 10',
        },
        {
          prompt: 'Estimate y when x = 5.',
          hint1: 'y = 2(5) + 10 = 20.',
          hint2: '20.',
          hint3: '20.',
          answer: 20, tolerance: 0, unit: '',
          explanation: 'y = 2(5)+10 = 20. This is interpolation (x=5 is within the data range — more reliable).',
        },
      ],
      workedExample: {
        question: 'Line of best fit through (1,5) and (5,13). Estimate y when x=3.',
        steps: ['m = (13−5)/(5−1) = 2. y = 2x+3', 'x=3: y = 6+3 = <strong>9</strong>'],
      },
      sampleAnswer: {
        grade4: "y = 20 when x = 5",
        grade6: "m = (26−14)/(8−2) = 2. Using (2,14): c=10. y = 2(5)+10 = 20",
        grade8: "m=2, y=2x+10. At x=5: y=20. This is interpolation (x=5 is within the data range 2−8), so the estimate is reliable.",
      },
      examinerTip: "Students calculate the gradient as (8−2)/(26−14) = 0.5 (inverted), giving a different equation and wrong prediction.",
      auditStatus: 'pending',
    },

    // ══════════════════════════════════════════════════════════
    // CUMULATIVE FREQUENCY & BOX PLOTS (stat-cumulative) — Higher
    // ══════════════════════════════════════════════════════════
    {
      id: 'cum-A01', subtopic: 'stat-cumulative', band: 'A', marks: 4,
      question: 'From a cumulative frequency graph for 80 students: LQ at 34, median at 47, UQ at 63. Calculate the IQR and the percentage of students scoring above 63.',
      steps: [
        {
          prompt: 'IQR = Upper Quartile − Lower Quartile.',
          hint1: '63 − 34 = ?',
          hint2: '29.',
          hint3: 'IQR = 29.',
          answer: 29, tolerance: 0, unit: '',
          explanation: 'IQR = UQ − LQ = 63 − 34 = 29.',
        },
        {
          prompt: 'The UQ represents the 75th percentile — 75% of students scored at or below 63. What % scored above?',
          hint1: '100% − 75% = 25%.',
          hint2: '25%.',
          hint3: '25% scored above 63.',
          answer: 25, tolerance: 0, unit: '%',
          explanation: '25% of students scored above the upper quartile.',
        },
      ],
      workedExample: {
        question: 'LQ = 30, UQ = 50. Find IQR.',
        steps: ['IQR = 50 − 30 = <strong>20</strong>'],
      },
      sampleAnswer: {
        grade4: "IQR = 29. 25% scored above 63",
        grade6: "IQR = UQ − LQ = 63−34 = 29. Upper quartile = 75th percentile → 25% scored above",
        grade8: "IQR = 63−34 = 29. UQ is the 75th percentile → 25% of students scored above 63, i.e. 0.25×80 = 20 students.",
      },
      examinerTip: "Students confuse the score value (63) with the number of students, stating \"63 students scored above the upper quartile\" rather than 25%.",
      auditStatus: 'pending',
    },
    {
      id: 'cum-B01', subtopic: 'stat-cumulative', band: 'B', marks: 4,
      question: 'Group A: median 55, IQR 20. Group B: median 62, IQR 35. Compare the distributions.',
      steps: [
        {
          prompt: 'Compare the medians. What does this tell us?',
          hint1: 'Group B has a higher median (62 > 55).',
          hint2: 'Group B tends to score higher on average.',
          hint3: 'Group B has higher typical scores.',
          answer: 62, tolerance: 0, unit: '',
          explanation: 'Group B has higher median → typically higher scores.',
          checkType: 'skip',
          displayAnswer: 'Group B has a higher median (62 vs 55)',
        },
        {
          prompt: 'Compare the IQRs. What does the larger IQR tell us about Group B?',
          hint1: 'IQR measures spread of the middle 50%.',
          hint2: 'Group B has larger IQR (35 vs 20) → more spread out.',
          hint3: 'Group B scores are more varied/less consistent.',
          answer: 35, tolerance: 0, unit: '',
          explanation: 'Group B has larger IQR → greater spread/variability in middle 50%.',
          checkType: 'skip',
          displayAnswer: 'Group B is more spread out (IQR 35 vs 20)',
        },
      ],
      workedExample: {
        question: 'How do you compare two box plots?',
        steps: ['Compare medians (typical value)', 'Compare IQR or range (consistency/spread)'],
      },
      sampleAnswer: {
        grade4: "Group B has higher typical scores (median 62 vs 55) but more variation (IQR 35 vs 20)",
        grade6: "Group B scores higher on average (median 62 > 55). Group B is more spread out (IQR 35 > 20), so less consistent",
        grade8: "Group B: higher median (62 vs 55) = typically better scores. Larger IQR (35 vs 20) = greater variability in the middle 50%. Group A is more consistent.",
      },
      examinerTip: "Students compare only the medians and forget to compare spread (IQR), missing half the marks typically awarded for a full distribution comparison.",
      auditStatus: 'pending',
    },

    // ── pct-A04 ──────────────────────────────────────────────
    {
      id: 'pct-A04', subtopic: 'num-percentages', band: 'A', marks: 2,
      question: 'Find 65% of 320.',
      steps: [
        {
          prompt: 'Convert 65% to a decimal multiplier.',
          hint1: 'Divide the percentage by 100.',
          hint2: '65 ÷ 100 = ?',
          hint3: '65 ÷ 100 = 0.65',
          answer: 0.65, tolerance: 0, unit: '',
          explanation: 'Percentage ÷ 100 converts it to a decimal multiplier.',
        },
        {
          prompt: 'Multiply 320 by your decimal to find 65% of 320.',
          hint1: 'Multiply the amount by the decimal.',
          hint2: '320 × 0.65 = ?',
          hint3: '320 × 0.65 = 208',
          answer: 208, tolerance: 0, unit: '',
          explanation: '320 × 0.65 = 208.',
        },
      ],
      workedExample: {
        question: 'Find 45% of 280.',
        steps: [
          'Step 1 — decimal: 45 ÷ 100 = <strong>0.45</strong>',
          'Step 2 — multiply: 280 × 0.45 = <strong>126</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "208",
        grade6: "0.65 × 320 = 208",
        grade8: "65% = 0.65 as a multiplier. 320 × 0.65 = 208.",
      },
      examinerTip: "Convert the percentage to a decimal first (÷ 100), then multiply. Don't try to find 1% then scale — the decimal method is faster and less error-prone.",
      auditStatus: 'pending',
    },
    // ── pct-A05 ──────────────────────────────────────────────
    {
      id: 'pct-A05', subtopic: 'num-percentages', band: 'A', marks: 2,
      question: 'What percentage of 80 is 52?',
      steps: [
        {
          prompt: 'Divide the part by the whole.',
          hint1: 'To find a percentage, divide the part by the total.',
          hint2: '52 ÷ 80 = ?',
          hint3: '52 ÷ 80 = 0.65',
          answer: 0.65, tolerance: 0.001, unit: '',
          explanation: '52 ÷ 80 = 0.65. This decimal represents the proportion.',
        },
        {
          prompt: 'Multiply by 100 to convert to a percentage.',
          hint1: 'Decimal × 100 gives the percentage.',
          hint2: '0.65 × 100 = ?',
          hint3: '0.65 × 100 = 65%',
          answer: 65, tolerance: 0, unit: '%',
          explanation: '0.65 × 100 = 65%. So 52 is 65% of 80.',
        },
      ],
      workedExample: {
        question: 'What percentage of 120 is 42?',
        steps: [
          'Step 1 — divide: 42 ÷ 120 = <strong>0.35</strong>',
          'Step 2 — percentage: 0.35 × 100 = <strong>35%</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "65%",
        grade6: "52 ÷ 80 = 0.65; 0.65 × 100 = 65%",
        grade8: "% = (part ÷ whole) × 100 = (52 ÷ 80) × 100 = 65%",
      },
      examinerTip: "Always divide the part by the whole (not the other way round), then multiply by 100. A common error is dividing 80 by 52.",
      auditStatus: 'pending',
    },
    // ── pct-B04 ──────────────────────────────────────────────
    {
      id: 'pct-B04', subtopic: 'num-percentages', band: 'B', marks: 3,
      question: 'A phone is bought for £240 and sold for £204. Calculate the percentage loss.',
      steps: [
        {
          prompt: 'Find the loss in pounds.',
          hint1: 'Loss = original price − selling price.',
          hint2: '£240 − £204 = ?',
          hint3: '£240 − £204 = £36',
          answer: 36, tolerance: 0, unit: '£',
          explanation: 'The actual loss is £240 − £204 = £36.',
        },
        {
          prompt: 'Divide the loss by the original price.',
          hint1: 'Percentage change = change ÷ original.',
          hint2: '36 ÷ 240 = ?',
          hint3: '36 ÷ 240 = 0.15',
          answer: 0.15, tolerance: 0.001, unit: '',
          explanation: '36 ÷ 240 = 0.15. Always divide by the original price.',
        },
        {
          prompt: 'Convert to a percentage.',
          hint1: 'Multiply your decimal by 100.',
          hint2: '0.15 × 100 = ?',
          hint3: '0.15 × 100 = 15%',
          answer: 15, tolerance: 0, unit: '%',
          explanation: '0.15 × 100 = 15% loss.',
        },
      ],
      workedExample: {
        question: 'A bike bought for £300 is sold for £240. Find the percentage loss.',
        steps: [
          'Step 1 — loss: £300 − £240 = <strong>£60</strong>',
          'Step 2 — divide: 60 ÷ 300 = <strong>0.2</strong>',
          'Step 3 — percentage: 0.2 × 100 = <strong>20% loss</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "15%",
        grade6: "Loss = £36. 36 ÷ 240 = 0.15. 0.15 × 100 = 15% loss.",
        grade8: "% loss = (240 − 204)/240 × 100 = 36/240 × 100 = 15%.",
      },
      examinerTip: "Always divide by the ORIGINAL price, not the selling price. Dividing by 204 instead of 240 is one of the most common errors in percentage change questions.",
      auditStatus: 'pending',
    },
    // ── pct-B05 ──────────────────────────────────────────────
    {
      id: 'pct-B05', subtopic: 'num-percentages', band: 'B', marks: 3,
      question: 'A price of £400 increases by 25%, then decreases by 20%. What is the final price?',
      steps: [
        {
          prompt: 'Apply the 25% increase. What is the price after the increase?',
          hint1: 'Multiplier for a 25% increase = 1 + 0.25 = 1.25.',
          hint2: '£400 × 1.25 = ?',
          hint3: '£400 × 1.25 = £500',
          answer: 500, tolerance: 0, unit: '£',
          explanation: '25% increase multiplier = 1.25. £400 × 1.25 = £500.',
        },
        {
          prompt: 'Write the multiplier for a 20% decrease.',
          hint1: 'Decreasing by 20% means keeping 80%.',
          hint2: '1 − 0.20 = ?',
          hint3: '1 − 0.20 = 0.80',
          answer: 0.80, tolerance: 0, unit: '',
          explanation: 'A 20% decrease multiplier = 0.80 (you keep 80%).',
        },
        {
          prompt: 'Apply the 20% decrease to £500. What is the final price?',
          hint1: 'Multiply £500 by your decrease multiplier.',
          hint2: '£500 × 0.80 = ?',
          hint3: '£500 × 0.80 = £400',
          answer: 400, tolerance: 0, unit: '£',
          explanation: '£500 × 0.80 = £400. The combined multiplier 1.25 × 0.80 = 1.00, so the price returns to £400.',
        },
      ],
      workedExample: {
        question: 'A price of £200 increases by 30%, then decreases by 25%. Find the final price.',
        steps: [
          'Step 1 — increase: £200 × 1.30 = <strong>£260</strong>',
          'Step 2 — decrease multiplier: 1 − 0.25 = <strong>0.75</strong>',
          'Step 3 — final: £260 × 0.75 = <strong>£195</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "£400",
        grade6: "£400 × 1.25 = £500. £500 × 0.80 = £400.",
        grade8: "Combined multiplier: 1.25 × 0.80 = 1.00. £400 × 1.00 = £400 — back to the original price.",
      },
      examinerTip: "A 25% increase followed by a 20% decrease does NOT give zero change in general. The percentages apply to different bases. Always apply each change to the current price.",
      auditStatus: 'pending',
    },
    // ── pct-B06 ──────────────────────────────────────────────
    {
      id: 'pct-B06', subtopic: 'num-percentages', band: 'B', marks: 3,
      question: 'A coat costs £150. It is increased by 40%, then reduced by 10% in a sale. Find the final price.',
      steps: [
        {
          prompt: 'Apply the 40% increase to £150.',
          hint1: 'Multiplier for 40% increase = 1.40.',
          hint2: '£150 × 1.40 = ?',
          hint3: '£150 × 1.40 = £210',
          answer: 210, tolerance: 0, unit: '£',
          explanation: '£150 × 1.40 = £210 after the 40% increase.',
        },
        {
          prompt: 'Write the multiplier for the 10% reduction.',
          hint1: 'A 10% decrease means keeping 90%.',
          hint2: '1 − 0.10 = ?',
          hint3: '1 − 0.10 = 0.90',
          answer: 0.90, tolerance: 0, unit: '',
          explanation: 'Decrease multiplier = 0.90 (100% − 10% = 90%).',
        },
        {
          prompt: 'Apply the 10% reduction to £210.',
          hint1: 'Multiply £210 by 0.90.',
          hint2: '£210 × 0.90 = ?',
          hint3: '£210 × 0.90 = £189',
          answer: 189, tolerance: 0, unit: '£',
          explanation: '£210 × 0.90 = £189. Overall: 1.40 × 0.90 = 1.26, so a 26% net increase.',
        },
      ],
      workedExample: {
        question: 'A price of £300 is increased by 20%, then reduced by 15%. Find the final price.',
        steps: [
          'Step 1 — increase: £300 × 1.20 = <strong>£360</strong>',
          'Step 2 — decrease multiplier: 1 − 0.15 = <strong>0.85</strong>',
          'Step 3 — final: £360 × 0.85 = <strong>£306</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "£189",
        grade6: "£150 × 1.40 = £210. £210 × 0.90 = £189.",
        grade8: "Combined multiplier: 1.40 × 0.90 = 1.26. £150 × 1.26 = £189, a net 26% increase.",
      },
      examinerTip: "Don't just subtract the percentages (40% − 10% = 30% increase). The 10% applies to the NEW price of £210, not the original £150.",
      auditStatus: 'pending',
    },
    // ── pct-C03 ──────────────────────────────────────────────
    {
      id: 'pct-C03', subtopic: 'num-percentages', band: 'C', marks: 4,
      question: 'A house is valued at £180,000. In year 1 it increases in value by 8%. In year 2 it decreases by 5%. What is its value at the end of year 2?',
      steps: [
        {
          prompt: 'Write the multiplier for an 8% increase.',
          hint1: 'Increase multiplier = 1 + decimal equivalent.',
          hint2: '1 + 0.08 = ?',
          hint3: '1 + 0.08 = 1.08',
          answer: 1.08, tolerance: 0, unit: '',
          explanation: 'An 8% increase: new value = original × 1.08.',
        },
        {
          prompt: 'Find the value after year 1.',
          hint1: 'Multiply £180,000 by 1.08.',
          hint2: '180,000 × 1.08 = ?',
          hint3: '180,000 × 1.08 = 194,400',
          answer: 194400, tolerance: 0, unit: '£',
          explanation: '£180,000 × 1.08 = £194,400.',
        },
        {
          prompt: 'Write the multiplier for a 5% decrease.',
          hint1: 'Decrease multiplier = 1 − decimal equivalent.',
          hint2: '1 − 0.05 = ?',
          hint3: '1 − 0.05 = 0.95',
          answer: 0.95, tolerance: 0, unit: '',
          explanation: 'A 5% decrease: new value = current × 0.95.',
        },
        {
          prompt: 'Find the value at the end of year 2.',
          hint1: 'Multiply the year-1 value by 0.95.',
          hint2: '194,400 × 0.95 = ?',
          hint3: '194,400 × 0.95 = 184,680',
          answer: 184680, tolerance: 0, unit: '£',
          explanation: '£194,400 × 0.95 = £184,680.',
        },
      ],
      workedExample: {
        question: 'A car worth £20,000 increases by 5% in year 1 and decreases by 3% in year 2. Find its value after year 2.',
        steps: [
          'Step 1 — year 1 multiplier: 1 + 0.05 = <strong>1.05</strong>',
          'Step 2 — year 1 value: £20,000 × 1.05 = <strong>£21,000</strong>',
          'Step 3 — year 2 multiplier: 1 − 0.03 = <strong>0.97</strong>',
          'Step 4 — year 2 value: £21,000 × 0.97 = <strong>£20,370</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "£184,680",
        grade6: "Year 1: £180,000 × 1.08 = £194,400. Year 2: £194,400 × 0.95 = £184,680.",
        grade8: "Combined multiplier: 1.08 × 0.95 = 1.026. £180,000 × 1.026 = £184,680, a net 2.6% increase.",
      },
      examinerTip: "Apply each year's percentage to the value at the START of that year — not the original. Year 2's 5% decrease acts on £194,400, not £180,000.",
      auditStatus: 'pending',
    },
    // ── pct-C04 ──────────────────────────────────────────────
    {
      id: 'pct-C04', subtopic: 'num-percentages', band: 'C', marks: 4,
      question: '£750 is invested at 6% compound interest per year. How much interest has been earned after 2 years?',
      steps: [
        {
          prompt: 'Write the compound interest multiplier.',
          hint1: '6% interest means the amount grows by 6% each year.',
          hint2: 'Multiplier = 1 + 0.06 = ?',
          hint3: 'Multiplier = 1.06',
          answer: 1.06, tolerance: 0, unit: '',
          explanation: 'Compound interest multiplier = 1.06 (the original plus 6%).',
        },
        {
          prompt: 'Find the value after year 1.',
          hint1: 'Multiply £750 by 1.06.',
          hint2: '750 × 1.06 = ?',
          hint3: '750 × 1.06 = £795',
          answer: 795, tolerance: 0, unit: '£',
          explanation: '£750 × 1.06 = £795 after year 1.',
        },
        {
          prompt: 'Find the value after year 2.',
          hint1: 'Multiply the year-1 value by 1.06 again.',
          hint2: '795 × 1.06 = ?',
          hint3: '795 × 1.06 = £842.70',
          answer: 842.70, tolerance: 0.01, unit: '£',
          explanation: '£795 × 1.06 = £842.70 after year 2.',
        },
        {
          prompt: 'Find the interest earned (total value minus original investment).',
          hint1: 'Interest = final value − original amount.',
          hint2: '842.70 − 750 = ?',
          hint3: '842.70 − 750 = £92.70',
          answer: 92.70, tolerance: 0.01, unit: '£',
          explanation: 'Interest earned = £842.70 − £750 = £92.70.',
        },
      ],
      workedExample: {
        question: '£800 is invested at 5% compound interest per year. Find the interest after 2 years.',
        steps: [
          'Step 1 — multiplier: 1 + 0.05 = <strong>1.05</strong>',
          'Step 2 — year 1: £800 × 1.05 = <strong>£840</strong>',
          'Step 3 — year 2: £840 × 1.05 = <strong>£882</strong>',
          'Step 4 — interest: £882 − £800 = <strong>£82</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "£92.70",
        grade6: "750 × 1.06 = 795. 795 × 1.06 = 842.70. Interest = 842.70 − 750 = £92.70.",
        grade8: "Interest = 750 × (1.06² − 1) = 750 × 0.1236 = £92.70. Or: 750 × 1.06² = 842.70; subtract original.",
      },
      examinerTip: "The question asks for interest EARNED, not the final value. Many students correctly calculate £842.70 but forget to subtract the original £750.",
      auditStatus: 'pending',
    },

    // ── frc-A04 ──────────────────────────────────────────────
    {
      id: 'frc-A04', subtopic: 'num-fractions', band: 'A', marks: 2,
      question: 'Find 3/8 of 72.',
      steps: [
        {
          prompt: 'Divide 72 by the denominator (8).',
          hint1: 'Dividing by the denominator gives you one eighth.',
          hint2: '72 ÷ 8 = ?',
          hint3: '72 ÷ 8 = 9',
          answer: 9, tolerance: 0, unit: '',
          explanation: '72 ÷ 8 = 9. This is one-eighth of 72.',
        },
        {
          prompt: 'Multiply by the numerator (3) to get three-eighths.',
          hint1: 'Three eighths = 3 × one eighth.',
          hint2: '9 × 3 = ?',
          hint3: '9 × 3 = 27',
          answer: 27, tolerance: 0, unit: '',
          explanation: '9 × 3 = 27. So 3/8 of 72 = 27.',
        },
      ],
      workedExample: {
        question: 'Find 5/6 of 48.',
        steps: [
          'Step 1 — divide by denominator: 48 ÷ 6 = <strong>8</strong>',
          'Step 2 — multiply by numerator: 8 × 5 = <strong>40</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "27",
        grade6: "72 ÷ 8 = 9. 9 × 3 = 27.",
        grade8: "3/8 × 72 = 216/8 = 27. Alternatively divide then multiply: 72 ÷ 8 × 3 = 27.",
      },
      examinerTip: "Divide by the denominator first, then multiply by the numerator. This keeps the numbers smaller than multiplying first.",
      auditStatus: 'pending',
    },
    // ── frc-A05 ──────────────────────────────────────────────
    {
      id: 'frc-A05', subtopic: 'num-fractions', band: 'A', marks: 2,
      question: 'Write 7/8 as a decimal and as a percentage.',
      steps: [
        {
          prompt: 'Convert 7/8 to a decimal by dividing the numerator by the denominator.',
          hint1: 'Decimal = numerator ÷ denominator.',
          hint2: '7 ÷ 8 = ?',
          hint3: '7 ÷ 8 = 0.875',
          answer: 0.875, tolerance: 0.001, unit: '',
          explanation: '7 ÷ 8 = 0.875.',
        },
        {
          prompt: 'Convert the decimal to a percentage.',
          hint1: 'Percentage = decimal × 100.',
          hint2: '0.875 × 100 = ?',
          hint3: '0.875 × 100 = 87.5%',
          answer: 87.5, tolerance: 0, unit: '%',
          explanation: '0.875 × 100 = 87.5%.',
        },
      ],
      workedExample: {
        question: 'Write 3/8 as a decimal and a percentage.',
        steps: [
          'Step 1 — decimal: 3 ÷ 8 = <strong>0.375</strong>',
          'Step 2 — percentage: 0.375 × 100 = <strong>37.5%</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "0.875 and 87.5%",
        grade6: "7 ÷ 8 = 0.875; 0.875 × 100 = 87.5%",
        grade8: "7/8 = 0.875 = 87.5%. Know the eighths: 1/8=12.5%, 2/8=25%, 3/8=37.5% ... 7/8=87.5%.",
      },
      examinerTip: "Decimal = top ÷ bottom. Percentage = decimal × 100. Learn the common fractions: halves, quarters, thirds, eighths — they come up repeatedly.",
      auditStatus: 'pending',
    },
    // ── frc-B04 ──────────────────────────────────────────────
    {
      id: 'frc-B04', subtopic: 'num-fractions', band: 'B', marks: 3,
      question: 'Work out 3½ − 1⅔. Give your answer as a mixed number.',
      steps: [
        {
          prompt: 'Convert 3½ to an improper fraction.',
          hint1: 'Whole × denominator + numerator, over denominator.',
          hint2: '(3×2 + 1)/2 = ?',
          hint3: '7/2',
          answer: 3.5, tolerance: 0.01, unit: '',
          explanation: '3½ = 7/2 (whole × denominator + numerator = 6+1 = 7).',
          displayAnswer: '7/2',
        },
        {
          prompt: 'Convert 1⅔ to an improper fraction.',
          hint1: '(1×3 + 2)/3 = ?',
          hint2: '3 + 2 = 5, so 5/3.',
          hint3: '5/3',
          answer: 5 / 3, tolerance: 0.01, unit: '',
          explanation: '1⅔ = 5/3.',
          displayAnswer: '5/3',
        },
        {
          prompt: 'Subtract: 7/2 − 5/3. Use LCD = 6. Give your answer as a mixed number.',
          hint1: 'LCD of 2 and 3 is 6. 7/2 = 21/6, 5/3 = 10/6.',
          hint2: '21/6 − 10/6 = 11/6.',
          hint3: '11/6 = 1 and 5/6 = 1⅚',
          answer: 11 / 6, tolerance: 0.01, unit: '',
          explanation: '21/6 − 10/6 = 11/6. 11 ÷ 6 = 1 remainder 5, so 1⅚.',
          displayAnswer: '1⅚',
        },
      ],
      workedExample: {
        question: 'Work out 2¾ − 1⅓. Give your answer as a mixed number.',
        steps: [
          'Step 1 — improper: 2¾ = 11/4, 1⅓ = 4/3',
          'Step 2 — LCD = 12: 11/4 = 33/12, 4/3 = 16/12',
          'Step 3 — subtract: 33/12 − 16/12 = 17/12 = <strong>1 5/12</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "1⅚",
        grade6: "7/2 − 5/3. LCD=6: 21/6 − 10/6 = 11/6 = 1⅚.",
        grade8: "Convert to improper: 7/2 − 5/3 = 21/6 − 10/6 = 11/6 = 1⅚. Check: 1.833 − 1.667 ≈ 1.833. ✓",
      },
      examinerTip: "Convert to improper fractions first, then find the LCD. A common error is subtracting whole parts and fraction parts separately without finding a common denominator for the fractions.",
      auditStatus: 'pending',
    },
    // ── frc-B05 ──────────────────────────────────────────────
    {
      id: 'frc-B05', subtopic: 'num-fractions', band: 'B', marks: 3,
      question: 'Work out 2⅔ ÷ 1⅓. Give your answer as a whole number or mixed number.',
      steps: [
        {
          prompt: 'Convert 2⅔ to an improper fraction.',
          hint1: '(2×3 + 2)/3 = ?',
          hint2: '6 + 2 = 8, so 8/3.',
          hint3: '8/3',
          answer: 8 / 3, tolerance: 0.01, unit: '',
          explanation: '2⅔ = 8/3.',
          displayAnswer: '8/3',
        },
        {
          prompt: 'Convert 1⅓ to an improper fraction.',
          hint1: '(1×3 + 1)/3 = ?',
          hint2: '3 + 1 = 4, so 4/3.',
          hint3: '4/3',
          answer: 4 / 3, tolerance: 0.01, unit: '',
          explanation: '1⅓ = 4/3.',
          displayAnswer: '4/3',
        },
        {
          prompt: 'Divide 8/3 ÷ 4/3 using keep, change, flip.',
          hint1: 'Keep 8/3, change ÷ to ×, flip 4/3 to 3/4.',
          hint2: '8/3 × 3/4. The 3s cancel.',
          hint3: '8/3 × 3/4 = 8/4 = 2',
          answer: 2, tolerance: 0, unit: '',
          explanation: '8/3 × 3/4 = 24/12 = 2.',
          displayAnswer: '2',
        },
      ],
      workedExample: {
        question: 'Work out 3¾ ÷ 1½.',
        steps: [
          'Step 1 — improper: 3¾ = 15/4, 1½ = 3/2',
          'Step 2 — KCF: 15/4 × 2/3',
          'Step 3 — cancel and multiply: (15×2)/(4×3) = 30/12 = <strong>2½</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "2",
        grade6: "8/3 ÷ 4/3 = 8/3 × 3/4 = 24/12 = 2.",
        grade8: "KCF: 8/3 × 3/4. Cancel 3s: 8/1 × 1/4 = 8/4 = 2.",
      },
      examinerTip: "Always convert to improper fractions BEFORE applying keep-change-flip. Dividing mixed numbers directly without converting first leads to errors.",
      auditStatus: 'pending',
    },
    // ── frc-B06 ──────────────────────────────────────────────
    {
      id: 'frc-B06', subtopic: 'num-fractions', band: 'B', marks: 3,
      question: 'Work out 2⅕ + 1½. Give your answer as a mixed number.',
      steps: [
        {
          prompt: 'Convert 2⅕ to an improper fraction.',
          hint1: '(2×5 + 1)/5 = ?',
          hint2: '10 + 1 = 11, so 11/5.',
          hint3: '11/5',
          answer: 11 / 5, tolerance: 0.01, unit: '',
          explanation: '2⅕ = 11/5.',
          displayAnswer: '11/5',
        },
        {
          prompt: 'Convert 1½ to an improper fraction.',
          hint1: '(1×2 + 1)/2 = ?',
          hint2: '2 + 1 = 3, so 3/2.',
          hint3: '3/2',
          answer: 3 / 2, tolerance: 0.01, unit: '',
          explanation: '1½ = 3/2.',
          displayAnswer: '3/2',
        },
        {
          prompt: 'Add 11/5 + 3/2. Use LCD = 10. Give your answer as a mixed number.',
          hint1: 'LCD of 5 and 2 is 10. 11/5 = 22/10, 3/2 = 15/10.',
          hint2: '22/10 + 15/10 = 37/10.',
          hint3: '37/10 = 3 and 7/10 = 3 7/10',
          answer: 37 / 10, tolerance: 0.01, unit: '',
          explanation: '22/10 + 15/10 = 37/10. 37 ÷ 10 = 3 remainder 7, so 3 7/10.',
          displayAnswer: '3 7/10',
        },
      ],
      workedExample: {
        question: 'Work out 1⅓ + 2¼. Give your answer as a mixed number.',
        steps: [
          'Step 1 — improper: 1⅓ = 4/3, 2¼ = 9/4',
          'Step 2 — LCD = 12: 4/3 = 16/12, 9/4 = 27/12',
          'Step 3 — add: 16/12 + 27/12 = 43/12 = <strong>3 7/12</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "3 7/10",
        grade6: "11/5 + 3/2. LCD=10: 22/10 + 15/10 = 37/10 = 3 7/10.",
        grade8: "Convert to improper fractions, LCD=10: 22/10 + 15/10 = 37/10 = 3 7/10.",
      },
      examinerTip: "Don't add whole parts and fraction parts separately if the fractions need a common denominator. Convert to improper fractions first for a reliable method.",
      auditStatus: 'pending',
    },
    // ── frc-C03 ──────────────────────────────────────────────
    {
      id: 'frc-C03', subtopic: 'num-fractions', band: 'C', marks: 4,
      question: 'Work out (3/4 + 1/6) ÷ (2/3 − 1/4). Give your answer as a mixed number.',
      steps: [
        {
          prompt: 'Work out the numerator bracket: 3/4 + 1/6. Use LCD = 12.',
          hint1: '3/4 = 9/12, 1/6 = 2/12.',
          hint2: '9/12 + 2/12 = 11/12.',
          hint3: '11/12',
          answer: 11 / 12, tolerance: 0.01, unit: '',
          explanation: '3/4 + 1/6: LCD=12. 9/12 + 2/12 = 11/12.',
          displayAnswer: '11/12',
        },
        {
          prompt: 'Work out the denominator bracket: 2/3 − 1/4. Use LCD = 12.',
          hint1: '2/3 = 8/12, 1/4 = 3/12.',
          hint2: '8/12 − 3/12 = 5/12.',
          hint3: '5/12',
          answer: 5 / 12, tolerance: 0.01, unit: '',
          explanation: '2/3 − 1/4: LCD=12. 8/12 − 3/12 = 5/12.',
          displayAnswer: '5/12',
        },
        {
          prompt: 'Divide: 11/12 ÷ 5/12. Apply keep, change, flip.',
          hint1: 'KCF: 11/12 × 12/5.',
          hint2: 'The 12s cancel: 11/1 × 1/5 = 11/5.',
          hint3: '11/5',
          answer: 11 / 5, tolerance: 0.01, unit: '',
          explanation: '11/12 × 12/5 = 11/5 (the 12s cancel).',
          displayAnswer: '11/5',
        },
        {
          prompt: 'Convert 11/5 to a mixed number.',
          hint1: '5 goes into 11 twice with remainder 1.',
          hint2: '11/5 = 2 and 1/5.',
          hint3: '2⅕',
          answer: 11 / 5, tolerance: 0.01, unit: '',
          explanation: '11 ÷ 5 = 2 remainder 1, so 11/5 = 2⅕.',
          displayAnswer: '2⅕',
        },
      ],
      workedExample: {
        question: 'Work out (5/6 + 1/4) ÷ (3/4 − 1/3).',
        steps: [
          'Step 1 — top: LCD=12. 10/12 + 3/12 = 13/12',
          'Step 2 — bottom: LCD=12. 9/12 − 4/12 = 5/12',
          'Step 3 — divide: 13/12 ÷ 5/12 = 13/12 × 12/5 = 13/5',
          'Step 4 — mixed: 13/5 = <strong>2 3/5</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "2⅕",
        grade6: "Top: 9/12 + 2/12 = 11/12. Bottom: 8/12 − 3/12 = 5/12. Divide: 11/12 ÷ 5/12 = 11/5 = 2⅕.",
        grade8: "11/12 ÷ 5/12 = 11/12 × 12/5 = 11/5 = 2⅕. The 12s cancel cleanly.",
      },
      examinerTip: "Work out each bracket separately before dividing. A common error is to try to operate across brackets without evaluating them first. Show brackets evaluated as separate fractions.",
      auditStatus: 'pending',
    },
    // ── frc-C04 ──────────────────────────────────────────────
    {
      id: 'frc-C04', subtopic: 'num-fractions', band: 'C', marks: 4,
      question: 'A recipe for 6 people needs 2¼ cups of flour. How many cups of flour are needed for 10 people? Give your answer as a mixed number.',
      steps: [
        {
          prompt: 'Convert 2¼ to an improper fraction.',
          hint1: '(2×4 + 1)/4 = ?',
          hint2: '8 + 1 = 9, so 9/4.',
          hint3: '9/4',
          answer: 9 / 4, tolerance: 0.01, unit: '',
          explanation: '2¼ = 9/4 cups.',
          displayAnswer: '9/4',
        },
        {
          prompt: 'Find the amount of flour for 1 person.',
          hint1: 'Divide the total by 6.',
          hint2: '9/4 ÷ 6 = 9/4 × 1/6 = 9/24.',
          hint3: '9/24 = 3/8',
          answer: 3 / 8, tolerance: 0.01, unit: '',
          explanation: '9/4 ÷ 6 = 9/24 = 3/8 cup per person.',
          displayAnswer: '3/8',
        },
        {
          prompt: 'Multiply by 10 to find the amount for 10 people.',
          hint1: '3/8 × 10 = ?',
          hint2: '30/8. Can you simplify?',
          hint3: '30/8 = 15/4',
          answer: 15 / 4, tolerance: 0.01, unit: '',
          explanation: '3/8 × 10 = 30/8 = 15/4.',
          displayAnswer: '15/4',
        },
        {
          prompt: 'Convert 15/4 to a mixed number.',
          hint1: '4 goes into 15 three times with remainder 3.',
          hint2: '15/4 = 3 and 3/4.',
          hint3: '3¾',
          answer: 15 / 4, tolerance: 0.01, unit: '',
          explanation: '15 ÷ 4 = 3 remainder 3, so 3¾ cups.',
          displayAnswer: '3¾',
        },
      ],
      workedExample: {
        question: 'A recipe for 4 people needs 1½ cups of sugar. How many cups are needed for 10 people?',
        steps: [
          'Step 1 — improper: 1½ = 3/2',
          'Step 2 — per person: 3/2 ÷ 4 = 3/8',
          'Step 3 — for 10: 3/8 × 10 = 30/8 = 15/4',
          'Step 4 — mixed: 15/4 = <strong>3¾</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "3¾",
        grade6: "9/4 ÷ 6 = 3/8 per person. 3/8 × 10 = 30/8 = 3¾ cups.",
        grade8: "Scale factor = 10/6 = 5/3. 9/4 × 5/3 = 45/12 = 15/4 = 3¾ cups. More efficient direct method.",
      },
      examinerTip: "Divide by the original number of people, then multiply by the new number. Or find the scale factor (10 ÷ 6 = 5/3) and multiply directly. Both methods are valid — show your working clearly.",
      auditStatus: 'pending',
    },

    // ── stf-A04 ──────────────────────────────────────────────
    {
      id: 'stf-A04', subtopic: 'num-standard-form', band: 'A', marks: 2,
      question: 'Write 0.00307 in standard form.',
      steps: [
        {
          prompt: 'Write the significant figure part: a number between 1 and 10.',
          hint1: 'Move the decimal point until you have a number between 1 and 10.',
          hint2: '0.00307 → 3.07',
          hint3: '3.07',
          answer: 3.07, tolerance: 0.001, unit: '',
          explanation: 'The significant figures give 3.07 (between 1 and 10).',
        },
        {
          prompt: 'Write the power of 10. How many places did the decimal move, and in which direction?',
          hint1: 'Moving the decimal RIGHT means a negative power.',
          hint2: '0.00307 → 3.07: decimal moved 3 places to the right.',
          hint3: 'Power = −3',
          answer: -3, tolerance: 0, unit: '',
          explanation: '0.00307 = 3.07 × 10⁻³. Moving right → negative exponent.',
        },
      ],
      workedExample: {
        question: 'Write 0.00052 in standard form.',
        steps: [
          'Step 1 — significant figures: 0.00052 → <strong>5.2</strong>',
          'Step 2 — power: decimal moved 4 places right → <strong>10⁻⁴</strong>',
          'Answer: 5.2 × 10⁻⁴',
        ],
      },
      sampleAnswer: {
        grade4: "3.07 × 10⁻³",
        grade6: "Move decimal 3 places right to get 3.07. Power = −3. Answer: 3.07 × 10⁻³.",
        grade8: "0.00307 = 3.07 × 10⁻³. Negative exponent because the number is less than 1.",
      },
      examinerTip: "For numbers less than 1, the power of 10 is negative. Count how many places the decimal moves to get to a number between 1 and 10 — that count (negative) is the exponent.",
      auditStatus: 'pending',
    },
    // ── stf-A05 ──────────────────────────────────────────────
    {
      id: 'stf-A05', subtopic: 'num-standard-form', band: 'A', marks: 2,
      question: 'Write 2.3 × 10⁻³ as an ordinary number.',
      steps: [
        {
          prompt: 'The power is −3. How many places does the decimal move, and in which direction?',
          hint1: 'A negative power means the number is less than 1 — move the decimal LEFT.',
          hint2: 'Move the decimal 3 places to the left.',
          hint3: '3 places to the left',
          answer: 3, tolerance: 0, unit: '',
          explanation: '10⁻³ means divide by 1000 — decimal moves 3 places left.',
          checkType: 'skip',
          displayAnswer: '3 places left',
        },
        {
          prompt: 'Write the ordinary number.',
          hint1: 'Start with 2.3 and move the decimal 3 places left.',
          hint2: '2.3 → 0.23 → 0.023 → 0.0023',
          hint3: '0.0023',
          answer: 0.0023, tolerance: 0.00001, unit: '',
          explanation: '2.3 × 10⁻³ = 2.3 ÷ 1000 = 0.0023.',
        },
      ],
      workedExample: {
        question: 'Write 4.5 × 10⁻⁴ as an ordinary number.',
        steps: [
          'Step 1 — power −4: move decimal 4 places left',
          'Step 2 — 4.5 → 0.00045',
          'Answer: <strong>0.00045</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "0.0023",
        grade6: "Power −3 means move decimal 3 places left: 2.3 → 0.0023.",
        grade8: "2.3 × 10⁻³ = 2.3 ÷ 10³ = 2.3 ÷ 1000 = 0.0023.",
      },
      examinerTip: "Negative power → move decimal LEFT → number less than 1. Positive power → move right → number greater than 10. The magnitude of the exponent tells you how many places.",
      auditStatus: 'pending',
    },
    // ── stf-B04 ──────────────────────────────────────────────
    {
      id: 'stf-B04', subtopic: 'num-standard-form', band: 'B', marks: 3,
      question: 'Work out (6.4 × 10⁸) ÷ (1.6 × 10⁵). Give your answer in standard form.',
      steps: [
        {
          prompt: 'Divide the coefficients: 6.4 ÷ 1.6.',
          hint1: 'Divide the numbers separately from the powers.',
          hint2: '6.4 ÷ 1.6 = ?',
          hint3: '6.4 ÷ 1.6 = 4',
          answer: 4, tolerance: 0, unit: '',
          explanation: '6.4 ÷ 1.6 = 4.',
        },
        {
          prompt: 'Divide the powers of 10: 10⁸ ÷ 10⁵.',
          hint1: 'When dividing, subtract the exponents.',
          hint2: '10⁸ ÷ 10⁵ = 10^(8−5) = ?',
          hint3: '10³',
          answer: 3, tolerance: 0, unit: '',
          explanation: '10⁸ ÷ 10⁵ = 10^(8−5) = 10³.',
          displayAnswer: '10³',
        },
        {
          prompt: 'Write the full answer in standard form and as an ordinary number.',
          hint1: 'Combine: 4 × 10³.',
          hint2: '4 × 10³ = 4 × 1000 = ?',
          hint3: '4000',
          answer: 4000, tolerance: 0, unit: '',
          explanation: '4 × 10³ = 4000. In standard form: 4 × 10³.',
          displayAnswer: '4 × 10³',
        },
      ],
      workedExample: {
        question: 'Work out (9.6 × 10⁶) ÷ (3.2 × 10²). Give your answer in standard form.',
        steps: [
          'Step 1 — coefficients: 9.6 ÷ 3.2 = <strong>3</strong>',
          'Step 2 — powers: 10⁶ ÷ 10² = 10⁴',
          'Step 3 — answer: 3 × 10⁴ = <strong>30,000</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "4 × 10³",
        grade6: "6.4 ÷ 1.6 = 4. 10⁸ ÷ 10⁵ = 10³. Answer: 4 × 10³.",
        grade8: "(6.4 ÷ 1.6) × 10^(8−5) = 4 × 10³ = 4000.",
      },
      examinerTip: "Divide the coefficients and subtract the exponents separately. Check your final coefficient is between 1 and 10 — if not, adjust and change the power accordingly.",
      auditStatus: 'pending',
    },
    // ── stf-B05 ──────────────────────────────────────────────
    {
      id: 'stf-B05', subtopic: 'num-standard-form', band: 'B', marks: 3,
      question: 'Work out (2.5 × 10⁴) + (6.5 × 10³). Give your answer in standard form.',
      steps: [
        {
          prompt: 'Convert both numbers to ordinary numbers and add.',
          hint1: '2.5 × 10⁴ = 25,000 and 6.5 × 10³ = 6,500.',
          hint2: '25,000 + 6,500 = ?',
          hint3: '31,500',
          answer: 31500, tolerance: 0, unit: '',
          explanation: '25,000 + 6,500 = 31,500.',
        },
        {
          prompt: 'Write 31,500 in standard form. What is the coefficient?',
          hint1: 'The coefficient must be between 1 and 10.',
          hint2: '31,500 → 3.15 × ?',
          hint3: '3.15',
          answer: 3.15, tolerance: 0.001, unit: '',
          explanation: '31,500 = 3.15 × 10⁴. Coefficient is 3.15.',
          displayAnswer: '3.15',
        },
        {
          prompt: 'State the full answer in standard form.',
          hint1: '31,500 = 3.15 × 10?',
          hint2: 'Decimal moved 4 places.',
          hint3: '3.15 × 10⁴',
          answer: 31500, tolerance: 0, unit: '',
          explanation: '31,500 = 3.15 × 10⁴.',
          displayAnswer: '3.15 × 10⁴',
        },
      ],
      workedExample: {
        question: 'Work out (3.4 × 10³) + (8.6 × 10²). Give your answer in standard form.',
        steps: [
          'Step 1 — ordinary: 3400 + 860 = 4260',
          'Step 2 — standard form: 4260 = 4.26 × 10³',
          'Answer: <strong>4.26 × 10³</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "3.15 × 10⁴",
        grade6: "25,000 + 6,500 = 31,500 = 3.15 × 10⁴.",
        grade8: "Equalise powers first: 2.5 × 10⁴ + 0.65 × 10⁴ = 3.15 × 10⁴.",
      },
      examinerTip: "For addition/subtraction in standard form, convert to ordinary numbers first. Trying to add with different powers directly (2.5 + 6.5) gives the wrong answer.",
      auditStatus: 'pending',
    },
    // ── stf-B06 ──────────────────────────────────────────────
    {
      id: 'stf-B06', subtopic: 'num-standard-form', band: 'B', marks: 3,
      question: 'Light travels at 3 × 10⁸ m/s. The Sun is 1.5 × 10¹¹ m from Earth. How long does light take to travel from the Sun to Earth? Give your answer in standard form (seconds).',
      steps: [
        {
          prompt: 'Write down the formula: time = distance ÷ speed.',
          hint1: 'time = distance ÷ speed.',
          hint2: 'time = (1.5 × 10¹¹) ÷ (3 × 10⁸)',
          hint3: 'time = (1.5 × 10¹¹) ÷ (3 × 10⁸)',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'time = distance ÷ speed = (1.5 × 10¹¹) ÷ (3 × 10⁸)',
          checkType: 'skip',
        },
        {
          prompt: 'Divide the coefficients: 1.5 ÷ 3.',
          hint1: '1.5 ÷ 3 = ?',
          hint2: '1.5 ÷ 3 = 0.5',
          hint3: '0.5 — but this is less than 1, so adjust.',
          answer: 0.5, tolerance: 0.001, unit: '',
          explanation: '1.5 ÷ 3 = 0.5.',
        },
        {
          prompt: 'Divide powers: 10¹¹ ÷ 10⁸ = 10³. Adjust 0.5 × 10³ to standard form.',
          hint1: '0.5 × 10³ is not standard form (coefficient must be ≥ 1).',
          hint2: '0.5 = 5 × 10⁻¹, so 0.5 × 10³ = 5 × 10² = ?',
          hint3: '5 × 10²',
          answer: 500, tolerance: 0, unit: 's',
          explanation: '0.5 × 10³ = 5 × 10² = 500 seconds.',
          displayAnswer: '5 × 10²',
        },
      ],
      workedExample: {
        question: 'A satellite is 4.2 × 10⁷ m from Earth. A signal travels at 3 × 10⁸ m/s. How long does it take? (standard form)',
        steps: [
          'Step 1 — time = 4.2 × 10⁷ ÷ 3 × 10⁸',
          'Step 2 — coefficients: 4.2 ÷ 3 = 1.4',
          'Step 3 — powers: 10⁷ ÷ 10⁸ = 10⁻¹',
          'Answer: 1.4 × 10⁻¹ s = 0.14 s',
        ],
      },
      sampleAnswer: {
        grade4: "5 × 10² s",
        grade6: "(1.5 × 10¹¹) ÷ (3 × 10⁸) = 0.5 × 10³ = 5 × 10² s.",
        grade8: "time = 1.5 ÷ 3 × 10^(11−8) = 0.5 × 10³ = 5 × 10² = 500 s.",
      },
      examinerTip: "After dividing, check that the coefficient is between 1 and 10. If 0.5 × 10³ comes out, rewrite as 5 × 10², adjusting the power by 1.",
      auditStatus: 'pending',
    },
    // ── stf-C03 ──────────────────────────────────────────────
    {
      id: 'stf-C03', subtopic: 'num-standard-form', band: 'C', marks: 4,
      question: 'Work out (3.6 × 10⁵ × 4 × 10⁻³) − (2.5 × 10²). Give your answer in standard form.',
      steps: [
        {
          prompt: 'Work out 3.6 × 10⁵ × 4 × 10⁻³. Multiply the coefficients.',
          hint1: '3.6 × 4 = ?',
          hint2: '3.6 × 4 = 14.4',
          hint3: '14.4',
          answer: 14.4, tolerance: 0.01, unit: '',
          explanation: '3.6 × 4 = 14.4.',
        },
        {
          prompt: 'Multiply the powers: 10⁵ × 10⁻³. Then adjust to standard form.',
          hint1: 'Add the exponents: 5 + (−3) = 2. So 14.4 × 10².',
          hint2: '14.4 × 10² = 1440. Express in standard form.',
          hint3: '1440 = 1.44 × 10³',
          answer: 1440, tolerance: 0, unit: '',
          explanation: '14.4 × 10² = 1440 = 1.44 × 10³.',
          displayAnswer: '1.44 × 10³',
        },
        {
          prompt: 'Work out 2.5 × 10².',
          hint1: '2.5 × 100 = ?',
          hint2: '2.5 × 100 = 250',
          hint3: '250',
          answer: 250, tolerance: 0, unit: '',
          explanation: '2.5 × 10² = 250.',
        },
        {
          prompt: 'Subtract and write in standard form: 1440 − 250.',
          hint1: '1440 − 250 = ?',
          hint2: '1440 − 250 = 1190',
          hint3: '1190 = 1.19 × 10³',
          answer: 1190, tolerance: 0, unit: '',
          explanation: '1440 − 250 = 1190 = 1.19 × 10³.',
          displayAnswer: '1.19 × 10³',
        },
      ],
      workedExample: {
        question: 'Work out (2.4 × 10⁴ × 5 × 10⁻²) − (3 × 10²). Give your answer in standard form.',
        steps: [
          'Step 1 — multiply: 2.4 × 5 = 12; 10⁴ × 10⁻² = 10²; so 12 × 10² = 1200',
          'Step 2 — convert: 1200 = 1.2 × 10³',
          'Step 3 — subtract: 1200 − 300 = 900 = 9 × 10²',
        ],
      },
      sampleAnswer: {
        grade4: "1.19 × 10³",
        grade6: "3.6×4=14.4; 10⁵×10⁻³=10². 14.4×10²=1440. 2.5×10²=250. 1440−250=1190=1.19×10³.",
        grade8: "First term: 14.4 × 10² = 1.44 × 10³ = 1440. Second: 2.5 × 10² = 250. 1440 − 250 = 1190 = 1.19 × 10³.",
      },
      examinerTip: "Work out each term separately as an ordinary number before subtracting. Only convert back to standard form at the final step.",
      auditStatus: 'pending',
    },
    // ── stf-C04 ──────────────────────────────────────────────
    {
      id: 'stf-C04', subtopic: 'num-standard-form', band: 'C', marks: 4,
      question: 'A sample contains 7.5 × 10⁻⁵ g of bacteria. Each bacterium has mass 2.5 × 10⁻⁶ g. How many bacteria are in the sample? Give your answer as an ordinary number.',
      steps: [
        {
          prompt: 'Write the calculation: number = total mass ÷ mass per bacterium.',
          hint1: 'number = (7.5 × 10⁻⁵) ÷ (2.5 × 10⁻⁶)',
          hint2: 'Divide coefficients and divide powers separately.',
          hint3: '7.5 ÷ 2.5 = 3; 10⁻⁵ ÷ 10⁻⁶ = 10¹',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'number = (7.5 ÷ 2.5) × 10^(−5−(−6)) = 3 × 10¹',
          checkType: 'skip',
        },
        {
          prompt: 'Divide the coefficients: 7.5 ÷ 2.5.',
          hint1: '7.5 ÷ 2.5 = ?',
          hint2: '7.5 ÷ 2.5 = 3',
          hint3: '3',
          answer: 3, tolerance: 0, unit: '',
          explanation: '7.5 ÷ 2.5 = 3.',
        },
        {
          prompt: 'Find the power of 10: 10⁻⁵ ÷ 10⁻⁶.',
          hint1: 'Subtract the exponents: −5 − (−6) = ?',
          hint2: '−5 − (−6) = −5 + 6 = 1',
          hint3: '10¹',
          answer: 1, tolerance: 0, unit: '',
          explanation: '10⁻⁵ ÷ 10⁻⁶ = 10^(−5+6) = 10¹.',
          displayAnswer: '10¹',
        },
        {
          prompt: 'Combine: 3 × 10¹. Write as an ordinary number.',
          hint1: '3 × 10¹ = 3 × 10 = ?',
          hint2: '3 × 10 = 30',
          hint3: '30 bacteria',
          answer: 30, tolerance: 0, unit: '',
          explanation: '3 × 10¹ = 30 bacteria.',
        },
      ],
      workedExample: {
        question: 'A solution contains 6.6 × 10⁻⁴ g of substance. Each particle has mass 3 × 10⁻⁵ g. How many particles?',
        steps: [
          'Step 1 — divide coefficients: 6.6 ÷ 3 = 2.2',
          'Step 2 — divide powers: 10⁻⁴ ÷ 10⁻⁵ = 10¹',
          'Step 3 — answer: 2.2 × 10¹ = 22 particles',
        ],
      },
      sampleAnswer: {
        grade4: "30",
        grade6: "7.5 ÷ 2.5 = 3. 10⁻⁵ ÷ 10⁻⁶ = 10¹. 3 × 10¹ = 30 bacteria.",
        grade8: "(7.5 × 10⁻⁵) ÷ (2.5 × 10⁻⁶) = 3 × 10^(−5+6) = 3 × 10¹ = 30.",
      },
      examinerTip: "When subtracting a negative exponent, be careful: −5 − (−6) = +1, not −11. Write out the subtraction explicitly to avoid sign errors.",
      auditStatus: 'pending',
    },

    // ── int-A04 ──────────────────────────────────────────────
    {
      id: 'int-A04', subtopic: 'num-integers', band: 'A', marks: 2,
      question: 'Round 345,679 to the nearest 10,000.',
      steps: [
        {
          prompt: 'Identify the ten-thousands digit and the digit to its right.',
          hint1: 'In 345,679: the ten-thousands digit is 4. The thousands digit is 5.',
          hint2: 'Since 5 ≥ 5, round up.',
          hint3: 'Round up: 4 becomes 5.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'The ten-thousands digit is 4. The next digit (5) tells us to round up.',
          checkType: 'skip',
          displayAnswer: 'Ten-thousands digit = 4, next = 5 → round up',
        },
        {
          prompt: 'Write the rounded number.',
          hint1: 'Rounding 345,679 to nearest 10,000 → replace everything after the ten-thousands with zeros.',
          hint2: '3__,___ → 350,000',
          hint3: '350,000',
          answer: 350000, tolerance: 0, unit: '',
          explanation: '345,679 rounded to nearest 10,000 = 350,000.',
        },
      ],
      workedExample: {
        question: 'Round 278,340 to the nearest 10,000.',
        steps: [
          'Step 1 — ten-thousands digit: 7. Next digit: 8 ≥ 5, so round up.',
          'Step 2 — rounded: <strong>280,000</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "350,000",
        grade6: "Ten-thousands digit = 4. Next digit = 5, so round up to 350,000.",
        grade8: "The ten-thousands digit is 4; the thousands digit 5 means round up. 345,679 → 350,000.",
      },
      examinerTip: "Look at the digit AFTER the one you are rounding to. If it is 5 or more, round up. If less than 5, round down (keep the digit the same).",
      auditStatus: 'pending',
    },
    // ── int-A05 ──────────────────────────────────────────────
    {
      id: 'int-A05', subtopic: 'num-integers', band: 'A', marks: 2,
      question: 'Round 0.006455 to 3 significant figures.',
      steps: [
        {
          prompt: 'Identify the first significant figure in 0.006455.',
          hint1: 'Leading zeros are NOT significant. The first non-zero digit is the first s.f.',
          hint2: 'In 0.006455, the 6 is the first significant figure.',
          hint3: 'First s.f. = 6 (the 4 is 2nd, the 5 is 3rd)',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Zeros before the 6 are placeholders, not significant. 6, 4, 5 are the first three significant figures.',
          checkType: 'skip',
          displayAnswer: '1st s.f. = 6',
        },
        {
          prompt: 'Round to 3 s.f. The 4th significant figure is 5. Write the answer.',
          hint1: 'The 3rd s.f. is 5, and the 4th s.f. is 5 → round up.',
          hint2: '0.006455 → 0.006460 → 0.00646',
          hint3: '0.00646',
          answer: 0.00646, tolerance: 0.000001, unit: '',
          explanation: '3 s.f.: 6, 4, 5 — but 4th s.f. is 5, so round the 3rd s.f. (5) up to 6. Answer: 0.00646.',
        },
      ],
      workedExample: {
        question: 'Round 0.003782 to 3 significant figures.',
        steps: [
          'Step 1 — first s.f.: the 3 (zeros are not significant)',
          'Step 2 — 3 s.f.: 3, 7, 8 — 4th s.f. is 2 < 5, so leave 8 unchanged.',
          'Answer: <strong>0.00378</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "0.00646",
        grade6: "First 3 s.f.: 6, 4, 5. 4th digit = 5 → round up. 0.00646.",
        grade8: "Significant figures start at the first non-zero digit. 0.006455 to 3 s.f. = 0.00646 (4th digit rounds the 3rd up).",
      },
      examinerTip: "With small decimals, zeros between the decimal point and the first non-zero digit are NOT significant — they are just placeholders. Count significant figures from the first non-zero digit.",
      auditStatus: 'pending',
    },
    // ── int-B02 ──────────────────────────────────────────────
    {
      id: 'int-B02', subtopic: 'num-integers', band: 'B', marks: 3,
      question: 'A number n is given as 380 correct to 2 significant figures. Write down the error interval for n.',
      steps: [
        {
          prompt: 'What is the degree of rounding? What is half of this?',
          hint1: '380 to 2 s.f. means rounded to the nearest 10.',
          hint2: 'Half of 10 = 5.',
          hint3: 'Half the degree of accuracy = 5.',
          answer: 5, tolerance: 0, unit: '',
          explanation: '380 to 2 s.f. is rounded to the nearest 10. Half of 10 is 5.',
        },
        {
          prompt: 'Find the lower bound.',
          hint1: 'Lower bound = value − half the degree of accuracy.',
          hint2: '380 − 5 = ?',
          hint3: '375',
          answer: 375, tolerance: 0, unit: '',
          explanation: 'Lower bound = 380 − 5 = 375.',
        },
        {
          prompt: 'State the full error interval.',
          hint1: 'Upper bound = 380 + 5 = 385. The interval uses ≤ n < for upper bound.',
          hint2: '375 ≤ n < 385',
          hint3: '375 ≤ n < 385',
          answer: 385, tolerance: 0, unit: '',
          explanation: 'Error interval: 375 ≤ n < 385. Upper bound is strict (<) because 385 would round to 390.',
          displayAnswer: '375 ≤ n < 385',
        },
      ],
      workedExample: {
        question: 'A number is given as 240 to 2 significant figures. Write the error interval.',
        steps: [
          'Step 1 — rounding degree: 240 to 2 s.f. = nearest 10. Half = 5.',
          'Step 2 — lower bound: 240 − 5 = 235.',
          'Step 3 — error interval: <strong>235 ≤ n < 245</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "375 ≤ n < 385",
        grade6: "380 to 2 s.f. is nearest 10. Half = 5. Bounds: 375 to 385. Error interval: 375 ≤ n < 385.",
        grade8: "375 ≤ n < 385. Lower bound is inclusive (≤); upper bound is exclusive (<) since 385 rounds to 390, not 380.",
      },
      examinerTip: "Always write error intervals as LB ≤ n < UB — the lower bound uses ≤ and the upper bound uses strict <. This is AQA's required notation.",
      auditStatus: 'pending',
    },
    // ── int-B03 ──────────────────────────────────────────────
    {
      id: 'int-B03', subtopic: 'num-integers', band: 'B', marks: 3,
      question: 'Use approximation to estimate the value of (287 × 0.41) ÷ 0.97. Show your working.',
      steps: [
        {
          prompt: 'Round each number to 1 significant figure.',
          hint1: '287 ≈ 300, 0.41 ≈ 0.4, 0.97 ≈ 1.',
          hint2: 'Replace each with a rounded value.',
          hint3: '300, 0.4, and 1',
          answer: 0, tolerance: 0, unit: '',
          explanation: '287 → 300 (1 s.f.), 0.41 → 0.4 (1 s.f.), 0.97 → 1 (1 s.f.).',
          checkType: 'skip',
          displayAnswer: '300, 0.4, 1',
        },
        {
          prompt: 'Estimate the numerator: 300 × 0.4.',
          hint1: '300 × 0.4 = ?',
          hint2: '300 × 0.4 = 120',
          hint3: '120',
          answer: 120, tolerance: 0, unit: '',
          explanation: '300 × 0.4 = 120.',
        },
        {
          prompt: 'Divide by the denominator: 120 ÷ 1.',
          hint1: 'Dividing by 1 gives the same number.',
          hint2: '120 ÷ 1 = ?',
          hint3: '120',
          answer: 120, tolerance: 0, unit: '',
          explanation: '120 ÷ 1 = 120. Estimated answer is approximately 120.',
        },
      ],
      workedExample: {
        question: 'Estimate (412 × 0.21) ÷ 1.97.',
        steps: [
          'Step 1 — round: 412 ≈ 400, 0.21 ≈ 0.2, 1.97 ≈ 2',
          'Step 2 — numerator: 400 × 0.2 = 80',
          'Step 3 — estimate: 80 ÷ 2 = <strong>40</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "120",
        grade6: "287 ≈ 300, 0.41 ≈ 0.4, 0.97 ≈ 1. Estimate = (300 × 0.4) ÷ 1 = 120.",
        grade8: "(287 × 0.41)/0.97 ≈ (300 × 0.4)/1 = 120. Actual ≈ 121.3, so estimate is close.",
      },
      examinerTip: "Round each number to 1 significant figure before calculating. Always show the rounded values you used — marks are given for method as well as the estimate.",
      auditStatus: 'pending',
    },
    // ── int-B04 ──────────────────────────────────────────────
    {
      id: 'int-B04', subtopic: 'num-integers', band: 'B', marks: 3,
      question: 'Work out 3.6² − 2.1 × 4.5. Give your answer to 1 decimal place.',
      steps: [
        {
          prompt: 'Calculate 3.6². ',
          hint1: '3.6² = 3.6 × 3.6.',
          hint2: '3.6 × 3.6 = ?',
          hint3: '3.6 × 3.6 = 12.96',
          answer: 12.96, tolerance: 0.001, unit: '',
          explanation: '3.6² = 12.96.',
        },
        {
          prompt: 'Calculate 2.1 × 4.5.',
          hint1: '2.1 × 4.5 = ?',
          hint2: '2 × 4.5 = 9, 0.1 × 4.5 = 0.45',
          hint3: '2.1 × 4.5 = 9.45',
          answer: 9.45, tolerance: 0.001, unit: '',
          explanation: '2.1 × 4.5 = 9.45.',
        },
        {
          prompt: 'Subtract: 12.96 − 9.45. Round to 1 d.p.',
          hint1: '12.96 − 9.45 = ?',
          hint2: '12.96 − 9.45 = 3.51',
          hint3: '3.51 → 3.5 (1 d.p.)',
          answer: 3.5, tolerance: 0.05, unit: '',
          explanation: '12.96 − 9.45 = 3.51. Rounded to 1 d.p.: 3.5.',
        },
      ],
      workedExample: {
        question: 'Work out 4.2² − 1.8 × 3.5. Give your answer to 1 d.p.',
        steps: [
          'Step 1 — 4.2² = 17.64',
          'Step 2 — 1.8 × 3.5 = 6.30',
          'Step 3 — 17.64 − 6.30 = 11.34 → <strong>11.3</strong> (1 d.p.)',
        ],
      },
      sampleAnswer: {
        grade4: "3.5",
        grade6: "3.6² = 12.96. 2.1 × 4.5 = 9.45. 12.96 − 9.45 = 3.51 → 3.5 (1 d.p.)",
        grade8: "Order of operations: square first, then multiply, then subtract. 12.96 − 9.45 = 3.51 → 3.5.",
      },
      examinerTip: "Apply order of operations (BIDMAS): powers first, then multiplication, then subtraction. Don't try to do it left-to-right.",
      auditStatus: 'pending',
    },
    // ── int-B05 ──────────────────────────────────────────────
    {
      id: 'int-B05', subtopic: 'num-integers', band: 'B', marks: 3,
      question: 'Express 0.363636... as a fraction in its simplest form.',
      steps: [
        {
          prompt: 'Let x = 0.363636... Multiply both sides by 100 to shift two decimal places.',
          hint1: '100x = 36.363636...',
          hint2: 'Now subtract x from 100x.',
          hint3: '100x − x = 36.363636... − 0.363636... = 36',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Multiplying by 100 shifts the repeating block. Subtracting eliminates it: 99x = 36.',
          checkType: 'skip',
          displayAnswer: '99x = 36',
        },
        {
          prompt: 'Solve: 99x = 36. Write x as a fraction.',
          hint1: 'x = 36/99.',
          hint2: 'Simplify by dividing both by HCF(36, 99).',
          hint3: 'HCF(36,99) = 9. 36/99 = 4/11.',
          answer: 36 / 99, tolerance: 0.001, unit: '',
          explanation: 'x = 36/99. HCF(36,99)=9. Simplified: 4/11.',
          displayAnswer: '36/99',
        },
        {
          prompt: 'Simplify 36/99 to its lowest terms.',
          hint1: 'HCF(36, 99) = 9.',
          hint2: '36 ÷ 9 = 4, 99 ÷ 9 = 11.',
          hint3: '4/11',
          answer: 4 / 11, tolerance: 0.001, unit: '',
          explanation: '36/99 ÷ 9/9 = 4/11.',
          displayAnswer: '4/11',
        },
      ],
      workedExample: {
        question: 'Express 0.272727... as a fraction.',
        steps: [
          'Step 1 — let x = 0.272727...; 100x = 27.272727...',
          'Step 2 — subtract: 99x = 27, so x = 27/99',
          'Step 3 — simplify: HCF(27,99)=9. 27/99 = <strong>3/11</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "4/11",
        grade6: "Let x = 0.3636... 100x = 36.3636... 99x = 36. x = 36/99 = 4/11.",
        grade8: "99x = 36 → x = 36/99. HCF(36,99) = 9. 36/99 = 4/11.",
      },
      examinerTip: "The repeating block has 2 digits, so multiply by 100. The number of digits in the repeating block determines the multiplier (1 digit → ×10, 2 digits → ×100).",
      auditStatus: 'pending',
    },
    // ── int-B06 ──────────────────────────────────────────────
    {
      id: 'int-B06', subtopic: 'num-integers', band: 'B', marks: 3,
      question: 'x = 8.4 and y = 3.7, both given to 1 decimal place. Find the minimum value of x × y.',
      steps: [
        {
          prompt: 'Find the lower bound of x.',
          hint1: 'x = 8.4 to 1 d.p. means rounded to nearest 0.1.',
          hint2: 'Lower bound = 8.4 − 0.05.',
          hint3: '8.35',
          answer: 8.35, tolerance: 0, unit: '',
          explanation: 'Lower bound of x = 8.4 − 0.05 = 8.35.',
        },
        {
          prompt: 'Find the lower bound of y.',
          hint1: 'y = 3.7 to 1 d.p. Lower bound = 3.7 − 0.05.',
          hint2: '3.7 − 0.05 = ?',
          hint3: '3.65',
          answer: 3.65, tolerance: 0, unit: '',
          explanation: 'Lower bound of y = 3.7 − 0.05 = 3.65.',
        },
        {
          prompt: 'Calculate the minimum value of x × y.',
          hint1: 'Minimum product = lower bound × lower bound.',
          hint2: '8.35 × 3.65 = ?',
          hint3: '8.35 × 3.65 = 30.4775',
          answer: 30.4775, tolerance: 0.001, unit: '',
          explanation: '8.35 × 3.65 = 30.4775.',
        },
      ],
      workedExample: {
        question: 'p = 6.2 and q = 1.8, both to 1 d.p. Find the minimum value of p × q.',
        steps: [
          'Step 1 — LB(p) = 6.2 − 0.05 = 6.15',
          'Step 2 — LB(q) = 1.8 − 0.05 = 1.75',
          'Step 3 — minimum: 6.15 × 1.75 = <strong>10.7625</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "30.4775",
        grade6: "LB(x) = 8.35, LB(y) = 3.65. Min x×y = 8.35 × 3.65 = 30.4775.",
        grade8: "Min product requires both values at their lower bounds: 8.35 × 3.65 = 30.4775.",
      },
      examinerTip: "For minimum product, use lower bound × lower bound. For maximum product, use upper bound × upper bound. For min/max of division, the combinations differ — min = LB ÷ UB.",
      auditStatus: 'pending',
    },
    // ── int-C01 ──────────────────────────────────────────────
    {
      id: 'int-C01', subtopic: 'num-integers', band: 'C', marks: 4,
      question: 'n = 6500 given to 2 significant figures. Find the upper bound of 1000 ÷ n. Give your answer to 3 significant figures.',
      steps: [
        {
          prompt: 'Find the lower bound of n.',
          hint1: '6500 to 2 s.f. is rounded to the nearest 100.',
          hint2: 'Lower bound = 6500 − 50 = ?',
          hint3: '6450',
          answer: 6450, tolerance: 0, unit: '',
          explanation: '6500 to 2 s.f. = nearest 100. LB = 6500 − 50 = 6450.',
        },
        {
          prompt: 'Find the upper bound of n.',
          hint1: 'Upper bound = 6500 + 50.',
          hint2: '6500 + 50 = ?',
          hint3: '6550',
          answer: 6550, tolerance: 0, unit: '',
          explanation: 'UB(n) = 6500 + 50 = 6550.',
        },
        {
          prompt: 'To find the upper bound of 1000 ÷ n, which bound of n do you use?',
          hint1: 'To maximise 1000 ÷ n, you need n to be as small as possible.',
          hint2: 'Use the lower bound of n to get the maximum quotient.',
          hint3: 'Use LB(n) = 6450.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Upper bound of a division: use the lower bound of the denominator (makes the result larger).',
          checkType: 'skip',
          displayAnswer: 'Use LB(n) = 6450',
        },
        {
          prompt: 'Calculate 1000 ÷ 6450. Give your answer to 3 s.f.',
          hint1: '1000 ÷ 6450 = ?',
          hint2: '1000 ÷ 6450 ≈ 0.15504...',
          hint3: '0.155 (3 s.f.)',
          answer: 0.155, tolerance: 0.001, unit: '',
          explanation: '1000 ÷ 6450 = 0.15504... = 0.155 (3 s.f.).',
        },
      ],
      workedExample: {
        question: 'm = 4800 to 2 s.f. Find the upper bound of 500 ÷ m. Give to 3 s.f.',
        steps: [
          'Step 1 — 4800 to 2 s.f. = nearest 100. LB = 4750, UB = 4850.',
          'Step 2 — UB(500/m): use LB(m) = 4750.',
          'Step 3 — 500 ÷ 4750 = 0.10526... = <strong>0.105 (3 s.f.)</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "0.155",
        grade6: "n to 2 s.f. = nearest 100. LB = 6450. UB(1000/n) = 1000 ÷ 6450 = 0.155 (3 s.f.).",
        grade8: "UB of division: use LB of denominator. 1000 ÷ 6450 = 0.15504... → 0.155 (3 s.f.).",
      },
      examinerTip: "Upper bound of a fraction (a ÷ b): use UB(a) and LB(b). Lower bound: use LB(a) and UB(b). These combinations give the extreme values.",
      auditStatus: 'pending',
    },
    // ── int-C02 ──────────────────────────────────────────────
    {
      id: 'int-C02', subtopic: 'num-integers', band: 'C', marks: 4,
      question: 'x = 4.7 and y = 2.3, both correct to 1 decimal place. Find the upper bound of (x + y) ÷ (x − y). Give your answer to 3 significant figures.',
      steps: [
        {
          prompt: 'Find the upper bound of (x + y). Use UB(x) + UB(y).',
          hint1: 'UB(x) = 4.75, UB(y) = 2.35.',
          hint2: '4.75 + 2.35 = ?',
          hint3: '7.10',
          answer: 7.10, tolerance: 0.001, unit: '',
          explanation: 'UB(x+y) = UB(x) + UB(y) = 4.75 + 2.35 = 7.10.',
        },
        {
          prompt: 'Find the lower bound of (x − y). Use LB(x) − UB(y).',
          hint1: 'To minimise a difference, use the smallest value minus the largest subtracted value.',
          hint2: 'LB(x) = 4.65, UB(y) = 2.35.',
          hint3: '4.65 − 2.35 = 2.30',
          answer: 2.30, tolerance: 0.001, unit: '',
          explanation: 'LB(x−y) = LB(x) − UB(y) = 4.65 − 2.35 = 2.30.',
        },
        {
          prompt: 'Divide: UB(x+y) ÷ LB(x−y) = 7.10 ÷ 2.30.',
          hint1: '7.10 ÷ 2.30 = ?',
          hint2: '7.10 ÷ 2.30 ≈ 3.087',
          hint3: '3.087...',
          answer: 3.087, tolerance: 0.001, unit: '',
          explanation: '7.10 ÷ 2.30 = 3.0869... ≈ 3.087.',
        },
        {
          prompt: 'Round to 3 significant figures.',
          hint1: '3.0869... to 3 s.f.',
          hint2: 'The 4th s.f. is 6 ≥ 5, so round up.',
          hint3: '3.09',
          answer: 3.09, tolerance: 0.001, unit: '',
          explanation: '3.0869... → 3.09 (3 s.f.).',
        },
      ],
      workedExample: {
        question: 'a = 5.8, b = 1.6, both to 1 d.p. Find UB of (a+b)÷(a−b) to 3 s.f.',
        steps: [
          'Step 1 — UB(a+b) = 5.85 + 1.65 = 7.50',
          'Step 2 — LB(a−b) = 5.75 − 1.65 = 4.10',
          'Step 3 — 7.50 ÷ 4.10 = 1.829... = <strong>1.83 (3 s.f.)</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "3.09",
        grade6: "UB(x+y)=7.10. LB(x−y)=4.65−2.35=2.30. UB = 7.10÷2.30 = 3.09 (3 s.f.).",
        grade8: "UB of quotient: max numerator / min denominator = 7.10 / 2.30 = 3.0869... = 3.09 (3 s.f.).",
      },
      examinerTip: "To maximise a fraction, maximise the numerator AND minimise the denominator. For subtraction in the denominator, use LB(x) − UB(y) to get the smallest denominator.",
      auditStatus: 'pending',
    },
    // ── int-C03 ──────────────────────────────────────────────
    {
      id: 'int-C03', subtopic: 'num-integers', band: 'C', marks: 4,
      question: 'Express 0.414141... as a fraction in its simplest form. Show your working.',
      steps: [
        {
          prompt: 'Let x = 0.414141... Identify the repeating block length and choose the multiplier.',
          hint1: 'The repeating block is 41 (2 digits), so multiply by 100.',
          hint2: '100x = 41.414141...',
          hint3: '100x = 41.414141...',
          answer: 0, tolerance: 0, unit: '',
          explanation: '2-digit repeat → multiply by 100. 100x = 41.414141...',
          checkType: 'skip',
          displayAnswer: '100x = 41.414141...',
        },
        {
          prompt: 'Subtract x from 100x.',
          hint1: '100x − x = 41.414141... − 0.414141...',
          hint2: '99x = 41',
          hint3: '99x = 41',
          answer: 41, tolerance: 0, unit: '',
          explanation: '100x − x = 99x = 41.',
          displayAnswer: '99x = 41',
        },
        {
          prompt: 'Solve for x.',
          hint1: 'x = 41/99',
          hint2: 'Check HCF(41, 99): 41 is prime. HCF = 1.',
          hint3: 'x = 41/99 (already simplified)',
          answer: 0, tolerance: 0, unit: '',
          explanation: '41 is prime and does not divide 99, so 41/99 is already in simplest form.',
          checkType: 'skip',
          displayAnswer: 'x = 41/99',
        },
        {
          prompt: 'State the fraction.',
          hint1: 'x = 41/99.',
          hint2: 'Check: 41 ÷ 99 = 0.41414... ✓',
          hint3: '41/99',
          answer: 41 / 99, tolerance: 0.001, unit: '',
          explanation: '0.414141... = 41/99.',
          displayAnswer: '41/99',
        },
      ],
      workedExample: {
        question: 'Express 0.181818... as a fraction.',
        steps: [
          'Step 1 — 2-digit repeat: 100x = 18.181818...',
          'Step 2 — subtract: 99x = 18 → x = 18/99',
          'Step 3 — simplify: HCF(18,99)=9. 18/99 = <strong>2/11</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "41/99",
        grade6: "100x = 41.41... Subtract: 99x = 41. x = 41/99. 41 is prime, so already simplified.",
        grade8: "Let x = 0.41̄. 100x − x = 99x = 41. x = 41/99. HCF(41,99)=1, fully simplified.",
      },
      examinerTip: "When the repeating block starts immediately after the decimal point, the method gives (repeating block)/99 (2 digits) or /9 (1 digit). Always check whether the fraction simplifies.",
      auditStatus: 'pending',
    },
    // ── int-C04 ──────────────────────────────────────────────
    {
      id: 'int-C04', subtopic: 'num-integers', band: 'C', marks: 4,
      question: 'A square has side length 24 m, measured to the nearest metre. Find the upper bound of the area of the square. Give your answer in standard form to 3 significant figures.',
      steps: [
        {
          prompt: 'Find the upper bound of the side length.',
          hint1: 'Measured to nearest metre: half the unit = 0.5 m.',
          hint2: 'Upper bound = 24 + 0.5 = ?',
          hint3: '24.5 m',
          answer: 24.5, tolerance: 0, unit: 'm',
          explanation: 'Upper bound of side = 24 + 0.5 = 24.5 m.',
        },
        {
          prompt: 'Calculate the upper bound of the area.',
          hint1: 'Area = side². Upper bound of area = (UB of side)².',
          hint2: '24.5² = ?',
          hint3: '24.5² = 600.25',
          answer: 600.25, tolerance: 0.001, unit: 'm²',
          explanation: 'UB(area) = 24.5² = 600.25 m².',
        },
        {
          prompt: 'Write 600.25 in standard form to 3 significant figures.',
          hint1: '600.25 = 6.0025 × 10²',
          hint2: 'To 3 s.f.: the 4th s.f. is 2 < 5, so round down.',
          hint3: '6.00 × 10²',
          answer: 600, tolerance: 0.5, unit: 'm²',
          explanation: '600.25 → 6.0025 × 10². To 3 s.f.: 6.00 × 10² = 600 m².',
          displayAnswer: '6.00 × 10²',
        },
      ],
      workedExample: {
        question: 'A square has side 15 m to the nearest metre. Find the upper bound of the area in standard form (3 s.f.).',
        steps: [
          'Step 1 — UB(side) = 15 + 0.5 = 15.5 m',
          'Step 2 — UB(area) = 15.5² = 240.25 m²',
          'Step 3 — standard form: 240.25 = <strong>2.40 × 10² m² (3 s.f.)</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "6.00 × 10² m²",
        grade6: "UB(side) = 24.5 m. UB(area) = 24.5² = 600.25. In standard form: 6.00 × 10² m².",
        grade8: "UB side = 24.5. Area UB = 24.5² = 600.25 = 6.0025 × 10². To 3 s.f.: 6.00 × 10² m².",
      },
      examinerTip: "When writing 600 in standard form to 3 s.f., write 6.00 × 10² — the trailing zeros after the decimal are significant and must be shown.",
      auditStatus: 'pending',
    },

    // ── pow-A04 ──────────────────────────────────────────────
    {
      id: 'pow-A04', subtopic: 'num-powers-roots', band: 'A', marks: 2,
      question: 'Simplify 5³ ÷ 5⁴. Give your answer as a power of 5 and as a decimal.',
      steps: [
        {
          prompt: 'Apply the division law for indices: subtract the powers.',
          hint1: 'When dividing same base: aᵐ ÷ aⁿ = aᵐ⁻ⁿ.',
          hint2: '5³ ÷ 5⁴ = 5^(3−4) = ?',
          hint3: '5⁻¹',
          answer: -1, tolerance: 0, unit: '',
          explanation: '5³ ÷ 5⁴ = 5^(3−4) = 5⁻¹.',
          displayAnswer: '5⁻¹',
        },
        {
          prompt: 'Write 5⁻¹ as a decimal.',
          hint1: 'A negative index means the reciprocal.',
          hint2: '5⁻¹ = 1/5 = ?',
          hint3: '0.2',
          answer: 0.2, tolerance: 0, unit: '',
          explanation: '5⁻¹ = 1/5 = 0.2.',
        },
      ],
      workedExample: {
        question: 'Simplify 3² ÷ 3⁵. Give as a power and as a fraction.',
        steps: [
          'Step 1 — subtract powers: 3^(2−5) = <strong>3⁻³</strong>',
          'Step 2 — as fraction: 3⁻³ = 1/3³ = 1/27 = <strong>0.037...</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "5⁻¹ = 0.2",
        grade6: "5³ ÷ 5⁴ = 5^(3−4) = 5⁻¹ = 1/5 = 0.2",
        grade8: "Division law: subtract exponents. 5^(3−4) = 5⁻¹ = 1/5 = 0.2.",
      },
      examinerTip: "Negative index = reciprocal. 5⁻¹ = 1/5, not −5. Always write the reciprocal before converting to decimal.",
      auditStatus: 'pending',
    },
    // ── pow-A05 ──────────────────────────────────────────────
    {
      id: 'pow-A05', subtopic: 'num-powers-roots', band: 'A', marks: 2,
      question: 'Work out 4⁻². Give your answer as a fraction and as a decimal.',
      steps: [
        {
          prompt: 'Apply the negative index rule: write 4⁻² as a fraction.',
          hint1: 'Negative index: a⁻ⁿ = 1/aⁿ.',
          hint2: '4⁻² = 1/4² = 1/?',
          hint3: '1/16',
          answer: 16, tolerance: 0, unit: '',
          explanation: '4⁻² = 1/4² = 1/16. The denominator is 4² = 16.',
          displayAnswer: '1/16',
        },
        {
          prompt: 'Convert 1/16 to a decimal.',
          hint1: '1 ÷ 16 = ?',
          hint2: '1 ÷ 16 = 0.0625',
          hint3: '0.0625',
          answer: 0.0625, tolerance: 0.0001, unit: '',
          explanation: '1/16 = 0.0625.',
        },
      ],
      workedExample: {
        question: 'Work out 3⁻³. Give as a fraction and a decimal.',
        steps: [
          'Step 1 — negative index: 3⁻³ = 1/3³ = <strong>1/27</strong>',
          'Step 2 — decimal: 1 ÷ 27 = <strong>0.037...</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "1/16 = 0.0625",
        grade6: "4⁻² = 1/4² = 1/16 = 0.0625",
        grade8: "a⁻ⁿ = 1/aⁿ. 4⁻² = 1/16 = 0.0625.",
      },
      examinerTip: "4⁻² does NOT mean −16. Negative power means take the reciprocal: flip to 1/4², then square the denominator.",
      auditStatus: 'pending',
    },
    // ── pow-B02 ──────────────────────────────────────────────
    {
      id: 'pow-B02', subtopic: 'num-powers-roots', band: 'B', marks: 3,
      question: 'Express (2³ × 4²) ÷ 8² as a power of 2.',
      steps: [
        {
          prompt: 'Write 4² and 8² as powers of 2.',
          hint1: '4 = 2², so 4² = (2²)² = 2⁴. And 8 = 2³, so 8² = (2³)² = 2⁶.',
          hint2: '4² = 2⁴ and 8² = 2⁶.',
          hint3: '2⁴ and 2⁶',
          answer: 4, tolerance: 0, unit: '',
          explanation: '4² = (2²)² = 2⁴. Power of power: multiply indices.',
          displayAnswer: '4² = 2⁴',
        },
        {
          prompt: 'Combine the numerator: 2³ × 2⁴.',
          hint1: 'Multiplication law: add the indices.',
          hint2: '2³ × 2⁴ = 2^(3+4) = ?',
          hint3: '2⁷',
          answer: 7, tolerance: 0, unit: '',
          explanation: '2³ × 2⁴ = 2⁷.',
          displayAnswer: '2⁷',
        },
        {
          prompt: 'Divide: 2⁷ ÷ 2⁶.',
          hint1: 'Division law: subtract the indices.',
          hint2: '2⁷ ÷ 2⁶ = 2^(7−6) = ?',
          hint3: '2¹ = 2',
          answer: 1, tolerance: 0, unit: '',
          explanation: '2⁷ ÷ 2⁶ = 2¹ = 2.',
          displayAnswer: '2¹',
        },
      ],
      workedExample: {
        question: 'Express (3² × 9³) ÷ 27 as a power of 3.',
        steps: [
          'Step 1 — convert: 9³ = (3²)³ = 3⁶; 27 = 3³',
          'Step 2 — numerator: 3² × 3⁶ = 3⁸',
          'Step 3 — divide: 3⁸ ÷ 3³ = <strong>3⁵</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "2¹",
        grade6: "4²=(2²)²=2⁴; 8²=(2³)²=2⁶. Numerator: 2³×2⁴=2⁷. 2⁷÷2⁶=2¹.",
        grade8: "Convert all to powers of 2: 2³ × 2⁴ ÷ 2⁶ = 2^(3+4−6) = 2¹.",
      },
      examinerTip: "Convert all bases to the same number first. Power of power rule: (aᵐ)ⁿ = aᵐⁿ — multiply the indices.",
      auditStatus: 'pending',
    },
    // ── pow-B03 ──────────────────────────────────────────────
    {
      id: 'pow-B03', subtopic: 'num-powers-roots', band: 'B', marks: 3,
      question: 'Work out 27^(2/3).',
      steps: [
        {
          prompt: 'Interpret the fractional index: 27^(2/3) = (27^(1/3))². What does the denominator 3 mean?',
          hint1: 'The denominator is the root. 27^(1/3) = cube root of 27.',
          hint2: '∛27 = ?',
          hint3: '∛27 = 3',
          answer: 0, tolerance: 0, unit: '',
          explanation: '27^(1/3) = ∛27 = 3. The denominator of the index is the root.',
          checkType: 'skip',
          displayAnswer: '∛27 = 3',
        },
        {
          prompt: 'Find the cube root of 27.',
          hint1: 'What number cubed equals 27?',
          hint2: '3³ = 27, so ∛27 = ?',
          hint3: '3',
          answer: 3, tolerance: 0, unit: '',
          explanation: '∛27 = 3.',
        },
        {
          prompt: 'Now apply the numerator: square the result. 3² = ?',
          hint1: 'The numerator 2 means square.',
          hint2: '3² = ?',
          hint3: '9',
          answer: 9, tolerance: 0, unit: '',
          explanation: '27^(2/3) = (∛27)² = 3² = 9.',
        },
      ],
      workedExample: {
        question: 'Work out 64^(2/3).',
        steps: [
          'Step 1 — root (denominator 3): ∛64 = 4',
          'Step 2 — power (numerator 2): 4² = <strong>16</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "9",
        grade6: "27^(2/3) = (∛27)² = 3² = 9.",
        grade8: "Fractional index: denominator = root, numerator = power. (∛27)² = 3² = 9.",
      },
      examinerTip: "For a^(m/n): take the nth root first (easier with smaller numbers), then apply the power m. Doing power first with large numbers can make arithmetic much harder.",
      auditStatus: 'pending',
    },
    // ── pow-B04 ──────────────────────────────────────────────
    {
      id: 'pow-B04', subtopic: 'num-powers-roots', band: 'B', marks: 3,
      question: 'Simplify 6x³y² × 2x²y³.',
      steps: [
        {
          prompt: 'Multiply the numerical coefficients.',
          hint1: '6 × 2 = ?',
          hint2: '6 × 2 = 12',
          hint3: '12',
          answer: 12, tolerance: 0, unit: '',
          explanation: '6 × 2 = 12.',
        },
        {
          prompt: 'Apply the multiplication law to the x terms: x³ × x².',
          hint1: 'Add the powers: x^(3+2) = ?',
          hint2: '3 + 2 = 5',
          hint3: 'x⁵',
          answer: 5, tolerance: 0, unit: '',
          explanation: 'x³ × x² = x^(3+2) = x⁵.',
          displayAnswer: 'x⁵',
        },
        {
          prompt: 'Apply the multiplication law to the y terms: y² × y³. State the full simplified expression.',
          hint1: 'y² × y³ = y^(2+3) = ?',
          hint2: 'y⁵',
          hint3: 'Full answer: 12x⁵y⁵',
          answer: 5, tolerance: 0, unit: '',
          explanation: 'y² × y³ = y⁵. Combined: 12x⁵y⁵.',
          displayAnswer: '12x⁵y⁵',
        },
      ],
      workedExample: {
        question: 'Simplify 4a²b³ × 3a³b.',
        steps: [
          'Step 1 — coefficients: 4 × 3 = 12',
          'Step 2 — a: a² × a³ = a⁵',
          'Step 3 — b: b³ × b = b⁴. Answer: <strong>12a⁵b⁴</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "12x⁵y⁵",
        grade6: "6×2=12. x³×x²=x⁵. y²×y³=y⁵. Answer: 12x⁵y⁵.",
        grade8: "Multiply coefficients, add powers of like bases: 6×2=12, x^(3+2)=x⁵, y^(2+3)=y⁵ → 12x⁵y⁵.",
      },
      examinerTip: "Multiply coefficients as normal numbers; add powers of identical letter bases. Only add powers when the BASE is the same — x³ × y² stays x³y², powers don't combine.",
      auditStatus: 'pending',
    },
    // ── pow-B05 ──────────────────────────────────────────────
    {
      id: 'pow-B05', subtopic: 'num-powers-roots', band: 'B', marks: 3,
      question: 'Work out 1000^(2/3) − 81^(1/4).',
      steps: [
        {
          prompt: 'Evaluate 1000^(2/3). Start by finding the cube root of 1000.',
          hint1: 'Denominator 3 means cube root.',
          hint2: '∛1000 = ?',
          hint3: '∛1000 = 10',
          answer: 10, tolerance: 0, unit: '',
          explanation: '1000^(1/3) = ∛1000 = 10.',
        },
        {
          prompt: 'Apply the numerator: 10². What is 1000^(2/3)?',
          hint1: '10² = ?',
          hint2: '10² = 100',
          hint3: '100',
          answer: 100, tolerance: 0, unit: '',
          explanation: '1000^(2/3) = (∛1000)² = 10² = 100.',
        },
        {
          prompt: 'Evaluate 81^(1/4) and subtract from 100.',
          hint1: 'Denominator 4 means fourth root. ⁴√81 = ?',
          hint2: '3⁴ = 81, so ⁴√81 = 3.',
          hint3: '100 − 3 = 97',
          answer: 97, tolerance: 0, unit: '',
          explanation: '81^(1/4) = ⁴√81 = 3. So 100 − 3 = 97.',
        },
      ],
      workedExample: {
        question: 'Work out 125^(2/3) − 16^(1/4).',
        steps: [
          'Step 1 — 125^(2/3): ∛125 = 5; 5² = 25',
          'Step 2 — 16^(1/4): ⁴√16 = 2',
          'Step 3 — subtract: 25 − 2 = <strong>23</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "97",
        grade6: "1000^(2/3) = (∛1000)² = 10² = 100. 81^(1/4) = ⁴√81 = 3. 100 − 3 = 97.",
        grade8: "1000^(2/3) = 100. 81^(1/4) = 3. 100 − 3 = 97.",
      },
      examinerTip: "Work out each term separately before combining. For fractional indices: denominator = root, numerator = power. Calculate the root FIRST to keep numbers manageable.",
      auditStatus: 'pending',
    },
    // ── pow-B06 ──────────────────────────────────────────────
    {
      id: 'pow-B06', subtopic: 'num-powers-roots', band: 'B', marks: 3,
      question: 'Simplify (2x²)³ × x⁴.',
      steps: [
        {
          prompt: 'Expand (2x²)³ using the power of a product rule.',
          hint1: '(ab)ⁿ = aⁿbⁿ. So (2x²)³ = 2³ × (x²)³.',
          hint2: '2³ = ?',
          hint3: '2³ = 8',
          answer: 8, tolerance: 0, unit: '',
          explanation: '(2x²)³ = 2³ × (x²)³ = 8 × (x²)³.',
        },
        {
          prompt: 'Simplify (x²)³ using the power of a power rule.',
          hint1: '(xᵐ)ⁿ = xᵐⁿ.',
          hint2: '(x²)³ = x^(2×3) = ?',
          hint3: 'x⁶',
          answer: 6, tolerance: 0, unit: '',
          explanation: '(x²)³ = x^(2×3) = x⁶.',
          displayAnswer: 'x⁶',
        },
        {
          prompt: 'Multiply 8x⁶ × x⁴ to get the final simplified expression.',
          hint1: 'x⁶ × x⁴ = x^(6+4) = ?',
          hint2: 'x¹⁰',
          hint3: '8x¹⁰',
          answer: 10, tolerance: 0, unit: '',
          explanation: '8x⁶ × x⁴ = 8x^(6+4) = 8x¹⁰.',
          displayAnswer: '8x¹⁰',
        },
      ],
      workedExample: {
        question: 'Simplify (3y³)² × y².',
        steps: [
          'Step 1 — expand: (3y³)² = 3² × (y³)² = 9y⁶',
          'Step 2 — multiply: 9y⁶ × y² = <strong>9y⁸</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "8x¹⁰",
        grade6: "(2x²)³ = 8x⁶. 8x⁶ × x⁴ = 8x¹⁰.",
        grade8: "(2x²)³ = 2³(x²)³ = 8x⁶. Then 8x⁶ · x⁴ = 8x¹⁰.",
      },
      examinerTip: "Apply the power to EVERY factor inside the bracket: (2x²)³ = 2³ × x^(2×3) = 8x⁶. A common error is to cube only the x and forget to cube the 2.",
      auditStatus: 'pending',
    },
    // ── pow-C01 ──────────────────────────────────────────────
    {
      id: 'pow-C01', subtopic: 'num-powers-roots', band: 'C', marks: 4,
      question: 'Show that √50 + √18 = 8√2.',
      steps: [
        {
          prompt: 'Simplify √50.',
          hint1: '50 = 25 × 2. √50 = √25 × √2.',
          hint2: '√25 = 5.',
          hint3: '√50 = 5√2',
          answer: 5, tolerance: 0, unit: '',
          explanation: '√50 = √(25×2) = 5√2.',
          displayAnswer: '5√2',
        },
        {
          prompt: 'Simplify √18.',
          hint1: '18 = 9 × 2. √18 = √9 × √2.',
          hint2: '√9 = 3.',
          hint3: '√18 = 3√2',
          answer: 3, tolerance: 0, unit: '',
          explanation: '√18 = √(9×2) = 3√2.',
          displayAnswer: '3√2',
        },
        {
          prompt: 'Add 5√2 + 3√2.',
          hint1: 'Add the coefficients: 5 + 3 = ?',
          hint2: '5 + 3 = 8',
          hint3: '8√2',
          answer: 8, tolerance: 0, unit: '',
          explanation: '5√2 + 3√2 = (5+3)√2 = 8√2. ✓',
          displayAnswer: '8√2',
        },
        {
          prompt: 'State the conclusion.',
          hint1: '√50 + √18 = 5√2 + 3√2 = 8√2.',
          hint2: 'This equals the right-hand side, so the identity is proved.',
          hint3: '8√2 = 8√2 ✓',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Both sides equal 8√2, so the identity is shown.',
          checkType: 'skip',
          displayAnswer: 'Shown: √50 + √18 = 8√2 ✓',
        },
      ],
      workedExample: {
        question: 'Show that √75 + √12 = 7√3.',
        steps: [
          'Step 1 — √75 = √(25×3) = 5√3',
          'Step 2 — √12 = √(4×3) = 2√3',
          'Step 3 — add: 5√3 + 2√3 = 7√3 ✓',
        ],
      },
      sampleAnswer: {
        grade4: "8√2",
        grade6: "√50 = 5√2. √18 = 3√2. 5√2 + 3√2 = 8√2. ✓",
        grade8: "√50 = 5√2 (since 50=25×2). √18 = 3√2 (since 18=9×2). Sum = 8√2 as required.",
      },
      examinerTip: "Find the largest perfect square factor of each surd. √50 = √(25×2) = 5√2, not √(10×5). Writing the largest square factor gives the simplest surd form in one step.",
      auditStatus: 'pending',
    },
    // ── pow-C02 ──────────────────────────────────────────────
    {
      id: 'pow-C02', subtopic: 'num-powers-roots', band: 'C', marks: 4,
      question: 'Rationalise the denominator of 15/(2√3). Give your answer in the form p√3/q.',
      steps: [
        {
          prompt: 'Multiply numerator and denominator by √3. What does the denominator become?',
          hint1: '2√3 × √3 = 2 × (√3)² = 2 × 3.',
          hint2: '2 × 3 = ?',
          hint3: '6',
          answer: 6, tolerance: 0, unit: '',
          explanation: '2√3 × √3 = 2 × 3 = 6.',
        },
        {
          prompt: 'Write the new numerator after multiplying by √3.',
          hint1: '15 × √3 = ?',
          hint2: '15√3',
          hint3: '15√3',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Numerator: 15 × √3 = 15√3.',
          checkType: 'skip',
          displayAnswer: '15√3',
        },
        {
          prompt: 'Write the fraction 15√3/6 in simplest form. What is p?',
          hint1: 'Divide numerator coefficient and denominator by their HCF.',
          hint2: 'HCF(15, 6) = 3. 15/6 = 5/2.',
          hint3: 'p = 5',
          answer: 5, tolerance: 0, unit: '',
          explanation: '15√3/6 = 5√3/2. Divide by HCF = 3.',
          displayAnswer: '5√3/2',
        },
        {
          prompt: 'State the simplified answer as a decimal (to 2 d.p.).',
          hint1: '5√3/2 = 5 × 1.732/2 = ?',
          hint2: '5 × 1.732 = 8.660; ÷ 2 = 4.330',
          hint3: '≈ 4.33',
          answer: 4.33, tolerance: 0.01, unit: '',
          explanation: '5√3/2 ≈ 5 × 1.732 / 2 ≈ 4.33.',
        },
      ],
      workedExample: {
        question: 'Rationalise 12/(3√2). Give in the form p√2/q.',
        steps: [
          'Step 1 — multiply by √2/√2: denominator = 3√2 × √2 = 6',
          'Step 2 — numerator: 12√2',
          'Step 3 — simplify: 12√2/6 = <strong>2√2</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "5√3/2",
        grade6: "Multiply by √3/√3. Denominator: 2√3 × √3 = 6. Numerator: 15√3. Simplify: 15√3/6 = 5√3/2.",
        grade8: "15/(2√3) × √3/√3 = 15√3/6 = 5√3/2. HCF(15,6)=3.",
      },
      examinerTip: "Rationalise by multiplying top and bottom by the surd in the denominator (not the whole denominator expression). Check the final fraction simplifies — don't leave it as 15√3/6.",
      auditStatus: 'pending',
    },
    // ── pow-C03 ──────────────────────────────────────────────
    {
      id: 'pow-C03', subtopic: 'num-powers-roots', band: 'C', marks: 4,
      question: 'Solve 4^x = 8^(x−1). Show your working.',
      steps: [
        {
          prompt: 'Write both sides as powers of 2.',
          hint1: '4 = 2² and 8 = 2³.',
          hint2: '4^x = (2²)^x = 2^(2x). 8^(x−1) = (2³)^(x−1) = 2^(3x−3).',
          hint3: '2^(2x) = 2^(3x−3)',
          answer: 2, tolerance: 0, unit: '',
          explanation: '4 = 2², 8 = 2³. Both sides expressed as powers of 2.',
          displayAnswer: '2^(2x) = 2^(3x−3)',
        },
        {
          prompt: 'Since the bases are equal, equate the exponents.',
          hint1: '2x = 3x − 3.',
          hint2: 'Rearrange: 3 = 3x − 2x = x.',
          hint3: 'x = 3',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Equal bases → equal exponents. 2x = 3x − 3.',
          checkType: 'skip',
          displayAnswer: '2x = 3x − 3',
        },
        {
          prompt: 'Solve 2x = 3x − 3 for x.',
          hint1: 'Subtract 2x from both sides: 0 = x − 3.',
          hint2: 'x = 3.',
          hint3: 'x = 3',
          answer: 3, tolerance: 0, unit: '',
          explanation: '2x = 3x − 3 → 0 = x − 3 → x = 3.',
        },
        {
          prompt: 'Verify: check that 4³ = 8².',
          hint1: '4³ = 64. 8² = 64.',
          hint2: 'Both equal 64. ✓',
          hint3: 'x = 3 is correct.',
          answer: 0, tolerance: 0, unit: '',
          explanation: '4³ = 64 and 8^(3−1) = 8² = 64. ✓',
          checkType: 'skip',
          displayAnswer: 'Check: 4³ = 64 = 8² ✓',
        },
      ],
      workedExample: {
        question: 'Solve 9^x = 27^(x−1).',
        steps: [
          'Step 1 — base 3: 9 = 3², 27 = 3³',
          'Step 2 — equate: 3^(2x) = 3^(3x−3) → 2x = 3x − 3',
          'Step 3 — solve: x = 3',
          'Step 4 — check: 9³ = 729 = 27² ✓',
        ],
      },
      sampleAnswer: {
        grade4: "x = 3",
        grade6: "4^x = (2²)^x = 2^(2x). 8^(x−1) = 2^(3x−3). So 2x = 3x−3 → x = 3.",
        grade8: "Express in base 2: 2^(2x) = 2^(3x−3). Equal exponents: 2x = 3x−3 → x = 3. Check: 4³ = 64 = 8². ✓",
      },
      examinerTip: "Find a common base for both sides (here, base 2). Once both sides are the same base, set the exponents equal and solve the resulting linear equation.",
      auditStatus: 'pending',
    },
    // ── pow-C04 ──────────────────────────────────────────────
    {
      id: 'pow-C04', subtopic: 'num-powers-roots', band: 'C', marks: 4,
      question: 'Expand and simplify (3 + √5)². Give your answer in the form a + b√5.',
      steps: [
        {
          prompt: 'Apply (a + b)² = a² + 2ab + b². What is a² when a = 3?',
          hint1: '(3 + √5)² = 3² + 2(3)(√5) + (√5)².',
          hint2: '3² = ?',
          hint3: '9',
          answer: 9, tolerance: 0, unit: '',
          explanation: 'a² = 3² = 9.',
        },
        {
          prompt: 'Find the middle term: 2 × 3 × √5. What is the coefficient of √5?',
          hint1: '2 × 3 × √5 = 6√5.',
          hint2: 'Coefficient = ?',
          hint3: '6',
          answer: 6, tolerance: 0, unit: '',
          explanation: '2ab = 2 × 3 × √5 = 6√5.',
          displayAnswer: '6√5',
        },
        {
          prompt: 'Find the last term: (√5)².',
          hint1: '(√5)² = 5.',
          hint2: '√5 × √5 = ?',
          hint3: '5',
          answer: 5, tolerance: 0, unit: '',
          explanation: '(√5)² = 5.',
        },
        {
          prompt: 'Combine all three terms: 9 + 6√5 + 5. What is the integer part (a)?',
          hint1: '9 + 5 = ?',
          hint2: '9 + 5 = 14',
          hint3: 'Final answer: 14 + 6√5',
          answer: 14, tolerance: 0, unit: '',
          explanation: '9 + 6√5 + 5 = 14 + 6√5.',
          displayAnswer: '14 + 6√5',
        },
      ],
      workedExample: {
        question: 'Expand (2 + √3)². Give in the form a + b√3.',
        steps: [
          'Step 1 — a²: 2² = 4',
          'Step 2 — 2ab: 2×2×√3 = 4√3',
          'Step 3 — b²: (√3)² = 3',
          'Step 4 — combine: 4 + 4√3 + 3 = <strong>7 + 4√3</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "14 + 6√5",
        grade6: "(3+√5)² = 9 + 6√5 + 5 = 14 + 6√5.",
        grade8: "(3+√5)² = 3² + 2(3)(√5) + (√5)² = 9 + 6√5 + 5 = 14 + 6√5.",
      },
      examinerTip: "Use the full expansion (a+b)² = a² + 2ab + b². A common error is writing (3+√5)² = 9 + 5 = 14 and forgetting the 2ab middle term.",
      auditStatus: 'pending',
    },

    // ── bnd-A02 ──────────────────────────────────────────────
    {
      id: 'bnd-A02', subtopic: 'num-bounds', band: 'A', marks: 2,
      question: 'A time is measured as 35 seconds, to the nearest second. Write down the error interval.',
      steps: [
        {
          prompt: 'Find the lower bound.',
          hint1: 'Measured to nearest second: half unit = 0.5 s.',
          hint2: '35 − 0.5 = ?',
          hint3: '34.5',
          answer: 34.5, tolerance: 0, unit: 's',
          explanation: 'Lower bound = 35 − 0.5 = 34.5 s.',
        },
        {
          prompt: 'Find the upper bound and write the error interval.',
          hint1: 'Upper bound = 35 + 0.5.',
          hint2: '35 + 0.5 = 35.5',
          hint3: '34.5 ≤ t < 35.5',
          answer: 35.5, tolerance: 0, unit: 's',
          explanation: 'Upper bound = 35.5. Error interval: 34.5 ≤ t < 35.5.',
          displayAnswer: '34.5 ≤ t < 35.5',
        },
      ],
      workedExample: {
        question: 'A time is 48 seconds to the nearest second. Write the error interval.',
        steps: [
          'Step 1 — half unit = 0.5',
          'Step 2 — bounds: 47.5 ≤ t < 48.5',
        ],
      },
      sampleAnswer: {
        grade4: "34.5 ≤ t < 35.5",
        grade6: "Half of 1 second = 0.5. LB = 34.5, UB = 35.5. Error interval: 34.5 ≤ t < 35.5.",
        grade8: "Measured to nearest 1 s: 35 ± 0.5. Error interval: 34.5 ≤ t < 35.5.",
      },
      examinerTip: "Use ≤ for the lower bound and < (strict) for the upper bound. 35.5 is not included because it would round to 36, not 35.",
      auditStatus: 'pending',
    },
    // ── bnd-A03 ──────────────────────────────────────────────
    {
      id: 'bnd-A03', subtopic: 'num-bounds', band: 'A', marks: 2,
      question: 'A mass is measured as 2.36 kg, correct to 3 significant figures. Write the error interval.',
      steps: [
        {
          prompt: 'Find the lower bound.',
          hint1: '2.36 to 3 s.f. is rounded to the nearest 0.01. Half = 0.005.',
          hint2: '2.36 − 0.005 = ?',
          hint3: '2.355',
          answer: 2.355, tolerance: 0, unit: 'kg',
          explanation: 'Lower bound = 2.36 − 0.005 = 2.355 kg.',
        },
        {
          prompt: 'Find the upper bound and state the error interval.',
          hint1: '2.36 + 0.005 = ?',
          hint2: '2.365',
          hint3: '2.355 ≤ m < 2.365',
          answer: 2.365, tolerance: 0, unit: 'kg',
          explanation: 'Upper bound = 2.365 kg. Error interval: 2.355 ≤ m < 2.365.',
          displayAnswer: '2.355 ≤ m < 2.365',
        },
      ],
      workedExample: {
        question: 'A length is 4.72 m to 3 s.f. Write the error interval.',
        steps: [
          'Step 1 — rounding to nearest 0.01: half = 0.005.',
          'Step 2 — bounds: 4.715 ≤ l < 4.725',
        ],
      },
      sampleAnswer: {
        grade4: "2.355 ≤ m < 2.365",
        grade6: "3 s.f. → nearest 0.01. Half = 0.005. Bounds: 2.355 to 2.365. Error interval: 2.355 ≤ m < 2.365.",
        grade8: "2.36 ± 0.005. Error interval: 2.355 ≤ m < 2.365.",
      },
      examinerTip: "The degree of accuracy is the position of the last significant figure. For 2.36 (3 s.f.), the last digit is hundredths — so half the unit is 0.005.",
      auditStatus: 'pending',
    },
    // ── bnd-A04 ──────────────────────────────────────────────
    {
      id: 'bnd-A04', subtopic: 'num-bounds', band: 'A', marks: 2,
      question: 'A distance is recorded as 8 km, rounded to the nearest kilometre. Write the error interval.',
      steps: [
        {
          prompt: 'Find the lower bound.',
          hint1: 'Rounded to nearest 1 km. Half the unit = 0.5 km.',
          hint2: '8 − 0.5 = ?',
          hint3: '7.5',
          answer: 7.5, tolerance: 0, unit: 'km',
          explanation: 'Lower bound = 8 − 0.5 = 7.5 km.',
        },
        {
          prompt: 'Find the upper bound and write the error interval.',
          hint1: '8 + 0.5 = ?',
          hint2: '8.5',
          hint3: '7.5 ≤ d < 8.5',
          answer: 8.5, tolerance: 0, unit: 'km',
          explanation: 'Upper bound = 8.5 km. Error interval: 7.5 ≤ d < 8.5.',
          displayAnswer: '7.5 ≤ d < 8.5',
        },
      ],
      workedExample: {
        question: 'A distance is 15 km to the nearest km. Write the error interval.',
        steps: [
          'Step 1 — half unit = 0.5',
          'Step 2 — error interval: 14.5 ≤ d < 15.5',
        ],
      },
      sampleAnswer: {
        grade4: "7.5 ≤ d < 8.5",
        grade6: "Nearest km: half = 0.5. Bounds: 7.5 and 8.5. 7.5 ≤ d < 8.5.",
        grade8: "8 ± 0.5 km. Error interval: 7.5 ≤ d < 8.5.",
      },
      examinerTip: "Half the unit of measurement gives the ± value. Nearest km: ±0.5 km. Nearest 10 m: ±5 m. Always check what unit the measurement is given in.",
      auditStatus: 'pending',
    },
    // ── bnd-A05 ──────────────────────────────────────────────
    {
      id: 'bnd-A05', subtopic: 'num-bounds', band: 'A', marks: 2,
      question: 'A speed is recorded as 13.7 m/s to 1 decimal place. Write the error interval.',
      steps: [
        {
          prompt: 'Find the lower bound.',
          hint1: 'To 1 d.p. = nearest 0.1. Half = 0.05.',
          hint2: '13.7 − 0.05 = ?',
          hint3: '13.65',
          answer: 13.65, tolerance: 0, unit: 'm/s',
          explanation: 'Lower bound = 13.7 − 0.05 = 13.65 m/s.',
        },
        {
          prompt: 'Find the upper bound and write the error interval.',
          hint1: '13.7 + 0.05 = ?',
          hint2: '13.75',
          hint3: '13.65 ≤ v < 13.75',
          answer: 13.75, tolerance: 0, unit: 'm/s',
          explanation: 'Upper bound = 13.75. Error interval: 13.65 ≤ v < 13.75.',
          displayAnswer: '13.65 ≤ v < 13.75',
        },
      ],
      workedExample: {
        question: 'A speed is 8.4 m/s to 1 d.p. Write the error interval.',
        steps: [
          'Step 1 — nearest 0.1, half = 0.05',
          'Step 2 — error interval: 8.35 ≤ v < 8.45',
        ],
      },
      sampleAnswer: {
        grade4: "13.65 ≤ v < 13.75",
        grade6: "1 d.p. = nearest 0.1. Half = 0.05. LB = 13.65, UB = 13.75. Interval: 13.65 ≤ v < 13.75.",
        grade8: "13.7 ± 0.05. Error interval: 13.65 ≤ v < 13.75.",
      },
      examinerTip: "To 1 d.p. means rounded to nearest 0.1, so half the unit = 0.05. Don't confuse d.p. with s.f. — 13.7 to 1 d.p. is the hundredths as the boundary.",
      auditStatus: 'pending',
    },
    // ── bnd-B02 ──────────────────────────────────────────────
    {
      id: 'bnd-B02', subtopic: 'num-bounds', band: 'B', marks: 3,
      question: 'a = 6.3 and b = 1.8, both correct to 1 decimal place. Find the upper bound of a × b.',
      steps: [
        {
          prompt: 'Find the upper bound of a.',
          hint1: '6.3 to 1 d.p.: half unit = 0.05.',
          hint2: 'UB(a) = 6.3 + 0.05 = ?',
          hint3: '6.35',
          answer: 6.35, tolerance: 0, unit: '',
          explanation: 'UB(a) = 6.35.',
        },
        {
          prompt: 'Find the upper bound of b.',
          hint1: 'UB(b) = 1.8 + 0.05.',
          hint2: '1.8 + 0.05 = ?',
          hint3: '1.85',
          answer: 1.85, tolerance: 0, unit: '',
          explanation: 'UB(b) = 1.85.',
        },
        {
          prompt: 'Calculate the upper bound of a × b.',
          hint1: 'Maximum product = UB(a) × UB(b).',
          hint2: '6.35 × 1.85 = ?',
          hint3: '11.7475',
          answer: 11.7475, tolerance: 0.0001, unit: '',
          explanation: 'UB(a×b) = 6.35 × 1.85 = 11.7475.',
        },
      ],
      workedExample: {
        question: 'p = 4.2, q = 3.1, both to 1 d.p. Find UB(p × q).',
        steps: [
          'Step 1 — UB(p) = 4.25, UB(q) = 3.15',
          'Step 2 — UB(p×q) = 4.25 × 3.15 = <strong>13.3875</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "11.7475",
        grade6: "UB(a) = 6.35, UB(b) = 1.85. UB(a×b) = 6.35 × 1.85 = 11.7475.",
        grade8: "Max product: UB × UB. 6.35 × 1.85 = 11.7475.",
      },
      examinerTip: "For maximum product: use upper bounds of both values. For minimum product: use lower bounds of both values.",
      auditStatus: 'pending',
    },
    // ── bnd-B03 ──────────────────────────────────────────────
    {
      id: 'bnd-B03', subtopic: 'num-bounds', band: 'B', marks: 3,
      question: 'a = 9.4 and b = 3.2, both correct to 1 decimal place. Find the upper bound of a − b.',
      steps: [
        {
          prompt: 'Find the upper bound of a.',
          hint1: 'UB(a) = 9.4 + 0.05.',
          hint2: '9.4 + 0.05 = ?',
          hint3: '9.45',
          answer: 9.45, tolerance: 0, unit: '',
          explanation: 'UB(a) = 9.45.',
        },
        {
          prompt: 'Find the lower bound of b.',
          hint1: 'LB(b) = 3.2 − 0.05.',
          hint2: '3.2 − 0.05 = ?',
          hint3: '3.15',
          answer: 3.15, tolerance: 0, unit: '',
          explanation: 'LB(b) = 3.15. To maximise a−b, use the smallest possible b.',
        },
        {
          prompt: 'Calculate the upper bound of a − b.',
          hint1: 'UB(a−b) = UB(a) − LB(b).',
          hint2: '9.45 − 3.15 = ?',
          hint3: '6.30',
          answer: 6.30, tolerance: 0.001, unit: '',
          explanation: 'UB(a−b) = 9.45 − 3.15 = 6.30.',
        },
      ],
      workedExample: {
        question: 'x = 7.6, y = 2.4, both to 1 d.p. Find UB(x − y).',
        steps: [
          'Step 1 — UB(x) = 7.65',
          'Step 2 — LB(y) = 2.35',
          'Step 3 — UB(x−y) = 7.65 − 2.35 = <strong>5.30</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "6.30",
        grade6: "UB(a) = 9.45, LB(b) = 3.15. UB(a−b) = 9.45 − 3.15 = 6.30.",
        grade8: "Max(a−b): use UB(a) and LB(b). 9.45 − 3.15 = 6.30.",
      },
      examinerTip: "To maximise a difference (a − b): use the UPPER bound of a and the LOWER bound of b. This is the opposite combination to minimising.",
      auditStatus: 'pending',
    },
    // ── bnd-B04 ──────────────────────────────────────────────
    {
      id: 'bnd-B04', subtopic: 'num-bounds', band: 'B', marks: 3,
      question: 'A rectangle has length l = 12.3 cm and width w = 4.7 cm, both to 1 d.p. Find the upper bound of the perimeter.',
      steps: [
        {
          prompt: 'Find the upper bound of l.',
          hint1: 'UB(l) = 12.3 + 0.05.',
          hint2: '12.3 + 0.05 = ?',
          hint3: '12.35',
          answer: 12.35, tolerance: 0, unit: 'cm',
          explanation: 'UB(l) = 12.35 cm.',
        },
        {
          prompt: 'Find the upper bound of w.',
          hint1: 'UB(w) = 4.7 + 0.05.',
          hint2: '4.7 + 0.05 = ?',
          hint3: '4.75',
          answer: 4.75, tolerance: 0, unit: 'cm',
          explanation: 'UB(w) = 4.75 cm.',
        },
        {
          prompt: 'Calculate the upper bound of the perimeter: 2(l + w).',
          hint1: 'Perimeter = 2(l + w). Use UB for both.',
          hint2: '2 × (12.35 + 4.75) = 2 × 17.10 = ?',
          hint3: '34.20 cm',
          answer: 34.20, tolerance: 0.001, unit: 'cm',
          explanation: 'UB(P) = 2(12.35 + 4.75) = 2 × 17.10 = 34.20 cm.',
        },
      ],
      workedExample: {
        question: 'Rectangle: l = 8.5 cm, w = 3.2 cm, both to 1 d.p. Find UB(perimeter).',
        steps: [
          'Step 1 — UB(l) = 8.55, UB(w) = 3.25',
          'Step 2 — UB(P) = 2(8.55 + 3.25) = 2 × 11.80 = <strong>23.60 cm</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "34.20 cm",
        grade6: "UB(l)=12.35, UB(w)=4.75. UB(P) = 2(12.35+4.75) = 34.20 cm.",
        grade8: "Max perimeter: use UB of both dimensions. 2(12.35+4.75) = 2×17.10 = 34.20 cm.",
      },
      examinerTip: "Perimeter adds lengths, so to maximise, use the upper bound of every length. To minimise, use every lower bound.",
      auditStatus: 'pending',
    },
    // ── bnd-B05 ──────────────────────────────────────────────
    {
      id: 'bnd-B05', subtopic: 'num-bounds', band: 'B', marks: 3,
      question: 'Kinetic energy KE = ½mv². m = 8.5 kg and v = 3.2 m/s, both to 1 d.p. Find the upper bound of KE.',
      steps: [
        {
          prompt: 'Find the upper bound of m and of v.',
          hint1: 'UB(m) = 8.5 + 0.05 = 8.55. UB(v) = 3.2 + 0.05 = 3.25.',
          hint2: 'UB(m) = 8.55, UB(v) = 3.25.',
          hint3: '8.55 and 3.25',
          answer: 8.55, tolerance: 0, unit: 'kg',
          explanation: 'UB(m) = 8.55 kg, UB(v) = 3.25 m/s.',
          displayAnswer: 'UB(m)=8.55, UB(v)=3.25',
        },
        {
          prompt: 'Calculate UB(v²) = 3.25².',
          hint1: '3.25² = 3.25 × 3.25.',
          hint2: '3.25 × 3.25 = ?',
          hint3: '10.5625',
          answer: 10.5625, tolerance: 0.001, unit: '',
          explanation: '3.25² = 10.5625.',
        },
        {
          prompt: 'Calculate UB(KE) = ½ × 8.55 × 10.5625.',
          hint1: '½ × 8.55 × 10.5625 = 4.275 × 10.5625.',
          hint2: '4.275 × 10.5625 = ?',
          hint3: '45.155...',
          answer: 45.155, tolerance: 0.01, unit: 'J',
          explanation: 'UB(KE) = 0.5 × 8.55 × 10.5625 = 45.155 J.',
        },
      ],
      workedExample: {
        question: 'KE = ½mv². m = 5.0 kg, v = 4.0 m/s, both to 1 d.p. Find UB(KE).',
        steps: [
          'Step 1 — UB(m)=5.05, UB(v)=4.05',
          'Step 2 — UB(v²) = 4.05² = 16.4025',
          'Step 3 — UB(KE) = 0.5 × 5.05 × 16.4025 = <strong>41.42 J</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "45.155 J (approx)",
        grade6: "UB(m)=8.55, UB(v)=3.25. v²=10.5625. KE = 0.5×8.55×10.5625 = 45.155 J.",
        grade8: "Max KE: UB(m) and UB(v). ½×8.55×3.25² = ½×8.55×10.5625 = 45.155 J.",
      },
      examinerTip: "For an expression that increases with each variable, use upper bounds throughout. Square the upper bound of v (don't use v² = 10.24 from the rounded value).",
      auditStatus: 'pending',
    },
    // ── bnd-B06 ──────────────────────────────────────────────
    {
      id: 'bnd-B06', subtopic: 'num-bounds', band: 'B', marks: 3,
      question: 'p = 7.4 and q = 2.6, both correct to 1 decimal place. Find the lower bound of p ÷ q. Give your answer to 3 significant figures.',
      steps: [
        {
          prompt: 'Find the lower bound of p.',
          hint1: 'LB(p) = 7.4 − 0.05.',
          hint2: '7.4 − 0.05 = ?',
          hint3: '7.35',
          answer: 7.35, tolerance: 0, unit: '',
          explanation: 'LB(p) = 7.35.',
        },
        {
          prompt: 'Find the upper bound of q.',
          hint1: 'UB(q) = 2.6 + 0.05.',
          hint2: '2.6 + 0.05 = ?',
          hint3: '2.65',
          answer: 2.65, tolerance: 0, unit: '',
          explanation: 'UB(q) = 2.65. To minimise p÷q, use the largest possible q.',
        },
        {
          prompt: 'Calculate LB(p ÷ q) = 7.35 ÷ 2.65. Give to 3 s.f.',
          hint1: '7.35 ÷ 2.65 = ?',
          hint2: '7.35 ÷ 2.65 ≈ 2.7736...',
          hint3: '2.77 (3 s.f.)',
          answer: 2.77, tolerance: 0.005, unit: '',
          explanation: '7.35 ÷ 2.65 = 2.7736... = 2.77 (3 s.f.).',
        },
      ],
      workedExample: {
        question: 'a = 8.2, b = 3.4, both to 1 d.p. Find LB(a ÷ b) to 3 s.f.',
        steps: [
          'Step 1 — LB(a) = 8.15, UB(b) = 3.45',
          'Step 2 — 8.15 ÷ 3.45 = 2.362... = <strong>2.36 (3 s.f.)</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "2.77",
        grade6: "LB(p)=7.35, UB(q)=2.65. LB(p÷q) = 7.35÷2.65 = 2.77 (3 s.f.).",
        grade8: "Min(p/q): LB(p)/UB(q) = 7.35/2.65 = 2.7736... = 2.77 (3 s.f.).",
      },
      examinerTip: "Lower bound of a quotient: use LB(numerator) ÷ UB(denominator). A smaller dividend divided by a larger divisor gives the smallest possible result.",
      auditStatus: 'pending',
    },
    // ── bnd-C02 ──────────────────────────────────────────────
    {
      id: 'bnd-C02', subtopic: 'num-bounds', band: 'C', marks: 4,
      question: 'A = 4.3 and B = 1.2, both correct to 1 decimal place. Find the upper bound of (A + B) ÷ (A − B). Give your answer to 3 significant figures.',
      steps: [
        {
          prompt: 'Find UB(A + B). Use UB(A) + UB(B).',
          hint1: 'UB(A) = 4.35, UB(B) = 1.25.',
          hint2: '4.35 + 1.25 = ?',
          hint3: '5.60',
          answer: 5.60, tolerance: 0.001, unit: '',
          explanation: 'UB(A+B) = 4.35 + 1.25 = 5.60.',
        },
        {
          prompt: 'Find LB(A − B). Use LB(A) − UB(B).',
          hint1: 'LB(A) = 4.25, UB(B) = 1.25.',
          hint2: '4.25 − 1.25 = ?',
          hint3: '3.00',
          answer: 3.00, tolerance: 0.001, unit: '',
          explanation: 'LB(A−B) = 4.25 − 1.25 = 3.00.',
        },
        {
          prompt: 'Divide: 5.60 ÷ 3.00.',
          hint1: '5.60 ÷ 3.00 = ?',
          hint2: '5.60 ÷ 3.00 = 1.8666...',
          hint3: '1.867 (to 3 s.f.)',
          answer: 1.867, tolerance: 0.001, unit: '',
          explanation: '5.60 ÷ 3.00 = 1.8666... ≈ 1.867.',
        },
        {
          prompt: 'Round to 3 significant figures.',
          hint1: '1.8666... → 3rd s.f. is 6. 4th digit = 6 ≥ 5.',
          hint2: 'Round up: 1.87.',
          hint3: '1.87',
          answer: 1.87, tolerance: 0.001, unit: '',
          explanation: '1.8666... → 1.87 (3 s.f.).',
        },
      ],
      workedExample: {
        question: 'C = 6.5, D = 2.1, both to 1 d.p. Find UB of (C+D)/(C−D) to 3 s.f.',
        steps: [
          'Step 1 — UB(C+D) = 6.55 + 2.15 = 8.70',
          'Step 2 — LB(C−D) = 6.45 − 2.15 = 4.30',
          'Step 3 — 8.70 ÷ 4.30 = 2.0232... = <strong>2.02 (3 s.f.)</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "1.87",
        grade6: "UB(A+B)=5.60. LB(A−B)=4.25−1.25=3.00. UB = 5.60÷3.00 = 1.87 (3 s.f.).",
        grade8: "Max quotient: UB(A+B)/LB(A−B). 5.60/3.00 = 1.867 → 1.87 (3 s.f.).",
      },
      examinerTip: "Maximise a fraction: max numerator, min denominator. For subtraction in denominator: use LB(A) − UB(B) to get the smallest possible denominator.",
      auditStatus: 'pending',
    },
    // ── bnd-C03 ──────────────────────────────────────────────
    {
      id: 'bnd-C03', subtopic: 'num-bounds', band: 'C', marks: 4,
      question: 'A triangle has base b = 8.4 cm and height h = 5.8 cm, both to 1 d.p. Find the lower bound of the area. Give your answer to 3 significant figures.',
      steps: [
        {
          prompt: 'Find the lower bound of b.',
          hint1: 'LB(b) = 8.4 − 0.05.',
          hint2: '8.4 − 0.05 = ?',
          hint3: '8.35',
          answer: 8.35, tolerance: 0, unit: 'cm',
          explanation: 'LB(b) = 8.35 cm.',
        },
        {
          prompt: 'Find the lower bound of h.',
          hint1: 'LB(h) = 5.8 − 0.05.',
          hint2: '5.8 − 0.05 = ?',
          hint3: '5.75',
          answer: 5.75, tolerance: 0, unit: 'cm',
          explanation: 'LB(h) = 5.75 cm.',
        },
        {
          prompt: 'Calculate LB(area) = ½ × LB(b) × LB(h).',
          hint1: '½ × 8.35 × 5.75 = ?',
          hint2: '8.35 × 5.75 = 48.0125',
          hint3: '½ × 48.0125 = 24.00625',
          answer: 24.006, tolerance: 0.001, unit: 'cm²',
          explanation: 'LB(area) = ½ × 8.35 × 5.75 = 24.00625 cm².',
        },
        {
          prompt: 'Round to 3 significant figures.',
          hint1: '24.00625 to 3 s.f.',
          hint2: '4th digit = 0 < 5, so round down.',
          hint3: '24.0 cm²',
          answer: 24.0, tolerance: 0.05, unit: 'cm²',
          explanation: '24.00625 → 24.0 (3 s.f.).',
          displayAnswer: '24.0 cm²',
        },
      ],
      workedExample: {
        question: 'Triangle: base 6.2 cm, height 4.8 cm, both to 1 d.p. Find LB(area) to 3 s.f.',
        steps: [
          'Step 1 — LB(b) = 6.15, LB(h) = 4.75',
          'Step 2 — LB(area) = ½ × 6.15 × 4.75 = 14.60625',
          'Step 3 — 3 s.f.: <strong>14.6 cm²</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "24.0 cm²",
        grade6: "LB(b)=8.35, LB(h)=5.75. LB(area) = ½×8.35×5.75 = 24.0 cm² (3 s.f.).",
        grade8: "Min area: ½×LB(b)×LB(h) = ½×8.35×5.75 = 24.00625 → 24.0 cm² (3 s.f.).",
      },
      examinerTip: "For minimum area, use lower bounds of all measurements. Note that 24.0 written to 3 s.f. requires the '.0' — writing just '24' shows only 2 s.f.",
      auditStatus: 'pending',
    },
    // ── bnd-C04 ──────────────────────────────────────────────
    {
      id: 'bnd-C04', subtopic: 'num-bounds', band: 'C', marks: 4,
      question: 'A cylinder has radius r = 3.5 cm and height h = 9.2 cm, both to 1 d.p. Find the upper bound of its volume. Give your answer to 3 significant figures.',
      steps: [
        {
          prompt: 'Find the upper bound of r.',
          hint1: 'UB(r) = 3.5 + 0.05.',
          hint2: '3.5 + 0.05 = ?',
          hint3: '3.55 cm',
          answer: 3.55, tolerance: 0, unit: 'cm',
          explanation: 'UB(r) = 3.55 cm.',
        },
        {
          prompt: 'Calculate UB(r²).',
          hint1: '3.55² = ?',
          hint2: '3.55 × 3.55 = 12.6025',
          hint3: '12.6025',
          answer: 12.6025, tolerance: 0.001, unit: '',
          explanation: 'UB(r)² = 3.55² = 12.6025.',
        },
        {
          prompt: 'Find UB(h) and calculate π × UB(r²) × UB(h).',
          hint1: 'UB(h) = 9.2 + 0.05 = 9.25.',
          hint2: 'V = π × 12.6025 × 9.25 = ?',
          hint3: 'π × 12.6025 × 9.25 ≈ 366.2',
          answer: 366, tolerance: 1, unit: 'cm³',
          explanation: 'UB(V) = π × 12.6025 × 9.25 ≈ 366.2 cm³.',
          displayAnswer: '366 cm³',
        },
      ],
      workedExample: {
        question: 'Cylinder: r = 2.4 cm, h = 7.1 cm, both to 1 d.p. Find UB(volume) to 3 s.f.',
        steps: [
          'Step 1 — UB(r) = 2.45, UB(h) = 7.15',
          'Step 2 — r² = 2.45² = 6.0025',
          'Step 3 — V = π × 6.0025 × 7.15 ≈ 134.7 cm³',
        ],
      },
      sampleAnswer: {
        grade4: "366 cm³",
        grade6: "UB(r)=3.55, UB(h)=9.25. V = π×3.55²×9.25 = π×12.6025×9.25 ≈ 366 cm³.",
        grade8: "UB(V) = π × (3.55)² × 9.25 = π × 12.6025 × 9.25 = 366.2... ≈ 366 cm³ (3 s.f.).",
      },
      examinerTip: "Use π from your calculator (not 3.14). Square UB(r) fully before multiplying by π and UB(h). Round only at the final step.",
      auditStatus: 'pending',
    },

    // ── nrt-A03 ──────────────────────────────────────────────
    {
      id: 'nrt-A03', subtopic: 'num-ratio', band: 'A', marks: 2,
      question: 'Share £150 in the ratio 2 : 3.',
      steps: [
        {
          prompt: 'Find the value of one part.',
          hint1: 'Total parts = 2 + 3 = 5. Divide £150 by 5.',
          hint2: '£150 ÷ 5 = ?',
          hint3: '£30',
          answer: 30, tolerance: 0, unit: '£',
          explanation: 'One part = £150 ÷ 5 = £30.',
        },
        {
          prompt: 'Calculate each share.',
          hint1: 'First share = 2 × £30. Second share = 3 × £30.',
          hint2: '2 × 30 = 60 and 3 × 30 = 90.',
          hint3: '£60 and £90',
          answer: 90, tolerance: 0, unit: '£',
          explanation: 'Shares: 2 × £30 = £60 and 3 × £30 = £90. Check: £60 + £90 = £150. ✓',
          displayAnswer: '£60 and £90',
        },
      ],
      workedExample: {
        question: 'Share £240 in the ratio 1 : 3.',
        steps: [
          'Step 1 — total parts: 1 + 3 = 4. One part = £240 ÷ 4 = £60.',
          'Step 2 — shares: 1×£60 = £60 and 3×£60 = <strong>£180</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: "£60 and £90",
        grade6: "Total parts = 5. One part = £30. Shares: 2×30 = £60 and 3×30 = £90.",
        grade8: "Total parts = 5. Part value = £150/5 = £30. Shares: £60 : £90.",
      },
      examinerTip: "Always check your shares add up to the original total. If they don't, you've made an arithmetic error somewhere.",
      auditStatus: 'pending',
    },
    // ── nrt-A04 ──────────────────────────────────────────────
    {
      id: 'nrt-A04', subtopic: 'num-ratio', band: 'A', marks: 2,
      question: 'Write the ratio 120 cm : 3 m in its simplest form.',
      steps: [
        {
          prompt: 'Convert to the same units.',
          hint1: '3 m = ? cm',
          hint2: '3 m = 300 cm',
          hint3: '120 cm : 300 cm',
          answer: 300, tolerance: 0, unit: 'cm',
          explanation: '3 m = 300 cm. Now both quantities are in centimetres.',
        },
        {
          prompt: 'Simplify 120 : 300 by dividing both by the HCF.',
          hint1: 'HCF(120, 300) = 60.',
          hint2: '120 ÷ 60 = 2, 300 ÷ 60 = 5.',
          hint3: '2 : 5',
          answer: 5, tolerance: 0, unit: '',
          explanation: '120 : 300 ÷ 60 = 2 : 5.',
          displayAnswer: '2 : 5',
        },
      ],
      workedExample: {
        question: 'Write 45 cm : 1.5 m in its simplest form.',
        steps: [
          'Step 1 — convert: 1.5 m = 150 cm. Ratio: 45 : 150.',
          'Step 2 — HCF(45,150) = 15. Simplify: <strong>3 : 10</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: "2 : 5",
        grade6: "3 m = 300 cm. 120 : 300. HCF = 60. Simplify: 2 : 5.",
        grade8: "Convert to same units: 120 cm : 300 cm = 2 : 5 (÷ 60).",
      },
      examinerTip: "Always convert to the SAME units before simplifying a ratio. You cannot simplify 120 cm : 3 m — the units must match first.",
      auditStatus: 'pending',
    },
    // ── nrt-A05 ──────────────────────────────────────────────
    {
      id: 'nrt-A05', subtopic: 'num-ratio', band: 'A', marks: 2,
      question: 'Tom and Lucy share money in the ratio 5 : 3. Tom receives £15 more than Lucy. How much does Tom receive?',
      steps: [
        {
          prompt: 'Find the value of one part.',
          hint1: 'Tom has 5 parts, Lucy has 3 parts. Difference = 5 − 3 = 2 parts.',
          hint2: '2 parts = £15. One part = ?',
          hint3: '£15 ÷ 2 = £7.50',
          answer: 7.50, tolerance: 0, unit: '£',
          explanation: 'Difference = 2 parts = £15. One part = £7.50.',
        },
        {
          prompt: "Calculate Tom's share: 5 parts.",
          hint1: 'Tom = 5 × one part.',
          hint2: '5 × £7.50 = ?',
          hint3: '£37.50',
          answer: 37.50, tolerance: 0, unit: '£',
          explanation: "Tom's share = 5 × £7.50 = £37.50.",
        },
      ],
      workedExample: {
        question: 'Red and blue beads in ratio 7 : 4. Red beads are 18 more than blue. How many red beads?',
        steps: [
          'Step 1 — difference: 7 − 4 = 3 parts = 18 beads. One part = 6.',
          'Step 2 — red: 7 × 6 = <strong>42 beads</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: "£37.50",
        grade6: "Difference = 2 parts = £15. 1 part = £7.50. Tom = 5 × £7.50 = £37.50.",
        grade8: "5:3 → difference = 2 parts = £15 → 1 part = £7.50. Tom: 5 × 7.50 = £37.50.",
      },
      examinerTip: "Find the difference in parts first (5 − 3 = 2), then use the given difference in actual amounts to find one part. This type is often called 'difference ratio' problems.",
      auditStatus: 'pending',
    },
    // ── nrt-B02 ──────────────────────────────────────────────
    {
      id: 'nrt-B02', subtopic: 'num-ratio', band: 'B', marks: 3,
      question: 'Orange juice and lemonade are mixed in the ratio 3 : 7. How much orange juice is needed to make 2.5 litres of the mixture?',
      steps: [
        {
          prompt: 'Find the total number of parts.',
          hint1: '3 + 7 = ?',
          hint2: '3 + 7 = 10 parts',
          hint3: '10 parts total',
          answer: 10, tolerance: 0, unit: '',
          explanation: 'Total parts = 3 + 7 = 10.',
        },
        {
          prompt: 'Find the volume of one part.',
          hint1: '2.5 litres ÷ 10 parts = ?',
          hint2: '2.5 ÷ 10 = 0.25',
          hint3: '0.25 litres per part',
          answer: 0.25, tolerance: 0, unit: 'L',
          explanation: 'One part = 2.5 ÷ 10 = 0.25 litres.',
        },
        {
          prompt: 'Calculate the volume of orange juice: 3 parts.',
          hint1: '3 × 0.25 = ?',
          hint2: '3 × 0.25 = 0.75',
          hint3: '0.75 litres',
          answer: 0.75, tolerance: 0, unit: 'L',
          explanation: 'Orange juice = 3 × 0.25 = 0.75 litres.',
        },
      ],
      workedExample: {
        question: 'Squash and water are mixed in ratio 2 : 9. How much squash in 2.2 litres?',
        steps: [
          'Step 1 — total parts: 2 + 9 = 11.',
          'Step 2 — one part: 2.2 ÷ 11 = 0.2 litres.',
          'Step 3 — squash: 2 × 0.2 = <strong>0.4 litres</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: "0.75 litres",
        grade6: "10 parts total. One part = 2.5 ÷ 10 = 0.25 L. OJ = 3 × 0.25 = 0.75 L.",
        grade8: "3/10 × 2.5 = 0.75 litres of orange juice.",
      },
      examinerTip: "Add the ratio parts to find the total, divide the given amount by the total, then multiply by the relevant part. Always label your answer with units.",
      auditStatus: 'pending',
    },
    // ── nrt-B03 ──────────────────────────────────────────────
    {
      id: 'nrt-B03', subtopic: 'num-ratio', band: 'B', marks: 3,
      question: 'An alloy is made from copper and zinc in the ratio 7 : 3 by mass. How much copper and how much zinc are in 450 g of the alloy?',
      steps: [
        {
          prompt: 'Find the total number of parts.',
          hint1: '7 + 3 = ?',
          hint2: '10 parts total',
          hint3: '10',
          answer: 10, tolerance: 0, unit: '',
          explanation: 'Total = 7 + 3 = 10 parts.',
        },
        {
          prompt: 'Find the mass of copper: 7 parts out of 10.',
          hint1: 'One part = 450 ÷ 10 = 45 g.',
          hint2: 'Copper = 7 × 45 = ?',
          hint3: '315 g',
          answer: 315, tolerance: 0, unit: 'g',
          explanation: 'Copper = 7 × (450/10) = 7 × 45 = 315 g.',
        },
        {
          prompt: 'Find the mass of zinc: 3 parts out of 10.',
          hint1: 'Zinc = 3 × 45 = ?',
          hint2: '3 × 45 = 135',
          hint3: '135 g',
          answer: 135, tolerance: 0, unit: 'g',
          explanation: 'Zinc = 3 × 45 = 135 g. Check: 315 + 135 = 450. ✓',
        },
      ],
      workedExample: {
        question: 'Steel = iron : carbon = 9 : 1. Find iron and carbon in 350 g.',
        steps: [
          'Step 1 — total parts: 10. One part = 35 g.',
          'Step 2 — iron: 9 × 35 = 315 g. Carbon: 1 × 35 = <strong>35 g</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: "315 g copper, 135 g zinc",
        grade6: "10 parts. One part = 45 g. Copper = 7×45 = 315 g. Zinc = 3×45 = 135 g.",
        grade8: "7/10 × 450 = 315 g (Cu); 3/10 × 450 = 135 g (Zn). Check: 315+135=450. ✓",
      },
      examinerTip: "Always verify your answer adds back to the total. If copper + zinc ≠ 450 g, you've made an error.",
      auditStatus: 'pending',
    },
    // ── nrt-B04 ──────────────────────────────────────────────
    {
      id: 'nrt-B04', subtopic: 'num-ratio', band: 'B', marks: 3,
      question: 'A map has scale 1 : 50,000. Two towns are 7.4 cm apart on the map. What is the real distance in kilometres?',
      steps: [
        {
          prompt: 'Convert the map distance to real distance in centimetres.',
          hint1: 'Scale 1 : 50,000 means 1 cm on map = 50,000 cm in reality.',
          hint2: '7.4 cm × 50,000 = ?',
          hint3: '370,000 cm',
          answer: 370000, tolerance: 0, unit: 'cm',
          explanation: '7.4 × 50,000 = 370,000 cm.',
        },
        {
          prompt: 'Convert centimetres to metres.',
          hint1: '100 cm = 1 m. 370,000 ÷ 100 = ?',
          hint2: '370,000 ÷ 100 = 3,700',
          hint3: '3,700 m',
          answer: 3700, tolerance: 0, unit: 'm',
          explanation: '370,000 ÷ 100 = 3,700 m.',
        },
        {
          prompt: 'Convert metres to kilometres.',
          hint1: '1000 m = 1 km. 3,700 ÷ 1000 = ?',
          hint2: '3,700 ÷ 1000 = 3.7',
          hint3: '3.7 km',
          answer: 3.7, tolerance: 0, unit: 'km',
          explanation: '3,700 m = 3.7 km.',
        },
      ],
      workedExample: {
        question: 'Scale 1 : 25,000. Two points 6.4 cm apart on map. Real distance in km?',
        steps: [
          'Step 1 — real cm: 6.4 × 25,000 = 160,000 cm',
          'Step 2 — metres: ÷ 100 = 1,600 m',
          'Step 3 — km: ÷ 1000 = <strong>1.6 km</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "3.7 km",
        grade6: "7.4 × 50,000 = 370,000 cm = 3,700 m = 3.7 km.",
        grade8: "7.4 cm × 50,000 = 370,000 cm. ÷ 100,000 = 3.7 km.",
      },
      examinerTip: "Multiply map distance by the scale factor to get real distance in the same units. Then convert to the required unit. 100,000 cm = 1 km (not 10,000).",
      auditStatus: 'pending',
    },
    // ── nrt-B05 ──────────────────────────────────────────────
    {
      id: 'nrt-B05', subtopic: 'num-ratio', band: 'B', marks: 3,
      question: '£480 is shared between three people in the ratio 1 : 2 : 5. How much does each person receive?',
      steps: [
        {
          prompt: 'Find the total number of parts.',
          hint1: '1 + 2 + 5 = ?',
          hint2: '8 parts total',
          hint3: '8',
          answer: 8, tolerance: 0, unit: '',
          explanation: 'Total = 1 + 2 + 5 = 8 parts.',
        },
        {
          prompt: 'Find the value of one part.',
          hint1: '£480 ÷ 8 = ?',
          hint2: '£480 ÷ 8 = £60',
          hint3: '£60',
          answer: 60, tolerance: 0, unit: '£',
          explanation: 'One part = £480 ÷ 8 = £60.',
        },
        {
          prompt: 'Calculate each share: 1 part, 2 parts, and 5 parts.',
          hint1: '1×£60 = £60. 2×£60 = £120. 5×£60 = ?',
          hint2: '5 × £60 = £300',
          hint3: '£60, £120, £300',
          answer: 300, tolerance: 0, unit: '£',
          explanation: 'Shares: £60, £120, £300. Check: 60+120+300=480. ✓',
          displayAnswer: '£60, £120, £300',
        },
      ],
      workedExample: {
        question: 'Share £360 in the ratio 2 : 3 : 7.',
        steps: [
          'Step 1 — total parts: 2+3+7=12. One part = £30.',
          'Step 2 — shares: £60, £90, <strong>£210</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: "£60, £120, £300",
        grade6: "8 parts total. One part = £60. Shares: £60 : £120 : £300.",
        grade8: "1:2:5 → 8 parts. £480/8 = £60 each part. Shares: £60, £120, £300. Check: 480. ✓",
      },
      examinerTip: "With three-way ratios, the method is identical: add all parts, find one part's value, then multiply each ratio number by the part value.",
      auditStatus: 'pending',
    },
    // ── nrt-B06 ──────────────────────────────────────────────
    {
      id: 'nrt-B06', subtopic: 'num-ratio', band: 'B', marks: 3,
      question: 'A school has 252 students split between Year 10 and Year 11 in the ratio 4 : 3. How many students are in each year?',
      steps: [
        {
          prompt: 'Find the total number of parts.',
          hint1: '4 + 3 = ?',
          hint2: '7 parts total',
          hint3: '7',
          answer: 7, tolerance: 0, unit: '',
          explanation: 'Total = 4 + 3 = 7 parts.',
        },
        {
          prompt: 'Find the number of students per part.',
          hint1: '252 ÷ 7 = ?',
          hint2: '252 ÷ 7 = 36',
          hint3: '36',
          answer: 36, tolerance: 0, unit: '',
          explanation: 'One part = 252 ÷ 7 = 36 students.',
        },
        {
          prompt: 'Calculate Year 10 and Year 11 numbers.',
          hint1: 'Year 10 = 4 × 36. Year 11 = 3 × 36.',
          hint2: '4 × 36 = 144. 3 × 36 = 108.',
          hint3: 'Year 10: 144, Year 11: 108',
          answer: 108, tolerance: 0, unit: '',
          explanation: 'Year 10 = 144, Year 11 = 108. Check: 144 + 108 = 252. ✓',
          displayAnswer: 'Year 10: 144, Year 11: 108',
        },
      ],
      workedExample: {
        question: 'A company has 280 staff split junior : senior = 5 : 3. How many in each group?',
        steps: [
          'Step 1 — total parts: 5+3=8. One part = 35.',
          'Step 2 — junior: 5×35=175. Senior: 3×35=<strong>105</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: "Year 10: 144, Year 11: 108",
        grade6: "7 parts. 252÷7=36. Year 10: 4×36=144. Year 11: 3×36=108.",
        grade8: "4:3 → 7 parts. Part = 36. Year 10=144, Year 11=108. Check: 252. ✓",
      },
      examinerTip: "If 252 didn't divide evenly by the total parts, check the question — ratio problems at GCSE always give exact answers.",
      auditStatus: 'pending',
    },
    // ── nrt-C01 ──────────────────────────────────────────────
    {
      id: 'nrt-C01', subtopic: 'num-ratio', band: 'C', marks: 4,
      question: 'An alloy contains metals X and Y in the ratio 2 : 1 by mass. 35 g of X is replaced by an equal mass of a new metal Z. The new alloy contains X : Y : Z in the ratio 3 : 2 : 1. What was the total mass of the original alloy?',
      steps: [
        {
          prompt: 'In the new alloy, the ratio is 3 : 2 : 1. Z = 35 g. Find the mass of one part in the new alloy.',
          hint1: 'Z corresponds to 1 part. 1 part = 35 g.',
          hint2: '1 part = 35 g.',
          hint3: '35 g per part',
          answer: 35, tolerance: 0, unit: 'g',
          explanation: 'Z = 1 part = 35 g. So one part is 35 g.',
        },
        {
          prompt: 'Find the total mass of the new alloy.',
          hint1: 'New ratio is 3+2+1 = 6 parts.',
          hint2: '6 × 35 = ?',
          hint3: '210 g',
          answer: 210, tolerance: 0, unit: 'g',
          explanation: 'Total in new alloy = 6 × 35 = 210 g.',
        },
        {
          prompt: 'Find the total mass of the original alloy.',
          hint1: 'The total mass stays the same — 35 g of X was replaced by 35 g of Z.',
          hint2: 'Original total = new total = ?',
          hint3: '210 g',
          answer: 210, tolerance: 0, unit: 'g',
          explanation: 'Replacing 35 g of X with 35 g of Z keeps the total mass at 210 g.',
        },
        {
          prompt: 'Verify: in the original alloy (X:Y = 2:1, total 210 g), what was the mass of X?',
          hint1: 'Original: 3 parts total. X = 2/3 × 210 = ?',
          hint2: '2/3 × 210 = 140 g of X originally.',
          hint3: 'After removing 35 g: X = 105 g. New ratio X:Y:Z = 105:70:35 = 3:2:1. ✓',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Original X = 140 g, Y = 70 g. Remove 35 g X: X=105, Y=70, Z=35. Ratio 105:70:35 = 3:2:1. ✓',
          checkType: 'skip',
          displayAnswer: 'Check: 3:2:1 confirmed ✓',
        },
      ],
      workedExample: {
        question: 'Alloy A:B = 3:1. 20 g of A replaced by C. New ratio A:B:C = 2:1:1. Find original total.',
        steps: [
          'Step 1 — new ratio: C = 1 part = 20 g. One part = 20 g.',
          'Step 2 — new total: 4 parts × 20 = 80 g.',
          'Step 3 — original total = 80 g (same mass, X replaced by C).',
        ],
      },
      sampleAnswer: {
        grade4: "210 g",
        grade6: "New ratio 3:2:1; Z=35g=1 part. Total = 6×35=210 g = original total.",
        grade8: "Z=35g=1 part. 6 parts total = 210 g. Original mass unchanged (equal replacement). Verify: orig X=140, Y=70. After swap: 105:70:35=3:2:1. ✓",
      },
      examinerTip: "Equal-mass replacement keeps the total unchanged. Use the known quantity (Z = 35 g) to find the part value in the new ratio, then scale to the total.",
      auditStatus: 'pending',
    },
    // ── nrt-C02 ──────────────────────────────────────────────
    {
      id: 'nrt-C02', subtopic: 'num-ratio', band: 'C', marks: 4,
      question: 'Students in Year 10, Year 11 and Year 12 are in the ratio 5 : 4 : 3. Year 10 has 48 more students than Year 12. Find the total number of students.',
      steps: [
        {
          prompt: 'Find the difference in parts between Year 10 and Year 12.',
          hint1: 'Year 10 = 5 parts, Year 12 = 3 parts. Difference = ?',
          hint2: '5 − 3 = 2 parts',
          hint3: '2 parts difference',
          answer: 2, tolerance: 0, unit: '',
          explanation: '5 − 3 = 2 parts represent the difference.',
        },
        {
          prompt: 'Find the value of one part.',
          hint1: '2 parts = 48 students. 1 part = ?',
          hint2: '48 ÷ 2 = 24',
          hint3: '24 students per part',
          answer: 24, tolerance: 0, unit: '',
          explanation: '1 part = 48 ÷ 2 = 24 students.',
        },
        {
          prompt: 'Find Year 10 and Year 11 student numbers.',
          hint1: 'Year 10 = 5 × 24 = 120. Year 11 = 4 × 24 = 96.',
          hint2: 'Year 12 = 3 × 24 = 72.',
          hint3: '120 + 96 + 72',
          answer: 96, tolerance: 0, unit: '',
          explanation: 'Year 10=120, Year 11=96, Year 12=72.',
          displayAnswer: '120, 96, 72',
        },
        {
          prompt: 'Find the total number of students.',
          hint1: '120 + 96 + 72 = ?',
          hint2: '120 + 96 + 72 = 288',
          hint3: '288',
          answer: 288, tolerance: 0, unit: '',
          explanation: 'Total = 120 + 96 + 72 = 288 students.',
        },
      ],
      workedExample: {
        question: 'A:B:C = 4:3:1. A has 18 more than C. Find the total.',
        steps: [
          'Step 1 — difference: 4−1=3 parts = 18. One part = 6.',
          'Step 2 — totals: A=24, B=18, C=6.',
          'Step 3 — total: 24+18+6 = <strong>48</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: "288",
        grade6: "5−3=2 parts=48. One part=24. Yr10=120, Yr11=96, Yr12=72. Total=288.",
        grade8: "Diff = 2 parts = 48 → 1 part = 24. Total = (5+4+3)×24 = 12×24 = 288.",
      },
      examinerTip: "Use the difference in ratio parts to find the value of one part. A shortcut: total parts × one part = total (here 12 × 24 = 288).",
      auditStatus: 'pending',
    },
    // ── nrt-C03 ──────────────────────────────────────────────
    {
      id: 'nrt-C03', subtopic: 'num-ratio', band: 'C', marks: 4,
      question: 'The exchange rate is £1 = 1.18 euros. Ali changes £350 into euros. He spends 285 euros on holiday. He changes the remaining euros back to pounds at the same rate. How many pounds does he get back? Give your answer to the nearest penny.',
      steps: [
        {
          prompt: 'Convert £350 to euros.',
          hint1: '£1 = 1.18 euros. £350 × 1.18 = ?',
          hint2: '350 × 1.18 = ?',
          hint3: '413 euros',
          answer: 413, tolerance: 0, unit: 'euros',
          explanation: '£350 × 1.18 = 413 euros.',
        },
        {
          prompt: 'Find the euros remaining after spending 285 euros.',
          hint1: '413 − 285 = ?',
          hint2: '413 − 285 = 128',
          hint3: '128 euros',
          answer: 128, tolerance: 0, unit: 'euros',
          explanation: '413 − 285 = 128 euros remaining.',
        },
        {
          prompt: 'Convert 128 euros back to pounds.',
          hint1: '£1 = 1.18 euros. So 1 euro = £(1 ÷ 1.18).',
          hint2: '128 ÷ 1.18 = ?',
          hint3: '128 ÷ 1.18 ≈ 108.47',
          answer: 108.47, tolerance: 0.01, unit: '£',
          explanation: '128 ÷ 1.18 = £108.4745... ≈ £108.47.',
        },
      ],
      workedExample: {
        question: '£1 = 1.25 USD. Change £200 to USD, spend $140, change rest back to £. How much?',
        steps: [
          'Step 1 — £200 × 1.25 = $250',
          'Step 2 — remaining: $250 − $140 = $110',
          'Step 3 — back to £: $110 ÷ 1.25 = <strong>£88</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "£108.47",
        grade6: "£350 × 1.18 = 413 euros. Spend 285: left 128 euros. 128 ÷ 1.18 = £108.47.",
        grade8: "413 − 285 = 128 euros. To convert back: 128 ÷ 1.18 = 108.474... = £108.47.",
      },
      examinerTip: "To convert FROM euros TO pounds, DIVIDE by the exchange rate (not multiply). Multiplying by the rate goes pounds → euros; dividing goes euros → pounds.",
      auditStatus: 'pending',
    },
    // ── nrt-C04 ──────────────────────────────────────────────
    {
      id: 'nrt-C04', subtopic: 'num-ratio', band: 'C', marks: 4,
      question: 'A recipe for 8 people requires 320 g of butter. Ben wants to make the recipe for 14 people. He has 480 g of butter. Does he have enough? Show your working.',
      steps: [
        {
          prompt: 'Find the amount of butter needed for 14 people.',
          hint1: 'Scale up from 8 to 14 people.',
          hint2: '320 g ÷ 8 × 14 = ?',
          hint3: '320 × 14/8 = 560 g',
          answer: 560, tolerance: 0, unit: 'g',
          explanation: '320 ÷ 8 × 14 = 40 × 14 = 560 g needed.',
        },
        {
          prompt: 'Compare with what Ben has.',
          hint1: 'Ben has 480 g. He needs 560 g.',
          hint2: '480 < 560.',
          hint3: 'No, he does not have enough.',
          answer: 0, tolerance: 0, unit: '',
          explanation: '480 g < 560 g needed. Ben does NOT have enough butter.',
          checkType: 'skip',
          displayAnswer: 'No — needs 560 g, has 480 g',
        },
        {
          prompt: 'How many people could Ben actually serve with 480 g?',
          hint1: '40 g per person (320 ÷ 8). 480 ÷ 40 = ?',
          hint2: '480 ÷ 40 = 12',
          hint3: '12 people',
          answer: 12, tolerance: 0, unit: '',
          explanation: '480 ÷ 40 = 12. Ben can make the recipe for 12 people.',
        },
        {
          prompt: 'State the conclusion clearly.',
          hint1: 'He needs 560 g but has 480 g — short by 80 g.',
          hint2: 'No, he does not have enough. He is 80 g short.',
          hint3: 'He can only make it for 12 people, not 14.',
          answer: 80, tolerance: 0, unit: 'g',
          explanation: 'Shortfall = 560 − 480 = 80 g. He can only serve 12 people.',
          displayAnswer: 'No — 80 g short. Can serve 12 people.',
        },
      ],
      workedExample: {
        question: 'Recipe for 6 needs 240 g flour. Make for 10 people; have 420 g. Enough?',
        steps: [
          'Step 1 — needed: 240/6 × 10 = 400 g.',
          'Step 2 — have: 420 g > 400 g needed.',
          'Step 3 — yes, 20 g to spare.',
        ],
      },
      sampleAnswer: {
        grade4: "No, he needs 560 g but has 480 g.",
        grade6: "Per person: 320÷8=40 g. For 14: 40×14=560 g. Ben has 480 g < 560 g. No, 80 g short.",
        grade8: "Need: 320×14/8 = 560 g. Have: 480 g. Shortfall: 80 g. Ben can only serve 480÷40=12 people.",
      },
      examinerTip: "Always state a clear conclusion: 'Yes, he has enough' or 'No, he does not have enough'. Without a comparison and conclusion you won't get full marks.",
      auditStatus: 'pending',
    },

  ];

  // Merge both banks
  const _allBank = _bank.concat(_bank2);

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
    let pool = _allBank.filter(q =>
      q.subtopic === subtopicId && !excludeIds.includes(q.id)
    );
    if (band) pool = pool.filter(q => q.band === band);

    // Fallback: any band if filtered pool is empty
    if (!pool.length) {
      pool = _allBank.filter(q =>
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
      const pool = _allBank.filter(q =>
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
    return _allBank.some(q => q.subtopic === subtopicId);
  }

  return { getQuestion, getTestQuestions, hasQuestions };

})();
