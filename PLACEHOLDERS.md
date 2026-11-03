# Placeholders — makeover-nov-2026

Every invented or unverified item on the site. Each one is also tagged in the source with a
`PLACEHOLDER (ID)` comment. Search the repo for the ID to find it:

```bash
grep -rn "PLACEHOLDER" src
```

Image placeholders render as cream boxes at the exact final aspect ratio, labeled on-page with their
ID and art direction (`src/components/ArtPlaceholder.tsx`). To swap one in, replace the
`<ArtPlaceholder … />` with `<img src="…" alt="(same alt)" loading="lazy" />` (or `next/image`),
crop to the listed ratio, and keep the alt text.

> Note: the source is TSX, so markers are JSX comments (`{/* PLACEHOLDER … */}`), not literal
> `<!-- -->` HTML comments. In the rendered page, image slots carry `data-placeholder="IMG-xx"`.

## Needs Tim's photo

| ID | Where | Ratio | Art direction | Alt text (keep) |
|---|---|---|---|---|
| IMG-01 | Home · hero | 16:9 | Large abstract canvas on the gallery wall, warm late-afternoon light, no people | A large abstract canvas hanging on the Solas Gallery wall in warm afternoon light. |
| IMG-02 | Home · Made by hand | 4:5 | Hands finishing a canvas surface with brush and medium, natural window light | Hands finishing the surface of a canvas with a brush in the Solas studio. |
| IMG-03 | Home · From your image | 4:5 | A family photograph beside the finished canvas it became, on the studio table | A client photograph on the studio table beside the finished one-of-one canvas made from it. |
| IMG-04 | Home · Studio originals (commission path) | 4:5 | Textured abstract canvas, raking side light showing the hand-finished surface | A textured abstract studio original in side light, showing its hand-finished surface. |
| IMG-05 | Home · Sized & colored for you | 4:5 | The same composition in two palettes, hung in a living room | One studio composition shown in two palettes, each sized for a different wall. |
| IMG-06 | Home · Studio originals / Editions | 1:1 | Square abstract, earth palette, straight on, gallery wall | A square abstract studio original in an earth palette. |
| IMG-07 | Home · Studio originals / Editions | 1:1 | Solas Edition detail: hand embellishment (brush and leaf on the canvas surface) | Close detail of hand embellishment on a Solas Edition canvas. |
| IMG-08 | Home · Studio originals / Editions | 1:1 | A re-imagined landscape, hung above a console, soft daylight | A re-imagined landscape studio original hung above a console table. |

Not a placeholder, but worth replacing: the **/art** hero (`/solas/art.jpg`) is the old photo of metallic
wall objects. It doesn't say "canvas, one of one". A studio original on the wall would serve better.

## Needs Tim's words

| ID | Where | What I wrote | Replace with |
|---|---|---|---|
| W-01 | Home · Meet Art | Five story fragments ("No one remembers Art arriving…", "Some say Art came in with the creek…") plus one plain line | The real Art mythology, in fragments. Keep the one plain sentence for newcomers. |
| W-02 | Home · hero | Plain sentence taken from the brief, as written | Confirm or tune. |
| W-03 | Home · Sessions intro | "A short portrait sitting in the gallery, finished by hand as a one-of-one piece for your wall. Three days this November, then the book closes." | Confirm the framing (a sitting, not a photo shoot). |
| W-04 | Home · session day cards | "Your sitting and one finished 11×14 portrait, archival pigment, hand-finished." The brief said "fine-art print", and "print" is banned in client copy, so I reworded it. | Confirm the wording for what the client takes home. |
| W-05 | Home · Made by hand | Names Photoshop and AI as design-stage tools, then lists "mixed media, archival pigment on canvas, hand-finished surfaces" | Confirm the tools named and the materials list. |
| W-06 | Home · For interior designers | Quiet paragraph, "designer preview evening is planned for this winter" | Tune to the trade program as it actually runs. |
| W-07 | Home · events | One line each. Socrates described as "A book club for the questions that matter". | Confirm the descriptions match HUBSalado listings. |
| W-08 | /story | Changed "I still print in-house" to "Every piece is still finished by hand in our studio". The rest of Tim's story is untouched and still carries its original "TIM: replace" note. | Tim's own voice. |
| W-09 | Waitlist form | "You are on the list. Waitlist invitations go out before public booking opens." | Confirm. |

## Needs Tim's facts

| ID | Where | Assumption on the page | Confirm |
|---|---|---|---|
| F-01 | Home · Visit, /visit, JSON-LD | Hours **Tue–Sat 10 am–5 pm, and by appointment** (brief default; already in the site's JSON-LD) | Real hours. Edit `hours` in `src/lib/site.ts` and `openingHoursSpecification` in `src/app/layout.tsx`. |
| F-02 | Home · Nov 27 card | "$95 deposit to reserve. $295 session fee at your session" plus a $750 minimum order; "Our most unhurried sitting of the season" | Is the $95 deposit part of the $295 fee, or on top of it? What does the premium day actually include? |
| F-03 | Home · events | Christmas market listed as "Early December", alongside the Stroll (Dec 11–13) | Exact market dates. |
| F-04 | Home · waitlist form | Posts to the existing `/api/inquiry` (Brevo contact plus notification email) with source "Limited Edition Sessions waitlist". It goes to the **default Brevo list** (`BREVO_LIST_ID` or list 2), the same list as general inquiries. | A dedicated Brevo list ID, if wanted. On **Thu Nov 5, 6 AM**, swap the form for the real booking links. |
| F-05 | Home · session cards | Shows "About ten sittings · twenty minutes each" (capacity, not seats remaining) | Fine to state publicly? Delete the `sg-day-meta` line if not. |
| F-06 | Home · trade CTA | Links to the existing `/trade` static page (`public/trade/index.html`) | That the trade pages are still current. |
| F-07 | Home · Killarney | "Two shows on the Lamplighter stage" | The venue line. |
| F-08 | Home · Nov 21 card | Saturday ($390) assumed to include the same 11×14 as Tuesday | Saturday inclusions. |
