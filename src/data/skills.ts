import type { SkillGroup } from './types';

export const skills: SkillGroup[] = [
  { id: 'languages', items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL'] },
  { id: 'frontend', items: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'Vue'] },
  { id: 'backend', items: ['Node.js', 'NestJS', 'FastAPI', 'GraphQL', 'REST'] },
  { id: 'database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
  { id: 'devops', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'] },
  { id: 'tools', items: ['Git', 'Figma', 'Jest', 'Playwright', 'Linux'] },
];
