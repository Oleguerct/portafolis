import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <header className="about-header">
          <h1>Sobre mi</h1>
          <p>Coneix la meva història i experiència professional</p>
        </header>

        <div className="about-content">
          <section className="about-intro">
            <h2>Qui sóc</h2>
            <p>
              Sóc un desenvolupador full stack apassionat per crear aplicacions web modernes i eficients. 
              Amb anys d'experiència en el desenvolupament de software, m'especialitzo en tecnologies com 
              React, Node.js, TypeScript i Python.
            </p>
            <p>
              La meva filosofia de desenvolupament es centra en escriure codi net, mantenible i escalable, 
              sempre prioritzant l'experiència d'usuari i el rendiment de les aplicacions.
            </p>
          </section>

          <section className="about-experience">
            <h2>Experiència Professional</h2>
            <div className="experience-item">
              <h3>Desenvolupador Full Stack Senior</h3>
              <span className="experience-period">2021 - Present</span>
              <p>
                Desenvolupament d'aplicacions web complexes utilitzant React, Node.js i PostgreSQL. 
                Lideratge d'equips de desenvolupament i implementació de bones pràctiques de codi.
              </p>
            </div>
            <div className="experience-item">
              <h3>Desenvolupador Frontend</h3>
              <span className="experience-period">2019 - 2021</span>
              <p>
                Creació d'interfícies d'usuari interactives i responsive amb React i Vue.js. 
                Optimització de rendiment i experiència d'usuari.
              </p>
            </div>
          </section>

          <section className="about-skills">
            <h2>Habilitats Tècniques</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <h4>Frontend</h4>
                <ul>
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Vue.js & Nuxt.js</li>
                  <li>CSS3 & Sass</li>
                </ul>
              </div>
              <div className="skill-item">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js & Express</li>
                  <li>Python & FastAPI</li>
                  <li>REST & GraphQL APIs</li>
                  <li>Microserveis</li>
                </ul>
              </div>
              <div className="skill-item">
                <h4>Base de Dades</h4>
                <ul>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                  <li>Prisma ORM</li>
                </ul>
              </div>
              <div className="skill-item">
                <h4>DevOps</h4>
                <ul>
                  <li>Docker & Kubernetes</li>
                  <li>AWS & Azure</li>
                  <li>CI/CD</li>
                  <li>Git & GitHub</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="about-education">
            <h2>Formació</h2>
            <div className="education-item">
              <h3>Grau en Enginyeria Informàtica</h3>
              <span className="education-period">2015 - 2019</span>
              <p>Universitat Politècnica de Catalunya</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;