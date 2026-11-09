import type { Metadata } from "next";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ContactCta } from "@/components/sections/HomeSections";
import { PageHeader } from "@/components/ui/Section";
import { categories, projects } from "@/data/projects";
import { cn, container } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description: "Web applications, mobile apps, backends, database projects and business websites.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Projects"
        title="Things I have built"
        intro="Each project has a case study covering the problem, the architecture and what I learned building it."
      />
      <div className={cn(container, "pb-24")}>
        <ProjectFilter projects={projects} categories={categories} />
      </div>
      <ContactCta />
    </>
  );
}
