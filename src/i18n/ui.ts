export const languages = { en: 'English', vi: 'Tiếng Việt' } as const;
export type Lang = keyof typeof languages;
const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.skip': 'Skip to content',

    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Career',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.menu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.primary': 'Primary',
    'nav.theme': 'Toggle dark mode',
    'nav.language': 'Language',
    'nav.switchTo': 'Switch language to',

    'hero.greeting': "Hi, I'm",
    'hero.cta.contact': 'Get in touch',
    'hero.cta.cv': 'Download CV',

    'about.eyebrow': 'Get To Know More',
    'about.title': 'About',
    'about.location': 'Based in',
    'about.facts.years': 'Years of experience',
    'about.facts.companies': 'Companies',
    'hero.github': 'GitHub profile',
    'hero.linkedin': 'LinkedIn profile',

    'skills.eyebrow': 'Explore My',
    'skills.title': 'Skills',
    'skills.languages': 'Languages',
    'skills.backendFrontend': 'Backend & Frontend',
    'skills.architecture': 'Architecture & Design',
    'skills.devops': 'DevOps & Cloud',
    'skills.database': 'Database',
    'skills.messaging': 'Message Brokers',

    'experience.eyebrow': 'My Journey',
    'experience.title': 'Career History',
    'experience.present': 'Present',

    'projects.eyebrow': 'Browse My Recent',
    'projects.title': 'Projects',
    'projects.source': 'Source',
    'projects.demo': 'Live demo',

    'education.eyebrow': 'My Background',
    'education.title': 'Education & Certifications',
    'education.education': 'Education',
    'education.certifications': 'Certifications',
    'education.credential': 'View credential',

    'contact.eyebrow': 'Get in Touch',
    'contact.title': 'Contact',
    'contact.copyEmail': 'Copy email',
    'contact.copied': 'Copied!',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',

    'footer.nav': 'Footer',
    'footer.rights': 'All rights reserved.',
    'footer.backToTop': 'Back to top',
  },
  vi: {
    'meta.skip': 'Bỏ qua đến nội dung',

    'nav.about': 'Giới thiệu',
    'nav.skills': 'Kỹ năng',
    'nav.experience': 'Sự nghiệp',
    'nav.projects': 'Dự án',
    'nav.education': 'Học vấn',
    'nav.contact': 'Liên hệ',
    'nav.menu': 'Mở menu',
    'nav.closeMenu': 'Đóng menu',
    'nav.primary': 'Điều hướng chính',
    'nav.theme': 'Chuyển chế độ sáng/tối',
    'nav.language': 'Ngôn ngữ',
    'nav.switchTo': 'Chuyển ngôn ngữ sang',

    'hero.greeting': 'Xin chào, tôi là',
    'hero.cta.contact': 'Liên hệ',
    'hero.cta.cv': 'Tải CV',

    'about.eyebrow': 'Tìm hiểu thêm',
    'about.title': 'Giới thiệu',
    'about.location': 'Hiện sống tại',
    'about.facts.years': 'Năm kinh nghiệm',
    'about.facts.companies': 'Công ty đã làm việc',
    'hero.github': 'Trang GitHub',
    'hero.linkedin': 'Trang LinkedIn',

    'skills.eyebrow': 'Khám phá',
    'skills.title': 'Kỹ năng',
    'skills.languages': 'Ngôn ngữ lập trình',
    'skills.backendFrontend': 'Backend & Frontend',
    'skills.architecture': 'Kiến trúc & Thiết kế',
    'skills.devops': 'DevOps & Đám mây',
    'skills.database': 'Cơ sở dữ liệu',
    'skills.messaging': 'Message Broker',

    'experience.eyebrow': 'Hành trình của tôi',
    'experience.title': 'Lịch sử nghề nghiệp',
    'experience.present': 'Hiện tại',

    'projects.eyebrow': 'Dự án gần đây',
    'projects.title': 'Dự án',
    'projects.source': 'Mã nguồn',
    'projects.demo': 'Xem demo',

    'education.eyebrow': 'Nền tảng của tôi',
    'education.title': 'Học vấn & Chứng chỉ',
    'education.education': 'Học vấn',
    'education.certifications': 'Chứng chỉ',
    'education.credential': 'Xem chứng chỉ',

    'contact.eyebrow': 'Hãy liên hệ',
    'contact.title': 'Liên hệ',
    'contact.copyEmail': 'Sao chép email',
    'contact.copied': 'Đã sao chép!',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',

    'footer.nav': 'Chân trang',
    'footer.rights': 'Bảo lưu mọi quyền.',
    'footer.backToTop': 'Lên đầu trang',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Path for a given language, e.g. localePath('vi', '#about') => '/vi/#about' */
export function localePath(lang: Lang, hash = ''): string {
  return `${lang === defaultLang ? '/' : `/${lang}/`}${hash}`;
}
