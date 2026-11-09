import { ArrowRight, ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

/** 16:10 cover: one desktop screenshot, three phone screenshots, or a placeholder. */
export function ProjectCover({ project, priority }: { project: Project; priority?: boolean }) {
  const frame = "relative aspect-[16/10] overflow-hidden rounded-md border border-line bg-surface";
  const shots = project.screenshots;

  if (shots.length === 0) {
    return (
      <div className={cn(frame, "flex flex-col items-center justify-center gap-3 text-muted")}>
        <ImageIcon className="size-6" aria-hidden="true" />
        <p className="font-mono text-xs">Screenshot coming soon</p>
      </div>
    );
  }

  if (project.device === "phone") {
    return (
      <div className={cn(frame, "flex items-start justify-center gap-[4%] px-[8%] pt-[6%]")}>
        {shots.slice(0, 3).map((shot, i) => (
          <Image
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            width={1080}
            height={2160}
            sizes="(min-width: 768px) 180px, 28vw"
            priority={priority}
            className={cn("w-[28%] rounded-lg border border-line shadow-lg", i === 1 && "mt-[5%]")}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={frame}>
      <Image
        src={shots[0].src}
        alt={shots[0].alt}
        fill
        sizes="(min-width: 768px) 560px, 100vw"
        priority={priority}
        className="object-cover object-top"
      />
    </div>
  );
}

export function ProjectCard({ project, wide }: { project: Project; wide?: boolean }) {
  const href = `/projects/${project.slug}`;
  return (
    <article className={cn("group flex flex-col gap-6", wide && "md:col-span-2 md:grid md:grid-cols-2 md:items-center md:gap-10")}>
      <Link href={href} tabIndex={-1} aria-hidden="true" className="block transition-opacity group-hover:opacity-90">
        <ProjectCover project={project} priority={wide} />
      </Link>
      <div>
        <p className="font-mono text-xs text-accent">{project.categories.join(" · ")}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">
          <Link href={href} className="hover:text-accent">
            {project.name}
          </Link>
        </h3>
        <p className="text-sm text-muted">{project.tagline}</p>
        <p className="mt-3 text-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink href={href} variant="secondary">
            View Project <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          {project.sourceUrl && (
            <ButtonLink href={project.sourceUrl} variant="ghost">
              <GitHubIcon className="size-4" /> View Source
            </ButtonLink>
          )}
        </div>
      </div>
    </article>
  );
}
