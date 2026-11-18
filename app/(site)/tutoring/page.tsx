import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHeader, Section } from "@/components/ui/Section";
import { tutoring } from "@/data/services";
import { cn, container } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tutoring",
  description: "Online IT and CAPE Computer Science tutoring: one-on-one and small-group lessons for students and adults.",
  alternates: { canonical: "/tutoring" },
};

const List = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
    <ul className="mt-4 space-y-3 text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-3 border-t border-line pt-3">
          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function TutoringPage() {
  return (
    <>
      <PageHeader
        label="Tutoring"
        title="Learn IT. Ace CAPE."
        intro="One-on-one and small-group online lessons for students and adults, with clear explanations, worked examples and hands-on help with the projects you are marked on."
      />

      <Section label="What we cover">
        <div className="grid gap-12 md:grid-cols-2">
          <List title="IT tutoring" items={tutoring.it} />
          <List title="CAPE Computer Science" items={tutoring.cape} />
        </div>
      </Section>

      <section id="enquiry" className="scroll-mt-16 border-t border-line bg-surface py-20 sm:py-24">
        <div className={cn(container, "grid gap-12 lg:grid-cols-[1fr_1.4fr]")}>
          <div>
            <p className="font-mono text-sm text-accent">Tutoring enquiry</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Ask about lessons</h2>
            <p className="mt-4 text-muted">
              Tell me what you are studying and what you want to get better at. Beginners are welcome, and lessons are
              online.
            </p>
          </div>
          <ContactForm variant="tutoring" />
        </div>
      </section>
    </>
  );
}
