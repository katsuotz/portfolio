'use client'

import {LinkIcon, TrophyIcon} from "lucide-react";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

interface AchievementType {
  logo: string
  position: string
  title: string
  organizer: string
  year: string
  url: string
  gray?: boolean,
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
    <section className="relative flex flex-col justify-center items-center lg:pt-20 pt-12 lg:pb-20 pb-12">
      <h3 className="text-3xl sm:text-5xl font-bold mb-12 flex items-center">
        <TrophyIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4"/>
        Achievement
      </h3>

      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          {achievements.map((achievement, key) => {
            return <div className="col-span-12" key={key}>
              <div className="relative mx-auto min-h-fit w-full max-w-[600px] rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%] bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
                <div className="flex gap-6 items-center">
                  <Image loading="lazy" src={achievement.logo} width={64} height={64} alt={achievement.organizer}
                         className={`w-auto h-14 ${achievement.gray ? 'invert dark:invert-0' : ''}`}
                  />
                  <div>
                    <p className="font-bold tracking-wide">{achievement.position}</p>
                    <p>{achievement.title}</p>
                    <p className="font-light text-sm text-gray-600 dark:text-gray-400">{achievement.organizer} - {achievement.year}</p>
                  </div>
                </div>
                <TooltipProvider delayDuration={0} key={key}>
                  <Tooltip>
                    <TooltipTrigger className="absolute top-4 right-4" asChild={true}>
                      <a href={achievement.url} className="" target="_blank">
                        <LinkIcon className="w-4 h-4"/>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      View Certificate
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}
