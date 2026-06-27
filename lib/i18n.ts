// Locale config. Pure module (no server-only imports) so the Edge proxy can use it.

export const locales = ["en", "es", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
};
/** Short label for the language switcher. */
export const localeShort: Record<Locale, string> = { en: "EN", es: "ES", pt: "PT" };
/** <html lang> / og:locale value. */
export const localeTag: Record<Locale, string> = { en: "en", es: "es", pt: "pt" };

export function isLocale(x: string | undefined | null): x is Locale {
  return !!x && (locales as readonly string[]).includes(x);
}

export function normalizeLocale(x: string | undefined | null): Locale {
  return isLocale(x) ? x : defaultLocale;
}

/**
 * Build an href for a locale. English lives at the root (no prefix);
 * other locales are prefixed (/es, /pt). `path` is the English/base path.
 */
export function localeHref(locale: Locale, path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return p;
  return p === "/" ? `/${locale}` : `/${locale}${p}`;
}

/** Strip a leading locale prefix from a path, returning the base (English) path. */
export function stripLocale(path: string): { locale: Locale; path: string } {
  const seg = path.split("/")[1];
  if (isLocale(seg) && seg !== defaultLocale) {
    const rest = path.slice(seg.length + 1) || "/";
    return { locale: seg, path: rest };
  }
  return { locale: defaultLocale, path };
}
