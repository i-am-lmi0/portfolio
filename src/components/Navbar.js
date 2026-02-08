import React from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">Arnav's Portfolio</div>
      <div className="nav-links">
        <button 
          onClick={() => setCurrentPage('home')} 
          className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentPage('cli')} 
          className={`nav-link ${currentPage === 'cli' ? 'active' : ''}`}
        >
          CLI Terminal
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
