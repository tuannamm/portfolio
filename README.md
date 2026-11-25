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

## Theming

Light by default, dark via `class="dark"` on `<html>`. Choice is stored in `localStorage` (`theme`), falling back to `prefers-color-scheme`; an inline script in `BaseLayout.astro` applies it before paint. Colors are semantic tokens in `src/styles/global.css` (`bg-bg`, `bg-surface`, `text-fg`, `text-muted`, `border-line`, `bg-accent`, `text-accent`, `bg-accent-soft`) — change the accent in one place (`--c-accent`).

## Component contract

- `src/components/sections/<Name>.astro` — one file per section (Hero, About, Skills, Experience, Projects, Education, Contact, Footer). Each takes `{ lang: 'en' | 'vi' }`, renders a `<section id="...">` (matching the navbar anchors) and reads its data from `src/data/`. Section files should only need their own file to change.
- `src/components/ui/` — shared primitives: `SectionHeading`, `Button` (`variant`: primary/secondary/ghost, `external`, `download`), `Tag`, `Card` (`as`: div/article/li).
- `src/lib/format.ts` — `formatMonth` (locale-aware).
- `Navbar.astro` — sticky nav, theme toggle, EN|VI switcher, mobile menu.
