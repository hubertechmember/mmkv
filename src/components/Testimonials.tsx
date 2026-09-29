import { testimonials } from "../data/content";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";

export default function Testimonials() {
  return (
    <section id="opinie" className="relative bg-white py-20 sm:py-28 border-b border-slate-200/80 text-slate-900">
      <div className="container-x">
        <SectionHead
          kicker="Referencje Klientów"
          title={
            <>
              Co mówią przedsiębiorcy z <em className="text-gold italic">Zielonej Góry</em>
            </>
          }
          lead="Prawdziwe opinie przedsiębiorców, którzy powierzyli nam swoje finanse, kadry i rozliczenia."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07} className="h-full">
              <figure className="relative flex h-full flex-col rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 sm:p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-md">
                <svg width="24" height="24" viewBox="0 0 24 24" className="mb-3.5 text-gold/80" aria-hidden fill="currentColor">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v6h6v-6H6.5C6.5 11.5 8 10 10 10V8Zm10 0c-3.3 0-6 2.7-6 6v6h6v-6h-3.5c0-2.5 1.5-4 3.5-4V8Z" />
                </svg>
                <blockquote className="flex-1 text-sm leading-relaxed text-slate-700">
                  „{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-200/80 pt-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.image}
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-200"
                  />
                  <span>
                    <span className="block font-display text-base font-bold text-slate-900">{t.name}</span>
                    <span className="block text-xs text-slate-500 font-medium">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-8 text-center text-xs text-slate-400">
            Opinie pochodzą od klientów Biura Rachunkowego Izabela Towpik w Zielonej Górze.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
