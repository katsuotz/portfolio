import Image from "next/image";

export interface WorkExperiencePosition {
  title: string
  date: string
}

export interface WorkExperienceType {
  company: string
  description: string
  position: WorkExperiencePosition[]
  logo: string
}

export default function WorkExperienceItem({experience}: { experience:WorkExperienceType }) {
  return (
    <div className="sm:w-[450px] w-screen px-5">
      <div
        className="flex flex-col items-center justify-center px-4 py-6 text-center bg-background-gradient rounded-lg">
        <Image src={experience.logo} alt="" width={40} height={40} className="w-auto h-10 mb-1.5"/>
        <p className="mb-2 tracking-wider">{experience.company}</p>
        <div className="flex gap-6">
          {experience.position.map((position, key) => {
            return <div key={key}>
              <p className="font-light text-sm text-gray-400">{position.date}</p>
              <p className="font-medium text-sm sm:text-[1rem]">{position.title}</p>
            </div>
          })}
        </div>
        <p className="mt-2 text-gray-400">{experience.description}</p>
      </div>
    </div>
  )
}
