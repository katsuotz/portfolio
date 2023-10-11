'use client'

import {ArrowUpSquareIcon} from "lucide-react";
import {useEffect, useState} from "react";

export default function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', function (event: Event) {
      setShowBackToTop(window.pageYOffset > (window.innerHeight / 2))
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <ArrowUpSquareIcon
      onClick={scrollToTop}
      className={`w-8 h-8 cursor-pointer fixed bottom-10 right-10 z-10 back-to-top transition-all ${showBackToTop ? '' : 'opacity-0 pointer-events-none'}`}
    />
  )
}
