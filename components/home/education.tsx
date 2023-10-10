'use client'


import {GraduationCap} from "lucide-react";

export default function Education() {
  return (
    <section className="relative lg:py-20 bg-white/[10%]">
      <div className="container">
        <div className="flex flex-col sm:flex-row w-full sm:gap-32 items-start">
          <div className="flex items-center mr-auto">
            <GraduationCap className="h-10 w-10 mr-4"/>
            <h3 className="text-5xl font-bold mr-auto">
              Education
            </h3>
          </div>
          <div className="flex flex-col">
            <img src="/education/unikom.png" alt="Universitas Komputer Indonesia" className="w-28 h-28 mb-2"/>
            <p className="tracking-wide">Universitas Komputer Indonesia</p>
            <p className="text-gray-400 font-light">Bachelor Degree</p>
            <p>Information System</p>
            <p className="">2023</p>
          </div>
          <div className="flex flex-col">
            <img src="/education/smkn4.png" alt="SMK Negeri 4 Bandung" className="w-28 h-28 mb-2"/>
            <p className="tracking-wide">SMK Negeri 4 Bandung</p>
            <p className="text-gray-400 font-light">Vocational School</p>
            <p>Software Engineering</p>
            <p className="">2018</p>
          </div>
        </div>
      </div>

    </section>
  )
}
