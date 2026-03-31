'use client'

import { LinkIcon, TrophyIcon } from 'lucide-react'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface AchievementType {
  logo: string
  position: string
  title: string
  organizer: string
  year: string
  url: string
  gray?: boolean
}

export default function Achievement() {
  const achievements: AchievementType[] = [
    {
      logo: '/achievement/worldskillsindia.webp',
      position: '1st Position',
      title: 'Virtual Skills Competition - International Online Exhibition',
      organizer: 'WorldSkills India',
      year: '2020',
      url: 'https://drive.google.com/drive/folders/1sTD1GAHAHJDOBkiFuiP5bqEFFXgWaey-?usp=drive_link',
      gray: true,
    },
    {
      logo: '/achievement/hago.webp',
      position: 'Best Student Game Developer',
      title: 'Jawara Games Indonesia',
      organizer: 'Hago Indonesia',
      year: '2019',
      url: 'https://drive.google.com/file/d/18y72Ec0a8OiRyIYYDJorMAAKELELNTMp/view?usp=drive_link',
    },
    {
      logo: '/achievement/kemnaker.webp',
      position: '1st Winner',
      title: 'National Selection Web Technologies',
      organizer: 'Ministry of Manpower Indonesia',
      year: '2019',
      url: 'https://drive.google.com/file/d/19qznZ5Urq5sVVPcESLdVkNpgImlD4i1s/view?usp=drive_link',
    },
    {
      logo: '/achievement/kemdikbud.webp',
      position: 'Gold Medal',
      title: 'LKS Web Design & Development',
      organizer: 'Ministry of Education and Culture Indonesia',
      year: '2018',
      url: 'https://drive.google.com/file/d/10sOrssOTDtQphctoZLxqcFMmm3Ab8Jj1/view?usp=drive_link',
    },
  ]

  return (
    <section
      id="achievement"
      className="relative flex flex-col justify-center items-center py-12 sm:py-32 w-full max-w-4xl mx-auto px-4 sm:px-6"
    >
      <div className="flex items-center justify-center gap-4 mb-10 sm:mb-20 intro-y w-full">
        <TrophyIcon className="w-8 h-8 sm:w-12 sm:h-12 text-violet-500 shrink-0" />
        <h2 className="text-3xl sm:text-7xl font-serif font-black text-[#FAFAFA] tracking-tighter text-center whitespace-nowrap">
          Achievement
        </h2>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 gap-8">
          {achievements.map((achievement, index) => (
            <div
              className="intro-y w-full"
              key={index}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative mx-auto w-full rounded-3xl p-6 sm:p-8 bg-white/2 backdrop-blur-xl border border-white/5 hover:bg-white/4 hover:border-violet-500/30 transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] group flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
                <div className="w-20 h-20 shrink-0 rounded-2xl bg-white/3 flex items-center justify-center border border-white/5 p-4 group-hover:border-violet-500/20 transition-all duration-300">
                  <Image
                    loading="lazy"
                    src={achievement.logo}
                    width={80}
                    height={80}
                    alt={achievement.organizer}
                    className={`w-full h-full object-contain ${achievement.gray ? 'invert dark:invert-0 opacity-70' : ''}`}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                    <p className="font-bold tracking-wide text-xl sm:text-2xl text-[#FAFAFA] group-hover:text-violet-400 transition-colors">
                      {achievement.position}
                    </p>
                    <span className="hidden sm:inline-block text-gray-600">
                      •
                    </span>
                    <p className="text-base font-mono text-gray-500 font-medium">
                      {achievement.year}
                    </p>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-300 font-medium mb-2">
                    {achievement.title}
                  </p>
                  <p className="text-base text-gray-500 font-light">
                    {achievement.organizer}
                  </p>
                </div>

                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={achievement.url}
                        className="absolute top-6 right-6 sm:static sm:top-auto sm:right-auto sm:ml-auto w-12 h-12 rounded-full bg-white/3 border border-white/5 flex items-center justify-center hover:bg-violet-500/10 hover:border-violet-500/50 hover:text-violet-400 text-gray-400 transition-all duration-300"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">
                          {achievement.title} Certificate
                        </span>
                        <LinkIcon className="w-5 h-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>View Certificate</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
