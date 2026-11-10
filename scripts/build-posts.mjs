// Reads content/blog/*.md at build time and writes lib/posts.generated.json.
// Workers have no filesystem, so the site cannot read the Markdown files at request time.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const dir = path.join(process.cwd(), "content", "blog");

const posts = fs
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

fs.writeFileSync(path.join(process.cwd(), "lib", "posts.generated.json"), JSON.stringify(posts));
console.log(`posts.generated.json: ${posts.length} posts`);
