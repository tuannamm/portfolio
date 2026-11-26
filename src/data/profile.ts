import type { Profile } from './types';

export const profile: Profile = {
  name: { en: 'Nguyen Tran Tuan Nam', vi: 'Nguyễn Trần Tuấn Nam' },
  role: { en: 'Backend Software Engineer', vi: 'Kỹ sư phần mềm Backend' },
  about: [
    {
      en: 'I am a backend engineer at DIGI-TEXX, where I build microservices that serve machine-learning models — detection, OCR and image processing — as REST APIs, using DDD, Clean Architecture and CQRS. I also act as project manager, coordinating AI engineers, backend developers and OPS in a team of 10.',
      vi: 'Tôi là kỹ sư backend tại DIGI-TEXX, nơi tôi xây dựng các microservice phục vụ mô hình học máy — nhận diện, OCR và xử lý ảnh — dưới dạng REST API, áp dụng DDD, Clean Architecture và CQRS. Tôi đồng thời đảm nhận vai trò quản lý dự án, điều phối kỹ sư AI, lập trình viên backend và đội OPS trong một nhóm 10 người.',
    },
    {
      en: 'I started as a Software Engineer Intern at AONETEK, building an accounting system with Express.js, MongoDB and ReactJS. I graduated from the University of Science (GPA 3.50/4.00).',
      vi: 'Tôi bắt đầu sự nghiệp với vị trí thực tập sinh kỹ sư phần mềm tại AONETEK, xây dựng hệ thống kế toán với Express.js, MongoDB và ReactJS. Tôi tốt nghiệp Trường Đại học Khoa học Tự nhiên (GPA 3,50/4,00).',
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
