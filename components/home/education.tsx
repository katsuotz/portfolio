'use client'


import {GraduationCapIcon} from "lucide-react";

export default function Education() {
  return (
    <section className="relative py-8 sm:py-20 bg-white/[10%]">
      <div className="container">
        <div className="flex flex-col sm:flex-row w-full items-start">
          <div className="flex items-center mx-auto sm:ml-0">
            <h3 className="text-3xl sm:text-5xl font-bold mb-12 flex items-center">
              <GraduationCapIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4"/>
              Education
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-32 gap-8 w-full sm:w-auto">
            <div className="flex flex-col items-center sm:items-start">
              <img loading="lazy" src="/education/unikom.png" alt="Universitas Komputer Indonesia" className="w-28 h-28 mb-2"/>
              <p className="tracking-wide">Universitas Komputer Indonesia</p>
              <p className="text-gray-400 font-light">Bachelor Degree</p>
              <p>Information System</p>
              <p className="">2023</p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <img loading="lazy" src="/education/smkn4.png" alt="SMK Negeri 4 Bandung" className="w-28 h-28 mb-2"/>
              <p className="tracking-wide">SMK Negeri 4 Bandung</p>
              <p className="text-gray-400 font-light">Vocational School</p>
              <p>Software Engineering</p>
              <p className="">2018</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
