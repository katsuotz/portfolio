'use client'

import {
  ArrowDown,
  MailIcon,
  MapIcon,
  ScrollTextIcon,
  TvMinimalPlayIcon,
} from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter'
import SocialMedia from '@/components/home/social-media'
import Link from 'next/link'
import Globe from '@/components/magicui/globe'
import { Meteors } from '@/components/magicui/meteors'
import { ShimmerButton } from '@/components/magicui/shimmer-button'

export default function Banner() {
  const year = new Date().getFullYear()
  const startYear = 2019

  const scrollPage = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section className="h-dvh w-full relative flex justify-center items-center">
      <div className="absolute flex h-full w-full overflow-hidden">
        <Meteors number={30} />
      </div>
      <div className="absolute top-24">
        <p className="text-lg sm:text-2xl text-center intro-y mt-10 lg:mt-0 leading-tight sm:leading-normal">
          Muhammad Irfan Fakhri
        </p>
        <h1 className="text-5xl sm:text-7xl lg:text-[8rem] font-black leading-tight sm:leading-[65px] lg:leading-[160px] tracking-wider flex flex-wrap justify-center lg:gap-5 gap-2 lg:-mt-5 intro-y bg-linear-to-r from-[#8FC3F2] via-[#B9B6FF] to-[#D9BBFF] bg-clip-text text-transparent">
          Katsuotz
        </h1>
        <div className="text-2xl sm:text-3xl intro-y">
          <p className="text-center min-h-[32px] sm:min-h-[36px]">
            <Typewriter
              words={[
                'Software Engineer',
                'Full-Stack Developer',
                'Frontend Developer',
              ]}
              loop={0}
              typeSpeed={50}
              deleteSpeed={35}
              delaySpeed={1500}
            />
          </p>
          <p className="text-center">{year - startYear}+ years experience</p>
        </div>
        <div className="flex justify-center gap-4 mt-6 intro-y">
          <SocialMedia />
        </div>
      </div>

      <div className="relative flex size-full 3xl:max-w-[1200px] max-w-3xl items-center justify-center rounded-lg">
        <Globe className="sm:-bottom-[12rem] sm:top-[unset] bottom-unset mt-10 sm:mt-0 top-1/2 -translate-y-1/2 sm:translate-y-0" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-28 md:bottom-10 flex justify-center mt-14">
        <ShimmerButton onClick={scrollPage} className="intro-y">
          <ArrowDown className="size-5 mr-2 dark:stroke-black" />
          See More
        </ShimmerButton>
      </div>

      <div className="absolute top-0 left-0 pl-10 pt-10">
        <p className="flex items-center intro-y">
          <MailIcon className="w-4 h-4 mr-2" /> m.irfan.fakhri66@gmail.com
        </p>
        <p className="flex items-center intro-y">
          <MapIcon className="w-4 h-4 mr-2" /> Indonesia
        </p>
      </div>
      <div className="absolute bottom-0 md:right-0 md:pr-10 pb-10 flex gap-6">
        <p className="flex items-center intro-y">
          <Link
            href="/showcase"
            className="flex items-center border-b hover:border-b-white border-transparent border-dotted"
          >
            <TvMinimalPlayIcon className="w-4 h-4 mr-2" /> Showcase
          </Link>
        </p>
        <p className="flex items-center intro-y">
          <Link
            href="/log"
            className="flex items-center border-b hover:border-b-white border-transparent border-dotted"
          >
            <ScrollTextIcon className="w-4 h-4 mr-2" /> Logs
          </Link>
        </p>
      </div>
    </section>
  )
}
