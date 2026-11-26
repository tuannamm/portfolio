import type { Profile } from './types';

export const profile: Profile = {
  name: { en: 'Nguyen Tran Tuan Nam', vi: 'Nguyễn Trần Tuấn Nam' },
  initials: 'TN',
  role: { en: 'Backend Software Engineer', vi: 'Kỹ sư phần mềm Backend' },
  tagline: {
    en: 'I build backend microservices with Node.js and NestJS — DDD, Clean Architecture and CQRS, event-driven systems on RabbitMQ, deployed on Docker and Kubernetes.',
    vi: 'Tôi xây dựng các microservice backend với Node.js và NestJS — DDD, Clean Architecture và CQRS, hệ thống hướng sự kiện trên RabbitMQ, triển khai bằng Docker và Kubernetes.',
  },
  about: [
    {
      en: 'I am a backend engineer at DIGI-TEXX, where I build microservices that serve machine-learning models — detection, OCR and image processing — as REST APIs, using DDD, Clean Architecture and CQRS. I also act as project manager, coordinating AI engineers, backend developers and OPS in a team of 10.',
      vi: 'Tôi là kỹ sư backend tại DIGI-TEXX, nơi tôi xây dựng các microservice phục vụ mô hình học máy — nhận diện, OCR và xử lý ảnh — dưới dạng REST API, áp dụng DDD, Clean Architecture và CQRS. Tôi đồng thời đảm nhận vai trò quản lý dự án, điều phối kỹ sư AI, lập trình viên backend và đội OPS trong một nhóm 10 người.',
    },
    {
      en: 'I started as a Software Engineer Intern at AONETEK, working on accounting microservices with Express.js, MongoDB and ReactJS. I graduated from the University of Science (GPA 3.50/4.00).',
      vi: 'Tôi bắt đầu sự nghiệp với vị trí thực tập sinh kỹ sư phần mềm tại AONETEK, tham gia các microservice cho hệ thống kế toán với Express.js, MongoDB và ReactJS. Tôi tốt nghiệp Trường Đại học Khoa học Tự nhiên (GPA 3,50/4,00).',
    },
  ],
  location: { en: 'Ho Chi Minh City, Vietnam', vi: 'TP. Hồ Chí Minh, Việt Nam' },
  email: 'nttnnam@gmail.com',
  socials: {
    github: 'https://github.com/tuannamm',
    linkedin: 'https://www.linkedin.com/in/nguyentrantuannam',
  },
  cvUrl: '/NguyenTranTuanNam_Backend_Engineer_CV.pdf',
};
