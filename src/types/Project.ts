// Base interface for backward compatibility
export interface ProjectBase {
  id: string;
  title: string;
  features: string[];
}

// Project structure
export interface Project extends ProjectBase {
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

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
}