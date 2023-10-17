'use client'

import WorkExperienceItem, {WorkExperienceType} from "@/components/home/work-experience-item";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {BriefcaseIcon} from "lucide-react";

export default function WorkExperience() {
  const experiences: WorkExperienceType[] = [
    {
      logo: '/work/paxel.png',
      company: 'Paxel Indonesia',
      position: [{
        title: 'Full-Stack Developer',
        date: 'Sept 2022 - Now',
      }],
      description: 'Enhance and maintain logistics shipment apps to optimize operations and ensure seamless flow within customers, business and warehouses.',
    },
    {
      logo: '/work/lexigo.jpg',
      company: 'Lexigo',
      position: [{
        title: 'Frontend Developer - Freelance',
        date: 'Aug 2022 - Feb 2023',
      }],
      description: 'Create translation and localization web apps with cloud-based technology to enable organizations to communicate with confidence.',
    },
    {
      logo: '/work/sgara.png',
      company: 'Sgara (PT. Transformasi Digital Laut)',
      position: [
        {
          title: 'Frontend Developer',
          date: 'Oct 2020 - Jul 2021',
        }, {
          title: 'Full-Stack Developer',
          date: 'Aug 2021 - Aug 2022',
        },
      ],
      description: 'Create a one-stop platform for shrimp farming with data-driven farm advisory and marketplace solution form shrimp farmers.',
    },
    {
      logo: '/project/edunex.png',
      company: 'Cognisia',
      position: [
        {
          title: 'Frontend Developer',
          date: 'Nov 2020 - Jul 2022',
        },
      ],
      description: 'Developed a custom Web-based Learning Management System (LMS) for Bandung Institute Technology (ITB).',
    },
    {
      logo: '/work/someah.jpg',
      company: 'Someah Kreatif Nusantara',
      position: [{
        title: 'Full-Stack Developer',
        date: 'Oct 2017 - Jan 2021',
      }],
      description: 'Developed custom web applications based on client requirements, utilizing a full stack development approach to handle both frontend and backend components.',
    },
  ]

  return (
    <section className="relative flex flex-col justify-center items-center lg:pt-8 pt-6 lg:pb-20 pb-16">
      <h3 className="text-3xl sm:text-5xl font-bold mb-12 flex items-center">
        <BriefcaseIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4"/>
        Work Experience
      </h3>

      <div className="w-full">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={'auto'}
          spaceBetween={0}
        >
          {experiences.map((experience, key) => {
            return <SwiperSlide key={key} className={key === 0 ? 'sm:ml-80' : ''}><WorkExperienceItem experience={experience}/></SwiperSlide>
          })}
        </Swiper>
      </div>
    </section>
  )
}
