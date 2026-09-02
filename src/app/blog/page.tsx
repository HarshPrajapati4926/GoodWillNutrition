import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Diet Tips & Wellness Blog",
  description:
    "Practical diet and wellness tips from the experts at Good Will Nutrition and Wellness Centre, Azamgarh.",
};

export default function BlogPage() {
  return (
    <>
      <section className="section bg-brand-50/50">
        <div className="container-app text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
            Diet Tips
          </span>
          <h1 className="mx-auto mt-2 max-w-2xl text-4xl font-extrabold text-brand-900">
            Nutrition &amp; Wellness Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Simple, practical tips from our experts to help you eat better and live healthier.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-app grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-xs font-medium text-neutral-400">
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <h2 className="mt-2 text-lg font-semibold text-brand-900 group-hover:text-brand-700">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                {post.excerpt}
              </p>
              <span className="mt-4 text-sm font-semibold text-brand-700">Read more →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
