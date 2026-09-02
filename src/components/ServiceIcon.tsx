import type { Service } from "@/lib/data";

const paths: Record<Service["icon"], React.ReactNode> = {
  loss: (
    <path
      d="M12 3v10m0 0-4-4m4 4 4-4M4 15a8 8 0 1 0 16 0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  gain: (
    <path
      d="M12 21V11m0 0 4 4m-4-4-4 4M4 9a8 8 0 1 1 16 0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  diet: (
    <path
      d="M8 3v6a4 4 0 0 0 8 0V3M12 13v8m-4 0h8M16 3v6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  lifestyle: (
    <path
      d="M12 21s-7-4.35-9.5-8.5C.9 9.3 2.6 5.5 6 5c2-.3 3.6.8 4.5 2 .9-.9 3-2.3 5-2 3.4.5 5.1 4.3 3.5 7.5C19.5 16.65 12 21 12 21Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  coaching: (
    <path
      d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z M9 12l2 2 4-4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function ServiceIcon({ icon, className }: { icon: Service["icon"]; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}
