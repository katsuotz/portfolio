'use client'

import Showcase from '@/components/home/showcase'
import Footer from '@/components/home/footer'
import Link from 'next/link'
import { ArrowLeftCircleIcon } from 'lucide-react'
import BackToTop from '@/components/home/back-to-top'
import { GlobalStateProvider } from '@/context/GlobalStateContext'

export default function Showcases() {
  return (
    <GlobalStateProvider>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-violet-400 transition-colors bg-white/2 backdrop-blur-md border border-white/5 hover:border-violet-500/30 px-4 py-2 rounded-full w-fit"
        >
          <ArrowLeftCircleIcon className="mr-2 w-4 h-4" />
          Back to Home
        </Link>
      </div>
      <Showcase />
      <BackToTop />
      <Footer />
    </GlobalStateProvider>
  )
}
