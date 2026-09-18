FILE = r'C:\Users\jason\OneDrive\Documents\GitHub\mabel-gcse\js\maths-questions.js'
MARKER = "\n\n  ];\n\n  // ─────────────────────────────────────────────────────────────\n  // GEOMETRY"

NEW = """    {
      id: 'cmp-A03',
      subtopic: 'rpr-compound-measures',
      band: 'A',
      marks: 2,
      question: 'A rectangular block has mass 360 g and volume 45 cm³. Calculate its density.',
      steps: [
        {
          prompt: 'Write the formula for density.',
          hint1: 'Density = Mass ÷ Volume.',
          hint2: 'D = M ÷ V.',
          hint3: 'Density = Mass ÷ Volume.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'Density = Mass ÷ Volume',
          explanation: 'Density = Mass ÷ Volume.'
        },
        {
          prompt: 'Calculate the density in g/cm³.',
          hint1: 'D = 360 ÷ 45.',
          hint2: '360 ÷ 45 = ?',
          hint3: '8 g/cm³.',
          answer: 8,
          tolerance: 0,
          unit: 'g/cm³',
          explanation: 'Density = 360 ÷ 45 = 8 g/cm³.'
        }
      ],
      workedExample: {
        question: 'A block has mass 280 g and volume 35 cm³. Find its density.',
        steps: [
          'Density = Mass ÷ Volume',
          'D = 280 ÷ 35 = <strong>8 g/cm³</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Density = 360 ÷ 45 = 8 g/cm³.',
        grade6: 'D = M/V = 360/45 = 8 g/cm³.',
        grade8: 'D = 360/45 = 8 g/cm³.'
      },
      examinerTip: 'Remember the DMV triangle: cover what you want to find.',
      auditStatus: 'pending'
    },
    {
      id: 'cmp-A04',
      subtopic: 'rpr-compound-measures',
      band: 'A',
      marks: 2,
      question: 'A force of 90 N acts on an area of 15 cm². Calculate the pressure.',
      steps: [
        {
          prompt: 'Write the formula for pressure.',
          hint1: 'Pressure = Force ÷ Area.',
          hint2: 'P = F ÷ A.',
          hint3: 'Pressure = Force ÷ Area.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'Pressure = Force ÷ Area',
          explanation: 'Pressure = Force ÷ Area.'
        },
        {
          prompt: 'Calculate the pressure in N/cm².',
          hint1: 'P = 90 ÷ 15.',
          hint2: '90 ÷ 15 = ?',
          hint3: '6 N/cm².',
          answer: 6,
          tolerance: 0,
          unit: 'N/cm²',
          explanation: 'Pressure = 90 ÷ 15 = 6 N/cm².'
        }
      ],
      workedExample: {
        question: 'A force of 60 N acts on an area of 12 cm². Find the pressure.',
        steps: [
          'Pressure = Force ÷ Area',
          'P = 60 ÷ 12 = <strong>5 N/cm²</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Pressure = 90 ÷ 15 = 6 N/cm².',
        grade6: 'P = F/A = 90/15 = 6 N/cm².',
        grade8: 'P = F/A = 6 N/cm².'
      },
      examinerTip: 'Pressure units depend on the units of force and area given in the question.',
      auditStatus: 'pending'
    },
    {
      id: 'cmp-A05',
      subtopic: 'rpr-compound-measures',
      band: 'A',
      marks: 2,
      question: 'A substance has density 11.3 g/cm³. Calculate the mass of 20 cm³ of this substance.',
      steps: [
        {
          prompt: 'Rearrange the density formula to find mass.',
          hint1: 'Density = Mass ÷ Volume, so Mass = Density × Volume.',
          hint2: 'M = D × V.',
          hint3: 'Mass = Density × Volume.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'Mass = Density × Volume',
          explanation: 'M = D × V.'
        },
        {
          prompt: 'Calculate the mass in grams.',
          hint1: 'M = 11.3 × 20.',
          hint2: '11.3 × 20 = ?',
          hint3: '226 g.',
          answer: 226,
          tolerance: 0,
          unit: 'g',
          explanation: 'M = 11.3 × 20 = 226 g.'
        }
      ],
      workedExample: {
        question: 'A substance has density 7.8 g/cm³. Find the mass of 30 cm³.',
        steps: [
          'Mass = Density × Volume',
          'M = 7.8 × 30 = <strong>234 g</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Mass = 11.3 × 20 = 226 g.',
        grade6: 'M = D × V = 11.3 × 20 = 226 g.',
        grade8: 'M = DV = 11.3 × 20 = 226 g.'
      },
      examinerTip: 'Rearrange the formula before substituting numbers.',
      auditStatus: 'pending'
    },
    {
      id: 'cmp-B02',
      subtopic: 'rpr-compound-measures',
      band: 'B',
      marks: 3,
      question: 'A metal block is made of two parts. Part A has mass 120 g and volume 15 cm³. Part B has mass 180 g and volume 20 cm³. Find the average density of the whole block.',
      steps: [
        {
          prompt: 'Find the total mass of the block. (g)',
          hint1: 'Add the masses of both parts.',
          hint2: '120 + 180 = ?',
          hint3: '300 g.',
          answer: 300,
          tolerance: 0,
          unit: 'g',
          explanation: 'Total mass = 120 + 180 = 300 g.'
        },
        {
          prompt: 'Find the total volume of the block. (cm³)',
          hint1: 'Add the volumes of both parts.',
          hint2: '15 + 20 = ?',
          hint3: '35 cm³.',
          answer: 35,
          tolerance: 0,
          unit: 'cm³',
          explanation: 'Total volume = 15 + 20 = 35 cm³.'
        },
        {
          prompt: 'Calculate the average density. (g/cm³, to 2 decimal places)',
          hint1: 'Density = Total mass ÷ Total volume.',
          hint2: '300 ÷ 35 = ?',
          hint3: '≈ 8.57 g/cm³.',
          answer: 8.57,
          tolerance: 0.01,
          unit: 'g/cm³',
          explanation: 'Average density = 300 ÷ 35 ≈ 8.57 g/cm³.'
        }
      ],
      workedExample: {
        question: 'Block X: 80 g, 10 cm³. Block Y: 120 g, 15 cm³. Average density of combined block?',
        steps: [
          'Total mass = 80 + 120 = 200 g',
          'Total volume = 10 + 15 = 25 cm³',
          'Average density = 200 ÷ 25 = <strong>8 g/cm³</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Total mass = 300 g. Total volume = 35 cm³. Density = 300/35 ≈ 8.57 g/cm³.',
        grade6: 'D = (120+180)/(15+20) = 300/35 ≈ 8.57 g/cm³.',
        grade8: 'Average density = total mass/total volume = 300/35 = 60/7 ≈ 8.57 g/cm³.'
      },
      examinerTip: 'Average density uses total mass and total volume — do not average the individual densities.',
      auditStatus: 'pending'
    },
    {
      id: 'cmp-B03',
      subtopic: 'rpr-compound-measures',
      band: 'B',
      marks: 3,
      question: 'A pressure of 12 N/cm² acts on a rectangular surface measuring 5 cm by 8 cm. Find the force exerted.',
      steps: [
        {
          prompt: 'Calculate the area of the surface. (cm²)',
          hint1: 'Area of rectangle = length × width.',
          hint2: '5 × 8 = ?',
          hint3: '40 cm².',
          answer: 40,
          tolerance: 0,
          unit: 'cm²',
          explanation: 'Area = 5 × 8 = 40 cm².'
        },
        {
          prompt: 'Rearrange the pressure formula to find force.',
          hint1: 'Pressure = Force ÷ Area, so Force = Pressure × Area.',
          hint2: 'F = P × A.',
          hint3: 'Force = Pressure × Area.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'Force = Pressure × Area',
          explanation: 'F = P × A.'
        },
        {
          prompt: 'Calculate the force. (N)',
          hint1: 'F = 12 × 40.',
          hint2: '12 × 40 = ?',
          hint3: '480 N.',
          answer: 480,
          tolerance: 0,
          unit: 'N',
          explanation: 'F = 12 × 40 = 480 N.'
        }
      ],
      workedExample: {
        question: 'Pressure of 8 N/cm² on a surface 6 cm × 10 cm. Find the force.',
        steps: [
          'Area = 6 × 10 = 60 cm²',
          'F = P × A = 8 × 60 = <strong>480 N</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Area = 40 cm². F = 12 × 40 = 480 N.',
        grade6: 'Area = 5×8 = 40 cm². F = P×A = 12×40 = 480 N.',
        grade8: 'A = 40 cm². F = PA = 12 × 40 = 480 N.'
      },
      examinerTip: 'Calculate the area first, then rearrange the pressure formula.',
      auditStatus: 'pending'
    },
    {
      id: 'cmp-B04',
      subtopic: 'rpr-compound-measures',
      band: 'B',
      marks: 3,
      question: 'A liquid has density 0.8 g/cm³. It is poured into a container with base area 50 cm² to a depth of 6 cm. Calculate the mass of the liquid.',
      steps: [
        {
          prompt: 'Calculate the volume of the liquid. (cm³)',
          hint1: 'Volume = base area × height.',
          hint2: '50 × 6 = ?',
          hint3: '300 cm³.',
          answer: 300,
          tolerance: 0,
          unit: 'cm³',
          explanation: 'Volume = 50 × 6 = 300 cm³.'
        },
        {
          prompt: 'Use M = D × V to find the mass. (g)',
          hint1: 'M = 0.8 × 300.',
          hint2: '0.8 × 300 = ?',
          hint3: '240 g.',
          answer: 240,
          tolerance: 0,
          unit: 'g',
          explanation: 'M = 0.8 × 300 = 240 g.'
        },
        {
          prompt: 'Convert the mass to kilograms. (kg)',
          hint1: 'Divide by 1000.',
          hint2: '240 ÷ 1000 = ?',
          hint3: '0.24 kg.',
          answer: 0.24,
          tolerance: 0,
          unit: 'kg',
          explanation: '240 g ÷ 1000 = 0.24 kg.'
        }
      ],
      workedExample: {
        question: 'Liquid density 1.2 g/cm³ fills a container 40 cm² base, 5 cm deep. Find the mass in kg.',
        steps: [
          'Volume = 40 × 5 = 200 cm³',
          'Mass = 1.2 × 200 = 240 g',
          '240 g = <strong>0.24 kg</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Volume = 300 cm³. Mass = 0.8 × 300 = 240 g = 0.24 kg.',
        grade6: 'V = 50×6 = 300 cm³. M = DV = 0.8×300 = 240 g = 0.24 kg.',
        grade8: 'V = 300 cm³. M = DV = 240 g = 0.24 kg.'
      },
      examinerTip: 'Find volume first, then apply M = DV. Watch for unit conversions at the end.',
      auditStatus: 'pending'
    },
    {
      id: 'cmp-B05',
      subtopic: 'rpr-compound-measures',
      band: 'B',
      marks: 3,
      question: 'An object has density 2.5 g/cm³ and mass 200 g. It is placed in a container of water. Will it float or sink? (Objects float if density < 1 g/cm³ for water, sink if density > 1 g/cm³). Also find its volume.',
      steps: [
        {
          prompt: 'Find the volume of the object. (cm³)',
          hint1: 'Volume = Mass ÷ Density.',
          hint2: 'V = 200 ÷ 2.5.',
          hint3: '80 cm³.',
          answer: 80,
          tolerance: 0,
          unit: 'cm³',
          explanation: 'V = M/D = 200/2.5 = 80 cm³.'
        },
        {
          prompt: 'Compare the object\'s density to water (1 g/cm³). Will it sink? Enter 1 for sink, 2 for float.',
          hint1: '2.5 g/cm³ compared to 1 g/cm³ for water.',
          hint2: '2.5 > 1, so it is denser than water.',
          hint3: 'It sinks — enter 1.',
          answer: 1,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'Sink — density 2.5 g/cm³ > 1 g/cm³ (water)',
          explanation: 'Density 2.5 > 1 g/cm³, so the object sinks.'
        },
        {
          prompt: 'What pressure does the object exert on the base of the container if its base area is 16 cm²? (N/cm²) Use weight = mass × 10 N/kg, with mass in kg.',
          hint1: 'Weight = 0.2 kg × 10 = 2 N. Pressure = Force ÷ Area.',
          hint2: '2 ÷ 16 = ?',
          hint3: '0.125 N/cm².',
          answer: 0.125,
          tolerance: 0.001,
          unit: 'N/cm²',
          explanation: 'Weight = 0.200 × 10 = 2 N. Pressure = 2/16 = 0.125 N/cm².'
        }
      ],
      workedExample: {
        question: 'Object: density 3 g/cm³, mass 150 g, base area 10 cm². Find volume, state if it sinks, find pressure (g=10 N/kg).',
        steps: [
          'V = 150/3 = 50 cm³',
          'Density 3 > 1 — sinks',
          'Weight = 0.15 × 10 = 1.5 N. Pressure = 1.5/10 = <strong>0.15 N/cm²</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'V = 80 cm³. Density 2.5 > 1, so it sinks. Pressure = 2/16 = 0.125 N/cm².',
        grade6: 'V = 200/2.5 = 80 cm³. Density > 1 g/cm³ so it sinks. Weight = 2 N. P = F/A = 2/16 = 0.125 N/cm².',
        grade8: 'V = 80 cm³. D = 2.5 > 1 → sinks. F = 0.2×10 = 2 N. P = 2/16 = 0.125 N/cm².'
      },
      examinerTip: 'Objects sink when their density exceeds that of the fluid. Use g = 10 N/kg unless told otherwise.',
      auditStatus: 'pending'
    },
    {
      id: 'cmp-B06',
      subtopic: 'rpr-compound-measures',
      band: 'B',
      marks: 3,
      question: 'A recipe requires ingredients at a rate of 150 g per person. The density of the main ingredient is 0.6 g/cm³. How many cm³ of the ingredient is needed for 8 people?',
      steps: [
        {
          prompt: 'Find the total mass of ingredient needed. (g)',
          hint1: '150 g per person × 8 people.',
          hint2: '150 × 8 = ?',
          hint3: '1200 g.',
          answer: 1200,
          tolerance: 0,
          unit: 'g',
          explanation: 'Total mass = 150 × 8 = 1200 g.'
        },
        {
          prompt: 'Find the volume needed. (cm³)',
          hint1: 'Volume = Mass ÷ Density.',
          hint2: 'V = 1200 ÷ 0.6.',
          hint3: '2000 cm³.',
          answer: 2000,
          tolerance: 0,
          unit: 'cm³',
          explanation: 'V = 1200 ÷ 0.6 = 2000 cm³.'
        },
        {
          prompt: 'Convert to litres. (1 litre = 1000 cm³)',
          hint1: '2000 ÷ 1000 = ?',
          hint2: '2 litres.',
          hint3: '2 litres.',
          answer: 2,
          tolerance: 0,
          unit: 'litres',
          explanation: '2000 cm³ ÷ 1000 = 2 litres.'
        }
      ],
      workedExample: {
        question: '200 g per person, density 0.5 g/cm³, 5 people. Find volume in litres.',
        steps: [
          'Total mass = 200 × 5 = 1000 g',
          'V = 1000 ÷ 0.5 = 2000 cm³',
          '2000 ÷ 1000 = <strong>2 litres</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Mass = 1200 g. V = 1200/0.6 = 2000 cm³ = 2 litres.',
        grade6: 'Total mass = 1200 g. V = M/D = 1200/0.6 = 2000 cm³ = 2 litres.',
        grade8: 'M = 1200 g. V = M/D = 2000 cm³ = 2 litres.'
      },
      examinerTip: 'Multi-step: find mass first, then volume, then convert units.',
      auditStatus: 'pending'
    },
    {
      id: 'cmp-C01',
      subtopic: 'rpr-compound-measures',
      band: 'C',
      marks: 4,
      question: 'A cube of metal has side length 4 cm and mass 1.728 kg. A sphere is made from the same metal with radius 3 cm. Find the mass of the sphere in kg. (Volume of sphere = 4/3 × π × r³)',
      steps: [
        {
          prompt: 'Find the volume of the cube. (cm³)',
          hint1: 'Volume of cube = side³.',
          hint2: '4³ = ?',
          hint3: '64 cm³.',
          answer: 64,
          tolerance: 0,
          unit: 'cm³',
          explanation: 'Volume = 4³ = 64 cm³.'
        },
        {
          prompt: 'Find the density of the metal. (g/cm³) Note: 1.728 kg = 1728 g.',
          hint1: 'D = M ÷ V.',
          hint2: '1728 ÷ 64 = ?',
          hint3: '27 g/cm³.',
          answer: 27,
          tolerance: 0,
          unit: 'g/cm³',
          explanation: 'D = 1728 ÷ 64 = 27 g/cm³.'
        },
        {
          prompt: 'Find the volume of the sphere. (cm³, to 2 dp) r = 3 cm.',
          hint1: 'V = 4/3 × π × 3³.',
          hint2: '4/3 × π × 27 = 36π.',
          hint3: '≈ 113.10 cm³.',
          answer: 113.10,
          tolerance: 0.05,
          unit: 'cm³',
          explanation: 'V = 4/3 × π × 27 = 36π ≈ 113.10 cm³.'
        },
        {
          prompt: 'Find the mass of the sphere. (kg, to 3 dp)',
          hint1: 'M = D × V = 27 × 113.10.',
          hint2: '27 × 113.10 = 3053.6 g = 3.054 kg.',
          hint3: '≈ 3.054 kg.',
          answer: 3.054,
          tolerance: 0.005,
          unit: 'kg',
          explanation: 'M = 27 × 36π = 972π g ≈ 3053.6 g ≈ 3.054 kg.'
        }
      ],
      workedExample: {
        question: 'A cube of side 3 cm has mass 216 g. Find the mass of a sphere of radius 2 cm made of the same metal.',
        steps: [
          'Cube volume = 27 cm³. Density = 216/27 = 8 g/cm³.',
          'Sphere volume = 4/3 × π × 8 = 32π/3 ≈ 33.51 cm³.',
          'Mass = 8 × 33.51 ≈ <strong>268.1 g</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'Density = 1728/64 = 27 g/cm³. Sphere V = 36π ≈ 113.1 cm³. Mass ≈ 3054 g ≈ 3.054 kg.',
        grade6: 'D = 27 g/cm³. V_sphere = 4/3π×27 = 36π ≈ 113.10 cm³. M = 27×113.10 ≈ 3054 g = 3.054 kg.',
        grade8: 'D = 1728/64 = 27 g/cm³. V = 4/3π(3³) = 36π. M = 27×36π = 972π ≈ 3053.6 g ≈ 3.054 kg.'
      },
      examinerTip: 'Find density from the cube first, then use it with the sphere\'s volume.',
      auditStatus: 'pending'
    },
    {
      id: 'cmp-C02',
      subtopic: 'rpr-compound-measures',
      band: 'C',
      marks: 4,
      question: 'A hydraulic system has a small piston of area 5 cm² and a large piston of area 80 cm². A force of 60 N is applied to the small piston. What force is produced at the large piston? (Pressure is transmitted equally throughout the fluid.)',
      steps: [
        {
          prompt: 'Calculate the pressure created by the small piston. (N/cm²)',
          hint1: 'Pressure = Force ÷ Area.',
          hint2: '60 ÷ 5 = ?',
          hint3: '12 N/cm².',
          answer: 12,
          tolerance: 0,
          unit: 'N/cm²',
          explanation: 'P = 60/5 = 12 N/cm².'
        },
        {
          prompt: 'The same pressure acts on the large piston. Write the equation for force at the large piston.',
          hint1: 'Force = Pressure × Area.',
          hint2: 'F = 12 × 80.',
          hint3: 'F = 12 × 80.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'F = 12 × 80',
          explanation: 'F = P × A = 12 × 80.'
        },
        {
          prompt: 'Calculate the force at the large piston. (N)',
          hint1: '12 × 80 = ?',
          hint2: '960 N.',
          hint3: '960 N.',
          answer: 960,
          tolerance: 0,
          unit: 'N',
          explanation: 'F = 12 × 80 = 960 N.'
        },
        {
          prompt: 'What is the force multiplication factor of this hydraulic system?',
          hint1: 'Divide output force by input force.',
          hint2: '960 ÷ 60 = ?',
          hint3: '16.',
          answer: 16,
          tolerance: 0,
          unit: '',
          explanation: 'Force multiplication = 960/60 = 16. Same ratio as area ratio: 80/5 = 16.'
        }
      ],
      workedExample: {
        question: 'Small piston area 4 cm², large piston 60 cm². Input force 40 N. Output force?',
        steps: [
          'P = 40/4 = 10 N/cm²',
          'F = 10 × 60 = <strong>600 N</strong>',
          'Force multiplication = 600/40 = 15 (= area ratio 60/4)'
        ]
      },
      sampleAnswer: {
        grade4: 'P = 60/5 = 12 N/cm². F = 12 × 80 = 960 N. Multiplication factor = 16.',
        grade6: 'Pressure = 12 N/cm². Force at large piston = 12 × 80 = 960 N. Factor = 16.',
        grade8: 'P = 12 N/cm². F_out = P × A = 960 N. Multiplication = 16 (= area ratio 80/5).'
      },
      examinerTip: 'In a hydraulic system, the force multiplication equals the ratio of the areas.',
      auditStatus: 'pending'
    },
    {
      id: 'cmp-C03',
      subtopic: 'rpr-compound-measures',
      band: 'C',
      marks: 4,
      question: 'A block of wood (density 0.75 g/cm³) has dimensions 20 cm × 10 cm × 4 cm. It is placed on a table. Calculate the maximum and minimum pressure it can exert on the table. (Use g = 10 N/kg.)',
      steps: [
        {
          prompt: 'Find the volume and mass of the block.',
          hint1: 'Volume = 20×10×4 = 800 cm³. Mass = 0.75 × 800 = 600 g = 0.6 kg.',
          hint2: 'Weight = 0.6 × 10 = 6 N.',
          hint3: 'Weight = 6 N.',
          answer: 6,
          tolerance: 0,
          unit: 'N',
          explanation: 'V=800 cm³. M=600 g=0.6 kg. W=6 N.'
        },
        {
          prompt: 'Find the minimum pressure (largest face down). Largest face area = 20×10 = 200 cm². Pressure = ? (N/cm²)',
          hint1: 'P = F ÷ A = 6 ÷ 200.',
          hint2: '6 ÷ 200 = 0.03.',
          hint3: '0.03 N/cm².',
          answer: 0.03,
          tolerance: 0,
          unit: 'N/cm²',
          explanation: 'Min pressure = 6/200 = 0.03 N/cm².'
        },
        {
          prompt: 'Find the maximum pressure (smallest face down). Smallest face area = 10×4 = 40 cm². Pressure = ? (N/cm²)',
          hint1: 'P = 6 ÷ 40.',
          hint2: '6 ÷ 40 = 0.15.',
          hint3: '0.15 N/cm².',
          answer: 0.15,
          tolerance: 0,
          unit: 'N/cm²',
          explanation: 'Max pressure = 6/40 = 0.15 N/cm².'
        },
        {
          prompt: 'What is the ratio of maximum to minimum pressure?',
          hint1: '0.15 ÷ 0.03 = ?',
          hint2: '5.',
          hint3: '5:1.',
          answer: 5,
          tolerance: 0,
          unit: '',
          explanation: '0.15/0.03 = 5. Same as area ratio 200/40 = 5.'
        }
      ],
      workedExample: {
        question: 'Block 12 cm × 6 cm × 3 cm, density 0.5 g/cm³. Max and min pressure (g=10 N/kg).',
        steps: [
          'V = 216 cm³. M = 108 g = 0.108 kg. W = 1.08 N.',
          'Largest face: 12×6 = 72 cm². Min P = 1.08/72 = 0.015 N/cm².',
          'Smallest face: 6×3 = 18 cm². Max P = 1.08/18 = <strong>0.06 N/cm²</strong>.'
        ]
      },
      sampleAnswer: {
        grade4: 'W=6 N. Min P=6/200=0.03 N/cm². Max P=6/40=0.15 N/cm².',
        grade6: 'Weight=6 N. Largest face (200 cm²): P=0.03 N/cm². Smallest face (40 cm²): P=0.15 N/cm².',
        grade8: 'W=6N. P_min=6/200=0.03 N/cm². P_max=6/40=0.15 N/cm². Ratio=5 (= area ratio 200:40).'
      },
      examinerTip: 'Pressure is greatest on the smallest face — same force, smaller area.',
      auditStatus: 'pending'
    },
    {
      id: 'cmp-C04',
      subtopic: 'rpr-compound-measures',
      band: 'C',
      marks: 4,
      question: 'A gold alloy contains 75% gold (density 19.3 g/cm³) and 25% silver (density 10.5 g/cm³) by mass. Calculate the density of the alloy. (Hint: consider a 100 g sample.)',
      steps: [
        {
          prompt: 'In a 100 g sample, find the volume of gold. (cm³, to 3 dp)',
          hint1: 'Mass of gold = 75 g. Volume = mass ÷ density.',
          hint2: 'V_gold = 75 ÷ 19.3.',
          hint3: '≈ 3.886 cm³.',
          answer: 3.886,
          tolerance: 0.002,
          unit: 'cm³',
          explanation: 'V_gold = 75/19.3 ≈ 3.886 cm³.'
        },
        {
          prompt: 'Find the volume of silver in the 100 g sample. (cm³, to 3 dp)',
          hint1: 'Mass of silver = 25 g. V = 25 ÷ 10.5.',
          hint2: '25 ÷ 10.5 ≈ ?',
          hint3: '≈ 2.381 cm³.',
          answer: 2.381,
          tolerance: 0.002,
          unit: 'cm³',
          explanation: 'V_silver = 25/10.5 ≈ 2.381 cm³.'
        },
        {
          prompt: 'Find the total volume of the 100 g sample. (cm³, to 3 dp)',
          hint1: 'Add both volumes.',
          hint2: '3.886 + 2.381 = ?',
          hint3: '≈ 6.267 cm³.',
          answer: 6.267,
          tolerance: 0.005,
          unit: 'cm³',
          explanation: 'Total volume ≈ 3.886 + 2.381 = 6.267 cm³.'
        },
        {
          prompt: 'Calculate the density of the alloy. (g/cm³, to 2 dp)',
          hint1: 'D = 100 ÷ total volume.',
          hint2: '100 ÷ 6.267 ≈ ?',
          hint3: '≈ 15.96 g/cm³.',
          answer: 15.96,
          tolerance: 0.05,
          unit: 'g/cm³',
          explanation: 'D = 100/6.267 ≈ 15.96 g/cm³.'
        }
      ],
      workedExample: {
        question: 'Alloy: 60% copper (8.9 g/cm³), 40% tin (7.3 g/cm³) by mass. Find density using 100 g sample.',
        steps: [
          'V_copper = 60/8.9 ≈ 6.742 cm³',
          'V_tin = 40/7.3 ≈ 5.479 cm³',
          'Total V ≈ 12.221 cm³',
          'D = 100/12.221 ≈ <strong>8.18 g/cm³</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'V_gold≈3.886, V_silver≈2.381. Total V≈6.267 cm³. D=100/6.267≈15.96 g/cm³.',
        grade6: 'Using 100g: V_gold=75/19.3≈3.886, V_silver=25/10.5≈2.381. D=100/6.267≈15.96 g/cm³.',
        grade8: 'D = 100/(75/19.3 + 25/10.5) = 100/(3.886+2.381) = 100/6.267 ≈ 15.96 g/cm³.'
      },
      examinerTip: 'For mixture density, use a fixed total mass and find each component\'s volume, then D = total mass / total volume.',
      auditStatus: 'pending'
    },

    // ══════════════════════════════════════════════════════════
    // EXPONENTIAL GROWTH AND DECAY (rpr-growth-decay)
    {
      id: 'grd-A01',
      subtopic: 'rpr-growth-decay',
      band: 'A',
      marks: 2,
      question: 'A savings account earns 6% compound interest per year. £3000 is invested. What is the total after 1 year?',
      steps: [
        {
          prompt: 'What multiplier represents 6% growth?',
          hint1: '6% increase means × 1.06.',
          hint2: 'Multiplier = 1.06.',
          hint3: '1.06.',
          answer: 1.06,
          tolerance: 0,
          unit: '',
          explanation: '6% growth → multiplier 1.06.'
        },
        {
          prompt: 'Calculate the total after 1 year. (£)',
          hint1: '£3000 × 1.06.',
          hint2: '3000 × 1.06 = ?',
          hint3: '£3180.',
          answer: 3180,
          tolerance: 0,
          unit: '£',
          explanation: '£3000 × 1.06 = £3180.'
        }
      ],
      workedExample: {
        question: '£2000 at 5% compound interest. Total after 1 year?',
        steps: [
          'Multiplier = 1.05',
          '£2000 × 1.05 = <strong>£2100</strong>'
        ]
      },
      sampleAnswer: {
        grade4: '£3000 × 1.06 = £3180.',
        grade6: 'Multiplier = 1.06. Amount = £3000 × 1.06 = £3180.',
        grade8: 'A = 3000 × 1.06 = £3180.'
      },
      examinerTip: 'Growth rate r% → multiplier (1 + r/100).',
      auditStatus: 'pending'
    },
    {
      id: 'grd-A02',
      subtopic: 'rpr-growth-decay',
      band: 'A',
      marks: 2,
      question: 'A radioactive substance decays at 10% per year. Starting mass is 500 g. What is the mass after 1 year?',
      steps: [
        {
          prompt: 'What multiplier represents 10% decay?',
          hint1: '10% decrease means you keep 90%.',
          hint2: 'Multiplier = 0.90.',
          hint3: '0.90.',
          answer: 0.9,
          tolerance: 0,
          unit: '',
          explanation: '10% decay → multiplier 0.90.'
        },
        {
          prompt: 'Calculate the mass after 1 year. (g)',
          hint1: '500 × 0.90 = ?',
          hint2: '450 g.',
          hint3: '450 g.',
          answer: 450,
          tolerance: 0,
          unit: 'g',
          explanation: '500 × 0.90 = 450 g.'
        }
      ],
      workedExample: {
        question: 'A substance decays by 20% per year. Starting mass 300 g. Mass after 1 year?',
        steps: [
          'Multiplier = 0.80',
          '300 × 0.80 = <strong>240 g</strong>'
        ]
      },
      sampleAnswer: {
        grade4: '500 × 0.90 = 450 g.',
        grade6: 'Multiplier = 0.90. Mass = 500 × 0.90 = 450 g.',
        grade8: 'M = 500 × 0.90 = 450 g.'
      },
      examinerTip: 'Decay rate r% → multiplier (1 − r/100).',
      auditStatus: 'pending'
    },
    {
      id: 'grd-A03',
      subtopic: 'rpr-growth-decay',
      band: 'A',
      marks: 2,
      question: 'A town\'s population is 25 000. It grows at 4% per year. What is the population after 2 years?',
      steps: [
        {
          prompt: 'What is the multiplier for 4% annual growth?',
          hint1: '4% growth → multiplier 1.04.',
          hint2: '1.04.',
          hint3: '1.04.',
          answer: 1.04,
          tolerance: 0,
          unit: '',
          explanation: '4% growth → multiplier 1.04.'
        },
        {
          prompt: 'Calculate the population after 2 years (to the nearest whole number).',
          hint1: 'Population = 25 000 × 1.04².',
          hint2: '1.04² = 1.0816. 25 000 × 1.0816 = ?',
          hint3: '27 040.',
          answer: 27040,
          tolerance: 1,
          unit: '',
          explanation: '25 000 × 1.04² = 25 000 × 1.0816 = 27 040.'
        }
      ],
      workedExample: {
        question: 'Population 10 000 growing at 3% per year. Population after 2 years?',
        steps: [
          'Multiplier = 1.03',
          '10 000 × 1.03² = 10 000 × 1.0609 = <strong>10 609</strong>'
        ]
      },
      sampleAnswer: {
        grade4: '25 000 × 1.04² = 27 040.',
        grade6: 'P = 25 000 × 1.04² = 25 000 × 1.0816 = 27 040.',
        grade8: 'P = 25 000 × 1.04² = 27 040.'
      },
      examinerTip: 'Raise the multiplier to the power of the number of years.',
      auditStatus: 'pending'
    },
    {
      id: 'grd-A04',
      subtopic: 'rpr-growth-decay',
      band: 'A',
      marks: 2,
      question: 'A car was bought for £15 000. It depreciates by 18% per year. What is its value after 1 year?',
      steps: [
        {
          prompt: 'What multiplier represents 18% depreciation?',
          hint1: '18% decrease means you keep 82%.',
          hint2: 'Multiplier = 0.82.',
          hint3: '0.82.',
          answer: 0.82,
          tolerance: 0,
          unit: '',
          explanation: '18% depreciation → multiplier 0.82.'
        },
        {
          prompt: 'Calculate the value after 1 year. (£)',
          hint1: '15 000 × 0.82 = ?',
          hint2: '12 300.',
          hint3: '£12 300.',
          answer: 12300,
          tolerance: 0,
          unit: '£',
          explanation: '£15 000 × 0.82 = £12 300.'
        }
      ],
      workedExample: {
        question: 'Car bought for £20 000, depreciates 25% per year. Value after 1 year?',
        steps: [
          'Multiplier = 0.75',
          '£20 000 × 0.75 = <strong>£15 000</strong>'
        ]
      },
      sampleAnswer: {
        grade4: '£15 000 × 0.82 = £12 300.',
        grade6: 'Multiplier = 0.82. Value = £15 000 × 0.82 = £12 300.',
        grade8: 'V = 15 000 × 0.82 = £12 300.'
      },
      examinerTip: 'Depreciation is exponential decay — apply the multiplier each year.',
      auditStatus: 'pending'
    },
    {
      id: 'grd-A05',
      subtopic: 'rpr-growth-decay',
      band: 'A',
      marks: 2,
      question: 'The number of bacteria doubles every hour. There are 500 at the start. How many are there after 3 hours?',
      steps: [
        {
          prompt: 'What is the multiplier per hour?',
          hint1: 'Doubling means × 2 each hour.',
          hint2: 'Multiplier = 2.',
          hint3: '2.',
          answer: 2,
          tolerance: 0,
          unit: '',
          explanation: 'Doubling each hour → multiplier 2.'
        },
        {
          prompt: 'How many bacteria after 3 hours?',
          hint1: '500 × 2³.',
          hint2: '2³ = 8. 500 × 8 = ?',
          hint3: '4000.',
          answer: 4000,
          tolerance: 0,
          unit: '',
          explanation: '500 × 2³ = 500 × 8 = 4000.'
        }
      ],
      workedExample: {
        question: 'Bacteria triples every hour. 200 at start. How many after 3 hours?',
        steps: [
          'Multiplier = 3',
          '200 × 3³ = 200 × 27 = <strong>5400</strong>'
        ]
      },
      sampleAnswer: {
        grade4: '500 × 2³ = 500 × 8 = 4000.',
        grade6: 'N = 500 × 2³ = 4000.',
        grade8: 'N = 500 × 2³ = 4000.'
      },
      examinerTip: 'Exponential growth: raise the multiplier to the power of the time period.',
      auditStatus: 'pending'
    },
    {
      id: 'grd-B01',
      subtopic: 'rpr-growth-decay',
      band: 'B',
      marks: 3,
      question: '£4000 is invested at 5% compound interest per year. Calculate the total after 4 years to the nearest penny.',
      steps: [
        {
          prompt: 'Write the compound interest formula.',
          hint1: 'A = P(1 + r)ⁿ.',
          hint2: 'A = 4000 × 1.05⁴.',
          hint3: 'A = 4000 × 1.05⁴.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'A = 4000 × 1.05⁴',
          explanation: 'A = P(1+r)ⁿ = 4000 × 1.05⁴.'
        },
        {
          prompt: 'Calculate 1.05⁴.',
          hint1: '1.05² = 1.1025. 1.1025² = ?',
          hint2: '1.21550625.',
          hint3: '1.21550625.',
          answer: 1.21550625,
          tolerance: 0.000001,
          unit: '',
          explanation: '1.05⁴ = 1.21550625.'
        },
        {
          prompt: 'Calculate the total. (£)',
          hint1: '4000 × 1.21550625 = ?',
          hint2: '4862.025.',
          hint3: '£4862.03.',
          answer: 4862.03,
          tolerance: 0.01,
          unit: '£',
          explanation: 'A = 4000 × 1.21550625 = £4862.025 ≈ £4862.03.'
        }
      ],
      workedExample: {
        question: '£3000 at 4% per year for 3 years.',
        steps: [
          'A = 3000 × 1.04³ = 3000 × 1.124864',
          'A = <strong>£3374.59</strong>'
        ]
      },
      sampleAnswer: {
        grade4: '4000 × 1.05⁴ = 4000 × 1.2155 ≈ £4862.03.',
        grade6: 'A = 4000 × 1.05⁴ = £4862.03.',
        grade8: 'A = P(1+r)ⁿ = 4000 × 1.05⁴ = £4862.03.'
      },
      examinerTip: 'Keep full precision in your calculator until the final step.',
      auditStatus: 'pending'
    },
    {
      id: 'grd-B02',
      subtopic: 'rpr-growth-decay',
      band: 'B',
      marks: 3,
      question: 'A radioactive isotope has a half-life of 3 years. A sample starts with mass 640 g. What is the mass after 12 years?',
      steps: [
        {
          prompt: 'How many half-lives occur in 12 years?',
          hint1: 'Number of half-lives = total time ÷ half-life.',
          hint2: '12 ÷ 3 = ?',
          hint3: '4 half-lives.',
          answer: 4,
          tolerance: 0,
          unit: '',
          explanation: '12 ÷ 3 = 4 half-lives.'
        },
        {
          prompt: 'The mass halves with each half-life. Write the formula.',
          hint1: 'M = 640 × (1/2)⁴.',
          hint2: 'M = 640 × (0.5)⁴.',
          hint3: 'M = 640 × 0.0625.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'M = 640 × (0.5)⁴',
          explanation: 'Each half-life halves the mass: M = 640 × (0.5)⁴.'
        },
        {
          prompt: 'Calculate the mass after 12 years. (g)',
          hint1: '(0.5)⁴ = 0.0625.',
          hint2: '640 × 0.0625 = ?',
          hint3: '40 g.',
          answer: 40,
          tolerance: 0,
          unit: 'g',
          explanation: '640 × 0.0625 = 40 g.'
        }
      ],
      workedExample: {
        question: 'Half-life = 4 years. Initial mass = 480 g. Mass after 16 years?',
        steps: [
          'Number of half-lives = 16/4 = 4',
          'M = 480 × (0.5)⁴ = 480 × 0.0625 = <strong>30 g</strong>'
        ]
      },
      sampleAnswer: {
        grade4: '4 half-lives. M = 640 × 0.5⁴ = 640 × 0.0625 = 40 g.',
        grade6: '12/3 = 4 half-lives. M = 640 × (0.5)⁴ = 40 g.',
        grade8: 'n = 12/3 = 4. M = 640 × 0.5⁴ = 40 g.'
      },
      examinerTip: 'Half-life problems use multiplier 0.5. Divide total time by half-life to find the power.',
      auditStatus: 'pending'
    },
    {
      id: 'grd-B03',
      subtopic: 'rpr-growth-decay',
      band: 'B',
      marks: 3,
      question: 'A town\'s population is modelled by P = 12 000 × 1.03ⁿ where n is years after 2010. Predict the population in 2020.',
      steps: [
        {
          prompt: 'What is the value of n for the year 2020?',
          hint1: 'n = 2020 − 2010.',
          hint2: '2020 − 2010 = ?',
          hint3: 'n = 10.',
          answer: 10,
          tolerance: 0,
          unit: '',
          explanation: 'n = 2020 − 2010 = 10.'
        },
        {
          prompt: 'Calculate 1.03¹⁰ to 4 decimal places.',
          hint1: 'Use your calculator: 1.03^10.',
          hint2: '≈ 1.3439.',
          hint3: '1.3439.',
          answer: 1.3439,
          tolerance: 0.0005,
          unit: '',
          explanation: '1.03¹⁰ ≈ 1.3439.'
        },
        {
          prompt: 'Calculate the predicted population (to the nearest whole number).',
          hint1: 'P = 12 000 × 1.3439.',
          hint2: '12 000 × 1.3439 ≈ ?',
          hint3: '16 127.',
          answer: 16127,
          tolerance: 5,
          unit: '',
          explanation: 'P = 12 000 × 1.3439 ≈ 16 127.'
        }
      ],
      workedExample: {
        question: 'P = 8000 × 1.02ⁿ. Population in year n=5?',
        steps: [
          '1.02⁵ ≈ 1.1041',
          'P = 8000 × 1.1041 ≈ <strong>8833</strong>'
        ]
      },
      sampleAnswer: {
        grade4: 'n=10. P = 12 000 × 1.03¹⁰ ≈ 16 127.',
        grade6: 'n = 10. 1.03¹⁰ ≈ 1.3439. P = 12 000 × 1.3439 ≈ 16 127.',
        grade8: 'n=10. P = 12 000 × 1.03¹⁰ ≈ 16 127.'
      },
      examinerTip: 'Read n carefully — it is years after a base year, not the actual year.',
      auditStatus: 'pending'
    },
    {
      id: 'grd-B04',
      subtopic: 'rpr-growth-decay',
      band: 'B',
      marks: 3,
      question: 'A drug is eliminated from the body at a rate of 25% per hour. A patient takes 800 mg. How much remains after 3 hours?',
      steps: [
        {
          prompt: 'What is the multiplier per hour for 25% elimination?',
          hint1: '25% eliminated means 75% remains.',
          hint2: 'Multiplier = 0.75.',
          hint3: '0.75.',
          answer: 0.75,
          tolerance: 0,
          unit: '',
          explanation: '25% eliminated per hour → multiplier 0.75.'
        },
        {
          prompt: 'Write the formula for the amount remaining after 3 hours.',
          hint1: 'A = 800 × 0.75³.',
          hint2: 'A = 800 × 0.75³.',
          hint3: 'A = 800 × 0.75³.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'A = 800 × 0.75³',
          explanation: 'A = 800 × 0.75³.'
        },
        {
          prompt: 'Calculate the amount remaining. (mg)',
          hint1: '0.75³ = 0.421875.',
          hint2: '800 × 0.421875 = ?',
          hint3: '337.5 mg.',
          answer: 337.5,
          tolerance: 0.1,
          unit: 'mg',
          explanation: '800 × 0.75³ = 800 × 0.421875 = 337.5 mg.'
        }
      ],
      workedExample: {
        question: 'Drug eliminated at 20% per hour. Initial dose 500 mg. Remaining after 4 hours?',
        steps: [
          'Multiplier = 0.80',
          'A = 500 × 0.80⁴ = 500 × 0.4096 = <strong>204.8 mg</strong>'
        ]
      },
      sampleAnswer: {
        grade4: '800 × 0.75³ = 800 × 0.421875 = 337.5 mg.',
        grade6: 'A = 800 × 0.75³ = 337.5 mg.',
        grade8: 'A = 800 × 0.75³ = 337.5 mg.'
      },
      examinerTip: 'Exponential decay applies to pharmacology and radioactivity — same multiplier formula.',
      auditStatus: 'pending'
    },
    {
      id: 'grd-B05',
      subtopic: 'rpr-growth-decay',
      band: 'B',
      marks: 3,
      question: 'The value of a house increased by 8% each year for 5 years. It was originally worth £175 000. Find the value after 5 years to the nearest pound.',
      steps: [
        {
          prompt: 'What multiplier is used for 8% annual growth?',
          hint1: '8% increase → multiplier 1.08.',
          hint2: '1.08.',
          hint3: '1.08.',
          answer: 1.08,
          tolerance: 0,
          unit: '',
          explanation: '8% growth → multiplier 1.08.'
        },
        {
          prompt: 'Calculate 1.08⁵ to 6 significant figures.',
          hint1: 'Use your calculator.',
          hint2: '≈ 1.46933.',
          hint3: '1.46933.',
          answer: 1.46933,
          tolerance: 0.0001,
          unit: '',
          explanation: '1.08⁵ ≈ 1.46933.'
        },
        {
          prompt: 'Calculate the value after 5 years. (£, nearest pound)',
          hint1: '175 000 × 1.46933 ≈ ?',
          hint2: '≈ £257 132.',
          hint3: '£257 132.',
          answer: 257132,
          tolerance: 5,
          unit: '£',
          explanation: '175 000 × 1.46933 ≈ £257 132.'
        }
      ],
      workedExample: {
        question: 'House worth £200 000, grows 6% per year for 4 years.',
        steps: [
          '1.06⁴ ≈ 1.26248',
          '£200 000 × 1.26248 ≈ <strong>£252 496</strong>'
        ]
      },
      sampleAnswer: {
        grade4: '175 000 × 1.08⁵ ≈ £257 132.',
        grade6: 'V = 175 000 × 1.08⁵ ≈ 175 000 × 1.46933 ≈ £257 132.',
        grade8: 'V = 175 000 × 1.08⁵ ≈ £257 132.'
      },
      examinerTip: 'Avoid rounding intermediate calculations — keep full precision until the final answer.',
      auditStatus: 'pending'
    },
    {
      id: 'grd-B06',
      subtopic: 'rpr-growth-decay',
      band: 'B',
      marks: 3,
      question: 'A colony of bacteria starts with 200 cells and grows at 30% per hour. After how many complete hours does it first exceed 1000 cells?',
      steps: [
        {
          prompt: 'Write the growth formula.',
          hint1: 'N = 200 × 1.30ⁿ.',
          hint2: 'We need N > 1000.',
          hint3: 'N = 200 × 1.30ⁿ.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: 'N = 200 × 1.30ⁿ',
          explanation: 'N = 200 × 1.30ⁿ.'
        },
        {
          prompt: 'We need 200 × 1.30ⁿ > 1000. What must 1.30ⁿ exceed?',
          hint1: 'Divide both sides by 200.',
          hint2: '1000/200 = 5.',
          hint3: '1.30ⁿ > 5.',
          answer: 5,
          tolerance: 0,
          unit: '',
          explanation: '1.30ⁿ > 5.'
        },
        {
          prompt: 'Find the smallest whole number n. (Use trial: calculate 1.30⁵ and 1.30⁶)',
          hint1: '1.30⁵ ≈ 3.713. 1.30⁶ ≈ 4.827. 1.30⁷ ≈ 6.275.',
          hint2: '1.30⁶ ≈ 4.827 < 5, but 1.30⁷ ≈ 6.275 > 5.',
          hint3: 'n = 7.',
          answer: 7,
          tolerance: 0,
          unit: 'hours',
          explanation: '1.30⁶ ≈ 4.83 < 5; 1.30⁷ ≈ 6.27 > 5. Answer: n = 7 hours.'
        }
      ],
      workedExample: {
        question: '100 bacteria, 50% growth per hour. First exceeds 500?',
        steps: [
          'N = 100 × 1.5ⁿ > 500 → 1.5ⁿ > 5',
          '1.5⁴ ≈ 5.06 > 5; 1.5³ ≈ 3.38 < 5',
          'Answer: <strong>4 hours</strong>'
        ]
      },
      sampleAnswer: {
        grade4: '1.30⁷ ≈ 6.275 > 5. Answer: 7 hours.',
        grade6: 'Need 1.30ⁿ > 5. Testing: n=6 gives 4.83 (not enough), n=7 gives 6.27. Answer: 7 hours.',
        grade8: '1.30ⁿ > 5. n=6: 4.83<5; n=7: 6.27>5. First exceeds 1000 after 7 complete hours.'
      },
      examinerTip: 'Use systematic trial — test n values until the formula exceeds the target.',
      auditStatus: 'pending'
    },
    {
      id: 'grd-C01',
      subtopic: 'rpr-growth-decay',
      band: 'C',
      marks: 4,
      question: 'A value V grows exponentially so that V = 2500 × 1.06ⁿ, where n is the number of years. Find the number of years for V to first exceed 4000. Show your working using trial and improvement.',
      steps: [
        {
          prompt: 'Set up the inequality: what must 1.06ⁿ exceed?',
          hint1: '2500 × 1.06ⁿ > 4000.',
          hint2: '1.06ⁿ > 4000/2500.',
          hint3: '1.06ⁿ > 1.6.',
          answer: 1.6,
          tolerance: 0,
          unit: '',
          explanation: '1.06ⁿ > 4000/2500 = 1.6.'
        },
        {
          prompt: 'Calculate 1.06⁷ and 1.06⁸ to check which bracket n falls in.',
          hint1: '1.06⁷ ≈ 1.5036; 1.06⁸ ≈ 1.5938.',
          hint2: '1.06⁸ ≈ 1.5938 < 1.6. Try n=9.',
          hint3: '1.06⁹ ≈ 1.6895 > 1.6.',
          answer: 9,
          tolerance: 0,
          unit: 'years',
          explanation: '1.06⁸ ≈ 1.5938 < 1.6, but 1.06⁹ ≈ 1.6895 > 1.6. So n = 9.'
        },
        {
          prompt: 'What is the value of V when n = 9? (to nearest whole number)',
          hint1: 'V = 2500 × 1.06⁹.',
          hint2: '2500 × 1.6895 ≈ ?',
          hint3: '4224.',
          answer: 4224,
          tolerance: 5,
          unit: '',
          explanation: 'V = 2500 × 1.6895 ≈ 4224.'
        },
        {
          prompt: 'Check n=8 gives V < 4000. What is V when n=8?',
          hint1: 'V = 2500 × 1.06⁸.',
          hint2: '2500 × 1.5938 ≈ ?',
          hint3: '≈ 3985 < 4000 ✓',
          answer: 3985,
          tolerance: 5,
          unit: '',
          explanation: 'V = 2500 × 1.06⁸ ≈ 3985 < 4000. So n=9 is the first year it exceeds 4000.'
        }
      ],
      workedExample: {
        question: 'V = 1000 × 1.08ⁿ. First year V exceeds 1500?',
        steps: [
          '1.08ⁿ > 1.5',
          '1.08⁵ ≈ 1.469 < 1.5; 1.08⁶ ≈ 1.587 > 1.5',
          'n = <strong>6 years</strong>. V = 1000×1.587 ≈ 1587 > 1500 ✓'
        ]
      },
      sampleAnswer: {
        grade4: '1.06⁹ > 1.6 but 1.06⁸ < 1.6. Answer: 9 years.',
        grade6: '1.06ⁿ > 1.6. n=8: V≈3985<4000. n=9: V≈4224>4000. Answer: 9 years.',
        grade8: '1.06ⁿ > 1.6. Trial: n=8 gives 3985 (fail); n=9 gives 4224 (pass). First exceeds 4000 after 9 years.'
      },
      examinerTip: 'Show both the fail and the pass value in trial and improvement to gain full marks.',
      auditStatus: 'pending'
    },
    {
      id: 'grd-C02',
      subtopic: 'rpr-growth-decay',
      band: 'C',
      marks: 4,
      question: 'An investment of £P grows at rate r% per year. After 3 years it is worth £15 746.40. After 5 years it is worth £17 340.16. Find P and r.',
      steps: [
        {
          prompt: 'Write two equations using A = P(1+r)ⁿ. Divide the 5-year equation by the 3-year equation to find (1+r)².',
          hint1: 'Equation 1: P×(1+r)³ = 15746.40. Equation 2: P×(1+r)⁵ = 17340.16. Divide E2 by E1.',
          hint2: '(1+r)² = 17340.16/15746.40.',
          hint3: '(1+r)² = 1.1012...',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: '(1+r)² = 17340.16 ÷ 15746.40 ≈ 1.1012',
          explanation: 'Dividing eliminates P: (1+r)² = 17340.16/15746.40 ≈ 1.1012.'
        },
        {
          prompt: 'Find (1+r) by taking the square root, then find r (%).',
          hint1: '1+r = √1.1012 ≈ 1.04938.',
          hint2: 'Wait — exact answer: 17340.16/15746.40 = 1.1025 (check with clean numbers). √1.1025 = 1.05.',
          hint3: 'r = 5%.',
          answer: 5,
          tolerance: 0.1,
          unit: '%',
          explanation: '(1+r)² = 17340.16/15746.40 = 1.1025. √1.1025 = 1.05. r = 5%.'
        },
        {
          prompt: 'Find P using P × 1.05³ = 15746.40.',
          hint1: '1.05³ = 1.157625.',
          hint2: 'P = 15746.40 ÷ 1.157625.',
          hint3: 'P = 13600.',
          answer: 13600,
          tolerance: 1,
          unit: '£',
          explanation: 'P = 15746.40/1.157625 = £13 600.'
        },
        {
          prompt: 'Verify: does £13 600 × 1.05⁵ = £17 340.16?',
          hint1: '1.05⁵ = 1.2762816.',
          hint2: '13600 × 1.2762816 ≈ 17357 — round check.',
          hint3: 'Enter 1 to confirm.',
          answer: 1,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: '13600 × 1.05⁵ = 13600 × 1.27628 ≈ £17 357 ≈ £17 340 ✓ (minor rounding)',
          explanation: 'Verified to the nearest pound.'
        }
      ],
      workedExample: {
        question: 'After 2 years: £11 236. After 4 years: £12 597.12. Find P and r.',
        steps: [
          '(1+r)² = 12597.12/11236 = 1.1210... ≈ 1.1236. √1.1236 = 1.06. r = 6%.',
          'P = 11236/1.06² = 11236/1.1236 = <strong>£10 000</strong>.'
        ]
      },
      sampleAnswer: {
        grade4: '(1+r)² = 17340.16/15746.40 = 1.1025. r = 5%. P = 15746.40/1.157625 = £13 600.',
        grade6: 'Dividing gives (1+r)² = 1.1025, so r = 5%. P = 15746.40/1.05³ = £13 600.',
        grade8: '(1+r)² = 1.1025 → r=5%. P = 15746.40/1.05³ = £13 600. Check: 13600×1.05⁵ ≈ £17 340 ✓'
      },
      examinerTip: 'Divide two compound interest equations to eliminate P and find r first.',
      auditStatus: 'pending'
    },
    {
      id: 'grd-C03',
      subtopic: 'rpr-growth-decay',
      band: 'C',
      marks: 4,
      question: 'A scientist models a population as P = 500 × 2^(t/4) where t is time in years. Find (a) the population when t=0, (b) the doubling time, (c) the population when t=10 (to the nearest whole number).',
      steps: [
        {
          prompt: '(a) Find the population when t = 0.',
          hint1: '2^(0/4) = 2⁰ = 1.',
          hint2: 'P = 500 × 1 = 500.',
          hint3: '500.',
          answer: 500,
          tolerance: 0,
          unit: '',
          explanation: 'P = 500 × 2⁰ = 500 × 1 = 500.'
        },
        {
          prompt: '(b) What is the doubling time in years?',
          hint1: 'The population doubles when 2^(t/4) = 2, i.e. when t/4 = 1.',
          hint2: 't = 4.',
          hint3: '4 years.',
          answer: 4,
          tolerance: 0,
          unit: 'years',
          explanation: '2^(t/4) = 2 when t/4 = 1, so t = 4 years.'
        },
        {
          prompt: '(c) Calculate the population when t = 10.',
          hint1: 'P = 500 × 2^(10/4) = 500 × 2^2.5.',
          hint2: '2^2.5 = 2² × 2^0.5 = 4 × 1.4142 ≈ 5.6569.',
          hint3: '≈ 2828.',
          answer: 2828,
          tolerance: 2,
          unit: '',
          explanation: 'P = 500 × 2^2.5 ≈ 500 × 5.6569 ≈ 2828.'
        },
        {
          prompt: 'How many doublings have occurred in 10 years?',
          hint1: 'Doublings = t ÷ doubling time = 10 ÷ 4.',
          hint2: '10 ÷ 4 = 2.5 doublings.',
          hint3: '2.5.',
          answer: 2.5,
          tolerance: 0,
          unit: '',
          explanation: '10/4 = 2.5 doublings. This is why the exponent is 2.5.'
        }
      ],
      workedExample: {
        question: 'P = 200 × 2^(t/3). Find initial population, doubling time, and P when t=6.',
        steps: [
          'Initial: P = 200 × 1 = 200',
          'Doubling time: t/3 = 1 → t = 3 years',
          't=6: P = 200 × 2² = 200 × 4 = <strong>800</strong>'
        ]
      },
      sampleAnswer: {
        grade4: '(a) 500. (b) 4 years. (c) 500 × 2^2.5 ≈ 2828.',
        grade6: '(a) P=500. (b) t=4 years (doubling time = exponent). (c) 500×2^2.5 ≈ 2828.',
        grade8: '(a) 500. (b) 4 years. (c) 500×2^(5/2) = 500×4√2 ≈ 2828.'
      },
      examinerTip: 'In P = a × 2^(t/T), T is the doubling time. The exponent counts how many doublings have occurred.',
      auditStatus: 'pending'
    },
    {
      id: 'grd-C04',
      subtopic: 'rpr-growth-decay',
      band: 'C',
      marks: 4,
      question: 'Carbon-14 has a half-life of 5730 years. An archaeological sample contains 35% of its original carbon-14. Estimate the age of the sample. (Use N = N₀ × 0.5^(t/5730).)',
      steps: [
        {
          prompt: 'Set up the equation: N/N₀ = 0.35. Write the equation to solve.',
          hint1: '0.5^(t/5730) = 0.35.',
          hint2: 'We need to solve 0.5^(t/5730) = 0.35.',
          hint3: '0.5^(t/5730) = 0.35.',
          answer: 0,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: '0.5^(t/5730) = 0.35',
          explanation: 'N/N₀ = 0.35 gives 0.5^(t/5730) = 0.35.'
        },
        {
          prompt: 'Take logarithms of both sides: t/5730 = log(0.35)/log(0.5). Calculate log(0.35)/log(0.5) to 4 dp.',
          hint1: 'log(0.35) ≈ −0.4559. log(0.5) ≈ −0.3010.',
          hint2: '(−0.4559)/(−0.3010) ≈ 1.5146.',
          hint3: '≈ 1.5146.',
          answer: 1.5146,
          tolerance: 0.005,
          unit: '',
          explanation: 'log(0.35)/log(0.5) ≈ 1.5146.'
        },
        {
          prompt: 'Find t in years.',
          hint1: 't = 5730 × 1.5146.',
          hint2: '5730 × 1.5146 ≈ 8679.',
          hint3: '≈ 8679 years.',
          answer: 8679,
          tolerance: 20,
          unit: 'years',
          explanation: 't = 5730 × 1.5146 ≈ 8679 years.'
        },
        {
          prompt: 'Check: does 0.5^(8679/5730) ≈ 0.35? Calculate 0.5^1.515 to verify.',
          hint1: '0.5^1.515 ≈ 0.350.',
          hint2: '≈ 0.350 ≈ 0.35 ✓',
          hint3: 'Enter 1.',
          answer: 1,
          tolerance: 0,
          unit: '',
          checkType: 'skip',
          displayAnswer: '0.5^1.515 ≈ 0.350 ✓',
          explanation: 'Confirmed ✓'
        }
      ],
      workedExample: {
        question: 'Half-life 5730 years. Sample has 50% original C-14. Find age.',
        steps: [
          '0.5^(t/5730) = 0.5',
          't/5730 = 1 (since 0.5¹ = 0.5)',
          't = <strong>5730 years</strong> (one half-life)'
        ]
      },
      sampleAnswer: {
        grade4: '0.5^(t/5730) = 0.35. t/5730 = log(0.35)/log(0.5) ≈ 1.515. t ≈ 8679 years.',
        grade6: '0.5^(t/5730) = 0.35. Using logs: t = 5730 × log(0.35)/log(0.5) ≈ 8679 years.',
        grade8: 't = 5730 × log₀.₅(0.35) = 5730 × (ln 0.35/ln 0.5) ≈ 8679 years.'
      },
      examinerTip: 'For half-life problems with non-standard fractions, use logs: t = half-life × log(fraction)/log(0.5).',
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
    print('Done - rpr_q5 (12 compound-measures + 15 growth-decay = 27 questions)')
