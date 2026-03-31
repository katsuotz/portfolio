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
  index = 0,
}: {
  experience: WorkExperienceType
  index?: number
}) {
  const bgColors = [
    'bg-blue-300 dark:bg-blue-800',
    'bg-red-300 dark:bg-red-800',
    'bg-green-300 dark:bg-green-800',
    'bg-yellow-300 dark:bg-yellow-600',
    'bg-purple-300 dark:bg-purple-800',
  ]
  const bgColor = bgColors[index % bgColors.length]

  return (
    <div className="sm:w-[450px] w-[85vw] pb-4">
      <div
        className={`relative min-h-full border-4 border-black dark:border-white p-6 md:p-8 ${bgColor} shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff] transition-transform hover:-translate-y-2 hover:translate-x-2 hover:shadow-none dark:hover:shadow-none flex flex-col h-full`}
      >
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-black border-2 border-black dark:border-white px-3 py-1 self-start">
              <Image
                loading="lazy"
                src={experience.flag}
                alt={experience.country}
                width={24}
                height={24}
                className="w-auto h-4"
              />
              <span className="font-bold text-sm uppercase text-black dark:text-white">
                {experience.country}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black dark:text-white leading-none mt-2">
              {experience.company}
            </h3>
          </div>
          <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-2">
            <Image
              loading="lazy"
              src={experience.logo}
              alt={experience.company}
              width={48}
              height={48}
              className="w-auto h-12 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-6 flex-grow">
          {experience.position.map((position, key) => {
            return (
              <div
                key={key}
                className="bg-white dark:bg-black border-2 border-black dark:border-white p-3"
              >
                <p className="font-black text-lg uppercase text-black dark:text-white leading-tight">
                  {position.title}
                </p>
                <p className="font-bold text-sm text-black dark:text-white mt-1 border-t-2 border-black dark:border-white pt-1">
                  {position.date}
                </p>
              </div>
            )
          })}
        </div>

        <p className="font-medium text-black dark:text-white text-base md:text-lg border-t-4 border-black dark:border-white pt-4 mt-auto">
          {experience.description}
        </p>
      </div>
    </div>
  )
}
