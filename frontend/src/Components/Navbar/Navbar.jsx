import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/codexcoder.webp";
import About from "../../Pages/About/About"
const Navbar = () => {
  return (
    <nav style={{ display: "flex", height: "80px", alignItems: "center", marginTop: "20px" }}>
      <div style={{ display: "flex", height: "80px", alignItems: "center" }}>
        <img src={logo} alt="Code X Coders Logo" style={{ height: "90%", borderRadius: "5px", margin: "10px" }} />
        <h1 style={{ fontSize: "40px" }}>CodeXCoders</h1>
      </div>
      <div style={{ width: "300px" }}></div>
      <div>
        <ul style={{
          display: "flex",
          gap: "30px",
          listStyle: "bullet",
          fontSize: "20px",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          <li><NavLink to="/" style={{ textDecoration: "none", color: "white", backgroundColor: "blue", padding: "5px 10px", borderRadius: "5px" }}>Home</NavLink></li>
          <li><NavLink to="/clientel" style={{ textDecoration: "none", color: "white", backgroundColor: "blue", padding: "5px 10px", borderRadius: "5px" }}>Clientel</NavLink></li>
          <li><NavLink to="/testimonals" style={{ textDecoration: "none", color: "white", backgroundColor: "blue", padding: "5px 10px", borderRadius: "5px" }}>Testimonals</NavLink></li>
          <li><NavLink to="/build" style={{ textDecoration: "none", color: "white", backgroundColor: "blue", padding: "5px 10px", borderRadius: "5px" }}>Build Your Webpage</NavLink></li>
          <li><NavLink to="/about" style={{ textDecoration: "none", color: "white", backgroundColor: "blue", padding: "5px 10px", borderRadius: "5px" }}>About Us</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
