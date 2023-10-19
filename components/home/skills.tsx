'use client'

import {Code2Icon} from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface SkillType {
  logo: string
  name: string
  className?: string
}

export default function Skills() {
  const skills: SkillType[] = [
    {
      logo: '/skills/js.png',
      name: 'JavaScript',
    },
    {
      logo: '/skills/ts.png',
      name: 'TypeScript',
    },
    {
      logo: '/skills/node.png',
      name: 'Node.js',
    },
    {
      logo: '/skills/vue.png',
      name: 'Vue',
    },
    {
      logo: '/skills/react.png',
      name: 'React',
    },
    {
      logo: '/skills/next.png',
      name: 'Next.js',
      className: 'w-auto h-6'
    },
    {
      logo: '/skills/go.png',
      name: 'Golang',
    },
    {
      logo: '/skills/php.png',
      name: 'PHP',
    },
    {
      logo: '/skills/laravel.png',
      name: 'Laravel',
    },
    {
      logo: '/skills/mysql.png',
      name: 'MySQL',
    },
    {
      logo: '/skills/postgre.png',
      name: 'PostgreSQL',
    },
    {
      logo: '/skills/mongo.png',
      name: 'MongoDB',
      className: 'w-auto h-8'
    },
  ]

  return (
    <section className="relative flex flex-col justify-center items-center lg:pt-20 pt-12 lg:pb-20 pb-12">
      <h3 className="text-3xl sm:text-5xl font-bold mb-12 flex items-center">
        <Code2Icon className="w-8 h-8 sm:w-10 sm:h-10 mr-4"/>
        Skills
      </h3>

      <div className="container lg:max-w-[800px]">
        <div className="flex flex-wrap gap-x-6 gap-y-8 justify-center">
          {skills.map((skill,key) => {
            return <TooltipProvider delayDuration={0} key={key}>
              <Tooltip>
                <TooltipTrigger aria-label={skill.name}><Image key={key} loading="lazy" src={skill.logo} width={100} height={100} alt="" className={skill.className || 'w-auto h-12'}/></TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          })}
        </div>
      </div>
    </section>
  )
}
