import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shortku — Saudi Market Entry Partner",
  description:
    "Shortku helps international startups enter, understand, and grow in the Saudi Arabian market through local expertise, partnerships, and strategic support.",
  openGraph: {
    title: "Shortku — Saudi Market Entry Partner",
    description:
      "Helping startups successfully enter and grow in Saudi Arabia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={interTight.variable}>
      <body className="min-h-full antialiased bg-just-black text-surface-cream">
        <LanguageProvider>
          <LenisProvider>{children}</LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
