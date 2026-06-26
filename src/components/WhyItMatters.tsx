"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/components/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

export function WhyItMatters() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  itemsRef.current = [];
  const addItem = (el: HTMLLIElement | null) => {
    if (el) itemsRef.current.push(el);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 82%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(bodyRef.current, {
        scrollTrigger: {
          trigger: bodyRef.current,
          start: "top 84%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      itemsRef.current.forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
          },
          x: -40,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.08,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  

  return (
    <section
      id="why"
      ref={sectionRef}
      className={`bg-mist py-28 md:py-36 px-6 md:px-12 ${
        "font-outfit"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start`}
        >
          {/* Left — heading + body */}
          <div ref={headerRef}>
            <p className="text-xs tracking-[0.2em] uppercase text-azure font-medium mb-6">
              {t.why.eyebrow}
            </p>
            <h2
              className={`font-bold text-pitch leading-[1.1] mb-8 ${
                "text-4xl md:text-5xl lg:text-6xl"
              }`}
              style={{ whiteSpace: "pre-line" }}
            >
              {t.why.headline}
            </h2>
            <p
              ref={bodyRef}
              className={`text-pitch/60 leading-relaxed ${
                "text-base md:text-lg"
              }`}
            >
              {t.why.body}
            </p>

            {/* Decorative orbit accent */}
            <div className="mt-12 flex items-center gap-3 opacity-30">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" stroke="#6FAEDB" strokeWidth="1" />
                <circle cx="24" cy="4" r="4" fill="#D6BE92" />
              </svg>
              <div className="h-px flex-1 bg-azure/30" />
            </div>
          </div>

          {/* Right — value props list */}
          <ul className="space-y-0 divide-y divide-pitch/10">
            {t.why.items.map((item, i) => (
              <li
                key={i}
                ref={addItem}
                className={`flex items-start gap-6 py-6 group ${
                  ""
                }`}
              >
                {/* Number */}
                <span className="shrink-0 text-2xl font-bold text-oat-deep font-outfit tabular-nums leading-none pt-0.5">
                  {item.num}
                </span>
                {/* Text */}
                <span
                  className={`text-pitch/80 font-medium leading-snug group-hover:text-pitch transition-colors duration-200 ${
                    "text-lg"
                  }`}
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
