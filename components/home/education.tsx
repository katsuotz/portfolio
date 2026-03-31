'use client'

import { GraduationCapIcon } from 'lucide-react'
import Image from 'next/image'

export default function Education() {
  return (
    <section className="relative flex flex-col justify-center items-center py-12 sm:py-32 w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-center gap-4 mb-20 sm:mb-20 intro-y w-full">
        <GraduationCapIcon className="w-8 h-8 sm:w-12 sm:h-12 text-violet-500 shrink-0" />
        <h2 className="text-3xl sm:text-7xl font-serif font-black text-[#FAFAFA] tracking-tighter text-center whitespace-nowrap">
          Education
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
        {/* University */}
        <div className="intro-y relative" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col h-full px-8 pb-8 pt-16 relative rounded-3xl bg-white/2 backdrop-blur-xl border border-white/5 hover:bg-white/4 hover:border-white/10 transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]">
            <div className="absolute left-8 top-0 -translate-y-1/2 w-24 h-24 rounded-2xl bg-[#050505] border border-white/10 flex items-center justify-center shadow-xl overflow-hidden p-3 group-hover:border-violet-500/30 transition-colors">
              <Image
                unoptimized={true}
                width={200}
                height={200}
                src="/education/unikom.webp"
                alt="Universitas Komputer Indonesia"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>

            <h3 className="font-serif font-bold tracking-wide text-2xl sm:text-3xl lg:text-4xl text-[#FAFAFA] mt-4">
              Universitas Komputer Indonesia
            </h3>

            <div className="mt-6 flex flex-col gap-2">
              <p className="text-xl sm:text-2xl text-violet-400 font-bold">
                Bachelor Degree
              </p>
              <p className="text-lg text-gray-400 font-medium">
                Information System
              </p>
            </div>

            <div className="mt-auto pt-8">
              <span className="inline-block px-4 py-2 text-base font-mono font-bold text-gray-500 bg-white/3 border border-white/5 rounded-lg tracking-wider">
                Class of 2023
              </span>
            </div>
          </div>
        </div>

        {/* High School */}
        <div
          className="intro-y relative mt-12 md:mt-0"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="flex flex-col h-full px-8 pb-8 pt-16 relative rounded-3xl bg-white/2 backdrop-blur-xl border border-white/5 hover:bg-white/4 hover:border-white/10 transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]">
            <div className="absolute left-8 top-0 -translate-y-1/2 w-24 h-24 rounded-2xl bg-[#050505] border border-white/10 flex items-center justify-center shadow-xl overflow-hidden p-3 group-hover:border-violet-500/30 transition-colors">
              <Image
                unoptimized={true}
                width={200}
                height={200}
                src="/education/smkn4.webp"
                alt="SMK Negeri 4 Bandung"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>

            <h3 className="font-serif font-bold tracking-wide text-2xl sm:text-3xl lg:text-4xl text-[#FAFAFA] mt-4">
              SMK Negeri 4 Bandung
            </h3>

            <div className="mt-6 flex flex-col gap-2">
              <p className="text-xl sm:text-2xl text-violet-400 font-bold">
                Vocational High School
              </p>
              <p className="text-lg text-gray-400 font-medium">
                Software Engineering
              </p>
            </div>

            <div className="mt-auto pt-8">
              <span className="inline-block px-4 py-2 text-base font-mono font-bold text-gray-500 bg-white/3 border border-white/5 rounded-lg tracking-wider">
                Class of 2018
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
