import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/codexcodersblue.png";
import './Navbar.css';  // Import your CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Why Us", path: "/whyus" },
    { label: "Testimonials", path: "/testimonals" },
    { label: "Build Your Webpage", path: "/build" }, // Changed this to link directly
    { label: "About Us", path: "/about" },
    { label: "The Crew", path: "/crew" },
    { label: "Careers", path: "/careers" },
  ];

  return (
    <nav className="navbar">
      <div className="logoContainer">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="brand">CODEXCODERS</h1>
      </div>

      {isMobile ? (
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      ) : null}

      {(menuOpen || !isMobile) && (
        <ul className={isMobile ? "mobileMenu" : "navLinks"}>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path} // This now uses NavLink for route navigation
                className="link"
                onClick={() => setMenuOpen(false)} // Closes menu after navigation
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
