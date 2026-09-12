import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import PhotoFigure from '@/components/photography/photo-figure'
import { featuredPhotography } from '@/lib/photography'
import { editorialType } from '@/lib/editorial-typography'
import { cn } from '@/lib/utils'

export default function Photography() {
  return (
    <section
      id="photography"
      className="mx-auto w-full max-w-[1440px] scroll-mt-24 border-t border-[var(--home-line)] px-5 py-20 md:px-8 md:py-28 lg:px-16"
      aria-labelledby="photography-title"
    >
      <div className="mb-[clamp(3rem,7vw,6rem)] grid max-w-[72rem] gap-[clamp(1.5rem,4vw,3rem)]">
        <div className="flex justify-end border-y border-[var(--home-line)] py-3">
          <Link
            href="/photography"
            className={cn(
              editorialType.micro,
              'group/gallery inline-flex min-h-11 items-center gap-2 font-[family-name:var(--font-home-mono)] tracking-[0.1em] text-[var(--home-muted)] uppercase transition-colors hover:text-[var(--home-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none'
            )}
          >
            Open full gallery
            <ArrowUpRightIcon
              className="size-4 transition-transform duration-200 group-hover/gallery:-translate-y-0.5 group-hover/gallery:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
              aria-hidden="true"
            />
          </Link>
        </div>
        <h2
          id="photography-title"
          className="max-w-[14ch] font-[family-name:var(--font-home-display)] text-[clamp(2.65rem,7vw,6rem)] leading-[0.94] font-normal tracking-[-0.04em] text-[var(--home-ink)]"
        >
          Beyond the screen.
        </h2>
        <p
          className={cn(
            editorialType.body,
            'max-w-[44ch] font-light text-[var(--home-muted)]'
          )}
        >
          Photographs from my travels, and the moments in between.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-x-4 gap-y-[clamp(2.5rem,7vw,6rem)] md:grid-cols-12 md:items-end">
        <PhotoFigure
          photo={featuredPhotography[0]}
          href={`/photography#${featuredPhotography[0].id}`}
          index={1}
          className="md:col-span-5"
        />
        <PhotoFigure
          photo={featuredPhotography[1]}
          href={`/photography#${featuredPhotography[1].id}`}
          index={2}
          className="md:col-span-4"
        />
        <PhotoFigure
          photo={featuredPhotography[2]}
          href={`/photography#${featuredPhotography[2].id}`}
          index={3}
          className="md:col-span-3"
        />
      </div>
    </section>
  )
}
