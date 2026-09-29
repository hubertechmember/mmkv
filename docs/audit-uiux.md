# Audyt UX/UI — biuro-towpik.pl (stan przed redesignem)

Ocena metodą heurystyczną (Krug + Nielsen). **Wynik: 5,5/10** — żadna z głównych czynności
nie jest zablokowana, ale jest kilka poważnych problemów z zaufaniem, orientacją i treścią.

## Znalezione problemy (skala 0–4)

| # | Waga | Problem | Gdzie | Fix w redesignie |
|---|------|---------|-------|------------------|
| 1 | **3** | Usługi — główny produkt — nie mają pozycji w menu (siedzą pod „O NAS"). Trunk test: etykieta nie odpowiada treści. | nav, sekcja o-nas | Osobna pozycja „Usługi" + dedykowana sekcja bento |
| 2 | **3** | „© 2024 Volani" — obca nazwa marki i stary rok w stopce. Uderza w zaufanie. | footer | Spójny branding biura, aktualny rok |
| 3 | **3** | Zdjęcie opinii Sandry P. to prawdopodobnie zdjęcie mężczyzny (`jan.png`). Dyskredytacja opinii. | testimonials | Realne zgody + zdjęcia (patrz `docs/zdjecia-brief.md`) |
| 4 | **3** | Zero komunikacji o KSeF, który od 1.02/1.04.2026 jest obowiązkiem ustawowym. Największa luka treściowa 2026. | całość | Pełna sekcja KSeF z harmonogramem i checklistą |
| 5 | 2 | CTA „SKONTAKTUJ SIĘ" scrolluje do stopki, a nav „KONTAKT" do mapy — dwa różne cele tej samej intencji. | hero vs nav | Jedna strefa kontaktu: formularz + dane + mapa |
| 6 | 2 | Widżet Facebooka: iframe w prostokącie 1:1, wolny, bez stylu, CLS. | fb widget | Karty postów (dane edytowalne) + link do fanpage |
| 7 | 2 | Literówki w opiniach: „**U** doświadczyłem", „jakie sam stosuję **w swojej** codziennej pracy". | testimonials | Korekta zachowująca głos autora |
| 8 | 2 | Kontrast: przyciski biel na `#b8860b` ≈ 3,6:1 — poniżej WCAG AA. | CTA | Nowa paleta złota z kontrastem ≥ 4,5:1 dla tekstu |
| 9 | 2 | Wydajność: hero PNG 5000×2818 (1,6 MB), obrazy 1–3.png po ~1,5 MB. | hero, karuzela | Optymalizacja + WebP + `priority` tylko na hero |
| 10 | 2 | Brak OG/twitter meta, brak JSON-LD (LocalBusiness), meta opis z SZBL. | layout | Pełne metadane + schema.org |
| 11 | 1 | Klasy-widma: `text-darkNavy`, `bg-darkGold-light` nie istnieją w configu — style cicho nie działają. | nav, CTA | Tokeny w Tailwind config |
| 12 | 1 | `style={{ color: "#white" }}` — niepoprawny CSS. | AnimatedTagline | Poprawione |
| 13 | 1 | Favicon = zwykłe złote koło, nie znak marki. | favicon.svg | SVG z prawdziwym logo |
| 14 | 1 | Mapa bez `title` (a11y), stała wysokość 450 px na mobile. | contact | `title` + responsywna wysokość |
| 15 | 1 | „Untitled-1.js" — plik-śmieć w katalogu głównym (duplikat starej strony). | root | Do usunięcia przez właściciela |

## Co działa i zostaje

- Głos marki w rotatorze („ZAWSZE NA CZAS", „BEZ STRESU…") — konkretna, ludzka, zostaje (odświeżona).
- Zdjęcie złotego segregatora — świetny, brandowy motyw wraca jako element sekcji „O mnie".
- Opinie klientów — autentyczne, konkretne (PUP, jdg) — zostają po korekcie literówek.
- Certyfikat SKwP — najsilniejszy dowód zaufania, teraz z pozycją godną treści.
