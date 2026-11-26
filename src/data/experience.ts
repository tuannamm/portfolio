import digiTexxLogo from '../assets/logos/digi-texx.svg';
import aonetekLogo from '../assets/logos/aonetek.jpeg';
import type { Job } from './types';

export const experience: Job[] = [
  {
    company: 'DIGI-TEXX',
    logo: digiTexxLogo,
    role: { en: 'Software Engineer – Project Manager', vi: 'Kỹ sư phần mềm – Quản lý dự án' },
    start: '2023-06',
    end: null,
    bullets: [
      {
        en: 'Built backend microservices with Node.js/NestJS to serve ML models (detection, OCR, image processing) as REST APIs, separating services by domain (inference, data management, job orchestration) for independent deployment and scaling.',
        vi: 'Xây dựng các microservice backend bằng Node.js/NestJS để cung cấp mô hình ML (nhận diện, OCR, xử lý ảnh) dưới dạng REST API, tách dịch vụ theo domain (suy luận, quản lý dữ liệu, điều phối tác vụ) để triển khai và mở rộng độc lập.',
      },
      {
        en: 'Applied DDD, Clean Architecture and CQRS; secured services via API Gateway and Keycloak, with Identity/Authorization workers for RBAC.',
        vi: 'Áp dụng DDD, Clean Architecture và CQRS; bảo mật dịch vụ qua API Gateway và Keycloak, cùng các worker Identity/Authorization cho RBAC.',
      },
      {
        en: 'Built event-driven communication on RabbitMQ (outbox, retry, sagas); deployed on Docker/Kubernetes with MongoDB, Redis and OpenTelemetry.',
        vi: 'Xây dựng giao tiếp hướng sự kiện trên RabbitMQ (outbox, retry, saga); triển khai trên Docker/Kubernetes với MongoDB, Redis và OpenTelemetry.',
      },
      {
        en: 'Coordinated AI engineers, backend developers and OPS teams: scoped requirements, planned milestones, tracked progress and reported project status (team of 10).',
        vi: 'Điều phối giữa kỹ sư AI, lập trình viên backend và đội OPS: xác định phạm vi yêu cầu, lập kế hoạch milestone, theo dõi tiến độ và báo cáo tình hình dự án (nhóm 10 người).',
      },
    ],
    tech: ['Node.js', 'NestJS', 'RabbitMQ', 'Keycloak', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'OpenTelemetry'],
  },
  {
    company: 'AONETEK',
    logo: aonetekLogo,
    role: { en: 'Software Engineer Intern', vi: 'Thực tập sinh kỹ sư phần mềm' },
    start: '2022-05',
    end: '2023-03',
    bullets: [
      {
        en: 'Contributed to microservices for an accounting system, building backend APIs with Express.js and MongoDB.',
        vi: 'Tham gia phát triển các microservice cho hệ thống kế toán, xây dựng backend API bằng Express.js và MongoDB.',
      },
      {
        en: 'Developed frontend interfaces with ReactJS and integrated them with backend REST APIs for accounting workflows.',
        vi: 'Phát triển giao diện frontend bằng ReactJS và tích hợp với REST API backend cho các quy trình kế toán.',
      },
      {
        en: 'Designed MongoDB schemas and queries, fixed bugs, and followed team code review and Git workflows.',
        vi: 'Thiết kế schema và truy vấn MongoDB, sửa lỗi, và tuân thủ quy trình code review và Git của nhóm.',
      },
    ],
    tech: ['ReactJS', 'Express.js', 'MongoDB', 'Microservices'],
  },
];
