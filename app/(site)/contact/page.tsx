import { ArrowRight, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { PageHeader } from "@/components/ui/Section";
import { site } from "@/data/site";
import { cn, container } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about a project, a role or a collaboration.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const channels = [
    { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: <Mail className="size-5" aria-hidden="true" /> },
    { label: "LinkedIn", value: site.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: site.linkedin, icon: <LinkedInIcon /> },
    { label: "GitHub", value: site.github.replace(/^https?:\/\//, ""), href: site.github, icon: <GitHubIcon /> },
  ].filter((c) => c.value);

  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's talk about what you need"
        intro="Project inquiries, remote roles, collaboration or a quick question: I am happy to hear from you."
      />
      <div className={cn(container, "grid gap-12 pb-24 lg:grid-cols-[1fr_1.4fr]")}>
        <div>
          <ul className="space-y-1">
            {channels.map(({ label, value, href, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex min-h-14 items-center gap-4 border-b border-line py-3 hover:text-accent"
                >
                  <span className="text-accent">{icon}</span>
                  <span>
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="break-all">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-md border border-line bg-surface p-6">
            <h2 className="font-semibold">Planning a freelance project?</h2>
            <p className="mt-2 text-sm text-muted">
              The project inquiry form asks about the type of work and budget, which helps me give you a useful first
              reply.
            </p>
            <Link href="/services#inquiry" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
              Start a project inquiry <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
