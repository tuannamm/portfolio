import type { Lang } from '../data/types';

/** '2023-03' -> 'Mar 2023' / 'Thg 3 2023' */
export function formatMonth(ym: string, lang: Lang): string {
  const [y, m] = ym.split('-').map(Number);
  return new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(y, m - 1, 1)));
}

/** '2025-09-14' -> 'Sep 14, 2025' / '14 thg 9, 2025' */
export function formatDate(iso: string, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-US', {
    dateStyle: 'medium',
    timeZone: 'UTC',
  }).format(new Date(iso));
}
