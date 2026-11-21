// Pre-encodes the homepage seasonal hero so the LCP image never waits on the
// on-demand image optimizer (a cold optimizer cost ~0.6 s of LCP; quiet-pass audit).
//
//   npm i --no-save sharp
//   node scripts/encode-season-hero.cjs <source.jpg> <name>
//
// Writes public/images/season/<name>-<w>.{avif,webp} for every width below, plus
// <name>-1080.jpg and <name>-1920.jpg (fallback + video poster). Then set
// season.heroImage = { base: '/images/season/<name>', alt } in src/content/season.ts.
const path = require('path')
const sharp = require('sharp')

const WIDTHS = [640, 828, 1080, 1440, 1920]
const JPEG_WIDTHS = [1080, 1920]

async function main() {
  const [src, name] = process.argv.slice(2)
  if (!src || !name) throw new Error('usage: node scripts/encode-season-hero.cjs <source.jpg> <name>')
  const out = path.join(__dirname, '..', 'public', 'images', 'season')
  for (const w of WIDTHS) {
    const img = () => sharp(src).rotate().resize({ width: w, withoutEnlargement: true })
    await img().avif({ quality: 50, effort: 6 }).toFile(path.join(out, `${name}-${w}.avif`))
    await img().webp({ quality: 72 }).toFile(path.join(out, `${name}-${w}.webp`))
    if (JPEG_WIDTHS.includes(w)) {
      await img().jpeg({ quality: 78, mozjpeg: true, progressive: true }).toFile(path.join(out, `${name}-${w}.jpg`))
    }
  }
  console.log('done', name)
}
main().catch((e) => { console.error(e); process.exit(1) })
