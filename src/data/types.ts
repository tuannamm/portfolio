export type Localized = { en: string; vi: string };
export type Lang = keyof Localized;

export interface Profile {
  name: string;
  role: Localized;
  tagline: Localized;
  about: Localized[]; // paragraphs
  location: Localized;
  email: string;
  socials: { github: string; linkedin: string };
  cvUrl: string;
}

export interface SkillGroup {
  /** Maps to ui key `skills.<id>` */
  id: 'languages' | 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
  items: string[];
}

export interface Job {
  company: string;
  role: Localized;
  location: Localized;
  start: string; // YYYY-MM
  end: string | null; // null = present
  bullets: Localized[];
  tech: string[];
}

export interface Project {
  title: string;
  description: Localized;
  tech: string[];
  github?: string;
  demo?: string;
  image: string;
}

export interface Degree {
  school: string;
  degree: Localized;
  start: string; // YYYY
  end: string;
  note?: Localized;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}
