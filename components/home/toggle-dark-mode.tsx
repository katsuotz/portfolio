'use client'

import { MoonStarIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { useGlobalState } from '@/context/GlobalStateContext'

export default function ToggleDarkMode() {
  const { globalState, setGlobalState } = useGlobalState()

  const [isDarkMode, setIsDarkMode] = useState(globalState.theme === 'dark')

  const toggleDarkMode = async (isDarkMode: boolean) => {
    localStorage.setItem('dark-mode', isDarkMode.toString())
    await document.startViewTransition(() => {
      flushSync(() => {
        setIsDarkMode(isDarkMode)
      })
    }).ready
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    setGlobalState((prev: any) => ({
      ...prev,
      theme: isDarkMode ? 'dark' : 'light',
    }))
  }, [isDarkMode, setGlobalState])

  return (
    <div className="absolute top-0 right-0 pr-10 pt-10 z-10">
      <link rel="preload" as="image" href="/emotes.gif" fetchPriority="low" />
      <span
        className="inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9 cursor-pointer"
        onClick={() => toggleDarkMode(!isDarkMode)}
      >
        {isDarkMode ? <SunIcon /> : <MoonStarIcon />}
      </span>
    </div>
  )
}
