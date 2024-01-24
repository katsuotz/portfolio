'use client'

import Id from "@/components/home/id";
import {ArrowDownCircle, MailIcon, MapIcon, ScrollTextIcon} from "lucide-react";
import { Typewriter } from 'react-simple-typewriter'
import Atropos from 'atropos/react';
import SocialMedia from "@/components/home/social-media";
import Link from "next/link";

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
    <section className="h-screen w-full relative flex justify-center items-center overflow-hidden">
      <Atropos
        className="atropos-banner"
        rotateXMax={5}
        rotateYMax={5}
        rotateTouch={false}
      >
        <Id className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10 opacity-20 w-auto h-auto sm:h-[500px] pointer-events-none"/>

        <h1 className="text-7xl sm:text-[190px] font-black leading-[65px] sm:leading-[160px] shadow tracking-wider">
          <span className="text-white/[0.5] block intro-y">Irfan</span>
          <span className="block intro-y">Fakhri</span>
        </h1>
        <p className="text-2xl sm:text-3xl mt-8 intro-y">
          <span className="block">
            <Typewriter
              words={['Software Engineer', 'Full-Stack Developer', 'Frontend Developer']}
              loop={0}
              typeSpeed={50}
              deleteSpeed={35}
              delaySpeed={1500}
            />
            &nbsp;
          </span>
          <span className="block">{year - startYear}+ years experience</span>
        </p>
        <div className="flex gap-4 mt-6 intro-y">
          <SocialMedia/>
        </div>
      </Atropos>

      <div className="absolute  left-1/2 -translate-x-1/2 bottom-10 flex justify-center mt-14">
        <div className="relative w-8-h-8 flex justify-center items-center cursor-pointer animate-bounce" onClick={scrollPage}>
          <ArrowDownCircle className="w-8 h-8 intro-y"/>
        </div>
      </div>

      <div className="absolute top-0 left-0 pl-10 pt-10">
        <p className="flex items-center intro-y"><MailIcon className="w-4 h-4 mr-2"/> m.irfan.fakhri66@gmail.com</p>
        <p className="flex items-center intro-y"><MapIcon className="w-4 h-4 mr-2"/> Indonesia</p>
      </div>
      <div className="absolute bottom-0 left-0 pl-10 pb-10">
        <p className="flex items-center intro-y">
          <Link href="/log" className="flex items-center border-b hover:border-b-white border-transparent border-dotted">
            <ScrollTextIcon className="w-4 h-4 mr-2"/> Logs
          </Link>
        </p>
      </div>
    </section>
  )
}
