// Base interface for backward compatibility
export interface ProjectBase {
  id: string;
  title: string;
  features: string[];
}

// Legacy project structure (for existing projects)
export interface LegacyProject extends ProjectBase {
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  category: string;
  date: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  challenges: string[];
  learnings: string[];
}

// New project structure (for enhanced projects like Smoking Paper)
export interface EnhancedProject extends ProjectBase {
  client: string;
  category: string[];
  links: {
    caseStudy?: string;
    site?: string;
  };
  summary: string;
  description: {
    short: string;
    long: string;
  };
  techStack: string[];
  images: Array<{
    url: string;
    alt: string;
    caption: string;
  }>;
  tags: string[];
}

// Union type for all projects
export type Project = LegacyProject | EnhancedProject;

// Type guards to differentiate between project types
export function isEnhancedProject(project: Project): project is EnhancedProject {
  return 'client' in project && 'summary' in project;
}

export function isLegacyProject(project: Project): project is LegacyProject {
  return 'shortDescription' in project && 'fullDescription' in project;
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
}