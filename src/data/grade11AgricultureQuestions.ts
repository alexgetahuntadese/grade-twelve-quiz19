
export interface AgricultureQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade11AgricultureQuestions: { [chapter: string]: AgricultureQuestion[] } = {
  'Unit 1: Introduction to Crop Production': [
    {
      id: 'agr11_u1_e1',
      question: 'What is crop production?',
      options: ['The cultivation of plants for food and other uses', 'Animal breeding', 'Soil testing', 'Water management'],
      correct: 'The cultivation of plants for food and other uses',
      explanation: 'Crop production is the practice of growing plants for food, fiber, fuel, and other agricultural products.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_u1_m1',
      question: 'Which factors are essential for successful crop production?',
      options: ['Climate, soil, water, and seeds', 'Only water and soil', 'Only climate', 'Only good seeds'],
      correct: 'Climate, soil, water, and seeds',
      explanation: 'Successful crop production requires optimal climate conditions, fertile soil, adequate water supply, and quality seeds.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_u1_h1',
      question: 'What is the difference between subsistence and commercial farming?',
      options: ['Subsistence is for family consumption, commercial is for market sale', 'No difference', 'Commercial uses more water', 'Subsistence uses modern technology'],
      correct: 'Subsistence is for family consumption, commercial is for market sale',
      explanation: 'Subsistence farming is primarily for family consumption while commercial farming focuses on producing crops for market sale and profit.',
      difficulty: 'Hard'
    }
  ],
  'Unit 2: Field Crops Production and Management': [
    {
      id: 'agr11_u2_e1',
      question: 'What are field crops?',
      options: ['Crops grown in large fields like cereals and legumes', 'Garden vegetables', 'Fruit trees', 'Flowers'],
      correct: 'Crops grown in large fields like cereals and legumes',
      explanation: 'Field crops are plants grown extensively in large fields, including cereals like wheat, maize, and legumes like beans.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_u2_m1',
      question: 'What is crop rotation?',
      options: ['Growing different crops in sequence on the same land', 'Turning crops upside down', 'Moving crops to different locations', 'Harvesting at different times'],
      correct: 'Growing different crops in sequence on the same land',
      explanation: 'Crop rotation involves growing different types of crops in a planned sequence on the same land to maintain soil fertility and reduce pest problems.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_u2_h1',
      question: 'Why is nitrogen fixation important in legume crops?',
      options: ['It enriches soil with nitrogen naturally', 'It makes crops grow faster', 'It prevents diseases', 'It increases water retention'],
      correct: 'It enriches soil with nitrogen naturally',
      explanation: 'Legumes have symbiotic bacteria in their root nodules that fix atmospheric nitrogen, enriching the soil naturally and reducing the need for nitrogen fertilizers.',
      difficulty: 'Hard'
    }
  ],
  'Unit 3: Industrial Crops Production and Management': [
    {
      id: 'agr11_u3_e1',
      question: 'What are industrial crops?',
      options: ['Crops grown for industrial purposes like cotton and sugarcane', 'Crops grown in factories', 'Crops for home use', 'Wild plants'],
      correct: 'Crops grown for industrial purposes like cotton and sugarcane',
      explanation: 'Industrial crops are grown primarily for industrial processing rather than direct consumption, including cotton, sugarcane, and oil seeds.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_u3_m1',
      question: 'Which of these is an example of an industrial crop in Ethiopia?',
      options: ['Cotton', 'Tomato', 'Lettuce', 'Apple'],
      correct: 'Cotton',
      explanation: 'Cotton is a major industrial crop in Ethiopia, grown for textile production and export.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_u3_h1',
      question: 'What are the main challenges in industrial crop production?',
      options: ['Market fluctuations, processing requirements, and quality standards', 'Only weather problems', 'Only soil issues', 'Only pest problems'],
      correct: 'Market fluctuations, processing requirements, and quality standards',
      explanation: 'Industrial crops face complex challenges including volatile market prices, specific processing requirements, and strict quality standards for industrial use.',
      difficulty: 'Hard'
    }
  ],
  'Unit 4: Introduction to Farm Animals': [
    {
      id: 'agr11_u4_e1',
      question: 'What are farm animals?',
      options: ['Domesticated animals raised for agricultural purposes', 'Wild animals', 'Pet animals only', 'Zoo animals'],
      correct: 'Domesticated animals raised for agricultural purposes',
      explanation: 'Farm animals are domesticated animals raised specifically for agricultural production including meat, milk, eggs, and other products.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_u4_m1',
      question: 'Which animals are commonly raised in Ethiopian agriculture?',
      options: ['Cattle, sheep, goats, and chickens', 'Only cattle', 'Only chickens', 'Tigers and lions'],
      correct: 'Cattle, sheep, goats, and chickens',
      explanation: 'Ethiopia has diverse livestock including cattle, sheep, goats, chickens, and other animals that contribute significantly to agriculture.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_u4_h1',
      question: 'What is the importance of livestock in mixed farming systems?',
      options: ['Provides manure, income diversification, and soil fertility', 'Only for meat production', 'Only for transportation', 'Only for companionship'],
      correct: 'Provides manure, income diversification, and soil fertility',
      explanation: 'In mixed farming systems, livestock provides multiple benefits including organic manure for crops, income diversification, and improved soil fertility through integrated management.',
      difficulty: 'Hard'
    }
  ],
  'Unit 5: Animal Feeds and Feeding Practices': [
    {
      id: 'agr11_u5_e1',
      question: 'What is animal feed?',
      options: ['Food given to animals for nutrition', 'Water for animals', 'Medicine for animals', 'Shelter for animals'],
      correct: 'Food given to animals for nutrition',
      explanation: 'Animal feed is any nutritious substance provided to animals to meet their dietary requirements for growth, maintenance, and production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_u5_m1',
      question: 'What are the main types of animal feeds?',
      options: ['Roughages, concentrates, and supplements', 'Only grass', 'Only grain', 'Only water'],
      correct: 'Roughages, concentrates, and supplements',
      explanation: 'Animal feeds are classified into roughages (high fiber feeds like hay), concentrates (high energy feeds like grains), and supplements (vitamins and minerals).',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_u5_h1',
      question: 'How does balanced nutrition affect animal productivity?',
      options: ['Improves growth, reproduction, and disease resistance', 'Only affects growth', 'Has no effect', 'Only affects appetite'],
      correct: 'Improves growth, reproduction, and disease resistance',
      explanation: 'Balanced nutrition is crucial for optimal animal performance, affecting growth rates, reproductive efficiency, milk production, and immune system function.',
      difficulty: 'Hard'
    }
  ],
  'Unit 6: Animal Genetics and Breeding Practices': [
    {
      id: 'agr11_u6_e1',
      question: 'What is selective breeding?',
      options: ['Choosing parents with desirable traits to breed', 'Randomly breeding animals', 'Breeding only one species', 'Crossing wild animals'],
      correct: 'Choosing parents with desirable traits to breed',
      explanation: 'Selective breeding involves choosing parents with desired traits to produce offspring with improved characteristics.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_u6_m1',
      question: 'Which genetic principle explains trait inheritance?',
      options: ['Mendelian genetics', 'Quantum theory', 'Plate tectonics', 'Photosynthesis'],
      correct: 'Mendelian genetics',
      explanation: 'Mendelian genetics describes how traits are inherited through dominant and recessive alleles.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_u6_h1',
      question: 'What is heterosis (hybrid vigor)?',
      options: ['Increased performance in crossbred offspring', 'Decrease in growth due to crossing', 'A disease in animals', 'A method of feeding'],
      correct: 'Increased performance in crossbred offspring',
      explanation: 'Heterosis occurs when crossbred animals show superior traits compared to their parents.',
      difficulty: 'Hard'
    }
  ],
  'Unit 7: Farm Animals Housing': [
    {
      id: 'agr11_u7_e1',
      question: 'Why is proper ventilation important in animal housing?',
      options: ['To remove heat and moisture', 'To keep animals in darkness', 'To increase noise', 'To reduce feeding'],
      correct: 'To remove heat and moisture',
      explanation: 'Ventilation removes heat, moisture, and harmful gases, keeping animals healthy and comfortable.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_u7_m1',
      question: 'Which factor is essential in designing animal housing?',
      options: ['Space per animal', 'Wall color', 'Music', 'Scent'],
      correct: 'Space per animal',
      explanation: 'Adequate space per animal prevents stress and disease and supports growth and productivity.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_u7_h1',
      question: 'What is biosecurity in animal housing?',
      options: ['Practices to prevent disease entry and spread', 'A type of feed', 'A ventilation method', 'A breeding technique'],
      correct: 'Practices to prevent disease entry and spread',
      explanation: 'Biosecurity includes sanitation, visitor controls, and quarantine to reduce disease risks.',
      difficulty: 'Hard'
    }
  ],
  'Unit 8: Basic Animal Health and Disease Control': [
    {
      id: 'agr11_u8_e1',
      question: 'What is vaccination?',
      options: ['Giving a vaccine to prevent disease', 'Feeding more food', 'Providing shelter', 'Giving water'],
      correct: 'Giving a vaccine to prevent disease',
      explanation: 'Vaccination helps an animal’s immune system recognize and fight specific diseases.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_u8_m1',
      question: 'Which is a sign of illness in livestock?',
      options: ['Loss of appetite and lethargy', 'Active grazing', 'Bright eyes', 'Normal movement'],
      correct: 'Loss of appetite and lethargy',
      explanation: 'Ill animals often show reduced appetite, drooping ears, and reduced activity.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_u8_h1',
      question: 'What is quarantine in disease control?',
      options: ['Separating sick animals to prevent spread', 'Feeding additional minerals', 'Changing housing color', 'Mixing animals from different farms'],
      correct: 'Separating sick animals to prevent spread',
      explanation: 'Quarantine isolates diseased or new animals to prevent transmission to the herd.',
      difficulty: 'Hard'
    }
  ],
  'Unit 9: Dairy Cattle Production and Management': [
    {
      id: 'agr11_u9_e1',
      question: 'Which breed is commonly used for dairy production?',
      options: ['Holstein-Friesian', 'Duroc', 'Merino', 'Boer'],
      correct: 'Holstein-Friesian',
      explanation: 'Holstein-Friesians are high-yield dairy cattle widely used globally.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_u9_m1',
      question: 'What is colostrum?',
      options: ['First milk rich in antibodies', 'A type of fodder', 'A breed of cattle', 'A disease'],
      correct: 'First milk rich in antibodies',
      explanation: 'Colostrum provides essential antibodies to newborn calves in the first hours of life.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_u9_h1',
      question: 'Which practice helps prevent mastitis?',
      options: ['Proper milking hygiene', 'Feeding only roughage', 'Keeping cows in darkness', 'Reducing water intake'],
      correct: 'Proper milking hygiene',
      explanation: 'Clean milking procedures and teat dipping reduce mastitis risk.',
      difficulty: 'Hard'
    }
  ],
  'Unit 10: Introduction to Natural Resources': [
    {
      id: 'agr11_u10_e1',
      question: 'What are natural resources?',
      options: ['Materials from nature that people use', 'Man-made tools only', 'Only minerals', 'Only forests'],
      correct: 'Materials from nature that people use',
      explanation: 'Natural resources include water, soil, forests, minerals, and wildlife.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_u10_m1',
      question: 'Which is a renewable resource?',
      options: ['Forests', 'Coal', 'Oil', 'Natural gas'],
      correct: 'Forests',
      explanation: 'Renewable resources can replenish naturally over time, such as forests and water.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_u10_h1',
      question: 'What is sustainable resource management?',
      options: ['Using resources without depleting them for future generations', 'Using as fast as possible', 'Avoiding all use', 'Exporting resources only'],
      correct: 'Using resources without depleting them for future generations',
      explanation: 'Sustainability balances current needs with conservation for the future.',
      difficulty: 'Hard'
    }
  ],
  'Unit 11: Management of Natural Resources': [
    {
      id: 'agr11_u11_e1',
      question: 'What does watershed management focus on?',
      options: ['Managing land and water in a drainage area', 'Managing only forests', 'Only building dams', 'Only planting trees'],
      correct: 'Managing land and water in a drainage area',
      explanation: 'Watershed management integrates land, water, and vegetation to protect resources.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_u11_m1',
      question: 'Which practice reduces soil erosion?',
      options: ['Terracing and contour plowing', 'Overgrazing', 'Deforestation', 'Burning crop residues'],
      correct: 'Terracing and contour plowing',
      explanation: 'Terraces and contour lines slow runoff and reduce soil loss on slopes.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_u11_h1',
      question: 'What is integrated natural resource management (INRM)?',
      options: ['Coordinated management of land, water, and biodiversity', 'Managing only wildlife', 'Exporting resources', 'Mining planning'],
      correct: 'Coordinated management of land, water, and biodiversity',
      explanation: 'INRM optimizes resource use while preserving ecosystems and livelihoods.',
      difficulty: 'Hard'
    }
  ],
  'Unit 12: Concepts of Biodiversity': [
    {
      id: 'agr11_u12_e1',
      question: 'What is biodiversity?',
      options: ['Variety of life at genetic, species, and ecosystem levels', 'Only number of species', 'Only plant diversity', 'Only animal diversity'],
      correct: 'Variety of life at genetic, species, and ecosystem levels',
      explanation: 'Biodiversity includes diversity within species, between species, and of ecosystems.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_u12_m1',
      question: 'Which factor threatens biodiversity?',
      options: ['Habitat loss', 'Sustainable use', 'Conservation areas', 'Community forestry'],
      correct: 'Habitat loss',
      explanation: 'Deforestation, fragmentation, and pollution reduce biodiversity.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_u12_h1',
      question: 'What is in-situ conservation?',
      options: ['Protecting species in their natural habitats', 'Breeding in zoos only', 'Seed banks only', 'Hunting bans only'],
      correct: 'Protecting species in their natural habitats',
      explanation: 'In-situ conserves ecosystems and natural habitats where species live.',
      difficulty: 'Hard'
    }
  ],
  'Unit 13: Climate Change Adaptation and Mitigation': [
    {
      id: 'agr11_u13_e1',
      question: 'What is climate change adaptation?',
      options: ['Adjusting to actual or expected climate effects', 'Stopping all emissions at once', 'Only planting trees', 'Ignoring weather data'],
      correct: 'Adjusting to actual or expected climate effects',
      explanation: 'Adaptation reduces vulnerability to climate impacts like droughts and floods.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_u13_m1',
      question: 'Which is an example of mitigation in agriculture?',
      options: ['Adopting conservation tillage', 'Overusing fertilizers', 'Burning residues', 'Deforestation'],
      correct: 'Adopting conservation tillage',
      explanation: 'Mitigation reduces greenhouse gas emissions or enhances carbon sinks.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_u13_h1',
      question: 'What is climate-smart agriculture (CSA)?',
      options: ['Approach that increases productivity, resilience, and reduces emissions', 'Only irrigation expansion', 'Only growing cash crops', 'Stopping livestock production'],
      correct: 'Approach that increases productivity, resilience, and reduces emissions',
      explanation: 'CSA integrates practices that sustainably increase productivity and resilience while lowering emissions.',
      difficulty: 'Hard'
    }
  ],
  'Unit 14: Mechanized Farming': [
    {
      id: 'agr11_u14_e1',
      question: 'What is mechanized farming?',
      options: ['Use of machinery to perform farm operations', 'Manual farming only', 'Use of animals only', 'Farming without tools'],
      correct: 'Use of machinery to perform farm operations',
      explanation: 'Mechanization improves efficiency and timeliness of agricultural operations.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_u14_m1',
      question: 'Which is a disadvantage of over-mechanization?',
      options: ['Soil compaction', 'Increased biodiversity', 'Lower productivity', 'Better soil aeration'],
      correct: 'Soil compaction',
      explanation: 'Heavy machinery can compact soils, reducing infiltration and root growth.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_u14_h1',
      question: 'Which factor should be considered when selecting farm machinery?',
      options: ['Farm size and operation needs', 'Color of the machine', 'Brand popularity only', 'Music system'],
      correct: 'Farm size and operation needs',
      explanation: 'Machine selection should match field size, tasks, and economic viability.',
      difficulty: 'Hard'
    }
  ],
  'Unit 15: Introduction to Human Nutrition': [
    {
      id: 'agr11_u15_e1',
      question: 'What are macronutrients?',
      options: ['Nutrients needed in large amounts like carbohydrates, proteins, fats', 'Only vitamins', 'Only minerals', 'Only water'],
      correct: 'Nutrients needed in large amounts like carbohydrates, proteins, fats',
      explanation: 'Macronutrients provide energy and are required in larger quantities.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_u15_m1',
      question: 'Which deficiency causes anemia?',
      options: ['Iron deficiency', 'Excess vitamin C', 'Too much protein', 'High fiber intake'],
      correct: 'Iron deficiency',
      explanation: 'Iron-deficiency anemia reduces red blood cell capacity to carry oxygen.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_u15_h1',
      question: 'What is a balanced diet?',
      options: ['Diet providing all nutrients in proper proportions', 'Only carbohydrate-rich foods', 'Only high-fat foods', 'Only plant-based foods'],
      correct: 'Diet providing all nutrients in proper proportions',
      explanation: 'Balanced diets include variety to meet macro- and micronutrient needs.',
      difficulty: 'Hard'
    }
  ],
  'Unit 16: Diversified Food Production and Consumption': [
    {
      id: 'agr11_u16_e1',
      question: 'What does food diversification mean?',
      options: ['Including a variety of food groups in the diet', 'Eating only one type of food', 'Skipping meals', 'Eating only snacks'],
      correct: 'Including a variety of food groups in the diet',
      explanation: 'Diversification improves nutrient intake and dietary quality.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_u16_m1',
      question: 'Which practice supports diversified food production on small farms?',
      options: ['Intercropping and home gardens', 'Monocropping only', 'Leaving land fallow always', 'Relying on imports'],
      correct: 'Intercropping and home gardens',
      explanation: 'Intercropping and gardens increase food variety and resilience.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_u16_h1',
      question: 'What is the link between diet diversity and health?',
      options: ['Higher diversity reduces micronutrient deficiencies', 'No relation', 'Diversity causes disease', 'Only calories matter'],
      correct: 'Higher diversity reduces micronutrient deficiencies',
      explanation: 'Diet diversity is associated with better micronutrient adequacy and health outcomes.',
      difficulty: 'Hard'
    }
  ]
};


export const getGrade11AgricultureQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): AgricultureQuestion[] => {
  const chapterQuestions = grade11AgricultureQuestions[chapter] || [];
  const difficultyMap = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  const targetDifficulty = difficultyMap[difficulty];
  
  const filteredQuestions = chapterQuestions.filter(q => q.difficulty === targetDifficulty);
  
  // Shuffle and return requested count
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
