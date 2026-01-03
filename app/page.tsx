'use client'

import dynamic from 'next/dynamic'
import ToggleDarkMode from '@/components/home/toggle-dark-mode'
import Banner from '@/components/home/banner'
import LazySection from '@/components/home/lazy-section'
import Footer from '@/components/home/footer'
import BackToTop from '@/components/home/back-to-top'
import { GlobalStateProvider } from '@/context/GlobalStateContext'

const WorkExperience = dynamic(
  () => import('@/components/home/work-experience'),
  { ssr: true }
)
const Education = dynamic(() => import('@/components/home/education'), {
  ssr: true,
})
const Achievement = dynamic(() => import('@/components/home/achievement'), {
  ssr: true,
})
const Skills = dynamic(() => import('@/components/home/skills'), { ssr: true })
const Project = dynamic(() => import('@/components/home/project'), {
  ssr: true,
})

export default function Home() {
  return (
    <GlobalStateProvider>
      <ToggleDarkMode />
      <Banner />
      <LazySection>
        <WorkExperience />
      </LazySection>
      <LazySection>
        <Education />
      </LazySection>
      <LazySection>
        <Achievement />
      </LazySection>
      <LazySection>
        <Skills />
      </LazySection>
      <LazySection>
        <Project showAllProjects={false} />
      </LazySection>
      <Footer />
      <BackToTop />
    </GlobalStateProvider>
  )
}
