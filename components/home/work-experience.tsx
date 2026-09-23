import WorkExperienceItem, {
  WorkExperienceType,
} from '@/components/home/work-experience-item'
import { cn } from '@/lib/utils'
import { editorialType } from '@/lib/editorial-typography'

export default function WorkExperience() {
  const experiences: WorkExperienceType[] = [
    {
      logo: '/work/shieldbase.webp',
      flag: '/flag/sg.webp',
      company: 'Shieldbase',
      headingClassName:
        'lg:whitespace-nowrap lg:text-[clamp(2.4rem,3.5vw,3.6rem)]',
      country: 'Singapore',
      status: 'freelance',
      position: [
        {
          title: 'Software Engineer',
          date: 'Aug 2025 - Now',
        },
      ],
      description:
        'Developed an enterprise-grade AI workspace that unifies models, data, and agents into a secure and scalable platform.',
    },
    // {
    //   logo: '/work/biofarma.webp',
    //   flag: '/flag/id.webp',
    //   company: 'Biofarma',
    //   country: 'Indonesia',
    //   status: 'freelance',
    //   position: [
    //     {
    //       title: 'Frontend Developer',
    //       date: 'Feb 2024 - Now',
    //     },
    //   ],
    //   description:
    //     'Built a secure and intuitive platform to track medicine serialization and delivery, ensuring authenticity and regulatory compliance across the supply chain.',
    // },
    {
      logo: '/work/nvp.webp',
      flag: '/flag/id.webp',
      company: 'Native Productions',
      headingClassName:
        'text-[clamp(2.05rem,4.3vw,4.8rem)] lg:whitespace-nowrap lg:text-[clamp(1.9rem,2.7vw,3rem)]',
      country: 'Indonesia',
      status: 'contract',
      position: [
        {
          title: 'Full-Stack Developer',
          date: 'Dec 2025 - Aug 2026',
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
      status: 'freelance',
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
      status: 'fulltime',
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
      status: 'contract',
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
      status: 'fulltime',
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
      status: 'freelance',
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
      status: 'contract',
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
      id="experience"
      className="mx-auto w-full max-w-[1440px] scroll-mt-24 border-t border-[var(--home-line)] px-5 py-20 md:px-8 md:py-28 lg:px-16"
    >
      <div className="mb-[clamp(3rem,7vw,6rem)] grid max-w-[72rem] gap-[clamp(1.5rem,4vw,3rem)]">
        <h2 className="max-w-[14ch] font-[family-name:var(--font-home-display)] text-[clamp(2.65rem,7vw,6rem)] leading-[0.94] font-normal tracking-[-0.04em] text-[var(--home-ink)]">
          Built with teams across borders.
        </h2>
        <p
          className={cn(
            editorialType.body,
            'font-light text-[var(--home-muted)] md:col-start-2 lg:col-auto'
          )}
        >
          Product engineering experience spanning AI, logistics, agritech,
          localization, education, and custom enterprise software.
        </p>
      </div>

      <div className="border-y border-[var(--home-line)]">
        {experiences.map((experience) => (
          <WorkExperienceItem
            key={experience.company}
            experience={experience}
            variant="compact"
          />
        ))}
      </div>
    </section>
  )
}
