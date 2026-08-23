"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/components/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const FORMSPREE_FORM_ID = "meebgagg";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent border border-surface-25 rounded-lg px-5 py-3.5 text-surface-cream placeholder-surface-50 focus:outline-none focus:border-surface-cream/50 transition-colors duration-200 text-body-sm";

  return (
    <section id="contact" ref={sectionRef} className="px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-[var(--page-max-width)] mx-auto">
        <div className="section-divider mb-20 md:mb-28" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <h2 className="text-heading-sm md:text-heading font-semibold text-surface-cream leading-[1.2] tracking-[-0.44px] md:tracking-[-0.66px] mb-6">
              {t.contact.headline}
            </h2>
            <p className="text-body-lg text-surface-50 leading-[1.38] tracking-[-0.23px]">
              {t.contact.body}
            </p>
          </div>

          <div ref={cardRef}>
            {status === "success" ? (
              <div className="border border-surface-25 rounded-lg p-10 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-shockingly-green/30 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-shockingly-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-surface-cream font-semibold text-body-lg">{t.contact.success}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-surface-25 rounded-lg p-8 space-y-5"
              >
                <input
                  type="text"
                  required
                  placeholder={t.contact.name}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="email"
                  required
                  placeholder={t.contact.email}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
                <textarea
                  required
                  rows={5}
                  placeholder={t.contact.message}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />

                {status === "error" && (
                  <p className="text-pink text-body-sm">{t.contact.error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="pill-gradient w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending…" : t.contact.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
