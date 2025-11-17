import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-badge">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2L9.5 6.5L14 8L9.5 9.5L8 14L6.5 9.5L2 8L6.5 6.5L8 2Z" fill="#101828"/>
          </svg>
          <span>Nova vertical</span>
          <span className="badge-separator">→</span>
          <a href="#" className="badge-link">mineração de dados</a>
        </div>

        <h1 className="hero-title">
          A software house especializada na criação de agentes de IA.
        </h1>

        <p className="hero-description">
          A Gläsz monta uma equipe única para cada projeto, unindo customização e processos para aumentar a produtividade da sua empresa.
        </p>

        <div className="hero-cta">
          <button className="btn-secondary">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Demo
          </button>
          <button className="btn-primary">Falar com um consultor</button>
        </div>

        <div className="hero-image">
          <div className="dashboard-mockup">
            {/* Dashboard mockup placeholder */}
            <div className="mockup-header">
              <div className="mockup-tabs">
                <div className="mockup-tab active">View all</div>
                <div className="mockup-tab">Monitoring</div>
                <div className="mockup-tab">Processing</div>
              </div>
              <div className="mockup-actions">
                <button className="mockup-btn">+ Add view</button>
              </div>
            </div>
            <div className="mockup-content">
              <div className="mockup-table">
                {[1, 2, 3, 4, 5].map((row) => (
                  <div key={row} className="mockup-row">
                    <div className="mockup-cell">
                      <div className="mockup-avatar"></div>
                      <div className="mockup-text"></div>
                    </div>
                    <div className="mockup-cell">
                      <div className="mockup-text short"></div>
                    </div>
                    <div className="mockup-cell">
                      <div className="mockup-badge"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
