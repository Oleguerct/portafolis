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
});