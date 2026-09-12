import type { Metadata } from 'next'
import EditorialShell from '@/components/home/editorial-shell'
import PhotoFigure from '@/components/photography/photo-figure'
import { photographyPhotos } from '@/lib/photography'
import { editorialType } from '@/lib/editorial-typography'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Photography | Katsuotz',
  description:
    'A field collection of photographs from beyond the screen by Muhammad Irfan Fakhri.',
  alternates: {
    canonical: '/photography',
  },
  openGraph: {
    title: 'Photography | Katsuotz',
    description:
      'A field collection of photographs from beyond the screen by Muhammad Irfan Fakhri.',
    type: 'website',
    url: '/photography',
    images: ['/photography/orange-backpacks.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photography | Katsuotz',
    description:
      'A field collection of photographs from beyond the screen by Muhammad Irfan Fakhri.',
    images: ['/photography/orange-backpacks.webp'],
  },
}

const galleryLayout = [
  'md:col-span-12',
  'md:col-span-6',
  'md:col-span-6',
  'md:col-span-12',
  'md:col-span-6',
  'md:col-span-6',
  'md:col-span-12',
  'md:col-span-6',
  'md:col-span-6',
  'md:col-span-12',
] as const

export default function PhotographyPage() {
  return (
    <EditorialShell route="photography" showBackToTop>
      <section
        className="mx-auto w-full max-w-[1440px] px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32 lg:px-16"
        aria-labelledby="photography-page-title"
      >
        <div className="mb-[clamp(2.5rem,5vw,4rem)] grid max-w-[72rem] gap-[clamp(1.5rem,4vw,3rem)]">
          <h1
            id="photography-page-title"
            className="max-w-none font-[family-name:var(--font-home-display)] text-[clamp(2rem,7.7vw,6rem)] leading-[0.9] font-normal tracking-[-0.04em] text-[var(--home-ink)] uppercase"
          >
            Photography
          </h1>
          <p
            className={cn(
              editorialType.body,
              'max-w-[45ch] font-light text-[var(--home-muted)] md:ml-[16.666667%]'
            )}
          >
            A slower visual archive: landscapes, people, and small moments
            collected along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-x-4 gap-y-[clamp(4rem,10vw,10rem)] md:grid-cols-12">
          {photographyPhotos.map((photo, index) => (
            <PhotoFigure
              key={photo.id}
              photo={photo}
              index={index + 1}
              priority={index === 0}
              className={galleryLayout[index]}
            />
          ))}
        </div>
      </section>
    </EditorialShell>
  )
}
