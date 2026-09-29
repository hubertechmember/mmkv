/** Generuje public/og.jpg (1200×630) — grafika share-owa: znak marki + złote akcenty. */
import sharp from "sharp";

const W = 1200;
const H = 630;

const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="30%" cy="20%" r="80%">
      <stop offset="0%" stop-color="#C9A24B" stop-opacity="0.22"/>
      <stop offset="60%" stop-color="#0B0A08" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="goldtext" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8F6E2F"/>
      <stop offset="0.45" stop-color="#E8C97A"/>
      <stop offset="0.75" stop-color="#C9A24B"/>
      <stop offset="1" stop-color="#8F6E2F"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#0B0A08"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <g stroke="#C9A24B" stroke-width="3" fill="none" opacity="0.85">
    <path d="M40 80 V52 a12 12 0 0 1 12-12 H80"/>
    <path d="${W - 40} 80 V52 a12 12 0 0 0 -12-12 H${W - 80}"/>
    <path d="M40 ${H - 80} V${H - 52} a12 12 0 0 0 12 12 H80"/>
    <path d="${W - 40} ${H - 80} V${H - 52} a12 12 0 0 1 -12 12 H${W - 80}"/>
  </g>

  <g font-family="Verdana, 'DejaVu Sans', sans-serif">
    <text x="96" y="245" fill="#A79C87" font-size="24" letter-spacing="10">BIURO RACHUNKOWE</text>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="92" y="338" fill="#F4EDDF" font-size="76" font-style="italic">Izabela Towpik</text>
    <text x="96" y="425" fill="url(#goldtext)" font-size="40" font-style="italic">Księgowość bez stresu. KSeF w standardzie.</text>
  </g>
  <g font-family="Verdana, 'DejaVu Sans', sans-serif">
    <text x="96" y="510" fill="#A79C87" font-size="24" letter-spacing="4">ZIELONA GÓRA · CERTYFIKAT SKwP</text>
  </g>

  <rect x="96" y="462" width="220" height="2" fill="#C9A24B" opacity="0.7"/>
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile("public/og.jpg");
console.log("og.jpg wygenerowany");

// apple-touch-icon 180px z logo
await sharp("public/logo.png").resize(180, 180).png().toFile("public/apple-touch-icon.png");
console.log("apple-touch-icon.png wygenerowany");
