import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Post } from "@/types";

const dir = path.join(process.cwd(), "content", "blog");

/** Articles are Markdown files in content/blog. The file name is the slug. */
export function getPosts(): Post[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
      return {
        slug: file.replace(/\.md$/, ""),
        title: String(data.title),
        excerpt: String(data.excerpt ?? ""),
        cover: data.cover ? String(data.cover) : undefined,
        date: String(data.date ?? ""),
        category: String(data.category ?? "Software Development"),
        draft: Boolean(data.draft),
        readingTime: `${Math.max(1, Math.round(content.split(/\s+/).length / 200))} min read`,
        html: marked.parse(content, { async: false }),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);
