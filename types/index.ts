export type ProjectCategory =
  | "Web Applications"
  | "Mobile Applications"
  | "Backend and APIs"
  | "Database Projects"
  | "Business Websites";

export interface Screenshot {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  categories: ProjectCategory[];
  stack: string[];
  status: string;
  /** Phone screenshots are portrait and shown side by side. */
  device: "phone" | "desktop";
  screenshots: Screenshot[];
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
  caseStudy: {
    overview: string;
    problem: string;
    objectives: string[];
    solution: string;
    architecture: string[];
    features: string[];
    challenges: { challenge: string; solution: string }[];
    lessons: string[];
  };
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Service {
  slug: string;
  icon: "globe" | "layout" | "server" | "phone" | "bot";
  title: string;
  summary: string;
  includes: string[];
  description: string;
  applications: string[];
  deliverables: string[];
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  cover?: string;
  date: string;
  category: string;
  draft: boolean;
  readingTime: string;
  html: string;
}
