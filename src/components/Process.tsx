import { process } from "../data/content";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";

export default function Process() {
  return (
    <section id="jak-pracujemy" className="relative bg-white py-20 sm:py-28 border-b border-slate-200/80">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead
              kicker="Jak Pracujemy"
              title={
                <>
                  Cztery kroki do <br />
                  <em className="text-gold italic">spokoju w papierach</em>
                </>
              }
              lead="Bez skomplikowanych procedur i bez zbędnej biurokracji. Najpierw krótka rozmowa, potem jasny plan działania."
            />
          </div>

          <ol className="flex flex-col gap-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.06}>
                <li className="group relative flex gap-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-7 transition-all duration-200 hover:border-slate-300 hover:bg-white hover:shadow-md">
                  <span
                    aria-hidden
                    className="font-display text-4xl sm:text-5xl font-bold leading-none text-slate-300 transition-colors duration-200 group-hover:text-gold"
                  >
                    {p.step}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900">{p.title}</h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-slate-600">{p.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
