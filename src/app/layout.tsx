import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

// Mimi's English typography is IBM Plex Sans — see /Users/ra/Mimi/packages/shared/src/brand/tokens.css.
// Keeping the CSS variable name --font-plex-sans so it's obvious what's loaded.
const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mimi — Voice-first thought capture",
  description:
    "Mimi is a voice-first AI thought-capture app. You speak; Mimi writes — turning spoken ideas into checklists, outlines, tables, and calendar events.",
  openGraph: {
    title: "Mimi — Voice-first thought capture",
    description:
      "You talk; Mimi writes. Voice-first notes that structure themselves — lists, outlines, tables, and calendar events from a single spoken thought.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={plexSans.variable}>
      <body className="min-h-full antialiased bg-just-black text-surface-cream">
        <LanguageProvider>
          <LenisProvider>{children}</LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
