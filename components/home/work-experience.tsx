'use client'

import WorkExperienceItem, {
  WorkExperienceType,
} from '@/components/home/work-experience-item'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Laptop2Icon } from 'lucide-react'

export default function WorkExperience() {
  const experiences: WorkExperienceType[] = [
    {
      logo: '/work/nvp.webp',
      flag: '/flag/id.webp',
      company: 'Native Productions',
      country: 'Indonesia',
      position: [
        {
          title: 'Full-Stack Developer',
          date: 'Dec 2025 - Now',
        },
      ],
      description:
        'Built customizable and scalable enterprise applications with tailored workflows and advanced reporting to support client-specific business logic.',
    },
    {
      logo: '/work/shieldbase.webp',
      flag: '/flag/my.svg',
      company: 'Shieldbase',
      country: 'Malaysia',
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
    <section className="relative flex flex-col justify-center items-center lg:pt-8 pt-20 lg:pb-20 pb-16 lg:mt-20 section-gradient">
      <h2 className="text-3xl sm:text-5xl font-bold mb-12 flex items-center section-title bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-200">
        <Laptop2Icon className="w-8 h-8 sm:w-10 sm:h-10 mr-4 icon-glow text-purple-500 dark:text-purple-400" />
        Work Experience
      </h2>

      <div className="w-full">
        <Swiper
          modules={[Pagination, Mousewheel]}
          pagination={{ clickable: true }}
          slidesPerView={'auto'}
          spaceBetween={0}
          mousewheel
        >
          {experiences.map((experience, key) => {
            return (
              <SwiperSlide key={key} className={key === 0 ? 'sm:ml-80' : ''}>
                <WorkExperienceItem experience={experience} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
