import type { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Digi Tracker — Project & Workflow Management Platform',
    role: { en: 'Backend Developer', vi: 'Lập trình viên Backend' },
    description: {
      en: 'A microservices platform on NestJS built with Domain-Driven Design, Clean Architecture and CQRS.',
      vi: 'Nền tảng microservice trên NestJS xây dựng theo Domain-Driven Design, Clean Architecture và CQRS.',
    },
    highlights: [
      {
        en: 'API Gateway with JWT verification (JWKS), routing, rate limiting and correlation-ID propagation.',
        vi: 'API Gateway xử lý xác thực JWT (JWKS), định tuyến, giới hạn tốc độ và truyền correlation-ID.',
      },
      {
        en: 'Keycloak (OIDC) integration with Identity and Authorization workers; Redis decision caching with event-driven invalidation.',
        vi: 'Tích hợp Keycloak (OIDC) với các worker Identity và Authorization; cache quyết định bằng Redis, vô hiệu hóa theo sự kiện.',
      },
      {
        en: 'Asynchronous messaging on RabbitMQ: transactional outbox, idempotent consumers, dead-letter retry and sagas.',
        vi: 'Giao tiếp bất đồng bộ trên RabbitMQ: transactional outbox, idempotent consumer, retry với dead-letter và saga.',
      },
      {
        en: 'Real-time notifications with Centrifugo, tracing with OpenTelemetry, deployed on Kubernetes.',
        vi: 'Thông báo thời gian thực với Centrifugo, truy vết với OpenTelemetry, triển khai trên Kubernetes.',
      },
    ],
    tech: ['Microservices', 'NestJS', 'DDD', 'RabbitMQ', 'Kubernetes', 'Keycloak', 'OpenTelemetry'],
    image: '/projects/digi-tracker.svg',
  },
  {
    title: 'DMS — Document Management System',
    role: { en: 'Backend Developer', vi: 'Lập trình viên Backend' },
    description: {
      en: 'About 20 NestJS microservices behind a CQRS API Gateway for document and workflow management.',
      vi: 'Khoảng 20 microservice NestJS sau một API Gateway (CQRS) phục vụ quản lý tài liệu và quy trình.',
    },
    highlights: [
      {
        en: 'API Gateway mapping REST routes from OpenAPI definitions to RabbitMQ/TCP messages, with circuit breaker and timeouts.',
        vi: 'API Gateway ánh xạ route REST từ định nghĩa OpenAPI sang thông điệp RabbitMQ/TCP, có circuit breaker và timeout.',
      },
      {
        en: 'BPMN process management service with real-time updates to clients via Server-Sent Events.',
        vi: 'Dịch vụ quản lý quy trình BPMN, đẩy cập nhật thời gian thực tới client qua Server-Sent Events.',
      },
      {
        en: 'Configuration-driven Event Store (bucket pattern) and a rule-based notification and activity-log engine on MongoDB and Redis.',
        vi: 'Event Store điều khiển bằng cấu hình (bucket pattern) và engine thông báo, nhật ký hoạt động theo luật trên MongoDB và Redis.',
      },
      {
        en: 'Security workers: encryption/decryption, encrypted S3 URLs, account lockout and virus scanning of uploads.',
        vi: 'Các worker bảo mật: mã hóa/giải mã, URL S3 được mã hóa, khóa tài khoản và quét virus tệp tải lên.',
      },
    ],
    tech: ['Microservices', 'NestJS', 'CQRS', 'RabbitMQ', 'MongoDB', 'Redis'],
    image: '/projects/dms.svg',
  },
];
