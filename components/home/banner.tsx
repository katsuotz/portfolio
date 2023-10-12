'use client'

import Id from "@/components/home/id";
import {ArrowDownCircle, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, MapIcon} from "lucide-react";
import { Typewriter } from 'react-simple-typewriter'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Atropos from 'atropos/react';
import 'atropos/css'

export default function Banner() {
  const year = new Date().getFullYear()
  const startYear = 2018

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
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <a href="https://github.com/katsuotz/" target="_blank">
                  <GithubIcon className="w-6 h-6"/>
                </a>
              </TooltipTrigger>
              <TooltipContent>Github</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <a href="https://www.linkedin.com/in/irfan-fakhri/" target="_blank">
                  <LinkedinIcon className="w-6 h-6"/>
                </a>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <a href="https://www.instagram.com/katsuotz/" target="_blank">
                  <InstagramIcon className="w-6 h-6"/>
                </a>
              </TooltipTrigger>
              <TooltipContent>Instagram</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Atropos>

      <div className="absolute  left-1/2 -translate-x-1/2 bottom-10 flex justify-center mt-14">
        <div className="relative w-8-h-8 flex justify-center items-center cursor-pointer motion-reduce:animate-bounce" onClick={scrollPage}>
          <ArrowDownCircle className="w-8 h-8 intro-y"/>
        </div>
      </div>

      <div className="absolute top-0 left-0 pl-10 pt-10">
        <p className="flex items-center intro-y"><MailIcon className="w-4 h-4 mr-2"/> m.irfan.fakhri66@gmail.com</p>
        <p className="flex items-center intro-y"><MapIcon className="w-4 h-4 mr-2"/> Indonesia</p>
      </div>
    </section>
  )
}
