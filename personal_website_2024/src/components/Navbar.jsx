import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import any CSS specific to the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-element">Home</Link>
      <Link to="/experience" className="navbar-element">Experience</Link>
      <Link to="/portfolio" className="navbar-element">Portfolio</Link>
      <Link to="/leisure" className="navbar-element">Leisure</Link>
    </nav>
  );
};

export default Navbar;