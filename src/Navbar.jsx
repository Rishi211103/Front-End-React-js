import React from "react";
import "./Navbar.css"

export default function Navbar(){
  return(
    <div className="navbar-page">
      <header className="nav">
        <div className="logo">MOVIESDA</div>
        <nav className="nav-links">
          <a href="#services">BOOKING</a>
          <a href="#projects">Movies</a>
          <a href="#about">About</a>
        </nav>
        <button className="nav-contact">Contact</button>
      </header>
    </div>
  )
}