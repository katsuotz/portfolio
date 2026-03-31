'use client'

import { CodeIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface SkillType {
  logo: string
  name: string
  className?: string
  gray?: boolean
}

export default function Skills() {
  const skills: SkillType[] = [
    { logo: '/skills/js.webp', name: 'JavaScript' },
    { logo: '/skills/ts.webp', name: 'TypeScript' },
    { logo: '/skills/tailwindcss.svg', name: 'TailwindCSS' },
    { logo: '/skills/node.webp', name: 'Node.js' },
    { logo: '/skills/vue.webp', name: 'Vue' },
    { logo: '/skills/nuxt.svg', name: 'Nuxt', className: 'w-auto h-8' },
    { logo: '/skills/react.webp', name: 'React' },
    {
      logo: '/skills/next.webp',
      name: 'Next.js',
      className: 'w-auto h-4',
      gray: true,
    },
    { logo: '/skills/svelte.webp', name: 'Svelte' },
    { logo: '/skills/vitest.svg', name: 'Vitest' },
    { logo: '/skills/go.webp', name: 'Golang' },
    { logo: '/skills/python.webp', name: 'Python' },
    { logo: '/skills/php.webp', name: 'PHP', gray: true },
    { logo: '/skills/laravel.webp', name: 'Laravel' },
    { logo: '/skills/mysql.webp', name: 'MySQL' },
    { logo: '/skills/postgre.webp', name: 'PostgreSQL' },
    {
      logo: '/skills/mongo.webp',
      name: 'MongoDB',
      className: 'w-auto h-6',
      gray: true,
    },
    { logo: '/skills/redis.svg', name: 'Redis' },
  ]

  return (
    <section
      id="tech-stack"
      className="relative flex flex-col justify-center items-center py-12 sm:py-32 w-full max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="flex items-center justify-center gap-4 mb-10 sm:mb-16 intro-y w-full">
        <CodeIcon
          className="w-8 h-8 sm:w-14 sm:h-14 text-violet-500 shrink-0"
          weight="regular"
        />
        <h2 className="text-3xl sm:text-6xl font-serif font-bold text-[#FAFAFA] tracking-tight text-center whitespace-nowrap">
          Tech Stack
        </h2>
      </div>

      <div className="w-full">
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <TooltipProvider delayDuration={0} key={index}>
              <Tooltip>
                <TooltipTrigger aria-label={skill.name}>
                  <div
                    className="intro-y group flex items-center justify-center h-16 min-w-16 px-5 rounded-2xl bg-white/2 backdrop-blur-md border border-white/5 hover:bg-white/5 hover:border-violet-500/30 transition-all duration-300 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_20px_-5px_rgba(139,92,246,0.15)] hover:-translate-y-1"
                    style={{ animationDelay: `${0.05 * index}s` }}
                  >
                    <Image
                      loading="lazy"
                      src={skill.logo}
                      width={80}
                      height={80}
                      alt={skill.name}
                      className={`${skill.className || 'w-auto h-8'} ${skill.gray ? 'invert dark:invert-0' : ''} opacity-80 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm`}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="text-black">
                  {skill.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  )
}
