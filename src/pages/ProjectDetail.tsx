import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects, projectCategories } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const category = projectCategories.find(cat => cat.id === project.category);

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <div className="breadcrumb">
          <Link to="/projects">← Tornar als Projectes</Link>
        </div>

        <header className="project-header">
          <div className="project-meta">
            <span className="project-category">{category?.name}</span>
            <span className="project-date">{project.date}</span>
          </div>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-short-description">{project.shortDescription}</p>
          
          <div className="project-links">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link demo"
              >
                🌐 Veure Demo
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link github"
              >
                📁 Codi Font
              </a>
            )}
          </div>
        </header>

        <div className="project-content">
          <div className="project-main">
            <section className="project-section">
              <h2>Descripció del Projecte</h2>
              <p>{project.fullDescription}</p>
            </section>

            <section className="project-section">
              <h2>Característiques Principals</h2>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className="project-section">
              <h2>Reptes Tècnics</h2>
              <ul className="challenges-list">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </section>

            <section className="project-section">
              <h2>Aprenentatges</h2>
              <ul className="learnings-list">
                {project.learnings.map((learning, index) => (
                  <li key={index}>{learning}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="project-sidebar">
            <div className="sidebar-section">
              <h3>Tecnologies Utilitzades</h3>
              <div className="technologies-list">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Informació del Projecte</h3>
              <div className="project-info">
                <div className="info-item">
                  <strong>Categoria:</strong>
                  <span>{category?.name}</span>
                </div>
                <div className="info-item">
                  <strong>Data de Finalització:</strong>
                  <span>{project.date}</span>
                </div>
                <div className="info-item">
                  <strong>Tecnologies:</strong>
                  <span>{project.technologies.length} tecnologies</span>
                </div>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Projectes Relacionats</h3>
              <div className="related-projects">
                {projects
                  .filter(p => p.id !== project.id && p.category === project.category)
                  .slice(0, 2)
                  .map(relatedProject => (
                    <Link 
                      key={relatedProject.id} 
                      to={`/projects/${relatedProject.id}`}
                      className="related-project"
                    >
                      <h4>{relatedProject.title}</h4>
                      <p>{relatedProject.shortDescription.slice(0, 80)}...</p>
                    </Link>
                  ))}
                {projects.filter(p => p.id !== project.id && p.category === project.category).length === 0 && (
                  <p className="no-related">No hi ha projectes relacionats</p>
                )}
              </div>
            </div>
          </aside>
        </div>

        <div className="project-navigation">
          <Link to="/projects" className="btn btn-secondary">
            ← Veure Tots els Projectes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;