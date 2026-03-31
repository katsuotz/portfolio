'use client'

import {
  Briefcase,
  GraduationCap,
  Trophy,
  Code2,
  Hammer,
  ArrowDown,
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Show navbar if mouse is within 100px of the bottom of the screen
      if (window.innerHeight - e.clientY < 100) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [lastScrollY])

  return (
    <div
      className={cn(
        'fixed bottom-8 left-1/2 z-50 -translate-x-1/2 transition-transform duration-300',
        isVisible ? 'translate-y-0' : 'translate-y-[200%]'
      )}
    >
      <nav className="flex items-center gap-4 rounded-full border border-white/10 bg-black/50 px-6 py-3 text-sm text-neutral-400 backdrop-blur-md">
        <div className="flex items-center gap-6">
          <Link
            href="#work-experience"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Briefcase className="size-4" />
            <span className="hidden sm:inline">Work Experience</span>
          </Link>
          <Link
            href="#education"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <GraduationCap className="size-4" />
            <span className="hidden sm:inline">Education</span>
          </Link>
          <Link
            href="#achievement"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Trophy className="size-4" />
            <span className="hidden sm:inline">Achievement</span>
          </Link>
          <Link
            href="#tech-stack"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Code2 className="size-4" />
            <span className="hidden sm:inline">Tech Stack</span>
          </Link>
          <Link
            href="#work"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Hammer className="size-4" />
            <span className="hidden sm:inline">Selected Works</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
