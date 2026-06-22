"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Server-friendly photo gallery with a full-screen lightbox.
 * Click any tile to open; arrow keys / on-screen arrows / swipe to move between
 * photos; Esc or backdrop click to close. The grid markup mirrors the static
 * `.gallery` styling so it looks identical before hydration.
 */
export default function Gallery({ images, label }: { images: string[]; label: string }) {
  const [idx, setIdx] = useState<number | null>(null);
  const open = idx !== null;
  const touchX = useRef(0);

  const close = useCallback(() => setIdx(null), []);
  const go = useCallback(
    (d: number) => setIdx((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, go]);

  return (
    <>
      <div className={`gallery${images.length === 1 ? " gallery--solo" : images.length === 2 ? " gallery--duo" : ""}`}>
        {images.map((g, i) => (
          <button
            key={i}
            type="button"
            className={`g${images.length >= 3 && i === 0 ? " g--big" : ""}`}
            style={{ backgroundImage: `url('${g}')` }}
            aria-label={`${label} — open photo ${i + 1} of ${images.length}`}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>

      {idx !== null ? (
        <div className="lb" role="dialog" aria-modal="true" aria-label={`${label} photos`} onClick={close}>
          <button className="lb__x" aria-label="Close" onClick={close}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          {images.length > 1 ? (
            <button className="lb__nav lb__prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); go(-1); }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
          ) : null}

          <figure
            className="lb__fig"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images[idx]} alt={`${label} — photo ${idx + 1}`} />
            <figcaption>{idx + 1} / {images.length}</figcaption>
          </figure>

          {images.length > 1 ? (
            <button className="lb__nav lb__next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); go(1); }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
