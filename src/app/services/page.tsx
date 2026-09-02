import type { Metadata } from "next";
import Link from "next/link";
import { PiCheckCircleDuotone } from "react-icons/pi";
import { services, siteConfig } from "@/lib/data";
import ServiceIcon from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore weight loss, weight gain, diet consultation, lifestyle management, and wellness coaching services at Good Will Nutrition and Wellness Centre, Azamgarh.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section bg-brand-50/50">
        <div className="container-app text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
            Our Services
          </span>
          <h1 className="mx-auto mt-2 max-w-2xl text-4xl font-extrabold text-brand-900">
            Nutrition &amp; Wellness Programs Built Around You
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Whether you want to lose weight, gain healthy mass, or simply eat better, our
            expert team has a program designed for you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-app space-y-16">
          {services.map((service, i) => (
            <div
              key={service.slug}
              id={service.slug}
              className={`grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-700 text-white">
                  <ServiceIcon icon={service.icon} className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-brand-900 sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-3 leading-relaxed text-neutral-600">{service.description}</p>

                <ul className="mt-5 space-y-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-neutral-700">
                      <PiCheckCircleDuotone className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800"
                  >
                    Book Consultation
                  </Link>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                      `Hi, I'm interested in the ${service.title} program.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border-2 border-brand-700 px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-3xl bg-brand-50 p-10">
                <div className="flex h-full min-h-[220px] items-center justify-center">
                  <ServiceIcon icon={service.icon} className="h-32 w-32 text-brand-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
