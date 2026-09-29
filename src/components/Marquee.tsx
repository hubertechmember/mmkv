import { marqueeItems } from "../data/content";

/** Pasek przewijanych usług — czysty CSS, zbalansowany, elegancki. */
export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {marqueeItems.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 font-display text-base sm:text-lg tracking-[0.14em] uppercase text-slate-600 font-semibold">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee-paused relative overflow-hidden border-y border-slate-200/80 bg-slate-50/70 py-4">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent" />
    </div>
  );
}
