import React from "react";
import "./About.css";

const About = () => {
  const sections = [
    {
      title: "🌍 Our Mission",
      content: [
        "Empowering businesses through high-quality, tailored web solutions.",
        "We aim to drive growth, improve engagement, and enhance customer experiences.",
        "We believe every business deserves a strong digital presence.",
        "CodeXCoders is a startup freelancer initiative started by a student from Bannari Amman Institute of Technology, Sathyamangalam, Erode, Tamil Nadu, India."
      ],
    },
    {
      title: "💻 What We Do",
      content: [
        "Custom Website Development",
        "E-Commerce Solutions",
        "Full-Stack Web Applications",
        "UI/UX Design",
        "Content Management Systems (CMS)",
        "Database Management & Optimization",
        "Website Maintenance & Support"
      ],
    },
    {
      title: "🌟 Why Choose Us?",
      content: [
        "Tailored Solutions: Personalized web solutions that align with your business goals.",
        "Expert Team: A team of experienced designers, developers, and strategists.",
        "Timely Delivery: Meeting deadlines with top-notch quality.",
        "Client-Centered Approach: Collaboration throughout the process to bring your vision to life."
      ],
    },
    {
      title: "💬 Our Values",
      content: [
        "Integrity: Honest, transparent communication and commitment to results.",
        "Quality Over Quantity: Focus on delivering high-quality, sustainable solutions.",
        "Creativity: Embracing innovation and creating unique, memorable solutions.",
        "Collaboration: Working closely with clients to bring great ideas to life."
      ],
    },
    {
      title: "🚀 Looking Ahead",
      content: [
        "We’re constantly expanding our skills, exploring new technologies, and refining processes.",
        "Our goal is to stay at the forefront of the web development industry.",
        "As we grow beyond our beginnings at Bannari Amman Institute of Technology, we remain committed to our mission and values."
      ],
    },
  ];

  return (
    <div className="aboutus-container">
      <h1 className="aboutus-title">
        Why Choose <span className="highlight">CodeXCoders</span>?
      </h1>
      {sections.map((section, index) => (
        <div className="aboutus-card" key={index}>
          <h2 className="aboutus-card-title">{section.title}</h2>
          <ul className="aboutus-list">
            {section.content.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default About;
