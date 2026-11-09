import type { SkillGroup } from "@/types";

export const skills: SkillGroup[] = [
  { category: "Backend", items: ["Python", "Django", "FastAPI"] },
  { category: "Mobile", items: ["Flutter"] },
  { category: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { category: "Data", items: ["PostgreSQL", "SQLite"] },
  { category: "Workflow", items: ["Git", "GitHub"] },
];

export const exploring = [
  { title: "AI integrations", note: "Putting language models to work inside real application features." },
  { title: "Model Context Protocol (MCP)", note: "Giving AI assistants structured access to tools and data." },
  { title: "Software automation", note: "Replacing repetitive manual steps with dependable scripts and workflows." },
  { title: "Application architecture", note: "Structuring code so it stays easy to change as a product grows." },
  { title: "Cloud infrastructure", note: "Deploying, monitoring and backing up applications on managed platforms." },
  { title: "Modern frontend development", note: "React, Next.js and server-first rendering." },
];
