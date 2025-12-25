import React from "react";
import "./Navbar.css";

export default function Navbar({
  onHomeClick,
  onMoviesClick,
  onContactClick,
}) {
  return (
    <header className="nav">
      <div className="logo">MOVIESDA</div>

      <nav className="nav-links">
        <button className="home"onClick={onHomeClick}>HOME</button>
        <button className="home" onClick={onMoviesClick}>MOVIES</button>
        <button className="home"onClick={onContactClick}>CONTACT</button>
      </nav>
    </header>
  );
}
