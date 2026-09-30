"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Magnetic from "./ui/Magnetic";
import { site } from "../data/site";
import { ShieldCheck, ArrowRight, Award, CheckCircle2, Phone, /* Calculator, */ Clock } from "lucide-react";

const ease: [number, number, number, number] = [0.21, 0.65, 0.35, 1];

const heroPhrases = [
  "w 100% gotowa na KSeF",
  "zawsze terminowa i bez stresu",
  "z pełną ochroną polisy OC",
  "prowadzona osobiście przez Izę",
  "bez ukrytych dopłat i haczyków",
  "bez anonimowych infolinii",
];

export default function Hero() {
  const reduce = useReducedMotion();
  const [phrase, setPhrase] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setPhrase((p) => (p + 1) % heroPhrases.length), 3400);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section id="top" className="relative bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 pt-32 sm:pt-36 pb-20 sm:pb-28 overflow-hidden border-b border-slate-100">
      <div className="container-x relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Odznaka: Zielona Góra & KSeF 2026 */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700">
              Zielona Góra
            </span>
            <span className="text-slate-300">·</span>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700 flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              Obsługa KSeF w cenie abonamentu
            </span>
          </motion.div>

          {/* Główny nagłówek typograficzny */}
          <motion.h1
            className="mt-6 font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.08] text-slate-900 tracking-tight font-bold"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
          >
            Księgowość dla Twojej firmy,{" "}
            <span className="mt-1 block h-[1.22em] overflow-hidden text-slate-800">
              <AnimatePresence mode="wait">
                <motion.em
                  key={phrase}
                  className="text-gold font-display italic font-semibold block"
                  initial={reduce ? false : { y: "60%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={reduce ? undefined : { y: "-60%", opacity: 0 }}
                  transition={{ duration: 0.45, ease }}
                >
                  {heroPhrases[phrase]}
                </motion.em>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Podtytuł (Miodkuj: konkret, spokój, zero slopu) */}
          <motion.p
            className="mt-5 max-w-2xl mx-auto text-balance text-base sm:text-lg leading-relaxed text-slate-600"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
          >
            Prowadzisz działalność lub spółkę w Zielonej Górze? Pilnujemy Twoich podatków,
            ZUS-u i KSeF. Żadnych anonimowych konsultantów, żadnych kar za opóźnienia i zero
            dopłat za nowy system e-faktur.
          </motion.p>

          {/* Przyciski akcji (CTA) */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease }}
          >
            <Magnetic>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:bg-slate-800 hover:shadow-md"
              >
                <Phone className="h-4 w-4 text-goldlight" />
                Zadzwoń: {site.phone}
              </a>
            </Magnetic>

            {/* <Magnetic>
              <a
                href="#cennik"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-slate-800 transition-all duration-200 hover:bg-slate-50 hover:border-slate-400 shadow-sm"
              >
                <Calculator className="h-4 w-4 text-gold" />
                Sprawdź cennik
              </a>
            </Magnetic> */}

            <Magnetic>
              <a
                href="#ksef"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/60 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-emerald-800 transition-all duration-200 hover:bg-emerald-100/80"
              >
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                KSeF w pigułce
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Magnetic>
          </motion.div>

          {/* Paski zaufania: SKwP, Polisa OC, KSeF, Terminy */}
          <motion.div
            className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
              <Award className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-xs sm:text-sm text-slate-900">Certyfikat SKwP</p>
                <p className="text-xs text-slate-500 mt-0.5">Stowarzyszenie Księgowych w Polsce</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
              <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-xs sm:text-sm text-slate-900">Ubezpieczenie OC biura</p>
                <p className="text-xs text-slate-500 mt-0.5">Finansowe bezpieczeństwo Twojej firmy</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-xs sm:text-sm text-slate-900">0 zł dopłat za KSeF</p>
                <p className="text-xs text-slate-500 mt-0.5">Pełna obsługa e-faktur w cenie</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
              <Clock className="h-5 w-5 text-slate-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-xs sm:text-sm text-slate-900">Zawsze przed terminem</p>
                <p className="text-xs text-slate-500 mt-0.5">Deklaracje i podatki znasz wcześniej</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
