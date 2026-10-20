export type ModalKey = 'P' | 'O1' | 'R' | 'T' | 'F' | 'O2' | 'L' | 'I' | 'O3';

export interface KeyItem {
  id: ModalKey;
  letter: string;
  label: string;
  sublabel: string;
  row: 1 | 2;
  colorType: 'terracotta' | 'brass' | 'olive' | 'parchment' | 'ink';
  description: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  category: 'AI & ML' | 'Developer Tools' | 'Hackathons & Systems' | 'Creative & Games';
  role: string;
  collaboration?: string;
  problem: string;
  implemented: string[];
  planned?: string[];
  techStack: string[];
  repoUrl: string;
  demoUrl?: string;
  status: 'Prototype' | 'In Development' | 'Hackathon Project' | 'Active Project';
  featuredImage?: string;
  galleryImages?: { url: string; caption: string }[];
  accentColor: string;
  badge?: string;
}

export interface TechCategory {
  title: string;
  iconName: string;
  items: {
    name: string;
    level?: string;
    note?: string;
  }[];
}

export interface TimelineMilestone {
  period: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
  highlights: string[];
  verifiedTag: string;
}
