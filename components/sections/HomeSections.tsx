import { ArrowRight, Bot, Globe, LayoutDashboard, Server, Smartphone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/data/site";
import { container } from "@/lib/utils";
import type { Service } from "@/types";

export const serviceIcons: Record<Service["icon"], typeof Globe> = {
  globe: Globe,
  layout: LayoutDashboard,
  server: Server,
  phone: Smartphone,
  bot: Bot,
};

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
