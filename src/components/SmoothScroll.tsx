"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/** Płynne przewijanie (Lenis) + ujednolicone kotwice z offsetem na sticky nav. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const scrollTo = (hash: string) => {
      const el = document.querySelector(hash);
      if (!el) return;
      lenis.scrollTo(el as HTMLElement, { offset: -72, duration: 1.1 });
    };

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href^='#']");
      if (!a) return;
      const hash = a.getAttribute("href")!;
      if (hash.length > 1 && document.querySelector(hash)) {
        e.preventDefault();
        scrollTo(hash);
        history.replaceState(null, "", hash);
      }
    };
    document.addEventListener("click", onClick);

    if (window.location.hash) scrollTo(window.location.hash);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
