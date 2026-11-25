# Portfolio

Personal portfolio landing page — Astro + Tailwind CSS v4 + TypeScript. Static output, bilingual (EN default at `/`, VI at `/vi/`), light/dark theme. All content is **sample data** for now.

## Run

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/ (deploy to Vercel as-is)
npm run preview
npx astro check   # type-check
```

## Where to edit content

All content lives in `src/data/` (typed in `types.ts`). Translatable fields use `Localized = { en, vi }`.

| File | Content |
| --- | --- |
| `profile.ts` | name, role, tagline, about paragraphs, email, socials, `cvUrl` (`/cv.pdf` → replace `public/cv.pdf`) |
| `skills.ts` | grouped skills |
| `experience.ts` | jobs with localized bullets |
| `projects.ts` | projects (images in `public/projects/`) |
| `education.ts` | degrees + certifications |

## i18n

- Astro built-in routing configured in `astro.config.mjs` (`en` default, no prefix; `vi` under `/vi/`).
- `src/i18n/ui.ts` holds **all UI strings** for both languages, plus `useTranslations(lang)`, `getLangFromUrl(url)` and `localePath(lang, hash?)`. Add a key to both `en` and `vi` (TypeScript enforces parity).
- Pages `src/pages/index.astro` and `src/pages/vi/index.astro` both render `src/components/HomePage.astro` with a `lang` prop.

## Theming & style

Style follows the reference site: **Poppins** (300/400/500/600, self-hosted via `@fontsource/poppins`), strictly monochrome. Light is default; dark is a monochrome inversion via `class="dark"` on `<html>` (stored in `localStorage` `theme`, falling back to `prefers-color-scheme`; applied before paint in `BaseLayout.astro`).

Tokens live in `src/styles/global.css` (`bg-bg`, `bg-surface`, `text-fg`, `text-muted`, `border-line`, `bg-accent`/`text-accent` = primary dark, `bg-accent-soft`). Utility classes: `.container-page` (10rem side margin, 5% below 1200px), `.section`, `.eyebrow`, `.title`, `.btn`, `.details-container`, `.color-container`. Custom breakpoint `desk:` / `max-desk:` = 1200px (desktop nav vs hamburger). Motion: 300ms hover transitions only.

## Component contract

- `src/components/sections/<Name>.astro` — one file per section (Hero, About, Skills, Experience, Projects, Education, Contact, Footer). Each takes `{ lang: 'en' | 'vi' }`, renders a `<section id="...">` (matching the navbar anchors) and reads its data from `src/data/`. Section files should only need their own file to change.
- `src/components/ui/` — shared primitives: `SectionHeading` (`eyebrow`, `title`, `subtitle?`, `id`), `Button` (`variant`: filled/outline/project, `external`, `download`), `Tag`, `Card` (`variant`: details/color, `as`: div/article/li).
- `src/lib/format.ts` — `formatMonth` (locale-aware).
- `Navbar.astro` — sticky nav, theme toggle, EN|VI switcher, mobile menu.
