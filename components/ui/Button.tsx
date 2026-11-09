import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const styles = {
  base: "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors",
  primary: "bg-accent text-accent-fg hover:opacity-90",
  secondary: "border border-line bg-surface text-fg hover:border-accent",
  ghost: "text-muted hover:text-fg",
};

export const buttonClass = (variant: "primary" | "secondary" | "ghost" = "primary", className?: string) =>
  cn(styles.base, styles[variant], className);

interface Props {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  download?: boolean;
  children: ReactNode;
}

/** Internal paths use next/link; everything else is a plain anchor. */
export function ButtonLink({ href, variant, className, download, children }: Props) {
  const cls = buttonClass(variant, className);
  if (href.startsWith("/") && !download) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a href={href} className={cls} download={download} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
      {children}
    </a>
  );
}
