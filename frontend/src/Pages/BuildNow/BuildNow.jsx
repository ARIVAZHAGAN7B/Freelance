import React, { useState, useEffect } from 'react';
import './BuildNow.css'; // Custom CSS for styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaCloud } from 'react-icons/fa';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';  // Import GoogleLogin
import { jwtDecode } from "jwt-decode";
import Form from '../Form/Form';

const BuildNow = () => {
  const [isLocked, setIsLocked] = useState(true); // Lock state for the form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const websiteTypes = [
    { type: 'Portfolio', description: 'Show off your skills, projects, and personality. Perfect for students and professionals.' },
    { type: 'Business Site', description: 'Build trust and attract clients with a modern website that reflects your brand.' },
    { type: 'E-Commerce', description: 'Sell your products with secure, scalable online stores.' },
    { type: 'Blog/Content Site', description: 'Share your voice, stories, or articles beautifully and efficiently.' },
    { type: 'Event/Invitation Page', description: 'Launch events, weddings, or campaigns in style.' },
    { type: 'Custom Requests', description: 'Got a unique idea? We’ll bring it to life.' },
  ];

  // Check if 'buildAccess' exists in localStorage when the component mounts
  useEffect(() => {
    const buildAccess = localStorage.getItem('buildAccess');
    if (buildAccess === 'true') {
      setIsLocked(false); // Unlock the page if 'buildAccess' is set to true
    }
  }, []);

  // Function to handle form submission and unlock the page
  const handleApprove = (e) => {
    e.preventDefault();
    localStorage.setItem('buildAccess', 'true'); // Store in local storage to persist the state
    setIsLocked(false); // Unlock the page
  };

  // Google login success callback
  const responseGoogle = (credentialResponse) => {
    if (credentialResponse.credential) {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Google User Info:", decoded);
  
      // Optional: Save to localStorage
      localStorage.setItem('buildAccess', 'true');
      localStorage.setItem('googleUser', JSON.stringify(decoded));
  
      // Optional: If you want to unlock content
      // setIsLocked(false);
    } else {
      console.error("Google Login Failed", credentialResponse);
    }
  };

  return (
    <div className="build-now-container">
      {isLocked && (
        <div className="lock-overlay">
          <div className="lock-form">
            <h2>Login🔒</h2>
            <form onSubmit={handleApprove}>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
            </form>
          </div>
          <GoogleOAuthProvider clientId="502410409329-q0ndgl4dm9pn2iabtol4t0ilvec489pa.apps.googleusercontent.com">
                <div className="google-login-container">
                  <h1>Login with Google</h1>
                  <GoogleLogin
                    onSuccess={responseGoogle}
                    onError={() => console.log('Login Failed')}
                  />
                </div>
          </GoogleOAuthProvider>
        </div>
      )}

      <h1 className="build-now-title">Build Your Webpage with CodeXCoders ✨</h1>
      <p>Your Idea. Our Code. One Stunning Website.</p>
      <Link to="/form" className="custom-link">
        <div className="form-btn">
          <button className="form-button"><FaCloud style={{ marginRight: '8px' }} />Build Now</button>
        </div>
      </Link>

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
          <li>You will have a Timeline and Roadmap (A clean split of your projects) and seeing your project sample deployed for real-time changes.</li>
          <li>Build Your Web in Less Than 1 Day (Planning) + 3 Days (Building).</li>
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
          📬 <strong>Reach Out Now</strong> – Let’s chat about your idea and get you Website Within 1 Day (Planning) + 3 Days (Building). <br />
          🎯 We reply within a few hours, guaranteed.
        </p>
        <Link to="/form" className="custom-link">
          <div className="form-btn">
            <button className="form-button"><FaCloud style={{ marginRight: '8px' }} />Build Now</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BuildNow;
