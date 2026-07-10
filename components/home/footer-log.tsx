'use client'

import SocialMedia from '@/components/home/social-media'
import { cn } from '@/lib/utils'
import { editorialType } from '@/lib/editorial-typography'

export default function FooterLog() {
  return (
    <div className={cn('lg:pt-20 pt-12 lg:pb-20 pb-12 footer')}>
      <div className="container max-w-md mx-auto">
        <div className="rounded-2xl p-6 text-center hover:border-purple-500/30 dark:hover:border-purple-400/30 transition-all duration-300">
          <div className="flex gap-4 mb-4 justify-center">
            <SocialMedia />
          </div>
          <footer className="relative flex flex-col justify-center items-center">
            <p
              className={cn(
                'text-slate-600 dark:text-slate-400 tracking-wide !mb-0 font-medium',
                editorialType.secondary
              )}
            >
              &copy; {new Date().getFullYear()}{' '}
              <span className="font-bold text-slate-800 dark:text-slate-200">
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
