'use client'

import { LayoutGridIcon, MonitorSmartphoneIcon } from 'lucide-react'
import ProjectItem, { ProjectType } from '@/components/home/project-item'
import Link from 'next/link'

export default function Project({ showAllProjects = false }) {
  const projects: ProjectType[] = [
    {
      logo: '/work/farmbyte.webp',
      name: 'FarmByte OMS',
      year: '2025',
      description:
        'A platform to manage orders from quotation to logistics, inbound, and grading.',
      image: '/project/farmbyte_oms.webp',
      highlight: true,
    },
    {
      logo: '/project/spmb.webp',
      name: 'SPMB/PPDB Jawa Barat',
      year: '2019 - 2025',
      description:
        'An all-in-one web app for students in West Java, enabling seamless high school registration by providing a user-friendly platform with over 1 million users.',
      image: '/project/ppdb-1.webp',
      highlight: true,
    },
    {
      logo: '/work/paxel.webp',
      name: 'Paxel CMS',
      year: '2022 - 2025',
      description:
        'A logistics CMS that manages first-mile pickup, middle-mile, and last-mile delivery to ensure smooth and reliable operations.',
      image: '/project/paxel-cms.webp',
      highlight: true,
    },
    {
      logo: '/project/transkripid.svg',
      name: 'Transkrip.id',
      year: '2024',
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
      description:
        'UI Slicing Web App for analyzing political election data, offering insights into candidate historical data.',
      image: '/project/cek-reputasi-1.webp',
    },
    {
      logo: '/project/sgara-book.webp',
      name: 'Sgara Book',
      year: '2020 - 2022',
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
      description:
        'A web app for managing Unikom students who have taken a network class.',
      image: '/project/ccna.webp',
    },
    {
      logo: '/achievement/kemdikbud.webp',
      name: 'Virtual Exhibition LKS',
      year: '2020',
      description:
        'A 3d virtual showcase exhibition in Ministry of Education and Culture Indonesia yearly event for Vocational School.',
      image: '/project/virtual-exhibition.webp',
      highlight: false,
    },
    {
      logo: '/achievement/kemnaker.webp',
      name: 'eModul',
      year: '2020',
      description: 'Online e-book library for Ministry of Manpower Indonesia.',
      image: '/project/emodul.webp',
      highlight: false,
    },
    {
      logo: '/work/someah.webp',
      name: 'Pantau Covid-19',
      year: '2020',
      description:
        "A web application designed to monitor the COVID virus's transmission within Indonesia.",
      image: '/project/pantau-covid.webp',
    },
    {
      logo: '/project/middle-space.webp',
      name: 'Middle Space',
      year: '2019',
      description:
        'Middle Space is an exhilarating shooter space game where players take on the role of a high-tech aircraft spaceship navigating through the vast cosmos.',
      image: '/project/middle-space-gameplay.jpg',
      url: 'https://middle-space.katsuotz.com',
    },
    {
      logo: '/education/smkn4.webp',
      name: 'eSchool',
      year: '2017 - 2018',
      description:
        'A web app to manage all aspects of school including student enrollment, teacher management, subject allocation, and scheduling.',
      image: '/project/eschool.webp',
      url: 'https://eschool.smkn4bdg.sch.id/',
    },
    {
      logo: '/education/smkn4.webp',
      name: 'SMKN 4 Landing Page',
      year: '2017',
      description: 'A customizable Landing Page and CMS for SMKN 4 Bandung.',
      image: '/project/smkn4-landing-page.webp',
      url: 'https://smkn4bdg.sch.id/',
    },
  ]

  const filteredProject = showAllProjects
    ? projects
    : projects.filter((e) => e.highlight)

  return (
    <section className="relative flex flex-col justify-center items-center py-12 sm:py-32 w-full max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-center gap-4 mb-10 sm:mb-20 intro-y w-full">
        <MonitorSmartphoneIcon className="w-8 h-8 sm:w-12 sm:h-12 text-violet-500 shrink-0" />
        <h2 className="text-3xl sm:text-7xl font-serif font-black text-[#FAFAFA] tracking-tighter text-center whitespace-nowrap">
          Selected Works
        </h2>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProject.map((project, index) => (
            <div
              key={index}
              className="intro-y"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <ProjectItem project={project} />
            </div>
          ))}
          {!showAllProjects && (
            <Link
              href="/projects"
              className="group/project intro-y block h-full min-h-[350px]"
              style={{ animationDelay: `${0.1 * filteredProject.length}s` }}
            >
              <span className="sr-only">View All Projects</span>
              <div className="h-full w-full p-8 flex flex-col justify-center items-center relative overflow-hidden rounded-2xl bg-white/2 backdrop-blur-xl border border-white/5 hover:bg-white/4 hover:border-violet-500/30 transition-all duration-500 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-linear-to-br from-violet-500/5 to-transparent opacity-0 group-hover/project:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/project:border-violet-500/50 group-hover/project:scale-110 transition-all duration-300">
                    <LayoutGridIcon className="w-10 h-10 text-gray-400 group-hover/project:text-violet-400 transition-colors" />
                  </div>
                  <p className="font-serif font-bold tracking-wide text-3xl text-gray-300 group-hover/project:text-[#FAFAFA] transition-colors">
                    View Registry
                  </p>
                  <p className="text-gray-400 text-base font-medium">
                    Explore all projects & experiments
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
