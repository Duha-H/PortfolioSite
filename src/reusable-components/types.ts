import { STATUSES } from "./constants";

export interface NavItemData {
  text: string;
  link: string;
  iconSrc: string;
  display?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  excerpt: string;
  description: string;
  media: string[]; // string of media sources
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

