"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ShieldCheck, ArrowRight, RotateCcw, AlertCircle, Check, Sparkles } from "lucide-react";

type BusinessForm = "jdg_ryczalt" | "jdg_kpir" | "spolka" | "start";
type VatStatus = "vat_active" | "vat_exempt";
type InvoicingMethod = "cloud" | "erp" | "spreadsheet" | "paper";

export default function KsefAuditor() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [form, setForm] = useState<BusinessForm>("jdg_ryczalt");
  const [vat, setVat] = useState<VatStatus>("vat_active");
  const [volume, setVolume] = useState<"low" | "mid" | "high">("mid");
  const [method, setMethod] = useState<InvoicingMethod>("cloud");

  const reset = () => setStep(1);

  // Kalkulacja terminu
  const isVatActive = vat === "vat_active";
  const deadlineDate = isVatActive ? "1 kwietnia 2026 r." : "1 stycznia 2027 r.";
  const urgency = isVatActive ? "Wysoka — obowiązek już trwa" : "Średnia — czas na przygotowanie";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      {/* Nagłówek audytora */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <ShieldCheck className="h-3.5 w-3.5" />
            </span>
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
              Kalkulator Gotowości KSeF
            </span>
          </div>
          <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-slate-900">
            Sprawdź status KSeF dla Twojej firmy
          </h3>
        </div>

        {/* Pasek postępu kroków */}
        <div className="flex items-center gap-1.5 text-xs">
          {[1, 2, 3].map((s) => (
            <span
              key={s}
              className={`flex h-7 w-7 items-center justify-center rounded-full font-bold transition-all ${
                step === s
                  ? "bg-slate-900 text-white shadow-xs"
                  : step > s || step === 4
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {step > s || step === 4 ? "✓" : s}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <AnimatePresence mode="wait">
          {/* KROK 1: Forma działalności */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              <p className="text-sm font-semibold text-slate-700">
                Krok 1 z 3: W jakiej formie prowadzisz działalność?
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    id: "jdg_ryczalt",
                    title: "JDG — Ryczałt",
                    desc: "Ewidencja przychodów, stałe stawki podatku ryczałtowego.",
                  },
                  {
                    id: "jdg_kpir",
                    title: "JDG — KPiR / Liniowy",
                    desc: "Księga przychodów i rozchodów, koszty firmowe.",
                  },
                  {
                    id: "spolka",
                    title: "Spółka z o.o. / Cywilna",
                    desc: "Pełna księgowość, zarząd, wspólnicy.",
                  },
                  {
                    id: "start",
                    title: "Dopiero zakładam firmę",
                    desc: "Pomoc w rejestracji CEIDG, ZUS i wyborze formy.",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setForm(item.id as BusinessForm)}
                    className={`flex flex-col text-left p-4 sm:p-5 rounded-2xl border transition-all ${
                      form === item.id
                        ? "border-slate-900 bg-slate-50 shadow-xs"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-display text-base sm:text-lg font-bold text-slate-900">
                        {item.title}
                      </span>
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                          form === item.id
                            ? "border-slate-900 bg-slate-900 text-white"
                            : "border-slate-300"
                        }`}
                      >
                        {form === item.id && <Check className="h-3 w-3 stroke-[3]" />}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  Dalej <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* KROK 2: Status VAT i wolumen */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              <p className="text-sm font-semibold text-slate-700">
                Krok 2 z 3: Status podatnika VAT i miesięczny wolumen dokumentów
              </p>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-700 mb-2.5">
                  Czy Twoja firma jest czynnym podatnikiem VAT?
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setVat("vat_active")}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      vat === "vat_active"
                        ? "border-slate-900 bg-slate-50 shadow-xs"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <span className="block font-bold text-slate-900 text-sm sm:text-base">
                      Czynny podatnik VAT
                    </span>
                    <span className="block text-xs text-slate-500 mt-1">
                      Wystawiasz faktury z VAT (obowiązek od 1 kwietnia 2026 r.)
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setVat("vat_exempt")}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      vat === "vat_exempt"
                        ? "border-slate-900 bg-slate-50 shadow-xs"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <span className="block font-bold text-slate-900 text-sm sm:text-base">
                      Zwolniony z VAT
                    </span>
                    <span className="block text-xs text-slate-500 mt-1">
                      Zwolnienie do 200 tys. zł rocznie (obowiązek od 2027 r.)
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-700 mb-2.5">
                  Miesięczna liczba faktur (sprzedaż + koszty):
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: "low", label: "Do 15 szt.", note: "Mikrofirma" },
                    { id: "mid", label: "16 – 50 szt.", note: "Standard" },
                    { id: "high", label: "Powyżej 50", note: "Większa skala" },
                  ].map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVolume(v.id as "low" | "mid" | "high")}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        volume === v.id
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <span className="block font-bold text-xs sm:text-sm">{v.label}</span>
                      <span className={`block text-[10px] mt-0.5 ${volume === v.id ? "text-slate-300" : "text-slate-500"}`}>
                        {v.note}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Wróć
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  Dalej <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* KROK 3: Aktualny sposób wystawiania faktur */}
          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              <p className="text-sm font-semibold text-slate-700">
                Krok 3 z 3: W jaki sposób obecnie wystawiasz dokumenty sprzedaży?
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    id: "cloud",
                    title: "Program w chmurze",
                    desc: "Fakturownia, inFakt, ifirma, wFirma itp.",
                  },
                  {
                    id: "erp",
                    title: "Program stacjonarny",
                    desc: "Subiekt, Comarch Optima, Symfonia itp.",
                  },
                  {
                    id: "spreadsheet",
                    title: "Excel / Word / PDF",
                    desc: "Ręcznie wypełniane szablony dokumentów.",
                  },
                  {
                    id: "paper",
                    title: "Bloczek papierowy",
                    desc: "Tradycyjny papierowy bloczek faktur.",
                  },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMethod(m.id as InvoicingMethod)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      method === m.id
                        ? "border-slate-900 bg-slate-50 shadow-xs"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base block">{m.title}</span>
                    <span className="text-xs text-slate-500 mt-1 block">{m.desc}</span>
                  </button>
                ))}
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Wróć
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  Pokaż podsumowanie <ArrowRight className="h-4 w-4 text-gold" />
                </button>
              </div>
            </motion.div>
          )}

          {/* KROK 4: WYNIK DIAGNOSTYKI */}
          {step === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              {/* Baner podsumowania terminu */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                      Twój termin KSeF
                    </span>
                    <h4 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-0.5">
                      {deadlineDate}
                    </h4>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Status: {urgency}
                    </span>
                    <span className="text-[11px] text-slate-500 mt-1">
                      Podstawa: Ustawa o VAT & Schemat FA(3)
                    </span>
                  </div>
                </div>
              </div>

              {/* Szczegółowa diagnoza */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                  <h5 className="font-display text-base font-bold text-slate-900 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-600" />
                    Wymogi dla Twojej firmy
                  </h5>
                  <ul className="mt-3 space-y-2 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-gold font-bold">•</span>
                      <span>Nadanie uprawnień elektronicznych w Urzędzie Skarbowym (ZAW-FA).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold font-bold">•</span>
                      <span>
                        {method === "paper" || method === "spreadsheet"
                          ? "Konieczne odejście od Excela/papieru na rzecz narzędzia ze schematem FA(3)."
                          : "Weryfikacja klucza autoryzacyjnego programu z ministerialnym API."}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold font-bold">•</span>
                      <span>Procedura w razie awarii serwerów Ministerstwa (bufor Offline24).</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 shadow-xs">
                  <h5 className="font-display text-base font-bold text-emerald-900 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-emerald-600" />
                    Co bierzemy na siebie
                  </h5>
                  <ul className="mt-3 space-y-2 text-xs text-emerald-950">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span><strong>0 zł dopłat za KSeF:</strong> obsługa e-faktur w standardowej cenie.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span><strong>Automatyczny odbiór:</strong> pobieramy faktury kosztowe prosto z KSeF.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span><strong>Walidacja FA(3):</strong> weryfikujemy schemat XML przed wysłaniem.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Przyciski końcowe */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Od nowa
                </button>

                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={`https://wa.me/48605467936?text=${encodeURIComponent(
                      `Dzień dobry Pani Izabelo, wykonałem audyt KSeF na stronie (forma: ${form}, termin: ${deadlineDate}). Chciałbym omówić obsługę księgową mojej firmy.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-slate-800 hover:bg-slate-50 transition-all"
                  >
                    WhatsApp
                  </a>

                  <a
                    href="#kontakt"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white hover:bg-slate-800 transition-all shadow-sm"
                  >
                    Umów bezpłatną konsultację
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
