// Regenera los GIF de portada desde los SVG estáticos. Requiere Node y sharp >= 0.34.3.
// Ejecutar desde el repositorio: node scripts/render-readme-motion.cjs
const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');

const artwork = path.resolve(__dirname, '../assets/branding/readme');
const frameDelayMs = 100;
const pulseDurationMs = 2000;
const breathingDurationMs = 4000;
const frameCount = breathingDurationMs / frameDelayMs;
const dataLine = 'M584 439 H730 C792 439 798 417 854 417 S928 439 996 439 H1468';

function pulseOverlay(compact, dark, frame) {
  const progress = ((frame * frameDelayMs) % pulseDurationMs) / pulseDurationMs;
  // El pulso se desvanece al salir de la línea antes de iniciar otro recorrido.
  const envelope = Math.sin(Math.PI * progress) ** 2;
  const color = dark ? '#FFE082' : '#B23A1A';
  const line = compact ? 'M280 570 H440' : dataLine;
  const trail = compact ? 22 : 90;
  const lineLength = compact ? 160 : 890;
  const startX = compact ? 280 : 584;
  const dots = compact ? [[308, 570], [360, 570], [412, 570]] : [[730, 439], [854, 417], [996, 439]];
  const markers = dots.map(([x, y]) => {
    const peak = (x - startX + trail) / (lineLength + 2 * trail);
    const opacity = envelope * Math.exp(-(((progress - peak) / .13) ** 2)) * .65;
    return `<circle cx="${x}" cy="${y}" r="${compact ? 4 : 6}" fill="${color}" opacity="${opacity.toFixed(4)}"/>`;
  }).join('');
  return `<g id="pulso-de-datos" aria-hidden="true"><path d="${line}" fill="none" stroke="${color}" stroke-width="${compact ? 4 : 3}" stroke-linecap="round" stroke-dasharray="${trail} 2000" stroke-dashoffset="${(trail - progress * (lineLength + 2 * trail)).toFixed(2)}" opacity="${(envelope * .55).toFixed(4)}"/>${markers}</g>`;
}

function breatheImagotype(source, compact, frame) {
  const phase = frame * frameDelayMs / breathingDurationMs;
  const scale = 1 + .008 * Math.sin(Math.PI * phase) ** 2;
  const [centerX, centerY] = compact ? [360, 207] : [788, 258];
  const transform = `translate(${centerX} ${centerY}) scale(${scale.toFixed(6)}) translate(${-centerX} ${-centerY})`;
  // Un solo grupo mantiene las proporciones entre el símbolo y el nombre.
  return source
    .replace(/<g\b(?=[^>]*\bid="isotipo")/, `<g id="respiracion-imagotipo" transform="${transform}"><g`)
    .replace(/<g\b(?=[^>]*\bid="eslogan")/, '</g><g');
}

async function renderVariant(compact, dark) {
  const variant = `${compact ? 'compact-' : ''}${dark ? 'dark' : 'light'}`;
  const width = compact ? 720 : 1600;
  const height = compact ? 600 : 520;
  const source = await fs.readFile(path.join(artwork, `hero-${variant}.svg`), 'utf8');
  const frames = [];
  for (let frame = 0; frame < frameCount; frame += 1) {
    const svg = breatheImagotype(source, compact, frame)
      .replace('</svg>', `${pulseOverlay(compact, dark, frame)}</svg>`);
    frames.push(await sharp(Buffer.from(svg)).ensureAlpha().raw().toBuffer());
  }
  const output = path.join(artwork, `hero-motion-${variant}.gif`);
  await sharp(Buffer.concat(frames), {
    raw: { width, height: height * frameCount, channels: 4, pageHeight: height },
  }).gif({ colours: 256, dither: 0, effort: 7, loop: 0,
    delay: Array(frameCount).fill(frameDelayMs), keepDuplicateFrames: true }).toFile(output);
  const metadata = await sharp(output, { animated: true }).metadata();
  const durationMs = metadata.delay.reduce((total, delay) => total + delay, 0);
  if (metadata.loop !== 0 || metadata.pages !== frameCount || durationMs !== breathingDurationMs) {
    throw new Error(`Duración o repetición inesperada en ${path.basename(output)}`);
  }
  return { file: path.basename(output), width, height, frames: metadata.pages,
    durationMs, iterations: metadata.loop, bytes: (await fs.stat(output)).size };
}

async function main() {
  const results = [];
  for (const compact of [false, true]) {
    for (const dark of [false, true]) results.push(await renderVariant(compact, dark));
  }
  console.log(JSON.stringify({ status: 'PASS', variants: results }, null, 2));
}

main().catch(error => { console.error(error.message); process.exitCode = 1; });
