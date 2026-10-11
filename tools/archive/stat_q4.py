"""
stat_q4.py — Insert 13 stat-cumulative questions (4A, 5B, 4C) into js/maths-questions.js.
Inserts immediately BEFORE the pct-A04 comment marker.
"""

import sys

FILE = 'js/maths-questions.js'
MARKER = '\n\n    // ── pct-A04 ──────────────────────────────────────────────'

NEW = r"""

    // ── stat-cumulative-A02 ──────────────────────────────────────
    {
      id: 'stat-cumulative-A02', subtopic: 'stat-cumulative', band: 'A', marks: 3,
      question: 'A dataset of 40 values has cumulative frequencies: ≤10: 4, ≤20: 12, ≤30: 24, ≤40: 36, ≤50: 40. Estimate the lower quartile (Q1), upper quartile (Q3), and IQR.',
      steps: [
        {
          prompt: 'Estimate Q1 (the 10th value).',
          hint1: 'Q1 is at position n/4 = 40/4 = 10th value. At x=10 the cf=4, so 6 more are needed from the class 10<x≤20 which has 8 values.',
          hint2: 'Q1 = 10 + (6/8) × 10.',
          hint3: 'Q1 = 10 + 7.5 = 17.5.',
          answer: 17.5, tolerance: 0.5, unit: '',
          explanation: 'Q1 = 10 + (6/8)×10 = 17.5. (Need 10th value; 4 already accounted for at x=10, so need 6 more from 8 in class.)',
        },
        {
          prompt: 'Estimate Q3 (the 30th value).',
          hint1: 'Q3 is at position 3n/4 = 30th value. cf=24 at x=30, so 6 more from 12 in class 30<x≤40.',
          hint2: 'Q3 = 30 + (6/12) × 10.',
          hint3: 'Q3 = 30 + 5 = 35.',
          answer: 35, tolerance: 0.5, unit: '',
          explanation: 'Q3 = 30 + (6/12)×10 = 35.',
        },
        {
          prompt: 'Calculate the IQR.',
          hint1: 'IQR = Q3 − Q1.',
          hint2: '35 − 17.5.',
          hint3: 'IQR = 17.5.',
          answer: 17.5, tolerance: 0.5, unit: '',
          explanation: 'IQR = Q3 − Q1 = 35 − 17.5 = 17.5.',
        },
      ],
      workedExample: {
        question: 'n=20. cf: ≤5:3, ≤10:8, ≤15:16, ≤20:20. Find Q1, Q3, and IQR.',
        steps: [
          'Step 1 — Q1=5th value: cf=3 at x=5, need 2 more from 5 in class 5<x≤10. Q1=5+(2/5)×5 = <strong>7</strong>',
          'Step 2 — Q3=15th value: cf=8 at x=10, need 7 more from 8 in class 10<x≤15. Q3=10+(7/8)×5 = <strong>14.4</strong>',
          'Step 3 — IQR = 14.4−7 = <strong>7.4</strong>',
        ],
      },
      sampleAnswer: {
        grade4: 'Q1 = 17.5, Q3 = 35, IQR = 17.5.',
        grade6: 'Q1: 10th value = 10+(6/8)×10=17.5. Q3: 30th value = 30+(6/12)×10=35. IQR=17.5.',
        grade8: 'Q1=17.5 (linear interpolation in class 10<x≤20). Q3=35 (linear interpolation in class 30<x≤40). IQR=17.5.',
      },
      examinerTip: 'Always write down the cumulative frequency table first and identify which class each quartile falls in before interpolating.',
      auditStatus: 'pending',
    },

    // ── stat-cumulative-A03 ──────────────────────────────────────
    {
      id: 'stat-cumulative-A03', subtopic: 'stat-cumulative', band: 'A', marks: 2,
      question: 'From a cumulative frequency graph for 100 students: Q1 = 24, median = 35, Q3 = 52. Find (a) the IQR and (b) the number of students scoring above 52.',
      steps: [
        {
          prompt: 'Find the IQR.',
          hint1: 'IQR = Q3 − Q1.',
          hint2: '52 − 24.',
          hint3: 'IQR = 28.',
          answer: 28, tolerance: 0, unit: '',
          explanation: 'IQR = 52 − 24 = 28.',
        },
        {
          prompt: 'How many students scored above Q3 (above 52)?',
          hint1: 'Q3 is the 75th percentile — 75% scored at or below Q3.',
          hint2: '25% scored above Q3. 25% of 100 = 25.',
          hint3: '25 students scored above 52.',
          answer: 25, tolerance: 0, unit: '',
          explanation: '25% of the data lies above Q3. 25% × 100 = 25 students.',
        },
      ],
      workedExample: {
        question: 'n=80. Q1=30, Q3=54. IQR? Number scoring above Q3?',
        steps: [
          'Step 1 — IQR = 54−30 = <strong>24</strong>',
          'Step 2 — 25% of 80 = <strong>20 students</strong> scored above Q3.',
        ],
      },
      sampleAnswer: {
        grade4: 'IQR = 28. 25 students scored above 52.',
        grade6: 'IQR = 52−24 = 28. Q3 = 75th percentile, so 25% above = 0.25×100 = 25 students.',
        grade8: 'IQR = 28. The upper quartile is the 75th percentile, so 25% of 100 = 25 students scored above 52.',
      },
      examinerTip: 'Q3 is the 75th percentile — 25% of data always lies above it regardless of the total frequency.',
      auditStatus: 'pending',
    },

    // ── stat-cumulative-A04 ──────────────────────────────────────
    {
      id: 'stat-cumulative-A04', subtopic: 'stat-cumulative', band: 'A', marks: 2,
      question: 'Frequencies: 0<x≤20: 6, 20<x≤40: 14, 40<x≤60: 22, 60<x≤80: 8. Total = 50. Find the cumulative frequency at x = 40 and estimate the median.',
      steps: [
        {
          prompt: 'State the cumulative frequency at x = 40.',
          hint1: 'Add the frequencies up to and including the class 20<x≤40.',
          hint2: '6 + 14 = 20.',
          hint3: 'cf at x=40 is 20.',
          answer: 20, tolerance: 0, unit: '',
          explanation: 'Cumulative frequencies: ≤20:6, ≤40:20, ≤60:42, ≤80:50. At x=40, cf=20.',
        },
        {
          prompt: 'Estimate the median (25th value).',
          hint1: 'Median = 25th value. cf=20 at x=40, so need 5 more from 22 in class 40<x≤60.',
          hint2: 'Median = 40 + (5/22) × 20.',
          hint3: 'Median ≈ 44.5.',
          answer: 44.5, tolerance: 1, unit: '',
          explanation: 'Median = 40 + (5/22)×20 ≈ 40 + 4.55 ≈ 44.5.',
        },
      ],
      workedExample: {
        question: 'n=30. cf: ≤10:5, ≤20:15, ≤30:30. Estimate the median.',
        steps: [
          'Step 1 — median = 15th value. cf=5 at x=10, need 10 more from 10 in class 10<x≤20.',
          'Step 2 — Median = 10 + (10/10)×10 = <strong>20</strong>',
        ],
      },
      sampleAnswer: {
        grade4: 'cf at x=40 is 20. Median ≈ 44.5.',
        grade6: 'cf: 6,20,42,50. Median = 25th value. 40+(5/22)×20 ≈ 44.5.',
        grade8: 'cf at x=40 = 20. Median (25th value) is in class 40<x≤60. Interpolation: 40+(5/22)×20 ≈ 44.5.',
      },
      examinerTip: 'Build the full cumulative frequency column before identifying which class the median falls in — this avoids errors in counting.',
      auditStatus: 'pending',
    },

    // ── stat-cumulative-A05 ──────────────────────────────────────
    {
      id: 'stat-cumulative-A05', subtopic: 'stat-cumulative', band: 'A', marks: 2,
      question: 'From a cumulative frequency graph, the 20th percentile is 15 and the 80th percentile is 55. (a) Find the inter-percentile range. (b) How many values lie between these percentiles if n = 200?',
      steps: [
        {
          prompt: 'Find the inter-percentile range (80th percentile − 20th percentile).',
          hint1: '55 − 15.',
          hint2: '40.',
          hint3: 'Inter-percentile range = 40.',
          answer: 40, tolerance: 0, unit: '',
          explanation: 'Inter-percentile range = 55 − 15 = 40.',
        },
        {
          prompt: 'How many of the 200 values lie between the 20th and 80th percentiles?',
          hint1: 'The range from the 20th to the 80th percentile contains 80 − 20 = 60% of the data.',
          hint2: '60% of 200.',
          hint3: '0.6 × 200 = 120.',
          answer: 120, tolerance: 0, unit: '',
          explanation: '80th − 20th percentile = 60% of data. 60% × 200 = 120 values.',
        },
      ],
      workedExample: {
        question: '10th percentile = 8, 90th percentile = 52, n = 150. Find the inter-percentile range and number of values between them.',
        steps: [
          'Step 1 — range: 52−8 = <strong>44</strong>',
          'Step 2 — 80% of 150 = <strong>120 values</strong> lie between the 10th and 90th percentiles.',
        ],
      },
      sampleAnswer: {
        grade4: 'Inter-percentile range = 40. 120 values lie between the two percentiles.',
        grade6: 'IPR = 55−15 = 40. 60% of 200 = 120 values lie between the 20th and 80th percentiles.',
        grade8: 'IPR = 40. The 20th to 80th percentile range covers 60% of the distribution, so 0.60×200 = 120 values.',
      },
      examinerTip: 'The percentage of data between the pth and qth percentiles is always (q − p)% — make sure to use this directly rather than recounting from the graph.',
      auditStatus: 'pending',
    },

    // ── stat-cumulative-B02 ──────────────────────────────────────
    {
      id: 'stat-cumulative-B02', subtopic: 'stat-cumulative', band: 'B', marks: 3,
      question: '50 exam results have cf: ≤40:5, ≤50:18, ≤60:34, ≤70:45, ≤80:50. (a) Estimate the median. (b) Estimate how many students scored above 65. (c) Interpret the result.',
      steps: [
        {
          prompt: 'Estimate the median (25th value).',
          hint1: 'cf=18 at x=50, need 7 more from 16 in class 50<x≤60.',
          hint2: 'Median = 50 + (7/16) × 10.',
          hint3: 'Median ≈ 54.4.',
          answer: 54.4, tolerance: 0.5, unit: '',
          explanation: 'Median = 50 + (7/16)×10 = 50 + 4.375 ≈ 54.4.',
        },
        {
          prompt: 'Estimate the number of students who scored above 65.',
          hint1: 'Interpolate to find cf at 65. cf=34 at 60, cf=45 at 70.',
          hint2: 'cf at 65 = 34 + (45−34)×(5/10) = 34 + 5.5 = 39.5.',
          hint3: 'Students above 65 = 50 − 39.5 ≈ 10 or 11.',
          answer: 10.5, tolerance: 1, unit: '',
          explanation: 'cf at 65 ≈ 39.5. Students above 65 = 50 − 39.5 = 10.5 → approximately 10 or 11.',
        },
        {
          prompt: 'Interpret the result for students scoring above 65.',
          hint1: 'State your estimate in context.',
          hint2: 'Approximately 10 to 11 students scored above 65.',
          hint3: 'About 10 students scored above 65.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Approximately 10–11 students scored above 65 marks.',
          checkType: 'skip',
          displayAnswer: '≈ 10 students scored above 65',
        },
      ],
      workedExample: {
        question: 'cf: ≤50:8, ≤60:20, ≤70:35, ≤80:40 (n=40). Median? Above 72?',
        steps: [
          'Step 1 — median=20th: cf=8 at 50, need 12 from 12 in class 50<x≤60; median=60+(0/12)×10 = <strong>60</strong>',
          'Step 2 — cf at 72: 35+(40−35)×2/10 = 36. Above 72: 40−36 = <strong>4 students</strong>',
        ],
      },
      sampleAnswer: {
        grade4: 'Median ≈ 54.4. About 10 students scored above 65.',
        grade6: 'Median=50+(7/16)×10=54.4. cf at 65=39.5, so 50−39.5≈10 students above 65.',
        grade8: 'Median≈54.4. Linear interpolation at x=65: cf≈39.5, so approximately 10 students scored above 65. This is an estimate as we assume uniform distribution within each class.',
      },
      examinerTip: 'When estimating values in the middle of a class, always use linear interpolation — do not round to the nearest class boundary.',
      auditStatus: 'pending',
    },

    // ── stat-cumulative-B03 ──────────────────────────────────────
    {
      id: 'stat-cumulative-B03', subtopic: 'stat-cumulative', band: 'B', marks: 3,
      question: 'A box plot is drawn from: min = 12, Q1 = 18, median = 25, Q3 = 35, max = 48. (a) Find the IQR. (b) Find the upper outlier fence. (c) Are there any outliers?',
      steps: [
        {
          prompt: 'Find the IQR.',
          hint1: 'IQR = Q3 − Q1.',
          hint2: '35 − 18.',
          hint3: 'IQR = 17.',
          answer: 17, tolerance: 0, unit: '',
          explanation: 'IQR = 35 − 18 = 17.',
        },
        {
          prompt: 'Find the upper outlier fence.',
          hint1: 'Upper fence = Q3 + 1.5 × IQR.',
          hint2: 'Upper fence = 35 + 1.5 × 17 = 35 + 25.5.',
          hint3: 'Upper fence = 60.5.',
          answer: 60.5, tolerance: 0, unit: '',
          explanation: 'Upper fence = 35 + 1.5×17 = 60.5. Lower fence = 18 − 25.5 = −7.5.',
        },
        {
          prompt: 'Are there any outliers? Justify your answer.',
          hint1: 'Check whether min or max lie outside the fences.',
          hint2: 'Min = 12 > −7.5 and max = 48 < 60.5.',
          hint3: 'No outliers.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Max=48 < 60.5 and min=12 > −7.5, so there are no outliers in this dataset.',
          checkType: 'skip',
          displayAnswer: 'No outliers',
        },
      ],
      workedExample: {
        question: 'Q1 = 10, Q3 = 22, min = 3, max = 38. IQR, upper fence, any outliers?',
        steps: [
          'Step 1 — IQR = 22−10 = <strong>12</strong>',
          'Step 2 — upper fence = 22+1.5×12 = 22+18 = <strong>40</strong>. Lower fence = 10−18 = −8.',
          'Step 3 — max=38 < 40 and min=3 > −8: <strong>no outliers</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'IQR = 17. Upper fence = 60.5. No outliers.',
        grade6: 'IQR=17. Upper fence=35+1.5×17=60.5. max=48 < 60.5 and min=12 > −7.5, so no outliers.',
        grade8: 'IQR=17. Fences: −7.5 and 60.5. All data (12 to 48) lies within these bounds — no outliers present.',
      },
      examinerTip: 'Calculate both fences — examiners sometimes set min or max exactly at the boundary to check whether you test both ends.',
      auditStatus: 'pending',
    },

    // ── stat-cumulative-B04 ──────────────────────────────────────
    {
      id: 'stat-cumulative-B04', subtopic: 'stat-cumulative', band: 'B', marks: 3,
      question: 'Group X (n=60): median = 42, IQR = 18. Group Y (n=60): median = 36, IQR = 28. Write a full comparison of the two distributions.',
      steps: [
        {
          prompt: 'Compare the medians of Group X and Group Y.',
          hint1: 'The median measures typical/average performance.',
          hint2: 'Group X has a higher median (42 > 36).',
          hint3: 'Group X performed better on average.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Group X has a higher median (42 vs 36), suggesting X scored higher on average.',
          checkType: 'skip',
          displayAnswer: 'X has higher median (42 > 36)',
        },
        {
          prompt: 'Compare the spread (IQR) of Group X and Group Y.',
          hint1: 'The IQR measures consistency/spread of the middle 50% of data.',
          hint2: 'Group Y has a larger IQR (28 > 18).',
          hint3: 'Group Y scores are more spread out — less consistent.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Group Y has a larger IQR (28 vs 18), meaning Y scores are more spread out and less consistent.',
          checkType: 'skip',
          displayAnswer: 'Y has larger IQR (28 > 18) — more spread',
        },
        {
          prompt: 'Write an overall conclusion comparing the two groups.',
          hint1: 'Combine both observations into a single comparative statement.',
          hint2: 'Group X performed better overall and more consistently.',
          hint3: 'Group X: higher median AND smaller IQR (more consistent).',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Group X performed better overall (higher median) and more consistently (smaller IQR).',
          checkType: 'skip',
          displayAnswer: 'X: higher median AND more consistent',
        },
      ],
      workedExample: {
        question: 'Group A: median=55, IQR=12. Group B: median=60, IQR=20. Compare.',
        steps: [
          'Step 1 — medians: <strong>B higher (60 > 55)</strong> — B performed better on average.',
          'Step 2 — spread: <strong>A more consistent (IQR=12 < 20)</strong> — A scores less spread.',
          'Step 3 — overall: B performed better; A is more consistent.',
        ],
      },
      sampleAnswer: {
        grade4: 'Group X has a higher median. Group Y is more spread out.',
        grade6: 'X has higher median (42>36) so performed better on average. Y has larger IQR (28>18) so is less consistent.',
        grade8: 'Group X: median=42 vs Y=36 — X performed better on average. Group X: IQR=18 vs Y=28 — X is more consistent. Overall, Group X performed better and more reliably.',
      },
      examinerTip: 'A full distribution comparison must address both centre (median) AND spread (IQR) — answering only one will lose marks even if correct.',
      auditStatus: 'pending',
    },

    // ── stat-cumulative-B05 ──────────────────────────────────────
    {
      id: 'stat-cumulative-B05', subtopic: 'stat-cumulative', band: 'B', marks: 3,
      question: 'Grouped data: 10<x≤20:3, 20<x≤30:10, 30<x≤40:18, 40<x≤50:12, 50<x≤60:7. Total = 50. Find the 90th percentile.',
      steps: [
        {
          prompt: 'Find the position of the 90th percentile.',
          hint1: 'Position = 90% × 50.',
          hint2: '0.9 × 50 = 45.',
          hint3: 'The 90th percentile is at the 45th value.',
          answer: 45, tolerance: 0, unit: '',
          explanation: '90th percentile position = 0.9 × 50 = 45th value.',
        },
        {
          prompt: 'Use the cumulative frequencies to estimate the 90th percentile value.',
          hint1: 'cf: 3, 13, 31, 43, 50. The 45th value is in class 50<x≤60 (cf=43 at x=50).',
          hint2: 'Need 45 − 43 = 2 more from 7 in class. P90 = 50 + (2/7)×10.',
          hint3: 'P90 ≈ 52.9.',
          answer: 52.9, tolerance: 0.5, unit: '',
          explanation: 'cf=43 at x=50. Need 2 more from 7 in the class 50<x≤60. P90 = 50 + (2/7)×10 ≈ 52.9.',
        },
        {
          prompt: 'Interpret the 90th percentile in context.',
          hint1: 'The 90th percentile means 90% of values are below this point.',
          hint2: '90% of the data values are below approximately 52.9.',
          hint3: '90th percentile ≈ 52.9.',
          answer: 0, tolerance: 0, unit: '',
          explanation: '90% of the 50 data values are below approximately 52.9.',
          checkType: 'skip',
          displayAnswer: '90th percentile ≈ 52.9',
        },
      ],
      workedExample: {
        question: 'cf: ≤60:32, ≤70:45 (n=50). Find the 90th percentile.',
        steps: [
          'Step 1 — position: 0.9×50 = <strong>45th value</strong>',
          'Step 2 — cf=32 at 60, need 13 more from 13 in class 60<x≤70. P90=60+(13/13)×10 = <strong>70</strong>',
        ],
      },
      sampleAnswer: {
        grade4: '90th percentile ≈ 52.9.',
        grade6: 'Position = 45th value. cf: 3,13,31,43,50. 45th is in 50<x≤60. P90=50+(2/7)×10≈52.9.',
        grade8: '90th percentile at 45th value. cf=43 at x=50; need 2 more from 7 in class. P90=50+(2/7)×10≈52.9. 90% of values lie below this.',
      },
      examinerTip: 'For percentiles other than quartiles, position = (p/100) × n. Use this formula consistently rather than guessing which class boundary to use.',
      auditStatus: 'pending',
    },

    // ── stat-cumulative-B06 ──────────────────────────────────────
    {
      id: 'stat-cumulative-B06', subtopic: 'stat-cumulative', band: 'B', marks: 3,
      question: 'cf data for n = 80 students: ≤30:4, ≤40:12, ≤50:28, ≤60:52, ≤70:68, ≤80:80. Estimate the number of students scoring between 45 and 65.',
      steps: [
        {
          prompt: 'Estimate the cumulative frequency at 45.',
          hint1: 'Interpolate between x=40 (cf=12) and x=50 (cf=28).',
          hint2: 'cf at 45 = 12 + (28−12) × (5/10) = 12 + 8.',
          hint3: 'cf at 45 = 20.',
          answer: 20, tolerance: 1, unit: '',
          explanation: 'cf at 45 = 12 + 16×(5/10) = 12 + 8 = 20.',
        },
        {
          prompt: 'Estimate the cumulative frequency at 65.',
          hint1: 'Interpolate between x=60 (cf=52) and x=70 (cf=68).',
          hint2: 'cf at 65 = 52 + (68−52) × (5/10) = 52 + 8.',
          hint3: 'cf at 65 = 60.',
          answer: 60, tolerance: 1, unit: '',
          explanation: 'cf at 65 = 52 + 16×(5/10) = 52 + 8 = 60.',
        },
        {
          prompt: 'Find the number of students between 45 and 65.',
          hint1: 'Students between 45 and 65 = cf at 65 − cf at 45.',
          hint2: '60 − 20.',
          hint3: '40 students.',
          answer: 40, tolerance: 2, unit: '',
          explanation: 'Students between 45 and 65 = 60 − 20 = 40.',
        },
      ],
      workedExample: {
        question: 'cf: ≤20:6, ≤30:18, ≤40:30 (n=30). Students between 25 and 35?',
        steps: [
          'Step 1 — cf at 25: 6+(18−6)×5/10 = 6+6 = <strong>12</strong>',
          'Step 2 — cf at 35: 18+(30−18)×5/10 = 18+6 = <strong>24</strong>',
          'Step 3 — between: 24−12 = <strong>12 students</strong>',
        ],
      },
      sampleAnswer: {
        grade4: '40 students scored between 45 and 65.',
        grade6: 'cf at 45=20, cf at 65=60. Students between = 60−20 = 40.',
        grade8: 'Linear interpolation: cf at 45=12+(16×0.5)=20; cf at 65=52+(16×0.5)=60. Students between 45 and 65 = 40.',
      },
      examinerTip: 'Always interpolate to find cf at a non-boundary value — reading directly from graph gridlines often introduces rounding errors.',
      auditStatus: 'pending',
    },

    // ── stat-cumulative-C01 ──────────────────────────────────────
    {
      id: 'stat-cumulative-C01', subtopic: 'stat-cumulative', band: 'C', marks: 4,
      question: 'Grouped data: 0<x≤20: f=6, 20<x≤40: f=14, 40<x≤60: f=24, 60<x≤80: f=16. Total = 60. Find (a) the estimated mean and (b) an estimate for the median. (c) Comment on the skew.',
      steps: [
        {
          prompt: 'Calculate Σfm (midpoints × frequencies).',
          hint1: 'Midpoints: 10, 30, 50, 70.',
          hint2: 'Σfm = 6×10 + 14×30 + 24×50 + 16×70 = 60+420+1200+1120.',
          hint3: 'Σfm = 2800.',
          answer: 2800, tolerance: 0, unit: '',
          explanation: 'Σfm = 60+420+1200+1120 = 2800.',
        },
        {
          prompt: 'Calculate the estimated mean.',
          hint1: 'Mean = Σfm / n.',
          hint2: '2800 / 60.',
          hint3: 'Mean ≈ 46.67.',
          answer: 46.67, tolerance: 0.1, unit: '',
          explanation: 'Estimated mean = 2800/60 ≈ 46.67.',
        },
        {
          prompt: 'Estimate the median using cumulative frequency.',
          hint1: 'cf: 6, 20, 44, 60. Median = 30th value — in class 40<x≤60 (cf=20 at x=40, need 10 more from 24).',
          hint2: 'Median = 40 + (10/24) × 20.',
          hint3: 'Median ≈ 48.3.',
          answer: 48.3, tolerance: 0.5, unit: '',
          explanation: 'Median = 40 + (10/24)×20 ≈ 48.3.',
        },
        {
          prompt: 'Comment on the skew by comparing mean and median.',
          hint1: 'If mean < median, the distribution has a negative (left) skew.',
          hint2: 'Mean ≈ 46.7 < Median ≈ 48.3.',
          hint3: 'Slight negative skew — mean pulled left by lower values.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Mean (46.7) < Median (48.3) → slight negative skew. The lower values pull the mean down.',
          checkType: 'skip',
          displayAnswer: 'Mean ≈ 46.7 < Median ≈ 48.3 — slight negative skew',
        },
      ],
      workedExample: {
        question: '0<x≤10: f=5, 10<x≤20: f=12, 20<x≤30: f=3 (n=20). Mean and median?',
        steps: [
          'Step 1 — Σfm: 5×5+12×15+3×25 = 25+180+75 = <strong>280</strong>',
          'Step 2 — mean: 280/20 = <strong>14</strong>',
          'Step 3 — cf: 5,17,20. Median=10th: 10+(5/12)×10 = <strong>14.2</strong>',
          'Step 4 — mean≈median: <strong>near-symmetric distribution</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'Mean ≈ 46.7. Median ≈ 48.3. Slight negative skew.',
        grade6: 'Σfm=2800. Mean=2800/60≈46.7. Median=40+(10/24)×20≈48.3. Mean<median → slight negative skew.',
        grade8: 'Mean=46.67, median≈48.3. Since mean<median, the distribution shows a slight negative skew — the lower values drag the mean below the median.',
      },
      examinerTip: 'Skew direction: if mean < median → negative skew; mean > median → positive skew. Always state which is larger to justify your answer.',
      auditStatus: 'pending',
    },

    // ── stat-cumulative-C02 ──────────────────────────────────────
    {
      id: 'stat-cumulative-C02', subtopic: 'stat-cumulative', band: 'C', marks: 4,
      question: 'Group A and Group B (both n=40) have cf tables: A: ≤50:10, ≤60:22, ≤70:34, ≤80:40. B: ≤50:4, ≤60:14, ≤70:32, ≤80:40. Compare medians and IQRs.',
      steps: [
        {
          prompt: 'Estimate the median for Group A.',
          hint1: 'Median = 20th value. cf=10 at x=50, need 10 more from 12 in class 50<x≤60.',
          hint2: 'Median_A = 50 + (10/12) × 10.',
          hint3: 'Median_A ≈ 58.3.',
          answer: 58.3, tolerance: 0.5, unit: '',
          explanation: 'Median_A = 50 + (10/12)×10 ≈ 58.3.',
        },
        {
          prompt: 'Estimate the median for Group B.',
          hint1: 'Median = 20th value. cf=14 at x=60, need 6 more from 18 in class 60<x≤70.',
          hint2: 'Median_B = 60 + (6/18) × 10.',
          hint3: 'Median_B ≈ 63.3.',
          answer: 63.3, tolerance: 0.5, unit: '',
          explanation: 'Median_B = 60 + (6/18)×10 ≈ 63.3.',
        },
        {
          prompt: 'Calculate the IQR for Group A.',
          hint1: 'Q1_A = 10th value. cf=10 exactly at x=50, so Q1_A = 50. Q3_A = 30th value: cf=22 at 60, need 8 from 12. Q3_A = 60+(8/12)×10 ≈ 66.7.',
          hint2: 'IQR_A = 66.7 − 50.',
          hint3: 'IQR_A ≈ 16.7.',
          answer: 16.7, tolerance: 0.5, unit: '',
          explanation: 'Q1_A=50 (10th value falls exactly at cf=10). Q3_A=60+(8/12)×10≈66.7. IQR_A≈16.7.',
        },
        {
          prompt: 'Calculate the IQR for Group B and compare both groups.',
          hint1: 'Q1_B = 10th value: cf=4 at 50, need 6 from 10. Q1_B=50+6=56. Q3_B=30th: cf=14 at 60, need 16 from 18. Q3_B=60+(16/18)×10≈68.9. IQR_B≈12.9.',
          hint2: 'A has lower median but wider IQR; B has higher median and smaller IQR.',
          hint3: 'IQR_B ≈ 12.9. Group B: higher median, more consistent.',
          answer: 12.9, tolerance: 0.5, unit: '',
          explanation: 'IQR_B≈12.9. Group B has a higher median (63.3>58.3) and is more consistent (IQR 12.9 < 16.7). Group A scored lower on average and was more spread out.',
        },
      ],
      workedExample: {
        question: 'Group C cf: ≤20:8, ≤40:18, ≤60:24 (n=24). Find median and Q1.',
        steps: [
          'Step 1 — median=12th: cf=8 at 20, need 4 from 10. Median=20+(4/10)×20 = <strong>28</strong>',
          'Step 2 — Q1=6th: cf=8 at 20; 6 < 8, so Q1 is in ≤20 class. Q1=0+(6/8)×20 = <strong>15</strong>',
        ],
      },
      sampleAnswer: {
        grade4: 'Median A ≈ 58.3, Median B ≈ 63.3. IQR A ≈ 16.7, IQR B ≈ 12.9.',
        grade6: 'Median_A≈58.3 < Median_B≈63.3, so B scored higher on average. IQR_A≈16.7 > IQR_B≈12.9, so A is more spread out.',
        grade8: 'Group B: higher median (63.3 vs 58.3) — performed better on average. Group B: smaller IQR (12.9 vs 16.7) — more consistent. Overall Group B outperformed Group A.',
      },
      examinerTip: 'When Q1 falls exactly on a cumulative frequency boundary, read off the boundary value directly — no interpolation needed.',
      auditStatus: 'pending',
    },

    // ── stat-cumulative-C03 ──────────────────────────────────────
    {
      id: 'stat-cumulative-C03', subtopic: 'stat-cumulative', band: 'C', marks: 3,
      question: 'A dataset of n = 50 values has Q1 = 16 and Q3 = 35 (from a cumulative frequency graph). Min = 2, max = 58. (a) Find the IQR. (b) Find the outlier fences. (c) Are there any outliers?',
      steps: [
        {
          prompt: 'Find the IQR.',
          hint1: 'IQR = Q3 − Q1.',
          hint2: '35 − 16.',
          hint3: 'IQR = 19.',
          answer: 19, tolerance: 0, unit: '',
          explanation: 'IQR = 35 − 16 = 19.',
        },
        {
          prompt: 'Find the upper outlier fence.',
          hint1: 'Upper fence = Q3 + 1.5 × IQR.',
          hint2: 'Upper fence = 35 + 1.5 × 19 = 35 + 28.5.',
          hint3: 'Upper fence = 63.5.',
          answer: 63.5, tolerance: 0, unit: '',
          explanation: 'Upper fence = 35 + 28.5 = 63.5. Lower fence = 16 − 28.5 = −12.5.',
        },
        {
          prompt: 'Are there any outliers? Justify.',
          hint1: 'Compare min and max against the fences.',
          hint2: 'Min = 2 > −12.5 and max = 58 < 63.5.',
          hint3: 'No outliers in the dataset.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Min=2 > −12.5 and max=58 < 63.5. No values lie outside the fences — no outliers.',
          checkType: 'skip',
          displayAnswer: 'No outliers: 2 > −12.5 and 58 < 63.5',
        },
      ],
      workedExample: {
        question: 'Q1=20, Q3=44, min=5, max=72. IQR, fences, any outliers?',
        steps: [
          'Step 1 — IQR = 44−20 = <strong>24</strong>',
          'Step 2 — lower fence = 20−36 = −16. Upper fence = 44+36 = <strong>80</strong>',
          'Step 3 — 5 > −16 and 72 < 80: <strong>no outliers</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'IQR = 19. Upper fence = 63.5. No outliers.',
        grade6: 'IQR=19. Fences: −12.5 and 63.5. min=2>−12.5, max=58<63.5 → no outliers.',
        grade8: 'IQR=19. Lower fence=16−28.5=−12.5, upper fence=35+28.5=63.5. All data (2 to 58) lies within [−12.5, 63.5] — no outliers.',
      },
      examinerTip: 'Always compute both fences and check both the minimum and maximum — the question may reward checking both ends separately.',
      auditStatus: 'pending',
    },

    // ── stat-cumulative-C04 ──────────────────────────────────────
    {
      id: 'stat-cumulative-C04', subtopic: 'stat-cumulative', band: 'C', marks: 4,
      question: 'From a cumulative frequency graph for 100 people: Q1 = 28, Q3 = 52, max = 74, min = 8. (a) Find the IQR. (b) Find the upper outlier fence. (c) Is the maximum an outlier? (d) Describe the key features of the resulting box plot.',
      steps: [
        {
          prompt: 'Find the IQR.',
          hint1: 'IQR = Q3 − Q1.',
          hint2: '52 − 28.',
          hint3: 'IQR = 24.',
          answer: 24, tolerance: 0, unit: '',
          explanation: 'IQR = 52 − 28 = 24.',
        },
        {
          prompt: 'Find the upper outlier fence.',
          hint1: 'Upper fence = Q3 + 1.5 × IQR.',
          hint2: '52 + 1.5 × 24 = 52 + 36.',
          hint3: 'Upper fence = 88.',
          answer: 88, tolerance: 0, unit: '',
          explanation: 'Upper fence = 52 + 36 = 88.',
        },
        {
          prompt: 'Is the maximum value (74) an outlier?',
          hint1: 'Compare max = 74 with the upper fence = 88.',
          hint2: '74 < 88.',
          hint3: '74 is NOT an outlier.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'max = 74 < 88 (upper fence), so the maximum value is NOT an outlier.',
          checkType: 'skip',
          displayAnswer: '74 < 88 → NOT an outlier',
        },
        {
          prompt: 'Describe the key features of the resulting box plot.',
          hint1: 'State min, Q1, median, Q3, max and comment on skew.',
          hint2: 'Whiskers at 8 and 74, box from 28 to 52.',
          hint3: 'Box plot: min=8, Q1=28, Q3=52, max=74. Comment on skew if the median is known.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Box plot: left whisker at 8, Q1=28, box to Q3=52, right whisker at 74. If the median is near the centre of the box, the distribution is approximately symmetric.',
          checkType: 'skip',
          displayAnswer: 'Box plot: whiskers at 8 and 74, box from 28 to 52',
        },
      ],
      workedExample: {
        question: 'Q1=15, Q3=35, max=60, min=4, n=80. IQR, upper fence, is max an outlier?',
        steps: [
          'Step 1 — IQR = 35−15 = <strong>20</strong>',
          'Step 2 — upper fence = 35+1.5×20 = 35+30 = <strong>65</strong>',
          'Step 3 — max=60 < 65: <strong>not an outlier</strong>. Box: whiskers at 4 and 60, box from 15 to 35.',
        ],
      },
      sampleAnswer: {
        grade4: 'IQR = 24. Upper fence = 88. Max = 74 is not an outlier.',
        grade6: 'IQR=24. Upper fence=52+36=88. 74<88 so not an outlier. Box plot: min=8, Q1=28, Q3=52, max=74.',
        grade8: 'IQR=24. Upper fence=88. max=74<88 — not an outlier. Box plot: whiskers 8 to 74, box Q1=28 to Q3=52. Without the median, skew cannot be confirmed but the longer right whisker (22) vs left (20) suggests very slight positive skew.',
      },
      examinerTip: 'When sketching a box plot, label all five key values — missing even one (e.g. not marking Q1 or Q3) typically costs a mark.',
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

print('Done — stat-cumulative questions (A02-A05, B02-B06, C01-C04) inserted successfully.')
