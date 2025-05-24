'use client';

import { useState, useEffect } from 'react';
import { Building2, CalendarDays, MapPin, Trash2, Plus, ArrowLeft, ArrowRight } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import '../styles/FormSections.css';

function Experience({ onPrev, onNext }) {
  const { resumeData, updateExperience } = useResume();
  const [experiences, setExperiences] = useState(
    resumeData.experience.length > 0
      ? resumeData.experience
      : [
          {
            designation: '',
            companyName: '',
            duration: '',
            location: '',
            workDescription: '',
          },
        ],
  );

  useEffect(() => {
    if (resumeData.experience.length > 0) {
      setExperiences(resumeData.experience);
    }
  }, [resumeData.experience]);

  const handleChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    };
    setExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        designation: '',
        companyName: '',
        duration: '',
        location: '',
        workDescription: '',
      },
    ]);
  };

  const removeExperience = (index) => {
    if (experiences.length > 1) {
      const updatedExperiences = [...experiences];
      updatedExperiences.splice(index, 1);
      setExperiences(updatedExperiences);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExperience(experiences);
    onNext();
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2>
            <Building2 /> Work Experience
          </h2>
          <p>Add your professional work experience</p>
        </div>

        <form onSubmit={handleSubmit} className="form-content">
          {experiences.map((experience, index) => (
            <div key={index} className="section-card">
              {experiences.length > 1 && (
                <button type="button" className="btn-remove" onClick={() => removeExperience(index)}>
                  <Trash2 />
                </button>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor={`designation-${index}`}>Designation</label>
                  <div className="input-with-icon">
                    <Building2 className="input-icon" />
                    <input
                      id={`designation-${index}`}
                      value={experience.designation}
                      onChange={(e) => handleChange(index, 'designation', e.target.value)}
                      placeholder="e.g. Software Engineer"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor={`companyName-${index}`}>Company Name</label>
                  <div className="input-with-icon">
                    <Building2 className="input-icon" />
                    <input
                      id={`companyName-${index}`}
                      value={experience.companyName}
                      onChange={(e) => handleChange(index, 'companyName', e.target.value)}
                      placeholder="e.g. Acme Inc."
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor={`duration-${index}`}>Duration</label>
                  <div className="input-with-icon">
                    <CalendarDays className="input-icon" />
                    <input
                      id={`duration-${index}`}
                      value={experience.duration}
                      onChange={(e) => handleChange(index, 'duration', e.target.value)}
                      placeholder="e.g. Jan 2020 - Present"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor={`location-${index}`}>Location</label>
                  <div className="input-with-icon">
                    <MapPin className="input-icon" />
                    <input
                      id={`location-${index}`}
                      value={experience.location}
                      onChange={(e) => handleChange(index, 'location', e.target.value)}
                      placeholder="e.g. San Francisco, CA"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor={`workDescription-${index}`}>Work Description</label>
                <textarea
                  id={`workDescription-${index}`}
                  value={experience.workDescription}
                  onChange={(e) => handleChange(index, 'workDescription', e.target.value)}
                  placeholder="Describe your responsibilities and achievements"
                  rows={4}
                />
              </div>
            </div>
          ))}

          <button type="button" className="btn btn-outline" onClick={addExperience}>
            <Plus /> Add one more experience
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

export default Experience;
