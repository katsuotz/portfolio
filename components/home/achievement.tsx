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
    <section className="relative flex flex-col justify-center items-center lg:pt-20 pt-12 lg:pb-20 pb-12 section-gradient">
      <h2 className="text-3xl sm:text-5xl font-bold mb-12 flex items-center section-title">
        <TrophyIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4 icon-glow text-amber-500 dark:text-amber-400" />
        Achievement
      </h2>

      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          {achievements.map((achievement, key) => {
            return (
              <div className="col-span-12" key={key}>
                <div className="relative mx-auto min-h-fit w-full max-w-[600px] rounded-2xl p-4 glass-card-enhanced hover:border-amber-500/30 dark:hover:border-amber-400/30 transition-all duration-300">
                  <div className="flex gap-6 items-center">
                    <Image
                      loading="lazy"
                      src={achievement.logo}
                      width={64}
                      height={64}
                      alt={achievement.organizer}
                      className={`w-auto h-14 ${achievement.gray ? 'invert dark:invert-0' : ''}`}
                    />
                    <div>
                      <p className="font-bold tracking-wide text-lg sm:text-xl text-slate-800 dark:text-slate-100">
                        {achievement.position}
                      </p>
                      <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium">
                        {achievement.title}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {achievement.organizer} - {achievement.year}
                      </p>
                    </div>
                  </div>
                  <TooltipProvider delayDuration={0} key={key}>
                    <Tooltip>
                      <TooltipTrigger
                        className="absolute top-4 right-4"
                        asChild={true}
                      >
                        <a
                          href={achievement.url}
                          className=""
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">
                            {achievement.title} Certificate
                          </span>
                          <LinkIcon className="w-4 h-4 text-amber-500 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent
                        className="!bg-slate-900 !text-white border-0 text-xs [&>span]:!text-white"
                        arrowClassName="!fill-slate-900 !bg-slate-900"
                      >
                        View Certificate
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
