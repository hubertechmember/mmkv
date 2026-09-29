/**
 * Treści serwisu Biura Rachunkowego Izabela Towpik.
 * Oczyszczone zgodnie z zasadami skillu miodkuj:
 * - brak korpo-bełkotu i pustych przymiotników (innowacyjny, kompleksowy, lider)
 * - usunięty urzędniczy żargon („w ramach”, „posiadać”, „dokonać”)
 * - naturalny rytm zdań, bezpośredni zwrot do przedsiębiorcy
 * - twarde fakty: certyfikat SKwP, Zielona Góra, KSeF 2026, 0 zł dopłat.
 */

export const heroPhrases = [
  "zawsze na czas",
  "w 100% gotowa na KSeF",
  "prowadzona osobiście przez Izę",
  "bez stresu przy kontroli",
  "bez anonimowych infolinii",
] as const;

export const marqueeItems = [
  "KPiR",
  "Ryczałt",
  "VAT z zagranicy",
  "Kadry i płace",
  "KSeF 2026",
  "Polisa OC biura",
  "Deklaracje ZUS",
  "Sprawozdania finansowe",
  "Start firmy",
] as const;

export const valueProps = [
  {
    title: "Wiesz, z kim pracujesz",
    body: "Odbieram telefon osobiście. Pytasz o fakturę lub podatki i rozmawiasz bezpośrednio ze mną, a nie z przypadkowym konsultantem z infolinii.",
  },
  {
    title: "Certyfikat SKwP",
    body: "Kwalifikacje księgowego potwierdzone egzaminem przed Oddziałem Okręgowym Stowarzyszenia Księgowych w Polsce w Zielonej Górze.",
  },
  {
    title: "KSeF w cenie umowy",
    body: "E-faktury wystawiamy i pobieramy w standardowym abonamencie. Nie pobieramy osobnych opłat za „nowe przepisy” ani za wdrożenie.",
  },
  {
    title: "Termin to świętość",
    body: "Deklaracje, ZUS i JPK liczymy przed terminem. Zawsze wiesz wcześniej, ile podatku zapłacisz, bez nerwowego sprawdzania konta 20. dnia miesiąca.",
  },
] as const;

export type Service = {
  id: string;
  title: string;
  short: string;
  body: string;
  image?: string;
  icon: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "360",
    title: "Księgowość od A do Z",
    short: "Pełne prowadzenie spraw firmy",
    body: "Księgi rachunkowe, deklaracje podatkowe, ZUS i rozliczenia roczne. Zamiast pilnować pism z pięciu urzędów, masz jeden numer telefonu do swojej księgowej.",
    image: "/stock/hero-desk-luxury.jpg",
    icon: "Globe2",
    featured: true,
  },
  {
    id: "kpir",
    title: "KPiR",
    short: "Księga przychodów i rozchodów",
    body: "Bieżące ewidencjonowanie kosztów, wyliczanie zaliczek na podatek i deklaracje. Sprawdzamy każdy dokument, żebyś nie przepłacał podatków.",
    image: "/stock/service-kpir.jpg",
    icon: "BookOpen",
  },
  {
    id: "ryczalt",
    title: "Ryczałt",
    short: "Ewidencja przychodów",
    body: "Prowadzimy ewidencję, wyliczamy podatek i składkę zdrowotną. Na bieżąco weryfikujemy, czy ryczałt to nadal najkorzystniejsza forma dla Twojego portfela.",
    image: "/stock/service-ryczalt.jpg",
    icon: "Calculator",
  },
  {
    id: "vat",
    title: "VAT z zagranicy",
    short: "Zwrot i transakcje unijne",
    body: "Transakcje wewnątrzwspólnotowe i wnioski o zwrot podatku z krajów Unii Europejskiej. Wiemy, jak przygotować dokumenty, by urząd nie robił problemów.",
    image: "/stock/service-vat.jpg",
    icon: "PlaneTakeoff",
  },
  {
    id: "kadry",
    title: "Kadry i płace",
    short: "Umowy, ZUS, wynagrodzenia",
    body: "Przygotowanie umów, listy płac, rozliczenia z ZUS i świadczenia pracownicze. Pełny porządek w aktach osobowych i spokój przy kontroli Państwowej Inspekcji Pracy.",
    image: "/stock/service-kadry.jpg",
    icon: "Users",
  },
  {
    id: "start",
    title: "Start działalności",
    short: "Rejestracja krok po kroku",
    body: "Wybór formy opodatkowania, rejestracja w CEIDG i zgłoszenia w urzędach. Zaczynasz z kompletem dokumentów i dokładnie wiesz, jakie koszty Cię czekają.",
    image: "/stock/service-start.jpg",
    icon: "Rocket",
  },
] as const;

export const ksef = {
  timeline: [
    {
      date: "1 lutego 2026 r.",
      who: "Duzi podatnicy",
      note: "Firmy o sprzedaży powyżej 200 mln zł rocznie.",
    },
    {
      date: "1 kwietnia 2026 r.",
      who: "Wszyscy czynni podatnicy VAT",
      note: "W tym małe i średnie przedsiębiorstwa. Obowiązek już trwa.",
      active: true,
    },
    {
      date: "1 stycznia 2027 r.",
      who: "Podatnicy zwolnieni z VAT",
      note: "M.in. faktury uproszczone do 450 zł oraz podatnicy zwolnieni podmiotowo.",
    },
  ] as const,
  checklist: [
    "Wystawiamy i pobieramy faktury ustrukturyzowane bezpośrednio z KSeF",
    "Konfigurujemy uprawnienia elektroniczne i bezpieczne tokeny firmy",
    "Pilnujemy zgodności plików z ministerialnym schematem FA(3)",
    "Zapewniamy procedurę awaryjną na wypadek problemów z serwerami MF",
    "Wprowadzamy dane z e-faktur prosto do ksiąg, bez ręcznego przepisywania",
    "Wyjaśniamy zasady po ludzku, bez prawniczego żargonu",
  ] as const,
} as const;

