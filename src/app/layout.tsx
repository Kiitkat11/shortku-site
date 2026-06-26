import type { Metadata } from "next";
import { Outfit, Tajawal } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shortku",
  description:
    "Shortku develops autonomous drone systems that make delivery faster, more efficient, and more sustainable. Building the future of autonomous transportation.",
  openGraph: {
    title: "Shortku",
    description:
      "Commercial autonomous drone technology designed to bring aerial logistics into everyday life.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${outfit.variable} ${tajawal.variable}`}>
      <body className="min-h-full antialiased">
        <LanguageProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
