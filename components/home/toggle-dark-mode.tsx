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
    <div className="absolute top-0 right-0 pr-6 pt-6 z-20">
      <link rel="preload" as="image" href="/emotes.gif" fetchPriority="low" />
      <div
        className="glass-card-enhanced rounded-full p-2.5 cursor-pointer hover:border-amber-500/30 dark:hover:border-blue-400/30 transition-all duration-300 group"
        onClick={() => toggleDarkMode(!isDarkMode)}
      >
        {isDarkMode ? (
          <SunIcon className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition-colors" />
        ) : (
          <MoonStarIcon className="w-5 h-5 text-slate-600 group-hover:text-blue-500 transition-colors" />
        )}
      </div>
    </div>
  )
}
