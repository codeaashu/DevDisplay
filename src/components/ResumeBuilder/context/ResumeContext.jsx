'use client';

import { createContext, useContext, useState } from 'react';

const initialResumeData = {
  basicInfo: {
    firstName: '',
    lastName: '',
    linkedinLink: '',
    githubLink: '',
    email: '',
    phoneNumber: '',
  },
  experience: [
    {
      designation: '',
      companyName: '',
      duration: '',
      location: '',
      workDescription: '',
    },
  ],
  projects: [
    {
      title: '',
      techStacks: '',
      deployedLink: '',
      githubLink: '',
      description: '',
      impact: '',
      uniqueness: '',
    },
  ],
  skills: {
    languages: '',
    frameworks: '',
    developerTools: '',
    database: '',
  },
  education: [
    {
      title: '',
      schoolName: '',
      duration: '',
      location: '',
    },
  ],
  leadership: [
    {
      position: '',
      organizationName: '',
      duration: '',
      location: '',
      responsibilities: '',
      impact: '',
      additionalInfo: '',
    },
  ],
  achievements: {
    achievement1: '',
    achievement2: '',
    achievement3: '',
    achievement4: '',
  },
};

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(initialResumeData);

  const updateBasicInfo = (data) => {
    setResumeData((prev) => ({ ...prev, basicInfo: data }));
  };

  const updateExperience = (data) => {
    setResumeData((prev) => ({ ...prev, experience: data }));
  };

  const updateProjects = (data) => {
    setResumeData((prev) => ({ ...prev, projects: data }));
  };

  const updateSkills = (data) => {
    setResumeData((prev) => ({ ...prev, skills: data }));
  };

  const updateEducation = (data) => {
    setResumeData((prev) => ({ ...prev, education: data }));
  };

  const updateLeadership = (data) => {
    setResumeData((prev) => ({ ...prev, leadership: data }));
  };

  const updateAchievements = (data) => {
    setResumeData((prev) => ({ ...prev, achievements: data }));
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updateBasicInfo,
        updateExperience,
        updateProjects,
        updateSkills,
        updateEducation,
        updateLeadership,
        updateAchievements,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}
