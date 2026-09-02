import Image from "next/image";
import Link from "next/link";
import { PiPhoneDuotone } from "react-icons/pi";
import { siteConfig } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-brand-50 to-white">
      <div className="container-app grid items-center gap-10 py-8 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-800">
            Nutrition &amp; Wellness Centre in {siteConfig.city}
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-brand-900 sm:text-5xl">
            {siteConfig.tagline}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg lg:mx-0">
            Expert-guided diet consultation, weight loss &amp; weight gain programs, and
            wellness coaching — built around real Indian lifestyles, delivered with genuine
            care.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              href="/contact"
              className="rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-brand-800"
            >
              Book Consultation
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 rounded-full border-2 border-brand-700 px-7 py-3.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
            >
              <PiPhoneDuotone className="h-5 w-5" />
              Call Us Now
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 lg:justify-start">
            <div>
              <p className="text-2xl font-extrabold text-brand-800">1000+</p>
              <p className="text-xs font-medium text-neutral-500">Lives Transformed</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-brand-800">5+</p>
              <p className="text-xs font-medium text-neutral-500">Years of Trust</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-brand-800">100%</p>
              <p className="text-xs font-medium text-neutral-500">Personalised Plans</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={420}
            height={420}
            priority
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
