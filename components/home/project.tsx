'use client'

import {ExternalLinkIcon, LayoutGridIcon, MonitorSmartphoneIcon} from "lucide-react";
import Image from "next/image";
import Atropos from "atropos/react";

interface ProjectType {
  logo: string
  name: string
  year: string
  description: string
  url?: string
}

export default function Project() {
  const projects: ProjectType[] = [
    {
      logo: '/project/ppdb.png',
      name: 'PPDB Jawa Barat',
      year: '2019 - 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      logo: '/project/sgara-book.png',
      name: 'Sgara Book',
      year: '2020 - 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      logo: '/project/edunex.png',
      name: 'Edunex ITB',
      year: '2020 - 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
  ]

  const handleClickProject = (e: React.MouseEvent<HTMLElement>, url?: string): void => {
    if (!url) e.preventDefault()
  }

  return (
    <section className="relative flex flex-col justify-center items-center lg:pt-20 pt-12 lg:pb-20 pb-12">
      <h3 className="text-3xl sm:text-5xl font-bold mb-12 flex items-center">
        <MonitorSmartphoneIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4"/>
        Projects
      </h3>

      <div className="container">
        <div className="grid grid-cols-12 gap-8">
          {
            projects.map((project, key) => {
              return <Atropos
                key={key}
                className="col col-span-3 rounded-3xl overflow-hidden"
              >
                <a
                  href={project.url}
                  target="_blank"
                  onClick={(e) => handleClickProject(e, project.url)}
                  className="px-4 h-[350px] bg-background-gradient rounded-3xl flex flex-col items-center justify-center cursor-pointer relative group/project">
                  {
                    project.url ?
                      <ExternalLinkIcon className="absolute top-6 right-6 group-hover/project:opacity-100 opacity-0 transition-all duration-500"/>
                      : ''
                  }
                  <Image src={project.logo} alt="" width={80} height={80} className="h-20 w-auto mb-8 group-hover/project:scale-110 transition-all duration-300"/>
                  <div className="text-center group-hover/project:-translate-y-3 group-hover/project:scale-105 transition-all duration-300">
                    <p className="font-bold text-xl">{project.name}</p>
                    <p className="font-bold text-xl">{project.year}</p>
                  </div>
                  <p className="absolute text-center px-5 bottom-0 opacity-0 group-hover/project:opacity-100 group-hover/project:bottom-10 transition-all duration-300">
                    {project.description}
                  </p>
                </a>
              </Atropos>
            })
          }
          <Atropos
            className="col col-span-3 rounded-3xl overflow-hidden"
          >
            <div
              className="px-4 h-[350px] bg-background-gradient rounded-3xl flex flex-col items-center justify-center cursor-pointer relative group/project">
              <LayoutGridIcon className="w-20 h-20 mb-8 stroke-[1.5]"/>
              <p className="font-bold text-xl">More</p>
            </div>
          </Atropos>
        </div>
      </div>
    </section>
  )
}
