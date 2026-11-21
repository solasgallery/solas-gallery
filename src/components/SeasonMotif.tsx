import type { SeasonMotif as Motif } from '@/content/season'

/**
 * One small line drawing for the seasonal block, in the site's hairline style
 * (1px ink stroke, no fill, no animation). Decorative: hidden from screen readers.
 */
export default function SeasonMotif({ motif }: { motif: Motif }) {
  if (!motif) return null
  return (
    <svg
      className="sg-motif"
      viewBox="0 0 32 40"
      width="32"
      height="40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {motif === 'tree' ? (
        <>
          <path d="M16 3.5 9.5 13h4L7.5 22.5h4.5L5.5 33h21L20 22.5h4.5L18.5 13h4Z" />
          <path d="M16 33v4" />
        </>
      ) : (
        <>
          <path d="M16 6v28M4 20h24M7.5 11.5l17 17M24.5 11.5l-17 17" />
          <path d="M13 8.5l3 3 3-3M13 31.5l3-3 3 3M6.5 17l3 3-3 3M25.5 17l-3 3 3 3" />
        </>
      )}
    </svg>
  )
}
