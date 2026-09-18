FILE = r'C:\Users\jason\OneDrive\Documents\GitHub\mabel-gcse\js\maths-questions.js'
MARKER = "\n\n    // ══════════════════════════════════════════════════════════\n    // SPEED, DISTANCE, TIME"

NEW = """    {
      id: 'pro-A03',
      subtopic: 'rpr-proportion',
      band: 'A',
      marks: 2,
      question: 'y is directly proportional to x. When x = 6, y = 18. Find y when x = 9.',
      steps: [
        {
          prompt: 'Find the constant of proportionality k.',
          hint1: 'y = kx, so k = y ÷ x.',
          hint2: 'k = 18 ÷ 6 = ?',
          hint3: 'k = 3.',
          answer: 3,
          tolerance: 0,
          unit: '',
          explanation: 'k = 18 ÷ 6 = 3, so y = 3x.'
        },
        {
          prompt: 'Find y when x = 9.',
          hint1: 'y = 3x.',
          hint2: 'y = 3 × 9 = ?',
          hint3: 'y = 27.',
          answer: 27,
          tolerance: 0,
          unit: '',
          explanation: 'y = 3 × 9 = 27.'
        }
      ],
      workedExample: {
        question: 'y is directly proportional to x. When x = 5, y = 20. Find y when x = 8.',
        steps: [
          'k = 20 ÷ 5 = 4, so y = 4x',
          'When x = 8: y = 4 × 8 = <strong>32</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'k = 18 ÷ 6 = 3. y = 3 × 9 = 27.',
        grade6: 'y = kx. k = 18 ÷ 6 = 3. When x = 9: y = 3 × 9 = 27.',
        grade8: 'Direct proportion: y = kx. k = 18/6 = 3. Equation: y = 3x. At x = 9: y = 27.'
      },
      examinerTip: 'State y = kx, find k, then substitute the new x value.',
      auditStatus: 'pending'
    },
    {
      id: 'pro-A04',
      subtopic: 'rpr-proportion',
      band: 'A',
      marks: 2,
      question: 'y is inversely proportional to x. When x = 4, y = 15. Find y when x = 12.',
      steps: [
        {
          prompt: 'Find the constant k using y = k/x.',
          hint1: 'k = y × x.',
          hint2: 'k = 15 × 4 = ?',
          hint3: 'k = 60.',
          answer: 60,
          tolerance: 0,
          unit: '',
          explanation: 'y = k/x → k = y × x = 15 × 4 = 60.'
        },
        {
          prompt: 'Find y when x = 12.',
          hint1: 'y = 60 ÷ x.',
          hint2: 'y = 60 ÷ 12 = ?',
          hint3: 'y = 5.',
          answer: 5,
          tolerance: 0,
          unit: '',
          explanation: 'y = 60 ÷ 12 = 5.'
        }
      ],
      workedExample: {
        question: 'y is inversely proportional to x. When x = 5, y = 8. Find y when x = 20.',
        steps: [
          'k = 5 × 8 = 40, so y = 40/x',
          'When x = 20: y = 40 ÷ 20 = <strong>2</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'k = 15 × 4 = 60. y = 60 ÷ 12 = 5.',
        grade6: 'y = k/x. k = 15 × 4 = 60. When x = 12: y = 60 ÷ 12 = 5.',
        grade8: 'Inverse proportion: y = k/x. k = yx = 15 × 4 = 60. At x = 12: y = 60/12 = 5.'
      },
      examinerTip: 'For inverse proportion, k = xy. As x increases, y decreases.',
      auditStatus: 'pending'
    },
    {
      id: 'pro-A05',
      subtopic: 'rpr-proportion',
      band: 'A',
      marks: 2,
      question: 'y is directly proportional to x. y = 24 when x = 8. Find x when y = 9.',
      steps: [
        {
          prompt: 'Find k (the constant of proportionality).',
          hint1: 'y = kx, so k = y ÷ x.',
          hint2: 'k = 24 ÷ 8 = ?',
          hint3: 'k = 3.',
          answer: 3,
          tolerance: 0,
          unit: '',
          explanation: 'k = 24 ÷ 8 = 3, so y = 3x.'
        },
        {
          prompt: 'Find x when y = 9.',
          hint1: 'Rearrange y = 3x to find x.',
          hint2: 'x = y ÷ 3 = 9 ÷ 3 = ?',
          hint3: 'x = 3.',
          answer: 3,
          tolerance: 0,
          unit: '',
          explanation: 'x = 9 ÷ 3 = 3.'
        }
      ],
      workedExample: {
        question: 'y is directly proportional to x. y = 35 when x = 5. Find x when y = 21.',
        steps: [
          'k = 35 ÷ 5 = 7, so y = 7x',
          'x = 21 ÷ 7 = <strong>3</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'k = 24 ÷ 8 = 3. So y = 3x. x = 9 ÷ 3 = 3.',
        grade6: 'y = kx. k = 24 ÷ 8 = 3. Equation: y = 3x. When y = 9: x = 9 ÷ 3 = 3.',
        grade8: 'Direct proportion: k = 24/8 = 3, so y = 3x. Rearranging: x = y/3. At y = 9: x = 3.'
      },
      examinerTip: 'Once you have the equation, rearrange to find whichever variable is unknown.',
      auditStatus: 'pending'
    },
    {
      id: 'pro-B02',
      subtopic: 'rpr-proportion',
      band: 'B',
      marks: 3,
      question: 'y is directly proportional to x³. When x = 2, y = 32. Find y when x = 3.',
      steps: [
        {
          prompt: 'Write the proportionality equation.',
          hint1: 'y ∝ x³ means y = kx³.',
          hint2: 'The equation is y = kx³.',
          hint3: 'y = kx³.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'y = kx³',
          explanation: 'Direct proportion to x³ gives y = kx³.'
        },
        {
          prompt: 'Find k by substituting x = 2, y = 32.',
          hint1: '32 = k × 2³',
          hint2: '32 = 8k, so k = 32 ÷ 8',
          hint3: 'k = 4.',
          answer: 4,
          tolerance: 0,
          unit: '',
          explanation: '32 = k × 8, so k = 4.'
        },
        {
          prompt: 'Find y when x = 3.',
          hint1: 'y = 4x³.',
          hint2: 'y = 4 × 3³ = 4 × 27 = ?',
          hint3: 'y = 108.',
          answer: 108,
          tolerance: 0,
          unit: '',
          explanation: 'y = 4 × 27 = 108.'
        }
      ],
      workedExample: {
        question: 'y is directly proportional to x³. When x = 3, y = 54. Find y when x = 2.',
        steps: [
          'y = kx³. Substituting: 54 = k × 27 → k = 2',
          'Equation: y = 2x³',
          'When x = 2: y = 2 × 8 = <strong>16</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'y = kx³. 32 = 8k so k = 4. y = 4 × 27 = 108.',
        grade6: 'y = kx³. Substituting x=2, y=32: k = 32/8 = 4. When x=3: y = 4 × 27 = 108.',
        grade8: 'y ∝ x³ → y = kx³. Using (2, 32): 32 = 8k, k = 4. Equation: y = 4x³. At x=3: y = 4 × 27 = 108.'
      },
      examinerTip: 'Cube the x value carefully: 3³ = 27, not 9.',
      auditStatus: 'pending'
    },
    {
      id: 'pro-B03',
      subtopic: 'rpr-proportion',
      band: 'B',
      marks: 3,
      question: 'y is inversely proportional to x². When x = 3, y = 8. Find y when x = 6.',
      steps: [
        {
          prompt: 'Write the equation for inverse proportion to x².',
          hint1: 'y ∝ 1/x² means y = k/x².',
          hint2: 'y = k/x².',
          hint3: 'y = k/x².',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'y = k/x²',
          explanation: 'Inverse proportion to x² gives y = k/x².'
        },
        {
          prompt: 'Find k by substituting x = 3, y = 8.',
          hint1: '8 = k / 3²',
          hint2: '8 = k/9, so k = 8 × 9',
          hint3: 'k = 72.',
          answer: 72,
          tolerance: 0,
          unit: '',
          explanation: '8 = k/9, so k = 72.'
        },
        {
          prompt: 'Find y when x = 6.',
          hint1: 'y = 72 / x².',
          hint2: 'y = 72 / 36 = ?',
          hint3: 'y = 2.',
          answer: 2,
          tolerance: 0,
          unit: '',
          explanation: 'y = 72 / 6² = 72 / 36 = 2.'
        }
      ],
      workedExample: {
        question: 'y is inversely proportional to x². When x = 2, y = 9. Find y when x = 3.',
        steps: [
          'y = k/x². Substituting: 9 = k/4 → k = 36',
          'Equation: y = 36/x²',
          'When x = 3: y = 36/9 = <strong>4</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'y = k/x². 8 = k/9 so k = 72. y = 72/36 = 2.',
        grade6: 'y = k/x². Using x=3, y=8: 8 = k/9, k = 72. At x=6: y = 72/36 = 2.',
        grade8: 'y ∝ 1/x² → y = k/x². Substituting (3,8): k = 8×9 = 72. At x=6: y = 72/36 = 2. Doubling x quarters y, consistent with inverse square.'
      },
      examinerTip: 'Inverse proportion to x² means y = k/x². Square x before dividing.',
      auditStatus: 'pending'
    },
    {
      id: 'pro-B04',
      subtopic: 'rpr-proportion',
      band: 'B',
      marks: 3,
      question: 'y is directly proportional to the square root of x. When x = 16, y = 12. Find y when x = 25.',
      steps: [
        {
          prompt: 'Write the equation: y = k√x. Find k using x=16, y=12.',
          hint1: '12 = k × √16',
          hint2: '12 = k × 4, so k = 12 ÷ 4',
          hint3: 'k = 3.',
          answer: 3,
          tolerance: 0,
          unit: '',
          explanation: 'y = k√x. 12 = k × 4, so k = 3.'
        },
        {
          prompt: 'Write the full equation.',
          hint1: 'Replace k with 3.',
          hint2: 'y = 3√x.',
          hint3: 'y = 3√x.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'y = 3√x',
          explanation: 'Equation: y = 3√x.'
        },
        {
          prompt: 'Find y when x = 25.',
          hint1: '√25 = 5.',
          hint2: 'y = 3 × 5 = ?',
          hint3: 'y = 15.',
          answer: 15,
          tolerance: 0,
          unit: '',
          explanation: 'y = 3 × √25 = 3 × 5 = 15.'
        }
      ],
      workedExample: {
        question: 'y is directly proportional to √x. When x = 9, y = 6. Find y when x = 36.',
        steps: [
          'y = k√x. Substituting: 6 = k×3 → k = 2',
          'Equation: y = 2√x',
          'When x = 36: y = 2 × 6 = <strong>12</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'k = 12 ÷ 4 = 3. y = 3 × 5 = 15.',
        grade6: 'y = k√x. k = 12/√16 = 12/4 = 3. When x=25: y = 3×5 = 15.',
        grade8: 'y ∝ √x → y = k√x. k = 12/4 = 3. Equation: y = 3√x. At x=25: y = 3×5 = 15.'
      },
      examinerTip: 'Find the square root of x first, then multiply by k.',
      auditStatus: 'pending'
    },
    {
      id: 'pro-B05',
      subtopic: 'rpr-proportion',
      band: 'B',
      marks: 3,
      question: 'A and B are in direct proportion. When A = 5, B = 35. Find B when A = 11.',
      steps: [
        {
          prompt: 'Find the constant of proportionality k.',
          hint1: 'B = kA, so k = B ÷ A.',
          hint2: 'k = 35 ÷ 5 = ?',
          hint3: 'k = 7.',
          answer: 7,
          tolerance: 0,
          unit: '',
          explanation: 'k = 35 ÷ 5 = 7, so B = 7A.'
        },
        {
          prompt: 'Find B when A = 11.',
          hint1: 'B = 7A.',
          hint2: 'B = 7 × 11 = ?',
          hint3: 'B = 77.',
          answer: 77,
          tolerance: 0,
          unit: '',
          explanation: 'B = 7 × 11 = 77.'
        },
        {
          prompt: 'What does the graph of B against A look like? Enter 1 for a straight line through the origin.',
          hint1: 'Direct proportion always gives a straight line through the origin.',
          hint2: 'B = 7A has gradient 7 and passes through (0,0).',
          hint3: 'Enter 1.',
          answer: 1,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'A straight line through the origin (gradient 7)',
          explanation: 'Direct proportion B = kA is a straight line through the origin with gradient k.'
        }
      ],
      workedExample: {
        question: 'P and Q are in direct proportion. When P = 4, Q = 28. Find Q when P = 9.',
        steps: [
          'k = 28 ÷ 4 = 7, so Q = 7P',
          'When P = 9: Q = 7 × 9 = <strong>63</strong>',
          'Graph: straight line through origin, gradient 7'
        ]
      },
      sampleAnswer: {
        grade4: 'k = 35 ÷ 5 = 7. B = 7 × 11 = 77.',
        grade6: 'B = kA. k = 35/5 = 7. Equation: B = 7A. When A=11: B = 77.',
        grade8: 'Direct proportion: B = 7A (gradient 7, through origin). At A=11: B = 77. Graph is a straight line through (0,0).'
      },
      examinerTip: 'Direct proportion produces a straight-line graph through the origin.',
      auditStatus: 'pending'
    },
    {
      id: 'pro-B06',
      subtopic: 'rpr-proportion',
      band: 'B',
      marks: 3,
      question: 'y is inversely proportional to x. When x = 3, y = 20. Find x when y = 4.',
      steps: [
        {
          prompt: 'Find k using y = k/x.',
          hint1: 'k = y × x.',
          hint2: 'k = 20 × 3 = ?',
          hint3: 'k = 60.',
          answer: 60,
          tolerance: 0,
          unit: '',
          explanation: 'k = 20 × 3 = 60, so y = 60/x.'
        },
        {
          prompt: 'Find x when y = 4.',
          hint1: '4 = 60/x, so x = 60 ÷ 4.',
          hint2: 'x = 60 ÷ 4 = ?',
          hint3: 'x = 15.',
          answer: 15,
          tolerance: 0,
          unit: '',
          explanation: 'x = 60 ÷ 4 = 15.'
        },
        {
          prompt: 'Check: does y × x = 60 when x = 15? Enter 1 for yes.',
          hint1: '4 × 15 = ?',
          hint2: '4 × 15 = 60 ✓',
          hint3: 'Enter 1.',
          answer: 1,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: '4 × 15 = 60 ✓',
          explanation: 'Verification: y × x = 4 × 15 = 60 = k ✓'
        }
      ],
      workedExample: {
        question: 'y is inversely proportional to x. When x = 6, y = 10. Find x when y = 3.',
        steps: [
          'k = 6 × 10 = 60, so y = 60/x',
          'When y = 3: x = 60 ÷ 3 = <strong>20</strong>',
          'Check: 3 × 20 = 60 ✓'
        ]
      },
      sampleAnswer: {
        grade4: 'k = 20 × 3 = 60. x = 60 ÷ 4 = 15.',
        grade6: 'y = k/x. k = 60. When y = 4: x = 60/4 = 15.',
        grade8: 'Inverse proportion: y = 60/x. Rearranging for x: x = 60/y = 60/4 = 15. Check: 4 × 15 = 60 ✓'
      },
      examinerTip: 'Rearrange y = k/x to x = k/y when x is unknown.',
      auditStatus: 'pending'
    },
    {
      id: 'pro-C01',
      subtopic: 'rpr-proportion',
      band: 'C',
      marks: 4,
      question: 'y is directly proportional to x². When x = 3, y = 45. Find x when y = 80.',
      steps: [
        {
          prompt: 'Write the equation and find k. Substitute x=3, y=45.',
          hint1: 'y = kx². 45 = k × 9.',
          hint2: 'k = 45 ÷ 9 = 5.',
          hint3: 'k = 5.',
          answer: 5,
          tolerance: 0,
          unit: '',
          explanation: 'y = kx². 45 = 9k → k = 5. Equation: y = 5x².'
        },
        {
          prompt: 'Substitute y = 80 into y = 5x².',
          hint1: '80 = 5x².',
          hint2: 'x² = 80 ÷ 5 = 16.',
          hint3: 'x² = 16.',
          answer: 16,
          tolerance: 0,
          unit: '',
          explanation: '80 = 5x², so x² = 80/5 = 16.'
        },
        {
          prompt: 'Find x (take the positive root).',
          hint1: 'x = √16.',
          hint2: '√16 = 4.',
          hint3: 'x = 4.',
          answer: 4,
          tolerance: 0,
          unit: '',
          explanation: 'x = √16 = 4.'
        },
        {
          prompt: 'Check: does 5 × 4² = 80? Enter 1 for yes.',
          hint1: '5 × 16 = 80.',
          hint2: 'Yes — enter 1.',
          hint3: 'Enter 1.',
          answer: 1,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: '5 × 16 = 80 ✓',
          explanation: 'Check: 5 × 4² = 5 × 16 = 80 ✓'
        }
      ],
      workedExample: {
        question: 'y is directly proportional to x². When x = 2, y = 28. Find x when y = 63.',
        steps: [
          'y = kx². 28 = 4k → k = 7',
          '63 = 7x² → x² = 9',
          'x = √9 = <strong>3</strong>',
          'Check: 7 × 9 = 63 ✓'
        ]
      },
      sampleAnswer: {
        grade4: 'k = 45/9 = 5. 80 = 5x², x² = 16, x = 4.',
        grade6: 'y = kx². k = 45/9 = 5. Equation: y = 5x². 80 = 5x², x² = 16, x = 4.',
        grade8: 'y = 5x² (k=5). Setting y=80: x² = 16, so x = 4 (taking positive root). Check: 5×16=80 ✓'
      },
      examinerTip: 'When finding x from y = kx², isolate x² first then take the square root.',
      auditStatus: 'pending'
    },
    {
      id: 'pro-C02',
      subtopic: 'rpr-proportion',
      band: 'C',
      marks: 4,
      question: 'y is inversely proportional to x². When x = 2, y = 25. Find x when y = 4.',
      steps: [
        {
          prompt: 'Find k using y = k/x², x=2, y=25.',
          hint1: '25 = k/4.',
          hint2: 'k = 25 × 4.',
          hint3: 'k = 100.',
          answer: 100,
          tolerance: 0,
          unit: '',
          explanation: '25 = k/4 → k = 100. Equation: y = 100/x².'
        },
        {
          prompt: 'Substitute y = 4 to find x². ',
          hint1: '4 = 100/x².',
          hint2: 'x² = 100 ÷ 4.',
          hint3: 'x² = 25.',
          answer: 25,
          tolerance: 0,
          unit: '',
          explanation: 'x² = 100/4 = 25.'
        },
        {
          prompt: 'Find x (positive value).',
          hint1: 'x = √25.',
          hint2: '√25 = 5.',
          hint3: 'x = 5.',
          answer: 5,
          tolerance: 0,
          unit: '',
          explanation: 'x = √25 = 5.'
        },
        {
          prompt: 'Check: does 100/5² = 4? Enter 1 for yes.',
          hint1: '5² = 25. 100/25 = 4.',
          hint2: 'Yes — enter 1.',
          hint3: 'Enter 1.',
          answer: 1,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: '100/25 = 4 ✓',
          explanation: '100/5² = 100/25 = 4 ✓'
        }
      ],
      workedExample: {
        question: 'y is inversely proportional to x². When x = 3, y = 4. Find x when y = 9.',
        steps: [
          'y = k/x². 4 = k/9 → k = 36',
          '9 = 36/x² → x² = 4',
          'x = <strong>2</strong>',
          'Check: 36/4 = 9 ✓'
        ]
      },
      sampleAnswer: {
        grade4: 'k = 100. x² = 100/4 = 25. x = 5.',
        grade6: 'y = k/x². k = 25×4 = 100. 4 = 100/x², x² = 25, x = 5.',
        grade8: 'y = 100/x². Setting y=4: x² = 25, x = 5. Check: 100/25 = 4 ✓'
      },
      examinerTip: 'Multiply both sides by x², then divide by y to isolate x².',
      auditStatus: 'pending'
    },
    {
      id: 'pro-C03',
      subtopic: 'rpr-proportion',
      band: 'C',
      marks: 4,
      question: 'y is directly proportional to x². y = 12 when x = 2. z is directly proportional to y. z = 30 when y = 12. Find z when x = 5.',
      steps: [
        {
          prompt: 'Find the constant k₁ for y = k₁x². Use x=2, y=12.',
          hint1: '12 = k₁ × 4.',
          hint2: 'k₁ = 12 ÷ 4.',
          hint3: 'k₁ = 3.',
          answer: 3,
          tolerance: 0,
          unit: '',
          explanation: 'y = k₁x². 12 = 4k₁ → k₁ = 3. So y = 3x².'
        },
        {
          prompt: 'Find y when x = 5 using y = 3x².',
          hint1: 'y = 3 × 5².',
          hint2: '3 × 25 = ?',
          hint3: 'y = 75.',
          answer: 75,
          tolerance: 0,
          unit: '',
          explanation: 'y = 3 × 25 = 75.'
        },
        {
          prompt: 'Find k₂ for z = k₂y using z=30, y=12.',
          hint1: '30 = k₂ × 12.',
          hint2: 'k₂ = 30 ÷ 12.',
          hint3: 'k₂ = 2.5.',
          answer: 2.5,
          tolerance: 0.001,
          unit: '',
          explanation: 'k₂ = 30/12 = 2.5.'
        },
        {
          prompt: 'Find z when y = 75.',
          hint1: 'z = 2.5 × y.',
          hint2: 'z = 2.5 × 75 = ?',
          hint3: 'z = 187.5.',
          answer: 187.5,
          tolerance: 0.01,
          unit: '',
          explanation: 'z = 2.5 × 75 = 187.5.'
        }
      ],
      workedExample: {
        question: 'y = k₁x² with y=8 when x=2. z = k₂y with z=20 when y=8. Find z when x=3.',
        steps: [
          'k₁ = 8/4 = 2, so y = 2x²',
          'When x=3: y = 2×9 = 18',
          'k₂ = 20/8 = 2.5, so z = 2.5y',
          'z = 2.5 × 18 = <strong>45</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'k₁=3, y=75 when x=5. k₂=2.5, z=2.5×75=187.5.',
        grade6: 'y = 3x². At x=5: y=75. z = 2.5y. At y=75: z=187.5.',
        grade8: 'y = 3x² (k=3). At x=5: y=75. z = 2.5y (k=2.5). At y=75: z=187.5. Combined: z = 2.5×3x² = 7.5x².'
      },
      examinerTip: 'Chain proportion problems — find each equation separately, then substitute through.',
      auditStatus: 'pending'
    },
    {
      id: 'pro-C04',
      subtopic: 'rpr-proportion',
      band: 'C',
      marks: 4,
      question: 'y is inversely proportional to the square root of x. When x = 4, y = 15. Find y when x = 9. Show all working.',
      steps: [
        {
          prompt: 'Write the equation and find k. Use x=4, y=15.',
          hint1: 'y = k/√x.',
          hint2: '15 = k/√4 = k/2, so k = 30.',
          hint3: 'k = 30.',
          answer: 30,
          tolerance: 0,
          unit: '',
          explanation: 'y = k/√x. 15 = k/2 → k = 30.'
        },
        {
          prompt: 'Write the full equation.',
          hint1: 'Replace k with 30.',
          hint2: 'y = 30/√x.',
          hint3: 'y = 30/√x.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'y = 30/√x',
          explanation: 'Equation: y = 30/√x.'
        },
        {
          prompt: 'Find √9.',
          hint1: '√9 = ?',
          hint2: '√9 = 3.',
          hint3: '3.',
          answer: 3,
          tolerance: 0,
          unit: '',
          explanation: '√9 = 3.'
        },
        {
          prompt: 'Find y when x = 9.',
          hint1: 'y = 30/3.',
          hint2: '30 ÷ 3 = ?',
          hint3: 'y = 10.',
          answer: 10,
          tolerance: 0,
          unit: '',
          explanation: 'y = 30/√9 = 30/3 = 10.'
        }
      ],
      workedExample: {
        question: 'y is inversely proportional to √x. When x=16, y=5. Find y when x=25.',
        steps: [
          'y = k/√x. 5 = k/4 → k = 20',
          'Equation: y = 20/√x',
          '√25 = 5',
          'y = 20/5 = <strong>4</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'k = 30. y = 30/√9 = 30/3 = 10.',
        grade6: 'y = k/√x. k = 15×2 = 30. At x=9: y = 30/3 = 10.',
        grade8: 'y ∝ 1/√x → y = 30/√x. At x=9: √9=3, y = 30/3 = 10. As x increases, y decreases, consistent with inverse proportion.'
      },
      examinerTip: 'Find the square root of x before substituting — do not square k accidentally.',
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
    print('Done - rpr_q2 (12 proportion questions)')
