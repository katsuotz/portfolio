'use client'

import ToggleDarkMode from '@/components/home/toggle-dark-mode'
import Banner from '@/components/home/banner'
import WorkExperience from '@/components/home/work-experience'
import Education from '@/components/home/education'
import Achievement from '@/components/home/achievement'
import Skills from '@/components/home/skills'
import Footer from '@/components/home/footer'
import BackToTop from '@/components/home/back-to-top'
import Project from '@/components/home/project'
import { GlobalStateProvider } from '@/context/GlobalStateContext'

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
