export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  tech?: string[];
  link?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Section {
  HOME = 'home',
  WORKS = 'works',
  ABOUT = 'about',
  CONTACT = 'contact'
}