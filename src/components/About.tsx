"use client";

import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import { site } from "../data/site";
import { Award, Check, MapPin, Phone, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="o-mnie" className="relative overflow-hidden bg-slate-50/60 py-20 sm:py-28 border-b border-slate-200/80">
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Lewa kolumna: Kompozycja wizualna (Portret Izabeli + Certyfikat SKwP) */}
          <Reveal className="lg:col-span-6 relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative">
              {/* Główne zdjęcie — gabinet i biuro */}
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-md bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/stock/hero-desk-luxury.jpg"
                  alt="Stanowisko pracy w Biurze Rachunkowym Izabela Towpik"
                  loading="lazy"
                  className="h-[360px] sm:h-[400px] w-full object-cover"
                />
              </div>

              {/* Karta z portretem Izabeli Towpik */}
              <div className="absolute -bottom-8 -right-2 sm:-right-4 w-56 sm:w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xl">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/iza.png"
                    alt="Izabela Towpik"
                    width={52}
                    height={52}
                    loading="lazy"
                    className="h-13 w-13 rounded-full object-cover ring-2 ring-slate-900 shrink-0 bg-slate-100"
                  />
                  <div>
                    <h4 className="font-display text-base font-bold text-slate-900 leading-tight">
                      Izabela Towpik
                    </h4>
                    <p className="text-[11px] text-gold mt-0.5 font-bold">
                      Właścicielka biura
                    </p>
                    <p className="text-[10.5px] text-slate-500 font-medium">
                      Certyfikat SKwP
                    </p>
                  </div>
                </div>
              </div>

              {/* Karta z certyfikatem SKwP */}
              <div className="absolute -top-6 -left-3 sm:-left-4 w-44 sm:w-48 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/stock/certyfikat.webp"
                  alt="Certyfikat SKwP"
                  loading="lazy"
                  className="h-24 w-full object-cover rounded-xl"
                />
                <div className="px-1.5 py-1 flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-gold shrink-0" />
                  <span className="text-[10px] uppercase tracking-[0.14em] text-slate-700 font-bold">
                    Certyfikat SKwP
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Prawa kolumna: Tekst i rzetelność */}
          <div className="lg:col-span-6 pt-6 lg:pt-0">
            <SectionHead
              kicker="O Mnie"
              title={
                <>
                  U nas wiesz, <br />
                  <em className="text-gold italic">z kim współpracujesz</em>
                </>
              }
            />

            <Reveal delay={0.06}>
              <div className="mt-5 space-y-3.5 text-base leading-relaxed text-slate-600">
                <p>
                  Nazywam się Izabela Towpik i prowadzę certyfikowane biuro rachunkowe w Zielonej Górze. Za księgowość każdego klienta odpowiadam osobiście. Nie przekazuję Cię anonimowym stażystom i nie musisz za każdym razem tłumaczyć swojej sytuacji od zera.
                </p>
                <p>
                  Mam kwalifikacje potwierdzone egzaminem przed Stowarzyszeniem Księgowych w Polsce (SKwP). Ponad dyplomy stawiam jednak prostą zasadę: odbieram telefon, mówię ludzkim językiem bez prawniczego żargonu i pilnuję każdego terminu w urzędzie tak, jak w mojej własnej firmie.
                </p>
              </div>
            </Reveal>

            {/* Kluczowe wyróżniki */}
            <Reveal delay={0.12}>
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {[
                  "Dyplom SKwP i egzamin państwowy",
                  "Lokalne biuro w Zielonej Górze",
                  "Pełne ubezpieczenie OC działalności",
                  "Bezpośredni numer do księgowej",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-medium text-slate-800 shadow-xs"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Karta gwarancji bezpieczeństwa i polisy OC */}
            <Reveal delay={0.15}>
              <div className="mt-5 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/50 via-white to-slate-50/30 p-4 sm:p-4.5 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-xs mt-0.5">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-display text-sm font-bold text-slate-900">
                        Bezpieczeństwo finansowe: Ważna polisa OC
                      </h4>
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                        Ochrona firmy
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      Zawiłe przepisy i kontrole skarbowe nie muszą spędzać snu z powiek. W razie jakiejkolwiek pomyłki rachunkowej czy sporu z urzędem, ewentualne odszkodowanie, odsetki i koszty pokrywa polisa ubezpieczyciela. Twoje finanse i płynność są w 100% chronione.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Dane kontaktowe i adresowe biura */}
            <Reveal delay={0.18}>
              <div className="mt-7 flex flex-wrap items-center gap-6 border-t border-slate-200 pt-5 text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span>{site.street}, {site.city}</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Phone className="h-4 w-4 text-gold" />
                  <a href={site.phoneHref} className="hover:text-slate-900 transition-colors font-bold text-slate-900">
                    {site.phone}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-slate-800 shadow-sm transition-all"
                >
                  Umów rozmowę z Izabelą
                </a>
                <a
                  href="#cennik"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-800 hover:bg-slate-50 transition-all shadow-xs"
                >
                  Przelicz koszty
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
