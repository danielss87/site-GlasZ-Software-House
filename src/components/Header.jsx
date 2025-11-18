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
          <a
            href="https://wa.me/5548996319214?text=Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20cria%C3%A7%C3%A3o%20de%20agentes%20da%20Gl%C3%A4sz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-header"
          >
            Falar com um consultor
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
