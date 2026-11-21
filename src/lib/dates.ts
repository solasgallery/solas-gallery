/**
 * ONE dates config for solasgallery.com (rebuild 2026-11).
 *
 * Every dated element on the site (announcement bar, homepage sittings, the
 * /portraits date list, the consult form's day options, schema) reads from here.
 * Past sittings are filtered at REQUEST time (pages revalidate hourly), so
 * nothing needs a rebuild to expire. Timezone: America/Chicago.
 *
 * To add or change sittings: edit SITTING_DATES only.
 */

export const TIMEZONE = 'America/Chicago'

/** ISO dates (YYYY-MM-DD) of portrait sitting days, in order. */
export const SITTING_DATES: readonly string[] = ['2026-11-27', '2026-12-01', '2026-12-19']

/** Cap on portrait design projects across all sittings in this run. */
export const SITTING_CAP = 20

/** Square link used to reserve a sitting. */
export const RESERVE_URL = 'https://square.link/u/oSv7DeW7'

/** Optional per-day terms keyed by ISO date (kept from the live site's standing rules). */
export const SITTING_NOTES: Record<string, string> = {
  '2026-11-27': '$750 minimum order.',
}

/** Pages that show dates re-render at least this often (seconds). */
export const DATE_REVALIDATE_SECONDS = 3600

export type Sitting = {
  iso: string
  /** "Friday, November 27" */
  long: string
  /** "November 27" */
  monthDay: string
  /** "Nov 27" */
  short: string
  note?: string
}

/** Today's date in Chicago as YYYY-MM-DD. */
export function todayInChicago(now: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now)
}

function describe(iso: string): Sitting {
  // Noon UTC avoids any day-boundary drift when formatting a calendar date.
  const d = new Date(`${iso}T12:00:00Z`)
  const f = (opts: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', ...opts }).format(d)
  return {
    iso,
    long: f({ weekday: 'long', month: 'long', day: 'numeric' }),
    monthDay: f({ month: 'long', day: 'numeric' }),
    short: f({ month: 'short', day: 'numeric' }),
    note: SITTING_NOTES[iso],
  }
}

/** Sittings that are today or later (Chicago). Past days drop off on their own. */
export function upcomingSittings(now: Date = new Date()): Sitting[] {
  const today = todayInChicago(now)
  return SITTING_DATES.filter((iso) => iso >= today).map(describe)
}

/** "November 27 · December 1 · December 19" */
export function sittingsLine(sittings: Sitting[], style: 'monthDay' | 'short' = 'monthDay'): string {
  return sittings.map((s) => s[style]).join(' · ')
}
