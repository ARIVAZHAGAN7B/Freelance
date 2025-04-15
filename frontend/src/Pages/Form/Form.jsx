import React, { useState, useRef, useEffect } from 'react';
import './MultiStepForm.css';

const steps = [
  "About Brand", "Purpose", "Pages & Roles", "Design", "Functionality",
  "Domain & Hosting", "Support & Timeline", "Maintenance Mode", "Third-party Integration",
  "Backups", "Legal & Social", "Custom Form"
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const formWrapperRef = useRef(null);

  useEffect(() => {
    if (formWrapperRef.current) {
      window.scrollTo({
        top: formWrapperRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [currentStep]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
    console.log(formData);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const goToStep = (index) => {
    setCurrentStep(index);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <label>Brand Name* <input type="text" name="brandName" onChange={handleChange} required /></label>
            <label>Brand Logo* <input type="file" name="brandLogo" onChange={handleChange} required /></label>
            <label>Target Audience* 
              <select name="targetAudience" onChange={handleChange} required>
                <option value="">Select</option>
                <option value="child">Child</option>
                <option value="adult">Adult</option>
                <option value="teens">Teens</option>
                <option value="aged">Aged</option>
                <option value="all">All</option>
              </select>
            </label>
            <label>Competitor Websites <textarea name="competitors" onChange={handleChange} /></label>
            <label>Additional Requirements <textarea name="additionalRequirements" onChange={handleChange} /></label>
          </>
        );
      case 1:
        return (
          <>
            <label>Purpose <input type="text" name="purpose" onChange={handleChange} /></label>
            <label>New or Redesign?
              <select name="redesign" onChange={handleChange}>
                <option value="new">New Website</option>
                <option value="redesign">Redesign</option>
              </select>
            </label>
            <label>Existing UI? 
              <select name="existingUI" onChange={handleChange}>
                <option value="yes">Yes</option>
                <option value="no">No, need to create</option>
              </select>
            </label>
          </>
        );
      case 2:
        return (
          <>
            <label>Navbar Pages (comma-separated) <input type="text" name="navbarPages" onChange={handleChange} /></label>
            <label>User Roles <input type="text" name="roles" onChange={handleChange} /></label>
            <label>Conditional Rendering Rules <textarea name="renderingRules" onChange={handleChange} /></label>
            <label>Role Links (e.g. Teacher → Student) <input type="text" name="roleLinks" onChange={handleChange} /></label>
            <label>Highlight Areas (text/image/pages) <textarea name="highlightAreas" onChange={handleChange} /></label>
            <label>Contact Info Placement <select name="contactPlacement" onChange={handleChange}>
              <option value="individual">Individual Pages</option>
              <option value="footer">Footer</option>
            </select></label>
          </>
        );
      case 3:
        return (
          <>
            <label>Theme Style <input type="text" name="themeStyle" onChange={handleChange} /></label>
            <label>Sample Websites <textarea name="sampleWebsites" onChange={handleChange} /></label>
            <label>Preferred Colors <input type="text" name="preferredColors" onChange={handleChange} /></label>
            <label>Preferred Fonts <input type="text" name="preferredFonts" onChange={handleChange} /></label>
          </>
        );
      case 4:
        return (
          <>
            <label>Functionalities (comma-separated) <input type="text" name="functionalities" onChange={handleChange} /></label>
            <label>Need Admin Dashboard? <select name="adminDashboard" onChange={handleChange}>
              <option value="yes">Yes</option><option value="no">No</option>
            </select></label>
            <label>Need Analytics Dashboard (AI)? <select name="analyticsDashboard" onChange={handleChange}>
              <option value="yes">Yes</option><option value="no">No</option>
            </select></label>
            <label>Search Bar Required? <select name="searchBar" onChange={handleChange}>
              <option value="yes">Yes</option><option value="no">No</option>
            </select></label>
          </>
        );
      case 5:
        return (
          <>
            <label>Do you own a domain? <select name="domain" onChange={handleChange}>
              <option value="yes">Yes</option><option value="no">No</option>
            </select></label>
            <label>Hosting provider available? <select name="hosting" onChange={handleChange}>
              <option value="yes">Yes</option><option value="no">No</option>
            </select></label>
            <label>SSL Certificate needed? <select name="ssl" onChange={handleChange}>
              <option value="yes">Yes</option><option value="no">No</option>
            </select></label>
          </>
        );
      case 6:
        return (
          <>
            <label>Weekly Support? <select name="weeklySupport" onChange={handleChange}>
              <option value="yes">Yes</option><option value="no">No</option>
            </select></label>
            <label>Timeline <input type="text" name="timeline" onChange={handleChange} /></label>
            <label>Budget <input type="text" name="budget" onChange={handleChange} /></label>
            <label>Eligible to Provide Info? <select name="eligibility" onChange={handleChange}>
              <option value="yes">Yes</option><option value="no">No</option>
            </select></label>
          </>
        );
      case 7:
        return (
          <label>Maintenance Mode Option? <select name="maintenanceMode" onChange={handleChange}>
            <option value="yes">Yes</option><option value="no">No</option>
          </select></label>
        );
      case 8:
        return (
          <>
            <label>List of 3rd Party Integrations <textarea name="integrations" onChange={handleChange} /></label>
          </>
        );
      case 9:
        return (
          <label>Website Backup Needed? <select name="backup" onChange={handleChange}>
            <option value="yes">Yes</option><option value="no">No</option>
          </select></label>
        );
      case 10:
        return (
          <>
            <label>Terms & Policies <textarea name="terms" onChange={handleChange} /></label>
            <label>Social Media Links <textarea name="socialLinks" onChange={handleChange} /></label>
            <label>Certificates (govt) <input type="file" name="certificates" onChange={handleChange} /></label>
            <label>Awards/Recognition <textarea name="awards" onChange={handleChange} /></label>
          </>
        );
      case 11:
        return (
          <>
            <label>Can client edit this form? <select name="editableForm" onChange={handleChange}>
              <option value="yes">Yes</option><option value="no">No</option>
            </select></label>
            <label>Additional Notes <textarea name="customFormNotes" onChange={handleChange} /></label>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="multi-step-form" ref={formWrapperRef}>
      <div className="progress-bar">
        {steps.map((label, index) => (
          <div className="progress-step" key={index}>
            <div
              className={`circle ${index === currentStep ? 'active' : index < currentStep ? 'completed' : ''}`}
              onClick={() => goToStep(index)}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && <div className="line"></div>}
            <div className="step-label">{label}</div>
          </div>
        ))}
      </div>

      <div className="form-container">
        <form className="form-step">
          {renderStep()}
        </form>

        <div className="form-navigation">
          <button onClick={prevStep} disabled={currentStep === 0}>Back</button>
          <button onClick={nextStep} disabled={currentStep === steps.length - 1}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
