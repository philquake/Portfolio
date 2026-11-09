import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ProjectCover } from "@/components/projects/ProjectCard";
import { ContactCta } from "@/components/sections/HomeSections";
import { ButtonLink } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/Section";
import { getProject, projects } from "@/data/projects";
import { cn, container } from "@/lib/utils";

export const generateStaticParams = () => projects.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.name}: ${project.tagline}`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { images: project.screenshots[0] && project.device === "desktop" ? [project.screenshots[0].src] : undefined },
  };
}

const Block = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="grid gap-4 border-t border-line py-10 md:grid-cols-[14rem_1fr] md:gap-10">
    <h2 className="font-mono text-sm text-accent">{title}</h2>
    <div className="max-w-2xl text-muted">{children}</div>
  </section>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
        {item}
      </li>
    ))}
  </ul>
);

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const cs = project.caseStudy;
  const phone = project.device === "phone";

  return (
    <>
      <article className={cn(container, "pb-24 pt-12 sm:pt-16")}>
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
          <ArrowLeft className="size-4" aria-hidden="true" /> All projects
        </Link>

        <header className="rise mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-mono text-sm text-accent">{project.categories.join(" · ")}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{project.name}</h1>
            <p className="mt-2 text-lg text-muted">{project.tagline}</p>
            <p className="mt-5 text-muted">{project.description}</p>
            <p className="mt-5 text-sm">
              <span className="text-muted">Status:</span> {project.status}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl && (
                <ButtonLink href={project.liveUrl}>
                  View live demonstration <ExternalLink className="size-4" aria-hidden="true" />
                </ButtonLink>
              )}
              {project.sourceUrl && (
                <ButtonLink href={project.sourceUrl} variant="secondary">
                  <GitHubIcon className="size-4" /> View source
                </ButtonLink>
              )}
            </div>
          </div>
          <ProjectCover project={project} priority />
        </header>

        <div className="mt-16">
          <Block title="Overview">{cs.overview}</Block>
          <Block title="Problem or opportunity">{cs.problem}</Block>
          <Block title="Objectives">
            <List items={cs.objectives} />
          </Block>
          <Block title="Solution">{cs.solution}</Block>
          <Block title="Technical architecture">
            <List items={cs.architecture} />
          </Block>
          <Block title="Technologies used">
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech}>
                  <Tag>{tech}</Tag>
                </li>
              ))}
            </ul>
          </Block>
          <Block title="Key features">
            <List items={cs.features} />
          </Block>
          <Block title="Challenges and solutions">
            <dl className="space-y-6">
              {cs.challenges.map(({ challenge, solution }) => (
                <div key={challenge}>
                  <dt className="font-medium text-fg">{challenge}</dt>
                  <dd className="mt-1">{solution}</dd>
                </div>
              ))}
            </dl>
          </Block>
          <Block title="Lessons learned">
            <List items={cs.lessons} />
          </Block>
        </div>

        {project.screenshots.length > 0 && (
          <section className="border-t border-line py-10">
            <h2 className="font-mono text-sm text-accent">Screenshots</h2>
            <div className={cn("mt-8 grid gap-6", phone ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" : "md:grid-cols-2")}>
              {project.screenshots.map((shot) => (
                <Image
                  key={shot.src}
                  src={shot.src}
                  alt={shot.alt}
                  width={phone ? 1080 : 1440}
                  height={phone ? 2160 : 900}
                  sizes={phone ? "(min-width: 1024px) 170px, 45vw" : "(min-width: 768px) 560px, 100vw"}
                  className="h-auto w-full rounded-md border border-line"
                />
              ))}
            </div>
          </section>
        )}
      </article>
      <ContactCta />
    </>
  );
}
