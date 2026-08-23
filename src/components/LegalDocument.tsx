"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { LegalDoc } from "@/lib/legal";

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <div className="mesh-bg" aria-hidden="true">
        <div className="mesh-bg__base" />
        <div className="mesh-bg__blob mesh-bg__blob--a" />
        <div className="mesh-bg__blob mesh-bg__blob--b" />
      </div>

      <main className="content">
        <Nav />

        <article className="px-6 md:px-12 pt-44 md:pt-48 pb-20 md:pb-28">
          <div className="max-w-3xl mx-auto">
            <p className="text-caption tracking-[0.14em] uppercase text-shockingly-green mb-4">
              Legal
            </p>
            <h1 className="text-heading-sm md:text-heading font-semibold text-surface-cream leading-[1.2] tracking-[-0.44px] md:tracking-[-0.66px] mb-4">
              {doc.title}
            </h1>
            {doc.lastUpdated && (
              <p className="text-body-sm text-surface-50 mb-16">
                Last updated: {doc.lastUpdated}
              </p>
            )}
            {!doc.lastUpdated && <div className="mb-16" />}

            <div className="space-y-16">
              {doc.sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <h2 className="text-subheading font-semibold text-surface-cream leading-[1.2] tracking-[-0.34px] mb-6">
                    {section.title}
                  </h2>
                  <div className="space-y-5">
                    {section.blocks.map((block, i) =>
                      block.type === "p" ? (
                        <p
                          key={i}
                          className="text-body text-surface-cream/90 leading-[1.55]"
                        >
                          {block.text}
                        </p>
                      ) : block.ordered ? (
                        <ol key={i} className="space-y-3 list-decimal list-outside pl-5">
                          {block.items.map((item) => (
                            <li
                              key={item}
                              className="text-body text-surface-cream/90 leading-[1.55] pl-2"
                            >
                              {item}
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <ul key={i} className="space-y-3">
                          {block.items.map((item) => (
                            <li
                              key={item}
                              className="text-body text-surface-cream/90 leading-[1.55] flex items-start gap-3"
                            >
                              <span className="text-surface-25 mt-2 shrink-0">—</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
