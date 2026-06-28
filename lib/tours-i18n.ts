import type { TourDetail } from "./tours";
import type { Locale } from "./i18n";

// Per-tour ES/PT overlays, keyed by slug. English stays the editable source;
// the page merges these with field-level fallback via localize(). `category`
// and `type` are intentionally left in English here (they are matching keys);
// translate `category` only through categoryLabels so it stays in sync.
export type TourOverlay = Partial<TourDetail>;

export const toursI18n: Record<string, Partial<Record<Locale, TourOverlay>>> = {
  // Filled in the tours translation batch.
};
