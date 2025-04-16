import "./Portfolio.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams

const Portfolio = () => {
  const { memberName } = useParams();
  console.log(memberName); // Get 'name' from URL params
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encodedName = encodeURIComponent(memberName); // Ensure name is properly encoded
        const res = await fetch(`http://localhost:5000/api/crew/portfolio/${encodedName}`, {
          method: "POST",
        });
        const data = await res.json();
        setMember(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (memberName) fetchData();
  }, [memberName]); // Re-fetch when 'name' changes

  if (!member) {
    return <div>Loading...</div>;
  }

    return (
      <div className="portfolio-container">
        <header className="portfolio-header">
          <h1 className="portfolio-name">{member.firstName} {member.lastName}</h1>
          <p className="portfolio-role">{member.role}</p>
        </header>
        <section className="portfolio-bio">
          <h2>About Me</h2>
          <p>{member.bio}</p>
        </section>
        <section className="portfolio-projects">
          <h2>Projects</h2>
          <ul className="projects-list">
            {member.projects.map((project, index) => (
              <li key={index} className="project-item">
                <h3>{project}</h3>
                <p>Project description or details can go here.</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="portfolio-skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>CSS/HTML</li>
          </ul>
        </section>
        <footer className="portfolio-footer">
          <a href={member.portfolio} target="_blank" rel="noopener noreferrer">Visit My Portfolio</a>
        </footer>
      </div>
    );
  };

export default Portfolio;
