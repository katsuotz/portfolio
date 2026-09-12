import Image from 'next/image'
import Link from 'next/link'
import { editorialType } from '@/lib/editorial-typography'
import type { PhotographyPhoto } from '@/lib/photography'
import { cn } from '@/lib/utils'

type PhotoFigureProps = {
  photo: PhotographyPhoto
  href?: string
  index?: number
  priority?: boolean
  className?: string
}

export default function PhotoFigure({
  photo,
  href,
  index,
  priority = false,
  className,
}: PhotoFigureProps) {
  const image = (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      priority={priority}
      sizes="(min-width: 1280px) 50vw, (min-width: 768px) 58vw, 100vw"
      className="block h-auto w-full"
    />
  )

  return (
    <figure id={photo.id} className={cn('scroll-mt-24', className)}>
      {href ? (
        <Link
          href={href}
          aria-label={`View ${photo.caption} in the photography gallery`}
          className="block border border-[var(--home-line)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)]"
        >
          {image}
        </Link>
      ) : (
        <div className="border border-[var(--home-line)]">{image}</div>
      )}
      <figcaption className="mt-3 flex items-start justify-between gap-4 border-t border-[var(--home-line)] pt-3 text-[var(--home-muted)]">
        <span className={cn(editorialType.secondary, 'font-light')}>
          {photo.caption}
        </span>
        {index !== undefined && (
          <span
            className={cn(
              editorialType.micro,
              'shrink-0 font-[family-name:var(--font-home-mono)] tracking-[0.1em] text-[var(--home-accent)] uppercase'
            )}
          >
            {String(index).padStart(2, '0')}
          </span>
        )}
      </figcaption>
    </figure>
  )
}
