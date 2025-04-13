import React from "react";
import { Link } from 'react-router-dom';
import "./Careers.css";

const Careers = () => {
  return (
    <div className="careers-container">
      <h1 className="careers-title">🚀 Join the <span className="highlight">CodeXCoders</span> Team</h1>
      <p className="careers-subtitle">
        Passionate about building digital experiences? So are we.
      </p>

      <div className="careers-section">
        <h2>🌟 Why Work With Us?</h2>
        <ul>
          <li><strong>Real Impact:</strong> Work on live projects for real clients across industries.</li>
          <li><strong>Growth-Oriented:</strong> Learn new skills, tools, and tech with mentorship and regular upskilling.</li>
          <li><strong>Flexible Culture:</strong> Study-friendly, remote options, and a team that gets you.</li>
          <li><strong>Startup Vibes:</strong> Creative freedom, ownership, and a chance to grow with us.</li>
        </ul>
      </div>

      <div className="careers-section">
        <h2>👀 We’re Looking For:</h2>
        <ul>
          <li>Frontend Developers (React, Next.js, Tailwind CSS)</li>
          <li>Backend Developers (Node.js, Express, MySQL)</li>
          <li>UI/UX Designers (Figma, Adobe XD)</li>
          <li>Content Creators / Technical Writers</li>
          <li>Social Media Managers</li>
          <li>Interns & Freshers with passion and curiosity</li>
        </ul>
      </div>

      <div className="careers-section">
        <h2>📩 How to Apply</h2>
        <p>
          Shoot us your resume, portfolio, or GitHub at <strong>📧 codexcoders1@gamil.com</strong><br />
          Or fill out the form below and let’s start the conversation!
        </p>
        <Link to = "/careersform">
        <button className="careers-button">Apply Now</button>
        </Link>
      </div>

      <div className="careers-section">
        <h2>🌐 Be Part of Something Big</h2>
        <p>
          CodeXCoders is more than a brand — it's a movement.<br />
          Join us and help shape the digital future, one line of code at a time.
        </p>
      </div>
    </div>
  );
};

export default Careers;
