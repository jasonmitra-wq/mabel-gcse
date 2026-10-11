FILE = r'C:\Users\jason\OneDrive\Documents\GitHub\mabel-gcse\js\maths-questions.js'
MARKER = "\n\n    // ══════════════════════════════════════════════════════════\n    // STANDARD FORM"

NEW = """    {
      id: 'rat-A04',
      subtopic: 'rpr-ratio',
      band: 'A',
      marks: 2,
      question: 'Share £96 in the ratio 1:3.',
      steps: [
        {
          prompt: 'How many parts are there in total?',
          hint1: 'Add the two numbers in the ratio together.',
          hint2: '1 + 3 = ?',
          hint3: '4 parts in total.',
          answer: 4,
          tolerance: 0,
          unit: 'parts',
          explanation: '1 + 3 = 4 parts in total.'
        },
        {
          prompt: 'What is one part worth? (£)',
          hint1: 'Divide the total amount by the number of parts.',
          hint2: '96 ÷ 4 = ?',
          hint3: '£24 per part.',
          answer: 24,
          tolerance: 0,
          unit: '£',
          explanation: '£96 ÷ 4 = £24 per part.'
        }
      ],
      workedExample: {
        question: 'Share £60 in the ratio 1:3.',
        steps: [
          'Total parts: 1 + 3 = 4',
          'One part = £60 ÷ 4 = £15',
          'Shares: 1 × £15 = <strong>£15</strong> and 3 × £15 = <strong>£45</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Total parts = 4. One part = £96 ÷ 4 = £24. Shares are £24 and £72.',
        grade6: 'Total parts: 1 + 3 = 4. One part = £96 ÷ 4 = £24. Shares: 1 × £24 = £24 and 3 × £24 = £72.',
        grade8: 'Ratio 1:3 gives 4 parts. Each part = £96 ÷ 4 = £24. The two shares are £24 and £72, which sum to £96 ✓'
      },
      examinerTip: 'Always check your answers add back to the original total.',
      auditStatus: 'pending'
    },
    {
      id: 'rat-A05',
      subtopic: 'rpr-ratio',
      band: 'A',
      marks: 2,
      question: 'Write the ratio 45:60 in its simplest form.',
      steps: [
        {
          prompt: 'What is the highest common factor (HCF) of 45 and 60?',
          hint1: 'List factors of both numbers or think about what divides both evenly.',
          hint2: 'Factors of 45: 1,3,5,9,15,45. Factors of 60: 1,2,3,4,5,6,10,12,15,20,30,60.',
          hint3: 'The HCF is 15.',
          answer: 15,
          tolerance: 0,
          unit: '',
          explanation: 'The highest common factor of 45 and 60 is 15.'
        },
        {
          prompt: 'Divide both parts of the ratio by the HCF. Enter the first part of the simplified ratio.',
          hint1: 'Divide each number by 15.',
          hint2: '45 ÷ 15 = ?',
          hint3: '45 ÷ 15 = 3, so the ratio is 3:4.',
          answer: 3,
          tolerance: 0,
          unit: '',
          explanation: '45 ÷ 15 = 3 and 60 ÷ 15 = 4, giving the simplified ratio 3:4.'
        }
      ],
      workedExample: {
        question: 'Write the ratio 30:45 in its simplest form.',
        steps: [
          'HCF of 30 and 45: factors of 30 include 1,2,3,5,6,10,15,30; factors of 45 include 1,3,5,9,15,45 → HCF = 15',
          'Divide both parts by 15: 30 ÷ 15 = 2, 45 ÷ 15 = 3',
          'Simplified ratio = <strong>2:3</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'HCF is 15. 45 ÷ 15 = 3, 60 ÷ 15 = 4. Simplified ratio is 3:4.',
        grade6: 'HCF of 45 and 60 is 15. Dividing both parts: 45 ÷ 15 = 3, 60 ÷ 15 = 4. Simplest form is 3:4.',
        grade8: 'The HCF of 45 and 60 is 15. Dividing both parts by 15 gives 3:4, which cannot be simplified further as 3 and 4 share no common factors other than 1.'
      },
      examinerTip: 'Divide both numbers by their HCF — not just any common factor.',
      auditStatus: 'pending'
    },
    {
      id: 'rat-B04',
      subtopic: 'rpr-ratio',
      band: 'B',
      marks: 3,
      question: 'Amy and Ben share money in the ratio 2:5. Ben gets £84 more than Amy. How much does each person get?',
      steps: [
        {
          prompt: 'How many more parts does Ben have than Amy?',
          hint1: 'Look at the ratio 2:5.',
          hint2: 'Amy has 2 parts, Ben has 5 parts. How many more parts is that?',
          hint3: '5 − 2 = 3 more parts.',
          answer: 3,
          tolerance: 0,
          unit: 'parts',
          explanation: 'Ben has 5 parts and Amy has 2 parts, so Ben has 5 − 2 = 3 more parts.'
        },
        {
          prompt: 'What is the value of one part? (£)',
          hint1: 'The 3 extra parts represent the £84 difference.',
          hint2: '£84 ÷ 3 = ?',
          hint3: 'One part is worth £28.',
          answer: 28,
          tolerance: 0,
          unit: '£',
          explanation: '3 extra parts = £84, so 1 part = £84 ÷ 3 = £28.'
        },
        {
          prompt: 'How much does Amy get? (£)',
          hint1: 'Amy has 2 parts.',
          hint2: '2 × £28 = ?',
          hint3: 'Amy gets £56.',
          answer: 56,
          tolerance: 0,
          unit: '£',
          explanation: 'Amy = 2 × £28 = £56. Ben = 5 × £28 = £140. Check: £140 − £56 = £84 ✓'
        }
      ],
      workedExample: {
        question: 'Sam and Tia share money in the ratio 1:4. Tia gets £60 more than Sam. How much does each get?',
        steps: [
          'Difference in parts: 4 − 1 = 3 parts',
          'Value of 1 part: £60 ÷ 3 = £20',
          'Sam = 1 × £20 = <strong>£20</strong>; Tia = 4 × £20 = <strong>£80</strong>',
          'Check: £80 − £20 = £60 ✓'
        ]
      },
      sampleAnswer: {
        grade4: 'Difference = 3 parts = £84, so 1 part = £28. Amy = 2 × £28 = £56, Ben = 5 × £28 = £140.',
        grade6: 'Ben has 3 more parts than Amy. 3 parts = £84, so 1 part = £28. Amy = 2 × £28 = £56 and Ben = 5 × £28 = £140.',
        grade8: 'The ratio 2:5 has a difference of 3 parts. Since this difference equals £84, one part = £28. Amy receives 2 × £28 = £56 and Ben receives 5 × £28 = £140. Check: £140 − £56 = £84 ✓'
      },
      examinerTip: 'Use the difference in parts to find the value of one part, then scale up.',
      auditStatus: 'pending'
    },
    {
      id: 'rat-B05',
      subtopic: 'rpr-ratio',
      band: 'B',
      marks: 3,
      question: 'A map has a scale of 1:50 000. Two towns are 7 cm apart on the map. What is the real distance in kilometres?',
      steps: [
        {
          prompt: 'What is the real distance in centimetres?',
          hint1: 'Multiply the map distance by the scale factor.',
          hint2: '7 × 50 000 = ?',
          hint3: '7 × 50 000 = 350 000 cm.',
          answer: 350000,
          tolerance: 0,
          unit: 'cm',
          explanation: 'Scale 1:50 000 means every 1 cm on the map = 50 000 cm in real life. So 7 cm → 7 × 50 000 = 350 000 cm.'
        },
        {
          prompt: 'Convert 350 000 cm to metres.',
          hint1: 'Divide by 100 to convert cm to m.',
          hint2: '350 000 ÷ 100 = ?',
          hint3: '3500 m.',
          answer: 3500,
          tolerance: 0,
          unit: 'm',
          explanation: '350 000 ÷ 100 = 3500 m.'
        },
        {
          prompt: 'Convert 3500 m to kilometres.',
          hint1: 'Divide by 1000 to convert m to km.',
          hint2: '3500 ÷ 1000 = ?',
          hint3: '3.5 km.',
          answer: 3.5,
          tolerance: 0,
          unit: 'km',
          explanation: '3500 ÷ 1000 = 3.5 km.'
        }
      ],
      workedExample: {
        question: 'A map has a scale of 1:50 000. Two points are 4 cm apart on the map. Find the real distance in km.',
        steps: [
          'Real distance = 4 × 50 000 = 200 000 cm',
          'Convert to metres: 200 000 ÷ 100 = 2000 m',
          'Convert to kilometres: 2000 ÷ 1000 = <strong>2 km</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Real distance = 7 × 50 000 = 350 000 cm = 3500 m = 3.5 km.',
        grade6: '7 cm on the map = 7 × 50 000 = 350 000 cm in real life. Converting: 350 000 cm ÷ 100 = 3500 m ÷ 1000 = 3.5 km.',
        grade8: 'Scale 1:50 000 means map distance × 50 000 = real distance. 7 × 50 000 = 350 000 cm. Converting: ÷100 gives 3500 m; ÷1000 gives 3.5 km.'
      },
      examinerTip: 'Convert units step by step — cm to m (÷100), then m to km (÷1000).',
      auditStatus: 'pending'
    },
    {
      id: 'rat-B06',
      subtopic: 'rpr-ratio',
      band: 'B',
      marks: 3,
      question: 'Orange paint is made by mixing red and yellow in the ratio 3:2. A painter has 18 litres of red paint and plenty of yellow. What is the maximum amount of orange paint they can make?',
      steps: [
        {
          prompt: 'How many litres of yellow paint are needed for every 18 litres of red?',
          hint1: 'Red:Yellow = 3:2, so for every 3 litres of red you need 2 litres of yellow.',
          hint2: '18 ÷ 3 = 6 groups, so yellow = 6 × 2 = ?',
          hint3: '12 litres of yellow.',
          answer: 12,
          tolerance: 0,
          unit: 'litres',
          explanation: 'Scale factor = 18 ÷ 3 = 6. Yellow needed = 6 × 2 = 12 litres.'
        },
        {
          prompt: 'What is the total amount of orange paint made? (litres)',
          hint1: 'Add the red and yellow together.',
          hint2: '18 + 12 = ?',
          hint3: '30 litres.',
          answer: 30,
          tolerance: 0,
          unit: 'litres',
          explanation: 'Total orange paint = 18 + 12 = 30 litres.'
        },
        {
          prompt: 'Check: does 30 litres split in ratio 3:2 give 18 and 12? Enter 1 for yes.',
          hint1: '30 ÷ 5 = 6. Red = 3×6=18, Yellow = 2×6=12.',
          hint2: 'Both values match — confirm with 1.',
          hint3: 'Enter 1.',
          answer: 1,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'Yes — 30 ÷ 5 = 6; 3×6 = 18 ✓ and 2×6 = 12 ✓',
          explanation: 'Check: 30 ÷ 5 parts = 6 per part. 3×6=18 red ✓, 2×6=12 yellow ✓'
        }
      ],
      workedExample: {
        question: 'Orange paint uses red:yellow = 3:2. A painter has 12 litres of red. How much orange paint can they make?',
        steps: [
          'Scale factor: 12 ÷ 3 = 4',
          'Yellow needed: 4 × 2 = 8 litres',
          'Total orange paint: 12 + 8 = <strong>20 litres</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Scale factor = 18 ÷ 3 = 6. Yellow = 6 × 2 = 12 litres. Total = 18 + 12 = 30 litres.',
        grade6: 'Red:Yellow = 3:2. Scale factor = 18 ÷ 3 = 6. Yellow needed = 6 × 2 = 12 litres. Total orange paint = 18 + 12 = 30 litres.',
        grade8: 'Ratio 3:2 with 18 litres of red: scale factor = 18/3 = 6. Yellow required = 6 × 2 = 12 litres. Maximum orange paint = 18 + 12 = 30 litres. Check: 30 ÷ 5 = 6 per part, so 18:12 = 3:2 ✓'
      },
      examinerTip: 'Find the scale factor first by dividing the given quantity by its ratio share.',
      auditStatus: 'pending'
    },
    {
      id: 'rat-C03',
      subtopic: 'rpr-ratio',
      band: 'C',
      marks: 4,
      question: 'y is directly proportional to x². When x = 3, y = 36. Find y when x = 5.',
      steps: [
        {
          prompt: 'Write the proportionality equation using a constant k.',
          hint1: 'y ∝ x² means y = kx².',
          hint2: 'Write: y = kx²',
          hint3: 'The equation is y = kx².',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'y = kx²',
          explanation: 'Direct proportion to x² means y = kx² where k is a constant.'
        },
        {
          prompt: 'Substitute x = 3, y = 36 to find k.',
          hint1: '36 = k × 3²',
          hint2: '36 = 9k, so k = 36 ÷ 9',
          hint3: 'k = 4.',
          answer: 4,
          tolerance: 0,
          unit: '',
          explanation: 'y = kx². 36 = k × 9. k = 36 ÷ 9 = 4.'
        },
        {
          prompt: 'Write the full equation.',
          hint1: 'Replace k with its value.',
          hint2: 'y = 4x²',
          hint3: 'y = 4x².',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'y = 4x²',
          explanation: 'The equation is y = 4x².'
        },
        {
          prompt: 'Find y when x = 5.',
          hint1: 'Substitute x = 5 into y = 4x².',
          hint2: 'y = 4 × 25 = ?',
          hint3: 'y = 100.',
          answer: 100,
          tolerance: 0,
          unit: '',
          explanation: 'y = 4 × 5² = 4 × 25 = 100.'
        }
      ],
      workedExample: {
        question: 'y is directly proportional to x². When x = 2, y = 20. Find y when x = 4.',
        steps: [
          'Write equation: y = kx²',
          'Substitute: 20 = k × 4, so k = 20 ÷ 4 = 5',
          'Full equation: y = 5x²',
          'Find y at x = 4: y = 5 × 16 = <strong>80</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'y = kx². 36 = 9k so k = 4. y = 4 × 25 = 100.',
        grade6: 'y ∝ x² means y = kx². Using x=3, y=36: 36 = k×9, so k=4. Equation: y = 4x². At x=5: y = 4×25 = 100.',
        grade8: 'y = kx². Substituting x=3, y=36: 36 = 9k → k = 4. Equation: y = 4x². At x=5: y = 4 × 25 = 100. The relationship scales with the square, so doubling x quadruples y.'
      },
      examinerTip: 'Always find k first using the given pair of values, then use k in the equation.',
      auditStatus: 'pending'
    },
    {
      id: 'rat-C04',
      subtopic: 'rpr-ratio',
      band: 'C',
      marks: 4,
      question: 'A alloy contains copper, zinc and tin in the ratio 5:3:2. A piece of alloy has mass 480 g. A different piece of the same alloy contains 105 g of zinc. Find the total mass of this second piece.',
      steps: [
        {
          prompt: 'What fraction of the alloy is zinc?',
          hint1: 'Total parts = 5 + 3 + 2 = 10.',
          hint2: 'Zinc = 3 parts out of 10.',
          hint3: 'Zinc fraction = 3/10.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: '3/10',
          explanation: 'Total parts: 5+3+2 = 10. Zinc is 3 parts, so fraction = 3/10.'
        },
        {
          prompt: 'Use the zinc fraction to find the total mass of the second piece. (g)',
          hint1: 'If zinc = 3/10 of total mass, then total = zinc ÷ (3/10).',
          hint2: 'Total = 105 ÷ (3/10) = 105 × (10/3)',
          hint3: 'Total = 350 g.',
          answer: 350,
          tolerance: 0,
          unit: 'g',
          explanation: 'Total mass = 105 ÷ (3/10) = 105 × 10/3 = 1050/3 = 350 g.'
        },
        {
          prompt: 'How much copper is in the second piece? (g)',
          hint1: 'Copper is 5 parts out of 10 = 1/2 of total mass.',
          hint2: '1/2 × 350 = ?',
          hint3: '175 g.',
          answer: 175,
          tolerance: 0,
          unit: 'g',
          explanation: 'Copper = 5/10 × 350 = 175 g.'
        },
        {
          prompt: 'Verify: copper + zinc + tin = 350 g. Enter the mass of tin (g).',
          hint1: 'Tin = 2/10 × 350.',
          hint2: '0.2 × 350 = 70 g.',
          hint3: 'Tin = 70 g. Check: 175 + 105 + 70 = 350 ✓',
          answer: 70,
          tolerance: 0,
          unit: 'g',
          explanation: 'Tin = 2/10 × 350 = 70 g. Total: 175 + 105 + 70 = 350 ✓'
        }
      ],
      workedExample: {
        question: 'An alloy contains iron, copper and nickel in ratio 4:3:1. A piece contains 90 g of copper. Find the total mass.',
        steps: [
          'Total parts: 4 + 3 + 1 = 8. Copper fraction = 3/8.',
          'Total mass = 90 ÷ (3/8) = 90 × 8/3 = <strong>240 g</strong>',
          'Check: iron = 4/8 × 240 = 120 g, copper = 90 g, nickel = 1/8 × 240 = 30 g. Sum = 240 g ✓'
        ]
      },
      sampleAnswer: {
        grade4: 'Zinc fraction = 3/10. Total = 105 ÷ 0.3 = 350 g.',
        grade6: 'Ratio 5:3:2, total 10 parts. Zinc = 3/10. Total mass = 105 × 10/3 = 350 g. Copper = 5/10 × 350 = 175 g, tin = 2/10 × 350 = 70 g.',
        grade8: 'Total ratio parts = 10. Zinc fraction = 3/10. Total mass = 105 × (10/3) = 350 g. Copper: 5/10 × 350 = 175 g. Tin: 2/10 × 350 = 70 g. Check: 175 + 105 + 70 = 350 g ✓'
      },
      examinerTip: 'To find total from one component, divide the component by its fraction of the whole.',
      auditStatus: 'pending'
    },
"""

with open(FILE, encoding='utf-8') as f:
    content = f.read()
pos = content.find(MARKER)
if pos < 0:
    print('MARKER NOT FOUND')
else:
    print(f'Inserting at char {pos}')
    with open(FILE, 'w', encoding='utf-8') as f:
        f.write(content[:pos] + NEW + content[pos:])
    print('Done - rpr_q1 (7 ratio questions)')
