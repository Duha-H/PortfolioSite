import { STATUSES } from "./constants";

export interface NavItemData {
  text: string;
  link: any;
  iconSrc: string;
  display?: boolean;
  external?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  excerpt: string;
  description: string;
  media: MediaItem[]; // string of media sources
  tech: string[];
  mode: 'solo project' | 'team project';
  status: 'live' | 'wip' | 'comp';
  openSource: boolean;
  releases?: string[];
  sourceUrl?: string;
  projectUrl?: string;
  tags: string[];
  motivation?: any;
  appBreakdown?: string;
  contribution?: string;
  challenges?: string;
  roadmap?: string; // things you'd do differently, things planned for the future
}

export interface MediaItem {
  content: string;
  altText: string;
}

export interface Skill {
  name: string;
  logoUrl: string;
  level?: 0 | 1 | 2 | 3;
}