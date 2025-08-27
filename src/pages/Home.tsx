import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hola, sóc un <span className="highlight">Programador Web</span>
            </h1>
            <p className="hero-subtitle">
              Desenvolupador Full Stack especialitzat en tecnologies modernes com React, Node.js, i TypeScript. 
              Creo aplicacions web robustes, escalables i centrades en l'experiència d'usuari.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                Veure Projectes
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Sobre mi
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="code-animation">
              <div className="code-line">
                <span className="keyword">const</span> <span className="variable">programador</span> = {'{'}
              </div>
              <div className="code-line indent">
                <span className="property">nom</span>: <span className="string">'Desenvolupador'</span>,
              </div>
              <div className="code-line indent">
                <span className="property">especialitat</span>: <span className="string">'Full Stack'</span>,
              </div>
              <div className="code-line indent">
                <span className="property">tecnologies</span>: [<span className="string">'React'</span>, <span className="string">'Node.js'</span>],
              </div>
              <div className="code-line indent">
                <span className="property">passio</span>: <span className="string">'Programació'</span>
              </div>
              <div className="code-line">{'}'}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="skills-container">
          <h2>Tecnologies i Habilitats</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React & TypeScript</li>
                <li>Vue.js & Nuxt.js</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js & Express</li>
                <li>Python & FastAPI</li>
                <li>REST APIs</li>
                <li>Microserveis</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Base de Dades</h3>
              <ul>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>Prisma ORM</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>DevOps & Tools</h3>
              <ul>
                <li>Docker & Kubernetes</li>
                <li>AWS & Vercel</li>
                <li>Git & CI/CD</li>
                <li>Jest & Cypress</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-projects">
        <div className="recent-projects-container">
          <h2>Projectes Destacats</h2>
          <p>Descobreix alguns dels meus projectes més recents i innovadors</p>
          <Link to="/projects" className="btn btn-primary">
            Veure Tots els Projectes
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;