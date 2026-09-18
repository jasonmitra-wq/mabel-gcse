import os

FILE = 'js/maths-questions.js'
with open(FILE, encoding='utf-8') as f:
    content = f.read()

MARKER = "\n\n    // ══════════════════════════════════════════════════════════\n    // SCATTER GRAPHS (stat-scatter)"
pos = content.find(MARKER)
if pos == -1:
    print("MARKER NOT FOUND"); exit(1)
print(f"Inserting stat-charts block at char {pos}")

NEW = """

    // ── stat-charts-A02 ──────────────────────────────────────
    {
      id: 'stat-charts-A02', subtopic: 'stat-charts', band: 'A', marks: 3,
      question: '120 people were surveyed about their favourite pet. 30 chose cats, 50 chose dogs, 40 chose rabbits. Calculate the pie chart angle for each pet.',
      steps: [
        {
          prompt: 'Calculate the angle for cats.',
          hint1: 'Angle = (frequency ÷ total) × 360.',
          hint2: '(30 ÷ 120) × 360.',
          hint3: 'Cats = 90°.',
          answer: 90, tolerance: 0, unit: '°',
          explanation: 'Cats: (30/120) × 360 = 0.25 × 360 = 90°.',
        },
        {
          prompt: 'Calculate the angle for dogs.',
          hint1: '(50 ÷ 120) × 360.',
          hint2: '50/120 = 5/12. 5/12 × 360 = 150.',
          hint3: 'Dogs = 150°.',
          answer: 150, tolerance: 0, unit: '°',
          explanation: 'Dogs: (50/120) × 360 = 150°.',
        },
        {
          prompt: 'Calculate the angle for rabbits. Check all three sum to 360°.',
          hint1: '(40 ÷ 120) × 360.',
          hint2: '40/120 = 1/3. 1/3 × 360 = 120.',
          hint3: 'Rabbits = 120°. Check: 90+150+120 = 360 ✓',
          answer: 120, tolerance: 0, unit: '°',
          explanation: 'Rabbits: (40/120) × 360 = 120°. Total: 90+150+120 = 360° ✓.',
        },
      ],
      workedExample: {
        question: '180 people surveyed: 60 prefer tennis, 90 prefer football, 30 prefer swimming. Find each pie chart angle.',
        steps: [
          'Tennis — (60/180) × 360 = <strong>120°</strong>',
          'Football — (90/180) × 360 = <strong>180°</strong>',
          'Swimming — (30/180) × 360 = <strong>60°</strong>',
          'Check — 120+180+60 = 360° ✓',
        ],
      },
      sampleAnswer: {
        grade4: "Cats = 90°, dogs = 150°, rabbits = 120°.",
        grade6: "Cats: 30/120 × 360 = 90°. Dogs: 50/120 × 360 = 150°. Rabbits: 40/120 × 360 = 120°. Total = 360° ✓.",
        grade8: "Each angle = (frequency/total) × 360. Cats: 90°, dogs: 150°, rabbits: 120°. Sum = 360° confirming all data is accounted for.",
      },
      examinerTip: "Always check that your angles sum to exactly 360° — this catches arithmetic errors before you draw the chart.",
      auditStatus: 'pending',
    },

    // ── stat-charts-A03 ──────────────────────────────────────
    {
      id: 'stat-charts-A03', subtopic: 'stat-charts', band: 'A', marks: 2,
      question: 'Monthly rainfall: Jan = 45 mm, Feb = 30 mm, Mar = 55 mm, Apr = 25 mm. Find (a) the range and (b) the total rainfall.',
      steps: [
        {
          prompt: 'Find the range of rainfall.',
          hint1: 'Range = largest − smallest.',
          hint2: 'Largest = 55, smallest = 25.',
          hint3: 'Range = 55 − 25 = 30 mm.',
          answer: 30, tolerance: 0, unit: 'mm',
          explanation: 'Range = 55 − 25 = 30 mm.',
        },
        {
          prompt: 'Find the total rainfall over the four months.',
          hint1: 'Add all four values: 45+30+55+25.',
          hint2: '45+30 = 75; 75+55 = 130; 130+25 = 155.',
          hint3: 'Total = 155 mm.',
          answer: 155, tolerance: 0, unit: 'mm',
          explanation: 'Total = 45+30+55+25 = 155 mm.',
        },
      ],
      workedExample: {
        question: 'Temperatures (°C): 12, 18, 9, 21. Find the range and total.',
        steps: [
          'Range — 21 − 9 = <strong>12°C</strong>',
          'Total — 12+18+9+21 = <strong>60°C</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "Range = 30 mm. Total = 155 mm.",
        grade6: "Range = 55 − 25 = 30 mm. Total = 45+30+55+25 = 155 mm.",
        grade8: "Range = max − min = 55 − 25 = 30 mm. Total = 155 mm. The range shows the variation between wettest and driest months.",
      },
      examinerTip: "Range is always max minus min — students sometimes write the values without subtracting.",
      auditStatus: 'pending',
    },

    // ── stat-charts-A04 ──────────────────────────────────────
    {
      id: 'stat-charts-A04', subtopic: 'stat-charts', band: 'A', marks: 2,
      question: 'In a class of 40 students, 27 prefer pop music and 13 prefer rock. Find the pie chart angle for (a) pop and (b) rock.',
      steps: [
        {
          prompt: 'Find the angle for pop music.',
          hint1: 'Angle = (27 ÷ 40) × 360.',
          hint2: '27 × 360 = 9720; 9720 ÷ 40 = 243.',
          hint3: 'Pop angle = 243°.',
          answer: 243, tolerance: 0, unit: '°',
          explanation: 'Pop: (27/40) × 360 = 243°.',
        },
        {
          prompt: 'Find the angle for rock. Check both angles sum to 360°.',
          hint1: 'Angle = (13 ÷ 40) × 360.',
          hint2: '13 × 360 = 4680; 4680 ÷ 40 = 117.',
          hint3: 'Rock angle = 117°. Check: 243+117 = 360 ✓.',
          answer: 117, tolerance: 0, unit: '°',
          explanation: 'Rock: (13/40) × 360 = 117°. Total: 243+117 = 360° ✓.',
        },
      ],
      workedExample: {
        question: '60 students: 45 chose science, 15 chose art. Find the pie chart angles.',
        steps: [
          'Science — (45/60) × 360 = <strong>270°</strong>',
          'Art — (15/60) × 360 = <strong>90°</strong>',
          'Check — 270+90 = 360° ✓',
        ],
      },
      sampleAnswer: {
        grade4: "Pop = 243°, rock = 117°.",
        grade6: "Pop: (27/40) × 360 = 243°. Rock: (13/40) × 360 = 117°. Check: 360° ✓.",
        grade8: "Pop: (27/40) × 360 = 243°. Rock: (13/40) × 360 = 117°. Sum = 360°, which confirms the fractions are complementary.",
      },
      examinerTip: "When there are only two categories, find one angle and subtract from 360° — it is a useful arithmetic check.",
      auditStatus: 'pending',
    },

    // ── stat-charts-A05 ──────────────────────────────────────
    {
      id: 'stat-charts-A05', subtopic: 'stat-charts', band: 'A', marks: 2,
      question: 'A pie chart has four sectors. Three of the angles are 90°, 120° and 80°. Find the fourth angle and the fraction of data it represents.',
      steps: [
        {
          prompt: 'Find the fourth angle.',
          hint1: 'All angles in a pie chart sum to 360°.',
          hint2: '90+120+80 = 290. Fourth = 360 − 290.',
          hint3: 'Fourth angle = 70°.',
          answer: 70, tolerance: 0, unit: '°',
          explanation: 'Fourth angle = 360 − 90 − 120 − 80 = 70°.',
        },
        {
          prompt: 'Express the fourth sector as a fraction of the whole.',
          hint1: 'Fraction = angle ÷ 360.',
          hint2: '70 ÷ 360 = 7/36.',
          hint3: 'Fraction = 7/36 ≈ 0.194.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Fraction = 70/360 = 7/36 ≈ 0.194.',
          checkType: 'skip',
          displayAnswer: '7/36 ≈ 0.194',
        },
      ],
      workedExample: {
        question: 'Three angles in a pie chart are 100°, 130° and 95°. Find the fourth angle and the fraction it represents.',
        steps: [
          'Sum of three — 100+130+95 = 325',
          'Fourth angle — 360 − 325 = <strong>35°</strong>',
          'Fraction — 35/360 = <strong>7/72 ≈ 0.097</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "Fourth angle = 70°. Fraction = 7/36.",
        grade6: "360 − 90 − 120 − 80 = 70°. Fraction = 70/360 = 7/36 ≈ 0.194.",
        grade8: "Fourth angle = 360 − 290 = 70°. As a fraction: 70/360 = 7/36. As a decimal: ≈ 0.194 (3 s.f.).",
      },
      examinerTip: "Always simplify fractions where possible — 70/360 cancels to 7/36 by dividing both by 10.",
      auditStatus: 'pending',
    },

    // ── stat-charts-B02 ──────────────────────────────────────
    {
      id: 'stat-charts-B02', subtopic: 'stat-charts', band: 'B', marks: 3,
      question: 'A histogram has three classes: 0<x≤4 (freq density = 1.5, width = 4), 4<x≤8 (freq density = 3.5, width = 4), 8<x≤16 (freq density = 2, width = 8). Find the frequency for each class and the total frequency.',
      steps: [
        {
          prompt: 'Find the frequency for class 4<x≤8.',
          hint1: 'Frequency = frequency density × class width.',
          hint2: '3.5 × 4.',
          hint3: 'f₂ = 14.',
          answer: 14, tolerance: 0, unit: '',
          explanation: 'f₂ = frequency density × width = 3.5 × 4 = 14.',
        },
        {
          prompt: 'Find the frequency for class 8<x≤16.',
          hint1: 'Frequency = frequency density × class width.',
          hint2: '2 × 8.',
          hint3: 'f₃ = 16.',
          answer: 16, tolerance: 0, unit: '',
          explanation: 'f₃ = 2 × 8 = 16.',
        },
        {
          prompt: 'Find the total frequency. (f₁ = 1.5 × 4 = 6.)',
          hint1: 'Add all three frequencies: 6 + 14 + 16.',
          hint2: '6+14 = 20; 20+16 = 36.',
          hint3: 'Total = 36.',
          answer: 36, tolerance: 0, unit: '',
          explanation: 'f₁ = 6, f₂ = 14, f₃ = 16. Total = 36.',
        },
      ],
      workedExample: {
        question: 'Histogram: 0<x≤5 (fd=2, w=5), 5<x≤15 (fd=3, w=10). Find each frequency and the total.',
        steps: [
          'f₁ — 2 × 5 = <strong>10</strong>',
          'f₂ — 3 × 10 = <strong>30</strong>',
          'Total — 10+30 = <strong>40</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "f₁=6, f₂=14, f₃=16. Total = 36.",
        grade6: "f = fd × width. f₁ = 1.5×4 = 6; f₂ = 3.5×4 = 14; f₃ = 2×8 = 16. Total = 36.",
        grade8: "In a histogram, frequency = frequency density × class width. f₁=6, f₂=14, f₃=16. Total frequency = 36.",
      },
      examinerTip: "In a histogram, frequency equals area (fd × width), not height. Remember this especially when class widths differ.",
      auditStatus: 'pending',
    },

    // ── stat-charts-B03 ──────────────────────────────────────
    {
      id: 'stat-charts-B03', subtopic: 'stat-charts', band: 'B', marks: 3,
      question: 'A histogram shows class 15≤x<25 with frequency density 4.2 and class 25≤x<30 with frequency density 6.8. Find the frequency for each class. How many more students are in the 15–25 class?',
      steps: [
        {
          prompt: 'Find the frequency for class 15≤x<25 (width = 10).',
          hint1: 'Frequency = frequency density × class width.',
          hint2: '4.2 × 10.',
          hint3: 'f₁ = 42.',
          answer: 42, tolerance: 0, unit: '',
          explanation: 'f₁ = 4.2 × 10 = 42.',
        },
        {
          prompt: 'Find the frequency for class 25≤x<30 (width = 5).',
          hint1: 'Frequency = frequency density × class width.',
          hint2: '6.8 × 5.',
          hint3: 'f₂ = 34.',
          answer: 34, tolerance: 0, unit: '',
          explanation: 'f₂ = 6.8 × 5 = 34.',
        },
        {
          prompt: 'How many more students are in the 15–25 class than the 25–30 class?',
          hint1: 'Difference = 42 − 34.',
          hint2: '42 − 34 = 8.',
          hint3: '8 more students.',
          answer: 8, tolerance: 0, unit: '',
          explanation: '42 − 34 = 8 more students in the 15–25 class.',
        },
      ],
      workedExample: {
        question: 'Class A: fd=3, width=8. Class B: fd=5, width=4. Find each frequency and how many more are in class A.',
        steps: [
          'Class A frequency — 3 × 8 = <strong>24</strong>',
          'Class B frequency — 5 × 4 = <strong>20</strong>',
          'Difference — 24 − 20 = <strong>4 more in class A</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "15–25 class: 42 students. 25–30 class: 34 students. 8 more in the 15–25 class.",
        grade6: "f(15–25) = 4.2×10 = 42. f(25–30) = 6.8×5 = 34. Difference = 42−34 = 8.",
        grade8: "Despite having a lower frequency density, the wider 15–25 class (width 10) contains more students: 42 vs 34. Difference = 8. This illustrates why area, not height, represents frequency.",
      },
      examinerTip: "A taller bar does not always mean more students — multiply fd × width to find the actual frequency.",
      auditStatus: 'pending',
    },

    // ── stat-charts-B04 ──────────────────────────────────────
    {
      id: 'stat-charts-B04', subtopic: 'stat-charts', band: 'B', marks: 3,
      question: 'Cumulative frequencies: ≤10: 5, ≤20: 18, ≤30: 29, ≤40: 40. Find the individual class frequencies and state the modal class.',
      steps: [
        {
          prompt: 'Find the frequency for the class 10<x≤20.',
          hint1: 'Individual frequency = cumulative frequency − previous cumulative frequency.',
          hint2: '18 − 5.',
          hint3: 'f₂ = 13.',
          answer: 13, tolerance: 0, unit: '',
          explanation: 'f(10<x≤20) = 18 − 5 = 13.',
        },
        {
          prompt: 'Find the frequency for the class 20<x≤30.',
          hint1: 'f₃ = cf(≤30) − cf(≤20).',
          hint2: '29 − 18.',
          hint3: 'f₃ = 11.',
          answer: 11, tolerance: 0, unit: '',
          explanation: 'f(20<x≤30) = 29 − 18 = 11.',
        },
        {
          prompt: 'State the modal class. (Frequencies are: 5, 13, 11, 11.)',
          hint1: 'The modal class has the highest individual frequency.',
          hint2: 'Frequencies: f₁=5, f₂=13, f₃=11, f₄=11.',
          hint3: 'Modal class = 10<x≤20 (f = 13).',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Frequencies: 5, 13, 11, 11. Highest is 13. Modal class = 10<x≤20.',
          checkType: 'skip',
          displayAnswer: '10<x≤20',
        },
      ],
      workedExample: {
        question: 'Cumulative frequencies: ≤5: 3, ≤10: 11, ≤15: 18, ≤20: 24. Find individual frequencies and the modal class.',
        steps: [
          'f₁ = 3; f₂ = 11−3 = <strong>8</strong>; f₃ = 18−11 = <strong>7</strong>; f₄ = 24−18 = <strong>6</strong>',
          'Modal class — highest frequency is 8 → <strong>5&lt;x≤10</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "Frequencies: 5, 13, 11, 11. Modal class = 10<x≤20.",
        grade6: "f₁=5; f₂=18−5=13; f₃=29−18=11; f₄=40−29=11. Highest frequency = 13. Modal class = 10<x≤20.",
        grade8: "Individual frequencies found by differencing: 5, 13, 11, 11. Modal class = 10<x≤20 with frequency 13.",
      },
      examinerTip: "To find individual class frequencies from cumulative ones, always subtract consecutive values — not from zero each time.",
      auditStatus: 'pending',
    },

    // ── stat-charts-B05 ──────────────────────────────────────
    {
      id: 'stat-charts-B05', subtopic: 'stat-charts', band: 'B', marks: 2,
      question: 'In a pie chart, the sector for "Football" has an angle of 135°. There are 200 people in the survey. How many people chose football?',
      steps: [
        {
          prompt: 'Express the sector as a fraction of the whole circle.',
          hint1: 'Fraction = angle ÷ 360.',
          hint2: '135 ÷ 360 = 0.375.',
          hint3: 'Fraction = 0.375.',
          answer: 0.375, tolerance: 0.005, unit: '',
          explanation: 'Fraction = 135/360 = 0.375.',
        },
        {
          prompt: 'Find the number of people who chose football.',
          hint1: 'Number = fraction × total.',
          hint2: '0.375 × 200.',
          hint3: '75 people.',
          answer: 75, tolerance: 0, unit: '',
          explanation: '0.375 × 200 = 75 people.',
        },
      ],
      workedExample: {
        question: 'A sector has angle 72°. The survey has 250 people. How many does it represent?',
        steps: [
          'Fraction — 72 ÷ 360 = <strong>0.2</strong>',
          'Number — 0.2 × 250 = <strong>50 people</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "75 people chose football.",
        grade6: "Fraction = 135/360 = 0.375. Number = 0.375 × 200 = 75.",
        grade8: "135/360 = 3/8. (3/8) × 200 = 75. A sector of 135° represents 37.5% of the data.",
      },
      examinerTip: "Divide the angle by 360 first to get the proportion, then multiply by the total — do not skip the middle step.",
      auditStatus: 'pending',
    },

    // ── stat-charts-B06 ──────────────────────────────────────
    {
      id: 'stat-charts-B06', subtopic: 'stat-charts', band: 'B', marks: 3,
      question: 'A two-way table shows 80 students. Boys: 20 prefer maths, 15 prefer English (35 total). Girls: 18 prefer maths, 27 prefer English (45 total). Find (a) P(prefers maths) and (b) P(girl | prefers maths).',
      steps: [
        {
          prompt: 'Find the total number of students who prefer maths.',
          hint1: 'Add the maths column: boys + girls.',
          hint2: '20 + 18.',
          hint3: 'Total preferring maths = 38.',
          answer: 38, tolerance: 0, unit: '',
          explanation: 'Total preferring maths = 20+18 = 38.',
        },
        {
          prompt: 'Find P(prefers maths) as a simplified fraction.',
          hint1: 'P(maths) = 38 out of 80 students.',
          hint2: '38/80 simplifies by dividing by 2.',
          hint3: 'P(maths) = 19/40.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'P(maths) = 38/80 = 19/40.',
          checkType: 'skip',
          displayAnswer: '19/40',
        },
        {
          prompt: 'Find P(girl | prefers maths) — the probability a randomly chosen maths-preferrer is a girl.',
          hint1: 'Of the 38 who prefer maths, 18 are girls.',
          hint2: '18/38 simplifies by dividing by 2.',
          hint3: 'P(girl | maths) = 9/19 ≈ 0.474.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'P(girl | maths) = 18/38 = 9/19 ≈ 0.474.',
          checkType: 'skip',
          displayAnswer: '9/19 ≈ 0.474',
        },
      ],
      workedExample: {
        question: '60 students: boys 15 like science, 10 history (25 total). Girls: 20 science, 15 history (35 total). Find P(science) and P(boy | science).',
        steps: [
          'Total science — 15+20 = <strong>35</strong>',
          'P(science) — 35/60 = <strong>7/12</strong>',
          'P(boy | science) — 15/35 = <strong>3/7</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "P(maths) = 19/40. P(girl | maths) = 9/19.",
        grade6: "38 prefer maths. P(maths) = 38/80 = 19/40. Of the 38 maths-preferrers, 18 are girls. P(girl|maths) = 18/38 = 9/19.",
        grade8: "P(maths) = 38/80 = 19/40. Conditional probability: P(girl|maths) = 18/38 = 9/19 ≈ 0.474. The denominator narrows to just those preferring maths.",
      },
      examinerTip: "For conditional probability, the denominator changes — it's the size of the restricted group, not the whole class.",
      auditStatus: 'pending',
    },

    // ── stat-charts-C01 ──────────────────────────────────────
    {
      id: 'stat-charts-C01', subtopic: 'stat-charts', band: 'C', marks: 3,
      question: 'A pie chart has sector A = 120°, sector B = 90°, sector C = 150°. A student claims "sector A is more than twice the size of sector B." Is this correct? Show your working.',
      steps: [
        {
          prompt: 'Express sector A as a fraction of the whole.',
          hint1: 'Fraction = angle ÷ 360.',
          hint2: '120 ÷ 360 = 1/3.',
          hint3: 'Sector A = 1/3.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Sector A = 120/360 = 1/3.',
          checkType: 'skip',
          displayAnswer: '1/3',
        },
        {
          prompt: 'Express sector B as a fraction of the whole.',
          hint1: '90 ÷ 360.',
          hint2: '90/360 = 1/4.',
          hint3: 'Sector B = 1/4.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'Sector B = 90/360 = 1/4.',
          checkType: 'skip',
          displayAnswer: '1/4',
        },
        {
          prompt: 'Find the ratio A÷B and decide if the claim is correct.',
          hint1: 'Ratio = (1/3) ÷ (1/4) = (1/3) × 4 = 4/3.',
          hint2: '4/3 ≈ 1.33. Is 1.33 > 2?',
          hint3: 'Ratio = 4/3 ≈ 1.33. Claim is FALSE.',
          answer: 0, tolerance: 0, unit: '',
          explanation: 'A÷B = (1/3)÷(1/4) = 4/3 ≈ 1.33. Since 1.33 < 2, A is NOT more than twice B. Claim is FALSE.',
          checkType: 'skip',
          displayAnswer: 'Ratio = 4/3 ≈ 1.33. Claim is FALSE',
        },
      ],
      workedExample: {
        question: 'Pie chart: sector X = 80°, sector Y = 160°. Student says Y is more than 3 times X. True or false?',
        steps: [
          'Fraction X — 80/360 = 2/9',
          'Fraction Y — 160/360 = 4/9',
          'Ratio Y÷X — (4/9)÷(2/9) = <strong>2</strong>',
          'Claim — 2 is not greater than 3. <strong>FALSE</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "Sector A is not more than twice sector B. The claim is false.",
        grade6: "A = 120/360 = 1/3. B = 90/360 = 1/4. Ratio = (1/3)÷(1/4) = 4/3 ≈ 1.33. Since 1.33 < 2, the claim is FALSE.",
        grade8: "A = 1/3, B = 1/4. For A to be more than twice B we need A/B > 2. A/B = (1/3)/(1/4) = 4/3 ≈ 1.33. Since 1.33 < 2, the claim is FALSE.",
      },
      examinerTip: "Compare sectors by their angles (or fractions) directly — 'twice the size' means the ratio must exceed 2.",
      auditStatus: 'pending',
    },

    // ── stat-charts-C02 ──────────────────────────────────────
    {
      id: 'stat-charts-C02', subtopic: 'stat-charts', band: 'C', marks: 4,
      question: 'A histogram has unequal class widths: 0<x≤10 (f=15), 10<x≤25 (f=30), 25<x≤35 (f=20). Find all three frequency densities and estimate the mean.',
      steps: [
        {
          prompt: 'Find the frequency density for class 0<x≤10 (width = 10).',
          hint1: 'fd = frequency ÷ class width.',
          hint2: '15 ÷ 10.',
          hint3: 'fd₁ = 1.5.',
          answer: 1.5, tolerance: 0.01, unit: '',
          explanation: 'fd₁ = 15 ÷ 10 = 1.5.',
        },
        {
          prompt: 'Find the frequency density for class 10<x≤25 (width = 15) and for class 25<x≤35 (width = 10).',
          hint1: 'fd₂ = 30 ÷ 15; fd₃ = 20 ÷ 10.',
          hint2: 'fd₂ = 2; fd₃ = 2.',
          hint3: 'Both equal 2.',
          answer: 2, tolerance: 0.01, unit: '',
          explanation: 'fd₂ = 30÷15 = 2. fd₃ = 20÷10 = 2.',
        },
        {
          prompt: 'Calculate Σfm using midpoints 5, 17.5 and 30.',
          hint1: '15×5 + 30×17.5 + 20×30.',
          hint2: '75 + 525 + 600.',
          hint3: 'Σfm = 1200.',
          answer: 1200, tolerance: 0, unit: '',
          explanation: 'Σfm = 15×5 + 30×17.5 + 20×30 = 75+525+600 = 1200.',
        },
        {
          prompt: 'Estimate the mean. (Total frequency = 65.)',
          hint1: 'Mean = Σfm ÷ n = 1200 ÷ 65.',
          hint2: '1200 ÷ 65 ≈ 18.46.',
          hint3: 'Estimated mean ≈ 18.46.',
          answer: 18.46, tolerance: 0.05, unit: '',
          explanation: 'Estimated mean = 1200 ÷ 65 ≈ 18.46.',
        },
      ],
      workedExample: {
        question: 'Histogram: 0<x≤5 (f=8, w=5), 5<x≤15 (f=20, w=10), 15<x≤25 (f=12, w=10). Find frequency densities and estimated mean.',
        steps: [
          'fd₁ — 8÷5 = <strong>1.6</strong>; fd₂ — 20÷10 = <strong>2.0</strong>; fd₃ — 12÷10 = <strong>1.2</strong>',
          'Midpoints — 2.5, 10, 20',
          'Σfm — 8×2.5+20×10+12×20 = 20+200+240 = <strong>460</strong>',
          'n — 8+20+12 = 40; Mean = 460÷40 = <strong>11.5</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "fd: 1.5, 2, 2. Estimated mean ≈ 18.46.",
        grade6: "fd₁=1.5, fd₂=2, fd₃=2. Σfm=75+525+600=1200. n=65. Mean=1200÷65≈18.46.",
        grade8: "fd = f÷w: 1.5, 2.0, 2.0. Midpoints 5, 17.5, 30. Σfm = 1200. Estimated mean = 1200÷65 ≈ 18.5 (3 s.f.).",
      },
      examinerTip: "When class widths differ, always compute fd = f÷w before drawing the histogram — height ≠ frequency.",
      auditStatus: 'pending',
    },

    // ── stat-charts-C03 ──────────────────────────────────────
    {
      id: 'stat-charts-C03', subtopic: 'stat-charts', band: 'C', marks: 3,
      question: 'School A has 180 students; 45% chose an animal charity. School B has 240 students; 30% chose an animal charity. Find (a) the number from each school and (b) the combined percentage.',
      steps: [
        {
          prompt: 'Find the number from School A who chose the animal charity.',
          hint1: '45% of 180.',
          hint2: '0.45 × 180.',
          hint3: '81 students.',
          answer: 81, tolerance: 0, unit: '',
          explanation: '0.45 × 180 = 81.',
        },
        {
          prompt: 'Find the number from School B who chose the animal charity.',
          hint1: '30% of 240.',
          hint2: '0.30 × 240.',
          hint3: '72 students.',
          answer: 72, tolerance: 0, unit: '',
          explanation: '0.30 × 240 = 72.',
        },
        {
          prompt: 'Find the combined percentage across both schools.',
          hint1: 'Combined = (81+72) ÷ (180+240) × 100.',
          hint2: '153 ÷ 420 × 100.',
          hint3: '≈ 36.4%.',
          answer: 36.4, tolerance: 0.2, unit: '%',
          explanation: '(81+72)/(180+240) × 100 = 153/420 × 100 ≈ 36.4%.',
        },
      ],
      workedExample: {
        question: 'School X: 200 students, 40% chose reading. School Y: 300 students, 20% chose reading. Find the combined percentage.',
        steps: [
          'School X — 0.40 × 200 = <strong>80</strong>',
          'School Y — 0.20 × 300 = <strong>60</strong>',
          'Combined % — (80+60)/(200+300) × 100 = 140/500 × 100 = <strong>28%</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "School A: 81 students. School B: 72 students. Combined: ≈ 36.4%.",
        grade6: "A: 0.45×180=81. B: 0.30×240=72. Combined: 153/420×100≈36.4%.",
        grade8: "A: 81, B: 72. Combined % = 153/420 × 100 ≈ 36.4%. Note this lies between 30% and 45%, but closer to 30% because School B is larger.",
      },
      examinerTip: "You cannot average the two percentages — you must find actual numbers first, then combine over the total.",
      auditStatus: 'pending',
    },

    // ── stat-charts-C04 ──────────────────────────────────────
    {
      id: 'stat-charts-C04', subtopic: 'stat-charts', band: 'C', marks: 2,
      question: 'In a histogram, the bar for class 20≤x<30 has frequency density 4. The bar for class 30≤x<50 has a frequency of 60. Find the frequency density of the second bar.',
      steps: [
        {
          prompt: 'Find the width of class 30≤x<50.',
          hint1: 'Width = upper boundary − lower boundary.',
          hint2: '50 − 30.',
          hint3: 'Width = 20.',
          answer: 20, tolerance: 0, unit: '',
          explanation: 'Class width = 50 − 30 = 20.',
        },
        {
          prompt: 'Find the frequency density for class 30≤x<50.',
          hint1: 'fd = frequency ÷ class width.',
          hint2: '60 ÷ 20.',
          hint3: 'fd = 3.',
          answer: 3, tolerance: 0, unit: '',
          explanation: 'fd = 60 ÷ 20 = 3.',
        },
      ],
      workedExample: {
        question: 'Bar for 10≤x<20 has frequency 35. Bar for 20≤x<50 has frequency 45. Find each frequency density.',
        steps: [
          'fd(10–20) — 35 ÷ 10 = <strong>3.5</strong>',
          'fd(20–50) — 45 ÷ 30 = <strong>1.5</strong>',
        ],
      },
      sampleAnswer: {
        grade4: "Frequency density = 3.",
        grade6: "Class width = 50−30 = 20. fd = 60÷20 = 3.",
        grade8: "fd = frequency ÷ class width = 60 ÷ 20 = 3. Compare with the first bar: fd = 4, width = 10, so frequency = 40.",
      },
      examinerTip: "Always compute the class width from the boundaries first — wider classes will have a lower fd for the same frequency.",
      auditStatus: 'pending',
    }"""

content = content[:pos] + NEW + content[pos:]

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done - stat_q2 (stat-charts: 4A, 5B, 4C)")
