'use client';

import { useState, useEffect } from 'react';
import { Users, CalendarDays, MapPin, Trash2, Plus, ArrowLeft, ArrowRight, Briefcase, Building } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import '../styles/FormSections.css';

function Leadership({ onPrev, onNext }) {
  const { resumeData, updateLeadership } = useResume();
  const [leaderships, setLeaderships] = useState(
    resumeData.leadership.length > 0
      ? resumeData.leadership
      : [
          {
            position: '',
            organizationName: '',
            duration: '',
            location: '',
            responsibilities: '',
            impact: '',
            additionalInfo: '',
          },
        ],
  );

  useEffect(() => {
    if (resumeData.leadership.length > 0) {
      setLeaderships(resumeData.leadership);
    }
  }, [resumeData.leadership]);

  const handleChange = (index, field, value) => {
    const updatedLeaderships = [...leaderships];
    updatedLeaderships[index] = {
      ...updatedLeaderships[index],
      [field]: value,
    };
    setLeaderships(updatedLeaderships);
  };

  const addLeadership = () => {
    setLeaderships([
      ...leaderships,
      {
        position: '',
        organizationName: '',
        duration: '',
        location: '',
        responsibilities: '',
        impact: '',
        additionalInfo: '',
      },
    ]);
  };

  const removeLeadership = (index) => {
    if (leaderships.length > 1) {
      const updatedLeaderships = [...leaderships];
      updatedLeaderships.splice(index, 1);
      setLeaderships(updatedLeaderships);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLeadership(leaderships);
    onNext();
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2>
            <Users /> Leadership
          </h2>
          <p>Add your leadership experiences and roles</p>
        </div>

        <form onSubmit={handleSubmit} className="form-content">
          {leaderships.map((leadership, index) => (
            <div key={index} className="section-card">
              {leaderships.length > 1 && (
                <button type="button" className="btn-remove" onClick={() => removeLeadership(index)}>
                  <Trash2 />
                </button>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor={`position-${index}`}>Position</label>
                  <div className="input-with-icon">
                    <Briefcase className="input-icon" />
                    <input
                      id={`position-${index}`}
                      value={leadership.position}
                      onChange={(e) => handleChange(index, 'position', e.target.value)}
                      placeholder="Enter title eg: Coordinator"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor={`organizationName-${index}`}>Organisation Name</label>
                  <div className="input-with-icon">
                    <Building className="input-icon" />
                    <input
                      id={`organizationName-${index}`}
                      value={leadership.organizationName}
                      onChange={(e) => handleChange(index, 'organizationName', e.target.value)}
                      placeholder="eg: College Coding Club"
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
                      value={leadership.duration}
                      onChange={(e) => handleChange(index, 'duration', e.target.value)}
                      placeholder="eg: 2021-22"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor={`location-${index}`}>Location</label>
                  <div className="input-with-icon">
                    <MapPin className="input-icon" />
                    <input
                      id={`location-${index}`}
                      value={leadership.location}
                      onChange={(e) => handleChange(index, 'location', e.target.value)}
                      placeholder="Enter location eg: Remote"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor={`responsibilities-${index}`}>Responsibilities</label>
                <textarea
                  id={`responsibilities-${index}`}
                  value={leadership.responsibilities}
                  onChange={(e) => handleChange(index, 'responsibilities', e.target.value)}
                  placeholder="What your responsibilities were"
                  rows={2}
                />
              </div>

              <div className="form-group">
                <label htmlFor={`impact-${index}`}>Impact</label>
                <textarea
                  id={`impact-${index}`}
                  value={leadership.impact}
                  onChange={(e) => handleChange(index, 'impact', e.target.value)}
                  placeholder="Improvement or impact you made in the club"
                  rows={2}
                />
              </div>

              <div className="form-group">
                <label htmlFor={`additionalInfo-${index}`}>Additional Information</label>
                <textarea
                  id={`additionalInfo-${index}`}
                  value={leadership.additionalInfo}
                  onChange={(e) => handleChange(index, 'additionalInfo', e.target.value)}
                  placeholder="Any additional information about your role"
                  rows={2}
                />
              </div>
            </div>
          ))}

          <button type="button" className="btn btn-outline" onClick={addLeadership}>
            <Plus /> Add one more leadership
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

export default Leadership;