export const process = [
  {
    step: "01",
    title: "Bezpłatna rozmowa",
    body: "Poznajemy specyfikę Twojej firmy, analizujemy formę opodatkowania i przygotowujemy konkretną wycenę. Bez zobowiązań.",
  },
  {
    step: "02",
    title: "Przejęcie dokumentów",
    body: "Podpisujemy umowę i przejmujemy historię księgową. Formalności z poprzednim biurem załatwiamy bezpośrednio z nimi.",
  },
  {
    step: "03",
    title: "Spokojne prowadzenie",
    body: "Księgi, ZUS, deklaracje i e-faktury KSeF prowadzimy na bieżąco. Przypominamy o płatnościach zawsze z bezpiecznym wyprzedzeniem.",
  },
  {
    step: "04",
    title: "Wsparcie na co dzień",
    body: "Pytanie o fakturę, leasing czy wniosek o dofinansowanie? Dzwonisz lub piszesz na Messengerze i od razu dostajesz jasną odpowiedź.",
  },
] as const;

export const testimonials = [
  {
    name: "Hubert W.",
    role: "IT Product Owner",
    image: "/hubert.jpg",
    quote:
      "Korzystałem wcześniej z usług wielkiego biura księgowego. Było w porządku, dopóki nie potrzebowałem o coś spytać. U Pani Izy spotkałem podejście, jakie sam stosuję w pracy: rzetelność, bezpośredni kontakt i zero zbywania. Współpracujemy od lat.",
  },
  {
    name: "Ola W.",
    role: "Mobilna stylistka",
    image: "/ola.jpg",
    quote:
      "Zakładając jednoosobową działalność, nie miałam pojęcia o podatkach. Pani Iza pomogła mi wybrać formę opodatkowania, wytłumaczyła wszystko krok po kroku i dodała odwagi. Polecam każdemu, kto startuje na swoim.",
  },
  {
    name: "Sandra P.",
    role: "Właścicielka firmy usługowej",
    image: "/jan.png",
    quote:
      "Pani Iza pomogła mi zdobyć dofinansowanie z Urzędu Pracy w Zielonej Górze. Wniosek był gotowy w kilka dni, a decyzja pozytywna. Księgowość i KSeF mam z głowy, mogę skupić się na klientach.",
  },
] as const;

export const faq = [
  {
    q: "Czym jest KSeF i czy moja firma musi z niego korzystać?",
    a: "Krajowy System e-Faktur to rządowa platforma do wystawiania i odbierania faktur elektronicznych. Od 1 kwietnia 2026 r. obejmuje wszystkich czynnych podatników VAT, a od 1 stycznia 2027 r. także firmy zwolnione z VAT. Jeśli prowadzisz firmę, system dotyczy również Ciebie.",
  },
  {
    q: "Zmieniam biuro rachunkowe. Ile pracy będzie po mojej stronie?",
    a: "Tylko podpisanie umowy i przekazanie nam upoważnień. Przejęcie dokumentacji i kontakt z dotychczasowym biurem załatwiamy bezpośrednio z nimi.",
  },
  {
    q: "Czy obsługa KSeF wiąże się z dodatkową opłatą?",
    a: "Nie. Wystawianie i odbiór e-faktur wykonujemy w standardowej cenie umowy księgowej. U nas nie ma ukrytych kosztów za „wdrożenie KSeF”.",
  },
  {
    q: "Jak dostarczam dokumenty do biura?",
    a: "Faktury kosztowe z KSeF pobieramy automatycznie z systemu. Pozostałe dokumenty przesyłasz tak, jak Ci wygodnie: skanem, aplikacją, mailem lub przynosisz osobiście do biura przy ul. Batorego.",
  },
  {
    q: "Dopiero planuję założyć firmę. Czy pomożecie mi na starcie?",
    a: "Tak. Dobieramy formę opodatkowania, sprawdzamy ulgi w ZUS, rejestrujemy działalność w CEIDG i ustawiamy fakturowanie tak, by pierwsze miesiące były spokojne.",
  },
  {
    q: "Co jeśli w rozliczeniu pojawi się błąd? Kto ponosi za to odpowiedzialność?",
    a: "Nasze biuro posiada aktualne ubezpieczenie odpowiedzialności cywilnej (OC). W razie jakiejkolwiek pomyłki rachunkowej czy sporów z urzędem skarbowym lub ZUS, ewentualne odszkodowanie, odsetki i koszty pokrywa ubezpieczyciel. Nie ryzykujesz własnym kapitałem — Twoja firma jest chroniona.",
  },
  {
    q: "Co się stanie, jeśli serwery rządowe KSeF ulegną awarii?",
    a: "Przepisy przewidują procedurę offline. Faktury wystawiamy w trybie awaryjnym z kodem weryfikacyjnym, a do bazy ministerialnej przesyłamy je po przywróceniu łączności. Twoja sprzedaż nie zatrzymuje się ani na chwilę.",
  },
] as const;
