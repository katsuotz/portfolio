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

const AbstractGeometry = dynamic(
  () => import('@/components/home/abstract-geometry'),
  {
    ssr: false,
  }
)
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
    <section className="relative overflow-hidden bg-[#050505] h-svh w-full selection:bg-violet-500/30 font-sans">
      <LazySection className="relative flex flex-col justify-center items-center h-full w-full">
        {/* Deep background linear */}
        <div className="absolute inset-0 bg-linear-to-br from-[#050505] via-[#0a0a0a] to-black opacity-90 z-0" />

        {/* Ambient violet glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-[120px] mix-blend-screen pointer-events-none z-0" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[100px] mix-blend-screen pointer-events-none z-0" />

        {/* 3D Abstract Geometry Background */}
        <AbstractGeometry />

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.02] pointer-events-none mix-blend-overlay z-0" />

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 pb-24">
          {/* Status Badge */}
          <div className="intro-y mb-12">
            <div className="group flex items-center gap-3 px-5 py-2 rounded-full border border-violet-500/20 bg-black/40 backdrop-blur-md shadow-[0_0_15px_-5px_rgba(139,92,246,0.3)] transition-all duration-300 cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]"></span>
              </span>
              <span className="text-xs font-bold text-violet-200 tracking-wider uppercase">
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center space-y-6 intro-y">
            <p className="text-base sm:text-lg lg:text-3xl text-gray-400 font-medium tracking-[0.3em] uppercase mb-2">
              Muhammad Irfan Fakhri
            </p>
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[20rem] font-serif font-black leading-[0.85] tracking-tighter select-none">
              <span className="relative inline-block">
                <span
                  className="absolute inset-0 blur-3xl opacity-20 bg-linear-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent select-none"
                  aria-hidden="true"
                >
                  Katsuotz
                </span>
                <span className="text-transparent bg-clip-text bg-linear-to-b from-[#FAFAFA] via-[#FAFAFA] to-gray-500 relative z-10">
                  Katsuotz
                </span>
              </span>
            </h1>

            <div className="flex items-center justify-center gap-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-bold tracking-widest uppercase md:mt-12">
              <span className="hidden sm:inline-block w-16 h-[2px] bg-linear-to-r from-transparent to-violet-500/50"></span>
              <div className="min-w-0 sm:min-w-[320px] text-center">
                <TextType
                  text={[
                    'Software Engineer',
                    'Full-Stack Developer',
                    'Frontend Specialist',
                    'Backend Architect',
                  ]}
                  typingSpeed={70}
                  pauseDuration={2500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </div>
              <span className="hidden sm:inline-block w-16 h-[2px] bg-linear-to-l from-transparent to-violet-500/50"></span>
            </div>
          </div>

          {/* Minimal Description */}
          <p className="mt-4 md:mt-12 max-w-3xl text-center text-sm sm:text-base lg:text-lg text-gray-300 intro-y font-light leading-relaxed">
            Crafting elegant, high-performance digital solutions with over{' '}
            {YEAR - START_YEAR} years of industry expertise. Focusing on robust
            architecture and minimal user experiences.
          </p>
        </div>

        {/* Glassmorphism Action Dock */}
        <div
          className="absolute bottom-12 left-0 right-0 z-20 flex justify-center px-4 intro-y"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl backdrop-blur-xl isolate relative overflow-hidden border-white/5 bg-linear-to-br from-white/5 to-white/1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_32px_64px_-16px_rgba(0,0,0,0.8)]">
            {/* Social Links */}
            <div className="flex items-center gap-1 px-2 border-b sm:border-b-0 sm:border-r border-white/10 pb-2 sm:pb-0 sm:pr-4">
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

            {/* Navigation */}
            <div className="flex flex-wrap justify-center sm:items-center gap-1 sm:gap-2">
              <Link href="/showcase" passHref>
                <DockButton
                  icon={
                    <TvMinimalPlayIcon className="w-4! h-4! sm:w-5! sm:h-5!" />
                  }
                >
                  Showcase
                </DockButton>
              </Link>
              <Link href="/log" passHref>
                <DockButton
                  icon={
                    <ScrollTextIcon className="w-4! h-4! sm:w-5! sm:h-5!" />
                  }
                >
                  Logs
                </DockButton>
              </Link>
            </div>

            {/* Scroll CTA */}
            <div className="hidden sm:block pl-2 border-l border-white/10">
              <Button
                onClick={scrollPage}
                variant="ghost"
                size="icon"
                className="rounded-xl hover:bg-white/5 text-gray-500 hover:text-violet-400 transition-colors"
              >
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </Button>
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="absolute top-8 left-8 hidden md:block z-20">
          <div className="flex flex-col gap-2 text-xs tracking-widest uppercase font-light text-gray-500">
            <span className="flex items-center gap-2">
              <MapPinIcon className="w-3 h-3 text-violet-500/70" /> Indonesia
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
            className="p-3 rounded-xl text-gray-400 hover:text-violet-400 hover:bg-white/5 transition-all duration-300"
          >
            {icon}
            <span className="sr-only">{label}</span>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-black">{label}</p>
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
      className={`dock-button-text h-9 px-4 rounded-xl bg-transparent hover:bg-white/5 border border-transparent text-gray-400 hover:text-violet-400 transition-all duration-300 text-sm font-light tracking-wide ${className}`}
    >
      <span className="flex items-center gap-2">
        <span className="opacity-70">{icon}</span>
        <span>{children}</span>
      </span>
    </Button>
  )
}
