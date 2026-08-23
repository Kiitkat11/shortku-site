"use client";

import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from "react";
import { translations, type Lang } from "@/lib/translations";

type LangContextValue = {
  lang: Lang;
  t: (typeof translations)[Lang];
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang: Lang = "en";

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
  }, []);

  return (
    <LangContext.Provider value={{ lang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
