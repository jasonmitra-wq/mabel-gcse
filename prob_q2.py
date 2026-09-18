with open('js/maths-questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

MARKER = "\n\n    // ══════════════════════════════════════════════════════════\n    // TREE DIAGRAMS (prob-tree-diagrams)"

pos = content.find(MARKER)
print(f"Inserting at char {pos}")
assert pos != -1, "TREE DIAGRAMS marker not found!"

NEW = """
    // comb-A02
    {
      id: 'comb-A02', subtopic: 'prob-combined', band: 'A', marks: 2,
      question: 'A spinner has 3 equal sections (red, blue, green). It is spun twice. Find P(red on both spins) as a fraction.',
      steps: [
        {
          prompt: 'What is P(red) on a single spin?',
          hint1: '3 equal sections, one is red.',
          hint2: 'P(red) = 1/3.',
          hint3: '1/3.',
          answer: 0.3333, tolerance: 0.005, unit: '',
          explanation: 'P(red) = 1/3 since there are 3 equally likely outcomes.',
          displayAnswer: '1/3',
        },
        {
          prompt: 'The two spins are independent. Find P(red on both spins).',
          hint1: 'P(red then red) = P(red) x P(red).',
          hint2: '(1/3) x (1/3) = 1/9.',
          hint3: '1/9.',
          answer: 0.1111, tolerance: 0.005, unit: '',
          explanation: 'P(RR) = (1/3) x (1/3) = 1/9.',
          displayAnswer: '1/9',
        },
      ],
      workedExample: {
        question: 'A fair coin is tossed twice. Find P(two tails).',
        steps: [
          'P(tail) = 1/2 on each toss.',
          'P(TT) = (1/2) x (1/2) = <strong>1/4</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(red both times) = 1/9',
        grade6: 'P(red) = 1/3. Independent spins: P(RR) = 1/3 x 1/3 = 1/9.',
        grade8: 'P(red) = 1/3. Independent events: P(RR) = P(R)^2 = 1/9.',
      },
      examinerTip: 'Students add rather than multiply: P(R) + P(R) = 2/3. For independent repeated events, always multiply the probabilities.',
      auditStatus: 'pending',
    },
    // comb-A03
    {
      id: 'comb-A03', subtopic: 'prob-combined', band: 'A', marks: 2,
      question: 'Two fair dice are rolled. How many outcomes are in the sample space? Find P(sum = 7) as a simplified fraction.',
      steps: [
        {
          prompt: 'How many outcomes are there when two dice are rolled?',
          hint1: 'Each die has 6 faces. Total = 6 x 6.',
          hint2: '36 equally likely outcomes.',
          hint3: '36.',
          answer: 36, tolerance: 0, unit: '',
          explanation: 'Sample space has 6 x 6 = 36 outcomes.',
        },
        {
          prompt: 'List the pairs (d1, d2) that sum to 7. Find P(sum = 7).',
          hint1: 'Pairs: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).',
          hint2: '6 favourable outcomes.',
          hint3: 'P = 6/36 = 1/6.',
          answer: 0.1667, tolerance: 0.005, unit: '',
          explanation: '6 pairs sum to 7. P(sum=7) = 6/36 = 1/6.',
          displayAnswer: '1/6',
        },
      ],
      workedExample: {
        question: 'Two fair dice rolled. Find P(sum = 5).',
        steps: [
          'Sample space: 36 outcomes.',
          'Pairs summing to 5: (1,4),(2,3),(3,2),(4,1) = 4 pairs. P = 4/36 = <strong>1/9</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: '36 outcomes; P(sum=7) = 1/6',
        grade6: '6x6=36 outcomes. Pairs summing to 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. P = 6/36 = 1/6.',
        grade8: 'Sample space 36. Six pairs give sum 7. P = 6/36 = 1/6. Sum of 7 is the most likely total for two dice.',
      },
      examinerTip: 'Students miss some pairs for sum=7, e.g. listing only 3 or 4 pairs. Work systematically: fix the first die and find the matching second die value.',
      auditStatus: 'pending',
    },
    // comb-A04
    {
      id: 'comb-A04', subtopic: 'prob-combined', band: 'A', marks: 2,
      question: 'A fair coin is tossed twice. List all possible outcomes. Find P(exactly one head) as a fraction.',
      steps: [
        {
          prompt: 'List all outcomes for two coin tosses.',
          hint1: 'First toss: H or T. For each, second toss: H or T.',
          hint2: 'Outcomes: HH, HT, TH, TT.',
          hint3: '4 equally likely outcomes.',
          answer: 4, tolerance: 0, unit: '',
          explanation: 'Sample space: {HH, HT, TH, TT} — 4 equally likely outcomes.',
          displayAnswer: '{HH, HT, TH, TT}',
        },
        {
          prompt: 'Find P(exactly one head).',
          hint1: 'Outcomes with exactly one head: HT and TH.',
          hint2: '2 favourable outcomes out of 4.',
          hint3: 'P = 2/4 = 1/2.',
          answer: 0.5, tolerance: 0.005, unit: '',
          explanation: 'P(exactly one head) = 2/4 = 1/2.',
          displayAnswer: '1/2',
        },
      ],
      workedExample: {
        question: 'A fair coin is tossed twice. Find P(at least one tail).',
        steps: [
          'Outcomes: HH, HT, TH, TT. 4 total.',
          'At least one tail: HT, TH, TT = 3 outcomes. P = 3/4.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(exactly one head) = 1/2',
        grade6: 'Outcomes: {HH, HT, TH, TT}. Exactly one head: HT, TH. P = 2/4 = 1/2.',
        grade8: 'Sample space = {HH, HT, TH, TT}. P(exactly one H) = 2/4 = 1/2. Note: HT and TH are different outcomes.',
      },
      examinerTip: 'Students confuse HT and TH as the same outcome, giving only 3 outcomes total and P(exactly one H) = 1/3. Order matters in the sample space.',
      auditStatus: 'pending',
    },
    // comb-A05
    {
      id: 'comb-A05', subtopic: 'prob-combined', band: 'A', marks: 2,
      question: 'A bag has 2 red and 3 blue balls. A ball is drawn, its colour noted, then replaced. A second ball is drawn. Find P(both red) as a fraction.',
      steps: [
        {
          prompt: 'What is P(red) on any single draw? (The ball is replaced each time.)',
          hint1: '2 red out of 5 total.',
          hint2: 'P(red) = 2/5.',
          hint3: '2/5.',
          answer: 0.4, tolerance: 0.005, unit: '',
          explanation: 'P(red) = 2/5. Replacement means the bag is the same for the second draw.',
          displayAnswer: '2/5',
        },
        {
          prompt: 'Find P(both red) = P(red) x P(red).',
          hint1: '(2/5) x (2/5).',
          hint2: '4/25.',
          hint3: '4/25.',
          answer: 0.16, tolerance: 0.005, unit: '',
          explanation: 'P(RR) = (2/5)^2 = 4/25 = 0.16.',
          displayAnswer: '4/25',
        },
      ],
      workedExample: {
        question: 'Bag: 3 green and 2 yellow. Draw, replace, draw again. Find P(both green).',
        steps: [
          'P(green) = 3/5 on each draw (replacement keeps probability the same).',
          'P(GG) = (3/5) x (3/5) = <strong>9/25</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(both red) = 4/25',
        grade6: 'P(red) = 2/5. With replacement, same probability each time. P(RR) = 2/5 x 2/5 = 4/25.',
        grade8: 'P(R) = 2/5. Replacement: independent draws. P(RR) = (2/5)^2 = 4/25 = 0.16.',
      },
      examinerTip: 'Students subtract 1 from numerator and denominator as if without replacement: (2/5) x (1/4) = 2/20 = 1/10. The ball IS replaced, so both draws have the same probability.',
      auditStatus: 'pending',
    },
    // comb-B02
    {
      id: 'comb-B02', subtopic: 'prob-combined', band: 'B', marks: 3,
      question: 'Events A and B are independent. P(A) = 0.3, P(B) = 0.5. Find: (a) P(A and not B), (b) P(not A and B), (c) P(exactly one of A or B occurs).',
      steps: [
        {
          prompt: 'Find P(A and not B). Note P(not B) = 1 - P(B).',
          hint1: 'P(not B) = 1 - 0.5 = 0.5.',
          hint2: 'P(A and not B) = P(A) x P(not B) = 0.3 x 0.5.',
          hint3: '0.15.',
          answer: 0.15, tolerance: 0.005, unit: '',
          explanation: 'P(A and not B) = 0.3 x 0.5 = 0.15.',
        },
        {
          prompt: 'Find P(not A and B). Note P(not A) = 1 - P(A).',
          hint1: 'P(not A) = 1 - 0.3 = 0.7.',
          hint2: 'P(not A and B) = 0.7 x 0.5.',
          hint3: '0.35.',
          answer: 0.35, tolerance: 0.005, unit: '',
          explanation: 'P(not A and B) = 0.7 x 0.5 = 0.35.',
        },
        {
          prompt: 'P(exactly one of A or B) = P(A and not B) + P(not A and B).',
          hint1: '0.15 + 0.35.',
          hint2: '0.50.',
          hint3: '0.5.',
          answer: 0.5, tolerance: 0.005, unit: '',
          explanation: 'P(exactly one) = 0.15 + 0.35 = 0.50.',
        },
      ],
      workedExample: {
        question: 'Independent events: P(A) = 0.4, P(B) = 0.6. Find P(exactly one of A or B).',
        steps: [
          'P(A and not B) = 0.4 x 0.4 = 0.16. P(not A and B) = 0.6 x 0.6 = 0.36.',
          'P(exactly one) = 0.16 + 0.36 = <strong>0.52</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(exactly one) = 0.5',
        grade6: 'P(A, not B) = 0.3x0.5 = 0.15. P(not A, B) = 0.7x0.5 = 0.35. P(exactly one) = 0.5.',
        grade8: 'P(exactly one) = P(A)P(B\') + P(A\')P(B) = 0.3x0.5 + 0.7x0.5 = 0.15+0.35 = 0.50.',
      },
      examinerTip: "Students calculate P(exactly one) = P(A) + P(B) - P(A and B) = 0.3+0.5-0.15 = 0.65, which gives P(A or B), not P(exactly one). You must subtract both the 'both occur' AND 'neither occurs' paths.",
      auditStatus: 'pending',
    },
    // comb-B03
    {
      id: 'comb-B03', subtopic: 'prob-combined', band: 'B', marks: 3,
      question: 'Two fair dice are rolled. Find P(at least one die shows a 5) as a fraction.',
      steps: [
        {
          prompt: 'Use the complement: find P(no 5 on either die) first.',
          hint1: 'P(not 5 on one die) = 5/6.',
          hint2: 'P(no 5 on either die) = (5/6) x (5/6).',
          hint3: '25/36.',
          answer: 0.6944, tolerance: 0.005, unit: '',
          explanation: 'P(no 5 on either die) = (5/6)^2 = 25/36.',
          displayAnswer: '25/36',
        },
        {
          prompt: 'Find P(at least one 5) using the complement.',
          hint1: 'P(at least one 5) = 1 - P(no 5 on either die).',
          hint2: '1 - 25/36.',
          hint3: '11/36.',
          answer: 0.3056, tolerance: 0.005, unit: '',
          explanation: 'P(at least one 5) = 1 - 25/36 = 11/36.',
          displayAnswer: '11/36',
        },
        {
          prompt: 'State your final answer.',
          hint1: '11/36.',
          hint2: 'Check: this is less than 0.5 — reasonable since a 5 is unlikely on each die.',
          hint3: '11/36.',
          answer: 0.3056, tolerance: 0.005, unit: '',
          explanation: 'P(at least one 5) = 11/36.',
          displayAnswer: '11/36',
        },
      ],
      workedExample: {
        question: 'Two fair dice rolled. Find P(at least one 6).',
        steps: [
          'P(no 6 on either die) = (5/6)^2 = 25/36.',
          'P(at least one 6) = 1 - 25/36 = <strong>11/36</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(at least one 5) = 11/36',
        grade6: 'P(no 5 on either) = (5/6)^2 = 25/36. P(at least one 5) = 1 - 25/36 = 11/36.',
        grade8: 'Complement method: P(at least one 5) = 1 - P(no 5)^2 = 1 - 25/36 = 11/36. Direct listing also works: 11 cells in a 6x6 grid contain at least one 5.',
      },
      examinerTip: 'Students add P(5 on die 1) + P(5 on die 2) = 1/6 + 1/6 = 2/6 = 1/3, double-counting the outcome (5,5). Always subtract the overlap, or use the complement method.',
      auditStatus: 'pending',
    },
    // comb-B04
    {
      id: 'comb-B04', subtopic: 'prob-combined', band: 'B', marks: 3,
      question: 'P(rain on Monday) = 0.3, P(rain on Tuesday) = 0.4. The two days are independent. Find P(it rains on at least one of the two days).',
      steps: [
        {
          prompt: 'Use the complement: find P(no rain on either day).',
          hint1: 'P(no rain Mon) = 1 - 0.3 = 0.7.',
          hint2: 'P(no rain Tue) = 1 - 0.4 = 0.6.',
          hint3: 'P(no rain either day) = 0.7 x 0.6 = 0.42.',
          answer: 0.42, tolerance: 0.005, unit: '',
          explanation: 'P(no rain on either day) = 0.7 x 0.6 = 0.42.',
        },
        {
          prompt: 'Find P(rain on at least one day) using the complement.',
          hint1: 'P(at least one rainy day) = 1 - P(no rain either day).',
          hint2: '1 - 0.42.',
          hint3: '0.58.',
          answer: 0.58, tolerance: 0.005, unit: '',
          explanation: 'P(at least one rainy day) = 1 - 0.42 = 0.58.',
        },
        {
          prompt: 'State your final answer.',
          hint1: '0.58.',
          hint2: 'This is more than 0.5 — reasonable since both days have a reasonable chance of rain.',
          hint3: '0.58.',
          answer: 0.58, tolerance: 0.005, unit: '',
          explanation: 'P(at least one rainy day) = 0.58.',
        },
      ],
      workedExample: {
        question: 'P(sunny Sat) = 0.6, P(sunny Sun) = 0.7, independent. Find P(at least one sunny day).',
        steps: [
          'P(not sunny both days) = 0.4 x 0.3 = 0.12.',
          'P(at least one sunny) = 1 - 0.12 = <strong>0.88</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(at least one rainy day) = 0.58',
        grade6: 'P(no rain either day) = 0.7 x 0.6 = 0.42. P(at least one rainy) = 1 - 0.42 = 0.58.',
        grade8: 'Complement: P(at least one rainy) = 1 - P(dry Mon) x P(dry Tue) = 1 - 0.7x0.6 = 0.58.',
      },
      examinerTip: 'Students add 0.3 + 0.4 = 0.7, double-counting the case where it rains both days. Use the complement method to avoid this error.',
      auditStatus: 'pending',
    },
    // comb-B05
    {
      id: 'comb-B05', subtopic: 'prob-combined', band: 'B', marks: 3,
      question: 'Events A and B are independent. P(A) = 2/5, P(B) = 1/3. Find P(A and B) and P(A or B) as simplified fractions.',
      steps: [
        {
          prompt: 'For independent events, P(A and B) = P(A) x P(B). Calculate.',
          hint1: '(2/5) x (1/3).',
          hint2: '2/15.',
          hint3: '2/15.',
          answer: 0.1333, tolerance: 0.005, unit: '',
          explanation: 'P(A and B) = (2/5) x (1/3) = 2/15.',
          displayAnswer: '2/15',
        },
        {
          prompt: 'Use the addition rule: P(A or B) = P(A) + P(B) - P(A and B). Convert to 15ths.',
          hint1: 'P(A) = 6/15, P(B) = 5/15, P(A and B) = 2/15.',
          hint2: '6/15 + 5/15 - 2/15 = 9/15.',
          hint3: '9/15.',
          answer: 0.6, tolerance: 0.005, unit: '',
          explanation: 'P(A or B) = 6/15 + 5/15 - 2/15 = 9/15.',
          displayAnswer: '9/15',
        },
        {
          prompt: 'Simplify 9/15.',
          hint1: 'HCF(9, 15) = 3.',
          hint2: '9/15 = 3/5.',
          hint3: '3/5.',
          answer: 0.6, tolerance: 0.005, unit: '',
          explanation: 'P(A or B) = 9/15 = 3/5.',
          displayAnswer: '3/5',
        },
      ],
      workedExample: {
        question: 'Independent events: P(X) = 1/2, P(Y) = 1/4. Find P(X and Y) and P(X or Y).',
        steps: [
          'P(X and Y) = 1/2 x 1/4 = 1/8.',
          'P(X or Y) = 1/2 + 1/4 - 1/8 = 4/8 + 2/8 - 1/8 = <strong>5/8</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(A and B) = 2/15; P(A or B) = 3/5',
        grade6: 'P(A and B) = 2/5 x 1/3 = 2/15. P(A or B) = 6/15 + 5/15 - 2/15 = 9/15 = 3/5.',
        grade8: 'P(A and B) = 2/15 (independent: multiply). P(A or B) = 2/5 + 1/3 - 2/15 = 9/15 = 3/5.',
      },
      examinerTip: 'Students find P(A or B) = 2/5 + 1/3 = 6/15 + 5/15 = 11/15, forgetting to subtract P(A and B) = 2/15. Always apply the full addition rule.',
      auditStatus: 'pending',
    },
    // comb-B06
    {
      id: 'comb-B06', subtopic: 'prob-combined', band: 'B', marks: 3,
      question: 'A fair coin is flipped three times. Find P(at least one head) as a fraction.',
      steps: [
        {
          prompt: 'Use the complement method. Find P(no heads in three flips).',
          hint1: 'P(tail on one flip) = 1/2.',
          hint2: 'P(three tails) = (1/2)^3.',
          hint3: '1/8.',
          answer: 0.125, tolerance: 0.005, unit: '',
          explanation: 'P(no heads) = P(TTT) = (1/2)^3 = 1/8.',
          displayAnswer: '1/8',
        },
        {
          prompt: 'Find P(at least one head).',
          hint1: 'P(at least one head) = 1 - P(no heads).',
          hint2: '1 - 1/8.',
          hint3: '7/8.',
          answer: 0.875, tolerance: 0.005, unit: '',
          explanation: 'P(at least one head) = 1 - 1/8 = 7/8.',
          displayAnswer: '7/8',
        },
        {
          prompt: 'State your final answer.',
          hint1: '7/8.',
          hint2: 'There are 8 equally likely outcomes: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT. 7 have at least one head.',
          hint3: '7/8.',
          answer: 0.875, tolerance: 0.005, unit: '',
          explanation: 'P(at least one head) = 7/8.',
          displayAnswer: '7/8',
        },
      ],
      workedExample: {
        question: 'A fair die is rolled three times. Find P(at least one 6).',
        steps: [
          'P(no 6 on one roll) = 5/6. P(no 6 on all three) = (5/6)^3 = 125/216.',
          'P(at least one 6) = 1 - 125/216 = <strong>91/216</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(at least one head) = 7/8',
        grade6: 'P(TTT) = (1/2)^3 = 1/8. P(at least one H) = 1 - 1/8 = 7/8.',
        grade8: 'Complement: P(at least one H) = 1 - P(TTT) = 1 - (1/2)^3 = 7/8. Direct listing also shows 7 out of 8 outcomes contain a head.',
      },
      examinerTip: 'Students try to list all outcomes containing a head and miss some combinations, giving 6/8 or 5/8. The complement method is more reliable: P(at least one) = 1 - P(none).',
      auditStatus: 'pending',
    },
    // comb-C01
    {
      id: 'comb-C01', subtopic: 'prob-combined', band: 'C', marks: 4,
      question: 'Events A and B satisfy: P(A) = 0.4, P(B) = 0.25, P(A and B) = 0.1. Find P(A|B) and P(B|A). Hence determine whether A and B are independent, justifying your answer.',
      steps: [
        {
          prompt: 'Find P(A|B) using the conditional probability formula.',
          hint1: 'P(A|B) = P(A and B) / P(B).',
          hint2: '0.1 / 0.25.',
          hint3: '0.4.',
          answer: 0.4, tolerance: 0.005, unit: '',
          explanation: 'P(A|B) = 0.1 / 0.25 = 0.4.',
        },
        {
          prompt: 'Find P(B|A).',
          hint1: 'P(B|A) = P(A and B) / P(A).',
          hint2: '0.1 / 0.4.',
          hint3: '0.25.',
          answer: 0.25, tolerance: 0.005, unit: '',
          explanation: 'P(B|A) = 0.1 / 0.4 = 0.25.',
        },
        {
          prompt: 'Compare P(A|B) with P(A), and P(B|A) with P(B). What do you notice?',
          hint1: 'P(A|B) = 0.4 = P(A). P(B|A) = 0.25 = P(B).',
          hint2: 'Knowing B has occurred does not change the probability of A.',
          hint3: 'A and B are independent.',
          answer: 0.4, tolerance: 0.005, unit: '',
          explanation: 'P(A|B) = P(A) = 0.4 and P(B|A) = P(B) = 0.25. Knowing one event occurred does not affect the probability of the other.',
          displayAnswer: 'P(A|B) = P(A), so independent',
        },
        {
          prompt: 'Verify using the multiplication rule for independent events: P(A) x P(B) should equal P(A and B).',
          hint1: 'P(A) x P(B) = 0.4 x 0.25.',
          hint2: '0.4 x 0.25 = 0.1 = P(A and B).',
          hint3: 'Confirmed: A and B are independent.',
          answer: 0.1, tolerance: 0.005, unit: '',
          explanation: 'P(A) x P(B) = 0.4 x 0.25 = 0.1 = P(A and B). Confirmed: A and B are independent.',
        },
      ],
      workedExample: {
        question: 'P(X) = 0.5, P(Y) = 0.6, P(X and Y) = 0.3. Are X and Y independent?',
        steps: [
          'P(X|Y) = 0.3 / 0.6 = 0.5 = P(X).',
          'P(X) x P(Y) = 0.5 x 0.6 = 0.3 = P(X and Y). Confirmed: <strong>independent</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(A|B) = 0.4, P(B|A) = 0.25; A and B are independent',
        grade6: 'P(A|B) = 0.1/0.25 = 0.4 = P(A). P(B|A) = 0.1/0.4 = 0.25 = P(B). Since conditional probs equal unconditional probs, A and B are independent.',
        grade8: 'P(A|B) = 0.4 = P(A) and P(B|A) = 0.25 = P(B). Also P(A)P(B) = 0.1 = P(A and B). All three criteria confirm independence.',
      },
      examinerTip: "Students state 'A and B are independent because P(A and B) = 0.1' without checking P(A) x P(B). You must verify that P(A and B) = P(A) x P(B) for independence.",
      auditStatus: 'pending',
    },
    // comb-C02
    {
      id: 'comb-C02', subtopic: 'prob-combined', band: 'C', marks: 4,
      question: 'Three independent events E, F and G each have probability 1/3. Find P(all three occur), P(none occur) and P(at least one occurs). Give answers as fractions.',
      steps: [
        {
          prompt: 'Find P(all three occur). Independent events: multiply.',
          hint1: 'P(E and F and G) = (1/3) x (1/3) x (1/3).',
          hint2: '(1/3)^3 = 1/27.',
          hint3: '1/27.',
          answer: 0.037, tolerance: 0.005, unit: '',
          explanation: 'P(all three) = (1/3)^3 = 1/27.',
          displayAnswer: '1/27',
        },
        {
          prompt: 'Find P(none occur). P(not E) = P(not F) = P(not G) = 2/3.',
          hint1: 'P(none) = (2/3) x (2/3) x (2/3).',
          hint2: '(2/3)^3 = 8/27.',
          hint3: '8/27.',
          answer: 0.2963, tolerance: 0.005, unit: '',
          explanation: 'P(none) = (2/3)^3 = 8/27.',
          displayAnswer: '8/27',
        },
        {
          prompt: 'Find P(at least one occurs) using the complement.',
          hint1: 'P(at least one) = 1 - P(none).',
          hint2: '1 - 8/27.',
          hint3: '19/27.',
          answer: 0.7037, tolerance: 0.005, unit: '',
          explanation: 'P(at least one) = 1 - 8/27 = 19/27.',
          displayAnswer: '19/27',
        },
        {
          prompt: 'Check: does P(all three) + P(none) + P(exactly one) + P(exactly two) = 1? (State P(at least one) as your final answer.)',
          hint1: 'P(at least one) = 19/27.',
          hint2: '1/27 + 8/27 + other cases = 27/27 = 1 — this must balance.',
          hint3: 'Final answer: 19/27.',
          answer: 0.7037, tolerance: 0.005, unit: '',
          explanation: 'P(at least one) = 19/27. Note: 1/27 + 8/27 = 9/27, so the remaining 18/27 = 19/27... verify: 1-8/27 = 19/27. Correct.',
          displayAnswer: '19/27',
        },
      ],
      workedExample: {
        question: 'Three independent events each with P = 1/2. Find P(all three) and P(at least one).',
        steps: [
          'P(all three) = (1/2)^3 = 1/8.',
          'P(none) = (1/2)^3 = 1/8. P(at least one) = 1 - 1/8 = <strong>7/8</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(all) = 1/27; P(none) = 8/27; P(at least one) = 19/27',
        grade6: 'P(all) = (1/3)^3 = 1/27. P(none) = (2/3)^3 = 8/27. P(at least one) = 1 - 8/27 = 19/27.',
        grade8: 'P(EFG) = 1/27. P(none) = (2/3)^3 = 8/27. P(at least one) = 1 - 8/27 = 19/27.',
      },
      examinerTip: 'Students find P(at least one) = 1 - 1/27 = 26/27, using P(all three) in the complement instead of P(none). Always use P(none occur) in the complement for "at least one".',
      auditStatus: 'pending',
    },
    // comb-C03
    {
      id: 'comb-C03', subtopic: 'prob-combined', band: 'C', marks: 4,
      question: 'Events A and B are mutually exclusive. P(A) = 0.3 and P(A or B) = 0.7. Find P(B) and P(A\' and B\'). Hence find P(A\' or B).',
      steps: [
        {
          prompt: 'A and B are mutually exclusive, so P(A or B) = P(A) + P(B). Find P(B).',
          hint1: '0.3 + P(B) = 0.7.',
          hint2: 'P(B) = 0.7 - 0.3.',
          hint3: '0.4.',
          answer: 0.4, tolerance: 0.005, unit: '',
          explanation: 'P(B) = 0.7 - 0.3 = 0.4.',
        },
        {
          prompt: "Find P(A' and B'), i.e. P(neither A nor B).",
          hint1: "P(A' and B') = P(neither) = 1 - P(A or B).",
          hint2: '1 - 0.7.',
          hint3: '0.3.',
          answer: 0.3, tolerance: 0.005, unit: '',
          explanation: "P(A' and B') = 1 - P(A or B) = 1 - 0.7 = 0.3.",
        },
        {
          prompt: "Find P(A' or B). Use: P(A' or B) = 1 - P(A and B'). Since A and B are mutually exclusive, P(A and B) = 0, so P(A and B') = P(A).",
          hint1: "P(A' or B) = 1 - P(A and B').",
          hint2: "P(A and B') = P(A) - P(A and B) = 0.3 - 0 = 0.3.",
          hint3: "P(A' or B) = 1 - 0.3 = 0.7.",
          answer: 0.7, tolerance: 0.005, unit: '',
          explanation: "P(A' or B) = 1 - P(A and B') = 1 - P(A) = 1 - 0.3 = 0.7 (since A and B mutually exclusive means A and B' = A).",
        },
        {
          prompt: "Verify: P(A' or B) = P(A') + P(B) - P(A' and B). Since A and B are mutually exclusive, P(A' and B) = P(B). Check.",
          hint1: "P(A') = 1 - 0.3 = 0.7. P(B) = 0.4.",
          hint2: "P(A' and B) = P(B) = 0.4 (B is entirely within A').",
          hint3: "P(A' or B) = 0.7 + 0.4 - 0.4 = 0.7. Confirmed.",
          answer: 0.7, tolerance: 0.005, unit: '',
          explanation: "P(A' or B) = P(A') + P(B) - P(A' and B) = 0.7 + 0.4 - 0.4 = 0.7. Confirmed.",
        },
      ],
      workedExample: {
        question: 'Mutually exclusive events X and Y: P(X) = 0.25, P(X or Y) = 0.65. Find P(Y) and P(neither).',
        steps: [
          'P(Y) = 0.65 - 0.25 = 0.40.',
          "P(neither) = 1 - 0.65 = <strong>0.35</strong>.",
        ],
      },
      sampleAnswer: {
        grade4: "P(B) = 0.4; P(neither) = 0.3; P(A' or B) = 0.7",
        grade6: 'P(B) = 0.4. P(neither) = 1 - 0.7 = 0.3. P(A\' or B) = 0.7.',
        grade8: "P(B) = 0.4. P(A'B') = 0.3. P(A' or B) = 1 - P(A and B') = 1 - 0.3 = 0.7.",
      },
      examinerTip: "Students confuse P(A' and B') with P(A' or B'). De Morgan's law: P(A' and B') = 1 - P(A or B), not 1 - P(A and B).",
      auditStatus: 'pending',
    },
    // comb-C04
    {
      id: 'comb-C04', subtopic: 'prob-combined', band: 'C', marks: 4,
      question: 'Two fair dice are rolled. Given that both dice show different numbers, find P(the sum exceeds 9). Give your answer as a simplified fraction.',
      steps: [
        {
          prompt: 'How many outcomes have both dice showing different numbers?',
          hint1: 'Total outcomes = 36. Same-number outcomes: (1,1),(2,2),(3,3),(4,4),(5,5),(6,6) = 6.',
          hint2: 'Different-number outcomes = 36 - 6 = 30.',
          hint3: '30.',
          answer: 30, tolerance: 0, unit: '',
          explanation: 'Outcomes with different numbers = 36 - 6 = 30.',
        },
        {
          prompt: 'List outcomes where sum > 9 AND both dice are different.',
          hint1: 'Sum > 9 means sum = 10, 11, or 12.',
          hint2: 'Sum 10 different: (4,6),(6,4). Sum 11: (5,6),(6,5). Sum 12: (6,6) — same, excluded.',
          hint3: '(4,6),(6,4),(5,6),(6,5) = 4 outcomes.',
          answer: 4, tolerance: 0, unit: '',
          explanation: 'Outcomes with sum > 9 and different numbers: (4,6),(6,4),(5,6),(6,5) = 4 outcomes.',
        },
        {
          prompt: 'Find P(sum > 9 | different numbers) = favourable outcomes / different-number outcomes.',
          hint1: '4 favourable out of 30.',
          hint2: 'P = 4/30.',
          hint3: '2/15.',
          answer: 0.1333, tolerance: 0.005, unit: '',
          explanation: 'P(sum > 9 | different numbers) = 4/30 = 2/15.',
          displayAnswer: '2/15',
        },
        {
          prompt: 'Simplify 4/30.',
          hint1: 'HCF(4, 30) = 2.',
          hint2: '4/30 = 2/15.',
          hint3: '2/15.',
          answer: 0.1333, tolerance: 0.005, unit: '',
          explanation: 'P = 4/30 = 2/15.',
          displayAnswer: '2/15',
        },
      ],
      workedExample: {
        question: 'Two dice. Given they show different numbers, find P(sum is odd).',
        steps: [
          'Different-number outcomes = 30.',
          'Odd sums with different numbers: (1,2),(2,1),(1,4),(4,1),(1,6),(6,1),(2,3),(3,2),(2,5),(5,2),(3,4),(4,3),(3,6),(6,3),(4,5),(5,4),(5,6),(6,5) = 18. P = 18/30 = <strong>3/5</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(sum > 9 | different) = 2/15',
        grade6: '30 outcomes with different numbers. Sum > 9 and different: (4,6),(6,4),(5,6),(6,5) = 4. P = 4/30 = 2/15.',
        grade8: 'Conditional probability: restrict to 30 outcomes with different faces. Of these, 4 have sum > 9. P = 4/30 = 2/15.',
      },
      examinerTip: "Students include (6,6) in 'sum > 9' but forget that the condition excludes same-number outcomes. Note (5,5) gives sum 10 but is also excluded as same numbers.",
      auditStatus: 'pending',
    },
"""

content = content[:pos] + NEW + content[pos:]

with open('js/maths-questions.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done - prob_q2 (13 prob-combined questions: 4A, 5B, 4C)")
