import universityOfScienceLogo from '../assets/logos/university-of-science.png';
import type { Certification, Degree } from './types';

export const education: Degree[] = [
  {
    school: { en: 'University of Science', vi: 'Trường Đại học Khoa học Tự nhiên' },
    logo: universityOfScienceLogo,
    start: '2019',
    end: '2023',
    note: { en: 'GPA: 3.50/4.00', vi: 'GPA: 3,50/4,00' },
  },
];

export const certifications: Certification[] = [
  { name: 'TOEIC — Listening & Reading 800 · Speaking & Writing 250', issuer: 'ETS' },
];
