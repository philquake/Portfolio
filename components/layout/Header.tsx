import { Download } from "lucide-react";
import Link from "next/link";
import { DesktopNav, MobileNav } from "@/components/navigation/Nav";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import { site } from "@/data/site";
import { cn, container } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <nav aria-label="Main" className={cn(container, "relative flex h-16 items-center justify-between")}>
        <Link href="/" className="font-mono text-sm font-medium tracking-tight">
          {site.name.toLowerCase().replace(" ", ".")}
          <span className="text-accent">/</span>
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-1">
          {site.resume && (
            <a
              href={site.resume}
              download
              className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm text-muted hover:text-fg sm:inline-flex"
            >
              <Download className="size-4" aria-hidden="true" />
              Resume
            </a>
          )}
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
