'use client'

import {
  ArrowDown,
  Code2Icon,
  HammerIcon,
  MailIcon,
  MonitorSmartphoneIcon,
  MapPinIcon,
  ScrollTextIcon,
  TvMinimalPlayIcon,
} from 'lucide-react'
import SocialMedia from '@/components/home/social-media'
import Link from 'next/link'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'
import LazySection from '@/components/home/lazy-section'

const FloatingOrbs = dynamic(() => import('@/components/home/floating-orbs'), {
  ssr: false,
})
const TextType = dynamic(
  () => import('@/components/reactbits/TextType/TextType'),
  {
    ssr: false,
  }
)

const YEAR = new Date().getFullYear()
const START_YEAR = 2019
const YEARS_OF_EXPERIENCE = YEAR - START_YEAR
const PANEL_CLASSNAME =
  'rounded-2xl border border-white/55 bg-white/70 p-5 shadow-[0_18px_80px_-55px_rgba(15,23,42,0.85)] backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/55 dark:shadow-[0_18px_80px_-55px_rgba(20,184,166,0.85)]'

export default function Banner() {
  const scrollPage = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative overflow-hidden bg-[#eef4ef] dark:bg-[#020b08]">
      <LazySection className="relative isolate flex min-h-svh w-full items-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(16,185,129,0.24),transparent_45%),radial-gradient(circle_at_84%_14%,rgba(251,146,60,0.16),transparent_36%),radial-gradient(circle_at_58%_82%,rgba(14,165,233,0.14),transparent_45%)] dark:bg-[radial-gradient(circle_at_18%_12%,rgba(45,212,191,0.2),transparent_45%),radial-gradient(circle_at_84%_14%,rgba(251,146,60,0.12),transparent_36%),radial-gradient(circle_at_58%_82%,rgba(56,189,248,0.16),transparent_45%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 dot-grid opacity-35 dark:opacity-20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 noise-overlay opacity-[0.04] dark:opacity-[0.07]"
        />
        <div
          aria-hidden
          className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-emerald-300/35 blur-3xl dark:bg-emerald-500/20"
        />
        <div
          aria-hidden
          className="absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl dark:bg-orange-400/20"
        />

        <FloatingOrbs />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-28 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-12 lg:pb-16 lg:pt-24">
          <div className="space-y-6">
            <div className="intro-y inline-flex items-center gap-2 rounded-full border border-emerald-300/70 bg-white/80 px-4 py-2 backdrop-blur-sm dark:border-emerald-700/60 dark:bg-slate-900/70">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold tracking-[0.16em] text-slate-600 uppercase dark:text-slate-200">
                Available for collaboration
              </span>
            </div>

            <p className="intro-y text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
              Software Engineer
            </p>

            <h1 className="intro-y text-[clamp(2.8rem,9.5vw,7rem)] leading-[0.95] font-black tracking-[-0.03em] text-slate-900 dark:text-slate-50">
              Muhammad Irfan Fakhri
              <span className="mt-2 block text-[clamp(2rem,7vw,4.5rem)] font-semibold tracking-[-0.02em] text-slate-600 dark:text-slate-300">
                Katsuotz
              </span>
            </h1>

            <div className={`${PANEL_CLASSNAME} intro-y max-w-2xl`}>
              <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400">
                Shipping now
              </p>
              <p className="min-h-[2rem] text-lg font-semibold text-slate-800 dark:text-slate-100">
                <TextType
                  text={[
                    'Software Engineer for product teams',
                    'Full-stack builder focused on outcomes',
                    'Frontend engineer with backend depth',
                    'Performance-minded web architect',
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {YEARS_OF_EXPERIENCE}+ years crafting high-traffic applications
                from concept to production with maintainable code and clear UX.
              </p>
            </div>

            <p className="intro-y max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              I design and ship resilient web products that balance visual
              craft, performance, and business goals.
            </p>

            <div className="intro-y flex flex-wrap gap-3">
              <Button
                asChild
                className="h-12 rounded-full bg-slate-900 px-6 text-base font-semibold text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
              >
                <Link href="/projects">
                  <HammerIcon className="size-4" />
                  Explore Projects
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-slate-300/80 bg-white/75 px-6 text-base font-semibold text-slate-700 hover:bg-white dark:border-slate-700 dark:bg-slate-900/75 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                <Link href="/showcase">
                  <TvMinimalPlayIcon className="size-4" />
                  Showcases
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-slate-300/80 bg-white/75 px-6 text-base font-semibold text-slate-700 hover:bg-white dark:border-slate-700 dark:bg-slate-900/75 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                <Link href="/log">
                  <ScrollTextIcon className="size-4" />
                  Logs
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-emerald-300/80 bg-emerald-50/80 px-6 text-base font-semibold text-emerald-800 hover:bg-emerald-100 dark:border-emerald-700/70 dark:bg-emerald-950/50 dark:text-emerald-200 dark:hover:bg-emerald-900/60"
              >
                <a href="mailto:m.irfan.fakhri66@gmail.com">
                  <MailIcon className="size-4" />
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="intro-y flex flex-wrap items-center gap-3 text-slate-600 dark:text-slate-300 [&_a]:inline-flex [&_a]:size-11 [&_a]:items-center [&_a]:justify-center [&_a]:rounded-full [&_a]:border [&_a]:border-slate-300/80 [&_a]:bg-white/70 [&_a]:backdrop-blur-sm [&_a]:transition-all [&_a:hover]:-translate-y-0.5 [&_a:hover]:border-slate-400 [&_a:hover]:bg-white [&_a:hover]:text-slate-900 [&_a]:dark:border-slate-700 [&_a]:dark:bg-slate-900/65 [&_a:hover]:dark:border-slate-500 [&_a:hover]:dark:bg-slate-900 [&_a:hover]:dark:text-white">
              <SocialMedia />
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Async-friendly communication
              </span>
            </div>
          </div>

          <div className="intro-y w-full max-w-md justify-self-end">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className={PANEL_CLASSNAME}>
                <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400">
                  Location
                </p>
                <p className="mt-2 flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-100">
                  <MapPinIcon className="size-4 text-emerald-500" />
                  Indonesia
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Remote, hybrid, and distributed teams
                </p>
              </div>

              <div className={PANEL_CLASSNAME}>
                <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400">
                  Experience
                </p>
                <p className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-slate-50">
                  {YEARS_OF_EXPERIENCE}+
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Years delivering production systems
                </p>
              </div>

              <div className={`${PANEL_CLASSNAME} sm:col-span-2`}>
                <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400">
                  Focus
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    'Design systems',
                    'Web performance',
                    'Product engineering',
                    'Scalable backends',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`${PANEL_CLASSNAME} sm:col-span-2`}>
                <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400">
                  Delivery style
                </p>
                <div className="mt-2 space-y-2">
                  <p className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                    <Code2Icon className="size-4 text-sky-500" />
                    Product-first implementation
                  </p>
                  <p className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                    <MonitorSmartphoneIcon className="size-4 text-orange-500" />
                    Accessible and responsive interfaces
                  </p>
                  <p className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                    <MailIcon className="size-4 text-emerald-500" />
                    Clear communication and handover
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
          <ShimmerButton
            onClick={scrollPage}
            className="intro-y border border-white/35 bg-white/80 text-slate-900 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/75 dark:text-slate-100"
            shimmerColor="#5eead4"
            background="rgba(255, 255, 255, 0.9)"
          >
            <ArrowDown className="mr-2 size-5 animate-bounce dark:stroke-white" />
            Scroll Portfolio
          </ShimmerButton>
        </div>
      </LazySection>
    </section>
  )
}
