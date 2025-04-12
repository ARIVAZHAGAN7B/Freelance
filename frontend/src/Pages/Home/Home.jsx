import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';

const HomePage = () => {
  const [user,Setuser] = useState({
    username:"",
    email:"",
    projectdetails:""
  });
  const handleChange = (e) => {
    Setuser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  cosnt 
  return (
    <div className="homepage">
      <div className="container">
        {/* 1. Hero Section */}
        <section className="hero">
          <h1 className="hero-title">Transform Your Ideas into Stunning Websites</h1>
          <p className="hero-description">We create user-friendly, performance-driven websites tailored to your needs.</p>
          <Link to="/build" className="btn-primary">Let’s Build Yours</Link>
        </section>

        {/* 2. Showcase Your Work */}
        <section className="showcase">
          <h2 className="section-title">Our Work</h2>
          <div className="showcase-grid">
            {[1, 2, 3,4,5,6,7,8].map((i) => (
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
            <input className="input-field" type="text" placeholder="Your Name" value={user.username} onChange={handleChange} name="username"/>
            <input className="input-field" type="email" placeholder="Your Email" value={user.email} onChange={handleChange} name="" />
            <textarea className="input-field" rows="4" placeholder="Short Description of Your Project Details" value={user.projectdetails} onChange={handleChange}></textarea>
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

        {/* 6. Animated Scroll Effects */}
        <section className="stats">
              <div className="stats-grid">
                <div className="stat-card">
                  10+ <div>Websites Delivered</div>
                </div>
                <div className="stat-card">
                  15+ <div>Happy Clients</div>
                </div>
                <div className="stat-card">
                  1+ <div>Years of Experience</div>
                </div>
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

        <br/>
        {/* 9. Featured Services */}
        <section className="services">
              <h2 className="section-title">What We Offer</h2>
              <div className="marquee-wrapper">
                <div className="marquee-content">
                  {/* First batch of services */}
                  {[
                    'Custom Websites',
                    'E-commerce',
                    'UI/UX Design',
                    'Web Apps',
                    'Dashboards',
                    'Booking Systems',
                    'Content Management Systems (CMS)',
                    'Real-Time Applications',
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
                  { platform: "LinkedIn", url: "https://www.linkedin.com/in/codexcoder-s-b2276a35b/" },
                  { platform: "X", url: "https://x.com/codeXcoders1" }
                ].map((social, i) => (
                  <a key={i} href={social.url} className="social-link" target="_blank" rel="noopener noreferrer">
                    {social.platform}
                  </a>
                ))}
              </div>
         </section>


        {/* 11. Engaging Footer */}
        <footer className="footer">
          <p>&copy; 2025 CodeXCoders. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/careers" className="footer-link">Careers</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
        </footer>
      </div>

      {/* 12. Sticky CTA - stays outside container */}
      <div className="sticky-cta">
        <Link to="/build" className="btn-primary">Get Started</Link>
      </div>
    </div>
  );
};

export default HomePage;
