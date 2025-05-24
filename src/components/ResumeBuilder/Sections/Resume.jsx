'use client';

import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Download, ArrowLeft, FileText } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import { generateResumePdf } from '../utils/pdfGenerator';
import '../styles/FormSections.css';

export default function Resume({ onPrev }) {
  const { resumeData } = useResume();
  const resumeRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <div className="form-container px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto mb-6 flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <button type="button" className="btn btn-secondary w-full sm:w-auto" onClick={onPrev}>
          <ArrowLeft className="mr-2 h-5 w-5" /> Previous
        </button>
        <h2 className="order-first flex items-center text-2xl font-semibold text-[var(--text-light1)] sm:order-none">
          <FileText className="mr-2 h-6 w-6" /> Resume Preview
        </h2>
        <button
          type="button"
          className="btn btn-primary w-full sm:w-auto"
          onClick={() => generateResumePdf(resumeData, setIsGenerating)}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <div className="mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
              Generating...
            </>
          ) : (
            <>
              Download Resume <Download className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </div>

      <div
        ref={resumeRef}
        className="mx-auto max-w-4xl bg-[var(--surface-dark1)] p-8 shadow-xl md:p-12 print:p-0 print:shadow-none"
      >
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[var(--text-light1)] md:text-4xl">
            {resumeData.basicInfo.firstName} {resumeData.basicInfo.lastName}
          </h1>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[var(--text-light2)] sm:gap-x-6 md:text-base">
            {resumeData.basicInfo.email && (
              <span className="flex items-center gap-1.5">
                <FaEnvelope /> {resumeData.basicInfo.email}
              </span>
            )}
            {resumeData.basicInfo.phoneNumber && (
              <span className="flex items-center gap-1.5">
                <FaPhone /> {resumeData.basicInfo.phoneNumber}
              </span>
            )}
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6">
            {resumeData.basicInfo.linkedinLink && (
              <a
                href={resumeData.basicInfo.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[var(--primary)] hover:text-[var(--primary-light)] hover:underline"
              >
                <FaLinkedin /> LinkedIn <FaExternalLinkAlt className="text-xs" />
              </a>
            )}
            {resumeData.basicInfo.githubLink && (
              <a
                href={resumeData.basicInfo.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[var(--text-light2)] hover:text-[var(--text-light1)] hover:underline"
              >
                <FaGithub /> GitHub <FaExternalLinkAlt className="text-xs" />
              </a>
            )}
          </div>
        </header>

        {resumeData.skills && (
          <section className="mb-7">
            <h2 className="mb-3 border-b-2 border-[var(--border-dark-theme-subtle)] pb-2 text-xl font-semibold text-[var(--primary-light)] md:text-2xl">
              Skills
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2 md:text-base">
              {resumeData.skills.languages && (
                <div className="text-[var(--text-light2)]">
                  <strong className="font-medium text-[var(--text-light1)]">Languages:</strong>{' '}
                  {resumeData.skills.languages}
                </div>
              )}
              {resumeData.skills.frameworks && (
                <div className="text-[var(--text-light2)]">
                  <strong className="font-medium text-[var(--text-light1)]">Frameworks:</strong>{' '}
                  {resumeData.skills.frameworks}
                </div>
              )}
              {resumeData.skills.developerTools && (
                <div className="text-[var(--text-light2)]">
                  <strong className="font-medium text-[var(--text-light1)]">Tools:</strong>{' '}
                  {resumeData.skills.developerTools}
                </div>
              )}
              {resumeData.skills.database && (
                <div className="text-[var(--text-light2)]">
                  <strong className="font-medium text-[var(--text-light1)]">Databases:</strong>{' '}
                  {resumeData.skills.database}
                </div>
              )}
            </div>
          </section>
        )}

        {resumeData.experience.length > 0 && (
          <section className="mb-7">
            <h2 className="mb-4 border-b-2 border-[var(--border-dark-theme-subtle)] pb-2 text-xl font-semibold text-[var(--primary-light)] md:text-2xl">
              Experience
            </h2>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="mb-5 last:mb-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-light1)] md:text-xl">{exp.designation}</h3>
                    <p className="text-md text-[var(--text-light2)] md:text-lg">{exp.companyName}</p>
                    {exp.location && <p className="mt-0.5 text-xs italic text-slate-500 md:text-sm">{exp.location}</p>}
                  </div>
                  <span className="whitespace-nowrap pt-1 text-sm text-slate-500 md:text-base">{exp.duration}</span>
                </div>
                <p className="mt-1.5 text-sm text-[var(--text-light2)] md:text-base">{exp.workDescription}</p>
              </div>
            ))}
          </section>
        )}

        {resumeData.projects.length > 0 && (
          <section className="mb-7">
            <h2 className="mb-4 border-b-2 border-[var(--border-dark-theme-subtle)] pb-2 text-xl font-semibold text-[var(--primary-light)] md:text-2xl">
              Projects
            </h2>
            {resumeData.projects.map((project, idx) => (
              <div key={idx} className="mb-5 last:mb-0">
                <h3 className="text-lg font-semibold text-[var(--text-light1)] md:text-xl">{project.title}</h3>
                {project.techStacks && (
                  <p className="mb-1 mt-0.5 text-xs italic text-slate-500 md:text-sm">{project.techStacks}</p>
                )}
                <p className="mt-1 text-sm text-[var(--text-light2)] md:text-base">{project.description}</p>
                {project.impact && (
                  <p className="mt-1 text-sm text-[var(--text-light2)] md:text-base">
                    <strong className="font-medium text-[var(--text-light1)]">Impact:</strong> {project.impact}
                  </p>
                )}
                {project.uniqueness && (
                  <p className="mt-1 text-sm text-[var(--text-light2)] md:text-base">
                    <strong className="font-medium text-[var(--text-light1)]">Unique Features:</strong>{' '}
                    {project.uniqueness}
                  </p>
                )}
                <div className="mt-1.5 flex gap-4 text-xs md:text-sm">
                  {project.deployedLink && (
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[var(--primary)] hover:text-[var(--primary-light)] hover:underline"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[var(--text-light2)] hover:text-[var(--text-light1)] hover:underline"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </section>
        )}

        {resumeData.education.length > 0 && (
          <section className="mb-7">
            <h2 className="mb-3 border-b-2 border-[var(--border-dark-theme-subtle)] pb-2 text-xl font-semibold text-[var(--primary-light)] md:text-2xl">
              Education
            </h2>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="mb-4 last:mb-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-light1)] md:text-xl">{edu.title}</h3>
                    <p className="text-md text-[var(--text-light2)] md:text-lg">{edu.schoolName}</p>
                    {edu.location && <p className="mt-0.5 text-xs italic text-slate-500 md:text-sm">{edu.location}</p>}
                  </div>
                  <span className="whitespace-nowrap pt-1 text-sm text-slate-500 md:text-base">{edu.duration}</span>
                </div>
              </div>
            ))}
          </section>
        )}

        {resumeData.leadership.length > 0 && (
          <section className="mb-7">
            <h2 className="mb-4 border-b-2 border-[var(--border-dark-theme-subtle)] pb-2 text-xl font-semibold text-[var(--primary-light)] md:text-2xl">
              Leadership
            </h2>
            {resumeData.leadership.map((lead, idx) => (
              <div key={idx} className="mb-5 last:mb-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-light1)] md:text-xl">{lead.position}</h3>
                    <p className="text-md text-[var(--text-light2)] md:text-lg">{lead.organizationName}</p>
                    {lead.location && (
                      <p className="mt-0.5 text-xs italic text-slate-500 md:text-sm">{lead.location}</p>
                    )}
                  </div>
                  <span className="whitespace-nowrap pt-1 text-sm text-slate-500 md:text-base">{lead.duration}</span>
                </div>
                <p className="mt-1.5 text-sm text-[var(--text-light2)] md:text-base">{lead.responsibilities}</p>
                {lead.impact && (
                  <p className="mt-1 text-sm text-[var(--text-light2)] md:text-base">
                    <strong className="font-medium text-[var(--text-light1)]">Impact:</strong> {lead.impact}
                  </p>
                )}
                {lead.additionalInfo && (
                  <p className="mt-1 text-sm text-[var(--text-light2)] md:text-base">{lead.additionalInfo}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {(resumeData.achievements.achievement1 ||
          resumeData.achievements.achievement2 ||
          resumeData.achievements.achievement3 ||
          resumeData.achievements.achievement4) && (
          <section>
            <h2 className="mb-3 border-b-2 border-[var(--border-dark-theme-subtle)] pb-2 text-xl font-semibold text-[var(--primary-light)] md:text-2xl">
              Achievements
            </h2>
            <ul className="ml-5 list-disc space-y-1.5 text-sm text-[var(--text-light2)] sm:ml-6 md:text-base">
              {resumeData.achievements.achievement1 && <li>{resumeData.achievements.achievement1}</li>}
              {resumeData.achievements.achievement2 && <li>{resumeData.achievements.achievement2}</li>}
              {resumeData.achievements.achievement3 && <li>{resumeData.achievements.achievement3}</li>}
              {resumeData.achievements.achievement4 && <li>{resumeData.achievements.achievement4}</li>}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
