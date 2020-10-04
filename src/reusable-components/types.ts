export interface NavItemData {
  text: string;
  link: string;
  iconSrc: string;
  display?: boolean;
}

export interface ProjectItem {
  title: string;
  excerpt: string;
  description: string;
  media: string[]; // string of media sources
  tech: string[];
  mode: 'solo' | 'team';
  openSource: boolean;
  releases?: string[];
  sourceUrl?: string;
  tags: string[];
}

