import re

with open('js/maths-questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

MARKER = "\n\n    // ══════════════════════════════════════════════════════════\n    // CIRCLE THEOREMS"

pos = content.find(MARKER)
print(f"Inserting at char {pos}")
assert pos != -1, "Marker not found!"

NEW = r"""
    // trig-A03
    {
      id: 'trig-A03', topic: 'geo-trigonometry', band: 'A', marks: 2,
      question: 'In a right-angled triangle, the opposite side is 6 cm and the hypotenuse is 10 cm. Find angle x.',
      workedExample: {
        question: 'In a right-angled triangle, the opposite side is 9 cm and the hypotenuse is 15 cm. Find angle x.',
        steps: [
          { explanation: 'Identify the ratio: sin x = opposite/hypotenuse = 9/15 = 0.6' },
          { explanation: 'x = sin⁻¹(0.6) = 36.87°' }
        ]
      },
      steps: [
        { prompt: 'Write sin x = opposite/hypotenuse. What fraction do you get?', hint1: 'opposite = 6, hypotenuse = 10', hint2: 'sin x = 6/10 = 0.6', hint3: 'sin x = 0.6', answer: '0.6', tolerance: 0.005, explanation: 'sin x = 6/10 = 0.6' },
        { prompt: 'Use sin⁻¹ to find angle x. Give your answer in degrees to 2 d.p.', hint1: 'x = sin⁻¹(0.6)', hint2: 'Use your calculator: sin⁻¹(0.6)', hint3: '36.87', answer: '36.87', tolerance: 0.005, unit: '°', explanation: 'x = sin⁻¹(0.6) = 36.87°' }
      ]
    },
    // trig-A04
    {
      id: 'trig-A04', topic: 'geo-trigonometry', band: 'A', marks: 2,
      question: 'In a right-angled triangle, the adjacent side is 5 cm and the hypotenuse is 13 cm. Find angle x to 2 d.p.',
      workedExample: {
        question: 'In a right-angled triangle, the adjacent side is 8 cm and the hypotenuse is 17 cm. Find angle x to 2 d.p.',
        steps: [
          { explanation: 'cos x = adjacent/hypotenuse = 8/17 ≈ 0.4706' },
          { explanation: 'x = cos⁻¹(0.4706) = 61.93°' }
        ]
      },
      steps: [
        { prompt: 'Write cos x = adjacent/hypotenuse. What decimal do you get?', hint1: 'adjacent = 5, hypotenuse = 13', hint2: 'cos x = 5/13', hint3: '0.3846', answer: '0.3846', tolerance: 0.005, explanation: 'cos x = 5/13 ≈ 0.3846' },
        { prompt: 'Use cos⁻¹ to find x in degrees to 2 d.p.', hint1: 'x = cos⁻¹(5/13)', hint2: 'Use your calculator', hint3: '67.38', answer: '67.38', tolerance: 0.005, unit: '°', explanation: 'x = cos⁻¹(5/13) ≈ 67.38°' }
      ]
    },
    // trig-A05
    {
      id: 'trig-A05', topic: 'geo-trigonometry', band: 'A', marks: 2,
      question: 'A right-angled triangle has an angle of 40° and an adjacent side of 7 cm. Find the opposite side to 2 d.p.',
      workedExample: {
        question: 'A right-angled triangle has an angle of 55° and an adjacent side of 4 cm. Find the opposite side to 2 d.p.',
        steps: [
          { explanation: 'tan 55° = opposite/adjacent, so opposite = 4 × tan 55°' },
          { explanation: 'opposite = 4 × 1.4281 = 5.71 cm' }
        ]
      },
      steps: [
        { prompt: 'Which trig ratio links opposite and adjacent? Write the formula for the opposite side.', hint1: 'tan 40° = opposite/adjacent', hint2: 'opposite = adjacent × tan 40°', hint3: 'opposite = 7 × tan 40°', answer: '5.88', tolerance: 0.005, unit: 'cm', explanation: 'tan 40° = opp/adj, so opp = 7 × tan 40° = 7 × 0.8391 ≈ 5.87 cm' },
        { prompt: 'Calculate 7 × tan 40° to 2 d.p.', hint1: 'tan 40° ≈ 0.8391', hint2: '7 × 0.8391 = 5.8737', hint3: '5.87', answer: '5.87', tolerance: 0.005, unit: 'cm', explanation: '7 × tan 40° ≈ 5.87 cm' }
      ]
    },
    // trig-B02
    {
      id: 'trig-B02', topic: 'geo-trigonometry', band: 'B', marks: 3,
      question: 'A ladder leans against a wall. The ladder is 6 m long and makes an angle of 72° with the ground. How high up the wall does it reach? Give your answer to 2 d.p.',
      workedExample: {
        question: 'A ladder is 8 m long and makes an angle of 65° with the ground. How high up the wall does it reach? Give your answer to 2 d.p.',
        steps: [
          { explanation: 'The height is the opposite side; hypotenuse = 8 m; angle = 65°' },
          { explanation: 'sin 65° = height/8, so height = 8 × sin 65°' },
          { explanation: 'height = 8 × 0.9063 = 7.25 m' }
        ]
      },
      steps: [
        { prompt: 'Draw a diagram. Label the ladder (hypotenuse = 6 m) and the angle with the ground (72°). Which side is the height?', hint1: 'The height up the wall is the opposite side', hint2: 'sin 72° = height/6', hint3: 'height = 6 × sin 72°', answer: '6', tolerance: 0.5, explanation: 'sin 72° = opposite/hypotenuse; height = 6 × sin 72°' },
        { prompt: 'Write the equation: sin 72° = height/6. Rearrange for height.', hint1: 'Multiply both sides by 6', hint2: 'height = 6 × sin 72°', hint3: '6 × 0.9511', answer: '5.71', tolerance: 0.005, unit: 'm', explanation: 'height = 6 × sin 72° = 6 × 0.9511 = 5.71 m' },
        { prompt: 'Calculate 6 × sin 72° to 2 d.p.', hint1: 'sin 72° ≈ 0.9511', hint2: '6 × 0.9511 = 5.7063', hint3: '5.71', answer: '5.71', tolerance: 0.005, unit: 'm', explanation: 'Height = 5.71 m' }
      ]
    },
    // trig-B03
    {
      id: 'trig-B03', topic: 'geo-trigonometry', band: 'B', marks: 3,
      question: 'From a point 20 m from the base of a building, the angle of elevation to the top is 38°. Find the height of the building to 2 d.p.',
      workedExample: {
        question: 'From a point 15 m from a tower, the angle of elevation to the top is 52°. Find the height of the tower to 2 d.p.',
        steps: [
          { explanation: 'The 15 m is adjacent; height is opposite; angle = 52°' },
          { explanation: 'tan 52° = height/15' },
          { explanation: 'height = 15 × tan 52° = 15 × 1.2799 = 19.20 m' }
        ]
      },
      steps: [
        { prompt: 'In this right-angled triangle, which sides are known and unknown? Write the trig ratio.', hint1: 'adjacent = 20 m (horizontal distance), opposite = height (unknown)', hint2: 'tan 38° = height/20', hint3: 'height = 20 × tan 38°', answer: '20', tolerance: 1, explanation: 'tan θ = opp/adj; tan 38° = height/20' },
        { prompt: 'Rearrange tan 38° = height/20 to find height.', hint1: 'Multiply both sides by 20', hint2: 'height = 20 × tan 38°', hint3: '20 × 0.7813', answer: '15.63', tolerance: 0.005, unit: 'm', explanation: 'height = 20 × tan 38°' },
        { prompt: 'Calculate 20 × tan 38° to 2 d.p.', hint1: 'tan 38° ≈ 0.7813', hint2: '20 × 0.7813 = 15.626', hint3: '15.63', answer: '15.63', tolerance: 0.005, unit: 'm', explanation: 'Height of building = 15.63 m' }
      ]
    },
    // trig-B04
    {
      id: 'trig-B04', topic: 'geo-trigonometry', band: 'B', marks: 3,
      question: 'Triangle PQR has a right angle at R. PQ = 11 cm and PR = 7 cm. Find angle P to 2 d.p.',
      workedExample: {
        question: 'Triangle ABC has a right angle at C. AB = 13 cm and AC = 5 cm. Find angle A to 2 d.p.',
        steps: [
          { explanation: 'From angle A: adjacent = AC = 5, hypotenuse = AB = 13' },
          { explanation: 'cos A = 5/13 ≈ 0.3846' },
          { explanation: 'A = cos⁻¹(0.3846) = 67.38°' }
        ]
      },
      steps: [
        { prompt: 'From angle P: which sides are PQ and PR? Identify adjacent and hypotenuse.', hint1: 'PQ is the hypotenuse (opposite the right angle)', hint2: 'PR is the adjacent side (next to angle P)', hint3: 'cos P = PR/PQ = 7/11', answer: '7', tolerance: 0.5, explanation: 'From angle P: adjacent = PR = 7, hypotenuse = PQ = 11; cos P = 7/11' },
        { prompt: 'Write cos P = 7/11. What decimal is this?', hint1: '7 ÷ 11 = 0.6364', hint2: 'cos P ≈ 0.6364', hint3: '0.6364', answer: '0.6364', tolerance: 0.005, explanation: 'cos P = 7/11 ≈ 0.6364' },
        { prompt: 'Use cos⁻¹ to find angle P in degrees to 2 d.p.', hint1: 'P = cos⁻¹(7/11)', hint2: 'Use your calculator', hint3: '50.48', answer: '50.48', tolerance: 0.005, unit: '°', explanation: 'P = cos⁻¹(7/11) ≈ 50.48°' }
      ]
    },
    // trig-B05
    {
      id: 'trig-B05', topic: 'geo-trigonometry', band: 'B', marks: 3,
      question: 'A ship sails 12 km on a bearing of 035°. How far north and how far east has it travelled? Give answers to 2 d.p.',
      workedExample: {
        question: 'A plane flies 20 km on a bearing of 050°. How far north and how far east has it travelled? Give answers to 2 d.p.',
        steps: [
          { explanation: 'North component: 20 × cos 50° = 20 × 0.6428 = 12.86 km' },
          { explanation: 'East component: 20 × sin 50° = 20 × 0.7660 = 15.32 km' },
          { explanation: 'North = 12.86 km, East = 15.32 km' }
        ]
      },
      steps: [
        { prompt: 'A bearing of 035° means 35° clockwise from north. Which trig function gives the north component?', hint1: 'The angle is 35° from north', hint2: 'North component = 12 × cos 35°', hint3: '12 × 0.8192', answer: '9.83', tolerance: 0.005, unit: 'km', explanation: 'North = 12 × cos 35° = 12 × 0.8192 = 9.83 km' },
        { prompt: 'Which trig function gives the east component? Calculate it to 2 d.p.', hint1: 'East component = 12 × sin 35°', hint2: 'sin 35° ≈ 0.5736', hint3: '6.88', answer: '6.88', tolerance: 0.005, unit: 'km', explanation: 'East = 12 × sin 35° = 12 × 0.5736 = 6.88 km' },
        { prompt: 'State both components: North = ? km, East = ? km', hint1: 'North = 9.83 km', hint2: 'East = 6.88 km', hint3: 'North 9.83 km, East 6.88 km', answer: '9.83', tolerance: 0.005, unit: 'km north', explanation: 'North = 9.83 km, East = 6.88 km' }
      ]
    },
    // trig-B06
    {
      id: 'trig-B06', topic: 'geo-trigonometry', band: 'B', marks: 3,
      question: 'In triangle ABC, angle B = 90°, AB = 9 cm, BC = 12 cm. Find the length AC and angle A to 2 d.p.',
      workedExample: {
        question: 'In triangle PQR, angle Q = 90°, PQ = 5 cm, QR = 12 cm. Find PR and angle P to 2 d.p.',
        steps: [
          { explanation: 'PR² = PQ² + QR² = 25 + 144 = 169, so PR = 13 cm' },
          { explanation: 'tan P = QR/PQ = 12/5 = 2.4' },
          { explanation: 'angle P = tan⁻¹(2.4) = 67.38°' }
        ]
      },
      steps: [
        { prompt: 'Use Pythagoras to find AC. AC² = AB² + BC². Calculate AC.', hint1: 'AC² = 9² + 12² = 81 + 144 = 225', hint2: 'AC = √225', hint3: '15', answer: '15', tolerance: 0.005, unit: 'cm', explanation: 'AC = √(81 + 144) = √225 = 15 cm' },
        { prompt: 'Now find angle A. From angle A, BC is opposite and AB is adjacent. Write the trig ratio.', hint1: 'tan A = BC/AB = 12/9', hint2: 'tan A = 1.3333', hint3: '1.3333', answer: '1.3333', tolerance: 0.005, explanation: 'tan A = 12/9 = 1.3333' },
        { prompt: 'Use tan⁻¹ to find angle A in degrees to 2 d.p.', hint1: 'A = tan⁻¹(12/9)', hint2: 'Use your calculator', hint3: '53.13', answer: '53.13', tolerance: 0.005, unit: '°', explanation: 'angle A = tan⁻¹(12/9) = 53.13°' }
      ]
    },
    // trig-C01
    {
      id: 'trig-C01', topic: 'geo-trigonometry', band: 'C', marks: 4,
      question: 'A vertical flagpole stands on horizontal ground. From point A, the angle of elevation to the top is 30°. From point B, 10 m closer, the angle of elevation is 45°. Find the height of the flagpole to 2 d.p.',
      workedExample: {
        question: 'A tower is observed from two points. From A, elevation = 25°. From B, 8 m closer, elevation = 40°. Find the tower height to 2 d.p.',
        steps: [
          { explanation: 'Let height = h, distance from B = d. Then tan 40° = h/d and tan 25° = h/(d+8)' },
          { explanation: 'From eq 1: d = h/tan 40°. Substitute: h/tan 25° = h/tan 40° + 8' },
          { explanation: 'h(1/tan 25° − 1/tan 40°) = 8; h(2.1445 − 1.1918) = 8; 0.9527h = 8' },
          { explanation: 'h = 8/0.9527 = 8.40 m' }
        ]
      },
      steps: [
        { prompt: 'Let the height of the flagpole = h. Let the distance from B to the base = d. Write two equations using tan.', hint1: 'tan 45° = h/d → d = h/tan 45° = h', hint2: 'tan 30° = h/(d + 10)', hint3: 'So tan 30° = h/(h + 10)', answer: 'h/(h+10)', checkType: 'skip', displayAnswer: 'tan 30° = h/(h+10)', explanation: 'From A: tan 30° = h/(d+10); from B: tan 45° = h/d, so d = h' },
        { prompt: 'Since tan 45° = 1, d = h. Substitute into the second equation and solve for h.', hint1: 'tan 30° = h/(h + 10)', hint2: 'h × tan 30° + 10 × tan 30° = h ... wait, cross-multiply: h = (h+10) × tan 30°', hint3: 'h(1 − tan 30°) = 10 tan 30°', answer: 'h(1-tan30)', checkType: 'skip', displayAnswer: 'h − h·tan30° = 10·tan30°', explanation: 'h = (h+10) × tan 30° → h − h·tan 30° = 10·tan 30°' },
        { prompt: 'Rearrange to find h: h(1 − tan 30°) = 10 tan 30°. Calculate h.', hint1: 'tan 30° = 0.5774', hint2: 'h × 0.4226 = 5.774', hint3: 'h = 5.774/0.4226', answer: '13.66', tolerance: 0.005, unit: 'm', explanation: 'h = 10 × 0.5774/(1 − 0.5774) = 5.774/0.4226 = 13.66 m' },
        { prompt: 'State the height of the flagpole to 2 d.p.', hint1: 'Divide 5.774 by 0.4226', hint2: '13.66 m', hint3: '13.66', answer: '13.66', tolerance: 0.005, unit: 'm', explanation: 'The flagpole is 13.66 m tall' }
      ]
    },
    // trig-C02
    {
      id: 'trig-C02', topic: 'geo-trigonometry', band: 'C', marks: 4,
      question: 'In triangle ABC, AB = 10 cm, BC = 7 cm, angle ABC = 90°. Point D lies on AB such that CD bisects angle ACB. Find the length AD to 2 d.p.',
      workedExample: {
        question: 'In right-angled triangle PQR (right angle Q), PQ = 8 cm, QR = 6 cm. Point S on PQ such that RS bisects angle PRQ. Find PS to 2 d.p.',
        steps: [
          { explanation: 'PR = √(64+36) = 10 cm; tan(PRQ) = PQ/QR = 8/6, angle PRQ = 53.13°' },
          { explanation: 'RS bisects angle PRQ, so angle PRS = 26.565°' },
          { explanation: 'In triangle PRS: tan(26.565°) = PS/PR → PS = 10 × tan(26.565°) ... but use angle bisector theorem instead' },
          { explanation: 'Angle bisector: PS/SR = PR/QR = 10/6; SR = QR - ... use PS/QS = PR/QR with QS = QR = 6, PS/6 = 10/6, so this needs full setup. PS = PQ × PR/(PR+QR) = 8×10/16 = 5 cm' }
        ]
      },
      steps: [
        { prompt: 'Find AC using Pythagoras. AB = 10, BC = 7, right angle at B.', hint1: 'AC² = AB² + BC² = 100 + 49 = 149', hint2: 'AC = √149', hint3: '12.21', answer: '12.21', tolerance: 0.005, unit: 'cm', explanation: 'AC = √(100+49) = √149 ≈ 12.21 cm' },
        { prompt: 'Find angle ACB. From C, BC = 7 (adjacent) and AC ≈ 12.21 (hypotenuse). Find angle ACB.', hint1: 'cos(ACB) = BC/AC = 7/12.21 ≈ 0.5733', hint2: 'angle ACB = cos⁻¹(0.5733)', hint3: '55.01', answer: '55.01', tolerance: 0.005, unit: '°', explanation: 'cos(ACB) = 7/√149; angle ACB ≈ 55.01°' },
        { prompt: 'CD bisects angle ACB, so angle ACD = 55.01°/2 ≈ 27.5°. In triangle ACD, angle A = 90° (same right angle). Find AD using tan.', hint1: 'In triangle ACD: angle DAC = 90°, angle ACD = 27.5°, AC = 12.21 cm', hint2: 'tan(27.5°) = AD/AC', hint3: 'AD = 12.21 × tan(27.5°)', answer: '6.35', tolerance: 0.005, unit: 'cm', explanation: 'tan(27.5°) = AD/AC; AD = 12.21 × tan(27.5°) ≈ 12.21 × 0.5206 ≈ 6.36 cm' },
        { prompt: 'Calculate AD = AC × tan(27.5°) to 2 d.p.', hint1: 'tan(27.5°) ≈ 0.5206', hint2: '12.21 × 0.5206 ≈ 6.36', hint3: '6.36', answer: '6.36', tolerance: 0.01, unit: 'cm', explanation: 'AD ≈ 6.36 cm' }
      ]
    },
    // trig-C03
    {
      id: 'trig-C03', topic: 'geo-trigonometry', band: 'C', marks: 4,
      question: 'A surveyor at point X measures the angles of elevation to the top T of a cliff from two positions: from X the angle is 20°, and from Y (50 m closer along the same horizontal) the angle is 35°. Calculate the height of the cliff to 2 d.p.',
      workedExample: {
        question: 'From point P, angle of elevation to cliff top = 18°. From Q, 40 m closer, angle = 32°. Find cliff height to 2 d.p.',
        steps: [
          { explanation: 'Let h = height, d = distance from Q to cliff base' },
          { explanation: 'tan 32° = h/d and tan 18° = h/(d+40)' },
          { explanation: 'h = d·tan 32°; d+40 = h/tan 18° = d·tan 32°/tan 18°' },
          { explanation: 'd(tan 32°/tan 18° − 1) = 40; d = 40/(1.8939 − 1) = 44.77 m; h = 44.77 × 0.6249 = 27.98 m' }
        ]
      },
      steps: [
        { prompt: 'Let h = height of cliff, d = distance from Y to cliff base. Write equations for tan 35° and tan 20°.', hint1: 'tan 35° = h/d and tan 20° = h/(d+50)', hint2: 'So h = d·tan 35°', hint3: 'And h/(d+50) = tan 20°', answer: 'h=d·tan35', checkType: 'skip', displayAnswer: 'h = d·tan35°; h/(d+50) = tan20°', explanation: 'Two equations from the two observation points' },
        { prompt: 'Substitute h = d·tan 35° into tan 20° = h/(d+50) and rearrange to find d.', hint1: 'tan 20° = d·tan 35°/(d+50)', hint2: 'd·tan 20° + 50·tan 20° = d·tan 35°', hint3: '50·tan 20° = d(tan 35° − tan 20°)', answer: '50tan20', checkType: 'skip', displayAnswer: '50·tan20° = d(tan35° − tan20°)', explanation: 'Rearranging gives d(tan 35° − tan 20°) = 50 tan 20°' },
        { prompt: 'Calculate d = 50·tan 20°/(tan 35° − tan 20°). Give your answer to 2 d.p.', hint1: 'tan 20° = 0.3640, tan 35° = 0.7002', hint2: '50 × 0.3640/(0.7002 − 0.3640)', hint3: '18.2/0.3362 = 54.14', answer: '54.14', tolerance: 0.005, unit: 'm', explanation: 'd = 50 × 0.3640/0.3362 = 54.14 m' },
        { prompt: 'Find height h = d × tan 35° to 2 d.p.', hint1: 'h = 54.14 × tan 35°', hint2: '54.14 × 0.7002', hint3: '37.92', answer: '37.92', tolerance: 0.005, unit: 'm', explanation: 'h = 54.14 × 0.7002 = 37.92 m' }
      ]
    },
    // trig-C04
    {
      id: 'trig-C04', topic: 'geo-trigonometry', band: 'C', marks: 4,
      question: 'Triangle XYZ has XY = 8 cm, YZ = 11 cm and angle XYZ = 50°. Using the cosine rule, find XZ to 2 d.p., then use the sine rule to find angle YXZ to 2 d.p.',
      workedExample: {
        question: 'Triangle ABC has AB = 6 cm, BC = 9 cm and angle ABC = 40°. Find AC to 2 d.p., then find angle BAC to 2 d.p.',
        steps: [
          { explanation: 'Cosine rule: AC² = AB² + BC² − 2·AB·BC·cos(ABC) = 36 + 81 − 108·cos 40° = 117 − 82.72 = 34.28; AC = 5.86 cm' },
          { explanation: 'Sine rule: sin(BAC)/BC = sin(ABC)/AC → sin(BAC) = 9·sin 40°/5.86 = 0.9877' },
          { explanation: 'angle BAC = sin⁻¹(0.9877) = 80.87°' }
        ]
      },
      steps: [
        { prompt: 'Apply the cosine rule: XZ² = XY² + YZ² − 2·XY·YZ·cos(XYZ). Substitute values.', hint1: 'XZ² = 8² + 11² − 2×8×11×cos 50°', hint2: 'XZ² = 64 + 121 − 176 × cos 50°', hint3: 'XZ² = 185 − 176 × 0.6428', answer: '72.14', tolerance: 0.05, explanation: 'XZ² = 185 − 176 × 0.6428 = 185 − 113.13 = 71.87; varies slightly with precision' },
        { prompt: 'Calculate XZ² = 185 − 176·cos 50°, then find XZ to 2 d.p.', hint1: '176 × cos 50° = 176 × 0.6428 = 113.13', hint2: 'XZ² = 185 − 113.13 = 71.87', hint3: 'XZ = √71.87 = 8.48', answer: '8.48', tolerance: 0.005, unit: 'cm', explanation: 'XZ = √71.87 ≈ 8.48 cm' },
        { prompt: 'Use the sine rule: sin(YXZ)/YZ = sin(XYZ)/XZ. Rearrange to find sin(YXZ).', hint1: 'sin(YXZ) = YZ × sin(XYZ)/XZ', hint2: 'sin(YXZ) = 11 × sin 50°/8.48', hint3: '11 × 0.7660/8.48 = 0.9937', answer: '0.9937', tolerance: 0.005, explanation: 'sin(YXZ) = 11 × sin 50° / 8.48 ≈ 0.9937' },
        { prompt: 'Find angle YXZ = sin⁻¹(0.9937) to 2 d.p.', hint1: 'Use your calculator: sin⁻¹(0.9937)', hint2: 'Check: is this the correct triangle? (angle sum must be < 180°)', hint3: '83.47', answer: '83.47', tolerance: 0.005, unit: '°', explanation: 'angle YXZ = sin⁻¹(0.9937) ≈ 83.47°' }
      ]
    },
"""

content = content[:pos] + NEW + content[pos:]

with open('js/maths-questions.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done - geo_q6 (12 trigonometry questions)")
