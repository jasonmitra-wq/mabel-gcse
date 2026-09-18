FILE = r'C:\Users\jason\OneDrive\Documents\GitHub\mabel-gcse\js\maths-questions.js'
MARKER = "\n\n    // ══════════════════════════════════════════════════════════\n    // PERCENTAGE CHANGE"

NEW = """    {
      id: 'spd-A03',
      subtopic: 'rpr-speed',
      band: 'A',
      marks: 2,
      question: 'A cyclist travels 45 km at a speed of 15 km/h. How long does the journey take? Give your answer in hours.',
      steps: [
        {
          prompt: 'Write the formula linking time, distance and speed.',
          hint1: 'Time = Distance ÷ Speed.',
          hint2: 'T = D ÷ S.',
          hint3: 'Time = Distance ÷ Speed.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'Time = Distance ÷ Speed',
          explanation: 'From Speed = Distance/Time, rearranging gives Time = Distance ÷ Speed.'
        },
        {
          prompt: 'Calculate the time in hours.',
          hint1: 'Time = 45 ÷ 15.',
          hint2: '45 ÷ 15 = ?',
          hint3: '3 hours.',
          answer: 3,
          tolerance: 0,
          unit: 'hours',
          explanation: 'Time = 45 ÷ 15 = 3 hours.'
        }
      ],
      workedExample: {
        question: 'A runner travels 12 km at 8 km/h. How long does the journey take?',
        steps: [
          'Time = Distance ÷ Speed',
          'Time = 12 ÷ 8 = <strong>1.5 hours</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Time = 45 ÷ 15 = 3 hours.',
        grade6: 'Using Time = Distance ÷ Speed: Time = 45 ÷ 15 = 3 hours.',
        grade8: 'T = D/S = 45/15 = 3 hours.'
      },
      examinerTip: 'Remember the SDT triangle: cover the quantity you want to find.',
      auditStatus: 'pending'
    },
    {
      id: 'spd-A04',
      subtopic: 'rpr-speed',
      band: 'A',
      marks: 2,
      question: 'A train travels at 80 km/h for 2.5 hours. How far does it travel?',
      steps: [
        {
          prompt: 'Write the formula for distance.',
          hint1: 'Distance = Speed × Time.',
          hint2: 'D = S × T.',
          hint3: 'Distance = Speed × Time.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'Distance = Speed × Time',
          explanation: 'Distance = Speed × Time.'
        },
        {
          prompt: 'Calculate the distance in km.',
          hint1: 'D = 80 × 2.5.',
          hint2: '80 × 2.5 = ?',
          hint3: '200 km.',
          answer: 200,
          tolerance: 0,
          unit: 'km',
          explanation: 'D = 80 × 2.5 = 200 km.'
        }
      ],
      workedExample: {
        question: 'A car travels at 60 km/h for 1.5 hours. How far does it travel?',
        steps: [
          'Distance = Speed × Time',
          'D = 60 × 1.5 = <strong>90 km</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Distance = 80 × 2.5 = 200 km.',
        grade6: 'Distance = Speed × Time = 80 × 2.5 = 200 km.',
        grade8: 'D = ST = 80 × 2.5 = 200 km.'
      },
      examinerTip: 'Make sure time is in hours when speed is in km/h.',
      auditStatus: 'pending'
    },
    {
      id: 'spd-A05',
      subtopic: 'rpr-speed',
      band: 'A',
      marks: 2,
      question: 'A bus covers 96 km in 1 hour 20 minutes. Calculate its average speed in km/h.',
      steps: [
        {
          prompt: 'Convert 1 hour 20 minutes to hours.',
          hint1: '20 minutes = 20/60 hours.',
          hint2: '20 ÷ 60 = 1/3. Total = 1 + 1/3.',
          hint3: '1 hour 20 minutes = 4/3 hours ≈ 1.333 hours.',
          answer: 1.333,
          tolerance: 0.01,
          unit: 'hours',
          explanation: '1 hour 20 minutes = 1 + 20/60 = 1 + 1/3 = 4/3 hours.'
        },
        {
          prompt: 'Calculate the speed in km/h.',
          hint1: 'Speed = Distance ÷ Time.',
          hint2: '96 ÷ (4/3) = 96 × 3/4 = ?',
          hint3: '72 km/h.',
          answer: 72,
          tolerance: 0,
          unit: 'km/h',
          explanation: 'Speed = 96 ÷ (4/3) = 96 × 3/4 = 72 km/h.'
        }
      ],
      workedExample: {
        question: 'A car covers 90 km in 1 hour 30 minutes. Find its speed in km/h.',
        steps: [
          'Convert time: 1 hr 30 min = 1.5 hours',
          'Speed = 90 ÷ 1.5 = <strong>60 km/h</strong>'
        ]
      },
      sampleAnswer: {
        grade4: '1 hr 20 min = 1.33 hours. Speed = 96 ÷ 1.33 ≈ 72 km/h.',
        grade6: 'Time = 1 + 20/60 = 4/3 hours. Speed = 96 ÷ (4/3) = 72 km/h.',
        grade8: 'T = 80/60 hours = 4/3 h. S = D/T = 96 ÷ (4/3) = 72 km/h.'
      },
      examinerTip: 'Always convert time to hours (as a decimal or fraction) before calculating speed.',
      auditStatus: 'pending'
    },
    {
      id: 'spd-B02',
      subtopic: 'rpr-speed',
      band: 'B',
      marks: 3,
      question: 'A car travels from town A to town B. The first 60 km takes 45 minutes and the remaining 90 km takes 1 hour. Find the average speed for the whole journey in km/h.',
      steps: [
        {
          prompt: 'What is the total distance? (km)',
          hint1: 'Add both distances together.',
          hint2: '60 + 90 = ?',
          hint3: '150 km.',
          answer: 150,
          tolerance: 0,
          unit: 'km',
          explanation: 'Total distance = 60 + 90 = 150 km.'
        },
        {
          prompt: 'What is the total time in hours?',
          hint1: 'Convert 45 minutes to hours, then add 1 hour.',
          hint2: '45 min = 0.75 hours. 0.75 + 1 = ?',
          hint3: '1.75 hours.',
          answer: 1.75,
          tolerance: 0,
          unit: 'hours',
          explanation: '45 min = 3/4 hr = 0.75 hr. Total time = 0.75 + 1 = 1.75 hours.'
        },
        {
          prompt: 'Calculate the average speed in km/h.',
          hint1: 'Average speed = Total distance ÷ Total time.',
          hint2: '150 ÷ 1.75 = ?',
          hint3: '≈ 85.7 km/h.',
          answer: 85.71,
          tolerance: 0.1,
          unit: 'km/h',
          explanation: 'Average speed = 150 ÷ 1.75 ≈ 85.71 km/h.'
        }
      ],
      workedExample: {
        question: 'A bus travels 40 km in 30 min, then 80 km in 1 hour. Find average speed.',
        steps: [
          'Total distance: 40 + 80 = 120 km',
          'Total time: 0.5 + 1 = 1.5 hours',
          'Average speed = 120 ÷ 1.5 = <strong>80 km/h</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Total distance = 150 km. Total time = 1.75 hours. Average speed = 150 ÷ 1.75 ≈ 85.7 km/h.',
        grade6: 'Total distance = 150 km. Time = 0.75 + 1 = 1.75 h. Average speed = 150/1.75 ≈ 85.7 km/h.',
        grade8: 'Total distance = 150 km. Total time = 45/60 + 1 = 1.75 h. Average speed = 150/1.75 = 600/7 ≈ 85.7 km/h.'
      },
      examinerTip: 'Average speed uses total distance and total time — never average the individual speeds.',
      auditStatus: 'pending'
    },
    {
      id: 'spd-B03',
      subtopic: 'rpr-speed',
      band: 'B',
      marks: 3,
      question: 'A train leaves at 09:15 and arrives at 11:45 having travelled 200 km. Calculate the average speed in km/h.',
      steps: [
        {
          prompt: 'How long does the journey take? Give your answer in hours.',
          hint1: 'From 09:15 to 11:45.',
          hint2: '11:45 − 09:15 = 2 hours 30 minutes.',
          hint3: '2.5 hours.',
          answer: 2.5,
          tolerance: 0,
          unit: 'hours',
          explanation: '11:45 − 09:15 = 2 h 30 min = 2.5 hours.'
        },
        {
          prompt: 'Calculate the average speed in km/h.',
          hint1: 'Speed = Distance ÷ Time.',
          hint2: '200 ÷ 2.5 = ?',
          hint3: '80 km/h.',
          answer: 80,
          tolerance: 0,
          unit: 'km/h',
          explanation: 'Speed = 200 ÷ 2.5 = 80 km/h.'
        },
        {
          prompt: 'Check: does 80 km/h × 2.5 h = 200 km? Enter 1 for yes.',
          hint1: '80 × 2.5 = 200.',
          hint2: 'Yes — enter 1.',
          hint3: 'Enter 1.',
          answer: 1,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: '80 × 2.5 = 200 km ✓',
          explanation: 'Check: 80 × 2.5 = 200 km ✓'
        }
      ],
      workedExample: {
        question: 'A train leaves at 10:30 and arrives at 12:00 having travelled 90 km. Find the average speed.',
        steps: [
          'Journey time: 12:00 − 10:30 = 1.5 hours',
          'Speed = 90 ÷ 1.5 = <strong>60 km/h</strong>',
          'Check: 60 × 1.5 = 90 ✓'
        ]
      },
      sampleAnswer: {
        grade4: 'Time = 2.5 hours. Speed = 200 ÷ 2.5 = 80 km/h.',
        grade6: 'Journey time = 11:45 − 09:15 = 2.5 hours. Average speed = 200 ÷ 2.5 = 80 km/h.',
        grade8: 'T = 2.5 h. S = D/T = 200/2.5 = 80 km/h. Check: 80 × 2.5 = 200 ✓'
      },
      examinerTip: 'Work out the time gap first — convert to a decimal if needed.',
      auditStatus: 'pending'
    },
    {
      id: 'spd-B04',
      subtopic: 'rpr-speed',
      band: 'B',
      marks: 3,
      question: 'Convert 90 km/h to metres per second.',
      steps: [
        {
          prompt: 'Convert 90 km/h to metres per hour.',
          hint1: '1 km = 1000 m.',
          hint2: '90 × 1000 = ?',
          hint3: '90 000 m/h.',
          answer: 90000,
          tolerance: 0,
          unit: 'm/h',
          explanation: '90 km/h × 1000 = 90 000 m/h.'
        },
        {
          prompt: 'Convert metres per hour to metres per second.',
          hint1: '1 hour = 3600 seconds.',
          hint2: '90 000 ÷ 3600 = ?',
          hint3: '25 m/s.',
          answer: 25,
          tolerance: 0,
          unit: 'm/s',
          explanation: '90 000 ÷ 3600 = 25 m/s.'
        },
        {
          prompt: 'State the shortcut: to convert km/h to m/s, divide by ___.',
          hint1: 'Think: ×1000 then ÷3600.',
          hint2: '1000/3600 = 5/18. Dividing by 18/5 is the same as multiplying by 5/18.',
          hint3: 'Divide by 3.6.',
          answer: 3.6,
          tolerance: 0,
          unit: '',
          explanation: 'Shortcut: km/h ÷ 3.6 = m/s. Check: 90 ÷ 3.6 = 25 m/s ✓'
        }
      ],
      workedExample: {
        question: 'Convert 54 km/h to m/s.',
        steps: [
          '54 km/h × 1000 = 54 000 m/h',
          '54 000 ÷ 3600 = <strong>15 m/s</strong>',
          'Shortcut: 54 ÷ 3.6 = 15 ✓'
        ]
      },
      sampleAnswer: {
        grade4: '90 × 1000 = 90 000 m/h. 90 000 ÷ 3600 = 25 m/s.',
        grade6: '90 km/h = 90 000 m/h. ÷ 3600 seconds per hour = 25 m/s.',
        grade8: '90 km/h × (1000/3600) = 90 × 5/18 = 25 m/s. Shortcut: ÷3.6.'
      },
      examinerTip: 'To convert km/h → m/s, divide by 3.6. To convert m/s → km/h, multiply by 3.6.',
      auditStatus: 'pending'
    },
    {
      id: 'spd-B05',
      subtopic: 'rpr-speed',
      band: 'B',
      marks: 3,
      question: 'A car travels at 60 km/h for 40 minutes, then at 90 km/h for 20 minutes. What is the total distance covered?',
      steps: [
        {
          prompt: 'How far does the car travel in the first 40 minutes? (km)',
          hint1: 'Convert 40 minutes to hours first.',
          hint2: '40 min = 2/3 hour. Distance = 60 × 2/3 = ?',
          hint3: '40 km.',
          answer: 40,
          tolerance: 0,
          unit: 'km',
          explanation: '40 min = 2/3 h. Distance = 60 × 2/3 = 40 km.'
        },
        {
          prompt: 'How far does the car travel in the next 20 minutes? (km)',
          hint1: 'Convert 20 minutes to hours first.',
          hint2: '20 min = 1/3 hour. Distance = 90 × 1/3 = ?',
          hint3: '30 km.',
          answer: 30,
          tolerance: 0,
          unit: 'km',
          explanation: '20 min = 1/3 h. Distance = 90 × 1/3 = 30 km.'
        },
        {
          prompt: 'What is the total distance? (km)',
          hint1: 'Add the two distances.',
          hint2: '40 + 30 = ?',
          hint3: '70 km.',
          answer: 70,
          tolerance: 0,
          unit: 'km',
          explanation: 'Total distance = 40 + 30 = 70 km.'
        }
      ],
      workedExample: {
        question: 'A car goes 80 km/h for 30 min, then 60 km/h for 30 min. Total distance?',
        steps: [
          'First leg: 80 × 0.5 = 40 km',
          'Second leg: 60 × 0.5 = 30 km',
          'Total = 40 + 30 = <strong>70 km</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'First leg: 60 × 2/3 = 40 km. Second leg: 90 × 1/3 = 30 km. Total = 70 km.',
        grade6: '40 min = 2/3 h: distance = 40 km. 20 min = 1/3 h: distance = 30 km. Total = 70 km.',
        grade8: 'D₁ = 60 × (40/60) = 40 km. D₂ = 90 × (20/60) = 30 km. Total = 70 km.'
      },
      examinerTip: 'Convert minutes to hours before using D = ST.',
      auditStatus: 'pending'
    },
    {
      id: 'spd-B06',
      subtopic: 'rpr-speed',
      band: 'B',
      marks: 3,
      question: 'Alice walks 6 km at 4 km/h, then jogs 6 km at 6 km/h. Find her average speed for the whole trip.',
      steps: [
        {
          prompt: 'How long does the walking section take? (hours)',
          hint1: 'Time = Distance ÷ Speed.',
          hint2: '6 ÷ 4 = ?',
          hint3: '1.5 hours.',
          answer: 1.5,
          tolerance: 0,
          unit: 'hours',
          explanation: 'Walk time = 6 ÷ 4 = 1.5 hours.'
        },
        {
          prompt: 'How long does the jogging section take? (hours)',
          hint1: 'Time = 6 ÷ 6.',
          hint2: '6 ÷ 6 = ?',
          hint3: '1 hour.',
          answer: 1,
          tolerance: 0,
          unit: 'hours',
          explanation: 'Jog time = 6 ÷ 6 = 1 hour.'
        },
        {
          prompt: 'Calculate average speed for the whole trip. (km/h)',
          hint1: 'Average speed = Total distance ÷ Total time.',
          hint2: 'Total distance = 12 km. Total time = 2.5 hours. 12 ÷ 2.5 = ?',
          hint3: '4.8 km/h.',
          answer: 4.8,
          tolerance: 0,
          unit: 'km/h',
          explanation: 'Average speed = 12 ÷ 2.5 = 4.8 km/h.'
        }
      ],
      workedExample: {
        question: 'Tom cycles 10 km at 10 km/h, then 10 km at 5 km/h. Find average speed.',
        steps: [
          'Time 1 = 10/10 = 1 h. Time 2 = 10/5 = 2 h.',
          'Total distance = 20 km. Total time = 3 h.',
          'Average speed = 20/3 ≈ <strong>6.67 km/h</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Walk: 1.5 h. Jog: 1 h. Total time = 2.5 h. Average speed = 12/2.5 = 4.8 km/h.',
        grade6: 'Walking time = 1.5 h, jogging time = 1 h. Average speed = 12 ÷ 2.5 = 4.8 km/h.',
        grade8: 'T₁=1.5h, T₂=1h, total=2.5h. Average speed = 12/2.5 = 4.8 km/h (not the arithmetic mean of 4 and 6).'
      },
      examinerTip: 'Average speed is never the average of the two speeds — always use total distance / total time.',
      auditStatus: 'pending'
    },
    {
      id: 'spd-C01',
      subtopic: 'rpr-speed',
      band: 'C',
      marks: 4,
      question: 'Two cyclists set off from the same point in opposite directions. Cyclist A rides at 18 km/h and Cyclist B at 12 km/h. After how many minutes are they 15 km apart?',
      steps: [
        {
          prompt: 'What is their combined speed? (km/h)',
          hint1: 'They move in opposite directions, so add their speeds.',
          hint2: '18 + 12 = ?',
          hint3: '30 km/h.',
          answer: 30,
          tolerance: 0,
          unit: 'km/h',
          explanation: 'Moving apart at 18 + 12 = 30 km/h combined.'
        },
        {
          prompt: 'How long until they are 15 km apart? (hours)',
          hint1: 'Time = Distance ÷ Speed.',
          hint2: '15 ÷ 30 = ?',
          hint3: '0.5 hours.',
          answer: 0.5,
          tolerance: 0,
          unit: 'hours',
          explanation: 'Time = 15 ÷ 30 = 0.5 hours.'
        },
        {
          prompt: 'Convert 0.5 hours to minutes.',
          hint1: 'Multiply by 60.',
          hint2: '0.5 × 60 = ?',
          hint3: '30 minutes.',
          answer: 30,
          tolerance: 0,
          unit: 'minutes',
          explanation: '0.5 × 60 = 30 minutes.'
        },
        {
          prompt: 'Check: after 30 min, how far has A gone? (km)',
          hint1: 'A travels at 18 km/h for 0.5 h.',
          hint2: '18 × 0.5 = 9 km. B travels 12 × 0.5 = 6 km. 9+6=15 ✓',
          hint3: '9 km.',
          answer: 9,
          tolerance: 0,
          unit: 'km',
          explanation: 'A goes 9 km, B goes 6 km. Gap = 15 km ✓'
        }
      ],
      workedExample: {
        question: 'Two cars leave the same point in opposite directions at 30 km/h and 20 km/h. When are they 25 km apart?',
        steps: [
          'Combined speed = 30 + 20 = 50 km/h',
          'Time = 25 ÷ 50 = 0.5 hours = <strong>30 minutes</strong>',
          'Check: 30×0.5 + 20×0.5 = 15+10 = 25 ✓'
        ]
      },
      sampleAnswer: {
        grade4: 'Combined speed = 30 km/h. Time = 15/30 = 0.5 h = 30 minutes.',
        grade6: 'They move apart at 18+12=30 km/h. Time = 15÷30 = 0.5 h = 30 minutes.',
        grade8: 'Relative speed = 30 km/h. T = 15/30 = 0.5 h = 30 min. Check: 9+6=15 km ✓'
      },
      examinerTip: 'When objects move apart, add their speeds to get the rate they separate.',
      auditStatus: 'pending'
    },
    {
      id: 'spd-C02',
      subtopic: 'rpr-speed',
      band: 'C',
      marks: 4,
      question: 'A car travels from city X to city Y at 60 km/h and returns at 40 km/h. The total journey time is 5 hours. Find the distance from X to Y.',
      steps: [
        {
          prompt: 'Let the distance from X to Y be d km. Write an expression for the time from X to Y.',
          hint1: 'Time = Distance ÷ Speed.',
          hint2: 'Time X→Y = d ÷ 60.',
          hint3: 'd/60 hours.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'd/60 hours',
          explanation: 'Time for X→Y = d/60.'
        },
        {
          prompt: 'Write an equation for the total journey time.',
          hint1: 'Total time = time there + time back.',
          hint2: 'd/60 + d/40 = 5.',
          hint3: 'd/60 + d/40 = 5.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'd/60 + d/40 = 5',
          explanation: 'd/60 + d/40 = 5.'
        },
        {
          prompt: 'Solve: find the value of d/120 by combining fractions. What is the combined fraction coefficient of d?',
          hint1: 'LCM of 60 and 40 is 120.',
          hint2: '2d/120 + 3d/120 = 5d/120.',
          hint3: '5/120 = 1/24. So d/24 = 5.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: '5d/120 = d/24',
          explanation: '2d/120 + 3d/120 = 5d/120 = d/24.'
        },
        {
          prompt: 'Find d (the one-way distance in km).',
          hint1: 'd/24 = 5.',
          hint2: 'd = 5 × 24.',
          hint3: 'd = 120 km.',
          answer: 120,
          tolerance: 0,
          unit: 'km',
          explanation: 'd = 5 × 24 = 120 km. Check: 120/60 + 120/40 = 2+3 = 5 h ✓'
        }
      ],
      workedExample: {
        question: 'A journey takes 1 h at 60 km/h and the return at 30 km/h. Total time = 3 h. Find the one-way distance.',
        steps: [
          'Let d = one-way distance.',
          'd/60 + d/30 = 3',
          'LCM = 60: d/60 + 2d/60 = 3d/60 = d/20 = 3',
          'd = <strong>60 km</strong>',
          'Check: 60/60 + 60/30 = 1+2 = 3 ✓'
        ]
      },
      sampleAnswer: {
        grade4: 'd/60 + d/40 = 5. Combining: 5d/120 = 5. d = 120 km.',
        grade6: 'Let d = distance. d/60 + d/40 = 5. LCM=120: 5d/120 = 5, so d=120 km.',
        grade8: 'd/60 + d/40 = 5. Multiply through by 120: 2d+3d=600, 5d=600, d=120 km. Check: 2+3=5 h ✓'
      },
      examinerTip: 'Set up the equation with letters first — then find the LCM to clear fractions.',
      auditStatus: 'pending'
    },
    {
      id: 'spd-C03',
      subtopic: 'rpr-speed',
      band: 'C',
      marks: 4,
      question: 'A speed-time graph shows a vehicle accelerating uniformly from 0 to 20 m/s in 10 seconds, travelling at 20 m/s for 30 seconds, then decelerating uniformly to rest in 5 seconds. Find the total distance travelled.',
      steps: [
        {
          prompt: 'Find the distance during acceleration (0 to 20 m/s in 10 s). Area of the triangle.',
          hint1: 'Area of triangle = 1/2 × base × height.',
          hint2: '1/2 × 10 × 20 = ?',
          hint3: '100 m.',
          answer: 100,
          tolerance: 0,
          unit: 'm',
          explanation: 'Distance = area of triangle = 1/2 × 10 × 20 = 100 m.'
        },
        {
          prompt: 'Find the distance at constant speed (20 m/s for 30 s). Area of rectangle.',
          hint1: 'Area = width × height.',
          hint2: '30 × 20 = ?',
          hint3: '600 m.',
          answer: 600,
          tolerance: 0,
          unit: 'm',
          explanation: 'Distance = 30 × 20 = 600 m.'
        },
        {
          prompt: 'Find the distance during deceleration (20 m/s to 0 in 5 s). Area of triangle.',
          hint1: '1/2 × base × height.',
          hint2: '1/2 × 5 × 20 = ?',
          hint3: '50 m.',
          answer: 50,
          tolerance: 0,
          unit: 'm',
          explanation: 'Distance = 1/2 × 5 × 20 = 50 m.'
        },
        {
          prompt: 'Find the total distance. (m)',
          hint1: 'Add all three areas.',
          hint2: '100 + 600 + 50 = ?',
          hint3: '750 m.',
          answer: 750,
          tolerance: 0,
          unit: 'm',
          explanation: 'Total = 100 + 600 + 50 = 750 m.'
        }
      ],
      workedExample: {
        question: 'A vehicle accelerates from 0 to 30 m/s in 6 s, stays at 30 m/s for 20 s, then decelerates to rest in 4 s. Find total distance.',
        steps: [
          'Acceleration phase: 1/2 × 6 × 30 = 90 m',
          'Constant speed: 20 × 30 = 600 m',
          'Deceleration: 1/2 × 4 × 30 = 60 m',
          'Total = 90 + 600 + 60 = <strong>750 m</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Triangle + rectangle + triangle = 100 + 600 + 50 = 750 m.',
        grade6: 'Acceleration: 1/2×10×20=100 m. Constant: 30×20=600 m. Deceleration: 1/2×5×20=50 m. Total=750 m.',
        grade8: 'Area under speed-time graph = distance. Trapezoid decomposed: triangle(100)+rectangle(600)+triangle(50) = 750 m.'
      },
      examinerTip: 'Distance = area under a speed-time graph. Triangles for acceleration/deceleration, rectangles for constant speed.',
      auditStatus: 'pending'
    },
    {
      id: 'spd-C04',
      subtopic: 'rpr-speed',
      band: 'C',
      marks: 4,
      question: 'Town A is 240 km from town B. A car leaves A at 09:00 travelling at 80 km/h. A second car leaves B at 09:30 travelling towards A at 60 km/h. At what time do they meet?',
      steps: [
        {
          prompt: 'How far has the first car travelled by 09:30? (km)',
          hint1: 'It has been travelling for 30 minutes = 0.5 hours at 80 km/h.',
          hint2: '80 × 0.5 = ?',
          hint3: '40 km.',
          answer: 40,
          tolerance: 0,
          unit: 'km',
          explanation: 'Car A travels 80 × 0.5 = 40 km by 09:30.'
        },
        {
          prompt: 'What is the remaining gap between the two cars at 09:30? (km)',
          hint1: '240 − 40 = ?',
          hint2: '200 km.',
          hint3: '200 km.',
          answer: 200,
          tolerance: 0,
          unit: 'km',
          explanation: 'Gap = 240 − 40 = 200 km at 09:30.'
        },
        {
          prompt: 'At what combined speed are the cars closing the gap? (km/h)',
          hint1: 'They travel towards each other.',
          hint2: '80 + 60 = ?',
          hint3: '140 km/h.',
          answer: 140,
          tolerance: 0,
          unit: 'km/h',
          explanation: 'Combined closing speed = 80 + 60 = 140 km/h.'
        },
        {
          prompt: 'How many minutes after 09:30 do they meet? Round to the nearest minute.',
          hint1: 'Time = 200 ÷ 140 hours. Convert to minutes.',
          hint2: '200/140 = 10/7 h ≈ 1.4286 h × 60 ≈ 85.7 min.',
          hint3: '≈ 86 minutes after 09:30, so at 10:56.',
          answer: 86,
          tolerance: 1,
          unit: 'minutes',
          explanation: 'Time = 200/140 × 60 ≈ 85.7 min ≈ 86 min. They meet at 09:30 + 86 min = 10:56.'
        }
      ],
      workedExample: {
        question: 'Towns P and Q are 180 km apart. Car 1 leaves P at 08:00 at 60 km/h; Car 2 leaves Q at 08:30 at 60 km/h heading toward P. When do they meet?',
        steps: [
          'By 08:30, Car 1 has travelled 60 × 0.5 = 30 km. Gap = 150 km.',
          'Combined speed = 60 + 60 = 120 km/h.',
          'Time to meet = 150/120 = 1.25 h = 75 min after 08:30.',
          'They meet at 08:30 + 75 min = <strong>09:45</strong>.'
        ]
      },
      sampleAnswer: {
        grade4: 'By 09:30 car A has done 40 km. Gap = 200 km. Combined speed = 140 km/h. Time = 200/140 ≈ 86 min. Meet at ≈ 10:56.',
        grade6: 'Car A has 40 km head start; gap = 200 km. Combined speed = 140 km/h. Time = 200/140 h ≈ 86 min. They meet at approximately 10:56.',
        grade8: 'Gap at 09:30 = 200 km. Closing speed = 140 km/h. T = 200/140 = 10/7 h ≈ 85.7 min. Meet at 09:30 + 86 min ≈ 10:56.'
      },
      examinerTip: 'Find the gap when the second vehicle sets off, then use combined speed to close it.',
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
    print('Done - rpr_q3 (12 speed questions)')
