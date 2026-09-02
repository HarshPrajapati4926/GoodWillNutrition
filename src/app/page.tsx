import Link from "next/link";
import Image from "next/image";
import {
  PiCompassDuotone,
  PiGraduationCapDuotone,
  PiHandHeartDuotone,
  PiHeartDuotone,
} from "react-icons/pi";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { services, testimonials } from "@/lib/data";

const benefits = [
  {
    title: "Certified Nutrition Experts",
    description: "Guidance from qualified nutritionists who understand real Indian diets.",
    icon: PiGraduationCapDuotone,
  },
  {
    title: "100% Personalised Plans",
    description: "No generic diet charts — every plan is built around your body and goals.",
    icon: PiCompassDuotone,
  },
  {
    title: "Continuous Support",
    description: "Regular follow-ups and WhatsApp support to keep you on track.",
    icon: PiHandHeartDuotone,
  },
  {
    title: "Trusted Locally",
    description: "Proudly serving families in Azamgarh with honest, result-driven care.",
    icon: PiHeartDuotone,
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Promotional banner */}
      <section className="py-8">
        <div className="container-app">
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/Images/hero-banner.png"
              alt="Good Will Nutrition and Wellness Centre — Better Nutrition, Better Life"
              width={1730}
              height={922}
              className="w-full"
              sizes="(min-width: 1280px) 1200px, 100vw"
            />
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="section">
        <div className="container-app mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
            About Us
          </span>
          <h2 className="mt-2 text-3xl font-bold text-brand-900 sm:text-4xl">
            Genuine care, backed by science
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-600">
            At Good Will Nutrition and Wellness Centre, we believe good health should feel
            achievable — not overwhelming. We combine evidence-based nutrition science with
            a deep understanding of everyday Indian lifestyles to create plans that actually
            work, and actually last.
          </p>
          <p className="mt-4 leading-relaxed text-neutral-600">
            From weight management to lifestyle coaching, our team walks with you at every
            step, so you never feel alone on your journey to better health.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            Learn more about us →
          </Link>
        </div>
      </section>

      {/* Services highlights */}
      <section className="section bg-brand-50/50">
        <div className="container-app">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Core Services"
            description="Comprehensive nutrition and wellness programs designed around your unique goals."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container-app">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Health You Can Trust"
            description="Here's what makes our approach different."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <b.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-brand-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-brand-50/50">
        <div className="container-app">
          <SectionHeading
            eyebrow="Success Stories"
            title="What Our Clients Say"
            description="Real people, real transformations."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/Images/transformation.png"
                alt="Sample transformation results with the right guidance, balanced nutrition, and consistent effort"
                width={1254}
                height={1254}
                className="w-full"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} testimonial={t} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container-app">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-brand-700 px-8 py-12 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Ready to start your health journey?
              </h2>
              <p className="mt-2 text-brand-100">
                Book a free consultation with our experts today — first step is always free.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 shadow-md transition-colors hover:bg-brand-50"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
