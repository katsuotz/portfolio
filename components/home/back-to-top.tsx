'use client'

import { ArrowUpSquareIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  const handleShowBackToTop = () => {
    setShowBackToTop(window.pageYOffset > window.innerHeight / 2)
  }

  useEffect(() => {
    handleShowBackToTop()

    window.addEventListener('scroll', function () {
      handleShowBackToTop()
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className={`fixed bottom-10 right-10 z-50 transition-all duration-500 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
    >
      <button
        onClick={scrollToTop}
        className="p-3 rounded-2xl bg-white/2 backdrop-blur-xl border border-white/5 hover:bg-white/4 hover:border-violet-500/30 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] group flex items-center justify-center"
        aria-label="Back to top"
      >
        <ArrowUpSquareIcon className="w-6 h-6 text-gray-500 group-hover:text-violet-400 transition-colors" />
      </button>
    </div>
  )
}
