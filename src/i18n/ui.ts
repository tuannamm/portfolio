export const languages = { en: 'English', vi: 'Tiếng Việt' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

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
    'hero.available': 'Available for new opportunities',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'hero.cta.cv': 'Download CV',

    'about.eyebrow': 'Get To Know More',
    'about.title': 'About',
    'about.subtitle': 'A little about who I am and how I work.',
    'about.location': 'Based in',
    'about.facts.years': 'Years of experience',
    'about.facts.companies': 'Companies',
    'about.facts.projects': 'Projects shipped',
    'about.facts.certs': 'Certifications',
    'hero.github': 'GitHub profile',
    'hero.linkedin': 'LinkedIn profile',

    'skills.eyebrow': 'Explore My',
    'skills.title': 'Skills',
    'skills.subtitle': 'Tools and technologies I work with.',
    'skills.languages': 'Languages',
    'skills.messaging': 'Message Brokers',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.architecture': 'Architecture & Design',
    'skills.database': 'Database',
    'skills.devops': 'DevOps & Cloud',

    'experience.eyebrow': 'My Journey',
    'experience.title': 'Career History',
    'experience.subtitle': 'Where I have worked and what I have shipped.',
    'experience.present': 'Present',

    'projects.eyebrow': 'Browse My Recent',
    'projects.title': 'Projects',
    'projects.subtitle': 'A selection of things I have built.',
    'projects.source': 'Source',
    'projects.demo': 'Live demo',
    'projects.viewAll': 'View all on GitHub',

    'education.eyebrow': 'My Background',
    'education.title': 'Education & Certifications',
    'education.subtitle': 'Formal education and professional credentials.',
    'education.education': 'Education',
    'education.certifications': 'Certifications',
    'education.credential': 'View credential',

    'contact.eyebrow': 'Get in Touch',
    'contact.title': 'Contact',
    'contact.subtitle': "Let's build something together.",
    'contact.copy':
      "I'm open to full-time roles, freelance projects and interesting conversations. The best way to reach me is by email — I usually reply within a couple of days.",
    'contact.email': 'Email me',
    'contact.copyEmail': 'Copy email',
    'contact.copied': 'Copied!',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',

    'footer.nav': 'Footer',
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with Astro & Tailwind CSS.',
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
    'hero.available': 'Sẵn sàng cho cơ hội mới',
    'hero.cta.projects': 'Xem dự án',
    'hero.cta.contact': 'Liên hệ',
    'hero.cta.cv': 'Tải CV',

    'about.eyebrow': 'Tìm hiểu thêm',
    'about.title': 'Giới thiệu',
    'about.subtitle': 'Đôi nét về con người và cách làm việc của tôi.',
    'about.location': 'Hiện sống tại',
    'about.facts.years': 'Năm kinh nghiệm',
    'about.facts.companies': 'Công ty đã làm việc',
    'about.facts.projects': 'Dự án đã triển khai',
    'about.facts.certs': 'Chứng chỉ',
    'hero.github': 'Trang GitHub',
    'hero.linkedin': 'Trang LinkedIn',

    'skills.eyebrow': 'Khám phá',
    'skills.title': 'Kỹ năng',
    'skills.subtitle': 'Công cụ và công nghệ tôi sử dụng.',
    'skills.languages': 'Ngôn ngữ lập trình',
    'skills.messaging': 'Message Broker & Hàng đợi',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.architecture': 'Kiến trúc & Thiết kế',
    'skills.database': 'Cơ sở dữ liệu',
    'skills.devops': 'DevOps & Đám mây',

    'experience.eyebrow': 'Hành trình của tôi',
    'experience.title': 'Lịch sử nghề nghiệp',
    'experience.subtitle': 'Nơi tôi đã làm việc và những gì đã triển khai.',
    'experience.present': 'Hiện tại',

    'projects.eyebrow': 'Dự án gần đây',
    'projects.title': 'Dự án',
    'projects.subtitle': 'Một số sản phẩm tôi đã xây dựng.',
    'projects.source': 'Mã nguồn',
    'projects.demo': 'Xem demo',
    'projects.viewAll': 'Xem tất cả trên GitHub',

    'education.eyebrow': 'Nền tảng của tôi',
    'education.title': 'Học vấn & Chứng chỉ',
    'education.subtitle': 'Quá trình học tập và các chứng chỉ chuyên môn.',
    'education.education': 'Học vấn',
    'education.certifications': 'Chứng chỉ',
    'education.credential': 'Xem chứng chỉ',

    'contact.eyebrow': 'Hãy liên hệ',
    'contact.title': 'Liên hệ',
    'contact.subtitle': 'Cùng nhau xây dựng điều gì đó nhé.',
    'contact.copy':
      'Tôi sẵn sàng cho các vị trí toàn thời gian, dự án freelance và những cuộc trò chuyện thú vị. Cách tốt nhất để liên hệ là qua email — tôi thường phản hồi trong vài ngày.',
    'contact.email': 'Gửi email',
    'contact.copyEmail': 'Sao chép email',
    'contact.copied': 'Đã sao chép!',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',

    'footer.nav': 'Chân trang',
    'footer.rights': 'Bảo lưu mọi quyền.',
    'footer.built': 'Xây dựng với Astro & Tailwind CSS.',
    'footer.backToTop': 'Lên đầu trang',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first && first in ui ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Path for a given language, e.g. localePath('vi', '#about') => '/vi/#about' */
export function localePath(lang: Lang, hash = ''): string {
  return `${lang === defaultLang ? '/' : `/${lang}/`}${hash}`;
}
