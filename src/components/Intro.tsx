"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/components/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

export function Intro() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 82%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-[var(--page-max-width)] mx-auto">
        <div className="section-divider mb-20 md:mb-28" />
        <div ref={contentRef} className="max-w-4xl">
          <h2 className="text-heading-sm md:text-heading font-semibold text-surface-cream leading-[1.2] tracking-[-0.44px] md:tracking-[-0.66px] mb-8">
            {t.intro.headline}
          </h2>
          <p className="text-body-lg text-surface-cream/90 leading-[1.38] tracking-[-0.23px] mb-6">
            {t.intro.body}
          </p>
          <p className="text-body-lg text-surface-50 leading-[1.38] tracking-[-0.23px]">
            {t.intro.body2}
          </p>
        </div>
      </div>
    </section>
  );
}
