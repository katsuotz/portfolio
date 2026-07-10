import Image from 'next/image'
import { cn } from '@/lib/utils'
import { editorialType } from '@/lib/editorial-typography'

export interface WorkExperiencePosition {
  title: string
  date: string
}

export interface WorkExperienceType {
  company: string
  description: string
  country: string
  status: 'contract' | 'freelance' | 'fulltime'
  position: WorkExperiencePosition[]
  logo: string
  flag: string
  logoClassName?: string
  headingClassName?: string
}

const statusLabels: Record<WorkExperienceType['status'], string> = {
  contract: 'Contract',
  freelance: 'Freelance',
  fulltime: 'Full-time',
}

export default function WorkExperienceItem({
  experience,
  variant,
}: {
  experience: WorkExperienceType
  variant: 'featured' | 'compact'
}) {
  if (variant === 'compact') {
    return (
      <article className="grid grid-cols-1 items-center gap-4 border-t border-[var(--home-subtle-line)] py-6 md:grid-cols-2 md:gap-8 lg:grid-cols-[minmax(15rem,1.1fr)_minmax(12rem,0.8fr)_minmax(18rem,1.5fr)] xl:py-7">
        <div className="flex items-center gap-4">
          <div className="grid size-11 shrink-0 place-items-center overflow-hidden border border-[var(--home-line)] bg-[var(--home-panel-tint)] p-2">
            <Image
              loading="lazy"
              src={experience.logo}
              alt=""
              width={32}
              height={32}
              className={cn(
                'max-h-full max-w-full object-contain',
                experience.logoClassName
              )}
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-medium xl:text-lg">
              {experience.company}
            </h3>
            <span
              className={cn(
                editorialType.secondary,
                'font-light text-[var(--home-muted)]'
              )}
            >
              {experience.country} · {statusLabels[experience.status]}
            </span>
          </div>
        </div>
        <div>
          {experience.position.map((position) => (
            <p
              className="flex flex-col"
              key={`${position.title}-${position.date}`}
            >
              <strong className={cn(editorialType.card, 'font-medium')}>
                {position.title}
              </strong>
              <span
                className={cn(
                  editorialType.micro,
                  'font-[family-name:var(--font-home-mono)] text-[var(--home-muted)]'
                )}
              >
                {position.date}
              </span>
            </p>
          ))}
        </div>
        <p
          className={cn(
            editorialType.card,
            'font-light text-[var(--home-muted)] md:col-span-2 md:pl-15 lg:col-span-1 lg:pl-0'
          )}
        >
          {experience.description}
        </p>
      </article>
    )
  }

  return (
    <article className="col-span-1 flex min-h-[27rem] min-w-0 flex-col justify-between overflow-hidden rounded-[0.6rem] border border-[var(--home-line)] bg-[var(--home-surface)] p-[clamp(1.5rem,3vw,2.5rem)] transition-[background-color,color,border-color,transform] duration-200 hover:-translate-y-0.75 hover:border-[var(--home-accent-border)] md:col-span-6 lg:min-h-[31rem] motion-reduce:transform-none motion-reduce:transition-none">
      <div className="flex items-center justify-between">
        <div className="grid size-16 shrink-0 place-items-center overflow-hidden border border-[var(--home-line)] bg-[var(--home-panel-tint)] p-3">
          <Image
            loading="lazy"
            src={experience.logo}
            alt=""
            width={48}
            height={48}
            className={cn(
              'max-h-full max-w-full object-contain',
              experience.logoClassName
            )}
          />
        </div>
        <span
          className={cn(
            editorialType.micro,
            'flex items-center gap-2.5 font-[family-name:var(--font-home-mono)] tracking-[0.07em] text-[var(--home-muted)] uppercase'
          )}
        >
          <i
            className="size-1.5 rounded-full bg-[var(--home-accent)] shadow-[0_0_0_4px_var(--home-accent-ring)]"
            aria-hidden="true"
          />{' '}
          Current · {statusLabels[experience.status]}
        </span>
      </div>

      <div className="mt-20 min-w-0">
        <div className="min-w-0">
          <p
            className={cn(
              editorialType.micro,
              'flex items-center gap-2 font-[family-name:var(--font-home-mono)] tracking-[0.08em] text-[var(--home-muted)] uppercase [&_img]:h-auto [&_img]:w-4'
            )}
          >
            <Image
              loading="lazy"
              src={experience.flag}
              alt=""
              width={18}
              height={18}
            />
            {experience.country}
          </p>
          <h3
            className={cn(
              'mt-3 max-w-full text-balance break-words font-[family-name:var(--font-home-display)] text-[clamp(2.4rem,5vw,5.6rem)] leading-[0.88] tracking-[-0.045em] text-[var(--home-ink)] uppercase',
              experience.headingClassName
            )}
          >
            {experience.company}
          </h3>
        </div>

        <div className="mt-8 border-t border-[var(--home-line)] pt-4">
          {experience.position.map((position) => (
            <p
              className="flex items-center justify-between gap-4"
              key={`${position.title}-${position.date}`}
            >
              <strong className="text-base font-medium xl:text-lg">
                {position.title}
              </strong>
              <span
                className={cn(
                  editorialType.micro,
                  'font-[family-name:var(--font-home-mono)] text-[var(--home-muted)]'
                )}
              >
                {position.date}
              </span>
            </p>
          ))}
        </div>

        <p
          className={cn(
            editorialType.card,
            'mt-5 max-w-2xl font-light text-[var(--home-muted)]'
          )}
        >
          {experience.description}
        </p>
      </div>
    </article>
  )
}
