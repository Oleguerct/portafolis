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
            <h2>Perfil</h2>
            <p>
              Programador PHP amb més de 10 anys d'experiència. He treballat tant com a membre d'un equip com de forma autònoma.
              He desenvolupat webs com a programador full‑stack, utilitzant plataformes com Symfony, CodeIgniter i sobretot WordPress.
              Actualment treballo com a desenvolupador de producte amb Symfony i Vue, en una etapa més exigent que m'està permetent millorar les meves habilitats com a programador.
            </p>
          </section>

          <section className="about-skills">
            <h2>Habilitats</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <h4>Programació i frameworks</h4>
                <ul>
                  <li>PHP</li>
                  <li>Symfony</li>
                  <li>CodeIgniter</li>
                  <li>WordPress</li>
                  <li>WooCommerce</li>
                  <li>Vue</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                </ul>
              </div>
              <div className="skill-item">
                <h4>Infraestructura i eines</h4>
                <ul>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>PHPUnit</li>
                  <li>SCSS</li>
                </ul>
              </div>
              <div className="skill-item">
                <h4>Altres competències</h4>
                <ul>
                  <li>Programació full‑stack</li>
                  <li>Desenvolupament de producte</li>
                  <li>Maquetació web</li>
                  <li>Consultoria tecnològica</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="about-languages">
            <h2>Idiomes</h2>
            <div className="languages-list">
              <div className="language-item">
                <span className="language-name">Català:</span> Alt (oral i escrit)
              </div>
              <div className="language-item">
                <span className="language-name">Castellà:</span> Alt (oral i escrit)
              </div>
              <div className="language-item">
                <span className="language-name">Anglès:</span> Mig (escrit), Baix (oral)
              </div>
            </div>
          </section>

          <section className="about-experience">
            <h2>Experiència Professional</h2>
            <div className="experience-item">
              <h3>Infosoft · Programador Full Stack</h3>
              <span className="experience-period">2024 – 2025</span>
              <p>
                Resolució de bugs, millores de rendiment i implementació de noves funcionalitats per a una aplicació de gestió de centres escolars.
              </p>
              <div className="technologies">Tecnologies: PHP, Symfony, JavaScript, Vue, Git, PHPUnit, PostgreSQL</div>
            </div>
            <div className="experience-item">
              <h3>Suma Thinking Digital · Programador Full Stack</h3>
              <span className="experience-period">2021 – 2023</span>
              <p>
                Maquetació i programació de webs comercials i e‑commerce amb WordPress i WooCommerce, creació de themes a mida i desenvolupament de plugins.
                Aprovisionament i configuració d'entorns de desenvolupament i producció amb Docker Compose en entorn AWS.
              </p>
              <div className="technologies">Tecnologies: PHP, SCSS, jQuery, WordPress, WooCommerce, Git, Docker‑Compose, AWS</div>
            </div>
            <div className="experience-item">
              <h3>Freelance · Programador Full Stack</h3>
              <span className="experience-period">2019 – 2020</span>
              <p>
                Programació i maquetació de webs comercials i e‑commerce amb WordPress i WooCommerce.
              </p>
            </div>
            <div className="experience-item">
              <h3>Suma Thinking Digital · Programador Full Stack</h3>
              <span className="experience-period">2012 – 2019</span>
              <p>
                Maquetació i programació de webs comercials amb WordPress i altres tecnologies.
              </p>
            </div>
            <div className="experience-item">
              <h3>Autònom · Programador Web</h3>
              <span className="experience-period">2013 – 2017</span>
              <p>
                Desenvolupament de webs per a clients amb WordPress i altres tecnologies.
              </p>
            </div>
            <div className="experience-item">
              <h3>Sala Apolo (Barcelona) · Consultoria tecnològica</h3>
              <span className="experience-period">2016</span>
              <p>
                Consultoria tecnològica i desenvolupament de solucions digitals.
              </p>
            </div>
          </section>

          <section className="about-teaching">
            <h2>Experiència docent</h2>
            <div className="experience-item">
              <h3>Professor de Web/WordPress · BAU i EUMES</h3>
              <span className="experience-period">2015 – 2016</span>
            </div>
          </section>

          <section className="about-other-work">
            <h2>Altres experiències laborals</h2>
            <div className="other-work-list">
              <div className="other-work-item">
                <span className="work-highlight">Fundador i codirector de The Indian Runners (discogràfica)</span> (2011 – 2014)
              </div>
              <div className="other-work-item">
                Tècnic de so — feines esporàdiques (2006–2010)
              </div>
              <div className="other-work-item">
                Ajudant de maquinista (2008–2009)
              </div>
              <div className="other-work-item">
                Dependent de botiga de queviures (2008)
              </div>
              <div className="other-work-item">
                Venedor a botiga de música i so (2006–2007)
              </div>
              <div className="other-work-item">
                Temporer de la fruita (estiu 2002, 2003)
              </div>
              <div className="other-work-item">
                Peó de magatzem (estius 2004 i 2005)
              </div>
            </div>
          </section>

          <section className="about-education">
            <h2>Formació</h2>
            <div className="education-item">
              <h3>Programació orientada a objectes</h3>
              <span className="education-period">UOC · 2013</span>
            </div>
            <div className="education-item">
              <h3>Desenvolupament web</h3>
              <span className="education-period">ERAM · 2010</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;