'use client'

import { LinkIcon, TrophyIcon } from 'lucide-react'
import Image from 'next/image'

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
    <section className="relative flex flex-col justify-center items-center lg:pt-20 pt-12 lg:pb-20 pb-12 bg-zinc-100 dark:bg-zinc-900 border-t-4 border-black dark:border-white">
      <h2 className="text-3xl sm:text-5xl font-black mb-16 flex items-center uppercase tracking-tighter text-black dark:text-white">
        <TrophyIcon className="w-10 h-10 sm:w-12 sm:h-12 mr-4" />
        Achievement
      </h2>

      <div className="container max-w-4xl">
        <div className="flex flex-col gap-6">
          {achievements.map((achievement, key) => {
            return (
              <div
                key={key}
                className="relative w-full border-4 border-black dark:border-white bg-white dark:bg-black p-4 sm:p-6 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff] transition-transform hover:-translate-y-2 hover:translate-x-2 hover:shadow-none dark:hover:shadow-none group"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-white p-3 shrink-0">
                    <Image
                      loading="lazy"
                      src={achievement.logo}
                      width={64}
                      height={64}
                      alt={achievement.organizer}
                      className={`w-auto h-14 object-contain ${achievement.gray ? 'invert dark:invert-0' : ''}`}
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="font-black uppercase tracking-tight text-xl sm:text-2xl text-black dark:text-white leading-tight">
                      {achievement.position}
                    </p>
                    <p className="text-lg text-black dark:text-white font-bold mt-1">
                      {achievement.title}
                    </p>
                    <div className="inline-flex border-t-2 border-black dark:border-white pt-2 mt-2">
                      <p className="text-base font-medium text-black dark:text-white uppercase">
                        {achievement.organizer} • {achievement.year}
                      </p>
                    </div>
                  </div>
                  <a
                    href={achievement.url}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-4 right-4 sm:relative sm:top-0 sm:right-0 bg-yellow-300 dark:bg-yellow-600 border-2 border-black dark:border-white p-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    aria-label="View Certificate"
                  >
                    <LinkIcon className="w-6 h-6 text-black dark:text-white group-hover:text-white dark:group-hover:text-black" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
