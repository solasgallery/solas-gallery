/**
 * Verified Google reviews for Solas Gallery. REAL REVIEWS ONLY.
 *
 * Source of truth: ~/ClaudeProjects/website-rebuild-2026-11/REVIEWS_VERIFIED.md
 * Add an entry only after it appears there. First name only (no town is verified for any
 * reviewer). Google-truncated reviews end with an ellipsis. Never write or paraphrase a review.
 * While this list is empty the Reviews section renders nothing.
 */
export type Review = {
  /** First name only. */
  firstName: string
  /** Town, only if verified. */
  town?: string
  /** The reviewer's own words, verbatim. */
  text: string
  /** Star rating as shown on Google, 1-5. */
  rating?: number
}

export const reviews: Review[] = [
  {
    firstName: 'Lezlie',
    text: 'Everyone I\u2019ve had contact with is very friendly and genuinely interested in their customers and even the \u201cI\u2019m just browsing\u201d people. Tim is a wonderful photographer and captures beautiful pictures of people, even\u2026',
    rating: 5,
  },
  {
    firstName: 'Christy',
    text: 'What a great experience! Tim and Cherie made the session easy and fun. They even came through when we found out we were missing an article of clothing. I highly recommend this studio.',
    rating: 5,
  },
  {
    firstName: 'Douglas',
    text: 'Super nice people, they helped me pick out the exact frame I wanted and are making a dream come true!',
    rating: 5,
  },
  {
    firstName: 'Adam',
    text: 'What wonderful people and great artwork.',
    rating: 5,
  },
]

/** Public Google reviews link for the gallery (set when verified). */
export const reviewsUrl: string | undefined =
  'https://www.google.com/maps/place/Solas+Gallery/@30.9482421,-97.536423,17z/data=!3m1!4b1!4m6!3m5!1s0x86453be326e5c787:0xd8e78f1e59f3a36c!8m2!3d30.9482421!4d-97.536423!16s%2Fg%2F1tgpnf01'
