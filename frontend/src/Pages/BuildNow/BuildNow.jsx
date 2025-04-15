import React, { useState } from 'react';
import './BuildNow.css'; // Custom CSS for styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Form from '../Form/Form';

const BuildNow = () => {
  const [isLocked, setIsLocked] = useState(true); // Lock state for the form
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

  const websiteTypes = [
    { type: 'Portfolio', description: 'Show off your skills, projects, and personality. Perfect for students and professionals.' },
    { type: 'Business Site', description: 'Build trust and attract clients with a modern website that reflects your brand.' },
    { type: 'E-Commerce', description: 'Sell your products with secure, scalable online stores.' },
    { type: 'Blog/Content Site', description: 'Share your voice, stories, or articles beautifully and efficiently.' },
    { type: 'Event/Invitation Page', description: 'Launch events, weddings, or campaigns in style.' },
    { type: 'Custom Requests', description: 'Got a unique idea? We’ll bring it to life.' },
  ];

  // Function to handle form submission and unlock the page
  const handleApprove = (e) => {
    e.preventDefault();
    localStorage.setItem('buildAccess', 'true'); // Store in local storage to persist the state
    setIsLocked(false); // Unlock the page
    alert('Thanks for pitching! The page is now unlocked.');
  };

  return (
    <div className="build-now-container">
      {isLocked && (
        <div className="lock-overlay">
          <div className="lock-form">
            <h2>🔒 Submit Your Idea to Unlock</h2>
            <form onSubmit={handleApprove}>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input type="password" 
              placeholder='passowrd'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              required/>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}

      <h1 className="build-now-title">Build Your Webpage with CodeXCoders ✨</h1>
      <p>Your Idea. Our Code. One Stunning Website.</p>

      <div className="build-now-content">
        <h2>🛠️ What We Can Build for You:</h2>
        <table className="build-now-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {websiteTypes.map((website, index) => (
              <tr key={index}>
                <td>{website.type}</td>
                <td>{website.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>🚀 The Process – Simple & Streamlined</h2>
        <ol>
          <li>Connect with Us – Tell us your goals, ideas, or inspiration.</li>
          <li>We Plan & Design – UX wireframes, mockups, and a clear roadmap.</li>
          <li>We Build It – Using clean, scalable code.</li>
          <li>Launch & Support – Go live + get post-launch support.</li>
        </ol>

        <h2>💬 What Our Clients Say:</h2>
        <blockquote>
          “CodeXCoders delivered exactly what I envisioned – and more! Super professional and friendly.” — Akash, Startup Founder
        </blockquote>
        <blockquote>
          “I needed a quick personal website for job hunting, and they nailed it. Highly recommend!” — Priya, Student at BITSathy
        </blockquote>

        <h3>✍️ Ready to Build?</h3>
        <p>
          📬 <strong>Reach Out Now</strong> – Let’s chat about your idea and get you a free quote. <br />
          🧾 Or, <Link to="/form">[Fill Out This Form]</Link> to get started right away. <br />
          🎯 We reply within 24 hours, guaranteed.
        </p>
      </div>
    </div>
  );
};

export default BuildNow;
