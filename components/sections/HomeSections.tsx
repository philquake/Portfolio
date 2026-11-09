import { ArrowRight, Bot, Globe, LayoutDashboard, Server, Smartphone } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { skills } from "@/data/skills";
import { container } from "@/lib/utils";
import type { Service } from "@/types";

export const serviceIcons: Record<Service["icon"], typeof Globe> = {
  globe: Globe,
  layout: LayoutDashboard,
  server: Server,
  phone: Smartphone,
  bot: Bot,
};

export function TechOverview() {
  return (
    <Section label="Technology" title="The tools I build with">
      <dl className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {skills.map((group) => (
          <div key={group.category} className="bg-bg p-6 sm:last:col-span-2 lg:last:col-span-1">
            <dt className="font-mono text-xs text-accent">{group.category}</dt>
            <dd className="mt-4">
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  return (
    <Section
      label="Selected work"
      title="Featured projects"
      intro="Applications I have designed and built, from the database to the interface."
    >
      <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} wide={i === 0} />
        ))}
      </div>
      <div className="mt-14">
        <ButtonLink href="/projects" variant="secondary">
          All projects <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </Section>
  );
}

export function ServicesOverview() {
  return (
    <Section
      label="Services"
      title="What I can build for you"
      intro="I work with businesses and individuals who need a website, an application or the system behind one."
    >
      <ul className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = serviceIcons[service.icon];
          return (
            <li key={service.slug} className="bg-bg p-6">
              <Icon className="size-5 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-semibold">
                <Link href={`/services#${service.slug}`} className="hover:text-accent">
                  {service.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-muted">{service.summary}</p>
            </li>
          );
        })}
        <li className="flex flex-col justify-between gap-6 bg-surface p-6">
          <p className="text-sm text-muted">Not sure which of these fits? Tell me what you need and I will suggest an approach.</p>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-accent">
            See all services <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </li>
      </ul>
    </Section>
  );
}

export function AboutPreview() {
  return (
    <Section label="About">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">I build complete applications, not just parts of them.</h2>
        <div className="space-y-5 text-lg text-muted">
          <p>
            My work covers the whole path of a product: planning the data, building the backend and API, designing the
            interface, and deploying it. Penny and CXC Platform were both built that way.
          </p>
          <p>I care about software that is practical, tested and understandable by the next person who opens it.</p>
          <Link href="/about" className="inline-flex items-center gap-2 text-base font-medium text-accent">
            More about me <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

export function ContactCta() {
  return (
    <section className="border-t border-line bg-surface py-20 sm:py-24">
      <div className={container}>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">Have a Project in Mind?</h2>
        <p className="mt-5 max-w-xl text-lg text-muted">
          I am open to project inquiries, freelance work and professional connections. Tell me what you are trying to
          build.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact">
            Get in touch <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          {site.email && (
            <ButtonLink href={`mailto:${site.email}`} variant="secondary">
              {site.email}
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}
