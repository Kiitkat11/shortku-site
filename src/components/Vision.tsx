"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/components/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

export function Vision() {
  const { t, lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background text
      gsap.to(bgTextRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
        y: -80,
        ease: "none",
      });

      // Content animations
      const staggerIn = (el: Element | null, delay = 0) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
          },
          y: 40,
          opacity: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
        });
      };

      staggerIn(eyebrowRef.current, 0);
      staggerIn(headlineRef.current, 0.1);
      staggerIn(bodyRef.current, 0.2);

      // Quote — special treatment
      gsap.from(quoteRef.current, {
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  const isAr = lang === "ar";

  return (
    <section
      id="vision"
      ref={sectionRef}
      className={`relative bg-white py-28 md:py-40 px-6 md:px-12 overflow-hidden ${
        isAr ? "font-tajawal" : "font-outfit"
      }`}
    >
      {/* Large background word */}
      <div
        ref={bgTextRef}
        className={`absolute top-1/2 -translate-y-1/2 pointer-events-none select-none font-bold text-[clamp(120px,18vw,240px)] leading-none text-pitch/[0.03] whitespace-nowrap ${
          isAr ? "right-0 font-tajawal" : "left-0"
        }`}
      >
        {isAr ? "رؤيتنا" : "VISION"}
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div ref={eyebrowRef} className="mb-8">
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-azure font-medium">
            <span className="w-6 h-px bg-azure" />
            {t.vision.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h2
          ref={headlineRef}
          className={`font-bold text-pitch leading-[1.05] mb-10 ${
            isAr
              ? "text-4xl md:text-6xl lg:text-7xl"
              : "text-5xl md:text-6xl lg:text-7xl"
          }`}
        >
          {t.vision.headline}
        </h2>

        {/* Two-column layout on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Body copy */}
          <p
            ref={bodyRef}
            className={`text-pitch/60 leading-relaxed ${
              isAr ? "text-base md:text-lg" : "text-base md:text-lg"
            }`}
          >
            {t.vision.body}
          </p>

          {/* Pull quote */}
          <blockquote
            ref={quoteRef}
            className={`relative border-l-2 border-azure pl-8 ${
              isAr ? "border-l-0 border-r-2 pr-8 pl-0" : ""
            }`}
          >
            <p
              className={`font-semibold text-pitch leading-snug italic ${
                isAr ? "text-xl md:text-2xl" : "text-xl md:text-2xl"
              }`}
            >
              &ldquo;{t.vision.quote}&rdquo;
            </p>

            {/* Orbit accent */}
            <div className="mt-6 flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="13" stroke="#6FAEDB" strokeWidth="1.5" />
                <circle cx="16" cy="3" r="3" fill="#D6BE92" />
              </svg>
              <span className="text-xs tracking-widest uppercase text-pitch/30 font-medium">
                Shortku
              </span>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
