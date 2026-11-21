import type { SeasonHeroVideo } from '@/content/season'

/** Widths pre-encoded by scripts/encode-season-hero.cjs (AVIF + WebP each, JPEG at 1080/1920). */
const WIDTHS = [640, 828, 1080, 1440, 1920]

const srcSet = (base: string, ext: string) => WIDTHS.map((w) => `${base}-${w}.${ext} ${w}w`).join(', ')

/**
 * Full-bleed homepage hero media. A still today; pass `video` later for a muted loop
 * (mp4/webm + poster). The still always renders underneath as the LCP image and the
 * fallback, so the video only paints over it once it plays. Reduced-motion visitors
 * never see the video (CSS hides it).
 *
 * The still is served pre-encoded from public/images/season/ (not through the
 * on-demand image optimizer), so a cold cache never slows the first paint.
 */
export default function HeroMedia({
  image,
  video = null,
}: {
  image: { base: string; alt: string }
  video?: SeasonHeroVideo
}) {
  return (
    <figure className="sg-hero-media">
      <picture>
        <source type="image/avif" srcSet={srcSet(image.base, 'avif')} sizes="100vw" />
        <source type="image/webp" srcSet={srcSet(image.base, 'webp')} sizes="100vw" />
        <img
          className="sg-hero-img"
          src={`${image.base}-1080.jpg`}
          srcSet={`${image.base}-1080.jpg 1080w, ${image.base}-1920.jpg 1920w`}
          sizes="100vw"
          alt={image.alt}
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      {video ? (
        <video
          className="sg-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={video.poster ?? `${image.base}-1920.jpg`}
          aria-hidden="true"
        >
          {video.webm ? <source src={video.webm} type="video/webm" /> : null}
          <source src={video.mp4} type="video/mp4" />
        </video>
      ) : null}
    </figure>
  )
}
