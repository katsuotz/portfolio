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
      className={`fixed bottom-10 right-10 z-10 transition-all duration-300 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
    >
      <div
        onClick={scrollToTop}
        className="p-3 rounded-2xl glass-card-enhanced hover:border-purple-500/30 dark:hover:border-purple-400/30 transition-all duration-300 cursor-pointer group"
      >
        <ArrowUpSquareIcon className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" />
      </div>
    </div>
  )
}
