'use client'

import {
  ArrowDown,
  HammerIcon,
  MailIcon,
  ScrollTextIcon,
  TvMinimalPlayIcon,
  MapPinIcon,
} from 'lucide-react'
import SocialMedia from '@/components/home/social-media'
import Link from 'next/link'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'
import LazySection from '@/components/home/lazy-section'

const FloatingOrbs = dynamic(() => import('@/components/home/floating-orbs'), {
  ssr: false,
})
const TextType = dynamic(
  () => import('@/components/reactbits/TextType/TextType'),
  {
    ssr: false,
  }
)

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
    <section className="overflow-hidden bg-[#fafbfe] dark:bg-[#030712]">
      <LazySection className="relative flex justify-center items-center h-svh w-full">
        {/* Dot grid pattern */}
        <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-20" />

        {/* Aurora gradient strips */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="aurora-strip aurora-strip-1" />
          <div className="aurora-strip aurora-strip-2" />
          <div className="aurora-strip aurora-strip-3" />
        </div>

        {/* Noise/grain texture overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

        {/* Radial spotlight glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
          }}
        />

        {/* 3D Floating Orbs */}
        <FloatingOrbs />

        {/* Main content */}
        <div className="absolute top-1/2 -translate-y-1/2 pb-20 px-4 sm:px-8 w-full max-w-5xl mx-auto">
          {/* Animated gradient border badge */}
          <div className="flex justify-center mb-6 intro-y">
            <div className="gradient-border-badge">
              <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold tracking-wide bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 dark:from-purple-400 dark:via-pink-400 dark:to-orange-300 bg-clip-text text-transparent">
                  Available for hire
                </span>
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl lg:text-5xl text-center intro-y mt-6 lg:mt-0 leading-tight sm:leading-normal text-slate-400 dark:text-white font-light tracking-tight">
            Muhammad Irfan Fakhri
          </p>

          {/* Main name with refined gradient */}
          <h1 className="text-6xl sm:text-7xl lg:text-[14rem] font-black leading-tight tracking-wider flex flex-wrap justify-center lg:gap-5 gap-2 lg:-mt-2 intro-y banner-title">
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 dark:from-cyan-400 dark:via-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Katsuotz
            </span>
          </h1>

          {/* Decorative gradient separator */}
          <div className="flex justify-center intro-y mt-1 mb-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent" />
          </div>

          {/* Role with modern card */}
          <div className="text-xl sm:text-2xl intro-y">
            <div className="glass-card border-gradient-subtle rounded-2xl px-6 py-4 mx-auto max-w-fit">
              <div className="text-center min-h-[28px] sm:min-h-[32px] font-bold text-slate-700 dark:text-white">
                <TextType
                  text={[
                    'Software Engineer 👷‍♂️',
                    'Full-Stack Developer 🐧',
                    'Frontend Developer 🎨',
                    'Backend Developer 🛠️',
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </div>
              <p className="text-center text-slate-500 dark:text-slate-400 text-lg">
                {YEAR - START_YEAR}+ years of crafting digital experiences
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6 intro-y">
            <SocialMedia />
          </div>

          {/* Modern gradient-border action buttons */}
          <div className="flex flex-wrap justify-center intro-y gap-3 mt-8">
            <Link href="/projects" passHref>
              <Button className="group gradient-border-btn rounded-full px-6 py-5 text-base font-semibold transition-all duration-300 border-0">
                <HammerIcon className="w-4 h-4 transition-transform group-hover:-rotate-12" />{' '}
                Projects
              </Button>
            </Link>
            <Link href="/showcase" passHref>
              <Button className="group gradient-border-btn rounded-full px-6 py-5 text-base font-semibold transition-all duration-300 border-0">
                <TvMinimalPlayIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />{' '}
                Showcases
              </Button>
            </Link>
            <Link href="/log" passHref>
              <Button className="group gradient-border-btn rounded-full px-6 py-5 text-base font-semibold transition-all duration-300 border-0">
                <ScrollTextIcon className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />{' '}
                Logs
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-28 md:bottom-10 flex justify-center mt-14">
          <ShimmerButton
            onClick={scrollPage}
            className="intro-y backdrop-blur-sm"
          >
            <ArrowDown className="size-5 mr-2 dark:stroke-black animate-bounce" />
            See More
          </ShimmerButton>
        </div>

        {/* Contact info - modern minimal */}
        <div className="absolute top-0 left-0 pl-4 sm:pl-10 pt-10">
          <div className="glass-card border-gradient-subtle rounded-xl px-4 py-3 space-y-1 intro-y">
            <p className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <MailIcon className="w-4 h-4 mr-2 text-violet-500 dark:text-violet-400" />{' '}
              m.irfan.fakhri66@gmail.com
            </p>
            <p className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <MapPinIcon className="w-4 h-4 mr-2 text-emerald-500 dark:text-emerald-400" />{' '}
              Indonesia
            </p>
          </div>
        </div>
      </LazySection>
    </section>
  )
}
