import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale } from "./lib/i18n";

// English lives at the root (no prefix); Spanish and Portuguese are path-prefixed.
const PREFIXED = ["es", "pt"];
// Routes that are never localized (kept at the app root).
const SKIP = ["/api", "/admin", "/login"];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (SKIP.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.next();
  }

  const seg = pathname.split("/")[1];

  // /en/* is redundant — canonicalize English to the root.
  if (seg === defaultLocale) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    return NextResponse.redirect(url);
  }

  const headers = new Headers(req.headers);

  // Spanish / Portuguese — pass through to the [locale] segment.
  if (PREFIXED.includes(seg)) {
    headers.set("x-locale", seg);
    return NextResponse.next({ request: { headers } });
  }

  // Default English at the root — rewrite to /en/* internally so [locale] matches.
  headers.set("x-locale", defaultLocale);
  const url = req.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url, { request: { headers } });
}

export const config = {
  // Run on everything except Next internals and files with an extension.
  matcher: ["/((?!_next|.*\\..*).*)"],
};
