"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/components/LanguageProvider";
import {
  CategoryLabel,
  OrganicBlob,
  PillButton,
  ServiceVisual,
} from "@/components/ui";
import { serviceAssets } from "@/lib/serviceAssets";
import type { ServiceColor } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);

  blocksRef.current = [];
  const addBlock = (el: HTMLDivElement | null) => {
    if (el) blocksRef.current.push(el);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: { trigger: headerRef.current, start: "top 82%" },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      blocksRef.current.forEach((block) => {
        gsap.from(block, {
          scrollTrigger: { trigger: block, start: "top 85%" },
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-[var(--page-max-width)] mx-auto">
        <div className="section-divider mb-20 md:mb-28" />

        <div ref={headerRef} className="mb-16 md:mb-24">
          <h2 className="text-heading-sm md:text-heading font-semibold text-surface-cream leading-[1.2] tracking-[-0.44px] md:tracking-[-0.66px]">
            {t.services.headline}
          </h2>
        </div>

        <div className="space-y-0">
          {t.services.items.map((service, index) => (
            <div key={service.id}>
              <div
                ref={addBlock}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 md:py-20"
              >
                <div
                  className={`relative flex items-center justify-center min-h-[280px] md:min-h-[360px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  {serviceAssets[service.id] ? (
                    <ServiceVisual
                      asset={serviceAssets[service.id]}
                      color={service.color as ServiceColor}
                      className="w-[min(100%,480px)] aspect-[5/4]"
                    />
                  ) : (
                    <OrganicBlob
                      color={service.color as ServiceColor}
                      className="w-[min(100%,480px)] aspect-square"
                    />
                  )}
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <CategoryLabel color={service.color as ServiceColor}>
                    {service.label}
                  </CategoryLabel>
                  <h3 className="text-heading-sm font-semibold text-surface-cream leading-[1.2] tracking-[-0.44px] mb-6">
                    {service.title}
                  </h3>
                  <p className="text-body-lg text-surface-cream/90 leading-[1.38] tracking-[-0.23px] mb-6">
                    {service.body}
                  </p>
                  {"tagline" in service && service.tagline && (
                    <p className="text-body text-shockingly-green mb-6">{service.tagline}</p>
                  )}
                  <ul className="space-y-3 mb-8">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="text-body-sm text-surface-50 leading-[1.15] flex items-start gap-3"
                      >
                        <span className="text-surface-25 mt-1.5 shrink-0">—</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <PillButton href="#contact">{service.explore}</PillButton>
                </div>
              </div>
              {index < t.services.items.length - 1 && <div className="section-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
