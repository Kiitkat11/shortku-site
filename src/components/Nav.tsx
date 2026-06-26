"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useLang } from "@/components/LanguageProvider";

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

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-500 ${
        scrolled
          ? "bg-pitch/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center h-7 shrink-0">
        <Image
          src="/wordmark-white.svg"
          alt="Shortku"
          width={120}
          height={28}
          className="h-7 w-auto"
          priority
        />
      </a>

      {/* Right controls */}
      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-azure text-pitch text-sm font-semibold hover:bg-white transition-colors duration-200"
        >
          {t.nav.cta}
        </a>
      </div>
    </nav>
  );
}
