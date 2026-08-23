"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/components/LanguageProvider";
import { PillButton } from "@/components/ui";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const xPct = (e.clientX / window.innerWidth - 0.5) * 2;
      const yPct = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(blobRef.current, {
        x: xPct * 30,
        y: yPct * 20,
        duration: 2,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(blobRef.current, {
        scale: 0.7,
        opacity: 0,
        duration: 2,
        delay: 0.6,
        ease: "power3.out",
      });

      const tl = gsap.timeline({ delay: 0.15 });
      tl.from(".h-line1", { y: 80, opacity: 0, duration: 1.1, ease: "power3.out" })
        .from(".h-line2", { y: 80, opacity: 0, duration: 1.1, ease: "power3.out" }, "-=0.85")
        .from(".h-sub", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .from(".h-ctas", { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.4");

      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% top",
          end: "55% top",
          scrub: 1,
        },
        y: -50,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-end pb-24 md:pb-32 pt-36 md:pt-40"
    >
      {/* GSAP transforms this wrapper, which makes it a stacking context, so the
          blend has to live here rather than on the image to reach the mesh behind. */}
      <div
        ref={blobRef}
        className="absolute right-[2%] top-[16%] w-[44vw] max-w-[540px] aspect-square pointer-events-none mix-blend-screen hero-logo-mask"
        aria-hidden="true"
      >
        <Image
          src="/hero-leap.jpg"
          alt=""
          fill
          sizes="(max-width: 768px) 70vw, 640px"
          className="object-contain"
          priority
        />
      </div>

      <div ref={textRef} className="relative z-10 w-full px-6 md:px-12 lg:px-16">
        <h1 className="mb-8 md:mb-10 font-semibold text-surface-cream leading-[0.95] tracking-[-0.035em] text-[clamp(2.5rem,7.4vw,108px)]">
          <span className="h-line1 block">{t.hero.headline[0]}</span>
          <span className="h-line2 block">
            {t.hero.headline[1]}{" "}
            <span className="hero-accent">{t.hero.headline[2]}</span>
          </span>
        </h1>

        <p className="h-sub max-w-xl text-body-lg text-surface-cream/90 leading-[1.38] tracking-[-0.23px] mb-10 md:mb-12">
          {t.hero.sub}
        </p>

        <div className="h-ctas flex flex-wrap gap-4">
          <PillButton href="#contact" variant="gradient">
            {t.hero.cta}
          </PillButton>
          <PillButton href="#services">{t.hero.explore}</PillButton>
        </div>
      </div>

    </section>
  );
}
