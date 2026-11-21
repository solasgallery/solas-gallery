import Image from 'next/image'
import type { SeasonHeroVideo } from '@/content/season'

/**
 * Full-bleed homepage hero media. A still today; pass `video` later for a muted loop
 * (mp4/webm + poster). The still always renders underneath as the LCP image and the
 * fallback, so the video only paints over it once it plays. Reduced-motion visitors
 * never see the video (CSS hides it).
 */
export default function HeroMedia({
  image,
  video = null,
}: {
  image: { src: string; alt: string }
  video?: SeasonHeroVideo
}) {
  return (
    <figure className="sg-hero-media">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        priority
        style={{ objectFit: 'cover' }}
      />
      {video ? (
        <video
          className="sg-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={video.poster ?? image.src}
          aria-hidden="true"
        >
          {video.webm ? <source src={video.webm} type="video/webm" /> : null}
          <source src={video.mp4} type="video/mp4" />
        </video>
      ) : null}
    </figure>
  )
}
