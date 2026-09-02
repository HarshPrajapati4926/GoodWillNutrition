import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="section">
      <div className="container-app max-w-3xl">
        <Link href="/blog" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
          ← Back to all tips
        </Link>

        <span className="mt-6 block text-xs font-medium text-neutral-400">
          {new Date(post.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
        <h1 className="mt-2 text-3xl font-extrabold text-brand-900 sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-6 space-y-4 text-neutral-700">
          {post.content.map((para, i) => (
            <p key={i} className="leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-brand-50 p-6">
          <p className="font-semibold text-brand-900">
            Want a plan tailored just for you?
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-block rounded-full bg-brand-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-800"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </article>
  );
}
