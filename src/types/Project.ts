export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  category: string;
  date: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  challenges: string[];
  learnings: string[];
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
}