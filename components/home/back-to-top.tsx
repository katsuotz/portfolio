'use client'

import { ArrowSquareUpIcon } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

export default function BackToTop({
  variant = 'default',
}: {
  variant?: 'editorial' | 'default'
}) {
  const [showBackToTop, setShowBackToTop] = useState(false)

  const handleShowBackToTop = () => {
    setShowBackToTop(window.pageYOffset > window.innerHeight / 2)
  }

  useEffect(() => {
    handleShowBackToTop()

    window.addEventListener('scroll', handleShowBackToTop, { passive: true })
    return () => window.removeEventListener('scroll', handleShowBackToTop)
  }, [])

  const scrollToTop = () => {
    if (window.location.hash) {
      window.history.replaceState(
        window.history.state,
        '',
        `${window.location.pathname}${window.location.search}`
      )
    }

    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    })
  }

  return (
    <div
      className={`fixed right-5 bottom-5 z-50 transition-all duration-500 sm:right-10 sm:bottom-10 ${showBackToTop ? 'visible translate-y-0 opacity-100' : 'invisible pointer-events-none translate-y-10 opacity-0'}`}
    >
      <button
        onClick={scrollToTop}
        className={
          variant === 'editorial'
            ? 'group flex size-12 cursor-pointer items-center justify-center border border-[var(--home-line)] bg-[color-mix(in_srgb,var(--home-surface-raised)_88%,transparent)] text-[var(--home-muted)] shadow-lg backdrop-blur-md transition-[color,background-color,border-color,transform] hover:-translate-y-1 hover:border-[var(--home-accent)] hover:text-[var(--home-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] motion-reduce:transform-none motion-reduce:transition-none'
            : 'group flex cursor-pointer items-center justify-center rounded-2xl border border-white/5 bg-white/2 p-3 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-violet-500/30 hover:bg-white/4 active:scale-95'
        }
        aria-label="Back to top"
      >
        <ArrowSquareUpIcon
          className={
            variant === 'editorial'
              ? 'size-5'
              : 'h-6 w-6 text-gray-500 transition-colors group-hover:text-violet-400'
          }
          weight="light"
        />
      </button>
    </div>
  )
}
