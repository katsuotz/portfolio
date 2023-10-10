'use client'

import WorkExperienceItem, {WorkExperienceType} from "@/components/home/work-experience-item";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {BriefcaseIcon} from "lucide-react";

export default function WorkExperience() {
  const experiences:WorkExperienceType[] = [
    {
      logo: '/work/paxel.png',
      company: 'Paxel Indonesia',
      position: [{
        title: 'Full-Stack Developer',
        date: 'Sept 2022 - Now',
      }],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate ea hic nihil provident!',
    },
    {
      logo: '/work/lexigo.jpg',
      company: 'Lexigo',
      position: [{
        title: 'Frontend Developer - Freelance',
        date: 'Sept 2022 - Now',
      }],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate ea hic nihil provident!',
    },
    {
      logo: '/work/sgara.png',
      company: 'Sgara (PT. Transformasi Digital Laut)',
      position: [{
        title: 'Full-Stack Developer',
        date: 'Aug 2021 - Aug 2022',
      }, {
        title: 'Frontend Developer',
        date: 'Oct 2020 - Jul 2021',
      },],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate ea hic nihil provident!',
    },
    {
      logo: '/work/someah.jpg',
      company: 'Someah Kreatif Nusantara',
      position: [{
        title: 'Full-Stack Developer',
        date: 'Oct 2017 - Jan 2021',
      }],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate ea hic nihil provident!',
    },
  ]

  return (
    <section className="relative flex flex-col justify-center items-center lg:pt-8 pt-6 lg:pb-20 pb-12">
      <h3 className="text-3xl sm:text-5xl font-bold mb-12 flex items-center">
        <BriefcaseIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4"/>
        Work Experience
      </h3>

      <div className="container">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          className="mySwiper"
        >
          {experiences.map((experience, key) => {
            return <SwiperSlide key={key}><WorkExperienceItem experience={experience} /></SwiperSlide>
          })}
        </Swiper>
      </div>
    </section>
  )
}
