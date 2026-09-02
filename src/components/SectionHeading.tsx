export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-bold text-brand-900 sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-neutral-600">{description}</p>
      )}
    </div>
  );
}
