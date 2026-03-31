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
        'lg:pt-20 pt-12 lg:pb-20 pb-12 footer bg-zinc-100 dark:bg-zinc-900 border-t-4 border-black dark:border-white'
      )}
    >
      <div className="container max-w-md mx-auto">
        <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-6 sm:p-8 text-center shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff] transition-transform hover:-translate-y-2 hover:translate-x-2 hover:shadow-none dark:hover:shadow-none">
          <div className="flex gap-4 mb-6 justify-center bg-blue-300 dark:bg-blue-800 border-2 border-black dark:border-white p-4">
            <SocialMedia />
          </div>
          <footer className="relative flex flex-col justify-center items-center">
            <p className="text-black dark:text-white tracking-widest uppercase font-black text-sm">
              &copy; {new Date().getFullYear()}{' '}
              <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 mx-1">
                Irfan Fakhri
              </span>
              <br className="sm:hidden mt-2" />
              <span className="hidden sm:inline"> • </span>katsuotz.com
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
