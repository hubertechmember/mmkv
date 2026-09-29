import { nav, site } from "../data/site";
import ResponsiveLogo from "./ui/ResponsiveLogo";
import { FacebookIcon, MessengerIcon, WhatsAppIcon } from "./ui/Icons";
import { ShieldCheck, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-16 text-slate-400">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Kolumna 1: Brand & Misja */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <ResponsiveLogo variant="full" dark />
            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-slate-400 mt-1">
              Certyfikowane biuro rachunkowe w Zielonej Górze. Rzetelne rozliczenia, kadry, płace i podatki.
              Pełna gotowość na KSeF bez ukrytych dopłat.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs">
              <span className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-slate-300">
                <Award className="h-3.5 w-3.5 text-gold" />
                Certyfikat SKwP
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-slate-300">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                Polisa OC Biura
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-emerald-900 bg-emerald-950/60 px-3 py-1 text-emerald-400 font-medium">
                <ShieldCheck className="h-3.5 w-3.5" />
                KSeF Ready 2026
              </span>
            </div>
          </div>

          {/* Kolumna 2: Szybkie linki */}
          <nav aria-label="Nawigacja w stopce" className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-200 mb-3.5">
              Na skróty
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-xs sm:text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-slate-400 transition-colors hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kolumna 3: Kontakt i dane rejestrowe */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-200 mb-3.5">
              Biuro w Zielonej Górze
            </h3>
            <address className="flex flex-col gap-1.5 text-xs sm:text-sm not-italic text-slate-400 leading-relaxed">
              <a href={site.phoneHref} className="text-white font-bold transition-colors hover:text-gold">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                {site.email}
              </a>
              <span className="text-slate-300">
                {site.street}, {site.postcode} {site.city}
              </span>
              <span className="text-xs text-slate-500 pt-1">
                NIP: {site.nip} · REGON: {site.regon}
              </span>
            </address>

            <div className="mt-5 flex items-center gap-2.5">
              {[
                { href: site.facebook, label: "Facebook profil biura", icon: <FacebookIcon size={16} /> },
                { href: site.messenger, label: "Napisz na Messengerze", icon: <MessengerIcon size={16} /> },
                { href: site.whatsapp, label: "Czat WhatsApp", icon: <WhatsAppIcon size={16} /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-300 transition-all duration-200 hover:border-slate-500 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Dolna belka prawna */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {site.name}. Wszelkie prawa zastrzeżone.</p>
          <p className="flex items-center gap-2">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Certyfikowana księgowość SKwP · Polisa OC · Zielona Góra
          </p>
        </div>
      </div>
    </footer>
  );
}
