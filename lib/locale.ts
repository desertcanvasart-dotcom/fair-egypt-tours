import "server-only";
import { headers } from "next/headers";
import { normalizeLocale, type Locale } from "./i18n";

/** Current request locale, read from the proxy-set header. */
export async function getLocale(): Promise<Locale> {
  return normalizeLocale((await headers()).get("x-locale"));
}
