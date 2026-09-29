"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, site } from "../data/site";
import ResponsiveLogo from "./ui/ResponsiveLogo";
import Magnetic from "./ui/Magnetic";
import { Phone, ArrowRight } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: podświetla aktualną sekcję
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-2.5"
            : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3.5 sm:py-4"
        }`}
      >
        {/* Pasek postępu czytania strony */}
        <motion.span
          aria-hidden
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gold"
          style={{ scaleX: progress, opacity: scrolled ? 1 : 0 }}
        />

        <div className="container-x flex items-center justify-between gap-4">
          <a href="#top" aria-label="Do góry strony — Biuro Rachunkowe Izabela Towpik" className="shrink-0">
            <ResponsiveLogo variant={scrolled ? "compact" : "full"} />
          </a>

          {/* Menu desktopowe */}
          <nav aria-label="Główna nawigacja" className="hidden xl:block">
            <ul className="flex items-center gap-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={active === item.href ? "true" : undefined}
                    className={`relative py-2 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                      active === item.href ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                    {item.label === "KSeF" && (
                      <span className="ml-1.5 inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[9.5px] font-bold text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        2026
                      </span>
                    )}
                    {active === item.href && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Prawa strona nawigacji */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={site.phoneHref}
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-slate-700 transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5 text-gold" />
              {site.phone}
            </a>

            <Magnetic>
              <a
                href="#kontakt"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:bg-slate-800 shadow-sm"
              >
                Kontakt
                <ArrowRight className="h-3.5 w-3.5 text-goldlight" />
              </a>
            </Magnetic>

            {/* Hamburger mobilny */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Zamknij menu nawigacji" : "Otwórz menu nawigacji"}
              className="xl:hidden relative z-[60] flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-all duration-300 ${
                    open ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[5px] h-0.5 w-full bg-current transition-all duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[10px] h-0.5 w-full bg-current transition-all duration-300 ${
                    open ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Pełnoekranowe menu mobilne */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[55] flex flex-col justify-between bg-white px-8 pt-28 pb-12 shadow-2xl xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav aria-label="Menu mobilne">
              <ul className="flex flex-col gap-4">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: 0.04 * i, duration: 0.25 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-2xl sm:text-3xl text-slate-900 hover:text-gold transition-colors flex items-center justify-between font-bold"
                    >
                      <span>{item.label}</span>
                      {item.label === "KSeF" && (
                        <span className="text-xs font-sans uppercase font-bold text-emerald-700 border border-emerald-300 bg-emerald-50 px-3 py-1 rounded-full">
                          2026
                        </span>
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-3 border-t border-slate-200 pt-6 text-slate-600"
            >
              <div className="flex items-center justify-between">
                <a href={site.phoneHref} className="text-slate-900 text-lg font-bold flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gold" />
                  {site.phone}
                </a>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Zielona Góra</span>
              </div>
              <a href={`mailto:${site.email}`} className="text-sm font-medium hover:text-slate-900 transition-colors">
                {site.email}
              </a>
              <p className="text-xs text-slate-500">
                {site.street}, {site.postcode} {site.city}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
