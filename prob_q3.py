with open('js/maths-questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

MARKER = "\n\n    // ══════════════════════════════════════════════════════════\n    // VENN DIAGRAMS (prob-venn) — Higher"

pos = content.find(MARKER)
print(f"Inserting at char {pos}")
assert pos != -1, "VENN DIAGRAMS marker not found!"

NEW = """
    // tree-A02
    {
      id: 'tree-A02', subtopic: 'prob-tree-diagrams', band: 'A', marks: 2,
      question: 'A bag has 5 red and 3 yellow counters. One is taken out (not replaced), then another is taken. Find P(both red) as a fraction.',
      steps: [
        {
          prompt: 'Find P(red on first draw).',
          hint1: '5 red out of 8 counters.',
          hint2: 'P(red 1st) = 5/8.',
          hint3: '5/8.',
          answer: 0.625, tolerance: 0.005, unit: '',
          explanation: 'P(red 1st) = 5/8.',
          displayAnswer: '5/8',
        },
        {
          prompt: 'After removing a red counter, find P(red on second draw). Then multiply.',
          hint1: 'Now 4 red and 3 yellow remain — 7 counters total.',
          hint2: 'P(red 2nd | red 1st) = 4/7. P(both red) = 5/8 x 4/7.',
          hint3: '20/56 = 5/14.',
          answer: 0.3571, tolerance: 0.005, unit: '',
          explanation: 'P(both red) = (5/8) x (4/7) = 20/56 = 5/14.',
          displayAnswer: '5/14',
        },
      ],
      workedExample: {
        question: 'Bag: 4 red and 2 blue. Two drawn without replacement. Find P(both red).',
        steps: [
          'P(red 1st) = 4/6 = 2/3. After removing: 3 red, 2 blue, 5 total.',
          'P(red 2nd | red 1st) = 3/5. P(both red) = 2/3 x 3/5 = <strong>6/15 = 2/5</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(both red) = 5/14',
        grade6: 'P(R1) = 5/8. Without replacement: P(R2|R1) = 4/7. P(both) = 5/8 x 4/7 = 5/14.',
        grade8: 'P(both red) = P(R1) x P(R2|R1) = 5/8 x 4/7 = 20/56 = 5/14.',
      },
      examinerTip: 'Students use 8 as the denominator for both draws: (5/8) x (5/8) = 25/64, treating the first counter as replaced. Check the question — it says "not replaced".',
      auditStatus: 'pending',
    },
    // tree-A03
    {
      id: 'tree-A03', subtopic: 'prob-tree-diagrams', band: 'A', marks: 2,
      question: 'Player A has a probability of 0.6 of winning any game against player B. They play two independent games. Find P(player A wins both games).',
      steps: [
        {
          prompt: 'What is P(A wins one game)?',
          hint1: 'P(A wins) = 0.6 for each game.',
          hint2: '0.6.',
          hint3: '0.6.',
          answer: 0.6, tolerance: 0.005, unit: '',
          explanation: 'P(A wins one game) = 0.6.',
        },
        {
          prompt: 'The games are independent. Find P(A wins both games).',
          hint1: 'P(A wins game 1 AND game 2) = 0.6 x 0.6.',
          hint2: '0.36.',
          hint3: '0.36.',
          answer: 0.36, tolerance: 0.005, unit: '',
          explanation: 'P(A wins both) = 0.6 x 0.6 = 0.36.',
        },
      ],
      workedExample: {
        question: 'P(team wins a match) = 0.7. Two matches played independently. Find P(team wins both).',
        steps: [
          'P(win each match) = 0.7.',
          'P(win both) = 0.7 x 0.7 = <strong>0.49</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(A wins both) = 0.36',
        grade6: 'Independent games: P(win both) = 0.6 x 0.6 = 0.36.',
        grade8: 'P(A wins both) = P(win)^2 = 0.6^2 = 0.36.',
      },
      examinerTip: 'Students add 0.6 + 0.6 = 1.2, which exceeds 1. For independent events both occurring, always multiply.',
      auditStatus: 'pending',
    },
    // tree-A04
    {
      id: 'tree-A04', subtopic: 'prob-tree-diagrams', band: 'A', marks: 2,
      question: 'A fair coin is tossed twice. Draw a tree diagram and use it to find P(exactly one head).',
      steps: [
        {
          prompt: 'In your tree diagram, identify the branches for exactly one head.',
          hint1: 'First toss: H or T (each prob 1/2). Second toss: H or T (each 1/2).',
          hint2: 'Outcomes with exactly one head: HT and TH.',
          hint3: 'Two routes give exactly one head.',
          answer: 2, tolerance: 0, unit: 'routes',
          explanation: 'Two branches give exactly one head: H then T, and T then H.',
          displayAnswer: 'Routes: HT and TH',
        },
        {
          prompt: 'Calculate P(exactly one head) by adding the probabilities of the two routes.',
          hint1: 'P(HT) = 1/2 x 1/2 = 1/4.',
          hint2: 'P(TH) = 1/2 x 1/2 = 1/4.',
          hint3: 'P(exactly one head) = 1/4 + 1/4 = 1/2.',
          answer: 0.5, tolerance: 0.005, unit: '',
          explanation: 'P(exactly one head) = P(HT) + P(TH) = 1/4 + 1/4 = 1/2.',
          displayAnswer: '1/2',
        },
      ],
      workedExample: {
        question: 'Fair coin tossed twice. Find P(exactly two tails).',
        steps: [
          'Only one route gives TT: P(TT) = 1/2 x 1/2 = 1/4.',
          'P(exactly two tails) = <strong>1/4</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(exactly one head) = 1/2',
        grade6: 'Routes: HT and TH. P(HT) = 1/4, P(TH) = 1/4. Total = 1/4 + 1/4 = 1/2.',
        grade8: 'P(exactly one H) = P(HT) + P(TH) = (1/2)^2 + (1/2)^2 = 2 x 1/4 = 1/2.',
      },
      examinerTip: 'Students find only one route (HT) and give P = 1/4, forgetting that TH also gives exactly one head. Always look for all routes on the tree diagram.',
      auditStatus: 'pending',
    },
    // tree-A05
    {
      id: 'tree-A05', subtopic: 'prob-tree-diagrams', band: 'A', marks: 2,
      question: 'A bag has 6 blue and 4 yellow counters. A counter is drawn, its colour noted, then it is replaced. Find P(yellow first, then blue) as a fraction.',
      steps: [
        {
          prompt: 'Find P(yellow on first draw). The counter is replaced, so what is P(blue on second draw)?',
          hint1: 'P(yellow) = 4/10 = 2/5. P(blue) = 6/10 = 3/5 — same each draw (replacement).',
          hint2: 'P(yellow 1st) = 2/5, P(blue 2nd) = 3/5.',
          hint3: '2/5 and 3/5.',
          answer: 0.4, tolerance: 0.005, unit: '',
          explanation: 'P(yellow) = 2/5 and P(blue) = 3/5 on every draw (with replacement).',
          displayAnswer: '2/5',
        },
        {
          prompt: 'Find P(yellow then blue).',
          hint1: 'Multiply: P(Y) x P(B) = (2/5) x (3/5).',
          hint2: '6/25.',
          hint3: '6/25.',
          answer: 0.24, tolerance: 0.005, unit: '',
          explanation: 'P(yellow then blue) = (2/5) x (3/5) = 6/25.',
          displayAnswer: '6/25',
        },
      ],
      workedExample: {
        question: 'Bag: 3 red, 7 white. Draw with replacement. Find P(white then red).',
        steps: [
          'P(white) = 7/10, P(red) = 3/10 — same each draw.',
          'P(white then red) = (7/10) x (3/10) = <strong>21/100</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(yellow then blue) = 6/25',
        grade6: 'With replacement: P(Y) = 2/5, P(B) = 3/5 each draw. P(YB) = 2/5 x 3/5 = 6/25.',
        grade8: 'Replacement: independent draws. P(YB) = P(Y) x P(B) = 2/5 x 3/5 = 6/25.',
      },
      examinerTip: 'Students adjust the denominator for the second draw as if without replacement: P(Y)=4/10, P(B|Y)=6/9 = 2/3, giving 8/30 = 4/15. The counter is replaced, so both denominators stay at 10.',
      auditStatus: 'pending',
    },
    // tree-B02
    {
      id: 'tree-B02', subtopic: 'prob-tree-diagrams', band: 'B', marks: 3,
      question: 'A box has 4 white and 2 black balls. Two balls are drawn without replacement. Find P(one white and one black, in any order) as a simplified fraction.',
      steps: [
        {
          prompt: 'Find P(white first, then black).',
          hint1: 'P(white 1st) = 4/6 = 2/3. After removing white: 4 white, 2 black? No — 3 white, 2 black, 5 total.',
          hint2: 'P(black 2nd | white 1st) = 2/5.',
          hint3: 'P(WB) = (4/6) x (2/5) = 8/30.',
          answer: 0.2667, tolerance: 0.005, unit: '',
          explanation: 'P(white 1st, black 2nd) = (4/6) x (2/5) = 8/30.',
          displayAnswer: '8/30',
        },
        {
          prompt: 'Find P(black first, then white).',
          hint1: 'P(black 1st) = 2/6 = 1/3. After removing black: 4 white, 1 black, 5 total.',
          hint2: 'P(white 2nd | black 1st) = 4/5.',
          hint3: 'P(BW) = (2/6) x (4/5) = 8/30.',
          answer: 0.2667, tolerance: 0.005, unit: '',
          explanation: 'P(black 1st, white 2nd) = (2/6) x (4/5) = 8/30.',
          displayAnswer: '8/30',
        },
        {
          prompt: 'Add the two routes. Simplify the fraction.',
          hint1: 'P(one of each) = 8/30 + 8/30 = 16/30.',
          hint2: 'HCF(16, 30) = 2.',
          hint3: '8/15.',
          answer: 0.5333, tolerance: 0.005, unit: '',
          explanation: 'P(one white, one black) = 16/30 = 8/15.',
          displayAnswer: '8/15',
        },
      ],
      workedExample: {
        question: 'Box: 3 white, 2 black. Two drawn without replacement. Find P(one of each colour).',
        steps: [
          'P(WB) = 3/5 x 2/4 = 6/20. P(BW) = 2/5 x 3/4 = 6/20.',
          'P(one of each) = 12/20 = <strong>3/5</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(one white, one black) = 8/15',
        grade6: 'P(WB) = 4/6 x 2/5 = 8/30. P(BW) = 2/6 x 4/5 = 8/30. Total = 16/30 = 8/15.',
        grade8: 'Two routes: P(WB) + P(BW) = 8/30 + 8/30 = 16/30 = 8/15.',
      },
      examinerTip: 'Students find only one route (WB = 8/30) and forget to add the BW route. Always check for reverse orders in "one of each" questions.',
      auditStatus: 'pending',
    },
    // tree-B03
    {
      id: 'tree-B03', subtopic: 'prob-tree-diagrams', band: 'B', marks: 3,
      question: 'A test has two parts. P(pass part 1) = 3/4. If a student passes part 1, P(pass part 2) = 2/3. If they fail part 1, P(pass part 2) = 1/4. Find P(passes both parts) and P(passes part 2 overall).',
      steps: [
        {
          prompt: 'Find P(passes both parts) = P(pass 1) x P(pass 2 | pass 1).',
          hint1: 'P(pass 1) = 3/4. P(pass 2 | pass 1) = 2/3.',
          hint2: '(3/4) x (2/3) = 6/12 = 1/2.',
          hint3: '1/2.',
          answer: 0.5, tolerance: 0.005, unit: '',
          explanation: 'P(pass both) = (3/4) x (2/3) = 1/2.',
          displayAnswer: '1/2',
        },
        {
          prompt: 'Find P(fail 1 and pass 2) = P(fail 1) x P(pass 2 | fail 1).',
          hint1: 'P(fail 1) = 1 - 3/4 = 1/4. P(pass 2 | fail 1) = 1/4.',
          hint2: '(1/4) x (1/4) = 1/16.',
          hint3: '1/16.',
          answer: 0.0625, tolerance: 0.005, unit: '',
          explanation: 'P(fail 1, pass 2) = (1/4) x (1/4) = 1/16.',
          displayAnswer: '1/16',
        },
        {
          prompt: 'P(passes part 2 overall) = P(pass 1 and pass 2) + P(fail 1 and pass 2). Add the two routes.',
          hint1: '1/2 + 1/16.',
          hint2: '8/16 + 1/16 = 9/16.',
          hint3: '9/16.',
          answer: 0.5625, tolerance: 0.005, unit: '',
          explanation: 'P(passes part 2) = 1/2 + 1/16 = 9/16.',
          displayAnswer: '9/16',
        },
      ],
      workedExample: {
        question: 'P(pass stage 1) = 0.8. If pass: P(pass stage 2) = 0.9. If fail: P(pass stage 2) = 0.5. Find P(passes stage 2 overall).',
        steps: [
          'P(pass 1 and pass 2) = 0.8 x 0.9 = 0.72. P(fail 1 and pass 2) = 0.2 x 0.5 = 0.10.',
          'P(passes stage 2) = 0.72 + 0.10 = <strong>0.82</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(both) = 1/2; P(pass part 2) = 9/16',
        grade6: 'P(both) = 3/4 x 2/3 = 1/2. P(fail1, pass2) = 1/4 x 1/4 = 1/16. P(pass part 2) = 8/16 + 1/16 = 9/16.',
        grade8: 'P(pass both) = 1/2. P(fail1 then pass2) = 1/16. Total P(pass part 2) = 9/16 by total probability theorem.',
      },
      examinerTip: 'Students use only the "pass part 1 then pass part 2" route for P(passes part 2 overall), giving 1/2 instead of 9/16. The route through "fail part 1" also leads to passing part 2.',
      auditStatus: 'pending',
    },
    // tree-B04
    {
      id: 'tree-B04', subtopic: 'prob-tree-diagrams', band: 'B', marks: 3,
      question: 'P(sunny day) = 0.7. If it is sunny, P(picnic) = 0.8. If it is not sunny, P(picnic) = 0.3. Find P(picnic).',
      steps: [
        {
          prompt: 'Find P(sunny and picnic).',
          hint1: 'P(sunny) = 0.7, P(picnic | sunny) = 0.8.',
          hint2: '0.7 x 0.8 = 0.56.',
          hint3: '0.56.',
          answer: 0.56, tolerance: 0.005, unit: '',
          explanation: 'P(sunny and picnic) = 0.7 x 0.8 = 0.56.',
        },
        {
          prompt: 'Find P(not sunny and picnic).',
          hint1: 'P(not sunny) = 0.3, P(picnic | not sunny) = 0.3.',
          hint2: '0.3 x 0.3 = 0.09.',
          hint3: '0.09.',
          answer: 0.09, tolerance: 0.005, unit: '',
          explanation: 'P(not sunny and picnic) = 0.3 x 0.3 = 0.09.',
        },
        {
          prompt: 'Add both routes to find P(picnic).',
          hint1: '0.56 + 0.09.',
          hint2: '0.65.',
          hint3: '0.65.',
          answer: 0.65, tolerance: 0.005, unit: '',
          explanation: 'P(picnic) = 0.56 + 0.09 = 0.65.',
        },
      ],
      workedExample: {
        question: 'P(bus on time) = 0.8. If on time: P(late for work) = 0.1. If late: P(late for work) = 0.6. Find P(late for work).',
        steps: [
          'P(on time, late for work) = 0.8 x 0.1 = 0.08.',
          'P(late bus, late for work) = 0.2 x 0.6 = 0.12. P(late for work) = 0.08 + 0.12 = <strong>0.20</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(picnic) = 0.65',
        grade6: 'P(sunny, picnic) = 0.7x0.8 = 0.56. P(not sunny, picnic) = 0.3x0.3 = 0.09. P(picnic) = 0.65.',
        grade8: 'Total probability: P(picnic) = P(S)P(P|S) + P(S\')P(P|S\') = 0.7x0.8 + 0.3x0.3 = 0.65.',
      },
      examinerTip: 'Students only calculate P(sunny and picnic) = 0.56 and forget the second route through "not sunny". Both branches of the tree leading to "picnic" must be added.',
      auditStatus: 'pending',
    },
    // tree-B05
    {
      id: 'tree-B05', subtopic: 'prob-tree-diagrams', band: 'B', marks: 3,
      question: 'A bag has 7 green and 3 yellow balls. Two balls are drawn without replacement. Find P(at least one green) as a fraction.',
      steps: [
        {
          prompt: 'Use the complement: find P(no green balls drawn) = P(both yellow).',
          hint1: 'P(yellow 1st) = 3/10. After removing a yellow: 2 yellow, 7 green, 9 total.',
          hint2: 'P(yellow 2nd | yellow 1st) = 2/9.',
          hint3: 'P(both yellow) = (3/10) x (2/9) = 6/90 = 1/15.',
          answer: 0.0667, tolerance: 0.005, unit: '',
          explanation: 'P(both yellow) = (3/10) x (2/9) = 6/90 = 1/15.',
          displayAnswer: '1/15',
        },
        {
          prompt: 'Find P(at least one green) using the complement.',
          hint1: 'P(at least one green) = 1 - P(both yellow).',
          hint2: '1 - 1/15.',
          hint3: '14/15.',
          answer: 0.9333, tolerance: 0.005, unit: '',
          explanation: 'P(at least one green) = 1 - 1/15 = 14/15.',
          displayAnswer: '14/15',
        },
        {
          prompt: 'State your final answer.',
          hint1: '14/15.',
          hint2: 'This is very high — sensible since 7 out of 10 balls are green.',
          hint3: '14/15.',
          answer: 0.9333, tolerance: 0.005, unit: '',
          explanation: 'P(at least one green) = 14/15.',
          displayAnswer: '14/15',
        },
      ],
      workedExample: {
        question: 'Bag: 6 red, 2 white. Two drawn without replacement. Find P(at least one red).',
        steps: [
          'P(both white) = (2/8) x (1/7) = 2/56 = 1/28.',
          'P(at least one red) = 1 - 1/28 = <strong>27/28</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(at least one green) = 14/15',
        grade6: 'P(both yellow) = 3/10 x 2/9 = 6/90 = 1/15. P(at least one green) = 1 - 1/15 = 14/15.',
        grade8: 'Complement: P(at least one green) = 1 - P(YY) = 1 - 1/15 = 14/15.',
      },
      examinerTip: 'Students add three routes for at least one green (GG, GY, YG) and miss a route, or make an arithmetic error. The complement method with P(YY) is quicker and less error-prone.',
      auditStatus: 'pending',
    },
    // tree-B06
    {
      id: 'tree-B06', subtopic: 'prob-tree-diagrams', band: 'B', marks: 3,
      question: 'A bag contains 2 red, 3 green and 1 yellow counter (6 total). Two are drawn without replacement. Find P(both are the same colour) as a simplified fraction.',
      steps: [
        {
          prompt: 'Find P(both red) = P(R1) x P(R2|R1). After removing a red: 1 red, 3 green, 1 yellow, 5 total.',
          hint1: 'P(red 1st) = 2/6 = 1/3. P(red 2nd | red 1st) = 1/5.',
          hint2: 'P(RR) = (2/6) x (1/5) = 2/30.',
          hint3: '2/30.',
          answer: 0.0667, tolerance: 0.005, unit: '',
          explanation: 'P(RR) = (2/6) x (1/5) = 2/30.',
          displayAnswer: '2/30',
        },
        {
          prompt: 'Find P(both green). After removing a green: 2 red, 2 green, 1 yellow, 5 total.',
          hint1: 'P(green 1st) = 3/6 = 1/2. P(green 2nd | green 1st) = 2/5.',
          hint2: 'P(GG) = (3/6) x (2/5) = 6/30.',
          hint3: '6/30.',
          answer: 0.2, tolerance: 0.005, unit: '',
          explanation: 'P(GG) = (3/6) x (2/5) = 6/30.',
          displayAnswer: '6/30',
        },
        {
          prompt: 'P(both yellow) = 0 (only one yellow). Add all same-colour probabilities and simplify.',
          hint1: 'P(same colour) = P(RR) + P(GG) + P(YY) = 2/30 + 6/30 + 0.',
          hint2: '8/30.',
          hint3: '4/15.',
          answer: 0.2667, tolerance: 0.005, unit: '',
          explanation: 'P(same colour) = 2/30 + 6/30 = 8/30 = 4/15.',
          displayAnswer: '4/15',
        },
      ],
      workedExample: {
        question: 'Bag: 2 red, 2 blue, 1 white (5 total). Two drawn without replacement. Find P(both same colour).',
        steps: [
          'P(RR) = 2/5 x 1/4 = 2/20. P(BB) = 2/5 x 1/4 = 2/20. P(WW) = 0.',
          'P(same) = 2/20 + 2/20 = 4/20 = <strong>1/5</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(both same colour) = 4/15',
        grade6: 'P(RR) = 2/30. P(GG) = 6/30. P(YY) = 0 (only 1 yellow). Total = 8/30 = 4/15.',
        grade8: 'P(same colour) = P(RR)+P(GG) = 2/30+6/30 = 8/30 = 4/15. Only 1 yellow, so P(YY) = 0.',
      },
      examinerTip: 'Students include P(YY) as (1/6) x (0/5) = 0 correctly, but sometimes accidentally use (1/6)x(1/5) = 1/30 as if there were 2 yellows. There is only 1 yellow counter.',
      auditStatus: 'pending',
    },
    // tree-C01
    {
      id: 'tree-C01', subtopic: 'prob-tree-diagrams', band: 'C', marks: 4,
      question: 'Box A contains 3 red and 2 white balls. Box B contains 1 red and 4 white balls. A box is chosen at random, then a ball is drawn. Find P(red ball). If a red ball is drawn, find P(it came from box A).',
      steps: [
        {
          prompt: 'Find P(box A chosen and red drawn).',
          hint1: 'P(choose A) = 1/2. P(red | box A) = 3/5.',
          hint2: 'P(A and red) = (1/2) x (3/5) = 3/10.',
          hint3: '3/10.',
          answer: 0.3, tolerance: 0.005, unit: '',
          explanation: 'P(A and red) = (1/2) x (3/5) = 3/10.',
          displayAnswer: '3/10',
        },
        {
          prompt: 'Find P(box B chosen and red drawn).',
          hint1: 'P(choose B) = 1/2. P(red | box B) = 1/5.',
          hint2: 'P(B and red) = (1/2) x (1/5) = 1/10.',
          hint3: '1/10.',
          answer: 0.1, tolerance: 0.005, unit: '',
          explanation: 'P(B and red) = (1/2) x (1/5) = 1/10.',
          displayAnswer: '1/10',
        },
        {
          prompt: 'Find P(red ball overall) by adding the two routes.',
          hint1: 'P(red) = P(A and red) + P(B and red).',
          hint2: '3/10 + 1/10 = 4/10 = 2/5.',
          hint3: '2/5.',
          answer: 0.4, tolerance: 0.005, unit: '',
          explanation: 'P(red) = 3/10 + 1/10 = 4/10 = 2/5.',
          displayAnswer: '2/5',
        },
        {
          prompt: 'Find P(from box A | red ball drawn). Use Bayes: P(A|red) = P(A and red) / P(red).',
          hint1: 'P(A and red) = 3/10. P(red) = 2/5 = 4/10.',
          hint2: 'P(A | red) = (3/10) / (4/10).',
          hint3: '3/4.',
          answer: 0.75, tolerance: 0.005, unit: '',
          explanation: 'P(A | red) = (3/10) / (4/10) = 3/4.',
          displayAnswer: '3/4',
        },
      ],
      workedExample: {
        question: 'Box X: 2R 3W. Box Y: 4R 1W. Box chosen at random. Find P(red) and P(from X | red).',
        steps: [
          'P(X and R) = 1/2 x 2/5 = 2/10. P(Y and R) = 1/2 x 4/5 = 4/10. P(red) = 6/10 = 3/5.',
          'P(X | red) = (2/10)/(6/10) = 2/6 = <strong>1/3</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(red) = 2/5; P(from A | red) = 3/4',
        grade6: 'P(red) = 1/2x3/5 + 1/2x1/5 = 3/10+1/10 = 2/5. P(A|red) = (3/10)/(2/5) = 3/4.',
        grade8: 'Total prob: P(red) = P(A)P(R|A)+P(B)P(R|B) = 3/10+1/10 = 2/5. Bayes: P(A|red) = 3/4.',
      },
      examinerTip: 'Students find P(red|A) = 3/5 and mistakenly call this P(A|red). These are different conditional probabilities. To find P(A|red), divide P(A and red) by P(red).',
      auditStatus: 'pending',
    },
    // tree-C02
    {
      id: 'tree-C02', subtopic: 'prob-tree-diagrams', band: 'C', marks: 4,
      question: 'P(it rains on Monday) = 0.4. If it rains Monday, P(rains Tuesday) = 0.7. If it is dry Monday, P(rains Tuesday) = 0.2. Find P(rains Tuesday). Given it rains Tuesday, find P(it also rained Monday).',
      steps: [
        {
          prompt: 'Find P(rains Mon AND rains Tue).',
          hint1: 'P(rains Mon) = 0.4. P(rains Tue | rains Mon) = 0.7.',
          hint2: '0.4 x 0.7 = 0.28.',
          hint3: '0.28.',
          answer: 0.28, tolerance: 0.005, unit: '',
          explanation: 'P(rain Mon and rain Tue) = 0.4 x 0.7 = 0.28.',
        },
        {
          prompt: 'Find P(dry Mon AND rains Tue).',
          hint1: 'P(dry Mon) = 0.6. P(rains Tue | dry Mon) = 0.2.',
          hint2: '0.6 x 0.2 = 0.12.',
          hint3: '0.12.',
          answer: 0.12, tolerance: 0.005, unit: '',
          explanation: 'P(dry Mon and rain Tue) = 0.6 x 0.2 = 0.12.',
        },
        {
          prompt: 'Find P(rains Tuesday) by adding both routes.',
          hint1: '0.28 + 0.12.',
          hint2: '0.40.',
          hint3: '0.40.',
          answer: 0.4, tolerance: 0.005, unit: '',
          explanation: 'P(rains Tue) = 0.28 + 0.12 = 0.40.',
        },
        {
          prompt: 'Find P(rained Monday | rains Tuesday) using Bayes formula.',
          hint1: 'P(Mon rain | Tue rain) = P(Mon rain and Tue rain) / P(Tue rain).',
          hint2: '0.28 / 0.40.',
          hint3: '0.7.',
          answer: 0.7, tolerance: 0.005, unit: '',
          explanation: 'P(Mon rain | Tue rain) = 0.28 / 0.40 = 0.7.',
        },
      ],
      workedExample: {
        question: 'P(train late Mon) = 0.3. If late Mon: P(late Tue) = 0.6. If on time Mon: P(late Tue) = 0.1. Find P(late Tue) and P(late Mon | late Tue).',
        steps: [
          'P(late Mon, late Tue) = 0.3x0.6=0.18. P(on time Mon, late Tue)=0.7x0.1=0.07. P(late Tue)=0.25.',
          'P(late Mon | late Tue) = 0.18/0.25 = <strong>0.72</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(rains Tue) = 0.4; P(rained Mon | rains Tue) = 0.7',
        grade6: 'P(rain Tue) = 0.4x0.7+0.6x0.2 = 0.40. P(Mon rain | Tue rain) = 0.28/0.40 = 0.7.',
        grade8: 'Total probability: P(Tue rain) = 0.40. Bayes theorem: P(Mon|Tue) = P(Mon and Tue)/P(Tue) = 0.28/0.40 = 0.7.',
      },
      examinerTip: 'Students read off P(rain Tue | rain Mon) = 0.7 from the tree and claim this is the answer to P(rain Mon | rain Tue). These are different — you need Bayes theorem for the reverse conditional.',
      auditStatus: 'pending',
    },
    // tree-C03
    {
      id: 'tree-C03', subtopic: 'prob-tree-diagrams', band: 'C', marks: 4,
      question: 'Three boxes are chosen with probabilities P(box 1) = 1/2, P(box 2) = 1/3, P(box 3) = 1/6. Box 1 has 2 red and 1 white ball. Box 2 has 1 red and 2 white balls. Box 3 has 3 red and 0 white balls. A ball is drawn at random. Find P(red ball).',
      steps: [
        {
          prompt: 'Find P(box 1 chosen and red drawn).',
          hint1: 'P(box 1) = 1/2. P(red | box 1) = 2/3.',
          hint2: 'P(box 1 and red) = (1/2) x (2/3) = 2/6 = 1/3.',
          hint3: '1/3.',
          answer: 0.3333, tolerance: 0.005, unit: '',
          explanation: 'P(box 1 and red) = 1/2 x 2/3 = 1/3.',
          displayAnswer: '1/3',
        },
        {
          prompt: 'Find P(box 2 chosen and red drawn).',
          hint1: 'P(box 2) = 1/3. P(red | box 2) = 1/3.',
          hint2: 'P(box 2 and red) = (1/3) x (1/3) = 1/9.',
          hint3: '1/9.',
          answer: 0.1111, tolerance: 0.005, unit: '',
          explanation: 'P(box 2 and red) = 1/3 x 1/3 = 1/9.',
          displayAnswer: '1/9',
        },
        {
          prompt: 'Find P(box 3 chosen and red drawn). Box 3 has only red balls.',
          hint1: 'P(box 3) = 1/6. P(red | box 3) = 1.',
          hint2: 'P(box 3 and red) = (1/6) x 1 = 1/6.',
          hint3: '1/6.',
          answer: 0.1667, tolerance: 0.005, unit: '',
          explanation: 'P(box 3 and red) = 1/6 x 1 = 1/6.',
          displayAnswer: '1/6',
        },
        {
          prompt: 'Add all three routes to find P(red ball). Convert to 18ths.',
          hint1: '1/3 + 1/9 + 1/6 = 6/18 + 2/18 + 3/18.',
          hint2: '11/18.',
          hint3: '11/18.',
          answer: 0.6111, tolerance: 0.005, unit: '',
          explanation: 'P(red) = 6/18 + 2/18 + 3/18 = 11/18.',
          displayAnswer: '11/18',
        },
      ],
      workedExample: {
        question: 'Boxes chosen with P(A) = 1/2, P(B) = 1/2. Box A: 1R 1W. Box B: 3R 1W. Find P(red).',
        steps: [
          'P(A and R) = 1/2 x 1/2 = 1/4. P(B and R) = 1/2 x 3/4 = 3/8.',
          'P(red) = 1/4 + 3/8 = 2/8 + 3/8 = <strong>5/8</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(red) = 11/18',
        grade6: 'P(red) = 1/2x2/3 + 1/3x1/3 + 1/6x1 = 1/3+1/9+1/6 = 6/18+2/18+3/18 = 11/18.',
        grade8: 'Law of total probability over three boxes: P(red) = sum of P(box_i) x P(red|box_i) = 11/18.',
      },
      examinerTip: 'Students treat all boxes as equally likely (probability 1/3 each), ignoring the given probabilities. Always use the stated probability for each box, not 1/(number of boxes).',
      auditStatus: 'pending',
    },
    // tree-C04
    {
      id: 'tree-C04', subtopic: 'prob-tree-diagrams', band: 'C', marks: 4,
      question: 'Bag A contains 4 red and 1 blue ball. Bag B contains 2 red and 3 blue balls. A fair coin is tossed: if heads, a ball is drawn from bag A; if tails, from bag B. Given that a red ball is drawn, find P(it came from bag A).',
      steps: [
        {
          prompt: 'Find P(heads and red) = P(heads) x P(red | bag A).',
          hint1: 'P(heads) = 1/2. P(red | bag A) = 4/5.',
          hint2: '(1/2) x (4/5) = 4/10 = 2/5.',
          hint3: '2/5.',
          answer: 0.4, tolerance: 0.005, unit: '',
          explanation: 'P(heads and red) = (1/2) x (4/5) = 2/5.',
          displayAnswer: '2/5',
        },
        {
          prompt: 'Find P(tails and red) = P(tails) x P(red | bag B).',
          hint1: 'P(tails) = 1/2. P(red | bag B) = 2/5.',
          hint2: '(1/2) x (2/5) = 2/10 = 1/5.',
          hint3: '1/5.',
          answer: 0.2, tolerance: 0.005, unit: '',
          explanation: 'P(tails and red) = (1/2) x (2/5) = 1/5.',
          displayAnswer: '1/5',
        },
        {
          prompt: 'Find P(red overall) by adding both routes.',
          hint1: '2/5 + 1/5 = 3/5.',
          hint2: '3/5.',
          hint3: '3/5.',
          answer: 0.6, tolerance: 0.005, unit: '',
          explanation: 'P(red) = 2/5 + 1/5 = 3/5.',
          displayAnswer: '3/5',
        },
        {
          prompt: 'Apply Bayes theorem: P(bag A | red) = P(heads and red) / P(red).',
          hint1: 'P(bag A | red) = (2/5) / (3/5).',
          hint2: '(2/5) x (5/3) = 2/3.',
          hint3: '2/3.',
          answer: 0.6667, tolerance: 0.005, unit: '',
          explanation: 'P(bag A | red) = (2/5) / (3/5) = 2/3.',
          displayAnswer: '2/3',
        },
      ],
      workedExample: {
        question: 'Bag P: 3R 2W. Bag Q: 1R 4W. Fair coin: heads draw from P, tails from Q. Given red ball, find P(from bag P).',
        steps: [
          'P(P and R) = 1/2 x 3/5 = 3/10. P(Q and R) = 1/2 x 1/5 = 1/10. P(red) = 4/10 = 2/5.',
          'P(P | red) = (3/10)/(4/10) = <strong>3/4</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(from bag A | red) = 2/3',
        grade6: 'P(red) = 1/2x4/5 + 1/2x2/5 = 2/5+1/5 = 3/5. P(A|red) = (2/5)/(3/5) = 2/3.',
        grade8: 'P(red) = 3/5 (total probability). Bayes: P(A|red) = P(A and red)/P(red) = (2/5)/(3/5) = 2/3.',
      },
      examinerTip: 'Students confuse P(red | bag A) = 4/5 with P(bag A | red). The question gives the result (red) and asks for the cause (bag A). This requires Bayes theorem.',
      auditStatus: 'pending',
    },
"""

content = content[:pos] + NEW + content[pos:]

with open('js/maths-questions.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done - prob_q3 (13 tree-diagram questions: 4A, 5B, 4C)")
