'use client'

import SocialMedia from "@/components/home/social-media";

export default function Footer() {
  return (
    <div className="lg:pt-20 pt-12 lg:pb-20 pb-12">
      <div className="flex gap-4 mb-6 justify-center">
        <SocialMedia/>
      </div>
      <footer className="relative flex flex-col justify-center items-center">
        <p className="text-gray-400 tracking-wide">&copy; 2023 <span className="text-white font-medium">Irfan Fakhri</span>. katsuotz.id</p>
      </footer>
    </div>
  )
}
