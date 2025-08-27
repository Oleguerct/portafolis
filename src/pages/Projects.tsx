import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, projectCategories } from '../data/projects';
import { isEnhancedProject, isLegacyProject } from '../types/Project';
import './Projects.css';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => {
        if (isLegacyProject(project)) {
          return project.category === selectedCategory;
        } else {
          return project.category.includes(selectedCategory);
        }
      });

  return (
    <div className="projects-page">
      <div className="projects-container">
        <header className="projects-header">
          <h1>Els Meus Projectes</h1>
          <p>
            Descobreix una selecció dels projectes més rellevants que he desenvolupat, 
            centrats en tecnologies web modernes i solucions innovadores.
          </p>
        </header>

        <div className="filter-section">
          <h3>Filtrar per categoria:</h3>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              Tots
            </button>
            {projectCategories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => {
            // Get image URL based on project type
            const getImageUrl = (project: any) => {
              if (isLegacyProject(project)) {
                return project.imageUrl;
              } else if (isEnhancedProject(project) && project.images && project.images.length > 0) {
                return project.images[0].url;
              }
              return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzM3NDE1MSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWF0Z2UgZGVsIFByb2plY3RlPC90ZXh0Pjwvc3ZnPg==';
            };

            // Get description based on project type
            const getDescription = (project: any) => {
              if (isLegacyProject(project)) {
                return project.shortDescription;
              } else {
                return project.summary;
              }
            };

            // Get technologies based on project type
            const getTechnologies = (project: any) => {
              if (isLegacyProject(project)) {
                return project.technologies;
              } else {
                return project.techStack;
              }
            };

            // Get category display based on project type
            const getCategoryDisplay = (project: any) => {
              if (isLegacyProject(project)) {
                return projectCategories.find(cat => cat.id === project.category)?.name;
              } else {
                return project.category[0]; // Show first category for enhanced projects
              }
            };

            // Get date based on project type
            const getDate = (project: any) => {
              if (isLegacyProject(project)) {
                return project.date;
              } else {
                return '2024'; // Default for enhanced projects without date
              }
            };

            // Get links based on project type
            const getLinks = (project: any) => {
              if (isLegacyProject(project)) {
                return (
                  <>
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link demo">
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
                        GitHub
                      </a>
                    )}
                  </>
                );
              } else {
                return (
                  <>
                    {project.links.caseStudy && (
                      <a href={project.links.caseStudy} target="_blank" rel="noopener noreferrer" className="project-link case-study">
                        Case Study
                      </a>
                    )}
                    {project.links.site && (
                      <a href={project.links.site} target="_blank" rel="noopener noreferrer" className="project-link site">
                        Web
                      </a>
                    )}
                  </>
                );
              }
            };

            return (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img 
                    src={getImageUrl(project)} 
                    alt={project.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzM3NDE1MSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWF0Z2UgZGVsIFByb2plY3RlPC90ZXh0Pjwvc3ZnPg==';
                    }}
                  />
                  <div className="project-overlay">
                    <Link to={`/projects/${project.id}`} className="view-project-btn">
                      Veure Detalls
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-category">
                      {getCategoryDisplay(project)}
                    </span>
                    <span className="project-date">{getDate(project)}</span>
                  </div>
                  <h3 className="project-title">
                    <Link to={`/projects/${project.id}`}>{project.title}</Link>
                  </h3>
                  <p className="project-description">{getDescription(project)}</p>
                  <div className="project-technologies">
                    {getTechnologies(project).slice(0, 4).map((tech: string) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {getTechnologies(project).length > 4 && (
                      <span className="tech-tag more">+{getTechnologies(project).length - 4}</span>
                    )}
                  </div>
                  <div className="project-links">
                    {getLinks(project)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No s'han trobat projectes per aquesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;