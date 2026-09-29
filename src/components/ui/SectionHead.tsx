import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  kicker: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
};

export default function SectionHead({ kicker, title, lead, align = "left" }: Props) {
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start";
  return (
    <Reveal className={`flex flex-col gap-3.5 max-w-3xl ${alignCls}`}>
      <p className="kicker flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
        <span aria-hidden className="inline-block h-px w-6 bg-gold/70" />
        {kicker}
        {align === "center" && <span aria-hidden className="inline-block h-px w-6 bg-gold/70" />}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-slate-900 font-bold tracking-tight">
        {title}
      </h2>
      {lead && (
        <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
          {lead}
        </p>
      )}
    </Reveal>
  );
}
