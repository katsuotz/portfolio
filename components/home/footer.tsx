'use client'

import SocialMedia from '@/components/home/social-media'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { editorialType } from '@/lib/editorial-typography'

export default function Footer({
  variant = 'default',
}: {
  variant?: 'editorial' | 'default'
}) {
  if (variant === 'editorial') {
    return (
      <footer
        id="contact"
        className="mx-auto w-full max-w-[1440px] border-t border-[var(--home-line)] bg-[var(--home-canvas)] px-5 pt-16 pb-6 text-[var(--home-ink)] transition-[background-color,color,border-color] duration-200 md:px-8 md:pt-24 lg:px-16 motion-reduce:transition-none"
      >
        <div>
          <h2 className="max-w-[14ch] font-[family-name:var(--font-home-display)] text-[clamp(3rem,8vw,6rem)] leading-[0.86] font-normal tracking-[-0.04em]">
            Have a hard problem?
            <span className="block text-[var(--home-muted)]">
              Let&apos;s make it clear.
            </span>
          </h2>
        </div>

        <a
          className="mt-12 flex items-center justify-between border-y border-[var(--home-line)] py-5 text-[clamp(1rem,2.5vw,2rem)] tracking-[-0.035em] text-[var(--home-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] max-[420px]:text-[0.9rem] [&_svg]:size-6 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:-translate-y-1 hover:[&_svg]:translate-x-1 motion-reduce:[&_svg]:transform-none motion-reduce:[&_svg]:transition-none"
          href="mailto:m.irfan.fakhri66@gmail.com"
        >
          <span>m.irfan.fakhri66@gmail.com</span>
          <ArrowUpRightIcon aria-hidden="true" />
        </a>

        <div
          className={cn(
            'mt-12 grid grid-cols-1 items-center gap-8 font-[family-name:var(--font-home-mono)] tracking-[0.07em] text-[var(--home-muted)] uppercase min-[421px]:grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr]',
            editorialType.micro
          )}
        >
          <p>© {new Date().getFullYear()} Muhammad Irfan Fakhri</p>
          <div
            className="row-start-1 flex gap-4 min-[421px]:col-span-2 md:col-span-1 md:col-start-2 [&_a]:grid [&_a]:size-11 [&_a]:place-items-center [&_a]:border [&_a]:border-[var(--home-line)] [&_a]:transition-colors [&_a]:duration-200 [&_a:hover]:border-[var(--home-accent)] [&_a:hover]:text-[var(--home-accent)] [&_svg]:size-4"
            aria-label="Social links"
          >
            <SocialMedia />
          </div>
          <a
            className="inline-flex min-h-11 items-center justify-self-start text-[var(--home-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] min-[421px]:col-start-2 min-[421px]:justify-self-end md:col-start-3"
            href="#top"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    )
  }

  return (
    <footer className="relative w-full border-t border-white/5 bg-[#050505] py-12 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-violet-500/5 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-violet-500/5 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <div className="mb-16 text-center space-y-6">
          <h2 className="text-3xl sm:text-7xl font-serif font-black text-[#FAFAFA] tracking-tighter whitespace-nowrap">
            Let's Collaborate
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Available for freelance opportunities and full-time roles. Open to
            discussing complex architectures and innovative ideas.
          </p>
        </div>

        <div className="flex gap-6 mb-20 justify-center">
          <SocialMedia />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center w-full pt-10 border-t border-white/10 gap-6">
          <p className="text-gray-400 text-sm tracking-wider uppercase font-medium">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-gray-300 font-bold ml-1">Katsuotz</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
