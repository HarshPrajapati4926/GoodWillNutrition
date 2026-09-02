import Image from "next/image";
import Link from "next/link";
import { PiClockDuotone, PiEnvelopeDuotone, PiMapPinDuotone, PiPhoneDuotone } from "react-icons/pi";
import { services, siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="container-app grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full bg-white object-contain p-0.5"
            />
            <span className="font-bold text-white">Good Will NWC</span>
          </div>
          <p className="mt-4 text-sm text-brand-200">
            Trusted nutrition &amp; wellness guidance in {siteConfig.city}, helping you build
            a healthier lifestyle — one step at a time.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/blog" className="hover:text-white">Diet Tips</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Our Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-2 hover:text-white">
                <PiPhoneDuotone className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <span>
                  {siteConfig.phoneDisplay}
                  <br />
                  {siteConfig.altPhoneDisplay}
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white">
                <PiEnvelopeDuotone className="h-5 w-5 shrink-0 text-brand-400" />
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-brand-200">
              <PiMapPinDuotone className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
              {siteConfig.address}
            </li>
            <li className="flex items-center gap-2 text-brand-200">
              <PiClockDuotone className="h-5 w-5 shrink-0 text-brand-400" />
              {siteConfig.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="container-app flex flex-col items-center justify-between gap-2 py-5 text-xs text-brand-300 sm:flex-row">
          <p>© {new Date().getFullYear()} Good Will Nutrition and Wellness Centre. All rights reserved.</p>
          <p>Nutrition Centre in {siteConfig.city} | Diet &amp; Wellness Consultation</p>
        </div>
      </div>
    </footer>
  );
}
