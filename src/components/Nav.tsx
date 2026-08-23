"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useLang } from "@/components/LanguageProvider";
import { PillButton } from "@/components/ui";

export function Nav() {
  const { t } = useLang();
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -24,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#services", label: t.nav.services },
    { href: "/#mission", label: t.nav.mission },
    { href: "/#why", label: t.nav.why },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="text-center py-3 text-caption text-surface-cream/80 bg-just-black/80 backdrop-blur-sm border-b border-surface-25">
        {t.banner.text}
        {" — "}
        <a href="/#contact" className="text-shockingly-green hover:opacity-80 transition-opacity">
          {t.banner.link}
        </a>
      </div>

      <nav
        ref={navRef}
        className={`flex items-center justify-between px-6 md:px-12 h-16 transition-colors duration-500 ${
          scrolled ? "bg-just-black/90 backdrop-blur-md border-b border-surface-25" : "bg-transparent"
        }`}
      >
        <a href="/" className="flex items-center h-7 shrink-0">
          <Image
            src="/wordmark-white.svg"
            alt="Shortku"
            width={120}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-body-sm text-surface-50 hover:text-surface-cream transition-colors duration-200 py-2.5 px-1.5"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <PillButton href="/#contact" variant="gradient">
            {t.nav.cta}
          </PillButton>
        </div>
      </nav>
    </div>
  );
}
