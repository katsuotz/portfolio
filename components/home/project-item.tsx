import Image from 'next/image'
import {
  ArrowSquareOutIcon,
  XSquareIcon,
  ArrowRightIcon,
} from '@phosphor-icons/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { editorialType } from '@/lib/editorial-typography'

export interface ProjectType {
  logo: string
  name: string
  year: string
  tag: string
  description: string
  image: string
  url?: string
  highlight?: boolean
  logoClassName?: string
}

export default function ProjectItem({
  project,
  variant = 'registry',
}: {
  project: ProjectType
  variant?: 'bento' | 'registry'
}) {
  return (
    <Dialog>
      <DialogTrigger
        className={`w-full text-left group/project block h-full cursor-pointer focus-visible:outline-none ${
          variant === 'bento'
            ? 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)]'
            : 'focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[var(--home-accent)]'
        }`}
      >
        <span className="sr-only">{project.name}</span>
        {variant === 'bento' ? (
          <article className="relative isolate min-h-full overflow-hidden rounded-[0.6rem] border border-[var(--home-line)] bg-[var(--home-surface)] text-white">
            <Image
              loading="lazy"
              src={project.image}
              alt=""
              width={1200}
              height={760}
              className="absolute inset-0 -z-2 h-full w-full object-cover [filter:saturate(0.68)_brightness(0.66)] transition-[transform,filter] duration-500 group-hover/project:scale-[1.025] group-hover/project:[filter:saturate(0.85)_brightness(0.72)] motion-reduce:transform-none motion-reduce:transition-none"
            />
            <div
              className="absolute inset-0 -z-1 [background:linear-gradient(to_top,rgba(5,10,18,0.96),rgba(5,10,18,0.08)_72%)]"
              aria-hidden="true"
            />
            <div
              className={cn(
                editorialType.micro,
                'flex justify-between p-4 font-[family-name:var(--font-home-mono)] tracking-[0.1em] text-white/80 uppercase'
              )}
            >
              <span>{project.tag}</span>
              <span>{project.year}</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-1 items-end gap-4 p-[clamp(1.25rem,2.5vw,2rem)] min-[421px]:grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto]">
              <div className="flex size-11 place-items-center overflow-hidden rounded-[0.35rem] border border-white/20 bg-[rgba(5,10,18,0.76)] p-2 backdrop-blur-lg min-[421px]:size-13">
                <Image
                  loading="lazy"
                  src={project.logo}
                  alt=""
                  width={44}
                  height={44}
                  className={cn(
                    'max-h-full max-w-full object-contain',
                    project.logoClassName
                  )}
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-[family-name:var(--font-home-display)] text-[clamp(1.45rem,2.7vw,3rem)] leading-[0.95] font-normal tracking-[-0.05em] text-white uppercase">
                  {project.name}
                </h3>
                <p
                  className={cn(
                    editorialType.card,
                    'mt-2.5 max-w-3xl text-white/70'
                  )}
                >
                  {project.description}
                </p>
              </div>
              <span
                className="hidden size-11 place-items-center border border-white/25 text-lg text-white transition-[background-color,color,transform] duration-200 group-hover/project:-translate-y-0.5 group-hover/project:translate-x-0.5 group-hover/project:bg-[var(--home-accent)] group-hover/project:text-[var(--home-on-accent)] md:grid motion-reduce:transform-none motion-reduce:transition-none"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>
          </article>
        ) : (
          <article className="relative flex h-full min-h-[430px] flex-col overflow-hidden bg-[var(--home-canvas)] transition-colors duration-200 group-hover/project:bg-[var(--home-surface)] motion-reduce:transition-none">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#111318]">
              <Image
                loading="lazy"
                src={project.image}
                alt=""
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-80 transition-transform duration-500 group-hover/project:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-black/65 via-black/5 to-black/10"
                aria-hidden="true"
              />
              <div
                className={cn(
                  editorialType.micro,
                  'absolute inset-x-5 top-5 flex justify-between font-[family-name:var(--font-home-mono)] tracking-[0.14em] text-white uppercase'
                )}
              >
                <span>{project.tag}</span>
                <span>{project.year}</span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden border border-[var(--home-line)] bg-[var(--home-surface-raised)] p-2">
                  <Image
                    loading="lazy"
                    src={project.logo}
                    alt={project.name}
                    width={48}
                    height={48}
                    className={cn(
                      'max-h-full max-w-full object-contain',
                      project.logoClassName
                    )}
                  />
                </div>
                <div className="flex size-10 items-center justify-center border border-[var(--home-line)] text-[var(--home-muted)] transition-colors group-hover/project:border-[var(--home-accent)] group-hover/project:text-[var(--home-accent)] motion-reduce:transition-none">
                  <ArrowRightIcon
                    className="size-4 -rotate-45 transition-transform duration-200 group-hover/project:translate-x-0.5 group-hover/project:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                    weight="light"
                  />
                </div>
              </div>

              <div className="mt-auto min-w-0">
                <h2 className="text-balance font-[family-name:var(--font-home-display)] text-2xl leading-[0.95] tracking-[-0.03em] text-[var(--home-ink)] sm:text-3xl">
                  {project.name}
                </h2>
                <p
                  className={cn(
                    editorialType.card,
                    'mt-3 line-clamp-3 text-[var(--home-muted)]'
                  )}
                >
                  {project.description}
                </p>
              </div>
            </div>
          </article>
        )}
      </DialogTrigger>
      <DialogContent className="home-bento-dialog sm:max-w-3xl">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden border border-[var(--home-line)] bg-[var(--home-surface)] p-2">
              <Image
                src={project.logo}
                alt={project.name}
                width={32}
                height={32}
                className={cn(
                  'max-h-full max-w-full object-contain',
                  project.logoClassName
                )}
              />
            </div>
            <div>
              <DialogTitle className="font-[family-name:var(--font-home-display)] text-3xl tracking-[-0.03em] text-[var(--home-ink)]">
                {project.name}
              </DialogTitle>
              <div
                className={cn(
                  editorialType.secondary,
                  'mt-1.5 flex items-center gap-2.5'
                )}
              >
                <span className="font-[family-name:var(--font-home-mono)] text-[var(--home-accent)]">
                  {project.year}
                </span>
                <span className="h-3.5 w-px bg-[var(--home-line)]" />
                <span className="text-[var(--home-muted)]">{project.tag}</span>
              </div>
            </div>
          </div>

          <DialogDescription
            className={cn(editorialType.body, 'pb-4 text-[var(--home-muted)]')}
          >
            {project.description}
          </DialogDescription>

          <div className="relative overflow-hidden border border-[var(--home-line)] shadow-[0_20px_55px_var(--home-dialog-media-shadow)]">
            <Image
              loading="lazy"
              src={project.image}
              alt={project.name}
              width="1000"
              height="600"
              className="w-full h-auto object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>

          <div className="flex gap-3 justify-end mt-6">
            <DialogClose aria-label="Close" asChild>
              <Button
                variant="ghost"
                className={cn(
                  editorialType.secondary,
                  'min-h-11 border border-[var(--home-line)] text-[var(--home-muted)] hover:border-[var(--home-accent)] hover:bg-[var(--home-surface)] hover:text-[var(--home-accent)]'
                )}
              >
                <XSquareIcon className="w-4 h-4 mr-2" weight="light" />
                Close
              </Button>
            </DialogClose>
            {project.url && (
              <Link
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  editorialType.secondary,
                  'inline-flex min-h-11 items-center justify-center whitespace-nowrap bg-[var(--home-accent)] px-4 py-2 font-medium text-[var(--home-on-accent)] transition-colors hover:bg-[var(--home-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none'
                )}
              >
                <ArrowSquareOutIcon className="w-4 h-4 mr-2" weight="light" />
                Visit Project
              </Link>
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
