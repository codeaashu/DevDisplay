'use client';
import { useState, useEffect } from 'react';

import { Check, ChevronRight, ChevronLeft, Menu, X } from 'lucide-react';

function Sidebar({
  sections,
  activeSection,
  setActiveSection,
  getStepStatus,
  isMobileView,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    if (isMobileView) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {isMobileView && mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={` ${
          isMobileView
            ? `fixed left-0 top-0 z-50 h-full w-72 transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`
            : `${desktopCollapsed ? 'w-20' : 'w-72'} sticky top-0 h-screen border-r border-[var(--border-dark-theme-light)] shadow-2xl`
        } flex flex-col text-[var(--text-light1)] ${isMobileView ? '' : 'transition-all duration-300'} `}
        style={{
          background: 'linear-gradient(135deg, rgba(15,27,53,0.98) 0%, rgba(0,43,62,0.90) 100%)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          className={`relative flex items-center border-b border-[var(--border-dark-theme)] ${isMobileView ? 'h-16 justify-between px-4' : ''} ${!isMobileView && desktopCollapsed ? 'h-16 justify-center px-3' : ''} ${!isMobileView && !desktopCollapsed ? 'justify-between p-6' : ''} /* Removed min-h, using for padding */ p-6`}
        >
          {!(!isMobileView && desktopCollapsed) && (
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div
                className="absolute left-4 top-2 h-1 w-1 animate-pulse rounded-full bg-white opacity-60"
                style={{ animationDelay: '0s', animationDuration: '3s' }}
              />
              <div
                className="absolute right-6 top-8 h-1.5 w-1.5 animate-pulse rounded-full opacity-40"
                style={{ animationDelay: '1s', animationDuration: '4s', background: 'var(--primary)' }}
              />
              <div
                className="absolute bottom-4 left-8 h-1 w-1 animate-pulse rounded-full bg-white opacity-50"
                style={{ animationDelay: '2s', animationDuration: '3.5s' }}
              />
            </div>
          )}
          {!(!isMobileView && desktopCollapsed) && (
            <div className="relative z-10 mr-2">
              <h1 className={`text-2xl font-bold leading-tight tracking-wide text-white`}>Resume Builder</h1>

              {!(isMobileView || desktopCollapsed) && (
                <div className="mt-1 text-sm font-medium leading-snug text-[var(--primary)]">
                  Build your professional resume
                </div>
              )}
            </div>
          )}

          <button
            onClick={() => {
              if (isMobileView) {
                setMobileMenuOpen(false);
              } else {
                setDesktopCollapsed(!desktopCollapsed);
              }
            }}
            className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--primary)] text-sm text-[var(--primary-light)] transition-all duration-200 hover:scale-105 hover:bg-[rgba(0,166,251,0.2)]"
            style={{
              background: 'rgba(0, 166, 251, 0.1)',
              boxShadow: '0 0 10px var(--primary-glow)',
            }}
            aria-label={isMobileView ? 'Close menu' : desktopCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isMobileView ? <X size={18} /> : desktopCollapsed ? <Menu size={18} /> : <X size={18} />}
          </button>
        </div>

        <div className={`relative min-h-0 flex-1 overflow-y-auto ${isMobileView ? 'p-3' : 'px-3 pb-4'} `}>
          <ul className={`relative z-10 space-y-2 ${isMobileView ? 'mt-2' : 'mt-4'}`}>
            {sections.map((section) => {
              const status = getStepStatus(section.id);
              const IconComponent = section.icon;
              const showLabelInListItem = (!isMobileView && !desktopCollapsed) || isMobileView;

              return (
                <li key={section.id}>
                  <button
                    onClick={() => handleSectionClick(section.id)}
                    className={`group relative flex w-full items-center gap-3 overflow-hidden rounded-lg px-4 py-3 text-left transition-all duration-300 ${status === 'completed' ? 'border border-[var(--border-dark-theme)] bg-gradient-to-r from-[rgba(0,166,251,0.2)] to-[rgba(0,166,251,0.1)] text-[var(--text-light1)] hover:from-[rgba(0,166,251,0.3)] hover:to-[rgba(0,166,251,0.2)]' : ''} ${status === 'active' ? 'border border-[var(--primary)] bg-gradient-to-r from-[var(--primary)] to-[color-mix(in_srgb,var(--primary)_80%,transparent)] font-semibold text-white shadow-lg' : ''} ${status === 'upcoming' ? 'border border-transparent text-[var(--text-light2)] hover:border-[var(--border-dark-theme-light)] hover:bg-[rgba(0,166,251,0.05)] hover:text-[var(--text-light1)]' : ''} `}
                    style={{
                      boxShadow:
                        status === 'active'
                          ? '0 4px 20px var(--primary-glow), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                          : status === 'completed'
                            ? '0 2px 10px rgba(0, 166, 251, 0.2)'
                            : 'none',
                    }}
                  >
                    {status === 'active' && (
                      <div
                        className="absolute right-0 top-0 h-2 w-2 rounded-full bg-white opacity-80"
                        style={{ animation: 'moveDot 6s linear infinite' }}
                      />
                    )}
                    <div
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 text-sm transition-all duration-300 ${status === 'completed' ? 'border-[var(--primary)] bg-[var(--primary)] text-white shadow-md' : ''} ${status === 'active' ? 'border-white bg-white text-[var(--primary)] shadow-md' : ''} ${status === 'upcoming' ? 'border-[var(--text-muted-light)] text-[var(--text-muted-light)] group-hover:border-[var(--primary)] group-hover:text-[var(--primary)]' : ''} `}
                    >
                      {status === 'completed' ? <Check size={16} strokeWidth={3} /> : <IconComponent size={16} />}
                    </div>

                    {showLabelInListItem && (
                      <>
                        <span className="flex-1 truncate text-sm transition-all duration-200">{section.label}</span>
                        {status === 'active' && (
                          <ChevronRight className="animate-pulse text-white opacity-80" size={16} />
                        )}
                      </>
                    )}

                    {!isMobileView && desktopCollapsed && (
                      <span className="absolute left-full z-20 ml-3 origin-left scale-0 whitespace-nowrap rounded-md bg-gray-900/80 p-2 text-xs text-white shadow-lg transition-all duration-200 group-hover:scale-100 group-focus:scale-100">
                        {section.label}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {!isMobileView && !desktopCollapsed && (
          <div
            className="relative border-t border-[var(--border-dark-theme)] p-4 text-xs text-[var(--text-light2)]"
            style={{ background: 'linear-gradient(135deg, rgba(0, 166, 251, 0.05) 0%, rgba(15, 27, 53, 0.2) 100%)' }}
          >
            <div className="absolute right-4 top-2 h-1 w-1 animate-ping rounded-full bg-[var(--primary)] opacity-60" />
            <p className="font-medium text-[var(--primary)]">© 2025 Resume Builder</p>
            <p className="mt-1 text-[var(--text-muted-light)]">Craft your resume with confidence</p>
          </div>
        )}

        <style jsx>{`
          @keyframes moveDot {
            0% {
              top: 0;
              right: 0;
            }
            25% {
              top: 0;
              right: calc(100% - 8px);
            }
            50% {
              top: calc(100% - 8px);
              right: calc(100% - 8px);
            }
            75% {
              top: calc(100% - 8px);
              right: 0;
            }
            100% {
              top: 0;
              right: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default Sidebar;
