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
import { editorialFontVariables } from '@/lib/editorial-fonts'

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
  compact = false,
  index,
}: {
  project: ProjectType
  variant?: 'bento' | 'registry'
  compact?: boolean
  index?: number
}) {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          'group/project block h-full w-full cursor-pointer text-left focus-visible:outline-none',
          variant === 'bento'
            ? 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)]'
            : 'focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[var(--home-accent)]'
        )}
      >
        <span className="sr-only">{project.name}</span>
        {variant === 'bento' ? (
          compact ? (
            <article className="grid min-h-[13.5rem] grid-cols-[minmax(7rem,0.72fr)_minmax(0,1.28fr)] overflow-hidden border border-[var(--home-line)] bg-[var(--home-surface)] text-[var(--home-ink)] transition-[border-color,background-color] duration-300 ease-out group-hover/project:border-[var(--home-accent)] group-hover/project:bg-[var(--home-surface-raised)] motion-reduce:transition-none">
              <div className="relative min-h-full overflow-hidden border-r border-[var(--home-line)] bg-[var(--home-surface-raised)]">
                <Image
                  loading="lazy"
                  src={project.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 12vw, (min-width: 640px) 24vw, 38vw"
                  className="origin-center transform-gpu object-cover [filter:saturate(0.62)_brightness(0.66)] transition-[filter,transform] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/project:scale-[1.04] group-hover/project:[filter:saturate(0.9)_brightness(0.78)] group-focus-visible/project:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
                />
                <div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-black/10 to-black/70"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-3 bottom-3 flex size-10 items-center justify-center border border-white/25 bg-black/45 p-2">
                  <Image
                    loading="lazy"
                    src={project.logo}
                    alt=""
                    width={32}
                    height={32}
                    className={cn(
                      'max-h-full max-w-full object-contain',
                      project.logoClassName
                    )}
                  />
                </div>
              </div>
              <div className="flex min-w-0 flex-col justify-between gap-8 p-4 sm:p-5">
                <div
                  className={cn(
                    editorialType.micro,
                    'flex flex-wrap items-center justify-between gap-x-3 gap-y-1 font-[family-name:var(--font-home-mono)] tracking-[0.1em] text-[var(--home-muted)] uppercase'
                  )}
                >
                  <span>
                    <span className="text-[var(--home-muted)]">CH</span>{' '}
                    {String(index ?? 1).padStart(2, '0')}
                  </span>
                  <span>{project.tag}</span>
                </div>
                <div className="flex min-w-0 items-end justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-[family-name:var(--font-home-display)] text-[clamp(1.35rem,2vw,2.1rem)] leading-[0.94] font-normal tracking-[-0.04em] text-[var(--home-ink)] uppercase">
                      {project.name}
                    </h3>
                    <div
                      className={cn(
                        editorialType.micro,
                        'mt-3 font-[family-name:var(--font-home-mono)] tracking-[0.08em] text-[var(--home-accent)] uppercase'
                      )}
                    >
                      {project.year}
                    </div>
                  </div>
                  <ArrowRightIcon
                    className="size-4 shrink-0 -rotate-45 text-[var(--home-muted)] transition-[color,transform] duration-200 group-hover/project:translate-x-0.5 group-hover/project:text-[var(--home-accent)] group-focus-visible/project:text-[var(--home-accent)] motion-reduce:transform-none motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </article>
          ) : (
            <article className="home-project-active relative isolate h-full min-h-[33rem] overflow-hidden border border-[var(--home-line)] bg-[var(--home-surface)] text-white md:min-h-[40rem]">
              <Image
                loading="eager"
                src={project.image}
                alt=""
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="absolute inset-0 -z-2 h-full w-full origin-center transform-gpu object-cover [filter:saturate(0.76)_brightness(0.71)] transition-[transform,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/project:scale-[1.03] group-hover/project:[filter:saturate(0.92)_brightness(0.77)] group-focus-visible/project:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
              />
              <div
                className="absolute inset-0 -z-1 bg-linear-to-t from-[#050a12]/95 via-[#050a12]/25 to-[#050a12]/5"
                aria-hidden="true"
              />
              <div
                className={cn(
                  editorialType.micro,
                  'flex min-w-0 items-center justify-between gap-2 border-b border-white/20 bg-black/25 p-4 font-[family-name:var(--font-home-mono)] tracking-[0.1em] text-white uppercase'
                )}
              >
                <span>
                  <span className="text-white/45">CH</span>{' '}
                  {String(index ?? 1).padStart(2, '0')}
                </span>
                <span>
                  {project.tag} · {project.year}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] gap-4 p-[clamp(1.25rem,2.5vw,2rem)]">
                <div className="flex size-11 place-items-center overflow-hidden border border-white/25 bg-black/45 p-2 min-[421px]:size-13">
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
                <div className="min-w-0 self-end">
                  <h3 className="font-[family-name:var(--font-home-display)] text-[clamp(1.7rem,3.5vw,4rem)] leading-[0.95] font-normal tracking-[-0.04em] text-white uppercase">
                    {project.name}
                  </h3>
                  <p
                    className={cn(
                      editorialType.card,
                      'mt-2.5 max-w-[55ch] text-white/75 [overflow-wrap:anywhere]'
                    )}
                  >
                    {project.description}
                  </p>
                </div>
                <span
                  className="hidden size-11 place-items-center border border-white/30 text-lg text-white transition-[background-color,color,transform] duration-200 group-hover/project:-translate-y-0.5 group-hover/project:translate-x-0.5 group-hover/project:bg-[var(--home-accent)] group-hover/project:text-[var(--home-on-accent)] md:grid motion-reduce:transform-none motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            </article>
          )
        ) : (
          <article className="relative flex h-full min-h-[430px] flex-col overflow-hidden bg-[var(--home-canvas)] transition-colors duration-200 group-hover/project:bg-[var(--home-surface)] motion-reduce:transition-none">
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--home-surface-raised)]">
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
                  'absolute inset-x-5 top-5 flex flex-wrap justify-between gap-2 font-[family-name:var(--font-home-mono)] tracking-[0.14em] text-white uppercase'
                )}
              >
                <span className="border border-white/30 bg-black/60 px-2 py-1">
                  {project.tag}
                </span>
                <span className="border border-white/30 bg-black/60 px-2 py-1">
                  {project.year}
                </span>
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
                    className="size-4 -rotate-45"
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
                    'mt-3 text-[var(--home-muted)]'
                  )}
                >
                  {project.description}
                </p>
              </div>
            </div>
          </article>
        )}
      </DialogTrigger>
      <DialogContent
        className={cn(
          editorialFontVariables,
          'home-bento-dialog min-w-0 border-[var(--home-line)] bg-[var(--home-surface-raised)] font-[family-name:var(--font-home-sans)] text-[var(--home-ink)] shadow-[0_28px_80px_var(--home-dialog-shadow)]',
          '[--home-canvas:var(--color-paper)] [--home-surface:var(--color-paper-deep)] [--home-surface-raised:var(--color-paper-raised)] [--home-ink:var(--color-ink)] [--home-muted:var(--color-muted)] [--home-accent:var(--color-accent)] [--home-accent-hover:var(--color-accent-hover)] [--home-on-accent:var(--color-accent-ink)] [--home-line:var(--color-rule)] [--home-subtle-line:var(--color-rule-soft)] [--home-subtle-line-strong:var(--color-rule)] [--home-panel-tint:var(--color-panel-tint)] [--home-shadow:var(--color-shadow)] [--home-accent-border:var(--color-accent)] [--home-index:var(--color-muted)] [--home-nav-bg:var(--color-paper)] [--home-dialog-shadow:var(--color-shadow)] [--home-dialog-media-shadow:var(--color-shadow)]',
          'sm:max-w-3xl'
        )}
      >
        <DialogHeader>
          <div className="mb-4 flex items-center gap-4">
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
            <div className="min-w-0">
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
            className={cn(editorialType.card, 'pb-4 text-[var(--home-muted)]')}
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
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <DialogClose aria-label="Close" asChild>
              <Button
                variant="ghost"
                className={cn(
                  editorialType.secondary,
                  'min-h-11 w-full border border-[var(--home-line)] text-[var(--home-muted)] hover:border-[var(--home-accent)] hover:bg-[var(--home-surface)] hover:text-[var(--home-accent)] sm:w-auto'
                )}
              >
                <XSquareIcon className="mr-2 h-4 w-4" weight="light" />
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
                  'inline-flex min-h-11 w-full items-center justify-center whitespace-nowrap bg-[var(--home-accent)] px-4 py-2 font-medium text-[var(--home-on-accent)] transition-colors hover:bg-[var(--home-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none sm:w-auto'
                )}
              >
                <ArrowSquareOutIcon className="mr-2 h-4 w-4" weight="light" />
                Visit Project
              </Link>
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
