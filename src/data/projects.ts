import type { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Pulse Analytics',
    description: {
      en: 'Privacy-friendly web analytics with real-time dashboards, processing 5M events per day.',
      vi: 'Công cụ phân tích web thân thiện quyền riêng tư với dashboard thời gian thực, xử lý 5 triệu sự kiện mỗi ngày.',
    },
    tech: ['TypeScript', 'ClickHouse', 'React'],
    github: 'https://github.com/example/pulse',
    demo: 'https://example.com/pulse',
    image: '/projects/pulse.svg',
  },
  {
    title: 'Taskflow',
    description: {
      en: 'Kanban-style team task manager with offline support and 2,000+ GitHub stars.',
      vi: 'Ứng dụng quản lý công việc nhóm kiểu Kanban, hỗ trợ offline và hơn 2.000 sao GitHub.',
    },
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/example/taskflow',
    demo: 'https://example.com/taskflow',
    image: '/projects/taskflow.svg',
  },
  {
    title: 'Shipwright CLI',
    description: {
      en: 'Command-line tool that scaffolds and deploys services, cutting setup time from hours to minutes.',
      vi: 'Công cụ dòng lệnh tạo khung và triển khai dịch vụ, rút ngắn thời gian thiết lập từ vài giờ xuống vài phút.',
    },
    tech: ['Go', 'Docker', 'Terraform'],
    github: 'https://github.com/example/shipwright',
    image: '/projects/shipwright.svg',
  },
  {
    title: 'Lexi — Vocabulary Coach',
    description: {
      en: 'Spaced-repetition mobile-first web app helping 8,000 learners study English vocabulary.',
      vi: 'Ứng dụng web ưu tiên di động dùng lặp lại ngắt quãng, giúp 8.000 người học từ vựng tiếng Anh.',
    },
    tech: ['Vue', 'FastAPI', 'Redis'],
    github: 'https://github.com/example/lexi',
    demo: 'https://example.com/lexi',
    image: '/projects/lexi.svg',
  },
  {
    title: 'Atlas Docs',
    description: {
      en: 'Static documentation generator with full-text search and 100/100 Lighthouse scores.',
      vi: 'Trình tạo tài liệu tĩnh với tìm kiếm toàn văn và điểm Lighthouse 100/100.',
    },
    tech: ['Astro', 'Tailwind CSS', 'MDX'],
    github: 'https://github.com/example/atlas',
    demo: 'https://example.com/atlas',
    image: '/projects/atlas.svg',
  },
];
