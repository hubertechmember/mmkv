"use client";

import { useState } from "react";
import { site } from "../data/site";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import { ArrowUpRight, FacebookIcon } from "./ui/Icons";
import { Emblem } from "./ui/ResponsiveLogo";
import { MessageCircle, ShieldCheck, Users, ExternalLink, RefreshCw, Phone } from "lucide-react";

export default function FbPosts() {
  const [iframeKey, setIframeKey] = useState(0);

  const reloadIframe = () => {
    setIframeKey((prev) => prev + 1);
  };

  const fbEmbedUrl =
    "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61556579010353&tabs=timeline&width=500&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&lazy=true&appId=589832485920704";

  return (
    <section id="aktualnosci" className="relative bg-white py-20 sm:py-28 border-b border-slate-200/80 overflow-hidden">
      <div className="container-x relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            kicker="Społeczność & Aktualności"
            title={
              <>
                Oficjalny profil na <em className="text-gold italic">Facebooku</em>
              </>
            }
            lead="Bieżące komunikaty podatkowe, terminy w urzędach i codzienna praca biura w Zielonej Górze – na żywo z naszej oficjalnej osi czasu."
          />

          <Reveal delay={0.1}>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-800 hover:bg-slate-50 transition-all shadow-xs"
            >
              <FacebookIcon size={16} className="text-[#1877F2]" />
              Przejdź na profil FB
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        </div>

        {/* Główny układ: Wizytówka profilu + Live feed w ramce */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 items-start">
          {/* Lewa kolumna: Oficjalna wizytówka fanpage'a */}
          <div className="lg:col-span-5 space-y-5">
            <Reveal delay={0.06}>
              <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <Emblem size={50} />
                  <div className="flex-1 min-w-0">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-slate-700">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Oficjalny profil
                    </span>
                    <h3 className="mt-2 font-display text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                      Biuro Rachunkowe Izabela Towpik
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Zielona Góra · ul. Batorego 95a/1
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 pt-4">
                  Nowoczesne usługi księgowe w Zielonej Górze i okolicy. Zapewniamy indywidualne
                  podejście, bezpłatną pomoc przy KSeF oraz spokój przed Urzędem Skarbowym i ZUS.
                </p>

                {/* Realne atuty */}
                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  <div className="rounded-xl border border-slate-200 bg-white p-3 text-left">
                    <div className="flex items-center gap-1.5 text-slate-900">
                      <Users className="h-4 w-4 text-gold" />
                      <span className="font-mono text-base font-bold">217+</span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-500 leading-snug">
                      Obserwujących przedsiębiorców
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-3 text-left">
                    <div className="flex items-center gap-1.5 text-slate-900">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      <span className="text-xs font-bold">SKwP</span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-500 leading-snug">
                      Certyfikowane biuro
                    </p>
                  </div>
                </div>

                {/* Szybkie akcje społecznościowe */}
                <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={site.messenger}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white hover:bg-slate-800 transition-all shadow-xs"
                  >
                    <MessageCircle className="h-4 w-4 text-white" />
                    Napisz na Messengerze
                  </a>

                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-slate-800 hover:bg-slate-50 transition-all"
                  >
                    <Phone className="h-3.5 w-3.5 text-gold" />
                    Zadzwoń
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Informacja o autentyczności i adblockerach */}
            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-600 leading-relaxed shadow-xs">
                <p className="flex items-center gap-1.5 font-bold text-slate-900">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Oficjalny widget Meta Platforms
                </p>
                <p className="mt-1.5 text-slate-500">
                  Oś czasu ładuje się bezpośrednio z serwerów Facebooka. Jeśli Twój program blokuje
                  treści społecznościowe, możesz przejść bezpośrednio na profil biura:
                </p>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center gap-1 font-bold text-slate-900 hover:text-gold transition-colors"
                >
                  Otwórz profil facebook.com/biurommk w nowej karcie
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Prawa kolumna: Oficjalna ramka Live Feed z Facebooka */}
          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
                {/* Pasek okna */}
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5 bg-slate-50 rounded-t-2xl">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300 inline-block" />
                    <span className="ml-2 font-mono text-[11px] text-slate-500">
                      facebook.com/biurommk · Live Timeline
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={reloadIframe}
                      title="Odśwież podgląd feedu"
                      className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white transition-colors"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                    </button>
                    <a
                      href={site.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Otwórz na Facebooku"
                      className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* Kontener z iframe oficjalnego pluginu Meta */}
                <div className="relative w-full overflow-hidden rounded-b-2xl bg-white min-h-[550px] sm:min-h-[620px] flex justify-center">
                  <iframe
                    key={iframeKey}
                    src={fbEmbedUrl}
                    className="w-full h-[600px] sm:h-[650px] max-w-[500px]"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Oficjalny widget Facebook Biuro Rachunkowe Izabela Towpik"
                    loading="lazy"
                  />
                </div>

                {/* Stopka pod widgetem */}
                <div className="flex items-center justify-between px-4 py-2 bg-slate-50 text-[11px] text-slate-500 border-t border-slate-100 rounded-b-xl">
                  <span className="flex items-center gap-1.5">
                    <FacebookIcon size={14} className="text-[#1877F2]" />
                    Oficjalna wtyczka Meta Platforms Inc.
                  </span>
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 hover:text-gold transition-colors"
                  >
                    Polub i zaobserwuj stronę &rarr;
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
