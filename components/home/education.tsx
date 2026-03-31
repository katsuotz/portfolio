'use client'

import { GraduationCapIcon } from 'lucide-react'
import Image from 'next/image'

export default function Education() {
  return (
    <section className="relative flex flex-col justify-center items-center lg:pt-20 pt-12 lg:pb-20 pb-12 bg-white dark:bg-zinc-950 border-t-4 border-black dark:border-white">
      <h2 className="text-3xl sm:text-5xl font-black mb-24 flex items-center uppercase tracking-tighter text-black dark:text-white">
        <GraduationCapIcon className="w-10 h-10 sm:w-12 sm:h-12 mr-4" />
        Education
      </h2>

      <div className="container">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 sm:col-span-6">
            <div className="flex flex-col px-10 pb-8 pt-16 relative mx-auto w-full border-4 border-black dark:border-white bg-blue-300 dark:bg-blue-800 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff] transition-transform hover:-translate-y-2 hover:translate-x-2 hover:shadow-none dark:hover:shadow-none">
              <div className="p-2 border-4 border-black dark:border-white bg-white dark:bg-black absolute left-10 top-0 -translate-y-1/2">
                <Image
                  unoptimized={true}
                  width={200}
                  height={200}
                  src="/education/unikom.webp"
                  alt="Universitas Komputer Indonesia"
                  className="w-20 h-20"
                />
              </div>
              <p className="font-black tracking-tight text-3xl sm:text-4xl uppercase text-black dark:text-white">
                Universitas Komputer Indonesia
              </p>
              <p className="text-xl text-black dark:text-white mt-4 font-bold uppercase">
                Bachelor Degree
              </p>
              <p className="text-xl text-black dark:text-white mt-1 font-medium">
                Information System
              </p>
              <div className="mt-6 inline-flex border-2 border-black dark:border-white bg-white dark:bg-black px-4 py-1 self-start">
                <p className="font-black text-xl text-black dark:text-white">
                  2023
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 mt-16 sm:mt-0">
            <div className="flex flex-col px-10 pb-8 pt-16 relative mx-auto w-full border-4 border-black dark:border-white bg-green-300 dark:bg-green-800 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff] transition-transform hover:-translate-y-2 hover:translate-x-2 hover:shadow-none dark:hover:shadow-none">
              <div className="p-2 border-4 border-black dark:border-white bg-white dark:bg-black absolute left-10 top-0 -translate-y-1/2">
                <Image
                  unoptimized={true}
                  width={200}
                  height={200}
                  src="/education/smkn4.webp"
                  alt="SMK Negeri 4 Bandung"
                  className="w-20 h-20"
                />
              </div>
              <p className="font-black tracking-tight text-3xl sm:text-4xl uppercase text-black dark:text-white">
                SMK Negeri 4 Bandung
              </p>
              <p className="text-xl text-black dark:text-white mt-4 font-bold uppercase">
                Vocational High School
              </p>
              <p className="text-xl text-black dark:text-white mt-1 font-medium">
                Software Engineering
              </p>
              <div className="mt-6 inline-flex border-2 border-black dark:border-white bg-white dark:bg-black px-4 py-1 self-start">
                <p className="font-black text-xl text-black dark:text-white">
                  2018
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
