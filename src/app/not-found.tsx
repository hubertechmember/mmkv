import Link from "next/link";
import ResponsiveLogo from "../components/ui/ResponsiveLogo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-cream">
      <ResponsiveLogo variant="full" />
      <h1 className="mt-8 font-display text-5xl sm:text-6xl text-goldlight">404</h1>
      <p className="mt-4 text-base text-muted max-w-md">
        Strona, której szukasz, nie istnieje lub została przeniesiona.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink hover:bg-goldlight transition-all"
      >
        Wróć do strony głównej
      </Link>
    </div>
  );
}
