"use client";

import { ksef } from "../data/content";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import KsefAuditor from "./ksef/KsefAuditor";
import { ShieldCheck, CheckCircle2, XCircle, ArrowRight, Zap, RefreshCw, Lock } from "lucide-react";

export default function Ksef() {
  return (
    <section id="ksef" className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-slate-200/80">
      <div className="container-x relative">
        {/* Główny nagłówek sekcji */}
        <div className="max-w-3xl">
          <SectionHead
            kicker="Krajowy System e-Faktur (KSeF)"
            title={
              <>
                KSeF wchodzi w życie. <br />
                <em className="text-gold italic">E-faktury bierzemy na siebie.</em>
              </>
            }
            lead="Od 1 kwietnia 2026 r. e-faktury ustrukturyzowane to obowiązek dla czynnych podatników VAT. W naszym biurze w Zielonej Górze KSeF masz w cenie standardowej umowy. Żadnych dopłat za wdrożenie ani ukrytych abonamentów."
          />
        </div>

        {/* BENTO GRID: KSeF Status Shield + Harmonogram */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 items-start">
          {/* Lewa kolumna: Status tarczy + Harmonogram */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tarcza technologiczna biura */}
            <Reveal>
              <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">
                      Standard KSeF 2.0
                    </span>
                  </div>
                  <span className="rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                    Bramka MF: Gotowa
                  </span>
                </div>

                <div className="mt-5 space-y-3 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="text-slate-600 flex items-center gap-2 font-medium">
                      <Zap className="h-4 w-4 text-gold" />
                      Schemat logiczny
                    </span>
                    <span className="font-bold text-slate-900 font-mono">FA(3) Zgodny</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="text-slate-600 flex items-center gap-2 font-medium">
                      <Lock className="h-4 w-4 text-gold" />
                      Autoryzacja i tokeny
                    </span>
                    <span className="font-semibold text-slate-900">Klucze certyfikowane</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="text-slate-600 flex items-center gap-2 font-medium">
                      <RefreshCw className="h-4 w-4 text-gold" />
                      Procedura awaryjna
                    </span>
                    <span className="font-bold text-emerald-700">Bufor Offline24</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80 shadow-xs">
                    <span className="text-emerald-900 flex items-center gap-2 font-semibold">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      Dopłata za e-faktury
                    </span>
                    <span className="font-bold text-emerald-800 uppercase tracking-wider">0 zł w umowie</span>
                  </div>
                </div>

                <p className="mt-5 text-xs text-slate-500 leading-relaxed">
                  Jako certyfikowane biuro SKwP przejmujemy konfigurację uprawnień, pobieranie faktur kosztowych i kontrolę poprawności plików XML.
                </p>
              </div>
            </Reveal>

            {/* Harmonogram etapów KSeF */}
            <Reveal delay={0.06}>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <h4 className="font-display text-lg font-bold text-slate-900 mb-4">
                  Kalendarz wdrożenia KSeF
                </h4>
                <ol className="relative flex flex-col border-l border-slate-200 pl-5 space-y-5">
                  {ksef.timeline.map((t) => (
                    <li key={t.date} className="relative">
                      <span
                        aria-hidden
                        className={`absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border ${
                          "active" in t && t.active
                            ? "border-emerald-600 bg-emerald-500"
                            : "border-slate-300 bg-white"
                        }`}
                      />
                      <div className="flex items-baseline gap-2">
                        <time className="font-display text-base font-bold text-slate-900">{t.date}</time>
                        {"active" in t && t.active && (
                          <span className="rounded-full border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-emerald-700">
                            Obowiązuje
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs font-bold text-slate-800">{t.who}</p>
                      <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{t.note}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          {/* Prawa kolumna: Interaktywny Audytor Gotowości KSeF */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <KsefAuditor />
            </Reveal>
          </div>
        </div>

        {/* TABELA PORÓWNAWCZA: Typowe biuro vs Biuro Izabela Towpik */}
        <div className="mt-14">
          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 bg-slate-50/80 p-6 sm:p-7 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                    Transparentne Zasady
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Dlaczego przedsiębiorcy wybierają nasze biuro przy KSeF?
                  </h4>
                </div>
                <span className="text-xs text-slate-500">
                  Porównanie z rynkowymi praktykami biur sieciowych
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 uppercase text-[11px] tracking-wider bg-slate-50/50">
                      <th className="py-3.5 px-6 font-semibold">Zakres obsługi KSeF</th>
                      <th className="py-3.5 px-6 font-semibold text-slate-600">Tradycyjne biuro / franczyza</th>
                      <th className="py-3.5 px-6 font-bold text-slate-900 bg-emerald-50/40">
                        Biuro Izabela Towpik
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {[
                      {
                        title: "Opłata za obsługę i wdrożenie e-faktur",
                        traditional: "Dopłata: 150 – 500 zł / mies. lub opłata za pakiet",
                        towpik: "0 zł — e-faktury w cenie standardowej umowy księgowej",
                      },
                      {
                        title: "Kontakt w razie błędu walidacji XML",
                        traditional: "Infolinia, formularz zgłoszeniowy lub automatyczny bot",
                        towpik: "Bezpośredni telefon do Izabeli Towpik (certyfikat SKwP)",
                      },
                      {
                        title: "Przejęcie faktur kosztowych",
                        traditional: "Klient musi sam pobierać i przesyłać PDF-y / XML-e",
                        towpik: "Pobieramy faktury bezpośrednio z ministerialnego rejestru KSeF",
                      },
                      {
                        title: "Procedura przy awarii serwerów MF",
                        traditional: "„Proszę czekać na wznowienie działania systemu rządowego”",
                        towpik: "Wdrożony bufor Offline24 z kodami weryfikacyjnymi QR",
                      },
                      {
                        title: "Tłumaczenie zmian w przepisach",
                        traditional: "Suche odnośniki do Dziennika Ustaw i artykułów prawnych",
                        towpik: "Tłumaczymy po ludzku: co kliknąć, jak wystawić, czego dopilnować",
                      },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3.5 px-6 font-medium text-slate-900">{row.title}</td>
                        <td className="py-3.5 px-6 text-slate-500">
                          <span className="flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-500 shrink-0" />
                            {row.traditional}
                          </span>
                        </td>
                        <td className="py-3.5 px-6 font-medium text-slate-900 bg-emerald-50/30">
                          <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                            <strong className="text-emerald-900 font-semibold">{row.towpik}</strong>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-5 bg-slate-50/60 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-slate-600">
                  Nie musisz zmieniać programu ani uczyć się programowania. Przejdziemy przez KSeF bez stresu.
                </p>
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-gold transition-colors"
                >
                  Umów rozmowę o KSeF <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
