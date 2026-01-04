'use client'

import {
  ArrowDown,
  HammerIcon,
  MailIcon,
  ScrollTextIcon,
  TvMinimalPlayIcon,
  SparklesIcon,
  MapPinIcon,
} from 'lucide-react'
import SocialMedia from '@/components/home/social-media'
import Link from 'next/link'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const FloatingOrbs = dynamic(() => import('@/components/home/floating-orbs'), {
  ssr: false,
})
const TextType = dynamic(
  () => import('@/components/reactbits/TextType/TextType'),
  {
    ssr: false,
  }
)

export default function Banner() {
  const year = new Date().getFullYear()
  const startYear = 2019

  const scrollPage = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="w-full h-svh relative flex justify-center items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-30 dark:opacity-20 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-blob"
          style={{
            top: '10%',
            left: '20%',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-25 dark:opacity-15 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-blob animation-delay-2000"
          style={{
            bottom: '10%',
            right: '20%',
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-20 dark:opacity-10 bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 animate-blob animation-delay-4000"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          }}
        />
      </div>

      {/* 3D Floating Orbs */}
      <FloatingOrbs />

      {/* Grid pattern overlay with distortion */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0">
        <defs>
          <filter id="grid-distortion">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01"
              numOctaves="3"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="30s"
                values="0.01;0.015;0.01"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="20"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none grid-distortion"
        style={{ filter: 'url(#grid-distortion)' }}
      />

      {/* Main content with glassmorphism */}
      <div className="absolute top-1/2 -translate-y-1/2 pb-20 px-4 sm:px-8">
        {/* AI Badge */}
        <div className="flex justify-center mb-4 intro-y">
          <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
            <SparklesIcon className="w-4 h-4 text-purple-500 dark:text-purple-400 animate-pulse" />
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Available for hire
            </span>
          </div>
        </div>

        <p className="text-xl sm:text-2xl lg:text-4xl text-center intro-y mt-6 lg:mt-0 leading-tight sm:leading-normal text-slate-600 dark:text-slate-300">
          Muhammad Irfan Fakhri
        </p>

        {/* Main name with enhanced gradient and glow */}
        <h1 className="text-6xl sm:text-7xl lg:text-[12rem] font-black leading-tight tracking-wider flex flex-wrap justify-center lg:gap-5 gap-2 lg:-mt-2 intro-y banner-title">
          <span className="bg-gradient-to-r from-[#FF6B6B] via-[#FFB347] to-[#FFD93D] dark:from-[#7ECDC8] dark:via-[#5E92C9] dark:to-[#FF9FFC] bg-clip-text text-transparent drop-shadow-2xl animate-gradient bg-[length:200%_auto]">
            Katsuotz
          </span>
        </h1>

        {/* Role with glassmorphism card */}
        <div className="text-xl sm:text-2xl intro-y mt-2">
          <div className="glass-card rounded-2xl px-6 py-4 mx-auto max-w-fit">
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
              {year - startYear}+ years of crafting digital experiences
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6 intro-y">
          <SocialMedia />
        </div>

        {/* Action buttons with glass effect */}
        <div className="flex flex-wrap justify-center intro-y gap-3 mt-8">
          <Link href="/projects" passHref>
            <Button className="glass-button rounded-full px-6 py-5 text-base font-semibold hover:scale-105 transition-all duration-300">
              <HammerIcon className="w-4 h-4" /> Projects
            </Button>
          </Link>
          <Link href="/showcase" passHref>
            <Button className="glass-button rounded-full px-6 py-5 text-base font-semibold hover:scale-105 transition-all duration-300">
              <TvMinimalPlayIcon className="w-4 h-4" /> Showcases
            </Button>
          </Link>
          <Link href="/log" passHref>
            <Button className="glass-button rounded-full px-6 py-5 text-base font-semibold hover:scale-105 transition-all duration-300">
              <ScrollTextIcon className="w-4 h-4" /> Logs
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

      {/* Contact info with glass card */}
      <div className="absolute top-0 left-0 pl-4 sm:pl-10 pt-10">
        <div className="glass-card rounded-xl px-4 py-3 space-y-1 intro-y">
          <p className="flex items-center text-sm text-slate-600 dark:text-slate-300">
            <MailIcon className="w-4 h-4 mr-2 text-purple-500" />{' '}
            m.irfan.fakhri66@gmail.com
          </p>
          <p className="flex items-center text-sm text-slate-600 dark:text-slate-300">
            <MapPinIcon className="w-4 h-4 mr-2 text-cyan-500" /> Indonesia
          </p>
        </div>
      </div>
    </section>
  )
}
