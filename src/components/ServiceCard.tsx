import Link from "next/link";
import type { Service } from "@/lib/data";
import ServiceIcon from "./ServiceIcon";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      id={service.slug}
      className="group flex flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
        <ServiceIcon icon={service.icon} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-brand-900">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
        {service.shortDescription}
      </p>
      <Link
        href={`/services#${service.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
      >
        Learn more
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
}
