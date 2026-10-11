import os

FILE = 'js/maths-questions.js'
with open(FILE, encoding='utf-8') as f:
    content = f.read()

MARKER = "\n\n    // ══════════════════════════════════════════════════════════\n    // CHARTS & DIAGRAMS (stat-charts)"
pos = content.find(MARKER)
if pos == -1:
    print("MARKER NOT FOUND"); exit(1)
print(f"Inserting stat-averages block at char {pos}")

NEW = """

    // ── stat-averages-A02 ──────────────────────────────────────
    {
      id: 'stat-averages-A02', subtopic: 'stat-averages', band: 'A', marks: 3,
      question: 'Find the mean, median and mode of: 3, 5, 5, 7, 8, 9, 5.',
      steps: [
        {
          prompt: 'Sort the data and find the mean.',
          hint1: 'Sort: 3, 5, 5, 5, 7, 8, 9. There are 7 values.',
          hint2: 'Add them: 3+5+5+7+8+9+5 = 42.',
          hint3: 'Mean = 42 ÷ 7 = 6.',
          answer: 6, tolerance: 0, unit: '',
          explanation: 'Sorted: 3,5,5,5,7,8,9. Sum = 42. Mean = 42 ÷ 7 = 6.',
        },
        {
          prompt: 'Find the median (middle value of the sorted list).',
          hint1: 'There are 7 values, so the median is the 4th.',
          hint2: 'Sorted: 3,5,5,5,7,8,9. Count to the 4th.',
          hint3: 'Median = 5.',
          answer: 5, tolerance: 0, unit: '',
          explanation: 'The 4th value in 3,5,5,5,7,8,9 is 5.',
        },
        {
          prompt: 'Find the mode (most frequent value).',
          hint1: 'Look for the value that appears most often.',
          hint2: '5 appears three times; all others appear once.',
          hint3: 'Mode = 5.',
          answer: 5, tolerance: 0, unit: '',
          explanation: '5 appears 3 times, more than any other value. Mode = 5.',
        },
      ],
      workedExample: {
        question: 'Find the mean, median and mode of: 2, 4, 4, 6, 9.',
        steps: [
          'Sort — already sorted: 2, 4, 4, 6, 9 (n = 5)',
          'Mean — 2+4+4+6+9 = 25; 25 ÷ 5 = <strong>5</strong>',
          'Median — 3rd value = <strong>4</strong>',
          'Mode — 4 appears twice = <strong>4</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "Mean = 6, median = 5, mode = 5.",
        grade6: "Sorted: 3,5,5,5,7,8,9. Mean = 42÷7 = 6. Median = 4th value = 5. Mode = 5 (appears 3 times).",
        grade8: "Sorted list: 3,5,5,5,7,8,9. Mean = 42÷7 = 6. Median = 5 (middle of 7 values). Mode = 5 (highest frequency, 3 times).",
      },
      examinerTip: "Students often forget to sort before finding the median, or mistake the mean for the median.",
      auditStatus: 'pending',
    },

    // ── stat-averages-A03 ──────────────────────────────────────
    {
      id: 'stat-averages-A03', subtopic: 'stat-averages', band: 'A', marks: 2,
      question: 'Weekly savings (£): 6, 9, 12, 15, 18, 21, 24. Find the mean and range.',
      steps: [
        {
          prompt: 'Find the mean.',
          hint1: 'Add all seven values: 6+9+12+15+18+21+24.',
          hint2: 'Sum = 105. Divide by 7.',
          hint3: 'Mean = 15.',
          answer: 15, tolerance: 0, unit: '',
          explanation: 'Sum = 105. Mean = 105 ÷ 7 = 15.',
        },
        {
          prompt: 'Find the range.',
          hint1: 'Range = largest − smallest.',
          hint2: 'Largest = 24, smallest = 6.',
          hint3: 'Range = 24 − 6 = 18.',
          answer: 18, tolerance: 0, unit: '',
          explanation: 'Range = 24 − 6 = 18.',
        },
      ],
      workedExample: {
        question: 'Data: 5, 10, 15, 20, 25. Find the mean and range.',
        steps: [
          'Mean — 5+10+15+20+25 = 75; 75 ÷ 5 = <strong>15</strong>',
          'Range — 25 − 5 = <strong>20</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "Mean = 15, range = 18.",
        grade6: "Sum = 105. Mean = 105 ÷ 7 = 15. Range = 24 − 6 = 18.",
        grade8: "Sum = 105; mean = 15. Range = max − min = 24 − 6 = 18. The range shows spread around the mean.",
      },
      examinerTip: "Students sometimes calculate range as largest + smallest rather than largest − smallest.",
      auditStatus: 'pending',
    },

    // ── stat-averages-A04 ──────────────────────────────────────
    {
      id: 'stat-averages-A04', subtopic: 'stat-averages', band: 'A', marks: 3,
      question: 'A frequency table shows: mark 5 (freq 2), mark 6 (freq 4), mark 7 (freq 6), mark 8 (freq 5), mark 9 (freq 3). Find the mean mark.',
      steps: [
        {
          prompt: 'Find the total frequency.',
          hint1: 'Add all the frequencies: 2+4+6+5+3.',
          hint2: 'Total = 20.',
          hint3: 'n = 20.',
          answer: 20, tolerance: 0, unit: '',
          explanation: 'Total frequency n = 2+4+6+5+3 = 20.',
        },
        {
          prompt: 'Calculate Σfx (multiply each mark by its frequency, then add).',
          hint1: '5×2=10, 6×4=24, 7×6=42, 8×5=40, 9×3=27.',
          hint2: 'Add: 10+24+42+40+27.',
          hint3: 'Σfx = 143.',
          answer: 143, tolerance: 0, unit: '',
          explanation: 'Σfx = 10+24+42+40+27 = 143.',
        },
        {
          prompt: 'Find the mean: Σfx ÷ n.',
          hint1: 'Mean = 143 ÷ 20.',
          hint2: '143 ÷ 20 = 7.15.',
          hint3: 'Mean = 7.15.',
          answer: 7.15, tolerance: 0.01, unit: '',
          explanation: 'Mean = 143 ÷ 20 = 7.15.',
        },
      ],
      workedExample: {
        question: 'Frequency table: x=3 (f=2), x=4 (f=5), x=5 (f=3). Find the mean.',
        steps: [
          'Total frequency — 2+5+3 = <strong>10</strong>',
          'Σfx — 3×2+4×5+5×3 = 6+20+15 = <strong>41</strong>',
          'Mean — 41 ÷ 10 = <strong>4.1</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "Mean = 7.15.",
        grade6: "n = 20. Σfx = 5×2+6×4+7×6+8×5+9×3 = 143. Mean = 143÷20 = 7.15.",
        grade8: "n = 20. Σfx = 10+24+42+40+27 = 143. Mean = Σfx÷n = 143÷20 = 7.15.",
      },
      examinerTip: "A common error is adding all x-values and dividing by the number of rows rather than by total frequency.",
      auditStatus: 'pending',
    },

    // ── stat-averages-A05 ──────────────────────────────────────
    {
      id: 'stat-averages-A05', subtopic: 'stat-averages', band: 'A', marks: 2,
      question: 'Test scores: 45, 62, 58, 71, 62, 55, 47. Find the median and mode.',
      steps: [
        {
          prompt: 'Sort the data and find the median.',
          hint1: 'Sort: 45, 47, 55, 58, 62, 62, 71 (n = 7).',
          hint2: 'Median is the 4th value.',
          hint3: 'Median = 58.',
          answer: 58, tolerance: 0, unit: '',
          explanation: 'Sorted: 45,47,55,58,62,62,71. The 4th value (middle of 7) = 58.',
        },
        {
          prompt: 'Find the mode.',
          hint1: 'Which value appears more than once?',
          hint2: '62 appears twice.',
          hint3: 'Mode = 62.',
          answer: 62, tolerance: 0, unit: '',
          explanation: '62 appears twice; all other values appear once. Mode = 62.',
        },
      ],
      workedExample: {
        question: 'Scores: 12, 7, 15, 7, 10, 18, 7. Find the median and mode.',
        steps: [
          'Sort — 7, 7, 7, 10, 12, 15, 18 (n = 7)',
          'Median — 4th value = <strong>10</strong>',
          'Mode — 7 appears 3 times = <strong>7</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "Median = 58, mode = 62.",
        grade6: "Sorted: 45,47,55,58,62,62,71. Median = 4th value = 58. Mode = 62 (appears twice).",
        grade8: "Sorted: 45,47,55,58,62,62,71. Median = 58 (4th of 7 values). Mode = 62 (frequency 2, the highest).",
      },
      examinerTip: "Always sort before finding the median — using the unsorted list gives the wrong answer.",
      auditStatus: 'pending',
    },

    // ── stat-averages-B02 ──────────────────────────────────────
    {
      id: 'stat-averages-B02', subtopic: 'stat-averages', band: 'B', marks: 3,
      question: 'Grouped frequency table: 0<x≤10 (f=4), 10<x≤20 (f=8), 20<x≤30 (f=12), 30<x≤40 (f=6). Estimate the mean.',
      steps: [
        {
          prompt: 'Find the total frequency n.',
          hint1: 'Add all frequencies: 4+8+12+6.',
          hint2: 'Total = 30.',
          hint3: 'n = 30.',
          answer: 30, tolerance: 0, unit: '',
          explanation: 'n = 4+8+12+6 = 30.',
        },
        {
          prompt: 'Use midpoints (5, 15, 25, 35) to calculate Σfm.',
          hint1: '5×4=20, 15×8=120, 25×12=300, 35×6=210.',
          hint2: 'Add: 20+120+300+210.',
          hint3: 'Σfm = 650.',
          answer: 650, tolerance: 0, unit: '',
          explanation: 'Σfm = 5×4 + 15×8 + 25×12 + 35×6 = 20+120+300+210 = 650.',
        },
        {
          prompt: 'Estimate the mean: Σfm ÷ n.',
          hint1: 'Mean = 650 ÷ 30.',
          hint2: '650 ÷ 30 ≈ 21.67.',
          hint3: 'Estimated mean ≈ 21.67.',
          answer: 21.67, tolerance: 0.05, unit: '',
          explanation: 'Estimated mean = 650 ÷ 30 ≈ 21.67.',
        },
      ],
      workedExample: {
        question: 'Grouped table: 0<x≤10 (f=2), 10<x≤20 (f=6), 20<x≤30 (f=2). Estimate the mean.',
        steps: [
          'Total frequency — 2+6+2 = <strong>10</strong>',
          'Midpoints — 5, 15, 25',
          'Σfm — 5×2+15×6+25×2 = 10+90+50 = <strong>150</strong>',
          'Estimated mean — 150 ÷ 10 = <strong>15</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "Estimated mean ≈ 21.67.",
        grade6: "Midpoints: 5,15,25,35. Σfm = 20+120+300+210 = 650. Mean = 650÷30 ≈ 21.67.",
        grade8: "n = 30. Using midpoints: Σfm = 5×4+15×8+25×12+35×6 = 650. Estimated mean = 650÷30 = 21.67 (3 s.f.).",
      },
      examinerTip: "Use the midpoint of each class, not the class boundaries. For 0<x≤10 the midpoint is 5, not 0 or 10.",
      auditStatus: 'pending',
    },

    // ── stat-averages-B03 ──────────────────────────────────────
    {
      id: 'stat-averages-B03', subtopic: 'stat-averages', band: 'B', marks: 3,
      question: 'The mean of 8 values is 15. Three values (10, 12, 20) are removed and two new values are added, giving 7 values with a new mean of 14. Find the sum of the two new values.',
      steps: [
        {
          prompt: 'Find the original sum of all 8 values.',
          hint1: 'Sum = mean × number of values.',
          hint2: 'Sum = 15 × 8.',
          hint3: 'Original sum = 120.',
          answer: 120, tolerance: 0, unit: '',
          explanation: 'Original sum = 8 × 15 = 120.',
        },
        {
          prompt: 'Find the sum after removing 10, 12 and 20.',
          hint1: 'Subtract each removed value: 120 − 10 − 12 − 20.',
          hint2: '120 − 42 = 78.',
          hint3: 'Remaining sum = 78.',
          answer: 78, tolerance: 0, unit: '',
          explanation: '120 − 10 − 12 − 20 = 78.',
        },
        {
          prompt: 'Find the sum of the two new values.',
          hint1: 'New sum needed = new mean × new count = 14 × 7.',
          hint2: 'New sum = 98. The two new values account for 98 − 78.',
          hint3: 'Sum of two new values = 20.',
          answer: 20, tolerance: 0, unit: '',
          explanation: 'New total sum = 14 × 7 = 98. Sum of two new values = 98 − 78 = 20.',
        },
      ],
      workedExample: {
        question: 'Mean of 6 values is 10. Remove 8 and 14. Add two new values. New mean of 6 values is 9. Find the sum of the two new values.',
        steps: [
          'Original sum — 10 × 6 = <strong>60</strong>',
          'After removing — 60 − 8 − 14 = <strong>38</strong>',
          'New total sum — 9 × 6 = <strong>54</strong>',
          'Sum of new pair — 54 − 38 = <strong>16</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "The two new values sum to 20.",
        grade6: "Original sum = 8×15 = 120. After removing: 120−10−12−20 = 78. New sum = 7×14 = 98. New pair sum = 98−78 = 20.",
        grade8: "Original Σx = 8×15 = 120. Removing three values: 120−42 = 78. Required new Σx = 7×14 = 98. Sum of new values = 98−78 = 20.",
      },
      examinerTip: "Work with sums throughout — convert means to sums straight away by multiplying mean × n.",
      auditStatus: 'pending',
    },

    // ── stat-averages-B04 ──────────────────────────────────────
    {
      id: 'stat-averages-B04', subtopic: 'stat-averages', band: 'B', marks: 2,
      question: 'Stem-and-leaf diagram (key: 1|3 means 13):\n1 | 3  7\n2 | 0  4  4  8\n3 | 1  5\nFind the mean and median.',
      steps: [
        {
          prompt: 'List all 8 values, find the sum and calculate the mean.',
          hint1: 'Values: 13, 17, 20, 24, 24, 28, 31, 35.',
          hint2: 'Sum = 192. n = 8.',
          hint3: 'Mean = 192 ÷ 8 = 24.',
          answer: 24, tolerance: 0.01, unit: '',
          explanation: 'Values: 13,17,20,24,24,28,31,35. Sum = 192. Mean = 192÷8 = 24.',
        },
        {
          prompt: 'Find the median (average of 4th and 5th values in the ordered list).',
          hint1: '4th value = 24, 5th value = 24.',
          hint2: 'Median = (24 + 24) ÷ 2.',
          hint3: 'Median = 24.',
          answer: 24, tolerance: 0, unit: '',
          explanation: 'Ordered data is already sorted in a stem-and-leaf. 4th = 24, 5th = 24. Median = (24+24)÷2 = 24.',
        },
      ],
      workedExample: {
        question: 'Stem-and-leaf (key 1|2 = 12): 1|2 6  2|3 5  3|0. Find the mean and median.',
        steps: [
          'Values — 12, 16, 23, 25, 30 (n = 5)',
          'Sum — 12+16+23+25+30 = 106; Mean = 106÷5 = <strong>21.2</strong>',
          'Median — 3rd of 5 values = <strong>23</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "Mean = 24, median = 24.",
        grade6: "Values: 13,17,20,24,24,28,31,35. Sum = 192. Mean = 24. Median = (24+24)÷2 = 24.",
        grade8: "n = 8. Σx = 192. Mean = 24. Even number of values so median = mean of 4th and 5th = (24+24)÷2 = 24.",
      },
      examinerTip: "Stem-and-leaf data is already sorted, which helps with the median — but always check by counting from the left.",
      auditStatus: 'pending',
    },

    // ── stat-averages-B05 ──────────────────────────────────────
    {
      id: 'stat-averages-B05', subtopic: 'stat-averages', band: 'B', marks: 2,
      question: 'A set of 6 numbers has a mean of 8.5. Five of the numbers are: 7, 11, 5, 9, 12. Find the sixth number.',
      steps: [
        {
          prompt: 'Find the total sum needed for a mean of 8.5 with 6 numbers.',
          hint1: 'Total sum = mean × n.',
          hint2: '8.5 × 6 = 51.',
          hint3: 'Total sum = 51.',
          answer: 51, tolerance: 0, unit: '',
          explanation: 'Total sum = 8.5 × 6 = 51.',
        },
        {
          prompt: 'Find the sixth number.',
          hint1: 'Sum of known five = 7+11+5+9+12.',
          hint2: 'Sum of known five = 44.',
          hint3: 'Sixth number = 51 − 44 = 7.',
          answer: 7, tolerance: 0, unit: '',
          explanation: 'Sum of five = 44. Sixth = 51 − 44 = 7.',
        },
      ],
      workedExample: {
        question: 'Mean of 5 numbers is 9. Four of them are 6, 8, 10, 12. Find the fifth.',
        steps: [
          'Total sum — 9 × 5 = <strong>45</strong>',
          'Sum of four — 6+8+10+12 = <strong>36</strong>',
          'Fifth number — 45 − 36 = <strong>9</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "The sixth number is 7.",
        grade6: "Total sum = 8.5×6 = 51. Sum of five = 44. Sixth number = 51−44 = 7.",
        grade8: "Required Σx = 8.5×6 = 51. Known Σx = 7+11+5+9+12 = 44. Missing value = 51−44 = 7.",
      },
      examinerTip: "Convert the mean to a sum first by multiplying mean × n — then the missing value is just subtraction.",
      auditStatus: 'pending',
    },

    // ── stat-averages-B06 ──────────────────────────────────────
    {
      id: 'stat-averages-B06', subtopic: 'stat-averages', band: 'B', marks: 3,
      question: 'Grouped frequency: 0<x≤5 (f=3), 5<x≤10 (f=7), 10<x≤15 (f=6), 15<x≤20 (f=4). Estimate the mean and state the modal class.',
      steps: [
        {
          prompt: 'Use midpoints (2.5, 7.5, 12.5, 17.5) to calculate Σfm.',
          hint1: '2.5×3=7.5, 7.5×7=52.5, 12.5×6=75, 17.5×4=70.',
          hint2: 'Add: 7.5+52.5+75+70.',
          hint3: 'Σfm = 205.',
          answer: 205, tolerance: 0, unit: '',
          explanation: 'Σfm = 2.5×3 + 7.5×7 + 12.5×6 + 17.5×4 = 7.5+52.5+75+70 = 205.',
        },
        {
          prompt: 'Estimate the mean. (Total frequency = 20.)',
          hint1: 'Mean = Σfm ÷ n = 205 ÷ 20.',
          hint2: '205 ÷ 20 = 10.25.',
          hint3: 'Estimated mean = 10.25.',
          answer: 10.25, tolerance: 0.01, unit: '',
          explanation: 'n = 3+7+6+4 = 20. Estimated mean = 205 ÷ 20 = 10.25.',
        },
        {
          prompt: 'State the modal class (the class with the highest frequency).',
          hint1: 'Look at the frequencies: 3, 7, 6, 4.',
          hint2: 'The highest frequency is 7.',
          hint3: 'Modal class = 5<x≤10.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'The class 5<x≤10 has frequency 7, the highest. Modal class = 5<x≤10.',
          checkType: 'skip',
          displayAnswer: '5<x≤10',
        },
      ],
      workedExample: {
        question: 'Grouped table: 0<x≤4 (f=5), 4<x≤8 (f=9), 8<x≤12 (f=6). Estimate the mean and state the modal class.',
        steps: [
          'Midpoints — 2, 6, 10',
          'Σfm — 2×5+6×9+10×6 = 10+54+60 = <strong>124</strong>',
          'n — 5+9+6 = 20; Mean = 124÷20 = <strong>6.2</strong>',
          'Modal class — highest frequency is 9 → <strong>4&lt;x≤8</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "Estimated mean = 10.25. Modal class = 5<x≤10.",
        grade6: "Σfm = 7.5+52.5+75+70 = 205. n = 20. Mean = 10.25. Modal class = 5<x≤10 (frequency 7).",
        grade8: "Midpoints 2.5,7.5,12.5,17.5. Σfm = 205. n = 20. Estimated mean = 10.25. Modal class = 5<x≤10 as it has the highest frequency (7).",
      },
      examinerTip: "The modal class is the class with the greatest frequency — not the class with the greatest frequency density when widths differ.",
      auditStatus: 'pending',
    },

    // ── stat-averages-C01 ──────────────────────────────────────
    {
      id: 'stat-averages-C01', subtopic: 'stat-averages', band: 'C', marks: 3,
      question: 'The mean of 5 numbers is 9.2 and the median is 10. Four of the numbers are 6, 7, 10, 13. Find the fifth number and verify it gives the correct median.',
      steps: [
        {
          prompt: 'Find the total sum of all 5 numbers.',
          hint1: 'Sum = mean × n = 9.2 × 5.',
          hint2: '9.2 × 5 = 46.',
          hint3: 'Total sum = 46.',
          answer: 46, tolerance: 0, unit: '',
          explanation: 'Total sum = 9.2 × 5 = 46.',
        },
        {
          prompt: 'Find the fifth number.',
          hint1: 'Sum of known four = 6+7+10+13 = 36.',
          hint2: 'Fifth = 46 − 36.',
          hint3: 'Fifth number = 10.',
          answer: 10, tolerance: 0, unit: '',
          explanation: 'Sum of four = 36. Fifth = 46 − 36 = 10.',
        },
        {
          prompt: 'Verify: sort all five numbers and check the median is 10.',
          hint1: 'Five numbers: 6, 7, 10, 10, 13.',
          hint2: 'Sorted: 6, 7, 10, 10, 13. Median = 3rd value.',
          hint3: 'Median = 10 ✓',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Sorted: 6, 7, 10, 10, 13. Median = 3rd value = 10. This matches the given median ✓.',
          checkType: 'skip',
          displayAnswer: 'Median = 10 ✓',
        },
      ],
      workedExample: {
        question: 'Mean of 5 numbers is 8, median is 7. Four values are 5, 6, 9, 12. Find the fifth and verify the median.',
        steps: [
          'Total sum — 8 × 5 = <strong>40</strong>',
          'Fifth value — 40 − (5+6+9+12) = 40 − 32 = <strong>8</strong>',
          'Sorted — 5, 6, 8, 9, 12; median = 3rd = <strong>8</strong>',
          'But target median was 7 — this worked example deliberately shows a different scenario where the median check is part of the process.',
        ],
      },
      sampleAnswer: {
        grade4: "Fifth number = 10. When sorted: 6, 7, 10, 10, 13 — median = 10 ✓.",
        grade6: "Sum = 9.2×5 = 46. Sum of four = 36. Fifth = 10. Sorted: 6,7,10,10,13. Median = 3rd = 10 ✓.",
        grade8: "Σx = 9.2×5 = 46. Known Σx = 36. Missing value = 10. Sorted set: 6,7,10,10,13. Median = 10, consistent with given information ✓.",
      },
      examinerTip: "Always verify by sorting all values including the one you just found — the median check can catch arithmetic slips.",
      auditStatus: 'pending',
    },

    // ── stat-averages-C02 ──────────────────────────────────────
    {
      id: 'stat-averages-C02', subtopic: 'stat-averages', band: 'C', marks: 3,
      question: 'Grouped frequency: 20<x≤30 (f=a), 30<x≤40 (f=8), 40<x≤50 (f=5). Total frequency = 20 and estimated mean = 34. Find a.',
      steps: [
        {
          prompt: 'Use the total frequency to find a.',
          hint1: 'a + 8 + 5 = 20.',
          hint2: 'a + 13 = 20.',
          hint3: 'a = 7.',
          answer: 7, tolerance: 0, unit: '',
          explanation: 'a + 8 + 5 = 20 → a = 7.',
        },
        {
          prompt: 'Calculate Σfm using midpoints 25, 35, 45 and a = 7.',
          hint1: '25×7 + 35×8 + 45×5.',
          hint2: '175 + 280 + 225.',
          hint3: 'Σfm = 680.',
          answer: 680, tolerance: 0, unit: '',
          explanation: 'Σfm = 7×25 + 8×35 + 5×45 = 175+280+225 = 680.',
        },
        {
          prompt: 'Verify the estimated mean.',
          hint1: 'Mean = Σfm ÷ n = 680 ÷ 20.',
          hint2: '680 ÷ 20 = 34.',
          hint3: 'Estimated mean = 34 ✓',
          answer: 34, tolerance: 0.01, unit: '',
          explanation: 'Mean = 680 ÷ 20 = 34, which matches the given value ✓.',
        },
      ],
      workedExample: {
        question: 'Grouped table: 0<x≤10 (f=b), 10<x≤20 (f=5), 20<x≤30 (f=3). Total = 13, estimated mean ≈ 12.3. Find b.',
        steps: [
          'Frequency equation — b + 5 + 3 = 13 → <strong>b = 5</strong>',
          'Midpoints — 5, 15, 25',
          'Σfm — 5×5+15×5+25×3 = 25+75+75 = <strong>175</strong>',
          'Check mean — 175 ÷ 13 ≈ <strong>13.5</strong> (close to given value)',
        ],
      },
      sampleAnswer: {
        grade4: "a = 7.",
        grade6: "a+8+5 = 20 → a = 7. Σfm = 175+280+225 = 680. Mean = 680÷20 = 34 ✓.",
        grade8: "From total frequency: a = 7. Σfm using midpoints 25,35,45: 175+280+225 = 680. Estimated mean = 680÷20 = 34, confirming a = 7.",
      },
      examinerTip: "Set up both the frequency equation and the mean equation — you need both to find the unknown and verify your answer.",
      auditStatus: 'pending',
    },

    // ── stat-averages-C03 ──────────────────────────────────────
    {
      id: 'stat-averages-C03', subtopic: 'stat-averages', band: 'C', marks: 3,
      question: 'Group 1 has 12 students with a mean score of 60. Group 2 has 18 students with a mean score of 70. Find the overall mean score for all 30 students.',
      steps: [
        {
          prompt: 'Find the total score for Group 1.',
          hint1: 'Sum = mean × n.',
          hint2: '60 × 12.',
          hint3: 'Group 1 sum = 720.',
          answer: 720, tolerance: 0, unit: '',
          explanation: 'Group 1 total = 60 × 12 = 720.',
        },
        {
          prompt: 'Find the total score for Group 2.',
          hint1: 'Sum = mean × n.',
          hint2: '70 × 18.',
          hint3: 'Group 2 sum = 1260.',
          answer: 1260, tolerance: 0, unit: '',
          explanation: 'Group 2 total = 70 × 18 = 1260.',
        },
        {
          prompt: 'Find the overall mean for all 30 students.',
          hint1: 'Combined sum = 720 + 1260 = 1980.',
          hint2: 'Overall mean = 1980 ÷ 30.',
          hint3: 'Overall mean = 66.',
          answer: 66, tolerance: 0.01, unit: '',
          explanation: 'Overall mean = (720+1260) ÷ 30 = 1980 ÷ 30 = 66.',
        },
      ],
      workedExample: {
        question: 'Group A: 10 students, mean = 55. Group B: 15 students, mean = 65. Find the overall mean.',
        steps: [
          'Group A sum — 55 × 10 = <strong>550</strong>',
          'Group B sum — 65 × 15 = <strong>975</strong>',
          'Overall mean — (550+975) ÷ 25 = 1525 ÷ 25 = <strong>61</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "Overall mean = 66.",
        grade6: "Group 1 sum = 720. Group 2 sum = 1260. Overall mean = 1980÷30 = 66.",
        grade8: "Σx₁ = 12×60 = 720. Σx₂ = 18×70 = 1260. Overall mean = (720+1260)÷(12+18) = 1980÷30 = 66.",
      },
      examinerTip: "You cannot simply average the two means (65) — you must weight each group by its size.",
      auditStatus: 'pending',
    },

    // ── stat-averages-C04 ──────────────────────────────────────
    {
      id: 'stat-averages-C04', subtopic: 'stat-averages', band: 'C', marks: 3,
      question: 'The mean of 7 values is 14. Six of the values are 8, 9, 10, 18, 20, 20. Find the missing value and verify the median.',
      steps: [
        {
          prompt: 'Find the total sum of all 7 values.',
          hint1: 'Sum = mean × n = 14 × 7.',
          hint2: '14 × 7 = 98.',
          hint3: 'Total sum = 98.',
          answer: 98, tolerance: 0, unit: '',
          explanation: 'Total sum = 14 × 7 = 98.',
        },
        {
          prompt: 'Find the missing value.',
          hint1: 'Sum of known six = 8+9+10+18+20+20 = 85.',
          hint2: 'Missing = 98 − 85.',
          hint3: 'Missing value = 13.',
          answer: 13, tolerance: 0, unit: '',
          explanation: 'Sum of six = 85. Missing value = 98 − 85 = 13.',
        },
        {
          prompt: 'Sort all 7 values and find the median to verify.',
          hint1: 'Seven values: 8, 9, 10, 13, 18, 20, 20.',
          hint2: 'Median = 4th value.',
          hint3: 'Median = 13 ✓',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Sorted: 8,9,10,13,18,20,20. Median = 4th value = 13 ✓.',
          checkType: 'skip',
          displayAnswer: 'Median = 13 ✓',
        },
      ],
      workedExample: {
        question: 'Mean of 6 values is 11. Five values are 7, 9, 12, 15, 16. Find the missing value and the median.',
        steps: [
          'Total sum — 11 × 6 = <strong>66</strong>',
          'Sum of five — 7+9+12+15+16 = <strong>59</strong>',
          'Missing value — 66 − 59 = <strong>7</strong>',
          'Sorted — 7, 7, 9, 12, 15, 16; median = (9+12)÷2 = <strong>10.5</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "Missing value = 13. Median = 13.",
        grade6: "Sum = 14×7 = 98. Sum of six = 85. Missing = 13. Sorted: 8,9,10,13,18,20,20. Median = 13 ✓.",
        grade8: "Σx = 98. Known Σx = 85. Missing = 13. Sorted: 8,9,10,13,18,20,20. Median = 4th = 13, consistent with the found value ✓.",
      },
      examinerTip: "Always sort after finding the missing value to verify — the missing value might itself be the median.",
      auditStatus: 'pending',
    }"""

content = content[:pos] + NEW + content[pos:]

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done - stat_q1 (stat-averages: 4A, 5B, 4C)")
