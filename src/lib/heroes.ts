export const heroKeys = ['portrait', 'art', 'gather', 'folio'] as const

export type HeroKey = (typeof heroKeys)[number]

export type HeroMedia = {
  desktop: string
  mobile: string
  poster: string
}

/** Looping hero reels made from existing Solas stills. */
export const heroes: Record<HeroKey, HeroMedia> = {
  portrait: {
    desktop: '/video/portrait-desktop.mp4',
    mobile: '/video/portrait-mobile.mp4',
    poster: '/video/portrait-poster.jpg',
  },
  art: {
    desktop: '/video/art-desktop.mp4',
    mobile: '/video/art-mobile.mp4',
    poster: '/video/art-poster.jpg',
  },
  gather: {
    desktop: '/video/gather-desktop.mp4',
    mobile: '/video/gather-mobile.mp4',
    poster: '/video/gather-poster.jpg',
  },
  folio: {
    desktop: '/video/folio-desktop.mp4',
    mobile: '/video/folio-mobile.mp4',
    poster: '/video/folio-poster.jpg',
  },
}
