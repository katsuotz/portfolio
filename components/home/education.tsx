'use client'

import { GraduationCapIcon } from '@phosphor-icons/react'
import Image from 'next/image'

export default function Education() {
  return (
    <section
      id="education"
      className="relative flex flex-col justify-center items-center py-12 sm:py-32 w-full max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="flex items-center justify-center gap-4 mb-20 sm:mb-28 intro-y w-full">
        <GraduationCapIcon
          className="w-8 h-8 sm:w-16 sm:h-16 text-violet-500 shrink-0"
          weight="regular"
        />
        <h2 className="text-3xl sm:text-7xl font-serif font-black text-[#FAFAFA] tracking-tighter text-center">
          Education
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
        {/* University */}
        <div
          className="intro-y relative group"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex flex-col h-full px-8 pb-8 pt-16 relative rounded-3xl bg-white/2 backdrop-blur-xl border border-white/5 hover:bg-white/4 hover:border-violet-500/30 transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]">
            <div className="absolute left-8 top-0 -translate-y-1/2 w-24 h-24 rounded-2xl bg-[#1a1a1a] flex items-center justify-center border border-white/5 overflow-hidden p-3 group-hover:border-violet-500/20 transition-all duration-300">
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
          className="intro-y relative group mt-12 md:mt-0"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="flex flex-col h-full px-8 pb-8 pt-16 relative rounded-3xl bg-white/2 backdrop-blur-xl border border-white/5 hover:bg-white/4 hover:border-violet-500/30 transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]">
            <div className="absolute left-8 top-0 -translate-y-1/2 w-24 h-24 rounded-2xl bg-[#1a1a1a] flex items-center justify-center border border-white/5 overflow-hidden p-3 group-hover:border-violet-500/20 transition-all duration-300">
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
