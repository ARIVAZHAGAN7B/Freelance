import React from "react";
import "./Crew.css";

const crewMembers = [
  {
    name: "Arivazhagan B",
    title: "Founder & Lead Developer",
    description:
      "With over 2+ years of experience in full-stack development, He is the visionary behind CodeXCoders. His expertise spans React, Vue.js, Node.js, and MySQL.",
    portfolio: "https://johndoeportfolio.com",
  },
  {
    name: "Itachi Uchiha",
    title: "UI/UX Designer",
    description:
      "Itachi designs beautiful, intuitive interfaces and ensures every product delivers a top-tier user experience.",
    portfolio: "https://janesmithportfolio.com",
  },
  {
    name: "Madara uchiha",
    title: "Backend Developer",
    description:
      "Madara builds robust backend systems with Node.js and MySQL. His code is clean, scalable, and secure.",
    portfolio: "https://markleeportfolio.com",
  },
  {
    name: "Hashirama",
    title: "Project Manager",
    description:
      "Hashirama ensures smooth communication and timely delivery through agile workflows and meticulous planning.",
    portfolio: "https://emilywhiteportfolio.com",
  },
];

const Crew = () => {
  return (
    <section className="crew-section">
      <h1 className="crew-title">Meet the Crew at <span className="highlight">CodeXCoders</span></h1>
      <div className="crew-grid">
        {crewMembers.map((member, index) => (
          <div className="crew-card" key={index}>
            <h2 className="crew-name">{member.name}</h2>
            <h3 className="crew-role">{member.title}</h3>
            <p className="crew-description">{member.description}</p>
            <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="crew-link">
              View Portfolio →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Crew;
