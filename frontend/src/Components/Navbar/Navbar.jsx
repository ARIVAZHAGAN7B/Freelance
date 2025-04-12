import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/codexcoders.png";

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
    { label: "Build Your Webpage", path: "/build" },
    { label: "About Us", path: "/about" },
    {label: "The Crew", path:"/crew"},
    {label: "Carrers" , path:"/careers"},
  ];

  return (
    <nav style={styles.navbar}>
      {/* Brand */}
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h1 style={styles.brand}>CODExCODERS</h1>
      </div>

      {/* Hamburger for Mobile */}
      {isMobile ? (
        <div style={styles.hamburger} onClick={toggleMenu}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>
      ) : null}

      {/* Navigation Links */}
      {(menuOpen || !isMobile) && (
        <ul style={isMobile ? styles.mobileMenu : styles.navLinks}>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                style={styles.link}
                onClick={() => setMenuOpen(false)}
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

const styles = {
  navbar: {
    backgroundColor: "#0A192F", // dark navy
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    height: "80px",
    flexWrap: "wrap",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    height: "50px",
    borderRadius: "8px",
  },
  brand: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
    color: "#00BFFF", // electric blue
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "20px",
    gap: "10px",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#FFFFFF",
    backgroundColor: "#00BFFF",
    padding: "8px 16px",
    borderRadius: "6px",
    fontWeight: "500",
    transition: "background-color 0.3s, transform 0.2s",
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    gap: "5px",
  },
  bar: {
    width: "25px",
    height: "3px",
    backgroundColor: "#00BFFF",
    borderRadius: "2px",
  },
};

export default Navbar;
