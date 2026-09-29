import ResponsiveLogo, { Emblem } from "./ResponsiveLogo";

/**
 * Kompatybilny mostek dla istniejących komponentów:
 * Korzysta z nowego, responsywnego systemu wektorowego ResponsiveLogo.
 */

export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return <Emblem size={size} className={className} />;
}

export function LogoLockup({ compact = false }: { compact?: boolean }) {
  return <ResponsiveLogo variant={compact ? "compact" : "full"} />;
}

export { ResponsiveLogo };
