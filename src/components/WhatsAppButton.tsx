import { siteConfig } from "@/lib/data";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi, I would like to book a free consultation at Good Will Nutrition and Wellness Centre."
  );
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.36.65 4.56 1.79 6.44L4 29l7.72-1.75a12.9 12.9 0 0 0 4.3.74c6.62 0 12.02-5.4 12.02-12.02C28.04 8.4 22.64 3 16.02 3Zm0 21.94c-1.36 0-2.7-.34-3.9-1l-.28-.16-4.58 1.04 1.08-4.46-.18-.29a9.85 9.85 0 0 1-1.53-5.05c0-5.47 4.45-9.92 9.9-9.92 5.44 0 9.9 4.45 9.9 9.92 0 5.47-4.46 9.92-9.9 9.92Zm5.44-7.43c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.15-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48c0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.08-.13-.27-.2-.57-.35Z"/>
      </svg>
    </a>
  );
}
