'use client';

import { useState, useEffect } from 'react';
import { FaUser, FaBriefcase, FaCode, FaBook, FaGraduationCap, FaUsers, FaAward, FaFileAlt } from 'react-icons/fa';
import { Menu as MenuIcon } from 'lucide-react';

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
  const [isMobileView, setIsMobileView] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileView(mobile);
      if (!mobile) {
        setMobileMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getStepStatus = (sectionId) => {
    const currentIndex = sections.findIndex((section) => section.id === activeSection);
    const sectionIndex = sections.findIndex((section) => section.id === sectionId);

    if (sectionIndex < currentIndex) return 'completed';
    if (sectionIndex === currentIndex) return 'active';
    return 'upcoming';
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
      {isMobileView && (
        <button
          onClick={() => setMobileMenuOpen(true)}
          className={`fixed left-4 top-4 z-[51] flex h-8 w-8 items-center justify-center rounded-full border border-[var(--primary)] text-white transition-all duration-200 hover:scale-105 hover:bg-[rgba(0,166,251,0.2)] ${mobileMenuOpen ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
          aria-label="Open menu"
          style={{
            background: 'rgba(0, 166, 251, 0.1)',
            boxShadow: '0 0 10px var(--primary-glow)',
          }}
        >
          <MenuIcon size={18} />
        </button>
      )}
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        getStepStatus={getStepStatus}
        isMobileView={isMobileView}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className="resume-content">{renderSection()}</main>
    </div>
  );
}

export default ResumeBuilder;
