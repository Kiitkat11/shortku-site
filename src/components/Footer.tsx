"use client";

import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";

export function Footer() {
  const { t } = useLang();

  const links = [
    { href: "/#services", label: t.footer.links.services },
    { href: "/#mission", label: t.footer.links.mission },
    { href: "/#why", label: t.footer.links.why },
    { href: "/#contact", label: t.footer.links.contact },
  ];

  return (
    <footer className="bg-off-black border-t border-surface-25 py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-[var(--page-max-width)] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-16">
          <div>
            <a href="/" className="inline-block">
              <Image
                src="/wordmark-white.svg"
                alt="Shortku"
                width={110}
                height={26}
                className="h-6 w-auto mb-4 opacity-90"
              />
            </a>
            <p className="text-body-sm text-surface-50 max-w-xs leading-[1.15]">
              {t.footer.tagline}
            </p>
          </div>

          <nav className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body-sm text-surface-50 hover:text-surface-cream transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-caption text-surface-50">{t.footer.copy}</p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-caption text-surface-50 hover:text-surface-cream transition-colors duration-200"
            >
              {t.footer.privacy}
            </a>
            <a
              href="/terms"
              className="text-caption text-surface-50 hover:text-surface-cream transition-colors duration-200"
            >
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
