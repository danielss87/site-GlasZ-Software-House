import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <span className="logo-text">Gläsz</span>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link">Início</a>
          <a href="#products" className="nav-link">Produtos</a>
          <a href="#pricing" className="nav-link">Preços</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
