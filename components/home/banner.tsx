'use client'

import {ArrowDown, MailIcon, MapIcon, ScrollTextIcon} from "lucide-react";
import {Typewriter} from 'react-simple-typewriter'
import SocialMedia from "@/components/home/social-media";
import Link from "next/link";
import Globe from "@/components/ui/globe";
import Meteors from "@/components/ui/meteors";
import {RainbowButton} from "@/components/ui/rainbow-button";

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
    <section className="h-dvh h-screen w-full relative flex justify-center items-center">
      <div className="absolute flex h-full w-full overflow-hidden">
        <Meteors number={30}/>
      </div>
      <div className="absolute top-24">
        <p className="text-xl sm:text-2xl text-center intro-y mt-10 lg:mt-0">
          Muhammad Irfan Fakhri
        </p>
        <h1
          className="text-4xl sm:text-7xl lg:text-[8rem] font-black leading-normal sm:leading-[65px] lg:leading-[160px] tracking-wider flex flex-wrap justify-center lg:gap-5 gap-2 lg:-mt-5 intro-y bg-gradient-to-r from-[#8FC3F2] via-[#B9B6FF] to-[#D9BBFF] bg-clip-text text-transparent">
          Katsuotz
        </h1>
        <div className="text-2xl sm:text-3xl intro-y">
          <p className="text-center min-h-[32px] sm:min-h-[36px]">
            <Typewriter
              words={['Software Engineer', 'Full-Stack Developer', 'Frontend Developer']}
              loop={0}
              typeSpeed={50}
              deleteSpeed={35}
              delaySpeed={1500}
            />
          </p>
          <p className="text-center">{year - startYear}+ years experience</p>
        </div>
        <div className="flex justify-center gap-4 mt-6 intro-y">
          <SocialMedia/>
        </div>
      </div>

      <div
        className="relative flex size-full 3xl:max-w-[1200px] max-w-3xl items-center justify-center rounded-lg">
        <Globe className="lg:-bottom-[12rem] top-[unset] bottom-24"/>
      </div>

      <div className="absolute  left-1/2 -translate-x-1/2 bottom-10 flex justify-center mt-14">
        <RainbowButton onClick={scrollPage} className="intro-y">
          <ArrowDown className="size-5 mr-2"/>
          See More
        </RainbowButton>
      </div>

      <div className="absolute top-0 left-0 pl-10 pt-10">
        <p className="flex items-center intro-y"><MailIcon className="w-4 h-4 mr-2"/> m.irfan.fakhri66@gmail.com</p>
        <p className="flex items-center intro-y"><MapIcon className="w-4 h-4 mr-2"/> Indonesia</p>
      </div>
      <div className="absolute bottom-0 left-0 pl-10 pb-10">
        <p className="flex items-center intro-y">
          <Link href="/log"
                className="flex items-center border-b hover:border-b-white border-transparent border-dotted">
            <ScrollTextIcon className="w-4 h-4 mr-2"/> Logs
          </Link>
        </p>
      </div>
    </section>
  )
}
