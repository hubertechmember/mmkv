"use client";

import { useState } from "react";
import { site } from "../data/site";
import { Check, Calculator, MessageSquare, Phone } from "lucide-react";
import SectionHead from "./ui/SectionHead";
import Reveal from "./ui/Reveal";

type FormType = "ryczalt" | "kpir" | "spolka" | "start";

export default function PricingCalculator() {
  const [formType, setFormType] = useState<FormType>("ryczalt");
  const [docs, setDocs] = useState<number>(20);
  const [employees, setEmployees] = useState<number>(0);
  const [isVat, setIsVat] = useState<boolean>(true);

  // Rzetelna kalkulacja dla certyfikowanego biura w Zielonej Górze
  const calculatePrice = () => {
    let base = 250;
    if (formType === "ryczalt") base = 260;
    if (formType === "kpir") base = 340;
    if (formType === "spolka") base = 690;
    if (formType === "start") base = 280;

    // Dodatek za dokumenty ponad 10 sztuk
    let docAdd = 0;
    if (docs > 10) {
      const extra = docs - 10;
      docAdd = extra * (formType === "spolka" ? 6 : 4.5);
    }

    // Dodatek za pracowników (kadry i płace)
    const empAdd = employees * 50;

    // Dodatek za VAT
    const vatAdd = isVat ? 40 : 0;

    const total = Math.round(base + docAdd + empAdd + vatAdd);
    return total;
  };

  const estimatedTotal = calculatePrice();

  const formLabels: Record<FormType, string> = {
    ryczalt: "JDG — Ryczałt",
    kpir: "JDG — KPiR",
    spolka: "Spółka z o.o. / Cywilna",
    start: "Start nowej firmy",
  };

  const generateWhatsappText = () => {
    const text = `Dzień dobry Pani Izabelo! Wykonałem wstępną kalkulację na stronie: ${formLabels[formType]}, ${docs} dokumentów/mies., ${employees} pracowników, VAT: ${isVat ? "Tak" : "Nie"}. Szacunkowy koszt: ~${estimatedTotal} zł netto. Chciałbym porozmawiać o szczegółach.`;
    return encodeURIComponent(text);
  };

  return (
    <section id="cennik" className="relative bg-slate-50/60 py-20 sm:py-28 border-b border-slate-200/80">
      <div className="container-x relative">
        <SectionHead
          kicker="Jasne Zasady"
          title={
            <>
              Kalkulator <em className="text-gold italic">współpracy</em>
            </>
          }
          lead="Proste zasady, bez ukrytych opłat i gwiazdek. Oszacuj koszt obsługi w kilka sekund — bez podawania maila i bez czekania na telefon konsultanta."
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-12">
          {/* Formularz konfiguracji */}
          <Reveal className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-7">
              {/* Forma opodatkowania */}
              <div>
                <label className="block text-xs uppercase tracking-[0.14em] text-slate-700 mb-2.5 font-bold">
                  1. Wybierz formę prawną / opodatkowania
                </label>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {(
                    [
                      { id: "ryczalt", label: "Ryczałt" },
                      { id: "kpir", label: "KPiR" },
                      { id: "spolka", label: "Spółka z o.o." },
                      { id: "start", label: "Start firmy" },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormType(item.id)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        formType === item.id
                          ? "border-slate-900 bg-slate-900 text-white font-semibold shadow-xs"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <span className="text-xs sm:text-sm block font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Suwak liczby dokumentów */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="docs-slider" className="text-xs uppercase tracking-[0.14em] text-slate-700 font-bold">
                    2. Liczba dokumentów w miesiącu
                  </label>
                  <span className="font-display text-xl font-bold text-slate-900">
                    {docs} <span className="text-xs font-sans text-slate-500 font-normal">szt. / mies.</span>
                  </span>
                </div>
                <input
                  id="docs-slider"
                  type="range"
                  min="5"
                  max="120"
                  step="5"
                  value={docs}
                  onChange={(e) => setDocs(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-900 border border-slate-200"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>5 faktur</span>
                  <span>40 faktur</span>
                  <span>80 faktur</span>
                  <span>120+</span>
                </div>
              </div>

              {/* Liczba pracowników */}
              <div>
                <label className="block text-xs uppercase tracking-[0.14em] text-slate-700 mb-2.5 font-bold">
                  3. Kadry i płace (liczba pracowników)
                </label>
                <div className="grid grid-cols-4 gap-2.5">
                  {[0, 1, 3, 6].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setEmployees(count)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        employees === count
                          ? "border-slate-900 bg-slate-900 text-white font-semibold shadow-xs"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <span className="text-xs sm:text-sm block">
                        {count === 0 ? "Brak" : count === 6 ? "5+ osób" : `${count} ${count === 1 ? "osoba" : "osoby"}`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Podatnik VAT */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <div>
                  <span className="block text-sm font-bold text-slate-900">Status czynnego podatnika VAT</span>
                  <span className="block text-xs text-slate-500 mt-0.5">Rejestry VAT i pliki JPK_V7</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsVat(!isVat)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                    isVat ? "bg-slate-900" : "bg-slate-200"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
                      isVat ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </Reveal>

          {/* Karta z wyceną na żywo (Szlachetna ciemna karta kontrastowa) */}
          <Reveal delay={0.08} className="lg:col-span-5 h-full">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7 sm:p-9 text-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.16em] text-gold font-bold flex items-center gap-1.5">
                    <Calculator className="h-3.5 w-3.5" />
                    Szacunkowy koszt
                  </span>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-0.5 text-[10.5px] font-bold text-emerald-300">
                    KSeF: 0 zł
                  </span>
                </div>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-5xl sm:text-6xl font-bold text-white tracking-tight">
                    od {estimatedTotal}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase">
                    zł netto / mies.
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Ostateczny koszt ustalamy na piśmie przed rozpoczęciem współpracy.
                </p>

                <div className="mt-7 border-t border-slate-800 pt-6">
                  <span className="text-xs uppercase tracking-[0.14em] text-slate-300 font-bold block mb-3.5">
                    W abonamencie otrzymujesz:
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {[
                      "Kompleksowa obsługa KSeF (pobieranie i weryfikacja)",
                      "Bezpośredni kontakt z Izabelą Towpik (certyfikat SKwP)",
                      "Deklaracje ZUS, JPK_V7 i podatki dochodowe",
                      "Pełne ubezpieczenie OC biura rachunkowego",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 font-bold">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-7 space-y-2.5 pt-6 border-t border-slate-800">
                <a
                  href={`https://wa.me/48605467936?text=${generateWhatsappText()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-slate-900 hover:bg-slate-100 transition-all shadow-sm"
                >
                  <MessageSquare className="h-4 w-4 text-slate-900" />
                  Zapytaj o tę wycenę na WhatsApp
                </a>

                <a
                  href={site.phoneHref}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300 hover:text-white hover:border-slate-500 transition-all"
                >
                  <Phone className="h-3.5 w-3.5 text-gold" />
                  Zadzwoń: {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
