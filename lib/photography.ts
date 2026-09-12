export type PhotographyPhoto = {
  id: string
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export const photographyPhotos = [
  {
    id: 'orange-backpacks',
    src: '/photography/orange-backpacks.webp',
    alt: 'Orange backpack hikers in a misty forest',
    caption: 'Orange packs in the mist',
    width: 1920,
    height: 1280,
  },
  {
    id: 'volcanic-crater',
    src: '/photography/volcanic-crater.webp',
    alt: 'Volcanic cone with a plume beside a turquoise lake',
    caption: 'A volcanic cone above a turquoise lake',
    width: 1920,
    height: 1280,
  },
  {
    id: 'blue-train',
    src: '/photography/blue-train.webp',
    alt: 'Blue train crossing a red bridge over water',
    caption: 'Blue train, red bridge, open water',
    width: 1920,
    height: 1280,
  },
  {
    id: 'portrait',
    src: '/photography/portrait.webp',
    alt: 'Man in a patterned headcloth with hands together in profile',
    caption: 'A quiet profile in patterned cloth',
    width: 1280,
    height: 1920,
  },
  {
    id: 'snowy-mountains',
    src: '/photography/snowy-mountains.webp',
    alt: 'People below snowy misty mountains',
    caption: 'Below the snowy mist',
    width: 1920,
    height: 1280,
  },
  {
    id: 'red-shrine',
    src: '/photography/red-shrine.webp',
    alt: 'Red shrine behind trees in snow',
    caption: 'A red shrine behind winter trees',
    width: 1280,
    height: 1920,
  },
  {
    id: 'ridge-camp',
    src: '/photography/ridge-camp.webp',
    alt: 'Colorful tents across a dark ridge',
    caption: 'Colorful tents across the ridge',
    width: 1920,
    height: 1280,
  },
  {
    id: 'waterfront',
    src: '/photography/waterfront.webp',
    alt: 'Houses along water reflected below forest',
    caption: 'Houses held in the water’s reflection',
    width: 1920,
    height: 1280,
  },
  {
    id: 'misty-trees',
    src: '/photography/misty-trees.webp',
    alt: 'Trees fading into fog',
    caption: 'Trees dissolving into fog',
    width: 1920,
    height: 1280,
  },
  {
    id: 'mountain-stream',
    src: '/photography/mountain-stream.webp',
    alt: 'Boulder stream below misty slopes',
    caption: 'A stream below the misty slopes',
    width: 1920,
    height: 1280,
  },
] as const satisfies readonly PhotographyPhoto[]

export const featuredPhotography = [
  photographyPhotos[0],
  photographyPhotos[2],
  photographyPhotos[3],
] as const
