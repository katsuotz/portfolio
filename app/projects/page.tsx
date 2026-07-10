import EditorialShell from '@/components/home/editorial-shell'
import Project from '@/components/home/project'

export default function Projects() {
  return (
    <EditorialShell route="projects" showBackToTop>
      <Project showAllProjects variant="registry" />
    </EditorialShell>
  )
}
