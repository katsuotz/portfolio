'use client'

import { GraduationCapIcon } from 'lucide-react'
import Image from 'next/image'

export default function Education() {
  return (
    <section className="relative flex flex-col justify-center items-center lg:pt-20 pt-12 lg:pb-20 pb-12 section-gradient-alt">
      <h2 className="text-3xl sm:text-5xl font-bold mb-24 flex items-center section-title">
        <GraduationCapIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4 icon-glow text-cyan-500 dark:text-cyan-400" />
        Education
      </h2>

      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6">
            <div className="flex flex-col px-10 pb-6 pt-16 relative mx-auto w-full rounded-2xl glass-card-enhanced">
              <div className="p-4 rounded-[2.4rem] absolute left-10 top-0 -translate-y-1/2">
                <Image
                  unoptimized={true}
                  width={200}
                  height={200}
                  src="/education/unikom.webp"
                  alt="Universitas Komputer Indonesia"
                  className="w-24 h-24"
                />
              </div>
              <p className="font-bold tracking-wide text-2xl sm:text-3xl">
                Universitas Komputer Indonesia
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Bachelor Degree
              </p>
              <p className="text-xl">Information System</p>
              <p className="font-semibold text-xl">2023</p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 mt-12 sm:mt-0">
            <div className="flex flex-col px-10 pb-6 pt-16 relative mx-auto w-full rounded-2xl glass-card-enhanced">
              <div className="p-4 rounded-[2.4rem] absolute left-10 top-0 -translate-y-1/2">
                <Image
                  unoptimized={true}
                  width={200}
                  height={200}
                  src="/education/smkn4.webp"
                  alt="SMK Negeri 4 Bandung"
                  className="w-24 h-24"
                />
              </div>
              <p className="font-bold tracking-wide text-2xl sm:text-3xl">
                SMK Negeri 4 Bandung
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Vocational High School
              </p>
              <p className="text-xl">Software Engineering</p>
              <p className="font-semibold text-xl">2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
