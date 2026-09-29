"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faq } from "../data/content";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-slate-50/70 py-20 sm:py-28 border-b border-slate-200/80">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead
              kicker="Częste Pytania"
              title={
                <>
                  Pytania, które słyszymy <br />
                  <em className="text-gold italic">najczęściej</em>
                </>
              }
              lead="Nie ma głupich pytań, zwłaszcza w podatkach. Jeśli nie znajdziesz tu odpowiedzi, po prostu zadzwoń — chętnie wyjaśnimy."
            />
          </div>

          <div className="flex flex-col gap-3">
            {faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 0.04}>
                  <div
                    className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                      isOpen
                        ? "border-slate-300 bg-white shadow-sm"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                    >
                      <span className="font-display text-base sm:text-lg font-bold text-slate-900">{item.q}</span>
                      <span
                        aria-hidden
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-transform duration-200 ${
                          isOpen ? "rotate-45 bg-slate-100" : "bg-slate-50"
                        }`}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.21, 0.65, 0.35, 1] }}
                        >
                          <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
