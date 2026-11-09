import { ArrowRight, Download } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { site } from "@/data/site";
import { skills } from "@/data/skills";
import { cn, container } from "@/lib/utils";

/** Decorative editor panel, generated from the same data as the rest of the site. */
function CodePanel() {
  const key = "text-fg";
  const str = "text-accent";
  return (
    <div aria-hidden="true" className="overflow-hidden rounded-md border border-line bg-surface font-mono text-[13px] leading-6">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5 text-xs text-muted">
        <span className="size-2 rounded-full bg-accent" />
        developer.ts
      </div>
      <pre className="overflow-x-auto p-5 text-muted">
        <span>export const</span> <span className={key}>developer</span> = {"{\n"}
        {"  "}
        <span className={key}>name</span>: <span className={str}>&quot;{site.name}&quot;</span>,{"\n"}
        {"  "}
        <span className={key}>role</span>: <span className={str}>&quot;{site.title}&quot;</span>,{"\n"}
        {"  "}
        <span className={key}>builds</span>: [<span className={str}>&quot;web apps&quot;</span>,{" "}
        <span className={str}>&quot;mobile apps&quot;</span>, <span className={str}>&quot;APIs&quot;</span>],{"\n"}
        {"  "}
        <span className={key}>stack</span>: {"{\n"}
        {skills.slice(0, 4).map((group) => (
          <span key={group.category}>
            {"    "}
            <span className={key}>{group.category.toLowerCase()}</span>: [
            {group.items.slice(0, 3).map((item, i) => (
              <span key={item}>
                {i > 0 && ", "}
                <span className={str}>&quot;{item}&quot;</span>
              </span>
            ))}
            ],{"\n"}
          </span>
        ))}
        {"  },\n"}
        {"  "}
        <span className={key}>available</span>: <span className={str}>true</span>,{"\n"}
        {"};"}
      </pre>
    </div>
  );
}

export function Hero() {
  return (
    <section className={cn(container, "grid items-center gap-12 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16")}>
      <div className="rise">
        <p className="inline-flex items-center gap-2 font-mono text-sm text-muted">
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
          {site.availability}
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
          Building Practical Software. <span className="text-muted">Creating Digital Solutions.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">{site.bio}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
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
        <div className="mt-6">
          <SocialLinks />
        </div>
      </div>
      <div className="rise [animation-delay:150ms]">
        <CodePanel />
      </div>
    </section>
  );
}
