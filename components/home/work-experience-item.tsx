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
      <div className="relative mx-auto min-h-fit overflow-hidden rounded-2xl p-5 glass-card-enhanced hover:border-purple-500/30 dark:hover:border-purple-400/30 transition-all duration-300">
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
            <p className="tracking-wider text-slate-800 dark:text-slate-100 font-bold">
              {experience.company}
            </p>
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
                <p className="font-medium text-sm sm:text-[1rem] mt-1 text-slate-700 dark:text-slate-200">
                  {position.title}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {position.date}
                </p>
              </div>
            )
          })}
        </div>
        <p className="mt-1 text-slate-600 dark:text-slate-300">
          {experience.description}
        </p>
      </div>
    </div>
  )
}
