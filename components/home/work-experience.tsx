'use client'

import WorkExperienceItem, {
  WorkExperienceType,
} from '@/components/home/work-experience-item'
import { BriefcaseIcon } from '@phosphor-icons/react'

export default function WorkExperience() {
  const experiences: WorkExperienceType[] = [
    {
      logo: '/work/shieldbase.webp',
      flag: '/flag/sg.webp',
      company: 'Shieldbase',
      country: 'Singapore',
      position: [
        {
          title: 'Software Engineer',
          date: 'Aug 2025 - Now',
        },
      ],
      description:
        'Developed an enterprise-grade AI workspace that unifies models, data, and agents into a secure and scalable platform.',
    },
    {
      logo: '/work/biofarma.webp',
      flag: '/flag/id.webp',
      company: 'Biofarma',
      country: 'Indonesia',
      position: [
        {
          title: 'Frontend Developer',
          date: 'Feb 2024 - Now',
        },
      ],
      description:
        'Built a secure and intuitive platform to track medicine serialization and delivery, ensuring authenticity and regulatory compliance across the supply chain.',
    },
    {
      logo: '/work/nvp.webp',
      flag: '/flag/id.webp',
      company: 'Native Productions',
      country: 'Indonesia',
      position: [
        {
          title: 'Full-Stack Developer',
          date: 'Dec 2025 - Mar 2026',
        },
      ],
      description:
        'Built customizable and scalable enterprise applications with tailored workflows and advanced reporting to support client-specific business logic.',
    },
    {
      logo: '/work/farmbyte.webp',
      flag: '/flag/my.svg',
      company: 'FarmByte',
      country: 'Malaysia',
      position: [
        {
          title: 'Frontend Developer',
          date: 'Oct 2024 - Sept 2025',
        },
      ],
      description:
        'Crafted intuitive web applications with reusable components, API integrations, and optimized business logic to empower farmers and drive innovation.',
    },
    {
      logo: '/work/paxel.webp',
      flag: '/flag/id.webp',
      country: 'Indonesia',
      company: 'Paxel',
      position: [
        {
          title: 'Full-Stack Developer',
          date: 'Sept 2022 - Aug 2025',
        },
      ],
      description:
        'Enhanced and maintained logistics and shipment applications to ensure a seamless flow between customers, businesses, and warehouses.',
    },
    {
      logo: '/work/lexigo.webp',
      flag: '/flag/au.webp',
      company: 'Lexigo',
      country: 'Australia',
      position: [
        {
          title: 'Frontend Developer',
          date: 'Aug 2022 - Feb 2023',
        },
      ],
      description:
        'Created translation and localization web applications using cloud-based technologies to help organizations communicate with confidence.',
    },
    {
      logo: '/work/sgara.webp',
      flag: '/flag/id.webp',
      country: 'Indonesia',
      company: 'Sgara',
      position: [
        {
          title: 'Frontend Developer',
          date: 'Oct 2020 - Jul 2021',
        },
        {
          title: 'Full-Stack Developer',
          date: 'Aug 2021 - Aug 2022',
        },
      ],
      description:
        'Built a one-stop platform for shrimp farming with data-driven farm advisory services and a marketplace solution for shrimp farmers.',
    },
    {
      logo: '/project/edunex.webp',
      flag: '/flag/id.webp',
      country: 'Indonesia',
      company: 'Cognisia',
      position: [
        {
          title: 'Frontend Developer',
          date: 'Nov 2020 - Jul 2022',
        },
      ],
      description:
        'Developed a custom web-based Learning Management System (LMS) for the Bandung Institute of Technology (ITB).',
    },
    {
      logo: '/work/someah.webp',
      flag: '/flag/id.webp',
      country: 'Indonesia',
      company: 'Someah Kreatif Nusantara',
      position: [
        {
          title: 'Full-Stack Developer',
          date: 'Oct 2017 - Jan 2021',
        },
      ],
      description:
        'Developed custom web applications based on client requirements, using a full-stack approach to handle both frontend and backend components.',
    },
  ]

  return (
    <section
      id="work-experience"
      className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-32"
    >
      <div className="flex items-center justify-center gap-4 mb-10 sm:mb-20 intro-y w-full">
        <BriefcaseIcon
          className="w-8 h-8 sm:w-16 sm:h-16 text-violet-500 shrink-0"
          weight="regular"
        />
        <h2 className="text-3xl sm:text-7xl font-serif font-black text-[#FAFAFA] tracking-tighter text-center whitespace-nowrap">
          Work Experience
        </h2>
      </div>

      <div className="relative space-y-8">
        {/* Timeline Line */}
        <div className="absolute left-[31px] top-4 bottom-4 w-[2px] bg-linear-to-b from-violet-500/50 via-white/10 to-transparent hidden sm:block z-0" />

        {/* Current Roles */}
        {experiences.slice(0, 2).map((experience, index) => (
          <div
            key={index}
            className="intro-y relative z-10"
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <WorkExperienceItem experience={experience} />
          </div>
        ))}

        {/* Divider for Past Experiences */}
        <div
          className="intro-y relative z-10 flex items-center py-6 sm:py-8"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="hidden sm:flex flex-col items-center z-10">
            <div className="w-14 h-14 rounded-full bg-[#0F0F0F] border border-white/10 flex items-center justify-center ml-0.5 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="w-3 h-3 rounded-full bg-white/20" />
            </div>
          </div>
          <div className="flex-1 sm:ml-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent sm:hidden" />
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-[0.2em] px-4 sm:px-0">
              Past Experience
            </h3>
            <div className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
          </div>
        </div>

        {/* Past Roles */}
        {experiences.slice(2).map((experience, index) => (
          <div
            key={index + 2}
            className="intro-y relative z-10"
            style={{ animationDelay: `${0.1 * (index + 4)}s` }}
          >
            <WorkExperienceItem experience={experience} />
          </div>
        ))}
      </div>
    </section>
  )
}
