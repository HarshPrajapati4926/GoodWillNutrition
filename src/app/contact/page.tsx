import type { Metadata } from "next";
import {
  PiClockDuotone,
  PiEnvelopeDuotone,
  PiMapPinDuotone,
  PiPhoneDuotone,
  PiWhatsappLogoDuotone,
} from "react-icons/pi";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Good Will Nutrition and Wellness Centre in Azamgarh. Call, WhatsApp, or send us a message to book your free consultation.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section bg-brand-50/50">
        <div className="container-app text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
            Get In Touch
          </span>
          <h1 className="mx-auto mt-2 max-w-2xl text-4xl font-extrabold text-brand-900">
            We&apos;d Love to Hear From You
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Have a question or ready to start your health journey? Reach out and our team
            will get back to you shortly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-app grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-6">
              <PiPhoneDuotone className="h-8 w-8 shrink-0 text-brand-700" />
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-700">
                  Phone
                </h3>
                <a href={`tel:${siteConfig.phone}`} className="mt-1 block text-lg font-semibold text-brand-900 hover:text-brand-700">
                  {siteConfig.phoneDisplay}
                </a>
                <a href={`tel:${siteConfig.altPhone}`} className="block text-lg font-semibold text-brand-900 hover:text-brand-700">
                  {siteConfig.altPhoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-6">
              <PiWhatsappLogoDuotone className="h-8 w-8 shrink-0 text-brand-700" />
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-700">
                  WhatsApp
                </h3>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-lg font-semibold text-brand-900 hover:text-brand-700"
                >
                  Chat with us
                </a>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-6">
              <PiEnvelopeDuotone className="h-8 w-8 shrink-0 text-brand-700" />
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-700">
                  Email
                </h3>
                <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-lg font-semibold text-brand-900 hover:text-brand-700">
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-6">
              <PiMapPinDuotone className="h-8 w-8 shrink-0 text-brand-700" />
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-700">
                  Address
                </h3>
                <p className="mt-1 text-neutral-700">{siteConfig.address}</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-6">
              <PiClockDuotone className="h-8 w-8 shrink-0 text-brand-700" />
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-700">
                  Timing
                </h3>
                <p className="mt-1 text-neutral-700">{siteConfig.hours}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-white p-6 lg:col-span-3 lg:p-8">
            <h2 className="text-xl font-bold text-brand-900">Send Us a Message</h2>
            <p className="mt-1 text-sm text-neutral-500">
              Fill out the form and we&apos;ll reach out via WhatsApp.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-app">
          <div className="overflow-hidden rounded-2xl border border-brand-100">
            <iframe
              title="Good Will Nutrition and Wellness Centre Location"
              src={siteConfig.mapsEmbedUrl}
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
