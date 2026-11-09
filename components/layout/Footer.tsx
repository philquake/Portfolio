import Link from "next/link";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { cn, container } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className={cn(container, "flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between")}>
        <div>
          <p className="font-medium">{site.name}</p>
          <p className="text-sm text-muted">{site.title}</p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          {navigation.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className="hover:text-fg">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <SocialLinks />
      </div>
    </footer>
  );
}
