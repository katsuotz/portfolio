import type { Metadata } from 'next'
import EditorialShell from '@/components/home/editorial-shell'
import PhotoFigure from '@/components/photography/photo-figure'
import { photographyPhotos } from '@/lib/photography'
import { editorialType } from '@/lib/editorial-typography'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  metadataBase: new URL('https://katsuotz.com'),
  title: 'Photography | Katsuotz',
  description:
    'A field collection of photographs from beyond the screen by Muhammad Irfan Fakhri.',
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
  'md:col-span-7',
  'md:col-span-5 md:mt-[clamp(4rem,9vw,9rem)]',
  'md:col-span-5 md:col-start-2',
  'md:col-span-4 md:col-start-9 md:mt-[clamp(1rem,5vw,5rem)]',
  'md:col-span-8 md:col-start-3',
  'md:col-span-4 md:col-start-1',
  'md:col-span-7 md:col-start-6 md:mt-[clamp(3rem,8vw,8rem)]',
  'md:col-span-5 md:col-start-2',
  'md:col-span-6 md:col-start-7 md:mt-[clamp(2rem,6vw,6rem)]',
  'md:col-span-8 md:col-start-3',
] as const

export default function PhotographyPage() {
  return (
    <EditorialShell route="photography" showBackToTop>
      <section
        className="mx-auto w-full max-w-[96rem] px-[max(1.25rem,4vw)] pt-[clamp(8rem,16vw,13rem)] pb-[clamp(6rem,12vw,11rem)] md:pl-[calc(max(1.25rem,4vw)+1.75rem)]"
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
