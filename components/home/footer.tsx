'use client'

import SocialMedia from '@/components/home/social-media'
import { cn } from '@/lib/utils'

export default function Footer({
  showGradient = true,
}: {
  showGradient?: boolean
}) {
  return (
    <div
      className={cn(
        'lg:pt-20 pt-12 lg:pb-20 pb-12 footer',
        showGradient ? 'section-gradient-alt' : ''
      )}
    >
      <div className="container max-w-md mx-auto">
        <div className="glass-card rounded-2xl p-6 text-center">
          <div className="flex gap-4 mb-4 justify-center">
            <SocialMedia />
          </div>
          <footer className="relative flex flex-col justify-center items-center">
            <p className="text-slate-600 dark:text-slate-400 tracking-wide !mb-0">
              &copy; {new Date().getFullYear()}{' '}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent font-semibold">
                Irfan Fakhri
              </span>
              . katsuotz.com
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
