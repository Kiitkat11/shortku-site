"use client";

import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";

export function Footer() {
  const { t } = useLang();
  

  return (
    <footer
      className={`bg-pitch-dark border-t border-white/5 py-14 px-6 md:px-12 ${
        "font-outfit"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-8 ${
            ""
          }`}
        >
          {/* Brand */}
          <div className={""}>
            <Image
              src="/wordmark-white.svg"
              alt="Shortku"
              width={110}
              height={26}
              className="h-6 w-auto mb-4 opacity-80"
            />
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav
            className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-sm text-white/40 ${
              ""
            }`}
          >
            <a href="#why" className="hover:text-azure transition-colors duration-200">
              {"Why It Matters"}
            </a>
            <a href="#vision" className="hover:text-azure transition-colors duration-200">
              {"Vision"}
            </a>
            <a href="#contact" className="hover:text-azure transition-colors duration-200">
              {"Contact"}
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/25 text-xs">{t.footer.copy}</p>
          <div className="flex items-center gap-2 opacity-30">
            <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="13" stroke="#6FAEDB" strokeWidth="1.5" />
              <circle cx="16" cy="3" r="3" fill="#D6BE92" />
            </svg>
            <span className="text-xs text-white/50 tracking-widest uppercase">Shortku</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
