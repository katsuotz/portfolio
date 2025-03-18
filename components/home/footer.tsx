'use client'

import SocialMedia from "@/components/home/social-media";

export default function Footer() {
  return (
    <div className="lg:pt-20 pt-12 lg:pb-20 pb-12 footer">
      <div className="flex gap-4 mb-6 justify-center">
        <SocialMedia/>
      </div>
      <footer className="relative flex flex-col justify-center items-center">
        <p className="text-gray-600 dark:text-gray-300 tracking-wide">&copy; {new Date().getFullYear()} <span className="text-black dark:text-white font-medium">Irfan Fakhri</span>. katsuotz.com</p>
      </footer>
    </div>
  )
}
