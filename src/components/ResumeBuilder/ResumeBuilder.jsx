'use client';

import { useState } from 'react';
import { FaUser, FaBriefcase, FaCode, FaBook, FaGraduationCap, FaUsers, FaAward, FaFileAlt } from 'react-icons/fa';

import Sidebar from './Sidebar';
import BasicInfo from './Sections/BasicInfo';
import Experience from './Sections/Experience';
import Projects from './Sections/Projects';
import Skills from './Sections/Skills';
import Education from './Sections/Education';
import Leadership from './Sections/Leadership';
import Achievement from './Sections/Achievement';
import Resume from './Sections/Resume';

import './styles/ResumeBuilder.css';

const sections = [
  { id: 'basic-info', label: 'Basic Info', icon: FaUser },
  { id: 'experience', label: 'Experience', icon: FaBriefcase },
  { id: 'projects', label: 'Projects', icon: FaCode },
  { id: 'skills', label: 'Skills', icon: FaBook },
  { id: 'education', label: 'Education', icon: FaGraduationCap },
  { id: 'leadership', label: 'Leadership', icon: FaUsers },
  { id: 'achievement', label: 'Achievement', icon: FaAward },
  { id: 'resume', label: 'Resume', icon: FaFileAlt },
];

function ResumeBuilder() {
  const [activeSection, setActiveSection] = useState('basic-info');

  const getStepStatus = (sectionId) => {
    const currentIndex = sections.findIndex((section) => section.id === activeSection);
    const sectionIndex = sections.findIndex((section) => section.id === sectionId);

    if (sectionIndex < currentIndex) return 'completed';
    if (sectionIndex === currentIndex) return 'active';
    return 'pending';
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'basic-info':
        return <BasicInfo onNext={() => setActiveSection('experience')} />;
      case 'experience':
        return <Experience onPrev={() => setActiveSection('basic-info')} onNext={() => setActiveSection('projects')} />;
      case 'projects':
        return <Projects onPrev={() => setActiveSection('experience')} onNext={() => setActiveSection('skills')} />;
      case 'skills':
        return <Skills onPrev={() => setActiveSection('projects')} onNext={() => setActiveSection('education')} />;
      case 'education':
        return <Education onPrev={() => setActiveSection('skills')} onNext={() => setActiveSection('leadership')} />;
      case 'leadership':
        return (
          <Leadership onPrev={() => setActiveSection('education')} onNext={() => setActiveSection('achievement')} />
        );
      case 'achievement':
        return <Achievement onPrev={() => setActiveSection('leadership')} onNext={() => setActiveSection('resume')} />;
      case 'resume':
        return <Resume onPrev={() => setActiveSection('achievement')} />;
      default:
        return <BasicInfo onNext={() => setActiveSection('experience')} />;
    }
  };

  return (
    <div className="resume-builder">
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        getStepStatus={getStepStatus}
      />
      <main className="resume-content">{renderSection()}</main>
    </div>
  );
}

export default ResumeBuilder;
