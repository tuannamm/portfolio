import type { Post } from './types';

export const posts: Post[] = [
  {
    title: { en: 'Shaving 2 seconds off a checkout page', vi: 'Giảm 2 giây tải trang thanh toán' },
    excerpt: {
      en: 'A practical walkthrough of the profiling steps and fixes behind a 68% faster checkout.',
      vi: 'Các bước phân tích và tối ưu giúp trang thanh toán nhanh hơn 68%.',
    },
    url: 'https://example.com/blog/faster-checkout',
    date: '2025-09-14',
    readMinutes: 8,
  },
  {
    title: { en: 'Event-driven architecture without the hype', vi: 'Kiến trúc hướng sự kiện, bỏ qua cường điệu' },
    excerpt: {
      en: 'When events help, when they hurt, and how to keep a pipeline debuggable.',
      vi: 'Khi nào sự kiện hữu ích, khi nào gây hại, và cách giữ pipeline dễ gỡ lỗi.',
    },
    url: 'https://example.com/blog/event-driven',
    date: '2025-06-02',
    readMinutes: 11,
  },
  {
    title: { en: 'Designing accessible dark mode', vi: 'Thiết kế dark mode dễ truy cập' },
    excerpt: {
      en: 'Contrast ratios, color tokens and avoiding the flash of the wrong theme.',
      vi: 'Tỷ lệ tương phản, token màu và cách tránh nhấp nháy sai giao diện.',
    },
    url: 'https://example.com/blog/dark-mode',
    date: '2025-02-20',
    readMinutes: 6,
  },
];
