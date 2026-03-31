'use client'

import {
  ArrowDown,
  HammerIcon,
  MailIcon,
  ScrollTextIcon,
  TvMinimalPlayIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import LazySection from '@/components/home/lazy-section'

const YEAR = new Date().getFullYear()
const START_YEAR = 2019

export default function Banner() {
  const scrollPage = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-950 h-svh w-full selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <LazySection className="relative flex flex-col justify-center items-center h-full w-full">
        {/* Subtle dot grid for structure, not glowing */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 pb-24">
          {/* Status Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-black dark:border-white bg-green-400 dark:bg-green-600 text-black dark:text-white font-bold uppercase tracking-widest text-xs shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-none dark:hover:shadow-none">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white"></span>
              </span>
              <span>Available for hire</span>
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center space-y-4">
            <p className="text-xl sm:text-2xl lg:text-3xl text-black dark:text-white font-bold uppercase tracking-tighter">
              Muhammad Irfan Fakhri
            </p>
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black leading-none tracking-tighter uppercase text-black dark:text-white">
              Katsuotz
            </h1>
            <div className="h-4 sm:h-6" />
            <div className="flex flex-wrap items-center justify-center gap-3 text-lg sm:text-xl md:text-2xl text-black dark:text-white font-bold uppercase tracking-tight">
              <span className="hidden sm:inline-block w-12 h-1 bg-black dark:bg-white"></span>
              <div className="text-center">Software Engineer</div>
              <span className="hidden sm:inline-block w-12 h-1 bg-black dark:bg-white"></span>
            </div>
          </div>

          {/* Years of Experience */}
          <div className="mt-8 px-6 py-2 border-2 border-black dark:border-white bg-yellow-300 dark:bg-yellow-600 text-black dark:text-white font-black text-sm sm:text-base uppercase shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff]">
            {YEAR - START_YEAR}+ Years Building Digital Experiences
          </div>
        </div>

        {/* Brutalist Action Dock */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center px-4">
          <div className="flex flex-col sm:flex-row items-stretch gap-0 border-4 border-black dark:border-white bg-white dark:bg-black shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff]">
            {/* Social Links */}
            <div className="flex items-center border-b-4 sm:border-b-0 sm:border-r-4 border-black dark:border-white">
              <SocialLink
                href="https://github.com/katsuotz/"
                icon={<GithubIcon className="w-6 h-6" />}
                label="Github"
              />
              <SocialLink
                href="https://www.linkedin.com/in/irfan-fakhri/"
                icon={<LinkedinIcon className="w-6 h-6" />}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:m.irfan.fakhri66@gmail.com"
                icon={<MailIcon className="w-6 h-6" />}
                label="Email"
              />
            </div>

            {/* Main Actions */}
            <div className="flex items-stretch">
              <Link href="/projects" passHref className="flex">
                <DockButton icon={<HammerIcon className="w-5 h-5" />}>
                  Projects
                </DockButton>
              </Link>
              <Link
                href="/showcase"
                passHref
                className="flex border-l-4 border-black dark:border-white"
              >
                <DockButton icon={<TvMinimalPlayIcon className="w-5 h-5" />}>
                  Showcase
                </DockButton>
              </Link>
              <Link
                href="/log"
                passHref
                className="flex border-l-4 border-black dark:border-white"
              >
                <DockButton icon={<ScrollTextIcon className="w-5 h-5" />}>
                  Logs
                </DockButton>
              </Link>
            </div>

            {/* CTA */}
            <div className="hidden sm:flex items-stretch border-l-4 border-black dark:border-white">
              <button
                onClick={scrollPage}
                className="px-6 flex items-center justify-center bg-blue-400 dark:bg-blue-600 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                aria-label="Scroll down"
              >
                <ArrowDown className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Contact info - Top Left */}
        <div className="absolute top-6 left-6 hidden md:block z-20">
          <div className="flex flex-col gap-2 font-bold uppercase text-black dark:text-white">
            <span className="flex items-center gap-2 bg-white dark:bg-black border-2 border-black dark:border-white px-3 py-1 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff]">
              <MapPinIcon className="w-4 h-4" /> Indonesia
            </span>
            <span className="flex items-center gap-2 bg-white dark:bg-black border-2 border-black dark:border-white px-3 py-1 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff]">
              <MailIcon className="w-4 h-4" /> m.irfan.fakhri66@gmail.com
            </span>
          </div>
        </div>
      </LazySection>
    </section>
  )
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-4 flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
      title={label}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  )
}

function DockButton({
  children,
  icon,
}: {
  children: React.ReactNode
  icon: React.ReactNode
}) {
  return (
    <button className="px-6 py-4 flex items-center gap-2 bg-white dark:bg-black text-black dark:text-white font-bold uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
      <span>{icon}</span>
      <span>{children}</span>
    </button>
  )
}
