import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" onClick={closeMenu}>Kgabo</NavLink>
      </div>

      <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" exact="true" activeclassname="active" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" activeclassname="active" onClick={closeMenu}>About</NavLink>
        <NavLink to="/resume" activeclassname="active" onClick={closeMenu}>Resume</NavLink>
        <NavLink to="/projects" activeclassname="active" onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/skills" activeclassname="active" onClick={closeMenu}>Skills</NavLink>
        <NavLink to="/contact" activeclassname="active" onClick={closeMenu}>Contact</NavLink>
      </div>

      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={isMobileMenuOpen ? 'line open' : 'line'}></span>
        <span className={isMobileMenuOpen ? 'line open' : 'line'}></span>
        <span className={isMobileMenuOpen ? 'line open' : 'line'}></span>
      </div>
    </nav>
  );
};

export default Navbar;
