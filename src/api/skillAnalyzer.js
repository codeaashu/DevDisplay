import { HfInference } from '@huggingface/inference';

// Initialize Hugging Face client
const hf = new HfInference('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');

// Common tech skills for zero-shot classification
const techSkills = [
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'Ruby',
  'Go',
  'React',
  'Angular',
  'Vue.js',
  'Node.js',
  'Django',
  'Flask',
  'AWS',
  'Azure',
  'GCP',
  'Docker',
  'Kubernetes',
  'SQL',
  'MongoDB',
  'PostgreSQL',
  'Redis',
  'Machine Learning',
  'Deep Learning',
  'Data Science',
  'System Design',
  'Microservices',
  'REST APIs',
  'Git',
  'CI/CD',
  'Agile',
  'Scrum',
];

// Soft skills for classification
const softSkills = [
  'Leadership',
  'Communication',
  'Problem Solving',
  'Team Management',
  'Project Management',
  'Strategic Thinking',
  'Mentoring',
  'Collaboration',
  'Time Management',
  'Critical Thinking',
  'Adaptability',
  'Innovation',
];

async function extractRelevantSkills(jobDescription) {
  try {
    const allSkills = [...techSkills, ...softSkills];

    const response = await hf.zeroShotClassification({
      model: 'facebook/bart-large-mnli',
      inputs: jobDescription,
      parameters: {
        candidate_labels: allSkills,
        multi_label: true,
      },
    });

    return response.labels.filter((_, index) => response.scores[index] > 0.3);
  } catch (error) {
    console.error('Error in skill extraction:', error);
    return [];
  }
}

async function getCompanyInsights(company) {
  try {
    const prompt = `Analyze ${company}'s company culture, technology stack, and growth areas.`;

    const response = await hf.textGeneration({
      model: 'gpt2',
      inputs: prompt,
      parameters: {
        max_length: 150,
        temperature: 0.7,
      },
    });

    const insights = response.generated_text.split('\n').filter(Boolean);

    return {
      culture: insights[0] || 'Innovation-driven culture focusing on collaboration and growth',
      techStack: techSkills.slice(0, 5),
      growthAreas: ['Cloud Computing', 'AI/ML', 'Distributed Systems'],
    };
  } catch (error) {
    console.error('Error getting company insights:', error);
    return {
      culture: 'Information not available',
      techStack: [],
      growthAreas: [],
    };
  }
}

async function generateCareerPathSteps(missingSkills, jobRole) {
  return [
    {
      timeframe: '0-3 months',
      focus: 'Foundation Building',
      resources: [
        'Online courses from Coursera or Udemy',
        'Practice projects on GitHub',
        'Technical documentation and blogs',
      ],
    },
    {
      timeframe: '3-6 months',
      focus: 'Skill Development',
      resources: ['Advanced certifications', 'Open source contributions', 'Industry-specific projects'],
    },
    {
      timeframe: '6-12 months',
      focus: 'Expertise Building',
      resources: ['System design practice', 'Technical leadership opportunities', 'Industry conference participation'],
    },
  ];
}

export async function analyzeCareerPath(jobGoal, currentSkills, targetCompany) {
  try {
    const normalizedCurrentSkills = currentSkills.map((skill) => skill.toLowerCase());

    const jobContext = `${jobGoal} position at ${targetCompany}. 
      Required skills and responsibilities include expertise in software development,
      technical leadership, and system design.`;

    const requiredSkills = await extractRelevantSkills(jobContext);
    const companyInsights = await getCompanyInsights(targetCompany);

    const allRequiredSkills = [...new Set([...requiredSkills, ...companyInsights.techStack])];

    const matchedSkills = allRequiredSkills.filter((skill) => normalizedCurrentSkills.includes(skill.toLowerCase()));

    const missingSkills = allRequiredSkills.filter((skill) => !normalizedCurrentSkills.includes(skill.toLowerCase()));

    const skillCategories = {
      technical: {
        matched: matchedSkills.filter((skill) => techSkills.includes(skill)),
        missing: missingSkills.filter((skill) => techSkills.includes(skill)),
      },
      soft: {
        matched: matchedSkills.filter((skill) => softSkills.includes(skill)),
        missing: missingSkills.filter((skill) => softSkills.includes(skill)),
      },
    };

    const compatibility = Math.round((matchedSkills.length / allRequiredSkills.length) * 100);

    const careerPathSteps = await generateCareerPathSteps(missingSkills, jobGoal);

    const recommendedPath = `Based on your current skills and career goals:
      1. Focus on strengthening ${skillCategories.technical.missing.slice(0, 3).join(', ')}
      2. Develop soft skills: ${skillCategories.soft.missing.slice(0, 2).join(', ')}
      3. Consider gaining experience in ${companyInsights.growthAreas.join(', ')}
      4. Follow the detailed learning path provided below`;

    return {
      compatibility: compatibility || 0,
      missingSkills,
      matchedSkills,
      skillCategories,
      recommendedPath,
      careerPathSteps,
      companyInsights,
    };
  } catch (error) {
    console.error('Error analyzing career path:', error);
    return {
      compatibility: 0,
      missingSkills: [],
      matchedSkills: [],
      skillCategories: {
        technical: { matched: [], missing: [] },
        soft: { matched: [], missing: [] },
      },
      recommendedPath: 'Unable to analyze career path at this time.',
      careerPathSteps: [],
      companyInsights: {
        culture: '',
        techStack: [],
        growthAreas: [],
      },
    };
  }
}
