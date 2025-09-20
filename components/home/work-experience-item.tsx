import Image from 'next/image'

export interface WorkExperiencePosition {
  title: string
  date: string
}

export interface WorkExperienceType {
  company: string
  description: string
  country: string
  position: WorkExperiencePosition[]
  logo: string
  flag: string
}

export default function WorkExperienceItem({
  experience,
}: {
  experience: WorkExperienceType
}) {
  return (
    <div className="sm:w-[450px] w-screen px-3">
      <div className="relative mx-auto min-h-fit overflow-hidden rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%] bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Image
              loading="lazy"
              src={experience.flag}
              alt={experience.country}
              width={40}
              height={40}
              className="w-auto h-4 mr-2"
            />
            <p className="tracking-wider">{experience.company}</p>
          </div>
          <Image
            loading="lazy"
            src={experience.logo}
            alt={experience.company}
            width={40}
            height={40}
            className="w-auto h-10"
          />
        </div>
        <div className="flex gap-6">
          {experience.position.map((position, key) => {
            return (
              <div key={key}>
                <p className="font-medium text-sm sm:text-[1rem] mt-1">
                  {position.title}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {position.date}
                </p>
              </div>
            )
          })}
        </div>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          {experience.description}
        </p>
      </div>
    </div>
  )
}
