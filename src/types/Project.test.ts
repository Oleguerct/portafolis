import { projects } from '../data/projects';
import { isEnhancedProject, isLegacyProject, EnhancedProject, LegacyProject } from './Project';

describe('Project types', () => {
  test('EnhancedProject should not have responsibilities or rewards fields', () => {
    const enhancedProjects = projects.filter(isEnhancedProject);
    
    expect(enhancedProjects.length).toBeGreaterThan(0);
    
    enhancedProjects.forEach(project => {
      // These fields should not exist in the simplified EnhancedProject
      expect((project as any).responsibilities).toBeUndefined();
      expect((project as any).rewards).toBeUndefined();
      
      // These fields should still exist
      expect(project.client).toBeDefined();
      expect(project.summary).toBeDefined();
      expect(project.description).toBeDefined();
      expect(project.techStack).toBeDefined();
      expect(project.features).toBeDefined(); // Inherited from ProjectBase
      expect(project.images).toBeDefined();
      expect(project.tags).toBeDefined();
    });
  });

  test('LegacyProject should still have all original fields including features', () => {
    const legacyProjects = projects.filter(isLegacyProject);
    
    expect(legacyProjects.length).toBeGreaterThan(0);
    
    legacyProjects.forEach(project => {
      expect(project.shortDescription).toBeDefined();
      expect(project.fullDescription).toBeDefined();
      expect(project.technologies).toBeDefined();
      expect(project.features).toBeDefined(); // Should still have features
      expect(project.challenges).toBeDefined();
      expect(project.learnings).toBeDefined();
    });
  });

  test('smoking-paper-ecommerce project should be simplified', () => {
    const smokingPaperProject = projects.find(p => p.id === 'smoking-paper-ecommerce');
    
    expect(smokingPaperProject).toBeDefined();
    expect(isEnhancedProject(smokingPaperProject!)).toBe(true);
    
    if (isEnhancedProject(smokingPaperProject!)) {
      // Should not have these fields
      expect((smokingPaperProject as any).responsibilities).toBeUndefined();
      expect((smokingPaperProject as any).rewards).toBeUndefined();
      
      // Should still have these fields
      expect(smokingPaperProject.client).toBe('Smoking Paper');
      expect(smokingPaperProject.features).toBeDefined();
      expect(smokingPaperProject.images).toBeDefined();
      expect(smokingPaperProject.techStack).toContain('React');
    }
  });
});