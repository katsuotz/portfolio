'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface LazySectionProps {
  children: ReactNode
  className?: string
  rootMargin?: string
  placeholder?: ReactNode
}

export default function LazySection({
  children,
  className = '',
  rootMargin = '200px',
  placeholder,
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setHasLoaded(true)
          observer.disconnect()
        }
      },
      {
        rootMargin,
        threshold: 0,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div ref={ref} className={className}>
      {hasLoaded
        ? children
        : placeholder || (
            <div className="min-h-[400px] flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-gray-300 dark:border-gray-600 border-t-purple-500 rounded-full animate-spin" />
            </div>
          )}
    </div>
  )
}
