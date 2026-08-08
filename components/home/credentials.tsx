import Image from 'next/image'
import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr'
import { cn } from '@/lib/utils'
import { editorialType } from '@/lib/editorial-typography'

const achievements = [
  {
    position: '1st Position',
    title: 'Virtual Skills Competition — International Online Exhibition',
    organizer: 'WorldSkills India',
    year: '2020',
    url: 'https://drive.google.com/drive/folders/1sTD1GAHAHJDOBkiFuiP5bqEFFXgWaey-?usp=drive_link',
  },
  {
    position: 'Best Student Game Developer',
    title: 'Jawara Games Indonesia',
    organizer: 'Hago Indonesia',
    year: '2019',
    url: 'https://drive.google.com/file/d/18y72Ec0a8OiRyIYYDJorMAAKELELNTMp/view?usp=drive_link',
  },
  {
    position: '1st Winner',
    title: 'National Selection Web Technologies',
    organizer: 'Ministry of Manpower Indonesia',
    year: '2019',
    url: 'https://drive.google.com/file/d/19qznZ5Urq5sVVPcESLdVkNpgImlD4i1s/view?usp=drive_link',
  },
  {
    position: 'Gold Medal',
    title: 'LKS Web Design & Development',
    organizer: 'Ministry of Education and Culture Indonesia',
    year: '2018',
    url: 'https://drive.google.com/file/d/10sOrssOTDtQphctoZLxqcFMmm3Ab8Jj1/view?usp=drive_link',
  },
]

const skillGroups = [
  {
    label: 'Interfaces',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Vue',
      'Nuxt',
      'Svelte',
      'Tailwind CSS',
    ],
  },
  {
    label: 'Systems',
    skills: ['Node.js', 'Go', 'Python', 'PHP', 'Laravel', 'Vitest'],
  },
  {
    label: 'Data',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
]

