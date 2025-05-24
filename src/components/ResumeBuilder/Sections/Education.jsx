'use client';

import { useState, useEffect } from 'react';
import { GraduationCap, CalendarDays, MapPin, Trash2, Plus, ArrowLeft, ArrowRight } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import '../styles/FormSections.css';

function Education({ onPrev, onNext }) {
  const { resumeData, updateEducation } = useResume();
  const [educations, setEducations] = useState(
    resumeData.education.length > 0
      ? resumeData.education
      : [
          {
            title: '',
            schoolName: '',
            duration: '',
            location: '',
          },
        ],
  );

  useEffect(() => {
    if (resumeData.education.length > 0) {
      setEducations(resumeData.education);
    }
  }, [resumeData.education]);

  const handleChange = (index, field, value) => {
    const updatedEducations = [...educations];
    updatedEducations[index] = {
      ...updatedEducations[index],
      [field]: value,
    };
    setEducations(updatedEducations);
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        title: '',
        schoolName: '',
        duration: '',
        location: '',
      },
    ]);
  };

  const removeEducation = (index) => {
    if (educations.length > 1) {
      const updatedEducations = [...educations];
      updatedEducations.splice(index, 1);
      setEducations(updatedEducations);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEducation(educations);
    onNext();
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2>
            <GraduationCap /> Education
          </h2>
          <p>Add your educational background</p>
        </div>

        <form onSubmit={handleSubmit} className="form-content">
          {educations.map((education, index) => (
            <div key={index} className="section-card">
              {educations.length > 1 && (
                <button type="button" className="btn-remove" onClick={() => removeEducation(index)}>
                  <Trash2 />
                </button>
              )}

              <div className="form-group">
                <label htmlFor={`title-${index}`}>Title</label>
                <div className="input-with-icon">
                  <GraduationCap className="input-icon" />
                  <input
                    id={`title-${index}`}
                    value={education.title}
                    onChange={(e) => handleChange(index, 'title', e.target.value)}
                    placeholder="eg: Bachelors of Technology in Computer Science"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor={`schoolName-${index}`}>College/School Name</label>
                <div className="input-with-icon">
                  <GraduationCap className="input-icon" />
                  <input
                    id={`schoolName-${index}`}
                    value={education.schoolName}
                    onChange={(e) => handleChange(index, 'schoolName', e.target.value)}
                    placeholder="e.g. University of California, Berkeley"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor={`duration-${index}`}>Duration</label>
                  <div className="input-with-icon">
                    <CalendarDays className="input-icon" />
                    <input
                      id={`duration-${index}`}
                      value={education.duration}
                      onChange={(e) => handleChange(index, 'duration', e.target.value)}
                      placeholder="e.g. 2018 - 2022"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor={`location-${index}`}>Location</label>
                  <div className="input-with-icon">
                    <MapPin className="input-icon" />
                    <input
                      id={`location-${index}`}
                      value={education.location}
                      onChange={(e) => handleChange(index, 'location', e.target.value)}
                      placeholder="Location eg: Patna, Bihar"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button type="button" className="btn btn-outline" onClick={addEducation}>
            <Plus /> Add one more education
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

export default Education;
