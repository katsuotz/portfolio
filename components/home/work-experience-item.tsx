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
    <div className="group flex flex-col sm:flex-row gap-6 w-full">
      {/* Timeline Node - Desktop */}
      <div className="hidden sm:flex flex-col items-center mt-2 z-10">
        <div className="w-14 h-14 rounded-full bg-[#0F0F0F] border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-violet-500/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 ml-0.5">
          <Image
            loading="lazy"
            src={experience.logo}
            alt={experience.company}
            width={32}
            height={32}
            className="w-auto h-7 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 rounded-2xl bg-white/2 backdrop-blur-xl border border-white/5 p-6 hover:bg-white/4 hover:border-violet-500/30 transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              {/* Mobile Logo */}
              <div className="sm:hidden w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Image
                  loading="lazy"
                  src={experience.logo}
                  alt={experience.company}
                  width={24}
                  height={24}
                  className="w-auto h-5 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#FAFAFA] tracking-wide">
                {experience.company}
              </h3>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/5">
                <Image
                  loading="lazy"
                  src={experience.flag}
                  alt={experience.country}
                  width={16}
                  height={16}
                  className="w-4"
                  style={{ height: 'auto' }}
                />
                <span className="text-[10px] text-gray-400 uppercase tracking-wider hidden sm:inline-block">
                  {experience.country}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-3">
              {experience.position.map((position, key) => (
                <div
                  key={key}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"
                >
                  <span className="text-violet-400 font-medium">
                    {position.title}
                  </span>
                  <span className="hidden sm:inline-block text-gray-600">
                    •
                  </span>
                  <span className="text-sm text-gray-400 font-mono tracking-wide">
                    {position.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed font-light">
          {experience.description}
        </p>
      </div>
    </div>
  )
}
