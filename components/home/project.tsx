'use client'

import { ArrowRightIcon } from '@phosphor-icons/react'
import ProjectItem, { ProjectType } from '@/components/home/project-item'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { editorialType } from '@/lib/editorial-typography'

export interface ProjectProps {
  showAllProjects?: boolean
  variant?: 'bento' | 'registry'
}

const bentoCellClasses = [
  'md:col-span-7 md:row-span-4',
  'md:col-span-5 md:row-span-3',
  'md:col-span-5 md:row-span-3',
  'md:col-span-7 md:row-span-4',
]

export default function Project({
  showAllProjects = false,
  variant = 'registry',
}: ProjectProps) {
  const projects: ProjectType[] = [
    {
      logo: '/work/shieldbase.webp',
      name: 'Shieldbase AI',
      year: '2025 - Now',
      tag: 'AI',
      description:
        'A no-code platform for building and running AI-powered business workflows via a visual drag-and-drop builder.',
      image: '/project/shieldbase.webp',
      highlight: true,
    },
    {
      logo: '/work/farmbyte.webp',
      name: 'FarmByte OMS',
      year: '2025',
      tag: 'Agritech',
      description:
        'A platform to manage orders from quotation to logistics, inbound, and grading.',
      image: '/project/farmbyte_oms.webp',
      highlight: true,
    },
    {
      logo: '/project/spmb.webp',
      name: 'SPMB/PPDB Jawa Barat',
      year: '2019 - 2025',
      tag: 'Education',
      description:
        'An all-in-one web app for students in West Java, enabling seamless high school registration by providing a user-friendly platform with over 1 million users.',
      image: '/project/ppdb-1.webp',
      highlight: true,
    },
    {
      logo: '/work/paxel.webp',
      name: 'Paxel CMS',
      year: '2022 - 2025',
      tag: 'Logistics',
      description:
        'A logistics CMS that manages first-mile pickup, middle-mile, and last-mile delivery to ensure smooth and reliable operations.',
      image: '/project/paxel-cms.webp',
      highlight: true,
    },
    {
      logo: '/project/transkripid.svg',
      name: 'Transkrip.id',
      year: '2024',
      tag: 'AI',
      description:
        'A project to Transcribe Audio/Video to Text with AI Technology.',
      image: '/project/transkripid.webp',
      url: 'https://transkrip.id/',
      highlight: true,
    },
    {
      logo: '/project/dota.webp',
      name: 'Dreamocel Portfolio',
      year: '2023',
      tag: 'Portfolio',
      description:
        'A single page portfolio website for Professional Esports Dota 2 Player.',
      image: '/project/dreamocel-web.jpg',
      url: 'https://dreamocel.katsuotz.com/',
      highlight: true,
    },
    {
      logo: '/project/cek-reputasi.webp',
      name: 'Cek Reputasi',
      year: '2023',
      tag: 'Politics',
      description:
        'UI Slicing Web App for analyzing political election data, offering insights into candidate historical data.',
      image: '/project/cek-reputasi-1.webp',
    },
    {
      logo: '/project/sgara-book.webp',
      name: 'Sgara Book',
      year: '2020 - 2022',
      tag: 'Agritech',
      description:
        'An AI-driven farm management system to monitor farms on a daily basis from day one to harvest.',
      image: '/project/sgara-book-1.webp',
      url: 'https://book.sgara.id/',
      highlight: true,
    },
    {
      logo: '/project/edunex.webp',
      name: 'Edunex ITB',
      year: '2020 - 2022',
      tag: 'Education',
      description:
        'A customizable LMS designed for students and lecturers in ITB (Bandung Institute of Technology).',
      image: '/project/edunex-1.webp',
      url: 'https://edunex.itb.ac.id/',
      highlight: true,
    },
    {
      logo: '/education/unikom.webp',
      name: 'Cisco Network Education',
      year: '2021',
      tag: 'Education',
      description:
        'A web app for managing Unikom students who have taken a network class.',
      image: '/project/ccna.webp',
    },
    {
      logo: '/achievement/kemdikbud.webp',
      name: 'Virtual Exhibition LKS',
      year: '2020',
      tag: 'Education',
      description:
        'A 3d virtual showcase exhibition in Ministry of Education and Culture Indonesia yearly event for Vocational School.',
      image: '/project/virtual-exhibition.webp',
      highlight: false,
    },
    {
      logo: '/achievement/kemnaker.webp',
      name: 'eModul',
      year: '2020',
      tag: 'Education',
      description: 'Online e-book library for Ministry of Manpower Indonesia.',
      image: '/project/emodul.webp',
      highlight: false,
    },
    {
      logo: '/work/someah.webp',
      name: 'Pantau Covid-19',
      year: '2020',
      tag: 'Healthcare',
      description:
        "A web application designed to monitor the COVID virus's transmission within Indonesia.",
      image: '/project/pantau-covid.webp',
    },
    {
      logo: '/project/middle-space.webp',
      name: 'Middle Space',
      year: '2019',
      tag: 'Game',
      description:
        'Middle Space is an exhilarating shooter space game where players take on the role of a high-tech aircraft spaceship navigating through the vast cosmos.',
      image: '/project/middle-space-gameplay.jpg',
      url: 'https://middle-space.katsuotz.com',
    },
    {
      logo: '/education/smkn4.webp',
      name: 'eSchool',
      year: '2017 - 2018',
      tag: 'Education',
      description:
        'A web app to manage all aspects of school including student enrollment, teacher management, subject allocation, and scheduling.',
      image: '/project/eschool.webp',
      url: 'https://eschool.smkn4bdg.sch.id/',
    },
    {
      logo: '/education/smkn4.webp',
      name: 'SMKN 4 Landing Page',
      year: '2017',
      tag: 'Education',
      description: 'A customizable Landing Page and CMS for SMKN 4 Bandung.',
      image: '/project/smkn4-landing-page.webp',
      url: 'https://smkn4bdg.sch.id/',
    },
  ]

  const filteredProject = showAllProjects
    ? projects
    : variant === 'bento'
      ? projects.slice(0, 4)
      : projects.filter((e) => e.highlight)

  if (variant === 'bento') {
    return (
      <section
        id="selected-work"
        className="mx-auto w-full max-w-[96rem] scroll-mt-19 px-[max(1.25rem,4vw)] py-[clamp(5rem,10vw,9rem)]"
      >
        <div className="mb-[clamp(3rem,7vw,6rem)] grid max-w-[72rem] gap-[clamp(1.5rem,4vw,3rem)]">
          <p
            className={cn(
              editorialType.micro,
              'font-[family-name:var(--font-home-mono)] tracking-[0.1em] text-[var(--home-accent)] uppercase'
            )}
          >
            01 / Selected work
          </p>
          <h2 className="max-w-[14ch] font-[family-name:var(--font-home-display)] text-[clamp(2.65rem,13vw,4.5rem)] leading-[0.94] font-normal tracking-[-0.06em] text-[var(--home-ink)] uppercase lg:text-[clamp(2.9rem,6vw,6.6rem)]">
            Systems made useful.
          </h2>
          <p
            className={cn(
              editorialType.body,
              'max-w-[48ch] font-light text-[var(--home-muted)]'
            )}
          >
            A selection of platforms built for complex operations, from AI
            workflows and agriculture to education and logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:auto-rows-[minmax(9rem,auto)]">
          {filteredProject.map((project, index) => (
            <div
              key={project.name}
              className={`min-h-[26rem] max-[420px]:min-h-[23rem] ${bentoCellClasses[index]}`}
            >
              <ProjectItem project={project} variant="bento" />
            </div>
          ))}

          <Link
            href="/projects"
            className="group/archive grid grid-cols-[1fr_auto] content-center gap-x-4 gap-y-1.5 border border-[var(--home-line)] p-6 text-[var(--home-ink)] transition-colors duration-200 hover:border-[var(--home-accent)] hover:bg-[var(--home-surface)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] md:col-span-5 md:row-span-1 motion-reduce:transition-none"
          >
            <span
              className={cn(
                editorialType.micro,
                'col-start-1 font-[family-name:var(--font-home-mono)] tracking-[0.1em] text-[var(--home-accent)] uppercase'
              )}
            >
              Project registry
            </span>
            <strong className="text-[clamp(1rem,1.7vw,1.35rem)] font-medium">
              Explore the full archive
            </strong>
            <ArrowRightIcon
              className="col-start-2 row-span-2 row-start-1 size-5 self-center transition-transform duration-200 group-hover/archive:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section
      id="work"
      className="mx-auto w-full max-w-[1500px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mb-12 grid max-w-[72rem] gap-5 border-b border-[var(--home-line)] pb-8">
        <div>
          <p
            className={cn(
              editorialType.micro,
              'font-[family-name:var(--font-home-mono)] uppercase tracking-[0.18em] text-[var(--home-accent)]'
            )}
          >
            Project registry
          </p>
          <h1 className="mt-4 text-balance font-[family-name:var(--font-home-display)] text-[clamp(3.4rem,8vw,8rem)] leading-[0.86] tracking-[-0.05em] text-[var(--home-ink)]">
            Selected works.
          </h1>
        </div>
        <p
          className={cn(
            editorialType.body,
            'max-w-[52ch] text-[var(--home-muted)]'
          )}
        >
          Products, platforms, and experiments spanning AI, operations,
          education, logistics, and the public sector.
        </p>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 gap-px border border-[var(--home-line)] bg-[var(--home-line)] md:grid-cols-2 xl:grid-cols-3">
          {filteredProject.map((project) => (
            <div key={project.name} className="min-w-0 bg-[var(--home-canvas)]">
              <ProjectItem project={project} variant="registry" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
