import {
  siTypescript, siJavascript, siPython, siGo, siReact, siNextdotjs,
  siAstro, siTailwindcss, siVuedotjs, siNodedotjs, siNestjs, siFastapi,
  siGraphql, siPostgresql, siMongodb, siRedis, siElasticsearch, siDocker,
  siKubernetes, siTerraform, siGithubactions, siGit, siFigma, siJest, siLinux,
  type SimpleIcon,
} from 'simple-icons';
import devicon from '@iconify-json/devicon/icons.json';
import type { SkillGroup } from './types';

export const skills: SkillGroup[] = [
  { id: 'languages', items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL'] },
  { id: 'frontend', items: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'Vue'] },
  { id: 'backend', items: ['Node.js', 'NestJS', 'FastAPI', 'GraphQL', 'REST'] },
  { id: 'database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
  { id: 'devops', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'] },
  { id: 'tools', items: ['Git', 'Figma', 'Jest', 'Playwright', 'Linux'] },
];

// This mapping is consumed in Astro frontmatter only; no icon library reaches the client.
const brandIcons: Record<string, SimpleIcon> = {
  TypeScript: siTypescript, JavaScript: siJavascript, Python: siPython, Go: siGo,
  React: siReact, 'Next.js': siNextdotjs, Astro: siAstro, 'Tailwind CSS': siTailwindcss,
  Vue: siVuedotjs, 'Node.js': siNodedotjs, NestJS: siNestjs, FastAPI: siFastapi,
  GraphQL: siGraphql, PostgreSQL: siPostgresql, MongoDB: siMongodb, Redis: siRedis,
  Elasticsearch: siElasticsearch, Docker: siDocker, Kubernetes: siKubernetes,
  Terraform: siTerraform, 'GitHub Actions': siGithubactions, Git: siGit,
  Figma: siFigma, Jest: siJest, Linux: siLinux,
};

export interface SkillIcon {
  body: string;
  viewBox: string;
  color: string;
  darkColor: string;
  source: 'simple-icons' | 'devicon' | 'generic';
}

// Preserve foreground contrast when the official color is too dark against #121212.
function darkBrandColor(hex: string): string {
  const rgb = hex.match(/../g)!.map((channel) => {
    const value = parseInt(channel, 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  const luminance = rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
  return (luminance + 0.05) / (0.00605 + 0.05) < 3 ? 'currentColor' : `#${hex}`;
}

const genericBodies = {
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 8v5c0 4 16 4 16 0V8c-4 3-12 3-16 0Zm0 9v2c0 4 16 4 16 0v-2c-4 3-12 3-16 0Z"/>',
  api: '<path d="m8 5-7 7 7 7 2-2-5-5 5-5-2-2Zm8 0-2 2 5 5-5 5 2 2 7-7-7-7Zm-3-3-4 20h3l4-20h-3Z"/>',
};

export function getSkillIcon(name: string): SkillIcon {
  const icon = Object.hasOwn(brandIcons, name) ? brandIcons[name] : undefined;
  if (icon) return {
    body: `<path d="${icon.path}"/>`, viewBox: '0 0 24 24',
    color: `#${icon.hex}`, darkColor: darkBrandColor(icon.hex), source: 'simple-icons',
  };
  if (name === 'AWS' || name === 'Playwright') {
    const fallback = devicon.icons[name === 'AWS' ? 'amazonwebservices' : 'playwright'];
    const hex = name === 'AWS' ? 'FF9900' : '2EAD33';
    return {
      body: fallback.body.replace(/fill="[^"]*"/g, 'fill="currentColor"'),
      viewBox: `0 0 ${devicon.width} ${devicon.height}`, color: `#${hex}`,
      darkColor: darkBrandColor(hex), source: 'devicon',
    };
  }
  return {
    body: name === 'REST' ? genericBodies.api : genericBodies.database,
    viewBox: '0 0 24 24', color: 'currentColor', darkColor: 'currentColor', source: 'generic',
  };
}
