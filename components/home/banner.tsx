'use client'

import Id from "@/components/home/id";
import {ArrowDownCircle, MailIcon, MapIcon, ScrollTextIcon} from "lucide-react";
import {Typewriter} from 'react-simple-typewriter'
import Atropos from 'atropos/react';
import SocialMedia from "@/components/home/social-media";
import Link from "next/link";
import Globe from "@/components/ui/globe";

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
    <section className="h-screen w-full relative flex justify-center items-center">
      <div className="absolute top-24">
          <h1 className="text-4xl sm:text-7xl lg:text-[8rem] font-black leading-[65px] lg:leading-[160px] tracking-wider flex flex-wrap justify-center lg:gap-5 gap-2 mt-10 lg:mt-0">
            <span className="dark:text-white/[0.5] text-neutral-700 intro-y">Irfan</span>
            <span className="intro-y">Fakhri</span>
          </h1>
          <p className="text-2xl sm:text-3xl intro-y">
            <span className="block text-center">
              <Typewriter
                words={['Software Engineer', 'Full-Stack Developer', 'Frontend Developer']}
                loop={0}
                typeSpeed={50}
                deleteSpeed={35}
                delaySpeed={1500}
              />
              &nbsp;
            </span>
            <span className="block text-center">{year - startYear}+ years experience</span>
          </p>
          <div className="flex justify-center gap-4 mt-6 intro-y">
            <SocialMedia/>
          </div>
      </div>

      <div
        className="relative flex size-full 3xl:max-w-[1200px] max-w-3xl items-center justify-center rounded-lg">
        <Globe className="lg:-bottom-[12rem] top-[unset] bottom-24"/>
        <div
          className="pointer-events-none absolute inset-0"/>
      </div>

      <div className="absolute  left-1/2 -translate-x-1/2 bottom-10 flex justify-center mt-14">
        <div className="relative w-8-h-8 flex justify-center items-center cursor-pointer animate-bounce"
             onClick={scrollPage}>
          <ArrowDownCircle className="w-8 h-8 intro-y"/>
        </div>
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
