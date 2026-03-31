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
      <button
        className="p-3 bg-white dark:bg-black border-4 border-black dark:border-white shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-none dark:hover:shadow-none group"
        onClick={() => toggleDarkMode(!isDarkMode)}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <SunIcon className="w-6 h-6 text-black dark:text-white" />
        ) : (
          <MoonStarIcon className="w-6 h-6 text-black dark:text-white" />
        )}
      </button>
    </div>
  )
}
