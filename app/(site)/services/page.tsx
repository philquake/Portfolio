import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { serviceIcons } from "@/components/sections/HomeSections";
import { ButtonLink } from "@/components/ui/Button";
import { PageHeader, Section } from "@/components/ui/Section";
import { process, services } from "@/data/services";
import { cn, container } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business websites, custom web applications, backend and API development, Flutter mobile apps, and automation and AI integration.",
  alternates: { canonical: "/services" },
};

const Bullets = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h3 className="font-mono text-xs text-accent">{title}</h3>
    <ul className="mt-3 space-y-2 text-sm text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="Websites, applications and the systems behind them"
        intro="I work with businesses, entrepreneurs and individuals. Every project starts with a conversation about what you need, and pricing is quoted per project once the scope is clear."
      />

      <div className={cn(container, "pb-8")}>
        {services.map((service) => {
          const Icon = serviceIcons[service.icon];
          return (
            <section
              key={service.slug}
              id={service.slug}
              className="grid scroll-mt-24 gap-8 border-t border-line py-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16"
            >
              <div>
                <Icon className="size-6 text-accent" aria-hidden="true" />
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">{service.title}</h2>
                <p className="mt-3 text-muted">{service.description}</p>
                <ButtonLink href="#inquiry" variant="secondary" className="mt-6">
                  Ask about this <ArrowRight className="size-4" aria-hidden="true" />
                </ButtonLink>
              </div>
              <div className="grid gap-8 sm:grid-cols-3">
                <Bullets title="Includes" items={service.includes} />
                <Bullets title="Useful for" items={service.applications} />
                <Bullets title="You receive" items={service.deliverables} />
              </div>
            </section>
          );
        })}
      </div>

      <Section label="Process" title="How I Work">
        <ol className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => (
            <li key={step.title} className="bg-bg p-6">
              <p className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section id="inquiry" className="scroll-mt-16 border-t border-line bg-surface py-20 sm:py-24">
        <div className={cn(container, "grid gap-12 lg:grid-cols-[1fr_1.4fr]")}>
          <div>
            <p className="font-mono text-sm text-accent">Project inquiry</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Have a Project in Mind?</h2>
            <p className="mt-4 text-muted">
              Tell me what you want to build. A few sentences about the goal, who it is for and any deadline is enough
              to start the conversation.
            </p>
          </div>
          <ContactForm variant="inquiry" />
        </div>
      </section>
    </>
  );
}
