#!/usr/bin/env python3
# Batch 2: fn-A02/03/04/05, fn-B02/03/04/05/06, fn-C02/03/04 = 12 questions

FILE = r'C:\Users\jason\OneDrive\Documents\GitHub\mabel-gcse\js\maths-questions.js'
MARKER = "    {\n      id: 'pro-A01'"

NEW = r"""
    // ── fn-A02 ───────────────────────────────────────────────
    {
      id: 'fn-A02', subtopic: 'alg-functions', band: 'A', marks: 2,
      question: 'g(x) = x² − 4. Find g(3) and g(−2).',
      steps: [
        {
          prompt: 'Find g(3) by substituting x = 3.',
          hint1: 'g(3) = 3² − 4.',
          hint2: '9 − 4 = ?',
          hint3: 'g(3) = 5',
          answer: 5, tolerance: 0, unit: '',
          explanation: 'g(3) = 9 − 4 = 5.',
        },
        {
          prompt: 'Find g(−2) by substituting x = −2.',
          hint1: 'g(−2) = (−2)² − 4.',
          hint2: '4 − 4 = ?',
          hint3: 'g(−2) = 0',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'g(−2) = 4 − 4 = 0.',
        },
      ],
      workedExample: {
        question: 'h(x) = 2x² + 1. Find h(3) and h(−1).',
        steps: [
          'Step 1 — h(3): 2(9)+1 = <strong>19</strong>',
          'Step 2 — h(−1): 2(1)+1 = <strong>3</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "g(3)=5, g(−2)=0",
        grade6: "g(3)=9−4=5. g(−2)=4−4=0.",
        grade8: "g(3)=3²−4=5. g(−2)=(−2)²−4=4−4=0.",
      },
      examinerTip: "(−2)² = +4, not −4. Squaring always gives a positive result.",
      auditStatus: 'pending',
    },
    // ── fn-A03 ───────────────────────────────────────────────
    {
      id: 'fn-A03', subtopic: 'alg-functions', band: 'A', marks: 2,
      question: 'h(x) = 2x + 5. Find the value of x when h(x) = 13.',
      steps: [
        {
          prompt: 'Set h(x) = 13 and solve for x.',
          hint1: '2x + 5 = 13. Subtract 5.',
          hint2: '2x = 8.',
          hint3: '2x = 8',
          answer: 8, tolerance: 0, unit: '',
          explanation: '2x = 13 − 5 = 8.',
        },
        {
          prompt: 'Divide by 2.',
          hint1: 'x = 8 ÷ 2.',
          hint2: 'x = ?',
          hint3: 'x = 4',
          answer: 4, tolerance: 0, unit: '',
          explanation: 'x = 8 ÷ 2 = 4.',
        },
      ],
      workedExample: {
        question: 'p(x) = 3x − 1. Find x when p(x) = 11.',
        steps: [
          'Step 1 — set equal: 3x−1=11 → 3x=12',
          'Step 2 — solve: x = <strong>4</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "x = 4",
        grade6: "2x+5=13 → 2x=8 → x=4.",
        grade8: "h(x)=13 → 2x+5=13 → x=4. Check: h(4)=13. ✓",
      },
      examinerTip: "Setting h(x) = k and solving for x is the inverse of evaluating — you're working backwards.",
      auditStatus: 'pending',
    },
    // ── fn-A04 ───────────────────────────────────────────────
    {
      id: 'fn-A04', subtopic: 'alg-functions', band: 'A', marks: 2,
      question: 'f(x) = x² + 2x − 3. Find f(4).',
      steps: [
        {
          prompt: 'Substitute x = 4. Calculate 4² + 2×4.',
          hint1: '4² = 16. 2×4 = 8.',
          hint2: '16 + 8 = ?',
          hint3: '24',
          answer: 24, tolerance: 0, unit: '',
          explanation: '4² + 2×4 = 16 + 8 = 24.',
        },
        {
          prompt: 'Subtract 3 to find f(4).',
          hint1: '24 − 3 = ?',
          hint2: '24 − 3 = 21.',
          hint3: 'f(4) = 21',
          answer: 21, tolerance: 0, unit: '',
          explanation: 'f(4) = 24 − 3 = 21.',
        },
      ],
      workedExample: {
        question: 'f(x) = x² − 3x + 1. Find f(5).',
        steps: [
          'Step 1 — 5² − 3×5 = 25 − 15 = 10',
          'Step 2 — f(5) = 10 + 1 = <strong>11</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "f(4) = 21",
        grade6: "f(4) = 16+8−3 = 21.",
        grade8: "f(4) = 4²+2(4)−3 = 16+8−3 = 21.",
      },
      examinerTip: "Substitute carefully and apply order of operations: powers first, then multiplication, then addition/subtraction.",
      auditStatus: 'pending',
    },
    // ── fn-A05 ───────────────────────────────────────────────
    {
      id: 'fn-A05', subtopic: 'alg-functions', band: 'A', marks: 2,
      question: 'p(x) = 3/x. Find p(6) and p(−3).',
      steps: [
        {
          prompt: 'Find p(6) by substituting x = 6.',
          hint1: 'p(6) = 3/6.',
          hint2: 'Simplify 3/6.',
          hint3: 'p(6) = 0.5',
          answer: 0.5, tolerance: 0, unit: '',
          explanation: 'p(6) = 3/6 = 0.5.',
        },
        {
          prompt: 'Find p(−3) by substituting x = −3.',
          hint1: 'p(−3) = 3/(−3).',
          hint2: 'A positive divided by a negative is negative.',
          hint3: 'p(−3) = −1',
          answer: -1, tolerance: 0, unit: '',
          explanation: 'p(−3) = 3/(−3) = −1.',
        },
      ],
      workedExample: {
        question: 'q(x) = 10/x. Find q(5) and q(−2).',
        steps: [
          'Step 1 — q(5): 10/5 = <strong>2</strong>',
          'Step 2 — q(−2): 10/(−2) = <strong>−5</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "p(6)=0.5, p(−3)=−1",
        grade6: "p(6)=3/6=0.5. p(−3)=3/(−3)=−1.",
        grade8: "p(6)=1/2=0.5. p(−3)=−1. Note: p(0) is undefined (division by zero).",
      },
      examinerTip: "3 divided by a negative number gives a negative answer. p(0) is undefined — you can't divide by zero.",
      auditStatus: 'pending',
    },
    // ── fn-B02 ───────────────────────────────────────────────
    {
      id: 'fn-B02', subtopic: 'alg-functions', band: 'B', marks: 3,
      question: 'f(x) = 2x − 3 and g(x) = x + 4. Find fg(5) and fg(x).',
      steps: [
        {
          prompt: 'Find g(5) first.',
          hint1: 'g(5) = 5 + 4.',
          hint2: 'g(5) = 9.',
          hint3: '9',
          answer: 9, tolerance: 0, unit: '',
          explanation: 'fg means apply g first: g(5) = 9.',
        },
        {
          prompt: 'Now find f(9).',
          hint1: 'f(9) = 2×9 − 3.',
          hint2: '18 − 3 = ?',
          hint3: 'f(9) = 15',
          answer: 15, tolerance: 0, unit: '',
          explanation: 'f(g(5)) = f(9) = 18−3 = 15.',
        },
        {
          prompt: 'Find fg(x) as a formula.',
          hint1: 'fg(x) = f(x+4) = 2(x+4) − 3.',
          hint2: '2x + 8 − 3 = 2x + 5.',
          hint3: 'fg(x) = 2x + 5',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'fg(x) = f(x+4) = 2(x+4)−3 = 2x+5.',
          checkType: 'skip',
          displayAnswer: 'fg(x) = 2x + 5',
        },
      ],
      workedExample: {
        question: 'f(x) = x+1, g(x) = 2x. Find gf(4) and gf(x).',
        steps: [
          'Step 1 — f(4)=5. g(5)=10. gf(4)=<strong>10</strong>',
          'Step 2 — gf(x)=g(x+1)=2(x+1)=<strong>2x+2</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "fg(5) = 15, fg(x) = 2x+5",
        grade6: "g(5)=9. f(9)=15. fg(x)=f(x+4)=2(x+4)−3=2x+5.",
        grade8: "fg: apply g first then f. fg(5)=f(9)=15. fg(x)=2(x+4)−3=2x+5.",
      },
      examinerTip: "fg means 'apply g first, then f' — read right to left. fg ≠ gf in general.",
      auditStatus: 'pending',
    },
    // ── fn-B03 ───────────────────────────────────────────────
    {
      id: 'fn-B03', subtopic: 'alg-functions', band: 'B', marks: 3,
      question: 'f(x) = x + 3 and g(x) = x². Show that gf(x) = x² + 6x + 9. Hence solve gf(x) = 25.',
      steps: [
        {
          prompt: 'Find gf(x) = g(f(x)) = g(x+3). What is the constant term when expanded?',
          hint1: 'g(x+3) = (x+3)².',
          hint2: 'Expand: x² + 6x + 9.',
          hint3: 'Constant = 9',
          answer: 9, tolerance: 0, unit: '',
          explanation: 'gf(x) = (x+3)² = x²+6x+9. ✓',
        },
        {
          prompt: 'Solve gf(x) = 25: (x+3)² = 25.',
          hint1: 'Take the square root: x+3 = ±5.',
          hint2: 'x+3 = 5 → x = 2.',
          hint3: 'x = 2 (or x = −8)',
          answer: 2, tolerance: 0, unit: '',
          explanation: '(x+3)²=25 → x+3=±5 → x=2 or x=−8.',
        },
        {
          prompt: 'State the other solution.',
          hint1: 'x+3 = −5 → x = ?',
          hint2: 'x = −5 − 3 = −8.',
          hint3: 'x = −8',
          answer: -8, tolerance: 0, unit: '',
          explanation: 'x = −8 also satisfies gf(x)=25.',
        },
      ],
      workedExample: {
        question: 'f(x)=x−2, g(x)=x². Find gf(x) and solve gf(x)=9.',
        steps: [
          'gf(x) = (x−2)² = x²−4x+4',
          '(x−2)²=9 → x−2=±3 → x=5 or x=−1',
        ],
      },
      sampleAnswer: {
        grade4: "x = 2 or x = −8",
        grade6: "gf(x)=(x+3)²=x²+6x+9. Set =25: x+3=±5. x=2 or x=−8.",
        grade8: "gf(x)=(x+3)²=x²+6x+9 ✓. (x+3)²=25 → x+3=±5 → x=2 or x=−8.",
      },
      examinerTip: "When taking square roots in equations, remember ±. Both +5 and −5 square to give 25.",
      auditStatus: 'pending',
    },
    // ── fn-B04 ───────────────────────────────────────────────
    {
      id: 'fn-B04', subtopic: 'alg-functions', band: 'B', marks: 3,
      question: 'f(x) = 4x − 1. Find f⁻¹(x) and hence evaluate f⁻¹(7).',
      steps: [
        {
          prompt: 'Write y = 4x − 1, swap x and y, then solve for y.',
          hint1: 'Swap: x = 4y − 1. Add 1: x+1 = 4y.',
          hint2: 'Divide by 4: y = (x+1)/4.',
          hint3: 'f⁻¹(x) = (x+1)/4',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'f⁻¹(x) = (x+1)/4.',
          checkType: 'skip',
          displayAnswer: 'f⁻¹(x) = (x+1)/4',
        },
        {
          prompt: 'The denominator of f⁻¹(x) is 4. Find the numerator when x = 7.',
          hint1: '7 + 1 = ?',
          hint2: '7 + 1 = 8',
          hint3: '8',
          answer: 8, tolerance: 0, unit: '',
          explanation: 'f⁻¹(7): numerator = 7+1 = 8.',
        },
        {
          prompt: 'Calculate f⁻¹(7) = 8/4.',
          hint1: '8 ÷ 4 = ?',
          hint2: '8 ÷ 4 = 2.',
          hint3: 'f⁻¹(7) = 2',
          answer: 2, tolerance: 0, unit: '',
          explanation: 'f⁻¹(7) = 8/4 = 2. Check: f(2) = 8−1 = 7. ✓',
        },
      ],
      workedExample: {
        question: 'f(x) = 3x + 2. Find f⁻¹(x) and evaluate f⁻¹(11).',
        steps: [
          'Step 1 — swap and solve: f⁻¹(x) = (x−2)/3',
          'Step 2 — f⁻¹(11) = 9/3 = <strong>3</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "f⁻¹(x) = (x+1)/4, f⁻¹(7) = 2",
        grade6: "y=4x−1 → x=4y−1 → y=(x+1)/4. f⁻¹(x)=(x+1)/4. f⁻¹(7)=8/4=2.",
        grade8: "f⁻¹(x)=(x+1)/4. f⁻¹(7)=2. Verify: f(2)=7 ✓.",
      },
      examinerTip: "To find an inverse: write y=f(x), swap x and y, rearrange for y. Always verify by checking f(f⁻¹(x)) = x.",
      auditStatus: 'pending',
    },
    // ── fn-B05 ───────────────────────────────────────────────
    {
      id: 'fn-B05', subtopic: 'alg-functions', band: 'B', marks: 3,
      question: 'f(x) = 2x + 1. Find ff(3).',
      steps: [
        {
          prompt: 'Find f(3) first.',
          hint1: 'f(3) = 2×3 + 1.',
          hint2: '6 + 1 = ?',
          hint3: 'f(3) = 7',
          answer: 7, tolerance: 0, unit: '',
          explanation: 'f(3) = 2(3)+1 = 7.',
        },
        {
          prompt: 'Now find ff(3) = f(f(3)) = f(7).',
          hint1: 'f(7) = 2×7 + 1.',
          hint2: '14 + 1 = ?',
          hint3: 'ff(3) = 15',
          answer: 15, tolerance: 0, unit: '',
          explanation: 'ff(3) = f(7) = 2(7)+1 = 15.',
        },
        {
          prompt: 'Express ff(x) as a single formula.',
          hint1: 'ff(x) = f(2x+1) = 2(2x+1)+1 = 4x+3.',
          hint2: 'ff(x) = 4x+3.',
          hint3: 'Check: ff(3) = 4(3)+3 = 15 ✓',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'ff(x) = 4x+3.',
          checkType: 'skip',
          displayAnswer: 'ff(x) = 4x + 3',
        },
      ],
      workedExample: {
        question: 'g(x) = 3x − 2. Find gg(2).',
        steps: [
          'Step 1 — g(2) = 3(2)−2 = 4',
          'Step 2 — gg(2) = g(4) = 3(4)−2 = <strong>10</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "ff(3) = 15",
        grade6: "f(3)=7. ff(3)=f(7)=15.",
        grade8: "f(3)=7. f(7)=15. Alternatively ff(x)=4x+3 → ff(3)=15.",
      },
      examinerTip: "ff means apply f twice. Evaluate the inner f first, then apply f again to the result.",
      auditStatus: 'pending',
    },
    // ── fn-B06 ───────────────────────────────────────────────
    {
      id: 'fn-B06', subtopic: 'alg-functions', band: 'B', marks: 3,
      question: 'f(x) = x² + 1 and g(x) = 2x − 3. Find gf(−2) and fg(−2).',
      steps: [
        {
          prompt: 'Find f(−2).',
          hint1: 'f(−2) = (−2)² + 1.',
          hint2: '4 + 1 = ?',
          hint3: 'f(−2) = 5',
          answer: 5, tolerance: 0, unit: '',
          explanation: 'f(−2) = 4+1 = 5.',
        },
        {
          prompt: 'Find gf(−2) = g(5).',
          hint1: 'g(5) = 2×5 − 3.',
          hint2: '10 − 3 = ?',
          hint3: 'gf(−2) = 7',
          answer: 7, tolerance: 0, unit: '',
          explanation: 'gf(−2) = g(5) = 10−3 = 7.',
        },
        {
          prompt: 'Find g(−2), then fg(−2) = f(g(−2)).',
          hint1: 'g(−2) = 2(−2)−3 = −7. f(−7) = (−7)²+1 = 50.',
          hint2: 'fg(−2) = ?',
          hint3: 'fg(−2) = 50',
          answer: 50, tolerance: 0, unit: '',
          explanation: 'g(−2)=−7. fg(−2)=f(−7)=49+1=50.',
        },
      ],
      workedExample: {
        question: 'f(x)=x²−1, g(x)=3x. Find gf(2) and fg(2).',
        steps: [
          'gf(2): f(2)=3. g(3)=<strong>9</strong>',
          'fg(2): g(2)=6. f(6)=35. fg(2)=<strong>35</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "gf(−2)=7, fg(−2)=50",
        grade6: "f(−2)=5. gf(−2)=g(5)=7. g(−2)=−7. fg(−2)=f(−7)=50.",
        grade8: "gf(−2)=g(f(−2))=g(5)=7. fg(−2)=f(g(−2))=f(−7)=50. Note gf≠fg.",
      },
      examinerTip: "gf and fg are generally different. Always identify which function is applied first (right to left order).",
      auditStatus: 'pending',
    },
    // ── fn-C02 ───────────────────────────────────────────────
    {
      id: 'fn-C02', subtopic: 'alg-functions', band: 'C', marks: 4,
      question: 'f(x) = 2x + 3. Find f⁻¹(x). Hence solve the equation f(x) = f⁻¹(x).',
      steps: [
        {
          prompt: 'Find f⁻¹(x).',
          hint1: 'y=2x+3 → swap → x=2y+3 → y=(x−3)/2.',
          hint2: 'f⁻¹(x) = (x−3)/2.',
          hint3: 'f⁻¹(x) = (x−3)/2',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'f⁻¹(x) = (x−3)/2.',
          checkType: 'skip',
          displayAnswer: 'f⁻¹(x) = (x−3)/2',
        },
        {
          prompt: 'Set f(x) = f⁻¹(x) and multiply through by 2.',
          hint1: '2x+3 = (x−3)/2. Multiply by 2: 4x+6 = x−3.',
          hint2: '4x − x = −3 − 6.',
          hint3: '3x = −9',
          answer: -9, tolerance: 0, unit: '',
          explanation: '4x+6=x−3 → 3x=−9.',
        },
        {
          prompt: 'Solve 3x = −9.',
          hint1: 'x = −9 ÷ 3.',
          hint2: 'x = ?',
          hint3: 'x = −3',
          answer: -3, tolerance: 0, unit: '',
          explanation: 'x = −3.',
        },
        {
          prompt: 'Verify: f(−3) and f⁻¹(−3) should be equal.',
          hint1: 'f(−3) = 2(−3)+3 = −3. f⁻¹(−3) = (−3−3)/2 = −3.',
          hint2: 'Both give −3.',
          hint3: 'f(−3) = f⁻¹(−3) = −3. ✓',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Both equal −3 ✓. (x=−3 is a fixed point.)',
          checkType: 'skip',
          displayAnswer: 'f(−3) = f⁻¹(−3) = −3 ✓',
        },
      ],
      workedExample: {
        question: 'f(x) = 3x−1. Find f⁻¹(x). Solve f(x) = f⁻¹(x).',
        steps: [
          'f⁻¹(x) = (x+1)/3',
          '3x−1=(x+1)/3 → 9x−3=x+1 → 8x=4 → x=½',
        ],
      },
      sampleAnswer: {
        grade4: "x = −3",
        grade6: "f⁻¹(x)=(x−3)/2. Set equal: 2x+3=(x−3)/2 → 4x+6=x−3 → 3x=−9 → x=−3.",
        grade8: "f⁻¹(x)=(x−3)/2. f(x)=f⁻¹(x): multiply by 2 → 4x+6=x−3 → x=−3. Check: f(−3)=−3=f⁻¹(−3) ✓.",
      },
      examinerTip: "When setting f(x)=f⁻¹(x), multiply through by the denominator to clear fractions before collecting terms.",
      auditStatus: 'pending',
    },
    // ── fn-C03 ───────────────────────────────────────────────
    {
      id: 'fn-C03', subtopic: 'alg-functions', band: 'C', marks: 4,
      question: 'f(x) = 3x + 1. (a) Show that ff(x) = 9x + 4. (b) Solve ff(x) = 22.',
      steps: [
        {
          prompt: 'Find ff(x) = f(f(x)) = f(3x+1). What is the constant term after expanding?',
          hint1: 'ff(x) = 3(3x+1)+1 = 9x+3+1.',
          hint2: '9x+3+1 = 9x+4.',
          hint3: 'Constant = 4',
          answer: 4, tolerance: 0, unit: '',
          explanation: 'ff(x) = 9x+4. Constant = 4. ✓',
        },
        {
          prompt: 'ff(x) = 9x + 4 is confirmed. Set 9x + 4 = 22.',
          hint1: '9x = 22 − 4 = 18.',
          hint2: 'x = 18 ÷ 9.',
          hint3: 'x = 2',
          answer: 18, tolerance: 0, unit: '',
          explanation: '9x = 22−4 = 18.',
        },
        {
          prompt: 'Solve for x.',
          hint1: 'x = 18 ÷ 9.',
          hint2: 'x = ?',
          hint3: 'x = 2',
          answer: 2, tolerance: 0, unit: '',
          explanation: 'x = 2.',
        },
        {
          prompt: 'Verify: f(2) = 7. f(7) = 22?',
          hint1: 'f(2) = 3(2)+1 = 7.',
          hint2: 'f(7) = 3(7)+1 = 22. ✓',
          hint3: 'ff(2) = 22 ✓',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'f(2)=7, f(7)=22. ✓',
          checkType: 'skip',
          displayAnswer: 'ff(2) = 22 ✓',
        },
      ],
      workedExample: {
        question: 'f(x) = 2x−1. Show ff(x) = 4x−3. Solve ff(x) = 9.',
        steps: [
          'ff(x)=2(2x−1)−1=4x−3 ✓',
          '4x−3=9 → 4x=12 → x=3',
        ],
      },
      sampleAnswer: {
        grade4: "x = 2",
        grade6: "ff(x)=f(3x+1)=3(3x+1)+1=9x+4 ✓. 9x+4=22 → 9x=18 → x=2.",
        grade8: "ff(x)=9x+4 ✓. ff(x)=22 → 9x=18 → x=2. Check: f(2)=7, f(7)=22 ✓.",
      },
      examinerTip: "For ff(x), substitute the entire expression f(x) in place of x in f. Expand carefully.",
      auditStatus: 'pending',
    },
    // ── fn-C04 ───────────────────────────────────────────────
    {
      id: 'fn-C04', subtopic: 'alg-functions', band: 'C', marks: 4,
      question: 'f(x) = (2x + 1)/(x − 3). Find f⁻¹(x) and state the value of x for which f⁻¹(x) is undefined.',
      steps: [
        {
          prompt: 'Write y = (2x+1)/(x−3) and swap x and y.',
          hint1: 'Swap: x = (2y+1)/(y−3).',
          hint2: 'Multiply: x(y−3) = 2y+1.',
          hint3: 'xy − 3x = 2y + 1',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Cross-multiply after swapping: x(y−3) = 2y+1.',
          checkType: 'skip',
        },
        {
          prompt: 'Collect y terms and factorise.',
          hint1: 'xy − 2y = 3x + 1. y(x−2) = 3x+1.',
          hint2: 'y = (3x+1)/(x−2).',
          hint3: 'f⁻¹(x) = (3x+1)/(x−2)',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'f⁻¹(x) = (3x+1)/(x−2).',
          checkType: 'skip',
          displayAnswer: 'f⁻¹(x) = (3x+1)/(x−2)',
        },
        {
          prompt: 'State the value of x for which f⁻¹(x) is undefined.',
          hint1: 'The denominator (x−2) = 0 when x = ?',
          hint2: 'x − 2 = 0 → x = 2.',
          hint3: 'x = 2',
          answer: 2, tolerance: 0, unit: '',
          explanation: 'f⁻¹(x) is undefined when x = 2 (denominator = 0).',
        },
        {
          prompt: 'Verify f⁻¹(x) by finding f(f⁻¹(7)).',
          hint1: 'f⁻¹(7) = (21+1)/(7−2) = 22/5.',
          hint2: 'f(22/5) = (2×22/5+1)/(22/5−3) = (49/5)/(7/5) = 7.',
          hint3: 'f(f⁻¹(7)) = 7 ✓',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'f(f⁻¹(7)) = 7. ✓',
          checkType: 'skip',
          displayAnswer: 'f(f⁻¹(7)) = 7 ✓',
        },
      ],
      workedExample: {
        question: 'f(x) = (3x+2)/(x−4). Find f⁻¹(x) and state where it is undefined.',
        steps: [
          'Swap: x=(3y+2)/(y−4) → x(y−4)=3y+2 → xy−4x=3y+2',
          'Collect: y(x−3)=4x+2 → f⁻¹(x)=(4x+2)/(x−3)',
          'Undefined at x=3',
        ],
      },
      sampleAnswer: {
        grade4: "f⁻¹(x) = (3x+1)/(x−2), undefined at x = 2",
        grade6: "Swap and rearrange: f⁻¹(x)=(3x+1)/(x−2). Undefined when x−2=0 i.e. x=2.",
        grade8: "f⁻¹(x)=(3x+1)/(x−2). Undefined at x=2. Verify: f(f⁻¹(7))=7 ✓.",
      },
      examinerTip: "After finding f⁻¹(x), always check where the denominator equals zero — that is the excluded value from the domain.",
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
print('Done — batch 2 (12 fn questions)')
