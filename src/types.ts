export type ViewMode = 'home' | 'about' | 'courses' | 'resume' | 'blog' | 'portfolio' | 'contact' | 'curriculo-pdf';

export type Language = 'pt' | 'en' | 'es' | 'fr' | 'it';

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: 'ia' | 'dados' | 'arquitetura' | 'agilidade' | 'palestras';
  level: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Executivo' | string;
  duration: string;
  rating: number;
  students: number;
  image: string;
  description: string;
  syllabus: string[];
  skills: string[];
  featured?: boolean;
  price?: string;
  type?: 'course' | 'lecture';
}

export interface Lecture {
  id: string;
  title: string;
  subtitle: string;
  targetAudience: string;
  duration: string;
  format: string;
  description: string;
  topics: string[];
  skills: string[];
  image?: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  tags: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  clientOrProject: string;
  category: string;
  description: string;
  results: string[];
  technologies: string[];
  image: string;
  year: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  handle: string;
  color?: string;
  bgColor?: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  companyOrContext: string;
  type: 'client' | 'student';
  quote: string;
  highlight?: string;
  rating: number;
  avatarInitials: string;
  avatarGradient?: string;
  projectOrCourse?: string;
  date?: string;
}
