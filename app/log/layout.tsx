export const metadata = {
  title: 'Logs | Katsuotz',
  description: 'Katsuotz\'s Logs.',
}

import Link from "next/link";

export default function LogLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className="relative" style={{fontFamily: 'monospace'}}>
      <div className="container mt-10 flex justify-center gap-5">
        <Link href="/" className="flex items-center text-sm border-b border-dotted border-white">
          Home
        </Link>
        <Link href="/projects" className="flex items-center text-sm border-b border-dotted border-white">
          Projects
        </Link>
        <Link href="/log" className="flex items-center text-sm border-b border-dotted border-white">
          Logs
        </Link>
      </div>
      {children}
    </div>
  )
}
