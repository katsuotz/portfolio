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
            <div className="flex flex-col px-10 pb-6 pt-20 bg-background-gradient rounded-3xl relative">
              <div className="p-4 rounded-[2.4rem] absolute left-10 top-0 -translate-y-1/2">
                <Image unoptimized={true} width={200} height={200} src="/education/unikom.png" alt="Universitas Komputer Indonesia" className="w-24 h-24"/>
              </div>
              <p className="font-bold tracking-wide text-3xl">Universitas Komputer Indonesia</p>
              <p className="font-light text-xl text-gray-400">Bachelor Degree</p>
              <p className="text-xl">Information System</p>
              <p className="font-semibold text-xl">2023</p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6">
            <div className="flex flex-col px-10 pb-6 pt-20 bg-background-gradient rounded-3xl relative">
              <div className="p-4 rounded-[2.4rem] absolute left-10 top-0 -translate-y-1/2">
                <Image unoptimized={true} width={200} height={200} src="/education/smkn4.png" alt="SMK Negeri 4 Bandung" className="w-24 h-24"/>
              </div>
              <p className="font-bold tracking-wide text-3xl">SMK Negeri 4 Bandung</p>
              <p className="font-light text-xl text-gray-400">Vocational High School</p>
              <p className="text-xl">Software Engineering</p>
              <p className="font-semibold text-xl">2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
