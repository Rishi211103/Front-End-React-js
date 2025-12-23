import React from "react";
import "./Navbar1.css";
import img1 from "./assets/logo.png"
import { FiMessageCircle } from "react-icons/fi";
import { VscBellDot } from "react-icons/vsc";
import img2 from "./assets/logo1.jpeg"
import { CiSearch } from "react-icons/ci";


export default function Navbar5() {
    return (
        <nav className="navbar">

            {/* Left Logo */}
            <div className="navbar-left">
                <img src={img1} alt="logo" />
                <span className="head-btn">clever</span>
            </div>




            
            <input className="search"
                type="text"
                placeholder= " Search here"/>

            {/* Right Buttons */}
            <div className="navbar-right">
                <span className="message"><FiMessageCircle /></span>
                <span className="bell"><VscBellDot /></span>
                <img className="profile" src={img2}></img>

            </div>
        </nav>
    );
}