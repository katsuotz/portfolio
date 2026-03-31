'use client'

import { Code2Icon } from 'lucide-react'
import Image from 'next/image'

interface SkillType {
  logo: string
  name: string
  className?: string
  gray?: boolean
}

export default function Skills() {
  const skills: SkillType[] = [
    {
      logo: '/skills/js.webp',
      name: 'JavaScript',
    },
    {
      logo: '/skills/ts.webp',
      name: 'TypeScript',
    },
    {
      logo: '/skills/tailwindcss.svg',
      name: 'TailwindCSS',
    },
    {
      logo: '/skills/node.webp',
      name: 'Node.js',
    },
    {
      logo: '/skills/vue.webp',
      name: 'Vue',
    },
    {
      logo: '/skills/nuxt.svg',
      name: 'Nuxt',
      className: 'w-auto h-16',
    },
    {
      logo: '/skills/react.webp',
      name: 'React',
    },
    {
      logo: '/skills/next.webp',
      name: 'Next.js',
      className: 'w-auto h-8',
      gray: true,
    },
    {
      logo: '/skills/svelte.webp',
      name: 'Svelte',
    },
    {
      logo: '/skills/vitest.svg',
      name: 'Vitest',
    },
    {
      logo: '/skills/go.webp',
      name: 'Golang',
    },
    {
      logo: '/skills/python.webp',
      name: 'Python',
    },
    {
      logo: '/skills/php.webp',
      name: 'PHP',
      gray: true,
    },
    {
      logo: '/skills/laravel.webp',
      name: 'Laravel',
    },
    {
      logo: '/skills/mysql.webp',
      name: 'MySQL',
    },
    {
      logo: '/skills/postgre.webp',
      name: 'PostgreSQL',
    },
    {
      logo: '/skills/mongo.webp',
      name: 'MongoDB',
      className: 'w-auto h-10',
      gray: true,
    },
    {
      logo: '/skills/redis.svg',
      name: 'Redis',
    },
  ]

  return (
    <section className="relative flex flex-col justify-center items-center lg:pt-20 pt-12 lg:pb-20 pb-12 bg-white dark:bg-zinc-950 border-t-4 border-black dark:border-white">
      <h2 className="text-3xl sm:text-5xl font-black mb-16 flex items-center uppercase tracking-tighter text-black dark:text-white">
        <Code2Icon className="w-10 h-10 sm:w-12 sm:h-12 mr-4" />
        Skills
      </h2>

      <div className="container lg:max-w-5xl">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {skills.map((skill, key) => {
            return (
              <div
                key={key}
                className="flex flex-col items-center justify-center gap-3 w-32 h-32 sm:w-40 sm:h-40 border-4 border-black dark:border-white bg-green-300 dark:bg-green-800 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff] transition-transform hover:-translate-y-2 hover:translate-x-2 hover:shadow-none dark:hover:shadow-none"
              >
                <div className="bg-white dark:bg-black border-2 border-black dark:border-white p-2">
                  <Image
                    loading="lazy"
                    src={skill.logo}
                    width={100}
                    height={100}
                    alt={skill.name}
                    className={`${skill.className || 'w-auto h-12'} ${skill.gray ? 'invert dark:invert-0' : ''} object-contain`}
                  />
                </div>
                <span className="font-bold text-black dark:text-white uppercase text-xs sm:text-sm tracking-wide text-center px-2">
                  {skill.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
