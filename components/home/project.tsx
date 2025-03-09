'use client'

import {LayoutGridIcon, MonitorSmartphoneIcon} from "lucide-react";
import ProjectItem, {ProjectType} from "@/components/home/project-item";
import Link from "next/link";

export default function Project({showAllProjects = false}) {
  const projects: ProjectType[] = [
    {
      logo: '/project/transkripid.svg',
      name: 'Transkrip.id',
      year: '2024',
      description: 'A project to Transcribe Audio/Video to Text with AI Technology.',
      image: '/project/transkripid.jpg',
      url: 'https://transkrip.id/',
      highlight: true,
    },
    {
      logo: '/project/ppdb.webp',
      name: 'PPDB Jawa Barat',
      year: '2019 - 2024',
      description: 'An all-in-one web app for students in West Java, enabling seamless high school registration by providing a user-friendly platform.',
      image: '/project/ppdb-1.png',
      highlight: true,
    },
    {
      logo: '/project/dota.png',
      name: 'Dreamocel Portfolio',
      year: '2023',
      description: 'A single page portfolio website for Professional Esports Dota 2 Player.',
      image: '/project/dreamocel-web.jpg',
      url: 'https://dreamocel.katsuotz.com/',
      highlight: true,
    },
    {
      logo: '/project/cek-reputasi.png',
      name: 'Cek Reputasi',
      year: '2023',
      description: 'UI Slicing Web App for analyzing political election data, offering insights into candidate historical data.',
      image: '/project/cek-reputasi-1.jpg',
    },
    {
      logo: '/project/sgara-book.png',
      name: 'Sgara Book',
      year: '2020 - 2022',
      description: 'An AI-driven farm management system to monitor farms on a daily basis from day one to harvest.',
      image: '/project/sgara-book-1.jpg',
      url: 'https://book.sgara.id/',
      highlight: true,
    },
    {
      logo: '/project/edunex.png',
      name: 'Edunex ITB',
      year: '2020 - 2022',
      description: 'A customizable LMS designed for students and lecturers in ITB (Bandung Institute of Technology).',
      image: '/project/edunex-1.jpg',
      url: 'https://edunex.itb.ac.id/',
      highlight: true,
    },
    {
      logo: '/education/unikom.webp',
      name: 'Cisco Network Education',
      year: '2021',
      description: 'A web app for managing Unikom students who have taken a network class.',
      image: '/project/ccna.png',
    },
    {
      logo: '/achievement/kemdikbud.webp',
      name: 'Virtual Exhibition LKS',
      year: '2020',
      description: 'A 3d virtual showcase exhibition in Ministry of Education and Culture Indonesia yearly event for Vocational School.',
      image: '/project/virtual-exhibition.png',
      highlight: true,
    },
    {
      logo: '/achievement/kemnaker.webp',
      name: 'eModul',
      year: '2020',
      description: 'Online e-book library for Ministry of Manpower Indonesia.',
      image: '/project/emodul.png',
      highlight: true,
    },
    {
      logo: '/work/someah.jpg',
      name: 'Pantau Covid-19',
      year: '2020',
      description: 'A web application designed to monitor the COVID virus\'s transmission within Indonesia.',
      image: '/project/pantau-covid.png',
    },
    {
      logo: '/project/middle-space.png',
      name: 'Middle Space',
      year: '2019',
      description: 'Middle Space is an exhilarating shooter space game where players take on the role of a high-tech aircraft spaceship navigating through the vast cosmos.',
      image: '/project/middle-space-gameplay.jpg',
      url: 'https://katsuotz.itch.io/middle-space',
    },
    {
      logo: '/education/smkn4.png',
      name: 'eSchool',
      year: '2017 - 2018',
      description: 'A web app to manage all aspects of school including student enrollment, teacher management, subject allocation, and scheduling.',
      image: '/project/eschool.jpg',
      url: 'https://eschool.smkn4bdg.sch.id/',
    },
    {
      logo: '/education/smkn4.png',
      name: 'SMKN 4 Landing Page',
      year: '2017',
      description: 'A customizable Landing Page and CMS for SMKN 4 Bandung.',
      image: '/project/smkn4-landing-page.jpg',
      url: 'https://smkn4bdg.sch.id/',
    },
  ]

  const filteredProject = showAllProjects ? projects : projects.filter(e => e.highlight)

  return (
    <section className="relative flex flex-col justify-center items-center lg:pt-20 pt-12 lg:pb-20 pb-12">
      <h3 className="text-3xl sm:text-5xl font-bold mb-12 flex items-center">
        <MonitorSmartphoneIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4"/>
        Projects
      </h3>

      <div className="container">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {
            filteredProject.map((project, key) => {
              return <ProjectItem project={project} key={key} />
            })
          }
          { !showAllProjects ?
              <Link href="/projects" className="col col-span-12 xs:col-span-6 md:col-span-3 group/project intro-y">
                <div
                  className="px-4 w-full sm:h-[350px] h-[240px] flex flex-col justify-center relative cursor-pointer overflow-hidden rounded-3xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div className="flex flex-col items-center relative">
                  <LayoutGridIcon className="w-20 h-20 mb-8 stroke-[1.5]"/>
                  <p className="font-bold text-xl">More</p>
                  </div>
                </div>
              </Link> : ''
          }
        </div>
      </div>
    </section>
  )
}
