/**
 * Wektoryzacja logo.png -> public/logo.svg
 * Klasyfikuje piksele RGB na 3 warstwy (tło / złoto / biel),
 * buduje czarne maski i trace'uje każdą osobno potrace'em.
 */
import potrace from "potrace";
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("public/logo.png");
const OUT = path.resolve("public/logo.svg");
const SIZE = 1024;

const { data, info } = await sharp(SRC)
  .resize(SIZE, SIZE, { fit: "fill" })
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const W = info.width;
const H = info.height;

const masks = {
  gold: Buffer.alloc(W * H, 255), // 0 = kształt (czarny dla potrace)
  white: Buffer.alloc(W * H, 255),
  bg: Buffer.alloc(W * H, 255),
};

for (let i = 0; i < W * H; i++) {
  const r = data[i * 3];
  const g = data[i * 3 + 1];
  const b = data[i * 3 + 2];
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  const isWhite = r > 190 && g > 190 && b > 190;
  const isGold = !isWhite && r > 110 && r - b > 45 && g > 70 && g < b + 90;
  if (isWhite) masks.white[i] = 0;
  else if (isGold) masks.gold[i] = 0;
  else masks.bg[i] = 0; // ciemne tło + antyaliasing
}

const toPng = (mask) =>
  sharp(mask, { raw: { width: W, height: H, channels: 1 } }).png().toBuffer();

const traceMask = async (mask, turd) => {
  const png = await toPng(mask);
  return new Promise((resolve, reject) =>
    potrace.trace(
      png,
      { threshold: 128, turdSize: turd, optTolerance: 0.35, alphaMax: 0.8 },
      (err, svg) => (err ? reject(err) : resolve(svg))
    )
  );
};

const roundNums = (d) => d.replace(/-?\d+\.\d+/g, (n) => Number(n).toFixed(1));
const extractPath = (svg) =>
  [...svg.matchAll(/d="([^"]+)"/g)].map((m) => roundNums(m[1].trim())).join(" ");

const [bgSvg, goldSvg, whiteSvg] = await Promise.all([
  traceMask(masks.bg, 400),
  traceMask(masks.gold, 60),
  traceMask(masks.white, 40),
]);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Logo: Biuro Rachunkowe Izabela Towpik">
  <path fill="#0B0A08" d="${extractPath(bgSvg)}"/>
  <path fill="#C9A24B" d="${extractPath(goldSvg)}"/>
  <path fill="#F4EDDF" d="${extractPath(whiteSvg)}"/>
</svg>
`;
await fs.writeFile(OUT, svg);
console.log(`logo.svg: ${((await fs.stat(OUT)).size / 1024).toFixed(1)} kB`);
