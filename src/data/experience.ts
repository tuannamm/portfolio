import type { Job } from './types';

export const experience: Job[] = [
  {
    company: 'Lumina Commerce',
    role: { en: 'Senior Software Engineer', vi: 'Kỹ sư phần mềm cao cấp' },
    location: { en: 'Ho Chi Minh City (Hybrid)', vi: 'TP. Hồ Chí Minh (Hybrid)' },
    start: '2023-03',
    end: null,
    bullets: [
      {
        en: 'Led a checkout rewrite in Next.js that cut p95 page load from 3.8s to 1.2s and lifted conversion by 11%.',
        vi: 'Dẫn dắt việc viết lại trang thanh toán bằng Next.js, giảm thời gian tải p95 từ 3,8s xuống 1,2s và tăng tỷ lệ chuyển đổi 11%.',
      },
      {
        en: 'Designed an event-driven order pipeline handling 2M+ events/day with 99.98% uptime.',
        vi: 'Thiết kế pipeline đơn hàng hướng sự kiện xử lý hơn 2 triệu sự kiện/ngày với uptime 99,98%.',
      },
      {
        en: 'Mentored 4 engineers and introduced code-review guidelines that reduced escaped bugs by 30%.',
        vi: 'Hướng dẫn 4 kỹ sư và xây dựng quy chuẩn code review giúp giảm 30% lỗi lọt ra production.',
      },
    ],
    tech: ['TypeScript', 'Next.js', 'NestJS', 'PostgreSQL', 'AWS'],
  },
  {
    company: 'Northwind Labs',
    role: { en: 'Software Engineer', vi: 'Kỹ sư phần mềm' },
    location: { en: 'Remote', vi: 'Từ xa' },
    start: '2020-06',
    end: '2023-02',
    bullets: [
      {
        en: 'Built a real-time analytics dashboard used by 40k+ monthly users, reducing report generation time by 70%.',
        vi: 'Xây dựng dashboard phân tích thời gian thực với hơn 40.000 người dùng mỗi tháng, giảm 70% thời gian tạo báo cáo.',
      },
      {
        en: 'Migrated a monolith to 6 services on Kubernetes, cutting infrastructure cost by 25%.',
        vi: 'Chuyển đổi hệ thống monolith sang 6 dịch vụ trên Kubernetes, giảm 25% chi phí hạ tầng.',
      },
      {
        en: 'Raised test coverage from 35% to 85% and cut deploy time from 40 to 8 minutes with CI/CD.',
        vi: 'Nâng độ phủ kiểm thử từ 35% lên 85% và rút ngắn thời gian triển khai từ 40 xuống 8 phút nhờ CI/CD.',
      },
    ],
    tech: ['React', 'Node.js', 'Kubernetes', 'Redis', 'GitHub Actions'],
  },
  {
    company: 'Brightside Studio',
    role: { en: 'Junior Web Developer', vi: 'Lập trình viên web' },
    location: { en: 'Da Nang', vi: 'Đà Nẵng' },
    start: '2018-08',
    end: '2020-05',
    bullets: [
      {
        en: 'Delivered 15+ client websites, improving average Lighthouse performance score from 62 to 94.',
        vi: 'Hoàn thành hơn 15 website cho khách hàng, nâng điểm Lighthouse hiệu năng trung bình từ 62 lên 94.',
      },
      {
        en: 'Built a reusable component library that shortened new project setup from 2 weeks to 3 days.',
        vi: 'Xây dựng thư viện component tái sử dụng, rút ngắn thời gian khởi tạo dự án từ 2 tuần xuống 3 ngày.',
      },
    ],
    tech: ['JavaScript', 'Vue', 'PHP', 'MySQL'],
  },
];
