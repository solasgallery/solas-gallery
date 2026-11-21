/**
 * THE SEASONAL BLOCK for the homepage (one file, swapped monthly).
 *
 * The homepage reads exactly three seasonal things from here: the hero image (and an
 * optional video loop later), one optional line-drawn motif, and one seasonal line.
 * Nothing else on the page changes with the season.
 *
 * Monthly refresh (Tim/Edna pick the image and line; Claude swaps them):
 *   1. Put the new photograph in public/images/season/ (real photo of the gallery or
 *      the work only: never stock, never generated). Landscape, about 2400px wide.
 *   2. Edit `season` below: key, heroImage.src + heroImage.alt, motif, line, lineHref,
 *      until (last day the motif + line show).
 *      Set motif to null and line to null for a month with no seasonal note.
 *   3. Optional video loop: set heroVideo to { mp4, webm?, poster } (files in
 *      public/video/). The poster should be the hero still. Leave null for a still.
 *
 * Motifs available: 'tree' | 'snowflake' (one small line drawing in ink, drawn once,
 * no animation). Language rules still apply to `line`: no prices, no urgency.
 */

export type SeasonMotif = 'tree' | 'snowflake' | null

export type SeasonHeroVideo = {
  mp4: string
  webm?: string
  /** Poster frame; defaults to heroImage.src. */
  poster?: string
} | null

export type Season = {
  /** e.g. 'december-2026'. For the record only; not shown. */
  key: string
  heroImage: { src: string; alt: string }
  heroVideo: SeasonHeroVideo
  motif: SeasonMotif
  /** One quiet line, shown once after the trio. null = no line. */
  line: string | null
  lineHref: string
  /** Last day (YYYY-MM-DD, Chicago) the motif + line show. After it they drop off at
   *  request time (the homepage revalidates hourly), so a missed swap never leaves a
   *  stale season up. The hero image stays until the file is edited. */
  until: string
}

/** The motif and line, or nulls once the season's `until` date has passed. */
export function activeSeasonNote(today: string): { motif: SeasonMotif; line: string | null } {
  if (today > season.until) return { motif: null, line: null }
  return { motif: season.motif, line: season.line }
}

// December 2026. No photograph of the gallery decorated for Christmas exists in the
// site assets (checked 2026-11-21), so the hero stays the gallery photograph and the
// motif + line carry the season.
export const season: Season = {
  key: 'december-2026',
  heroImage: {
    src: '/images/gallery/hero.jpg',
    alt: 'Framed portraits hung around a doorway and along a shelf in the Solas Gallery.',
  },
  heroVideo: null,
  motif: 'tree',
  line: 'For Christmas — art for their home begins with a design consult.',
  lineHref: '/portraits',
  until: '2026-12-25',
}
