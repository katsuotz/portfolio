'use client'

import dynamic from 'next/dynamic'
import { GlobalStateProvider } from '@/context/GlobalStateContext'

const ToggleDarkMode = dynamic(
  () => import('@/components/home/toggle-dark-mode'),
  { ssr: false }
)
const Banner = dynamic(() => import('@/components/home/banner'))
const WorkExperience = dynamic(
  () => import('@/components/home/work-experience')
)
const Education = dynamic(() => import('@/components/home/education'))
const Achievement = dynamic(() => import('@/components/home/achievement'))
const Skills = dynamic(() => import('@/components/home/skills'))
const Footer = dynamic(() => import('@/components/home/footer'))
const BackToTop = dynamic(() => import('@/components/home/back-to-top'))
const Project = dynamic(() => import('@/components/home/project'))

export default function Home() {
  return (
    <GlobalStateProvider>
      <ToggleDarkMode />
      <Banner />
      <WorkExperience />
      <Education />
      <Achievement />
      <Skills />
      <Project showAllProjects={false} />
      <Footer />
      <BackToTop />
    </GlobalStateProvider>
  )
}
