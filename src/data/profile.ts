import type { Profile } from './types';

export const profile: Profile = {
  name: { en: 'Nguyen Tran Tuan Nam', vi: 'Nguyễn Trần Tuấn Nam' },
  initials: 'TN',
  role: { en: 'Full-stack Software Engineer', vi: 'Kỹ sư phần mềm Full-stack' },
  tagline: {
    en: 'I build fast, reliable web products — from polished interfaces to scalable APIs.',
    vi: 'Tôi xây dựng các sản phẩm web nhanh và ổn định — từ giao diện tinh tế đến API có khả năng mở rộng.',
  },
  about: [
    {
      en: 'I am a software engineer with 6+ years of experience shipping web applications used by hundreds of thousands of people. I enjoy the whole stack, but care most about performance, accessibility and clear, maintainable code.',
      vi: 'Tôi là kỹ sư phần mềm với hơn 6 năm kinh nghiệm phát triển các ứng dụng web phục vụ hàng trăm nghìn người dùng. Tôi làm việc trên toàn bộ stack, nhưng quan tâm nhất đến hiệu năng, khả năng truy cập và mã nguồn rõ ràng, dễ bảo trì.',
    },
    {
      en: 'Outside of work I write about engineering, contribute to open source and mentor junior developers.',
      vi: 'Ngoài giờ làm việc, tôi viết về kỹ thuật, đóng góp cho mã nguồn mở và hướng dẫn các lập trình viên mới vào nghề.',
    },
  ],
  location: { en: 'Ho Chi Minh City, Vietnam', vi: 'TP. Hồ Chí Minh, Việt Nam' },
  email: 'hello@example.com',
  socials: {
    github: 'https://github.com/example',
    linkedin: 'https://www.linkedin.com/in/example',
  },
  cvUrl: '/cv.pdf',
};
