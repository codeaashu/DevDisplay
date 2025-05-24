'use client';

import { useState, useEffect } from 'react';
import {
  Code2,
  Trash2,
  Plus,
  ArrowLeft,
  ArrowRight,
  Link,
  Github,
  Lightbulb,
  Wrench,
  FileEdit,
  Star,
} from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import '../styles/FormSections.css';

function Projects({ onPrev, onNext }) {
  const { resumeData, updateProjects } = useResume();
  const [projects, setProjects] = useState(
    resumeData.projects.length > 0
      ? resumeData.projects
      : [
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
  );

  useEffect(() => {
    if (resumeData.projects.length > 0) {
      setProjects(resumeData.projects);
    }
  }, [resumeData.projects]);

  const handleChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };
    setProjects(updatedProjects);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        title: '',
        techStacks: '',
        deployedLink: '',
        githubLink: '',
        description: '',
        impact: '',
        uniqueness: '',
      },
    ]);
  };

  const removeProject = (index) => {
    if (projects.length > 1) {
      const updatedProjects = [...projects];
      updatedProjects.splice(index, 1);
      setProjects(updatedProjects);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProjects(projects);
    onNext();
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2>
            <Code2 /> Projects
          </h2>
          <p>Add your notable projects and their details</p>
        </div>

        <form onSubmit={handleSubmit} className="form-content">
          {projects.map((project, index) => (
            <div key={index} className="section-card">
              {projects.length > 1 && (
                <button type="button" className="btn-remove" onClick={() => removeProject(index)}>
                  <Trash2 />
                </button>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor={`title-${index}`}>Project Title</label>
                  <div className="input-with-icon">
                    <FileEdit className="input-icon" />
                    <input
                      id={`title-${index}`}
                      value={project.title}
                      onChange={(e) => handleChange(index, 'title', e.target.value)}
                      placeholder="e.g. E-commerce Platform"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor={`techStacks-${index}`}>Tech Stacks</label>
                  <div className="input-with-icon">
                    <Wrench className="input-icon" />
                    <input
                      id={`techStacks-${index}`}
                      value={project.techStacks}
                      onChange={(e) => handleChange(index, 'techStacks', e.target.value)}
                      placeholder="e.g. React, Node.js, MongoDB"
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor={`deployedLink-${index}`}>Deployed Link</label>
                  <div className="input-with-icon">
                    <Link className="input-icon" />
                    <input
                      id={`deployedLink-${index}`}
                      value={project.deployedLink}
                      onChange={(e) => handleChange(index, 'deployedLink', e.target.value)}
                      placeholder="https://example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor={`githubLink-${index}`}>GitHub Link</label>
                  <div className="input-with-icon">
                    <Github className="input-icon" />
                    <input
                      id={`githubLink-${index}`}
                      value={project.githubLink}
                      onChange={(e) => handleChange(index, 'githubLink', e.target.value)}
                      placeholder="https://github.com/username/repo"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor={`description-${index}`}>One-liner Description</label>
                <div className="input-with-icon">
                  <FileEdit className="input-icon" />
                  <input
                    id={`description-${index}`}
                    value={project.description}
                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                    placeholder="Brief description of your project"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor={`impact-${index}`}>Project Impact</label>
                <textarea
                  id={`impact-${index}`}
                  value={project.impact}
                  onChange={(e) => handleChange(index, 'impact', e.target.value)}
                  placeholder="Describe the impact your project has made"
                  rows={2}
                />
              </div>

              <div className="form-group">
                <label htmlFor={`uniqueness-${index}`}>What makes it unique?</label>
                <textarea
                  id={`uniqueness-${index}`}
                  value={project.uniqueness}
                  onChange={(e) => handleChange(index, 'uniqueness', e.target.value)}
                  placeholder="Why is your project out of the box?"
                  rows={2}
                />
              </div>
            </div>
          ))}

          <button type="button" className="btn btn-outline" onClick={addProject}>
            <Plus /> Add one more project
          </button>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={onPrev}>
              <ArrowLeft /> Previous
            </button>
            <button type="submit" className="btn btn-primary">
              Next <ArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Projects;
