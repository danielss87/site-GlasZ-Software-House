import React from 'react';
import './ClientLogos.css';

const ClientLogos = () => {
  const clients = [
    { name: 'Boltshift', logo: 'B' },
    { name: 'Lightbox', logo: 'L' },
    { name: 'FeatherDev', logo: 'F' },
    { name: 'Spherule', logo: 'S' },
    { name: 'GlobalBank', logo: 'G' },
    { name: 'Nietzsche', logo: 'N' }
  ];

  return (
    <section className="client-logos">
      <div className="client-logos-container">
        <p className="client-logos-text">Join 4,000+ companies already growing</p>
        <div className="logos-grid">
          {clients.map((client, index) => (
            <div key={index} className="logo-item">
              <div className="logo-icon">{client.logo}</div>
              <span className="logo-name">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
