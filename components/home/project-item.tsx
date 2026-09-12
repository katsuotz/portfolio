import Image from 'next/image'
import { ArrowSquareOutIcon, XSquareIcon } from '@phosphor-icons/react'
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
}: {
  project: ProjectType
  variant?: 'bento' | 'registry'
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
          <article className="group flex h-full flex-col text-[var(--home-ink)]">
            <div className="home-gallery-media relative aspect-[16/10] max-h-[420px] overflow-hidden bg-[var(--home-surface)]">
              <Image
                loading="eager"
                src={project.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-contain"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 pt-4">
              <div className="flex items-baseline justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-[family-name:var(--font-home-sans)] text-[clamp(1.5rem,2.3vw,2rem)] leading-tight font-medium tracking-[-0.03em] text-[var(--home-ink)]">
                    {project.name}
                  </h3>
                  <p
                    className={cn(
                      editorialType.micro,
                      'mt-1 font-[family-name:var(--font-home-mono)] text-[var(--home-muted)] uppercase'
                    )}
                  >
                    {project.tag} · {project.year}
                  </p>
                  <p
                    className={cn(
                      editorialType.card,
                      'mt-2 max-w-[56ch] text-[var(--home-muted)]'
                    )}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ) : (
          <article className="group flex h-full flex-col text-[var(--home-ink)]">
            <div className="home-gallery-media relative aspect-[16/10] max-h-[420px] overflow-hidden bg-[var(--home-surface)]">
              <Image
                loading="lazy"
                src={project.image}
                alt=""
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-contain transition-transform duration-500 group-hover/project:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 pt-4">
              <div className="min-w-0">
                <h2 className="font-[family-name:var(--font-home-sans)] text-[clamp(1.5rem,2.3vw,2rem)] leading-tight font-medium tracking-[-0.03em] text-[var(--home-ink)]">
                  {project.name}
                </h2>
                <p
                  className={cn(
                    editorialType.micro,
                    'mt-1 font-[family-name:var(--font-home-mono)] text-[var(--home-muted)] uppercase'
                  )}
                >
                  {project.tag} · {project.year}
                </p>
                <p
                  className={cn(
                    editorialType.card,
                    'mt-2 max-w-[56ch] text-[var(--home-muted)]'
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
