"""
stat_q3.py — Insert 13 stat-scatter questions (4A, 5B, 4C) into js/maths-questions.js.
Inserts immediately BEFORE the cumulative-frequency section marker.
"""

import sys

FILE = 'js/maths-questions.js'
MARKER = '\n\n    // ══════════════════════════════════════════════════════════\n    // CUMULATIVE FREQUENCY & BOX PLOTS (stat-cumulative) — Higher'

NEW = r"""

    // ── stat-scatter-A02 ──────────────────────────────────────
    {
      id: 'stat-scatter-A02', subtopic: 'stat-scatter', band: 'A', marks: 2,
      question: 'Eight students’ heights (cm) and weights (kg) are recorded: heights 150, 155, 160, 162, 168, 172, 175, 180; weights 52, 55, 60, 63, 68, 70, 74, 78. Calculate the mean height and mean weight — the mean point of the data.',
      steps: [
        {
          prompt: 'Calculate the mean height.',
          hint1: 'Add all 8 heights and divide by 8.',
          hint2: '(150+155+160+162+168+172+175+180) = 1322.',
          hint3: '1322 ÷ 8 = 165.25 cm.',
          answer: 165.25, tolerance: 0.1, unit: 'cm',
          explanation: 'Mean height = 1322 ÷ 8 = 165.25 cm.',
        },
        {
          prompt: 'Calculate the mean weight.',
          hint1: 'Add all 8 weights and divide by 8.',
          hint2: '(52+55+60+63+68+70+74+78) = 520.',
          hint3: '520 ÷ 8 = 65 kg.',
          answer: 65, tolerance: 0.1, unit: 'kg',
          explanation: 'Mean weight = 520 ÷ 8 = 65 kg. The mean point is (165.25, 65).',
        },
      ],
      workedExample: {
        question: 'Three students have heights 140, 150, 160 cm and weights 45, 55, 65 kg. Find the mean point.',
        steps: [
          'Step 1 — mean height: (140+150+160) ÷ 3 = 450 ÷ 3 = <strong>150 cm</strong>',
          'Step 2 — mean weight: (45+55+65) ÷ 3 = 165 ÷ 3 = <strong>55 kg</strong>. Mean point = (150, 55).',
        ],
      },
      sampleAnswer: {
        grade4: 'Mean height = 165.25 cm, mean weight = 65 kg.',
        grade6: 'Sum of heights = 1322, mean = 1322÷8 = 165.25 cm. Sum of weights = 520, mean = 520÷8 = 65 kg.',
        grade8: 'Mean point = (165.25, 65). The line of best fit must pass through this point.',
      },
      examinerTip: 'Students often add the values correctly but divide by the wrong number — count the data points carefully.',
      auditStatus: 'pending',
    },

    // ── stat-scatter-A03 ──────────────────────────────────────
    {
      id: 'stat-scatter-A03', subtopic: 'stat-scatter', band: 'A', marks: 2,
      question: 'A scatter graph shows hours of sleep vs reaction time (ms). As hours of sleep increase, reaction time decreases. (a) What type of correlation is this? (b) What does it mean in context?',
      steps: [
        {
          prompt: 'What type of correlation is shown?',
          hint1: 'As one variable increases, the other decreases.',
          hint2: 'This is negative correlation.',
          hint3: 'Negative correlation.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'When one variable increases and the other decreases, this is negative correlation.',
          checkType: 'skip',
          displayAnswer: 'Negative correlation',
        },
        {
          prompt: 'What does this correlation mean in context?',
          hint1: 'Link the two variables in a sentence.',
          hint2: 'More sleep is linked to a faster (lower) reaction time.',
          hint3: 'As hours of sleep increase, reaction time decreases.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'In context: people who sleep more tend to react faster (lower reaction time in ms).',
          checkType: 'skip',
          displayAnswer: 'More sleep → faster reaction time',
        },
      ],
      workedExample: {
        question: 'As temperature increases, hot drink sales decrease. What type of correlation?',
        steps: [
          'As temperature rises, sales fall — one goes up, the other goes down.',
          'This is <strong>negative correlation</strong>. In context: warmer weather leads to fewer hot drinks sold.',
        ],
      },
      sampleAnswer: {
        grade4: 'Negative correlation. More sleep means faster reaction time.',
        grade6: 'Negative correlation — as sleep hours increase, reaction time (ms) decreases.',
        grade8: 'Negative correlation. As sleep hours increase, reaction time decreases. This suggests more sleep improves reaction speed, though correlation does not prove causation.',
      },
      examinerTip: 'Always write the contextual meaning using the actual variable names — do not just write "as x increases, y decreases".',
      auditStatus: 'pending',
    },

    // ── stat-scatter-A04 ──────────────────────────────────────
    {
      id: 'stat-scatter-A04', subtopic: 'stat-scatter', band: 'A', marks: 3,
      question: 'A line of best fit passes through the points (10, 5) and (40, 20). Find its equation in the form y = mx + c.',
      steps: [
        {
          prompt: 'Calculate the gradient m = (y₂ − y₁)/(x₂ − x₁).',
          hint1: 'Use (10, 5) and (40, 20).',
          hint2: 'm = (20 − 5)/(40 − 10) = 15/30.',
          hint3: 'm = 0.5.',
          answer: 0.5, tolerance: 0.01, unit: '',
          explanation: 'Gradient = 15 ÷ 30 = 0.5.',
        },
        {
          prompt: 'Find the y-intercept c using y = 0.5x + c and the point (10, 5).',
          hint1: 'Substitute x=10, y=5 into y = 0.5x + c.',
          hint2: '5 = 0.5×10 + c → 5 = 5 + c.',
          hint3: 'c = 0.',
          answer: 0, tolerance: 0, unit: '',
          explanation: '5 = 5 + c, so c = 0. The line passes through the origin.',
        },
        {
          prompt: 'Write the full equation of the line.',
          hint1: 'Use y = mx + c with m = 0.5 and c = 0.',
          hint2: 'y = 0.5x.',
          hint3: 'y = 0.5x.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Equation: y = 0.5x.',
          checkType: 'skip',
          displayAnswer: 'y = 0.5x',
        },
      ],
      workedExample: {
        question: 'A line of best fit passes through (4, 6) and (12, 14). Find its equation.',
        steps: [
          'Step 1 — gradient: m = (14−6)/(12−4) = 8/8 = <strong>1</strong>',
          'Step 2 — y-intercept: 6 = 1×4 + c → c = 2',
          'Step 3 — equation: <strong>y = x + 2</strong>',
        ],
      },
      sampleAnswer: {
        grade4: 'Gradient = 0.5, equation is y = 0.5x.',
        grade6: 'm = (20−5)/(40−10) = 0.5. Using (10,5): 5 = 5 + c, so c = 0. Equation: y = 0.5x.',
        grade8: 'm = 0.5. Substituting (10, 5): c = 0. Equation: y = 0.5x. This line passes through the origin.',
      },
      examinerTip: 'Always substitute back into the equation to verify your y-intercept — a common error is getting c = 5 by forgetting to subtract the 0.5×10 term.',
      auditStatus: 'pending',
    },

    // ── stat-scatter-A05 ──────────────────────────────────────
    {
      id: 'stat-scatter-A05', subtopic: 'stat-scatter', band: 'A', marks: 2,
      question: 'A line of best fit passes through (10, 8) and (30, 18). Estimate y when x = 25.',
      steps: [
        {
          prompt: 'Find the gradient of the line.',
          hint1: 'm = (18 − 8)/(30 − 10).',
          hint2: 'm = 10/20.',
          hint3: 'm = 0.5.',
          answer: 0.5, tolerance: 0.01, unit: '',
          explanation: 'Gradient = 10 ÷ 20 = 0.5.',
        },
        {
          prompt: 'Estimate y when x = 25. Use the point (10, 8) and the gradient.',
          hint1: 'y = 8 + 0.5 × (25 − 10).',
          hint2: 'y = 8 + 0.5 × 15 = 8 + 7.5.',
          hint3: 'y = 15.5.',
          answer: 15.5, tolerance: 0.1, unit: '',
          explanation: 'y = 8 + 0.5 × 15 = 15.5. Since 25 is within the data range (10–30), this is interpolation.',
        },
      ],
      workedExample: {
        question: 'A line of best fit passes through (5, 4) and (25, 14). Estimate y when x = 15.',
        steps: [
          'Step 1 — gradient: m = (14−4)/(25−5) = 10/20 = <strong>0.5</strong>',
          'Step 2 — estimate: y = 4 + 0.5×(15−5) = 4 + 5 = <strong>9</strong>',
        ],
      },
      sampleAnswer: {
        grade4: 'y = 15.5 when x = 25.',
        grade6: 'm = (18−8)/(30−10) = 0.5. y = 8 + 0.5×15 = 15.5.',
        grade8: 'm = 0.5. At x=25: y = 8 + 0.5(25−10) = 15.5. This is interpolation (x=25 is within the data range 10–30).',
      },
      examinerTip: 'Use a known point plus the gradient to estimate — avoid writing the full equation if the question only asks for one estimate.',
      auditStatus: 'pending',
    },

    // ── stat-scatter-B02 ──────────────────────────────────────
    {
      id: 'stat-scatter-B02', subtopic: 'stat-scatter', band: 'B', marks: 3,
      question: 'A line of best fit has equation y = 2.5x + 3. The data range is 2 ≤ x ≤ 12. (a) Estimate y when x = 7. (b) Estimate x when y = 28. (c) Is x = 15 interpolation or extrapolation?',
      steps: [
        {
          prompt: 'Estimate y when x = 7.',
          hint1: 'Substitute x = 7 into y = 2.5x + 3.',
          hint2: 'y = 2.5×7 + 3 = 17.5 + 3.',
          hint3: 'y = 20.5.',
          answer: 20.5, tolerance: 0.1, unit: '',
          explanation: 'y = 2.5(7) + 3 = 17.5 + 3 = 20.5.',
        },
        {
          prompt: 'Estimate x when y = 28.',
          hint1: 'Set 28 = 2.5x + 3 and solve for x.',
          hint2: '2.5x = 25 → x = 10.',
          hint3: 'x = 10.',
          answer: 10, tolerance: 0.1, unit: '',
          explanation: '28 − 3 = 25. x = 25 ÷ 2.5 = 10.',
        },
        {
          prompt: 'Is x = 15 interpolation or extrapolation? Justify your answer.',
          hint1: 'Check whether x = 15 is inside or outside the data range 2 ≤ x ≤ 12.',
          hint2: '15 > 12, so it is outside the data range.',
          hint3: 'Extrapolation — x = 15 is beyond the data range.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'x = 15 is beyond the maximum data value of 12, so this is extrapolation and is less reliable.',
          checkType: 'skip',
          displayAnswer: 'Extrapolation',
        },
      ],
      workedExample: {
        question: 'Line: y = 3x + 1. Data range 1 ≤ x ≤ 9. At x = 4: y = ? At y = 22: x = ? Is x = 11 extrapolation?',
        steps: [
          'Step 1 — at x=4: y = 3×4+1 = <strong>13</strong>',
          'Step 2 — at y=22: 22=3x+1 → x = 21/3 = <strong>7</strong>',
          'Step 3 — x=11 > 9 (max data), so <strong>extrapolation</strong> — less reliable.',
        ],
      },
      sampleAnswer: {
        grade4: 'y = 20.5 when x = 7. x = 10 when y = 28. x = 15 is extrapolation.',
        grade6: '(a) y=2.5(7)+3=20.5. (b) 2.5x=25, x=10. (c) x=15 is outside data range (>12) — extrapolation.',
        grade8: '(a) 20.5. (b) x=10. (c) Extrapolation — x=15 exceeds the data range so the estimate is less reliable as the trend may not continue.',
      },
      examinerTip: 'For interpolation/extrapolation questions, always state the data range and compare explicitly — just writing "outside the range" without justification loses a mark.',
      auditStatus: 'pending',
    },

    // ── stat-scatter-B03 ──────────────────────────────────────
    {
      id: 'stat-scatter-B03', subtopic: 'stat-scatter', band: 'B', marks: 3,
      question: 'Five data points are: (1,3), (2,5), (3,6), (4,9), (5,11). Calculate the mean point and, using gradient ≈ 2, estimate y when x = 3.5. Is this interpolation or extrapolation?',
      steps: [
        {
          prompt: 'Calculate the mean y-value (ȳ).',
          hint1: 'Add all y-values: 3+5+6+9+11 = 34.',
          hint2: '34 ÷ 5 = 6.8.',
          hint3: 'ȳ = 6.8. (Mean x = 3.)',
          answer: 6.8, tolerance: 0.05, unit: '',
          explanation: 'Mean x = (1+2+3+4+5)/5 = 3. Mean y = 34/5 = 6.8. Mean point = (3, 6.8).',
        },
        {
          prompt: 'Using gradient m = 2 and the mean point (3, 6.8), estimate y when x = 3.5.',
          hint1: 'Line through (3, 6.8) with m=2: y = 2x + c. Find c first.',
          hint2: 'c = 6.8 − 2×3 = 0.8. So y = 2x + 0.8.',
          hint3: 'y = 2(3.5) + 0.8 = 7.8.',
          answer: 7.8, tolerance: 0.2, unit: '',
          explanation: 'y = 2(3.5) + 0.8 = 7 + 0.8 = 7.8.',
        },
        {
          prompt: 'Is x = 3.5 interpolation or extrapolation?',
          hint1: 'The data x-values range from 1 to 5.',
          hint2: '3.5 is between 1 and 5.',
          hint3: 'Interpolation — x = 3.5 is within the data range.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'x = 3.5 is within the range 1–5, so this is interpolation and is more reliable.',
          checkType: 'skip',
          displayAnswer: 'Interpolation',
        },
      ],
      workedExample: {
        question: 'Points (2,4), (4,8), (6,10). Mean point? At x = 3 using m ≈ 1.5?',
        steps: [
          'Step 1 — mean: x̅ = 4, ȳ = 7.33. Mean point = (4, 7.33).',
          'Step 2 — c = 7.33−1.5×4 = 1.33. At x=3: y = 1.5×3+1.33 = <strong>5.83</strong>',
          'Step 3 — x=3 is within range 2–6: <strong>interpolation</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'Mean point = (3, 6.8). y = 7.8 at x = 3.5. Interpolation.',
        grade6: 'Mean x=3, mean y=6.8. m=2, so y=2x+0.8. At x=3.5: y=7.8. Interpolation (3.5 within range 1–5).',
        grade8: 'Mean point (3, 6.8). y=2x+0.8. At x=3.5: y=7.8. Interpolation — more reliable than extrapolation as x=3.5 lies within the observed data range.',
      },
      examinerTip: 'Show the mean point calculation clearly — the line of best fit must pass through the mean point and this is a common mark.',
      auditStatus: 'pending',
    },

    // ── stat-scatter-B04 ──────────────────────────────────────
    {
      id: 'stat-scatter-B04', subtopic: 'stat-scatter', band: 'B', marks: 2,
      question: 'A student estimates a line of best fit as y = 3x + 2. For the data point (4, 16), find the residual (actual − predicted).',
      steps: [
        {
          prompt: 'Find the predicted value when x = 4.',
          hint1: 'Substitute x = 4 into y = 3x + 2.',
          hint2: 'y = 3×4 + 2 = 14.',
          hint3: 'Predicted value = 14.',
          answer: 14, tolerance: 0, unit: '',
          explanation: 'Predicted y = 3(4) + 2 = 12 + 2 = 14.',
        },
        {
          prompt: 'Calculate the residual.',
          hint1: 'Residual = actual − predicted.',
          hint2: '16 − 14 = 2.',
          hint3: 'Residual = 2. The data point lies above the line.',
          answer: 2, tolerance: 0, unit: '',
          explanation: 'Residual = 16 − 14 = 2. A positive residual means the actual value is above the line of best fit.',
        },
      ],
      workedExample: {
        question: 'Line of best fit: y = 2x + 5. Data point (3, 13). Find the residual.',
        steps: [
          'Step 1 — predicted: y = 2×3+5 = <strong>11</strong>',
          'Step 2 — residual: 13 − 11 = <strong>2</strong> (point is above the line)',
        ],
      },
      sampleAnswer: {
        grade4: 'Predicted = 14. Residual = 2.',
        grade6: 'Predicted: y=3(4)+2=14. Residual = 16−14 = 2. The data point is above the line of best fit.',
        grade8: 'Predicted y=14. Residual=16−14=+2. Positive residual indicates the actual value exceeds the model’s prediction at this point.',
      },
      examinerTip: 'Residual = actual − predicted (in that order). A common error is reversing this to get −2, which would imply the point is below the line.',
      auditStatus: 'pending',
    },

    // ── stat-scatter-B05 ──────────────────────────────────────
    {
      id: 'stat-scatter-B05', subtopic: 'stat-scatter', band: 'B', marks: 3,
      question: 'A line of best fit has equation y = 0.8x + 4. The data range is 5 ≤ x ≤ 25. (a) Estimate y when x = 20. (b) Is x = 35 reliable? (c) The PMCC is 0.45 — describe the correlation.',
      steps: [
        {
          prompt: 'Estimate y when x = 20.',
          hint1: 'Substitute x = 20 into y = 0.8x + 4.',
          hint2: 'y = 0.8×20 + 4 = 16 + 4.',
          hint3: 'y = 20.',
          answer: 20, tolerance: 0.1, unit: '',
          explanation: 'y = 0.8(20) + 4 = 16 + 4 = 20.',
        },
        {
          prompt: 'Is using x = 35 to estimate reliable? Explain.',
          hint1: 'Check whether x = 35 is within the data range 5 ≤ x ≤ 25.',
          hint2: '35 > 25, so x = 35 is outside the data range.',
          hint3: 'Extrapolation — less reliable.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'x = 35 is beyond the data range, so this is extrapolation. The trend may not continue, making it less reliable.',
          checkType: 'skip',
          displayAnswer: 'Extrapolation — less reliable',
        },
        {
          prompt: 'Describe the correlation given PMCC = 0.45.',
          hint1: 'PMCC ranges from −1 to +1. Values near 0 are weak; near ±1 are strong.',
          hint2: '0.45 is positive but not close to 1.',
          hint3: 'Weak positive correlation.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'PMCC = 0.45 indicates a weak positive correlation — there is a slight tendency for y to increase as x increases, but the scatter is large.',
          checkType: 'skip',
          displayAnswer: 'Weak positive correlation',
        },
      ],
      workedExample: {
        question: 'y = 1.2x + 3. Data 10 ≤ x ≤ 40. At x = 25: y = ? Is x = 50 reliable? PMCC = 0.92: describe.',
        steps: [
          'Step 1 — at x=25: y = 1.2×25+3 = 30+3 = <strong>33</strong>',
          'Step 2 — x=50 > 40: <strong>extrapolation — less reliable</strong>',
          'Step 3 — PMCC=0.92: <strong>strong positive correlation</strong>',
        ],
      },
      sampleAnswer: {
        grade4: 'y = 20. x = 35 is extrapolation. PMCC = 0.45 is weak positive correlation.',
        grade6: '(a) y=0.8(20)+4=20. (b) x=35 > 25 so extrapolation — less reliable. (c) PMCC=0.45: weak positive correlation.',
        grade8: '(a) y=20. (b) x=35 is extrapolation (beyond data range); unreliable as the linear trend may not hold. (c) PMCC=0.45 indicates weak positive correlation — considerable scatter around the line.',
      },
      examinerTip: 'When describing PMCC, use two words: strength (weak/moderate/strong) and direction (positive/negative). Do not just say "positive correlation".',
      auditStatus: 'pending',
    },

    // ── stat-scatter-B06 ──────────────────────────────────────
    {
      id: 'stat-scatter-B06', subtopic: 'stat-scatter', band: 'B', marks: 3,
      question: 'Temperature (°C) vs daily ice cream sales are modelled by y = 12x − 60. (a) Predict sales at 15°C. (b) Predict sales at 30°C. (c) At 4°C the formula gives y = −12. Explain why this is not meaningful.',
      steps: [
        {
          prompt: 'Predict sales at 15°C.',
          hint1: 'Substitute x = 15 into y = 12x − 60.',
          hint2: 'y = 12×15 − 60 = 180 − 60.',
          hint3: 'y = 120.',
          answer: 120, tolerance: 0, unit: '',
          explanation: 'y = 12(15) − 60 = 180 − 60 = 120 sales.',
        },
        {
          prompt: 'Predict sales at 30°C.',
          hint1: 'Substitute x = 30 into y = 12x − 60.',
          hint2: 'y = 360 − 60.',
          hint3: 'y = 300.',
          answer: 300, tolerance: 0, unit: '',
          explanation: 'y = 12(30) − 60 = 360 − 60 = 300 sales.',
        },
        {
          prompt: 'Explain why y = −12 at 4°C is not meaningful.',
          hint1: 'Think about what a negative number of sales would mean.',
          hint2: 'You cannot sell a negative number of ice creams.',
          hint3: 'Negative sales are impossible — the model is only valid for temperatures where sales ≥ 0.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'At 4°C: y = 12(4)−60 = −12. Negative sales are impossible in reality. The model is only valid when x ≥ 5 (where y ≥ 0).',
          checkType: 'skip',
          displayAnswer: 'Negative sales impossible — model not valid at low temperatures',
        },
      ],
      workedExample: {
        question: 'Model: y = 5x − 20. At 10°C: y = ? At 3°C: y = ? Why is the 3°C answer not meaningful?',
        steps: [
          'Step 1 — at 10°C: y = 5×10−20 = <strong>30</strong>',
          'Step 2 — at 3°C: y = 5×3−20 = <strong>−5</strong>',
          'Step 3 — negative sales are impossible; the model is not valid below x = 4°C.',
        ],
      },
      sampleAnswer: {
        grade4: '120 sales at 15°C. 300 sales at 30°C. Negative sales are impossible.',
        grade6: '(a) 12(15)−60=120. (b) 12(30)−60=300. (c) y=−12 is impossible — you cannot sell a negative number of ice creams.',
        grade8: '(a) 120. (b) 300. (c) At 4°C, y=−12. This is meaningless as sales cannot be negative; the linear model is only valid for x≥5 where y≥0.',
      },
      examinerTip: 'Always check whether a model produces sensible values at the boundaries — exam questions often test whether you can spot an impossible or unrealistic output.',
      auditStatus: 'pending',
    },

    // ── stat-scatter-C01 ──────────────────────────────────────
    {
      id: 'stat-scatter-C01', subtopic: 'stat-scatter', band: 'C', marks: 3,
      question: 'Five students are ranked in Maths and Science (1st to 5th). Science ranks: Maths 1→3, 2→1, 3→5, 4→2, 5→4. Calculate Spearman’s rank correlation coefficient rₛ = 1 − 6Σd²/[n(n²−1)].',
      steps: [
        {
          prompt: 'Find d² for each student and calculate Σd².',
          hint1: 'd = Maths rank − Science rank for each student.',
          hint2: 'd values: −2, 1, −2, 2, 1. d²: 4, 1, 4, 4, 1.',
          hint3: 'Σd² = 4+1+4+4+1 = 14.',
          answer: 14, tolerance: 0, unit: '',
          explanation: 'd values: 1−3=−2, 2−1=1, 3−5=−2, 4−2=2, 5−4=1. d²: 4,1,4,4,1. Σd² = 14.',
        },
        {
          prompt: 'Calculate the denominator n(n² − 1) with n = 5.',
          hint1: 'n(n² − 1) = 5 × (25 − 1).',
          hint2: '5 × 24 = 120.',
          hint3: 'Denominator = 120.',
          answer: 120, tolerance: 0, unit: '',
          explanation: 'n(n²−1) = 5×(25−1) = 5×24 = 120.',
        },
        {
          prompt: 'Calculate rₛ = 1 − 6Σd² / [n(n²−1)].',
          hint1: '6 × 14 = 84. rₛ = 1 − 84/120.',
          hint2: '84/120 = 0.7.',
          hint3: 'rₛ = 1 − 0.7 = 0.3.',
          answer: 0.3, tolerance: 0.01, unit: '',
          explanation: 'rₛ = 1 − 84/120 = 1 − 0.7 = 0.3. This indicates a weak positive rank correlation.',
        },
      ],
      workedExample: {
        question: 'Four students. d values: 1, −2, 1, 0. Calculate rₛ.',
        steps: [
          'Step 1 — Σd²: 1+4+1+0 = <strong>6</strong>',
          'Step 2 — denominator: 4×(16−1) = 4×15 = <strong>60</strong>',
          'Step 3 — rₛ = 1 − 6×6/60 = 1 − 36/60 = 1 − 0.6 = <strong>0.4</strong>',
        ],
      },
      sampleAnswer: {
        grade4: 'Σd² = 14. rₛ = 0.3.',
        grade6: 'd: −2,1,−2,2,1. d²: 4,1,4,4,1. Σd²=14. rₛ=1−84/120=0.3.',
        grade8: 'Σd²=14. rₛ=1−6×14/[5×24]=1−0.7=0.3. Weak positive rank correlation between Maths and Science rankings.',
      },
      examinerTip: 'Square each d value individually before summing — a common error is summing the d values first and then squaring the total.',
      auditStatus: 'pending',
    },

    // ── stat-scatter-C02 ──────────────────────────────────────
    {
      id: 'stat-scatter-C02', subtopic: 'stat-scatter', band: 'C', marks: 3,
      question: 'A regression line is y = 2.4x + 1.2 with n = 10. Mean x = 6, mean y = 15.6. (a) Verify the mean point lies on the line. (b) Predict y when x = 10. (c) The data range is 1 ≤ x ≤ 9 — comment on reliability.',
      steps: [
        {
          prompt: 'Verify the mean point (6, 15.6) lies on the line y = 2.4x + 1.2.',
          hint1: 'Substitute x = 6 into the equation.',
          hint2: 'y = 2.4×6 + 1.2 = 14.4 + 1.2.',
          hint3: 'y = 15.6 ✓ — the mean point lies on the line.',
          answer: 15.6, tolerance: 0.05, unit: '',
          explanation: 'y = 2.4(6) + 1.2 = 15.6 ✔. The regression line always passes through the mean point.',
        },
        {
          prompt: 'Predict y when x = 10.',
          hint1: 'Substitute x = 10 into y = 2.4x + 1.2.',
          hint2: 'y = 24 + 1.2.',
          hint3: 'y = 25.2.',
          answer: 25.2, tolerance: 0.1, unit: '',
          explanation: 'y = 2.4(10) + 1.2 = 24 + 1.2 = 25.2.',
        },
        {
          prompt: 'Comment on the reliability of the prediction at x = 10.',
          hint1: 'The data range is 1 ≤ x ≤ 9. Where does x = 10 lie?',
          hint2: 'x = 10 is just outside the data range.',
          hint3: 'Extrapolation — less reliable.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'x = 10 is beyond the data range 1–9, so this is extrapolation. The prediction is less reliable.',
          checkType: 'skip',
          displayAnswer: 'Extrapolation — less reliable',
        },
      ],
      workedExample: {
        question: 'y = 1.5x + 3. Mean x = 4, mean y = 9. Verify, then predict at x = 8. Data range 0–7.',
        steps: [
          'Step 1 — verify: 1.5×4+3 = 9 ✓ — <strong>mean point confirmed</strong>',
          'Step 2 — at x=8: y = 1.5×8+3 = <strong>15</strong>',
          'Step 3 — x=8 > 7: <strong>extrapolation — less reliable</strong>',
        ],
      },
      sampleAnswer: {
        grade4: 'y = 15.6 at x = 6 (confirmed). y = 25.2 at x = 10. Extrapolation.',
        grade6: '(a) 2.4(6)+1.2=15.6 ✓. (b) y=25.2. (c) x=10 > 9 so extrapolation — less reliable.',
        grade8: '(a) Mean point verified: regression line always passes through (μₓ, μʸ). (b) y=25.2. (c) x=10 is extrapolation (just beyond data range) — slightly less reliable but close to boundary.',
      },
      examinerTip: 'The regression line always passes through the mean point — this is a useful check and is often tested directly.',
      auditStatus: 'pending',
    },

    // ── stat-scatter-C03 ──────────────────────────────────────
    {
      id: 'stat-scatter-C03', subtopic: 'stat-scatter', band: 'C', marks: 4,
      question: 'For 5 data points: Σx = 15, Σy = 25, Σx² = 55, Σxy = 85, n = 5. Find the equation of the regression line y = mx + c.',
      steps: [
        {
          prompt: 'Calculate Sₓₓ = Σx² − (Σx)²/n.',
          hint1: '(Σx)²/n = 15²/5 = 225/5 = 45.',
          hint2: 'Sₓₓ = 55 − 45.',
          hint3: 'Sₓₓ = 10.',
          answer: 10, tolerance: 0, unit: '',
          explanation: 'Sₓₓ = 55 − 225/5 = 55 − 45 = 10.',
        },
        {
          prompt: 'Calculate Sₓᵧ = Σxy − (Σx)(Σy)/n.',
          hint1: '(Σx)(Σy)/n = 15×25/5 = 375/5 = 75.',
          hint2: 'Sₓᵧ = 85 − 75.',
          hint3: 'Sₓᵧ = 10.',
          answer: 10, tolerance: 0, unit: '',
          explanation: 'Sₓᵧ = 85 − 75 = 10.',
        },
        {
          prompt: 'Find the gradient m = Sₓᵧ / Sₓₓ.',
          hint1: 'm = 10 / 10.',
          hint2: 'm = 1.',
          hint3: 'm = 1.',
          answer: 1, tolerance: 0.01, unit: '',
          explanation: 'm = Sₓᵧ/Sₓₓ = 10/10 = 1.',
        },
        {
          prompt: 'Find c = ȳ − mμₓ and write the full equation.',
          hint1: 'μₓ = 15/5 = 3. ȳ = 25/5 = 5.',
          hint2: 'c = 5 − 1×3 = 2.',
          hint3: 'y = x + 2.',
          answer: 2, tolerance: 0.01, unit: '',
          explanation: 'c = 5 − 1×3 = 2. Equation: y = x + 2.',
        },
      ],
      workedExample: {
        question: 'n=4: Σx=12, Σy=20, Σx²=46, Σxy=64. Find the regression line.',
        steps: [
          'Step 1 — Sₓₓ: 46−144/4 = 46−36 = <strong>10</strong>',
          'Step 2 — Sₓᵧ: 64−240/4 = 64−60 = <strong>4</strong>',
          'Step 3 — m = 4/10 = <strong>0.4</strong>',
          'Step 4 — c = 5−0.4×3 = 3.8. Equation: <strong>y = 0.4x + 3.8</strong>',
        ],
      },
      sampleAnswer: {
        grade4: 'y = x + 2.',
        grade6: 'Sₓₓ=10, Sₓᵧ=10, m=1, c=5−3=2. y=x+2.',
        grade8: 'Sₓₓ=Σx²−(Σx)²/n=10. Sₓᵧ=Σxy−(Σx)(Σy)/n=10. m=1. c=ȳ−mμₓ=5−3=2. Regression line: y=x+2.',
      },
      examinerTip: 'Always use the formula for Sₓₓ and Sₓᵧ — a common error is using Σx² directly without subtracting the correction term (Σx)²/n.',
      auditStatus: 'pending',
    },

    // ── stat-scatter-C04 ──────────────────────────────────────
    {
      id: 'stat-scatter-C04', subtopic: 'stat-scatter', band: 'C', marks: 3,
      question: 'Two variables have PMCC = 0.87. A student says "more revision causes better exam scores." (a) Interpret the PMCC. (b) Does this prove causation? (c) Suggest a confounding variable.',
      steps: [
        {
          prompt: 'Interpret the PMCC value of 0.87.',
          hint1: 'PMCC ranges from −1 to +1. Values close to +1 indicate strong positive correlation.',
          hint2: '0.87 is close to 1 and positive.',
          hint3: 'Strong positive correlation.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'PMCC = 0.87 indicates a strong positive correlation between the two variables.',
          checkType: 'skip',
          displayAnswer: 'Strong positive correlation',
        },
        {
          prompt: 'Does a PMCC of 0.87 prove that revision causes better scores?',
          hint1: 'Correlation measures the strength of association, not cause and effect.',
          hint2: 'Correlation does not prove causation.',
          hint3: 'No — correlation ≠ causation.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Correlation (however strong) does not prove causation. There may be other factors involved.',
          checkType: 'skip',
          displayAnswer: 'Correlation ≠ causation',
        },
        {
          prompt: 'Suggest a confounding variable that could explain the relationship.',
          hint1: 'A confounding variable affects both revision habits and exam scores independently.',
          hint2: 'Think about student-level factors.',
          hint3: 'Student motivation or ability could influence both.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Confounding variable: student motivation or innate ability could independently increase both revision time and exam performance.',
          checkType: 'skip',
          displayAnswer: 'Confounding variable: e.g. student motivation/ability',
        },
      ],
      workedExample: {
        question: 'PMCC = −0.91 between ice cream sales and coat sales. Interpret and find a confounding variable.',
        steps: [
          'Step 1 — PMCC=−0.91: <strong>strong negative correlation</strong>',
          'Step 2 — does low ice cream sales cause high coat sales? No — <strong>correlation ≠ causation</strong>',
          'Step 3 — confounding variable: <strong>season/temperature</strong> drives both independently.',
        ],
      },
      sampleAnswer: {
        grade4: 'Strong positive correlation. Correlation does not prove causation. Confounding variable: student ability.',
        grade6: 'PMCC=0.87: strong positive correlation. This does not prove causation — a confounding variable such as student motivation could affect both revision and scores.',
        grade8: 'PMCC=0.87 indicates strong positive linear correlation. This cannot establish causation; a confounding variable (e.g. general ability or motivation) could independently drive both greater revision and higher exam scores.',
      },
      examinerTip: 'When suggesting a confounding variable, name it specifically and explain how it could affect both variables — "another factor" alone is not enough.',
      auditStatus: 'pending',
    },"""

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

pos = content.find(MARKER)
if pos == -1:
    print(f'ERROR: marker not found in {FILE}')
    sys.exit(1)

print(f'Marker found at char position {pos}')

content = content[:pos] + NEW + content[pos:]

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done — stat-scatter questions (A02-A05, B02-B06, C01-C04) inserted successfully.')
