import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects, projectCategories } from '../data/projects';
import { Project, isEnhancedProject, isLegacyProject } from '../types/Project';
import './ProjectDetail.css';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<Array<{url: string, alt: string, caption: string}>>([]);

  // Set images when project changes
  useEffect(() => {
    if (project && isEnhancedProject(project) && project.images) {
      setImages(project.images);
    }
  }, [project]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') {
          setLightboxOpen(false);
        } else if (e.key === 'ArrowLeft') {
          setCurrentImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
        } else if (e.key === 'ArrowRight') {
          setCurrentImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, images.length]);

  // Open lightbox
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Navigate to previous image
  const previousImage = () => {
    setCurrentImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
  };

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Helper function to render categories
  const renderCategories = (project: Project) => {
    if (isEnhancedProject(project)) {
      return project.category.map((cat, index) => (
        <span key={index} className="project-category">{cat}</span>
      ));
    } else {
      const category = projectCategories.find(cat => cat.id === project.category);
      return <span className="project-category">{category?.name}</span>;
    }
  };

  // Helper function to render project links
  const renderProjectLinks = (project: Project) => {
    if (isEnhancedProject(project)) {
      return (
        <div className="project-links">
          {project.links.caseStudy && (
            <a 
              href={project.links.caseStudy} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link case-study"
            >
              📋 Case Study
            </a>
          )}
          {project.links.site && (
            <a 
              href={project.links.site} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link site"
            >
              🌐 Veure Lloc Web
            </a>
          )}
        </div>
      );
    } else {
      return (
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
      );
    }
  };

  // Helper function to render project description
  const renderDescription = (project: Project) => {
    if (isEnhancedProject(project)) {
      return project.summary;
    } else {
      return project.shortDescription;
    }
  };

  // Helper function to render main content sections
  const renderMainContent = (project: Project) => {
    if (isEnhancedProject(project)) {
      return (
        <>
          <section className="project-section">
            <h2>Descripció del Projecte</h2>
            <p className="project-description-short">{project.description.short}</p>
            <p className="project-description-long">{project.description.long}</p>
          </section>

          {project.images && project.images.length > 0 && (
            <section className="project-section">
              <h2>Galeria del Projecte</h2>
              <div className="project-gallery">
                {project.images.map((image, index) => (
                  <div key={index} className="gallery-item">
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="gallery-image"
                      loading="lazy"
                      onClick={() => openLightbox(index)}
                      style={{ cursor: 'pointer' }}
                      title="Fes clic per veure en gran"
                    />
                    <p className="gallery-caption">{image.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      );
    } else {
      return (
        <>
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
        </>
      );
    }
  };

  // Helper function to render sidebar content
  const renderSidebarContent = (project: Project) => {
    if (isEnhancedProject(project)) {
      return (
        <>
          <div className="sidebar-section">
            <h3>Client</h3>
            <p className="client-name">{project.client}</p>
          </div>

          <div className="sidebar-section">
            <h3>Tecnologies Utilitzades</h3>
            <div className="technologies-list">
              {project.techStack.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Categories</h3>
            <div className="categories-list">
              {project.category.map(cat => (
                <span key={cat} className="category-tag">{cat}</span>
              ))}
            </div>
          </div>

          {project.tags && project.tags.length > 0 && (
            <div className="sidebar-section">
              <h3>Tags</h3>
              <div className="tags-list">
                {project.tags.map(tag => (
                  <span key={tag} className="tag-item">{tag}</span>
                ))}
              </div>
            </div>
          )}
        </>
      );
    } else {
      const category = projectCategories.find(cat => cat.id === project.category);
      return (
        <>
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
        </>
      );
    }
  };

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <div className="breadcrumb">
          <Link to="/projects">← Tornar als Projectes</Link>
        </div>

        <header className="project-header">
          <div className="project-meta">
            {renderCategories(project)}
            {isLegacyProject(project) && (
              <span className="project-date">{project.date}</span>
            )}
          </div>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-short-description">{renderDescription(project)}</p>
          
          {renderProjectLinks(project)}
        </header>

        <div className="project-content">
          <div className="project-main">
            {renderMainContent(project)}
          </div>

          <aside className="project-sidebar">
            {renderSidebarContent(project)}

            <div className="sidebar-section">
              <h3>Projectes Relacionats</h3>
              <div className="related-projects">
                {projects
                  .filter(p => {
                    if (p.id === project.id) return false;
                    
                    if (isEnhancedProject(project) && isEnhancedProject(p)) {
                      return project.category.some(cat => p.category.includes(cat));
                    } else if (isLegacyProject(project) && isLegacyProject(p)) {
                      return p.category === project.category;
                    }
                    return false;
                  })
                  .slice(0, 2)
                  .map(relatedProject => (
                    <Link 
                      key={relatedProject.id} 
                      to={`/projects/${relatedProject.id}`}
                      className="related-project"
                    >
                      <h4>{relatedProject.title}</h4>
                      <p>
                        {isEnhancedProject(relatedProject) 
                          ? relatedProject.summary.slice(0, 80) + '...'
                          : relatedProject.shortDescription.slice(0, 80) + '...'
                        }
                      </p>
                    </Link>
                  ))}
                {projects.filter(p => {
                  if (p.id === project.id) return false;
                  
                  if (isEnhancedProject(project) && isEnhancedProject(p)) {
                    return project.category.some(cat => p.category.includes(cat));
                  } else if (isLegacyProject(project) && isLegacyProject(p)) {
                    return p.category === project.category;
                  }
                  return false;
                }).length === 0 && (
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

      {/* Lightbox Modal */}
      {lightboxOpen && images.length > 0 && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>
            
            {images.length > 1 && (
              <button className="lightbox-nav lightbox-prev" onClick={previousImage}>
                ❮
              </button>
            )}
            
            <div className="lightbox-content">
              <img 
                src={images[currentImageIndex].url} 
                alt={images[currentImageIndex].alt}
                className="lightbox-image"
              />
              <div className="lightbox-caption">
                <p>{images[currentImageIndex].caption}</p>
                {images.length > 1 && (
                  <span className="lightbox-counter">
                    {currentImageIndex + 1} / {images.length}
                  </span>
                )}
              </div>
            </div>
            
            {images.length > 1 && (
              <button className="lightbox-nav lightbox-next" onClick={nextImage}>
                ❯
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;