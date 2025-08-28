import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, projectCategories } from '../data/projects';
import './Projects.css';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => {
        return project.category.includes(selectedCategory);
      });

  return (
    <div className="projects-page">
      <div className="projects-container">
        <header className="projects-header">
          <h1>Els Meus Projectes</h1>
          <p>
            Una selecció de projectes de la meva etapa com a desenvolupador web, previs a la meva transició cap al món del producte. Cal tenir en compte que alguns poden estar mantinguts per tercers i d'altres ja no reben manteniment, de manera que tant el codi com el contingut poden haver canviat i els enllaços poden deixar d'estar accessibles.
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
            // Get image URL from project
            const getImageUrl = (project: any) => {
              if (project.images && project.images.length > 0) {
                return project.images[0].url;
              }
              return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzM3NDE1MSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWF0Z2UgZGVsIFByb2plY3RlPC90ZXh0Pjwvc3ZnPg==';
            };

            // Get technologies - limit to 3 for cleaner cards
            const getTechnologies = (project: any) => {
              return project.techStack.slice(0, 3);
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
                  <h3 className="project-title">
                    <Link to={`/projects/${project.id}`}>{project.title}</Link>
                  </h3>
                  <div className="project-technologies">
                    {getTechnologies(project).map((tech: string) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
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