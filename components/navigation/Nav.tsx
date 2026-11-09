"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

const isActive = (pathname: string, href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <ul className="hidden items-center gap-1 md:flex">
      {navigation.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href}
            aria-current={isActive(pathname, href) ? "page" : undefined}
            className={cn(
              "rounded-md px-3 py-2 text-sm transition-colors hover:text-fg",
              isActive(pathname, href) ? "text-fg" : "text-muted",
            )}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="inline-flex size-11 items-center justify-center rounded-md text-fg"
      >
        {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
      </button>
      {open && (
        <ul id="mobile-menu" className="absolute inset-x-0 top-full border-b border-line bg-bg px-5 py-3">
          {navigation.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                aria-current={isActive(pathname, href) ? "page" : undefined}
                className={cn("block py-3 text-base", isActive(pathname, href) ? "text-accent" : "text-fg")}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
