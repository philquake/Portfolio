import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { site } from "@/data/site";

/** Icon links for whichever of GitHub, LinkedIn and email are set in data/site.ts. */
export function SocialLinks() {
  const links = [
    { href: site.github, label: "GitHub", icon: <GitHubIcon /> },
    { href: site.linkedin, label: "LinkedIn", icon: <LinkedInIcon /> },
    { href: site.email && `mailto:${site.email}`, label: "Email", icon: <Mail className="size-5" aria-hidden="true" /> },
  ].filter((l) => l.href);

  return (
    <ul className="flex items-center gap-1">
      {links.map(({ href, label, icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            className="inline-flex size-11 items-center justify-center rounded-md text-muted hover:text-fg"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
