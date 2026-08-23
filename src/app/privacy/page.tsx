import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { privacyNotice } from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Privacy Notice — Shortku",
  description:
    "How Shortku collects, uses, and protects personal data in accordance with the Personal Data Protection Law of the Kingdom of Saudi Arabia.",
};

export default function PrivacyPage() {
  return <LegalDocument doc={privacyNotice} />;
}
