'use client';
import { useState } from 'react';

import { Check, ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';

function Sidebar({ sections, activeSection, setActiveSection, getStepStatus }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`${
        collapsed ? 'w-20' : 'w-72'
      } flex h-screen flex-col border-r border-[var(--border-dark-theme-light)] text-[var(--text-light1)] shadow-2xl transition-all duration-300`}
      style={{
        background: 'linear-gradient(135deg, rgba(15,27,53,0.95) 0%, rgba(0,43,62,0.85) 100%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="relative flex items-center justify-between border-b border-[var(--border-dark-theme)] p-6">
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

        {!collapsed && (
          <div className="relative z-10">
            <h1 className="text-2xl font-bold tracking-wide text-white">Resume Builder</h1>
            <div className="mt-1 text-sm font-medium text-[var(--primary)]">Build your professional resume</div>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--primary)] text-sm text-[var(--primary-light)] transition-all duration-200 hover:scale-105 hover:bg-[rgba(0,166,251,0.2)]"
          style={{
            background: 'rgba(0, 166, 251, 0.1)',
            boxShadow: '0 0 10px var(--primary-glow)',
          }}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      <div className="relative min-h-0 flex-1 overflow-y-auto">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />

        <ul className="relative z-10 mt-4 space-y-2 px-3 pb-4">
          {sections.map((section) => {
            const status = getStepStatus(section.id);
            const IconComponent = section.icon;

            return (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`group relative flex w-full items-center gap-3 overflow-hidden rounded-lg px-4 py-3 text-left transition-all duration-300
                    ${
                      status === 'completed'
                        ? 'border border-[var(--border-dark-theme)] bg-gradient-to-r from-[rgba(0,166,251,0.2)] to-[rgba(0,166,251,0.1)] text-[var(--text-light1)] hover:from-[rgba(0,166,251,0.3)] hover:to-[rgba(0,166,251,0.2)]'
                        : ''
                    }
                    ${
                      status === 'active'
                        ? 'border border-[var(--primary)] bg-gradient-to-r from-[var(--primary)] to-[color-mix(in_srgb,var(--primary)_80%,transparent)] font-semibold text-white shadow-lg'
                        : ''
                    }
                    ${
                      status === 'upcoming'
                        ? 'border border-transparent text-[var(--text-light2)] hover:border-[var(--border-dark-theme-light)] hover:bg-[rgba(0,166,251,0.05)] hover:text-[var(--text-light1)]'
                        : ''
                    }
                  `}
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
                      style={{
                        animation: 'moveDot 6s linear infinite',
                      }}
                    />
                  )}

                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm transition-all duration-300
                      ${
                        status === 'completed' ? 'border-[var(--primary)] bg-[var(--primary)] text-white shadow-md' : ''
                      }
                      ${status === 'active' ? 'border-white bg-white text-[var(--primary)] shadow-md' : ''}
                      ${
                        status === 'upcoming'
                          ? 'border-[var(--text-muted-light)] text-[var(--text-muted-light)] group-hover:border-[var(--primary)] group-hover:text-[var(--primary)]'
                          : ''
                      }
                    `}
                  >
                    {status === 'completed' ? <Check size={16} strokeWidth={3} /> : <IconComponent size={16} />}
                  </div>

                  {!collapsed && (
                    <>
                      <span className="flex-1 truncate text-sm transition-all duration-200">{section.label}</span>
                      {status === 'active' && (
                        <ChevronRight className="animate-pulse text-white opacity-80" size={16} />
                      )}
                    </>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {!collapsed && (
        <div
          className="relative border-t border-[var(--border-dark-theme)] p-4 text-xs text-[var(--text-light2)]"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 166, 251, 0.05) 0%, rgba(15, 27, 53, 0.2) 100%)',
          }}
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
  );
}

export default Sidebar;
