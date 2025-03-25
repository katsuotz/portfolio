export const metadata = {
  title: 'Logs | Katsuotz',
  description: "Katsuotz's Logs.",
}

import Link from 'next/link'

export default function LogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="log" style={{ fontFamily: 'monospace' }}>
      <div className="container pt-10 flex justify-center gap-5 log-nav">
        <Link
          href="/"
          className="text-white flex items-center text-sm border-b-2 border-dotted border-blue-400 dark:border-white"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="text-white flex items-center text-sm border-b-2 border-dotted border-blue-400 dark:border-white"
        >
          Projects
        </Link>
        <Link
          href="/showcase"
          className="text-white flex items-center text-sm border-b-2 border-dotted border-blue-400 dark:border-white"
        >
          Showcase
        </Link>
        <Link
          href="/log"
          className="text-white flex items-center text-sm border-b-2 border-dotted border-blue-400 dark:border-white"
        >
          Logs
        </Link>
      </div>
      {children}
    </div>
  )
}
