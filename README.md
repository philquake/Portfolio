# Phillip Cole: portfolio

Personal developer portfolio built with Next.js (App Router), TypeScript and Tailwind CSS.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm test         # form validation checks
```

## Where to edit content

| What | File |
| --- | --- |
| Name, email, GitHub, LinkedIn, resume, location | `data/site.ts` |
| Projects and case studies | `data/projects.ts` |
| Technologies and "Currently Exploring" | `data/skills.ts` |
| Services, process steps, form options | `data/services.ts` |
| Navigation links | `data/navigation.ts` |
| Blog articles (Markdown) | `content/blog/*.md` |
| About page copy | `app/(site)/about/page.tsx` |
| Colours and theme | `app/globals.css` |

Any value left as `""` in `data/site.ts` is hidden across the site.

### Screenshots

Put images in `public/images/projects/<project-slug>/` and list them in the project's `screenshots` array. Desktop shots are 1440×900; phone shots are portrait. A project with no screenshots shows a placeholder.

### Blog

Each file in `content/blog` is one article; the file name is the URL slug. Front matter fields: `title`, `excerpt`, `category`, `date` (quoted, `"YYYY-MM-DD"`), optional `cover`, and `draft`. Drafts are labelled "Draft" and kept out of search engines and the sitemap. Remove `draft: true` to publish.

### Resume

Put the PDF in `public/resume/` and set `resume` in `data/site.ts`. The download buttons appear once it is set.

## Contact form

The forms post to `app/api/contact/route.ts`, which sends email through [Resend](https://resend.com). Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` and `CONTACT_TO_EMAIL`. Without them the form still validates and then shows a fallback contact option.

## Deploying

The site needs a host that runs Next.js server routes (for the contact form). Both of these have free plans:

- **Vercel**: import the GitHub repository; no configuration needed.
- **Cloudflare Workers**: use the [OpenNext Cloudflare adapter](https://opennext.js.org/cloudflare).

Set `NEXT_PUBLIC_SITE_URL` to the live address, plus the contact form variables, in the host's environment settings.

## Structure

```text
app/(site)/     pages that share the header and footer
app/demos/      two demonstration business websites
app/api/        contact form endpoint
components/     layout, navigation, sections, projects, forms, ui
data/           all site content
content/blog/   Markdown articles
lib/            helpers, validation, blog loader
types/          shared TypeScript types
```
