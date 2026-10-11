with open('js/maths-questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

MARKER = "\n\n    // ══════════════════════════════════════════════════════════\n    // AVERAGES & RANGE (stat-averages)"

pos = content.find(MARKER)
print(f"Inserting at char {pos}")
assert pos != -1, "AVERAGES & RANGE marker not found!"

NEW = """
    // venn-A02
    {
      id: 'venn-A02', subtopic: 'prob-venn', band: 'A', marks: 2,
      question: 'A Venn diagram shows sets A and B. A only = 6, A and B = 4, B only = 8, neither = 2. Total = 20. Find P(A) and P(A\').',
      steps: [
        {
          prompt: 'Find P(A). n(A) = n(A only) + n(A and B).',
          hint1: 'n(A) = 6 + 4 = 10.',
          hint2: 'P(A) = 10/20.',
          hint3: '1/2.',
          answer: 0.5, tolerance: 0.005, unit: '',
          explanation: 'P(A) = (6+4)/20 = 10/20 = 1/2.',
          displayAnswer: '1/2',
        },
        {
          prompt: "Find P(A') using the complement.",
          hint1: "P(A') = 1 - P(A).",
          hint2: '1 - 1/2 = 1/2.',
          hint3: '1/2.',
          answer: 0.5, tolerance: 0.005, unit: '',
          explanation: "P(A') = 1 - 1/2 = 1/2.",
          displayAnswer: '1/2',
        },
      ],
      workedExample: {
        question: 'Venn: X only = 5, X and Y = 3, Y only = 7, neither = 5. Total = 20. Find P(X) and P(Y).',
        steps: [
          'P(X) = (5+3)/20 = 8/20 = 2/5.',
          'P(Y) = (3+7)/20 = 10/20 = <strong>1/2</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: "P(A) = 1/2; P(A') = 1/2",
        grade6: "n(A) = 6+4 = 10. P(A) = 10/20 = 1/2. P(A') = 1/2.",
        grade8: "P(A) = n(A)/n(total) = 10/20 = 1/2. P(A') = 1 - P(A) = 1/2.",
      },
      examinerTip: "Students find P(A only) = 6/20 = 3/10, ignoring the 4 elements in A and B that are also in A. n(A) includes all elements in A, whether or not they are also in B.",
      auditStatus: 'pending',
    },
    // venn-A03
    {
      id: 'venn-A03', subtopic: 'prob-venn', band: 'A', marks: 2,
      question: 'A Venn diagram shows sets P and Q. P only = 10, P and Q = 4, Q only = 6, neither = 5. Total = 25. Find P(P) and P(Q\').',
      steps: [
        {
          prompt: 'Find P(P). n(P) = n(P only) + n(P and Q).',
          hint1: 'n(P) = 10 + 4 = 14.',
          hint2: 'P(P) = 14/25.',
          hint3: '14/25.',
          answer: 0.56, tolerance: 0.005, unit: '',
          explanation: 'P(P) = (10+4)/25 = 14/25.',
          displayAnswer: '14/25',
        },
        {
          prompt: "Find P(Q'). Elements NOT in Q are: P only and neither.",
          hint1: "n(Q') = P only + neither = 10 + 5 = 15.",
          hint2: "P(Q') = 15/25.",
          hint3: '3/5.',
          answer: 0.6, tolerance: 0.005, unit: '',
          explanation: "P(Q') = (10+5)/25 = 15/25 = 3/5.",
          displayAnswer: '3/5',
        },
      ],
      workedExample: {
        question: 'Venn: A only=8, A and B=5, B only=7, neither=5. Total=25. Find P(A) and P(B\').',
        steps: [
          'P(A) = (8+5)/25 = 13/25.',
          "P(B') = (8+5)/25 = 13/25 (A only + neither = 8+5=13).",
        ],
      },
      sampleAnswer: {
        grade4: "P(P) = 14/25; P(Q') = 3/5",
        grade6: "P(P) = 14/25. P(Q') = (P only + neither)/total = 15/25 = 3/5.",
        grade8: "P(P) = 14/25. Q' includes everything not in Q: P only and neither. P(Q') = 15/25 = 3/5.",
      },
      examinerTip: "Students find P(Q') = 1 - P(Q only) = 1 - 6/25, forgetting to include the 4 in P and Q when finding P(Q). n(Q) = 4+6 = 10, so P(Q) = 10/25, P(Q') = 15/25.",
      auditStatus: 'pending',
    },
    // venn-A04
    {
      id: 'venn-A04', subtopic: 'prob-venn', band: 'A', marks: 2,
      question: 'In a universal set of 30 people, everyone is in set A or set B (no one is outside both). n(A) = 20, n(B) = 18. Find n(A and B) and P(A only).',
      steps: [
        {
          prompt: 'Use inclusion-exclusion to find n(A and B). Everyone is in A or B, so n(A or B) = 30.',
          hint1: 'n(A or B) = n(A) + n(B) - n(A and B).',
          hint2: '30 = 20 + 18 - n(A and B).',
          hint3: 'n(A and B) = 8.',
          answer: 8, tolerance: 0, unit: '',
          explanation: 'n(A and B) = 20 + 18 - 30 = 8.',
        },
        {
          prompt: 'Find P(A only). n(A only) = n(A) - n(A and B).',
          hint1: 'n(A only) = 20 - 8 = 12.',
          hint2: 'P(A only) = 12/30.',
          hint3: '2/5.',
          answer: 0.4, tolerance: 0.005, unit: '',
          explanation: 'P(A only) = 12/30 = 2/5.',
          displayAnswer: '2/5',
        },
      ],
      workedExample: {
        question: 'Universal set of 40. All in C or D. n(C) = 25, n(D) = 22. Find n(C and D) and P(D only).',
        steps: [
          'n(C and D) = 25 + 22 - 40 = 7.',
          'P(D only) = (22-7)/40 = 15/40 = <strong>3/8</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'n(A and B) = 8; P(A only) = 2/5',
        grade6: 'n(A or B) = 30 (no one outside). n(A and B) = 20+18-30 = 8. P(A only) = 12/30 = 2/5.',
        grade8: 'Inclusion-exclusion: n(A and B) = 8. n(A only) = 12. P(A only) = 12/30 = 2/5.',
      },
      examinerTip: "Students calculate n(A and B) = n(A) x n(B) / total = 20 x 18 / 30 = 12, using multiplication instead of inclusion-exclusion. Always use n(A) + n(B) - n(A or B).",
      auditStatus: 'pending',
    },
    // venn-A05
    {
      id: 'venn-A05', subtopic: 'prob-venn', band: 'A', marks: 2,
      question: 'Universal set n(xi) = 50. P(A) = 2/5, P(B) = 3/10, P(A and B) = 1/10. Find n(A and B) and n(A only).',
      steps: [
        {
          prompt: 'Find n(A and B) from P(A and B) = 1/10.',
          hint1: 'n(A and B) = P(A and B) x n(total).',
          hint2: '(1/10) x 50.',
          hint3: '5.',
          answer: 5, tolerance: 0, unit: '',
          explanation: 'n(A and B) = (1/10) x 50 = 5.',
        },
        {
          prompt: 'Find n(A only). First find n(A), then subtract n(A and B).',
          hint1: 'n(A) = P(A) x 50 = (2/5) x 50 = 20.',
          hint2: 'n(A only) = n(A) - n(A and B) = 20 - 5.',
          hint3: '15.',
          answer: 15, tolerance: 0, unit: '',
          explanation: 'n(A) = 20. n(A only) = 20 - 5 = 15.',
        },
      ],
      workedExample: {
        question: 'n(xi) = 40. P(X) = 1/4, P(Y) = 3/8, P(X and Y) = 1/8. Find n(X and Y) and n(Y only).',
        steps: [
          'n(X and Y) = 1/8 x 40 = 5.',
          'n(Y) = 3/8 x 40 = 15. n(Y only) = 15 - 5 = <strong>10</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'n(A and B) = 5; n(A only) = 15',
        grade6: 'n(A and B) = 1/10 x 50 = 5. n(A) = 2/5 x 50 = 20. n(A only) = 20 - 5 = 15.',
        grade8: 'n(A and B) = 5. n(A only) = n(A) - n(A and B) = 20 - 5 = 15.',
      },
      examinerTip: 'Students divide n(A and B) by P(A and B) instead of multiplying. To convert a probability to a count, multiply probability by the total number.',
      auditStatus: 'pending',
    },
    // venn-B01
    {
      id: 'venn-B01', subtopic: 'prob-venn', band: 'B', marks: 3,
      question: 'A Venn diagram: A only = 12, A and B = 8, B only = 15, neither = 5. Total = 40. Find P(A), P(A|B) and P(A\' and B\').',
      steps: [
        {
          prompt: 'Find P(A). n(A) = 12 + 8 = 20.',
          hint1: 'P(A) = 20/40.',
          hint2: '1/2.',
          hint3: '1/2.',
          answer: 0.5, tolerance: 0.005, unit: '',
          explanation: 'P(A) = 20/40 = 1/2.',
          displayAnswer: '1/2',
        },
        {
          prompt: 'Find P(A|B). Restrict to n(B) = 8 + 15 = 23. Of those, n(A and B) = 8.',
          hint1: 'P(A|B) = n(A and B) / n(B) = 8/23.',
          hint2: '8/23.',
          hint3: '8/23.',
          answer: 0.3478, tolerance: 0.005, unit: '',
          explanation: 'P(A|B) = 8/23.',
          displayAnswer: '8/23',
        },
        {
          prompt: "Find P(A' and B'). This is the probability of being in neither A nor B.",
          hint1: "n(A' and B') = n(neither) = 5.",
          hint2: "P(A' and B') = 5/40.",
          hint3: '1/8.',
          answer: 0.125, tolerance: 0.005, unit: '',
          explanation: "P(A' and B') = 5/40 = 1/8.",
          displayAnswer: '1/8',
        },
      ],
      workedExample: {
        question: 'Venn: X only=10, X and Y=6, Y only=9, neither=5. n=30. Find P(X), P(X|Y), P(neither).',
        steps: [
          'P(X) = 16/30 = 8/15. n(Y) = 15. P(X|Y) = 6/15 = 2/5.',
          "P(neither) = 5/30 = <strong>1/6</strong>.",
        ],
      },
      sampleAnswer: {
        grade4: "P(A) = 1/2; P(A|B) = 8/23; P(A' and B') = 1/8",
        grade6: "P(A) = 1/2. P(A|B) = 8/23. P(A' and B') = 5/40 = 1/8.",
        grade8: "P(A) = 1/2. P(A|B) = P(A and B)/P(B) = (8/40)/(23/40) = 8/23. P(A'B') = 5/40 = 1/8.",
      },
      examinerTip: 'For P(A|B), students use P(A)/P(B) = (1/2)/(23/40) = 20/23 instead of P(A and B)/P(B). Always identify the intersection for conditional probability.',
      auditStatus: 'pending',
    },
    // venn-B02
    {
      id: 'venn-B02', subtopic: 'prob-venn', band: 'B', marks: 3,
      question: 'In a survey of 60 people, 35 own a car, 22 own a bike, and 10 own both. Find the number who own neither, and find P(owns exactly one vehicle).',
      steps: [
        {
          prompt: 'Find n(car only) and n(bike only).',
          hint1: 'Car only = 35 - 10 = 25. Bike only = 22 - 10 = 12.',
          hint2: '25 car only, 12 bike only.',
          hint3: '25 and 12.',
          answer: 25, tolerance: 0, unit: '',
          explanation: 'n(car only) = 25; n(bike only) = 12.',
          displayAnswer: 'car only = 25, bike only = 12',
        },
        {
          prompt: 'Find n(neither).',
          hint1: 'Total accounted for: 25 + 10 + 12 = 47.',
          hint2: 'n(neither) = 60 - 47.',
          hint3: '13.',
          answer: 13, tolerance: 0, unit: '',
          explanation: 'n(neither) = 60 - (25 + 10 + 12) = 13.',
        },
        {
          prompt: 'Find P(owns exactly one vehicle).',
          hint1: 'Exactly one: car only + bike only = 25 + 12 = 37.',
          hint2: 'P(exactly one) = 37/60.',
          hint3: '37/60.',
          answer: 0.6167, tolerance: 0.005, unit: '',
          explanation: 'P(exactly one vehicle) = 37/60.',
          displayAnswer: '37/60',
        },
      ],
      workedExample: {
        question: '50 people: 28 have a TV, 20 have a laptop, 12 have both. Find n(neither) and P(exactly one device).',
        steps: [
          'TV only = 16, laptop only = 8, neither = 50 - (16+12+8) = 14.',
          'P(exactly one) = (16+8)/50 = 24/50 = <strong>12/25</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'n(neither) = 13; P(exactly one) = 37/60',
        grade6: 'Car only=25, bike only=12, neither=13. P(exactly one) = 37/60.',
        grade8: 'n(neither) = 60-(25+10+12) = 13. P(exactly one vehicle) = 37/60.',
      },
      examinerTip: "Students find P(exactly one) = (35+22-10)/60 = 47/60 — the numerator is n(A or B), which includes those with both. Exactly one means car only OR bike only, not both.",
      auditStatus: 'pending',
    },
    // venn-B03
    {
      id: 'venn-B03', subtopic: 'prob-venn', band: 'B', marks: 3,
      question: 'Events A and B: P(A) = 0.5, P(B) = 0.4, P(A and B) = 0.2. Find P(A\' and B\') and P(A|B).',
      steps: [
        {
          prompt: 'Find P(A or B) using the addition rule.',
          hint1: 'P(A or B) = P(A) + P(B) - P(A and B).',
          hint2: '0.5 + 0.4 - 0.2 = 0.7.',
          hint3: '0.7.',
          answer: 0.7, tolerance: 0.005, unit: '',
          explanation: 'P(A or B) = 0.5 + 0.4 - 0.2 = 0.7.',
        },
        {
          prompt: "Find P(A' and B') using the complement of A or B.",
          hint1: "P(A' and B') = 1 - P(A or B).",
          hint2: '1 - 0.7 = 0.3.',
          hint3: '0.3.',
          answer: 0.3, tolerance: 0.005, unit: '',
          explanation: "P(A' and B') = 1 - P(A or B) = 1 - 0.7 = 0.3.",
        },
        {
          prompt: 'Find P(A|B).',
          hint1: 'P(A|B) = P(A and B) / P(B).',
          hint2: '0.2 / 0.4.',
          hint3: '0.5.',
          answer: 0.5, tolerance: 0.005, unit: '',
          explanation: 'P(A|B) = 0.2 / 0.4 = 0.5.',
        },
      ],
      workedExample: {
        question: 'P(X) = 0.6, P(Y) = 0.5, P(X and Y) = 0.3. Find P(neither) and P(Y|X).',
        steps: [
          "P(X or Y) = 0.6+0.5-0.3 = 0.8. P(neither) = 1-0.8 = 0.2.",
          'P(Y|X) = 0.3/0.6 = <strong>0.5</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: "P(neither) = 0.3; P(A|B) = 0.5",
        grade6: "P(A or B) = 0.7. P(neither) = 0.3. P(A|B) = 0.2/0.4 = 0.5.",
        grade8: "P(A'B') = 1-P(AuB) = 0.3. P(A|B) = P(AB)/P(B) = 0.5.",
      },
      examinerTip: "Students find P(A' and B') = P(A') x P(B') = 0.5 x 0.6 = 0.3. This only works if A and B are independent — always check. Use the complement of P(A or B) instead.",
      auditStatus: 'pending',
    },
    // venn-B04
    {
      id: 'venn-B04', subtopic: 'prob-venn', band: 'B', marks: 3,
      question: 'A Venn diagram with three sets A, B, C in a universal set of 25. Given: n(A only) = 6, n(B only) = 5, n(C only) = 3, n(A and B only) = 3, n(A and C only) = 1, n(B and C only) = 4, n(A and B and C) = 2, n(neither) = 1. Find P(element is in exactly two of the sets).',
      steps: [
        {
          prompt: 'Verify the total: sum all regions.',
          hint1: '6+5+3+3+1+4+2+1 = ?',
          hint2: '6+5+3+3+1+4+2+1 = 25. Total checks out.',
          hint3: '25.',
          answer: 25, tolerance: 0, unit: '',
          explanation: '6+5+3+3+1+4+2+1 = 25. The total is confirmed.',
        },
        {
          prompt: 'Find n(exactly two sets). These are elements in exactly two of A, B, C (not all three).',
          hint1: 'A and B only: 3. A and C only: 1. B and C only: 4.',
          hint2: '3 + 1 + 4 = 8.',
          hint3: '8.',
          answer: 8, tolerance: 0, unit: '',
          explanation: 'n(exactly two) = 3 + 1 + 4 = 8.',
        },
        {
          prompt: 'Find P(exactly two sets).',
          hint1: '8 out of 25.',
          hint2: 'P = 8/25.',
          hint3: '8/25.',
          answer: 0.32, tolerance: 0.005, unit: '',
          explanation: 'P(exactly two sets) = 8/25.',
          displayAnswer: '8/25',
        },
      ],
      workedExample: {
        question: 'Three sets, n=20. A only=3, B only=4, C only=2, AB only=2, AC only=1, BC only=3, ABC=2, neither=3. Find P(exactly two sets).',
        steps: [
          'Check total: 3+4+2+2+1+3+2+3 = 20. Correct.',
          'Exactly two: 2+1+3 = 6. P = 6/20 = <strong>3/10</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(exactly two sets) = 8/25',
        grade6: 'Check total = 25. Exactly two: 3+1+4 = 8. P = 8/25.',
        grade8: 'Elements in exactly two sets: A and B only (3), A and C only (1), B and C only (4) = 8. P = 8/25.',
      },
      examinerTip: 'Students include n(A and B and C) = 2 in their count of "exactly two" since it involves multiple sets. Elements in all three sets are in exactly three sets, not two.',
      auditStatus: 'pending',
    },
    // venn-B05
    {
      id: 'venn-B05', subtopic: 'prob-venn', band: 'B', marks: 3,
      question: '50 students: 28 study history (H), 20 study geography (G), 10 study both. A student is chosen at random. Find P(H | G\') and P(H\' and G\').',
      steps: [
        {
          prompt: "Find n(G') — the number NOT in G.",
          hint1: 'n(H only) = 28-10 = 18. n(G only) = 10. n(neither) = 50-18-10-10 = 12.',
          hint2: "n(G') = n(H only) + n(neither) = 18 + 12 = 30.",
          hint3: '30.',
          answer: 30, tolerance: 0, unit: '',
          explanation: "n(G') = n(H only) + n(neither) = 18 + 12 = 30.",
        },
        {
          prompt: "Find P(H | G'). Of the 30 not in G, how many are in H?",
          hint1: 'n(H and not G) = n(H only) = 18.',
          hint2: "P(H | G') = 18/30.",
          hint3: '3/5.',
          answer: 0.6, tolerance: 0.005, unit: '',
          explanation: "P(H | G') = 18/30 = 3/5.",
          displayAnswer: '3/5',
        },
        {
          prompt: "Find P(H' and G') — the probability of being in neither H nor G.",
          hint1: 'n(neither) = 12.',
          hint2: "P(H' and G') = 12/50.",
          hint3: '6/25.',
          answer: 0.24, tolerance: 0.005, unit: '',
          explanation: "P(H' and G') = 12/50 = 6/25.",
          displayAnswer: '6/25',
        },
      ],
      workedExample: {
        question: '40 students: 22 study art (A), 18 study music (M), 8 study both. Find P(A | M\') and P(neither).',
        steps: [
          "n(M') = (22-8) + (40-22-18+8) = 14+8 = 22. n(A only) = 14. P(A | M') = 14/22 = 7/11.",
          'P(neither) = 8/40 = <strong>1/5</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: "P(H|G') = 3/5; P(H' and G') = 6/25",
        grade6: "H only=18, G only=10, neither=12. n(G')=30. P(H|G')=18/30=3/5. P(neither)=12/50=6/25.",
        grade8: "P(H|G')=18/30=3/5. P(H'G')=12/50=6/25.",
      },
      examinerTip: "For P(H|G'), restrict the denominator to G', not the full 50. Students often use P(H)/P(G') = (28/50)/(30/50) = 28/30 = 14/15, which is wrong for conditional probability from a Venn diagram.",
      auditStatus: 'pending',
    },
    // venn-B06
    {
      id: 'venn-B06', subtopic: 'prob-venn', band: 'B', marks: 3,
      question: 'From a Venn diagram: P(A) = 0.45, P(B) = 0.35, P(A\' and B\') = 0.3. Find P(A and B) and P(A|B).',
      steps: [
        {
          prompt: "Use P(A' and B') to find P(A or B).",
          hint1: "P(A' and B') = 1 - P(A or B).",
          hint2: '0.3 = 1 - P(A or B).',
          hint3: 'P(A or B) = 0.7.',
          answer: 0.7, tolerance: 0.005, unit: '',
          explanation: 'P(A or B) = 1 - 0.3 = 0.7.',
        },
        {
          prompt: 'Use the addition rule to find P(A and B).',
          hint1: 'P(A or B) = P(A) + P(B) - P(A and B).',
          hint2: '0.7 = 0.45 + 0.35 - P(A and B).',
          hint3: 'P(A and B) = 0.1.',
          answer: 0.1, tolerance: 0.005, unit: '',
          explanation: 'P(A and B) = 0.45 + 0.35 - 0.7 = 0.1.',
        },
        {
          prompt: 'Find P(A|B).',
          hint1: 'P(A|B) = P(A and B) / P(B).',
          hint2: '0.1 / 0.35.',
          hint3: '2/7.',
          answer: 0.2857, tolerance: 0.005, unit: '',
          explanation: 'P(A|B) = 0.1 / 0.35 = 2/7.',
          displayAnswer: '2/7',
        },
      ],
      workedExample: {
        question: 'P(X) = 0.6, P(Y) = 0.5, P(neither) = 0.1. Find P(X and Y) and P(Y|X).',
        steps: [
          'P(X or Y) = 0.9. P(X and Y) = 0.6+0.5-0.9 = 0.2.',
          'P(Y|X) = 0.2/0.6 = <strong>1/3</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(A and B) = 0.1; P(A|B) = 2/7',
        grade6: 'P(A or B) = 0.7. P(A and B) = 0.8-0.7 = 0.1. P(A|B) = 0.1/0.35 = 2/7.',
        grade8: 'P(A and B) = P(A)+P(B)-P(A or B) = 0.1. P(A|B) = 0.1/0.35 = 2/7.',
      },
      examinerTip: "Students find P(A and B) = P(A) x P(B) = 0.45 x 0.35 = 0.1575. This multiplication only works if A and B are independent — and here they are not, since P(A and B) = 0.1, not 0.1575.",
      auditStatus: 'pending',
    },
    // venn-C01
    {
      id: 'venn-C01', subtopic: 'prob-venn', band: 'C', marks: 4,
      question: 'In a universal set n(xi) = 60. P(A) = 1/3, P(B) = 2/5. Events A and B are independent. Find n(A and B). Verify independence using P(A|B) and comment.',
      steps: [
        {
          prompt: 'For independent events, P(A and B) = P(A) x P(B). Calculate P(A and B).',
          hint1: 'P(A and B) = (1/3) x (2/5).',
          hint2: '2/15.',
          hint3: '2/15.',
          answer: 0.1333, tolerance: 0.005, unit: '',
          explanation: 'P(A and B) = (1/3) x (2/5) = 2/15.',
          displayAnswer: '2/15',
        },
        {
          prompt: 'Find n(A and B).',
          hint1: 'n(A and B) = P(A and B) x n(xi).',
          hint2: '(2/15) x 60.',
          hint3: '8.',
          answer: 8, tolerance: 0, unit: '',
          explanation: 'n(A and B) = (2/15) x 60 = 8.',
        },
        {
          prompt: 'Find P(A|B) and compare it with P(A).',
          hint1: 'P(B) = 2/5. P(A|B) = P(A and B) / P(B) = (2/15) / (2/5).',
          hint2: '(2/15) x (5/2) = 10/30 = 1/3.',
          hint3: 'P(A|B) = 1/3 = P(A).',
          answer: 0.3333, tolerance: 0.005, unit: '',
          explanation: 'P(A|B) = (2/15)/(2/5) = 1/3 = P(A). Knowing B does not change the probability of A.',
          displayAnswer: '1/3',
        },
        {
          prompt: 'State and explain what this tells you about independence.',
          hint1: 'P(A|B) = P(A) = 1/3.',
          hint2: 'Knowing B has occurred does not change the probability of A.',
          hint3: 'This confirms A and B are independent.',
          answer: 0.3333, tolerance: 0.005, unit: '',
          explanation: 'P(A|B) = P(A) = 1/3 confirms independence: the occurrence of B carries no information about A.',
          displayAnswer: 'P(A|B) = P(A) — confirms independence',
        },
      ],
      workedExample: {
        question: 'n(xi) = 80. P(X) = 1/4, P(Y) = 2/5, X and Y independent. Find n(X and Y) and P(Y|X).',
        steps: [
          'P(X and Y) = 1/4 x 2/5 = 2/20 = 1/10. n(X and Y) = (1/10) x 80 = 8.',
          'P(Y|X) = P(X and Y)/P(X) = (1/10)/(1/4) = 4/10 = 2/5 = P(Y). Confirms independence.',
        ],
      },
      sampleAnswer: {
        grade4: 'n(A and B) = 8; P(A|B) = 1/3 = P(A) — independent',
        grade6: 'P(A and B) = 1/3 x 2/5 = 2/15. n(A and B) = 8. P(A|B) = 1/3 = P(A) — confirms independence.',
        grade8: 'P(AB) = 2/15 (independence). n(AB) = 8. P(A|B) = P(AB)/P(B) = (2/15)/(2/5) = 1/3 = P(A). This confirms independence as knowing B gives no additional information about A.',
      },
      examinerTip: "Students verify independence by checking P(A) x P(B) = P(A and B) (which is circular here since we used independence to find P(A and B)). The proper verification is P(A|B) = P(A) — compute P(A|B) separately.",
      auditStatus: 'pending',
    },
    // venn-C02
    {
      id: 'venn-C02', subtopic: 'prob-venn', band: 'C', marks: 4,
      question: 'Three sets A, B, C in a universal set of 50. n(A) = 20, n(B) = 18, n(C) = 15, n(A and B) = 7, n(A and C) = 5, n(B and C) = 4, n(A and B and C) = 2. Find n(A or B or C) and P(in none of A, B, C).',
      steps: [
        {
          prompt: 'Apply inclusion-exclusion for three sets: n(A or B or C) = n(A)+n(B)+n(C)-n(AB)-n(AC)-n(BC)+n(ABC).',
          hint1: '20 + 18 + 15 - 7 - 5 - 4 + 2.',
          hint2: '53 - 16 + 2 = 39.',
          hint3: '39.',
          answer: 39, tolerance: 0, unit: '',
          explanation: 'n(A or B or C) = 20+18+15-7-5-4+2 = 39.',
        },
        {
          prompt: 'Find n(in none of A, B or C).',
          hint1: 'n(none) = n(xi) - n(A or B or C).',
          hint2: '50 - 39.',
          hint3: '11.',
          answer: 11, tolerance: 0, unit: '',
          explanation: 'n(none) = 50 - 39 = 11.',
        },
        {
          prompt: 'Find P(in none of A, B, C).',
          hint1: 'P(none) = 11/50.',
          hint2: '11/50.',
          hint3: '0.22.',
          answer: 0.22, tolerance: 0.005, unit: '',
          explanation: 'P(none) = 11/50 = 0.22.',
          displayAnswer: '11/50',
        },
        {
          prompt: 'Check: does n(A only) + n(B only) + n(C only) + intersections + n(ABC) + n(none) = 50?',
          hint1: 'A only = 20-7-5+2=10. B only = 18-7-4+2=9. C only = 15-5-4+2=8.',
          hint2: 'AB only = 7-2=5. AC only = 5-2=3. BC only = 4-2=2. ABC = 2. None = 11.',
          hint3: '10+9+8+5+3+2+2+11 = 50. Correct.',
          answer: 0.22, tolerance: 0.005, unit: '',
          explanation: 'Verified: all regions sum to 50. P(none) = 11/50 = 0.22.',
          displayAnswer: '11/50',
        },
      ],
      workedExample: {
        question: 'n(xi)=40. n(A)=15, n(B)=12, n(C)=10, n(AB)=4, n(AC)=3, n(BC)=2, n(ABC)=1. Find n(A or B or C).',
        steps: [
          'n(A or B or C) = 15+12+10-4-3-2+1 = 29.',
          'P(none) = (40-29)/40 = 11/40.',
        ],
      },
      sampleAnswer: {
        grade4: 'n(A or B or C) = 39; P(none) = 11/50',
        grade6: 'n(AuBuC) = 20+18+15-7-5-4+2 = 39. n(none) = 11. P(none) = 11/50.',
        grade8: 'Inclusion-exclusion: n(AuBuC) = 39. n(none) = 11. P(none) = 11/50 = 0.22.',
      },
      examinerTip: 'Students apply two-set inclusion-exclusion (A+B-AB) and forget the third set and the triple intersection. For three sets: add all three, subtract all pairs, add back the triple intersection.',
      auditStatus: 'pending',
    },
    // venn-C03
    {
      id: 'venn-C03', subtopic: 'prob-venn', band: 'C', marks: 4,
      question: 'P(A and B) = 0.15, P(A|B) = 0.6. Find P(B). Given P(A) = 0.4, find P(B|A) and determine whether A and B are independent.',
      steps: [
        {
          prompt: 'Use P(A|B) = P(A and B) / P(B). Rearrange to find P(B).',
          hint1: 'P(B) = P(A and B) / P(A|B).',
          hint2: '0.15 / 0.6.',
          hint3: '0.25.',
          answer: 0.25, tolerance: 0.005, unit: '',
          explanation: 'P(B) = P(A and B) / P(A|B) = 0.15 / 0.6 = 0.25.',
        },
        {
          prompt: 'Find P(B|A) using P(A) = 0.4.',
          hint1: 'P(B|A) = P(A and B) / P(A).',
          hint2: '0.15 / 0.4.',
          hint3: '0.375.',
          answer: 0.375, tolerance: 0.005, unit: '',
          explanation: 'P(B|A) = 0.15 / 0.4 = 0.375.',
        },
        {
          prompt: 'Compare P(B|A) with P(B). Are A and B independent?',
          hint1: 'P(B) = 0.25. P(B|A) = 0.375.',
          hint2: '0.375 does not equal 0.25.',
          hint3: 'A and B are NOT independent.',
          answer: 0.375, tolerance: 0.005, unit: '',
          explanation: 'P(B|A) = 0.375 does not equal P(B) = 0.25, so A and B are not independent.',
          displayAnswer: 'Not independent: P(B|A) = 0.375 but P(B) = 0.25',
        },
        {
          prompt: 'Verify by checking P(A) x P(B) vs P(A and B).',
          hint1: 'P(A) x P(B) = 0.4 x 0.25 = 0.1.',
          hint2: 'P(A and B) = 0.15.',
          hint3: '0.1 does not equal 0.15, confirming NOT independent.',
          answer: 0.375, tolerance: 0.005, unit: '',
          explanation: 'P(A)xP(B) = 0.1, but P(A and B) = 0.15. Not equal, so not independent. Confirmed.',
          displayAnswer: 'P(A)xP(B) = 0.1 but P(A and B) = 0.15 — not equal, confirming dependence',
        },
      ],
      workedExample: {
        question: 'P(X and Y) = 0.2, P(Y|X) = 0.5. Find P(X). Given P(Y) = 0.3, is X and Y independent?',
        steps: [
          'P(X) = P(XY)/P(Y|X) = 0.2/0.5 = 0.4.',
          'P(X)xP(Y) = 0.4x0.3=0.12. P(XY)=0.2. 0.12 not equal 0.2, so <strong>not independent</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(B) = 0.25; P(B|A) = 0.375; not independent',
        grade6: 'P(B) = 0.15/0.6 = 0.25. P(B|A) = 0.15/0.4 = 0.375. P(B|A) not equal P(B), so not independent.',
        grade8: 'P(B) = 0.25. P(B|A) = 0.375 not equal P(B) = 0.25. Also P(A)P(B) = 0.1 not equal P(AB) = 0.15. Not independent.',
      },
      examinerTip: 'Students check independence by comparing P(A|B) = 0.6 with P(A) = 0.4 (correctly concluding not independent), but they must show full working including finding P(B) and P(B|A) for full marks.',
      auditStatus: 'pending',
    },
    // venn-C04
    {
      id: 'venn-C04', subtopic: 'prob-venn', band: 'C', marks: 4,
      question: 'P(A) = 0.5 and P(B) = 0.4. Calculate P(A or B) under two scenarios: (i) A and B are mutually exclusive; (ii) A and B are independent. Show that the two answers differ and explain why.',
      steps: [
        {
          prompt: 'Scenario (i): A and B are mutually exclusive. Find P(A or B).',
          hint1: 'Mutually exclusive: P(A and B) = 0.',
          hint2: 'P(A or B) = P(A) + P(B) = 0.5 + 0.4.',
          hint3: '0.9.',
          answer: 0.9, tolerance: 0.005, unit: '',
          explanation: 'Mutually exclusive: P(A or B) = 0.5 + 0.4 = 0.9.',
        },
        {
          prompt: 'Scenario (ii): A and B are independent. Find P(A and B) first.',
          hint1: 'P(A and B) = P(A) x P(B) for independent events.',
          hint2: '0.5 x 0.4 = 0.2.',
          hint3: '0.2.',
          answer: 0.2, tolerance: 0.005, unit: '',
          explanation: 'P(A and B) = 0.5 x 0.4 = 0.2 for independent events.',
        },
        {
          prompt: 'Now find P(A or B) for scenario (ii).',
          hint1: 'P(A or B) = P(A) + P(B) - P(A and B).',
          hint2: '0.5 + 0.4 - 0.2.',
          hint3: '0.7.',
          answer: 0.7, tolerance: 0.005, unit: '',
          explanation: 'P(A or B) = 0.5 + 0.4 - 0.2 = 0.7.',
        },
        {
          prompt: 'Explain why the answers differ (0.9 vs 0.7).',
          hint1: 'Mutually exclusive: no overlap — P(A or B) is larger.',
          hint2: 'Independent: there is an overlap of 0.2 which is subtracted.',
          hint3: 'Mutually exclusive means no event can occur with the other; independent means knowing one event gives no information about the other.',
          answer: 0.7, tolerance: 0.005, unit: '',
          explanation: 'Mutually exclusive (no overlap) gives a higher P(A or B) = 0.9. Independent events share an overlap of P(A)xP(B) = 0.2, giving P(A or B) = 0.7. Note: large probabilities like 0.5 and 0.4 cannot be mutually exclusive AND independent — if they were independent, P(A and B) = 0.2, not 0.',
          displayAnswer: '0.9 (mutually exclusive) vs 0.7 (independent) — overlap makes the difference',
        },
      ],
      workedExample: {
        question: 'P(X) = 0.3, P(Y) = 0.5. Find P(X or Y) if (i) mutually exclusive, (ii) independent.',
        steps: [
          'Mutually exclusive: P(X or Y) = 0.3+0.5 = 0.8.',
          'Independent: P(X and Y) = 0.15. P(X or Y) = 0.8-0.15 = <strong>0.65</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'Mutually exclusive: 0.9; independent: 0.7',
        grade6: 'ME: P(A or B) = 0.9 (no overlap). Independent: P(AB) = 0.2, P(A or B) = 0.7.',
        grade8: 'ME: P(AB)=0 so P(AuB)=0.9. Independent: P(AB)=0.2 so P(AuB)=0.7. Mutually exclusive gives a higher value since there is no overlap to subtract.',
      },
      examinerTip: "Students claim that mutually exclusive and independent mean the same thing. They don't: mutually exclusive means P(A and B) = 0 (cannot both happen); independent means P(A and B) = P(A) x P(B) (one doesn't affect the other).",
      auditStatus: 'pending',
    },
"""

content = content[:pos] + NEW + content[pos:]

with open('js/maths-questions.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done - prob_q4 (14 Venn diagram questions: 4A, 6B, 4C)")
