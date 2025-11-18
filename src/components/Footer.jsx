import React from 'react';
import './Footer.css';

const Footer = () => {
  const footerLinks = {
    product: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases'],
    company: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'],
    resources: ['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support'],
    social: ['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribbble']
  };

  return (
    <footer className="footer">
      {/* Upper part hidden as requested */}
      {/* <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-heading">Product</h3>
            <ul className="footer-links">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Social</h3>
            <ul className="footer-links">
              {footerLinks.social.map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> */}

      <div className="footer-bottom">
        <div className="footer-logo">
          <span className="footer-logo-text">Gläsz</span>
        </div>

        <p className="footer-copyright">
          © 2025 Gläsz. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
