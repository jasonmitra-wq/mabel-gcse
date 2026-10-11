with open('js/maths-questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

MARKER = "\n\n    // ══════════════════════════════════════════════════════════\n    // COMBINED EVENTS (prob-combined)"

pos = content.find(MARKER)
print(f"Inserting at char {pos}")
assert pos != -1, "COMBINED EVENTS marker not found!"

NEW = """
    // prb-A03
    {
      id: 'prb-A03', subtopic: 'prob-basic', band: 'A', marks: 2,
      question: 'A card is drawn at random from a standard 52-card pack. Find P(heart) and P(king), each as a simplified fraction.',
      steps: [
        {
          prompt: 'How many hearts are in the pack? Find P(heart).',
          hint1: 'There are 13 hearts in 52 cards.',
          hint2: 'P(heart) = 13/52.',
          hint3: '1/4.',
          answer: 0.25, tolerance: 0.005, unit: '',
          explanation: 'P(heart) = 13/52 = 1/4.',
          displayAnswer: '1/4',
        },
        {
          prompt: 'How many kings are in the pack? Find P(king).',
          hint1: 'There are 4 kings (one per suit) in 52 cards.',
          hint2: 'P(king) = 4/52.',
          hint3: '1/13.',
          answer: 0.0769, tolerance: 0.005, unit: '',
          explanation: 'P(king) = 4/52 = 1/13.',
          displayAnswer: '1/13',
        },
      ],
      workedExample: {
        question: 'A card is drawn at random. Find P(spade) and P(ace).',
        steps: [
          '13 spades in 52 cards: P(spade) = 13/52 = 1/4.',
          '4 aces in 52 cards: P(ace) = 4/52 = <strong>1/13</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(heart) = 1/4, P(king) = 1/13',
        grade6: '13 hearts in 52: P(heart) = 13/52 = 1/4. 4 kings in 52: P(king) = 4/52 = 1/13.',
        grade8: 'P(heart) = 1/4 (one of four suits). P(king) = 1/13 (one per suit, four suits). Always count favourable outcomes carefully.',
      },
      examinerTip: 'Students use 13 as the number of kings (confusing kings with cards per suit), giving P(king) = 13/52 = 1/4. There are only 4 kings — one in each suit.',
      auditStatus: 'pending',
    },
    // prb-A04
    {
      id: 'prb-A04', subtopic: 'prob-basic', band: 'A', marks: 2,
      question: 'A bag contains 3 red and 7 blue counters. A counter is drawn at random. Find P(blue) and P(not blue) as decimals.',
      steps: [
        {
          prompt: 'How many counters in total? Find P(blue).',
          hint1: 'Total = 3 + 7 = 10.',
          hint2: 'P(blue) = 7/10.',
          hint3: '0.7.',
          answer: 0.7, tolerance: 0.005, unit: '',
          explanation: 'P(blue) = 7/10 = 0.7.',
          displayAnswer: '7/10 = 0.7',
        },
        {
          prompt: 'Find P(not blue) using the complement rule.',
          hint1: 'P(not blue) = 1 - P(blue).',
          hint2: '1 - 0.7 = 0.3.',
          hint3: '0.3.',
          answer: 0.3, tolerance: 0.005, unit: '',
          explanation: 'P(not blue) = 1 - 0.7 = 0.3.',
          displayAnswer: '3/10 = 0.3',
        },
      ],
      workedExample: {
        question: 'A bag has 4 green and 6 yellow counters. Find P(yellow) and P(not yellow).',
        steps: [
          'Total = 10. P(yellow) = 6/10 = 0.6.',
          'P(not yellow) = 1 - 0.6 = <strong>0.4</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(blue) = 0.7, P(not blue) = 0.3',
        grade6: 'Total = 10. P(blue) = 7/10 = 0.7. P(not blue) = 1 - 0.7 = 0.3.',
        grade8: 'P(blue) = 7/10 = 0.7. P(not blue) = 3/10 = 0.3. Complementary events: P(A) + P(not A) = 1.',
      },
      examinerTip: "Students calculate P(not blue) = 3/7 by dividing red by blue, instead of using the complement rule 1 - P(blue).",
      auditStatus: 'pending',
    },
    // prb-A05
    {
      id: 'prb-A05', subtopic: 'prob-basic', band: 'A', marks: 2,
      question: 'A fair spinner has 8 equal sections numbered 1 to 8. Find P(multiple of 3) as a fraction in its simplest form.',
      steps: [
        {
          prompt: 'List the multiples of 3 from 1 to 8.',
          hint1: 'Think: 3, 6, 9... which are in range 1-8?',
          hint2: 'Multiples of 3 in {1,...,8}: 3, 6. That is 2 outcomes.',
          hint3: 'P = 2/8.',
          answer: 0.25, tolerance: 0.005, unit: '',
          explanation: 'Multiples of 3 in 1-8: {3, 6}. 2 favourable outcomes out of 8.',
          displayAnswer: '2/8',
        },
        {
          prompt: 'Simplify 2/8.',
          hint1: 'Divide both top and bottom by 2.',
          hint2: '2/8 = 1/4.',
          hint3: '1/4.',
          answer: 0.25, tolerance: 0.005, unit: '',
          explanation: 'P(multiple of 3) = 2/8 = 1/4.',
          displayAnswer: '1/4',
        },
      ],
      workedExample: {
        question: 'A fair spinner has 10 equal sections numbered 1 to 10. Find P(multiple of 4) in simplest form.',
        steps: [
          'Multiples of 4 in {1,...,10}: 4, 8. Two outcomes.',
          'P(multiple of 4) = 2/10 = <strong>1/5</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(multiple of 3) = 1/4',
        grade6: 'Multiples of 3 from 1-8: {3, 6} - two outcomes. P = 2/8 = 1/4.',
        grade8: 'P(multiple of 3) = 2/8 = 1/4. Key check: 9 is a multiple of 3 but is outside the range 1-8.',
      },
      examinerTip: 'Students include 9 as a multiple of 3 (forgetting the spinner only goes to 8), giving P = 3/8. Always check the upper bound of the range on the spinner.',
      auditStatus: 'pending',
    },
    // prb-B02
    {
      id: 'prb-B02', subtopic: 'prob-basic', band: 'B', marks: 3,
      question: 'A biased spinner has 4 sections: red, blue, green and yellow. P(red) = 0.25, P(blue) = 0.35, P(green) = 0.3. (a) Find P(yellow). (b) The spinner is spun 200 times. How many times would you expect it to land on blue?',
      steps: [
        {
          prompt: 'All probabilities must sum to 1. Find the sum of the known probabilities.',
          hint1: '0.25 + 0.35 + 0.3 = ?',
          hint2: '0.25 + 0.35 + 0.3 = 0.9.',
          hint3: '0.9.',
          answer: 0.9, tolerance: 0.005, unit: '',
          explanation: '0.25 + 0.35 + 0.3 = 0.9.',
        },
        {
          prompt: 'Find P(yellow).',
          hint1: 'P(yellow) = 1 - 0.9.',
          hint2: '1 - 0.9 = 0.1.',
          hint3: '0.1.',
          answer: 0.1, tolerance: 0.005, unit: '',
          explanation: 'P(yellow) = 1 - 0.9 = 0.1.',
        },
        {
          prompt: 'Calculate the expected frequency of blue in 200 spins.',
          hint1: 'Expected frequency = probability x number of trials.',
          hint2: 'P(blue) = 0.35. Expected = 0.35 x 200.',
          hint3: '70.',
          answer: 70, tolerance: 0, unit: '',
          explanation: 'Expected frequency of blue = 0.35 x 200 = 70 times.',
        },
      ],
      workedExample: {
        question: 'Spinner: P(red)=0.3, P(blue)=0.45, P(green)=0.15. Find P(yellow). In 400 spins, how many reds are expected?',
        steps: [
          'P(yellow) = 1 - (0.3+0.45+0.15) = 1 - 0.9 = 0.1.',
          'Expected reds = 0.3 x 400 = <strong>120</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(yellow) = 0.1; expected blue = 70',
        grade6: '0.25+0.35+0.3 = 0.9. P(yellow) = 0.1. Expected blue = 0.35 x 200 = 70.',
        grade8: 'All probs sum to 1: P(yellow) = 0.1. Expected frequency = p x n = 0.35 x 200 = 70.',
      },
      examinerTip: 'Students correctly find P(yellow) = 0.1 but then use 0.1 (not 0.35) for the expected frequency of blue in part (b). Read the question carefully about which colour is asked for.',
      auditStatus: 'pending',
    },
    // prb-B03
    {
      id: 'prb-B03', subtopic: 'prob-basic', band: 'B', marks: 3,
      question: 'In a survey of 40 students, 15 own a dog, 10 own a cat, and 6 own both a dog and a cat. A student is chosen at random. Find P(owns a dog or a cat).',
      steps: [
        {
          prompt: 'Use the addition rule: n(dog or cat) = n(dog) + n(cat) - n(both).',
          hint1: '15 + 10 - 6 = ?',
          hint2: '15 + 10 - 6 = 19.',
          hint3: '19 students own a dog or a cat.',
          answer: 19, tolerance: 0, unit: '',
          explanation: 'n(D or C) = 15 + 10 - 6 = 19. Subtracting 6 avoids double-counting.',
        },
        {
          prompt: 'Find P(dog or cat) = n(dog or cat) / total.',
          hint1: '19 out of 40 students.',
          hint2: 'P = 19/40.',
          hint3: '19/40.',
          answer: 0.475, tolerance: 0.005, unit: '',
          explanation: 'P(dog or cat) = 19/40.',
          displayAnswer: '19/40',
        },
        {
          prompt: 'Does 19/40 simplify? State your final answer.',
          hint1: 'HCF(19, 40) = 1, so it does not simplify.',
          hint2: 'P = 19/40.',
          hint3: '19/40.',
          answer: 0.475, tolerance: 0.005, unit: '',
          explanation: 'P(dog or cat) = 19/40 (already in simplest form).',
          displayAnswer: '19/40',
        },
      ],
      workedExample: {
        question: '50 students: 20 like art, 18 like music, 8 like both. Find P(likes art or music).',
        steps: [
          'n(art or music) = 20 + 18 - 8 = 30.',
          'P(art or music) = 30/50 = <strong>3/5</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P = 19/40',
        grade6: 'n(D or C) = 15 + 10 - 6 = 19. P(dog or cat) = 19/40.',
        grade8: 'Inclusion-exclusion: n(D or C) = n(D) + n(C) - n(D and C) = 15 + 10 - 6 = 19. P = 19/40.',
      },
      examinerTip: 'Students add 15 + 10 = 25 without subtracting the 6 who own both, giving P = 25/40 = 5/8. The 6 students in both groups are counted twice without the subtraction.',
      auditStatus: 'pending',
    },
    // prb-B04
    {
      id: 'prb-B04', subtopic: 'prob-basic', band: 'B', marks: 3,
      question: 'Events A and B are mutually exclusive. P(A) = x, P(B) = 2x, and P(neither A nor B) = 0.4. Find the values of P(A) and P(B).',
      steps: [
        {
          prompt: 'Since P(neither) = 0.4, find P(A or B) using the complement.',
          hint1: 'P(A or B) = 1 - P(neither).',
          hint2: '1 - 0.4 = 0.6.',
          hint3: 'P(A or B) = 0.6.',
          answer: 0.6, tolerance: 0.005, unit: '',
          explanation: 'P(A or B) = 1 - 0.4 = 0.6.',
        },
        {
          prompt: 'For mutually exclusive events, P(A or B) = P(A) + P(B). Form an equation and solve for x.',
          hint1: 'x + 2x = 0.6.',
          hint2: '3x = 0.6.',
          hint3: 'x = 0.2.',
          answer: 0.2, tolerance: 0.005, unit: '',
          explanation: '3x = 0.6, so x = 0.2.',
        },
        {
          prompt: 'State P(A) and P(B).',
          hint1: 'P(A) = x = 0.2.',
          hint2: 'P(B) = 2x = 2 x 0.2.',
          hint3: 'P(A) = 0.2, P(B) = 0.4.',
          answer: 0.4, tolerance: 0.005, unit: '',
          explanation: 'P(A) = 0.2 and P(B) = 0.4.',
        },
      ],
      workedExample: {
        question: 'Mutually exclusive events X and Y. P(X) = 3k, P(Y) = 2k, P(neither) = 0.5. Find k.',
        steps: [
          'P(X or Y) = 1 - 0.5 = 0.5. So 3k + 2k = 0.5.',
          '5k = 0.5, so k = <strong>0.1</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(A) = 0.2, P(B) = 0.4',
        grade6: 'P(A or B) = 0.6. x + 2x = 0.6, x = 0.2. P(A) = 0.2, P(B) = 0.4.',
        grade8: 'P(A or B) = 1 - 0.4 = 0.6. Mutually exclusive so no overlap: x + 2x = 0.6, x = 0.2. P(A) = 0.2, P(B) = 0.4.',
      },
      examinerTip: 'Students set x + 2x = 0.4 (using P(neither) directly) instead of first finding P(A or B) = 0.6. Always start with the complement to find P(A or B).',
      auditStatus: 'pending',
    },
    // prb-B05
    {
      id: 'prb-B05', subtopic: 'prob-basic', band: 'B', marks: 3,
      question: 'A card is drawn at random from a standard 52-card pack. Find P(red queen) and P(red or queen), each as simplified fractions.',
      steps: [
        {
          prompt: 'Find P(red queen). How many red queens are there?',
          hint1: 'Red suits: hearts and diamonds. Each has one queen.',
          hint2: '2 red queens in 52 cards.',
          hint3: 'P(red queen) = 2/52 = 1/26.',
          answer: 0.0385, tolerance: 0.005, unit: '',
          explanation: 'P(red queen) = 2/52 = 1/26.',
          displayAnswer: '1/26',
        },
        {
          prompt: 'Use the addition rule: P(red or queen) = P(red) + P(queen) - P(red queen).',
          hint1: 'P(red) = 26/52, P(queen) = 4/52, P(red queen) = 2/52.',
          hint2: '26/52 + 4/52 - 2/52 = 28/52.',
          hint3: '28/52.',
          answer: 0.5385, tolerance: 0.005, unit: '',
          explanation: 'P(red or queen) = 26/52 + 4/52 - 2/52 = 28/52.',
          displayAnswer: '28/52',
        },
        {
          prompt: 'Simplify 28/52.',
          hint1: 'HCF(28, 52) = 4.',
          hint2: '28 / 4 = 7, 52 / 4 = 13.',
          hint3: '7/13.',
          answer: 0.5385, tolerance: 0.005, unit: '',
          explanation: 'P(red or queen) = 28/52 = 7/13.',
          displayAnswer: '7/13',
        },
      ],
      workedExample: {
        question: 'A card is drawn at random. Find P(black) and P(black or jack).',
        steps: [
          'P(black) = 26/52. P(jack) = 4/52. P(black jack) = 2/52.',
          'P(black or jack) = 26/52 + 4/52 - 2/52 = 28/52 = <strong>7/13</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(red queen) = 1/26; P(red or queen) = 7/13',
        grade6: '2 red queens: P = 2/52 = 1/26. P(red or queen) = 26/52 + 4/52 - 2/52 = 28/52 = 7/13.',
        grade8: 'P(red queen) = 1/26. Addition rule: P(R or Q) = P(R) + P(Q) - P(R and Q) = 26/52 + 4/52 - 2/52 = 28/52 = 7/13.',
      },
      examinerTip: 'Students add P(red) + P(queen) = 30/52 without subtracting the 2 red queens that appear in both groups, giving 15/26 instead of 7/13.',
      auditStatus: 'pending',
    },
    // prb-B06
    {
      id: 'prb-B06', subtopic: 'prob-basic', band: 'B', marks: 3,
      question: 'A coin is flipped 100 times and 58 heads are recorded. (a) Write down the experimental probability of heads. (b) Using this value, estimate the number of heads in 500 flips. (c) The theoretical probability for a fair coin is 0.5. Does the result suggest the coin is fair?',
      steps: [
        {
          prompt: 'Find the experimental probability of heads.',
          hint1: '58 heads were recorded in 100 flips.',
          hint2: 'Experimental P(heads) = 58/100.',
          hint3: '0.58.',
          answer: 0.58, tolerance: 0.005, unit: '',
          explanation: 'Experimental P(heads) = 58/100 = 0.58.',
        },
        {
          prompt: 'Estimate the number of heads in 500 flips using the experimental probability.',
          hint1: 'Expected = probability x trials.',
          hint2: '0.58 x 500 = ?',
          hint3: '290.',
          answer: 290, tolerance: 0, unit: '',
          explanation: 'Expected heads = 0.58 x 500 = 290.',
        },
        {
          prompt: 'Compare 0.58 with the fair-coin value 0.5. Comment on whether the coin appears fair.',
          hint1: '0.58 is slightly higher than 0.5.',
          hint2: 'With only 100 trials, variation is expected.',
          hint3: 'Likely fair — 0.58 is close to 0.5 but more trials would give a better estimate.',
          answer: 290, tolerance: 0, unit: '',
          explanation: '0.58 is close to 0.5. With 100 trials, this level of variation is normal. The coin is probably fair, but more trials are needed.',
          displayAnswer: 'Probably fair — 0.58 is close to 0.5, but more trials needed',
        },
      ],
      workedExample: {
        question: 'A die is rolled 60 times. A 6 appears 14 times. Find the experimental probability of 6. Estimate the number of 6s in 300 rolls.',
        steps: [
          'Experimental P(6) = 14/60 = 7/30 = 0.233.',
          'Expected 6s in 300 rolls = (7/30) x 300 = <strong>70</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: '0.58; 290 heads; probably fair',
        grade6: 'Experimental P = 0.58. Estimate = 0.58 x 500 = 290. Close to 0.5 so probably fair.',
        grade8: 'P(heads) = 0.58. Estimate = 290. The value 0.58 is close to the fair-coin probability of 0.5; with n=100 some deviation is expected, so the coin is probably fair.',
      },
      examinerTip: "Students use the theoretical probability 0.5 for part (b) rather than the experimental value 0.58. The question says 'using this value' — always use the experimental probability when asked.",
      auditStatus: 'pending',
    },
    // prb-C01
    {
      id: 'prb-C01', subtopic: 'prob-basic', band: 'C', marks: 4,
      question: 'A two-way table shows 60 students classified by gender and subject preference. Boys: 18 prefer maths, 12 prefer English (30 boys total). Girls: 14 prefer maths, 16 prefer English (30 girls total). Find: (a) P(prefers maths), (b) P(prefers maths | girl), (c) P(boy | prefers English).',
      steps: [
        {
          prompt: 'Find the total number of students who prefer maths.',
          hint1: '18 boys + 14 girls = ?',
          hint2: '32 students prefer maths; 28 prefer English.',
          hint3: '32.',
          answer: 32, tolerance: 0, unit: '',
          explanation: 'Total preferring maths = 18 + 14 = 32.',
        },
        {
          prompt: 'Find P(prefers maths) as a simplified fraction.',
          hint1: 'P(maths) = 32/60.',
          hint2: 'Simplify: divide by HCF = 4.',
          hint3: '8/15.',
          answer: 0.5333, tolerance: 0.005, unit: '',
          explanation: 'P(maths) = 32/60 = 8/15.',
          displayAnswer: '8/15',
        },
        {
          prompt: 'For P(maths | girl), restrict to the 30 girls only. How many girls prefer maths?',
          hint1: '14 girls prefer maths out of 30 girls.',
          hint2: 'P(maths | girl) = 14/30.',
          hint3: '7/15.',
          answer: 0.4667, tolerance: 0.005, unit: '',
          explanation: 'P(maths | girl) = 14/30 = 7/15.',
          displayAnswer: '7/15',
        },
        {
          prompt: 'For P(boy | English), restrict to the 28 who prefer English. How many are boys?',
          hint1: '12 boys prefer English out of 28 total who prefer English.',
          hint2: 'P(boy | English) = 12/28.',
          hint3: '3/7.',
          answer: 0.4286, tolerance: 0.005, unit: '',
          explanation: 'P(boy | English) = 12/28 = 3/7.',
          displayAnswer: '3/7',
        },
      ],
      workedExample: {
        question: 'Two-way table: 50 people. Left-handed: 8 male, 7 female. Right-handed: 22 male, 13 female. Find P(female | left-handed).',
        steps: [
          'Left-handed total = 8 + 7 = 15.',
          'P(female | left-handed) = 7/15.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(maths) = 8/15; P(maths|girl) = 7/15; P(boy|English) = 3/7',
        grade6: 'P(maths) = 32/60 = 8/15. P(maths|girl) = 14/30 = 7/15. P(boy|English) = 12/28 = 3/7.',
        grade8: 'P(maths) = 32/60 = 8/15. Conditional: restrict denominator. P(maths|girl) = 14/30 = 7/15. P(boy|English) = 12/28 = 3/7.',
      },
      examinerTip: 'For conditional probability, the denominator changes. Students often use 60 as the denominator for all three parts instead of restricting to the 30 girls or 28 English-preferrers as appropriate.',
      auditStatus: 'pending',
    },
    // prb-C02
    {
      id: 'prb-C02', subtopic: 'prob-basic', band: 'C', marks: 4,
      question: 'Three events A, B and C are mutually exclusive and exhaustive. P(A) = 2k, P(B) = 5k, P(C) = 3k. Find the value of k and hence find P(A or C).',
      steps: [
        {
          prompt: 'Mutually exclusive and exhaustive means the probabilities sum to 1. Write the equation.',
          hint1: 'P(A) + P(B) + P(C) = 1.',
          hint2: '2k + 5k + 3k = 1.',
          hint3: '10k = 1.',
          answer: 10, tolerance: 0, unit: 'k coefficient gives 10k = 1',
          explanation: '2k + 5k + 3k = 10k = 1.',
          displayAnswer: '10k = 1',
        },
        {
          prompt: 'Solve for k.',
          hint1: '10k = 1.',
          hint2: 'k = 1/10.',
          hint3: '0.1.',
          answer: 0.1, tolerance: 0.005, unit: '',
          explanation: 'k = 1/10 = 0.1.',
        },
        {
          prompt: 'Find P(A) and P(C).',
          hint1: 'P(A) = 2 x 0.1 = 0.2.',
          hint2: 'P(C) = 3 x 0.1 = 0.3.',
          hint3: '0.2 and 0.3.',
          answer: 0.3, tolerance: 0.005, unit: '',
          explanation: 'P(A) = 0.2, P(C) = 0.3.',
        },
        {
          prompt: 'Find P(A or C). A and C are mutually exclusive, so add their probabilities.',
          hint1: 'P(A or C) = P(A) + P(C).',
          hint2: '0.2 + 0.3.',
          hint3: '0.5.',
          answer: 0.5, tolerance: 0.005, unit: '',
          explanation: 'P(A or C) = 0.2 + 0.3 = 0.5.',
        },
      ],
      workedExample: {
        question: 'Mutually exclusive and exhaustive events X, Y, Z. P(X) = 4m, P(Y) = m, P(Z) = 3m. Find m and P(X or Z).',
        steps: [
          '4m + m + 3m = 8m = 1, so m = 0.125.',
          'P(X or Z) = 4m + 3m = 7m = 7 x 0.125 = <strong>0.875</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'k = 0.1; P(A or C) = 0.5',
        grade6: '10k = 1, k = 0.1. P(A) = 0.2, P(C) = 0.3. P(A or C) = 0.5.',
        grade8: 'Exhaustive and mutually exclusive: 10k = 1, k = 0.1. P(A or C) = P(A) + P(C) = 0.2 + 0.3 = 0.5.',
      },
      examinerTip: 'Students solve correctly for k but then add all three probabilities for P(A or C), giving 0.2+0.5+0.3 = 1.0. Only add P(A) and P(C) since the question asks for those two.',
      auditStatus: 'pending',
    },
    // prb-C03
    {
      id: 'prb-C03', subtopic: 'prob-basic', band: 'C', marks: 4,
      question: 'A bag has n red counters and 4 white counters. The probability of drawing a red counter is 2/3. Find n. Hence find P(drawing two red counters without replacement).',
      steps: [
        {
          prompt: 'Set up the equation P(red) = n/(n + 4) = 2/3. Solve for n.',
          hint1: 'Cross-multiply: 3n = 2(n + 4).',
          hint2: '3n = 2n + 8.',
          hint3: 'n = 8.',
          answer: 8, tolerance: 0, unit: '',
          explanation: '3n = 2n + 8, so n = 8. The bag has 8 red and 4 white counters (12 total).',
        },
        {
          prompt: 'Find P(first counter is red). There are 8 red and 12 total.',
          hint1: 'P(red 1st) = 8/12.',
          hint2: '8/12 = 2/3.',
          hint3: '2/3.',
          answer: 0.6667, tolerance: 0.005, unit: '',
          explanation: 'P(red 1st) = 8/12 = 2/3.',
          displayAnswer: '2/3',
        },
        {
          prompt: 'Without replacement, one red has been removed. Find P(second is red | first was red).',
          hint1: 'After removing a red: 7 red remain, 11 counters total.',
          hint2: 'P(red 2nd | red 1st) = 7/11.',
          hint3: '7/11.',
          answer: 0.6364, tolerance: 0.005, unit: '',
          explanation: 'P(red 2nd | red 1st) = 7/11.',
          displayAnswer: '7/11',
        },
        {
          prompt: 'Multiply the two probabilities to find P(two red without replacement).',
          hint1: 'P(RR) = P(red 1st) x P(red 2nd | red 1st).',
          hint2: '(2/3) x (7/11) = 14/33.',
          hint3: '14/33.',
          answer: 0.4242, tolerance: 0.005, unit: '',
          explanation: 'P(two red) = (2/3) x (7/11) = 14/33.',
          displayAnswer: '14/33',
        },
      ],
      workedExample: {
        question: 'A bag has m blue and 3 yellow counters. P(blue) = 3/4. Find m. Hence find P(two blue without replacement).',
        steps: [
          'm/(m+3) = 3/4, so 4m = 3m + 9, m = 9. Bag: 9 blue, 3 yellow (12 total).',
          'P(BB) = 9/12 x 8/11 = 72/132 = <strong>6/11</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'n = 8; P(two red) = 14/33',
        grade6: 'n/(n+4) = 2/3 gives n = 8 (12 total). P(RR) = 8/12 x 7/11 = 14/33.',
        grade8: 'n = 8 (12 total). Without replacement: P(R1) x P(R2|R1) = 8/12 x 7/11 = 56/132 = 14/33.',
      },
      examinerTip: 'Students find n = 8 correctly but use replacement for the second draw: P = (8/12)^2 = 4/9, not adjusting the denominator after the first draw. Without replacement means both numerator and denominator decrease by 1.',
      auditStatus: 'pending',
    },
    // prb-C04
    {
      id: 'prb-C04', subtopic: 'prob-basic', band: 'C', marks: 4,
      question: 'A biased die has P(6) = 1/4. All other faces (1 to 5) are equally likely. (a) Find P(not 6). (b) Find P(1). (c) The die is thrown twice independently. Find P(6 on first throw and not 6 on second throw).',
      steps: [
        {
          prompt: 'Find P(not 6).',
          hint1: 'P(not 6) = 1 - P(6).',
          hint2: '1 - 1/4 = 3/4.',
          hint3: '3/4.',
          answer: 0.75, tolerance: 0.005, unit: '',
          explanation: 'P(not 6) = 1 - 1/4 = 3/4.',
          displayAnswer: '3/4',
        },
        {
          prompt: 'Faces 1 to 5 share equally the remaining probability of 3/4. Find P(1).',
          hint1: 'P(1) = P(2) = P(3) = P(4) = P(5), and they sum to 3/4.',
          hint2: 'P(1) = (3/4) / 5.',
          hint3: '3/20.',
          answer: 0.15, tolerance: 0.005, unit: '',
          explanation: 'P(1) = (3/4) / 5 = 3/20 = 0.15.',
          displayAnswer: '3/20',
        },
        {
          prompt: 'The two throws are independent. Find P(6 on first throw AND not 6 on second throw).',
          hint1: 'Multiply the probabilities: P(6) x P(not 6).',
          hint2: '(1/4) x (3/4).',
          hint3: '3/16.',
          answer: 0.1875, tolerance: 0.005, unit: '',
          explanation: 'P(6 first, not 6 second) = (1/4) x (3/4) = 3/16.',
          displayAnswer: '3/16',
        },
        {
          prompt: 'State your final answer for part (c) as a decimal.',
          hint1: '3/16 = 0.1875.',
          hint2: '0.1875.',
          hint3: '0.1875.',
          answer: 0.1875, tolerance: 0.005, unit: '',
          explanation: 'P = 3/16 = 0.1875.',
        },
      ],
      workedExample: {
        question: 'Biased coin: P(heads) = 2/5. (a) Find P(tails). (b) Coin tossed twice: find P(heads then tails).',
        steps: [
          'P(tails) = 1 - 2/5 = 3/5.',
          'P(heads then tails) = (2/5) x (3/5) = <strong>6/25</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(not 6) = 3/4; P(1) = 3/20; P = 3/16',
        grade6: 'P(not 6) = 3/4. P(1) = (3/4)/5 = 3/20. P(6 then not 6) = 1/4 x 3/4 = 3/16.',
        grade8: 'P(not 6) = 3/4. P(1) = 3/20 (equal share of 3/4 among 5 faces). Independent: P(6, not 6) = 1/4 x 3/4 = 3/16.',
      },
      examinerTip: 'Students find P(1) = 1/6 (treating the die as fair) instead of P(1) = 3/20. With P(6) = 1/4, the remaining 3/4 is split equally among 5 faces.',
      auditStatus: 'pending',
    },
"""

content = content[:pos] + NEW + content[pos:]

with open('js/maths-questions.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done - prob_q1 (12 prob-basic questions: 3A, 5B, 4C)")
