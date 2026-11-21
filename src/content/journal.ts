/**
 * Solas Journal. Four craft articles, bylined Tim or Cherie Flanagan.
 *
 * DRAFTED FOR TIM/CHERIE TO READ BEFORE GO-LIVE (2026-11-21). Every factual claim is traced
 * in ~/ClaudeProjects/website-rebuild-2026-11/logs/fact-table-solas.md (live site, gallery
 * STATUS, OM, BRIEF, or a cited public source for general care and hanging guidance).
 * No client stories, statistics or sitting dates appear here: sittings are linked, never listed.
 */

export type Block =
  | { type: 'p'; text: string }
  | { type: 'lede'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }

export type Article = {
  slug: string
  /** Final <title>, 50-60 characters. */
  seoTitle: string
  /** H1. */
  title: string
  /** Meta description, 150-160 characters. */
  description: string
  author: 'Tim Flanagan' | 'Cherie Flanagan'
  /** ISO publish date. */
  published: string
  cta: { href: string; label: string }
  body: Block[]
}

export const articles: Article[] = [
  {
    slug: 'portrait-design-explained',
    seoTitle: 'Portrait Design Explained | Solas Journal, Salado, TX',
    title: 'Portrait design, explained',
    description:
      'Portrait design starts with your wall, not the camera. Tim Flanagan explains the Solas design consult, the sitting, the viewing and the finished display.',
    author: 'Tim Flanagan',
    published: '2026-11-21',
    cta: { href: '/portraits#consult', label: 'Book a design consult' },
    body: [
      { type: 'lede', text: 'We start with your wall, not the camera.' },
      {
        type: 'p',
        text: 'A portrait that hangs in your home has to live with its room: the light, the furniture, the colors, the distance from which you will see it every day. So the first conversation at Solas is not about the sitting. It is the design consult, free, online or in person, where we decide together where the portrait will hang, how large it should be, and whether it belongs in black and white or color.',
      },
      { type: 'h2', text: 'Four steps, in order' },
      {
        type: 'ul',
        items: [
          'The design consult. We design the portrait for your wall together: the room, the size, the finish.',
          'The sitting. The photo day itself, in the studio in Salado.',
          'The viewing. You see your images and choose the ones for your wall.',
          'The finished display. We finish your piece by hand in our studio, ready for your home.',
        ],
      },
      { type: 'h2', text: 'Why we settle size and finish first' },
      {
        type: 'p',
        text: 'Knowing where a portrait is going shapes everything that comes before the sitting: how much of a person we frame, how much quiet space we leave around them, and whether the finished work wants to be one large image or several smaller ones hung together. Decide afterward and you make do. Decide first and the portrait is made for the place it will hang.',
      },
      { type: 'h2', text: 'Black and white, or color' },
      {
        type: 'p',
        text: 'Black and white puts the attention on expression, form and light, and it tends to sit quietly in a room that already has a lot of color or pattern. Color carries the warmth of skin, clothing and setting, and it can anchor a room that is neutral. The right answer usually becomes obvious once you describe the wall it is meant for, which is why we ask about the room before anything else.',
      },
      { type: 'h2', text: 'What it costs' },
      {
        type: 'p',
        text: 'A design and creation fee reserves your design project and covers your sitting and the creation of your images. Finished pieces are priced separately, and you will see a firm price on your wall proof before anything is made. Current prices and sitting dates are always on our portrait design page.',
      },
    ],
  },
  {
    slug: 'commissioning-art-sizes-placement-cost',
    seoTitle: 'Commissioning Art: Size, Placement & Cost | Solas Gallery',
    title: 'Commissioning art: size, placement and cost',
    description:
      'How to size and place a commissioned piece for your home, what shapes the cost, and how a Solas commission moves from your wall to a finished, hung work.',
    author: 'Cherie Flanagan',
    published: '2026-11-21',
    cta: { href: '/begin', label: 'Start a commission' },
    body: [
      { type: 'lede', text: 'A commission should start with the room, not the canvas.' },
      {
        type: 'p',
        text: 'People often come to us with a piece in mind and no wall chosen. We would rather it went the other way around. When we know the wall, the size nearly decides itself.',
      },
      { type: 'h2', text: 'Start with the wall you have' },
      {
        type: 'ul',
        items: [
          'Measure the width and height of the wall, and of any furniture beneath the piece.',
          'Note where the light comes from, and where you will stand to look.',
          'Take a photograph straight on, from as far back as the room allows.',
        ],
      },
      { type: 'h2', text: 'Rules of thumb for size' },
      {
        type: 'p',
        text: 'Over a sofa, console or bed, designers usually suggest a single piece about half to three-quarters of the furniture width, with its lower edge roughly 7 to 10 inches above the furniture. On an open wall, the common advice is to go larger than you think. These are starting points only. A wall proof shows the piece on your actual wall, and that settles it.',
      },
      { type: 'h2', text: 'Height and light' },
      {
        type: 'p',
        text: 'Galleries and museums commonly hang work so the center sits about 57 inches from the floor, roughly eye level. Over furniture, the furniture sets the height instead. Keep work out of direct sun on any wall, in any season.',
      },
      { type: 'h2', text: 'What shapes the cost' },
      {
        type: 'p',
        text: 'Commissions at Solas begin at $1,500 and run to $10,000 and above. Studio originals, the pieces already on our floor, also begin at $1,500, and a piece resized and recolored for your room is priced by size.',
      },
      {
        type: 'p',
        text: 'You see the price before you commit. The wall proof comes with a firm price, and the proof fee is credited in full when you go ahead. Your approval locks the design and the price. Payment is half to begin and the balance at delivery.',
      },
      { type: 'h2', text: 'Framing and hanging' },
      {
        type: 'p',
        text: 'Frame and piece are chosen together, for the work and the room. Then it is delivered and hung on your wall.',
      },
    ],
  },
  {
    slug: 'what-is-a-design-proof',
    seoTitle: 'What Is a Design Proof? | Solas Gallery Journal, Salado',
    title: 'What is a design proof?',
    description:
      'A design proof shows your piece on a photograph of your own wall, with a firm price, before anything is made. Tim Flanagan explains how it works and the cost.',
    author: 'Tim Flanagan',
    published: '2026-11-21',
    cta: { href: '/begin', label: 'Ask about a wall proof' },
    body: [
      { type: 'lede', text: 'A design proof shows you the piece on your wall before it is made.' },
      {
        type: 'p',
        text: 'It is the simplest part of our process to describe. We place the proposed piece on a photograph of your own wall and show you the result with a firm price. You decide by looking, not by imagining.',
      },
      { type: 'h2', text: 'What a proof settles' },
      {
        type: 'ul',
        items: [
          'Size: whether the piece is too large, too small, or exactly right for the wall.',
          'Color and tone: how the work sits against your paint, furniture and light.',
          'Placement: its height, and how it relates to anything hung nearby.',
          'Price: a firm figure, set before anything is made.',
        ],
      },
      { type: 'h2', text: 'What to bring' },
      {
        type: 'p',
        text: 'A straight-on photograph of the wall, its measurements, and whatever you are working from: a photograph, a color you love, or an idea you cannot describe yet. The design consult is where we sort out the rest, and it is free, online or in person.',
      },
      { type: 'h2', text: 'Timing and cost' },
      {
        type: 'p',
        text: 'A proof is ready within five business days. It costs $195, and that fee is credited in full when you go ahead. If you decide not to go ahead, the proof fee is not refunded. A first revision is included.',
      },
      { type: 'h2', text: 'After you approve' },
      {
        type: 'p',
        text: 'Your approval locks the design and the price. Then the piece is made and finished by hand in our studio, framed, and hung on your wall.',
      },
    ],
  },
  {
    slug: 'caring-for-canvas-in-texas-heat',
    seoTitle: 'Caring for Canvas Art in Texas Heat | Solas Gallery Journal',
    title: 'Caring for canvas in Texas heat',
    description:
      'Practical advice from Cherie Flanagan on hanging, cleaning and protecting canvas art in Texas: sun, heat, humidity, dust, and where never to store a piece.',
    author: 'Cherie Flanagan',
    published: '2026-11-21',
    cta: { href: '/visit', label: 'Visit the gallery' },
    body: [
      { type: 'lede', text: 'Canvas is sturdy, but it does not love a Texas summer.' },
      {
        type: 'p',
        text: 'Our work is archival pigment on canvas, finished by hand. It is made to last, and a few habits help it last longer in a hot, bright climate. These are general rules for caring for any canvas.',
      },
      { type: 'h2', text: 'Keep it out of direct sun' },
      {
        type: 'p',
        text: 'Direct sunlight fades pigments, and light damage cannot be reversed. Choose a wall that never gets direct sun, remembering that the angle of the sun moves with the seasons. Bright, indirect light is fine.',
      },
      { type: 'h2', text: 'Watch heat and humidity swings' },
      {
        type: 'ul',
        items: [
          'Do not hang a piece above a fireplace or near a heater or air-conditioning vent.',
          'Avoid kitchens, where cooking oils settle on the surface, and steamy bathrooms.',
          'Keep the house steady, including when you are away. Canvas slackens in humid weather and tightens in dry weather, and big swings stress it.',
          'Conservators commonly suggest a relative humidity between 40 and 60 percent.',
        ],
      },
      { type: 'h2', text: 'Never store it in an attic, garage or car' },
      {
        type: 'p',
        text: 'These spaces swing between extremes of heat and humidity, and heat speeds up the aging of paint and canvas. If a piece must be stored, keep it inside the house, in a room that stays steady.',
      },
      { type: 'h2', text: 'Dusting and cleaning' },
      {
        type: 'p',
        text: 'Every few months, dust lightly with a wide, soft, dry brush, never a cloth. Do not use water, liquid cleaners or household sprays on a canvas surface. If something spills or marks the work, leave it alone and call us.',
      },
      { type: 'h2', text: 'Choose an inside wall' },
      {
        type: 'p',
        text: 'Where you can, hang canvas on an inside wall of the house; outside walls run cooler and damper unless they are well insulated. If your piece is framed under glass, ask us about UV-filtering glazing when we frame it.',
      },
      {
        type: 'p',
        text: 'Questions about a piece you already own? Call us at (254) 947-1881 or stop by the gallery.',
      },
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
