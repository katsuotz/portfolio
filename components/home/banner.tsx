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
import dynamic from 'next/dynamic'
import LazySection from '@/components/home/lazy-section'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

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
    <section className="relative overflow-hidden bg-[#fafbfe] dark:bg-[#030712] h-svh w-full selection:bg-violet-500/30">
      <LazySection className="relative flex flex-col justify-center items-center h-full w-full">
        {/* Dot grid pattern */}
        <div className="absolute inset-0 dot-grid opacity-30 dark:opacity-20 mix-blend-overlay" />

        {/* Aurora gradient strips */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="aurora-strip aurora-strip-1 opacity-40 dark:opacity-20" />
          <div className="aurora-strip aurora-strip-2 opacity-30 dark:opacity-20" />
          <div className="aurora-strip aurora-strip-3 opacity-30 dark:opacity-20" />
        </div>

        {/* Noise/grain texture overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay" />

        {/* Radial spotlight glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] rounded-full blur-[100px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)',
          }}
        />

        {/* 3D Floating Orbs */}
        <div className="absolute inset-0 z-0">
          <FloatingOrbs />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 pb-24">
          {/* Status Badge */}
          <div className="intro-y mb-8">
            <div className="group flex items-center gap-2.5 px-5 py-2 rounded-full border border-emerald-500/20 bg-white/70 dark:bg-emerald-950/60 backdrop-blur-md shadow-[0_0_20px_-10px_rgba(16,185,129,0.5)] hover:bg-white/90 dark:hover:bg-emerald-950/80 transition-all duration-300 cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]"></span>
              </span>
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300 tracking-wide">
                Available for hire
              </span>
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center space-y-2 intro-y">
            <p className="text-xl sm:text-2xl lg:text-4xl text-slate-500 dark:text-slate-200 font-light tracking-wide mb-2">
              Muhammad Irfan Fakhri
            </p>
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black leading-[0.85] tracking-tight select-none">
              <span className="relative inline-block banner-title">
                <span
                  className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 dark:from-violet-500 dark:via-fuchsia-500 dark:to-orange-500 bg-clip-text text-transparent select-none"
                  aria-hidden="true"
                >
                  Katsuotz
                </span>
                <span className="bg-gradient-to-br from-slate-800 via-slate-600 to-slate-900 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent relative z-10">
                  Katsuotz
                </span>
              </span>
            </h1>
            <div className="h-4 sm:h-6" /> {/* Spacer */}
            <div className="flex items-center justify-center gap-3 text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light tracking-wide">
              <span className="hidden sm:inline-block w-8 h-[1px] bg-gradient-to-r from-transparent to-slate-400 dark:to-slate-600"></span>
              <div className="min-w-[200px] text-center font-medium">
                <TextType
                  text={[
                    'Software Engineer',
                    'Full-Stack Developer',
                    'Frontend Specialist',
                    'Backend Architect',
                  ]}
                  typingSpeed={75}
                  pauseDuration={2000}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </div>
              <span className="hidden sm:inline-block w-8 h-[1px] bg-gradient-to-l from-transparent to-slate-400 dark:to-slate-600"></span>
            </div>
          </div>

          {/* Years of Experience */}
          <p className="mt-6 text-sm sm:text-base text-slate-500 dark:text-slate-300 intro-y font-mono">
            // {YEAR - START_YEAR}+ YEARS OF BUILDING DIGITAL EXPERIENCES
          </p>
        </div>

        {/* Floating Action Dock */}
        <div
          className="absolute bottom-10 left-0 right-0 z-20 flex justify-center px-4 intro-y"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-2 rounded-3xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] ring-1 ring-black/5 dark:ring-white/5">
            {/* Social Links Mini-Dock */}
            <div className="flex items-center gap-1 px-2 border-b sm:border-b-0 sm:border-r border-slate-200/50 dark:border-slate-700/50 pb-2 sm:pb-0 sm:pr-4">
              <SocialLink
                href="https://github.com/katsuotz/"
                icon={<GithubIcon className="w-5 h-5" />}
                label="Github"
              />
              <SocialLink
                href="https://www.linkedin.com/in/irfan-fakhri/"
                icon={<LinkedinIcon className="w-5 h-5" />}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:m.irfan.fakhri66@gmail.com"
                icon={<MailIcon className="w-5 h-5" />}
                label="Email"
              />
            </div>

            {/* Main Actions */}
            <div className="flex items-center gap-2">
              <Link href="/projects" passHref>
                <DockButton icon={<HammerIcon className="w-4 h-4" />}>
                  Projects
                </DockButton>
              </Link>
              <Link href="/showcase" passHref>
                <DockButton icon={<TvMinimalPlayIcon className="w-4 h-4" />}>
                  Showcase
                </DockButton>
              </Link>
              <Link href="/log" passHref>
                <DockButton icon={<ScrollTextIcon className="w-4 h-4" />}>
                  Logs
                </DockButton>
              </Link>
            </div>

            {/* CTA */}
            <div className="hidden sm:block pl-2 border-l border-slate-200/50 dark:border-slate-700/50">
              <Button
                onClick={scrollPage}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400"
              >
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </Button>
            </div>
          </div>
        </div>

        {/* Contact info - Top Left */}
        <div className="absolute top-6 left-6 hidden md:block z-20">
          <div className="flex flex-col gap-1 text-xs font-mono text-slate-600 dark:text-slate-400 opacity-80 hover:opacity-100 transition-opacity">
            <span className="flex items-center gap-2">
              <MapPinIcon className="w-3 h-3" /> Indonesia
            </span>
            <span className="flex items-center gap-2">
              <MailIcon className="w-3 h-3" /> m.irfan.fakhri66@gmail.com
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
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="social-icon-link p-2.5 rounded-full text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-200 hover:scale-110 active:scale-95"
          >
            {icon}
            <span className="sr-only">{label}</span>
          </a>
        </TooltipTrigger>
        <TooltipContent
          className="!bg-slate-900 !text-white border-0 text-xs [&>span]:!text-white"
          arrowClassName="fill-slate-900 bg-slate-900"
        >
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function DockButton({
  children,
  icon,
  className = '',
}: {
  children: React.ReactNode
  icon: React.ReactNode
  className?: string
}) {
  return (
    <Button
      variant="ghost"
      className={`relative group h-10 px-4 rounded-2xl bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 !text-slate-700 dark:!text-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${className}`}
    >
      <span className="flex items-center gap-2">
        <span className="text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-white transition-colors duration-300">
          {icon}
        </span>
        <span className="font-medium">{children}</span>
      </span>
    </Button>
  )
}
