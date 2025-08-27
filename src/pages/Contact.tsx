import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <header className="contact-header">
          <h1>Contacte</h1>
          <p>Tens un projecte en ment? Parlem!</p>
        </header>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Informació de Contacte</h2>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>📧 Email</h3>
                <p>programador@example.com</p>
              </div>
              <div className="contact-method">
                <h3>📱 Telèfon</h3>
                <p>+34 123 456 789</p>
              </div>
              <div className="contact-method">
                <h3>📍 Ubicació</h3>
                <p>Barcelona, Catalunya</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Xarxes Socials</h3>
              <div className="social-grid">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>LinkedIn</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;