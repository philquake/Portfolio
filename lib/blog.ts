import type { Post } from "@/types";
import posts from "./posts.generated.json";

/**
 * Articles are Markdown files in content/blog (file name = slug). `npm run dev` and
 * `npm run build` turn them into posts.generated.json first, because Workers cannot read files.
 */
export const getPosts = (): Post[] => posts as Post[];

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);
