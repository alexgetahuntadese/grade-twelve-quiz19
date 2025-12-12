
export interface Grade11Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  chapters: string[];
  category: 'Natural Sciences' | 'Social Sciences' | 'Mathematics' | 'Languages' | 'Other';
}

export const grade11Subjects: Grade11Subject[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: 'Calculator',
    description: 'Advanced mathematical concepts including algebra, geometry, and trigonometry',
    chapters: [], // Empty - ready for chapters to be added
    category: 'Mathematics'
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: 'Atom',
    description: 'Fundamental principles of physics including mechanics, waves, and electricity',
    chapters: [
      'Chapter 1: Mechanics',
      'Chapter 2: Waves and Sound',
      'Chapter 3: Heat and Thermodynamics',
      'Chapter 4: Electricity and Magnetism',
      'Chapter 5: Optics',
      'Chapter 6: Modern Physics'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: 'Flask',
    description: 'Chemical principles, reactions, and laboratory techniques',
    chapters: [
      'Chapter 1: Atomic Structure',
      'Chapter 2: Chemical Bonding',
      'Chapter 3: States of Matter',
      'Chapter 4: Chemical Reactions',
      'Chapter 5: Acids and Bases',
      'Chapter 6: Organic Chemistry',
      'Chapter 7: Environmental Chemistry'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: 'Leaf',
    description: 'Study of living organisms, cells, genetics, and ecosystems',
    chapters: [
      'Unit 1: Biology and Technology',
      'Unit 2: Characteristics of animals',
      'Unit 3: Enzymes',
      'Unit 4: Genetics',
      'Unit 5: The human body systems',
      'Unit 6: Population and natural resources'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: 'Wheat',
    description: 'Agricultural practices, crop production, and animal husbandry',
    chapters: [
      'Unit 1: Introduction to Crop Production',
      'Unit 2: Field Crops Production and Management',
      'Unit 3: Industrial Crops Production and Management',
      'Unit 4: Introduction to Farm Animals',
      'Unit 5: Animal Feeds and Feeding Practices',
      'Unit 6: Animal Genetics and Breeding Practices',
      'Unit 7: Farm Animals Housing',
      'Unit 8: Basic Animal Health and Disease Control',
      'Unit 9: Dairy Cattle Production and Management',
      'Unit 10: Introduction to Natural Resources',
      'Unit 11: Management of Natural Resources',
      'Unit 12: Concepts of Biodiversity',
      'Unit 13: Climate Change Adaptation and Mitigation',
      'Unit 14: Mechanized Farming',
      'Unit 15: Introduction to Human Nutrition',
      'Unit 16: Diversified Food Production and Consumption'
    ],
    category: 'Other'
  },
  {
    id: 'english',
    name: 'English',
    icon: 'BookOpen',
    description: 'English language skills, literature, and communication',
    chapters: [
      'Chapter 1: Reading Comprehension',
      'Chapter 2: Grammar and Vocabulary',
      'Chapter 3: Writing Skills',
      'Chapter 4: Literature Analysis',
      'Chapter 5: Communication Skills',
      'Chapter 6: Critical Thinking'
    ],
    category: 'Languages'
  },
  {
    id: 'history',
    name: 'History',
    icon: 'Clock',
    description: 'Ethiopian and world history, civilizations, and historical analysis',
    chapters: [
      'Chapter 1: Ancient Civilizations',
      'Chapter 2: Medieval Period',
      'Chapter 3: Modern Ethiopian History',
      'Chapter 4: World Wars',
      'Chapter 5: Contemporary History',
      'Chapter 6: Historical Research Methods'
    ],
    category: 'Social Sciences'
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: 'Globe',
    description: 'Physical and human geography, mapping, and environmental studies',
    chapters: [
      'Chapter 1: Physical Geography',
      'Chapter 2: Human Geography',
      'Chapter 3: Cartography and GIS',
      'Chapter 4: Climate and Weather',
      'Chapter 5: Natural Resources',
      'Chapter 6: Environmental Issues'
    ],
    category: 'Social Sciences'
  }
];

export const getGrade11SubjectsByCategory = () => {
  const categories = ['Mathematics', 'Natural Sciences', 'Social Sciences', 'Languages', 'Other'];
  
  return categories.map(category => ({
    name: category,
    subjects: grade11Subjects.filter(subject => subject.category === category)
  })).filter(category => category.subjects.length > 0);
};
