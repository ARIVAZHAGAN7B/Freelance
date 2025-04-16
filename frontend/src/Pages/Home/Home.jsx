import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';

const HomePage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    projectdetails: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!user.username || !user.email || !user.projectdetails) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Form submitted:", user);

    // Reset form
    setUser({
      username: "",
      email: "",
      projectdetails: ""
    });
  };

  return (
    <div className="homepage">
      <div className="container">
        {/* 1. Hero Section */}
        <section className="hero">
          <h1 className="hero-title">Transform Your Ideas into Stunning Websites</h1>
          <p className="hero-description">We create user-friendly, performance-driven websites tailored to your needs.</p>
          <Link to="/build" className="btn-primary">Let’s Build Yours</Link>
        </section>

        {/* 2. Showcase Section */}
        <section className="showcase">
          <h2 className="section-title">Our Work</h2>
          <div className="showcase-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="showcase-card">
                <div className="showcase-image"></div>
                <div className="showcase-info">Project {i}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Why Choose Us */}
        <section className="why-choose">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="feature-grid">
            {[{ icon: "🎨", title: "Custom Design" }, { icon: "⚡", title: "Fast & Responsive" }, { icon: "🔒", title: "Secure Solutions" }, { icon: "📈", title: "SEO Ready" }].map((item, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <h3 className="feature-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Lead Form */}
        <section className="lead-form">
          <h2 className="section-title">Let’s Talk</h2>
          <p>Tell us about your project and let's build something amazing together.</p>
          <form className="form">
            <input
              className="input-field"
              type="text"
              placeholder="Your Name"
              value={user.username}
              onChange={handleChange}
              name="username"
            />
            <input
              className="input-field"
              type="email"
              placeholder="Your Email"
              value={user.email}
              onChange={handleChange}
              name="email"
            />
            <textarea
              className="input-field"
              rows="4"
              placeholder="Short Description of Your Project Details"
              value={user.projectdetails}
              onChange={handleChange}
              name="projectdetails"
            ></textarea>
            <button className="btn-primary" onClick={handleClick}>Submit</button>
          </form>
        </section>

        {/* 5. Client Logos */}
        <section className="client-logos">
          <h2 className="section-title">Trusted By</h2>
          <div className="client-logos-list">
            {['Client A', 'Client B', 'Client C'].map((client, i) => (
              <div key={i} className="client-logo">{client}</div>
            ))}
          </div>
        </section>

        {/* 6. Stats Section */}
        <section className="stats">
          <div className="stats-grid">
            <div className="stat-card">10+ <div>Websites Delivered</div></div>
            <div className="stat-card">15+ <div>Happy Clients</div></div>
            <div className="stat-card">1+ <div>Years of Experience</div></div>
          </div>
        </section>

        {/* 7. Video Section */}
        <section className="video-section">
          <h2 className="section-title">How We Work</h2>
          <div className="video-wrapper">
            <video className="video-player" width="640" controls>
              <source src="/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* 8. Testimonials */}
        <section className="testimonials">
          <h2 className="section-title">What Clients Say</h2>
          <div className="testimonials-list">
            {[
              "Best experience!",
              "Truly professional team.",
              "Delivered beyond expectations!",
              "Excellent communication throughout the project.",
              "Fantastic work, highly recommend them.",
              "A team that truly understands the client's needs.",
              "The best decision we made was to work with them.",
              "Efficient, creative, and results-driven!",
              "Their attention to detail was exceptional.",
              "Extremely satisfied with the outcome!"
            ].map((quote, i) => (
              <blockquote key={i} className="testimonial-card">{quote}</blockquote>
            ))}
          </div>
        </section>

        {/* 9. Services Marquee */}
        <section className="services">
          <h2 className="section-title">What We Offer</h2>
          <div className="marquee-wrapper">
            <div className="marquee-content">
              {[
                'Custom Websites',
                'E-commerce',
                'UI/UX Design',
                'Web Apps',
                'Dashboards',
                'Booking Systems',
                'CMS',
                'Real-Time Apps',
                'Social Media Platforms',
                'Membership Systems'
              ].map((service, i) => (
                <div key={i} className="service-card">
                  <h3 className="service-title">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Social Proof */}
        <section className="social-proof">
          <h2 className="section-title">Follow Us</h2>
          <div className="social-links">
            {[
              { platform: "Instagram", url: "https://www.instagram.com/codexcoders/" },
              { platform: "LinkedIn", url: "https://www.linkedin.com/in/codexcoders-b2276a35b/" },
              { platform: "X", url: "https://x.com/codeXcoders1" }
            ].map((social, i) => (
              <a key={i} href={social.url} className="social-link" target="_blank" rel="noopener noreferrer">
                {social.platform}
              </a>
            ))}
          </div>
        </section>

        {/* 11. Footer */}
        <footer className="footer">
          <p>&copy; 2025 CodeXCoders. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/careers" className="footer-link">Careers</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
        </footer>
      </div>

      {/* 12. Sticky CTA */}
      <div className="sticky-cta">
        <Link to="/build" className="btn-primary">Get Started</Link>
      </div>
    </div>
  );
};

export default HomePage;
