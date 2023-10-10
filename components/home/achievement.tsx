'use client'

import 'swiper/css';
import {TrophyIcon} from "lucide-react";
import Image from "next/image";

interface AchievementType {
  logo: string
  position: string
  title: string
  organizer: string
  year: string
}

export default function Achievement() {
  const achievements: AchievementType[] = [
    {
      logo: '/achievement/worldskillsindia.png',
      position: '1st Position',
      title: 'Virtual Skills Competition - International Exhibition',
      organizer: 'WorldSkills India',
      year: '2020',
    },
    {
      logo: '/achievement/hago.png',
      position: 'Best Student Game Developer',
      title: 'Jawara Games Indonesia',
      organizer: 'Hago Indonesia',
      year: '2019',
    },
    {
      logo: '/achievement/kemnaker.png',
      position: '1st Winner',
      title: 'National Selection Web Technologies',
      organizer: 'Ministry of Manpower Indonesia',
      year: '2019',
    },
    {
      logo: '/achievement/kemdikbud.png',
      position: 'Gold Medal',
      title: 'LKS Web Design & Development',
      organizer: 'Ministry of Education and Culture Indonesia',
      year: '2018',
    },
  ]

  return (
    <section className="relative flex flex-col justify-center items-center lg:pt-20 pt-12 lg:pb-20 pb-12">
      <h3 className="text-5xl font-bold mb-12 flex items-center">
        <TrophyIcon className="w-10 h-10 mr-4"/>
        Achievement
      </h3>

      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          {achievements.map((achievement, key) => {
            return <div className="col-span-6" key={key}>
              <div className="flex flex-col items-center justify-center px-4 py-6 text-center bg-white/[10%] rounded-lg">
                <img src={achievement.logo} alt="" className="w-auto h-14 mb-4"/>
                <p className="font-bold">{achievement.position}</p>
                <p className="tracking-wider">{achievement.title}</p>
                <p className="font-light text-sm text-gray-400">{achievement.organizer}</p>
                <p className="font-light text-sm text-gray-400">{achievement.year}</p>
              </div>
            </div>
          })}

        </div>
      </div>
    </section>
  )
}
