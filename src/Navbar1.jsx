import React from "react";
import "./Navbar1.css";
import img1 from "./assets/logo.png"

export default function Navbar1() {
  return (
    <nav className="navbar">
      
      {/* Left Logo */}
      <div className="navbar-left">
        <img   src={img1} alt="logo" />
        <span className="head-btn">clever</span>
      </div>

      {/* Center Links */}
      <ul className="navbar-links">
        <li>Home</li>
        <li>Product</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>

      {/* Right Buttons */}
      <div className="navbar-right">
        <button>Sign in</button>
        <button className="register">Register</button>
      </div>
    </nav>
  );
}