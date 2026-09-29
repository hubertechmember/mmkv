"use client";

import { useState, type FormEvent } from "react";
import { site } from "../data/site";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import { MessengerIcon, WhatsAppIcon } from "./ui/Icons";
import { Phone, Mail, Send, CheckCircle2 } from "lucide-react";

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors duration-200 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const data = new FormData(form);
      const body = new URLSearchParams(
        Array.from(data.entries()).map(([k, v]) => [k, String(v)])
      ).toString();
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error("network");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const channels = [
    { href: site.phoneHref, label: "Telefon bezpośredni", value: site.phone, icon: "phone" },
    { href: `mailto:${site.email}`, label: "E-mail biura", value: site.email, icon: "mail" },
    { href: site.messenger, label: "Messenger", value: "Napisz na czacie", icon: "messenger", external: true },
    { href: site.whatsapp, label: "WhatsApp", value: site.phone, icon: "whatsapp", external: true },
  ];

  return (
    <section id="kontakt" className="relative bg-slate-50/60 py-20 sm:py-28 border-b border-slate-200/80">
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <SectionHead
              kicker="Kontakt"
              title={
                <>
                  Porozmawiajmy o <br />
                  <em className="text-gold italic">Twojej firmie</em>
                </>
              }
              lead="Pierwsza rozmowa nic nie kosztuje i do niczego nie zobowiązuje. Zadzwoń, napisz lub wypełnij krótki formularz."
            />

            <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {channels.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.05}>
                  <li>
                    <a
                      href={c.href}
                      {...("external" in c && c.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition-all duration-200 hover:border-slate-300 hover:shadow-md"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-800 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                        {c.icon === "phone" && <Phone className="h-4 w-4" />}
                        {c.icon === "mail" && <Mail className="h-4 w-4" />}
                        {c.icon === "messenger" && <MessengerIcon size={18} />}
                        {c.icon === "whatsapp" && <WhatsAppIcon size={18} />}
                      </span>
                      <span className="leading-tight">
                        <span className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-500">{c.label}</span>
                        <span className="block text-sm font-semibold text-slate-900 mt-0.5">{c.value}</span>
                      </span>
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.15}>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-xs text-slate-600 space-y-1 shadow-xs">
                <p className="font-bold text-slate-900 text-sm">Biuro Rachunkowe Izabela Towpik</p>
                <p>{site.street}, {site.postcode} {site.city}</p>
                <p className="text-slate-500">NIP: {site.nip} · REGON: {site.regon}</p>
              </div>
            </Reveal>
          </div>

          {/* Formularz kontaktowy */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-sm">
              {status === "sent" ? (
                <div className="flex min-h-[380px] flex-col items-center justify-center gap-4 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <h3 className="font-display text-2xl font-bold text-slate-900">Dziękujemy za wiadomość!</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-slate-600">
                    Wiadomość dotarła. Odezwiemy się najszybciej jak to możliwe — zwykle jeszcze tego samego dnia roboczego.
                  </p>
                </div>
              ) : (
                <form
                  name="kontakt"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="pole-na-robota"
                  onSubmit={onSubmit}
                  className="flex flex-col gap-4"
                >
                  <input type="hidden" name="form-name" value="kontakt" />
                  <p className="hidden" aria-hidden>
                    <label>
                      Nie wypełniaj: <input name="pole-na-robota" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <p className="flex flex-col gap-1.5">
                      <label htmlFor="f-name" className="text-xs font-bold uppercase tracking-[0.1em] text-slate-700">
                        Imię i nazwisko
                      </label>
                      <input id="f-name" name="imie" required autoComplete="name" placeholder="Jan Kowalski" className={inputCls} />
                    </p>
                    <p className="flex flex-col gap-1.5">
                      <label htmlFor="f-contact" className="text-xs font-bold uppercase tracking-[0.1em] text-slate-700">
                        Telefon lub e-mail
                      </label>
                      <input id="f-contact" name="kontakt" required placeholder="+48 ... lub email" autoComplete="email" className={inputCls} />
                    </p>
                  </div>

                  <p className="flex flex-col gap-1.5">
                    <label htmlFor="f-topic" className="text-xs font-bold uppercase tracking-[0.1em] text-slate-700">
                      W czym możemy pomóc?
                    </label>
                    <select id="f-topic" name="temat" defaultValue="Księgowość bieżąca" className={inputCls}>
                      {["Księgowość bieżąca", "Kadry i płace", "Wdrożenie KSeF", "Zakładanie nowej firmy", "Zmiana biura rachunkowego", "Inne"].map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </p>

                  <p className="flex flex-col gap-1.5">
                    <label htmlFor="f-msg" className="text-xs font-bold uppercase tracking-[0.1em] text-slate-700">
                      Wiadomość
                    </label>
                    <textarea
                      id="f-msg"
                      name="wiadomosc"
                      rows={4}
                      required
                      placeholder="Napisz krótko czym zajmuje się Twoja firma i czego potrzebujesz."
                      className={`${inputCls} resize-none`}
                    />
                  </p>

                  {status === "error" && (
                    <p role="alert" className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">
                      Formularz chwilowo nie odpowiedział. Skontaktuj się bezpośrednio:{" "}
                      <a href={`mailto:${site.email}`} className="font-bold underline">
                        {site.email}
                      </a>{" "}
                      lub tel:{" "}
                      <a href={site.phoneHref} className="font-bold underline">
                        {site.phone}
                      </a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-slate-800 transition-all shadow-sm disabled:opacity-60"
                  >
                    <Send className="h-3.5 w-3.5 text-gold" />
                    {status === "sending" ? "Wysyłam…" : "Wyślij zapytanie"}
                  </button>
                  <p className="text-center text-[11px] text-slate-400">
                    Odpowiadamy w godzinach pracy biura, od poniedziałku do piątku.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Mapa dojazdu */}
        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 shadow-sm bg-white">
            <iframe
              src={site.mapsEmbed}
              title="Biuro Rachunkowe Izabela Towpik, Zielona Góra"
              width="100%"
              height="380"
              loading="lazy"
              allowFullScreen
              className="block w-full"
              style={{ border: "none" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
