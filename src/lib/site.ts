export const SITE = {
  name: 'Solas Gallery',
  url: 'https://solasgallery.com',
  title: 'Solas Gallery | Portraits, Art, and a Place to Gather · Salado',
  description: 'Gallery, portrait studio, and gathering place in Salado, Texas. Est. 1995.',
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

export const primaryNav = [
  { href: '/portraits', label: 'Portraits' },
  { href: '/art', label: 'Art' },
  { href: '/gather', label: 'Gather' },
  { href: '/visit', label: 'Visit' },
  { href: '/begin', label: 'Begin' },
] as const

export const images = {
  home: {
    src: '/images/home/hero-home.jpg',
    alt: 'The Solas Gallery window wall at dusk, warm interior light reflected in the glass.',
  },
  portrait: {
    src: '/solas/portrait.jpg',
    alt: 'A high-contrast, Karsh-inspired black and white studio portrait of a woman with silver hair and a serious expression, emphasizing character and texture against a dark backdrop.',
  },
  art: {
    src: '/solas/art.jpg',
    alt: 'A large framed abstract painting with black and beige textured blocks leaning against a stone-colored plaster wall in a sunlit gallery space.',
  },
  folio: {
    src: '/solas/stone.svg',
    alt: 'A premium, thick-paged black folio album open on a rustic wooden table, displaying two black-and-white landscape photographs of hills and sea stacks.',
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

export const hours = 'Tuesday – Saturday, 10 am – 5 pm'

export const indexableRoutes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/portraits', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/art', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/gather', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/visit', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/begin', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/real-portrait', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/folio', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
]
