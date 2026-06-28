/* eslint-disable @typescript-eslint/no-explicit-any */
// Overlays a per-locale translation onto an English CMS record with field-level
// fallback. English stays the editable source; the overlay only needs to carry
// the fields that are translated. Arrays merge element-wise so translated text
// can omit non-text props (e.g. an image path) and keep the English value.
export function localize<T>(base: T, overlay: Partial<T> | undefined | null): T {
  if (!overlay) return base;
  const out: any = Array.isArray(base) ? [...(base as any)] : { ...(base as any) };
  for (const key of Object.keys(overlay as object)) {
    const ov = (overlay as any)[key];
    const bs = (base as any)?.[key];
    if (ov == null) continue;
    if (Array.isArray(ov) && Array.isArray(bs)) {
      out[key] = ov.map((item: any, i: number) =>
        item && typeof item === "object" && bs[i] && typeof bs[i] === "object"
          ? { ...bs[i], ...item }
          : item ?? bs[i]
      );
    } else if (typeof ov === "object" && !Array.isArray(ov) && bs && typeof bs === "object") {
      out[key] = { ...bs, ...ov };
    } else {
      out[key] = ov;
    }
  }
  return out as T;
}
