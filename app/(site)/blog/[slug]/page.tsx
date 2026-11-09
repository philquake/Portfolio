import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/blog";
import { cn, container } from "@/lib/utils";

export const generateStaticParams = () => getPosts().map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    robots: post.draft ? { index: false } : undefined, // drafts stay out of search results
    openGraph: { type: "article", images: post.cover ? [post.cover] : undefined },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <article className={cn(container, "max-w-3xl pb-24 pt-12 sm:pt-16")}>
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
        <ArrowLeft className="size-4" aria-hidden="true" /> All articles
      </Link>
      <header className="rise mt-8">
        <p className="font-mono text-sm text-accent">{post.category}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-4 font-mono text-xs text-muted">
          {post.draft ? "Draft" : post.date} · {post.readingTime}
        </p>
      </header>
      {post.cover && (
        <Image src={post.cover} alt="" width={1200} height={630} className="mt-10 h-auto w-full rounded-md border border-line" />
      )}
      {/* Article HTML comes from our own Markdown files in content/blog, not from visitors. */}
      <div className="prose mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
