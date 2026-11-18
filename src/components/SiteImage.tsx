import Image from 'next/image'

type Ratio = '16:9' | '4:5' | '1:1'

const ratioClass: Record<Ratio, string> = {
  '16:9': 'sg-ph--wide',
  '4:5': 'sg-ph--portrait',
  '1:1': 'sg-ph--square',
}

/**
 * An existing site photograph in the same frame the ArtPlaceholder used:
 * same aspect ratio, same background while loading, cropped to fill.
 */
export default function SiteImage({
  ratio,
  src,
  alt,
  sizes,
  priority = false,
}: {
  ratio: Ratio
  src: string
  alt: string
  sizes: string
  priority?: boolean
}) {
  return (
    <figure className={`sg-ph ${ratioClass[ratio]}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: 'cover' }} />
    </figure>
  )
}
