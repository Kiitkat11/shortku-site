"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/components/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

export function Advantage() {
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
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-sm md:text-heading font-semibold text-surface-cream leading-[1.2] tracking-[-0.44px] md:tracking-[-0.66px] mb-8">
            {t.advantage.headline}
          </h2>
          <p className="text-body-lg text-surface-50 leading-[1.38] tracking-[-0.23px] mb-12 max-w-2xl mx-auto">
            {t.advantage.body}
          </p>
          <p className="text-subheading font-semibold text-surface-cream leading-[1.2] tracking-[-0.34px] italic">
            &ldquo;{t.advantage.quote}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
