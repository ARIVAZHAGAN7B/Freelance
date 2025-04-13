import React, { useState } from 'react';
import './CareersForm.css';

const CareersForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '', email: '', phone: '', linkedin: '', portfolio: '', resume: null,
    // Step 2
    role: '', primarySkills: [], secondarySkills: [], experience: '', certifications: '',
    // Step 3
    availableFrom: '', workType: '', hoursPerWeek: '', clientProjects: '',
    // Step 4
    reason: '', goals: '', expectedCompensation: '',
    // Step 5
    source: '', referredBy: '', comments: '',
    // Step 6
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox' && name === 'agreement') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'checkbox') {
      const values = formData[name];
      const newValue = values.includes(value)
        ? values.filter((item) => item !== value)
        : [...values, value];
      setFormData({ ...formData, [name]: newValue });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <label>Full Name*</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

            <label>Email Address*</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Phone Number*</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

            <label>LinkedIn Profile</label>
            <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} />

            <label>Portfolio/Website</label>
            <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} />

            <label>Upload Resume (PDF)*</label>
            <input type="file" name="resume" accept=".pdf" onChange={handleChange} required />
          </>
        );

      case 2:
        return (
          <>
            <label>Role Applying For*</label>
            <select name="role" value={formData.role} onChange={handleChange} required>
              <option value="">Select Role</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
              <option>UI/UX Designer</option>
              <option>Content Writer</option>
              <option>Marketing</option>
              <option>Project Manager</option>
              <option>Other</option>
            </select>

            <label>Primary Skills*</label>
            {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Figma', 'Adobe XD', 'SEO', 'Git'].map(skill => (
              <div key={skill}>
                <input type="checkbox" name="primarySkills" value={skill} checked={formData.primarySkills.includes(skill)} onChange={handleChange} />
                <label>{skill}</label>
              </div>
            ))}

            <label>Secondary Skills</label>
            <input type="text" name="secondarySkills" value={formData.secondarySkills} onChange={handleChange} />

            <label>Years of Experience*</label>
            <select name="experience" value={formData.experience} onChange={handleChange} required>
              <option value="">Select</option>
              <option>&lt;1 year</option>
              <option>1–2 years</option>
              <option>2–4 years</option>
              <option>4+ years</option>
            </select>

            <label>Certifications (if any)</label>
            <input type="text" name="certifications" value={formData.certifications} onChange={handleChange} />
          </>
        );

      case 3:
        return (
          <>
            <label>Available From*</label>
            <input type="date" name="availableFrom" value={formData.availableFrom} onChange={handleChange} required />

            <label>Preferred Work Type*</label>
            <select name="workType" value={formData.workType} onChange={handleChange} required>
              <option value="">Select</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
              <option>Freelance</option>
            </select>

            <label>Available Hours per Week*</label>
            <input type="number" name="hoursPerWeek" value={formData.hoursPerWeek} onChange={handleChange} required />

            <label>Willing to Work on Client Projects?*</label>
            <select name="clientProjects" value={formData.clientProjects} onChange={handleChange} required>
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </>
        );

      case 4:
        return (
          <>
            <label>Why do you want to join CodeXCoders?*</label>
            <textarea name="reason" value={formData.reason} onChange={handleChange} required />

            <label>What are your career goals?</label>
            <textarea name="goals" value={formData.goals} onChange={handleChange} />

            <label>Expected Monthly Compensation (INR)*</label>
            <input type="number" name="expectedCompensation" value={formData.expectedCompensation} onChange={handleChange} required />
          </>
        );

      case 5:
        return (
          <>
            <label>How did you hear about us?</label>
            <select name="source" value={formData.source} onChange={handleChange}>
              <option value="">Select</option>
              <option>Website</option>
              <option>Instagram</option>
              <option>Friend</option>
              <option>College</option>
              <option>Other</option>
            </select>

            <label>Referred By (if any)</label>
            <input type="text" name="referredBy" value={formData.referredBy} onChange={handleChange} />

            <label>Any additional comments or notes?</label>
            <textarea name="comments" value={formData.comments} onChange={handleChange} />
          </>
        );

      case 6:
        return (
          <>
            <label>
              <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} required />
              I confirm that the above information is accurate and I agree to be contacted by CodeXCoders.
            </label>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="careers-form-container">
      <div className="progress-bar">
        {[1, 2, 3, 4, 5, 6].map((s) => (
          <div key={s} className={`step ${step === s ? 'current' : step > s ? 'completed' : ''}`}>{s}</div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {renderStep()}

        <div className="form-navigation">
          {step > 1 && <button type="button" onClick={handleBack}>Back</button>}
          {step < 6 ? (
            <button type="button" onClick={handleNext}>Next</button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CareersForm;
