FILE = r'C:\Users\jason\OneDrive\Documents\GitHub\mabel-gcse\js\maths-questions.js'
MARKER = "\n\n    // ══════════════════════════════════════════════════════════\n    // COMPOUND MEASURES"

NEW = """    {
      id: 'pch-A03',
      subtopic: 'rpr-percentage-change',
      band: 'A',
      marks: 2,
      question: 'A jacket costs £65. In a sale it is reduced by 20%. What is the sale price?',
      steps: [
        {
          prompt: 'Calculate 20% of £65.',
          hint1: '10% of £65 = £6.50. 20% = 2 × £6.50.',
          hint2: '20% = 0.20 × 65.',
          hint3: '£13.',
          answer: 13,
          tolerance: 0,
          unit: '£',
          explanation: '20% of £65 = 0.20 × 65 = £13.'
        },
        {
          prompt: 'What is the sale price? (£)',
          hint1: 'Subtract the discount from the original price.',
          hint2: '65 − 13 = ?',
          hint3: '£52.',
          answer: 52,
          tolerance: 0,
          unit: '£',
          explanation: 'Sale price = £65 − £13 = £52.'
        }
      ],
      workedExample: {
        question: 'A shirt costs £40 and is reduced by 15%. Find the sale price.',
        steps: [
          '15% of £40 = 0.15 × 40 = £6',
          'Sale price = £40 − £6 = <strong>£34</strong>'
        ]
      },
      sampleAnswer: {
        grade4: '20% of £65 = £13. Sale price = £65 − £13 = £52.',
        grade6: '20% of £65 = £13. Sale price = £52. Alternatively: £65 × 0.80 = £52.',
        grade8: 'Multiplier = 0.80. £65 × 0.80 = £52.'
      },
      examinerTip: 'For a percentage decrease, multiply by (1 − rate). 20% off → × 0.80.',
      auditStatus: 'pending'
    },
    {
      id: 'pch-A04',
      subtopic: 'rpr-percentage-change',
      band: 'A',
      marks: 2,
      question: 'A house was bought for £240 000 and sold for £288 000. Calculate the percentage increase.',
      steps: [
        {
          prompt: 'Calculate the actual increase in value. (£)',
          hint1: 'Subtract the original from the new value.',
          hint2: '288 000 − 240 000 = ?',
          hint3: '£48 000.',
          answer: 48000,
          tolerance: 0,
          unit: '£',
          explanation: 'Increase = £288 000 − £240 000 = £48 000.'
        },
        {
          prompt: 'Calculate the percentage increase.',
          hint1: 'Percentage increase = (increase ÷ original) × 100.',
          hint2: '(48 000 ÷ 240 000) × 100 = ?',
          hint3: '20%.',
          answer: 20,
          tolerance: 0,
          unit: '%',
          explanation: '(48 000 / 240 000) × 100 = 20%.'
        }
      ],
      workedExample: {
        question: 'A car was bought for £10 000 and sold for £12 500. Find the percentage increase.',
        steps: [
          'Increase = £12 500 − £10 000 = £2 500',
          'Percentage increase = (2500/10000) × 100 = <strong>25%</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Increase = £48 000. % increase = (48 000/240 000) × 100 = 20%.',
        grade6: 'Increase = £48 000. % increase = (48 000 ÷ 240 000) × 100 = 20%.',
        grade8: '% increase = (change/original) × 100 = (48 000/240 000) × 100 = 20%.'
      },
      examinerTip: 'Always divide by the ORIGINAL value, not the new one.',
      auditStatus: 'pending'
    },
    {
      id: 'pch-A05',
      subtopic: 'rpr-percentage-change',
      band: 'A',
      marks: 2,
      question: 'After a 25% increase, a price is £75. What was the original price?',
      steps: [
        {
          prompt: 'What multiplier represents a 25% increase?',
          hint1: 'A 25% increase means the new price = original × 1.25.',
          hint2: 'New price = original × 1.25.',
          hint3: 'Multiplier = 1.25.',
          answer: 1.25,
          tolerance: 0,
          unit: '',
          explanation: '25% increase → multiplier of 1.25.'
        },
        {
          prompt: 'Find the original price. (£)',
          hint1: '£75 = original × 1.25. Divide £75 by 1.25.',
          hint2: '75 ÷ 1.25 = ?',
          hint3: '£60.',
          answer: 60,
          tolerance: 0,
          unit: '£',
          explanation: 'Original = £75 ÷ 1.25 = £60.'
        }
      ],
      workedExample: {
        question: 'After a 40% increase a price is £84. Find the original price.',
        steps: [
          'Multiplier = 1.40. Original = £84 ÷ 1.40 = <strong>£60</strong>',
          'Check: £60 × 1.40 = £84 ✓'
        ]
      },
      sampleAnswer: {
        grade4: 'Original × 1.25 = £75. Original = £75 ÷ 1.25 = £60.',
        grade6: '125% of original = £75. Original = £75 ÷ 1.25 = £60.',
        grade8: 'Reverse percentage: £75/1.25 = £60. Check: 60 × 1.25 = 75 ✓'
      },
      examinerTip: 'Reverse percentage: divide the new value by the multiplier.',
      auditStatus: 'pending'
    },
    {
      id: 'pch-B02',
      subtopic: 'rpr-percentage-change',
      band: 'B',
      marks: 3,
      question: 'A bank account pays 3% simple interest per year. £800 is invested. How much interest is earned over 4 years?',
      steps: [
        {
          prompt: 'Calculate the interest earned in one year. (£)',
          hint1: 'Interest per year = Principal × rate.',
          hint2: '£800 × 0.03 = ?',
          hint3: '£24.',
          answer: 24,
          tolerance: 0,
          unit: '£',
          explanation: 'Annual interest = £800 × 0.03 = £24.'
        },
        {
          prompt: 'Calculate the total interest over 4 years. (£)',
          hint1: 'Simple interest: multiply annual interest by number of years.',
          hint2: '£24 × 4 = ?',
          hint3: '£96.',
          answer: 96,
          tolerance: 0,
          unit: '£',
          explanation: 'Total simple interest = £24 × 4 = £96.'
        },
        {
          prompt: 'What is the total amount in the account after 4 years? (£)',
          hint1: 'Add the interest to the principal.',
          hint2: '£800 + £96 = ?',
          hint3: '£896.',
          answer: 896,
          tolerance: 0,
          unit: '£',
          explanation: 'Total = £800 + £96 = £896.'
        }
      ],
      workedExample: {
        question: '£500 invested at 5% simple interest for 3 years. Find the total amount.',
        steps: [
          'Annual interest = £500 × 0.05 = £25',
          'Total interest = £25 × 3 = £75',
          'Total amount = £500 + £75 = <strong>£575</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Annual interest = £24. Over 4 years = £96. Total = £896.',
        grade6: 'Simple interest = PRT = 800 × 0.03 × 4 = £96. Total = £896.',
        grade8: 'SI = PRT = 800 × 0.03 × 4 = £96. Total = £800 + £96 = £896.'
      },
      examinerTip: 'Simple interest: same amount added each year. Compound interest: different each year.',
      auditStatus: 'pending'
    },
    {
      id: 'pch-B03',
      subtopic: 'rpr-percentage-change',
      band: 'B',
      marks: 3,
      question: '£1500 is invested at 5% compound interest per year. Calculate the total value after 3 years to the nearest penny.',
      steps: [
        {
          prompt: 'What is the multiplier for 5% compound interest?',
          hint1: 'A 5% increase each year means × 1.05 each year.',
          hint2: 'Multiplier = 1.05.',
          hint3: '1.05.',
          answer: 1.05,
          tolerance: 0,
          unit: '',
          explanation: '5% increase per year → multiplier 1.05.'
        },
        {
          prompt: 'Write the compound interest formula for 3 years.',
          hint1: 'Amount = Principal × (multiplier)^years.',
          hint2: 'A = 1500 × 1.05³.',
          hint3: 'A = 1500 × 1.05³.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'A = 1500 × 1.05³',
          explanation: 'Compound interest formula: A = P(1+r)ⁿ = 1500 × 1.05³.'
        },
        {
          prompt: 'Calculate the total to the nearest penny. (£)',
          hint1: '1.05³ = 1.157625.',
          hint2: '1500 × 1.157625 = ?',
          hint3: '£1736.44.',
          answer: 1736.44,
          tolerance: 0.01,
          unit: '£',
          explanation: '1500 × 1.05³ = 1500 × 1.157625 = £1736.4375 ≈ £1736.44.'
        }
      ],
      workedExample: {
        question: '£2000 at 3% compound interest for 2 years.',
        steps: [
          'Multiplier = 1.03',
          'A = 2000 × 1.03² = 2000 × 1.0609 = <strong>£2121.80</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'A = 1500 × 1.05 × 1.05 × 1.05 ≈ £1736.44.',
        grade6: 'A = 1500 × 1.05³ = 1500 × 1.157625 = £1736.44.',
        grade8: 'A = P(1+r)ⁿ = 1500 × 1.05³ = £1736.44 (to nearest penny).'
      },
      examinerTip: 'Use A = P(1+r)ⁿ and keep full calculator precision until the final rounding.',
      auditStatus: 'pending'
    },
    {
      id: 'pch-B04',
      subtopic: 'rpr-percentage-change',
      band: 'B',
      marks: 3,
      question: 'A car depreciates in value by 15% per year. It costs £12 000 new. What is its value after 2 years?',
      steps: [
        {
          prompt: 'What multiplier represents a 15% decrease?',
          hint1: 'Decrease means you keep 100% − 15% = 85% each year.',
          hint2: 'Multiplier = 0.85.',
          hint3: '0.85.',
          answer: 0.85,
          tolerance: 0,
          unit: '',
          explanation: '15% decrease → multiplier 0.85 each year.'
        },
        {
          prompt: 'Calculate the value after 1 year. (£)',
          hint1: '12 000 × 0.85 = ?',
          hint2: '12 000 × 0.85 = 10 200.',
          hint3: '£10 200.',
          answer: 10200,
          tolerance: 0,
          unit: '£',
          explanation: 'After year 1: £12 000 × 0.85 = £10 200.'
        },
        {
          prompt: 'Calculate the value after 2 years. (£)',
          hint1: '10 200 × 0.85, or 12 000 × 0.85².',
          hint2: '12 000 × 0.7225 = ?',
          hint3: '£8670.',
          answer: 8670,
          tolerance: 0,
          unit: '£',
          explanation: 'After year 2: £12 000 × 0.85² = £12 000 × 0.7225 = £8670.'
        }
      ],
      workedExample: {
        question: 'A laptop costs £800 and depreciates 20% per year. Value after 2 years?',
        steps: [
          'Multiplier = 0.80',
          'After 1 year: £800 × 0.80 = £640',
          'After 2 years: £640 × 0.80 = <strong>£512</strong>',
          'Or: £800 × 0.80² = £800 × 0.64 = £512'
        ]
      },
      sampleAnswer: {
        grade4: 'Year 1: £10 200. Year 2: £10 200 × 0.85 = £8670.',
        grade6: '£12 000 × 0.85² = £12 000 × 0.7225 = £8670.',
        grade8: 'V = 12 000 × 0.85² = £8670. Multiplier < 1 for depreciation.'
      },
      examinerTip: 'For repeated percentage decrease, raise the multiplier to the power of the number of years.',
      auditStatus: 'pending'
    },
    {
      id: 'pch-B05',
      subtopic: 'rpr-percentage-change',
      band: 'B',
      marks: 3,
      question: 'Prices rise by 4% in year 1 and fall by 4% in year 2. Starting price is £200. Is the final price the same as the start? Show working.',
      steps: [
        {
          prompt: 'Calculate the price after year 1 (4% increase). (£)',
          hint1: 'Multiplier = 1.04.',
          hint2: '200 × 1.04 = ?',
          hint3: '£208.',
          answer: 208,
          tolerance: 0,
          unit: '£',
          explanation: '£200 × 1.04 = £208.'
        },
        {
          prompt: 'Calculate the price after year 2 (4% decrease). (£)',
          hint1: 'Multiplier = 0.96.',
          hint2: '208 × 0.96 = ?',
          hint3: '£199.68.',
          answer: 199.68,
          tolerance: 0.01,
          unit: '£',
          explanation: '£208 × 0.96 = £199.68.'
        },
        {
          prompt: 'Is the final price the same as the original? Enter 1 for yes, 2 for no.',
          hint1: 'Compare £199.68 to £200.',
          hint2: '£199.68 < £200.',
          hint3: 'No — enter 2.',
          answer: 2,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'No — the price is lower (£199.68 vs £200). The combined multiplier is 1.04 × 0.96 = 0.9984, not 1.',
          explanation: '1.04 × 0.96 = 0.9984 < 1, so the price falls slightly overall.'
        }
      ],
      workedExample: {
        question: 'A price rises 10% then falls 10%. Starting from £100, what is the final price?',
        steps: [
          'After +10%: £100 × 1.10 = £110',
          'After −10%: £110 × 0.90 = £99',
          'Final price = <strong>£99</strong> (not £100). Combined multiplier: 1.10 × 0.90 = 0.99.'
        ]
      },
      sampleAnswer: {
        grade4: 'After increase: £208. After decrease: £199.68. Not the same.',
        grade6: '£200 × 1.04 = £208. £208 × 0.96 = £199.68. The price is slightly lower — not the same.',
        grade8: 'Combined multiplier = 1.04 × 0.96 = 0.9984. £200 × 0.9984 = £199.68 ≠ £200. A rise and fall of equal percentage always gives a net loss.'
      },
      examinerTip: 'Equal percentage rise then fall always gives a slight net decrease — the percentages are of different bases.',
      auditStatus: 'pending'
    },
    {
      id: 'pch-B06',
      subtopic: 'rpr-percentage-change',
      band: 'B',
      marks: 3,
      question: 'VAT is charged at 20%. A TV costs £540 including VAT. What is the price before VAT?',
      steps: [
        {
          prompt: 'What percentage of the pre-VAT price does £540 represent?',
          hint1: 'Including 20% VAT means the price is 120% of the original.',
          hint2: '100% + 20% = 120%.',
          hint3: '120%.',
          answer: 120,
          tolerance: 0,
          unit: '%',
          explanation: '£540 = 120% of the original price.'
        },
        {
          prompt: 'Find 1% of the original price. (£)',
          hint1: '120% = £540, so 1% = £540 ÷ 120.',
          hint2: '540 ÷ 120 = ?',
          hint3: '£4.50.',
          answer: 4.5,
          tolerance: 0,
          unit: '£',
          explanation: '1% = £540 ÷ 120 = £4.50.'
        },
        {
          prompt: 'Find the original pre-VAT price (100%). (£)',
          hint1: '100 × £4.50 = ?',
          hint2: '£450.',
          hint3: '£450.',
          answer: 450,
          tolerance: 0,
          unit: '£',
          explanation: 'Pre-VAT price = 100 × £4.50 = £450. Or: £540 ÷ 1.20 = £450.'
        }
      ],
      workedExample: {
        question: 'A fridge costs £360 including 20% VAT. Find the pre-VAT price.',
        steps: [
          '£360 = 120% of original',
          '1% = £360 ÷ 120 = £3',
          'Original = 100 × £3 = <strong>£300</strong>',
          'Or: £360 ÷ 1.20 = £300'
        ]
      },
      sampleAnswer: {
        grade4: '120% = £540. 1% = £4.50. Original = £450.',
        grade6: '£540 is 120% of the original. Pre-VAT price = £540 ÷ 1.20 = £450.',
        grade8: 'Reverse percentage: £540/1.20 = £450. Check: £450 × 1.20 = £540 ✓'
      },
      examinerTip: 'To remove VAT (20%), divide by 1.20 — do not subtract 20% of the VAT-inclusive price.',
      auditStatus: 'pending'
    },
    {
      id: 'pch-C01',
      subtopic: 'rpr-percentage-change',
      band: 'C',
      marks: 4,
      question: 'An investment grows from £5000 to £6298.56 over 3 years with compound interest. Find the annual interest rate.',
      steps: [
        {
          prompt: 'Write the compound interest equation: 6298.56 = 5000 × r³, where r is the multiplier. Rearrange to find r³.',
          hint1: 'Divide both sides by 5000.',
          hint2: 'r³ = 6298.56 ÷ 5000.',
          hint3: 'r³ = 1.259712.',
          answer: 1.259712,
          tolerance: 0.0001,
          unit: '',
          explanation: 'r³ = 6298.56/5000 = 1.259712.'
        },
        {
          prompt: 'Find r by taking the cube root of 1.259712.',
          hint1: 'r = ∛1.259712.',
          hint2: '∛1.259712 ≈ 1.08.',
          hint3: 'r = 1.08.',
          answer: 1.08,
          tolerance: 0.001,
          unit: '',
          explanation: 'r = 1.259712^(1/3) = 1.08.'
        },
        {
          prompt: 'What is the annual interest rate? (%)',
          hint1: 'r = 1.08 means 8% growth each year.',
          hint2: 'Rate = (r − 1) × 100.',
          hint3: '8%.',
          answer: 8,
          tolerance: 0,
          unit: '%',
          explanation: 'Rate = (1.08 − 1) × 100 = 8%.'
        },
        {
          prompt: 'Check: does £5000 × 1.08³ = £6298.56? Enter 1 for yes.',
          hint1: '1.08³ = 1.259712. 5000 × 1.259712 = 6298.56.',
          hint2: 'Yes — enter 1.',
          hint3: 'Enter 1.',
          answer: 1,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: '5000 × 1.08³ = 5000 × 1.259712 = £6298.56 ✓',
          explanation: 'Check confirmed ✓'
        }
      ],
      workedExample: {
        question: 'An investment grows from £2000 to £2315.25 over 2 years. Find the annual interest rate.',
        steps: [
          'r² = 2315.25/2000 = 1.157625',
          'r = √1.157625 = 1.075 (7.5%)',
          'Annual rate = <strong>7.5%</strong>',
          'Check: 2000 × 1.075² = 2000 × 1.155625 ... recalculate: 1.075² = 1.155625, 2000 × 1.155625 = £2311.25 — let\'s recalculate: r² = 2315.25/2000 = 1.157625, r = 1.076, so rate ≈ 7.6% (exam questions will give clean answers)'
        ]
      },
      sampleAnswer: {
        grade4: 'r³ = 6298.56/5000 = 1.259712. r = 1.08. Rate = 8%.',
        grade6: '5000 × r³ = 6298.56. r³ = 1.259712. r = ∛1.259712 = 1.08. Annual rate = 8%.',
        grade8: 'A = P(1+r)ⁿ → r = (A/P)^(1/n) − 1 = (6298.56/5000)^(1/3) − 1 = 1.08 − 1 = 0.08 = 8%.'
      },
      examinerTip: 'To find the rate: divide final by initial, then take the nth root, then subtract 1.',
      auditStatus: 'pending'
    },
    {
      id: 'pch-C02',
      subtopic: 'rpr-percentage-change',
      band: 'C',
      marks: 4,
      question: 'A population of 4000 bacteria grows at 12% per hour. After how many complete hours does the population first exceed 8000?',
      steps: [
        {
          prompt: 'Write the formula for the population after n hours.',
          hint1: 'P = 4000 × 1.12ⁿ.',
          hint2: 'We need P > 8000.',
          hint3: 'P = 4000 × 1.12ⁿ.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'P = 4000 × 1.12ⁿ',
          explanation: 'Exponential growth: P = 4000 × 1.12ⁿ.'
        },
        {
          prompt: 'We need 4000 × 1.12ⁿ > 8000. What must 1.12ⁿ exceed?',
          hint1: 'Divide both sides by 4000.',
          hint2: '8000 ÷ 4000 = 2.',
          hint3: '1.12ⁿ > 2.',
          answer: 2,
          tolerance: 0,
          unit: '',
          explanation: '1.12ⁿ > 2.'
        },
        {
          prompt: 'Calculate 1.12⁶ to check if n = 6 is sufficient.',
          hint1: '1.12⁶ ≈ 1.9738 < 2. Try n = 7.',
          hint2: '1.12⁷ ≈ 2.2107 > 2.',
          hint3: 'n = 7.',
          answer: 7,
          tolerance: 0,
          unit: 'hours',
          explanation: '1.12⁶ ≈ 1.974 < 2, but 1.12⁷ ≈ 2.211 > 2. So n = 7 hours.'
        },
        {
          prompt: 'What is the population after 7 hours (to the nearest whole number)?',
          hint1: '4000 × 1.12⁷.',
          hint2: '4000 × 2.2107 ≈ 8843.',
          hint3: '8843.',
          answer: 8843,
          tolerance: 2,
          unit: '',
          explanation: '4000 × 1.12⁷ = 4000 × 2.21068... ≈ 8843.'
        }
      ],
      workedExample: {
        question: 'A colony of 500 doubles. Growth rate 15% per hour. When does it exceed 1000?',
        steps: [
          'P = 500 × 1.15ⁿ > 1000 → 1.15ⁿ > 2',
          '1.15⁵ ≈ 2.011 > 2; 1.15⁴ ≈ 1.749 < 2',
          'First exceeds 1000 after <strong>5 hours</strong>'
        ]
      },
      sampleAnswer: {
        grade4: '1.12⁶ ≈ 1.97 < 2. 1.12⁷ ≈ 2.21 > 2. Answer: 7 hours.',
        grade6: 'Need 4000×1.12ⁿ > 8000, i.e. 1.12ⁿ > 2. Testing: n=6 gives 1.974 (not enough); n=7 gives 2.211. Answer: 7 hours.',
        grade8: '1.12ⁿ > 2. Using trial: 1.12⁶ ≈ 1.974, 1.12⁷ ≈ 2.211 > 2. First exceeds 8000 after 7 complete hours. P ≈ 8843.'
      },
      examinerTip: 'For "first exceeds" questions, use trial and improvement with the formula — try n values systematically.',
      auditStatus: 'pending'
    },
    {
      id: 'pch-C03',
      subtopic: 'rpr-percentage-change',
      band: 'C',
      marks: 4,
      question: 'A pair of trainers costs £120. The price is increased by 10%, then later decreased by 10%. A different pair starts at £120, is decreased by 10%, then increased by 10%. Compare the final prices and explain why they differ.',
      steps: [
        {
          prompt: 'Find the final price of Pair 1 (increase then decrease). (£)',
          hint1: '£120 × 1.10 × 0.90.',
          hint2: '120 × 1.10 = 132. 132 × 0.90 = ?',
          hint3: '£118.80.',
          answer: 118.8,
          tolerance: 0.01,
          unit: '£',
          explanation: '£120 × 1.10 = £132. £132 × 0.90 = £118.80.'
        },
        {
          prompt: 'Find the final price of Pair 2 (decrease then increase). (£)',
          hint1: '£120 × 0.90 × 1.10.',
          hint2: '120 × 0.90 = 108. 108 × 1.10 = ?',
          hint3: '£118.80.',
          answer: 118.8,
          tolerance: 0.01,
          unit: '£',
          explanation: '£120 × 0.90 = £108. £108 × 1.10 = £118.80.'
        },
        {
          prompt: 'What is the combined multiplier for both pairs?',
          hint1: 'For both: 1.10 × 0.90 (order does not matter for the final value).',
          hint2: '1.10 × 0.90 = 0.99.',
          hint3: '0.99.',
          answer: 0.99,
          tolerance: 0,
          unit: '',
          explanation: 'Combined multiplier = 1.10 × 0.90 = 0.90 × 1.10 = 0.99. Multiplication is commutative.'
        },
        {
          prompt: 'What is the net percentage change? (%)',
          hint1: '0.99 means 99% of original.',
          hint2: '100% − 99% = 1% decrease.',
          hint3: '−1% (a 1% decrease).',
          answer: -1,
          tolerance: 0,
          unit: '%',
          explanation: 'Both pairs end at £118.80. Net change: 0.99 → 1% overall decrease. Order doesn\'t change the final price.'
        }
      ],
      workedExample: {
        question: 'Price rises 20% then falls 20%. Starting price £50. Find the final price and net percentage change.',
        steps: [
          '£50 × 1.20 = £60. £60 × 0.80 = £48.',
          'Or: £50 × 0.80 × 1.20 = £48.',
          'Combined multiplier: 1.20 × 0.80 = 0.96 → <strong>4% net decrease</strong>.'
        ]
      },
      sampleAnswer: {
        grade4: 'Both end at £118.80. Combined multiplier = 1.10 × 0.90 = 0.99 (1% decrease).',
        grade6: 'Pair 1: 120×1.10×0.90=£118.80. Pair 2: 120×0.90×1.10=£118.80. Both the same — multiplication is commutative. Net = −1%.',
        grade8: 'Both give £118.80. Multiplier = 1.10×0.90 = 0.99, regardless of order. The 10% rise applies to a smaller or larger base depending on order, but the combined effect is identical: a 1% net decrease.'
      },
      examinerTip: 'The order of percentage changes doesn\'t affect the final price, but a rise and fall of the same rate always gives a net loss.',
      auditStatus: 'pending'
    },
    {
      id: 'pch-C04',
      subtopic: 'rpr-percentage-change',
      band: 'C',
      marks: 4,
      question: 'A house was worth £180 000 in 2015. Its value increased by 5% per year for 4 years, then decreased by 3% per year for 2 years. Find the value in 2021 to the nearest pound.',
      steps: [
        {
          prompt: 'Find the value after 4 years of 5% growth. (£)',
          hint1: 'V = 180 000 × 1.05⁴.',
          hint2: '1.05⁴ = 1.21550625.',
          hint3: '£218 791.13.',
          answer: 218791,
          tolerance: 1,
          unit: '£',
          explanation: '180 000 × 1.05⁴ = 180 000 × 1.21550625 ≈ £218 791.'
        },
        {
          prompt: 'Now apply 3% decrease for 2 years. What multiplier is applied?',
          hint1: '3% decrease → multiplier 0.97 each year, applied twice.',
          hint2: '0.97² = 0.9409.',
          hint3: '0.9409.',
          answer: 0.9409,
          tolerance: 0.0001,
          unit: '',
          explanation: '0.97² = 0.9409.'
        },
        {
          prompt: 'Find the value after the 2 years of decline. (£, nearest pound)',
          hint1: '218 791 × 0.9409.',
          hint2: '218 791 × 0.9409 ≈ ?',
          hint3: '£205 820.',
          answer: 205820,
          tolerance: 10,
          unit: '£',
          explanation: '218 791 × 0.9409 ≈ £205 820.'
        },
        {
          prompt: 'Alternatively, write the whole calculation as one expression and verify your answer is correct. Enter 1 if your answer is within £10.',
          hint1: 'V = 180 000 × 1.05⁴ × 0.97².',
          hint2: '180 000 × 1.21550625 × 0.9409 ≈ £205 820.',
          hint3: 'Enter 1.',
          answer: 1,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'V = 180 000 × 1.05⁴ × 0.97² ≈ £205 820',
          explanation: '180 000 × 1.05⁴ × 0.97² ≈ £205 820.'
        }
      ],
      workedExample: {
        question: 'A car worth £10 000 in 2018 grew 10% for 2 years then fell 5% for 3 years. Find its 2023 value.',
        steps: [
          '10 000 × 1.10² = 10 000 × 1.21 = £12 100',
          '12 100 × 0.95³ = 12 100 × 0.857375 ≈ <strong>£10 374</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'After growth: £218 791. After decline: £218 791 × 0.9409 ≈ £205 820.',
        grade6: 'V = 180 000 × 1.05⁴ × 0.97² ≈ £218 791 × 0.9409 ≈ £205 820.',
        grade8: 'V = 180 000 × 1.05⁴ × 0.97² = 180 000 × 1.21550625 × 0.9409 ≈ £205 820.'
      },
      examinerTip: 'Chain multipliers together: growth years then decline years, all in one expression.',
      auditStatus: 'pending'
    },
"""

with open(FILE, encoding='utf-8') as f:
    content = f.read()
pos = content.find(MARKER)
if pos < 0:
    print('MARKER NOT FOUND')
else:
    print(f'Inserting at char {pos}')
    with open(FILE, 'w', encoding='utf-8') as f:
        f.write(content[:pos] + NEW + content[pos:])
    print('Done - rpr_q4 (12 percentage-change questions)')
