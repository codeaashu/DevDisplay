// Simulated skill requirements for different roles
const skillRequirements = {
  'software engineer': ['javascript', 'python', 'react', 'node.js', 'sql', 'git', 'algorithms', 'system design'],
  'senior software engineer': [
    'javascript',
    'python',
    'react',
    'node.js',
    'sql',
    'git',
    'algorithms',
    'system design',
    'architecture',
    'leadership',
    'mentoring',
  ],
  'data scientist': ['python', 'sql', 'machine learning', 'statistics', 'data visualization', 'tensorflow', 'pytorch'],
  'product manager': [
    'agile',
    'scrum',
    'leadership',
    'communication',
    'analytics',
    'product strategy',
    'user research',
  ],
};

// Simulated company-specific requirements
const companyRequirements = {
  google: ['algorithms', 'system design', 'scalability', 'distributed systems'],
  microsoft: ['azure', 'cloud architecture', '.net', 'system design'],
  amazon: ['aws', 'distributed systems', 'scalability', 'microservices'],
  facebook: ['react', 'graphql', 'system design', 'scalability'],
  apple: ['swift', 'objective-c', 'metal', 'xcode'],
  netflix: ['microservices', 'java', 'distributed systems', 'cloud native'],
};

export async function analyzeCareerPath(jobGoal, currentSkills, targetCompany) {
  try {
    // Normalize inputs
    const normalizedJob = jobGoal.toLowerCase();
    const normalizedCompany = targetCompany.toLowerCase();
    const normalizedCurrentSkills = currentSkills.map((skill) => skill.toLowerCase());

    // Get base requirements for the role
    let requiredSkills = new Set();

    // Find the closest matching job title
    const jobMatch = Object.keys(skillRequirements).find((title) => normalizedJob.includes(title));

    if (jobMatch) {
      skillRequirements[jobMatch].forEach((skill) => requiredSkills.add(skill));
    }

    // Add company-specific requirements if available
    const companyMatch = Object.keys(companyRequirements).find((company) => normalizedCompany.includes(company));

    if (companyMatch) {
      companyRequirements[companyMatch].forEach((skill) => requiredSkills.add(skill));
    }

    // If no specific requirements found, use a default set
    if (requiredSkills.size === 0) {
      requiredSkills = new Set(['programming', 'problem solving', 'communication', 'teamwork', 'git', 'agile']);
    }

    // Convert to array for processing
    const allRequiredSkills = Array.from(requiredSkills);

    // Find missing skills
    const missingSkills = allRequiredSkills.filter((skill) => !normalizedCurrentSkills.includes(skill));

    // Calculate compatibility
    const compatibility = Math.round(
      ((allRequiredSkills.length - missingSkills.length) / allRequiredSkills.length) * 100,
    );

    // Generate recommended path
    const recommendedPath = generateRecommendedPath(missingSkills, normalizedJob, normalizedCompany);

    return {
      compatibility: compatibility || 0,
      missingSkills,
      recommendedPath,
    };
  } catch (error) {
    console.error('Error analyzing career path:', error);
    return {
      compatibility: 0,
      missingSkills: [],
      recommendedPath: 'Unable to analyze career path at this time.',
    };
  }
}

function generateRecommendedPath(missingSkills, jobRole, company) {
  if (missingSkills.length === 0) {
    return 'Your skill set aligns well with the job requirements. Focus on gaining more experience in your current skills.';
  }

  const recommendations = [];

  // Group skills by category
  const technicalSkills = missingSkills.filter((skill) =>
    [
      'javascript',
      'python',
      'java',
      'react',
      'angular',
      'vue',
      'node.js',
      'aws',
      'azure',
      'docker',
      'kubernetes',
      'sql',
      'nosql',
      'mongodb',
      'algorithms',
      'system design',
      'architecture',
      'swift',
      'objective-c',
      'graphql',
    ].includes(skill),
  );

  const softSkills = missingSkills.filter((skill) =>
    ['leadership', 'agile', 'scrum', 'communication', 'mentoring', 'product strategy', 'user research'].includes(skill),
  );

  if (technicalSkills.length > 0) {
    recommendations.push(`Focus on learning these technical skills: ${technicalSkills.join(', ')}.`);

    // Add specific learning resources based on skills
    if (technicalSkills.includes('algorithms')) {
      recommendations.push('Practice algorithmic problems on LeetCode or HackerRank.');
    }
    if (technicalSkills.includes('system design')) {
      recommendations.push('Study system design principles through resources like System Design Primer on GitHub.');
    }
    recommendations.push('Consider taking relevant courses on platforms like Coursera, Udemy, or PluralSight.');
  }

  if (softSkills.length > 0) {
    recommendations.push(`Develop these soft skills: ${softSkills.join(', ')}.`);
    if (softSkills.includes('leadership') || softSkills.includes('mentoring')) {
      recommendations.push(
        'Look for leadership opportunities in your current role or contribute to open-source projects.',
      );
    }
    if (softSkills.includes('communication')) {
      recommendations.push('Join professional speaking clubs or take on more client-facing responsibilities.');
    }
  }

  // Add company-specific recommendations
  if (company === 'google') {
    recommendations.push('Focus on algorithmic problem-solving and distributed systems design.');
  } else if (company === 'microsoft') {
    recommendations.push("Consider getting Azure certifications and studying Microsoft's technology stack.");
  } else if (company === 'amazon') {
    recommendations.push("Study AWS services and Amazon's leadership principles.");
  }

  return recommendations.join(' ');
}
