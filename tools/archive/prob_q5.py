with open('js/maths-questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# ── 1. Insert CONDITIONAL PROBABILITY section before AVERAGES & RANGE ────────
MARKER = "\n\n    // ══════════════════════════════════════════════════════════\n    // AVERAGES & RANGE (stat-averages)"

pos = content.find(MARKER)
print(f"Inserting conditional section at char {pos}")
assert pos != -1, "AVERAGES & RANGE marker not found!"

NEW = """

    // ══════════════════════════════════════════════════════════
    // CONDITIONAL PROBABILITY (prob-conditional) — Higher
    // ══════════════════════════════════════════════════════════
    // cond-A01
    {
      id: 'cond-A01', subtopic: 'prob-conditional', band: 'A', marks: 2,
      question: 'P(A) = 0.4 and P(A and B) = 0.2. Find P(B|A).',
      steps: [
        {
          prompt: 'Write the formula for conditional probability.',
          hint1: 'P(B|A) = P(A and B) / P(A).',
          hint2: '0.2 / 0.4.',
          hint3: '0.5.',
          answer: 0.5, tolerance: 0.005, unit: '',
          explanation: 'P(B|A) = P(A and B) / P(A) = 0.2 / 0.4 = 0.5.',
        },
        {
          prompt: 'State your answer and interpret it briefly.',
          hint1: 'P(B|A) = 0.5.',
          hint2: 'Given A has occurred, there is a 50% chance B also occurs.',
          hint3: '0.5.',
          answer: 0.5, tolerance: 0.005, unit: '',
          explanation: 'P(B|A) = 0.5. Given A has occurred, P(B) becomes 0.5.',
        },
      ],
      workedExample: {
        question: 'P(X) = 0.6, P(X and Y) = 0.3. Find P(Y|X).',
        steps: [
          'P(Y|X) = P(X and Y) / P(X) = 0.3 / 0.6 = <strong>0.5</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(B|A) = 0.5',
        grade6: 'P(B|A) = P(A and B)/P(A) = 0.2/0.4 = 0.5.',
        grade8: 'P(B|A) = P(A and B)/P(A) = 0.5. This means knowing A has happened doubles the probability of B compared to P(A and B) alone.',
      },
      examinerTip: 'Students write P(B|A) = P(A and B) x P(A) = 0.08, multiplying rather than dividing. The formula divides by the conditioning event probability.',
      auditStatus: 'pending',
    },
    // cond-A02
    {
      id: 'cond-A02', subtopic: 'prob-conditional', band: 'A', marks: 2,
      question: 'A bag has 4 red and 6 blue balls. A ball is drawn at random and found to be red. It is not replaced. What is P(the next ball drawn is also red)?',
      steps: [
        {
          prompt: 'After drawing a red ball (not replaced), how many balls remain? How many are red?',
          hint1: 'Started with 4 red, 6 blue (10 total). One red removed.',
          hint2: 'Now: 3 red, 6 blue, 9 total.',
          hint3: '3 red out of 9 remain.',
          answer: 9, tolerance: 0, unit: 'balls remain',
          explanation: 'After removing one red: 3 red, 6 blue, 9 total remain.',
          displayAnswer: '3 red, 6 blue, 9 total',
        },
        {
          prompt: 'Find P(next ball is red | first was red).',
          hint1: '3 red out of 9 remaining.',
          hint2: 'P = 3/9.',
          hint3: '1/3.',
          answer: 0.3333, tolerance: 0.005, unit: '',
          explanation: 'P(second red | first red) = 3/9 = 1/3.',
          displayAnswer: '1/3',
        },
      ],
      workedExample: {
        question: 'Bag: 5 red, 3 blue. First ball drawn is red (not replaced). P(second ball is blue)?',
        steps: [
          'After removing a red: 4 red, 3 blue, 7 total.',
          'P(blue | first was red) = 3/7.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(next red | first red) = 1/3',
        grade6: 'After removing a red: 3 red, 9 total. P = 3/9 = 1/3.',
        grade8: 'P(R2|R1) = 3/9 = 1/3. The condition updates our knowledge: we know one red has been removed.',
      },
      examinerTip: "Students use the original bag (P = 4/10) without adjusting for the removed ball. Always update the bag after a conditional event when 'not replaced' is stated.",
      auditStatus: 'pending',
    },
    // cond-A03
    {
      id: 'cond-A03', subtopic: 'prob-conditional', band: 'A', marks: 2,
      question: 'A card is drawn from a standard 52-card pack and is a court card (Jack, Queen or King). Find P(it is a Queen | it is a court card).',
      steps: [
        {
          prompt: 'How many court cards are there in a standard pack?',
          hint1: 'Court cards: Jack, Queen, King — 3 per suit, 4 suits.',
          hint2: '3 x 4 = 12 court cards.',
          hint3: '12.',
          answer: 12, tolerance: 0, unit: '',
          explanation: 'There are 12 court cards: J, Q, K in each of 4 suits.',
        },
        {
          prompt: 'Given the card is a court card, find P(it is a Queen).',
          hint1: '4 Queens in the pack.',
          hint2: 'P(Queen | court card) = 4/12.',
          hint3: '1/3.',
          answer: 0.3333, tolerance: 0.005, unit: '',
          explanation: 'P(Queen | court card) = 4/12 = 1/3.',
          displayAnswer: '1/3',
        },
      ],
      workedExample: {
        question: 'A card is drawn and is a red card. Find P(it is a heart | it is red).',
        steps: [
          '26 red cards. 13 are hearts.',
          'P(heart | red) = 13/26 = 1/2.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(Queen | court card) = 1/3',
        grade6: '12 court cards. 4 are queens. P(Queen | court) = 4/12 = 1/3.',
        grade8: 'P(Queen | court card) = P(Queen and court card)/P(court card) = (4/52)/(12/52) = 4/12 = 1/3.',
      },
      examinerTip: 'Students find P(Queen) = 4/52 = 1/13 and forget that the condition restricts to court cards only. The sample space is reduced to 12 court cards.',
      auditStatus: 'pending',
    },
    // cond-A04
    {
      id: 'cond-A04', subtopic: 'prob-conditional', band: 'A', marks: 2,
      question: 'P(B|A) = 0.3 and P(A) = 0.5. Find P(A and B).',
      steps: [
        {
          prompt: 'Use the multiplication rule: P(A and B) = P(B|A) x P(A).',
          hint1: 'P(A and B) = 0.3 x 0.5.',
          hint2: '0.15.',
          hint3: '0.15.',
          answer: 0.15, tolerance: 0.005, unit: '',
          explanation: 'P(A and B) = P(B|A) x P(A) = 0.3 x 0.5 = 0.15.',
        },
        {
          prompt: 'State your final answer.',
          hint1: '0.15.',
          hint2: 'This is a rearrangement of the conditional probability formula.',
          hint3: '0.15.',
          answer: 0.15, tolerance: 0.005, unit: '',
          explanation: 'P(A and B) = 0.15.',
        },
      ],
      workedExample: {
        question: 'P(Y|X) = 0.6 and P(X) = 0.4. Find P(X and Y).',
        steps: [
          'P(X and Y) = P(Y|X) x P(X) = 0.6 x 0.4 = <strong>0.24</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(A and B) = 0.15',
        grade6: 'P(A and B) = P(B|A) x P(A) = 0.3 x 0.5 = 0.15.',
        grade8: 'Multiplication rule: P(A and B) = P(A) x P(B|A) = 0.15. This is the general rule for dependent events.',
      },
      examinerTip: "Students divide instead of multiply: P(A and B) = P(B|A) / P(A) = 0.3/0.5 = 0.6. The formula P(B|A) = P(AB)/P(A) rearranges to P(AB) = P(B|A) x P(A).",
      auditStatus: 'pending',
    },
    // cond-A05
    {
      id: 'cond-A05', subtopic: 'prob-conditional', band: 'A', marks: 2,
      question: 'In a group of 100 people, P(drives a car) = 0.6 and P(drives a car AND owns a bike) = 0.3. Find P(owns a bike | drives a car).',
      steps: [
        {
          prompt: 'Apply the conditional probability formula.',
          hint1: 'P(bike | car) = P(bike and car) / P(car).',
          hint2: '0.3 / 0.6.',
          hint3: '0.5.',
          answer: 0.5, tolerance: 0.005, unit: '',
          explanation: 'P(bike | car) = 0.3 / 0.6 = 0.5.',
        },
        {
          prompt: 'State the answer and give a brief interpretation.',
          hint1: '0.5.',
          hint2: 'Half of car drivers also own a bike.',
          hint3: '0.5.',
          answer: 0.5, tolerance: 0.005, unit: '',
          explanation: 'P(bike | car) = 0.5. Among car drivers, 50% also own a bike.',
        },
      ],
      workedExample: {
        question: 'P(reads fiction) = 0.7, P(reads fiction and biography) = 0.28. Find P(reads biography | reads fiction).',
        steps: [
          'P(biog | fiction) = 0.28 / 0.7 = <strong>0.4</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(bike | car) = 0.5',
        grade6: 'P(bike | car) = P(bike and car)/P(car) = 0.3/0.6 = 0.5.',
        grade8: 'P(bike|car) = 0.3/0.6 = 0.5. This means car ownership and bike ownership are linked — 50% of car drivers also own a bike.',
      },
      examinerTip: "Students calculate P(car | bike) = P(car and bike)/P(bike) but P(bike) is not given. Always divide by the conditioning event's probability — P(car) = 0.6 here.",
      auditStatus: 'pending',
    },
    // cond-B01
    {
      id: 'cond-B01', subtopic: 'prob-conditional', band: 'B', marks: 3,
      question: 'A two-way table shows 40 people classified by gender and subject preference. Boys: 15 prefer science, 5 prefer art (20 boys total). Girls: 12 prefer science, 8 prefer art (20 girls total). Find P(prefers science | girl) and P(girl | prefers science).',
      steps: [
        {
          prompt: 'Find P(prefers science | girl). Restrict to the 20 girls.',
          hint1: '12 girls prefer science out of 20 girls.',
          hint2: 'P(science | girl) = 12/20.',
          hint3: '3/5.',
          answer: 0.6, tolerance: 0.005, unit: '',
          explanation: 'P(science | girl) = 12/20 = 3/5.',
          displayAnswer: '3/5',
        },
        {
          prompt: 'Find the total number who prefer science.',
          hint1: '15 boys + 12 girls = 27 prefer science.',
          hint2: '27.',
          hint3: '27.',
          answer: 27, tolerance: 0, unit: '',
          explanation: 'Total preferring science = 15 + 12 = 27.',
        },
        {
          prompt: 'Find P(girl | prefers science). Restrict to the 27 who prefer science.',
          hint1: '12 girls prefer science out of 27.',
          hint2: 'P(girl | science) = 12/27.',
          hint3: '4/9.',
          answer: 0.4444, tolerance: 0.005, unit: '',
          explanation: 'P(girl | science) = 12/27 = 4/9.',
          displayAnswer: '4/9',
        },
      ],
      workedExample: {
        question: '60 people. Men: 18 prefer tea, 12 prefer coffee. Women: 20 prefer tea, 10 prefer coffee. Find P(tea | man) and P(man | tea).',
        steps: [
          'P(tea | man) = 18/30 = 3/5.',
          'Total tea: 18+20=38. P(man | tea) = 18/38 = 9/19.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(science|girl) = 3/5; P(girl|science) = 4/9',
        grade6: 'P(science|girl) = 12/20 = 3/5. Total science = 27. P(girl|science) = 12/27 = 4/9.',
        grade8: 'P(science|girl) = 3/5. P(girl|science) = 12/27 = 4/9. Note P(A|B) and P(B|A) are different.',
      },
      examinerTip: "Students swap the two conditional probabilities, giving P(girl|science) = 20/40 = 1/2. Always identify which event is the 'given' condition and use only that group as the denominator.",
      auditStatus: 'pending',
    },
    // cond-B02
    {
      id: 'cond-B02', subtopic: 'prob-conditional', band: 'B', marks: 3,
      question: 'P(A) = 0.6, P(B|A) = 0.4 and P(B|A\') = 0.1. Find P(B) using the law of total probability.',
      steps: [
        {
          prompt: "Find P(A') and calculate P(A' and B).",
          hint1: "P(A') = 1 - 0.6 = 0.4.",
          hint2: "P(A' and B) = P(B|A') x P(A') = 0.1 x 0.4.",
          hint3: '0.04.',
          answer: 0.04, tolerance: 0.005, unit: '',
          explanation: "P(A' and B) = 0.1 x 0.4 = 0.04.",
        },
        {
          prompt: 'Calculate P(A and B).',
          hint1: 'P(A and B) = P(B|A) x P(A) = 0.4 x 0.6.',
          hint2: '0.24.',
          hint3: '0.24.',
          answer: 0.24, tolerance: 0.005, unit: '',
          explanation: 'P(A and B) = 0.4 x 0.6 = 0.24.',
        },
        {
          prompt: 'Apply the total probability law: P(B) = P(A and B) + P(A\' and B).',
          hint1: '0.24 + 0.04.',
          hint2: '0.28.',
          hint3: '0.28.',
          answer: 0.28, tolerance: 0.005, unit: '',
          explanation: 'P(B) = 0.24 + 0.04 = 0.28.',
        },
      ],
      workedExample: {
        question: "P(C) = 0.5, P(D|C) = 0.6, P(D|C') = 0.2. Find P(D).",
        steps: [
          'P(C and D) = 0.6x0.5=0.3.',
          "P(C' and D) = 0.2x0.5=0.1. P(D) = 0.3+0.1 = <strong>0.4</strong>.",
        ],
      },
      sampleAnswer: {
        grade4: 'P(B) = 0.28',
        grade6: 'P(A and B) = 0.24. P(A\' and B) = 0.04. P(B) = 0.28.',
        grade8: 'Total probability: P(B) = P(B|A)P(A) + P(B|A\')P(A\') = 0.24+0.04 = 0.28.',
      },
      examinerTip: "Students use only one branch: P(B) = P(B|A) x P(A) = 0.24, ignoring the route through A'. The total probability law sums over all ways B can occur.",
      auditStatus: 'pending',
    },
    // cond-B03
    {
      id: 'cond-B03', subtopic: 'prob-conditional', band: 'B', marks: 3,
      question: 'A bag has 3 red and 5 blue balls. Two are drawn without replacement. Given that the second ball drawn is red, find P(the first ball was also red).',
      steps: [
        {
          prompt: 'Find P(second is red) using total probability. Consider both routes: RR and BR.',
          hint1: 'P(R1)=3/8. P(R2|R1)=2/7. P(R2 via RR) = 3/8 x 2/7 = 6/56.',
          hint2: 'P(B1)=5/8. P(R2|B1)=3/7. P(R2 via BR) = 5/8 x 3/7 = 15/56.',
          hint3: 'P(R2) = 6/56 + 15/56 = 21/56 = 3/8.',
          answer: 0.375, tolerance: 0.005, unit: '',
          explanation: 'P(R2) = 6/56 + 15/56 = 21/56 = 3/8.',
          displayAnswer: '3/8',
        },
        {
          prompt: 'Find P(R1 and R2).',
          hint1: 'P(R1 and R2) = P(R1) x P(R2|R1) = 3/8 x 2/7.',
          hint2: '6/56 = 3/28.',
          hint3: '3/28.',
          answer: 0.1071, tolerance: 0.005, unit: '',
          explanation: 'P(R1 and R2) = 3/8 x 2/7 = 6/56 = 3/28.',
          displayAnswer: '3/28',
        },
        {
          prompt: 'Apply Bayes theorem: P(R1|R2) = P(R1 and R2) / P(R2).',
          hint1: '(3/28) / (3/8).',
          hint2: '(3/28) x (8/3) = 24/84 = 2/7.',
          hint3: '2/7.',
          answer: 0.2857, tolerance: 0.005, unit: '',
          explanation: 'P(R1|R2) = (3/28) / (3/8) = (3/28) x (8/3) = 2/7.',
          displayAnswer: '2/7',
        },
      ],
      workedExample: {
        question: 'Bag: 2 red, 4 blue. Draw two without replacement. Given second is blue, find P(first was also blue).',
        steps: [
          'P(B2) = P(B1)P(B2|B1)+P(R1)P(B2|R1) = 4/6x3/5 + 2/6x4/5 = 12/30+8/30=20/30=2/3.',
          'P(B1 and B2) = 4/6x3/5=12/30. P(B1|B2) = (12/30)/(2/3) = (12/30)x(3/2) = 36/60 = <strong>3/5</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(first red | second red) = 2/7',
        grade6: 'P(R2) = 3/8. P(R1 and R2) = 3/28. P(R1|R2) = (3/28)/(3/8) = 2/7.',
        grade8: 'Bayes: P(R1|R2) = P(R1 and R2)/P(R2) = (3/28)/(3/8) = 2/7.',
      },
      examinerTip: 'Students read P(R2|R1) = 2/7 directly from the tree and confuse it with P(R1|R2). The required probability reverses the conditioning — it needs Bayes theorem.',
      auditStatus: 'pending',
    },
    // cond-B04
    {
      id: 'cond-B04', subtopic: 'prob-conditional', band: 'B', marks: 3,
      question: 'A medical test for a disease has: P(positive | has disease) = 0.95 and P(positive | no disease) = 0.05. The prevalence of the disease is P(disease) = 0.01. A patient tests positive. Find P(has disease | positive test) to 3 d.p.',
      steps: [
        {
          prompt: 'Find P(positive test) using the total probability law.',
          hint1: 'P(pos) = P(pos|disease)xP(disease) + P(pos|no disease)xP(no disease).',
          hint2: '0.95x0.01 + 0.05x0.99 = 0.0095 + 0.0495.',
          hint3: '0.059.',
          answer: 0.059, tolerance: 0.005, unit: '',
          explanation: 'P(positive) = 0.0095 + 0.0495 = 0.059.',
        },
        {
          prompt: 'Find P(disease and positive test).',
          hint1: 'P(disease and positive) = P(pos|disease) x P(disease).',
          hint2: '0.95 x 0.01.',
          hint3: '0.0095.',
          answer: 0.0095, tolerance: 0.001, unit: '',
          explanation: 'P(disease and positive) = 0.0095.',
        },
        {
          prompt: 'Apply Bayes theorem: P(disease | positive) = P(disease and positive) / P(positive).',
          hint1: '0.0095 / 0.059.',
          hint2: '0.1610...',
          hint3: '0.161.',
          answer: 0.161, tolerance: 0.005, unit: '',
          explanation: 'P(disease | positive) = 0.0095 / 0.059 = 0.161 (to 3 d.p.).',
        },
      ],
      workedExample: {
        question: 'P(disease) = 0.05. P(pos|disease) = 0.9, P(pos|no disease) = 0.1. Find P(disease|positive).',
        steps: [
          'P(pos) = 0.9x0.05 + 0.1x0.95 = 0.045+0.095 = 0.14.',
          'P(disease|pos) = 0.045/0.14 = <strong>0.321</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(disease | positive) = 0.161',
        grade6: 'P(positive) = 0.059. P(disease|positive) = 0.0095/0.059 = 0.161.',
        grade8: 'Total probability: P(+) = 0.059. Bayes: P(disease|+) = 0.0095/0.059 = 0.161. Only 16% of positive tests indicate real disease — this is the base rate fallacy.',
      },
      examinerTip: 'Students answer 0.95 (the sensitivity of the test). That is P(positive|disease), not P(disease|positive). The two are very different, especially when the disease is rare.',
      auditStatus: 'pending',
    },
    // cond-B05
    {
      id: 'cond-B05', subtopic: 'prob-conditional', band: 'B', marks: 3,
      question: 'P(A) = 0.3, P(B) = 0.4 and P(A and B) = 0.12. Find P(A|B) and P(B|A). Hence determine whether A and B are independent.',
      steps: [
        {
          prompt: 'Find P(A|B).',
          hint1: 'P(A|B) = P(A and B) / P(B) = 0.12 / 0.4.',
          hint2: '0.3.',
          hint3: '0.3.',
          answer: 0.3, tolerance: 0.005, unit: '',
          explanation: 'P(A|B) = 0.12 / 0.4 = 0.3.',
        },
        {
          prompt: 'Find P(B|A).',
          hint1: 'P(B|A) = P(A and B) / P(A) = 0.12 / 0.3.',
          hint2: '0.4.',
          hint3: '0.4.',
          answer: 0.4, tolerance: 0.005, unit: '',
          explanation: 'P(B|A) = 0.12 / 0.3 = 0.4.',
        },
        {
          prompt: 'Compare P(A|B) with P(A), and P(B|A) with P(B). Are A and B independent?',
          hint1: 'P(A|B) = 0.3 = P(A). P(B|A) = 0.4 = P(B).',
          hint2: 'Conditional probabilities equal unconditional probabilities.',
          hint3: 'A and B are independent.',
          answer: 0.4, tolerance: 0.005, unit: '',
          explanation: 'P(A|B) = P(A) and P(B|A) = P(B). A and B are independent. Also: P(A)xP(B) = 0.12 = P(A and B). Confirmed.',
          displayAnswer: 'Independent: P(A|B) = P(A) and P(B|A) = P(B)',
        },
      ],
      workedExample: {
        question: 'P(X) = 0.5, P(Y) = 0.4, P(X and Y) = 0.25. Find P(X|Y) and determine independence.',
        steps: [
          'P(X|Y) = 0.25/0.4 = 0.625.',
          'P(X|Y) = 0.625 but P(X) = 0.5. Not equal, so <strong>not independent</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(A|B) = 0.3, P(B|A) = 0.4; A and B are independent',
        grade6: 'P(A|B) = 0.3 = P(A). P(B|A) = 0.4 = P(B). Knowing one event gives no information about the other — independent.',
        grade8: 'P(A|B) = P(A) = 0.3 and P(B|A) = P(B) = 0.4. Also P(A)P(B) = 0.12 = P(A and B). All criteria confirm independence.',
      },
      examinerTip: "Students check P(A)xP(B) = 0.12 = P(A and B) and stop there. For full marks, also compute P(A|B) and P(B|A) and compare them with P(A) and P(B) to demonstrate independence from both directions.",
      auditStatus: 'pending',
    },
    // cond-B06
    {
      id: 'cond-B06', subtopic: 'prob-conditional', band: 'B', marks: 3,
      question: 'A factory produces items, 5% of which are defective. Items go through two quality checks: check 1 catches 80% of defective items; check 2 (on those that pass check 1) catches 90% of remaining defective items. Find P(a defective item passes both checks undetected).',
      steps: [
        {
          prompt: 'P(item is defective) = 0.05. Find P(defective AND passes check 1).',
          hint1: 'P(passes check 1 | defective) = 1 - 0.8 = 0.2.',
          hint2: 'P(defective and passes check 1) = 0.05 x 0.2.',
          hint3: '0.01.',
          answer: 0.01, tolerance: 0.005, unit: '',
          explanation: 'P(defective and passes check 1) = 0.05 x 0.2 = 0.01.',
        },
        {
          prompt: 'Of defective items that pass check 1, find P(also passes check 2).',
          hint1: 'Check 2 catches 90% of remaining defective items.',
          hint2: 'P(passes check 2 | defective and passed check 1) = 1 - 0.9 = 0.1.',
          hint3: '0.1.',
          answer: 0.1, tolerance: 0.005, unit: '',
          explanation: 'P(passes check 2 | defective and passed check 1) = 0.1.',
        },
        {
          prompt: 'Find P(defective AND passes both checks).',
          hint1: 'Multiply: P(defective) x P(pass check 1|defective) x P(pass check 2|defective, pass check 1).',
          hint2: '0.05 x 0.2 x 0.1.',
          hint3: '0.001.',
          answer: 0.001, tolerance: 0.0005, unit: '',
          explanation: 'P(passes both checks undetected) = 0.05 x 0.2 x 0.1 = 0.001.',
        },
      ],
      workedExample: {
        question: 'P(defective) = 0.08. Check 1 catches 70%, check 2 catches 80% of the rest. Find P(defective passes both).',
        steps: [
          'P(pass check 1 | defect) = 0.3. P(pass check 2 | defect, passed check 1) = 0.2.',
          'P(passes both) = 0.08 x 0.3 x 0.2 = <strong>0.0048</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P = 0.001',
        grade6: 'P = 0.05 x 0.2 x 0.1 = 0.001.',
        grade8: 'P(defective) = 0.05. P(pass 1|defective) = 0.2. P(pass 2|defective, pass 1) = 0.1. P = 0.001.',
      },
      examinerTip: 'Students multiply P(defective) x P(catch in check 1) x P(catch in check 2) = 0.05 x 0.8 x 0.9 = 0.036. This gives P(being caught, not P(slipping through). Use the complement catch probabilities: 0.2 and 0.1.',
      auditStatus: 'pending',
    },
    // cond-C01
    {
      id: 'cond-C01', subtopic: 'prob-conditional', band: 'C', marks: 4,
      question: 'P(A) = 0.3, P(B|A) = 0.7 and P(B|A\') = 0.2. Use Bayes\' theorem to find P(A|B).',
      steps: [
        {
          prompt: "Find P(A') and use total probability to find P(B).",
          hint1: "P(A') = 0.7. P(B) = P(B|A)P(A) + P(B|A')P(A').",
          hint2: '0.7x0.3 + 0.2x0.7 = 0.21 + 0.14.',
          hint3: '0.35.',
          answer: 0.35, tolerance: 0.005, unit: '',
          explanation: 'P(B) = 0.21 + 0.14 = 0.35.',
        },
        {
          prompt: 'Find P(A and B).',
          hint1: 'P(A and B) = P(B|A) x P(A) = 0.7 x 0.3.',
          hint2: '0.21.',
          hint3: '0.21.',
          answer: 0.21, tolerance: 0.005, unit: '',
          explanation: 'P(A and B) = 0.7 x 0.3 = 0.21.',
        },
        {
          prompt: 'Apply Bayes theorem: P(A|B) = P(A and B) / P(B).',
          hint1: '0.21 / 0.35.',
          hint2: '0.6.',
          hint3: '0.6.',
          answer: 0.6, tolerance: 0.005, unit: '',
          explanation: 'P(A|B) = 0.21 / 0.35 = 0.6.',
        },
        {
          prompt: 'Interpret: P(A) = 0.3 but P(A|B) = 0.6. What does this tell you about A and B?',
          hint1: 'Knowing B occurred doubled the probability of A.',
          hint2: 'B is evidence for A.',
          hint3: 'A and B are not independent — knowing B has occurred makes A more likely.',
          answer: 0.6, tolerance: 0.005, unit: '',
          explanation: 'P(A|B) = 0.6, which is double P(A) = 0.3. Knowing B occurred makes A much more likely. A and B are dependent.',
          displayAnswer: 'P(A|B) = 0.6 — B is strong evidence for A',
        },
      ],
      workedExample: {
        question: "P(C) = 0.4, P(D|C) = 0.8, P(D|C') = 0.3. Find P(C|D).",
        steps: [
          "P(D) = 0.8x0.4 + 0.3x0.6 = 0.32+0.18 = 0.50.",
          'P(C|D) = 0.32/0.50 = <strong>0.64</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(A|B) = 0.6',
        grade6: 'P(B) = 0.35. P(A and B) = 0.21. P(A|B) = 0.21/0.35 = 0.6.',
        grade8: "Bayes: P(A|B) = P(B|A)P(A)/P(B) = (0.7x0.3)/0.35 = 0.6. P(A|B) >> P(A), so B is strong evidence for A.",
      },
      examinerTip: "Students write P(A|B) = P(B|A) = 0.7, confusing the conditional probabilities. P(B|A) = 0.7 means 'given A, B is likely'. P(A|B) asks the reverse and requires Bayes theorem.",
      auditStatus: 'pending',
    },
    // cond-C02
    {
      id: 'cond-C02', subtopic: 'prob-conditional', band: 'C', marks: 4,
      question: 'Events A, B, C satisfy: P(A) = 0.5, P(B) = 0.4, P(C) = 0.3, P(A and B) = 0.2, P(A and C) = 0.1, P(B and C) = 0.15, P(A and B and C) = 0.05. Find P(A | B and C).',
      steps: [
        {
          prompt: 'Find P(B and C) from the given information.',
          hint1: 'P(B and C) = 0.15 (given directly).',
          hint2: '0.15.',
          hint3: '0.15.',
          answer: 0.15, tolerance: 0.005, unit: '',
          explanation: 'P(B and C) = 0.15 is given.',
        },
        {
          prompt: 'Find P(A and B and C).',
          hint1: 'P(A and B and C) = 0.05 (given directly).',
          hint2: '0.05.',
          hint3: '0.05.',
          answer: 0.05, tolerance: 0.005, unit: '',
          explanation: 'P(A and B and C) = 0.05 is given.',
        },
        {
          prompt: 'Apply conditional probability: P(A | B and C) = P(A and B and C) / P(B and C).',
          hint1: '0.05 / 0.15.',
          hint2: '1/3.',
          hint3: '1/3.',
          answer: 0.3333, tolerance: 0.005, unit: '',
          explanation: 'P(A | B and C) = 0.05 / 0.15 = 1/3.',
          displayAnswer: '1/3',
        },
        {
          prompt: 'Compare P(A | B and C) = 1/3 with P(A) = 0.5. Is A independent of the event (B and C)?',
          hint1: '1/3 does not equal 0.5.',
          hint2: 'Knowing B and C have both occurred changes the probability of A.',
          hint3: 'A is NOT independent of the event (B and C).',
          answer: 0.3333, tolerance: 0.005, unit: '',
          explanation: 'P(A | B and C) = 1/3, but P(A) = 0.5. They differ, so A is not independent of (B and C).',
          displayAnswer: 'Not independent: 1/3 not equal to P(A) = 0.5',
        },
      ],
      workedExample: {
        question: 'P(X and Y) = 0.12, P(X and Y and Z) = 0.04. Find P(Z | X and Y).',
        steps: [
          'P(Z | X and Y) = P(X and Y and Z) / P(X and Y).',
          '= 0.04 / 0.12 = <strong>1/3</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(A | B and C) = 1/3',
        grade6: 'P(A|BC) = P(ABC)/P(BC) = 0.05/0.15 = 1/3.',
        grade8: 'P(A|B and C) = P(A and B and C)/P(B and C) = 0.05/0.15 = 1/3. Since 1/3 not equal P(A)=0.5, A is dependent on (B and C).',
      },
      examinerTip: 'Students are unsure how to condition on two events simultaneously. The formula extends naturally: P(A | B and C) = P(A and B and C) / P(B and C). Identify the numerator and denominator carefully.',
      auditStatus: 'pending',
    },
    // cond-C03
    {
      id: 'cond-C03', subtopic: 'prob-conditional', band: 'C', marks: 4,
      question: 'A bag contains 2 red and 3 blue balls. Two balls are drawn without replacement. Show that P(R1 and R2) = 1/10. Hence find P(R1 | R2), i.e. given the second ball is red, find P(the first was also red).',
      steps: [
        {
          prompt: 'Find P(R1 and R2) using the multiplication rule.',
          hint1: 'P(R1) = 2/5. P(R2 | R1) = 1/4 (after removing a red: 1 red, 3 blue, 4 total).',
          hint2: 'P(R1 and R2) = (2/5) x (1/4) = 2/20 = 1/10.',
          hint3: '1/10.',
          answer: 0.1, tolerance: 0.005, unit: '',
          explanation: 'P(R1 and R2) = (2/5) x (1/4) = 1/10. Confirmed.',
          displayAnswer: '1/10',
        },
        {
          prompt: 'Find P(R2) using total probability. Consider both routes: RR and BR.',
          hint1: 'P(R2 via RR) = 1/10 (found above).',
          hint2: 'P(B1) = 3/5. P(R2|B1) = 2/4 = 1/2. P(R2 via BR) = 3/5 x 1/2 = 3/10.',
          hint3: 'P(R2) = 1/10 + 3/10 = 4/10 = 2/5.',
          answer: 0.4, tolerance: 0.005, unit: '',
          explanation: 'P(R2) = 1/10 + 3/10 = 4/10 = 2/5.',
          displayAnswer: '2/5',
        },
        {
          prompt: 'Apply Bayes: P(R1|R2) = P(R1 and R2) / P(R2).',
          hint1: '(1/10) / (2/5).',
          hint2: '(1/10) x (5/2) = 5/20 = 1/4.',
          hint3: '1/4.',
          answer: 0.25, tolerance: 0.005, unit: '',
          explanation: 'P(R1|R2) = (1/10) / (2/5) = 1/4.',
          displayAnswer: '1/4',
        },
        {
          prompt: 'Interpret: P(R1|R2) = 1/4 but P(R1) = 2/5. What does this tell you?',
          hint1: 'Knowing the second ball is red makes it less likely the first was red.',
          hint2: 'If the first was red, fewer reds are available for the second draw.',
          hint3: 'The draws are dependent: the second draw carries information about the first.',
          answer: 0.25, tolerance: 0.005, unit: '',
          explanation: 'P(R1|R2) = 1/4 < P(R1) = 2/5. Knowing the second is red suggests the first may have been blue (keeping more reds available). The draws are dependent.',
          displayAnswer: 'P(R1|R2) = 1/4 < P(R1) = 2/5 — draws are dependent',
        },
      ],
      workedExample: {
        question: 'Bag: 3 red, 3 blue. Draw 2 without replacement. Show P(R1 and R2) = 1/5. Find P(R1|R2).',
        steps: [
          'P(R1)=3/6=1/2. P(R2|R1)=2/5. P(R1 and R2)=1/2x2/5=1/5. Confirmed.',
          'P(R2) via BR: 3/6x3/5=9/30=3/10. P(R2)=1/5+3/10=2/10+3/10=1/2. P(R1|R2)=(1/5)/(1/2)=2/5.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(R1 and R2) = 1/10; P(R1|R2) = 1/4',
        grade6: 'P(R1 and R2) = 2/5 x 1/4 = 1/10 confirmed. P(R2) = 2/5. P(R1|R2) = (1/10)/(2/5) = 1/4.',
        grade8: 'P(R1R2) = 1/10 (multiplication rule). P(R2) = 2/5 (total probability). P(R1|R2) = 1/4 (Bayes). Since P(R1|R2) = 1/4 < P(R1) = 2/5, the draws are negatively correlated.',
      },
      examinerTip: "Students find P(R2|R1) = 1/4 from the tree and call it P(R1|R2). The question explicitly asks for the reverse conditional. Note that P(R2|R1) = 1/4 happens to equal P(R1|R2) = 1/4 here, but this is a coincidence — always use Bayes.",
      auditStatus: 'pending',
    },
    // cond-C04
    {
      id: 'cond-C04', subtopic: 'prob-conditional', band: 'C', marks: 4,
      question: 'A factory has two machines. Machine A produces 60% of items, machine B produces 40%. P(defective | machine A) = 0.02 and P(defective | machine B) = 0.05. A randomly chosen item is found to be defective. Find P(it came from machine A | defective).',
      steps: [
        {
          prompt: 'Find P(defective) using the law of total probability.',
          hint1: 'P(defective) = P(defective|A)P(A) + P(defective|B)P(B).',
          hint2: '0.02x0.6 + 0.05x0.4 = 0.012 + 0.020.',
          hint3: '0.032.',
          answer: 0.032, tolerance: 0.005, unit: '',
          explanation: 'P(defective) = 0.012 + 0.020 = 0.032.',
        },
        {
          prompt: 'Find P(machine A and defective).',
          hint1: 'P(A and defective) = P(defective|A) x P(A).',
          hint2: '0.02 x 0.6.',
          hint3: '0.012.',
          answer: 0.012, tolerance: 0.001, unit: '',
          explanation: 'P(A and defective) = 0.02 x 0.6 = 0.012.',
        },
        {
          prompt: 'Apply Bayes theorem: P(A | defective) = P(A and defective) / P(defective).',
          hint1: '0.012 / 0.032.',
          hint2: '3/8.',
          hint3: '0.375.',
          answer: 0.375, tolerance: 0.005, unit: '',
          explanation: 'P(A | defective) = 0.012 / 0.032 = 3/8 = 0.375.',
          displayAnswer: '3/8 = 0.375',
        },
        {
          prompt: 'Interpret: machine A produces 60% of items but only 37.5% of defectives. What does this tell you?',
          hint1: 'Machine A has a lower defect rate (2%) than machine B (5%).',
          hint2: 'Despite producing more items, machine A contributes fewer defectives proportionally.',
          hint3: 'Machine B is more likely responsible for a defective item despite producing fewer items.',
          answer: 0.375, tolerance: 0.005, unit: '',
          explanation: 'P(A | defective) = 0.375 < P(A) = 0.6. Machine A produces more items but at a lower defect rate, so a defective item is more likely to have come from machine B.',
          displayAnswer: 'Machine A: P = 0.375; Machine B: P = 0.625',
        },
      ],
      workedExample: {
        question: 'Machine X: 70% of output, P(defective) = 0.03. Machine Y: 30%, P(defective) = 0.06. A defective is found. Find P(from X | defective).',
        steps: [
          'P(defective) = 0.03x0.7 + 0.06x0.3 = 0.021+0.018 = 0.039.',
          'P(X|defective) = 0.021/0.039 = <strong>7/13 approx 0.538</strong>.',
        ],
      },
      sampleAnswer: {
        grade4: 'P(from A | defective) = 0.375',
        grade6: 'P(defective) = 0.032. P(A and defective) = 0.012. P(A|defective) = 0.012/0.032 = 0.375.',
        grade8: 'Total prob: P(defective) = 0.032. Bayes: P(A|defective) = 0.012/0.032 = 3/8. P(B|defective) = 0.020/0.032 = 5/8. Machine B accounts for 62.5% of defectives despite producing only 40% of output.',
      },
      examinerTip: 'Students answer P(A) = 0.6 without applying Bayes, confusing the prior probability of coming from machine A with the posterior probability given a defect was found. The defect changes the picture because machine B has a higher defect rate.',
      auditStatus: 'pending',
    },
"""

content = content[:pos] + NEW + content[pos:]

# ── 2. Update M5 array to include prob-conditional ────────────────────────────
OLD_M5 = "M5: ['prob-basic','prob-combined','prob-tree-diagrams','prob-venn'],"
NEW_M5 = "M5: ['prob-basic','prob-combined','prob-tree-diagrams','prob-venn','prob-conditional'],"

if OLD_M5 in content:
    content = content.replace(OLD_M5, NEW_M5)
    print("M5 array updated to include prob-conditional.")
else:
    print("WARNING: M5 array pattern not found — check manually!")

with open('js/maths-questions.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done - prob_q5 (15 conditional probability questions: 5A, 6B, 4C)")
