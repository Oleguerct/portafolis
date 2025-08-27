import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En una implementació real, aquí enviaries el formulari a un servidor
    console.log('Formulari enviat:', formData);
    alert('Gràcies pel teu missatge! Et contactaré aviat.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
              <div className="contact-method">
                <h3>🕒 Disponibilitat</h3>
                <p>Dilluns a Divendres, 9:00 - 18:00</p>
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

          <div className="contact-form-container">
            <h2>Envia'm un Missatge</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Assumpte *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Missatge *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Enviar Missatge
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;