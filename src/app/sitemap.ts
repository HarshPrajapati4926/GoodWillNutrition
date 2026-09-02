import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";

const base = "https://www.goodwillnutrition.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/services", "/contact", "/blog"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const posts = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticPages, ...posts];
}
