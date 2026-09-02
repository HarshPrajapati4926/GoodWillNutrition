import type { Testimonial } from "@/lib/data";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
      <div className="flex text-accent-600" aria-hidden="true">
        {"★★★★★"}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-700">
        “{testimonial.quote}”
      </p>
      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-brand-900">{testimonial.name}</p>
          <p className="text-xs text-neutral-500">{testimonial.location}</p>
        </div>
        {testimonial.result && (
          <span className="rounded-full bg-brand-700 px-3 py-1 text-xs font-medium text-white">
            {testimonial.result}
          </span>
        )}
      </div>
    </div>
  );
}
