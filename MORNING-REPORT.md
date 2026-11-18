# Morning report — solasgallery.com makeover (2026-11-02, overnight)

## 1. The deliverable

- **Pull request:** https://github.com/solasgallery/solas-gallery/pull/8 (`makeover-nov-2026` → `main`). **Not merged. Merging deploys to production.**
- **Vercel preview:** https://solas-gallery-git-makeover-nov-2026-solasgallerys-projects.vercel.app
  - This is the branch's stable link, so it always shows the latest push.
  - It is behind Vercel's login. Sign in as the solasgallery Vercel account to view it.
- **Rollback point:** tag `pre-makeover-2026-11-02` on `main` (pushed to GitHub).
- **Build:** passes on Vercel and locally (`next build`, all 27 routes).
- **Checked:** the homepage at phone width (375px, no horizontal scroll) and desktop (1440px); the mobile menu; `/art`, `/story`, `/visit`.

### Repo state found

- `solasgallery/solas-gallery`, default branch `main`.
- The local checkout at `~/code/solas-gallery` was an empty stub with no commits. I moved it to `~/code/solas-gallery.stale-empty`, without deleting it, and cloned fresh.
- The `gallery/STATUS.md` code path (`B-Revenue/...`) is out of date. The code lives in GitHub, cloned to `~/code/solas-gallery`.

## 2. What changed

| File | What |
|---|---|
| `src/app/page.tsx` | Homepage rebuilt in the brief's order: hero → #sessions → three ways to own the only one → how a commission works → studio originals / Solas Editions → Meet Art → made by hand → Nov & Dec at the gallery → interior designers → visit and map |
| `src/app/makeover.css` | New file. Mobile-first styles for the homepage, announcement bar, header CTA, image placeholders and forms. |
| `src/app/globals.css` | Tokens retuned: cream `#F7F3EC` ground, black UI, gold accents turned black, body text in a sans, small labels enlarged to 11px, focus outlines added. The render-blocking font `@import` is gone. |
| `src/app/layout.tsx` | Fonts now load from a preconnected Google Fonts `<link>`. The makeover CSS is imported. Metadata is unchanged. |
| `src/components/Nav.tsx` | Announcement bar on every page. New nav: Commissions · Studio Originals · Sessions · Our Story · Events (goes to hubsalado.com) · Visit, plus a "Book a Session" button. Logo shown in black. |
| `src/components/Footer.tsx` | Footer keeps the name/address/phone line and the Village Framer and HUBSalado links, and adds a copyright line. |
| `src/components/ArtPlaceholder.tsx` | New file. Labeled CSS/SVG image placeholders at 16:9, 4:5 and 1:1, each with alt text. |
| `src/components/WaitlistForm.tsx` | New file. Sessions waitlist form: name, email, phone, finish (B&W/color), preferred day. It posts to the existing `/api/inquiry`. |
| `src/lib/site.ts` | New nav data, a `HUB_URL` constant, the hours placeholder marker, and a site description that leads with "Art gallery in Salado, Texas". |
| `src/app/art/page.tsx` | Removed "print", "printed" and "pigment print" from the copy. CTAs now point to commissions and sessions. |
| `src/app/story/page.tsx` | "I still print in-house" became "finished by hand in our studio". The hero video, which was a 404, is now a still image. |
| `src/app/area/georgetown/page.tsx` | Meta description: "fine art prints" became "one-of-one studio original art". |
| `tailwind.config.ts` | Palette aligned to the new tokens. Stone is now a neutral gray instead of tan. |
| `PLACEHOLDERS.md` | Every placeholder, with an ID that matches the comments in the source. |

## 3. Placeholders (full detail in `PLACEHOLDERS.md`)

**Needs Tim's photo:** IMG-01 (hero, 16:9) · IMG-02 (studio hands, 4:5) · IMG-03/04/05 (the three commission paths, 4:5) · IMG-06/07/08 (studio originals / Editions, 1:1). The `/art` hero photo of metallic objects should also be replaced with a canvas.

