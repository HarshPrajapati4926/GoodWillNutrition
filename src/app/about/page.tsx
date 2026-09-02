import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the mission, vision, and values of Good Will Nutrition and Wellness Centre — a trusted nutrition center in Azamgarh.",
};

const values = [
  {
    title: "Science-Backed Guidance",
    description:
      "Every plan we create is grounded in nutrition science, not fads or shortcuts.",
  },
  {
    title: "Personalised Approach",
    description:
      "We treat every client as an individual, not a generic diet chart.",
  },
  {
    title: "Honest & Transparent",
    description:
      "No unrealistic promises — just honest guidance and consistent results.",
  },
  {
    title: "Long-Term Wellness",
    description:
      "Our goal is lasting lifestyle change, not a temporary fix.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section bg-brand-50/50">
        <div className="container-app text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
            About {siteConfig.name}
          </span>
          <h1 className="mx-auto mt-2 max-w-2xl text-4xl font-extrabold text-brand-900">
            Helping {siteConfig.city} build healthier lives, one plan at a time
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            We are a dedicated team of nutritionists and wellness experts committed to making
            good health simple, achievable, and sustainable for every family we work with.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-app grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl shadow-sm">
            <Image
              src="/Images/healthy-food-healthy-life.png"
              alt="Healthy Food, Healthy Life — eat right, feel light, live bright"
              width={1254}
              height={1254}
              className="w-full"
              sizes="(min-width: 1024px) 500px, 100vw"
            />
          </Reveal>
          <Reveal delay={0.1} className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-900">Our Mission</h2>
              <p className="mt-2 leading-relaxed text-neutral-600">
                To make expert, personalised nutrition guidance accessible to every household
                in {siteConfig.city} — helping people achieve their health goals through
                sustainable, practical, and culturally relevant diet and lifestyle plans.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-900">Our Vision</h2>
              <p className="mt-2 leading-relaxed text-neutral-600">
                To become the most trusted name in nutrition and wellness in the region,
                known for genuine care, measurable results, and a lifelong commitment to our
                clients&apos; well-being.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-app">
          <Reveal>
            <SectionHeading
              eyebrow="Why Trust Us"
              title="Our Core Values"
              description="The principles that guide everything we do."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.08}
                className="rounded-2xl border border-brand-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-brand-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-app">
          <Reveal className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-brand-700 px-8 py-12 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Let&apos;s work towards your best health
              </h2>
              <p className="mt-2 text-brand-100">
                Get in touch with our team today and take the first step.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-lg"
            >
              Book Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
