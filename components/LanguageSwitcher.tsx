"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeShort, localeNames, stripLocale, localeHref, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const { path } = stripLocale(pathname); // base (English) path

  return (
    <div className="langsw">
      <button type="button" className="langsw__btn" aria-label="Change language">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg>
        {localeShort[locale]}
        <svg className="langsw__caret" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
      </button>
      <div className="langsw__menu">
        {locales.map((l) => (
          <Link key={l} href={localeHref(l, path)} hrefLang={l} className={l === locale ? "is-active" : ""}>
            <b>{localeShort[l]}</b> {localeNames[l]}
          </Link>
        ))}
      </div>
    </div>
  );
}
