import { projects } from '../data/projects';
import { Project } from './Project';

describe('Project types', () => {
  test('Projects should have all required fields', () => {
    expect(projects.length).toBeGreaterThan(0);
    
    projects.forEach(project => {
      // All projects should have these fields
      expect(project.client).toBeDefined();
      expect(project.summary).toBeDefined();
      expect(project.description).toBeDefined();
      expect(project.techStack).toBeDefined();
      expect(project.features).toBeDefined(); // Inherited from ProjectBase
      expect(project.images).toBeDefined();
      expect(project.tags).toBeDefined();
      expect(project.category).toBeDefined();
      expect(Array.isArray(project.category)).toBe(true);
    });
  });

  test('smoking-paper-ecommerce project should be properly structured', () => {
    const smokingPaperProject = projects.find(p => p.id === 'smoking-paper-ecommerce');
    
    expect(smokingPaperProject).toBeDefined();
    
    if (smokingPaperProject) {
      expect(smokingPaperProject.client).toBe('Smoking Paper');
      expect(smokingPaperProject.features).toBeDefined();
      expect(smokingPaperProject.images).toBeDefined();
      expect(smokingPaperProject.techStack).toContain('React');
    }
  });

  test('romanesco-studio-web project should be properly structured', () => {
    const romanescoProject = projects.find(p => p.id === 'romanesco-studio-web');

    expect(romanescoProject).toBeDefined();

    if (romanescoProject) {
      expect(romanescoProject.client).toBe('Romanesco Studio');
      expect(romanescoProject.features).toBeDefined();
      expect(romanescoProject.images).toBeDefined();
      expect(romanescoProject.techStack).toContain('WordPress');
      expect(romanescoProject.category).toContain('corporate');
      expect(romanescoProject.tags).toContain('corporate');
    }
  });

  test('neumaticos-seminuevos-corporativa project should be properly structured', () => {
    const neumaticosProject = projects.find(p => p.id === 'neumaticos-seminuevos-corporativa');

    expect(neumaticosProject).toBeDefined();

    if (neumaticosProject) {
      expect(neumaticosProject.client).toBe('Neumáticos Seminuevos');
      expect(neumaticosProject.features).toBeDefined();
      expect(neumaticosProject.images).toBeDefined();
      expect(neumaticosProject.techStack).toContain('WordPress');
      expect(neumaticosProject.category).toContain('Web development');
      expect(neumaticosProject.links.caseStudy).toBe('https://sumatd.com/proyectos/web-corporativa-neumaticos-seminuevos/');
    }
  });
});