import type { Lang } from '../data/types';

/** '2023-03' -> 'Mar 2023' / 'tháng 3 2023' */
export function formatMonth(ym: string, lang: Lang): string {
  const [y, m] = ym.split('-').map(Number);
  if (lang === 'vi') return `tháng ${m} ${y}`;
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(y, m - 1, 1)));
}
