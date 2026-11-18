import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { ProjectCover } from "@/components/projects/ProjectCard";
import { ButtonLink } from "@/components/ui/Button";
import GlareHover from "@/components/ui/GlareHover";
import SplitFlapText from "@/components/ui/SplitFlapText";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Tag } from "@/components/ui/Section";
import { getPosts } from "@/lib/blog";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { skills } from "@/data/skills";
import { cn, container } from "@/lib/utils";

/**
 * One tile of the home grid. Spans are literal class strings so Tailwind can see them.
 * `glare` wraps the tile in the hover sweep (used on project tiles); grid spans then go on the wrapper.
 */
function Card({ className, span, href, glare, children }: { className?: string; span?: string; href?: string; glare?: boolean; children: ReactNode }) {
  const cls = cn(
    "rise flex min-w-0 flex-col gap-3 rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/60",
    glare && "size-full",
    !glare && span,
    className,
  );
  const tile = href ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <div className={cls}>{children}</div>
  );
  if (!glare) return tile;
  return (
    <GlareHover className={span} width="100%" height="100%" borderRadius="0.75rem" glareColor="var(--accent)" glareOpacity={0.35}>
      {tile}
    </GlareHover>
  );
}

const Label = ({ children }: { children: ReactNode }) => <p className="font-mono text-xs uppercase tracking-wider text-muted">{children}</p>;

export function Bento() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const [lead, ...others] = featured;
  const post = getPosts().find((p) => !p.draft);

  return (
    <section className={cn(container, "grid gap-3 pb-20 pt-10 sm:pt-16 md:grid-cols-6")}>
      <Card className="justify-end bg-gradient-to-br from-accent/15 to-surface md:col-span-4 md:row-span-2 md:p-10">
        <p className="inline-flex items-center gap-2 font-mono text-sm text-muted">
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
          {site.availability}
        </p>
        <h1 className="mt-2 max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          Building Practical Software. <span className="text-muted">Creating Digital Solutions.</span>
        </h1>
        <p className="max-w-lg text-lg text-muted">{site.bio}</p>
        <SplitFlapText
          words={["WEB APPS", "MOBILE APPS", "BACKEND APIS", "AUTOMATION"]}
          padTo={12}
          fontSize={24}
          gap={4}
          tileRadius={4}
          tileColor="var(--bg)"
          textColor="var(--accent)"
          className="mt-2"
        />
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <ButtonLink href="/projects">
            View My Work <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Let&apos;s Work Together
          </ButtonLink>
          {site.resume && (
            <ButtonLink href={site.resume} variant="ghost" download>
              <Download className="size-4" aria-hidden="true" /> Resume
            </ButtonLink>
          )}
        </div>
        <SocialLinks />
      </Card>

      <Card href={`/projects/${lead.slug}`} span="md:col-span-2 md:row-span-2" glare>
        <Label>Featured · {lead.categories[0]}</Label>
        <ProjectCover project={lead} priority />
        <h2 className="text-xl font-semibold tracking-tight">{lead.name}</h2>
        <p className="text-sm text-muted">{lead.tagline}</p>
        <ul className="mt-auto flex flex-wrap gap-2">
          {lead.stack.slice(0, 3).map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>
      </Card>

      {others.map((p) => (
        <Card key={p.slug} href={`/projects/${p.slug}`} span="md:col-span-3" glare>
          <Label>Project · {p.categories[0]}</Label>
          <h2 className="text-xl font-semibold tracking-tight">{p.name}</h2>
          <p className="text-sm text-muted">{p.description}</p>
          <ul className="mt-auto flex flex-wrap gap-2 pt-2">
            {p.stack.slice(0, 4).map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        </Card>
      ))}

      <Card href="/services" className="md:col-span-3">
        <Label>Services</Label>
        <h2 className="text-xl font-semibold tracking-tight">What I can build for you</h2>
        <ul className="space-y-1.5 text-sm text-muted">
          {services.map((s) => (
            <li key={s.slug}>{s.title}</li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-accent">
          See all services <ArrowRight className="size-4" aria-hidden="true" />
        </span>
      </Card>

      <Card className="md:col-span-3">
        <Label>Technology</Label>
        <h2 className="text-xl font-semibold tracking-tight">The tools I build with</h2>
        <dl className="space-y-2 text-sm">
          {skills.map((g) => (
            <div key={g.category} className="flex gap-3">
              <dt className="w-20 shrink-0 font-mono text-xs leading-5 text-accent">{g.category}</dt>
              <dd className="text-muted">{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Card>

      {post && (
        <Card href={`/blog/${post.slug}`} className="md:col-span-3">
          <Label>Latest from the blog</Label>
          <h2 className="text-xl font-semibold tracking-tight">{post.title}</h2>
          <p className="text-sm text-muted">{post.excerpt}</p>
          <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-accent">
            Read the article <ArrowRight className="size-4" aria-hidden="true" />
          </span>
        </Card>
      )}

      <Card className={cn("gap-4 md:col-span-6 md:flex-row md:items-center md:justify-between", !post && "md:col-span-6")}>
        <div>
          <Label>Contact</Label>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Have a Project in Mind?</h2>
          <p className="mt-2 max-w-xl text-muted">Tell me what you are trying to build and I will suggest an approach.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">
            Get in touch <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          {site.email && (
            <ButtonLink href={`mailto:${site.email}`} variant="secondary">
              {site.email}
            </ButtonLink>
          )}
        </div>
      </Card>
    </section>
  );
}
