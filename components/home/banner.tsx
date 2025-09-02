'use client'

import {
  ArrowDown,
  HammerIcon,
  MailIcon,
  MapIcon,
  ScrollTextIcon,
  TvMinimalPlayIcon,
} from 'lucide-react'
import SocialMedia from '@/components/home/social-media'
import Link from 'next/link'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useGlobalState } from '@/context/GlobalStateContext'
const Dither = dynamic(() => import('@/components/reactbits/Dither/Dither'), {
  ssr: false,
})
const TextType = dynamic(
  () => import('@/components/reactbits/TextType/TextType'),
  {
    ssr: false,
  }
)

export default function Banner() {
  const year = new Date().getFullYear()
  const startYear = 2019

  const scrollPage = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  const [pixelSize, setPixelSize] = useState(6)

  useEffect(() => {
    const updatePixelSize = () => {
      if (window.innerWidth < 768) {
        setPixelSize(6)
      } else {
        setPixelSize(2.5)
      }
    }

    updatePixelSize()
    window.addEventListener('resize', updatePixelSize)
    return () => window.removeEventListener('resize', updatePixelSize)
  }, [])

  const { globalState } = useGlobalState()

  return (
    <section className="w-full h-svh relative flex justify-center items-center overflow-hidden">
      <div className="w-full h-svh absolute opacity-40 dark:opacity-50 pointer-events-none">
        <Dither
          waveColor={
            globalState.theme === 'dark' ? [0.3, 0.3, 0.8] : [0.4, 0.4, 0.8]
          }
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={4}
          waveSpeed={0.03}
          pixelSize={pixelSize}
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 pb-20 px-8">
        <p className="text-2xl sm:text-2xl lg:text-5xl text-center intro-y mt-10 lg:mt-0 leading-tight sm:leading-normal">
          Muhammad Irfan Fakhri
        </p>
        <h1 className="text-7xl sm:text-7xl lg:text-[14rem] font-black leading-tight tracking-wider flex flex-wrap justify-center lg:-mt-5 intro-y bg-linear-to-r from-[#E44C99] via-[#E44C99] to-[#01AA13] bg-clip-text text-transparent">
          <span className="text-[#E44C99]">Katsu</span>
          <span className="text-[#01AA13]">otz</span>
        </h1>
        <div className="text-2xl sm:text-3xl intro-y">
          <div className="text-center min-h-[32px] sm:min-h-[36px] font-bold">
            <TextType
              text={[
                'Software Engineer 👷‍♂️',
                'Full-Stack Developer 🐧',
                'Frontend Developer 🎨',
                'Backend Developer 🛠️',
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
          <p className="text-center">{year - startYear}+ years experience</p>
        </div>
        <div className="flex justify-center gap-4 mt-6 intro-y">
          <SocialMedia />
        </div>

        <div className="flex flex-wrap justify-center intro-y gap-4 mt-10">
          <Link href="/projects" passHref>
            <Button className="rounded-full" variant="default">
              <HammerIcon className="w-4 h-4" /> Projects
            </Button>
          </Link>
          <Link href="/showcase" passHref>
            <Button className="rounded-full" variant="default">
              <TvMinimalPlayIcon className="w-4 h-4" /> Showcases
            </Button>
          </Link>
          <Link href="/log" passHref>
            <Button className="rounded-full" variant="default">
              <ScrollTextIcon className="w-4 h-4" /> Logs
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-28 md:bottom-10 flex justify-center mt-14">
        <ShimmerButton onClick={scrollPage} className="intro-y">
          <ArrowDown className="size-5 mr-2 dark:stroke-black" />
          See More
        </ShimmerButton>
      </div>

      <div className="absolute top-0 left-0 pl-10 pt-10">
        <p className="flex items-center intro-y">
          <MailIcon className="w-4 h-4 mr-2" /> m.irfan.fakhri66@gmail.com
        </p>
        <p className="flex items-center intro-y">
          <MapIcon className="w-4 h-4 mr-2" /> Indonesia
        </p>
      </div>
    </section>
  )
}
