'use client';

import { useState, useEffect } from 'react';
import { User, Linkedin, Github, Mail, Phone, ArrowRight } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import '../styles/FormSections.css';

function BasicInfo({ onNext }) {
  const { resumeData, updateBasicInfo } = useResume();
  const [formData, setFormData] = useState(resumeData.basicInfo);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(resumeData.basicInfo);
  }, [resumeData.basicInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.linkedinLink.trim()) {
      newErrors.linkedinLink = 'LinkedIn link is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      updateBasicInfo(formData);
      onNext();
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2>
            <User /> Basic Information
          </h2>
          <p>Enter your personal details to get started with your resume</p>
        </div>

        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">
                First Name <span className="required">*</span>
              </label>
              <div className="input-with-icon">
                <User className="input-icon" />
                <input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className={errors.firstName ? 'input-error' : ''}
                />
              </div>
              {errors.firstName && <p className="error-message">{errors.firstName}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <div className="input-with-icon">
                <User className="input-icon" />
                <input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="linkedinLink">
                LinkedIn Link <span className="required">*</span>
              </label>
              <div className="input-with-icon">
                <Linkedin className="input-icon" />
                <input
                  id="linkedinLink"
                  name="linkedinLink"
                  value={formData.linkedinLink}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/username"
                  className={errors.linkedinLink ? 'input-error' : ''}
                />
              </div>
              {errors.linkedinLink && <p className="error-message">{errors.linkedinLink}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="githubLink">GitHub Link</label>
              <div className="input-with-icon">
                <Github className="input-icon" />
                <input
                  id="githubLink"
                  name="githubLink"
                  value={formData.githubLink}
                  onChange={handleChange}
                  placeholder="https://github.com/username"
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <div className="input-with-icon">
                <Mail className="input-icon" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={errors.email ? 'input-error' : ''}
                />
              </div>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">
                Phone Number <span className="required">*</span>
              </label>
              <div className="input-with-icon">
                <Phone className="input-icon" />
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+1 (123) 456-7890"
                  className={errors.phoneNumber ? 'input-error' : ''}
                />
              </div>
              {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Next <ArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BasicInfo;
