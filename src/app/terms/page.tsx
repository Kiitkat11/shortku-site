import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { termsOfUse } from "@/lib/terms";

export const metadata: Metadata = {
  title: "Terms of Use — Shortku",
  description:
    "Terms governing your access to and use of the Shortku website, including acceptable use, property rights, and applicable law in the Kingdom of Saudi Arabia.",
};

export default function TermsPage() {
  return <LegalDocument doc={termsOfUse} />;
}
