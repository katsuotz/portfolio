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
}

export default function Achievement() {
  const achievements: AchievementType[] = [
    {
      logo: '/achievement/worldskillsindia.png',
      position: '1st Position',
      title: 'Virtual Skills Competition - International Exhibition',
      organizer: 'WorldSkills India',
      year: '2020',
      url: 'https://drive.google.com/drive/folders/1sTD1GAHAHJDOBkiFuiP5bqEFFXgWaey-?usp=drive_link',
    },
    {
      logo: '/achievement/hago.png',
      position: 'Best Student Game Developer',
      title: 'Jawara Games Indonesia',
      organizer: 'Hago Indonesia',
      year: '2019',
      url: 'https://drive.google.com/file/d/18y72Ec0a8OiRyIYYDJorMAAKELELNTMp/view?usp=drive_link',
    },
    {
      logo: '/achievement/kemnaker.png',
      position: '1st Winner',
      title: 'National Selection Web Technologies',
      organizer: 'Ministry of Manpower Indonesia',
      year: '2019',
      url: 'https://drive.google.com/file/d/19qznZ5Urq5sVVPcESLdVkNpgImlD4i1s/view?usp=drive_link',
    },
    {
      logo: '/achievement/kemdikbud.png',
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
            return <div className="col-span-12 sm:col-span-6" key={key}>
              <div className="flex flex-col items-center justify-center px-4 py-6 text-center bg-white/[10%] rounded-lg relative">
                <Image loading="lazy" src={achievement.logo} width={64} height={64} alt="" className="w-auto h-14 mb-4"/>
                <p className="font-bold tracking-wide">{achievement.position}</p>
                <p className="">{achievement.title}</p>
                <p className="font-light text-sm text-gray-400">{achievement.organizer}</p>
                <p className="font-light text-sm text-gray-400">{achievement.year}</p>
                <TooltipProvider delayDuration={0} key={key}>
                  <Tooltip>
                    <TooltipTrigger className="absolute top-4 right-4" asChild={true}>
                      <a href={achievement.url} className="" target="_blank">
                        <LinkIcon className="w-4 h-4"/>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      See Certificate
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
