"use client";

/**
 * Autentyczny, oryginalny system logo: Biuro Rachunkowe Izabela Towpik.
 *
 * Wykorzystuje w 100% oryginalny znak z pliku public/logo.png:
 * - Elegancki, zaokrąglony nośnik grafitowy zapewniający doskonały kontrast
 * - Oryginalny złoty nawias architektoniczny (#DDAD59)
 * - Kaligraficzny monogram „it”
 */

interface LogoProps {
  variant?: "full" | "compact" | "icon";
  size?: number;
  className?: string;
  dark?: boolean;
}

export function Emblem({
  size = 42,
  className = "",
  dark = false,
}: {
  size?: number;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-xl transition-all duration-200 hover:scale-105 ${
        dark
          ? "bg-white/10 border border-white/15"
          : "bg-slate-900 border border-slate-800 shadow-sm"
      } p-1.5 ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Logo Biura Rachunkowego Izabela Towpik"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="Logo Izabela Towpik"
        width={size - 10}
        height={size - 10}
        className="h-full w-full object-contain select-none"
      />
    </div>
  );
}

export default function ResponsiveLogo({
  variant = "full",
  size,
  className = "",
  dark = false,
}: LogoProps) {
  if (variant === "icon") {
    return <Emblem size={size || 42} className={className} dark={dark} />;
  }

  const isCompact = variant === "compact";
  const emblemSize = size || (isCompact ? 36 : 44);

  return (
    <span className={`inline-flex items-center gap-3 select-none ${className}`}>
      <Emblem size={emblemSize} dark={dark} />

      <span className="flex flex-col justify-center leading-none">
        <span className="flex items-center gap-2">
          <span
            className={`font-sans font-semibold uppercase tracking-[0.22em] ${
              dark ? "text-slate-400" : "text-slate-500"
            } ${isCompact ? "text-[8.5px]" : "text-[9.5px]"}`}
          >
            Biuro Rachunkowe
          </span>
          <span
            className="inline-block h-1 w-1 rounded-full bg-gold"
            aria-hidden="true"
          />
          <span
            className={`font-sans font-medium uppercase tracking-[0.14em] text-gold ${
              isCompact ? "text-[8px] hidden sm:inline" : "text-[9px]"
            }`}
          >
            Zielona Góra
          </span>
        </span>

        <span
          className={`font-display tracking-tight mt-0.5 font-bold ${
            dark ? "text-white" : "text-slate-900"
          } ${isCompact ? "text-[17px] sm:text-[18px]" : "text-[21px] sm:text-[23px]"}`}
        >
          Izabela{" "}
          <span className="text-gold font-display italic font-semibold">
            Towpik
          </span>
        </span>
      </span>
    </span>
  );
}
