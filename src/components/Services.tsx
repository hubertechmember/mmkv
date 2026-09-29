"use client";

import { services, type Service } from "../data/content";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import { ArrowRight } from "lucide-react";

function ServiceIcon({ name }: { name: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "Globe2":
      return (
        <svg {...common}>
          <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
          <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
          <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
    case "BookOpen":
      return (
        <svg {...common}>
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case "Calculator":
      return (
        <svg {...common}>
          <rect width="16" height="20" x="4" y="2" rx="2" />
          <path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
        </svg>
      );
    case "PlaneTakeoff":
      return (
        <svg {...common}>
          <path d="M2 22h20" />
          <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.06 1.08l-7.42 3.75a2 2 0 0 1-1.79.03L6.36 17.4Z" />
        </svg>
      );
    case "Users":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "Rocket":
      return (
        <svg {...common}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    default:
      return null;
  }
}

function Card({
  service,
  className = "",
  tall = false,
}: {
  service: Service;
  className?: string;
  tall?: boolean;
}) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg ${className}`}
    >
      <div className={`relative overflow-hidden ${tall ? "h-64 sm:h-72" : "h-44"} bg-slate-100`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-900 shadow-md">
          <ServiceIcon name={service.icon} />
        </span>
        {service.featured && (
          <span className="absolute right-5 top-5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-900 shadow-md">
            Wybierane najczęściej
          </span>
        )}
      </div>

      <div className="relative flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-gold transition-colors">
            {service.title}
          </h3>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-gold">
            {service.short}
          </p>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{service.body}</p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">
            KSeF w cenie · Certyfikat SKwP
          </span>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-gold transition-colors"
          >
            Zapytaj <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  const [featured, kpir, ryczalt, vat, kadry, start] = services;

  return (
    <section id="uslugi" className="relative bg-slate-50/60 py-20 sm:py-28 border-b border-slate-200/80">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            kicker="Zakres Usług"
            title={
              <>
                Księgowość dopasowana do <em className="text-gold italic">Twojego biznesu</em>
              </>
            }
            lead="Od książki przychodów i ryczałtu po spółki z o.o., kadry, płace i KSeF. Wybierz to, czego potrzebujesz — lub powierz nam całość i skup się na rozwoju firmy."
          />

          <Reveal delay={0.1}>
            <a
              href="#cennik"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-sm transition-all"
            >
              Kalkulator współpracy &rarr;
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-6">
          <Reveal className="md:col-span-6 lg:col-span-4 lg:row-span-2">
            <Card service={featured} tall />
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-3 lg:col-span-2">
            <Card service={kpir} />
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-3 lg:col-span-2">
            <Card service={ryczalt} />
          </Reveal>
          <Reveal className="md:col-span-2">
            <Card service={vat} />
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-2">
            <Card service={kadry} />
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-2">
            <Card service={start} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
