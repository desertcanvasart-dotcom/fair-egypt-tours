import type { Locale } from "@/lib/i18n";

// Small, self-contained SVG flags (no network dependency). Decorative — the
// language name always sits beside them, so they're aria-hidden.
type FlagProps = { size?: number };

export function FlagEN({ size = 20 }: FlagProps) {
  return (
    <span className="flag" style={{ width: size, height: size * 0.7 }} aria-hidden="true">
      <svg viewBox="0 0 24 16" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="24" height="16" fill="#012169" />
        <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="3.2" />
        <path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.4" />
        <rect x="9.6" width="4.8" height="16" fill="#fff" />
        <rect y="5.6" width="24" height="4.8" fill="#fff" />
        <rect x="10.6" width="2.8" height="16" fill="#C8102E" />
        <rect y="6.6" width="24" height="2.8" fill="#C8102E" />
      </svg>
    </span>
  );
}

export function FlagES({ size = 20 }: FlagProps) {
  return (
    <span className="flag" style={{ width: size, height: size * 0.7 }} aria-hidden="true">
      <svg viewBox="0 0 24 16" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="24" height="16" fill="#AA151B" />
        <rect y="4" width="24" height="8" fill="#F1BF00" />
      </svg>
    </span>
  );
}

export function FlagPT({ size = 20 }: FlagProps) {
  return (
    <span className="flag" style={{ width: size, height: size * 0.7 }} aria-hidden="true">
      <svg viewBox="0 0 24 16" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="24" height="16" fill="#DA291C" />
        <rect width="9.6" height="16" fill="#046A38" />
        <circle cx="9.6" cy="8" r="2.4" fill="#FFE000" stroke="#fff" strokeWidth="0.5" />
      </svg>
    </span>
  );
}

export function Flag({ locale, size }: { locale: Locale; size?: number }) {
  if (locale === "es") return <FlagES size={size} />;
  if (locale === "pt") return <FlagPT size={size} />;
  return <FlagEN size={size} />;
}
