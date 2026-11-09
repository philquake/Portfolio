# Portfolio (Phillip Cole)

Personal developer portfolio. It has three jobs: show software projects, attract freelance clients, and build a personal brand. Brand name on the site is **Phillip Cole**.

@AGENTS.md

## Stack

- Next.js 16 (App Router, Turbopack, `cacheComponents` on), React 19, TypeScript
- Tailwind CSS v4 (theme tokens in `app/globals.css`, no `tailwind.config`)
- `next-themes` (dark by default, class on `<html>`), `lucide-react` icons
- `react-hook-form` + `zod` for forms, `gray-matter` + `marked` for the blog
- No database. No animation library: one CSS entrance animation (`.rise`)

## Commands

```bash
npm run dev      # http://localhost:3000
npm run build    # production build; run this before calling work done
npm run lint
npm test         # node --test lib/  (form validation)
```

## Where things live

| What | File |
| --- | --- |
| Name, email, GitHub, LinkedIn, resume, photo, location | `data/site.ts` |
| Projects and case studies | `data/projects.ts` |
| Skills and "Currently Exploring" | `data/skills.ts` |
| Services, "How I Work" steps, form options | `data/services.ts` |
| Nav links | `data/navigation.ts` |
| Blog articles | `content/blog/*.md` (file name = slug) |
| About page copy | `app/(site)/about/page.tsx` |
| Colours, theme, Markdown styles | `app/globals.css` |
| Contact email endpoint (Resend over `fetch`) | `app/api/contact/route.ts` |
| Form schema, shared by client and server | `lib/validation.ts` |

```text
app/(site)/     pages that share Header and Footer
app/demos/      two fictional business sites with their own look
app/api/        contact endpoint
components/     layout, navigation, sections, projects, forms, ui
```

## Rules for this project

- **Never invent facts about Phillip.** No employment history, qualifications, years of experience, testimonials, statistics, pricing or live URLs. Project facts come from each project's own README.
- **Content goes in `data/` or `content/`, not in page components.** A blank `""` in `data/site.ts` hides the matching link or button everywhere; keep that behaviour.
- **Server Components by default.** The only client components are `Nav`, `ThemeToggle`, `ProjectFilter` and `ContactForm`.
- **Design:** dark-first, near-black background, one teal accent, thin borders, small radius (`rounded-md`), Geist and Geist Mono. Use the tokens (`bg-bg`, `bg-surface`, `border-line`, `text-fg`, `text-muted`, `text-accent`), not raw colours. The demo sites are the one exception: they use fixed hex colours so they ignore the theme.
- **Drafts:** blog posts with `draft: true` show a "Draft" label and are kept out of the sitemap and search engines.
- Demo businesses (Saltmarsh Coffee, Marlow Home Repairs) are fictional and must stay labelled as demonstrations.

## Gotchas

- This Next.js version differs from older ones. Read `node_modules/next/dist/docs/` before using an unfamiliar API.
- Page files may only export Next's own fields (`metadata`, `generateStaticParams`, default). Other exports fail the build.
- With `cacheComponents`, `generateStaticParams` must return at least one entry, so keep at least one file in `content/blog`.
- Do not write JSON config with Windows PowerShell `Set-Content -Encoding utf8`: it adds a byte-order mark that breaks the build. Use the Edit/Write tools.
- `tsconfig.json` has `allowImportingTsExtensions` so the test can import `./validation.ts`.

## Source projects (for screenshots and facts)

| Project | Folder | Notes |
| --- | --- | --- |
| Penny | `C:\Users\phill\Documents\Projects\Penny` | Flutter + FastAPI. Private repo, so no source link. Store screenshots in `store/play/screenshots/`. |
| CXC Platform (compile/) | `C:\Users\phill\Documents\Projects\cxc_platform` | Django. Public repo `philquake/cxc_platform`. Runs locally with `DB_SSLMODE=disable` and `.venv\Scripts\python.exe manage.py runserver`. |
| Pokédatabase | `C:\Users\phill\Documents\Projects\PokeDatabase` | Django + SQLite. Public repo `philquake/PokeDatabase`. Pages are under `/pokemon/` (for example `/pokemon/pokedex/`). |

Screenshots: desktop 1440×900 PNG, phone portrait, in `public/images/projects/<slug>/`, listed in the project's `screenshots` array.

## Status (9 Nov 2026)

Done: all pages (home, about, projects with filter, five case studies, services with inquiry form, blog, contact), theme toggle, mobile nav, SEO metadata, Open Graph image, sitemap, robots, 404, two demo sites. Build, lint and tests pass.

Not done:

- Screenshots: Pokédatabase Pokédex list and detail page; both demo sites
- `data/site.ts`: email, LinkedIn, resume PDF, profile photo, location
- Review of drafted copy: About page, case-study "lessons learned", budget ranges
- Blog articles are outlines only
- Resend keys for the contact form (`.env.example`)
- Git repository, GitHub push, deployment (Vercel or Cloudflare via OpenNext)
- Lighthouse run; visual check of homepage project cards and light theme
