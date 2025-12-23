import React from "react";
import "./App.css";

function Navbar({ layout }) {
  if (layout === 1) {
    // Logo left, links center, Contact button right
    return (
      <nav className="navbar">
        <div className="logo">LOGOBAKERY</div>

        <ul className="nav-links center">
          <li>Services</li>
          <li>Projects</li>
          <li>About</li>
        </ul>

        <button className="contact-btn">Contact</button>
      </nav>
    );
  }

  if (layout === 2) {
    // Links left (Contact highlighted), logo right
    return (
      <nav className="navbar">
        <ul className="nav-links left">
          <li>Services</li>
          <li>Projects</li>
          <li>About</li>
          <li>
            <button className="contact-btn small">Contact</button>
          </li>
        </ul>

        <div className="logo">LOGOBAKERY</div>
      </nav>
    );
  }

  // layout 3: Logo left, links right (Contact highlighted)
  return (
    <nav className="navbar">
      <div className="logo">LOGOBAKERY</div>

      <ul className="nav-links right">
        <li>Services</li>
        <li>Projects</li>
        <li>About</li>
        <li>
          <button className="contact-btn small">Contact</button>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="page">
      <Navbar layout={1} />
      <Navbar layout={2} />
      <Navbar layout={3} />
    </div>
  );
}

export default App;