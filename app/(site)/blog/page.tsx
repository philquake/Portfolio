import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/Section";
import { getPosts } from "@/lib/blog";
import { cn, container } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on software development, Python and backend work, Flutter, AI and automation, and lessons from building projects.",
  alternates: { canonical: "/blog" },
};

const blogCategories = [
  "Software Development",
  "Python and Backend Development",
  "Flutter and Mobile Development",
  "AI and Automation",
  "Project Development",
  "Lessons Learned",
];

export default function BlogPage() {
  const posts = getPosts();
  return (
    <>
      <PageHeader
        label="Blog"
        title="Notes from building software"
        intro="Technical write-ups and lessons learned from the projects I work on."
      />
      <div className={cn(container, "pb-24")}>
        <ul aria-label="Topics" className="flex flex-wrap gap-2">
          {blogCategories.map((category) => (
            <li key={category} className="rounded border border-line px-3 py-1 text-sm text-muted">
              {category}
            </li>
          ))}
        </ul>
        <ul className="mt-12">
          {posts.map((post) => (
            <li key={post.slug} className="border-t border-line py-8">
              <article className="grid gap-3 md:grid-cols-[14rem_1fr] md:gap-10">
                <p className="font-mono text-xs text-muted">
                  <span className="text-accent">{post.category}</span>
                  <br />
                  {post.draft ? "Draft" : post.date} · {post.readingTime}
                </p>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 max-w-2xl text-muted">{post.excerpt}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
