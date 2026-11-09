import type { MetadataRoute } from "next";
import { navigation } from "@/data/navigation";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { getPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...navigation.map((n) => n.href),
    ...projects.map((p) => `/projects/${p.slug}`),
    ...projects.flatMap((p) => (p.liveUrl?.startsWith("/") ? [p.liveUrl] : [])),
    ...getPosts()
      .filter((p) => !p.draft)
      .map((p) => `/blog/${p.slug}`),
  ];
  return paths.map((path) => ({ url: `${site.url}${path === "/" ? "" : path}` }));
}
