'use client';

import { useState, useEffect } from 'react';
import {
  BookMarked,
  ArrowLeft,
  ArrowRight,
  Languages as LanguagesIcon,
  Blocks,
  Wrench,
  Database as DatabaseIcon,
} from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import '../styles/FormSections.css';

function Skills({ onPrev, onNext }) {
  const { resumeData, updateSkills } = useResume();
  const [skills, setSkills] = useState(resumeData.skills);

  useEffect(() => {
    setSkills(resumeData.skills);
  }, [resumeData.skills]);

  const handleChange = (field, value) => {
    setSkills((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSkills(skills);
    onNext();
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2>
            <BookMarked /> Skills
          </h2>
          <p>Add your technical skills and competencies</p>
        </div>

        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="languages">Languages</label>
              <div className="input-with-icon">
                <LanguagesIcon className="input-icon" />
                <input
                  id="languages"
                  value={skills.languages}
                  onChange={(e) => handleChange('languages', e.target.value)}
                  placeholder="Programming Languages eg: Python, JavaScript"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="frameworks">Frameworks</label>
              <div className="input-with-icon">
                <Blocks className="input-icon" />
                <input
                  id="frameworks"
                  value={skills.frameworks}
                  onChange={(e) => handleChange('frameworks', e.target.value)}
                  placeholder="Familiar Frameworks eg: React, Node.js"
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="developerTools">Developer Tools</label>
              <div className="input-with-icon">
                <Wrench className="input-icon" />
                <input
                  id="developerTools"
                  value={skills.developerTools}
                  onChange={(e) => handleChange('developerTools', e.target.value)}
                  placeholder="Familiar Tools eg: Git, Docker, VS Code"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="database">Database</label>
              <div className="input-with-icon">
                <DatabaseIcon className="input-icon" />
                <input
                  id="database"
                  value={skills.database}
                  onChange={(e) => handleChange('database', e.target.value)}
                  placeholder="eg: MongoDB, PostgreSQL, MySQL"
                />
              </div>
            </div>
          </div>

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

export default Skills;
