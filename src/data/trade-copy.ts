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
 * Do not reword; change the one-pager first.
 */
export const tradeCopy = {
  kicker: "Solas Gallery · To the trade",
  title: "Framing Trade Program",
  lede: "Trade pricing on custom framing, for the designers who frame for their clients.",
  whoQualifies: {
    h: "Who qualifies",
    p: "Active, registered interior designers framing for client projects — business license or ASID / IDS membership. Annual renewal. Trade pricing is for client work — not personal use, not resale at retail.",
  },
  tiers: {
    h: "Tiers — annual framing spend",
    cols: ["Tier", "Minimum / year", "Discount", "Perks"],
    rows: [
      ["Trade", "$2,500+", "10% off", "Trade pricing + a dedicated point of contact"],
      ["Trade Plus", "$7,500+", "15% off", "All Trade perks + free local delivery & pickup (30 mi) + priority scheduling"],
      ["Trade Premier", "$15,000+", "20% off", "All Plus perks + priority rush at no extra fee + first look at new moulding lines"],
    ],
    note: "Your year runs rolling 12 months from enrollment; your tier is reviewed at renewal. Spend counts custom framing orders (materials + labor).",
  },
  covers: {
    h: "What the discount covers",
    p: "Custom framing — materials and labor. Excludes retail gifts, rush fees (except Premier), delivery fees (except Plus / Premier), and already-discounted items.",
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
  pdf: "/trade/framing-trade-program.pdf",
} as const
