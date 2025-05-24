'use client';

import { useState, useEffect } from 'react';
import { Award, ArrowLeft, ArrowRight } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import '../styles/FormSections.css';

function Achievement({ onPrev, onNext }) {
  const { resumeData, updateAchievements } = useResume();
  const [achievements, setAchievements] = useState(resumeData.achievements);

  useEffect(() => {
    setAchievements(resumeData.achievements);
  }, [resumeData.achievements]);

  const handleChange = (field, value) => {
    setAchievements((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAchievements(achievements);
    onNext();
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2>
            <Award /> Achievements
          </h2>
          <p>Add your notable achievements and recognitions</p>
        </div>

        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="achievement1">Achievement 1</label>
              <div className="input-with-icon">
                <Award className="input-icon" />
                <input
                  id="achievement1"
                  value={achievements.achievement1}
                  onChange={(e) => handleChange('achievement1', e.target.value)}
                  placeholder="Any Hackathon wins or participations"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="achievement2">Achievement 2</label>
              <div className="input-with-icon">
                <Award className="input-icon" />
                <input
                  id="achievement2"
                  value={achievements.achievement2}
                  onChange={(e) => handleChange('achievement2', e.target.value)}
                  placeholder="Any Coding Contest Achievements"
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="achievement3">Achievement 3</label>
              <div className="input-with-icon">
                <Award className="input-icon" />
                <input
                  id="achievement3"
                  value={achievements.achievement3}
                  onChange={(e) => handleChange('achievement3', e.target.value)}
                  placeholder="Any Hackathon wins or participations"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="achievement4">Achievement 4</label>
              <div className="input-with-icon">
                <Award className="input-icon" />
                <input
                  id="achievement4"
                  value={achievements.achievement4}
                  onChange={(e) => handleChange('achievement4', e.target.value)}
                  placeholder="Any Coding Contest Achievements"
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

export default Achievement;
