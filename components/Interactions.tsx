"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive enhancement only. All content is server-rendered (great for SEO);
 * this adds scroll-reveal and the transparent->solid header on scroll.
 *
 * Re-runs on every route change (usePathname dep) so client-side navigations
 * re-observe the new page's `.reveal` elements — otherwise they'd stay hidden
 * until a full reload.
 */
export default function Interactions() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    let revealObs: IntersectionObserver | null = null;

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
    } else {
      revealObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              revealObs?.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
      );
      els.forEach((e) => revealObs!.observe(e));

      // Safety net: immediately reveal anything already in the viewport on load /
      // navigation, so above-the-fold content is never stuck hidden.
      requestAnimationFrame(() => {
        els.forEach((e) => {
          const r = e.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) {
            e.classList.add("in");
            revealObs?.unobserve(e);
          }
        });
      });
    }

    // --- Header: transparent over hero, solid on scroll (homepage only) ---
    const hdr = document.getElementById("hdr");
    let hdrObs: IntersectionObserver | null = null;
    let sentinel: HTMLDivElement | null = null;

    if (hdr && hdr.dataset.overHero === "true") {
      // Sentinel sits just below the header; as soon as the user scrolls a
      // little (past ~header height), it leaves the viewport and the header
      // flips to its solid background.
      sentinel = document.createElement("div");
      sentinel.style.cssText = "position:absolute;top:64px;height:1px;width:1px;pointer-events:none";
      document.body.appendChild(sentinel);

      hdrObs = new IntersectionObserver(
        (en) => {
          if (en[0].isIntersecting) {
            hdr.classList.remove("solid");
            hdr.classList.add("on-dark");
          } else {
            hdr.classList.add("solid");
            hdr.classList.remove("on-dark");
          }
        },
        { threshold: 0 }
      );
      hdrObs.observe(sentinel);
    }

    // --- Flip cards: tap to flip on touch devices (desktop uses :hover) ---
    const coarse = window.matchMedia("(hover: none)").matches;
    const onFlipTap = (e: Event) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>("[data-flip]");
      if (card) card.classList.toggle("is-flipped");
    };
    if (coarse) document.addEventListener("click", onFlipTap);

    return () => {
      revealObs?.disconnect();
      hdrObs?.disconnect();
      sentinel?.remove();
      if (coarse) document.removeEventListener("click", onFlipTap);
    };
  }, [pathname]);

  return null;
}
