import Banner from '@/components/home/banner'
import Credentials from '@/components/home/credentials'
import EditorialShell from '@/components/home/editorial-shell'
import Photography from '@/components/home/photography'
import Project from '@/components/home/project'
import WorkExperience from '@/components/home/work-experience'

export default function Home() {
  return (
    <EditorialShell route="home">
      <Banner />
      <Project showAllProjects={false} variant="bento" />
      <WorkExperience />
      <Credentials />
      <Photography />
    </EditorialShell>
  )
}
