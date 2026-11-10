# Portfolio (Phillip Cole)

Personal developer portfolio. It has three jobs: show software projects, attract freelance clients, and build a personal brand. Brand name on the site is **Phillip Cole**.

@AGENTS.md

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript. Hosted on Cloudflare Workers via `@opennextjs/cloudflare` (`cacheComponents` is OFF because it hangs on Workers)
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
- Workers have no filesystem: blog Markdown is compiled to `lib/posts.generated.json` by `scripts/build-posts.mjs` (runs on `npm run dev` and `build`; gitignored). Never read files at request time. Keep at least one file in `content/blog`.
- Do not turn `cacheComponents` back on: the Worker returns error 1101.
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

Done: all pages (home, about, projects with filter, five case studies, services with inquiry form, blog, contact), theme toggle, mobile nav, SEO metadata, Open Graph image, sitemap, robots, 404, two demo sites. All project screenshots. `data/site.ts` has email, LinkedIn, location ("Jamaica") and resume (`public/resume/phillip-cole-resume.pdf`, phone and email removed). About copy, case studies and budget ranges approved. Visual check (desktop/phone, both themes) and Lighthouse (all 96+) done. Git repo `philquake/Portfolio` (private, `main`). Live on Vercel (project `portfolio`, scope `cole-world`, git auto-deploy on push): https://portfolio-gilt-kappa-1e5wjyy1gv.vercel.app. Env vars set in Vercel: `NEXT_PUBLIC_SITE_URL`, `CONTACT_TO_EMAIL`. Build, lint and tests pass.

Blog: all three posts are published (approved by Phillip, 9 Nov 2026). The limited-budget post quotes free-tier limits from provider docs, last checked 9 Nov 2026; re-check them before editing.

Not done:

- `RESEND_API_KEY` in Vercel (add with `vercel env add RESEND_API_KEY production`), then redeploy and test the live contact form
- Profile photo (`profileImage` in `data/site.ts`)
- Optional: custom domain (the current Vercel alias has a random suffix); then update `NEXT_PUBLIC_SITE_URL`
