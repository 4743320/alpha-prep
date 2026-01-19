import React, { useState } from 'react';
import './Main.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="v1-navbar">
      <div className="v1-logo">Coursespace</div>

      {/* Links + buttons */}
      <ul className={`v1-nav-links ${menuOpen ? 'v1-open' : ''}`}>
        <li>Home</li>
        <li>Courses</li>
        <li>Testimonials</li>
        <li>Mentors</li>
        <li>
          <button className="v1-sign-in">Sign In</button>
        </li>
        <li>
          <button className="v1-sign-up">Sign Up</button>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="v1-hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
