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
      className={`fixed bottom-10 right-10 z-50 transition-all duration-300 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
    >
      <button
        onClick={scrollToTop}
        className="p-3 sm:p-4 bg-yellow-300 dark:bg-yellow-600 border-4 border-black dark:border-white shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-none dark:hover:shadow-none group flex flex-col items-center gap-1"
        aria-label="Back to top"
      >
        <ArrowUpSquareIcon className="w-6 h-6 sm:w-8 sm:h-8 text-black dark:text-white" />
        <span className="font-black uppercase text-[10px] sm:text-xs text-black dark:text-white tracking-tighter">
          Top
        </span>
      </button>
    </div>
  )
}