const education = [
  {
    logo: '/education/unikom.webp',
    school: 'Universitas Komputer Indonesia',
    degree: 'Bachelor Degree',
    subject: 'Information System',
    year: '2023',
  },
  {
    logo: '/education/smkn4.webp',
    school: 'SMK Negeri 4 Bandung',
    degree: 'Vocational High School',
    subject: 'Software Engineering',
    year: '2018',
  },
]

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="mx-auto w-full max-w-[96rem] scroll-mt-19 border-t border-[var(--home-line)] px-[max(1.25rem,4vw)] py-[clamp(6rem,12vw,11rem)] md:pl-[calc(max(1.25rem,4vw)+1.75rem)]"
    >
      <div className="mb-[clamp(3rem,7vw,6rem)] grid max-w-[72rem] gap-[clamp(1.5rem,4vw,3rem)]">
        <div className="flex items-center justify-between border-y border-[var(--home-line)] py-3">
          <p
            className={cn(
              'font-[family-name:var(--font-home-mono)] tracking-[0.1em] text-[var(--home-accent)] uppercase',
              editorialType.micro
            )}
          >
            03 / Credentials
          </p>
          <span
            className={cn(
              'font-[family-name:var(--font-home-mono)] tracking-[0.1em] text-[var(--home-muted)] uppercase',
              editorialType.micro
            )}
          >
            Evidence index
          </span>
        </div>
        <h2 className="max-w-[14ch] font-[family-name:var(--font-home-display)] text-[clamp(2.65rem,13vw,4.5rem)] leading-[0.94] font-normal tracking-[-0.06em] text-[var(--home-ink)] uppercase lg:text-[clamp(2.9rem,6vw,6.6rem)]">
          Proof, practice, and the tools between.
        </h2>
        <p
          className={cn(
            'font-light text-[var(--home-muted)] md:col-start-2 lg:col-auto',
            editorialType.body
          )}
        >
          Formal education, national recognition, and a working stack shaped by
          products that had to perform outside the prototype.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
        <article className="home-ledger-panel border border-[var(--home-line)] bg-[var(--home-surface)] transition-[background-color,color,border-color] duration-200 md:col-span-6 lg:col-span-5 motion-reduce:transition-none">
          <div
            className={cn(
              'flex justify-between gap-4 border-b border-[var(--home-line)] px-5 py-4 font-[family-name:var(--font-home-mono)] tracking-[0.1em] text-[var(--home-accent)] uppercase',
              editorialType.micro
            )}
          >
            <span>Education</span>
            <span className="text-[var(--home-muted)]">02 institutions</span>
          </div>
          <div className="p-[clamp(1.5rem,3vw,2.5rem)]">
            {education.map((item) => (
              <div
                className="grid grid-cols-[auto_1fr] gap-5 border-t border-[var(--home-line)] py-6 first:border-t-0"
                key={item.school}
              >
                <div className="grid size-18 place-items-center border border-[var(--home-line)] bg-[var(--home-panel-tint)] p-2.5 [&_img]:h-full [&_img]:w-full [&_img]:object-contain">
                  <Image
                    loading="lazy"
                    src={item.logo}
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <div className="min-w-0">
                  <p
                    className={cn(
                      'font-[family-name:var(--font-home-mono)] text-[var(--home-accent)]',
                      editorialType.micro
                    )}
                  >
                    {item.year}
                  </p>
                  <h3 className="mt-1.5 text-[clamp(1.1rem,2vw,1.55rem)] leading-[1.15] font-medium">
                    {item.school}
                  </h3>
                  <span
                    className={cn(
                      'mt-2 block text-[var(--home-muted)]',
                      editorialType.secondary
                    )}
                  >
                    {item.degree} · {item.subject}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="home-ledger-panel border border-[var(--home-line)] bg-[var(--home-surface)] transition-[background-color,color,border-color] duration-200 md:col-span-6 lg:col-span-7 motion-reduce:transition-none">
          <div
            className={cn(
              'flex justify-between gap-4 border-b border-[var(--home-line)] px-5 py-4 font-[family-name:var(--font-home-mono)] tracking-[0.1em] text-[var(--home-accent)] uppercase',
              editorialType.micro
            )}
          >
            <span>Recognition</span>
            <span className="text-[var(--home-muted)]">2018 — 2020</span>
          </div>
          <div className="px-[clamp(1.5rem,3vw,2.5rem)]">
            {achievements.map((achievement) => (
              <a
                href={achievement.url}
                target="_blank"
                rel="noreferrer"
                className="group/award grid min-h-28 grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-[var(--home-subtle-line-strong)] py-4 last:border-b-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)]"
                key={achievement.title}
              >
                <span
                  className={cn(
                    'font-[family-name:var(--font-home-mono)] text-[var(--home-accent)]',
                    editorialType.micro
                  )}
                >
                  {achievement.year}
                </span>
                <span className="min-w-0">
                  <strong
                    className={cn('block font-medium', editorialType.card)}
                  >
                    {achievement.position}
                  </strong>
                  <small
                    className={cn(
                      'mt-1 block font-light text-[var(--home-muted)]',
                      editorialType.secondary
                    )}
                  >
                    {achievement.title} · {achievement.organizer}
                  </small>
                </span>
                <ArrowUpRightIcon
                  className="size-4 text-[var(--home-muted)] transition-[color,transform] duration-200 group-hover/award:-translate-y-0.5 group-hover/award:translate-x-0.5 group-hover/award:text-[var(--home-accent)] motion-reduce:transform-none motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </article>

        <article className="home-ledger-panel border border-[var(--home-line)] bg-[var(--home-surface)] transition-[background-color,color,border-color] duration-200 md:col-span-12 motion-reduce:transition-none">
          <div
            className={cn(
              'flex justify-between gap-4 border-b border-[var(--home-line)] px-5 py-4 font-[family-name:var(--font-home-mono)] tracking-[0.1em] text-[var(--home-accent)] uppercase',
              editorialType.micro
            )}
          >
            <span>Working stack</span>
            <span className="text-[var(--home-muted)]">18 technologies</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1.4fr_1fr]">
            {skillGroups.map((group) => (
              <div
                className="border-t border-[var(--home-line)] p-[clamp(1.5rem,3vw,2.5rem)] first:border-t-0 md:min-h-56 md:border-t-0 md:border-l md:first:border-l-0"
                key={group.label}
              >
                <p
                  className={cn(
                    'mb-8 font-[family-name:var(--font-home-mono)] tracking-[0.08em] text-[var(--home-muted)] uppercase',
                    editorialType.micro
                  )}
                >
                  {group.label}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      className={cn(
                        'border border-[var(--home-line)] px-3 py-2 text-[var(--home-ink)]',
                        editorialType.secondary
                      )}
                      key={skill}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
