import type { ReactNode } from "react";
import { cn, container } from "@/lib/utils";

interface Props {
  label?: string;
  title?: string;
  intro?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ label, title, intro, className, children }: Props) {
  return (
    <section className={cn("border-t border-line py-20 sm:py-24", className)}>
      <div className={container}>
        {label && <p className="font-mono text-sm text-accent">{label}</p>}
        {title && <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>}
        {intro && <p className="mt-4 max-w-2xl text-lg text-muted">{intro}</p>}
        <div className={cn((label || title) && "mt-12")}>{children}</div>
      </div>
    </section>
  );
}

/** Top-of-page heading used by every inner page. */
export function PageHeader({ label, title, intro }: { label: string; title: string; intro?: string }) {
  return (
    <header className={cn(container, "rise pb-16 pt-16 sm:pt-24")}>
      <p className="font-mono text-sm text-accent">{label}</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      {intro && <p className="mt-5 max-w-2xl text-lg text-muted">{intro}</p>}
    </header>
  );
}

export const Tag = ({ children }: { children: ReactNode }) => (
  <span className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted">{children}</span>
);
