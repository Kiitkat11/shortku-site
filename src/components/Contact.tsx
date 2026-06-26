"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/components/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

/*
  To enable form submissions:
  1. Go to https://formspree.io and create a free account
  2. Create a new form and copy the form ID (e.g. "xpzgkqrb")
  3. Replace FORMSPREE_FORM_ID below with your actual form ID
*/
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

  

  const inputClass = `w-full bg-white/5 border border-white/15 rounded-xl px-5 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-azure/70 transition-colors duration-200 ${
    "text-left font-outfit"
  }`;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`bg-pitch py-28 md:py-36 px-6 md:px-12 ${
        "font-outfit"
      }`}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left — copy */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-azure font-medium mb-6">
            {t.contact.eyebrow}
          </p>
          <h2
            className={`font-bold text-white leading-[1.1] mb-6 ${
              "text-4xl md:text-5xl lg:text-6xl"
            }`}
          >
            {t.contact.headline}
          </h2>
          <p className={`text-white/50 leading-relaxed mb-8 ${"text-base md:text-lg"}`}>
            {t.contact.body}
          </p>
        </div>

        {/* Right — form card */}
        <div ref={cardRef}>
          {status === "success" ? (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-azure/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-azure" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className={`text-white font-semibold text-lg ${""}`}>
                {t.contact.success}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
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
                <p className="text-red-400 text-sm">{t.contact.error}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded-xl bg-azure text-pitch font-semibold text-sm hover:bg-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? "Sending…"
                  : t.contact.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
