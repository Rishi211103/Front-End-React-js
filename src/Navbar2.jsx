import React from "react";
import "./Navbar1.css";
import img1 from "./assets/logo.png"
import { FiMessageCircle } from "react-icons/fi";
import { VscBellDot } from "react-icons/vsc";
import img2 from "./assets/logo1.jpeg"

export default function Navbar2() {
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
       <span className="message"><FiMessageCircle /></span>
        <span className="bell"><VscBellDot /></span>
        <img className="profile"   src= {img2}></img>
        
      </div>
    </nav>
  );
}