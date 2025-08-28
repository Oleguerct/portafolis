import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contacte</h3>
            <p>Email: oleguercongost@gmail.com</p>
          </div>
          <div className="footer-section">
            <h3>Xarxes Socials</h3>
            <div className="social-links">
              <a href="https://github.com/Oleguerct" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/oleguer-congost" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Tecnologies</h3>
            <p>React • Vue • Javascript</p>
            <p>PHP • PostgreSQL • Symfony</p>
          </div>
        </div>
        <div className="footer-credit">
          <p>Creat amb l'Agent de Copilot</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;