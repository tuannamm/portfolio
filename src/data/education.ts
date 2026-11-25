import type { Certification, Degree } from './types';

export const education: Degree[] = [
  {
    school: 'Ho Chi Minh City University of Technology',
    degree: {
      en: 'B.Eng. in Computer Science',
      vi: 'Cử nhân Kỹ thuật Khoa học Máy tính',
    },
    start: '2014',
    end: '2018',
    note: { en: 'Graduated with Honors, GPA 3.6/4.0', vi: 'Tốt nghiệp loại Giỏi, GPA 3,6/4,0' },
  },
];

export const certifications: Certification[] = [
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', year: '2023', url: 'https://example.com/aws' },
  { name: 'Certified Kubernetes Application Developer', issuer: 'CNCF', year: '2022', url: 'https://example.com/ckad' },
  { name: 'Professional Scrum Master I', issuer: 'Scrum.org', year: '2021' },
];