**Needs Tim's words:**
- W-01: Meet Art mythology.
- W-02: hero plain sentence.
- W-03: sessions framing.
- W-04: the 11×14 wording, which replaces "fine-art print" because "print" is banned.
- W-05: made-by-hand copy.
- W-06: designer paragraph.
- W-07: event one-liners.
- W-08: the story-page line.
- W-09: waitlist thank-you.

**Needs Tim's facts:**
- F-01: hours (Tue–Sat 10–5).
- F-02: Nov 27. Is the deposit part of the $295 or on top of it, and what is included?
- F-03: Christmas market dates.
- F-04: waitlist Brevo list, and the booking links on Nov 5.
- F-05: is it OK to show "about ten sittings, twenty minutes"?
- F-06: are the `/trade` pages current?
- F-07: Killarney venue line.
- F-08: Saturday inclusions.

## 4. Assumptions

- **"Fine-art print" from the brief.** It conflicts with the ban on "print", so the cards say "one finished 11×14 portrait, archival pigment, hand-finished."
- **Nov 27 card.** It reads "$95 deposit to reserve. $295 session fee at your session," with a $750 minimum order. I treated the deposit as separate from the fee. **Please check this; it's the riskiest call.**
- **Scarcity wording.** "Days fill from the waitlist first; when a day is full, it is full." It shows no counts of what's left. The cards do state capacity ("about ten sittings"), and you can remove that line.
- **Nav.** Commissions, Studio Originals and Sessions jump to sections on the homepage (`/#…`), because those routes don't exist and the brief said not to change routes. Events goes to hubsalado.com.
- **Trade CTA.** It links to the existing `/trade` page. "Designer preview evening… this winter" has no date, as briefed.
- **Homepage `<title>`.** Untouched. The meta and OG description now open with "Art gallery in Salado, Texas…" (the old one said "portrait studio").
- **Hours.** Tue–Sat 10–5, which matches the JSON-LD already on the site.
- **Fonts.** Cormorant Garamond (italic headings) and Jost (body) were already on the site. `next/font` was tried first, but it failed on Vercel's build machine, so the fonts load from a preconnected Google Fonts `<link>` with `display=swap`.
- **Brevo.** The waitlist goes to the default Brevo list, with source "Limited Edition Sessions waitlist". **I did not submit a test entry**, because that would create a real Brevo contact. Please send one test entry from the preview.
- **Color.** The one dark band on the homepage is Meet Art, in black. The map is shown in grayscale so it adds no color.

## 5. What I chose not to touch, and why

- **The portrait pages** (`/portraits`, `/portraits/headshots`, `/portraits/babyfaces`, `/real-portrait`), plus `/gather`, `/folio`, `/events/venue-rental`, `/capture`, and the `/area/*` pages other than one meta fix. Their routes are live and some are indexed. They pick up the new palette, fonts and nav, but their copy is unchanged.
  - Remaining uses of "print" there: headshots ("for… print" as a use case) and folio ("printed and bound", about albums). Both are about photos and albums, not art.
- **`/gallery`.** It still says "fine art prints", but it redirects to `/visit`, so no one sees it.
- **`/trade/*.html`.** Static pages from the trade-pages branch, with their own styles. Left as they are.
- **`public/videos/hero-home.mp4`.** No longer used. I didn't delete it.
- **JSON-LD `PhotographyBusiness` type, GTM, Brevo tracker, sitemap, robots, redirects and rewrites.** All untouched.
- **No new dependencies.**

## Also note

- Checking the preview through the Vercel connector created a **temporary Vercel share link** on this deployment. It expires in about 23 hours.
- A `solas-gallery` preview entry was added to `~/ClaudeProjects/.claude/launch.json` so the site can be previewed locally (`next start -p 3110`).
