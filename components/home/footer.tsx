'use client'

import SocialMedia from '@/components/home/social-media'

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/5 bg-[#050505] py-12 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-violet-500/5 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-violet-500/5 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <div className="mb-16 text-center space-y-6">
          <h2 className="text-3xl sm:text-7xl font-serif font-black text-[#FAFAFA] tracking-tighter whitespace-nowrap">
            Let's Collaborate
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Available for freelance opportunities and full-time roles. Open to
            discussing complex architectures and innovative ideas.
          </p>
        </div>

        <div className="flex gap-6 mb-20 justify-center">
          <SocialMedia />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center w-full pt-10 border-t border-white/10 gap-6">
          <p className="text-gray-400 text-sm tracking-wider uppercase font-medium">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-gray-300 font-bold ml-1">Katsuotz</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
