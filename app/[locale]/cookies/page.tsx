import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { legalContent } from "@/lib/legal-content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const doc = legalContent[locale].cookies;
  return {
    title: doc.metaTitle,
    description: doc.metaDescription,
    alternates: { canonical: localeHref(locale, "/cookies") },
  };
}

export default async function CookiesPage() {
  const locale = await getLocale();
  return <LegalPage doc={legalContent[locale].cookies} />;
}
