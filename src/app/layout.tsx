import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/data";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.goodwillnutrition.in"),
  title: {
    default: `${siteConfig.name} | Nutrition Centre in ${siteConfig.city}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Good Will Nutrition and Wellness Centre in Azamgarh offers expert diet consultation, weight loss & weight gain programs, lifestyle management, and wellness coaching. Book your free consultation today.",
  keywords: [
    "nutrition center in Azamgarh",
    "diet consultation Azamgarh",
    "weight loss Azamgarh",
    "weight gain diet plan",
    "wellness coaching",
    "dietitian near me",
  ],
  openGraph: {
    title: siteConfig.name,
    description:
      "Expert nutrition and wellness guidance in Azamgarh — diet consultation, weight loss & weight gain programs, and lifestyle management.",
    images: ["/logo.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
