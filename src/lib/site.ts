export const SITE = {
  name: 'Solas Gallery',
  url: 'https://solasgallery.com',
  title: 'Solas Gallery | Portraits, Art, and a Place to Gather · Salado',
  description:
    'Solas Gallery, Salado, Texas. Personal art, designed for your home — commissioned for your walls or chosen from the studio floor, finished by hand. Est. 1995.',
  street: '2 Rock Creek Dr',
  city: 'Salado',
  region: 'TX',
  postalCode: '76571',
  phoneDisplay: '(254) 947-1881',
  phoneTel: '+12549471881',
  established: '1995',
} as const

/** Exact NAP line for the footer. */
export const NAP = 'Solas Gallery · 2 Rock Creek Dr, Salado, TX 76571 · (254) 947-1881'

export const sisters = [
  { name: 'Salado Village Framer', href: 'https://saladovillageframer.com' },
  { name: 'HUB Salado', href: 'https://hubsalado.com' },
] as const

export const HUB_URL = 'https://hubsalado.com'

export const primaryNav = [
  { href: '/#commissions', label: 'Commissions', external: false },
  { href: '/#originals', label: 'Studio Originals', external: false },
  { href: '/portraits', label: 'Portraits', external: false },
  { href: '/story', label: 'Our Story', external: false },
  { href: HUB_URL, label: 'Events', external: true },
  { href: '/visit', label: 'Visit', external: false },
] as const

export const images = {
  home: {
    src: '/images/home/hero-home.jpg',
    alt: 'The Solas Gallery window wall at dusk, warm interior light reflected in the glass.',
  },
  portrait: {
    src: '/solas/portrait.jpg',
    alt: 'A family of six in a hand-finished studio portrait against a painted backdrop.',
  },
  art: {
    src: '/solas/art.jpg',
    alt: 'A large framed abstract painting with black and beige textured blocks leaning against a stone-colored plaster wall in a sunlit gallery space.',
  },
  folio: {
    src: '/images/folio-hero.jpg',
    alt: 'The entrance to Solas Gallery at dusk, warm light in the arched window above the stone steps.',
  },
  gather: {
    src: '/solas/gather.jpg',
    alt: 'A gathering at Solas Gallery in Salado, Texas.',
  },
  stone: {
    src: '/images/placeholders/stone.svg',
    alt: 'Stone-colored placeholder for a Solas Gallery photograph.',
  },
} as const

// Gallery hours match the Google Business Profile: Monday–Saturday, 10–5 (Tim, 2026-11-18).
export const hours = 'Monday – Saturday, 10 am – 5 pm'

// Google Maps place embed for the Solas Gallery listing (Share → Embed a map,
// 2026-11-18). Shows the place card with the business name — not a bare address pin.
export const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.796697055061!2d-97.536423!3d30.9482421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86453be326e5c787%3A0xd8e78f1e59f3a36c!2sSolas%20Gallery!5e0!3m2!1sen!2sus!4v1795044788858!5m2!1sen!2sus'

export const indexableRoutes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/portraits', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/art', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/gather', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/visit', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/begin', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/real-portrait', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/folio', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/process', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/story', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/events/venue-rental', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/portraits/babyfaces', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
]
