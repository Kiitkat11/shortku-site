"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/components/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const { t, lang } = useLang();
  const sectionRef      = useRef<HTMLElement>(null);
  const bgRef           = useRef<HTMLDivElement>(null);
  const droneScrollRef  = useRef<HTMLDivElement>(null);  // scroll parallax wrapper
  const droneFloatRef   = useRef<HTMLDivElement>(null);  // float loop wrapper
  const droneTiltRef    = useRef<HTMLDivElement>(null);  // mouse tilt wrapper
  const orbitsRef       = useRef<HTMLDivElement>(null);
  const textRef         = useRef<HTMLDivElement>(null);
  const glowRef         = useRef<HTMLDivElement>(null);

  // ── Mouse parallax + drone tilt ─────────────────────────────────────────
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const xPct = (e.clientX / window.innerWidth  - 0.5) * 2;
      const yPct = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(droneTiltRef.current, {
        rotateY: xPct * 9,
        rotateX: -yPct * 5,
        duration: 1.6,
        ease: "power2.out",
      });

      gsap.to(orbitsRef.current, {
        x: xPct * 22,
        y: yPct * 14,
        duration: 2,
        ease: "power2.out",
      });

      // Subtle counter-parallax on background
      gsap.to(bgRef.current, {
        x: xPct * -12,
        y: yPct * -8,
        duration: 2.5,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // ── Entrance + scroll animations ────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ken Burns on background
      gsap.from(bgRef.current, {
        scale: 1.07,
        duration: 3,
        ease: "power2.out",
      });

      // Drone entrance: drops in from top-right
      gsap.from(droneScrollRef.current, {
        y: -90,
        x: 60,
        opacity: 0,
        duration: 1.6,
        delay: 0.5,
        ease: "power3.out",
      });

      // Orbit rings
      gsap.from(orbitsRef.current, {
        scale: 0.6,
        opacity: 0,
        duration: 2,
        delay: 0.8,
        ease: "power3.out",
      });

      // Glow pulse
      gsap.from(glowRef.current, {
        opacity: 0,
        scale: 0.6,
        duration: 2.5,
        delay: 1,
        ease: "power3.out",
      });

      // Text stagger
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from(".h-line1",   { y: 70, opacity: 0, duration: 1,   ease: "power3.out" })
        .from(".h-line2",   { y: 70, opacity: 0, duration: 1,   ease: "power3.out" }, "-=0.75")
        .from(".h-sub",     { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .from(".h-ctas",    { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.4");

      // Drone float loop (on inner wrapper, does NOT conflict with scroll)
      gsap.to(droneFloatRef.current, {
        y: 22,
        duration: 3.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2.2,
      });

      // Scroll: bg parallax
      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.8,
        },
        y: 100,
      });

      // Scroll: text fades
      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% top",
          end: "55% top",
          scrub: 1,
        },
        y: -60,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  const isAr = lang === "ar";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* ── Background image ───────────────────────────────────────────── */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-[1.05] will-change-transform bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.avif')" }}
      />

      {/* Subtle dark overlay so text is always legible */}
      <div className="absolute inset-0 bg-pitch/30" />

      {/* ── Main grid ──────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-14 pt-24 pb-16">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center ${
            isAr ? "direction-rtl" : ""
          }`}
        >
          {/* ── Left: text ─────────────────────────────────────────────── */}
          <div
            ref={textRef}
            className={`${isAr ? "font-tajawal text-right order-2 lg:order-1" : "font-outfit order-2 lg:order-1"}`}
          >
            <h1 className="mb-6">
              <span
                className={`h-line1 block font-bold text-white leading-[1.04] ${
                  isAr
                    ? "text-4xl sm:text-5xl md:text-6xl"
                    : "text-[clamp(2.6rem,5.5vw,5rem)]"
                }`}
              >
                {t.hero.headline[0]}
              </span>
              <span
                className={`h-line2 block font-bold text-azure leading-[1.04] ${
                  isAr
                    ? "text-4xl sm:text-5xl md:text-6xl"
                    : "text-[clamp(2.6rem,5.5vw,5rem)]"
                }`}
              >
                {t.hero.headline[1]}
              </span>
            </h1>

            <p
              className={`h-sub max-w-md text-white/65 leading-relaxed mb-10 ${
                isAr ? "text-base md:text-lg mr-0 ml-auto lg:ml-0" : "text-base md:text-lg"
              }`}
            >
              {t.hero.sub}
            </p>

            <div className={`h-ctas flex flex-wrap gap-4 mb-14 ${isAr ? "justify-end lg:justify-start" : ""}`}>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-azure text-pitch font-semibold text-sm hover:bg-white transition-colors duration-200"
              >
                {t.nav.cta}
              </a>
              <a
                href="#why"
                className="px-7 py-3.5 rounded-full border border-white/25 text-white text-sm font-medium hover:border-white/60 transition-colors duration-200"
              >
                {isAr ? "تعرف أكثر" : "Learn More"}
              </a>
            </div>
          </div>

          {/* ── Right: drone ───────────────────────────────────────────── */}
          <div
            className="order-1 lg:order-2 relative flex items-center justify-center lg:justify-end"
          >
            {/* Orbit rings */}
            <div
              ref={orbitsRef}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <svg
                viewBox="0 0 560 560"
                fill="none"
                className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] lg:w-[560px] lg:h-[560px] orbit-ring"
              >
                <circle
                  cx="280"
                  cy="280"
                  r="250"
                  stroke="#6FAEDB"
                  strokeWidth="1"
                  strokeDasharray="6 10"
                  opacity="0.35"
                />
                <circle cx="280" cy="30" r="10" fill="#D6BE92" opacity="0.9" />
                <circle cx="530" cy="280" r="6" fill="#6FAEDB" opacity="0.6" />
              </svg>

              <svg
                viewBox="0 0 360 360"
                fill="none"
                className="absolute w-[210px] h-[210px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px] orbit-ring-slow"
              >
                <circle
                  cx="180"
                  cy="180"
                  r="155"
                  stroke="#6FAEDB"
                  strokeWidth="0.8"
                  opacity="0.2"
                />
                <circle cx="180" cy="25" r="5" fill="#6FAEDB" opacity="0.7" />
              </svg>
            </div>

            {/* Drone wrapper stack */}
            <div ref={droneScrollRef} className="relative">
              <div ref={droneFloatRef}>
                <div
                  ref={droneTiltRef}
                  style={{ perspective: "900px", transformStyle: "preserve-3d" }}
                >
                  {/* Glow wrapper */}
                  <div style={{ filter: "drop-shadow(0 0 10px #6FAEDB) drop-shadow(0 0 32px #6FAEDB55)" }}>
                    {/* Azure hex — acts as the border */}
                    <div
                      className="relative w-[280px] h-[187px] sm:w-[380px] sm:h-[254px] md:w-[460px] md:h-[307px] lg:w-[560px] lg:h-[374px] bg-azure"
                      style={{ clipPath: "polygon(18% 0%, 82% 0%, 100% 50%, 82% 100%, 18% 100%, 0% 50%)" }}
                    >
                      {/* White inner hex — scaled down to reveal azure border */}
                      <div
                        className="absolute inset-0 bg-white"
                        style={{ transform: "scale(0.95)", transformOrigin: "center" }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src="/drone.png"
                            alt="Shortku autonomous delivery drone"
                            fill
                            priority
                            className="object-contain p-5"
                            sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, (max-width: 1024px) 460px, 560px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blue glow beneath drone — simulates motor lighting */}
              <div
                ref={glowRef}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-16 rounded-full blur-3xl"
                style={{ background: "radial-gradient(ellipse, #6FAEDB55, transparent 70%)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35">
        <span className="text-[10px] tracking-[0.22em] uppercase text-white font-outfit">
          {t.hero.scroll}
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/70 to-transparent float-anim" />
      </div>
    </section>
  );
}
