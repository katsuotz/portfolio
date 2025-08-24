'use client'

import {
  ArrowDown,
  HammerIcon,
  MailIcon,
  MapIcon,
  ScrollTextIcon,
  TvMinimalPlayIcon,
} from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter'
import SocialMedia from '@/components/home/social-media'
import Link from 'next/link'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import Dither from '@/components/reactbits/Dither/Dither'
import { Button } from '@/components/ui/button'

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
      <div className="w-full h-dvh absolute opacity-50">
        <Dither
          waveColor={[0.47, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={4}
          waveSpeed={0.05}
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 pb-20 px-8">
        <p className="text-2xl sm:text-2xl lg:text-5xl text-center intro-y mt-10 lg:mt-0 leading-tight sm:leading-normal">
          Muhammad Irfan Fakhri
        </p>
        <h1 className="text-7xl sm:text-7xl lg:text-[14rem] font-black leading-tight tracking-wider flex flex-wrap justify-center lg:gap-5 gap-2 lg:-mt-5 intro-y bg-linear-to-r from-[#FF6B6B] via-[#FFB347] to-[#FFD93D] dark:from-[#7ECDC8] dark:via-[#5E92C9] dark:to-[#FF9FFC] bg-clip-text text-transparent">
          Katsuotz
        </h1>
        <div className="text-2xl sm:text-3xl intro-y">
          <p className="text-center min-h-[32px] sm:min-h-[36px]">
            <Typewriter
              words={[
                'Software Engineer',
                'Full-Stack Developer',
                'Frontend Developer',
                'Backend Developer',
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

        <div className="flex flex-wrap justify-center intro-y gap-4 mt-10">
          <Link href="/projects" passHref>
            <Button className="rounded-full" variant="default">
              <HammerIcon className="w-4 h-4" /> Projects
            </Button>
          </Link>
          <Link href="/showcase" passHref>
            <Button className="rounded-full" variant="default">
              <TvMinimalPlayIcon className="w-4 h-4" /> Showcases
            </Button>
          </Link>
          <Link href="/log" passHref>
            <Button className="rounded-full" variant="default">
              <ScrollTextIcon className="w-4 h-4" /> Logs
            </Button>
          </Link>
        </div>
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
    </section>
  )
}
