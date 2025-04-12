import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
  const sections = [
    {
      title: "🔧 Full-Stack Development Expertise",
      content: [
        "Frontend: HTML5, CSS3, Tailwind, JavaScript (ES6+), React, Vue",
        "Backend: Node.js, Express, PHP (Laravel), Python (Django)",
        "Databases: MySQL, PostgreSQL, MongoDB, Firebase",
        "Authentication: JWT, OAuth, SSO, session-based auth",
        "Deployment: Vercel, Netlify, DigitalOcean, AWS, cPanel",
      ],
    },
    {
      title: "⚙️ Clean Architecture & Best Practices",
      content: [
        "MVC, RESTful APIs, component-based structure",
        "Version control with Git & GitHub",
        ".env management, Docker, CI/CD setup",
        "Linting, formatting: ESLint, Prettier",
        "Testing: Jest, PHPUnit, QA",
      ],
    },
    {
      title: "🚀 Performance-Oriented Development",
      content: [
        "Lazy loading, asset minification, WebP",
        "Next.js/Nuxt SSR/SSG for speed & SEO",
        "Code splitting & tree-shaking",
      ],
    },
    {
      title: "🔐 Enterprise-Grade Security",
      content: [
        "HTTPS, secure headers, CORS policies",
        "XSS, CSRF, SQL injection protection",
        "Input validation & sanitization",
        "Secure token and password handling",
      ],
    },
    {
      title: "📈 SEO & Analytics Integration",
      content: [
        "Semantic HTML, schema.org integration",
        "Meta automation, sitemap generation",
        "Google Analytics, Search Console, Tag Manager",
      ],
    },
    {
      title: "🧩 Third-Party Integrations",
      content: [
        "Stripe, Razorpay, PayPal for payments",
        "Mailchimp, SendGrid, Brevo for emails",
        "Firebase, S3, Google Maps, Twilio APIs",
        "Strapi, Sanity, WordPress integrations",
      ],
    },
    {
      title: "📄 Professional Project Management",
      content: [
        "Tools: Trello, Notion, ClickUp",
        "Milestone tracking, demo calls, documentation",
        "Contracts, invoicing, transparent timelines",
      ],
    },
    {
      title: "🧠 Consultative & Strategic Approach",
      content: [
        "Help with MVP planning and scaling",
        "Tech stack advising",
        "UX optimization and conversion strategies",
      ],
    },
    {
      title: "🔄 Maintenance & Post-Launch Support",
      content: [
        "Bug fixes and performance upgrades",
        "Feature expansion and UX updates",
        "Hosting support and backups",
      ],
    },
    {
      title: "🤝 Committed to Long-Term Success",
      content: [
        "Clear communication and fast response",
        "Transparent pricing and delivery",
        "Future team expansion & brand growth support",
      ],
    },
  ];

  return (
    <div className="whyus-container">
      <h1 className="whyus-title">
        Why Choose <span className="highlight">CodeXCoders</span>?
      </h1>
      {sections.map((section, index) => (
        <div className="whyus-card" key={index}>
          <h2 className="whyus-card-title">{section.title}</h2>
          <ul className="whyus-list">
            {section.content.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
