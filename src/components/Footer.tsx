import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contacte</h3>
            <p>Email: programador@example.com</p>
            <p>Telèfon: +34 123 456 789</p>
          </div>
          <div className="footer-section">
            <h3>Xarxes Socials</h3>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Tecnologies</h3>
            <p>React • TypeScript • Node.js</p>
            <p>Python • PostgreSQL • AWS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;