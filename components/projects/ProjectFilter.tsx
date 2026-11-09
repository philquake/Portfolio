"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/types";

const ALL = "All Projects";

export function ProjectFilter({ projects, categories }: { projects: Project[]; categories: ProjectCategory[] }) {
  const [active, setActive] = useState<string>(ALL);
  const shown = active === ALL ? projects : projects.filter((p) => p.categories.includes(active as ProjectCategory));

  return (
    <>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {[ALL, ...categories].map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={active === category}
            onClick={() => setActive(category)}
            className={cn(
              "min-h-11 rounded-md border px-4 text-sm transition-colors",
              active === category ? "border-accent bg-accent text-accent-fg" : "border-line text-muted hover:text-fg",
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-6 text-sm text-muted">
        Showing {shown.length} {shown.length === 1 ? "project" : "projects"}
      </p>
      <div className="mt-8 grid gap-x-10 gap-y-16 md:grid-cols-2">
        {shown.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
