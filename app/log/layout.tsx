export const metadata = {
  title: 'Logs | Katsuotz',
  description: "Katsuotz's Logs.",
}

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { editorialType } from '@/lib/editorial-typography'

export default function LogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'log [&_h2]:xl:text-2xl [&_h3]:xl:text-xl',
        editorialType.logBody
      )}
    >
      <div className="container flex flex-wrap justify-center gap-3 pt-10 sm:gap-5 log-nav">
        <Link
          href="/"
          className={cn(
            'flex min-h-11 items-center border-b-2 border-dotted border-blue-400 px-1 text-slate-800 dark:border-white dark:text-white',
            editorialType.secondary
          )}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={cn(
            'flex min-h-11 items-center border-b-2 border-dotted border-blue-400 px-1 text-slate-800 dark:border-white dark:text-white',
            editorialType.secondary
          )}
        >
          Projects
        </Link>
        <Link
          href="/showcase"
          className={cn(
            'flex min-h-11 items-center border-b-2 border-dotted border-blue-400 px-1 text-slate-800 dark:border-white dark:text-white',
            editorialType.secondary
          )}
        >
          Showcases
        </Link>
        <Link
          href="/log"
          className={cn(
            'flex min-h-11 items-center border-b-2 border-dotted border-blue-400 px-1 text-slate-800 dark:border-white dark:text-white',
            editorialType.secondary
          )}
        >
          Logs
        </Link>
      </div>
      {children}
    </div>
  )
}
