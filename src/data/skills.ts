import {
  siTypescript, siReact, siNodedotjs, siNestjs, siExpress, siMongodb,
  siRedis, siRabbitmq, siGo, siElasticsearch, siApachekafka, siDocker, siKubernetes, siKeycloak, siOpentelemetry,
  type SimpleIcon,
} from 'simple-icons';
import type { SkillGroup } from './types';

export const skills: SkillGroup[] = [
  { id: 'languages', items: ['TypeScript', 'Go'] },
  { id: 'backend', items: ['Node.js', 'NestJS', 'Express.js', 'REST API', 'gRPC'] },
  { id: 'architecture', items: ['Microservices', 'Clean Architecture', 'Domain-Driven Design (DDD)', 'CQRS', 'Event-Driven Architecture'] },
  { id: 'database', items: ['MongoDB', 'Redis', 'Elasticsearch'] },
  { id: 'messaging', items: ['RabbitMQ', 'Kafka'] },
  { id: 'devops', items: ['Docker', 'Kubernetes', 'CI/CD', 'Keycloak', 'OpenTelemetry'] },
  { id: 'frontend', items: ['ReactJS'] },
];

// Build-time mapping only: none of the icon packages reach the client.
const brandIcons: Record<string, SimpleIcon> = {
  'Node.js': siNodedotjs, NestJS: siNestjs, 'Express.js': siExpress,
  MongoDB: siMongodb, Redis: siRedis, Elasticsearch: siElasticsearch,
  RabbitMQ: siRabbitmq, Kafka: siApachekafka, Go: siGo,
  ReactJS: siReact, TypeScript: siTypescript, Docker: siDocker,
  Kubernetes: siKubernetes, Keycloak: siKeycloak, OpenTelemetry: siOpentelemetry,
};

export interface SkillIcon {
  body: string;
  viewBox: string;
  color: string;
  darkColor: string;
  source: 'simple-icons' | 'generic';
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

// Concepts have no brand logo; each gets its own neutral diagram.
const conceptPaths: Record<string, string> = {
  gRPC: '<path d="M3 7h18m-5-5 5 5-5 5M21 17H3m5-5-5 5 5 5"/>',
  'REST API': '<path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18"/>',
  Microservices: '<rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><path d="M8 5h8M5 8v4h14V8m-7 4v4"/>',
  'Clean Architecture': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  'Domain-Driven Design (DDD)': '<path d="m12 2 9 5v10l-9 5-9-5V7Zm0 0v6m9-1-5 3m5 7-5-3m-4 8v-6m-9 1 5-3M3 7l5 3m4-3 4 2v6l-4 2-4-2V9Z"/>',
  CQRS: '<path d="M2 12h6m0 0 6-7h8M8 12l6 7h8M19 2l3 3-3 3m0 8 3 3-3 3"/>',
  'Event-Driven Architecture': '<circle cx="5" cy="12" r="3"/><path d="M11 7a7 7 0 0 1 0 10m3-13a11 11 0 0 1 0 16m3-19a15 15 0 0 1 0 22"/>',
  'CI/CD': '<path d="M5 7h14v10H5Zm3-3L5 7l3 3m8 4 3 3-3 3"/><circle cx="5" cy="17" r="2"/><circle cx="19" cy="7" r="2"/>',
};
const unknownPath = '<path d="m12 2 10 10-10 10L2 12Z"/><circle cx="12" cy="12" r="2"/>';

export function getSkillIcon(name: string): SkillIcon {
  const icon = Object.hasOwn(brandIcons, name) ? brandIcons[name] : undefined;
  if (icon) return {
    body: `<path d="${icon.path}"/>`, viewBox: '0 0 24 24',
    color: `#${icon.hex}`, darkColor: darkBrandColor(icon.hex), source: 'simple-icons',
  };
  const paths = Object.hasOwn(conceptPaths, name) ? conceptPaths[name] : unknownPath;
  return {
    body: `<g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</g>`,
    viewBox: '0 0 24 24', color: 'currentColor', darkColor: 'currentColor', source: 'generic',
  };
}
