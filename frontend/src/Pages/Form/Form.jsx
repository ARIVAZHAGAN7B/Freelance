import React, { useState } from 'react';
import './MultiStepForm.css';

const steps = [
  'About Brand',
  'Purpose',
  'Site Structure',
  'Design Preferences',
  'Functionalities',
  'Hosting & Domain',
  'Support & Budget',
  'Maintenance Mode',
  'Integrations',
  'Backups',
  'Legal & Socials',
  'Custom Forms'
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <label>
              Brand Name*:
              <input type="text" name="brandName" required onChange={handleChange} />
            </label>
            <label>
              Brand Logo*:
              <input type="file" name="brandLogo" required onChange={handleChange} />
            </label>
            <label>
              Target Audience*:
              <select name="targetAudience" required onChange={handleChange}>
                <option value="">Select</option>
                <option value="child">Child</option>
                <option value="teens">Teens</option>
                <option value="adult">Adult</option>
                <option value="aged">Aged</option>
                <option value="all">All</option>
              </select>
            </label>
            <label>
              Competitor Websites*:
              <textarea name="competitors" required onChange={handleChange} />
            </label>
            <label>
              Additional Brand Info:
              <textarea name="brandInfo" onChange={handleChange} />
            </label>
          </>
        );
      case 1:
        return (
          <>
            <label>
              Website Purpose*:
              <select name="purpose" required onChange={handleChange}>
                <option value="">Select</option>
                <option value="ecommerce">E-Commerce</option>
                <option value="booking">Booking</option>
                <option value="portfolio">Portfolio</option>
                <option value="blog">Blog</option>
                <option value="custom">Custom</option>
              </select>
            </label>
            <label>
              New Website or Redesign*:
              <select name="siteType" required onChange={handleChange}>
                <option value="">Select</option>
                <option value="new">New Website</option>
                <option value="redesign">Redesign Existing</option>
              </select>
            </label>
            <label>
              Do You Have UI Already?
              <select name="hasUI" onChange={handleChange}>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          </>
        );
      case 2:
        return (
          <>
            <label>
              Pages (Navbar):
              <input type="text" name="pages" onChange={handleChange} placeholder="Home, About, Contact..." />
            </label>
            <label>
              Roles:
              <input type="text" name="roles" onChange={handleChange} placeholder="admin, user, teacher..." />
            </label>
            <label>
              Conditional Rendering Details:
              <textarea name="conditionalRendering" onChange={handleChange} />
            </label>
            <label>
              Links Between Roles:
              <textarea name="roleLinks" onChange={handleChange} />
            </label>
            <label>
              Highlight Text/Image:
              <textarea name="highlight" onChange={handleChange} />
            </label>
            <label>
              Contact Info Placement:
              <select name="contactInfo" onChange={handleChange}>
                <option value="">Select</option>
                <option value="individual">On Individual Pages</option>
                <option value="footer">Footer Only</option>
              </select>
            </label>
          </>
        );
      case 3:
        return (
          <>
            <label>
              Design Style:
              <input type="text" name="designStyle" onChange={handleChange} placeholder="Professional, Gamified..." />
            </label>
            <label>
              Sample Website Links:
              <textarea name="sampleLinks" onChange={handleChange} />
            </label>
            <label>
              Preferred Colors:
              <input type="text" name="colors" onChange={handleChange} />
            </label>
            <label>
              Preferred Fonts:
              <input type="text" name="fonts" onChange={handleChange} />
            </label>
            <label>
              Additional Design Requirements:
              <textarea name="designNotes" onChange={handleChange} />
            </label>
          </>
        );
      case 4:
        return (
          <>
            <label>
              Needed Functionalities:
              <textarea name="functionalities" onChange={handleChange} placeholder="Admin dashboard, AI analytics, search bar..." />
            </label>
          </>
        );
      case 5:
        return (
          <div>
            <h2>Hosting & Domain</h2>
            <label>Do you already have a domain?</label>
            <input type="text" name="domain" onChange={handleChange} />
            <label>Hosting Provider (if any)</label>
            <input type="text" name="hosting" onChange={handleChange} />
            <label>SSL Certificate required?</label>
            <select name="ssl" onChange={handleChange}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        );
      case 6:
        return (
          <div>
            <h2>Post-Deployment Support</h2>
            <label>Weekly Support Needed?</label>
            <select name="support" onChange={handleChange}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Project Timeline (in weeks)</label>
            <input type="text" name="timeline" onChange={handleChange} />
            <label>Estimated Budget</label>
            <input type="text" name="budget" onChange={handleChange} />
            <label>Can you provide necessary details?</label>
            <select name="client_ready" onChange={handleChange}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        );
      case 7:
        return (
          <div>
            <h2>Maintenance Mode</h2>
            <label>Do you want the option to put the site into maintenance mode?</label>
            <select name="maintenance_mode" onChange={handleChange}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        );
      case 8:
        return (
          <div>
            <h2>Third-Party Integration</h2>
            <label>List any third-party services or APIs to integrate</label>
            <textarea name="third_party_services" onChange={handleChange} />
          </div>
        );
      case 9:
        return (
          <div>
            <h2>Website Backups</h2>
            <label>Should regular backups be taken?</label>
            <select name="backups" onChange={handleChange}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        );
      case 10:
        return (
          <div>
            <h2>Legal & Social Info</h2>
            <label>Terms and Policies</label>
            <textarea name="terms_policies" onChange={handleChange} />
            <label>Social Media Links</label>
            <textarea name="social_links" onChange={handleChange} />
            <label>Certificates / Awards</label>
            <textarea name="certificates_awards" onChange={handleChange} />
          </div>
        );
      case 11:
        return (
          <div>
            <h2>Custom Form Section</h2>
            <label>Form Name</label>
            <input type="text" name="custom_form_name" onChange={handleChange} />
            <label>Sub-Requirement (description of content needed)</label>
            <textarea name="custom_sub_requirement" onChange={handleChange} />
            <label>Data Type</label>
            <select name="custom_data_type" onChange={handleChange}>
              <option value="text">Text</option>
              <option value="dropdown">Dropdown</option>
              <option value="file">File</option>
            </select>
          </div>
        );
      default:
        return <div>Invalid Step</div>;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="multi-step-form">
      <h1>{steps[currentStep]}</h1>
      <form>
        {renderStep()}
        <div className="buttons">
          <button type="button" onClick={handlePrevious} disabled={currentStep === 0}>
            Previous
          </button>
          <button type="button" onClick={handleNext} disabled={currentStep === steps.length - 1}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
