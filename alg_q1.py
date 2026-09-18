#!/usr/bin/env python3
# Batch 1: eq-A04/05, eq-B04/05/06, eq-C03/04 (7) + sub-A04/05, sub-B04/05/06, sub-C03/04 (7) = 14

FILE = r'C:\Users\jason\OneDrive\Documents\GitHub\mabel-gcse\js\maths-questions.js'
MARKER = "    {\n      id: 'pro-A01'"

NEW = r"""
    // ── eq-A04 ───────────────────────────────────────────────
    {
      id: 'eq-A04', subtopic: 'alg-equations', band: 'A', marks: 2,
      question: 'Solve 4x − 9 = 15.',
      steps: [
        {
          prompt: 'Add 9 to both sides.',
          hint1: '4x − 9 + 9 = 15 + 9.',
          hint2: '4x = ?',
          hint3: '4x = 24',
          answer: 24, tolerance: 0, unit: '',
          explanation: '4x = 15 + 9 = 24.',
        },
        {
          prompt: 'Divide both sides by 4.',
          hint1: 'x = 24 ÷ 4.',
          hint2: 'x = ?',
          hint3: 'x = 6',
          answer: 6, tolerance: 0, unit: '',
          explanation: 'x = 24 ÷ 4 = 6.',
        },
      ],
      workedExample: {
        question: 'Solve 5x + 3 = 28.',
        steps: [
          'Step 1 — subtract 3: 5x = 25',
          'Step 2 — divide by 5: x = <strong>5</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "x = 6",
        grade6: "4x = 15 + 9 = 24. x = 6.",
        grade8: "4x − 9 = 15 → 4x = 24 → x = 6. Check: 4(6) − 9 = 15. ✓",
      },
      examinerTip: "Always check by substituting back: 4(6) − 9 = 24 − 9 = 15. ✓",
      auditStatus: 'pending',
    },
    // ── eq-A05 ───────────────────────────────────────────────
    {
      id: 'eq-A05', subtopic: 'alg-equations', band: 'A', marks: 2,
      question: 'Solve 7 − 2x = 1.',
      steps: [
        {
          prompt: 'Rearrange: subtract 7 from both sides.',
          hint1: '−2x = 1 − 7.',
          hint2: '−2x = ?',
          hint3: '−2x = −6',
          answer: -6, tolerance: 0, unit: '',
          explanation: '−2x = 1 − 7 = −6.',
        },
        {
          prompt: 'Divide both sides by −2.',
          hint1: 'x = −6 ÷ −2.',
          hint2: 'Dividing two negatives gives a positive.',
          hint3: 'x = 3',
          answer: 3, tolerance: 0, unit: '',
          explanation: 'x = −6 ÷ −2 = 3.',
        },
      ],
      workedExample: {
        question: 'Solve 8 − 5x = 3.',
        steps: [
          'Step 1 — subtract 8: −5x = −5',
          'Step 2 — divide by −5: x = <strong>1</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "x = 3",
        grade6: "7 − 2x = 1 → −2x = −6 → x = 3.",
        grade8: "7 − 2x = 1 → 2x = 6 → x = 3. (Subtract 1, subtract 2x.) Check: 7 − 6 = 1. ✓",
      },
      examinerTip: "When dividing by a negative, the sign of the answer changes. −6 ÷ −2 = +3, not −3.",
      auditStatus: 'pending',
    },
    // ── eq-B04 ───────────────────────────────────────────────
    {
      id: 'eq-B04', subtopic: 'alg-equations', band: 'B', marks: 3,
      question: 'Solve (2x + 5)/3 = 7.',
      steps: [
        {
          prompt: 'Multiply both sides by 3.',
          hint1: '3 × (2x + 5)/3 = 7 × 3.',
          hint2: '2x + 5 = ?',
          hint3: '2x + 5 = 21',
          answer: 21, tolerance: 0, unit: '',
          explanation: 'Multiply both sides by 3: 2x + 5 = 21.',
        },
        {
          prompt: 'Subtract 5 from both sides.',
          hint1: '2x = 21 − 5.',
          hint2: '2x = ?',
          hint3: '2x = 16',
          answer: 16, tolerance: 0, unit: '',
          explanation: '2x = 21 − 5 = 16.',
        },
        {
          prompt: 'Divide both sides by 2.',
          hint1: 'x = 16 ÷ 2.',
          hint2: 'x = ?',
          hint3: 'x = 8',
          answer: 8, tolerance: 0, unit: '',
          explanation: 'x = 16 ÷ 2 = 8.',
        },
      ],
      workedExample: {
        question: 'Solve (4x − 3)/5 = 5.',
        steps: [
          'Step 1 — ×5: 4x − 3 = 25',
          'Step 2 — +3: 4x = 28',
          'Step 3 — ÷4: x = <strong>7</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "x = 8",
        grade6: "×3: 2x+5=21. −5: 2x=16. ÷2: x=8.",
        grade8: "(2x+5)/3=7 → 2x+5=21 → 2x=16 → x=8. Check: (16+5)/3=21/3=7. ✓",
      },
      examinerTip: "Multiply both sides by the denominator first to clear the fraction. Deal with the bracket contents afterwards.",
      auditStatus: 'pending',
    },
    // ── eq-B05 ───────────────────────────────────────────────
    {
      id: 'eq-B05', subtopic: 'alg-equations', band: 'B', marks: 3,
      question: 'Solve 5(x − 2) = 3(x + 4).',
      steps: [
        {
          prompt: 'Expand the left-hand side.',
          hint1: '5 × x = 5x and 5 × (−2) = ?',
          hint2: '5(x − 2) = 5x − 10.',
          hint3: 'LHS = 5x − 10',
          answer: -10, tolerance: 0, unit: '',
          explanation: '5(x − 2) = 5x − 10.',
        },
        {
          prompt: 'Expand the right-hand side.',
          hint1: '3 × x = 3x and 3 × 4 = ?',
          hint2: '3(x + 4) = 3x + 12.',
          hint3: 'RHS = 3x + 12',
          answer: 12, tolerance: 0, unit: '',
          explanation: '3(x + 4) = 3x + 12.',
        },
        {
          prompt: 'Solve 5x − 10 = 3x + 12.',
          hint1: 'Collect x terms: 5x − 3x = 12 + 10.',
          hint2: '2x = 22.',
          hint3: 'x = 11',
          answer: 11, tolerance: 0, unit: '',
          explanation: '2x = 22 → x = 11.',
        },
      ],
      workedExample: {
        question: 'Solve 4(x + 1) = 2(x + 5).',
        steps: [
          'Step 1 — expand: 4x + 4 = 2x + 10',
          'Step 2 — collect: 2x = 6',
          'Step 3 — solve: x = <strong>3</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "x = 11",
        grade6: "5x−10=3x+12 → 2x=22 → x=11.",
        grade8: "5x−10=3x+12 → 2x=22 → x=11. Check: 5(9)=45, 3(15)=45. ✓",
      },
      examinerTip: "Expand all brackets before collecting terms. A common error is writing 5x − 2 instead of 5x − 10.",
      auditStatus: 'pending',
    },
    // ── eq-B06 ───────────────────────────────────────────────
    {
      id: 'eq-B06', subtopic: 'alg-equations', band: 'B', marks: 3,
      question: 'Solve 3x/4 + x/2 = 5.',
      steps: [
        {
          prompt: 'Find the LCD of 4 and 2, and multiply every term by it.',
          hint1: 'LCD = 4. Multiply through by 4.',
          hint2: '4×(3x/4) + 4×(x/2) = 4×5.',
          hint3: '3x + 2x = 20',
          answer: 20, tolerance: 0, unit: '',
          explanation: 'Multiply by 4: 3x + 2x = 20.',
          checkType: 'skip',
          displayAnswer: '3x + 2x = 20',
        },
        {
          prompt: 'Simplify the left side.',
          hint1: '3x + 2x = ?',
          hint2: '5x',
          hint3: '5x = 20',
          answer: 20, tolerance: 0, unit: '',
          explanation: '5x = 20.',
        },
        {
          prompt: 'Solve for x.',
          hint1: 'x = 20 ÷ 5.',
          hint2: 'x = ?',
          hint3: 'x = 4',
          answer: 4, tolerance: 0, unit: '',
          explanation: 'x = 20 ÷ 5 = 4.',
        },
      ],
      workedExample: {
        question: 'Solve x/3 + x/2 = 5.',
        steps: [
          'Step 1 — LCD=6: 2x + 3x = 30',
          'Step 2 — simplify: 5x = 30',
          'Step 3 — solve: x = <strong>6</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "x = 4",
        grade6: "×4: 3x+2x=20. 5x=20. x=4.",
        grade8: "LCD=4. 3x+2x=20 → 5x=20 → x=4. Check: 3/4+2/4=5/4×4=5. ✓",
      },
      examinerTip: "Multiply every term (including the right side) by the LCD. A common error is multiplying only the fraction terms.",
      auditStatus: 'pending',
    },
    // ── eq-C03 ───────────────────────────────────────────────
    {
      id: 'eq-C03', subtopic: 'alg-equations', band: 'C', marks: 4,
      question: 'Solve 3/(x − 1) = 2/(x + 3).',
      steps: [
        {
          prompt: 'Cross-multiply to clear the fractions.',
          hint1: '3(x + 3) = 2(x − 1).',
          hint2: 'Expand both sides.',
          hint3: '3x + 9 = 2x − 2',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Cross-multiply: 3(x+3) = 2(x−1).',
          checkType: 'skip',
          displayAnswer: '3(x+3) = 2(x−1)',
        },
        {
          prompt: 'Expand 3(x + 3). What is the constant term?',
          hint1: '3 × 3 = ?',
          hint2: '3(x + 3) = 3x + 9.',
          hint3: '9',
          answer: 9, tolerance: 0, unit: '',
          explanation: '3(x + 3) = 3x + 9.',
        },
        {
          prompt: 'Solve 3x + 9 = 2x − 2.',
          hint1: 'Collect x terms: 3x − 2x = −2 − 9.',
          hint2: 'x = ?',
          hint3: 'x = −11',
          answer: -11, tolerance: 0, unit: '',
          explanation: '3x − 2x = −2 − 9 → x = −11.',
        },
        {
          prompt: 'Verify by substituting x = −11.',
          hint1: 'LHS: 3/(−11−1) = 3/(−12). RHS: 2/(−11+3) = 2/(−8).',
          hint2: '3/−12 = −1/4. 2/−8 = −1/4. Equal!',
          hint3: 'Both sides = −1/4. ✓',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Both sides equal −1/4. ✓',
          checkType: 'skip',
          displayAnswer: 'Check: −1/4 = −1/4 ✓',
        },
      ],
      workedExample: {
        question: 'Solve 4/(x + 2) = 3/(x − 1).',
        steps: [
          'Step 1 — cross-multiply: 4(x−1) = 3(x+2)',
          'Step 2 — expand: 4x−4 = 3x+6',
          'Step 3 — solve: x = <strong>10</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "x = −11",
        grade6: "Cross-multiply: 3(x+3)=2(x−1) → 3x+9=2x−2 → x=−11.",
        grade8: "3(x+3)=2(x−1) → 3x+9=2x−2 → x=−11. Check: 3/−12=2/−8=−1/4 ✓.",
      },
      examinerTip: "Cross-multiply by writing a/b=c/d → ad=bc. Expand both sides carefully before collecting terms.",
      auditStatus: 'pending',
    },
    // ── eq-C04 ───────────────────────────────────────────────
    {
      id: 'eq-C04', subtopic: 'alg-equations', band: 'C', marks: 4,
      question: 'A rectangle has length (x + 4) cm and width (x − 1) cm. Its area is 24 cm². Find x and state the dimensions.',
      steps: [
        {
          prompt: 'Form a quadratic equation using area = length × width.',
          hint1: '(x + 4)(x − 1) = 24.',
          hint2: 'Expand: x² + 3x − 4 = 24.',
          hint3: 'x² + 3x − 28 = 0',
          answer: -28, tolerance: 0, unit: '',
          explanation: '(x+4)(x−1)=x²+3x−4=24 → x²+3x−28=0.',
        },
        {
          prompt: 'Factorise x² + 3x − 28 = 0.',
          hint1: 'Find factors of −28 that add to 3: 7 and −4.',
          hint2: '(x + 7)(x − 4) = 0.',
          hint3: 'x = 4 (positive) or x = −7 (reject)',
          answer: 4, tolerance: 0, unit: '',
          explanation: '(x+7)(x−4)=0. x=4 (length must be positive).',
        },
        {
          prompt: 'Find the length.',
          hint1: 'Length = x + 4.',
          hint2: 'x + 4 = 4 + 4.',
          hint3: '8',
          answer: 8, tolerance: 0, unit: 'cm',
          explanation: 'Length = 4 + 4 = 8 cm.',
        },
        {
          prompt: 'Find the width and verify the area.',
          hint1: 'Width = x − 1 = 3.',
          hint2: '8 × 3 = ?',
          hint3: '8 × 3 = 24 ✓',
          answer: 3, tolerance: 0, unit: 'cm',
          explanation: 'Width = 4 − 1 = 3 cm. Area = 8 × 3 = 24. ✓',
        },
      ],
      workedExample: {
        question: 'Rectangle length (x+3) cm, width (x+1) cm, area 15 cm². Find x.',
        steps: [
          'Step 1 — equation: (x+3)(x+1)=15 → x²+4x−12=0',
          'Step 2 — factorise: (x+6)(x−2)=0 → x=2',
          'Step 3 — dims: 5 cm × 3 cm = 15 ✓',
        ],
      },
      sampleAnswer: {
        grade4: "x = 4, dimensions 8 cm × 3 cm",
        grade6: "(x+4)(x−1)=24. x²+3x−28=0. (x+7)(x−4)=0. x=4. Dims: 8×3=24. ✓",
        grade8: "x²+3x−28=0 → (x+7)(x−4)=0 → x=4 (x=−7 rejected). 8 cm × 3 cm.",
      },
      examinerTip: "Always reject negative solutions for physical lengths. After finding x, find both dimensions and verify their product equals the given area.",
      auditStatus: 'pending',
    },

    // ── sub-A04 ──────────────────────────────────────────────
    {
      id: 'sub-A04', subtopic: 'alg-expressions', band: 'A', marks: 2,
      question: 'Expand and simplify 3(2x − 5) + 4(x + 1).',
      steps: [
        {
          prompt: 'Expand both brackets and collect the x terms.',
          hint1: '3(2x−5) = 6x−15. 4(x+1) = 4x+4. Add the x terms: 6x+4x = ?',
          hint2: '6x + 4x = 10x',
          hint3: 'Coefficient of x is 10.',
          answer: 10, tolerance: 0, unit: '',
          explanation: '6x + 4x = 10x.',
        },
        {
          prompt: 'Collect the constant terms to find the simplified expression.',
          hint1: '−15 + 4 = ?',
          hint2: '−15 + 4 = −11',
          hint3: 'Expression = 10x − 11',
          answer: -11, tolerance: 0, unit: '',
          explanation: 'Constants: −15 + 4 = −11. Answer: 10x − 11.',
        },
      ],
      workedExample: {
        question: 'Expand and simplify 5(x + 2) − 3(2x − 1).',
        steps: [
          'Step 1 — expand: 5x+10 − 6x+3',
          'Step 2 — collect: (5x−6x) + (10+3) = <strong>−x + 13</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "10x − 11",
        grade6: "3(2x−5)+4(x+1) = 6x−15+4x+4 = 10x−11.",
        grade8: "Expand each bracket: 6x−15+4x+4. Collect: 10x−11.",
      },
      examinerTip: "Expand every bracket before collecting terms. Watch signs when expanding a negative bracket — 3(−5) = −15, not +15.",
      auditStatus: 'pending',
    },
    // ── sub-A05 ──────────────────────────────────────────────
    {
      id: 'sub-A05', subtopic: 'alg-expressions', band: 'A', marks: 2,
      question: 'Use the formula v² = u² + 2as. Find v when u = 0, a = 10 and s = 45.',
      steps: [
        {
          prompt: 'Substitute the values into the formula and calculate v².',
          hint1: 'v² = 0² + 2 × 10 × 45.',
          hint2: 'v² = 0 + 900.',
          hint3: 'v² = 900',
          answer: 900, tolerance: 0, unit: '',
          explanation: 'v² = 0 + 2 × 10 × 45 = 900.',
        },
        {
          prompt: 'Find v by taking the square root.',
          hint1: 'v = √900.',
          hint2: 'What number squared equals 900?',
          hint3: 'v = 30',
          answer: 30, tolerance: 0, unit: 'm/s',
          explanation: 'v = √900 = 30 m/s.',
        },
      ],
      workedExample: {
        question: 'Find v using v² = u² + 2as when u = 0, a = 5, s = 20.',
        steps: [
          'Step 1 — substitute: v² = 0 + 2×5×20 = 200',
          'Step 2 — v = √200 ≈ <strong>14.14</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "v = 30 m/s",
        grade6: "v² = 0 + 2×10×45 = 900. v = √900 = 30 m/s.",
        grade8: "v² = 2as = 900 (since u=0). v = 30 m/s.",
      },
      examinerTip: "Substitute u = 0 first to simplify — u² = 0. Then evaluate 2 × a × s carefully before taking the square root.",
      auditStatus: 'pending',
    },
    // ── sub-B04 ──────────────────────────────────────────────
    {
      id: 'sub-B04', subtopic: 'alg-expressions', band: 'B', marks: 3,
      question: 'Make v the subject of E = ½mv².',
      steps: [
        {
          prompt: 'Multiply both sides by 2 to remove the fraction.',
          hint1: '2E = mv².',
          hint2: 'Both sides multiplied by 2.',
          hint3: '2E = mv²',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Multiply both sides by 2: 2E = mv².',
          checkType: 'skip',
        },
        {
          prompt: 'Divide both sides by m to isolate v².',
          hint1: 'v² = 2E/m.',
          hint2: 'Divide by m.',
          hint3: 'v² = 2E/m',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Divide by m: v² = 2E/m.',
          checkType: 'skip',
        },
        {
          prompt: 'Verify: if E = 100 J and m = 2 kg, what is v?',
          hint1: 'v² = 2×100/2 = 100.',
          hint2: 'v = √100.',
          hint3: 'v = 10',
          answer: 10, tolerance: 0, unit: 'm/s',
          explanation: 'v = √(2E/m) = √(200/2) = √100 = 10 m/s.',
        },
      ],
      workedExample: {
        question: 'Make h the subject of V = ⅓πr²h.',
        steps: [
          'Step 1 — ×3: 3V = πr²h',
          'Step 2 — ÷πr²: h = 3V/(πr²)',
        ],
      },
      sampleAnswer: {
        grade4: "v = √(2E/m)",
        grade6: "2E = mv². v² = 2E/m. v = √(2E/m).",
        grade8: "E = ½mv² → 2E = mv² → v² = 2E/m → v = √(2E/m). (Taking positive root.)",
      },
      examinerTip: "Work in reverse order of operations: undo ½ first (×2), then undo ×m (÷m), then undo the square (√).",
      auditStatus: 'pending',
    },
    // ── sub-B05 ──────────────────────────────────────────────
    {
      id: 'sub-B05', subtopic: 'alg-expressions', band: 'B', marks: 3,
      question: 'Make p the subject of pq + r = s.',
      steps: [
        {
          prompt: 'Isolate the pq term by subtracting r from both sides.',
          hint1: 'pq = s − r.',
          hint2: 'Subtract r.',
          hint3: 'pq = s − r',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'pq = s − r.',
          checkType: 'skip',
        },
        {
          prompt: 'Divide both sides by q.',
          hint1: 'p = (s − r)/q.',
          hint2: 'Divide by q.',
          hint3: 'p = (s − r)/q',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'p = (s − r)/q.',
          checkType: 'skip',
        },
        {
          prompt: 'Verify: if q = 3, r = 2, s = 11, what is p?',
          hint1: 'p = (11 − 2)/3.',
          hint2: 'p = 9/3.',
          hint3: 'p = 3',
          answer: 3, tolerance: 0, unit: '',
          explanation: 'p = (s−r)/q = 9/3 = 3. Check: 3×3+2=11. ✓',
        },
      ],
      workedExample: {
        question: 'Make x the subject of xy − z = w.',
        steps: [
          'Step 1 — +z: xy = w + z',
          'Step 2 — ÷y: x = (w + z)/y',
        ],
      },
      sampleAnswer: {
        grade4: "p = (s − r)/q",
        grade6: "pq = s − r. p = (s − r)/q.",
        grade8: "pq + r = s → pq = s − r → p = (s − r)/q.",
      },
      examinerTip: "Identify the term containing p, isolate it, then divide to make p the subject. Treat all other letters as constants.",
      auditStatus: 'pending',
    },
    // ── sub-B06 ──────────────────────────────────────────────
    {
      id: 'sub-B06', subtopic: 'alg-expressions', band: 'B', marks: 3,
      question: 'Make h the subject of V = ⅓πr²h.',
      steps: [
        {
          prompt: 'Multiply both sides by 3 to remove the fraction.',
          hint1: '3V = πr²h.',
          hint2: 'Both sides × 3.',
          hint3: '3V = πr²h',
          answer: 0, tolerance: 0, unit: '',
          explanation: '3V = πr²h.',
          checkType: 'skip',
        },
        {
          prompt: 'Divide both sides by πr² to isolate h.',
          hint1: 'h = 3V/(πr²).',
          hint2: 'Divide by πr².',
          hint3: 'h = 3V/(πr²)',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'h = 3V/(πr²).',
          checkType: 'skip',
        },
        {
          prompt: 'Verify: if r = 3, V = 12π, what is h?',
          hint1: 'h = 3 × 12π / (π × 9).',
          hint2: 'h = 36π / 9π.',
          hint3: 'h = 4',
          answer: 4, tolerance: 0, unit: '',
          explanation: 'h = 36π/9π = 4. Check: V = ⅓π(9)(4) = 12π. ✓',
        },
      ],
      workedExample: {
        question: 'Make r the subject of V = ⅓πr²h.',
        steps: [
          'Step 1 — ×3: 3V = πr²h',
          'Step 2 — ÷πh: r² = 3V/(πh)',
          'Step 3 — √: r = √(3V/(πh))',
        ],
      },
      sampleAnswer: {
        grade4: "h = 3V/(πr²)",
        grade6: "3V = πr²h. h = 3V/(πr²).",
        grade8: "V = ⅓πr²h → 3V = πr²h → h = 3V/(πr²).",
      },
      examinerTip: "Multiply both sides by 3 first to deal with the ⅓. Then divide by everything multiplying h. The formula for the volume of a cone is on the formula sheet.",
      auditStatus: 'pending',
    },
    // ── sub-C03 ──────────────────────────────────────────────
    {
      id: 'sub-C03', subtopic: 'alg-expressions', band: 'C', marks: 4,
      question: 'Make x the subject of y = (2x − 1)/(x + 3).',
      steps: [
        {
          prompt: 'Multiply both sides by (x + 3) to clear the denominator.',
          hint1: 'y(x + 3) = 2x − 1.',
          hint2: 'Expand: yx + 3y = 2x − 1.',
          hint3: 'yx + 3y = 2x − 1',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'y(x+3) = 2x−1 → yx+3y = 2x−1.',
          checkType: 'skip',
        },
        {
          prompt: 'Collect all x terms on one side.',
          hint1: 'yx − 2x = −1 − 3y.',
          hint2: 'x(y − 2) = −1 − 3y.',
          hint3: 'x(y − 2) = −1 − 3y',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'yx − 2x = −1 − 3y → x(y−2) = −1−3y.',
          checkType: 'skip',
        },
        {
          prompt: 'Divide by (y − 2) to isolate x.',
          hint1: 'x = (−1 − 3y)/(y − 2).',
          hint2: 'This can also be written as x = −(1 + 3y)/(y − 2).',
          hint3: 'x = (−1 − 3y)/(y − 2)',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'x = (−1−3y)/(y−2).',
          checkType: 'skip',
        },
        {
          prompt: 'Verify: if y = 1, what is x?',
          hint1: 'x = (−1−3)/(1−2) = −4/(−1).',
          hint2: 'x = 4.',
          hint3: 'Check: (2×4−1)/(4+3) = 7/7 = 1 ✓',
          answer: 4, tolerance: 0, unit: '',
          explanation: 'x = (−1−3)/(1−2) = 4. Check: (8−1)/(4+3) = 7/7 = 1. ✓',
        },
      ],
      workedExample: {
        question: 'Make x the subject of y = (4x + 1)/(x − 2).',
        steps: [
          'Step 1 — ×(x−2): y(x−2) = 4x+1 → yx−2y = 4x+1',
          'Step 2 — collect: yx−4x = 1+2y → x(y−4) = 1+2y',
          'Step 3 — ÷(y−4): x = (1+2y)/(y−4)',
        ],
      },
      sampleAnswer: {
        grade4: "x = (−1 − 3y)/(y − 2)",
        grade6: "y(x+3)=2x−1 → yx+3y=2x−1 → x(y−2)=−1−3y → x=(−1−3y)/(y−2).",
        grade8: "Multiply out, collect x terms, factorise, divide. x=(−1−3y)/(y−2). Check y=1: x=4 ✓.",
      },
      examinerTip: "After multiplying out, collect ALL x terms to one side, factorise out x, then divide. Students often forget to move all x terms.",
      auditStatus: 'pending',
    },
    // ── sub-C04 ──────────────────────────────────────────────
    {
      id: 'sub-C04', subtopic: 'alg-expressions', band: 'C', marks: 4,
      question: 'The formula for the period of a pendulum is T = 2π√(l/g). Make l the subject.',
      steps: [
        {
          prompt: 'Divide both sides by 2π.',
          hint1: 'T/(2π) = √(l/g).',
          hint2: 'This isolates the square root.',
          hint3: 'T/(2π) = √(l/g)',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Divide by 2π: T/(2π) = √(l/g).',
          checkType: 'skip',
        },
        {
          prompt: 'Square both sides.',
          hint1: 'T²/(4π²) = l/g.',
          hint2: '(T/(2π))² = T²/(4π²).',
          hint3: 'T²/(4π²) = l/g',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Square both sides: T²/(4π²) = l/g.',
          checkType: 'skip',
        },
        {
          prompt: 'Multiply both sides by g.',
          hint1: 'l = gT²/(4π²).',
          hint2: 'Multiply by g.',
          hint3: 'l = gT²/(4π²)',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'l = gT²/(4π²).',
          checkType: 'skip',
        },
        {
          prompt: 'Verify: if g = 10 and T = 2π, what is l?',
          hint1: 'l = 10 × (2π)²/(4π²).',
          hint2: 'l = 10 × 4π²/(4π²).',
          hint3: 'l = 10',
          answer: 10, tolerance: 0, unit: 'm',
          explanation: 'l = g×4π²/(4π²) = g = 10. Check: T=2π√(10/10)=2π. ✓',
        },
      ],
      workedExample: {
        question: 'Make h the subject of v = √(2gh).',
        steps: [
          'Step 1 — square: v² = 2gh',
          'Step 2 — ÷2g: h = v²/(2g)',
        ],
      },
      sampleAnswer: {
        grade4: "l = gT²/(4π²)",
        grade6: "÷2π: T/(2π)=√(l/g). Square: T²/4π²=l/g. ×g: l=gT²/(4π²).",
        grade8: "T=2π√(l/g) → T/(2π)=√(l/g) → T²/(4π²)=l/g → l=gT²/(4π²).",
      },
      examinerTip: "Isolate the square root first, then square both sides. Squaring both sides of T=2π√(l/g) directly gives T²=4π²(l/g), which also works.",
      auditStatus: 'pending',
    },
"""

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()
pos = content.find(MARKER)
if pos == -1:
    print('MARKER NOT FOUND'); exit(1)
print(f'Inserting at char {pos}')
with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content[:pos] + NEW + content[pos:])
print('Done — batch 1 (14 questions: eq + sub)')
