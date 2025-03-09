'use client'

import {GraduationCapIcon} from "lucide-react";
import Image from "next/image";

export default function Education() {
  return (
    <section className="relative flex flex-col justify-center items-center lg:pt-20 pt-12 lg:pb-20 pb-12">
      <h3 className="text-3xl sm:text-5xl font-bold mb-24 flex items-center">
        <GraduationCapIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4"/>
        Education
      </h3>

      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6">
            <div className="flex flex-col px-10 pb-6 pt-16 relative mx-auto w-full rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%] bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <div className="p-4 rounded-[2.4rem] absolute left-10 top-0 -translate-y-1/2">
                <Image unoptimized={true} width={200} height={200} src="/education/unikom.webp" alt="Universitas Komputer Indonesia" className="w-24 h-24"/>
              </div>
              <p className="font-bold tracking-wide text-2xl sm:text-3xl">Universitas Komputer Indonesia</p>
              <p className="font-light text-xl text-gray-600 dark:text-gray-400">Bachelor Degree</p>
              <p className="text-xl">Information System</p>
              <p className="font-semibold text-xl">2023</p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 mt-12 sm:mt-0">
            <div className="flex flex-col px-10 pb-6 pt-16 relative mx-auto w-full rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%] bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <div className="p-4 rounded-[2.4rem] absolute left-10 top-0 -translate-y-1/2">
                <Image unoptimized={true} width={200} height={200} src="/education/smkn4.webp" alt="SMK Negeri 4 Bandung" className="w-24 h-24"/>
              </div>
              <p className="font-bold tracking-wide text-2xl sm:text-3xl">SMK Negeri 4 Bandung</p>
              <p className="font-light text-xl text-gray-600 dark:text-gray-400">Vocational High School</p>
              <p className="text-xl">Software Engineering</p>
              <p className="font-semibold text-xl">2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
