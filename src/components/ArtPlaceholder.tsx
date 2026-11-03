type Ratio = '16:9' | '4:5' | '1:1'

const ratioClass: Record<Ratio, string> = {
  '16:9': 'sg-ph--wide',
  '4:5': 'sg-ph--portrait',
  '1:1': 'sg-ph--square',
}

/**
 * Stand-in for real artwork photography. Renders at the exact aspect ratio
 * the final image needs, labeled with its art direction so Tim knows what to
 * shoot. Every instance is listed in PLACEHOLDERS.md.
 *
 * Swap for <img loading="lazy" ... /> (or next/image) with the same alt.
 */
export default function ArtPlaceholder({
  ratio,
  id,
  direction,
  alt,
  tone = 'light',
}: {
  ratio: Ratio
  /** Matches the row in PLACEHOLDERS.md, e.g. "IMG-01". */
  id: string
  /** Art direction for the real photograph. */
  direction: string
  /** Alt text the real image should carry. */
  alt: string
  tone?: 'light' | 'dark'
}) {
  return (
    <figure
      className={`sg-ph ${ratioClass[ratio]} sg-ph--${tone}`}
      role="img"
      aria-label={alt}
      data-placeholder={id}
    >
      <svg className="sg-ph-frame" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <rect x="6" y="6" width="88" height="88" fill="none" vectorEffect="non-scaling-stroke" />
      </svg>
      <figcaption aria-hidden="true">
        <span>
          {id} · {ratio}
        </span>
        {direction}
      </figcaption>
    </figure>
  )
}
