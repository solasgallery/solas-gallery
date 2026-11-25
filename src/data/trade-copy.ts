/**
 * The locked trade one-pager ("Framing Trade Program — Salado Village Framer.pdf", Nov 2026), verbatim,
 * mirrored from the Framer site's /trade (saladovillageframer.com, src/data/trade-copy.ts).
 * Two PDF-extraction artifacts are corrected there and here: "HOW I T WORKS" → "HOW IT WORKS" and
 * "already- discounted" (a line-break hyphen) → "already-discounted".
 * Solas-side swaps (ledgered in MESSAGE_AUDIT.md), nothing else changed:
 *  - kicker: "Salado Village Framer" → "Solas Gallery";
 *  - joint line: "at Solas Gallery" → "at Salado Village Framer", and the clause naming what the other
 *    business offers, "trade pricing on original art", → "trade pricing on custom framing" (the one-pager's
 *    own lede phrase), so the line stays true about the Framer.
 * Tim's decision (Nov 25): Solas offers trade pricing on original art under the trade program, at the
 * matched tiers. So, on this page only: the plain `art` statement is added and the tiers heading drops
 * "framing".
 * Edna's review (Nov 25): title "Trade Program" and her subtitle; spend counted separately (framing →
 * Framer tier, original art → Solas tier, each on its own rolling 12 months); tiers shown with pricing
 * only (the perks belong to the framing program); no one-pager PDF link (it never mentions art).
 * Every changed passage is ledgered in MESSAGE_AUDIT.md. Do not reword further; change the one-pager first.
 */
export const tradeCopy = {
  kicker: "Solas Gallery · To the trade",
  title: "Trade Program",
  lede: "Trade pricing on original art and custom framing, for designers and the trade.",
  /** Tim's decision, Nov 25: the plain statement that the tiers apply to original art at Solas. */
  art: "At Solas Gallery, the trade tiers apply to original art purchases: Trade 10%, Trade Plus 15% and Trade Premier 20% off, at $2,500+, $7,500+ and $15,000+ a year, rolling 12 months.",
  whoQualifies: {
    h: "Who qualifies",
    p: "Active, registered interior designers framing for client projects — business license or ASID / IDS membership. Annual renewal. Trade pricing is for client work — not personal use, not resale at retail.",
  },
  tiers: {
    h: "Tiers — annual spend",
    cols: ["Tier", "Minimum / year", "Discount"],
    rows: [
      ["Trade", "$2,500+", "10% off"],
      ["Trade Plus", "$7,500+", "15% off"],
      ["Trade Premier", "$15,000+", "20% off"],
    ],
    note: "Your year runs rolling 12 months from enrollment; your tier is reviewed at renewal. Framing spend — custom framing orders (materials + labor) — counts toward your Salado Village Framer tier; original-art spend counts toward your Solas Gallery tier, each on its own rolling 12 months.",
  },
  covers: {
    h: "What the discount covers",
    p: "Custom framing — materials and labor. Excludes retail gifts, rush fees (except Premier), delivery fees (except Plus / Premier), and already-discounted items. At Solas Gallery, the discount covers original art purchases.",
  },
  howItWorks: {
    h: "How it works",
    steps: [
      ["Register", "email trade@solasgallery.com with your business name and credentials. We open your trade account and confirm your tier from your expected volume."],
      ["Frame for your clients", "spend accrues toward your tier all year."],
    ],
    joint:
      "One enrollment, both programs. Enrolling here also enrolls you at Salado Village Framer — trade pricing on custom framing for your projects — and designers who enroll there are enrolled here. One registration covers both.",
  },
  local: {
    h: "Local, by nature",
    p: "Pickup in Salado, or delivery within 30 miles. Glass doesn’t ship. Payment due at pickup; Premier tier may request Net 15 terms.",
  },
  email: "trade@solasgallery.com",
  /** Tim's CTA number for the trade program (Nov 25), the same line as the Framer page. */
  phoneDisplay: "(254) 613-6123",
  phoneTel: "+12546136123",
} as const
